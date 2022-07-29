import{_ as S,q as B,dh as I,c as h,d8 as M,dy as N,a4 as b,z as V,cl as A,j as P,o as r,d as T,K as k,a2 as _,k as u,d0 as j,w as l,i as v,t as c,a as i,Q as f,g as y,e as $,f as D,n as E,dq as F,d5 as O,cG as q}from"./index-2b0597a6.js";import{Q as w,b as g,c as H}from"./QTable-7f4cea13.js";import"./QVirtualScroll-18e9bfb1.js";const G=B({name:"ModuleAdapterLogs",props:["widget","_containerSize"],setup(a){const p=F.getConnection,C=I(),z=h(()=>a.widget.config),n=h(()=>({...M.joinConfig(z.value,N)})),x=[{name:"from",field:"from",label:"Adapter",align:"left",sortable:!0},{name:"ts",field:"ts",label:"Time",align:"left",sortable:!0},{name:"severity",field:"severity",label:"Severity",align:"left",sortable:!0},{name:"message",field:"message",label:"Message",align:"left",sortable:!1}],d=e=>!(!n.value.adapters.includes(e.from)||!n.value.severity.includes(e.severity)||n.value.message&&RegExp(n.value.message,"gi").test(e.message)),t=(e,s)=>(e.from.startsWith("host.")||e.from,e.raw=e.message,e._id=O(),e.ts=Number.isInteger(e.ts)?q(e.ts,n.value.timeFormat||"dd.MM.yyyy HH:mm:ss"):e.ts,e.icon=s[e.from]&&s[e.from].extIcon?"img:"+s[e.from].extIcon:"",e.message=e.message.replace(e.from,""),e.message=e.message.indexOf(") ")!==-1?e.message.substr(e.message.indexOf(") ")+2):e.message,n.value.columns.includes("from")||delete e.from,n.value.columns.includes("ts")||delete e.ts,n.value.columns.includes("severity")||delete e.severity,n.value.columns.includes("message")||delete e.message,e),L=b(!1),Q=b(null),m=b();return V(()=>{const e=C.instances.val||{};p.getLogs("current").then(s=>{m.value=s.filter(o=>d(o)).map(o=>t(o,e)),A.getInstance().on("message",o=>{d(o)&&m.value.unshift(t(o,e))}),p.on("_log",o=>{d(o)&&m.value.unshift(t(o,e))})}).catch(s=>{console.error(s),Q.value=s.message||s}).finally(()=>{L.value=!0})},{flush:"post"}),{moduleConfig:n,columns:x,columnsVisible:n.value.columns,pagination:h(()=>({sortBy:n.value.sortColumn,descending:n.value.sortDirection,rowsPerPage:n.value.rowsPerPage})),loaded:L,error:Q,logs:m}}});function J(a,p,C,z,n,x){const d=P("alert");return r(),T("div",{key:a.widget.revision,class:"jarvis-AdapterLogs",style:E({height:a._containerSize.height+"px"})},[k(u(j,{indeterminate:""},null,512),[[_,!a.loaded&&!a.error]]),k(u(d,null,{default:l(()=>[v(c(a.error),1)]),_:1},512),[[_,a.loaded&&a.error]]),k(u(H,{rows:a.logs,flat:"",dense:a.moduleConfig.dense,pagination:a.pagination,"binary-state-sort":"",columns:a.columns,"row-key":"_id","visible-columns":a.columnsVisible,class:"sticky-table-header full-height"},{body:l(({row:t})=>[u(w,null,{default:l(()=>[t.from!==void 0?(r(),i(g,{key:0},{default:l(()=>[u(f,{name:t.icon},null,8,["name"]),v(" \xA0"+c(t.from),1)]),_:2},1024)):y("",!0),t.ts!==void 0?(r(),i(g,{key:1},{default:l(()=>[v(c(t.ts),1)]),_:2},1024)):y("",!0),t.severity!==void 0?(r(),i(g,{key:2},{default:l(()=>[t.severity==="info"?(r(),i(f,{key:0,size:"xs",name:"mdi-information",color:"blue"})):t.severity==="warn"?(r(),i(f,{key:1,size:"xs",name:"mdi-alert-box",color:"warning"})):t.severity==="error"?(r(),i(f,{key:2,size:"xs",name:"mdi-close-box",color:"negative"})):(r(),i(f,{key:3,size:"xs",name:"mdi-bug",color:"grey"})),$("span",{style:{"margin-left":"4px"},class:D("text-"+(t.severity==="info"?"primary":t.severity==="warn"?"warning":t.severity==="error"?"negative":"grey"))},c(t.severity),3)]),_:2},1024)):y("",!0),t.message!==void 0?(r(),i(g,{key:3},{default:l(()=>[v(c(typeof t.message=="object"?JSON.stringify(t.message):t.message),1)]),_:2},1024)):y("",!0)]),_:2},1024)]),_:1},8,["rows","dense","pagination","columns","visible-columns"]),[[_,a.loaded&&!a.error]])],4)}var U=S(G,[["render",J]]);export{U as default};
