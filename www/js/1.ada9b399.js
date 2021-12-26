(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0265":function(e,t,i){"use strict";i("c393")},"0fc0":function(e,t,i){},"424e":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-dialog",{attrs:{value:null!==e.widget,"full-height":"",persistent:""}},[null!==e.widget?i("q-card",{staticClass:"column full-height",staticStyle:{width:"1400px","max-width":"90vw"}},[i("q-card-section",{staticClass:"row items-center"},[i("div",{staticClass:"text-h6 row items-center"},[e._v("\n\t\t\t\t"+e._s(e.$t("Widget"))+": "),i("inputs",{staticStyle:{width:"230px"},attrs:{dense:"",id:"label",label:e.$t("Label"),value:e.widget.label||"",placeholder:e.widget.title},on:{onChange:e.onChange}})],1),i("q-space"),i("q-btn",{attrs:{flat:"",round:"",color:"grey",icon:"close"},on:{click:function(t){return e.cancel()}}})],1),i("q-separator"),i("q-card-section",{staticClass:"col scroll body",attrs:{id:"WidgetDialogBody"}},[i("div",{staticClass:"text-h6 primary q-ma-sm"},[e._v(e._s(e.$t("Widget-Box")))]),i("q-separator",{staticStyle:{margin:"0 -16px"}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"icon",label:e.$t("Widget")+" "+e.$t("Icon"),value:e.widget.icon||e.ModuleSettings.icon||"",icon:e.widget.icon},on:{onChange:e.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"title",label:e.$t("Widget")+" "+e.$t("Title"),value:e.widget.title||"",autofocus:""},on:{onChange:e.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"link",label:e.$t("Widget")+" "+e.$t("Link"),value:e.widget.link||"",info:"config#HomeKitTile#jumper#info"},on:{onChange:e.onChange}})],1),i("div",{staticClass:"col-2"},[i("inputs",{attrs:{type:"switch",id:"hideTitle",label:e.$t("Hide Widget Title and Icon"),value:e.widget.hideTitle||!1},on:{onChange:e.onChange}})],1),i("div",{staticClass:"col-1"},[i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0!==e.widget.hideTitle,expression:"widget.hideTitle !== true"}],attrs:{type:"switch",id:"hideSeparator",label:e.$t("Hide Separator"),value:e.widget.hideSeparator||!1},on:{onChange:e.onChange}})],1)]),i("div",{staticClass:"text-h6 primary q-ma-sm"},[e._v(e._s(e.$t("Module")))]),i("q-separator",{staticStyle:{margin:"0 -16px"}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-3"},[i("inputs",{attrs:{id:"module",label:e.$t("Module"),type:"select",options:e.ModuleList,value:e.widget.module,"options-dense":"","use-input":"",required:"",error:void 0!==e.errors["module"],"error-message":e.errors["module"]},on:{onSelect:e.onChange}})],1),i("div",{staticClass:"col-9"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.widget.module,expression:"widget.module"}],staticClass:"centered"},[e._v(e._s(e.$t(e.widget.module+"#description")))])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.widget.module,expression:"widget.module"}]},[i("div",{staticClass:"text-h7 primary q-ma-sm"},[e._v(e._s(e.$t("Module Configuration")))]),i("q-separator",{staticStyle:{margin:"0 0 8px 0"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.ModuleConfigurations.length>0,expression:"ModuleConfigurations.length > 0"}],staticClass:"row"},[e._l(e.ModuleConfigurations,(function(t){return[!0!==t.hide?i("div",{directives:[{name:"show",rawName:"v-show",value:e.dependencies(t.dependencies),expression:"dependencies(ModuleConfig.dependencies)"}],key:t.parameter,class:"col-"+(t.columns||4)},[i("inputs",e._b({attrs:{value:e.ModuleConfigValues[t.parameter]},on:{onChange:function(i){return e.onChange(Object.assign({},arguments[0],{id:"config."+t.parameter}))},onSelect:function(i){return e.onChange(Object.assign({},arguments[0],{id:"config."+t.parameter}))}}},"inputs",t,!1))],1):e._e()]}))],2),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.ModuleConfigurations.length,expression:"ModuleConfigurations.length === 0"}],staticClass:"row"},[i("p",{staticClass:"q-pa-sm"},[e._v("\n\t\t\t\t\t\t"+e._s(e.$t("No configuration options for this module"))+"\n\t\t\t\t\t")])]),e.ModuleSettings&&e.ModuleSettings.customConfiguration?i("div",{staticClass:"row"},[i(e.ModuleSettings.customConfiguration,{tag:"component",attrs:{config:e.widget.config},on:{onChange:e.onChange}})],1):e._e(),!1!==e.ModuleSettings.addDevice?[i("div",{staticClass:"text-h7 primary q-ma-sm"},[e._v(e._s(e.$t("Module Devices")))]),i("q-separator",{staticStyle:{margin:"0 -0 8px 0"}}),i("div",{staticClass:"row"},[i("widget-devices-section",{attrs:{ModuleConfigValues:e.ModuleConfigValues,itemList:e.widget.items||[],module:e.widget.module},on:{onChange:e.onChange}})],1)]:e._e()],2)],1),i("q-separator"),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{attrs:{flat:"",label:e.$t("Cancel"),color:"negative"},on:{click:function(t){return e.cancel()}}}),i("q-btn",{attrs:{flat:"",label:e.$t("Apply"),color:"primary",disable:e.hasErrors},on:{click:e.save}})],1)],1):e._e()],1)},o=[],n=(i("5319"),i("ed09")),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"full-width"},[i("div",{staticClass:"row sticky body"},[i("div",{staticClass:"col-4"},[i("q-select",{directives:[{name:"show",rawName:"v-show",value:!1!==e.ModuleSettings.addDevice&&(!e.ModuleSettings.addDevice||e.ModuleSettings.addDevice&&(void 0===e.ModuleSettings.addDevice.max||e.ModuleSettings.addDevice.max>e.items.length)),expression:"ModuleSettings.addDevice !== false && (!ModuleSettings.addDevice || (ModuleSettings.addDevice && (ModuleSettings.addDevice.max === undefined || ModuleSettings.addDevice.max > items.length)))"}],ref:"addDeviceSelect",staticStyle:{margin:"0 8px"},attrs:{label:e.$t("Add Device"),options:e.optionGroupsAddDevice,value:"","use-input":"","stack-label":""},on:{filter:e.filter},scopedSlots:e._u([{key:"option",fn:function(t){return[i("q-expansion-item",{attrs:{"expand-separator":"","header-class":"text-weight-bold",label:t.opt.label,icon:t.opt.icon}},[e._l(t.opt.devices,(function(t){return[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:""},on:{click:function(i){return e.addDevice(t)}}},[i("q-item-section",[i("q-item-label",{staticClass:"q-ml-md"},[i("span",{class:{"text-strike":t.attributes&&!0===t.attributes.deleted}},[e._v(e._s(t.label?t.label+" ("+t.name+")":t.name))]),e._v(" "),t.attributes&&!0===t.attributes.deleted?i("em",[e._v("[ "+e._s(e.$t("deleted"))+" ]")]):e._e()])],1)],1)]}))],2)]}}])})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!1!==e.ModuleSettings.addGroup,expression:"ModuleSettings.addGroup !== false"}],staticClass:"col-1",staticStyle:{"text-align":"center","line-height":"70px"}},[e._v(e._s(e.$t("or")))]),i("div",{directives:[{name:"show",rawName:"v-show",value:!1!==e.ModuleSettings.addGroup,expression:"ModuleSettings.addGroup !== false"}],staticClass:"col-3"},[i("inputs",{attrs:{label:"Add Group",value:e.group.value||""},on:{onChange:function(t){e.group=arguments[0]},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addGroup.apply(null,arguments)}}},[[i("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.group.value,expression:"group.value"}],staticStyle:{height:"32px","min-width":"100px","margin-top":"16px"},attrs:{flat:"",size:"sm",dense:"",icon:"mdi-check",label:e.$t("add group")},on:{click:e.addGroup}})]],2)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!1!==e.ModuleSettings.addDivider,expression:"ModuleSettings.addDivider !== false"}],staticClass:"col-1",staticStyle:{"text-align":"center","line-height":"70px"}},[e._v(e._s(e.$t("or")))]),i("div",{directives:[{name:"show",rawName:"v-show",value:!1!==e.ModuleSettings.addDivider,expression:"ModuleSettings.addDivider !== false"}],staticClass:"col-3",staticStyle:{"line-height":"70px"}},[i("q-btn",{attrs:{icon:"mdi-minus",label:e.$t("Add Divider"),color:"primary"},on:{click:e.addDivider}})],1)]),e.loaded?e._e():i("div",{staticClass:"row"},[i("q-linear-progress",{attrs:{indeterminate:""}})],1),e.loaded?i("div",{staticClass:"row"},[i("q-list",{ref:"deviceList",staticClass:"full-width",staticStyle:{"margin-top":"16px"}},[i("draggable",{attrs:{handle:".dragndrop"},on:{change:e.emitChange},model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},[i("transition-group",{attrs:{type:"transition",name:"flip-list",tag:"div"}},e._l(e.items,(function(t){return i("div",{key:t.id,staticClass:"list-group-item",attrs:{set:e.isInGroup="device"===t.type?e.isInGroup:"divider"!==t.type&&"group"===t.type}},[i("q-item",[i("q-item-section",{attrs:{avatar:""}},[i("div",{staticClass:"row items-center"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:e.items.length>1,expression:"items.length > 1"}],staticClass:"dragndrop",staticStyle:{"padding-right":"16px"},attrs:{name:"mdi-drag-horizontal"}}),i("inputs",{attrs:{type:"button",dense:"",icon:"mdi-content-copy",tooltip:e.$t("copy")},on:{click:function(i){return e.copyItem(i,t.id)}}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0!==t._deleted,expression:"item._deleted !== true"}],attrs:{type:"button",dense:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative"},on:{click:function(i){return e.deleteItem(i,t.id)}}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0===t._deleted,expression:"item._deleted === true"}],staticClass:"restore",attrs:{type:"button",dense:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive"},on:{click:function(i){return e.restoreItem(i,t.id)}}})],1)]),"device"!==t.type||"device"===t.type&&void 0!==e.deviceList[t.deviceId]?[e.ModuleSettings.customBodySection?i("q-item-section",[i(e.ModuleSettings.customBodySection,e._b({tag:"component",attrs:{item:t,device:e.deviceList[t.deviceId]},on:{onChange:e.onChange}},"component",Object.assign({},e.$props,e.$attrs),!1))],1):i("q-item-section",["divider"===t.type?i("span",[i("em",[e._v(e._s("("+e.$t("divider")+")"))])]):e._e(),"group"===t.type?i("span",[i("strong",[e._v(e._s(t.name))])]):e._e(),"device"===t.type?i("span",[i("strong",[e._v(e._s(e.deviceList[t.deviceId].name))]),e._v(" ("+e._s(e.deviceList[t.deviceId].function+", #"+t.deviceId)+")")]):e._e(),"device"===t.type?i("div",{staticClass:"row nowrap"},[e.shallBeShown("label")?i("inputs",{attrs:{dense:"",label:"Label",itemId:t.id,id:"label",json:"",value:t.label||"",placeholder:e.deviceList[t.deviceId].states[t.bodyStateKey]&&e.deviceList[t.deviceId].states[t.bodyStateKey].label?JSON.stringify(e.deviceList[t.deviceId].states[t.bodyStateKey].label):e.deviceList[t.deviceId].label||e.deviceList[t.deviceId].name},on:{onChange:e.onChange}}):e._e(),e.shallBeShown("bodyStateKey")?i("inputs",{staticStyle:{width:"130px"},attrs:{dense:"",label:"Body State",itemId:t.id,id:"bodyStateKey",value:t.bodyStateKey,type:"select",options:e.deviceStatesOptions(t.deviceId)},on:{onSelect:e.onChange}}):e._e(),e.shallBeShown("bodyElement")?i("inputs",{directives:[{name:"show",rawName:"v-show",value:t.bodyStateKey,expression:"item.bodyStateKey"}],staticStyle:{width:"230px"},attrs:{dense:"",id:"bodyElement",label:"Body Element",stateKey:t.bodyStateKey,itemId:t.id,value:t.bodyElement,type:"select.components",components:e.FUNCTION_COMPONENTS["bodyElements"][e.deviceFunction(t)],componentValues:e.componentValues(t,"body",t.bodyStateKey)},on:{onSelect:e.onChange,onOptions:e.onChange}}):e._e()],1):e._e()]),e.ModuleSettings.customActionSection?i("q-item-section",{attrs:{side:""}},[i(e.ModuleSettings.customActionSection,e._b({tag:"component",attrs:{item:t,device:e.deviceList[t.deviceId]},on:{onChange:e.onChange}},"component",Object.assign({},e.$props,e.$attrs),!1))],1):i("q-item-section",{attrs:{side:""}},["group"===t.type?i("div",{staticClass:"row nowrap"},[i("inputs",{staticStyle:{width:"100px"},attrs:{dense:"",label:e.$t("Group Actions"),itemId:t.id,id:"actions",value:t.actions||!1,type:"switch"},on:{onChange:e.onChange}}),e.shallBeShown("groupElement")?i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0===t.actions,expression:"item.actions === true"}],staticStyle:{width:"200px"},attrs:{dense:"",id:"groupElement",label:"Group Element",stateKey:"group",itemId:t.id,value:t.groupElement,type:"select.components",components:e.FUNCTION_COMPONENTS["actionElements"]["_defaults"].filter((function(e){return"InputAction"!==e.value&&"DropdownAction"!==e.value})),componentValues:e.componentValues(t,"group","group")},on:{onSelect:e.onChange,onOptions:e.onChange}}):e._e()],1):e._e(),"device"===t.type?i("div",{staticClass:"row nowrap"},[e.shallBeShown("primaryStateKey")?i("inputs",{staticStyle:{width:"130px"},attrs:{dense:"",label:"Action State",itemId:t.id,id:"primaryStateKey",value:t.primaryStateKey,type:"select",options:e.deviceStatesOptions(t.deviceId)},on:{onSelect:e.onChange}}):e._e(),e.shallBeShown("showState")?i("inputs",{directives:[{name:"show",rawName:"v-show",value:t.primaryStateKey,expression:"item.primaryStateKey"}],staticStyle:{width:"100px"},attrs:{dense:"",label:"Show State",itemId:t.id,id:"showState",value:void 0===t.showState||t.showState,type:"switch"},on:{onChange:e.onChange}}):e._e(),e.shallBeShown("showGroupAction")?i("inputs",{directives:[{name:"show",rawName:"v-show",value:t.primaryStateKey&&!0===e.isInGroup,expression:"item.primaryStateKey && isInGroup === true"}],staticStyle:{width:"100px"},attrs:{dense:"",label:"Use in Actions",itemId:t.id,id:"useInGroup",value:void 0===t.useInGroup||t.useInGroup,type:"switch"},on:{onChange:e.onChange}}):e._e(),e.shallBeShown("actionElement")?i("inputs",{directives:[{name:"show",rawName:"v-show",value:t.primaryStateKey,expression:"item.primaryStateKey"}],staticStyle:{width:"200px"},attrs:{dense:"",id:"actionElement",label:"Action Element",itemId:t.id,value:t.actionElement,type:"select.components",components:e.FUNCTION_COMPONENTS["actionElements"][e.deviceFunction(t)],componentValues:e.componentValues(t,"action",t.primaryStateKey),device:e.getDevice(t.deviceId)},on:{onSelect:e.onChange,onOptions:e.onChange}}):e._e()],1):e._e(),"device"===t.type?i("div",{staticClass:"row nowrap"},[e.shallBeShown("secondaryStatesKeys")?i("q-select",{staticStyle:{width:"430px"},attrs:{"stack-label":"",dense:"",label:e.$t("Secondary State"),value:t.secondaryStatesKeys,options:e.deviceStatesOptions(t.deviceId),"use-chips":"",multiple:""},on:{input:function(i){return e.onChangeSecondaryStatesKeys(t.id,arguments[0])}}}):e._e()],1):e._e()])]:i("q-item-section",[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.$t("Device not found")+" ("+e.$t("Device ID")+": "+t.deviceId+")")+"\n\t\t\t\t\t\t\t")])],2),i("q-separator")],1)})),0)],1)],1)],1):e._e()])},d=[],l=i("ec26"),r=i("b76a"),c=i.n(r),u=i("6211"),p=i("c7ac");const h=i("0050")(),m=i("3c4e");var v=Object(n["b"])({name:"WidgetDevicesSection",props:["module","itemList"],components:{Draggable:c.a,WidgetDevicesSection:N},data(){const e=this.$store.getters["editor/getGroups"]("function");return this.FUNCTION_COMPONENTS=p["listOfComponents"],this.isInGroup=!1,{loaded:!1,deviceId:null,group:{},items:h(this.itemList),deviceList:this.$store.state.editor.devices,optionsAddDevice:e,optionGroupsAddDevice:Object.values(e),optionGroupsAddDeviceDefault:Object.values(e),ModuleSettings:u["c"]._ModuleSettings[this.module]||{}}},watch:{module(e){this.ModuleSettings=u["c"]._ModuleSettings[e]||{}}},methods:{shallBeShown(e){return!this.ModuleSettings.addDevice||this.ModuleSettings.addDevice&&(!this.ModuleSettings.addDevice.fields||this.ModuleSettings.addDevice.fields&&this.ModuleSettings.addDevice.fields.includes(e))},filter(e,t){const i=e?Object.values(this.$store.getters["editor/getGroups"]("function",e)):this.optionGroupsAddDeviceDefault;t((()=>{this.optionGroupsAddDevice=i}))},componentValues(e,t,i){const s=this.deviceList[e.deviceId]&&this.deviceList[e.deviceId].states[e[i+"StateKey"]]||{},o=e[t+"Element"];return m(s[o+"Config"]||{},e[o+"Config"]&&e[o+"Config"][i]||{})},getDevice(e){return this.deviceList[e]},deviceFunction(e){return"other"===this.deviceList[e.deviceId].function?"_defaults":this.deviceList[e.deviceId].function},deviceStates(e){return Object.keys(this.deviceList[e].states)||[]},deviceStatesOptions(e){return this.deviceStates(e).map((e=>({label:e,value:e})))},hasDevices(e){return this.optionsAddDevice[e].devices.length>0},emitChange(){this.$emit("onChange",{id:"items",value:this.items})},deleteItem(e,t){e.stopPropagation();const i=confirm(this.$i18n.t("Really delete item?"));i&&(this.$delete(this.items,this.items.findIndex((e=>e.id===t))),this.emitChange())},copyItem(e,t){e.stopPropagation();const i=h(this.items.find((e=>e.id===t)));this.addItem(i,this.items.findIndex((e=>e.id===i.id))+1)},addItem(e,t=null){const i=Object(l["a"])(),s={...e,id:i};if(null===t){if("device"===e.type){const t=this.deviceStates(e.deviceId)[0]||null;s.primaryStateKey=t,s.bodyStateKey=t,s.bodyElement="LastChangeBody"}this.items.push(s),setTimeout((()=>{document.getElementById("WidgetDialogBody").scrollTop=this.$refs.deviceList.$el.scrollHeight+100}),100)}else this.items.splice(t,0,s);this.emitChange()},addDevice(e){(!e.attributes||e.attributes&&!0!==e.attributes.deleted)&&(this.addItem({type:"device",deviceId:e.id}),this.ModuleSettings.addDevice&&void 0!==this.ModuleSettings.addDevice.max&&this.ModuleSettings.addDevice.max<=this.items.length&&this.$refs.addDeviceSelect.hidePopup())},addGroup(){this.addItem({type:"group",name:this.group.value}),this.group={}},addDivider(){this.addItem({type:"divider"})},onChange(e){if(e.id&&e.itemId){const t=this.items.findIndex((t=>t.id===e.itemId));if(t>-1){if(e.id.indexOf("moduleConfig.")>-1)this.$set(this.items,t,{...this.items[t],moduleConfig:{...this.items[t].moduleConfig||{},[e.id.replace("moduleConfig.","")]:e.value}});else if("componentOptions"===e.id){const i=e.stateKey||this.items[t].primaryStateKey;this.$set(this.items[t],e.component+"Config",{...this.items[t][e.component+"Config"]||{},[i]:{...this.items[t][e.component+"Config"]&&this.items[t][e.component+"Config"][i]||{},...e.value}})}else this.$set(this.items,t,{...this.items[t],[e.id]:e.value});this.$emit("onChange",{id:"items",value:this.items})}}},onChangeSecondaryStatesKeys(e,t){this.onChange({value:t.map((e=>e.value||e)),itemId:e,id:"secondaryStatesKeys"})}},created(){setTimeout((()=>{this.loaded=!0}),100)}}),g=v,w=(i("0265"),i("2877")),y=i("ddd8"),S=i("3b73"),f=i("66e5"),C=i("4074"),b=i("0170"),_=i("9c40"),x=i("6b1d"),I=i("1c1c"),M=i("eb85"),$=i("714f"),D=i("eebe"),q=i.n(D),O=Object(w["a"])(g,a,d,!1,null,"7861aa98",null),N=O.exports;q()(O,"components",{QSelect:y["a"],QExpansionItem:S["a"],QItem:f["a"],QItemSection:C["a"],QItemLabel:b["a"],QBtn:_["a"],QLinearProgress:x["a"],QList:I["a"],QSeparator:M["a"]}),q()(O,"directives",{Ripple:$["a"]});const k=i("0050")();var K=Object(n["b"])({name:"WidgetPage",props:["widgetId"],components:{WidgetDevicesSection:N},data(){return this.ModuleList=u["c"]._ModuleList.map((e=>({label:e,value:e}))),{component:null,errors:{module:"Empty"},ModuleConfigurations:[],ModuleSettings:{},widget:null}},computed:{config(){return this.widget.config},hasErrors(){return Object.keys(this.errors).length>0},ModuleConfigValues(){const e={};return this.ModuleConfigurations.forEach((t=>{e[t.parameter]=this.getValueForInput(t)})),e}},methods:{dependencies(e){return!e||Object.keys(e).some((t=>{const i=Array.isArray(e[t])?e[t]:[e[t]],s=void 0===this.config[t]?this.ModuleConfigurations.find((e=>e.parameter===t)).value:this.config[t];return i.includes(s)}))},getValueForInput(e){if(void 0===this.config[e.parameter]){const t="function"===typeof e.value?e.value(this.widget):e.value;return this.onChange({id:"config."+e.parameter,value:t}),t}return this.config[e.parameter]},onChange(e){const{_error:t,id:i,value:s}=e;t?this.$set(this.errors,i,t):i.indexOf("config.")>-1?(this.$delete(this.errors,i),this.$set(this.config,i.replace("config.",""),s)):(this.$delete(this.errors,i),this.$set(this.widget,i,s),"module"===i&&(this.ModuleConfigurations=u["c"]._ModuleConfigurations[s]||[],this.ModuleSettings=u["c"]._ModuleSettings[s]||{},this.errors={},this.$set(this.widget,"config",{})))},cancel(e=null){this.$emit("onClose",e),this.widget=null,this.errors={}},save(){this.$store.commit("editor/addWidget",{widget:this.widget}),this.cancel(this.widget)}},watch:{widgetId(e){this.widget=null,null!==e&&(this.widget=this.$store.state.editor.widgets[e]?k(this.$store.state.editor.widgets[e]):{id:e,config:{}},this.ModuleConfigurations=u["c"]._ModuleConfigurations[this.widget.module]||[],this.ModuleSettings=u["c"]._ModuleSettings[this.widget.module]||{},this.widget.module&&delete this.errors.module)}}}),L=K,E=(i("88da"),i("24e8")),G=i("f09f"),A=i("a370"),B=i("2c91"),T=i("4b7e"),j=Object(w["a"])(L,s,o,!1,null,"46160d84",null);t["a"]=j.exports;q()(j,"components",{QDialog:E["a"],QCard:G["a"],QCardSection:A["a"],QSpace:B["a"],QBtn:_["a"],QSeparator:M["a"],QCardActions:T["a"]})},"88da":function(e,t,i){"use strict";i("0fc0")},c393:function(e,t,i){}}]);