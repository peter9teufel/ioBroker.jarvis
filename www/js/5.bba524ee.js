(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0055":function(t,e,i){"use strict";i.r(e),e["default"]={"Really delete item?":"Wirklich löschen?"}},1177:function(t,e,i){"use strict";i("b849")},"32eb":function(t,e,i){"use strict";i.r(e),e["default"]={}},3536:function(t,e,i){"use strict";i.r(e);var s=i("0692");e["default"]={translations:Object(s["a"])((t=>i("c584")("./"+t))),register:s["c"]}},b849:function(t,e,i){},c584:function(t,e,i){var s={"./":"3536","./de":"0055","./de.js":"0055","./en":"32eb","./en.js":"32eb","./index":"3536","./index.js":"3536"};function a(t){var e=o(t);return i(e)}function o(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="c584"},d4f0:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return wt}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-height LayoutsPage"},[i("div",{staticClass:"row no-wrap"},[i("q-toolbar",{staticClass:"paper",staticStyle:{"min-height":"56px"}},[i("q-toolbar-title",{attrs:{shrink:""}},[t._v(t._s(t.$t("Layout")))])],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.expertMode,expression:"!expertMode"}],staticClass:"row",staticStyle:{"margin-bottom":"54px"}},[i("div",{staticClass:"col-3"},[i("paper",{staticClass:"q-pa-sm"},[i("div",{staticClass:"text-h6 primary q-ma-sm"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("Drawer")+" / "+t.$t("Pages"))+"\n\t\t\t\t")]),i("q-btn-group",[i("q-btn",{attrs:{color:"primary",icon:"mdi-plus-circle",label:t.$t("add page")},on:{click:t.addPage}}),i("q-btn",{attrs:{color:"secondary",icon:"mdi-plus-circle",label:t.$t("add header")},on:{click:t.addHeader}}),i("q-btn",{attrs:{color:"secondary",icon:"mdi-plus-circle",label:t.$t("add divider")},on:{click:t.addDivider}})],1),i("alert",{directives:[{name:"show",rawName:"v-show",value:!t.isPro&&t.pages.length>5,expression:"!isPro && pages.length > 5"}],staticStyle:{margin:"16px 0 0 0"}},[t._v(t._s(t.$t("Only 5 items (page, header and divider) are allowed without Pro"))+".")]),i("q-separator",{staticStyle:{margin:"16px 0"}}),i("q-list",[i("draggable",{attrs:{handle:".dragndrop"},model:{value:t.pages,callback:function(e){t.pages=e},expression:"pages"}},[i("transition-group",{attrs:{type:"transition",name:"flip-list",tag:"div"}},t._l(t.pages,(function(e){return i("q-item",{key:e.id,class:{rowDeleted:!0===e._deleted,selected:t.selectedPage.id===e.id},attrs:{clickable:!e.type||"page"===e.type,disable:!0===e._deleted},on:{click:function(i){return t.onSelectPage(e)}}},[i("q-item-section",{attrs:{avatar:"",center:""}},[i("icon",{staticClass:"dragndrop",attrs:{size:"sm",name:"mdi-drag-horizontal"}})],1),e.type&&"page"!==e.type?t._e():i("q-item-section",{style:{backgroundColor:e.backgroundColor},attrs:{avatar:"",center:""}},[i("icon",{attrs:{name:e.icon,color:t.selectedPage.id===e.id?"white":"primary",styles:{color:e.iconColor}}})],1),i("q-item-section",{class:{itemDeleted:!0===e._deleted},style:{backgroundColor:e.backgroundColor,color:e.color}},["divider"===e.type?i("q-separator"):t._e(),i("q-item-label",{class:{header:"header"===e.type}},[t._v(t._s(e.title))])],1),i("q-item-section",{class:{rowDeleted:!0===e._deleted,selected:t.selectedPage.id===e.id},attrs:{side:""}},[i("div",{staticClass:"row items-center"},[i("inputs",{directives:[{name:"show",rawName:"v-show",value:"divider"!==e.type&&!0!==e._deleted,expression:"page.type !== 'divider' && page._deleted !== true"}],attrs:{type:"button",icon:"mdi-content-copy",tooltip:t.$t("copy")},on:{click:function(i){return t.copyItem(i,e.id)}}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:(e.type&&"page"!==e.type||(!e.type||"page"===e.type)&&t.pagesWithoutDeletionsCount>1)&&!0!==e._deleted,expression:"((page.type && page.type !== 'page') || ((!page.type || page.type === 'page') && pagesWithoutDeletionsCount > 1)) && page._deleted !== true"}],attrs:{type:"button",icon:"mdi-delete",tooltip:t.$t("delete"),color:"negative"},on:{click:function(i){return t.deleteItem(i,e.id)}}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0===e._deleted,expression:"page._deleted === true"}],staticClass:"restore",attrs:{type:"button",icon:"mdi-restore",tooltip:t.$t("restore"),color:"positive"},on:{click:function(i){return t.restoreItem(i,e.id)}}})],1)])],1)})),1)],1)],1)],1)],1),i("div",{staticClass:"col-9"},[i("paper",{staticClass:"q-pa-sm"},[t.selectedPage&&t.selectedPage.id?i("drawer-section",{attrs:{pageId:t.selectedPage.id}}):t._e()],1)],1)]),i("paper",{directives:[{name:"show",rawName:"v-show",value:t.expertMode,expression:"expertMode"}],style:{height:t.pageHeight-66-16+"px"}},[i("json-editor",{attrs:{id:"layout",json:t.json},on:{onChange:t.onJsonEditor}})],1)],1)},a=[],o=i("a6f4"),n=i("853a"),l=i("a54a"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"text-h6 primary q-ma-sm"},[t._v(t._s(t.$t("Page"))+": "+t._s(t.page.title))]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"icon",label:t.$t("Page Icon"),value:t.page.icon||"",icon:t.page.icon},on:{onChange:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"title",label:t.$t("Page Title"),value:t.page.title||""},on:{onChange:t.onChange}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("inputs",{attrs:{type:"color",id:"iconColor",label:t.$t("Icon Color"),value:t.page.iconColor||""},on:{onChange:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{type:"color",id:"color",label:t.$t("Font Color"),value:t.page.color||""},on:{onChange:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{type:"color",id:"backgroundColor",label:t.$t("Background Color"),value:t.page.backgroundColor||""},on:{onChange:t.onChange}})],1)]),i("div",{staticClass:"text-h6 primary q-ma-sm"},[t._v(t._s(t.$t("Tabs of page")+" "+t.page.title))]),i("div",{staticClass:"q-ma-sm row"},[i("q-btn",{attrs:{color:"secondary",icon:"mdi-plus-circle",label:t.$t("add tab")},on:{click:t.addTab}}),i("inputs",{staticStyle:{margin:"auto 0 auto 16px"},attrs:{type:"switch",inline:"",label:t.$t("Tab Labels nicht anzeigen (nur Icons)"),id:"hideLabels",value:t.page.hideLabels||!1},on:{onChange:t.onChange}})],1),i("alert",{directives:[{name:"show",rawName:"v-show",value:!t.isPro&&t.tabs.length>5,expression:"!isPro && tabs.length > 5"}]},[t._v(t._s(t.$t("Only 5 tabs are allowed without Pro"))+".")]),i("q-tabs",{staticClass:"bg-primary text-white full-width",attrs:{"inline-label":"","outside-arrows":"","mobile-arrows":"",align:"left"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[i("draggable",{attrs:{handle:".dragndrop"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[i("transition-group",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{type:"transition",name:"flip-list",tag:"div"}},t._l(t.tabs,(function(e){return i("q-tab",{key:e.id,class:{rowDeleted:!0===e._deleted},style:{backgroundColor:e.backgroundColor},attrs:{name:e.id,disable:!0===e._deleted}},[[i("icon",{staticClass:"dragndrop",attrs:{size:"sm",name:"mdi-drag-vertical",color:e.color}}),i("icon",{staticClass:"tabIcon q-mr-xs",attrs:{size:"xs",name:e.icon,color:e.iconColor||e.color}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!0!==t.page.hideLabels,expression:"page.hideLabels !== true"}],staticClass:"q-tab__label",style:{color:e.color}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t")]),i("div",{staticClass:"row items-center no-wrap",staticStyle:{"margin-left":"16px"},style:{color:e.color}},[i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0!==e._deleted,expression:"tab._deleted !== true"}],attrs:{type:"button",icon:"mdi-content-copy",tooltip:t.$t("copy")},on:{click:function(i){return t.copyTab(i,e.id)}}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0!==e._deleted&&t.pagesDropdown.length>0,expression:"tab._deleted !== true && pagesDropdown.length > 0"}],attrs:{type:"button",icon:"mdi-folder-move-outline",tooltip:t.$t("move"),items:t.pagesDropdown},on:{onSelect:function(i){var s=arguments.length,a=Array(s);while(s--)a[s]=arguments[s];return t.moveTab.apply(void 0,[e.id].concat(a))},click:t.stopPropagation}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0!==e._deleted,expression:"tab._deleted !== true"}],attrs:{type:"button",icon:"mdi-delete",tooltip:t.$t("delete"),color:"negative"},on:{click:function(i){return t.deleteTab(i,e.id)}}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0===e._deleted,expression:"tab._deleted === true"}],attrs:{type:"button",icon:"mdi-restore",tooltip:t.$t("restore"),color:"positive"},on:{click:function(i){return t.restoreTab(i,e.id)}}})],1)]],2)})),1)],1)],1),i("q-tab-panels",{staticClass:"border",attrs:{animated:""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.tabs,(function(e){return i("q-tab-panel",{key:e.id,staticClass:"body",staticStyle:{padding:"16px 0"},attrs:{name:e.id}},[i("tab-section",{attrs:{pageId:t.page.id,tabId:e.id}})],1)})),1)],1)},r=[],c=i("ded3"),g=i.n(c),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"0 8px"}},[i("div",{staticClass:"text-h6 primary q-ma-sm"},[t._v(t._s(t.$t("Tab"))+": "+t._s(t.tab.title)+" ("+t._s(t.$t("ID")+": "+t.tab.id)+")")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"icon",label:t.$t("Tab Icon"),value:t.tab.icon||"",icon:t.tab.icon},on:{onChange:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"title",label:t.$t("Tab Title"),value:t.tab.title||""},on:{onChange:t.onChange}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("inputs",{attrs:{type:"color",id:"iconColor",label:t.$t("Icon Color"),value:t.tab.iconColor||""},on:{onChange:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{type:"color",id:"color",label:t.$t("Font Color"),value:t.tab.color||""},on:{onChange:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{attrs:{type:"color",id:"backgroundColor",label:t.$t("Background Color"),value:t.tab.backgroundColor||""},on:{onChange:t.onChange}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-2"},[i("inputs",{staticStyle:{margin:"auto 0 auto 16px"},attrs:{type:"switch",inline:"",label:t.$t("Tab Fullscreen"),id:"fullscreen",value:t.tab.fullscreen||!1},on:{onChange:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{staticStyle:{margin:"auto 0 auto 16px"},attrs:{type:"switch",inline:"",label:t.$t("Widgets edges (round or angled)"),id:"widgetEdges",value:t.tab.widgetEdges||!1},on:{onChange:t.onChange}})],1)]),i("div",{staticClass:"text-h6 primary q-ma-sm",staticStyle:{"margin-top":"24px"}},[t._v(t._s(t.$t("Widgets of tab")+" "+t.tab.title))]),i("widget-section",{attrs:{pageId:t.pageId,tabId:t.tabId,id:"desktop",label:"Desktop",icon:"mdi-monitor",fullscreen:t.tab.fullscreen||!1,widgetEdges:t.tab.widgetEdges||!1,widgetConfig:t.tab.widgetConfig||{},items:t.tab.widgetsDesktop}}),i("widget-section",{attrs:{pageId:t.pageId,tabId:t.tabId,id:"smartphone",label:"Smartphone",icon:"mdi-cellphone",fullscreen:t.tab.fullscreen||!1,widgetEdges:t.tab.widgetEdges||!1,widgetConfig:t.tab.widgetConfig||{},items:t.tab.widgetsSmartphone}})],1)},u=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("widget-popup",{attrs:{widget:t.selectedWidget},on:{onClose:function(e){t.selectedWidget=null},onSave:t.saveWidgetAssignments}}),i("q-expansion-item",{staticClass:"full-width paper",attrs:{value:!0!==t.disabled&&t.expanded,disable:t.disabled},on:{input:function(e){t.expanded=!t.expanded}},scopedSlots:t._u([{key:"header",fn:function(){return[i("q-item-section",{attrs:{avatar:""}},[i("icon",{attrs:{name:t.icon}})],1),i("q-item-section",{staticStyle:{height:"40px"}},[t._v("\n\t\t\t\t"+t._s(t.label)+"\n\t\t\t")]),"desktop"!==t.id?i("q-item-section",{staticClass:"notDisabled",attrs:{side:""}},[i("inputs",{staticStyle:{width:"150px"},attrs:{type:"select",options:t.options,dense:"",label:t.$t("Use same layout as"),id:t.id+"SameAs",value:t.widgetConfig[t.id+"SameAs"]||"desktop"},on:{onSelect:t.onChange},nativeOn:{click:function(e){return e.preventDefault(),t.stopPropagation.apply(null,arguments)}}})],1):t._e()]},proxy:!0}])},[i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.fullscreen,expression:"fullscreen === true"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.widgets.length,expression:"widgets.length === 0"}],staticClass:"row",staticStyle:{padding:"0 16px 8px 16px","min-height":"64px"}},[i("q-btn",{staticStyle:{margin:"auto 0"},attrs:{color:"secondary",icon:"mdi-plus-circle",label:t.$t("add widget")},on:{click:t.addWidget}})],1),i("q-separator"),i("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.widgets[0],expression:"widgets[0] !== undefined"}],staticClass:"grid-item tooltip-widget"},[i("div",{staticClass:"row justify-between"},[i("div",{staticClass:"row items-center",staticStyle:{"padding-left":"8px"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("Fullscreen"))+"\n\t\t\t\t\t\t")]),i("div",{staticClass:"row"},[i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-pencil"},on:{click:function(e){t.selectedWidget=t.widgets[0]}}}),i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-content-copy"},on:{click:function(e){return t.copyWidget(t.widgets[0].i)}}}),i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-delete",color:"negative"},on:{click:function(e){return t.deleteWidget(t.widgets[0].i)}}})],1)])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!0!==t.fullscreen,expression:"fullscreen !== true"}]},[i("div",{staticClass:"row",staticStyle:{padding:"0 16px 8px 16px","min-height":"64px"}},[i("q-btn",{staticStyle:{margin:"auto 0"},attrs:{color:"secondary",icon:"mdi-plus-circle",label:t.$t("add widget")},on:{click:t.addWidget}}),i("inputs",{staticStyle:{margin:"auto 0 auto 16px"},attrs:{dense:"",type:"switch",inline:"",label:t.$t("Height of all widgets equal to page height (no scrollbars)"),id:t.id+"FitPageHeight",value:t.widgetConfig[t.id+"FitPageHeight"]||!1},on:{onChange:t.onChange}}),i("inputs",{directives:[{name:"show",rawName:"v-show",value:!0!==t.widgetConfig[t.id+"FitPageHeight"],expression:"widgetConfig[id + 'FitPageHeight'] !== true"}],staticStyle:{margin:"auto 0 auto 16px"},attrs:{set:t.rowHeight=parseInt(!0!==t.widgetConfig[t.id+"FitPageHeight"]&&t.widgetConfig[t.id+"WidgetHeight"])||50,dense:"",type:"number",label:t.$t("Widget height")+" ("+t.$t("in pixels")+")",id:t.id+"WidgetHeight",value:t.widgetConfig[t.id+"WidgetHeight"]||50},on:{onChange:t.onChange}}),i("inputs",{staticStyle:{margin:"auto 0 auto 16px"},attrs:{set:t.gapSize=parseInt(t.widgetConfig[t.id+"GapSize"]||5),dense:"",type:"number",label:t.$t("Widget gaps")+" ("+t.$t("in pixels")+")",id:t.id+"GapSize",value:t.widgetConfig[t.id+"GapSize"]||5},on:{onChange:t.onChange}})],1),i("q-separator"),i("div",{staticStyle:{height:"800px","overflow-y":"scroll"}},[i("grid-layout",{staticStyle:{"min-height":"50px"},attrs:{layout:t.widgets,"row-height":t.rowHeight,margin:[t.gapSize,t.gapSize],"use-css-transforms":!0,responsive:!0},on:{"layout-updated":t.setWidgets}},[t._l(t.widgets,(function(e,s){return i("grid-item",{key:e.i,staticClass:"grid-item tooltip-widget",class:{"rounded-borders":!0!==t.widgetEdges},attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i},on:{resized:t.onResized,"container-resized":t.onResized}},[i("q-tooltip",{attrs:{target:".tooltip-widget"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.getWidgetsData(e.items))+"\n\t\t\t\t\t\t\t")]),i("div",{staticClass:"row justify-between"},[i("div",{staticClass:"row items-center",staticStyle:{"padding-left":"8px"}},[i("span",{class:"sort-"+s},[t._v("[ "+t._s(s)+" ]")]),t._v(" \n\t\t\t\t\t\t\t\t\t"),i("q-tooltip",{attrs:{target:".sort-"+s}},[t._v(t._s(t.$t("Responsive Position"))+": "+t._s(s))]),t._v("\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("Position")+": "+e.x+"x * "+e.y+"y")+"\n\t\t\t\t\t\t\t\t\t"),t.widgetSizes[e.i]?i("span",[t._v(" - "+t._s(t.$t("Size")+": "+e.w+"w ("+t.widgetSizes[e.i].width+"%) * "+e.h+"h ("+t.widgetSizes[e.i].height+"px)"))]):t._e()],1),i("div",{staticClass:"row"},[i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-pencil"},on:{click:function(i){t.selectedWidget=e}}}),i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-content-copy"},on:{click:function(i){return t.copyWidget(e.i)}}}),i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-delete",color:"negative"},on:{click:function(i){return t.deleteWidget(e.i)}}})],1)]),i("div",{staticClass:"row q-pa-sm tooltip-widget",staticStyle:{overflow:"hidden"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.getWidgetsData(e.items))+"\n\t\t\t\t\t\t\t\t"),i("q-tooltip",[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.getWidgetsData(e.items))+"\n\t\t\t\t\t\t\t\t")])],1)],1)})),i("div",{staticClass:"grid-spacer",style:{bottom:-3*t.rowHeight+"px",height:3*t.rowHeight+"px"}})],2)],1)],1)])])],1)},m=[],b=i("ec26"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("widget-page",{attrs:{widgetId:t.selectedWidgetId},on:{onClose:t.onWidgetClose}}),i("q-dialog",{attrs:{value:null!==t.items,persistent:""}},[null!==t.items?i("q-card",{staticClass:"column",staticStyle:{width:"1200px","max-width":"90vw"}},[i("q-card-section",{staticClass:"row items-center"},[i("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Assign Widget to Box")))]),i("q-space"),i("q-btn",{attrs:{flat:"",round:"",color:"grey",icon:"close"},on:{click:t.cancel}})],1),i("q-separator"),i("q-card-section",{staticClass:"col defaultPadding-2 q-pt-none scroll body"},[i("div",{staticClass:"text-h7 primary q-ma-sm"},[t._v(t._s(t.$t("Widget")))]),i("q-separator",{staticStyle:{margin:"0 0 8px 0"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.itemList.length,expression:"itemList.length === 0"}],staticClass:"row"},[i("div",{staticClass:"col"},[i("inputs",{attrs:{id:"assignWidget",label:"Assign Widget",type:"select",options:t.widgetList,reset:t.reset,"options-dense":"","use-input":""},on:{onSelect:t.onChange}})],1),i("div",{staticClass:"col-1",staticStyle:{"text-align":"center","line-height":"56px"}},[t._v(t._s(t.$t("or")))]),i("div",{staticClass:"col-3",staticStyle:{"text-align":"center","line-height":"56px"}},[i("q-btn",{attrs:{color:"primary",icon:"mdi-plus-circle",label:t.$t("add widget")},on:{click:t.onAddWidget}})],1)]),i("q-list",t._l(t.itemList,(function(e,s){return i("q-item",{key:e.id+"-"+s,staticClass:"list-group-item"},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.title||t.$t("No Widget title"))+" "),e._deleted?i("em",[t._v("[ "+t._s(t.$t("deleted"))+" ]")]):t._e()]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.module))])],1),i("q-item-section",{attrs:{side:""}},[i("div",{staticClass:"row items-center"},[!0!==e._deleted?i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-pencil"},on:{click:function(i){return t.onWidgetEdit(e.id)}}}):t._e(),i("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"mdi-delete",color:"negative"},on:{click:function(i){return t.onWidgetRemove(e.id)}}})],1)])],1)})),1),i("div",{staticClass:"text-h7 primary q-ma-sm",staticStyle:{"margin-top":"16px"}},[t._v(t._s(t.$t("Options")))]),i("q-separator",{staticStyle:{margin:"0 0 8px 0"}}),i("div",{staticClass:"row q-pb-xs"},[i("div",{staticClass:"col"},[i("inputs",{directives:[{name:"show",rawName:"v-show",value:t.itemList[0]&&!1===t.SCALE_EXCEPTIONS.includes(t.itemList[0].module),expression:"itemList[0] && SCALE_EXCEPTIONS.includes(itemList[0].module) === false"}],attrs:{icon:"mdi-fit-to-page",id:"scaleToFitContents",label:"Scale contents to fit widget",type:"switch",value:t.inputScaleToFitContents},on:{onChange:t.onChange}}),i("em",{directives:[{name:"show",rawName:"v-show",value:!(t.itemList[0]&&!1===t.SCALE_EXCEPTIONS.includes(t.itemList[0].module)&&!1===t.ALIGNMENT_EXCEPTIONS.includes(t.itemList[0].module)),expression:"!(itemList[0] && SCALE_EXCEPTIONS.includes(itemList[0].module) === false && ALIGNMENT_EXCEPTIONS.includes(itemList[0].module) === false)"}],staticClass:"q-mx-md"},[t._v(t._s(t.$t("No options")))])],1),i("div",{staticClass:"col"},[i("inputs",{directives:[{name:"show",rawName:"v-show",value:t.itemList[0]&&!1===t.ALIGNMENT_EXCEPTIONS.includes(t.itemList[0].module),expression:"itemList[0] && ALIGNMENT_EXCEPTIONS.includes(itemList[0].module) === false"}],attrs:{icon:"mdi-arrow-split-horizontal",id:"alignmentVertical",label:"Vertical alignment",type:"select",options:t.alignmentVertical,value:t.inputValueAlignmentVertical},on:{onSelect:t.onChange}})],1),i("div",{staticClass:"col"},[i("inputs",{directives:[{name:"show",rawName:"v-show",value:t.itemList[0]&&!1===t.ALIGNMENT_EXCEPTIONS.includes(t.itemList[0].module),expression:"itemList[0] && ALIGNMENT_EXCEPTIONS.includes(itemList[0].module) === false"}],attrs:{icon:"mdi-arrow-split-vertical",id:"alignmentHorizontal",label:"Horizontal alignment",type:"select",options:t.alignmentHorizontal,value:t.inputValueAlignmentHorizontal},on:{onSelect:t.onChange}})],1)])],1),i("q-separator"),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{attrs:{flat:"",label:t.$t("Cancel"),color:"negative"},on:{click:t.cancel}}),i("q-btn",{attrs:{flat:"",label:t.$t("Apply"),color:"primary",disable:t.hasErrors},on:{click:t.save}})],1)],1):t._e()],1)],1)},w=[],C=(i("4e82"),i("424e")),y=i("6211");const f=i("0050")();var _=Object(o["c"])({name:"WidgetPopup",props:["widget"],components:{WidgetPage:C["a"]},data(){return this.SCALE_EXCEPTIONS=y["b"],this.ALIGNMENT_EXCEPTIONS=y["a"],this.alignmentVertical=[{label:this.$i18n.t("top aligned"),value:"top"},{label:this.$i18n.t("middle aligned"),value:"middle"},{label:this.$i18n.t("bottom aligned"),value:"bottom"}],this.alignmentHorizontal=[{label:this.$i18n.t("left aligned"),value:"left"},{label:this.$i18n.t("center aligned"),value:"center"},{label:this.$i18n.t("right aligned"),value:"right"},{label:this.$i18n.t("fill full width"),value:"fill-width"}],{reset:null,selectedWidgetId:null,selectedWidgetShallBeAdded:!1,items:null===this.widget?null:f(this.widget.items||[])}},computed:{inputScaleToFitContents(){return void 0===this.widget.scaleToFitContents||this.widget.scaleToFitContents},inputValueAlignmentVertical(){return this.widget.alignmentVertical||"top"},inputValueAlignmentHorizontal(){return this.widget.alignmentHorizontal||"center"},hasErrors(){return!1},widgetList(){const t=Object.values(this.$store.state.editor.widgets).filter((t=>!0!==t._deleted&&-1===this.items.indexOf(t.id))).map((t=>({value:t.id,label:t.module+(t.title?" - "+t.title:"")+" ("+t.id.substr(0,5)+")"}))).sort(((t,e)=>{const i=t.label.toLowerCase(),s=e.label.toLowerCase();return i===s?0:i>s?1:-1}));return t},itemList(){const t=this.items.map((t=>this.$store.state.editor.widgets[t]));return t}},methods:{onChange(t){"assignWidget"===t.id&&t.value&&-1===this.items.indexOf(t.value)?(this.items.push(t.value),this.reset=Math.random()):this.$set(this.widget,t.id,t.value)},onAddWidget(){this.selectedWidgetShallBeAdded=!0,this.selectedWidgetId=Object(b["a"])()},onWidgetClose(t){t&&!0===this.selectedWidgetShallBeAdded&&this.onChange({id:"assignWidget",value:this.selectedWidgetId}),this.selectedWidgetShallBeAdded=!1,this.selectedWidgetId=null},cancel(){this.$emit("onClose"),this.items=null},save(){this.$emit("onSave",this.items),this.cancel()},onWidgetEdit(t){this.selectedWidgetId=t},onWidgetRemove(t){const e=confirm(this.$i18n.t("Really delete item?"));e&&this.items.splice(this.items.indexOf(t),1)}},watch:{widget(t){this.items=null===t?null:f(t.items||[])}}}),x=_,I=i("2877"),$=i("24e8"),S=i("f09f"),P=i("a370"),q=i("2c91"),T=i("9c40"),W=i("eb85"),k=i("1c1c"),E=i("66e5"),L=i("4074"),N=i("0170"),D=i("4b7e"),O=i("eebe"),z=i.n(O),Q=Object(I["a"])(x,v,w,!1,null,null,null),A=Q.exports;z()(Q,"components",{QDialog:$["a"],QCard:S["a"],QCardSection:P["a"],QSpace:q["a"],QBtn:T["a"],QSeparator:W["a"],QList:k["a"],QItem:E["a"],QItemSection:L["a"],QItemLabel:N["a"],QCardActions:D["a"]});var j=i("a2b6"),H=i("7be8"),F=i.n(H);const G=i("0050")();var M=Object(o["c"])({name:"WidgetSection",props:["pageId","tabId","id","label","icon","fullscreen","widgetEdges","widgetConfig","items"],components:{GridLayout:F.a.GridLayout,GridItem:F.a.GridItem,WidgetPopup:A},watch:{fullscreen(t){!0===t&&0===this.widgets.length&&this.addWidget()}},data(){return{expanded:"desktop"===this.id,selectedWidget:null,widgets:G(this.items)||[],maxHeight:0,widgetSizes:{}}},computed:{disabled(){return"desktop"!==this.id&&"specific-layout"!==this.widgetConfig[this.id+"SameAs"]},options(){let t=[{label:this.$i18n.t("wie Desktop"),value:"desktop"},{label:this.$i18n.t("wie Tablet"),value:"tablet"},{label:this.$i18n.t("wie Smartphone"),value:"smartphone"},{label:this.$i18n.t("eigenes Layout"),value:"specific-layout"}];return t=t.filter((t=>t.value!==this.id)),t}},methods:{stopPropagation(t){t.stopPropagation()},onChange(t){this.$store.commit("editor/setWidgetConfig",{pageId:this.pageId,tabId:this.tabId,key:t.id,val:t.value})},onResized(t,e,i,s,a){this.widgetSizes[t]={width:(100/(12/i)).toFixed(2),height:s}},getWidget(t){return this.$store.state.editor.widgets[t]||{items:[]}},getWidgetsData(t){return t&&0!==t.length?t.map((t=>{const e=this.getWidget(t);e.items=e.items||[];const i=e.items.filter((t=>"divider"===t.type)).length;return e.module+(e.title?" ("+e.title+("StateList"!==e.module?"":", "+e.items.length+" "+this.$i18n.t("items")+" "+this.$i18n.t("apprx.")+" "+((!0!==e.hideTitle?56:0)+i+46*(e.items.length-i))+"px "+this.$i18n.t("in height"))+")":"")})).join(", "):this.$i18n.t("No widgets assigned")},setWidgets(t){this.$store.commit("editor/setWidgets",{pageId:this.pageId,tabId:this.tabId,key:"widgets"+Object(j["g"])(this.id),val:t})},addWidget(){this.widgets.push({x:2*this.widgets.length%12,y:this.widgets.length+12,w:4,h:4,i:Object(b["a"])()})},copyWidget(t){const e=G(this.widgets.find((e=>e.i===t)));e.i=Object(b["a"])(),this.widgets.push(e)},deleteWidget(t){const e=confirm(this.$i18n.t("Really delete item?"));e&&this.widgets.splice(this.widgets.findIndex((e=>e.i===t)),1)},saveWidget(t){const e=this.widgets.findIndex((e=>e.i===t.i));this.widgets.splice(e,1,t),this.setWidgets(this.widgets)},saveWidgetAssignments(t){this.widgets.splice(this.widgets.findIndex((t=>t.i===this.selectedWidget.i)),1,g()(g()({},this.selectedWidget),{},{items:t})),this.selectedWidget=null,this.setWidgets(this.widgets)}}}),B=M,X=(i("f15b"),i("3b73")),V=i("05c0"),R=i("b498"),J=Object(I["a"])(B,h,m,!1,null,null,null),U=J.exports;z()(J,"components",{QExpansionItem:X["a"],QItemSection:L["a"],QBtn:T["a"],QSeparator:W["a"],QTooltip:V["a"],QColor:R["a"]});var K=Object(o["c"])({name:"TabPage",props:["pageId","tabId"],components:{WidgetSection:U},methods:{onChange(t){this.$store.commit("editor/editTab",{pageId:this.pageId,tabId:this.tabId,key:t.id,val:t.value})}},computed:{tab(){const t=this.$store.state.editor.layout.find((t=>t.id===this.pageId))||{},e=t.tabs.find((t=>t.id===this.tabId))||{};return e}}}),Y=K,Z=Object(I["a"])(Y,p,u,!1,null,null,null),tt=Z.exports,et=i("b76a"),it=i.n(et),st=Object(o["c"])({name:"DrawerPage",props:["pageId"],components:{Draggable:it.a,TabSection:tt},data(){var t,e;const i=this.$store.state.editor.layout.find((t=>t.id===this.pageId))||{};return{selectedTab:(null===(t=i.tabs)||void 0===t||null===(e=t[0])||void 0===e?void 0:e.id)||null}},methods:{stopPropagation(t){t.stopPropagation()},addTab(){this.$store.commit("editor/addTab",{pageId:this.pageId}),this.selectedTab=this.tabs[this.tabs.length-1].id},copyTab(t,e){this.stopPropagation(t),this.$store.commit("editor/addTab",{pageId:this.pageId,tabId:e}),this.selectedTab=this.tabs[this.tabs.length-1].id},moveTab(t,e){const{val:i}=e;this.$store.commit("editor/moveTab",{pageId:this.pageId,tabId:t,destinationPageId:i})},deleteTab(t,e){this.stopPropagation(t),this.$store.commit("editor/deleteTab",{pageId:this.pageId,tabId:e}),this.selectedTab===e&&(this.selectedTab=this.tabs.find((t=>!0!==t._deleted)).id)},restoreTab(t,e){this.stopPropagation(t),this.$store.commit("editor/restoreTab",{pageId:this.pageId,tabId:e}),this.selectedTab=e},onChange(t){this.$store.commit("editor/editDrawerItem",{itemId:this.pageId,key:t.id,val:t.value})}},computed:{isPro(){return n["a"].isPro()},page(){return this.$store.state.editor.layout.find((t=>t.id===this.pageId))||{}},pagesDropdown(){const t=[];return this.$store.getters["editor/getPagesWithoutDeletions"].forEach((e=>{e.id!==this.pageId&&t.push(g()({id:e.id,label:e.title},e))})),t},tabs:{get(){const t=this.page.tabs||[];return t},set(t){this.$store.commit("editor/setTabs",{pageId:this.pageId,tabs:t})}}},watch:{pageId(){var t,e;this.selectedTab=(null===(t=this.tabs)||void 0===t||null===(e=t[0])||void 0===e?void 0:e.id)||null}}}),at=st,ot=(i("dda7"),i("429b")),nt=i("7460"),lt=i("adad"),dt=i("823b"),rt=Object(I["a"])(at,d,r,!1,null,null,null),ct=rt.exports;z()(rt,"components",{QBtn:T["a"],QTabs:ot["a"],QTab:nt["a"],QTabPanels:lt["a"],QTabPanel:dt["a"],QColor:R["a"]});var gt=i("3536"),pt=Object(o["c"])({name:"LayoutsPage",components:{Draggable:it.a,DrawerSection:ct,JsonEditor:l["a"]},data(){const t=this.$store.getters["editor/getLayout"].find((t=>"page"===t.type&&!0!==t._deleted));return console.log(this.$store.getters["editor/getLayout"]),{selectedPage:t||{},editItemId:null}},methods:{stopPropagation(t){t.stopPropagation()},onSelectPage(t){this.selectedPage=t},onJsonEditor(t){t._error||this.$store.commit("editor/set",{[t.id]:JSON.parse(t.value)})},addDivider(){this.$store.commit("editor/addDrawerItem",{type:"divider"})},addHeader(){this.$store.commit("editor/addDrawerItem",{type:"header",title:this.$i18n.t("New Header")})},addPage(){this.$store.commit("editor/addDrawerItem",{type:"page",icon:"mdi-file",title:this.$i18n.t("New Page"),tabs:[]}),this.selectedPage=this.pages[this.pages.length-1],this.$store.commit("editor/addTab",{pageId:this.selectedPage.id})},copyItem(t,e){this.stopPropagation(t),this.$store.commit("editor/copyDrawerItem",{itemId:e});const i=this.pages[this.pages.length-1];"page"===i.type&&(this.selectedPage=i)},deleteItem(t,e){this.stopPropagation(t),this.$store.commit("editor/deleteDrawerItem",{itemId:e}),this.selectedPage.id===e&&(this.selectedPage=this.pages.find((t=>"page"===t.type&&!0!==t._deleted)))},restoreItem(t,e){this.stopPropagation(t),this.$store.commit("editor/restoreDrawerItem",{itemId:e});const i=this.pages.find((t=>t.id===e));"page"===i.type&&(this.selectedPage=i)},resetLayout(){this.$store.commit("editor/setLayout",this.$store.state.layout.drawers)}},computed:{isPro(){return n["a"].isPro()},pageHeight(){return this.$store.state.jarvis.pageHeight},pagesWithoutDeletionsCount(){return this.$store.getters["editor/getPagesWithoutDeletions"].length},pages:{get(){const t=this.$store.getters["editor/getLayout"]||[];return t},set(t){this.$store.commit("editor/setLayout",t)}},json(){return this.$store.state.editor.layout},expertMode(){var t;return null===(t=this.$store.state.editor.settings)||void 0===t?void 0:t.configExpertMode}},created(){gt["default"].register(this.$i18n,gt["default"].translations)}}),ut=pt,ht=(i("1177"),i("65c6")),mt=i("6ac5"),bt=i("e7a9"),vt=Object(I["a"])(ut,s,a,!1,null,null,null),wt=vt.exports;z()(vt,"components",{QToolbar:ht["a"],QToolbarTitle:mt["a"],QBtnGroup:bt["a"],QBtn:T["a"],QSeparator:W["a"],QList:k["a"],QItem:E["a"],QItemSection:L["a"],QItemLabel:N["a"],QColor:R["a"]})},dda7:function(t,e,i){"use strict";i("ec5e")},ec5e:function(t,e,i){},ee78:function(t,e,i){},f15b:function(t,e,i){"use strict";i("ee78")}}]);