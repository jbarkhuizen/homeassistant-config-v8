const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:c,getPrototypeOf:d}=Object,u=globalThis,p=u.trustedTypes,g=p?p.emptyScript:"",m=u.reactiveElementPolyfillSupport,_=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!o(t,e),v={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const r=this.constructor;if(!1===s&&(n=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??y)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[_("elementProperties")]=new Map,b[_("finalized")]=new Map,m?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=t=>t,x=$.trustedTypes,M=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+A,k=`<${S}>`,z=document,D=()=>z.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,I="[ \t\n\f\r]",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,U=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,H=/"/g,R=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Z=new WeakMap,j=z.createTreeWalker(z,129);function Y(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=E;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===E?"!--"===l[1]?o=N:void 0!==l[1]?o=L:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=U):void 0!==l[3]&&(o=U):o===U?">"===l[0]?(o=n??E,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?U:'"'===l[3]?H:O):o===H||o===O?o=U:o===N||o===L?o=E:(o=U,n=void 0);const d=o===U&&t[e+1].startsWith("/>")?" ":"";r+=o===E?i+k:h>=0?(s.push(a),i.slice(0,h)+C+i.slice(h)+A+d):i+A+(-2===h?e:d)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=q(t,e);if(this.el=W.createElement(l,i),j.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=j.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=h[r++],i=s.getAttribute(t).split(A),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?Q:"?"===o[1]?tt:"@"===o[1]?et:K}),s.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(R.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],D()),j.nextNode(),a.push({type:2,index:++n});s.append(t[e],D())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===B)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=P(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);j.currentNode=s;let n=j.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new G(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=j.nextNode(),r++)}return j.currentNode=z,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new W(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new G(this.O(D()),this.O(D()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=J(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=J(this,s[i+o],e,o),a===B&&(a=this._$AH[o]),r||=!P(a)||a!==this._$AH[o],a===F?t=F:t!==F&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class tt extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class et extends K{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??F)===B)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(W,G),($.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new G(e.insertBefore(D(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const ot=nt.litElementPolyfillSupport;ot?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.2");const at={name:"Sun",color:"#ffd700",size:16},lt=[{name:"Mercury",au:.39,periodDays:87.97,color:"#b0b0b0",size:6,meanLongitudeJ2000:252.25,eccentricity:.20563,longitudeOfPerihelion:77.45645},{name:"Venus",au:.72,periodDays:224.7,color:"#e8cda0",size:9,meanLongitudeJ2000:181.98,eccentricity:.00677,longitudeOfPerihelion:131.53298},{name:"Earth",au:1,periodDays:365.25,color:"#4a90d9",size:10,meanLongitudeJ2000:100.46,eccentricity:.01671,longitudeOfPerihelion:102.94719},{name:"Mars",au:1.52,periodDays:687,color:"#c1440e",size:7,meanLongitudeJ2000:355.45,eccentricity:.0934,longitudeOfPerihelion:336.04084},{name:"Jupiter",au:5.2,periodDays:4332.6,color:"#c88b3a",size:21,meanLongitudeJ2000:34.4,eccentricity:.04849,longitudeOfPerihelion:14.75385},{name:"Saturn",au:9.58,periodDays:10759.2,color:"#e0c080",size:25,meanLongitudeJ2000:49.94,eccentricity:.05551,longitudeOfPerihelion:92.43194},{name:"Uranus",au:19.22,periodDays:30688.5,color:"#7ec8e3",size:13,meanLongitudeJ2000:313.23,eccentricity:.0463,longitudeOfPerihelion:170.96424},{name:"Neptune",au:30.05,periodDays:60182,color:"#3f54ba",size:13,meanLongitudeJ2000:304.88,eccentricity:.00899,longitudeOfPerihelion:44.97135}],ht=lt[2],ct={name:"Moon",periodDays:27.32,color:"#cccccc",size:5,meanLongitudeJ2000:218.32},dt="currentColor",ut=800,pt=400,gt={"font-size":"11","font-family":"sans-serif","text-anchor":"middle"},mt=Math.log(lt[0].au),_t=Math.log(lt[lt.length-1].au);function ft(t){return 40+320*((Math.log(t)-mt)/(_t-mt))}function yt(t,e){const i=(t+e)/2,s=(e-t)/2;return{aPx:i,bPx:Math.sqrt(i*i-s*s),cPx:s,ePx:s/i}}function vt(t,e,i,s,n){const r=t*(1-e*e)/(1+e*Math.cos(i));return{x:pt+r*Math.cos(s),y:pt+n*r*Math.sin(s)}}function bt(t,e,i){const s=e*Math.PI/180,n=Math.cos(s),r=Math.sin(s);return{a:n,b:i*r,c:-r,d:i*n,e:pt-t*n,f:pt-i*t*r}}function $t(t,e,i){const{a:s,b:n,c:r,d:o,e:a,f:l}=bt(t,e,i);return`matrix(${s}, ${n}, ${r}, ${o}, ${a}, ${l})`}function wt(t,e){const i=document.createElementNS("http://www.w3.org/2000/svg",t);for(const[t,s]of Object.entries(e))i.setAttribute(t,String(s));return i}const xt={1:800,2:640,3:480,4:320};class Mt{constructor(t=1){this.centerX=400,this.centerY=400,this.zoomLevel=t,this._size=xt[t],this.isDragging=!1,this._dragStartX=0,this._dragStartY=0,this._dragStartCenterX=0,this._dragStartCenterY=0}get width(){return this._size}get viewBox(){return`${this.centerX-this._size/2} ${this.centerY-this._size/2} ${this._size} ${this._size}`}zoomIn(){return!(this.zoomLevel>=4)&&(this.zoomLevel=this.zoomLevel+1,this._size=xt[this.zoomLevel],!0)}zoomOut(){return!(this.zoomLevel<=1)&&(this.zoomLevel=this.zoomLevel-1,this._size=xt[this.zoomLevel],!0)}setZoomLevel(t){const e=Math.max(1,Math.min(4,t));this.zoomLevel=e,this._size=xt[e]}setViewport(t){this._size=t}startDrag(t,e){this.isDragging=!0,this._dragStartX=t,this._dragStartY=e,this._dragStartCenterX=this.centerX,this._dragStartCenterY=this.centerY}updateDrag(t,e,i){if(!this.isDragging)return;const s=t-this._dragStartX,n=e-this._dragStartY,r=this._size/i.width;this.centerX=this._dragStartCenterX-s*r,this.centerY=this._dragStartCenterY-n*r}endDrag(){this.isDragging=!1}recenter(){this.centerX=400,this.centerY=400}}const Ct=23.45*Math.PI/180;function At(t,e){const i=Date.UTC(e.getUTCFullYear(),0,0);return{dayOfYear:Math.floor((e.getTime()-i)/864e5),hourAngleRad:15*(((e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600+t/15)%24+24)%24-12)*Math.PI/180}}function St(t,e,i){const{dayOfYear:s,hourAngleRad:n}=At(e,i),r=-23.45*Math.cos(2*Math.PI/365*(s+10))*Math.PI/180,o=t*Math.PI/180,a=Math.sin(o)*Math.sin(r)+Math.cos(o)*Math.cos(r)*Math.cos(n);return 180*Math.asin(Math.max(-1,Math.min(1,a)))/Math.PI}function kt(t){return t>=0?"Day":t>=-6?"Civil Twilight":t>=-12?"Nautical Twilight":t>=-18?"Astronomical Twilight":"Night"}function zt(t,e){const i=Math.floor((e.getTime()-t.getTime())/6e4);return i<1?"just now":i<60?`${i}m ago`:`${Math.floor(i/60)}h ago`}function Dt(t){const e=Math.floor(t/6e4);if(e<1)return`${Math.floor(t/1e3)}s`;if(e<60)return`${e}m`;const i=Math.floor(e/60),s=e%60;return s?`${i}h ${s}m`:`${i}h`}function Pt(t){return`${String(t.getFullYear()).slice(-2)}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}function Tt(t,e,i){if(!t)return F;const s=St(t.lat,t.lon,i),n=kt(s),r=Math.round(s),o=function(t,e,i){const s=kt(St(t,e,i));let n=null,r=null,o=null;for(let a=1;a<=1440;a++){const l=i.getTime()+6e4*a,h=kt(St(t,e,new Date(l)));if(h!==s){n=l-6e4,r=l,o=h;break}}if(null===n||null===r||null===o)return null;for(let i=0;i<10;i++){const i=Math.floor((n+r)/2);kt(St(t,e,new Date(i)))===s?n=i:r=i}return{time:new Date(r),toMode:o}}(t.lat,t.lon,i),a=o?new Intl.DateTimeFormat("en-US",{timeZone:t.timezone||"UTC",hour:"2-digit",minute:"2-digit",hour12:!1}):null;return V`<div class="status-bar">
    <span>${e||""} | ${n} (${r}°)</span>
    ${o&&a?V`<span>Next: ${o.toMode} (${a.format(o.time)})</span>`:F}
  </div>`}const It={earth:"DSCOVR Earth",sun:"SDO HMI Continuum"},Et={earth:"DSCOVR/E",sun:"SDO/S"},Nt=["earth","sun"],Lt={earth:"EARTH",sun:"SUN"},Ut={earth:"DSCOVR",sun:"SDO HMI"};function Ot(t,e,i,s){return t.error?V`<div class="status-bar">
      <span>${t.error}</span>
    </div>`:"none"===t.panelSource?Tt(e,i,s):function(t,e,i,s,n){const r=n?`captured ${e} · ${zt(i,s)}`:"loading…";return V`<div class="status-bar">
    <span>${Lt[t]} · ${Ut[t]} · ${r}</span>
  </div>`}(t.panelSource,t.imageDate?Pt(t.imageDate):"",t.imageDate??new Date,new Date,t.imageLoaded)}const Ht=["sun","earth-url","earth-img"],Rt={sun:"SDO/S","earth-url":"DSCOVR/E url","earth-img":"DSCOVR/E img"},Vt={sun:{url:"sun",img:"sun"},earth:{url:"earth-url",img:"earth-img"}};function Bt(t){const e=t.fetches-t.failures;return{refreshes:t.refreshes,cacheHits:t.cacheHits,expired:t.expired,fetches:t.fetches,failures:t.failures,retries:t.retries,elapsed:e>0?t.fetchMsTotal/e:null,lastAttemptAt:t.lastAttemptAt}}function Ft(t){return null==t?"—":`${Math.round(t)}ms`}function Zt(t,e){return V`<div class="debug-overlay">
    <table>
      <tr>
        <th>source</th>
        <th>refresh</th>
        <th>cache</th>
        <th>expire</th>
        <th>fetch</th>
        <th>fail</th>
        <th>retry</th>
        <th>elapsed</th>
        <th>ago</th>
      </tr>
      ${Ht.map(e=>{const i=t[e],s="earth-img"!==e,n="sun"===e;return V`<tr>
          <td>${Rt[e]}</td>
          <td>${i.refreshes}</td>
          <td>${s?i.cacheHits:"—"}</td>
          <td>${s?i.expired:"—"}</td>
          <td>${i.fetches}</td>
          <td>${i.failures}</td>
          <td>${n?i.retries:"—"}</td>
          <td>${Ft(i.elapsed)}</td>
          <td>${null==i.lastAttemptAt?"—":Dt(Date.now()-i.lastAttemptAt)}</td>
        </tr>`})}
      ${(()=>{const e=function(t){const e=Ht.map(e=>t[e]),i=e.map(t=>t.elapsed).filter(t=>null!=t),s=t=>e.reduce((e,i)=>e+t(i),0);return{refreshes:Math.max(...e.map(t=>t.refreshes)),cacheHits:s(t=>t.cacheHits),expired:s(t=>t.expired),fetches:s(t=>t.fetches),failures:s(t=>t.failures),retries:s(t=>t.retries),elapsed:i.length?i.reduce((t,e)=>t+e,0)/i.length:null,lastAttemptAt:null}}(t);return V`<tr class="debug-total">
          <td>total</td>
          <td>${e.refreshes}</td>
          <td>${e.cacheHits}</td>
          <td>${e.expired}</td>
          <td>${e.fetches}</td>
          <td>${e.failures}</td>
          <td>${e.retries}</td>
          <td>${Ft(e.elapsed)}</td>
          <td>—</td>
        </tr>`})()}
    </table>
    <div class="debug-caption">since ${Pt(new Date(e))} (${Dt(Date.now()-e)})</div>
  </div>`}class jt{constructor(){this.failures=new Map,this.cooldowns=new Map,this.lastConfirmed=new Map}inCooldown(t){return Date.now()<(this.cooldowns.get(t)??0)}getStale(t){return this.lastConfirmed.get(t)??null}recordFailure(t,e){const i=(this.failures.get(t)??0)+1;this.failures.set(t,i);const s=Math.min(216e5,6e4*2**(i-1));this.cooldowns.set(t,Date.now()+Math.max(s,e??0))}recordSuccess(t,e){this.failures.delete(t),this.cooldowns.delete(t),this.lastConfirmed.set(t,e)}clear(){this.failures.clear(),this.cooldowns.clear(),this.lastConfirmed.clear()}}const Yt=new class{constructor(){this.entries=new Map,this.decoded=new Map,this.backoff=new jt}get(t,e){const i=this.entries.get(t);return null!=i&&Date.now()-i.fetchedAt<e?i.image:null}getEntry(t){return this.entries.get(t)??null}getStale(t){return this.backoff.getStale(t)}set(t,e){this.entries.set(t,{image:e,fetchedAt:Date.now()})}isDecoded(t,e){return this.decoded.get(t)===e}markDecoded(t,e){this.decoded.set(t,e)}inCooldown(t){return this.backoff.inCooldown(t)}recordFailure(t,e){this.backoff.recordFailure(t,e)}recordSuccess(t,e){this.backoff.recordSuccess(t,e)}clear(){this.entries.clear(),this.decoded.clear(),this.backoff.clear()}},qt=15e3;class Wt{constructor(t=Yt){this.cache=t}recover(t,e,i){throw t}hydrate(){const t=this.getCached();return t&&this.cache.markDecoded(this.source,t.url),t??void 0}async resolve(t,e){if(t.refreshes++,this.cache.inCooldown(this.source)){const t=this.cache.getStale(this.source);if(t)return t;throw new Error(`${this.source} is in cooldown after repeated failures`)}try{const i=this.getCached();i&&t.cacheHits++;const s=i??await this.fetchCandidateUrl(t);if(this.cache.isDecoded(this.source,s.url))return i||t.expired++,this.cache.recordSuccess(this.source,s),s;e!==t&&e.refreshes++;try{return await Xt(s.url,e),this.cache.markDecoded(this.source,s.url),this.cache.recordSuccess(this.source,s),s}catch(t){const i=await this.recover(t,s,e);return this.cache.markDecoded(this.source,i.url),this.cache.recordSuccess(this.source,i),i}}catch(t){throw this.cache.recordFailure(this.source,function(t){const e=t?.retryAfterMs;return"number"==typeof e?e:void 0}(t)),t}}}async function Jt(t,e){e.fetches++,e.lastAttemptAt=Date.now();const i=performance.now();try{const s=await t();return e.fetchMsTotal+=performance.now()-i,s}catch(t){throw e.failures++,t}}function Xt(t,e){return Jt(()=>function(t){const e=new Image;return e.src=t,Promise.race([e.decode(),new Promise((t,e)=>{setTimeout(()=>e(new Error("Image load timed out")),15e3)})])}(t),e)}const Gt="https://epic.gsfc.nasa.gov";class Kt extends Error{constructor(t,e){super(t),this.retryAfterMs=e}}const Qt=36e5;class te extends Wt{constructor(){super(...arguments),this.source="earth"}getCached(){return this.cache.get("earth",Qt)}fetchCandidateUrl(t){return Jt(()=>async function(t=36e5,e=Yt){const i=e.get("earth",t);if(i)return i;const s=await fetch(`${Gt}/api/natural`,{signal:AbortSignal.timeout(qt)});if(!s.ok)throw new Kt(`EPIC API request failed: ${s.status}`,function(t){if(!t)return;const e=Number(t);if(!Number.isNaN(e))return 1e3*e;const i=Date.parse(t);return Number.isNaN(i)?void 0:Math.max(0,i-Date.now())}(s.headers?.get("retry-after")??null));const n=await s.json(),r=n[n.length-1];if(!r)throw new Error("EPIC API returned no images");const{identifier:o}=r,a=o.slice(0,4),l=o.slice(4,6),h=o.slice(6,8),c=o.slice(8,10),d=o.slice(10,12),u=o.slice(12,14),p={url:`${Gt}/archive/natural/${a}/${l}/${h}/jpg/epic_1b_${o}.jpg`,date:new Date(Date.UTC(Number(a),Number(l)-1,Number(h),Number(c),Number(d),Number(u)))};return e.set("earth",p),p}(Qt,this.cache),t)}}const ee=9e5,ie=12e5;class se extends Wt{constructor(){super(...arguments),this.source="sun"}getCached(){return ne(this.cache)}fetchCandidateUrl(){return Promise.resolve(function(t=Yt){const e=ne(t);if(e)return e;const i=Math.floor((Date.now()-ie)/ee)*ee,s=ae(new Date(i));return t.set("sun",s),s}(this.cache))}async recover(t,e,i){let s=e,n=t;for(let t=0;t<3;t++){i.retries++,s=re(s.date);try{return await Xt(s.url,i),this.cache.set("sun",s),s}catch(t){n=t}}throw n}}function ne(t){const e=t.getEntry("sun");if(!e)return null;const i=e.image.date.getTime()+ee+ie,s=e.fetchedAt>=i?e.fetchedAt+ee:i;return Date.now()<s?e.image:null}function re(t){return ae(new Date(t.getTime()-ee))}function oe(t){return String(t).padStart(2,"0")}function ae(t){const e=t.getUTCFullYear(),i=oe(t.getUTCMonth()+1),s=oe(t.getUTCDate());return{url:`https://sdo.gsfc.nasa.gov/assets/img/browse/${e}/${i}/${s}/${e}${i}${s}_${`${oe(t.getUTCHours())}${oe(t.getUTCMinutes())}00`}_1024_HMIIC.jpg`,date:t}}class le{constructor(){this._resolvers={earth:new te,sun:new se},this._inFlight={}}hydrate(t){const e={};for(const i of t){const t=this._resolvers[i].hydrate();t&&(e[i]=t)}return e}async resolveAll(t,e){const i=t.filter(t=>!this._inFlight[t]);for(const t of i)this._inFlight[t]=!0;const s=await Promise.allSettled(i.map(t=>{const{url:i,img:s}=Vt[t];return this._resolvers[t].resolve(e[i],e[s])}));return i.map((t,e)=>(this._inFlight[t]=!1,{source:t,result:s[e]}))}}const he=["none","earth","sun","both","slide"];class ce{constructor(t){this._panelMode="none",this._imageUrl=null,this._imageDate=null,this._imageLoaded=!1,this._error=null,this._open=!1,this._mode="none",this._autoIntervalMs=6e4,this._autoDisplayedSource="earth",this._autoSwitchTimer=null,this._onChange=t,this._debug={sun:{refreshes:0,cacheHits:0,expired:0,fetches:0,failures:0,retries:0,fetchMsTotal:0,lastAttemptAt:null},"earth-url":{refreshes:0,cacheHits:0,expired:0,fetches:0,failures:0,retries:0,fetchMsTotal:0,lastAttemptAt:null},"earth-img":{refreshes:0,cacheHits:0,expired:0,fetches:0,failures:0,retries:0,fetchMsTotal:0,lastAttemptAt:null}},this._debugStartedAt=Date.now(),this._resolver=new le,this._images=this._resolver.hydrate(Nt)}get panelMode(){return this._panelMode}get imageUrl(){return this._imageUrl}get imageDate(){return this._imageDate}get imageLoaded(){return this._imageLoaded}get error(){return this._error}get isOpen(){return this._open}get mode(){return this._mode}get images(){return this._images}get debugStats(){return{sun:Bt(this._debug.sun),"earth-url":Bt(this._debug["earth-url"]),"earth-img":Bt(this._debug["earth-img"])}}get displaySources(){return"slide"===this._mode?[this._autoDisplayedSource]:this._fetchSources}viewModel(){return{error:this._error,panelSource:this._panelMode,imageUrl:this._imageUrl,imageDate:this._imageDate,imageLoaded:this._imageLoaded,showStrip:this._open&&"none"===this._panelMode,thumbnails:this.displaySources.map(t=>({source:t,url:this._images[t]?.url??null,date:this._images[t]?.date??null})),navButtonVisible:"none"!==this._mode,navButtonActive:this._open,debugStats:this.debugStats,debugStartedAt:this._debugStartedAt}}get _fetchSources(){switch(this._mode){case"both":case"slide":return Nt;case"earth":case"sun":return[this._mode];default:return[]}}configure(t,e){this._mode=t,this._autoIntervalMs=e,this._open="none"!==t,null!=this._autoSwitchTimer&&this._startAutoSwitchTimer()}start(){this._startAutoSwitchTimer(),this._open&&this.refresh()}stop(){clearInterval(this._autoSwitchTimer??void 0),this._autoSwitchTimer=null}tick(){this._open&&this.refresh()}toggle(){this._open=!this._open,this._open?(this._error=null,this._onChange(),this.refresh()):this.closePanel()}openPanel(t){this._panelMode=t,this._error=null;const e=this._images[t];e?(this._applyImage(e.url,e.date),this._imageLoaded=!0):(this._imageUrl=null,this._imageDate=null,this._imageLoaded=!1,this.refresh()),this._onChange()}closePanel(){this._panelMode="none",this._imageUrl=null,this._imageDate=null,this._error=null,this._onChange()}onImageLoad(){this._imageLoaded=!0,this._onChange()}onImageLoadError(){"none"!==this._panelMode&&(this._error=`${It[this._panelMode]} image unavailable`,this._panelMode="none",this._imageUrl=null,this._imageDate=null,this._onChange())}onSunThumbError(){delete this._images.sun,this._onChange()}_startAutoSwitchTimer(){clearInterval(this._autoSwitchTimer??void 0),"slide"===this._mode?this._autoSwitchTimer=setInterval(()=>{this._advanceSlide()},this._autoIntervalMs):this._autoSwitchTimer=null}_advanceSlide(){this._autoDisplayedSource="earth"===this._autoDisplayedSource?"sun":"earth",this._onChange()}_applyImage(t,e){this._imageLoaded=!1,this._imageUrl=t,this._imageDate=e}async refresh(){const t=await this._resolver.resolveAll(this._fetchSources,this._debug);for(const{source:e,result:i}of t)"fulfilled"===i.status?(this._images[e]=i.value,this._panelMode===e&&(this._applyImage(i.value.url,i.value.date),this._imageLoaded=!0)):this._panelMode!==e||this._images[e]||(this._panelMode="none",this._error=`${It[e]} image unavailable`);this._onChange()}}function de(t){const e=null==t.default_zoom||t.default_zoom<1||t.default_zoom>4?1:t.default_zoom,i=Number(t.refresh_mins),s=Number.isFinite(i)&&i>=.1?6e4*i:6e4,n=!0===t.periodic_zoom_change,r=Number(t.periodic_zoom_max),o=Number.isInteger(r)&&r>=2&&r<=4?r:4,a=!1!==t.zoom_animate,l="dark"===t.theme||"light"===t.theme?t.theme:"auto",h="south"===t.ecliptic_view,c=t.location?.latitude,d=t.location?.longitude,u="number"==typeof c&&"number"==typeof d&&c>=-90&&c<=90&&d>=-180&&d<=180?{lat:c,lon:d}:null,p=t.location?.name||null,g=function(t){if("number"==typeof t)return t>0?`max-height: ${t}px`:"";if("string"==typeof t){const e=/^(\d+(?:\.\d+)?)px$/.exec(t);if(e)return`max-height: ${e[1]}px`;const i=/^(\d+(?:\.\d+)?)%$/.exec(t);if(i){const t=Number(i[1]);return t>0?"aspect-ratio: "+100/t:""}}return""}(t.height),m=he.includes(t.gallery?.mode)?t.gallery?.mode:"none",_=Number(t.gallery?.slide_interval_secs),f=Number.isFinite(_)&&_>=.1?1e3*_:6e4;return{zoomLevel:e,refreshMs:s,periodicZoomChange:n,periodicZoomMax:o,zoomAnimate:a,colors:t.colors??{},theme:l,eclipticView:h,locationOverride:u,locationNameOverride:p,heightStyle:g,galleryMode:m,galleryIntervalMs:f}}const ue=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(s,t,i)})`
  :host {
    display: block;
    /* HA's grid-based views (sections/masonry) stretch grid items to fill their row by
       default. Without this, the host box grows past the card's own content height,
       leaving blank host background below the nav bar. */
    align-self: start;
    color-scheme: light dark;
    background: var(--ha-card-background, var(--card-background-color, var(--primary-background-color, Canvas)));
    color: var(--primary-text-color, CanvasText);
    /* :host is the same size as .card (see align-self above) and paints its own
       background — without matching its radius+clip, that square background pokes out
       past .card's rounded corners. */
    border-radius: var(--ha-card-border-radius, 12px);
    overflow: hidden;
  }
  .card {
    border-radius: var(--ha-card-border-radius, 12px);
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
  .image-view {
    display: none;
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    background: #000;
    cursor: pointer;
  }
  .image-view.visible {
    display: block;
  }
  .gallery {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 2px;
    padding: 2px;
    box-sizing: border-box;
  }
  .gallery-thumb {
    flex: 0 0 20%;
    position: relative;
    aspect-ratio: 1;
    padding: 0;
    border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
    border-radius: 4px;
    background: transparent;
    overflow: hidden;
    cursor: pointer;
  }
  .gallery-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .gallery-info {
    position: absolute;
    bottom: 1px;
    left: 2px;
    right: 2px;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }
  .gallery-label,
  .gallery-age {
    font-size: 8px;
    color: #fff;
    text-shadow: 0 0 2px #000;
    font-family: sans-serif;
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
  button[data-action="show-earth"].active {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #fff;
  }
  button[data-action="show-sun"].active {
    background: #f97316;
    border-color: #f97316;
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
`,pe=216e5,ge=Math.floor(5e3/36);class me{constructor(t,e=new Date){this._currentDate=e,this._isLiveMode=!0,this._isReplaying=!1,this._replayTimer=null,this._onChange=t}get currentDate(){return this._currentDate}set currentDate(t){this._currentDate=t}get isLiveMode(){return this._isLiveMode}set isLiveMode(t){this._isLiveMode=t}get isReplaying(){return this._isReplaying}tick(){this._isLiveMode&&(this._currentDate=new Date,this._onChange())}goLive(){this._isLiveMode=!0,this._currentDate=new Date,this._onChange()}navigate(t){this._isLiveMode=!1,this._currentDate=new Date(this._currentDate.getTime()+t),this._onChange()}navigateMonths(t){this._isLiveMode=!1;const e=new Date(this._currentDate);e.setMonth(e.getMonth()+t),this._currentDate=e,this._onChange()}toggleReplay(){null!==this._replayTimer?this._cancelReplay():this._startReplay()}stop(){clearInterval(this._replayTimer??void 0),this._replayTimer=null}_startReplay(){const t=this._isLiveMode,e=this._currentDate.getTime(),i=e-pe;this._isLiveMode=!1,this._isReplaying=!0;let s=0;this._currentDate=new Date(i),this._onChange(),this._replayTimer=setInterval(()=>{s++,s>=36?this._finishReplay(e,t):(this._currentDate=new Date(i+6e5*s),this._onChange())},ge)}_finishReplay(t,e){clearInterval(this._replayTimer??void 0),this._replayTimer=null,this._isReplaying=!1,this._isLiveMode=e,this._currentDate=new Date(t),this._onChange()}_cancelReplay(){clearInterval(this._replayTimer??void 0),this._replayTimer=null,this._isReplaying=!1,this._onChange()}}const _e=[{name:"Halley",semiMajorAxis:17.834,eccentricity:.967,periodDays:27510,longitudeOfPerihelion:111.33,meanAnomalyJ2000:38.38,color:"#88ccff",size:4,tailLength:40}],fe=Date.UTC(2e3,0,1,12,0,0);function ye(t){return(t.getTime()-fe)/864e5}function ve(t){return t*Math.PI/180}function be(t,e,i,s,n,r){const o=ye(r),a=2*Math.PI/e;let l=ve(t)+a*o;l=(l%(2*Math.PI)+2*Math.PI)%(2*Math.PI);const h=function(t,e){let i=t;for(let s=0;s<10;s++){i-=(i-e*Math.sin(i)-t)/(1-e*Math.cos(i))}return i}(l,i),c=i,d=2*Math.atan2(Math.sqrt(1+c)*Math.sin(h/2),Math.sqrt(1-c)*Math.cos(h/2)),u=s*(1-c*Math.cos(h));return{angle:((d+ve(n))%(2*Math.PI)+2*Math.PI)%(2*Math.PI),radius:u,trueAnomaly:d}}function $e(t,e){return be(t.meanLongitudeJ2000-t.longitudeOfPerihelion,t.periodDays,t.eccentricity,t.au,t.longitudeOfPerihelion,e)}function we(t,e){return be(t.meanAnomalyJ2000,t.periodDays,t.eccentricity,t.semiMajorAxis,t.longitudeOfPerihelion,e)}const xe="color-mix(in srgb, currentColor 12%, transparent)";function Me(t,e,i){const s=xe,{aPx:n,bPx:r,cPx:o,rotationDeg:a}=e,l=bt(o,a,i),{a:h,b:c,c:d,d:u,e:p,f:g}=l;t.appendChild(wt("ellipse",{cx:0,cy:0,rx:n,ry:r,fill:"none",style:`stroke: ${s}`,"stroke-width":1,"stroke-dasharray":"5, 5",transform:`matrix(${h}, ${c}, ${d}, ${u}, ${p}, ${g})`}));const m={style:`fill: ${s}`,"font-size":"9","font-family":"sans-serif","text-anchor":"start"},[_,f]=function(t,e,{a:i,b:s,c:n,d:r,e:o,f:a}){const l=i*t,h=n*e,c=Math.hypot(l,h),d=Math.atan2(h,l),u=Math.max(-1,Math.min(1,(pt-o)/c)),p=Math.acos(u),g=[d+p,d-p].map(l=>{const h=t*Math.cos(l),c=e*Math.sin(l);return{x:i*h+n*c+o,y:s*h+r*c+a}});return g[0].y<=g[1].y?[g[0],g[1]]:[g[1],g[0]]}(n,r,l),y=t=>function(t){const e=(t-40)/320;return Math.exp(mt+e*(_t-mt))}(Math.hypot(t.x-pt,t.y-pt));t.appendChild(wt("text",{x:_.x+3,y:_.y-3,...m})).textContent=`${y(_).toFixed(1)} AU`,t.appendChild(wt("text",{x:f.x+3,y:f.y+3+6,...m})).textContent=`${y(f).toFixed(1)} AU`}function Ce(t,e,i,s,n=!0){t.appendChild(wt("circle",{cx:e,cy:i,r:s.size,fill:s.color})),n&&(t.appendChild(wt("text",{x:e,y:i-s.size-6,style:`fill: ${dt}`,...gt})).textContent=s.name)}function Ae(t){const e=t.eccentricity,i=t.semiMajorAxis,s=ft(i*(1-e));let n=ft(i*(1+e));const r=ft(30.05);if(n>r){n=r+4*(n-r)}return{...yt(s,n),rotationDeg:t.longitudeOfPerihelion}}function Se(t,e,i){const{aPx:s,bPx:n,cPx:r,rotationDeg:o}=Ae(e);t.appendChild(wt("ellipse",{cx:0,cy:0,rx:s,ry:n,fill:"none",style:`stroke: ${xe}`,"stroke-width":1,"stroke-dasharray":"4, 8",transform:$t(r,o,i)}))}function ke(t,e,i,s,n,r,o){const a=e-n,l=i-r,h=Math.sqrt(a*a+l*l)||1,c=a/h,d=l/h,u=o??s.tailLength,p=e+c*u,g=i+d*u;t.appendChild(wt("line",{x1:e,y1:i,x2:p,y2:g,stroke:"rgba(136, 204, 255, 0.5)","stroke-width":2,"stroke-linecap":"round",opacity:"0.7"})),t.appendChild(wt("circle",{cx:e,cy:i,r:s.size,fill:s.color})),t.appendChild(wt("text",{x:e,y:i-s.size-6,style:`fill: ${dt}`,...gt})).textContent=s.name}const ze=29.53059,De=Date.UTC(2e3,0,6,18,14,0),Pe=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Third Quarter","Waning Crescent"];const Te=735;function Ie(t,e,i){const{phase:s,phaseName:n,illumination:r}=function(t){const e=((t.getTime()-De)/864e5%ze+ze)%ze/ze,i=Math.floor((e+1/16)%1*8);return{phase:e,phaseName:Pe[i],illumination:(1-Math.cos(2*Math.PI*e))/2}}(e),o=wt("g",{class:"moon-phase-indicator"});if(o.appendChild(wt("circle",{cx:40,cy:Te,r:30,fill:"#1a1a2e"})),r>.01){const t=30,e=Te-t,n=r,a=n>.5;let l=s<.5;"south"===i&&(l=!l);let h;h=l?a?1:0:a?0:1;const c=[`M 40 ${e}`,`A ${t} ${t} 0 0 ${l?1:0} 40 ${Te+t}`,`A ${Math.abs(2*n-1)*t} ${t} 0 0 ${h} 40 ${e}`,"Z"].join(" ");o.appendChild(wt("path",{d:c,fill:"#cccccc"}))}const a=wt("text",{x:10,y:779,fill:"#aaaaaa","font-size":"14","font-family":"sans-serif","text-anchor":"start"});a.textContent=n,o.appendChild(a),t.appendChild(o)}const Ee="color-mix(in srgb, currentColor 70%, transparent)";function Ne(t,e,i,s,n,r,o,a=20){const l=t-n,h=e-r,c=i*i+s*s,d=2*(l*i+h*s),u=d*d-4*c*(l*l+h*h-o*o);if(u<0)return a;const p=(-d+Math.sqrt(u))/(2*c);return p>0?p:a}function Le(t,e,i,s){let n;if(null!=s){n=((e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600+s/15)%24+24)%24}else if(i){const{hours:t,minutes:s}=function(t,e){try{const i=new Intl.DateTimeFormat("en-US",{timeZone:e,hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(t),s=i.find(t=>"hour"===t.type),n=i.find(t=>"minute"===t.type);let r=Number(s?.value);return 24===r&&(r=0),{hours:r,minutes:Number(n?.value)}}catch{return{hours:t.getUTCHours(),minutes:t.getUTCMinutes()}}}(e,i);n=t+s/60}else n=e.getHours()+e.getMinutes()/60;return t+n/24*2*Math.PI}function Ue(t,e,i,s,n,r=-1,o={}){const a=function(t,e){return $e(t,e).angle}(ht,i),l=Le(a,i,n?.timezone,n?.lon),h=Math.cos(a),c=Math.sin(a),d=Math.cos(l),u=Math.sin(l),p=pt+e*h+s*d,g=pt+r*e*c+r*s*u,m=n&&null!=n.lat?St(n.lat,n.lon,i):function(t,e){const i=e+Math.PI,s=Math.atan2(Math.sin(t-i),Math.cos(t-i));return(Math.PI/2-Math.abs(s))*(180/Math.PI)}(l,a),_=n&&null!=n.lat?function(t,e,i){const{dayOfYear:s,hourAngleRad:n}=At(e,i),r=2*Math.PI/365*(s+10)-Math.PI/2,o=Math.atan2(Math.cos(Ct)*Math.sin(r),Math.cos(r)),a=t*Math.PI/180,l=Math.cos(a)*Math.cos(n),h=Math.cos(a)*Math.sin(n),c=Math.sin(a),d=l*Math.cos(o)-h*Math.sin(o),u=(l*Math.sin(o)+h*Math.cos(o))*Math.cos(Ct)+c*Math.sin(Ct),p=Math.atan2(u,d);return Math.atan2(Math.sin(p-r),Math.cos(p-r))}(n.lat,n.lon,i):null,f=null!=_?a+Math.PI+_:l,{color:y,halfAngle:v}=function(t,e,i){let s;return s=t>=0?i.cone_day??"color-mix(in srgb, currentColor 8%, transparent)":t>=-6?i.cone_twilight_civil??"color-mix(in srgb, color-mix(in srgb, rgb(255, 220, 160) 85%, currentColor 15%) 13%, transparent)":t>=-12?i.cone_twilight_nautical??"color-mix(in srgb, color-mix(in srgb, rgb(90, 130, 180) 85%, currentColor 15%) 17%, transparent)":t>=-18?i.cone_twilight_astronomical??"color-mix(in srgb, color-mix(in srgb, rgb(70, 50, 130) 85%, currentColor 15%) 24%, transparent)":i.cone_night??"color-mix(in srgb, color-mix(in srgb, rgb(30, 20, 60) 85%, currentColor 15%) 30%, transparent)",{color:s,halfAngle:t>=0||t<-18?90:null!=e?180*Math.abs(e)/Math.PI:90-t}}(m,_,o);!function(t,e,i,s,n,r,o,a=-1){const l=ut,h=n*Math.PI/180,c=n>=90?1:0,d=-1===a?1:0,u=s+h,p=s-h,g=`M ${e} ${i} L ${e+l*Math.cos(u)} ${i+a*l*Math.sin(u)} A 800 800 0 ${c} ${d} ${e+l*Math.cos(p)} ${i+a*l*Math.sin(p)} Z`,m=t.querySelector("defs")||t.insertBefore(wt("defs",{}),t.firstChild),_=wt("clipPath",{id:r});_.appendChild(wt("path",{d:g})),m.appendChild(_),t.appendChild(wt("circle",{cx:pt,cy:pt,r:390,fill:o,"clip-path":`url(#${r})`}))}(t,p,g,f,v,"sky-clip",y,r);const b={style:"stroke: color-mix(in srgb, currentColor 30%, transparent)","stroke-width":1,"stroke-dasharray":"4, 4"},$=f+Math.PI/2,w=f-Math.PI/2,x=Ne(p,g,Math.cos($),r*Math.sin($),pt,pt,390)+8,M=Ne(p,g,Math.cos(w),r*Math.sin(w),pt,pt,390)+8;t.appendChild(wt("line",{...b,x1:p+x*Math.cos($),y1:g+r*x*Math.sin($),x2:p+M*Math.cos(w),y2:g+r*M*Math.sin(w)}));const C=Ne(p,g,Math.cos(f),r*Math.sin(f),pt,pt,390)+8;t.appendChild(wt("line",{...b,x1:p,y1:g,x2:p+C*Math.cos(f),y2:g+r*C*Math.sin(f)}))}const Oe="offscreen-markers";function He(t,e,i,s,n,r,o,a,l){const h=i-t,c=s-e,d=n+l,u=r+l,p=o-l,g=a-l;let m=Number.POSITIVE_INFINITY;if(0!==h){const i=(d-t)/h;if(i>0&&i<m){const t=e+c*i;t>=u&&t<=g&&(m=i)}const s=(p-t)/h;if(s>0&&s<m){const t=e+c*s;t>=u&&t<=g&&(m=s)}}if(0!==c){const i=(u-e)/c;if(i>0&&i<m){const e=t+h*i;e>=d&&e<=p&&(m=i)}const s=(g-e)/c;if(s>0&&s<m){const e=t+h*s;e>=d&&e<=p&&(m=s)}}return m===Number.POSITIVE_INFINITY?{x:t,y:e}:{x:t+h*m,y:e+c*m}}function Re(t,e,i,s,n){const r=Math.atan2(s-e,i-t),o=8*Math.sqrt(3)/2,a=t+Math.cos(r)*o/2,l=e+Math.sin(r)*o/2,h=r+Math.PI/2,c=r-Math.PI/2,d=t-Math.cos(r)*o/2+4*Math.cos(h),u=e-Math.sin(r)*o/2+4*Math.sin(h),p=t-Math.cos(r)*o/2+4*Math.cos(c),g=e-Math.sin(r)*o/2+4*Math.sin(c),m=wt("polygon",{});return m.setAttribute("points",`${a},${l} ${d},${u} ${p},${g}`),m.setAttribute("fill",n),m}function Ve(t,e,i,s,n,r,o,a){const l=wt("text",{});l.setAttribute("fill",r),l.setAttribute("font-size",String(9)),l.setAttribute("font-family","sans-serif"),l.textContent=n;const h=Math.atan2(s-e,i-t),c=t-10*Math.cos(h),d=e-10*Math.sin(h);return c<(o+a)/2?l.setAttribute("text-anchor","start"):l.setAttribute("text-anchor","end"),l.setAttribute("x",String(c)),l.setAttribute("y",String(d+3)),l}function Be(t){return"Saturn"===t.name?24:"Earth"===t.name?t.size+22+ct.size:t.size}function Fe(t,e="north",i=null,s={},n=!1){const r=n?1:-1,o=wt("svg",{viewBox:"0 0 800 800",width:"100%",height:"100%",style:"background: transparent; display: block;"}),a=[],l=[],h=function(t){const e=[];let i=Number.NEGATIVE_INFINITY,s=0;for(const n of t){const t=ft(n.au),r=Be(n),o=i+s+r+8,a=Math.max(t,o);e.push(a),i=a,s=r}return e}(lt),c=lt.indexOf(ht),d=lt.map((t,e)=>function(t,e){const{au:i,eccentricity:s}=t;return{...yt(ft(i*(1-s))+e,ft(i*(1+s))+e),rotationDeg:t.longitudeOfPerihelion}}(t,h[e]-ft(t.au))),u=h[c];Ue(o,u,t,ht.size,i,r,s),function(t,e,i={},s=-1){const n=i.season_line??"color-mix(in srgb, currentColor 25%, transparent)",r=i.season_label??"color-mix(in srgb, currentColor 50%, transparent)",o=1===s;t.appendChild(wt("line",{x1:0,y1:pt,x2:ut,y2:pt,style:`stroke: ${n}`,"stroke-width":1,"stroke-dasharray":"4, 6"})),t.appendChild(wt("line",{x1:pt,y1:0,x2:pt,y2:ut,style:`stroke: ${n}`,"stroke-width":1,"stroke-dasharray":"4, 6"}));const[a,l,h,c]={north:{normal:["Winter","Autumn","Summer","Spring"],ecliptic:["Spring","Summer","Autumn","Winter"]},south:{normal:["Summer","Spring","Winter","Autumn"],ecliptic:["Autumn","Winter","Spring","Summer"]}}[e][o?"ecliptic":"normal"],d=[{name:a,startAngle:90,endAngle:180,isTopHalf:!0},{name:l,startAngle:0,endAngle:90,isTopHalf:!0},{name:h,startAngle:270,endAngle:360,isTopHalf:!1},{name:c,startAngle:180,endAngle:270,isTopHalf:!1}],u=t.querySelector("defs")||t.insertBefore(wt("defs",{}),t.firstChild);d.forEach((e,i)=>{const s=`season-arc-${i}`,n=e.startAngle*Math.PI/180,o=e.endAngle*Math.PI/180,a=e.isTopHalf?368:380,l=pt+a*Math.cos(n),h=pt-a*Math.sin(n),c=pt+a*Math.cos(o),d=pt-a*Math.sin(o),p=wt("path",{id:s,d:e.isTopHalf?`M ${c} ${d} A ${a} ${a} 0 0 1 ${l} ${h}`:`M ${l} ${h} A ${a} ${a} 0 0 0 ${c} ${d}`,fill:"none"});u.appendChild(p);const g=wt("text",{style:`fill: ${r}`,"font-size":20,"font-family":"sans-serif"}),m=wt("textPath",{href:`#${s}`,startOffset:"50%","text-anchor":"middle"});m.textContent=e.name,g.appendChild(m),t.appendChild(g)})}(o,e,s,r),d.forEach(t=>{Me(o,t,r)});for(const t of _e)Se(o,t,r);Ce(o,pt,pt,at,!1);let p=pt,g=pt,m=0;lt.forEach((e,i)=>{const{angle:s,trueAnomaly:n}=$e(e,t),{aPx:h,ePx:c}=d[i],{x:u,y:_}=vt(h,c,n,s,r);if(e.name===ht.name&&(p=u,g=_,m=s),a.push({name:e.name,x:u,y:_,color:e.color}),"Saturn"===e.name){const t=Math.round(e.size/2),i={...e,size:t};Ce(o,u,_,i,!1),function(t,e,i,s){t.appendChild(wt("circle",{cx:e,cy:i,r:23,fill:"none",stroke:s.color,"stroke-width":2,opacity:.6})),t.appendChild(wt("circle",{cx:e,cy:i,r:18,fill:"none",stroke:s.color,"stroke-width":6,opacity:.6}))}(o,u,_,e),l.push({name:e.name,x:u,y:_,radius:24})}else Ce(o,u,_,e,!1),l.push({name:e.name,x:u,y:_,radius:e.size})});for(const e of _e){const{angle:i,radius:s,trueAnomaly:n}=we(e,t),{aPx:l,ePx:h}=Ae(e),{x:c,y:d}=vt(l,h,n,i,r),u=e.semiMajorAxis*(1-e.eccentricity),p=Math.min(1,u/s),g=e.tailLength*p;ke(o,c,d,e,pt,pt,g),a.push({name:e.name,x:c,y:d,color:e.color})}const _=function(t){const e=ye(t),i=2*Math.PI/ct.periodDays;return((ve(ct.meanLongitudeJ2000)+i*e)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)}(t),f=p+22*Math.cos(_),y=g+22*r*Math.sin(_);a.push({name:ct.name,x:f,y:y,color:ct.color,offscreen:!1}),l.push({name:ct.name,x:f,y:y,radius:ct.size}),o.appendChild(wt("circle",{cx:p,cy:g,r:22,fill:"none",style:`stroke: ${xe}`,"stroke-width":.5,"stroke-dasharray":"2, 3"})),Ce(o,f,y,ct,!1);const v=[...a,{name:at.name,x:pt,y:pt,color:at.color}];!function(t,e,i,s){for(const n of e){let e=Number.POSITIVE_INFINITY,r=0;for(const t of i){if(t.name===n.name)continue;const i=Math.hypot(t.x-n.x,t.y-n.y);i<e&&(e=i,r=t.y-n.y)}const o=e<80&&r<0?n.y+n.radius+3+8:n.y-n.radius-3;t.appendChild(wt("text",{x:n.x,y:o,style:`fill: ${s}`,...gt})).textContent=n.name}}(o,l,v,dt);const b=Le(m,t,i?.timezone,i?.lon);return function(t,e,i,s,n,r=-1){const o=e+n*Math.cos(s),a=i+r*n*Math.sin(s);t.appendChild(wt("line",{x1:e,y1:i,x2:o,y2:a,style:`stroke: ${Ee}`,"stroke-width":2,"stroke-linecap":"round"})),t.appendChild(wt("circle",{cx:o,cy:a,r:2,style:`fill: ${Ee}`}))}(o,p,g,b,ht.size,r),Ie(o,t,e),{svg:o,positions:a,updateMarkers:function(t){const e=o.getElementById(Oe);e&&e.remove(),o.appendChild(function(t,e){const i=wt("g",{id:Oe}),s=e.width,n=e.centerX-s/2,r=e.centerY-s/2,o=n+s,a=r+s;for(const s of t){if(!1===s.offscreen)continue;if(s.x>=n&&s.x<=o&&s.y>=r&&s.y<=a)continue;const{x:t,y:l}=He(e.centerX,e.centerY,s.x,s.y,n,r,o,a,10),h=Re(t,l,s.x,s.y,s.color);i.appendChild(h);const c=Ve(t,l,s.x,s.y,s.name,s.color,n,o);i.appendChild(c)}return i}(a,t))}}}class Ze{constructor(t){this._zoom=t,this._svg=null,this._updateMarkers=null}mount(t,e,i,s,n,r){for(;t.firstChild;)t.removeChild(t.firstChild);const{svg:o,updateMarkers:a}=Fe(e,i,s,n,r);this._svg=o,this._updateMarkers=a,t.appendChild(o),this._bindPointerEvents(o)}applyViewState(){const t=this._zoom.panZoomState;t&&(this._svg&&this._svg.setAttribute("viewBox",this._zoom.viewBox),this._updateMarkers?.(t))}_bindPointerEvents(t){t.addEventListener("pointerdown",t=>this._onPointerDown(t)),t.addEventListener("pointermove",t=>this._onPointerMove(t)),t.addEventListener("pointerup",t=>this._onPointerUp(t))}_onPointerDown(t){const e=t.currentTarget;e.setPointerCapture(t.pointerId),this._zoom.startDrag(t.clientX,t.clientY),e.style.cursor="grabbing"}_onPointerMove(t){if(!this._zoom.isDragging)return;const e=t.currentTarget.getBoundingClientRect();this._zoom.updateDrag(t.clientX,t.clientY,e)}_onPointerUp(t){if(!this._zoom.isDragging)return;this._zoom.endDrag();const e=t.currentTarget;e.releasePointerCapture(t.pointerId),e.style.cursor="grab"}}const je={dark:{background:"#1c1c1c",color:"#e1e1e1"},light:{background:"#ffffff",color:"#212121"}},Ye=["--ha-card-background","--card-background-color","--primary-background-color","--primary-text-color","--secondary-background-color","--divider-color"];function qe(t,e){const i="auto"===t?null:je[t],s={};for(const t of Ye)s[t]=i?"initial":null;return{background:e??i?.background??"",color:i?.color??"",vars:s}}class We{constructor(t,e){this._viewState=t,this._onFrame=e,this._animationId=null}get isAnimating(){return null!==this._animationId}animateTo(t,e,i){this.cancel();const s=e,n=xt[t];let r=null;const o=e=>{null===r&&(r=e);const a=e-r,l=Math.min(a/2e3,1),h=function(t){return t<.5?4*t*t*t:1-(-2*t+2)**3/2}(l),c=s+(n-s)*h;this._viewState.setViewport(c),this._onFrame(),l<1?this._animationId=requestAnimationFrame(o):(this._viewState.setZoomLevel(t),this._animationId=null,this._onFrame(),i?.())};this._animationId=requestAnimationFrame(o)}cancel(){null!==this._animationId&&(cancelAnimationFrame(this._animationId),this._animationId=null)}}class Je{constructor(t,e){this._viewState=null,this._zoomAnimator=null,this._defaultZoomLevel=1,this._periodicZoomChange=!1,this._periodicZoomMax=4,this._animate=!1,this._onChange=t,this._onViewBoxChange=e}get zoomLevel(){return this._viewState?.zoomLevel??null}get displayZoomLevel(){return this._viewState?.zoomLevel??this._defaultZoomLevel}get panZoomState(){return this._viewState}get viewBox(){return this._viewState?.viewBox??null}get isDragging(){return this._viewState?.isDragging??!1}get periodicZoomChange(){return this._periodicZoomChange}get periodicZoomMax(){return this._periodicZoomMax}get animate(){return this._animate}configure(t,e,i,s){this._defaultZoomLevel=t,this._periodicZoomChange=e,this._periodicZoomMax=i,this._animate=s}ensureInitialized(){this._viewState||(this._viewState=new Mt(this._defaultZoomLevel),this._zoomAnimator=new We(this._viewState,()=>this._onViewBoxChange()))}reset(){this._viewState=null,this._zoomAnimator=null}recenter(){this._viewState?.recenter()}zoomIn(){const t=this._viewState;if(!t)return;const e=t.width;t.zoomIn()&&this._apply(t,e)}zoomOut(){const t=this._viewState;if(!t)return;const e=t.width;t.zoomOut()&&this._apply(t,e)}tick(){this._periodicZoomChange&&this.advancePeriodic()}advancePeriodic(){const t=this._viewState;if(!t)return;const e=t.width,i=t.zoomLevel>=this._periodicZoomMax?1:t.zoomLevel+1;t.setZoomLevel(i),this._apply(t,e)}startDrag(t,e){this._viewState?.startDrag(t,e)}updateDrag(t,e,i){this._viewState?.isDragging&&(this._viewState.updateDrag(t,e,i),this._onViewBoxChange())}endDrag(){this._viewState?.endDrag()}_apply(t,e){this._animate&&this._zoomAnimator?(this._onChange(),this._zoomAnimator.animateTo(t.zoomLevel,e,()=>this._onChange())):this._onChange()}}class Xe extends rt{static{this.styles=ue}constructor(){super(),this._dateNav=new me(()=>this._render()),this._zoom=new Je(()=>this._render(),()=>this._solarView.applyViewState()),this._hemisphere="north",this._hassLocation={lat:null,lon:null,timezone:null,name:null},this._locationOverride=null,this._locationNameOverride=null,this._autoUpdateTimer=null,this._debugTimer=null,this._colors={},this._refreshMs=6e4,this._eclipticView=!1,this._theme="auto",this._heightStyle="",this._solarView=new Ze(this._zoom),this._onVisibilityChange=null,this._gallery=new ce(()=>this._render())}get _locationData(){const t=this._locationOverride?.lat??this._hassLocation.lat,e=this._locationOverride?.lon??this._hassLocation.lon;return null!=t&&null!=e?{lat:t,lon:e,timezone:this._hassLocation.timezone??"UTC"}:null}get _effectiveLocationName(){return this._locationNameOverride??this._hassLocation.name}get _zoomLevel(){return this._zoom.zoomLevel}set hass(t){const e={lat:t.config?.latitude??null,lon:t.config?.longitude??null,timezone:t.config?.time_zone||null,name:t.config?.location_name||null},i=this._hassLocation;e.lat===i.lat&&e.lon===i.lon&&e.timezone===i.timezone&&e.name===i.name||(this._hassLocation=e,this._render())}setConfig(t){this._config=t;const e=de(t);this._zoom.configure(e.zoomLevel,e.periodicZoomChange,e.periodicZoomMax,e.zoomAnimate),this._refreshMs=e.refreshMs,this._colors=e.colors,this._theme=e.theme,this._eclipticView=e.eclipticView,this._locationOverride=e.locationOverride,this._locationNameOverride=e.locationNameOverride,this._heightStyle=e.heightStyle,this._gallery.configure(e.galleryMode,e.galleryIntervalMs),null!=this._autoUpdateTimer&&this._startAutoUpdateTimer(),(null!=this._debugTimer||t.debug)&&this._startDebugTimer()}connectedCallback(){super.connectedCallback(),this._render(),this._startAutoUpdateTimer(),this._startDebugTimer(),this._gallery.start(),this._onVisibilityChange=()=>{document.hidden||this._dateNav.tick()},document.addEventListener("visibilitychange",this._onVisibilityChange)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._autoUpdateTimer??void 0),this._autoUpdateTimer=null,clearInterval(this._debugTimer??void 0),this._debugTimer=null,this._gallery.stop(),this._dateNav.stop(),this._onVisibilityChange&&document.removeEventListener("visibilitychange",this._onVisibilityChange),this._onVisibilityChange=null}render(){const t=this._locationData?.lat;null!=t&&(this._hemisphere=t<0?"south":"north");const e=this._gallery.viewModel(),i=Ot(e,this._locationData,this._effectiveLocationName,this._dateNav.currentDate),s=this._zoom.displayZoomLevel,n=qe(this._theme,this._colors.background);return V`
      <div class="card" style="background: ${n.background}; color: ${n.color}">
        <div class="solar-view-wrapper">
          <div class="status-bar-row">
            ${i}
            ${this._config?.debug?Zt(e.debugStats,e.debugStartedAt):F}
          </div>
          <div
            id="solar-view"
            class=${"none"===e.panelSource?"":"hidden"}
            style=${this._heightStyle||F}
          ></div>
          <img
            id="image-view"
            class="image-view ${"none"===e.panelSource?"":"visible"}"
            style=${this._heightStyle||F}
            src=${e.imageUrl??F}
            alt=""
            @click=${this._onImageClick}
            @load=${this._onImageLoad}
            @error=${this._onImageLoadError}
          />
          ${e.showStrip?V`<div class="gallery">
                  ${e.thumbnails.map(({source:t,url:e,date:i})=>V`<button
                      class="gallery-thumb"
                      data-source=${t}
                      title=${`Show ${Et[t]}`}
                      @click=${this._onGalleryClick}
                    >
                      <img
                        src=${e??F}
                        alt=""
                        @error=${"sun"===t?this._onSunThumbError:void 0}
                      />
                      <div class="gallery-info">
                        <span class="gallery-label">${Et[t]}</span>
                        <span class="gallery-age"
                          >${i?zt(i,new Date):"loading…"}</span
                        >
                      </div>
                    </button>`)}
                </div>`:F}
        </div>
        <div class="nav">
          <span class="btn-group">
            <button data-action="month-back" title="Back 1 month" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>⋘</button>
            <button data-action="day-back" title="Back 1 day" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>≪</button>
            <button data-action="hour-back" title="Back 1 hour" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>&lt;</button>
            <button data-action="today" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>Now</button>
            <button data-action="hour-forward" title="Forward 1 hour" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>&gt;</button>
            <button data-action="day-forward" title="Forward 1 day" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>≫</button>
            <button data-action="month-forward" title="Forward 1 month" ?disabled=${this._dateNav.isReplaying} @click=${this._onNavClick}>⋙</button>
            <button data-action="replay" title="Replay last 6h" @click=${this._onNavClick}>↺</button>
          </span>
          <span class="nav-spacer"></span>
          <span class="date">${Pt(this._dateNav.currentDate)}</span>
          <span class="nav-spacer"></span>
          <span class="btn-group">
            <button data-action="zoom-out" title="Zoom out" @click=${this._onNavClick}>&minus;</button>
            <span class="zoom-level">${s}</span>
            <button data-action="zoom-in" title="Zoom in" @click=${this._onNavClick}>+</button>
          </span>
          ${e.navButtonVisible?V`<span class="nav-spacer"></span>
                  <span class="btn-group">
                    <button
                      data-action="gallery"
                      title="Show image gallery"
                      class=${e.navButtonActive?"active":""}
                      @click=${this._onNavClick}
                    >
                      <span class="icon">☷</span>
                    </button>
                  </span>`:F}
          ${this._config?.show_version?V`<span class="card-version">v${"3.0.0"}</span>`:F}
        </div>
      </div>
    `}updated(){this._zoom.ensureInitialized();const t=this.shadowRoot.getElementById("solar-view");t&&this._solarView.mount(t,this._dateNav.currentDate,this._hemisphere,this._locationData,this._colors,this._eclipticView),this._solarView.applyViewState();const e=qe(this._theme,this._colors.background);this.style.background=e.background,this.style.color=e.color;for(const t of Ye)null===e.vars[t]?this.style.removeProperty(t):this.style.setProperty(t,e.vars[t])}_render(){this.requestUpdate(),this.performUpdate()}_startAutoUpdateTimer(){clearInterval(this._autoUpdateTimer??void 0);const t=this._refreshMs;this._autoUpdateTimer=setInterval(()=>{this._dateNav.tick(),this._zoom.tick(),this._gallery.tick()},t)}_startDebugTimer(){clearInterval(this._debugTimer??void 0),this._config?.debug?this._debugTimer=setInterval(()=>this._render(),1e3):this._debugTimer=null}_navigate(t){this._dateNav.navigate(t)}_goToday(){this._zoom.recenter(),this._dateNav.goLive()}_onNavClick(t){this._handleNavAction(t.currentTarget.dataset.action)}_onGalleryClick(t){const e=t.currentTarget.dataset.source;this._gallery.openPanel(e)}_handleNavAction(t){switch(t){case"replay":this._dateNav.toggleReplay();break;case"zoom-out":this._zoom.zoomOut();break;case"month-back":this._dateNav.navigateMonths(-1);break;case"day-back":this._navigate(-864e5);break;case"hour-back":this._navigate(-36e5);break;case"today":this._goToday();break;case"hour-forward":this._navigate(36e5);break;case"day-forward":this._navigate(864e5);break;case"month-forward":this._dateNav.navigateMonths(1);break;case"zoom-in":this._zoom.zoomIn();break;case"gallery":this._gallery.toggle()}}_onImageClick(){this._gallery.closePanel()}_onImageLoadError(){this._gallery.onImageLoadError()}_onImageLoad(){this._gallery.onImageLoad()}_onSunThumbError(){this._gallery.onSunThumbError()}getCardSize(){return 6}static getStubConfig(){return{default_zoom:2,periodic_zoom_change:!1,periodic_zoom_max:4,refresh_mins:1,zoom_animate:!0,colors:{},gallery:{mode:"both"}}}}customElements.define("ha-planetary-solar-system-card",Xe),window.customCards=window.customCards||[],window.customCards.push({type:"ha-planetary-solar-system-card",name:"Solar View Card",description:"Planetary solar system visualization card",preview:!0});
