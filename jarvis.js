'use strict';
const adapterName = require('./io-package.json').common.name;
const utils = require('@iobroker/adapter-core'); // Get common adapter utils
const _request = require('request-promise');
const _crypto = require('crypto');


/*
 * internal libraries
 */
const Library = require('./lib/library.js');


/*
 * variables initiation
 */
let adapter;
let library;
let unloaded;
let NOTIFICATIONS = [];
let SETTINGS = {};


/*
 * ADAPTER
 *
 */
function startAdapter(options) {
	options = options || {};
	adapter = new utils.Adapter({ ...options, name: adapterName });
	
	/*
	 * ADAPTER READY
	 *
	 */
	adapter.on('ready', function() {
		unloaded = false;
		library = new Library(adapter);
		
		// Check Node.js Version
		let version = parseInt(process.version.substr(1, process.version.indexOf('.')-1));
		if (version <= 6) {
			return library.terminate('This Adapter is not compatible with your Node.js Version ' + process.version + ' (must be >= Node.js v7).', true);
		}
		
		// detect socket port
		const portDetection = new Promise(resolve => {
			adapter.getObjectView('system', 'instance', { 'startkey': 'system.adapter.socketio.', 'endkey': 'system.adapter.socketio.999' }, (err, instances) => {
				const obj = (instances && instances.rows && instances.rows[0] && instances.rows[0].value) || null;
				
				// no socket.io adapter installed
				if (obj === null) {
					adapter.getForeignObject('system.adapter.web.0', (err, obj) => {
						resolve({
							'port': (obj && obj.native && obj.native.port) || 8082,
							'secure': obj && obj.native && obj.native.secure !== undefined ? obj.native.secure : false,
						});
					});
				}

				// socket.io
				else {
					resolve({
						'port': (obj && obj.native && obj.native.port) || 8084,
						'secure': obj && obj.native && obj.native.secure !== undefined ? obj.native.secure : false,
					});
				}
			});
		});
		
		// write port to config
		portDetection.then(config => {
			adapter.log.info('Socket port detected: ' + config.port);
			
			if (adapter.config.socketPort !== config.port || adapter.config.socketSecure !== config.secure) {
				adapter.getForeignObject('system.adapter.' + adapter.namespace, (err, obj) => {
					
					if (err || !obj || !obj.native) {
						return library.terminate('Error system.adapter.' + adapter.namespace + ' not found!');
					}
					
					obj.native['socketPort'] = config.port;
					obj.native['socketSecure'] = config.secure;
					adapter.setForeignObject(obj._id, obj);
				});
			}
		});
	
		// all ok
		library.set(Library.CONNECTION, true);
		
		// create additional states and subscribe
		library.set({ 'node': 'info.data', 'role': 'json', 'description': 'Data transfer to jarvis' }, '');
		library.set({ 'node': 'info.log', 'role': 'text', 'description': 'Log Handler' }, '');
		adapter.subscribeStates('info.log');
		
		// write settings to states
		adapter.getState('settings', (err, state) => {
			
			if (!err && state && state.val) {
				SETTINGS = JSON.parse(state.val) || {};
				SETTINGS.sendUsageData = adapter.config.sendUsageData !== undefined ? adapter.config.sendUsageData : true;
				writeSettingsToStates(SETTINGS);
				
				adapter.setState('settings', JSON.stringify(SETTINGS));
				adapter.subscribeStates('settings*');
			}
		});
		
		// listen for new notifications to add
		adapter.getState('notifications', (err, state) => {
			NOTIFICATIONS = (state && state.val && JSON.parse(state.val)) || [];
		});
		
		adapter.subscribeStates('addNotification');
	});

	/*
	 * STATE CHANGE
	 *
	 */
	adapter.on('stateChange', function(id, state) {
		//adapter.log.debug('State ' + id + ' has changed: ' + JSON.stringify(state));
		
		if (state === undefined || state === null || state.ack === true || state.val === undefined || state.val === null) {
			return;
		}
		
		// LOG
		if (id.indexOf('.info.log') > -1 && state.val !== '') {
			
			try {
				const log = JSON.parse(state.val);
				adapter.log[log.criticality || 'debug'](log.message);
			}
			catch(err) {}
		}
		
		// SETTINGS
		if (id.substr(-9) === '.settings') {
			writeSettingsToStates(JSON.parse(state.val) || {});
		}
		
		// SETTING
		if (id.indexOf('.settings.') > -1) {
			const setting = id.substr(id.lastIndexOf('.settings.')+10);
			
			// update settings
			SETTINGS[setting] = state.val;
			adapter.setState('settings', JSON.stringify(SETTINGS));
			
			// update adapter config
			if (adapter.config[setting] !== undefined) {
				
				adapter.getForeignObject('system.adapter.' + adapter.namespace, (err, obj) => {
					
					if (err || !obj || !obj.native) {
						return library.terminate('Error system.adapter.' + adapter.namespace + ' not found!');
					}
					
					obj.native[setting] = state.val;
					adapter.setForeignObject(obj._id, obj);
				});
			}
		}
		
		// NOTIFICATIONS
		if (id.indexOf('.addNotification') > -1 && state.val) {
			adapter.setState(id, '');
			let notification = {};
			
			// try to parse object
			try {
				notification = JSON.parse(state.val);
			}
			catch(err) {
				
				// not an object, so handle a string
				if (state.val.length < 15) {
					notification.title = state.val;
				}
				else {
					notification.content = state.val;
				}
			}
			
			// assemble notification
			notification = {
				title: '',
				content: '',
				timestamp: new Date().getTime(),
				priority: 'normal', // low, normal, high, critical,
				unread: true, // true, false
				...notification
			}
			
			NOTIFICATIONS.push(notification);
			adapter.setState('notifications', JSON.stringify(NOTIFICATIONS));
		}
	});
	
	/*
	 * MESSAGE
	 *
	 */
	adapter.on('message', function(msg) {
		
		// request
		if (msg.command === '_request' && msg.message) {
			const options = JSON.parse(msg.message);
			const token = options.token;
			
			// encrypt
			if (options._encrypt && options.body.data) {
				const iv = _crypto.randomBytes(16).toString('hex').substr(0,16);
				const encryptor = _crypto.createCipheriv('AES-256-CBC', 'KutTGsNQ8HCX$hrT9Ua5beRSs2BLVeQq', iv);
				options.body.data = Buffer.from(iv).toString('base64').substr(0,24) + encryptor.update(JSON.stringify(options.body.data), 'utf8', 'base64') + encryptor.final('base64');
			}
			
			// request
			_request(options)
				.then(data => {
					data = data && data.substr(0, 1) === '{' && data.substr(-1) === '}' ? JSON.parse(data) : (data || '');
					adapter.setState('info.data', JSON.stringify({ 'data': data, token }));
				})
				.catch(err => {
					//adapter.log.error(err.message);
					adapter.setState('info.data', JSON.stringify({ 'error': { 'message': err.message }, token }));
				});
		}
	});
	
	/*
	 * ADAPTER UNLOAD
	 *
	 */
	adapter.on('unload', function(callback) {
		
		try {
			adapter.log.info('Adapter stopped und unloaded.');
			
			unloaded = true;
			library.resetStates();
			
			callback();
		}
		catch(e) {
			callback();
		}
	});

	return adapter;
};


/**
 *
 *
 */
function writeSettingsToStates(s) {
	
	for (let setting in s) {
		s[setting] = typeof s[setting] === 'object' ? JSON.stringify(s[setting]) : s[setting];
		
		library.set({
			'node': 'settings.' + setting,
			'description': 'Modify setting ' + setting,
			'role': 'config',
			'type': typeof s[setting],
			'write': true,
			'read': true
			
		}, s[setting]);
	}
}

/*
 * COMPACT MODE
 * If started as allInOne/compact mode => return function to create instance
 *
 */
if (module && module.parent)
	module.exports = startAdapter;
else
	startAdapter(); // or start the instance directly
