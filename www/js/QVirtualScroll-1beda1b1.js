import{bW as _,cQ as Q,cR as B,c as n,h as i,cf as F,aY as M,d0 as x,a2 as C,d1 as w,x as g,b5 as A,z as D,b4 as E,b8 as L,b6 as R,cl as $,N as p,cd as I,d2 as q}from"./index-7dce1004.js";const N=["horizontal","vertical","cell","none"];var O=_({name:"QMarkupTable",props:{...Q,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>N.includes(e)}},setup(e,{slots:a}){const s=M(),t=B(e,s.proxy.$q),l=n(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(t.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>i("div",{class:l.value},[i("table",{class:"q-table"},F(a.default))])}});function P(e,a){return i("div",e,[i("table",{class:"q-table"},a)])}const H={list:p,table:O},U=["list","table","__qtable"];var Y=_({name:"QVirtualScroll",props:{...x,type:{type:String,default:"list",validator:e=>U.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:s}){let t;const l=C(null),u=n(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:r,localResetVirtualScroll:v,padVirtualScroll:y,onVirtualScrollEvt:f}=w({virtualScrollLength:u,getVirtualScrollTarget:h,getVirtualScrollEl:m}),T=n(()=>{if(u.value===0)return[];const o=(k,z)=>({index:r.value.from+z,item:k});return e.itemsFn===void 0?e.items.slice(r.value.from,r.value.to).map(o):e.itemsFn(r.value.from,r.value.to-r.value.from).map(o)}),b=n(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),V=n(()=>e.scrollTarget!==void 0?{}:{tabindex:0});g(u,()=>{v()}),g(()=>e.scrollTarget,()=>{d(),c()});function m(){return l.value.$el||l.value}function h(){return t}function c(){t=I(m(),e.scrollTarget),t.addEventListener("scroll",f,q.passive)}function d(){t!==void 0&&(t.removeEventListener("scroll",f,q.passive),t=void 0)}function S(){let o=y(e.type==="list"?"div":"tbody",T.value.map(a.default));return a.before!==void 0&&(o=a.before().concat(o)),$(a.after,o)}return A(()=>{v()}),D(()=>{c()}),E(()=>{c()}),L(()=>{d()}),R(()=>{d()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?P({ref:l,class:"q-table__middle "+b.value},S()):i(H[e.type],{...s,ref:l,class:[s.class,b.value],...V.value},S)}}});export{Y as Q,P as g};
