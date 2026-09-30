var Ho,jo,Go,qo,Ko,Yo;function V(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}typeof SuppressedError=="function"&&SuppressedError;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=globalThis,di=$t.ShadowRoot&&($t.ShadyCSS===void 0||$t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ci=Symbol(),wr=new WeakMap;let xr=class{constructor(e,i,r){if(this._$cssResult$=!0,r!==ci)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(di&&e===void 0){const r=i!==void 0&&i.length===1;r&&(e=wr.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&wr.set(i,e))}return e}toString(){return this.cssText}};const nn=t=>new xr(typeof t=="string"?t:t+"",void 0,ci),Er=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1],t[0]);return new xr(i,t,ci)},sn=(t,e)=>{if(di)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const r=document.createElement("style"),o=$t.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}},Ar=di?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const r of e.cssRules)i+=r.cssText;return nn(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:an,defineProperty:ln,getOwnPropertyDescriptor:dn,getOwnPropertyNames:cn,getOwnPropertySymbols:un,getPrototypeOf:hn}=Object,we=globalThis,Sr=we.trustedTypes,pn=Sr?Sr.emptyScript:"",ui=we.reactiveElementPolyfillSupport,at=(t,e)=>t,Tt={toAttribute(t,e){switch(e){case Boolean:t=t?pn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},hi=(t,e)=>!an(t,e),Fr={attribute:!0,type:String,converter:Tt,reflect:!1,useDefault:!1,hasChanged:hi};(Ho=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(jo=we.litPropertyMetadata)!=null||(we.litPropertyMetadata=new WeakMap);let qe=class extends HTMLElement{static addInitializer(e){var i;this._$Ei(),((i=this.l)!=null?i:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Fr){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,i);o!==void 0&&ln(this.prototype,e,o)}}static getPropertyDescriptor(e,i,r){var s;const{get:o,set:n}=(s=dn(this.prototype,e))!=null?s:{get(){return this[i]},set(a){this[i]=a}};return{get:o,set(a){const d=o==null?void 0:o.call(this);n==null||n.call(this,a),this.requestUpdate(e,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var i;return(i=this.elementProperties.get(e))!=null?i:Fr}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;const e=hn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){const i=this.properties,r=[...cn(i),...un(i)];for(const o of r)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[r,o]of i)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const o=this._$Eu(i,r);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)i.unshift(Ar(o))}else e!==void 0&&i.push(Ar(e));return i}static _$Eu(e,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i,r;((i=this._$EO)!=null?i:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var i;const e=(i=this.shadowRoot)!=null?i:this.attachShadow(this.constructor.shadowRootOptions);return sn(e,this.constructor.elementStyles),e}connectedCallback(){var e,i;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostDisconnected)==null?void 0:r.call(i)})}attributeChangedCallback(e,i,r){this._$AK(e,r)}_$ET(e,i){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Tt).toAttribute(i,r.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,i){var n,s,a;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const d=r.getPropertyOptions(o),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)==null?void 0:n.fromAttribute)!==void 0?d.converter:Tt;this._$Em=o;const p=c.fromAttribute(i,d.type);this[o]=(a=p!=null?p:(s=this._$Ej)==null?void 0:s.get(o))!=null?a:p,this._$Em=null}}requestUpdate(e,i,r,o=!1,n){var s,a;if(e!==void 0){const d=this.constructor;if(o===!1&&(n=this[e]),r!=null||(r=d.getPropertyOptions(e)),!(((s=r.hasChanged)!=null?s:hi)(n,i)||r.useDefault&&r.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(d._$Eu(e,r))))return;this.C(e,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:r,reflect:o,wrapped:n},s){var a,d,c;r&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(d=s!=null?s:i)!=null?d:this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(i=void 0),this._$AL.set(e,i)),o===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r,o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((r=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,a]of n){const{wrapped:d}=a,c=this[s];d!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,a,c)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(i)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(e){}firstUpdated(e){}};qe.elementStyles=[],qe.shadowRootOptions={mode:"open"},qe[at("elementProperties")]=new Map,qe[at("finalized")]=new Map,ui==null||ui({ReactiveElement:qe}),((Go=we.reactiveElementVersions)!=null?Go:we.reactiveElementVersions=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=globalThis,Dr=t=>t,Mt=lt.trustedTypes,Cr=Mt?Mt.createPolicy("lit-html",{createHTML:t=>t}):void 0,kr="$lit$",xe=`lit$${Math.random().toFixed(9).slice(2)}$`,$r="?"+xe,_n=`<${$r}>`,Te=document,dt=()=>Te.createComment(""),ct=t=>t===null||typeof t!="object"&&typeof t!="function",pi=Array.isArray,gn=t=>pi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",_i=`[ 	
\f\r]`,ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tr=/-->/g,Mr=/>/g,Me=RegExp(`>|${_i}(?:([^\\s"'>=/]+)(${_i}*=${_i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lr=/'/g,Br=/"/g,zr=/^(?:script|style|textarea|title)$/i,Pr=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),g=Pr(1),Le=Pr(2),Be=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ir=new WeakMap,ze=Te.createTreeWalker(Te,129);function Nr(t,e){if(!pi(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cr!==void 0?Cr.createHTML(e):e}const mn=(t,e)=>{const i=t.length-1,r=[];let o,n=e===2?"<svg>":e===3?"<math>":"",s=ut;for(let a=0;a<i;a++){const d=t[a];let c,p,h=-1,f=0;for(;f<d.length&&(s.lastIndex=f,p=s.exec(d),p!==null);)f=s.lastIndex,s===ut?p[1]==="!--"?s=Tr:p[1]!==void 0?s=Mr:p[2]!==void 0?(zr.test(p[2])&&(o=RegExp("</"+p[2],"g")),s=Me):p[3]!==void 0&&(s=Me):s===Me?p[0]===">"?(s=o!=null?o:ut,h=-1):p[1]===void 0?h=-2:(h=s.lastIndex-p[2].length,c=p[1],s=p[3]===void 0?Me:p[3]==='"'?Br:Lr):s===Br||s===Lr?s=Me:s===Tr||s===Mr?s=ut:(s=Me,o=void 0);const w=s===Me&&t[a+1].startsWith("/>")?" ":"";n+=s===ut?d+_n:h>=0?(r.push(c),d.slice(0,h)+kr+d.slice(h)+xe+w):d+xe+(h===-2?a:w)}return[Nr(t,n+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};let gi=class Vo{constructor({strings:e,_$litType$:i},r){let o;this.parts=[];let n=0,s=0;const a=e.length-1,d=this.parts,[c,p]=mn(e,i);if(this.el=Vo.createElement(c,r),ze.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=ze.nextNode())!==null&&d.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(kr)){const f=p[s++],w=o.getAttribute(h).split(xe),v=/([.?@])?(.*)/.exec(f);d.push({type:1,index:n,name:v[2],strings:w,ctor:v[1]==="."?vn:v[1]==="?"?bn:v[1]==="@"?yn:Lt}),o.removeAttribute(h)}else h.startsWith(xe)&&(d.push({type:6,index:n}),o.removeAttribute(h));if(zr.test(o.tagName)){const h=o.textContent.split(xe),f=h.length-1;if(f>0){o.textContent=Mt?Mt.emptyScript:"";for(let w=0;w<f;w++)o.append(h[w],dt()),ze.nextNode(),d.push({type:2,index:++n});o.append(h[f],dt())}}}else if(o.nodeType===8)if(o.data===$r)d.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(xe,h+1))!==-1;)d.push({type:7,index:n}),h+=xe.length-1}n++}}static createElement(e,i){const r=Te.createElement("template");return r.innerHTML=e,r}};function Ke(t,e,i=t,r){var s,a,d;if(e===Be)return e;let o=r!==void 0?(s=i._$Co)==null?void 0:s[r]:i._$Cl;const n=ct(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),n===void 0?o=void 0:(o=new n(t),o._$AT(t,i,r)),r!==void 0?((d=i._$Co)!=null?d:i._$Co=[])[r]=o:i._$Cl=o),o!==void 0&&(e=Ke(t,o._$AS(t,e.values),o,r)),e}let fn=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;const{el:{content:i},parts:r}=this._$AD,o=((c=e==null?void 0:e.creationScope)!=null?c:Te).importNode(i,!0);ze.currentNode=o;let n=ze.nextNode(),s=0,a=0,d=r[0];for(;d!==void 0;){if(s===d.index){let p;d.type===2?p=new mi(n,n.nextSibling,this,e):d.type===1?p=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(p=new wn(n,this,e)),this._$AV.push(p),d=r[++a]}s!==(d==null?void 0:d.index)&&(n=ze.nextNode(),s++)}return ze.currentNode=Te,o}p(e){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,i),i+=r.strings.length-2):r._$AI(e[i])),i++}},mi=class Zo{get _$AU(){var e,i;return(i=(e=this._$AM)==null?void 0:e._$AU)!=null?i:this._$Cv}constructor(e,i,r,o){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=(n=o==null?void 0:o.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Ke(this,e,i),ct(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Be&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(Te.createTextNode(e)),this._$AH=e}$(e){var n;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=gi.createElement(Nr(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(i);else{const s=new fn(o,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(e){let i=Ir.get(e.strings);return i===void 0&&Ir.set(e.strings,i=new gi(e)),i}k(e){pi(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const n of e)o===i.length?i.push(r=new Zo(this.O(dt()),this.O(dt()),this,this.options)):r=i[o],r._$AI(n),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,i);e!==this._$AB;){const o=Dr(e).nextSibling;Dr(e).remove(),e=o}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}},Lt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,r,o,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(e,i=this,r,o){const n=this.strings;let s=!1;if(n===void 0)e=Ke(this,e,i,0),s=!ct(e)||e!==this._$AH&&e!==Be,s&&(this._$AH=e);else{const a=e;let d,c;for(e=n[0],d=0;d<n.length-1;d++)c=Ke(this,a[r+d],i,d),c===Be&&(c=this._$AH[d]),s||(s=!ct(c)||c!==this._$AH[d]),c===m?e=m:e!==m&&(e+=(c!=null?c:"")+n[d+1]),this._$AH[d]=c}s&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},vn=class extends Lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},bn=class extends Lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},yn=class extends Lt{constructor(e,i,r,o,n){super(e,i,r,o,n),this.type=5}_$AI(e,i=this){var s;if((e=(s=Ke(this,e,i,0))!=null?s:m)===Be)return;const r=this._$AH,o=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==m&&(r===m||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)==null?void 0:i.host)!=null?r:this.element,e):this._$AH.handleEvent(e)}},wn=class{constructor(e,i,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}};const fi=lt.litHtmlPolyfillSupport;fi==null||fi(gi,mi),((qo=lt.litHtmlVersions)!=null?qo:lt.litHtmlVersions=[]).push("3.3.2");const xn=(t,e,i)=>{var n,s;const r=(n=i==null?void 0:i.renderBefore)!=null?n:e;let o=r._$litPart$;if(o===void 0){const a=(s=i==null?void 0:i.renderBefore)!=null?s:null;r._$litPart$=o=new mi(e.insertBefore(dt(),a),a,void 0,i!=null?i:{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=globalThis;let Ye=class extends qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,r;const e=super.createRenderRoot();return(r=(i=this.renderOptions).renderBefore)!=null||(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xn(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Be}};Ye._$litElement$=!0,Ye.finalized=!0,(Ko=Pe.litElementHydrateSupport)==null||Ko.call(Pe,{LitElement:Ye});const vi=Pe.litElementPolyfillSupport;vi==null||vi({LitElement:Ye}),((Yo=Pe.litElementVersions)!=null?Yo:Pe.litElementVersions=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:hi},An=(t=En,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),r==="accessor"){const{name:s}=i;return{set(a){const d=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,d,t,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(r==="setter"){const{name:s}=i;return function(a){const d=this[s];e.call(this,a),this.requestUpdate(s,d,t,!0,a)}}throw Error("Unsupported decorator location: "+r)};function bi(t){return(e,i)=>typeof i=="object"?An(t,e,i):((r,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(t){return bi({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn={CHILD:2},Fn=t=>(...e)=>({_$litDirective$:t,values:e});let Dn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,r){this._$Ct=e,this._$AM=i,this._$Ci=r}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yi extends Dn{constructor(e){if(super(e),this.it=m,e.type!==Sn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===Be)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}yi.directiveName="unsafeHTML",yi.resultType=1;const Cn=Fn(yi),Ve={preparation:"striped",active:"shimmer",ongoing:"pulse"},Ze={preparation:"dashed",active:"solid",ongoing:"solid"};/*! @license DOMPurify 3.4.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.2/LICENSE */const{entries:Or,setPrototypeOf:Ur,isFrozen:kn,getPrototypeOf:$n,getOwnPropertyDescriptor:Tn}=Object;let{freeze:H,seal:te,create:Xe}=Object,{apply:wi,construct:xi}=typeof Reflect!="undefined"&&Reflect;H||(H=function(e){return e}),te||(te=function(e){return e}),wi||(wi=function(e,i){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return e.apply(i,o)}),xi||(xi=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return new e(...r)});const ht=M(Array.prototype.forEach),Mn=M(Array.prototype.lastIndexOf),Wr=M(Array.prototype.pop),pt=M(Array.prototype.push),Ln=M(Array.prototype.splice),j=Array.isArray,_t=M(String.prototype.toLowerCase),Ei=M(String.prototype.toString),Hr=M(String.prototype.match),Qe=M(String.prototype.replace),jr=M(String.prototype.indexOf),Bn=M(String.prototype.trim),zn=M(Number.prototype.toString),Pn=M(Boolean.prototype.toString),Gr=typeof BigInt=="undefined"?null:M(BigInt.prototype.toString),qr=typeof Symbol=="undefined"?null:M(Symbol.prototype.toString),C=M(Object.prototype.hasOwnProperty),gt=M(Object.prototype.toString),R=M(RegExp.prototype.test),Bt=In(TypeError);function M(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return wi(t,e,r)}}function In(t){return function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return xi(t,i)}}function E(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_t;if(Ur&&Ur(t,null),!j(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){const n=i(o);n!==o&&(kn(e)||(e[r]=n),o=n)}t[o]=!0}return t}function Nn(t){for(let e=0;e<t.length;e++)C(t,e)||(t[e]=null);return t}function Z(t){const e=Xe(null);for(const[i,r]of Or(t))C(t,i)&&(j(r)?e[i]=Nn(r):r&&typeof r=="object"&&r.constructor===Object?e[i]=Z(r):e[i]=r);return e}function Rn(t){switch(typeof t){case"string":return t;case"number":return zn(t);case"boolean":return Pn(t);case"bigint":return Gr?Gr(t):"0";case"symbol":return qr?qr(t):"Symbol()";case"undefined":return gt(t);case"function":case"object":{if(t===null)return gt(t);const e=t,i=Je(e,"toString");if(typeof i=="function"){const r=i(e);return typeof r=="string"?r:gt(r)}return gt(t)}default:return gt(t)}}function Je(t,e){for(;t!==null;){const r=Tn(t,e);if(r){if(r.get)return M(r.get);if(typeof r.value=="function")return M(r.value)}t=$n(t)}function i(){return null}return i}function On(t){try{return R(t,""),!0}catch{return!1}}const Kr=H(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ai=H(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Si=H(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Un=H(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Fi=H(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Wn=H(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Yr=H(["#text"]),Vr=H(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Di=H(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Zr=H(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),zt=H(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Hn=te(/\{\{[\w\W]*|[\w\W]*\}\}/gm),jn=te(/<%[\w\W]*|[\w\W]*%>/gm),Gn=te(/\$\{[\w\W]*/gm),qn=te(/^data-[\-\w.\u00B7-\uFFFF]+$/),Kn=te(/^aria-[\-\w]+$/),Xr=te(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Yn=te(/^(?:\w+script|data):/i),Vn=te(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Qr=te(/^html$/i),Zn=te(/^[a-z][.\w]*(-[.\w]+)+$/i);var Jr=Object.freeze({__proto__:null,ARIA_ATTR:Kn,ATTR_WHITESPACE:Vn,CUSTOM_ELEMENT:Zn,DATA_ATTR:qn,DOCTYPE_NAME:Qr,ERB_EXPR:jn,IS_ALLOWED_URI:Xr,IS_SCRIPT_OR_DATA:Yn,MUSTACHE_EXPR:Hn,TMPLIT_EXPR:Gn});const mt={element:1,text:3,progressingInstruction:7,comment:8,document:9},Xn=function(){return typeof window=="undefined"?null:window},Qn=function(e,i){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";i&&i.hasAttribute(o)&&(r=i.getAttribute(o));const n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+n+" could not be created."),null}},eo=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function to(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xn();const e=x=>to(x);if(e.version="3.4.2",e.removed=[],!t||!t.document||t.document.nodeType!==mt.document||!t.Element)return e.isSupported=!1,e;let{document:i}=t;const r=i,o=r.currentScript,{DocumentFragment:n,HTMLTemplateElement:s,Node:a,Element:d,NodeFilter:c,NamedNodeMap:p=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:f,trustedTypes:w}=t,v=d.prototype,y=Je(v,"cloneNode"),L=Je(v,"remove"),S=Je(v,"nextSibling"),J=Je(v,"childNodes"),G=Je(v,"parentNode");if(typeof s=="function"){const x=i.createElement("template");x.content&&x.content.ownerDocument&&(i=x.content.ownerDocument)}let D,q="";const{implementation:de,createNodeIterator:Q,createDocumentFragment:qt,getElementsByTagName:Et}=i,{importNode:At}=r;let z=eo();e.isSupported=typeof Or=="function"&&typeof G=="function"&&de&&de.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Fe,ERB_EXPR:De,TMPLIT_EXPR:ve,DATA_ATTR:Kt,ARIA_ATTR:K,IS_SCRIPT_OR_DATA:be,ATTR_WHITESPACE:Ue,CUSTOM_ELEMENT:Yt}=Jr;let{IS_ALLOWED_URI:Xi}=Jr,P=null;const Qi=E({},[...Kr,...Ai,...Si,...Fi,...Yr]);let N=null;const Ji=E({},[...Vr,...Di,...Zr,...zt]);let $=Object.seal(Xe(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),rt=null,St=null;const ye=Object.seal(Xe(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let er=!0,Vt=!0,tr=!1,ir=!0,Ce=!1,ot=!0,ke=!1,Zt=!1,Xt=!1,We=!1,Ft=!1,Dt=!1,rr=!0,or=!1;const nr="user-content-";let Qt=!0,nt=!1,He={},ce=null;const Jt=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let sr=null;const ar=E({},["audio","video","img","source","image","track"]);let ei=null;const lr=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ct="http://www.w3.org/1998/Math/MathML",kt="http://www.w3.org/2000/svg",ue="http://www.w3.org/1999/xhtml";let je=ue,ti=!1,ii=null;const Xo=E({},[Ct,kt,ue],Ei);let ri=E({},["mi","mo","mn","ms","mtext"]),oi=E({},["annotation-xml"]);const Qo=E({},["title","style","font","a","script"]);let st=null;const Jo=["application/xhtml+xml","text/html"],en="text/html";let B=null,Ge=null;const tn=i.createElement("form"),dr=function(l){return l instanceof RegExp||l instanceof Function},ni=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Ge&&Ge===l)return;(!l||typeof l!="object")&&(l={}),l=Z(l),st=Jo.indexOf(l.PARSER_MEDIA_TYPE)===-1?en:l.PARSER_MEDIA_TYPE,B=st==="application/xhtml+xml"?Ei:_t,P=C(l,"ALLOWED_TAGS")&&j(l.ALLOWED_TAGS)?E({},l.ALLOWED_TAGS,B):Qi,N=C(l,"ALLOWED_ATTR")&&j(l.ALLOWED_ATTR)?E({},l.ALLOWED_ATTR,B):Ji,ii=C(l,"ALLOWED_NAMESPACES")&&j(l.ALLOWED_NAMESPACES)?E({},l.ALLOWED_NAMESPACES,Ei):Xo,ei=C(l,"ADD_URI_SAFE_ATTR")&&j(l.ADD_URI_SAFE_ATTR)?E(Z(lr),l.ADD_URI_SAFE_ATTR,B):lr,sr=C(l,"ADD_DATA_URI_TAGS")&&j(l.ADD_DATA_URI_TAGS)?E(Z(ar),l.ADD_DATA_URI_TAGS,B):ar,ce=C(l,"FORBID_CONTENTS")&&j(l.FORBID_CONTENTS)?E({},l.FORBID_CONTENTS,B):Jt,rt=C(l,"FORBID_TAGS")&&j(l.FORBID_TAGS)?E({},l.FORBID_TAGS,B):Z({}),St=C(l,"FORBID_ATTR")&&j(l.FORBID_ATTR)?E({},l.FORBID_ATTR,B):Z({}),He=C(l,"USE_PROFILES")?l.USE_PROFILES&&typeof l.USE_PROFILES=="object"?Z(l.USE_PROFILES):l.USE_PROFILES:!1,er=l.ALLOW_ARIA_ATTR!==!1,Vt=l.ALLOW_DATA_ATTR!==!1,tr=l.ALLOW_UNKNOWN_PROTOCOLS||!1,ir=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ce=l.SAFE_FOR_TEMPLATES||!1,ot=l.SAFE_FOR_XML!==!1,ke=l.WHOLE_DOCUMENT||!1,We=l.RETURN_DOM||!1,Ft=l.RETURN_DOM_FRAGMENT||!1,Dt=l.RETURN_TRUSTED_TYPE||!1,Xt=l.FORCE_BODY||!1,rr=l.SANITIZE_DOM!==!1,or=l.SANITIZE_NAMED_PROPS||!1,Qt=l.KEEP_CONTENT!==!1,nt=l.IN_PLACE||!1,Xi=On(l.ALLOWED_URI_REGEXP)?l.ALLOWED_URI_REGEXP:Xr,je=typeof l.NAMESPACE=="string"?l.NAMESPACE:ue,ri=C(l,"MATHML_TEXT_INTEGRATION_POINTS")&&l.MATHML_TEXT_INTEGRATION_POINTS&&typeof l.MATHML_TEXT_INTEGRATION_POINTS=="object"?Z(l.MATHML_TEXT_INTEGRATION_POINTS):E({},["mi","mo","mn","ms","mtext"]),oi=C(l,"HTML_INTEGRATION_POINTS")&&l.HTML_INTEGRATION_POINTS&&typeof l.HTML_INTEGRATION_POINTS=="object"?Z(l.HTML_INTEGRATION_POINTS):E({},["annotation-xml"]);const _=C(l,"CUSTOM_ELEMENT_HANDLING")&&l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING=="object"?Z(l.CUSTOM_ELEMENT_HANDLING):Xe(null);if($=Xe(null),C(_,"tagNameCheck")&&dr(_.tagNameCheck)&&($.tagNameCheck=_.tagNameCheck),C(_,"attributeNameCheck")&&dr(_.attributeNameCheck)&&($.attributeNameCheck=_.attributeNameCheck),C(_,"allowCustomizedBuiltInElements")&&typeof _.allowCustomizedBuiltInElements=="boolean"&&($.allowCustomizedBuiltInElements=_.allowCustomizedBuiltInElements),Ce&&(Vt=!1),Ft&&(We=!0),He&&(P=E({},Yr),N=Xe(null),He.html===!0&&(E(P,Kr),E(N,Vr)),He.svg===!0&&(E(P,Ai),E(N,Di),E(N,zt)),He.svgFilters===!0&&(E(P,Si),E(N,Di),E(N,zt)),He.mathMl===!0&&(E(P,Fi),E(N,Zr),E(N,zt))),ye.tagCheck=null,ye.attributeCheck=null,C(l,"ADD_TAGS")&&(typeof l.ADD_TAGS=="function"?ye.tagCheck=l.ADD_TAGS:j(l.ADD_TAGS)&&(P===Qi&&(P=Z(P)),E(P,l.ADD_TAGS,B))),C(l,"ADD_ATTR")&&(typeof l.ADD_ATTR=="function"?ye.attributeCheck=l.ADD_ATTR:j(l.ADD_ATTR)&&(N===Ji&&(N=Z(N)),E(N,l.ADD_ATTR,B))),C(l,"ADD_URI_SAFE_ATTR")&&j(l.ADD_URI_SAFE_ATTR)&&E(ei,l.ADD_URI_SAFE_ATTR,B),C(l,"FORBID_CONTENTS")&&j(l.FORBID_CONTENTS)&&(ce===Jt&&(ce=Z(ce)),E(ce,l.FORBID_CONTENTS,B)),C(l,"ADD_FORBID_CONTENTS")&&j(l.ADD_FORBID_CONTENTS)&&(ce===Jt&&(ce=Z(ce)),E(ce,l.ADD_FORBID_CONTENTS,B)),Qt&&(P["#text"]=!0),ke&&E(P,["html","head","body"]),P.table&&(E(P,["tbody"]),delete rt.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');D=l.TRUSTED_TYPES_POLICY,q=D.createHTML("")}else D===void 0&&(D=Qn(w,o)),D!==null&&typeof q=="string"&&(q=D.createHTML(""));H&&H(l),Ge=l},cr=E({},[...Ai,...Si,...Un]),ur=E({},[...Fi,...Wn]),rn=function(l){let _=G(l);(!_||!_.tagName)&&(_={namespaceURI:je,tagName:"template"});const b=_t(l.tagName),A=_t(_.tagName);return ii[l.namespaceURI]?l.namespaceURI===kt?_.namespaceURI===ue?b==="svg":_.namespaceURI===Ct?b==="svg"&&(A==="annotation-xml"||ri[A]):!!cr[b]:l.namespaceURI===Ct?_.namespaceURI===ue?b==="math":_.namespaceURI===kt?b==="math"&&oi[A]:!!ur[b]:l.namespaceURI===ue?_.namespaceURI===kt&&!oi[A]||_.namespaceURI===Ct&&!ri[A]?!1:!ur[b]&&(Qo[b]||!cr[b]):!!(st==="application/xhtml+xml"&&ii[l.namespaceURI]):!1},se=function(l){pt(e.removed,{element:l});try{G(l).removeChild(l)}catch{L(l)}},$e=function(l,_){try{pt(e.removed,{attribute:_.getAttributeNode(l),from:_})}catch{pt(e.removed,{attribute:null,from:_})}if(_.removeAttribute(l),l==="is")if(We||Ft)try{se(_)}catch{}else try{_.setAttribute(l,"")}catch{}},hr=function(l){let _=null,b=null;if(Xt)l="<remove></remove>"+l;else{const T=Hr(l,/^[\r\n\t ]+/);b=T&&T[0]}st==="application/xhtml+xml"&&je===ue&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const A=D?D.createHTML(l):l;if(je===ue)try{_=new f().parseFromString(A,st)}catch{}if(!_||!_.documentElement){_=de.createDocument(je,"template",null);try{_.documentElement.innerHTML=ti?q:A}catch{}}const O=_.body||_.documentElement;return l&&b&&O.insertBefore(i.createTextNode(b),O.childNodes[0]||null),je===ue?Et.call(_,ke?"html":"body")[0]:ke?_.documentElement:O},pr=function(l){return Q.call(l.ownerDocument||l,l,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},si=function(l){return l instanceof h&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof p)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},ai=function(l){return typeof a=="function"&&l instanceof a};function ge(x,l,_){ht(x,b=>{b.call(e,l,_,Ge)})}const _r=function(l){let _=null;if(ge(z.beforeSanitizeElements,l,null),si(l))return se(l),!0;const b=B(l.nodeName);if(ge(z.uponSanitizeElement,l,{tagName:b,allowedTags:P}),ot&&l.hasChildNodes()&&!ai(l.firstElementChild)&&R(/<[/\w!]/g,l.innerHTML)&&R(/<[/\w!]/g,l.textContent)||ot&&l.namespaceURI===ue&&b==="style"&&ai(l.firstElementChild)||l.nodeType===mt.progressingInstruction||ot&&l.nodeType===mt.comment&&R(/<[/\w]/g,l.data))return se(l),!0;if(rt[b]||!(ye.tagCheck instanceof Function&&ye.tagCheck(b))&&!P[b]){if(!rt[b]&&mr(b)&&($.tagNameCheck instanceof RegExp&&R($.tagNameCheck,b)||$.tagNameCheck instanceof Function&&$.tagNameCheck(b)))return!1;if(Qt&&!ce[b]){const A=G(l)||l.parentNode,O=J(l)||l.childNodes;if(O&&A){const T=O.length;for(let Y=T-1;Y>=0;--Y){const ee=y(O[Y],!0);A.insertBefore(ee,S(l))}}}return se(l),!0}return l instanceof d&&!rn(l)||(b==="noscript"||b==="noembed"||b==="noframes")&&R(/<\/no(script|embed|frames)/i,l.innerHTML)?(se(l),!0):(Ce&&l.nodeType===mt.text&&(_=l.textContent,ht([Fe,De,ve],A=>{_=Qe(_,A," ")}),l.textContent!==_&&(pt(e.removed,{element:l.cloneNode()}),l.textContent=_)),ge(z.afterSanitizeElements,l,null),!1)},gr=function(l,_,b){if(St[_]||rr&&(_==="id"||_==="name")&&(b in i||b in tn))return!1;const A=N[_]||ye.attributeCheck instanceof Function&&ye.attributeCheck(_,l);if(!(Vt&&!St[_]&&R(Kt,_))){if(!(er&&R(K,_))){if(!A||St[_]){if(!(mr(l)&&($.tagNameCheck instanceof RegExp&&R($.tagNameCheck,l)||$.tagNameCheck instanceof Function&&$.tagNameCheck(l))&&($.attributeNameCheck instanceof RegExp&&R($.attributeNameCheck,_)||$.attributeNameCheck instanceof Function&&$.attributeNameCheck(_,l))||_==="is"&&$.allowCustomizedBuiltInElements&&($.tagNameCheck instanceof RegExp&&R($.tagNameCheck,b)||$.tagNameCheck instanceof Function&&$.tagNameCheck(b))))return!1}else if(!ei[_]){if(!R(Xi,Qe(b,Ue,""))){if(!((_==="src"||_==="xlink:href"||_==="href")&&l!=="script"&&jr(b,"data:")===0&&sr[l])){if(!(tr&&!R(be,Qe(b,Ue,"")))){if(b)return!1}}}}}}return!0},on=E({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),mr=function(l){return!on[_t(l)]&&R(Yt,l)},fr=function(l){ge(z.beforeSanitizeAttributes,l,null);const{attributes:_}=l;if(!_||si(l))return;const b={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:N,forceKeepAttr:void 0};let A=_.length;for(;A--;){const O=_[A],{name:T,namespaceURI:Y,value:ee}=O,ae=B(T),li=ee;let I=T==="value"?li:Bn(li);if(b.attrName=ae,b.attrValue=I,b.keepAttr=!0,b.forceKeepAttr=void 0,ge(z.uponSanitizeAttribute,l,b),I=b.attrValue,or&&(ae==="id"||ae==="name")&&jr(I,nr)!==0&&($e(T,l),I=nr+I),ot&&R(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,I)){$e(T,l);continue}if(ae==="attributename"&&Hr(I,"href")){$e(T,l);continue}if(b.forceKeepAttr)continue;if(!b.keepAttr){$e(T,l);continue}if(!ir&&R(/\/>/i,I)){$e(T,l);continue}Ce&&ht([Fe,De,ve],yr=>{I=Qe(I,yr," ")});const br=B(l.nodeName);if(!gr(br,ae,I)){$e(T,l);continue}if(D&&typeof w=="object"&&typeof w.getAttributeType=="function"&&!Y)switch(w.getAttributeType(br,ae)){case"TrustedHTML":{I=D.createHTML(I);break}case"TrustedScriptURL":{I=D.createScriptURL(I);break}}if(I!==li)try{Y?l.setAttributeNS(Y,T,I):l.setAttribute(T,I),si(l)?se(l):Wr(e.removed)}catch{$e(T,l)}}ge(z.afterSanitizeAttributes,l,null)},vr=function(l){let _=null;const b=pr(l);for(ge(z.beforeSanitizeShadowDOM,l,null);_=b.nextNode();)ge(z.uponSanitizeShadowNode,_,null),_r(_),fr(_),_.content instanceof n&&vr(_.content);ge(z.afterSanitizeShadowDOM,l,null)};return e.sanitize=function(x){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=null,b=null,A=null,O=null;if(ti=!x,ti&&(x="<!-->"),typeof x!="string"&&!ai(x)&&(x=Rn(x),typeof x!="string"))throw Bt("dirty is not a string, aborting");if(!e.isSupported)return x;if(Zt||ni(l),e.removed=[],typeof x=="string"&&(nt=!1),nt){const ee=x.nodeName;if(typeof ee=="string"){const ae=B(ee);if(!P[ae]||rt[ae])throw Bt("root node is forbidden and cannot be sanitized in-place")}}else if(x instanceof a)_=hr("<!---->"),b=_.ownerDocument.importNode(x,!0),b.nodeType===mt.element&&b.nodeName==="BODY"||b.nodeName==="HTML"?_=b:_.appendChild(b);else{if(!We&&!Ce&&!ke&&x.indexOf("<")===-1)return D&&Dt?D.createHTML(x):x;if(_=hr(x),!_)return We?null:Dt?q:""}_&&Xt&&se(_.firstChild);const T=pr(nt?x:_);for(;A=T.nextNode();)_r(A),fr(A),A.content instanceof n&&vr(A.content);if(nt)return x;if(We){if(Ce){_.normalize();let ee=_.innerHTML;ht([Fe,De,ve],ae=>{ee=Qe(ee,ae," ")}),_.innerHTML=ee}if(Ft)for(O=qt.call(_.ownerDocument);_.firstChild;)O.appendChild(_.firstChild);else O=_;return(N.shadowroot||N.shadowrootmode)&&(O=At.call(r,O,!0)),O}let Y=ke?_.outerHTML:_.innerHTML;return ke&&P["!doctype"]&&_.ownerDocument&&_.ownerDocument.doctype&&_.ownerDocument.doctype.name&&R(Qr,_.ownerDocument.doctype.name)&&(Y="<!DOCTYPE "+_.ownerDocument.doctype.name+`>
`+Y),Ce&&ht([Fe,De,ve],ee=>{Y=Qe(Y,ee," ")}),D&&Dt?D.createHTML(Y):Y},e.setConfig=function(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ni(x),Zt=!0},e.clearConfig=function(){Ge=null,Zt=!1},e.isValidAttribute=function(x,l,_){Ge||ni({});const b=B(x),A=B(l);return gr(b,A,_)},e.addHook=function(x,l){typeof l=="function"&&pt(z[x],l)},e.removeHook=function(x,l){if(l!==void 0){const _=Mn(z[x],l);return _===-1?void 0:Ln(z[x],_,1)[0]}return Wr(z[x])},e.removeHooks=function(x){z[x]=[]},e.removeAllHooks=function(){z=eo()},e}var io=to();const Jn={"card.no_alerts":"No active alerts.","card.sources_unavailable_named":"{name} unavailable","card.sources_unavailable_count":"{count} sources unavailable","card.sources_unavailable_one":"A source is unavailable","card.preview":"Sample Data","card.read_details":"Read Details","card.open_source":"Open {provider} Source","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","card.dismiss":"Dismiss","card.dismissed_toast":"Dismissed: {event}","card.dismissed_toast_undo":"Undo","card.close":"Close","detail.issued":"Issued","detail.onset":"Onset","detail.expires":"Expires","detail.area":"Area","detail.distance":"Distance","detail.geometry_with_location":"{area}, with your location marked","detail.source":"Source","detail.description":"Description","detail.instructions":"Instructions","progress.start":"Start","progress.now":"Now","progress.end":"End","progress.ongoing":"Ongoing","progress.expires_in_label":"Expires in","progress.starts_in_label":"Starts in","progress.tbd":"TBD","progress.na":"N/A","progress.expired_label":"Expired","progress.compact_active":"for {time}","progress.compact_prep":"in {time}","progress.compact_ongoing":"ongoing","progress.compact_expired":"expired {time} ago","time.just_now":"just now","time.in_less_than_1m":"in <1m","time.minutes_ago":"{m}m ago","time.in_minutes":"in {m}m","time.hours_ago":"{dur} ago","time.in_hours":"in {dur}","time.days_ago":"{d}d ago","time.in_days":"in {d}d","badge.severity_extreme":"Extreme","badge.severity_severe":"Severe","badge.severity_moderate":"Moderate","badge.severity_minor":"Minor","badge.severity_unknown":"Unknown","badge.certainty_observed":"Observed","badge.certainty_likely":"Likely","badge.certainty_possible":"Possible","badge.certainty_unlikely":"Unlikely","badge.certainty_unknown":"Unknown","editor.entities":"Entities","editor.title":"Title (optional)","editor.provider":"Alert provider","editor.provider_auto":"Auto-detect","editor.provider_nws":"NWS (United States)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europe)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Germany)","editor.provider_nina":"NINA (Germany, civil protection)","editor.provider_meteoswiss":"MeteoSwiss (Switzerland)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australia)","editor.provider_cap":"CAP Alerts (multi-region)","editor.devices":"Alert devices (optional)","editor.devices_helper":"Pulls in every active alert sensor under the selected devices automatically (CAP Alerts, NINA). Add more devices to combine locations or providers.","editor.zones":"Zones (optional)","editor.zones_helper":"Comma-separated BoM area_id codes, e.g. NSW_FL049","editor.event_codes":"Event codes (optional)","editor.event_codes_helper":"Comma-separated event codes, e.g. TOW, SVW (NWS) or 31, 95 (DWD)","editor.exclude_event_codes":"Exclude event codes (optional)","editor.exclude_event_codes_helper":"Comma-separated event codes to exclude, e.g. SCY (NWS) or 22 (DWD)","editor.sort_order":"Sort order","editor.sort_default":"Default","editor.sort_onset":"Onset time","editor.sort_severity":"Severity","editor.color_theme":"Color theme","editor.color_severity":"Severity-based","editor.color_nws":"NWS Official","editor.color_meteoalarm":"MeteoAlarm Awareness","editor.color_eccc":"ECCC Public Alerts","editor.timezone":"Timezone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (local device)","editor.min_severity":"Minimum severity","editor.severity_all":"All severities","editor.severity_minor":"Minor or higher","editor.severity_moderate":"Moderate or higher","editor.severity_severe":"Severe or higher","editor.severity_extreme":"Extreme only","editor.max_distance":"Maximum distance ({unit})","editor.max_distance_helper":"Only show incidents within this distance of your Home Assistant home location, or of the location entity set below. Applies to point-incident feeds (NSW RFS) \u2014 area warnings have no distance and are never filtered.","editor.my_location_entity":"My location","editor.my_location_entity_helper":`A device tracker, person, or zone whose coordinates replace the Home Assistant home location as the card's reference point \u2014 for the "My location" marker and as the origin of the maximum-distance filter. Use a zone for a fixed location.`,"editor.animations":"Enable animations","editor.enhance_contrast":"Enhance contrast","editor.enhance_contrast_off":"Off","editor.enhance_contrast_subtle":"Subtle","editor.enhance_contrast_strict":"Strict (WCAG AA)","editor.deduplicate":"Deduplicate alerts","editor.deduplicate_headlines":"Deduplicate headlines","editor.show_details":"Show detail panel","editor.expand_details":"Always expand details","editor.show_metadata":"Show metadata","editor.show_description":"Show description","editor.show_instructions":"Show instructions","editor.show_geometry":"Show area map","editor.geometry_style":"Area map style","editor.geometry_style_shape":"Outline only","editor.geometry_style_map":"Map tiles (online)","editor.show_my_location":"Show my location on the map","editor.show_provider":"Show provider label","editor.show_source_link":"Show source link","editor.reformat_text":"Reflow alert text (strip hard line breaks)","editor.compact":"Compact layout","editor.font_size":"Font size","editor.font_size_small":"Small","editor.font_size_default":"Default","editor.font_size_large":"Large","editor.font_size_x_large":"Extra large","editor.progress_fill":"Progress fill","editor.progress_fill_track":"Track (thin bar)","editor.progress_fill_background":"Background wash","editor.styling_section":"Progress & icon styling","editor.progress_style":"Progress bar decoration","editor.progress_style_wash_note":"Not applied while Progress fill is set to Background wash (the wash is always solid).","editor.progress_style_preparation":"Preparation","editor.progress_style_active":"Active","editor.progress_style_ongoing":"Ongoing","editor.deco_solid":"Solid","editor.deco_striped":"Striped","editor.deco_shimmer":"Shimmer","editor.deco_pulse":"Pulse","editor.icon_border_style":"Icon ring border","editor.icon_border_dashed":"Dashed","editor.icon_border_solid":"Solid","editor.hide_expired":"Hide expired alerts","editor.hide_no_alerts":"Hide card when there are no active alerts","editor.unavailable_behavior":"When a source is unavailable","editor.unavailable_message":"Show which source","editor.unavailable_compact":"Show a compact indicator","editor.unavailable_hide":"Hide indicator (not recommended)","editor.unavailable_hide_warning":"Hiding the indicator can present an all-clear while a source is blind \u2014 an unavailable sensor is not proof of safety.","editor.tap_action":"Tap action","editor.tap_action_helper":"Setting any tap action replaces the inline expand affordance on each alert row.","editor.tap_default":"Inline expand (default)","editor.tap_details":"Detail pop-up","editor.tap_more_info":"More info","editor.tap_navigate":"Navigate","editor.tap_url":"Open URL","editor.tap_toggle":"Toggle","editor.tap_perform_action":"Perform action","editor.tap_call_service":"Call service (legacy)","editor.tap_fire_dom_event":"Fire DOM event","editor.tap_none":"Nothing","editor.tap_navigation_path":"Navigation path","editor.tap_url_path":"URL","editor.tap_yaml_managed":"This action carries a payload the visual editor does not edit. Its existing YAML is preserved \u2014 edit it in the YAML editor.","editor.tap_details_expand_hint":'With "Always expand details" off, the pop-up opens with its description behind the Read Details toggle.',"editor.allow_dismiss":"Allow dismissing alerts","editor.show_dismiss_undo":"Show undo notification on dismiss","editor.dismissed_count":"Dismissed: {count} alerts.","editor.dismissed_count_singular":"Dismissed: {count} alert.","editor.restore_all":"Restore all","editor.show_preview":"Show sample data","editor.preview_hint":"Preview card layout with sample alerts","editor.preview_nudge":"No active alerts \u2014 enable to preview the card layout.","editor.entity_warning":"Selected entity does not appear to contain weather alert data.","editor.no_entities_hint":"No supported weather alert entities found. A provider integration (e.g. NWS Alerts) must be installed first.","editor.no_entities_hint_link":"Supported providers","editor.feeds":"Auto-collect from installed feeds","editor.feeds_helper":"Detected integration feeds. Check one to include every live incident it reports \u2014 no per-incident entities to list. Requires the integration to be set up in Home Assistant.","editor.source_hint":"Auto-collecting {count} live incident(s) from the feed \u2014 no entities to list manually.","editor.feeds_missing_warning":"No live data for {feeds}. This feed is enabled but nothing is providing it \u2014 is the integration set up in Home Assistant?","editor.devices_missing_warning":"No device found for {ids}. Was the integration removed?","editor.no_device_alerts_hint":"No active alert sensors found under the selected devices yet. The card will populate automatically when the integration publishes alerts.","editor.section_source":"Source","editor.section_filtering":"Filtering","editor.section_appearance":"Appearance","editor.section_detail_panel":"Detail Panel","editor.section_behavior":"Behavior","editor.section_dismissal":"Dismissal","editor.section_advanced":"Advanced","editor.detail_sections":"Sections","editor.panel_more":"+{count} more","editor.option_default":"{label} (default)","editor.reset_default":"Reset to default","editor.also_set":"Also set: {names}","editor.dismiss_trigger":"Dismiss trigger","editor.dismiss_trigger_button":"Button only","editor.dismiss_trigger_swipe":"Swipe only","editor.dismiss_trigger_both":"Button and swipe","editor.dismiss_button_style":"Button style","editor.dismiss_button_style_icon":"Icon only","editor.dismiss_button_style_labeled":"Icon and label"},es={"card.no_alerts":"Aucune alerte active.","card.sources_unavailable_named":"{name} indisponible","card.sources_unavailable_count":"{count} sources indisponibles","card.sources_unavailable_one":"Une source est indisponible","card.preview":"Donnees d'exemple","card.read_details":"Lire les details","card.open_source":"Ouvrir la source {provider}","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","card.dismiss":"Ignorer","card.dismissed_toast":"Ignor\xE9e : {event}","card.dismissed_toast_undo":"Annuler","card.close":"Fermer","detail.issued":"Emis","detail.onset":"Debut","detail.expires":"Expire","detail.area":"Zone","detail.distance":"Distance","detail.geometry_with_location":"{area}, avec votre position indiqu\xE9e","detail.source":"Source","detail.description":"Description","detail.instructions":"Instructions","progress.start":"Debut","progress.now":"Maint.","progress.end":"Fin","progress.ongoing":"En cours","progress.expires_in_label":"Expire dans","progress.starts_in_label":"Commence dans","progress.tbd":"Ind.","progress.na":"N/D","progress.expired_label":"Expir\xE9","progress.compact_active":"pour {time}","progress.compact_prep":"dans {time}","progress.compact_ongoing":"en cours","progress.compact_expired":"expir\xE9 il y a {time}","time.just_now":"a l'instant","time.in_less_than_1m":"dans <1m","time.minutes_ago":"il y a {m}m","time.in_minutes":"dans {m}m","time.hours_ago":"il y a {dur}","time.in_hours":"dans {dur}","time.days_ago":"il y a {d}j","time.in_days":"dans {d}j","badge.severity_extreme":"Extr\xEAme","badge.severity_severe":"Grave","badge.severity_moderate":"Mod\xE9r\xE9e","badge.severity_minor":"Mineure","badge.severity_unknown":"Inconnue","badge.certainty_observed":"Observ\xE9e","badge.certainty_likely":"Probable","badge.certainty_possible":"Possible","badge.certainty_unlikely":"Improbable","badge.certainty_unknown":"Inconnue","editor.entities":"Entites","editor.title":"Titre (optionnel)","editor.provider":"Fournisseur d'alertes","editor.provider_auto":"Detection auto","editor.provider_nws":"NWS (Etats-Unis)","editor.provider_bom":"BoM (Australie)","editor.provider_meteoalarm":"MeteoAlarm (Europe)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Allemagne)","editor.provider_nina":"NINA (Allemagne, protection civile)","editor.provider_meteoswiss":"MeteoSwiss (Suisse)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australie)","editor.provider_cap":"Alertes CAP (multi-region)","editor.devices":"Appareils d'alerte (optionnel)","editor.devices_helper":"R\xE9cup\xE8re automatiquement chaque capteur d'alerte actif sous les appareils s\xE9lectionn\xE9s (CAP Alerts, NINA). Ajoutez d'autres appareils pour combiner des lieux ou des fournisseurs.","editor.zones":"Zones (optionnel)","editor.zones_helper":"Codes area_id BoM separes par des virgules, ex. NSW_FL049","editor.event_codes":"Codes d'evenement (optionnel)","editor.event_codes_helper":"Codes d'evenement separes par des virgules, ex. TOW, SVW (NWS) ou 31, 95 (DWD)","editor.exclude_event_codes":"Exclure codes d'evenement (optionnel)","editor.exclude_event_codes_helper":"Codes d'evenement a exclure, ex. SCY (NWS) ou 22 (DWD)","editor.sort_order":"Ordre de tri","editor.sort_default":"Par defaut","editor.sort_onset":"Heure de debut","editor.sort_severity":"Gravite","editor.color_theme":"Theme de couleur","editor.color_severity":"Base sur la gravite","editor.color_nws":"NWS officiel","editor.color_meteoalarm":"MeteoAlarm Vigilance","editor.color_eccc":"Alertes publiques ECCC","editor.timezone":"Fuseau horaire","editor.tz_server":"Serveur (Home Assistant)","editor.tz_browser":"Navigateur (appareil local)","editor.min_severity":"Gravite minimale","editor.severity_all":"Toutes les gravites","editor.severity_minor":"Mineure ou plus","editor.severity_moderate":"Moderee ou plus","editor.severity_severe":"Grave ou plus","editor.severity_extreme":"Extreme uniquement","editor.max_distance":"Distance maximale ({unit})","editor.max_distance_helper":"N'afficher que les incidents situ\xE9s \xE0 moins de cette distance du lieu de votre installation Home Assistant, ou de l'entit\xE9 de position d\xE9finie ci-dessous. S'applique aux flux d'incidents ponctuels (NSW RFS) \u2014 les alertes de zone n'ont pas de distance et ne sont jamais filtr\xE9es.","editor.my_location_entity":"Ma position","editor.my_location_entity_helper":"Un traceur d'appareil, une personne ou une zone dont les coordonn\xE9es remplacent le lieu de Home Assistant comme point de r\xE9f\xE9rence de la carte \u2014 pour le marqueur \xAB Ma position \xBB et comme origine du filtre de distance maximale. Utilisez une zone pour un emplacement fixe.","editor.animations":"Activer les animations","editor.enhance_contrast":"Am\xE9liorer le contraste","editor.enhance_contrast_off":"D\xE9sactiv\xE9","editor.enhance_contrast_subtle":"Subtil","editor.enhance_contrast_strict":"Strict (WCAG AA)","editor.deduplicate":"Dedupliquer les alertes","editor.deduplicate_headlines":"D\xE9dupliquer les titres","editor.show_details":"Afficher le panneau de details","editor.expand_details":"Toujours afficher les details","editor.show_metadata":"Afficher les metadonnees","editor.show_description":"Afficher la description","editor.show_instructions":"Afficher les instructions","editor.show_geometry":"Afficher la carte de zone","editor.geometry_style":"Style de la carte de zone","editor.geometry_style_shape":"Contour uniquement","editor.geometry_style_map":"Tuiles cartographiques (en ligne)","editor.show_my_location":"Afficher ma position sur la carte","editor.show_provider":"Afficher le fournisseur","editor.show_source_link":"Afficher le lien source","editor.reformat_text":"Reformater le texte (supprimer les retours a la ligne)","editor.compact":"Disposition compacte","editor.font_size":"Taille de police","editor.font_size_small":"Petit","editor.font_size_default":"Par d\xE9faut","editor.font_size_large":"Grand","editor.font_size_x_large":"Tr\xE8s grand","editor.progress_fill":"Remplissage de progression","editor.progress_fill_track":"Barre fine","editor.progress_fill_background":"Fond color\xE9","editor.styling_section":"Style de progression et d\u2019ic\xF4ne","editor.progress_style":"D\xE9coration de la barre de progression","editor.progress_style_wash_note":"Sans effet lorsque le remplissage de progression est r\xE9gl\xE9 sur Fond color\xE9 (le fond est toujours uni).","editor.progress_style_preparation":"Pr\xE9paration","editor.progress_style_active":"Active","editor.progress_style_ongoing":"En cours","editor.deco_solid":"Plein","editor.deco_striped":"Ray\xE9","editor.deco_shimmer":"Scintillement","editor.deco_pulse":"Pulsation","editor.icon_border_style":"Bordure de l'anneau d'ic\xF4ne","editor.icon_border_dashed":"Pointill\xE9","editor.icon_border_solid":"Plein","editor.hide_expired":"Masquer les alertes expir\xE9es","editor.hide_no_alerts":"Masquer la carte sans alertes","editor.unavailable_behavior":"Quand une source est indisponible","editor.unavailable_message":"Afficher la source concern\xE9e","editor.unavailable_compact":"Afficher un indicateur compact","editor.unavailable_hide":"Masquer l'indicateur (d\xE9conseill\xE9)","editor.unavailable_hide_warning":"Masquer l'indicateur peut pr\xE9senter une absence d'alerte alors qu'une source est aveugle \u2014 un capteur indisponible n'est pas une preuve de s\xE9curit\xE9.","editor.tap_action":"Action au clic","editor.tap_action_helper":"D\xE9finir une action au clic remplace l'affichage d\xE9taill\xE9 en ligne sur chaque ligne d'alerte.","editor.tap_default":"D\xE9velopper en ligne (par d\xE9faut)","editor.tap_details":"Fen\xEAtre de d\xE9tails","editor.tap_more_info":"Plus d'infos","editor.tap_navigate":"Naviguer","editor.tap_url":"Ouvrir une URL","editor.tap_toggle":"Basculer","editor.tap_perform_action":"Ex\xE9cuter une action","editor.tap_call_service":"Appeler un service (ancien)","editor.tap_fire_dom_event":"D\xE9clencher un \xE9v\xE9nement DOM","editor.tap_none":"Rien","editor.tap_navigation_path":"Chemin de navigation","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Cette action transporte des donn\xE9es que l'\xE9diteur visuel ne modifie pas. Son YAML existant est pr\xE9serv\xE9 \u2014 modifiez-le dans l'\xE9diteur YAML.","editor.tap_details_expand_hint":"Si \xAB Toujours d\xE9velopper les d\xE9tails \xBB est d\xE9sactiv\xE9, la fen\xEAtre s'ouvre avec sa description derri\xE8re le bouton Lire les d\xE9tails.","editor.allow_dismiss":"Permettre d'ignorer les alertes","editor.show_dismiss_undo":"Afficher une notification d'annulation","editor.dismissed_count":"Ignor\xE9es : {count} alertes.","editor.dismissed_count_singular":"Ignor\xE9e : {count} alerte.","editor.restore_all":"Tout restaurer","editor.show_preview":"Afficher les donnees exemples","editor.preview_hint":"Apercu de la disposition avec des alertes fictives","editor.preview_nudge":"Aucune alerte active \u2014 activez pour previsualiser la disposition.","editor.entity_warning":"L'entite selectionnee ne semble pas contenir de donnees d'alerte meteo.","editor.no_entities_hint":"Aucune entite d'alerte meteo compatible trouvee. Une integration (ex. NWS Alerts) doit etre installee.","editor.no_entities_hint_link":"Fournisseurs supportes","editor.feeds":"Collecte automatique des flux installes","editor.feeds_helper":"Flux d'integration detectes. Cochez-en un pour inclure chaque incident en direct qu'il signale \u2014 aucune entite par incident a lister. Necessite que l'integration soit configuree dans Home Assistant.","editor.source_hint":"Collecte automatique de {count} incident(s) en direct du flux \u2014 aucune entite a lister manuellement.","editor.feeds_missing_warning":"Aucune donnee en direct pour {feeds}. Ce flux est active mais rien ne l'alimente \u2014 l'integration est-elle configuree dans Home Assistant ?","editor.devices_missing_warning":"Aucun appareil trouv\xE9 pour {ids}. L'int\xE9gration a-t-elle \xE9t\xE9 supprim\xE9e ?","editor.no_device_alerts_hint":"Aucun capteur d'alerte actif trouv\xE9 sous les appareils s\xE9lectionn\xE9s pour le moment. La carte se remplira automatiquement lorsque l'int\xE9gration publiera des alertes.","editor.section_source":"Source","editor.section_filtering":"Filtrage","editor.section_appearance":"Apparence","editor.section_detail_panel":"Panneau de details","editor.section_behavior":"Comportement","editor.section_dismissal":"Masquage","editor.section_advanced":"Avanc\xE9","editor.detail_sections":"Sections","editor.panel_more":"+{count} de plus","editor.option_default":"{label} (par d\xE9faut)","editor.reset_default":"R\xE9tablir la valeur par d\xE9faut","editor.also_set":"\xC9galement d\xE9fini : {names}","editor.dismiss_trigger":"Declencheur","editor.dismiss_trigger_button":"Bouton uniquement","editor.dismiss_trigger_swipe":"Glissement uniquement","editor.dismiss_trigger_both":"Bouton et glissement","editor.dismiss_button_style":"Style du bouton","editor.dismiss_button_style_icon":"Icone uniquement","editor.dismiss_button_style_labeled":"Icone et texte"},ts={"card.no_alerts":"Sin alertas activas.","card.sources_unavailable_named":"{name} no disponible","card.sources_unavailable_count":"{count} fuentes no disponibles","card.sources_unavailable_one":"Una fuente no est\xE1 disponible","card.preview":"Datos de ejemplo","card.read_details":"Leer detalles","card.open_source":"Abrir fuente {provider}","card.zones_count":"{count} zonas","card.zone_count_singular":"{count} zona","card.dismiss":"Descartar","card.dismissed_toast":"Descartada: {event}","card.dismissed_toast_undo":"Deshacer","card.close":"Cerrar","detail.issued":"Emitido","detail.onset":"Inicio","detail.expires":"Expira","detail.area":"Area","detail.distance":"Distancia","detail.geometry_with_location":"{area}, con tu ubicaci\xF3n marcada","detail.source":"Fuente","detail.description":"Descripcion","detail.instructions":"Instrucciones","progress.start":"Inicio","progress.now":"Ahora","progress.end":"Fin","progress.ongoing":"En curso","progress.expires_in_label":"Expira en","progress.starts_in_label":"Comienza en","progress.tbd":"Pend.","progress.na":"N/D","progress.expired_label":"Expirada","progress.compact_active":"por {time}","progress.compact_prep":"en {time}","progress.compact_ongoing":"en curso","progress.compact_expired":"expir\xF3 hace {time}","time.just_now":"ahora mismo","time.in_less_than_1m":"en <1m","time.minutes_ago":"hace {m}m","time.in_minutes":"en {m}m","time.hours_ago":"hace {dur}","time.in_hours":"en {dur}","time.days_ago":"hace {d}d","time.in_days":"en {d}d","badge.severity_extreme":"Extrema","badge.severity_severe":"Grave","badge.severity_moderate":"Moderada","badge.severity_minor":"Menor","badge.severity_unknown":"Desconocida","badge.certainty_observed":"Observada","badge.certainty_likely":"Probable","badge.certainty_possible":"Posible","badge.certainty_unlikely":"Improbable","badge.certainty_unknown":"Desconocida","editor.entities":"Entidades","editor.title":"Titulo (opcional)","editor.provider":"Proveedor de alertas","editor.provider_auto":"Deteccion auto","editor.provider_nws":"NWS (Estados Unidos)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Alemania)","editor.provider_nina":"NINA (Alemania, protecci\xF3n civil)","editor.provider_meteoswiss":"MeteoSwiss (Suiza)","editor.provider_eccc":"ECCC (Canad\xE1)","editor.provider_nsw_rfs":"NSW RFS (Australia)","editor.provider_cap":"Alertas CAP (multi-region)","editor.devices":"Dispositivos de alerta (opcional)","editor.devices_helper":"Incorpora autom\xE1ticamente cada sensor de alerta activo bajo los dispositivos seleccionados (CAP Alerts, NINA). A\xF1ade m\xE1s dispositivos para combinar ubicaciones o proveedores.","editor.zones":"Zonas (opcional)","editor.zones_helper":"Codigos area_id de BoM separados por comas, ej. NSW_FL049","editor.event_codes":"Codigos de evento (opcional)","editor.event_codes_helper":"Codigos de evento separados por comas, ej. TOW, SVW (NWS) o 31, 95 (DWD)","editor.exclude_event_codes":"Excluir codigos de evento (opcional)","editor.exclude_event_codes_helper":"Codigos de evento a excluir, ej. SCY (NWS) o 22 (DWD)","editor.sort_order":"Orden","editor.sort_default":"Predeterminado","editor.sort_onset":"Hora de inicio","editor.sort_severity":"Gravedad","editor.color_theme":"Tema de color","editor.color_severity":"Basado en gravedad","editor.color_nws":"NWS oficial","editor.color_meteoalarm":"MeteoAlarm Conciencia","editor.color_eccc":"Alertas p\xFAblicas ECCC","editor.timezone":"Zona horaria","editor.tz_server":"Servidor (Home Assistant)","editor.tz_browser":"Navegador (dispositivo local)","editor.min_severity":"Gravedad minima","editor.severity_all":"Todas las gravedades","editor.severity_minor":"Menor o superior","editor.severity_moderate":"Moderada o superior","editor.severity_severe":"Grave o superior","editor.severity_extreme":"Solo extrema","editor.max_distance":"Distancia m\xE1xima ({unit})","editor.max_distance_helper":"Mostrar solo los incidentes situados a menos de esta distancia de la ubicaci\xF3n de tu Home Assistant, o de la entidad de ubicaci\xF3n indicada abajo. Se aplica a los feeds de incidentes puntuales (NSW RFS): las alertas de \xE1rea no tienen distancia y nunca se filtran.","editor.my_location_entity":"Mi ubicaci\xF3n","editor.my_location_entity_helper":"Un rastreador de dispositivo, persona o zona cuyas coordenadas sustituyen la ubicaci\xF3n de Home Assistant como punto de referencia de la tarjeta: para el marcador \xABMi ubicaci\xF3n\xBB y como origen del filtro de distancia m\xE1xima. Usa una zona para una ubicaci\xF3n fija.","editor.animations":"Activar animaciones","editor.enhance_contrast":"Mejorar contraste","editor.enhance_contrast_off":"Desactivado","editor.enhance_contrast_subtle":"Sutil","editor.enhance_contrast_strict":"Estricto (WCAG AA)","editor.deduplicate":"Deduplicar alertas","editor.deduplicate_headlines":"Deduplicar titulares","editor.show_details":"Mostrar panel de detalles","editor.expand_details":"Siempre expandir detalles","editor.show_metadata":"Mostrar metadatos","editor.show_description":"Mostrar descripcion","editor.show_instructions":"Mostrar instrucciones","editor.show_geometry":"Mostrar mapa de \xE1rea","editor.geometry_style":"Estilo del mapa de \xE1rea","editor.geometry_style_shape":"Solo contorno","editor.geometry_style_map":"Mosaicos de mapa (en l\xEDnea)","editor.show_my_location":"Mostrar mi ubicaci\xF3n en el mapa","editor.show_provider":"Mostrar proveedor","editor.show_source_link":"Mostrar enlace de fuente","editor.reformat_text":"Reformatear texto (eliminar saltos de linea)","editor.compact":"Disposicion compacta","editor.font_size":"Tama\xF1o de fuente","editor.font_size_small":"Peque\xF1o","editor.font_size_default":"Predeterminado","editor.font_size_large":"Grande","editor.font_size_x_large":"Extra grande","editor.progress_fill":"Relleno de progreso","editor.progress_fill_track":"Barra fina","editor.progress_fill_background":"Fondo tenue","editor.styling_section":"Estilo de progreso e icono","editor.progress_style":"Decoraci\xF3n de la barra de progreso","editor.progress_style_wash_note":"Sin efecto cuando el relleno de progreso est\xE1 en Fondo tenue (el fondo siempre es s\xF3lido).","editor.progress_style_preparation":"Preparaci\xF3n","editor.progress_style_active":"Activa","editor.progress_style_ongoing":"En curso","editor.deco_solid":"S\xF3lido","editor.deco_striped":"Rayado","editor.deco_shimmer":"Destello","editor.deco_pulse":"Pulso","editor.icon_border_style":"Borde del anillo del icono","editor.icon_border_dashed":"Discontinuo","editor.icon_border_solid":"S\xF3lido","editor.hide_expired":"Ocultar alertas expiradas","editor.hide_no_alerts":"Ocultar tarjeta sin alertas","editor.unavailable_behavior":"Cuando una fuente no est\xE1 disponible","editor.unavailable_message":"Mostrar qu\xE9 fuente","editor.unavailable_compact":"Mostrar un indicador compacto","editor.unavailable_hide":"Ocultar indicador (no recomendado)","editor.unavailable_hide_warning":"Ocultar el indicador puede presentar una calma total mientras una fuente est\xE1 ciega: un sensor no disponible no es prueba de seguridad.","editor.tap_action":"Acci\xF3n al tocar","editor.tap_action_helper":"Definir cualquier acci\xF3n al tocar sustituye la expansi\xF3n en l\xEDnea en cada fila de alerta.","editor.tap_default":"Expandir en l\xEDnea (predeterminado)","editor.tap_details":"Ventana de detalles","editor.tap_more_info":"M\xE1s informaci\xF3n","editor.tap_navigate":"Navegar","editor.tap_url":"Abrir URL","editor.tap_toggle":"Alternar","editor.tap_perform_action":"Ejecutar acci\xF3n","editor.tap_call_service":"Llamar servicio (heredado)","editor.tap_fire_dom_event":"Disparar evento DOM","editor.tap_none":"Nada","editor.tap_navigation_path":"Ruta de navegaci\xF3n","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Esta acci\xF3n incluye datos que el editor visual no modifica. Su YAML existente se conserva: ed\xEDtelo en el editor YAML.","editor.tap_details_expand_hint":"Con \xABExpandir siempre los detalles\xBB desactivado, la ventana se abre con su descripci\xF3n detr\xE1s del bot\xF3n Leer detalles.","editor.allow_dismiss":"Permitir descartar alertas","editor.show_dismiss_undo":"Mostrar notificaci\xF3n para deshacer","editor.dismissed_count":"Descartadas: {count} alertas.","editor.dismissed_count_singular":"Descartada: {count} alerta.","editor.restore_all":"Restaurar todo","editor.show_preview":"Mostrar datos de ejemplo","editor.preview_hint":"Vista previa con alertas de ejemplo","editor.preview_nudge":"Sin alertas activas \u2014 active para previsualizar el diseno.","editor.entity_warning":"La entidad seleccionada no parece contener datos de alerta meteorologica.","editor.no_entities_hint":"No se encontraron entidades de alerta meteorologica compatibles. Se debe instalar una integracion (ej. NWS Alerts).","editor.no_entities_hint_link":"Proveedores compatibles","editor.feeds":"Recopilar feeds instalados automaticamente","editor.feeds_helper":"Feeds de integracion detectados. Marca uno para incluir cada incidente en vivo que reporta \u2014 sin entidades por incidente que listar. Requiere que la integracion este configurada en Home Assistant.","editor.source_hint":"Recopilando automaticamente {count} incidente(s) en vivo del feed \u2014 sin entidades que listar manualmente.","editor.feeds_missing_warning":"Sin datos en vivo para {feeds}. Este feed esta habilitado pero nada lo proporciona \u2014 \xBFesta la integracion configurada en Home Assistant?","editor.devices_missing_warning":"No se encontr\xF3 ning\xFAn dispositivo para {ids}. \xBFSe elimin\xF3 la integraci\xF3n?","editor.no_device_alerts_hint":"A\xFAn no se encontraron sensores de alerta activos bajo los dispositivos seleccionados. La tarjeta se rellenar\xE1 autom\xE1ticamente cuando la integraci\xF3n publique alertas.","editor.section_source":"Fuente","editor.section_filtering":"Filtrado","editor.section_appearance":"Apariencia","editor.section_detail_panel":"Panel de detalles","editor.section_behavior":"Comportamiento","editor.section_dismissal":"Descarte","editor.section_advanced":"Avanzado","editor.detail_sections":"Secciones","editor.panel_more":"+{count} m\xE1s","editor.option_default":"{label} (predeterminado)","editor.reset_default":"Restablecer el valor predeterminado","editor.also_set":"Tambi\xE9n definido: {names}","editor.dismiss_trigger":"Disparador","editor.dismiss_trigger_button":"Solo boton","editor.dismiss_trigger_swipe":"Solo deslizamiento","editor.dismiss_trigger_both":"Boton y deslizamiento","editor.dismiss_button_style":"Estilo del boton","editor.dismiss_button_style_icon":"Solo icono","editor.dismiss_button_style_labeled":"Icono y texto"},is={"card.no_alerts":"Nessuna allerta attiva.","card.sources_unavailable_named":"{name} non disponibile","card.sources_unavailable_count":"{count} fonti non disponibili","card.sources_unavailable_one":"Una fonte non \xE8 disponibile","card.preview":"Dati di esempio","card.read_details":"Leggi dettagli","card.open_source":"Apri fonte {provider}","card.zones_count":"{count} zone","card.zone_count_singular":"{count} zona","card.dismiss":"Ignora","card.dismissed_toast":"Ignorata: {event}","card.dismissed_toast_undo":"Annulla","card.close":"Chiudi","detail.issued":"Emessa","detail.onset":"Inizio","detail.expires":"Scadenza","detail.area":"Area","detail.distance":"Distanza","detail.geometry_with_location":"{area}, con la tua posizione indicata","detail.source":"Fonte","detail.description":"Descrizione","detail.instructions":"Istruzioni","progress.start":"Inizio","progress.now":"Ora","progress.end":"Fine","progress.ongoing":"In corso","progress.expires_in_label":"Scade tra","progress.starts_in_label":"Inizia tra","progress.tbd":"N.D.","progress.na":"N/D","progress.expired_label":"Scaduta","progress.compact_active":"per {time}","progress.compact_prep":"tra {time}","progress.compact_ongoing":"in corso","progress.compact_expired":"scaduta {time} fa","time.just_now":"proprio ora","time.in_less_than_1m":"in <1m","time.minutes_ago":"{m}m fa","time.in_minutes":"in {m}m","time.hours_ago":"{dur} fa","time.in_hours":"in {dur}","time.days_ago":"{d}g fa","time.in_days":"in {d}g","badge.severity_extreme":"Estrema","badge.severity_severe":"Grave","badge.severity_moderate":"Moderata","badge.severity_minor":"Lieve","badge.severity_unknown":"Sconosciuta","badge.certainty_observed":"Osservata","badge.certainty_likely":"Probabile","badge.certainty_possible":"Possibile","badge.certainty_unlikely":"Improbabile","badge.certainty_unknown":"Sconosciuta","editor.entities":"Entit\xE0","editor.title":"Titolo (opzionale)","editor.provider":"Fornitore allerte","editor.provider_auto":"Rilevamento automatico","editor.provider_nws":"NWS (Stati Uniti)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Germania)","editor.provider_nina":"NINA (Germania, protezione civile)","editor.provider_meteoswiss":"MeteoSwiss (Svizzera)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australia)","editor.provider_cap":"Allerte CAP (multi-regione)","editor.devices":"Dispositivi di allerta (opzionale)","editor.devices_helper":"Aggiunge automaticamente ogni sensore di allerta attivo sotto i dispositivi selezionati (CAP Alerts, NINA). Aggiungi altri dispositivi per combinare localit\xE0 o fornitori.","editor.zones":"Zone (opzionale)","editor.zones_helper":"Codici area_id BoM separati da virgola, es. NSW_FL049","editor.event_codes":"Codici evento (opzionale)","editor.event_codes_helper":"Codici evento separati da virgola, es. TOW, SVW (NWS) o 31, 95 (DWD)","editor.exclude_event_codes":"Escludi codici evento (opzionale)","editor.exclude_event_codes_helper":"Codici evento da escludere, es. SCY (NWS) o 22 (DWD)","editor.sort_order":"Ordinamento","editor.sort_default":"Predefinito","editor.sort_onset":"Ora di inizio","editor.sort_severity":"Gravit\xE0","editor.color_theme":"Tema colori","editor.color_severity":"Basato sulla gravit\xE0","editor.color_nws":"NWS ufficiale","editor.color_meteoalarm":"MeteoAlarm Livelli","editor.color_eccc":"Allerte pubbliche ECCC","editor.timezone":"Fuso orario","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (dispositivo locale)","editor.min_severity":"Gravit\xE0 minima","editor.severity_all":"Tutte le gravit\xE0","editor.severity_minor":"Lieve o superiore","editor.severity_moderate":"Moderata o superiore","editor.severity_severe":"Grave o superiore","editor.severity_extreme":"Solo estrema","editor.max_distance":"Distanza massima ({unit})","editor.max_distance_helper":"Mostra solo gli incidenti entro questa distanza dalla posizione della tua installazione Home Assistant, o dall'entit\xE0 di posizione impostata qui sotto. Si applica ai feed di incidenti puntuali (NSW RFS) \u2014 le allerte di area non hanno una distanza e non vengono mai filtrate.","editor.my_location_entity":"La mia posizione","editor.my_location_entity_helper":"Un device tracker, una persona o una zona le cui coordinate sostituiscono la posizione di Home Assistant come punto di riferimento della scheda: per il marcatore \xABLa mia posizione\xBB e come origine del filtro di distanza massima. Usa una zona per una posizione fissa.","editor.animations":"Abilita animazioni","editor.enhance_contrast":"Migliora contrasto","editor.enhance_contrast_off":"Disattivato","editor.enhance_contrast_subtle":"Sottile","editor.enhance_contrast_strict":"Rigoroso (WCAG AA)","editor.deduplicate":"Deduplica allerte","editor.deduplicate_headlines":"Deduplica titoli","editor.show_details":"Mostra pannello dettagli","editor.expand_details":"Espandi sempre i dettagli","editor.show_metadata":"Mostra metadati","editor.show_description":"Mostra descrizione","editor.show_instructions":"Mostra istruzioni","editor.show_geometry":"Mostra mappa area","editor.geometry_style":"Stile mappa area","editor.geometry_style_shape":"Solo contorno","editor.geometry_style_map":"Tile mappa (online)","editor.show_my_location":"Mostra la mia posizione sulla mappa","editor.show_provider":"Mostra fornitore","editor.show_source_link":"Mostra link alla fonte","editor.reformat_text":"Riformatta testo (rimuovi interruzioni di riga)","editor.compact":"Layout compatto","editor.font_size":"Dimensione testo","editor.font_size_small":"Piccolo","editor.font_size_default":"Predefinito","editor.font_size_large":"Grande","editor.font_size_x_large":"Molto grande","editor.progress_fill":"Riempimento avanzamento","editor.progress_fill_track":"Barra sottile","editor.progress_fill_background":"Sfondo colorato","editor.styling_section":"Stile avanzamento e icona","editor.progress_style":"Decorazione barra di avanzamento","editor.progress_style_wash_note":"Non applicata quando il riempimento avanzamento \xE8 impostato su Sfondo colorato (lo sfondo \xE8 sempre pieno).","editor.progress_style_preparation":"Preparazione","editor.progress_style_active":"Attiva","editor.progress_style_ongoing":"In corso","editor.deco_solid":"Pieno","editor.deco_striped":"Righe","editor.deco_shimmer":"Bagliore","editor.deco_pulse":"Pulsazione","editor.icon_border_style":"Bordo dell'anello dell'icona","editor.icon_border_dashed":"Tratteggiato","editor.icon_border_solid":"Pieno","editor.hide_expired":"Nascondi allerte scadute","editor.hide_no_alerts":"Nascondi scheda senza allerte","editor.unavailable_behavior":"Quando una fonte non \xE8 disponibile","editor.unavailable_message":"Mostra quale fonte","editor.unavailable_compact":"Mostra un indicatore compatto","editor.unavailable_hide":"Nascondi indicatore (sconsigliato)","editor.unavailable_hide_warning":"Nascondere l'indicatore pu\xF2 presentare un cessato allarme mentre una fonte \xE8 cieca: un sensore non disponibile non \xE8 prova di sicurezza.","editor.tap_action":"Azione al tocco","editor.tap_action_helper":"Impostare una qualsiasi azione al tocco sostituisce l'espansione in linea su ogni riga di allerta.","editor.tap_default":"Espansione in linea (predefinito)","editor.tap_details":"Finestra dei dettagli","editor.tap_more_info":"Maggiori informazioni","editor.tap_navigate":"Naviga","editor.tap_url":"Apri URL","editor.tap_toggle":"Attiva/disattiva","editor.tap_perform_action":"Esegui azione","editor.tap_call_service":"Chiama servizio (obsoleto)","editor.tap_fire_dom_event":"Genera evento DOM","editor.tap_none":"Niente","editor.tap_navigation_path":"Percorso di navigazione","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Questa azione trasporta dati che l'editor visuale non modifica. Il suo YAML esistente viene conservato: modificalo nell'editor YAML.","editor.tap_details_expand_hint":"Con \xABEspandi sempre i dettagli\xBB disattivato, la finestra si apre con la descrizione dietro il pulsante Leggi i dettagli.","editor.allow_dismiss":"Consenti di ignorare le allerte","editor.show_dismiss_undo":"Mostra notifica di annullamento","editor.dismissed_count":"Ignorate: {count} allerte.","editor.dismissed_count_singular":"Ignorata: {count} allerta.","editor.restore_all":"Ripristina tutto","editor.show_preview":"Mostra dati di esempio","editor.preview_hint":"Anteprima del layout con allerte di esempio","editor.preview_nudge":"Nessuna allerta attiva \u2014 attiva per visualizzare il layout.","editor.entity_warning":"L'entit\xE0 selezionata non sembra contenere dati di allerta meteo.","editor.no_entities_hint":"Nessuna entita di allerta meteo compatibile trovata. Un'integrazione (es. NWS Alerts) deve essere installata.","editor.no_entities_hint_link":"Provider supportati","editor.feeds":"Raccolta automatica dai feed installati","editor.feeds_helper":"Feed di integrazione rilevati. Selezionane uno per includere ogni incidente in tempo reale che segnala \u2014 nessuna entita per incidente da elencare. Richiede che l'integrazione sia configurata in Home Assistant.","editor.source_hint":"Raccolta automatica di {count} incident(i) in tempo reale dal feed \u2014 nessuna entita da elencare manualmente.","editor.feeds_missing_warning":"Nessun dato in tempo reale per {feeds}. Questo feed e abilitato ma nulla lo fornisce \u2014 l'integrazione e configurata in Home Assistant?","editor.devices_missing_warning":"Nessun dispositivo trovato per {ids}. L'integrazione \xE8 stata rimossa?","editor.no_device_alerts_hint":"Nessun sensore di allerta attivo trovato sotto i dispositivi selezionati per ora. La scheda si popoler\xE0 automaticamente quando l'integrazione pubblicher\xE0 delle allerte.","editor.section_source":"Sorgente","editor.section_filtering":"Filtraggio","editor.section_appearance":"Aspetto","editor.section_detail_panel":"Pannello dettagli","editor.section_behavior":"Comportamento","editor.section_dismissal":"Dismissione","editor.section_advanced":"Avanzate","editor.detail_sections":"Sezioni","editor.panel_more":"+{count} altri","editor.option_default":"{label} (predefinito)","editor.reset_default":"Ripristina il valore predefinito","editor.also_set":"Impostati anche: {names}","editor.dismiss_trigger":"Attivatore","editor.dismiss_trigger_button":"Solo pulsante","editor.dismiss_trigger_swipe":"Solo scorrimento","editor.dismiss_trigger_both":"Pulsante e scorrimento","editor.dismiss_button_style":"Stile pulsante","editor.dismiss_button_style_icon":"Solo icona","editor.dismiss_button_style_labeled":"Icona e testo"},rs={"card.no_alerts":"Keine aktiven Warnungen.","card.sources_unavailable_named":"{name} nicht verf\xFCgbar","card.sources_unavailable_count":"{count} Quellen nicht verf\xFCgbar","card.sources_unavailable_one":"Eine Quelle ist nicht verf\xFCgbar","card.preview":"Beispieldaten","card.read_details":"Details lesen","card.open_source":"{provider}-Quelle \xF6ffnen","card.zones_count":"{count} Zonen","card.zone_count_singular":"{count} Zone","card.dismiss":"Ausblenden","card.dismissed_toast":"Ausgeblendet: {event}","card.dismissed_toast_undo":"R\xFCckg\xE4ngig","card.close":"Schlie\xDFen","detail.issued":"Ausgegeben","detail.onset":"Beginn","detail.expires":"Ablauf","detail.area":"Gebiet","detail.distance":"Entfernung","detail.geometry_with_location":"{area}, mit Ihrem Standort markiert","detail.source":"Quelle","detail.description":"Beschreibung","detail.instructions":"Hinweise","progress.start":"Start","progress.now":"Jetzt","progress.end":"Ende","progress.ongoing":"Laufend","progress.expires_in_label":"Endet in","progress.starts_in_label":"Beginnt in","progress.tbd":"Offen","progress.na":"K. A.","progress.expired_label":"Abgelaufen","progress.compact_active":"f\xFCr {time}","progress.compact_prep":"in {time}","progress.compact_ongoing":"laufend","progress.compact_expired":"abgelaufen vor {time}","time.just_now":"gerade eben","time.in_less_than_1m":"in <1 Min","time.minutes_ago":"vor {m} Min","time.in_minutes":"in {m} Min","time.hours_ago":"vor {dur}","time.in_hours":"in {dur}","time.days_ago":"vor {d} T","time.in_days":"in {d} T","badge.severity_extreme":"Extrem","badge.severity_severe":"Schwer","badge.severity_moderate":"M\xE4\xDFig","badge.severity_minor":"Gering","badge.severity_unknown":"Unbekannt","badge.certainty_observed":"Beobachtet","badge.certainty_likely":"Wahrscheinlich","badge.certainty_possible":"M\xF6glich","badge.certainty_unlikely":"Unwahrscheinlich","badge.certainty_unknown":"Unbekannt","editor.entities":"Entit\xE4ten","editor.title":"Titel (optional)","editor.provider":"Warnanbieter","editor.provider_auto":"Automatisch erkennen","editor.provider_nws":"NWS (USA)","editor.provider_bom":"BoM (Australien)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Deutschland)","editor.provider_nina":"NINA (Deutschland, Bev\xF6lkerungsschutz)","editor.provider_meteoswiss":"MeteoSwiss (Schweiz)","editor.provider_eccc":"ECCC (Kanada)","editor.provider_nsw_rfs":"NSW RFS (Australien)","editor.provider_cap":"CAP-Warnungen (multi-regional)","editor.devices":"Warnger\xE4te (optional)","editor.devices_helper":"Bezieht automatisch jeden aktiven Warnsensor unter den ausgew\xE4hlten Ger\xE4ten ein (CAP Alerts, NINA). Weitere Ger\xE4te hinzuf\xFCgen, um Orte oder Anbieter zu kombinieren.","editor.zones":"Zonen (optional)","editor.zones_helper":"Kommagetrennte BoM area_id-Codes, z. B. NSW_FL049","editor.event_codes":"Ereigniscodes (optional)","editor.event_codes_helper":"Kommagetrennte Ereigniscodes, z. B. TOW, SVW (NWS) oder 31, 95 (DWD)","editor.exclude_event_codes":"Ereigniscodes ausschlie\xDFen (optional)","editor.exclude_event_codes_helper":"Ereigniscodes zum Ausschlie\xDFen, z. B. SCY (NWS) oder 22 (DWD)","editor.sort_order":"Sortierung","editor.sort_default":"Standard","editor.sort_onset":"Beginnzeit","editor.sort_severity":"Schweregrad","editor.color_theme":"Farbschema","editor.color_severity":"Nach Schweregrad","editor.color_nws":"NWS offiziell","editor.color_meteoalarm":"MeteoAlarm Warnstufen","editor.color_eccc":"ECCC \xF6ffentliche Warnungen","editor.timezone":"Zeitzone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (lokales Ger\xE4t)","editor.min_severity":"Mindestschweregrad","editor.severity_all":"Alle Schweregrade","editor.severity_minor":"Gering oder h\xF6her","editor.severity_moderate":"M\xE4\xDFig oder h\xF6her","editor.severity_severe":"Schwer oder h\xF6her","editor.severity_extreme":"Nur extrem","editor.max_distance":"Maximale Entfernung ({unit})","editor.max_distance_helper":"Nur Ereignisse innerhalb dieser Entfernung vom Standort Ihrer Home-Assistant-Installation oder von der unten gew\xE4hlten Standort-Entit\xE4t anzeigen. Gilt f\xFCr Einzelereignis-Feeds (NSW RFS) \u2014 Fl\xE4chenwarnungen haben keine Entfernung und werden nie gefiltert.","editor.my_location_entity":"Mein Standort","editor.my_location_entity_helper":"Ein Ger\xE4tetracker, eine Person oder eine Zone, deren Koordinaten den Home-Assistant-Standort als Bezugspunkt der Karte ersetzen \u2014 f\xFCr die Markierung \u201EMein Standort\u201C und als Ausgangspunkt des Filters f\xFCr die maximale Entfernung. F\xFCr einen festen Ort eine Zone verwenden.","editor.animations":"Animationen aktivieren","editor.enhance_contrast":"Kontrast erh\xF6hen","editor.enhance_contrast_off":"Aus","editor.enhance_contrast_subtle":"Dezent","editor.enhance_contrast_strict":"Streng (WCAG AA)","editor.deduplicate":"Warnungen deduplizieren","editor.deduplicate_headlines":"\xDCberschriften deduplizieren","editor.show_details":"Detailbereich anzeigen","editor.expand_details":"Details immer anzeigen","editor.show_metadata":"Metadaten anzeigen","editor.show_description":"Beschreibung anzeigen","editor.show_instructions":"Hinweise anzeigen","editor.show_geometry":"Gebietskarte anzeigen","editor.geometry_style":"Gebietskartenstil","editor.geometry_style_shape":"Nur Umriss","editor.geometry_style_map":"Kartenkacheln (online)","editor.show_my_location":"Meinen Standort auf der Karte anzeigen","editor.show_provider":"Anbieter anzeigen","editor.show_source_link":"Quelllink anzeigen","editor.reformat_text":"Text umformatieren (harte Zeilenumbr\xFCche entfernen)","editor.compact":"Kompaktes Layout","editor.font_size":"Schriftgr\xF6\xDFe","editor.font_size_small":"Klein","editor.font_size_default":"Standard","editor.font_size_large":"Gro\xDF","editor.font_size_x_large":"Sehr gro\xDF","editor.progress_fill":"Fortschrittsf\xFCllung","editor.progress_fill_track":"D\xFCnner Balken","editor.progress_fill_background":"Hintergrund-F\xFCllung","editor.styling_section":"Fortschritts- & Symbolstil","editor.progress_style":"Fortschrittsbalken-Dekoration","editor.progress_style_wash_note":"Ohne Wirkung, wenn die Fortschrittsf\xFCllung auf Hintergrund-F\xFCllung steht (die F\xFCllung ist immer einfarbig).","editor.progress_style_preparation":"Vorbereitung","editor.progress_style_active":"Aktiv","editor.progress_style_ongoing":"Laufend","editor.deco_solid":"Einfarbig","editor.deco_striped":"Gestreift","editor.deco_shimmer":"Schimmer","editor.deco_pulse":"Puls","editor.icon_border_style":"Symbolring-Rahmen","editor.icon_border_dashed":"Gestrichelt","editor.icon_border_solid":"Durchgezogen","editor.hide_expired":"Abgelaufene Warnungen ausblenden","editor.hide_no_alerts":"Karte ohne aktive Warnungen ausblenden","editor.unavailable_behavior":"Wenn eine Quelle nicht verf\xFCgbar ist","editor.unavailable_message":"Betroffene Quelle anzeigen","editor.unavailable_compact":"Kompakten Hinweis anzeigen","editor.unavailable_hide":"Anzeige ausblenden (nicht empfohlen)","editor.unavailable_hide_warning":"Das Ausblenden der Anzeige kann Entwarnung signalisieren, w\xE4hrend eine Quelle blind ist \u2014 ein nicht verf\xFCgbarer Sensor ist kein Beweis f\xFCr Sicherheit.","editor.tap_action":"Aktion beim Tippen","editor.tap_action_helper":"Eine beliebige Tipp-Aktion ersetzt das Aufklappen der Details in jeder Warnungszeile.","editor.tap_default":"Inline aufklappen (Standard)","editor.tap_details":"Detail-Dialog","editor.tap_more_info":"Weitere Informationen","editor.tap_navigate":"Navigieren","editor.tap_url":"URL \xF6ffnen","editor.tap_toggle":"Umschalten","editor.tap_perform_action":"Aktion ausf\xFChren","editor.tap_call_service":"Dienst aufrufen (veraltet)","editor.tap_fire_dom_event":"DOM-Ereignis ausl\xF6sen","editor.tap_none":"Nichts","editor.tap_navigation_path":"Navigationspfad","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Diese Aktion enth\xE4lt Daten, die der visuelle Editor nicht bearbeitet. Das vorhandene YAML bleibt erhalten \u2014 bearbeite es im YAML-Editor.","editor.tap_details_expand_hint":'Wenn \u201EDetails immer aufklappen" deaktiviert ist, \xF6ffnet sich der Dialog mit der Beschreibung hinter der Schaltfl\xE4che \u201EDetails lesen".',"editor.allow_dismiss":"Warnungen ausblendbar machen","editor.show_dismiss_undo":"R\xFCckg\xE4ngig-Benachrichtigung anzeigen","editor.dismissed_count":"Ausgeblendet: {count} Warnungen.","editor.dismissed_count_singular":"Ausgeblendet: {count} Warnung.","editor.restore_all":"Alle wiederherstellen","editor.show_preview":"Beispieldaten anzeigen","editor.preview_hint":"Kartenlayout mit Beispielwarnungen anzeigen","editor.preview_nudge":"Keine aktiven Warnungen \u2014 aktivieren, um das Kartenlayout zu sehen.","editor.entity_warning":"Die ausgew\xE4hlte Entit\xE4t scheint keine Wetterwarnungsdaten zu enthalten.","editor.no_entities_hint":"Keine kompatiblen Wetterwarnungs-Entitaten gefunden. Eine Integration (z.B. NWS Alerts) muss installiert sein.","editor.no_entities_hint_link":"Unterstutzte Anbieter","editor.feeds":"Automatisch aus installierten Feeds erfassen","editor.feeds_helper":"Erkannte Integrations-Feeds. Wahlen Sie einen aus, um jedes gemeldete Live-Ereignis einzuschliessen \u2014 keine Entitaten pro Ereignis aufzulisten. Erfordert, dass die Integration in Home Assistant eingerichtet ist.","editor.source_hint":"Automatische Erfassung von {count} Live-Ereignis(sen) aus dem Feed \u2014 keine Entitaten manuell aufzulisten.","editor.feeds_missing_warning":"Keine Live-Daten fur {feeds}. Dieser Feed ist aktiviert, aber nichts liefert Daten \u2014 ist die Integration in Home Assistant eingerichtet?","editor.devices_missing_warning":"Kein Ger\xE4t f\xFCr {ids} gefunden. Wurde die Integration entfernt?","editor.no_device_alerts_hint":"Noch keine aktiven Warnsensoren unter den ausgew\xE4hlten Ger\xE4ten gefunden. Die Karte f\xFCllt sich automatisch, sobald die Integration Warnungen ver\xF6ffentlicht.","editor.section_source":"Quelle","editor.section_filtering":"Filterung","editor.section_appearance":"Darstellung","editor.section_detail_panel":"Detailbereich","editor.section_behavior":"Verhalten","editor.section_dismissal":"Ausblenden","editor.section_advanced":"Erweitert","editor.detail_sections":"Abschnitte","editor.panel_more":"+{count} weitere","editor.option_default":"{label} (Standard)","editor.reset_default":"Auf Standard zur\xFCcksetzen","editor.also_set":"Ebenfalls gesetzt: {names}","editor.dismiss_trigger":"Ausl\xF6ser","editor.dismiss_trigger_button":"Nur Schaltfl\xE4che","editor.dismiss_trigger_swipe":"Nur wischen","editor.dismiss_trigger_both":"Schaltfl\xE4che und wischen","editor.dismiss_button_style":"Schaltfl\xE4chenstil","editor.dismiss_button_style_icon":"Nur Symbol","editor.dismiss_button_style_labeled":"Symbol und Text"},os={"card.no_alerts":"Geen actieve alerts.","card.sources_unavailable_named":"{name} niet beschikbaar","card.sources_unavailable_count":"{count} bronnen niet beschikbaar","card.sources_unavailable_one":"Een bron is niet beschikbaar","card.preview":"Voorbeeld Data","card.read_details":"Meer Details","card.open_source":"Open bron van {provider}","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","card.dismiss":"Negeren","card.dismissed_toast":"Genegeerd: {event}","card.dismissed_toast_undo":"Maak ongedaan","card.close":"Sluiten","detail.issued":"Uitgegeven","detail.onset":"Begin","detail.expires":"Verloopt","detail.area":"Gebied","detail.distance":"Afstand","detail.geometry_with_location":"{area}, met je locatie gemarkeerd","detail.source":"Bron","detail.description":"Beschrijving","detail.instructions":"Instructies","progress.start":"Gestart","progress.now":"Nu","progress.end":"Einde","progress.ongoing":"Lopend","progress.expires_in_label":"Verloopt over","progress.starts_in_label":"Begint over","progress.tbd":"N.t.b.","progress.na":"N/A","progress.expired_label":"Verlopen","progress.compact_active":"Gedurende {time}","progress.compact_prep":"over {time}","progress.compact_ongoing":"lopend","progress.compact_expired":"{time} geleden verlopen","time.just_now":"zojuist","time.in_less_than_1m":"binnen 1m","time.minutes_ago":"{m}m geleden","time.in_minutes":"over {m}m","time.hours_ago":"{dur} geleden","time.in_hours":"over {dur}","time.days_ago":"{d}d geleden","time.in_days":"over {d}d","badge.severity_extreme":"Extreem","badge.severity_severe":"Ernstig","badge.severity_moderate":"Matig","badge.severity_minor":"Licht","badge.severity_unknown":"Onbekend","badge.certainty_observed":"Waargenomen","badge.certainty_likely":"Waarschijnlijk","badge.certainty_possible":"Mogelijk","badge.certainty_unlikely":"Onwaarschijnlijk","badge.certainty_unknown":"Onbekend","editor.entities":"Entiteiten","editor.title":"Titel (optioneel)","editor.provider":"Waarschuwingsbron","editor.provider_auto":"Automatisch detecteren","editor.provider_nws":"NWS (Verenigde Staten)","editor.provider_bom":"BoM (Australi\xEB)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Duitsland)","editor.provider_nina":"NINA (Duitsland, civiele bescherming)","editor.provider_meteoswiss":"MeteoSwiss (Zwitserland)","editor.provider_eccc":"ECCC (Canada)","editor.provider_nsw_rfs":"NSW RFS (Australi\xEB)","editor.provider_cap":"CAP Alerts (meerdere regio's)","editor.devices":"Waarschuwingsapparaten (optioneel)","editor.devices_helper":"Haalt automatisch elke actieve waarschuwingssensor onder de geselecteerde apparaten binnen (CAP Alerts, NINA). Voeg meer apparaten toe om locaties of aanbieders te combineren.","editor.zones":"Zones (optioneel)","editor.zones_helper":"Comma-gescheiden BoM area_id codes, bijv. NSW_FL049","editor.event_codes":"Gebeurteniscodes (optioneel)","editor.event_codes_helper":"Comma-gescheiden gebeurteniscodes, bijv. TOW, SVW (NWS) of 31, 95 (DWD)","editor.exclude_event_codes":"Gebeurteniscodes uitsluiten (optioneel)","editor.exclude_event_codes_helper":"Comma-gescheiden gebeurteniscodes om uit te sluiten, bijv. SCY (NWS) of 22 (DWD)","editor.sort_order":"Sorteervolgorde","editor.sort_default":"Standaard","editor.sort_onset":"Begintijd","editor.sort_severity":"Ernst","editor.color_theme":"Kleurthema","editor.color_severity":"Op basis van ernst","editor.color_nws":"NWS Officieel","editor.color_meteoalarm":"MeteoAlarm Bewustwording","editor.color_eccc":"ECCC Publieke Waarschuwingen","editor.timezone":"Tijdzone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (lokaal apparaat)","editor.min_severity":"Minimale ernst","editor.severity_all":"Alle gradaties","editor.severity_minor":"Licht of hoger","editor.severity_moderate":"Matig of hoger","editor.severity_severe":"Ernstig of hoger","editor.severity_extreme":"Alleen extreem","editor.max_distance":"Maximale afstand ({unit})","editor.max_distance_helper":"Toon alleen incidenten binnen deze afstand van de locatie van je Home Assistant, of van de hieronder gekozen locatie-entiteit. Geldt voor feeds met losse incidenten (NSW RFS) \u2014 gebiedswaarschuwingen hebben geen afstand en worden nooit gefilterd.","editor.my_location_entity":"Mijn locatie","editor.my_location_entity_helper":'Een device tracker, persoon of zone waarvan de co\xF6rdinaten de Home Assistant-locatie vervangen als referentiepunt van de kaart \u2014 voor de markering "Mijn locatie" en als oorsprong van het maximale-afstandsfilter. Gebruik een zone voor een vaste locatie.',"editor.animations":"Animaties inschakelen","editor.enhance_contrast":"Contrast verbeteren","editor.enhance_contrast_off":"Uit","editor.enhance_contrast_subtle":"Subtiel","editor.enhance_contrast_strict":"Strikt (WCAG AA)","editor.deduplicate":"Waarschuwingen ontdubbelen","editor.deduplicate_headlines":"Kopteksten ontdubbelen","editor.show_details":"Detailpaneel tonen","editor.expand_details":"Details altijd uitklappen","editor.show_metadata":"Metadata tonen","editor.show_description":"Beschrijving tonen","editor.show_instructions":"Instructies tonen","editor.show_geometry":"Gebiedskaart tonen","editor.geometry_style":"Stijl gebiedskaart","editor.geometry_style_shape":"Alleen omlijning","editor.geometry_style_map":"Kaarttegels (online)","editor.show_my_location":"Mijn locatie op de kaart tonen","editor.show_provider":"Providerlabel tonen","editor.show_source_link":"Bronlink tonen","editor.reformat_text":"Tekst automatisch omloop geven (harde afbrekingen verwijderen)","editor.compact":"Compacte lay-out","editor.font_size":"Lettergrootte","editor.font_size_small":"Klein","editor.font_size_default":"Standaard","editor.font_size_large":"Groot","editor.font_size_x_large":"Extra groot","editor.progress_fill":"Voortgangsinvulling","editor.progress_fill_track":"Spoor (dunne balk)","editor.progress_fill_background":"Achtergrondgloed","editor.styling_section":"Stijl van voortgang & icoon","editor.progress_style":"Decoratie voortgangsbalk","editor.progress_style_wash_note":"Wordt niet toegepast als Voortgangsinvulling is ingesteld op Achtergrondgloed (de gloed is altijd effen).","editor.progress_style_preparation":"Voorbereiding","editor.progress_style_active":"Actief","editor.progress_style_ongoing":"Lopend","editor.deco_solid":"Effen","editor.deco_striped":"Gestreept","editor.deco_shimmer":"Schittering","editor.deco_pulse":"Pulseren","editor.icon_border_style":"Icoon grensrand","editor.icon_border_dashed":"Gestreept","editor.icon_border_solid":"Effen","editor.hide_expired":"Verlopen waarschuwingen verbergen","editor.hide_no_alerts":"Kaart verbergen als er geen actieve waarschuwingen zijn","editor.unavailable_behavior":"Wanneer een bron niet beschikbaar is","editor.unavailable_message":"Toon welke bron","editor.unavailable_compact":"Toon een compacte indicator","editor.unavailable_hide":"Indicator verbergen (niet aanbevolen)","editor.unavailable_hide_warning":"Het verbergen van de indicator kan een vals gevoel van veiligheid geven terwijl een bron blind is \u2014 een onbeschikbare sensor is geen bewijs van veiligheid.","editor.tap_action":"Tik-actie","editor.tap_action_helper":"Het instellen van een tik-actie vervangt de inline uitklapmogelijkheid op elke waarschuwingsregel.","editor.tap_default":"Inline uitklappen (standaard)","editor.tap_details":"Detail pop-up","editor.tap_more_info":"Meer info","editor.tap_navigate":"Navigeren","editor.tap_url":"URL openen","editor.tap_toggle":"Schakelen","editor.tap_perform_action":"Actie uitvoeren","editor.tap_call_service":"Service aanroepen (verouderd)","editor.tap_fire_dom_event":"DOM-event afvuren","editor.tap_none":"Niets","editor.tap_navigation_path":"Navigatiepad","editor.tap_url_path":"URL","editor.tap_yaml_managed":"Deze actie bevat gegevens die de visuele editor niet bewerkt. De bestaande YAML blijft behouden \u2014 bewerk deze in de YAML-editor.","editor.tap_details_expand_hint":'Als "Details altijd uitklappen" is uitgeschakeld, opent de pop-up met de beschrijving achter de knop Meer Details.',"editor.allow_dismiss":"Toestaan van afwijzen waarschuwingen","editor.show_dismiss_undo":"Toon ongedaan maken-notificatie bij afwijzen","editor.dismissed_count":"Afgewezen: {count} waarschuwingen.","editor.dismissed_count_singular":"Afgewezen: {count} waarschuwing.","editor.restore_all":"Alles herstellen","editor.show_preview":"Voorbeelddata tonen","editor.preview_hint":"Voorbeeld van kaartlay-out met testwaarschuwingen","editor.preview_nudge":"Geen actieve waarschuwingen \u2014 inschakelen om de lay-out van de kaart te bekijken.","editor.entity_warning":"Geselecteerde entiteit lijkt geen weerwaarschuwingsgegevens te bevatten.","editor.no_entities_hint":"Geen ondersteunde weerwaarschuwingsentiteiten gevonden. Er moet eerst een provider-integratie (bijv. NWS Alerts) worden ge\xEFnstalleerd.","editor.no_entities_hint_link":"Ondersteunde providers","editor.feeds":"Automatisch verzamelen van ge\xEFnstalleerde feeds","editor.feeds_helper":"Gedetecteerde integratie-feeds. Vink er een aan om elk live incident op te nemen dat deze rapporteert \u2014 geen entiteiten per incident te vermelden. Vereist dat de integratie is ingesteld in Home Assistant.","editor.source_hint":"Automatisch verzamelen van {count} live incident(en) uit de feed \u2014 geen entiteiten om handmatig te vermelden.","editor.feeds_missing_warning":"Geen live gegevens voor {feeds}. Deze feed is ingeschakeld maar niets levert gegevens \u2014 is de integratie ingesteld in Home Assistant?","editor.devices_missing_warning":"Geen apparaat gevonden voor {ids}. Is de integratie verwijderd?","editor.no_device_alerts_hint":"Nog geen actieve waarschuwingssensoren gevonden onder de geselecteerde apparaten. De kaart wordt automatisch gevuld wanneer de integratie waarschuwingen publiceert.","editor.section_source":"Bron","editor.section_filtering":"Filteren","editor.section_appearance":"Weergave","editor.section_detail_panel":"Detailpaneel","editor.section_behavior":"Gedrag","editor.section_dismissal":"Afwijzen","editor.section_advanced":"Geavanceerd","editor.detail_sections":"Secties","editor.panel_more":"+{count} meer","editor.option_default":"{label} (standaard)","editor.reset_default":"Terugzetten naar standaard","editor.also_set":"Ook ingesteld: {names}","editor.dismiss_trigger":"Actie voor afwijzen","editor.dismiss_trigger_button":"Alleen knop","editor.dismiss_trigger_swipe":"Alleen swipen","editor.dismiss_trigger_both":"Knop en swipen","editor.dismiss_button_style":"Knopstijl","editor.dismiss_button_style_icon":"Alleen icoon","editor.dismiss_button_style_labeled":"Icoon en label"},ns={"card.no_alerts":"\u65E0\u6D3B\u8DC3\u8B66\u62A5\u3002","card.sources_unavailable_named":"{name} \u4E0D\u53EF\u7528","card.sources_unavailable_count":"{count} \u4E2A\u6765\u6E90\u4E0D\u53EF\u7528","card.sources_unavailable_one":"\u4E00\u4E2A\u6765\u6E90\u4E0D\u53EF\u7528","card.preview":"\u793A\u4F8B\u6570\u636E","card.read_details":"\u67E5\u770B\u8BE6\u60C5","card.open_source":"\u6253\u5F00 {provider} \u6765\u6E90","card.zones_count":"{count} \u4E2A\u533A\u57DF","card.zone_count_singular":"{count} \u4E2A\u533A\u57DF","card.dismiss":"\u5FFD\u7565","card.dismissed_toast":"\u5DF2\u5FFD\u7565\uFF1A{event}","card.dismissed_toast_undo":"\u64A4\u9500","card.close":"\u5173\u95ED","detail.issued":"\u53D1\u5E03\u65F6\u95F4","detail.onset":"\u5F00\u59CB\u65F6\u95F4","detail.expires":"\u8FC7\u671F\u65F6\u95F4","detail.area":"\u533A\u57DF","detail.distance":"\u8DDD\u79BB","detail.geometry_with_location":"{area}\uFF0C\u5DF2\u6807\u51FA\u60A8\u7684\u4F4D\u7F6E","detail.source":"\u6765\u6E90","detail.description":"\u63CF\u8FF0","detail.instructions":"\u8BF4\u660E","progress.start":"\u5F00\u59CB","progress.now":"\u73B0\u5728","progress.end":"\u7ED3\u675F","progress.ongoing":"\u8FDB\u884C\u4E2D","progress.expires_in_label":"\u5C06\u4E8E\u4EE5\u4E0B\u65F6\u95F4\u540E\u8FC7\u671F","progress.starts_in_label":"\u5C06\u4E8E\u4EE5\u4E0B\u65F6\u95F4\u540E\u5F00\u59CB","progress.tbd":"\u5F85\u5B9A","progress.na":"\u4E0D\u9002\u7528","progress.expired_label":"\u5DF2\u8FC7\u671F","progress.compact_active":"\u6301\u7EED {time}","progress.compact_prep":"{time} \u540E\u5F00\u59CB","progress.compact_ongoing":"\u8FDB\u884C\u4E2D","progress.compact_expired":"\u5DF2\u4E8E {time} \u524D\u8FC7\u671F","time.just_now":"\u521A\u521A","time.in_less_than_1m":"1\u5206\u949F\u5185","time.minutes_ago":"{m} \u5206\u949F\u524D","time.in_minutes":"{m} \u5206\u949F\u540E","time.hours_ago":"{dur} \u524D","time.in_hours":"{dur} \u540E","time.days_ago":"{d} \u5929\u524D","time.in_days":"{d} \u5929\u540E","badge.severity_extreme":"\u6781\u7AEF","badge.severity_severe":"\u4E25\u91CD","badge.severity_moderate":"\u4E2D\u5EA6","badge.severity_minor":"\u8F7B\u5FAE","badge.severity_unknown":"\u672A\u77E5","badge.certainty_observed":"\u5DF2\u89C2\u6D4B","badge.certainty_likely":"\u5F88\u53EF\u80FD","badge.certainty_possible":"\u53EF\u80FD","badge.certainty_unlikely":"\u4E0D\u592A\u53EF\u80FD","badge.certainty_unknown":"\u672A\u77E5","editor.entities":"\u5B9E\u4F53","editor.title":"\u6807\u9898\uFF08\u53EF\u9009\uFF09","editor.provider":"\u8B66\u62A5\u63D0\u4F9B\u65B9","editor.provider_auto":"\u81EA\u52A8\u68C0\u6D4B","editor.provider_nws":"NWS\uFF08\u7F8E\u56FD\uFF09","editor.provider_bom":"BoM\uFF08\u6FB3\u5927\u5229\u4E9A\uFF09","editor.provider_meteoalarm":"MeteoAlarm\uFF08\u6B27\u6D32\uFF09","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD\uFF08\u5FB7\u56FD\uFF09","editor.provider_nina":"NINA\uFF08\u5FB7\u56FD\u6C11\u9632\u9884\u8B66\uFF09","editor.provider_meteoswiss":"MeteoSwiss\uFF08\u745E\u58EB\uFF09","editor.provider_eccc":"ECCC\uFF08\u52A0\u62FF\u5927\uFF09","editor.provider_nsw_rfs":"NSW RFS\uFF08\u6FB3\u5927\u5229\u4E9A\uFF09","editor.provider_cap":"CAP \u8B66\u62A5\uFF08\u591A\u533A\u57DF\uFF09","editor.devices":"\u8B66\u62A5\u8BBE\u5907\uFF08\u53EF\u9009\uFF09","editor.devices_helper":"\u81EA\u52A8\u62C9\u53D6\u6240\u9009\u8BBE\u5907\u4E0B\u7684\u6240\u6709\u6D3B\u8DC3\u8B66\u62A5\u4F20\u611F\u5668\uFF08CAP Alerts\u3001NINA\uFF09\u3002\u6DFB\u52A0\u66F4\u591A\u8BBE\u5907\u53EF\u5408\u5E76\u591A\u4E2A\u5730\u70B9\u6216\u63D0\u4F9B\u65B9\u3002","editor.zones":"\u533A\u57DF\uFF08\u53EF\u9009\uFF09","editor.zones_helper":"\u4EE5\u9017\u53F7\u5206\u9694\u7684 BoM area_id \u4EE3\u7801\uFF0C\u4F8B\u5982 NSW_FL049","editor.event_codes":"\u4E8B\u4EF6\u4EE3\u7801\uFF08\u53EF\u9009\uFF09","editor.event_codes_helper":"\u4EE5\u9017\u53F7\u5206\u9694\u7684\u4E8B\u4EF6\u4EE3\u7801\uFF0C\u4F8B\u5982 TOW\u3001SVW\uFF08NWS\uFF09\u6216 31\u300195\uFF08DWD\uFF09","editor.exclude_event_codes":"\u6392\u9664\u4E8B\u4EF6\u4EE3\u7801\uFF08\u53EF\u9009\uFF09","editor.exclude_event_codes_helper":"\u4EE5\u9017\u53F7\u5206\u9694\u7684\u8981\u6392\u9664\u7684\u4E8B\u4EF6\u4EE3\u7801\uFF0C\u4F8B\u5982 SCY\uFF08NWS\uFF09\u6216 22\uFF08DWD\uFF09","editor.sort_order":"\u6392\u5E8F\u65B9\u5F0F","editor.sort_default":"\u9ED8\u8BA4","editor.sort_onset":"\u5F00\u59CB\u65F6\u95F4","editor.sort_severity":"\u4E25\u91CD\u7A0B\u5EA6","editor.color_theme":"\u914D\u8272\u4E3B\u9898","editor.color_severity":"\u57FA\u4E8E\u4E25\u91CD\u7A0B\u5EA6","editor.color_nws":"NWS \u5B98\u65B9","editor.color_meteoalarm":"MeteoAlarm \u8BA4\u77E5\u7B49\u7EA7","editor.color_eccc":"ECCC \u516C\u5171\u8B66\u62A5","editor.timezone":"\u65F6\u533A","editor.tz_server":"\u670D\u52A1\u5668\uFF08Home Assistant\uFF09","editor.tz_browser":"\u6D4F\u89C8\u5668\uFF08\u672C\u5730\u8BBE\u5907\uFF09","editor.min_severity":"\u6700\u4F4E\u4E25\u91CD\u7A0B\u5EA6","editor.severity_all":"\u6240\u6709\u4E25\u91CD\u7A0B\u5EA6","editor.severity_minor":"\u8F7B\u5FAE\u53CA\u4EE5\u4E0A","editor.severity_moderate":"\u4E2D\u5EA6\u53CA\u4EE5\u4E0A","editor.severity_severe":"\u4E25\u91CD\u53CA\u4EE5\u4E0A","editor.severity_extreme":"\u4EC5\u6781\u7AEF","editor.max_distance":"\u6700\u5927\u8DDD\u79BB\uFF08{unit}\uFF09","editor.max_distance_helper":"\u4EC5\u663E\u793A\u8DDD\u79BB Home Assistant \u5BB6\u5EAD\u4F4D\u7F6E\u6216\u4E0B\u65B9\u6240\u8BBE\u4F4D\u7F6E\u5B9E\u4F53\u5728\u6B64\u8303\u56F4\u5185\u7684\u4E8B\u4EF6\u3002\u9002\u7528\u4E8E\u9010\u4E2A\u4E8B\u4EF6\u7684\u8BA2\u9605\u6E90\uFF08NSW RFS\uFF09\u2014\u2014\u533A\u57DF\u6027\u8B66\u62A5\u6CA1\u6709\u8DDD\u79BB\u4FE1\u606F\uFF0C\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u8FC7\u6EE4\u3002","editor.my_location_entity":"\u6211\u7684\u4F4D\u7F6E","editor.my_location_entity_helper":"\u4E00\u4E2A\u8BBE\u5907\u8FFD\u8E2A\u5668\u3001\u4EBA\u5458\u6216\u533A\u57DF\uFF0C\u5176\u5750\u6807\u5C06\u53D6\u4EE3 Home Assistant \u5BB6\u5EAD\u4F4D\u7F6E\u4F5C\u4E3A\u5361\u7247\u7684\u53C2\u8003\u70B9\u2014\u2014\u7528\u4E8E\u201C\u6211\u7684\u4F4D\u7F6E\u201D\u6807\u8BB0\uFF0C\u5E76\u4F5C\u4E3A\u6700\u5927\u8DDD\u79BB\u8FC7\u6EE4\u7684\u539F\u70B9\u3002\u56FA\u5B9A\u4F4D\u7F6E\u8BF7\u4F7F\u7528\u533A\u57DF\u3002","editor.animations":"\u542F\u7528\u52A8\u753B","editor.enhance_contrast":"\u589E\u5F3A\u5BF9\u6BD4\u5EA6","editor.enhance_contrast_off":"\u5173\u95ED","editor.enhance_contrast_subtle":"\u67D4\u548C","editor.enhance_contrast_strict":"\u4E25\u683C\uFF08WCAG AA\uFF09","editor.deduplicate":"\u53BB\u91CD\u8B66\u62A5","editor.deduplicate_headlines":"\u53BB\u91CD\u6807\u9898","editor.show_details":"\u663E\u793A\u8BE6\u60C5\u9762\u677F","editor.expand_details":"\u59CB\u7EC8\u5C55\u5F00\u8BE6\u60C5","editor.show_metadata":"\u663E\u793A\u5143\u6570\u636E","editor.show_description":"\u663E\u793A\u63CF\u8FF0","editor.show_instructions":"\u663E\u793A\u8BF4\u660E","editor.show_geometry":"\u663E\u793A\u533A\u57DF\u5730\u56FE","editor.geometry_style":"\u533A\u57DF\u5730\u56FE\u6837\u5F0F","editor.geometry_style_shape":"\u4EC5\u8F6E\u5ED3","editor.geometry_style_map":"\u5730\u56FE\u74E6\u7247\uFF08\u5728\u7EBF\uFF09","editor.show_my_location":"\u5728\u5730\u56FE\u4E0A\u663E\u793A\u6211\u7684\u4F4D\u7F6E","editor.show_provider":"\u663E\u793A\u63D0\u4F9B\u65B9\u6807\u7B7E","editor.show_source_link":"\u663E\u793A\u6765\u6E90\u94FE\u63A5","editor.reformat_text":"\u91CD\u6392\u8B66\u62A5\u6587\u672C\uFF08\u53BB\u9664\u786C\u6362\u884C\uFF09","editor.compact":"\u7D27\u51D1\u5E03\u5C40","editor.font_size":"\u5B57\u4F53\u5927\u5C0F","editor.font_size_small":"\u5C0F","editor.font_size_default":"\u9ED8\u8BA4","editor.font_size_large":"\u5927","editor.font_size_x_large":"\u7279\u5927","editor.progress_fill":"\u8FDB\u5EA6\u586B\u5145","editor.progress_fill_track":"\u8F68\u9053\uFF08\u7EC6\u6761\uFF09","editor.progress_fill_background":"\u80CC\u666F\u8986\u76D6","editor.styling_section":"\u8FDB\u5EA6\u4E0E\u56FE\u6807\u6837\u5F0F","editor.progress_style":"\u8FDB\u5EA6\u6761\u88C5\u9970","editor.progress_style_wash_note":"\u5F53\u8FDB\u5EA6\u586B\u5145\u8BBE\u7F6E\u4E3A\u80CC\u666F\u8986\u76D6\u65F6\u4E0D\u9002\u7528\uFF08\u8986\u76D6\u59CB\u7EC8\u4E3A\u7EAF\u8272\uFF09\u3002","editor.progress_style_preparation":"\u51C6\u5907\u9636\u6BB5","editor.progress_style_active":"\u6D3B\u8DC3\u9636\u6BB5","editor.progress_style_ongoing":"\u6301\u7EED\u9636\u6BB5","editor.deco_solid":"\u7EAF\u8272","editor.deco_striped":"\u6761\u7EB9","editor.deco_shimmer":"\u95EA\u70C1","editor.deco_pulse":"\u8109\u51B2","editor.icon_border_style":"\u56FE\u6807\u73AF\u5F62\u8FB9\u6846","editor.icon_border_dashed":"\u865A\u7EBF","editor.icon_border_solid":"\u5B9E\u7EBF","editor.hide_expired":"\u9690\u85CF\u5DF2\u8FC7\u671F\u8B66\u62A5","editor.hide_no_alerts":"\u65E0\u6D3B\u8DC3\u8B66\u62A5\u65F6\u9690\u85CF\u5361\u7247","editor.unavailable_behavior":"\u5F53\u6765\u6E90\u4E0D\u53EF\u7528\u65F6","editor.unavailable_message":"\u663E\u793A\u54EA\u4E2A\u6765\u6E90","editor.unavailable_compact":"\u663E\u793A\u7D27\u51D1\u6307\u793A\u5668","editor.unavailable_hide":"\u9690\u85CF\u6307\u793A\u5668\uFF08\u4E0D\u63A8\u8350\uFF09","editor.unavailable_hide_warning":"\u9690\u85CF\u6307\u793A\u5668\u53EF\u80FD\u4F1A\u5728\u6765\u6E90\u5931\u6548\u65F6\u5448\u73B0\u4E00\u5207\u6B63\u5E38\u7684\u5047\u8C61\u2014\u2014\u4E0D\u53EF\u7528\u7684\u4F20\u611F\u5668\u5E76\u4E0D\u80FD\u8BC1\u660E\u5B89\u5168\u3002","editor.tap_action":"\u70B9\u51FB\u64CD\u4F5C","editor.tap_action_helper":"\u8BBE\u7F6E\u4EFB\u610F\u70B9\u51FB\u64CD\u4F5C\u540E\uFF0C\u6BCF\u6761\u9884\u8B66\u884C\u7684\u5185\u5D4C\u5C55\u5F00\u529F\u80FD\u5C06\u88AB\u66FF\u4EE3\u3002","editor.tap_default":"\u5185\u5D4C\u5C55\u5F00\uFF08\u9ED8\u8BA4\uFF09","editor.tap_details":"\u8BE6\u60C5\u5F39\u7A97","editor.tap_more_info":"\u66F4\u591A\u4FE1\u606F","editor.tap_navigate":"\u5BFC\u822A","editor.tap_url":"\u6253\u5F00\u7F51\u5740","editor.tap_toggle":"\u5207\u6362","editor.tap_perform_action":"\u6267\u884C\u64CD\u4F5C","editor.tap_call_service":"\u8C03\u7528\u670D\u52A1\uFF08\u65E7\u7248\uFF09","editor.tap_fire_dom_event":"\u89E6\u53D1 DOM \u4E8B\u4EF6","editor.tap_none":"\u65E0","editor.tap_navigation_path":"\u5BFC\u822A\u8DEF\u5F84","editor.tap_url_path":"\u7F51\u5740","editor.tap_yaml_managed":"\u6B64\u64CD\u4F5C\u5305\u542B\u53EF\u89C6\u5316\u7F16\u8F91\u5668\u65E0\u6CD5\u7F16\u8F91\u7684\u6570\u636E\u3002\u5176\u73B0\u6709 YAML \u4F1A\u88AB\u4FDD\u7559\u2014\u2014\u8BF7\u5728 YAML \u7F16\u8F91\u5668\u4E2D\u4FEE\u6539\u3002","editor.tap_details_expand_hint":"\u5F53\u201C\u59CB\u7EC8\u5C55\u5F00\u8BE6\u60C5\u201D\u5173\u95ED\u65F6\uFF0C\u5F39\u7A97\u6253\u5F00\u540E\u63CF\u8FF0\u5185\u5BB9\u4ECD\u4F4D\u4E8E\u201C\u9605\u8BFB\u8BE6\u60C5\u201D\u6309\u94AE\u4E4B\u540E\u3002","editor.allow_dismiss":"\u5141\u8BB8\u5FFD\u7565\u8B66\u62A5","editor.show_dismiss_undo":"\u5FFD\u7565\u65F6\u663E\u793A\u64A4\u9500\u901A\u77E5","editor.dismissed_count":"\u5DF2\u5FFD\u7565\uFF1A{count} \u6761\u8B66\u62A5\u3002","editor.dismissed_count_singular":"\u5DF2\u5FFD\u7565\uFF1A{count} \u6761\u8B66\u62A5\u3002","editor.restore_all":"\u5168\u90E8\u6062\u590D","editor.show_preview":"\u663E\u793A\u793A\u4F8B\u6570\u636E","editor.preview_hint":"\u4F7F\u7528\u793A\u4F8B\u8B66\u62A5\u9884\u89C8\u5361\u7247\u5E03\u5C40","editor.preview_nudge":"\u65E0\u6D3B\u8DC3\u8B66\u62A5\u2014\u2014\u542F\u7528\u4EE5\u9884\u89C8\u5361\u7247\u5E03\u5C40\u3002","editor.entity_warning":"\u6240\u9009\u5B9E\u4F53\u4F3C\u4E4E\u4E0D\u5305\u542B\u5929\u6C14\u8B66\u62A5\u6570\u636E\u3002","editor.no_entities_hint":"\u672A\u627E\u5230\u652F\u6301\u7684\u5929\u6C14\u8B66\u62A5\u5B9E\u4F53\u3002\u5FC5\u987B\u5148\u5B89\u88C5\u63D0\u4F9B\u65B9\u96C6\u6210\uFF08\u4F8B\u5982 NWS Alerts\uFF09\u3002","editor.no_entities_hint_link":"\u652F\u6301\u7684\u63D0\u4F9B\u65B9","editor.feeds":"\u4ECE\u5DF2\u5B89\u88C5\u7684\u8BA2\u9605\u6E90\u81EA\u52A8\u6536\u96C6","editor.feeds_helper":"\u68C0\u6D4B\u5230\u7684\u96C6\u6210\u8BA2\u9605\u6E90\u3002\u52FE\u9009\u4E00\u9879\u5373\u53EF\u5305\u542B\u5176\u62A5\u544A\u7684\u6240\u6709\u5B9E\u65F6\u4E8B\u4EF6\u2014\u2014\u65E0\u9700\u9010\u4E2A\u5217\u51FA\u5B9E\u4F53\u3002\u9700\u8981\u5148\u5728 Home Assistant \u4E2D\u914D\u7F6E\u8BE5\u96C6\u6210\u3002","editor.source_hint":"\u6B63\u4ECE\u8BA2\u9605\u6E90\u81EA\u52A8\u6536\u96C6 {count} \u4E2A\u5B9E\u65F6\u4E8B\u4EF6\u2014\u2014\u65E0\u9700\u624B\u52A8\u5217\u51FA\u5B9E\u4F53\u3002","editor.feeds_missing_warning":"{feeds} \u65E0\u5B9E\u65F6\u6570\u636E\u3002\u8BE5\u8BA2\u9605\u6E90\u5DF2\u542F\u7528\u4F46\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\u63D0\u4F9B\u2014\u2014\u662F\u5426\u5728 Home Assistant \u4E2D\u914D\u7F6E\u4E86\u8BE5\u96C6\u6210\uFF1F","editor.devices_missing_warning":"\u672A\u627E\u5230 {ids} \u5BF9\u5E94\u7684\u8BBE\u5907\u3002\u8BE5\u96C6\u6210\u662F\u5426\u5DF2\u88AB\u79FB\u9664\uFF1F","editor.no_device_alerts_hint":"\u6240\u9009\u8BBE\u5907\u4E0B\u5C1A\u672A\u627E\u5230\u6D3B\u8DC3\u8B66\u62A5\u4F20\u611F\u5668\u3002\u5F53\u96C6\u6210\u53D1\u5E03\u8B66\u62A5\u65F6\uFF0C\u5361\u7247\u5C06\u81EA\u52A8\u586B\u5145\u3002","editor.section_source":"\u6765\u6E90","editor.section_filtering":"\u8FC7\u6EE4","editor.section_appearance":"\u5916\u89C2","editor.section_detail_panel":"\u8BE6\u60C5\u9762\u677F","editor.section_behavior":"\u884C\u4E3A","editor.section_dismissal":"\u5FFD\u7565","editor.section_advanced":"\u9AD8\u7EA7","editor.detail_sections":"\u5185\u5BB9\u677F\u5757","editor.panel_more":"\u8FD8\u6709 {count} \u9879","editor.option_default":"{label}\uFF08\u9ED8\u8BA4\uFF09","editor.reset_default":"\u6062\u590D\u9ED8\u8BA4","editor.also_set":"\u53E6\u5DF2\u8BBE\u7F6E\uFF1A{names}","editor.dismiss_trigger":"\u5FFD\u7565\u89E6\u53D1\u65B9\u5F0F","editor.dismiss_trigger_button":"\u4EC5\u6309\u94AE","editor.dismiss_trigger_swipe":"\u4EC5\u6ED1\u52A8","editor.dismiss_trigger_both":"\u6309\u94AE\u548C\u6ED1\u52A8","editor.dismiss_button_style":"\u6309\u94AE\u6837\u5F0F","editor.dismiss_button_style_icon":"\u4EC5\u56FE\u6807","editor.dismiss_button_style_labeled":"\u56FE\u6807\u548C\u6807\u7B7E"},pe={en:Jn,fr:es,es:ts,it:is,de:rs,nl:os,"zh-Hans":ns};function ss(t){const e=t.toLowerCase(),i=e.split("-")[0];if(pe[t])return pe[t];if(pe[e])return pe[e];if(pe[i])return pe[i];const r=Object.keys(pe).find(o=>o.toLowerCase().split("-")[0]===i);return r?pe[r]:pe.en}function u(t,e,i){var r,o;let n=(o=(r=ss(e)[t])!=null?r:pe.en[t])!=null?o:t;if(i)for(const[s,a]of Object.entries(i))n=n.split(`{${s}}`).join(String(a));return n}const as={"tsunami warning":{hex:"#FD6347",rgb:"253, 99, 71",crLight:2.978,crDark:5.714},"tornado warning":{hex:"#FF0000",rgb:"255, 0, 0",crLight:3.998,crDark:4.255},"extreme wind warning":{hex:"#FF8C00",rgb:"255, 140, 0",crLight:2.332,crDark:7.295},"severe thunderstorm warning":{hex:"#FFA500",rgb:"255, 165, 0",crLight:1.975,crDark:8.616},"flash flood warning":{hex:"#8B0000",rgb:"139, 0, 0",crLight:10.011,crDark:1.7},"flash flood statement":{hex:"#8B0000",rgb:"139, 0, 0",crLight:10.011,crDark:1.7},"severe weather statement":{hex:"#00FFFF",rgb:"0, 255, 255",crLight:1.254,crDark:13.57},"shelter in place warning":{hex:"#FA8072",rgb:"250, 128, 114",crLight:2.501,crDark:6.802},"evacuation immediate":{hex:"#7FFF00",rgb:"127, 255, 0",crLight:1.296,crDark:13.131},"civil danger warning":{hex:"#FFB6C1",rgb:"255, 182, 193",crLight:1.652,crDark:10.301},"nuclear power plant warning":{hex:"#4B0082",rgb:"75, 0, 130",crLight:12.951,crDark:1.314},"radiological hazard warning":{hex:"#4B0082",rgb:"75, 0, 130",crLight:12.951,crDark:1.314},"hazardous materials warning":{hex:"#4B0082",rgb:"75, 0, 130",crLight:12.951,crDark:1.314},"fire warning":{hex:"#A0522D",rgb:"160, 82, 45",crLight:5.616,crDark:3.03},"civil emergency message":{hex:"#FFB6C1",rgb:"255, 182, 193",crLight:1.652,crDark:10.301},"law enforcement warning":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},"storm surge warning":{hex:"#B524F7",rgb:"181, 36, 247",crLight:4.605,crDark:3.695},"hurricane force wind warning":{hex:"#CD5C5C",rgb:"205, 92, 92",crLight:3.976,crDark:4.279},"hurricane warning":{hex:"#DC143C",rgb:"220, 20, 60",crLight:4.99,crDark:3.41},"typhoon warning":{hex:"#DC143C",rgb:"220, 20, 60",crLight:4.99,crDark:3.41},"special marine warning":{hex:"#FFA500",rgb:"255, 165, 0",crLight:1.975,crDark:8.616},"blizzard warning":{hex:"#FF4500",rgb:"255, 69, 0",crLight:3.441,crDark:4.945},"snow squall warning":{hex:"#C71585",rgb:"199, 21, 133",crLight:5.42,crDark:3.139},"ice storm warning":{hex:"#8B008B",rgb:"139, 0, 139",crLight:8.5,crDark:2.002},"heavy freezing spray warning":{hex:"#00BFFF",rgb:"0, 191, 255",crLight:2.122,crDark:8.018},"winter storm warning":{hex:"#FF69B4",rgb:"255, 105, 180",crLight:2.648,crDark:6.426},"lake effect snow warning":{hex:"#008B8B",rgb:"0, 139, 139",crLight:4.145,crDark:4.104},"dust storm warning":{hex:"#FFE4C4",rgb:"255, 228, 196",crLight:1.225,crDark:13.893},"blowing dust warning":{hex:"#FFE4C4",rgb:"255, 228, 196",crLight:1.225,crDark:13.893},"high wind warning":{hex:"#DAA520",rgb:"218, 165, 32",crLight:2.238,crDark:7.603},"tropical storm warning":{hex:"#B22222",rgb:"178, 34, 34",crLight:6.677,crDark:2.548},"storm warning":{hex:"#9400D3",rgb:"148, 0, 211",crLight:6.563,crDark:2.593},"tsunami advisory":{hex:"#D2691E",rgb:"210, 105, 30",crLight:3.633,crDark:4.683},"tsunami watch":{hex:"#FF00FF",rgb:"255, 0, 255",crLight:3.136,crDark:5.425},"avalanche warning":{hex:"#1E90FF",rgb:"30, 144, 255",crLight:3.236,crDark:5.257},"earthquake warning":{hex:"#8B4513",rgb:"139, 69, 19",crLight:7.098,crDark:2.397},"volcano warning":{hex:"#2F4F4F",rgb:"47, 79, 79",crLight:8.928,crDark:1.906},"ashfall warning":{hex:"#A9A9A9",rgb:"169, 169, 169",crLight:2.35,crDark:7.239},"flood warning":{hex:"#00FF00",rgb:"0, 255, 0",crLight:1.372,crDark:12.4},"coastal flood warning":{hex:"#228B22",rgb:"34, 139, 34",crLight:4.389,crDark:3.876},"lakeshore flood warning":{hex:"#228B22",rgb:"34, 139, 34",crLight:4.389,crDark:3.876},"ashfall advisory":{hex:"#696969",rgb:"105, 105, 105",crLight:5.49,crDark:3.099},"high surf warning":{hex:"#228B22",rgb:"34, 139, 34",crLight:4.389,crDark:3.876},"extreme heat warning":{hex:"#C71585",rgb:"199, 21, 133",crLight:5.42,crDark:3.139},"tornado watch":{hex:"#FFFF00",rgb:"255, 255, 0",crLight:1.074,crDark:15.845},"severe thunderstorm watch":{hex:"#DB7093",rgb:"219, 112, 147",crLight:3.111,crDark:5.47},"flash flood watch":{hex:"#2E8B57",rgb:"46, 139, 87",crLight:4.245,crDark:4.008},"gale warning":{hex:"#DDA0DD",rgb:"221, 160, 221",crLight:2.07,crDark:8.221},"flood statement":{hex:"#00FF00",rgb:"0, 255, 0",crLight:1.372,crDark:12.4},"extreme cold warning":{hex:"#0000FF",rgb:"0, 0, 255",crLight:8.592,crDark:1.98},"freeze warning":{hex:"#483D8B",rgb:"72, 61, 139",crLight:9.068,crDark:1.876},"red flag warning":{hex:"#FF1493",rgb:"255, 20, 147",crLight:3.637,crDark:4.678},"storm surge watch":{hex:"#DB7FF7",rgb:"219, 127, 247",crLight:2.503,crDark:6.798},"hurricane watch":{hex:"#FF00FF",rgb:"255, 0, 255",crLight:3.136,crDark:5.425},"hurricane force wind watch":{hex:"#9932CC",rgb:"153, 50, 204",crLight:5.702,crDark:2.984},"typhoon watch":{hex:"#FF00FF",rgb:"255, 0, 255",crLight:3.136,crDark:5.425},"tropical storm watch":{hex:"#F08080",rgb:"240, 128, 128",crLight:2.591,crDark:6.566},"storm watch":{hex:"#FFE4B5",rgb:"255, 228, 181",crLight:1.234,crDark:13.787},"tropical cyclone local statement":{hex:"#FFE4B5",rgb:"255, 228, 181",crLight:1.234,crDark:13.787},"winter weather advisory":{hex:"#7B68EE",rgb:"123, 104, 238",crLight:4.153,crDark:4.097},"avalanche advisory":{hex:"#CD853F",rgb:"205, 133, 63",crLight:2.99,crDark:5.69},"cold weather advisory":{hex:"#AFEEEE",rgb:"175, 238, 238",crLight:1.289,crDark:13.196},"heat advisory":{hex:"#FF7F50",rgb:"255, 127, 80",crLight:2.499,crDark:6.809},"flood advisory":{hex:"#00FF7F",rgb:"0, 255, 127",crLight:1.345,crDark:12.648},"coastal flood advisory":{hex:"#7CFC00",rgb:"124, 252, 0",crLight:1.331,crDark:12.786},"lakeshore flood advisory":{hex:"#7CFC00",rgb:"124, 252, 0",crLight:1.331,crDark:12.786},"high surf advisory":{hex:"#BA55D3",rgb:"186, 85, 211",crLight:3.942,crDark:4.317},"dense fog advisory":{hex:"#708090",rgb:"112, 128, 144",crLight:4.055,crDark:4.196},"dense smoke advisory":{hex:"#F0E68C",rgb:"240, 230, 140",crLight:1.28,crDark:13.29},"small craft advisory":{hex:"#D8BFD8",rgb:"216, 191, 216",crLight:1.699,crDark:10.017},"brisk wind advisory":{hex:"#D8BFD8",rgb:"216, 191, 216",crLight:1.699,crDark:10.017},"hazardous seas warning":{hex:"#D8BFD8",rgb:"216, 191, 216",crLight:1.699,crDark:10.017},"dust advisory":{hex:"#BDB76B",rgb:"189, 183, 107",crLight:2.069,crDark:8.223},"blowing dust advisory":{hex:"#BDB76B",rgb:"189, 183, 107",crLight:2.069,crDark:8.223},"lake wind advisory":{hex:"#D2B48C",rgb:"210, 180, 140",crLight:1.972,crDark:8.627},"wind advisory":{hex:"#D2B48C",rgb:"210, 180, 140",crLight:1.972,crDark:8.627},"frost advisory":{hex:"#6495ED",rgb:"100, 149, 237",crLight:2.973,crDark:5.723},"freezing fog advisory":{hex:"#008080",rgb:"0, 128, 128",crLight:4.773,crDark:3.564},"freezing spray advisory":{hex:"#00BFFF",rgb:"0, 191, 255",crLight:2.122,crDark:8.018},"low water advisory":{hex:"#A52A2A",rgb:"165, 42, 42",crLight:7.084,crDark:2.402},"local area emergency":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},"winter storm watch":{hex:"#4682B4",rgb:"70, 130, 180",crLight:4.108,crDark:4.142},"rip current statement":{hex:"#40E0D0",rgb:"64, 224, 208",crLight:1.642,crDark:10.364},"beach hazards statement":{hex:"#40E0D0",rgb:"64, 224, 208",crLight:1.642,crDark:10.364},"gale watch":{hex:"#FFC0CB",rgb:"255, 192, 203",crLight:1.538,crDark:11.063},"avalanche watch":{hex:"#F4A460",rgb:"244, 164, 96",crLight:2.034,crDark:8.366},"hazardous seas watch":{hex:"#483D8B",rgb:"72, 61, 139",crLight:9.068,crDark:1.876},"heavy freezing spray watch":{hex:"#BC8F8F",rgb:"188, 143, 143",crLight:2.814,crDark:6.047},"flood watch":{hex:"#2E8B57",rgb:"46, 139, 87",crLight:4.245,crDark:4.008},"coastal flood watch":{hex:"#66CDAA",rgb:"102, 205, 170",crLight:1.931,crDark:8.814},"lakeshore flood watch":{hex:"#66CDAA",rgb:"102, 205, 170",crLight:1.931,crDark:8.814},"high wind watch":{hex:"#B8860B",rgb:"184, 134, 11",crLight:3.254,crDark:5.228},"extreme heat watch":{hex:"#800000",rgb:"128, 0, 0",crLight:10.95,crDark:1.554},"extreme cold watch":{hex:"#5F9EA0",rgb:"95, 158, 160",crLight:3.05,crDark:5.578},"freeze watch":{hex:"#00FFFF",rgb:"0, 255, 255",crLight:1.254,crDark:13.57},"fire weather watch":{hex:"#FFDEAD",rgb:"255, 222, 173",crLight:1.288,crDark:13.21},"extreme fire danger":{hex:"#E9967A",rgb:"233, 150, 122",crLight:2.306,crDark:7.38},"911 telephone outage":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},"coastal flood statement":{hex:"#6B8E23",rgb:"107, 142, 35",crLight:3.805,crDark:4.471},"lakeshore flood statement":{hex:"#6B8E23",rgb:"107, 142, 35",crLight:3.805,crDark:4.471},"special weather statement":{hex:"#FFE4B5",rgb:"255, 228, 181",crLight:1.234,crDark:13.787},"marine weather statement":{hex:"#FFDAB9",rgb:"255, 218, 185",crLight:1.314,crDark:12.948},"air quality alert":{hex:"#808080",rgb:"128, 128, 128",crLight:3.949,crDark:4.308},"air stagnation advisory":{hex:"#808080",rgb:"128, 128, 128",crLight:3.949,crDark:4.308},"hazardous weather outlook":{hex:"#EEE8AA",rgb:"238, 232, 170",crLight:1.253,crDark:13.578},"hydrologic outlook":{hex:"#90EE90",rgb:"144, 238, 144",crLight:1.417,crDark:12.006},"short term forecast":{hex:"#98FB98",rgb:"152, 251, 152",crLight:1.266,crDark:13.439},"administrative message":{hex:"#C0C0C0",rgb:"192, 192, 192",crLight:1.819,crDark:9.352},test:{hex:"#F0FFFF",rgb:"240, 255, 255",crLight:1.027,crDark:16.572},"child abduction emergency":{hex:"#FFFFFF",rgb:"255, 255, 255",crLight:1,crDark:17.015},"blue alert":{hex:"#FFFFFF",rgb:"255, 255, 255",crLight:1,crDark:17.015}},ls=["a","b","br","em","i","li","ol","p","strong","ul"];io.addHook("afterSanitizeAttributes",t=>{t.tagName==="A"&&(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer"))});function ds(t){return t?io.sanitize(t,{ALLOWED_TAGS:ls,ALLOWED_ATTR:["href"]}):""}const cs=[[["tornado"],"mdi:weather-tornado"],[["tsunami"],"mdi:tsunami"],[["hurricane","tropical","typhoon","cyclone"],"mdi:weather-hurricane"],[["thunderstorm","gewitter"],"mdi:weather-lightning"],[["hail","hagel"],"mdi:weather-hail"],[["flood","hydrologic","storm surge","hochwasser"],"mdi:home-flood"],[["rain","shower","precipitation","starkregen","dauerregen"],"mdi:weather-pouring"],[["snow","blizzard","winter","schnee","schneesturm"],"mdi:weather-snowy-heavy"],[["sleet"],"mdi:weather-snowy-rainy"],[["ice","freeze","frost","slippery","gl\xE4tte","glatteis"],"mdi:snowflake"],[["thaw"],"mdi:snowflake-melt"],[["cold","chill","low temperature","k\xE4lte"],"mdi:thermometer-low"],[["landslide","avalanche","lawine"],"mdi:landslide"],[["earthquake"],"mdi:pulse"],[["volcano","ashfall","vog"],"mdi:volcano"],[["dust","sand"],"mdi:weather-dust"],[["smoke"],"mdi:smoke"],[["air quality","air stagnation"],"mdi:air-filter"],[["fire","red flag","waldbrand"],"mdi:fire"],[["heat","high temperature","hitze"],"mdi:weather-sunny-alert"],[["drought","trockenheit"],"mdi:water-off"],[["fog","nebel"],"mdi:weather-fog"],[["sheep","grazier"],"mdi:weather-windy-variant"],[["gale","squall"],"mdi:weather-windy"],[["wind","sturm","orkan","b\xF6en"],"mdi:weather-windy"],[["small craft"],"mdi:sail-boat"],[["rip current"],"mdi:wave"],[["surf","marine","coastal","seas"],"mdi:waves"]];function ro(t){const e=t.toLowerCase().replace(/[-/]/g," ");for(const[i,r]of cs)if(i.some(o=>e.includes(o)))return r;return"mdi:alert-circle-outline"}const us=[[["likely"],"mdi:check-decagram"],[["observed"],"mdi:eye-check"],[["possible","unlikely"],"mdi:help-circle-outline"]];function hs(t){const e=t.toLowerCase();for(const[i,r]of us)if(i.some(o=>e.includes(o)))return r;return"mdi:bullseye-arrow"}const ps=[[["tornado"],"#FF0000"],[["hurricane","typhoon","tropical storm"],"#DC143C"],[["flood"],"#228B22"],[["blizzard","ice storm"],"#FF4500"],[["snow","winter"],"#1E90FF"],[["freeze","frost","ice"],"#6495ED"],[["wind"],"#D2B48C"],[["heat"],"#FF7F50"],[["fire","red flag"],"#FF4500"],[["fog"],"#708090"],[["tsunami"],"#FD6347"]],ft="#ffffff",vt="#1c1c1e",_s={subtle:{text:2,progress:1.3},strict:{text:3,progress:2}},Pt="subtle";function gs(t){return t!=null?t:Pt}function oo(t){const e=t.replace("#",""),i=parseInt(e.slice(0,2),16)/255,r=parseInt(e.slice(2,4),16)/255,o=parseInt(e.slice(4,6),16)/255,n=s=>s<=.04045?s/12.92:((s+.055)/1.055)**2.4;return .2126*n(i)+.7152*n(r)+.0722*n(o)}function me(t,e){const i=oo(t),r=oo(e),o=Math.max(i,r),n=Math.min(i,r);return(o+.05)/(n+.05)}const ms={boostLight:!1,boostDark:!1,progressBoostLight:!1,progressBoostDark:!1};function fs(t,e,i){if(i==="off")return ms;const{text:r,progress:o}=_s[i];return{boostLight:t<r,boostDark:e<r,progressBoostLight:t<o,progressBoostDark:e<o}}function It(t){const e=t.replace("#","");return`${parseInt(e.slice(0,2),16)}, ${parseInt(e.slice(2,4),16)}, ${parseInt(e.slice(4,6),16)}`}const vs=1.9;function no(t,e,i){return me(t,e)>=vs?e:i}function bs(t){return{light:no(t,ft,"#1a1a1a"),dark:no(t,vt,"#f5f5f5")}}function bt(t,e,i,r,o){const n=bs(t);return{color:t,rgb:e,textColorLight:n.light,textColorDark:n.dark,...fs(i,r,o)}}function so(t,e=Pt){const i=t.toLowerCase(),r=as[i];if(r)return bt(r.hex,r.rgb,r.crLight,r.crDark,e);for(const[n,s]of ps)if(n.some(a=>i.includes(a)))return bt(s,It(s),me(s,ft),me(s,vt),e);const o="#808080";return bt(o,It(o),me(o,ft),me(o,vt),e)}const ys={extreme:"#D8001E",severe:"#FF9900",moderate:"#FFC800",minor:"#88C840"};function ao(t,e=Pt){var i;const r=(i=ys[t])!=null?i:"#808080";return bt(r,It(r),me(r,ft),me(r,vt),e)}const ws={red:"#D10000",orange:"#FF9500",yellow:"#FFFF00",grey:"#656565"},xs={extreme:"#D10000",severe:"#FF9500",moderate:"#FFFF00",minor:"#656565",unknown:"#656565"};function lo(t,e=Pt){var i,r,o;const n=(i=t.colorHint)==null?void 0:i.toLowerCase(),s=(o=(r=n&&ws[n])!=null?r:xs[t.severity])!=null?o:"#808080";return bt(s,It(s),me(s,ft),me(s,vt),e)}function F(t){if(!t||t==="None"||t.trim()==="")return 0;const e=new Date(t.trim());return isNaN(e.getTime())?0:e.getTime()/1e3}function Ci(t,e,i,r){const o=d=>d*Math.PI/180,n=o(r-e),s=o(i-t),a=Math.sin(n/2)**2+Math.cos(o(e))*Math.cos(o(r))*Math.sin(s/2)**2;return 2*6371*Math.asin(Math.min(1,Math.sqrt(a)))}function ki(t,e){if(!(typeof t!="number"||typeof e!="number")&&!(!Number.isFinite(t)||!Number.isFinite(e))&&!(Math.abs(t)>90||Math.abs(e)>180))return[e,t]}function $i(t,e){var i,r,o,n;if(t){if(e){const s=(r=(i=t.states)==null?void 0:i[e])==null?void 0:r.attributes,a=ki(s==null?void 0:s.latitude,s==null?void 0:s.longitude);if(a)return a}return ki((o=t.config)==null?void 0:o.latitude,(n=t.config)==null?void 0:n.longitude)}}const co=1.609344;function uo(t,e){return e!=="mi"?t:Math.round(t/co*100)/100}function Es(t,e){return e!=="mi"?t:Math.round(t*co*1e3)/1e3}function ho(t){return t==="mi"?"mi":"km"}function As(t,e,i){const r=uo(t,e),o=r<10?1:0;let n;try{n=new Intl.NumberFormat(i,{minimumFractionDigits:0,maximumFractionDigits:o}).format(r)}catch{n=r.toFixed(o)}return`${n} ${e}`}function po(t){const e=Date.now()/1e3,i=t.sentTs,r=i>0?i:e;let o=t.onsetTs;o===0&&(o=r);const n=o+3600;let s=t.endsTs;s===0&&(s=n);const a=t.endsTs>0,d=e>=o,c=a&&e>=s;let p,h,f,w;c?(p=o,h=s,f=s,w="Expired"):d?(p=o,h=s,f=e,w="Active"):(p=e,h=s,f=o,w="Preparation");const v=h-p,y=v>0?v:1,L=(f-p)/y*100,S=Math.max(0,Math.min(100,Math.round(L*10)/10)),J=Math.round((s-e)/3600*10)/10,G=Math.round((o-e)/3600*10)/10,D=Math.round((o-e)/60);return{isActive:d,isExpired:c,phaseText:w,progressPct:S,remainingHours:J,onsetHours:G,onsetMinutes:D,onsetTs:o,endsTs:s,sentTs:i,nowTs:e,hasEndTime:a}}function Ss(t){if(!t)return{locale:void 0};const e=t.language;return t.time_format==="12"?{locale:e,hour12:!0}:t.time_format==="24"?{locale:e,hour12:!1}:{locale:e}}function Fs(t,e,i){const r=new Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:i});return r.format(t)===r.format(e)}function _o(t,e){var i,r;return e!=null&&e.timeZone&&(r=(i=new Intl.DateTimeFormat(e.language,{timeZoneName:"short",timeZone:e.timeZone}).formatToParts(t).find(o=>o.type==="timeZoneName"))==null?void 0:i.value)!=null?r:""}function go(t,e){var i,r,o,n,s,a;const d=e==null?void 0:e.language,c=e==null?void 0:e.date_format,p=e==null?void 0:e.timeZone;if(!c||c==="language")return t.toLocaleDateString(d,{timeZone:p});const h=new Intl.DateTimeFormat(d,{day:"numeric",month:"numeric",year:"numeric",timeZone:p}).formatToParts(t),f=(r=(i=h.find(y=>y.type==="day"))==null?void 0:i.value)!=null?r:"",w=(n=(o=h.find(y=>y.type==="month"))==null?void 0:o.value)!=null?n:"",v=(a=(s=h.find(y=>y.type==="year"))==null?void 0:s.value)!=null?a:"";switch(c){case"DMY":return`${f}/${w}/${v}`;case"MDY":return`${w}/${f}/${v}`;case"YMD":return`${v}/${w}/${f}`;default:return t.toLocaleDateString(d,{timeZone:p})}}function mo(t,e,i){const r=Ss(e),o={hour:i,minute:"2-digit",timeZone:e==null?void 0:e.timeZone};return r.hour12!==void 0&&(o.hour12=r.hour12),t.toLocaleTimeString(r.locale,o)}function fo(t,e,i="en"){if(t<=0)return u("progress.na",i);const r=new Date(t*1e3),o=new Date,n=_o(r,e),s=mo(r,e,"2-digit"),a=n?`${s} ${n}`:s;return Fs(r,o,e==null?void 0:e.timeZone)?a:`${a} (${go(r,e)})`}function Ti(t,e,i="en"){if(t<=100)return u("progress.na",i);const r=new Date(t*1e3),o=_o(r,e),n=mo(r,e,"numeric"),s=o?`${n} ${o}`:n;return`${go(r,e)}, ${s}`}function vo(t,e=Date.now()/1e3,i="en"){const r=t-e,o=Math.abs(r),n=r<0;if(o<60)return u(n?"time.just_now":"time.in_less_than_1m",i);if(o<3600){const a=Math.floor(o/60);return n?u("time.minutes_ago",i,{m:a}):u("time.in_minutes",i,{m:a})}if(o<86400){const a=Math.floor(o/3600),d=Math.floor(o%3600/60),c=d>0?`${a}h ${d}m`:`${a}h`;return n?u("time.hours_ago",i,{dur:c}):u("time.in_hours",i,{dur:c})}const s=Math.floor(o/86400);return n?u("time.days_ago",i,{d:s}):u("time.in_days",i,{d:s})}function et(t,e=Date.now()/1e3){const i=Math.abs(t-e);if(i<60)return"<1m";if(i<3600)return`${Math.floor(i/60)}m`;if(i<86400){const n=Math.floor(i/3600),s=Math.floor(i%3600/60);return s>0?`${n}h ${s}m`:`${n}h`}const r=Math.floor(i/86400),o=Math.floor(i%86400/3600);return o>0?`${r}d ${o}h`:`${r}d`}function Ds(t,e=!0){const i=(t.headline||"").trim();if(!i)return"";if(!e)return i;const r=i.toLowerCase().replace(/[.\s]+$/,""),o=t.event.toLowerCase();return r.startsWith(o)||o.startsWith(r)?"":i}function bo(t){if(!t)return"";const e=/^\s*[·•\-]\s/,i=/^\.[A-Z]/;return t.split(/\n{2,}/).map(r=>{const o=r.split(`
`),n=[];for(const s of o)n.length===0?n.push(s.trimStart()):e.test(s)||i.test(s.trimStart())||n[n.length-1].trimEnd().endsWith(":")?n.push(s):n[n.length-1]+=" "+s.trimStart();return n.map(s=>s.replace(/ {2,}/g," ")).map(s=>s.trimEnd()).filter(Boolean).join(`
`)}).filter(Boolean).join(`

`)}function fe(t){const e=(t||"").toLowerCase().replace(/\s/g,"");return["extreme","severe","moderate","minor"].includes(e)?e:"unknown"}const yt={extreme:0,severe:1,moderate:2,minor:3,unknown:4};function Cs(t,e){return e==="onset"?[...t].sort((i,r)=>(i.onsetTs||1/0)-(r.onsetTs||1/0)):e==="severity"?[...t].sort((i,r)=>{var o,n;const s=((o=yt[i.severity])!=null?o:4)-((n=yt[r.severity])!=null?n:4);return s!==0?s:(i.onsetTs||1/0)-(r.onsetTs||1/0)}):t}function ks(t,e){return t.zones.some(i=>e.has(i.toUpperCase()))}function $s(t,e,i){var r,o;let n=t;if(i&&i.size>0){const c=new Set;n=t.filter(p=>{if(!p.id||!i.has(p.provider))return!0;const h=`${p.provider}\0${p.id}`;return c.has(h)?!1:(c.add(h),!0)})}const s=new Map,a=[];for(const c of n){const p=`${c.event}\0${c.severity}\0${c.onsetTs}\0${c.endsTs}\0${c.provider}`,h=s.get(p);h?h.push(c):(s.set(p,[c]),a.push(p))}let d=a.map(c=>{const p=s.get(c);if(p.length===1)return p[0];const h={...p[0]},f=new Set,w=new Set;for(const v of p){for(const y of v.zones)f.add(y.toUpperCase());v.areaDesc&&w.add(v.areaDesc)}return h.zones=[...f],h.areaDesc=[...w].join("; "),h.mergedCount=p.length,h.id=`merged:${c}`,h});if(e&&e.length>1){const c=new Map;for(let h=0;h<e.length;h++)c.has(e[h])||c.set(e[h],h);const p=new Map;for(const h of d){if(h.endsTs===0)continue;const f=`${h.event}\0${h.endsTs}`,w=p.get(f);(!w||((r=c.get(h.provider))!=null?r:1/0)<((o=c.get(w))!=null?o:1/0))&&p.set(f,h.provider)}d=d.filter(h=>{if(h.endsTs===0)return!0;const f=`${h.event}\0${h.endsTs}`;return h.provider===p.get(f)})}return d}function Ts(t){const e=t.split("/");return e[e.length-1].toUpperCase()}function Ms(t){var e;const i=[];if(Array.isArray(t.AffectedZones))for(const r of t.AffectedZones)typeof r!="string"||!r||i.push(Ts(r));if(Array.isArray((e=t.Geocode)==null?void 0:e.UGC))for(const r of t.Geocode.UGC){if(typeof r!="string"||!r)continue;const o=r.toUpperCase();i.includes(o)||i.push(o)}return i}class Ls{constructor(){this.provider="nws",this.stableIds=!0}canHandle(e){const i=e.Alerts;if(!Array.isArray(i))return!1;if(i.length===0)return!0;const r=i[0];return typeof r=="object"&&r!==null&&"Event"in r&&"Severity"in r}parseAlerts(e){const i=e.Alerts;return Array.isArray(i)?i.filter(r=>typeof r=="object"&&r!==null).map(r=>this._normalize(r)):[]}_normalize(e){const i=fe(e.Severity);return{id:e.ID,event:e.Event||"Unknown",severity:i,severityLabel:e.Severity&&fe(e.Severity)!=="unknown"?e.Severity:i.charAt(0).toUpperCase()+i.slice(1),certainty:e.Certainty||"",urgency:e.Urgency||"",sentTs:F(e.Sent),onsetTs:F(e.Onset),endsTs:F(e.Ends)||F(e.Expires),description:e.Description||"",instruction:e.Instruction||"",url:e.URL||"",headline:e.Headline||"",areaDesc:e.AreaDesc||e.AreasAffected||"",zones:Ms(e),eventCode:e.NWSCode||"",provider:"nws",phase:"",severityInferred:!e.Severity||fe(e.Severity)==="unknown",certaintyInferred:!1}}}function Bs(t,e,i){const r=t.toLowerCase();if(r.includes("extreme")||r.includes("tropical cyclone"))return{severity:"extreme",label:(r.includes("extreme"),"Extreme")};if(r.includes("severe"))return{severity:"severe",label:"Severe"};if(r.includes("major"))return{severity:"severe",label:"Major"};if(r.includes("moderate"))return{severity:"moderate",label:"Moderate"};if(r.includes("minor")||r.includes("initial"))return{severity:"minor",label:"Minor"};const o=e.toLowerCase();if(o.includes("tropical_cyclone"))return{severity:"extreme",label:"Extreme"};if(o.includes("severe")||o.includes("fire_weather"))return{severity:"severe",label:"Severe"};const n=i.charAt(0).toUpperCase()+i.slice(1);return i==="major"?{severity:"moderate",label:n}:{severity:"minor",label:n}}function zs(t){return t.title||t.short_title||t.type.replace(/_/g," ")}function Ps(t){if(t.area_id&&t.id.startsWith(t.area_id+"_")){const e=t.id.slice(t.area_id.length+1);return`https://www.bom.gov.au/warning/${t.type.replace(/_/g,"-")}/${e}`}return"https://www.bom.gov.au/weather-and-climate/warnings-and-alerts"}const Is={new:"New",update:"Updated",renewal:"Renewed",upgrade:"Upgraded",downgrade:"Downgraded",final:"Final"};function Ns(t){return Is[t.toLowerCase()]||""}class Rs{constructor(){this.provider="bom",this.stableIds=!0}canHandle(e){const i=e.warnings;if(!Array.isArray(i))return!1;if(i.length===0)return typeof e.attribution=="string"&&e.attribution.toLowerCase().includes("bureau of meteorology");const r=i[0];return typeof r=="object"&&r!==null&&"warning_group_type"in r&&"issue_time"in r}parseAlerts(e){const i=e.warnings;return Array.isArray(i)?i.filter(r=>typeof r=="object"&&r!==null).filter(r=>r.phase!=="cancelled").map(r=>this._normalize(r)):[]}_normalize(e){const i=F(e.issue_time),r=F(e.expiry_time),o=zs(e),{severity:n,label:s}=Bs(o,e.type,e.warning_group_type);return{id:e.id,event:o,severity:n,severityLabel:s,certainty:"",urgency:"",sentTs:i,onsetTs:i,endsTs:r,description:"",instruction:"",url:Ps(e),headline:e.short_title||o,areaDesc:e.state||"",zones:e.area_id?[e.area_id.toUpperCase()]:[],eventCode:"",provider:"bom",phase:Ns(e.phase),severityInferred:!0,certaintyInferred:!1}}}const Os="https://www.dwd.de/DE/wetter/warnungen_gemeinden/warnWetter_node.html",Us={"#880e4f":{severity:"extreme",label:"Extreme"},"#ff0000":{severity:"severe",label:"Severe"},"#ff9900":{severity:"moderate",label:"Moderate"},"#ffff00":{severity:"minor",label:"Minor"}};function Ws(t,e){if(typeof t=="number")switch(t){case 4:return{severity:"extreme",label:"Extreme"};case 3:return{severity:"severe",label:"Severe"};case 2:return{severity:"moderate",label:"Moderate"};case 1:return{severity:"minor",label:"Minor"};case 0:return{severity:"unknown",label:"Unknown"}}if(typeof e=="string"){const i=Us[e.toLowerCase()];if(i)return i}return{severity:"unknown",label:"Unknown"}}function Hs(t){return typeof t=="object"&&t!==null&&typeof t.level=="number"&&typeof t.color=="string"}class js{constructor(){this.provider="dwd"}canHandle(e){return typeof e.warning_count!="number"||typeof e.region_name!="string"?!1:e.warning_count>0?Hs(e.warning_1):!0}parseAlerts(e){const i=typeof e.warning_count=="number"?e.warning_count:0;if(i<=0)return[];const r=typeof e.region_name=="string"?e.region_name:"",o=[];for(let n=1;n<=i;n++){const s=e[`warning_${n}`];if(!s||typeof s!="object")continue;const a=s,d=typeof a.level=="number"?a.level:void 0;if(d===0)continue;const{severity:c,label:p}=Ws(d,a.color),h=F(a.start_time),f=F(a.end_time),w=typeof a.event_code=="number"?String(a.event_code):"",v=typeof a.event=="string"?a.event:"";o.push({id:`dwd_${w||v}_${h}`,event:v,severity:c,severityLabel:p,certainty:"",urgency:"",sentTs:0,onsetTs:h,endsTs:f,description:typeof a.description=="string"?a.description:"",instruction:typeof a.instruction=="string"?a.instruction:"",url:Os,headline:typeof a.headline=="string"?a.headline:"",areaDesc:r,zones:[],eventCode:w,provider:"dwd",phase:"",severityInferred:!1,certaintyInferred:!1})}return o}}const Gs="https://www.meteoswiss.admin.ch/services-and-publications/applications/hazards.html#tab=severe-weather-map&weather-tab=all";function qs(t){switch(t){case 5:return{severity:"extreme",label:"Extreme"};case 4:return{severity:"extreme",label:"Extreme"};case 3:return{severity:"severe",label:"Severe"};case 2:return{severity:"moderate",label:"Moderate"};case 1:return{severity:"minor",label:"Minor"};case 0:return{severity:"unknown",label:"Unknown"};default:return{severity:"unknown",label:"Unknown"}}}class Ks{constructor(){this.provider="meteoswiss"}canHandle(e){return Array.isArray(e.warning_types)&&Array.isArray(e.warning_levels_numeric)&&Array.isArray(e.warning_valid_from)}parseAlerts(e){var i,r,o;const n=y=>Array.isArray(e[y])?e[y]:[],s=n("warning_types"),a=n("warning_levels"),d=n("warning_levels_numeric"),c=n("warning_valid_from"),p=n("warning_valid_to"),h=n("warning_texts"),f=n("warning_links"),w=y=>s.length>0&&f.length>0&&f.length%s.length===0?String(f[y*(f.length/s.length)]):f.length>0?String(f[0]):Gs,v=[];for(let y=0;y<s.length;y++){const L=Number(d[y]);if(L===0)continue;const S=String((i=s[y])!=null?i:""),{severity:J,label:G}=qs(L),D=String((r=a[y])!=null?r:"")||G,q=c[y]!=null?F(String(c[y])):0,de=p[y]!=null?F(String(p[y])):0;v.push({id:`meteoswiss_${S}_${q}`,event:S,severity:J,severityLabel:D,certainty:"",urgency:"",sentTs:0,onsetTs:q,endsTs:de,description:String((o=h[y])!=null?o:""),instruction:"",url:w(y),headline:"",areaDesc:"",zones:[],eventCode:S,provider:"meteoswiss",phase:"",severityInferred:!1,certaintyInferred:!1,iconHint:S})}return v}}function yo(t){if(!t||typeof t!="string")return;const e=parseInt(t.split(";")[0].trim(),10);if(e>=4)return"extreme";if(e===3)return"severe";if(e===2)return"moderate";if(e===1)return"minor"}function Ys(t){if(!t||typeof t!="string")return"";const e=t.split(";");return e.length>=3?e[2].trim():""}function Vs(t){if(!t||typeof t!="string")return"";const e=t.split(";");return e.length>1?e.slice(1).join(";").trim():""}class Zs{constructor(){this.provider="meteoalarm"}canHandle(e){return typeof e.attribution=="string"&&e.attribution.toLowerCase().includes("meteoalarm")?!0:typeof e.awareness_level=="string"&&typeof e.awareness_type=="string"}parseAlerts(e){const i=U(e.event),r=U(e.headline);if(!i&&!r)return[];const o=U(e.awareness_level),n=yo(o)||fe(U(e.severity)),s=Ys(o)||U(e.severity)||n.charAt(0).toUpperCase()+n.slice(1),a=F(U(e.onset)||U(e.effective)),d=F(U(e.expires)),c=F(U(e.effective)),p=Vs(U(e.awareness_type)),h=i||p||r,f=!yo(o)&&!U(e.severity);return[{id:`meteoalarm_${h}_${a}`,event:h,severity:n,severityLabel:s,certainty:U(e.certainty),urgency:U(e.urgency),sentTs:c,onsetTs:a||c,endsTs:d,description:U(e.description),instruction:U(e.instruction),url:"",headline:r||h,areaDesc:U(e.senderName),zones:[],eventCode:"",provider:"meteoalarm",iconHint:p,phase:"",severityInferred:f,certaintyInferred:!1}]}}function U(t){return typeof t=="string"?t:""}class Xs{constructor(){this.provider="pirateweather"}canHandle(e){return typeof e.attribution=="string"&&e.attribution.toLowerCase().includes("pirate weather")}parseAlerts(e){const i=[],r=typeof e.title=="string"&&e.title!=="",o=typeof e.title_0=="string"&&e.title_0!=="";if(r&&!o){const n=this._parseOne(e,"");n&&i.push(n)}for(let n=0;;n++){const s=`_${n}`;if(typeof e[`title${s}`]!="string"||e[`title${s}`]==="")break;const a=this._parseOne(e,s);a&&i.push(a)}return i}_parseOne(e,i){const r=Ie(e[`title${i}`]);if(!r)return null;const o=Ie(e[`severity${i}`]),n=fe(o),s=o?o.charAt(0).toUpperCase()+o.slice(1).toLowerCase():n.charAt(0).toUpperCase()+n.slice(1),a=F(Ie(e[`time${i}`])),d=F(Ie(e[`expires${i}`])),c=e[`regions${i}`],p=Array.isArray(c)?c.join(", "):Ie(c),h=Ie(e[`uri${i}`]),f=Ie(e[`description${i}`]);return{id:`pirateweather_${r}_${a}`,event:r,severity:n,severityLabel:s,certainty:"",urgency:"",sentTs:a,onsetTs:a,endsTs:d,description:f,instruction:"",url:h,headline:r,areaDesc:p,zones:[],eventCode:"",provider:"pirateweather",phase:"",severityInferred:!o||fe(o)==="unknown",certaintyInferred:!1}}}function Ie(t){return typeof t=="string"?t:""}class Qs{constructor(){this.provider="cap",this.stableIds=!0}canHandle(e){return typeof e.incident_platform_version=="string"&&typeof e.id=="string"}parseAlerts(e){const i=k(e.id);if(!i)return[];const r=k(e.event),o=k(e.severity),n=k(e.severity_normalized),s=fe(n||o),a=o||n,d=a?a.charAt(0).toUpperCase()+a.slice(1).toLowerCase():s.charAt(0).toUpperCase()+s.slice(1),c=F(k(e.sent)||k(e.effective)),p=F(k(e.onset))||c,h=F(k(e.ends))||F(k(e.expires)),f=k(e.icon),w=f.startsWith("mdi:")?f:void 0,v=k(e.geometry_ref)||void 0,y=ia(e.bbox);return[{id:i,event:r||"Unknown",severity:s,severityLabel:d,certainty:k(e.certainty),urgency:k(e.urgency),sentTs:c,onsetTs:p,endsTs:h,description:k(e.description),instruction:k(e.instruction),url:wo(k(e.url))||wo(k(e.web)),headline:k(e.headline),areaDesc:k(e.area_desc),zones:ta(e),eventCode:k(e.event_code_nws)||k(e.event_code_same),provider:"cap",phase:ea(k(e.phase)),severityInferred:!o&&!n,certaintyInferred:!1,...w!==void 0&&{providerIcon:w},...v!==void 0&&{geometryRef:v},...y!==void 0&&{bbox:y}}]}}const Js={new:"New",update:"Update",cancel:"Cancel",expired:"Expired"};function ea(t){return Js[t.toLowerCase()]||""}function ta(t){const e=[],i=new Set,r=n=>{if(typeof n!="string")return;const s=n.toUpperCase();i.has(s)||(i.add(s),e.push(s))};for(const n of["affected_zones","geocode_ugc","geocode_same"]){const s=t[n];if(Array.isArray(s))for(const a of s)r(a)}const o=t.geocodes;if(o&&typeof o=="object"&&!Array.isArray(o)){for(const n of Object.values(o))if(Array.isArray(n))for(const s of n)r(s)}return e}function k(t){return typeof t=="string"?t:""}function ia(t){if(!(!Array.isArray(t)||t.length!==4)&&t.every(e=>typeof e=="number"&&Number.isFinite(e)))return[t[0],t[1],t[2],t[3]]}function wo(t){return t.startsWith("http://")||t.startsWith("https://")?t:""}const ra="https://weather.gc.ca/index_e.html",oa="https://meteo.gc.ca/index_f.html",na="environment canada",xo="environnement canada",sa={red:"extreme",orange:"severe",yellow:"moderate",grey:"minor",green:"unknown",rouge:"extreme",jaune:"moderate",gris:"minor",vert:"unknown"},aa={warning:"severe",watch:"moderate",advisory:"minor",statement:"minor",ending:"unknown"},la={high:"severe",medium:"moderate",moderate:"moderate",low:"minor",\u00E9lev\u00E9:"severe",\u00E9lev\u00E9e:"severe",mod\u00E9r\u00E9:"moderate",mod\u00E9r\u00E9e:"moderate",faible:"minor"},da={high:"Likely",moderate:"Possible",medium:"Possible",low:"Unlikely",\u00E9lev\u00E9e:"Likely",\u00E9lev\u00E9:"Likely",mod\u00E9r\u00E9e:"Possible",mod\u00E9r\u00E9:"Possible",faible:"Unlikely"},ca={new:"New",issued:"New",continued:"Continued",updated:"Updated",extended:"Updated",expired:"Final",ended:"Final",\u00E9mis:"New",maintenu:"Continued","mis \xE0 jour":"Updated",prolong\u00E9:"Updated",termin\u00E9:"Final",annul\u00E9:"Final"};function ua(t){var e;return t&&(e=sa[t.toLowerCase()])!=null?e:"unknown"}function ha(t){var e;return t&&(e=aa[t.toLowerCase()])!=null?e:"unknown"}function pa(t){var e;return t&&(e=la[t.toLowerCase()])!=null?e:"unknown"}function _a(...t){var e;let i="unknown",r=yt[i];for(const o of t){const n=(e=yt[o])!=null?e:yt.unknown;n<r&&(i=o,r=n)}return i}function Eo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function ga(t){var e;if(!t)return"";const i=t.toLowerCase();return(e=ca[i])!=null?e:Eo(t)}function ma(t){var e;return t&&(e=da[t.toLowerCase()])!=null?e:""}function fa(t){return typeof t=="string"&&t.toLowerCase().includes(xo)}function va(t){return fa(t)?oa:ra}class ba{constructor(){this.provider="eccc"}canHandle(e){const i=e.attribution;if(typeof i!="string")return!1;const r=i.toLowerCase();return r.includes(na)||r.includes(xo)}parseAlerts(e){const i=e.alerts;if(!Array.isArray(i))return[];const r=va(e.attribution);return i.filter(o=>typeof o=="object"&&o!==null).filter(o=>{const n=Ne(o.status).toLowerCase();return n!=="cancelled"&&n!=="annul\xE9"}).map(o=>this._normalize(o,r))}_normalize(e,i){const r=F(e.issued),o=F(e.expiry),n=_a(ua(e.color),ha(e.type),pa(e.impact)),s=Ne(e.title),a=Ne(e.alert_code),d=Ne(e.area),c=e.color?e.color.toLowerCase():void 0,p=Ne(e.impact),h=p?Eo(p):void 0,f=h!=null?h:n.charAt(0).toUpperCase()+n.slice(1),w=ma(e.confidence);return{id:`eccc_${a||s||"unknown"}_${d}_${r}`,event:s,severity:n,severityLabel:f,certainty:w,urgency:"",sentTs:r,onsetTs:r,endsTs:o,description:Ne(e.text),instruction:"",url:Ne(e.url)||i,headline:s,areaDesc:d,zones:[],eventCode:a,provider:"eccc",phase:ga(e.status),severityInferred:!e.color&&!e.type&&!e.impact,certaintyInferred:!e.confidence,colorHint:c,severityBadgeLabel:h}}}function Ne(t){return typeof t=="string"?t:""}const ya="https://www.fire.nsw.gov.au/firesnearme/";function wa(t){const e=t.toLowerCase();return e.includes("emergency warning")?{severity:"extreme",label:"Emergency Warning",inferred:!1}:e.includes("watch and act")?{severity:"severe",label:"Watch and Act",inferred:!1}:e.includes("advice")?{severity:"moderate",label:"Advice",inferred:!1}:e.includes("planned burn")?{severity:"minor",label:"Planned Burn",inferred:!1}:{severity:"unknown",label:Ao(t)||"Unknown",inferred:!0}}function Ao(t){return t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}function xa(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function Ea(t){if(t==null||t==="")return"";if(typeof t=="number")return`${t} ha`;const e=t.trim();return/^\d+(\.\d+)?$/.test(e)?`${e} ha`:e}function Aa(t){const e=[],i=(r,o)=>{o&&e.push(`${r}: ${o}`)};return i("Status",_e(t.status)),i("Type",_e(t.type)),i("Location",_e(t.location)),i("Council area",_e(t.council_area)),i("Size",Ea(t.size)),i("Responsible agency",_e(t.responsible_agency)),e.join(`

`)}class Sa{constructor(){this.provider="nsw_rfs",this.feedSources=["nsw_rural_fire_service_feed"],this.carriesPoint=!0,this.stableIds=!0}canHandle(e){return typeof e.category=="string"&&typeof e.status=="string"&&typeof e.responsible_agency=="string"}parseAlerts(e){return this.canHandle(e)?[this._normalize(e)]:[]}_normalize(e){const i=F(e.publication_date),{severity:r,label:o,inferred:n}=wa(_e(e.category)),s=_e(e.location),a=_e(e.type),d=a?Ao(a):s||"Fire Incident",c=ki(e.latitude,e.longitude);return{id:_e(e.external_id)||`nsw_rfs_${xa(s)}_${i}`,event:d,severity:r,severityLabel:o,certainty:"",urgency:"",sentTs:i,onsetTs:i,endsTs:0,description:Aa(e),instruction:"",url:ya,headline:s||d,areaDesc:_e(e.council_area)||s||"NSW",zones:[],eventCode:"",provider:"nsw_rfs",phase:"",severityInferred:n,certaintyInferred:!1,providerIcon:"mdi:fire",...c!==void 0&&{point:c}}}}function _e(t){return typeof t=="string"?t:""}const Fa="Herausgeber",So=/^(?:amtliche\s+)?(?:(?:extreme\s+)?(?:unwetter)?warnung|vorabinformation)\s+(?:vor\s+)?/i;function Da(t){return t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())}function Ca(t){if(!So.test(t))return t;const e=t.replace(So,"").trim();return e?Da(e):t}function ka(t,e){if(!e)return t;const i=`${Fa}: ${e}`;return t?`${t}

${i}`:i}class $a{constructor(){this.provider="nina",this.stableIds=!0}canHandle(e){return typeof e.recommended_actions=="string"&&typeof e.affected_areas=="string"&&typeof e.id=="string"}parseAlerts(e){if(!this.canHandle(e))return[];const i=le(e.id);if(!i)return[];const r=le(e.headline),o=le(e.severity),n=fe(o),s=F(le(e.sent)),a=F(le(e.start))||s,d=F(le(e.expires));return[{id:i,event:Ca(r)||"Warnung",severity:n,severityLabel:o?o.charAt(0).toUpperCase()+o.slice(1).toLowerCase():n.charAt(0).toUpperCase()+n.slice(1),certainty:"",urgency:"",sentTs:s,onsetTs:a,endsTs:d,description:ka(le(e.description),le(e.sender)),instruction:le(e.recommended_actions),url:Ta(le(e.web)),headline:r,areaDesc:le(e.affected_areas),zones:[],eventCode:"",provider:"nina",phase:"",severityInferred:!1,certaintyInferred:!1}]}}function le(t){return typeof t=="string"?t:""}function Ta(t){return t.startsWith("http://")||t.startsWith("https://")?t:""}const Re=[new Qs,new Ls,new Rs,new Sa,new $a,new js,new Ks,new Zs,new ba,new Xs],Mi=[/^sensor\..*alerts?$/i,/^sensor\..*warnings?$/i,/^binary_sensor\.meteoalarm/i,/^sensor\.dwd_weather_warnings/i,/^sensor\.weather_warnings_at_/i,/^sensor\..*cap_alert_/i,/^binary_sensor\..*_warn(?:ing|ung)_\d+$/i];function Nt(t){return Re.some(e=>e.canHandle(t))}function Li(){var t;const e=[];for(const i of Re)for(const r of(t=i.feedSources)!=null?t:[])e.push({source:r,provider:i.provider});return e}function Ma(){return new Set(Re.filter(t=>t.carriesPoint).map(t=>t.provider))}function Rt(t,e){var i;if(t){const r=Re.find(o=>o.provider===t);if(r)return r}for(const r of Re)if(r.canHandle(e))return r;return(i=Re.find(r=>r.provider==="nws"))!=null?i:Re[0]}function ie(t){if(!t)return[];const e=[];for(const i of[t.device,...t.devices||[]])i&&!e.includes(i)&&e.push(i);return e}function Bi(t,e,i){const r=i!=null?i:t.entities?Object.values(t.entities):null;if(!r)return[];const o=[];for(const n of r){if(!n||n.device_id!==e)continue;const s=n.entity_id;if(!s)continue;const a=t.states[s];!a||!Nt(a.attributes)||o.push(s)}return o}function Fo(t,e,i){const r=i!=null?i:t.entities?Object.values(t.entities):null;if(!r)return[];const o=[];for(const n of r)(n==null?void 0:n.device_id)===e&&n.entity_id&&o.push(n.entity_id);return o}function La(t,e,i){if(i)return i.some(o=>(o==null?void 0:o.device_id)===e);const r=t.entities;if(!r)return!1;for(const o of Object.values(r))if((o==null?void 0:o.device_id)===e)return!0;return!1}async function zi(t,e){const i=async()=>{const a=await t.sendMessagePromise({type:"config/entity_registry/list"});e(a!=null?a:[])};let r=null,o=!1;const n=()=>{if(r!==null){o=!0;return}i().catch(()=>{}),r=setTimeout(()=>{r=null,o&&(o=!1,n())},250)},s=await t.subscribeEvents(()=>n(),"entity_registry_updated");return await i(),()=>{r!==null&&(clearTimeout(r),r=null),o=!1,s()}}const Ba="weather-alerts-card:dismissals:v1:",za=30*86400,Pi="weather-alerts-card:dismissals-changed",Pa=3600;function Ii(){return Math.floor(Date.now()/1e3)}function Do(t){return`${t.severity}|${t.sentTs}|${t.endsTs}|${t.phase||""}`}function Ia(t,e){const i=[t,...e].filter(Boolean).sort().join(`
`);let r=2166136261;for(let o=0;o<i.length;o++)r^=i.charCodeAt(o),r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}function Ot(t){return Ba+t}function Co(t){if(!t)return[];const e=[];if(t.entity&&e.push(t.entity),t.entities)for(const i of t.entities)i&&e.push(i);for(const i of[...ie(t)].sort())e.push(`device:${i}`);if(t.sources)for(const i of t.sources)i&&e.push(`source:${i}`);return e}function ko(t){const e=Co(t);if(e.length===0)return"";const[i,...r]=e;return Ia(i,r)}function Ni(){try{return typeof localStorage!="undefined"?localStorage:null}catch{return null}}function Ri(t){if(typeof window!="undefined")try{window.dispatchEvent(new CustomEvent(Pi,{detail:{scope:t}}))}catch{}}function $o(t,e){if(typeof window=="undefined")return()=>{};const i=n=>{const s=n.detail;!s||s.scope!==t||e()},r=Ot(t),o=n=>{n.key!==null&&n.key!==r||e()};return window.addEventListener(Pi,i),window.addEventListener("storage",o),()=>{window.removeEventListener(Pi,i),window.removeEventListener("storage",o)}}function Oi(t,e=Ii()){const i=new Map,r=Ni();if(!r)return i;let o;try{o=r.getItem(Ot(t))}catch{return i}if(!o)return i;let n;try{n=JSON.parse(o)}catch{return i}if(!n||typeof n!="object")return i;const s=n;for(const[a,d]of Object.entries(s)){if(!d||typeof d!="object")continue;const c=d;typeof c.sig!="string"||typeof c.dismissedAt!="number"||typeof c.lastSeenAt!="number"||e-c.lastSeenAt>za||i.set(a,{sig:c.sig,dismissedAt:c.dismissedAt,lastSeenAt:c.lastSeenAt})}return i}function Ui(t,e){const i=Ni();if(!i){Ri(t);return}const r=Ot(t);try{if(e.size===0)i.removeItem(r);else{const o={};for(const[n,s]of e)o[n]=s;i.setItem(r,JSON.stringify(o))}}catch{}Ri(t)}function Na(t,e,i=Ii()){const r=new Map(t);return r.set(e.id,{sig:Do(e),dismissedAt:i,lastSeenAt:i}),r}function Ra(t,e){if(!t.has(e))return t;const i=new Map(t);return i.delete(e),i}function Oa(t){const e=Ni();if(e)try{e.removeItem(Ot(t))}catch{}Ri(t)}function Ua(t,e,i=Ii()){if(e.size===0)return{visible:t,updatedMap:e};let r=null;const o=[];for(const n of t){const s=e.get(n.id);if(!s){o.push(n);continue}const a=Do(n);if(s.sig!==a){r||(r=new Map(e)),r.delete(n.id),o.push(n);continue}i-s.lastSeenAt>Pa&&(r||(r=new Map(e)),r.set(n.id,{...s,lastSeenAt:i}))}return{visible:o,updatedMap:r!=null?r:e}}async function Wa(t,e){var i,r;try{const o=await t.sendMessagePromise({type:"cap_alerts/geometry",geometry_ref:e}),n=(r=(i=o==null?void 0:o.features)==null?void 0:i[0])==null?void 0:r.geometry;return!n||typeof n.type!="string"?null:n}catch{return null}}const Oe=1e-4,To=111.32,Wi=85.05112878;function Ut(t){return Math.max(-Wi,Math.min(Wi,t))}const Ha=10,ja=150;function Ga(t,e=Ha){let i=1/0,r=1/0,o=-1/0,n=-1/0;for(const[v,y]of t)v<i&&(i=v),v>o&&(o=v),y<r&&(r=y),y>n&&(n=y);Number.isFinite(i)||(i=o=0,r=n=0);const s=(i+o)/2,a=(r+n)/2,d=Math.max(Math.cos(a*Math.PI/180),.01),c=e/To,p=e/(To*d);o-i<2*p&&(i=s-p,o=s+p);const h=Math.max((n-r)/2,c);n-r<2*c&&(r=a-c,n=a+c);const f=Ut(n),w=Math.max(Math.min(r,f-2*h),-Wi);return[i,w,o,f]}function Wt(t){return`M${re(t.x)},${re(t.y)}l0.0001,0`}function qa(t,e,i,r){const[o,n,s,a]=t,d=(n+a)/2,c=Math.cos(d*Math.PI/180)||Oe,p=Math.max((s-o)*c,Oe),h=Math.max(a-n,Oe),f=`0 0 ${re(p)} ${re(h)}`,w=(y,L)=>[(y-o)*c,a-L],v=Mo(e).map(y=>Lo(y,w)).filter(y=>y!==null);return{viewBox:f,polygonPaths:v,...i&&{marker:Ht(i,w)},...r&&{referenceMarker:Ht(r,w)}}}function Ht([t,e],i){const[r,o]=i(t,e);return{x:Number(re(r)),y:Number(re(o))}}function Mo(t){if(!t)return[];if(t.type==="Polygon"){const e=t.coordinates;return Array.isArray(e)&&e.length>0?[e[0]]:[]}if(t.type==="MultiPolygon"){const e=t.coordinates;return Array.isArray(e)?e.map(i=>Array.isArray(i)&&i.length>0?i[0]:null).filter(i=>Array.isArray(i)&&i.length>0):[]}return[]}function Lo(t,e){if(!Array.isArray(t)||t.length===0)return null;let i="";for(let r=0;r<t.length;r++){const o=t[r];if(!Array.isArray(o)||o.length<2)continue;const[n,s]=e(o[0],o[1]);i+=`${r===0?"M":"L"}${re(n)},${re(s)}`}return i?`${i}Z`:null}function re(t){return Number(t.toFixed(5)).toString()}const Bo="/api/map_tiles/raster/{z}/{x}/{y}.png",Ka=Bo,zo="\xA9 OpenStreetMap contributors",Ya=1200*1e3;function Va(t,e){return`${(t||"").replace(/\/+$/,"")}${Bo}?token=${encodeURIComponent(e)}`}async function Za(t){try{const e=await t.sendMessagePromise({type:"map_tiles/access_token"}),i=e==null?void 0:e.token;return typeof i=="string"&&i.length>0?i:null}catch{return null}}const Ee=256,Po=512,Io=1,Xa=16,Qa=16,No=.15;function wt(t,e,i){const r=Ee*Math.pow(2,i),o=(t+180)/360*r,n=Ut(e)*Math.PI/180,s=(1-Math.log(Math.tan(n)+1/Math.cos(n))/Math.PI)/2*r;return[o,s]}function Ja(t,e,i,r){for(let o=Xa;o>=Io;o--){const[n,s]=wt(t,r,o),[a,d]=wt(i,e,o);if(a-n<=Po&&d-s<=Po)return o}return Io}function el(t,e,i,r){return t.split("{z}").join(String(e)).split("{x}").join(String(i)).split("{y}").join(String(r)).split("{s}").join("a")}function tl(t,e,i){const r=(i==null?void 0:i.tileUrl)||Ka,o=(i==null?void 0:i.attribution)||zo,[n,s,a,d]=t,c=Math.max((a-n)*No,Oe),p=Math.max((d-s)*No,Oe),h=n-c,f=a+c,w=Ut(s-p),v=Ut(d+p),y=Ja(h,w,f,v),L=Math.pow(2,y),[S,J]=wt(h,v,y),[G,D]=wt(f,w,y),q=Math.max(G-S,Oe),de=Math.max(D-J,Oe),Q=`0 0 ${re(q)} ${re(de)}`,qt=`${re(q)} / ${re(de)}`,Et=[],At=Math.floor(S/Ee),z=Math.floor((G-1e-6)/Ee),Fe=Math.floor(J/Ee),De=Math.floor((D-1e-6)/Ee);if((z-At+1)*(De-Fe+1)<=Qa){for(let K=Fe;K<=De;K++)if(!(K<0||K>=L))for(let be=At;be<=z;be++){const Ue=(be%L+L)%L;Et.push({href:el(r,y,Ue,K),x:Number((be*Ee-S).toFixed(3)),y:Number((K*Ee-J).toFixed(3)),size:Ee})}}const ve=(K,be)=>{const[Ue,Yt]=wt(K,be,y);return[Ue-S,Yt-J]},Kt=Mo(e).map(K=>Lo(K,ve)).filter(K=>K!==null);return{viewBox:Q,aspect:qt,tiles:Et,polygonPaths:Kt,attribution:o,...(i==null?void 0:i.point)&&{marker:Ht(i.point,ve)},...(i==null?void 0:i.referencePoint)&&{referenceMarker:Ht(i.referencePoint,ve)}}}function Hi(t,e,i){t.dispatchEvent(new CustomEvent(e,{detail:i,bubbles:!0,composed:!0}))}function ji(t){return(t==null?void 0:t.tap_action)!==void 0}function il(t,e,i,r){var o,n,s,a;switch(i.action){case"more-info":{const d=(o=i.entity)!=null?o:r;if(!d)return;Hi(t,"hass-more-info",{entityId:d});break}case"navigate":{const d=i.navigation_path;if(!d)return;const c=i.navigation_replace===!0;c?history.replaceState(null,"",d):history.pushState(null,"",d),Hi(window,"location-changed",{replace:c});break}case"url":{if(!i.url_path)return;window.open(i.url_path,"_blank","noopener");break}case"toggle":{const d=(n=i.entity)!=null?n:r;if(!d||!(e!=null&&e.callService))return;e.callService("homeassistant","toggle",{entity_id:d});break}case"call-service":case"perform-action":{const d=(s=i.perform_action)!=null?s:i.service;if(!d||!(e!=null&&e.callService))return;const c=d.indexOf(".");if(c<0)return;const p=d.slice(0,c),h=d.slice(c+1);e.callService(p,h,(a=i.data)!=null?a:i.service_data,i.target);break}case"fire-dom-event":{Hi(t,"ll-custom",i);break}}}const rl=Er`
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
 */const tt=t=>t!=null?t:m;function W(t,e,i,r){return{kind:"toggle",key:t,panel:e,default:i,on:!0,off:!1,label:r}}function oe(t,e,i,r,o){return{kind:"select",key:t,panel:e,default:i,label:r,options:o}}const ne=(t,...e)=>e.map(i=>({value:i,label:`${t}${i.replace(/-/g,"_")}`})),ol=[W("showProvider","appearance",!1,"editor.show_provider"),{kind:"toggle",key:"layout",panel:"appearance",default:"default",on:"compact",off:"default",label:"editor.compact"},W("animations","appearance",!0,"editor.animations"),W("reformatText","advanced",!0,"editor.reformat_text"),W("showDetails","details",!0,"editor.show_details"),W("expandDetails","details",!1,"editor.expand_details"),W("showMetadata","details",!0,"editor.show_metadata"),W("showDescription","details",!0,"editor.show_description"),W("showInstructions","details",!0,"editor.show_instructions"),W("showGeometry","details",!1,"editor.show_geometry"),W("showMyLocation","details",!1,"editor.show_my_location"),W("showSourceLink","details",!0,"editor.show_source_link"),W("deduplicate","advanced",!0,"editor.deduplicate"),W("deduplicateHeadlines","advanced",!0,"editor.deduplicate_headlines"),W("hideExpired","behavior",!0,"editor.hide_expired"),W("allowDismiss","dismissal",!1,"editor.allow_dismiss"),W("showDismissUndo","dismissal",!0,"editor.show_dismiss_undo")],nl=[oe("provider","advanced","auto","editor.provider",ne("editor.provider_","auto","nws","bom","meteoalarm","dwd","nina","meteoswiss","eccc","nsw_rfs","pirateweather","cap")),oe("minSeverity","filtering","all","editor.min_severity",ne("editor.severity_","all","minor","moderate","severe","extreme")),oe("colorTheme","appearance","severity","editor.color_theme",ne("editor.color_","severity","nws","meteoalarm","eccc")),oe("enhanceContrast","advanced","subtle","editor.enhance_contrast",ne("editor.enhance_contrast_","off","subtle","strict")),oe("fontSize","appearance","default","editor.font_size",ne("editor.font_size_","small","default","large","x-large")),oe("progressFill","appearance","track","editor.progress_fill",ne("editor.progress_fill_","track","background")),oe("geometryStyle","details","shape","editor.geometry_style",ne("editor.geometry_style_","shape","map")),oe("sortOrder","behavior","default","editor.sort_order",ne("editor.sort_","default","onset","severity")),oe("timezone","advanced","server","editor.timezone",ne("editor.tz_","server","browser")),oe("unavailableBehavior","behavior","message","editor.unavailable_behavior",ne("editor.unavailable_","message","compact","hide")),oe("dismissTrigger","dismissal","button","editor.dismiss_trigger",ne("editor.dismiss_trigger_","button","swipe","both")),oe("dismissButtonStyle","dismissal","icon","editor.dismiss_button_style",ne("editor.dismiss_button_style_","icon","labeled"))],jt=Object.fromEntries(ol.map(t=>[t.key,t])),Ro=Object.fromEntries(nl.map(t=>[t.key,t])),Ae={...jt,...Ro},Gi={source:["entity","entities","device","devices","sources","title"],filtering:["zones","eventCodes","excludeEventCodes","minSeverity","maxDistanceKm","myLocationEntity"],appearance:["layout","colorTheme","fontSize","animations","showProvider","progressFill","progressStyle","iconBorderStyle"],details:["showDetails","expandDetails","showMetadata","showDescription","showInstructions","showGeometry","geometryStyle","showMyLocation","showSourceLink"],behavior:["tap_action","sortOrder","hideExpired","hideNoAlerts","unavailableBehavior"],dismissal:["allowDismiss","dismissTrigger","dismissButtonStyle","showDismissUndo"],advanced:["provider","timezone","reformatText","deduplicate","deduplicateHeadlines","enhanceContrast"]},sl={source:"editor.section_source",filtering:"editor.section_filtering",appearance:"editor.section_appearance",details:"editor.section_detail_panel",behavior:"editor.section_behavior",dismissal:"editor.section_dismissal",advanced:"editor.section_advanced"},qi=["showMetadata","showDescription","showInstructions","showSourceLink","showGeometry"],al=["progressFill","progressStyle","iconBorderStyle"];function Gt(t,e){var i;return(i=t[e])!=null?i:Ae[e].default}function ll(t,e){return Gt(t,e)===Ae[e].default}function Oo(t,e){return Gt(t,e.key)===e.on}function Ki(t,e,i){if(i===Gt(t,e))return t;const r={...t};return i===Ae[e].default?delete r[e]:r[e]=i,r}function Yi(t,e){return e.filter(i=>i in Ae?!ll(t,i):t[i]!==void 0)}function Vi(t,e){return Yi(t,[e]).length===1}const dl={zones:"editor.zones",eventCodes:"editor.event_codes",excludeEventCodes:"editor.exclude_event_codes",maxDistanceKm:"editor.max_distance",myLocationEntity:"editor.my_location_entity",progressStyle:"editor.progress_style",iconBorderStyle:"editor.icon_border_style",tap_action:"editor.tap_action",hideNoAlerts:"editor.hide_no_alerts"};function cl(t){return t.replace(/\s*\([^)]*\)\s*$/,"")}var Se;let it=Se=class extends Ye{constructor(){super(...arguments),this._showPreview=!1,this._subscribedDismissalsScope="",this._registryEntries=null,this._onRestoreAll=()=>{const t=this._currentScopeHash();t&&(Oa(t),this.requestUpdate())}}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._unsubscribeDismissals)==null||t.call(this),this._unsubscribeDismissals=void 0,this._subscribedDismissalsScope="",this._teardownRegistrySubscription()}updated(t){var e;super.updated(t);const i=this._currentScopeHash();i!==this._subscribedDismissalsScope&&((e=this._unsubscribeDismissals)==null||e.call(this),this._unsubscribeDismissals=void 0,this._subscribedDismissalsScope=i,i&&(this._unsubscribeDismissals=$o(i,()=>this.requestUpdate()))),this.isConnected&&this._maybeSubscribeRegistry()}_maybeSubscribeRegistry(){var t,e;if(ie(this._config).length===0){this._teardownRegistrySubscription();return}const i=(t=this.hass)==null?void 0:t.connection;!i||i===this._subscribedRegistryConn||((e=this._unsubscribeRegistry)==null||e.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=i,zi(i,r=>{this._registryEntries=r,this.requestUpdate()}).then(r=>{if(this._subscribedRegistryConn!==i){r();return}this._unsubscribeRegistry=r}).catch(()=>{this._subscribedRegistryConn===i&&(this._subscribedRegistryConn=void 0)}))}_teardownRegistrySubscription(){var t;(t=this._unsubscribeRegistry)==null||t.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=void 0}get _lang(){var t,e;return((e=(t=this.hass)==null?void 0:t.locale)==null?void 0:e.language)||"en"}get _useWebAwesome(){if(Se._webAwesome!==void 0)return Se._webAwesome;const t=!!customElements.get("ha-dropdown-item"),e=!!customElements.get("ha-list-item");return t||e?(Se._webAwesome=t,t):!0}_selectValue(t){var e,i,r;const o=t.detail;return(r=(i=o==null?void 0:o.value)!=null?i:(e=t.target)==null?void 0:e.value)!=null?r:""}_renderSelectItem(t,e){return this._useWebAwesome?g`<ha-dropdown-item value=${t}>${e}</ha-dropdown-item>`:g`<ha-list-item value=${t}>${e}</ha-list-item>`}get _useHaInput(){if(Se._haInput!==void 0)return Se._haInput;const t=!!customElements.get("ha-input"),e=!!customElements.get("ha-textfield");return t||e?(Se._haInput=t,t):!0}_renderTextField(t){var e,i;return this._field(t.changed===!0,this._useHaInput?g`
        <ha-input
          .label=${t.label}
          .value=${t.value}
          .hint=${(e=t.helper)!=null?e:""}
          type=${tt(t.type)}
          min=${tt(t.min)}
          step=${tt(t.step)}
          @change=${t.onChange}
        ></ha-input>
      `:g`
        <ha-textfield
          .label=${t.label}
          .value=${t.value}
          .helper=${(i=t.helper)!=null?i:""}
          .helperPersistent=${t.helper!==void 0}
          type=${tt(t.type)}
          min=${tt(t.min)}
          step=${tt(t.step)}
          @change=${t.onChange}
        ></ha-textfield>
      `,t.onReset)}setConfig(t){this._config=t,this._showPreview=!!t._preview}_fireConfigChanged(t){this._config=t;const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_getMatchingEntityIds(){var t,e;const i=ie(this._config),r=[...this._getSelectedEntities(),...i.map(s=>`device:${s}`)].join(",");if(this._cachedHass===this.hass&&this._cachedConfigKey===r&&this._cachedEntityIds)return this._cachedEntityIds;this._cachedHass=this.hass,this._cachedConfigKey=r;const o=new Set;for(const s of i)for(const a of Fo(this.hass,s,this._registryEntries))o.add(a);const n=[];for(const[s,a]of Object.entries(this.hass.states))!s.startsWith("sensor.")&&!s.startsWith("binary_sensor.")&&!s.startsWith("geo_location.")||o.has(s)||(Mi.some(d=>d.test(s))||Nt(a.attributes))&&n.push(s);if((t=this._config)!=null&&t.entity&&!n.includes(this._config.entity)&&n.push(this._config.entity),(e=this._config)!=null&&e.entities)for(const s of this._config.entities)s&&!n.includes(s)&&n.push(s);return this._cachedEntityIds=n,n}_getSelectedEntities(){var t,e;const i=[];if((t=this._config)!=null&&t.entity&&i.push(this._config.entity),(e=this._config)!=null&&e.entities)for(const r of this._config.entities)r&&!i.includes(r)&&i.push(r);return i}_hasNoRealAlerts(){var t;if(!this.hass||!((t=this._config)!=null&&t.entity))return!1;const e=this._getSelectedEntities();let i=0;for(const r of e){const o=this.hass.states[r];if(o&&(o.state==="unknown"||o.state==="unavailable"||(i++,o.state!=="0"&&o.state!=="off")))return!1}return i>0}_isEntityMismatch(){var t,e;if(!((t=this._config)!=null&&t.entity))return!1;const i=(e=this.hass)==null?void 0:e.states[this._config.entity];return!i||Mi.some(r=>r.test(this._config.entity))?!1:!Nt(i.attributes)}_renderEntityWarning(t){return this._isEntityMismatch()?g`<ha-alert alert-type="warning">${u("editor.entity_warning",t)}</ha-alert>`:m}_renderNoEntitiesHint(t){const e=ie(this._config);if(e.length>0&&this.hass){const i=this.hass.devices,r=i?e.filter(n=>!i[n]):[],o=r.length>0?g`<ha-alert alert-type="warning"
            >${u("editor.devices_missing_warning",t,{ids:r.join(", ")})}</ha-alert
          >`:m;return e.some(n=>Bi(this.hass,n,this._registryEntries).length>0)||r.length===e.length?o:g`${o}<ha-alert alert-type="info">${u("editor.no_device_alerts_hint",t)}</ha-alert>`}return this._getMatchingEntityIds().some(i=>{var r;return(r=this.hass)==null?void 0:r.states[i]})?m:g`<ha-alert alert-type="info">${u("editor.no_entities_hint",t)} <a href="https://github.com/seevee/weather_alerts_card#supported-providers" target="_blank" rel="noopener">${u("editor.no_entities_hint_link",t)}</a></ha-alert>`}_renderSourceHint(t){var e,i;const r=(e=this._config)==null?void 0:e.sources;if(!r||r.length===0||!this.hass)return m;const o=new Set(r),n=new Set;let s=0;for(const d of Object.values(this.hass.states)){const c=(i=d.attributes)==null?void 0:i.source;typeof c=="string"&&o.has(c)&&(n.add(c),s++)}const a=r.filter(d=>!n.has(d));if(a.length>0){const d=Li(),c=a.map(p=>{const h=d.find(f=>f.source===p);return h?u(`editor.provider_${h.provider}`,t):p});return g`<ha-alert alert-type="warning"
        >${u("editor.feeds_missing_warning",t,{feeds:c.join(", ")})}</ha-alert
      >`}return g`<ha-alert alert-type="info">${u("editor.source_hint",t,{count:s})}</ha-alert>`}_entityChanged(t){const e=t.detail.value,i=Array.isArray(e)?e:e?[e]:[],r={...this._config};if(r.entity=i[0]||"",i.length>1?r.entities=i.slice(1):delete r.entities,r.hideNoAlerts){const o=this._syncMultiEntityVisibility(r);o?r.visibility=o:delete r.visibility}this._fireConfigChanged(r)}_deviceChanged(t){const e=t.detail.value,i=Array.isArray(e)?e:e?[e]:[],r=[];for(const s of i)typeof s=="string"&&s&&!r.includes(s)&&r.push(s);const o=ie(this._config);if(r.length===o.length&&r.every((s,a)=>s===o[a]))return;const n={...this._config};r.length>0?n.device=r[0]:delete n.device,r.length>1?n.devices=r.slice(1):delete n.devices,this._fireConfigChanged(n)}_titleChanged(t){const e=t.target.value;if(e===(this._config.title||""))return;const i={...this._config};e?i.title=e:delete i.title,this._fireConfigChanged(i)}_feedsChanged(t){const e=t.detail.value,i=Array.isArray(e)?e:e?[e]:[],r={...this._config};i.length>0?r.sources=i:delete r.sources,this._fireConfigChanged(r)}_myLocationEntityChanged(t){var e,i;const r=(e=t.detail)==null?void 0:e.value,o=typeof r=="string"?r.trim():"";if(o===((i=this._config.myLocationEntity)!=null?i:""))return;const n={...this._config};o?n.myLocationEntity=o:delete n.myLocationEntity,this._fireConfigChanged(n)}_showsMyLocationEntityControl(){var t;return this._showsRadiusControl()||((t=this._config)==null?void 0:t.showGeometry)===!0}_currentScopeHash(){return ko(this._config)}_getDismissedCount(){const t=this._currentScopeHash();return t?Oi(t).size:0}_hideNoAlertsChanged(t){this._setHideNoAlerts(t.target.checked)}_setHideNoAlerts(t){if(t===(this._config.hideNoAlerts===!0))return;const e={...this._config};t?e.hideNoAlerts=!0:delete e.hideNoAlerts;const i=this._syncMultiEntityVisibility(e);i?e.visibility=i:delete e.visibility,this._fireConfigChanged(e)}_buildEntityCondition(t){return t.startsWith("binary_sensor.")?{condition:"state",entity:t,state:"on"}:{condition:"state",entity:t,state_not:"0"}}_isManagedCondition(t,e){if(t.condition==="state"&&typeof t.entity=="string"&&e.has(t.entity)&&("state_not"in t||"state"in t))return!0;if(t.condition==="or"&&Array.isArray(t.conditions)){const i=t.conditions;return i.length>0&&i.every(r=>r.condition==="state"&&typeof r.entity=="string"&&("state_not"in r&&r.state_not==="0"||"state"in r&&r.state==="on"))}return!1}_syncMultiEntityVisibility(t){const e=new Set;t.entity&&e.add(t.entity),t.entities&&t.entities.forEach(r=>e.add(r));const i=(t.visibility||[]).filter(r=>!this._isManagedCondition(r,e));if(t.hideNoAlerts&&e.size>0){const r=[...e].map(o=>this._buildEntityCondition(o));r.length===1?i.push(r[0]):i.push({condition:"or",conditions:r})}return i.length>0?i:void 0}_zonesChanged(t){const e=t.target.value,i={...this._config};e.trim()?i.zones=e.split(",").map(r=>r.trim()).filter(Boolean):delete i.zones,this._fireConfigChanged(i)}_eventCodesChanged(t){const e=t.target.value,i={...this._config};e.trim()?i.eventCodes=e.split(",").map(r=>r.trim().toUpperCase()).filter(Boolean):delete i.eventCodes,this._fireConfigChanged(i)}_excludeEventCodesChanged(t){const e=t.target.value,i={...this._config};e.trim()?i.excludeEventCodes=e.split(",").map(r=>r.trim().toUpperCase()).filter(Boolean):delete i.excludeEventCodes,this._fireConfigChanged(i)}_tapActionChanged(t){var e,i,r;const o=this._selectValue(t);if(o===((i=(e=this._config.tap_action)==null?void 0:e.action)!=null?i:"default"))return;const n={...this._config};if(o==="default")delete n.tap_action;else{const s={...(r=n.tap_action)!=null?r:{},action:o};o!=="navigate"&&delete s.navigation_path,o!=="url"&&delete s.url_path,n.tap_action=s}this._fireConfigChanged(n)}_tapNavigationPathChanged(t){this._tapSubFieldChanged("navigation_path",t.target.value)}_tapUrlPathChanged(t){this._tapSubFieldChanged("url_path",t.target.value)}_tapSubFieldChanged(t,e){const i=this._config.tap_action;if(!i||e===(i[t]||""))return;const r={...i};e?r[t]=e:delete r[t],this._fireConfigChanged({...this._config,tap_action:r})}_progressStyleChanged(t,e){this._setProgressStyle(t,this._selectValue(e))}_setProgressStyle(t,e){var i,r,o;const n=(r=(i=this._config.progressStyle)==null?void 0:i[t])!=null?r:Ve[t];if(e===n)return;const s={...this._config},a={...(o=s.progressStyle)!=null?o:{}};e===Ve[t]?delete a[t]:a[t]=e,Object.keys(a).length===0?delete s.progressStyle:s.progressStyle=a,this._fireConfigChanged(s)}_iconBorderStyleChanged(t,e){this._setIconBorderStyle(t,this._selectValue(e))}_setIconBorderStyle(t,e){var i,r,o;const n=(r=(i=this._config.iconBorderStyle)==null?void 0:i[t])!=null?r:Ze[t];if(e===n)return;const s={...this._config},a={...(o=s.iconBorderStyle)!=null?o:{}};e===Ze[t]?delete a[t]:a[t]=e,Object.keys(a).length===0?delete s.iconBorderStyle:s.iconBorderStyle=a,this._fireConfigChanged(s)}_lengthUnit(){var t,e,i;return ho((i=(e=(t=this.hass)==null?void 0:t.config)==null?void 0:e.unit_system)==null?void 0:i.length)}_showsRadiusControl(){var t,e,i,r,o,n,s;if(((t=this._config)==null?void 0:t.maxDistanceKm)!==void 0)return!0;const a=Ma();if((e=this._config)!=null&&e.provider&&a.has(this._config.provider))return!0;const d=new Set((r=(i=this._config)==null?void 0:i.sources)!=null?r:[]);if(Li().some(c=>d.has(c.source)&&a.has(c.provider)))return!0;for(const c of this._getSelectedEntities()){const p=(o=this.hass)==null?void 0:o.states[c];if(p&&a.has(Rt((n=this._config)==null?void 0:n.provider,(s=p.attributes)!=null?s:{}).provider))return!0}return!1}_maxDistanceChanged(t){const e=t.target.value,i={...this._config};if(e.trim()===""){if(this._config.maxDistanceKm===void 0)return;delete i.maxDistanceKm,this._fireConfigChanged(i);return}const r=Number(e);if(!Number.isFinite(r)||r<=0)return;const o=Es(r,this._lengthUnit());o!==this._config.maxDistanceKm&&(i.maxDistanceKm=o,this._fireConfigChanged(i))}_previewChanged(t){const e=t.target;this._showPreview=e.checked;const i={...this._config};this._showPreview?i._preview=!0:delete i._preview,this._fireConfigChanged(i)}get _legacyMenu(){return!this._useWebAwesome}_writeKey(t,e){const i=Ki(this._config,t,e);i!==this._config&&this._fireConfigChanged(i)}_field(t,e,i){return g`
      <div class="field ${t?"changed":""}">
        ${e}
        ${t&&i?this._resetLink(i):m}
      </div>
    `}_resetLink(t){const e=i=>{i.preventDefault(),t()};return g`
      <a
        class="reset-link"
        role="button"
        tabindex="0"
        @click=${e}
        @keydown=${i=>{(i.key==="Enter"||i.key===" ")&&e(i)}}
      >${u("editor.reset_default",this._lang)}</a>
    `}_resetKeys(t){let e=this._config;for(const i of t)i in Ae?e=Ki(e,i,Ae[i].default):e[i]!==void 0&&(e={...e},delete e[i]);e!==this._config&&this._fireConfigChanged(e)}_renderAlsoSet(t,e){const i=Yi(this._config,t);if(i.length===0)return m;const r=i.map(o=>this._keyLabel(o,e)).join(" \xB7 ");return g`
      <div class="also-set">
        ${u("editor.also_set",e,{names:r})}
        ${this._resetLink(()=>this._resetKeys(i))}
      </div>
    `}_optionLabel(t,e,i){const r=u(t,i);return e&&!t.endsWith("_default")?u("editor.option_default",i,{label:r}):r}_renderToggle(t){const e=jt[t];return this._field(Vi(this._config,t),g`
      <ha-formfield .label=${u(e.label,this._lang)}>
        <ha-switch
          .checked=${Oo(this._config,e)}
          @change=${i=>this._writeKey(t,i.target.checked?e.on:e.off)}
        ></ha-switch>
      </ha-formfield>
    `,()=>this._resetKeys([t]))}_renderSelect(t){const e=Ro[t],i=this._lang;return this._field(Vi(this._config,t),g`
      <ha-select
        .label=${u(e.label,i)}
        .value=${Gt(this._config,t)}
        @selected=${r=>this._writeKey(t,this._selectValue(r))}
        ?fixedMenuPosition=${this._legacyMenu}
        ?naturalMenuWidth=${this._legacyMenu}
      >
        ${e.options.map(r=>this._renderSelectItem(r.value,this._optionLabel(r.label,r.value===e.default,i)))}
      </ha-select>
    `,()=>this._resetKeys([t]))}_keyLabel(t,e){const i=t in Ae?Ae[t].label:dl[t];return cl(i?u(i,e,{unit:""}):String(t))}_changedSummary(t,e){const i=Yi(this._config,t);if(i.length===0)return"";const r=i.slice(0,3).map(n=>this._keyLabel(n,e)),o=i.length-r.length;return o>0?`${r.join(" \xB7 ")} ${u("editor.panel_more",e,{count:o})}`:r.join(" \xB7 ")}_renderPanel(t,e,i,r){return g`
      <ha-expansion-panel
        outlined
        .expanded=${e}
        .header=${u(sl[t],i)}
        .secondary=${t==="source"?"":this._changedSummary(Gi[t],i)}
      >
        <div class="content">${r}</div>
      </ha-expansion-panel>
    `}render(){if(!this.hass||!this._config)return g``;const t=this._lang;return g`
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
    `}_renderPreviewTools(t){return g`
      <div class="preview-tools">
        <ha-formfield .label=${u("editor.show_preview",t)}>
          <ha-switch
            .checked=${this._showPreview}
            @change=${this._previewChanged}
          ></ha-switch>
        </ha-formfield>
        ${this._hasNoRealAlerts()&&!this._showPreview?g`<div class="preview-nudge">${u("editor.preview_nudge",t)}</div>`:g`<div class="preview-hint">${u("editor.preview_hint",t)}</div>`}
      </div>
    `}_renderSourceSection(t){var e,i,r,o;const n=new Set;for(const d of Object.values(this.hass.states)){const c=(e=d.attributes)==null?void 0:e.source;typeof c=="string"&&n.add(c)}const s=new Set((i=this._config.sources)!=null?i:[]),a=Li().filter(d=>n.has(d.source)||s.has(d.source)).map(d=>({value:d.source,label:u(`editor.provider_${d.provider}`,t)}));return g`
      <ha-selector
        .hass=${this.hass}
        .selector=${{entity:{multiple:!0,include_entities:this._getMatchingEntityIds()}}}
        .value=${this._getSelectedEntities()}
        .label=${u("editor.entities",t)}
        .required=${!ie(this._config).length&&!((o=(r=this._config)==null?void 0:r.sources)!=null&&o.length)}
        @value-changed=${this._entityChanged}
      ></ha-selector>
      ${this._renderEntityWarning(t)}
      ${this._renderNoEntitiesHint(t)}

      <ha-selector
        .hass=${this.hass}
        .selector=${{device:{multiple:!0,filter:[{integration:"cap_alerts"},{integration:"nina"}]}}}
        .value=${ie(this._config)}
        .label=${u("editor.devices",t)}
        .helper=${u("editor.devices_helper",t)}
        .helperPersistent=${!0}
        @value-changed=${this._deviceChanged}
      ></ha-selector>

      ${a.length>0?g`
            <ha-selector
              .hass=${this.hass}
              .selector=${{select:{multiple:!0,mode:"list",options:a}}}
              .value=${this._config.sources||[]}
              .label=${u("editor.feeds",t)}
              .helper=${u("editor.feeds_helper",t)}
              .helperPersistent=${!0}
              @value-changed=${this._feedsChanged}
            ></ha-selector>
            ${this._renderSourceHint(t)}
          `:m}

      ${this._renderTextField({label:u("editor.title",t),value:this._config.title||"",onChange:this._titleChanged})}
    `}_renderFilteringSection(t){const e=this._lengthUnit(),i=this._config.zones?this._config.zones.join(", "):"",r=this._config.eventCodes?this._config.eventCodes.join(", "):"",o=this._config.excludeEventCodes?this._config.excludeEventCodes.join(", "):"";return g`
      ${this._renderTextField({label:u("editor.zones",t),changed:this._config.zones!==void 0,onReset:()=>this._resetKeys(["zones"]),value:i,helper:u("editor.zones_helper",t),onChange:this._zonesChanged})}
      ${this._renderTextField({label:u("editor.event_codes",t),changed:this._config.eventCodes!==void 0,onReset:()=>this._resetKeys(["eventCodes"]),value:r,helper:u("editor.event_codes_helper",t),onChange:this._eventCodesChanged})}
      ${this._renderTextField({label:u("editor.exclude_event_codes",t),changed:this._config.excludeEventCodes!==void 0,onReset:()=>this._resetKeys(["excludeEventCodes"]),value:o,helper:u("editor.exclude_event_codes_helper",t),onChange:this._excludeEventCodesChanged})}

      ${this._renderSelect("minSeverity")}

      ${this._showsRadiusControl()?this._renderTextField({type:"number",min:"1",step:"1",label:u("editor.max_distance",t,{unit:e}),changed:this._config.maxDistanceKm!==void 0,onReset:()=>this._resetKeys(["maxDistanceKm"]),value:this._config.maxDistanceKm!==void 0?String(uo(this._config.maxDistanceKm,e)):"",helper:u("editor.max_distance_helper",t),onChange:this._maxDistanceChanged}):m}

      ${this._showsMyLocationEntityControl()?this._field(this._config.myLocationEntity!==void 0,g`
        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:["device_tracker","person","zone"]}}}
          .value=${this._config.myLocationEntity||""}
          .label=${u("editor.my_location_entity",t)}
          .required=${!1}
          .helper=${u("editor.my_location_entity_helper",t)}
          .helperPersistent=${!0}
          @value-changed=${this._myLocationEntityChanged}
        ></ha-selector>
      `,()=>this._resetKeys(["myLocationEntity"])):m}
    `}_renderAppearanceSection(t){return g`
      ${this._renderToggle("layout")}
      ${this._renderSelect("colorTheme")}
      ${this._renderSelect("fontSize")}
      ${this._renderToggle("showProvider")}
      ${this._renderToggle("animations")}
      ${this._renderStylingGroup(t)}
    `}_renderStylingGroup(t){const e=this._legacyMenu;return g`
      <ha-expansion-panel
        .expanded=${!1}
        .header=${u("editor.styling_section",t)}
        .secondary=${this._changedSummary(al,t)}
      >
        <div class="content">
          ${this._renderSelect("progressFill")}

          <div class="sub-label">${u("editor.progress_style",t)}</div>
          ${this._config.progressFill==="background"?g`<div class="preview-hint">${u("editor.progress_style_wash_note",t)}</div>`:m}
          <div class="phase-row">
            ${["preparation","active","ongoing"].map(i=>{var r,o;return this._field(((r=this._config.progressStyle)==null?void 0:r[i])!==void 0,g`
              <ha-select
                .label=${u("editor.progress_style_"+i,t)}
                .value=${((o=this._config.progressStyle)==null?void 0:o[i])||Ve[i]}
                @selected=${n=>this._progressStyleChanged(i,n)}
                ?fixedMenuPosition=${e}
                ?naturalMenuWidth=${e}
              >
                ${["solid","striped","shimmer","pulse"].map(n=>this._renderSelectItem(n,this._optionLabel("editor.deco_"+n,n===Ve[i],t)))}
              </ha-select>
            `,()=>this._setProgressStyle(i,Ve[i]))})}
          </div>

          <div class="sub-label">${u("editor.icon_border_style",t)}</div>
          <div class="phase-row">
            ${["preparation","active","ongoing"].map(i=>{var r,o;return this._field(((r=this._config.iconBorderStyle)==null?void 0:r[i])!==void 0,g`
              <ha-select
                .label=${u("editor.progress_style_"+i,t)}
                .value=${((o=this._config.iconBorderStyle)==null?void 0:o[i])||Ze[i]}
                @selected=${n=>this._iconBorderStyleChanged(i,n)}
                ?fixedMenuPosition=${e}
                ?naturalMenuWidth=${e}
              >
                ${["dashed","solid"].map(n=>this._renderSelectItem(n,this._optionLabel("editor.icon_border_"+n,n===Ze[i],t)))}
              </ha-select>
            `,()=>this._setIconBorderStyle(i,Ze[i]))})}
          </div>
        </div>
      </ha-expansion-panel>
    `}_renderDetailsSection(t){if(this._config.showDetails===!1)return g`
        ${this._renderToggle("showDetails")}
        ${this._renderAlsoSet(Gi.details.filter(i=>i!=="showDetails"),t)}
      `;const e=qi.map(i=>({value:i,label:u(jt[i].label,t)+(Vi(this._config,i)?" \u2022":"")}));return g`
      ${this._renderToggle("showDetails")}
      ${this._renderToggle("expandDetails")}

      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{multiple:!0,mode:"list",options:e}}}
        .value=${qi.filter(i=>Oo(this._config,jt[i]))}
        .label=${u("editor.detail_sections",t)}
        @value-changed=${this._detailSectionsChanged}
      ></ha-selector>

      ${this._config.showGeometry===!0?g`
        ${this._renderSelect("geometryStyle")}
        ${this._renderToggle("showMyLocation")}
      `:this._renderAlsoSet(["geometryStyle","showMyLocation"],t)}
    `}_detailSectionsChanged(t){var e;const i=(e=t.detail)==null?void 0:e.value,r=new Set(Array.isArray(i)?i:[]);let o=this._config;for(const n of qi)o=Ki(o,n,r.has(n));o!==this._config&&this._fireConfigChanged(o)}_renderBehaviorSection(t){return g`
      ${this._renderTapAction(t)}

      ${this._renderSelect("sortOrder")}
      ${this._renderToggle("hideExpired")}

      ${this._field(this._config.hideNoAlerts!==void 0,g`
        <ha-formfield .label=${u("editor.hide_no_alerts",t)}>
          <ha-switch
            .checked=${this._config.hideNoAlerts===!0}
            @change=${this._hideNoAlertsChanged}
          ></ha-switch>
        </ha-formfield>
      `,()=>this._setHideNoAlerts(!1))}

      ${this._renderSelect("unavailableBehavior")}
      ${this._config.unavailableBehavior==="hide"?g`<ha-alert alert-type="warning">${u("editor.unavailable_hide_warning",t)}</ha-alert>`:""}
    `}_renderTapAction(t){var e,i,r;const o=this._legacyMenu,n=(e=this._config.tap_action)==null?void 0:e.action;return this._field(this._config.tap_action!==void 0,g`
      <ha-select
        .label=${u("editor.tap_action",t)}
        .value=${n!=null?n:"default"}
        @selected=${this._tapActionChanged}
        ?fixedMenuPosition=${o}
        ?naturalMenuWidth=${o}
      >
        ${this._renderSelectItem("default",u("editor.tap_default",t))}
        ${this._renderSelectItem("details",u("editor.tap_details",t))}
        ${this._renderSelectItem("more-info",u("editor.tap_more_info",t))}
        ${this._renderSelectItem("navigate",u("editor.tap_navigate",t))}
        ${this._renderSelectItem("url",u("editor.tap_url",t))}
        ${this._renderSelectItem("toggle",u("editor.tap_toggle",t))}
        ${this._renderSelectItem("perform-action",u("editor.tap_perform_action",t))}
        ${this._renderSelectItem("fire-dom-event",u("editor.tap_fire_dom_event",t))}
        ${n==="call-service"?this._renderSelectItem("call-service",u("editor.tap_call_service",t)):""}
        ${this._renderSelectItem("none",u("editor.tap_none",t))}
      </ha-select>
      <div class="helper-text">${u("editor.tap_action_helper",t)}</div>
      ${n==="navigate"?this._renderTextField({label:u("editor.tap_navigation_path",t),value:((i=this._config.tap_action)==null?void 0:i.navigation_path)||"",onChange:this._tapNavigationPathChanged}):""}
      ${n==="url"?this._renderTextField({label:u("editor.tap_url_path",t),value:((r=this._config.tap_action)==null?void 0:r.url_path)||"",onChange:this._tapUrlPathChanged}):""}
      ${n==="perform-action"||n==="call-service"||n==="fire-dom-event"?g`<ha-alert alert-type="info">${u("editor.tap_yaml_managed",t)}</ha-alert>`:""}
      ${n==="details"&&this._config.expandDetails!==!0?g`<ha-alert alert-type="info">${u("editor.tap_details_expand_hint",t)}</ha-alert>`:""}
    `,()=>this._resetKeys(["tap_action"]))}_renderDismissalSection(t){const e=this._config.allowDismiss===!0;return g`
      ${this._renderToggle("allowDismiss")}

      ${e?g`
        ${this._renderSelect("dismissTrigger")}
        ${this._config.dismissTrigger!=="swipe"?this._renderSelect("dismissButtonStyle"):this._renderAlsoSet(["dismissButtonStyle"],t)}
        ${this._renderToggle("showDismissUndo")}
      `:this._renderAlsoSet(Gi.dismissal.filter(i=>i!=="allowDismiss"),t)}

      ${this._renderDismissedStatus(t)}
    `}_renderAdvancedSection(t){return g`
      ${this._renderSelect("provider")}
      ${this._renderSelect("timezone")}
      ${this._renderSelect("enhanceContrast")}
      ${this._renderToggle("reformatText")}
      ${this._renderToggle("deduplicate")}
      ${this._renderToggle("deduplicateHeadlines")}
    `}_renderDismissedStatus(t){if(this._config.allowDismiss!==!0)return m;const e=this._getDismissedCount();return e===0?m:g`
      <div class="dismissed-status">
        ${u(e===1?"editor.dismissed_count_singular":"editor.dismissed_count",t,{count:e})}
        <a class="restore-link" @click=${this._onRestoreAll} tabindex="0" role="button">
          ${u("editor.restore_all",t)}
        </a>
      </div>
    `}};it.styles=Er`
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
  `,V([bi({attribute:!1})],it.prototype,"hass",void 0),V([he()],it.prototype,"_config",void 0),V([he()],it.prototype,"_showPreview",void 0),it=Se=V([Rr("weather-alerts-card-editor")],it);var xt;const Uo=6e4,Wo=10,ul="3.4.0";console.info(`%c  WEATHER-ALERTS-CARD  %c  Version ${ul}  `,"color: white; background: #555; font-weight: bold;","color: white; background: #007acc; font-weight: bold;");const hl={nws:"NWS",bom:"BoM",meteoalarm:"MeteoAlarm",dwd:"DWD",meteoswiss:"MeteoSwiss",eccc:"Environment Canada",pirateweather:"Pirate Weather",cap:"CAP",nsw_rfs:"NSW RFS",nina:"NINA"},pl={nws:"NWS",bom:"BoM",meteoalarm:"MA",dwd:"DWD",meteoswiss:"MS",eccc:"EC",pirateweather:"PW",cap:"CAP",nsw_rfs:"RFS",nina:"NINA"},_l=new Set(["button","scene","script","input_button"]);function gl(){const t=Date.now()/1e3,e=3600;return[{id:"preview-1",event:"Gentle Wind Watch",severity:"minor",severityLabel:"Minor",certainty:"Possible",urgency:"Future",sentTs:t-1*e,onsetTs:t+1*e,endsTs:t+6*e,description:"A gentle breeze may arrive later. This is sample data showing an upcoming alert.",instruction:"",url:"",headline:"Gentle Wind Watch for Sampletown County",areaDesc:"Sampletown County",zones:["SAMPLE02"],eventCode:"WIA",provider:"nws",phase:"",severityInferred:!0,certaintyInferred:!1},{id:"preview-2",event:"Sunshine Heat Advisory",severity:"moderate",severityLabel:"Moderate",certainty:"Likely",urgency:"Expected",sentTs:t-2*e,onsetTs:t-1*e,endsTs:t+2*e,description:"This is a sample alert demonstrating the card layout. No action required.",instruction:"Enjoy the weather! This is placeholder data for the card preview.",url:"",headline:"Sunshine Heat Advisory for Pleasantville",areaDesc:"Pleasantville, USA",zones:["SAMPLE01"],eventCode:"HTA",provider:"nws",phase:"Update",severityInferred:!1,certaintyInferred:!1},{id:"preview-3",event:"Frost Advisory",severity:"minor",severityLabel:"Minor",certainty:"Likely",urgency:"Expected",sentTs:t-8*e,onsetTs:t-6*e,endsTs:t-2*e,description:"A light frost occurred overnight. This is sample data showing an expired alert.",instruction:"",url:"",headline:"Frost Advisory expired for Pleasantville",areaDesc:"Pleasantville, USA",zones:["SAMPLE01"],eventCode:"FRA",provider:"nws",phase:"",severityInferred:!1,certaintyInferred:!0}]}let X=xt=class extends Ye{constructor(){super(...arguments),this._expandedAlerts=new Map,this._forcePreview=!1,this._detailPopupAlertId=null,this._dismissals=new Map,this._dismissalsScope="",this._swipeState=null,this._swipeStartX=0,this._swipeStartY=0,this._swipeCurrentDx=0,this._swipeRAF=null,this._swipePointerId=null,this._swipeExitTimeout=null,this._swipeJustDragged=!1,this._swipeExiting=null,this._registryEntries=null,this._geometryCache=new Map,this._geometryMisses=new Map,this._geometryInFlight=new Set,this._mapTilesToken=null,this._mapTilesInFlight=!1,this._mapTilesTimer=null,this._onMapTilesReady=()=>this._refreshMapTilesToken(),this._motionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this._onMotionChange=()=>this.requestUpdate(),this._pendingDismissals=null,this._dismissalReconcileScheduled=!1}connectedCallback(){super.connectedCallback(),this._motionQuery.addEventListener("change",this._onMotionChange),this._config&&(this._dismissalsScope="",this._reloadDismissalsIfScopeChanged()),this._maybeSubscribeRegistry(),this._maybeAcquireMapTilesToken()}disconnectedCallback(){var t;super.disconnectedCallback(),this._motionQuery.removeEventListener("change",this._onMotionChange),(t=this._unsubscribeDismissals)==null||t.call(this),this._unsubscribeDismissals=void 0,this._teardownRegistrySubscription(),this._teardownMapTilesToken(),this._geometryInFlight.clear(),this._swipeRAF!==null&&(cancelAnimationFrame(this._swipeRAF),this._swipeRAF=null),this._swipeExitTimeout!==null&&(clearTimeout(this._swipeExitTimeout),this._swipeExitTimeout=null),this._swipeState=null,this._swipeExiting=null,this._hasStateKeySources()&&xt._editorExpandedState.set(this._entityStateKey(),this._expandedAlerts)}updated(t){super.updated(t),(t.has("hass")||t.has("_config"))&&this.isConnected&&(this._maybeSubscribeRegistry(),this._maybeFetchGeometry(),this._maybeAcquireMapTilesToken());const e=this._detailPopupEl;this._detailPopupAlertId&&!e?this._closeDetailPopup():e&&!e.open&&(typeof e.showModal=="function"?e.showModal():e.setAttribute("open",""))}_maybeSubscribeRegistry(){var t,e;if(ie(this._config).length===0){this._teardownRegistrySubscription();return}const i=(t=this.hass)==null?void 0:t.connection;!i||i===this._subscribedRegistryConn||((e=this._unsubscribeRegistry)==null||e.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=i,zi(i,r=>{this._registryEntries=r,this.requestUpdate()}).then(r=>{if(this._subscribedRegistryConn!==i){r();return}this._unsubscribeRegistry=r}).catch(()=>{this._subscribedRegistryConn===i&&(this._subscribedRegistryConn=void 0)}))}_teardownRegistrySubscription(){var t;(t=this._unsubscribeRegistry)==null||t.call(this),this._unsubscribeRegistry=void 0,this._subscribedRegistryConn=void 0}_maybeFetchGeometry(){var t,e;if(((t=this._config)==null?void 0:t.showGeometry)!==!0)return;const i=(e=this.hass)==null?void 0:e.connection;if(!i)return;i!==this._geometryConn&&(this._geometryCache=new Map,this._geometryMisses.clear(),this._geometryInFlight.clear(),this._geometryConn=i);const r=new Set;for(const n of this._getAlerts(!1))n.geometryRef&&r.add(n.geometryRef);for(const n of[...this._geometryCache.keys()])r.has(n)||this._geometryCache.delete(n);for(const n of[...this._geometryInFlight])r.has(n)||this._geometryInFlight.delete(n);for(const n of[...this._geometryMisses.keys()])r.has(n)||this._geometryMisses.delete(n);const o=Date.now();for(const n of r){if(this._geometryCache.has(n)||this._geometryInFlight.has(n))continue;const s=this._geometryMisses.get(n);s&&(s.attempts>=Wo||o-s.at<Uo)||(this._geometryInFlight.add(n),Wa(i,n).then(a=>{var d;if(i===this._geometryConn){if(this._geometryInFlight.delete(n),a===null){const c=this._geometryMisses.get(n);this._geometryMisses.set(n,{at:Date.now(),attempts:((d=c==null?void 0:c.attempts)!=null?d:0)+1});return}this._geometryMisses.delete(n),this._geometryCache.set(n,a),this.requestUpdate()}}).catch(()=>{i===this._geometryConn&&this._geometryInFlight.delete(n)}))}}_wantsMapTiles(){var t,e,i;return((t=this._config)==null?void 0:t.showGeometry)===!0&&((e=this._config)==null?void 0:e.geometryStyle)==="map"&&!((i=this._config)!=null&&i.geometryTileUrl)}_maybeAcquireMapTilesToken(){var t;if(!this._wantsMapTiles()){this._teardownMapTilesToken();return}const e=(t=this.hass)==null?void 0:t.connection;!e||e===this._mapTilesConn||(this._teardownMapTilesToken(),this._mapTilesConn=e,typeof e.addEventListener=="function"&&e.addEventListener("ready",this._onMapTilesReady),this._mapTilesTimer=setInterval(this._onMapTilesReady,Ya),this._refreshMapTilesToken())}_refreshMapTilesToken(){const t=this._mapTilesConn;!t||this._mapTilesInFlight||(this._mapTilesInFlight=!0,Za(t).then(e=>{t===this._mapTilesConn&&(this._mapTilesInFlight=!1,e!==null&&e!==this._mapTilesToken&&(this._mapTilesToken=e))}).catch(()=>{t===this._mapTilesConn&&(this._mapTilesInFlight=!1)}))}_teardownMapTilesToken(){const t=this._mapTilesConn;t&&typeof t.removeEventListener=="function"&&t.removeEventListener("ready",this._onMapTilesReady),this._mapTilesTimer!==null&&(clearInterval(this._mapTilesTimer),this._mapTilesTimer=null),this._mapTilesConn=void 0,this._mapTilesInFlight=!1,this._mapTilesToken!==null&&(this._mapTilesToken=null)}setConfig(t){var e,i,r;if(!(t.entity||(e=t.entities)!=null&&e.length)&&!t.device&&!((i=t.devices)!=null&&i.length)&&!((r=t.sources)!=null&&r.length))throw new Error("You need to define an entity, device, or feed");const{_preview:o,...n}=t;!n.entity&&n.entities&&n.entities.length>0&&(n.entity=n.entities[0]),this._config=n,this._forcePreview=!!o;const s=this._entityStateKey(),a=xt._editorExpandedState.get(s);a&&(this._expandedAlerts=a),this._reloadDismissalsIfScopeChanged()}_hasStateKeySources(){var t;return!!((t=this._config)!=null&&t.entity)||ie(this._config).length>0}get _scopeHash(){return ko(this._config)}_configuredScopeTokens(){return Co(this._config)}_reloadDismissalsIfScopeChanged(){const t=this._scopeHash;t!==this._dismissalsScope&&(this._dismissalsScope=t,this._dismissals=t?Oi(t):new Map,this._resubscribeDismissals())}_resubscribeDismissals(){var t;(t=this._unsubscribeDismissals)==null||t.call(this),this._unsubscribeDismissals=void 0,!(!this.isConnected||!this._dismissalsScope)&&(this._unsubscribeDismissals=$o(this._dismissalsScope,()=>{this._dismissals=Oi(this._dismissalsScope)}))}getCardSize(){const t=this._getAlerts(!1),e=this._isCompact?1:3;return Math.max(1,t.length*e)}static getConfigElement(){return document.createElement("weather-alerts-card-editor")}static getStubConfig(t){if(t){const e=Object.keys(t.states).filter(i=>Mi.some(r=>r.test(i))).find(i=>{const r=t.states[i];return r.state!=="0"&&r.state!=="off"&&r.state!=="unknown"&&r.state!=="unavailable"});if(e)return{entity:e}}return{entity:"sensor.nws_alerts_alerts"}}_getAllEntities(){if(!this._config)return[];const t=this._config.entity,e=this._config.entities||[],i=new Set,r=[];for(const o of[t,...e])o&&!i.has(o)&&(i.add(o),r.push(o));if(this.hass)for(const o of ie(this._config))for(const n of Bi(this.hass,o,this._registryEntries))i.has(n)||(i.add(n),r.push(n));if(this._config.sources&&this._config.sources.length>0&&this.hass)for(const o of this._resolveSourceEntities(this._config.sources))i.has(o)||(i.add(o),r.push(o));return r}_resolveSourceEntities(t){var e;if(!this.hass)return[];const i=new Set(t),r=[];for(const[o,n]of Object.entries(this.hass.states)){const s=(e=n.attributes)==null?void 0:e.source;typeof s=="string"&&i.has(s)&&Nt(n.attributes)&&r.push(o)}return r.sort()}_entityStateKey(){return[...this._configuredScopeTokens()].sort().join(",")}_deviceHasAnyEntity(t){return this.hass?La(this.hass,t,this._registryEntries):!1}_getAlerts(t=!0){if(!this.hass||!this._config)return[];const e=[],i=[],r=new Set,o=new Set;for(const s of this._getAllEntities()){const a=this.hass.states[s];if(!a)continue;const d=Rt(this._config.provider,a.attributes);r.has(d.provider)||(r.add(d.provider),i.push(d.provider),d.stableIds&&o.add(d.provider));const c=d.parseAlerts(a.attributes);for(const p of c)p.sourceEntityId=s;e.push(...c)}let n=this._filterAndSort(e,{providerPriority:i,stableIdProviders:o});if(this._config.allowDismiss&&!this._forcePreview&&this._dismissals.size>0){const{visible:s,updatedMap:a}=Ua(n,this._dismissals);t&&a!==this._dismissals&&this._scheduleDismissalReconcile(a),n=s}return n}_scheduleDismissalReconcile(t){this._pendingDismissals=t,!this._dismissalReconcileScheduled&&(this._dismissalReconcileScheduled=!0,queueMicrotask(()=>{this._dismissalReconcileScheduled=!1;const e=this._pendingDismissals;this._pendingDismissals=null,!(!e||!this._dismissalsScope)&&(this._dismissals=e,Ui(this._dismissalsScope,e))}))}_onDismiss(t){var e;if(!this._dismissalsScope)return;const i=Na(this._dismissals,t);this._dismissals=i,Ui(this._dismissalsScope,i),((e=this._config)==null?void 0:e.showDismissUndo)!==!1&&this._fireUndoToast(t)}_onUndo(t){if(!this._dismissalsScope)return;const e=Ra(this._dismissals,t);e!==this._dismissals&&(this._dismissals=e,Ui(this._dismissalsScope,e))}_fireUndoToast(t){const e=this._lang;this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:u("card.dismissed_toast",e,{event:t.event}),duration:4e3,action:{text:u("card.dismissed_toast_undo",e),action:()=>this._onUndo(t.id)}},bubbles:!0,composed:!0}))}_canDismiss(){var t;return!!((t=this._config)!=null&&t.allowDismiss)&&!this._forcePreview}_swipeEnabled(){var t,e;return this._canDismiss()&&(((t=this._config)==null?void 0:t.dismissTrigger)==="swipe"||((e=this._config)==null?void 0:e.dismissTrigger)==="both")}_onSwipePointerDown(t,e){if(!this._swipeEnabled()||this._swipeState||e.button!==0)return;this._swipePointerId=e.pointerId,this._swipeStartX=e.clientX,this._swipeStartY=e.clientY,this._swipeCurrentDx=0;const i=e.currentTarget.getBoundingClientRect();this._swipeState={id:t.id,offset:0,locked:!1,cardWidth:i.width}}_onSwipePointerMove(t,e){if(!this._swipeState||this._swipeState.id!==t.id||e.pointerId!==this._swipePointerId)return;const i=e.clientX-this._swipeStartX,r=e.clientY-this._swipeStartY;if(!this._swipeState.locked){if(Math.abs(r)-Math.abs(i)>12){this._swipeState=null;return}if(i>=0){this._swipeState=null;return}e.currentTarget.setPointerCapture(e.pointerId),this._swipeState={...this._swipeState,locked:!0}}this._swipeCurrentDx=Math.min(0,i),this._swipeRAF===null&&(this._swipeRAF=requestAnimationFrame(()=>{this._swipeRAF=null,!(!this._swipeState||this._swipeState.id!==t.id)&&(this._swipeState={...this._swipeState,offset:this._swipeCurrentDx},this.requestUpdate())}))}_onSwipePointerUp(t,e){if(!this._swipeState||this._swipeState.id!==t.id||e.pointerId!==this._swipePointerId)return;const i=e.currentTarget;i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),this._swipeRAF!==null&&(cancelAnimationFrame(this._swipeRAF),this._swipeRAF=null);const{offset:r,cardWidth:o,locked:n}=this._swipeState;if(this._swipeState=null,this._swipePointerId=null,n&&(this._swipeJustDragged=!0,setTimeout(()=>{this._swipeJustDragged=!1},0)),n&&r<=-(o*.4)){this._swipeExiting=t.id;const s=this._motionQuery.matches?0:200;this._swipeExitTimeout=window.setTimeout(()=>{this._swipeExitTimeout=null,this._swipeExiting=null,this._onDismiss(t)},s)}else this.requestUpdate()}_onSwipePointerCancel(t,e){if(!this._swipeState||this._swipeState.id!==t.id||e.pointerId!==this._swipePointerId)return;const i=e.currentTarget;i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),this._swipeRAF!==null&&(cancelAnimationFrame(this._swipeRAF),this._swipeRAF=null),this._swipeState=null,this._swipePointerId=null,this.requestUpdate()}_swipeCardStyle(t,e){var i;if(this._swipeExiting===t.id)return e;if(((i=this._swipeState)==null?void 0:i.id)===t.id){const{offset:r,cardWidth:o}=this._swipeState,n=Math.max(0,1+r/o).toFixed(2);return`${e} transform: translateX(${r}px); opacity: ${n};`}return e}_swipeCardClass(t){var e;const i=[];return this._swipeEnabled()&&i.push("swipe-enabled"),this._swipeExiting===t.id?i.push("swipe-exit"):((e=this._swipeState)==null?void 0:e.id)===t.id&&this._swipeState.locked&&i.push("swiping"),i.join(" ")}_isLabeledDismissActive(){var t,e;return this._canDismiss()&&((t=this._config)==null?void 0:t.dismissTrigger)!=="swipe"&&((e=this._config)==null?void 0:e.dismissButtonStyle)==="labeled"&&!this._isCompact}_renderDismissButton(t){var e;return this._canDismiss()?((e=this._config)==null?void 0:e.dismissTrigger)==="swipe"?m:this._isLabeledDismissActive()?g`
        <button
          type="button"
          class="dismiss-button labeled"
          aria-label=${u("card.dismiss",this._lang)}
          title=${u("card.dismiss",this._lang)}
          @click=${i=>{i.stopPropagation(),this._onDismiss(t)}}
        >
          <ha-icon icon="mdi:close"></ha-icon>
          <span>${u("card.dismiss",this._lang)}</span>
        </button>
      `:g`
      <button
        type="button"
        class="dismiss-button"
        aria-label=${u("card.dismiss",this._lang)}
        title=${u("card.dismiss",this._lang)}
        @click=${i=>{i.stopPropagation(),this._onDismiss(t)}}
      >
        <ha-icon icon="mdi:close"></ha-icon>
      </button>
    `:m}_filterAndSort(t,e){var i;if(!this._config)return t;let r=t;const o=this._config.maxDistanceKm,n=$i(this.hass,this._config.myLocationEntity);if(typeof o=="number"&&Number.isFinite(o)&&o>0&&n&&(r=r.filter(s=>!s.point||Ci(s.point[0],s.point[1],n[0],n[1])<=o)),this._config.deduplicate!==!1&&(r=$s(r,e==null?void 0:e.providerPriority,e==null?void 0:e.stableIdProviders)),!(e!=null&&e.skipZones)&&this._config.zones&&this._config.zones.length>0){const s=new Set(this._config.zones.map(a=>a.toUpperCase()));r=r.filter(a=>ks(a,s))}if(this._config.eventCodes&&this._config.eventCodes.length>0){const s=new Set(this._config.eventCodes.map(a=>a.toUpperCase()));r=r.filter(a=>a.eventCode&&s.has(a.eventCode.toUpperCase()))}if(this._config.excludeEventCodes&&this._config.excludeEventCodes.length>0){const s=new Set(this._config.excludeEventCodes.map(a=>a.toUpperCase()));r=r.filter(a=>!a.eventCode||!s.has(a.eventCode.toUpperCase()))}if(this._config.minSeverity){const s={extreme:0,severe:1,moderate:2,minor:3,unknown:4},a=(i=s[this._config.minSeverity])!=null?i:4;r=r.filter(d=>{var c;return d.severity==="unknown"||((c=s[d.severity])!=null?c:4)<=a})}if(this._config.hideExpired!==!1){const s=Date.now()/1e3;r=r.filter(a=>a.endsTs===0||a.endsTs>s)}return Cs(r,this._config.sortOrder||"default")}get _locale(){var t,e;if(!this.hass)return{language:navigator.language||"en",time_format:"language",date_format:"language",timeZone:void 0};const i=((t=this._config)==null?void 0:t.timezone)==="browser"?Intl.DateTimeFormat().resolvedOptions().timeZone:(e=this.hass.config)==null?void 0:e.time_zone;return{...this.hass.locale,timeZone:i}}get _lang(){var t,e;return((e=(t=this.hass)==null?void 0:t.locale)==null?void 0:e.language)||"en"}get _animationsEnabled(){var t,e;return((t=this._config)==null?void 0:t.animations)===!0?!0:((e=this._config)==null?void 0:e.animations)===!1?!1:!this._motionQuery.matches}get _isCompact(){var t;return((t=this._config)==null?void 0:t.layout)==="compact"}get _colorTheme(){var t;return((t=this._config)==null?void 0:t.colorTheme)||"severity"}get _fontScale(){var t;switch((t=this._config)==null?void 0:t.fontSize){case"small":return .85;case"large":return 1.2;case"x-large":return 1.4;default:return}}get _scaleStyle(){const t=this._fontScale;return t!==void 0?`--wac-scale: ${t}`:""}_scaledPx(t){const e=this._fontScale;return e!==void 0?Math.round(t*e):t}get _contrastMode(){var t;return gs((t=this._config)==null?void 0:t.enhanceContrast)}_alertColorStyle(t){if(this._colorTheme==="nws"){const{color:e,rgb:i,textColorLight:r,textColorDark:o}=so(t.event,this._contrastMode);return`--color: ${e}; --color-rgb: ${i}; --color-on-light: ${r}; --color-on-dark: ${o};`}if(this._colorTheme==="meteoalarm"){const{color:e,rgb:i,textColorLight:r,textColorDark:o}=ao(t.severity,this._contrastMode);return`--color: ${e}; --color-rgb: ${i}; --color-on-light: ${r}; --color-on-dark: ${o};`}if(this._colorTheme==="eccc"){const{color:e,rgb:i,textColorLight:r,textColorDark:o}=lo(t,this._contrastMode);return`--color: ${e}; --color-rgb: ${i}; --color-on-light: ${r}; --color-on-dark: ${o};`}return""}_alertBoostClasses(t){const e=this._contrastMode;if(e==="off")return"";let i=null;if(this._colorTheme==="nws"?i=so(t.event,e):this._colorTheme==="meteoalarm"?i=ao(t.severity,e):this._colorTheme==="eccc"&&(i=lo(t,e)),!i)return"";const r=[];return i.boostLight&&r.push("boost-light"),i.boostDark&&r.push("boost-dark"),i.progressBoostLight&&r.push("progress-boost-light"),i.progressBoostDark&&r.push("progress-boost-dark"),r.join(" ")}_decoPhase(t){return t.isExpired?null:t.isActive?t.hasEndTime?"active":"ongoing":"preparation"}_alertDecoClasses(t){var e,i,r,o,n,s;const a=this._decoPhase(t);if(!a)return"";const d=(r=(i=(e=this._config)==null?void 0:e.progressStyle)==null?void 0:i[a])!=null?r:Ve[a],c=(s=(n=(o=this._config)==null?void 0:o.iconBorderStyle)==null?void 0:n[a])!=null?s:Ze[a];return`deco-${d} icon-border-${c}`}get _themeMode(){var t,e;const i=(e=(t=this.hass)==null?void 0:t.themes)==null?void 0:e.darkMode;return typeof i=="boolean"?i?"dark":"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}_normalizeText(t){return(t||"").replace(/\n{2,}/g,`

`).trim()}_toggleDetails(t){if(this._swipeJustDragged){this._swipeJustDragged=!1;return}const e=new Map(this._expandedAlerts);e.set(t,!e.get(t)),this._expandedAlerts=e,this._hasStateKeySources()&&xt._editorExpandedState.set(this._entityStateKey(),e)}_onCardAction(t){var e,i,r;if(this._swipeJustDragged){this._swipeJustDragged=!1;return}const o=(e=this._config)==null?void 0:e.tap_action;if(!(!o||o.action==="none")){if(o.action==="details"){this._openDetailPopup(t);return}il(this,this.hass,o,(r=t.sourceEntityId)!=null?r:(i=this._config)==null?void 0:i.entity)}}_openDetailPopup(t){this._detailPopupAlertId=t.id}_closeDetailPopup(){this._detailPopupAlertId=null}_onCardActionKeydown(t,e){e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar"||(e.preventDefault(),this._onCardAction(t))}_sourceLinkLabel(t){const e=hl[t.provider]||"Alert";return u("card.open_source",this._lang,{provider:e})}_isBroken(t){var e;return(t.state==="unavailable"||t.state==="unknown")&&Rt((e=this._config)==null?void 0:e.provider,t.attributes).parseAlerts(t.attributes).length===0}_friendlyName(t){var e,i,r;return((r=(i=(e=this.hass)==null?void 0:e.states[t])==null?void 0:i.attributes)==null?void 0:r.friendly_name)||t}_deviceName(t){var e,i;const r=(i=(e=this.hass)==null?void 0:e.devices)==null?void 0:i[t];return(r==null?void 0:r.name_by_user)||(r==null?void 0:r.name)||null}_brokenSources(){var t,e,i;if(!this.hass)return[];const r=[],o=new Set;for(const n of[(t=this._config)==null?void 0:t.entity,...((e=this._config)==null?void 0:e.entities)||[]]){if(!n||o.has(n))continue;o.add(n);const s=this.hass.states[n];s&&this._isBroken(s)&&r.push({name:this._friendlyName(n)})}for(const n of ie(this._config)){let s=!1,a=!1;for(const d of Fo(this.hass,n,this._registryEntries)){if(_l.has(d.split(".",1)[0]))continue;const c=this.hass.states[d];c&&(Rt((i=this._config)==null?void 0:i.provider,c.attributes).parseAlerts(c.attributes).length>0?s=!0:(c.state==="unavailable"||c.state==="unknown")&&(a=!0))}!s&&a&&r.push({name:this._deviceName(n)})}return r}_degradedLabel(t){return t.length===1?t[0].name?u("card.sources_unavailable_named",this._lang,{name:t[0].name}):u("card.sources_unavailable_one",this._lang):u("card.sources_unavailable_count",this._lang,{count:t.length})}_renderDegradedStrip(t){const e=this._degradedLabel(t);return g`
      <div class="degraded-badge">
        <ha-icon icon="mdi:alert-outline"></ha-icon>
        <span>${e}</span>
      </div>
    `}_renderDegradedDot(t){const e=this._degradedLabel(t);return g`
      <span class="degraded-dot" role="img" title=${e} aria-label=${e}>
        <ha-icon icon="mdi:alert-outline"></ha-icon>
      </span>
    `}render(){if(!this._config)return g``;if(!this.hass)return this._renderPreview();const t=this._getAllEntities().map(f=>this.hass.states[f]).filter(Boolean),e=ie(this._config).some(f=>this._deviceHasAnyEntity(f));if(t.length===0&&!e||this._forcePreview)return this._renderPreview();const i=this._brokenSources(),r=this._config.unavailableBehavior||"message",o=i.length>0&&r!=="hide",n=this._getAlerts(),s=n.length>0;if(!s&&this._config.hideNoAlerts&&!o)return this.style.display="none",g``;this.style.display="";const a=this._animationsEnabled?"":"no-animations",d=this._isCompact?"compact":"",c=this._config.progressFill==="background"?"fill-mode-background":"",p=o&&s&&r==="message",h=o&&s&&r==="compact";return g`
      <ha-card .header=${this._config.title||""} class="${a} ${d} ${c}" data-theme-mode=${this._themeMode} style=${this._scaleStyle}>
        ${h?this._renderDegradedDot(i):m}
        ${p?this._renderDegradedStrip(i):m}
        ${s?n.map(f=>this._renderAlert(f)):this._renderNoAlerts(o?i:[])}
      </ha-card>
      ${this._renderDetailPopup(n)}
    `}_renderDetailPopup(t){if(!this._detailPopupAlertId)return m;const e=t.find(s=>s.id===this._detailPopupAlertId);if(!e)return m;const i=po(e),r=i.isActive&&!i.hasEndTime,o=["alert-card",`severity-${e.severity}`,i.phaseText.toLowerCase(),r?"ongoing":"",this._alertDecoClasses(i),this._alertBoostClasses(e)].filter(Boolean).join(" "),n=`${this._alertColorStyle(e)} --progress: ${r?0:i.progressPct}%;`;return g`
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
            ${this._renderAlertBody(e,i,{expanded:!0,inPopup:!0})}
          </div>
        </div>
      </dialog>
    `}_onDetailPopupClick(t){t.target===t.currentTarget&&this._dismissDetailPopup(t.currentTarget)}_dismissDetailPopup(t){const e=t!=null?t:this._detailPopupEl;e&&typeof e.close=="function"?e.close():this._closeDetailPopup()}_renderDetailPopupClose(){const t=u("card.close",this._lang);return g`
      <button
        type="button"
        class="detail-dialog-close"
        aria-label=${t}
        title=${t}
        @click=${()=>this._dismissDetailPopup()}
      >
        <ha-icon icon="mdi:close"></ha-icon>
      </button>
    `}get _detailPopupEl(){var t,e;return(e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog.detail-dialog"))!=null?e:null}_renderPreview(){var t;const e=this._filterAndSort(gl(),{skipZones:!0}),i=this._animationsEnabled?"":"no-animations",r=this._isCompact?"compact":"",o=((t=this._config)==null?void 0:t.progressFill)==="background"?"fill-mode-background":"";return g`
      <ha-card .header=${this._config.title||""} class="${i} ${r} ${o}" data-theme-mode=${this._themeMode} style=${this._scaleStyle}>
        <div class="preview-label">${u("card.preview",this._lang)}</div>
        ${e.map(n=>this._renderAlert(n))}
      </ha-card>
    `}_renderNoAlerts(t=[]){return g`
      <div class="no-alerts">
        <ha-icon icon="mdi:weather-sunny"></ha-icon><br>
        ${u("card.no_alerts",this._lang)}
        ${t.length>0?g`<div class="no-alerts-caveat">
            <ha-icon icon="mdi:alert-outline"></ha-icon>${this._degradedLabel(t)}
          </div>`:m}
      </div>
    `}_renderAlert(t){const e=`severity-${t.severity}`,i=po(t),r=i.phaseText.toLowerCase(),o=this._expandedAlerts.get(t.id)||!1;return this._isCompact?this._renderCompactAlert(t,e,r,i,o):this._renderFullAlert(t,e,r,i,o)}_renderCompactAlert(t,e,i,r,o){var n;const s=this._lang,a=r.isActive&&!r.hasEndTime,d=r.isExpired?u("progress.compact_expired",s,{time:et(r.endsTs,r.nowTs)}):a?u("progress.compact_ongoing",s):r.isActive?u("progress.compact_active",s,{time:et(r.endsTs,r.nowTs)}):u("progress.compact_prep",s,{time:et(r.onsetTs,r.nowTs)}),c=a?"ongoing":"",p=this._alertBoostClasses(t),h=this._alertDecoClasses(r),f=a?"":`--progress: ${r.progressPct}%;`,w=this._swipeCardClass(t),v=ji(this._config),y=v&&this._config.tap_action.action!=="none",L=this._swipeCardStyle(t,`${this._alertColorStyle(t)} ${f}`);return g`
      <div
        class="alert-card ${e} ${i} ${c} ${h} ${p} ${w} ${y?"tappable":""}"
        style=${L}
        role=${y?"button":m}
        tabindex=${y?"0":m}
        @pointerdown=${S=>this._onSwipePointerDown(t,S)}
        @pointermove=${S=>this._onSwipePointerMove(t,S)}
        @pointerup=${S=>this._onSwipePointerUp(t,S)}
        @pointercancel=${S=>this._onSwipePointerCancel(t,S)}
        @click=${y?()=>this._onCardAction(t):m}
        @keydown=${y?S=>this._onCardActionKeydown(t,S):m}
      >
        <div
          class="alert-header-row compact-row"
          @click=${v?m:()=>this._toggleDetails(t.id)}
        >
          <div class="icon-box">
            <ha-icon icon=${(n=t.providerIcon)!=null?n:ro(t.iconHint||t.event)}></ha-icon>
          </div>
          ${this._renderProviderHint(t)}
          <span class="alert-title">${t.event}</span>
          <span class="compact-time">${d}</span>
          ${v?m:g`
          <ha-icon
            icon="mdi:chevron-down"
            class="compact-chevron ${o?"expanded":""}"
          ></ha-icon>
          `}
          ${this._renderDismissButton(t)}
        </div>
        ${o?this._renderExpandedContent(t,r):m}
      </div>
    `}_renderExpandedContent(t,e){var i,r;return g`
      <div class="alert-expanded">
        ${this._renderHeadline(t)}
        ${t.areaDesc?g`
          <div class="area-desc" title=${t.areaDesc}>
            <ha-icon icon="mdi:map-marker"></ha-icon>
            <span class="area-desc-text">${t.areaDesc}</span>
          </div>
        `:m}
        <div class="badges-row" style="padding: 0 12px 8px;">
          ${this._renderBadgesRow(t,e)}
        </div>

        ${this._renderProgressSection(t,e)}

        ${((i=this._config)==null?void 0:i.showDetails)!==!1?(r=this._config)!=null&&r.expandDetails?g`
        ${this._renderDetailsContent(t,e)}
        `:g`
        <div class="alert-details-section">
          <div
            class="details-summary"
            @click=${()=>this._toggleDetails(t.id+"_details")}
          >
            <span>${u("card.read_details",this._lang)}</span>
            <ha-icon
              icon="mdi:chevron-down"
              class="chevron ${this._expandedAlerts.get(t.id+"_details")?"expanded":""}"
            ></ha-icon>
          </div>
          ${this._expandedAlerts.get(t.id+"_details")?this._renderDetailsContent(t,e):m}
        </div>
        `:m}
      </div>
    `}_renderFullAlert(t,e,i,r,o){const n=this._alertBoostClasses(t),s=this._alertDecoClasses(r),a=this._swipeCardClass(t),d=ji(this._config)&&this._config.tap_action.action!=="none",c=r.isActive&&!r.hasEndTime?"--progress: 0%;":`--progress: ${r.progressPct}%;`,p=this._swipeCardStyle(t,`${this._alertColorStyle(t)} ${c}`);return g`
      <div
        class="alert-card ${e} ${i} ${s} ${n} ${a} ${d?"tappable":""}"
        style=${p}
        role=${d?"button":m}
        tabindex=${d?"0":m}
        @pointerdown=${h=>this._onSwipePointerDown(t,h)}
        @pointermove=${h=>this._onSwipePointerMove(t,h)}
        @pointerup=${h=>this._onSwipePointerUp(t,h)}
        @pointercancel=${h=>this._onSwipePointerCancel(t,h)}
        @click=${d?()=>this._onCardAction(t):m}
        @keydown=${d?h=>this._onCardActionKeydown(t,h):m}
      >
        ${this._renderAlertBody(t,r,{expanded:o,inPopup:!1})}
      </div>
    `}_renderAlertBody(t,e,i){var r,o,n,s;const a=ji(this._config),d=((r=this._config)==null?void 0:r.showDetails)!==!1;return g`
      <div class="alert-header-row">
        <div class="icon-box">
          <ha-icon icon=${(o=t.providerIcon)!=null?o:ro(t.iconHint||t.event)}></ha-icon>
        </div>
        <div class="info-box">
          <div class="title-row">
            ${this._renderProviderHint(t)}
            <span class="alert-title">${t.event}</span>
          </div>
          ${this._renderHeadline(t)}
          ${t.areaDesc?g`
            <div class="area-desc" title=${t.areaDesc}>
              <ha-icon icon="mdi:map-marker"></ha-icon>
              <span class="area-desc-text">${t.areaDesc}</span>
            </div>
          `:m}
          <div class="badges-row">
            ${this._renderBadgesRow(t,e)}
          </div>
        </div>
        ${i.inPopup?this._renderDetailPopupClose():this._renderDismissButton(t)}
      </div>

      ${this._renderProgressSection(t,e)}

      ${i.inPopup?d?this._renderDetailsContent(t,e):m:a?d&&(n=this._config)!=null&&n.expandDetails?this._renderDetailsContent(t,e):m:d?(s=this._config)!=null&&s.expandDetails?g`
      ${this._renderDetailsContent(t,e)}
      `:g`
      <div class="alert-details-section">
        <div
          class="details-summary"
          @click=${()=>this._toggleDetails(t.id)}
        >
          <span>${u("card.read_details",this._lang)}</span>
          <ha-icon
            icon="mdi:chevron-down"
            class="chevron ${i.expanded?"expanded":""}"
          ></ha-icon>
        </div>
        ${i.expanded?this._renderDetailsContent(t,e):m}
      </div>
      `:m}
    `}_renderProviderHint(t){var e;if(((e=this._config)==null?void 0:e.showProvider)!==!0)return m;const i=pl[t.provider]||t.provider.toUpperCase();return g`<span class="provider-hint">${i}</span>`}_renderHeadline(t){var e;const i=((e=this._config)==null?void 0:e.deduplicateHeadlines)!==!1,r=Ds(t,i);return r?g`
      <div class="alert-headline" title=${t.headline}>
        ${r}
      </div>
    `:m}_renderBadgesRow(t,e){var i;const r=(i=t.severityBadgeLabel)!=null?i:u("badge.severity_"+t.severity,this._lang),o=t.certainty?u("badge.certainty_"+t.certainty.toLowerCase(),this._lang):"";return g`
      <span class="badge severity-badge${t.severityInferred?" badge-inferred":""}">${r}</span>
      ${t.certainty?g`
        <span class="badge certainty-badge${t.certaintyInferred?" badge-inferred":""}">
          <ha-icon
            icon=${hs(t.certainty)}
            style="--mdc-icon-size: ${this._scaledPx(14)}px; width: ${this._scaledPx(14)}px; height: ${this._scaledPx(14)}px;"
          ></ha-icon>
          ${o}
        </span>
      `:m}
      ${t.phase?g`
        <span class="badge phase-badge">${t.phase}</span>
      `:m}
      ${t.eventCode&&t.eventCode.trim().toLowerCase()!==t.event.trim().toLowerCase()?g`
        <span class="badge event-code-badge">${t.eventCode}</span>
      `:m}
      ${t.mergedCount&&t.mergedCount>1?g`<span class="badge zones-badge">${u("card.zones_count",this._lang,{count:t.mergedCount})}</span>`:m}
    `}_renderTextBlock(t,e){return e?g`
      <div class="text-block">
        <div class="text-label">${t}</div>
        <div class="text-body">${Cn(ds(e))}</div>
      </div>
    `:m}_distanceFromHomeKm(t){var e;if(!t.point)return;const i=$i(this.hass,(e=this._config)==null?void 0:e.myLocationEntity);if(i)return Ci(t.point[0],t.point[1],i[0],i[1])}_renderDetailsContent(t,e){var i,r,o,n,s,a,d,c,p;const h=((i=this._config)==null?void 0:i.reformatText)!==!1;let f=this._normalizeText(t.description),w=this._normalizeText(t.instruction);h&&(f=bo(f),w=bo(w));const v=this._lang,y=this._distanceFromHomeKm(t);return g`
      <div class="details-content" @click=${L=>L.stopPropagation()}>
        ${((r=this._config)==null?void 0:r.showMetadata)!==!1?g`
        <div class="meta-grid">
          ${e.sentTs>100?g`
          <div class="meta-item">
            <span class="meta-label">${u("detail.issued",v)}</span>
            <span class="meta-value">${Ti(e.sentTs,this._locale,v)}</span>
          </div>
          `:m}
          <div class="meta-item">
            <span class="meta-label">${u("detail.onset",v)}</span>
            <span class="meta-value">${Ti(e.onsetTs,this._locale,v)}</span>
            <span class="meta-relative">${vo(e.onsetTs,e.nowTs,v)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${e.isExpired?u("progress.expired_label",v):u("detail.expires",v)}</span>
            ${e.hasEndTime?g`<span class="meta-value">${Ti(e.endsTs,this._locale,v)}</span>
            <span class="meta-relative">${vo(e.endsTs,e.nowTs,v)}</span>`:g`<span class="meta-value">${e.isActive?u("progress.ongoing",v):u("progress.tbd",v)}</span>`}
          </div>
          ${y!==void 0?g`
            <div class="meta-item">
              <span class="meta-label">${u("detail.distance",v)}</span>
              <span class="meta-value">${As(y,ho((s=(n=(o=this.hass)==null?void 0:o.config)==null?void 0:n.unit_system)==null?void 0:s.length),v)}</span>
            </div>
          `:m}
          ${t.areaDesc?g`
            <div class="meta-item" style="grid-column: 1 / -1;">
              <span class="meta-label">${u("detail.area",v)}</span>
              <span class="meta-value">${t.areaDesc}</span>
            </div>
          `:m}
        </div>
        `:m}

        ${((a=this._config)==null?void 0:a.showGeometry)===!0?this._renderGeometry(t):m}

        ${((d=this._config)==null?void 0:d.showDescription)!==!1?this._renderTextBlock(u("detail.description",v),f):m}
        ${((c=this._config)==null?void 0:c.showInstructions)!==!1?this._renderTextBlock(u("detail.instructions",v),w):m}

        ${t.url&&((p=this._config)==null?void 0:p.showSourceLink)!==!1?g`
          <div class="footer-link">
            <a href=${t.url} target="_blank" rel="noopener noreferrer">
              ${this._sourceLinkLabel(t)}
              <ha-icon icon="mdi:open-in-new" style="width:${this._scaledPx(14)}px;"></ha-icon>
            </a>
          </div>
        `:m}
      </div>
    `}_geometryPoints(t){var e,i;const r=t.point;let o=((e=this._config)==null?void 0:e.showMyLocation)===!0?$i(this.hass,(i=this._config)==null?void 0:i.myLocationEntity):void 0,n=t.bbox;if(!n&&r){const s=o&&Ci(r[0],r[1],o[0],o[1])<=ja;o&&!s&&(o=void 0),n=Ga(o?[r,o]:[r])}return{bbox:n,point:r,referencePoint:o}}_renderGeometry(t){var e,i,r;if(((e=this._config)==null?void 0:e.showGeometry)!==!0)return m;const{bbox:o,point:n,referencePoint:s}=this._geometryPoints(t);if(!o)return m;const a=t.geometryRef?this._geometryCache.get(t.geometryRef):void 0;if(((i=this._config)==null?void 0:i.geometryStyle)==="map"&&((r=this._config)!=null&&r.geometryTileUrl||this._mapTilesToken!==null))return this._renderGeometryMap(t,o,a,n,s);const{viewBox:d,polygonPaths:c,marker:p,referenceMarker:h}=qa(o,a,n,s);return g`
      <svg
        class="alert-geometry${t.bbox?"":" point"}"
        viewBox=${d}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${this._geometryLabel(t,h!==void 0)}
      >
        <rect class="geometry-frame" x="0" y="0" width="100%" height="100%"></rect>
        ${c.map(f=>Le`<path class="geometry-shape" d=${f}></path>`)}
        ${this._renderGeometryMarkers(p,h,!1)}
      </svg>
    `}_renderGeometryMarkers(t,e,i){return g`
      ${e?Le`
        <path class="geometry-reference-ring" d=${Wt(e)}></path>
        <path class="geometry-reference-core" d=${Wt(e)}></path>
      `:m}
      ${t&&i?Le`<path class="geometry-marker-casing" d=${Wt(t)}></path>`:m}
      ${t?Le`<path class="geometry-marker" d=${Wt(t)}></path>`:m}
    `}_geometryLabel(t,e){const i=t.areaDesc||u("detail.area",this._lang);return e?u("detail.geometry_with_location",this._lang,{area:i}):i}_renderGeometryMap(t,e,i,r,o){var n,s,a,d,c,p,h;const f=(n=this._config)==null?void 0:n.geometryTileUrl,w=f||Va((d=(a=(s=this.hass)==null?void 0:s.auth)==null?void 0:a.data)==null?void 0:d.hassUrl,(c=this._mapTilesToken)!=null?c:""),v=(h=(p=this._config)==null?void 0:p.geometryTileAttribution)!=null?h:f?"\xA9 OpenStreetMap":zo,y=!f&&this._themeMode==="dark",{viewBox:L,aspect:S,tiles:J,polygonPaths:G,marker:D,referenceMarker:q}=tl(e,i,{tileUrl:w,attribution:v,point:r,referencePoint:o}),de=this._geometryLabel(t,q!==void 0);return g`
      <div class="alert-geometry-map" style="aspect-ratio: ${S};">
        <svg
          class="alert-geometry map${t.bbox?"":" point"}${y?" dark":""}"
          viewBox=${L}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label=${de}
        >
          <g class="geometry-tiles">
            ${J.map(Q=>Le`<image
              href=${Q.href}
              x=${Q.x}
              y=${Q.y}
              width=${Q.size}
              height=${Q.size}
            ></image>`)}
          </g>
          <rect class="geometry-frame" x="0" y="0" width="100%" height="100%"></rect>
          ${G.map(Q=>Le`<path class="geometry-shape-casing" d=${Q}></path>`)}
          ${G.map(Q=>Le`<path class="geometry-shape" d=${Q}></path>`)}
          ${this._renderGeometryMarkers(D,q,!0)}
        </svg>
        <span class="geometry-attrib">${v}</span>
      </div>
    `}_renderProgressSection(t,e){const{isActive:i,progressPct:r,hasEndTime:o,onsetTs:n,endsTs:s,nowTs:a}=e,d=this._lang,c=e.isExpired?"left: 0; right: 0;":i&&!o?"width: 100%; left: 0;":`left: ${r}%; right: 0;`;return g`
      <div class="progress-section">
        <div class="progress-labels">
          <div class="label-left">
            <span class="label-sub">${u(i?"progress.start":"progress.now",d)}</span>
            <span>${fo(i?n:a,this._locale,d)}</span>
          </div>
          <div class="label-center">
            ${o?e.isExpired?g`<span class="label-sub">${u("progress.expired_label",d)}</span><span>${et(s,a)}</span>`:i?g`<span class="label-sub">${u("progress.expires_in_label",d)}</span><span>${et(s,a)}</span>`:g`<span class="label-sub">${u("progress.starts_in_label",d)}</span><span>${et(n,a)}</span>`:g`<span class="label-sub">${u("progress.ongoing",d)}</span>`}
          </div>
          <div class="label-right">
            <span class="label-sub">${u("progress.end",d)}</span>
            <span>${o?fo(s,this._locale,d):u("progress.tbd",d)}</span>
          </div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style=${c}></div>
        </div>
      </div>
    `}};X.styles=rl,X._editorExpandedState=new Map,V([bi({attribute:!1})],X.prototype,"hass",void 0),V([he()],X.prototype,"_config",void 0),V([he()],X.prototype,"_expandedAlerts",void 0),V([he()],X.prototype,"_forcePreview",void 0),V([he()],X.prototype,"_detailPopupAlertId",void 0),V([he()],X.prototype,"_dismissals",void 0),V([he()],X.prototype,"_swipeExiting",void 0),V([he()],X.prototype,"_geometryCache",void 0),V([he()],X.prototype,"_mapTilesToken",void 0),X=xt=V([Rr("weather-alerts-card")],X);const Zi=window;Zi.customCards=Zi.customCards||[],Zi.customCards.push({type:"weather-alerts-card",name:"Weather Alerts Card",preview:!0,description:"A card for displaying weather alerts with severity indicators, progress bars, and expandable details. Supports NWS (US), BoM (Australia), and MeteoAlarm (Europe)."});export{Uo as GEOMETRY_MISS_COOLDOWN_MS,Wo as GEOMETRY_MISS_MAX_ATTEMPTS,X as WeatherAlertsCard,Bi as resolveDeviceAlertEntities,zi as subscribeEntityRegistry};
