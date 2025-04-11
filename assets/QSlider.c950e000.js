import{u as Oe,a as Xe,b as Ye}from"./private.use-form.843154ef.js";import{aa as Ke,ab as Ue,ac as E,Z as Qe,ad as He,ae as N,af as Y,ag as ue,ah as K,ai as D,aj as U,U as ve,ak as We,r as _,e as n,o as Ze,al as Ge,g as y,am as Je,j as fe,an as et,ao as Q,c as tt,w as at}from"./index.31c89960.js";const W={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},rt=Object.keys(W);W.all=!0;function ie(a){const r={};for(const u of rt)a[u]===!0&&(r[u]=!0);return Object.keys(r).length===0?W:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const lt=["INPUT","TEXTAREA"];function ce(a,r){return r.event===void 0&&a.target!==void 0&&a.target.draggable!==!0&&typeof r.handler=="function"&&lt.includes(a.target.nodeName.toUpperCase())===!1&&(a.qClonedBy===void 0||a.qClonedBy.indexOf(r.uid)===-1)}function nt(){if(window.getSelection!==void 0){const a=window.getSelection();a.empty!==void 0?a.empty():a.removeAllRanges!==void 0&&(a.removeAllRanges(),Ke.is.mobile!==!0&&a.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function H(a,r,u){const s=D(a);let e,l=s.left-r.event.x,i=s.top-r.event.y,c=Math.abs(l),m=Math.abs(i);const d=r.direction;d.horizontal===!0&&d.vertical!==!0?e=l<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=i<0?"up":"down":d.up===!0&&i<0?(e="up",c>m&&(d.left===!0&&l<0?e="left":d.right===!0&&l>0&&(e="right"))):d.down===!0&&i>0?(e="down",c>m&&(d.left===!0&&l<0?e="left":d.right===!0&&l>0&&(e="right"))):d.left===!0&&l<0?(e="left",c<m&&(d.up===!0&&i<0?e="up":d.down===!0&&i>0&&(e="down"))):d.right===!0&&l>0&&(e="right",c<m&&(d.up===!0&&i<0?e="up":d.down===!0&&i>0&&(e="down")));let k=!1;if(e===void 0&&u===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,k=!0,e==="left"||e==="right"?(s.left-=l,c=0,l=0):(s.top-=i,m=0,i=0)}return{synthetic:k,payload:{evt:a,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:s,direction:e,isFirst:r.event.isFirst,isFinal:u===!0,duration:Date.now()-r.event.time,distance:{x:c,y:m},offset:{x:l,y:i},delta:{x:s.left-r.event.lastX,y:s.top-r.event.lastY}}}}let ot=0;var st=Ue({name:"touch-pan",beforeMount(a,{value:r,modifiers:u}){if(u.mouse!==!0&&E.has.touch!==!0)return;function s(l,i){u.mouse===!0&&i===!0?ve(l):(u.stop===!0&&K(l),u.prevent===!0&&ue(l))}const e={uid:"qvtp_"+ot++,handler:r,modifiers:u,direction:ie(u),noop:Qe,mouseStart(l){ce(l,e)&&He(l)&&(N(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(ce(l,e)){const i=l.target;N(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,i){if(E.is.firefox===!0&&Y(a,!0),e.lastEvt=l,i===!0||u.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&ue(d),l.cancelBubble===!0&&K(d),Object.assign(d,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:d}}K(l)}const{left:c,top:m}=D(l);e.event={x:c,y:m,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:m}},move(l){if(e.event===void 0)return;const i=D(l),c=i.left-e.event.x,m=i.top-e.event.y;if(c===0&&m===0)return;e.lastEvt=l;const d=e.event.mouse===!0,k=()=>{s(l,d);let g;u.preserveCursor!==!0&&u.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),nt(),e.styleCleanup=p=>{if(e.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),d===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{T(),p()},50):T()}else p!==void 0&&p()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(l,e.event.mouse);const{payload:g,synthetic:p}=H(l,e,!1);g!==void 0&&(e.handler(g)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&k(),e.event.lastX=g.position.left,e.event.lastY=g.position.top,e.event.lastDir=p===!0?void 0:g.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){k(),e.event.detected=!0,e.move(l);return}const S=Math.abs(c),h=Math.abs(m);S!==h&&(e.direction.horizontal===!0&&S>h||e.direction.vertical===!0&&S<h||e.direction.up===!0&&S<h&&m<0||e.direction.down===!0&&S<h&&m>0||e.direction.left===!0&&S>h&&c<0||e.direction.right===!0&&S>h&&c>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,i){if(e.event!==void 0){if(U(e,"temp"),E.is.firefox===!0&&Y(a,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(H(l===void 0?e.lastEvt:l,e).payload);const{payload:c}=H(l===void 0?e.lastEvt:l,e,!0),m=()=>{e.handler(c)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(a.__qtouchpan=e,u.mouse===!0){const l=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";N(e,"main",[[a,"mousedown","mouseStart",`passive${l}`]])}E.has.touch===!0&&N(e,"main",[[a,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[a,"touchmove","noop","notPassiveCapture"]])},updated(a,r){const u=a.__qtouchpan;u!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&u.end(),u.handler=r.value),u.direction=ie(r.modifiers))},beforeUnmount(a){const r=a.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),U(r,"main"),U(r,"temp"),E.is.firefox===!0&&Y(a,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete a.__qtouchpan)}});function B(a,r,u){return u<=r?r:Math.min(u,Math.max(r,a))}function bt(a,r,u){if(u<=r)return r;const s=u-r+1;let e=r+(a-r)%s;return e<r&&(e=s+e),e===0?0:e}const de="q-slider__marker-labels",ut=a=>({value:a}),it=({marker:a})=>y("div",{key:a.value,style:a.style,class:a.classes},a.label),me=[34,37,40,33,39,38],ct={...Ge,...Oe,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:a=>a>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},dt=["pan","update:modelValue","change"];function vt({updateValue:a,updatePosition:r,getDragging:u,formAttrs:s}){const{props:e,emit:l,slots:i,proxy:{$q:c}}=fe(),m=We(e,c),d=Xe(s),k=_(!1),S=_(!1),h=_(!1),g=_(!1),p=n(()=>e.vertical===!0?"--v":"--h"),T=n(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),M=n(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(c.lang.rtl===!0)),x=n(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),$=n(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),b=n(()=>e.disable!==!0&&e.readonly!==!0&&x.value<$.value),q=n(()=>{if(e.step===0)return o=>o;const t=(String(e.step).trim().split(".")[1]||"").length;return o=>parseFloat(o.toFixed(t))}),L=n(()=>e.step===0?1:e.step),pe=n(()=>b.value===!0?e.tabindex||0:-1),R=n(()=>e.max-e.min),Z=n(()=>$.value-x.value),F=n(()=>P(x.value)),I=n(()=>P($.value)),z=n(()=>e.vertical===!0?M.value===!0?"bottom":"top":M.value===!0?"right":"left"),G=n(()=>e.vertical===!0?"height":"width"),be=n(()=>e.vertical===!0?"width":"height"),J=n(()=>e.vertical===!0?"vertical":"horizontal"),he=n(()=>{const t={role:"slider","aria-valuemin":x.value,"aria-valuemax":$.value,"aria-orientation":J.value,"data-step":e.step};return e.disable===!0?t["aria-disabled"]="true":e.readonly===!0&&(t["aria-readonly"]="true"),t}),ge=n(()=>`q-slider q-slider${p.value} q-slider--${k.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(b.value===!0?" q-slider--editable":""))+(h.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(m.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+p.value:""));function A(t){const o="q-slider__"+t;return`${o} ${o}${p.value} ${o}${p.value}${T.value}`}function ee(t){const o="q-slider__"+t;return`${o} ${o}${p.value}`}const Ce=n(()=>{const t=e.selectionColor||e.color;return"q-slider__selection absolute"+(t!==void 0?` text-${t}`:"")}),ke=n(()=>ee("markers")+" absolute overflow-hidden"),ye=n(()=>ee("track-container")),Se=n(()=>A("pin")),xe=n(()=>A("label")),Me=n(()=>A("text-container")),$e=n(()=>A("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),qe=n(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),we=n(()=>{const t={[be.value]:e.trackSize};return e.trackImg!==void 0&&(t.backgroundImage=`url(${e.trackImg}) !important`),t}),Le=n(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),te=n(()=>{const t=I.value-F.value,o={[z.value]:`${100*F.value}%`,[G.value]:t===0?"2px":`${100*t}%`};return e.innerTrackImg!==void 0&&(o.backgroundImage=`url(${e.innerTrackImg}) !important`),o});function _e(t){const{min:o,max:v,step:f}=e;let C=o+t*(v-o);if(f>0){const w=(C-x.value)%f;C+=(Math.abs(w)>=f/2?(w<0?-1:1)*f:0)-w}return C=q.value(C),B(C,x.value,$.value)}function P(t){return R.value===0?0:(t-e.min)/R.value}function Te(t,o){const v=D(t),f=e.vertical===!0?B((v.top-o.top)/o.height,0,1):B((v.left-o.left)/o.width,0,1);return B(M.value===!0?1-f:f,F.value,I.value)}const ae=n(()=>et(e.markers)===!0?e.markers:L.value),re=n(()=>{const t=[],o=ae.value,v=e.max;let f=e.min;do t.push(f),f+=o;while(f<v);return t.push(v),t}),le=n(()=>{const t=` ${de}${p.value}-`;return de+`${t}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${t}${M.value===!0?"rtl":"ltr"}`}),V=n(()=>e.markerLabels===!1?null:Ee(e.markerLabels).map((t,o)=>({index:o,value:t.value,label:t.label||t.value,classes:le.value+(t.classes!==void 0?" "+t.classes:""),style:{...oe(t.value),...t.style||{}}}))),ne=n(()=>({markerList:V.value,markerMap:Re.value,classes:le.value,getStyle:oe})),Be=n(()=>{const t=Z.value===0?"2px":100*ae.value/Z.value;return{...te.value,backgroundSize:e.vertical===!0?`2px ${t}%`:`${t}% 2px`}});function Ee(t){if(t===!1)return null;if(t===!0)return re.value.map(ut);if(typeof t=="function")return re.value.map(v=>{const f=t(v);return Q(f)===!0?{...f,value:v}:{value:v,label:f}});const o=({value:v})=>v>=e.min&&v<=e.max;return Array.isArray(t)===!0?t.map(v=>Q(v)===!0?v:{value:v}).filter(o):Object.keys(t).map(v=>{const f=t[v],C=Number(v);return Q(f)===!0?{...f,value:C}:{value:C,label:f}}).filter(o)}function oe(t){return{[z.value]:`${100*(t-e.min)/R.value}%`}}const Re=n(()=>{if(e.markerLabels===!1)return null;const t={};return V.value.forEach(o=>{t[o.value]=o}),t});function Fe(){if(i["marker-label-group"]!==void 0)return i["marker-label-group"](ne.value);const t=i["marker-label"]||it;return V.value.map(o=>t({marker:o,...ne.value}))}const ze=n(()=>[[st,Ae,void 0,{[J.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function Ae(t){t.isFinal===!0?(g.value!==void 0&&(r(t.evt),t.touch===!0&&a(!0),g.value=void 0,l("pan","end")),k.value=!1,h.value=!1):t.isFirst===!0?(g.value=u(t.evt),r(t.evt),a(),k.value=!0,l("pan","start")):(r(t.evt),a())}function se(){h.value=!1}function Ne(t){r(t,u(t)),a(),S.value=!0,k.value=!0,document.addEventListener("mouseup",j,!0)}function j(){S.value=!1,k.value=!1,a(!0),se(),document.removeEventListener("mouseup",j,!0)}function De(t){r(t,u(t)),a(!0)}function Ie(t){me.includes(t.keyCode)&&a(!0)}function Pe(t){if(e.vertical===!0)return null;const o=c.lang.rtl!==e.reverse?1-t:t;return{transform:`translateX(calc(${2*o-1} * ${e.thumbSize} / 2 + ${50-100*o}%))`}}function Ve(t){const o=n(()=>S.value===!1&&(h.value===t.focusValue||h.value==="both")?" q-slider--focus":""),v=n(()=>`q-slider__thumb q-slider__thumb${p.value} q-slider__thumb${p.value}-${M.value===!0?"rtl":"ltr"} absolute non-selectable`+o.value+(t.thumbColor.value!==void 0?` text-${t.thumbColor.value}`:"")),f=n(()=>({width:e.thumbSize,height:e.thumbSize,[z.value]:`${100*t.ratio.value}%`,zIndex:h.value===t.focusValue?2:void 0})),C=n(()=>t.labelColor.value!==void 0?` text-${t.labelColor.value}`:""),w=n(()=>Pe(t.ratio.value)),O=n(()=>"q-slider__text"+(t.labelTextColor.value!==void 0?` text-${t.labelTextColor.value}`:""));return()=>{const X=[y("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[y("path",{d:e.thumbPath})]),y("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(X.push(y("div",{class:Se.value+" absolute fit no-pointer-events"+C.value},[y("div",{class:xe.value,style:{minWidth:e.thumbSize}},[y("div",{class:Me.value,style:w.value},[y("span",{class:O.value},t.label.value)])])])),e.name!==void 0&&e.disable!==!0&&d(X,"push")),y("div",{class:v.value,style:f.value,...t.getNodeData()},X)}}function je(t,o,v,f){const C=[];e.innerTrackColor!=="transparent"&&C.push(y("div",{key:"inner",class:Le.value,style:te.value})),e.selectionColor!=="transparent"&&C.push(y("div",{key:"selection",class:Ce.value,style:t.value})),e.markers!==!1&&C.push(y("div",{key:"marker",class:ke.value,style:Be.value})),f(C);const w=[Je("div",{key:"trackC",class:ye.value,tabindex:o.value,...v.value},[y("div",{class:qe.value,style:we.value},C)],"slide",b.value,()=>ze.value)];if(e.markerLabels!==!1){const O=e.switchMarkerLabelsSide===!0?"unshift":"push";w[O](y("div",{key:"markerL",class:$e.value},Fe()))}return w}return Ze(()=>{document.removeEventListener("mouseup",j,!0)}),{state:{active:k,focus:h,preventFocus:S,dragging:g,editable:b,classes:ge,tabindex:pe,attributes:he,roundValueFn:q,keyStep:L,trackLen:R,innerMin:x,innerMinRatio:F,innerMax:$,innerMaxRatio:I,positionProp:z,sizeProp:G,isReversed:M},methods:{onActivate:Ne,onMobileClick:De,onBlur:se,onKeyup:Ie,getContent:je,getThumbRenderFn:Ve,convertRatioToModel:_e,convertModelToRatio:P,getDraggingRatio:Te}}}const ft=()=>({});var ht=tt({name:"QSlider",props:{...ct,modelValue:{required:!0,default:null,validator:a=>typeof a=="number"||a===null},labelValue:[String,Number]},emits:dt,setup(a,{emit:r}){const{proxy:{$q:u}}=fe(),{state:s,methods:e}=vt({updateValue:p,updatePosition:M,getDragging:T,formAttrs:Ye(a)}),l=_(null),i=_(0),c=_(0);function m(){c.value=a.modelValue===null?s.innerMin.value:B(a.modelValue,s.innerMin.value,s.innerMax.value)}at(()=>`${a.modelValue}|${s.innerMin.value}|${s.innerMax.value}`,m),m();const d=n(()=>e.convertModelToRatio(c.value)),k=n(()=>s.active.value===!0?i.value:d.value),S=n(()=>{const b={[s.positionProp.value]:`${100*s.innerMinRatio.value}%`,[s.sizeProp.value]:`${100*(k.value-s.innerMinRatio.value)}%`};return a.selectionImg!==void 0&&(b.backgroundImage=`url(${a.selectionImg}) !important`),b}),h=e.getThumbRenderFn({focusValue:!0,getNodeData:ft,ratio:k,label:n(()=>a.labelValue!==void 0?a.labelValue:c.value),thumbColor:n(()=>a.thumbColor||a.color),labelColor:n(()=>a.labelColor),labelTextColor:n(()=>a.labelTextColor)}),g=n(()=>s.editable.value!==!0?{}:u.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:x,onBlur:e.onBlur,onKeydown:$,onKeyup:e.onKeyup});function p(b){c.value!==a.modelValue&&r("update:modelValue",c.value),b===!0&&r("change",c.value)}function T(){return l.value.getBoundingClientRect()}function M(b,q=s.dragging.value){const L=e.getDraggingRatio(b,q);c.value=e.convertRatioToModel(L),i.value=a.snap!==!0||a.step===0?L:e.convertModelToRatio(c.value)}function x(){s.focus.value=!0}function $(b){if(me.includes(b.keyCode)===!1)return;ve(b);const q=([34,33].includes(b.keyCode)?10:1)*s.keyStep.value,L=([34,37,40].includes(b.keyCode)?-1:1)*(s.isReversed.value===!0?-1:1)*(a.vertical===!0?-1:1)*q;c.value=B(s.roundValueFn.value(c.value+L),s.innerMin.value,s.innerMax.value),p()}return()=>{const b=e.getContent(S,s.tabindex,g,q=>{q.push(h())});return y("div",{ref:l,class:s.classes.value+(a.modelValue===null?" q-slider--no-value":""),...s.attributes.value,"aria-valuenow":a.modelValue},b)}}});export{ht as Q,st as T,dt as a,vt as b,nt as c,B as d,ie as g,me as k,bt as n,ce as s,ct as u};
