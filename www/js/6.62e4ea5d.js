(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{1974:function(e,t,n){"use strict";n.r(t),t["default"]={"Page Settings":"Seiteneinstellungen","Language settings for jarvis":"Spracheinstellung von jarvis","Browser favicon":"Favicon im Browser","(Browser favicon info)":"base64 Wert der Grafik","Browser title":"Titel im Browser","Timeformat LastChangeBody":"Zeitformat LastChangeBody","(Timeformat LastChangeBody info)":"Globales Zeitformat der LastChangeBody Komponente. Für mögliche Werte, siehe date-fns Dokumentation.","Theme Settings":"Theme Einstellungen","Dark Mode":"Dark Mode","Primary theme color":"Primäre Farbe des Themes","(Primary theme color info)":"Der Farbwert kann ein Wert aus der Farbpalette in der Form `HUE|SHADE` (z. B. `blue|700`) sein. Alternativ kann ein Hex oder RGB angegeben werden.","Secondary theme color":"Sekundäre Farbe des Themes","(Secondary theme color info)":"Der Farbwert kann ein Wert aus der Farbpalette in der Form `HUE|SHADE` (z. B. `pink|500`) sein. Alternativ kann ein Hex oder RGB angegeben werden.","Default widget-box icon":"Standard Widget-Box Icon","Hide TopBar":"TopBar ausblenden","Mobile Settings":"Mobile Einstellungen","Hide QuickJumper":"Verstecke QuickJumper"}},"6d12":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"full-height"},[n("div",{staticClass:"row no-wrap"},[n("q-toolbar",{staticClass:"paper",staticStyle:{"min-height":"56px"}},[n("q-toolbar-title",{attrs:{shrink:""}},[e._v(e._s(e.$t("Settings")))])],1)],1),e._l(e.groups,(function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.expertMode,expression:"!expertMode"}],key:t.id,staticClass:"row no-wrap paper"},[n("q-expansion-item",{staticClass:"full-width",attrs:{icon:t.icon,label:e.$t(t.label)},model:{value:e.expanded[t.id],callback:function(n){e.$set(e.expanded,t.id,n)},expression:"expanded[group.id]"}},[n("setting-page",{attrs:{settings:t.settings}})],1)],1)})),n("paper",{directives:[{name:"show",rawName:"v-show",value:e.expertMode,expression:"expertMode"}],style:{height:e.pageHeight-66-16+"px"}},[n("json-editor",{attrs:{id:"settings",json:e.json},on:{onChange:e.onJsonEditor}})],1)],2)},o=[],i=n("a6f4"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row",staticStyle:{padding:"8px 16px"}},e._l(e.settings,(function(t){return n("div",{key:t.id,staticClass:"col-2"},[n("inputs",e._b({attrs:{value:e.getValue(t)},on:{onChange:e.onChange}},"inputs",t,!1))],1)})),0)},a=[],d=n("791a"),l=Object(i["c"])({name:"SettingPage",props:["settings"],components:{Inputs:d["a"]},methods:{onChange({id:e,value:t}){this.$store.commit("editor/set",{["settings."+e]:t})},getValue(e){return void 0!==this.$store.state.editor.settings[e.id]?this.$store.state.editor.settings[e.id]:e.value}}}),c=l,u=n("2877"),g=Object(u["a"])(c,s,a,!1,null,null,null),m=g.exports,p=n("b3c8"),h=n("a54a"),f=n("a081"),v=Object(i["c"])({name:"SettingsPage",components:{JsonEditor:h["a"],SettingPage:m},data(){return{expanded:{},groups:p["a"]}},methods:{onChange({id:e,error:t,value:n}){if(t)this.$store.commit("editor/addError",{key:"settings-"+e,val:t.message||t});else if(n){this.$store.commit("editor/removeError",{key:"settings-"+e});for(const e in n)this.$store.commit("editor/set",{["settings."+e]:n[e]})}},onJsonEditor(e){e._error||this.$store.commit("editor/set",{[e.id]:JSON.parse(e.value)})}},computed:{pageHeight(){return this.$store.state.jarvis.pageHeight},json(){return this.$store.state.editor.settings},expertMode(){var e;return null===(e=this.$store.state.editor.settings)||void 0===e?void 0:e.configExpertMode}},created(){f["default"].register(this.$i18n,f["default"].translations)}}),b=v,w=n("65c6"),x=n("6ac5"),k=n("3b73"),y=n("eebe"),B=n.n(y),C=Object(u["a"])(b,r,o,!1,null,null,null),S=C.exports;B()(C,"components",{QToolbar:w["a"],QToolbarTitle:x["a"],QExpansionItem:k["a"]})},"7dc8":function(e,t,n){"use strict";n.r(t),t["default"]={"(Browser favicon info)":"base64 value of the image","(Timeformat LastChangeBody info)":"Globale time format of the LastChangeBody component. For possible format values, see date-fns documentation.","(Primary theme color info)":"","(Secondary theme color info)":""}},9747:function(e,t,n){var r={"./":"a081","./de":"1974","./de.js":"1974","./en":"7dc8","./en.js":"7dc8","./index":"a081","./index.js":"a081"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="9747"},a081:function(e,t,n){"use strict";n.r(t);var r=n("0692");t["default"]={translations:Object(r["a"])((e=>n("9747")("./"+e))),register:r["c"]}}}]);