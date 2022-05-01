var pe=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var oe=(e,d,S)=>d in e?pe(e,d,{enumerable:!0,configurable:!0,writable:!0,value:S}):e[d]=S,k=(e,d)=>{for(var S in d||(d={}))me.call(d,S)&&oe(e,S,d[S]);if(ne)for(var S of ne(d))fe.call(d,S)&&oe(e,S,d[S]);return e},G=(e,d)=>he(e,ye(d));import{q as se,X as Ce,cq as ie,c as F,d7 as z,a4 as Q,cy as Y,a3 as Se,_ as de,d8 as be,d6 as we,j as q,o as l,d as b,e as a,J as h,a2 as C,k as t,w as u,F as j,l as ue,a as f,M as K,a1 as Ie,f as re,t as I,g as p,L as T,cM as Oe,Z as te,O as W,bW as $e,p as _,m as Z,ae as x,i as H,I as ke,N as le,a7 as B,y as De,a5 as Ke,ac as Le,a6 as ae,a8 as Ee,a9 as Me}from"./index-10b6d084.js";import{Q as Ve}from"./QExpansionItem-2139446c.js";import{D as Be,a as Ae,u as Ge}from"./useDragDrop-90fe548a.js";const We=se({name:"WidgetDevicesSection",props:["module","itemList"],emits:["onChange"],components:{Draggable:Be},setup(e,{emit:d}){const S=Ce(),E=ie(),O=F(()=>z.Settings[e.module]||{}),$=F(()=>E.devices),i=o=>$.value[o],L=o=>$.value[o.deviceId].function==="other"?"_defaults":$.value[o.deviceId].function,s=o=>Object.keys($.value[o].states)||[],n=o=>s(o).map(c=>({label:c,value:c})),v=o=>M[o].devices.length!==0,M=E.getGroups("function"),N=Q(Object.values(M)),J=o=>!O.value.addDevice||O.value.addDevice&&(!O.value.addDevice.fields||O.value.addDevice.fields&&O.value.addDevice.fields.includes(o)),U=(o,c)=>{const m=Object.values(o?E.getGroups("function",o):M);c(()=>{N.value=m})},P=(o,c,m)=>{const V=$.value[o.deviceId]&&$.value[o.deviceId].states[o[m+"StateKey"]]||{},A=o[c+"Element"];return be(V[A+"Config"]||{},o[A+"Config"]&&o[A+"Config"][m]||{})},g=Q(Y(e.itemList)),r=(o,c=null)=>{const m=we(),V=G(k({},o),{id:m});if(c===null){if(o.type==="device"){const A=s(o.deviceId)[0]||null;V.primaryStateKey=A,V.bodyStateKey=A,V.bodyElement="LastChangeBody"}g.value.push(V)}else g.value.splice(c,0,V);d("onChange",{id:"items",value:g.value})},y=o=>{const c=Y(g.value.find(m=>m.id===o));r(c,g.value.findIndex(m=>m.id===c.id)+1)},w=o=>{confirm(S.t("Really delete item?"))&&(delete g.value[g.value.findIndex(m=>m.id===o)],d("onChange",{id:"items",value:g.value}))},D=Q(),R=o=>{(!o.attributes||o.attributes&&o.attributes.deleted!==!0)&&(r({type:"device",deviceId:o.id}),O.value.addDevice&&O.value.addDevice.max!==void 0&&O.value.addDevice.max<=g.value.length&&D.value.hidePopup())},X=Q({}),ce=()=>{r({type:"group",name:X.value}),X.value={}},ve=()=>r({type:"divider"}),ee=o=>{if(o.id&&o.itemId){const c=g.value.findIndex(m=>m.id===o.itemId);if(c>-1){if(o.id.indexOf("moduleConfig.")>-1)g.value[c].moduleConfig=G(k({},g.value[c].moduleConfig||{}),{[o.id.replace("moduleConfig.","")]:o.value});else if(o.id.indexOf("secondaryStatesConfig.")>-1)g.value[c].secondaryStatesConfig=G(k({},g.value[c].secondaryStatesConfig||{}),{[o.id.replace("secondaryStatesConfig.","")]:o.value});else if(o.id==="componentOptions"){const m=o.stateKey||g.value[c].primaryStateKey;g.value[c][o.component+"Config"]=G(k({},g.value[c][o.component+"Config"]||{}),{[m]:k(k({},g.value[c][o.component+"Config"]&&g.value[c][o.component+"Config"][m]||{}),o.value)})}else g.value[c][o.id]=o.value;d("onChange",{id:"items",value:g.value})}}},ge=(o,c)=>{ee({value:c.map(m=>m.value||m),itemId:o,id:"secondaryStatesKeys"})};return G(k({},Ae()),{FunctionsComponentsList:Se.ComponentsListAsOptions,ModuleSettings:O,onFilter:U,shallBeShown:J,deviceList:$,getDevice:i,getDeviceFunction:L,getDeviceStates:s,getDeviceStatesOptions:n,hasDevices:v,onChange:ee,onChangeSecondaryStatesKeys:ge,isInGroup:!1,group:X,addGroup:ce,addDivider:ve,addDevice:R,items:g,addItem:r,copyItem:y,deleteItem:w,componentValues:P,addDeviceElement:D,optionsAddDevice:M,optionGroupsAddDevice:N})}}),Qe={class:"full-width"},Fe={class:"row sticky body"},qe={class:"col-4"},je=H("\xA0"),Ne={key:0},Ue={class:"col-3"},Pe={"slot:end":""},Te={class:"col-3",style:{"line-height":"70px"}},ze={class:"row"},He=["set"],Je={class:"row items-center"},Re={key:0},Xe={key:1},Ze={key:2},Ye={key:3,class:"row nowrap"},_e={key:0,class:"row nowrap"},xe={key:1,class:"row nowrap"},en={key:2,class:"row nowrap"};function nn(e,d,S,E,O,$){const i=q("inputs"),L=q("icon"),s=q("draggable");return l(),b("div",Qe,[a("div",Fe,[a("div",qe,[h(t(te,{onFilter:e.onFilter,ref:"addDeviceElement",label:e.$t("Add Device"),options:e.optionGroupsAddDevice,"model-value":"","use-input":"","stack-label":"",style:{margin:"0 8px"}},{option:u(n=>[t(Ve,{"expand-separator":"","header-class":"text-weight-bold",label:n.opt.label,icon:n.opt.icon},{default:u(()=>[(l(!0),b(j,null,ue(n.opt.devices,v=>h((l(),f(T,{key:v.id,clickable:"",onClick:M=>e.addDevice(v)},{default:u(()=>[t(K,null,{default:u(()=>[t(Ie,{class:"q-ml-md"},{default:u(()=>[a("span",{class:re({"text-strike":v.attributes&&v.attributes.deleted===!0})},I(v.label?v.label+" ("+v.name+")":v.name),3),je,v.attributes&&v.attributes.deleted===!0?(l(),b("em",Ne,"[ "+I(e.$t("deleted"))+" ]",1)):p("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Oe]])),128))]),_:2},1032,["label","icon"])]),_:1},8,["onFilter","label","options"]),[[C,e.ModuleSettings.addDevice!==!1&&(!e.ModuleSettings.addDevice||e.ModuleSettings.addDevice&&(e.ModuleSettings.addDevice.max===void 0||e.ModuleSettings.addDevice.max>e.items.length))]])]),h(a("div",{class:"col-1",style:{"text-align":"center","line-height":"70px"}},I(e.$t("or")),513),[[C,e.ModuleSettings.addGroup!==!1]]),h(a("div",Ue,[t(i,{label:"Add Group",onOnChange:d[0]||(d[0]=n=>e.group=arguments[0]),onKeyup:$e(e.addGroup,["enter"]),value:e.group.value||""},{default:u(()=>[a("template",Pe,[h(t(W,{flat:"",size:"sm",dense:"",icon:"mdi-check",label:e.$t("add group"),style:{height:"32px","min-width":"100px","margin-top":"16px"},onClick:e.addGroup},null,8,["label","onClick"]),[[C,e.group.value]])])]),_:1},8,["onKeyup","value"])],512),[[C,e.ModuleSettings.addGroup!==!1]]),h(a("div",{class:"col-1",style:{"text-align":"center","line-height":"70px"}},I(e.$t("or")),513),[[C,e.ModuleSettings.addDivider!==!1]]),h(a("div",Te,[t(W,{icon:"mdi-minus",label:e.$t("Add Divider"),color:"primary",onClick:e.addDivider},null,8,["label","onClick"])],512),[[C,e.ModuleSettings.addDivider!==!1]])]),a("div",ze,[t(le,{ref:"deviceListElement",class:"full-width",style:{"margin-top":"16px"}},{default:u(()=>[t(s,_({class:"list-group",tag:"div","component-data":{tag:"div",type:"transition",name:e.drag?null:"flip-list"},modelValue:e.items,"onUpdate:modelValue":d[1]||(d[1]=n=>e.items=n)},e.dragOptions,{onStart:d[2]||(d[2]=n=>e.drag=!0),onEnd:d[3]||(d[3]=n=>e.drag=!1),"item-key":"id",handle:".dragndrop"}),{item:u(({element:n})=>[(l(),b("div",{key:n.id,set:e.isInGroup=n.type==="device"?e.isInGroup:n.type==="divider"?!1:n.type==="group"},[t(T,null,{default:u(()=>[t(K,{avatar:""},{default:u(()=>[a("div",Je,[h(t(L,{name:"mdi-drag-horizontal",class:"dragndrop",style:{"padding-right":"16px"}},null,512),[[C,e.items.length>1]]),t(i,{type:"button",dense:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:Z(v=>e.copyItem(n.id),["stop"])},null,8,["tooltip","onClick"]),h(t(i,{type:"button",dense:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:Z(v=>e.deleteItem(n.id),["stop"])},null,8,["tooltip","onClick"]),[[C,n._deleted!==!0]]),h(t(i,{type:"button",dense:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:Z(v=>e.restoreItem(n.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[C,n._deleted===!0]])])]),_:2},1024),n.type!=="device"||n.type==="device"&&e.deviceList[n.deviceId]!==void 0?(l(),b(j,{key:0},[e.ModuleSettings.customBodySection?(l(),f(K,{key:0},{default:u(()=>[(l(),f(x(e.ModuleSettings.customBodySection),_(k(k({},e.$props),e.$attrs),{onOnChange:e.onChange,item:n,device:e.deviceList[n.deviceId]}),null,16,["onOnChange","item","device"]))]),_:2},1024)):(l(),f(K,{key:1},{default:u(()=>[n.type==="divider"?(l(),b("span",Re,[a("em",null,I("("+e.$t("divider")+")"),1)])):p("",!0),n.type==="group"?(l(),b("span",Xe,[a("strong",null,I(n.name),1)])):p("",!0),n.type==="device"?(l(),b("span",Ze,[a("strong",null,I(e.deviceList[n.deviceId].name),1),H(" ("+I(e.deviceList[n.deviceId].function+", #"+n.deviceId)+")",1)])):p("",!0),n.type==="device"?(l(),b("div",Ye,[e.shallBeShown("label")?(l(),f(i,{key:0,dense:"",onOnChange:e.onChange,label:"Label",itemId:n.id,id:"label",json:"",value:n.label||"",placeholder:e.deviceList[n.deviceId].states[n.bodyStateKey]&&e.deviceList[n.deviceId].states[n.bodyStateKey].label?JSON.stringify(e.deviceList[n.deviceId].states[n.bodyStateKey].label):e.deviceList[n.deviceId].name},null,8,["onOnChange","itemId","value","placeholder"])):p("",!0),e.shallBeShown("bodyStateKey")?(l(),f(i,{key:1,dense:"",style:{width:"130px"},onOnSelect:e.onChange,label:"Body State",itemId:n.id,id:"bodyStateKey",value:n.bodyStateKey,type:"select",options:e.getDeviceStatesOptions(n.deviceId)},null,8,["onOnSelect","itemId","value","options"])):p("",!0),e.shallBeShown("bodyElement")?h((l(),f(i,{key:2,dense:"",style:{width:"230px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"bodyElement",label:"Body Element",state:e.deviceList[n.deviceId].states[n.bodyStateKey],stateKey:n.bodyStateKey,itemId:n.id,value:n.bodyElement,type:"select.components",components:e.FunctionsComponentsList.bodyElements[e.getDeviceFunction(n)],componentValues:e.componentValues(n,"body",n.bodyStateKey)},null,8,["onOnSelect","onOnOptions","state","stateKey","itemId","value","components","componentValues"])),[[C,n.bodyStateKey]]):p("",!0)])):p("",!0)]),_:2},1024)),e.ModuleSettings.customActionSection?(l(),f(K,{key:2,side:""},{default:u(()=>[(l(),f(x(e.ModuleSettings.customActionSection),{onOnChange:e.onChange,item:n,device:e.deviceList[n.deviceId]},null,8,["onOnChange","item","device"]))]),_:2},1024)):(l(),f(K,{key:3,side:""},{default:u(()=>[n.type==="group"?(l(),b("div",_e,[t(i,{dense:"",style:{width:"100px"},onOnChange:e.onChange,label:e.$t("Group Actions"),itemId:n.id,id:"actions",value:n.actions||!1,type:"switch"},null,8,["onOnChange","label","itemId","value"]),e.shallBeShown("groupElement")?h((l(),f(i,{key:0,dense:"",style:{width:"200px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"groupElement",label:"Group Element",stateKey:"group",itemId:n.id,value:n.groupElement,type:"select.components",components:e.FunctionsComponentsList.actionElements._defaults.filter(v=>v.value!=="InputAction"&&v.value!=="DropdownAction"),componentValues:e.componentValues(n,"group","group")},null,8,["onOnSelect","onOnOptions","itemId","value","components","componentValues"])),[[C,n.actions===!0]]):p("",!0)])):p("",!0),n.type==="device"?(l(),b("div",xe,[e.shallBeShown("primaryStateKey")?(l(),f(i,{key:0,dense:"",style:{width:"130px"},onOnSelect:e.onChange,label:"Action State",itemId:n.id,id:"primaryStateKey",value:n.primaryStateKey,type:"select",options:e.getDeviceStatesOptions(n.deviceId)},null,8,["onOnSelect","itemId","value","options"])):p("",!0),e.shallBeShown("showState")?h((l(),f(i,{key:1,dense:"",style:{width:"100px"},onOnChange:e.onChange,label:"Show State",itemId:n.id,id:"showState",value:n.showState!==void 0?n.showState:!0,type:"switch"},null,8,["onOnChange","itemId","value"])),[[C,n.primaryStateKey]]):p("",!0),e.shallBeShown("showGroupAction")?h((l(),f(i,{key:2,dense:"",style:{width:"100px"},onOnChange:e.onChange,label:"Use in Actions",itemId:n.id,id:"useInGroup",value:n.useInGroup!==void 0?n.useInGroup:!0,type:"switch"},null,8,["onOnChange","itemId","value"])),[[C,n.primaryStateKey&&e.isInGroup===!0]]):p("",!0),e.shallBeShown("actionElement")?h((l(),f(i,{key:3,dense:"",style:{width:"200px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"actionElement",label:"Action Element",state:e.deviceList[n.deviceId].states[n.primaryStateKey],stateKey:n.primaryStateKey,itemId:n.id,value:n.actionElement,type:"select.components",components:e.FunctionsComponentsList.actionElements[e.getDeviceFunction(n)],componentValues:e.componentValues(n,"action",n.primaryStateKey)},null,8,["onOnSelect","onOnOptions","state","stateKey","itemId","value","components","componentValues"])),[[C,n.primaryStateKey]]):p("",!0)])):p("",!0),n.type==="device"?(l(),b("div",en,[e.shallBeShown("secondaryStatesKeys")?(l(),f(te,{key:0,"stack-label":"",dense:"",style:{width:"430px"},"onUpdate:modelValue":v=>e.onChangeSecondaryStatesKeys(n.id,v),label:e.$t("Secondary State"),"model-value":n.secondaryStatesKeys,options:e.getDeviceStatesOptions(n.deviceId),"use-chips":"",multiple:""},{after:u(()=>[t(W,{flat:"",dense:"",icon:"mdi-dots-vertical","click.prevent":""},{default:u(()=>[t(ke,null,{default:u(()=>[t(le,{style:{"min-width":"100px"}},{default:u(()=>[t(T,null,{default:u(()=>[t(K,null,{default:u(()=>[t(i,{dense:"",onOnChange:e.onChange,itemId:n.id,label:"Use Labels",id:"secondaryStatesConfig.useLabel",value:n.secondaryStatesConfig&&n.secondaryStatesConfig.useLabel||!1,type:"switch",inline:""},null,8,["onOnChange","itemId","value"])]),_:2},1024)]),_:2},1024),t(T,null,{default:u(()=>[t(K,null,{default:u(()=>[t(i,{dense:"",onOnChange:e.onChange,itemId:n.id,label:"Use Colors",id:"secondaryStatesConfig.useColor",value:n.secondaryStatesConfig&&n.secondaryStatesConfig.useColor||!0,type:"switch",inline:""},null,8,["onOnChange","itemId","value"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onUpdate:modelValue","label","model-value","options"])):p("",!0)])):p("",!0)]),_:2},1024))],64)):(l(),f(K,{key:1},{default:u(()=>[H(I(e.$t("Device not found")+" ("+e.$t("Device ID")+": "+n.deviceId+")"),1)]),_:2},1024))]),_:2},1024),t(B)],8,He))]),_:1},16,["component-data","modelValue"])]),_:1},512)])])}var on=de(We,[["render",nn],["__scopeId","data-v-694a7051"]]);const tn=se({name:"WidgetPage",props:["widgetId"],emits:["onClose"],components:{WidgetDevicesSection:on},setup(e,{emit:d}){const S=ie(),{errors:E,hasErrors:O,addError:$,removeError:i,resetErrors:L}=Ge({module:"Empty"}),s=Q(null);De(()=>e.widgetId,r=>{r?(s.value=S.widgets[r]?Y(S.widgets[r]):{id:r,config:{}},s.value.module&&i("module")):s.value=null});const n=z.ModuleList.map(r=>({label:r,value:r})),v=F(()=>z.Configurations[s.value.module]||[]),M=F(()=>z.Settings[s.value.module]||{}),N=F(()=>{const r={};return v.value.forEach(y=>{if(s.value.config[y.parameter]===void 0){const w=typeof y.value=="function"?y.value(s.value):y.value;U({id:"config."+y.parameter,value:w}),r[y.parameter]=w}else r[y.parameter]=s.value.config[y.parameter]}),r}),J=r=>r?Object.keys(r).some(y=>{const w=Array.isArray(r[y])?r[y]:[r[y]],D=s.value.config[y]===void 0?v.value.find(R=>R.parameter===y).value:s.value.config[y];return w.includes(D)}):!0,U=r=>{const{_error:y,id:w,value:D}=r;y?$(w,y):w!==void 0&&D!==void 0&&w.indexOf("config.")!==-1?(s.value.config[w.replace("config.","")]=D,i(w)):w!==void 0&&D!==void 0&&(s.value[w]=D,i(w),w==="module"&&(L(),s.value.config={}))},P=(r=null)=>{d("onClose",r),s.value=null,L()};return{ModuleList:n,ModuleConfigurations:v,ModuleSettings:M,ModuleConfigValues:N,errors:E,hasErrors:O,dependencies:J,widget:s,onChange:U,onCancel:P,onSave:()=>{S.addWidget({widget:s.value}),P(s.value)}}}}),ln={class:"text-h6 row items-center"},an={class:"text-h6 primary q-ma-sm"},sn={class:"row"},dn={class:"col"},un={class:"col"},rn={class:"col"},cn={class:"col-2"},vn={class:"col-1"},gn={class:"text-h6 primary q-ma-sm"},pn={class:"row"},hn={class:"col-3"},yn={class:"col-9"},mn={class:"text-h7 primary q-ma-sm"},fn={class:"row"},Cn={class:"row"},Sn={class:"q-pa-sm"},bn={key:0,class:"row"},wn={class:"text-h7 primary q-ma-sm"},In={class:"row"};function On(e,d,S,E,O,$){const i=q("inputs"),L=q("widget-devices-section");return l(),f(Me,{"model-value":e.widget!==null,"full-height":"",persistent:""},{default:u(()=>[e.widget!==null?(l(),f(Ke,{key:0,class:"column full-height",style:{width:"1400px","max-width":"90vw"}},{default:u(()=>[t(ae,{class:"row items-center"},{default:u(()=>[a("div",ln,[H(I(e.$t("Widget"))+": ",1),t(i,{dense:"",onOnChange:e.onChange,id:"title",label:e.$t("Name"),value:e.widget.title||"",autofocus:"",style:{width:"230px"}},null,8,["onOnChange","label","value"])]),t(Le),t(W,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),t(B),t(ae,{id:"WidgetDialogBody",class:"col scroll body"},{default:u(()=>[a("div",an,I(e.$t("Widget-Box")),1),t(B,{style:{margin:"0 -16px"}}),a("div",sn,[a("div",dn,[t(i,{onOnChange:e.onChange,id:"icon",label:e.$t("Widget")+" "+e.$t("Icon"),value:e.widget.icon||e.ModuleSettings.icon||"",icon:e.widget.icon},null,8,["onOnChange","label","value","icon"])]),a("div",un,[t(i,{onOnChange:e.onChange,id:"label",label:e.$t("Widget")+" "+e.$t("Label"),value:e.widget.label||"",placeholder:e.widget.title},null,8,["onOnChange","label","value","placeholder"])]),a("div",rn,[t(i,{onOnChange:e.onChange,id:"link",label:e.$t("Widget")+" "+e.$t("Link"),value:e.widget.link||"",info:"config#HomeKitTile#jumper#info"},null,8,["onOnChange","label","value"])]),a("div",cn,[t(i,{type:"switch",onOnChange:e.onChange,id:"hideTitle",label:e.$t("Hide Widget Label and Icon"),value:e.widget.hideTitle||!1},null,8,["onOnChange","label","value"])]),a("div",vn,[h(t(i,{type:"switch",onOnChange:e.onChange,id:"hideSeparator",label:e.$t("Hide Separator"),value:e.widget.hideSeparator||!1},null,8,["onOnChange","label","value"]),[[C,e.widget.hideTitle!==!0]])])]),a("div",gn,I(e.$t("Module")),1),t(B,{style:{margin:"0 -16px"}}),a("div",pn,[a("div",hn,[t(i,{onOnSelect:e.onChange,id:"module",label:e.$t("Module"),type:"select",options:e.ModuleList,value:e.widget.module,"options-dense":"","use-input":"",required:"",error:e.errors.module!==void 0,"error-message":e.errors.module},null,8,["onOnSelect","label","options","value","error","error-message"])]),a("div",yn,[h(a("div",{class:"centered"},I(e.$t(e.widget.module+"#description")),513),[[C,e.widget.module]])])]),h(a("div",null,[a("div",mn,I(e.$t("Module Configuration")),1),t(B,{style:{margin:"0 0 8px 0"}}),h(a("div",fn,[(l(!0),b(j,null,ue(e.ModuleConfigurations,s=>(l(),b(j,null,[s.hide!==!0?h((l(),b("div",{class:re("col-"+(s.columns||4)),key:s.parameter},[t(i,_(s,{onOnChange:e.onChange,onOnSelect:e.onChange,id:"config."+s.parameter,value:e.ModuleConfigValues[s.parameter]}),null,16,["onOnChange","onOnSelect","id","value"])],2)),[[C,e.dependencies(s.dependencies)]]):p("",!0)],64))),256))],512),[[C,e.ModuleConfigurations.length>0]]),h(a("div",Cn,[a("p",Sn,I(e.$t("No configuration options for this module")),1)],512),[[C,e.ModuleConfigurations.length===0]]),e.ModuleSettings&&e.ModuleSettings.customConfiguration?(l(),b("div",bn,[(l(),f(x(e.ModuleSettings.customConfiguration),{config:e.widget.config,onOnChange:e.onChange},null,8,["config","onOnChange"]))])):p("",!0),e.ModuleSettings.addDevice!==!1?(l(),b(j,{key:1},[a("div",wn,I(e.$t("Module Devices")),1),t(B,{style:{margin:"0 -0 8px 0"}}),a("div",In,[t(L,{onOnChange:e.onChange,ModuleConfigValues:e.ModuleConfigValues,itemList:e.widget.items||[],module:e.widget.module},null,8,["onOnChange","ModuleConfigValues","itemList","module"])])],64)):p("",!0)],512),[[C,e.widget.module]])]),_:1}),t(B),t(Ee,{align:"right"},{default:u(()=>[t(W,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),t(W,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave,disable:e.hasErrors},null,8,["label","onClick","disable"])]),_:1})]),_:1})):p("",!0)]),_:1},8,["model-value"])}var Ln=de(tn,[["render",On],["__scopeId","data-v-c44499b8"]]);export{Ln as W};
