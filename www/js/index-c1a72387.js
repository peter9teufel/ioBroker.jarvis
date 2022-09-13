import{Q as we}from"./QToolbarTitle-d97275bb.js";import{Q as Se}from"./QToolbar-b8fbade7.js";import{a4 as te,cp as j,bM as ce,cq as ne,k as Q,aY as ge,bQ as ie,Q as L,db as ke,dc as Oe,bt as oe,d6 as ae,aG as z,ay as c,W as k,a2 as l,b1 as t,U as _,bT as se,X as i,D as a,bD as fe,bB as B,bU as U,b3 as I,bn as D,bP as _e,I as H,aE as F,bF as q,bG as y,bO as E,a1 as $,cN as Ie,bH as K,V as M,bV as he,bS as ye,bW as be,aZ as We,as as De,ct as Te,bp as x,A as N,C as Z,bw as Ce,by as ve,cv as Ee,cu as Pe,dd as Le,de as ze,df as je,cR as Be}from"./index-988ebe8f.js";import{Q as de}from"./QBtnDropdown-60fc60ea.js";import{J as qe}from"./json-editor-e307cf78.js";import{Q as re}from"./QTooltip-82fe9d6d.js";import{Q as $e}from"./QExpansionItem-11079e4f.js";import{W as Ae}from"./WidgetPage-7578f500.js";import{a as pe}from"./useDragDrop-5eb48eec.js";import"./_commonjsHelpers-55d1ff45.js";import"./QSlideTransition-69ee8af7.js";const Qe=te({name:"WidgetPopup",props:["widget"],emits:["onClose","onSave"],components:{WidgetPage:Ae},setup(e,{emit:p}){j.dev("DEBUG","WidgetPopup","setup()");const f=ce(),S=ne(),A=[{label:f.t("top aligned"),value:"top"},{label:f.t("middle aligned"),value:"middle"},{label:f.t("bottom aligned"),value:"bottom"}],O=[{label:f.t("left aligned"),value:"left"},{label:f.t("center aligned"),value:"center"},{label:f.t("right aligned"),value:"right"},{label:f.t("fill full width"),value:"fill-width"}];let u={};Object.values(S.widgets).forEach(C=>{u[C.module]=u[C.module]||{label:C.module,widgets:[]},C._deleted!==!0&&u[C.module].widgets.push({...C,value:C.id,label:C.label?C.label+" "+(C.title?"("+C.title+")":""):C.title||""})}),u=Object.values(u);const r=Q(u),v=Q(null);ge(()=>e.widget,C=>{j.dev("DEBUG","WidgetPopup","watch",C),v.value=C?ie({items:[],...C}):null});const n=L(()=>v.value.scaleToFitContents!==void 0?v.value.scaleToFitContents:!0),b=L(()=>v.value.alignmentVertical||"top"),s=L(()=>v.value.alignmentHorizontal||"center"),o=L(()=>v.value.allowFullscreen||!1),W=L(()=>v.value.items?v.value.items.map(C=>S.widgets[C]||{}):[]),P=(C,me)=>{j.dev("DEBUG","WidgetPopup","onFilter",C);let ue=u;C&&(C=C.toLowerCase(),ue=[],u.forEach(Y=>{const V=[];Y.widgets.forEach(X=>{(X.module&&X.module.toLowerCase().indexOf(C)!==-1||X.title&&X.title.toLowerCase().indexOf(C)!==-1||X.label&&X.label.toLowerCase().indexOf(C)!==-1)&&V.push(X)}),V.length>0&&ue.push({label:Y.label+" ("+V.length+")",widgets:V})})),me(()=>{r.value=ue.sort((Y,V)=>(Y=Y.label?Y.label.toLowerCase():"",V=V.label?V.label.toLowerCase():"",Y===V?0:Y>V?1:-1))})},h=Q(null);let T=!1;const G=C=>{j.dev("DEBUG","WidgetPopup","onChange",C),v.value[C.id]=C.value},J=C=>{C&&T===!0&&g({id:h.value}),T=!1,h.value=null},ee=()=>{v.value=null,p("onClose")},m=()=>{p("onSave",v.value),ee()},d=Q(),g=C=>{v.value.items.push(C.id),d.value.hidePopup()};return{ScaleExceptions:ke,AlignmentExceptions:Oe,alignmentHorizontal:O,alignmentVertical:A,inputValueAlignmentHorizontal:s,inputValueAlignmentVertical:b,inputScaleToFitContents:n,inputValueAllowFullscreen:o,onChange:G,onClose:J,onCancel:ee,onSave:m,onFilter:P,itemList:W,widgetListFiltered:r,selectedWidgetId:h,container:v,addWidgetElement:d,assignWidget:g,addWidget:()=>{T=!0,h.value=ae()},editWidget:C=>{h.value=C},deleteWidget:C=>{confirm(f.t("Really delete item?"))&&v.value.items.splice(v.value.items.indexOf(C),1)}}}}),He={class:"text-h6"},Fe={class:"text-h7 primary q-ma-sm"},Ue={class:"row"},Ge={class:"col"},Ve={class:"col-1",style:{"text-align":"center","line-height":"56px"}},Me={class:"col-3",style:{"text-align":"center","line-height":"56px"}},Re={key:0},Ne={class:"row items-center"},Je={class:"text-h7 primary q-ma-sm",style:{"margin-top":"16px"}},Ye={class:"row q-pb-xs"},Ze={class:"col"},Ke={class:"col"},Xe={class:"col"},xe={class:"col"};function el(e,p,f,S,A,O){const u=z("widget-page"),r=z("icon"),v=z("inputs");return c(),k("div",null,[l(u,{onOnClose:e.onClose,widgetId:e.selectedWidgetId},null,8,["onOnClose","widgetId"]),l(be,{"model-value":e.container!==null,persistent:""},{default:t(()=>[e.container?(c(),_(ye,{key:0,class:"column",style:{width:"1200px","max-width":"90vw"}},{default:t(()=>[l(se,{class:"row items-center"},{default:t(()=>[i("div",He,a(e.$t("Assign Widget to Box")),1),l(fe),l(B,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),l(U),l(se,{class:"col defaultPadding-2 q-pt-none scroll body"},{default:t(()=>[i("div",Fe,a(e.$t("Widget")),1),l(U,{style:{margin:"0 0 8px 0"}}),I(i("div",Ue,[i("div",Ge,[l(_e,{onFilter:e.onFilter,ref:"addWidgetElement",label:e.$t("Assign Widget"),options:e.widgetListFiltered,"model-value":"","use-input":"","stack-label":"",style:{margin:"0 8px"}},{option:t(n=>[l($e,{"expand-separator":"","header-class":"text-weight-bold",label:n.opt.label},{default:t(()=>[(c(!0),k(H,null,F(n.opt.widgets,b=>I((c(),_(q,{key:b.id,clickable:"",onClick:s=>e.assignWidget(b)},{default:t(()=>[l(y,null,{default:t(()=>[b.label?(c(),_(E,{key:0,class:"q-ml-md"},{default:t(()=>[$(a(b.label),1)]),_:2},1024)):(c(),_(E,{key:1,class:"q-ml-md"},{default:t(()=>[i("em",null,"("+a(e.$t("no title"))+")",1)]),_:1})),l(E,{class:"q-ml-md",caption:""},{default:t(()=>[$(a(b.id),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Ie]])),128))]),_:2},1032,["label"])]),_:1},8,["onFilter","label","options"])]),i("div",Ve,a(e.$t("or")),1),i("div",Me,[l(B,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget},null,8,["label","onClick"])])],512),[[D,e.itemList.length===0]]),l(K,null,{default:t(()=>[(c(!0),k(H,null,F(e.itemList,(n,b)=>(c(),_(q,{key:n.id+"-"+b,class:"list-group-item"},{default:t(()=>[n.icon?(c(),_(y,{key:0,avatar:""},{default:t(()=>[l(r,{color:"primary",name:n.icon},null,8,["name"])]),_:2},1024)):M("",!0),l(y,null,{default:t(()=>[l(E,null,{default:t(()=>[$(a(n.label||n.title||e.$t("no title"))+" ",1),n._deleted?(c(),k("em",Re,"[ "+a(e.$t("deleted"))+" ]",1)):M("",!0)]),_:2},1024),l(E,{caption:""},{default:t(()=>[$("Widget ID: "+a(n.id)+", Module: "+a(n.module),1)]),_:2},1024)]),_:2},1024),l(y,{side:""},{default:t(()=>[i("div",Ne,[n._deleted!==!0?(c(),_(B,{key:0,size:"sm",flat:"",round:"",onClick:s=>e.editWidget(n.id),icon:"mdi-pencil"},null,8,["onClick"])):M("",!0),l(B,{size:"sm",flat:"",round:"",onClick:s=>e.deleteWidget(n.id),icon:"mdi-delete",color:"negative"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),i("div",Je,a(e.$t("Options")),1),l(U,{style:{margin:"0 0 8px 0"}}),i("div",Ye,[i("div",Ze,[l(v,{icon:"mdi-resize",onOnChange:e.onChange,id:"allowFullscreen",label:"Allow fullscreen",type:"switch",value:e.inputValueAllowFullscreen},null,8,["onOnChange","value"])]),i("div",Ke,[I(l(v,{icon:"mdi-fit-to-page",onOnChange:e.onChange,id:"scaleToFitContents",label:"Scale contents to fit widget",type:"switch",value:e.inputScaleToFitContents},null,8,["onOnChange","value"]),[[D,e.itemList[0]&&e.ScaleExceptions.includes(e.itemList[0].module)===!1]])]),i("div",Xe,[I(l(v,{icon:"mdi-arrow-split-horizontal",onOnSelect:e.onChange,id:"alignmentVertical",label:"Vertical alignment",type:"select",options:e.alignmentVertical,value:e.inputValueAlignmentVertical},null,8,["onOnSelect","options","value"]),[[D,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])]),i("div",xe,[I(l(v,{icon:"mdi-arrow-split-vertical",onOnSelect:e.onChange,id:"alignmentHorizontal",label:"Horizontal alignment",type:"select",options:e.alignmentHorizontal,value:e.inputValueAlignmentHorizontal},null,8,["onOnSelect","options","value"]),[[D,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])])])]),_:1}),l(U),l(he,{align:"right"},{default:t(()=>[l(B,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),l(B,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave},null,8,["label","onClick"])]),_:1})]),_:1})):M("",!0)]),_:1},8,["model-value"])])}var ll=oe(Qe,[["render",el]]);const tl=te({name:"WidgetSection",props:["pageId","tabId","id","label","icon","fullscreen","widgetEdges","widgetConfig","items"],components:{WidgetPopup:ll},setup(e){j.dev("DEBUG","WidgetSection","setup()");const p=ce(),f=ne(),S=[{id:"copy",icon:"mdi-content-copy",label:p.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:p.t("duplicate")}],A=L(()=>e.id!=="desktop"&&e.widgetConfig[e.id+"SameAs"]!=="specific-layout"),O=L(()=>[{label:p.t("wie Desktop"),value:"desktop"},{label:p.t("wie Smartphone"),value:"smartphone"},{label:p.t("eigenes Layout"),value:"specific-layout"}].filter(m=>m.value!==e.id));ge(()=>e.fullscreen,m=>{j.dev("DEBUG","WidgetSection","watch",m),m===!0&&o.value.length===0&&h()});const u=m=>{j.dev("DEBUG","WidgetSection","onChange",m),f.setWidgetConfig({pageId:e.pageId,tabId:e.tabId,key:m.id,val:m.value})},r=Q({}),v=(m,d,g,w,R)=>{j.dev("DEBUG","WidgetSection","onResized",m,d,g,w,R),r.value[m]={width:(100/(12/g)).toFixed(2),height:w}},n={},b=m=>f.widgets[m]||{items:[]},s=m=>{m=m||[];const d=m.join("-");return n[d]?n[d]:(j.dev("DEBUG","WidgetSection","getWidgetsData",m),!m||m.length===0?p.t("No widgets assigned"):(n[d]=m.map(g=>{const w=b(g);w.items=w.items||[];const R=w.items.filter(le=>le.type==="divider").length;return w.module+(!w.label&&!w.title?"":" ("+(w.label||w.title)+(w.module!=="StateList"?"":", "+w.items.length+" "+p.t("items")+" "+p.t("apprx.")+" "+((w.hideTitle!==!0?56:0)+R+(w.items.length-R)*46)+"px "+p.t("in height"))+")")}).join(", "),n[d]))},o=Q(ie(e.items)||[]);We(()=>{o.value=ie(e.items)||[]});const W=m=>{f.setWidgets({pageId:e.pageId,tabId:e.tabId,key:"widgets"+Te(e.id),val:m})},P=Q(),h=()=>{let m=0,d=0;for(const g of o.value){const w=g.y+g.h;w>d&&(d=w,m=g.x)}if(o.value.push({x:m,y:d,w:4,h:4,i:ae()}),P.value&&P.value[P.value.length-1]){const g=P.value[P.value.length-1].$el,{top:w,height:R}=g.getBoundingClientRect();g.parentElement.parentElement.scrollTo(0,w+R+1e3)}W(o.value)},T=m=>{const d=m.id,g=ie(o.value.find(w=>w.i===d));g.i=ae(),m.val==="copy"&&(g.items=g.items||[],g.items=g.items.map(w=>{const R=b(w),le=ae();return f.copyWidget({id:le,widget:R}),le})),o.value.push(g),W(o.value)},G=m=>{confirm(p.t("Really delete item?"))&&(o.value.splice(o.value.findIndex(g=>g.i===m),1),W(o.value))},J=Q(null),ee=m=>{j.dev("DEBUG","WidgetSection","saveWidgetAssignments",m),o.value.splice(o.value.findIndex(d=>d.i===J.value.i),1,{...J.value,...m}),J.value=null,W(o.value)};return De(()=>{P.value&&P.value.forEach(m=>{v(m.$props.i,m.$props.h,m.$props.w,m.$props.h*m.rowHeight+(m.$props.h-1)*m.margin[0],null)})}),{...pe(o),gridItemElements:P,expanded:e.id==="desktop",copyMenu:S,onChange:u,onResized:v,popupWidgetOrder:Q(!1),widgets:o,widgetSizes:r,setWidgets:W,getWidget:b,getWidgetsData:s,selectedWidget:J,addWidget:h,copyWidget:T,deleteWidget:G,saveWidgetAssignments:ee,disabled:A,options:O}}}),nl={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},ol={class:"grid-item tooltip-widget"},il={class:"row justify-between"},al={class:"row items-center",style:{"padding-left":"8px"}},sl={class:"row"},dl={style:{padding:"0 8px 8px 8px","min-height":"64px"},class:"row"},ul={style:{margin:"auto 0"}},rl={class:"text-h6 row items-center"},cl={class:"grid-layout-container",style:{height:"800px","overflow-y":"scroll"}},gl={class:"row justify-between"},pl={class:"row items-center",style:{"padding-left":"8px"}},ml=$("\xA0 "),vl={key:0},fl={class:"row"},hl={class:"row q-pa-sm tooltip-widget",style:{overflow:"hidden"}};function yl(e,p,f,S,A,O){const u=z("widget-popup"),r=z("icon"),v=z("inputs"),n=z("grid-item"),b=z("grid-layout");return c(),k("div",null,[l(u,{onOnClose:p[0]||(p[0]=s=>e.selectedWidget=null),onOnSave:e.saveWidgetAssignments,widget:e.selectedWidget},null,8,["onOnSave","widget"]),l($e,{"model-value":e.disabled!==!0?e.expanded:!1,class:"full-width paper",disable:e.disabled},{header:t(()=>[i("div",{class:"row full-width",onClick:p[2]||(p[2]=s=>e.expanded=!e.expanded)},[l(y,{avatar:""},{default:t(()=>[l(r,{name:e.icon},null,8,["name"])]),_:1}),l(y,{style:{height:"40px"}},{default:t(()=>[$(a(e.label),1)]),_:1}),e.id!=="desktop"?(c(),_(y,{key:0,side:"",class:"notDisabled"},{default:t(()=>[l(v,{onOnSelect:e.onChange,type:"select",options:e.options,dense:"",label:e.$t("Use same layout as"),id:e.id+"SameAs",onClick:p[1]||(p[1]=x(()=>{},["prevent"])),value:e.widgetConfig[e.id+"SameAs"]||"desktop",style:{width:"150px"}},null,8,["onOnSelect","options","label","id","value"])]),_:1})):M("",!0)])]),default:t(()=>[i("div",null,[I(i("div",null,[I(i("div",nl,[l(B,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"])],512),[[D,e.widgets.length===0]]),l(U),I(i("div",ol,[i("div",il,[i("div",al,a(e.$t("Fullscreen")),1),i("div",sl,[l(B,{size:"sm",flat:"",round:"",icon:"mdi-pencil",onClick:p[3]||(p[3]=s=>e.selectedWidget=e.widgets[0])})])])],512),[[D,e.widgets[0]!==void 0]])],512),[[D,e.fullscreen===!0]]),I(i("div",null,[i("div",dl,[l(B,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"]),l(v,{dense:"",type:"switch",inline:"",label:e.$t("Height of all widgets equal to page height (no scrollbars)"),id:e.id+"FitPageHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"FitPageHeight"]||!1,style:{margin:"auto 0 auto 8px"}},null,8,["label","id","onOnChange","value"]),I(l(v,{set:e.rowHeight=parseInt(e.widgetConfig[e.id+"FitPageHeight"]!==!0&&e.widgetConfig[e.id+"WidgetHeight"])||50,dense:"",type:"number",min:10,label:e.$t("Widget height")+" ("+e.$t("in pixels")+")",id:e.id+"WidgetHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"WidgetHeight"]||50,style:{margin:"auto 0 auto 4px"}},null,8,["set","label","id","onOnChange","value"]),[[D,e.widgetConfig[e.id+"FitPageHeight"]!==!0]]),l(v,{set:e.gapSize=parseInt(e.widgetConfig[e.id+"GapSize"]||5),dense:"",type:"number",min:0,label:e.$t("Widget gaps")+" ("+e.$t("in pixels")+")",id:e.id+"GapSize",onOnChange:e.onChange,value:e.widgetConfig[e.id+"GapSize"]||5,style:{margin:"auto 0 auto 4px"}},null,8,["set","label","id","onOnChange","value"]),i("div",ul,[l(v,{type:"button",color:"primary",icon:"mdi-sort-numeric-variant",label:"Change Widget Responsive Order",onOnClick:p[4]||(p[4]=s=>e.popupWidgetOrder=!0),size:"md"})])]),l(U),l(be,{modelValue:e.popupWidgetOrder,"onUpdate:modelValue":p[7]||(p[7]=s=>e.popupWidgetOrder=s)},{default:t(()=>[l(ye,{class:"column full-height",style:{width:"1400px","max-width":"40vw"}},{default:t(()=>[l(se,{class:"row items-center"},{default:t(()=>[i("div",rl,a(e.$t("Change Widget Responsive Order")),1),l(fe),l(B,{flat:"",round:"",color:"grey",icon:"close",onClick:p[5]||(p[5]=s=>e.popupWidgetOrder=!1)})]),_:1}),l(U),l(se,{class:"col scroll body"},{default:t(()=>[l(K,{ref:"elDragDrop"},{default:t(()=>[(c(!0),k(H,null,F(e.widgets,(s,o)=>(c(),_(q,{key:"grid-item-"+s.i,class:"paper","data-id":s.i,set:s=e.getWidget(s.items[0])},{default:t(()=>[l(y,{avatar:"",center:""},{default:t(()=>[l(r,{size:"sm",name:"mdi-drag-horizontal",class:"dragndrop"})]),_:1}),l(y,null,{default:t(()=>[s.title?(c(),_(E,{key:0},{default:t(()=>[$(a(s.title),1)]),_:2},1024)):(c(),_(E,{key:1},{default:t(()=>[i("em",null,a(e.$t("No Title")),1)]),_:1})),l(E,{caption:""},{default:t(()=>[$(a(e.$t("Module"))+" "+a(s.module),1)]),_:2},1024)]),_:2},1024),l(y,{side:""},{default:t(()=>[$(a(o),1)]),_:2},1024)]),_:2},1032,["data-id","set"]))),128))]),_:1},512)]),_:1}),l(U),l(he,{align:"right"},{default:t(()=>[l(B,{flat:"",label:e.$t("Close"),color:"primary",onClick:p[6]||(p[6]=s=>e.popupWidgetOrder=!1)},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i("div",cl,[l(b,{onLayoutUpdated:e.setWidgets,layout:e.widgets,"onUpdate:layout":p[8]||(p[8]=s=>e.widgets=s),"row-height":e.rowHeight,margin:[e.gapSize,e.gapSize],"use-css-transforms":!0,responsive:!1,preventCollision:!1,style:{"min-height":"50px"}},{default:t(()=>[(c(!0),k(H,null,F(e.widgets,(s,o)=>(c(),_(n,{key:"grid-item-"+s.i,ref_for:!0,ref:"gridItemElements",x:s.x,y:s.y,w:s.w,h:s.h,i:s.i,class:N(["grid-item tooltip-widget",{"rounded-borders":e.widgetEdges!==!0}]),onResized:e.onResized},{default:t(()=>[l(re,{target:".tooltip-widget"},{default:t(()=>[$(a(e.getWidgetsData(s.items)),1)]),_:2},1024),i("div",gl,[i("div",pl,[i("span",{class:N("sort-"+o)},"[ "+a(o)+" ]",3),ml,l(re,{target:".sort-"+o},{default:t(()=>[$(a(e.$t("Responsive Position"))+": "+a(o),1)]),_:2},1032,["target"]),$(" "+a(e.$t("Position")+": "+s.x+"x * "+s.y+"y")+" ",1),e.widgetSizes[s.i]?(c(),k("span",vl,"\xA0- "+a(e.$t("Size")+": "+s.w+"w ("+e.widgetSizes[s.i].width+"%) * "+s.h+"h ("+e.widgetSizes[s.i].height+"px)"),1)):M("",!0)]),i("div",fl,[l(v,{class:"q-ma-none",type:"button",round:"",icon:"mdi-pencil",tooltip:e.$t("edit"),onClick:x(W=>e.selectedWidget=s,["stop"])},null,8,["tooltip","onClick"]),l(v,{class:"q-ma-none",type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyWidget,id:s.i,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"]),l(v,{class:"q-ma-none",type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:x(W=>e.deleteWidget(s.i),["stop"])},null,8,["tooltip","onClick"])])]),i("div",hl,[$(a(e.getWidgetsData(s.items))+" ",1),l(re,null,{default:t(()=>[$(a(e.getWidgetsData(s.items)),1)]),_:2},1024)])]),_:2},1032,["x","y","w","h","i","class","onResized"]))),128)),i("div",{class:"grid-spacer",style:Z({bottom:-3*e.rowHeight+"px",height:3*e.rowHeight+"px"})},null,4)]),_:1},8,["onLayoutUpdated","layout","row-height","margin"])])],512),[[D,e.fullscreen!==!0]])])]),_:1},8,["model-value","disable"])])}var bl=oe(tl,[["render",yl]]);const Cl=te({name:"TabSection",props:["pageId","tabId"],components:{WidgetSection:bl},setup(e){j.dev("DEBUG","TabSection","setup()");const p=ne(),f=O=>{j.dev("DEBUG","TabSection","onChange",O);let u=O.value;try{u=u&&O.json!==void 0&&u.indexOf("{")>-1&&u.indexOf("}")>-1?JSON.parse(u):u}catch(r){console.warn(O.value,r)}p.editTab({pageId:e.pageId,tabId:e.tabId,key:O.id,val:u})},S=L(()=>(p.layout.find(r=>r.id===e.pageId)||{}).tabs.find(r=>r.id===e.tabId)||{}),A=L(()=>S.value.title?typeof S.value.title=="string"?S.value.title:S.value.title.default||Object.values(S.value.title)[0]:"");return{onChange:f,tab:S,tabTitle:A}}}),$l={style:{padding:"0 8px"}},wl={class:"text-h6 primary q-ma-sm"},Sl={class:"row"},kl={class:"col"},Ol={class:"col"},_l={class:"row"},Il={class:"col"},Wl={class:"col"},Dl={class:"row"},Tl={class:"col"},El={class:"col"},Pl={class:"row"},Ll={class:"col-2"},zl={class:"col"},jl={class:"text-h6 primary q-ma-sm",style:{"margin-top":"24px"}};function Bl(e,p,f,S,A,O){const u=z("inputs"),r=z("widget-section");return c(),k("div",$l,[i("div",wl,a(e.$t("Tab"))+": "+a(e.tabTitle)+" ("+a(e.$t("ID")+": "+e.tab.id)+")",1),i("div",Sl,[i("div",kl,[l(u,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Tab")+" "+e.$t("Icon"),value:e.tab.icon||"",icon:e.tab.icon},null,8,["onOnChange","label","value","icon"])]),i("div",Ol,[l(u,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Tab")+" "+e.$t("Title"),value:e.tab.title||""},null,8,["onOnChange","label","value"])])]),i("div",_l,[i("div",Il,[l(u,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.tab.iconStyle},null,8,["onOnChange","value"])]),i("div",Wl,[l(u,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.tab.bodyStyle},null,8,["onOnChange","value"])])]),i("div",Dl,[i("div",Tl,[l(u,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.tab.iconSelectedStyle},null,8,["onOnChange","value"])]),i("div",El,[l(u,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.tab.bodySelectedStyle},null,8,["onOnChange","value"])])]),i("div",Pl,[i("div",Ll,[l(u,{type:"switch",inline:"",label:e.$t("Tab")+" "+e.$t("Fullscreen"),id:"fullscreen",onOnChange:e.onChange,value:e.tab.fullscreen||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),i("div",zl,[l(u,{type:"switch",inline:"",label:e.$t("Widgets edges (round or angled)"),id:"widgetEdges",onOnChange:e.onChange,value:e.tab.widgetEdges||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])])]),i("div",jl,a(e.$t("Widgets of tab"))+": "+a(e.tabTitle),1),l(r,{pageId:e.pageId,tabId:e.tabId,id:"desktop",label:"Desktop",icon:"mdi-monitor",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsDesktop},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"]),l(r,{pageId:e.pageId,tabId:e.tabId,id:"smartphone",label:"Smartphone",icon:"mdi-cellphone",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsSmartphone},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"])])}var ql=oe(Cl,[["render",Bl]]);const Al=te({name:"DrawerSection",props:["pageId"],components:{TabSection:ql},setup(e,{emit:p}){var m;j.dev("DEBUG","DrawerSection","setup()");const f=Ce(),S=ne(),A=L(()=>{const d=[];return S.getPagesWithoutDeletions.forEach(g=>{g.id!==e.pageId&&d.push({id:g.id,label:g.title,...g})}),d}),O=L(()=>S.layout.find(d=>d.id===e.pageId)||{}),u=L(()=>typeof O.value.title=="string"?O.value.title:O.value.title&&O.value.title.default||Object.values(O.value.title)[0]),r=L({get(){return(O.value.tabs||[]).map(g=>(g._hasIconBinding=typeof g.icon=="object",g._hasTitleBinding=typeof g.title=="object",g))},set(d){S.setTabs({pageId:e.pageId,tabs:d})}}),v=f.getSelectedPage.id===O.value.id&&f.getSelectedTab||((m=O.value.tabs)==null?void 0:m[0])||{},n=Q(v.id||null),b=Q({}),s=(d,g)=>{b.value[".tabOptions-move-"+d.id]=g};let o=null;ge(()=>e.pageId,()=>{var d,g;j.dev("DEBUG","DrawerSection","watch",e.pageId),n.value=o||((g=(d=r.value)==null?void 0:d[0])==null?void 0:g.id)||null,o=null});const W=()=>{S.addTab({pageId:e.pageId}),n.value=r.value[r.value.length-1].id},P=(d,g=!1)=>{S.addTab({pageId:e.pageId,tabId:d,copyWidgets:g}),n.value=r.value[r.value.length-1].id},h=(d,g)=>{S.moveTab({pageId:e.pageId,tabId:d,destinationPageId:g}),n.value=d,o=d,p("onSelectPage",S.layout.find(w=>w.id===g)||{})},T=d=>{if(S.deleteTab({pageId:e.pageId,tabId:d}),n.value===d){const g=r.value.find(w=>w._deleted!==!0);n.value=g?g.id:null}},G=d=>{S.restoreTab({pageId:e.pageId,tabId:d}),n.value=d},J=d=>{j.dev("DEBUG","DrawerSection","onChange",d);let g=d.value;try{g=g&&d.json!==void 0&&d.value.indexOf("{")>-1&&d.value.indexOf("}")>-1?JSON.parse(d.value):d.value}catch(w){console.warn(d.value,w)}S.editDrawerItem({itemId:e.pageId,key:d.id,val:g})},ee=d=>S.changeDrawerItemId(e.pageId,d);return{...pe(r,d=>r.value=d,{direction:"vertical"}),onChange:J,setRef:s,onChangeId:ee,pages:A,page:O,pageTitle:u,tabs:r,tabOptions:b,selectedTab:n,addTab:W,copyTab:P,moveTab:h,deleteTab:T,restoreTab:G}}}),Ql={class:"text-h6 primary q-ma-sm"},Hl={class:"row"},Fl={class:"col"},Ul={class:"col"},Gl={class:"row"},Vl={class:"col"},Ml={class:"col"},Rl={class:"row"},Nl={class:"col"},Jl={class:"col"},Yl={key:0},Zl={class:"text-h6 primary q-ma-sm"},Kl={class:"q-ma-sm row"},Xl={ref:"elDragDrop",style:{display:"flex"}},xl={key:0},et={key:1},lt={key:2},tt={key:3};function nt(e,p,f,S,A,O){const u=z("inputs"),r=z("icon"),v=z("tab-section");return c(),k("div",{key:e.page.id},[i("div",Ql,[$(a(e.$t("Page"))+": "+a(e.pageTitle)+" ",1),i("span",null,"(ID: "+a(e.page.id)+")",1)]),i("div",Hl,[i("div",Fl,[l(u,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Icon"),value:e.page.icon||"",icon:e.page.icon},null,8,["onOnChange","label","value","icon"])]),i("div",Ul,[l(u,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Title"),value:e.page.title||""},null,8,["onOnChange","label","value"])])]),i("div",Gl,[i("div",Vl,[l(u,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.page.iconStyle},null,8,["onOnChange","value"])]),i("div",Ml,[l(u,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.page.bodyStyle},null,8,["onOnChange","value"])])]),i("div",Rl,[i("div",Nl,[l(u,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.page.iconSelectedStyle},null,8,["onOnChange","value"])]),i("div",Jl,[l(u,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.page.bodySelectedStyle},null,8,["onOnChange","value"])])]),!e.page.type||e.page.type==="page"?(c(),k("div",Yl,[i("div",Zl,a(e.$t("Tabs of page"))+": "+a(e.pageTitle),1),i("div",Kl,[l(B,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Tab"),onClick:e.addTab},null,8,["label","onClick"]),l(u,{type:"switch",inline:"",label:e.$t("Do not show Tab Labels (only Icons)"),id:"hideLabels",onOnChange:e.onChange,value:e.page.hideLabels||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),l(Pe,{modelValue:e.selectedTab,"onUpdate:modelValue":p[1]||(p[1]=n=>e.selectedTab=n),"inline-label":"","outside-arrows":"","mobile-arrows":"",class:"bg-primary text-white full-width",align:"left"},{default:t(()=>[i("div",Xl,[(c(!0),k(H,null,F(e.tabs,n=>(c(),_(Ee,{key:n.id,name:n.id,style:Z({backgroundColor:n.backgroundColor}),class:N({"q-px-xs":!0,rowDeleted:n._deleted===!0}),disable:n._deleted===!0},{default:t(()=>[l(r,{size:"sm",name:"mdi-drag-vertical",class:"dragndrop",color:n.color},null,8,["color"]),n._hasIconBinding?(c(),k("div",xl,[l(de,{flat:"",dense:""},{label:t(()=>[l(r,{size:"xs",name:n.icon.default||Object.values(n.icon)[0],class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(H,null,F(n.icon,(b,s)=>(c(),_(q,{key:s},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:b,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),_:2},1024),l(y,null,{default:t(()=>[l(E,null,{default:t(()=>[$(a(b),1)]),_:2},1024),l(E,{caption:""},{default:t(()=>[$(a(s),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(c(),k("div",et,[l(r,{size:"xs",name:n.icon,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])])),n._hasTitleBinding?(c(),k("div",lt,[l(de,{flat:"",dense:"",label:n.title.default||Object.values(n.title)[0]},{default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(H,null,F(n.title,(b,s)=>(c(),_(q,{key:s},{default:t(()=>[l(y,null,{default:t(()=>[l(E,null,{default:t(()=>[$(a(b),1)]),_:2},1024),l(E,{caption:""},{default:t(()=>[$(a(s),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(c(),k("div",tt,[I(i("div",{class:"q-tab__label",style:Z({color:n.color})},a(n.title),5),[[D,e.page.hideLabels!==!0]])])),i("div",{class:"row items-center no-wrap",style:Z([{"margin-left":"16px"},{color:n.color}])},[l(U,{vertical:"",class:"q-ma-xs"}),I(l(u,{round:"",type:"button",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:b=>e.restoreTab(n.id)},null,8,["tooltip","onClick"]),[[D,n._deleted===!0]]),I(l(B,{class:N("tabOptions-"+n.id),dense:"",flat:"",round:"",color:"white",icon:"mdi-dots-vertical",onClick:p[0]||(p[0]=x(()=>{},["stop"]))},null,8,["class"]),[[D,n._deleted!==!0]]),l(ve,{target:".tabOptions-"+n.id,anchor:"bottom left",self:"top left","auto-close":""},{default:t(()=>[I(l(q,{clickable:"",onClick:b=>e.copyTab(n.id,!0)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-content-copy"})]),_:1}),l(y,null,{default:t(()=>[$(a(e.$t("copy")),1)]),_:1})]),_:2},1032,["onClick"]),[[D,n._deleted!==!0]]),I(l(q,{clickable:"",onClick:b=>e.copyTab(n.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-content-duplicate"})]),_:1}),l(y,null,{default:t(()=>[$(a(e.$t("duplicate")),1)]),_:1})]),_:2},1032,["onClick"]),[[D,n._deleted!==!0]]),I(l(q,{class:N("tabOptions-move-"+n.id),onMouseover:b=>e.tabOptions[".tabOptions-move-"+n.id].show(),clickable:""},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-folder-move-outline"})]),_:1}),l(y,null,{default:t(()=>[$(a(e.$t("move")),1)]),_:1}),l(y,{side:""},{default:t(()=>[l(r,{name:"mdi-chevron-right"})]),_:1}),l(ve,{ref_for:!0,ref:b=>e.setRef(n,b),anchor:"top end",self:"top start","auto-close":""},{default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(H,null,F(e.pages,b=>(c(),_(q,{key:b.id,clickable:"",onClick:s=>e.moveTab(n.id,b.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:b.icon},null,8,["name"])]),_:2},1024),l(y,null,{default:t(()=>[$(a(b.title),1)]),_:2},1024),l(y,{side:""})]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1536)]),_:2},1032,["class","onMouseover"]),[[D,n._deleted!==!0&&e.pages.length>0]]),l(q,{clickable:"",style:{color:"#fff",background:"var(--q-negative)"},onClick:b=>e.deleteTab(n.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-delete"})]),_:1}),l(y,null,{default:t(()=>[$(a(e.$t("delete")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["target"])],4)]),_:2},1032,["name","style","class","disable"]))),128))],512)]),_:1},8,["modelValue"]),l(ze,{modelValue:e.selectedTab,"onUpdate:modelValue":p[2]||(p[2]=n=>e.selectedTab=n),animated:"","keep-alive":"",class:"border"},{default:t(()=>[(c(!0),k(H,null,F(e.tabs,n=>(c(),_(Le,{key:n.id,name:n.id,style:{padding:"16px 0"},class:"body"},{default:t(()=>[l(v,{pageId:e.page.id,tabId:n.id},null,8,["pageId","tabId"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])):M("",!0)])}var ot=oe(Al,[["render",nt]]);const it=te({name:"LayoutsPage",components:{DrawerSection:ot,JsonEditor:qe},setup(){j.dev("DEBUG","LayoutsPage","setup()");const e=ce(),p=Ce(),f=ne(),S=[{id:"copy",icon:"mdi-content-copy",label:e.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:e.t("duplicate")}],A=h=>f.set({["settings."+h.id]:h.value}),O=h=>{if(h._error){f.addError(h.id,h._error);return}f.removeError(h.id),h.value&&f.set({[h.id]:JSON.parse(h.value)})},u=L({get(){return(f.getLayout||[]).map(T=>(T._hasIconBinding=typeof T.icon=="object",T._hasTitleBinding=typeof T.title=="object",T))},set(h){f.setLayout(h)}}),r=Q(f.selectedPage?f.selectedPage:f.getLayout.find(h=>h.type==="page"&&h._deleted!==!0)),v=h=>{r.value=h},n=()=>f.addDrawerItem({type:"divider"}),b=()=>f.addDrawerItem({type:"header",title:e.t("New Header")}),s=()=>{f.addDrawerItem({type:"page",icon:"mdi-file",title:e.t("New Page"),tabs:[]}),r.value=u.value[u.value.length-1],f.addTab({pageId:r.value.id})},o=h=>{const T=h.id;f.copyDrawerItem({itemId:T,copyWidgets:h.val==="copy"});const G=u.value[u.value.length-1];G.type==="page"&&(r.value=G)},W=h=>{f.deleteDrawerItem({itemId:h}),r.value.id===h&&(r.value=u.value.find(T=>T.type==="page"&&T._deleted!==!0))},P=h=>{f.restoreDrawerItem({itemId:h});const T=u.value.find(G=>G.id===h);T.type==="page"&&(r.value=T)};return{...pe(u,h=>u.value=h),copyMenu:S,json:L(()=>f.layout),settings:L(()=>f.settings),proWarning:L(()=>!je.isPro()&&u.value.filter(h=>h.type==="page").length>1),pageHeight:L(()=>p.pageHeight),pagesWithoutDeletionsCount:L(()=>f.getPagesWithoutDeletions.length),onChangeSettings:A,onJsonEditor:O,onSelectPage:v,selectedPage:r,pages:u,addDivider:n,addHeader:b,addPage:s,copyItem:o,deleteItem:W,restoreItem:P}}}),at={class:"full-height LayoutsPage"},st={class:"row no-wrap"},dt={class:"row",style:{"margin-bottom":"54px"}},ut={class:"col-3"},rt={class:"text-h6 primary q-ma-sm"},ct={key:0},gt={key:1},pt={key:1},mt={key:2},vt={class:"row items-center"},ft={class:"col-9"};function ht(e,p,f,S,A,O){const u=z("alert"),r=z("icon"),v=z("inputs"),n=z("paper"),b=z("drawer-section"),s=z("json-editor");return c(),k("div",at,[i("div",st,[l(Se,{class:"paper",style:{"min-height":"56px"}},{default:t(()=>[l(we,{shrink:""},{default:t(()=>[$(a(e.$t("Layout")),1)]),_:1})]),_:1})]),I(i("div",dt,[i("div",ut,[l(n,{class:"q-pa-sm"},{default:t(()=>[i("div",rt,a(e.$t("Drawer")+" / "+e.$t("Pages")),1),l(Be,null,{default:t(()=>[l(B,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Page"),onClick:e.addPage},null,8,["label","onClick"]),l(B,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Header"),onClick:e.addHeader},null,8,["label","onClick"]),l(B,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Divider"),onClick:e.addDivider},null,8,["label","onClick"])]),_:1}),I(l(u,{style:{margin:"16px 0 0 0"}},{default:t(()=>[$(a(e.$t("Only a single page is allowed without Pro. A single page may hold infinite tabs though."))+".",1)]),_:1},512),[[D,e.proWarning]]),l(U,{style:{margin:"16px 0"}}),l(K,{ref:"elDragDrop"},{default:t(()=>[(c(!0),k(H,null,F(e.pages,o=>(c(),_(q,{key:o.id,clickable:!o.type||o.type==="page"||o.type==="header",onClick:W=>e.onSelectPage(o),class:N({rowDeleted:o._deleted===!0,selected:e.selectedPage.id===o.id}),disable:o._deleted===!0},{default:t(()=>[l(y,{avatar:"",center:""},{default:t(()=>[l(r,{size:"sm",name:"mdi-drag-horizontal",class:"dragndrop"})]),_:1}),!o.type||o.type==="page"?(c(),_(y,{key:0,avatar:"",center:"",style:Z({backgroundColor:o.backgroundColor})},{default:t(()=>[o._hasIconBinding?(c(),k("div",ct,[l(de,{flat:"",dense:""},{label:t(()=>[l(r,{name:o.icon.default||Object.values(o.icon)[0],color:e.selectedPage.id===o.id?"white":"primary",styles:{color:o.iconColor}},null,8,["name","color","styles"])]),default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(H,null,F(o.icon,(W,P)=>(c(),_(q,{key:P},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:W,class:"pageIcon q-mr-xs",color:o.iconColor||o.color},null,8,["name","color"])]),_:2},1024),l(y,null,{default:t(()=>[l(E,null,{default:t(()=>[$(a(W),1)]),_:2},1024),l(E,{caption:""},{default:t(()=>[$(a(P),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(c(),k("div",gt,[l(r,{name:o.icon,color:e.selectedPage.id===o.id?"white":"primary",styles:{color:o.iconColor}},null,8,["name","color","styles"])]))]),_:2},1032,["style"])):M("",!0),l(y,{class:N({itemDeleted:o._deleted===!0}),style:Z({backgroundColor:o.backgroundColor,color:o.color})},{default:t(()=>[o.type==="divider"?(c(),_(U,{key:0})):M("",!0),o._hasTitleBinding?(c(),k("div",pt,[l(de,{flat:"",dense:"",label:o.title.default||Object.values(o.title)[0]},{default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(H,null,F(o.title,(W,P)=>(c(),_(q,{key:P},{default:t(()=>[l(y,null,{default:t(()=>[l(E,null,{default:t(()=>[$(a(W),1)]),_:2},1024),l(E,{caption:""},{default:t(()=>[$(a(P),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(c(),k("div",mt,[l(E,{class:N({header:o.type==="header"}),style:Z({color:o.color})},{default:t(()=>[$(a(o.title),1)]),_:2},1032,["class","style"])]))]),_:2},1032,["class","style"]),l(y,{side:"",class:N({rowDeleted:o._deleted===!0,selected:e.selectedPage.id===o.id})},{default:t(()=>[i("div",vt,[o.type==="page"?I((c(),_(v,{key:0,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyItem,id:o.id,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"])),[[D,o.type!=="divider"&&o._deleted!==!0]]):I((c(),_(v,{key:1,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:x(W=>e.copyItem({id:o.id}),["stop"])},null,8,["tooltip","onClick"])),[[D,o.type!=="divider"&&o._deleted!==!0]]),I(l(v,{type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:x(W=>e.deleteItem(o.id),["stop"])},null,8,["tooltip","onClick"]),[[D,(o.type&&o.type!=="page"||(!o.type||o.type==="page")&&e.pagesWithoutDeletionsCount>1)&&o._deleted!==!0]]),I(l(v,{type:"button",round:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:x(W=>e.restoreItem(o.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[D,o._deleted===!0]])])]),_:2},1032,["class"])]),_:2},1032,["clickable","onClick","class","disable"]))),128)),l(U,{class:"q-my-sm"}),l(q,null,{default:t(()=>[l(y,{avatar:"",center:""}),l(y,{avatar:"",center:""},{default:t(()=>[l(r,{name:"mdi-cog",color:"primary"})]),_:1}),l(y,null,{default:t(()=>[l(E,null,{default:t(()=>[$(a(e.$t("Configuration"))+" & "+a(e.$t("Help")),1)]),_:1}),l(E,{caption:""},{default:t(()=>[$(a(e.$t("show in sidebar")),1)]),_:1})]),_:1}),l(y,{side:""},{default:t(()=>[l(v,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowSettings",value:e.settings.drawerShowSettings},null,8,["onOnChange","value"])]),_:1})]),_:1}),l(q,null,{default:t(()=>[l(y,{avatar:"",center:""}),l(y,{avatar:"",center:""},{default:t(()=>[l(r,{name:"mdi-menu",color:"primary"})]),_:1}),l(y,null,{default:t(()=>[l(E,null,{default:t(()=>[$(a(e.$t("Drawer")),1)]),_:1}),l(E,{caption:""},{default:t(()=>[$(a(e.$t("show button")),1)]),_:1})]),_:1}),l(y,{side:""},{default:t(()=>[l(v,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowMenuButton",value:e.settings.drawerShowMenuButton},null,8,["onOnChange","value"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),i("div",ft,[l(n,{class:"q-pa-sm"},{default:t(()=>[e.selectedPage&&e.selectedPage.id?(c(),_(b,{key:0,onOnSelectPage:e.onSelectPage,pageId:e.selectedPage.id},null,8,["onOnSelectPage","pageId"])):M("",!0)]),_:1})])],512),[[D,!e.settings.configExpertMode]]),I(l(n,{style:Z({height:e.pageHeight-66-16+"px"})},{default:t(()=>[l(s,{id:"layout",json:e.json,onOnChange:e.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[D,e.settings.configExpertMode]])])}var Dt=oe(it,[["render",ht]]);export{Dt as default};
