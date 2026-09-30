var En,An,Sn,Fn,Dn,Cn;function J(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n}typeof SuppressedError=="function"&&SuppressedError;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=globalThis,Cr=Zt.ShadowRoot&&(Zt.ShadyCSS===void 0||Zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kr=Symbol(),Ki=new WeakMap;let Yi=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==kr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Cr&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Ki.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ki.set(r,e))}return e}toString(){return this.cssText}};const is=t=>new Yi(typeof t=="string"?t:t+"",void 0,kr),Vi=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1],t[0]);return new Yi(r,t,kr)},os=(t,e)=>{if(Cr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),o=Zt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}},Zi=Cr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return is(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ns,defineProperty:ss,getOwnPropertyDescriptor:as,getOwnPropertyNames:ls,getOwnPropertySymbols:ds,getPrototypeOf:cs}=Object,Se=globalThis,Xi=Se.trustedTypes,us=Xi?Xi.emptyScript:"",$r=Se.reactiveElementPolyfillSupport,vt=(t,e)=>t,Xt={toAttribute(t,e){switch(e){case Boolean:t=t?us:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Tr=(t,e)=>!ns(t,e),Qi={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:Tr};(En=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(An=Se.litPropertyMetadata)!=null||(Se.litPropertyMetadata=new WeakMap);let rt=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Qi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,r);o!==void 0&&ss(this.prototype,e,o)}}static getPropertyDescriptor(e,r,i){var s;const{get:o,set:n}=(s=as(this.prototype,e))!=null?s:{get(){return this[r]},set(l){this[r]=l}};return{get:o,set(l){const d=o==null?void 0:o.call(this);n==null||n.call(this,l),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:Qi}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;const e=cs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){const r=this.properties,i=[...ls(r),...ds(r)];for(const o of i)this.createProperty(o,r[o])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)r.unshift(Zi(o))}else e!==void 0&&r.push(Zi(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,i;((r=this._$EO)!=null?r:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;const e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return os(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$ET(e,r){var n;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Xt).toAttribute(r,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){var n,s,l;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const d=i.getPropertyOptions(o),u=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)==null?void 0:n.fromAttribute)!==void 0?d.converter:Xt;this._$Em=o;const _=u.fromAttribute(r,d.type);this[o]=(l=_!=null?_:(s=this._$Ej)==null?void 0:s.get(o))!=null?l:_,this._$Em=null}}requestUpdate(e,r,i,o=!1,n){var s,l;if(e!==void 0){const d=this.constructor;if(o===!1&&(n=this[e]),i!=null||(i=d.getPropertyOptions(e)),!(((s=i.hasChanged)!=null?s:Tr)(n,r)||i.useDefault&&i.reflect&&n===((l=this._$Ej)==null?void 0:l.get(e))&&!this.hasAttribute(d._$Eu(e,i))))return;this.C(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:i,reflect:o,wrapped:n},s){var l,d,u;i&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(d=s!=null?s:r)!=null?d:this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(r=void 0),this._$AL.set(e,r)),o===!0&&this._$Em!==e&&((u=this._$Eq)!=null?u:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,l]of this._$Ep)this[s]=l;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,l]of n){const{wrapped:d}=l,u=this[s];d!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,l,u)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},rt[vt("elementProperties")]=new Map,rt[vt("finalized")]=new Map,$r==null||$r({ReactiveElement:rt}),((Sn=Se.reactiveElementVersions)!=null?Sn:Se.reactiveElementVersions=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis,Ji=t=>t,Qt=bt.trustedTypes,eo=Qt?Qt.createPolicy("lit-html",{createHTML:t=>t}):void 0,to="$lit$",Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,ro="?"+Fe,ps=`<${ro}>`,ze=document,yt=()=>ze.createComment(""),wt=t=>t===null||typeof t!="object"&&typeof t!="function",Mr=Array.isArray,hs=t=>Mr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Lr=`[ 	
\f\r]`,xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,io=/-->/g,oo=/>/g,Pe=RegExp(`>|${Lr}(?:([^\\s"'>=/]+)(${Lr}*=${Lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),no=/'/g,so=/"/g,ao=/^(?:script|style|textarea|title)$/i,lo=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),f=lo(1),Ne=lo(2),Ie=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),co=new WeakMap,Re=ze.createTreeWalker(ze,129);function uo(t,e){if(!Mr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return eo!==void 0?eo.createHTML(e):e}const _s=(t,e)=>{const r=t.length-1,i=[];let o,n=e===2?"<svg>":e===3?"<math>":"",s=xt;for(let l=0;l<r;l++){const d=t[l];let u,_,p=-1,v=0;for(;v<d.length&&(s.lastIndex=v,_=s.exec(d),_!==null);)v=s.lastIndex,s===xt?_[1]==="!--"?s=io:_[1]!==void 0?s=oo:_[2]!==void 0?(ao.test(_[2])&&(o=RegExp("</"+_[2],"g")),s=Pe):_[3]!==void 0&&(s=Pe):s===Pe?_[0]===">"?(s=o!=null?o:xt,p=-1):_[1]===void 0?p=-2:(p=s.lastIndex-_[2].length,u=_[1],s=_[3]===void 0?Pe:_[3]==='"'?so:no):s===so||s===no?s=Pe:s===io||s===oo?s=xt:(s=Pe,o=void 0);const b=s===Pe&&t[l+1].startsWith("/>")?" ":"";n+=s===xt?d+ps:p>=0?(i.push(u),d.slice(0,p)+to+d.slice(p)+Fe+b):d+Fe+(p===-2?l:b)}return[uo(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Br=class kn{constructor({strings:e,_$litType$:r},i){let o;this.parts=[];let n=0,s=0;const l=e.length-1,d=this.parts,[u,_]=_s(e,r);if(this.el=kn.createElement(u,i),Re.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=Re.nextNode())!==null&&d.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(to)){const v=_[s++],b=o.getAttribute(p).split(Fe),x=/([.?@])?(.*)/.exec(v);d.push({type:1,index:n,name:x[2],strings:b,ctor:x[1]==="."?ms:x[1]==="?"?fs:x[1]==="@"?vs:Jt}),o.removeAttribute(p)}else p.startsWith(Fe)&&(d.push({type:6,index:n}),o.removeAttribute(p));if(ao.test(o.tagName)){const p=o.textContent.split(Fe),v=p.length-1;if(v>0){o.textContent=Qt?Qt.emptyScript:"";for(let b=0;b<v;b++)o.append(p[b],yt()),Re.nextNode(),d.push({type:2,index:++n});o.append(p[v],yt())}}}else if(o.nodeType===8)if(o.data===ro)d.push({type:2,index:n});else{let p=-1;for(;(p=o.data.indexOf(Fe,p+1))!==-1;)d.push({type:7,index:n}),p+=Fe.length-1}n++}}static createElement(e,r){const i=ze.createElement("template");return i.innerHTML=e,i}};function it(t,e,r=t,i){var s,l,d;if(e===Ie)return e;let o=i!==void 0?(s=r._$Co)==null?void 0:s[i]:r._$Cl;const n=wt(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),n===void 0?o=void 0:(o=new n(t),o._$AT(t,r,i)),i!==void 0?((d=r._$Co)!=null?d:r._$Co=[])[i]=o:r._$Cl=o),o!==void 0&&(e=it(t,o._$AS(t,e.values),o,i)),e}let gs=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var u;const{el:{content:r},parts:i}=this._$AD,o=((u=e==null?void 0:e.creationScope)!=null?u:ze).importNode(r,!0);Re.currentNode=o;let n=Re.nextNode(),s=0,l=0,d=i[0];for(;d!==void 0;){if(s===d.index){let _;d.type===2?_=new zr(n,n.nextSibling,this,e):d.type===1?_=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(_=new bs(n,this,e)),this._$AV.push(_),d=i[++l]}s!==(d==null?void 0:d.index)&&(n=Re.nextNode(),s++)}return Re.currentNode=ze,o}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},zr=class $n{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,i,o){var n;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=o,this._$Cv=(n=o==null?void 0:o.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=it(this,e,r),wt(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Ie&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ze.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Br.createElement(uo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(r);else{const s=new gs(o,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(e){let r=co.get(e.strings);return r===void 0&&co.set(e.strings,r=new Br(e)),r}k(e){Mr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of e)o===r.length?r.push(i=new $n(this.O(yt()),this.O(yt()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e!==this._$AB;){const o=Ji(e).nextSibling;Ji(e).remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Jt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,o,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(e,r=this,i,o){const n=this.strings;let s=!1;if(n===void 0)e=it(this,e,r,0),s=!wt(e)||e!==this._$AH&&e!==Ie,s&&(this._$AH=e);else{const l=e;let d,u;for(e=n[0],d=0;d<n.length-1;d++)u=it(this,l[i+d],r,d),u===Ie&&(u=this._$AH[d]),s||(s=!wt(u)||u!==this._$AH[d]),u===y?e=y:e!==y&&(e+=(u!=null?u:"")+n[d+1]),this._$AH[d]=u}s&&!o&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ms=class extends Jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},fs=class extends Jt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},vs=class extends Jt{constructor(e,r,i,o,n){super(e,r,i,o,n),this.type=5}_$AI(e,r=this){var s;if((e=(s=it(this,e,r,0))!=null?s:y)===Ie)return;const i=this._$AH,o=e===y&&i!==y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==y&&(i===y||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)==null?void 0:r.host)!=null?i:this.element,e):this._$AH.handleEvent(e)}},bs=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){it(this,e)}};const Pr=bt.litHtmlPolyfillSupport;Pr==null||Pr(Br,zr),((Fn=bt.litHtmlVersions)!=null?Fn:bt.litHtmlVersions=[]).push("3.3.2");const ys=(t,e,r)=>{var n,s;const i=(n=r==null?void 0:r.renderBefore)!=null?n:e;let o=i._$litPart$;if(o===void 0){const l=(s=r==null?void 0:r.renderBefore)!=null?s:null;i._$litPart$=o=new zr(e.insertBefore(yt(),l),l,void 0,r!=null?r:{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=globalThis;let ot=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,i;const e=super.createRenderRoot();return(i=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ys(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ie}};ot._$litElement$=!0,ot.finalized=!0,(Dn=Oe.litElementHydrateSupport)==null||Dn.call(Oe,{LitElement:ot});const Nr=Oe.litElementPolyfillSupport;Nr==null||Nr({LitElement:ot}),((Cn=Oe.litElementVersions)!=null?Cn:Oe.litElementVersions=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws={attribute:!0,type:String,converter:Xt,reflect:!1,hasChanged:Tr},xs=(t=ws,e,r)=>{const{kind:i,metadata:o}=r;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(r.name,t),i==="accessor"){const{name:s}=r;return{set(l){const d=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,d,t,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(i==="setter"){const{name:s}=r;return function(l){const d=this[s];e.call(this,l),this.requestUpdate(s,d,t,!0,l)}}throw Error("Unsupported decorator location: "+i)};function Ir(t){return(e,r)=>typeof r=="object"?xs(t,e,r):((i,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,i),s?Object.getOwnPropertyDescriptor(o,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(t){return Ir({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es={CHILD:2},As=t=>(...e)=>({_$litDirective$:t,values:e});let Ss=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rr extends Ss{constructor(e){if(super(e),this.it=y,e.type!==Es.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===Ie)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Rr.directiveName="unsafeHTML",Rr.resultType=1;const Fs=As(Rr),nt={preparation:"striped",active:"shimmer",ongoing:"pulse"},st={preparation:"dashed",active:"solid",ongoing:"solid"};/*! @license DOMPurify 3.4.15 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.15/LICENSE */function ho(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function Ds(t){if(Array.isArray(t))return t}function Cs(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,o,n,s,l=[],d=!0,u=!1;try{if(n=(r=r.call(t)).next,e!==0)for(;!(d=(i=n.call(r)).done)&&(l.push(i.value),l.length!==e);d=!0);}catch(_){u=!0,o=_}finally{try{if(!d&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw o}}return l}}function ks(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $s(t,e){return Ds(t)||Cs(t,e)||Ts(t,e)||ks()}function Ts(t,e){if(t){if(typeof t=="string")return ho(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ho(t,e):void 0}}const _o=Object.entries,go=Object.setPrototypeOf,Ms=Object.isFrozen,Ls=Object.getPrototypeOf,Bs=Object.getOwnPropertyDescriptor;let O=Object.freeze,U=Object.seal,at=Object.create,mo=typeof Reflect!="undefined"&&Reflect,Or=mo.apply,Ur=mo.construct;O||(O=function(e){return e}),U||(U=function(e){return e}),Or||(Or=function(e,r){for(var i=arguments.length,o=new Array(i>2?i-2:0),n=2;n<i;n++)o[n-2]=arguments[n];return e.apply(r,o)}),Ur||(Ur=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return new e(...i)});const Ue=I(Array.prototype.forEach),zs=I(Array.prototype.lastIndexOf),fo=I(Array.prototype.pop),Et=I(Array.prototype.push),Ps=I(Array.prototype.splice),lt=Array.isArray,At=I(String.prototype.toLowerCase),Wr=I(String.prototype.toString),vo=I(String.prototype.match),St=I(String.prototype.replace),bo=I(String.prototype.indexOf),Ns=I(String.prototype.trim),Is=I(Number.prototype.toString),Rs=I(Boolean.prototype.toString),yo=typeof BigInt=="undefined"?null:I(BigInt.prototype.toString),wo=typeof Symbol=="undefined"?null:I(Symbol.prototype.toString),ee=I(Object.prototype.hasOwnProperty),Ft=I(Object.prototype.toString),Y=I(RegExp.prototype.test),We=Os(TypeError);function I(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return Or(t,e,i)}}function Os(t){return function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return Ur(t,r)}}function F(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:At;if(go&&go(t,null),!lt(e))return t;let i=e.length;for(;i--;){let o=e[i];if(typeof o=="string"){const n=r(o);n!==o&&(Ms(e)||(e[i]=n),o=n)}t[o]=!0}return t}function Us(t){for(let e=0;e<t.length;e++)ee(t,e)||(t[e]=null);return t}function re(t){const e=at(null);for(const i of _o(t)){var r=$s(i,2);const o=r[0],n=r[1];ee(t,o)&&(lt(n)?e[o]=Us(n):n&&typeof n=="object"&&n.constructor===Object?e[o]=re(n):e[o]=n)}return e}function Ws(t){switch(typeof t){case"string":return t;case"number":return Is(t);case"boolean":return Rs(t);case"bigint":return yo?yo(t):"0";case"symbol":return wo?wo(t):"Symbol()";case"undefined":return Ft(t);case"function":case"object":{if(t===null)return Ft(t);const e=t,r=oe(e,"toString");if(typeof r=="function"){const i=r(e);return typeof i=="string"?i:Ft(i)}return Ft(t)}default:return Ft(t)}}function oe(t,e){for(;t!==null;){const i=Bs(t,e);if(i){if(i.get)return I(i.get);if(typeof i.value=="function")return I(i.value)}t=Ls(t)}function r(){return null}return r}function Hs(t){try{return Y(t,""),!0}catch{return!1}}const xo=O(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Hr=O(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),jr=O(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),js=O(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Gr=O(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Gs=O(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Eo=O(["#text"]),Ao=O(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),qr=O(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),So=O(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),er=O(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qs=U(/{{[\w\W]*|^[\w\W]*}}/g),Ks=U(/<%[\w\W]*|^[\w\W]*%>/g),Ys=U(/\${[\w\W]*/g),Vs=U(/^data-[\-\w.\u00B7-\uFFFF]+$/),Zs=U(/^aria-[\-\w]+$/),Fo=U(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Xs=U(/^(?:\w+script|data):/i),Qs=U(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Js=U(/^html$/i),ea=U(/^[a-z][.\w]*(-[.\w]+)+$/i),Do=U(/<[/\w!]/g),Co=U(/<[/\w]/g),ta=U(/<\/no(script|embed|frames)/i),ra=U(/\/>/i),ie={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ko=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],ia=O(F({},ko)),oa=(function(){const t={};return Ue(ko,e=>{t[e]=U(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),O(t)})(),na=function(){return typeof window=="undefined"?null:window},sa=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(i=r.getAttribute(o));const n="dompurify"+(i?"#"+i:"");try{return e.createPolicy(n,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+n+" could not be created."),null}},$o=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},De=function(e,r,i,o){return ee(e,r)&&lt(e[r])?F(o.base?re(o.base):{},e[r],o.transform):i},Kr=function(e,r,i){const o=ee(e,r)?e[r]:void 0;return o&&typeof o=="object"?re(o):i()};function To(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:na();const e=m=>To(m);if(e.version="3.4.15",e.removed=[],!t||!t.document||t.document.nodeType!==ie.document||!t.Element)return e.isSupported=!1,e;let r=t.document;const i=r,o=i.currentScript;t.DocumentFragment;const n=t.HTMLTemplateElement,s=t.Node,l=t.Element,d=t.NodeFilter,u=t.NamedNodeMap;u===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const _=t.DOMParser,p=t.trustedTypes,v=l.prototype,b=oe(v,"cloneNode"),x=oe(v,"remove"),A=oe(v,"removeAttributeNode"),C=oe(v,"nextSibling"),D=oe(v,"childNodes"),N=oe(v,"parentNode"),G=oe(v,"shadowRoot"),W=oe(v,"attributes"),q=s&&s.prototype?oe(s.prototype,"nodeType"):null,de=s&&s.prototype?oe(s.prototype,"nodeName"):null,K=s&&s.prototype?oe(s.prototype,"ownerDocument"):null,Te=function(a){return q?q(a):a.nodeType},Ke=function(a){return de?de(a):a.nodeName};if(typeof n=="function"){const m=r.createElement("template");m.content&&m.content.ownerDocument&&(r=m.content.ownerDocument)}let H,ue="",Ye,ht=!1,fe=0;const Nt=function(){if(fe>0)throw We('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},R=function(a){Nt(),fe++;try{return H.createHTML(a)}finally{fe--}},we=function(a){Nt(),fe++;try{return H.createScriptURL(a)}finally{fe--}},_t=function(){return ht||(Ye=sa(p,o),ht=!0),Ye},Ve=r,pr=Ve.implementation,mi=Ve.createNodeIterator,Tn=Ve.createDocumentFragment,Mn=Ve.getElementsByTagName,Ln=i.importNode;let T=$o();e.isSupported=typeof _o=="function"&&typeof N=="function"&&pr&&pr.createHTMLDocument!==void 0;const Bn=qs,zn=Ks,Pn=Ys,Nn=Vs,In=Zs,Rn=Xs,fi=Qs,On=ea;let vi=Fo,M=null;const hr=F({},[...xo,...Hr,...jr,...Gr,...Eo]);let L=null;const _r=F({},[...Ao,...qr,...So,...er]);let pe=Object.seal(at(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),gt=null,bi=null;const xe=Object.seal(at(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let yi=!0,gr=!0,wi=!1,xi=!0,Ee=!1,Me=!0,Le=!1,mr=!1,It=null,Rt=null,fr=!1,Ze=!1,Ot=!1,Ut=!1,Ei=!0,Ai=!1;const Si="user-content-";let vr=!0,br=!1,Xe={},Qe=null;const Fi=F({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Di=null;const Ci=F({},["audio","video","img","source","image","track"]);let ki=null;const $i=F({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Wt="http://www.w3.org/1998/Math/MathML",Ht="http://www.w3.org/2000/svg",he="http://www.w3.org/1999/xhtml";let Je=he,yr=!1,wr=null;const Un=F({},[Wt,Ht,he],Wr),Ti=O(["mi","mo","mn","ms","mtext"]);let xr=F({},Ti);const Mi=O(["annotation-xml"]);let Er=F({},Mi);const Wn=F({},["title","style","font","a","script"]);let mt=null;const Hn=["application/xhtml+xml","text/html"],jn="text/html";let P=null,et=null;const Gn=r.createElement("form"),Li=function(a){return a instanceof RegExp||a instanceof Function},Ar=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(et&&et===a)return;(!a||typeof a!="object")&&(a={}),a=re(a),mt=Hn.indexOf(a.PARSER_MEDIA_TYPE)===-1?jn:a.PARSER_MEDIA_TYPE,P=mt==="application/xhtml+xml"?Wr:At,M=De(a,"ALLOWED_TAGS",hr,{transform:P}),L=De(a,"ALLOWED_ATTR",_r,{transform:P}),wr=De(a,"ALLOWED_NAMESPACES",Un,{transform:Wr}),ki=De(a,"ADD_URI_SAFE_ATTR",$i,{transform:P,base:$i}),Di=De(a,"ADD_DATA_URI_TAGS",Ci,{transform:P,base:Ci}),Qe=De(a,"FORBID_CONTENTS",Fi,{transform:P}),gt=De(a,"FORBID_TAGS",re({}),{transform:P}),bi=De(a,"FORBID_ATTR",re({}),{transform:P}),Xe=ee(a,"USE_PROFILES")?a.USE_PROFILES&&typeof a.USE_PROFILES=="object"?re(a.USE_PROFILES):a.USE_PROFILES:!1,yi=a.ALLOW_ARIA_ATTR!==!1,gr=a.ALLOW_DATA_ATTR!==!1,wi=a.ALLOW_UNKNOWN_PROTOCOLS||!1,xi=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ee=a.SAFE_FOR_TEMPLATES||!1,Me=a.SAFE_FOR_XML!==!1,Le=a.WHOLE_DOCUMENT||!1,Ze=a.RETURN_DOM||!1,Ot=a.RETURN_DOM_FRAGMENT||!1,Ut=a.RETURN_TRUSTED_TYPE||!1,fr=a.FORCE_BODY||!1,Ei=a.SANITIZE_DOM!==!1,Ai=a.SANITIZE_NAMED_PROPS||!1,vr=a.KEEP_CONTENT!==!1,br=a.IN_PLACE||!1,vi=Hs(a.ALLOWED_URI_REGEXP)?a.ALLOWED_URI_REGEXP:Fo,Je=typeof a.NAMESPACE=="string"?a.NAMESPACE:he,xr=Kr(a,"MATHML_TEXT_INTEGRATION_POINTS",()=>F({},Ti)),Er=Kr(a,"HTML_INTEGRATION_POINTS",()=>F({},Mi));const c=Kr(a,"CUSTOM_ELEMENT_HANDLING",()=>at(null));if(pe=at(null),ee(c,"tagNameCheck")&&Li(c.tagNameCheck)&&(pe.tagNameCheck=c.tagNameCheck),ee(c,"attributeNameCheck")&&Li(c.attributeNameCheck)&&(pe.attributeNameCheck=c.attributeNameCheck),ee(c,"allowCustomizedBuiltInElements")&&typeof c.allowCustomizedBuiltInElements=="boolean"&&(pe.allowCustomizedBuiltInElements=c.allowCustomizedBuiltInElements),U(pe),Ee&&(gr=!1),Ot&&(Ze=!0),Xe&&(M=F({},Eo),L=at(null),Xe.html===!0&&(F(M,xo),F(L,Ao)),Xe.svg===!0&&(F(M,Hr),F(L,qr),F(L,er)),Xe.svgFilters===!0&&(F(M,jr),F(L,qr),F(L,er)),Xe.mathMl===!0&&(F(M,Gr),F(L,So),F(L,er))),xe.tagCheck=null,xe.attributeCheck=null,ee(a,"ADD_TAGS")&&(typeof a.ADD_TAGS=="function"?xe.tagCheck=a.ADD_TAGS:lt(a.ADD_TAGS)&&(M===hr&&(M=re(M)),F(M,a.ADD_TAGS,P))),ee(a,"ADD_ATTR")&&(typeof a.ADD_ATTR=="function"?xe.attributeCheck=a.ADD_ATTR:lt(a.ADD_ATTR)&&(L===_r&&(L=re(L)),F(L,a.ADD_ATTR,P))),ee(a,"ADD_FORBID_CONTENTS")&&lt(a.ADD_FORBID_CONTENTS)&&(Qe===Fi&&(Qe=re(Qe)),F(Qe,a.ADD_FORBID_CONTENTS,P)),vr&&(M["#text"]=!0),Le&&F(M,["html","head","body"]),M.table&&(F(M,["tbody"]),delete gt.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw We('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw We('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const g=H;H=a.TRUSTED_TYPES_POLICY;try{ue=R("")}catch(w){throw H=g,w}}else a.TRUSTED_TYPES_POLICY===null?(H=void 0,ue=""):(H===void 0&&(H=_t()),H&&typeof ue=="string"&&(ue=R("")));O&&O(a),et=a},Bi=F({},[...Hr,...jr,...js]),zi=F({},[...Gr,...Gs]),qn=function(a,c,g){return c.namespaceURI===he?a==="svg":c.namespaceURI===Wt?a==="svg"&&(g==="annotation-xml"||xr[g]):!!Bi[a]},Kn=function(a,c,g){return c.namespaceURI===he?a==="math":c.namespaceURI===Ht?a==="math"&&Er[g]:!!zi[a]},Yn=function(a,c,g){return c.namespaceURI===Ht&&!Er[g]||c.namespaceURI===Wt&&!xr[g]?!1:!zi[a]&&(Wn[a]||!Bi[a])},Vn=function(a){let c=N(a);(!c||!c.tagName)&&(c={namespaceURI:Je,tagName:"template"});const g=At(a.tagName),w=At(c.tagName);return wr[a.namespaceURI]?a.namespaceURI===Ht?qn(g,c,w):a.namespaceURI===Wt?Kn(g,c,w):a.namespaceURI===he?Yn(g,c,w):!!(mt==="application/xhtml+xml"&&wr[a.namespaceURI]):!1},Ae=function(a){Et(e.removed,{element:a});try{N(a).removeChild(a)}catch{if(x(a),!N(a))throw We("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Pi=function(a,c,g){try{A(a,c)}catch{try{a.removeAttribute(g)}catch{}}},jt=function(a){Gt(a);const c=D(a);if(c){const w=[];Ue(c,E=>{Et(w,E)}),Ue(w,E=>{try{x(E)}catch{}})}const g=W(a);if(g)for(let w=g.length-1;w>=0;--w){const E=g[w],S=E&&E.name;typeof S=="string"&&Pi(a,E,S)}},Be=function(a,c,g){if(!g)try{g=c.getAttributeNode(a)}catch{g=null}Et(e.removed,{attribute:g||null,from:c});try{g?A(c,g):c.removeAttribute(a)}catch{try{c.removeAttribute(a)}catch{}}if(a==="is")if(Ze||Ot)try{Ae(c)}catch{}else try{c.setAttribute(a,"")}catch{}},Zn=function(a){const c=W(a);if(c)for(let g=c.length-1;g>=0;--g){const w=c[g],E=w&&w.name;typeof E!="string"||L[P(E)]||Pi(a,w,E)}},Gt=function(a){const c=[a];for(;c.length>0;){const g=c.pop();Te(g)===ie.element&&Zn(g);const E=D(g);if(E)for(let S=E.length-1;S>=0;--S)c.push(E[S])}},Ni=function(a,c){return Me?a==="patchsrc"?!0:a==="for"&&c!=="label"&&c!=="output":!1},Xn=function(a){if(!Me)return;const c=[a];for(;c.length>0;){const g=c.pop(),w=Te(g);if(w===ie.processingInstruction||w===ie.comment&&Y(Co,g.data)){try{x(g)}catch{}continue}if(w===ie.element){const S=g,k=P(Ke(g));try{S.hasAttribute&&S.hasAttribute("patchsrc")&&S.removeAttribute("patchsrc"),S.hasAttribute&&S.hasAttribute("for")&&Ni("for",k)&&S.removeAttribute("for")}catch{}}const E=D(g);if(E)for(let S=E.length-1;S>=0;--S)c.push(E[S])}},Ii=function(a){let c=null,g=null;if(fr)a="<remove></remove>"+a;else{const S=vo(a,/^[\r\n\t ]+/);g=S&&S[0]}mt==="application/xhtml+xml"&&Je===he&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const w=H?R(a):a;if(Je===he)try{c=new _().parseFromString(w,mt)}catch{}if(!c||!c.documentElement){c=pr.createDocument(Je,"template",null);try{c.documentElement.innerHTML=yr?ue:w}catch{}}const E=c.body||c.documentElement;return a&&g&&E.insertBefore(r.createTextNode(g),E.childNodes[0]||null),Je===he?Mn.call(c,Le?"html":"body")[0]:Le?c.documentElement:E},Ri=function(a){const c=K?K(a):a.ownerDocument;return mi.call(c||a,a,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},qt=function(a){return a=St(a,Bn," "),a=St(a,zn," "),a=St(a,Pn," "),a},Sr=function(a){var c;a.normalize();const g=K?K(a):a.ownerDocument,w=mi.call(g||a,a,d.SHOW_TEXT|d.SHOW_COMMENT|d.SHOW_CDATA_SECTION|d.SHOW_PROCESSING_INSTRUCTION,null);let E=w.nextNode();for(;E;)E.data=qt(E.data),E=w.nextNode();const S=(c=a.querySelectorAll)===null||c===void 0?void 0:c.call(a,"template");S&&Ue(S,k=>{tt(k.content)&&Sr(k.content)})},Kt=function(a){const c=de?de(a):null;return typeof c!="string"||P(c)!=="form"?!1:typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||a.attributes!==W(a)||typeof a.removeAttribute!="function"||typeof a.removeAttributeNode!="function"||typeof a.getAttributeNode!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function"||a.nodeType!==q(a)||a.childNodes!==D(a)},tt=function(a){if(!q||typeof a!="object"||a===null)return!1;try{return q(a)===ie.documentFragment}catch{return!1}},ft=function(a){if(!q||typeof a!="object"||a===null)return!1;try{return typeof q(a)=="number"}catch{return!1}};function _e(m,a,c){m.length!==0&&Ue(m,g=>{g.call(e,a,c,et)})}const Qn=function(a,c){return!!(Me&&a.hasChildNodes()&&!ft(a.firstElementChild)&&Y(Do,a.textContent)&&Y(Do,a.innerHTML)||Me&&a.namespaceURI===he&&ia[c]&&(ft(a.firstElementChild)||typeof a.textContent=="string"&&Y(oa[c],a.textContent))||a.nodeType===ie.processingInstruction||Me&&a.nodeType===ie.comment&&Y(Co,a.data))},Yt=function(a,c){if(a instanceof RegExp)return Y(a,c);if(a instanceof Function){for(var g=arguments.length,w=new Array(g>2?g-2:0),E=2;E<g;E++)w[E-2]=arguments[E];return!!a(c,...w)}return!1},Jn=function(a,c,g){if(!gt[c]&&ji(c)&&Yt(pe.tagNameCheck,c))return!1;if(vr&&!Qe[c]){const w=N(a),E=D(a);if(E&&w){const S=E.length;for(let k=S-1;k>=0;--k){const B=a===g?b(E[k],!0):E[k];w.insertBefore(B,C(a))}}}return Ae(a),!0},Oi=function(a,c,g,w){return a.length===0?c:c===g||c===w?re(c):c},Ui=function(a,c){return a===c||N(a)!==null?!1:(br&&Gt(a),!0)},Wi=function(a,c){if(_e(T.beforeSanitizeElements,a,null),Ui(a,c))return!0;if(Kt(a))return Ae(a),!0;const g=P(Ke(a));if(M=Oi(T.uponSanitizeElement,M,hr,It),_e(T.uponSanitizeElement,a,{tagName:g,allowedTags:M}),Ui(a,c))return!0;if(Qn(a,g))return Ae(a),!0;if(gt[g]||!(xe.tagCheck instanceof Function&&xe.tagCheck(g))&&!M[g]){const E=Jn(a,g,c);return E===!1&&_e(T.afterSanitizeElements,a,null),E}if(Te(a)===ie.element&&!Vn(a)||(g==="noscript"||g==="noembed"||g==="noframes")&&Y(ta,a.innerHTML))return Ae(a),!0;if(Ee&&a.nodeType===ie.text){const E=qt(a.textContent);a.textContent!==E&&(Et(e.removed,{element:a.cloneNode()}),a.textContent=E)}return _e(T.afterSanitizeElements,a,null),!1},Hi=function(a,c,g){if(bi[c]||Ni(c,a)||Ei&&(c==="id"||c==="name")&&(g in r||g in Gn))return!1;const w=L[c]||xe.attributeCheck instanceof Function&&xe.attributeCheck(c,a);return gr&&Y(Nn,c)||yi&&Y(In,c)?!0:w?ki[c]||Y(vi,St(g,fi,""))||(c==="src"||c==="xlink:href"||c==="href")&&a!=="script"&&bo(g,"data:")===0&&Di[a]||wi&&!Y(Rn,St(g,fi,""))?!0:!g:ji(a)&&Yt(pe.tagNameCheck,a)&&Yt(pe.attributeNameCheck,c,a)||c==="is"&&pe.allowCustomizedBuiltInElements&&Yt(pe.tagNameCheck,g)},es=F({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ji=function(a){return!es[At(a)]&&Y(On,a)},ts=function(a,c,g,w){if(H&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!g)switch(p.getAttributeType(a,c)){case"TrustedHTML":return R(w);case"TrustedScriptURL":return we(w)}return w},rs=function(a,c,g,w){try{return g?a.setAttributeNS(g,c,w):a.setAttribute(c,w),Kt(a)?(Ae(a),!1):!0}catch{return Be(c,a),!1}},Gi=function(a){_e(T.beforeSanitizeAttributes,a,null);const c=a.attributes;if(!c||Kt(a))return;L=Oi(T.uponSanitizeAttribute,L,_r,Rt);const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let w=c.length;const E=P(a.nodeName);for(;w--;){const S=c[w],k=S.name,B=S.namespaceURI,X=S.value,Q=P(k),Dr=X;let Z=k==="value"?Dr:Ns(Dr),qi=!1;if(g.attrName=Q,g.attrValue=Z,g.keepAttr=!0,g.forceKeepAttr=void 0,_e(T.uponSanitizeAttribute,a,g),Z=g.attrValue,Ai&&(Q==="id"||Q==="name")&&bo(Z,Si)!==0&&(Be(k,a,S),Z=Si+Z,qi=!0),Me&&Y(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Z)){Be(k,a,S);continue}if(Q==="attributename"&&vo(Z,"href")){Be(k,a,S);continue}if(!g.forceKeepAttr){if(!g.keepAttr){Be(k,a,S);continue}if(!xi&&Y(ra,Z)){Be(k,a,S);continue}if(Ee&&(Z=qt(Z)),!Hi(E,Q,Z)){Be(k,a,S);continue}Z=ts(E,Q,B,Z),Z!==Dr&&rs(a,k,B,Z)&&qi&&fo(e.removed)}}_e(T.afterSanitizeAttributes,a,null)},Vt=function(a){let c=null;const g=Ri(a);for(_e(T.beforeSanitizeShadowDOM,a,null);c=g.nextNode();)if(_e(T.uponSanitizeShadowNode,c,null),Wi(c,a),Gi(c),tt(c.content)&&Vt(c.content),Te(c)===ie.element){const w=G(c);tt(w)&&(Fr(w),Vt(w))}_e(T.afterSanitizeShadowDOM,a,null)},Fr=function(a){const c=[{node:a,shadow:null}];for(;c.length>0;){const g=c.pop();if(g.shadow){Vt(g.shadow);continue}const w=g.node,S=Te(w)===ie.element,k=D(w);if(k)for(let B=k.length-1;B>=0;--B)c.push({node:k[B],shadow:null});if(S){const B=de?de(w):null;if(typeof B=="string"&&P(B)==="template"){const X=w.content;tt(X)&&c.push({node:X,shadow:null})}}if(S){const B=G(w);tt(B)&&c.push({node:null,shadow:B},{node:B,shadow:null})}}};return e.sanitize=function(m){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=null,g=null,w=null,E=null;if(yr=!m,yr&&(m="<!-->"),typeof m!="string"&&!ft(m)&&(m=Ws(m),typeof m!="string"))throw We("dirty is not a string, aborting");if(!e.isSupported)return m;mr?(M=It,L=Rt):Ar(a),(T.uponSanitizeElement.length>0||T.uponSanitizeAttribute.length>0)&&(M=re(M)),T.uponSanitizeAttribute.length>0&&(L=re(L)),e.removed=[];const S=br&&typeof m!="string"&&ft(m);if(S){Xn(m);const X=Ke(m);if(typeof X=="string"){const Q=P(X);if(!M[Q]||gt[Q])throw jt(m),We("root node is forbidden and cannot be sanitized in-place")}if(Kt(m))throw jt(m),We("root node is clobbered and cannot be sanitized in-place");try{Fr(m)}catch(Q){throw jt(m),Q}}else if(ft(m))c=Ii("<!---->"),g=c.ownerDocument.importNode(m,!0),g.nodeType===ie.element&&g.nodeName==="BODY"||g.nodeName==="HTML"?c=g:c.appendChild(g),Fr(c);else{if(!Ze&&!Ee&&!Le&&m.indexOf("<")===-1)return H&&Ut?R(m):m;if(c=Ii(m),!c)return Ze?null:Ut?ue:""}c&&fr&&Ae(c.firstChild);const k=S?m:c;try{const X=Ri(k);for(;w=X.nextNode();)Wi(w,k),Gi(w),tt(w.content)&&Vt(w.content)}catch(X){throw S&&(jt(m),Ue(e.removed,Q=>{Q.element&&Gt(Q.element)})),X}if(S)return Ue(e.removed,X=>{X.element&&Gt(X.element)}),Ee&&Sr(m),m;if(Ze){if(Ee&&Sr(c),Ot)for(E=Tn.call(c.ownerDocument);c.firstChild;)E.appendChild(c.firstChild);else E=c;return(L.shadowroot||L.shadowrootmode)&&(E=Ln.call(i,E,!0)),E}let B=Le?c.outerHTML:c.innerHTML;return Le&&M["!doctype"]&&c.ownerDocument&&c.ownerDocument.doctype&&c.ownerDocument.doctype.name&&Y(Js,c.ownerDocument.doctype.name)&&(B="<!DOCTYPE "+c.ownerDocument.doctype.name+`>
`+B),Ee&&(B=qt(B)),H&&Ut?R(B):B},e.setConfig=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ar(m),mr=!0,It=M,Rt=L},e.clearConfig=function(){et=null,mr=!1,It=null,Rt=null,H=Ye,ue=""},e.isValidAttribute=function(m,a,c){et||Ar({});const g=P(m),w=P(a);return Hi(g,w,c)},e.addHook=function(m,a){typeof a=="function"&&ee(T,m)&&Et(T[m],a)},e.removeHook=function(m,a){if(ee(T,m)){if(a!==void 0){const c=zs(T[m],a);return c===-1?void 0:Ps(T[m],c,1)[0]}return fo(T[m])}},e.removeHooks=function(m){ee(T,m)&&(T[m]=[])},e.removeAllHooks=function(){T=$o()},e}var Mo=To();const Yr={"card.no_alerts":"No active alerts.","card.sources_unavailable_named":"{name} unavailable","card.sources_unavailable_count":"{count} sources unavailable","card.sources_unavailable_one":"A source is unavailable","card.preview":"Sample Data","card.read_details":"Read Details","card.open_source":"Open {provider} Source","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","card.dismiss":"Dismiss","card.dismissed_toast":"Dismissed: {event}","card.dismissed_toast_undo":"Undo","card.close":"Close","detail.issued":"Issued","detail.onset":"Onset","detail.expires":"Expires","detail.area":"Area","detail.distance":"Distance","detail.geometry_with_location":"{area}, with your location marked","detail.source":"Source","detail.description":"Description","detail.instructions":"Instructions","progress.start":"Start","progress.now":"Now","progress.end":"End","progress.ongoing":"Ongoing","progress.expires_in_label":"Expires in","progress.starts_in_label":"Starts in","progress.tbd":"TBD","progress.na":"N/A","progress.expired_label":"Expired","progress.compact_active":"for {time}","progress.compact_prep":"in {time}","progress.compact_ongoing":"ongoing","progress.compact_expired":"expired {time} ago","time.just_now":"just now","time.in_less_than_1m":"in <1m","time.minutes_ago":"{m}m ago","time.in_minutes":"in {m}m","time.hours_ago":"{dur} ago","time.in_hours":"in {dur}","time.days_ago":"{d}d ago","time.in_days":"in {d}d","badge.severity_extreme":"Extreme","badge.severity_severe":"Severe","badge.severity_moderate":"Moderate","badge.severity_minor":"Minor","badge.severity_unknown":"Unknown","badge.certainty_observed":"Observed","badge.certainty_likely":"Likely","badge.certainty_possible":"Possible","badge.certainty_unlikely":"Unlikely","badge.certainty_unknown":"Unknown","editor.entities":"Entities","editor.title":"Title (optional)","editor.provider":"Alert provider","editor.provider_auto":"Auto-detect","editor.provider_nws":"NWS (United States)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europe)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Germany)","editor.provider_nina":"NINA (Germany, civil protection)","editor.provider_meteoswiss":"MeteoSwiss (Switzerland)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australia)","editor.provider_inmet":"INMET (Brazil)","editor.provider_cap":"CAP Alerts (multi-region)","editor.devices":"Alert devices (optional)","editor.devices_helper":"Pulls in every active alert sensor under the selected devices automatically (CAP Alerts, NINA). Add more devices to combine locations or providers.","editor.zones":"Zones (optional)","editor.zones_helper":"Comma-separated BoM area_id codes, e.g. NSW_FL049","editor.event_codes":"Event codes (optional)","editor.event_codes_helper":"Comma-separated event codes, e.g. TOW, SVW (NWS) or 31, 95 (DWD)","editor.exclude_event_codes":"Exclude event codes (optional)","editor.exclude_event_codes_helper":"Comma-separated event codes to exclude, e.g. SCY (NWS) or 22 (DWD)","editor.sort_order":"Sort order","editor.sort_default":"Default","editor.sort_onset":"Onset time","editor.sort_severity":"Severity","editor.sort_distance":"Distance","editor.color_theme":"Color theme","editor.color_severity":"Severity-based","editor.color_nws":"NWS Official","editor.color_meteoalarm":"MeteoAlarm Awareness","editor.color_eccc":"ECCC Public Alerts","editor.provider_colors":"Use the provider's published alert colors","editor.timezone":"Timezone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (local device)","editor.min_severity":"Minimum severity","editor.severity_all":"All severities","editor.severity_minor":"Minor or higher","editor.severity_moderate":"Moderate or higher","editor.severity_severe":"Severe or higher","editor.severity_extreme":"Extreme only","editor.max_distance":"Maximum distance ({unit})","editor.max_distance_helper":"Only show incidents within this distance of your Home Assistant home location, or of the location entity set below. Applies to point-incident feeds (NSW RFS) \u2014 area warnings have no distance and are never filtered.","editor.my_location_entity":"My location","editor.my_location_entity_helper":`A device tracker, person, or zone whose coordinates replace the Home Assistant home location as the card's reference point \u2014 for the "My location" marker and as the origin of the maximum-distance filter. Use a zone for a fixed location.`,"editor.animations":"Enable animations","editor.enhance_contrast":"Enhance contrast","editor.enhance_contrast_off":"Off","editor.enhance_contrast_subtle":"Subtle","editor.enhance_contrast_strict":"Strict (WCAG AA)","editor.deduplicate":"Deduplicate alerts","editor.deduplicate_headlines":"Deduplicate headlines","editor.show_details":"Show detail panel","editor.expand_details":"Always expand details","editor.show_metadata":"Show metadata","editor.show_description":"Show description","editor.show_instructions":"Show instructions","editor.show_geometry":"Show area map","editor.geometry_style":"Area map style","editor.geometry_style_shape":"Outline only","editor.geometry_style_map":"Map tiles (online)","editor.show_my_location":"Show my location on the map","editor.show_provider":"Show provider label","editor.show_source_link":"Show source link","editor.reformat_text":"Reflow alert text (strip hard line breaks)","editor.compact":"Compact layout","editor.font_size":"Font size","editor.font_size_small":"Small","editor.font_size_default":"Default","editor.font_size_large":"Large","editor.font_size_x_large":"Extra large","editor.progress_fill":"Progress fill","editor.progress_fill_track":"Track (thin bar)","editor.progress_fill_background":"Background wash","editor.styling_section":"Progress & icon styling","editor.progress_style":"Progress bar decoration","editor.progress_style_wash_note":"Not applied while Progress fill is set to Background wash (the wash is always solid).","editor.progress_style_preparation":"Preparation","editor.progress_style_active":"Active","editor.progress_style_ongoing":"Ongoing","editor.deco_solid":"Solid","editor.deco_striped":"Striped","editor.deco_shimmer":"Shimmer","editor.deco_pulse":"Pulse","editor.icon_border_style":"Icon ring border","editor.icon_border_dashed":"Dashed","editor.icon_border_solid":"Solid","editor.hide_expired":"Hide expired alerts","editor.hide_no_alerts":"Hide card when there are no active alerts","editor.unavailable_behavior":"When a source is unavailable","editor.unavailable_message":"Show which source","editor.unavailable_compact":"Show a compact indicator","editor.unavailable_hide":"Hide indicator (not recommended)","editor.unavailable_hide_warning":"Hiding the indicator can present an all-clear while a source is blind \u2014 an unavailable sensor is not proof of safety.","editor.tap_action":"Tap action","editor.tap_action_helper":"Setting any tap action replaces the inline expand affordance on each alert row.","editor.tap_default":"Inline expand (default)","editor.tap_details":"Detail pop-up","editor.tap_more_info":"More info","editor.tap_navigate":"Navigate","editor.tap_url":"Open URL","editor.tap_toggle":"Toggle","editor.tap_perform_action":"Perform action","editor.tap_call_service":"Call service (legacy)","editor.tap_fire_dom_event":"Fire DOM event","editor.tap_none":"Nothing","editor.tap_navigation_path":"Navigation path","editor.tap_url_path":"URL","editor.tap_yaml_managed":"This action carries a payload the visual editor does not edit. Its existing YAML is preserved \u2014 edit it in the YAML editor.","editor.tap_details_expand_hint":'With "Always expand details" off, the pop-up opens with its description behind the Read Details toggle.',"editor.allow_dismiss":"Allow dismissing alerts","editor.show_dismiss_undo":"Show undo notification on dismiss","editor.dismissed_count":"Dismissed: {count} alerts.","editor.dismissed_count_singular":"Dismissed: {count} alert.","editor.restore_all":"Restore all","editor.show_preview":"Show sample data","editor.preview_hint":"Preview card layout with sample alerts","editor.preview_nudge":"No active alerts \u2014 enable to preview the card layout.","editor.entity_warning":"Selected entity does not appear to contain weather alert data.","editor.no_entities_hint":"No supported weather alert entities found. A provider integration (e.g. NWS Alerts) must be installed first.","editor.no_entities_hint_link":"Supported providers","editor.feeds":"Auto-collect from installed feeds","editor.feeds_helper":"Detected integration feeds. Check one to include every live incident it reports \u2014 no per-incident entities to list. Requires the integration to be set up in Home Assistant.","editor.source_hint":"Auto-collecting {count} live incident(s) from the feed \u2014 no entities to list manually.","editor.feeds_missing_warning":"No live data for {feeds}. This feed is enabled but nothing is providing it \u2014 is the integration set up in Home Assistant?","editor.devices_missing_warning":"No device found for {ids}. Was the integration removed?","editor.no_device_alerts_hint":"No active alert sensors found under the selected devices yet. The card will populate automatically when the integration publishes alerts.","editor.section_source":"Source","editor.section_filtering":"Filtering","editor.section_appearance":"Appearance","editor.section_detail_panel":"Detail Panel","editor.section_behavior":"Behavior","editor.section_dismissal":"Dismissal","editor.section_advanced":"Advanced","editor.detail_sections":"Sections","editor.panel_more":"+{count} more","editor.option_default":"{label} (default)","editor.reset_default":"Reset to default","editor.also_set":"Also set: {names}","editor.dismiss_trigger":"Dismiss trigger","editor.dismiss_trigger_button":"Button only","editor.dismiss_trigger_swipe":"Swipe only","editor.dismiss_trigger_both":"Button and swipe","editor.dismiss_button_style":"Button style","editor.dismiss_button_style_icon":"Icon only","editor.dismiss_button_style_labeled":"Icon and label"},aa={"card.no_alerts":"Aucune alerte active.","card.sources_unavailable_named":"{name} indisponible","card.sources_unavailable_count":"{count} sources indisponibles","card.sources_unavailable_one":"Une source est indisponible","card.preview":"Donnees d'exemple","card.read_details":"Lire les details","card.open_source":"Ouvrir la source {provider}","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","card.dismiss":"Ignorer","card.dismissed_toast":"Ignor\xE9e : {event}","card.dismissed_toast_undo":"Annuler","card.close":"Fermer","detail.issued":"Emis","detail.onset":"Debut","detail.expires":"Expire","detail.area":"Zone","detail.distance":"Distance","detail.geometry_with_location":"{area}, avec votre position indiqu\xE9e","detail.source":"Source","detail.description":"Description","detail.instructions":"Instructions","progress.start":"Debut","progress.now":"Maint.","progress.end":"Fin","progress.ongoing":"En cours","progress.expires_in_label":"Expire dans","progress.starts_in_label":"Commence dans","progress.tbd":"Ind.","progress.na":"N/D","progress.expired_label":"Expir\xE9","progress.compact_active":"pour {time}","progress.compact_prep":"dans {time}","progress.compact_ongoing":"en cours","progress.compact_expired":"expir\xE9 il y a {time}","time.just_now":"a l'instant","time.in_less_than_1m":"dans <1m","time.minutes_ago":"il y a {m}m","time.in_minutes":"dans {m}m","time.hours_ago":"il y a {dur}","time.in_hours":"dans {dur}","time.days_ago":"il y a {d}j","time.in_days":"dans {d}j","badge.severity_extreme":"Extr\xEAme","badge.severity_severe":"Grave","badge.severity_moderate":"Mod\xE9r\xE9e","badge.severity_minor":"Mineure","badge.severity_unknown":"Inconnue","badge.certainty_observed":"Observ\xE9e","badge.certainty_likely":"Probable","badge.certainty_possible":"Possible","badge.certainty_unlikely":"Improbable","badge.certainty_unknown":"Inconnue","editor.entities":"Entites","editor.title":"Titre (optionnel)","editor.provider":"Fournisseur d'alertes","editor.provider_auto":"Detection auto","editor.provider_nws":"NWS (Etats-Unis)","editor.provider_bom":"BoM (Australie)","editor.provider_meteoalarm":"MeteoAlarm (Europe)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Allemagne)","editor.provider_nina":"NINA (Allemagne, protection civile)","editor.provider_meteoswiss":"MeteoSwiss (Suisse)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australie)","editor.provider_inmet":"INMET (Br\xE9sil)","editor.provider_cap":"Alertes CAP (multi-region)","editor.devices":"Appareils d'alerte (optionnel)","editor.devices_helper":"R\xE9cup\xE8re automatiquement chaque capteur d'alerte actif sous les appareils s\xE9lectionn\xE9s (CAP Alerts, NINA). Ajoutez d'autres appareils pour combiner des lieux ou des fournisseurs.","editor.zones":"Zones (optionnel)","editor.zones_helper":"Codes area_id BoM separes par des virgules, ex. NSW_FL049","editor.event_codes":"Codes d'evenement (optionnel)","editor.event_codes_helper":"Codes d'evenement separes par des virgules, ex. TOW, SVW (NWS) ou 31, 95 (DWD)","editor.exclude_event_codes":"Exclure codes d'evenement (optionnel)","editor.exclude_event_codes_helper":"Codes d'evenement a exclure, ex. SCY (NWS) ou 22 (DWD)","editor.sort_order":"Ordre de tri","editor.sort_default":"Par defaut","editor.sort_onset":"Heure de debut","editor.sort_severity":"Gravite","editor.sort_distance":"Distance","editor.color_theme":"Theme de couleur","editor.color_severity":"Base sur la gravite","editor.color_nws":"NWS officiel","editor.color_meteoalarm":"MeteoAlarm Vigilance","editor.color_eccc":"Alertes publiques ECCC","editor.provider_colors":"Utiliser les couleurs publi\xE9es par le fournisseur","editor.timezone":"Fuseau horaire","editor.tz_server":"Serveur (Home Assistant)","editor.tz_browser":"Navigateur (appareil local)","editor.min_severity":"Gravite minimale","editor.severity_all":"Toutes les gravites","editor.severity_minor":"Mineure ou plus","editor.severity_moderate":"Moderee ou plus","editor.severity_severe":"Grave ou plus","editor.severity_extreme":"Extreme uniquement","editor.max_distance":"Distance maximale ({unit})","editor.max_distance_helper":"N'afficher que les incidents situ\xE9s \xE0 moins de cette distance du lieu de votre installation Home Assistant, ou de l'entit\xE9 de position d\xE9finie ci-dessous. S'applique aux flux d'incidents ponctuels (NSW RFS) \u2014 les alertes de zone n'ont pas de distance et ne sont jamais filtr\xE9es.","editor.my_location_entity":"Ma position","editor.my_location_entity_helper":"Un traceur d'appareil, une personne ou une zone dont les coordonn\xE9es remplacent le lieu de Home Assistant comme point de r\xE9f\xE9rence de la carte \u2014 pour le marqueur \xAB Ma position \xBB et comme origine du filtre de distance maximale. Utilisez une zone pour un emplacement fixe.","editor.animations":"Activer les animations","editor.enhance_contrast":"Am\xE9liorer le contraste","editor.enhance_contrast_off":"D\xE9sactiv\xE9","editor.enhance_contrast_subtle":"Subtil","editor.enhance_contrast_strict":"Strict (WCAG AA)","editor.deduplicate":"Dedupliquer les alertes","editor.deduplicate_headlines":"D\xE9dupliquer les titres","editor.show_details":"Afficher le panneau de details","editor.expand_details":"Toujours afficher les details","editor.show_metadata":"Afficher les metadonnees","editor.show_description":"Afficher la description","editor.show_instructions":"Afficher les instructions","editor.show_geometry":"Afficher la carte de zone","editor.geometry_style":"Style de la carte de zone","editor.geometry_style_shape":"Contour uniquement","editor.geometry_style_map":"Tuiles cartographiques (en ligne)","editor.show_my_location":"Afficher ma position sur la carte","editor.show_provider":"Afficher le fournisseur","editor.show_source_link":"Afficher le lien source","editor.reformat_text":"Reformater le texte (supprimer les retours a la ligne)","editor.compact":"Disposition compacte","editor.font_size":"Taille de police","editor.font_size_small":"Petit","editor.font_size_default":"Par d\xE9faut","editor.font_size_large":"Grand","editor.font_size_x_large":"Tr\xE8s grand","editor.progress_fill":"Remplissage de progression","editor.progress_fill_track":"Barre fine","editor.progress_fill_background":"Fond color\xE9","editor.styling_section":"Style de progression et d\u2019ic\xF4ne","editor.progress_style":"D\xE9coration de la barre de progression","editor.progress_style_wash_note":"Sans effet lorsque le remplissage de progression est r\xE9gl\xE9 sur Fond color\xE9 (le fond est toujours uni).","editor.progress_style_preparation":"Pr\xE9paration","editor.progress_style_active":"Active","editor.progress_style_ongoing":"En cours","editor.deco_solid":"Plein","editor.deco_striped":"Ray\xE9","editor.deco_shimmer":"Scintillement","editor.deco_pulse":"Pulsation","editor.icon_border_style":"Bordure de l'anneau d'ic\xF4ne","editor.icon_border_dashed":"Pointill\xE9","editor.icon_border_solid":"Plein","editor.hide_expired":"Masquer les alertes expir\xE9es","editor.hide_no_alerts":"Masquer la carte sans alertes","editor.unavailable_behavior":"Quand une source est indisponible","editor.unavailable_message":"Afficher la source concern\xE9e","editor.unavailable_compact":"Afficher un indicateur compact","editor.unavailable_hide":"Masquer l'indicateur (d\xE9conseill\xE9)","editor.unavailable_hide_warning":"Masquer l'indicateur peut pr\xE9senter une absence d'alerte alors qu'une source est aveugle \u2014 un capteur indisponible n'est pas une preuve de s\xE9curit\xE9.","editor.tap_action":"Action au clic","editor.tap_action_helper":"D\xE9finir une action au clic remplace l'affichage d\xE9taill\xE9 en ligne sur chaque ligne d'alerte.","editor.tap_default":"D\xE9velopper en ligne (par d\xE9faut)","editor.tap_details":"Fen\xEAtre de d\xE9tails","editor.tap_more_info":"Plus d'infos","editor.tap_navigate":"Naviguer","editor.tap_url":"Ouvrir une URL","editor.tap_toggle":"Basculer","editor.tap_perform_action":"Ex\xE9cuter une action","editor.tap_call_service":"Appeler un service (ancien)","editor.tap_fire_dom_event":"D\xE9clencher un \xE9v\xE9nement DOM","editor.tap_none":"Rien","editor.tap_navigation_path":"Chemin de navigation","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Cette action transporte des donn\xE9es que l'\xE9diteur visuel ne modifie pas. Son YAML existant est pr\xE9serv\xE9 \u2014 modifiez-le dans l'\xE9diteur YAML.","editor.tap_details_expand_hint":"Si \xAB Toujours d\xE9velopper les d\xE9tails \xBB est d\xE9sactiv\xE9, la fen\xEAtre s'ouvre avec sa description derri\xE8re le bouton Lire les d\xE9tails.","editor.allow_dismiss":"Permettre d'ignorer les alertes","editor.show_dismiss_undo":"Afficher une notification d'annulation","editor.dismissed_count":"Ignor\xE9es : {count} alertes.","editor.dismissed_count_singular":"Ignor\xE9e : {count} alerte.","editor.restore_all":"Tout restaurer","editor.show_preview":"Afficher les donnees exemples","editor.preview_hint":"Apercu de la disposition avec des alertes fictives","editor.preview_nudge":"Aucune alerte active \u2014 activez pour previsualiser la disposition.","editor.entity_warning":"L'entite selectionnee ne semble pas contenir de donnees d'alerte meteo.","editor.no_entities_hint":"Aucune entite d'alerte meteo compatible trouvee. Une integration (ex. NWS Alerts) doit etre installee.","editor.no_entities_hint_link":"Fournisseurs supportes","editor.feeds":"Collecte automatique des flux installes","editor.feeds_helper":"Flux d'integration detectes. Cochez-en un pour inclure chaque incident en direct qu'il signale \u2014 aucune entite par incident a lister. Necessite que l'integration soit configuree dans Home Assistant.","editor.source_hint":"Collecte automatique de {count} incident(s) en direct du flux \u2014 aucune entite a lister manuellement.","editor.feeds_missing_warning":"Aucune donnee en direct pour {feeds}. Ce flux est active mais rien ne l'alimente \u2014 l'integration est-elle configuree dans Home Assistant ?","editor.devices_missing_warning":"Aucun appareil trouv\xE9 pour {ids}. L'int\xE9gration a-t-elle \xE9t\xE9 supprim\xE9e ?","editor.no_device_alerts_hint":"Aucun capteur d'alerte actif trouv\xE9 sous les appareils s\xE9lectionn\xE9s pour le moment. La carte se remplira automatiquement lorsque l'int\xE9gration publiera des alertes.","editor.section_source":"Source","editor.section_filtering":"Filtrage","editor.section_appearance":"Apparence","editor.section_detail_panel":"Panneau de details","editor.section_behavior":"Comportement","editor.section_dismissal":"Masquage","editor.section_advanced":"Avanc\xE9","editor.detail_sections":"Sections","editor.panel_more":"+{count} de plus","editor.option_default":"{label} (par d\xE9faut)","editor.reset_default":"R\xE9tablir la valeur par d\xE9faut","editor.also_set":"\xC9galement d\xE9fini : {names}","editor.dismiss_trigger":"Declencheur","editor.dismiss_trigger_button":"Bouton uniquement","editor.dismiss_trigger_swipe":"Glissement uniquement","editor.dismiss_trigger_both":"Bouton et glissement","editor.dismiss_button_style":"Style du bouton","editor.dismiss_button_style_icon":"Icone uniquement","editor.dismiss_button_style_labeled":"Icone et texte"},la={"card.no_alerts":"Sin alertas activas.","card.sources_unavailable_named":"{name} no disponible","card.sources_unavailable_count":"{count} fuentes no disponibles","card.sources_unavailable_one":"Una fuente no est\xE1 disponible","card.preview":"Datos de ejemplo","card.read_details":"Leer detalles","card.open_source":"Abrir fuente {provider}","card.zones_count":"{count} zonas","card.zone_count_singular":"{count} zona","card.dismiss":"Descartar","card.dismissed_toast":"Descartada: {event}","card.dismissed_toast_undo":"Deshacer","card.close":"Cerrar","detail.issued":"Emitido","detail.onset":"Inicio","detail.expires":"Expira","detail.area":"Area","detail.distance":"Distancia","detail.geometry_with_location":"{area}, con tu ubicaci\xF3n marcada","detail.source":"Fuente","detail.description":"Descripcion","detail.instructions":"Instrucciones","progress.start":"Inicio","progress.now":"Ahora","progress.end":"Fin","progress.ongoing":"En curso","progress.expires_in_label":"Expira en","progress.starts_in_label":"Comienza en","progress.tbd":"Pend.","progress.na":"N/D","progress.expired_label":"Expirada","progress.compact_active":"por {time}","progress.compact_prep":"en {time}","progress.compact_ongoing":"en curso","progress.compact_expired":"expir\xF3 hace {time}","time.just_now":"ahora mismo","time.in_less_than_1m":"en <1m","time.minutes_ago":"hace {m}m","time.in_minutes":"en {m}m","time.hours_ago":"hace {dur}","time.in_hours":"en {dur}","time.days_ago":"hace {d}d","time.in_days":"en {d}d","badge.severity_extreme":"Extrema","badge.severity_severe":"Grave","badge.severity_moderate":"Moderada","badge.severity_minor":"Menor","badge.severity_unknown":"Desconocida","badge.certainty_observed":"Observada","badge.certainty_likely":"Probable","badge.certainty_possible":"Posible","badge.certainty_unlikely":"Improbable","badge.certainty_unknown":"Desconocida","editor.entities":"Entidades","editor.title":"Titulo (opcional)","editor.provider":"Proveedor de alertas","editor.provider_auto":"Deteccion auto","editor.provider_nws":"NWS (Estados Unidos)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Alemania)","editor.provider_nina":"NINA (Alemania, protecci\xF3n civil)","editor.provider_meteoswiss":"MeteoSwiss (Suiza)","editor.provider_eccc":"ECCC (Canad\xE1)","editor.provider_nsw_rfs":"NSW RFS (Australia)","editor.provider_inmet":"INMET (Brasil)","editor.provider_cap":"Alertas CAP (multi-region)","editor.devices":"Dispositivos de alerta (opcional)","editor.devices_helper":"Incorpora autom\xE1ticamente cada sensor de alerta activo bajo los dispositivos seleccionados (CAP Alerts, NINA). A\xF1ade m\xE1s dispositivos para combinar ubicaciones o proveedores.","editor.zones":"Zonas (opcional)","editor.zones_helper":"Codigos area_id de BoM separados por comas, ej. NSW_FL049","editor.event_codes":"Codigos de evento (opcional)","editor.event_codes_helper":"Codigos de evento separados por comas, ej. TOW, SVW (NWS) o 31, 95 (DWD)","editor.exclude_event_codes":"Excluir codigos de evento (opcional)","editor.exclude_event_codes_helper":"Codigos de evento a excluir, ej. SCY (NWS) o 22 (DWD)","editor.sort_order":"Orden","editor.sort_default":"Predeterminado","editor.sort_onset":"Hora de inicio","editor.sort_severity":"Gravedad","editor.sort_distance":"Distancia","editor.color_theme":"Tema de color","editor.color_severity":"Basado en gravedad","editor.color_nws":"NWS oficial","editor.color_meteoalarm":"MeteoAlarm Conciencia","editor.color_eccc":"Alertas p\xFAblicas ECCC","editor.provider_colors":"Usar los colores publicados por el proveedor","editor.timezone":"Zona horaria","editor.tz_server":"Servidor (Home Assistant)","editor.tz_browser":"Navegador (dispositivo local)","editor.min_severity":"Gravedad minima","editor.severity_all":"Todas las gravedades","editor.severity_minor":"Menor o superior","editor.severity_moderate":"Moderada o superior","editor.severity_severe":"Grave o superior","editor.severity_extreme":"Solo extrema","editor.max_distance":"Distancia m\xE1xima ({unit})","editor.max_distance_helper":"Mostrar solo los incidentes situados a menos de esta distancia de la ubicaci\xF3n de tu Home Assistant, o de la entidad de ubicaci\xF3n indicada abajo. Se aplica a los feeds de incidentes puntuales (NSW RFS): las alertas de \xE1rea no tienen distancia y nunca se filtran.","editor.my_location_entity":"Mi ubicaci\xF3n","editor.my_location_entity_helper":"Un rastreador de dispositivo, persona o zona cuyas coordenadas sustituyen la ubicaci\xF3n de Home Assistant como punto de referencia de la tarjeta: para el marcador \xABMi ubicaci\xF3n\xBB y como origen del filtro de distancia m\xE1xima. Usa una zona para una ubicaci\xF3n fija.","editor.animations":"Activar animaciones","editor.enhance_contrast":"Mejorar contraste","editor.enhance_contrast_off":"Desactivado","editor.enhance_contrast_subtle":"Sutil","editor.enhance_contrast_strict":"Estricto (WCAG AA)","editor.deduplicate":"Deduplicar alertas","editor.deduplicate_headlines":"Deduplicar titulares","editor.show_details":"Mostrar panel de detalles","editor.expand_details":"Siempre expandir detalles","editor.show_metadata":"Mostrar metadatos","editor.show_description":"Mostrar descripcion","editor.show_instructions":"Mostrar instrucciones","editor.show_geometry":"Mostrar mapa de \xE1rea","editor.geometry_style":"Estilo del mapa de \xE1rea","editor.geometry_style_shape":"Solo contorno","editor.geometry_style_map":"Mosaicos de mapa (en l\xEDnea)","editor.show_my_location":"Mostrar mi ubicaci\xF3n en el mapa","editor.show_provider":"Mostrar proveedor","editor.show_source_link":"Mostrar enlace de fuente","editor.reformat_text":"Reformatear texto (eliminar saltos de linea)","editor.compact":"Disposicion compacta","editor.font_size":"Tama\xF1o de fuente","editor.font_size_small":"Peque\xF1o","editor.font_size_default":"Predeterminado","editor.font_size_large":"Grande","editor.font_size_x_large":"Extra grande","editor.progress_fill":"Relleno de progreso","editor.progress_fill_track":"Barra fina","editor.progress_fill_background":"Fondo tenue","editor.styling_section":"Estilo de progreso e icono","editor.progress_style":"Decoraci\xF3n de la barra de progreso","editor.progress_style_wash_note":"Sin efecto cuando el relleno de progreso est\xE1 en Fondo tenue (el fondo siempre es s\xF3lido).","editor.progress_style_preparation":"Preparaci\xF3n","editor.progress_style_active":"Activa","editor.progress_style_ongoing":"En curso","editor.deco_solid":"S\xF3lido","editor.deco_striped":"Rayado","editor.deco_shimmer":"Destello","editor.deco_pulse":"Pulso","editor.icon_border_style":"Borde del anillo del icono","editor.icon_border_dashed":"Discontinuo","editor.icon_border_solid":"S\xF3lido","editor.hide_expired":"Ocultar alertas expiradas","editor.hide_no_alerts":"Ocultar tarjeta sin alertas","editor.unavailable_behavior":"Cuando una fuente no est\xE1 disponible","editor.unavailable_message":"Mostrar qu\xE9 fuente","editor.unavailable_compact":"Mostrar un indicador compacto","editor.unavailable_hide":"Ocultar indicador (no recomendado)","editor.unavailable_hide_warning":"Ocultar el indicador puede presentar una calma total mientras una fuente est\xE1 ciega: un sensor no disponible no es prueba de seguridad.","editor.tap_action":"Acci\xF3n al tocar","editor.tap_action_helper":"Definir cualquier acci\xF3n al tocar sustituye la expansi\xF3n en l\xEDnea en cada fila de alerta.","editor.tap_default":"Expandir en l\xEDnea (predeterminado)","editor.tap_details":"Ventana de detalles","editor.tap_more_info":"M\xE1s informaci\xF3n","editor.tap_navigate":"Navegar","editor.tap_url":"Abrir URL","editor.tap_toggle":"Alternar","editor.tap_perform_action":"Ejecutar acci\xF3n","editor.tap_call_service":"Llamar servicio (heredado)","editor.tap_fire_dom_event":"Disparar evento DOM","editor.tap_none":"Nada","editor.tap_navigation_path":"Ruta de navegaci\xF3n","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Esta acci\xF3n incluye datos que el editor visual no modifica. Su YAML existente se conserva: ed\xEDtelo en el editor YAML.","editor.tap_details_expand_hint":"Con \xABExpandir siempre los detalles\xBB desactivado, la ventana se abre con su descripci\xF3n detr\xE1s del bot\xF3n Leer detalles.","editor.allow_dismiss":"Permitir descartar alertas","editor.show_dismiss_undo":"Mostrar notificaci\xF3n para deshacer","editor.dismissed_count":"Descartadas: {count} alertas.","editor.dismissed_count_singular":"Descartada: {count} alerta.","editor.restore_all":"Restaurar todo","editor.show_preview":"Mostrar datos de ejemplo","editor.preview_hint":"Vista previa con alertas de ejemplo","editor.preview_nudge":"Sin alertas activas \u2014 active para previsualizar el diseno.","editor.entity_warning":"La entidad seleccionada no parece contener datos de alerta meteorologica.","editor.no_entities_hint":"No se encontraron entidades de alerta meteorologica compatibles. Se debe instalar una integracion (ej. NWS Alerts).","editor.no_entities_hint_link":"Proveedores compatibles","editor.feeds":"Recopilar feeds instalados automaticamente","editor.feeds_helper":"Feeds de integracion detectados. Marca uno para incluir cada incidente en vivo que reporta \u2014 sin entidades por incidente que listar. Requiere que la integracion este configurada en Home Assistant.","editor.source_hint":"Recopilando automaticamente {count} incidente(s) en vivo del feed \u2014 sin entidades que listar manualmente.","editor.feeds_missing_warning":"Sin datos en vivo para {feeds}. Este feed esta habilitado pero nada lo proporciona \u2014 \xBFesta la integracion configurada en Home Assistant?","editor.devices_missing_warning":"No se encontr\xF3 ning\xFAn dispositivo para {ids}. \xBFSe elimin\xF3 la integraci\xF3n?","editor.no_device_alerts_hint":"A\xFAn no se encontraron sensores de alerta activos bajo los dispositivos seleccionados. La tarjeta se rellenar\xE1 autom\xE1ticamente cuando la integraci\xF3n publique alertas.","editor.section_source":"Fuente","editor.section_filtering":"Filtrado","editor.section_appearance":"Apariencia","editor.section_detail_panel":"Panel de detalles","editor.section_behavior":"Comportamiento","editor.section_dismissal":"Descarte","editor.section_advanced":"Avanzado","editor.detail_sections":"Secciones","editor.panel_more":"+{count} m\xE1s","editor.option_default":"{label} (predeterminado)","editor.reset_default":"Restablecer el valor predeterminado","editor.also_set":"Tambi\xE9n definido: {names}","editor.dismiss_trigger":"Disparador","editor.dismiss_trigger_button":"Solo boton","editor.dismiss_trigger_swipe":"Solo deslizamiento","editor.dismiss_trigger_both":"Boton y deslizamiento","editor.dismiss_button_style":"Estilo del boton","editor.dismiss_button_style_icon":"Solo icono","editor.dismiss_button_style_labeled":"Icono y texto"},da={"card.no_alerts":"Nessuna allerta attiva.","card.sources_unavailable_named":"{name} non disponibile","card.sources_unavailable_count":"{count} fonti non disponibili","card.sources_unavailable_one":"Una fonte non \xE8 disponibile","card.preview":"Dati di esempio","card.read_details":"Leggi dettagli","card.open_source":"Apri fonte {provider}","card.zones_count":"{count} zone","card.zone_count_singular":"{count} zona","card.dismiss":"Ignora","card.dismissed_toast":"Ignorata: {event}","card.dismissed_toast_undo":"Annulla","card.close":"Chiudi","detail.issued":"Emessa","detail.onset":"Inizio","detail.expires":"Scadenza","detail.area":"Area","detail.distance":"Distanza","detail.geometry_with_location":"{area}, con la tua posizione indicata","detail.source":"Fonte","detail.description":"Descrizione","detail.instructions":"Istruzioni","progress.start":"Inizio","progress.now":"Ora","progress.end":"Fine","progress.ongoing":"In corso","progress.expires_in_label":"Scade tra","progress.starts_in_label":"Inizia tra","progress.tbd":"N.D.","progress.na":"N/D","progress.expired_label":"Scaduta","progress.compact_active":"per {time}","progress.compact_prep":"tra {time}","progress.compact_ongoing":"in corso","progress.compact_expired":"scaduta {time} fa","time.just_now":"proprio ora","time.in_less_than_1m":"in <1m","time.minutes_ago":"{m}m fa","time.in_minutes":"in {m}m","time.hours_ago":"{dur} fa","time.in_hours":"in {dur}","time.days_ago":"{d}g fa","time.in_days":"in {d}g","badge.severity_extreme":"Estrema","badge.severity_severe":"Grave","badge.severity_moderate":"Moderata","badge.severity_minor":"Lieve","badge.severity_unknown":"Sconosciuta","badge.certainty_observed":"Osservata","badge.certainty_likely":"Probabile","badge.certainty_possible":"Possibile","badge.certainty_unlikely":"Improbabile","badge.certainty_unknown":"Sconosciuta","editor.entities":"Entit\xE0","editor.title":"Titolo (opzionale)","editor.provider":"Fornitore allerte","editor.provider_auto":"Rilevamento automatico","editor.provider_nws":"NWS (Stati Uniti)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Germania)","editor.provider_nina":"NINA (Germania, protezione civile)","editor.provider_meteoswiss":"MeteoSwiss (Svizzera)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australia)","editor.provider_inmet":"INMET (Brasile)","editor.provider_cap":"Allerte CAP (multi-regione)","editor.devices":"Dispositivi di allerta (opzionale)","editor.devices_helper":"Aggiunge automaticamente ogni sensore di allerta attivo sotto i dispositivi selezionati (CAP Alerts, NINA). Aggiungi altri dispositivi per combinare localit\xE0 o fornitori.","editor.zones":"Zone (opzionale)","editor.zones_helper":"Codici area_id BoM separati da virgola, es. NSW_FL049","editor.event_codes":"Codici evento (opzionale)","editor.event_codes_helper":"Codici evento separati da virgola, es. TOW, SVW (NWS) o 31, 95 (DWD)","editor.exclude_event_codes":"Escludi codici evento (opzionale)","editor.exclude_event_codes_helper":"Codici evento da escludere, es. SCY (NWS) o 22 (DWD)","editor.sort_order":"Ordinamento","editor.sort_default":"Predefinito","editor.sort_onset":"Ora di inizio","editor.sort_severity":"Gravit\xE0","editor.sort_distance":"Distanza","editor.color_theme":"Tema colori","editor.color_severity":"Basato sulla gravit\xE0","editor.color_nws":"NWS ufficiale","editor.color_meteoalarm":"MeteoAlarm Livelli","editor.color_eccc":"Allerte pubbliche ECCC","editor.provider_colors":"Usa i colori pubblicati dal provider","editor.timezone":"Fuso orario","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (dispositivo locale)","editor.min_severity":"Gravit\xE0 minima","editor.severity_all":"Tutte le gravit\xE0","editor.severity_minor":"Lieve o superiore","editor.severity_moderate":"Moderata o superiore","editor.severity_severe":"Grave o superiore","editor.severity_extreme":"Solo estrema","editor.max_distance":"Distanza massima ({unit})","editor.max_distance_helper":"Mostra solo gli incidenti entro questa distanza dalla posizione della tua installazione Home Assistant, o dall'entit\xE0 di posizione impostata qui sotto. Si applica ai feed di incidenti puntuali (NSW RFS) \u2014 le allerte di area non hanno una distanza e non vengono mai filtrate.","editor.my_location_entity":"La mia posizione","editor.my_location_entity_helper":"Un device tracker, una persona o una zona le cui coordinate sostituiscono la posizione di Home Assistant come punto di riferimento della scheda: per il marcatore \xABLa mia posizione\xBB e come origine del filtro di distanza massima. Usa una zona per una posizione fissa.","editor.animations":"Abilita animazioni","editor.enhance_contrast":"Migliora contrasto","editor.enhance_contrast_off":"Disattivato","editor.enhance_contrast_subtle":"Sottile","editor.enhance_contrast_strict":"Rigoroso (WCAG AA)","editor.deduplicate":"Deduplica allerte","editor.deduplicate_headlines":"Deduplica titoli","editor.show_details":"Mostra pannello dettagli","editor.expand_details":"Espandi sempre i dettagli","editor.show_metadata":"Mostra metadati","editor.show_description":"Mostra descrizione","editor.show_instructions":"Mostra istruzioni","editor.show_geometry":"Mostra mappa area","editor.geometry_style":"Stile mappa area","editor.geometry_style_shape":"Solo contorno","editor.geometry_style_map":"Tile mappa (online)","editor.show_my_location":"Mostra la mia posizione sulla mappa","editor.show_provider":"Mostra fornitore","editor.show_source_link":"Mostra link alla fonte","editor.reformat_text":"Riformatta testo (rimuovi interruzioni di riga)","editor.compact":"Layout compatto","editor.font_size":"Dimensione testo","editor.font_size_small":"Piccolo","editor.font_size_default":"Predefinito","editor.font_size_large":"Grande","editor.font_size_x_large":"Molto grande","editor.progress_fill":"Riempimento avanzamento","editor.progress_fill_track":"Barra sottile","editor.progress_fill_background":"Sfondo colorato","editor.styling_section":"Stile avanzamento e icona","editor.progress_style":"Decorazione barra di avanzamento","editor.progress_style_wash_note":"Non applicata quando il riempimento avanzamento \xE8 impostato su Sfondo colorato (lo sfondo \xE8 sempre pieno).","editor.progress_style_preparation":"Preparazione","editor.progress_style_active":"Attiva","editor.progress_style_ongoing":"In corso","editor.deco_solid":"Pieno","editor.deco_striped":"Righe","editor.deco_shimmer":"Bagliore","editor.deco_pulse":"Pulsazione","editor.icon_border_style":"Bordo dell'anello dell'icona","editor.icon_border_dashed":"Tratteggiato","editor.icon_border_solid":"Pieno","editor.hide_expired":"Nascondi allerte scadute","editor.hide_no_alerts":"Nascondi scheda senza allerte","editor.unavailable_behavior":"Quando una fonte non \xE8 disponibile","editor.unavailable_message":"Mostra quale fonte","editor.unavailable_compact":"Mostra un indicatore compatto","editor.unavailable_hide":"Nascondi indicatore (sconsigliato)","editor.unavailable_hide_warning":"Nascondere l'indicatore pu\xF2 presentare un cessato allarme mentre una fonte \xE8 cieca: un sensore non disponibile non \xE8 prova di sicurezza.","editor.tap_action":"Azione al tocco","editor.tap_action_helper":"Impostare una qualsiasi azione al tocco sostituisce l'espansione in linea su ogni riga di allerta.","editor.tap_default":"Espansione in linea (predefinito)","editor.tap_details":"Finestra dei dettagli","editor.tap_more_info":"Maggiori informazioni","editor.tap_navigate":"Naviga","editor.tap_url":"Apri URL","editor.tap_toggle":"Attiva/disattiva","editor.tap_perform_action":"Esegui azione","editor.tap_call_service":"Chiama servizio (obsoleto)","editor.tap_fire_dom_event":"Genera evento DOM","editor.tap_none":"Niente","editor.tap_navigation_path":"Percorso di navigazione","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Questa azione trasporta dati che l'editor visuale non modifica. Il suo YAML esistente viene conservato: modificalo nell'editor YAML.","editor.tap_details_expand_hint":"Con \xABEspandi sempre i dettagli\xBB disattivato, la finestra si apre con la descrizione dietro il pulsante Leggi i dettagli.","editor.allow_dismiss":"Consenti di ignorare le allerte","editor.show_dismiss_undo":"Mostra notifica di annullamento","editor.dismissed_count":"Ignorate: {count} allerte.","editor.dismissed_count_singular":"Ignorata: {count} allerta.","editor.restore_all":"Ripristina tutto","editor.show_preview":"Mostra dati di esempio","editor.preview_hint":"Anteprima del layout con allerte di esempio","editor.preview_nudge":"Nessuna allerta attiva \u2014 attiva per visualizzare il layout.","editor.entity_warning":"L'entit\xE0 selezionata non sembra contenere dati di allerta meteo.","editor.no_entities_hint":"Nessuna entita di allerta meteo compatibile trovata. Un'integrazione (es. NWS Alerts) deve essere installata.","editor.no_entities_hint_link":"Provider supportati","editor.feeds":"Raccolta automatica dai feed installati","editor.feeds_helper":"Feed di integrazione rilevati. Selezionane uno per includere ogni incidente in tempo reale che segnala \u2014 nessuna entita per incidente da elencare. Richiede che l'integrazione sia configurata in Home Assistant.","editor.source_hint":"Raccolta automatica di {count} incident(i) in tempo reale dal feed \u2014 nessuna entita da elencare manualmente.","editor.feeds_missing_warning":"Nessun dato in tempo reale per {feeds}. Questo feed e abilitato ma nulla lo fornisce \u2014 l'integrazione e configurata in Home Assistant?","editor.devices_missing_warning":"Nessun dispositivo trovato per {ids}. L'integrazione \xE8 stata rimossa?","editor.no_device_alerts_hint":"Nessun sensore di allerta attivo trovato sotto i dispositivi selezionati per ora. La scheda si popoler\xE0 automaticamente quando l'integrazione pubblicher\xE0 delle allerte.","editor.section_source":"Sorgente","editor.section_filtering":"Filtraggio","editor.section_appearance":"Aspetto","editor.section_detail_panel":"Pannello dettagli","editor.section_behavior":"Comportamento","editor.section_dismissal":"Dismissione","editor.section_advanced":"Avanzate","editor.detail_sections":"Sezioni","editor.panel_more":"+{count} altri","editor.option_default":"{label} (predefinito)","editor.reset_default":"Ripristina il valore predefinito","editor.also_set":"Impostati anche: {names}","editor.dismiss_trigger":"Attivatore","editor.dismiss_trigger_button":"Solo pulsante","editor.dismiss_trigger_swipe":"Solo scorrimento","editor.dismiss_trigger_both":"Pulsante e scorrimento","editor.dismiss_button_style":"Stile pulsante","editor.dismiss_button_style_icon":"Solo icona","editor.dismiss_button_style_labeled":"Icona e testo"},ca={"card.no_alerts":"Keine aktiven Warnungen.","card.sources_unavailable_named":"{name} nicht verf\xFCgbar","card.sources_unavailable_count":"{count} Quellen nicht verf\xFCgbar","card.sources_unavailable_one":"Eine Quelle ist nicht verf\xFCgbar","card.preview":"Beispieldaten","card.read_details":"Details lesen","card.open_source":"{provider}-Quelle \xF6ffnen","card.zones_count":"{count} Zonen","card.zone_count_singular":"{count} Zone","card.dismiss":"Ausblenden","card.dismissed_toast":"Ausgeblendet: {event}","card.dismissed_toast_undo":"R\xFCckg\xE4ngig","card.close":"Schlie\xDFen","detail.issued":"Ausgegeben","detail.onset":"Beginn","detail.expires":"Ablauf","detail.area":"Gebiet","detail.distance":"Entfernung","detail.geometry_with_location":"{area}, mit Ihrem Standort markiert","detail.source":"Quelle","detail.description":"Beschreibung","detail.instructions":"Hinweise","progress.start":"Start","progress.now":"Jetzt","progress.end":"Ende","progress.ongoing":"Laufend","progress.expires_in_label":"Endet in","progress.starts_in_label":"Beginnt in","progress.tbd":"Offen","progress.na":"K. A.","progress.expired_label":"Abgelaufen","progress.compact_active":"f\xFCr {time}","progress.compact_prep":"in {time}","progress.compact_ongoing":"laufend","progress.compact_expired":"abgelaufen vor {time}","time.just_now":"gerade eben","time.in_less_than_1m":"in <1 Min","time.minutes_ago":"vor {m} Min","time.in_minutes":"in {m} Min","time.hours_ago":"vor {dur}","time.in_hours":"in {dur}","time.days_ago":"vor {d} T","time.in_days":"in {d} T","badge.severity_extreme":"Extrem","badge.severity_severe":"Schwer","badge.severity_moderate":"M\xE4\xDFig","badge.severity_minor":"Gering","badge.severity_unknown":"Unbekannt","badge.certainty_observed":"Beobachtet","badge.certainty_likely":"Wahrscheinlich","badge.certainty_possible":"M\xF6glich","badge.certainty_unlikely":"Unwahrscheinlich","badge.certainty_unknown":"Unbekannt","editor.entities":"Entit\xE4ten","editor.title":"Titel (optional)","editor.provider":"Warnanbieter","editor.provider_auto":"Automatisch erkennen","editor.provider_nws":"NWS (USA)","editor.provider_bom":"BoM (Australien)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Deutschland)","editor.provider_nina":"NINA (Deutschland, Bev\xF6lkerungsschutz)","editor.provider_meteoswiss":"MeteoSwiss (Schweiz)","editor.provider_eccc":"ECCC (Kanada)","editor.provider_nsw_rfs":"NSW RFS (Australien)","editor.provider_inmet":"INMET (Brasilien)","editor.provider_cap":"CAP-Warnungen (multi-regional)","editor.devices":"Warnger\xE4te (optional)","editor.devices_helper":"Bezieht automatisch jeden aktiven Warnsensor unter den ausgew\xE4hlten Ger\xE4ten ein (CAP Alerts, NINA). Weitere Ger\xE4te hinzuf\xFCgen, um Orte oder Anbieter zu kombinieren.","editor.zones":"Zonen (optional)","editor.zones_helper":"Kommagetrennte BoM area_id-Codes, z. B. NSW_FL049","editor.event_codes":"Ereigniscodes (optional)","editor.event_codes_helper":"Kommagetrennte Ereigniscodes, z. B. TOW, SVW (NWS) oder 31, 95 (DWD)","editor.exclude_event_codes":"Ereigniscodes ausschlie\xDFen (optional)","editor.exclude_event_codes_helper":"Ereigniscodes zum Ausschlie\xDFen, z. B. SCY (NWS) oder 22 (DWD)","editor.sort_order":"Sortierung","editor.sort_default":"Standard","editor.sort_onset":"Beginnzeit","editor.sort_severity":"Schweregrad","editor.sort_distance":"Entfernung","editor.color_theme":"Farbschema","editor.color_severity":"Nach Schweregrad","editor.color_nws":"NWS offiziell","editor.color_meteoalarm":"MeteoAlarm Warnstufen","editor.color_eccc":"ECCC \xF6ffentliche Warnungen","editor.provider_colors":"Vom Anbieter ver\xF6ffentlichte Farben verwenden","editor.timezone":"Zeitzone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (lokales Ger\xE4t)","editor.min_severity":"Mindestschweregrad","editor.severity_all":"Alle Schweregrade","editor.severity_minor":"Gering oder h\xF6her","editor.severity_moderate":"M\xE4\xDFig oder h\xF6her","editor.severity_severe":"Schwer oder h\xF6her","editor.severity_extreme":"Nur extrem","editor.max_distance":"Maximale Entfernung ({unit})","editor.max_distance_helper":"Nur Ereignisse innerhalb dieser Entfernung vom Standort Ihrer Home-Assistant-Installation oder von der unten gew\xE4hlten Standort-Entit\xE4t anzeigen. Gilt f\xFCr Einzelereignis-Feeds (NSW RFS) \u2014 Fl\xE4chenwarnungen haben keine Entfernung und werden nie gefiltert.","editor.my_location_entity":"Mein Standort","editor.my_location_entity_helper":"Ein Ger\xE4tetracker, eine Person oder eine Zone, deren Koordinaten den Home-Assistant-Standort als Bezugspunkt der Karte ersetzen \u2014 f\xFCr die Markierung \u201EMein Standort\u201C und als Ausgangspunkt des Filters f\xFCr die maximale Entfernung. F\xFCr einen festen Ort eine Zone verwenden.","editor.animations":"Animationen aktivieren","editor.enhance_contrast":"Kontrast erh\xF6hen","editor.enhance_contrast_off":"Aus","editor.enhance_contrast_subtle":"Dezent","editor.enhance_contrast_strict":"Streng (WCAG AA)","editor.deduplicate":"Warnungen deduplizieren","editor.deduplicate_headlines":"\xDCberschriften deduplizieren","editor.show_details":"Detailbereich anzeigen","editor.expand_details":"Details immer anzeigen","editor.show_metadata":"Metadaten anzeigen","editor.show_description":"Beschreibung anzeigen","editor.show_instructions":"Hinweise anzeigen","editor.show_geometry":"Gebietskarte anzeigen","editor.geometry_style":"Gebietskartenstil","editor.geometry_style_shape":"Nur Umriss","editor.geometry_style_map":"Kartenkacheln (online)","editor.show_my_location":"Meinen Standort auf der Karte anzeigen","editor.show_provider":"Anbieter anzeigen","editor.show_source_link":"Quelllink anzeigen","editor.reformat_text":"Text umformatieren (harte Zeilenumbr\xFCche entfernen)","editor.compact":"Kompaktes Layout","editor.font_size":"Schriftgr\xF6\xDFe","editor.font_size_small":"Klein","editor.font_size_default":"Standard","editor.font_size_large":"Gro\xDF","editor.font_size_x_large":"Sehr gro\xDF","editor.progress_fill":"Fortschrittsf\xFCllung","editor.progress_fill_track":"D\xFCnner Balken","editor.progress_fill_background":"Hintergrund-F\xFCllung","editor.styling_section":"Fortschritts- & Symbolstil","editor.progress_style":"Fortschrittsbalken-Dekoration","editor.progress_style_wash_note":"Ohne Wirkung, wenn die Fortschrittsf\xFCllung auf Hintergrund-F\xFCllung steht (die F\xFCllung ist immer einfarbig).","editor.progress_style_preparation":"Vorbereitung","editor.progress_style_active":"Aktiv","editor.progress_style_ongoing":"Laufend","editor.deco_solid":"Einfarbig","editor.deco_striped":"Gestreift","editor.deco_shimmer":"Schimmer","editor.deco_pulse":"Puls","editor.icon_border_style":"Symbolring-Rahmen","editor.icon_border_dashed":"Gestrichelt","editor.icon_border_solid":"Durchgezogen","editor.hide_expired":"Abgelaufene Warnungen ausblenden","editor.hide_no_alerts":"Karte ohne aktive Warnungen ausblenden","editor.unavailable_behavior":"Wenn eine Quelle nicht verf\xFCgbar ist","editor.unavailable_message":"Betroffene Quelle anzeigen","editor.unavailable_compact":"Kompakten Hinweis anzeigen","editor.unavailable_hide":"Anzeige ausblenden (nicht empfohlen)","editor.unavailable_hide_warning":"Das Ausblenden der Anzeige kann Entwarnung signalisieren, w\xE4hrend eine Quelle blind ist \u2014 ein nicht verf\xFCgbarer Sensor ist kein Beweis f\xFCr Sicherheit.","editor.tap_action":"Aktion beim Tippen","editor.tap_action_helper":"Eine beliebige Tipp-Aktion ersetzt das Aufklappen der Details in jeder Warnungszeile.","editor.tap_default":"Inline aufklappen (Standard)","editor.tap_details":"Detail-Dialog","editor.tap_more_info":"Weitere Informationen","editor.tap_navigate":"Navigieren","editor.tap_url":"URL \xF6ffnen","editor.tap_toggle":"Umschalten","editor.tap_perform_action":"Aktion ausf\xFChren","editor.tap_call_service":"Dienst aufrufen (veraltet)","editor.tap_fire_dom_event":"DOM-Ereignis ausl\xF6sen","editor.tap_none":"Nichts","editor.tap_navigation_path":"Navigationspfad","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Diese Aktion enth\xE4lt Daten, die der visuelle Editor nicht bearbeitet. Das vorhandene YAML bleibt erhalten \u2014 bearbeite es im YAML-Editor.","editor.tap_details_expand_hint":'Wenn \u201EDetails immer aufklappen" deaktiviert ist, \xF6ffnet sich der Dialog mit der Beschreibung hinter der Schaltfl\xE4che \u201EDetails lesen".',"editor.allow_dismiss":"Warnungen ausblendbar machen","editor.show_dismiss_undo":"R\xFCckg\xE4ngig-Benachrichtigung anzeigen","editor.dismissed_count":"Ausgeblendet: {count} Warnungen.","editor.dismissed_count_singular":"Ausgeblendet: {count} Warnung.","editor.restore_all":"Alle wiederherstellen","editor.show_preview":"Beispieldaten anzeigen","editor.preview_hint":"Kartenlayout mit Beispielwarnungen anzeigen","editor.preview_nudge":"Keine aktiven Warnungen \u2014 aktivieren, um das Kartenlayout zu sehen.","editor.entity_warning":"Die ausgew\xE4hlte Entit\xE4t scheint keine Wetterwarnungsdaten zu enthalten.","editor.no_entities_hint":"Keine kompatiblen Wetterwarnungs-Entitaten gefunden. Eine Integration (z.B. NWS Alerts) muss installiert sein.","editor.no_entities_hint_link":"Unterstutzte Anbieter","editor.feeds":"Automatisch aus installierten Feeds erfassen","editor.feeds_helper":"Erkannte Integrations-Feeds. Wahlen Sie einen aus, um jedes gemeldete Live-Ereignis einzuschliessen \u2014 keine Entitaten pro Ereignis aufzulisten. Erfordert, dass die Integration in Home Assistant eingerichtet ist.","editor.source_hint":"Automatische Erfassung von {count} Live-Ereignis(sen) aus dem Feed \u2014 keine Entitaten manuell aufzulisten.","editor.feeds_missing_warning":"Keine Live-Daten fur {feeds}. Dieser Feed ist aktiviert, aber nichts liefert Daten \u2014 ist die Integration in Home Assistant eingerichtet?","editor.devices_missing_warning":"Kein Ger\xE4t f\xFCr {ids} gefunden. Wurde die Integration entfernt?","editor.no_device_alerts_hint":"Noch keine aktiven Warnsensoren unter den ausgew\xE4hlten Ger\xE4ten gefunden. Die Karte f\xFCllt sich automatisch, sobald die Integration Warnungen ver\xF6ffentlicht.","editor.section_source":"Quelle","editor.section_filtering":"Filterung","editor.section_appearance":"Darstellung","editor.section_detail_panel":"Detailbereich","editor.section_behavior":"Verhalten","editor.section_dismissal":"Ausblenden","editor.section_advanced":"Erweitert","editor.detail_sections":"Abschnitte","editor.panel_more":"+{count} weitere","editor.option_default":"{label} (Standard)","editor.reset_default":"Auf Standard zur\xFCcksetzen","editor.also_set":"Ebenfalls gesetzt: {names}","editor.dismiss_trigger":"Ausl\xF6ser","editor.dismiss_trigger_button":"Nur Schaltfl\xE4che","editor.dismiss_trigger_swipe":"Nur wischen","editor.dismiss_trigger_both":"Schaltfl\xE4che und wischen","editor.dismiss_button_style":"Schaltfl\xE4chenstil","editor.dismiss_button_style_icon":"Nur Symbol","editor.dismiss_button_style_labeled":"Symbol und Text"},ua={"card.no_alerts":"Geen actieve alerts.","card.sources_unavailable_named":"{name} niet beschikbaar","card.sources_unavailable_count":"{count} bronnen niet beschikbaar","card.sources_unavailable_one":"Een bron is niet beschikbaar","card.preview":"Voorbeeld Data","card.read_details":"Meer Details","card.open_source":"Open bron van {provider}","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","card.dismiss":"Negeren","card.dismissed_toast":"Genegeerd: {event}","card.dismissed_toast_undo":"Maak ongedaan","card.close":"Sluiten","detail.issued":"Uitgegeven","detail.onset":"Begin","detail.expires":"Verloopt","detail.area":"Gebied","detail.distance":"Afstand","detail.geometry_with_location":"{area}, met je locatie gemarkeerd","detail.source":"Bron","detail.description":"Beschrijving","detail.instructions":"Instructies","progress.start":"Gestart","progress.now":"Nu","progress.end":"Einde","progress.ongoing":"Lopend","progress.expires_in_label":"Verloopt over","progress.starts_in_label":"Begint over","progress.tbd":"N.t.b.","progress.na":"N/A","progress.expired_label":"Verlopen","progress.compact_active":"Gedurende {time}","progress.compact_prep":"over {time}","progress.compact_ongoing":"lopend","progress.compact_expired":"{time} geleden verlopen","time.just_now":"zojuist","time.in_less_than_1m":"binnen 1m","time.minutes_ago":"{m}m geleden","time.in_minutes":"over {m}m","time.hours_ago":"{dur} geleden","time.in_hours":"over {dur}","time.days_ago":"{d}d geleden","time.in_days":"over {d}d","badge.severity_extreme":"Extreem","badge.severity_severe":"Ernstig","badge.severity_moderate":"Matig","badge.severity_minor":"Licht","badge.severity_unknown":"Onbekend","badge.certainty_observed":"Waargenomen","badge.certainty_likely":"Waarschijnlijk","badge.certainty_possible":"Mogelijk","badge.certainty_unlikely":"Onwaarschijnlijk","badge.certainty_unknown":"Onbekend","editor.entities":"Entiteiten","editor.title":"Titel (optioneel)","editor.provider":"Waarschuwingsbron","editor.provider_auto":"Automatisch detecteren","editor.provider_nws":"NWS (Verenigde Staten)","editor.provider_bom":"BoM (Australi\xEB)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Duitsland)","editor.provider_nina":"NINA (Duitsland, civiele bescherming)","editor.provider_meteoswiss":"MeteoSwiss (Zwitserland)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australi\xEB)","editor.provider_inmet":"INMET (Brazili\xEB)","editor.provider_cap":"CAP Alerts (meerdere regio's)","editor.devices":"Waarschuwingsapparaten (optioneel)","editor.devices_helper":"Haalt automatisch elke actieve waarschuwingssensor onder de geselecteerde apparaten binnen (CAP Alerts, NINA). Voeg meer apparaten toe om locaties of aanbieders te combineren.","editor.zones":"Zones (optioneel)","editor.zones_helper":"Comma-gescheiden BoM area_id codes, bijv. NSW_FL049","editor.event_codes":"Gebeurteniscodes (optioneel)","editor.event_codes_helper":"Comma-gescheiden gebeurteniscodes, bijv. TOW, SVW (NWS) of 31, 95 (DWD)","editor.exclude_event_codes":"Gebeurteniscodes uitsluiten (optioneel)","editor.exclude_event_codes_helper":"Comma-gescheiden gebeurteniscodes om uit te sluiten, bijv. SCY (NWS) of 22 (DWD)","editor.sort_order":"Sorteervolgorde","editor.sort_default":"Standaard","editor.sort_onset":"Begintijd","editor.sort_severity":"Ernst","editor.sort_distance":"Afstand","editor.color_theme":"Kleurthema","editor.color_severity":"Op basis van ernst","editor.color_nws":"NWS Officieel","editor.color_meteoalarm":"MeteoAlarm Bewustwording","editor.color_eccc":"ECCC Publieke Waarschuwingen","editor.provider_colors":"Door de aanbieder gepubliceerde kleuren gebruiken","editor.timezone":"Tijdzone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (lokaal apparaat)","editor.min_severity":"Minimale ernst","editor.severity_all":"Alle gradaties","editor.severity_minor":"Licht of hoger","editor.severity_moderate":"Matig of hoger","editor.severity_severe":"Ernstig of hoger","editor.severity_extreme":"Alleen extreem","editor.max_distance":"Maximale afstand ({unit})","editor.max_distance_helper":"Toon alleen incidenten binnen deze afstand van de locatie van je Home Assistant, of van de hieronder gekozen locatie-entiteit. Geldt voor feeds met losse incidenten (NSW RFS) \u2014 gebiedswaarschuwingen hebben geen afstand en worden nooit gefilterd.","editor.my_location_entity":"Mijn locatie","editor.my_location_entity_helper":'Een device tracker, persoon of zone waarvan de co\xF6rdinaten de Home Assistant-locatie vervangen als referentiepunt van de kaart \u2014 voor de markering "Mijn locatie" en als oorsprong van het maximale-afstandsfilter. Gebruik een zone voor een vaste locatie.',"editor.animations":"Animaties inschakelen","editor.enhance_contrast":"Contrast verbeteren","editor.enhance_contrast_off":"Uit","editor.enhance_contrast_subtle":"Subtiel","editor.enhance_contrast_strict":"Strikt (WCAG AA)","editor.deduplicate":"Waarschuwingen ontdubbelen","editor.deduplicate_headlines":"Kopteksten ontdubbelen","editor.show_details":"Detailpaneel tonen","editor.expand_details":"Details altijd uitklappen","editor.show_metadata":"Metadata tonen","editor.show_description":"Beschrijving tonen","editor.show_instructions":"Instructies tonen","editor.show_geometry":"Gebiedskaart tonen","editor.geometry_style":"Stijl gebiedskaart","editor.geometry_style_shape":"Alleen omlijning","editor.geometry_style_map":"Kaarttegels (online)","editor.show_my_location":"Mijn locatie op de kaart tonen","editor.show_provider":"Providerlabel tonen","editor.show_source_link":"Bronlink tonen","editor.reformat_text":"Tekst automatisch omloop geven (harde afbrekingen verwijderen)","editor.compact":"Compacte lay-out","editor.font_size":"Lettergrootte","editor.font_size_small":"Klein","editor.font_size_default":"Standaard","editor.font_size_large":"Groot","editor.font_size_x_large":"Extra groot","editor.progress_fill":"Voortgangsinvulling","editor.progress_fill_track":"Spoor (dunne balk)","editor.progress_fill_background":"Achtergrondgloed","editor.styling_section":"Stijl van voortgang & icoon","editor.progress_style":"Decoratie voortgangsbalk","editor.progress_style_wash_note":"Wordt niet toegepast als Voortgangsinvulling is ingesteld op Achtergrondgloed (de gloed is altijd effen).","editor.progress_style_preparation":"Voorbereiding","editor.progress_style_active":"Actief","editor.progress_style_ongoing":"Lopend","editor.deco_solid":"Effen","editor.deco_striped":"Gestreept","editor.deco_shimmer":"Schittering","editor.deco_pulse":"Pulseren","editor.icon_border_style":"Icoon grensrand","editor.icon_border_dashed":"Gestreept","editor.icon_border_solid":"Effen","editor.hide_expired":"Verlopen waarschuwingen verbergen","editor.hide_no_alerts":"Kaart verbergen als er geen actieve waarschuwingen zijn","editor.unavailable_behavior":"Wanneer een bron niet beschikbaar is","editor.unavailable_message":"Toon welke bron","editor.unavailable_compact":"Toon een compacte indicator","editor.unavailable_hide":"Indicator verbergen (niet aanbevolen)","editor.unavailable_hide_warning":"Het verbergen van de indicator kan een vals gevoel van veiligheid geven terwijl een bron blind is \u2014 een onbeschikbare sensor is geen bewijs van veiligheid.","editor.tap_action":"Tik-actie","editor.tap_action_helper":"Het instellen van een tik-actie vervangt de inline uitklapmogelijkheid op elke waarschuwingsregel.","editor.tap_default":"Inline uitklappen (standaard)","editor.tap_details":"Detail pop-up","editor.tap_more_info":"Meer info","editor.tap_navigate":"Navigeren","editor.tap_url":"URL openen","editor.tap_toggle":"Schakelen","editor.tap_perform_action":"Actie uitvoeren","editor.tap_call_service":"Service aanroepen (verouderd)","editor.tap_fire_dom_event":"DOM-event afvuren","editor.tap_none":"Niets","editor.tap_navigation_path":"Navigatiepad","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Deze actie bevat gegevens die de visuele editor niet bewerkt. De bestaande YAML blijft behouden \u2014 bewerk deze in de YAML-editor.","editor.tap_details_expand_hint":'Als "Details altijd uitklappen" is uitgeschakeld, opent de pop-up met de beschrijving achter de knop Meer Details.',"editor.allow_dismiss":"Toestaan van afwijzen waarschuwingen","editor.show_dismiss_undo":"Toon ongedaan maken-notificatie bij afwijzen","editor.dismissed_count":"Afgewezen: {count} waarschuwingen.","editor.dismissed_count_singular":"Afgewezen: {count} waarschuwing.","editor.restore_all":"Alles herstellen","editor.show_preview":"Voorbeelddata tonen","editor.preview_hint":"Voorbeeld van kaartlay-out met testwaarschuwingen","editor.preview_nudge":"Geen actieve waarschuwingen \u2014 inschakelen om de lay-out van de kaart te bekijken.","editor.entity_warning":"Geselecteerde entiteit lijkt geen weerwaarschuwingsgegevens te bevatten.","editor.no_entities_hint":"Geen ondersteunde weerwaarschuwingsentiteiten gevonden. Er moet eerst een provider-integratie (bijv. NWS Alerts) worden ge\xEFnstalleerd.","editor.no_entities_hint_link":"Ondersteunde providers","editor.feeds":"Automatisch verzamelen van ge\xEFnstalleerde feeds","editor.feeds_helper":"Gedetecteerde integratie-feeds. Vink er een aan om elk live incident op te nemen dat deze rapporteert \u2014 geen entiteiten per incident te vermelden. Vereist dat de integratie is ingesteld in Home Assistant.","editor.source_hint":"Automatisch verzamelen van {count} live incident(en) uit de feed \u2014 geen entiteiten om handmatig te vermelden.","editor.feeds_missing_warning":"Geen live gegevens voor {feeds}. Deze feed is ingeschakeld maar niets levert gegevens \u2014 is de integratie ingesteld in Home Assistant?","editor.devices_missing_warning":"Geen apparaat gevonden voor {ids}. Is de integratie verwijderd?","editor.no_device_alerts_hint":"Nog geen actieve waarschuwingssensoren gevonden onder de geselecteerde apparaten. De kaart wordt automatisch gevuld wanneer de integratie waarschuwingen publiceert.","editor.section_source":"Bron","editor.section_filtering":"Filteren","editor.section_appearance":"Weergave","editor.section_detail_panel":"Detailpaneel","editor.section_behavior":"Gedrag","editor.section_dismissal":"Afwijzen","editor.section_advanced":"Geavanceerd","editor.detail_sections":"Secties","editor.panel_more":"+{count} meer","editor.option_default":"{label} (standaard)","editor.reset_default":"Terugzetten naar standaard","editor.also_set":"Ook ingesteld: {names}","editor.dismiss_trigger":"Actie voor afwijzen","editor.dismiss_trigger_button":"Alleen knop","editor.dismiss_trigger_swipe":"Alleen swipen","editor.dismiss_trigger_both":"Knop en swipen","editor.dismiss_button_style":"Knopstijl","editor.dismiss_button_style_icon":"Alleen icoon","editor.dismiss_button_style_labeled":"Icoon en label"},pa={"card.no_alerts":"\u65E0\u6D3B\u8DC3\u8B66\u62A5\u3002","card.sources_unavailable_named":"{name} \u4E0D\u53EF\u7528","card.sources_unavailable_count":"{count} \u4E2A\u6765\u6E90\u4E0D\u53EF\u7528","card.sources_unavailable_one":"\u4E00\u4E2A\u6765\u6E90\u4E0D\u53EF\u7528","card.preview":"\u793A\u4F8B\u6570\u636E","card.read_details":"\u67E5\u770B\u8BE6\u60C5","card.open_source":"\u6253\u5F00 {provider} \u6765\u6E90","card.zones_count":"{count} \u4E2A\u533A\u57DF","card.zone_count_singular":"{count} \u4E2A\u533A\u57DF","card.dismiss":"\u5FFD\u7565","card.dismissed_toast":"\u5DF2\u5FFD\u7565\uFF1A{event}","card.dismissed_toast_undo":"\u64A4\u9500","card.close":"\u5173\u95ED","detail.issued":"\u53D1\u5E03\u65F6\u95F4","detail.onset":"\u5F00\u59CB\u65F6\u95F4","detail.expires":"\u8FC7\u671F\u65F6\u95F4","detail.area":"\u533A\u57DF","detail.distance":"\u8DDD\u79BB","detail.geometry_with_location":"{area}\uFF0C\u5DF2\u6807\u51FA\u60A8\u7684\u4F4D\u7F6E","detail.source":"\u6765\u6E90","detail.description":"\u63CF\u8FF0","detail.instructions":"\u8BF4\u660E","progress.start":"\u5F00\u59CB","progress.now":"\u73B0\u5728","progress.end":"\u7ED3\u675F","progress.ongoing":"\u8FDB\u884C\u4E2D","progress.expires_in_label":"\u5C06\u4E8E\u4EE5\u4E0B\u65F6\u95F4\u540E\u8FC7\u671F","progress.starts_in_label":"\u5C06\u4E8E\u4EE5\u4E0B\u65F6\u95F4\u540E\u5F00\u59CB","progress.tbd":"\u5F85\u5B9A","progress.na":"\u4E0D\u9002\u7528","progress.expired_label":"\u5DF2\u8FC7\u671F","progress.compact_active":"\u6301\u7EED {time}","progress.compact_prep":"{time} \u540E\u5F00\u59CB","progress.compact_ongoing":"\u8FDB\u884C\u4E2D","progress.compact_expired":"\u5DF2\u4E8E {time} \u524D\u8FC7\u671F","time.just_now":"\u521A\u521A","time.in_less_than_1m":"1\u5206\u949F\u5185","time.minutes_ago":"{m} \u5206\u949F\u524D","time.in_minutes":"{m} \u5206\u949F\u540E","time.hours_ago":"{dur} \u524D","time.in_hours":"{dur} \u540E","time.days_ago":"{d} \u5929\u524D","time.in_days":"{d} \u5929\u540E","badge.severity_extreme":"\u6781\u7AEF","badge.severity_severe":"\u4E25\u91CD","badge.severity_moderate":"\u4E2D\u5EA6","badge.severity_minor":"\u8F7B\u5FAE","badge.severity_unknown":"\u672A\u77E5","badge.certainty_observed":"\u5DF2\u89C2\u6D4B","badge.certainty_likely":"\u5F88\u53EF\u80FD","badge.certainty_possible":"\u53EF\u80FD","badge.certainty_unlikely":"\u4E0D\u592A\u53EF\u80FD","badge.certainty_unknown":"\u672A\u77E5","editor.entities":"\u5B9E\u4F53","editor.title":"\u6807\u9898\uFF08\u53EF\u9009\uFF09","editor.provider":"\u8B66\u62A5\u63D0\u4F9B\u65B9","editor.provider_auto":"\u81EA\u52A8\u68C0\u6D4B","editor.provider_nws":"NWS\uFF08\u7F8E\u56FD\uFF09","editor.provider_bom":"BoM\uFF08\u6FB3\u5927\u5229\u4E9A\uFF09","editor.provider_meteoalarm":"MeteoAlarm\uFF08\u6B27\u6D32\uFF09","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD\uFF08\u5FB7\u56FD\uFF09","editor.provider_nina":"NINA\uFF08\u5FB7\u56FD\u6C11\u9632\u9884\u8B66\uFF09","editor.provider_meteoswiss":"MeteoSwiss\uFF08\u745E\u58EB\uFF09","editor.provider_eccc":"ECCC\uFF08\u52A0\u62FF\u5927\uFF09","editor.provider_nsw_rfs":"NSW RFS\uFF08\u6FB3\u5927\u5229\u4E9A\uFF09","editor.provider_inmet":"INMET\uFF08\u5DF4\u897F\uFF09","editor.provider_cap":"CAP \u8B66\u62A5\uFF08\u591A\u533A\u57DF\uFF09","editor.devices":"\u8B66\u62A5\u8BBE\u5907\uFF08\u53EF\u9009\uFF09","editor.devices_helper":"\u81EA\u52A8\u62C9\u53D6\u6240\u9009\u8BBE\u5907\u4E0B\u7684\u6240\u6709\u6D3B\u8DC3\u8B66\u62A5\u4F20\u611F\u5668\uFF08CAP Alerts\u3001NINA\uFF09\u3002\u6DFB\u52A0\u66F4\u591A\u8BBE\u5907\u53EF\u5408\u5E76\u591A\u4E2A\u5730\u70B9\u6216\u63D0\u4F9B\u65B9\u3002","editor.zones":"\u533A\u57DF\uFF08\u53EF\u9009\uFF09","editor.zones_helper":"\u4EE5\u9017\u53F7\u5206\u9694\u7684 BoM area_id \u4EE3\u7801\uFF0C\u4F8B\u5982 NSW_FL049","editor.event_codes":"\u4E8B\u4EF6\u4EE3\u7801\uFF08\u53EF\u9009\uFF09","editor.event_codes_helper":"\u4EE5\u9017\u53F7\u5206\u9694\u7684\u4E8B\u4EF6\u4EE3\u7801\uFF0C\u4F8B\u5982 TOW\u3001SVW\uFF08NWS\uFF09\u6216 31\u300195\uFF08DWD\uFF09","editor.exclude_event_codes":"\u6392\u9664\u4E8B\u4EF6\u4EE3\u7801\uFF08\u53EF\u9009\uFF09","editor.exclude_event_codes_helper":"\u4EE5\u9017\u53F7\u5206\u9694\u7684\u8981\u6392\u9664\u7684\u4E8B\u4EF6\u4EE3\u7801\uFF0C\u4F8B\u5982 SCY\uFF08NWS\uFF09\u6216 22\uFF08DWD\uFF09","editor.sort_order":"\u6392\u5E8F\u65B9\u5F0F","editor.sort_default":"\u9ED8\u8BA4","editor.sort_onset":"\u5F00\u59CB\u65F6\u95F4","editor.sort_severity":"\u4E25\u91CD\u7A0B\u5EA6","editor.sort_distance":"\u8DDD\u79BB","editor.color_theme":"\u914D\u8272\u4E3B\u9898","editor.color_severity":"\u57FA\u4E8E\u4E25\u91CD\u7A0B\u5EA6","editor.color_nws":"NWS \u5B98\u65B9","editor.color_meteoalarm":"MeteoAlarm \u8BA4\u77E5\u7B49\u7EA7","editor.color_eccc":"ECCC \u516C\u5171\u8B66\u62A5","editor.provider_colors":"\u4F7F\u7528\u63D0\u4F9B\u65B9\u53D1\u5E03\u7684\u8B66\u62A5\u989C\u8272","editor.timezone":"\u65F6\u533A","editor.tz_server":"\u670D\u52A1\u5668\uFF08Home Assistant\uFF09","editor.tz_browser":"\u6D4F\u89C8\u5668\uFF08\u672C\u5730\u8BBE\u5907\uFF09","editor.min_severity":"\u6700\u4F4E\u4E25\u91CD\u7A0B\u5EA6","editor.severity_all":"\u6240\u6709\u4E25\u91CD\u7A0B\u5EA6","editor.severity_minor":"\u8F7B\u5FAE\u53CA\u4EE5\u4E0A","editor.severity_moderate":"\u4E2D\u5EA6\u53CA\u4EE5\u4E0A","editor.severity_severe":"\u4E25\u91CD\u53CA\u4EE5\u4E0A","editor.severity_extreme":"\u4EC5\u6781\u7AEF","editor.max_distance":"\u6700\u5927\u8DDD\u79BB\uFF08{unit}\uFF09","editor.max_distance_helper":"\u4EC5\u663E\u793A\u8DDD\u79BB Home Assistant \u5BB6\u5EAD\u4F4D\u7F6E\u6216\u4E0B\u65B9\u6240\u8BBE\u4F4D\u7F6E\u5B9E\u4F53\u5728\u6B64\u8303\u56F4\u5185\u7684\u4E8B\u4EF6\u3002\u9002\u7528\u4E8E\u9010\u4E2A\u4E8B\u4EF6\u7684\u8BA2\u9605\u6E90\uFF08NSW RFS\uFF09\u2014\u2014\u533A\u57DF\u6027\u8B66\u62A5\u6CA1\u6709\u8DDD\u79BB\u4FE1\u606F\uFF0C\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u8FC7\u6EE4\u3002","editor.my_location_entity":"\u6211\u7684\u4F4D\u7F6E","editor.my_location_entity_helper":"\u4E00\u4E2A\u8BBE\u5907\u8FFD\u8E2A\u5668\u3001\u4EBA\u5458\u6216\u533A\u57DF\uFF0C\u5176\u5750\u6807\u5C06\u53D6\u4EE3 Home Assistant \u5BB6\u5EAD\u4F4D\u7F6E\u4F5C\u4E3A\u5361\u7247\u7684\u53C2\u8003\u70B9\u2014\u2014\u7528\u4E8E\u201C\u6211\u7684\u4F4D\u7F6E\u201D\u6807\u8BB0\uFF0C\u5E76\u4F5C\u4E3A\u6700\u5927\u8DDD\u79BB\u8FC7\u6EE4\u7684\u539F\u70B9\u3002\u56FA\u5B9A\u4F4D\u7F6E\u8BF7\u4F7F\u7528\u533A\u57DF\u3002","editor.animations":"\u542F\u7528\u52A8\u753B","editor.enhance_contrast":"\u589E\u5F3A\u5BF9\u6BD4\u5EA6","editor.enhance_contrast_off":"\u5173\u95ED","editor.enhance_contrast_subtle":"\u67D4\u548C","editor.enhance_contrast_strict":"\u4E25\u683C\uFF08WCAG AA\uFF09","editor.deduplicate":"\u53BB\u91CD\u8B66\u62A5","editor.deduplicate_headlines":"\u53BB\u91CD\u6807\u9898","editor.show_details":"\u663E\u793A\u8BE6\u60C5\u9762\u677F","editor.expand_details":"\u59CB\u7EC8\u5C55\u5F00\u8BE6\u60C5","editor.show_metadata":"\u663E\u793A\u5143\u6570\u636E","editor.show_description":"\u663E\u793A\u63CF\u8FF0","editor.show_instructions":"\u663E\u793A\u8BF4\u660E","editor.show_geometry":"\u663E\u793A\u533A\u57DF\u5730\u56FE","editor.geometry_style":"\u533A\u57DF\u5730\u56FE\u6837\u5F0F","editor.geometry_style_shape":"\u4EC5\u8F6E\u5ED3","editor.geometry_style_map":"\u5730\u56FE\u74E6\u7247\uFF08\u5728\u7EBF\uFF09","editor.show_my_location":"\u5728\u5730\u56FE\u4E0A\u663E\u793A\u6211\u7684\u4F4D\u7F6E","editor.show_provider":"\u663E\u793A\u63D0\u4F9B\u65B9\u6807\u7B7E","editor.show_source_link":"\u663E\u793A\u6765\u6E90\u94FE\u63A5","editor.reformat_text":"\u91CD\u6392\u8B66\u62A5\u6587\u672C\uFF08\u53BB\u9664\u786C\u6362\u884C\uFF09","editor.compact":"\u7D27\u51D1\u5E03\u5C40","editor.font_size":"\u5B57\u4F53\u5927\u5C0F","editor.font_size_small":"\u5C0F","editor.font_size_default":"\u9ED8\u8BA4","editor.font_size_large":"\u5927","editor.font_size_x_large":"\u7279\u5927","editor.progress_fill":"\u8FDB\u5EA6\u586B\u5145","editor.progress_fill_track":"\u8F68\u9053\uFF08\u7EC6\u6761\uFF09","editor.progress_fill_background":"\u80CC\u666F\u8986\u76D6","editor.styling_section":"\u8FDB\u5EA6\u4E0E\u56FE\u6807\u6837\u5F0F","editor.progress_style":"\u8FDB\u5EA6\u6761\u88C5\u9970","editor.progress_style_wash_note":"\u5F53\u8FDB\u5EA6\u586B\u5145\u8BBE\u7F6E\u4E3A\u80CC\u666F\u8986\u76D6\u65F6\u4E0D\u9002\u7528\uFF08\u8986\u76D6\u59CB\u7EC8\u4E3A\u7EAF\u8272\uFF09\u3002","editor.progress_style_preparation":"\u51C6\u5907\u9636\u6BB5","editor.progress_style_active":"\u6D3B\u8DC3\u9636\u6BB5","editor.progress_style_ongoing":"\u6301\u7EED\u9636\u6BB5","editor.deco_solid":"\u7EAF\u8272","editor.deco_striped":"\u6761\u7EB9","editor.deco_shimmer":"\u95EA\u70C1","editor.deco_pulse":"\u8109\u51B2","editor.icon_border_style":"\u56FE\u6807\u73AF\u5F62\u8FB9\u6846","editor.icon_border_dashed":"\u865A\u7EBF","editor.icon_border_solid":"\u5B9E\u7EBF","editor.hide_expired":"\u9690\u85CF\u5DF2\u8FC7\u671F\u8B66\u62A5","editor.hide_no_alerts":"\u65E0\u6D3B\u8DC3\u8B66\u62A5\u65F6\u9690\u85CF\u5361\u7247","editor.unavailable_behavior":"\u5F53\u6765\u6E90\u4E0D\u53EF\u7528\u65F6","editor.unavailable_message":"\u663E\u793A\u54EA\u4E2A\u6765\u6E90","editor.unavailable_compact":"\u663E\u793A\u7D27\u51D1\u6307\u793A\u5668","editor.unavailable_hide":"\u9690\u85CF\u6307\u793A\u5668\uFF08\u4E0D\u63A8\u8350\uFF09","editor.unavailable_hide_warning":"\u9690\u85CF\u6307\u793A\u5668\u53EF\u80FD\u4F1A\u5728\u6765\u6E90\u5931\u6548\u65F6\u5448\u73B0\u4E00\u5207\u6B63\u5E38\u7684\u5047\u8C61\u2014\u2014\u4E0D\u53EF\u7528\u7684\u4F20\u611F\u5668\u5E76\u4E0D\u80FD\u8BC1\u660E\u5B89\u5168\u3002","editor.tap_action":"\u70B9\u51FB\u64CD\u4F5C","editor.tap_action_helper":"\u8BBE\u7F6E\u4EFB\u610F\u70B9\u51FB\u64CD\u4F5C\u540E\uFF0C\u6BCF\u6761\u9884\u8B66\u884C\u7684\u5185\u5D4C\u5C55\u5F00\u529F\u80FD\u5C06\u88AB\u66FF\u4EE3\u3002","editor.tap_default":"\u5185\u5D4C\u5C55\u5F00\uFF08\u9ED8\u8BA4\uFF09","editor.tap_details":"\u8BE6\u60C5\u5F39\u7A97","editor.tap_more_info":"\u66F4\u591A\u4FE1\u606F","editor.tap_navigate":"\u5BFC\u822A","editor.tap_url":"\u6253\u5F00\u7F51\u5740","editor.tap_toggle":"\u5207\u6362","editor.tap_perform_action":"\u6267\u884C\u64CD\u4F5C","editor.tap_call_service":"\u8C03\u7528\u670D\u52A1\uFF08\u65E7\u7248\uFF09","editor.tap_fire_dom_event":"\u89E6\u53D1 DOM \u4E8B\u4EF6","editor.tap_none":"\u65E0","editor.tap_navigation_path":"\u5BFC\u822A\u8DEF\u5F84","editor.tap_url_path":"\u7F51\u5740","editor.tap_yaml_managed":"\u6B64\u64CD\u4F5C\u5305\u542B\u53EF\u89C6\u5316\u7F16\u8F91\u5668\u65E0\u6CD5\u7F16\u8F91\u7684\u6570\u636E\u3002\u5176\u73B0\u6709 YAML \u4F1A\u88AB\u4FDD\u7559\u2014\u2014\u8BF7\u5728 YAML \u7F16\u8F91\u5668\u4E2D\u4FEE\u6539\u3002","editor.tap_details_expand_hint":"\u5F53\u201C\u59CB\u7EC8\u5C55\u5F00\u8BE6\u60C5\u201D\u5173\u95ED\u65F6\uFF0C\u5F39\u7A97\u6253\u5F00\u540E\u63CF\u8FF0\u5185\u5BB9\u4ECD\u4F4D\u4E8E\u201C\u9605\u8BFB\u8BE6\u60C5\u201D\u6309\u94AE\u4E4B\u540E\u3002","editor.allow_dismiss":"\u5141\u8BB8\u5FFD\u7565\u8B66\u62A5","editor.show_dismiss_undo":"\u5FFD\u7565\u65F6\u663E\u793A\u64A4\u9500\u901A\u77E5","editor.dismissed_count":"\u5DF2\u5FFD\u7565\uFF1A{count} \u6761\u8B66\u62A5\u3002","editor.dismissed_count_singular":"\u5DF2\u5FFD\u7565\uFF1A{count} \u6761\u8B66\u62A5\u3002","editor.restore_all":"\u5168\u90E8\u6062\u590D","editor.show_preview":"\u663E\u793A\u793A\u4F8B\u6570\u636E","editor.preview_hint":"\u4F7F\u7528\u793A\u4F8B\u8B66\u62A5\u9884\u89C8\u5361\u7247\u5E03\u5C40","editor.preview_nudge":"\u65E0\u6D3B\u8DC3\u8B66\u62A5\u2014\u2014\u542F\u7528\u4EE5\u9884\u89C8\u5361\u7247\u5E03\u5C40\u3002","editor.entity_warning":"\u6240\u9009\u5B9E\u4F53\u4F3C\u4E4E\u4E0D\u5305\u542B\u5929\u6C14\u8B66\u62A5\u6570\u636E\u3002","editor.no_entities_hint":"\u672A\u627E\u5230\u652F\u6301\u7684\u5929\u6C14\u8B66\u62A5\u5B9E\u4F53\u3002\u5FC5\u987B\u5148\u5B89\u88C5\u63D0\u4F9B\u65B9\u96C6\u6210\uFF08\u4F8B\u5982 NWS Alerts\uFF09\u3002","editor.no_entities_hint_link":"\u652F\u6301\u7684\u63D0\u4F9B\u65B9","editor.feeds":"\u4ECE\u5DF2\u5B89\u88C5\u7684\u8BA2\u9605\u6E90\u81EA\u52A8\u6536\u96C6","editor.feeds_helper":"\u68C0\u6D4B\u5230\u7684\u96C6\u6210\u8BA2\u9605\u6E90\u3002\u52FE\u9009\u4E00\u9879\u5373\u53EF\u5305\u542B\u5176\u62A5\u544A\u7684\u6240\u6709\u5B9E\u65F6\u4E8B\u4EF6\u2014\u2014\u65E0\u9700\u9010\u4E2A\u5217\u51FA\u5B9E\u4F53\u3002\u9700\u8981\u5148\u5728 Home Assistant \u4E2D\u914D\u7F6E\u8BE5\u96C6\u6210\u3002","editor.source_hint":"\u6B63\u4ECE\u8BA2\u9605\u6E90\u81EA\u52A8\u6536\u96C6 {count} \u4E2A\u5B9E\u65F6\u4E8B\u4EF6\u2014\u2014\u65E0\u9700\u624B\u52A8\u5217\u51FA\u5B9E\u4F53\u3002","editor.feeds_missing_warning":"{feeds} \u65E0\u5B9E\u65F6\u6570\u636E\u3002\u8BE5\u8BA2\u9605\u6E90\u5DF2\u542F\u7528\u4F46\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\u63D0\u4F9B\u2014\u2014\u662F\u5426\u5728 Home Assistant \u4E2D\u914D\u7F6E\u4E86\u8BE5\u96C6\u6210\uFF1F","editor.devices_missing_warning":"\u672A\u627E\u5230 {ids} \u5BF9\u5E94\u7684\u8BBE\u5907\u3002\u8BE5\u96C6\u6210\u662F\u5426\u5DF2\u88AB\u79FB\u9664\uFF1F","editor.no_device_alerts_hint":"\u6240\u9009\u8BBE\u5907\u4E0B\u5C1A\u672A\u627E\u5230\u6D3B\u8DC3\u8B66\u62A5\u4F20\u611F\u5668\u3002\u5F53\u96C6\u6210\u53D1\u5E03\u8B66\u62A5\u65F6\uFF0C\u5361\u7247\u5C06\u81EA\u52A8\u586B\u5145\u3002","editor.section_source":"\u6765\u6E90","editor.section_filtering":"\u8FC7\u6EE4","editor.section_appearance":"\u5916\u89C2","editor.section_detail_panel":"\u8BE6\u60C5\u9762\u677F","editor.section_behavior":"\u884C\u4E3A","editor.section_dismissal":"\u5FFD\u7565","editor.section_advanced":"\u9AD8\u7EA7","editor.detail_sections":"\u5185\u5BB9\u677F\u5757","editor.panel_more":"\u8FD8\u6709 {count} \u9879","editor.option_default":"{label}\uFF08\u9ED8\u8BA4\uFF09","editor.reset_default":"\u6062\u590D\u9ED8\u8BA4","editor.also_set":"\u53E6\u5DF2\u8BBE\u7F6E\uFF1A{names}","editor.dismiss_trigger":"\u5FFD\u7565\u89E6\u53D1\u65B9\u5F0F","editor.dismiss_trigger_button":"\u4EC5\u6309\u94AE","editor.dismiss_trigger_swipe":"\u4EC5\u6ED1\u52A8","editor.dismiss_trigger_both":"\u6309\u94AE\u548C\u6ED1\u52A8","editor.dismiss_button_style":"\u6309\u94AE\u6837\u5F0F","editor.dismiss_button_style_icon":"\u4EC5\u56FE\u6807","editor.dismiss_button_style_labeled":"\u56FE\u6807\u548C\u6807\u7B7E"},ha={"card.no_alerts":"Nenhum alerta ativo.","card.sources_unavailable_named":"{name} indispon\xEDvel","card.sources_unavailable_count":"{count} fontes indispon\xEDveis","card.sources_unavailable_one":"Uma fonte est\xE1 indispon\xEDvel","card.preview":"Dados de exemplo","card.read_details":"Ver detalhes","card.open_source":"Abrir fonte {provider}","card.zones_count":"{count} zonas","card.zone_count_singular":"{count} zona","card.dismiss":"Dispensar","card.dismissed_toast":"Dispensado: {event}","card.dismissed_toast_undo":"Desfazer","card.close":"Fechar","detail.issued":"Emitido","detail.onset":"In\xEDcio","detail.expires":"Expira","detail.area":"\xC1rea","detail.distance":"Dist\xE2ncia","detail.geometry_with_location":"{area}, com sua localiza\xE7\xE3o marcada","detail.source":"Fonte","detail.description":"Descri\xE7\xE3o","detail.instructions":"Instru\xE7\xF5es","progress.start":"In\xEDcio","progress.now":"Agora","progress.end":"Fim","progress.ongoing":"Em andamento","progress.expires_in_label":"Expira em","progress.starts_in_label":"Come\xE7a em","progress.tbd":"A definir","progress.na":"N/D","progress.expired_label":"Expirado","progress.compact_active":"por {time}","progress.compact_prep":"em {time}","progress.compact_ongoing":"em andamento","progress.compact_expired":"expirou h\xE1 {time}","time.just_now":"agora mesmo","time.in_less_than_1m":"em <1 min","time.minutes_ago":"h\xE1 {m} min","time.in_minutes":"em {m} min","time.hours_ago":"h\xE1 {dur}","time.in_hours":"em {dur}","time.days_ago":"h\xE1 {d} d","time.in_days":"em {d} d","badge.severity_extreme":"Extremo","badge.severity_severe":"Severo","badge.severity_moderate":"Moderado","badge.severity_minor":"Menor","badge.severity_unknown":"Desconhecido","badge.certainty_observed":"Observado","badge.certainty_likely":"Prov\xE1vel","badge.certainty_possible":"Poss\xEDvel","badge.certainty_unlikely":"Improv\xE1vel","badge.certainty_unknown":"Desconhecido","editor.entities":"Entidades","editor.title":"T\xEDtulo (opcional)","editor.provider":"Provedor de alertas","editor.provider_auto":"Detectar automaticamente","editor.provider_nws":"NWS (Estados Unidos)","editor.provider_bom":"BoM (Austr\xE1lia)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Alemanha)","editor.provider_nina":"NINA (Alemanha, prote\xE7\xE3o civil)","editor.provider_meteoswiss":"MeteoSwiss (Su\xED\xE7a)","editor.provider_eccc":"ECCC (Canad\xE1)","editor.provider_nsw_rfs":"NSW RFS (Austr\xE1lia)","editor.provider_inmet":"INMET (Brasil)","editor.provider_cap":"Alertas CAP (multi-regi\xE3o)","editor.devices":"Dispositivos de alerta (opcional)","editor.devices_helper":"Inclui automaticamente todos os sensores de alerta ativos nos dispositivos selecionados (CAP Alerts, NINA). Adicione mais dispositivos para combinar locais ou provedores.","editor.zones":"Zonas (opcional)","editor.zones_helper":"C\xF3digos area_id do BoM separados por v\xEDrgula, por exemplo NSW_FL049","editor.event_codes":"C\xF3digos de evento (opcional)","editor.event_codes_helper":"C\xF3digos de evento separados por v\xEDrgula, por exemplo TOW, SVW (NWS) ou 31, 95 (DWD)","editor.exclude_event_codes":"Excluir c\xF3digos de evento (opcional)","editor.exclude_event_codes_helper":"C\xF3digos de evento a excluir, separados por v\xEDrgula, por exemplo SCY (NWS) ou 22 (DWD)","editor.sort_order":"Ordem","editor.sort_default":"Padr\xE3o","editor.sort_onset":"Hor\xE1rio de in\xEDcio","editor.sort_severity":"Severidade","editor.sort_distance":"Dist\xE2ncia","editor.color_theme":"Tema de cores","editor.color_severity":"Baseado na severidade","editor.color_nws":"Oficial do NWS","editor.color_meteoalarm":"N\xEDveis do MeteoAlarm","editor.color_eccc":"Alertas p\xFAblicos do ECCC","editor.provider_colors":"Usar as cores de alerta publicadas pelo provedor","editor.timezone":"Fuso hor\xE1rio","editor.tz_server":"Servidor (Home Assistant)","editor.tz_browser":"Navegador (dispositivo local)","editor.min_severity":"Severidade m\xEDnima","editor.severity_all":"Todas as severidades","editor.severity_minor":"Menor ou superior","editor.severity_moderate":"Moderado ou superior","editor.severity_severe":"Severo ou superior","editor.severity_extreme":"Somente extremo","editor.max_distance":"Dist\xE2ncia m\xE1xima ({unit})","editor.max_distance_helper":"Mostra somente incidentes dentro desta dist\xE2ncia da localiza\xE7\xE3o da sua casa no Home Assistant ou da entidade de localiza\xE7\xE3o definida abaixo. Aplica-se a feeds de incidentes pontuais (NSW RFS, INMET), alertas de \xE1rea n\xE3o t\xEAm dist\xE2ncia e nunca s\xE3o filtrados.","editor.my_location_entity":"Minha localiza\xE7\xE3o","editor.my_location_entity_helper":'Um rastreador de dispositivo, pessoa ou zona cujas coordenadas substituem a localiza\xE7\xE3o da casa no Home Assistant como ponto de refer\xEAncia do card, para o marcador "Minha localiza\xE7\xE3o" e como origem do filtro de dist\xE2ncia m\xE1xima. Use uma zona para uma localiza\xE7\xE3o fixa.',"editor.animations":"Ativar anima\xE7\xF5es","editor.enhance_contrast":"Aumentar contraste","editor.enhance_contrast_off":"Desativado","editor.enhance_contrast_subtle":"Sutil","editor.enhance_contrast_strict":"Rigoroso (WCAG AA)","editor.deduplicate":"Remover alertas duplicados","editor.deduplicate_headlines":"Remover t\xEDtulos duplicados","editor.show_details":"Mostrar painel de detalhes","editor.expand_details":"Sempre expandir detalhes","editor.show_metadata":"Mostrar metadados","editor.show_description":"Mostrar descri\xE7\xE3o","editor.show_instructions":"Mostrar instru\xE7\xF5es","editor.show_geometry":"Mostrar mapa da \xE1rea","editor.geometry_style":"Estilo do mapa da \xE1rea","editor.geometry_style_shape":"Somente contorno","editor.geometry_style_map":"Mapa com tiles (online)","editor.show_my_location":"Mostrar minha localiza\xE7\xE3o no mapa","editor.show_provider":"Mostrar r\xF3tulo do provedor","editor.show_source_link":"Mostrar link da fonte","editor.reformat_text":"Reformatar texto do alerta (remover quebras fixas)","editor.compact":"Layout compacto","editor.font_size":"Tamanho da fonte","editor.font_size_small":"Pequeno","editor.font_size_default":"Padr\xE3o","editor.font_size_large":"Grande","editor.font_size_x_large":"Extra grande","editor.progress_fill":"Preenchimento do progresso","editor.progress_fill_track":"Trilha (barra fina)","editor.progress_fill_background":"Fundo preenchido","editor.styling_section":"Estilo do progresso e do \xEDcone","editor.progress_style":"Decora\xE7\xE3o da barra de progresso","editor.progress_style_wash_note":"N\xE3o se aplica quando o preenchimento do progresso est\xE1 em Fundo preenchido (o fundo \xE9 sempre s\xF3lido).","editor.progress_style_preparation":"Prepara\xE7\xE3o","editor.progress_style_active":"Ativo","editor.progress_style_ongoing":"Em andamento","editor.deco_solid":"S\xF3lido","editor.deco_striped":"Listrado","editor.deco_shimmer":"Brilho","editor.deco_pulse":"Pulso","editor.icon_border_style":"Borda do anel do \xEDcone","editor.icon_border_dashed":"Tracejada","editor.icon_border_solid":"S\xF3lida","editor.hide_expired":"Ocultar alertas expirados","editor.hide_no_alerts":"Ocultar card quando n\xE3o houver alertas ativos","editor.unavailable_behavior":"Quando uma fonte est\xE1 indispon\xEDvel","editor.unavailable_message":"Mostrar qual fonte","editor.unavailable_compact":"Mostrar indicador compacto","editor.unavailable_hide":"Ocultar indicador (n\xE3o recomendado)","editor.unavailable_hide_warning":"Ocultar o indicador pode mostrar tudo limpo enquanto uma fonte est\xE1 sem dados, um sensor indispon\xEDvel n\xE3o prova seguran\xE7a.","editor.tap_action":"A\xE7\xE3o ao tocar","editor.tap_action_helper":"Definir qualquer a\xE7\xE3o ao tocar substitui o controle de expans\xE3o em cada linha de alerta.","editor.tap_default":"Expandir em linha (padr\xE3o)","editor.tap_details":"Pop-up de detalhes","editor.tap_more_info":"Mais informa\xE7\xF5es","editor.tap_navigate":"Navegar","editor.tap_url":"Abrir URL","editor.tap_toggle":"Alternar","editor.tap_perform_action":"Executar a\xE7\xE3o","editor.tap_call_service":"Chamar servi\xE7o (legado)","editor.tap_fire_dom_event":"Disparar evento DOM","editor.tap_none":"Nada","editor.tap_navigation_path":"Caminho de navega\xE7\xE3o","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Esta a\xE7\xE3o tem um payload que o editor visual n\xE3o edita. O YAML existente \xE9 preservado, edite-o no editor YAML.","editor.tap_details_expand_hint":'Com "Sempre expandir detalhes" desativado, o pop-up abre com a descri\xE7\xE3o atr\xE1s do bot\xE3o Ver detalhes.',"editor.allow_dismiss":"Permitir dispensar alertas","editor.show_dismiss_undo":"Mostrar notifica\xE7\xE3o de desfazer ao dispensar","editor.dismissed_count":"Dispensados: {count} alertas.","editor.dismissed_count_singular":"Dispensado: {count} alerta.","editor.restore_all":"Restaurar todos","editor.show_preview":"Mostrar dados de exemplo","editor.preview_hint":"Pr\xE9-visualize o layout do card com alertas de exemplo","editor.preview_nudge":"Nenhum alerta ativo, ative para pr\xE9-visualizar o layout do card.","editor.entity_warning":"A entidade selecionada n\xE3o parece conter dados de alerta meteorol\xF3gico.","editor.no_entities_hint":"Nenhuma entidade de alerta meteorol\xF3gico compat\xEDvel encontrada. Uma integra\xE7\xE3o provedora (por exemplo, NWS Alerts) precisa ser instalada primeiro.","editor.no_entities_hint_link":"Provedores compat\xEDveis","editor.feeds":"Coletar automaticamente de feeds instalados","editor.feeds_helper":"Feeds de integra\xE7\xE3o detectados. Marque um para incluir todos os incidentes ativos que ele relata, sem listar entidades por incidente. Requer que a integra\xE7\xE3o esteja configurada no Home Assistant.","editor.source_hint":"Coletando automaticamente {count} incidente(s) ativo(s) do feed, sem listar entidades manualmente.","editor.feeds_missing_warning":"Sem dados ativos para {feeds}. Este feed est\xE1 ativado, mas nada o est\xE1 fornecendo, a integra\xE7\xE3o est\xE1 configurada no Home Assistant?","editor.devices_missing_warning":"Nenhum dispositivo encontrado para {ids}. A integra\xE7\xE3o foi removida?","editor.no_device_alerts_hint":"Nenhum sensor de alerta ativo encontrado nos dispositivos selecionados ainda. O card ser\xE1 preenchido automaticamente quando a integra\xE7\xE3o publicar alertas.","editor.section_source":"Fonte","editor.section_filtering":"Filtros","editor.section_appearance":"Apar\xEAncia","editor.section_detail_panel":"Painel de detalhes","editor.section_behavior":"Comportamento","editor.section_dismissal":"Dispensar","editor.section_advanced":"Avan\xE7ado","editor.detail_sections":"Se\xE7\xF5es","editor.panel_more":"+{count} mais","editor.option_default":"{label} (padr\xE3o)","editor.reset_default":"Restaurar padr\xE3o","editor.also_set":"Tamb\xE9m definido: {names}","editor.dismiss_trigger":"Gatilho para dispensar","editor.dismiss_trigger_button":"Somente bot\xE3o","editor.dismiss_trigger_swipe":"Somente deslizar","editor.dismiss_trigger_both":"Bot\xE3o e deslizar","editor.dismiss_button_style":"Estilo do bot\xE3o","editor.dismiss_button_style_icon":"Somente \xEDcone","editor.dismiss_button_style_labeled":"\xCDcone e texto"},Dt={en:Yr,fr:aa,es:la,it:da,de:ca,nl:ua,"zh-Hans":pa,"pt-BR":ha};function _a(t){var e,r,i,o;const n=t.toLowerCase(),s=(e=n.split("-")[0])!=null?e:n,l=(i=(r=Dt[t])!=null?r:Dt[n])!=null?i:Dt[s];if(l)return l;const d=Object.keys(Dt).find(u=>u.toLowerCase().split("-")[0]===s);return(o=d?Dt[d]:void 0)!=null?o:Yr}function h(t,e,r){var i,o;let n=(o=(i=_a(e)[t])!=null?i:Yr[t])!=null?o:t;if(r)for(const[s,l]of Object.entries(r))n=n.split(`{${s}}`).join(String(l));return n}const ga={"tsunami warning":{hex:"#FD6347",rgb:"253, 99, 71",crLight:2.978,crDark:5.714},"tornado warning":{hex:"#FF0000",rgb:"255, 0, 0",crLight:3.998,crDark:4.255},"extreme wind warning":{hex:"#FF8C00",rgb:"255, 140, 0",crLight:2.332,crDark:7.295},"severe thunderstorm warning":{hex:"#FFA500",rgb:"255, 165, 0",crLight:1.975,crDark:8.616},"flash flood warning":{hex:"#8B0000",rgb:"139, 0, 0",crLight:10.011,crDark:1.7},"flash flood statement":{hex:"#8B0000",rgb:"139, 0, 0",crLight:10.011,crDark:1.7},"severe weather statement":{hex:"#00FFFF",rgb:"0, 255, 255",crLight:1.254,crDark:13.57},"shelter in place warning":{hex:"#FA8072",rgb:"250, 128, 114",crLight:2.501,crDark:6.802},"evacuation immediate":{hex:"#7FFF00",rgb:"127, 255, 0",crLight:1.296,crDark:13.131},"civil danger warning":{hex:"#FFB6C1",rgb:"255, 182, 193",crLight:1.652,crDark:10.301},"nuclear power plant warning":{hex:"#4B0082",rgb:"75, 0, 130",crLight:12.951,crDark:1.314},"radiological hazard warning":{hex:"#4B0082",rgb:"75, 0, 130",crLight:12.951,crDark:1.314},"hazardous materials warning":{hex:"#4B0082",rgb:"75, 0, 130",crLight:12.951,crDark:1.314},"fire warning":{hex:"#A0522D",rgb:"160, 82, 45",crLight:5.616,crDark:3.03},"civil emergency message":{hex:"#FFB6C1",rgb:"255, 182, 193",crLight:1.652,crDark:10.301},"law enforcement warning":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},"storm surge warning":{hex:"#B524F7",rgb:"181, 36, 247",crLight:4.605,crDark:3.695},"hurricane force wind warning":{hex:"#CD5C5C",rgb:"205, 92, 92",crLight:3.976,crDark:4.279},"hurricane warning":{hex:"#DC143C",rgb:"220, 20, 60",crLight:4.99,crDark:3.41},"typhoon warning":{hex:"#DC143C",rgb:"220, 20, 60",crLight:4.99,crDark:3.41},"special marine warning":{hex:"#FFA500",rgb:"255, 165, 0",crLight:1.975,crDark:8.616},"blizzard warning":{hex:"#FF4500",rgb:"255, 69, 0",crLight:3.441,crDark:4.945},"snow squall warning":{hex:"#C71585",rgb:"199, 21, 133",crLight:5.42,crDark:3.139},"ice storm warning":{hex:"#8B008B",rgb:"139, 0, 139",crLight:8.5,crDark:2.002},"heavy freezing spray warning":{hex:"#00BFFF",rgb:"0, 191, 255",crLight:2.122,crDark:8.018},"winter storm warning":{hex:"#FF69B4",rgb:"255, 105, 180",crLight:2.648,crDark:6.426},"lake effect snow warning":{hex:"#008B8B",rgb:"0, 139, 139",crLight:4.145,crDark:4.104},"dust storm warning":{hex:"#FFE4C4",rgb:"255, 228, 196",crLight:1.225,crDark:13.893},"blowing dust warning":{hex:"#FFE4C4",rgb:"255, 228, 196",crLight:1.225,crDark:13.893},"high wind warning":{hex:"#DAA520",rgb:"218, 165, 32",crLight:2.238,crDark:7.603},"tropical storm warning":{hex:"#B22222",rgb:"178, 34, 34",crLight:6.677,crDark:2.548},"storm warning":{hex:"#9400D3",rgb:"148, 0, 211",crLight:6.563,crDark:2.593},"tsunami advisory":{hex:"#D2691E",rgb:"210, 105, 30",crLight:3.633,crDark:4.683},"tsunami watch":{hex:"#FF00FF",rgb:"255, 0, 255",crLight:3.136,crDark:5.425},"avalanche warning":{hex:"#1E90FF",rgb:"30, 144, 255",crLight:3.236,crDark:5.257},"earthquake warning":{hex:"#8B4513",rgb:"139, 69, 19",crLight:7.098,crDark:2.397},"volcano warning":{hex:"#2F4F4F",rgb:"47, 79, 79",crLight:8.928,crDark:1.906},"ashfall warning":{hex:"#A9A9A9",rgb:"169, 169, 169",crLight:2.35,crDark:7.239},"flood warning":{hex:"#00FF00",rgb:"0, 255, 0",crLight:1.372,crDark:12.4},"coastal flood warning":{hex:"#228B22",rgb:"34, 139, 34",crLight:4.389,crDark:3.876},"lakeshore flood warning":{hex:"#228B22",rgb:"34, 139, 34",crLight:4.389,crDark:3.876},"ashfall advisory":{hex:"#696969",rgb:"105, 105, 105",crLight:5.49,crDark:3.099},"high surf warning":{hex:"#228B22",rgb:"34, 139, 34",crLight:4.389,crDark:3.876},"extreme heat warning":{hex:"#C71585",rgb:"199, 21, 133",crLight:5.42,crDark:3.139},"tornado watch":{hex:"#FFFF00",rgb:"255, 255, 0",crLight:1.074,crDark:15.845},"severe thunderstorm watch":{hex:"#DB7093",rgb:"219, 112, 147",crLight:3.111,crDark:5.47},"flash flood watch":{hex:"#2E8B57",rgb:"46, 139, 87",crLight:4.245,crDark:4.008},"gale warning":{hex:"#DDA0DD",rgb:"221, 160, 221",crLight:2.07,crDark:8.221},"flood statement":{hex:"#00FF00",rgb:"0, 255, 0",crLight:1.372,crDark:12.4},"extreme cold warning":{hex:"#0000FF",rgb:"0, 0, 255",crLight:8.592,crDark:1.98},"freeze warning":{hex:"#483D8B",rgb:"72, 61, 139",crLight:9.068,crDark:1.876},"red flag warning":{hex:"#FF1493",rgb:"255, 20, 147",crLight:3.637,crDark:4.678},"storm surge watch":{hex:"#DB7FF7",rgb:"219, 127, 247",crLight:2.503,crDark:6.798},"hurricane watch":{hex:"#FF00FF",rgb:"255, 0, 255",crLight:3.136,crDark:5.425},"hurricane force wind watch":{hex:"#9932CC",rgb:"153, 50, 204",crLight:5.702,crDark:2.984},"typhoon watch":{hex:"#FF00FF",rgb:"255, 0, 255",crLight:3.136,crDark:5.425},"tropical storm watch":{hex:"#F08080",rgb:"240, 128, 128",crLight:2.591,crDark:6.566},"storm watch":{hex:"#FFE4B5",rgb:"255, 228, 181",crLight:1.234,crDark:13.787},"tropical cyclone local statement":{hex:"#FFE4B5",rgb:"255, 228, 181",crLight:1.234,crDark:13.787},"winter weather advisory":{hex:"#7B68EE",rgb:"123, 104, 238",crLight:4.153,crDark:4.097},"avalanche advisory":{hex:"#CD853F",rgb:"205, 133, 63",crLight:2.99,crDark:5.69},"cold weather advisory":{hex:"#AFEEEE",rgb:"175, 238, 238",crLight:1.289,crDark:13.196},"heat advisory":{hex:"#FF7F50",rgb:"255, 127, 80",crLight:2.499,crDark:6.809},"flood advisory":{hex:"#00FF7F",rgb:"0, 255, 127",crLight:1.345,crDark:12.648},"coastal flood advisory":{hex:"#7CFC00",rgb:"124, 252, 0",crLight:1.331,crDark:12.786},"lakeshore flood advisory":{hex:"#7CFC00",rgb:"124, 252, 0",crLight:1.331,crDark:12.786},"high surf advisory":{hex:"#BA55D3",rgb:"186, 85, 211",crLight:3.942,crDark:4.317},"dense fog advisory":{hex:"#708090",rgb:"112, 128, 144",crLight:4.055,crDark:4.196},"dense smoke advisory":{hex:"#F0E68C",rgb:"240, 230, 140",crLight:1.28,crDark:13.29},"small craft advisory":{hex:"#D8BFD8",rgb:"216, 191, 216",crLight:1.699,crDark:10.017},"brisk wind advisory":{hex:"#D8BFD8",rgb:"216, 191, 216",crLight:1.699,crDark:10.017},"hazardous seas warning":{hex:"#D8BFD8",rgb:"216, 191, 216",crLight:1.699,crDark:10.017},"dust advisory":{hex:"#BDB76B",rgb:"189, 183, 107",crLight:2.069,crDark:8.223},"blowing dust advisory":{hex:"#BDB76B",rgb:"189, 183, 107",crLight:2.069,crDark:8.223},"lake wind advisory":{hex:"#D2B48C",rgb:"210, 180, 140",crLight:1.972,crDark:8.627},"wind advisory":{hex:"#D2B48C",rgb:"210, 180, 140",crLight:1.972,crDark:8.627},"frost advisory":{hex:"#6495ED",rgb:"100, 149, 237",crLight:2.973,crDark:5.723},"freezing fog advisory":{hex:"#008080",rgb:"0, 128, 128",crLight:4.773,crDark:3.564},"freezing spray advisory":{hex:"#00BFFF",rgb:"0, 191, 255",crLight:2.122,crDark:8.018},"low water advisory":{hex:"#A52A2A",rgb:"165, 42, 42",crLight:7.084,crDark:2.402},"local area emergency":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},"winter storm watch":{hex:"#4682B4",rgb:"70, 130, 180",crLight:4.108,crDark:4.142},"rip current statement":{hex:"#40E0D0",rgb:"64, 224, 208",crLight:1.642,crDark:10.364},"beach hazards statement":{hex:"#40E0D0",rgb:"64, 224, 208",crLight:1.642,crDark:10.364},"gale watch":{hex:"#FFC0CB",rgb:"255, 192, 203",crLight:1.538,crDark:11.063},"avalanche watch":{hex:"#F4A460",rgb:"244, 164, 96",crLight:2.034,crDark:8.366},"hazardous seas watch":{hex:"#483D8B",rgb:"72, 61, 139",crLight:9.068,crDark:1.876},"heavy freezing spray watch":{hex:"#BC8F8F",rgb:"188, 143, 143",crLight:2.814,crDark:6.047},"flood watch":{hex:"#2E8B57",rgb:"46, 139, 87",crLight:4.245,crDark:4.008},"coastal flood watch":{hex:"#66CDAA",rgb:"102, 205, 170",crLight:1.931,crDark:8.814},"lakeshore flood watch":{hex:"#66CDAA",rgb:"102, 205, 170",crLight:1.931,crDark:8.814},"high wind watch":{hex:"#B8860B",rgb:"184, 134, 11",crLight:3.254,crDark:5.228},"extreme heat watch":{hex:"#800000",rgb:"128, 0, 0",crLight:10.95,crDark:1.554},"extreme cold watch":{hex:"#5F9EA0",rgb:"95, 158, 160",crLight:3.05,crDark:5.578},"freeze watch":{hex:"#00FFFF",rgb:"0, 255, 255",crLight:1.254,crDark:13.57},"fire weather watch":{hex:"#FFDEAD",rgb:"255, 222, 173",crLight:1.288,crDark:13.21},"extreme fire danger":{hex:"#E9967A",rgb:"233, 150, 122",crLight:2.306,crDark:7.38},"911 telephone outage":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},"coastal flood statement":{hex:"#6B8E23",rgb:"107, 142, 35",crLight:3.805,crDark:4.471},"lakeshore flood statement":{hex:"#6B8E23",rgb:"107, 142, 35",crLight:3.805,crDark:4.471},"special weather statement":{hex:"#FFE4B5",rgb:"255, 228, 181",crLight:1.234,crDark:13.787},"marine weather statement":{hex:"#FFDAB9",rgb:"255, 218, 185",crLight:1.314,crDark:12.948},"air quality alert":{hex:"#808080",rgb:"128, 128, 128",crLight:3.949,crDark:4.308},"air stagnation advisory":{hex:"#808080",rgb:"128, 128, 128",crLight:3.949,crDark:4.308},"hazardous weather outlook":{hex:"#EEE8AA",rgb:"238, 232, 170",crLight:1.253,crDark:13.578},"hydrologic outlook":{hex:"#90EE90",rgb:"144, 238, 144",crLight:1.417,crDark:12.006},"short term forecast":{hex:"#98FB98",rgb:"152, 251, 152",crLight:1.266,crDark:13.439},"administrative message":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},test:{hex:"#F0FFFF",rgb:"240, 255, 255",crLight:1.027,crDark:16.572},"child abduction emergency":{hex:"#FFFFFF",rgb:"255, 255, 255",crLight:1,crDark:17.015},"blue alert":{hex:"#FFFFFF",rgb:"255, 255, 255",crLight:1,crDark:17.015}},ma=["a","b","br","em","i","li","ol","p","strong","ul"];Mo.addHook("afterSanitizeAttributes",t=>{t.tagName==="A"&&(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer"))});function fa(t){return t?Mo.sanitize(t,{ALLOWED_TAGS:ma,ALLOWED_ATTR:["href"]}):""}const va=[[["tornado"],"mdi:weather-tornado"],[["tsunami"],"mdi:tsunami"],[["hurricane","tropical","typhoon","cyclone"],"mdi:weather-hurricane"],[["thunderstorm","gewitter"],"mdi:weather-lightning"],[["hail","hagel"],"mdi:weather-hail"],[["flood","hydrologic","storm surge","hochwasser"],"mdi:home-flood"],[["rain","shower","precipitation","starkregen","dauerregen"],"mdi:weather-pouring"],[["snow","blizzard","winter","schnee","schneesturm"],"mdi:weather-snowy-heavy"],[["sleet"],"mdi:weather-snowy-rainy"],[["ice","freeze","frost","slippery","gl\xE4tte","glatteis"],"mdi:snowflake"],[["thaw"],"mdi:snowflake-melt"],[["cold","chill","low temperature","k\xE4lte"],"mdi:thermometer-low"],[["landslide","avalanche","lawine"],"mdi:landslide"],[["earthquake"],"mdi:pulse"],[["volcano","ashfall","vog"],"mdi:volcano"],[["dust","sand"],"mdi:weather-dust"],[["smoke"],"mdi:smoke"],[["air quality","air stagnation"],"mdi:air-filter"],[["fire","red flag","waldbrand"],"mdi:fire"],[["heat","high temperature","hitze"],"mdi:weather-sunny-alert"],[["drought","trockenheit"],"mdi:water-off"],[["fog","nebel"],"mdi:weather-fog"],[["sheep","grazier"],"mdi:weather-windy-variant"],[["gale","squall"],"mdi:weather-windy"],[["wind","sturm","orkan","b\xF6en"],"mdi:weather-windy"],[["small craft"],"mdi:sail-boat"],[["rip current"],"mdi:wave"],[["surf","marine","coastal","seas"],"mdi:waves"]];function Lo(t){const e=t.toLowerCase().replace(/[-/]/g," ");for(const[r,i]of va)if(r.some(o=>e.includes(o)))return i;return"mdi:alert-circle-outline"}const ba=[[["likely"],"mdi:check-decagram"],[["observed"],"mdi:eye-check"],[["possible","unlikely"],"mdi:help-circle-outline"]];function ya(t){const e=t.toLowerCase();for(const[r,i]of ba)if(r.some(o=>e.includes(o)))return i;return"mdi:bullseye-arrow"}const wa=[[["tornado"],"#FF0000"],[["hurricane","typhoon","tropical storm"],"#DC143C"],[["flood"],"#228B22"],[["blizzard","ice storm"],"#FF4500"],[["snow","winter"],"#1E90FF"],[["freeze","frost","ice"],"#6495ED"],[["wind"],"#D2B48C"],[["heat"],"#FF7F50"],[["fire","red flag"],"#FF4500"],[["fog"],"#708090"],[["tsunami"],"#FD6347"]],Ct="#ffffff",kt="#1c1c1e",xa={subtle:{text:2,progress:1.3},strict:{text:3,progress:2}},$t="subtle";function Ea(t){return t!=null?t:$t}function Bo(t){const e=t.replace("#",""),r=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,o=parseInt(e.slice(4,6),16)/255,n=s=>s<=.04045?s/12.92:((s+.055)/1.055)**2.4;return .2126*n(r)+.7152*n(i)+.0722*n(o)}function ve(t,e){const r=Bo(t),i=Bo(e),o=Math.max(r,i),n=Math.min(r,i);return(o+.05)/(n+.05)}const Aa={boostLight:!1,boostDark:!1,progressBoostLight:!1,progressBoostDark:!1};function Sa(t,e,r){if(r==="off")return Aa;const{text:i,progress:o}=xa[r];return{boostLight:t<i,boostDark:e<i,progressBoostLight:t<o,progressBoostDark:e<o}}function tr(t){const e=t.replace("#","");return`${parseInt(e.slice(0,2),16)}, ${parseInt(e.slice(2,4),16)}, ${parseInt(e.slice(4,6),16)}`}const Fa=1.9;function zo(t,e,r){return ve(t,e)>=Fa?e:r}function Da(t){return{light:zo(t,Ct,"#1a1a1a"),dark:zo(t,kt,"#f5f5f5")}}function Tt(t,e,r,i,o){const n=Da(t);return{color:t,rgb:e,textColorLight:n.light,textColorDark:n.dark,...Sa(r,i,o)}}function Ca(t,e=$t){const r=t.toLowerCase(),i=ga[r];if(i)return Tt(i.hex,i.rgb,i.crLight,i.crDark,e);for(const[o,n]of wa)if(o.some(s=>r.includes(s)))return Tt(n,tr(n),ve(n,Ct),ve(n,kt),e)}const Mt={extreme:"#D8001E",severe:"#FF9900",moderate:"#FFC800",minor:"#88C840"},ka={red:Mt.extreme,orange:Mt.severe,yellow:Mt.moderate,green:Mt.minor};function Po(t){var e;if(typeof t!="string")return;const r=t.split(";");if(!(r.length<2))return ka[((e=r[1])!=null?e:"").trim().toLowerCase()]}function $a(t,e=$t){var r;const i=(r=Mt[t])!=null?r:"#808080";return Tt(i,tr(i),ve(i,Ct),ve(i,kt),e)}const He={red:"#D10000",orange:"#FF9500",yellow:"#FFFF00",grey:"#656565"},Ta={extreme:He.red,severe:He.orange,moderate:He.yellow,minor:He.grey,unknown:He.grey};function No(t){var e;return(e=Ta[t])!=null?e:He.grey}function Ma(t,e=$t){const r=No(t);return Tt(r,tr(r),ve(r,Ct),ve(r,kt),e)}const La=/^#[0-9a-f]{6}$/;function Ba(t,e=$t){var r;const i=(r=t.colorHint)==null?void 0:r.trim().toLowerCase();if(!(!i||!La.test(i)))return Tt(i,tr(i),ve(i,Ct),ve(i,kt),e)}function za(t){var e;return(e=t.providerColors)!=null?e:t.colorTheme==="eccc"}function Pa(t){return t.providerColors!==void 0||t.colorTheme!=="eccc"?t:{...t,providerColors:!0}}function $(t){if(!t||t==="None"||t.trim()==="")return 0;const e=new Date(t.trim());return isNaN(e.getTime())?0:e.getTime()/1e3}function rr(t,e,r,i){const o=d=>d*Math.PI/180,n=o(i-e),s=o(r-t),l=Math.sin(n/2)**2+Math.cos(o(e))*Math.cos(o(i))*Math.sin(s/2)**2;return 2*6371*Math.asin(Math.min(1,Math.sqrt(l)))}function dt(t,e){if(!(typeof t!="number"||typeof e!="number")&&!(!Number.isFinite(t)||!Number.isFinite(e))&&!(Math.abs(t)>90||Math.abs(e)>180))return[e,t]}function Vr(t,e){var r,i,o,n;if(t){if(e){const s=(i=(r=t.states)==null?void 0:r[e])==null?void 0:i.attributes,l=dt(s==null?void 0:s.latitude,s==null?void 0:s.longitude);if(l)return l}return dt((o=t.config)==null?void 0:o.latitude,(n=t.config)==null?void 0:n.longitude)}}const Io=1.609344;function Ro(t,e){return e!=="mi"?t:Math.round(t/Io*100)/100}function Na(t,e){return e!=="mi"?t:Math.round(t*Io*1e3)/1e3}function Oo(t){return t==="mi"?"mi":"km"}function Ia(t,e,r){const i=Ro(t,e),o=i<10?1:0;let n;try{n=new Intl.NumberFormat(r,{minimumFractionDigits:0,maximumFractionDigits:o}).format(i)}catch{n=i.toFixed(o)}return`${n} ${e}`}function Uo(t){const e=Date.now()/1e3,r=t.sentTs,i=r>0?r:e;let o=t.onsetTs;o===0&&(o=i);const n=o+3600;let s=t.endsTs;s===0&&(s=n);const l=t.endsTs>0,d=e>=o,u=l&&e>=s;let _,p,v,b;u?(_=o,p=s,v=s,b="Expired"):d?(_=o,p=s,v=e,b="Active"):(_=e,p=s,v=o,b="Preparation");const x=p-_,A=x>0?x:1,C=(v-_)/A*100,D=Math.max(0,Math.min(100,Math.round(C*10)/10)),N=Math.round((s-e)/3600*10)/10,G=Math.round((o-e)/3600*10)/10,W=Math.round((o-e)/60);return{isActive:d,isExpired:u,phaseText:b,progressPct:D,remainingHours:N,onsetHours:G,onsetMinutes:W,onsetTs:o,endsTs:s,sentTs:r,nowTs:e,hasEndTime:l}}function Ra(t){if(!t)return{locale:void 0};const e=t.language;return t.time_format==="12"?{locale:e,hour12:!0}:t.time_format==="24"?{locale:e,hour12:!1}:{locale:e}}function Oa(t,e,r){const i=new Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:r});return i.format(t)===i.format(e)}function Wo(t,e){var r,i;return e!=null&&e.timeZone&&(i=(r=new Intl.DateTimeFormat(e.language,{timeZoneName:"short",timeZone:e.timeZone}).formatToParts(t).find(o=>o.type==="timeZoneName"))==null?void 0:r.value)!=null?i:""}function Ho(t,e){var r,i,o,n,s,l;const d=e==null?void 0:e.language,u=e==null?void 0:e.date_format,_=e==null?void 0:e.timeZone;if(!u||u==="language")return t.toLocaleDateString(d,{timeZone:_});const p=new Intl.DateTimeFormat(d,{day:"numeric",month:"numeric",year:"numeric",timeZone:_}).formatToParts(t),v=(i=(r=p.find(A=>A.type==="day"))==null?void 0:r.value)!=null?i:"",b=(n=(o=p.find(A=>A.type==="month"))==null?void 0:o.value)!=null?n:"",x=(l=(s=p.find(A=>A.type==="year"))==null?void 0:s.value)!=null?l:"";switch(u){case"DMY":return`${v}/${b}/${x}`;case"MDY":return`${b}/${v}/${x}`;case"YMD":return`${x}/${b}/${v}`;default:return t.toLocaleDateString(d,{timeZone:_})}}function jo(t,e,r){const i=Ra(e),o={hour:r,minute:"2-digit",timeZone:e==null?void 0:e.timeZone};return i.hour12!==void 0&&(o.hour12=i.hour12),t.toLocaleTimeString(i.locale,o)}function Go(t,e,r="en"){if(t<=0)return h("progress.na",r);const i=new Date(t*1e3),o=new Date,n=Wo(i,e),s=jo(i,e,"2-digit"),l=n?`${s} ${n}`:s;return Oa(i,o,e==null?void 0:e.timeZone)?l:`${l} (${Ho(i,e)})`}function Zr(t,e,r="en"){if(t<=100)return h("progress.na",r);const i=new Date(t*1e3),o=Wo(i,e),n=jo(i,e,"numeric"),s=o?`${n} ${o}`:n;return`${Ho(i,e)}, ${s}`}function qo(t,e=Date.now()/1e3,r="en"){const i=t-e,o=Math.abs(i),n=i<0;if(o<60)return h(n?"time.just_now":"time.in_less_than_1m",r);if(o<3600){const l=Math.floor(o/60);return n?h("time.minutes_ago",r,{m:l}):h("time.in_minutes",r,{m:l})}if(o<86400){const l=Math.floor(o/3600),d=Math.floor(o%3600/60),u=d>0?`${l}h ${d}m`:`${l}h`;return n?h("time.hours_ago",r,{dur:u}):h("time.in_hours",r,{dur:u})}const s=Math.floor(o/86400);return n?h("time.days_ago",r,{d:s}):h("time.in_days",r,{d:s})}function ct(t,e=Date.now()/1e3){const r=Math.abs(t-e);if(r<60)return"<1m";if(r<3600)return`${Math.floor(r/60)}m`;if(r<86400){const n=Math.floor(r/3600),s=Math.floor(r%3600/60);return s>0?`${n}h ${s}m`:`${n}h`}const i=Math.floor(r/86400),o=Math.floor(r%86400/3600);return o>0?`${i}d ${o}h`:`${i}d`}function Ua(t,e=!0){const r=(t.headline||"").trim();if(!r)return"";if(!e)return r;const i=r.toLowerCase().replace(/[.\s]+$/,""),o=t.event.toLowerCase();return i.startsWith(o)||o.startsWith(i)?"":r}function Ko(t){if(!t)return"";const e=/^\s*[·•-]\s/,r=/^\.[A-Z]/;return t.split(/\n{2,}/).map(i=>{var o,n;const s=i.split(`
`),l=[];for(const d of s)l.length===0?l.push(d.trimStart()):e.test(d)||r.test(d.trimStart())||(n=(o=l[l.length-1])==null?void 0:o.trimEnd().endsWith(":"))!=null&&n?l.push(d):l[l.length-1]+=" "+d.trimStart();return l.map(d=>d.replace(/ {2,}/g," ")).map(d=>d.trimEnd()).filter(Boolean).join(`
`)}).filter(Boolean).join(`

`)}function be(t){const e=(t||"").toLowerCase().replace(/\s/g,"");return["extreme","severe","moderate","minor"].includes(e)?e:"unknown"}const Lt={extreme:0,severe:1,moderate:2,minor:3,unknown:4},Yo=(t,e)=>{var r,i;const o=((r=Lt[t.severity])!=null?r:4)-((i=Lt[e.severity])!=null?i:4);return o!==0?o:(t.onsetTs||1/0)-(e.onsetTs||1/0)};function Wa(t,e,r){if(e==="onset")return[...t].sort((i,o)=>(i.onsetTs||1/0)-(o.onsetTs||1/0));if(e==="severity")return[...t].sort(Yo);if(e==="distance"&&r){const i=new Map(t.map(o=>[o,o.point?rr(o.point[0],o.point[1],r[0],r[1]):-1]));return[...t].sort((o,n)=>{var s,l;const d=((s=i.get(o))!=null?s:-1)-((l=i.get(n))!=null?l:-1);return d!==0?d:Yo(o,n)})}return t}function Ha(t,e){return t.zones.some(r=>e.has(r.toUpperCase()))}function ja(t,e,r){var i,o;let n=t;if(r&&r.size>0){const u=new Set;n=t.filter(_=>{if(!_.id||!r.has(_.provider))return!0;const p=`${_.provider}\0${_.id}`;return u.has(p)?!1:(u.add(p),!0)})}const s=new Map,l=[];for(const u of n){const _=`${u.event}\0${u.severity}\0${u.onsetTs}\0${u.endsTs}\0${u.provider}`,p=s.get(_);p?p.push(u):(s.set(_,[u]),l.push(_))}let d=l.map(u=>{const _=s.get(u),p=_[0];if(_.length===1)return p;const v={...p},b=new Set,x=new Set;for(const A of _){for(const C of A.zones)b.add(C.toUpperCase());A.areaDesc&&x.add(A.areaDesc)}return v.zones=[...b],v.areaDesc=[...x].join("; "),v.mergedCount=_.length,v.id=`merged:${u}`,v});if(e&&e.length>1){const u=new Map;for(const[p,v]of e.entries())u.has(v)||u.set(v,p);const _=new Map;for(const p of d){if(p.endsTs===0)continue;const v=`${p.event}\0${p.endsTs}`,b=_.get(v);(!b||((i=u.get(p.provider))!=null?i:1/0)<((o=u.get(b))!=null?o:1/0))&&_.set(v,p.provider)}d=d.filter(p=>{if(p.endsTs===0)return!0;const v=`${p.event}\0${p.endsTs}`;return p.provider===_.get(v)})}return d}function Ga(t){var e;const r=t.split("/");return((e=r[r.length-1])!=null?e:"").toUpperCase()}function qa(t){var e;const r=[];if(Array.isArray(t.AffectedZones))for(const i of t.AffectedZones)typeof i!="string"||!i||r.push(Ga(i));if(Array.isArray((e=t.Geocode)==null?void 0:e.UGC))for(const i of t.Geocode.UGC){if(typeof i!="string"||!i)continue;const o=i.toUpperCase();r.includes(o)||r.push(o)}return r}class Ka{constructor(){this.provider="nws",this.stableIds=!0}canHandle(e){const r=e.Alerts;if(!Array.isArray(r))return!1;if(r.length===0)return!0;const i=r[0];return typeof i=="object"&&i!==null&&"Event"in i&&"Severity"in i}parseAlerts(e){const r=e.Alerts;return Array.isArray(r)?r.filter(i=>typeof i=="object"&&i!==null).map(i=>this._normalize(i)):[]}_normalize(e){const r=be(e.Severity);return{id:e.ID,event:e.Event||"Unknown",severity:r,severityLabel:e.Severity&&be(e.Severity)!=="unknown"?e.Severity:r.charAt(0).toUpperCase()+r.slice(1),certainty:e.Certainty||"",urgency:e.Urgency||"",sentTs:$(e.Sent),onsetTs:$(e.Onset),endsTs:$(e.Ends)||$(e.Expires),description:e.Description||"",instruction:e.Instruction||"",url:e.URL||"",headline:e.Headline||"",areaDesc:e.AreaDesc||e.AreasAffected||"",zones:qa(e),eventCode:e.NWSCode||"",provider:"nws",phase:"",severityInferred:!e.Severity||be(e.Severity)==="unknown",certaintyInferred:!1}}}function Ya(t,e,r){const i=t.toLowerCase();if(i.includes("extreme")||i.includes("tropical cyclone"))return{severity:"extreme",label:(i.includes("extreme"),"Extreme")};if(i.includes("severe"))return{severity:"severe",label:"Severe"};if(i.includes("major"))return{severity:"severe",label:"Major"};if(i.includes("moderate"))return{severity:"moderate",label:"Moderate"};if(i.includes("minor")||i.includes("initial"))return{severity:"minor",label:"Minor"};const o=e.toLowerCase();if(o.includes("tropical_cyclone"))return{severity:"extreme",label:"Extreme"};if(o.includes("severe")||o.includes("fire_weather"))return{severity:"severe",label:"Severe"};const n=r.charAt(0).toUpperCase()+r.slice(1);return r==="major"?{severity:"moderate",label:n}:{severity:"minor",label:n}}function Va(t){return t.title||t.short_title||t.type.replace(/_/g," ")}function Za(t){if(t.area_id&&t.id.startsWith(t.area_id+"_")){const e=t.id.slice(t.area_id.length+1);return`https://www.bom.gov.au/warning/${t.type.replace(/_/g,"-")}/${e}`}return"https://www.bom.gov.au/weather-and-climate/warnings-and-alerts"}const Xa={new:"New",update:"Updated",renewal:"Renewed",upgrade:"Upgraded",downgrade:"Downgraded",final:"Final"};function Qa(t){return Xa[t.toLowerCase()]||""}class Ja{constructor(){this.provider="bom",this.stableIds=!0}canHandle(e){const r=e.warnings;if(!Array.isArray(r))return!1;if(r.length===0)return typeof e.attribution=="string"&&e.attribution.toLowerCase().includes("bureau of meteorology");const i=r[0];return typeof i=="object"&&i!==null&&"warning_group_type"in i&&"issue_time"in i}parseAlerts(e){const r=e.warnings;return Array.isArray(r)?r.filter(i=>typeof i=="object"&&i!==null).filter(i=>i.phase!=="cancelled").map(i=>this._normalize(i)):[]}_normalize(e){const r=$(e.issue_time),i=$(e.expiry_time),o=Va(e),{severity:n,label:s}=Ya(o,e.type,e.warning_group_type);return{id:e.id,event:o,severity:n,severityLabel:s,certainty:"",urgency:"",sentTs:r,onsetTs:r,endsTs:i,description:"",instruction:"",url:Za(e),headline:e.short_title||o,areaDesc:e.state||"",zones:e.area_id?[e.area_id.toUpperCase()]:[],eventCode:"",provider:"bom",phase:Qa(e.phase),severityInferred:!0,certaintyInferred:!1}}}const el="https://www.dwd.de/DE/wetter/warnungen_gemeinden/warnWetter_node.html",tl={"#880e4f":{severity:"extreme",label:"Extreme"},"#ff0000":{severity:"severe",label:"Severe"},"#ff9900":{severity:"moderate",label:"Moderate"},"#ffff00":{severity:"minor",label:"Minor"}};function rl(t,e){if(typeof t=="number")switch(t){case 4:return{severity:"extreme",label:"Extreme"};case 3:return{severity:"severe",label:"Severe"};case 2:return{severity:"moderate",label:"Moderate"};case 1:return{severity:"minor",label:"Minor"};case 0:return{severity:"unknown",label:"Unknown"}}if(typeof e=="string"){const r=tl[e.toLowerCase()];if(r)return r}return{severity:"unknown",label:"Unknown"}}function il(t){return typeof t=="object"&&t!==null&&typeof t.level=="number"&&typeof t.color=="string"}class ol{constructor(){this.provider="dwd"}canHandle(e){return typeof e.warning_count!="number"||typeof e.region_name!="string"?!1:e.warning_count>0?il(e.warning_1):!0}parseAlerts(e){const r=typeof e.warning_count=="number"?e.warning_count:0;if(r<=0)return[];const i=typeof e.region_name=="string"?e.region_name:"",o=[];for(let n=1;n<=r;n++){const s=e[`warning_${n}`];if(!s||typeof s!="object")continue;const l=s,d=typeof l.level=="number"?l.level:void 0;if(d===0)continue;const{severity:u,label:_}=rl(d,l.color),p=$(l.start_time),v=$(l.end_time),b=typeof l.event_code=="number"?String(l.event_code):"",x=typeof l.event=="string"?l.event:"";o.push({id:`dwd_${b||x}_${p}`,event:x,severity:u,severityLabel:_,certainty:"",urgency:"",sentTs:0,onsetTs:p,endsTs:v,description:typeof l.description=="string"?l.description:"",instruction:typeof l.instruction=="string"?l.instruction:"",url:el,headline:typeof l.headline=="string"?l.headline:"",areaDesc:i,zones:[],eventCode:b,provider:"dwd",phase:"",severityInferred:!1,certaintyInferred:!1})}return o}}const nl="https://www.meteoswiss.admin.ch/services-and-publications/applications/hazards.html#tab=severe-weather-map&weather-tab=all";function sl(t){switch(t){case 5:return{severity:"extreme",label:"Extreme"};case 4:return{severity:"extreme",label:"Extreme"};case 3:return{severity:"severe",label:"Severe"};case 2:return{severity:"moderate",label:"Moderate"};case 1:return{severity:"minor",label:"Minor"};case 0:return{severity:"unknown",label:"Unknown"};default:return{severity:"unknown",label:"Unknown"}}}class al{constructor(){this.provider="meteoswiss"}canHandle(e){return Array.isArray(e.warning_types)&&Array.isArray(e.warning_levels_numeric)&&Array.isArray(e.warning_valid_from)}parseAlerts(e){const r=b=>Array.isArray(e[b])?e[b]:[],i=r("warning_types"),o=r("warning_levels"),n=r("warning_levels_numeric"),s=r("warning_valid_from"),l=r("warning_valid_to"),d=r("warning_texts"),u=r("warning_links"),_=b=>i.length>0&&u.length>0&&u.length%i.length===0?String(u[b*(u.length/i.length)]):u.length>0?String(u[0]):nl,p=b=>typeof b=="string"?b:typeof b=="number"||typeof b=="boolean"?String(b):"",v=[];for(let b=0;b<i.length;b++){const x=Number(n[b]);if(x===0)continue;const A=p(i[b]),{severity:C,label:D}=sl(x),N=p(o[b])||D,G=s[b]!=null?$(String(s[b])):0,W=l[b]!=null?$(String(l[b])):0;v.push({id:`meteoswiss_${A}_${G}`,event:A,severity:C,severityLabel:N,certainty:"",urgency:"",sentTs:0,onsetTs:G,endsTs:W,description:p(d[b]),instruction:"",url:_(b),headline:"",areaDesc:"",zones:[],eventCode:A,provider:"meteoswiss",phase:"",severityInferred:!1,certaintyInferred:!1,iconHint:A})}return v}}function Vo(t){var e;if(!t||typeof t!="string")return;const r=parseInt(((e=t.split(";")[0])!=null?e:"").trim(),10);if(r>=4)return"extreme";if(r===3)return"severe";if(r===2)return"moderate";if(r===1)return"minor"}function ll(t){var e,r;return!t||typeof t!="string"?"":(r=(e=t.split(";")[2])==null?void 0:e.trim())!=null?r:""}function dl(t){if(!t||typeof t!="string")return"";const e=t.split(";");return e.length>1?e.slice(1).join(";").trim():""}class cl{constructor(){this.provider="meteoalarm"}canHandle(e){return typeof e.attribution=="string"&&e.attribution.toLowerCase().includes("meteoalarm")?!0:typeof e.awareness_level=="string"&&typeof e.awareness_type=="string"}parseAlerts(e){const r=V(e.event),i=V(e.headline);if(!r&&!i)return[];const o=V(e.awareness_level),n=Vo(o)||be(V(e.severity)),s=ll(o)||V(e.severity)||n.charAt(0).toUpperCase()+n.slice(1),l=$(V(e.onset)||V(e.effective)),d=$(V(e.expires)),u=$(V(e.effective)),_=dl(V(e.awareness_type)),p=r||_||i,v=!Vo(o)&&!V(e.severity),b=Po(o);return[{id:`meteoalarm_${p}_${l}`,event:p,severity:n,severityLabel:s,certainty:V(e.certainty),urgency:V(e.urgency),sentTs:u,onsetTs:l||u,endsTs:d,description:V(e.description),instruction:V(e.instruction),url:"",headline:i||p,areaDesc:V(e.senderName),zones:[],eventCode:"",provider:"meteoalarm",iconHint:_,phase:"",severityInferred:v,certaintyInferred:!1,...b!==void 0&&{colorHint:b}}]}}function V(t){return typeof t=="string"?t:""}class ul{constructor(){this.provider="pirateweather"}canHandle(e){return typeof e.attribution=="string"&&e.attribution.toLowerCase().includes("pirate weather")}parseAlerts(e){const r=[],i=typeof e.title=="string"&&e.title!=="",o=typeof e.title_0=="string"&&e.title_0!=="";if(i&&!o){const n=this._parseOne(e,"");n&&r.push(n)}for(let n=0;;n++){const s=`_${n}`;if(typeof e[`title${s}`]!="string"||e[`title${s}`]==="")break;const l=this._parseOne(e,s);l&&r.push(l)}return r}_parseOne(e,r){const i=je(e[`title${r}`]);if(!i)return null;const o=je(e[`severity${r}`]),n=be(o),s=o?o.charAt(0).toUpperCase()+o.slice(1).toLowerCase():n.charAt(0).toUpperCase()+n.slice(1),l=$(je(e[`time${r}`])),d=$(je(e[`expires${r}`])),u=e[`regions${r}`],_=Array.isArray(u)?u.join(", "):je(u),p=je(e[`uri${r}`]),v=je(e[`description${r}`]);return{id:`pirateweather_${i}_${l}`,event:i,severity:n,severityLabel:s,certainty:"",urgency:"",sentTs:l,onsetTs:l,endsTs:d,description:v,instruction:"",url:p,headline:i,areaDesc:_,zones:[],eventCode:"",provider:"pirateweather",phase:"",severityInferred:!o||be(o)==="unknown",certaintyInferred:!1}}}function je(t){return typeof t=="string"?t:""}class pl{constructor(){this.provider="cap",this.stableIds=!0,this.carriesPoint=!0}canHandle(e){return typeof e.incident_platform_version=="string"&&typeof e.id=="string"}parseAlerts(e){var r;const i=z(e.id);if(!i)return[];const o=z(e.event),n=z(e.severity),s=z(e.severity_normalized),l=be(s||n),d=n||s,u=d?d.charAt(0).toUpperCase()+d.slice(1).toLowerCase():l.charAt(0).toUpperCase()+l.slice(1),_=$(z(e.sent)||z(e.effective)),p=$(z(e.onset))||_,v=$(z(e.ends))||$(z(e.expires)),b=z(e.icon),x=b.startsWith("mdi:")?b:void 0,A=z(e.geometry_ref)||void 0,C=ml(e.bbox),D=C!==void 0&&C[0]===C[2]&&C[1]===C[3],N=(r=fl(e.points))!=null?r:D?dt(C[1],C[0]):void 0,G=D?void 0:C,W=e.parameters,q=W&&typeof W=="object"&&!Array.isArray(W)?Po(W.awareness_level):void 0;return[{id:i,event:o||"Unknown",severity:l,severityLabel:u,certainty:z(e.certainty),urgency:z(e.urgency),sentTs:_,onsetTs:p,endsTs:v,description:z(e.description),instruction:z(e.instruction),url:Zo(z(e.url))||Zo(z(e.web)),headline:z(e.headline),areaDesc:z(e.area_desc),zones:gl(e),eventCode:z(e.event_code_nws)||z(e.event_code_same),provider:"cap",phase:_l(z(e.phase)),severityInferred:!n&&!s,certaintyInferred:!1,...x!==void 0&&{providerIcon:x},...A!==void 0&&{geometryRef:A},...G!==void 0&&{bbox:G},...N!==void 0&&{point:N},...q!==void 0&&{colorHint:q}}]}}const hl={new:"New",update:"Update",cancel:"Cancel",expired:"Expired"};function _l(t){return hl[t.toLowerCase()]||""}function gl(t){const e=[],r=new Set,i=n=>{if(typeof n!="string")return;const s=n.toUpperCase();r.has(s)||(r.add(s),e.push(s))};for(const n of["affected_zones","geocode_ugc","geocode_same"]){const s=t[n];if(Array.isArray(s))for(const l of s)i(l)}const o=t.geocodes;if(o&&typeof o=="object"&&!Array.isArray(o)){for(const n of Object.values(o))if(Array.isArray(n))for(const s of n)i(s)}return e}function z(t){return typeof t=="string"?t:""}function ml(t){if(!(!Array.isArray(t)||t.length!==4)&&t.every(e=>typeof e=="number"&&Number.isFinite(e)))return[t[0],t[1],t[2],t[3]]}function fl(t){if(!Array.isArray(t)||t.length!==1)return;const e=t[0];if(!(!Array.isArray(e)||e.length!==2))return dt(e[1],e[0])}function Zo(t){return t.startsWith("http://")||t.startsWith("https://")?t:""}const vl="https://weather.gc.ca/index_e.html",bl="https://meteo.gc.ca/index_f.html",yl="environment canada",Xo="environnement canada",wl={red:"extreme",orange:"severe",yellow:"moderate",grey:"minor",green:"unknown",rouge:"extreme",jaune:"moderate",gris:"minor",vert:"unknown"},xl={warning:"severe",watch:"moderate",advisory:"minor",statement:"minor",ending:"unknown"},El={high:"severe",medium:"moderate",moderate:"moderate",low:"minor",\u00E9lev\u00E9:"severe",\u00E9lev\u00E9e:"severe",mod\u00E9r\u00E9:"moderate",mod\u00E9r\u00E9e:"moderate",faible:"minor"},Al={high:"Likely",moderate:"Possible",medium:"Possible",low:"Unlikely",\u00E9lev\u00E9e:"Likely",\u00E9lev\u00E9:"Likely",mod\u00E9r\u00E9e:"Possible",mod\u00E9r\u00E9:"Possible",faible:"Unlikely"},Sl={new:"New",issued:"New",continued:"Continued",updated:"Updated",extended:"Updated",expired:"Final",ended:"Final",\u00E9mis:"New",maintenu:"Continued","mis \xE0 jour":"Updated",prolong\u00E9:"Updated",termin\u00E9:"Final",annul\u00E9:"Final"};function Fl(t){var e;return t&&(e=wl[t.toLowerCase()])!=null?e:"unknown"}function Dl(t){var e;return t&&(e=xl[t.toLowerCase()])!=null?e:"unknown"}function Cl(t){var e;return t&&(e=El[t.toLowerCase()])!=null?e:"unknown"}function kl(...t){var e,r,i;let o="unknown",n=(e=Lt[o])!=null?e:0;for(const s of t){const l=(i=(r=Lt[s])!=null?r:Lt.unknown)!=null?i:0;l<n&&(o=s,n=l)}return o}function Qo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function $l(t){var e;if(!t)return"";const r=t.toLowerCase();return(e=Sl[r])!=null?e:Qo(t)}function Tl(t){var e;return t&&(e=Al[t.toLowerCase()])!=null?e:""}function Ml(t){return typeof t=="string"&&t.toLowerCase().includes(Xo)}function Ll(t){return Ml(t)?bl:vl}class Bl{constructor(){this.provider="eccc"}canHandle(e){const r=e.attribution;if(typeof r!="string")return!1;const i=r.toLowerCase();return i.includes(yl)||i.includes(Xo)}parseAlerts(e){const r=e.alerts;if(!Array.isArray(r))return[];const i=Ll(e.attribution);return r.filter(o=>typeof o=="object"&&o!==null).filter(o=>{const n=Ge(o.status).toLowerCase();return n!=="cancelled"&&n!=="annul\xE9"}).map(o=>this._normalize(o,i))}_normalize(e,r){const i=$(e.issued),o=$(e.expiry),n=kl(Fl(e.color),Dl(e.type),Cl(e.impact)),s=Ge(e.title),l=Ge(e.alert_code),d=Ge(e.area),u=zl(e.color,n),_=Ge(e.impact),p=_?Qo(_):void 0,v=p!=null?p:n.charAt(0).toUpperCase()+n.slice(1),b=Tl(e.confidence);return{id:`eccc_${l||s||"unknown"}_${d}_${i}`,event:s,severity:n,severityLabel:v,certainty:b,urgency:"",sentTs:i,onsetTs:i,endsTs:o,description:Ge(e.text),instruction:"",url:Ge(e.url)||r,headline:s,areaDesc:d,zones:[],eventCode:l,provider:"eccc",phase:$l(e.status),severityInferred:!e.color&&!e.type&&!e.impact,certaintyInferred:!e.confidence,colorHint:u,severityBadgeLabel:p}}}function zl(t,e){const r=t?t.trim().toLowerCase():"",i=He[r];return i!=null?i:No(e)}function Ge(t){return typeof t=="string"?t:""}const Pl="https://www.fire.nsw.gov.au/firesnearme/";function Nl(t){const e=t.toLowerCase();return e.includes("emergency warning")?{severity:"extreme",label:"Emergency Warning",inferred:!1}:e.includes("watch and act")?{severity:"severe",label:"Watch and Act",inferred:!1}:e.includes("advice")?{severity:"moderate",label:"Advice",inferred:!1}:e.includes("planned burn")?{severity:"minor",label:"Planned Burn",inferred:!1}:{severity:"unknown",label:Jo(t)||"Unknown",inferred:!0}}function Jo(t){return t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}function Il(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function Rl(t){if(t==null||t==="")return"";if(typeof t=="number")return`${t} ha`;const e=t.trim();return/^\d+(\.\d+)?$/.test(e)?`${e} ha`:e}function Ol(t){const e=[],r=(i,o)=>{o&&e.push(`${i}: ${o}`)};return r("Status",me(t.status)),r("Type",me(t.type)),r("Location",me(t.location)),r("Council area",me(t.council_area)),r("Size",Rl(t.size)),r("Responsible agency",me(t.responsible_agency)),e.join(`

`)}class Ul{constructor(){this.provider="nsw_rfs",this.feedSources=["nsw_rural_fire_service_feed"],this.carriesPoint=!0,this.stableIds=!0}canHandle(e){return typeof e.category=="string"&&typeof e.status=="string"&&typeof e.responsible_agency=="string"}parseAlerts(e){return this.canHandle(e)?[this._normalize(e)]:[]}_normalize(e){const r=$(e.publication_date),{severity:i,label:o,inferred:n}=Nl(me(e.category)),s=me(e.location),l=me(e.type),d=l?Jo(l):s||"Fire Incident",u=dt(e.latitude,e.longitude);return{id:me(e.external_id)||`nsw_rfs_${Il(s)}_${r}`,event:d,severity:i,severityLabel:o,certainty:"",urgency:"",sentTs:r,onsetTs:r,endsTs:0,description:Ol(e),instruction:"",url:Pl,headline:s||d,areaDesc:me(e.council_area)||s||"NSW",zones:[],eventCode:"",provider:"nsw_rfs",phase:"",severityInferred:n,certaintyInferred:!1,providerIcon:"mdi:fire",...u!==void 0&&{point:u}}}}function me(t){return typeof t=="string"?t:""}const Wl="Herausgeber",en=/^(?:amtliche\s+)?(?:(?:extreme\s+)?(?:unwetter)?warnung|vorabinformation)\s+(?:vor\s+)?/i;function Hl(t){return t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}function jl(t){if(!en.test(t))return t;const e=t.replace(en,"").trim();return e?Hl(e):t}function Gl(t,e){if(!e)return t;const r=`${Wl}: ${e}`;return t?`${t}

${r}`:r}class ql{constructor(){this.provider="nina",this.stableIds=!0}canHandle(e){return typeof e.recommended_actions=="string"&&typeof e.affected_areas=="string"&&typeof e.id=="string"}parseAlerts(e){if(!this.canHandle(e))return[];const r=ce(e.id);if(!r)return[];const i=ce(e.headline),o=ce(e.severity),n=be(o),s=$(ce(e.sent)),l=$(ce(e.start))||s,d=$(ce(e.expires));return[{id:r,event:jl(i)||"Warnung",severity:n,severityLabel:o?o.charAt(0).toUpperCase()+o.slice(1).toLowerCase():n.charAt(0).toUpperCase()+n.slice(1),certainty:"",urgency:"",sentTs:s,onsetTs:l,endsTs:d,description:Gl(ce(e.description),ce(e.sender)),instruction:ce(e.recommended_actions),url:Kl(ce(e.web)),headline:i,areaDesc:ce(e.affected_areas),zones:[],eventCode:"",provider:"nina",phase:"",severityInferred:!1,certaintyInferred:!1}]}}function ce(t){return typeof t=="string"?t:""}function Kl(t){return t.startsWith("http://")||t.startsWith("https://")?t:""}const tn="inmet";function ye(t){return typeof t=="string"?t:""}function rn(t){return typeof t=="string"||typeof t=="number"?String(t):""}function Yl(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function on(t){return Array.isArray(t)?t.filter(e=>typeof e=="string"&&e.trim()!=="").join(`

`):ye(t)}function ir(t){const e=ye(t).trim();return e?$(/(?:[zZ]|[+-]\d\d:?\d\d)$/.test(e)?e:`${e}-03:00`):0}function Vl(t){return t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}function Zl(t){const e=t.trim().toLowerCase();if(e){if(e.includes("vermel")||e==="red"||e==="#ff0000")return"extreme";if(e.includes("laranja")||e==="orange"||e==="#f96602")return"severe";if(e.includes("amarel")||e==="yellow"||e==="#fffe00")return"moderate"}}function Xl(t){const e=ye(t.severity),r=e.toLowerCase();if(r.includes("grande"))return{severity:"extreme",label:e,inferred:!1};if(r.includes("potencial"))return{severity:"moderate",label:e,inferred:!1};if(r==="perigo"||r.includes("perigo"))return{severity:"severe",label:e,inferred:!1};const i=Zl(ye(t.color));return i?{severity:i,label:e||Vl(ye(t.color)),inferred:!0}:{severity:"unknown",label:e||"Unknown",inferred:!0}}class Ql{constructor(){this.provider="inmet",this.feedSources=[tn],this.stableIds=!0}canHandle(e){return e.source===tn&&rn(e.alert_id)!==""&&typeof e.description=="string"&&typeof e.severity=="string"}parseAlerts(e){if(!this.canHandle(e))return[];const r=e,i=rn(r.alert_id),o=ye(r.description)||"INMET Alert",{severity:n,label:s,inferred:l}=Xl(r),d=ir(r.updated)||ir(r.start_date),u=ir(r.start_date)||d,_=ir(r.end_date),p=dt(r.latitude,r.longitude),v=r.finished?"Final":r.updated?"Update":r.future?"Future":"";return[{id:i||`inmet_${Yl(o)}_${u}`,event:o,severity:n,severityLabel:s,certainty:"",urgency:"",sentTs:d,onsetTs:u,endsTs:_,description:on(r.risks),instruction:on(r.instructions),url:ye(r.url),headline:o,areaDesc:"Brazil",zones:[],eventCode:"",provider:"inmet",phase:v,severityInferred:l,certaintyInferred:!1,providerIcon:ye(e.icon)||"mdi:alert",colorHint:ye(r.color),...p!==void 0&&{point:p}}]}}const nn=new Ka,Bt=[new pl,nn,new Ja,new Ul,new Ql,new ql,new ol,new al,new cl,new Bl,new ul],Xr=[/^sensor\..*alerts?$/i,/^sensor\..*warnings?$/i,/^binary_sensor\.meteoalarm/i,/^sensor\.dwd_weather_warnings/i,/^sensor\.weather_warnings_at_/i,/^sensor\..*cap_alert_/i,/^binary_sensor\..*_warn(?:ing|ung)_\d+$/i];function or(t){return Bt.some(e=>e.canHandle(t))}function Qr(){var t;const e=[];for(const r of Bt)for(const i of(t=r.feedSources)!=null?t:[])e.push({source:i,provider:r.provider});return e}function Jl(){return new Set(Bt.filter(t=>t.carriesPoint).map(t=>t.provider))}function nr(t,e){if(t){const r=Bt.find(i=>i.provider===t);if(r)return r}for(const r of Bt)if(r.canHandle(e))return r;return nn}function ne(t){if(!t)return[];const e=[];for(const r of[t.device,...t.devices||[]])r&&!e.includes(r)&&e.push(r);return e}function Jr(t,e,r){const i=r!=null?r:t.entities?Object.values(t.entities):null;if(!i)return[];const o=[];for(const n of i){if(!n||n.device_id!==e)continue;const s=n.entity_id;if(!s)continue;const l=t.states[s];!l||!or(l.attributes)||o.push(s)}return o}function sn(t,e,r){const i=r!=null?r:t.entities?Object.values(t.entities):null;if(!i)return[];const o=[];for(const n of i)(n==null?void 0:n.device_id)===e&&n.entity_id&&o.push(n.entity_id);return o}function ed(t,e,r){if(r)return r.some(o=>(o==null?void 0:o.device_id)===e);const i=t.entities;if(!i)return!1;for(const o of Object.values(i))if((o==null?void 0:o.device_id)===e)return!0;return!1}async function ei(t,e){const r=async()=>{const l=await t.sendMessagePromise({type:"config/entity_registry/list"});e(l!=null?l:[])};let i=null,o=!1;const n=()=>{if(i!==null){o=!0;return}r().catch(()=>{}),i=setTimeout(()=>{i=null,o&&(o=!1,n())},250)},s=await t.subscribeEvents(()=>n(),"entity_registry_updated");return await r(),()=>{i!==null&&(clearTimeout(i),i=null),o=!1,s()}}const td="weather-alerts-card:dismissals:v1:",rd=30*86400,ti="weather-alerts-card:dismissals-changed",id=3600;function ri(){return Math.floor(Date.now()/1e3)}function an(t){return`${t.severity}|${t.sentTs}|${t.endsTs}|${t.phase||""}`}function od(t,e){const r=[t,...e].filter(Boolean).sort().join(`
`);let i=2166136261;for(let o=0;o<r.length;o++)i^=r.charCodeAt(o),i=Math.imul(i,16777619);return(i>>>0).toString(16).padStart(8,"0")}function sr(t){return td+t}function ln(t){if(!t)return[];const e=[];if(t.entity&&e.push(t.entity),t.entities)for(const r of t.entities)r&&e.push(r);for(const r of[...ne(t)].sort())e.push(`device:${r}`);if(t.sources)for(const r of t.sources)r&&e.push(`source:${r}`);return e}function dn(t){const e=ln(t),[r,...i]=e;return r===void 0?"":od(r,i)}function ii(){try{return typeof localStorage!="undefined"?localStorage:null}catch{return null}}function oi(t){if(typeof window!="undefined")try{window.dispatchEvent(new CustomEvent(ti,{detail:{scope:t}}))}catch{}}function cn(t,e){if(typeof window=="undefined")return()=>{};const r=n=>{const s=n.detail;!s||s.scope!==t||e()},i=sr(t),o=n=>{n.key!==null&&n.key!==i||e()};return window.addEventListener(ti,r),window.addEventListener("storage",o),()=>{window.removeEventListener(ti,r),window.removeEventListener("storage",o)}}function ni(t,e=ri()){const r=new Map,i=ii();if(!i)return r;let o;try{o=i.getItem(sr(t))}catch{return r}if(!o)return r;let n;try{n=JSON.parse(o)}catch{return r}if(!n||typeof n!="object")return r;const s=n;for(const[l,d]of Object.entries(s)){if(!d||typeof d!="object")continue;const u=d;typeof u.sig!="string"||typeof u.dismissedAt!="number"||typeof u.lastSeenAt!="number"||e-u.lastSeenAt>rd||r.set(l,{sig:u.sig,dismissedAt:u.dismissedAt,lastSeenAt:u.lastSeenAt})}return r}function si(t,e){const r=ii();if(!r){oi(t);return}const i=sr(t);try{if(e.size===0)r.removeItem(i);else{const o={};for(const[n,s]of e)o[n]=s;r.setItem(i,JSON.stringify(o))}}catch{}oi(t)}function nd(t,e,r=ri()){const i=new Map(t);return i.set(e.id,{sig:an(e),dismissedAt:r,lastSeenAt:r}),i}function sd(t,e){if(!t.has(e))return t;const r=new Map(t);return r.delete(e),r}function ad(t){const e=ii();if(e)try{e.removeItem(sr(t))}catch{}oi(t)}function ld(t,e,r=ri()){if(e.size===0)return{visible:t,updatedMap:e};let i=null;const o=[];for(const n of t){const s=e.get(n.id);if(!s){o.push(n);continue}const l=an(n);if(s.sig!==l){i||(i=new Map(e)),i.delete(n.id),o.push(n);continue}r-s.lastSeenAt>id&&(i||(i=new Map(e)),i.set(n.id,{...s,lastSeenAt:r}))}return{visible:o,updatedMap:i!=null?i:e}}async function dd(t,e){var r,i;try{const o=await t.sendMessagePromise({type:"cap_alerts/geometry",geometry_ref:e}),n=(i=(r=o==null?void 0:o.features)==null?void 0:r[0])==null?void 0:i.geometry;return!n||typeof n.type!="string"?null:n}catch{return null}}const qe=1e-4,un=111.32,ai=85.05112878;function ar(t){return Math.max(-ai,Math.min(ai,t))}const cd=10,ud=150;function pd(t,e=cd){let r=1/0,i=1/0,o=-1/0,n=-1/0;for(const[x,A]of t)x<r&&(r=x),x>o&&(o=x),A<i&&(i=A),A>n&&(n=A);Number.isFinite(r)||(r=o=0,i=n=0);const s=(r+o)/2,l=(i+n)/2,d=Math.max(Math.cos(l*Math.PI/180),.01),u=e/un,_=e/(un*d);o-r<2*_&&(r=s-_,o=s+_);const p=Math.max((n-i)/2,u);n-i<2*u&&(i=l-u,n=l+u);const v=ar(n),b=Math.max(Math.min(i,v-2*p),-ai);return[r,b,o,v]}function lr(t){return`M${se(t.x)},${se(t.y)}l0.0001,0`}function hd(t,e,r,i){const[o,n,s,l]=t,d=(n+l)/2,u=Math.cos(d*Math.PI/180)||qe,_=Math.max((s-o)*u,qe),p=Math.max(l-n,qe),v=`0 0 ${se(_)} ${se(p)}`,b=(A,C)=>[(A-o)*u,l-C],x=pn(e).map(A=>hn(A,b)).filter(A=>A!==null);return{viewBox:v,polygonPaths:x,...r&&{marker:dr(r,b)},...i&&{referenceMarker:dr(i,b)}}}function dr([t,e],r){const[i,o]=r(t,e);return{x:Number(se(i)),y:Number(se(o))}}function pn(t){if(!t)return[];if(t.type==="Polygon"){const e=t.coordinates,r=Array.isArray(e)?e[0]:void 0;return r?[r]:[]}if(t.type==="MultiPolygon"){const e=t.coordinates;return Array.isArray(e)?e.map(r=>Array.isArray(r)&&r.length>0?r[0]:null).filter(r=>Array.isArray(r)&&r.length>0):[]}return[]}function hn(t,e){if(!Array.isArray(t)||t.length===0)return null;let r="";for(let i=0;i<t.length;i++){const o=t[i];if(!Array.isArray(o))continue;const[n,s]=o;if(n===void 0||s===void 0)continue;const[l,d]=e(n,s);r+=`${i===0?"M":"L"}${se(l)},${se(d)}`}return r?`${r}Z`:null}function se(t){return Number(t.toFixed(5)).toString()}const _n="/api/map_tiles/raster/{z}/{x}/{y}.png",_d=_n,gn="\xA9 OpenStreetMap contributors",gd=1200*1e3;function md(t,e){return`${(t||"").replace(/\/+$/,"")}${_n}?token=${encodeURIComponent(e)}`}async function fd(t){try{const e=await t.sendMessagePromise({type:"map_tiles/access_token"}),r=e==null?void 0:e.token;return typeof r=="string"&&r.length>0?r:null}catch{return null}}const Ce=256,mn=512,fn=1,vd=16,bd=16,vn=.15;function zt(t,e,r){const i=Ce*Math.pow(2,r),o=(t+180)/360*i,n=ar(e)*Math.PI/180,s=(1-Math.log(Math.tan(n)+1/Math.cos(n))/Math.PI)/2*i;return[o,s]}function yd(t,e,r,i){for(let o=vd;o>=fn;o--){const[n,s]=zt(t,i,o),[l,d]=zt(r,e,o);if(l-n<=mn&&d-s<=mn)return o}return fn}function wd(t,e,r,i){return t.split("{z}").join(String(e)).split("{x}").join(String(r)).split("{y}").join(String(i)).split("{s}").join("a")}function xd(t,e,r){const i=(r==null?void 0:r.tileUrl)||_d,o=(r==null?void 0:r.attribution)||gn,[n,s,l,d]=t,u=Math.max((l-n)*vn,qe),_=Math.max((d-s)*vn,qe),p=n-u,v=l+u,b=ar(s-_),x=ar(d+_),A=yd(p,b,v,x),C=Math.pow(2,A),[D,N]=zt(p,x,A),[G,W]=zt(v,b,A),q=Math.max(G-D,qe),de=Math.max(W-N,qe),K=`0 0 ${se(q)} ${se(de)}`,Te=`${se(q)} / ${se(de)}`,Ke=[],H=Math.floor(D/Ce),ue=Math.floor((G-1e-6)/Ce),Ye=Math.floor(N/Ce),ht=Math.floor((W-1e-6)/Ce);if((ue-H+1)*(ht-Ye+1)<=bd){for(let R=Ye;R<=ht;R++)if(!(R<0||R>=C))for(let we=H;we<=ue;we++){const _t=(we%C+C)%C;Ke.push({href:wd(i,A,_t,R),x:Number((we*Ce-D).toFixed(3)),y:Number((R*Ce-N).toFixed(3)),size:Ce})}}const fe=(R,we)=>{const[_t,Ve]=zt(R,we,A);return[_t-D,Ve-N]},Nt=pn(e).map(R=>hn(R,fe)).filter(R=>R!==null);return{viewBox:K,aspect:Te,tiles:Ke,polygonPaths:Nt,attribution:o,...(r==null?void 0:r.point)&&{marker:dr(r.point,fe)},...(r==null?void 0:r.referencePoint)&&{referenceMarker:dr(r.referencePoint,fe)}}}function li(t,e,r){t.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))}function di(t){return(t==null?void 0:t.tap_action)!==void 0}function Ed(t,e,r,i){var o,n,s,l;switch(r.action){case"more-info":{const d=(o=r.entity)!=null?o:i;if(!d)return;li(t,"hass-more-info",{entityId:d});break}case"navigate":{const d=r.navigation_path;if(!d)return;const u=r.navigation_replace===!0;u?history.replaceState(null,"",d):history.pushState(null,"",d),li(window,"location-changed",{replace:u});break}case"url":{if(!r.url_path)return;window.open(r.url_path,"_blank","noopener");break}case"toggle":{const d=(n=r.entity)!=null?n:i;if(!d||!(e!=null&&e.callService))return;e.callService("homeassistant","toggle",{entity_id:d});break}case"call-service":case"perform-action":{const d=(s=r.perform_action)!=null?s:r.service;if(!d||!(e!=null&&e.callService))return;const u=d.indexOf(".");if(u<0)return;const _=d.slice(0,u),p=d.slice(u+1);e.callService(_,p,(l=r.data)!=null?l:r.service_data,r.target);break}case"fire-dom-event":{li(t,"ll-custom",r);break}}}const Ad=Vi`
  @keyframes pulse-border {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--wac-fg) 70%, transparent); }
    70% { box-shadow: 0 0 0 6px color-mix(in srgb, var(--wac-fg) 0%, transparent); }
    100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--wac-fg) 0%, transparent); }
  }

  /* Indeterminate "ongoing" breathe. Peaks at the full progress color (same
     brightness as an active bar) and eases down to a still-prominent ~70%, so
     ongoing reads as full-strength-and-alive rather than dimmed — opacity is not
     a phase cue here (direction/fill/labels carry the phase). */
  @keyframes ongoing-pulse {
    0% { background: var(--wac-progress-fg); }
    50% { background: color-mix(in srgb, var(--wac-progress-fg) 70%, transparent); }
    100% { background: var(--wac-progress-fg); }
  }

  /* Shared, direction-parametrized stripe march. --wac-flow (±1) is set by the
     phase and flips the direction; --wac-stripe-tile is the loop tile (24px full,
     12px compact) so one keyframe loops seamlessly at either size. A negative
     flow reproduces the former direction-specific marches (preparation flows
     left); a positive flow marches right (e.g. a striped active fill). */
  @keyframes stripe-march {
    to { background-position: calc(var(--wac-flow, 1) * var(--wac-stripe-tile, 24px)) 0; }
  }

  /* Highlight sweep. Authored canonically in the positive (rightward) direction
     and mirrored by --wac-flow: at flow 1 it sweeps -75%→175%, at flow -1 it
     sweeps 175%→-75%. The old fixed -75%→175% is the flow-1 case. */
  @keyframes fill-shimmer {
    0% { background-position: calc(50% - var(--wac-flow, 1) * 125%) 0; }
    60% { background-position: calc(50% + var(--wac-flow, 1) * 125%) 0; }
    100% { background-position: calc(50% + var(--wac-flow, 1) * 125%) 0; }
  }

  :host {
    display: block;
  }

  /* Public surface-theming API (--wac-* custom properties). Set these from
     theme YAML, card_mod, or a dashboard style: block. Each is applied inline
     as var(--token, <default>) at its use site (no :host declaration), so one
     token can drive both full and compact layouts while preserving each site's
     current default when unset. Documented in the README token table.

       --wac-card-background   outer wrapper fill.  default:
                               var(--ha-card-background, var(--card-background-color))
       --wac-alert-background  per-alert fill.       default: transparent
                               (reveals the outer surface — no compounding)
       --wac-alert-border-radius  per-alert corners. default: 12px full / 8px compact
       --wac-alert-border      per-alert border.     default: 1px solid var(--divider-color)
       --wac-alert-shadow      per-alert shadow.     default:
                               var(--ha-card-box-shadow, 0 2px 5px rgba(0,0,0,0.1))
       --wac-alert-gap         inter-alert vgap.     default: 16px full / 4px compact */

  /* Positioning context for the degraded corner dot (see .degraded-dot).
     The outer surface is the single painted layer: inner .alert-card boxes
     default to transparent (see --wac-alert-background) and reveal this fill,
     so a translucent theme renders its alpha exactly once. The fallback chain
     mirrors HA's own default so an unset --wac-card-background is identical to
     today's ha-card background. */
  ha-card {
    position: relative;
    background: var(--wac-card-background, var(--ha-card-background, var(--card-background-color)));
  }

  .error {
    padding: 16px;
    color: var(--error-color, red);
  }

  /* Availability channel: how the card signals that some (or all) configured
     sources are dark, independent of the alert list. Two anchored forms — a
     full-width strip above real alert content ('message'), or a corner dot
     floating over it ('compact', at zero layout cost). With no alerts to anchor
     to, neither renders; the empty state carries the caveat instead (see
     .no-alerts-caveat), so a bare all-clear never sits next to a stale source. */
  .degraded-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    /* Warning wash carries the tone; text stays on a legible token so it passes
       contrast on a white card (raw --warning-color as text does not). Derived
       from --warning-color via color-mix (the codebase's tint idiom) so a
       custom theme's warning color is always respected — the icon, dot, and this
       wash share one source. Unsupported engines just drop the tint. */
    background: color-mix(in srgb, var(--warning-color) 14%, transparent);
    color: var(--primary-text-color);
    font-size: 0.85em;
    border-bottom: 1px solid var(--divider-color);
  }

  .degraded-badge ha-icon {
    color: var(--warning-color);
    --mdc-icon-size: 18px;
    flex-shrink: 0;
  }

  /* Corner warning badge for 'compact' — an annotation on the alert(s) beneath
     it, so it is positioned against the ha-card box and ringed in the card
     background to stay legible over any underlying content, in either theme.
     An inverted alert glyph (white on the amber disc) conveys "unavailable"
     where a bare dot would not. */
  .degraded-dot {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--warning-color);
    /* Ring intentionally tracks the outer ha-card surface (--card-background-color),
       not --wac-alert-background: the dot floats over the ha-card box, and
       --wac-alert-background is transparent by default. */
    box-shadow: 0 0 0 2px var(--card-background-color, #fff);
    z-index: 2;
  }

  .degraded-dot ha-icon {
    /* Punch the glyph to the card background, matching how the pill badges sit
       their content on a colored chip rather than plain white. */
    color: var(--card-background-color, #fff);
    --mdc-icon-size: 12px;
  }

  /* --- COLOR MAPPING --- */
  .severity-extreme,
  .severity-severe { --color: var(--error-color); --color-rgb: 244, 67, 54; --color-on: #ffffff; }
  .severity-moderate { --color: var(--warning-color); --color-rgb: 255, 152, 0; --color-on: #1a1a1a; }
  .severity-minor { --color: var(--info-color); --color-rgb: 33, 150, 243; --color-on: #ffffff; }
  .severity-unknown { --color: var(--secondary-text-color); --color-rgb: 128, 128, 128; --color-on: var(--primary-text-color); }

  /* --- CARD CONTAINER --- */
  .alert-card {
    /* Two foreground tokens, both default to the raw theme color:
         --wac-fg          — icon + label text (boost-{light,dark}, ~2:1 tier)
         --wac-progress-fg — progress-bar fill (progress-boost-{light,dark},
                             ~1.3:1 tier — only kicks in for near-invisible
                             tints like yellow Tornado Watch)
       Boost rules below override these only when the event's color fails
       the corresponding threshold on the active side (precomputed per
       NWS/MeteoAlarm entry). HA's --primary-text-color flips with theme
       mode; --text-primary-color is the "text on accent" color — do not
       confuse them. */
    --wac-fg: var(--color);
    --wac-progress-fg: var(--color);
    /* progressFill:background wash tokens (Bubble-Card-style whole-row fill).
       Deliberately low-opacity so alert text stays legible over translucent
       themes (#215); all three overridable via theme YAML / card_mod / --wac-*.
       Only consumed by the .fill-mode-background rules — inert in track mode. */
    --wac-progress-fill-color: var(--wac-progress-fg);
    --wac-progress-fill-opacity: 0.10;
    --wac-progress-fill-expired-opacity: 0.06;
    position: relative;
    margin-bottom: var(--wac-alert-gap, 16px);
    padding: 0;
    border-radius: var(--wac-alert-border-radius, 12px);
    background: var(--wac-alert-background, transparent);
    border: var(--wac-alert-border, 1px solid var(--divider-color));
    box-shadow: var(--wac-alert-shadow, var(--ha-card-box-shadow, 0 2px 5px rgba(0,0,0,0.1)));
    overflow: hidden;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.15s ease-out;
  }

  /* Contrast boost: only when theme mode matches the failing side.
     Scoped to event-color themes (nws, meteoalarm). Severity theme
     never receives these classes — its colors are HA theme tokens. */
  [data-theme-mode="light"] .alert-card.boost-light,
  [data-theme-mode="dark"] .alert-card.boost-dark {
    --wac-fg: color-mix(in oklch, var(--color) 65%, var(--primary-text-color));
  }
  [data-theme-mode="light"] .alert-card.progress-boost-light,
  [data-theme-mode="dark"] .alert-card.progress-boost-dark {
    --wac-progress-fg: color-mix(in oklch, var(--color) 65%, var(--primary-text-color));
  }

  /* Badge text follows the card background color (knockout effect) so
     saturated pills read as windows into the page rather than dark markings
     on color. Event-color themes emit both --color-on-light and
     --color-on-dark inline; this rule picks the right one per theme mode. */
  [data-theme-mode="light"] .alert-card { --color-on: var(--color-on-light, #ffffff); }
  [data-theme-mode="dark"]  .alert-card { --color-on: var(--color-on-dark,  #1a1a1a); }

  /* Dark themes need a touch more wash to read at the same strength. */
  [data-theme-mode="dark"] .alert-card { --wac-progress-fill-opacity: 0.14; }

  .alert-card:last-child {
    margin-bottom: 0;
  }

  /* tap_action: the whole row is a keyboard-operable action target (the inline
     expand affordance is dropped). Only applied to actionable rows (present AND
     not action:none); inert rows carry no cursor/role/focus. */
  .alert-card.tappable {
    cursor: pointer;
  }
  .alert-card.tappable:focus-visible {
    outline: 2px solid var(--wac-focus-ring, var(--primary-color));
    outline-offset: 2px;
  }

  .alert-card::before {
    content: "";
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 6px;
    background: var(--color);
  }

  .alert-card.severity-extreme,
  .alert-card.severity-severe {
    animation: pulse-border 2s infinite;
    border-color: var(--color);
  }

  /* --- HEADER --- */
  .alert-header-row {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
  }

  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(var(--color-rgb), 0.1);
    color: var(--wac-fg);
    width: calc(44px * var(--wac-scale, 1));
    height: calc(44px * var(--wac-scale, 1));
    border-radius: 50%;
    flex-shrink: 0;
    box-sizing: border-box;
    border: 2px solid transparent;
    transition: border 0.2s, background 0.2s, color 0.2s;
  }

  /* Temporal state: active — icon "lights up" with solid ring */
  .active .icon-box {
    border-color: var(--color);
    background: rgba(var(--color-rgb), 0.12);
  }

  /* Temporal state: expired — dimmed */
  .expired .icon-box {
    border-color: var(--divider-color);
    opacity: 0.5;
  }
  .expired {
    opacity: 0.6;
  }

  /* Temporal state: preparation — dashed ring */
  .preparation .icon-box {
    border: 2px dashed var(--color);
  }

  /* Per-phase icon-ring border-style override (iconBorderStyle). Emitted as
     icon-border-<style> on the alert-card root, resolved per-alert from the
     phase. Only border-style is overridden; the phase rules above already set
     the ring color (var(--color)). Placed after the phase rules so the equal-
     specificity override wins on source order. Expired never receives a class. */
  .icon-border-dashed .icon-box {
    border-style: dashed;
  }
  .icon-border-solid .icon-box {
    border-style: solid;
  }
  .icon-box ha-icon { --mdc-icon-size: calc(26px * var(--wac-scale, 1)); }

  .info-box { flex-grow: 1; }

  .title-row { margin-bottom: 4px; }
  .alert-title {
    font-size: calc(1.15rem * var(--wac-scale, 1));
    font-weight: 600;
    line-height: 1.2;
    color: var(--primary-text-color);
  }

  .alert-headline {
    font-size: calc(0.8rem * var(--wac-scale, 1));
    line-height: 1.3;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .area-desc {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    font-size: calc(0.8rem * var(--wac-scale, 1));
    line-height: 1.4;
    color: var(--secondary-text-color);
    margin-bottom: 6px;
    max-width: 100%;
    opacity: 0.85;
  }
  .area-desc ha-icon {
    flex-shrink: 0;
    margin-top: 1px;
    --mdc-icon-size: calc(13px * var(--wac-scale, 1));
    width: calc(13px * var(--wac-scale, 1));
    height: calc(13px * var(--wac-scale, 1));
    opacity: 0.7;
  }
  .area-desc-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Compact expanded headline + area-desc get consistent inner padding */
  .compact .alert-expanded .alert-headline {
    padding: 4px 12px 0;
    margin-bottom: 2px;
  }
  .compact .alert-expanded .area-desc {
    padding: 4px 12px 0;
    margin-bottom: 4px;
  }

  .badges-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    line-height: 1;
    font-size: calc(0.75rem * var(--wac-scale, 1));
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .severity-badge {
    background: var(--color);
    color: var(--color-on);
    font-weight: 700;
  }
  .certainty-badge {
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color);
  }
  .phase-badge {
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color);
  }
  .event-code-badge {
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color);
    font-family: monospace;
    text-transform: none;
    letter-spacing: 1px;
  }
  .badge-inferred {
    font-style: italic;
  }
  .badge-inferred::before {
    content: '~';
    opacity: 0.6;
    margin-right: 1px;
  }

  .zones-badge {
    background: transparent;
    color: var(--secondary-text-color);
    border: none;
    padding: 2px 0;
    font-weight: 400;
  }
  .zones-badge::before { content: '('; opacity: 0.5; }
  .zones-badge::after { content: ')'; opacity: 0.5; }

  /* --- PROGRESS --- */
  .progress-section {
    padding: 0 16px 16px 16px;
  }

  .progress-labels {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    font-size: calc(0.85rem * var(--wac-scale, 1));
    color: var(--primary-text-color);
    margin-bottom: 6px;
  }

  .label-left, .label-center, .label-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .label-sub {
    font-size: calc(0.7rem * var(--wac-scale, 1));
    color: var(--secondary-text-color);
    text-transform: uppercase;
  }
  .label-center {
    text-align: center;
    font-weight: bold;
    color: var(--wac-fg);
    white-space: nowrap;
  }
  .label-right { text-align: right; }

  .progress-track {
    height: 8px;
    background: var(--secondary-background-color);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  .progress-fill {
    height: 100%;
    position: absolute;
    top: 0;
    transition: width 0.3s ease;
  }

  /* Phase classes supply a FILLED base (progress color) + flow direction; the
     .deco-* classes below add only the pattern/animation on top. A filled base
     is what makes solid/shimmer/pulse visible in any phase. Every phase renders
     at full opacity — dimness is not a phase cue (phase is read from the stripe
     flow direction, the fill behavior, the icon ring, and the labels). Striped
     is the one decoration that is never a filled bar: it is a "barber pole" of
     solid progress-color stripes on an empty track in every phase (see the
     .deco-striped override below). */
  .active .progress-fill {
    background-color: var(--wac-progress-fg);
  }

  .expired .progress-fill {
    background-color: var(--divider-color);
  }

  .preparation .progress-fill {
    background-color: var(--wac-progress-fg);
    --wac-flow: -1;
  }
  /* Striped is a barber pole in every phase: solid color stripes on an empty
     track, never a filled bar. Clear whatever fill the phase set. Equal
     specificity to the phase rules, placed after them so it wins on source
     order in full mode. */
  .deco-striped .progress-fill {
    background-color: transparent;
  }

  /* --- PROGRESS DECORATIONS (pattern + animation, phase-independent) ---
     Emitted as deco-<pattern> on the alert-card root from progressStyle. Each
     rule pairs a full-mode selector (.deco-x .progress-fill) with its compact
     equivalent (.compact .deco-x.alert-card::before). Direction/tile/duration are
     supplied by the phase via --wac-flow / --wac-stripe-tile / --wac-stripe-dur so
     any pattern adopts the phase it lands in. */
  .deco-solid .progress-fill,
  .compact .deco-solid.alert-card::before {
    background-image: none;
    animation: none;
  }

  .deco-striped .progress-fill,
  .compact .deco-striped.alert-card::before {
    background-image: linear-gradient(
      -45deg,
      var(--wac-progress-fg) 25%,
      transparent 25%,
      transparent 50%,
      var(--wac-progress-fg) 50%,
      var(--wac-progress-fg) 75%,
      transparent 75%
    );
    background-size: var(--wac-stripe-tile, 24px) var(--wac-stripe-tile, 24px);
    animation: stripe-march var(--wac-stripe-dur, 6s) linear infinite;
  }

  .deco-shimmer .progress-fill,
  .compact .deco-shimmer.alert-card::before {
    background-image: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
    background-size: 40% 100%;
    background-repeat: no-repeat;
    animation: fill-shimmer 5s ease-in-out infinite;
  }

  .deco-pulse .progress-fill,
  .compact .deco-pulse.alert-card::before {
    animation: ongoing-pulse 5s infinite;
  }

  /* --- DETAILS (custom toggle, not native <details>) --- */
  .alert-details-section {
    border-top: 1px solid var(--divider-color);
    background: rgba(var(--rgb-primary-text-color), 0.02);
  }

  .details-summary {
    padding: 10px 16px;
    font-size: calc(0.9rem * var(--wac-scale, 1));
    font-weight: 500;
    color: var(--secondary-text-color);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
    user-select: none;
  }
  .details-summary:hover {
    background: rgba(var(--color-rgb), 0.05);
    color: var(--primary-text-color);
  }

  .chevron {
    transition: transform 0.2s;
  }
  .chevron.expanded {
    transform: rotate(180deg);
  }

  .details-content {
    padding: 16px;
    font-size: calc(0.9rem * var(--wac-scale, 1));
  }

  /* Details Grid */
  .meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px dashed var(--divider-color);
  }

  .meta-item { display: flex; flex-direction: column; }
  .meta-label {
    font-size: calc(0.7rem * var(--wac-scale, 1));
    color: var(--secondary-text-color);
    text-transform: uppercase;
  }
  .meta-value {
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .meta-relative {
    font-size: calc(0.75rem * var(--wac-scale, 1));
    color: var(--secondary-text-color);
    font-style: italic;
  }

  /* --- GEOMETRY MINI-MAP (opt-in): cap_alerts polygon/bbox, or a marker at a
     point-incident's location (NSW RFS and any point-carrying source) --- */
  .alert-geometry {
    display: block;
    width: 100%;
    max-width: 260px;
    height: 120px;
    margin: 0 auto 16px;
    /* No basemap — the shape reads against the panel background. */
  }
  .alert-geometry .geometry-frame {
    fill: rgba(var(--color-rgb), 0.04);
    stroke: var(--divider-color);
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
  }
  .alert-geometry .geometry-shape {
    fill: rgba(var(--color-rgb), 0.18);
    stroke: var(--wac-fg, var(--color));
    stroke-width: 1.5px;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }
  /* A synthesized point frame is an invented viewport, not an affected area —
     the tint would claim otherwise, so it goes untinted. */
  .alert-geometry.point .geometry-frame {
    fill: none;
  }
  /* Markers are sub-pixel paths sized entirely by a round-capped, non-scaling
     stroke, so they stay the same on-screen size whatever the viewBox scale.
     The incident is the subject: a filled, severity-colored dot. The user's
     own location is reference chrome: a smaller neutral ring, built from a
     neutral outer dot with a background-colored core stacked on top — shape
     and weight carry the hierarchy, not a new hue. */
  .alert-geometry .geometry-marker {
    fill: none;
    stroke: var(--wac-fg, var(--color));
    stroke-width: 10px;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
  }
  .alert-geometry .geometry-marker-casing {
    fill: none;
    stroke: rgba(255, 255, 255, 0.85);
    stroke-width: 14px;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
  }
  .alert-geometry .geometry-reference-ring {
    fill: none;
    stroke: var(--secondary-text-color);
    stroke-width: 8px;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
  }
  .alert-geometry .geometry-reference-core {
    fill: none;
    stroke: var(--wac-surface, var(--card-background-color, #fff));
    stroke-width: 4px;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
  }

  /* Map style: raster tiles behind the polygon. The wrapper carries an inline
     aspect-ratio (matching the tile viewBox) so tiles fill with no letterbox. */
  .alert-geometry-map {
    position: relative;
    display: block;
    width: 100%;
    max-width: 320px;
    max-height: 220px;
    margin: 0 auto 16px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--divider-color);
  }
  .alert-geometry.map {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    max-width: none;
  }
  .alert-geometry.map image {
    image-rendering: auto;
  }
  /* HA's proxy serves one light raster. Dark themes invert the tile layer the
     way HA's own map does; a theme that sets --map-filter wins either way. The
     polygon and frame sit outside the group so they keep their true colors. */
  .alert-geometry.map .geometry-tiles {
    filter: var(--map-filter, none);
  }
  .alert-geometry.map.dark .geometry-tiles {
    filter: var(--map-filter, invert(0.9) hue-rotate(170deg) brightness(1.5) contrast(1.2) saturate(0.3));
  }
  /* Over tiles the bbox frame is just a hairline; the polygon does the work. */
  .alert-geometry.map .geometry-frame {
    fill: none;
    stroke: rgba(var(--rgb-primary-text-color, 128, 128, 128), 0.25);
  }
  .alert-geometry.map .geometry-shape {
    fill: rgba(var(--color-rgb), 0.22);
    stroke-width: 2px;
  }
  /* White casing under the colored stroke keeps the outline legible over busy
     tiles (light or dark). */
  .alert-geometry.map .geometry-shape-casing {
    fill: none;
    stroke: rgba(255, 255, 255, 0.85);
    stroke-width: 4px;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }
  /* Over tiles the dot reads slightly smaller under its white casing, and the
     ring's core is white like the casing (tiles are light, or inverted from
     light) rather than the card surface. */
  .alert-geometry.map .geometry-marker {
    stroke-width: 9px;
  }
  .alert-geometry.map .geometry-reference-core {
    stroke: rgba(255, 255, 255, 0.95);
  }
  .geometry-attrib {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 9px;
    line-height: 1.2;
    padding: 1px 4px;
    color: #333;
    background: rgba(255, 255, 255, 0.7);
    border-top-left-radius: 4px;
    pointer-events: none;
  }

  .text-block { margin-bottom: 16px; }
  .text-label {
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--primary-text-color);
  }
  .text-body {
    white-space: pre-wrap;
    color: var(--secondary-text-color);
    line-height: 1.5;
    background: var(--primary-background-color);
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--divider-color);
  }

  .provider-hint {
    font-size: calc(0.7rem * var(--wac-scale, 1));
    color: var(--secondary-text-color);
    letter-spacing: 0.5px;
    opacity: 0.5;
    margin-right: 6px;
    flex-shrink: 0;
  }
  .provider-hint::after {
    content: '·';
    margin-left: 6px;
    opacity: 0.6;
  }
  .footer-link { text-align: right; margin-top: 10px; }
  .footer-link a {
    color: var(--wac-fg);
    text-decoration: none;
    font-weight: 500;
    font-size: calc(0.85rem * var(--wac-scale, 1));
  }

  /* --- DISMISS BUTTON --- */
  .dismiss-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    flex-shrink: 0;
    width: calc(24px * var(--wac-scale, 1));
    height: calc(24px * var(--wac-scale, 1));
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
    opacity: 0.6;
    transition: opacity 0.2s, background 0.2s;
    --mdc-icon-size: calc(18px * var(--wac-scale, 1));
  }
  .dismiss-button:hover,
  .dismiss-button:focus-visible {
    opacity: 1;
    background: rgba(var(--rgb-primary-text-color, 128, 128, 128), 0.08);
    outline: none;
  }
  /* Full layout: corner-tuck the dismiss button as window-decoration so it
     doesn't reserve space in the flex flow (which would squeeze title,
     headline, area, and badges). Labeled variant overrides position below
     to sit flush against the card's rounded corner. */
  .alert-header-row:not(.compact-row) > .dismiss-button {
    position: absolute;
    top: 6px;
    right: 6px;
    margin-left: 0;
  }
  .compact-row > .dismiss-button {
    margin-left: 4px;
  }

  /* Labeled dismiss button (full layout only) — window-decoration placement:
     absolute at top-right of the card, outside the header flex flow, so title,
     headline, area, and badges flow full row width. The button is visually
     subtle and overlays the rare long title that reaches its column. */
  .dismiss-button.labeled {
    border-left: 1px solid var(--divider-color);
    border-bottom: 1px solid var(--divider-color);
    border-radius: 12px;
    padding: 2px 8px 2px 4px;
    color: var(--secondary-text-color);
    opacity: 1;
    gap: 4px;
    font-size: calc(0.78rem * var(--wac-scale, 1));
    width: auto;
    height: auto;
    --mdc-icon-size: calc(16px * var(--wac-scale, 1));
  }
  .dismiss-button.labeled:hover,
  .dismiss-button.labeled:focus-visible {
    background: rgba(var(--rgb-primary-text-color, 128, 128, 128), 0.08);
    opacity: 1;
  }
  .alert-header-row:not(.compact-row) > .dismiss-button.labeled {
    position: absolute;
    top: 0px;
    right: 0px;
    margin-left: 0;
  }
  /* Compact row: revert labeled button to icon-only */
  .compact-row > .dismiss-button.labeled {
    border: none;
    border-radius: 50%;
    padding: 0;
    color: var(--secondary-text-color);
    gap: 0;
    font-size: inherit;
    width: calc(24px * var(--wac-scale, 1));
    height: calc(24px * var(--wac-scale, 1));
    --mdc-icon-size: calc(18px * var(--wac-scale, 1));
  }
  .compact-row > .dismiss-button.labeled span {
    display: none;
  }

  /* --- SWIPE GESTURE ---
     swipe-enabled: applied whenever pointer drag-to-dismiss is wired up. Sets
     touch-action so vertical scroll stays native while horizontal is reserved
     for the JS gesture; shows the grab cursor on hover. */
  .alert-card.swipe-enabled {
    touch-action: pan-y;
    cursor: grab;
  }
  .alert-card.swiping {
    transition: none !important;
    user-select: none;
    cursor: grabbing;
  }
  .alert-card.swipe-exit {
    transform: translateX(-110%) !important;
    opacity: 0 !important;
    transition: transform 0.2s ease-in, opacity 0.2s ease-in !important;
  }
  @media (prefers-reduced-motion: reduce) {
    .alert-card.swipe-exit {
      transition: none !important;
    }
  }

  /* --- COMPACT LAYOUT --- */
  .compact .alert-card {
    margin-bottom: var(--wac-alert-gap, 4px);
    border-radius: var(--wac-alert-border-radius, 8px);
  }

  /* Re-assert the last-child gap reset for compact: the generic
     .alert-card:last-child rule above has equal specificity but loses on
     source order to .compact .alert-card, which would otherwise leave a
     trailing --wac-alert-gap below the last chip (visible as stray bottom
     margin, and previously hand-patched with margin-bottom:0 !important). */
  .compact .alert-card:last-child {
    margin-bottom: 0;
  }

  .compact .alert-card::before {
    display: block;
    top: auto;
    bottom: 0;
    left: var(--progress, 0%);
    right: 0;
    width: auto;
    height: 4px;
    border-radius: 0;
    z-index: 1;
    /* Compact mini-bar uses a smaller stripe tile and faster march than the
       full progress-fill; scoped to the ::before so the compact-expanded
       .progress-fill keeps the 24px / 6s defaults. */
    --wac-stripe-tile: 12px;
    --wac-stripe-dur: 3s;
  }

  .compact .alert-header-row.compact-row {
    padding: 8px 12px;
    gap: 10px;
    cursor: pointer;
    user-select: none;
  }
  .compact .alert-header-row.compact-row:hover {
    background: rgba(var(--color-rgb), 0.05);
  }

  .compact .icon-box {
    width: calc(32px * var(--wac-scale, 1));
    height: calc(32px * var(--wac-scale, 1));
  }
  .compact .icon-box ha-icon {
    --mdc-icon-size: calc(18px * var(--wac-scale, 1));
  }

  .compact .alert-title {
    font-size: calc(0.95rem * var(--wac-scale, 1));
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .compact-time {
    font-size: calc(0.8rem * var(--wac-scale, 1));
    color: var(--wac-fg);
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .compact-chevron {
    color: var(--secondary-text-color);
    transition: transform 0.2s;
    flex-shrink: 0;
    --mdc-icon-size: calc(20px * var(--wac-scale, 1));
  }
  .compact-chevron.expanded {
    transform: rotate(180deg);
  }

  .compact .alert-expanded {
    padding-top: 4px;
    border-top: 1px solid var(--divider-color);
  }

  /* Compact progress track (bottom border) */
  .compact .alert-card::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--secondary-background-color);
  }
  /* Compact phase rules mirror the full-mode split: base color / position /
     flow only; the pattern + animation comes from the .deco-* classes above. */
  .compact .active.alert-card::before {
    background-color: var(--wac-progress-fg);
  }
  .compact .expired.alert-card::before {
    background-color: var(--divider-color);
  }
  .compact .preparation.alert-card::before {
    background-color: var(--wac-progress-fg);
    --wac-flow: -1;
  }
  /* Compact striped: barber pole on an empty track (mirrors full mode). These
     phase+deco selectors outrank the compact phase rules above, so the fill is
     cleared in either source order. All phases render full-strength progress-
     color stripes — no dim tint. */
  .compact .preparation.deco-striped.alert-card::before,
  .compact .active.deco-striped.alert-card::before,
  .compact .ongoing.deco-striped.alert-card::before {
    background-color: transparent;
  }
  .compact .ongoing.alert-card::before {
    left: 0;
    /* Color longhand only, so a non-default ongoing pattern's background-image
       (from a .deco-* class) survives; the shorthand would reset it. */
    background-color: var(--wac-progress-fg);
  }

  /* --- PROGRESS FILL: whole-row wash (progressFill: background) ---
     Opt-in Bubble-Card-style surface: instead of the thin track, the entire
     alert row fills as a low-opacity wash of the progress color, behind the
     content, growing to the --progress point (the exact geometry the thin
     track uses today). Full mode paints the wash on .alert-card::after (::before
     is the 6px accent bar); compact grows its existing ::before fill to full
     height. Content wrappers are lifted to z-index:1 so text stays legible. */

  /* Full-mode wash */
  .fill-mode-background:not(.compact) .alert-card::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--progress, 0%);
    right: 0;
    z-index: 0;
    background: var(--wac-progress-fill-color);
    opacity: var(--wac-progress-fill-opacity);
    transition: left 0.3s ease;
    pointer-events: none;
  }
  .fill-mode-background:not(.compact) .expired.alert-card::after {
    left: 0;
    opacity: var(--wac-progress-fill-expired-opacity);
  }
  /* Hide the now-redundant thin track wherever it renders (the full-mode section
     and the compact expanded section both draw one) — the textual progress
     labels stay. */
  .fill-mode-background .progress-track {
    display: none;
  }

  /* Compact-mode wash: grow the existing ::before fill from a 4px bottom bar to
     a full-height surface, recolor it to the wash token, drop the grey track
     base (::after), and keep it a quiet solid (no per-phase deco texture). */
  .fill-mode-background.compact .alert-card::before {
    top: 0;
    height: auto;
    z-index: 0;
    opacity: var(--wac-progress-fill-opacity);
    background-image: none;
    animation: none;
  }
  .fill-mode-background.compact .active.alert-card::before,
  .fill-mode-background.compact .preparation.alert-card::before,
  .fill-mode-background.compact .ongoing.alert-card::before {
    background-color: var(--wac-progress-fill-color);
  }
  .fill-mode-background.compact .expired.alert-card::before {
    left: 0;
    background-color: var(--wac-progress-fill-color);
    opacity: var(--wac-progress-fill-expired-opacity);
  }
  .fill-mode-background.compact .alert-card::after {
    display: none;
  }

  /* Lift content above the z-index:0 wash so text/icons never sit under it. */
  .fill-mode-background .alert-header-row,
  .fill-mode-background .alert-expanded,
  .fill-mode-background .progress-section,
  .fill-mode-background .alert-details-section {
    position: relative;
    z-index: 1;
  }

  /* --- NO ANIMATIONS --- */
  .no-animations .alert-card {
    animation: none !important;
  }
  .no-animations .progress-fill,
  .no-animations .alert-card::before,
  .no-animations .alert-card::after {
    animation: none !important;
    transition: none !important;
  }
  .no-animations .deco-shimmer .progress-fill,
  .no-animations.compact .deco-shimmer.alert-card::before {
    background-position: -33% 0 !important;
  }

  /* --- PREVIEW LABEL --- */
  .preview-label {
    text-align: center;
    font-size: calc(0.75rem * var(--wac-scale, 1));
    font-style: italic;
    color: var(--secondary-text-color);
    padding: 8px 16px 0;
    opacity: 0.7;
  }

  /* --- PER-ALERT DETAIL POP-UP (tap_action: { action: details }) --- */
  /* The dialog renders as a sibling of <ha-card>, outside the context that
     normally supplies the per-row tokens (data-theme-mode on the card root,
     --color/--wac-fg on .alert-card). So .detail-dialog-body carries the former
     and its inner row re-uses .alert-card for the latter — the row chrome is
     then stripped below, because inside a dialog the alert *is* the surface.
     Only the severity spine survives, as the one carry-over cue. */
  /* A NATIVE <dialog>, not <ha-dialog>: HA changed that element's API
     incompatibly in 2026.02 and the card spans both sides of the split. See
     the comment on _renderDetailPopup. showModal() supplies the scrim, focus
     trap and Esc, so only the surface is styled here. */
  dialog.detail-dialog {
    width: min(560px, 92vw);
    max-width: min(560px, 92vw);
    max-height: 86vh;
    padding: 0;
    border: none;
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--primary-text-color);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    overflow: hidden;
  }
  dialog.detail-dialog::backdrop {
    background: rgba(0, 0, 0, 0.55);
  }
  /* Sits in the alert header row where the dismiss button sits on a real row,
     so it inherits that slot's alignment. A touch larger than .dismiss-button:
     this is the modal's only pointer affordance besides the scrim. */
  .detail-dialog-close {
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(32px * var(--wac-scale, 1));
    height: calc(32px * var(--wac-scale, 1));
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: var(--secondary-text-color);
    cursor: pointer;
  }
  .detail-dialog-close:hover {
    background: var(--secondary-background-color);
  }
  .detail-dialog-close:focus-visible {
    outline: 2px solid var(--wac-focus-ring, var(--primary-color));
    outline-offset: 2px;
  }
  .detail-dialog-close ha-icon {
    --mdc-icon-size: calc(20px * var(--wac-scale, 1));
  }

  /* A long description scrolls inside the dialog, never the dashboard behind
     it (overscroll-behavior stops the scroll chaining at the edge). Matches the
     dialog's own max-height, which has no padding of its own. */
  .detail-dialog-body {
    max-height: 86vh;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  .detail-dialog-body .alert-card {
    margin-bottom: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    /* No pulse-border for extreme/severe: a modal already has the user's full
       attention, and a pulsing frame around it only competes with the text. */
    animation: none;
  }

  /* --- EMPTY STATE --- */
  .no-alerts {
    padding: 20px;
    text-align: center;
    font-style: italic;
    /* Explicit muted token rather than opacity: keeps the all-clear legible in
       both themes (opacity of inherited text can wash out on dark) and, unlike
       opacity, does not dim the availability caveat nested below. */
    color: var(--secondary-text-color);
  }
  .no-alerts ha-icon {
    margin-bottom: 10px;
  }

  /* Availability caveat under the all-clear, shown when there are no alerts but
     a source is dark: "No active alerts" is qualified, never asserted alone. */
  .no-alerts-caveat {
    /* Block flow (not inline-flex) so the caveat always drops onto its own
       centered line under the all-clear, regardless of length — a short
       "2 sources unavailable" must not ride up beside "No active alerts." the
       way a long single-source name wraps away from it. */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    font-style: normal;
    font-size: 0.9em;
    color: var(--primary-text-color);
  }
  .no-alerts-caveat ha-icon {
    color: var(--warning-color);
    --mdc-icon-size: 16px;
    margin-bottom: 0;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=t=>t!=null?t:y;function j(t,e,r,i){return{kind:"toggle",key:t,panel:e,default:r,on:!0,off:!1,label:i}}function ae(t,e,r,i,o){return{kind:"select",key:t,panel:e,default:r,label:i,options:o}}const le=(t,...e)=>e.map(r=>({value:r,label:`${t}${r.replace(/-/g,"_")}`})),Sd=[j("showProvider","appearance",!1,"editor.show_provider"),j("providerColors","appearance",!1,"editor.provider_colors"),{kind:"toggle",key:"layout",panel:"appearance",default:"default",on:"compact",off:"default",label:"editor.compact"},j("animations","appearance",!0,"editor.animations"),j("reformatText","advanced",!0,"editor.reformat_text"),j("showDetails","details",!0,"editor.show_details"),j("expandDetails","details",!1,"editor.expand_details"),j("showMetadata","details",!0,"editor.show_metadata"),j("showDescription","details",!0,"editor.show_description"),j("showInstructions","details",!0,"editor.show_instructions"),j("showGeometry","details",!1,"editor.show_geometry"),j("showMyLocation","details",!1,"editor.show_my_location"),j("showSourceLink","details",!0,"editor.show_source_link"),j("deduplicate","advanced",!0,"editor.deduplicate"),j("deduplicateHeadlines","advanced",!0,"editor.deduplicate_headlines"),j("hideExpired","behavior",!0,"editor.hide_expired"),j("allowDismiss","dismissal",!1,"editor.allow_dismiss"),j("showDismissUndo","dismissal",!0,"editor.show_dismiss_undo")],Fd=[ae("provider","advanced","auto","editor.provider",le("editor.provider_","auto","nws","bom","meteoalarm","dwd","nina","meteoswiss","eccc","nsw_rfs","inmet","pirateweather","cap")),ae("minSeverity","filtering","all","editor.min_severity",le("editor.severity_","all","minor","moderate","severe","extreme")),ae("colorTheme","appearance","severity","editor.color_theme",le("editor.color_","severity","nws","meteoalarm","eccc")),ae("enhanceContrast","advanced","subtle","editor.enhance_contrast",le("editor.enhance_contrast_","off","subtle","strict")),ae("fontSize","appearance","default","editor.font_size",le("editor.font_size_","small","default","large","x-large")),ae("progressFill","appearance","track","editor.progress_fill",le("editor.progress_fill_","track","background")),ae("geometryStyle","details","shape","editor.geometry_style",le("editor.geometry_style_","shape","map")),ae("sortOrder","behavior","default","editor.sort_order",le("editor.sort_","default","onset","severity","distance")),ae("timezone","advanced","server","editor.timezone",le("editor.tz_","server","browser")),ae("unavailableBehavior","behavior","message","editor.unavailable_behavior",le("editor.unavailable_","message","compact","hide")),ae("dismissTrigger","dismissal","button","editor.dismiss_trigger",le("editor.dismiss_trigger_","button","swipe","both")),ae("dismissButtonStyle","dismissal","icon","editor.dismiss_button_style",le("editor.dismiss_button_style_","icon","labeled"))],cr=Object.fromEntries(Sd.map(t=>[t.key,t])),bn=Object.fromEntries(Fd.map(t=>[t.key,t])),ke={...cr,...bn},ci={source:["entity","entities","device","devices","sources","title"],filtering:["zones","eventCodes","excludeEventCodes","minSeverity","maxDistanceKm","myLocationEntity"],appearance:["layout","colorTheme","providerColors","fontSize","animations","showProvider","progressFill","progressStyle","iconBorderStyle"],details:["showDetails","expandDetails","showMetadata","showDescription","showInstructions","showGeometry","geometryStyle","showMyLocation","showSourceLink"],behavior:["tap_action","sortOrder","hideExpired","hideNoAlerts","unavailableBehavior"],dismissal:["allowDismiss","dismissTrigger","dismissButtonStyle","showDismissUndo"],advanced:["provider","timezone","reformatText","deduplicate","deduplicateHeadlines","enhanceContrast"]},Dd={source:"editor.section_source",filtering:"editor.section_filtering",appearance:"editor.section_appearance",details:"editor.section_detail_panel",behavior:"editor.section_behavior",dismissal:"editor.section_dismissal",advanced:"editor.section_advanced"},ui=["showMetadata","showDescription","showInstructions","showSourceLink","showGeometry"],Cd=["progressFill","progressStyle","iconBorderStyle"];function ur(t,e){var r;return(r=t[e])!=null?r:ke[e].default}function kd(t,e){return ur(t,e)===ke[e].default}function yn(t,e){return ur(t,e.key)===e.on}function pi(t,e,r){if(r===ur(t,e))return t;const i={...t};return r===ke[e].default?delete i[e]:i[e]=r,i}function hi(t,e){return e.filter(r=>r in ke?!kd(t,r):t[r]!==void 0)}function _i(t,e){return hi(t,[e]).length===1}const $d={zones:"editor.zones",eventCodes:"editor.event_codes",excludeEventCodes:"editor.exclude_event_codes",maxDistanceKm:"editor.max_distance",myLocationEntity:"editor.my_location_entity",progressStyle:"editor.progress_style",iconBorderStyle:"editor.icon_border_style",tap_action:"editor.tap_action",hideNoAlerts:"editor.hide_no_alerts"};function Td(t){return t.replace(/\s*\([^)]*\)\s*$/,"")}var $e;let pt=$e=class extends ot{constructor(){super(...arguments),this._showPreview=!1,this._subscribedDismissalsScope="",this._registryEntries=null,this._onRestoreAll=()=>{const t=this._currentScopeHash();t&&(ad(t),this.requestUpdate())}}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._unsubscribeDismissals)==null||t.call(this),this._unsubscribeDismissals=void 0,this._subscribedDismissalsScope="",this._teardownRegistrySubscription()}updated(t){var e;super.updated(t);const r=this._currentScopeHash();r!==this._subscribedDismissalsScope&&((e=this._unsubscribeDismissals)==null||e.call(this),this._unsubscribeDismissals=void 0,this._subscribedDismissalsScope=r,r&&(this._unsubscribeDismissals=cn(r,()=>this.requestUpdate()))),this.isConnected&&this._maybeSubscribeRegistry()}_maybeSubscribeRegistry(){var t,e;if(ne(this._config).length===0){this._teardownRegistrySubscription();return}const r=(t=this.hass)==null?void 0:t.connection;!r||r===this._subscribedRegistryConn||((e=this._unsubscribeRegistry)==null||e.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=r,ei(r,i=>{this._registryEntries=i,this.requestUpdate()}).then(i=>{if(this._subscribedRegistryConn!==r){i();return}this._unsubscribeRegistry=i}).catch(()=>{this._subscribedRegistryConn===r&&(this._subscribedRegistryConn=void 0)}))}_teardownRegistrySubscription(){var t;(t=this._unsubscribeRegistry)==null||t.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=void 0}get _lang(){var t,e;return((e=(t=this.hass)==null?void 0:t.locale)==null?void 0:e.language)||"en"}get _useWebAwesome(){if($e._webAwesome!==void 0)return $e._webAwesome;const t=!!customElements.get("ha-dropdown-item"),e=!!customElements.get("ha-list-item");return t||e?($e._webAwesome=t,t):!0}_selectValue(t){var e,r,i;const o=t.detail;return(i=(r=o==null?void 0:o.value)!=null?r:(e=t.target)==null?void 0:e.value)!=null?i:""}_renderSelectItem(t,e){return this._useWebAwesome?f`<ha-dropdown-item value=${t}>${e}</ha-dropdown-item>`:f`<ha-list-item value=${t}>${e}</ha-list-item>`}get _useHaInput(){if($e._haInput!==void 0)return $e._haInput;const t=!!customElements.get("ha-input"),e=!!customElements.get("ha-textfield");return t||e?($e._haInput=t,t):!0}_renderTextField(t){var e,r;return this._field(t.changed===!0,this._useHaInput?f`
        <ha-input
          .label=${t.label}
          .value=${t.value}
          .hint=${(e=t.helper)!=null?e:""}
          type=${ut(t.type)}
          min=${ut(t.min)}
          step=${ut(t.step)}
          @change=${t.onChange}
        ></ha-input>
      `:f`
        <ha-textfield
          .label=${t.label}
          .value=${t.value}
          .helper=${(r=t.helper)!=null?r:""}
          .helperPersistent=${t.helper!==void 0}
          type=${ut(t.type)}
          min=${ut(t.min)}
          step=${ut(t.step)}
          @change=${t.onChange}
        ></ha-textfield>
      `,t.onReset)}setConfig(t){this._config=Pa(t),this._showPreview=!!t._preview}_fireConfigChanged(t){this._config=t;const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_getMatchingEntityIds(){var t,e;const r=ne(this._config),i=[...this._getSelectedEntities(),...r.map(s=>`device:${s}`)].join(",");if(this._cachedHass===this.hass&&this._cachedConfigKey===i&&this._cachedEntityIds)return this._cachedEntityIds;this._cachedHass=this.hass,this._cachedConfigKey=i;const o=new Set;for(const s of r)for(const l of sn(this.hass,s,this._registryEntries))o.add(l);const n=[];for(const[s,l]of Object.entries(this.hass.states))!s.startsWith("sensor.")&&!s.startsWith("binary_sensor.")&&!s.startsWith("geo_location.")||o.has(s)||(Xr.some(d=>d.test(s))||or(l.attributes))&&n.push(s);if((t=this._config)!=null&&t.entity&&!n.includes(this._config.entity)&&n.push(this._config.entity),(e=this._config)!=null&&e.entities)for(const s of this._config.entities)s&&!n.includes(s)&&n.push(s);return this._cachedEntityIds=n,n}_getSelectedEntities(){var t,e;const r=[];if((t=this._config)!=null&&t.entity&&r.push(this._config.entity),(e=this._config)!=null&&e.entities)for(const i of this._config.entities)i&&!r.includes(i)&&r.push(i);return r}_hasNoRealAlerts(){var t;if(!this.hass||!((t=this._config)!=null&&t.entity))return!1;const e=this._getSelectedEntities();let r=0;for(const i of e){const o=this.hass.states[i];if(o&&(o.state==="unknown"||o.state==="unavailable"||(r++,o.state!=="0"&&o.state!=="off")))return!1}return r>0}_isEntityMismatch(){var t,e;if(!((t=this._config)!=null&&t.entity))return!1;const r=(e=this.hass)==null?void 0:e.states[this._config.entity];return!r||Xr.some(i=>i.test(this._config.entity))?!1:!or(r.attributes)}_renderEntityWarning(t){return this._isEntityMismatch()?f`<ha-alert alert-type="warning">${h("editor.entity_warning",t)}</ha-alert>`:y}_renderNoEntitiesHint(t){const e=ne(this._config);if(e.length>0&&this.hass){const r=this.hass.devices,i=r?e.filter(n=>!r[n]):[],o=i.length>0?f`<ha-alert alert-type="warning"
            >${h("editor.devices_missing_warning",t,{ids:i.join(", ")})}</ha-alert
          >`:y;return e.some(n=>Jr(this.hass,n,this._registryEntries).length>0)||i.length===e.length?o:f`${o}<ha-alert alert-type="info">${h("editor.no_device_alerts_hint",t)}</ha-alert>`}return this._getMatchingEntityIds().some(r=>{var i;return(i=this.hass)==null?void 0:i.states[r]})?y:f`<ha-alert alert-type="info">${h("editor.no_entities_hint",t)} <a href="https://github.com/seevee/weather_alerts_card#supported-providers" target="_blank" rel="noopener">${h("editor.no_entities_hint_link",t)}</a></ha-alert>`}_renderSourceHint(t){var e,r;const i=(e=this._config)==null?void 0:e.sources;if(!i||i.length===0||!this.hass)return y;const o=new Set(i),n=new Set;let s=0;for(const d of Object.values(this.hass.states)){const u=(r=d.attributes)==null?void 0:r.source;typeof u=="string"&&o.has(u)&&(n.add(u),s++)}const l=i.filter(d=>!n.has(d));if(l.length>0){const d=Qr(),u=l.map(_=>{const p=d.find(v=>v.source===_);return p?h(`editor.provider_${p.provider}`,t):_});return f`<ha-alert alert-type="warning"
        >${h("editor.feeds_missing_warning",t,{feeds:u.join(", ")})}</ha-alert
      >`}return f`<ha-alert alert-type="info">${h("editor.source_hint",t,{count:s})}</ha-alert>`}_entityChanged(t){const e=t.detail.value,r=Array.isArray(e)?e:e?[e]:[],i={...this._config};if(i.entity=r[0]||"",r.length>1?i.entities=r.slice(1):delete i.entities,i.hideNoAlerts){const o=this._syncMultiEntityVisibility(i);o?i.visibility=o:delete i.visibility}this._fireConfigChanged(i)}_deviceChanged(t){const e=t.detail.value,r=Array.isArray(e)?e:e?[e]:[],i=[];for(const d of r)typeof d=="string"&&d&&!i.includes(d)&&i.push(d);const o=ne(this._config);if(i.length===o.length&&i.every((d,u)=>d===o[u]))return;const n={...this._config},[s,...l]=i;s!==void 0?n.device=s:delete n.device,l.length>0?n.devices=l:delete n.devices,this._fireConfigChanged(n)}_titleChanged(t){const e=t.target.value;if(e===(this._config.title||""))return;const r={...this._config};e?r.title=e:delete r.title,this._fireConfigChanged(r)}_feedsChanged(t){const e=t.detail.value,r=Array.isArray(e)?e:e?[e]:[],i={...this._config};r.length>0?i.sources=r:delete i.sources,this._fireConfigChanged(i)}_myLocationEntityChanged(t){var e,r;const i=(e=t.detail)==null?void 0:e.value,o=typeof i=="string"?i.trim():"";if(o===((r=this._config.myLocationEntity)!=null?r:""))return;const n={...this._config};o?n.myLocationEntity=o:delete n.myLocationEntity,this._fireConfigChanged(n)}_showsMyLocationEntityControl(){var t;return this._showsRadiusControl()||((t=this._config)==null?void 0:t.showGeometry)===!0}_currentScopeHash(){return dn(this._config)}_getDismissedCount(){const t=this._currentScopeHash();return t?ni(t).size:0}_hideNoAlertsChanged(t){this._setHideNoAlerts(t.target.checked)}_setHideNoAlerts(t){if(t===(this._config.hideNoAlerts===!0))return;const e={...this._config};t?e.hideNoAlerts=!0:delete e.hideNoAlerts;const r=this._syncMultiEntityVisibility(e);r?e.visibility=r:delete e.visibility,this._fireConfigChanged(e)}_buildEntityCondition(t){return t.startsWith("binary_sensor.")?{condition:"state",entity:t,state:"on"}:{condition:"state",entity:t,state_not:"0"}}_isManagedCondition(t,e){if(t.condition==="state"&&typeof t.entity=="string"&&e.has(t.entity)&&("state_not"in t||"state"in t))return!0;if(t.condition==="or"&&Array.isArray(t.conditions)){const r=t.conditions;return r.length>0&&r.every(i=>i.condition==="state"&&typeof i.entity=="string"&&("state_not"in i&&i.state_not==="0"||"state"in i&&i.state==="on"))}return!1}_syncMultiEntityVisibility(t){var e;const r=new Set;t.entity&&r.add(t.entity),t.entities&&t.entities.forEach(s=>r.add(s));const i=new Set(r),o=this._config;o!=null&&o.entity&&i.add(o.entity),(e=o==null?void 0:o.entities)==null||e.forEach(s=>i.add(s));const n=(t.visibility||[]).filter(s=>!this._isManagedCondition(s,i));if(t.hideNoAlerts&&r.size>0){const s=[...r].map(u=>this._buildEntityCondition(u)),[l,...d]=s;l!==void 0&&d.length===0?n.push(l):n.push({condition:"or",conditions:s})}return n.length>0?n:void 0}_zonesChanged(t){const e=t.target.value,r={...this._config};e.trim()?r.zones=e.split(",").map(i=>i.trim()).filter(Boolean):delete r.zones,this._fireConfigChanged(r)}_eventCodesChanged(t){const e=t.target.value,r={...this._config};e.trim()?r.eventCodes=e.split(",").map(i=>i.trim().toUpperCase()).filter(Boolean):delete r.eventCodes,this._fireConfigChanged(r)}_excludeEventCodesChanged(t){const e=t.target.value,r={...this._config};e.trim()?r.excludeEventCodes=e.split(",").map(i=>i.trim().toUpperCase()).filter(Boolean):delete r.excludeEventCodes,this._fireConfigChanged(r)}_tapActionChanged(t){var e,r,i;const o=this._selectValue(t);if(o===((r=(e=this._config.tap_action)==null?void 0:e.action)!=null?r:"default"))return;const n={...this._config};if(o==="default")delete n.tap_action;else{const s={...(i=n.tap_action)!=null?i:{},action:o};o!=="navigate"&&delete s.navigation_path,o!=="url"&&delete s.url_path,n.tap_action=s}this._fireConfigChanged(n)}_tapNavigationPathChanged(t){this._tapSubFieldChanged("navigation_path",t.target.value)}_tapUrlPathChanged(t){this._tapSubFieldChanged("url_path",t.target.value)}_tapSubFieldChanged(t,e){const r=this._config.tap_action;if(!r||e===(r[t]||""))return;const i={...r};e?i[t]=e:delete i[t],this._fireConfigChanged({...this._config,tap_action:i})}_progressStyleChanged(t,e){this._setProgressStyle(t,this._selectValue(e))}_setProgressStyle(t,e){var r,i,o;const n=(i=(r=this._config.progressStyle)==null?void 0:r[t])!=null?i:nt[t];if(e===n)return;const s={...this._config},l={...(o=s.progressStyle)!=null?o:{}};e===nt[t]?delete l[t]:l[t]=e,Object.keys(l).length===0?delete s.progressStyle:s.progressStyle=l,this._fireConfigChanged(s)}_iconBorderStyleChanged(t,e){this._setIconBorderStyle(t,this._selectValue(e))}_setIconBorderStyle(t,e){var r,i,o;const n=(i=(r=this._config.iconBorderStyle)==null?void 0:r[t])!=null?i:st[t];if(e===n)return;const s={...this._config},l={...(o=s.iconBorderStyle)!=null?o:{}};e===st[t]?delete l[t]:l[t]=e,Object.keys(l).length===0?delete s.iconBorderStyle:s.iconBorderStyle=l,this._fireConfigChanged(s)}_lengthUnit(){var t,e,r;return Oo((r=(e=(t=this.hass)==null?void 0:t.config)==null?void 0:e.unit_system)==null?void 0:r.length)}_showsRadiusControl(){var t,e,r,i,o,n,s,l,d,u,_;if(((t=this._config)==null?void 0:t.maxDistanceKm)!==void 0)return!0;const p=Jl();if((e=this._config)!=null&&e.provider&&p.has(this._config.provider))return!0;const v=new Set((i=(r=this._config)==null?void 0:r.sources)!=null?i:[]);if(Qr().some(b=>v.has(b.source)&&p.has(b.provider))||((o=this._config)!=null&&o.device||((l=(s=(n=this._config)==null?void 0:n.devices)==null?void 0:s.length)!=null?l:0)>0)&&p.has("cap"))return!0;for(const b of this._getSelectedEntities()){const x=(d=this.hass)==null?void 0:d.states[b];if(x&&p.has(nr((u=this._config)==null?void 0:u.provider,(_=x.attributes)!=null?_:{}).provider))return!0}return!1}_maxDistanceChanged(t){const e=t.target.value,r={...this._config};if(e.trim()===""){if(this._config.maxDistanceKm===void 0)return;delete r.maxDistanceKm,this._fireConfigChanged(r);return}const i=Number(e);if(!Number.isFinite(i)||i<=0)return;const o=Na(i,this._lengthUnit());o!==this._config.maxDistanceKm&&(r.maxDistanceKm=o,this._fireConfigChanged(r))}_previewChanged(t){const e=t.target;this._showPreview=e.checked;const r={...this._config};this._showPreview?r._preview=!0:delete r._preview,this._fireConfigChanged(r)}get _legacyMenu(){return!this._useWebAwesome}_writeKey(t,e){const r=pi(this._config,t,e);r!==this._config&&this._fireConfigChanged(r)}_field(t,e,r){return f`
      <div class="field ${t?"changed":""}">
        ${e}
        ${t&&r?this._resetLink(r):y}
      </div>
    `}_resetLink(t){const e=r=>{r.preventDefault(),t()};return f`
      <a
        class="reset-link"
        role="button"
        tabindex="0"
        @click=${e}
        @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&e(r)}}
      >${h("editor.reset_default",this._lang)}</a>
    `}_resetKeys(t){let e=this._config;for(const r of t)r in ke?e=pi(e,r,ke[r].default):e[r]!==void 0&&(e={...e},delete e[r]);e!==this._config&&this._fireConfigChanged(e)}_renderAlsoSet(t,e){const r=hi(this._config,t);if(r.length===0)return y;const i=r.map(o=>this._keyLabel(o,e)).join(" \xB7 ");return f`
      <div class="also-set">
        ${h("editor.also_set",e,{names:i})}
        ${this._resetLink(()=>this._resetKeys(r))}
      </div>
    `}_optionLabel(t,e,r){const i=h(t,r);return e&&!t.endsWith("_default")?h("editor.option_default",r,{label:i}):i}_renderToggle(t){const e=cr[t];return this._field(_i(this._config,t),f`
      <ha-formfield .label=${h(e.label,this._lang)}>
        <ha-switch
          .checked=${yn(this._config,e)}
          @change=${r=>this._writeKey(t,r.target.checked?e.on:e.off)}
        ></ha-switch>
      </ha-formfield>
    `,()=>this._resetKeys([t]))}_renderSelect(t){const e=bn[t],r=this._lang;return this._field(_i(this._config,t),f`
      <ha-select
        .label=${h(e.label,r)}
        .value=${ur(this._config,t)}
        @selected=${i=>this._writeKey(t,this._selectValue(i))}
        ?fixedMenuPosition=${this._legacyMenu}
        ?naturalMenuWidth=${this._legacyMenu}
      >
        ${e.options.map(i=>this._renderSelectItem(i.value,this._optionLabel(i.label,i.value===e.default,r)))}
      </ha-select>
    `,()=>this._resetKeys([t]))}_keyLabel(t,e){const r=t in ke?ke[t].label:$d[t];return Td(r?h(r,e,{unit:""}):String(t))}_changedSummary(t,e){const r=hi(this._config,t);if(r.length===0)return"";const i=r.slice(0,3).map(n=>this._keyLabel(n,e)),o=r.length-i.length;return o>0?`${i.join(" \xB7 ")} ${h("editor.panel_more",e,{count:o})}`:i.join(" \xB7 ")}_renderPanel(t,e,r,i){return f`
      <ha-expansion-panel
        outlined
        .expanded=${e}
        .header=${h(Dd[t],r)}
        .secondary=${t==="source"?"":this._changedSummary(ci[t],r)}
      >
        <div class="content">${i}</div>
      </ha-expansion-panel>
    `}render(){if(!this.hass||!this._config)return f``;const t=this._lang;return f`
      <div class="editor">
        ${this._renderPreviewTools(t)}
        ${this._renderPanel("source",!0,t,this._renderSourceSection(t))}
        ${this._renderPanel("filtering",!1,t,this._renderFilteringSection(t))}
        ${this._renderPanel("appearance",!1,t,this._renderAppearanceSection(t))}
        ${this._renderPanel("details",!1,t,this._renderDetailsSection(t))}
        ${this._renderPanel("behavior",!1,t,this._renderBehaviorSection(t))}
        ${this._renderPanel("dismissal",!1,t,this._renderDismissalSection(t))}
        ${this._renderPanel("advanced",!1,t,this._renderAdvancedSection(t))}
      </div>
    `}_renderPreviewTools(t){return f`
      <div class="preview-tools">
        <ha-formfield .label=${h("editor.show_preview",t)}>
          <ha-switch
            .checked=${this._showPreview}
            @change=${this._previewChanged}
          ></ha-switch>
        </ha-formfield>
        ${this._hasNoRealAlerts()&&!this._showPreview?f`<div class="preview-nudge">${h("editor.preview_nudge",t)}</div>`:f`<div class="preview-hint">${h("editor.preview_hint",t)}</div>`}
      </div>
    `}_renderSourceSection(t){var e,r,i,o;const n=new Set;for(const d of Object.values(this.hass.states)){const u=(e=d.attributes)==null?void 0:e.source;typeof u=="string"&&n.add(u)}const s=new Set((r=this._config.sources)!=null?r:[]),l=Qr().filter(d=>n.has(d.source)||s.has(d.source)).map(d=>({value:d.source,label:h(`editor.provider_${d.provider}`,t)}));return f`
      <ha-selector
        .hass=${this.hass}
        .selector=${{entity:{multiple:!0,include_entities:this._getMatchingEntityIds()}}}
        .value=${this._getSelectedEntities()}
        .label=${h("editor.entities",t)}
        .required=${!ne(this._config).length&&!((o=(i=this._config)==null?void 0:i.sources)!=null&&o.length)}
        @value-changed=${this._entityChanged}
      ></ha-selector>
      ${this._renderEntityWarning(t)}
      ${this._renderNoEntitiesHint(t)}

      <ha-selector
        .hass=${this.hass}
        .selector=${{device:{multiple:!0,filter:[{integration:"cap_alerts"},{integration:"nina"}]}}}
        .value=${ne(this._config)}
        .label=${h("editor.devices",t)}
        .helper=${h("editor.devices_helper",t)}
        .helperPersistent=${!0}
        @value-changed=${this._deviceChanged}
      ></ha-selector>

      ${l.length>0?f`
            <ha-selector
              .hass=${this.hass}
              .selector=${{select:{multiple:!0,mode:"list",options:l}}}
              .value=${this._config.sources||[]}
              .label=${h("editor.feeds",t)}
              .helper=${h("editor.feeds_helper",t)}
              .helperPersistent=${!0}
              @value-changed=${this._feedsChanged}
            ></ha-selector>
            ${this._renderSourceHint(t)}
          `:y}

      ${this._renderTextField({label:h("editor.title",t),value:this._config.title||"",onChange:this._titleChanged})}
    `}_renderFilteringSection(t){const e=this._lengthUnit(),r=this._config.zones?this._config.zones.join(", "):"",i=this._config.eventCodes?this._config.eventCodes.join(", "):"",o=this._config.excludeEventCodes?this._config.excludeEventCodes.join(", "):"";return f`
      ${this._renderTextField({label:h("editor.zones",t),changed:this._config.zones!==void 0,onReset:()=>this._resetKeys(["zones"]),value:r,helper:h("editor.zones_helper",t),onChange:this._zonesChanged})}
      ${this._renderTextField({label:h("editor.event_codes",t),changed:this._config.eventCodes!==void 0,onReset:()=>this._resetKeys(["eventCodes"]),value:i,helper:h("editor.event_codes_helper",t),onChange:this._eventCodesChanged})}
      ${this._renderTextField({label:h("editor.exclude_event_codes",t),changed:this._config.excludeEventCodes!==void 0,onReset:()=>this._resetKeys(["excludeEventCodes"]),value:o,helper:h("editor.exclude_event_codes_helper",t),onChange:this._excludeEventCodesChanged})}

      ${this._renderSelect("minSeverity")}

      ${this._showsRadiusControl()?this._renderTextField({type:"number",min:"1",step:"1",label:h("editor.max_distance",t,{unit:e}),changed:this._config.maxDistanceKm!==void 0,onReset:()=>this._resetKeys(["maxDistanceKm"]),value:this._config.maxDistanceKm!==void 0?String(Ro(this._config.maxDistanceKm,e)):"",helper:h("editor.max_distance_helper",t),onChange:this._maxDistanceChanged}):y}

      ${this._showsMyLocationEntityControl()?this._field(this._config.myLocationEntity!==void 0,f`
        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:["device_tracker","person","zone"]}}}
          .value=${this._config.myLocationEntity||""}
          .label=${h("editor.my_location_entity",t)}
          .required=${!1}
          .helper=${h("editor.my_location_entity_helper",t)}
          .helperPersistent=${!0}
          @value-changed=${this._myLocationEntityChanged}
        ></ha-selector>
      `,()=>this._resetKeys(["myLocationEntity"])):y}
    `}_renderAppearanceSection(t){return f`
      ${this._renderToggle("layout")}
      ${this._renderSelect("colorTheme")}
      ${this._renderToggle("providerColors")}
      ${this._renderSelect("fontSize")}
      ${this._renderToggle("showProvider")}
      ${this._renderToggle("animations")}
      ${this._renderStylingGroup(t)}
    `}_renderStylingGroup(t){const e=this._legacyMenu;return f`
      <ha-expansion-panel
        .expanded=${!1}
        .header=${h("editor.styling_section",t)}
        .secondary=${this._changedSummary(Cd,t)}
      >
        <div class="content">
          ${this._renderSelect("progressFill")}

          <div class="sub-label">${h("editor.progress_style",t)}</div>
          ${this._config.progressFill==="background"?f`<div class="preview-hint">${h("editor.progress_style_wash_note",t)}</div>`:y}
          <div class="phase-row">
            ${["preparation","active","ongoing"].map(r=>{var i,o;return this._field(((i=this._config.progressStyle)==null?void 0:i[r])!==void 0,f`
              <ha-select
                .label=${h("editor.progress_style_"+r,t)}
                .value=${((o=this._config.progressStyle)==null?void 0:o[r])||nt[r]}
                @selected=${n=>this._progressStyleChanged(r,n)}
                ?fixedMenuPosition=${e}
                ?naturalMenuWidth=${e}
              >
                ${["solid","striped","shimmer","pulse"].map(n=>this._renderSelectItem(n,this._optionLabel("editor.deco_"+n,n===nt[r],t)))}
              </ha-select>
            `,()=>this._setProgressStyle(r,nt[r]))})}
          </div>

          <div class="sub-label">${h("editor.icon_border_style",t)}</div>
          <div class="phase-row">
            ${["preparation","active","ongoing"].map(r=>{var i,o;return this._field(((i=this._config.iconBorderStyle)==null?void 0:i[r])!==void 0,f`
              <ha-select
                .label=${h("editor.progress_style_"+r,t)}
                .value=${((o=this._config.iconBorderStyle)==null?void 0:o[r])||st[r]}
                @selected=${n=>this._iconBorderStyleChanged(r,n)}
                ?fixedMenuPosition=${e}
                ?naturalMenuWidth=${e}
              >
                ${["dashed","solid"].map(n=>this._renderSelectItem(n,this._optionLabel("editor.icon_border_"+n,n===st[r],t)))}
              </ha-select>
            `,()=>this._setIconBorderStyle(r,st[r]))})}
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderDetailsSection(t){if(this._config.showDetails===!1)return f`
        ${this._renderToggle("showDetails")}
        ${this._renderAlsoSet(ci.details.filter(r=>r!=="showDetails"),t)}
      `;const e=ui.map(r=>({value:r,label:h(cr[r].label,t)+(_i(this._config,r)?" \u2022":"")}));return f`
      ${this._renderToggle("showDetails")}
      ${this._renderToggle("expandDetails")}

      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{multiple:!0,mode:"list",options:e}}}
        .value=${ui.filter(r=>yn(this._config,cr[r]))}
        .label=${h("editor.detail_sections",t)}
        @value-changed=${this._detailSectionsChanged}
      ></ha-selector>

      ${this._config.showGeometry===!0?f`
        ${this._renderSelect("geometryStyle")}
        ${this._renderToggle("showMyLocation")}
      `:this._renderAlsoSet(["geometryStyle","showMyLocation"],t)}
    `}_detailSectionsChanged(t){var e;const r=(e=t.detail)==null?void 0:e.value,i=new Set(Array.isArray(r)?r:[]);let o=this._config;for(const n of ui)o=pi(o,n,i.has(n));o!==this._config&&this._fireConfigChanged(o)}_renderBehaviorSection(t){return f`
      ${this._renderTapAction(t)}

      ${this._renderSelect("sortOrder")}
      ${this._renderToggle("hideExpired")}

      ${this._field(this._config.hideNoAlerts!==void 0,f`
        <ha-formfield .label=${h("editor.hide_no_alerts",t)}>
          <ha-switch
            .checked=${this._config.hideNoAlerts===!0}
            @change=${this._hideNoAlertsChanged}
          ></ha-switch>
        </ha-formfield>
      `,()=>this._setHideNoAlerts(!1))}

      ${this._renderSelect("unavailableBehavior")}
      ${this._config.unavailableBehavior==="hide"?f`<ha-alert alert-type="warning">${h("editor.unavailable_hide_warning",t)}</ha-alert>`:""}
    `}_renderTapAction(t){var e,r,i;const o=this._legacyMenu,n=(e=this._config.tap_action)==null?void 0:e.action;return this._field(this._config.tap_action!==void 0,f`
      <ha-select
        .label=${h("editor.tap_action",t)}
        .value=${n!=null?n:"default"}
        @selected=${this._tapActionChanged}
        ?fixedMenuPosition=${o}
        ?naturalMenuWidth=${o}
      >
        ${this._renderSelectItem("default",h("editor.tap_default",t))}
        ${this._renderSelectItem("details",h("editor.tap_details",t))}
        ${this._renderSelectItem("more-info",h("editor.tap_more_info",t))}
        ${this._renderSelectItem("navigate",h("editor.tap_navigate",t))}
        ${this._renderSelectItem("url",h("editor.tap_url",t))}
        ${this._renderSelectItem("toggle",h("editor.tap_toggle",t))}
        ${this._renderSelectItem("perform-action",h("editor.tap_perform_action",t))}
        ${this._renderSelectItem("fire-dom-event",h("editor.tap_fire_dom_event",t))}
        ${n==="call-service"?this._renderSelectItem("call-service",h("editor.tap_call_service",t)):""}
        ${this._renderSelectItem("none",h("editor.tap_none",t))}
      </ha-select>
      <div class="helper-text">${h("editor.tap_action_helper",t)}</div>
      ${n==="navigate"?this._renderTextField({label:h("editor.tap_navigation_path",t),value:((r=this._config.tap_action)==null?void 0:r.navigation_path)||"",onChange:this._tapNavigationPathChanged}):""}
      ${n==="url"?this._renderTextField({label:h("editor.tap_url_path",t),value:((i=this._config.tap_action)==null?void 0:i.url_path)||"",onChange:this._tapUrlPathChanged}):""}
      ${n==="perform-action"||n==="call-service"||n==="fire-dom-event"?f`<ha-alert alert-type="info">${h("editor.tap_yaml_managed",t)}</ha-alert>`:""}
      ${n==="details"&&this._config.expandDetails!==!0?f`<ha-alert alert-type="info">${h("editor.tap_details_expand_hint",t)}</ha-alert>`:""}
    `,()=>this._resetKeys(["tap_action"]))}_renderDismissalSection(t){const e=this._config.allowDismiss===!0;return f`
      ${this._renderToggle("allowDismiss")}

      ${e?f`
        ${this._renderSelect("dismissTrigger")}
        ${this._config.dismissTrigger!=="swipe"?this._renderSelect("dismissButtonStyle"):this._renderAlsoSet(["dismissButtonStyle"],t)}
        ${this._renderToggle("showDismissUndo")}
      `:this._renderAlsoSet(ci.dismissal.filter(r=>r!=="allowDismiss"),t)}

      ${this._renderDismissedStatus(t)}
    `}_renderAdvancedSection(t){return f`
      ${this._renderSelect("provider")}
      ${this._renderSelect("timezone")}
      ${this._renderSelect("enhanceContrast")}
      ${this._renderToggle("reformatText")}
      ${this._renderToggle("deduplicate")}
      ${this._renderToggle("deduplicateHeadlines")}
    `}_renderDismissedStatus(t){if(this._config.allowDismiss!==!0)return y;const e=this._getDismissedCount();return e===0?y:f`
      <div class="dismissed-status">
        ${h(e===1?"editor.dismissed_count_singular":"editor.dismissed_count",t,{count:e})}
        <a class="restore-link" @click=${this._onRestoreAll} tabindex="0" role="button">
          ${h("editor.restore_all",t)}
        </a>
      </div>
    `}};pt.styles=Vi`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0;
    }
    ha-expansion-panel {
      --expansion-panel-content-padding: 0;
    }
    /* Panel body: the ha-form expandable convention. */
    .content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 12px;
    }
    /* A customised control: accent rule in the panel gutter, content edge
       unchanged. Position and shape, not a new color. */
    .field {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-left: -11px;
      padding-left: 8px;
      border-left: 3px solid transparent;
    }
    .field.changed {
      border-left-color: var(--primary-color);
    }
    /* Sub-heading inside the styling group. */
    .sub-label {
      font-size: 0.75rem;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
    /* Three phase selects on one row; wrap to stacked on a narrow panel. */
    .phase-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .phase-row ha-select {
      flex: 1 1 110px;
      min-width: 110px;
    }
    .preview-hint,
    .preview-nudge {
      font-size: 0.8rem;
      color: var(--secondary-text-color);
      padding-left: 48px;
      margin-top: 4px;
    }
    .preview-hint {
      opacity: 0.7;
    }
    .dismissed-status {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding-left: 48px;
    }
    .helper-text {
      font-size: 0.8rem;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
    .restore-link,
    .reset-link {
      color: var(--primary-color);
      cursor: pointer;
      text-decoration: underline;
      margin-left: 4px;
    }
    .restore-link:hover,
    .reset-link:hover {
      text-decoration: none;
    }
    /* Under a changed row: pulled up into the row's gap, right-aligned. */
    .field > .reset-link {
      align-self: flex-end;
      font-size: 0.8rem;
      margin: -8px 0 0;
    }
    /* Hidden-but-set dependents named under their master switch. */
    .also-set {
      font-size: 0.8rem;
      color: var(--secondary-text-color);
      padding-left: 48px;
      margin-top: -8px;
    }
  `,J([Ir({attribute:!1})],pt.prototype,"hass",void 0),J([ge()],pt.prototype,"_config",void 0),J([ge()],pt.prototype,"_showPreview",void 0),pt=$e=J([po("weather-alerts-card-editor")],pt);var Pt;const wn=6e4,xn=10,Md="3.5.0";console.info(`%c  WEATHER-ALERTS-CARD  %c  Version ${Md}  `,"color: white; background: #555; font-weight: bold;","color: white; background: #007acc; font-weight: bold;");const Ld={nws:"NWS",bom:"BoM",meteoalarm:"MeteoAlarm",dwd:"DWD",meteoswiss:"MeteoSwiss",eccc:"Environment Canada",pirateweather:"Pirate Weather",cap:"CAP",nsw_rfs:"NSW RFS",inmet:"INMET",nina:"NINA"},Bd={nws:"NWS",bom:"BoM",meteoalarm:"MA",dwd:"DWD",meteoswiss:"MS",eccc:"EC",pirateweather:"PW",cap:"CAP",nsw_rfs:"RFS",inmet:"INMET",nina:"NINA"},zd=new Set(["button","scene","script","input_button"]);function Pd(){const t=Date.now()/1e3,e=3600;return[{id:"preview-1",event:"Gentle Wind Watch",severity:"minor",severityLabel:"Minor",certainty:"Possible",urgency:"Future",sentTs:t-1*e,onsetTs:t+1*e,endsTs:t+6*e,description:"A gentle breeze may arrive later. This is sample data showing an upcoming alert.",instruction:"",url:"",headline:"Gentle Wind Watch for Sampletown County",areaDesc:"Sampletown County",zones:["SAMPLE02"],eventCode:"WIA",provider:"nws",phase:"",severityInferred:!0,certaintyInferred:!1},{id:"preview-2",event:"Sunshine Heat Advisory",severity:"moderate",severityLabel:"Moderate",certainty:"Likely",urgency:"Expected",sentTs:t-2*e,onsetTs:t-1*e,endsTs:t+2*e,description:"This is a sample alert demonstrating the card layout. No action required.",instruction:"Enjoy the weather! This is placeholder data for the card preview.",url:"",headline:"Sunshine Heat Advisory for Pleasantville",areaDesc:"Pleasantville, USA",zones:["SAMPLE01"],eventCode:"HTA",provider:"nws",phase:"Update",severityInferred:!1,certaintyInferred:!1},{id:"preview-3",event:"Frost Advisory",severity:"minor",severityLabel:"Minor",certainty:"Likely",urgency:"Expected",sentTs:t-8*e,onsetTs:t-6*e,endsTs:t-2*e,description:"A light frost occurred overnight. This is sample data showing an expired alert.",instruction:"",url:"",headline:"Frost Advisory expired for Pleasantville",areaDesc:"Pleasantville, USA",zones:["SAMPLE01"],eventCode:"FRA",provider:"nws",phase:"",severityInferred:!1,certaintyInferred:!0}]}let te=Pt=class extends ot{constructor(){super(...arguments),this._expandedAlerts=new Map,this._forcePreview=!1,this._detailPopupAlertId=null,this._dismissals=new Map,this._dismissalsScope="",this._swipeState=null,this._swipeStartX=0,this._swipeStartY=0,this._swipeCurrentDx=0,this._swipeRAF=null,this._swipePointerId=null,this._swipeExitTimeout=null,this._swipeJustDragged=!1,this._swipeExiting=null,this._registryEntries=null,this._geometryCache=new Map,this._geometryMisses=new Map,this._geometryInFlight=new Set,this._mapTilesToken=null,this._mapTilesInFlight=!1,this._mapTilesTimer=null,this._onMapTilesReady=()=>this._refreshMapTilesToken(),this._motionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this._onMotionChange=()=>this.requestUpdate(),this._pendingDismissals=null,this._dismissalReconcileScheduled=!1}connectedCallback(){super.connectedCallback(),this._motionQuery.addEventListener("change",this._onMotionChange),this._config&&(this._dismissalsScope="",this._reloadDismissalsIfScopeChanged()),this._maybeSubscribeRegistry(),this._maybeAcquireMapTilesToken()}disconnectedCallback(){var t;super.disconnectedCallback(),this._motionQuery.removeEventListener("change",this._onMotionChange),(t=this._unsubscribeDismissals)==null||t.call(this),this._unsubscribeDismissals=void 0,this._teardownRegistrySubscription(),this._teardownMapTilesToken(),this._geometryInFlight.clear(),this._swipeRAF!==null&&(cancelAnimationFrame(this._swipeRAF),this._swipeRAF=null),this._swipeExitTimeout!==null&&(clearTimeout(this._swipeExitTimeout),this._swipeExitTimeout=null),this._swipeState=null,this._swipeExiting=null,this._hasStateKeySources()&&Pt._editorExpandedState.set(this._entityStateKey(),this._expandedAlerts)}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&this.isConnected&&(this._maybeSubscribeRegistry(),this._maybeFetchGeometry(),this._maybeAcquireMapTilesToken());const e=this._detailPopupEl;this._detailPopupAlertId&&!e?this._closeDetailPopup():e&&!e.open&&(typeof e.showModal=="function"?e.showModal():e.setAttribute("open",""))}_maybeSubscribeRegistry(){var t,e;if(ne(this._config).length===0){this._teardownRegistrySubscription();return}const r=(t=this.hass)==null?void 0:t.connection;!r||r===this._subscribedRegistryConn||((e=this._unsubscribeRegistry)==null||e.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=r,ei(r,i=>{this._registryEntries=i,this.requestUpdate()}).then(i=>{if(this._subscribedRegistryConn!==r){i();return}this._unsubscribeRegistry=i}).catch(()=>{this._subscribedRegistryConn===r&&(this._subscribedRegistryConn=void 0)}))}_teardownRegistrySubscription(){var t;(t=this._unsubscribeRegistry)==null||t.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=void 0}_maybeFetchGeometry(){var t,e;if(((t=this._config)==null?void 0:t.showGeometry)!==!0)return;const r=(e=this.hass)==null?void 0:e.connection;if(!r)return;r!==this._geometryConn&&(this._geometryCache=new Map,this._geometryMisses.clear(),this._geometryInFlight.clear(),this._geometryConn=r);const i=new Set;for(const n of this._getAlerts(!1))n.geometryRef&&i.add(n.geometryRef);for(const n of[...this._geometryCache.keys()])i.has(n)||this._geometryCache.delete(n);for(const n of[...this._geometryInFlight])i.has(n)||this._geometryInFlight.delete(n);for(const n of[...this._geometryMisses.keys()])i.has(n)||this._geometryMisses.delete(n);const o=Date.now();for(const n of i){if(this._geometryCache.has(n)||this._geometryInFlight.has(n))continue;const s=this._geometryMisses.get(n);s&&(s.attempts>=xn||o-s.at<wn)||(this._geometryInFlight.add(n),dd(r,n).then(l=>{var d;if(r===this._geometryConn){if(this._geometryInFlight.delete(n),l===null){const u=this._geometryMisses.get(n);this._geometryMisses.set(n,{at:Date.now(),attempts:((d=u==null?void 0:u.attempts)!=null?d:0)+1});return}this._geometryMisses.delete(n),this._geometryCache.set(n,l),this.requestUpdate()}}).catch(()=>{r===this._geometryConn&&this._geometryInFlight.delete(n)}))}}_wantsMapTiles(){var t,e,r;return((t=this._config)==null?void 0:t.showGeometry)===!0&&((e=this._config)==null?void 0:e.geometryStyle)==="map"&&!((r=this._config)!=null&&r.geometryTileUrl)}_maybeAcquireMapTilesToken(){var t;if(!this._wantsMapTiles()){this._teardownMapTilesToken();return}const e=(t=this.hass)==null?void 0:t.connection;!e||e===this._mapTilesConn||(this._teardownMapTilesToken(),this._mapTilesConn=e,typeof e.addEventListener=="function"&&e.addEventListener("ready",this._onMapTilesReady),this._mapTilesTimer=setInterval(this._onMapTilesReady,gd),this._refreshMapTilesToken())}_refreshMapTilesToken(){const t=this._mapTilesConn;!t||this._mapTilesInFlight||(this._mapTilesInFlight=!0,fd(t).then(e=>{t===this._mapTilesConn&&(this._mapTilesInFlight=!1,e!==null&&e!==this._mapTilesToken&&(this._mapTilesToken=e))}).catch(()=>{t===this._mapTilesConn&&(this._mapTilesInFlight=!1)}))}_teardownMapTilesToken(){const t=this._mapTilesConn;t&&typeof t.removeEventListener=="function"&&t.removeEventListener("ready",this._onMapTilesReady),this._mapTilesTimer!==null&&(clearInterval(this._mapTilesTimer),this._mapTilesTimer=null),this._mapTilesConn=void 0,this._mapTilesInFlight=!1,this._mapTilesToken!==null&&(this._mapTilesToken=null)}setConfig(t){var e,r,i,o;if(!(t.entity||(e=t.entities)!=null&&e.length)&&!t.device&&!((r=t.devices)!=null&&r.length)&&!((i=t.sources)!=null&&i.length))throw new Error("You need to define an entity, device, or feed");const{_preview:n,...s}=t;!s.entity&&s.entities&&s.entities.length>0&&(s.entity=(o=s.entities[0])!=null?o:""),this._config=s,this._forcePreview=!!n;const l=this._entityStateKey(),d=Pt._editorExpandedState.get(l);d&&(this._expandedAlerts=d),this._reloadDismissalsIfScopeChanged()}_hasStateKeySources(){var t;return!!((t=this._config)!=null&&t.entity)||ne(this._config).length>0}get _scopeHash(){return dn(this._config)}_configuredScopeTokens(){return ln(this._config)}_reloadDismissalsIfScopeChanged(){const t=this._scopeHash;t!==this._dismissalsScope&&(this._dismissalsScope=t,this._dismissals=t?ni(t):new Map,this._resubscribeDismissals())}_resubscribeDismissals(){var t;(t=this._unsubscribeDismissals)==null||t.call(this),this._unsubscribeDismissals=void 0,!(!this.isConnected||!this._dismissalsScope)&&(this._unsubscribeDismissals=cn(this._dismissalsScope,()=>{this._dismissals=ni(this._dismissalsScope)}))}getCardSize(){const t=this._getAlerts(!1),e=this._isCompact?1:3;return Math.max(1,t.length*e)}static getConfigElement(){return document.createElement("weather-alerts-card-editor")}static getStubConfig(t){if(t){const e=Object.keys(t.states).filter(r=>Xr.some(i=>i.test(r))).find(r=>{const i=t.states[r];return i?i.state!=="0"&&i.state!=="off"&&i.state!=="unknown"&&i.state!=="unavailable":!1});if(e)return{entity:e}}return{entity:"sensor.nws_alerts_alerts"}}_getAllEntities(){if(!this._config)return[];const t=this._config.entity,e=this._config.entities||[],r=new Set,i=[];for(const o of[t,...e])o&&!r.has(o)&&(r.add(o),i.push(o));if(this.hass)for(const o of ne(this._config))for(const n of Jr(this.hass,o,this._registryEntries))r.has(n)||(r.add(n),i.push(n));if(this._config.sources&&this._config.sources.length>0&&this.hass)for(const o of this._resolveSourceEntities(this._config.sources))r.has(o)||(r.add(o),i.push(o));return i}_resolveSourceEntities(t){var e;if(!this.hass)return[];const r=new Set(t),i=[];for(const[o,n]of Object.entries(this.hass.states)){const s=(e=n.attributes)==null?void 0:e.source;typeof s=="string"&&r.has(s)&&or(n.attributes)&&i.push(o)}return i.sort()}_entityStateKey(){return[...this._configuredScopeTokens()].sort().join(",")}_deviceHasAnyEntity(t){return this.hass?ed(this.hass,t,this._registryEntries):!1}_getAlerts(t=!0){if(!this.hass||!this._config)return[];const e=[],r=[],i=new Set,o=new Set;for(const s of this._getAllEntities()){const l=this.hass.states[s];if(!l)continue;const d=nr(this._config.provider,l.attributes);i.has(d.provider)||(i.add(d.provider),r.push(d.provider),d.stableIds&&o.add(d.provider));const u=d.parseAlerts(l.attributes);for(const _ of u)_.sourceEntityId=s;e.push(...u)}let n=this._filterAndSort(e,{providerPriority:r,stableIdProviders:o});if(this._config.allowDismiss&&!this._forcePreview&&this._dismissals.size>0){const{visible:s,updatedMap:l}=ld(n,this._dismissals);t&&l!==this._dismissals&&this._scheduleDismissalReconcile(l),n=s}return n}_scheduleDismissalReconcile(t){this._pendingDismissals=t,!this._dismissalReconcileScheduled&&(this._dismissalReconcileScheduled=!0,queueMicrotask(()=>{this._dismissalReconcileScheduled=!1;const e=this._pendingDismissals;this._pendingDismissals=null,!(!e||!this._dismissalsScope)&&(this._dismissals=e,si(this._dismissalsScope,e))}))}_onDismiss(t){var e;if(!this._dismissalsScope)return;const r=nd(this._dismissals,t);this._dismissals=r,si(this._dismissalsScope,r),((e=this._config)==null?void 0:e.showDismissUndo)!==!1&&this._fireUndoToast(t)}_onUndo(t){if(!this._dismissalsScope)return;const e=sd(this._dismissals,t);e!==this._dismissals&&(this._dismissals=e,si(this._dismissalsScope,e))}_fireUndoToast(t){const e=this._lang;this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:h("card.dismissed_toast",e,{event:t.event}),duration:4e3,action:{text:h("card.dismissed_toast_undo",e),action:()=>this._onUndo(t.id)}},bubbles:!0,composed:!0}))}_canDismiss(){var t;return!!((t=this._config)!=null&&t.allowDismiss)&&!this._forcePreview}_swipeEnabled(){var t,e;return this._canDismiss()&&(((t=this._config)==null?void 0:t.dismissTrigger)==="swipe"||((e=this._config)==null?void 0:e.dismissTrigger)==="both")}_onSwipePointerDown(t,e){if(!this._swipeEnabled()||this._swipeState||e.button!==0)return;this._swipePointerId=e.pointerId,this._swipeStartX=e.clientX,this._swipeStartY=e.clientY,this._swipeCurrentDx=0;const r=e.currentTarget.getBoundingClientRect();this._swipeState={id:t.id,offset:0,locked:!1,cardWidth:r.width}}_onSwipePointerMove(t,e){if(!this._swipeState||this._swipeState.id!==t.id||e.pointerId!==this._swipePointerId)return;const r=e.clientX-this._swipeStartX,i=e.clientY-this._swipeStartY;if(!this._swipeState.locked){if(Math.abs(i)-Math.abs(r)>12){this._swipeState=null;return}if(r>=0){this._swipeState=null;return}e.currentTarget.setPointerCapture(e.pointerId),this._swipeState={...this._swipeState,locked:!0}}this._swipeCurrentDx=Math.min(0,r),this._swipeRAF===null&&(this._swipeRAF=requestAnimationFrame(()=>{this._swipeRAF=null,!(!this._swipeState||this._swipeState.id!==t.id)&&(this._swipeState={...this._swipeState,offset:this._swipeCurrentDx},this.requestUpdate())}))}_onSwipePointerUp(t,e){if(!this._swipeState||this._swipeState.id!==t.id||e.pointerId!==this._swipePointerId)return;const r=e.currentTarget;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),this._swipeRAF!==null&&(cancelAnimationFrame(this._swipeRAF),this._swipeRAF=null);const{offset:i,cardWidth:o,locked:n}=this._swipeState;if(this._swipeState=null,this._swipePointerId=null,n&&(this._swipeJustDragged=!0,setTimeout(()=>{this._swipeJustDragged=!1},0)),n&&i<=-(o*.4)){this._swipeExiting=t.id;const s=this._motionQuery.matches?0:200;this._swipeExitTimeout=window.setTimeout(()=>{this._swipeExitTimeout=null,this._swipeExiting=null,this._onDismiss(t)},s)}else this.requestUpdate()}_onSwipePointerCancel(t,e){if(!this._swipeState||this._swipeState.id!==t.id||e.pointerId!==this._swipePointerId)return;const r=e.currentTarget;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),this._swipeRAF!==null&&(cancelAnimationFrame(this._swipeRAF),this._swipeRAF=null),this._swipeState=null,this._swipePointerId=null,this.requestUpdate()}_swipeCardStyle(t,e){var r;if(this._swipeExiting===t.id)return e;if(((r=this._swipeState)==null?void 0:r.id)===t.id){const{offset:i,cardWidth:o}=this._swipeState,n=Math.max(0,1+i/o).toFixed(2);return`${e} transform: translateX(${i}px); opacity: ${n};`}return e}_swipeCardClass(t){var e;const r=[];return this._swipeEnabled()&&r.push("swipe-enabled"),this._swipeExiting===t.id?r.push("swipe-exit"):((e=this._swipeState)==null?void 0:e.id)===t.id&&this._swipeState.locked&&r.push("swiping"),r.join(" ")}_isLabeledDismissActive(){var t,e;return this._canDismiss()&&((t=this._config)==null?void 0:t.dismissTrigger)!=="swipe"&&((e=this._config)==null?void 0:e.dismissButtonStyle)==="labeled"&&!this._isCompact}_renderDismissButton(t){var e;return this._canDismiss()?((e=this._config)==null?void 0:e.dismissTrigger)==="swipe"?y:this._isLabeledDismissActive()?f`
        <button
          type="button"
          class="dismiss-button labeled"
          aria-label=${h("card.dismiss",this._lang)}
          title=${h("card.dismiss",this._lang)}
          @click=${r=>{r.stopPropagation(),this._onDismiss(t)}}
        >
          <ha-icon icon="mdi:close"></ha-icon>
          <span>${h("card.dismiss",this._lang)}</span>
        </button>
      `:f`
      <button
        type="button"
        class="dismiss-button"
        aria-label=${h("card.dismiss",this._lang)}
        title=${h("card.dismiss",this._lang)}
        @click=${r=>{r.stopPropagation(),this._onDismiss(t)}}
      >
        <ha-icon icon="mdi:close"></ha-icon>
      </button>
    `:y}_filterAndSort(t,e){var r;if(!this._config)return t;let i=t;const o=this._config.maxDistanceKm,n=Vr(this.hass,this._config.myLocationEntity);if(typeof o=="number"&&Number.isFinite(o)&&o>0&&n&&(i=i.filter(s=>!s.point||rr(s.point[0],s.point[1],n[0],n[1])<=o)),this._config.deduplicate!==!1&&(i=ja(i,e==null?void 0:e.providerPriority,e==null?void 0:e.stableIdProviders)),!(e!=null&&e.skipZones)&&this._config.zones&&this._config.zones.length>0){const s=new Set(this._config.zones.map(l=>l.toUpperCase()));i=i.filter(l=>Ha(l,s))}if(this._config.eventCodes&&this._config.eventCodes.length>0){const s=new Set(this._config.eventCodes.map(l=>l.toUpperCase()));i=i.filter(l=>l.eventCode&&s.has(l.eventCode.toUpperCase()))}if(this._config.excludeEventCodes&&this._config.excludeEventCodes.length>0){const s=new Set(this._config.excludeEventCodes.map(l=>l.toUpperCase()));i=i.filter(l=>!l.eventCode||!s.has(l.eventCode.toUpperCase()))}if(this._config.minSeverity){const s={extreme:0,severe:1,moderate:2,minor:3,unknown:4},l=(r=s[this._config.minSeverity])!=null?r:4;i=i.filter(d=>{var u;return d.severity==="unknown"||((u=s[d.severity])!=null?u:4)<=l})}if(this._config.hideExpired!==!1){const s=Date.now()/1e3;i=i.filter(l=>l.endsTs===0||l.endsTs>s)}return Wa(i,this._config.sortOrder||"default",n)}get _locale(){var t,e;if(!this.hass)return{language:navigator.language||"en",time_format:"language",date_format:"language",timeZone:void 0};const r=((t=this._config)==null?void 0:t.timezone)==="browser"?Intl.DateTimeFormat().resolvedOptions().timeZone:(e=this.hass.config)==null?void 0:e.time_zone;return{...this.hass.locale,timeZone:r}}get _lang(){var t,e;return((e=(t=this.hass)==null?void 0:t.locale)==null?void 0:e.language)||"en"}get _animationsEnabled(){var t,e;return((t=this._config)==null?void 0:t.animations)===!0?!0:((e=this._config)==null?void 0:e.animations)===!1?!1:!this._motionQuery.matches}get _isCompact(){var t;return((t=this._config)==null?void 0:t.layout)==="compact"}get _colorTheme(){var t;return((t=this._config)==null?void 0:t.colorTheme)||"severity"}get _providerColors(){return!!this._config&&za(this._config)}get _fontScale(){var t;switch((t=this._config)==null?void 0:t.fontSize){case"small":return .85;case"large":return 1.2;case"x-large":return 1.4;default:return}}get _scaleStyle(){const t=this._fontScale;return t!==void 0?`--wac-scale: ${t}`:""}_scaledPx(t){const e=this._fontScale;return e!==void 0?Math.round(t*e):t}get _contrastMode(){var t;return Ea((t=this._config)==null?void 0:t.enhanceContrast)}_resolveEventColor(t,e){if(this._providerColors){const r=Ba(t,e);if(r)return r}switch(this._colorTheme){case"nws":return Ca(t.event,e);case"meteoalarm":return $a(t.severity,e);case"eccc":return Ma(t.severity,e);default:return}}_alertColorStyle(t){const e=this._resolveEventColor(t,this._contrastMode);if(!e)return"";const{color:r,rgb:i,textColorLight:o,textColorDark:n}=e;return`--color: ${r}; --color-rgb: ${i}; --color-on-light: ${o}; --color-on-dark: ${n};`}_alertBoostClasses(t){const e=this._contrastMode;if(e==="off")return"";const r=this._resolveEventColor(t,e);if(!r)return"";const i=[];return r.boostLight&&i.push("boost-light"),r.boostDark&&i.push("boost-dark"),r.progressBoostLight&&i.push("progress-boost-light"),r.progressBoostDark&&i.push("progress-boost-dark"),i.join(" ")}_decoPhase(t){return t.isExpired?null:t.isActive?t.hasEndTime?"active":"ongoing":"preparation"}_alertDecoClasses(t){var e,r,i,o,n,s;const l=this._decoPhase(t);if(!l)return"";const d=(i=(r=(e=this._config)==null?void 0:e.progressStyle)==null?void 0:r[l])!=null?i:nt[l],u=(s=(n=(o=this._config)==null?void 0:o.iconBorderStyle)==null?void 0:n[l])!=null?s:st[l];return`deco-${d} icon-border-${u}`}get _themeMode(){var t,e;const r=(e=(t=this.hass)==null?void 0:t.themes)==null?void 0:e.darkMode;return typeof r=="boolean"?r?"dark":"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}_normalizeText(t){return(t||"").replace(/\n{2,}/g,`

`).trim()}_toggleDetails(t){if(this._swipeJustDragged){this._swipeJustDragged=!1;return}const e=new Map(this._expandedAlerts);e.set(t,!e.get(t)),this._expandedAlerts=e,this._hasStateKeySources()&&Pt._editorExpandedState.set(this._entityStateKey(),e)}_onCardAction(t){var e,r,i;if(this._swipeJustDragged){this._swipeJustDragged=!1;return}const o=(e=this._config)==null?void 0:e.tap_action;if(!(!o||o.action==="none")){if(o.action==="details"){this._openDetailPopup(t);return}Ed(this,this.hass,o,(i=t.sourceEntityId)!=null?i:(r=this._config)==null?void 0:r.entity)}}_openDetailPopup(t){this._detailPopupAlertId=t.id}_closeDetailPopup(){this._detailPopupAlertId=null}_onCardActionKeydown(t,e){e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar"||(e.preventDefault(),this._onCardAction(t))}_sourceLinkLabel(t){const e=Ld[t.provider]||"Alert";return h("card.open_source",this._lang,{provider:e})}_isBroken(t){var e;return(t.state==="unavailable"||t.state==="unknown")&&nr((e=this._config)==null?void 0:e.provider,t.attributes).parseAlerts(t.attributes).length===0}_friendlyName(t){var e,r,i;return((i=(r=(e=this.hass)==null?void 0:e.states[t])==null?void 0:r.attributes)==null?void 0:i.friendly_name)||t}_deviceName(t){var e,r;const i=(r=(e=this.hass)==null?void 0:e.devices)==null?void 0:r[t];return(i==null?void 0:i.name_by_user)||(i==null?void 0:i.name)||null}_brokenSources(){var t,e,r,i;if(!this.hass)return[];const o=[],n=new Set;for(const s of[(t=this._config)==null?void 0:t.entity,...((e=this._config)==null?void 0:e.entities)||[]]){if(!s||n.has(s))continue;n.add(s);const l=this.hass.states[s];l&&this._isBroken(l)&&o.push({name:this._friendlyName(s)})}for(const s of ne(this._config)){let l=!1,d=!1;for(const u of sn(this.hass,s,this._registryEntries)){if(zd.has((r=u.split(".",1)[0])!=null?r:""))continue;const _=this.hass.states[u];_&&(nr((i=this._config)==null?void 0:i.provider,_.attributes).parseAlerts(_.attributes).length>0?l=!0:(_.state==="unavailable"||_.state==="unknown")&&(d=!0))}!l&&d&&o.push({name:this._deviceName(s)})}return o}_degradedLabel(t){const[e]=t;return e!==void 0&&t.length===1?e.name?h("card.sources_unavailable_named",this._lang,{name:e.name}):h("card.sources_unavailable_one",this._lang):h("card.sources_unavailable_count",this._lang,{count:t.length})}_renderDegradedStrip(t){const e=this._degradedLabel(t);return f`
      <div class="degraded-badge">
        <ha-icon icon="mdi:alert-outline"></ha-icon>
        <span>${e}</span>
      </div>
    `}_renderDegradedDot(t){const e=this._degradedLabel(t);return f`
      <span class="degraded-dot" role="img" title=${e} aria-label=${e}>
        <ha-icon icon="mdi:alert-outline"></ha-icon>
      </span>
    `}render(){if(!this._config)return f``;if(!this.hass)return this._renderPreview();const t=this._getAllEntities().map(v=>this.hass.states[v]).filter(Boolean),e=ne(this._config).some(v=>this._deviceHasAnyEntity(v));if(t.length===0&&!e||this._forcePreview)return this._renderPreview();const r=this._brokenSources(),i=this._config.unavailableBehavior||"message",o=r.length>0&&i!=="hide",n=this._getAlerts(),s=n.length>0;if(!s&&this._config.hideNoAlerts&&!o)return this.style.display="none",f``;this.style.display="";const l=this._animationsEnabled?"":"no-animations",d=this._isCompact?"compact":"",u=this._config.progressFill==="background"?"fill-mode-background":"",_=o&&s&&i==="message",p=o&&s&&i==="compact";return f`
      <ha-card .header=${this._config.title||""} class="${l} ${d} ${u}" data-theme-mode=${this._themeMode} style=${this._scaleStyle}>
        ${p?this._renderDegradedDot(r):y}
        ${_?this._renderDegradedStrip(r):y}
        ${s?n.map(v=>this._renderAlert(v)):this._renderNoAlerts(o?r:[])}
      </ha-card>
      ${this._renderDetailPopup(n)}
    `}_renderDetailPopup(t){if(!this._detailPopupAlertId)return y;const e=t.find(s=>s.id===this._detailPopupAlertId);if(!e)return y;const r=Uo(e),i=r.isActive&&!r.hasEndTime,o=["alert-card",`severity-${e.severity}`,r.phaseText.toLowerCase(),i?"ongoing":"",this._alertDecoClasses(r),this._alertBoostClasses(e)].filter(Boolean).join(" "),n=`${this._alertColorStyle(e)} --progress: ${i?0:r.progressPct}%;`;return f`
      <dialog
        class="detail-dialog"
        aria-label=${e.event}
        @close=${()=>this._closeDetailPopup()}
        @click=${this._onDetailPopupClick}
      >
        <div
          class="detail-dialog-body ${this._animationsEnabled?"":"no-animations"}"
          data-theme-mode=${this._themeMode}
          style=${this._scaleStyle}
        >
          <div class=${o} style=${n}>
            ${this._renderAlertBody(e,r,{expanded:!0,inPopup:!0})}
          </div>
        </div>
      </dialog>
    `}_onDetailPopupClick(t){t.target===t.currentTarget&&this._dismissDetailPopup(t.currentTarget)}_dismissDetailPopup(t){const e=t!=null?t:this._detailPopupEl;e&&typeof e.close=="function"?e.close():this._closeDetailPopup()}_renderDetailPopupClose(){const t=h("card.close",this._lang);return f`
      <button
        type="button"
        class="detail-dialog-close"
        aria-label=${t}
        title=${t}
        @click=${()=>this._dismissDetailPopup()}
      >
        <ha-icon icon="mdi:close"></ha-icon>
      </button>
    `}get _detailPopupEl(){var t,e;return(e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog.detail-dialog"))!=null?e:null}_renderPreview(){var t;const e=this._filterAndSort(Pd(),{skipZones:!0}),r=this._animationsEnabled?"":"no-animations",i=this._isCompact?"compact":"",o=((t=this._config)==null?void 0:t.progressFill)==="background"?"fill-mode-background":"";return f`
      <ha-card .header=${this._config.title||""} class="${r} ${i} ${o}" data-theme-mode=${this._themeMode} style=${this._scaleStyle}>
        <div class="preview-label">${h("card.preview",this._lang)}</div>
        ${e.map(n=>this._renderAlert(n))}
      </ha-card>
    `}_renderNoAlerts(t=[]){return f`
      <div class="no-alerts">
        <ha-icon icon="mdi:weather-sunny"></ha-icon><br>
        ${h("card.no_alerts",this._lang)}
        ${t.length>0?f`<div class="no-alerts-caveat">
            <ha-icon icon="mdi:alert-outline"></ha-icon>${this._degradedLabel(t)}
          </div>`:y}
      </div>
    `}_renderAlert(t){const e=`severity-${t.severity}`,r=Uo(t),i=r.phaseText.toLowerCase(),o=this._expandedAlerts.get(t.id)||!1;return this._isCompact?this._renderCompactAlert(t,e,i,r,o):this._renderFullAlert(t,e,i,r,o)}_renderCompactAlert(t,e,r,i,o){var n;const s=this._lang,l=i.isActive&&!i.hasEndTime,d=i.isExpired?h("progress.compact_expired",s,{time:ct(i.endsTs,i.nowTs)}):l?h("progress.compact_ongoing",s):i.isActive?h("progress.compact_active",s,{time:ct(i.endsTs,i.nowTs)}):h("progress.compact_prep",s,{time:ct(i.onsetTs,i.nowTs)}),u=l?"ongoing":"",_=this._alertBoostClasses(t),p=this._alertDecoClasses(i),v=l?"":`--progress: ${i.progressPct}%;`,b=this._swipeCardClass(t),x=di(this._config),A=x&&this._config.tap_action.action!=="none",C=this._swipeCardStyle(t,`${this._alertColorStyle(t)} ${v}`);return f`
      <div
        class="alert-card ${e} ${r} ${u} ${p} ${_} ${b} ${A?"tappable":""}"
        style=${C}
        role=${A?"button":y}
        tabindex=${A?"0":y}
        @pointerdown=${D=>this._onSwipePointerDown(t,D)}
        @pointermove=${D=>this._onSwipePointerMove(t,D)}
        @pointerup=${D=>this._onSwipePointerUp(t,D)}
        @pointercancel=${D=>this._onSwipePointerCancel(t,D)}
        @click=${A?()=>this._onCardAction(t):y}
        @keydown=${A?D=>this._onCardActionKeydown(t,D):y}
      >
        <div
          class="alert-header-row compact-row"
          @click=${x?y:()=>this._toggleDetails(t.id)}
        >
          <div class="icon-box">
            <ha-icon icon=${(n=t.providerIcon)!=null?n:Lo(t.iconHint||t.event)}></ha-icon>
          </div>
          ${this._renderProviderHint(t)}
          <span class="alert-title">${t.event}</span>
          <span class="compact-time">${d}</span>
          ${x?y:f`
          <ha-icon
            icon="mdi:chevron-down"
            class="compact-chevron ${o?"expanded":""}"
          ></ha-icon>
          `}
          ${this._renderDismissButton(t)}
        </div>
        ${o?this._renderExpandedContent(t,i):y}
      </div>
    `}_renderExpandedContent(t,e){var r,i;return f`
      <div class="alert-expanded">
        ${this._renderHeadline(t)}
        ${t.areaDesc?f`
          <div class="area-desc" title=${t.areaDesc}>
            <ha-icon icon="mdi:map-marker"></ha-icon>
            <span class="area-desc-text">${t.areaDesc}</span>
          </div>
        `:y}
        <div class="badges-row" style="padding: 0 12px 8px;">
          ${this._renderBadgesRow(t,e)}
        </div>

        ${this._renderProgressSection(t,e)}

        ${((r=this._config)==null?void 0:r.showDetails)!==!1?(i=this._config)!=null&&i.expandDetails?f`
        ${this._renderDetailsContent(t,e)}
        `:f`
        <div class="alert-details-section">
          <div
            class="details-summary"
            @click=${()=>this._toggleDetails(t.id+"_details")}
          >
            <span>${h("card.read_details",this._lang)}</span>
            <ha-icon
              icon="mdi:chevron-down"
              class="chevron ${this._expandedAlerts.get(t.id+"_details")?"expanded":""}"
            ></ha-icon>
          </div>
          ${this._expandedAlerts.get(t.id+"_details")?this._renderDetailsContent(t,e):y}
        </div>
        `:y}
      </div>
    `}_renderFullAlert(t,e,r,i,o){const n=this._alertBoostClasses(t),s=this._alertDecoClasses(i),l=this._swipeCardClass(t),d=di(this._config)&&this._config.tap_action.action!=="none",u=i.isActive&&!i.hasEndTime?"--progress: 0%;":`--progress: ${i.progressPct}%;`,_=this._swipeCardStyle(t,`${this._alertColorStyle(t)} ${u}`);return f`
      <div
        class="alert-card ${e} ${r} ${s} ${n} ${l} ${d?"tappable":""}"
        style=${_}
        role=${d?"button":y}
        tabindex=${d?"0":y}
        @pointerdown=${p=>this._onSwipePointerDown(t,p)}
        @pointermove=${p=>this._onSwipePointerMove(t,p)}
        @pointerup=${p=>this._onSwipePointerUp(t,p)}
        @pointercancel=${p=>this._onSwipePointerCancel(t,p)}
        @click=${d?()=>this._onCardAction(t):y}
        @keydown=${d?p=>this._onCardActionKeydown(t,p):y}
      >
        ${this._renderAlertBody(t,i,{expanded:o,inPopup:!1})}
      </div>
    `}_renderAlertBody(t,e,r){var i,o,n,s;const l=di(this._config),d=((i=this._config)==null?void 0:i.showDetails)!==!1;return f`
      <div class="alert-header-row">
        <div class="icon-box">
          <ha-icon icon=${(o=t.providerIcon)!=null?o:Lo(t.iconHint||t.event)}></ha-icon>
        </div>
        <div class="info-box">
          <div class="title-row">
            ${this._renderProviderHint(t)}
            <span class="alert-title">${t.event}</span>
          </div>
          ${this._renderHeadline(t)}
          ${t.areaDesc?f`
            <div class="area-desc" title=${t.areaDesc}>
              <ha-icon icon="mdi:map-marker"></ha-icon>
              <span class="area-desc-text">${t.areaDesc}</span>
            </div>
          `:y}
          <div class="badges-row">
            ${this._renderBadgesRow(t,e)}
          </div>
        </div>
        ${r.inPopup?this._renderDetailPopupClose():this._renderDismissButton(t)}
      </div>

      ${this._renderProgressSection(t,e)}

      ${r.inPopup?d?this._renderDetailsContent(t,e):y:l?d&&(n=this._config)!=null&&n.expandDetails?this._renderDetailsContent(t,e):y:d?(s=this._config)!=null&&s.expandDetails?f`
      ${this._renderDetailsContent(t,e)}
      `:f`
      <div class="alert-details-section">
        <div
          class="details-summary"
          @click=${()=>this._toggleDetails(t.id)}
        >
          <span>${h("card.read_details",this._lang)}</span>
          <ha-icon
            icon="mdi:chevron-down"
            class="chevron ${r.expanded?"expanded":""}"
          ></ha-icon>
        </div>
        ${r.expanded?this._renderDetailsContent(t,e):y}
      </div>
      `:y}
    `}_renderProviderHint(t){var e;if(((e=this._config)==null?void 0:e.showProvider)!==!0)return y;const r=Bd[t.provider]||t.provider.toUpperCase();return f`<span class="provider-hint">${r}</span>`}_renderHeadline(t){var e;const r=((e=this._config)==null?void 0:e.deduplicateHeadlines)!==!1,i=Ua(t,r);return i?f`
      <div class="alert-headline" title=${t.headline}>
        ${i}
      </div>
    `:y}_renderBadgesRow(t,e){var r;const i=(r=t.severityBadgeLabel)!=null?r:h("badge.severity_"+t.severity,this._lang),o=t.certainty?h("badge.certainty_"+t.certainty.toLowerCase(),this._lang):"";return f`
      <span class="badge severity-badge${t.severityInferred?" badge-inferred":""}">${i}</span>
      ${t.certainty?f`
        <span class="badge certainty-badge${t.certaintyInferred?" badge-inferred":""}">
          <ha-icon
            icon=${ya(t.certainty)}
            style="--mdc-icon-size: ${this._scaledPx(14)}px; width: ${this._scaledPx(14)}px; height: ${this._scaledPx(14)}px;"
          ></ha-icon>
          ${o}
        </span>
      `:y}
      ${t.phase?f`
        <span class="badge phase-badge">${t.phase}</span>
      `:y}
      ${t.eventCode&&t.eventCode.trim().toLowerCase()!==t.event.trim().toLowerCase()?f`
        <span class="badge event-code-badge">${t.eventCode}</span>
      `:y}
      ${t.mergedCount&&t.mergedCount>1?f`<span class="badge zones-badge">${h("card.zones_count",this._lang,{count:t.mergedCount})}</span>`:y}
    `}_renderTextBlock(t,e){return e?f`
      <div class="text-block">
        <div class="text-label">${t}</div>
        <div class="text-body">${Fs(fa(e))}</div>
      </div>
    `:y}_distanceFromHomeKm(t){var e;if(!t.point)return;const r=Vr(this.hass,(e=this._config)==null?void 0:e.myLocationEntity);if(r)return rr(t.point[0],t.point[1],r[0],r[1])}_renderDetailsContent(t,e){var r,i,o,n,s,l,d,u,_;const p=((r=this._config)==null?void 0:r.reformatText)!==!1;let v=this._normalizeText(t.description),b=this._normalizeText(t.instruction);p&&(v=Ko(v),b=Ko(b));const x=this._lang,A=this._distanceFromHomeKm(t);return f`
      <div class="details-content" @click=${C=>C.stopPropagation()}>
        ${((i=this._config)==null?void 0:i.showMetadata)!==!1?f`
        <div class="meta-grid">
          ${e.sentTs>100?f`
          <div class="meta-item">
            <span class="meta-label">${h("detail.issued",x)}</span>
            <span class="meta-value">${Zr(e.sentTs,this._locale,x)}</span>
          </div>
          `:y}
          <div class="meta-item">
            <span class="meta-label">${h("detail.onset",x)}</span>
            <span class="meta-value">${Zr(e.onsetTs,this._locale,x)}</span>
            <span class="meta-relative">${qo(e.onsetTs,e.nowTs,x)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${e.isExpired?h("progress.expired_label",x):h("detail.expires",x)}</span>
            ${e.hasEndTime?f`<span class="meta-value">${Zr(e.endsTs,this._locale,x)}</span>
            <span class="meta-relative">${qo(e.endsTs,e.nowTs,x)}</span>`:f`<span class="meta-value">${e.isActive?h("progress.ongoing",x):h("progress.tbd",x)}</span>`}
          </div>
          ${A!==void 0?f`
            <div class="meta-item">
              <span class="meta-label">${h("detail.distance",x)}</span>
              <span class="meta-value">${Ia(A,Oo((s=(n=(o=this.hass)==null?void 0:o.config)==null?void 0:n.unit_system)==null?void 0:s.length),x)}</span>
            </div>
          `:y}
          ${t.areaDesc?f`
            <div class="meta-item" style="grid-column: 1 / -1;">
              <span class="meta-label">${h("detail.area",x)}</span>
              <span class="meta-value">${t.areaDesc}</span>
            </div>
          `:y}
        </div>
        `:y}

        ${((l=this._config)==null?void 0:l.showGeometry)===!0?this._renderGeometry(t):y}

        ${((d=this._config)==null?void 0:d.showDescription)!==!1?this._renderTextBlock(h("detail.description",x),v):y}
        ${((u=this._config)==null?void 0:u.showInstructions)!==!1?this._renderTextBlock(h("detail.instructions",x),b):y}

        ${t.url&&((_=this._config)==null?void 0:_.showSourceLink)!==!1?f`
          <div class="footer-link">
            <a href=${t.url} target="_blank" rel="noopener noreferrer">
              ${this._sourceLinkLabel(t)}
              <ha-icon icon="mdi:open-in-new" style="width:${this._scaledPx(14)}px;"></ha-icon>
            </a>
          </div>
        `:y}
      </div>
    `}_geometryPoints(t){var e,r;const i=t.point;let o=((e=this._config)==null?void 0:e.showMyLocation)===!0?Vr(this.hass,(r=this._config)==null?void 0:r.myLocationEntity):void 0,n=t.bbox;if(!n&&i){const s=o&&rr(i[0],i[1],o[0],o[1])<=ud;o&&!s&&(o=void 0),n=pd(o?[i,o]:[i])}return{bbox:n,point:i,referencePoint:o}}_renderGeometry(t){var e,r,i;if(((e=this._config)==null?void 0:e.showGeometry)!==!0)return y;const{bbox:o,point:n,referencePoint:s}=this._geometryPoints(t);if(!o)return y;const l=t.geometryRef?this._geometryCache.get(t.geometryRef):void 0;if(((r=this._config)==null?void 0:r.geometryStyle)==="map"&&((i=this._config)!=null&&i.geometryTileUrl||this._mapTilesToken!==null))return this._renderGeometryMap(t,o,l,n,s);const{viewBox:d,polygonPaths:u,marker:_,referenceMarker:p}=hd(o,l,n,s);return f`
      <svg
        class="alert-geometry${t.bbox?"":" point"}"
        viewBox=${d}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${this._geometryLabel(t,p!==void 0)}
      >
        <rect class="geometry-frame" x="0" y="0" width="100%" height="100%"></rect>
        ${u.map(v=>Ne`<path class="geometry-shape" d=${v}></path>`)}
        ${this._renderGeometryMarkers(_,p,!1)}
      </svg>
    `}_renderGeometryMarkers(t,e,r){return f`
      ${e?Ne`
        <path class="geometry-reference-ring" d=${lr(e)}></path>
        <path class="geometry-reference-core" d=${lr(e)}></path>
      `:y}
      ${t&&r?Ne`<path class="geometry-marker-casing" d=${lr(t)}></path>`:y}
      ${t?Ne`<path class="geometry-marker" d=${lr(t)}></path>`:y}
    `}_geometryLabel(t,e){const r=t.areaDesc||h("detail.area",this._lang);return e?h("detail.geometry_with_location",this._lang,{area:r}):r}_renderGeometryMap(t,e,r,i,o){var n,s,l,d,u,_,p;const v=(n=this._config)==null?void 0:n.geometryTileUrl,b=v||md((d=(l=(s=this.hass)==null?void 0:s.auth)==null?void 0:l.data)==null?void 0:d.hassUrl,(u=this._mapTilesToken)!=null?u:""),x=(p=(_=this._config)==null?void 0:_.geometryTileAttribution)!=null?p:v?"\xA9 OpenStreetMap":gn,A=!v&&this._themeMode==="dark",{viewBox:C,aspect:D,tiles:N,polygonPaths:G,marker:W,referenceMarker:q}=xd(e,r,{tileUrl:b,attribution:x,point:i,referencePoint:o}),de=this._geometryLabel(t,q!==void 0);return f`
      <div class="alert-geometry-map" style="aspect-ratio: ${D};">
        <svg
          class="alert-geometry map${t.bbox?"":" point"}${A?" dark":""}"
          viewBox=${C}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label=${de}
        >
          <g class="geometry-tiles">
            ${N.map(K=>Ne`<image
              href=${K.href}
              x=${K.x}
              y=${K.y}
              width=${K.size}
              height=${K.size}
            ></image>`)}
          </g>
          <rect class="geometry-frame" x="0" y="0" width="100%" height="100%"></rect>
          ${G.map(K=>Ne`<path class="geometry-shape-casing" d=${K}></path>`)}
          ${G.map(K=>Ne`<path class="geometry-shape" d=${K}></path>`)}
          ${this._renderGeometryMarkers(W,q,!0)}
        </svg>
        <span class="geometry-attrib">${x}</span>
      </div>
    `}_renderProgressSection(t,e){const{isActive:r,progressPct:i,hasEndTime:o,onsetTs:n,endsTs:s,nowTs:l}=e,d=this._lang,u=e.isExpired?"left: 0; right: 0;":r&&!o?"width: 100%; left: 0;":`left: ${i}%; right: 0;`;return f`
      <div class="progress-section">
        <div class="progress-labels">
          <div class="label-left">
            <span class="label-sub">${h(r?"progress.start":"progress.now",d)}</span>
            <span>${Go(r?n:l,this._locale,d)}</span>
          </div>
          <div class="label-center">
            ${o?e.isExpired?f`<span class="label-sub">${h("progress.expired_label",d)}</span><span>${ct(s,l)}</span>`:r?f`<span class="label-sub">${h("progress.expires_in_label",d)}</span><span>${ct(s,l)}</span>`:f`<span class="label-sub">${h("progress.starts_in_label",d)}</span><span>${ct(n,l)}</span>`:f`<span class="label-sub">${h("progress.ongoing",d)}</span>`}
          </div>
          <div class="label-right">
            <span class="label-sub">${h("progress.end",d)}</span>
            <span>${o?Go(s,this._locale,d):h("progress.tbd",d)}</span>
          </div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style=${u}></div>
        </div>
      </div>
    `}};te.styles=Ad,te._editorExpandedState=new Map,J([Ir({attribute:!1})],te.prototype,"hass",void 0),J([ge()],te.prototype,"_config",void 0),J([ge()],te.prototype,"_expandedAlerts",void 0),J([ge()],te.prototype,"_forcePreview",void 0),J([ge()],te.prototype,"_detailPopupAlertId",void 0),J([ge()],te.prototype,"_dismissals",void 0),J([ge()],te.prototype,"_swipeExiting",void 0),J([ge()],te.prototype,"_geometryCache",void 0),J([ge()],te.prototype,"_mapTilesToken",void 0),te=Pt=J([po("weather-alerts-card")],te);const gi=window;gi.customCards=gi.customCards||[],gi.customCards.push({type:"weather-alerts-card",name:"Weather Alerts Card",preview:!0,description:"Weather and hazard alerts from eleven integrations (NWS, ECCC, MeteoAlarm, DWD, MeteoSwiss, NINA, NSW RFS, INMET, BoM, PirateWeather, CAP Alerts), rendered one way: severity color, time progress, the agency's text, and a map where the feed has one."});export{wn as GEOMETRY_MISS_COOLDOWN_MS,xn as GEOMETRY_MISS_MAX_ATTEMPTS,te as WeatherAlertsCard,Jr as resolveDeviceAlertEntities,ei as subscribeEntityRegistry};
