/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ye = globalThis, kt = Ye.ShadowRoot && (Ye.ShadyCSS === void 0 || Ye.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = Symbol(), Pt = /* @__PURE__ */ new WeakMap();
let gi = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (kt && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Pt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Pt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Zi = (n) => new gi(typeof n == "string" ? n : n + "", void 0, $t), Qi = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, o, s) => i + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[s + 1], n[0]);
  return new gi(t, n, $t);
}, en = (n, e) => {
  if (kt) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = Ye.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, n.appendChild(i);
  }
}, Ut = kt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Zi(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: tn, defineProperty: nn, getOwnPropertyDescriptor: on, getOwnPropertyNames: sn, getOwnPropertySymbols: rn, getPrototypeOf: an } = Object, te = globalThis, Wt = te.trustedTypes, ln = Wt ? Wt.emptyScript : "", cn = te.reactiveElementPolyfillSupport, Ee = (n, e) => n, yt = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? ln : null;
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
} }, yi = (n, e) => !tn(n, e), Kt = { attribute: !0, type: String, converter: yt, reflect: !1, useDefault: !1, hasChanged: yi };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), te.litPropertyMetadata ?? (te.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ye = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Kt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && nn(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: s } = on(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: o, set(a) {
      const l = o?.call(this);
      s?.call(this, a), this.requestUpdate(e, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Kt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ee("elementProperties"))) return;
    const e = an(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ee("properties"))) {
      const t = this.properties, i = [...sn(t), ...rn(t)];
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
      for (const o of i) t.unshift(Ut(o));
    } else e !== void 0 && t.push(Ut(e));
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
    return en(e, this.constructor.elementStyles), e;
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
      const s = (i.converter?.toAttribute !== void 0 ? i.converter : yt).toAttribute(t, i.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const s = i.getPropertyOptions(o), a = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : yt;
      this._$Em = o;
      const l = a.fromAttribute(t, s.type);
      this[o] = l ?? this._$Ej?.get(o) ?? l, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, o = !1, s) {
    if (e !== void 0) {
      const a = this.constructor;
      if (o === !1 && (s = this[e]), i ?? (i = a.getPropertyOptions(e)), !((i.hasChanged ?? yi)(s, t) || i.useDefault && i.reflect && s === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: s }, a) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), s !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [o, s] of this._$Ep) this[o] = s;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, s] of i) {
        const { wrapped: a } = s, l = this[o];
        a !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, s, l);
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
ye.elementStyles = [], ye.shadowRootOptions = { mode: "open" }, ye[Ee("elementProperties")] = /* @__PURE__ */ new Map(), ye[Ee("finalized")] = /* @__PURE__ */ new Map(), cn?.({ ReactiveElement: ye }), (te.reactiveElementVersions ?? (te.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Me = globalThis, jt = (n) => n, Je = Me.trustedTypes, Gt = Je ? Je.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, bi = "$lit$", ee = `lit$${Math.random().toFixed(9).slice(2)}$`, vi = "?" + ee, dn = `<${vi}>`, ue = document, Fe = () => ue.createComment(""), Ne = (n) => n === null || typeof n != "object" && typeof n != "function", St = Array.isArray, un = (n) => St(n) || typeof n?.[Symbol.iterator] == "function", ht = `[ 	
\f\r]`, Ae = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, qt = /-->/g, Xt = />/g, le = RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Yt = /'/g, Jt = /"/g, wi = /^(?:script|style|textarea|title)$/i, pn = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), f = pn(1), be = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), Zt = /* @__PURE__ */ new WeakMap(), de = ue.createTreeWalker(ue, 129);
function xi(n, e) {
  if (!St(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Gt !== void 0 ? Gt.createHTML(e) : e;
}
const hn = (n, e) => {
  const t = n.length - 1, i = [];
  let o, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = Ae;
  for (let l = 0; l < t; l++) {
    const c = n[l];
    let d, u, p = -1, h = 0;
    for (; h < c.length && (a.lastIndex = h, u = a.exec(c), u !== null); ) h = a.lastIndex, a === Ae ? u[1] === "!--" ? a = qt : u[1] !== void 0 ? a = Xt : u[2] !== void 0 ? (wi.test(u[2]) && (o = RegExp("</" + u[2], "g")), a = le) : u[3] !== void 0 && (a = le) : a === le ? u[0] === ">" ? (a = o ?? Ae, p = -1) : u[1] === void 0 ? p = -2 : (p = a.lastIndex - u[2].length, d = u[1], a = u[3] === void 0 ? le : u[3] === '"' ? Jt : Yt) : a === Jt || a === Yt ? a = le : a === qt || a === Xt ? a = Ae : (a = le, o = void 0);
    const y = a === le && n[l + 1].startsWith("/>") ? " " : "";
    s += a === Ae ? c + dn : p >= 0 ? (i.push(d), c.slice(0, p) + bi + c.slice(p) + ee + y) : c + ee + (p === -2 ? l : y);
  }
  return [xi(n, s + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class De {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let s = 0, a = 0;
    const l = e.length - 1, c = this.parts, [d, u] = hn(e, t);
    if (this.el = De.createElement(d, i), de.currentNode = this.el.content, t === 2 || t === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (o = de.nextNode()) !== null && c.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const p of o.getAttributeNames()) if (p.endsWith(bi)) {
          const h = u[a++], y = o.getAttribute(p).split(ee), g = /([.?@])?(.*)/.exec(h);
          c.push({ type: 1, index: s, name: g[2], strings: y, ctor: g[1] === "." ? _n : g[1] === "?" ? mn : g[1] === "@" ? gn : st }), o.removeAttribute(p);
        } else p.startsWith(ee) && (c.push({ type: 6, index: s }), o.removeAttribute(p));
        if (wi.test(o.tagName)) {
          const p = o.textContent.split(ee), h = p.length - 1;
          if (h > 0) {
            o.textContent = Je ? Je.emptyScript : "";
            for (let y = 0; y < h; y++) o.append(p[y], Fe()), de.nextNode(), c.push({ type: 2, index: ++s });
            o.append(p[h], Fe());
          }
        }
      } else if (o.nodeType === 8) if (o.data === vi) c.push({ type: 2, index: s });
      else {
        let p = -1;
        for (; (p = o.data.indexOf(ee, p + 1)) !== -1; ) c.push({ type: 7, index: s }), p += ee.length - 1;
      }
      s++;
    }
  }
  static createElement(e, t) {
    const i = ue.createElement("template");
    return i.innerHTML = e, i;
  }
}
function ve(n, e, t = n, i) {
  if (e === be) return e;
  let o = i !== void 0 ? t._$Co?.[i] : t._$Cl;
  const s = Ne(e) ? void 0 : e._$litDirective$;
  return o?.constructor !== s && (o?._$AO?.(!1), s === void 0 ? o = void 0 : (o = new s(n), o._$AT(n, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = ve(n, o._$AS(n, e.values), o, i)), e;
}
class fn {
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
    const { el: { content: t }, parts: i } = this._$AD, o = (e?.creationScope ?? ue).importNode(t, !0);
    de.currentNode = o;
    let s = de.nextNode(), a = 0, l = 0, c = i[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let d;
        c.type === 2 ? d = new ze(s, s.nextSibling, this, e) : c.type === 1 ? d = new c.ctor(s, c.name, c.strings, this, e) : c.type === 6 && (d = new yn(s, this, e)), this._$AV.push(d), c = i[++l];
      }
      a !== c?.index && (s = de.nextNode(), a++);
    }
    return de.currentNode = ue, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class ze {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = o?.isConnected ?? !0;
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
    e = ve(this, e, t), Ne(e) ? e === S || e == null || e === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : e !== this._$AH && e !== be && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : un(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== S && Ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ue.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = De.createElement(xi(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === o) this._$AH.p(t);
    else {
      const s = new fn(o, this), a = s.u(this.options);
      s.p(t), this.T(a), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = Zt.get(e.strings);
    return t === void 0 && Zt.set(e.strings, t = new De(e)), t;
  }
  k(e) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const s of e) o === t.length ? t.push(i = new ze(this.O(Fe()), this.O(Fe()), this, this.options)) : i = t[o], i._$AI(s), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const i = jt(e).nextSibling;
      jt(e).remove(), e = i;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class st {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, s) {
    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = S;
  }
  _$AI(e, t = this, i, o) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) e = ve(this, e, t, 0), a = !Ne(e) || e !== this._$AH && e !== be, a && (this._$AH = e);
    else {
      const l = e;
      let c, d;
      for (e = s[0], c = 0; c < s.length - 1; c++) d = ve(this, l[i + c], t, c), d === be && (d = this._$AH[c]), a || (a = !Ne(d) || d !== this._$AH[c]), d === S ? e = S : e !== S && (e += (d ?? "") + s[c + 1]), this._$AH[c] = d;
    }
    a && !o && this.j(e);
  }
  j(e) {
    e === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class _n extends st {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === S ? void 0 : e;
  }
}
class mn extends st {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== S);
  }
}
class gn extends st {
  constructor(e, t, i, o, s) {
    super(e, t, i, o, s), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ve(this, e, t, 0) ?? S) === be) return;
    const i = this._$AH, o = e === S && i !== S || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, s = e !== S && (i === S || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class yn {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ve(this, e);
  }
}
const bn = Me.litHtmlPolyfillSupport;
bn?.(De, ze), (Me.litHtmlVersions ?? (Me.litHtmlVersions = [])).push("3.3.2");
const vn = (n, e, t) => {
  const i = t?.renderBefore ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const s = t?.renderBefore ?? null;
    i._$litPart$ = o = new ze(e.insertBefore(Fe(), s), s, void 0, t ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Le = globalThis;
class Oe extends ye {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = vn(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return be;
  }
}
Oe._$litElement$ = !0, Oe.finalized = !0, Le.litElementHydrateSupport?.({ LitElement: Oe });
const wn = Le.litElementPolyfillSupport;
wn?.({ LitElement: Oe });
(Le.litElementVersions ?? (Le.litElementVersions = [])).push("4.2.2");
const xn = Qi`
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
    max-width: min(88vw, max(260px, 58rem));
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
    max-width: min(88vw, max(260px, 58rem));
    overflow-x: auto;
    overflow-y: hidden;
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

  td.sticky-start,
  td.sticky-end {
    max-width: min(70vw, max(180px, 30rem));
  }

  td.sticky-start .cell-content,
  td.sticky-end .cell-content {
    display: block;
    max-width: min(70vw, max(180px, 30rem));
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: thin;
  }

  td.sticky-start .cell-content.cell-content-ellipsis,
  td.sticky-end .cell-content.cell-content-ellipsis {
    overflow: hidden;
    overflow-x: hidden;
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

  .empty {
    padding: 16px 18px 20px;
    color: var(--secondary-text-color);
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
`, kn = {
  title: "TP-Link Router Clients",
  subtitle: "Router: {name}",
  selectRouter: "Select a TP-Link router in card settings.",
  noDevices: "No devices found for this router.",
  devicesCount: "{count} devices",
  onlineCount: "{online}/{total} online",
  searchPlaceholder: "Search (name, IP, MAC, host or /regex/)",
  routerNotSelected: "Router not selected",
  routerLabel: "Router",
  controllerNotSelected: "Controller not selected",
  controllerLabel: "Controller",
  debugExport: "Download diagnostics JSON (redacted)",
  speedTooltipUsage: "Bandwidth Load: {value}%",
  speedTooltipTransfer: "Transfer: {value}",
  speedTooltipMbps: "Mbps: {value}/{max}",
  cpuUsage: "CPU usage: {value}",
  memUsage: "Memory usage: {value}"
}, $n = {
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
}, Sn = {
  name: "Name",
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
}, Cn = {
  online: "Online",
  offline: "Offline"
}, An = {
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
}, Tn = {
  wifi: "WiFi",
  guest: "Guest",
  iot: "IoT",
  reboot: "Reboot",
  router: "Router",
  goToDevice: "Go to device: {name}",
  targetDevice: "Action target device",
  holdHint: "Hold {seconds}s",
  holdWithLabel: "{label} (hold {seconds}s)"
}, Rn = {
  lists: "Could not load lists. Admin rights may be required."
}, En = {
  card: kn,
  filters: $n,
  columns: Sn,
  status: Cn,
  editor: An,
  actions: Tn,
  errors: Rn
}, Mn = {
  title: "TP-Link Router Cihazları",
  subtitle: "Router: {name}",
  selectRouter: "Kart ayarlarından bir TP-Link router seçin.",
  noDevices: "Bu router için kayıtlı cihaz bulunamadı.",
  devicesCount: "{count} cihaz",
  onlineCount: "{online}/{total} online",
  searchPlaceholder: "Ara (isim, IP, MAC, host veya /regex/)",
  routerNotSelected: "Router seçilmedi",
  routerLabel: "Router",
  controllerNotSelected: "Controller seçilmedi",
  controllerLabel: "Controller",
  debugExport: "Tanı JSON çıktısını indir (redacted)",
  speedTooltipUsage: "Bant Genişliği Yükü: %{value}",
  speedTooltipTransfer: "Aktarım: {value}",
  speedTooltipMbps: "Mbps: {value}/{max}",
  cpuUsage: "CPU kullanımı: {value}",
  memUsage: "Bellek kullanımı: {value}"
}, Ln = {
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
}, On = {
  name: "Ad",
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
}, In = {
  online: "Çevrimiçi",
  offline: "Çevrimdışı"
}, Fn = {
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
}, Nn = {
  wifi: "WiFi",
  guest: "Misafir",
  iot: "IoT",
  reboot: "Yeniden Başlat",
  router: "Router",
  goToDevice: "Cihaza git: {name}",
  targetDevice: "Aksiyon hedef cihazı",
  holdHint: "{seconds} sn basılı tut",
  holdWithLabel: "{label} ({seconds} sn basılı tut)"
}, Dn = {
  lists: "Veri listeleri alınamadı. Yönetici yetkisi gerekebilir."
}, Bn = {
  card: Mn,
  filters: Ln,
  columns: On,
  status: In,
  editor: Fn,
  actions: Nn,
  errors: Dn
}, Ze = {
  en: En,
  tr: Bn
}, zn = (n) => {
  const e = (n?.locale?.language || n?.language || "en").toLowerCase();
  if (Ze[e]) return e;
  const t = e.split("-")[0];
  return Ze[t] ? t : "en";
}, Qt = (n, e) => {
  const t = e.split(".");
  let i = n;
  for (const o of t)
    if (typeof i != "object" || i === null || (i = i[o], i === void 0)) return null;
  return typeof i == "string" ? i : null;
}, qe = (n, e, t) => {
  const i = zn(n);
  let o = Qt(Ze[i], e) ?? Qt(Ze.en, e) ?? e;
  return t && Object.entries(t).forEach(([s, a]) => {
    o = o.replace(new RegExp(`\\{${s}\\}`, "g"), String(a));
  }), o;
}, ki = /^(?:\d{1,3}\.){3}\d{1,3}$/, Hn = /^[0-9a-f:]+$/i, Vn = /^(?:[0-9a-f]{2}[:-]){5}[0-9a-f]{2}$/i, Pn = /^[a-z][a-z0-9+.-]*:\/\//i, Un = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Wn = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/, Kn = /^[A-Za-z0-9+/_=-]{24,}$/, jn = /(password|passwd|token|secret|auth|cookie|session|ssid|host|hostname|name|url|ip|mac|email)/i, Gn = () => ({
  visitedNodes: 0,
  circularRefs: 0,
  depthTruncations: 0,
  arrayTruncations: 0,
  objectKeyTruncations: 0,
  stringTruncations: 0,
  maxNodeHits: 0
}), qn = () => ({
  totalMasked: 0,
  maskedByKey: 0,
  maskedIp: 0,
  maskedMac: 0,
  maskedUrl: 0,
  maskedToken: 0,
  maskedEmail: 0
}), Te = (n, e, t) => Math.max(e, Math.min(t, n)), Xn = (n) => ({
  maxDepth: Te(n?.maxDepth, 2, 20),
  maxNodes: Te(n?.maxNodes, 500, 2e5),
  maxArrayLength: Te(n?.maxArrayLength, 1, 2e4),
  maxObjectKeys: Te(n?.maxObjectKeys, 1, 5e3),
  maxStringLength: Te(
    n?.maxStringLength,
    32,
    1e5
  )
}), Re = (n, e) => `[truncated:${n}${e ? `:${e}` : ""}]`, H = (n, e = 2, t = 2) => {
  const i = n.trim();
  return i && (i.length <= 2 ? `${i.slice(0, 1)}*` : i.length <= e + t ? `${i.slice(0, 1)}***${i.slice(-1)}` : `${i.slice(0, e)}***${i.slice(-t)}`);
}, $i = (n) => {
  const e = n.split(".");
  return e.length !== 4 ? H(n) : `${e[0]}.xxx.xxx.${e[3]}`;
}, Yn = (n) => {
  const e = n.includes("-") ? "-" : ":", t = n.split(/[:-]/);
  return t.length !== 6 ? H(n) : `${t[0]}${e}**${e}**${e}**${e}**${e}${t[5]}`;
}, Jn = (n) => {
  try {
    const e = new URL(n), t = ki.test(e.hostname) ? $i(e.hostname) : H(e.hostname, 2, 2), i = e.search ? "?***" : "", o = e.hash ? "#***" : "";
    return `${e.protocol}//${t}${e.port ? `:${e.port}` : ""}${e.pathname}${i}${o}`;
  } catch {
    return H(n);
  }
}, ft = (n, e, t) => n.length <= e.maxStringLength ? n : (t.stringTruncations += 1, `${n.slice(0, e.maxStringLength)}${Re(
  "string",
  String(n.length - e.maxStringLength)
)}`), Zn = (n) => typeof n == "bigint" ? `${n.toString()}n` : typeof n == "function" ? `[function:${n.name || "anonymous"}]` : typeof n == "symbol" ? `[symbol:${String(n.description || "")}]` : typeof n == "number" ? Number.isFinite(n) ? n : String(n) : n, Qn = (n, e) => {
  const t = Xn(e), i = Gn(), o = /* @__PURE__ */ new WeakMap(), s = (a, l, c) => {
    if (i.visitedNodes >= t.maxNodes)
      return i.maxNodeHits += 1, Re("max_nodes");
    if (a == null) return a;
    const d = Zn(a);
    if (d !== a)
      return i.visitedNodes += 1, d;
    if (typeof a == "string")
      return i.visitedNodes += 1, ft(a, t, i);
    if (typeof a != "object")
      return i.visitedNodes += 1, a;
    if (o.has(a))
      return i.visitedNodes += 1, i.circularRefs += 1, `[circular:${o.get(a) ?? "root"}]`;
    if (l >= t.maxDepth)
      return i.visitedNodes += 1, i.depthTruncations += 1, Re("depth", c);
    if (a instanceof Date)
      return i.visitedNodes += 1, Number.isNaN(a.getTime()) ? "[date:invalid]" : a.toISOString();
    if (a instanceof RegExp)
      return i.visitedNodes += 1, String(a);
    if (a instanceof Error)
      return i.visitedNodes += 1, {
        name: a.name,
        message: ft(a.message, t, i),
        stack: a.stack ? ft(a.stack, t, i) : void 0
      };
    if (o.set(a, c), Array.isArray(a)) {
      const g = Math.min(a.length, t.maxArrayLength), b = [];
      for (let w = 0; w < g; w += 1)
        b.push(s(a[w], l + 1, `${c}[${w}]`));
      return a.length > g && (i.arrayTruncations += 1, b.push(Re("array", String(a.length - g)))), i.visitedNodes += 1, b;
    }
    if (a instanceof Map) {
      const g = {}, b = Array.from(a.entries()), w = b.slice(0, t.maxObjectKeys);
      return w.forEach(([T, R], E) => {
        g[String(T)] = s(R, l + 1, `${c}.map_${E}`);
      }), b.length > w.length && (i.objectKeyTruncations += 1, g.__truncated_entries__ = b.length - w.length), i.visitedNodes += 1, g;
    }
    if (a instanceof Set) {
      const g = Array.from(a.values()), b = g.slice(0, t.maxArrayLength), w = b.map((T, R) => s(T, l + 1, `${c}.set_${R}`));
      return g.length > b.length && (i.arrayTruncations += 1, w.push(Re("set", String(g.length - b.length)))), i.visitedNodes += 1, w;
    }
    const u = a, p = Object.keys(u), h = p.slice(0, t.maxObjectKeys), y = {};
    return h.forEach((g) => {
      y[g] = s(u[g], l + 1, `${c}.${g}`);
    }), p.length > h.length && (i.objectKeyTruncations += 1, y.__truncated_keys__ = p.length - h.length), i.visitedNodes += 1, y;
  };
  return { value: s(n, 0, "$"), limits: t, stats: i };
}, Z = (n, e) => {
  n[e] += 1, n.totalMasked += 1;
}, eo = (n, e, t) => {
  const i = n.trim();
  if (!i) return i;
  if (ki.test(i)) {
    const o = $i(i);
    return o !== i && Z(t, "maskedIp"), o;
  }
  if (i.includes(":") && Hn.test(i) && i.length > 8) {
    const o = H(i, 4, 4);
    return o !== i && Z(t, "maskedIp"), o;
  }
  if (Vn.test(i)) {
    const o = Yn(i);
    return o !== i && Z(t, "maskedMac"), o;
  }
  if (Pn.test(i)) {
    const o = Jn(i);
    return o !== i && Z(t, "maskedUrl"), o;
  }
  if (Un.test(i)) {
    const [o, s] = i.split("@"), a = `${H(o, 1, 1)}@${H(s, 2, 2)}`;
    return a !== i && Z(t, "maskedEmail"), a;
  }
  if (/^bearer\s+/i.test(i)) {
    const o = i.replace(/^bearer\s+/i, ""), s = `Bearer ${H(o, 3, 3)}`;
    return s !== i && Z(t, "maskedToken"), s;
  }
  if (Wn.test(i) || Kn.test(i)) {
    const o = H(i, 3, 3);
    return o !== i && Z(t, "maskedToken"), o;
  }
  if (e && jn.test(e)) {
    const o = H(i, 2, 2);
    return o !== i && Z(t, "maskedByKey"), o;
  }
  return i;
}, bt = (n, e, t) => {
  if (typeof n == "string") return eo(n, e, t);
  if (Array.isArray(n)) return n.map((i) => bt(i, e, t));
  if (n !== null && typeof n == "object") {
    const i = n, o = {};
    return Object.entries(i).forEach(([s, a]) => {
      o[s] = bt(a, s, t);
    }), o;
  }
  return n;
}, to = (n) => {
  const e = qn();
  return { value: bt(n, void 0, e), stats: e };
}, io = (n, e) => {
  const t = Qn(n, e?.limits), i = to(t.value);
  return {
    schema_version: "1",
    generated_at: (/* @__PURE__ */ new Date()).toISOString(),
    limits: t.limits,
    sanitize_stats: t.stats,
    redaction_stats: i.stats,
    masked: i.value
  };
}, _t = (n) => {
  if (/(2\.4|2g|2ghz|24g)/i.test(n)) return "2g";
  if (/(5g|5ghz)/i.test(n)) return "5g";
  if (/(6g|6ghz)/i.test(n)) return "6g";
}, no = (n, e, t, i) => {
  const o = `${e} ${t}`.toLowerCase(), s = i === "omada" || i === "tplink_omada";
  if (n === "button")
    return o.includes("reboot") || o.includes("restart") ? { kind: "router", requiresHold: !0 } : s && o.includes("reconnect") ? { kind: "router", requiresHold: !0 } : s && (o.includes("wlan optimization") || o.includes("rf planning")) ? { kind: "router", requiresHold: !0 } : null;
  if (o.includes("data fetching") || o.includes("scanning")) return { kind: "router", requiresHold: !1 };
  if (o.includes("guest")) {
    const l = _t(o);
    return l ? { kind: "guest", band: l, requiresHold: !0 } : null;
  }
  if (o.includes("iot")) {
    const l = _t(o);
    return l ? { kind: "iot", band: l, requiresHold: !0 } : null;
  }
  if (o.includes("wifi") || o.includes("wlan") || o.includes("radio") || o.includes("ssid")) {
    const l = _t(o);
    return l ? { kind: "host", band: l, requiresHold: !0 } : null;
  }
  return null;
}, oo = (n, e) => new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" }).compare(n, e), so = (n, e) => {
  const t = /* @__PURE__ */ new Map(), i = new Map(e.map((o) => [o.id, o]));
  for (const o of n) {
    if (o.isGlobalCommon || !o.deviceId || t.has(o.deviceId)) continue;
    const s = i.get(o.deviceId);
    t.set(o.deviceId, {
      deviceId: o.deviceId,
      deviceName: o.deviceName ?? s?.name_by_user ?? s?.name ?? o.deviceId.slice(0, 8)
    });
  }
  return [...t.values()].sort((o, s) => oo(o.deviceName, s.deviceName));
}, ei = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"], Qe = (n) => Number.isFinite(n) ? new Intl.NumberFormat(void 0, { maximumFractionDigits: 0 }).format(n) : "—", j = (n, e = !1) => {
  if (n == null || !Number.isFinite(n)) return "—";
  const t = Math.abs(n);
  let i = 0, o = t;
  for (; o >= 1024 && i < ei.length - 1; )
    o /= 1024, i += 1;
  const s = o >= 100 ? 0 : o >= 10 ? 1 : 2, a = `${o.toFixed(s)} ${ei[i]}`;
  return e ? `${a}/s` : a;
}, vt = (n) => n == null || !Number.isFinite(n) ? null : n * 8 / 1e6, Be = (n, e, t = "auto") => {
  if (n == null || !Number.isFinite(n)) return null;
  const i = Math.abs(n);
  return t === "kbps" ? i >= 1e7 ? n / 1e6 : n / 1e3 : t === "mbps" ? n : i >= 1e7 ? n / 1e6 : i >= 1e4 || i >= 5e3 && i < 1e4 && e && e !== "6g" ? n / 1e3 : n;
}, Ct = (n) => {
  if (n == null || !Number.isFinite(n)) return "—";
  const e = Math.max(0, Math.floor(n)), t = Math.floor(e / 86400), i = Math.floor(t / 30), o = t % 30, s = Math.floor(e % 86400 / 3600), a = Math.floor(e % 3600 / 60), l = e % 60, c = i > 0 ? `${i}mo ` : "", d = o > 0 ? `${o}d ` : "", u = (p) => p.toString().padStart(2, "0");
  return `${c}${d}${u(s)}:${u(a)}:${u(l)}`;
}, et = (n, e, t = "auto") => {
  const i = Be(n, e, t);
  if (i === null) return "—";
  const o = i >= 100 ? 0 : i >= 10 ? 1 : 2;
  return `${i.toFixed(o)} Mbps`;
}, wt = (n, e = "MBps") => {
  if (n == null || !Number.isFinite(n)) return "—";
  const t = n;
  if (e === "MBps") {
    if (t < 1e3) {
      const d = t >= 100 ? 0 : t >= 10 ? 1 : 2;
      return `${t.toFixed(d)} B/s`;
    }
    const s = t / 1e3;
    if (s < 1e3) {
      const d = s >= 100 ? 0 : s >= 10 ? 1 : 2;
      return `${s.toFixed(d)} KB/s`;
    }
    const a = s / 1e3;
    if (a < 1e3) {
      const d = a >= 100 ? 0 : a >= 10 ? 1 : 2;
      return `${a.toFixed(d)} MB/s`;
    }
    const l = a / 1e3, c = l >= 100 ? 0 : l >= 10 ? 1 : 2;
    return `${l.toFixed(c)} GB/s`;
  }
  const i = vt(n);
  if (i === null) return "—";
  if (i < 1) {
    const s = i * 1e3, a = s >= 100 ? 0 : s >= 10 ? 1 : 2;
    return `${s.toFixed(a)} Kbps`;
  }
  if (i >= 1e3) {
    const s = i / 1e3, a = s >= 100 ? 0 : s >= 10 ? 1 : 2;
    return `${s.toFixed(a)} Gbps`;
  }
  const o = i >= 100 ? 0 : i >= 10 ? 1 : 2;
  return `${i.toFixed(o)} Mbps`;
}, v = (n) => n == null || typeof n == "string" && n.trim().length === 0 ? "—" : String(n), ro = /* @__PURE__ */ new Set(["home", "on", "connected"]), $ = (n) => {
  if (typeof n == "number" && Number.isFinite(n)) return n;
  if (typeof n == "string" && n.trim() !== "") {
    const e = Number(n);
    return Number.isFinite(e) ? e : null;
  }
  return null;
}, Si = (n) => {
  if (n == null) return "unknown";
  const e = String(n).toLowerCase();
  return e.includes("2.4") || e.includes("2g") ? "2g" : e.includes("5g") ? "5g" : e.includes("6g") ? "6g" : "unknown";
}, ao = (n) => {
  if (n == null) return "unknown";
  const e = String(n).trim().toLowerCase();
  return e.length === 0 || e === "—" || e === "-" || e === "unknown" || e === "unavailable" || e === "none" || e === "null" || e === "n/a" || e === "na" ? "unknown" : e.includes("guest") ? "guest" : e.includes("iot") ? "iot" : e.includes("wired") || e.includes("lan") || e.includes("ethernet") ? "wired" : "wifi";
}, pe = (n) => n.replace(/[^0-9a-f]/gi, "").toLowerCase(), rt = (n) => n === null ? "var(--secondary-text-color)" : n <= -80 ? "var(--signal-bad)" : n <= -70 ? "var(--signal-poor)" : n <= -65 ? "var(--signal-fair)" : n <= -60 ? "var(--signal-good)" : "var(--signal-excellent)", lo = (n) => {
  let e = 0, t = 0;
  for (const i of n) {
    const o = i.attributes, s = Si(o.band ?? o.bandwidth ?? o.frequency), a = $(o.tx_rate), l = $(o.rx_rate);
    for (const c of [a, l]) {
      if (c === null) continue;
      const d = Math.abs(c);
      d > e && (e = d), s === "2g" && d > t && (t = d);
    }
  }
  return e >= 1e4 || t >= 1e3 ? "kbps" : "auto";
}, co = (n, e, t, i) => {
  const o = Object.values(n).filter((u) => u.entity_id.startsWith("device_tracker.") ? u.attributes.source_type === "router" : !1);
  if (!t) return o;
  if (!i && e.length === 0) return [];
  if (i || e.length === 0) return o;
  const a = e.filter((u) => u.config_entry_id === t).filter((u) => u.entity_id.startsWith("device_tracker.")).map((u) => n[u.entity_id]).filter((u) => u !== void 0);
  if (a.length > 0) return a;
  const l = new Map(e.map((u) => [u.entity_id, u.config_entry_id])), c = o.filter(
    (u) => l.get(u.entity_id) === t
  );
  if (c.length > 0) return c;
  const d = new Set(
    e.filter((u) => u.config_entry_id === t && u.device_id).map((u) => u.device_id)
  );
  if (d.size > 0) {
    const u = new Map(
      e.filter((h) => h.entity_id.startsWith("device_tracker.") && h.device_id).map((h) => [h.entity_id, h.device_id])
    ), p = o.filter((h) => {
      const y = u.get(h.entity_id);
      return y ? d.has(y) : !1;
    });
    if (p.length > 0) return p;
  }
  return [];
}, uo = (n, e) => {
  if (!e || n.length === 0) return [];
  const t = n.filter((s) => s.config_entry_id === e), i = new Set(
    t.filter((s) => s.device_id).map((s) => s.device_id)
  ), o = new Set(
    t.filter((s) => !s.entity_id.startsWith("device_tracker.") && s.device_id).map((s) => s.device_id)
  );
  return [...o.size > 0 ? o : i];
}, He = (n) => v(Array.isArray(n) ? n.join(",") : n), po = {
  up: {
    bytesPerSecond: ["up_speed"],
    kiloBytesPerSecond: ["up_kilobytes_per_s"]
  },
  down: {
    bytesPerSecond: ["down_speed"],
    kiloBytesPerSecond: ["down_kilobytes_per_s"]
  }
}, Ie = (n, e) => {
  for (const t of e) {
    const i = $(n[t]);
    if (i !== null) return i;
  }
  return null;
}, ho = [
  "tx_rate",
  "txRate",
  "tx_mbps",
  "txMbps",
  "tx_speed",
  "txSpeed"
], fo = [
  "rx_rate",
  "rxRate",
  "rx_mbps",
  "rxMbps",
  "rx_speed",
  "rxSpeed"
], _o = [
  "signal",
  "rssi",
  "signal_dbm",
  "signalDbm",
  "dbm"
], mo = (n) => {
  const e = He(n).toLowerCase();
  return e === "—" ? "" : e.includes("main") ? "host" : e.includes("guest") ? "guest" : e.includes("iot") ? "iot" : e;
}, go = (n) => {
  const e = He(n).toLowerCase();
  return e === "—" ? "" : e.includes("wired") || e.includes("ethernet") || e.includes("lan") ? "wired" : e.includes("wireless") || e.includes("wifi") || e.includes("wlan") ? "wifi" : e;
}, yo = (n) => {
  const e = n.toLowerCase();
  return e.includes("band2_4") || e.includes("2.4") ? "2G" : e.includes("band5") ? "5G" : e.includes("band6") ? "6G" : "—";
}, bo = (n, e, t) => {
  const i = e.toLowerCase();
  return t === "wired" || i.includes("wired") || i.includes("ethernet") || i.includes("lan") ? "wired" : n || (t === "wifi" || i.includes("band2_4") || i.includes("band5") || i.includes("band6") || i.includes("wifi") || i.includes("wireless") || i.includes("wlan") ? "wifi" : e);
}, vo = (n) => n.split(/[\s_-]+/).filter((e) => e.length > 0).map((e) => e[0].toUpperCase() + e.slice(1)).join(" "), wo = (n) => {
  const e = He(n).toLowerCase();
  return e === "—" ? "—" : e === "deco" ? "Deco" : e === "client" ? "Client" : vo(e);
}, xo = (n) => {
  const e = n.internet_online;
  if (typeof e == "boolean") return e ? "Online" : "Offline";
  if (typeof e == "string") {
    const i = e.trim().toLowerCase();
    if (i === "true" || i === "online") return "Online";
    if (i === "false" || i === "offline") return "Offline";
  }
  const t = He(n.status);
  return t === "—" ? "—" : t;
}, ti = (n, e) => {
  const t = po[e], i = Ie(n, t.bytesPerSecond);
  if (i !== null) return i;
  const o = Ie(n, t.kiloBytesPerSecond);
  return o === null ? null : o * 1e3;
}, ko = (n, e, t) => {
  const i = n.attributes, o = v(i.friendly_name ?? n.entity_id), s = i.interface ?? i.client_type ?? i.clientType, a = i.wire_type ?? i.wireType, l = mo(s), c = go(a), d = i.connection ?? i.connection_type ?? i.connectionType ?? "—", u = He(d), p = v(
    bo(l, u, c)
  ), h = yo(u), y = v(
    i.band ?? i.bandwidth ?? i.frequency ?? i.wifi_band ?? h
  ), g = Si(y), b = ao(p), w = v(i.ip ?? i.ip_address ?? i.ipaddr ?? "—"), T = v(i.mac ?? i.mac_address ?? i.macaddr ?? "—"), R = v(
    i.host_name ?? i.hostname ?? i.host ?? i.name ?? i.deco_device ?? i.device_model ?? "—"
  ), E = $(i.packets_sent ?? i.up_packet ?? i.upPacket), M = $(
    i.packets_received ?? i.down_packet ?? i.downPacket
  ), B = ti(i, "up"), ie = ti(i, "down"), G = Ie(i, ho), ne = Ie(i, fo), oe = vt(B), V = vt(ie), P = Be(G, g, t), q = Be(ne, g, t), he = $(i.online_time ?? i.uptime ?? i.connected_time), X = $(i.traffic_down ?? i.trafficDown), U = $(i.traffic_up ?? i.trafficUp), fe = X !== null || U !== null ? (X ?? 0) + (U ?? 0) : $(i.traffic_usage ?? i.total_traffic ?? i.traffic_total), z = Ie(i, _o), N = wo(i.device_type ?? i.type), se = v(i.device_model ?? i.model ?? "—"), W = v(
    i.sw_version ?? i.firmware ?? i.firmware_version ?? "—"
  ), Y = xo(i), xe = (w === "0.0.0.0" || w === "—") && b === "unknown" && g === "unknown", D = ro.has(n.state) && !xe;
  return {
    entity_id: n.entity_id,
    name: o,
    nameRaw: o,
    macNormalized: pe(T),
    isOnline: D,
    statusValue: D ? 1 : 0,
    statusColor: D ? "#3aa45b" : "#9aa0a6",
    connection: p,
    connectionType: b,
    band: y,
    bandType: g,
    ip: w,
    mac: T,
    hostname: R,
    packetsSent: Qe(E ?? Number.NaN),
    packetsSentValue: E,
    packetsReceived: Qe(M ?? Number.NaN),
    packetsReceivedValue: M,
    upSpeed: wt(B, e),
    upSpeedValue: oe,
    downSpeed: wt(ie, e),
    downSpeedValue: V,
    txRate: et(G, g, t),
    txRateValue: P,
    rxRate: et(ne, g, t),
    rxRateValue: q,
    onlineTime: Ct(he),
    onlineTimeValue: he,
    downloaded: j(X),
    downloadedValue: X,
    uploaded: j(U),
    uploadedValue: U,
    trafficUsage: j(fe),
    trafficUsageValue: fe,
    signal: z !== null ? `${z} dBm` : "—",
    signalValue: z,
    signalColor: rt(z),
    snr: "—",
    snrValue: null,
    powerSave: "—",
    powerSaveValue: null,
    deviceType: N,
    deviceModel: se,
    deviceFirmware: W,
    deviceStatus: Y
  };
}, Ci = /* @__PURE__ */ new Set(["home", "on", "connected"]), $o = () => ({
  downloadedMB: null,
  uploadedMB: null,
  rxActivityMBps: null,
  txActivityMBps: null,
  rssi: null,
  snr: null,
  uptimeSeconds: null
}), So = (n) => n.entity_id.startsWith("device_tracker."), tt = (n) => String(n ?? "").trim(), Co = (n) => {
  if (!So(n)) return !1;
  const e = n.attributes, t = String(e.source_type ?? "").toLowerCase();
  return t && t !== "router" ? !1 : "wireless" in e || "guest" in e || "ssid" in e || "ap_name" in e || "ap_mac" in e || "switch_port" in e || "channel_width" in e || "radio" in e;
}, Ao = (n) => {
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
}, To = (n) => {
  const e = n.guest === !0 || String(n.guest).toLowerCase() === "true", t = n.wireless === !0 || String(n.wireless).toLowerCase() === "true", i = n.switch_port !== void 0 || n.switchPort !== void 0 || n.standard_port !== void 0 || n.switch_name !== void 0 || n.switchName !== void 0 || n.switch_mac !== void 0 || n.switchMac !== void 0, o = n.ap_name !== void 0 || n.apName !== void 0 || n.ap_mac !== void 0 || n.apMac !== void 0 || n.ssid !== void 0, s = [
    n.connection,
    n.connect_type,
    n.connectType,
    n.connect_dev_type,
    n.connectDevType,
    n.network_name,
    n.networkName
  ].map((l) => tt(l).toLowerCase()).join(" "), a = tt(n.type).toLowerCase();
  return e ? { label: "Guest", type: "guest" } : t ? { label: "WiFi", type: "wifi" } : i ? { label: "Wired", type: "wired" } : o ? { label: "WiFi", type: "wifi" } : n.wireless === !1 || String(n.wireless).toLowerCase() === "false" ? { label: "Wired", type: "wired" } : s.includes("wired") || s.includes("ethernet") || s.includes("lan") || s.includes("switch") || s.includes("gateway") ? { label: "Wired", type: "wired" } : s.includes("wifi") || s.includes("wireless") || s.includes("wlan") || s.includes("ap") ? { label: "WiFi", type: "wifi" } : a === "gateway" ? { label: "Gateway", type: "unknown" } : a === "switch" ? { label: "Switch", type: "unknown" } : a === "ap" ? { label: "Access Point", type: "unknown" } : n.ip !== void 0 || n.ip_address !== void 0 || n.mac !== void 0 ? { label: "Wired", type: "wired" } : {
    label: v(n.connection ?? n.type ?? "—"),
    type: "unknown"
  };
}, Ai = (n) => {
  if (n == null) return null;
  const e = $(n);
  if (e !== null) return e;
  if (typeof n == "string") {
    const t = Date.parse(n);
    if (Number.isFinite(t))
      return Math.max(0, Math.floor((Date.now() - t) / 1e3));
  }
  return null;
}, it = (n, e) => {
  if (n === null || !Number.isFinite(n)) return "—";
  if (e === "MBps") {
    if (n >= 1e3) {
      const s = n / 1e3, a = s >= 100 ? 0 : s >= 10 ? 1 : 2;
      return `${s.toFixed(a)} GB/s`;
    }
    const o = n >= 100 ? 0 : n >= 10 ? 1 : 2;
    return `${n.toFixed(o)} MB/s`;
  }
  const t = n * 8;
  if (t >= 1e3) {
    const o = t / 1e3, s = o >= 100 ? 0 : o >= 10 ? 1 : 2;
    return `${o.toFixed(s)} Gbps`;
  }
  const i = t >= 100 ? 0 : t >= 10 ? 1 : 2;
  return `${t.toFixed(i)} Mbps`;
}, ii = (n, e) => {
  for (const t of e) {
    const i = $(n[t]);
    if (i !== null) return i;
  }
  return null;
}, Ro = (n, e) => {
  const t = n.entity_id.toLowerCase(), i = String(n.attributes.friendly_name ?? "").toLowerCase().trim(), o = `${t} ${i}`;
  if (o.includes("downloaded") || /\bdownload\b/.test(o)) {
    e.downloadedMB = $(n.state);
    return;
  }
  if (o.includes("uploaded") || /\bupload\b/.test(o)) {
    e.uploadedMB = $(n.state);
    return;
  }
  if (o.includes("rx_activity") || o.includes("rx activity") || /\brx\b/.test(o) && !o.includes("utilization")) {
    e.rxActivityMBps = $(n.state);
    return;
  }
  if (o.includes("tx_activity") || o.includes("tx activity") || /\btx\b/.test(o) && !o.includes("utilization")) {
    e.txActivityMBps = $(n.state);
    return;
  }
  if (o.includes("snr")) {
    e.snr = $(n.state);
    return;
  }
  if (o.includes("rssi") || o.includes("signal")) {
    e.rssi = $(n.state);
    return;
  }
  (o.includes("uptime") || o.includes("duration") || o.includes("connected")) && (e.uptimeSeconds = Ai(n.state));
}, Eo = (n) => {
  const e = tt(n).toLowerCase();
  return e ? e === "ap" ? "Access Point" : e === "gateway" ? "Gateway" : e === "switch" ? "Switch" : v(n) : "—";
}, Ti = (n) => {
  if (!n) return;
  const e = n.toLowerCase();
  if (e.startsWith("eap")) return "Access Point";
  if (e.startsWith("er")) return "Gateway";
  if (e.startsWith("sg") || e.startsWith("tl-sg")) return "Switch";
}, Ri = (n, e) => {
  if (!e) return n;
  const t = e.connections?.find((i) => String(i[0] ?? "").toLowerCase().includes("mac"))?.[1];
  return {
    ...n,
    name: n.name === "—" ? v(e.name_by_user ?? e.name ?? "—") : n.name,
    nameRaw: n.nameRaw === "—" ? v(e.name_by_user ?? e.name ?? "—") : n.nameRaw,
    mac: n.mac === "—" ? v(t ?? n.mac) : n.mac,
    macNormalized: n.macNormalized.length === 0 && t ? pe(t) : n.macNormalized,
    deviceType: n.deviceType && n.deviceType !== "—" ? n.deviceType : Ti(e.model) ?? n.deviceType,
    deviceModel: n.deviceModel && n.deviceModel !== "—" ? n.deviceModel : v(e.model ?? n.deviceModel ?? "—"),
    deviceFirmware: n.deviceFirmware && n.deviceFirmware !== "—" ? n.deviceFirmware : v(e.sw_version ?? n.deviceFirmware ?? "—")
  };
}, Mo = (n) => {
  for (const t of n) {
    const i = String(t.state ?? "").toLowerCase();
    if (Ci.has(i)) return { isOnline: !0, raw: t.state };
    if (i === "off" || i === "not_home")
      return { isOnline: !1, raw: t.state };
  }
  const e = n.find((t) => t.entity_id.startsWith("switch."));
  return e ? { isOnline: String(e.state).toLowerCase() !== "off", raw: e.state } : { isOnline: !1, raw: "unknown" };
}, Lo = (n) => {
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
}, Oo = (n) => n.some((e) => e.entity_id.startsWith("device_tracker.")) ? !1 : n.every((e) => e.entity_id.startsWith("update.")), Io = (n) => n.some((e) => {
  const t = e.entity_id.toLowerCase(), i = e.attributes, o = String(i.friendly_name ?? "").toLowerCase(), s = `${t} ${o}`;
  return s.includes("reconnect") || s.includes("rssi") || s.includes(" snr") || s.includes(" 5g") || s.includes(" 6g") || s.includes(" 2.4g") || i.wireless === !0 || String(i.wireless).toLowerCase() === "true";
}), ni = (n, e) => {
  for (const t of n) {
    const i = t.entity_id.toLowerCase(), o = t.attributes, s = String(o.friendly_name ?? "").toLowerCase(), a = `${i} ${s}`;
    if (!e.some((c) => a.includes(c))) continue;
    const l = $(t.state);
    if (l !== null) return l;
  }
  return null;
}, Fo = (n) => {
  for (const e of n) {
    if (!e.entity_id.toLowerCase().includes("power_save")) continue;
    const i = String(e.state ?? "").toLowerCase();
    return i === "on" ? { text: "On", value: 1 } : i === "off" ? { text: "Off", value: 0 } : { text: v(e.state), value: null };
  }
  return { text: "—", value: null };
}, Ei = (n) => n.trim().toLowerCase(), No = (n) => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  for (const i of n) {
    if (!i.entity_id.startsWith("sensor.")) continue;
    const s = i.attributes.clients;
    if (Array.isArray(s))
      for (const a of s) {
        if (!a || typeof a != "object") continue;
        const l = a, c = v(l.mac), d = pe(c), u = v(l.name), p = v(l.ip), h = {
          ip: p === "—" ? void 0 : p,
          name: u === "—" ? void 0 : u,
          mac: c === "—" ? void 0 : c
        };
        d.length > 0 && e.set(d, h), u !== "—" && t.set(Ei(u), h);
      }
  }
  return { byMac: e, byName: t };
}, oi = (n, e) => {
  const t = n.macNormalized.length > 0 ? e.byMac.get(n.macNormalized) : void 0, i = e.byName.get(Ei(n.nameRaw)), o = t ?? i;
  if (!o) return n;
  const s = n.mac === "—" ? v(o.mac ?? "—") : n.mac, a = pe(s);
  return {
    ...n,
    ip: n.ip === "—" ? v(o.ip ?? n.ip) : n.ip,
    name: n.name === "—" ? v(o.name ?? n.name) : n.name,
    nameRaw: n.nameRaw === "—" ? v(o.name ?? n.nameRaw) : n.nameRaw,
    hostname: n.hostname === "—" ? v(o.name ?? n.hostname) : n.hostname,
    mac: s,
    macNormalized: a.length > 0 ? a : n.macNormalized
  };
}, Mi = (n, e) => {
  const t = Io(e), i = n.snrValue ?? ni(e, ["snr"]), o = n.signalValue ?? ni(e, ["rssi", " signal"]), s = Fo(e), a = n.connectionType === "wired" && t ? "wifi" : n.connectionType, l = n.connectionType === "wired" && t ? "WiFi" : n.connection;
  return {
    ...n,
    connectionType: a,
    connection: l,
    signal: o !== null ? `${o} dBm` : n.signal,
    signalValue: o,
    signalColor: rt(o),
    snr: i !== null ? `${i} dB` : n.snr,
    snrValue: i,
    powerSave: s.text,
    powerSaveValue: s.value
  };
}, Do = (n, e, t, i, o) => {
  if (e.length === 0 || Oo(e)) return null;
  const s = Lo(e);
  if (!s) return null;
  const a = s.attributes, l = Mo(e), c = Eo(a.type ?? Ti(o?.model)), d = c === "Gateway" || c === "Switch" || c === "Access Point" ? c : "Wired", u = t?.downloadedMB ?? null, p = t?.uploadedMB ?? null, h = u !== null ? u * 1024 * 1024 : null, y = p !== null ? p * 1024 * 1024 : null, g = h !== null || y !== null ? (h ?? 0) + (y ?? 0) : null, b = {
    entity_id: s.entity_id,
    deviceId: n,
    name: v(o?.name_by_user ?? o?.name ?? s.attributes.friendly_name ?? s.entity_id),
    nameRaw: v(o?.name_by_user ?? o?.name ?? s.attributes.friendly_name ?? s.entity_id),
    macNormalized: pe(
      v(
        a.mac ?? a.mac_address ?? o?.connections?.find((w) => String(w[0]).toLowerCase().includes("mac"))?.[1] ?? ""
      )
    ),
    isOnline: l.isOnline,
    statusValue: l.isOnline ? 1 : 0,
    statusColor: l.isOnline ? "#3aa45b" : "#9aa0a6",
    connection: d,
    connectionType: c === "—" ? "wired" : "unknown",
    band: "—",
    bandType: "unknown",
    ip: v(a.ip ?? a.ip_address ?? "—"),
    mac: v(
      a.mac ?? a.mac_address ?? o?.connections?.find((w) => String(w[0]).toLowerCase().includes("mac"))?.[1] ?? "—"
    ),
    hostname: v(a.host_name ?? a.hostname ?? a.name ?? o?.name_by_user ?? o?.name ?? "—"),
    packetsSent: "—",
    packetsSentValue: null,
    packetsReceived: "—",
    packetsReceivedValue: null,
    upSpeed: it(t?.txActivityMBps ?? null, i),
    upSpeedValue: t?.txActivityMBps !== null && t?.txActivityMBps !== void 0 ? t.txActivityMBps * 8 : null,
    downSpeed: it(t?.rxActivityMBps ?? null, i),
    downSpeedValue: t?.rxActivityMBps !== null && t?.rxActivityMBps !== void 0 ? t.rxActivityMBps * 8 : null,
    txRate: "—",
    txRateValue: null,
    rxRate: "—",
    rxRateValue: null,
    onlineTime: Ct(t?.uptimeSeconds ?? null),
    onlineTimeValue: t?.uptimeSeconds ?? null,
    downloaded: j(h),
    downloadedValue: h,
    uploaded: j(y),
    uploadedValue: y,
    trafficUsage: j(g),
    trafficUsageValue: g,
    signal: t?.rssi !== null && t?.rssi !== void 0 ? `${t.rssi} dBm` : "—",
    signalValue: t?.rssi ?? null,
    signalColor: rt(t?.rssi ?? null),
    snr: t?.snr !== null && t?.snr !== void 0 ? `${t.snr} dB` : "—",
    snrValue: t?.snr ?? null,
    powerSave: "—",
    powerSaveValue: null,
    deviceType: c,
    deviceModel: v(o?.model ?? a.model ?? a.device_model ?? "—"),
    deviceFirmware: v(o?.sw_version ?? a.firmware ?? a.firmware_version ?? "—"),
    deviceStatus: l.raw !== "unknown" ? v(l.raw) : v(a.status ?? "—")
  };
  return Ri(Mi(b, e), o);
}, Bo = (n, e, t) => {
  const i = /* @__PURE__ */ new Map();
  if (!t || e.length === 0) return i;
  for (const o of e) {
    if (o.config_entry_id !== t || !o.device_id || !o.entity_id.startsWith("sensor.")) continue;
    const s = n[o.entity_id];
    s && (i.has(o.device_id) || i.set(o.device_id, $o()), Ro(s, i.get(o.device_id)));
  }
  return i;
}, zo = (n, e, t, i) => {
  const o = Object.values(n).filter(
    (a) => Co(a)
  );
  if (!t) return o;
  if (!i && e.length === 0) return [];
  if (i || e.length === 0) return o;
  const s = e.filter((a) => a.config_entry_id === t).filter((a) => a.entity_id.startsWith("device_tracker.")).map((a) => n[a.entity_id]).filter((a) => a !== void 0);
  return s.length > 0 ? s : [];
}, si = (n, e, t) => {
  const i = n.attributes, o = v(i.friendly_name ?? i.name ?? n.entity_id), s = Ci.has(n.state), { label: a, type: l } = To(i), c = Ao(i), d = c === "2g" ? "2G" : c === "5g" ? "5G" : c === "6g" ? "6G" : "—", u = v(i.ip ?? i.ip_address ?? "—"), p = v(i.mac ?? i.mac_address ?? i.client_mac ?? "—"), h = v(
    i.host_name ?? i.hostname ?? i.hostName ?? i.name ?? i.model ?? "—"
  ), y = $(i.packets_sent ?? i.up_packet ?? i.upPacket), g = $(
    i.packets_received ?? i.down_packet ?? i.downPacket
  ), b = t?.txActivityMBps ?? null, w = t?.rxActivityMBps ?? null, T = b !== null ? b * 8 : null, R = w !== null ? w * 8 : null, E = ii(i, [
    "tx_rate",
    "txRate",
    "link_tx_rate",
    "linkTxRate",
    "tx_link_speed",
    "txLinkSpeed"
  ]), M = ii(i, [
    "rx_rate",
    "rxRate",
    "link_rx_rate",
    "linkRxRate",
    "rx_link_speed",
    "rxLinkSpeed"
  ]), B = Be(E, c, "auto"), ie = Be(M, c, "auto"), G = t?.downloadedMB ?? null, ne = t?.uploadedMB ?? null, oe = G !== null ? G * 1024 * 1024 : null, V = ne !== null ? ne * 1024 * 1024 : null, P = $(i.traffic_down ?? i.trafficDown), q = $(i.traffic_up ?? i.trafficUp), he = $(i.traffic_usage), X = oe ?? P, U = V ?? q, fe = oe !== null || V !== null ? (oe ?? 0) + (V ?? 0) : P !== null || q !== null ? (P ?? 0) + (q ?? 0) : he, z = t?.uptimeSeconds ?? Ai(i.uptime ?? i.online_time ?? i.connected_since) ?? null, N = $(i.rssi ?? i.signal) ?? t?.rssi ?? null, se = $(i.snr) ?? t?.snr ?? null, W = i.power_save ?? i.powerSave, Y = String(W).toLowerCase() === "on" || W === !0 ? 1 : String(W).toLowerCase() === "off" || W === !1 ? 0 : null, xe = Y === 1 ? "On" : Y === 0 ? "Off" : "—", D = tt(i.type), Ve = D.toLowerCase() === "ap" ? "Access Point" : D.toLowerCase() === "gateway" ? "Gateway" : D.toLowerCase() === "switch" ? "Switch" : v(i.connect_dev_type ?? i.connectDevType ?? "—"), at = v(i.model ?? i.device_model ?? "—"), Pe = v(i.firmware ?? i.firmware_version ?? "—"), Ue = v(i.status ?? i.status_category ?? "—");
  return {
    entity_id: n.entity_id,
    name: o,
    nameRaw: o,
    macNormalized: pe(p),
    isOnline: s,
    statusValue: s ? 1 : 0,
    statusColor: s ? "#3aa45b" : "#9aa0a6",
    connection: a,
    connectionType: l,
    band: d,
    bandType: c,
    ip: u,
    mac: p,
    hostname: h,
    packetsSent: Qe(y ?? Number.NaN),
    packetsSentValue: y,
    packetsReceived: Qe(g ?? Number.NaN),
    packetsReceivedValue: g,
    upSpeed: it(b, e),
    upSpeedValue: T,
    downSpeed: it(w, e),
    downSpeedValue: R,
    txRate: et(E, c, "auto"),
    txRateValue: B,
    rxRate: et(M, c, "auto"),
    rxRateValue: ie,
    onlineTime: Ct(z),
    onlineTimeValue: z,
    downloaded: j(X),
    downloadedValue: X,
    uploaded: j(U),
    uploadedValue: U,
    trafficUsage: j(fe),
    trafficUsageValue: fe,
    signal: N !== null ? `${N} dBm` : "—",
    signalValue: N,
    signalColor: rt(N),
    snr: se !== null ? `${se} dB` : "—",
    snrValue: se,
    powerSave: xe,
    powerSaveValue: Y,
    deviceType: Ve,
    deviceModel: at,
    deviceFirmware: Pe,
    deviceStatus: Ue
  };
}, Ho = (n, e, t, i, o, s) => {
  if (!i) return [];
  if (!o && e.length === 0) return [];
  if (o || e.length === 0)
    return zo(n, e, i, o).map(
      (h) => si(h, s)
    );
  const a = e.filter((h) => h.config_entry_id === i);
  if (a.length === 0) return [];
  const l = /* @__PURE__ */ new Map();
  for (const h of a) {
    const y = h.device_id ? `device:${h.device_id}` : `entity:${h.entity_id}`, g = l.get(y) ?? { deviceId: h.device_id, entries: [] };
    g.entries.push(h), l.set(y, g);
  }
  if (l.size === 0) return [];
  const c = Bo(n, e, i), d = new Map(t.map((h) => [h.id, h])), u = No(
    a.map((h) => n[h.entity_id]).filter((h) => h !== void 0)
  ), p = [];
  for (const h of l.values()) {
    const { deviceId: y, entries: g } = h, b = g.map((M) => n[M.entity_id]).filter((M) => M !== void 0);
    if (b.length === 0) continue;
    const w = b.find((M) => M.entity_id.startsWith("device_tracker.")), T = y ? c.get(y) : void 0, R = y ? d.get(y) : void 0;
    if (w) {
      const M = oi(
        Mi(
          {
            ...si(w, s, T),
            deviceId: y
          },
          b
        ),
        {
          byMac: u.byMac,
          byName: u.byName
        }
      );
      p.push(Ri(M, R));
      continue;
    }
    const E = Do(
      y ?? g[0]?.entity_id,
      b,
      T,
      s,
      R
    );
    E && p.push(
      oi(E, u)
    );
  }
  return p;
}, we = [
  "status",
  "connection",
  "band",
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
], Vo = [
  "downloaded",
  "uploaded"
], Li = [
  "deviceType",
  "deviceModel",
  "deviceFirmware",
  "deviceStatus"
], Oi = [
  "actions",
  "snr",
  "powerSave",
  ...Vo
], Po = [
  "deviceType",
  "deviceModel",
  "deviceFirmware",
  "deviceStatus"
], Uo = [
  ...we,
  ...Po
], ri = [
  ...we,
  ...Li,
  ...Oi
], ai = [
  ...we,
  ...Li,
  ...Oi
], li = {
  tplink_router: we,
  tplink_deco: Uo,
  omada: ri,
  tplink_omada: ri
}, Wo = (n) => n && n in li ? li[n] : we, Ko = (n) => {
  const e = n.length > 0 ? Math.max(...n) : 0;
  return e <= 120 ? 100 : e <= 600 ? 300 : e <= 1200 ? 1e3 : e <= 2500 ? 2e3 : e <= 5e3 ? 5e3 : 1e4;
}, ci = (n, e) => {
  const t = Ko(n), i = 0, o = typeof e == "number" ? e : t;
  return o <= i ? { min: i, max: Math.max(i + 1, t) } : { min: i, max: o };
}, jo = (n, e, t) => {
  if (n === null || !Number.isFinite(n) || n <= 0) return "rate--na";
  const i = Math.min(Math.max(n, e), t), o = Math.max(t - e, 1), s = (i - e) / o;
  return s < 0.1 ? "ud-rate--bad" : s < 0.22 ? "ud-rate--poor" : s < 0.38 ? "ud-rate--fair" : s < 0.54 ? "ud-rate--good" : s < 0.66 ? "ud-rate--great" : s < 0.75 ? "ud-rate--excellent" : "ud-rate--ultra";
}, di = (n) => {
  if (!Number.isFinite(n)) return "0";
  const e = Math.abs(n);
  return e >= 100 ? n.toFixed(0) : e >= 10 ? n.toFixed(1) : n.toFixed(2);
}, ui = (n) => n === null || !Number.isFinite(n) || n <= 0 ? "rate--na" : n < 10 ? "rate--bad" : n < 30 ? "rate--poor" : n < 100 ? "rate--fair" : n < 300 ? "rate--good" : n < 1e3 ? "rate--great" : n < 2e3 ? "rate--excellent" : "rate--ultra", Q = {
  band: "all",
  connection: "all",
  status: "all"
}, Go = /* @__PURE__ */ new Set(["all", "2g", "5g", "6g"]), qo = /* @__PURE__ */ new Set([
  "all",
  "wifi",
  "wired",
  "iot",
  "guest"
]), Xo = /* @__PURE__ */ new Set(["all", "online", "offline"]), mt = "none", pi = 1e3, Yo = "0.4.1", hi = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), Xe = "__saved__", fi = /* @__PURE__ */ new Set([
  "tplink_router",
  "tplink_deco",
  "omada",
  "tplink_omada"
]), Jo = /* @__PURE__ */ new Set([
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
]), Zo = 5 * 60 * 1e3, Qo = 20 * 1e3, ce = {
  tap: 8,
  holdStart: 12,
  holdCommit: [16, 22, 16],
  actionPress: [12, 24, 10],
  actionOn: [16, 20, 16],
  actionOff: 46,
  error: [26, 40, 26]
}, es = (n) => /^[0-9a-f:-]+$/i.test(n), nt = (n) => /^\d{1,3}(\.\d{1,3}){3}$/.test(n), _i = (n) => {
  if (!n) return;
  const e = n.trim();
  if (!e) return;
  if (nt(e)) return e;
  try {
    const i = new URL(e);
    if (nt(i.hostname)) return i.hostname;
  } catch {
  }
  const t = e.match(/(\d{1,3}(?:\.\d{1,3}){3})/);
  return t ? t[1] : void 0;
}, ge = (n, e) => n == null ? e == null ? 0 : 1 : e == null ? -1 : typeof n == "number" && typeof e == "number" ? n - e : new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" }).compare(String(n), String(e)), ts = (n) => {
  if (/(2\.4|2_4|2g|2ghz|24g)/i.test(n)) return "2g";
  if (/(5g|5ghz)/i.test(n)) return "5g";
  if (/(6g|6ghz)/i.test(n)) return "6g";
}, mi = (n) => {
  if (n == null) return !0;
  if (typeof n == "number") return !Number.isFinite(n);
  if (typeof n == "string") {
    const e = n.trim();
    return e.length === 0 || e === "—";
  }
  return !1;
}, ot = class ot extends Oe {
  constructor() {
    super(...arguments), this._entries = [], this._entityRegistry = [], this._error = null, this._filter = "", this._sorts = [], this._filters = { ...Q }, this._holdStates = {}, this._holdTimers = {}, this._holdAnimationIds = {}, this._loading = !1, this._loaded = !1, this._registryFailed = !1, this._deviceRegistry = [], this._filtersLoaded = !1, this._showExportButton = !1, this._speedTooltip = null, this._selectedActionDeviceId = null, this._isShiftPressed = !1, this._tableScrolledLeft = !1, this._tableScrolledRight = !1, this._lastRegistryRefreshAt = 0, this._pendingVisibilityRefresh = !1, this._isPageVisible = !0, this._isCardVisible = !0, this._stickyStartColumnKeys = [], this._stickyEndColumnKeys = [], this._handleVisibilityChange = () => {
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
    }, s = /* @__PURE__ */ new Set(["name", ...ai]), a = this._resolveConfiguredColumnLayoutFromInput(o.column_layout, s) ?? this._normalizeLegacyColumnsToLayout(o.columns, s), l = o, c = this._resolveConfiguredDefaultFilters(o), d = typeof l.upload_speed_color_max == "number" ? l.upload_speed_color_max : 1e3, u = typeof l.download_speed_color_max == "number" ? l.download_speed_color_max : 100;
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
      column_layout: a.length > 0 ? a : void 0,
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
    return this._config?.show_hidden_entities ? Zo : Qo;
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
    this._vibrate(ce.tap);
  }
  _hapticHoldStart() {
    this._vibrate(ce.holdStart);
  }
  _hapticHoldCommit() {
    this._vibrate(ce.holdCommit);
  }
  _hapticActionOutcome(e) {
    if (e === "switch_on") {
      this._vibrate(ce.actionOn);
      return;
    }
    if (e === "switch_off") {
      this._vibrate(ce.actionOff);
      return;
    }
    this._vibrate(ce.actionPress);
  }
  _hapticError() {
    this._vibrate(ce.error);
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
    const s = /* @__PURE__ */ new Map();
    for (const c of o) {
      const d = c.dataset.colKey;
      d && s.set(d, c.getBoundingClientRect().width);
    }
    let a = 0;
    for (const c of this._stickyStartColumnKeys) {
      const d = s.get(c) ?? 0;
      this._setStickyOffset(t, c, "start", a), a += d;
    }
    let l = 0;
    for (const c of [...this._stickyEndColumnKeys].reverse()) {
      const d = s.get(c) ?? 0;
      this._setStickyOffset(t, c, "end", l), l += d;
    }
  }
  _setStickyOffset(e, t, i, o) {
    const s = `[data-col-key="${t}"]`, a = Array.from(e.querySelectorAll(s));
    for (const l of a)
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
    return i && i !== "router" ? !1 : "wireless" in t || "guest" in t || "ssid" in t || "ap_name" in t || "ap_mac" in t || "switch_port" in t || "channel_width" in t || "radio" in t;
  }
  _buildIncrementalEntityCandidates(e, t) {
    const i = this._entityRegistry.filter((s) => s.config_entry_id === e).map((s) => s.entity_id), o = Object.values(this.hass?.states ?? {}).filter((s) => s.entity_id.startsWith("device_tracker.")).filter((s) => t === "omada" || t === "tplink_omada" ? this._looksLikeOmadaTracker(s) : s.attributes.source_type === "router").map((s) => s.entity_id);
    return Array.from(/* @__PURE__ */ new Set([...i, ...o]));
  }
  _mergeEntityRegistryFromResponse(e, t) {
    const i = new Map(this._entityRegistry.map((o) => [o.entity_id, o]));
    for (const o of e) {
      const s = t[o];
      if (!s || typeof s != "object") {
        i.delete(o);
        continue;
      }
      const a = {
        entity_id: typeof s.entity_id == "string" && s.entity_id.trim() ? s.entity_id : o,
        platform: typeof s.platform == "string" && s.platform.trim() ? s.platform : i.get(o)?.platform ?? "",
        config_entry_id: typeof s.config_entry_id == "string" ? s.config_entry_id : void 0,
        device_id: typeof s.device_id == "string" ? s.device_id : void 0,
        hidden_by: typeof s.hidden_by == "string" ? s.hidden_by : s.hidden_by === null ? null : void 0,
        disabled_by: typeof s.disabled_by == "string" ? s.disabled_by : s.disabled_by === null ? null : void 0,
        options: s.options && typeof s.options == "object" ? s.options : void 0
      };
      a.platform && i.set(o, a);
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
            const s = (await this.hass.callWS({
              type: "config_entries/get",
              domain: t
            })).filter(
              (a) => fi.has(a.domain)
            );
            if (s.length > 0) {
              const a = new Map(
                this._entries.map((l) => [l.entry_id, l])
              );
              s.forEach((l) => a.set(l.entry_id, l)), this._entries = [...a.values()], this._entries.forEach((l) => gt.set(l.entry_id, l.title));
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
        e && (this._entries = e.filter((o) => fi.has(o.domain)), this._entries.forEach((o) => gt.set(o.entry_id, o.title))), t ? (this._entityRegistry = t, this._registryFailed = !1) : this._registryFailed = !0, i && (this._deviceRegistry = i), this._filtersLoaded || this._restoreFilters(this._selectedEntryId), !e && !t && (this._error = qe(this.hass, "errors.lists")), this._loaded = !0, this._lastRegistryRefreshAt = Date.now();
      } catch {
        this._error = qe(this.hass, "errors.lists");
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
    const t = this._entries.find((s) => s.entry_id === e)?.domain;
    if (t) return t;
    const i = this._entityRegistry.filter((s) => s.config_entry_id === e);
    if (i.length === 0) return;
    const o = new Set(
      i.map((s) => s.platform ? String(s.platform).toLowerCase() : "").filter((s) => s.length > 0)
    );
    if (o.has("omada") || o.has("tplink_omada")) return "omada";
    if (o.has("tplink_router")) return "tplink_router";
    if (o.has("tplink_deco")) return "tplink_deco";
  }
  _normalizeBandFilter(e) {
    if (typeof e != "string") return null;
    const t = e.trim().toLowerCase();
    return Go.has(t) ? t : null;
  }
  _normalizeConnectionFilter(e) {
    if (typeof e != "string") return null;
    const t = e.trim().toLowerCase();
    return t === "lan" ? "wired" : qo.has(t) ? t : null;
  }
  _normalizeStatusFilter(e) {
    if (typeof e != "string") return null;
    const t = e.trim().toLowerCase();
    return Xo.has(t) ? t : null;
  }
  _normalizeColumnFixed(e) {
    if (typeof e == "number")
      return e === 1 ? "start" : e === 2 ? "end" : void 0;
    if (typeof e != "string") return;
    const t = e.trim().toLowerCase();
    if (!(!t || t === mt) && (t === "start" || t === "end"))
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
    for (const s of e) {
      let a, l, c, d;
      if (typeof s == "string")
        a = s;
      else if (s && typeof s == "object") {
        const b = s;
        a = b.key, l = b.fixed, c = b.name, d = b.max_width ?? b.maxWidth, a === void 0 && b[0] !== void 0 && (a = b[0], l = b[1], c = b[2], d = b[3]);
      } else
        continue;
      if (typeof a != "string") continue;
      const u = a.trim();
      if (!u || i.has(u) || !t.has(u)) continue;
      const p = this._normalizeColumnFixed(l), h = this._normalizeColumnName(c), y = this._normalizeColumnMaxWidth(d), g = { key: u };
      p !== void 0 && (g.fixed = p), h !== void 0 && (g.name = h), y !== void 0 && (g.max_width = y), o.push(g), i.add(u);
    }
    return o.length > 0 ? o : null;
  }
  _normalizeLegacyColumnsToLayout(e, t) {
    if (!Array.isArray(e) || e.length === 0) return [];
    const i = /* @__PURE__ */ new Set(), o = [];
    for (const s of e) {
      if (typeof s != "string") continue;
      const a = s.trim();
      !a || i.has(a) || !t.has(a) || (o.push({ key: a }), i.add(a));
    }
    return o;
  }
  _resolveConfiguredColumnLayout(e) {
    return this._resolveConfiguredColumnLayoutFromInput(this._config?.column_layout, e);
  }
  _resolveConfiguredDefaultFilters(e) {
    if (!e) return null;
    const t = e.default_filters ?? {}, i = (p) => typeof p == "string" && (p.trim().length === 0 || p.trim() === Xe) ? void 0 : p, o = e.default_filter_band !== void 0 ? e.default_filter_band : t.band, s = e.default_filter_connection !== void 0 ? e.default_filter_connection : t.connection, a = e.default_filter_status !== void 0 ? e.default_filter_status : t.status, l = i(o), c = i(s), d = i(a);
    return l !== void 0 || c !== void 0 || d !== void 0 ? {
      band: this._normalizeBandFilter(l) ?? Q.band,
      connection: this._normalizeConnectionFilter(c) ?? Q.connection,
      status: this._normalizeStatusFilter(d) ?? Q.status
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
    this._filtersLoaded = !1, e !== this._config?.entry_id && (this._filters = { ...Q }), this._restoreFilters(this._config?.entry_id);
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
        const o = this._normalizeBandFilter(i.band) ?? Q.band, s = this._normalizeConnectionFilter(i.connection) ?? Q.connection, a = this._normalizeStatusFilter(i.status) ?? Q.status;
        this._filters = { band: o, connection: s, status: a }, this._filtersLoaded = !0;
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
    const i = e.shiftKey, o = this._sorts.findIndex((c) => c.key === t), s = o >= 0 ? this._sorts[o] : null;
    let a = "asc";
    if (s && (a = s.direction === "asc" ? "desc" : null), !i) {
      this._sorts = a ? [{ key: t, direction: a }] : [];
      return;
    }
    const l = [...this._sorts];
    a ? o >= 0 ? l[o] = { key: t, direction: a } : l.push({ key: t, direction: a }) : o >= 0 && l.splice(o, 1), this._sorts = l;
  }
  _openSpeedTooltip(e, t) {
    const i = e.currentTarget;
    if (!i) return;
    this._speedTooltipHideTimer !== void 0 && (window.clearTimeout(this._speedTooltipHideTimer), this._speedTooltipHideTimer = void 0), this._speedTooltipOpenTimer !== void 0 && (window.clearTimeout(this._speedTooltipOpenTimer), this._speedTooltipOpenTimer = void 0);
    const o = i.getBoundingClientRect(), s = 180, a = 10, l = o.left + o.width / 2, c = s / 2 + a, d = window.innerWidth - s / 2 - a, p = {
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
    for (const s of e) {
      const a = s.entity_id.split(".", 1)[0];
      if (o && !o.has(a)) continue;
      const l = `${s.entity_id} ${String(s.attributes.friendly_name ?? "")}`.toLowerCase();
      if (t.some((c) => l.includes(c)))
        return s.entity_id;
    }
  }
  _resolveShiftEntityForColumn(e, t, i) {
    if (!this._isOmadaDomain(this._resolveEntryDomain(i))) return null;
    const o = e.deviceId ? this._getStatesForDevice(i, e.deviceId) : this._getEntryStates(i).filter((s) => s.entity_id === e.entity_id);
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
    return this._isOmadaDomain(e) && Jo.has(t) && this._hasMeaningfulCellValue(i, t) && !!this._resolveShiftEntityForColumn(i, t, o);
  }
  _handleShiftEntityCellClick(e, t, i, o) {
    if (!(e.shiftKey || this._isShiftPressed) || e.target?.closest("button, a, input, select, textarea")) return;
    const a = this._resolveShiftEntityForColumn(t, i, o);
    a && (e.preventDefault(), e.stopPropagation(), this._showMoreInfo(a));
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
    const t = hi.get(e);
    if (this._loading && this._entityRegistry.length === 0 && !this._registryFailed && t)
      return t;
    const o = this._resolveEntryDomain(e);
    if (!o)
      return t || [];
    let s = [];
    if (o === "omada" || o === "tplink_omada")
      s = Ho(
        this.hass.states,
        this._entityRegistry,
        this._deviceRegistry,
        e,
        this._registryFailed,
        this._config?.speed_unit ?? "MBps"
      );
    else {
      const a = co(
        this.hass.states,
        this._entityRegistry,
        e,
        this._registryFailed
      ), l = lo(a), c = new Map(
        this._entityRegistry.filter((d) => d.entity_id.startsWith("device_tracker.") && d.device_id).map((d) => [d.entity_id, d.device_id])
      );
      s = a.map(
        (d) => ({
          ...ko(
            d,
            this._config?.speed_unit ?? "MBps",
            l
          ),
          deviceId: c.get(d.entity_id)
        })
      );
    }
    return (s.length > 0 || !this._loading) && hi.set(e, s), s.length === 0 && t && this._loading ? t : s;
  }
  _isGlobalCommonAction(e) {
    return e.includes("data fetching") || e.includes("scanning") || e.includes("wlan optimization") || e.includes("rf planning") || e.includes("ai optimization");
  }
  _requiresHoldAction(e, t) {
    return !!(t.includes("reboot") || t.includes("restart") || t.includes("reconnect") || t.includes("wlan optimization") || t.includes("rf planning") || e === "switch" && (t.includes("wifi") || t.includes("wlan") || t.includes("radio") || t.includes("ssid") || t.includes("guest") || t.includes("iot") || t.includes("block") || t.includes("blocked")));
  }
  _getActionItems(e) {
    if (!this.hass || !e || this._entityRegistry.length === 0) return [];
    const t = this._entityRegistry.filter((a) => a.config_entry_id === e), i = new Map(t.map((a) => [a.entity_id, a])), o = new Map(this._deviceRegistry.map((a) => [a.id, a]));
    return t.map((a) => this.hass?.states[a.entity_id]).filter((a) => a !== void 0).filter((a) => this._shouldIncludeActionEntity(i.get(a.entity_id))).filter(
      (a) => a.entity_id.startsWith("switch.") || a.entity_id.startsWith("button.")
    ).map((a) => {
      const l = a.entity_id.split(".")[0], c = String(
        a.attributes.friendly_name ?? a.entity_id
      ), d = `${a.entity_id} ${c}`.toLowerCase(), u = i.get(a.entity_id), p = u?.device_id ?? u?.entity_id, h = p ? o.get(p) : void 0, y = d.includes(" block") || d.includes("_block") || d.includes("block_") || d.includes("blocked"), g = d.includes("reconnect"), b = d.includes("wlan optimization") || d.includes("rf planning") || d.includes("ai optimization"), w = d.includes("reboot") || d.includes("restart"), T = y ? "block" : g ? "reconnect" : b ? "wlanOptimization" : w ? "reboot" : "toggle", R = (() => {
        const B = a.attributes.icon;
        return typeof B == "string" && B.trim().length > 0 ? B : l === "button" ? "mdi:gesture-tap-button" : "mdi:toggle-switch";
      })(), E = a.state === "on", M = a.state !== "unavailable";
      return {
        entity_id: a.entity_id,
        domain: l,
        label: c,
        icon: R,
        isOn: E,
        available: M,
        requiresHold: this._requiresHoldAction(l, d),
        band: ts(d),
        deviceId: p,
        deviceName: h?.name_by_user ?? h?.name,
        role: T
      };
    }).filter((a) => a !== null);
  }
  _collectInfrastructureActionDeviceIds(e) {
    const t = /* @__PURE__ */ new Map();
    for (const o of e) {
      if (!o.deviceId) continue;
      const s = t.get(o.deviceId) ?? [];
      s.push(`${o.entity_id} ${o.label}`.toLowerCase()), t.set(o.deviceId, s);
    }
    const i = /* @__PURE__ */ new Set();
    for (const [o, s] of t.entries())
      s.some(
        (l) => l.includes("reboot") || l.includes("restart") || l.includes(" radio") || l.includes("radio_") || l.includes("_radio") || l.includes("ssid") || l.includes("_wlan") || l.includes("guest wifi") || l.includes("iot wifi") || l.includes("wlan")
      ) && i.add(o);
    return i;
  }
  _getHeaderActionItems(e, t, i) {
    return e.map((o) => {
      const s = no(
        o.domain,
        o.entity_id,
        o.label,
        t
      );
      if (!s) return null;
      const a = `${o.entity_id} ${o.label}`.toLowerCase(), l = this._isGlobalCommonAction(a), c = o.deviceId ? i.has(o.deviceId) : !1;
      return !l && !c ? null : {
        ...o,
        ...s,
        isGlobalCommon: l
      };
    }).filter((o) => o !== null);
  }
  _getRowActionsByDevice(e) {
    const t = /* @__PURE__ */ new Map();
    for (const i of e) {
      if (!i.deviceId) continue;
      const o = `${i.entity_id} ${i.label}`.toLowerCase();
      if (this._isGlobalCommonAction(o)) continue;
      const s = t.get(i.deviceId) ?? [];
      s.push(i), t.set(i.deviceId, s);
    }
    for (const i of t.values())
      i.sort((o, s) => {
        const a = o.domain === s.domain ? 0 : o.domain === "button" ? -1 : 1;
        return a !== 0 ? a : ge(o.label, s.label);
      });
    return t;
  }
  _buildActionDeviceOptions(e) {
    return so(e, this._deviceRegistry);
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
    ), s = (i.length > 0 ? i : t).map((l) => this.hass?.states[l.entity_id]).filter((l) => l !== void 0).map((l) => l.entity_id), a = (l) => l.find((c) => /(router|device|status|wan)/i.test(c)) ?? l[0];
    return a(s.filter((l) => l.startsWith("sensor."))) || a(s.filter((l) => l.startsWith("switch."))) || a(s.filter((l) => l.startsWith("button."))) || a(s.filter((l) => l.startsWith("device_tracker."))) || s[0];
  }
  async _handleAction(e) {
    if (!this.hass?.callService || !e.available) return "button_press";
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
          await new Promise((a) => {
            window.setTimeout(a, 300);
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
      const s = o.attributes;
      if ([
        s.ip,
        s.ip_address,
        s.local_ip,
        s.router_ip,
        s.wan_ip,
        s.host,
        s.hostname,
        s.host_name,
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
    const t = uo(this._entityRegistry, e).map((c) => this._deviceRegistry.find((d) => d.id === c)).filter((c) => c !== void 0);
    if (t.length === 0) return;
    const i = this._entries.find((c) => c.entry_id === e)?.title ?? "", o = t.find((c) => c.configuration_url);
    if (o) return o;
    const s = t.find(
      (c) => (c.manufacturer ?? "").toLowerCase().includes("tp")
    );
    if (s) return s;
    const a = t.find(
      (c) => (c.model ?? "").toLowerCase().includes("archer")
    );
    if (a) return a;
    const l = t.find((c) => {
      const d = (c.name_by_user ?? c.name ?? "").toLowerCase();
      return i && d.includes(i.toLowerCase());
    });
    return l || t[0];
  }
  _getPublicIp(e) {
    for (const t of e) {
      const i = t.entity_id.toLowerCase(), o = t.attributes, s = [
        typeof o.public_ip == "string" ? o.public_ip : null,
        typeof o.wan_ip == "string" ? o.wan_ip : null,
        typeof o.wan_ipaddr == "string" ? o.wan_ipaddr : null,
        typeof o.external_ip == "string" ? o.external_ip : null,
        typeof o.internet_ip == "string" ? o.internet_ip : null,
        typeof o.ip == "string" ? o.ip : null,
        typeof t.state == "string" ? t.state : null
      ].filter(Boolean);
      if (i.includes("public") || i.includes("wan") || i.includes("external")) {
        const a = s.find((l) => nt(l));
        if (a) return a;
      }
    }
  }
  _getRouterStats(e) {
    const t = (a) => {
      const l = $(a);
      if (l !== null) return l;
      if (typeof a == "string") {
        const c = a.match(/-?\d+(\.\d+)?/);
        if (c) {
          const d = Number(c[0]);
          return Number.isFinite(d) ? d : null;
        }
      }
      return null;
    }, i = (a) => {
      for (const l of e) {
        const c = l.entity_id.toLowerCase();
        if (!a.some((p) => c.includes(p))) continue;
        const d = l.attributes, u = t(l.state) ?? t(d.value) ?? t(d.native_value) ?? t(d.state);
        if (u !== null) return u;
      }
      return null;
    }, o = i(["cpu"]), s = i(["mem", "memory", "ram"]);
    return {
      cpu: o !== null ? `${o.toFixed(0)}%` : void 0,
      mem: s !== null ? `${s.toFixed(0)}%` : void 0
    };
  }
  _findAttr(e, t) {
    for (const i of e) {
      const o = i.attributes;
      for (const s of t) {
        const a = o[s];
        if (typeof a == "string" && a.trim().length > 0) return a.trim();
        if (typeof a == "number" && Number.isFinite(a)) return String(a);
      }
    }
  }
  _normalizeUrl(e) {
    if (!e) return;
    const t = e.trim();
    if (t) {
      if (t.startsWith("http://") || t.startsWith("https://")) return t;
      if (nt(t)) return `http://${t}`;
    }
  }
  _getLocalUrl(e, t, i) {
    const o = _i(e);
    if (o) return `http://${o}`;
    const s = this._normalizeUrl(t?.configuration_url);
    if (s) return s;
    const a = this._findAttr(i, [
      "configuration_url",
      "router_url",
      "url",
      "host",
      "ip",
      "ip_address",
      "router_ip",
      "local_ip"
    ]), l = this._normalizeUrl(a);
    return l || this._normalizeUrl(e);
  }
  _getRouterDetails(e, t) {
    const i = t?.model ?? this._findAttr(e, ["model", "router_model", "device_model", "product_model"]), o = t?.manufacturer ?? this._findAttr(e, ["manufacturer", "vendor", "brand"]), s = t?.sw_version ?? this._findAttr(e, ["sw_version", "firmware", "firmware_version", "fw_version"]), a = t?.hw_version ?? this._findAttr(e, ["hw_version", "hardware", "hardware_version"]), l = t?.connections?.find((c) => c[0].toLowerCase().includes("mac"))?.[1] ?? this._findAttr(e, ["mac", "mac_address", "router_mac", "wan_mac"]);
    return { model: i, manufacturer: o, swVersion: s, hwVersion: a, mac: l };
  }
  _buildDebugExportPayload() {
    const e = this._selectedEntryId, t = e ? this._entries.find((d) => d.entry_id === e) : void 0, i = this._resolveEntryDomain(e), o = e ? this._entityRegistry.filter((d) => d.config_entry_id === e) : this._entityRegistry, s = new Set(
      o.map((d) => d.device_id).filter((d) => typeof d == "string" && d.length > 0)
    ), a = this._deviceRegistry.filter((d) => s.has(d.id)), l = o.map((d) => this.hass?.states[d.entity_id]).filter((d) => d !== void 0), c = this._getEntityRows();
    return {
      meta: {
        card: "ha-tplink-router-card",
        version: Yo,
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
        device_registry: a.length,
        states: l.length
      },
      rows: c,
      entity_registry: o,
      device_registry: a,
      states: l
    };
  }
  _downloadDebugExport() {
    this._hapticTap();
    const e = io(this._buildDebugExportPayload(), {
      limits: {
        maxDepth: 8,
        maxNodes: 3e4,
        maxArrayLength: 4e3,
        maxObjectKeys: 300,
        maxStringLength: 2e3
      }
    }), t = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), i = URL.createObjectURL(t), o = document.createElement("a"), s = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
    o.href = i, o.download = `tplink-router-card-export-${s}.json`, document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(i);
  }
  _startHold(e, t) {
    if (!t.requiresHold || !t.available) return;
    e.preventDefault(), e.stopPropagation(), this._hapticHoldStart();
    const i = t.entity_id;
    this._holdAnimationIds[i] && (cancelAnimationFrame(this._holdAnimationIds[i]), delete this._holdAnimationIds[i]), this._holdTimers[i] && (window.clearTimeout(this._holdTimers[i]), delete this._holdTimers[i]), this._holdStates[i] = { progress: 0, completed: !1 }, this.requestUpdate();
    const o = performance.now(), s = () => {
      const a = performance.now() - o, l = Math.min(a / pi, 1);
      if (this._holdStates[i] = { progress: l, completed: l >= 1 }, this.requestUpdate(), l >= 1) {
        delete this._holdAnimationIds[i], this._hapticHoldCommit(), this._invokeAction(t, { fromHold: !0 }), this._holdTimers[i] = window.setTimeout(() => {
          this._holdStates[i] = { progress: 0, completed: !1 }, this.requestUpdate(), delete this._holdTimers[i];
        }, 820);
        return;
      }
      this._holdAnimationIds[i] = requestAnimationFrame(s);
    };
    this._holdAnimationIds[i] = requestAnimationFrame(s);
  }
  _cancelHold(e, t) {
    if (!t.requiresHold) return;
    e.preventDefault(), e.stopPropagation();
    const i = t.entity_id;
    this._holdStates[i]?.completed || (this._holdAnimationIds[i] && (cancelAnimationFrame(this._holdAnimationIds[i]), delete this._holdAnimationIds[i]), this._holdTimers[i] && (window.clearTimeout(this._holdTimers[i]), delete this._holdTimers[i]), this._holdStates[i]?.progress && (this._holdStates[i] = { progress: 0, completed: !1 }, this.requestUpdate()));
  }
  render() {
    if (!this._config) return f``;
    const e = (r, m) => qe(this.hass, r, m), t = this._selectedEntryId, i = t ? this._entries.find((r) => r.entry_id === t) : void 0, o = t ? gt.get(t) : void 0, s = this._resolveEntryDomain(t), a = this._getEntityRows(), l = new Set(a.map((r) => r.bandType).filter((r) => r !== "unknown")), c = new Set(
      a.map((r) => r.connectionType).filter((r) => r !== "unknown")
    ), d = [
      "all",
      ...["2g", "5g", "6g"].filter((r) => l.has(r))
    ], u = [
      "all",
      ...["wifi", "wired", "iot", "guest"].filter(
        (r) => c.has(r)
      )
    ], p = a.some((r) => r.isOnline), h = a.some((r) => !r.isOnline), y = [
      "all",
      ...p ? ["online"] : [],
      ...h ? ["offline"] : []
    ], g = d.includes(this._filters.band) ? this._filters.band : "all", b = u.includes(
      this._filters.connection
    ) ? this._filters.connection : "all", w = y.includes(this._filters.status) ? this._filters.status : "all", T = this._filter.trim(), R = this._parseRegexSearch(T), E = T.toLowerCase(), M = pe(E), B = !R && E.length > 1 && es(E), ie = a.filter((r) => {
      const m = this._buildRowSearchValues(r), _ = m.join(" ");
      if (T) {
        if (R) {
          if (!m.some((O) => (R.lastIndex = 0, R.test(O)))) return !1;
        } else if (B) {
          if (!r.macNormalized.includes(M)) return !1;
        } else if (!_.toLowerCase().includes(E)) return !1;
      }
      const L = g;
      if (L !== "all" && r.bandType !== L) return !1;
      const A = b, C = r.connectionType;
      if (A !== "all" && C !== A) return !1;
      const k = w;
      return !(k !== "all" && (k === "online" && !r.isOnline || k === "offline" && r.isOnline));
    }), G = [
      { key: "name", label: e("columns.name"), sort: (r) => r.nameRaw },
      { key: "status", label: e("columns.status"), sort: (r) => r.statusValue },
      {
        key: "connection",
        label: e("columns.connection"),
        sort: (r) => r.connection
      },
      {
        key: "band",
        label: e("columns.band"),
        sort: (r) => r.connectionType === "wired" ? 0 : r.bandType === "2g" ? 1 : r.bandType === "5g" ? 2 : r.bandType === "6g" ? 3 : r.connectionType === "wifi" ? 4 : null
      },
      { key: "ip", label: e("columns.ip"), sort: (r) => r.ip },
      { key: "mac", label: e("columns.mac"), sort: (r) => r.mac },
      {
        key: "hostname",
        label: e("columns.hostname"),
        sort: (r) => r.hostname
      },
      {
        key: "packetsSent",
        label: e("columns.packetsSent"),
        sort: (r) => r.packetsSentValue
      },
      {
        key: "packetsReceived",
        label: e("columns.packetsReceived"),
        sort: (r) => r.packetsReceivedValue
      },
      {
        key: "down",
        label: e("columns.down"),
        sort: (r) => r.downSpeedValue
      },
      { key: "up", label: e("columns.up"), sort: (r) => r.upSpeedValue },
      { key: "tx", label: e("columns.tx"), sort: (r) => r.txRateValue },
      { key: "rx", label: e("columns.rx"), sort: (r) => r.rxRateValue },
      {
        key: "online",
        label: e("columns.online"),
        sort: (r) => r.onlineTimeValue
      },
      {
        key: "downloaded",
        label: e("columns.downloaded"),
        sort: (r) => r.downloadedValue
      },
      {
        key: "uploaded",
        label: e("columns.uploaded"),
        sort: (r) => r.uploadedValue
      },
      {
        key: "traffic",
        label: e("columns.traffic"),
        sort: (r) => r.trafficUsageValue
      },
      { key: "signal", label: e("columns.signal"), sort: (r) => r.signalValue },
      { key: "snr", label: e("columns.snr"), sort: (r) => r.snrValue },
      {
        key: "powerSave",
        label: e("columns.powerSave"),
        sort: (r) => r.powerSaveValue
      },
      {
        key: "deviceType",
        label: e("columns.deviceType"),
        sort: (r) => r.deviceType
      },
      {
        key: "deviceModel",
        label: e("columns.deviceModel"),
        sort: (r) => r.deviceModel
      },
      {
        key: "deviceFirmware",
        label: e("columns.deviceFirmware"),
        sort: (r) => r.deviceFirmware
      },
      {
        key: "deviceStatus",
        label: e("columns.deviceStatus"),
        sort: (r) => r.deviceStatus
      },
      {
        key: "actions",
        label: e("columns.actions"),
        sort: (r) => Rt.get(r.deviceId ?? "")?.length ?? null
      }
    ], ne = Array.isArray(this._config?.columns) ? this._config.columns : [], oe = Array.isArray(this._config?.column_layout) ? this._config.column_layout.map((r) => r && typeof r == "object" ? r.key : void 0).filter((r) => typeof r == "string") : [], V = /* @__PURE__ */ new Set([
      "name",
      ...Wo(s),
      ...ne,
      ...oe
    ]), P = new Map(G.map((r) => [r.key, r])), q = G.filter((r) => V.has(r.key)).map((r) => r.key), he = this._config?.columns && this._config.columns.length > 0 ? this._config.columns : q, U = Array.from(new Set(he)).filter((r) => V.has(r)).map((r) => ({ key: r })), z = (this._resolveConfiguredColumnLayout(V) ?? U).map((r) => {
      const m = P.get(r.key);
      return m ? {
        ...r,
        col: m
      } : null;
    }).filter((r) => r !== null), N = z.length > 0 ? z : q.map((r) => {
      const m = P.get(r);
      return m ? { key: r, fixed: void 0, name: void 0, max_width: void 0, col: m } : null;
    }).filter((r) => r !== null), se = N.map((r) => r.col);
    this._stickyStartColumnKeys = N.filter((r) => r.fixed === "start").map((r) => r.key), this._stickyEndColumnKeys = N.filter((r) => r.fixed === "end").map((r) => r.key);
    const W = this._stickyStartColumnKeys[this._stickyStartColumnKeys.length - 1], Y = this._stickyEndColumnKeys[0], xe = new Set(se.map((r) => r.key)), D = this._sorts.filter((r) => xe.has(r.key)), Ve = [...ie].sort((r, m) => {
      for (const _ of D) {
        const L = P.get(_.key);
        if (!L) continue;
        const A = L.sort(r), C = L.sort(m), k = mi(A), x = mi(C);
        if (k && x) continue;
        if (k) return 1;
        if (x) return -1;
        const O = ge(A, C);
        if (O !== 0) return _.direction === "asc" ? O : -O;
      }
      return 0;
    }), at = a.filter((r) => r.isOnline).length, Pe = !!this._config?.txrx_color, Ue = !!this._config?.updown_color, Ii = a.filter((r) => r.isOnline).map((r) => r.upSpeedValue).filter((r) => typeof r == "number" && Number.isFinite(r)), Fi = a.filter((r) => r.isOnline).map((r) => r.downSpeedValue).filter((r) => typeof r == "number" && Number.isFinite(r)), Ni = ci(
      Ii,
      this._config?.upload_speed_color_max
    ), Di = ci(
      Fi,
      this._config?.download_speed_color_max
    ), At = (r, m, _, L) => {
      if (r === null || !Number.isFinite(r) || r <= 0) return m;
      const A = Math.max(_, 1), k = {
        percent: Math.max(0, Math.min(100, r / A * 100)).toFixed(1),
        transfer: wt(r * 1e6 / 8, "MBps"),
        mbps: di(r),
        max: di(A)
      };
      return f`
        <span
          class="speed-value"
          @mouseenter=${(x) => this._openSpeedTooltip(x, k)}
          @mouseleave=${() => this._closeSpeedTooltip()}
        >
          ${L ? f`<span class="rate ${jo(r, 0, A)}">${m}</span>` : m}
        </span>
      `;
    }, lt = this._getActionItems(t), Bi = this._collectInfrastructureActionDeviceIds(lt), Tt = this._getHeaderActionItems(
      lt,
      s,
      Bi
    ), Rt = this._getRowActionsByDevice(lt), ke = Math.max(1, Math.round(pi / 1e3)), F = this._getActionRenderMode("header"), ct = this._getActionRenderMode("row"), $e = this._getRouterEntityId(t), We = i?.title ?? o, Et = this._getEntryStates(t).filter(
      (r) => !r.entity_id.startsWith("device_tracker.")
    ), Mt = $e ? this._getDeviceIdForEntity($e) : void 0, Lt = _i(We), Ot = Lt ? this._findDeviceIdByIp(Et, Lt) : void 0, _e = (Mt ? this._deviceRegistry.find((r) => r.id === Mt) : void 0) ?? (Ot ? this._deviceRegistry.find((r) => r.id === Ot) : void 0) ?? this._getRouterDevice(t), It = this._getStatesForDevice(t, _e?.id), Ke = It.length > 0 ? It.filter((r) => !r.entity_id.startsWith("device_tracker.")) : Et, Se = this._getLocalUrl(We, _e, Ke), Ft = this._getPublicIp(Ke), zi = this._getRouterStats(Ke), K = this._getRouterDetails(Ke, _e), Hi = [
      K.model ?? null,
      K.manufacturer ? `by ${K.manufacturer}` : null,
      K.swVersion ? `Firmware: ${K.swVersion}` : null,
      K.hwVersion ? `Hardware: ${K.hwVersion}` : null,
      K.mac ? `MAC: ${K.mac}` : null
    ].filter(Boolean).join(`
`), dt = s === "omada" || s === "tplink_omada", Nt = e(dt ? "card.controllerLabel" : "card.routerLabel"), Vi = t ? `${Nt}: ${dt ? We ?? t : Se ?? We ?? t}` : e(dt ? "card.controllerNotSelected" : "card.routerNotSelected"), Pi = !!this._config?.hide_header, Ui = !!this._config?.hide_filter_section, Dt = d.length > 1, Bt = u.length > 1, zt = y.length > 1, Wi = Dt || Bt || zt, Ce = this._buildActionDeviceOptions(Tt), re = Ce.find((r) => r.deviceId === this._selectedActionDeviceId)?.deviceId ?? Ce[0]?.deviceId, Ht = Ce.find((r) => r.deviceId === re)?.deviceName ?? _e?.name_by_user ?? _e?.name, ut = re ?? _e?.id, Ki = Ht ? e("actions.goToDevice", { name: Ht }) : e("actions.router"), Vt = re ? this._getStatesForDevice(t, re) : [], me = Vt.length > 0 ? this._getRouterStats(Vt) : zi, je = Tt.filter((r) => r.isGlobalCommon || !re ? !0 : r.deviceId === re), J = {
      host: je.filter((r) => r.kind === "host").sort(
        (r, m) => ge(
          { "2g": 1, "5g": 2, "6g": 3 }[r.band ?? "2g"],
          { "2g": 1, "5g": 2, "6g": 3 }[m.band ?? "2g"]
        )
      ),
      guest: je.filter((r) => r.kind === "guest").sort(
        (r, m) => ge(
          { "2g": 1, "5g": 2, "6g": 3 }[r.band ?? "2g"],
          { "2g": 1, "5g": 2, "6g": 3 }[m.band ?? "2g"]
        )
      ),
      iot: je.filter((r) => r.kind === "iot").sort(
        (r, m) => ge(
          { "2g": 1, "5g": 2, "6g": 3 }[r.band ?? "2g"],
          { "2g": 1, "5g": 2, "6g": 3 }[m.band ?? "2g"]
        )
      ),
      router: je.filter((r) => r.kind === "router").sort((r, m) => {
        const _ = (A) => {
          const C = `${A.entity_id} ${A.label}`.toLowerCase();
          return C.includes("reconnect") ? 0 : C.includes("wlan optimization") || C.includes("rf planning") ? 1 : C.includes("reboot") || C.includes("restart") ? 2 : 10;
        }, L = _(r) - _(m);
        return L !== 0 ? L : ge(r.label, m.label);
      })
    }, ji = this._config?.shift_click_underline !== !1, Ge = F === "icon" ? "action-group" : "action-group action-group--wide", Gi = [
      this._isShiftPressed ? "shift-mode" : "",
      ji ? "shift-underline-enabled" : "shift-underline-disabled"
    ].filter((r) => r.length > 0).join(" ");
    return f`
      <ha-card class=${Gi}>
        <div class="header ${Pi ? "hidden" : ""}">
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
                      @click=${(r) => {
      r.preventDefault(), r.stopPropagation(), this._downloadDebugExport();
    }}
                    >
                      <ha-icon icon="mdi:download"></ha-icon>
                    </button>
                  ` : ""}
            </div>
            <div class="actions">
              ${Ce.length > 1 ? f`
                    <select
                      class="action-device-select"
                      .value=${re ?? ""}
                      @change=${this._actionDeviceChanged}
                      title=${e("actions.targetDevice")}
                    >
                      ${Ce.map(
      (r) => f`
                          <option value=${r.deviceId}>${r.deviceName}</option>
                        `
    )}
                    </select>
                  ` : S}
              ${J.host.length ? f`
                    <div class=${Ge} title=${e("actions.wifi")}>
                      ${J.host.map(
      (r) => {
        const m = this._holdStates[r.entity_id] ?? {
          progress: 0,
          completed: !1
        };
        return f`
                            <button
                              class="icon-toggle ${F === "icon_name" ? "with-label" : F === "name" ? "name-only" : ""} ${m.progress > 0 ? "holding" : ""} ${m.completed ? "completed" : ""}"
                              data-kind="host"
                              data-role=${r.role ?? "toggle"}
                              data-state=${r.isOn ? "on" : "off"}
                              title=${r.requiresHold ? e("actions.holdWithLabel", { seconds: ke, label: r.label }) : r.label}
                              style=${`--hold-progress:${m.progress}`}
                              ?disabled=${!r.available}
                              @pointerdown=${(_) => this._startHold(_, r)}
                              @pointerup=${(_) => this._cancelHold(_, r)}
                              @pointerleave=${(_) => this._cancelHold(_, r)}
                              @pointercancel=${(_) => this._cancelHold(_, r)}
                              @click=${(_) => {
          if (_.shiftKey) {
            this._showMoreInfo(r.entity_id);
            return;
          }
          if (r.requiresHold) {
            _.preventDefault();
            return;
          }
          this._invokeAction(r);
        }}
                            >
                              ${this._renderActionButtonContent(r, F)}
                            </button>
                          `;
      }
    )}
                    </div>
                  ` : ""}
              ${J.guest.length ? f`
                    <div class=${Ge} title=${e("actions.guest")}>
                      ${J.guest.map(
      (r) => {
        const m = this._holdStates[r.entity_id] ?? {
          progress: 0,
          completed: !1
        };
        return f`
                            <button
                              class="icon-toggle ${F === "icon_name" ? "with-label" : F === "name" ? "name-only" : ""} ${m.progress > 0 ? "holding" : ""} ${m.completed ? "completed" : ""}"
                              data-kind="guest"
                              data-role=${r.role ?? "toggle"}
                              data-state=${r.isOn ? "on" : "off"}
                              title=${r.requiresHold ? e("actions.holdWithLabel", { seconds: ke, label: r.label }) : r.label}
                              style=${`--hold-progress:${m.progress}`}
                              ?disabled=${!r.available}
                              @pointerdown=${(_) => this._startHold(_, r)}
                              @pointerup=${(_) => this._cancelHold(_, r)}
                              @pointerleave=${(_) => this._cancelHold(_, r)}
                              @pointercancel=${(_) => this._cancelHold(_, r)}
                              @click=${(_) => {
          if (_.shiftKey) {
            this._showMoreInfo(r.entity_id);
            return;
          }
          if (r.requiresHold) {
            _.preventDefault();
            return;
          }
          this._invokeAction(r);
        }}
                            >
                              ${this._renderActionButtonContent(r, F)}
                            </button>
                          `;
      }
    )}
                    </div>
                  ` : ""}
              ${J.iot.length ? f`
                    <div class=${Ge} title=${e("actions.iot")}>
                      ${J.iot.map(
      (r) => {
        const m = this._holdStates[r.entity_id] ?? {
          progress: 0,
          completed: !1
        };
        return f`
                            <button
                              class="icon-toggle ${F === "icon_name" ? "with-label" : F === "name" ? "name-only" : ""} ${m.progress > 0 ? "holding" : ""} ${m.completed ? "completed" : ""}"
                              data-kind="iot"
                              data-role=${r.role ?? "toggle"}
                              data-state=${r.isOn ? "on" : "off"}
                              title=${r.requiresHold ? e("actions.holdWithLabel", { seconds: ke, label: r.label }) : r.label}
                              style=${`--hold-progress:${m.progress}`}
                              ?disabled=${!r.available}
                              @pointerdown=${(_) => this._startHold(_, r)}
                              @pointerup=${(_) => this._cancelHold(_, r)}
                              @pointerleave=${(_) => this._cancelHold(_, r)}
                              @pointercancel=${(_) => this._cancelHold(_, r)}
                              @click=${(_) => {
          if (_.shiftKey) {
            this._showMoreInfo(r.entity_id);
            return;
          }
          if (r.requiresHold) {
            _.preventDefault();
            return;
          }
          this._invokeAction(r);
        }}
                            >
                              ${this._renderActionButtonContent(r, F)}
                            </button>
                          `;
      }
    )}
                    </div>
                  ` : ""}
              ${J.router.length ? f`
                    <div class=${Ge} title=${e("actions.router")}>
                      ${J.router.map(
      (r) => {
        const m = this._holdStates[r.entity_id] ?? {
          progress: 0,
          completed: !1
        };
        return f`
                            <button
                              class="icon-toggle ${F === "icon_name" ? "with-label" : F === "name" ? "name-only" : ""} ${m.progress > 0 ? "holding" : ""} ${m.completed ? "completed" : ""}"
                              data-kind="router"
                              data-role=${r.role ?? "toggle"}
                              data-state=${r.isOn ? "on" : "off"}
                              title=${r.requiresHold ? e("actions.holdWithLabel", { seconds: ke, label: r.label }) : r.label}
                              style=${`--hold-progress:${m.progress}`}
                              ?disabled=${!r.available}
                              @pointerdown=${(_) => this._startHold(_, r)}
                              @pointerup=${(_) => this._cancelHold(_, r)}
                              @pointerleave=${(_) => this._cancelHold(_, r)}
                              @pointercancel=${(_) => this._cancelHold(_, r)}
                              @click=${(_) => {
          if (_.shiftKey) {
            this._showMoreInfo(r.entity_id);
            return;
          }
          if (r.requiresHold) {
            _.preventDefault();
            return;
          }
          this._invokeAction(r);
        }}
                            >
                              ${this._renderActionButtonContent(r, F)}
                            </button>
                          `;
      }
    )}
                    </div>
                  ` : ""}
            </div>
          </div>

          <div class="router-row">
            <div class="router-left">
              <span class="router-label">
                ${t && Se ? f`
                      ${Nt}:
                      <a
                        class="router-link"
                        href=${Se}
                        target="_blank"
                        rel="noopener noreferrer"
                        title=${Hi || Se}
                        @click=${() => this._hapticTap()}
                      >
                        ${Se}
                      </a>
                    ` : Vi}
              </span>
            </div>
            <div class="router-right">
              ${Ft ? f`<span class="router-public">${Ft}</span>` : ""}
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
              <span class="chip">${e("card.devicesCount", { count: ie.length })}</span>
              ${me.cpu ? f`
                    <span
                      class="chip stat"
                      title=${e("card.cpuUsage", { value: me.cpu })}
                    >
                      <ha-icon icon="mdi:cpu-64-bit"></ha-icon>${me.cpu}
                    </span>
                  ` : ""}
              ${me.mem ? f`
                    <span
                      class="chip stat"
                      title=${e("card.memUsage", { value: me.mem })}
                    >
                      <ha-icon icon="mdi:memory"></ha-icon>${me.mem}
                    </span>
                  ` : ""}
              ${ut || $e ? f`
                    <button
                      class="icon-button"
                      title=${Ki}
                      @click=${() => {
      ut ? this._openDevicePage(ut) : $e && this._showMoreInfo($e);
    }}
                    >
                      <ha-icon icon="mdi:router-wireless"></ha-icon>
                    </button>
                  ` : ""}
            </div>
          </div>
        </div>

        <div class="filter-row ${Ui || !Wi ? "hidden" : ""}">
          ${Dt ? f`
                <div class="filter-group">
                  <button
                    class="filter-button ${g === "all" ? "active" : ""}"
                    data-group="band"
                    data-value="all"
                    @click=${this._filterButtonClick}
                  >
                    ${e("filters.all")}
                  </button>
                  ${d.includes("2g") ? f`
                        <button
                          class="filter-button ${g === "2g" ? "active" : ""}"
                          data-group="band"
                          data-value="2g"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.band2")}
                        </button>
                      ` : ""}
                  ${d.includes("5g") ? f`
                        <button
                          class="filter-button ${g === "5g" ? "active" : ""}"
                          data-group="band"
                          data-value="5g"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.band5")}
                        </button>
                      ` : ""}
                  ${d.includes("6g") ? f`
                        <button
                          class="filter-button ${g === "6g" ? "active" : ""}"
                          data-group="band"
                          data-value="6g"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.band6")}
                        </button>
                      ` : ""}
                </div>
              ` : ""}

          ${Bt ? f`
                <div class="filter-group">
                  <button
                    class="filter-button ${b === "all" ? "active" : ""}"
                    data-group="connection"
                    data-value="all"
                    @click=${this._filterButtonClick}
                  >
                    ${e("filters.all")}
                  </button>
                  ${u.includes("wifi") ? f`
                        <button
                          class="filter-button icon ${b === "wifi" ? "active" : ""}"
                          data-group="connection"
                          data-value="wifi"
                          title=${e("filters.wifi")}
                          @click=${this._filterButtonClick}
                        >
                          <ha-icon icon="mdi:wifi"></ha-icon>
                        </button>
                      ` : ""}
                  ${u.includes("wired") ? f`
                        <button
                          class="filter-button icon ${b === "wired" ? "active" : ""}"
                          data-group="connection"
                          data-value="wired"
                          title=${e("filters.wired")}
                          @click=${this._filterButtonClick}
                        >
                          <ha-icon icon="mdi:lan"></ha-icon>
                        </button>
                      ` : ""}
                  ${u.includes("iot") ? f`
                        <button
                          class="filter-button icon ${b === "iot" ? "active" : ""}"
                          data-group="connection"
                          data-value="iot"
                          title=${e("filters.iot")}
                          @click=${this._filterButtonClick}
                        >
                          <ha-icon icon="mdi:chip"></ha-icon>
                        </button>
                      ` : ""}
                  ${u.includes("guest") ? f`
                        <button
                          class="filter-button icon ${b === "guest" ? "active" : ""}"
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

          ${zt ? f`
                <div class="filter-group">
                  <button
                    class="filter-button ${w === "all" ? "active" : ""}"
                    data-group="status"
                    data-value="all"
                    @click=${this._filterButtonClick}
                  >
                    ${e("filters.all")}
                  </button>
                  ${y.includes("online") ? f`
                        <button
                          class="filter-button ${w === "online" ? "active" : ""}"
                          data-group="status"
                          data-value="online"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.online")}
                        </button>
                      ` : ""}
                  ${y.includes("offline") ? f`
                        <button
                          class="filter-button ${w === "offline" ? "active" : ""}"
                          data-group="status"
                          data-value="offline"
                          @click=${this._filterButtonClick}
                        >
                          ${e("filters.offline")}
                        </button>
                      ` : ""}
                </div>
              ` : ""}
          <span class="chip compact">${e("card.onlineCount", { online: at, total: a.length })}</span>
        </div>

        ${this._error ? f`<div class="empty">${this._error}</div>` : t ? Ve.length === 0 ? f`<div class="empty">${e("card.noDevices")}</div>` : f`
                  <div
                    class="table-wrapper ${this._tableScrolledLeft ? "table-wrapper--scrolled-left" : ""} ${this._tableScrolledRight ? "table-wrapper--scrolled-right" : ""}"
                    @scroll=${this._handleTableScroll}
                  >
                    <table>
                      <thead>
                        <tr>
                          ${N.map(({ col: r, fixed: m, name: _, max_width: L }) => {
      const A = D.findIndex((ae) => ae.key === r.key), C = A >= 0 ? D[A].direction : null, k = _?.trim().length ? _.trim() : r.label, x = L ? `max-width:${L};` : "", O = !!(L && (m === void 0 || r.key === "name")), I = [
        r.key === "actions" ? "actions-cell" : "",
        m === "start" ? "sticky-start" : "",
        m === "end" ? "sticky-end" : "",
        m === "start" && r.key === W ? "sticky-start-edge" : "",
        m === "end" && r.key === Y ? "sticky-end-edge" : "",
        O ? "column-ellipsis" : ""
      ].filter((ae) => ae.length > 0).join(" ");
      return f`
                              <th class=${I} data-col-key=${r.key} style=${x}>
                                <button
                                  class="sort-button"
                                  aria-sort=${C ? C === "asc" ? "ascending" : "descending" : "none"}
                                  @click=${(ae) => this._toggleSort(ae, r.key)}
                                >
                                  <span>${k}</span>
                                  ${C ? f`
                                        <span class="sort-indicator ${C}">
                                          ${C === "asc" ? "▲" : "▼"}
                                        </span>
                                        ${this._sorts.length > 1 ? f`<span class="sort-order">${A + 1}</span>` : ""}
                                      ` : ""}
                                </button>
                              </th>
                            `;
    })}
                        </tr>
                      </thead>
                      <tbody>
                        ${Ve.map(
      (r) => {
        const m = !r.isOnline, _ = this._isNameClickable(r, s), L = s === "tplink_router" && !!r.deviceId, A = e("actions.goToDevice", { name: r.name }), C = {
          name: _ ? f`
                        <span class="name-cell">
                          <button
                            class="link"
                            @click=${(k) => this._handleNameClick(k, r, s)}
                          >
                            ${r.name}
                          </button>
                          ${L && r.deviceId ? f`
                                <button
                                  class="name-device-link"
                                  title=${A}
                                  @click=${(k) => {
            k.preventDefault(), k.stopPropagation(), this._openDevicePage(r.deviceId);
          }}
                                >
                                  <ha-icon icon="mdi:router-wireless"></ha-icon>
                                </button>
                              ` : S}
                        </span>
                      ` : f`<span class="name-text">${r.name}</span>`,
          status: f`
                                <span class="status">
                                  <span class="status-dot" style=${`background:${r.statusColor}`}></span>
                                  ${r.isOnline ? e("status.online") : e("status.offline")}
                                </span>
                              `,
          connection: r.connection,
          band: m ? "—" : r.connectionType === "wired" ? f`
                                      <span class="band-pill band-wired">
                                        <ha-icon class="band-icon" icon="mdi:lan"></ha-icon>
                                        <span class="band-label">LAN</span>
                                      </span>
                                    ` : r.band === "—" ? r.connectionType === "wifi" ? f`
                                      <span class="band-pill band-wifi">
                                        <ha-icon class="band-icon" icon="mdi:wifi"></ha-icon>
                                      </span>
                                    ` : "—" : f`
                                      <span class="band-pill band-${r.bandType}">
                                        <ha-icon class="band-icon" icon="mdi:wifi"></ha-icon>
                                        <span class="band-label">
                                          ${r.bandType === "2g" ? "2.4G" : r.bandType === "5g" ? "5G" : r.bandType === "6g" ? "6G" : r.band}
                                        </span>
                                      </span>
                                    `,
          ip: r.ip,
          mac: r.mac,
          hostname: r.hostname,
          packetsSent: r.packetsSent,
          packetsReceived: r.packetsReceived,
          up: m ? "—" : At(
            r.upSpeedValue,
            r.upSpeed,
            Ni.max,
            Ue
          ),
          down: m ? "—" : At(
            r.downSpeedValue,
            r.downSpeed,
            Di.max,
            Ue
          ),
          tx: m ? "—" : Pe ? f`
                                      <span class="rate ${ui(r.txRateValue)}">
                                        ${r.txRate}
                                      </span>
                                    ` : r.txRate,
          rx: m ? "—" : Pe ? f`
                                      <span class="rate ${ui(r.rxRateValue)}">
                                        ${r.rxRate}
                                      </span>
                                    ` : r.rxRate,
          online: r.onlineTime,
          downloaded: r.downloaded,
          uploaded: r.uploaded,
          traffic: r.trafficUsage,
          deviceType: r.deviceType ?? "—",
          deviceModel: r.deviceModel ?? "—",
          deviceFirmware: r.deviceFirmware ?? "—",
          deviceStatus: r.deviceStatus ?? "—",
          actions: (() => {
            const k = r.deviceId ? Rt.get(r.deviceId) ?? [] : [];
            return k.length === 0 ? "—" : f`
                      <span class="row-actions">
                        ${k.map((x) => {
              const O = this._holdStates[x.entity_id] ?? {
                progress: 0,
                completed: !1
              };
              return f`
                            <button
                              class="icon-toggle row-action ${ct === "icon_name" ? "with-label" : ct === "name" ? "name-only" : ""} ${O.progress > 0 ? "holding" : ""} ${O.completed ? "completed" : ""}"
                              data-role=${x.role ?? "toggle"}
                              data-state=${x.isOn ? "on" : "off"}
                              title=${x.requiresHold ? e("actions.holdWithLabel", {
                seconds: ke,
                label: x.label
              }) : x.label}
                              style=${`--hold-progress:${O.progress}`}
                              ?disabled=${!x.available}
                              @pointerdown=${(I) => this._startHold(I, x)}
                              @pointerup=${(I) => this._cancelHold(I, x)}
                              @pointerleave=${(I) => this._cancelHold(I, x)}
                              @pointercancel=${(I) => this._cancelHold(I, x)}
                              @click=${(I) => {
                if (I.shiftKey) {
                  this._showMoreInfo(x.entity_id);
                  return;
                }
                if (x.requiresHold) {
                  I.preventDefault();
                  return;
                }
                this._invokeAction(x);
              }}
                            >
                              ${this._renderActionButtonContent(x, ct)}
                            </button>
                          `;
            })}
                      </span>
                    `;
          })(),
          signal: m || r.connectionType === "wired" ? "—" : f`
                                    <span class="signal">
                                      <span class="signal-dot" style=${`background:${r.signalColor}`}></span>
                                      ${r.signal}
                                    </span>
                                  `,
          snr: m || r.connectionType === "wired" ? "—" : r.snr,
          powerSave: r.powerSave
        };
        return f`
                              <tr>
                                ${N.map(
          ({ col: k, fixed: x, max_width: O }) => {
            const I = this._isShiftEntityCellClickable(
              s,
              k.key,
              r,
              t
            ), ae = O ? `max-width:${O};` : "", qi = !!(O && (x === void 0 || k.key === "name")), Xi = !!(O && x === void 0), Yi = [
              k.key === "actions" ? "actions-cell" : "",
              x === "start" ? "sticky-start" : "",
              x === "end" ? "sticky-end" : "",
              x === "start" && k.key === W ? "sticky-start-edge" : "",
              x === "end" && k.key === Y ? "sticky-end-edge" : "",
              Xi ? "cell-ellipsis" : "",
              I ? "shift-entity-clickable" : ""
            ].filter((pt) => pt.length > 0).join(" "), Ji = qi ? "cell-content cell-content-ellipsis" : "cell-content";
            return f`
                      <td
                        class=${Yi}
                        data-col-key=${k.key}
                        style=${ae}
                        @click=${(pt) => I ? this._handleShiftEntityCellClick(pt, r, k.key, t) : void 0}
                      >
                        <span class=${Ji}>${C[k.key]}</span>
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
            ` : S}
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
    const e = () => document.querySelector("home-assistant")?.hass, t = (d) => qe(e(), d), i = ["name", ...ai].map((d) => ({
      value: d,
      label: t(`columns.${d}`)
    })), o = [
      { value: Xe, label: t("editor.defaultFilterUnset") },
      { value: "all", label: t("filters.all") },
      { value: "2g", label: t("filters.band2") },
      { value: "5g", label: t("filters.band5") },
      { value: "6g", label: t("filters.band6") }
    ], s = [
      { value: Xe, label: t("editor.defaultFilterUnset") },
      { value: "all", label: t("filters.all") },
      { value: "wifi", label: t("filters.wifi") },
      { value: "wired", label: t("filters.wired") },
      { value: "iot", label: t("filters.iot") },
      { value: "guest", label: t("filters.guest") }
    ], a = [
      { value: Xe, label: t("editor.defaultFilterUnset") },
      { value: "all", label: t("filters.all") },
      { value: "online", label: t("filters.online") },
      { value: "offline", label: t("filters.offline") }
    ], l = [
      { value: "icon", label: t("editor.actionRenderIcon") },
      { value: "name", label: t("editor.actionRenderName") },
      { value: "icon_name", label: t("editor.actionRenderIconAndName") }
    ], c = [
      { value: mt, label: t("editor.columnFixedNone") },
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
              options: s
            }
          }
        },
        {
          name: "default_filter_status",
          selector: {
            select: {
              mode: "dropdown",
              options: a
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
                  default: mt,
                  label: t("editor.columnLayoutFixedOptional"),
                  selector: {
                    select: {
                      mode: "dropdown",
                      options: c
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
      computeLabel: (d) => {
        switch (d.name) {
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
            return d.name ?? "";
        }
      },
      computeHelper: (d) => d.name === "column_layout" ? t("editor.columnLayoutHelp") : d.name === "txrx_color" ? t("editor.txrxColorHelp") : d.name === "updown_color" ? t("editor.updownColorHelp") : d.name === "show_hidden_entities" ? t("editor.showHiddenEntitiesHelp") : d.name === "header_action_render" || d.name === "row_action_render" ? t("editor.actionRenderHelp") : d.name === "shift_click_underline" ? t("editor.shiftClickUnderlineHelp") : d.name === "hide_header" ? t("editor.hideHeaderHelp") : d.name === "hide_filter_section" ? t("editor.hideFilterSectionHelp") : d.name === "default_filter_band" || d.name === "default_filter_connection" || d.name === "default_filter_status" ? t("editor.defaultFilterHelp") : d.name === "upload_speed_color_max" || d.name === "download_speed_color_max" ? t("editor.speedColorHelp") : d.name === "entry_id" ? t("editor.routerHelp") : ""
    };
  }
};
ot.properties = {
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
}, ot.styles = xn;
let xt = ot;
customElements.get("tplink-router-card") || customElements.define("tplink-router-card", xt);
const is = "0.4.1";
window.customCards = window.customCards || [];
window.customCards.push({
  type: "tplink-router-card",
  name: "TP-Link Router Devices",
  description: "List TP-Link router clients with live stats",
  preview: !0
});
console.info(`TPLINK-ROUTER-CARD ${is} loaded`);
