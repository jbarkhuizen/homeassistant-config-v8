/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis, X = B.ShadowRoot && (B.ShadyCSS === void 0 || B.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Y = Symbol(), st = /* @__PURE__ */ new WeakMap();
let _t = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Y) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (X && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = st.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && st.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const yt = (o) => new _t(typeof o == "string" ? o : o + "", void 0, Y), At = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((s, i, n) => s + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[n + 1], o[0]);
  return new _t(e, o, Y);
}, Et = (o, t) => {
  if (X) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = B.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, o.appendChild(s);
  }
}, it = X ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return yt(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ct, defineProperty: wt, getOwnPropertyDescriptor: St, getOwnPropertyNames: xt, getOwnPropertySymbols: Tt, getPrototypeOf: Ht } = Object, A = globalThis, ot = A.trustedTypes, Pt = ot ? ot.emptyScript : "", J = A.reactiveElementPolyfillSupport, R = (o, t) => o, V = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? Pt : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, tt = (o, t) => !Ct(o, t), rt = { attribute: !0, type: String, converter: V, reflect: !1, useDefault: !1, hasChanged: tt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), A.litPropertyMetadata ?? (A.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let T = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = rt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && wt(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: n } = St(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get: i, set(r) {
      const a = i == null ? void 0 : i.call(this);
      n == null || n.call(this, r), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(R("elementProperties"))) return;
    const t = Ht(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(R("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(R("properties"))) {
      const e = this.properties, s = [...xt(e), ...Tt(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(it(i));
    } else t !== void 0 && e.push(it(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Et(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var n;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : V).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n, r;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const a = s.getPropertyOptions(i), c = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((n = a.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? a.converter : V;
      this._$Em = i;
      const h = c.fromAttribute(e, a.type);
      this[i] = h ?? ((r = this._$Ej) == null ? void 0 : r.get(i)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, i = !1, n) {
    var r;
    if (t !== void 0) {
      const a = this.constructor;
      if (i === !1 && (n = this[t]), s ?? (s = a.getPropertyOptions(t)), !((s.hasChanged ?? tt)(n, e) || s.useDefault && s.reflect && n === ((r = this._$Ej) == null ? void 0 : r.get(t)) && !this.hasAttribute(a._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: n }, r) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, r ?? e ?? this[t]), n !== !0 || r !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, r] of i) {
        const { wrapped: a } = r, c = this[n];
        a !== !0 || this._$AL.has(n) || c === void 0 || this.C(n, void 0, r, c);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
      }), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
T.elementStyles = [], T.shadowRootOptions = { mode: "open" }, T[R("elementProperties")] = /* @__PURE__ */ new Map(), T[R("finalized")] = /* @__PURE__ */ new Map(), J == null || J({ ReactiveElement: T }), (A.reactiveElementVersions ?? (A.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis, nt = (o) => o, W = I.trustedTypes, at = W ? W.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, ft = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, gt = "?" + y, Ot = `<${gt}>`, S = document, j = () => S.createComment(""), D = (o) => o === null || typeof o != "object" && typeof o != "function", et = Array.isArray, Ut = (o) => et(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", K = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ct = /-->/g, ht = />/g, E = RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), dt = /'/g, lt = /"/g, $t = /^(?:script|style|textarea|title)$/i, Mt = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), $ = Mt(1), P = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), ut = /* @__PURE__ */ new WeakMap(), C = S.createTreeWalker(S, 129);
function bt(o, t) {
  if (!et(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return at !== void 0 ? at.createHTML(t) : t;
}
const Nt = (o, t) => {
  const e = o.length - 1, s = [];
  let i, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = k;
  for (let a = 0; a < e; a++) {
    const c = o[a];
    let h, l, d = -1, p = 0;
    for (; p < c.length && (r.lastIndex = p, l = r.exec(c), l !== null); ) p = r.lastIndex, r === k ? l[1] === "!--" ? r = ct : l[1] !== void 0 ? r = ht : l[2] !== void 0 ? ($t.test(l[2]) && (i = RegExp("</" + l[2], "g")), r = E) : l[3] !== void 0 && (r = E) : r === E ? l[0] === ">" ? (r = i ?? k, d = -1) : l[1] === void 0 ? d = -2 : (d = r.lastIndex - l[2].length, h = l[1], r = l[3] === void 0 ? E : l[3] === '"' ? lt : dt) : r === lt || r === dt ? r = E : r === ct || r === ht ? r = k : (r = E, i = void 0);
    const g = r === E && o[a + 1].startsWith("/>") ? " " : "";
    n += r === k ? c + Ot : d >= 0 ? (s.push(h), c.slice(0, d) + ft + c.slice(d) + y + g) : c + y + (d === -2 ? a : g);
  }
  return [bt(o, n + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class z {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let n = 0, r = 0;
    const a = t.length - 1, c = this.parts, [h, l] = Nt(t, e);
    if (this.el = z.createElement(h, s), C.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (i = C.nextNode()) !== null && c.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const d of i.getAttributeNames()) if (d.endsWith(ft)) {
          const p = l[r++], g = i.getAttribute(d).split(y), x = /([.?@])?(.*)/.exec(p);
          c.push({ type: 1, index: n, name: x[2], strings: g, ctor: x[1] === "." ? Rt : x[1] === "?" ? It : x[1] === "@" ? jt : F }), i.removeAttribute(d);
        } else d.startsWith(y) && (c.push({ type: 6, index: n }), i.removeAttribute(d));
        if ($t.test(i.tagName)) {
          const d = i.textContent.split(y), p = d.length - 1;
          if (p > 0) {
            i.textContent = W ? W.emptyScript : "";
            for (let g = 0; g < p; g++) i.append(d[g], j()), C.nextNode(), c.push({ type: 2, index: ++n });
            i.append(d[p], j());
          }
        }
      } else if (i.nodeType === 8) if (i.data === gt) c.push({ type: 2, index: n });
      else {
        let d = -1;
        for (; (d = i.data.indexOf(y, d + 1)) !== -1; ) c.push({ type: 7, index: n }), d += y.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = S.createElement("template");
    return s.innerHTML = t, s;
  }
}
function O(o, t, e = o, s) {
  var r, a;
  if (t === P) return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const n = D(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), n === void 0 ? i = void 0 : (i = new n(o), i._$AT(o, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = O(o, i._$AS(o, t.values), i, s)), t;
}
class kt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? S).importNode(e, !0);
    C.currentNode = i;
    let n = C.nextNode(), r = 0, a = 0, c = s[0];
    for (; c !== void 0; ) {
      if (r === c.index) {
        let h;
        c.type === 2 ? h = new q(n, n.nextSibling, this, t) : c.type === 1 ? h = new c.ctor(n, c.name, c.strings, this, t) : c.type === 6 && (h = new Dt(n, this, t)), this._$AV.push(h), c = s[++a];
      }
      r !== (c == null ? void 0 : c.index) && (n = C.nextNode(), r++);
    }
    return C.currentNode = S, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class q {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = O(this, t, e), D(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== P && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ut(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== u && D(this._$AH) ? this._$AA.nextSibling.data = t : this.T(S.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = z.createElement(bt(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(e);
    else {
      const r = new kt(i, this), a = r.u(this.options);
      r.p(e), this.T(a), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = ut.get(t.strings);
    return e === void 0 && ut.set(t.strings, e = new z(t)), e;
  }
  k(t) {
    et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const n of t) i === e.length ? e.push(s = new q(this.O(j()), this.O(j()), this, this.options)) : s = e[i], s._$AI(n), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t !== this._$AB; ) {
      const i = nt(t).nextSibling;
      nt(t).remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class F {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, n) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  _$AI(t, e = this, s, i) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) t = O(this, t, e, 0), r = !D(t) || t !== this._$AH && t !== P, r && (this._$AH = t);
    else {
      const a = t;
      let c, h;
      for (t = n[0], c = 0; c < n.length - 1; c++) h = O(this, a[s + c], e, c), h === P && (h = this._$AH[c]), r || (r = !D(h) || h !== this._$AH[c]), h === u ? t = u : t !== u && (t += (h ?? "") + n[c + 1]), this._$AH[c] = h;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Rt extends F {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
class It extends F {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== u);
  }
}
class jt extends F {
  constructor(t, e, s, i, n) {
    super(t, e, s, i, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = O(this, t, e, 0) ?? u) === P) return;
    const s = this._$AH, i = t === u && s !== u || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== u && (s === u || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Dt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    O(this, t);
  }
}
const G = I.litHtmlPolyfillSupport;
G == null || G(z, q), (I.litHtmlVersions ?? (I.litHtmlVersions = [])).push("3.3.2");
const zt = (o, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new q(t.insertBefore(j(), n), n, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = globalThis;
class H extends T {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = zt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return P;
  }
}
var pt;
H._$litElement$ = !0, H.finalized = !0, (pt = w.litElementHydrateSupport) == null || pt.call(w, { LitElement: H });
const Q = w.litElementPolyfillSupport;
Q == null || Q({ LitElement: H });
(w.litElementVersions ?? (w.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt = (o) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(o, t);
  }) : customElements.define(o, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lt = { attribute: !0, type: String, converter: V, reflect: !1, hasChanged: tt }, qt = (o = Lt, t, e) => {
  const { kind: s, metadata: i } = e;
  let n = globalThis.litPropertyMetadata.get(i);
  if (n === void 0 && globalThis.litPropertyMetadata.set(i, n = /* @__PURE__ */ new Map()), s === "setter" && ((o = Object.create(o)).wrapped = !0), n.set(e.name, o), s === "accessor") {
    const { name: r } = e;
    return { set(a) {
      const c = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(r, c, o, !0, a);
    }, init(a) {
      return a !== void 0 && this.C(r, void 0, o, a), a;
    } };
  }
  if (s === "setter") {
    const { name: r } = e;
    return function(a) {
      const c = this[r];
      t.call(this, a), this.requestUpdate(r, c, o, !0, a);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function Z(o) {
  return (t, e) => typeof e == "object" ? qt(o, t, e) : ((s, i, n) => {
    const r = i.hasOwnProperty(n);
    return i.constructor.createProperty(n, s), r ? Object.getOwnPropertyDescriptor(i, n) : void 0;
  })(o, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function U(o) {
  return Z({ ...o, state: !0, attribute: !1 });
}
var Bt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, f = (o, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Vt(t, e) : t, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = (s ? r(t, e, i) : r(i)) || i);
  return s && i && Bt(t, e, i), i;
};
let b = class extends H {
  constructor() {
    super(...arguments), this._activeTab = 0, this._cardElements = [], this._isHolding = !1, this._activeCardHidden = !1;
  }
  async setConfig(o) {
    this._config = o, await this._createCards();
  }
  async _createCards() {
    const o = await window.loadCardHelpers();
    o && this._config.cards && (this._cardElements = this._config.cards.map((t) => {
      const e = o.createCardElement(t);
      return e.hass = this.hass, e;
    }));
  }
  updated(o) {
    super.updated(o), o.has("hass") && this._cardElements.length > 0 && this._cardElements.forEach((t) => {
      t.hass = this.hass;
    }), setTimeout(() => {
      var e;
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("#card-container");
      if (t) {
        const s = t.offsetHeight === 0;
        this._activeCardHidden !== s && (this._activeCardHidden = s);
      }
    }, 0);
  }
  static getConfigElement() {
    return document.createElement("custom-tab-card-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:custom-tab-card",
      outside_cards: !0,
      cards: [
        {
          type: "picture",
          image: "https://demo.home-assistant.io/stub_config/t-shirt-promo.png"
        },
        {
          type: "picture",
          image: "https://demo.home-assistant.io/stub_config/t-shirt-promo.png"
        }
      ],
      tabs: ["Tab 1", "Tab 2"],
      tab_hold_actions: [{ action: "none" }, { action: "none" }],
      tab_icons: ["", ""]
    };
  }
  _startHold(o) {
    this._isHolding = !1, this._pressingTimer = setTimeout(() => {
      this._pressingTab = o;
    }, 200), this._holdTimer = setTimeout(() => {
      this._isHolding = !0, this._triggerHoldAction(o);
    }, 500);
  }
  _endHold() {
    this._pressingTab = void 0, this._pressingTimer && (clearTimeout(this._pressingTimer), this._pressingTimer = void 0), this._holdTimer && (clearTimeout(this._holdTimer), this._holdTimer = void 0);
  }
  _triggerHoldAction(o) {
    var e;
    const t = (e = this._config.tab_hold_actions) == null ? void 0 : e[o];
    !t || t.action === "none" || (this.dispatchEvent(new CustomEvent("haptic", { detail: "heavy", bubbles: !0, composed: !0 })), this.dispatchEvent(new CustomEvent("hass-action", {
      bubbles: !0,
      composed: !0,
      detail: { config: { hold_action: t }, action: "hold" }
    })));
  }
  render() {
    if (!this._config || !this.hass) return $``;
    const o = this._config.tabs || (this._config.cards ? this._config.cards.map((r, a) => `Tab ${a + 1}`) : []), t = this._config.tab_icons || [], e = Math.min(this._activeTab, Math.max(0, this._cardElements.length - 1)), s = this._config.outside_cards && !this._activeCardHidden, i = this._config.outside_cards && this._activeCardHidden, n = $`
      <div class="tabs-header ${s ? "outside" : ""} ${i ? "isolated" : ""}">
        ${o.map((r, a) => $`
          <div class="tab ${e === a ? "active" : ""} ${this._pressingTab === a ? "pressing" : ""}" 
               @pointerdown=${() => this._startHold(a)}
               @pointerup=${() => this._endHold()}
               @pointerleave=${() => this._endHold()}
               @pointercancel=${() => this._endHold()}
               @contextmenu=${(c) => c.preventDefault()}
               @click=${() => {
      if (this._isHolding) {
        this._isHolding = !1;
        return;
      }
      this._activeTab = a;
    }}>
            ${t[a] ? $`<ha-icon class="tab-icon" .icon=${t[a]}></ha-icon>` : ""}
            <span class="tab-text">${r}</span>
          </div>
        `)}
      </div>
    `;
    return this._config.outside_cards ? $`
        <ha-card class="${s ? "outside-tabs-card" : ""}">${n}</ha-card>
        <div id="card-container" class="outside-card-content">
          ${this._cardElements[e]}
        </div>
      ` : $`
      <ha-card>
        ${n}
        <div id="card-container" class="card-content">
          ${this._cardElements[e]}
        </div>
      </ha-card>
    `;
  }
};
b.styles = At`
    :host {
      --tab-radius: var(--ha-card-border-radius, 12px);
    }

    .tabs-header { 
      display: flex; 
      justify-content: center; 
      background: var(--secondary-background-color); 
      border-bottom: 1px solid var(--divider-color); 
      overflow-x: auto; 
      /* NEW: Match the top corners to the parent card */
      border-top-left-radius: var(--ha-card-border-radius, 12px);
      border-top-right-radius: var(--ha-card-border-radius, 12px);
    }
    .tabs-header.outside {
      border-bottom: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .tabs-header.isolated {
      border-bottom: none;
      border-bottom-left-radius: var(--ha-card-border-radius, 12px);
      border-bottom-right-radius: var(--ha-card-border-radius, 12px);
    }
    ha-card.outside-tabs-card {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-bottom: none !important;
    }
    .tab { 
      flex: 1; 
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-align: center; 
      padding: 12px 20px; 
      cursor: pointer; 
      color: var(--secondary-text-color); 
      border-bottom: 3px solid transparent; 
      white-space: nowrap; 
      font-weight: 500; 
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      position: relative;
      overflow: hidden;
      transition: background-color 0.2s ease;
    }
    .tab::after {
      content: '';
      position: absolute;
      inset: 0;
      background: currentColor;
      opacity: 0;
      transition: opacity 0.2s ease;
      pointer-events: none;
    }
    .tab:hover::after {
      opacity: 0.1;
    }
    .tab::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background-color: var(--primary-color);
      opacity: 0.2;
      pointer-events: none;
      transition: width 0s; /* instantly resets when released */
    }
    .tab.pressing::before {
      width: 100%;
      transition: width 0.3s linear; /* 500ms total hold - 200ms delay */
    }
    .tab.active { color: var(--primary-color); border-bottom-color: var(--primary-color); background: var(--card-background-color); }
    .card-content { padding: 8px; }
    .outside-card-content { margin-top: 0; }
    .outside-card-content > * {
      --ha-card-border-radius: 0 0 var(--tab-radius) var(--tab-radius);
    }
  `;
f([
  Z({ attribute: !1 })
], b.prototype, "hass", 2);
f([
  U()
], b.prototype, "_config", 2);
f([
  U()
], b.prototype, "_activeTab", 2);
f([
  U()
], b.prototype, "_cardElements", 2);
f([
  U()
], b.prototype, "_pressingTab", 2);
f([
  U()
], b.prototype, "_activeCardHidden", 2);
b = f([
  mt("custom-tab-card")
], b);
let L = class extends H {
  _sanitizeConfig(o) {
    return {
      type: "vertical-stack",
      cards: o.cards || []
    };
  }
  async setConfig(o) {
    this._config = o, this._subEditor && this._subEditor.setConfig(this._sanitizeConfig(o));
  }
  async firstUpdated() {
    var o, t;
    try {
      const s = await (await window.loadCardHelpers()).createCardElement({ type: "vertical-stack", cards: [] });
      this._subEditor = await s.constructor.getConfigElement(), this._subEditor.hass = this.hass, this._subEditor.lovelace = this.lovelace, this._subEditor.setConfig(this._sanitizeConfig(this._config)), this._subEditor.addEventListener("config-changed", (n) => {
        n.stopPropagation();
        const r = n.detail.config.cards || [], a = [...this._config.cards || []], c = [...this._config.tabs || []], h = [...this._config.tab_hold_actions || []], l = [...this._config.cards || []], d = [...this._config.tab_icons || []], p = [...this._config.cards || []], g = r.map((M, m) => {
          var v;
          const _ = a.indexOf(M);
          if (_ !== -1) {
            const N = c[_];
            return a[_] = null, N || `Tab ${m + 1}`;
          }
          return r.length === (((v = this._config.cards) == null ? void 0 : v.length) || 0) ? c[m] || `Tab ${m + 1}` : `Tab ${m + 1}`;
        }), x = r.map((M, m) => {
          var v;
          const _ = l.indexOf(M);
          if (_ !== -1) {
            const N = h[_];
            return l[_] = null, N || { action: "none" };
          }
          return r.length === (((v = this._config.cards) == null ? void 0 : v.length) || 0) ? h[m] || { action: "none" } : { action: "none" };
        }), vt = r.map((M, m) => {
          var v;
          const _ = p.indexOf(M);
          if (_ !== -1) {
            const N = d[_];
            return p[_] = null, N || "";
          }
          return r.length === (((v = this._config.cards) == null ? void 0 : v.length) || 0) && d[m] || "";
        });
        this._dispatchEvent({ ...this._config, cards: r, tabs: g, tab_hold_actions: x, tab_icons: vt });
      });
      const i = (o = this.shadowRoot) == null ? void 0 : o.querySelector("#editor-container");
      if (i) {
        i.style.visibility = "hidden", i.appendChild(this._subEditor), this._subEditor.updateComplete && await this._subEditor.updateComplete;
        const n = document.createElement("style");
        n.textContent = `
          ha-form { display: none !important; }
          ha-textfield { display: none !important; }
        `, (t = this._subEditor.shadowRoot) == null || t.appendChild(n), i.style.visibility = "";
      }
    } catch (e) {
      console.error("Failed to load sub-editor:", e);
    }
  }
  updated(o) {
    var t;
    if (super.updated(o), this._subEditor) {
      o.has("hass") && (this._subEditor.hass = this.hass), o.has("lovelace") && (this._subEditor.lovelace = this.lovelace);
      const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("#editor-container");
      e && !e.contains(this._subEditor) && e.appendChild(this._subEditor);
    }
  }
  render() {
    var i, n, r, a;
    const o = ((i = this._config) == null ? void 0 : i.cards) || [], t = ((n = this._config) == null ? void 0 : n.tabs) || [], e = ((r = this._config) == null ? void 0 : r.tab_hold_actions) || [], s = ((a = this._config) == null ? void 0 : a.tab_icons) || [];
    return $`
      <div class="card-config">
        <ha-formfield label="Show cards outside of tab card" style="display: block; margin-bottom: 16px;">
          <ha-switch
            .checked=${this._config.outside_cards === !0}
            @change=${this._handleOutsideCardsChange}
          ></ha-switch>
        </ha-formfield>

        <h3>Tab Configuration</h3>
        
        ${o.length === 0 ? $`<p style="color: var(--secondary-text-color);">Add some cards below to configure their tab names.</p>` : o.map((c, h) => $`
              <div style="border: 1px solid var(--divider-color); border-radius: 8px; padding: 12px; margin-bottom: 12px;">
                <ha-textfield
                  label="Name for Tab ${h + 1}"
                  .value=${t[h] || `Tab ${h + 1}`}
                  .index=${h}
                  @input=${this._handleSingleTabChange}
                  style="width: 100%; margin-bottom: 12px;"
                ></ha-textfield>

                <ha-icon-picker
                  label="Icon for Tab ${h + 1}"
                  .value=${s[h] || ""}
                  .index=${h}
                  @value-changed=${this._handleSingleIconChange}
                  style="width: 100%; margin-bottom: 12px; display: block;"
                ></ha-icon-picker>

                <ha-selector
                  .hass=${this.hass}
                  .selector=${{ ui_action: {} }}
                  .value=${e[h] || { action: "none" }}
                  .label=${"Hold Action"}
                  @value-changed=${(l) => this._handleHoldActionChange(l, h)}
                ></ha-selector>
              </div>
            `)}

        <hr style="border: 0; border-bottom: 1px solid var(--divider-color); margin: 20px 0;">
        
        <div id="editor-container"></div>
      </div>
    `;
  }
  // --- NEW: Handle individual tab name changes ---
  _handleSingleTabChange(o) {
    const t = o.target.index, e = o.target.value, s = [...this._config.tabs || []];
    s[t] = e, this._dispatchEvent({ ...this._config, tabs: s });
  }
  _handleSingleIconChange(o) {
    const t = o.target.index, e = o.detail.value, s = [...this._config.tab_icons || []];
    s[t] = e, this._dispatchEvent({ ...this._config, tab_icons: s });
  }
  _handleHoldActionChange(o, t) {
    const e = [...this._config.tab_hold_actions || []];
    e[t] = o.detail.value, this._dispatchEvent({ ...this._config, tab_hold_actions: e });
  }
  _handleOutsideCardsChange(o) {
    this._dispatchEvent({ ...this._config, outside_cards: o.target.checked });
  }
  _dispatchEvent(o) {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: o },
      bubbles: !0,
      composed: !0
    }));
  }
};
f([
  Z({ attribute: !1 })
], L.prototype, "hass", 2);
f([
  Z({ attribute: !1 })
], L.prototype, "lovelace", 2);
f([
  U()
], L.prototype, "_config", 2);
L = f([
  mt("custom-tab-card-editor")
], L);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "custom-tab-card",
  name: "TabCard",
  preview: !0,
  description: "A custom card that renders a vertical stack as tabs."
});
export {
  b as CustomTabCard,
  L as CustomTabCardEditor
};
