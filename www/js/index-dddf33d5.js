import{Q as E}from"./QToolbarTitle-18a963cd.js";import{Q as b}from"./QToolbar-136832f4.js";import{Q as S}from"./QExpansionItem-6fc54137.js";import{bt as V,a4 as j,cq as k,bw as O,Q as c,k as Q,dg as J,aG as u,ay as s,W as t,X as m,a2 as a,b1 as r,a1 as $,D as M,I as w,aE as y,b3 as g,bn as h,C as N,A as T,ak as x}from"./index-67bd4720.js";import{J as B}from"./json-editor-78f86f74.js";import"./QSlideTransition-2c5900db.js";import"./_commonjsHelpers-55d1ff45.js";const D=j({name:"SettingsPage",components:{JsonEditor:B},setup(){const n=k(),i=O(),f=c(()=>i.pageHeight),v=c(()=>n.settings),C=c(()=>{var e;return(e=n.settings)==null?void 0:e.configExpertMode}),_=e=>e?e({jarvis:i,editor:n}):!0,d=e=>n.settings[e.id]!==void 0?e.validate?e.validate(n.settings[e.id]):n.settings[e.id]:e.value,l=({id:e,value:o})=>n.set({["settings."+e]:o}),p=e=>{if(e._error){n.addError(e.id,e._error);return}n.removeError(e.id),e.value&&n.set({[e.id]:JSON.parse(e.value)})};return{expanded:Q({}),groups:J,pageHeight:f,expertMode:C,json:v,dependencies:_,getValue:d,onChange:l,onJsonEditor:p}}}),H={class:"full-height"},P={class:"row no-wrap"},z={class:"row",style:{padding:"8px 16px"}};function I(n,i,f,v,C,_){const d=u("inputs"),l=u("json-editor"),p=u("paper");return s(),t("div",H,[m("div",P,[a(b,{class:"paper",style:{"min-height":"56px"}},{default:r(()=>[a(E,{shrink:""},{default:r(()=>[$(M(n.$t("Settings")),1)]),_:1})]),_:1})]),(s(!0),t(w,null,y(n.groups,e=>g((s(),t("div",{class:"row no-wrap paper",key:e.id},[a(S,{modelValue:n.expanded[e.id],"onUpdate:modelValue":o=>n.expanded[e.id]=o,icon:e.icon,label:n.$t(e.label),class:"full-width"},{default:r(()=>[m("div",z,[(s(!0),t(w,null,y(e.settings,o=>g((s(),t("div",{class:T("col-"+(o.columns||2)),key:o.id},[m("form",null,[a(d,x(o,{onOnChange:n.onChange,onOnSelect:n.onChange,value:n.getValue(o)}),null,16,["onOnChange","onOnSelect","value"])])],2)),[[h,n.dependencies(o.dependency)]])),128))])]),_:2},1032,["modelValue","onUpdate:modelValue","icon","label"])])),[[h,!n.expertMode]])),128)),g(a(p,{style:N({height:n.pageHeight-66-16+"px"})},{default:r(()=>[a(l,{id:"settings",json:n.json,onOnChange:n.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[h,n.expertMode]])])}var X=V(D,[["render",I]]);export{X as default};
