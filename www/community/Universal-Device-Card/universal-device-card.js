function t(t,e,i,s){var o,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,m=f?f.emptyScript:"",v=_.reactiveElementPolyfillSupport,g=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const n=this.constructor;if(!1===s&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??$)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,v?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,x=t=>t,E=A.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,z=`<${P}>`,U=document,O=()=>U.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,T="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,j=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),F=new WeakMap,J=U.createTreeWalker(U,129);function K(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=M;for(let e=0;e<i;e++){const i=t[e];let r,c,l=-1,d=0;for(;d<i.length&&(a.lastIndex=d,c=a.exec(i),null!==c);)d=a.lastIndex,a===M?"!--"===c[1]?a=H:void 0!==c[1]?a=j:void 0!==c[2]?(I.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=D):void 0!==c[3]&&(a=D):a===D?">"===c[0]?(a=o??M,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?D:'"'===c[3]?B:L):a===B||a===L?a=D:a===H||a===j?a=M:(a=D,o=void 0);const h=a===D&&t[e+1].startsWith("/>")?" ":"";n+=a===M?i+z:l>=0?(s.push(r),i.slice(0,l)+S+i.slice(l)+k+h):i+k+(-2===l?e:h)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,r=this.parts,[c,l]=Z(t,e);if(this.el=G.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[n++],i=s.getAttribute(t).split(k),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?et:"?"===a[1]?it:"@"===a[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(r.push({type:6,index:o}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),J.nextNode(),r.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===P)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)r.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=N(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);J.currentNode=s;let o=J.nextNode(),n=0,a=0,r=i[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new Y(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new ot(o,this,t)),this._$AV.push(e),r=i[++a]}n!==r?.index&&(o=J.nextNode(),n++)}return J.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),N(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Q(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=Q(this,s[i+a],e,a),r===W&&(r=this._$AH[a]),n||=!N(r)||r!==this._$AH[a],r===V?t=V:t!==V&&(t+=(r??"")+o[a+1]),this._$AH[a]=r}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===W)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(G,Y),(A.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Y(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}rt._$litElement$=!0,rt.finalized=!0,at.litElementHydrateSupport?.({LitElement:rt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:rt}),(at.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},ht=(t=dt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const _t=["ha-form","ha-icon","ha-icon-button","ha-selector","ha-textfield","ha-icon-picker","ha-icon-button","ha-entity-picker","ha-select","ha-dialog","ha-sortable","ha-svg-icon","ha-alert","ha-button","ha-color-picker","ha-badge","ha-sankey-chart","mwc-button"],ft=async t=>{const e=_t;try{if(e.every(t=>customElements.get(t)))return;await Promise.race([customElements.whenDefined("partial-panel-resolver"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for partial-panel-resolver")),1e4))]);const t=document.createElement("partial-panel-resolver");if(!t)throw new Error("Failed to create partial-panel-resolver element");if(t.hass={panels:[{url_path:"tmp",component_name:"config"}]},"function"!=typeof t._updateRoutes)throw new Error("partial-panel-resolver does not have _updateRoutes method");if(t._updateRoutes(),!t.routerOptions?.routes?.tmp?.load)throw new Error("Failed to create tmp route in partial-panel-resolver");await Promise.race([t.routerOptions.routes.tmp.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading tmp route")),1e4))]),await Promise.race([customElements.whenDefined("ha-panel-config"),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout waiting for ha-panel-config")),1e4))]);const i=document.createElement("ha-panel-config");if(!i)throw new Error("Failed to create ha-panel-config element");if(!i.routerOptions?.routes?.automation?.load)throw new Error("ha-panel-config does not have automation route");await Promise.race([i.routerOptions.routes.automation.load(),new Promise((t,e)=>setTimeout(()=>e(new Error("Timeout loading automation components")),1e4))]);const s=e.filter(t=>!customElements.get(t));if(s.length>0)throw new Error(`Failed to load components: ${s.join(", ")}`)}catch(t){try{if(window.customElements&&window.customElements.get("home-assistant")){const t=new CustomEvent("ha-request-load-components",{detail:{components:e},bubbles:!0,composed:!0});document.dispatchEvent(t)}}catch(t){}}};const mt={en:{common:{device:"Device",reboot:"Reboot",update:"Update"},editor:{loading:"Loading editor...",sections:{device:"Device",display:"Display",update_badge:"Update Badge",reboot_badge:"Reboot Badge"},fields:{select_device:"Select device",select_device_hint:"Select a device - its model will be shown as title (or name if no model)",custom_title:"Custom title (optional)",custom_title_placeholder:"Leave empty to use device model/name",icon:"Icon",update_entity:"Update entity",update_entity_hint:"Entity that indicates update availability",update_label:"Custom label (optional)",update_label_placeholder:"Update",tap_action:"Tap action",button_entity:"Button entity",button_entity_hint:"Button or script entity to execute",button_icon:"Button icon",button_label:"Button label",button_label_placeholder:"Reboot",ask_confirmation:"Ask for confirmation"}}},ru:{common:{device:"Устройство",reboot:"Перезагрузка",update:"Обновление"},editor:{loading:"Загрузка редактора...",sections:{device:"Устройство",display:"Отображение",update_badge:"Значок обновления",reboot_badge:"Значок перезагрузки"},fields:{select_device:"Выберите устройство",select_device_hint:"Выберите устройство - его модель будет показана в заголовке (или имя, если модель отсутствует)",custom_title:"Пользовательский заголовок (опционально)",custom_title_placeholder:"Оставьте пустым для использования модели/имени устройства",icon:"Иконка",update_entity:"Сущность обновления",update_entity_hint:"Сущность, указывающая на наличие обновления",update_label:"Пользовательская метка (опционально)",update_label_placeholder:"Обновление",tap_action:"Действие при нажатии",button_entity:"Сущность кнопки",button_entity_hint:"Сущность кнопки или скрипта для выполнения",button_icon:"Иконка кнопки",button_label:"Метка кнопки",button_label_placeholder:"Перезагрузка",ask_confirmation:"Запрашивать подтверждение"}}}};function vt(t,e,i){var s;return function(t,e,i){const s=e.split(".");let o=mt[t]||mt.en;for(const t of s){if(!o||!o[t])return e;o=o[t]}return"string"!=typeof o?e:i?o.replace(/\{\{(\w+)\}\}/g,(t,e)=>i[e]||t):o}((null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",e,i)}var gt,bt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(gt||(gt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(bt||(bt={}));var $t=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o};const yt="mdi:devices",wt="mdi:restart",At="mdi:update";let xt=class extends rt{constructor(){super(...arguments),this._componentsLoaded=!1}_localize(t,e){return vt(this.hass,t,e)}async connectedCallback(){super.connectedCallback(),this._componentsLoaded||(await ft(),this._componentsLoaded=!0,this.requestUpdate())}setConfig(t){const e=Object.assign({},t);delete e.controller,t.reboot_button&&!t.action_button&&(e.action_button=t.reboot_button,delete e.reboot_button),this._config={type:e.type,name:e.name||"",icon:e.icon||"mdi:devices",device_id:e.device_id||"",update_section:Object.assign({enabled:!0,entity:"",label:this._localize("common.update"),tap_action:{action:"more-info"}},e.update_section),action_button:Object.assign({enabled:!1,entity:"",confirmation:!0,icon:"mdi:restart",label:this._localize("common.reboot"),tap_action:{action:"call-service"}},e.action_button),cards:e.cards||[]}}_updateConfig(t,e){const i=Object.assign(Object.assign({},this._config),{[t]:e});this._config=i,$t(this,"config-changed",{config:i})}_updateNested(t,e,i){const s=Object.assign({},this._config),o=s[t]||{},n=Object.assign(Object.assign({},o),{[e]:i});s[t]=n,this._config=s,$t(this,"config-changed",{config:s})}render(){if(!this.hass||!this._config||!this._componentsLoaded)return q`<div class="loading">${this._localize("editor.loading")}</div>`;const t=this._config.update_section,e=this._config.action_button;return q`
      <div class="editor">
        <!-- Device Selection -->
        <div class="section">
          <div class="section-header">
            <ha-icon icon="${yt}"></ha-icon>
            <h3>${this._localize("editor.sections.device")}</h3>
          </div>
          <ha-device-picker
            .hass=${this.hass}
            .value=${this._config.device_id||""}
            @value-changed=${t=>this._updateConfig("device_id",t.detail.value)}
            label="${this._localize("editor.fields.select_device")}"
          ></ha-device-picker>
          <div class="field-hint">
            ${this._localize("editor.fields.select_device_hint")}
          </div>
        </div>

        <!-- Display Settings -->
        <div class="section">
          <div class="section-header">
            <ha-icon icon="${yt}"></ha-icon>
            <h3>${this._localize("editor.sections.display")}</h3>
          </div>
          
          <ha-textfield
            .value=${this._config.name||""}
            @input=${t=>this._updateConfig("name",t.target.value)}
            label="${this._localize("editor.fields.custom_title")}"
            placeholder="${this._localize("editor.fields.custom_title_placeholder")}"
          ></ha-textfield>

          <ha-icon-picker
            .value=${this._config.icon||"mdi:devices"}
            @value-changed=${t=>this._updateConfig("icon",t.detail.value)}
            label="${this._localize("editor.fields.icon")}"
          ></ha-icon-picker>
        </div>

        <!-- Update Badge -->
        <div class="section">
          <div class="section-header">
            <ha-icon icon="${At}"></ha-icon>
            <h3>${this._localize("editor.sections.update_badge")}</h3>
            <ha-switch
              .checked=${!1!==t.enabled}
              @change=${t=>this._updateNested("update_section","enabled",t.target.checked)}
            ></ha-switch>
          </div>

          ${t.enabled?q`
            <ha-entity-picker
              .hass=${this.hass}
              .value=${t.entity||""}
              @value-changed=${t=>this._updateNested("update_section","entity",t.detail.value)}
              allow-custom-entity
              include-domains='["update", "binary_sensor"]'
              label="${this._localize("editor.fields.update_entity")}"
            ></ha-entity-picker>

            <ha-textfield
              .value=${t.label||""}
              @input=${t=>this._updateNested("update_section","label",t.target.value)}
              label="${this._localize("editor.fields.update_label")}"
              placeholder="${this._localize("editor.fields.update_label_placeholder")}"
            ></ha-textfield>

            <ha-selector
              .hass=${this.hass}
              .value=${t.tap_action||{action:"more-info"}}
              @value-changed=${t=>this._updateNested("update_section","tap_action",t.detail.value)}
              .selector=${{ui_action:{}}}
              label="${this._localize("editor.fields.tap_action")}"
            ></ha-selector>
          `:""}
        </div>

        <!-- Reboot Badge -->
        <div class="section">
          <div class="section-header">
            <ha-icon icon="${wt}"></ha-icon>
            <h3>${this._localize("editor.sections.reboot_badge")}</h3>
            <ha-switch
              .checked=${!1!==e.enabled}
              @change=${t=>this._updateNested("action_button","enabled",t.target.checked)}
            ></ha-switch>
          </div>

          ${e.enabled?q`
            <ha-entity-picker
              .hass=${this.hass}
              .value=${e.entity||""}
              @value-changed=${t=>this._updateNested("action_button","entity",t.detail.value)}
              allow-custom-entity
              include-domains='["button", "script"]'
              label="${this._localize("editor.fields.button_entity")}"
            ></ha-entity-picker>

            <ha-icon-picker
              .value=${e.icon||"mdi:restart"}
              @value-changed=${t=>this._updateNested("action_button","icon",t.detail.value)}
              label="${this._localize("editor.fields.button_icon")}"
            ></ha-icon-picker>

            <ha-textfield
              .value=${e.label||""}
              @input=${t=>this._updateNested("action_button","label",t.target.value)}
              label="${this._localize("editor.fields.button_label")}"
              placeholder="${this._localize("editor.fields.button_label_placeholder")}"
            ></ha-textfield>

            <ha-formfield label="${this._localize("editor.fields.ask_confirmation")}">
              <ha-switch
                .checked=${!1!==e.confirmation}
                @change=${t=>this._updateNested("action_button","confirmation",t.target.checked)}
              ></ha-switch>
            </ha-formfield>

            <ha-selector
              .hass=${this.hass}
              .value=${e.tap_action||{action:"call-service"}}
              @value-changed=${t=>this._updateNested("action_button","tap_action",t.detail.value)}
              .selector=${{ui_action:{}}}
              label="${this._localize("editor.fields.tap_action")}"
            ></ha-selector>
          `:""}
        </div>
      </div>
    `}static get styles(){return a`
      .editor {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        background: var(--card-background-color);
        border-radius: 12px;
        padding: 16px;
        border: 1px solid var(--divider-color);
      }

      .section-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 4px;
      }

      .section-header ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
      }

      .section-header h3 {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        flex: 1;
      }

      .field-hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: -4px;
      }

      ha-textfield,
      ha-icon-picker,
      ha-select,
      ha-entity-picker,
      ha-selector {
        width: 100%;
      }

      .loading {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
      }
    `}};t([pt()],xt.prototype,"hass",void 0),t([ut()],xt.prototype,"_config",void 0),t([ut()],xt.prototype,"_componentsLoaded",void 0),xt=t([lt("universal-device-card-editor")],xt);const Et="mdi:devices";let Ct=class extends rt{constructor(){super(...arguments),this.componentsLoaded=!1,this.childCards=[]}_localize(t,e){return vt(this.hass,t,e)}static async getConfigElement(){return document.createElement("universal-device-card-editor")}static getStubConfig(){return{type:"custom:universal-device-card",name:"",icon:Et,device_id:"",update_section:{enabled:!0,entity:"",tap_action:{action:"more-info"}},action_button:{enabled:!1,entity:"",confirmation:!0,icon:"mdi:restart",label:"",tap_action:{action:"call-service"}},cards:[]}}setConfig(t){const e=Object.assign({},t);delete e.controller,t.reboot_button&&!t.action_button&&(e.action_button=t.reboot_button,delete e.reboot_button),this.config=e,this._updateDeviceInfo(),this._loadComponents(),this._createChildCards()}_updateDeviceInfo(){if(!this.hass||!this.config.device_id)return this.deviceName=void 0,void(this.deviceModel=void 0);const t=this.hass.devices[this.config.device_id];if(t){this.deviceName=t.name_by_user||t.name;const e=[t.manufacturer,t.model,t.model_id].filter(Boolean);this.deviceModel=e.join(" ")||void 0}else this.deviceName=void 0,this.deviceModel=void 0}async _loadComponents(){try{await ft(),this.componentsLoaded=!0,this.requestUpdate()}catch(t){}}async _createChildCards(){if(!this.config.cards||!this.config.cards.length)return void(this.childCards=[]);const t=await window.loadCardHelpers(),e=[];for(const i of this.config.cards)try{const s=t.createCardElement(i);this.hass&&(s.hass=this.hass),s.addEventListener("ll-rebuild",()=>{this._createChildCards()}),e.push(s)}catch(t){}this.childCards=e,await this.updateComplete,setTimeout(()=>{this._styleCards()},100),this.requestUpdate()}_styleCards(){this.childCards.forEach(t=>{this._styleCard(t,0)})}_styleCard(t,e=0){var i;if(!t)return;const s=t.localName||(null===(i=t.tagName)||void 0===i?void 0:i.toLowerCase());if(["hui-horizontal-stack-card","hui-vertical-stack-card","vertical-stack","horizontal-stack","hui-stack-card"].includes(s)){if(t.shadowRoot){const i=[".card-content",".content",".vertical-stack",".horizontal-stack","#root","#card",".container",".cards"];for(const s of i){const i=t.shadowRoot.querySelector(s);if(i&&i.children){for(let t=0;t<i.children.length;t++)this._styleCard(i.children[t],e+1);break}}const s=t.shadowRoot.children;for(let t=0;t<s.length;t++)this._styleCard(s[t],e+1)}if(t.children)for(let i=0;i<t.children.length;i++)this._styleCard(t.children[i],e+1);return}const o="var(--secondary-background-color, #f5f5f5)";if(t.style&&(t.style.background=o,t.style.borderRadius="8px",t.style.margin="0",t.style.boxShadow="none",t.style.border="none"),t.shadowRoot){const e=t.shadowRoot.querySelector("ha-card");e&&(e.style.background=o,e.style.borderRadius="8px",e.style.boxShadow="none",e.style.border="none");t.shadowRoot.querySelectorAll("*").forEach(t=>{var e;t.style&&("HA-CARD"===t.tagName||(null===(e=t.classList)||void 0===e?void 0:e.contains("card")))&&(t.style.background=o,t.style.borderRadius="8px",t.style.boxShadow="none",t.style.border="none")})}if(t.children)for(let i=0;i<t.children.length;i++){const s=t.children[i];s&&s!==t&&this._styleCard(s,e+1)}}_updateChildCardsHass(){this.childCards&&this.hass&&(this.childCards.forEach(t=>{t.hass=this.hass}),setTimeout(()=>{this._styleCards()},100))}set hass(t){this._hass=t,this._updateDeviceInfo(),this._updateChildCardsHass(),this.requestUpdate()}get hass(){return this._hass}_handleAction(){const t=this.config.action_button;if(!t||!t.enabled)return;if(!1!==t.confirmation&&!confirm(t.label||"Confirm action?"))return;if(t.tap_action&&"none"!==t.tap_action.action)return void this._handleTap(t.tap_action,t.entity);const e=t.entity;if(!e||!this.hass)return;const i=e.split(".")[0];if("button"===i)this.hass.callService("button","press",{entity_id:e});else if("script"===i)this.hass.callService("script","turn_on",{entity_id:e});else{const[i,s]=e.split(".");this.hass.callService(i,s,t.service_data||{})}}_handleUpdate(){const t=this.config.update_section;t&&t.enabled&&(t.tap_action&&"none"!==t.tap_action.action?this._handleTap(t.tap_action,t.entity):t.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t.entity}})))}_handleTap(t,e){if(this.hass)if(t&&"none"!==t.action)switch(t.action){case"more-info":e&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}));break;case"navigate":t.navigation_path&&(history.pushState(null,"",t.navigation_path),this.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}break;case"toggle":e&&this.hass.callService("homeassistant","toggle",{entity_id:e})}else e&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))}_checkUpdateAvailable(t){if(!this.hass||!t||!this.hass.states[t])return!1;const e=this.hass.states[t],i=t.split(".")[0];return"update"===i?"on"===e.state||"available"===e.state:"binary_sensor"===i?"on"===e.state:"on"===e.state||"true"===e.state||"1"===e.state}_getDisplayName(){var t;if(this.config.name&&this.config.name.trim())return this.config.name;if(this.config.device_id&&(null===(t=this.hass)||void 0===t?void 0:t.devices[this.config.device_id])){const t=this.hass.devices[this.config.device_id],e=t.model;return e||(t.name_by_user||t.name||this._localize("common.device"))}return this._localize("common.device")}_getManufacturer(){var t;if(this.config.device_id&&(null===(t=this.hass)||void 0===t?void 0:t.devices[this.config.device_id])){return this.hass.devices[this.config.device_id].manufacturer||""}return""}render(){var t,e,i;if(!this.config||!this.hass||!this.componentsLoaded)return q`<ha-card><div class="loading">Loading...</div></ha-card>`;const s=this.config.icon||Et,o=(null===(t=this.config.update_section)||void 0===t?void 0:t.enabled)&&this.config.update_section.entity&&this._checkUpdateAvailable(this.config.update_section.entity),n=this._getDisplayName(),a=this._getManufacturer(),r=(null===(e=this.config.update_section)||void 0===e?void 0:e.label)||this._localize("common.update");return q`
      <ha-card class="device-card">
        <div class="header">
          <div class="header-content">
            <div class="header-left">
              <ha-icon icon="${s}"></ha-icon>
              <div class="title-container">
                <div class="title">${n}</div>
                ${a?q`<div class="manufacturer">${a}</div>`:V}
              </div>
            </div>
            <div class="header-right">
              ${o?q`
                <div class="badge update-badge" @click=${this._handleUpdate}>
                  <ha-icon icon="mdi:update"></ha-icon>
                  <span>${r}</span>
                </div>
              `:V}
              ${(null===(i=this.config.action_button)||void 0===i?void 0:i.enabled)?q`<div class="badge action-badge" @click=${this._handleAction}>
                    <ha-icon icon="${this.config.action_button.icon||"mdi:restart"}"></ha-icon>
                    <span>${this.config.action_button.label||this._localize("common.reboot")}</span>
                  </div>`:V}
            </div>
          </div>
        </div>

        <!-- Cards Container -->
        <div class="cards-container">
          ${this.childCards.map(t=>q`${t}`)}
        </div>
      </ha-card>
    `}static get styles(){return a`
      :host { display: block; }
      
      ha-card {
        background: var(--card-background-color, #ffffff);
        border-radius: 12px;
        box-shadow: var(--ha-card-box-shadow, 0 2px 4px rgba(0,0,0,0.1));
        overflow: hidden;
      }
      
      .loading {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .header {
        padding: 12px 16px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      
      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      
      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
        flex: 1;
      }
      
      .header-left ha-icon { 
        --mdc-icon-size: 24px; 
        color: var(--state-icon-color, #03a9f4);
        flex-shrink: 0;
      }
      
      .title-container {
        min-width: 0;
        flex: 1;
      }
      
      .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.3;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .manufacturer {
        font-size: 11px;
        color: var(--secondary-text-color, #666);
        line-height: 1.3;
        margin-top: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .header-right {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }
      
      .badge {
        cursor: pointer;
        transition: all 0.2s;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        white-space: nowrap;
      }
      
      .badge:hover {
        filter: brightness(0.9);
      }
      
      .badge ha-icon { 
        --mdc-icon-size: 14px; 
      }
      
      .badge span {
        line-height: 1;
      }
      
      .action-badge { 
        background: var(--primary-color, #03a9f4);
        color: white;
      }
      
      .action-badge ha-icon {
        color: white;
      }
      
      .update-badge {
        background: var(--warning-color, #ff9800);
        color: white;
      }
      
      .update-badge ha-icon {
        color: white;
      }

      .cards-container {
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      @media (max-width: 600px) {
        .header {
          padding: 10px 12px;
        }
        
        .header-left {
          gap: 10px;
        }
        
        .header-left ha-icon {
          --mdc-icon-size: 20px;
        }
        
        .title {
          font-size: 14px;
        }
        
        .manufacturer {
          font-size: 10px;
        }
        
        .cards-container {
          padding: 8px 12px;
          gap: 8px;
        }
        
        .badge {
          padding: 3px 6px;
          font-size: 10px;
        }
        
        .badge ha-icon {
          --mdc-icon-size: 12px;
        }
      }
    `}getCardSize(){let t=1;if(this.childCards)for(const e of this.childCards)"function"==typeof e.getCardSize?t+=e.getCardSize():t+=1;return t}};t([pt()],Ct.prototype,"hass",void 0),t([ut()],Ct.prototype,"config",void 0),t([ut()],Ct.prototype,"componentsLoaded",void 0),t([ut()],Ct.prototype,"childCards",void 0),t([ut()],Ct.prototype,"deviceName",void 0),t([ut()],Ct.prototype,"deviceModel",void 0),Ct=t([lt("universal-device-card")],Ct);export{Ct as UniversalDeviceCard};
