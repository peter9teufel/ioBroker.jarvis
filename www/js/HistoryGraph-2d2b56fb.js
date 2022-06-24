import{dx as G,dJ as E,dy as q,_ as oe,q as ne,de as se,ci as re,az as le,d5 as me,dK as P,a2 as M,c as de,j as V,o as w,d as A,J as T,a1 as k,k as h,a as x,g as L,n as ue,f as pe,t as v,w as ye,I as fe,dp as ce,c$ as ge,e as he,ab as ve,O as Ce,K as we,db as I,a3 as $}from"./index-7dce1004.js";import"./index-04482efa.js";import{eT as be}from"./components-735c87f8.js";import{s as Q}from"./index-5f328955.js";import"./_commonjsHelpers-45ea234c.js";import"./vue.runtime.esm-bundler-a7c50888.js";import"./QTooltip-bde234ea.js";import"./json-editor-37479dd1.js";var Se=864e5;function Te(e,s){G(2,arguments);var n=Q(e),p=Q(s),t=n.getTime()-E(n),y=p.getTime()-E(p);return Math.round((t-y)/Se)}function Y(e,s){var n=e.getFullYear()-s.getFullYear()||e.getMonth()-s.getMonth()||e.getDate()-s.getDate()||e.getHours()-s.getHours()||e.getMinutes()-s.getMinutes()||e.getSeconds()-s.getSeconds()||e.getMilliseconds()-s.getMilliseconds();return n<0?-1:n>0?1:n}function De(e,s){G(2,arguments);var n=q(e),p=q(s),t=Y(n,p),y=Math.abs(Te(n,p));n.setDate(n.getDate()-t*y);var C=Number(Y(n,p)===-t),b=t*(y-C);return b===0?0:b}const Me=ne({name:"ModuleHistoryGraph",props:["_containerSize","_widgetSize","widget"],provide:{[be]:"dark"},setup(e){var Z;const s=se(),n=re(),p=le(e.widget,"config"),t=me.joinConfig(p.value,P);t.stepLineChart=!1;const y=new Date(new Date().getTime()-7*24*3600*1e3),C=new Date;t.timeTimelineDate={from:{year:y.getFullYear(),month:y.getMonth()+1,day:y.getDate()},to:{year:C.getFullYear(),month:C.getMonth()+1,day:C.getDate()},...t.timeTimelineDate||{}};const b=((Z=s.instanceList)==null?void 0:Z.val)||[];t.defaultHistoryAdapter=b.find(a=>["history","sql","influxdb"].includes(a.substr(0,a.indexOf("."))));const f=M(t),H=M(t),J=P.find(a=>a.parameter==="timeType").options,W=P.find(a=>a.parameter==="timeReviewUnit").options,F=M(!1),O=M({}),D=M([]);let z={};const X=(a,i,o,r)=>{let l=i.label||r&&r.name||r&&r.label||"???",S=0;for(;Object.values(z).includes(l);)S++,l=l+" ("+S+")";z[r.id+":"+o.stateKey]=l;const c=parseInt(t.maxEntries)||500,g=a.length>c?Math.ceil(a.length/c):null;let m=[];a.forEach(({ts:d,val:u},K)=>{(g===null||K%g===0)&&(typeof u=="boolean"&&(t.stepLineChart=!0,u=u===!0?1:0),u=parseFloat(u)||u,m.push([d,u,o.unit||$._defaults&&$._defaults[i.primaryStateKey]&&$._defaults[i.primaryStateKey].unit||""]))});const N={deviceId:i.deviceId,stateKey:i.primaryStateKey,name:l,type:t.chartType==="bar"?"bar":"line",yAxisIndex:I.isPro()&&t.yAxis&&Array.isArray(t.yAxis)&&t.yAxis.length>1&&i.moduleConfig&&i.moduleConfig.yaxis||0,step:t.stepLineChart||(t.chartType==="stepped"?"start":void 0),smooth:t.chartType==="smooth",showSymbol:t.showSymbol!==void 0?t.showSymbol:!1,lineStyle:{width:2,color:i.moduleConfig&&i.moduleConfig.color},itemStyle:{width:2,color:i.moduleConfig&&i.moduleConfig.color},emphasis:{lineStyle:{width:2}},connectNulls:!0,symbol:"roundRect",data:m},R=D.value.findIndex(d=>d.deviceId===i.deviceId&&d.stateKey===i.primaryStateKey);D.value[R]=N},U=()=>{const a={...t,...f.value,count:9999999,aggregate:"none"};if(a.timeType==="timeline")a.start=new Date(a.timeTimelineDate.from.year,a.timeTimelineDate.from.month-1,a.timeTimelineDate.from.day).getTime(),a.end=new Date(a.timeTimelineDate.to.year,a.timeTimelineDate.to.month-1,a.timeTimelineDate.to.day).getTime(),a.count=De(a.end,a.start)*200,a.step=a.count*10*60*60;else{let i=(a.timeReviewValue||7)*1e3,o=100;switch(a.timeReviewUnit){case"seconds":break;case"minutes":i=i*60,o=o*10;break;case"hours":i=i*60*60,o=o*60*10;break;case"weeks":i=i*60*60*24*7,o=o*60*60*24*10;break;case"months":i=i*60*60*24*31,o=o*60*60*24*10;break;case"days":default:i=i*60*60*24,o=o*60*60*10;break}a.step=o/1e3,a.review=i}z={},e.widget.items.forEach(i=>{if(i.type==="device"){D.value.some(d=>d.deviceId===i.deviceId&&d.stateKey===i.primaryStateKey)||D.value.push({deviceId:i.deviceId,stateKey:i.primaryStateKey,type:t.chartType==="bar"?"bar":"line",data:[]});const o=(d,{subscriptionKey:u,history:K},j,B)=>{if(F.value=!0,d||!K){const ie=d&&d.message||"Invalid History Data";return O.value[u]=j.stateKey+": "+ie+"!",O.value}delete O.value[u],delete z[B.id+":"+j.stateKey],X(K,i,j,B)},{start:r,end:l,review:S,step:c,count:g,ack:m,ignoreNull:N,aggregate:R}=a;ce.history(i.deviceId,i.primaryStateKey,{start:r,end:l,review:S,step:c,count:g,ack:m,ignoreNull:N,aggregate:R,instance:i.historyAdapter||t.defaultHistoryAdapter},o)}})},_=de(()=>{const a=I.isPro()&&t.yAxis?t.yAxis:null;!I.isPro()&&(t.xAxis||t.yAxis)&&I.warn("HistoryGraph: Axis Configuration is only available to Pro!");let i=7;const o=2;let r=90;return t.zoom&&(i+=10,r-=10),t.dataZoom&&(r-=17),t.legend==="top"&&(i+=10,r-=10),t.legend==="bottom"&&(r-=10),{backgroundColor:"transparent",tooltip:{trigger:"axis",formatter:l=>{const S=l.map(c=>{let[,g,m]=c.data||[];return m=typeof m=="object"?m[g]||m.default:m,""+c.marker+'<span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">'+c.seriesName+'</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">'+(typeof g=="number"?g.toFixed(2):"-")+(m?" "+m:"")+"</span>"});return l[0].axisValueLabel.replace(" 00:00:00","")+"<br />"+S.join("<br />")}},legend:{show:t.legend!=="off",bottom:t.legend==="bottom"?t.dataZoom?50:0:"auto",padding:[10,10,0,10],textStyle:{color:n.dark.isActive?"#fff":"#666"}},grid:{top:i+"%",left:"2%",right:"2%",bottom:o+"%",containLabel:!0,height:r+"%"},toolbox:{feature:{dataZoom:{show:t.zoom,yAxisIndex:"none"}}},xAxis:{axisLabel:{fontSize:10,formatter:t.dateFormat?t.dateFormat.replace("HH:mm|dd.MM.","{HH}:{mm}|{dd}.{MM}.").replace(/\|/g,`
`):{year:"{yyyy}",month:"{MMM}",day:`
{dd}.{MM}.`,hour:`{HH}:{mm}
{dd}.{MM}.`,minute:"{HH}:{mm}",second:"{HH}:{mm}:{ss}",millisecond:"{hh}:{mm}:{ss} {SSS}",none:"{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}"}},...I.isPro()&&t.xAxis||{},type:"time"},yAxis:a&&Array.isArray(a)&&a.length>0?a.map(l=>({splitLine:{lineStyle:{color:"#ccc"}},...l})):{splitLine:{lineStyle:{color:"#ccc"}},...a||{},type:"value",show:!t.stepLineChart},dataZoom:t.dataZoom&&[{start:100-(t.dataZoom===1?100:parseInt(t.dataZoom)||100),end:100}],series:D.value}}),ee=()=>{f.value=H.value,F.value=!1,U()},te=()=>{H.value=f.value},ae=a=>{H.value[a.id]=a.value};return U(),{loaded:F,errors:O,moduleConfig:t,userConfig:f,tempConfig:H,chartOptions:_,onApply:ee,onCancel:te,onChange:ae,optionsTimeType:J,optionsTimeReviewUnits:W}}}),Ae={style:{"min-width":"1px","min-height":"1px"}},ke={key:0},Ie={key:1},He={class:"row no-wrap q-pa-sm items-center bg-primary text-white"};function Oe(e,s,n,p,t,y){const C=V("alert"),b=V("v-chart"),f=V("inputs");return w(),A("div",Ae,[T(h(ge,{indeterminate:""},null,512),[[k,!e.loaded]]),Object.values(e.errors).length>0?(w(),x(C,{key:0,title:Object.values(e.errors).join("<br />")},null,8,["title"])):L("",!0),e.loaded?(w(),A("div",{key:1,style:ue({"min-width":"100%","min-height":"100%",width:(e._widgetSize.width||e._containerSize.width)+"px",height:e._containerSize.height-25+"px"})},[h(b,{autoresize:"",ref:"vchart",option:e.chartOptions},null,8,["option"])],4)):L("",!0),e.moduleConfig.timeConfigurable?T((w(),A("a",{key:2,class:pe("chartConfiguration chartConfiguration-"+e.widget.id)},[e.userConfig.timeType==="timeline"?(w(),A("span",ke,v(e.zero(e.userConfig.timeTimelineDate.from.day))+"."+v(e.zero(e.userConfig.timeTimelineDate.from.month))+"."+v(e.userConfig.timeTimelineDate.from.year)+" - "+v(e.zero(e.userConfig.timeTimelineDate.to.day))+"."+v(e.zero(e.userConfig.timeTimelineDate.to.month))+"."+v(e.userConfig.timeTimelineDate.to.year),1)):(w(),A("span",Ie,v(e.userConfig.timeReviewValue)+" "+v(e.$t(e.userConfig.timeReviewUnit)),1)),e.moduleConfig.timeConfigurable?(w(),x(fe,{key:2,fit:"",cover:"",target:".chartConfiguration-"+e.widget.id,onHide:e.onCancel},{default:ye(()=>[he("div",He,[h(f,{class:"text-white",id:"timeType",type:"Select",dense:"",value:e.tempConfig.timeType,onOnSelect:e.onChange,options:e.optionsTimeType},null,8,["value","onOnSelect","options"]),T(h(f,{id:"timeTimelineDate",type:"Date",dense:"",value:e.tempConfig.timeTimelineDate,onOnChange:e.onChange},null,8,["value","onOnChange"]),[[k,e.tempConfig.timeType==="timeline"]]),T(h(f,{id:"timeReviewValue",type:"Number",dense:"",value:e.tempConfig.timeReviewValue,onOnChange:e.onChange},null,8,["value","onOnChange"]),[[k,e.tempConfig.timeType==="review"]]),T(h(f,{id:"timeReviewUnit",type:"Select",dense:"",value:e.tempConfig.timeReviewUnit,options:e.optionsTimeReviewUnits,onOnSelect:e.onChange},null,8,["value","options","onOnSelect"]),[[k,e.tempConfig.timeType==="review"]]),h(ve),T(h(Ce,{flat:"",label:e.$t("Apply"),onClick:e.onApply},null,8,["label","onClick"]),[[we]])])]),_:1},8,["target","onHide"])):L("",!0)],2)),[[k,e.loaded]]):L("",!0)])}var Ve=oe(Me,[["render",Oe]]);export{Ve as default};
