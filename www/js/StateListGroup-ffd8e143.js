import{_ as C,q as K,a2 as N,c as b,dp as p,A as I,a3 as k,o as c,a as m,w as f,k as S,Z as L,i as G,t as O,M as v,d as V,ad as $,p as D,g as _,L as w}from"./index-49754fed.js";const B=K({name:"ModuleStateListGroup",props:["devices","deviceConfig"],setup(t){const u=N({}),y=b(()=>{const e=Object.values(u.value),s=e.filter(o=>o===!0),i=e.filter(o=>o===!1);return e.length===s.length?!0:e.length===i.length?!1:null}),l=(e,s,i)=>{if(e)return;const{item:o}=t.devices[i.id+"#"+s.key]||{},r=s&&s.val!==void 0?s.val:null;if(o&&o.useInGroup!==!1){let{on:n,off:a}=s&&s.properties||{};n=n!==void 0?n:!0,u.value[i.id+"-"+s.stateKey]=r!==null?r.toString()===n.toString()||typeof r=="number"&&r>0:a}},g=(e=!0)=>{for(const s in t.devices){const{device:i,item:o}=t.devices[s],r=o.primaryStateKey.toLowerCase(),n=i.states[r]&&i.states[r].properties||{},a=u.value[i.id+"-"+o.primaryStateKey],h=typeof a=="boolean"?!1:typeof a=="number"?!0:!Number.isNaN(parseFloat(a))&&a.toString().length===parseFloat(a).toString().length;e===!0&&n.setOn!==void 0?e=n.setOn:e===!1&&n.setOff!==void 0?e=n.setOff:e===!0&&n.on!==void 0||e===!1&&n.off!==void 0?e=e===!0?n.on:n.off:h&&typeof e=="boolean"&&(e=e===!0?parseInt(n.level)||100:0),e=typeof e=="string"&&(e==="true"||e==="false")?e==="true":e;const d=parseInt(e)||null;e=typeof e=="string"&&d!==null&&!Number.isNaN(d)&&d.toString().length===e.length?d:e,o.useInGroup!==!1&&p.set(i.id,o.primaryStateKey,e)}};if(t.deviceConfig.actions)for(const e in t.devices)t.devices[e].item.primaryStateKey&&p.listen(t.devices[e].device.id,t.devices[e].item.primaryStateKey,l);return I(()=>{for(const e in t.devices){const{device:s,item:i}=t.devices[e];i.primaryStateKey&&p.unlisten(s.id,i.primaryStateKey,l)}}),{components:k.Components._defaults.action,groupDevicesStates:u,groupState:y,set:g}}}),E={key:0};function F(t,u,y,l,g,e){return c(),m(w,{dense:"",class:"jarvis-StateListGroup"},{default:f(()=>[S(v,null,{default:f(()=>[S(L,{overline:""},{default:f(()=>[G(O(t.deviceConfig.name),1)]),_:1})]),_:1}),t.deviceConfig.actions===!0?(c(),m(v,{key:0,side:""},{default:f(()=>[t.deviceConfig.groupElement?(c(),V("div",E,[(c(),m($(t.components[t.deviceConfig.groupElement]),D(t.$props,{onSet:t.set,stateKey:"group",state:{properties:{},stateStyle:{},val:t.groupState}}),null,16,["onSet","state"]))])):_("",!0)]),_:1})):_("",!0)]),_:1})}var j=C(B,[["render",F]]);export{j as default};
