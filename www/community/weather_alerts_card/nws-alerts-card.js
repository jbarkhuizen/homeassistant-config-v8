function e(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,r=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new n(r,e,i)},s=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:d,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},w=(e,t)=>!d(e,t),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);o?.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(r)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of i){const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i;const n=o.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,r,i=!1,o){if(void 0!==e){const n=this.constructor;if(!1===i&&(o=this[e]),r??=n.getPropertyOptions(e),!((r.hasChanged??w)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==o||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,r,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,_?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=e=>e,C=$.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+T,D=`<${k}>`,z=document,M=()=>z.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,O="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,I=/>/g,U=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),j=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Z=new WeakMap,Y=z.createTreeWalker(z,129);function q(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const V=(e,t)=>{const r=e.length-1,i=[];let o,n=2===t?"<svg>":3===t?"<math>":"",a=L;for(let t=0;t<r;t++){const r=e[t];let s,d,l=-1,c=0;for(;c<r.length&&(a.lastIndex=c,d=a.exec(r),null!==d);)c=a.lastIndex,a===L?"!--"===d[1]?a=R:void 0!==d[1]?a=I:void 0!==d[2]?(F.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=U):void 0!==d[3]&&(a=U):a===U?">"===d[0]?(a=o??L,l=-1):void 0===d[1]?l=-2:(l=a.lastIndex-d[2].length,s=d[1],a=void 0===d[3]?U:'"'===d[3]?H:W):a===H||a===W?a=U:a===R||a===I?a=L:(a=U,o=void 0);const h=a===U&&e[t+1].startsWith("/>")?" ":"";n+=a===L?r+D:l>=0?(i.push(s),r.slice(0,l)+S+r.slice(l)+T+h):r+T+(-2===l?t:h)}return[q(e,n+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class K{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0;const a=e.length-1,s=this.parts,[d,l]=V(e,t);if(this.el=K.createElement(d,r),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Y.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(S)){const t=l[n++],r=i.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:o,name:a[2],strings:r,ctor:"."===a[1]?te:"?"===a[1]?re:"@"===a[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:o}),i.removeAttribute(e));if(F.test(i.tagName)){const e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],M()),Y.nextNode(),s.push({type:2,index:++o});i.append(e[t],M())}}}else if(8===i.nodeType)if(i.data===k)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)s.push({type:7,index:o}),e+=T.length-1}o++}}static createElement(e,t){const r=z.createElement("template");return r.innerHTML=e,r}}function X(e,t,r=e,i){if(t===j)return t;let o=void 0!==i?r._$Co?.[i]:r._$Cl;const n=N(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e),o._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(t=X(e,o._$AS(e,t.values),o,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??z).importNode(t,!0);Y.currentNode=i;let o=Y.nextNode(),n=0,a=0,s=r[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new J(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new oe(o,this,e)),this._$AV.push(t),s=r[++a]}n!==s?.index&&(o=Y.nextNode(),n++)}return Y.currentNode=z,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),N(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==j&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=K.createElement(q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Q(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new K(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new J(this.O(M()),this.O(M()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=G}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(void 0===o)e=X(this,e,t,0),n=!N(e)||e!==this._$AH&&e!==j,n&&(this._$AH=e);else{const i=e;let a,s;for(e=o[0],a=0;a<o.length-1;a++)s=X(this,i[r+a],t,a),s===j&&(s=this._$AH[a]),n||=!N(s)||s!==this._$AH[a],s===G?e=G:e!==G&&(e+=(s??"")+o[a+1]),this._$AH[a]=s}n&&!i&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class re extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ie extends ee{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??G)===j)return;const r=this._$AH,i=e===G&&r!==G||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==G&&(r===G||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ne=$.litHtmlPolyfillSupport;ne?.(K,J),($.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let o=i._$litPart$;if(void 0===o){const e=r?.renderBefore??null;i._$litPart$=o=new J(t.insertBefore(M(),e),e,void 0,r??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};se._$litElement$=!0,se.finalized=!0,ae.litElementHydrateSupport?.({LitElement:se});const de=ae.litElementPolyfillSupport;de?.({LitElement:se}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ce={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},he=(e=ce,t,r)=>{const{kind:i,metadata:o}=r;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),"accessor"===i){const{name:i}=r;return{set(r){const o=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,o,e,!0,r)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=r;return function(r){const o=this[i];t.call(this,r),this.requestUpdate(i,o,e,!0,r)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return(t,r)=>"object"==typeof r?he(e,t,r):((e,t,r)=>{const i=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return pe({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=2;class ge{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fe extends ge{constructor(e){if(super(e),this.it=G,e.type!==me)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===G||null==e)return this._t=void 0,this.it=e;if(e===j)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}fe.directiveName="unsafeHTML",fe.resultType=1;const _e=(e=>(...t)=>({_$litDirective$:e,values:t}))(fe),{entries:ve,setPrototypeOf:ye,isFrozen:we,getPrototypeOf:be,getOwnPropertyDescriptor:xe}=Object;
/*! @license DOMPurify 3.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.3/LICENSE */let{freeze:$e,seal:Ae,create:Ce}=Object,{apply:Ee,construct:Se}="undefined"!=typeof Reflect&&Reflect;$e||($e=function(e){return e}),Ae||(Ae=function(e){return e}),Ee||(Ee=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return e.apply(t,i)}),Se||(Se=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return new e(...r)});const Te=Be(Array.prototype.forEach),ke=Be(Array.prototype.lastIndexOf),De=Be(Array.prototype.pop),ze=Be(Array.prototype.push),Me=Be(Array.prototype.splice),Ne=Be(String.prototype.toLowerCase),Pe=Be(String.prototype.toString),Oe=Be(String.prototype.match),Le=Be(String.prototype.replace),Re=Be(String.prototype.indexOf),Ie=Be(String.prototype.trim),Ue=Be(Object.prototype.hasOwnProperty),We=Be(RegExp.prototype.test),He=(Fe=TypeError,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Se(Fe,t)});var Fe;function Be(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return Ee(e,t,i)}}function je(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ne;ye&&ye(e,null);let i=t.length;for(;i--;){let o=t[i];if("string"==typeof o){const e=r(o);e!==o&&(we(t)||(t[i]=e),o=e)}e[o]=!0}return e}function Ge(e){for(let t=0;t<e.length;t++){Ue(e,t)||(e[t]=null)}return e}function Ze(e){const t=Ce(null);for(const[r,i]of ve(e)){Ue(e,r)&&(Array.isArray(i)?t[r]=Ge(i):i&&"object"==typeof i&&i.constructor===Object?t[r]=Ze(i):t[r]=i)}return t}function Ye(e,t){for(;null!==e;){const r=xe(e,t);if(r){if(r.get)return Be(r.get);if("function"==typeof r.value)return Be(r.value)}e=be(e)}return function(){return null}}const qe=$e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ve=$e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ke=$e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Xe=$e(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Qe=$e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Je=$e(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),et=$e(["#text"]),tt=$e(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),rt=$e(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),it=$e(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ot=$e(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),nt=Ae(/\{\{[\w\W]*|[\w\W]*\}\}/gm),at=Ae(/<%[\w\W]*|[\w\W]*%>/gm),st=Ae(/\$\{[\w\W]*/gm),dt=Ae(/^data-[\-\w.\u00B7-\uFFFF]+$/),lt=Ae(/^aria-[\-\w]+$/),ct=Ae(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ht=Ae(/^(?:\w+script|data):/i),pt=Ae(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ut=Ae(/^html$/i),mt=Ae(/^[a-z][.\w]*(-[.\w]+)+$/i);var gt=Object.freeze({__proto__:null,ARIA_ATTR:lt,ATTR_WHITESPACE:pt,CUSTOM_ELEMENT:mt,DATA_ATTR:dt,DOCTYPE_NAME:ut,ERB_EXPR:at,IS_ALLOWED_URI:ct,IS_SCRIPT_OR_DATA:ht,MUSTACHE_EXPR:nt,TMPLIT_EXPR:st});const ft=1,_t=3,vt=7,yt=8,wt=9,bt=function(){return"undefined"==typeof window?null:window};var xt=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt();const r=t=>e(t);if(r.version="3.3.3",r.removed=[],!t||!t.document||t.document.nodeType!==wt||!t.Element)return r.isSupported=!1,r;let{document:i}=t;const o=i,n=o.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:d,Element:l,NodeFilter:c,NamedNodeMap:h=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:u,trustedTypes:m}=t,g=l.prototype,f=Ye(g,"cloneNode"),_=Ye(g,"remove"),v=Ye(g,"nextSibling"),y=Ye(g,"childNodes"),w=Ye(g,"parentNode");if("function"==typeof s){const e=i.createElement("template");e.content&&e.content.ownerDocument&&(i=e.content.ownerDocument)}let b,x="";const{implementation:$,createNodeIterator:A,createDocumentFragment:C,getElementsByTagName:E}=i,{importNode:S}=o;let T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof ve&&"function"==typeof w&&$&&void 0!==$.createHTMLDocument;const{MUSTACHE_EXPR:k,ERB_EXPR:D,TMPLIT_EXPR:z,DATA_ATTR:M,ARIA_ATTR:N,IS_SCRIPT_OR_DATA:P,ATTR_WHITESPACE:O,CUSTOM_ELEMENT:L}=gt;let{IS_ALLOWED_URI:R}=gt,I=null;const U=je({},[...qe,...Ve,...Ke,...Qe,...et]);let W=null;const H=je({},[...tt,...rt,...it,...ot]);let F=Object.seal(Ce(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),B=null,j=null;const G=Object.seal(Ce(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Z=!0,Y=!0,q=!1,V=!0,K=!1,X=!0,Q=!1,J=!1,ee=!1,te=!1,re=!1,ie=!1,oe=!0,ne=!1,ae=!0,se=!1,de={},le=null;const ce=je({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let he=null;const pe=je({},["audio","video","img","source","image","track"]);let ue=null;const me=je({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",_e="http://www.w3.org/1999/xhtml";let ye=_e,we=!1,be=null;const xe=je({},[ge,fe,_e],Pe);let Ae=je({},["mi","mo","mn","ms","mtext"]),Ee=je({},["annotation-xml"]);const Se=je({},["title","style","font","a","script"]);let Fe=null;const Be=["application/xhtml+xml","text/html"];let Ge=null,nt=null;const at=i.createElement("form"),st=function(e){return e instanceof RegExp||e instanceof Function},dt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!nt||nt!==e){if(e&&"object"==typeof e||(e={}),e=Ze(e),Fe=-1===Be.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Ge="application/xhtml+xml"===Fe?Pe:Ne,I=Ue(e,"ALLOWED_TAGS")?je({},e.ALLOWED_TAGS,Ge):U,W=Ue(e,"ALLOWED_ATTR")?je({},e.ALLOWED_ATTR,Ge):H,be=Ue(e,"ALLOWED_NAMESPACES")?je({},e.ALLOWED_NAMESPACES,Pe):xe,ue=Ue(e,"ADD_URI_SAFE_ATTR")?je(Ze(me),e.ADD_URI_SAFE_ATTR,Ge):me,he=Ue(e,"ADD_DATA_URI_TAGS")?je(Ze(pe),e.ADD_DATA_URI_TAGS,Ge):pe,le=Ue(e,"FORBID_CONTENTS")?je({},e.FORBID_CONTENTS,Ge):ce,B=Ue(e,"FORBID_TAGS")?je({},e.FORBID_TAGS,Ge):Ze({}),j=Ue(e,"FORBID_ATTR")?je({},e.FORBID_ATTR,Ge):Ze({}),de=!!Ue(e,"USE_PROFILES")&&e.USE_PROFILES,Z=!1!==e.ALLOW_ARIA_ATTR,Y=!1!==e.ALLOW_DATA_ATTR,q=e.ALLOW_UNKNOWN_PROTOCOLS||!1,V=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,K=e.SAFE_FOR_TEMPLATES||!1,X=!1!==e.SAFE_FOR_XML,Q=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,ee=e.FORCE_BODY||!1,oe=!1!==e.SANITIZE_DOM,ne=e.SANITIZE_NAMED_PROPS||!1,ae=!1!==e.KEEP_CONTENT,se=e.IN_PLACE||!1,R=e.ALLOWED_URI_REGEXP||ct,ye=e.NAMESPACE||_e,Ae=e.MATHML_TEXT_INTEGRATION_POINTS||Ae,Ee=e.HTML_INTEGRATION_POINTS||Ee,F=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(F.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(F.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(F.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(Y=!1),re&&(te=!0),de&&(I=je({},et),W=Ce(null),!0===de.html&&(je(I,qe),je(W,tt)),!0===de.svg&&(je(I,Ve),je(W,rt),je(W,ot)),!0===de.svgFilters&&(je(I,Ke),je(W,rt),je(W,ot)),!0===de.mathMl&&(je(I,Qe),je(W,it),je(W,ot))),Ue(e,"ADD_TAGS")||(G.tagCheck=null),Ue(e,"ADD_ATTR")||(G.attributeCheck=null),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?G.tagCheck=e.ADD_TAGS:(I===U&&(I=Ze(I)),je(I,e.ADD_TAGS,Ge))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?G.attributeCheck=e.ADD_ATTR:(W===H&&(W=Ze(W)),je(W,e.ADD_ATTR,Ge))),e.ADD_URI_SAFE_ATTR&&je(ue,e.ADD_URI_SAFE_ATTR,Ge),e.FORBID_CONTENTS&&(le===ce&&(le=Ze(le)),je(le,e.FORBID_CONTENTS,Ge)),e.ADD_FORBID_CONTENTS&&(le===ce&&(le=Ze(le)),je(le,e.ADD_FORBID_CONTENTS,Ge)),ae&&(I["#text"]=!0),Q&&je(I,["html","head","body"]),I.table&&(je(I,["tbody"]),delete B.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');b=e.TRUSTED_TYPES_POLICY,x=b.createHTML("")}else void 0===b&&(b=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(r=t.getAttribute(i));const o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(m,n)),null!==b&&"string"==typeof x&&(x=b.createHTML(""));$e&&$e(e),nt=e}},lt=je({},[...Ve,...Ke,...Xe]),ht=je({},[...Qe,...Je]),pt=function(e){ze(r.removed,{element:e});try{w(e).removeChild(e)}catch(t){_(e)}},mt=function(e,t){try{ze(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){ze(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(te||re)try{pt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},xt=function(e){let t=null,r=null;if(ee)e="<remove></remove>"+e;else{const t=Oe(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===Fe&&ye===_e&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=b?b.createHTML(e):e;if(ye===_e)try{t=(new u).parseFromString(o,Fe)}catch(e){}if(!t||!t.documentElement){t=$.createDocument(ye,"template",null);try{t.documentElement.innerHTML=we?x:o}catch(e){}}const n=t.body||t.documentElement;return e&&r&&n.insertBefore(i.createTextNode(r),n.childNodes[0]||null),ye===_e?E.call(t,Q?"html":"body")[0]:Q?t.documentElement:n},$t=function(e){return A.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},At=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof h)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Ct=function(e){return"function"==typeof d&&e instanceof d};function Et(e,t,i){Te(e,e=>{e.call(r,t,i,nt)})}const St=function(e){let t=null;if(Et(T.beforeSanitizeElements,e,null),At(e))return pt(e),!0;const i=Ge(e.nodeName);if(Et(T.uponSanitizeElement,e,{tagName:i,allowedTags:I}),X&&e.hasChildNodes()&&!Ct(e.firstElementChild)&&We(/<[/\w!]/g,e.innerHTML)&&We(/<[/\w!]/g,e.textContent))return pt(e),!0;if(e.nodeType===vt)return pt(e),!0;if(X&&e.nodeType===yt&&We(/<[/\w]/g,e.data))return pt(e),!0;if(!(G.tagCheck instanceof Function&&G.tagCheck(i))&&(!I[i]||B[i])){if(!B[i]&&kt(i)){if(F.tagNameCheck instanceof RegExp&&We(F.tagNameCheck,i))return!1;if(F.tagNameCheck instanceof Function&&F.tagNameCheck(i))return!1}if(ae&&!le[i]){const t=w(e)||e.parentNode,r=y(e)||e.childNodes;if(r&&t){for(let i=r.length-1;i>=0;--i){const o=f(r[i],!0);o.__removalCount=(e.__removalCount||0)+1,t.insertBefore(o,v(e))}}}return pt(e),!0}return e instanceof l&&!function(e){let t=w(e);t&&t.tagName||(t={namespaceURI:ye,tagName:"template"});const r=Ne(e.tagName),i=Ne(t.tagName);return!!be[e.namespaceURI]&&(e.namespaceURI===fe?t.namespaceURI===_e?"svg"===r:t.namespaceURI===ge?"svg"===r&&("annotation-xml"===i||Ae[i]):Boolean(lt[r]):e.namespaceURI===ge?t.namespaceURI===_e?"math"===r:t.namespaceURI===fe?"math"===r&&Ee[i]:Boolean(ht[r]):e.namespaceURI===_e?!(t.namespaceURI===fe&&!Ee[i])&&!(t.namespaceURI===ge&&!Ae[i])&&!ht[r]&&(Se[r]||!lt[r]):!("application/xhtml+xml"!==Fe||!be[e.namespaceURI]))}(e)?(pt(e),!0):"noscript"!==i&&"noembed"!==i&&"noframes"!==i||!We(/<\/no(script|embed|frames)/i,e.innerHTML)?(K&&e.nodeType===_t&&(t=e.textContent,Te([k,D,z],e=>{t=Le(t,e," ")}),e.textContent!==t&&(ze(r.removed,{element:e.cloneNode()}),e.textContent=t)),Et(T.afterSanitizeElements,e,null),!1):(pt(e),!0)},Tt=function(e,t,r){if(j[t])return!1;if(oe&&("id"===t||"name"===t)&&(r in i||r in at))return!1;if(Y&&!j[t]&&We(M,t));else if(Z&&We(N,t));else if(G.attributeCheck instanceof Function&&G.attributeCheck(t,e));else if(!W[t]||j[t]){if(!(kt(e)&&(F.tagNameCheck instanceof RegExp&&We(F.tagNameCheck,e)||F.tagNameCheck instanceof Function&&F.tagNameCheck(e))&&(F.attributeNameCheck instanceof RegExp&&We(F.attributeNameCheck,t)||F.attributeNameCheck instanceof Function&&F.attributeNameCheck(t,e))||"is"===t&&F.allowCustomizedBuiltInElements&&(F.tagNameCheck instanceof RegExp&&We(F.tagNameCheck,r)||F.tagNameCheck instanceof Function&&F.tagNameCheck(r))))return!1}else if(ue[t]);else if(We(R,Le(r,O,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Re(r,"data:")||!he[e]){if(q&&!We(P,Le(r,O,"")));else if(r)return!1}else;return!0},kt=function(e){return"annotation-xml"!==e&&Oe(e,L)},Dt=function(e){Et(T.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||At(e))return;const i={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W,forceKeepAttr:void 0};let o=t.length;for(;o--;){const n=t[o],{name:a,namespaceURI:s,value:d}=n,l=Ge(a),c=d;let h="value"===a?c:Ie(c);if(i.attrName=l,i.attrValue=h,i.keepAttr=!0,i.forceKeepAttr=void 0,Et(T.uponSanitizeAttribute,e,i),h=i.attrValue,!ne||"id"!==l&&"name"!==l||(mt(a,e),h="user-content-"+h),X&&We(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,h)){mt(a,e);continue}if("attributename"===l&&Oe(h,"href")){mt(a,e);continue}if(i.forceKeepAttr)continue;if(!i.keepAttr){mt(a,e);continue}if(!V&&We(/\/>/i,h)){mt(a,e);continue}K&&Te([k,D,z],e=>{h=Le(h,e," ")});const p=Ge(e.nodeName);if(Tt(p,l,h)){if(b&&"object"==typeof m&&"function"==typeof m.getAttributeType)if(s);else switch(m.getAttributeType(p,l)){case"TrustedHTML":h=b.createHTML(h);break;case"TrustedScriptURL":h=b.createScriptURL(h)}if(h!==c)try{s?e.setAttributeNS(s,a,h):e.setAttribute(a,h),At(e)?pt(e):De(r.removed)}catch(t){mt(a,e)}}else mt(a,e)}Et(T.afterSanitizeAttributes,e,null)},zt=function e(t){let r=null;const i=$t(t);for(Et(T.beforeSanitizeShadowDOM,t,null);r=i.nextNode();)Et(T.uponSanitizeShadowNode,r,null),St(r),Dt(r),r.content instanceof a&&e(r.content);Et(T.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null,n=null,s=null,l=null;if(we=!e,we&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Ct(e)){if("function"!=typeof e.toString)throw He("toString is not a function");if("string"!=typeof(e=e.toString()))throw He("dirty is not a string, aborting")}if(!r.isSupported)return e;if(J||dt(t),r.removed=[],"string"==typeof e&&(se=!1),se){if(e.nodeName){const t=Ge(e.nodeName);if(!I[t]||B[t])throw He("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof d)i=xt("\x3c!----\x3e"),n=i.ownerDocument.importNode(e,!0),n.nodeType===ft&&"BODY"===n.nodeName||"HTML"===n.nodeName?i=n:i.appendChild(n);else{if(!te&&!K&&!Q&&-1===e.indexOf("<"))return b&&ie?b.createHTML(e):e;if(i=xt(e),!i)return te?null:ie?x:""}i&&ee&&pt(i.firstChild);const c=$t(se?e:i);for(;s=c.nextNode();)St(s),Dt(s),s.content instanceof a&&zt(s.content);if(se)return e;if(te){if(re)for(l=C.call(i.ownerDocument);i.firstChild;)l.appendChild(i.firstChild);else l=i;return(W.shadowroot||W.shadowrootmode)&&(l=S.call(o,l,!0)),l}let h=Q?i.outerHTML:i.innerHTML;return Q&&I["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&We(ut,i.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+h),K&&Te([k,D,z],e=>{h=Le(h,e," ")}),b&&ie?b.createHTML(h):h},r.setConfig=function(){dt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),J=!0},r.clearConfig=function(){nt=null,J=!1},r.isValidAttribute=function(e,t,r){nt||dt({});const i=Ge(e),o=Ge(t);return Tt(i,o,r)},r.addHook=function(e,t){"function"==typeof t&&ze(T[e],t)},r.removeHook=function(e,t){if(void 0!==t){const r=ke(T[e],t);return-1===r?void 0:Me(T[e],r,1)[0]}return De(T[e])},r.removeHooks=function(e){T[e]=[]},r.removeAllHooks=function(){T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},r}();const $t={en:{"card.no_alerts":"No active alerts.","card.sensor_unavailable":"Alert sensor is {state}.","card.preview":"Sample Data","card.read_details":"Read Details","card.open_source":"Open {provider} Source","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","detail.issued":"Issued","detail.onset":"Onset","detail.expires":"Expires","detail.area":"Area","detail.source":"Source","detail.description":"Description","detail.instructions":"Instructions","progress.start":"Start","progress.now":"Now","progress.end":"End","progress.ongoing":"Ongoing","progress.expires_in_label":"Expires in","progress.starts_in_label":"Starts in","progress.tbd":"TBD","progress.na":"N/A","progress.expired_label":"Expired","progress.compact_active":"for {time}","progress.compact_prep":"in {time}","progress.compact_ongoing":"ongoing","progress.compact_expired":"expired {time} ago","time.just_now":"just now","time.in_less_than_1m":"in <1m","time.minutes_ago":"{m}m ago","time.in_minutes":"in {m}m","time.hours_ago":"{dur} ago","time.in_hours":"in {dur}","time.days_ago":"{d}d ago","time.in_days":"in {d}d","badge.severity_extreme":"Extreme","badge.severity_severe":"Severe","badge.severity_moderate":"Moderate","badge.severity_minor":"Minor","badge.severity_unknown":"Unknown","badge.certainty_observed":"Observed","badge.certainty_likely":"Likely","badge.certainty_possible":"Possible","badge.certainty_unlikely":"Unlikely","badge.certainty_unknown":"Unknown","editor.entities":"Entities","editor.title":"Title (optional)","editor.provider":"Alert provider","editor.provider_auto":"Auto-detect","editor.provider_nws":"NWS (United States)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europe)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Germany)","editor.zones":"Zones (optional)","editor.zones_helper":"Comma-separated BoM area_id codes, e.g. NSW_FL049","editor.event_codes":"Event codes (optional)","editor.event_codes_helper":"Comma-separated event codes, e.g. TOW, SVW (NWS) or 31, 95 (DWD)","editor.exclude_event_codes":"Exclude event codes (optional)","editor.exclude_event_codes_helper":"Comma-separated event codes to exclude, e.g. SCY (NWS) or 22 (DWD)","editor.sort_order":"Sort order","editor.sort_default":"Default","editor.sort_onset":"Onset time","editor.sort_severity":"Severity","editor.color_theme":"Color theme","editor.color_severity":"Severity-based","editor.color_nws":"NWS Official","editor.color_meteoalarm":"MeteoAlarm Awareness","editor.timezone":"Timezone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (local device)","editor.min_severity":"Minimum severity","editor.severity_all":"All severities","editor.severity_minor":"Minor or higher","editor.severity_moderate":"Moderate or higher","editor.severity_severe":"Severe or higher","editor.severity_extreme":"Extreme only","editor.animations":"Enable animations","editor.deduplicate":"Deduplicate alerts","editor.deduplicate_headlines":"Deduplicate headlines","editor.show_details":"Show detail panel","editor.expand_details":"Always expand details","editor.show_metadata":"Show metadata","editor.show_description":"Show description","editor.show_instructions":"Show instructions","editor.show_provider":"Show provider label","editor.show_source_link":"Show source link","editor.reformat_text":"Reflow alert text (strip hard line breaks)","editor.compact":"Compact layout","editor.font_size":"Font size","editor.font_size_small":"Small","editor.font_size_default":"Default","editor.font_size_large":"Large","editor.font_size_x_large":"Extra large","editor.hide_expired":"Hide expired alerts","editor.hide_no_alerts":"Hide card when there are no active alerts","editor.show_preview":"Show sample data","editor.preview_hint":"Preview card layout with sample alerts","editor.preview_nudge":"No active alerts — enable to preview the card layout.","editor.entity_warning":"Selected entity does not appear to contain weather alert data.","editor.no_entities_hint":"No supported weather alert entities found. A provider integration (e.g. NWS Alerts) must be installed first.","editor.no_entities_hint_link":"Supported providers","editor.section_entity":"Entities & Provider","editor.section_filtering":"Filtering","editor.section_appearance":"Appearance","editor.section_detail_panel":"Detail Panel","editor.section_behavior":"Behavior"},fr:{"card.no_alerts":"Aucune alerte active.","card.sensor_unavailable":"Le capteur d'alerte est {state}.","card.preview":"Donnees d'exemple","card.read_details":"Lire les details","card.open_source":"Ouvrir la source {provider}","card.zones_count":"{count} zones","card.zone_count_singular":"{count} zone","detail.issued":"Emis","detail.onset":"Debut","detail.expires":"Expire","detail.area":"Zone","detail.source":"Source","detail.description":"Description","detail.instructions":"Instructions","progress.start":"Debut","progress.now":"Maint.","progress.end":"Fin","progress.ongoing":"En cours","progress.expires_in_label":"Expire dans","progress.starts_in_label":"Commence dans","progress.tbd":"Ind.","progress.na":"N/D","progress.expired_label":"Expiré","progress.compact_active":"pour {time}","progress.compact_prep":"dans {time}","progress.compact_ongoing":"en cours","progress.compact_expired":"expiré il y a {time}","time.just_now":"a l'instant","time.in_less_than_1m":"dans <1m","time.minutes_ago":"il y a {m}m","time.in_minutes":"dans {m}m","time.hours_ago":"il y a {dur}","time.in_hours":"dans {dur}","time.days_ago":"il y a {d}j","time.in_days":"dans {d}j","badge.severity_extreme":"Extrême","badge.severity_severe":"Grave","badge.severity_moderate":"Modérée","badge.severity_minor":"Mineure","badge.severity_unknown":"Inconnue","badge.certainty_observed":"Observée","badge.certainty_likely":"Probable","badge.certainty_possible":"Possible","badge.certainty_unlikely":"Improbable","badge.certainty_unknown":"Inconnue","editor.entities":"Entites","editor.title":"Titre (optionnel)","editor.provider":"Fournisseur d'alertes","editor.provider_auto":"Detection auto","editor.provider_nws":"NWS (Etats-Unis)","editor.provider_bom":"BoM (Australie)","editor.provider_meteoalarm":"MeteoAlarm (Europe)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Allemagne)","editor.zones":"Zones (optionnel)","editor.zones_helper":"Codes area_id BoM separes par des virgules, ex. NSW_FL049","editor.event_codes":"Codes d'evenement (optionnel)","editor.event_codes_helper":"Codes d'evenement separes par des virgules, ex. TOW, SVW (NWS) ou 31, 95 (DWD)","editor.exclude_event_codes":"Exclure codes d'evenement (optionnel)","editor.exclude_event_codes_helper":"Codes d'evenement a exclure, ex. SCY (NWS) ou 22 (DWD)","editor.sort_order":"Ordre de tri","editor.sort_default":"Par defaut","editor.sort_onset":"Heure de debut","editor.sort_severity":"Gravite","editor.color_theme":"Theme de couleur","editor.color_severity":"Base sur la gravite","editor.color_nws":"NWS officiel","editor.color_meteoalarm":"MeteoAlarm Vigilance","editor.timezone":"Fuseau horaire","editor.tz_server":"Serveur (Home Assistant)","editor.tz_browser":"Navigateur (appareil local)","editor.min_severity":"Gravite minimale","editor.severity_all":"Toutes les gravites","editor.severity_minor":"Mineure ou plus","editor.severity_moderate":"Moderee ou plus","editor.severity_severe":"Grave ou plus","editor.severity_extreme":"Extreme uniquement","editor.animations":"Activer les animations","editor.deduplicate":"Dedupliquer les alertes","editor.deduplicate_headlines":"Dédupliquer les titres","editor.show_details":"Afficher le panneau de details","editor.expand_details":"Toujours afficher les details","editor.show_metadata":"Afficher les metadonnees","editor.show_description":"Afficher la description","editor.show_instructions":"Afficher les instructions","editor.show_provider":"Afficher le fournisseur","editor.show_source_link":"Afficher le lien source","editor.reformat_text":"Reformater le texte (supprimer les retours a la ligne)","editor.compact":"Disposition compacte","editor.font_size":"Taille de police","editor.font_size_small":"Petit","editor.font_size_default":"Par défaut","editor.font_size_large":"Grand","editor.font_size_x_large":"Très grand","editor.hide_expired":"Masquer les alertes expirées","editor.hide_no_alerts":"Masquer la carte sans alertes","editor.show_preview":"Afficher les donnees exemples","editor.preview_hint":"Apercu de la disposition avec des alertes fictives","editor.preview_nudge":"Aucune alerte active — activez pour previsualiser la disposition.","editor.entity_warning":"L'entite selectionnee ne semble pas contenir de donnees d'alerte meteo.","editor.no_entities_hint":"Aucune entite d'alerte meteo compatible trouvee. Une integration (ex. NWS Alerts) doit etre installee.","editor.no_entities_hint_link":"Fournisseurs supportes","editor.section_entity":"Entite et fournisseur","editor.section_filtering":"Filtrage","editor.section_appearance":"Apparence","editor.section_detail_panel":"Panneau de details","editor.section_behavior":"Comportement"},es:{"card.no_alerts":"Sin alertas activas.","card.sensor_unavailable":"El sensor de alertas esta {state}.","card.preview":"Datos de ejemplo","card.read_details":"Leer detalles","card.open_source":"Abrir fuente {provider}","card.zones_count":"{count} zonas","card.zone_count_singular":"{count} zona","detail.issued":"Emitido","detail.onset":"Inicio","detail.expires":"Expira","detail.area":"Area","detail.source":"Fuente","detail.description":"Descripcion","detail.instructions":"Instrucciones","progress.start":"Inicio","progress.now":"Ahora","progress.end":"Fin","progress.ongoing":"En curso","progress.expires_in_label":"Expira en","progress.starts_in_label":"Comienza en","progress.tbd":"Pend.","progress.na":"N/D","progress.expired_label":"Expirada","progress.compact_active":"por {time}","progress.compact_prep":"en {time}","progress.compact_ongoing":"en curso","progress.compact_expired":"expiró hace {time}","time.just_now":"ahora mismo","time.in_less_than_1m":"en <1m","time.minutes_ago":"hace {m}m","time.in_minutes":"en {m}m","time.hours_ago":"hace {dur}","time.in_hours":"en {dur}","time.days_ago":"hace {d}d","time.in_days":"en {d}d","badge.severity_extreme":"Extrema","badge.severity_severe":"Grave","badge.severity_moderate":"Moderada","badge.severity_minor":"Menor","badge.severity_unknown":"Desconocida","badge.certainty_observed":"Observada","badge.certainty_likely":"Probable","badge.certainty_possible":"Posible","badge.certainty_unlikely":"Improbable","badge.certainty_unknown":"Desconocida","editor.entities":"Entidades","editor.title":"Titulo (opcional)","editor.provider":"Proveedor de alertas","editor.provider_auto":"Deteccion auto","editor.provider_nws":"NWS (Estados Unidos)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Alemania)","editor.zones":"Zonas (opcional)","editor.zones_helper":"Codigos area_id de BoM separados por comas, ej. NSW_FL049","editor.event_codes":"Codigos de evento (opcional)","editor.event_codes_helper":"Codigos de evento separados por comas, ej. TOW, SVW (NWS) o 31, 95 (DWD)","editor.exclude_event_codes":"Excluir codigos de evento (opcional)","editor.exclude_event_codes_helper":"Codigos de evento a excluir, ej. SCY (NWS) o 22 (DWD)","editor.sort_order":"Orden","editor.sort_default":"Predeterminado","editor.sort_onset":"Hora de inicio","editor.sort_severity":"Gravedad","editor.color_theme":"Tema de color","editor.color_severity":"Basado en gravedad","editor.color_nws":"NWS oficial","editor.color_meteoalarm":"MeteoAlarm Conciencia","editor.timezone":"Zona horaria","editor.tz_server":"Servidor (Home Assistant)","editor.tz_browser":"Navegador (dispositivo local)","editor.min_severity":"Gravedad minima","editor.severity_all":"Todas las gravedades","editor.severity_minor":"Menor o superior","editor.severity_moderate":"Moderada o superior","editor.severity_severe":"Grave o superior","editor.severity_extreme":"Solo extrema","editor.animations":"Activar animaciones","editor.deduplicate":"Deduplicar alertas","editor.deduplicate_headlines":"Deduplicar titulares","editor.show_details":"Mostrar panel de detalles","editor.expand_details":"Siempre expandir detalles","editor.show_metadata":"Mostrar metadatos","editor.show_description":"Mostrar descripcion","editor.show_instructions":"Mostrar instrucciones","editor.show_provider":"Mostrar proveedor","editor.show_source_link":"Mostrar enlace de fuente","editor.reformat_text":"Reformatear texto (eliminar saltos de linea)","editor.compact":"Disposicion compacta","editor.font_size":"Tamaño de fuente","editor.font_size_small":"Pequeño","editor.font_size_default":"Predeterminado","editor.font_size_large":"Grande","editor.font_size_x_large":"Extra grande","editor.hide_expired":"Ocultar alertas expiradas","editor.hide_no_alerts":"Ocultar tarjeta sin alertas","editor.show_preview":"Mostrar datos de ejemplo","editor.preview_hint":"Vista previa con alertas de ejemplo","editor.preview_nudge":"Sin alertas activas — active para previsualizar el diseno.","editor.entity_warning":"La entidad seleccionada no parece contener datos de alerta meteorologica.","editor.no_entities_hint":"No se encontraron entidades de alerta meteorologica compatibles. Se debe instalar una integracion (ej. NWS Alerts).","editor.no_entities_hint_link":"Proveedores compatibles","editor.section_entity":"Entidad y proveedor","editor.section_filtering":"Filtrado","editor.section_appearance":"Apariencia","editor.section_detail_panel":"Panel de detalles","editor.section_behavior":"Comportamiento"},it:{"card.no_alerts":"Nessuna allerta attiva.","card.sensor_unavailable":"Il sensore di allerta è {state}.","card.preview":"Dati di esempio","card.read_details":"Leggi dettagli","card.open_source":"Apri fonte {provider}","card.zones_count":"{count} zone","card.zone_count_singular":"{count} zona","detail.issued":"Emessa","detail.onset":"Inizio","detail.expires":"Scadenza","detail.area":"Area","detail.source":"Fonte","detail.description":"Descrizione","detail.instructions":"Istruzioni","progress.start":"Inizio","progress.now":"Ora","progress.end":"Fine","progress.ongoing":"In corso","progress.expires_in_label":"Scade tra","progress.starts_in_label":"Inizia tra","progress.tbd":"N.D.","progress.na":"N/D","progress.expired_label":"Scaduta","progress.compact_active":"per {time}","progress.compact_prep":"tra {time}","progress.compact_ongoing":"in corso","progress.compact_expired":"scaduta {time} fa","time.just_now":"proprio ora","time.in_less_than_1m":"in <1m","time.minutes_ago":"{m}m fa","time.in_minutes":"in {m}m","time.hours_ago":"{dur} fa","time.in_hours":"in {dur}","time.days_ago":"{d}g fa","time.in_days":"in {d}g","badge.severity_extreme":"Estrema","badge.severity_severe":"Grave","badge.severity_moderate":"Moderata","badge.severity_minor":"Lieve","badge.severity_unknown":"Sconosciuta","badge.certainty_observed":"Osservata","badge.certainty_likely":"Probabile","badge.certainty_possible":"Possibile","badge.certainty_unlikely":"Improbabile","badge.certainty_unknown":"Sconosciuta","editor.entities":"Entità","editor.title":"Titolo (opzionale)","editor.provider":"Fornitore allerte","editor.provider_auto":"Rilevamento automatico","editor.provider_nws":"NWS (Stati Uniti)","editor.provider_bom":"BoM (Australia)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Germania)","editor.zones":"Zone (opzionale)","editor.zones_helper":"Codici area_id BoM separati da virgola, es. NSW_FL049","editor.event_codes":"Codici evento (opzionale)","editor.event_codes_helper":"Codici evento separati da virgola, es. TOW, SVW (NWS) o 31, 95 (DWD)","editor.exclude_event_codes":"Escludi codici evento (opzionale)","editor.exclude_event_codes_helper":"Codici evento da escludere, es. SCY (NWS) o 22 (DWD)","editor.sort_order":"Ordinamento","editor.sort_default":"Predefinito","editor.sort_onset":"Ora di inizio","editor.sort_severity":"Gravità","editor.color_theme":"Tema colori","editor.color_severity":"Basato sulla gravità","editor.color_nws":"NWS ufficiale","editor.color_meteoalarm":"MeteoAlarm Livelli","editor.timezone":"Fuso orario","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (dispositivo locale)","editor.min_severity":"Gravità minima","editor.severity_all":"Tutte le gravità","editor.severity_minor":"Lieve o superiore","editor.severity_moderate":"Moderata o superiore","editor.severity_severe":"Grave o superiore","editor.severity_extreme":"Solo estrema","editor.animations":"Abilita animazioni","editor.deduplicate":"Deduplica allerte","editor.deduplicate_headlines":"Deduplica titoli","editor.show_details":"Mostra pannello dettagli","editor.expand_details":"Espandi sempre i dettagli","editor.show_metadata":"Mostra metadati","editor.show_description":"Mostra descrizione","editor.show_instructions":"Mostra istruzioni","editor.show_provider":"Mostra fornitore","editor.show_source_link":"Mostra link alla fonte","editor.reformat_text":"Riformatta testo (rimuovi interruzioni di riga)","editor.compact":"Layout compatto","editor.font_size":"Dimensione testo","editor.font_size_small":"Piccolo","editor.font_size_default":"Predefinito","editor.font_size_large":"Grande","editor.font_size_x_large":"Molto grande","editor.hide_expired":"Nascondi allerte scadute","editor.hide_no_alerts":"Nascondi scheda senza allerte","editor.show_preview":"Mostra dati di esempio","editor.preview_hint":"Anteprima del layout con allerte di esempio","editor.preview_nudge":"Nessuna allerta attiva — attiva per visualizzare il layout.","editor.entity_warning":"L'entità selezionata non sembra contenere dati di allerta meteo.","editor.no_entities_hint":"Nessuna entita di allerta meteo compatibile trovata. Un'integrazione (es. NWS Alerts) deve essere installata.","editor.no_entities_hint_link":"Provider supportati","editor.section_entity":"Entità e fornitore","editor.section_filtering":"Filtraggio","editor.section_appearance":"Aspetto","editor.section_detail_panel":"Pannello dettagli","editor.section_behavior":"Comportamento"},de:{"card.no_alerts":"Keine aktiven Warnungen.","card.sensor_unavailable":"Der Warnsensor ist {state}.","card.preview":"Beispieldaten","card.read_details":"Details lesen","card.open_source":"{provider}-Quelle öffnen","card.zones_count":"{count} Zonen","card.zone_count_singular":"{count} Zone","detail.issued":"Ausgegeben","detail.onset":"Beginn","detail.expires":"Ablauf","detail.area":"Gebiet","detail.source":"Quelle","detail.description":"Beschreibung","detail.instructions":"Hinweise","progress.start":"Start","progress.now":"Jetzt","progress.end":"Ende","progress.ongoing":"Laufend","progress.expires_in_label":"Endet in","progress.starts_in_label":"Beginnt in","progress.tbd":"Offen","progress.na":"K. A.","progress.expired_label":"Abgelaufen","progress.compact_active":"für {time}","progress.compact_prep":"in {time}","progress.compact_ongoing":"laufend","progress.compact_expired":"abgelaufen vor {time}","time.just_now":"gerade eben","time.in_less_than_1m":"in <1 Min","time.minutes_ago":"vor {m} Min","time.in_minutes":"in {m} Min","time.hours_ago":"vor {dur}","time.in_hours":"in {dur}","time.days_ago":"vor {d} T","time.in_days":"in {d} T","badge.severity_extreme":"Extrem","badge.severity_severe":"Schwer","badge.severity_moderate":"Mäßig","badge.severity_minor":"Gering","badge.severity_unknown":"Unbekannt","badge.certainty_observed":"Beobachtet","badge.certainty_likely":"Wahrscheinlich","badge.certainty_possible":"Möglich","badge.certainty_unlikely":"Unwahrscheinlich","badge.certainty_unknown":"Unbekannt","editor.entities":"Entitäten","editor.title":"Titel (optional)","editor.provider":"Warnanbieter","editor.provider_auto":"Automatisch erkennen","editor.provider_nws":"NWS (USA)","editor.provider_bom":"BoM (Australien)","editor.provider_meteoalarm":"MeteoAlarm (Europa)","editor.provider_pirateweather":"PirateWeather","editor.provider_dwd":"DWD (Deutschland)","editor.zones":"Zonen (optional)","editor.zones_helper":"Kommagetrennte BoM area_id-Codes, z. B. NSW_FL049","editor.event_codes":"Ereigniscodes (optional)","editor.event_codes_helper":"Kommagetrennte Ereigniscodes, z. B. TOW, SVW (NWS) oder 31, 95 (DWD)","editor.exclude_event_codes":"Ereigniscodes ausschließen (optional)","editor.exclude_event_codes_helper":"Ereigniscodes zum Ausschließen, z. B. SCY (NWS) oder 22 (DWD)","editor.sort_order":"Sortierung","editor.sort_default":"Standard","editor.sort_onset":"Beginnzeit","editor.sort_severity":"Schweregrad","editor.color_theme":"Farbschema","editor.color_severity":"Nach Schweregrad","editor.color_nws":"NWS offiziell","editor.color_meteoalarm":"MeteoAlarm Warnstufen","editor.timezone":"Zeitzone","editor.tz_server":"Server (Home Assistant)","editor.tz_browser":"Browser (lokales Gerät)","editor.min_severity":"Mindestschweregrad","editor.severity_all":"Alle Schweregrade","editor.severity_minor":"Gering oder höher","editor.severity_moderate":"Mäßig oder höher","editor.severity_severe":"Schwer oder höher","editor.severity_extreme":"Nur extrem","editor.animations":"Animationen aktivieren","editor.deduplicate":"Warnungen deduplizieren","editor.deduplicate_headlines":"Überschriften deduplizieren","editor.show_details":"Detailbereich anzeigen","editor.expand_details":"Details immer anzeigen","editor.show_metadata":"Metadaten anzeigen","editor.show_description":"Beschreibung anzeigen","editor.show_instructions":"Hinweise anzeigen","editor.show_provider":"Anbieter anzeigen","editor.show_source_link":"Quelllink anzeigen","editor.reformat_text":"Text umformatieren (harte Zeilenumbrüche entfernen)","editor.compact":"Kompaktes Layout","editor.font_size":"Schriftgröße","editor.font_size_small":"Klein","editor.font_size_default":"Standard","editor.font_size_large":"Groß","editor.font_size_x_large":"Sehr groß","editor.hide_expired":"Abgelaufene Warnungen ausblenden","editor.hide_no_alerts":"Karte ohne aktive Warnungen ausblenden","editor.show_preview":"Beispieldaten anzeigen","editor.preview_hint":"Kartenlayout mit Beispielwarnungen anzeigen","editor.preview_nudge":"Keine aktiven Warnungen — aktivieren, um das Kartenlayout zu sehen.","editor.entity_warning":"Die ausgewählte Entität scheint keine Wetterwarnungsdaten zu enthalten.","editor.no_entities_hint":"Keine kompatiblen Wetterwarnungs-Entitaten gefunden. Eine Integration (z.B. NWS Alerts) muss installiert sein.","editor.no_entities_hint_link":"Unterstutzte Anbieter","editor.section_entity":"Entität und Anbieter","editor.section_filtering":"Filterung","editor.section_appearance":"Darstellung","editor.section_detail_panel":"Detailbereich","editor.section_behavior":"Verhalten"}};function At(e,t,r){const i=t.split("-")[0].toLowerCase();let o=($t[i]||$t.en)[e]??$t.en[e]??e;if(r)for(const[e,t]of Object.entries(r))o=o.replace(`{${e}}`,String(t));return o}const Ct=["a","b","br","em","i","li","ol","p","strong","ul"];xt.addHook("afterSanitizeAttributes",e=>{"A"===e.tagName&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"))});const Et=[[["tornado"],"mdi:weather-tornado"],[["tsunami"],"mdi:tsunami"],[["hurricane","tropical","typhoon","cyclone"],"mdi:weather-hurricane"],[["thunderstorm","t-storm","gewitter"],"mdi:weather-lightning"],[["hail","hagel"],"mdi:weather-hail"],[["flood","hydrologic","storm surge","hochwasser"],"mdi:home-flood"],[["rain","shower","precipitation","starkregen","dauerregen"],"mdi:weather-pouring"],[["snow","blizzard","winter","schnee","schneesturm"],"mdi:weather-snowy-heavy"],[["sleet"],"mdi:weather-snowy-rainy"],[["ice","freeze","frost","glätte","glatteis"],"mdi:snowflake"],[["cold","chill","low temperature","kälte"],"mdi:thermometer-low"],[["landslide","avalanche","lawine"],"mdi:landslide"],[["volcano","ashfall","vog"],"mdi:volcano"],[["dust","sand"],"mdi:weather-dust"],[["smoke"],"mdi:smoke"],[["air quality","air stagnation"],"mdi:air-filter"],[["fire","red flag","waldbrand"],"mdi:fire"],[["heat","high temperature","hitze"],"mdi:weather-sunny-alert"],[["drought","trockenheit"],"mdi:water-off"],[["fog","nebel"],"mdi:weather-fog"],[["sheep","grazier"],"mdi:weather-windy-variant"],[["gale","squall"],"mdi:weather-windy"],[["wind","sturm","orkan","böen"],"mdi:weather-windy"],[["small craft"],"mdi:sail-boat"],[["rip current"],"mdi:wave"],[["surf","marine","coastal","seas"],"mdi:waves"]];function St(e){const t=e.toLowerCase();for(const[e,r]of Et)if(e.some(e=>t.includes(e)))return r;return"mdi:alert-circle-outline"}const Tt=[[["likely"],"mdi:check-decagram"],[["observed"],"mdi:eye-check"],[["possible","unlikely"],"mdi:help-circle-outline"]];const kt=[[["tornado warning"],"#FF0000","255, 0, 0"],[["tornado watch"],"#FFFF00","255, 255, 0"],[["extreme wind warning"],"#FF8C00","255, 140, 0"],[["hurricane warning"],"#DC143C","220, 20, 60"],[["excessive heat warning"],"#C71585","199, 21, 133"],[["flash flood warning","flash flood stmt"],"#8B0000","139, 0, 0"],[["flash flood watch"],"#2E8B57","46, 139, 87"],[["flash flood advisory"],"#00FF7F","0, 255, 127"],[["severe thunderstorm warning"],"#FFA500","255, 165, 0"],[["severe thunderstorm watch"],"#DB7093","219, 112, 147"],[["blizzard warning"],"#FF4500","255, 69, 0"],[["ice storm warning"],"#8B008B","139, 0, 139"],[["winter storm warning"],"#FF69B4","255, 105, 180"],[["winter storm watch"],"#4682B4","70, 130, 180"],[["high wind warning"],"#DAA520","218, 165, 32"],[["wind chill warning"],"#B0C4DE","176, 196, 222"],[["red flag warning","fire weather watch"],"#FF4500","255, 69, 0"],[["tsunami warning"],"#FD6347","253, 99, 71"],[["heat advisory"],"#FF7F50","255, 127, 80"],[["dense fog advisory"],"#708090","112, 128, 144"],[["frost advisory"],"#6495ED","100, 149, 237"],[["freeze warning"],"#483D8B","72, 61, 139"],[["wind advisory"],"#D2B48C","210, 180, 140"],[["winter weather advisory"],"#7B68EE","123, 104, 238"],[["tornado"],"#FF0000","255, 0, 0"],[["hurricane","typhoon","tropical storm"],"#DC143C","220, 20, 60"],[["flood"],"#228B22","34, 139, 34"],[["blizzard","ice storm"],"#FF4500","255, 69, 0"],[["snow","winter","blizzard"],"#1E90FF","30, 144, 255"],[["freeze","frost","ice"],"#6495ED","100, 149, 237"],[["wind"],"#D2B48C","210, 180, 140"],[["heat"],"#FF7F50","255, 127, 80"],[["fire","red flag"],"#FF4500","255, 69, 0"],[["fog"],"#708090","112, 128, 144"],[["tsunami"],"#FD6347","253, 99, 71"]];function Dt(e){const t=parseInt(e.slice(1,3),16)/255,r=parseInt(e.slice(3,5),16)/255,i=parseInt(e.slice(5,7),16)/255,o=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;return.2126*o(t)+.7152*o(r)+.0722*o(i)>.18?"#1a1a1a":"var(--text-primary-color, white)"}const zt={extreme:["#D8001E","216, 0, 30"],severe:["#FF9900","255, 153, 0"],moderate:["#FFC800","255, 200, 0"],minor:["#88C840","136, 200, 64"]};function Mt(e){if(!e||"None"===e||""===e.trim())return 0;const t=new Date(e.trim());return isNaN(t.getTime())?0:t.getTime()/1e3}function Nt(e,t){if(!t?.timeZone)return"";const r=new Intl.DateTimeFormat(t.language,{timeZoneName:"short",timeZone:t.timeZone}).formatToParts(e);return r.find(e=>"timeZoneName"===e.type)?.value??""}function Pt(e,t){const r=t?.language,i=t?.date_format,o=t?.timeZone;if(!i||"language"===i)return e.toLocaleDateString(r,{timeZone:o});const n=new Intl.DateTimeFormat(r,{day:"numeric",month:"numeric",year:"numeric",timeZone:o}).formatToParts(e),a=n.find(e=>"day"===e.type)?.value??"",s=n.find(e=>"month"===e.type)?.value??"",d=n.find(e=>"year"===e.type)?.value??"";switch(i){case"DMY":return`${a}/${s}/${d}`;case"MDY":return`${s}/${a}/${d}`;case"YMD":return`${d}/${s}/${a}`;default:return e.toLocaleDateString(r,{timeZone:o})}}function Ot(e,t,r){const i=function(e){if(!e)return{locale:void 0};const t=e.language;return"12"===e.time_format?{locale:t,hour12:!0}:"24"===e.time_format?{locale:t,hour12:!1}:{locale:t}}(t),o={hour:r,minute:"2-digit",timeZone:t?.timeZone};return void 0!==i.hour12&&(o.hour12=i.hour12),e.toLocaleTimeString(i.locale,o)}function Lt(e,t,r="en"){if(e<=0)return At("progress.na",r);const i=new Date(1e3*e),o=new Date,n=Nt(i,t),a=Ot(i,t,"2-digit"),s=n?`${a} ${n}`:a;return function(e,t,r){const i=new Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:r});return i.format(e)===i.format(t)}(i,o,t?.timeZone)?s:`${s} (${Pt(i,t)})`}function Rt(e,t,r="en"){if(e<=100)return At("progress.na",r);const i=new Date(1e3*e),o=Nt(i,t),n=Ot(i,t,"numeric"),a=o?`${n} ${o}`:n;return`${Pt(i,t)}, ${a}`}function It(e,t=Date.now()/1e3,r="en"){const i=e-t,o=Math.abs(i),n=i<0;if(o<60)return At(n?"time.just_now":"time.in_less_than_1m",r);if(o<3600){const e=Math.floor(o/60);return At(n?"time.minutes_ago":"time.in_minutes",r,{m:e})}if(o<86400){const e=Math.floor(o/3600),t=Math.floor(o%3600/60),i=t>0?`${e}h ${t}m`:`${e}h`;return At(n?"time.hours_ago":"time.in_hours",r,{dur:i})}const a=Math.floor(o/86400);return At(n?"time.days_ago":"time.in_days",r,{d:a})}function Ut(e,t=Date.now()/1e3){const r=Math.abs(e-t);if(r<60)return"<1m";if(r<3600){return`${Math.floor(r/60)}m`}if(r<86400){const e=Math.floor(r/3600),t=Math.floor(r%3600/60);return t>0?`${e}h ${t}m`:`${e}h`}const i=Math.floor(r/86400),o=Math.floor(r%86400/3600);return o>0?`${i}d ${o}h`:`${i}d`}function Wt(e){if(!e)return"";const t=/^\s*[·•\-]\s/,r=/^\.[A-Z]/;return e.split(/\n{2,}/).map(e=>{const i=e.split("\n"),o=[];for(const e of i)0===o.length?o.push(e.trimStart()):t.test(e)||r.test(e.trimStart())||o[o.length-1].trimEnd().endsWith(":")?o.push(e):o[o.length-1]+=" "+e.trimStart();return o.map(e=>e.replace(/ {2,}/g," ")).map(e=>e.trimEnd()).filter(Boolean).join("\n")}).filter(Boolean).join("\n\n")}function Ht(e){const t=(e||"").toLowerCase().replace(/\s/g,"");return["extreme","severe","moderate","minor"].includes(t)?t:"unknown"}const Ft={extreme:0,severe:1,moderate:2,minor:3,unknown:4};function Bt(e){const t=e.split("/");return t[t.length-1].toUpperCase()}function jt(e){const t=[];if(e.AffectedZones)for(const r of e.AffectedZones)t.push(Bt(r));if(e.Geocode?.UGC)for(const r of e.Geocode.UGC){const e=r.toUpperCase();t.includes(e)||t.push(e)}return t}function Gt(e){if(e.area_id&&e.id.startsWith(e.area_id+"_")){const t=e.id.slice(e.area_id.length+1);return`https://www.bom.gov.au/warning/${e.type.replace(/_/g,"-")}/${t}`}return"https://www.bom.gov.au/weather-and-climate/warnings-and-alerts"}const Zt={new:"New",update:"Updated",renewal:"Renewed",upgrade:"Upgraded",downgrade:"Downgraded",final:"Final"};const Yt={"#880e4f":{severity:"extreme",label:"Extreme"},"#ff0000":{severity:"severe",label:"Severe"},"#ff9900":{severity:"moderate",label:"Moderate"},"#ffff00":{severity:"minor",label:"Minor"}};function qt(e,t){if("number"==typeof e)switch(e){case 4:return{severity:"extreme",label:"Extreme"};case 3:return{severity:"severe",label:"Severe"};case 2:return{severity:"moderate",label:"Moderate"};case 1:return{severity:"minor",label:"Minor"};case 0:return{severity:"unknown",label:"Unknown"}}if("string"==typeof t){const e=Yt[t.toLowerCase()];if(e)return e}return{severity:"unknown",label:"Unknown"}}function Vt(e){if(!e||"string"!=typeof e)return;const t=parseInt(e.split(";")[0].trim(),10);return t>=4?"extreme":3===t?"severe":2===t?"moderate":1===t?"minor":void 0}function Kt(e){return"string"==typeof e?e:""}function Xt(e){return"string"==typeof e?e:""}const Qt=[new class{constructor(){this.provider="nws"}canHandle(e){const t=e.Alerts;if(!Array.isArray(t))return!1;if(0===t.length)return!0;const r=t[0];return"object"==typeof r&&null!==r&&"Event"in r&&"Severity"in r}parseAlerts(e){const t=e.Alerts;return Array.isArray(t)?t.map(e=>this._normalize(e)):[]}_normalize(e){const t=Ht(e.Severity);return{id:e.ID,event:e.Event||"Unknown",severity:t,severityLabel:e.Severity&&"unknown"!==Ht(e.Severity)?e.Severity:t.charAt(0).toUpperCase()+t.slice(1),certainty:e.Certainty||"",urgency:e.Urgency||"",sentTs:Mt(e.Sent),onsetTs:Mt(e.Onset),endsTs:Mt(e.Ends)||Mt(e.Expires),description:e.Description||"",instruction:e.Instruction||"",url:e.URL||"",headline:e.Headline||"",areaDesc:e.AreaDesc||e.AreasAffected||"",zones:jt(e),eventCode:e.NWSCode||"",provider:"nws",phase:"",severityInferred:!e.Severity||"unknown"===Ht(e.Severity),certaintyInferred:!1}}},new class{constructor(){this.provider="bom"}canHandle(e){const t=e.warnings;if(!Array.isArray(t))return!1;if(0===t.length)return"string"==typeof e.attribution&&e.attribution.toLowerCase().includes("bureau of meteorology");const r=t[0];return"object"==typeof r&&null!==r&&"warning_group_type"in r&&"issue_time"in r}parseAlerts(e){const t=e.warnings;return Array.isArray(t)?t.filter(e=>"cancelled"!==e.phase).map(e=>this._normalize(e)):[]}_normalize(e){const t=Mt(e.issue_time),r=Mt(e.expiry_time),i=(o=e).title||o.short_title||o.type.replace(/_/g," ");var o;const{severity:n,label:a}=function(e,t,r){const i=e.toLowerCase();if(i.includes("extreme")||i.includes("tropical cyclone"))return{severity:"extreme",label:(i.includes("extreme"),"Extreme")};if(i.includes("severe"))return{severity:"severe",label:"Severe"};if(i.includes("major"))return{severity:"severe",label:"Major"};if(i.includes("moderate"))return{severity:"moderate",label:"Moderate"};if(i.includes("minor")||i.includes("initial"))return{severity:"minor",label:"Minor"};const o=t.toLowerCase();if(o.includes("tropical_cyclone"))return{severity:"extreme",label:"Extreme"};if(o.includes("severe")||o.includes("fire_weather"))return{severity:"severe",label:"Severe"};const n=r.charAt(0).toUpperCase()+r.slice(1);return"major"===r?{severity:"moderate",label:n}:{severity:"minor",label:n}}(i,e.type,e.warning_group_type);return{id:e.id,event:i,severity:n,severityLabel:a,certainty:"",urgency:"",sentTs:t,onsetTs:t,endsTs:r,description:"",instruction:"",url:Gt(e),headline:e.short_title||i,areaDesc:e.state||"",zones:e.area_id?[e.area_id.toUpperCase()]:[],eventCode:"",provider:"bom",phase:(s=e.phase,Zt[s.toLowerCase()]||""),severityInferred:!0,certaintyInferred:!1};var s}},new class{constructor(){this.provider="dwd"}canHandle(e){if("number"!=typeof e.warning_count)return!1;if("string"!=typeof e.region_name)return!1;return!(e.warning_count>0)||"object"==typeof(t=e.warning_1)&&null!==t&&"number"==typeof t.level&&"string"==typeof t.color;var t}parseAlerts(e){const t="number"==typeof e.warning_count?e.warning_count:0;if(t<=0)return[];const r="string"==typeof e.region_name?e.region_name:"",i=[];for(let o=1;o<=t;o++){const t=e[`warning_${o}`];if(!t||"object"!=typeof t)continue;const n=t,a="number"==typeof n.level?n.level:void 0;if(0===a)continue;const{severity:s,label:d}=qt(a,n.color),l=Mt(n.start_time),c=Mt(n.end_time),h="number"==typeof n.event_code?String(n.event_code):"",p="string"==typeof n.event?n.event:"";i.push({id:`dwd_${h||p}_${l}`,event:p,severity:s,severityLabel:d,certainty:"",urgency:"",sentTs:0,onsetTs:l,endsTs:c,description:"string"==typeof n.description?n.description:"",instruction:"string"==typeof n.instruction?n.instruction:"",url:"https://www.dwd.de/DE/wetter/warnungen_gemeinden/warnWetter_node.html",headline:"string"==typeof n.headline?n.headline:"",areaDesc:r,zones:[],eventCode:h,provider:"dwd",phase:"",severityInferred:!1,certaintyInferred:!1})}return i}},new class{constructor(){this.provider="meteoalarm"}canHandle(e){return!("string"!=typeof e.attribution||!e.attribution.toLowerCase().includes("meteoalarm"))||"string"==typeof e.awareness_level&&"string"==typeof e.awareness_type}parseAlerts(e){const t=Kt(e.event),r=Kt(e.headline);if(!t&&!r)return[];const i=Kt(e.awareness_level),o=Vt(i)||Ht(Kt(e.severity)),n=function(e){if(!e||"string"!=typeof e)return"";const t=e.split(";");return t.length>=3?t[2].trim():""}(i)||Kt(e.severity)||o.charAt(0).toUpperCase()+o.slice(1),a=Mt(Kt(e.onset)||Kt(e.effective)),s=Mt(Kt(e.expires)),d=Mt(Kt(e.effective)),l=function(e){if(!e||"string"!=typeof e)return"";const t=e.split(";");return t.length>1?t.slice(1).join(";").trim():""}(Kt(e.awareness_type)),c=t||l||r,h=!Vt(i)&&!Kt(e.severity);return[{id:`meteoalarm_${c}_${a}`,event:c,severity:o,severityLabel:n,certainty:Kt(e.certainty),urgency:Kt(e.urgency),sentTs:d,onsetTs:a||d,endsTs:s,description:Kt(e.description),instruction:Kt(e.instruction),url:"",headline:r||c,areaDesc:Kt(e.senderName),zones:[],eventCode:"",provider:"meteoalarm",iconHint:l,phase:"",severityInferred:h,certaintyInferred:!1}]}},new class{constructor(){this.provider="pirateweather"}canHandle(e){return"string"==typeof e.attribution&&e.attribution.toLowerCase().includes("pirate weather")}parseAlerts(e){const t=[],r="string"==typeof e.title&&""!==e.title,i="string"==typeof e.title_0&&""!==e.title_0;if(r&&!i){const r=this._parseOne(e,"");r&&t.push(r)}for(let r=0;;r++){const i=`_${r}`;if("string"!=typeof e[`title${i}`]||""===e[`title${i}`])break;const o=this._parseOne(e,i);o&&t.push(o)}return t}_parseOne(e,t){const r=Xt(e[`title${t}`]);if(!r)return null;const i=Xt(e[`severity${t}`]),o=Ht(i),n=i?i.charAt(0).toUpperCase()+i.slice(1).toLowerCase():o.charAt(0).toUpperCase()+o.slice(1),a=Mt(Xt(e[`time${t}`])),s=Mt(Xt(e[`expires${t}`])),d=e[`regions${t}`],l=Array.isArray(d)?d.join(", "):Xt(d),c=Xt(e[`uri${t}`]);return{id:`pirateweather_${r}_${a}`,event:r,severity:o,severityLabel:n,certainty:"",urgency:"",sentTs:a,onsetTs:a,endsTs:s,description:Xt(e[`description${t}`]),instruction:"",url:c,headline:r,areaDesc:l,zones:[],eventCode:"",provider:"pirateweather",phase:"",severityInferred:!i||"unknown"===Ht(i),certaintyInferred:!1}}}],Jt=[/^sensor\..*alerts?$/i,/^sensor\..*warnings?$/i,/^binary_sensor\.meteoalarm/i,/^sensor\.dwd_weather_warnings/i];function er(e){return Qt.some(t=>t.canHandle(e))}function tr(e,t){if(e){const t=Qt.find(t=>t.provider===e);if(t)return t}for(const e of Qt)if(e.canHandle(t))return e;return Qt[0]}const rr=a`
  @keyframes pulse-border {
    0% { box-shadow: 0 0 0 0 rgba(var(--color-rgb), 0.7); }
    70% { box-shadow: 0 0 0 6px rgba(var(--color-rgb), 0); }
    100% { box-shadow: 0 0 0 0 rgba(var(--color-rgb), 0); }
  }

  @keyframes ongoing-pulse {
    0% { background: rgba(var(--color-rgb), 0.8); }
    50% { background: rgba(var(--color-rgb), 0.5); }
    100% { background: rgba(var(--color-rgb), 0.8); }
  }

  @keyframes stripe-march-sm {
    to { background-position: -12px 0; }
  }

  @keyframes stripe-march-lg {
    to { background-position: -24px 0; }
  }

  @keyframes fill-shimmer {
    0% { background-position: -75% 0; }
    60% { background-position: 175% 0; }
    100% { background-position: 175% 0; }
  }

  :host {
    display: block;
  }

  .error {
    padding: 16px;
    color: var(--error-color, red);
  }

  .sensor-unavailable {
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--secondary-text-color);
    font-style: italic;
  }

  /* --- COLOR MAPPING --- */
  .severity-extreme,
  .severity-severe { --color: var(--error-color); --color-rgb: 244, 67, 54; }
  .severity-moderate { --color: var(--warning-color); --color-rgb: 255, 152, 0; }
  .severity-minor { --color: var(--info-color); --color-rgb: 33, 150, 243; }
  .severity-unknown { --color: var(--secondary-text-color); --color-rgb: 128, 128, 128; }

  /* --- CARD CONTAINER --- */
  .alert-card {
    position: relative;
    margin-bottom: 16px;
    padding: 0;
    border-radius: 12px;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    box-shadow: var(--ha-card-box-shadow, 0 2px 5px rgba(0,0,0,0.1));
    overflow: hidden;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .alert-card:last-child {
    margin-bottom: 0;
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
    color: var(--color);
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
    border: 2px dashed var(--divider-color);
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
    color: var(--card-background-color, white);
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
    color: var(--color);
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

  .active .progress-fill {
    background-color: var(--color);
    background-image: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
    background-size: 40% 100%;
    background-repeat: no-repeat;
    animation: fill-shimmer 5s ease-in-out infinite;
  }

  .expired .progress-fill {
    background-color: var(--divider-color);
  }

  .preparation .progress-fill {
    background-color: transparent;
    background-image: linear-gradient(
      -45deg,
      var(--color) 25%,
      transparent 25%,
      transparent 50%,
      var(--color) 50%,
      var(--color) 75%,
      transparent 75%
    );
    background-size: 24px 24px;
    opacity: 0.6;
    animation: stripe-march-lg 6s linear infinite;
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
    color: var(--color);
    text-decoration: none;
    font-weight: 500;
    font-size: calc(0.85rem * var(--wac-scale, 1));
  }

  /* --- COMPACT LAYOUT --- */
  .compact .alert-card {
    margin-bottom: 4px;
    border-radius: 8px;
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
    color: var(--color);
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
  .compact .active.alert-card::before {
    background-color: var(--color);
    background-image: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
    background-size: 40% 100%;
    background-repeat: no-repeat;
    animation: fill-shimmer 5s ease-in-out infinite;
  }
  .compact .expired.alert-card::before {
    background-color: var(--divider-color);
  }
  .compact .preparation.alert-card::before {
    background-image: linear-gradient(
      -45deg,
      rgba(var(--color-rgb), 0.6) 25%,
      transparent 25%,
      transparent 50%,
      rgba(var(--color-rgb), 0.6) 50%,
      rgba(var(--color-rgb), 0.6) 75%,
      transparent 75%
    );
    background-size: 12px 12px;
    background-color: transparent;
    animation: stripe-march-sm 3s linear infinite;
  }
  .compact .active.ongoing.alert-card::before {
    left: 0;
    background: rgba(var(--color-rgb), 0.8);
    animation: ongoing-pulse 5s infinite;
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
  .no-animations .active .progress-fill,
  .no-animations.compact .active.alert-card::before {
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

  /* --- EMPTY STATE --- */
  .no-alerts {
    padding: 20px;
    opacity: 0.6;
    text-align: center;
    font-style: italic;
  }
  .no-alerts ha-icon {
    margin-bottom: 10px;
  }
`;let ir=class extends se{constructor(){super(...arguments),this._showPreview=!1}get _lang(){return this.hass?.locale?.language||"en"}setConfig(e){this._config=e,this._showPreview=!!e._preview}_fireConfigChanged(e){this._config=e;const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_getMatchingEntityIds(){if(this._cachedHass===this.hass&&this._cachedEntityIds)return this._cachedEntityIds;this._cachedHass=this.hass;const e=[];for(const[t,r]of Object.entries(this.hass.states))(t.startsWith("sensor.")||t.startsWith("binary_sensor."))&&(Jt.some(e=>e.test(t))||er(r.attributes))&&e.push(t);if(this._config?.entity&&!e.includes(this._config.entity)&&e.push(this._config.entity),this._config?.entities)for(const t of this._config.entities)t&&!e.includes(t)&&e.push(t);return this._cachedEntityIds=e,e}_getSelectedEntities(){const e=[];if(this._config?.entity&&e.push(this._config.entity),this._config?.entities)for(const t of this._config.entities)t&&!e.includes(t)&&e.push(t);return e}_hasNoRealAlerts(){if(!this.hass||!this._config?.entity)return!1;const e=this._getSelectedEntities();let t=0;for(const r of e){const e=this.hass.states[r];if(e){if("unknown"===e.state||"unavailable"===e.state)return!1;if(t++,"0"!==e.state&&"off"!==e.state)return!1}}return t>0}_isEntityMismatch(){if(!this._config?.entity)return!1;const e=this.hass?.states[this._config.entity];return!!e&&(!Jt.some(e=>e.test(this._config.entity))&&!er(e.attributes))}_renderEntityWarning(e){return this._isEntityMismatch()?B`<ha-alert alert-type="warning">${At("editor.entity_warning",e)}</ha-alert>`:G}_renderNoEntitiesHint(e){return this._getMatchingEntityIds().some(e=>this.hass?.states[e])?G:B`<ha-alert alert-type="info">${At("editor.no_entities_hint",e)} <a href="https://github.com/seevee/weather_alerts_card#supported-providers" target="_blank" rel="noopener">${At("editor.no_entities_hint_link",e)}</a></ha-alert>`}_entityChanged(e){const t=e.detail.value,r=Array.isArray(t)?t:t?[t]:[],i={...this._config};if(i.entity=r[0]||"",r.length>1?i.entities=r.slice(1):delete i.entities,i.hideNoAlerts){const e=this._syncMultiEntityVisibility(i);e?i.visibility=e:delete i.visibility}this._fireConfigChanged(i)}_titleChanged(e){const t=e.target.value;if(t===(this._config.title||""))return;const r={...this._config};t?r.title=t:delete r.title,this._fireConfigChanged(r)}_providerChanged(e){const t=e.detail.value;if(t===(this._config.provider||"auto"))return;const r={...this._config};"auto"===t?delete r.provider:r.provider=t,this._fireConfigChanged(r)}_animationsChanged(e){const t=e.target.checked;if(t===(!1!==this._config.animations))return;const r={...this._config};t?delete r.animations:r.animations=!1,this._fireConfigChanged(r)}_deduplicateHeadlinesChanged(e){const t=e.target.checked;if(t===(!1!==(this._config.deduplicateHeadlines??this._config.headline)))return;const r={...this._config};delete r.headline,t?delete r.deduplicateHeadlines:r.deduplicateHeadlines=!1,this._fireConfigChanged(r)}_deduplicateChanged(e){const t=e.target.checked;if(t===(!1!==this._config.deduplicate))return;const r={...this._config};t?delete r.deduplicate:r.deduplicate=!1,this._fireConfigChanged(r)}_showDetailsChanged(e){const t=e.target.checked;if(t===(!1!==this._config.showDetails))return;const r={...this._config};t?delete r.showDetails:r.showDetails=!1,this._fireConfigChanged(r)}_expandDetailsChanged(e){const t=e.target.checked;if(t===(!0===this._config.expandDetails))return;const r={...this._config};t?r.expandDetails=!0:delete r.expandDetails,this._fireConfigChanged(r)}_showMetadataChanged(e){const t=e.target.checked;if(t===(!1!==this._config.showMetadata))return;const r={...this._config};t?delete r.showMetadata:r.showMetadata=!1,this._fireConfigChanged(r)}_showDescriptionChanged(e){const t=e.target.checked;if(t===(!1!==this._config.showDescription))return;const r={...this._config};t?delete r.showDescription:r.showDescription=!1,this._fireConfigChanged(r)}_showInstructionsChanged(e){const t=e.target.checked;if(t===(!1!==this._config.showInstructions))return;const r={...this._config};t?delete r.showInstructions:r.showInstructions=!1,this._fireConfigChanged(r)}_showProviderChanged(e){const t=e.target.checked;if(t===(!0===this._config.showProvider))return;const r={...this._config};t?r.showProvider=!0:delete r.showProvider,this._fireConfigChanged(r)}_showSourceLinkChanged(e){const t=e.target.checked;if(t===(!1!==this._config.showSourceLink))return;const r={...this._config};t?delete r.showSourceLink:r.showSourceLink=!1,this._fireConfigChanged(r)}_hideExpiredChanged(e){const t=e.target.checked;if(t===(!1!==this._config.hideExpired))return;const r={...this._config};t?delete r.hideExpired:r.hideExpired=!1,this._fireConfigChanged(r)}_hideNoAlertsChanged(e){const t=e.target.checked;if(t===(!0===this._config.hideNoAlerts))return;const r={...this._config};t?r.hideNoAlerts=!0:delete r.hideNoAlerts;const i=this._syncMultiEntityVisibility(r);i?r.visibility=i:delete r.visibility,this._fireConfigChanged(r)}_buildEntityCondition(e){return e.startsWith("binary_sensor.")?{condition:"state",entity:e,state:"on"}:{condition:"state",entity:e,state_not:"0"}}_isManagedCondition(e,t){if("state"===e.condition&&"string"==typeof e.entity&&t.has(e.entity)&&("state_not"in e||"state"in e))return!0;if("or"===e.condition&&Array.isArray(e.conditions)){const t=e.conditions;return t.length>0&&t.every(e=>"state"===e.condition&&"string"==typeof e.entity&&("state_not"in e&&"0"===e.state_not||"state"in e&&"on"===e.state))}return!1}_syncMultiEntityVisibility(e){const t=new Set;e.entity&&t.add(e.entity),e.entities&&e.entities.forEach(e=>t.add(e));const r=(e.visibility||[]).filter(e=>!this._isManagedCondition(e,t));if(e.hideNoAlerts&&t.size>0){const e=[...t].map(e=>this._buildEntityCondition(e));1===e.length?r.push(e[0]):r.push({condition:"or",conditions:e})}return r.length>0?r:void 0}_reformatTextChanged(e){const t=e.target.checked;if(t===(!1!==this._config.reformatText))return;const r={...this._config};t?delete r.reformatText:r.reformatText=!1,this._fireConfigChanged(r)}_layoutChanged(e){const t=e.target.checked;if(t===("compact"===this._config.layout))return;const r={...this._config};t?r.layout="compact":delete r.layout,this._fireConfigChanged(r)}_zonesChanged(e){const t=e.target.value,r={...this._config};t.trim()?r.zones=t.split(",").map(e=>e.trim()).filter(Boolean):delete r.zones,this._fireConfigChanged(r)}_eventCodesChanged(e){const t=e.target.value,r={...this._config};t.trim()?r.eventCodes=t.split(",").map(e=>e.trim().toUpperCase()).filter(Boolean):delete r.eventCodes,this._fireConfigChanged(r)}_excludeEventCodesChanged(e){const t=e.target.value,r={...this._config};t.trim()?r.excludeEventCodes=t.split(",").map(e=>e.trim().toUpperCase()).filter(Boolean):delete r.excludeEventCodes,this._fireConfigChanged(r)}_sortOrderChanged(e){const t=e.detail.value;if(t===(this._config.sortOrder||"default"))return;const r={...this._config};"default"===t?delete r.sortOrder:r.sortOrder=t,this._fireConfigChanged(r)}_colorThemeChanged(e){const t=e.detail.value;if(t===(this._config.colorTheme||"severity"))return;const r={...this._config};"severity"===t?delete r.colorTheme:r.colorTheme=t,this._fireConfigChanged(r)}_fontSizeChanged(e){const t=e.detail.value;if(t===(this._config.fontSize||"default"))return;const r={...this._config};"default"===t?delete r.fontSize:r.fontSize=t,this._fireConfigChanged(r)}_timezoneChanged(e){const t=e.detail.value;if(t===(this._config.timezone||"server"))return;const r={...this._config};"server"===t?delete r.timezone:r.timezone=t,this._fireConfigChanged(r)}_minSeverityChanged(e){const t=e.detail.value;if(t===(this._config.minSeverity||"all"))return;const r={...this._config};"all"!==t?r.minSeverity=t:delete r.minSeverity,this._fireConfigChanged(r)}_previewChanged(e){const t=e.target;this._showPreview=t.checked;const r={...this._config};this._showPreview?r._preview=!0:delete r._preview,this._fireConfigChanged(r)}render(){if(!this.hass||!this._config)return B``;const e=this._lang,t=this._config.zones?this._config.zones.join(", "):"",r=this._config.eventCodes?this._config.eventCodes.join(", "):"",i=this._config.excludeEventCodes?this._config.excludeEventCodes.join(", "):"";return B`
      <div class="editor">
        <!-- Entity & Provider -->
        <div class="section-label">${At("editor.section_entity",e)}</div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{multiple:!0,include_entities:this._getMatchingEntityIds()}}}
          .value=${this._getSelectedEntities()}
          .label=${At("editor.entities",e)}
          .required=${!0}
          @value-changed=${this._entityChanged}
        ></ha-selector>
        ${this._renderEntityWarning(e)}
        ${this._renderNoEntitiesHint(e)}

        <div class="preview-tools">
          <ha-formfield .label=${At("editor.show_preview",e)}>
            <ha-switch
              .checked=${this._showPreview}
              @change=${this._previewChanged}
            ></ha-switch>
          </ha-formfield>
          ${this._hasNoRealAlerts()&&!this._showPreview?B`<div class="preview-nudge">${At("editor.preview_nudge",e)}</div>`:B`<div class="preview-hint">${At("editor.preview_hint",e)}</div>`}
        </div>

        <ha-formfield .label=${At("editor.show_provider",e)}>
          <ha-switch
            .checked=${!0===this._config.showProvider}
            @change=${this._showProviderChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-textfield
          .label=${At("editor.title",e)}
          .value=${this._config.title||""}
          @change=${this._titleChanged}
        ></ha-textfield>

        <ha-select
          .label=${At("editor.provider",e)}
          .value=${this._config.provider||"auto"}
          @selected=${this._providerChanged}
        >
          <ha-dropdown-item value="auto">${At("editor.provider_auto",e)}</ha-dropdown-item>
          <ha-dropdown-item value="nws">${At("editor.provider_nws",e)}</ha-dropdown-item>
          <ha-dropdown-item value="bom">${At("editor.provider_bom",e)}</ha-dropdown-item>
          <ha-dropdown-item value="meteoalarm">${At("editor.provider_meteoalarm",e)}</ha-dropdown-item>
          <ha-dropdown-item value="dwd">${At("editor.provider_dwd",e)}</ha-dropdown-item>
          <ha-dropdown-item value="pirateweather">${At("editor.provider_pirateweather",e)}</ha-dropdown-item>
        </ha-select>

        <!-- Filtering -->
        <div class="section-label">${At("editor.section_filtering",e)}</div>

        <ha-textfield
          .label=${At("editor.zones",e)}
          .value=${t}
          .helper=${At("editor.zones_helper",e)}
          .helperPersistent=${!0}
          @change=${this._zonesChanged}
        ></ha-textfield>

        <ha-textfield
          .label=${At("editor.event_codes",e)}
          .value=${r}
          .helper=${At("editor.event_codes_helper",e)}
          .helperPersistent=${!0}
          @change=${this._eventCodesChanged}
        ></ha-textfield>

        <ha-textfield
          .label=${At("editor.exclude_event_codes",e)}
          .value=${i}
          .helper=${At("editor.exclude_event_codes_helper",e)}
          .helperPersistent=${!0}
          @change=${this._excludeEventCodesChanged}
        ></ha-textfield>

        <ha-select
          .label=${At("editor.min_severity",e)}
          .value=${this._config.minSeverity||"all"}
          @selected=${this._minSeverityChanged}
        >
          <ha-dropdown-item value="all">${At("editor.severity_all",e)}</ha-dropdown-item>
          <ha-dropdown-item value="minor">${At("editor.severity_minor",e)}</ha-dropdown-item>
          <ha-dropdown-item value="moderate">${At("editor.severity_moderate",e)}</ha-dropdown-item>
          <ha-dropdown-item value="severe">${At("editor.severity_severe",e)}</ha-dropdown-item>
          <ha-dropdown-item value="extreme">${At("editor.severity_extreme",e)}</ha-dropdown-item>
        </ha-select>

        <!-- Appearance -->
        <div class="section-label">${At("editor.section_appearance",e)}</div>

        <ha-formfield .label=${At("editor.compact",e)}>
          <ha-switch
            .checked=${"compact"===this._config.layout}
            @change=${this._layoutChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-select
          .label=${At("editor.color_theme",e)}
          .value=${this._config.colorTheme||"severity"}
          @selected=${this._colorThemeChanged}
        >
          <ha-dropdown-item value="severity">${At("editor.color_severity",e)}</ha-dropdown-item>
          <ha-dropdown-item value="nws">${At("editor.color_nws",e)}</ha-dropdown-item>
          <ha-dropdown-item value="meteoalarm">${At("editor.color_meteoalarm",e)}</ha-dropdown-item>
        </ha-select>

        <ha-select
          .label=${At("editor.font_size",e)}
          .value=${this._config.fontSize||"default"}
          @selected=${this._fontSizeChanged}
        >
          <ha-dropdown-item value="small">${At("editor.font_size_small",e)}</ha-dropdown-item>
          <ha-dropdown-item value="default">${At("editor.font_size_default",e)}</ha-dropdown-item>
          <ha-dropdown-item value="large">${At("editor.font_size_large",e)}</ha-dropdown-item>
          <ha-dropdown-item value="x-large">${At("editor.font_size_x_large",e)}</ha-dropdown-item>
        </ha-select>

        <ha-formfield .label=${At("editor.animations",e)}>
          <ha-switch
            .checked=${!1!==this._config.animations}
            @change=${this._animationsChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.reformat_text",e)}>
          <ha-switch
            .checked=${!1!==this._config.reformatText}
            @change=${this._reformatTextChanged}
          ></ha-switch>
        </ha-formfield>

        <!-- Detail Panel -->
        <div class="section-label">${At("editor.section_detail_panel",e)}</div>

        <ha-formfield .label=${At("editor.show_details",e)}>
          <ha-switch
            .checked=${!1!==this._config.showDetails}
            @change=${this._showDetailsChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.expand_details",e)}>
          <ha-switch
            .checked=${!0===this._config.expandDetails}
            .disabled=${!1===this._config.showDetails}
            @change=${this._expandDetailsChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.show_metadata",e)}>
          <ha-switch
            .checked=${!1!==this._config.showMetadata}
            .disabled=${!1===this._config.showDetails}
            @change=${this._showMetadataChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.show_description",e)}>
          <ha-switch
            .checked=${!1!==this._config.showDescription}
            .disabled=${!1===this._config.showDetails}
            @change=${this._showDescriptionChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.show_instructions",e)}>
          <ha-switch
            .checked=${!1!==this._config.showInstructions}
            .disabled=${!1===this._config.showDetails}
            @change=${this._showInstructionsChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.show_source_link",e)}>
          <ha-switch
            .checked=${!1!==this._config.showSourceLink}
            .disabled=${!1===this._config.showDetails}
            @change=${this._showSourceLinkChanged}
          ></ha-switch>
        </ha-formfield>

        <!-- Behavior -->
        <div class="section-label">${At("editor.section_behavior",e)}</div>

        <ha-select
          .label=${At("editor.sort_order",e)}
          .value=${this._config.sortOrder||"default"}
          @selected=${this._sortOrderChanged}
        >
          <ha-dropdown-item value="default">${At("editor.sort_default",e)}</ha-dropdown-item>
          <ha-dropdown-item value="onset">${At("editor.sort_onset",e)}</ha-dropdown-item>
          <ha-dropdown-item value="severity">${At("editor.sort_severity",e)}</ha-dropdown-item>
        </ha-select>

        <ha-select
          .label=${At("editor.timezone",e)}
          .value=${this._config.timezone||"server"}
          @selected=${this._timezoneChanged}
        >
          <ha-dropdown-item value="server">${At("editor.tz_server",e)}</ha-dropdown-item>
          <ha-dropdown-item value="browser">${At("editor.tz_browser",e)}</ha-dropdown-item>
        </ha-select>

        <ha-formfield .label=${At("editor.deduplicate",e)}>
          <ha-switch
            .checked=${!1!==this._config.deduplicate}
            @change=${this._deduplicateChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.deduplicate_headlines",e)}>
          <ha-switch
            .checked=${!1!==(this._config.deduplicateHeadlines??this._config.headline)}
            @change=${this._deduplicateHeadlinesChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.hide_expired",e)}>
          <ha-switch
            .checked=${!1!==this._config.hideExpired}
            @change=${this._hideExpiredChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield .label=${At("editor.hide_no_alerts",e)}>
          <ha-switch
            .checked=${!0===this._config.hideNoAlerts}
            @change=${this._hideNoAlertsChanged}
          ></ha-switch>
        </ha-formfield>

      </div>
    `}};ir.styles=a`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0;
    }
    .section-label {
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 4px;
      margin-top: 8px;
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
  `,e([pe({attribute:!1})],ir.prototype,"hass",void 0),e([ue()],ir.prototype,"_config",void 0),e([ue()],ir.prototype,"_showPreview",void 0),ir=e([le("weather-alerts-card-editor")],ir);var or;customElements.define("nws-alerts-card-editor",class extends ir{});console.info("%c  WEATHER-ALERTS-CARD  %c  Version 2.11.1  ","color: white; background: #555; font-weight: bold;","color: white; background: #007acc; font-weight: bold;");const nr={nws:"NWS",bom:"BoM",meteoalarm:"MeteoAlarm",dwd:"DWD",pirateweather:"Pirate Weather"},ar={nws:"NWS",bom:"BoM",meteoalarm:"MA",dwd:"DWD",pirateweather:"PW"};let sr=or=class extends se{constructor(){super(...arguments),this._expandedAlerts=new Map,this._forcePreview=!1,this._motionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this._onMotionChange=()=>this.requestUpdate(),this._multiProvider=!1}connectedCallback(){super.connectedCallback(),this._motionQuery.addEventListener("change",this._onMotionChange)}disconnectedCallback(){super.disconnectedCallback(),this._motionQuery.removeEventListener("change",this._onMotionChange),this._config?.entity&&or._editorExpandedState.set(this._entityStateKey(),this._expandedAlerts)}setConfig(e){if(!(e.entity||e.entities&&e.entities.length>0))throw new Error("You need to define an entity");const{_preview:t,...r}=e;!r.entity&&r.entities&&r.entities.length>0&&(r.entity=r.entities[0]),this._config=r,this._forcePreview=!!t;const i=this._entityStateKey(),o=or._editorExpandedState.get(i);o&&(this._expandedAlerts=o)}getCardSize(){const e=this._getAlerts(),t=this._isCompact?1:3;return Math.max(1,e.length*t)}static getConfigElement(){return document.createElement("weather-alerts-card-editor")}static getStubConfig(e){if(e){const t=Object.keys(e.states).filter(e=>Jt.some(t=>t.test(e))).find(t=>{const r=e.states[t];return"0"!==r.state&&"off"!==r.state&&"unknown"!==r.state&&"unavailable"!==r.state});if(t)return{entity:t}}return{entity:"sensor.nws_alerts_alerts"}}_getAllEntities(){if(!this._config)return[];const e=this._config.entity,t=this._config.entities||[],r=new Set,i=[];for(const o of[e,...t])o&&!r.has(o)&&(r.add(o),i.push(o));return i}_entityStateKey(){return this._getAllEntities().sort().join(",")}_getAlerts(){if(!this.hass||!this._config)return[];const e=[],t=[],r=new Set;for(const i of this._getAllEntities()){const o=this.hass.states[i];if(!o)continue;const n=tr(this._config.provider,o.attributes);r.has(n.provider)||(r.add(n.provider),t.push(n.provider)),e.push(...n.parseAlerts(o.attributes))}return this._multiProvider=t.length>1,this._filterAndSort(e,{providerPriority:t})}_filterAndSort(e,t){if(!this._config)return e;let r=e;if(!1!==this._config.deduplicate&&(r=function(e,t){const r=new Map,i=[];for(const t of e){const e=`${t.event}\0${t.severity}\0${t.onsetTs}\0${t.endsTs}\0${t.provider}`,o=r.get(e);o?o.push(t):(r.set(e,[t]),i.push(e))}let o=i.map(e=>{const t=r.get(e);if(1===t.length)return t[0];const i={...t[0]},o=new Set,n=new Set;for(const e of t){for(const t of e.zones)o.add(t.toUpperCase());e.areaDesc&&n.add(e.areaDesc)}return i.zones=[...o],i.areaDesc=[...n].join("; "),i.mergedCount=t.length,i});if(t&&t.length>1){const e=new Map;for(let r=0;r<t.length;r++)e.has(t[r])||e.set(t[r],r);const r=new Map;for(const t of o){if(0===t.endsTs)continue;const i=`${t.event}\0${t.endsTs}`,o=r.get(i);(!o||(e.get(t.provider)??1/0)<(e.get(o)??1/0))&&r.set(i,t.provider)}o=o.filter(e=>{if(0===e.endsTs)return!0;const t=`${e.event}\0${e.endsTs}`;return e.provider===r.get(t)})}return o}(r,t?.providerPriority)),!t?.skipZones&&this._config.zones&&this._config.zones.length>0){const e=new Set(this._config.zones.map(e=>e.toUpperCase()));r=r.filter(t=>{return r=e,t.zones.some(e=>r.has(e.toUpperCase()));var r})}if(this._config.eventCodes&&this._config.eventCodes.length>0){const e=new Set(this._config.eventCodes.map(e=>e.toUpperCase()));r=r.filter(t=>t.eventCode&&e.has(t.eventCode.toUpperCase()))}if(this._config.excludeEventCodes&&this._config.excludeEventCodes.length>0){const e=new Set(this._config.excludeEventCodes.map(e=>e.toUpperCase()));r=r.filter(t=>!t.eventCode||!e.has(t.eventCode.toUpperCase()))}if(this._config.minSeverity){const e={extreme:0,severe:1,moderate:2,minor:3,unknown:4},t=e[this._config.minSeverity]??4;r=r.filter(r=>(e[r.severity]??4)<=t)}if(!1!==this._config.hideExpired){const e=Date.now()/1e3;r=r.filter(t=>0===t.endsTs||t.endsTs>e)}return function(e,t){return"onset"===t?[...e].sort((e,t)=>(e.onsetTs||1/0)-(t.onsetTs||1/0)):"severity"===t?[...e].sort((e,t)=>{const r=(Ft[e.severity]??4)-(Ft[t.severity]??4);return 0!==r?r:(e.onsetTs||1/0)-(t.onsetTs||1/0)}):e}(r,this._config.sortOrder||"default")}get _locale(){if(!this.hass)return{language:navigator.language||"en",time_format:"language",date_format:"language",timeZone:void 0};const e="browser"===this._config?.timezone?Intl.DateTimeFormat().resolvedOptions().timeZone:this.hass.config?.time_zone;return{...this.hass.locale,timeZone:e}}get _lang(){return this.hass?.locale?.language||"en"}get _animationsEnabled(){return!0===this._config?.animations||!1!==this._config?.animations&&!this._motionQuery.matches}get _isCompact(){return"compact"===this._config?.layout}get _colorTheme(){return this._config?.colorTheme||"severity"}get _fontScale(){switch(this._config?.fontSize){case"small":return.85;case"large":return 1.2;case"x-large":return 1.4;default:return}}get _scaleStyle(){const e=this._fontScale;return void 0!==e?`--wac-scale: ${e}`:""}_scaledPx(e){const t=this._fontScale;return void 0!==t?Math.round(e*t):e}_alertColorStyle(e){if("nws"===this._colorTheme){const{color:t,rgb:r}=function(e){const t=e.toLowerCase();for(const[e,r,i]of kt)if(e.some(e=>t.includes(e)))return{color:r,rgb:i,textColor:Dt(r)};return{color:"#808080",rgb:"128, 128, 128",textColor:Dt("#808080")}}(e.event);return`--color: ${t}; --color-rgb: ${r};`}if("meteoalarm"===this._colorTheme){const{color:t,rgb:r}=function(e){const t=zt[e];return t?{color:t[0],rgb:t[1],textColor:Dt(t[0])}:{color:"#808080",rgb:"128, 128, 128",textColor:Dt("#808080")}}(e.severity);return`--color: ${t}; --color-rgb: ${r};`}return""}_normalizeText(e){return(e||"").replace(/\n{2,}/g,"\n\n").trim()}_toggleDetails(e){const t=new Map(this._expandedAlerts);t.set(e,!t.get(e)),this._expandedAlerts=t,this._config?.entity&&or._editorExpandedState.set(this._entityStateKey(),t)}_sourceLinkLabel(e){const t=nr[e.provider]||"Alert";return At("card.open_source",this._lang,{provider:t})}render(){if(!this._config)return B``;if(!this.hass)return this._renderPreview();const e=this._getAllEntities().map(e=>this.hass.states[e]).filter(Boolean);if(0===e.length||this._forcePreview)return this._renderPreview();const t=e.every(e=>"unavailable"===e.state||"unknown"===e.state);if(t){const t=e[0].state;return B`
        <ha-card .header=${this._config.title||""}>
          <div class="sensor-unavailable">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            ${At("card.sensor_unavailable",this._lang,{state:t})}
          </div>
        </ha-card>
      `}const r=this._getAlerts();if(0===r.length&&this._config.hideNoAlerts)return this.style.display="none",B``;this.style.display="";const i=this._animationsEnabled?"":"no-animations",o=this._isCompact?"compact":"";return B`
      <ha-card .header=${this._config.title||""} class="${i} ${o}" style=${this._scaleStyle}>
        ${0===r.length?this._renderNoAlerts():r.map(e=>this._renderAlert(e))}
      </ha-card>
    `}_renderPreview(){const e=this._filterAndSort(function(){const e=Date.now()/1e3;return[{id:"preview-1",event:"Gentle Wind Watch",severity:"minor",severityLabel:"Minor",certainty:"Possible",urgency:"Future",sentTs:e-3600,onsetTs:e+3600,endsTs:e+21600,description:"A gentle breeze may arrive later. This is sample data showing an upcoming alert.",instruction:"",url:"",headline:"Gentle Wind Watch for Sampletown County",areaDesc:"Sampletown County",zones:["SAMPLE02"],eventCode:"WIA",provider:"nws",phase:"",severityInferred:!0,certaintyInferred:!1},{id:"preview-2",event:"Sunshine Heat Advisory",severity:"moderate",severityLabel:"Moderate",certainty:"Likely",urgency:"Expected",sentTs:e-7200,onsetTs:e-3600,endsTs:e+7200,description:"This is a sample alert demonstrating the card layout. No action required.",instruction:"Enjoy the weather! This is placeholder data for the card preview.",url:"",headline:"Sunshine Heat Advisory for Pleasantville",areaDesc:"Pleasantville, USA",zones:["SAMPLE01"],eventCode:"HTA",provider:"nws",phase:"Update",severityInferred:!1,certaintyInferred:!1},{id:"preview-3",event:"Frost Advisory",severity:"minor",severityLabel:"Minor",certainty:"Likely",urgency:"Expected",sentTs:e-28800,onsetTs:e-21600,endsTs:e-7200,description:"A light frost occurred overnight. This is sample data showing an expired alert.",instruction:"",url:"",headline:"Frost Advisory expired for Pleasantville",areaDesc:"Pleasantville, USA",zones:["SAMPLE01"],eventCode:"FRA",provider:"nws",phase:"",severityInferred:!1,certaintyInferred:!0}]}(),{skipZones:!0}),t=this._animationsEnabled?"":"no-animations",r=this._isCompact?"compact":"";return B`
      <ha-card .header=${this._config.title||""} class="${t} ${r}" style=${this._scaleStyle}>
        <div class="preview-label">${At("card.preview",this._lang)}</div>
        ${e.map(e=>this._renderAlert(e))}
      </ha-card>
    `}_renderNoAlerts(){return B`
      <div class="no-alerts">
        <ha-icon icon="mdi:weather-sunny"></ha-icon><br>
        ${At("card.no_alerts",this._lang)}
      </div>
    `}_renderAlert(e){const t=`severity-${e.severity}`,r=function(e){const t=Date.now()/1e3,r=e.sentTs,i=r>0?r:t;let o=e.onsetTs;0===o&&(o=i);const n=o+3600;let a=e.endsTs;0===a&&(a=n);const s=e.endsTs>0,d=t>=o,l=s&&t>=a;let c,h,p,u;l?(c=o,h=a,p=a,u="Expired"):d?(c=o,h=a,p=t,u="Active"):(c=t,h=a,p=o,u="Preparation");const m=h-c,g=(p-c)/(m>0?m:1)*100;return{isActive:d,isExpired:l,phaseText:u,progressPct:Math.max(0,Math.min(100,Math.round(10*g)/10)),remainingHours:Math.round((a-t)/3600*10)/10,onsetHours:Math.round((o-t)/3600*10)/10,onsetMinutes:Math.round((o-t)/60),onsetTs:o,endsTs:a,sentTs:r,nowTs:t,hasEndTime:s}}(e),i=r.phaseText.toLowerCase(),o=this._expandedAlerts.get(e.id)||!1;return this._isCompact?this._renderCompactAlert(e,t,i,r,o):this._renderFullAlert(e,t,i,r,o)}_renderCompactAlert(e,t,r,i,o){const n=this._lang,a=i.isActive&&!i.hasEndTime,s=i.isExpired?At("progress.compact_expired",n,{time:Ut(i.endsTs,i.nowTs)}):a?At("progress.compact_ongoing",n):i.isActive?At("progress.compact_active",n,{time:Ut(i.endsTs,i.nowTs)}):At("progress.compact_prep",n,{time:Ut(i.onsetTs,i.nowTs)}),d=a?"ongoing":"",l=a?"":`--progress: ${i.progressPct}%;`;return B`
      <div class="alert-card ${t} ${r} ${d}" style=${`${this._alertColorStyle(e)} ${l}`}>
        <div
          class="alert-header-row compact-row"
          @click=${()=>this._toggleDetails(e.id)}
        >
          <div class="icon-box">
            <ha-icon icon=${St(e.iconHint||e.event)}></ha-icon>
          </div>
          ${this._renderProviderHint(e)}
          <span class="alert-title">${e.event}</span>
          <span class="compact-time">${s}</span>
          <ha-icon
            icon="mdi:chevron-down"
            class="compact-chevron ${o?"expanded":""}"
          ></ha-icon>
        </div>
        ${o?this._renderExpandedContent(e,i):G}
      </div>
    `}_renderExpandedContent(e,t){return B`
      <div class="alert-expanded">
        ${this._renderHeadline(e)}
        ${e.areaDesc?B`
          <div class="area-desc" title=${e.areaDesc}>
            <ha-icon icon="mdi:map-marker"></ha-icon>
            <span class="area-desc-text">${e.areaDesc}</span>
          </div>
        `:G}
        <div class="badges-row" style="padding: 0 12px 8px;">
          ${this._renderBadgesRow(e,t)}
        </div>

        ${this._renderProgressSection(e,t)}

        ${!1!==this._config?.showDetails?this._config?.expandDetails?B`
        ${this._renderDetailsContent(e,t)}
        `:B`
        <div class="alert-details-section">
          <div
            class="details-summary"
            @click=${()=>this._toggleDetails(e.id+"_details")}
          >
            <span>${At("card.read_details",this._lang)}</span>
            <ha-icon
              icon="mdi:chevron-down"
              class="chevron ${this._expandedAlerts.get(e.id+"_details")?"expanded":""}"
            ></ha-icon>
          </div>
          ${this._expandedAlerts.get(e.id+"_details")?this._renderDetailsContent(e,t):G}
        </div>
        `:G}
      </div>
    `}_renderFullAlert(e,t,r,i,o){return B`
      <div class="alert-card ${t} ${r}" style=${this._alertColorStyle(e)}>
        <div class="alert-header-row">
          <div class="icon-box">
            <ha-icon icon=${St(e.iconHint||e.event)}></ha-icon>
          </div>
          <div class="info-box">
            <div class="title-row">
              ${this._renderProviderHint(e)}
              <span class="alert-title">${e.event}</span>
            </div>
            ${this._renderHeadline(e)}
            ${e.areaDesc?B`
              <div class="area-desc" title=${e.areaDesc}>
                <ha-icon icon="mdi:map-marker"></ha-icon>
                <span class="area-desc-text">${e.areaDesc}</span>
              </div>
            `:G}
            <div class="badges-row">
              ${this._renderBadgesRow(e,i)}
            </div>
          </div>
        </div>

        ${this._renderProgressSection(e,i)}

        ${!1!==this._config?.showDetails?this._config?.expandDetails?B`
        ${this._renderDetailsContent(e,i)}
        `:B`
        <div class="alert-details-section">
          <div
            class="details-summary"
            @click=${()=>this._toggleDetails(e.id)}
          >
            <span>${At("card.read_details",this._lang)}</span>
            <ha-icon
              icon="mdi:chevron-down"
              class="chevron ${o?"expanded":""}"
            ></ha-icon>
          </div>
          ${o?this._renderDetailsContent(e,i):G}
        </div>
        `:G}
      </div>
    `}_renderProviderHint(e){if(!0!==this._config?.showProvider)return G;const t=ar[e.provider]||e.provider.toUpperCase();return B`<span class="provider-hint">${t}</span>`}_renderHeadline(e){const t=function(e,t=!0){const r=(e.headline||"").trim();if(!r)return"";if(!t)return r;const i=r.toLowerCase().replace(/[.\s]+$/,""),o=e.event.toLowerCase();return i.startsWith(o)||o.startsWith(i)?"":r}(e,!1!==(this._config?.deduplicateHeadlines??this._config?.headline));return t?B`
      <div class="alert-headline" title=${e.headline}>
        ${t}
      </div>
    `:G}_renderBadgesRow(e,t){const r=At("badge.severity_"+e.severity,this._lang),i=e.certainty?At("badge.certainty_"+e.certainty.toLowerCase(),this._lang):"";return B`
      <span class="badge severity-badge${e.severityInferred?" badge-inferred":""}">${r}</span>
      ${e.certainty?B`
        <span class="badge certainty-badge${e.certaintyInferred?" badge-inferred":""}">
          <ha-icon
            icon=${function(e){const t=e.toLowerCase();for(const[e,r]of Tt)if(e.some(e=>t.includes(e)))return r;return"mdi:bullseye-arrow"}(e.certainty)}
            style="--mdc-icon-size: ${this._scaledPx(14)}px; width: ${this._scaledPx(14)}px; height: ${this._scaledPx(14)}px;"
          ></ha-icon>
          ${i}
        </span>
      `:G}
      ${e.phase?B`
        <span class="badge phase-badge">${e.phase}</span>
      `:G}
      ${e.eventCode?B`
        <span class="badge event-code-badge">${e.eventCode}</span>
      `:G}
      ${e.mergedCount&&e.mergedCount>1?B`<span class="badge zones-badge">${At(1===e.mergedCount?"card.zone_count_singular":"card.zones_count",this._lang,{count:e.mergedCount})}</span>`:G}
    `}_renderTextBlock(e,t){return t?B`
      <div class="text-block">
        <div class="text-label">${e}</div>
        <div class="text-body">${_e(function(e){return e?xt.sanitize(e,{ALLOWED_TAGS:Ct,ALLOWED_ATTR:["href"]}):""}(t))}</div>
      </div>
    `:G}_renderDetailsContent(e,t){const r=!1!==this._config?.reformatText;let i=this._normalizeText(e.description),o=this._normalizeText(e.instruction);r&&(i=Wt(i),o=Wt(o));const n=this._lang;return B`
      <div class="details-content">
        ${!1!==this._config?.showMetadata?B`
        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">${At("detail.issued",n)}</span>
            <span class="meta-value">${Rt(t.sentTs,this._locale,n)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${At("detail.onset",n)}</span>
            <span class="meta-value">${Rt(t.onsetTs,this._locale,n)}</span>
            <span class="meta-relative">${It(t.onsetTs,t.nowTs,n)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${t.isExpired?At("progress.expired_label",n):At("detail.expires",n)}</span>
            <span class="meta-value">${Rt(t.endsTs,this._locale,n)}</span>
            ${t.hasEndTime?B`<span class="meta-relative">${It(t.endsTs,t.nowTs,n)}</span>`:G}
          </div>
          ${e.areaDesc?B`
            <div class="meta-item" style="grid-column: 1 / -1;">
              <span class="meta-label">${At("detail.area",n)}</span>
              <span class="meta-value">${e.areaDesc}</span>
            </div>
          `:G}
        </div>
        `:G}

        ${!1!==this._config?.showDescription?this._renderTextBlock(At("detail.description",n),i):G}
        ${!1!==this._config?.showInstructions?this._renderTextBlock(At("detail.instructions",n),o):G}

        ${e.url&&!1!==this._config?.showSourceLink?B`
          <div class="footer-link">
            <a href=${e.url} target="_blank" rel="noopener noreferrer">
              ${this._sourceLinkLabel(e)}
              <ha-icon icon="mdi:open-in-new" style="width:${this._scaledPx(14)}px;"></ha-icon>
            </a>
          </div>
        `:G}
      </div>
    `}_renderProgressSection(e,t){const{isActive:r,progressPct:i,hasEndTime:o,onsetTs:n,endsTs:a,nowTs:s}=t,d=this._lang,l=!this._animationsEnabled,c=t.isExpired?"left: 0; right: 0;":r&&!o?l?"width: 100%; left: 0; opacity: 0.8;":"width: 100%; left: 0; animation: ongoing-pulse 5s infinite; opacity: 0.8;":`left: ${i}%; right: 0;`;return B`
      <div class="progress-section">
        <div class="progress-labels">
          <div class="label-left">
            <span class="label-sub">${At(r?"progress.start":"progress.now",d)}</span>
            <span>${Lt(r?n:s,this._locale,d)}</span>
          </div>
          <div class="label-center">
            ${o?t.isExpired?B`<span class="label-sub">${At("progress.expired_label",d)}</span><span>${Ut(a,s)}</span>`:r?B`<span class="label-sub">${At("progress.expires_in_label",d)}</span><span>${Ut(a,s)}</span>`:B`<span class="label-sub">${At("progress.starts_in_label",d)}</span><span>${Ut(n,s)}</span>`:B`<span class="label-sub">${At("progress.ongoing",d)}</span>`}
          </div>
          <div class="label-right">
            <span class="label-sub">${At("progress.end",d)}</span>
            <span>${o?Lt(a,this._locale,d):At("progress.tbd",d)}</span>
          </div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style=${c}></div>
        </div>
      </div>
    `}};sr.styles=rr,sr._editorExpandedState=new Map,e([pe({attribute:!1})],sr.prototype,"hass",void 0),e([ue()],sr.prototype,"_config",void 0),e([ue()],sr.prototype,"_expandedAlerts",void 0),e([ue()],sr.prototype,"_forcePreview",void 0),sr=or=e([le("weather-alerts-card")],sr);customElements.define("nws-alerts-card",class extends sr{connectedCallback(){super.connectedCallback(),console.warn('nws-alerts-card is deprecated and will be removed in v3.0. Update your dashboard YAML to use "custom:weather-alerts-card".')}});const dr=window;dr.customCards=dr.customCards||[],dr.customCards.push({type:"weather-alerts-card",name:"Weather Alerts Card",preview:!0,description:"A card for displaying weather alerts with severity indicators, progress bars, and expandable details. Supports NWS (US), BoM (Australia), and MeteoAlarm (Europe)."}),dr.customCards.push({type:"nws-alerts-card",name:"NWS Alerts Card (Deprecated)",description:'Deprecated — use "Weather Alerts Card" instead. Will be removed in v3.0.'});export{sr as WeatherAlertsCard};
