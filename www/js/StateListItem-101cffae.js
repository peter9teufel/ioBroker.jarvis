import{_ as g,q as D,H as K,c as I,j as b,o as n,a as s,w as r,k as l,M as p,ae as d,g as c,d as L,e as P,f as j,n as h,L as k,a3 as o,dq as E}from"./index-10b6d084.js";const B=D({name:"StateListItem",props:["device","deviceConfig","primaryState","bodyState","openDeviceDetails","isPopup","isFirstItem"],setup(e){const m=K();return{bodyStyle:I(()=>{let t=e.primaryState&&e.primaryState.bodyStyle;if(!t)return"";if(typeof t=="string"){t.indexOf("{")!==-1&&t.indexOf("}")!==-1&&(t=t.replace("{","").replace("}",""));const i={};return t.split(";").forEach(a=>{const[v,S]=a.split(":");i[v.trim()]=S.trim()}),i}try{return t}catch{return""}}),getComponent:(t,i)=>{const a=t&&o.Configurations[e.device.function]&&o.Configurations[e.device.function][t.toLowerCase()]||{},v=e.deviceConfig[i+"Element"]||e.isPopup!==void 0&&a[i+"Element"]||null;return o.Components[e.device.function]&&o.Components[e.device.function][i]&&o.Components[e.device.function][i][v]||o.Components._defaults&&o.Components._defaults[i]&&o.Components._defaults[i][v]||o.Components._defaults&&o.Components._defaults[i]&&o.Components._defaults[i][t]||null},onDevice:()=>{e.openDeviceDetails!==!1&&e.device.options&&e.device.options.suppressPopup!==!0&&m.set({selectedDeviceId:e.device.id})},setDevice:(t,i,a)=>E.set(t,i,a)}}}),w={key:0,class:"jarvis-StateListItem-Action-primaryStateKey"},$={class:"jarvis-StateListItem-Action-secondaryStatesKeys"};function A(e,m,f,u,y,C){const t=b("icon");return n(),s(k,{key:e.device.id+"-"+e.device.revision+"-"+(e.isPopup!==void 0?"v":"x"),clickable:e.openDeviceDetails!==!1&&e.device.options&&e.device.options.suppressPopup!==!0,"v-ripple":e.openDeviceDetails!==!1&&e.device.options&&e.device.options.suppressPopup!==!0,onClick:e.onDevice,class:j(["jarvis-StateListItem",{"jarvis-StateListItem-Popup":e.isPopup!==void 0,"jarvis-StateListItem-Separator":!e.isFirstItem&&e.isPopup!==void 0}]),style:h(e.bodyStyle)},{default:r(()=>[l(p,{avatar:"",class:"jarvis-StateListItem-Icon"},{default:r(()=>[l(t,{styles:(e.primaryState.icon?e.primaryState.iconStyle:e.bodyState.iconStyle)||{},name:e.primaryState.icon||e.bodyState.icon||e.device.icon||e.device.functionIcon,color:"primary"},null,8,["styles","name"])]),_:1}),l(p,{class:"jarvis-StateListItem-Body"},{default:r(()=>[(n(),s(d(e.getComponent("Title","components")),{stateKey:e.deviceConfig.bodyStateKey,state:e.bodyState,device:e.device,deviceConfig:e.deviceConfig,isPopup:e.isPopup},null,8,["stateKey","state","device","deviceConfig","isPopup"])),e.deviceConfig.bodyStateKey&&e.deviceConfig.bodyElement!==null?(n(),s(d(e.getComponent(e.deviceConfig.bodyStateKey,"body")),{key:0,stateKey:e.deviceConfig.bodyStateKey,state:e.bodyState,device:e.device,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,8,["stateKey","state","device","deviceConfig","onSetDevice"])):c("",!0)]),_:1}),l(p,{side:"",class:"jarvis-StateListItem-Action"},{default:r(()=>[e.deviceConfig.primaryStateKey?(n(),L("div",w,[e.deviceConfig.showState!==!1?(n(),s(d(e.getComponent("State","components")),{key:0,stateKey:e.deviceConfig.primaryStateKey,state:e.primaryState,device:e.device,deviceConfig:e.deviceConfig},null,8,["stateKey","state","device","deviceConfig"])):c("",!0),e.deviceConfig.actionElement!==null?(n(),s(d(e.getComponent(e.deviceConfig.primaryStateKey,"action")),{key:1,stateKey:e.deviceConfig.primaryStateKey,state:e.primaryState,device:e.device,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,8,["stateKey","state","device","deviceConfig","onSetDevice"])):c("",!0)])):c("",!0),P("div",$,[e.deviceConfig.secondaryStatesKeys?(n(),s(d(e.getComponent("SecondaryStates","components")),{key:0,stateKey:e.deviceConfig.primaryStateKey,state:e.primaryState,device:e.device,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,8,["stateKey","state","device","deviceConfig","onSetDevice"])):c("",!0)])]),_:1})]),_:1},8,["clickable","v-ripple","onClick","class","style"])}var N=g(B,[["render",A],["__scopeId","data-v-ef60c664"]]);export{N as default};
