const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:r,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:c,getPrototypeOf:d}=Object,u=globalThis,g=u.trustedTypes,p=g?g.emptyScript:"",m=u.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!r(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&a(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const o=s.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(void 0!==t){const o=this.constructor;if(!1===n&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??b)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[f("elementProperties")]=new Map,v[f("finalized")]=new Map,m?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,x=w.trustedTypes,M=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+$,k=`<${S}>`,D=document,E=()=>D.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,z="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,B=/>/g,L=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,U=/"/g,H=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Z=new WeakMap,Y=D.createTreeWalker(D,129);function q(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":3===e?"<math>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===P?"!--"===l[1]?r=N:void 0!==l[1]?r=B:void 0!==l[2]?(H.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=s??P,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?L:'"'===l[3]?U:O):r===U||r===O?r=L:r===N||r===B?r=P:(r=L,s=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";o+=r===P?i+k:h>=0?(n.push(a),i.slice(0,h)+C+i.slice(h)+$+d):i+$+(-2===h?e:d)}return[q(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Q{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,h]=X(t,e);if(this.el=Q.createElement(l,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=Y.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=h[o++],i=n.getAttribute(t).split($),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?W:"?"===r[1]?tt:"@"===r[1]?et:K}),n.removeAttribute(t)}else t.startsWith($)&&(a.push({type:6,index:s}),n.removeAttribute(t));if(H.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],E()),Y.nextNode(),a.push({type:2,index:++s});n.append(t[e],E())}}}else if(8===n.nodeType)if(n.data===S)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)a.push({type:7,index:s}),t+=$.length-1}s++}}static createElement(t,e){const i=D.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,n){if(e===R)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=I(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=G(t,s._$AS(t,e.values),s,n)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??D).importNode(e,!0);Y.currentNode=n;let s=Y.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new V(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new it(s,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(s=Y.nextNode(),o++)}return Y.currentNode=D,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),I(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new J(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new Q(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new V(this.O(E()),this.O(E()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=G(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=G(this,n[i+r],e,r),a===R&&(a=this._$AH[r]),o||=!I(a)||a!==this._$AH[r],a===j?t=j:t!==j&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class W extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class tt extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class et extends K{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??j)===R)return;const i=this._$AH,n=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==j&&(i===j||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(Q,V),(w.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new V(e.insertBefore(E(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}}ot._$litElement$=!0,ot.finalized=!0,st.litElementHydrateSupport?.({LitElement:ot});const rt=st.litElementPolyfillSupport;rt?.({LitElement:ot}),(st.litElementVersions??=[]).push("4.2.2");const at={sphere:!0,dayNight:!0};function lt(t){t.gets++}function ht(t){const e=t.fetches-t.failures;return{gets:t.gets,cacheHits:t.cacheHits,backoffs:t.backoffs,expired:t.expired,fetches:t.fetches,failures:t.failures,retries:t.retries,elapsed:e>0?t.fetchMsTotal/e:null,lastAttemptAt:t.lastAttemptAt}}class ct{constructor(){this.failures=new Map,this.cooldowns=new Map,this.lastConfirmed=new Map}inCooldown(t){return Date.now()<(this.cooldowns.get(t)??0)}getStale(t){return this.lastConfirmed.get(t)??null}recordFailure(t,e){const i=(this.failures.get(t)??0)+1;this.failures.set(t,i);const n=Math.min(216e5,6e4*2**(i-1));this.cooldowns.set(t,Date.now()+Math.max(n,e??0))}recordSuccess(t,e){this.failures.delete(t),this.cooldowns.delete(t),this.lastConfirmed.set(t,e)}clear(){this.failures.clear(),this.cooldowns.clear(),this.lastConfirmed.clear()}}const dt=new class{constructor(){this.entries=new Map,this.decoded=new Map,this.backoff=new ct,this.lastChecked=new Map}get(t,e){const i=this.entries.get(t);return null!=i&&Date.now()-i.fetchedAt<e?i.image:null}getEntry(t){return this.entries.get(t)??null}getStale(t){return this.backoff.getStale(t)}set(t,e){this.entries.set(t,{image:e,fetchedAt:Date.now()})}isDecoded(t,e){return this.decoded.get(t)===e}markDecoded(t,e){this.decoded.set(t,e)}inCooldown(t){return this.backoff.inCooldown(t)}recordChecked(t){this.lastChecked.set(t,Date.now())}getLastCheckedAt(t){return this.lastChecked.get(t)}recordFailure(t,e){this.backoff.recordFailure(t,e)}recordSuccess(t,e){this.backoff.recordSuccess(t,e)}clear(){this.entries.clear(),this.decoded.clear(),this.backoff.clear(),this.lastChecked.clear()}},ut=15e3,gt="Image load timed out";class pt{constructor(t=dt){this.cache=t}get cacheKey(){return this.source}recover(t,e,i){throw t}hydrate(){return this.cache.getStale(this.cacheKey)??void 0}async resolve(t,e){lt(t);const i=this.checkCooldown(t);if(i)return i;try{const{image:i,fromCache:n}=await this.resolveCandidate(t);return this.cache.isDecoded(this.cacheKey,i.url)?(n||t.expired++,this.commit(i)):(e!==t&&lt(e),await this.fetchAndDecode(i,e))}catch(t){throw this.cache.recordFailure(this.cacheKey,function(t){const e=t?.retryAfterMs;return"number"==typeof e?e:void 0}(t)),t}}checkCooldown(t){if(!this.cache.inCooldown(this.cacheKey))return null;!function(t){t.backoffs++}(t);const e=this.cache.getStale(this.cacheKey);if(e)return e;throw new Error(`${this.source} is in cooldown after repeated failures`)}async resolveCandidate(t){const e=this.getCached();e&&function(t){t.cacheHits++}(t);return{image:e??await this.fetchCandidateUrl(t),fromCache:null!=e}}async fetchAndDecode(t,e){try{return await ft(t.url,e),this.commit(t)}catch(i){const n=await this.recover(i,t,e);return this.commit(n)}}commit(t){return this.cache.markDecoded(this.cacheKey,t.url),this.cache.recordSuccess(this.cacheKey,t),t}}async function mt(t,e){e.fetches++,e.lastAttemptAt=Date.now();const i=performance.now();try{const n=await t();return e.fetchMsTotal+=performance.now()-i,n}catch(t){throw e.failures++,t}}function ft(t,e){return mt(()=>function(t){const e=new Image,i=new Promise((t,i)=>{e.onerror=()=>i(new Error("Image failed to load"))});return e.src=t,Promise.race([e.decode(),i,new Promise((t,e)=>{setTimeout(()=>e(new Error(gt)),15e3)})])}(t),e)}const yt="https://epic.gsfc.nasa.gov";class bt extends Error{constructor(t,e){super(t),this.retryAfterMs=e}}const _t=36e5;class vt extends pt{constructor(){super(...arguments),this.source="earth"}getCached(){return this.cache.get("earth",_t)}fetchCandidateUrl(t){return mt(()=>async function(t=36e5,e=dt){const i=e.get("earth",t);if(i)return i;const n=await fetch(`${yt}/api/natural`,{signal:AbortSignal.timeout(ut)});if(!n.ok)throw new bt(`EPIC API request failed: ${n.status}`,function(t){if(!t)return;const e=Number(t);if(!Number.isNaN(e))return 1e3*e;const i=Date.parse(t);return Number.isNaN(i)?void 0:Math.max(0,i-Date.now())}(n.headers?.get("retry-after")??null));const s=await n.json(),o=s[s.length-1];if(!o)throw new Error("EPIC API returned no images");const r=function(t){const e=t.slice(0,4),i=t.slice(4,6),n=t.slice(6,8),s=t.slice(8,10),o=t.slice(10,12),r=t.slice(12,14);return{url:`${yt}/archive/natural/${e}/${i}/${n}/jpg/epic_1b_${t}.jpg`,date:new Date(Date.UTC(Number(e),Number(i)-1,Number(n),Number(s),Number(o),Number(r)))}}(o.identifier);return e.set("earth",r),r}(_t,this.cache),t)}}function wt(t,e=2){return String(t).padStart(e,"0")}function At(t,e){return Math.floor(t/e)*e}const xt=9e5,Mt=18e5;class Ct extends pt{constructor(){super(...arguments),this.source="sun"}getCached(){return kt(this.cache)}fetchCandidateUrl(){return Promise.resolve(function(t=dt){const e=kt(t);if(e)return e;const i=Dt(new Date(At(Date.now()-Mt,xt)));return t.set("sun",i),i}(this.cache))}async recover(t,e,i){if($t(t))throw t;const n=this.cache.getStale(this.source),s=await async function(t){const{confirmedMs:e,slotMs:i,maxReachMs:n,probe:s}=t;let o,r,a=t.missedMs;async function l(t){const e=await s(t);if(e.hit)return!0;if(e.abort)throw e.error;return o=e.error,!1}if(null!=e){const t=e+i;if(!(t<a&&await l(t)))return{foundMs:null,missedMs:a};r=t}else{const t=a;let e=i,s=null;for(;;){const i=t-e;if(await l(i)){s=i;break}if(a=i,e===n)break;e=Math.min(2*e,n)}if(null==s)throw o;r=s}for(;a-r>i;){const t=At(r+(a-r)/2,i);await l(t)?r=t:a=t}return{foundMs:r,missedMs:a}}({confirmedMs:n?n.date.getTime():null,missedMs:e.date.getTime(),slotMs:xt,maxReachMs:2592e6,probe:St(i)});if(null==s.foundMs)return this.cache.set(this.source,n),this.cache.recordChecked(this.source),n;const o=Dt(new Date(s.foundMs));return this.cache.set(this.source,o),this.cache.recordChecked(this.source),o}}function $t(t){return t instanceof Error&&t.message===gt}function St(t,e=ft){return async i=>{!function(t){t.retries++}(t);try{return await e(Dt(new Date(i)).url,t),{hit:!0}}catch(t){return{hit:!1,abort:$t(t),error:t}}}}function kt(t){const e=t.getEntry("sun");if(!e)return null;const i=e.image.date.getTime()+xt+Mt,n=(t.getLastCheckedAt("sun")??0)+xt;return Date.now()<Math.max(i,n)?e.image:null}function Dt(t){const e=t.getUTCFullYear(),i=wt(t.getUTCMonth()+1),n=wt(t.getUTCDate());return{url:`https://sdo.gsfc.nasa.gov/assets/img/browse/${e}/${i}/${n}/${e}${i}${n}_${`${wt(t.getUTCHours())}${wt(t.getUTCMinutes())}00`}_1024_HMIIC.jpg`,date:t}}const Et="216x216_1x1_30p",It=36e5,Tt={2022:4955,2023:5048,2024:5187,2025:5415,2026:5587};class zt extends pt{get cacheKey(){return"moon"}constructor(t,e,i){super(i),this._referenceTime=e,this.source=t}getCached(){const t=this.cache.getEntry(this.cacheKey);return t&&t.image.url===Nt(this._referenceTime()).url?t.image:null}fetchCandidateUrl(){const t=Nt(this._referenceTime());return this.cache.set(this.cacheKey,t),Promise.resolve(t)}}function Pt(t,e){const i=t.getUTCFullYear(),n=Tt[i];if(null==n)throw new Error(`No NASA SVS moon product is published for ${i}`);const s=100*Math.floor(n/100),o=Math.floor((t.getTime()-Date.UTC(i,0,1))/It)+1;return`https://svs.gsfc.nasa.gov/vis/a000000/a${wt(s,6)}/a${wt(n,6)}/frames/${e}/moon.${wt(o,4)}.jpg`}function Nt(t,e=Et){const i=new Date(Math.round(t.getTime()/It)*It);return{url:Pt(i,e),date:i}}const Bt=["mymoon","moon","earth","sun"],Lt=["moon","sun","earth-url","earth-img"],Ot={moon:{hasCacheStep:!0,canRetry:!1},sun:{hasCacheStep:!0,canRetry:!0},"earth-url":{hasCacheStep:!0,canRetry:!1},"earth-img":{hasCacheStep:!1,canRetry:!1}},Ut={mymoon:{label:"NASA SVS Moon",tile:"MY MOON",tooltip:"Moon from your sky · NASA SVS render",body:"MOON",verb:"rendered",instrument:"NASA SVS",disc:.95,target:.87,onByDefault:!0,debugRow:{url:"moon",img:"moon"},skyFrame:!0},moon:{label:"NASA SVS Moon",tile:"MOON",tooltip:"Moon from Earth's centre · NASA SVS render",body:"MOON",verb:"rendered",instrument:"NASA SVS",disc:.95,target:.87,onByDefault:!1,debugRow:{url:"moon",img:"moon"},skyFrame:!1},earth:{label:"DSCOVR Earth",tile:"EARTH",tooltip:"Earth from Sun–Earth L1 · DSCOVR spacecraft",body:"EARTH",verb:"captured",instrument:"NOAA DSCOVR EPIC",disc:.82,target:.87,onByDefault:!1,debugRow:{url:"earth-url",img:"earth-img"},skyFrame:!1},sun:{label:"SDO HMI Continuum",tile:"SUN",tooltip:"Sun from Earth geosync orbit · SDO spacecraft",body:"SUN",verb:"captured",instrument:"NASA SDO HMI",disc:.945,target:.8,onByDefault:!1,debugRow:{url:"sun",img:"sun"},skyFrame:!1}};class Ht{constructor(){this._inFlight={};const t=()=>new Date;this._resolvers={mymoon:new zt("mymoon",t),moon:new zt("moon",t),earth:new vt,sun:new Ct},this._debug=Object.fromEntries(Lt.map(t=>[t,{gets:0,cacheHits:0,backoffs:0,expired:0,fetches:0,failures:0,retries:0,fetchMsTotal:0,lastAttemptAt:null}]))}debugStats(){return Object.fromEntries(Lt.map(t=>[t,ht(this._debug[t])]))}hydrate(t){const e={};for(const i of t){const t=this._resolvers[i].hydrate();t&&(e[i]=t)}return e}async resolveAll(t){const e=t.filter(t=>!this._inFlight[t]);for(const t of e)this._inFlight[t]=!0;const i=await Promise.allSettled(e.map(t=>{const{url:e,img:i}=Ut[t].debugRow;return this._resolvers[t].resolve(this._debug[e],this._debug[i])}));return e.map((t,e)=>(this._inFlight[t]=!1,{source:t,result:i[e]}))}}const Ft=["mymoon"];class Rt{constructor(){this.mode="none",this.url=null,this.date=null,this.loaded=!1,this.error=null}applyImage(t,e){this.loaded=!1,this.url=t,this.date=e}close(){this.mode="none",this.url=null,this.date=null,this.error=null}fail(t){this.error=t,this.mode="none",this.url=null,this.date=null}}class jt{constructor(t,e=new Ht){this._panel=new Rt,this._open=!1,this._mode="off",this._sources=Ft,this._autoIntervalMs=6e4,this._slideIndex=0,this._autoSwitchTimer=null,this._onChange=t,this._debugStartedAt=Date.now(),this._resolver=e,this._images=this._resolver.hydrate(Bt)}get panelMode(){return this._panel.mode}get imageUrl(){return this._panel.url}get imageDate(){return this._panel.date}get imageLoaded(){return this._panel.loaded}get error(){return this._panel.error}get isOpen(){return this._open}get mode(){return this._mode}get images(){return this._images}get debugStats(){return this._resolver.debugStats()}get displaySources(){return"slide"===this._mode?[this._sources[this._slideIndex]]:this._sources}viewModel(t="overlay"){return{error:this._panel.error,panelSource:this._panel.mode,imageUrl:this._panel.url,imageDate:this._panel.date,imageLoaded:this._panel.loaded,showStrip:this._open&&("below"===t||"none"===this._panel.mode),thumbnails:this.displaySources.map(t=>{const e=this._images[t];return{source:t,url:e?.url??null,date:e?.date??null}}),debugStats:this.debugStats,debugStartedAt:this._debugStartedAt}}configure(t,e,i){this._mode=t,this._sources=e,this._autoIntervalMs=i,this._open="off"!==t,this._slideIndex>=e.length&&(this._slideIndex=0),null!=this._autoSwitchTimer&&this._startAutoSwitchTimer()}start(){this._startAutoSwitchTimer(),this._open&&this.refresh()}stop(){clearInterval(this._autoSwitchTimer??void 0),this._autoSwitchTimer=null}tick(){this._open&&this.refresh()}toggle(){this._open=!this._open,this._open?(this._panel.error=null,this._onChange(),this.refresh()):this.closePanel()}openPanel(t){if(this._panel.mode===t)return void this.closePanel();this._panel.mode=t,this._panel.error=null;const e=this._images[t];e?(this._panel.applyImage(e.url,e.date),this._panel.loaded=!0):(this._panel.url=null,this._panel.date=null,this._panel.loaded=!1,this.refresh()),this._onChange()}closePanel(){this._panel.close(),this._onChange()}onImageLoad(){this._panel.loaded=!0,this._onChange()}onImageLoadError(){"none"!==this._panel.mode&&(this._panel.fail(`${Ut[this._panel.mode].label} image unavailable`),this._onChange())}onSunThumbError(){delete this._images.sun,this._onChange()}_startAutoSwitchTimer(){clearInterval(this._autoSwitchTimer??void 0),"slide"===this._mode?this._autoSwitchTimer=setInterval(()=>{this._advanceSlide()},this._autoIntervalMs):this._autoSwitchTimer=null}_advanceSlide(){this._slideIndex=(this._slideIndex+1)%this._sources.length,this._onChange()}async refresh(){const t=await this._resolver.resolveAll(this._sources);for(const{source:e,result:i}of t)"fulfilled"===i.status?(this._images[e]=i.value,this._panel.mode===e&&(this._panel.applyImage(i.value.url,i.value.date),this._panel.loaded=!0)):this._panel.mode!==e||this._images[e]||this._panel.fail(`${Ut[e].label} image unavailable`);this._onChange()}}const Zt={1:800,2:640,3:480,4:320};function Yt(t,e){if(t)try{return new Intl.DateTimeFormat("en-US",{timeZone:t}),t}catch{}return function(t){const e=Math.round(t/15);return`Etc/GMT${e<=0?"+":"-"}${Math.abs(e)}`}(e)}function qt(t){const e=null==t.default_zoom||t.default_zoom<1||t.default_zoom>4?1:t.default_zoom,i=Number(t.refresh_mins),n=Number.isFinite(i)&&i>=.1?6e4*i:6e4,s=!1!==t.periodic_zoom_change,o=Number(t.periodic_zoom_max),r=Number.isInteger(o)&&o>=2&&o<=4?o:4,a=!1!==t.zoom_animate,l="dark"===t.theme||"light"===t.theme?t.theme:"auto",h="south"===t.ecliptic_view,c={sphere:"2d"!==t.display,dayNight:!1!==t.shading},d=t.location?.latitude,u=t.location?.longitude,g="number"==typeof d&&"number"==typeof u&&d>=-90&&d<=90&&u>=-180&&u<=180?{lat:d,lon:u,timezone:Yt(t.location?.timezone,u)}:null,p=t.location?.name||null,m=function(t){if("number"==typeof t)return t>0?`max-height: ${t}px`:"";if("string"==typeof t){const e=/^(\d+(?:\.\d+)?)px$/.exec(t);if(e)return`max-height: ${e[1]}px`;const i=/^(\d+(?:\.\d+)?)%$/.exec(t);if(i){const t=Number(i[1]);return t>0?"aspect-ratio: "+100/t:""}}return""}(t.height),f=function(t){const e=t?.mode;return"slide"===e?"slide":"off"===e||"none"===e||"closed"===e?"off":"show"}(t.gallery),y="below"===t.gallery?.position?"below":"overlay",b="circle"===t.gallery?.shape?"circle":"square",_=(v=t.gallery,Bt.filter(t=>!0===(v?.[t]??Ut[t].onByDefault)));var v;const w=Number(t.gallery?.slide_interval_secs),A=Number.isFinite(w)&&w>=.1?1e3*w:6e4,x=!0===t.gallery?.mymoon_tint;return{zoomLevel:e,refreshMs:n,periodicZoomChange:s,periodicZoomMax:r,zoomAnimate:a,colors:t.colors??{},theme:l,eclipticView:h,shade:c,locationOverride:g,locationNameOverride:p,heightStyle:m,galleryMode:f,galleryPosition:y,galleryShape:b,gallerySources:_,galleryIntervalMs:A,mymoonTint:x}}const Xt=((t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(n,t,i)})`
  :host {
    display: block;
    /* HA's grid-based views (sections/masonry) stretch grid items to fill their row by
       default. Without this, the host box grows past the card's own content height,
       leaving blank host background below the nav bar. */
    align-self: start;
    color-scheme: light dark;
    background: var(--ha-card-background, var(--card-background-color, var(--primary-background-color, Canvas)));
    color: var(--primary-text-color, CanvasText);
    /* Square corners by design — the card fills its box edge to edge and does not
       follow the HA theme's --ha-card-border-radius. */
    border-radius: 0;
    overflow: hidden;
  }
  .card {
    border-radius: 0;
    overflow: hidden;
    padding: 0px;
    color: inherit;
    font-family: sans-serif;
  }
  .date {
    font-size: 11px;
    color: inherit;
    margin: 2px 2px;
  }
  .solar-view-wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .status-bar-row {
    position: relative;
    flex: 0 0 auto;
  }
  .status-bar {
    position: relative;
    background: var(--secondary-background-color, color-mix(in srgb, currentColor 10%, transparent));
    font-size: 10px;
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 8px;
    pointer-events: none;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .status-bar span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status-bar span:first-child {
    min-width: 0;
  }
  #solar-view {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
  }
  #solar-view.hidden {
    display: none;
  }
  /* Absolutely positioned so the SVG's own width/height="100%" can't feed back into
     #solar-view's own size — a percentage-height replaced child inside an aspect-ratio box
     is a circular dependency that makes browsers ignore the aspect-ratio override entirely. */
  #solar-view svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    cursor: grab;
    user-select: none;
    touch-action: none;
  }
  /* The clipping box: fixed square, sized/height-capped the way .image-view itself used to be.
     The sky tile's image rotates inside it (see .image-view below); overflow: hidden crops
     whatever the rotated square swings past this frame's own edge, so the panel stays a square
     like every other source's — the rotated image can't ride up over the status bar above it,
     because it never paints outside this frame's own box in the first place. */
  .image-view-frame {
    display: none;
    /* Static by default, which would let .no-sky's inset escape to the card. */
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    /* The sky tile is the only image ever rotated here, and the corners a rotated square
       swings away from show this, not the image's own background — plain black, always,
       same as every other panel. */
    background: #000;
  }
  .image-view-frame.visible {
    display: block;
  }
  .image-view {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
    cursor: pointer;
    display: block;
  }
  /* The sky-elevation wash and #178's Moon altitude-extinction tint, same mix-blend-mode: color
     trick as .gallery-thumb-tint but sized to the whole square frame rather than clipped to a
     disc — the panel image has no circle crop to match (see discStyle()). Two stacked layers,
     same order as the thumbnail: wash always on, extinction on top of it when
     gallery.mymoon_tint is enabled (see card.ts). */
  .image-view-tint {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: color;
    pointer-events: none;
  }
  /* Stands in for the image, in the tile and in the full-screen panel alike: fills whichever
     box it lands in and centres on both axes, so one rule serves a 104px thumbnail and a
     full-width panel without either needing to know about the other. */
  .no-sky {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px;
    box-sizing: border-box;
    background: #000;
    /* Fixed white, not currentColor: the tile and the panel frame are #000 in every theme
       (see .gallery-thumb / .image-view-frame), so a theme-following colour would resolve to
       dark ink on black the moment the card is on a light theme. Same reasoning as
       .gallery-label/.gallery-age below, just dimmer — this reads as an absence, not a label. */
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.2;
    cursor: pointer;
    font-size: 1rem;
  }
  /* Only the tile scales with its own width, against the container query .gallery-thumb
     already declares — floored in px so it stays legible on a narrow card. Deliberately not
     on the shared rule above: .image-view-frame is not a query container, so cqw there would
     resolve against the viewport and render the panel's copy many times too large. */
  .gallery-thumb .no-sky {
    font-size: max(9px, 13cqw);
  }
  .gallery {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 2px;
    padding: 2px;
    box-sizing: border-box;
  }
  /* Floats over the bottom of the solar view: costs no card height, covers the outer orbits. */
  .gallery-overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  /* A plain flex item of .solar-view-wrapper instead, so the card grows by the strip's own
     height and nothing is hidden behind it. Only flex-shrink needs stating — everything else
     is already the default now that .gallery itself no longer positions. */
  .gallery-below {
    flex-shrink: 0;
  }
  .gallery-thumb {
    /* Shares the row rather than claiming a fixed 20%: four tiles ship, and debug:true adds a
       fifth, which at a fixed basis overflows once gaps and padding are counted. */
    flex: 1 1 0;
    max-width: 20%;
    position: relative;
    aspect-ratio: 1;
    padding: 0;
    /* Buttons get border-box from the UA stylesheet, a plain <div> does not — without this
       the moon tile's 1px border falls outside its 20% flex-basis and it renders 2px larger
       than the Earth/Sun tiles beside it. */
    box-sizing: border-box;
    /* Explicit, not omitted: .gallery-thumb is a <button> on the fetched tiles, and dropping
       the rule entirely hands it back the UA stylesheet's 2px outset ButtonBorder. */
    border: 0;
    /* Every source is cropped to its body and rescaled to a shared target size (see
       discStyle()), so a margin of tile the disc doesn't reach is now the normal case, not
       just the rotating sky tile's — the backdrop belongs here for all of them. */
    background: #000;
    overflow: hidden;
    cursor: pointer;
    /* Makes the tile itself the query container, so the caption below can size against the
       tile's real width rather than a fixed px guess that only fits on a wide card. */
    container-type: inline-size;
  }
  .gallery-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  /* The sky tile's day/twilight/night color, washed over the photo itself rather than filling
     the tile behind it — a flat colored square reads oddly once the Moon disc is gone (below
     horizon, nothing to wash), so the color only ever shows up attached to the Moon that's
     wearing it. mix-blend-mode: color keeps the photo's own luminance (the phase's lit/dark
     shape stays legible) while replacing its hue/saturation with the overlay's — the same
     shape and clip-path/transform as the image underneath it, so the tint never spills past
     the disc's own edge. Pointer-events: none so it doesn't steal the tile's click. */
  .gallery-thumb-tint {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: color;
    pointer-events: none;
  }
  /* discStyle() clip-paths the <img> alone, and the disc's own corners are already black —
     the same color as .gallery-thumb's backdrop — so a circle-clipped photo on a square black
     tile is pixel-identical to a square-clipped one. The tile itself has to round too for
     gallery.shape: circle to read as anything. */
  /* .gallery-thumb's black background stays doing double duty: the loading filler before the
     <img> has a decoded frame, and — once loaded — the thin ring TARGET_FRACTION deliberately
     leaves outside the disc (see discStyle()) rather than scaling all the way to the tile's
     own edge. */
  .gallery-thumb-circle {
    border-radius: 50%;
  }
  .gallery-info {
    position: absolute;
    /* Spans the whole tile so the two lines can take its top and bottom edges. Stacked and
       centred rather than a single row split left/right: once the thumbnails are clipped to
       the body, a full-width row runs off the disc at both ends, and centring on the tile
       centres on the body too — the sources all sit their subject dead centre in frame. */
    inset: 1px 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    /* font-size and line-height are pinned on the container, not just the spans, because
       the tiles are built from different elements — a <div> for the moon, a <button> for the
       fetched sources — and a <button> takes its font from the UA stylesheet (13.333px)
       while the <div> inherits the card's (16px). Left to inherit, the caption's height is
       decided by the element type and the engine's default line-height, which is how the
       moon's caption ended up sitting higher than its neighbours'.
       Scales with the tile (see container-type above) instead of a fixed 8px, so the longest
       phase name still fits on a narrow card and stays legible on a wide one — same idea as
       the SVG body labels, which scale with the card because the whole SVG does. The old 9px
       ceiling stopped the caption growing past a small card's size while the planet labels
       beside it kept scaling; 40px is a backstop against a pathological giant tile, not a
       real-world limit — a tile would need to be ~440px wide before 9cqw even reaches it. */
    font-size: clamp(6px, 9cqw, 40px);
    line-height: 1;
    font-family: sans-serif;
    pointer-events: none;
  }
  /* A circular tile's own curve pulls away from its corners fastest right where the top and
     bottom text sits — the same 1px inset a square tile's flat edge takes reads as cramped
     against that curve. 2px more top and bottom (not the sides, where the curve is nearly flat
     at mid-height) gives the text the same visual clearance the square tile already has. */
  .gallery-thumb-circle .gallery-info {
    inset: 4px 2px;
  }
  .gallery-label,
  .gallery-age {
    font: inherit;
    color: #fff;
    /* Three stacked shadows, not one. The caption used to sit entirely on the image's black
       margin; now the thumbnails are clipped to the body itself, so its ends overhang the
       card — white on a light theme's white. A single 2px glow was not enough contrast to
       survive that, and the caption also has to stay readable where it crosses a sunlit limb,
       so a solid backdrop is out: it would put a dark bar under a floating disc. */
    text-shadow:
      0 0 2px #000,
      0 0 3px #000,
      0 1px 2px #000;
    white-space: nowrap;
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 2px;
    position: relative;
    background: var(--secondary-background-color, color-mix(in srgb, currentColor 10%, transparent));
  }
  .nav button {
    background: color-mix(in srgb, currentColor 15%, transparent);
    color: inherit;
    border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
    border-radius: 6px;
    height: 18px;
    line-height: 18px;
    padding: 0 5px;
    min-width: 20px;
    font-size: 10px;
    cursor: pointer;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .nav button:hover {
    background: color-mix(in srgb, currentColor 25%, transparent);
  }
  .nav button .icon {
    filter: grayscale(1);
    display: inline-block;
  }
  /* "Now" lights up while the view sits off-default, so there's a visible way back. */
  button[data-action="today"].active {
    background: var(--accent-color, #f59e0b);
    border-color: var(--accent-color, #f59e0b);
    color: #fff;
  }
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0;
  }
  .btn-group button {
    border-radius: 0;
  }
  .btn-group button:first-child {
    border-radius: 6px 0 0 6px;
  }
  .btn-group button:last-child {
    border-radius: 0 6px 6px 0;
  }
  .btn-group button:only-child {
    border-radius: 6px;
  }
  .nav-spacer {
    width: 8px;
  }
  .zoom-level {
    background: color-mix(in srgb, currentColor 15%, transparent);
    color: inherit;
    border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
    border-bottom: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
    height: 18px;
    line-height: 18px;
    padding: 0 4px;
    font-size: 9px;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .debug-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 1;
    box-sizing: border-box;
    pointer-events: none;
    background: rgba(0, 0, 0, 0.55);
    color: #00e676;
    font-family: monospace;
    font-size: 10px;
    line-height: 1.3;
    padding: 3px 6px;
  }
  .debug-caption {
    color: #66bb9a;
    margin-top: 2px;
  }
  .debug-overlay table {
    width: 100%;
    border-collapse: collapse;
  }
  .debug-overlay th,
  .debug-overlay td {
    padding: 0 6px 0 0;
    text-align: right;
    white-space: nowrap;
  }
  .debug-overlay th:first-child,
  .debug-overlay td:first-child {
    text-align: left;
  }
  .debug-overlay th {
    color: #66bb9a;
    font-weight: normal;
  }
  .debug-total td {
    border-top: 1px solid rgba(0, 230, 118, 0.3);
    color: #66bb9a;
  }
  .card-version {
    font-size: 9px;
    color: #9e9e9e;
    user-select: none;
    font-family: sans-serif;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`,Qt=Math.PI/180,Gt=t=>Math.sin(t*Qt),Jt=t=>Math.cos(t*Qt),Vt=t=>(t%360+360)%360,Kt=[[0,0,1,0,6288774],[2,0,-1,0,1274027],[2,0,0,0,658314],[0,0,2,0,213618],[0,1,0,0,-185116],[0,0,0,2,-114332],[2,0,-2,0,58793],[2,-1,-1,0,57066],[2,0,1,0,53322],[2,-1,0,0,45758],[0,1,-1,0,-40923],[1,0,0,0,-34720],[0,1,1,0,-30383],[2,0,0,-2,15327],[0,0,1,2,-12528],[0,0,1,-2,10980],[4,0,-1,0,10675],[0,0,3,0,10034],[4,0,-2,0,8548]],Wt=[[0,0,0,1,5128122],[0,0,1,1,280602],[0,0,1,-1,277693],[2,0,0,-1,173237],[2,0,-1,1,55413],[2,0,-1,-1,46271],[2,0,0,1,32573],[0,0,2,1,17198],[2,0,1,-1,9266],[0,0,2,-1,8822],[2,-1,0,-1,8216]];function te(t){return t.getTime()/864e5+2440587.5-2451545}function ee(t){return Vt(280.46061837+360.98564736629*te(t))}function ie(t){const e=te(t),i=e/36525,n=297.8501921+445267.1114034*i,s=357.5291092+35999.0502909*i,o=134.9633964+477198.8675055*i,r=93.272095+483202.0175233*i,a=t=>t.reduce((t,[e,i,a,l,h])=>t+1e-6*h*Gt(e*n+i*s+a*o+l*r),0),l=218.3164477+481267.88123421*i+a(Kt),h=a(Wt),c=23.4393-3.563e-7*e;return{eclipticLonDeg:Vt(l),raDeg:Vt(Math.atan2(Gt(l)*Jt(c)-(d=h,Math.tan(d*Qt)*Gt(c)),Jt(l))/Qt),decDeg:Math.asin(Gt(h)*Jt(c)+Jt(h)*Gt(c)*Gt(l))/Qt};var d}const ne=Math.PI/180,se=t=>Math.sin(t*ne),oe=t=>Math.cos(t*ne);function re(t,e,i){const{raDeg:n,decDeg:s}=ie(t),o=ee(t)+i-n;return{parallacticDeg:Math.atan2(se(o),(r=e,Math.tan(r*ne)*oe(s)-se(s)*oe(o)))/ne,altitudeDeg:Math.asin(se(e)*se(s)+oe(e)*oe(s)*oe(o))/ne};var r}const ae=Math.PI/180;function le(t,e){const i=function(t){const e=(t.getTime()/864e5+2440587.5-2451545)/36525,i=(357.52911+35999.05029*e)*ae,n=(280.46646+36000.76983*e+((1.914602-.004817*e)*Math.sin(i)+.019993*Math.sin(2*i)+289e-6*Math.sin(3*i)))*ae,s=(23.439291-.0130042*e)*ae;return{eclipticLonDeg:(n/ae%360+360)%360,raDeg:Math.atan2(Math.cos(s)*Math.sin(n),Math.cos(n))/ae,decDeg:Math.asin(Math.sin(s)*Math.sin(n))/ae}}(e);return{sun:i,hourAngleRad:(ee(e)+t-i.raDeg)*ae}}function he(t,e,i){const{sun:n,hourAngleRad:s}=le(e,i),o=t*ae,r=n.decDeg*ae,a=Math.sin(o)*Math.sin(r)+Math.cos(o)*Math.cos(r)*Math.cos(s);return Math.asin(Math.max(-1,Math.min(1,a)))/ae}const ce=-.8333;function de(t){return t>=ce?"Day":t>=-6?"Civil Twilight":t>=-12?"Nautical Twilight":t>=-18?"Astronomical Twilight":"Night"}function ue(t){return`${String(t.getFullYear()).slice(-2)}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}const ge=t=>t<60?`${t}m`:`${Math.floor(t/60)}h`;function pe(t,e){const i=Math.floor((t.getTime()-e.getTime())/6e4);return i<=0?function(t,e){const i=Math.floor((e.getTime()-t.getTime())/6e4);return i<1?"just now":`${ge(i)} ago`}(t,e):`in ${ge(i)}`}function me(t){const e=Math.floor(t/6e4);if(e<1)return`${Math.floor(t/1e3)}s`;if(e<60)return`${e}m`;const i=Math.floor(e/60),n=e%60;return n?`${i}h ${n}m`:`${i}h`}function fe(t,e,i){if(!t)return j;const n=he(t.lat,t.lon,i),s=de(n),o=Math.round(n),r=Math.round(re(i,t.lat,t.lon).altitudeDeg),a=function(t,e,i){const n=de(he(t,e,i));let s=null,o=null,r=null;for(let a=1;a<=1440;a++){const l=i.getTime()+6e4*a,h=de(he(t,e,new Date(l)));if(h!==n){s=l-6e4,o=l,r=h;break}}if(null===s||null===o||null===r)return null;for(let i=0;i<10;i++){const i=Math.floor((s+o)/2);de(he(t,e,new Date(i)))===n?s=i:o=i}return{time:new Date(o),toMode:r}}(t.lat,t.lon,i),l=a?new Intl.DateTimeFormat("en-US",{timeZone:t.timezone||"UTC",hour:"2-digit",minute:"2-digit",hour12:!1,timeZoneName:t.zoneOverride?"short":void 0}):null;return F`<div class="status-bar">
    <span>${e||""} | ${s} (${o}°) | Moon (${r}°)</span>
    ${a&&l?F`<span>Next: ${a.toMode} (${l.format(a.time)})</span>`:j}
  </div>`}function ye(t,e,i,n){return t.error?F`<div class="status-bar">
      <span>${t.error}</span>
    </div>`:"none"===t.panelSource?fe(e,i,n):function(t,e,i,n,s){const o=Ut[t],r=s?`${o.verb} ${e} · ${pe(i,n)}`:"loading…";return F`<div class="status-bar">
    <span>${o.body} · ${o.instrument} · ${r}</span>
  </div>`}(t.panelSource,t.imageDate?ue(t.imageDate):"",t.imageDate??new Date,new Date,t.imageLoaded)}const be=864e5,_e={hour:12e5,day:be,month:5*be},ve={hour:"12h",day:"36d",month:"6mo"},we=Math.floor(5e3/36);class Ae{constructor(t,e=new Date){this._currentDate=e,this._isLiveMode=!0,this._isReplaying=!1,this._replayTimer=null,this._navUnit="hour",this._onChange=t}get currentDate(){return this._currentDate}set currentDate(t){this._currentDate=t}get isLiveMode(){return this._isLiveMode}set isLiveMode(t){this._isLiveMode=t}get isReplaying(){return this._isReplaying}get replayLabel(){return ve[this._navUnit]}tick(){this._isLiveMode&&(this._currentDate=new Date,this._onChange())}goLive(){this._navUnit="hour",this._isLiveMode=!0,this._currentDate=new Date,this._onChange()}navigate(t,e){this._navUnit=e,this._isLiveMode=!1,this._currentDate=new Date(this._currentDate.getTime()+t),this._onChange()}navigateMonths(t){this._navUnit="month",this._isLiveMode=!1,this._currentDate=function(t,e){const i=new Date(t);return i.setMonth(i.getMonth()+e),i}(this._currentDate,t),this._onChange()}toggleReplay(){null!==this._replayTimer?this._cancelReplay():this._startReplay()}stop(){clearInterval(this._replayTimer??void 0),this._replayTimer=null}_startReplay(){const t=this._isLiveMode,e=this._currentDate;this._isLiveMode=!1,this._isReplaying=!0;let i=0;this._currentDate=this._replayFrame(e,0),this._onChange(),this._replayTimer=setInterval(()=>{i++,i>=36?this._finishReplay(e.getTime(),t):(this._currentDate=this._replayFrame(e,i),this._onChange())},we)}_replayFrame(t,e){const i=36-e;return new Date(t.getTime()-i*_e[this._navUnit])}_finishReplay(t,e){clearInterval(this._replayTimer??void 0),this._replayTimer=null,this._isReplaying=!1,this._isLiveMode=e,this._currentDate=new Date(t),this._onChange()}_cancelReplay(){clearInterval(this._replayTimer??void 0),this._replayTimer=null,this._isReplaying=!1,this._onChange()}}const xe={moon:"SVS/M",sun:"SDO/S","earth-url":"DSCOVR/E url","earth-img":"DSCOVR/E img"};function Me(t){return null==t?"—":`${Math.round(t)}ms`}function Ce(t,e){return F`<div class="debug-overlay">
    <table>
      <tr>
        <th>source</th>
        <th>get</th>
        <th>cache</th>
        <th>back</th>
        <th>expire</th>
        <th>fetch</th>
        <th>fail</th>
        <th>retry</th>
        <th>elapsed</th>
        <th>ago</th>
      </tr>
      ${Lt.map(e=>{const i=t[e],{hasCacheStep:n,canRetry:s}=Ot[e];return F`<tr>
          <td>${xe[e]}</td>
          <td>${i.gets}</td>
          <td>${n?i.cacheHits:"—"}</td>
          <td>${i.backoffs}</td>
          <td>${n?i.expired:"—"}</td>
          <td>${i.fetches}</td>
          <td>${i.failures}</td>
          <td>${s?i.retries:"—"}</td>
          <td>${Me(i.elapsed)}</td>
          <td>${null==i.lastAttemptAt?"—":me(Date.now()-i.lastAttemptAt)}</td>
        </tr>`})}
      ${(()=>{const e=function(t){const e=Lt.map(e=>t[e]),i=e.map(t=>t.elapsed).filter(t=>null!=t),n=t=>e.reduce((e,i)=>e+t(i),0);return{gets:Math.max(...e.map(t=>t.gets)),cacheHits:n(t=>t.cacheHits),backoffs:n(t=>t.backoffs),expired:n(t=>t.expired),fetches:n(t=>t.fetches),failures:n(t=>t.failures),retries:n(t=>t.retries),elapsed:i.length?i.reduce((t,e)=>t+e,0)/i.length:null,lastAttemptAt:null}}(t);return F`<tr class="debug-total">
          <td>total</td>
          <td>${e.gets}</td>
          <td>${e.cacheHits}</td>
          <td>${e.backoffs}</td>
          <td>${e.expired}</td>
          <td>${e.fetches}</td>
          <td>${e.failures}</td>
          <td>${e.retries}</td>
          <td>${Me(e.elapsed)}</td>
          <td>—</td>
        </tr>`})()}
    </table>
    <div class="debug-caption">since ${ue(new Date(e))} (${me(Date.now()-e)})</div>
  </div>`}const $e=[{name:"Halley",semiMajorAxis:17.834,eccentricity:.967,periodDays:27510,longitudeOfPerihelion:111.33,meanAnomalyJ2000:38.38,color:"#88ccff",size:4,tailLength:40}],Se=Date.UTC(2e3,0,1,12,0,0);function ke(t){return t*Math.PI/180}function De(t,e,i,n,s,o){const r=function(t){return(t.getTime()-Se)/864e5}(o),a=2*Math.PI/e;let l=ke(t)+a*r;l=(l%(2*Math.PI)+2*Math.PI)%(2*Math.PI);const h=function(t,e){let i=t;for(let n=0;n<10;n++){i-=(i-e*Math.sin(i)-t)/(1-e*Math.cos(i))}return i}(l,i),c=i,d=2*Math.atan2(Math.sqrt(1+c)*Math.sin(h/2),Math.sqrt(1-c)*Math.cos(h/2)),u=n*(1-c*Math.cos(h));return{angle:((d+ke(s))%(2*Math.PI)+2*Math.PI)%(2*Math.PI),radius:u,trueAnomaly:d}}function Ee(t,e){return De(t.meanLongitudeJ2000-t.longitudeOfPerihelion,t.periodDays,t.eccentricity,t.au,t.longitudeOfPerihelion,e)}function Ie(t,e){return De(t.meanAnomalyJ2000,t.periodDays,t.eccentricity,t.semiMajorAxis,t.longitudeOfPerihelion,e)}const Te={name:"Sun",color:"#ffd700",size:16},ze=[{name:"Mercury",au:.39,periodDays:87.97,color:"#a9a29b",size:6,meanLongitudeJ2000:252.25,eccentricity:.20563,longitudeOfPerihelion:77.45645},{name:"Venus",au:.72,periodDays:224.7,color:"#e6ca97",size:9,meanLongitudeJ2000:181.98,eccentricity:.00677,longitudeOfPerihelion:131.53298},{name:"Earth",au:1,periodDays:365.25,color:"#3f7fc4",size:10,meanLongitudeJ2000:100.46,eccentricity:.01671,longitudeOfPerihelion:102.94719},{name:"Mars",au:1.52,periodDays:687,color:"#c04a1f",size:7,meanLongitudeJ2000:355.45,eccentricity:.0934,longitudeOfPerihelion:336.04084},{name:"Jupiter",au:5.2,periodDays:4332.6,color:"#cf9b5f",size:21,meanLongitudeJ2000:34.4,eccentricity:.04849,longitudeOfPerihelion:14.75385},{name:"Saturn",au:9.58,periodDays:10759.2,color:"#e2c58c",size:25,meanLongitudeJ2000:49.94,eccentricity:.05551,longitudeOfPerihelion:92.43194},{name:"Uranus",au:19.22,periodDays:30688.5,color:"#9ad3df",size:13,meanLongitudeJ2000:313.23,eccentricity:.0463,longitudeOfPerihelion:170.96424},{name:"Neptune",au:30.05,periodDays:60182,color:"#3a53b0",size:13,meanLongitudeJ2000:304.88,eccentricity:.00899,longitudeOfPerihelion:44.97135}],Pe=ze[2],Ne={name:"Moon",color:"#c8c6c0",size:5},Be="currentColor",Le=800,Oe=400,Ue={"font-size":"11","font-family":"sans-serif","text-anchor":"middle"},He=Math.log(ze[0].au),Fe=Math.log(ze[ze.length-1].au);function Re(t){return 40+320*((Math.log(t)-He)/(Fe-He))}function je(t,e){const i=(t+e)/2,n=(e-t)/2;return{aPx:i,bPx:Math.sqrt(i*i-n*n),cPx:n,ePx:n/i}}function Ze(t,e,i,n,s){return{x:t+i*Math.cos(n),y:e+s*i*Math.sin(n)}}function Ye(t,e,i,n,s){const o=t*(1-e*e)/(1+e*Math.cos(i));return Ze(Oe,Oe,o,n,s)}function qe(t,e,i){const n=e*Math.PI/180,s=Math.cos(n),o=Math.sin(n);return{a:s,b:i*o,c:-o,d:i*s,e:Oe-t*s,f:Oe-i*t*o}}function Xe(t,e,i){const{a:n,b:s,c:o,d:r,e:a,f:l}=qe(t,e,i);return`matrix(${n}, ${s}, ${o}, ${r}, ${a}, ${l})`}function Qe(t,e){const i=document.createElementNS("http://www.w3.org/2000/svg",t);for(const[t,n]of Object.entries(e))i.setAttribute(t,String(n));return i}function Ge(t){return t.querySelector("defs")??t.insertBefore(Qe("defs",{}),t.firstChild)}const Je="color-mix(in srgb, currentColor 12%, transparent)",Ve=t=>({fill:`color-mix(in srgb, ${t} 28%, black)`,"fill-opacity":.92});const Ke="sphere-sprite";function We(t,e,i,n,s){const o=Ge(t);!function(t){if(t.querySelector(`#${Ke}`))return;const e=Qe("symbol",{id:Ke,viewBox:"0 0 1 1",preserveAspectRatio:"none"});e.appendChild(Qe("image",{href:"data:image/png;base64,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",width:1,height:1})),t.appendChild(e)}(o);const r=function(t){const e=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t);if(!e)throw new Error(`expected an #rgb or #rrggbb colour, got ${JSON.stringify(t)}`);const i=e[1].toLowerCase();return`#${3===i.length?i.replace(/./g,t=>t+t):i}`}(s),a=`tint-${r.slice(1)}`;if(!o.querySelector(`#${a}`)){const t=Number.parseInt(r.slice(1,3),16)/255,e=Number.parseInt(r.slice(3,5),16)/255,i=Number.parseInt(r.slice(5,7),16)/255,n=Qe("filter",{id:a,"color-interpolation-filters":"sRGB"});n.appendChild(Qe("feColorMatrix",{type:"matrix",values:`${t} 0 0 0 0  0 ${e} 0 0 0  0 0 ${i} 0 0  0 0 0 1 0`})),o.appendChild(n)}t.appendChild(Qe("use",{href:`#${Ke}`,x:e-n,y:i-n,width:2*n,height:2*n,filter:`url(#${a})`}))}function ti(t,e,{a:i,b:n,c:s,d:o,e:r,f:a}){const l=i*t,h=s*e,c=Math.hypot(l,h),d=Math.atan2(h,l),u=Math.max(-1,Math.min(1,(Oe-r)/c)),g=Math.acos(u),p=[d+g,d-g].map(l=>{const h=t*Math.cos(l),c=e*Math.sin(l);return{x:i*h+s*c+r,y:n*h+o*c+a,eccentricAnomaly:l}});return p[0].y<=p[1].y?[p[0],p[1]]:[p[1],p[0]]}function ei(t,e,i,n,s,o){const r=function(t,e,i,n,s={x:Oe,y:Oe}){const o=s.x-t,r=s.y-e;if(Math.hypot(o,r)<1e-9)return null;const a=Math.atan2(r,o),l=180*a/Math.PI,h=t+i*Math.cos(a+Math.PI/2),c=e+i*Math.sin(a+Math.PI/2);return`M ${h} ${c} A ${i} ${i} 0 0 1 ${t+i*Math.cos(a-Math.PI/2)} ${e+i*Math.sin(a-Math.PI/2)} A ${n*i} ${i} ${l} 0 0 ${h} ${c} Z`}(e,i,n,.22);if(null===r)return;if(t.appendChild(Qe("path",{d:r,...Ve(o)})),s===n)return;const a=180*Math.atan2(i-Oe,e-Oe)/Math.PI,l=Ge(t),h=Qe("clipPath",{id:"saturn-shadow"});h.appendChild(Qe("rect",{x:0,y:-n,width:s,height:2*n,transform:`translate(${e} ${i}) rotate(${a})`})),l.appendChild(h);const c=Qe("mask",{id:"saturn-core-cut"});c.appendChild(Qe("rect",{x:e-s,y:i-s,width:2*s,height:2*s,fill:"#fff"})),c.appendChild(Qe("circle",{cx:e,cy:i,r:n,fill:"#000"})),l.appendChild(c),t.appendChild(Qe("circle",{cx:e,cy:i,r:s,...Ve(o),"clip-path":"url(#saturn-shadow)",mask:"url(#saturn-core-cut)"}))}function ii(t,e,i,n,s=!0,o=at){const r=e===Oe&&i===Oe;o.sphere&&!r?We(t,e,i,n.size,n.color):t.appendChild(Qe("circle",{cx:e,cy:i,r:n.size,fill:n.color})),o.dayNight&&!r&&ei(t,e,i,n.size,n.size,n.color),s&&(t.appendChild(Qe("text",{x:e,y:i-n.size-6,style:`fill: ${Be}`,...Ue})).textContent=n.name)}function ni(t){const e=t.eccentricity,i=t.semiMajorAxis,n=Re(i*(1-e));let s=Re(i*(1+e));const o=Re(30.05);if(s>o){s=o+4*(s-o)}return{...je(n,s),rotationDeg:t.longitudeOfPerihelion}}function si(t,e,i){const{aPx:n,bPx:s,cPx:o,rotationDeg:r}=ni(e);t.appendChild(Qe("ellipse",{cx:0,cy:0,rx:n,ry:s,fill:"none",style:`stroke: ${Je}`,"stroke-width":1,"stroke-dasharray":"4, 8",transform:Xe(o,r,i)}))}function oi(t,e,i,n,s,o,r,a=at){const l=e-s,h=i-o,c=Math.sqrt(l*l+h*h)||1,d=l/c,u=h/c,g=r??n.tailLength,p=e+d*g,m=i+u*g;t.appendChild(Qe("line",{x1:e,y1:i,x2:p,y2:m,stroke:"rgba(136, 204, 255, 0.5)","stroke-width":2,"stroke-linecap":"round",opacity:"0.7"})),a.sphere?We(t,e,i,n.size,n.color):t.appendChild(Qe("circle",{cx:e,cy:i,r:n.size,fill:n.color})),a.dayNight&&ei(t,e,i,n.size,n.size,n.color),t.appendChild(Qe("text",{x:e,y:i-n.size-6,style:`fill: ${Be}`,...Ue})).textContent=n.name}const ri="color-mix(in srgb, currentColor 70%, transparent)";function ai(t,e,i,n){let s;if(null!=n){s=((e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600+n/15)%24+24)%24}else if(i){const{hours:t,minutes:n}=function(t,e){try{const i=new Intl.DateTimeFormat("en-US",{timeZone:e,hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(t),n=i.find(t=>"hour"===t.type),s=i.find(t=>"minute"===t.type);let o=Number(n?.value);return 24===o&&(o=0),{hours:o,minutes:Number(s?.value)}}catch{return{hours:t.getUTCHours(),minutes:t.getUTCMinutes()}}}(e,i);s=t+n/60}else s=e.getHours()+e.getMinutes()/60;return t+s/24*2*Math.PI}function li(t,e,i,n,s=-1,o={}){const r=function(t,e){return Ee(t,e).angle}(Pe,i),a=ai(r,i,n?.timezone,n?.lon),l=Ze(Oe,Oe,e,r,s),h=n&&null!=n.lat?he(n.lat,n.lon,i):function(t,e){const i=e+Math.PI,n=Math.atan2(Math.sin(t-i),Math.cos(t-i));return(Math.PI/2-Math.abs(n))*(180/Math.PI)}(a,r),c=n&&null!=n.lat?function(t,e,i){const{sun:n,hourAngleRad:s}=le(e,i),o=n.eclipticLonDeg*ae,r=n.raDeg*ae,a=23.439291*ae,l=t*ae,h=Math.cos(l)*Math.cos(s),c=Math.cos(l)*Math.sin(s),d=Math.sin(l),u=h*Math.cos(r)-c*Math.sin(r),g=(h*Math.sin(r)+c*Math.cos(r))*Math.cos(a)+d*Math.sin(a),p=Math.atan2(g,u);return Math.atan2(Math.sin(p-o),Math.cos(p-o))}(n.lat,n.lon,i):null,d=null!=c?r+Math.PI+c:a,{color:u,halfAngle:g}=function(t,e,i){let n;return n=t>=ce?i.cone_day??"color-mix(in srgb, currentColor 8%, transparent)":t>=-6?i.cone_twilight_civil??"color-mix(in srgb, color-mix(in srgb, rgb(255, 220, 160) 85%, currentColor 15%) 13%, transparent)":t>=-12?i.cone_twilight_nautical??"color-mix(in srgb, color-mix(in srgb, rgb(90, 130, 180) 85%, currentColor 15%) 17%, transparent)":t>=-18?i.cone_twilight_astronomical??"color-mix(in srgb, color-mix(in srgb, rgb(70, 50, 130) 85%, currentColor 15%) 24%, transparent)":i.cone_night??"color-mix(in srgb, color-mix(in srgb, rgb(30, 20, 60) 85%, currentColor 15%) 30%, transparent)",{color:n,halfAngle:t>=ce||t<-18?90:null!=e?180*Math.abs(e)/Math.PI:90-t}}(h,c,o);!function(t,e,i,n,s,o,r,a=-1){const l=Le,h=s*Math.PI/180,c=s>=90?1:0,d=-1===a?1:0,u=Ze(e,i,l,n+h,a),g=Ze(e,i,l,n-h,a),p=`M ${e} ${i} L ${u.x} ${u.y} A 800 800 0 ${c} ${d} ${g.x} ${g.y} Z`,m=Ge(t),f=Qe("clipPath",{id:o});f.appendChild(Qe("path",{d:p})),m.appendChild(f),t.appendChild(Qe("circle",{cx:Oe,cy:Oe,r:390,fill:r,"clip-path":`url(#${o})`}))}(t,l.x,l.y,d,g,"sky-clip",u,s);const p={style:"stroke: color-mix(in srgb, currentColor 30%, transparent)","stroke-width":1,"stroke-dasharray":"4, 4"},m=t=>{const{x:e,y:i}=l,n=Ze(0,0,1,t,s),o=function(t,e,i,n,s,o,r,a=20){const l=t-s,h=e-o,c=i*i+n*n,d=2*(l*i+h*n),u=d*d-4*c*(l*l+h*h-r*r);if(u<0)return a;const g=(-d+Math.sqrt(u))/(2*c);return g>0?g:a}(e,i,n.x,n.y,Oe,Oe,390)+8;return Ze(e,i,o,t,s)},f=m(d+Math.PI/2),y=m(d-Math.PI/2);t.appendChild(Qe("line",{...p,x1:f.x,y1:f.y,x2:y.x,y2:y.y}));const b=m(d),_=Ze(l.x,l.y,Pe.size,d,s);return t.appendChild(Qe("line",{...p,x1:_.x,y1:_.y,x2:b.x,y2:b.y})),d}const hi="offscreen-markers";function ci(t,e,i,n,s,o,r,a,l){const h=i-t,c=n-e,d=0===h?Number.POSITIVE_INFINITY:((h>0?r-l:s+l)-t)/h,u=0===c?Number.POSITIVE_INFINITY:((c>0?a-l:o+l)-e)/c,g=Math.min(d,u);return{x:t+h*g,y:e+c*g}}function di(t,e,i,n,s){const o=Math.atan2(n-e,i-t),r=8*Math.sqrt(3)/2,a=t+Math.cos(o)*r/2,l=e+Math.sin(o)*r/2,h=o+Math.PI/2,c=o-Math.PI/2,d=t-Math.cos(o)*r/2+4*Math.cos(h),u=e-Math.sin(o)*r/2+4*Math.sin(h),g=t-Math.cos(o)*r/2+4*Math.cos(c),p=e-Math.sin(o)*r/2+4*Math.sin(c),m=Qe("polygon",{});return m.setAttribute("points",`${a},${l} ${d},${u} ${g},${p}`),m.setAttribute("fill",s),m}function ui(t,e,i,n,s,o,r,a){const l=Qe("text",{});l.setAttribute("fill",o),l.setAttribute("font-size",String(9)),l.setAttribute("font-family","sans-serif"),l.textContent=s;const h=Math.atan2(n-e,i-t),c=t-10*Math.cos(h),d=e-10*Math.sin(h);return c<(r+a)/2?l.setAttribute("text-anchor","start"):l.setAttribute("text-anchor","end"),l.setAttribute("x",String(c)),l.setAttribute("y",String(d+3)),l}const gi=Object.fromEntries(ze.map(t=>{const{au:e,eccentricity:i,longitudeOfPerihelion:n}=t,{aPx:s,bPx:o,cPx:r}=je(Re(e*(1-i)),Re(e*(1+i))),a=qe(r,n,-1),[l,h]=ti(s,o,a),c=e*(1-i*Math.cos(l.eccentricAnomaly)),d=e*(1-i*Math.cos(h.eccentricAnomaly));return[t.name,{minAU:Math.min(c,d),maxAU:Math.max(c,d)}]}));function pi(t){return"Saturn"===t.name?24:"Earth"===t.name?t.size+22+Ne.size:t.size}function mi(t,e="north",i=null,n={},s=!1,o=at){const r=s?1:-1,a=Qe("svg",{viewBox:"0 0 800 800",width:"100%",height:"100%",style:"background: transparent; display: block;"}),l=[],h=[],c=function(t){const e=[];let i=Number.NEGATIVE_INFINITY,n=0;for(const s of t){const t=Re(s.au),o=pi(s),r=i+n+o+8,a=Math.max(t,r);e.push(a),i=a,n=o}return e}(ze),d=ze.indexOf(Pe),u=ze.map((t,e)=>function(t,e){const{au:i,eccentricity:n}=t;return{...je(Re(i*(1-n))+e,Re(i*(1+n))+e),rotationDeg:t.longitudeOfPerihelion}}(t,c[e]-Re(t.au))),g=c[d],p=li(a,g,t,i,r,n);!function(t,e,i={},n=-1){const s=i.season_line??"color-mix(in srgb, currentColor 25%, transparent)",o=i.season_label??"color-mix(in srgb, currentColor 50%, transparent)",r=1===n;t.appendChild(Qe("line",{x1:0,y1:Oe,x2:Le,y2:Oe,style:`stroke: ${s}`,"stroke-width":1,"stroke-dasharray":"4, 6"})),t.appendChild(Qe("line",{x1:Oe,y1:0,x2:Oe,y2:Le,style:`stroke: ${s}`,"stroke-width":1,"stroke-dasharray":"4, 6"}));const[a,l,h,c]={north:{normal:["Winter","Autumn","Summer","Spring"],ecliptic:["Spring","Summer","Autumn","Winter"]},south:{normal:["Summer","Spring","Winter","Autumn"],ecliptic:["Autumn","Winter","Spring","Summer"]}}[e][r?"ecliptic":"normal"],d=[{name:a,startAngle:90,endAngle:180,isTopHalf:!0},{name:l,startAngle:0,endAngle:90,isTopHalf:!0},{name:h,startAngle:270,endAngle:360,isTopHalf:!1},{name:c,startAngle:180,endAngle:270,isTopHalf:!1}],u=Ge(t);d.forEach((e,i)=>{const n=`season-arc-${i}`,s=e.startAngle*Math.PI/180,r=e.endAngle*Math.PI/180,a=e.isTopHalf?368:380,l=Oe+a*Math.cos(s),h=Oe-a*Math.sin(s),c=Oe+a*Math.cos(r),d=Oe-a*Math.sin(r),g=Qe("path",{id:n,d:e.isTopHalf?`M ${c} ${d} A ${a} ${a} 0 0 1 ${l} ${h}`:`M ${l} ${h} A ${a} ${a} 0 0 0 ${c} ${d}`,fill:"none"});u.appendChild(g);const p=Qe("text",{style:`fill: ${o}`,"font-size":20,"font-family":"sans-serif"}),m=Qe("textPath",{href:`#${n}`,startOffset:"50%","text-anchor":"middle"});m.textContent=e.name,p.appendChild(m),t.appendChild(p)})}(a,e,n,r),u.forEach((t,e)=>{!function(t,e,i,n){const s=Je,{aPx:o,bPx:r,cPx:a,rotationDeg:l}=e,h=qe(a,l,i),{a:c,b:d,c:u,d:g,e:p,f:m}=h;t.appendChild(Qe("ellipse",{cx:0,cy:0,rx:o,ry:r,fill:"none",style:`stroke: ${s}`,"stroke-width":1,"stroke-dasharray":"5, 5",transform:`matrix(${c}, ${d}, ${u}, ${g}, ${p}, ${m})`}));const f={style:`fill: ${s}`,"font-size":"9","font-family":"sans-serif","text-anchor":"start"},[y,b]=ti(o,r,h),_=t=>Math.hypot(t.x-Oe,t.y-Oe),v=_(y)<=_(b),w=v?n.minAU:n.maxAU,A=v?n.maxAU:n.minAU;t.appendChild(Qe("text",{x:y.x+3,y:y.y-3,...f})).textContent=`${w.toFixed(1)} AU`,t.appendChild(Qe("text",{x:b.x+3,y:b.y+3+6,...f})).textContent=`${A.toFixed(1)} AU`}(a,t,r,gi[ze[e].name])});for(const t of $e)si(a,t,r);o.dayNight&&function(t){const e=Ge(t),i=Qe("radialGradient",{id:"sun-halo"}),n=(t,e,n)=>i.appendChild(Qe("stop",{offset:t,"stop-color":e,"stop-opacity":n}));n("0%","#ffd479","0.35"),n("54%","#ffcf6b","0.1"),n("100%","#ffcf6b","0"),e.appendChild(i),t.appendChild(Qe("circle",{id:"sun-halo-glow",cx:Oe,cy:Oe,r:264,fill:"url(#sun-halo)"}))}(a),ii(a,Oe,Oe,Te,!1,o);let m=Oe,f=Oe;ze.forEach((e,i)=>{const{angle:n,trueAnomaly:s}=Ee(e,t),{aPx:c,ePx:d}=u[i],{x:g,y:p}=Ye(c,d,s,n,r);e.name===Pe.name&&(m=g,f=p),l.push({name:e.name,x:g,y:p,color:e.color}),"Saturn"===e.name?(!function(t,e,i,n,s=at){const o=Math.round(n.size/2);s.sphere?We(t,e,i,o,n.color):t.appendChild(Qe("circle",{cx:e,cy:i,r:o,fill:n.color})),t.appendChild(Qe("circle",{cx:e,cy:i,r:23,fill:"none",stroke:n.color,"stroke-width":2,opacity:.8})),t.appendChild(Qe("circle",{cx:e,cy:i,r:18,fill:"none",stroke:n.color,"stroke-width":6,opacity:.8})),s.dayNight&&ei(t,e,i,o,24,n.color)}(a,g,p,e,o),h.push({name:e.name,x:g,y:p,radius:24})):(ii(a,g,p,e,!1,o),h.push({name:e.name,x:g,y:p,radius:e.size}))});for(const e of $e){const{angle:i,radius:n,trueAnomaly:s}=Ie(e,t),{aPx:h,ePx:c}=ni(e),{x:d,y:u}=Ye(h,c,s,i,r),g=e.semiMajorAxis*(1-e.eccentricity),p=Math.min(1,g/n),m=e.tailLength*p;oi(a,d,u,e,Oe,Oe,m,o),l.push({name:e.name,x:d,y:u,color:e.color})}const y=function(t){return ke(ie(t).eclipticLonDeg)}(t),{x:b,y:_}=Ze(m,f,22,y,r);l.push({name:Ne.name,x:b,y:_,color:Ne.color}),h.push({name:Ne.name,x:b,y:_,radius:Ne.size}),a.appendChild(Qe("circle",{cx:m,cy:f,r:22,fill:"none",style:`stroke: ${Je}`,"stroke-width":1,"stroke-dasharray":"5, 5"})),ii(a,b,_,Ne,!1,o);const v=[...l,{name:Te.name,x:Oe,y:Oe,color:Te.color}];return function(t,e,i,n){for(const s of e){let e=Number.POSITIVE_INFINITY,o=0;for(const t of i){if(t.name===s.name)continue;const i=Math.hypot(t.x-s.x,t.y-s.y);i<e&&(e=i,o=t.y-s.y)}const r=e<80&&o<0?s.y+s.radius+3+8:s.y-s.radius-3;t.appendChild(Qe("text",{x:s.x,y:r,style:`fill: ${n}`,...Ue})).textContent=s.name}}(a,h,v,Be),function(t,e,i,n,s,o=-1){const r=Ze(e,i,s,n,o);t.appendChild(Qe("line",{x1:e,y1:i,x2:r.x,y2:r.y,style:`stroke: ${ri}`,"stroke-width":2,"stroke-linecap":"round"})),t.appendChild(Qe("circle",{cx:r.x,cy:r.y,r:2,style:`fill: ${ri}`}))}(a,m,f,p,Pe.size,r),{svg:a,positions:l,updateMarkers:function(t,e){const i=a.getElementById(hi);i&&i.remove(),a.appendChild(function(t,e,i=1){const n=Qe("g",{id:hi}),s=e.width,o=Number.isFinite(i)&&i>0?i:1,r=s/2*Math.max(1,o),a=s/2*Math.max(1,1/o),l=e.centerX-r,h=e.centerY-a,c=e.centerX+r,d=e.centerY+a;for(const i of t){if(i.name===Ne.name)continue;if(i.x>=l&&i.x<=c&&i.y>=h&&i.y<=d)continue;const{x:t,y:s}=ci(e.centerX,e.centerY,i.x,i.y,l,h,c,d,10),o=di(t,s,i.x,i.y,i.color);n.appendChild(o);const r=ui(t,s,i.x,i.y,i.name,i.color,l,c);n.appendChild(r)}return n}(l,t,e))},updateHalo:function(t){const e=a.getElementById("sun-halo-glow");e&&e.setAttribute("r",String(.33*t.width))}}}class fi{constructor(t){this._zoom=t,this._svg=null,this._updateMarkers=null,this._updateHalo=null}mount(t,e,i,n,s,o,r=at){for(;t.firstChild;)t.removeChild(t.firstChild);const{svg:a,updateMarkers:l,updateHalo:h}=mi(e,i,n,s,o,r);this._svg=a,this._updateMarkers=l,this._updateHalo=h,t.appendChild(a),this._bindPointerEvents(a)}applyViewState(){const t=this._zoom.panZoomState;if(!t)return;this._svg&&this._svg.setAttribute("viewBox",this._zoom.viewBox);const e=this._svg?.getBoundingClientRect();this._updateMarkers?.(t,e?.height?e.width/e.height:1),this._updateHalo?.(t)}_bindPointerEvents(t){t.addEventListener("pointerdown",t=>this._onPointerDown(t)),t.addEventListener("pointermove",t=>this._onPointerMove(t)),t.addEventListener("pointerup",t=>this._onPointerUp(t))}_onPointerDown(t){const e=t.currentTarget;e.setPointerCapture(t.pointerId),this._zoom.startDrag(t.clientX,t.clientY),e.style.cursor="grabbing"}_onPointerMove(t){if(!this._zoom.isDragging)return;const e=t.currentTarget.getBoundingClientRect();this._zoom.updateDrag(t.clientX,t.clientY,e)}_onPointerUp(t){if(!this._zoom.isDragging)return;this._zoom.endDrag();const e=t.currentTarget;e.releasePointerCapture(t.pointerId),e.style.cursor="grab"}}const yi={dark:{background:"#1c1c1c",color:"#e1e1e1"},light:{background:"#ffffff",color:"#212121"}},bi=["--ha-card-background","--card-background-color","--primary-background-color","--primary-text-color","--secondary-background-color","--divider-color"];function _i(t,e){const i="auto"===t?null:yi[t],n={};for(const t of bi)n[t]=i?"initial":null;return{background:e??i?.background??"",color:i?.color??"",vars:n}}const vi=[{elevDeg:ce,rgb:[208,208,208]},{elevDeg:-6,rgb:[138,97,66]},{elevDeg:-12,rgb:[58,74,107]},{elevDeg:-18,rgb:[42,31,66]}],wi=[6,5,10];function Ai(t){return Math.round(t).toString(16).padStart(2,"0")}function xi(t){const e=vi[0],i=vi[vi.length-1];if(t>=e.elevDeg)return Mi(e.rgb);if(t<i.elevDeg)return Mi(wi);for(let e=0;e<vi.length-1;e++){const i=vi[e],n=vi[e+1];if(t<=i.elevDeg&&t>=n.elevDeg){const e=(i.elevDeg-t)/(i.elevDeg-n.elevDeg),s=[0,1,2].map(t=>i.rgb[t]+e*(n.rgb[t]-i.rgb[t]));return Mi(s)}}return Mi(wi)}function Mi(t){return`#${Ai(t[0])}${Ai(t[1])}${Ai(t[2])}`}const Ci=[255,102,26];const $i=ki(vi[0].rgb),Si=ki(wi);function ki(t){return.299*t[0]+.587*t[1]+.114*t[2]}function Di(t){const e=ki((i=xi(t),[Number.parseInt(i.slice(1,3),16),Number.parseInt(i.slice(3,5),16),Number.parseInt(i.slice(5,7),16)]));var i;return Math.max(0,Math.min(1,(e-Si)/($i-Si)))}function Ei(t,e){const i=function(t){const e=Math.max(t,0),i=e*Math.PI/180;return 1/(Math.sin(i)+.50572*(e+6.07995)**-1.6364)}(t)-1,n=Math.max(0,Math.min(1,1-Math.exp(-.004*i**2)))*(1-Di(e)),[s,o,r]=Ci;return`rgba(${s}, ${o}, ${r}, ${n.toFixed(2)})`}class Ii{constructor(){this._hass={lat:null,lon:null,timezone:null,name:null},this._override=null,this._nameOverride=null}update(t){const e={lat:t.config?.latitude??null,lon:t.config?.longitude??null,timezone:t.config?.time_zone||null,name:t.config?.location_name||null},i=this._hass;return(e.lat!==i.lat||e.lon!==i.lon||e.timezone!==i.timezone||e.name!==i.name)&&(this._hass=e,!0)}configure(t,e){this._override=t,this._nameOverride=e}get data(){const t=this._override,e=t?.lat??this._hass.lat,i=t?.lon??this._hass.lon;return null!=e&&null!=i?{lat:e,lon:i,timezone:t?.timezone??this._hass.timezone??"UTC",zoneOverride:null!=t}:null}get name(){return this._nameOverride??this._hass.name}get hemisphere(){const t=this.data?.lat;return null!=t&&t<0?"south":"north"}skyFrame(t){const e=this.data;if(!e)return{rotation:0,belowHorizon:!1,background:"#000",extinction:"rgba(0, 0, 0, 0)"};const{parallacticDeg:i,altitudeDeg:n}=re(t,e.lat,e.lon),s=he(e.lat,e.lon,t);return{rotation:i,belowHorizon:n<=0,background:xi(s),extinction:Ei(n,s)}}}class Ti{constructor(){this._animationId=null}get isAnimating(){return null!==this._animationId}animateTo(t,e,i,n){this.cancel();let s=null;const o=r=>{null===s&&(s=r);const a=r-s,l=Math.min(a/2e3,1);i(t+(e-t)*function(t){return-(Math.cos(Math.PI*t)-1)/2}(l)),l<1?this._animationId=requestAnimationFrame(o):(this._animationId=null,n?.())};this._animationId=requestAnimationFrame(o)}cancel(){null!==this._animationId&&(cancelAnimationFrame(this._animationId),this._animationId=null)}}class zi{constructor(t,e){this._initialized=!1,this._centerX=400,this._centerY=400,this._zoomLevel=1,this._size=Zt[1],this._isDragging=!1,this._dragStartX=0,this._dragStartY=0,this._dragStartCenterX=0,this._dragStartCenterY=0,this._animator=new Ti,this._defaultZoomLevel=1,this._periodicZoomChange=!1,this._periodicZoomMax=4,this._periodicDirection=1,this._animate=!1,this._userInteracted=!1,this._onChange=t,this._onViewBoxChange=e}get zoomLevel(){return this._initialized?this._zoomLevel:null}get displayZoomLevel(){return this._initialized?this._zoomLevel:this._defaultZoomLevel}get panZoomState(){return this._initialized?{centerX:this._centerX,centerY:this._centerY,width:this._size}:null}get viewBox(){return this._initialized?`${this._centerX-this._size/2} ${this._centerY-this._size/2} ${this._size} ${this._size}`:null}get isDragging(){return this._isDragging}get isDefaultView(){return!this._initialized||400===this._centerX&&400===this._centerY&&(!(!this._periodicZoomChange||this._userInteracted)||this._zoomLevel===this._defaultZoomLevel)}get periodicZoomChange(){return this._periodicZoomChange}get periodicZoomMax(){return this._periodicZoomMax}get animate(){return this._animate}configure(t,e,i,n){const s=t!==this._defaultZoomLevel;this._defaultZoomLevel=t,this._periodicZoomChange=e,this._periodicZoomMax=i,this._animate=n,s&&this._initialized&&(this._setZoomLevel(t),this._onChange())}ensureInitialized(){this._initialized||(this._initialized=!0,this._setZoomLevel(this._defaultZoomLevel))}recenter(){this._initialized&&(this._centerX=400,this._centerY=400)}suspendAutoCycle(){this._userInteracted=!0}resetToDefault(){if(this._userInteracted=!1,this._periodicDirection=1,!this._initialized||this._zoomLevel===this._defaultZoomLevel)return;const t=this._size;this._setZoomLevel(this._defaultZoomLevel),this._apply(t)}zoomIn(){this._stepZoom(1)}zoomOut(){this._stepZoom(-1)}_stepZoom(t){if(!this._initialized)return;const e=this._size;this._userInteracted=!0;const i=this._zoomLevel+t;i<1||i>4||(this._setZoomLevel(i),this._apply(e))}tick(){this._periodicZoomChange&&!this._userInteracted&&this.advancePeriodic()}advancePeriodic(){if(!this._initialized)return;const t=this._defaultZoomLevel,e=this._periodicZoomMax;if(t>=e)return;const i=this._size;let n=this._periodicDirection;this._zoomLevel+n>e?n=-1:this._zoomLevel+n<t&&(n=1),this._periodicDirection=n,this._setZoomLevel(this._zoomLevel+n),this._apply(i)}startDrag(t,e){this._initialized&&(this._isDragging=!0,this._dragStartX=t,this._dragStartY=e,this._dragStartCenterX=this._centerX,this._dragStartCenterY=this._centerY)}updateDrag(t,e,i){if(!this._isDragging)return;this._userInteracted=!0;const n=this._size/i.width;this._centerX=this._dragStartCenterX-(t-this._dragStartX)*n,this._centerY=this._dragStartCenterY-(e-this._dragStartY)*n,this._onViewBoxChange()}endDrag(){this._isDragging&&(this._isDragging=!1,this._onChange())}_setZoomLevel(t){const e=Math.max(1,Math.min(4,t));this._zoomLevel=e,this._size=Zt[e]}_apply(t){if(this._onChange(),!this._animate)return;const e=this._size;this._animator.animateTo(t,e,t=>{this._size=t,this._onViewBoxChange()},()=>{this._size=e,this._onViewBoxChange(),this._onChange()})}}const Pi=new Set(["hour-back","hour-forward","day-back","day-forward","month-back","month-forward"]);function Ni(t){return F`<div class="no-sky" @click=${t}>No Moon<br />Sky</div>`}class Bi extends ot{static{this.styles=Xt}constructor(){super(),this._dateNav=new Ae(()=>this._render()),this._zoom=new zi(()=>this._render(),()=>this._solarView.applyViewState()),this._location=new Ii,this._autoUpdateTimer=null,this._debugTimer=null,this._galleryPosition="overlay",this._galleryShape="square",this._mymoonTint=!1,this._colors={},this._refreshMs=6e4,this._eclipticView=!1,this._shade=at,this._theme="auto",this._heightStyle="",this._solarView=new fi(this._zoom),this._onVisibilityChange=null,this._gallery=new jt(()=>this._render())}set hass(t){this._location.update(t)&&this._render()}setConfig(t){this._config=t;const e=qt(t);this._zoom.configure(e.zoomLevel,e.periodicZoomChange,e.periodicZoomMax,e.zoomAnimate),this._refreshMs=e.refreshMs,this._colors=e.colors,this._theme=e.theme,this._eclipticView=e.eclipticView,this._shade=e.shade,this._location.configure(e.locationOverride,e.locationNameOverride),this._heightStyle=e.heightStyle,this._galleryPosition=e.galleryPosition,this._galleryShape=e.galleryShape,this._mymoonTint=e.mymoonTint,this._gallery.configure(e.galleryMode,e.gallerySources,e.galleryIntervalMs),null!=this._autoUpdateTimer&&this._startAutoUpdateTimer(),(null!=this._debugTimer||t.debug)&&this._startDebugTimer()}connectedCallback(){super.connectedCallback(),this._render(),this._startAutoUpdateTimer(),this._startDebugTimer(),this._gallery.start(),this._onVisibilityChange=()=>{document.hidden||this._dateNav.tick()},document.addEventListener("visibilitychange",this._onVisibilityChange)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._autoUpdateTimer??void 0),this._autoUpdateTimer=null,clearInterval(this._debugTimer??void 0),this._debugTimer=null,this._gallery.stop(),this._dateNav.stop(),this._onVisibilityChange&&document.removeEventListener("visibilitychange",this._onVisibilityChange),this._onVisibilityChange=null}render(){const t=new Date;let e=null;const i=()=>e??=this._location.skyFrame(t),n=this._gallery.viewModel(this._galleryPosition),s="none"!==n.panelSource&&Ut[n.panelSource].skyFrame?i():null,o=ye(n,this._location.data,this._location.name,this._dateNav.currentDate),r=this._zoom.displayZoomLevel,a=_i(this._theme,this._colors.background);return F`
      <div class="card" style="background: ${a.background}; color: ${a.color}">
        <div class="solar-view-wrapper">
          <div class="status-bar-row">
            ${o}
            ${this._config?.debug?Ce(n.debugStats,n.debugStartedAt):j}
          </div>
          <div
            id="solar-view"
            class=${"none"===n.panelSource?"":"hidden"}
            style=${this._heightStyle||j}
          ></div>
          <div
            class="image-view-frame ${"none"===n.panelSource?"":"visible"}"
            style=${this._panelFrameStyle()}
          >
            ${s?.belowHorizon?Ni(this._onImageClick):F`<img
                      id="image-view"
                      class="image-view"
                      style=${this._panelImageStyle(s)}
                      src=${n.imageUrl?(l=n.imageUrl,l.replace(`/${Et}/`,"/730x730_1x1_30p/")):j}
                      alt=""
                      @click=${this._onImageClick}
                      @load=${this._onImageLoad}
                      @error=${this._onImageLoadError}
                    />
                    ${s?F`<div
                              class="image-view-tint"
                              style=${`background: ${s.background}`}
                            ></div>
                            ${this._mymoonTint?F`<div
                                    class="image-view-tint"
                                    style=${`background: ${s.extinction}`}
                                  ></div>`:j}`:j}`}
          </div>
          ${n.showStrip?F`<div class="gallery gallery-${this._galleryPosition}">
                  ${n.thumbnails.map(({source:e,url:n,date:s})=>this._renderGalleryTile(e,n,s,i,t))}
                </div>`:j}
        </div>
        <div class="nav">
          <span class="btn-group">
            <button data-action="month-back" title="Back 1 month" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>⋘</button>
            <button data-action="day-back" title="Back 1 day" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>≪</button>
            <button data-action="hour-back" title="Back 1 hour" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>&lt;</button>
            <button data-action="today" title="Back to the default view" class=${this._zoom.isDefaultView&&this._dateNav.isLiveMode?"":"active"} ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>Now</button>
            <button data-action="hour-forward" title="Forward 1 hour" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>&gt;</button>
            <button data-action="day-forward" title="Forward 1 day" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>≫</button>
            <button data-action="month-forward" title="Forward 1 month" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>⋙</button>
            <button data-action="replay" title="Replay last ${this._dateNav.replayLabel}" @click=${this._onNavClick}>↺</button>
          </span>
          <span class="nav-spacer"></span>
          <span class="date">${ue(this._dateNav.currentDate)}</span>
          <span class="nav-spacer"></span>
          <span class="btn-group">
            <button data-action="zoom-out" title="Zoom out" @click=${this._onNavClick}>&minus;</button>
            <span class="zoom-level">${r}</span>
            <button data-action="zoom-in" title="Zoom in" @click=${this._onNavClick}>+</button>
          </span>
          <span class="nav-spacer"></span>
          <span class="btn-group">
            <button data-action="gallery" title="Show image gallery" @click=${this._onNavClick}>
              <span class="icon">☷</span>
            </button>
          </span>
          ${this._config?.show_version?F`<span class="card-version">v${"3.2.0"}</span>`:j}
        </div>
      </div>
    `;var l}updated(){this._zoom.ensureInitialized();const t=this.shadowRoot.getElementById("solar-view");t&&this._solarView.mount(t,this._dateNav.currentDate,this._location.hemisphere,this._location.data,this._colors,this._eclipticView,this._shade),this._solarView.applyViewState();const e=_i(this._theme,this._colors.background);this.style.background=e.background,this.style.color=e.color;for(const t of bi)null===e.vars[t]?this.style.removeProperty(t):this.style.setProperty(t,e.vars[t])}_renderGalleryTile(t,e,i,n,s){const o=Ut[t].skyFrame?n():null,r=function(t,e,i=0){const{disc:n,target:s,skyFrame:o}=Ut[t],r=`scale(${(s/n).toFixed(3)})`,a=i?`rotate(${i.toFixed(1)}deg) ${r}`:r;return`clip-path: ${"circle"===(o?"circle":e)?`circle(${(50*n).toFixed(1)}%)`:`inset(${(50*(1-n)).toFixed(1)}%)`}; transform: ${a}`}(t,this._galleryShape,o?o.rotation:0);return F`<button
      class="gallery-thumb ${"circle"===this._galleryShape?"gallery-thumb-circle":""}"
      data-source=${t}
      title=${Ut[t].tooltip}
      @click=${this._onGalleryClick}
    >
      ${o?.belowHorizon?Ni():F`<img
              src=${e??j}
              alt=""
              style=${r}
              @error=${"sun"===t?this._onSunThumbError:void 0}
            />
            ${o?F`<div
                    class="gallery-thumb-tint"
                    style=${`${r}; background: ${o.background}`}
                  ></div>
                  ${this._mymoonTint?F`<div
                          class="gallery-thumb-tint"
                          style=${`${r}; background: ${o.extinction}`}
                        ></div>`:j}`:j}`}
      ${a=Ut[t].tile,l=i?pe(i,s):"loading…",F`<div class="gallery-info">
    <span class="gallery-label">${a}</span>
    <span class="gallery-age">${l}</span>
  </div>`}
    </button>`;var a,l}_panelFrameStyle(){return this._heightStyle||j}_panelImageStyle(t){return t?`transform: rotate(${t.rotation.toFixed(1)}deg)`:j}_render(){this.requestUpdate(),this.performUpdate()}_startAutoUpdateTimer(){clearInterval(this._autoUpdateTimer??void 0);const t=this._refreshMs;this._autoUpdateTimer=setInterval(()=>{this._dateNav.tick(),this._dateNav.isReplaying||this._zoom.tick(),this._gallery.tick()},t)}_startDebugTimer(){clearInterval(this._debugTimer??void 0),this._config?.debug?this._debugTimer=setInterval(()=>this._render(),1e3):this._debugTimer=null}_goToday(){this._zoom.recenter(),this._zoom.resetToDefault(),this._dateNav.goLive()}_onNavClick(t){this._handleNavAction(t.currentTarget.dataset.action)}_onGalleryClick(t){const e=t.currentTarget.dataset.source;this._gallery.openPanel(e)}_handleNavAction(t){switch(t&&Pi.has(t)&&this._zoom.suspendAutoCycle(),t){case"replay":this._dateNav.toggleReplay();break;case"zoom-out":this._zoom.zoomOut();break;case"month-back":this._dateNav.navigateMonths(-1);break;case"day-back":this._dateNav.navigate(-864e5,"day");break;case"hour-back":this._dateNav.navigate(-36e5,"hour");break;case"today":this._goToday();break;case"hour-forward":this._dateNav.navigate(36e5,"hour");break;case"day-forward":this._dateNav.navigate(864e5,"day");break;case"month-forward":this._dateNav.navigateMonths(1);break;case"zoom-in":this._zoom.zoomIn();break;case"gallery":this._gallery.toggle()}}_onImageClick(){this._gallery.closePanel()}_onImageLoadError(){this._gallery.onImageLoadError()}_onImageLoad(){this._gallery.onImageLoad()}_onSunThumbError(){this._gallery.onSunThumbError()}getCardSize(){return 6}static getStubConfig(){return{default_zoom:2,periodic_zoom_change:!0,periodic_zoom_max:4,refresh_mins:1,zoom_animate:!0,colors:{},gallery:{mode:"both"}}}}customElements.define("ha-planetary-solar-system-card",Bi),window.customCards=window.customCards||[],window.customCards.push({type:"ha-planetary-solar-system-card",name:"Solar View Card",description:"Planetary solar system visualization card",preview:!0});
