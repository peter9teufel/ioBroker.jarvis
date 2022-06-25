import{_ as g,q as v,d5 as p,dN as w,H as l,dn as f,cG as z,j as y,o as r,d as m,J as o,a1 as n,k as c,w as F,e as j,a as b,cm as I,g as T,n as a,c$ as C,i as S,t as k}from"./index-bdb9984b.js";const P=v({name:"ModuleiFrame",props:["tab","widget","_containerSize","_widgetSize"],data(){return this.adjustPositionTimer=null,{size:{width:this._widgetSize.width||this._containerSize.width,height:this._containerSize.height},url:null,loaded:!1,error:!1}},computed:{config(){return p.joinConfig(this.widget.config,w)},deviceConfig(){return this.widget.items&&this.widget.items[0]||{}},sandbox(){return this.config.sandbox!==!0?void 0:this.config.sandboxOptions.join(" ")}},methods:{gotState(e,i){e||(this.url!==i.val&&this.setUrl(i.val||""),this.loaded=!0)},runInterval(){this.config.refresh&&this.config.refresh>0&&(this.setRefreshInterval=setInterval(()=>{this.url!==null&&this.setUrl(this.url+" ")},this.config.refresh*1e3))},setUrl(e){const i=l();e.indexOf("{")>-1&&e.indexOf("}")>-1&&Object.keys(i.settings).forEach(t=>{e=e.replace(RegExp("{"+t+"}","g"),i.settings[t])}),this.url=e},onViewChange(e){if(this.config.keepalive){const i=this.$refs.iFrame;i?this.tab&&this.tab.id===e?(i.style.zIndex=9,i.style.visibility="visible",this.adjustPosition(i)):(i.style.zIndex=-1,i.style.visibility="hidden"):setTimeout(()=>this.onViewChange(e),500)}},onResize(){if(this.config.keepalive){const e=this.$refs.iFrame;this.adjustPosition(e)}},moveiFrame(){if(this.config.keepalive){const e=this.$refs.iFrame;e&&this.size.width>0&&this.size.height>0?(this.adjustPosition(e),document.querySelector("#iframes").append(e)):setTimeout(()=>this.moveiFrame(),500)}},adjustPosition(e){const i=this.$refs.iFrameContainer;i?(clearTimeout(this.adjustPositionTimer),this.adjustPositionTimer=setTimeout(()=>{const{top:t,left:s}=i.getBoundingClientRect(),h=window.pageYOffset||document.documentElement.scrollTop,d=window.pageXOffset||document.documentElement.scrollLeft;t&&s&&(e.style.zIndex=9,e.style.visibility="visible",e.style.top=t+h+"px",e.style.left=s+d+"px",e.style.position="absolute"),setTimeout(()=>{this.adjustPosition(e)},500)},50)):setTimeout(()=>this.adjustPosition(e),500)}},watch:{_widgetSize(e){this.size.width=e.width>0?e.width:this.size.width},_containerSize(e){this.size.width=this.size.width||e.width,this.size.height=e.height>0?e.height:this.size.height;const i=l();this.onViewChange(i.selectedTabId)},deviceConfig:{immediate:!0,handler:function(e){this.config.url?(this.setUrl(this.config.url),this.loaded=!0):(this.device=f.get(e.deviceId),this.device?f.listen(this.device.id,e.primaryStateKey,this.gotState):(this.error="iFrame: "+this.$i18n.t("Device {deviceId} not found").replace("{deviceId}",e.deviceId),z.warn(this.error),this.loaded=!0))}}},mounted(){this.runInterval(),this.moveiFrame()},beforeUnmount(){this.config.keepalive&&this.$refs.iFrame.remove(),this.setRefreshInterval&&clearInterval(this.setRefreshInterval),this.adjustPositionTimer&&clearInterval(this.adjustPositionTimer),this.device&&this.config.url}}),$=["src","title","sandbox","width","height"];function R(e,i,t,s,h,d){const u=y("alert");return r(),m("div",{key:e.widget.revision,class:"jarvis-iFrame-Container",style:a({width:e.size.width+"px",height:e.size.height+"px"})},[o(c(C,{indeterminate:""},null,512),[[n,!e.loaded&&!e.error]]),o(c(u,null,{default:F(()=>[S(k(e.error),1)]),_:1},512),[[n,e.loaded&&e.error]]),j("div",{ref:"iFrameContainer",style:a({width:e.size.width+"px",height:e.size.height+"px"})},[e.config.keepalive===!0?(r(),b(I,{key:0,onResize:e.onResize},null,8,["onResize"])):T("",!0),o((r(),m("iframe",{ref:"iFrame",key:e.widget.id,class:"jarvis-iFrame iFrame",src:e.url,style:a({width:e.size.width+"px",height:e.size.height+"px"}),title:e.widget.title,sandbox:e.sandbox,width:e.size.width,height:e.size.height},null,12,$)),[[n,e.loaded&&!e.error]])],4)],4)}var V=g(P,[["render",R]]);export{V as default};
