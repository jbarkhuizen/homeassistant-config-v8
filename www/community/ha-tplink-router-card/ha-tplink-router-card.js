/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ze = globalThis, Ct = Ze.ShadowRoot && (Ze.ShadyCSS === void 0 || Ze.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), Xt = /* @__PURE__ */ new WeakMap();
let Ei = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ct && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Xt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Xt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const _n = (n) => new Ei(typeof n == "string" ? n : n + "", void 0, At), gn = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, o, r) => i + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[r + 1], n[0]);
  return new Ei(t, n, At);
}, yn = (n, e) => {
  if (Ct) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = Ze.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, n.appendChild(i);
  }
}, Jt = Ct ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return _n(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: bn, defineProperty: vn, getOwnPropertyDescriptor: wn, getOwnPropertyNames: xn, getOwnPropertySymbols: kn, getPrototypeOf: Sn } = Object, ne = globalThis, Zt = ne.trustedTypes, $n = Zt ? Zt.emptyScript : "", Cn = ne.reactiveElementPolyfillSupport, Ne = (n, e) => n, wt = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? $n : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, Mi = (n, e) => !bn(n, e), Qt = { attribute: !0, type: String, converter: wt, reflect: !1, useDefault: !1, hasChanged: Mi };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ne.litPropertyMetadata ?? (ne.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ve = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Qt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && vn(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: r } = wn(this.prototype, e) ?? { get() {
      return this[t];
    }, set(s) {
      this[t] = s;
    } };
    return { get: o, set(s) {
      const l = o?.call(this);
      r?.call(this, s), this.requestUpdate(e, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Qt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ne("elementProperties"))) return;
    const e = Sn(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ne("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ne("properties"))) {
      const t = this.properties, i = [...xn(t), ...kn(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(Jt(o));
    } else e !== void 0 && t.push(Jt(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return yn(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const r = (i.converter?.toAttribute !== void 0 ? i.converter : wt).toAttribute(t, i.type);
      this._$Em = e, r == null ? this.removeAttribute(o) : this.setAttribute(o, r), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const r = i.getPropertyOptions(o), s = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : wt;
      this._$Em = o;
      const l = s.fromAttribute(t, r.type);
      this[o] = l ?? this._$Ej?.get(o) ?? l, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, o = !1, r) {
    if (e !== void 0) {
      const s = this.constructor;
      if (o === !1 && (r = this[e]), i ?? (i = s.getPropertyOptions(e)), !((i.hasChanged ?? Mi)(r, t) || i.useDefault && i.reflect && r === this._$Ej?.get(e) && !this.hasAttribute(s._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: r }, s) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, s ?? t ?? this[e]), r !== !0 || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, r] of this._$Ep) this[o] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, r] of i) {
        const { wrapped: s } = r, l = this[o];
        s !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, r, l);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
ve.elementStyles = [], ve.shadowRootOptions = { mode: "open" }, ve[Ne("elementProperties")] = /* @__PURE__ */ new Map(), ve[Ne("finalized")] = /* @__PURE__ */ new Map(), Cn?.({ ReactiveElement: ve }), (ne.reactiveElementVersions ?? (ne.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oe = globalThis, ei = (n) => n, Qe = Oe.trustedTypes, ti = Qe ? Qe.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, Li = "$lit$", ie = `lit$${Math.random().toFixed(9).slice(2)}$`, Ni = "?" + ie, An = `<${Ni}>`, he = document, Be = () => he.createComment(""), ze = (n) => n === null || typeof n != "object" && typeof n != "function", Tt = Array.isArray, Tn = (n) => Tt(n) || typeof n?.[Symbol.iterator] == "function", _t = `[ 	
\f\r]`, Ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ii = /-->/g, ni = />/g, de = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), oi = /'/g, ri = /"/g, Oi = /^(?:script|style|textarea|title)$/i, Rn = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), f = Rn(1), xe = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), si = /* @__PURE__ */ new WeakMap(), pe = he.createTreeWalker(he, 129);
function Ii(n, e) {
  if (!Tt(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ti !== void 0 ? ti.createHTML(e) : e;
}
const En = (n, e) => {
  const t = n.length - 1, i = [];
  let o, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = Ee;
  for (let l = 0; l < t; l++) {
    const c = n[l];
    let d, u, p = -1, g = 0;
    for (; g < c.length && (s.lastIndex = g, u = s.exec(c), u !== null); ) g = s.lastIndex, s === Ee ? u[1] === "!--" ? s = ii : u[1] !== void 0 ? s = ni : u[2] !== void 0 ? (Oi.test(u[2]) && (o = RegExp("</" + u[2], "g")), s = de) : u[3] !== void 0 && (s = de) : s === de ? u[0] === ">" ? (s = o ?? Ee, p = -1) : u[1] === void 0 ? p = -2 : (p = s.lastIndex - u[2].length, d = u[1], s = u[3] === void 0 ? de : u[3] === '"' ? ri : oi) : s === ri || s === oi ? s = de : s === ii || s === ni ? s = Ee : (s = de, o = void 0);
    const h = s === de && n[l + 1].startsWith("/>") ? " " : "";
    r += s === Ee ? c + An : p >= 0 ? (i.push(d), c.slice(0, p) + Li + c.slice(p) + ie + h) : c + ie + (p === -2 ? l : h);
  }
  return [Ii(n, r + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class He {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let r = 0, s = 0;
    const l = e.length - 1, c = this.parts, [d, u] = En(e, t);
    if (this.el = He.createElement(d, i), pe.currentNode = this.el.content, t === 2 || t === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (o = pe.nextNode()) !== null && c.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const p of o.getAttributeNames()) if (p.endsWith(Li)) {
          const g = u[s++], h = o.getAttribute(p).split(ie), m = /([.?@])?(.*)/.exec(g);
          c.push({ type: 1, index: r, name: m[2], strings: h, ctor: m[1] === "." ? Ln : m[1] === "?" ? Nn : m[1] === "@" ? On : at }), o.removeAttribute(p);
        } else p.startsWith(ie) && (c.push({ type: 6, index: r }), o.removeAttribute(p));
        if (Oi.test(o.tagName)) {
          const p = o.textContent.split(ie), g = p.length - 1;
          if (g > 0) {
            o.textContent = Qe ? Qe.emptyScript : "";
            for (let h = 0; h < g; h++) o.append(p[h], Be()), pe.nextNode(), c.push({ type: 2, index: ++r });
            o.append(p[g], Be());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ni) c.push({ type: 2, index: r });
      else {
        let p = -1;
        for (; (p = o.data.indexOf(ie, p + 1)) !== -1; ) c.push({ type: 7, index: r }), p += ie.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const i = he.createElement("template");
    return i.innerHTML = e, i;
  }
}
function ke(n, e, t = n, i) {
  if (e === xe) return e;
  let o = i !== void 0 ? t._$Co?.[i] : t._$Cl;
  const r = ze(e) ? void 0 : e._$litDirective$;
  return o?.constructor !== r && (o?._$AO?.(!1), r === void 0 ? o = void 0 : (o = new r(n), o._$AT(n, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = ke(n, o._$AS(n, e.values), o, i)), e;
}
class Mn {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, o = (e?.creationScope ?? he).importNode(t, !0);
    pe.currentNode = o;
    let r = pe.nextNode(), s = 0, l = 0, c = i[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let d;
        c.type === 2 ? d = new Pe(r, r.nextSibling, this, e) : c.type === 1 ? d = new c.ctor(r, c.name, c.strings, this, e) : c.type === 6 && (d = new In(r, this, e)), this._$AV.push(d), c = i[++l];
      }
      s !== c?.index && (r = pe.nextNode(), s++);
    }
    return pe.currentNode = he, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class Pe {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = ke(this, e, t), ze(e) ? e === $ || e == null || e === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : e !== this._$AH && e !== xe && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Tn(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== $ && ze(this._$AH) ? this._$AA.nextSibling.data = e : this.T(he.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = He.createElement(Ii(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === o) this._$AH.p(t);
    else {
      const r = new Mn(o, this), s = r.u(this.options);
      r.p(t), this.T(s), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = si.get(e.strings);
    return t === void 0 && si.set(e.strings, t = new He(e)), t;
  }
  k(e) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const r of e) o === t.length ? t.push(i = new Pe(this.O(Be()), this.O(Be()), this, this.options)) : i = t[o], i._$AI(r), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const i = ei(e).nextSibling;
      ei(e).remove(), e = i;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class at {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, r) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = $;
  }
  _$AI(e, t = this, i, o) {
    const r = this.strings;
    let s = !1;
    if (r === void 0) e = ke(this, e, t, 0), s = !ze(e) || e !== this._$AH && e !== xe, s && (this._$AH = e);
    else {
      const l = e;
      let c, d;
      for (e = r[0], c = 0; c < r.length - 1; c++) d = ke(this, l[i + c], t, c), d === xe && (d = this._$AH[c]), s || (s = !ze(d) || d !== this._$AH[c]), d === $ ? e = $ : e !== $ && (e += (d ?? "") + r[c + 1]), this._$AH[c] = d;
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ln extends at {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === $ ? void 0 : e;
  }
}
class Nn extends at {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== $);
  }
}
class On extends at {
  constructor(e, t, i, o, r) {
    super(e, t, i, o, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ke(this, e, t, 0) ?? $) === xe) return;
    const i = this._$AH, o = e === $ && i !== $ || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, r = e !== $ && (i === $ || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class In {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ke(this, e);
  }
}
const Fn = Oe.litHtmlPolyfillSupport;
Fn?.(He, Pe), (Oe.litHtmlVersions ?? (Oe.litHtmlVersions = [])).push("3.3.2");
const Dn = (n, e, t) => {
  const i = t?.renderBefore ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = t?.renderBefore ?? null;
    i._$litPart$ = o = new Pe(e.insertBefore(Be(), r), r, void 0, t ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ie = globalThis;
class Fe extends ve {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Dn(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return xe;
  }
}
Fe._$litElement$ = !0, Fe.finalized = !0, Ie.litElementHydrateSupport?.({ LitElement: Fe });
const Bn = Ie.litElementPolyfillSupport;
Bn?.({ LitElement: Fe });
(Ie.litElementVersions ?? (Ie.litElementVersions = [])).push("4.2.2");
const zn = gn`
  :host {
    display: block;
  }

  ha-card {
    padding: 0;
    overflow: hidden;
    border-radius: 16px;
  }

  .header {
    padding: 16px 18px 12px;
    background: linear-gradient(135deg, rgba(30, 60, 90, 0.28), rgba(0, 0, 0, 0));
    border-bottom: 1px solid var(--divider-color);
  }

  .header.hidden {
    display: none;
  }

  .title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }

  .title h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  .title-main {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  .title-main h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title-export-button {
    width: 18px;
    height: 18px;
    border: none;
    background: transparent;
    color: var(--secondary-text-color);
    padding: 0;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .title-export-button:hover {
    color: var(--primary-color);
    background: rgba(127, 127, 127, 0.12);
  }

  .title-export-button ha-icon {
    --mdc-icon-size: 14px;
  }

  .subtitle {
    margin-top: 4px;
    color: var(--secondary-text-color);
    font-size: 12px;
  }

  .router-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 6px;
    color: var(--secondary-text-color);
    font-size: 12px;
  }

  .router-left {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .router-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .router-link {
    color: var(--primary-color);
    text-decoration: none;
  }

  .router-link:hover {
    text-decoration: underline;
  }

  .router-right {
    white-space: nowrap;
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
    align-items: center;
  }

  .control-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .search {
    flex: 1 1 200px;
  }

  input[type="search"] {
    width: 100%;
    border: 1px solid var(--divider-color);
    border-radius: 10px;
    padding: 8px 10px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 13px;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgb(127 127 127 / 12%);
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .chip.stat ha-icon {
    --mdc-icon-size: 22px;
  }

  .chip.compact {
    padding: 2px 8px;
    font-size: 11px;
  }

  .actions {
    display: inline-flex;
    align-items: center;
    gap: 4px 16px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .action-device-select {
    min-width: 140px;
    max-width: 220px;
    height: 28px;
    border-radius: 8px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    color: var(--primary-text-color);
    padding: 0 8px;
    font-size: 12px;
  }

  .action-group {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
  }

  .icon-toggle {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    color: var(--secondary-text-color);
    cursor: pointer;
    padding: 2px;
    overflow: hidden;
    flex: 0 0 auto;
  }

  .icon-toggle ha-icon {
    --mdc-icon-size: 20px;
  }

  .action-icon-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    min-width: 20px;
    height: 20px;
  }

  .icon-toggle.with-label {
    width: max-content;
    max-width: 240px;
    min-width: 120px;
    justify-content: flex-start;
    gap: 6px;
    padding: 2px 8px;
  }

  .icon-toggle.with-label .action-separator {
    opacity: 0.55;
    font-size: 12px;
    line-height: 1;
  }

  .icon-toggle.name-only {
    width: max-content;
    max-width: 240px;
    min-width: 120px;
    justify-content: flex-start;
    gap: 0;
    padding: 2px 8px;
  }

  .icon-toggle.with-label .action-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 1;
  }

  .icon-toggle.name-only .action-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 1;
  }

  .icon-toggle::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(var(--hold-progress, 0) * 100%);
    background: rgba(60, 180, 90, 0.25);
    opacity: 0;
    transition: height 0.06s linear;
    pointer-events: none;
  }

  .icon-toggle.holding::after {
    opacity: 1;
  }

  .icon-toggle.completed::after {
    background: rgba(60, 180, 90, 0.4);
    opacity: 1;
    animation: holdComplete 0.8s ease-out forwards;
  }

  @keyframes holdComplete {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .icon-toggle[data-state="on"] {
    color: var(--primary-color);
    border-color: rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.08);
  }

  .icon-toggle[data-role="block"][data-state="on"] {
    color: var(--error-color, #d64545);
    border-color: color-mix(in srgb, var(--error-color, #d64545) 45%, transparent);
    background: color-mix(in srgb, var(--error-color, #d64545) 14%, transparent);
  }

  .icon-toggle[data-role="block"][data-state="off"] {
    color: var(--success-color, #3aa45b);
    border-color: color-mix(in srgb, var(--success-color, #3aa45b) 40%, transparent);
    background: color-mix(in srgb, var(--success-color, #3aa45b) 10%, transparent);
  }

  .icon-toggle:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .icon-toggle[data-kind="guest"] {
    border-color: rgba(255, 175, 0, 0.4);
  }

  .icon-toggle[data-kind="iot"] {
    border-color: rgba(0, 170, 255, 0.4);
  }

  .row-actions {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex-wrap: nowrap;
    width: max-content;
    min-width: max-content;
  }

  .icon-toggle.row-action {
    width: 28px;
    height: 28px;
    padding: 2px;
  }

  .icon-toggle.row-action.with-label {
    width: max-content;
    max-width: 240px;
    min-width: 120px;
    padding: 2px 8px;
  }

  .icon-toggle.row-action.name-only {
    width: max-content;
    max-width: 240px;
    min-width: 120px;
    padding: 2px 8px;
  }

  .icon-toggle.row-action ha-icon {
    --mdc-icon-size: 20px;
  }

  td.actions-cell {
    padding: 2px 10px;
  }

  .band-badge {
    position: absolute;
    bottom: -1px;
    right: -3px;
    background: var(--card-background-color);
    border: none;
    border-radius: 8px;
    font-size: 9px;
    padding: 0 4px;
    color: var(--secondary-text-color);
  }

  th.actions-cell.sticky-start,
  td.actions-cell.sticky-start,
  th.actions-cell.sticky-end,
  td.actions-cell.sticky-end {
    max-width: min(50vw, 58rem);
    max-width: min(50cqw, 58rem);
  }

  td.actions-cell.sticky-start .row-actions,
  td.actions-cell.sticky-end .row-actions {
    max-width: none;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
  }

  td.actions-cell.sticky-start .cell-content,
  td.actions-cell.sticky-end .cell-content {
    display: block;
    max-width: min(calc(50vw - 20px), 58rem);
    max-width: min(calc(50cqw - 20px), 58rem);
    overflow-x: auto;
    overflow-y: hidden;
    text-overflow: clip;
    scrollbar-width: thin;
  }

  .cell-content {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }

  td.cell-ellipsis {
    overflow: hidden;
  }

  .cell-content.cell-content-ellipsis {
    display: block;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th.column-ellipsis .sort-button {
    display: flex;
    width: 100%;
    min-width: 0;
  }

  th.column-ellipsis .sort-button > span:first-child {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th.sticky-start,
  th.sticky-end,
  td.sticky-start,
  td.sticky-end {
    max-width: min(50vw, 30rem);
    max-width: min(50cqw, 30rem);
  }

  td.sticky-start .cell-content,
  td.sticky-end .cell-content {
    display: block;
    min-width: 0;
    max-width: min(calc(50vw - 20px), 30rem);
    max-width: min(calc(50cqw - 20px), 30rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  td.sticky-start .name-cell,
  td.sticky-end .name-cell {
    max-width: 100%;
  }

  td.sticky-start .name-cell .link,
  td.sticky-end .name-cell .link,
  td.sticky-start .name-text,
  td.sticky-end .name-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon-button {
    width: 26px;
    height: 26px;
    border-radius: 8px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    color: var(--secondary-text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
  }

  .icon-button.mini {
    width: 20px;
    height: 20px;
    border-radius: 6px;
  }


  .filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--divider-color);
    align-items: center;
    font-size: 12px;
  }

  .filter-row.hidden {
    display: none;
  }

  .filter-group {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 2px;
    border-radius: 999px;
    border: 1px solid var(--divider-color);
    background: rgba(0, 0, 0, 0.02);
  }

  .filter-button {
    border: none;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 11px;
    padding: 8px 8px;
    border-radius: 999px;
    cursor: pointer;
  }

  .filter-button.icon {
    width: 28px;
    height: 28px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .filter-button.icon ha-icon {
    --mdc-icon-size: 22px;
  }

  .filter-button.active {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .table-wrapper {
    overflow: auto;
    max-height: 70vh;
    container-type: inline-size;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12.5px;
  }

  thead {
    position: sticky;
    top: 0;
    z-index: 3;
    background: var(--card-background-color);
    box-shadow: 0 1px 0 var(--divider-color);
  }

  th,
  td {
    text-align: left;
    padding: 8px 10px;
    border-bottom: 1px solid var(--divider-color);
    white-space: nowrap;
  }

  th.sticky-start,
  td.sticky-start,
  th.sticky-end,
  td.sticky-end {
    position: sticky;
    background: var(--card-background-color);
  }

  td.sticky-start,
  td.sticky-end {
    z-index: 2;
  }

  th.sticky-start,
  th.sticky-end {
    z-index: 4;
  }

  td.sticky-end {
    box-shadow: -1px 0 0 var(--divider-color);
  }

  .table-wrapper--scrolled-left th.sticky-start-edge,
  .table-wrapper--scrolled-left td.sticky-start-edge {
    border-right: 1px solid var(--divider-color);
    box-shadow: 8px 0 12px -10px rgba(0, 0, 0, 0.42);
  }

  .table-wrapper--scrolled-left th.sticky-start-edge::after,
  .table-wrapper--scrolled-left td.sticky-start-edge::after {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 10px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0));
  }

  .table-wrapper--scrolled-right th.sticky-end-edge,
  .table-wrapper--scrolled-right td.sticky-end-edge {
    border-left: 1px solid var(--divider-color);
    box-shadow: -8px 0 12px -10px rgba(0, 0, 0, 0.42);
  }

  .table-wrapper--scrolled-right th.sticky-end-edge::before,
  .table-wrapper--scrolled-right td.sticky-end-edge::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 10px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0));
  }

  .shift-mode.shift-underline-enabled td.shift-entity-clickable {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
    text-decoration-color: color-mix(in srgb, currentColor 28%, transparent);
  }

  .shift-mode.shift-underline-enabled td.shift-entity-clickable .speed-value,
  .shift-mode.shift-underline-enabled td.shift-entity-clickable .rate,
  .shift-mode.shift-underline-enabled td.shift-entity-clickable .signal {
    text-decoration: inherit;
    text-decoration-color: inherit;
    text-decoration-thickness: inherit;
    text-underline-offset: inherit;
  }

  .sort-button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }

  .sort-indicator {
    font-size: 10px;
    color: var(--secondary-text-color);
  }

  .sort-order {
    font-size: 9px;
    color: var(--secondary-text-color);
  }

  tbody tr:nth-child(odd) {
    background: rgba(0, 0, 0, 0.02);
  }

  tbody tr:nth-child(odd) td.sticky-start,
  tbody tr:nth-child(odd) td.sticky-end {
    background: color-mix(in srgb, var(--card-background-color) 98%, #000 2%);
  }

  tbody tr:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .signal {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }

  .signal-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .band-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 11px;
    border: 1px solid transparent;
    white-space: nowrap;
  }

  .band-pill ha-icon {
    --mdc-icon-size: 14px;
  }

  .band-pill.band-2g {
    color: #0ea5e9;
    background: rgba(14, 165, 233, 0.15);
    border-color: rgba(14, 165, 233, 0.35);
  }

  .band-pill.band-5g {
    color: #22c55e;
    background: rgba(34, 197, 94, 0.15);
    border-color: rgba(34, 197, 94, 0.35);
  }

  .band-pill.band-6g {
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.18);
    border-color: rgba(245, 158, 11, 0.35);
  }

  .band-pill.band-wired {
    color: #8b5cf6;
    background: rgba(139, 92, 246, 0.18);
    border-color: rgba(139, 92, 246, 0.35);
  }

  .band-pill.band-unknown {
    color: var(--secondary-text-color);
    background: rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.1);
  }

  .band-pill.band-wifi {
    color: #0ea5e9;
    background: rgba(14, 165, 233, 0.15);
    border-color: rgba(14, 165, 233, 0.35);
  }

  .rate {
    font-weight: 600;
  }

  .rate--na {
    color: var(--secondary-text-color);
  }

  .rate--bad {
    color: var(--rate-bad);
  }

  .rate--poor {
    color: var(--rate-poor);
  }

  .rate--fair {
    color: var(--rate-fair);
  }

  .rate--good {
    color: var(--rate-good);
  }

  .rate--great {
    color: var(--rate-great);
  }

  .rate--excellent {
    color: var(--rate-excellent);
  }

  .rate--ultra {
    color: var(--rate-ultra);
  }

  .speed-value {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .speed-tooltip {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 6px);
    transform: translateX(-50%) translateY(3px);
    min-width: 160px;
    border-radius: 8px;
    padding: 8px 9px;
    background: rgba(15, 23, 42, 0.96);
    color: #e2e8f0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    font-size: 11px;
    line-height: 1.25;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.14s ease, transform 0.14s ease;
    z-index: 6;
  }

  .speed-value:hover .speed-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .speed-tooltip.speed-tooltip--portal {
    position: fixed;
    left: 0;
    top: 0;
    bottom: auto;
    opacity: 0;
    transform: translate(-50%, -96%);
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 1000;
  }

  .speed-tooltip.speed-tooltip--portal.speed-tooltip--visible {
    opacity: 1;
    transform: translate(-50%, -100%);
  }

  .speed-tooltip-bar-track {
    position: relative;
    display: block;
    height: 3px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.35);
    overflow: hidden;
    margin-bottom: 7px;
  }

  .speed-tooltip-bar-fill {
    position: absolute;
    inset: 0;
    width: 100%;
    border-radius: 999px;
    clip-path: inset(0 calc(100% - var(--fill, 0%)) 0 0 round 999px);
    background: linear-gradient(
      90deg,
      #38bdf8 0%,
      #38bdf8 55%,
      #f97316 82%,
      #ef4444 100%
    );
  }

  .speed-tooltip-line {
    display: block;
    margin-top: 2px;
  }

  .ud-rate--bad {
    color: var(--ud-rate-bad);
  }

  .ud-rate--poor {
    color: var(--ud-rate-poor);
  }

  .ud-rate--fair {
    color: var(--ud-rate-fair);
  }

  .ud-rate--good {
    color: var(--ud-rate-good);
  }

  .ud-rate--great {
    color: var(--ud-rate-great);
  }

  .ud-rate--excellent {
    color: var(--ud-rate-excellent);
  }

  .ud-rate--ultra {
    color: var(--ud-rate-ultra);
  }

  .muted {
    color: var(--secondary-text-color);
  }

  .link {
    border: none;
    background: transparent;
    color: var(--primary-color);
    padding: 0;
    cursor: pointer;
    text-align: left;
    font: inherit;
    display: block;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .name-text {
    color: var(--primary-text-color);
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .name-cell {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    max-width: 100%;
  }

  .name-device-link {
    border: none;
    background: transparent;
    color: var(--secondary-text-color);
    padding: 0;
    margin: 0;
    width: 14px;
    height: 14px;
    min-width: 14px;
    min-height: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
  }

  .name-device-link ha-icon {
    --mdc-icon-size: 14px;
  }

  .name-device-link:hover {
    color: var(--primary-color);
    opacity: 1;
  }

  .ap-cell {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
  }

  .ap-main-badge {
    --mdc-icon-size: 14px;
    color: var(--primary-color);
  }

  .empty {
    padding: 16px 18px 20px;
    color: var(--secondary-text-color);
  }

  .empty-hint {
    margin-top: 8px;
    font-size: 12px;
    opacity: 0.85;
  }

  .notice {
    margin: 0 18px 8px;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 12px;
    color: var(--primary-text-color);
    background: var(--warning-color, #ffa726);
    background: color-mix(in srgb, var(--warning-color, #ffa726) 18%, transparent);
    border: 1px solid var(--warning-color, #ffa726);
  }

  @media (max-width: 1200px) {
    .title {
      flex-wrap: wrap;
      gap: 12px;
    }

    .actions {
      gap: 10px;
    }

    .action-device-select {
      min-width: 120px;
      max-width: 190px;
    }
  }

  @media (max-width: 900px) {
    .title {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .title-main h2 {
      white-space: normal;
      overflow: visible;
      text-overflow: initial;
    }

    .actions {
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 8px;
    }

    .action-group {
      flex-wrap: wrap;
    }

    .action-group .icon-toggle.with-label,
    .action-group .icon-toggle.name-only {
      width: calc(50% - 2px);
      min-width: calc(50% - 2px);
      max-width: calc(50% - 2px);
    }

    .router-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
  }

  @media (max-width: 640px) {
    .header {
      padding: 12px 12px 10px;
    }

    .title h2 {
      font-size: 16px;
    }

    .controls {
      margin-top: 10px;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
    }

    .search {
      width: 100%;
      flex: 1 1 100%;
      order: 1;
    }

    .control-actions {
      width: 100%;
      order: 2;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 8px;
    }

    .action-group.action-group--wide {
      width: 100%;
    }

    .filter-row {
      padding: 8px 10px;
    }

    .action-device-select {
      width: 100%;
      max-width: none;
    }

    th,
    td {
      padding: 7px 8px;
    }
  }

  :host {
    --signal-bad: #d64545;
    --signal-poor: #f08c2e;
    --signal-fair: #e0c341;
    --signal-good: #7bc46d;
    --signal-excellent: #3aa45b;
    --rate-bad: #d64545;
    --rate-poor: #f08c2e;
    --rate-fair: #e0c341;
    --rate-good: #7bc46d;
    --rate-great: #14b8a6;
    --rate-excellent: #3b82f6;
    --rate-ultra: #6366f1;
    --ud-rate-bad: #94a3b8;
    --ud-rate-poor: #60a5fa;
    --ud-rate-fair: #38bdf8;
    --ud-rate-good: #22d3ee;
    --ud-rate-great: #f59e0b;
    --ud-rate-excellent: #f97316;
    --ud-rate-ultra: #ef4444;
  }
`, Hn = {
  title: "TP-Link Router Clients",
  subtitle: "Router: {name}",
  selectRouter: "Select a TP-Link router in card settings.",
  noDevices: "No devices found for this router.",
  noTrackersHint: 'The selected entry exposes no device_tracker entities. On tplink_router make sure the integration option "support_tracker" is enabled.',
  devicesCount: "{count} devices",
  onlineCount: "{online}/{total} online",
  omadaClientLimitNotice: "Exactly 100 clients received. Omada Controller 6.x returns at most 100 clients per poll, so this list may be truncated.",
  searchPlaceholder: "Search (name, IP, MAC, host or /regex/)",
  routerNotSelected: "Router not selected",
  routerLabel: "Router",
  mainRouterBadge: "Main router",
  controllerNotSelected: "Controller not selected",
  controllerLabel: "Controller",
  debugExport: "Download diagnostics JSON (redacted)",
  speedTooltipUsage: "Bandwidth Load: {value}%",
  speedTooltipTransfer: "Transfer: {value}",
  speedTooltipMbps: "Mbps: {value}/{max}",
  cpuUsage: "CPU usage: {value}",
  memUsage: "Memory usage: {value}"
}, Vn = {
  adoptFailed: "Adopt Failed",
  switch: "Switch",
  heartbeatMissed: "Heartbeat Missed",
  decoSatellite: "Deco (Satellite)",
  decoMaster: "Deco (Master)",
  accessPoint: "Access Point",
  managedExternally: "Managed Externally",
  off: "Off",
  deco: "Deco",
  wifi: "WiFi",
  wired: "Wired",
  on: "On",
  client: "Client",
  isolated: "Isolated",
  host: "Host",
  iot: "IoT",
  gateway: "Gateway",
  guest: "Guest",
  adopting: "Adopting",
  configuring: "Configuring",
  provisioning: "Provisioning",
  pending: "Pending",
  online: "Online",
  offline: "Offline",
  disconnected: "Disconnected",
  connected: "Connected",
  unknown: "Unknown",
  upgrading: "Upgrading",
  rebooting: "Rebooting"
}, Pn = {
  all: "All",
  band2: "2G",
  band5: "5G",
  band6: "6G",
  wifi: "WiFi",
  wired: "Wired",
  iot: "IoT",
  guest: "Guest",
  online: "Online",
  offline: "Offline"
}, Un = {
  name: "Name",
  lastSeen: "Last Seen",
  channel: "Channel",
  apName: "Access Point",
  status: "Status",
  connection: "Connection",
  band: "Band",
  ip: "IP",
  mac: "MAC",
  hostname: "Hostname",
  packetsSent: "Packets Sent",
  packetsReceived: "Packets Received",
  up: "Up",
  down: "Down",
  tx: "TX",
  rx: "RX",
  online: "Online",
  wifiMode: "WiFi Mode",
  downloaded: "Downloaded",
  uploaded: "Uploaded",
  traffic: "Traffic",
  signal: "Signal",
  snr: "SNR",
  powerSave: "Power Save",
  deviceType: "Type",
  deviceModel: "Model",
  deviceFirmware: "Firmware",
  deviceStatus: "Device Status",
  actions: "Actions"
}, Wn = {
  reconnectClient: "Reconnect client",
  groups: {
    scanning: "Data fetching",
    wifi: "WiFi",
    wan: "WAN connection",
    dhcp: "DHCP server",
    vpn: "VPN",
    iot: "IoT WiFi",
    guest: "Guest WiFi",
    reboot: "Reboot",
    controller: "Controller"
  },
  wifi: "WiFi",
  guest: "Guest",
  iot: "IoT",
  reboot: "Reboot",
  router: "Router",
  goToDevice: "Go to device: {name}",
  targetDevice: "Action target device",
  holdHint: "Hold {seconds}s",
  holdWithLabel: "{label} (hold {seconds}s)"
}, Kn = {
  online: "Online",
  offline: "Offline"
}, Gn = {
  title: "Card Title",
  router: "TP-Link Entry",
  routerPlaceholder: "Select router",
  routerHelp: "Select the config entry for tplink_router, tplink_deco, or Omada.",
  speedUnit: "Speed Unit (Up/Down)",
  speedMBps: "MB/s (default)",
  speedMbps: "Mbps",
  txrxColor: "Colorize TX/RX",
  txrxColorHelp: "Apply a color scale to TX/RX rates.",
  updownColor: "Colorize Up/Down",
  updownColorHelp: "Apply a color scale to upload and download speeds.",
  showHiddenEntities: "Show Hidden Entities",
  showHiddenEntitiesHelp: "When enabled, hidden switch/button entities are also shown in action sections.",
  headerActionRender: "Header Action Render",
  headerActionGroupsHelp: "Only the selected groups are shown in the header. Default: WiFi, Guest WiFi, Reboot, Data fetching, Controller. IoT, VPN, DHCP and WAN can cut your own access, so they are off unless you enable them.",
  headerActionGroups: "Header action groups",
  rowActionRender: "Row Action Render",
  actionRenderIcon: "Icon",
  actionRenderName: "Name",
  actionRenderIconAndName: "Icon and Name",
  actionRenderHelp: "Choose how action buttons are rendered.",
  shiftClickUnderline: "Show Shift Click Underline",
  shiftClickUnderlineHelp: "When enabled, Shift highlights entity-clickable cells with an underline (currently Omada-only behavior).",
  hideHeader: "Hide Header",
  hideHeaderHelp: "Hide the top header section.",
  hideFilterSection: "Hide Filter Section",
  hideFilterSectionHelp: "Hide the filter row section.",
  defaultFilterBand: "Default Band Filter",
  defaultFilterConnection: "Default Connection Filter",
  defaultFilterStatus: "Default Status Filter",
  defaultFilterUnset: "Use saved filter",
  defaultFilterHelp: "When set, default filters override saved local filters on each load.",
  uploadSpeedColorMax: "Upload Max (Mbps)",
  downloadSpeedColorMax: "Download Max (Mbps)",
  speedColorHelp: "Optional max scale in Mbps for Up/Down colorization.",
  columnLayout: "Column Layout",
  columnLayoutHelp: "Define visible columns, order, sticky position, and optional display name override.",
  columnLayoutKey: "Column",
  columnLayoutFixed: "Sticky",
  columnLayoutFixedOptional: "Sticky (optional)",
  columnLayoutName: "Display Name Override",
  columnLayoutNameOptional: "Display Name Override (optional)",
  columnLayoutMaxWidthOptional: "Max Width (optional)",
  columnLayoutMaxWidthHelp: "Column max-width CSS value. Number-only values are treated as px (for example 100 => 100px).",
  columnFixedNone: "None",
  columnFixedStart: "Start",
  columnFixedEnd: "End"
}, jn = {
  lists: "Could not load lists. Admin rights may be required."
}, qn = {
  card: Hn,
  labels: Vn,
  filters: Pn,
  columns: Un,
  actions: Wn,
  status: Kn,
  editor: Gn,
  errors: jn
}, Yn = {
  title: "TP-Link Router Cihazları",
  subtitle: "Router: {name}",
  selectRouter: "Kart ayarlarından bir TP-Link router seçin.",
  noDevices: "Bu router için kayıtlı cihaz bulunamadı.",
  noTrackersHint: `Seçilen kayıt hiç device_tracker entity'sı sunmuyor. tplink_router için entegrasyon seçeneği "support_tracker" açık olmalı.`,
  devicesCount: "{count} cihaz",
  onlineCount: "{online}/{total} online",
  omadaClientLimitNotice: "Tam 100 istemci alındı. Omada Controller 6.x her sorguda en fazla 100 istemci döndürdüğü için liste kesilmiş olabilir.",
  searchPlaceholder: "Ara (isim, IP, MAC, host veya /regex/)",
  routerNotSelected: "Router seçilmedi",
  routerLabel: "Router",
  mainRouterBadge: "Ana router",
  controllerNotSelected: "Controller seçilmedi",
  controllerLabel: "Controller",
  debugExport: "Tanı JSON çıktısını indir (redacted)",
  speedTooltipUsage: "Bant Genişliği Yükü: %{value}",
  speedTooltipTransfer: "Aktarım: {value}",
  speedTooltipMbps: "Mbps: {value}/{max}",
  cpuUsage: "CPU kullanımı: {value}",
  memUsage: "Bellek kullanımı: {value}"
}, Xn = {
  adoptFailed: "Benimseme başarısız",
  switch: "Switch",
  heartbeatMissed: "Sinyal kesildi",
  decoSatellite: "Deco (Uydu)",
  decoMaster: "Deco (Ana)",
  accessPoint: "Erişim noktası",
  managedExternally: "Dışarıdan yönetiliyor",
  off: "Kapalı",
  deco: "Deco",
  wifi: "WiFi",
  wired: "Kablolu",
  on: "Açık",
  client: "İstemci",
  isolated: "İzole",
  host: "Ana ağ",
  iot: "IoT",
  gateway: "Ağ geçidi",
  guest: "Misafir",
  adopting: "Benimseniyor",
  configuring: "Yapılandırılıyor",
  provisioning: "Hazırlanıyor",
  pending: "Beklemede",
  online: "Çevrimiçi",
  offline: "Çevrimdışı",
  disconnected: "Bağlı değil",
  connected: "Bağlı",
  unknown: "Bilinmiyor",
  upgrading: "Güncelleniyor",
  rebooting: "Yeniden başlatılıyor"
}, Jn = {
  all: "Tümü",
  band2: "2G",
  band5: "5G",
  band6: "6G",
  wifi: "WiFi",
  wired: "Kablolu",
  iot: "IoT",
  guest: "Misafir",
  online: "Çevrimiçi",
  offline: "Çevrimdışı"
}, Zn = {
  name: "Ad",
  lastSeen: "Son Görülme",
  channel: "Kanal",
  apName: "Erişim Noktası",
  status: "Durum",
  connection: "Bağlantı",
  band: "Band",
  ip: "IP",
  mac: "MAC",
  hostname: "Cihaz Adı",
  packetsSent: "Gönderilen Paket",
  packetsReceived: "Alınan Paket",
  up: "Yükleme",
  down: "İndirme",
  tx: "TX",
  rx: "RX",
  online: "Online Süre",
  wifiMode: "WiFi Modu",
  downloaded: "İndirilen",
  uploaded: "Yüklenen",
  traffic: "Trafik",
  signal: "Sinyal",
  snr: "SNR",
  powerSave: "Güç Tasarrufu",
  deviceType: "Tür",
  deviceModel: "Model",
  deviceFirmware: "Firmware",
  deviceStatus: "Cihaz Durumu",
  actions: "Aksiyonlar"
}, Qn = {
  reconnectClient: "İstemciyi yeniden bağla",
  groups: {
    scanning: "Veri çekme",
    wifi: "WiFi",
    wan: "WAN bağlantısı",
    dhcp: "DHCP sunucusu",
    vpn: "VPN",
    iot: "IoT WiFi",
    guest: "Misafir WiFi",
    reboot: "Yeniden başlat",
    controller: "Controller"
  },
  wifi: "WiFi",
  guest: "Misafir",
  iot: "IoT",
  reboot: "Yeniden Başlat",
  router: "Router",
  goToDevice: "Cihaza git: {name}",
  targetDevice: "Aksiyon hedef cihazı",
  holdHint: "{seconds} sn basılı tut",
  holdWithLabel: "{label} ({seconds} sn basılı tut)"
}, eo = {
  online: "Çevrimiçi",
  offline: "Çevrimdışı"
}, to = {
  title: "Kart Başlığı",
  router: "TP-Link Girişi",
  routerPlaceholder: "Router seçin",
  routerHelp: "tplink_router, tplink_deco veya Omada config entry seçin.",
  speedUnit: "Hız Birimi (Up/Down)",
  speedMBps: "MB/s (varsayılan)",
  speedMbps: "Mbps",
  txrxColor: "TX/RX Renklendir",
  txrxColorHelp: "TX/RX hızlarını renklendir.",
  updownColor: "Yükleme/İndirme Renklendir",
  updownColorHelp: "Yükleme ve indirme hızlarını renklendir.",
  showHiddenEntities: "Gizli Entity'leri Göster",
  showHiddenEntitiesHelp: "Açıkken gizli switch/button entity'leri aksiyon alanlarında da gösterilir.",
  headerActionRender: "Üst Aksiyon Görünümü",
  headerActionGroupsHelp: "Başlıkta yalnızca seçilen gruplar gösterilir. Varsayılan: WiFi, Misafir WiFi, Yeniden başlat, Veri çekme, Controller. IoT, VPN, DHCP ve WAN kendi erişiminizi kesebilir; açmadan gösterilmez.",
  headerActionGroups: "Başlık aksiyon grupları",
  rowActionRender: "Satır Aksiyon Görünümü",
  actionRenderIcon: "İkon",
  actionRenderName: "Ad",
  actionRenderIconAndName: "İkon ve Ad",
  actionRenderHelp: "Aksiyon butonlarının nasıl gösterileceğini seçin.",
  shiftClickUnderline: "Shift Alt Çizgi Vurgusu",
  shiftClickUnderlineHelp: "Açıkken Shift basılıyken entity açılabilen hücreler altı çizili görünür (şu an yalnızca Omada için).",
  hideHeader: "Üst Bilgiyi Gizle",
  hideHeaderHelp: "Kartın üst başlık bölümünü gizler.",
  hideFilterSection: "Filtre Alanını Gizle",
  hideFilterSectionHelp: "Filtre satırını tamamen gizler.",
  defaultFilterBand: "Varsayılan Bant Filtresi",
  defaultFilterConnection: "Varsayılan Bağlantı Filtresi",
  defaultFilterStatus: "Varsayılan Durum Filtresi",
  defaultFilterUnset: "Kayıtlı filtreyi kullan",
  defaultFilterHelp: "Ayarlandığında sayfa her açılışta kayıtlı filtre yerine bu varsayılan filtreleri uygular.",
  uploadSpeedColorMax: "Yükleme Max (Mbps)",
  downloadSpeedColorMax: "İndirme Max (Mbps)",
  speedColorHelp: "Yükleme/indirme renklendirme için opsiyonel max ölçek (Mbps).",
  columnLayout: "Sütun Düzeni",
  columnLayoutHelp: "Görünen sütunları, sıralarını, yapışkan konumu ve opsiyonel görünen adını belirleyin.",
  columnLayoutKey: "Sütun",
  columnLayoutFixed: "Yapışkan",
  columnLayoutFixedOptional: "Yapışkan (opsiyonel)",
  columnLayoutName: "Görünen Ad Override",
  columnLayoutNameOptional: "Görünen Ad Override (opsiyonel)",
  columnLayoutMaxWidthOptional: "Maksimum Genişlik (opsiyonel)",
  columnLayoutMaxWidthHelp: "Sütun max-width CSS değeri. Sadece sayı girilirse px kabul edilir (ör. 100 => 100px).",
  columnFixedNone: "Yok",
  columnFixedStart: "Başlangıç",
  columnFixedEnd: "Bitiş"
}, io = {
  lists: "Veri listeleri alınamadı. Yönetici yetkisi gerekebilir."
}, no = {
  card: Yn,
  labels: Xn,
  filters: Jn,
  columns: Zn,
  actions: Qn,
  status: eo,
  editor: to,
  errors: io
}, et = {
  en: qn,
  tr: no
}, oo = (n) => {
  const e = (n?.locale?.language || n?.language || "en").toLowerCase();
  if (et[e]) return e;
  const t = e.split("-")[0];
  return et[t] ? t : "en";
}, ai = (n, e) => {
  const t = e.split(".");
  let i = n;
  for (const o of t)
    if (typeof i != "object" || i === null || (i = i[o], i === void 0)) return null;
  return typeof i == "string" ? i : null;
}, we = (n, e, t) => {
  const i = oo(n);
  let o = ai(et[i], e) ?? ai(et.en, e) ?? e;
  return t && Object.entries(t).forEach(([r, s]) => {
    o = o.replace(new RegExp(`\\{${r}\\}`, "g"), String(s));
  }), o;
}, ro = {
  wifi: "wifi",
  wired: "wired",
  guest: "guest",
  iot: "iot",
  host: "host",
  gateway: "gateway",
  switch: "switch",
  "access point": "accessPoint",
  online: "online",
  offline: "offline",
  unknown: "unknown",
  connected: "connected",
  disconnected: "disconnected",
  pending: "pending",
  "heartbeat missed": "heartbeatMissed",
  isolated: "isolated",
  provisioning: "provisioning",
  configuring: "configuring",
  upgrading: "upgrading",
  rebooting: "rebooting",
  adopting: "adopting",
  "adopt failed": "adoptFailed",
  "managed externally": "managedExternally",
  deco: "deco",
  "deco (master)": "decoMaster",
  "deco (satellite)": "decoSatellite",
  client: "client",
  on: "on",
  off: "off"
}, Ye = (n, e) => {
  if (e == null) return "—";
  const t = ro[e.trim().toLowerCase()];
  return t ? we(n, `labels.${t}`) : e;
}, Fi = /^(?:\d{1,3}\.){3}\d{1,3}$/, so = /^[0-9a-f:]+$/i, ao = /^(?:[0-9a-f]{2}[:-]){5}[0-9a-f]{2}$/i, lo = /^[a-z][a-z0-9+.-]*:\/\//i, co = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, uo = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/, po = /^[A-Za-z0-9+/_=-]{24,}$/, ho = /(password|passwd|token|secret|auth|cookie|session|ssid|host|hostname|name|url|ip|mac|email)/i, fo = () => ({
  visitedNodes: 0,
  circularRefs: 0,
  depthTruncations: 0,
  arrayTruncations: 0,
  objectKeyTruncations: 0,
  stringTruncations: 0,
  maxNodeHits: 0
}), mo = () => ({
  totalMasked: 0,
  maskedByKey: 0,
  maskedIp: 0,
  maskedMac: 0,
  maskedUrl: 0,
  maskedToken: 0,
  maskedEmail: 0
}), Me = (n, e, t) => Math.max(e, Math.min(t, n)), _o = (n) => ({
  maxDepth: Me(n?.maxDepth, 2, 20),
  maxNodes: Me(n?.maxNodes, 500, 2e5),
  maxArrayLength: Me(n?.maxArrayLength, 1, 2e4),
  maxObjectKeys: Me(n?.maxObjectKeys, 1, 5e3),
  maxStringLength: Me(
    n?.maxStringLength,
    32,
    1e5
  )
}), Le = (n, e) => `[truncated:${n}${e ? `:${e}` : ""}]`, V = (n, e = 2, t = 2) => {
  const i = n.trim();
  return i && (i.length <= 2 ? `${i.slice(0, 1)}*` : i.length <= e + t ? `${i.slice(0, 1)}***${i.slice(-1)}` : `${i.slice(0, e)}***${i.slice(-t)}`);
}, Di = (n) => {
  const e = n.split(".");
  return e.length !== 4 ? V(n) : `${e[0]}.xxx.xxx.${e[3]}`;
}, go = (n) => {
  const e = n.includes("-") ? "-" : ":", t = n.split(/[:-]/);
  return t.length !== 6 ? V(n) : `${t[0]}${e}**${e}**${e}**${e}**${e}${t[5]}`;
}, yo = (n) => {
  try {
    const e = new URL(n), t = Fi.test(e.hostname) ? Di(e.hostname) : V(e.hostname, 2, 2), i = e.search ? "?***" : "", o = e.hash ? "#***" : "";
    return `${e.protocol}//${t}${e.port ? `:${e.port}` : ""}${e.pathname}${i}${o}`;
  } catch {
    return V(n);
  }
}, gt = (n, e, t) => n.length <= e.maxStringLength ? n : (t.stringTruncations += 1, `${n.slice(0, e.maxStringLength)}${Le(
  "string",
  String(n.length - e.maxStringLength)
)}`), bo = (n) => typeof n == "bigint" ? `${n.toString()}n` : typeof n == "function" ? `[function:${n.name || "anonymous"}]` : typeof n == "symbol" ? `[symbol:${String(n.description || "")}]` : typeof n == "number" ? Number.isFinite(n) ? n : String(n) : n, vo = (n, e) => {
  const t = _o(e), i = fo(), o = /* @__PURE__ */ new WeakMap(), r = (s, l, c) => {
    if (i.visitedNodes >= t.maxNodes)
      return i.maxNodeHits += 1, Le("max_nodes");
    if (s == null) return s;
    const d = bo(s);
    if (d !== s)
      return i.visitedNodes += 1, d;
    if (typeof s == "string")
      return i.visitedNodes += 1, gt(s, t, i);
    if (typeof s != "object")
      return i.visitedNodes += 1, s;
    if (o.has(s))
      return i.visitedNodes += 1, i.circularRefs += 1, `[circular:${o.get(s) ?? "root"}]`;
    if (l >= t.maxDepth)
      return i.visitedNodes += 1, i.depthTruncations += 1, Le("depth", c);
    if (s instanceof Date)
      return i.visitedNodes += 1, Number.isNaN(s.getTime()) ? "[date:invalid]" : s.toISOString();
    if (s instanceof RegExp)
      return i.visitedNodes += 1, String(s);
    if (s instanceof Error)
      return i.visitedNodes += 1, {
        name: s.name,
        message: gt(s.message, t, i),
        stack: s.stack ? gt(s.stack, t, i) : void 0
      };
    if (o.set(s, c), Array.isArray(s)) {
      const m = Math.min(s.length, t.maxArrayLength), b = [];
      for (let v = 0; v < m; v += 1)
        b.push(r(s[v], l + 1, `${c}[${v}]`));
      return s.length > m && (i.arrayTruncations += 1, b.push(Le("array", String(s.length - m)))), i.visitedNodes += 1, b;
    }
    if (s instanceof Map) {
      const m = {}, b = Array.from(s.entries()), v = b.slice(0, t.maxObjectKeys);
      return v.forEach(([T, O], C) => {
        m[String(T)] = r(O, l + 1, `${c}.map_${C}`);
      }), b.length > v.length && (i.objectKeyTruncations += 1, m.__truncated_entries__ = b.length - v.length), i.visitedNodes += 1, m;
    }
    if (s instanceof Set) {
      const m = Array.from(s.values()), b = m.slice(0, t.maxArrayLength), v = b.map((T, O) => r(T, l + 1, `${c}.set_${O}`));
      return m.length > b.length && (i.arrayTruncations += 1, v.push(Le("set", String(m.length - b.length)))), i.visitedNodes += 1, v;
    }
    const u = s, p = Object.keys(u), g = p.slice(0, t.maxObjectKeys), h = {};
    return g.forEach((m) => {
      h[m] = r(u[m], l + 1, `${c}.${m}`);
    }), p.length > g.length && (i.objectKeyTruncations += 1, h.__truncated_keys__ = p.length - g.length), i.visitedNodes += 1, h;
  };
  return { value: r(n, 0, "$"), limits: t, stats: i };
}, ee = (n, e) => {
  n[e] += 1, n.totalMasked += 1;
}, wo = (n, e, t) => {
  const i = n.trim();
  if (!i) return i;
  if (Fi.test(i)) {
    const o = Di(i);
    return o !== i && ee(t, "maskedIp"), o;
  }
  if (i.includes(":") && so.test(i) && i.length > 8) {
    const o = V(i, 4, 4);
    return o !== i && ee(t, "maskedIp"), o;
  }
  if (ao.test(i)) {
    const o = go(i);
    return o !== i && ee(t, "maskedMac"), o;
  }
  if (lo.test(i)) {
    const o = yo(i);
    return o !== i && ee(t, "maskedUrl"), o;
  }
  if (co.test(i)) {
    const [o, r] = i.split("@"), s = `${V(o, 1, 1)}@${V(r, 2, 2)}`;
    return s !== i && ee(t, "maskedEmail"), s;
  }
  if (/^bearer\s+/i.test(i)) {
    const o = i.replace(/^bearer\s+/i, ""), r = `Bearer ${V(o, 3, 3)}`;
    return r !== i && ee(t, "maskedToken"), r;
  }
  if (uo.test(i) || po.test(i)) {
    const o = V(i, 3, 3);
    return o !== i && ee(t, "maskedToken"), o;
  }
  if (e && ho.test(e)) {
    const o = V(i, 2, 2);
    return o !== i && ee(t, "maskedByKey"), o;
  }
  return i;
}, xt = (n, e, t) => {
  if (typeof n == "string") return wo(n, e, t);
  if (Array.isArray(n)) return n.map((i) => xt(i, e, t));
  if (n !== null && typeof n == "object") {
    const i = n, o = {};
    return Object.entries(i).forEach(([r, s]) => {
      o[r] = xt(s, r, t);
    }), o;
  }
  return n;
}, xo = (n) => {
  const e = mo();
  return { value: xt(n, void 0, e), stats: e };
}, ko = (n, e) => {
  const t = vo(n, e?.limits), i = xo(t.value);
  return {
    schema_version: "1",
    generated_at: (/* @__PURE__ */ new Date()).toISOString(),
    limits: t.limits,
    sanitize_stats: t.stats,
    redaction_stats: i.stats,
    masked: i.value
  };
}, tt = [
  "wifi",
  "guest",
  "iot",
  "reboot",
  "scanning",
  "controller",
  "vpn",
  "dhcp",
  "wan"
], So = [
  "wifi",
  "guest",
  "reboot",
  "scanning",
  "controller"
], yt = (n) => {
  if (/(2\.4|2g|2ghz|24g)/i.test(n)) return "2g";
  if (/(5g|5ghz)/i.test(n)) return "5g";
  if (/(6g|6ghz)/i.test(n)) return "6g";
}, $o = (n) => {
  if (!Array.isArray(n)) return new Set(So);
  const e = n.map((t) => String(t ?? "").trim().toLowerCase());
  return e.includes("all") ? new Set(tt) : new Set(
    e.filter(
      (t) => tt.includes(t)
    )
  );
}, Co = (n, e, t, i) => {
  const o = `${e} ${t}`.toLowerCase(), r = i === "omada" || i === "tplink_omada";
  if (n === "button")
    return o.includes("reboot") || o.includes("restart") ? { kind: "router", group: "reboot", requiresHold: !0 } : r && o.includes("reconnect") ? { kind: "router", group: "controller", requiresHold: !0 } : r && (o.includes("wlan optimization") || o.includes("rf planning")) ? { kind: "router", group: "controller", requiresHold: !0 } : null;
  if (o.includes("data fetching") || o.includes("scanning") || i === "tplink_deco" && o.includes("polling")) return { kind: "router", group: "scanning", requiresHold: !1 };
  if (o.includes("guest")) {
    const l = yt(o);
    return l ? { kind: "guest", group: "guest", band: l, requiresHold: !0 } : null;
  }
  if (o.includes("iot")) {
    const l = yt(o);
    return l ? { kind: "iot", group: "iot", band: l, requiresHold: !0 } : null;
  }
  if (i === "tplink_router" && o.includes("vpn"))
    return { kind: "router", group: "vpn", requiresHold: !0 };
  if (i === "tplink_router" && o.includes("dhcp"))
    return { kind: "router", group: "dhcp", requiresHold: !0 };
  if (i === "tplink_omada" && o.includes("wan_connect"))
    return { kind: "router", group: "wan", requiresHold: !0 };
  if (o.includes("wifi") || o.includes("wlan") || o.includes("radio") || o.includes("ssid")) {
    const l = yt(o);
    return l ? { kind: "host", group: "wifi", band: l, requiresHold: !0 } : null;
  }
  return null;
}, Ao = /(wifi|wlan|radio|ssid|guest|iot|poe|wan|scanning|data fetching|optimization|led|vpn|dhcp)/, To = /(wifi|wlan|radio|ssid|guest|iot|block|blocked|vpn|dhcp|poe|wan)/, Ro = (n) => n.includes(" block") || n.includes("_block") || n.includes("block_") || n.includes("blocked"), li = (n) => (n ?? "").trim().toLowerCase(), Eo = (n) => {
  if (n.domain !== "switch" || n.integrationDomain !== "omada" || !n.deviceHasTracker || Ao.test(n.text)) return !1;
  const e = li(n.deviceName);
  return e.length === 0 ? !0 : li(n.entityName) === e;
}, Mo = (n) => {
  const { text: e } = n;
  return Ro(e) ? "block" : e.includes("reconnect") ? "reconnect" : e.includes("wlan optimization") || e.includes("rf planning") || e.includes("ai optimization") ? "wlanOptimization" : e.includes("reboot") || e.includes("restart") ? "reboot" : Eo(n) ? "block" : "toggle";
}, Lo = (n, e) => {
  if (e === "block" || e === "reconnect" || e === "wlanOptimization" || e === "reboot")
    return !0;
  const { domain: t, text: i } = n;
  return i.includes("reboot") || i.includes("restart") || i.includes("reconnect") || i.includes("wlan optimization") || i.includes("rf planning") ? !0 : t === "switch" && To.test(i);
}, fe = [
  "status",
  "connection",
  "band",
  "apName",
  "ip",
  "mac",
  "hostname",
  "packetsSent",
  "packetsReceived",
  "down",
  "up",
  "tx",
  "rx",
  "online",
  "traffic",
  "signal"
], No = [
  "downloaded",
  "uploaded"
], Rt = [
  "deviceType",
  "deviceModel",
  "deviceFirmware",
  "deviceStatus"
], Bi = [
  "actions",
  "snr",
  "powerSave",
  "channel",
  "wifiMode",
  "lastSeen",
  ...No
], Oo = [
  "deviceType",
  "deviceModel",
  "deviceFirmware",
  "deviceStatus"
], Io = [
  ...fe,
  ...Oo
], Fo = [
  ...fe,
  ...Rt,
  ...Bi
], Do = [
  ...fe.filter((n) => n !== "apName"),
  ...Rt,
  "actions"
], Bo = ["apName", "channel", "wifiMode", "lastSeen"], ci = [
  ...fe,
  ...Rt,
  ...Bi
], di = {
  tplink_router: fe,
  tplink_deco: Io,
  omada: Fo,
  tplink_omada: Do
}, zo = (n) => n && n in di ? di[n] : fe, Ho = (n, e) => {
  const t = new Set(Bo);
  return n.filter((i) => e.has(i) && !t.has(i));
}, Vo = "50vw", Po = "50cqw", ui = (n, e) => {
  const t = n?.trim();
  return e ? t ? `max-width:min(${t},${Vo});max-width:min(${t},${Po});` : "" : t ? `max-width:${t};` : "";
}, Uo = (n, e, t, i) => {
  const o = /* @__PURE__ */ new Map();
  if (n !== "tplink_omada" || !e) return o;
  for (const r of t)
    r.entity_id.startsWith("device_tracker.") && (r.mac === "—" || r.macNormalized.length === 0 || o.set(r.entity_id, [
      {
        entity_id: r.entity_id,
        domain: "service",
        label: i,
        icon: "mdi:wifi-refresh",
        isOn: !1,
        available: r.isOnline,
        requiresHold: !0,
        deviceId: r.deviceId,
        role: "reconnect",
        service: {
          domain: "tplink_omada",
          service: "reconnect_client",
          data: { mac: r.mac, config_entry_id: e }
        }
      }
    ]));
  return o;
}, Wo = (n, e) => new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" }).compare(n, e), Ko = (n, e) => {
  const t = /* @__PURE__ */ new Map(), i = new Map(e.map((o) => [o.id, o]));
  for (const o of n) {
    if (o.isGlobalCommon || !o.deviceId || t.has(o.deviceId)) continue;
    const r = i.get(o.deviceId);
    t.set(o.deviceId, {
      deviceId: o.deviceId,
      deviceName: o.deviceName ?? r?.name_by_user ?? r?.name ?? o.deviceId.slice(0, 8)
    });
  }
  return [...t.values()].sort((o, r) => Wo(o.deviceName, r.deviceName));
}, pi = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"], it = (n) => Number.isFinite(n) ? new Intl.NumberFormat(void 0, { maximumFractionDigits: 0 }).format(n) : "—", q = (n, e = !1) => {
  if (n == null || !Number.isFinite(n)) return "—";
  const t = Math.abs(n);
  let i = 0, o = t;
  for (; o >= 1024 && i < pi.length - 1; )
    o /= 1024, i += 1;
  const r = o >= 100 ? 0 : o >= 10 ? 1 : 2, s = `${o.toFixed(r)} ${pi[i]}`;
  return e ? `${s}/s` : s;
}, kt = (n) => n == null || !Number.isFinite(n) ? null : n * 8 / 1e6, Ve = (n, e, t = "auto") => {
  if (n == null || !Number.isFinite(n)) return null;
  const i = Math.abs(n);
  return t === "kbps" ? i >= 1e7 ? n / 1e6 : n / 1e3 : t === "mbps" ? n : i >= 1e7 ? n / 1e6 : i >= 1e4 || i >= 5e3 && i < 1e4 && e && e !== "6g" ? n / 1e3 : n;
}, Et = (n) => {
  if (n == null || !Number.isFinite(n)) return "—";
  const e = Math.max(0, Math.floor(n)), t = Math.floor(e / 86400), i = Math.floor(t / 30), o = t % 30, r = Math.floor(e % 86400 / 3600), s = Math.floor(e % 3600 / 60), l = e % 60, c = i > 0 ? `${i}mo ` : "", d = o > 0 ? `${o}d ` : "", u = (p) => p.toString().padStart(2, "0");
  return `${c}${d}${u(r)}:${u(s)}:${u(l)}`;
}, nt = (n, e, t = "auto") => {
  const i = Ve(n, e, t);
  if (i === null) return "—";
  const o = i >= 100 ? 0 : i >= 10 ? 1 : 2;
  return `${i.toFixed(o)} Mbps`;
}, St = (n, e = "MBps") => {
  if (n == null || !Number.isFinite(n)) return "—";
  const t = n;
  if (e === "MBps") {
    if (t < 1e3) {
      const d = t >= 100 ? 0 : t >= 10 ? 1 : 2;
      return `${t.toFixed(d)} B/s`;
    }
    const r = t / 1e3;
    if (r < 1e3) {
      const d = r >= 100 ? 0 : r >= 10 ? 1 : 2;
      return `${r.toFixed(d)} KB/s`;
    }
    const s = r / 1e3;
    if (s < 1e3) {
      const d = s >= 100 ? 0 : s >= 10 ? 1 : 2;
      return `${s.toFixed(d)} MB/s`;
    }
    const l = s / 1e3, c = l >= 100 ? 0 : l >= 10 ? 1 : 2;
    return `${l.toFixed(c)} GB/s`;
  }
  const i = kt(n);
  if (i === null) return "—";
  if (i < 1) {
    const r = i * 1e3, s = r >= 100 ? 0 : r >= 10 ? 1 : 2;
    return `${r.toFixed(s)} Kbps`;
  }
  if (i >= 1e3) {
    const r = i / 1e3, s = r >= 100 ? 0 : r >= 10 ? 1 : 2;
    return `${r.toFixed(s)} Gbps`;
  }
  const o = i >= 100 ? 0 : i >= 10 ? 1 : 2;
  return `${i.toFixed(o)} Mbps`;
}, hi = /* @__PURE__ */ new Map(), Go = (n) => {
  const e = n ?? "", t = hi.get(e);
  if (t) return t;
  const i = new Intl.DateTimeFormat(n || void 0, {
    dateStyle: "short",
    timeStyle: "short"
  });
  return hi.set(e, i), i;
}, jo = (n, e) => {
  if (n == null || !Number.isFinite(n)) return "—";
  const t = new Date(n);
  if (Number.isNaN(t.getTime())) return "—";
  try {
    return Go(e).format(t);
  } catch {
    return t.toISOString();
  }
}, y = (n) => n == null || typeof n == "string" && n.trim().length === 0 ? "—" : String(n), qo = /* @__PURE__ */ new Set(["not_home", "off", "unavailable", "unknown", "none"]), Mt = (n) => {
  if (n == null) return !1;
  const e = String(n).trim().toLowerCase();
  return e.length === 0 ? !1 : !qo.has(e);
}, Yo = "var(--tplink-router-card-online-color, var(--success-color, #3aa45b))", Xo = "var(--tplink-router-card-offline-color, var(--error-color, #d32f2f))", Lt = (n) => n ? Yo : Xo, x = (n) => {
  if (typeof n == "number" && Number.isFinite(n)) return n;
  if (typeof n == "string" && n.trim() !== "") {
    const e = Number(n);
    return Number.isFinite(e) ? e : null;
  }
  return null;
}, zi = (n) => {
  if (n == null) return "unknown";
  const e = String(n).toLowerCase();
  return e.includes("2.4") || e.includes("2g") ? "2g" : e.includes("5g") ? "5g" : e.includes("6g") ? "6g" : "unknown";
}, Jo = (n) => {
  if (n == null) return "unknown";
  const e = String(n).trim().toLowerCase();
  return e.length === 0 || e === "—" || e === "-" || e === "unknown" || e === "unavailable" || e === "none" || e === "null" || e === "n/a" || e === "na" ? "unknown" : e.includes("guest") ? "guest" : e.includes("iot") ? "iot" : e.includes("wired") || e.includes("lan") || e.includes("ethernet") ? "wired" : "wifi";
}, me = (n) => n.replace(/[^0-9a-f]/gi, "").toLowerCase(), Hi = (n) => {
  if (n == null) return null;
  const e = String(n).trim();
  return e.length > 0 ? e : null;
}, Zo = (n) => {
  if (n == null) return { name: null, isMainNode: !1 };
  const e = String(n).trim();
  if (e.length === 0) return { name: null, isMainNode: !1 };
  if (e.startsWith("*")) {
    const t = e.slice(1).trim();
    return { name: t.length > 0 ? t : null, isMainNode: !0 };
  }
  return { name: e, isMainNode: !1 };
}, lt = (n) => n === null ? "var(--secondary-text-color)" : n <= -80 ? "var(--signal-bad)" : n <= -70 ? "var(--signal-poor)" : n <= -65 ? "var(--signal-fair)" : n <= -60 ? "var(--signal-good)" : "var(--signal-excellent)", Qo = (n) => {
  let e = 0, t = 0;
  for (const i of n) {
    const o = i.attributes, r = zi(o.band ?? o.bandwidth ?? o.frequency), s = x(o.tx_rate), l = x(o.rx_rate);
    for (const c of [s, l]) {
      if (c === null) continue;
      const d = Math.abs(c);
      d > e && (e = d), r === "2g" && d > t && (t = d);
    }
  }
  return e >= 1e4 || t >= 1e3 ? "kbps" : "auto";
}, er = (n, e, t, i) => {
  const o = Object.values(n).filter((u) => u.entity_id.startsWith("device_tracker.") ? u.attributes.source_type === "router" : !1);
  if (!t) return o;
  if (!i && e.length === 0) return [];
  if (i || e.length === 0) return o;
  const s = e.filter((u) => u.config_entry_id === t).filter((u) => u.entity_id.startsWith("device_tracker.")).map((u) => n[u.entity_id]).filter((u) => u !== void 0);
  if (s.length > 0) return s;
  const l = new Map(e.map((u) => [u.entity_id, u.config_entry_id])), c = o.filter(
    (u) => l.get(u.entity_id) === t
  );
  if (c.length > 0) return c;
  const d = new Set(
    e.filter((u) => u.config_entry_id === t && u.device_id).map((u) => u.device_id)
  );
  if (d.size > 0) {
    const u = new Map(
      e.filter((g) => g.entity_id.startsWith("device_tracker.") && g.device_id).map((g) => [g.entity_id, g.device_id])
    ), p = o.filter((g) => {
      const h = u.get(g.entity_id);
      return h ? d.has(h) : !1;
    });
    if (p.length > 0) return p;
  }
  return [];
}, tr = (n, e) => {
  if (!e || n.length === 0) return [];
  const t = n.filter((r) => r.config_entry_id === e), i = new Set(
    t.filter((r) => r.device_id).map((r) => r.device_id)
  ), o = new Set(
    t.filter((r) => !r.entity_id.startsWith("device_tracker.") && r.device_id).map((r) => r.device_id)
  );
  return [...o.size > 0 ? o : i];
}, Ue = (n) => y(Array.isArray(n) ? n.join(",") : n), ir = {
  up: {
    bytesPerSecond: ["up_speed"],
    kiloBytesPerSecond: ["up_kilobytes_per_s"]
  },
  down: {
    bytesPerSecond: ["down_speed"],
    kiloBytesPerSecond: ["down_kilobytes_per_s"]
  }
}, De = (n, e) => {
  for (const t of e) {
    const i = x(n[t]);
    if (i !== null) return i;
  }
  return null;
}, nr = [
  "tx_rate",
  "txRate",
  "tx_mbps",
  "txMbps",
  "tx_speed",
  "txSpeed"
], or = [
  "rx_rate",
  "rxRate",
  "rx_mbps",
  "rxMbps",
  "rx_speed",
  "rxSpeed"
], rr = [
  "signal",
  "rssi",
  "signal_dbm",
  "signalDbm",
  "dbm"
], sr = (n) => {
  const e = Ue(n).toLowerCase();
  return e === "—" ? "" : e.includes("main") ? "host" : e.includes("guest") ? "guest" : e.includes("iot") ? "iot" : e;
}, ar = (n) => {
  const e = Ue(n).toLowerCase();
  return e === "—" ? "" : e.includes("wired") || e.includes("ethernet") || e.includes("lan") ? "wired" : e.includes("wireless") || e.includes("wifi") || e.includes("wlan") ? "wifi" : e;
}, lr = (n) => {
  const e = n.toLowerCase();
  return e.includes("band2_4") || e.includes("2.4") ? "2G" : e.includes("band5") ? "5G" : e.includes("band6") ? "6G" : "—";
}, cr = (n, e, t) => {
  const i = e.toLowerCase();
  return t === "wired" || i.includes("wired") || i.includes("ethernet") || i.includes("lan") ? "wired" : n || (t === "wifi" || i.includes("band2_4") || i.includes("band5") || i.includes("band6") || i.includes("wifi") || i.includes("wireless") || i.includes("wlan") ? "wifi" : e);
}, dr = (n) => n.split(/[\s_-]+/).filter((e) => e.length > 0).map((e) => e[0].toUpperCase() + e.slice(1)).join(" "), ur = (n, e) => {
  const t = Ue(n).toLowerCase();
  return t === "—" ? "—" : t === "deco" ? e === !0 ? "Deco (Master)" : e === !1 ? "Deco (Satellite)" : "Deco" : t === "client" ? "Client" : dr(t);
}, pr = (n) => {
  const e = n.internet_online;
  if (typeof e == "boolean") return e ? "Online" : "Offline";
  if ("internet_online" in n && e === null) return "Unknown";
  if (typeof e == "string") {
    const i = e.trim().toLowerCase();
    if (i === "true" || i === "online") return "Online";
    if (i === "false" || i === "offline") return "Offline";
  }
  const t = Ue(n.status);
  return t === "—" ? "—" : t;
}, fi = (n, e) => {
  const t = ir[e], i = De(n, t.bytesPerSecond);
  if (i !== null) return i;
  const o = De(n, t.kiloBytesPerSecond);
  return o === null ? null : o * 1e3;
}, hr = (n, e, t) => {
  const i = n.attributes, o = y(i.friendly_name ?? n.entity_id), r = i.interface ?? i.client_type ?? i.clientType, s = i.wire_type ?? i.wireType, l = sr(r), c = ar(s), d = i.connection ?? i.connection_type ?? i.connectionType ?? "—", u = Ue(d), p = y(
    cr(l, u, c)
  ), g = lr(u), h = y(
    i.band ?? i.bandwidth ?? i.frequency ?? i.wifi_band ?? g
  ), m = zi(h), b = Jo(p), v = y(i.ip ?? i.ip_address ?? i.ipaddr ?? "—"), T = y(i.mac ?? i.mac_address ?? i.macaddr ?? "—"), O = y(
    i.host_name ?? i.hostname ?? i.host ?? i.name ?? i.ui_device_name ?? i.device_model ?? "—"
  ), C = i.ap_name !== void 0 ? Zo(i.ap_name) : { name: Hi(i.apName ?? i.deco_device), isMainNode: !1 }, A = x(i.packets_sent ?? i.up_packet ?? i.upPacket), R = x(
    i.packets_received ?? i.down_packet ?? i.downPacket
  ), X = fi(i, "up"), P = fi(i, "down"), B = De(i, nr), F = De(i, or), U = kt(X), oe = kt(P), J = Ve(B, m, t), W = Ve(F, m, t), re = x(i.online_time ?? i.uptime ?? i.connected_time), z = x(i.traffic_down ?? i.trafficDown), D = x(i.traffic_up ?? i.trafficUp), K = z !== null || D !== null ? (z ?? 0) + (D ?? 0) : x(i.traffic_usage ?? i.total_traffic ?? i.traffic_total), H = De(i, rr), Se = ur(i.device_type ?? i.type, i.master), Z = y(i.device_model ?? i.model ?? "—"), Q = y(
    i.sw_version ?? i.firmware ?? i.firmware_version ?? "—"
  ), se = pr(i), _e = (v === "0.0.0.0" || v === "—") && b === "unknown" && m === "unknown", G = Mt(n.state) && !_e;
  return {
    entity_id: n.entity_id,
    name: o,
    nameRaw: o,
    macNormalized: me(T),
    isOnline: G,
    statusValue: G ? 1 : 0,
    statusColor: Lt(G),
    connection: p,
    connectionType: b,
    band: h,
    bandType: m,
    apName: C.name ?? "—",
    apNameValue: C.name,
    apIsMainNode: C.isMainNode,
    ip: v,
    mac: T,
    hostname: O,
    packetsSent: it(A ?? Number.NaN),
    packetsSentValue: A,
    packetsReceived: it(R ?? Number.NaN),
    packetsReceivedValue: R,
    upSpeed: St(X, e),
    upSpeedValue: U,
    downSpeed: St(P, e),
    downSpeedValue: oe,
    txRate: nt(B, m, t),
    txRateValue: J,
    rxRate: nt(F, m, t),
    rxRateValue: W,
    onlineTime: Et(re),
    onlineTimeValue: re,
    downloaded: q(z),
    downloadedValue: z,
    uploaded: q(D),
    uploadedValue: D,
    trafficUsage: q(K),
    trafficUsageValue: K,
    signal: H !== null ? `${H} dBm` : "—",
    signalValue: H,
    signalColor: lt(H),
    snr: "—",
    snrValue: null,
    powerSave: "—",
    powerSaveValue: null,
    channel: "—",
    channelValue: null,
    wifiMode: "—",
    wifiModeValue: null,
    lastSeen: "—",
    lastSeenValue: null,
    deviceType: Se,
    deviceModel: Z,
    deviceFirmware: Q,
    deviceStatus: se
  };
}, fr = () => ({
  downloadedMB: null,
  uploadedMB: null,
  rxActivityMBps: null,
  txActivityMBps: null,
  rssi: null,
  snr: null,
  uptimeSeconds: null
}), Vi = (n) => n.entity_id.startsWith("device_tracker."), Y = (n) => String(n ?? "").trim(), mr = (n) => {
  if (!Vi(n)) return !1;
  const e = n.attributes, t = String(e.source_type ?? "").toLowerCase();
  return t && t !== "router" ? !1 : "wireless" in e || "guest" in e || "ssid" in e || "ap_mac" in e || "switch_port" in e || "channel_width" in e || "radio" in e;
}, _r = [
  [/^11be/, 7],
  [/^11ax/, 6],
  [/^11ac/, 5],
  [/^11n/, 4],
  [/^11g$/, 3],
  [/^11a$/, 2],
  [/^11b$/, 1]
], gr = (n) => {
  const e = Y(n).toLowerCase();
  if (!e) return { label: "—", generation: null };
  for (const [t, i] of _r)
    if (t.test(e)) return { label: `WiFi ${i}`, generation: i };
  return { label: y(n), generation: null };
}, yr = (n) => {
  if (n == null) return null;
  const e = x(n);
  if (e !== null)
    return e <= 0 ? null : e < 1e11 ? e * 1e3 : e;
  if (typeof n == "string") {
    const t = Date.parse(n);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}, br = (n) => {
  const e = [];
  return Y(n.radio_mode_2ghz) && e.push("2.4G"), (Y(n.radio_mode_5ghz) || n.supports_5ghz === !0) && e.push("5G"), (Y(n.radio_mode_6ghz) || n.supports_6ghz === !0) && e.push("6G"), e.length > 0 ? e.join("/") : "—";
}, mi = {
  0: "Disconnected",
  1: "Connected",
  2: "Pending",
  3: "Heartbeat Missed",
  4: "Isolated"
}, vr = {
  0: "Disconnected",
  1: "Disconnected",
  10: "Provisioning",
  11: "Configuring",
  12: "Upgrading",
  13: "Rebooting",
  14: "Connected",
  15: "Connected",
  16: "Connected",
  17: "Connected",
  20: "Pending",
  21: "Pending",
  22: "Adopting",
  23: "Adopting",
  24: "Adopt Failed",
  25: "Adopt Failed",
  26: "Managed Externally",
  27: "Managed Externally",
  30: "Heartbeat Missed",
  31: "Heartbeat Missed",
  32: "Heartbeat Missed",
  33: "Heartbeat Missed",
  40: "Isolated",
  41: "Isolated"
}, wr = (n, e) => {
  const t = x(n.status_category);
  if (t !== null && t in mi)
    return mi[t];
  const i = n.status;
  if (typeof i == "string" && i.trim().length > 0) return i;
  const o = x(i);
  return o !== null ? vr[o] ?? String(o) : Y(n.type) ? e ? "Connected" : "Disconnected" : "—";
}, xr = (n) => {
  const e = [n.band, n.radio, n.wifi_mode, n.ssid].map((t) => String(t ?? "").toLowerCase()).filter((t) => t.length > 0);
  for (const t of e) {
    if (t.includes("6g") || t.includes("6ghz") || t.includes("6 ghz") || t.includes("11bea"))
      return "6g";
    if (t.includes("5g") || t.includes("5ghz") || t.includes("5 ghz") || t.includes("11ac") || t.includes("11axa"))
      return "5g";
    if (t.includes("2.4") || t.includes("2g") || t.includes("2ghz") || t.includes("11ng"))
      return "2g";
  }
  return "unknown";
}, kr = (n, e = !1) => {
  const t = n.guest === !0 || String(n.guest).toLowerCase() === "true", i = n.wireless === !0 || String(n.wireless).toLowerCase() === "true", o = n.switch_port !== void 0 || n.switchPort !== void 0 || n.standard_port !== void 0 || n.switch_name !== void 0 || n.switchName !== void 0 || n.switch_mac !== void 0 || n.switchMac !== void 0, r = n.ap_name !== void 0 || n.apName !== void 0 || n.ap_mac !== void 0 || n.apMac !== void 0 || n.ssid !== void 0, s = [
    n.connection,
    n.connect_type,
    n.connectType,
    n.connect_dev_type,
    n.connectDevType,
    n.network_name,
    n.networkName
  ].map((c) => Y(c).toLowerCase()).join(" "), l = Y(n.type).toLowerCase();
  return t ? { label: "Guest", type: "guest" } : i ? { label: "WiFi", type: "wifi" } : o ? { label: "Wired", type: "wired" } : r ? { label: "WiFi", type: "wifi" } : n.wireless === !1 || String(n.wireless).toLowerCase() === "false" ? { label: "Wired", type: "wired" } : s.includes("wired") || s.includes("ethernet") || s.includes("lan") || s.includes("switch") || s.includes("gateway") ? { label: "Wired", type: "wired" } : s.includes("wifi") || s.includes("wireless") || s.includes("wlan") || s.includes("ap") ? { label: "WiFi", type: "wifi" } : l === "gateway" ? { label: "Gateway", type: "unknown" } : l === "switch" ? { label: "Switch", type: "unknown" } : l === "ap" ? { label: "Access Point", type: "unknown" } : e ? { label: "WiFi", type: "wifi" } : n.ip !== void 0 || n.ip_address !== void 0 || n.mac !== void 0 ? { label: "Wired", type: "wired" } : {
    label: y(n.connection ?? n.type ?? "—"),
    type: "unknown"
  };
}, Pi = (n) => {
  if (n == null) return null;
  const e = x(n);
  if (e !== null) return e;
  if (typeof n == "string") {
    const t = Date.parse(n);
    if (Number.isFinite(t))
      return Math.max(0, Math.floor((Date.now() - t) / 1e3));
  }
  return null;
}, ot = (n, e) => {
  if (n === null || !Number.isFinite(n)) return "—";
  if (e === "MBps") {
    if (n >= 1e3) {
      const r = n / 1e3, s = r >= 100 ? 0 : r >= 10 ? 1 : 2;
      return `${r.toFixed(s)} GB/s`;
    }
    const o = n >= 100 ? 0 : n >= 10 ? 1 : 2;
    return `${n.toFixed(o)} MB/s`;
  }
  const t = n * 8;
  if (t >= 1e3) {
    const o = t / 1e3, r = o >= 100 ? 0 : o >= 10 ? 1 : 2;
    return `${o.toFixed(r)} Gbps`;
  }
  const i = t >= 100 ? 0 : t >= 10 ? 1 : 2;
  return `${t.toFixed(i)} Mbps`;
}, _i = (n, e) => {
  for (const t of e) {
    const i = x(n[t]);
    if (i !== null) return i;
  }
  return null;
}, Sr = (n, e) => {
  const t = n.entity_id.toLowerCase(), i = String(n.attributes.friendly_name ?? "").toLowerCase().trim(), o = `${t} ${i}`;
  if (o.includes("downloaded") || /\bdownload\b/.test(o)) {
    e.downloadedMB = x(n.state);
    return;
  }
  if (o.includes("uploaded") || /\bupload\b/.test(o)) {
    e.uploadedMB = x(n.state);
    return;
  }
  if (o.includes("rx_activity") || o.includes("rx activity") || /\brx\b/.test(o) && !o.includes("utilization")) {
    e.rxActivityMBps = x(n.state);
    return;
  }
  if (o.includes("tx_activity") || o.includes("tx activity") || /\btx\b/.test(o) && !o.includes("utilization")) {
    e.txActivityMBps = x(n.state);
    return;
  }
  if (o.includes("snr")) {
    e.snr = x(n.state);
    return;
  }
  if (o.includes("rssi") || o.includes("signal")) {
    e.rssi = x(n.state);
    return;
  }
  (o.includes("uptime") || o.includes("duration") || o.includes("connected")) && (e.uptimeSeconds = Pi(n.state));
}, $r = (n) => {
  const e = Y(n).toLowerCase();
  return e ? e === "ap" ? "Access Point" : e === "gateway" ? "Gateway" : e === "switch" ? "Switch" : y(n) : "—";
}, Ui = (n) => {
  if (!n) return;
  const e = n.toLowerCase();
  if (e.startsWith("eap")) return "Access Point";
  if (e.startsWith("er")) return "Gateway";
  if (e.startsWith("sg") || e.startsWith("tl-sg")) return "Switch";
}, Wi = (n, e) => {
  if (!e) return n;
  const t = e.connections?.find((i) => String(i[0] ?? "").toLowerCase().includes("mac"))?.[1];
  return {
    ...n,
    name: n.name === "—" ? y(e.name_by_user ?? e.name ?? "—") : n.name,
    nameRaw: n.nameRaw === "—" ? y(e.name_by_user ?? e.name ?? "—") : n.nameRaw,
    mac: n.mac === "—" ? y(t ?? n.mac) : n.mac,
    macNormalized: n.macNormalized.length === 0 && t ? me(t) : n.macNormalized,
    deviceType: n.deviceType && n.deviceType !== "—" ? n.deviceType : Ui(e.model) ?? n.deviceType,
    deviceModel: n.deviceModel && n.deviceModel !== "—" ? n.deviceModel : y(e.model ?? n.deviceModel ?? "—"),
    deviceFirmware: n.deviceFirmware && n.deviceFirmware !== "—" ? n.deviceFirmware : y(e.sw_version ?? n.deviceFirmware ?? "—")
  };
}, Cr = (n) => {
  for (const t of n) {
    const i = String(t.state ?? "").toLowerCase();
    if (Vi(t))
      return { isOnline: Mt(i), raw: t.state };
    if (i === "on" || i === "connected")
      return { isOnline: !0, raw: t.state };
    if (i === "off" || i === "not_home")
      return { isOnline: !1, raw: t.state };
  }
  const e = n.find((t) => t.entity_id.startsWith("switch."));
  return e ? { isOnline: String(e.state).toLowerCase() !== "off", raw: e.state } : { isOnline: !1, raw: "unknown" };
}, Ar = (n) => {
  const e = [
    (t) => t.entity_id.startsWith("device_tracker."),
    (t) => t.entity_id.startsWith("switch."),
    (t) => t.entity_id.startsWith("button."),
    (t) => t.entity_id.startsWith("sensor.")
  ];
  for (const t of e) {
    const i = n.find(t);
    if (i) return i;
  }
  return n[0];
}, Tr = (n) => n.some((e) => e.entity_id.startsWith("device_tracker.")) ? !1 : n.every((e) => e.entity_id.startsWith("update.")), Rr = (n) => n.some((e) => {
  const t = e.entity_id.toLowerCase(), i = e.attributes, o = String(i.friendly_name ?? "").toLowerCase(), r = `${t} ${o}`;
  return r.includes("reconnect") || r.includes("rssi") || r.includes(" snr") || r.includes(" 5g") || r.includes(" 6g") || r.includes(" 2.4g") || i.wireless === !0 || String(i.wireless).toLowerCase() === "true";
}), gi = (n, e) => {
  for (const t of n) {
    const i = t.entity_id.toLowerCase(), o = t.attributes, r = String(o.friendly_name ?? "").toLowerCase(), s = `${i} ${r}`;
    if (!e.some((c) => s.includes(c))) continue;
    const l = x(t.state);
    if (l !== null) return l;
  }
  return null;
}, Er = (n) => {
  for (const e of n) {
    if (!e.entity_id.toLowerCase().includes("power_save")) continue;
    const i = String(e.state ?? "").toLowerCase();
    return i === "on" ? { text: "On", value: 1 } : i === "off" ? { text: "Off", value: 0 } : { text: y(e.state), value: null };
  }
  return { text: "—", value: null };
}, Ki = (n) => n.trim().toLowerCase(), Mr = (n) => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  for (const i of n) {
    if (!i.entity_id.startsWith("sensor.")) continue;
    const r = i.attributes.clients;
    if (Array.isArray(r))
      for (const s of r) {
        if (!s || typeof s != "object") continue;
        const l = s, c = y(l.mac), d = me(c), u = y(l.name), p = y(l.ip), g = {
          ip: p === "—" ? void 0 : p,
          name: u === "—" ? void 0 : u,
          mac: c === "—" ? void 0 : c
        };
        d.length > 0 && e.set(d, g), u !== "—" && t.set(Ki(u), g);
      }
  }
  return { byMac: e, byName: t };
}, yi = (n, e) => {
  const t = n.macNormalized.length > 0 ? e.byMac.get(n.macNormalized) : void 0, i = e.byName.get(Ki(n.nameRaw)), o = t ?? i;
  if (!o) return n;
  const r = n.mac === "—" ? y(o.mac ?? "—") : n.mac, s = me(r);
  return {
    ...n,
    ip: n.ip === "—" ? y(o.ip ?? n.ip) : n.ip,
    name: n.name === "—" ? y(o.name ?? n.name) : n.name,
    nameRaw: n.nameRaw === "—" ? y(o.name ?? n.nameRaw) : n.nameRaw,
    hostname: n.hostname === "—" ? y(o.name ?? n.hostname) : n.hostname,
    mac: r,
    macNormalized: s.length > 0 ? s : n.macNormalized
  };
}, Gi = (n, e) => {
  const t = Rr(e), i = n.snrValue ?? gi(e, ["snr"]), o = n.signalValue ?? gi(e, ["rssi", " signal"]), r = Er(e), s = n.connectionType === "wired" && t ? "wifi" : n.connectionType, l = n.connectionType === "wired" && t ? "WiFi" : n.connection;
  return {
    ...n,
    connectionType: s,
    connection: l,
    signal: o !== null ? `${o} dBm` : n.signal,
    signalValue: o,
    signalColor: lt(o),
    snr: i !== null ? `${i} dB` : n.snr,
    snrValue: i,
    powerSave: r.text,
    powerSaveValue: r.value
  };
}, Lr = (n, e, t, i, o) => {
  if (e.length === 0 || Tr(e)) return null;
  const r = Ar(e);
  if (!r) return null;
  const s = r.attributes, l = Cr(e), c = $r(s.type ?? Ui(o?.model)), d = c === "Gateway" || c === "Switch" || c === "Access Point" ? c : "Wired", u = t?.downloadedMB ?? null, p = t?.uploadedMB ?? null, g = u !== null ? u * 1024 * 1024 : null, h = p !== null ? p * 1024 * 1024 : null, m = g !== null || h !== null ? (g ?? 0) + (h ?? 0) : null, b = {
    entity_id: r.entity_id,
    deviceId: n,
    name: y(o?.name_by_user ?? o?.name ?? r.attributes.friendly_name ?? r.entity_id),
    nameRaw: y(o?.name_by_user ?? o?.name ?? r.attributes.friendly_name ?? r.entity_id),
    macNormalized: me(
      y(
        s.mac ?? s.mac_address ?? o?.connections?.find((v) => String(v[0]).toLowerCase().includes("mac"))?.[1] ?? ""
      )
    ),
    isOnline: l.isOnline,
    statusValue: l.isOnline ? 1 : 0,
    statusColor: Lt(l.isOnline),
    connection: d,
    connectionType: c === "—" ? "wired" : "unknown",
    band: "—",
    bandType: "unknown",
    apName: "—",
    apNameValue: null,
    apIsMainNode: !1,
    ip: y(s.ip ?? s.ip_address ?? "—"),
    mac: y(
      s.mac ?? s.mac_address ?? o?.connections?.find((v) => String(v[0]).toLowerCase().includes("mac"))?.[1] ?? "—"
    ),
    hostname: y(s.host_name ?? s.hostname ?? s.name ?? o?.name_by_user ?? o?.name ?? "—"),
    packetsSent: "—",
    packetsSentValue: null,
    packetsReceived: "—",
    packetsReceivedValue: null,
    upSpeed: ot(t?.txActivityMBps ?? null, i),
    upSpeedValue: t?.txActivityMBps !== null && t?.txActivityMBps !== void 0 ? t.txActivityMBps * 8 : null,
    downSpeed: ot(t?.rxActivityMBps ?? null, i),
    downSpeedValue: t?.rxActivityMBps !== null && t?.rxActivityMBps !== void 0 ? t.rxActivityMBps * 8 : null,
    txRate: "—",
    txRateValue: null,
    rxRate: "—",
    rxRateValue: null,
    onlineTime: Et(t?.uptimeSeconds ?? null),
    onlineTimeValue: t?.uptimeSeconds ?? null,
    downloaded: q(g),
    downloadedValue: g,
    uploaded: q(h),
    uploadedValue: h,
    trafficUsage: q(m),
    trafficUsageValue: m,
    signal: t?.rssi !== null && t?.rssi !== void 0 ? `${t.rssi} dBm` : "—",
    signalValue: t?.rssi ?? null,
    signalColor: lt(t?.rssi ?? null),
    snr: t?.snr !== null && t?.snr !== void 0 ? `${t.snr} dB` : "—",
    snrValue: t?.snr ?? null,
    powerSave: "—",
    powerSaveValue: null,
    channel: "—",
    channelValue: null,
    wifiMode: "—",
    wifiModeValue: null,
    lastSeen: "—",
    lastSeenValue: null,
    deviceType: c,
    deviceModel: y(o?.model ?? s.model ?? s.device_model ?? "—"),
    deviceFirmware: y(o?.sw_version ?? s.firmware ?? s.firmware_version ?? "—"),
    deviceStatus: l.raw !== "unknown" ? y(l.raw) : y(s.status ?? "—")
  };
  return Wi(Gi(b, e), o);
}, Nr = (n, e, t) => {
  const i = /* @__PURE__ */ new Map();
  if (!t || e.length === 0) return i;
  for (const o of e) {
    if (o.config_entry_id !== t || !o.device_id || !o.entity_id.startsWith("sensor.")) continue;
    const r = n[o.entity_id];
    r && (i.has(o.device_id) || i.set(o.device_id, fr()), Sr(r, i.get(o.device_id)));
  }
  return i;
}, Or = (n, e, t, i) => {
  const o = Object.values(n).filter(
    (s) => mr(s)
  );
  if (!t) return o;
  if (!i && e.length === 0) return [];
  if (i || e.length === 0) return o;
  const r = e.filter((s) => s.config_entry_id === t).filter((s) => s.entity_id.startsWith("device_tracker.")).map((s) => n[s.entity_id]).filter((s) => s !== void 0);
  return r.length > 0 ? r : [];
}, bi = (n, e, t, i) => {
  const o = n.attributes, r = y(o.friendly_name ?? o.name ?? n.entity_id), s = Mt(n.state), { label: l, type: c } = kr(
    o,
    i?.assumeWirelessClients === !0
  ), d = xr(o), u = Y(o.type), p = d === "2g" ? "2G" : d === "5g" ? "5G" : d === "6g" ? "6G" : u ? br(o) : "—", g = Hi(o.ap_name ?? o.apName), h = x(o.channel), m = gr(o.wifi_mode ?? o.wifiMode), b = yr(o.last_seen ?? o.lastSeen), v = y(o.ip ?? o.ip_address ?? "—"), T = y(o.mac ?? o.mac_address ?? o.client_mac ?? "—"), O = y(
    o.host_name ?? o.hostname ?? o.hostName ?? o.name ?? o.model ?? "—"
  ), C = x(o.packets_sent ?? o.up_packet ?? o.upPacket), A = x(
    o.packets_received ?? o.down_packet ?? o.downPacket
  ), R = t?.txActivityMBps ?? null, X = t?.rxActivityMBps ?? null, P = R !== null ? R * 8 : null, B = X !== null ? X * 8 : null, F = _i(o, [
    "tx_rate",
    "txRate",
    "link_tx_rate",
    "linkTxRate",
    "tx_link_speed",
    "txLinkSpeed"
  ]), U = _i(o, [
    "rx_rate",
    "rxRate",
    "link_rx_rate",
    "linkRxRate",
    "rx_link_speed",
    "rxLinkSpeed"
  ]), oe = Ve(F, d, "auto"), J = Ve(U, d, "auto"), W = t?.downloadedMB ?? null, re = t?.uploadedMB ?? null, z = W !== null ? W * 1024 * 1024 : null, D = re !== null ? re * 1024 * 1024 : null, K = x(o.traffic_down ?? o.trafficDown), H = x(o.traffic_up ?? o.trafficUp), Se = x(o.traffic_usage), Z = z ?? K, Q = D ?? H, se = z !== null || D !== null ? (z ?? 0) + (D ?? 0) : K !== null || H !== null ? (K ?? 0) + (H ?? 0) : Se, _e = t?.uptimeSeconds ?? Pi(o.uptime ?? o.online_time ?? o.connected_since) ?? null, G = x(o.rssi ?? o.signal) ?? t?.rssi ?? null, $e = x(o.snr) ?? t?.snr ?? null, Ce = o.power_save ?? o.powerSave, ge = String(Ce).toLowerCase() === "on" || Ce === !0 ? 1 : String(Ce).toLowerCase() === "off" || Ce === !1 ? 0 : null, ae = ge === 1 ? "On" : ge === 0 ? "Off" : "—", ct = u.toLowerCase() === "ap" ? "Access Point" : u.toLowerCase() === "gateway" ? "Gateway" : u.toLowerCase() === "switch" ? "Switch" : y(o.connect_dev_type ?? o.connectDevType ?? "—"), We = y(o.model ?? o.device_model ?? "—"), Ke = y(o.firmware ?? o.firmware_version ?? "—"), dt = wr(o, s);
  return {
    entity_id: n.entity_id,
    name: r,
    nameRaw: r,
    macNormalized: me(T),
    isOnline: s,
    statusValue: s ? 1 : 0,
    statusColor: Lt(s),
    connection: l,
    connectionType: c,
    band: p,
    bandType: d,
    apName: g ?? "—",
    apNameValue: g,
    apIsMainNode: !1,
    ip: v,
    mac: T,
    hostname: O,
    packetsSent: it(C ?? Number.NaN),
    packetsSentValue: C,
    packetsReceived: it(A ?? Number.NaN),
    packetsReceivedValue: A,
    upSpeed: ot(R, e),
    upSpeedValue: P,
    downSpeed: ot(X, e),
    downSpeedValue: B,
    txRate: nt(F, d, "auto"),
    txRateValue: oe,
    rxRate: nt(U, d, "auto"),
    rxRateValue: J,
    onlineTime: Et(_e),
    onlineTimeValue: _e,
    downloaded: q(Z),
    downloadedValue: Z,
    uploaded: q(Q),
    uploadedValue: Q,
    trafficUsage: q(se),
    trafficUsageValue: se,
    signal: G !== null ? `${G} dBm` : "—",
    signalValue: G,
    signalColor: lt(G),
    snr: $e !== null ? `${$e} dB` : "—",
    snrValue: $e,
    powerSave: ae,
    powerSaveValue: ge,
    channel: h !== null ? String(h) : "—",
    channelValue: h,
    wifiMode: m.label,
    wifiModeValue: m.generation,
    lastSeen: jo(b, i?.locale),
    lastSeenValue: b,
    deviceType: ct,
    deviceModel: We,
    deviceFirmware: Ke,
    deviceStatus: dt
  };
}, Ir = (n, e, t, i, o, r, s) => {
  if (!i) return [];
  if (!o && e.length === 0) return [];
  if (o || e.length === 0)
    return Or(n, e, i, o).map(
      (h) => bi(h, r, void 0, s)
    );
  const l = e.filter((h) => h.config_entry_id === i);
  if (l.length === 0) return [];
  const c = /* @__PURE__ */ new Map();
  for (const h of l) {
    const m = h.device_id ? `device:${h.device_id}` : `entity:${h.entity_id}`, b = c.get(m) ?? { deviceId: h.device_id, entries: [] };
    b.entries.push(h), c.set(m, b);
  }
  if (c.size === 0) return [];
  const d = Nr(n, e, i), u = new Map(t.map((h) => [h.id, h])), p = Mr(
    l.map((h) => n[h.entity_id]).filter((h) => h !== void 0)
  ), g = [];
  for (const h of c.values()) {
    const { deviceId: m, entries: b } = h, v = b.map((R) => n[R.entity_id]).filter((R) => R !== void 0);
    if (v.length === 0) continue;
    const T = v.find((R) => R.entity_id.startsWith("device_tracker.")), O = m ? d.get(m) : void 0, C = m ? u.get(m) : void 0;
    if (T) {
      const R = yi(
        Gi(
          {
            ...bi(T, r, O, s),
            deviceId: m
          },
          v
        ),
        {
          byMac: p.byMac,
          byName: p.byName
        }
      );
      g.push(Wi(R, C));
      continue;
    }
    const A = Lr(
      m ?? b[0]?.entity_id,
      v,
      O,
      r,
      C
    );
    A && g.push(
      yi(A, p)
    );
  }
  return g;
}, Fr = (n) => {
  const e = n.length > 0 ? Math.max(...n) : 0;
  return e <= 120 ? 100 : e <= 600 ? 300 : e <= 1200 ? 1e3 : e <= 2500 ? 2e3 : e <= 5e3 ? 5e3 : 1e4;
}, vi = (n, e) => {
  const t = Fr(n), i = 0, o = typeof e == "number" ? e : t;
  return o <= i ? { min: i, max: Math.max(i + 1, t) } : { min: i, max: o };
}, Dr = (n, e, t) => {
  if (n === null || !Number.isFinite(n) || n <= 0) return "rate--na";
  const i = Math.min(Math.max(n, e), t), o = Math.max(t - e, 1), r = (i - e) / o;
  return r < 0.1 ? "ud-rate--bad" : r < 0.22 ? "ud-rate--poor" : r < 0.38 ? "ud-rate--fair" : r < 0.54 ? "ud-rate--good" : r < 0.66 ? "ud-rate--great" : r < 0.75 ? "ud-rate--excellent" : "ud-rate--ultra";
}, wi = (n) => {
  if (!Number.isFinite(n)) return "0";
  const e = Math.abs(n);
  return e >= 100 ? n.toFixed(0) : e >= 10 ? n.toFixed(1) : n.toFixed(2);
}, xi = (n) => n === null || !Number.isFinite(n) || n <= 0 ? "rate--na" : n < 10 ? "rate--bad" : n < 30 ? "rate--poor" : n < 100 ? "rate--fair" : n < 300 ? "rate--good" : n < 1e3 ? "rate--great" : n < 2e3 ? "rate--excellent" : "rate--ultra", te = {
  band: "all",
  connection: "all",
  status: "all"
}, Br = /* @__PURE__ */ new Set(["all", "2g", "5g", "6g"]), zr = /* @__PURE__ */ new Set([
  "all",
  "wifi",
  "wired",
  "iot",
  "guest"
]), Hr = /* @__PURE__ */ new Set(["all", "online", "offline"]), bt = "none", ki = { "2g": 1, "5g": 2, "6g": 3 }, Si = (n) => {
  const e = `${n.entity_id} ${n.label}`.toLowerCase();
  return e.includes("reconnect") ? 0 : e.includes("wlan optimization") || e.includes("rf planning") ? 1 : e.includes("reboot") || e.includes("restart") ? 2 : 10;
}, $i = 1e3, Vr = "0.5.0", Ci = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), Xe = "__saved__", Ai = /* @__PURE__ */ new Set([
  "tplink_router",
  "tplink_deco",
  "omada",
  "tplink_omada"
]), Pr = /* @__PURE__ */ new Set([
  "down",
  "up",
  "tx",
  "rx",
  "downloaded",
  "uploaded",
  "online",
  "traffic",
  "signal",
  "snr",
  "powerSave"
]), Ur = 5 * 60 * 1e3, Wr = 20 * 1e3, ue = {
  tap: 8,
  holdStart: 12,
  holdCommit: [16, 22, 16],
  actionPress: [12, 24, 10],
  actionOn: [16, 20, 16],
  actionOff: 46,
  error: [26, 40, 26]
}, Kr = (n) => /^[0-9a-f:-]+$/i.test(n), rt = (n) => /^\d{1,3}(\.\d{1,3}){3}$/.test(n), Ti = (n) => {
  if (!n) return;
  const e = n.trim();
  if (!e) return;
  if (rt(e)) return e;
  try {
    const i = new URL(e);
    if (rt(i.hostname)) return i.hostname;
  } catch {
  }
  const t = e.match(/(\d{1,3}(?:\.\d{1,3}){3})/);
  return t ? t[1] : void 0;
}, Je = (n, e) => n == null ? e == null ? 0 : 1 : e == null ? -1 : typeof n == "number" && typeof e == "number" ? n - e : new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" }).compare(String(n), String(e)), Gr = (n) => {
  if (/(2\.4|2_4|2g|2ghz|24g)/i.test(n)) return "2g";
  if (/(5g|5ghz)/i.test(n)) return "5g";
  if (/(6g|6ghz)/i.test(n)) return "6g";
}, Ri = (n) => {
  if (n == null) return !0;
  if (typeof n == "number") return !Number.isFinite(n);
  if (typeof n == "string") {
    const e = n.trim();
    return e.length === 0 || e === "—";
  }
  return !1;
}, st = class st extends Fe {
  constructor() {
    super(...arguments), this._entries = [], this._entityRegistry = [], this._error = null, this._filter = "", this._sorts = [], this._filters = { ...te }, this._holdStates = {}, this._holdTimers = {}, this._holdAnimationIds = {}, this._loading = !1, this._loaded = !1, this._registryFailed = !1, this._deviceRegistry = [], this._filtersLoaded = !1, this._showExportButton = !1, this._speedTooltip = null, this._selectedActionDeviceId = null, this._isShiftPressed = !1, this._tableScrolledLeft = !1, this._tableScrolledRight = !1, this._lastRegistryRefreshAt = 0, this._pendingVisibilityRefresh = !1, this._isPageVisible = !0, this._isCardVisible = !0, this._stickyStartColumnKeys = [], this._stickyEndColumnKeys = [], this._handleVisibilityChange = () => {
      this._isPageVisible = typeof document > "u" ? !0 : !document.hidden, this._isPageVisible && this._maybeRefreshOnVisible(), this._updateRefreshScheduling();
    }, this._handleWindowKeyDown = (e) => {
      e.key === "Shift" && !this._isShiftPressed && (this._isShiftPressed = !0);
    }, this._handleWindowKeyUp = (e) => {
      e.key === "Shift" && this._isShiftPressed && (this._isShiftPressed = !1);
    }, this._handleWindowBlur = () => {
      this._isShiftPressed && (this._isShiftPressed = !1);
    };
  }
  setConfig(e) {
    const t = this._config?.entry_id, o = {
      ...this._config ?? {},
      ...e ?? {},
      type: "custom:tplink-router-card"
    }, r = /* @__PURE__ */ new Set(["name", ...ci]), s = this._resolveConfiguredColumnLayoutFromInput(o.column_layout, r) ?? this._normalizeLegacyColumnsToLayout(o.columns, r), l = o, c = this._resolveConfiguredDefaultFilters(o), d = typeof l.upload_speed_color_max == "number" ? l.upload_speed_color_max : 1e3, u = typeof l.download_speed_color_max == "number" ? l.download_speed_color_max : 100;
    this._config = {
      speed_unit: "MBps",
      txrx_color: !0,
      updown_color: !0,
      shift_click_underline: !0,
      show_hidden_entities: !1,
      header_action_render: "icon",
      row_action_render: "icon",
      ...l,
      columns: void 0,
      column_layout: s.length > 0 ? s : void 0,
      default_filters: c ?? void 0,
      upload_speed_color_max: d,
      download_speed_color_max: u
    }, this._initializeFilters(t), this._loadRegistries(), this._loaded && t !== this._config.entry_id && (this._isVisibleForRefresh() ? this._refreshRegistriesIncremental() : this._pendingVisibilityRefresh = !0), this._updateRefreshScheduling();
  }
  updated(e) {
    e.has("hass") && this._loadRegistries(), this._ensureStickyResizeObserver(), this._applyStickyColumnOffsets();
  }
  connectedCallback() {
    super.connectedCallback(), typeof document < "u" && (this._isPageVisible = !document.hidden, document.addEventListener("visibilitychange", this._handleVisibilityChange)), typeof window < "u" && (window.addEventListener("keydown", this._handleWindowKeyDown), window.addEventListener("keyup", this._handleWindowKeyUp), window.addEventListener("blur", this._handleWindowBlur)), this._attachVisibilityObserver(), this._updateRefreshScheduling();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._speedTooltipOpenTimer !== void 0 && (window.clearTimeout(this._speedTooltipOpenTimer), this._speedTooltipOpenTimer = void 0), this._speedTooltipHideTimer !== void 0 && (window.clearTimeout(this._speedTooltipHideTimer), this._speedTooltipHideTimer = void 0), this._clearRefreshTimer(), typeof document < "u" && document.removeEventListener("visibilitychange", this._handleVisibilityChange), typeof window < "u" && (window.removeEventListener("keydown", this._handleWindowKeyDown), window.removeEventListener("keyup", this._handleWindowKeyUp), window.removeEventListener("blur", this._handleWindowBlur)), this._visibilityObserver && (this._visibilityObserver.disconnect(), this._visibilityObserver = void 0), this._tableResizeObserver && (this._tableResizeObserver.disconnect(), this._tableResizeObserver = void 0);
  }
  _attachVisibilityObserver() {
    if (typeof IntersectionObserver > "u") {
      this._isCardVisible = !0;
      return;
    }
    this._visibilityObserver || (this._visibilityObserver = new IntersectionObserver((e) => {
      const t = e.find((o) => o.target === this);
      if (!t) return;
      const i = t.isIntersecting && t.intersectionRatio > 0;
      i !== this._isCardVisible && (this._isCardVisible = i, i && this._maybeRefreshOnVisible(), this._updateRefreshScheduling());
    }), this._visibilityObserver.observe(this));
  }
  _isVisibleForRefresh() {
    return this._isPageVisible && this._isCardVisible;
  }
  _clearRefreshTimer() {
    this._refreshTimer !== void 0 && (window.clearTimeout(this._refreshTimer), this._refreshTimer = void 0);
  }
  _getRegistryRefreshIntervalMs() {
    return this._config?.show_hidden_entities ? Ur : Wr;
  }
  _updateRefreshScheduling() {
    if (this._clearRefreshTimer(), !this._loaded || !this._isVisibleForRefresh()) return;
    const e = Date.now() - this._lastRegistryRefreshAt, t = this._getRegistryRefreshIntervalMs(), i = Math.max(t - e, 0);
    this._refreshTimer = window.setTimeout(() => {
      this._runScheduledRefresh();
    }, i);
  }
  _vibrate(e) {
    try {
      typeof navigator < "u" && typeof navigator.vibrate == "function" && (Array.isArray(e) ? navigator.vibrate([...e]) : navigator.vibrate(e));
    } catch {
    }
  }
  _hapticTap() {
    this._vibrate(ue.tap);
  }
  _hapticHoldStart() {
    this._vibrate(ue.holdStart);
  }
  _hapticHoldCommit() {
    this._vibrate(ue.holdCommit);
  }
  _hapticActionOutcome(e) {
    if (e === "switch_on") {
      this._vibrate(ue.actionOn);
      return;
    }
    if (e === "switch_off") {
      this._vibrate(ue.actionOff);
      return;
    }
    this._vibrate(ue.actionPress);
  }
  _hapticError() {
    this._vibrate(ue.error);
  }
  _ensureStickyResizeObserver() {
    if (typeof ResizeObserver > "u" || !this.renderRoot) return;
    const e = this.renderRoot.querySelector(".table-wrapper");
    e && (this._tableResizeObserver || (this._tableResizeObserver = new ResizeObserver(() => {
      this._applyStickyColumnOffsets();
    }), this._tableResizeObserver.observe(e)));
  }
  _applyStickyColumnOffsets() {
    if (!this.renderRoot) return;
    const e = this.renderRoot.querySelector(".table-wrapper");
    this._updateTableScrollState(e instanceof HTMLElement ? e : null);
    const t = this.renderRoot.querySelector("table");
    if (!t) return;
    const i = Array.from(t.querySelectorAll("[data-col-key]"));
    for (const c of i)
      c.classList.contains("sticky-start") || (c.style.left = ""), c.classList.contains("sticky-end") || (c.style.right = "");
    const o = Array.from(
      t.querySelectorAll("thead th[data-col-key]")
    );
    if (o.length === 0) return;
    const r = /* @__PURE__ */ new Map();
    for (const c of o) {
      const d = c.dataset.colKey;
      d && r.set(d, c.getBoundingClientRect().width);
    }
    let s = 0;
    for (const c of this._stickyStartColumnKeys) {
      const d = r.get(c) ?? 0;
      this._setStickyOffset(t, c, "start", s), s += d;
    }
    let l = 0;
    for (const c of [...this._stickyEndColumnKeys].reverse()) {
      const d = r.get(c) ?? 0;
      this._setStickyOffset(t, c, "end", l), l += d;
    }
  }
  _setStickyOffset(e, t, i, o) {
    const r = `[data-col-key="${t}"]`, s = Array.from(e.querySelectorAll(r));
    for (const l of s)
      i === "start" && l.classList.contains("sticky-start") && (l.style.left = `${o}px`), i === "end" && l.classList.contains("sticky-end") && (l.style.right = `${o}px`);
  }
  _maybeRefreshOnVisible() {
    if (!(!this._loaded || !this._isVisibleForRefresh() || !(Date.now() - this._lastRegistryRefreshAt >= this._getRegistryRefreshIntervalMs()) && !this._pendingVisibilityRefresh)) {
      if (this._loading) {
        this._pendingVisibilityRefresh = !0;
        return;
      }
      this._pendingVisibilityRefresh = !1, this._refreshRegistriesIncremental();
    }
  }
  async _runScheduledRefresh() {
    this._refreshTimer = void 0;
    try {
      if (!this._loaded || !this._isVisibleForRefresh() || !(Date.now() - this._lastRegistryRefreshAt >= this._getRegistryRefreshIntervalMs())) return;
      if (this._loading) {
        this._pendingVisibilityRefresh = !0;
        return;
      }
      await this._refreshRegistriesIncremental();
    } finally {
      this._updateRefreshScheduling();
    }
  }
  _looksLikeOmadaTracker(e) {
    if (!e.entity_id.startsWith("device_tracker.")) return !1;
    const t = e.attributes, i = String(t.source_type ?? "").toLowerCase();
    return i && i !== "router" ? !1 : "wireless" in t || "guest" in t || "ssid" in t || "ap_mac" in t || "switch_port" in t || "channel_width" in t || "radio" in t;
  }
  _buildIncrementalEntityCandidates(e, t) {
    const i = this._entityRegistry.filter((r) => r.config_entry_id === e).map((r) => r.entity_id), o = Object.values(this.hass?.states ?? {}).filter((r) => r.entity_id.startsWith("device_tracker.")).filter((r) => t === "omada" || t === "tplink_omada" ? this._looksLikeOmadaTracker(r) : r.attributes.source_type === "router").map((r) => r.entity_id);
    return Array.from(/* @__PURE__ */ new Set([...i, ...o]));
  }
  _mergeEntityRegistryFromResponse(e, t) {
    const i = new Map(this._entityRegistry.map((o) => [o.entity_id, o]));
    for (const o of e) {
      const r = t[o];
      if (!r || typeof r != "object") {
        i.delete(o);
        continue;
      }
      const s = {
        entity_id: typeof r.entity_id == "string" && r.entity_id.trim() ? r.entity_id : o,
        platform: typeof r.platform == "string" && r.platform.trim() ? r.platform : i.get(o)?.platform ?? "",
        config_entry_id: typeof r.config_entry_id == "string" ? r.config_entry_id : void 0,
        device_id: typeof r.device_id == "string" ? r.device_id : void 0,
        hidden_by: typeof r.hidden_by == "string" ? r.hidden_by : r.hidden_by === null ? null : void 0,
        disabled_by: typeof r.disabled_by == "string" ? r.disabled_by : r.disabled_by === null ? null : void 0,
        options: r.options && typeof r.options == "object" ? r.options : void 0
      };
      s.platform && i.set(o, s);
    }
    this._entityRegistry = [...i.values()];
  }
  async _refreshRegistriesIncremental() {
    if (!this.hass || this._loading) return;
    const e = this._selectedEntryId;
    if (e) {
      this._loading = !0;
      try {
        const t = this._resolveEntryDomain(e);
        try {
          if (t) {
            const r = (await this.hass.callWS({
              type: "config_entries/get",
              domain: t
            })).filter(
              (s) => Ai.has(s.domain)
            );
            if (r.length > 0) {
              const s = new Map(
                this._entries.map((l) => [l.entry_id, l])
              );
              r.forEach((l) => s.set(l.entry_id, l)), this._entries = [...s.values()], this._entries.forEach((l) => vt.set(l.entry_id, l.title));
            }
          }
        } catch {
        }
        const i = this._buildIncrementalEntityCandidates(e, t);
        if (i.length > 0)
          try {
            const o = await this.hass.callWS({
              type: "config/entity_registry/get_entries",
              entity_ids: i
            });
            this._mergeEntityRegistryFromResponse(i, o);
          } catch {
          }
        this._lastRegistryRefreshAt = Date.now();
      } finally {
        this._loading = !1, this._pendingVisibilityRefresh && this._maybeRefreshOnVisible(), this._updateRefreshScheduling();
      }
    }
  }
  async _loadRegistries() {
    if (!(!this.hass || this._loading || this._loaded)) {
      this._loading = !0, this._error = null;
      try {
        let e = null, t = null, i = null;
        try {
          e = await this.hass.callWS({ type: "config_entries/get" });
        } catch {
          if (this.hass.callApi)
            try {
              e = await this.hass.callApi(
                "GET",
                "config/config_entries/entry"
              );
            } catch {
              e = null;
            }
        }
        try {
          t = await this.hass.callWS({
            type: "config/entity_registry/list"
          });
        } catch {
          t = null;
        }
        try {
          i = await this.hass.callWS({
            type: "config/device_registry/list"
          });
        } catch {
          i = null;
        }
        e && (this._entries = e.filter((o) => Ai.has(o.domain)), this._entries.forEach((o) => vt.set(o.entry_id, o.title))), t ? (this._entityRegistry = t, this._registryFailed = !1) : this._registryFailed = !0, i && (this._deviceRegistry = i), this._filtersLoaded || this._restoreFilters(this._selectedEntryId), !e && !t && (this._error = we(this.hass, "errors.lists")), this._loaded = !0, this._lastRegistryRefreshAt = Date.now();
      } catch {
        this._error = we(this.hass, "errors.lists");
      } finally {
        this._loading = !1, this._updateRefreshScheduling();
      }
    }
  }
  get _selectedEntryId() {
    if (this._config?.entry_id) return this._config.entry_id;
    const e = this._config?.entity_id;
    if (e && this._entityRegistry.length > 0)
      return this._entityRegistry.find((i) => i.entity_id === e)?.config_entry_id;
  }
  _resolveEntryDomain(e) {
    if (!e) return;
    const t = this._entries.find((r) => r.entry_id === e)?.domain;
    if (t) return t;
    const i = this._entityRegistry.filter((r) => r.config_entry_id === e);
    if (i.length === 0) return;
    const o = new Set(
      i.map((r) => r.platform ? String(r.platform).toLowerCase() : "").filter((r) => r.length > 0)
    );
    if (o.has("omada") || o.has("tplink_omada")) return "omada";
    if (o.has("tplink_router")) return "tplink_router";
    if (o.has("tplink_deco")) return "tplink_deco";
  }
  _normalizeBandFilter(e) {
    if (typeof e != "string") return null;
    const t = e.trim().toLowerCase();
    return Br.has(t) ? t : null;
  }
  _normalizeConnectionFilter(e) {
    if (typeof e != "string") return null;
    const t = e.trim().toLowerCase();
    return t === "lan" ? "wired" : zr.has(t) ? t : null;
  }
  _normalizeStatusFilter(e) {
    if (typeof e != "string") return null;
    const t = e.trim().toLowerCase();
    return Hr.has(t) ? t : null;
  }
  _normalizeColumnFixed(e) {
    if (typeof e == "number")
      return e === 1 ? "start" : e === 2 ? "end" : void 0;
    if (typeof e != "string") return;
    const t = e.trim().toLowerCase();
    if (!(!t || t === bt) && (t === "start" || t === "end"))
      return t;
  }
  _normalizeColumnName(e) {
    if (typeof e != "string") return;
    const t = e.trim();
    return t.length > 0 ? t : void 0;
  }
  _normalizeColumnMaxWidth(e) {
    if (typeof e == "number" && Number.isFinite(e) && e > 0)
      return `${e}px`;
    if (typeof e != "string") return;
    const t = e.trim();
    if (t) {
      if (/^\d+(\.\d+)?$/.test(t))
        return `${t}px`;
      if (!/[;{}]/.test(t) && /^[0-9a-zA-Z%._\-+/*(),\s]+$/.test(t))
        return t;
    }
  }
  _resolveConfiguredColumnLayoutFromInput(e, t) {
    if (!Array.isArray(e) || e.length === 0) return null;
    const i = /* @__PURE__ */ new Set(), o = [];
    for (const r of e) {
      let s, l, c, d;
      if (typeof r == "string")
        s = r;
      else if (r && typeof r == "object") {
        const b = r;
        s = b.key, l = b.fixed, c = b.name, d = b.max_width ?? b.maxWidth, s === void 0 && b[0] !== void 0 && (s = b[0], l = b[1], c = b[2], d = b[3]);
      } else
        continue;
      if (typeof s != "string") continue;
      const u = s.trim();
      if (!u || i.has(u) || !t.has(u)) continue;
      const p = this._normalizeColumnFixed(l), g = this._normalizeColumnName(c), h = this._normalizeColumnMaxWidth(d), m = { key: u };
      p !== void 0 && (m.fixed = p), g !== void 0 && (m.name = g), h !== void 0 && (m.max_width = h), o.push(m), i.add(u);
    }
    return o.length > 0 ? o : null;
  }
  _normalizeLegacyColumnsToLayout(e, t) {
    if (!Array.isArray(e) || e.length === 0) return [];
    const i = /* @__PURE__ */ new Set(), o = [];
    for (const r of e) {
      if (typeof r != "string") continue;
      const s = r.trim();
      !s || i.has(s) || !t.has(s) || (o.push({ key: s }), i.add(s));
    }
    return o;
  }
  _resolveConfiguredColumnLayout(e) {
    return this._resolveConfiguredColumnLayoutFromInput(this._config?.column_layout, e);
  }
  _resolveConfiguredDefaultFilters(e) {
    if (!e) return null;
    const t = e.default_filters ?? {}, i = (p) => typeof p == "string" && (p.trim().length === 0 || p.trim() === Xe) ? void 0 : p, o = e.default_filter_band !== void 0 ? e.default_filter_band : t.band, r = e.default_filter_connection !== void 0 ? e.default_filter_connection : t.connection, s = e.default_filter_status !== void 0 ? e.default_filter_status : t.status, l = i(o), c = i(r), d = i(s);
    return l !== void 0 || c !== void 0 || d !== void 0 ? {
      band: this._normalizeBandFilter(l) ?? te.band,
      connection: this._normalizeConnectionFilter(c) ?? te.connection,
      status: this._normalizeStatusFilter(d) ?? te.status
    } : null;
  }
  _hasConfiguredDefaultFilters(e) {
    return this._resolveConfiguredDefaultFilters(e ?? this._config) !== null;
  }
  _initializeFilters(e) {
    const t = this._resolveConfiguredDefaultFilters(this._config);
    if (t) {
      this._filters = { ...t }, this._filtersLoaded = !0;
      return;
    }
    this._filtersLoaded = !1, e !== this._config?.entry_id && (this._filters = { ...te }), this._restoreFilters(this._config?.entry_id);
  }
  _filterChanged(e) {
    const t = e.target;
    this._filter = t.value ?? "";
  }
  _parseRegexSearch(e) {
    if (e.length < 2 || !e.startsWith("/") || !e.endsWith("/")) return null;
    const t = e.slice(1, -1);
    if (!t) return null;
    try {
      return new RegExp(t, "i");
    } catch {
      return null;
    }
  }
  _searchValueToText(e) {
    if (e == null) return "";
    if (typeof e == "string") return e;
    if (typeof e == "number" || typeof e == "boolean") return String(e);
    if (Array.isArray(e))
      return e.map((t) => this._searchValueToText(t)).join(" ");
    if (typeof e == "object")
      try {
        return JSON.stringify(e);
      } catch {
        return "";
      }
    return String(e);
  }
  _buildRowSearchValues(e) {
    return Object.values(e).map((t) => this._searchValueToText(t)).filter((t) => t.length > 0);
  }
  _buildRowSearchText(e) {
    return this._buildRowSearchValues(e).join(" ");
  }
  _setFilter(e, t) {
    this._filters = { ...this._filters, [e]: t }, this._saveFilters();
  }
  _filterButtonClick(e) {
    const t = e.currentTarget, i = t.dataset.group, o = t.dataset.value;
    !i || o === void 0 || (this._hapticTap(), this._setFilter(i, o));
  }
  _filtersStorageKey(e) {
    return `tplink-router-card:filters:${e ?? this._selectedEntryId ?? "global"}`;
  }
  _restoreFilters(e) {
    if (!this._filtersLoaded) {
      if (this._hasConfiguredDefaultFilters()) {
        this._filtersLoaded = !0;
        return;
      }
      try {
        const t = localStorage.getItem(this._filtersStorageKey(e));
        if (!t) return;
        const i = JSON.parse(t);
        if (!i || typeof i != "object") return;
        const o = this._normalizeBandFilter(i.band) ?? te.band, r = this._normalizeConnectionFilter(i.connection) ?? te.connection, s = this._normalizeStatusFilter(i.status) ?? te.status;
        this._filters = { band: o, connection: r, status: s }, this._filtersLoaded = !0;
      } catch {
      }
    }
  }
  _saveFilters() {
    if (!this._hasConfiguredDefaultFilters())
      try {
        localStorage.setItem(this._filtersStorageKey(), JSON.stringify(this._filters)), this._filtersLoaded = !0;
      } catch {
      }
  }
  _toggleExportButton(e) {
    e.preventDefault(), this._hapticTap(), this._showExportButton = !this._showExportButton;
  }
  _toggleSort(e, t) {
    this._hapticTap();
    const i = e.shiftKey, o = this._sorts.findIndex((c) => c.key === t), r = o >= 0 ? this._sorts[o] : null;
    let s = "asc";
    if (r && (s = r.direction === "asc" ? "desc" : null), !i) {
      this._sorts = s ? [{ key: t, direction: s }] : [];
      return;
    }
    const l = [...this._sorts];
    s ? o >= 0 ? l[o] = { key: t, direction: s } : l.push({ key: t, direction: s }) : o >= 0 && l.splice(o, 1), this._sorts = l;
  }
  _openSpeedTooltip(e, t) {
    const i = e.currentTarget;
    if (!i) return;
    this._speedTooltipHideTimer !== void 0 && (window.clearTimeout(this._speedTooltipHideTimer), this._speedTooltipHideTimer = void 0), this._speedTooltipOpenTimer !== void 0 && (window.clearTimeout(this._speedTooltipOpenTimer), this._speedTooltipOpenTimer = void 0);
    const o = i.getBoundingClientRect(), r = 180, s = 10, l = o.left + o.width / 2, c = r / 2 + s, d = window.innerWidth - r / 2 - s, p = {
      visible: !1,
      x: Math.max(c, Math.min(d, l)),
      y: o.top - 8,
      ...t
    };
    this._speedTooltip = p, this._speedTooltipOpenTimer = window.setTimeout(() => {
      this._speedTooltip = { ...p, visible: !0 }, this._speedTooltipOpenTimer = void 0;
    }, 160);
  }
  _closeSpeedTooltip() {
    this._speedTooltipOpenTimer !== void 0 && (window.clearTimeout(this._speedTooltipOpenTimer), this._speedTooltipOpenTimer = void 0), this._speedTooltip && (this._speedTooltip = { ...this._speedTooltip, visible: !1 }, this._speedTooltipHideTimer !== void 0 && window.clearTimeout(this._speedTooltipHideTimer), this._speedTooltipHideTimer = window.setTimeout(() => {
      this._speedTooltip = null, this._speedTooltipHideTimer = void 0;
    }, 200));
  }
  _showMoreInfo(e) {
    this._hapticTap(), this.dispatchEvent(
      new CustomEvent("hass-action", {
        detail: {
          config: {
            entity: e,
            tap_action: { action: "more-info" }
          },
          action: "tap"
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _showDeviceInfo(e) {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { deviceId: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openUrl(e) {
    this._hapticTap(), window.open(e, "_blank", "noopener,noreferrer");
  }
  _navigateInApp(e) {
    this._hapticTap();
    const t = this.hass?.navigate;
    if (typeof t == "function") {
      t(e);
      return;
    }
    window.history.pushState(null, "", e), window.dispatchEvent(new Event("location-changed"));
  }
  _openDevicePage(e) {
    this._navigateInApp(`/config/devices/device/${e}`);
  }
  _isOmadaDomain(e) {
    return e === "omada" || e === "tplink_omada";
  }
  _isRouterClientDomain(e) {
    return e === "tplink_router" || e === "tplink_deco";
  }
  _isNameClickable(e, t) {
    return this._isOmadaDomain(t) ? !!e.deviceId : (this._isRouterClientDomain(t), !!e.entity_id);
  }
  _hasMeaningfulCellValue(e, t) {
    switch (t) {
      case "down":
        return e.downSpeed !== "—";
      case "up":
        return e.upSpeed !== "—";
      case "tx":
        return e.txRate !== "—";
      case "rx":
        return e.rxRate !== "—";
      case "downloaded":
        return e.downloaded !== "—";
      case "uploaded":
        return e.uploaded !== "—";
      case "online":
        return e.onlineTime !== "—";
      case "traffic":
        return e.trafficUsage !== "—";
      case "signal":
        return e.signal !== "—";
      case "snr":
        return e.snr !== "—";
      case "powerSave":
        return e.powerSave !== "—";
      default:
        return !1;
    }
  }
  _findEntityByKeywords(e, t, i) {
    const o = i ? new Set(i) : null;
    for (const r of e) {
      const s = r.entity_id.split(".", 1)[0];
      if (o && !o.has(s)) continue;
      const l = `${r.entity_id} ${String(r.attributes.friendly_name ?? "")}`.toLowerCase();
      if (t.some((c) => l.includes(c)))
        return r.entity_id;
    }
  }
  _resolveShiftEntityForColumn(e, t, i) {
    if (!this._isOmadaDomain(this._resolveEntryDomain(i))) return null;
    const o = e.deviceId ? this._getStatesForDevice(i, e.deviceId) : this._getEntryStates(i).filter((r) => r.entity_id === e.entity_id);
    if (o.length === 0) return null;
    switch (t) {
      case "down":
        return this._findEntityByKeywords(
          o,
          ["rx_activity", "rx activity", "download"],
          ["sensor"]
        ) ?? null;
      case "up":
        return this._findEntityByKeywords(
          o,
          ["tx_activity", "tx activity", "upload"],
          ["sensor"]
        ) ?? null;
      case "tx":
        return this._findEntityByKeywords(
          o,
          ["tx_activity", "tx activity", "tx_rate", "tx rate"],
          ["sensor"]
        ) ?? null;
      case "rx":
        return this._findEntityByKeywords(
          o,
          ["rx_activity", "rx activity", "rx_rate", "rx rate"],
          ["sensor"]
        ) ?? null;
      case "online":
        return this._findEntityByKeywords(
          o,
          ["uptime", "duration", "connected"],
          ["sensor"]
        ) ?? null;
      case "traffic":
        return this._findEntityByKeywords(
          o,
          ["downloaded", "uploaded", "traffic"],
          ["sensor"]
        ) ?? null;
      case "downloaded":
        return this._findEntityByKeywords(o, ["downloaded"], ["sensor"]) ?? null;
      case "uploaded":
        return this._findEntityByKeywords(o, ["uploaded"], ["sensor"]) ?? null;
      case "signal":
        return this._findEntityByKeywords(o, ["rssi", "signal"], ["sensor"]) ?? null;
      case "snr":
        return this._findEntityByKeywords(o, ["snr"], ["sensor"]) ?? null;
      case "powerSave":
        return this._findEntityByKeywords(
          o,
          ["power_save", "power save"],
          ["binary_sensor", "switch"]
        ) ?? null;
      default:
        return null;
    }
  }
  _isShiftEntityCellClickable(e, t, i, o) {
    return this._isOmadaDomain(e) && Pr.has(t) && this._hasMeaningfulCellValue(i, t) && !!this._resolveShiftEntityForColumn(i, t, o);
  }
  _handleShiftEntityCellClick(e, t, i, o) {
    if (!(e.shiftKey || this._isShiftPressed) || e.target?.closest("button, a, input, select, textarea")) return;
    const s = this._resolveShiftEntityForColumn(t, i, o);
    s && (e.preventDefault(), e.stopPropagation(), this._showMoreInfo(s));
  }
  _handleNameClick(e, t, i) {
    if (this._isOmadaDomain(i)) {
      t.deviceId && this._openDevicePage(t.deviceId);
      return;
    }
    this._showMoreInfo(t.entity_id);
  }
  _getEntityRows() {
    if (!this.hass) return [];
    const e = this._selectedEntryId;
    if (!e) return [];
    const t = Ci.get(e);
    if (this._loading && this._entityRegistry.length === 0 && !this._registryFailed && t)
      return t;
    const o = this._resolveEntryDomain(e);
    if (!o)
      return t || [];
    let r = [];
    if (o === "omada" || o === "tplink_omada")
      r = Ir(
        this.hass.states,
        this._entityRegistry,
        this._deviceRegistry,
        e,
        this._registryFailed,
        this._config?.speed_unit ?? "MBps",
        {
          assumeWirelessClients: o === "tplink_omada",
          locale: this.hass.locale?.language ?? this.hass.language
        }
      );
    else {
      const s = er(
        this.hass.states,
        this._entityRegistry,
        e,
        this._registryFailed
      ), l = Qo(s), c = new Map(
        this._entityRegistry.filter((d) => d.entity_id.startsWith("device_tracker.") && d.device_id).map((d) => [d.entity_id, d.device_id])
      );
      r = s.map(
        (d) => ({
          ...hr(
            d,
            this._config?.speed_unit ?? "MBps",
            l
          ),
          deviceId: c.get(d.entity_id)
        })
      );
    }
    return (r.length > 0 || !this._loading) && Ci.set(e, r), r.length === 0 && t && this._loading ? t : r;
  }
  _isGlobalCommonAction(e) {
    return e.includes("data fetching") || e.includes("scanning") || e.includes("wlan optimization") || e.includes("rf planning") || e.includes("ai optimization");
  }
  _getActionItems(e) {
    if (!this.hass || !e || this._entityRegistry.length === 0) return [];
    const t = this._entityRegistry.filter((c) => c.config_entry_id === e), i = new Map(t.map((c) => [c.entity_id, c])), o = new Map(this._deviceRegistry.map((c) => [c.id, c])), r = this._resolveEntryDomain(e), s = new Set(
      t.filter((c) => c.entity_id.startsWith("device_tracker.") && c.device_id).map((c) => c.device_id)
    );
    return t.map((c) => this.hass?.states[c.entity_id]).filter((c) => c !== void 0).filter((c) => this._shouldIncludeActionEntity(i.get(c.entity_id))).filter(
      (c) => c.entity_id.startsWith("switch.") || c.entity_id.startsWith("button.")
    ).map((c) => {
      const d = c.entity_id.split(".")[0], u = String(
        c.attributes.friendly_name ?? c.entity_id
      ), p = `${c.entity_id} ${u}`.toLowerCase(), g = i.get(c.entity_id), h = g?.device_id ?? g?.entity_id, m = h ? o.get(h) : void 0, b = {
        domain: d,
        text: p,
        integrationDomain: r,
        deviceHasTracker: !!g?.device_id && s.has(g?.device_id),
        entityName: u,
        deviceName: m?.name_by_user ?? m?.name
      }, v = Mo(b), T = (() => {
        const A = c.attributes.icon;
        return typeof A == "string" && A.trim().length > 0 ? A : d === "button" ? "mdi:gesture-tap-button" : "mdi:toggle-switch";
      })(), O = c.state === "on", C = c.state !== "unavailable";
      return {
        entity_id: c.entity_id,
        domain: d,
        label: u,
        icon: T,
        isOn: O,
        available: C,
        requiresHold: Lo(b, v),
        band: Gr(p),
        deviceId: h,
        deviceName: m?.name_by_user ?? m?.name,
        role: v
      };
    }).filter((c) => c !== null);
  }
  _collectInfrastructureActionDeviceIds(e) {
    const t = /* @__PURE__ */ new Map();
    for (const o of e) {
      if (!o.deviceId) continue;
      const r = t.get(o.deviceId) ?? [];
      r.push(`${o.entity_id} ${o.label}`.toLowerCase()), t.set(o.deviceId, r);
    }
    const i = /* @__PURE__ */ new Set();
    for (const [o, r] of t.entries())
      r.some(
        (l) => l.includes("reboot") || l.includes("restart") || l.includes(" radio") || l.includes("radio_") || l.includes("_radio") || l.includes("ssid") || l.includes("_wlan") || l.includes("guest wifi") || l.includes("iot wifi") || l.includes("wlan")
      ) && i.add(o);
    return i;
  }
  _getHeaderActionItems(e, t, i, o) {
    return e.map((r) => {
      if (r.domain === "service") return null;
      const s = Co(
        r.domain,
        r.entity_id,
        r.label,
        t
      );
      if (!s || !o.has(s.group)) return null;
      const l = `${r.entity_id} ${r.label}`.toLowerCase(), c = this._isGlobalCommonAction(l) || s.group === "scanning", d = r.deviceId ? i.has(r.deviceId) : !1;
      return !c && !d ? null : {
        ...r,
        ...s,
        isGlobalCommon: c
      };
    }).filter((r) => r !== null);
  }
  _getRowActionsByDevice(e) {
    const t = /* @__PURE__ */ new Map();
    for (const i of e) {
      if (!i.deviceId) continue;
      const o = `${i.entity_id} ${i.label}`.toLowerCase();
      if (this._isGlobalCommonAction(o)) continue;
      const r = t.get(i.deviceId) ?? [];
      r.push(i), t.set(i.deviceId, r);
    }
    for (const i of t.values())
      i.sort((o, r) => {
        const s = o.domain === r.domain ? 0 : o.domain === "button" ? -1 : 1;
        return s !== 0 ? s : Je(o.label, r.label);
      });
    return t;
  }
  _getServiceRowActions(e, t, i) {
    return this.hass?.callService ? Uo(
      t,
      e,
      i,
      we(this.hass, "actions.reconnectClient")
    ) : /* @__PURE__ */ new Map();
  }
  _buildActionDeviceOptions(e) {
    return Ko(e, this._deviceRegistry);
  }
  _hasVisibleFalseFlag(e, t = 0) {
    if (!e || t > 4) return !1;
    if (Array.isArray(e))
      return e.some((o) => this._hasVisibleFalseFlag(o, t + 1));
    if (typeof e != "object") return !1;
    const i = e;
    return "visible" in i && i.visible === !1 ? !0 : Object.values(i).some((o) => this._hasVisibleFalseFlag(o, t + 1));
  }
  _isEntityHidden(e) {
    return e ? typeof e.hidden_by == "string" && e.hidden_by.trim().length > 0 ? !0 : this._hasVisibleFalseFlag(e.options) : !1;
  }
  _shouldIncludeActionEntity(e) {
    return this._config?.show_hidden_entities ? !0 : !this._isEntityHidden(e);
  }
  _actionDeviceChanged(e) {
    const i = e.target.value?.trim();
    this._hapticTap(), this._selectedActionDeviceId = i || null;
  }
  _updateTableScrollState(e) {
    if (!e) return;
    const t = this._stickyStartColumnKeys.length > 0 && e.scrollLeft > 1, i = Math.max(e.scrollWidth - e.clientWidth, 0), o = this._stickyEndColumnKeys.length > 0 && e.scrollLeft < i - 1;
    t !== this._tableScrolledLeft && (this._tableScrolledLeft = t), o !== this._tableScrolledRight && (this._tableScrolledRight = o);
  }
  _handleTableScroll(e) {
    const t = e.currentTarget;
    this._updateTableScrollState(t);
  }
  _getRouterEntityId(e) {
    if (!e || this._entityRegistry.length === 0 || !this.hass) return;
    const t = this._entityRegistry.filter((l) => l.config_entry_id === e), i = t.filter(
      (l) => !l.entity_id.startsWith("device_tracker.")
    ), r = (i.length > 0 ? i : t).map((l) => this.hass?.states[l.entity_id]).filter((l) => l !== void 0).map((l) => l.entity_id), s = (l) => l.find((c) => /(router|device|status|wan)/i.test(c)) ?? l[0];
    return s(r.filter((l) => l.startsWith("sensor."))) || s(r.filter((l) => l.startsWith("switch."))) || s(r.filter((l) => l.startsWith("button."))) || s(r.filter((l) => l.startsWith("device_tracker."))) || r[0];
  }
  async _handleAction(e) {
    if (!this.hass?.callService || !e.available) return "button_press";
    if (e.domain === "service")
      return e.service && await this._callServiceWithRetry(
        e.service.domain,
        e.service.service,
        e.service.data
      ), "button_press";
    if (e.domain === "button")
      return await this._callServiceWithRetry("button", "press", { entity_id: e.entity_id }), "button_press";
    const t = e.isOn ? "turn_off" : "turn_on";
    return await this._callServiceWithRetry("switch", t, { entity_id: e.entity_id }), t === "turn_on" ? "switch_on" : "switch_off";
  }
  async _callServiceWithRetry(e, t, i) {
    if (this.hass?.callService)
      try {
        await this.hass.callService(e, t, i);
      } catch (o) {
        if ((o instanceof Error ? o.message : typeof o == "string" ? o : typeof o == "object" && o !== null && "message" in o ? String(o.message ?? "") : "").toLowerCase().includes("session is closed")) {
          await new Promise((s) => {
            window.setTimeout(s, 300);
          }), await this.hass.callService(e, t, i);
          return;
        }
        throw o;
      }
  }
  _invokeAction(e, t) {
    t?.fromHold || this._hapticTap(), this._handleAction(e).then((i) => {
      this._hapticActionOutcome(i);
    }).catch((i) => {
      this._hapticError(), console.error("[tplink-router-card] action failed", {
        entity_id: e.entity_id,
        domain: e.domain,
        kind: e.role,
        error: i
      });
    });
  }
  _getActionRenderMode(e) {
    const t = e === "header" ? this._config?.header_action_render : this._config?.row_action_render;
    return t === "icon" || t === "name" || t === "icon_name" ? t : "icon";
  }
  _renderActionButtonContent(e, t) {
    const i = e.band === "2g" ? "2.4" : e.band?.replace("g", ""), o = !!(e.band && i);
    return t === "icon" ? f`
        <span class="action-icon-wrap">
          <ha-icon .icon=${e.icon}></ha-icon>
          ${o ? f`<span class="band-badge">${i}</span>` : ""}
        </span>
      ` : t === "name" ? f`<span class="action-name" title=${e.label}>${e.label}</span>` : f`
      <span class="action-icon-wrap">
        <ha-icon .icon=${e.icon}></ha-icon>
        ${o ? f`<span class="band-badge">${i}</span>` : ""}
      </span>
      <span class="action-separator">|</span>
      <span class="action-name" title=${e.label}>${e.label}</span>
    `;
  }
  _getEntryStates(e) {
    return !e || !this.hass ? [] : this._entityRegistry.filter((i) => i.config_entry_id === e).map((i) => this.hass?.states[i.entity_id]).filter((i) => i !== void 0);
  }
  _getDeviceIdForEntity(e) {
    return this._entityRegistry.find((t) => t.entity_id === e)?.device_id;
  }
  _findDeviceIdByIp(e, t) {
    const i = (o) => typeof o == "string" && o.trim() !== "" && o.trim() === t;
    for (const o of e) {
      const r = o.attributes;
      if ([
        r.ip,
        r.ip_address,
        r.local_ip,
        r.router_ip,
        r.wan_ip,
        r.host,
        r.hostname,
        r.host_name,
        o.state
      ].some(i)) {
        const l = this._getDeviceIdForEntity(o.entity_id);
        if (l) return l;
      }
    }
  }
  _getStatesForDevice(e, t) {
    return !e || !t || !this.hass ? [] : this._entityRegistry.filter(
      (o) => o.config_entry_id === e && o.device_id === t
    ).map((o) => this.hass?.states[o.entity_id]).filter((o) => o !== void 0);
  }
  _getRouterDevice(e) {
    if (!e || this._entityRegistry.length === 0) return;
    const t = tr(this._entityRegistry, e).map((c) => this._deviceRegistry.find((d) => d.id === c)).filter((c) => c !== void 0);
    if (t.length === 0) return;
    const i = this._entries.find((c) => c.entry_id === e)?.title ?? "", o = t.find((c) => c.configuration_url);
    if (o) return o;
    const r = t.find(
      (c) => (c.manufacturer ?? "").toLowerCase().includes("tp")
    );
    if (r) return r;
    const s = t.find(
      (c) => (c.model ?? "").toLowerCase().includes("archer")
    );
    if (s) return s;
    const l = t.find((c) => {
      const d = (c.name_by_user ?? c.name ?? "").toLowerCase();
      return i && d.includes(i.toLowerCase());
    });
    return l || t[0];
  }
  _getPublicIp(e) {
    for (const t of e) {
      const i = t.entity_id.toLowerCase(), o = t.attributes, r = [
        typeof o.public_ip == "string" ? o.public_ip : null,
        typeof o.wan_ip == "string" ? o.wan_ip : null,
        typeof o.wan_ipaddr == "string" ? o.wan_ipaddr : null,
        typeof o.external_ip == "string" ? o.external_ip : null,
        typeof o.internet_ip == "string" ? o.internet_ip : null,
        typeof o.ip == "string" ? o.ip : null,
        typeof t.state == "string" ? t.state : null
      ].filter(Boolean);
      if (i.includes("public") || i.includes("wan") || i.includes("external")) {
        const s = r.find((l) => rt(l));
        if (s) return s;
      }
    }
  }
  _getRouterStats(e) {
    const t = (s) => {
      const l = x(s);
      if (l !== null) return l;
      if (typeof s == "string") {
        const c = s.match(/-?\d+(\.\d+)?/);
        if (c) {
          const d = Number(c[0]);
          return Number.isFinite(d) ? d : null;
        }
      }
      return null;
    }, i = (s) => {
      for (const l of e) {
        const c = l.entity_id.toLowerCase();
        if (!s.some((p) => c.includes(p))) continue;
        const d = l.attributes, u = t(l.state) ?? t(d.value) ?? t(d.native_value) ?? t(d.state);
        if (u !== null) return u;
      }
      return null;
    }, o = i(["cpu"]), r = i(["mem", "memory", "ram"]);
    return {
      cpu: o !== null ? `${o.toFixed(0)}%` : void 0,
      mem: r !== null ? `${r.toFixed(0)}%` : void 0
    };
  }
  _findAttr(e, t) {
    for (const i of e) {
      const o = i.attributes;
      for (const r of t) {
        const s = o[r];
        if (typeof s == "string" && s.trim().length > 0) return s.trim();
        if (typeof s == "number" && Number.isFinite(s)) return String(s);
      }
    }
  }
  _normalizeUrl(e) {
    if (!e) return;
    const t = e.trim();
    if (t) {
      if (t.startsWith("http://") || t.startsWith("https://")) return t;
      if (rt(t)) return `http://${t}`;
    }
  }
  _getLocalUrl(e, t, i) {
    const o = Ti(e);
    if (o) return `http://${o}`;
    const r = this._normalizeUrl(t?.configuration_url);
    if (r) return r;
    const s = this._findAttr(i, [
      "configuration_url",
      "router_url",
      "url",
      "host",
      "ip",
      "ip_address",
      "router_ip",
      "local_ip"
    ]), l = this._normalizeUrl(s);
    return l || this._normalizeUrl(e);
  }
  _getRouterDetails(e, t) {
    const i = t?.model ?? this._findAttr(e, ["model", "router_model", "device_model", "product_model"]), o = t?.manufacturer ?? this._findAttr(e, ["manufacturer", "vendor", "brand"]), r = t?.sw_version ?? this._findAttr(e, ["sw_version", "firmware", "firmware_version", "fw_version"]), s = t?.hw_version ?? this._findAttr(e, ["hw_version", "hardware", "hardware_version"]), l = t?.connections?.find((c) => c[0].toLowerCase().includes("mac"))?.[1] ?? this._findAttr(e, ["mac", "mac_address", "router_mac", "wan_mac"]);
    return { model: i, manufacturer: o, swVersion: r, hwVersion: s, mac: l };
  }
  _buildDebugExportPayload() {
    const e = this._selectedEntryId, t = e ? this._entries.find((d) => d.entry_id === e) : void 0, i = this._resolveEntryDomain(e), o = e ? this._entityRegistry.filter((d) => d.config_entry_id === e) : this._entityRegistry, r = new Set(
      o.map((d) => d.device_id).filter((d) => typeof d == "string" && d.length > 0)
    ), s = this._deviceRegistry.filter((d) => r.has(d.id)), l = o.map((d) => this.hass?.states[d.entity_id]).filter((d) => d !== void 0), c = this._getEntityRows();
    return {
      meta: {
        card: "ha-tplink-router-card",
        version: Vr,
        exported_at: (/* @__PURE__ */ new Date()).toISOString(),
        selected_adapter: i === "omada" || i === "tplink_omada" ? "omada" : i === "tplink_deco" ? "tplink_deco" : "tplink_router"
      },
      selection: {
        entry_id: e ?? null,
        entry_title: t?.title ?? null,
        entry_domain: i ?? null
      },
      ui_state: {
        search: this._filter,
        filters: this._filters,
        sorts: this._sorts
      },
      config: this._config ?? null,
      capture_summary: {
        rows: c.length,
        entity_registry: o.length,
        device_registry: s.length,
        states: l.length
      },
      rows: c,
      entity_registry: o,
      device_registry: s,
      states: l
    };
  }
  _downloadDebugExport() {
    this._hapticTap();
    const e = ko(this._buildDebugExportPayload(), {
      limits: {
        maxDepth: 8,
        maxNodes: 3e4,
        maxArrayLength: 4e3,
        maxObjectKeys: 300,
        maxStringLength: 2e3
      }
    }), t = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), i = URL.createObjectURL(t), o = document.createElement("a"), r = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
    o.href = i, o.download = `tplink-router-card-export-${r}.json`, document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(i);
  }
  _startHold(e, t) {
    if (!t.requiresHold || !t.available) return;
    e.preventDefault(), e.stopPropagation(), this._hapticHoldStart();
    const i = t.entity_id;
    this._holdAnimationIds[i] && (cancelAnimationFrame(this._holdAnimationIds[i]), delete this._holdAnimationIds[i]), this._holdTimers[i] && (window.clearTimeout(this._holdTimers[i]), delete this._holdTimers[i]), this._holdStates[i] = { progress: 0, completed: !1 }, this.requestUpdate();
    const o = performance.now(), r = () => {
      const s = performance.now() - o, l = Math.min(s / $i, 1);
      if (this._holdStates[i] = { progress: l, completed: l >= 1 }, this.requestUpdate(), l >= 1) {
        delete this._holdAnimationIds[i], this._hapticHoldCommit(), this._invokeAction(t, { fromHold: !0 }), this._holdTimers[i] = window.setTimeout(() => {
          this._holdStates[i] = { progress: 0, completed: !1 }, this.requestUpdate(), delete this._holdTimers[i];
        }, 820);
        return;
      }
      this._holdAnimationIds[i] = requestAnimationFrame(r);
    };
    this._holdAnimationIds[i] = requestAnimationFrame(r);
  }
  _cancelHold(e, t) {
    if (!t.requiresHold) return;
    e.preventDefault(), e.stopPropagation();
    const i = t.entity_id;
    this._holdStates[i]?.completed || (this._holdAnimationIds[i] && (cancelAnimationFrame(this._holdAnimationIds[i]), delete this._holdAnimationIds[i]), this._holdTimers[i] && (window.clearTimeout(this._holdTimers[i]), delete this._holdTimers[i]), this._holdStates[i]?.progress && (this._holdStates[i] = { progress: 0, completed: !1 }, this.requestUpdate()));
  }
  render() {
    if (!this._config) return f``;
    const e = (a, _) => we(this.hass, a, _), t = this._selectedEntryId, i = t ? this._entries.find((a) => a.entry_id === t) : void 0, o = t ? vt.get(t) : void 0, r = this._resolveEntryDomain(t), s = this._getEntityRows(), l = this._getActionItems(t), c = this._collectInfrastructureActionDeviceIds(l), d = this._getHeaderActionItems(
      l,
      r,
      c,
      $o(this._config?.header_action_groups)
    ), u = this._getRowActionsByDevice(l), p = this._getServiceRowActions(t, r, s), g = (a) => (a.deviceId ? u.get(a.deviceId)?.length ?? 0 : 0) + (p.get(a.entity_id)?.length ?? 0), h = t ? this._entityRegistry.filter((a) => a.config_entry_id === t) : [], m = r === "tplink_router" && !this._loading && !this._registryFailed && h.length > 0 && !h.some((a) => a.entity_id.startsWith("device_tracker.")), v = (r === "omada" ? s.filter(
      (a) => a.entity_id.startsWith("device_tracker.") && !["Access Point", "Gateway", "Switch"].includes(a.deviceType ?? "")
    ).length : 0) === 100, T = new Set(s.map((a) => a.bandType).filter((a) => a !== "unknown")), O = new Set(
      s.map((a) => a.connectionType).filter((a) => a !== "unknown")
    ), C = [
      "all",
      ...["2g", "5g", "6g"].filter((a) => T.has(a))
    ], A = [
      "all",
      ...["wifi", "wired", "iot", "guest"].filter(
        (a) => O.has(a)
      )
    ], R = s.some((a) => a.isOnline), X = s.some((a) => !a.isOnline), P = [
      "all",
      ...R ? ["online"] : [],
      ...X ? ["offline"] : []
    ], B = C.includes(this._filters.band) ? this._filters.band : "all", F = A.includes(
      this._filters.connection
    ) ? this._filters.connection : "all", U = P.includes(this._filters.status) ? this._filters.status : "all", oe = this._filter.trim(), J = this._parseRegexSearch(oe), W = oe.toLowerCase(), re = me(W), z = !J && W.length > 1 && Kr(W), D = s.filter((a) => {
      const _ = this._buildRowSearchValues(a), k = _.join(" ");
      if (oe) {
        if (J) {
          if (!_.some((L) => (J.lastIndex = 0, J.test(L)))) return !1;
        } else if (z) {
          if (!a.macNormalized.includes(re)) return !1;
        } else if (!k.toLowerCase().includes(W)) return !1;
      }
      const E = B;
      if (E !== "all" && a.bandType !== E) return !1;
      const M = F, I = a.connectionType;
      if (M !== "all" && I !== M) return !1;
      const S = U;
      return !(S !== "all" && (S === "online" && !a.isOnline || S === "offline" && a.isOnline));
    }), K = [
      { key: "name", label: e("columns.name"), sort: (a) => a.nameRaw },
      { key: "status", label: e("columns.status"), sort: (a) => a.statusValue },
      {
        key: "connection",
        label: e("columns.connection"),
        sort: (a) => a.connection
      },
      {
        key: "band",
        label: e("columns.band"),
        sort: (a) => a.connectionType === "wired" ? 0 : a.bandType === "2g" ? 1 : a.bandType === "5g" ? 2 : a.bandType === "6g" ? 3 : a.connectionType === "wifi" ? 4 : null
      },
      {
        key: "apName",
        label: e("columns.apName"),
        sort: (a) => a.apNameValue
      },
      { key: "ip", label: e("columns.ip"), sort: (a) => a.ip },
      { key: "mac", label: e("columns.mac"), sort: (a) => a.mac },
      {
        key: "hostname",
        label: e("columns.hostname"),
        sort: (a) => a.hostname
      },
      {
        key: "packetsSent",
        label: e("columns.packetsSent"),
        sort: (a) => a.packetsSentValue
      },
      {
        key: "packetsReceived",
        label: e("columns.packetsReceived"),
        sort: (a) => a.packetsReceivedValue
      },
      {
        key: "down",
        label: e("columns.down"),
        sort: (a) => a.downSpeedValue
      },
      { key: "up", label: e("columns.up"), sort: (a) => a.upSpeedValue },
      { key: "tx", label: e("columns.tx"), sort: (a) => a.txRateValue },
      { key: "rx", label: e("columns.rx"), sort: (a) => a.rxRateValue },
      {
        key: "online",
        label: e("columns.online"),
        sort: (a) => a.onlineTimeValue
      },
      {
        key: "lastSeen",
        label: e("columns.lastSeen"),
        sort: (a) => a.lastSeenValue
      },
      {
        key: "downloaded",
        label: e("columns.downloaded"),
        sort: (a) => a.downloadedValue
      },
      {
        key: "uploaded",
        label: e("columns.uploaded"),
        sort: (a) => a.uploadedValue
      },
      {
        key: "traffic",
        label: e("columns.traffic"),
        sort: (a) => a.trafficUsageValue
      },
      { key: "signal", label: e("columns.signal"), sort: (a) => a.signalValue },
      { key: "snr", label: e("columns.snr"), sort: (a) => a.snrValue },
      {
        key: "channel",
        label: e("columns.channel"),
        sort: (a) => a.channelValue
      },
      {
        key: "wifiMode",
        label: e("columns.wifiMode"),
        sort: (a) => a.wifiModeValue
      },
      {
        key: "powerSave",
        label: e("columns.powerSave"),
        sort: (a) => a.powerSaveValue
      },
      {
        key: "deviceType",
        label: e("columns.deviceType"),
        sort: (a) => a.deviceType
      },
      {
        key: "deviceModel",
        label: e("columns.deviceModel"),
        sort: (a) => a.deviceModel
      },
      {
        key: "deviceFirmware",
        label: e("columns.deviceFirmware"),
        sort: (a) => a.deviceFirmware
      },
      {
        key: "deviceStatus",
        label: e("columns.deviceStatus"),
        sort: (a) => a.deviceStatus
      },
      {
        key: "actions",
        label: e("columns.actions"),
        sort: (a) => {
          const _ = g(a);
          return _ > 0 ? _ : null;
        }
      }
    ], H = Array.isArray(this._config?.columns) ? this._config.columns : [], Se = Array.isArray(this._config?.column_layout) ? this._config.column_layout.map((a) => a && typeof a == "object" ? a.key : void 0).filter((a) => typeof a == "string") : [], Z = /* @__PURE__ */ new Set([
      "name",
      ...zo(r),
      ...H,
      ...Se
    ]), Q = new Map(K.map((a) => [a.key, a])), se = Ho(
      K.map((a) => a.key),
      Z
    ), _e = this._config?.columns && this._config.columns.length > 0 ? this._config.columns : se, $e = Array.from(new Set(_e)).filter((a) => Z.has(a)).map((a) => ({ key: a })), ge = (this._resolveConfiguredColumnLayout(Z) ?? $e).map((a) => {
      const _ = Q.get(a.key);
      return _ ? {
        ...a,
        col: _
      } : null;
    }).filter((a) => a !== null), ae = ge.length > 0 ? ge : se.map((a) => {
      const _ = Q.get(a);
      return _ ? { key: a, fixed: void 0, name: void 0, max_width: void 0, col: _ } : null;
    }).filter((a) => a !== null), ct = ae.map((a) => a.col);
    this._stickyStartColumnKeys = ae.filter((a) => a.fixed === "start").map((a) => a.key), this._stickyEndColumnKeys = ae.filter((a) => a.fixed === "end").map((a) => a.key);
    const We = this._stickyStartColumnKeys[this._stickyStartColumnKeys.length - 1], Ke = this._stickyEndColumnKeys[0], dt = new Set(ct.map((a) => a.key)), ut = this._sorts.filter((a) => dt.has(a.key)), Nt = [...D].sort((a, _) => {
      for (const k of ut) {
        const E = Q.get(k.key);
        if (!E) continue;
        const M = E.sort(a), I = E.sort(_), S = Ri(M), w = Ri(I);
        if (S && w) continue;
        if (S) return 1;
        if (w) return -1;
        const L = Je(M, I);
        if (L !== 0) return k.direction === "asc" ? L : -L;
      }
      return 0;
    }), ji = s.filter((a) => a.isOnline).length, Ot = !!this._config?.txrx_color, It = !!this._config?.updown_color, qi = s.filter((a) => a.isOnline).map((a) => a.upSpeedValue).filter((a) => typeof a == "number" && Number.isFinite(a)), Yi = s.filter((a) => a.isOnline).map((a) => a.downSpeedValue).filter((a) => typeof a == "number" && Number.isFinite(a)), Xi = vi(
      qi,
      this._config?.upload_speed_color_max
    ), Ji = vi(
      Yi,
      this._config?.download_speed_color_max
    ), Ft = (a, _, k, E) => {
      if (a === null || !Number.isFinite(a) || a <= 0) return _;
      const M = Math.max(k, 1), S = {
        percent: Math.max(0, Math.min(100, a / M * 100)).toFixed(1),
        transfer: St(a * 1e6 / 8, "MBps"),
        mbps: wi(a),
        max: wi(M)
      };
      return f`
        <span
          class="speed-value"
          @mouseenter=${(w) => this._openSpeedTooltip(w, S)}
          @mouseleave=${() => this._closeSpeedTooltip()}
        >
          ${E ? f`<span class="rate ${Dr(a, 0, M)}">${_}</span>` : _}
        </span>
      `;
    }, Dt = Math.max(1, Math.round($i / 1e3)), Ge = this._getActionRenderMode("header"), pt = this._getActionRenderMode("row"), Ae = this._getRouterEntityId(t), je = i?.title ?? o, Bt = this._getEntryStates(t).filter(
      (a) => !a.entity_id.startsWith("device_tracker.")
    ), zt = Ae ? this._getDeviceIdForEntity(Ae) : void 0, Ht = Ti(je), Vt = Ht ? this._findDeviceIdByIp(Bt, Ht) : void 0, ye = (zt ? this._deviceRegistry.find((a) => a.id === zt) : void 0) ?? (Vt ? this._deviceRegistry.find((a) => a.id === Vt) : void 0) ?? this._getRouterDevice(t), Pt = this._getStatesForDevice(t, ye?.id), qe = Pt.length > 0 ? Pt.filter((a) => !a.entity_id.startsWith("device_tracker.")) : Bt, Te = this._getLocalUrl(je, ye, qe), Ut = this._getPublicIp(qe), Zi = this._getRouterStats(qe), j = this._getRouterDetails(qe, ye), Qi = [
      j.model ?? null,
      j.manufacturer ? `by ${j.manufacturer}` : null,
      j.swVersion ? `Firmware: ${j.swVersion}` : null,
      j.hwVersion ? `Hardware: ${j.hwVersion}` : null,
      j.mac ? `MAC: ${j.mac}` : null
    ].filter(Boolean).join(`
`), ht = r === "omada" || r === "tplink_omada", Wt = e(ht ? "card.controllerLabel" : "card.routerLabel"), en = t ? `${Wt}: ${ht ? je ?? t : Te ?? je ?? t}` : e(ht ? "card.controllerNotSelected" : "card.routerNotSelected"), tn = !!this._config?.hide_header, nn = !!this._config?.hide_filter_section, Kt = C.length > 1, Gt = A.length > 1, jt = P.length > 1, on = Kt || Gt || jt, Re = this._buildActionDeviceOptions(d), le = Re.find((a) => a.deviceId === this._selectedActionDeviceId)?.deviceId ?? Re[0]?.deviceId, qt = Re.find((a) => a.deviceId === le)?.deviceName ?? ye?.name_by_user ?? ye?.name, ft = le ?? ye?.id, rn = qt ? e("actions.goToDevice", { name: qt }) : e("actions.router"), Yt = le ? this._getStatesForDevice(t, le) : [], be = Yt.length > 0 ? this._getRouterStats(Yt) : Zi, sn = d.filter((a) => a.isGlobalCommon || !le ? !0 : a.deviceId === le), an = tt.map((a) => ({
      group: a,
      items: sn.filter((_) => _.group === a).sort((_, k) => {
        if (_.band || k.band)
          return Je(ki[_.band ?? "2g"], ki[k.band ?? "2g"]);
        const E = Si(_) - Si(k);
        return E !== 0 ? E : Je(_.label, k.label);
      })
    })).filter((a) => a.items.length > 0), ln = this._config?.shift_click_underline !== !1, cn = Ge === "icon" ? "action-group" : "action-group action-group--wide", dn = (a) => {
      const _ = this._holdStates[a.entity_id] ?? { progress: 0, completed: !1 };
      return f`
        <button
          class="icon-toggle ${Ge === "icon_name" ? "with-label" : Ge === "name" ? "name-only" : ""} ${_.progress > 0 ? "holding" : ""} ${_.completed ? "completed" : ""}"
          data-kind=${a.kind}
          data-group=${a.group}
          data-role=${a.role ?? "toggle"}
          data-state=${a.isOn ? "on" : "off"}
          title=${a.requiresHold ? e("actions.holdWithLabel", { seconds: Dt, label: a.label }) : a.label}
          style=${`--hold-progress:${_.progress}`}
          ?disabled=${!a.available}
          @pointerdown=${(k) => this._startHold(k, a)}
          @pointerup=${(k) => this._cancelHold(k, a)}
          @pointerleave=${(k) => this._cancelHold(k, a)}
          @pointercancel=${(k) => this._cancelHold(k, a)}
          @click=${(k) => {
        if (k.shiftKey) {
          this._showMoreInfo(a.entity_id);
          return;
        }
        if (a.requiresHold) {
          k.preventDefault();
          return;
        }
        this._invokeAction(a);
      }}
        >
          ${this._renderActionButtonContent(a, Ge)}
        </button>
      `;
    }, un = [
      this._isShiftPressed ? "shift-mode" : "",
      ln ? "shift-underline-enabled" : "shift-underline-disabled"
    ].filter((a) => a.length > 0).join(" ");
    return f`
      <ha-card class=${un}>
        <div class="header ${tn ? "hidden" : ""}">
          <div class="title">
            <div
              class="title-main"
              @dblclick=${this._toggleExportButton}
            >
              <h2>${this._config.title ?? e("card.title")}</h2>
              ${this._showExportButton ? f`
                    <button
                      class="title-export-button"
                      title=${e("card.debugExport")}
                      @click=${(a) => {
      a.preventDefault(), a.stopPropagation(), this._downloadDebugExport();
    }}
                    >
                      <ha-icon icon="mdi:download"></ha-icon>
                    </button>
                  ` : ""}
            </div>
            <div class="actions">
              ${Re.length > 1 ? f`
                    <select
                      class="action-device-select"
                      .value=${le ?? ""}
                      @change=${this._actionDeviceChanged}
                      title=${e("actions.targetDevice")}
                    >
                      ${Re.map(
      (a) => f`
                          <option value=${a.deviceId}>${a.deviceName}</option>
                        `
    )}
                    </select>
                  ` : $}
              ${an.map(
      ({ group: a, items: _ }) => f`
                    <div
                      class=${cn}
                      data-group=${a}
                      title=${e(`actions.groups.${a}`)}
                    >
                      ${_.map((k) => dn(k))}
                    </div>
                  `
    )}
            </div>
          </div>

          <div class="router-row">
            <div class="router-left">
              <span class="router-label">
                ${t && Te ? f`
                      ${Wt}:
                      <a
                        class="router-link"
                        href=${Te}
                        target="_blank"
                        rel="noopener noreferrer"
                        title=${Qi || Te}
                        @click=${() => this._hapticTap()}
                      >
                        ${Te}
                      </a>
                    ` : en}
              </span>
            </div>
            <div class="router-right">
              ${Ut ? f`<span class="router-public">${Ut}</span>` : ""}
            </div>
          </div>

          <div class="controls">
            <div class="search">
              <input
                type="search"
                placeholder=${e("card.searchPlaceholder")}
                .value=${this._filter}
                @input=${this._filterChanged}
              />
            </div>
            <div class="control-actions">
              <span class="chip">${e("card.devicesCount", { count: D.length })}</span>
              ${be.cpu ? f`
                    <span
                      class="chip stat"
                      title=${e("card.cpuUsage", { value: be.cpu })}
                    >
                      <ha-icon icon="mdi:cpu-64-bit"></ha-icon>${be.cpu}
                    </span>
                  ` : ""}
              ${be.mem ? f`
                    <span
                      class="chip stat"
                      title=${e("card.memUsage", { value: be.mem })}
                    >
                      <ha-icon icon="mdi:memory"></ha-icon>${be.mem}
                    </span>
                  ` : ""}
              ${ft || Ae ? f`
                    <button
                      class="icon-button"
                      title=${rn}
                      @click=${() => {
      ft ? this._openDevicePage(ft) : Ae && this._showMoreInfo(Ae);
    }}
                    >
                      <ha-icon icon="mdi:router-wireless"></ha-icon>
                    </button>
                  ` : ""}
            </div>
          </div>
        </div>

        <div class="filter-row ${nn || !on ? "hidden" : ""}">
          ${Kt ? f`
                <div class="filter-group">
                  <button
                    class="filter-button ${B === "all" ? "active" : ""}"
                    data-group="band"
                    data-value="all"
                    @click=${this._filterButtonClick}
                  >
                    ${e("filters.all")}
                  </button>
                  ${C.includes("2g") ? f`
                        <button
                          class="filter-button ${B === "2g" ? "active" : ""}"
                          data-group="band"
                          data-value="2g"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.band2")}
                        </button>
                      ` : ""}
                  ${C.includes("5g") ? f`
                        <button
                          class="filter-button ${B === "5g" ? "active" : ""}"
                          data-group="band"
                          data-value="5g"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.band5")}
                        </button>
                      ` : ""}
                  ${C.includes("6g") ? f`
                        <button
                          class="filter-button ${B === "6g" ? "active" : ""}"
                          data-group="band"
                          data-value="6g"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.band6")}
                        </button>
                      ` : ""}
                </div>
              ` : ""}

          ${Gt ? f`
                <div class="filter-group">
                  <button
                    class="filter-button ${F === "all" ? "active" : ""}"
                    data-group="connection"
                    data-value="all"
                    @click=${this._filterButtonClick}
                  >
                    ${e("filters.all")}
                  </button>
                  ${A.includes("wifi") ? f`
                        <button
                          class="filter-button icon ${F === "wifi" ? "active" : ""}"
                          data-group="connection"
                          data-value="wifi"
                          title=${e("filters.wifi")}
                          @click=${this._filterButtonClick}
                        >
                          <ha-icon icon="mdi:wifi"></ha-icon>
                        </button>
                      ` : ""}
                  ${A.includes("wired") ? f`
                        <button
                          class="filter-button icon ${F === "wired" ? "active" : ""}"
                          data-group="connection"
                          data-value="wired"
                          title=${e("filters.wired")}
                          @click=${this._filterButtonClick}
                        >
                          <ha-icon icon="mdi:lan"></ha-icon>
                        </button>
                      ` : ""}
                  ${A.includes("iot") ? f`
                        <button
                          class="filter-button icon ${F === "iot" ? "active" : ""}"
                          data-group="connection"
                          data-value="iot"
                          title=${e("filters.iot")}
                          @click=${this._filterButtonClick}
                        >
                          <ha-icon icon="mdi:chip"></ha-icon>
                        </button>
                      ` : ""}
                  ${A.includes("guest") ? f`
                        <button
                          class="filter-button icon ${F === "guest" ? "active" : ""}"
                          data-group="connection"
                          data-value="guest"
                          title=${e("filters.guest")}
                          @click=${this._filterButtonClick}
                        >
                          <ha-icon icon="mdi:account-key"></ha-icon>
                        </button>
                      ` : ""}
                </div>
              ` : ""}

          ${jt ? f`
                <div class="filter-group">
                  <button
                    class="filter-button ${U === "all" ? "active" : ""}"
                    data-group="status"
                    data-value="all"
                    @click=${this._filterButtonClick}
                  >
                    ${e("filters.all")}
                  </button>
                  ${P.includes("online") ? f`
                        <button
                          class="filter-button ${U === "online" ? "active" : ""}"
                          data-group="status"
                          data-value="online"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.online")}
                        </button>
                      ` : ""}
                  ${P.includes("offline") ? f`
                        <button
                          class="filter-button ${U === "offline" ? "active" : ""}"
                          data-group="status"
                          data-value="offline"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.offline")}
                        </button>
                      ` : ""}
                </div>
              ` : ""}
          <span class="chip compact">${e("card.onlineCount", { online: ji, total: s.length })}</span>
        </div>

        ${v ? f`<div class="notice">${e("card.omadaClientLimitNotice")}</div>` : $}
        ${this._error ? f`<div class="empty">${this._error}</div>` : t ? Nt.length === 0 ? f`
                <div class="empty">
                  ${e("card.noDevices")}
                  ${m ? f`<div class="empty-hint">${e("card.noTrackersHint")}</div>` : $}
                </div>
              ` : f`
                  <div
                    class="table-wrapper ${this._tableScrolledLeft ? "table-wrapper--scrolled-left" : ""} ${this._tableScrolledRight ? "table-wrapper--scrolled-right" : ""}"
                    @scroll=${this._handleTableScroll}
                  >
                    <table>
                      <thead>
                        <tr>
                          ${ae.map(({ col: a, fixed: _, name: k, max_width: E }) => {
      const M = ut.findIndex((ce) => ce.key === a.key), I = M >= 0 ? ut[M].direction : null, S = k?.trim().length ? k.trim() : a.label, w = ui(E, _), L = !!(_ || E && a.key === "name"), N = [
        a.key === "actions" ? "actions-cell" : "",
        _ === "start" ? "sticky-start" : "",
        _ === "end" ? "sticky-end" : "",
        _ === "start" && a.key === We ? "sticky-start-edge" : "",
        _ === "end" && a.key === Ke ? "sticky-end-edge" : "",
        L ? "column-ellipsis" : ""
      ].filter((ce) => ce.length > 0).join(" ");
      return f`
                              <th class=${N} data-col-key=${a.key} style=${w}>
                                <button
                                  class="sort-button"
                                  aria-sort=${I ? I === "asc" ? "ascending" : "descending" : "none"}
                                  @click=${(ce) => this._toggleSort(ce, a.key)}
                                >
                                  <span>${S}</span>
                                  ${I ? f`
                                        <span class="sort-indicator ${I}">
                                          ${I === "asc" ? "▲" : "▼"}
                                        </span>
                                        ${this._sorts.length > 1 ? f`<span class="sort-order">${M + 1}</span>` : ""}
                                      ` : ""}
                                </button>
                              </th>
                            `;
    })}
                        </tr>
                      </thead>
                      <tbody>
                        ${Nt.map(
      (a) => {
        const _ = !a.isOnline, k = this._isNameClickable(a, r), E = r === "tplink_router" && !!a.deviceId, M = e("actions.goToDevice", { name: a.name }), I = {
          name: k ? f`
                        <span class="name-cell">
                          <button
                            class="link"
                            @click=${(S) => this._handleNameClick(S, a, r)}
                          >
                            ${a.name}
                          </button>
                          ${E && a.deviceId ? f`
                                <button
                                  class="name-device-link"
                                  title=${M}
                                  @click=${(S) => {
            S.preventDefault(), S.stopPropagation(), this._openDevicePage(a.deviceId);
          }}
                                >
                                  <ha-icon icon="mdi:router-wireless"></ha-icon>
                                </button>
                              ` : $}
                        </span>
                      ` : f`<span class="name-text">${a.name}</span>`,
          status: f`
                                <span class="status">
                                  <span class="status-dot" style=${`background:${a.statusColor}`}></span>
                                  ${a.isOnline ? e("status.online") : e("status.offline")}
                                </span>
                              `,
          connection: Ye(this.hass, a.connection),
          band: _ ? "—" : a.connectionType === "wired" ? f`
                                      <span class="band-pill band-wired">
                                        <ha-icon class="band-icon" icon="mdi:lan"></ha-icon>
                                        <span class="band-label">LAN</span>
                                      </span>
                                    ` : a.band === "—" ? a.connectionType === "wifi" ? f`
                                      <span class="band-pill band-wifi">
                                        <ha-icon class="band-icon" icon="mdi:wifi"></ha-icon>
                                      </span>
                                    ` : "—" : f`
                                      <span class="band-pill band-${a.bandType}">
                                        <ha-icon class="band-icon" icon="mdi:wifi"></ha-icon>
                                        <span class="band-label">
                                          ${a.bandType === "2g" ? "2.4G" : a.bandType === "5g" ? "5G" : a.bandType === "6g" ? "6G" : a.band}
                                        </span>
                                      </span>
                                    `,
          apName: a.apIsMainNode ? f`
                        <span class="ap-cell">
                          <ha-icon
                            class="ap-main-badge"
                            icon="mdi:router-wireless"
                            title=${e("card.mainRouterBadge")}
                          ></ha-icon>
                          ${a.apName === "—" ? e("card.mainRouterBadge") : a.apName}
                        </span>
                      ` : a.apName,
          ip: a.ip,
          mac: a.mac,
          hostname: a.hostname,
          packetsSent: a.packetsSent,
          packetsReceived: a.packetsReceived,
          up: _ ? "—" : Ft(
            a.upSpeedValue,
            a.upSpeed,
            Xi.max,
            It
          ),
          down: _ ? "—" : Ft(
            a.downSpeedValue,
            a.downSpeed,
            Ji.max,
            It
          ),
          tx: _ ? "—" : Ot ? f`
                                      <span class="rate ${xi(a.txRateValue)}">
                                        ${a.txRate}
                                      </span>
                                    ` : a.txRate,
          rx: _ ? "—" : Ot ? f`
                                      <span class="rate ${xi(a.rxRateValue)}">
                                        ${a.rxRate}
                                      </span>
                                    ` : a.rxRate,
          online: a.onlineTime,
          lastSeen: a.lastSeen,
          downloaded: a.downloaded,
          uploaded: a.uploaded,
          traffic: a.trafficUsage,
          channel: _ ? "—" : a.channel,
          wifiMode: _ ? "—" : a.wifiMode,
          deviceType: Ye(this.hass, a.deviceType),
          deviceModel: a.deviceModel ?? "—",
          deviceFirmware: a.deviceFirmware ?? "—",
          deviceStatus: Ye(this.hass, a.deviceStatus),
          actions: (() => {
            const S = [
              ...a.deviceId ? u.get(a.deviceId) ?? [] : [],
              ...p.get(a.entity_id) ?? []
            ];
            return S.length === 0 ? "—" : f`
                      <span class="row-actions">
                        ${S.map((w) => {
              const L = this._holdStates[w.entity_id] ?? {
                progress: 0,
                completed: !1
              };
              return f`
                            <button
                              class="icon-toggle row-action ${pt === "icon_name" ? "with-label" : pt === "name" ? "name-only" : ""} ${L.progress > 0 ? "holding" : ""} ${L.completed ? "completed" : ""}"
                              data-role=${w.role ?? "toggle"}
                              data-state=${w.isOn ? "on" : "off"}
                              title=${w.requiresHold ? e("actions.holdWithLabel", {
                seconds: Dt,
                label: w.label
              }) : w.label}
                              style=${`--hold-progress:${L.progress}`}
                              ?disabled=${!w.available}
                              @pointerdown=${(N) => this._startHold(N, w)}
                              @pointerup=${(N) => this._cancelHold(N, w)}
                              @pointerleave=${(N) => this._cancelHold(N, w)}
                              @pointercancel=${(N) => this._cancelHold(N, w)}
                              @click=${(N) => {
                if (N.shiftKey) {
                  this._showMoreInfo(w.entity_id);
                  return;
                }
                if (w.requiresHold) {
                  N.preventDefault();
                  return;
                }
                this._invokeAction(w);
              }}
                            >
                              ${this._renderActionButtonContent(w, pt)}
                            </button>
                          `;
            })}
                      </span>
                    `;
          })(),
          signal: _ || a.connectionType === "wired" ? "—" : f`
                                    <span class="signal">
                                      <span class="signal-dot" style=${`background:${a.signalColor}`}></span>
                                      ${a.signal}
                                    </span>
                                  `,
          snr: _ || a.connectionType === "wired" ? "—" : a.snr,
          powerSave: Ye(this.hass, a.powerSave)
        };
        return f`
                              <tr>
                                ${ae.map(
          ({ col: S, fixed: w, max_width: L }) => {
            const N = this._isShiftEntityCellClickable(
              r,
              S.key,
              a,
              t
            ), ce = ui(L, w), pn = !!(w || L), hn = !!(w || L), fn = [
              S.key === "actions" ? "actions-cell" : "",
              w === "start" ? "sticky-start" : "",
              w === "end" ? "sticky-end" : "",
              w === "start" && S.key === We ? "sticky-start-edge" : "",
              w === "end" && S.key === Ke ? "sticky-end-edge" : "",
              hn ? "cell-ellipsis" : "",
              N ? "shift-entity-clickable" : ""
            ].filter((mt) => mt.length > 0).join(" "), mn = pn ? "cell-content cell-content-ellipsis" : "cell-content";
            return f`
                      <td
                        class=${fn}
                        data-col-key=${S.key}
                        style=${ce}
                        @click=${(mt) => N ? this._handleShiftEntityCellClick(mt, a, S.key, t) : void 0}
                      >
                        <span class=${mn}>${I[S.key]}</span>
                      </td>
                    `;
          }
        )}
                              </tr>
                            `;
      }
    )}
                      </tbody>
                    </table>
                  </div>
                ` : f`<div class="empty">${e("card.selectRouter")}</div>`}
        ${this._speedTooltip ? f`
              <span
                class="speed-tooltip speed-tooltip--portal ${this._speedTooltip.visible ? "speed-tooltip--visible" : ""}"
                role="tooltip"
                style=${`left:${this._speedTooltip.x}px; top:${this._speedTooltip.y}px;`}
              >
                <span class="speed-tooltip-bar-track">
                  <span
                    class="speed-tooltip-bar-fill"
                    style=${`--fill:${this._speedTooltip.percent}%`}
                  ></span>
                </span>
                <span class="speed-tooltip-line">
                  ${e("card.speedTooltipUsage", { value: this._speedTooltip.percent })}
                </span>
                <span class="speed-tooltip-line">
                  ${e("card.speedTooltipTransfer", { value: this._speedTooltip.transfer })}
                </span>
                <span class="speed-tooltip-line">
                  ${e("card.speedTooltipMbps", {
      value: this._speedTooltip.mbps,
      max: this._speedTooltip.max
    })}
                </span>
              </span>
            ` : $}
      </ha-card>
    `;
  }
  static getStubConfig() {
    return {
      type: "custom:tplink-router-card"
    };
  }
  getGridOptions() {
    return {
      columns: "full"
    };
  }
  static getConfigForm() {
    const e = () => document.querySelector("home-assistant")?.hass, t = (u) => we(e(), u), i = ["name", ...ci].map((u) => ({
      value: u,
      label: t(`columns.${u}`)
    })), o = [
      { value: Xe, label: t("editor.defaultFilterUnset") },
      { value: "all", label: t("filters.all") },
      { value: "2g", label: t("filters.band2") },
      { value: "5g", label: t("filters.band5") },
      { value: "6g", label: t("filters.band6") }
    ], r = [
      { value: Xe, label: t("editor.defaultFilterUnset") },
      { value: "all", label: t("filters.all") },
      { value: "wifi", label: t("filters.wifi") },
      { value: "wired", label: t("filters.wired") },
      { value: "iot", label: t("filters.iot") },
      { value: "guest", label: t("filters.guest") }
    ], s = [
      { value: Xe, label: t("editor.defaultFilterUnset") },
      { value: "all", label: t("filters.all") },
      { value: "online", label: t("filters.online") },
      { value: "offline", label: t("filters.offline") }
    ], l = [
      { value: "icon", label: t("editor.actionRenderIcon") },
      { value: "name", label: t("editor.actionRenderName") },
      { value: "icon_name", label: t("editor.actionRenderIconAndName") }
    ], c = tt.map((u) => ({
      value: u,
      label: t(`actions.groups.${u}`)
    })), d = [
      { value: bt, label: t("editor.columnFixedNone") },
      { value: "start", label: t("editor.columnFixedStart") },
      { value: "end", label: t("editor.columnFixedEnd") }
    ];
    return {
      schema: [
        { name: "title", selector: { text: {} } },
        {
          name: "entry_id",
          selector: { config_entry: {} }
        },
        {
          name: "speed_unit",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "MBps", label: t("editor.speedMBps") },
                { value: "Mbps", label: t("editor.speedMbps") }
              ]
            }
          }
        },
        { name: "txrx_color", selector: { boolean: {} } },
        { name: "updown_color", selector: { boolean: {} } },
        { name: "show_hidden_entities", selector: { boolean: {} } },
        {
          name: "header_action_render",
          selector: {
            select: {
              mode: "dropdown",
              options: l
            }
          }
        },
        {
          name: "row_action_render",
          selector: {
            select: {
              mode: "dropdown",
              options: l
            }
          }
        },
        {
          name: "header_action_groups",
          selector: {
            select: {
              mode: "list",
              multiple: !0,
              options: c
            }
          }
        },
        { name: "shift_click_underline", selector: { boolean: {} } },
        { name: "hide_header", selector: { boolean: {} } },
        { name: "hide_filter_section", selector: { boolean: {} } },
        {
          name: "default_filter_band",
          selector: {
            select: {
              mode: "dropdown",
              options: o
            }
          }
        },
        {
          name: "default_filter_connection",
          selector: {
            select: {
              mode: "dropdown",
              options: r
            }
          }
        },
        {
          name: "default_filter_status",
          selector: {
            select: {
              mode: "dropdown",
              options: s
            }
          }
        },
        {
          name: "upload_speed_color_max",
          selector: {
            number: {
              mode: "box",
              min: 0,
              max: 1e4,
              step: 10
            }
          }
        },
        {
          name: "download_speed_color_max",
          selector: {
            number: {
              mode: "box",
              min: 0,
              max: 1e4,
              step: 10
            }
          }
        },
        {
          name: "column_layout",
          selector: {
            object: {
              multiple: !0,
              label_field: "key",
              fields: {
                key: {
                  required: !0,
                  label: t("editor.columnLayoutKey"),
                  selector: {
                    select: {
                      mode: "dropdown",
                      sort: !1,
                      options: i
                    }
                  }
                },
                fixed: {
                  required: !1,
                  default: bt,
                  label: t("editor.columnLayoutFixedOptional"),
                  selector: {
                    select: {
                      mode: "dropdown",
                      options: d
                    }
                  }
                },
                name: {
                  required: !1,
                  label: t("editor.columnLayoutNameOptional"),
                  selector: { text: {} }
                },
                max_width: {
                  required: !1,
                  label: t("editor.columnLayoutMaxWidthOptional"),
                  description: t("editor.columnLayoutMaxWidthHelp"),
                  selector: { text: {} }
                }
              }
            }
          }
        }
      ],
      computeLabel: (u) => {
        switch (u.name) {
          case "title":
            return t("editor.title");
          case "entry_id":
            return t("editor.router");
          case "speed_unit":
            return t("editor.speedUnit");
          case "txrx_color":
            return t("editor.txrxColor");
          case "updown_color":
            return t("editor.updownColor");
          case "show_hidden_entities":
            return t("editor.showHiddenEntities");
          case "header_action_render":
            return t("editor.headerActionRender");
          case "row_action_render":
            return t("editor.rowActionRender");
          case "header_action_groups":
            return t("editor.headerActionGroups");
          case "shift_click_underline":
            return t("editor.shiftClickUnderline");
          case "hide_header":
            return t("editor.hideHeader");
          case "hide_filter_section":
            return t("editor.hideFilterSection");
          case "default_filter_band":
            return t("editor.defaultFilterBand");
          case "default_filter_connection":
            return t("editor.defaultFilterConnection");
          case "default_filter_status":
            return t("editor.defaultFilterStatus");
          case "upload_speed_color_max":
            return t("editor.uploadSpeedColorMax");
          case "download_speed_color_max":
            return t("editor.downloadSpeedColorMax");
          case "column_layout":
            return t("editor.columnLayout");
          default:
            return u.name ?? "";
        }
      },
      computeHelper: (u) => u.name === "column_layout" ? t("editor.columnLayoutHelp") : u.name === "txrx_color" ? t("editor.txrxColorHelp") : u.name === "updown_color" ? t("editor.updownColorHelp") : u.name === "show_hidden_entities" ? t("editor.showHiddenEntitiesHelp") : u.name === "header_action_render" || u.name === "row_action_render" ? t("editor.actionRenderHelp") : u.name === "header_action_groups" ? t("editor.headerActionGroupsHelp") : u.name === "shift_click_underline" ? t("editor.shiftClickUnderlineHelp") : u.name === "hide_header" ? t("editor.hideHeaderHelp") : u.name === "hide_filter_section" ? t("editor.hideFilterSectionHelp") : u.name === "default_filter_band" || u.name === "default_filter_connection" || u.name === "default_filter_status" ? t("editor.defaultFilterHelp") : u.name === "upload_speed_color_max" || u.name === "download_speed_color_max" ? t("editor.speedColorHelp") : u.name === "entry_id" ? t("editor.routerHelp") : ""
    };
  }
};
st.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _entries: { state: !0 },
  _entityRegistry: { state: !0 },
  _error: { state: !0 },
  _filter: { state: !0 },
  _sorts: { state: !0 },
  _filters: { state: !0 },
  _showExportButton: { state: !0 },
  _speedTooltip: { state: !0 },
  _selectedActionDeviceId: { state: !0 },
  _isShiftPressed: { state: !0 },
  _tableScrolledLeft: { state: !0 },
  _tableScrolledRight: { state: !0 }
}, st.styles = zn;
let $t = st;
customElements.get("tplink-router-card") || customElements.define("tplink-router-card", $t);
const jr = "0.5.0";
window.customCards = window.customCards || [];
window.customCards.push({
  type: "tplink-router-card",
  name: "TP-Link Router Devices",
  description: "List TP-Link router clients with live stats",
  preview: !0
});
console.info(`TPLINK-ROUTER-CARD ${jr} loaded`);
