//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@lit/reactive-element/css-tag.js
var t$2, e$4, s$2, o$4, n$3, r$4, i$3, S$1, c$2;
var init_css_tag = __esmMin((() => {
	t$2 = globalThis, e$4 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$4 = /* @__PURE__ */ new WeakMap();
	n$3 = class {
		constructor(t, e, o) {
			if (this._$cssResult$ = !0, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
			this.cssText = t, this.t = e;
		}
		get styleSheet() {
			let t = this.o;
			const s = this.t;
			if (e$4 && void 0 === t) {
				const e = void 0 !== s && 1 === s.length;
				e && (t = o$4.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$4.set(s, t));
			}
			return t;
		}
		toString() {
			return this.cssText;
		}
	};
	r$4 = (t) => new n$3("string" == typeof t ? t : t + "", void 0, s$2), i$3 = (t, ...e) => {
		return new n$3(1 === t.length ? t[0] : e.reduce((e, s, o) => e + ((t) => {
			if (!0 === t._$cssResult$) return t.cssText;
			if ("number" == typeof t) return t;
			throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
		})(s) + t[o + 1], t[0]), t, s$2);
	}, S$1 = (s, o) => {
		if (e$4) s.adoptedStyleSheets = o.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
		else for (const e of o) {
			const o = document.createElement("style"), n = t$2.litNonce;
			void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
		}
	}, c$2 = e$4 ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((t) => {
		let e = "";
		for (const s of t.cssRules) e += s.cssText;
		return r$4(e);
	})(t) : t;
}));
//#endregion
//#region node_modules/@lit/reactive-element/reactive-element.js
var i$2, e$3, h$1, r$3, o$3, n$2, a$1, c$1, l$1, p$1, d$1, u$1, f$1, b$1, y$1;
var init_reactive_element = __esmMin((() => {
	init_css_tag();
	({is: i$2, defineProperty: e$3, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$3, getPrototypeOf: n$2} = Object), a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t, s) => t, u$1 = {
		toAttribute(t, s) {
			switch (s) {
				case Boolean:
					t = t ? l$1 : null;
					break;
				case Object:
				case Array: t = null == t ? t : JSON.stringify(t);
			}
			return t;
		},
		fromAttribute(t, s) {
			let i = t;
			switch (s) {
				case Boolean:
					i = null !== t;
					break;
				case Number:
					i = null === t ? null : Number(t);
					break;
				case Object:
				case Array: try {
					i = JSON.parse(t);
				} catch (t) {
					i = null;
				}
			}
			return i;
		}
	}, f$1 = (t, s) => !i$2(t, s), b$1 = {
		attribute: !0,
		type: String,
		converter: u$1,
		reflect: !1,
		useDefault: !1,
		hasChanged: f$1
	};
	Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
	y$1 = class extends HTMLElement {
		static addInitializer(t) {
			this._$Ei(), (this.l ??= []).push(t);
		}
		static get observedAttributes() {
			return this.finalize(), this._$Eh && [...this._$Eh.keys()];
		}
		static createProperty(t, s = b$1) {
			if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
				const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
				void 0 !== h && e$3(this.prototype, t, h);
			}
		}
		static getPropertyDescriptor(t, s, i) {
			const { get: e, set: r } = h$1(this.prototype, t) ?? {
				get() {
					return this[s];
				},
				set(t) {
					this[s] = t;
				}
			};
			return {
				get: e,
				set(s) {
					const h = e?.call(this);
					r?.call(this, s), this.requestUpdate(t, h, i);
				},
				configurable: !0,
				enumerable: !0
			};
		}
		static getPropertyOptions(t) {
			return this.elementProperties.get(t) ?? b$1;
		}
		static _$Ei() {
			if (this.hasOwnProperty(d$1("elementProperties"))) return;
			const t = n$2(this);
			t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
		}
		static finalize() {
			if (this.hasOwnProperty(d$1("finalized"))) return;
			if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
				const t = this.properties, s = [...r$3(t), ...o$3(t)];
				for (const i of s) this.createProperty(i, t[i]);
			}
			const t = this[Symbol.metadata];
			if (null !== t) {
				const s = litPropertyMetadata.get(t);
				if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
			}
			this._$Eh = /* @__PURE__ */ new Map();
			for (const [t, s] of this.elementProperties) {
				const i = this._$Eu(t, s);
				void 0 !== i && this._$Eh.set(i, t);
			}
			this.elementStyles = this.finalizeStyles(this.styles);
		}
		static finalizeStyles(s) {
			const i = [];
			if (Array.isArray(s)) {
				const e = new Set(s.flat(Infinity).reverse());
				for (const s of e) i.unshift(c$2(s));
			} else void 0 !== s && i.push(c$2(s));
			return i;
		}
		static _$Eu(t, s) {
			const i = s.attribute;
			return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
		}
		constructor() {
			super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
		}
		_$Ev() {
			this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
		}
		addController(t) {
			(this._$EO ??= /* @__PURE__ */ new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
		}
		removeController(t) {
			this._$EO?.delete(t);
		}
		_$E_() {
			const t = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
			for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
			t.size > 0 && (this._$Ep = t);
		}
		createRenderRoot() {
			const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
			return S$1(t, this.constructor.elementStyles), t;
		}
		connectedCallback() {
			this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
		}
		enableUpdating(t) {}
		disconnectedCallback() {
			this._$EO?.forEach((t) => t.hostDisconnected?.());
		}
		attributeChangedCallback(t, s, i) {
			this._$AK(t, i);
		}
		_$ET(t, s) {
			const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
			if (void 0 !== e && !0 === i.reflect) {
				const h = (void 0 !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
				this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
			}
		}
		_$AK(t, s) {
			const i = this.constructor, e = i._$Eh.get(t);
			if (void 0 !== e && this._$Em !== e) {
				const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : u$1;
				this._$Em = e;
				const r = h.fromAttribute(s, t.type);
				this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
			}
		}
		requestUpdate(t, s, i, e = !1, h) {
			if (void 0 !== t) {
				const r = this.constructor;
				if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? f$1)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
				this.C(t, s, i);
			}
			!1 === this.isUpdatePending && (this._$ES = this._$EP());
		}
		C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
			i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
		}
		async _$EP() {
			this.isUpdatePending = !0;
			try {
				await this._$ES;
			} catch (t) {
				Promise.reject(t);
			}
			const t = this.scheduleUpdate();
			return null != t && await t, !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			if (!this.isUpdatePending) return;
			if (!this.hasUpdated) {
				if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
					for (const [t, s] of this._$Ep) this[t] = s;
					this._$Ep = void 0;
				}
				const t = this.constructor.elementProperties;
				if (t.size > 0) for (const [s, i] of t) {
					const { wrapped: t } = i, e = this[s];
					!0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
				}
			}
			let t = !1;
			const s = this._$AL;
			try {
				t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t) => t.hostUpdate?.()), this.update(s)) : this._$EM();
			} catch (s) {
				throw t = !1, this._$EM(), s;
			}
			t && this._$AE(s);
		}
		willUpdate(t) {}
		_$AE(t) {
			this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
			this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
		}
		updated(t) {}
		firstUpdated(t) {}
	};
	y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.2");
}));
//#endregion
//#region node_modules/lit-html/lit-html.js
function V(t, i) {
	if (!u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return void 0 !== e$2 ? e$2.createHTML(i) : i;
}
function M(t, i, s = t, e) {
	if (i === E) return i;
	let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
	const o = a(i) ? void 0 : i._$litDirective$;
	return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = M(t, h._$AS(t, i.values), h, e)), i;
}
var t$1, i$1, s$1, e$2, h, o$2, n$1, r$2, l, c, a, u, d, f, v, _, m, p, g, $, y, x, b, E, A, C, P, N, S, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esmMin((() => {
	t$1 = globalThis, i$1 = (t) => t, s$1 = t$1.trustedTypes, e$2 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, h = "$lit$", o$2 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$1 = "?" + o$2, r$2 = `<${n$1}>`, l = document, c = () => l.createComment(""), a = (t) => null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, d = (t) => u(t) || "function" == typeof t?.[Symbol.iterator], f = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, x = (t) => (i, ...s) => ({
		_$litType$: t,
		strings: i,
		values: s
	}), b = x(1), x(2), x(3), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
	N = (t, i) => {
		const s = t.length - 1, e = [];
		let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = v;
		for (let i = 0; i < s; i++) {
			const s = t[i];
			let a, u, d = -1, f = 0;
			for (; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);) f = c.lastIndex, c === v ? "!--" === u[1] ? c = _ : void 0 !== u[1] ? c = m : void 0 !== u[2] ? (y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = p) : void 0 !== u[3] && (c = p) : c === p ? ">" === u[0] ? (c = n ?? v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? p : "\"" === u[3] ? $ : g) : c === $ || c === g ? c = p : c === _ || c === m ? c = v : (c = p, n = void 0);
			const x = c === p && t[i + 1].startsWith("/>") ? " " : "";
			l += c === v ? s + r$2 : d >= 0 ? (e.push(a), s.slice(0, d) + h + s.slice(d) + o$2 + x) : s + o$2 + (-2 === d ? i : x);
		}
		return [V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e];
	};
	S = class S {
		constructor({ strings: t, _$litType$: i }, e) {
			let r;
			this.parts = [];
			let l = 0, a = 0;
			const u = t.length - 1, d = this.parts, [f, v] = N(t, i);
			if (this.el = S.createElement(f, e), P.currentNode = this.el.content, 2 === i || 3 === i) {
				const t = this.el.content.firstChild;
				t.replaceWith(...t.childNodes);
			}
			for (; null !== (r = P.nextNode()) && d.length < u;) {
				if (1 === r.nodeType) {
					if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(h)) {
						const i = v[a++], s = r.getAttribute(t).split(o$2), e = /([.?@])?(.*)/.exec(i);
						d.push({
							type: 1,
							index: l,
							name: e[2],
							strings: s,
							ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H
						}), r.removeAttribute(t);
					} else t.startsWith(o$2) && (d.push({
						type: 6,
						index: l
					}), r.removeAttribute(t));
					if (y.test(r.tagName)) {
						const t = r.textContent.split(o$2), i = t.length - 1;
						if (i > 0) {
							r.textContent = s$1 ? s$1.emptyScript : "";
							for (let s = 0; s < i; s++) r.append(t[s], c()), P.nextNode(), d.push({
								type: 2,
								index: ++l
							});
							r.append(t[i], c());
						}
					}
				} else if (8 === r.nodeType) if (r.data === n$1) d.push({
					type: 2,
					index: l
				});
				else {
					let t = -1;
					for (; -1 !== (t = r.data.indexOf(o$2, t + 1));) d.push({
						type: 7,
						index: l
					}), t += o$2.length - 1;
				}
				l++;
			}
		}
		static createElement(t, i) {
			const s = l.createElement("template");
			return s.innerHTML = t, s;
		}
	};
	R = class {
		constructor(t, i) {
			this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
		}
		get parentNode() {
			return this._$AM.parentNode;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		u(t) {
			const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? l).importNode(i, !0);
			P.currentNode = e;
			let h = P.nextNode(), o = 0, n = 0, r = s[0];
			for (; void 0 !== r;) {
				if (o === r.index) {
					let i;
					2 === r.type ? i = new k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new Z(h, this, t)), this._$AV.push(i), r = s[++n];
				}
				o !== r?.index && (h = P.nextNode(), o++);
			}
			return P.currentNode = l, e;
		}
		p(t) {
			let i = 0;
			for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
		}
	};
	k = class k {
		get _$AU() {
			return this._$AM?._$AU ?? this._$Cv;
		}
		constructor(t, i, s, e) {
			this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
		}
		get parentNode() {
			let t = this._$AA.parentNode;
			const i = this._$AM;
			return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
		}
		get startNode() {
			return this._$AA;
		}
		get endNode() {
			return this._$AB;
		}
		_$AI(t, i = this) {
			t = M(this, t, i), a(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d(t) ? this.k(t) : this._(t);
		}
		O(t) {
			return this._$AA.parentNode.insertBefore(t, this._$AB);
		}
		T(t) {
			this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
		}
		_(t) {
			this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l.createTextNode(t)), this._$AH = t;
		}
		$(t) {
			const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = S.createElement(V(s.h, s.h[0]), this.options)), s);
			if (this._$AH?._$AD === e) this._$AH.p(i);
			else {
				const t = new R(e, this), s = t.u(this.options);
				t.p(i), this.T(s), this._$AH = t;
			}
		}
		_$AC(t) {
			let i = C.get(t.strings);
			return void 0 === i && C.set(t.strings, i = new S(t)), i;
		}
		k(t) {
			u(this._$AH) || (this._$AH = [], this._$AR());
			const i = this._$AH;
			let s, e = 0;
			for (const h of t) e === i.length ? i.push(s = new k(this.O(c()), this.O(c()), this, this.options)) : s = i[e], s._$AI(h), e++;
			e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
		}
		_$AR(t = this._$AA.nextSibling, s) {
			for (this._$AP?.(!1, !0, s); t !== this._$AB;) {
				const s = i$1(t).nextSibling;
				i$1(t).remove(), t = s;
			}
		}
		setConnected(t) {
			void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
		}
	};
	H = class {
		get tagName() {
			return this.element.tagName;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		constructor(t, i, s, e, h) {
			this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(/* @__PURE__ */ new String()), this.strings = s) : this._$AH = A;
		}
		_$AI(t, i = this, s, e) {
			const h = this.strings;
			let o = !1;
			if (void 0 === h) t = M(this, t, i, 0), o = !a(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
			else {
				const e = t;
				let n, r;
				for (t = h[0], n = 0; n < h.length - 1; n++) r = M(this, e[s + n], i, n), r === E && (r = this._$AH[n]), o ||= !a(r) || r !== this._$AH[n], r === A ? t = A : t !== A && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
			}
			o && !e && this.j(t);
		}
		j(t) {
			t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
		}
	};
	I = class extends H {
		constructor() {
			super(...arguments), this.type = 3;
		}
		j(t) {
			this.element[this.name] = t === A ? void 0 : t;
		}
	};
	L = class extends H {
		constructor() {
			super(...arguments), this.type = 4;
		}
		j(t) {
			this.element.toggleAttribute(this.name, !!t && t !== A);
		}
	};
	z = class extends H {
		constructor(t, i, s, e, h) {
			super(t, i, s, e, h), this.type = 5;
		}
		_$AI(t, i = this) {
			if ((t = M(this, t, i, 0) ?? A) === E) return;
			const s = this._$AH, e = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== A && (s === A || e);
			e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
		}
		handleEvent(t) {
			"function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
		}
	};
	Z = class {
		constructor(t, i, s) {
			this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(t) {
			M(this, t);
		}
	};
	B = t$1.litHtmlPolyfillSupport;
	B?.(S, k), (t$1.litHtmlVersions ??= []).push("3.3.2");
	D = (t, i, s) => {
		const e = s?.renderBefore ?? i;
		let h = e._$litPart$;
		if (void 0 === h) {
			const t = s?.renderBefore ?? null;
			e._$litPart$ = h = new k(i.insertBefore(c(), t), t, void 0, s ?? {});
		}
		return h._$AI(t), h;
	};
}));
//#endregion
//#region node_modules/lit-element/lit-element.js
var s, i, o$1;
var init_lit_element = __esmMin((() => {
	init_reactive_element();
	init_reactive_element();
	init_lit_html();
	init_lit_html();
	s = globalThis;
	i = class extends y$1 {
		constructor() {
			super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
		}
		createRenderRoot() {
			const t = super.createRenderRoot();
			return this.renderOptions.renderBefore ??= t.firstChild, t;
		}
		update(t) {
			const r = this.render();
			this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = D(r, this.renderRoot, this.renderOptions);
		}
		connectedCallback() {
			super.connectedCallback(), this._$Do?.setConnected(!0);
		}
		disconnectedCallback() {
			super.disconnectedCallback(), this._$Do?.setConnected(!1);
		}
		render() {
			return E;
		}
	};
	i._$litElement$ = !0, i["finalized"] = !0, s.litElementHydrateSupport?.({ LitElement: i });
	o$1 = s.litElementPolyfillSupport;
	o$1?.({ LitElement: i });
	(s.litElementVersions ??= []).push("4.2.2");
}));
//#endregion
//#region node_modules/lit-html/is-server.js
var init_is_server = __esmMin((() => {}));
//#endregion
//#region node_modules/lit/index.js
var init_lit = __esmMin((() => {
	init_reactive_element();
	init_lit_html();
	init_lit_element();
	init_is_server();
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/custom-element.js
var t;
var init_custom_element = __esmMin((() => {
	t = (t) => (e, o) => {
		void 0 !== o ? o.addInitializer(() => {
			customElements.define(t, e);
		}) : customElements.define(t, e);
	};
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/property.js
function n(t) {
	return (e, o) => "object" == typeof o ? r$1(t, e, o) : ((t, e, o) => {
		const r = e.hasOwnProperty(o);
		return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
	})(t, e, o);
}
var o, r$1;
var init_property = __esmMin((() => {
	init_reactive_element();
	o = {
		attribute: !0,
		type: String,
		converter: u$1,
		reflect: !1,
		hasChanged: f$1
	}, r$1 = (t = o, e, r) => {
		const { kind: n, metadata: i } = r;
		let s = globalThis.litPropertyMetadata.get(i);
		if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
			const { name: o } = r;
			return {
				set(r) {
					const n = e.get.call(this);
					e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
				},
				init(e) {
					return void 0 !== e && this.C(o, void 0, t, e), e;
				}
			};
		}
		if ("setter" === n) {
			const { name: o } = r;
			return function(r) {
				const n = this[o];
				e.call(this, r), this.requestUpdate(o, n, t, !0, r);
			};
		}
		throw Error("Unsupported decorator location: " + n);
	};
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function r(r) {
	return n({
		...r,
		state: !0,
		attribute: !1
	});
}
var init_state = __esmMin((() => {
	init_property();
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esmMin((() => {}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/base.js
var e$1;
var init_base = __esmMin((() => {
	e$1 = (e, t, c) => (c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function e(e, r) {
	return (n, s, i) => {
		const o = (t) => t.renderRoot?.querySelector(e) ?? null;
		if (r) {
			const { get: e, set: r } = "object" == typeof s ? n : i ?? (() => {
				const t = Symbol();
				return {
					get() {
						return this[t];
					},
					set(e) {
						this[t] = e;
					}
				};
			})();
			return e$1(n, s, { get() {
				let t = e.call(this);
				return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
			} });
		}
		return e$1(n, s, { get() {
			return o(this);
		} });
	};
}
var init_query = __esmMin((() => {
	init_base();
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esmMin((() => {}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esmMin((() => {}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esmMin((() => {}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esmMin((() => {}));
//#endregion
//#region node_modules/lit/decorators.js
var init_decorators = __esmMin((() => {
	init_custom_element();
	init_property();
	init_state();
	init_event_options();
	init_query();
	init_query_all();
	init_query_async();
	init_query_assigned_elements();
	init_query_assigned_nodes();
}));
//#endregion
//#region src/css/std-flex-slider-css.ts
init_lit();
init_decorators();
var stdFlexSliderCardCss = `

  :host([std]) {
    display: block;
    height: var(--flex-slider-height, 100%);
    --flex-slider-card-barvalues-font-size: 1rem;
  }

  .container.std {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .container.std.no-title {
    padding-top: 5px;
    justify-content: center;
  }

  .container.std.no-values {
    padding-bottom: 5px;
  }

  .container.std.vertical.no-title {
    padding-top: 12px;
  }

  .container.std.vertical.no-values {
    padding-bottom: 12px;
  }

  .container.std .title {
    display: flex;
    height: 30px;
    min-height: 30px;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
    color: var(--primary-text-color);
    /* outline: 1px solid blue; /* Debugging border */
  }

  .container.std .slider-with-values {
    width: var(--flex-slider-width, 90%);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-block: auto;
    /* outline: 1px solid blue; /* Debugging border */
  }

  /* ===== Vertical mode ===== */

  .container.std.vertical .slider-with-values {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .container.std.vertical .slider-container {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
  }

  .container.std.vertical.has-ticks .slider-container,
  .container.std.vertical.has-bubbles .slider-container {
    height: 95%;
  }

  .container.std.vertical flex-slider-card-slider {
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
  }

`;
//#endregion
//#region src/css/compact-flex-slider-css.ts
var compactFlexSliderCardCss = `

  :host([compact]) {
    display: block;
    height: var(--flex-slider-height, 100%);
    --flex-slider-card-barvalues-font-size: 0.8rem;
  }

  .container.compact {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .container.compact.no-title {
    padding-top: 3px;
    justify-content: center;
  }

  .container.compact.no-values {
    padding-bottom: 3px;
  }

  .container.compact.vertical.no-title {
    padding-top: 7px;
  }

  .container.compact.vertical.no-values {
    padding-bottom: 7px;
  }

  .container.compact .title {
    display: flex;
    height: 20px;
    min-height: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.9rem;
    color: var(--primary-text-color);
     /* outline: 1px solid blue; /* Debugging border */
  }

  .container.compact .slider-with-values {
    width: var(--flex-slider-width, 90%);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-block: auto;
    /* outline: 1px solid blue; /* Debugging border */
  }

  /* ===== Vertical mode ===== */

  .container.compact.vertical .slider-with-values {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .container.compact.vertical .slider-container {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
  }

  .container.compact.vertical.has-ticks .slider-container,
  .container.compact.vertical.has-bubbles .slider-container {
    height: 95%;
  }

  .container.compact.vertical flex-slider-card-slider {
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
  }
    
`;
function minutesToTime(minutes) {
	const normalizedMinutes = Math.min(1439, Math.max(0, Math.round(minutes)));
	return `${Math.floor(normalizedMinutes / 60).toString().padStart(2, "0")}:${(normalizedMinutes % 60).toString().padStart(2, "0")}`;
}
function timeToMinutes(time) {
	const [hours, minutes] = time.split(":").map(Number);
	return hours * 60 + minutes;
}
function assertOptionalString(value, fieldName) {
	if (value != void 0 && typeof value !== "string") throw new Error(`Invalid "${fieldName}": expected string, got ${String(value)}`);
}
function assertOptionalNumber(value, fieldName) {
	if (value != void 0 && typeof value !== "number") throw new Error(`Invalid "${fieldName}": expected number, got ${String(value)}`);
}
function assertOptionalBoolean(value, fieldName) {
	if (value != void 0 && typeof value !== "boolean") throw new Error(`Invalid "${fieldName}": expected boolean, got ${String(value)}`);
}
//#endregion
//#region src/utils/entity-management.ts
function isNumericEntityType(entityType) {
	return entityType === FlexSliderCardEntityType.NUMBER || entityType === FlexSliderCardEntityType.COVER;
}
function isValidEntityId(entity) {
	if (typeof entity !== "string") return false;
	return /^[a-z0-9_]+\.[a-z0-9_]+$/.test(entity);
}
function getEntityDomain(entityid) {
	return entityid.split(".")[0];
}
function getEntityType(entityid) {
	switch (getEntityDomain(entityid)) {
		case "number":
		case "input_number": return FlexSliderCardEntityType.NUMBER;
		case "input_datetime": return FlexSliderCardEntityType.TIME;
		case "cover": return FlexSliderCardEntityType.COVER;
		default: throw new Error(`Unexpected 'entity_${entityid}' domain`);
	}
}
var FlexSliderCardEntityType, FLEX_SLIDER_ENTITY_DOMAINS, FLEX_SLIDER_NUMBER_ENTITY_DOMAINS;
var init_entity_management = __esmMin((() => {
	FlexSliderCardEntityType = /* @__PURE__ */ function(FlexSliderCardEntityType) {
		FlexSliderCardEntityType["NUMBER"] = "number";
		FlexSliderCardEntityType["TIME"] = "time";
		FlexSliderCardEntityType["COVER"] = "cover";
		return FlexSliderCardEntityType;
	}({});
	FLEX_SLIDER_ENTITY_DOMAINS = [
		"number",
		"input_number",
		"input_datetime",
		"cover"
	];
	FLEX_SLIDER_NUMBER_ENTITY_DOMAINS = ["number", "input_number"];
}));
//#endregion
//#region src/flex-slider-card-entity.ts
init_entity_management();
var FlexSliderCardEntity = class {
	constructor(entityId, text = "") {
		this._baselineValue = void 0;
		this._callService = null;
		this._entityid = entityId;
		this._text = text;
		this._domain = getEntityDomain(this._entityid);
		this._entitytype = getEntityType(this._entityid);
		switch (this._entitytype) {
			case FlexSliderCardEntityType.NUMBER:
				this._service = "set_value";
				break;
			case FlexSliderCardEntityType.TIME:
				this._service = "set_datetime";
				break;
			case FlexSliderCardEntityType.COVER:
				this._service = "set_cover_position";
				break;
			default: throw new Error(`Unexpected entity domain for '${this._entityid}'`);
		}
		this.resetBaseline();
	}
	update(hass) {
		this._callService = hass.callService;
		this._state = hass.states[this.entityId];
		if (this._state) this._assertSupportedInputDatetimeState(this._state);
	}
	get domain() {
		return this._domain;
	}
	get service() {
		return this._service;
	}
	get entitytype() {
		return this._entitytype;
	}
	get entityId() {
		return this._entityid;
	}
	toText(sliderValue, nbdigits, unit = "", showText = true) {
		const value = this.toDisplay(sliderValue, nbdigits);
		return showText && this._text ? `${this._text}: ${value}${unit}` : `${value}${unit}`;
	}
	toDisplay(sliderValue, nbdigits) {
		if (isNumericEntityType(this._entitytype)) return Number(sliderValue).toFixed(nbdigits);
		if (this._entitytype === FlexSliderCardEntityType.TIME) return minutesToTime(sliderValue);
		throw new Error(`Unexpected entity type '${this._entitytype}'`);
	}
	get sliderValue() {
		const state = this._getState();
		return this._fromEntity(this._getStateValue(state));
	}
	exists() {
		return this._state !== void 0;
	}
	async setSliderValue(newSliderValue) {
		if (!this._callService) throw new Error("Hass callService not initialized");
		const serviceCall = this._getServiceCall(newSliderValue);
		await this._callService(serviceCall.domain, serviceCall.service, serviceCall.data, { entity_id: this.entityId });
	}
	resetBaseline() {
		this._baselineValue = void 0;
	}
	getBaseline() {
		return this._baselineValue;
	}
	setBaseline() {
		this._baselineValue = this.sliderValue;
	}
	isUpdated() {
		return this.sliderValue !== this._baselineValue;
	}
	_getState() {
		if (!this._state) throw new Error(`Entity '${this.entityId}' not found`);
		return this._state;
	}
	_assertSupportedInputDatetimeState(state) {
		if (this._domain !== "input_datetime") return;
		const hasDate = state.attributes.has_date === true;
		if (state.attributes.has_time === true && !hasDate) return;
		throw new Error(`Entity '${this.entityId}' must be a time-only input_datetime (has_time: true, has_date: false); got has_time: ${String(state.attributes.has_time)}, has_date: ${String(state.attributes.has_date)}`);
	}
	_getStateValue(state) {
		if (this._entitytype === FlexSliderCardEntityType.COVER) {
			const currentPosition = state.attributes.current_position;
			if (typeof currentPosition !== "number") throw new Error(`Cover entity '${this.entityId}' does not expose a numeric current_position`);
			return currentPosition;
		}
		return state.state;
	}
	_getServiceCall(sliderValue) {
		switch (this._entitytype) {
			case FlexSliderCardEntityType.NUMBER: return {
				domain: this.domain,
				service: "set_value",
				data: { value: Number(sliderValue) }
			};
			case FlexSliderCardEntityType.TIME: return {
				domain: this.domain,
				service: "set_datetime",
				data: { time: minutesToTime(sliderValue) }
			};
			case FlexSliderCardEntityType.COVER: return {
				domain: this.domain,
				service: "set_cover_position",
				data: { position: Math.round(sliderValue) }
			};
			default: throw new Error(`Unexpected entity type '${this._entitytype}'`);
		}
	}
	_fromEntity(entityValue) {
		if (isNumericEntityType(this._entitytype)) return Number(entityValue);
		if (this._entitytype === FlexSliderCardEntityType.TIME) return timeToMinutes(String(entityValue));
		throw new Error(`Unexpected entity type '${this._entitytype}'`);
	}
};
//#endregion
//#region node_modules/superstruct/dist/index.mjs
/**
* A `StructFailure` represents a single specific failure in validation.
*/
/**
* `StructError` objects are thrown (or returned) when validation fails.
*
* Validation logic is design to exit early for maximum performance. The error
* represents the first error encountered during validation. For more detail,
* the `error.failures` property is a generator function that can be run to
* continue validation and receive all the failures in the data.
*/
var StructError = class extends TypeError {
	constructor(failure, failures) {
		let cached;
		const { message, explanation, ...rest } = failure;
		const { path } = failure;
		const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
		super(explanation ?? msg);
		if (explanation != null) this.cause = msg;
		Object.assign(this, rest);
		this.name = this.constructor.name;
		this.failures = () => {
			return cached ?? (cached = [failure, ...failures()]);
		};
	}
};
/**
* Check if a value is an iterator.
*/
function isIterable(x) {
	return isObject(x) && typeof x[Symbol.iterator] === "function";
}
/**
* Check if a value is a plain object.
*/
function isObject(x) {
	return typeof x === "object" && x != null;
}
/**
* Check if a value is a non-array object.
*/
function isNonArrayObject(x) {
	return isObject(x) && !Array.isArray(x);
}
/**
* Return a value as a printable string.
*/
function print(value) {
	if (typeof value === "symbol") return value.toString();
	return typeof value === "string" ? JSON.stringify(value) : `${value}`;
}
/**
* Shifts (removes and returns) the first value from the `input` iterator.
* Like `Array.prototype.shift()` but for an `Iterator`.
*/
function shiftIterator(input) {
	const { done, value } = input.next();
	return done ? void 0 : value;
}
/**
* Convert a single validation result to a failure.
*/
function toFailure(result, context, struct, value) {
	if (result === true) return;
	else if (result === false) result = {};
	else if (typeof result === "string") result = { message: result };
	const { path, branch } = context;
	const { type } = struct;
	const { refinement, message = `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\`` } = result;
	return {
		value,
		type,
		refinement,
		key: path[path.length - 1],
		path,
		branch,
		...result,
		message
	};
}
/**
* Convert a validation result to an iterable of failures.
*/
function* toFailures(result, context, struct, value) {
	if (!isIterable(result)) result = [result];
	for (const r of result) {
		const failure = toFailure(r, context, struct, value);
		if (failure) yield failure;
	}
}
/**
* Check a value against a struct, traversing deeply into nested values, and
* returning an iterator of failures or success.
*/
function* run(value, struct, options = {}) {
	const { path = [], branch = [value], coerce = false, mask = false } = options;
	const ctx = {
		path,
		branch,
		mask
	};
	if (coerce) value = struct.coercer(value, ctx);
	let status = "valid";
	for (const failure of struct.validator(value, ctx)) {
		failure.explanation = options.message;
		status = "not_valid";
		yield [failure, void 0];
	}
	for (let [k, v, s] of struct.entries(value, ctx)) {
		const ts = run(v, s, {
			path: k === void 0 ? path : [...path, k],
			branch: k === void 0 ? branch : [...branch, v],
			coerce,
			mask,
			message: options.message
		});
		for (const t of ts) if (t[0]) {
			status = t[0].refinement != null ? "not_refined" : "not_valid";
			yield [t[0], void 0];
		} else if (coerce) {
			v = t[1];
			if (k === void 0) value = v;
			else if (value instanceof Map) value.set(k, v);
			else if (value instanceof Set) value.add(v);
			else if (isObject(value)) {
				if (v !== void 0 || k in value) value[k] = v;
			}
		}
	}
	if (status !== "not_valid") for (const failure of struct.refiner(value, ctx)) {
		failure.explanation = options.message;
		status = "not_refined";
		yield [failure, void 0];
	}
	if (status === "valid") yield [void 0, value];
}
/**
* `Struct` objects encapsulate the validation logic for a specific type of
* values. Once constructed, you use the `assert`, `is` or `validate` helpers to
* validate unknown input data against the struct.
*/
var Struct = class {
	constructor(props) {
		const { type, schema, validator, refiner, coercer = (value) => value, entries = function* () {} } = props;
		this.type = type;
		this.schema = schema;
		this.entries = entries;
		this.coercer = coercer;
		if (validator) this.validator = (value, context) => {
			return toFailures(validator(value, context), context, this, value);
		};
		else this.validator = () => [];
		if (refiner) this.refiner = (value, context) => {
			return toFailures(refiner(value, context), context, this, value);
		};
		else this.refiner = () => [];
	}
	/**
	* Assert that a value passes the struct's validation, throwing if it doesn't.
	*/
	assert(value, message) {
		return assert(value, this, message);
	}
	/**
	* Create a value with the struct's coercion logic, then validate it.
	*/
	create(value, message) {
		return create(value, this, message);
	}
	/**
	* Check if a value passes the struct's validation.
	*/
	is(value) {
		return is(value, this);
	}
	/**
	* Mask a value, coercing and validating it, but returning only the subset of
	* properties defined by the struct's schema. Masking applies recursively to
	* props of `object` structs only.
	*/
	mask(value, message) {
		return mask(value, this, message);
	}
	/**
	* Validate a value with the struct's validation logic, returning a tuple
	* representing the result.
	*
	* You may optionally pass `true` for the `coerce` argument to coerce
	* the value before attempting to validate it. If you do, the result will
	* contain the coerced result when successful. Also, `mask` will turn on
	* masking of the unknown `object` props recursively if passed.
	*/
	validate(value, options = {}) {
		return validate(value, this, options);
	}
};
/**
* Assert that a value passes a struct, throwing if it doesn't.
*/
function assert(value, struct, message) {
	const result = validate(value, struct, { message });
	if (result[0]) throw result[0];
}
/**
* Create a value with the coercion logic of struct and validate it.
*/
function create(value, struct, message) {
	const result = validate(value, struct, {
		coerce: true,
		message
	});
	if (result[0]) throw result[0];
	else return result[1];
}
/**
* Mask a value, returning only the subset of properties defined by a struct.
*/
function mask(value, struct, message) {
	const result = validate(value, struct, {
		coerce: true,
		mask: true,
		message
	});
	if (result[0]) throw result[0];
	else return result[1];
}
/**
* Check if a value passes a struct.
*/
function is(value, struct) {
	return !validate(value, struct)[0];
}
/**
* Validate a value against a struct, returning an error if invalid, or the
* value (with potential coercion) if valid.
*/
function validate(value, struct, options = {}) {
	const tuples = run(value, struct, options);
	const tuple = shiftIterator(tuples);
	if (tuple[0]) return [new StructError(tuple[0], function* () {
		for (const t of tuples) if (t[0]) yield t[0];
	}), void 0];
	else return [void 0, tuple[1]];
}
function assign(...Structs) {
	const isType = Structs[0].type === "type";
	const schemas = Structs.map((s) => s.schema);
	const schema = Object.assign({}, ...schemas);
	return isType ? type(schema) : object(schema);
}
/**
* Define a new struct type with a custom validation function.
*/
function define(name, validator) {
	return new Struct({
		type: name,
		schema: null,
		validator
	});
}
/**
* Ensure that any value passes validation.
*/
function any() {
	return define("any", () => true);
}
function array(Element) {
	return new Struct({
		type: "array",
		schema: Element,
		*entries(value) {
			if (Element && Array.isArray(value)) for (const [i, v] of value.entries()) yield [
				i,
				v,
				Element
			];
		},
		coercer(value) {
			return Array.isArray(value) ? value.slice() : value;
		},
		validator(value) {
			return Array.isArray(value) || `Expected an array value, but received: ${print(value)}`;
		}
	});
}
/**
* Ensure that a value is a boolean.
*/
function boolean() {
	return define("boolean", (value) => {
		return typeof value === "boolean";
	});
}
function literal(constant) {
	const description = print(constant);
	const t = typeof constant;
	return new Struct({
		type: "literal",
		schema: t === "string" || t === "number" || t === "boolean" ? constant : null,
		validator(value) {
			return value === constant || `Expected the literal \`${description}\`, but received: ${print(value)}`;
		}
	});
}
/**
* Ensure that no value ever passes validation.
*/
function never() {
	return define("never", () => false);
}
/**
* Ensure that a value is a number.
*/
function number() {
	return define("number", (value) => {
		return typeof value === "number" && !isNaN(value) || `Expected a number, but received: ${print(value)}`;
	});
}
function object(schema) {
	const knowns = schema ? Object.keys(schema) : [];
	const Never = never();
	return new Struct({
		type: "object",
		schema: schema ? schema : null,
		*entries(value) {
			if (schema && isObject(value)) {
				const unknowns = new Set(Object.keys(value));
				for (const key of knowns) {
					unknowns.delete(key);
					yield [
						key,
						value[key],
						schema[key]
					];
				}
				for (const key of unknowns) yield [
					key,
					value[key],
					Never
				];
			}
		},
		validator(value) {
			return isNonArrayObject(value) || `Expected an object, but received: ${print(value)}`;
		},
		coercer(value, ctx) {
			if (!isNonArrayObject(value)) return value;
			const coerced = { ...value };
			if (ctx.mask && schema) {
				for (const key in coerced) if (schema[key] === void 0) delete coerced[key];
			}
			return coerced;
		}
	});
}
/**
* Augment a struct to allow `undefined` values.
*/
function optional(struct) {
	return new Struct({
		...struct,
		validator: (value, ctx) => value === void 0 || struct.validator(value, ctx),
		refiner: (value, ctx) => value === void 0 || struct.refiner(value, ctx)
	});
}
/**
* Ensure that a value is a string.
*/
function string() {
	return define("string", (value) => {
		return typeof value === "string" || `Expected a string, but received: ${print(value)}`;
	});
}
/**
* Ensure that a value has a set of known properties of specific types.
*
* Note: Unrecognized properties are allowed and untouched. This is similar to
* how TypeScript's structural typing works.
*/
function type(schema) {
	const keys = Object.keys(schema);
	return new Struct({
		type: "type",
		schema,
		*entries(value) {
			if (isObject(value)) for (const k of keys) yield [
				k,
				value[k],
				schema[k]
			];
		},
		validator(value) {
			return isNonArrayObject(value) || `Expected an object, but received: ${print(value)}`;
		},
		coercer(value) {
			return isNonArrayObject(value) ? { ...value } : value;
		}
	});
}
/**
* Ensure that a value matches one of a set of types.
*/
function union(Structs) {
	const description = Structs.map((s) => s.type).join(" | ");
	return new Struct({
		type: "union",
		schema: null,
		coercer(value, ctx) {
			for (const S of Structs) {
				const [error, coerced] = S.validate(value, {
					coerce: true,
					mask: ctx.mask
				});
				if (!error) return coerced;
			}
			return value;
		},
		validator(value, ctx) {
			const failures = [];
			for (const S of Structs) {
				const [ ...tuples] = run(value, S, ctx);
				const [first] = tuples;
				if (!first[0]) return [];
				else for (const [failure] of tuples) if (failure) failures.push(failure);
			}
			return [`Expected the value to satisfy a union of \`${description}\`, but received: ${print(value)}`, ...failures];
		}
	});
}
//#endregion
//#region src/type/ha.ts
var lovelaceCardConfigStruct = object({
	index: optional(number()),
	view_index: optional(number()),
	view_layout: any(),
	type: string(),
	layout_options: any(),
	grid_options: any(),
	visibility: any()
});
//#endregion
//#region src/config/flex-slider-card-config-type.ts
function assertFlexSliderCardFormat(value) {
	if (!["std", "compact"].includes(value)) throw new Error(`Invalid FlexSliderCardFormat: ${value}`);
}
var flexSliderCardFormatStruct = union([literal("std"), literal("compact")]);
function assertFlexSliderCardDigits(value) {
	if (!["auto", "manual"].includes(value)) throw new Error(`Invalid FlexSliderCardDigits: ${value}`);
}
var flexSliderCardDigitsStruct = union([literal("auto"), literal("manual")]);
function assertFlexSliderCardDirection(value) {
	if (!["rtl", "ltr"].includes(value)) throw new Error(`Invalid FlexSliderCardDirection: ${value}`);
}
var flexSliderCardDirectionStruct = union([literal("rtl"), literal("ltr")]);
function assertFlexSliderCardOrientation(value) {
	if (!["horizontal", "vertical"].includes(value)) throw new Error(`Invalid FlexSliderCardOrientation: ${value}`);
}
var flexSliderCardOrientationStruct = union([literal("horizontal"), literal("vertical")]);
function assertFlexSliderCardVerticalLayout(value) {
	if (!["standard", "mirrored"].includes(value)) throw new Error(`Invalid FlexSliderCardVerticalLayout: ${value}`);
}
var flexSliderCardVerticalLayoutStruct = union([literal("standard"), literal("mirrored")]);
function assertFlexSliderCardHandlesBehavior(value) {
	if (![
		"unconstrained",
		"flexible",
		"fixed"
	].includes(value)) throw new Error(`Invalid FlexSliderCardHandlesBehavior: ${value}`);
}
var flexSliderCardHandlesBehaviorStruct = union([
	literal("unconstrained"),
	literal("flexible"),
	literal("fixed")
]);
var flexSliderCardValuesBarConfigStruct = object({
	mintext: optional(string()),
	maxtext: optional(string()),
	showtext: optional(boolean()),
	digits: optional(flexSliderCardDigitsStruct),
	nbdigits: optional(number()),
	unit: optional(string())
});
var flexSliderCardBubblesConfigStruct = object({
	mintext: optional(string()),
	maxtext: optional(string()),
	showtext: optional(boolean()),
	digits: optional(flexSliderCardDigitsStruct),
	nbdigits: optional(number()),
	unit: optional(string()),
	dragonly: optional(boolean())
});
var flexSliderCardTicksConfigStruct = object({
	digits: optional(flexSliderCardDigitsStruct),
	nbdigits: optional(number()),
	majorticks: optional(number()),
	minorticks: optional(number())
});
var flexSliderCardReferenceConfigStruct = object({
	entity: optional(string()),
	text: optional(string()),
	bubble: optional(boolean()),
	valuesbar: optional(boolean()),
	valuesbartextlarge: optional(boolean()),
	unit: optional(string())
});
var flexSliderCardAdaptiveStateConfigStruct = object({
	conditions: optional(array(any())),
	editablewhenlinkedinactive: optional(boolean())
});
var flexSliderCardHandleConfigStruct = object({
	entity: string(),
	text: optional(string()),
	connectprevious: optional(boolean())
});
var flexSliderCardConfigStruct = assign(lovelaceCardConfigStruct, object({
	name: optional(string()),
	format: optional(flexSliderCardFormatStruct),
	orientation: optional(flexSliderCardOrientationStruct),
	horizontalwidth: optional(number()),
	verticalheight: optional(number()),
	valuesbaractive: optional(boolean()),
	bubblesactive: optional(boolean()),
	ticksactive: optional(boolean()),
	referenceactive: optional(boolean()),
	adaptivestateactive: optional(boolean()),
	verticallayout: optional(flexSliderCardVerticalLayoutStruct),
	min: optional(number()),
	max: optional(number()),
	step: optional(number()),
	direction: optional(flexSliderCardDirectionStruct),
	valuesbar: optional(flexSliderCardValuesBarConfigStruct),
	bubbles: optional(flexSliderCardBubblesConfigStruct),
	ticks: optional(flexSliderCardTicksConfigStruct),
	reference: optional(flexSliderCardReferenceConfigStruct),
	adaptivestate: optional(flexSliderCardAdaptiveStateConfigStruct),
	handlesbehavior: optional(flexSliderCardHandlesBehaviorStruct),
	entities: optional(array(flexSliderCardHandleConfigStruct)),
	connectend: optional(boolean()),
	entity_min: optional(string()),
	entity_max: optional(string()),
	card_mod: optional(any())
}));
//#endregion
//#region src/utils/config-legacy-helpers.ts
function createEmptyLegacyHandle() {
	return {
		entity: "",
		text: ""
	};
}
function hasConfiguredText(text) {
	return text !== void 0 && text !== "";
}
function getLegacyHandleText(config, index) {
	const valuesBarText = index === 0 ? config?.valuesbar?.mintext : config?.valuesbar?.maxtext;
	if (hasConfiguredText(valuesBarText)) return valuesBarText;
	const bubblesText = index === 0 ? config?.bubbles?.mintext : config?.bubbles?.maxtext;
	if (hasConfiguredText(bubblesText)) return bubblesText;
}
function hasLegacyValuesBarTextConfig(config) {
	return hasConfiguredText(config?.valuesbar?.mintext) || hasConfiguredText(config?.valuesbar?.maxtext);
}
function hasLegacyBubblesTextConfig(config) {
	return hasConfiguredText(config?.bubbles?.mintext) || hasConfiguredText(config?.bubbles?.maxtext);
}
function hasLegacyEntityTextConfig(config) {
	return getLegacyHandleText(config, 0) !== void 0 || getLegacyHandleText(config, 1) !== void 0;
}
function hasLegacyEntityConfig(config) {
	return config?.entity_min !== void 0 || config?.entity_max !== void 0 || hasLegacyEntityTextConfig(config);
}
function hasEntityTextConflict(config) {
	return hasConfiguredText(config?.entities?.[0]?.text) && getLegacyHandleText(config, 0) !== void 0 || hasConfiguredText(config?.entities?.[1]?.text) && getLegacyHandleText(config, 1) !== void 0;
}
function setLegacyHandle(handles, index, patch) {
	while (handles.length <= index) handles.push(createEmptyLegacyHandle());
	handles[index] = {
		...createEmptyLegacyHandle(),
		...handles[index],
		...patch
	};
}
function clearLegacyEntityTexts(config) {
	if (config.valuesbar) {
		delete config.valuesbar.mintext;
		delete config.valuesbar.maxtext;
	}
	if (config.bubbles) {
		delete config.bubbles.mintext;
		delete config.bubbles.maxtext;
	}
}
var init_config_legacy_helpers = __esmMin((() => {}));
//#endregion
//#region src/frontend/array/ensure-array.ts
function ensureArray(value) {
	if (value === void 0 || value === null || Array.isArray(value)) return value;
	return [value];
}
var init_ensure_array = __esmMin((() => {}));
//#endregion
//#region node_modules/@date-fns/tz/constants/index.js
var init_constants$1 = __esmMin((() => {}));
//#endregion
//#region node_modules/@date-fns/tz/tzName/index.js
/**
* Time zone name format.
*/
/**
* The function returns the time zone name for the given date in the specified
* time zone.
*
* It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
* name in a long format, e.g. "Pacific Standard Time" or
* "Singapore Standard Time".
*
* It is possible to specify the format as the third argument using one of the following options
*
* - "short": e.g. "EDT" or "GMT+8".
* - "long": e.g. "Eastern Daylight Time".
* - "shortGeneric": e.g. "ET" or "Singapore Time".
* - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
*
* These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
*
* @param timeZone - Time zone name (IANA or UTC offset)
* @param date - Date object to get the time zone name for
* @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
*
* @returns Time zone name (e.g. "Singapore Standard Time")
*/
function tzName(timeZone, date, format = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone,
		timeZoneName: format
	}).format(date).split(/\s/g).slice(2).join(" ");
}
var init_tzName = __esmMin((() => {}));
//#endregion
//#region node_modules/@date-fns/tz/tzOffset/index.js
/**
* The function extracts UTC offset in minutes from the given date in specified
* time zone.
*
* Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
* mirrored to the sign of the offset in the time zone. For Asia/Singapore
* (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
*
* @param timeZone - Time zone name (IANA or UTC offset)
* @param date - Date to check the offset for
*
* @returns UTC offset in minutes
*/
function tzOffset(timeZone, date) {
	try {
		const offsetStr = (offsetFormatCache[timeZone] ||= new Intl.DateTimeFormat("en-US", {
			timeZone,
			timeZoneName: "longOffset"
		}).format)(date).split("GMT")[1];
		if (offsetStr in offsetCache) return offsetCache[offsetStr];
		return calcOffset(offsetStr, offsetStr.split(":"));
	} catch {
		if (timeZone in offsetCache) return offsetCache[timeZone];
		const captures = timeZone?.match(offsetRe);
		if (captures) return calcOffset(timeZone, captures.slice(1));
		return NaN;
	}
}
function calcOffset(cacheStr, values) {
	const hours = +(values[0] || 0);
	const minutes = +(values[1] || 0);
	const seconds = +(values[2] || 0) / 60;
	return offsetCache[cacheStr] = hours * 60 + minutes > 0 ? hours * 60 + minutes + seconds : hours * 60 - minutes - seconds;
}
var offsetFormatCache, offsetCache, offsetRe;
var init_tzOffset = __esmMin((() => {
	offsetFormatCache = {};
	offsetCache = {};
	offsetRe = /([+-]\d\d):?(\d\d)?/;
}));
//#endregion
//#region node_modules/@date-fns/tz/date/mini.js
/**
* Function syncs time to internal date, applying the time zone offset.
*
* @param {Date} date - Date to sync
*/
function syncToInternal(date) {
	date.internal.setTime(+date);
	date.internal.setUTCSeconds(date.internal.getUTCSeconds() - Math.round(-tzOffset(date.timeZone, date) * 60));
}
/**
* Function syncs the internal date UTC values to the date. It allows to get
* accurate timestamp value.
*
* @param {Date} date - The date to sync
*/
function syncFromInternal(date) {
	Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
	Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());
	adjustToSystemTZ(date);
}
/**
* Function adjusts the date to the system time zone. It uses the time zone
* differences to calculate the offset and adjust the date.
*
* @param {Date} date - Date to adjust
*/
function adjustToSystemTZ(date) {
	const baseOffset = tzOffset(date.timeZone, date);
	const offset = baseOffset > 0 ? Math.floor(baseOffset) : Math.ceil(baseOffset);
	const prevHour = /* @__PURE__ */ new Date(+date);
	prevHour.setUTCHours(prevHour.getUTCHours() - 1);
	const systemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
	const systemDSTChange = systemOffset - -(/* @__PURE__ */ new Date(+prevHour)).getTimezoneOffset();
	const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();
	if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);
	const offsetDiff = systemOffset - offset;
	if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);
	const systemDate = /* @__PURE__ */ new Date(+date);
	systemDate.setUTCSeconds(0);
	const systemSecondsOffset = systemOffset > 0 ? systemDate.getSeconds() : (systemDate.getSeconds() - 60) % 60;
	const secondsOffset = Math.round(-(tzOffset(date.timeZone, date) * 60)) % 60;
	if (secondsOffset || systemSecondsOffset) {
		date.internal.setUTCSeconds(date.internal.getUTCSeconds() + secondsOffset);
		Date.prototype.setUTCSeconds.call(date, Date.prototype.getUTCSeconds.call(date) + secondsOffset + systemSecondsOffset);
	}
	const postBaseOffset = tzOffset(date.timeZone, date);
	const postOffset = postBaseOffset > 0 ? Math.floor(postBaseOffset) : Math.ceil(postBaseOffset);
	const postOffsetDiff = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset() - postOffset;
	const offsetChanged = postOffset !== offset;
	const postDiff = postOffsetDiff - offsetDiff;
	if (offsetChanged && postDiff) {
		Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);
		const newBaseOffset = tzOffset(date.timeZone, date);
		const offsetChange = postOffset - (newBaseOffset > 0 ? Math.floor(newBaseOffset) : Math.ceil(newBaseOffset));
		if (offsetChange) {
			date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
			Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
		}
	}
}
var TZDateMini, re;
var init_mini = __esmMin((() => {
	init_tzOffset();
	TZDateMini = class TZDateMini extends Date {
		constructor(...args) {
			super();
			if (args.length > 1 && typeof args[args.length - 1] === "string") this.timeZone = args.pop();
			this.internal = /* @__PURE__ */ new Date();
			if (isNaN(tzOffset(this.timeZone, this))) this.setTime(NaN);
			else if (!args.length) this.setTime(Date.now());
			else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) this.setTime(args[0]);
			else if (typeof args[0] === "string") this.setTime(+new Date(args[0]));
			else if (args[0] instanceof Date) this.setTime(+args[0]);
			else {
				this.setTime(+new Date(...args));
				adjustToSystemTZ(this, NaN);
				syncToInternal(this);
			}
		}
		static tz(tz, ...args) {
			return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
		}
		withTimeZone(timeZone) {
			return new TZDateMini(+this, timeZone);
		}
		getTimezoneOffset() {
			const offset = -tzOffset(this.timeZone, this);
			return offset > 0 ? Math.floor(offset) : Math.ceil(offset);
		}
		setTime(time) {
			Date.prototype.setTime.apply(this, arguments);
			syncToInternal(this);
			return +this;
		}
		[Symbol.for("constructDateFrom")](date) {
			return new TZDateMini(+new Date(date), this.timeZone);
		}
	};
	re = /^(get|set)(?!UTC)/;
	Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
		if (!re.test(method)) return;
		const utcMethod = method.replace(re, "$1UTC");
		if (!TZDateMini.prototype[utcMethod]) return;
		if (method.startsWith("get")) TZDateMini.prototype[method] = function() {
			return this.internal[utcMethod]();
		};
		else {
			TZDateMini.prototype[method] = function() {
				Date.prototype[utcMethod].apply(this.internal, arguments);
				syncFromInternal(this);
				return +this;
			};
			TZDateMini.prototype[utcMethod] = function() {
				Date.prototype[utcMethod].apply(this, arguments);
				syncToInternal(this);
				return +this;
			};
		}
	});
}));
//#endregion
//#region node_modules/@date-fns/tz/date/index.js
var TZDate;
var init_date = __esmMin((() => {
	init_tzName();
	init_mini();
	TZDate = class TZDate extends TZDateMini {
		static tz(tz, ...args) {
			return args.length ? new TZDate(...args, tz) : new TZDate(Date.now(), tz);
		}
		toISOString() {
			const [sign, hours, minutes] = this.tzComponents();
			const tz = `${sign}${hours}:${minutes}`;
			return this.internal.toISOString().slice(0, -1) + tz;
		}
		toString() {
			return `${this.toDateString()} ${this.toTimeString()}`;
		}
		toDateString() {
			const [day, date, month, year] = this.internal.toUTCString().split(" ");
			return `${day?.slice(0, -1)} ${month} ${date} ${year}`;
		}
		toTimeString() {
			const time = this.internal.toUTCString().split(" ")[4];
			const [sign, hours, minutes] = this.tzComponents();
			return `${time} GMT${sign}${hours}${minutes} (${tzName(this.timeZone, this)})`;
		}
		toLocaleString(locales, options) {
			return Date.prototype.toLocaleString.call(this, locales, {
				...options,
				timeZone: options?.timeZone || this.timeZone
			});
		}
		toLocaleDateString(locales, options) {
			return Date.prototype.toLocaleDateString.call(this, locales, {
				...options,
				timeZone: options?.timeZone || this.timeZone
			});
		}
		toLocaleTimeString(locales, options) {
			return Date.prototype.toLocaleTimeString.call(this, locales, {
				...options,
				timeZone: options?.timeZone || this.timeZone
			});
		}
		tzComponents() {
			const offset = this.getTimezoneOffset();
			return [
				offset > 0 ? "-" : "+",
				String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0"),
				String(Math.abs(offset) % 60).padStart(2, "0")
			];
		}
		withTimeZone(timeZone) {
			return new TZDate(+this, timeZone);
		}
		[Symbol.for("constructDateFrom")](date) {
			return new TZDate(+new Date(date), this.timeZone);
		}
	};
}));
//#endregion
//#region node_modules/@date-fns/tz/tz/index.js
var init_tz$1 = __esmMin((() => {
	init_date();
}));
//#endregion
//#region node_modules/@date-fns/tz/tzScan/index.js
var init_tzScan = __esmMin((() => {}));
//#endregion
//#region node_modules/@date-fns/tz/index.js
var init_tz = __esmMin((() => {
	init_constants$1();
	init_date();
	init_mini();
	init_tz$1();
	init_tzOffset();
	init_tzScan();
	init_tzName();
})), daysInYear, maxTime, secondsInHour, secondsInDay, secondsInYear, secondsInMonth, constructFromSymbol;
var init_constants = __esmMin((() => {
	daysInYear = 365.2425;
	maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
	-maxTime;
	secondsInHour = 3600;
	secondsInDay = secondsInHour * 24;
	secondsInDay * 7;
	secondsInYear = secondsInDay * daysInYear;
	secondsInMonth = secondsInYear / 12;
	secondsInMonth * 3;
	constructFromSymbol = Symbol.for("constructDateFrom");
}));
//#endregion
//#region node_modules/date-fns/constructFrom.js
/**
* @name constructFrom
* @category Generic Helpers
* @summary Constructs a date using the reference date and the value
*
* @description
* The function constructs a new date using the constructor from the reference
* date and the given value. It helps to build generic functions that accept
* date extensions.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The reference date to take constructor from
* @param value - The value to create the date
*
* @returns Date initialized using the given date and value
*
* @example
* import { constructFrom } from "./constructFrom/date-fns";
*
* // A function that clones a date preserving the original type
* function cloneDate<DateType extends Date>(date: DateType): DateType {
*   return constructFrom(
*     date, // Use constructor from the given date
*     date.getTime() // Use the date value to create a new date
*   );
* }
*/
function constructFrom(date, value) {
	if (typeof date === "function") return date(value);
	if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
	if (date instanceof Date) return new date.constructor(value);
	return new Date(value);
}
var init_constructFrom = __esmMin((() => {
	init_constants();
}));
//#endregion
//#region node_modules/date-fns/toDate.js
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param argument - The value to convert
*
* @returns The parsed date in the local time zone
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument, context) {
	return constructFrom(context || argument, argument);
}
var init_toDate = __esmMin((() => {
	init_constructFrom();
}));
//#endregion
//#region node_modules/date-fns/addDays.js
var init_addDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addMonths.js
var init_addMonths = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/add.js
var init_add = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSaturday.js
var init_isSaturday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSunday.js
var init_isSunday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isWeekend.js
var init_isWeekend = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addBusinessDays.js
var init_addBusinessDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addMilliseconds.js
var init_addMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addHours.js
var init_addHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfWeek.js
var init_startOfWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
var init_startOfISOWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
var init_getISOWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfDay.js
var init_startOfDay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
var init_differenceInCalendarDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
var init_startOfISOWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setISOWeekYear.js
var init_setISOWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addISOWeekYears.js
var init_addISOWeekYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addMinutes.js
var init_addMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addQuarters.js
var init_addQuarters = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addSeconds.js
var init_addSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addWeeks.js
var init_addWeeks = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/addYears.js
var init_addYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/areIntervalsOverlapping.js
var init_areIntervalsOverlapping = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/max.js
var init_max = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/min.js
var init_min = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/clamp.js
var init_clamp = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/closestIndexTo.js
var init_closestIndexTo = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/closestTo.js
var init_closestTo = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/compareAsc.js
var init_compareAsc = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/compareDesc.js
var init_compareDesc = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/constructNow.js
var init_constructNow = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/daysToWeeks.js
var init_daysToWeeks = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameDay.js
var init_isSameDay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isDate.js
var init_isDate = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isValid.js
var init_isValid = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInBusinessDays.js
var init_differenceInBusinessDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInCalendarISOWeekYears.js
var init_differenceInCalendarISOWeekYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInCalendarISOWeeks.js
var init_differenceInCalendarISOWeeks = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInCalendarMonths.js
var init_differenceInCalendarMonths = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getQuarter.js
var init_getQuarter = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInCalendarQuarters.js
var init_differenceInCalendarQuarters = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInCalendarWeeks.js
var init_differenceInCalendarWeeks = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInCalendarYears.js
var init_differenceInCalendarYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInDays.js
var init_differenceInDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInHours.js
var init_differenceInHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subISOWeekYears.js
var init_subISOWeekYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInISOWeekYears.js
var init_differenceInISOWeekYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInMilliseconds.js
var init_differenceInMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInMinutes.js
var init_differenceInMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfDay.js
var init_endOfDay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfMonth.js
var init_endOfMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isLastDayOfMonth.js
var init_isLastDayOfMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInMonths.js
var init_differenceInMonths = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInQuarters.js
var init_differenceInQuarters = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInSeconds.js
var init_differenceInSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInWeeks.js
var init_differenceInWeeks = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/differenceInYears.js
var init_differenceInYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachDayOfInterval.js
var init_eachDayOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachHourOfInterval.js
var init_eachHourOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachMinuteOfInterval.js
var init_eachMinuteOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachMonthOfInterval.js
var init_eachMonthOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfQuarter.js
var init_startOfQuarter = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachQuarterOfInterval.js
var init_eachQuarterOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachWeekOfInterval.js
var init_eachWeekOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachWeekendOfInterval.js
var init_eachWeekendOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfMonth.js
var init_startOfMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachWeekendOfMonth.js
var init_eachWeekendOfMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfYear.js
var init_endOfYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfYear.js
var init_startOfYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachWeekendOfYear.js
var init_eachWeekendOfYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/eachYearOfInterval.js
var init_eachYearOfInterval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfDecade.js
var init_endOfDecade = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfHour.js
var init_endOfHour = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfWeek.js
var init_endOfWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfISOWeek.js
var init_endOfISOWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfISOWeekYear.js
var init_endOfISOWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfMinute.js
var init_endOfMinute = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfQuarter.js
var init_endOfQuarter = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfSecond.js
var init_endOfSecond = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfToday.js
var init_endOfToday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfTomorrow.js
var init_endOfTomorrow = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/endOfYesterday.js
var init_endOfYesterday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
var init_getDayOfYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getISOWeek.js
var init_getISOWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getWeekYear.js
var init_getWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
var init_startOfWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getWeek.js
var init_getWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/format.js
var init_format = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatDistance.js
var init_formatDistance = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatDistanceStrict.js
var init_formatDistanceStrict = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatDistanceToNow.js
var init_formatDistanceToNow = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatDistanceToNowStrict.js
var init_formatDistanceToNowStrict = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatDuration.js
var init_formatDuration = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatISO.js
var init_formatISO = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatISO9075.js
var init_formatISO9075 = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatISODuration.js
var init_formatISODuration = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatRFC3339.js
var init_formatRFC3339 = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatRFC7231.js
var init_formatRFC7231 = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/formatRelative.js
var init_formatRelative = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/fromUnixTime.js
var init_fromUnixTime = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getDate.js
var init_getDate = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getDay.js
var init_getDay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
var init_getDaysInMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isLeapYear.js
var init_isLeapYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getDaysInYear.js
var init_getDaysInYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getDecade.js
var init_getDecade = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getDefaultOptions.js
var init_getDefaultOptions = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getHours.js
var init_getHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getISODay.js
var init_getISODay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getISOWeeksInYear.js
var init_getISOWeeksInYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getMilliseconds.js
var init_getMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getMinutes.js
var init_getMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getMonth.js
var init_getMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getOverlappingDaysInIntervals.js
var init_getOverlappingDaysInIntervals = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getSeconds.js
var init_getSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getTime.js
var init_getTime = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getUnixTime.js
var init_getUnixTime = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getWeekOfMonth.js
var init_getWeekOfMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lastDayOfMonth.js
var init_lastDayOfMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getWeeksInMonth.js
var init_getWeeksInMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/getYear.js
var init_getYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/hoursToMilliseconds.js
var init_hoursToMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/hoursToMinutes.js
var init_hoursToMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/hoursToSeconds.js
var init_hoursToSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/interval.js
var init_interval = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/intervalToDuration.js
var init_intervalToDuration = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/intlFormat.js
var init_intlFormat = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/intlFormatDistance.js
var init_intlFormatDistance = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isAfter.js
/**
* @name isAfter
* @category Common Helpers
* @summary Is the first date after the second one?
*
* @description
* Is the first date after the second one?
*
* @param date - The date that should be after the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is after the second date
*
* @example
* // Is 10 July 1989 after 11 February 1987?
* const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> true
*/
function isAfter(date, dateToCompare) {
	return +toDate(date) > +toDate(dateToCompare);
}
var init_isAfter = __esmMin((() => {
	init_toDate();
}));
//#endregion
//#region node_modules/date-fns/isBefore.js
/**
* @name isBefore
* @category Common Helpers
* @summary Is the first date before the second one?
*
* @description
* Is the first date before the second one?
*
* @param date - The date that should be before the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is before the second date
*
* @example
* // Is 10 July 1989 before 11 February 1987?
* const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> false
*/
function isBefore(date, dateToCompare) {
	return +toDate(date) < +toDate(dateToCompare);
}
var init_isBefore = __esmMin((() => {
	init_toDate();
}));
//#endregion
//#region node_modules/date-fns/isEqual.js
var init_isEqual = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isExists.js
var init_isExists = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isFirstDayOfMonth.js
var init_isFirstDayOfMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isFriday.js
var init_isFriday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isFuture.js
var init_isFuture = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/transpose.js
var init_transpose = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setWeek.js
var init_setWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setISOWeek.js
var init_setISOWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setDay.js
var init_setDay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setISODay.js
var init_setISODay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/parse.js
var init_parse = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isMatch.js
var init_isMatch = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isMonday.js
var init_isMonday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isPast.js
var init_isPast = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfHour.js
var init_startOfHour = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameHour.js
var init_isSameHour = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameWeek.js
var init_isSameWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameISOWeek.js
var init_isSameISOWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameISOWeekYear.js
var init_isSameISOWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfMinute.js
var init_startOfMinute = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameMinute.js
var init_isSameMinute = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameMonth.js
var init_isSameMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameQuarter.js
var init_isSameQuarter = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfSecond.js
var init_startOfSecond = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameSecond.js
var init_isSameSecond = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isSameYear.js
var init_isSameYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisHour.js
var init_isThisHour = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisISOWeek.js
var init_isThisISOWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisMinute.js
var init_isThisMinute = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisMonth.js
var init_isThisMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisQuarter.js
var init_isThisQuarter = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisSecond.js
var init_isThisSecond = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisWeek.js
var init_isThisWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThisYear.js
var init_isThisYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isThursday.js
var init_isThursday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isToday.js
var init_isToday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isTomorrow.js
var init_isTomorrow = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isTuesday.js
var init_isTuesday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isWednesday.js
var init_isWednesday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isWithinInterval.js
/**
* The {@link isWithinInterval} function options.
*/
/**
* @name isWithinInterval
* @category Interval Helpers
* @summary Is the given date within the interval?
*
* @description
* Is the given date within the interval? (Including start and end.)
*
* @param date - The date to check
* @param interval - The interval to check
* @param options - An object with options
*
* @returns The date is within the interval
*
* @example
* // For the date within the interval:
* isWithinInterval(new Date(2014, 0, 3), {
*   start: new Date(2014, 0, 1),
*   end: new Date(2014, 0, 7)
* })
* // => true
*
* @example
* // For the date outside of the interval:
* isWithinInterval(new Date(2014, 0, 10), {
*   start: new Date(2014, 0, 1),
*   end: new Date(2014, 0, 7)
* })
* // => false
*
* @example
* // For date equal to the interval start:
* isWithinInterval(date, { start, end: date })
* // => true
*
* @example
* // For date equal to the interval end:
* isWithinInterval(date, { start: date, end })
* // => true
*/
function isWithinInterval(date, interval, options) {
	const time = +toDate(date, options?.in);
	const [startTime, endTime] = [+toDate(interval.start, options?.in), +toDate(interval.end, options?.in)].sort((a, b) => a - b);
	return time >= startTime && time <= endTime;
}
var init_isWithinInterval = __esmMin((() => {
	init_toDate();
}));
//#endregion
//#region node_modules/date-fns/subDays.js
var init_subDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/isYesterday.js
var init_isYesterday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lastDayOfDecade.js
var init_lastDayOfDecade = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lastDayOfWeek.js
var init_lastDayOfWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lastDayOfISOWeek.js
var init_lastDayOfISOWeek = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lastDayOfISOWeekYear.js
var init_lastDayOfISOWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lastDayOfQuarter.js
var init_lastDayOfQuarter = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lastDayOfYear.js
var init_lastDayOfYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/lightFormat.js
var init_lightFormat = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/milliseconds.js
var init_milliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/millisecondsToHours.js
var init_millisecondsToHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/millisecondsToMinutes.js
var init_millisecondsToMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/millisecondsToSeconds.js
var init_millisecondsToSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/minutesToHours.js
var init_minutesToHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/minutesToMilliseconds.js
var init_minutesToMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/minutesToSeconds.js
var init_minutesToSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/monthsToQuarters.js
var init_monthsToQuarters = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/monthsToYears.js
var init_monthsToYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextDay.js
var init_nextDay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextFriday.js
var init_nextFriday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextMonday.js
var init_nextMonday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextSaturday.js
var init_nextSaturday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextSunday.js
var init_nextSunday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextThursday.js
var init_nextThursday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextTuesday.js
var init_nextTuesday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/nextWednesday.js
var init_nextWednesday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/parseISO.js
var init_parseISO = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/parseJSON.js
var init_parseJSON = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousDay.js
var init_previousDay = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousFriday.js
var init_previousFriday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousMonday.js
var init_previousMonday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousSaturday.js
var init_previousSaturday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousSunday.js
var init_previousSunday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousThursday.js
var init_previousThursday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousTuesday.js
var init_previousTuesday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/previousWednesday.js
var init_previousWednesday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/quartersToMonths.js
var init_quartersToMonths = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/quartersToYears.js
var init_quartersToYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/roundToNearestHours.js
var init_roundToNearestHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/roundToNearestMinutes.js
var init_roundToNearestMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/secondsToHours.js
var init_secondsToHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/secondsToMilliseconds.js
var init_secondsToMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/secondsToMinutes.js
var init_secondsToMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setMonth.js
var init_setMonth = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/set.js
var init_set = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setDate.js
var init_setDate = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setDayOfYear.js
var init_setDayOfYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setDefaultOptions.js
var init_setDefaultOptions = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setHours.js
var init_setHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setMilliseconds.js
var init_setMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setMinutes.js
var init_setMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setQuarter.js
var init_setQuarter = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setSeconds.js
var init_setSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setWeekYear.js
var init_setWeekYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/setYear.js
var init_setYear = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfDecade.js
var init_startOfDecade = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfToday.js
var init_startOfToday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfTomorrow.js
var init_startOfTomorrow = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/startOfYesterday.js
var init_startOfYesterday = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subMonths.js
var init_subMonths = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/sub.js
var init_sub = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subBusinessDays.js
var init_subBusinessDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subHours.js
var init_subHours = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subMilliseconds.js
var init_subMilliseconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subMinutes.js
var init_subMinutes = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subQuarters.js
var init_subQuarters = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subSeconds.js
var init_subSeconds = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subWeeks.js
var init_subWeeks = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/subYears.js
var init_subYears = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/weeksToDays.js
var init_weeksToDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/yearsToDays.js
var init_yearsToDays = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/yearsToMonths.js
var init_yearsToMonths = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/yearsToQuarters.js
var init_yearsToQuarters = __esmMin((() => {}));
//#endregion
//#region node_modules/date-fns/index.js
var init_date_fns = __esmMin((() => {
	init_add();
	init_addBusinessDays();
	init_addDays();
	init_addHours();
	init_addISOWeekYears();
	init_addMilliseconds();
	init_addMinutes();
	init_addMonths();
	init_addQuarters();
	init_addSeconds();
	init_addWeeks();
	init_addYears();
	init_areIntervalsOverlapping();
	init_clamp();
	init_closestIndexTo();
	init_closestTo();
	init_compareAsc();
	init_compareDesc();
	init_constructFrom();
	init_constructNow();
	init_daysToWeeks();
	init_differenceInBusinessDays();
	init_differenceInCalendarDays();
	init_differenceInCalendarISOWeekYears();
	init_differenceInCalendarISOWeeks();
	init_differenceInCalendarMonths();
	init_differenceInCalendarQuarters();
	init_differenceInCalendarWeeks();
	init_differenceInCalendarYears();
	init_differenceInDays();
	init_differenceInHours();
	init_differenceInISOWeekYears();
	init_differenceInMilliseconds();
	init_differenceInMinutes();
	init_differenceInMonths();
	init_differenceInQuarters();
	init_differenceInSeconds();
	init_differenceInWeeks();
	init_differenceInYears();
	init_eachDayOfInterval();
	init_eachHourOfInterval();
	init_eachMinuteOfInterval();
	init_eachMonthOfInterval();
	init_eachQuarterOfInterval();
	init_eachWeekOfInterval();
	init_eachWeekendOfInterval();
	init_eachWeekendOfMonth();
	init_eachWeekendOfYear();
	init_eachYearOfInterval();
	init_endOfDay();
	init_endOfDecade();
	init_endOfHour();
	init_endOfISOWeek();
	init_endOfISOWeekYear();
	init_endOfMinute();
	init_endOfMonth();
	init_endOfQuarter();
	init_endOfSecond();
	init_endOfToday();
	init_endOfTomorrow();
	init_endOfWeek();
	init_endOfYear();
	init_endOfYesterday();
	init_format();
	init_formatDistance();
	init_formatDistanceStrict();
	init_formatDistanceToNow();
	init_formatDistanceToNowStrict();
	init_formatDuration();
	init_formatISO();
	init_formatISO9075();
	init_formatISODuration();
	init_formatRFC3339();
	init_formatRFC7231();
	init_formatRelative();
	init_fromUnixTime();
	init_getDate();
	init_getDay();
	init_getDayOfYear();
	init_getDaysInMonth();
	init_getDaysInYear();
	init_getDecade();
	init_getDefaultOptions();
	init_getHours();
	init_getISODay();
	init_getISOWeek();
	init_getISOWeekYear();
	init_getISOWeeksInYear();
	init_getMilliseconds();
	init_getMinutes();
	init_getMonth();
	init_getOverlappingDaysInIntervals();
	init_getQuarter();
	init_getSeconds();
	init_getTime();
	init_getUnixTime();
	init_getWeek();
	init_getWeekOfMonth();
	init_getWeekYear();
	init_getWeeksInMonth();
	init_getYear();
	init_hoursToMilliseconds();
	init_hoursToMinutes();
	init_hoursToSeconds();
	init_interval();
	init_intervalToDuration();
	init_intlFormat();
	init_intlFormatDistance();
	init_isAfter();
	init_isBefore();
	init_isDate();
	init_isEqual();
	init_isExists();
	init_isFirstDayOfMonth();
	init_isFriday();
	init_isFuture();
	init_isLastDayOfMonth();
	init_isLeapYear();
	init_isMatch();
	init_isMonday();
	init_isPast();
	init_isSameDay();
	init_isSameHour();
	init_isSameISOWeek();
	init_isSameISOWeekYear();
	init_isSameMinute();
	init_isSameMonth();
	init_isSameQuarter();
	init_isSameSecond();
	init_isSameWeek();
	init_isSameYear();
	init_isSaturday();
	init_isSunday();
	init_isThisHour();
	init_isThisISOWeek();
	init_isThisMinute();
	init_isThisMonth();
	init_isThisQuarter();
	init_isThisSecond();
	init_isThisWeek();
	init_isThisYear();
	init_isThursday();
	init_isToday();
	init_isTomorrow();
	init_isTuesday();
	init_isValid();
	init_isWednesday();
	init_isWeekend();
	init_isWithinInterval();
	init_isYesterday();
	init_lastDayOfDecade();
	init_lastDayOfISOWeek();
	init_lastDayOfISOWeekYear();
	init_lastDayOfMonth();
	init_lastDayOfQuarter();
	init_lastDayOfWeek();
	init_lastDayOfYear();
	init_lightFormat();
	init_max();
	init_milliseconds();
	init_millisecondsToHours();
	init_millisecondsToMinutes();
	init_millisecondsToSeconds();
	init_min();
	init_minutesToHours();
	init_minutesToMilliseconds();
	init_minutesToSeconds();
	init_monthsToQuarters();
	init_monthsToYears();
	init_nextDay();
	init_nextFriday();
	init_nextMonday();
	init_nextSaturday();
	init_nextSunday();
	init_nextThursday();
	init_nextTuesday();
	init_nextWednesday();
	init_parse();
	init_parseISO();
	init_parseJSON();
	init_previousDay();
	init_previousFriday();
	init_previousMonday();
	init_previousSaturday();
	init_previousSunday();
	init_previousThursday();
	init_previousTuesday();
	init_previousWednesday();
	init_quartersToMonths();
	init_quartersToYears();
	init_roundToNearestHours();
	init_roundToNearestMinutes();
	init_secondsToHours();
	init_secondsToMilliseconds();
	init_secondsToMinutes();
	init_set();
	init_setDate();
	init_setDay();
	init_setDayOfYear();
	init_setDefaultOptions();
	init_setHours();
	init_setISODay();
	init_setISOWeek();
	init_setISOWeekYear();
	init_setMilliseconds();
	init_setMinutes();
	init_setMonth();
	init_setQuarter();
	init_setSeconds();
	init_setWeek();
	init_setWeekYear();
	init_setYear();
	init_startOfDay();
	init_startOfDecade();
	init_startOfHour();
	init_startOfISOWeek();
	init_startOfISOWeekYear();
	init_startOfMinute();
	init_startOfMonth();
	init_startOfQuarter();
	init_startOfSecond();
	init_startOfToday();
	init_startOfTomorrow();
	init_startOfWeek();
	init_startOfWeekYear();
	init_startOfYear();
	init_startOfYesterday();
	init_sub();
	init_subBusinessDays();
	init_subDays();
	init_subHours();
	init_subISOWeekYears();
	init_subMilliseconds();
	init_subMinutes();
	init_subMonths();
	init_subQuarters();
	init_subSeconds();
	init_subWeeks();
	init_subYears();
	init_toDate();
	init_transpose();
	init_weeksToDays();
	init_yearsToDays();
	init_yearsToMonths();
	init_yearsToQuarters();
}));
//#endregion
//#region src/frontend/translation.ts
var TimeZone;
var init_translation = __esmMin((() => {
	TimeZone = /* @__PURE__ */ function(TimeZone) {
		TimeZone["local"] = "local";
		TimeZone["server"] = "server";
		return TimeZone;
	}({});
}));
//#endregion
//#region src/frontend/datetime/weekday.ts
var WEEKDAYS_SHORT$1, WEEKDAY_MAP;
var init_weekday = __esmMin((() => {
	WEEKDAYS_SHORT$1 = [
		"sun",
		"mon",
		"tue",
		"wed",
		"thu",
		"fri",
		"sat"
	];
	WEEKDAY_MAP = {
		0: "sun",
		1: "mon",
		2: "tue",
		3: "wed",
		4: "thu",
		5: "fri",
		6: "sat"
	};
}));
//#endregion
//#region src/frontend/datetime/check_time.ts
/**
* Validate a time string format and value ranges without creating Date objects
* @param timeString Time string to validate (HH:MM or HH:MM:SS)
* @returns true if valid, false otherwise
*/
function isValidTimeString(timeString) {
	if (!timeString || timeString.trim() === "") return false;
	const parts = timeString.split(":");
	if (parts.length < 2 || parts.length > 3) return false;
	if (!parts.every((part) => /^\d+$/.test(part))) return false;
	const hours = parseInt(parts[0], 10);
	const minutes = parseInt(parts[1], 10);
	const seconds = parts.length === 3 ? parseInt(parts[2], 10) : 0;
	if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return false;
	return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59;
}
var parseTimeString, getTimeZone, checkTimeInRange;
var init_check_time = __esmMin((() => {
	init_tz();
	init_date_fns();
	init_translation();
	init_weekday();
	parseTimeString = (timeString, timezone) => {
		const parts = timeString.split(":");
		const hours = parseInt(parts[0], 10);
		const minutes = parseInt(parts[1], 10);
		const seconds = parts.length === 3 ? parseInt(parts[2], 10) : 0;
		const now = new TZDate(/* @__PURE__ */ new Date(), timezone);
		const dateWithTime = new TZDate(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds, 0, timezone);
		return new Date(dateWithTime.getTime());
	};
	getTimeZone = (hass) => {
		return hass.locale.time_zone === TimeZone.server ? hass.config.time_zone : Intl.DateTimeFormat().resolvedOptions().timeZone;
	};
	checkTimeInRange = (hass, { after, before, weekdays }) => {
		const timezone = getTimeZone(hass);
		const now = new TZDate(/* @__PURE__ */ new Date(), timezone);
		if (weekdays && weekdays.length > 0) {
			const currentWeekday = WEEKDAY_MAP[now.getDay()];
			if (!weekdays.includes(currentWeekday)) return false;
		}
		if (!after && !before) return true;
		const afterDate = after ? parseTimeString(after, timezone) : void 0;
		const beforeDate = before ? parseTimeString(before, timezone) : void 0;
		if (afterDate && beforeDate) {
			if (isBefore(beforeDate, afterDate)) return !isBefore(now, afterDate) || !isAfter(now, beforeDate);
			return isWithinInterval(now, {
				start: afterDate,
				end: beforeDate
			});
		}
		if (afterDate) return !isBefore(now, afterDate);
		if (beforeDate) return !isAfter(now, beforeDate);
		return true;
	};
}));
//#endregion
//#region src/conditional/flex-slider-card-validate-condition.ts
function getValueFromEntityId(hass, value) {
	if (isValidEntityId(value) && hass.states[value]) return hass.states[value]?.state;
}
function checkStateCondition(condition, hass, context) {
	const entityId = condition.entity || context.entity_id;
	const stateObj = entityId ? hass.states[entityId] : void 0;
	const attribute = "attribute" in condition ? condition.attribute : void 0;
	let state;
	if (!stateObj) state = UNKNOWN;
	else if (attribute) {
		const attrValue = stateObj.attributes[attribute];
		state = attrValue == null ? UNKNOWN : String(attrValue);
	} else state = stateObj.state;
	let value = condition.state ?? condition.state_not;
	if (value === void 0) return false;
	if (Array.isArray(value)) {
		const entityValues = value.map((v) => getValueFromEntityId(hass, v)).filter((v) => v !== void 0);
		value = [...value, ...entityValues];
	} else if (typeof value === "string") {
		const entityValue = getValueFromEntityId(hass, value);
		value = [value];
		if (entityValue) value.push(entityValue);
	}
	return condition.state != null ? ensureArray(value).includes(state) : !ensureArray(value).includes(state);
}
function checkStateNumericCondition(condition, hass, context) {
	const entityId = condition.entity || context.entity_id;
	const stateObj = entityId ? hass.states[entityId] : void 0;
	const state = condition.attribute ? stateObj?.attributes[condition.attribute] : stateObj?.state;
	let above = condition.above;
	let below = condition.below;
	if (typeof above === "string") above = getValueFromEntityId(hass, above) ?? above;
	if (typeof below === "string") below = getValueFromEntityId(hass, below) ?? below;
	const numericState = Number(state);
	const numericAbove = Number(above);
	const numericBelow = Number(below);
	if (isNaN(numericState)) return false;
	return (condition.above == null || isNaN(numericAbove) || numericAbove < numericState) && (condition.below == null || isNaN(numericBelow) || numericBelow > numericState);
}
function checkViewColumnsCondition(condition, context) {
	if (!context.max_columns) return true;
	return (condition.min == null || context.max_columns >= condition.min) && (condition.max == null || context.max_columns <= condition.max);
}
function checkScreenCondition(condition, _) {
	return condition.media_query ? matchMedia(condition.media_query).matches : false;
}
function checkTimeCondition(condition, hass) {
	return checkTimeInRange(hass, condition);
}
function checkAndCondition(condition, hass, context) {
	if (!condition.conditions) return true;
	return checkConditionsMet(condition.conditions, hass, context);
}
function checkNotCondition(condition, hass, context) {
	if (!condition.conditions) return true;
	return !checkConditionsMet(condition.conditions, hass, context);
}
function checkOrCondition(condition, hass, context) {
	if (!condition.conditions) return true;
	return condition.conditions.some((c) => checkConditionsMet([c], hass, context));
}
/**
* Return the result of applying conditions
* @param conditions conditions to apply
* @param hass Home Assistant object
* @param context optional context for conditions that need runtime information
* @returns true if conditions are respected
*/
function checkConditionsMet(conditions, hass, context) {
	return conditions.every((c) => {
		if ("condition" in c) switch (c.condition) {
			case "view_columns": return checkViewColumnsCondition(c, context);
			case "time": return checkTimeCondition(c, hass);
			case "screen": return checkScreenCondition(c, hass);
			case "numeric_state": return checkStateNumericCondition(c, hass, context);
			case "and": return checkAndCondition(c, hass, context);
			case "not": return checkNotCondition(c, hass, context);
			case "or": return checkOrCondition(c, hass, context);
			default: return checkStateCondition(c, hass, context);
		}
		return checkStateCondition(c, hass, context);
	});
}
function validateStateCondition(condition) {
	return condition.state != null || condition.state_not != null;
}
function validateScreenCondition(condition) {
	return condition.media_query != null;
}
function validateTimeCondition(condition) {
	const hasAfter = condition.after != null && condition.after !== "";
	const hasBefore = condition.before != null && condition.before !== "";
	const hasTime = hasAfter || hasBefore;
	const hasWeekdays = condition.weekdays != null && condition.weekdays.length > 0;
	const weekdaysValid = !hasWeekdays || condition.weekdays.every((w) => WEEKDAYS_SHORT$1.includes(w));
	const timeStringsValid = (!hasAfter || isValidTimeString(condition.after)) && (!hasBefore || isValidTimeString(condition.before));
	const timeRangeValid = !hasAfter || !hasBefore || condition.after !== condition.before;
	return (hasTime || hasWeekdays) && weekdaysValid && timeStringsValid && timeRangeValid;
}
function validateAndCondition(condition) {
	return condition.conditions != null;
}
function validateNotCondition(condition) {
	return condition.conditions != null;
}
function validateOrCondition(condition) {
	return condition.conditions != null;
}
function validateViewColumnsCondition(condition) {
	return condition.min != null || condition.max != null;
}
function validateNumericStateCondition(condition) {
	return condition.above != null || condition.below != null;
}
/**
* Validate the conditions config for the UI
* @param conditions conditions to apply
* @returns true if conditions are validated
*/
function validateConditionalConfig(conditions) {
	return conditions.every((c) => {
		if ("condition" in c) switch (c.condition) {
			case "view_columns": return validateViewColumnsCondition(c);
			case "screen": return validateScreenCondition(c);
			case "time": return validateTimeCondition(c);
			case "numeric_state": return validateNumericStateCondition(c);
			case "and": return validateAndCondition(c);
			case "not": return validateNotCondition(c);
			case "or": return validateOrCondition(c);
			default: return validateStateCondition(c);
		}
		return validateStateCondition(c);
	});
}
var UNKNOWN;
var init_flex_slider_card_validate_condition = __esmMin((() => {
	init_ensure_array();
	init_check_time();
	init_weekday();
	init_entity_management();
	UNKNOWN = "unknown";
}));
//#endregion
//#region src/config/flex-slider-card-config-mngr.ts
init_entity_management();
init_config_legacy_helpers();
init_flex_slider_card_validate_condition();
var FlexSliderCardConfigMngr = class {
	constructor(config) {
		this._config = structuredClone(config);
		this._entities = [];
		this._referenceEntity = void 0;
		this._entitytype = void 0;
		this._checkFormat();
		this._checkTitle();
		this._checkEntities();
		this._checkSlider();
		this._checkValuesBar();
		this._checkBubbles();
		this._checkTicks();
		this._checkReference();
		this._checkAdaptiveState();
	}
	update(hass) {
		this._updateFormat(hass);
		this._updateTitle(hass);
		this._updateEntities(hass);
		this._updateSlider(hass);
		this._updateValuesBar(hass);
		this._updateBubbles(hass);
		this._updateTicks(hass);
		this._updateReference(hass);
		this._updateAdaptiveState(hass);
	}
	reset() {
		this._resetFormat();
		this._resetTitle();
		this._resetEntities();
		this._resetSlider();
		this._resetValuesBar();
		this._resetBubbles();
		this._resetTicks();
		this._resetReference();
		this._resetAdaptiveState();
	}
	get config() {
		return this._config;
	}
	_checkFormat() {
		if (this._config.format === void 0) this._config.format = "std";
		assertFlexSliderCardFormat(this._config.format);
	}
	_updateFormat(hass) {}
	_resetFormat() {}
	get isCompact() {
		return this._config.format === "compact";
	}
	get isStd() {
		return this._config.format === "std";
	}
	_checkTitle() {
		assertOptionalString(this._config.name, "name");
		if (this._config.name == void 0) this._config.name = void 0;
	}
	_updateTitle(hass) {}
	_resetTitle() {}
	get hasTitle() {
		return this._config.name !== void 0;
	}
	get title() {
		return this._config.name || "";
	}
	_checkValuesBar() {
		assertOptionalBoolean(this._config.valuesbaractive, "valuesbar");
		if (this._config.orientation === "vertical") this._config.valuesbaractive = false;
		else if (this._config.valuesbaractive == null) this._config.valuesbaractive = false;
		if (this._config.valuesbar == null) this._config.valuesbar = {};
		if (this._config.valuesbar.digits == null) this._config.valuesbar.digits = "auto";
		assertFlexSliderCardDigits(this._config.valuesbar.digits);
		if (this._config.valuesbar.digits === "auto") this._config.valuesbar.nbdigits = this.step.toString().split(".")[1]?.length || 0;
		if (this._config.valuesbar.nbdigits == null) this._config.valuesbar.nbdigits = 0;
		assertOptionalNumber(this._config.valuesbar.nbdigits, "nbdigits");
		if (this._config.valuesbar.nbdigits < 0) throw new Error("nbdigits must be >= 0");
		if (this._config.valuesbar.unit == null) this._config.valuesbar.unit = "";
		assertOptionalBoolean(this._config.valuesbar.showtext, "showtext");
		if (this._config.valuesbar.showtext == null) this._config.valuesbar.showtext = false;
	}
	_updateValuesBar(hass) {}
	_resetValuesBar() {}
	get hasValuesBar() {
		return this._config.valuesbaractive === true;
	}
	get nbdigitsValuesBar() {
		if (this._config.valuesbar?.nbdigits == null) throw new Error("Digits is not defined in config");
		return this._config.valuesbar.nbdigits;
	}
	get unitValuesBar() {
		if (this._config.valuesbar?.unit == null) throw new Error("Unit is not defined in config");
		return this._config.valuesbar.unit;
	}
	get showTextValuesBar() {
		if (this._config.valuesbar?.showtext == null) throw new Error("Show text is not defined in config");
		return this._config.valuesbar.showtext;
	}
	_checkBubbles() {
		assertOptionalBoolean(this._config.bubblesactive, "bubbles");
		if (this._config.bubblesactive == null) this._config.bubblesactive = false;
		if (this._config.bubbles == null) this._config.bubbles = {};
		if (this._config.bubbles.digits == null) this._config.bubbles.digits = "auto";
		assertFlexSliderCardDigits(this._config.bubbles.digits);
		if (this._config.bubbles.digits === "auto") this._config.bubbles.nbdigits = this.step.toString().split(".")[1]?.length || 0;
		if (this._config.bubbles.nbdigits == null) this._config.bubbles.nbdigits = 0;
		assertOptionalNumber(this._config.bubbles.nbdigits, "nbdigits");
		if (this._config.bubbles.nbdigits < 0) throw new Error("nbdigits must be >= 0");
		if (this._config.bubbles.unit == null) this._config.bubbles.unit = "";
		assertOptionalBoolean(this._config.bubbles.showtext, "showtext");
		if (this._config.bubbles.showtext == null) this._config.bubbles.showtext = false;
		assertOptionalBoolean(this._config.bubbles.dragonly, "dragonly");
		if (this._config.bubbles.dragonly == null) this._config.bubbles.dragonly = false;
	}
	_updateBubbles(hass) {}
	_resetBubbles() {}
	get hasBubbles() {
		return this._config.bubblesactive === true;
	}
	get nbdigitsBubbles() {
		if (this._config.bubbles?.nbdigits == null) throw new Error("Digits is not defined in config");
		return this._config.bubbles.nbdigits;
	}
	get unitBubbles() {
		if (this._config.bubbles?.unit == null) throw new Error("Unit is not defined in config");
		return this._config.bubbles.unit;
	}
	get showTextBubbles() {
		if (this._config.bubbles?.showtext == null) throw new Error("Show text is not defined in config");
		return this._config.bubbles.showtext;
	}
	get isDragOnlyBubbles() {
		if (this._config.bubbles?.dragonly == null) throw new Error("Drag only is not defined in config");
		return this._config.bubbles.dragonly;
	}
	_checkTicks() {
		assertOptionalBoolean(this._config.ticksactive, "ticks");
		if (this._config.ticksactive == null) this._config.ticksactive = false;
		if (this._config.ticks == null) this._config.ticks = {};
		if (this._config.ticks.digits == null) this._config.ticks.digits = "auto";
		assertFlexSliderCardDigits(this._config.ticks.digits);
		if (this._config.ticks.digits === "auto") this._config.ticks.nbdigits = this.step.toString().split(".")[1]?.length || 0;
		if (this._config.ticks.nbdigits == null) this._config.ticks.nbdigits = 0;
		assertOptionalNumber(this._config.ticks.nbdigits, "nbdigits");
		if (this._config.ticks.nbdigits < 0) throw new Error("nbdigits must be >= 0");
		assertOptionalNumber(this._config.ticks.majorticks, "majorticks");
		if (this._config.ticks.majorticks == null) this._config.ticks.majorticks = 4;
		if (this._config.ticks.majorticks < 2) throw new Error("majorticks must be >= 2");
		assertOptionalNumber(this._config.ticks.minorticks, "minorticks");
		if (this._config.ticks.minorticks == null) this._config.ticks.minorticks = 0;
		if (this._config.ticks.minorticks < 0) throw new Error("minorticks must be >= 0");
	}
	_updateTicks(hass) {}
	_resetTicks() {}
	get hasTicks() {
		return this._config.ticksactive === true;
	}
	get nbdigitsTicks() {
		if (this._config.ticks?.nbdigits == null) throw new Error("Digits is not defined in config");
		return this._config.ticks.nbdigits;
	}
	get majorticks() {
		if (this._config.ticks?.majorticks == null) throw new Error("Major ticks is not defined in config");
		return this._config.ticks.majorticks;
	}
	get minorticks() {
		if (this._config.ticks?.minorticks == null) throw new Error("Minor ticks is not defined in config");
		return this._config.ticks.minorticks;
	}
	_checkReference() {
		assertOptionalBoolean(this._config.referenceactive, "reference");
		if (this._config.referenceactive == null) this._config.referenceactive = false;
		if (this._config.reference == null) this._config.reference = {};
		this._referenceEntity = void 0;
		assertOptionalString(this._config.reference.entity, "reference.entity");
		assertOptionalString(this._config.reference.text, "reference.text");
		assertOptionalString(this._config.reference.unit, "reference.unit");
		assertOptionalBoolean(this._config.reference.bubble, "reference.bubble");
		assertOptionalBoolean(this._config.reference.valuesbar, "reference.valuesbar");
		assertOptionalBoolean(this._config.reference.valuesbartextlarge, "reference.valuesbartextlarge");
		if (this._config.reference.unit == null) this._config.reference.unit = void 0;
		if (this._config.reference.bubble == null) this._config.reference.bubble = false;
		if (this._config.orientation === "vertical") this._config.reference.valuesbar = false;
		else if (this._config.reference.valuesbar == null) this._config.reference.valuesbar = false;
		if (this._config.reference.valuesbar !== true) this._config.reference.valuesbartextlarge = false;
		else if (this._config.reference.valuesbartextlarge == null) this._config.reference.valuesbartextlarge = false;
		if (this._config.valuesbaractive === true && this._config.reference.valuesbar === true) throw new Error("Cannot use both entity values bar and reference values bar");
		if (!this._config.reference.entity) return;
		if (!isValidEntityId(this._config.reference.entity)) throw new Error("Invalid format for reference entity. Expected domain.object_id");
		if (getEntityType(this._config.reference.entity) !== this.entitytype) {
			const expectedDomains = this.entitytype === FlexSliderCardEntityType.TIME ? "input_datetime" : this.entitytype === FlexSliderCardEntityType.COVER ? "cover" : "number or input_number";
			throw new Error(`Reference entity must use compatible domains. Expected: ${expectedDomains}`);
		}
		this._referenceEntity = new FlexSliderCardEntity(this._config.reference.entity, this._config.reference.text ?? "");
	}
	_updateReference(hass) {
		this._referenceEntity?.update(hass);
	}
	_resetReference() {
		this._referenceEntity?.resetBaseline();
	}
	get hasReferenceBubble() {
		return this.hasReference && this._config.reference?.bubble === true;
	}
	get hasReferenceValuesBar() {
		return this.hasReference && this._config.reference?.valuesbar === true;
	}
	get hasReferenceValuesBarTextLarge() {
		return this.hasReferenceValuesBar && this._config.reference?.valuesbartextlarge === true;
	}
	get referenceUnit() {
		return this._config.reference?.unit ?? "";
	}
	_checkAdaptiveState() {
		assertOptionalBoolean(this._config.adaptivestateactive, "adaptivestateactive");
		if (this._config.adaptivestateactive == null) this._config.adaptivestateactive = false;
		if (this._config.adaptivestate == null) this._config.adaptivestate = {};
		if (this._config.adaptivestate.conditions == null) this._config.adaptivestate.conditions = [];
		if (!Array.isArray(this._config.adaptivestate.conditions)) throw new Error("adaptivestate.conditions must be an array");
		if (!validateConditionalConfig(this._config.adaptivestate.conditions)) throw new Error("Invalid adaptive state conditions");
		assertOptionalBoolean(this._config.adaptivestate.editablewhenlinkedinactive, "adaptivestate.editablewhenlinkedinactive");
		if (this._config.adaptivestate.editablewhenlinkedinactive == null) this._config.adaptivestate.editablewhenlinkedinactive = false;
	}
	_updateAdaptiveState(hass) {}
	_resetAdaptiveState() {}
	get isAdaptative() {
		return this._config.adaptivestateactive === true;
	}
	get adaptiveStateConditions() {
		if (this._config.adaptivestate?.conditions == null) throw new Error("Adaptive state conditions are not defined in config");
		return this._config.adaptivestate.conditions;
	}
	get isEditableWhenLinkedInactive() {
		if (this._config.adaptivestate?.editablewhenlinkedinactive == null) throw new Error("Editable when linked inactive state is not defined in config");
		return this._config.adaptivestate.editablewhenlinkedinactive;
	}
	_checkSlider() {
		assertOptionalNumber(this._config.min, "min");
		this._config.min ??= 0;
		assertOptionalNumber(this._config.max, "max");
		this._config.max ??= 100;
		assertOptionalNumber(this._config.step, "step");
		this._config.step ??= 1;
		if (this.entitytype === FlexSliderCardEntityType.TIME) {
			this._config.min = 0;
			this._config.max = 1439;
			this._config.step = Math.max(1, Math.round(this._config.step));
		}
		if (this.entitytype === FlexSliderCardEntityType.COVER) {
			if (this._config.min < 0 || this._config.min > 100) throw new Error(`Invalid cover range: min (${this._config.min}) must be between 0 and 100`);
			if (this._config.max < 0 || this._config.max > 100) throw new Error(`Invalid cover range: max (${this._config.max}) must be between 0 and 100`);
		}
		if (this._config.step <= 0) throw new Error(`Invalid step '${this._config.step}', expected a number > 0`);
		if (this._config.min > this._config.max) throw new Error(`Invalid range: min (${this._config.min}) cannot be greater than max (${this._config.max})`);
		if (this._config.direction == null) this._config.direction = "ltr";
		assertFlexSliderCardDirection(this._config.direction);
		if (this._config.orientation == null) this._config.orientation = "horizontal";
		assertFlexSliderCardOrientation(this._config.orientation);
		if (this._config.verticallayout == null) this._config.verticallayout = "standard";
		assertFlexSliderCardVerticalLayout(this._config.verticallayout);
		if (this._config.handlesbehavior == null) this._config.handlesbehavior = "fixed";
		assertFlexSliderCardHandlesBehavior(this._config.handlesbehavior);
		if (this._config.orientation === "horizontal") {
			assertOptionalNumber(this._config.horizontalwidth, "horizontalwidth");
			this._config.horizontalwidth ??= 90;
			if (this._config.horizontalwidth < 10 || this._config.horizontalwidth > 100) throw new Error("horizontalwidth must be between 10 and 100");
			this._config.verticalheight = void 0;
		} else {
			this._config.horizontalwidth = void 0;
			assertOptionalNumber(this._config.verticalheight, "verticalheight");
			if (this._config.verticalheight != null) {
				const minVerticalHeight = this.isCompact ? 1 : 2;
				if (this._config.verticalheight < minVerticalHeight || this._config.verticalheight > 12) throw new Error(`verticalheight must be between ${minVerticalHeight} and 12`);
			}
		}
	}
	_updateSlider(hass) {}
	_resetSlider() {}
	get min() {
		return this._config.min;
	}
	get max() {
		return this._config.max;
	}
	get step() {
		return this._config.step;
	}
	get direction() {
		if (this._config.direction == null) throw new Error("Direction is not defined in config");
		return this._config.direction;
	}
	get orientation() {
		if (this._config.orientation == null) throw new Error("Orientation is not defined in config");
		return this._config.orientation;
	}
	get isVertical() {
		return this._config.orientation === "vertical";
	}
	get verticalLayout() {
		if (this._config.verticallayout == null) throw new Error("Vertical layout is not defined in config");
		return this._config.verticallayout;
	}
	get handlesBehavior() {
		if (this._config.handlesbehavior == null) throw new Error("Handles behavior is not defined in config");
		return this._config.handlesbehavior;
	}
	get gridRows() {
		return this._config.grid_options?.rows;
	}
	get sliderHorizontalWidth() {
		if (this._config.horizontalwidth == null) throw new Error("Size is not defined in config");
		return this._config.horizontalwidth;
	}
	get sliderVerticalHeight() {
		return this._config.verticalheight ?? void 0;
	}
	get sliderVerticalHeightDefault() {
		return this.isCompact ? 1 : 2;
	}
	get connect() {
		if (this.hasReference) return [
			...this._config.entities.map((handleConfig) => handleConfig.connectprevious),
			this._config.connectend,
			false,
			false
		];
		return [...this._config.entities.map((handleConfig) => handleConfig.connectprevious), this._config.connectend];
	}
	_checkEntities() {
		if (hasLegacyValuesBarTextConfig(this._config)) {
			const valuesbar = this._config.valuesbar;
			if (!valuesbar) throw new Error("Legacy valuesbar text config requires valuesbar");
			valuesbar.showtext = true;
		}
		if (hasLegacyBubblesTextConfig(this._config)) {
			const bubbles = this._config.bubbles;
			if (!bubbles) throw new Error("Legacy bubbles text config requires bubbles");
			bubbles.showtext = true;
		}
		const entities = Array.isArray(this._config.entities) ? this._config.entities.map((handleConfig) => ({
			entity: handleConfig?.entity ?? "",
			text: handleConfig?.text ?? "",
			connectprevious: handleConfig?.connectprevious
		})) : [];
		assertOptionalBoolean(this._config.connectend, "connectend");
		if (this._config.connectend == null) this._config.connectend = false;
		if (this._config.entity_min !== void 0 && this._config.entity_max === void 0) throw new Error("Cannot use 'entity_min' without 'entity_max'");
		if (this._config.entity_max !== void 0 && this._config.entity_min === void 0) throw new Error("Cannot use 'entity_max' without 'entity_min'");
		if (this._config.entity_min !== void 0) {
			if (this._config.entities?.[0] !== void 0) throw new Error("Cannot use both 'entity_min/entity_max' and 'entities'");
			setLegacyHandle(entities, 0, { entity: this._config.entity_min });
		}
		if (this._config.entity_max !== void 0) {
			if (this._config.entities?.[1] !== void 0) throw new Error("Cannot use both 'entity_min/entity_max' and 'entities'");
			setLegacyHandle(entities, 1, { entity: this._config.entity_max });
		}
		if (hasEntityTextConflict(this._config)) throw new Error("Cannot use both legacy 'mintext/maxtext' and 'entities[].text'");
		const minText = getLegacyHandleText(this._config, 0);
		if (minText !== void 0) setLegacyHandle(entities, 0, { text: minText });
		const maxText = getLegacyHandleText(this._config, 1);
		if (maxText !== void 0) setLegacyHandle(entities, 1, { text: maxText });
		this._config.entities = entities;
		delete this._config.entity_min;
		delete this._config.entity_max;
		clearLegacyEntityTexts(this._config);
		if (!Array.isArray(this._config.entities) || this._config.entities.length === 0) throw new Error("You need to define at least one entity in 'entities'");
		const entityCount = this._config.entities.length;
		this._entities = this._config.entities.map((handleConfig, index) => {
			const entityLabel = this._getEntityLabel(index);
			if (!handleConfig?.entity) throw new Error(`You need to define ${entityLabel}`);
			assertOptionalString(handleConfig.text, this._getEntityTextLabel(index));
			assertOptionalBoolean(handleConfig.connectprevious, this._getEntityConnectPreviousLabel(index));
			if (handleConfig.connectprevious == null) handleConfig.connectprevious = entityCount <= 1 ? true : index > 0;
			if (!isValidEntityId(handleConfig.entity)) throw new Error(`Invalid format for ${entityLabel}. Expected domain.object_id`);
			return new FlexSliderCardEntity(handleConfig.entity, handleConfig.text ?? "");
		});
		if (new Set(this._entities.map((entity) => entity.entityId)).size !== this._entities.length) throw new Error("Configured entities must be unique");
		this._entitytype = this._entities[0].entitytype;
		for (const entity of this._entities) if (entity.entitytype !== this._entitytype) throw new Error("All configured entities must use compatible domains");
	}
	_updateEntities(hass) {
		this._entities.forEach((entity) => entity.update(hass));
	}
	_resetEntities() {
		if (this.entitiesExist()) this.entitiesResetBaseline();
	}
	get entitytype() {
		if (this._entitytype === void 0) throw new Error("Entity type is not defined in config");
		return this._entitytype;
	}
	get entities() {
		return this._entities;
	}
	get entityCount() {
		return this._entities.length;
	}
	get hasReference() {
		return this._referenceEntity !== void 0;
	}
	get referenceEntity() {
		if (!this._referenceEntity) throw new Error("Reference entity is not defined in config");
		return this._referenceEntity;
	}
	entitiesExist() {
		return this._entities.every((entity) => entity.exists()) && (!this.hasReference || this.referenceEntity.exists());
	}
	entitiesResetBaseline() {
		this._entities.forEach((entity) => entity.resetBaseline());
		this._referenceEntity?.resetBaseline();
	}
	entitiesSetBaseline() {
		this._entities.forEach((entity) => entity.setBaseline());
		this._referenceEntity?.setBaseline();
	}
	entitiesIsUpdated() {
		return this._entities.some((entity) => entity.isUpdated()) || this._referenceEntity?.isUpdated() === true;
	}
	_getEntityLabel(index) {
		return `Entity ${index + 1}`;
	}
	_getEntityTextLabel(index) {
		return `Text ${index + 1}`;
	}
	_getEntityConnectPreviousLabel(index) {
		return `Connect with previous for ${this._getEntityLabel(index)}`;
	}
};
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
var init_decorate = __esmMin((() => {}));
//#endregion
//#region src/flex-slider-card-valuesbar.ts
init_decorate();
var FlexSliderCardValuesBarMode = /* @__PURE__ */ function(FlexSliderCardValuesBarMode) {
	FlexSliderCardValuesBarMode["DEFAULT"] = "default";
	FlexSliderCardValuesBarMode["USERUPDATE"] = "userupdate";
	return FlexSliderCardValuesBarMode;
}({});
var FlexSliderCardValuesBar = class FlexSliderCardValuesBar extends i {
	constructor(..._args) {
		super(..._args);
		this.values = [0, 100];
		this.inactive = false;
		this._mode = FlexSliderCardValuesBarMode.DEFAULT;
		this._handle = null;
		this._userModifiedValue = null;
		this.setMode = (mode, handle) => {
			this._mode = mode;
			this._handle = handle !== void 0 ? handle : null;
			if (mode === FlexSliderCardValuesBarMode.USERUPDATE && handle === void 0) throw new Error("Handle must be provided when mode is 'userupdate'");
			if (mode === FlexSliderCardValuesBarMode.DEFAULT) {
				this._handle = null;
				this._userModifiedValue = null;
			}
			this.requestUpdate();
		};
		this.setValue = (values) => {
			if (this._mode !== FlexSliderCardValuesBarMode.USERUPDATE) return;
			if (this._handle != void 0) this._userModifiedValue = values[this._handle];
			this.requestUpdate();
		};
	}
	static {
		this.styles = i$3`
    * {
      box-sizing: border-box;
    }
    .valuesbar {
      display: flex;
      align-items: flex-start;
      width: 100%;
      color: var(--primary-text-color);
      font-size: var(--flex-slider-card-barvalues-font-size);
      /* outline: 1px solid green; /* Debugging border */
    }
    .valuesbar.large-text {
      font-size: calc(var(--flex-slider-card-barvalues-font-size) + var(--flex-slider-card-barvalues-font-size));
    }
    .valuesbar.reference {
      color: var(--secondary-text-color);
    }
    .valuesbar.single-handle {
      justify-content: center;
    }
    .valuesbar.multi-handle {
      justify-content: space-between;
    }
    .editing {
      color: var(--primary-color);
      font-style: italic;
    }
    :host([inactive]) .valuesbar,
    :host([inactive]) .valuesbar.reference,
    :host([inactive]) .editing {
      color: var(--disabled-text-color);
    }
  `;
	}
	render() {
		if (!this.config || !this.config.entitiesExist()) return A;
		if (!this.config.hasValuesBar && !this.config.hasReferenceValuesBar) return A;
		if (this.config.hasReferenceValuesBar) return b`
        <div class=${`valuesbar single-handle reference${this.config.hasReferenceValuesBarTextLarge ? " large-text" : ""}`}>
          <span>${this._getReferenceValue()}</span>
        </div>
      `;
		const handlesToDisplay = Array.from({ length: this.config.entityCount }, (_, index) => index);
		if (this.config.direction === "rtl") handlesToDisplay.reverse();
		return b`
      <div class=${this.config.entityCount <= 1 ? "valuesbar single-handle" : "valuesbar multi-handle"}>
        ${handlesToDisplay.map((handle) => b`
          <span>
            <span class=${this._isEditing(handle) ? "editing" : ""}>
              ${this._getHandleValue(handle)}
            </span>
          </span>
        `)}
      </div>
    `;
	}
	_isEditing(handle) {
		return this._mode === FlexSliderCardValuesBarMode.USERUPDATE && this._handle === handle;
	}
	_getHandleValue(handle) {
		if (!this.config) throw new Error("Config not initialized");
		if (this._mode === FlexSliderCardValuesBarMode.USERUPDATE && this._userModifiedValue != void 0 && this._handle === handle) return this.config.entities[handle].toText(this._userModifiedValue, this.config.nbdigitsValuesBar, this.config.unitValuesBar, this.config.showTextValuesBar);
		return this.config.entities[handle].toText(this.values[handle], this.config.nbdigitsValuesBar, this.config.unitValuesBar, this.config.showTextValuesBar);
	}
	_getReferenceValue() {
		if (!this.config) throw new Error("Config not initialized");
		return this.config.referenceEntity.toText(this.config.referenceEntity.sliderValue, this.config.nbdigitsValuesBar, this.config.referenceUnit, true);
	}
};
__decorate([n({ attribute: false })], FlexSliderCardValuesBar.prototype, "config", void 0);
__decorate([n({ attribute: false })], FlexSliderCardValuesBar.prototype, "values", void 0);
__decorate([n({
	type: Boolean,
	reflect: true
})], FlexSliderCardValuesBar.prototype, "inactive", void 0);
FlexSliderCardValuesBar = __decorate([t("flex-slider-card-valuesbar")], FlexSliderCardValuesBar);
//#endregion
//#region node_modules/nouislider/dist/nouislider.mjs
var PipsMode;
(function(PipsMode) {
	PipsMode["Range"] = "range";
	PipsMode["Steps"] = "steps";
	PipsMode["Positions"] = "positions";
	PipsMode["Count"] = "count";
	PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function(PipsType) {
	PipsType[PipsType["None"] = -1] = "None";
	PipsType[PipsType["NoValue"] = 0] = "NoValue";
	PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
	PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
function isValidFormatter(entry) {
	return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
	return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
	el.parentElement.removeChild(el);
}
function isSet(value) {
	return value !== null && value !== void 0;
}
function preventDefault(e) {
	e.preventDefault();
}
function unique(array) {
	return array.filter(function(a) {
		return !this[a] ? this[a] = true : false;
	}, {});
}
function closest(value, to) {
	return Math.round(value / to) * to;
}
function offset(elem, orientation) {
	var rect = elem.getBoundingClientRect();
	var doc = elem.ownerDocument;
	var docElem = doc.documentElement;
	var pageOffset = getPageOffset(doc);
	if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
	return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
function isNumeric(a) {
	return typeof a === "number" && !isNaN(a) && isFinite(a);
}
function addClassFor(element, className, duration) {
	if (duration > 0) {
		addClass(element, className);
		setTimeout(function() {
			removeClass(element, className);
		}, duration);
	}
}
function limit(a) {
	return Math.max(Math.min(a, 100), 0);
}
function asArray(a) {
	return Array.isArray(a) ? a : [a];
}
function countDecimals(numStr) {
	numStr = String(numStr);
	var pieces = numStr.split(".");
	return pieces.length > 1 ? pieces[1].length : 0;
}
function addClass(el, className) {
	if (el.classList && !/\s/.test(className)) el.classList.add(className);
	else el.className += " " + className;
}
function removeClass(el, className) {
	if (el.classList && !/\s/.test(className)) el.classList.remove(className);
	else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
}
function hasClass(el, className) {
	return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
function getPageOffset(doc) {
	var supportPageOffset = window.pageXOffset !== void 0;
	var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
	return {
		x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft,
		y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop
	};
}
function getActions() {
	return window.navigator.pointerEnabled ? {
		start: "pointerdown",
		move: "pointermove",
		end: "pointerup"
	} : window.navigator.msPointerEnabled ? {
		start: "MSPointerDown",
		move: "MSPointerMove",
		end: "MSPointerUp"
	} : {
		start: "mousedown touchstart",
		move: "mousemove touchmove",
		end: "mouseup touchend"
	};
}
function getSupportsPassive() {
	var supportsPassive = false;
	try {
		var opts = Object.defineProperty({}, "passive", { get: function() {
			supportsPassive = true;
		} });
		window.addEventListener("test", null, opts);
	} catch (e) {}
	return supportsPassive;
}
function getSupportsTouchActionNone() {
	return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
function subRangeRatio(pa, pb) {
	return 100 / (pb - pa);
}
function fromPercentage(range, value, startRange) {
	return value * 100 / (range[startRange + 1] - range[startRange]);
}
function toPercentage(range, value) {
	return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
function isPercentage(range, value) {
	return value * (range[1] - range[0]) / 100 + range[0];
}
function getJ(value, arr) {
	var j = 1;
	while (value >= arr[j]) j += 1;
	return j;
}
function toStepping(xVal, xPct, value) {
	if (value >= xVal.slice(-1)[0]) return 100;
	var j = getJ(value, xVal);
	var va = xVal[j - 1];
	var vb = xVal[j];
	var pa = xPct[j - 1];
	var pb = xPct[j];
	return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
function fromStepping(xVal, xPct, value) {
	if (value >= 100) return xVal.slice(-1)[0];
	var j = getJ(value, xPct);
	var va = xVal[j - 1];
	var vb = xVal[j];
	var pa = xPct[j - 1];
	var pb = xPct[j];
	return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
function getStep(xPct, xSteps, snap, value) {
	if (value === 100) return value;
	var j = getJ(value, xPct);
	var a = xPct[j - 1];
	var b = xPct[j];
	if (snap) {
		if (value - a > (b - a) / 2) return b;
		return a;
	}
	if (!xSteps[j - 1]) return value;
	return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
var Spectrum = function() {
	function Spectrum(entry, snap, singleStep) {
		this.xPct = [];
		this.xVal = [];
		this.xSteps = [];
		this.xNumSteps = [];
		this.xHighestCompleteStep = [];
		this.xSteps = [singleStep || false];
		this.xNumSteps = [false];
		this.snap = snap;
		var index;
		var ordered = [];
		Object.keys(entry).forEach(function(index) {
			ordered.push([asArray(entry[index]), index]);
		});
		ordered.sort(function(a, b) {
			return a[0][0] - b[0][0];
		});
		for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
		this.xNumSteps = this.xSteps.slice(0);
		for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
	}
	Spectrum.prototype.getDistance = function(value) {
		var distances = [];
		for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
		return distances;
	};
	Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
		var xPct_index = 0;
		if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++;
		else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
		if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
		if (distances === null) distances = [];
		var start_factor;
		var rest_factor = 1;
		var rest_rel_distance = distances[xPct_index];
		var range_pct = 0;
		var rel_range_distance = 0;
		var abs_distance_counter = 0;
		var range_counter = 0;
		if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
		else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
		while (rest_rel_distance > 0) {
			range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
			if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
				rel_range_distance = range_pct * start_factor;
				rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
				start_factor = 1;
			} else {
				rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
				rest_factor = 0;
			}
			if (direction) {
				abs_distance_counter = abs_distance_counter - rel_range_distance;
				if (this.xPct.length + range_counter >= 1) range_counter--;
			} else {
				abs_distance_counter = abs_distance_counter + rel_range_distance;
				if (this.xPct.length - range_counter >= 1) range_counter++;
			}
			rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
		}
		return value + abs_distance_counter;
	};
	Spectrum.prototype.toStepping = function(value) {
		value = toStepping(this.xVal, this.xPct, value);
		return value;
	};
	Spectrum.prototype.fromStepping = function(value) {
		return fromStepping(this.xVal, this.xPct, value);
	};
	Spectrum.prototype.getStep = function(value) {
		value = getStep(this.xPct, this.xSteps, this.snap, value);
		return value;
	};
	Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
		var j = getJ(value, this.xPct);
		if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
		return (this.xVal[j] - this.xVal[j - 1]) / size;
	};
	Spectrum.prototype.getNearbySteps = function(value) {
		var j = getJ(value, this.xPct);
		return {
			stepBefore: {
				startValue: this.xVal[j - 2],
				step: this.xNumSteps[j - 2],
				highestStep: this.xHighestCompleteStep[j - 2]
			},
			thisStep: {
				startValue: this.xVal[j - 1],
				step: this.xNumSteps[j - 1],
				highestStep: this.xHighestCompleteStep[j - 1]
			},
			stepAfter: {
				startValue: this.xVal[j],
				step: this.xNumSteps[j],
				highestStep: this.xHighestCompleteStep[j]
			}
		};
	};
	Spectrum.prototype.countStepDecimals = function() {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
	};
	Spectrum.prototype.hasNoSize = function() {
		return this.xVal[0] === this.xVal[this.xVal.length - 1];
	};
	Spectrum.prototype.convert = function(value) {
		return this.getStep(this.toStepping(value));
	};
	Spectrum.prototype.handleEntryPoint = function(index, value) {
		var percentage;
		if (index === "min") percentage = 0;
		else if (index === "max") percentage = 100;
		else percentage = parseFloat(index);
		if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
		this.xPct.push(percentage);
		this.xVal.push(value[0]);
		var value1 = Number(value[1]);
		if (!percentage) {
			if (!isNaN(value1)) this.xSteps[0] = value1;
		} else this.xSteps.push(isNaN(value1) ? false : value1);
		this.xHighestCompleteStep.push(0);
	};
	Spectrum.prototype.handleStepPoint = function(i, n) {
		if (!n) return;
		if (this.xVal[i] === this.xVal[i + 1]) {
			this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
			return;
		}
		this.xSteps[i] = fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
		var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
		this.xHighestCompleteStep[i] = step;
	};
	return Spectrum;
}();
var defaultFormatter = {
	to: function(value) {
		return value === void 0 ? "" : value.toFixed(2);
	},
	from: Number
};
var cssClasses = {
	target: "target",
	base: "base",
	origin: "origin",
	handle: "handle",
	handleLower: "handle-lower",
	handleUpper: "handle-upper",
	touchArea: "touch-area",
	horizontal: "horizontal",
	vertical: "vertical",
	background: "background",
	connect: "connect",
	connects: "connects",
	ltr: "ltr",
	rtl: "rtl",
	textDirectionLtr: "txt-dir-ltr",
	textDirectionRtl: "txt-dir-rtl",
	draggable: "draggable",
	drag: "state-drag",
	tap: "state-tap",
	active: "active",
	tooltip: "tooltip",
	pips: "pips",
	pipsHorizontal: "pips-horizontal",
	pipsVertical: "pips-vertical",
	marker: "marker",
	markerHorizontal: "marker-horizontal",
	markerVertical: "marker-vertical",
	markerNormal: "marker-normal",
	markerLarge: "marker-large",
	markerSub: "marker-sub",
	value: "value",
	valueHorizontal: "value-horizontal",
	valueVertical: "value-vertical",
	valueNormal: "value-normal",
	valueLarge: "value-large",
	valueSub: "value-sub"
};
var INTERNAL_EVENT_NS = {
	tooltips: ".__tooltips",
	aria: ".__aria"
};
function testStep(parsed, entry) {
	if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
	parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
	if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
	parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
	if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
	parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
	if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
	parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
	if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
	if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
	parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
	entry = asArray(entry);
	if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
	parsed.handles = entry.length;
	parsed.start = entry;
}
function testSnap(parsed, entry) {
	if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
	parsed.snap = entry;
}
function testAnimate(parsed, entry) {
	if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
	parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
	if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
	parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
	var connect = [false];
	var i;
	if (entry === "lower") entry = [true, false];
	else if (entry === "upper") entry = [false, true];
	if (entry === true || entry === false) {
		for (i = 1; i < parsed.handles; i++) connect.push(entry);
		connect.push(false);
	} else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
	else connect = entry;
	parsed.connect = connect;
}
function testOrientation(parsed, entry) {
	switch (entry) {
		case "horizontal":
			parsed.ort = 0;
			break;
		case "vertical":
			parsed.ort = 1;
			break;
		default: throw new Error("noUiSlider: 'orientation' option is invalid.");
	}
}
function testMargin(parsed, entry) {
	if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
	if (entry === 0) return;
	parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
	if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
	parsed.limit = parsed.spectrum.getDistance(entry);
	if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
}
function testPadding(parsed, entry) {
	var index;
	if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
	if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
	if (entry === 0) return;
	if (!Array.isArray(entry)) entry = [entry, entry];
	parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
	for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
	var totalPadding = entry[0] + entry[1];
	var firstValue = parsed.spectrum.xVal[0];
	if (totalPadding / (parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1] - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
}
function testDirection(parsed, entry) {
	switch (entry) {
		case "ltr":
			parsed.dir = 0;
			break;
		case "rtl":
			parsed.dir = 1;
			break;
		default: throw new Error("noUiSlider: 'direction' option was not recognized.");
	}
}
function testBehaviour(parsed, entry) {
	if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
	var tap = entry.indexOf("tap") >= 0;
	var drag = entry.indexOf("drag") >= 0;
	var fixed = entry.indexOf("fixed") >= 0;
	var snap = entry.indexOf("snap") >= 0;
	var hover = entry.indexOf("hover") >= 0;
	var unconstrained = entry.indexOf("unconstrained") >= 0;
	var invertConnects = entry.indexOf("invert-connects") >= 0;
	var dragAll = entry.indexOf("drag-all") >= 0;
	var smoothSteps = entry.indexOf("smooth-steps") >= 0;
	if (fixed) {
		if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
		testMargin(parsed, parsed.start[1] - parsed.start[0]);
	}
	if (invertConnects && parsed.handles !== 2) throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
	if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
	parsed.events = {
		tap: tap || snap,
		drag,
		dragAll,
		smoothSteps,
		fixed,
		snap,
		hover,
		unconstrained,
		invertConnects
	};
}
function testTooltips(parsed, entry) {
	if (entry === false) return;
	if (entry === true || isValidPartialFormatter(entry)) {
		parsed.tooltips = [];
		for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
	} else {
		entry = asArray(entry);
		if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
		entry.forEach(function(formatter) {
			if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
		});
		parsed.tooltips = entry;
	}
}
function testHandleAttributes(parsed, entry) {
	if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
	parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
	if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
	parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
	if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
	parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
	if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
	parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
	parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
	if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
	parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
	if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
	if (typeof parsed.cssPrefix === "string") {
		parsed.cssClasses = {};
		Object.keys(entry).forEach(function(key) {
			parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
		});
	} else parsed.cssClasses = entry;
}
function testOptions(options) {
	var parsed = {
		margin: null,
		limit: null,
		padding: null,
		animate: true,
		animationDuration: 300,
		ariaFormat: defaultFormatter,
		format: defaultFormatter
	};
	var tests = {
		step: {
			r: false,
			t: testStep
		},
		keyboardPageMultiplier: {
			r: false,
			t: testKeyboardPageMultiplier
		},
		keyboardMultiplier: {
			r: false,
			t: testKeyboardMultiplier
		},
		keyboardDefaultStep: {
			r: false,
			t: testKeyboardDefaultStep
		},
		start: {
			r: true,
			t: testStart
		},
		connect: {
			r: true,
			t: testConnect
		},
		direction: {
			r: true,
			t: testDirection
		},
		snap: {
			r: false,
			t: testSnap
		},
		animate: {
			r: false,
			t: testAnimate
		},
		animationDuration: {
			r: false,
			t: testAnimationDuration
		},
		range: {
			r: true,
			t: testRange
		},
		orientation: {
			r: false,
			t: testOrientation
		},
		margin: {
			r: false,
			t: testMargin
		},
		limit: {
			r: false,
			t: testLimit
		},
		padding: {
			r: false,
			t: testPadding
		},
		behaviour: {
			r: true,
			t: testBehaviour
		},
		ariaFormat: {
			r: false,
			t: testAriaFormat
		},
		format: {
			r: false,
			t: testFormat
		},
		tooltips: {
			r: false,
			t: testTooltips
		},
		keyboardSupport: {
			r: true,
			t: testKeyboardSupport
		},
		documentElement: {
			r: false,
			t: testDocumentElement
		},
		cssPrefix: {
			r: true,
			t: testCssPrefix
		},
		cssClasses: {
			r: true,
			t: testCssClasses
		},
		handleAttributes: {
			r: false,
			t: testHandleAttributes
		}
	};
	var defaults = {
		connect: false,
		direction: "ltr",
		behaviour: "tap",
		orientation: "horizontal",
		keyboardSupport: true,
		cssPrefix: "noUi-",
		cssClasses,
		keyboardPageMultiplier: 5,
		keyboardMultiplier: 1,
		keyboardDefaultStep: 10
	};
	if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
	Object.keys(tests).forEach(function(name) {
		if (!isSet(options[name]) && defaults[name] === void 0) {
			if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
			return;
		}
		tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
	});
	parsed.pips = options.pips;
	var d = document.createElement("div");
	var msPrefix = d.style.msTransform !== void 0;
	parsed.transformRule = d.style.transform !== void 0 ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
	parsed.style = [["left", "top"], ["right", "bottom"]][parsed.dir][parsed.ort];
	return parsed;
}
function scope(target, options, originalOptions) {
	var actions = getActions();
	var supportsPassive = getSupportsTouchActionNone() && getSupportsPassive();
	var scope_Target = target;
	var scope_Base;
	var scope_ConnectBase;
	var scope_Handles;
	var scope_Connects;
	var scope_Pips;
	var scope_Tooltips;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Locations = [];
	var scope_HandleNumbers = [];
	var scope_ActiveHandlesCount = 0;
	var scope_Events = {};
	var scope_ConnectsInverted = false;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
	var scope_Body = scope_Document.body;
	var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
	function addNodeTo(addTarget, className) {
		var div = scope_Document.createElement("div");
		if (className) addClass(div, className);
		addTarget.appendChild(div);
		return div;
	}
	function addOrigin(base, handleNumber) {
		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);
		addNodeTo(handle, options.cssClasses.touchArea);
		handle.setAttribute("data-handle", String(handleNumber));
		if (options.keyboardSupport) {
			handle.setAttribute("tabindex", "0");
			handle.addEventListener("keydown", function(event) {
				return eventKeydown(event, handleNumber);
			});
		}
		if (options.handleAttributes !== void 0) {
			var attributes_1 = options.handleAttributes[handleNumber];
			Object.keys(attributes_1).forEach(function(attribute) {
				handle.setAttribute(attribute, attributes_1[attribute]);
			});
		}
		handle.setAttribute("role", "slider");
		handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
		if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower);
		else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
		origin.handle = handle;
		return origin;
	}
	function addConnect(base, add) {
		if (!add) return false;
		return addNodeTo(base, options.cssClasses.connect);
	}
	function addElements(connectOptions, base) {
		scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
		scope_Handles = [];
		scope_Connects = [];
		scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
		for (var i = 0; i < options.handles; i++) {
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
		}
	}
	function addSlider(addTarget) {
		addClass(addTarget, options.cssClasses.target);
		if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr);
		else addClass(addTarget, options.cssClasses.rtl);
		if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal);
		else addClass(addTarget, options.cssClasses.vertical);
		if (getComputedStyle(addTarget).direction === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl);
		else addClass(addTarget, options.cssClasses.textDirectionLtr);
		return addNodeTo(addTarget, options.cssClasses.base);
	}
	function addTooltip(handle, handleNumber) {
		if (!options.tooltips || !options.tooltips[handleNumber]) return false;
		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}
	function isSliderDisabled() {
		return scope_Target.hasAttribute("disabled");
	}
	function isHandleDisabled(handleNumber) {
		return scope_Handles[handleNumber].hasAttribute("disabled");
	}
	function disable(handleNumber) {
		if (handleNumber !== null && handleNumber !== void 0) {
			scope_Handles[handleNumber].setAttribute("disabled", "");
			scope_Handles[handleNumber].handle.removeAttribute("tabindex");
		} else {
			scope_Target.setAttribute("disabled", "");
			scope_Handles.forEach(function(handle) {
				handle.handle.removeAttribute("tabindex");
			});
		}
	}
	function enable(handleNumber) {
		if (handleNumber !== null && handleNumber !== void 0) {
			scope_Handles[handleNumber].removeAttribute("disabled");
			scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
		} else {
			scope_Target.removeAttribute("disabled");
			scope_Handles.forEach(function(handle) {
				handle.removeAttribute("disabled");
				handle.handle.setAttribute("tabindex", "0");
			});
		}
	}
	function removeTooltips() {
		if (scope_Tooltips) {
			removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
			scope_Tooltips.forEach(function(tooltip) {
				if (tooltip) removeElement(tooltip);
			});
			scope_Tooltips = null;
		}
	}
	function tooltips() {
		removeTooltips();
		scope_Tooltips = scope_Handles.map(addTooltip);
		bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function(values, handleNumber, unencoded) {
			if (!scope_Tooltips || !options.tooltips) return;
			if (scope_Tooltips[handleNumber] === false) return;
			var formattedValue = values[handleNumber];
			if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			scope_Tooltips[handleNumber].innerHTML = formattedValue;
		});
	}
	function aria() {
		removeEvent("update" + INTERNAL_EVENT_NS.aria);
		bindEvent("update" + INTERNAL_EVENT_NS.aria, function(values, handleNumber, unencoded, tap, positions) {
			scope_HandleNumbers.forEach(function(index) {
				var handle = scope_Handles[index];
				var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
				var now = positions[index];
				var text = String(options.ariaFormat.to(unencoded[index]));
				min = scope_Spectrum.fromStepping(min).toFixed(1);
				max = scope_Spectrum.fromStepping(max).toFixed(1);
				now = scope_Spectrum.fromStepping(now).toFixed(1);
				handle.children[0].setAttribute("aria-valuemin", min);
				handle.children[0].setAttribute("aria-valuemax", max);
				handle.children[0].setAttribute("aria-valuenow", now);
				handle.children[0].setAttribute("aria-valuetext", text);
			});
		});
	}
	function getGroup(pips) {
		if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
		if (pips.mode === PipsMode.Count) {
			if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
			var interval = pips.values - 1;
			var spread = 100 / interval;
			var values = [];
			while (interval--) values[interval] = interval * spread;
			values.push(100);
			return mapToRange(values, pips.stepped);
		}
		if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
		if (pips.mode === PipsMode.Values) {
			if (pips.stepped) return pips.values.map(function(value) {
				return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
			});
			return pips.values;
		}
		return [];
	}
	function mapToRange(values, stepped) {
		return values.map(function(value) {
			return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
		});
	}
	function generateSpread(pips) {
		function safeIncrement(value, increment) {
			return Number((value + increment).toFixed(7));
		}
		var group = getGroup(pips);
		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;
		group = unique(group.slice().sort(function(a, b) {
			return a - b;
		}));
		if (group[0] !== firstInRange) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}
		if (group[group.length - 1] !== lastInRange) {
			group.push(lastInRange);
			ignoreLast = true;
		}
		group.forEach(function(current, index) {
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index + 1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepSize;
			var isSteps = pips.mode === PipsMode.Steps;
			if (isSteps) step = scope_Spectrum.xNumSteps[index];
			if (!step) step = high - low;
			if (high === void 0) high = low;
			step = Math.max(step, 1e-7);
			for (i = low; i <= high; i = safeIncrement(i, step)) {
				newPct = scope_Spectrum.toStepping(i);
				pctDifference = newPct - prevPct;
				steps = pctDifference / (pips.density || 1);
				realSteps = Math.round(steps);
				stepSize = pctDifference / realSteps;
				for (q = 1; q <= realSteps; q += 1) {
					pctPos = prevPct + q * stepSize;
					indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
				}
				type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
				if (!index && ignoreFirst && i !== high) type = 0;
				if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [i, type];
				prevPct = newPct;
			}
		});
		return indexes;
	}
	function addMarking(spread, filterFunc, formatter) {
		var _a, _b;
		var element = scope_Document.createElement("div");
		var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, _a);
		var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, _b);
		var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
		var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
		function getClasses(type, source) {
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
			return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
		}
		function addSpread(offset, value, type) {
			type = filterFunc ? filterFunc(value, type) : type;
			if (type === PipsType.None) return;
			var node = addNodeTo(element, false);
			node.className = getClasses(type, options.cssClasses.marker);
			node.style[options.style] = offset + "%";
			if (type > PipsType.NoValue) {
				node = addNodeTo(element, false);
				node.className = getClasses(type, options.cssClasses.value);
				node.setAttribute("data-value", String(value));
				node.style[options.style] = offset + "%";
				node.innerHTML = String(formatter.to(value));
			}
		}
		Object.keys(spread).forEach(function(offset) {
			addSpread(offset, spread[offset][0], spread[offset][1]);
		});
		return element;
	}
	function removePips() {
		if (scope_Pips) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}
	function pips(pips) {
		removePips();
		var spread = generateSpread(pips);
		var filter = pips.filter;
		var format = pips.format || { to: function(value) {
			return String(Math.round(value));
		} };
		scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
		return scope_Pips;
	}
	function baseSize() {
		var rect = scope_Base.getBoundingClientRect();
		var alt = "offset" + ["Width", "Height"][options.ort];
		return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
	}
	function attachEvent(events, element, callback, data) {
		var method = function(event) {
			var e = fixEvent(event, data.pageOffset, data.target || element);
			if (!e) return false;
			if (isSliderDisabled() && !data.doNotReject) return false;
			if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
			if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
			if (data.hover && e.buttons) return false;
			if (!supportsPassive) e.preventDefault();
			e.calcPoint = e.points[options.ort];
			callback(e, data);
		};
		var methods = [];
		events.split(" ").forEach(function(eventName) {
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});
		return methods;
	}
	function fixEvent(e, pageOffset, eventTarget) {
		var touch = e.type.indexOf("touch") === 0;
		var mouse = e.type.indexOf("mouse") === 0;
		var pointer = e.type.indexOf("pointer") === 0;
		var x = 0;
		var y = 0;
		if (e.type.indexOf("MSPointer") === 0) pointer = true;
		if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
		if (touch) {
			var isTouchOnTarget = function(checkTouch) {
				var target = checkTouch.target;
				return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
			};
			if (e.type === "touchstart") {
				var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
				if (targetTouches.length > 1) return false;
				x = targetTouches[0].pageX;
				y = targetTouches[0].pageY;
			} else {
				var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
				if (!targetTouch) return false;
				x = targetTouch.pageX;
				y = targetTouch.pageY;
			}
		}
		pageOffset = pageOffset || getPageOffset(scope_Document);
		if (mouse || pointer) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}
		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer;
		return e;
	}
	function calcPointToPercentage(calcPoint) {
		var proposal = (calcPoint - offset(scope_Base, options.ort)) * 100 / baseSize();
		proposal = limit(proposal);
		return options.dir ? 100 - proposal : proposal;
	}
	function getClosestHandle(clickedPosition) {
		var smallestDifference = 100;
		var handleNumber = false;
		scope_Handles.forEach(function(handle, index) {
			if (isHandleDisabled(index)) return;
			var handlePosition = scope_Locations[index];
			var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
			if (differenceWithThisHandle < smallestDifference || differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition || differenceWithThisHandle === 100 && smallestDifference === 100) {
				handleNumber = index;
				smallestDifference = differenceWithThisHandle;
			}
		});
		return handleNumber;
	}
	function documentLeave(event, data) {
		if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
	}
	function eventMove(event, data) {
		if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
		var proposal = movement * 100 / data.baseSize;
		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
	}
	function eventEnd(event, data) {
		if (data.handle) {
			removeClass(data.handle, options.cssClasses.active);
			scope_ActiveHandlesCount -= 1;
		}
		data.listeners.forEach(function(c) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});
		if (scope_ActiveHandlesCount === 0) {
			removeClass(scope_Target, options.cssClasses.drag);
			setZindex();
			if (event.cursor) {
				scope_Body.style.cursor = "";
				scope_Body.removeEventListener("selectstart", preventDefault);
			}
		}
		if (options.events.smoothSteps) {
			data.handleNumbers.forEach(function(handleNumber) {
				setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
			});
			data.handleNumbers.forEach(function(handleNumber) {
				fireEvent("update", handleNumber);
			});
		}
		data.handleNumbers.forEach(function(handleNumber) {
			fireEvent("change", handleNumber);
			fireEvent("set", handleNumber);
			fireEvent("end", handleNumber);
		});
	}
	function eventStart(event, data) {
		if (data.handleNumbers.some(isHandleDisabled)) return;
		var handle;
		if (data.handleNumbers.length === 1) {
			handle = scope_Handles[data.handleNumbers[0]].children[0];
			scope_ActiveHandlesCount += 1;
			addClass(handle, options.cssClasses.active);
		}
		event.stopPropagation();
		var listeners = [];
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			target: event.target,
			handle,
			connect: data.connect,
			listeners,
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});
		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			target: event.target,
			handle,
			listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});
		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			target: event.target,
			handle,
			listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});
		listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
		if (event.cursor) {
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;
			if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
			scope_Body.addEventListener("selectstart", preventDefault, false);
		}
		data.handleNumbers.forEach(function(handleNumber) {
			fireEvent("start", handleNumber);
		});
	}
	function eventTap(event) {
		event.stopPropagation();
		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);
		if (handleNumber === false) return;
		if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		setHandle(handleNumber, proposal, true, true);
		setZindex();
		fireEvent("slide", handleNumber, true);
		fireEvent("update", handleNumber, true);
		if (!options.events.snap) {
			fireEvent("change", handleNumber, true);
			fireEvent("set", handleNumber, true);
		} else eventStart(event, { handleNumbers: [handleNumber] });
	}
	function eventHover(event) {
		var proposal = calcPointToPercentage(event.calcPoint);
		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);
		Object.keys(scope_Events).forEach(function(targetEvent) {
			if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach(function(callback) {
				callback.call(scope_Self, value);
			});
		});
	}
	function eventKeydown(event, handleNumber) {
		if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
		var horizontalKeys = ["Left", "Right"];
		var verticalKeys = ["Down", "Up"];
		var largeStepKeys = ["PageDown", "PageUp"];
		var edgeKeys = ["Home", "End"];
		if (options.dir && !options.ort) horizontalKeys.reverse();
		else if (options.ort && !options.dir) {
			verticalKeys.reverse();
			largeStepKeys.reverse();
		}
		var key = event.key.replace("Arrow", "");
		var isLargeDown = key === largeStepKeys[0];
		var isLargeUp = key === largeStepKeys[1];
		var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
		var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
		var isMin = key === edgeKeys[0];
		var isMax = key === edgeKeys[1];
		if (!isDown && !isUp && !isMin && !isMax) return true;
		event.preventDefault();
		var to;
		if (isUp || isDown) {
			var direction = isDown ? 0 : 1;
			var step = getNextStepsForHandle(handleNumber)[direction];
			if (step === null) return false;
			if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
			if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier;
			else step *= options.keyboardMultiplier;
			step = Math.max(step, 1e-7);
			step = (isDown ? -1 : 1) * step;
			to = scope_Values[handleNumber] + step;
		} else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
		else to = options.spectrum.xVal[0];
		setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
		fireEvent("slide", handleNumber);
		fireEvent("update", handleNumber);
		fireEvent("change", handleNumber);
		fireEvent("set", handleNumber);
		return false;
	}
	function bindSliderEvents(behaviour) {
		if (!behaviour.fixed) scope_Handles.forEach(function(handle, index) {
			attachEvent(actions.start, handle.children[0], eventStart, { handleNumbers: [index] });
		});
		if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
		if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, { hover: true });
		if (behaviour.drag) scope_Connects.forEach(function(connect, index) {
			if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
			var handleBefore = scope_Handles[index - 1];
			var handleAfter = scope_Handles[index];
			var eventHolders = [connect];
			var handlesToDrag = [handleBefore, handleAfter];
			var handleNumbersToDrag = [index - 1, index];
			addClass(connect, options.cssClasses.draggable);
			if (behaviour.fixed) {
				eventHolders.push(handleBefore.children[0]);
				eventHolders.push(handleAfter.children[0]);
			}
			if (behaviour.dragAll) {
				handlesToDrag = scope_Handles;
				handleNumbersToDrag = scope_HandleNumbers;
			}
			eventHolders.forEach(function(eventHolder) {
				attachEvent(actions.start, eventHolder, eventStart, {
					handles: handlesToDrag,
					handleNumbers: handleNumbersToDrag,
					connect
				});
			});
		});
	}
	function bindEvent(namespacedEvent, callback) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);
		if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach(function(a, index) {
			fireEvent("update", index);
		});
	}
	function isInternalNamespace(namespace) {
		return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
	}
	function removeEvent(namespacedEvent) {
		var event = namespacedEvent && namespacedEvent.split(".")[0];
		var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
		Object.keys(scope_Events).forEach(function(bind) {
			var tEvent = bind.split(".")[0];
			var tNamespace = bind.substring(tEvent.length);
			if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
				if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
			}
		});
	}
	function fireEvent(eventName, handleNumber, tap) {
		Object.keys(scope_Events).forEach(function(targetEvent) {
			if (eventName === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach(function(callback) {
				callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
			});
		});
	}
	function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
		var distance;
		if (scope_Handles.length > 1 && !options.events.unconstrained) {
			if (lookBackward && handleNumber > 0) {
				distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
				to = Math.max(to, distance);
			}
			if (lookForward && handleNumber < scope_Handles.length - 1) {
				distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
				to = Math.min(to, distance);
			}
		}
		if (scope_Handles.length > 1 && options.limit) {
			if (lookBackward && handleNumber > 0) {
				distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
				to = Math.min(to, distance);
			}
			if (lookForward && handleNumber < scope_Handles.length - 1) {
				distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
				to = Math.max(to, distance);
			}
		}
		if (options.padding) {
			if (handleNumber === 0) {
				distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
				to = Math.max(to, distance);
			}
			if (handleNumber === scope_Handles.length - 1) {
				distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
				to = Math.min(to, distance);
			}
		}
		if (!smoothSteps) to = scope_Spectrum.getStep(to);
		to = limit(to);
		if (to === reference[handleNumber] && !getValue) return false;
		return to;
	}
	function inRuleOrder(v, a) {
		var o = options.ort;
		return (o ? a : v) + ", " + (o ? v : a);
	}
	function moveHandles(upward, proposal, locations, handleNumbers, connect) {
		var proposals = locations.slice();
		var firstHandle = handleNumbers[0];
		var smoothSteps = options.events.smoothSteps;
		var b = [!upward, upward];
		var f = [upward, !upward];
		handleNumbers = handleNumbers.slice();
		if (upward) handleNumbers.reverse();
		if (handleNumbers.length > 1) handleNumbers.forEach(function(handleNumber, o) {
			var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
			if (to === false) proposal = 0;
			else {
				proposal = to - proposals[handleNumber];
				proposals[handleNumber] = to;
			}
		});
		else b = f = [true];
		var state = false;
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
		});
		if (state) {
			handleNumbers.forEach(function(handleNumber) {
				fireEvent("update", handleNumber);
				fireEvent("slide", handleNumber);
			});
			if (connect != void 0) fireEvent("drag", firstHandle);
		}
	}
	function transformDirection(a, b) {
		return options.dir ? 100 - a - b : a;
	}
	function updateHandlePosition(handleNumber, to) {
		scope_Locations[handleNumber] = to;
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
		var translateRule = "translate(" + inRuleOrder(transformDirection(to, 0) - scope_DirOffset + "%", "0") + ")";
		scope_Handles[handleNumber].style[options.transformRule] = translateRule;
		if (options.events.invertConnects && scope_Locations.length > 1) {
			var handlesAreInOrder = scope_Locations.every(function(position, index, locations) {
				return index === 0 || position >= locations[index - 1];
			});
			if (scope_ConnectsInverted !== !handlesAreInOrder) {
				invertConnects();
				return;
			}
		}
		updateConnect(handleNumber);
		updateConnect(handleNumber + 1);
		if (scope_ConnectsInverted) {
			updateConnect(handleNumber - 1);
			updateConnect(handleNumber + 2);
		}
	}
	function setZindex() {
		scope_HandleNumbers.forEach(function(handleNumber) {
			var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
			var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
			scope_Handles[handleNumber].style.zIndex = String(zIndex);
		});
	}
	function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
		if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
		if (to === false) return false;
		updateHandlePosition(handleNumber, to);
		return true;
	}
	function updateConnect(index) {
		if (!scope_Connects[index]) return;
		var locations = scope_Locations.slice();
		if (scope_ConnectsInverted) locations.sort(function(a, b) {
			return a - b;
		});
		var l = 0;
		var h = 100;
		if (index !== 0) l = locations[index - 1];
		if (index !== scope_Connects.length - 1) h = locations[index];
		var connectWidth = h - l;
		var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
		var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
		scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
	}
	function resolveToValue(to, handleNumber) {
		if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
		if (typeof to === "number") to = String(to);
		to = options.format.from(to);
		if (to !== false) to = scope_Spectrum.toStepping(to);
		if (to === false || isNaN(to)) return scope_Locations[handleNumber];
		return to;
	}
	function valueSet(input, fireSetEvent, exactInput) {
		var values = asArray(input);
		var isInit = scope_Locations[0] === void 0;
		fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
		if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		scope_HandleNumbers.forEach(function(handleNumber) {
			setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
		});
		var i = scope_HandleNumbers.length === 1 ? 0 : 1;
		if (isInit && scope_Spectrum.hasNoSize()) {
			exactInput = true;
			scope_Locations[0] = 0;
			if (scope_HandleNumbers.length > 1) {
				var space_1 = 100 / (scope_HandleNumbers.length - 1);
				scope_HandleNumbers.forEach(function(handleNumber) {
					scope_Locations[handleNumber] = handleNumber * space_1;
				});
			}
		}
		for (; i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach(function(handleNumber) {
			setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
		});
		setZindex();
		scope_HandleNumbers.forEach(function(handleNumber) {
			fireEvent("update", handleNumber);
			if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
		});
	}
	function valueReset(fireSetEvent) {
		valueSet(options.start, fireSetEvent);
	}
	function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
		handleNumber = Number(handleNumber);
		if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
		setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
		fireEvent("update", handleNumber);
		if (fireSetEvent) fireEvent("set", handleNumber);
	}
	function valueGet(unencoded) {
		if (unencoded === void 0) unencoded = false;
		if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
		var values = scope_Values.map(options.format.to);
		if (values.length === 1) return values[0];
		return values;
	}
	function destroy() {
		removeEvent(INTERNAL_EVENT_NS.aria);
		removeEvent(INTERNAL_EVENT_NS.tooltips);
		Object.keys(options.cssClasses).forEach(function(key) {
			removeClass(scope_Target, options.cssClasses[key]);
		});
		while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
		delete scope_Target.noUiSlider;
	}
	function getNextStepsForHandle(handleNumber) {
		var location = scope_Locations[handleNumber];
		var nearbySteps = scope_Spectrum.getNearbySteps(location);
		var value = scope_Values[handleNumber];
		var increment = nearbySteps.thisStep.step;
		var decrement = null;
		if (options.snap) return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null];
		if (increment !== false) {
			if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
		}
		if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step;
		else if (nearbySteps.stepBefore.step === false) decrement = false;
		else decrement = value - nearbySteps.stepBefore.highestStep;
		if (location === 100) increment = null;
		else if (location === 0) decrement = null;
		var stepDecimals = scope_Spectrum.countStepDecimals();
		if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
		if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
		return [decrement, increment];
	}
	function getNextSteps() {
		return scope_HandleNumbers.map(getNextStepsForHandle);
	}
	function updateOptions(optionsToUpdate, fireSetEvent) {
		var v = valueGet();
		var updateAble = [
			"margin",
			"limit",
			"padding",
			"range",
			"animate",
			"snap",
			"step",
			"format",
			"pips",
			"tooltips",
			"connect"
		];
		updateAble.forEach(function(name) {
			if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
		});
		var newOptions = testOptions(originalOptions);
		updateAble.forEach(function(name) {
			if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
		});
		scope_Spectrum = newOptions.spectrum;
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;
		if (options.pips) pips(options.pips);
		else removePips();
		if (options.tooltips) tooltips();
		else removeTooltips();
		scope_Locations = [];
		valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
		if (optionsToUpdate.connect) updateConnectOption();
	}
	function updateConnectOption() {
		while (scope_ConnectBase.firstChild) scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
		for (var i = 0; i <= options.handles; i++) {
			scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
			updateConnect(i);
		}
		bindSliderEvents({
			drag: options.events.drag,
			fixed: true
		});
	}
	function invertConnects() {
		scope_ConnectsInverted = !scope_ConnectsInverted;
		testConnect(options, options.connect.map(function(b) {
			return !b;
		}));
		updateConnectOption();
	}
	function setupSlider() {
		scope_Base = addSlider(scope_Target);
		addElements(options.connect, scope_Base);
		bindSliderEvents(options.events);
		valueSet(options.start);
		if (options.pips) pips(options.pips);
		if (options.tooltips) tooltips();
		aria();
	}
	setupSlider();
	var scope_Self = {
		destroy,
		steps: getNextSteps,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		setHandle: valueSetHandle,
		reset: valueReset,
		disable,
		enable,
		__moveHandles: function(upward, proposal, handleNumbers) {
			moveHandles(upward, proposal, scope_Locations, handleNumbers);
		},
		options: originalOptions,
		updateOptions,
		target: scope_Target,
		removePips,
		removeTooltips,
		getPositions: function() {
			return scope_Locations.slice();
		},
		getTooltips: function() {
			return scope_Tooltips;
		},
		getOrigins: function() {
			return scope_Handles;
		},
		pips
	};
	return scope_Self;
}
function initialize(target, originalOptions) {
	if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
	if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
	var api = scope(target, testOptions(originalOptions), originalOptions);
	target.noUiSlider = api;
	return api;
}
var nouislider_default$1 = {
	__spectrum: Spectrum,
	cssClasses,
	create: initialize
};
//#endregion
//#region node_modules/custom-card-helpers/dist/index.m.js
var NumberFormat, TimeFormat, fireEvent;
var init_index_m = __esmMin((() => {
	(function(NumberFormat) {
		NumberFormat["language"] = "language";
		NumberFormat["system"] = "system";
		NumberFormat["comma_decimal"] = "comma_decimal";
		NumberFormat["decimal_comma"] = "decimal_comma";
		NumberFormat["space_comma"] = "space_comma";
		NumberFormat["none"] = "none";
	})(NumberFormat || (NumberFormat = {}));
	(function(TimeFormat) {
		TimeFormat["language"] = "language";
		TimeFormat["system"] = "system";
		TimeFormat["am_pm"] = "12";
		TimeFormat["twenty_four"] = "24";
	})(TimeFormat || (TimeFormat = {}));
	fireEvent = (node, type, detail, options) => {
		options = options || {};
		detail = detail === null || detail === void 0 ? {} : detail;
		const event = new Event(type, {
			bubbles: options.bubbles === void 0 ? true : options.bubbles,
			cancelable: Boolean(options.cancelable),
			composed: options.composed === void 0 ? true : options.composed
		});
		event.detail = detail;
		node.dispatchEvent(event);
		return event;
	};
}));
//#endregion
//#region node_modules/nouislider/dist/nouislider.css?inline
init_index_m();
var nouislider_default = "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n";
//#endregion
//#region src/css/std-flex-slider-slider-css.ts
var stdFlexSliderSliderCardCss = `

  .slider-container.std {
    width: 100%;
    height: var(--height);
    display: flex;
    justify-content: center;
    align-items: var(--align-items);
    padding-bottom: var(--padding);
    margin-top: var(--margin-top);
    /* outline: 1px solid green; /* Debugging border */
  }

  .slider.std.noUi-target {
    height: 16px;
    background: color-mix(in srgb, var(--disabled-color) 30%, transparent);
    border-radius: 10px;
    border: none;
    box-shadow: none;
    /* outline: 1px solid blue; /* Debugging border */
  }
  
  .slider.std .noUi-base {
    height: 16px;
    /* outline: 1px solid green; /* Debugging border */
  }

  .slider.std .noUi-connect {
    height: 16px;
    background: color-mix(in srgb, var(--primary-color) 30%, transparent);
    /* outline: 1px solid red; /* Debugging border */
  }

  .slider.std .noUi-connects {
    border-radius: 10px;
  }

  .slider.std.noUi-horizontal .noUi-handle {
    width: 18px;
    height: 18px;
    top: -1px;
    right: -9px;
    background: var(--primary-text-color);
    border-width: 3px;
    border-style: solid;
    border-color: var(--primary-color);
    border-radius: 15px;
    box-shadow: none;
  }
  
  .slider.std .noUi-tooltip {
    background: var(--disabled-color);
    color: var(--primary-text-color);
    border-radius: 6px;
    border: 1px solid var(--primary-color);
    padding: 0px 4px;
    font-size: 1rem;
    top: -26px;
    height: 20px;
    display: flex;
    align-items: center; 
  }

  .slider.std.dragonly .noUi-tooltip {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .slider.std.dragonly .noUi-active .noUi-tooltip {
    opacity: 1;
  }

  .slider.std.dragonly .noUi-origin.display-reference-origin .noUi-tooltip {
    opacity: 1;
  }

  .slider.std .noUi-origin.display-reference-origin .noUi-tooltip {
    background: var(--ha-card-background, var(--card-background-color, var(--primary-background-color)));
    color: var(--secondary-text-color);
    border-color: transparent;
    font-weight: 700;
  }

  .slider.std .noUi-handle::before, .slider.std .noUi-handle::after {
    display: none;
  }

  .slider.std .noUi-origin.ghost-max-origin {
    pointer-events: none;
  }

  .slider.std .noUi-origin.display-reference-origin {
    pointer-events: none;
  }

  .slider.std .noUi-origin.ghost-max-origin .noUi-handle {
    opacity: 0;
    box-shadow: none;
    pointer-events: none;
  }

  .slider.std .noUi-origin.display-reference-origin .noUi-handle {
    width: 8px;
    height: 8px;
    background: var(--disabled-color);
    border: 0;
    border-radius: 50%;
    box-shadow: none;
    pointer-events: none;
  }

  .slider.std.noUi-horizontal .noUi-origin.display-reference-origin .noUi-handle {
    top: 4px;
    right: -4px;
  }

  .slider.std.noUi-horizontal .noUi-origin.display-reference-origin .noUi-tooltip {
    top: -29px;
  }

  .slider.std.noUi-horizontal .noUi-pips {
    top: +10px;
  }

  .slider.std.noUi-horizontal .noUi-marker-large {
    background: var(--primary-color);
    width: 3px;
    height: 8px;
    transform: translateX(-1px);
  }

  .slider.std.noUi-horizontal .noUi-marker-normal {
    background: var(--divider-color);
    width: 2px;
    height: 5px;
    transform: translateX(-1px);
  }

  .slider.std.noUi-horizontal.noUi-rtl .noUi-marker-large {
    transform: translateX(1px);
  }

  .slider.std.noUi-horizontal.noUi-rtl .noUi-marker-normal {
    transform: translateX(1px);
  }

  .slider.std.noUi-horizontal .noUi-marker-sub {
    display: none;
  }

  .slider.std.noUi-horizontal .noUi-value-horizontal {
    transform: translateX(-50%);
    top: +19px;
    line-height: 1;
  }

  .slider.std.noUi-horizontal.noUi-rtl .noUi-value-horizontal {
    transform: translate(50%, 0);
  }

  .slider.std.noUi-horizontal .noUi-value-large {
    font-size: 1rem;
    color: var(--primary-text-color);
  }

  .slider.std.noUi-horizontal .noUi-value-normal {
    display: none;
  }

  /* ===== Vertical mode ===== */

  .slider-container.std.vertical {
    height: var(--height, 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    /* outline: 1px solid green; /* Debugging border */
  }

  .slider.std.noUi-vertical {
    width: 16px;
    height: 100%;
  }

  .slider.std.noUi-vertical.noUi-target {
    width: 16px;
    height: 100%;
    background: color-mix(in srgb, var(--disabled-color) 30%, transparent);
    border-radius: 10px;
    border: none;
    box-shadow: none;
    /* outline: 1px solid blue; /* Debugging border */
  }

  .slider.std.noUi-vertical .noUi-base {
    width: 16px;
    height: 100%;
    /* outline: 1px solid green; /* Debugging border */
  }

  .slider.std.noUi-vertical .noUi-connect {
    width: 16px;
    height: 100%;
    background: color-mix(in srgb, var(--primary-color) 30%, transparent);
    /* outline: 1px solid red; /* Debugging border */
  }

  .slider.std.noUi-vertical .noUi-handle {
    width: 18px;
    height: 18px;
    left: -17px;
    bottom: -10px;
    right: auto;
    top: auto;
    background: var(--primary-text-color);
    border-width: 3px;
    border-style: solid;
    border-color: var(--primary-color);
    border-radius: 15px;
    box-shadow: none;
  }

  .slider.std.noUi-vertical .noUi-tooltip {
    top: 50%;
    transform: translate(-3px, -50%);
  }

  .slider.std.noUi-vertical .noUi-origin.ghost-max-origin .noUi-handle {
    opacity: 0;
    box-shadow: none;
    pointer-events: none;
  }

  .slider.std.noUi-vertical .noUi-origin.display-reference-origin .noUi-handle {
    top: auto;
    right: 4px;
    bottom: -5px;
    left: auto;
  }

  .slider.std.noUi-vertical.mirrored .noUi-tooltip {
    left: 22px;
    right: auto;
    text-align: left;
  }

  .slider.std.noUi-vertical .noUi-pips-vertical {
    left: 100%;
    padding-left: 5px;
    width: max-content;
    color: var(--primary-text-color);
  }

  .slider.std.noUi-vertical.mirrored .noUi-pips-vertical {
    left: auto;
    right: 100%;
    padding-right: 12px;
  }

  .slider.std.noUi-vertical .noUi-marker-large {
    background: var(--primary-color);
    height: 3px;
    width: 8px;
    transform: translateY(-1px);
  }

  .slider.std.noUi-vertical .noUi-marker-normal {
    background: var(--divider-color);
    height: 2px;
    width: 5px;
    transform: translateY(-1px);
  }

  .slider.std.noUi-vertical .noUi-marker-sub {
    display: none;
  }

  .slider.std.noUi-vertical .noUi-value-vertical {
    transform: translateY(-55%);
    left: -8px;
    line-height: 1;
  }

  .slider.std.noUi-vertical.noUi-rtl .noUi-value-vertical {
    transform: translateY(35%);
  }

  .slider.std.noUi-vertical.mirrored .noUi-value-vertical {
    left: auto;
    right: 16px;
    text-align: right;
  }

  .slider.std.noUi-vertical .noUi-value-large {
    font-size: 1rem;
    color: var(--primary-text-color);
  }

  .slider.std.noUi-vertical .noUi-value-normal {
    display: none;
  }

`;
//#endregion
//#region src/css/compact-flex-slider-slider-css.ts
var compactFlexSliderSliderCardCss = `
  
  .slider-container.compact {
    width: 100%;
    height: var(--height);
    display: flex;
    justify-content: center;
    align-items: var(--align-items);
    padding-bottom: var(--padding);
    margin-top: var(--margin-top);
    /* outline: 1px solid green; /* Debugging border */
  }
    
  .slider.compact.noUi-target {
    height: 6px;
    background: color-mix(in srgb, var(--disabled-color) 30%, transparent);
    border-radius: 5px;
    border: none;
    box-shadow: none;
  }
  
  .slider.compact .noUi-base {
    height: 6px;
  }
  
  .slider.compact .noUi-connect {
    height: 6px;
    background: color-mix(in srgb, var(--primary-color) 30%, transparent);
  }

  .slider.compact .noUi-connects {
    border-radius: 5px;
  }

  .slider.compact.noUi-horizontal .noUi-handle {
    width: 12px;
    height: 12px;
    top: -3px;
    right: -6px;
    background: var(--primary-color);
    border-width: 0px;
    border-radius: 10px;
    box-shadow: none;
  }
    
  .slider.compact .noUi-tooltip {
    background: var(--disabled-color);
    color: var(--primary-text-color);
    border-radius: 6px;
    border: 1px solid var(--primary-color);
    padding: 0px 4px;
    font-size: 0.7rem;
    top: -18px;
    height: 15px;
    display: flex;
    align-items: center; 
  }

  .slider.compact.dragonly .noUi-tooltip {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .slider.compact.dragonly .noUi-active .noUi-tooltip {
    opacity: 1;
  }

  .slider.compact.dragonly .noUi-origin.display-reference-origin .noUi-tooltip {
    opacity: 1;
  }

  .slider.compact .noUi-origin.display-reference-origin .noUi-tooltip {
    background: var(--ha-card-background, var(--card-background-color, var(--primary-background-color)));
    color: var(--secondary-text-color);
    border-color: transparent;
    font-weight: 700;
  }
  
  .slider.compact .noUi-handle::before, .slider.compact .noUi-handle::after {
    display: none;
  }

  .slider.compact .noUi-origin.ghost-max-origin {
    pointer-events: none;
  }

  .slider.compact .noUi-origin.display-reference-origin {
    pointer-events: none;
  }

  .slider.compact .noUi-origin.ghost-max-origin .noUi-handle {
    opacity: 0;
    box-shadow: none;
    pointer-events: none;
  }

  .slider.compact .noUi-origin.display-reference-origin .noUi-handle {
    background: var(--disabled-color);
    border: 0;
    border-radius: 999px;
    box-shadow: none;
    pointer-events: none;
  }

  .slider.compact .noUi-origin.display-reference-origin .noUi-touch-area {
    background: transparent;
    box-shadow: none;
  }

  .slider.compact.noUi-horizontal .noUi-origin.display-reference-origin .noUi-handle {
    width: 4px;
    height: 9px;
    top: -2px;
    right: -2px;
  }

  .slider.compact.noUi-horizontal .noUi-origin.display-reference-origin .noUi-tooltip {
    top: -19px;
  }

  .slider.compact.noUi-horizontal .noUi-pips {
    top: +0px;
  }

  .slider.compact.noUi-horizontal .noUi-marker-large {
    background: var(--primary-color);
    width: 2px;
    height: 6px;
    transform: translateX(0px);
  }

  .slider.compact.noUi-horizontal .noUi-marker-normal {
    background: var(--divider-color);
    width: 1px;
    height: 4px;
    transform: translateX(0px);
  }

  .slider.compact.noUi-horizontal.noUi-rtl .noUi-marker-large {
    transform: translateX(1px);
  }

  .slider.compact.noUi-horizontal.noUi-rtl .noUi-marker-normal {
    transform: translateX(1px);
  }

  .slider.compact.noUi-horizontal .noUi-marker-sub {
    display: none;
  }

  .slider.compact.noUi-horizontal .noUi-value-horizontal {
    transform: translateX(-50%);
    top: +17px;
    line-height: 1;
  }

  .slider.compact.noUi-horizontal.noUi-rtl .noUi-value-horizontal {
    transform: translate(50%, 0);
  }

  .slider.compact.noUi-horizontal .noUi-value-large {
    font-size: 0.7rem;
    color: var(--primary-text-color);
  }

  .slider.compact.noUi-horizontal .noUi-value-normal {
    display: none;
  }

  /* ===== Vertical mode ===== */

  .slider-container.compact.vertical {
    height: var(--height, 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    /* outline: 1px solid green; /* Debugging border */
  }

  .slider.std.noUi-vertical {
    width: 6px;
    height: 100%;
  }

  .slider.compact.noUi-vertical.noUi-target {
    width: 6px;
    height: 100%;
    border-radius: 5px;
    background: color-mix(in srgb, var(--disabled-color) 30%, transparent);
    border: none;
    box-shadow: none;
  }

  .slider.compact.noUi-vertical .noUi-base {
    width: 6px;
    height: 100%;
  }

  .slider.compact.noUi-vertical .noUi-connect {
    width: 6px;
    height: 100%;
    background: color-mix(in srgb, var(--primary-color) 30%, transparent);
  }

  .slider.compact.noUi-vertical .noUi-handle {
    width: 12px;
    height: 12px;
    left: -9px;
    bottom: -6px;
    right: auto;
    top: auto;
    background: var(--primary-color);
    border-width: 0px;
    border-radius: 10px;
    box-shadow: none;
  }

  .slider.compact.noUi-vertical .noUi-tooltip {
    top: 50%;
    transform: translate(0, -50%);
  }

  .slider.compact.noUi-vertical .noUi-origin.ghost-max-origin .noUi-handle {
    opacity: 0;
    box-shadow: none;
    pointer-events: none;
  }

  .slider.compact.noUi-vertical .noUi-origin.display-reference-origin .noUi-handle {
    width: 10px;
    height: 4px;
    left: -8px;
    right: auto;
    top: auto;
    bottom: -2px;
  }

  .slider.compact.noUi-vertical.mirrored .noUi-tooltip {
    left: 15px;
    right: auto;
    text-align: left;
  }

  .slider.compact.noUi-vertical .noUi-pips-vertical {
    left: 100%;
    padding-left: 5px;
    width: max-content;
    color: var(--primary-text-color);
  }

  .slider.compact.noUi-vertical.mirrored .noUi-pips-vertical {
    left: auto;
    right: 100%;
    padding-right: 10px;
  }

  .slider.compact.noUi-vertical .noUi-marker-large {
    background: var(--primary-color);
    height: 2px;
    width: 6px;
    transform: translateY(-1px);
  }

  .slider.compact.noUi-vertical .noUi-marker-normal {
    background: var(--divider-color);
    height: 1px;
    width: 4px;
    transform: translateY(-1px);
  }

  .slider.compact.noUi-vertical .noUi-marker-sub {
    display: none;
  }

  .slider.compact.noUi-vertical .noUi-value-vertical {
    transform: translateY(-65%);
    left: -12px;
    line-height: 1;
  }

  .slider.compact.noUi-vertical.noUi-rtl .noUi-value-vertical {
    transform: translateY(25%);
  }

  .slider.compact.noUi-vertical.mirrored .noUi-value-vertical {
    left: auto;
    right: 12px;
    text-align: right;
  }

  .slider.compact.noUi-vertical .noUi-value-large {
    font-size: 0.7rem;
    color: var(--primary-text-color);
  }

  .slider.compact.noUi-vertical .noUi-value-normal {
    display: none;
  }

`;
//#endregion
//#region src/flex-slider-card-slider.ts
init_lit();
init_decorators();
init_entity_management();
init_decorate();
var _FlexSliderCardSlider;
var FlexSliderCardSlider = class FlexSliderCardSlider extends i {
	static {
		_FlexSliderCardSlider = this;
	}
	constructor(..._args) {
		super(..._args);
		this.forceHeight = false;
		this.values = [0, 100];
		this.inactive = false;
		this.disabled = false;
		this._userIsUpdating = false;
		this._isSyncing = false;
		this._isAdjustingHandles = false;
		this._valuesBarSetMode = null;
		this._valuesBarSetValue = null;
		this._pressStartTime = 0;
	}
	static {
		this.styles = i$3`
    ${r$4(nouislider_default)}
    
    :host {
      display: block;
      width: 100%;
    }
    
    * {
      box-sizing: border-box;
    }
    
    .slider {
      width: 100%;
    }

    .slider.noUi-horizontal,
    .slider.noUi-horizontal * {
      -ms-touch-action: pan-y;
      touch-action: pan-y pinch-zoom;
    }

    .slider.noUi-vertical,
    .slider.noUi-vertical * {
      -ms-touch-action: pan-x;
      touch-action: pan-x pinch-zoom;
    }

    /* noUiSlider writes inline z-index values; keep the reference handle and bubble above editable handles. */
    .slider .noUi-origin.display-reference-origin {
      z-index: 1000 !important;
    }

    :host([inactive]) .slider.std.noUi-target,
    :host([inactive]) .slider.compact.noUi-target,
    :host([inactive]) .slider.std.noUi-vertical.noUi-target,
    :host([inactive]) .slider.compact.noUi-vertical.noUi-target {
      background: color-mix(in srgb, var(--disabled-color) 24%, transparent);
    }

    :host([inactive]) .slider.std .noUi-connect,
    :host([inactive]) .slider.compact .noUi-connect,
    :host([inactive]) .slider.std.noUi-vertical .noUi-connect,
    :host([inactive]) .slider.compact.noUi-vertical .noUi-connect {
      background: color-mix(in srgb, var(--disabled-text-color) 35%, transparent);
    }

    :host([inactive]) .slider.std.noUi-horizontal .noUi-handle,
    :host([inactive]) .slider.std.noUi-vertical .noUi-handle,
    :host([inactive]) .slider.compact.noUi-horizontal .noUi-handle,
    :host([inactive]) .slider.compact.noUi-vertical .noUi-handle {
      background: var(--disabled-text-color);
      border-color: var(--disabled-color);
    }

    :host([inactive]) .slider.std .noUi-tooltip,
    :host([inactive]) .slider.compact .noUi-tooltip {
      background: var(--ha-card-background, var(--card-background-color, var(--primary-background-color)));
      color: var(--disabled-text-color);
      border-color: var(--divider-color);
    }

    :host([inactive]) .slider.std.noUi-horizontal .noUi-marker-large,
    :host([inactive]) .slider.compact.noUi-horizontal .noUi-marker-large,
    :host([inactive]) .slider.std.noUi-vertical .noUi-marker-large,
    :host([inactive]) .slider.compact.noUi-vertical .noUi-marker-large,
    :host([inactive]) .slider.std.noUi-horizontal .noUi-marker-normal,
    :host([inactive]) .slider.compact.noUi-horizontal .noUi-marker-normal,
    :host([inactive]) .slider.std.noUi-vertical .noUi-marker-normal,
    :host([inactive]) .slider.compact.noUi-vertical .noUi-marker-normal {
      background: var(--divider-color);
    }

    :host([inactive]) .slider.std.noUi-horizontal .noUi-value-large,
    :host([inactive]) .slider.compact.noUi-horizontal .noUi-value-large,
    :host([inactive]) .slider.std.noUi-vertical .noUi-value-large,
    :host([inactive]) .slider.compact.noUi-vertical .noUi-value-large,
    :host([inactive]) .slider.std.noUi-vertical .noUi-pips-vertical,
    :host([inactive]) .slider.compact.noUi-vertical .noUi-pips-vertical {
      color: var(--disabled-text-color);
    }
    
    /* noUiSlider overrides */

    ${r$4(stdFlexSliderSliderCardCss)}
    ${r$4(compactFlexSliderSliderCardCss)}
    
  `;
	}
	#_sliderElement_accessor_storage;
	get _sliderElement() {
		return this.#_sliderElement_accessor_storage;
	}
	set _sliderElement(value) {
		this.#_sliderElement_accessor_storage = value;
	}
	firstUpdated() {
		if (!this.config) throw new Error("Config not initialized");
		const pipsValues = Array.from({ length: this.config.majorticks }, (_, i) => i * 100 / (this.config.majorticks - 1));
		const density = 100 / ((this.config.majorticks - 1) * (this.config.minorticks + 1));
		const tooltips = this._buildTooltips();
		nouislider_default$1.create(this._sliderElement, {
			start: this.values,
			orientation: this.config.orientation,
			direction: this.config.direction,
			tooltips,
			connect: this.config.connect,
			range: {
				"min": this.config.min,
				"max": this.config.max
			},
			step: this.config.step,
			pips: this.config.hasTicks ? {
				mode: PipsMode.Positions,
				values: pipsValues,
				density,
				format: { to: (value) => this._sliderToPips(value) }
			} : void 0,
			behaviour: "unconstrained"
		});
		this._slider = this._sliderElement.noUiSlider;
		if (this.config.hasReference) {
			const origins = this._slider.getOrigins();
			origins[this.config.entityCount]?.classList.add("ghost-max-origin");
			origins[this.values.length - 1]?.classList.add("display-reference-origin");
		}
		this._syncDisabledState();
		this._slider.on("start", (_values, handle) => {
			this._onStart(handle);
		});
		this._slider.on("change", (values) => {
			this._onChange(values);
		});
		this._slider.on("update", (values, handle) => {
			this._onUpdate(values, handle);
		});
		this._slider.on("end", () => {
			this._onEnd();
		});
	}
	updated(changedProps) {
		if (!this._slider) return;
		if (changedProps.has("disabled")) this._syncDisabledState();
		if (this._userIsUpdating || this._isSyncing) return;
		if (changedProps.has("values")) this._slider.set(this.values, false);
	}
	render() {
		const draggerClass = `${this.config.isDragOnlyBubbles ? "dragonly" : ""}`;
		const verticalLayoutClass = this.config.isVertical && this.config.verticalLayout === "mirrored" ? " mirrored" : "";
		const hasBubbles = this.config.hasBubbles;
		const hasReferenceBubble = this.config.hasReferenceBubble;
		const reservesBubbleSpace = hasBubbles || hasReferenceBubble;
		if (this.config.isVertical) {
			let height;
			if (this.forceHeight || this.config.sliderVerticalHeight == null) height = "100%";
			else {
				const cardHeight = 56 + (this.config.sliderVerticalHeight - 1) * 64;
				const titleHeight = this.config.hasTitle ? this.config.isStd ? 30 : 20 : 0;
				const containerPadding = this.config.isStd ? 12 : 7;
				const paddingTop = this.config.hasTitle ? 0 : containerPadding;
				const paddingBottom = this.config.hasValuesBar ? 0 : containerPadding;
				height = `calc(${cardHeight - titleHeight - paddingTop - paddingBottom}px - var(--ha-card-border-total, 0px))`;
			}
			return b`
        <div
          class="slider-container ${this.sliderClass} vertical${verticalLayoutClass}"
          style="--height: ${height};"
        ><div class="slider ${this.sliderClass} ${draggerClass} vertical${verticalLayoutClass}"></div>
        </div>
      `;
		}
		let alignItems = "";
		let height = "";
		let padding = "";
		let marginTop = "";
		if (reservesBubbleSpace && this.config.hasTicks) {
			alignItems = "center";
			height = this.config.isStd ? "67px" : "50px";
			padding = this.config.isStd ? "0px" : "2px";
			marginTop = this.config.isStd ? "-1px" : "0px";
		} else if (reservesBubbleSpace) {
			alignItems = "flex-end";
			height = this.config.isStd ? "43px" : "32px";
			padding = this.config.isStd ? "1px" : "4px";
			marginTop = "0px";
		} else if (this.config.hasTicks) {
			alignItems = "flex-start";
			height = this.config.isStd ? "43px" : "28px";
			padding = this.config.isStd ? "0px" : "2px";
			marginTop = this.config.isStd ? "0px" : "2px";
		} else {
			alignItems = "center";
			height = this.config.isStd ? "20px" : "14px";
			padding = "0px";
			marginTop = "0px";
		}
		return b`
      <div
        class="slider-container ${this.sliderClass}"
        style="
          --align-items: ${alignItems};
          --height: ${height};
          --padding: ${padding};
          --margin-top: ${marginTop};
        "
      > <div class="slider ${this.sliderClass} ${draggerClass}"></div>
      </div>
    `;
	}
	isUserUpdating() {
		return this._userIsUpdating;
	}
	setCallbacks(setModeCallback, setValueCallback) {
		this._valuesBarSetMode = setModeCallback;
		this._valuesBarSetValue = setValueCallback;
	}
	_emitUserUpdateStateChanged(isUserUpdating) {
		this.dispatchEvent(new CustomEvent("user-update-state-changed", {
			detail: { isUserUpdating },
			bubbles: true,
			composed: true
		}));
	}
	_onStart(handle) {
		if (this.disabled) return;
		if (handle >= this.config.entityCount) return;
		`${handle}`;
		this._pressStartTime = Date.now();
		this._userIsUpdating = true;
		this._emitUserUpdateStateChanged(true);
		this._valuesBarSetMode?.(FlexSliderCardValuesBarMode.USERUPDATE, handle);
	}
	async _onChange(values) {
		`${Date.now() - this._pressStartTime}`;
		if (Date.now() - this._pressStartTime < 180) {
			this._syncSliderToEntityValues();
			this._valuesBarSetMode?.(FlexSliderCardValuesBarMode.DEFAULT);
			return;
		}
		if (this.disabled) {
			this._valuesBarSetMode?.(FlexSliderCardValuesBarMode.DEFAULT);
			return;
		}
		const nextValues = values.map(Number).slice(0, this.config.entityCount);
		const currentValues = this.config.entities.map((entity) => entity.sliderValue);
		const changedIndexes = nextValues.map((value, index) => currentValues[index] === value ? -1 : index).filter((index) => index !== -1);
		if (changedIndexes.length === 0) {
			this._valuesBarSetMode?.(FlexSliderCardValuesBarMode.DEFAULT);
			return;
		}
		this._isSyncing = true;
		try {
			if (this.config.handlesBehavior === "unconstrained") await this._commitChangedValues(changedIndexes, nextValues);
			else await this._commitChangedValuesInOrder(currentValues, nextValues, changedIndexes);
		} catch (error) {
			this._syncSliderToEntityValues();
			const message = _FlexSliderCardSlider._getErrorMessage(error);
			fireEvent(this, "hass-notification", { message });
		} finally {
			this._isSyncing = false;
			if (this._userIsUpdating) return;
			this._valuesBarSetMode?.(FlexSliderCardValuesBarMode.DEFAULT);
		}
	}
	_onUpdate(values, handle) {
		const numbers = values.map(Number);
		const editableValues = numbers.slice(0, this.config.entityCount);
		if (handle >= this.config.entityCount) {
			this._valuesBarSetValue?.(editableValues);
			return;
		}
		if (!this._isAdjustingHandles) {
			const adjustedValues = this._getAdjustedHandleValues(editableValues, handle);
			if (adjustedValues !== null) {
				this._isAdjustingHandles = true;
				try {
					adjustedValues.forEach((value, index) => {
						if (value !== numbers[index]) this._slider.setHandle(index, value, false, false);
					});
				} finally {
					this._isAdjustingHandles = false;
				}
				this._valuesBarSetValue?.(adjustedValues);
				return;
			}
		}
		this._valuesBarSetValue?.(editableValues);
	}
	_onEnd() {
		this._pressStartTime = 0;
		this._userIsUpdating = false;
		this._emitUserUpdateStateChanged(false);
		if (this._isSyncing) return;
		this._valuesBarSetMode?.(FlexSliderCardValuesBarMode.DEFAULT);
	}
	static _getErrorMessage(error) {
		if (error instanceof Error) return error.message;
		if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") return error.message;
		return `Error occurred while updating slider values: ${String(error)}`;
	}
	_syncSliderToEntityValues() {
		const values = this.config.hasReference ? [
			...this.config.entities.map((entity) => entity.sliderValue),
			this.config.max,
			this.config.referenceEntity.sliderValue
		] : this.config.entities.map((entity) => entity.sliderValue);
		this._slider.set(values, false);
		this._valuesBarSetValue?.(values.slice(0, this.config.entityCount));
	}
	async _commitChangedValues(changedIndexes, nextValues) {
		for (const index of changedIndexes) await this.config.entities[index].setSliderValue(nextValues[index]);
	}
	async _commitChangedValuesInOrder(currentValues, nextValues, changedIndexes) {
		const workingValues = [...currentValues];
		const pendingIndexes = new Set(changedIndexes);
		while (pendingIndexes.size > 0) {
			let progressed = false;
			for (const index of Array.from(pendingIndexes)) {
				const leftValue = index === 0 ? Number.NEGATIVE_INFINITY : workingValues[index - 1];
				const rightValue = index === workingValues.length - 1 ? Number.POSITIVE_INFINITY : workingValues[index + 1];
				const targetValue = nextValues[index];
				if (leftValue <= targetValue && targetValue <= rightValue) {
					await this.config.entities[index].setSliderValue(targetValue);
					workingValues[index] = targetValue;
					pendingIndexes.delete(index);
					progressed = true;
				}
			}
			if (!progressed) throw new Error("Unable to update entities while preserving non-decreasing handle order");
		}
	}
	_getAdjustedHandleValues(values, handle) {
		if (this.config.handlesBehavior === "unconstrained") return null;
		const nextValues = [...values];
		if (this.config.handlesBehavior === "flexible") {
			for (let index = handle + 1; index < nextValues.length; index += 1) if (nextValues[index] < nextValues[index - 1]) nextValues[index] = nextValues[index - 1];
			for (let index = handle - 1; index >= 0; index -= 1) if (nextValues[index] > nextValues[index + 1]) nextValues[index] = nextValues[index + 1];
		} else if (this.config.handlesBehavior === "fixed") {
			const leftBound = handle === 0 ? Number.NEGATIVE_INFINITY : nextValues[handle - 1];
			const rightBound = handle === nextValues.length - 1 ? Number.POSITIVE_INFINITY : nextValues[handle + 1];
			nextValues[handle] = Math.min(Math.max(nextValues[handle], leftBound), rightBound);
		}
		return nextValues;
	}
	_syncDisabledState() {
		if (!this._slider) return;
		if (this.disabled) {
			if (this._userIsUpdating) {
				this._userIsUpdating = false;
				this._emitUserUpdateStateChanged(false);
				this._valuesBarSetMode?.(FlexSliderCardValuesBarMode.DEFAULT);
			}
			this._slider.disable();
			return;
		}
		this._slider.enable();
		if (this.config.hasReference) {
			this._slider.disable(this.config.entityCount);
			this._slider.disable(this.values.length - 1);
		}
	}
	_buildTooltips() {
		if (!this.config.hasBubbles && !this.config.hasReferenceBubble) return false;
		const tooltips = this.config.entities.map((_, index) => this.config.hasBubbles ? { to: (value) => this._sliderToBubble(value, index) } : false);
		if (this.config.hasReference) {
			tooltips.push(false);
			tooltips.push(this.config.hasReferenceBubble ? { to: (value) => this._sliderToReferenceBubble(value) } : false);
		}
		return tooltips;
	}
	_sliderToPips(value) {
		let valueToDisplay = "";
		if (this.config?.entitytype === FlexSliderCardEntityType.NUMBER || this.config?.entitytype === FlexSliderCardEntityType.COVER) valueToDisplay = Number(value).toFixed(Number(this.config.nbdigitsTicks));
		else if (this.config?.entitytype === FlexSliderCardEntityType.TIME) valueToDisplay = minutesToTime(value);
		else throw new Error("Unsupported entity type");
		return valueToDisplay;
	}
	_sliderToBubble(value, handle) {
		return this.config.entities[handle].toText(value, this.config.nbdigitsBubbles, this.config.unitBubbles, this.config.showTextBubbles);
	}
	_sliderToReferenceBubble(value) {
		return this.config.referenceEntity.toText(value, this.config.nbdigitsBubbles, this.config.referenceUnit, true);
	}
};
__decorate([n({ attribute: false })], FlexSliderCardSlider.prototype, "config", void 0);
__decorate([n({ attribute: false })], FlexSliderCardSlider.prototype, "sliderClass", void 0);
__decorate([n({ type: Boolean })], FlexSliderCardSlider.prototype, "forceHeight", void 0);
__decorate([n({ attribute: false })], FlexSliderCardSlider.prototype, "values", void 0);
__decorate([n({
	type: Boolean,
	reflect: true
})], FlexSliderCardSlider.prototype, "inactive", void 0);
__decorate([n({
	type: Boolean,
	reflect: true
})], FlexSliderCardSlider.prototype, "disabled", void 0);
__decorate([e(".slider")], FlexSliderCardSlider.prototype, "_sliderElement", null);
FlexSliderCardSlider = _FlexSliderCardSlider = __decorate([t("flex-slider-card-slider")], FlexSliderCardSlider);
//#endregion
//#region src/config/flex-slider-card-config-stub.ts
var flexSliderCardConfigStub = {
	type: "custom:flex-slider-card",
	name: "Flex Slider",
	format: "std",
	valuesbaractive: true,
	valuesbar: { digits: "auto" },
	min: 0,
	max: 100,
	step: 1,
	entities: [{
		entity: "",
		text: ""
	}]
};
//#endregion
//#region src/utils/version.ts
function getVersion() {
	return "3.1.0";
}
//#endregion
//#region node_modules/memoize-one/dist/memoize-one.esm.js
function isEqual(first, second) {
	if (first === second) return true;
	if (safeIsNaN(first) && safeIsNaN(second)) return true;
	return false;
}
function areInputsEqual(newInputs, lastInputs) {
	if (newInputs.length !== lastInputs.length) return false;
	for (var i = 0; i < newInputs.length; i++) if (!isEqual(newInputs[i], lastInputs[i])) return false;
	return true;
}
function memoizeOne(resultFn, isEqual) {
	if (isEqual === void 0) isEqual = areInputsEqual;
	var cache = null;
	function memoized() {
		var newArgs = [];
		for (var _i = 0; _i < arguments.length; _i++) newArgs[_i] = arguments[_i];
		if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
		var lastResult = resultFn.apply(this, newArgs);
		cache = {
			lastResult,
			lastArgs: newArgs,
			lastThis: this
		};
		return lastResult;
	}
	memoized.clear = function clear() {
		cache = null;
	};
	return memoized;
}
var safeIsNaN;
var init_memoize_one_esm = __esmMin((() => {
	safeIsNaN = Number.isNaN || function ponyfill(value) {
		return typeof value === "number" && value !== value;
	};
}));
//#endregion
//#region src/config/flex-slider-card-config-form.ts
var MIN_POSITIVE_STEP_FOR_FORM, baseSchema, valuesBarSchema, bubblesSchema, ticksSchema, referenceSchema, adaptiveStateOptionsSchema, handleSchema, connectEndSchema, handlesBehaviorSchema, computeSchema;
var init_flex_slider_card_config_form = __esmMin((() => {
	init_memoize_one_esm();
	init_entity_management();
	MIN_POSITIVE_STEP_FOR_FORM = 1e-6;
	baseSchema = memoizeOne((isNumber, isVertical, isCompact, showVerticalLayout, hasReferenceValuesBar) => [
		{
			name: "name",
			selector: { text: {} },
			required: false
		},
		{
			name: "format",
			selector: { select: {
				mode: "dropdown",
				options: [{
					value: "std",
					label: "Standard"
				}, {
					value: "compact",
					label: "Compact"
				}]
			} },
			required: false
		},
		{
			type: "grid",
			name: "",
			schema: [{
				name: "orientation",
				selector: { select: {
					mode: "dropdown",
					options: [{
						value: "horizontal",
						label: "Horizontal"
					}, {
						value: "vertical",
						label: "Vertical"
					}]
				} },
				required: false
			}, ...!isVertical ? [{
				name: "horizontalwidth",
				selector: { number: {
					mode: "slider",
					min: 10,
					max: 100,
					step: 5
				} },
				required: false
			}] : [{
				name: "verticalheight",
				selector: { number: {
					mode: "slider",
					min: isCompact ? 1 : 2,
					max: 12,
					step: 1
				} },
				required: false
			}]]
		},
		{
			type: "grid",
			name: "",
			schema: [
				{
					name: "valuesbaractive",
					selector: { boolean: {} },
					required: false,
					disabled: isVertical || hasReferenceValuesBar
				},
				{
					name: "bubblesactive",
					selector: { boolean: {} },
					required: false
				},
				{
					name: "ticksactive",
					selector: { boolean: {} },
					required: false
				},
				{
					name: "referenceactive",
					selector: { boolean: {} },
					required: false
				},
				{
					name: "adaptivestateactive",
					selector: { boolean: {} },
					required: false
				},
				...showVerticalLayout ? [{
					name: "verticallayout",
					selector: { select: {
						mode: "dropdown",
						options: [{
							value: "standard",
							label: "Standard"
						}, {
							value: "mirrored",
							label: "Mirrored"
						}]
					} },
					required: false
				}] : []
			]
		},
		{
			type: "expandable",
			title: "Behavior",
			icon: "mdi:tune",
			flattened: true,
			schema: [{
				type: "grid",
				name: "",
				schema: [
					{
						name: "min",
						selector: { number: { mode: "box" } },
						disabled: !isNumber
					},
					{
						name: "max",
						selector: { number: { mode: "box" } },
						disabled: !isNumber
					},
					{
						name: "step",
						selector: { number: {
							mode: "box",
							step: "any",
							min: MIN_POSITIVE_STEP_FOR_FORM
						} },
						disabled: !isNumber
					},
					{
						name: "direction",
						selector: { select: {
							mode: "dropdown",
							options: [{
								value: "ltr",
								label: isVertical ? "Top to Bottom" : "Left to Right"
							}, {
								value: "rtl",
								label: isVertical ? "Bottom to Top" : "Right to Left"
							}]
						} },
						required: false
					}
				]
			}]
		}
	]);
	valuesBarSchema = memoizeOne((digitsValuesBar) => [{
		type: "expandable",
		name: "valuesbar",
		title: "Values bar",
		icon: "mdi:format-list-bulleted",
		schema: [{
			type: "grid",
			schema: [
				{
					name: "unit",
					selector: { text: {} }
				},
				{
					name: "showtext",
					selector: { boolean: {} },
					required: false
				},
				{
					name: "digits",
					selector: { select: {
						mode: "dropdown",
						options: [{
							value: "auto",
							label: "Auto"
						}, {
							value: "manual",
							label: "Manual"
						}]
					} }
				},
				{
					name: "nbdigits",
					selector: { number: {
						mode: "box",
						min: 0
					} },
					disabled: digitsValuesBar !== "manual"
				}
			]
		}]
	}]);
	bubblesSchema = memoizeOne((digitsBubbles) => [{
		type: "expandable",
		name: "bubbles",
		title: "Bubbles",
		icon: "mdi:format-list-bulleted",
		schema: [{
			type: "grid",
			schema: [
				{
					name: "unit",
					selector: { text: {} }
				},
				{
					name: "showtext",
					selector: { boolean: {} },
					required: false
				},
				{
					name: "digits",
					selector: { select: {
						mode: "dropdown",
						options: [{
							value: "auto",
							label: "Auto"
						}, {
							value: "manual",
							label: "Manual"
						}]
					} }
				},
				{
					name: "nbdigits",
					selector: { number: {
						mode: "box",
						min: 0
					} },
					disabled: digitsBubbles !== "manual"
				},
				{
					name: "dragonly",
					selector: { boolean: {} },
					required: false
				}
			]
		}]
	}]);
	ticksSchema = memoizeOne((digitsTicks) => [{
		type: "expandable",
		name: "ticks",
		title: "Tick Marks",
		icon: "mdi:format-list-bulleted",
		schema: [{
			type: "grid",
			schema: [{
				name: "digits",
				selector: { select: {
					mode: "dropdown",
					options: [{
						value: "auto",
						label: "Auto"
					}, {
						value: "manual",
						label: "Manual"
					}]
				} }
			}, {
				name: "nbdigits",
				selector: { number: {
					mode: "box",
					min: 0
				} },
				disabled: digitsTicks !== "manual"
			}]
		}, {
			type: "grid",
			schema: [{
				name: "majorticks",
				selector: { number: {
					mode: "box",
					step: 1,
					min: 2
				} },
				required: false
			}, {
				name: "minorticks",
				selector: { number: {
					mode: "box",
					step: 1,
					min: 0
				} },
				required: false
			}]
		}]
	}]);
	referenceSchema = memoizeOne((selectedEntityType, hasReferenceBubble = false, hasReferenceValuesBar = false, hasValuesBar = false, isVertical = false) => {
		return [{
			type: "expandable",
			name: "reference",
			title: "Reference Entity",
			icon: "mdi:target",
			schema: [
				{
					name: "entity",
					required: false,
					selector: { entity: { domain: selectedEntityType === FlexSliderCardEntityType.TIME ? ["input_datetime"] : selectedEntityType === FlexSliderCardEntityType.COVER ? ["cover"] : selectedEntityType === FlexSliderCardEntityType.NUMBER ? FLEX_SLIDER_NUMBER_ENTITY_DOMAINS : FLEX_SLIDER_ENTITY_DOMAINS } }
				},
				{
					type: "grid",
					name: "",
					schema: [{
						name: "bubble",
						required: false,
						selector: { boolean: {} }
					}, {
						name: "valuesbar",
						required: false,
						selector: { boolean: {} },
						disabled: isVertical || hasValuesBar
					}]
				},
				...hasReferenceBubble || hasReferenceValuesBar ? [{
					type: "grid",
					name: "",
					schema: [{
						name: "text",
						required: false,
						selector: { text: {} }
					}, {
						name: "unit",
						required: false,
						selector: { text: {} }
					}]
				}] : [],
				...hasReferenceValuesBar ? [{
					type: "grid",
					name: "",
					schema: [{
						name: "valuesbartextlarge",
						required: false,
						selector: { boolean: {} }
					}]
				}] : []
			]
		}];
	});
	adaptiveStateOptionsSchema = [{
		type: "grid",
		schema: [{
			name: "editablewhenlinkedinactive",
			selector: { boolean: {} },
			required: false,
			default: false
		}]
	}];
	handleSchema = [{
		name: "entity",
		required: false,
		selector: { entity: { domain: FLEX_SLIDER_ENTITY_DOMAINS } }
	}, {
		type: "grid",
		name: "",
		schema: [{
			name: "text",
			required: false,
			selector: { text: {} }
		}, {
			name: "connectprevious",
			required: false,
			selector: { boolean: {} }
		}]
	}];
	connectEndSchema = [{
		name: "connectend",
		required: false,
		selector: { boolean: {} },
		default: false
	}];
	handlesBehaviorSchema = [{
		name: "handlesbehavior",
		selector: { select: {
			mode: "dropdown",
			options: [
				{
					value: "unconstrained",
					label: "Unconstrained"
				},
				{
					value: "flexible",
					label: "Flexible"
				},
				{
					value: "fixed",
					label: "Fixed"
				}
			]
		} },
		required: false,
		default: "fixed"
	}];
	computeSchema = memoizeOne((hasValuesBar, hasBubbles, hasTicks, hasReference, isAdaptative, hasReferenceBubble, hasReferenceValuesBar, digitsValuesBar, digitsBubbles, digitsTicks, isNumber, isVertical, isCompact, selectedEntityType) => {
		const schema = [...baseSchema(isNumber, isVertical, isCompact, isVertical && (hasBubbles || hasTicks), hasReferenceValuesBar)];
		if (hasValuesBar) schema.push(...valuesBarSchema(digitsValuesBar));
		if (hasBubbles) schema.push(...bubblesSchema(digitsBubbles));
		if (hasTicks) schema.push(...ticksSchema(digitsTicks));
		if (hasReference) schema.push(...referenceSchema(selectedEntityType, hasReferenceBubble, hasReferenceValuesBar, hasValuesBar, isVertical));
		return schema;
	});
}));
//#endregion
//#region src/config/flex-slider-card-config-labels.ts
var flexSliderCardConfigLabels;
var init_flex_slider_card_config_labels = __esmMin((() => {
	flexSliderCardConfigLabels = {
		name: "Name",
		format: "Format",
		valuesbaractive: "Enable values bar",
		bubblesactive: "Enable bubbles",
		referenceactive: "Enable reference entity",
		adaptivestateactive: "Enable Adaptative State",
		conditions: "External condition",
		editablewhenlinkedinactive: "Editable when linked inactive state",
		entity: "Entity",
		text: "Text",
		bubble: "Show bubble",
		connectprevious: "Connect with previous",
		connectend: "Connect at end",
		min: "Min (Number/Cover only)",
		max: "Max (Number/Cover only)",
		step: "Step (Number/Cover only)",
		handlesbehavior: "Handle behavior",
		unit: "Unit",
		valuesbar: "Show values bar",
		valuesbartextlarge: "Values bar large text",
		showtext: "Show text",
		digits: "Digits Mode",
		nbdigits: "Number of Digits (Manual only)",
		dragonly: "Visible during drag only",
		direction: "Direction",
		orientation: "Orientation",
		verticallayout: "Vertical layout",
		horizontalwidth: "Slider width (%)",
		verticalheight: "Slider height (rows)",
		ticksactive: "Show tick marks",
		majorticks: "Number of Major Ticks",
		minorticks: "Number of Minor Ticks",
		reference: "Reference entity"
	};
}));
//#endregion
//#region src/conditional/flex-slider-card-condition-editor.ts
function getConditionAttributeSchema(entityId, hass) {
	return {
		name: "attribute",
		selector: { select: {
			mode: "dropdown",
			custom_value: true,
			options: entityId ? Object.keys(hass?.states[entityId]?.attributes ?? {}).filter((attribute) => !HIDDEN_CONDITION_ATTRIBUTES.has(attribute)).map((attribute) => ({
				value: attribute,
				label: getAttributeLabel(attribute, entityId, hass)
			})).sort((a, b) => a.label.localeCompare(b.label)) : []
		} }
	};
}
function getAttributeLabel(attribute, entityId, hass) {
	const domain = entityId.split(".")[0];
	const localizeKeys = [
		`component.${domain}.entity_component._.state_attributes.${attribute}.name`,
		`component.${domain}.state_attributes.${attribute}.name`,
		`component.homeassistant.entity_component._.state_attributes.${attribute}.name`
	];
	for (const key of localizeKeys) {
		const label = hass?.localize(key);
		if (label) return label;
	}
	return attribute.replaceAll("_", " ").replace(/^\w/, (letter) => letter.toUpperCase());
}
function getStateConditionSchema(entityId, hass) {
	return [
		ENTITY_SCHEMA,
		getConditionAttributeSchema(entityId, hass),
		STATE_VALUE_SCHEMA
	];
}
function getNumericStateConditionSchema(entityId, hass) {
	return [
		ENTITY_SCHEMA,
		getConditionAttributeSchema(entityId, hass),
		NUMERIC_STATE_THRESHOLD_SCHEMA
	];
}
function capitalize(value) {
	return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function getBreakpointCombinations() {
	return BREAKPOINTS.reduce((combinations, breakpoint) => [...combinations, ...combinations.map((combination) => [...combination, breakpoint])], [[]]).filter((combination) => combination.length > 0);
}
function mergeConsecutiveRanges(ranges) {
	if (ranges.length === 0) return [];
	const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);
	const mergedRanges = [sortedRanges[0]];
	for (let index = 1; index < sortedRanges.length; index += 1) {
		const currentRange = sortedRanges[index];
		const previousRange = mergedRanges[mergedRanges.length - 1];
		if (currentRange[0] <= previousRange[1] + 1) previousRange[1] = currentRange[1];
		else mergedRanges.push(currentRange);
	}
	return mergedRanges;
}
function buildMediaQuery(size) {
	const [min, max] = size;
	const query = [];
	if (min != null) query.push(`(min-width: ${min}px)`);
	if (max != null && max !== Infinity) query.push(`(max-width: ${max - 1}px)`);
	return query.join(" and ");
}
function computeBreakpointsKey(breakpoints) {
	return [...breakpoints].sort().join("_");
}
function computeBreakpointsMediaQuery(breakpoints) {
	return mergeConsecutiveRanges(breakpoints.map((breakpoint) => {
		const index = BREAKPOINTS.indexOf(breakpoint);
		return [BREAKPOINT_VALUES[index], BREAKPOINT_VALUES[index + 1] || Infinity];
	})).map((size) => buildMediaQuery(size)).filter((query) => query !== "").join(", ");
}
var CONDITION_TYPE_OPTIONS, WEEKDAYS_SHORT, WEEKDAY_LABELS, BREAKPOINT_VALUES, BREAKPOINTS, HIDDEN_CONDITION_ATTRIBUTES, ENTITY_SCHEMA, STATE_VALUE_SCHEMA, NUMERIC_STATE_THRESHOLD_SCHEMA, TIME_CONDITION_SCHEMA, SCREEN_CONDITION_SCHEMA, VIEW_COLUMNS_CONDITION_SCHEMA, MEDIA_QUERY_MAP, MEDIA_QUERY_REVERSE_MAP, FlexSliderCardConditionEditor;
var init_flex_slider_card_condition_editor = __esmMin((() => {
	init_lit();
	init_decorators();
	init_flex_slider_card_validate_condition();
	init_decorate();
	CONDITION_TYPE_OPTIONS = [
		{
			value: "state",
			label: "State",
			icon: "mdi:state-machine"
		},
		{
			value: "numeric_state",
			label: "Numeric state",
			icon: "mdi:numeric"
		},
		{
			value: "time",
			label: "Time",
			icon: "mdi:calendar-clock"
		},
		{
			value: "screen",
			label: "Screen",
			icon: "mdi:responsive"
		},
		{
			value: "view_columns",
			label: "View columns",
			icon: "mdi:view-column-outline"
		},
		{
			value: "and",
			label: "AND",
			icon: "mdi:ampersand"
		},
		{
			value: "or",
			label: "OR",
			icon: "mdi:gate-or"
		},
		{
			value: "not",
			label: "Not",
			icon: "mdi:not-equal-variant"
		}
	];
	WEEKDAYS_SHORT = [
		"mon",
		"tue",
		"wed",
		"thu",
		"fri",
		"sat",
		"sun"
	];
	WEEKDAY_LABELS = {
		mon: "Monday",
		tue: "Tuesday",
		wed: "Wednesday",
		thu: "Thursday",
		fri: "Friday",
		sat: "Saturday",
		sun: "Sunday"
	};
	BREAKPOINT_VALUES = [
		0,
		768,
		1024,
		1280,
		Infinity
	];
	BREAKPOINTS = [
		"mobile",
		"tablet",
		"desktop",
		"wide"
	];
	HIDDEN_CONDITION_ATTRIBUTES = new Set(["editable", "friendly_name"]);
	ENTITY_SCHEMA = {
		name: "entity",
		selector: { entity: {} }
	};
	STATE_VALUE_SCHEMA = {
		type: "grid",
		name: "",
		schema: [{
			name: "invert",
			required: true,
			selector: { select: {
				mode: "dropdown",
				options: [{
					value: "false",
					label: "State is"
				}, {
					value: "true",
					label: "State is not"
				}]
			} }
		}, {
			name: "state",
			selector: { state: {} },
			context: {
				filter_entity: "entity",
				filter_attribute: "attribute"
			}
		}]
	};
	NUMERIC_STATE_THRESHOLD_SCHEMA = {
		type: "grid",
		name: "",
		schema: [{
			name: "above",
			selector: { number: {
				step: "any",
				mode: "box"
			} }
		}, {
			name: "below",
			selector: { number: {
				step: "any",
				mode: "box"
			} }
		}]
	};
	TIME_CONDITION_SCHEMA = [
		{
			name: "after",
			selector: { time: { no_second: true } }
		},
		{
			name: "before",
			selector: { time: { no_second: true } }
		},
		{
			name: "weekdays",
			selector: { select: {
				mode: "list",
				multiple: true,
				options: WEEKDAYS_SHORT.map((day) => ({
					value: day,
					label: WEEKDAY_LABELS[day]
				}))
			} }
		}
	];
	SCREEN_CONDITION_SCHEMA = [{
		name: "breakpoints",
		selector: { select: {
			mode: "list",
			multiple: true,
			options: BREAKPOINTS.map((breakpoint) => {
				const value = BREAKPOINT_VALUES[BREAKPOINTS.indexOf(breakpoint)];
				return {
					value: breakpoint,
					label: value === 0 ? "Mobile" : `${capitalize(breakpoint)} (${value}px and up)`
				};
			})
		} }
	}];
	VIEW_COLUMNS_CONDITION_SCHEMA = [{
		type: "grid",
		name: "",
		schema: [{
			name: "min",
			selector: { number: {
				mode: "box",
				min: 1
			} }
		}, {
			name: "max",
			selector: { number: {
				mode: "box",
				min: 1
			} }
		}]
	}];
	MEDIA_QUERY_MAP = new Map(getBreakpointCombinations().map((breakpoints) => [computeBreakpointsKey(breakpoints), computeBreakpointsMediaQuery(breakpoints)]));
	MEDIA_QUERY_REVERSE_MAP = new Map([...MEDIA_QUERY_MAP.entries()].map(([key, value]) => [value, key.split("_").filter(Boolean)]));
	FlexSliderCardConditionEditor = class FlexSliderCardConditionEditor extends i {
		constructor(..._args) {
			super(..._args);
			this.conditions = [];
			this._testingResults = {};
			this._testingTimeouts = /* @__PURE__ */ new Map();
			this._computeStateLabel = (schema) => {
				switch (schema.name) {
					case "entity": return "Entity";
					case "attribute": return "Attribute";
					case "invert": return "";
					case "state": return "State";
					default: return "";
				}
			};
			this._computeNumericStateLabel = (schema) => {
				switch (schema.name) {
					case "entity": return "Entity";
					case "attribute": return "Attribute";
					case "above": return "Above";
					case "below": return "Below";
					default: return "";
				}
			};
			this._computeTimeLabel = (schema) => {
				switch (schema.name) {
					case "after": return "After";
					case "before": return "Before";
					case "weekdays": return "Weekdays";
					default: return "";
				}
			};
			this._computeScreenLabel = (schema) => {
				return schema.name === "breakpoints" ? "Breakpoints" : "";
			};
			this._computeViewColumnsLabel = (schema) => {
				switch (schema.name) {
					case "min": return "Minimum columns";
					case "max": return "Maximum columns";
					default: return "";
				}
			};
		}
		static {
			this.styles = i$3`
    :host {
      display: block;
    }

    .conditions-editor {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-description {
      margin: 0;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .conditions-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .condition-panel {
      position: relative;
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--card-background-color, var(--ha-card-background, white));
    }

    .condition-panel.nested {
      border-radius: 8px;
    }

    .testing {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
      overflow: hidden;
      max-height: 100px;
      border-top-right-radius: calc(var(--ha-card-border-radius, 12px) - 1px);
      border-top-left-radius: calc(var(--ha-card-border-radius, 12px) - 1px);
      padding: 4px 8px;
      background: var(--divider-color);
      color: var(--text-primary-color);
      font-size: var(--ha-font-size-m, 14px);
      font-weight: var(--ha-font-weight-bold, 700);
      line-height: 20px;
      text-align: center;
      text-transform: uppercase;
      pointer-events: none;
    }

    .testing.pass {
      background: var(--success-color);
    }

    .testing.error {
      background: var(--accent-color);
    }

    .condition-summary {
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr) auto;
      align-items: center;
      min-height: 48px;
      padding: 0 4px 0 8px;
      color: var(--primary-text-color);
      cursor: pointer;
      list-style: none;
    }

    .condition-summary::-webkit-details-marker {
      display: none;
    }

    .condition-chevron {
      color: var(--secondary-text-color);
      transition: transform 120ms ease;
    }

    .condition-panel[open] > .condition-summary .condition-chevron {
      transform: rotate(90deg);
    }

    .condition-leading-icon {
      display: none;
      color: var(--secondary-text-color);
      opacity: 0.9;
    }

    .condition-title {
      min-width: 0;
      margin: 0;
      font: inherit;
      font-weight: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .condition-content {
      padding: 12px;
    }

    .condition-fields {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
    }

    .condition-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .condition-field label {
      color: var(--secondary-text-color);
      font-size: 12px;
      font-weight: 500;
    }

    .condition-field input,
    .condition-field select {
      box-sizing: border-box;
      width: 100%;
      min-height: 40px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      padding: 8px;
      background: var(--card-background-color, var(--ha-card-background, white));
      color: var(--primary-text-color);
      font: inherit;
    }

    .weekdays {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      min-height: 36px;
    }

    .weekday {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: var(--primary-text-color);
      font-size: 12px;
    }

    .nested-conditions {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .condition-actions {
      position: relative;
      display: inline-flex;
      justify-content: flex-end;
    }

    .icon-action-button {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 50%;
      padding: 0;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
    }

    .icon-action-button:hover {
      background: var(--secondary-background-color);
    }

    .action-menu {
      position: absolute;
      top: 40px;
      right: 4px;
      z-index: 10;
      min-width: 160px;
      padding: 0;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background: var(--card-background-color, var(--ha-card-background, white));
      box-shadow: var(--ha-card-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.16));
      overflow: hidden;
    }

    .action-menu button,
    .add-menu-item {
      display: grid;
      grid-template-columns: 24px minmax(0, 1fr);
      align-items: center;
      gap: 12px;
      width: 100%;
      border: none;
      padding: 12px 16px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
    }

    .action-menu button:hover,
    .add-menu-item:hover {
      background: var(--secondary-background-color);
    }

    .action-menu button.danger {
      color: var(--error-color);
    }

    .add-menu {
      position: relative;
      display: inline-block;
      width: fit-content;
    }

    .add-menu summary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 36px;
      box-sizing: border-box;
      border: none;
      border-radius: 6px;
      padding: 0 16px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      font: inherit;
      font-weight: 500;
      cursor: pointer;
      list-style: none;
    }

    .add-menu summary::-webkit-details-marker {
      display: none;
    }

    .add-menu-panel {
      position: absolute;
      left: 0;
      bottom: calc(100% + 4px);
      z-index: 20;
      min-width: 220px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background: var(--card-background-color, var(--ha-card-background, white));
      box-shadow: var(--ha-card-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.16));
      overflow: hidden;
    }

    .nested-conditions .add-menu-panel {
      top: calc(100% + 4px);
      bottom: auto;
    }

    @media (min-width: 870px) {
      .condition-summary {
        grid-template-columns: 32px 32px minmax(0, 1fr) auto;
      }

      .condition-leading-icon {
        display: inline-flex;
      }
    }
  `;
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			this._clearTestingResults();
		}
		render() {
			if (!this.hass) return b``;
			return b`
      <div class="conditions-editor">
        <div class="conditions-list">
          ${(this.conditions ?? []).map((condition, index) => this._renderCondition(condition, [index], false))}
        </div>
        ${this._renderAddConditionMenu([], "Add condition")}
      </div>
    `;
		}
		_renderCondition(condition, path, nested) {
			const option = this._getConditionTypeOption(condition.condition);
			const pathKey = this._getPathKey(path);
			const isActionMenuOpen = this._openActionMenuPath === pathKey;
			const isOpen = this._openConditionPaths === void 0 ? !nested && (this.conditions?.length ?? 0) === 1 : this._openConditionPaths.includes(pathKey);
			const testingResult = this._testingResults[pathKey];
			return b`
      <details
        class="condition-panel ${nested ? "nested" : ""}"
        ?open=${isOpen}
        @toggle=${(ev) => this._handleConditionToggle(ev, path)}
      >
        ${testingResult === void 0 ? A : b`
              <div class="testing ${testingResult ? "pass" : "error"}">
                ${testingResult ? "Condition passes" : "Condition does not pass"}
              </div>
            `}
        <summary class="condition-summary">
          <ha-icon class="condition-chevron" icon="mdi:chevron-right"></ha-icon>
          <ha-icon class="condition-leading-icon" .icon=${option.icon}></ha-icon>
          <h3 class="condition-title">${option.label}</h3>
          <span class="condition-actions" @click=${this._stopPropagation}>
            <button
              class="icon-action-button"
              type="button"
              aria-label="Condition actions"
              @click=${(ev) => this._toggleActionMenu(ev, path)}
            >
              <ha-icon icon="mdi:dots-vertical"></ha-icon>
            </button>
            ${isActionMenuOpen ? b`
                  <div class="action-menu">
                    <button type="button" @click=${() => this._testCondition(path)}>
                      <ha-icon icon="mdi:flask"></ha-icon>
                      <span>Test</span>
                    </button>
                    <button type="button" @click=${() => this._duplicateCondition(path)}>
                      <ha-icon icon="mdi:content-duplicate"></ha-icon>
                      <span>Duplicate</span>
                    </button>
                    <button type="button" @click=${() => this._copyCondition(path)}>
                      <ha-icon icon="mdi:content-copy"></ha-icon>
                      <span>Copy</span>
                    </button>
                    <button type="button" @click=${() => this._cutCondition(path)}>
                      <ha-icon icon="mdi:content-cut"></ha-icon>
                      <span>Cut</span>
                    </button>
                    <button class="danger" type="button" @click=${() => this._removeCondition(path)}>
                      <ha-icon icon="mdi:delete"></ha-icon>
                      <span>Delete</span>
                    </button>
                  </div>
                ` : A}
          </span>
        </summary>
        <div class="condition-content">
          ${this._renderConditionFields(condition, path)}
        </div>
      </details>
    `;
		}
		_renderConditionFields(condition, path) {
			switch (condition.condition) {
				case "numeric_state": return this._renderNumericStateCondition(condition, path);
				case "time": return this._renderTimeCondition(condition, path);
				case "screen": return this._renderScreenCondition(condition, path);
				case "view_columns": return this._renderViewColumnsCondition(condition, path);
				case "and":
				case "or":
				case "not": return this._renderLogicalCondition(condition, path);
				default: return this._renderStateCondition(condition, path);
			}
		}
		_renderAddConditionMenu(parentPath, label) {
			return b`
      <details class="add-menu">
        <summary>
          <ha-icon icon="mdi:plus"></ha-icon>
          <span>${label}</span>
        </summary>
        <div class="add-menu-panel">
          ${this._clipboard ? b`
                <button
                  class="add-menu-item"
                  type="button"
                  @click=${(ev) => this._pasteConditionFromMenu(ev, parentPath)}
                >
                  <ha-icon icon="mdi:content-paste"></ha-icon>
                  <span>Paste</span>
                </button>
              ` : A}
          ${CONDITION_TYPE_OPTIONS.map((option) => b`
            <button
              class="add-menu-item"
              type="button"
              @click=${(ev) => this._addConditionFromMenu(ev, parentPath, option.value)}
            >
              <ha-icon .icon=${option.icon}></ha-icon>
              <span>${option.label}</span>
            </button>
          `)}
        </div>
      </details>
    `;
		}
		_renderStateCondition(condition, path) {
			const mode = condition.state_not != null ? "state_not" : "state";
			const value = mode === "state_not" ? condition.state_not : condition.state;
			const data = {
				condition: "state",
				entity: condition.entity,
				attribute: condition.attribute,
				invert: mode === "state_not" ? "true" : "false",
				state: value
			};
			return b`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${getStateConditionSchema(condition.entity, this.hass)}
        .computeLabel=${this._computeStateLabel}
        @value-changed=${(ev) => this._handleStateConditionChanged(ev, path)}
      ></ha-form>
    `;
		}
		_renderNumericStateCondition(condition, path) {
			return b`
      <ha-form
        .hass=${this.hass}
        .data=${condition}
        .schema=${getNumericStateConditionSchema(condition.entity, this.hass)}
        .computeLabel=${this._computeNumericStateLabel}
        @value-changed=${(ev) => this._handleNumericStateConditionChanged(ev, path)}
      ></ha-form>
    `;
		}
		_renderTimeCondition(condition, path) {
			return b`
      <ha-form
        .hass=${this.hass}
        .data=${condition}
        .schema=${TIME_CONDITION_SCHEMA}
        .computeLabel=${this._computeTimeLabel}
        @value-changed=${(ev) => this._handleTimeConditionChanged(ev, path)}
      ></ha-form>
    `;
		}
		_renderScreenCondition(condition, path) {
			const data = { breakpoints: this._getBreakpointsFromMediaQuery(condition.media_query) };
			return b`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCREEN_CONDITION_SCHEMA}
        .computeLabel=${this._computeScreenLabel}
        @value-changed=${(ev) => this._handleScreenConditionChanged(ev, path)}
      ></ha-form>
    `;
		}
		_renderViewColumnsCondition(condition, path) {
			return b`
      <ha-form
        .hass=${this.hass}
        .data=${condition}
        .schema=${VIEW_COLUMNS_CONDITION_SCHEMA}
        .computeLabel=${this._computeViewColumnsLabel}
        @value-changed=${(ev) => this._handleViewColumnsConditionChanged(ev, path)}
      ></ha-form>
    `;
		}
		_renderLogicalCondition(condition, path) {
			const conditions = condition.conditions ?? [];
			return b`
      <div class="nested-conditions">
        ${conditions.length === 0 ? b`<p class="section-description">No nested condition configured.</p>` : conditions.map((nestedCondition, index) => this._renderCondition(nestedCondition, [...path, index], true))}
        ${this._renderAddConditionMenu(path, "Add nested condition")}
      </div>
    `;
		}
		_handleStateConditionChanged(ev, path) {
			ev.stopPropagation();
			const data = ev.detail.value;
			const stateValue = data.state;
			const nextCondition = {
				condition: "state",
				entity: this._emptyToUndefined(data.entity),
				attribute: this._emptyToUndefined(data.attribute),
				state: data.invert === "false" ? stateValue ?? "" : void 0,
				state_not: data.invert === "true" ? stateValue ?? "" : void 0
			};
			this._replaceCondition(path, this._cleanStateCondition(nextCondition));
		}
		_handleNumericStateConditionChanged(ev, path) {
			ev.stopPropagation();
			const data = ev.detail.value;
			this._replaceCondition(path, this._cleanNumericStateCondition({
				...data,
				condition: "numeric_state"
			}));
		}
		_handleTimeConditionChanged(ev, path) {
			ev.stopPropagation();
			const data = ev.detail.value;
			this._replaceCondition(path, this._cleanTimeCondition({
				...data,
				condition: "time"
			}));
		}
		_handleScreenConditionChanged(ev, path) {
			ev.stopPropagation();
			const data = ev.detail.value;
			this._replaceCondition(path, {
				condition: "screen",
				media_query: this._getMediaQueryFromBreakpoints(data.breakpoints ?? [])
			});
		}
		_handleViewColumnsConditionChanged(ev, path) {
			ev.stopPropagation();
			const data = ev.detail.value;
			this._replaceCondition(path, this._cleanViewColumnsCondition({
				...data,
				condition: "view_columns"
			}));
		}
		_testCondition(path) {
			if (!this.hass) return;
			const conditions = this._cloneConditions();
			const condition = this._getConditionAtPath(conditions, path);
			const pathKey = this._getPathKey(path);
			const testingResult = validateConditionalConfig([condition]) ? checkConditionsMet([condition], this.hass, {}) : false;
			const existingTimeout = this._testingTimeouts.get(pathKey);
			if (existingTimeout !== void 0) window.clearTimeout(existingTimeout);
			this._testingResults = {
				...this._testingResults,
				[pathKey]: testingResult
			};
			this._openActionMenuPath = void 0;
			const timeout = window.setTimeout(() => {
				const { [pathKey]: _testingResult, ...nextTestingResults } = this._testingResults;
				this._testingResults = nextTestingResults;
				this._testingTimeouts.delete(pathKey);
			}, 2500);
			this._testingTimeouts.set(pathKey, timeout);
		}
		_addConditionFromMenu(ev, parentPath, type) {
			const menu = ev.currentTarget.closest("details");
			if (menu) menu.open = false;
			this._addCondition(parentPath, type);
		}
		_pasteConditionFromMenu(ev, parentPath) {
			const menu = ev.currentTarget.closest("details");
			if (menu) menu.open = false;
			if (!this._clipboard) return;
			this._insertCondition(parentPath, structuredClone(this._clipboard));
		}
		_addCondition(parentPath, type) {
			this._insertCondition(parentPath, this._createDefaultCondition(type));
		}
		_insertCondition(parentPath, condition) {
			const conditions = this._cloneConditions();
			let newConditionPath;
			if (parentPath.length === 0) {
				conditions.push(condition);
				newConditionPath = [conditions.length - 1];
			} else {
				const parentCondition = this._getConditionAtPath(conditions, parentPath);
				if (!this._isLogicalCondition(parentCondition)) return;
				parentCondition.conditions = [...parentCondition.conditions ?? [], condition];
				newConditionPath = [...parentPath, parentCondition.conditions.length - 1];
			}
			this._openConditionPaths = this._getPathKeysWithAncestors(newConditionPath);
			this._openActionMenuPath = void 0;
			this._emitConditionsChanged(conditions);
		}
		_duplicateCondition(path) {
			const conditions = this._cloneConditions();
			const condition = structuredClone(this._getConditionAtPath(conditions, path));
			this._getParentConditionsAtPath(conditions, path).splice(path[path.length - 1] + 1, 0, condition);
			this._openActionMenuPath = void 0;
			this._emitConditionsChanged(conditions);
		}
		_copyCondition(path) {
			const conditions = this._cloneConditions();
			this._clipboard = structuredClone(this._getConditionAtPath(conditions, path));
			this._openActionMenuPath = void 0;
		}
		_cutCondition(path) {
			const conditions = this._cloneConditions();
			this._clipboard = structuredClone(this._getConditionAtPath(conditions, path));
			this._getParentConditionsAtPath(conditions, path).splice(path[path.length - 1], 1);
			this._openActionMenuPath = void 0;
			this._openConditionPaths = void 0;
			this._emitConditionsChanged(conditions);
		}
		_removeCondition(path) {
			const conditions = this._cloneConditions();
			this._getParentConditionsAtPath(conditions, path).splice(path[path.length - 1], 1);
			this._openActionMenuPath = void 0;
			this._emitConditionsChanged(conditions);
		}
		_changeConditionType(path, type) {
			const conditions = this._cloneConditions();
			const parentConditions = this._getParentConditionsAtPath(conditions, path);
			parentConditions[path[path.length - 1]] = this._createDefaultCondition(type);
			this._emitConditionsChanged(conditions);
		}
		_replaceCondition(path, nextCondition) {
			const conditions = this._cloneConditions();
			const parentConditions = this._getParentConditionsAtPath(conditions, path);
			parentConditions[path[path.length - 1]] = nextCondition;
			this._emitConditionsChanged(conditions);
		}
		_toggleActionMenu(ev, path) {
			ev.stopPropagation();
			const pathKey = this._getPathKey(path);
			this._openActionMenuPath = this._openActionMenuPath === pathKey ? void 0 : pathKey;
		}
		_handleConditionToggle(ev, path) {
			if (ev.target !== ev.currentTarget) return;
			const details = ev.currentTarget;
			const pathKey = this._getPathKey(path);
			if (details.open) {
				this._openConditionPaths = this._getPathKeysWithAncestors(path);
				this._openActionMenuPath = void 0;
			} else if (this._openConditionPaths?.includes(pathKey)) this._openConditionPaths = this._openConditionPaths.filter((openPathKey) => openPathKey !== pathKey && !openPathKey.startsWith(`${pathKey}.`));
		}
		_stopPropagation(ev) {
			ev.stopPropagation();
		}
		_cloneConditions() {
			return structuredClone(this.conditions ?? []);
		}
		_emitConditionsChanged(conditions) {
			this._clearTestingResults();
			this.dispatchEvent(new CustomEvent("conditions-changed", {
				bubbles: true,
				composed: true,
				detail: { conditions }
			}));
		}
		_clearTestingResults() {
			for (const timeout of this._testingTimeouts.values()) window.clearTimeout(timeout);
			this._testingTimeouts.clear();
			this._testingResults = {};
		}
		_getPathKey(path) {
			return path.join(".");
		}
		_getPathKeysWithAncestors(path) {
			return path.map((_, index) => this._getPathKey(path.slice(0, index + 1)));
		}
		_getConditionAtPath(conditions, path) {
			let currentConditions = conditions;
			let currentCondition;
			for (const index of path) {
				currentCondition = currentConditions[index];
				if (!currentCondition) throw new Error("Condition path is invalid");
				currentConditions = this._isLogicalCondition(currentCondition) ? currentCondition.conditions ?? [] : [];
			}
			if (!currentCondition) throw new Error("Condition path is empty");
			return currentCondition;
		}
		_getParentConditionsAtPath(conditions, path) {
			if (path.length === 1) return conditions;
			const parentCondition = this._getConditionAtPath(conditions, path.slice(0, -1));
			if (!this._isLogicalCondition(parentCondition)) throw new Error("Condition parent is not logical");
			parentCondition.conditions ??= [];
			return parentCondition.conditions;
		}
		_createDefaultCondition(type) {
			switch (type) {
				case "numeric_state": return {
					condition: "numeric_state",
					entity: "",
					above: 0
				};
				case "time": return {
					condition: "time",
					after: "00:00"
				};
				case "screen": return {
					condition: "screen",
					media_query: "(min-width: 768px)"
				};
				case "view_columns": return {
					condition: "view_columns",
					min: 1
				};
				case "and":
				case "or":
				case "not": return {
					condition: type,
					conditions: []
				};
				default: return {
					condition: "state",
					entity: "",
					state: ""
				};
			}
		}
		_isLogicalCondition(condition) {
			return condition.condition === "and" || condition.condition === "or" || condition.condition === "not";
		}
		_getConditionTypeOption(type) {
			return CONDITION_TYPE_OPTIONS.find((option) => option.value === type) ?? CONDITION_TYPE_OPTIONS[0];
		}
		_emptyToUndefined(value) {
			return value === "" ? void 0 : value;
		}
		_cleanStateCondition(condition) {
			const nextCondition = { ...condition };
			if (!nextCondition.entity) delete nextCondition.entity;
			if (!nextCondition.attribute) delete nextCondition.attribute;
			if (nextCondition.state === void 0) delete nextCondition.state;
			if (nextCondition.state_not === void 0) delete nextCondition.state_not;
			return nextCondition;
		}
		_cleanNumericStateCondition(condition) {
			const nextCondition = {
				...condition,
				entity: this._emptyToUndefined(condition.entity),
				attribute: this._emptyToUndefined(condition.attribute),
				above: this._emptyNumberToUndefined(condition.above),
				below: this._emptyNumberToUndefined(condition.below)
			};
			if (!nextCondition.entity) delete nextCondition.entity;
			if (!nextCondition.attribute) delete nextCondition.attribute;
			if (nextCondition.above === void 0) delete nextCondition.above;
			if (nextCondition.below === void 0) delete nextCondition.below;
			return nextCondition;
		}
		_cleanTimeCondition(condition) {
			const nextCondition = {
				...condition,
				after: this._emptyToUndefined(condition.after),
				before: this._emptyToUndefined(condition.before),
				weekdays: condition.weekdays?.length ? condition.weekdays : void 0
			};
			if (nextCondition.after === void 0) delete nextCondition.after;
			if (nextCondition.before === void 0) delete nextCondition.before;
			if (nextCondition.weekdays === void 0) delete nextCondition.weekdays;
			return nextCondition;
		}
		_cleanViewColumnsCondition(condition) {
			const nextCondition = {
				...condition,
				min: this._emptyNumberToUndefined(condition.min),
				max: this._emptyNumberToUndefined(condition.max)
			};
			if (nextCondition.min === void 0) delete nextCondition.min;
			if (nextCondition.max === void 0) delete nextCondition.max;
			return nextCondition;
		}
		_emptyNumberToUndefined(value) {
			return value === "" ? void 0 : value;
		}
		_getBreakpointsFromMediaQuery(mediaQuery) {
			return mediaQuery ? MEDIA_QUERY_REVERSE_MAP.get(mediaQuery) ?? [] : [];
		}
		_getMediaQueryFromBreakpoints(breakpoints) {
			return MEDIA_QUERY_MAP.get(computeBreakpointsKey(breakpoints)) ?? "";
		}
	};
	__decorate([n({ attribute: false })], FlexSliderCardConditionEditor.prototype, "conditions", void 0);
	__decorate([n({ attribute: false })], FlexSliderCardConditionEditor.prototype, "hass", void 0);
	__decorate([r()], FlexSliderCardConditionEditor.prototype, "_openActionMenuPath", void 0);
	__decorate([r()], FlexSliderCardConditionEditor.prototype, "_openConditionPaths", void 0);
	__decorate([r()], FlexSliderCardConditionEditor.prototype, "_clipboard", void 0);
	__decorate([r()], FlexSliderCardConditionEditor.prototype, "_testingResults", void 0);
	FlexSliderCardConditionEditor = __decorate([t("flex-slider-card-condition-editor")], FlexSliderCardConditionEditor);
}));
//#endregion
//#region src/config/flex-slider-card-config-editor.ts
var flex_slider_card_config_editor_exports = /* @__PURE__ */ __exportAll({ FlexSliderCardConfigEditor: () => FlexSliderCardConfigEditor });
var FlexSliderCardConfigEditor;
var init_flex_slider_card_config_editor = __esmMin((() => {
	init_index_m();
	init_lit();
	init_decorators();
	init_config_legacy_helpers();
	init_flex_slider_card_config_form();
	init_flex_slider_card_config_labels();
	init_entity_management();
	init_flex_slider_card_condition_editor();
	init_decorate();
	FlexSliderCardConfigEditor = class FlexSliderCardConfigEditor extends i {
		constructor(..._args) {
			super(..._args);
			this._activeTab = "config";
			this._computeLabel = (schema) => {
				if (!("name" in schema)) return void 0;
				return flexSliderCardConfigLabels[schema.name];
			};
			this._computeHandleLabel = (index) => (schema) => {
				if (!("name" in schema)) return void 0;
				if (schema.name === "entity") return `Entity ${index + 1}`;
				if (schema.name === "text") return `Text ${index + 1}`;
				return this._computeLabel(schema);
			};
			this._handleConfigChanged = (ev) => {
				ev.stopPropagation();
				if (!this._config) return;
				const nextConfig = structuredClone(ev.detail.value);
				if (nextConfig.orientation === "vertical") {
					nextConfig.valuesbaractive = false;
					if (nextConfig.reference) {
						nextConfig.reference.valuesbar = false;
						nextConfig.reference.valuesbartextlarge = false;
					}
				} else if (nextConfig.reference && nextConfig.reference.valuesbar !== true) nextConfig.reference.valuesbartextlarge = false;
				this._applyConfig(nextConfig);
			};
			this._handleAdaptiveStateChanged = (ev) => {
				ev.stopPropagation();
				if (!this._config) return;
				const nextConfig = this._cloneConfig();
				const nextAdaptiveState = ev.detail.value;
				nextConfig.adaptivestate = {
					...nextConfig.adaptivestate ?? {},
					...nextAdaptiveState ?? {},
					conditions: nextConfig.adaptivestate?.conditions ?? []
				};
				this._applyConfig(nextConfig);
			};
			this._handleAdaptiveStateConditionsChanged = (ev) => {
				ev.stopPropagation();
				if (!this._config) return;
				const nextConfig = this._cloneConfig();
				nextConfig.adaptivestate = {
					...nextConfig.adaptivestate ?? {},
					conditions: ev.detail.conditions
				};
				this._applyConfig(nextConfig);
			};
			this._addHandle = () => {
				if (!this._config) return;
				const nextConfig = this._cloneConfig();
				nextConfig.entities = [...nextConfig.entities ?? [], this._createEmptyHandle()];
				this._applyConfig(nextConfig);
			};
			this._removeLastHandle = () => {
				const currentEntities = this._config?.entities ?? [];
				if (!this._config || currentEntities.length === 1) return;
				const nextConfig = this._cloneConfig();
				nextConfig.entities = (nextConfig.entities ?? []).slice(0, -1);
				this._applyConfig(nextConfig);
			};
		}
		static {
			this.styles = i$3`
    :host {
      display: block;
    }

    .editor {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .tabs {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 0 12px;
    }

    .tab {
      border: 1px solid var(--divider-color);
      border-bottom: none;
      border-radius: 14px 14px 0 0;
      padding: 10px 16px 9px;
      background: var(--secondary-background-color);
      color: var(--secondary-text-color);
      font: inherit;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease, transform 120ms ease;
      margin-bottom: -1px;
      position: relative;
      z-index: 0;
    }

    .tab[selected] {
      background: var(--card-background-color, var(--ha-card-background, white));
      color: var(--primary-text-color);
      border-color: var(--primary-color);
      z-index: 2;
    }

    .panel {
      border: 1px solid var(--divider-color);
      border-radius: 14px;
      padding: 16px;
      background: var(--card-background-color, var(--ha-card-background, white));
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .section-description {
      margin: 0;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .section-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .section-tools {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .handle-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .custom-expandable {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      margin-top: 13px;
      overflow: visible;
      background: var(--card-background-color, var(--ha-card-background, white));
    }

    .custom-expandable summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 12px;
      cursor: pointer;
      color: var(--primary-text-color);
      font-weight: 500;
      list-style: none;
    }

    .custom-expandable summary::-webkit-details-marker {
      display: none;
    }

    .custom-expandable-title {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }

    .custom-expandable-arrow {
      color: var(--secondary-text-color);
      margin-right: -4px;
      transition: transform 120ms ease;
    }

    .custom-expandable[open] .custom-expandable-arrow {
      transform: rotate(180deg);
    }

    .custom-expandable-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0 12px 12px;
    }

    .handle-card {
      padding: 0;
    }

    .action-button {
      border: 1px solid var(--divider-color);
      border-radius: 999px;
      padding: 8px 14px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      cursor: pointer;
    }

    .icon-button {
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      font-size: 18px;
      line-height: 1;
    }

    .action-button[disabled] {
      opacity: 0.5;
      cursor: default;
    }

    .error {
      color: var(--error-color);
      font-size: 14px;
      line-height: 1.5;
    }
  `;
		}
		render() {
			if (!this.hass || !this._config) return A;
			if (this._error) return b`
        <div class="panel">
          <div class="error">${this._error}</div>
        </div>
      `;
			const entities = this._config.entities ?? [];
			const selectedEntityType = this._getSelectedEntityType(entities);
			const isNumber = selectedEntityType !== FlexSliderCardEntityType.TIME;
			const isVertical = this._config.orientation === "vertical";
			const isCompact = this._config.format === "compact";
			const schema = computeSchema(this._config.valuesbaractive === true, this._config.bubblesactive === true, this._config.ticksactive === true, this._config.referenceactive === true, this._config.adaptivestateactive === true, this._config.reference?.bubble === true, this._config.reference?.valuesbar === true, this._config.valuesbar?.digits ?? "", this._config.bubbles?.digits ?? "", this._config.ticks?.digits ?? "", isNumber, isVertical, isCompact, selectedEntityType);
			return b`
      <div class="editor">
        <div class="tabs" role="tablist" aria-label="Editor sections">
          <button
            class="tab"
            type="button"
            role="tab"
            ?selected=${this._activeTab === "config"}
            aria-selected=${String(this._activeTab === "config")}
            @click=${() => this._selectTab("config")}
          >
            Config
          </button>
          <button
            class="tab"
            type="button"
            role="tab"
            ?selected=${this._activeTab === "entities"}
            aria-selected=${String(this._activeTab === "entities")}
            @click=${() => this._selectTab("entities")}
          >
            Entities (${entities.length})
          </button>
        </div>

        <div class="panel">
          ${this._activeTab === "config" ? b`
                <section class="section">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._config}
                    .schema=${schema}
                    .computeLabel=${this._computeLabel}
                    @value-changed=${this._handleConfigChanged}
                  ></ha-form>
                  ${this._config.adaptivestateactive === true ? this._renderAdaptiveStateEditor() : A}
                </section>
              ` : b`
                <section class="section">
                  <div class="section-header">
                    <p class="section-description">
                      Configure one or more entities. Every handle must use a compatible domain.
                    </p>
                    <div class="section-tools">
                      ${entities.length > 1 ? b`
                            <ha-form
                              .hass=${this.hass}
                              .data=${this._config}
                              .schema=${handlesBehaviorSchema}
                              .computeLabel=${this._computeLabel}
                              @value-changed=${this._handleConfigChanged}
                            ></ha-form>
                          ` : A}
                      <div class="section-actions">
                        <button
                          class="action-button icon-button"
                          type="button"
                          aria-label="Remove last entity"
                          ?disabled=${entities.length === 1}
                          @click=${this._removeLastHandle}
                        >
                          -
                        </button>
                        <button
                          class="action-button icon-button"
                          type="button"
                          aria-label="Add entity"
                          @click=${this._addHandle}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="handle-list">
                    ${entities.map((handleConfig, index) => b`
                      <div class="handle-card">
                        <ha-form
                          .hass=${this.hass}
                          .data=${handleConfig}
                          .schema=${this._getHandleSchema(index)}
                          .computeLabel=${this._computeHandleLabel(index)}
                          @value-changed=${(ev) => this._handleHandleChanged(ev, index)}
                        ></ha-form>
                      </div>
                    `)}
                  </div>

                  <ha-form
                    .hass=${this.hass}
                    .data=${this._config}
                    .schema=${connectEndSchema}
                    .computeLabel=${this._computeLabel}
                    @value-changed=${this._handleConfigChanged}
                  ></ha-form>
                </section>
              `}
        </div>
      </div>
    `;
		}
		setConfig(config) {
			const hasAnyLegacyEntityConfig = this._hasLegacyEntityConfig(config);
			const legacyEntityConflictError = this._getLegacyEntityConflictError(config);
			if (legacyEntityConflictError) {
				this._error = legacyEntityConflictError;
				this._config = config;
				return;
			}
			this._error = void 0;
			const normalizedConfig = this._normalizeConfig(config);
			if (hasAnyLegacyEntityConfig) {
				this._config = normalizedConfig;
				fireEvent(this, "config-changed", { config: normalizedConfig });
				return;
			}
			this._config = normalizedConfig;
		}
		_selectTab(tab) {
			this._activeTab = tab;
		}
		_renderAdaptiveStateEditor() {
			return b`
      <details class="custom-expandable">
        <summary>
          <span class="custom-expandable-title">
            <ha-icon icon="mdi:state-machine"></ha-icon>
            <span>Adaptative State</span>
          </span>
          <ha-icon class="custom-expandable-arrow" icon="mdi:chevron-down"></ha-icon>
        </summary>
        <div class="custom-expandable-content">
          <ha-form
            .hass=${this.hass}
            .data=${this._config.adaptivestate ?? {}}
            .schema=${adaptiveStateOptionsSchema}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._handleAdaptiveStateChanged}
          ></ha-form>
          <flex-slider-card-condition-editor
            .hass=${this.hass}
            .conditions=${this._config.adaptivestate?.conditions ?? []}
            @conditions-changed=${this._handleAdaptiveStateConditionsChanged}
          ></flex-slider-card-condition-editor>
        </div>
      </details>
    `;
		}
		_handleHandleChanged(ev, index) {
			ev.stopPropagation();
			if (!this._config) return;
			const nextConfig = this._cloneConfig();
			const entities = nextConfig.entities ?? [];
			entities[index] = this._normalizeHandle(ev.detail.value);
			nextConfig.entities = entities;
			this._applyConfig(nextConfig);
		}
		_applyConfig(config) {
			this._config = config;
			fireEvent(this, "config-changed", { config });
		}
		_cloneConfig() {
			if (!this._config) throw new Error("Editor config is not initialized");
			return structuredClone(this._config);
		}
		_normalizeHandle(handle) {
			const normalizedHandle = {
				entity: handle?.entity ?? "",
				text: handle?.text ?? ""
			};
			if (handle?.connectprevious !== void 0) normalizedHandle.connectprevious = handle.connectprevious;
			return normalizedHandle;
		}
		_normalizeReference(reference) {
			if (reference == null) return;
			return {
				entity: reference.entity ?? "",
				text: reference.text ?? "",
				unit: reference.unit ?? "",
				bubble: reference.bubble ?? false,
				valuesbar: reference.valuesbar ?? false,
				valuesbartextlarge: reference.valuesbartextlarge ?? false
			};
		}
		_normalizeAdaptiveState(adaptiveState) {
			if (adaptiveState == null) return;
			return {
				conditions: Array.isArray(adaptiveState.conditions) ? structuredClone(adaptiveState.conditions) : [],
				editablewhenlinkedinactive: adaptiveState.editablewhenlinkedinactive ?? false
			};
		}
		_getHandleSchema(index) {
			const entityCount = this._config.entities?.length ?? 0;
			const excludedEntities = (this._config.entities ?? []).map((handle, handleIndex) => handleIndex === index ? "" : handle.entity ?? "").filter((entityId) => entityId !== "");
			return handleSchema.map((schema) => {
				if ("name" in schema && schema.name === "entity") return {
					...schema,
					selector: {
						...schema.selector,
						entity: {
							...schema.selector.entity,
							exclude_entities: excludedEntities
						}
					}
				};
				if (schema.type === "grid" && Array.isArray(schema.schema)) return {
					...schema,
					schema: schema.schema.map((fieldSchema) => {
						if (!("name" in fieldSchema) || fieldSchema.name !== "connectprevious") return fieldSchema;
						return {
							...fieldSchema,
							default: this._getDefaultConnectPrevious(index, entityCount)
						};
					})
				};
				return schema;
			});
		}
		_createEmptyHandle() {
			return createEmptyLegacyHandle();
		}
		_getDefaultConnectPrevious(index, entityCount) {
			if (entityCount <= 1) return true;
			return index > 0;
		}
		_getEntityType(entityId) {
			if (!entityId) return;
			try {
				return getEntityType(entityId);
			} catch {
				return;
			}
		}
		_getSelectedEntityType(handles) {
			for (const handle of handles) {
				const entityType = this._getEntityType(handle.entity);
				if (entityType !== void 0) return entityType;
			}
		}
		_hasLegacyEntityConfig(config) {
			return hasLegacyEntityConfig(config);
		}
		_getLegacyEntityConflictError(config) {
			if (config?.entity_min !== void 0 && config?.entity_max === void 0) return "Cannot use 'entity_min' without 'entity_max' in the editor configuration";
			if (config?.entity_max !== void 0 && config?.entity_min === void 0) return "Cannot use 'entity_max' without 'entity_min' in the editor configuration";
			if (config?.entity_min !== void 0 && config.entities?.[0] !== void 0) return "Cannot use both 'entity_min/entity_max' and 'entities' in the editor configuration";
			if (hasEntityTextConflict(config)) return "Cannot use both legacy 'mintext/maxtext' and 'entities[].text' in the editor configuration";
		}
		_normalizeConfig(config) {
			const { entity_min, entity_max, ...rest } = config ?? { type: "custom:flex-slider-card" };
			const entities = Array.isArray(config?.entities) ? config.entities.map((handle) => this._normalizeHandle(handle)) : [];
			if (entity_min !== void 0) setLegacyHandle(entities, 0, { entity: entity_min });
			if (entity_max !== void 0) setLegacyHandle(entities, 1, { entity: entity_max });
			const minText = getLegacyHandleText(config, 0);
			if (minText !== void 0) setLegacyHandle(entities, 0, { text: minText });
			const maxText = getLegacyHandleText(config, 1);
			if (maxText !== void 0) setLegacyHandle(entities, 1, { text: maxText });
			if (entities.length === 0) entities.push(this._createEmptyHandle());
			const normalizedConfig = {
				...rest,
				entities,
				reference: this._normalizeReference(config?.reference),
				adaptivestate: this._normalizeAdaptiveState(config?.adaptivestate)
			};
			if (hasLegacyValuesBarTextConfig(config)) normalizedConfig.valuesbar = {
				...normalizedConfig.valuesbar,
				showtext: true
			};
			if (hasLegacyBubblesTextConfig(config)) normalizedConfig.bubbles = {
				...normalizedConfig.bubbles,
				showtext: true
			};
			clearLegacyEntityTexts(normalizedConfig);
			return { ...normalizedConfig };
		}
	};
	__decorate([r()], FlexSliderCardConfigEditor.prototype, "_config", void 0);
	__decorate([r()], FlexSliderCardConfigEditor.prototype, "_error", void 0);
	__decorate([r()], FlexSliderCardConfigEditor.prototype, "_activeTab", void 0);
	__decorate([n({ attribute: false })], FlexSliderCardConfigEditor.prototype, "hass", void 0);
	FlexSliderCardConfigEditor = __decorate([t("flex-slider-card-config-editor")], FlexSliderCardConfigEditor);
}));
//#endregion
//#region src/flex-slider-card.ts
init_lit();
init_decorators();
init_flex_slider_card_validate_condition();
init_decorate();
console.info(`%c  FLEX-SLIDER-CARD %c  v${getVersion()}  `, "color: black; font-weight: bold; background: violet", "color: violet; font-weight: bold");
var windowWithCustomCards = window;
windowWithCustomCards.customCards ??= [];
if (!windowWithCustomCards.customCards.some((card) => card.type === "flex-slider-card")) windowWithCustomCards.customCards.push({
	type: "flex-slider-card",
	name: "Flex Slider Card",
	description: "Card to adjust entities with a single slider"
});
var FlexSliderCard = class FlexSliderCard extends i {
	static {
		this.styles = i$3`
    * {
      box-sizing: border-box;
    }
    ha-card {
      height: 100%;
      position: relative;
    }
    .adaptive-state-led {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid var(--divider-color);
      background: var(--disabled-text-color);
      box-shadow: 0 0 0 1px var(--card-background-color, var(--ha-card-background));
      pointer-events: none;
      z-index: 1;
    }
    .adaptive-state-led.is-on {
      border-color: var(--success-color);
      background: var(--success-color);
      box-shadow:
        0 0 0 1px var(--card-background-color, var(--ha-card-background)),
        0 0 8px var(--success-color);
    }
    .adaptive-state-led.is-off {
      opacity: 0.7;
    }
    .container.adaptive-state-inactive .title {
      color: var(--disabled-text-color);
    }
    ${r$4(stdFlexSliderCardCss)}
    ${r$4(compactFlexSliderCardCss)}
  `;
	}
	static async getConfigElement() {
		await Promise.resolve().then(() => (init_flex_slider_card_config_editor(), flex_slider_card_config_editor_exports));
		return document.createElement("flex-slider-card-config-editor");
	}
	static getStubConfig() {
		return flexSliderCardConfigStub;
	}
	setConfig(config) {
		this._runtimeError = void 0;
		try {
			assert(config, flexSliderCardConfigStruct);
			this._config = new FlexSliderCardConfigMngr(config);
			this._lastAdaptiveStateConditionResult = void 0;
			this._error = void 0;
			if (this._config.isStd) {
				this.toggleAttribute("std", true);
				this.toggleAttribute("compact", false);
			} else if (this._config.isCompact) {
				this.toggleAttribute("std", false);
				this.toggleAttribute("compact", true);
			} else throw new Error("Invalid format in setConfig");
		} catch (error) {
			this._setError(error);
		}
	}
	constructor() {
		super();
		this._firstUpdate = true;
		this._hasDeferredEntityUpdate = false;
	}
	connectedCallback() {
		super.connectedCallback();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._initPrivateDisplayData();
		this._config?.reset();
	}
	getCardSize() {
		this._dashboardType = "masonry";
		if (!this._config) return 1;
		if (this._config.isVertical) return this._config.sliderVerticalHeight ?? this._config.sliderVerticalHeightDefault;
		const hasReferenceBubble = this._config.hasReferenceBubble;
		const valuesBarSize = this._getValuesBarSize();
		const size = 1 + (this._config.hasTitle ? 1 : 0) + valuesBarSize + (this._config.hasBubbles || hasReferenceBubble ? 1 : 0) + (this._config.hasTicks ? 1 : 0);
		if (this._config.isStd) return size;
		else if (this._config.isCompact) return Math.round(size * 2 / 3);
		else throw new Error("Invalid format in getCardSize");
	}
	getGridOptions() {
		this._dashboardType = "sections";
		if (!this._config) return {};
		if (this._config.isVertical) if (this._shallForceHeight() || this._config.sliderVerticalHeight == null) return {
			rows: 2,
			min_rows: this._config.sliderVerticalHeightDefault,
			max_columns: 12,
			min_columns: 1
		};
		else {
			const vh = this._config.sliderVerticalHeight;
			return {
				rows: vh,
				min_rows: vh,
				max_columns: 12,
				min_columns: 1
			};
		}
		else {
			const hasReferenceBubble = this._config.hasReferenceBubble;
			const valuesBarSize = this._getValuesBarSize();
			const size = 1 + (this._config.hasTitle ? 1 : 0) + valuesBarSize + (this._config.hasBubbles || hasReferenceBubble ? 1 : 0) + (this._config.hasTicks ? 1 : 0);
			if (this._config.isStd) return {
				min_rows: Math.round(size / 2),
				min_columns: 6,
				max_columns: 12
			};
			else if (this._config.isCompact) return {
				min_rows: Math.round(size / 2.5),
				min_columns: 2,
				max_columns: 9
			};
			else throw new Error("Invalid format in getGridOptions");
		}
	}
	shouldUpdate(changedProps) {
		if (!this._config || !this.hass || !changedProps.has("hass")) return true;
		try {
			this._config.update(this.hass);
			this._runtimeError = void 0;
		} catch (error) {
			this._runtimeError = this._getErrorMessage(error);
			return true;
		}
		const adaptiveStateConditionResult = this._getAdaptiveStateConditionResult();
		const adaptiveStateConditionChanged = adaptiveStateConditionResult !== this._lastAdaptiveStateConditionResult;
		this._lastAdaptiveStateConditionResult = adaptiveStateConditionResult;
		if (!this._config.entitiesExist()) return true;
		if (adaptiveStateConditionChanged) return true;
		if (this._firstUpdate || !this._config.entitiesIsUpdated()) return this._firstUpdate;
		if (this._slider?.isUserUpdating()) {
			this._hasDeferredEntityUpdate = true;
			return false;
		}
		return true;
	}
	willUpdate(changedProps) {
		if (changedProps.has("hass")) this._firstUpdate = false;
	}
	firstUpdated(_changedProperties) {
		if (!this._config) return;
		if (this._config.hasValuesBar) this._slider.setCallbacks(this._valuesBar.setMode, this._valuesBar.setValue);
		this._applyCardMod();
	}
	updated(changedProps) {
		if (!this._config || this._error || this._runtimeError) return;
		if ((changedProps.has("hass") || this._hasDeferredEntityUpdate) && this._config.entitiesExist() && !this._slider?.isUserUpdating()) {
			this._config.entitiesSetBaseline();
			this._hasDeferredEntityUpdate = false;
		}
		const haCard = this.shadowRoot?.querySelector("ha-card");
		const borderHeight = haCard ? parseFloat(getComputedStyle(haCard).borderTopWidth) + parseFloat(getComputedStyle(haCard).borderBottomWidth) : 0;
		this.style.setProperty("--ha-card-border-total", `${borderHeight}px`);
		if (this._config.isVertical && this._shallForceHeight()) {
			const vh = this._config.sliderVerticalHeight ?? this._config.sliderVerticalHeightDefault;
			this.style.setProperty("--flex-slider-height", `${56 + (vh - 1) * 64}px`);
		} else this.style.removeProperty("--flex-slider-height");
	}
	render() {
		const errorMessage = this._error ?? this._runtimeError;
		if (errorMessage) return b`<ha-card><div class="card-content">${errorMessage}</div></ha-card>`;
		if (!this._config) return A;
		if (!this._config.entitiesExist()) return b`<ha-card><div class="card-content">Entities not found</div></ha-card>`;
		const hasValuesBar = this._config.hasValuesBar || this._config.hasReferenceValuesBar;
		const hasTitle = this._config.hasTitle;
		const hasBubbles = this._config.hasBubbles;
		const hasReferenceBubble = this._config.hasReferenceBubble;
		const hasTicks = this._config.hasTicks;
		const name = this._config.title;
		const isStd = this._config.isStd;
		const isVertical = this._config.isVertical;
		const adaptiveStateConditionResult = this._getAdaptiveStateConditionResult();
		const isAdaptiveStateInactive = this._config.isAdaptative && adaptiveStateConditionResult === false;
		const isSliderDisabled = isAdaptiveStateInactive && !this._config.isEditableWhenLinkedInactive;
		const reservesBubbleSpace = hasBubbles || hasReferenceBubble;
		const containerClass = `${isStd ? "std" : "compact"} ${hasTitle ? "" : "no-title"} ${hasValuesBar ? "" : "no-values"} ${reservesBubbleSpace ? "has-bubbles " : ""}${hasTicks ? "has-ticks " : ""}${isAdaptiveStateInactive ? "adaptive-state-inactive " : ""}${isVertical ? "vertical" : ""}`;
		const sliderClass = `${isStd ? "std" : "compact"}`;
		const values = this._config.hasReference ? [
			...this._config.entities.map((entity) => entity.sliderValue),
			this._config.max,
			this._config.referenceEntity.sliderValue
		] : this._config.entities.map((entity) => entity.sliderValue);
		const horizontalWidth = isVertical ? "" : `--flex-slider-width: ${this._config.sliderHorizontalWidth}%`;
		const verticalSliderContainerStyle = isVertical && reservesBubbleSpace !== hasTicks ? `width: 100%; justify-content: ${reservesBubbleSpace ? this._config.verticalLayout === "mirrored" ? "flex-start" : "flex-end" : this._config.verticalLayout === "mirrored" ? "flex-end" : "flex-start"};` : "";
		return b`
      <ha-card aria-disabled=${isSliderDisabled ? "true" : "false"}>
        ${this._config.isAdaptative ? this._renderAdaptiveStateLed(adaptiveStateConditionResult === true) : A}
        <div class="container ${containerClass}">
          ${hasTitle ? b`<div class="title">${name}</div>` : A}
          <div class="slider-with-values" style="${horizontalWidth}">
            <div class="slider-container" style="${verticalSliderContainerStyle}">
              <flex-slider-card-slider
                .config=${this._config}
                .values=${values}
                .sliderClass=${sliderClass}
                .forceHeight=${this._shallForceHeight()}
                .inactive=${isAdaptiveStateInactive}
                .disabled=${isSliderDisabled}
                @user-update-state-changed=${this._handleUserUpdateStateChanged}
              ></flex-slider-card-slider>
            </div>
            ${hasValuesBar ? b`
                <flex-slider-card-valuesbar
                  .config=${this._config}
                  .values=${values}
                  .inactive=${isAdaptiveStateInactive}
                ></flex-slider-card-valuesbar>
              ` : A}
          </div>
        </div>
      </ha-card>
    `;
	}
	_initPrivateDisplayData() {
		this._firstUpdate = true;
		this._dashboardType = void 0;
		this._hasDeferredEntityUpdate = false;
		this._runtimeError = void 0;
		this._lastAdaptiveStateConditionResult = void 0;
	}
	_handleUserUpdateStateChanged(event) {
		if (!event.detail.isUserUpdating && this._hasDeferredEntityUpdate) this.requestUpdate();
	}
	_renderAdaptiveStateLed(isOn) {
		return b`
      <span
        class="adaptive-state-led ${isOn ? "is-on" : "is-off"}"
        title=${isOn ? "Adaptive state condition is true" : "Adaptive state condition is false"}
        aria-hidden="true"
      ></span>
    `;
	}
	_getAdaptiveStateConditionResult() {
		if (!this._config?.isAdaptative || !this.hass) return;
		return checkConditionsMet(this._config.adaptiveStateConditions, this.hass, { entity_id: this._config.entities[0]?.entityId });
	}
	_getValuesBarSize() {
		if (!this._config?.hasValuesBar && !this._config?.hasReferenceValuesBar) return 0;
		return this._config.hasReferenceValuesBarTextLarge ? 2 : 1;
	}
	_applyCardMod() {
		const config = this._config;
		if (!config?.config.card_mod) return;
		customElements.whenDefined("card-mod").then((cardMod) => {
			cardMod.applyToElement(this, "card", config.config.card_mod, { config }, true, `type-${this.localName}`);
		});
	}
	_shallForceHeight() {
		if (!this._config) throw new Error("Invalid config in _shallForceHeight");
		`${this._dashboardType}`;
		return this._config.isVertical && (this._dashboardType === void 0 || this._dashboardType === "masonry" || this._dashboardType === "sections" && (this._config.gridRows === null || typeof this._config.gridRows === "string"));
	}
	_setError(error) {
		this._error = this._getErrorMessage(error);
	}
	_getErrorMessage(error) {
		if (error instanceof Error) return error.message;
		return "Unknown error " + String(error);
	}
};
__decorate([n({ attribute: false })], FlexSliderCard.prototype, "hass", void 0);
__decorate([r()], FlexSliderCard.prototype, "_error", void 0);
__decorate([r()], FlexSliderCard.prototype, "_runtimeError", void 0);
__decorate([e("flex-slider-card-slider")], FlexSliderCard.prototype, "_slider", void 0);
__decorate([e("flex-slider-card-valuesbar")], FlexSliderCard.prototype, "_valuesBar", void 0);
FlexSliderCard = __decorate([t("flex-slider-card")], FlexSliderCard);
//#endregion
export { FlexSliderCard };
