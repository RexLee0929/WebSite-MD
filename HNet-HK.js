(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s=>{
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
function Y() {}
function jt(e) {
    return e()
}
function at() {
    return Object.create(null)
}
function G(e) {
    e.forEach(jt)
}
function Mt(e) {
    return typeof e == "function"
}
function Ie(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let ue;
function ct(e, t) {
    return ue || (ue = document.createElement("a")),
    ue.href = t,
    e === ue.href
}
function Un(e) {
    return Object.keys(e).length === 0
}
function ut(e) {
    return e ?? ""
}
function m(e, t) {
    e.appendChild(t)
}
function M(e, t, n) {
    e.insertBefore(t, n || null)
}
function j(e) {
    e.parentNode && e.parentNode.removeChild(e)
}
function v(e) {
    return document.createElement(e)
}
function I(e) {
    return document.createTextNode(e)
}
function P() {
    return I(" ")
}
function z(e, t, n, r) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n, r)
}
function b(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function xn(e) {
    return Array.from(e.childNodes)
}
function ie(e, t) {
    t = "" + t,
    e.wholeText !== t && (e.data = t)
}
function Q(e, t) {
    e.value = t ?? ""
}
function ze(e, t, n, r) {
    n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
}
function V(e, t, n) {
    e.classList[n ? "add" : "remove"](t)
}
let se;
function re(e) {
    se = e
}
function Ht() {
    if (!se)
        throw new Error("Function called outside component initialization");
    return se
}
function It(e) {
    Ht().$$.on_mount.push(e)
}
function jn(e) {
    Ht().$$.on_destroy.push(e)
}
const Z = []
  , ft = []
  , he = []
  , dt = []
  , Mn = Promise.resolve();
let De = !1;
function Hn() {
    De || (De = !0,
    Mn.then(qt))
}
function Ue(e) {
    he.push(e)
}
const Te = new Set;
let X = 0;
function qt() {
    if (X !== 0)
        return;
    const e = se;
    do {
        try {
            for (; X < Z.length; ) {
                const t = Z[X];
                X++,
                re(t),
                In(t.$$)
            }
        } catch (t) {
            throw Z.length = 0,
            X = 0,
            t
        }
        for (re(null),
        Z.length = 0,
        X = 0; ft.length; )
            ft.pop()();
        for (let t = 0; t < he.length; t += 1) {
            const n = he[t];
            Te.has(n) || (Te.add(n),
            n())
        }
        he.length = 0
    } while (Z.length);
    for (; dt.length; )
        dt.pop()();
    De = !1,
    Te.clear(),
    re(e)
}
function In(e) {
    if (e.fragment !== null) {
        e.update(),
        G(e.before_update);
        const t = e.dirty;
        e.dirty = [-1],
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(Ue)
    }
}
const pe = new Set;
let qn;
function Ee(e, t) {
    e && e.i && (pe.delete(e),
    e.i(t))
}
function Jt(e, t, n, r) {
    if (e && e.o) {
        if (pe.has(e))
            return;
        pe.add(e),
        qn.c.push(()=>{
            pe.delete(e),
            r && (n && e.d(1),
            r())
        }
        ),
        e.o(t)
    } else
        r && r()
}
function Wt(e, t) {
    e.d(1),
    t.delete(e.key)
}
function Kt(e, t, n, r, s, i, o, a, u, l, f, p) {
    let y = e.length
      , h = i.length
      , d = y;
    const w = {};
    for (; d--; )
        w[e[d].key] = d;
    const _ = []
      , L = new Map
      , F = new Map;
    for (d = h; d--; ) {
        const E = p(s, i, d)
          , R = n(E);
        let S = o.get(R);
        S ? r && S.p(E, t) : (S = l(R, E),
        S.c()),
        L.set(R, _[d] = S),
        R in w && F.set(R, Math.abs(d - w[R]))
    }
    const O = new Set
      , k = new Set;
    function N(E) {
        Ee(E, 1),
        E.m(a, f),
        o.set(E.key, E),
        f = E.first,
        h--
    }
    for (; y && h; ) {
        const E = _[h - 1]
          , R = e[y - 1]
          , S = E.key
          , A = R.key;
        E === R ? (f = E.first,
        y--,
        h--) : L.has(A) ? !o.has(S) || O.has(S) ? N(E) : k.has(A) ? y-- : F.get(S) > F.get(A) ? (k.add(S),
        N(E)) : (O.add(A),
        y--) : (u(R, o),
        y--)
    }
    for (; y--; ) {
        const E = e[y];
        L.has(E.key) || u(E, o)
    }
    for (; h; )
        N(_[h - 1]);
    return _
}
function Vt(e) {
    e && e.c()
}
function qe(e, t, n, r) {
    const {fragment: s, after_update: i} = e.$$;
    s && s.m(t, n),
    r || Ue(()=>{
        const o = e.$$.on_mount.map(jt).filter(Mt);
        e.$$.on_destroy ? e.$$.on_destroy.push(...o) : G(o),
        e.$$.on_mount = []
    }
    ),
    i.forEach(Ue)
}
function Je(e, t) {
    const n = e.$$;
    n.fragment !== null && (G(n.on_destroy),
    n.fragment && n.fragment.d(t),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function Jn(e, t) {
    e.$$.dirty[0] === -1 && (Z.push(e),
    Hn(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function We(e, t, n, r, s, i, o, a=[-1]) {
    const u = se;
    re(e);
    const l = e.$$ = {
        fragment: null,
        ctx: [],
        props: i,
        update: Y,
        not_equal: s,
        bound: at(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (u ? u.$$.context : [])),
        callbacks: at(),
        dirty: a,
        skip_bound: !1,
        root: t.target || u.$$.root
    };
    o && o(l.root);
    let f = !1;
    if (l.ctx = n ? n(e, t.props || {}, (p,y,...h)=>{
        const d = h.length ? h[0] : y;
        return l.ctx && s(l.ctx[p], l.ctx[p] = d) && (!l.skip_bound && l.bound[p] && l.bound[p](d),
        f && Jn(e, p)),
        y
    }
    ) : [],
    l.update(),
    f = !0,
    G(l.before_update),
    l.fragment = r ? r(l.ctx) : !1,
    t.target) {
        if (t.hydrate) {
            const p = xn(t.target);
            l.fragment && l.fragment.l(p),
            p.forEach(j)
        } else
            l.fragment && l.fragment.c();
        t.intro && Ee(e.$$.fragment),
        qe(e, t.target, t.anchor, t.customElement),
        qt()
    }
    re(u)
}
class Ke {
    $destroy() {
        Je(this, 1),
        this.$destroy = Y
    }
    $on(t, n) {
        if (!Mt(n))
            return Y;
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n),
        ()=>{
            const s = r.indexOf(n);
            s !== -1 && r.splice(s, 1)
        }
    }
    $set(t) {
        this.$$set && !Un(t) && (this.$$.skip_bound = !0,
        this.$$set(t),
        this.$$.skip_bound = !1)
    }
}
function $t(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Gt} = Object.prototype
  , {getPrototypeOf: Ve} = Object
  , $e = (e=>t=>{
    const n = Gt.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , J = e=>(e = e.toLowerCase(),
t=>$e(t) === e)
  , Se = e=>t=>typeof t === e
  , {isArray: te} = Array
  , oe = Se("undefined");
function Wn(e) {
    return e !== null && !oe(e) && e.constructor !== null && !oe(e.constructor) && $(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Xt = J("ArrayBuffer");
function Kn(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xt(e.buffer),
    t
}
const Vn = Se("string")
  , $ = Se("function")
  , Zt = Se("number")
  , Ge = e=>e !== null && typeof e == "object"
  , $n = e=>e === !0 || e === !1
  , me = e=>{
    if ($e(e) !== "object")
        return !1;
    const t = Ve(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Gn = J("Date")
  , Xn = J("File")
  , Zn = J("Blob")
  , Qn = J("FileList")
  , Yn = e=>Ge(e) && $(e.pipe)
  , er = e=>{
    const t = "[object FormData]";
    return e && (typeof FormData == "function" && e instanceof FormData || Gt.call(e) === t || $(e.toString) && e.toString() === t)
}
  , tr = J("URLSearchParams")
  , nr = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function le(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, s;
    if (typeof e != "object" && (e = [e]),
    te(e))
        for (r = 0,
        s = e.length; r < s; r++)
            t.call(null, e[r], r, e);
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , o = i.length;
        let a;
        for (r = 0; r < o; r++)
            a = i[r],
            t.call(null, e[a], a, e)
    }
}
function Qt(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0; )
        if (s = n[r],
        t === s.toLowerCase())
            return s;
    return null
}
const Yt = (()=>typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , en = e=>!oe(e) && e !== Yt;
function xe() {
    const {caseless: e} = en(this) && this || {}
      , t = {}
      , n = (r,s)=>{
        const i = e && Qt(t, s) || s;
        me(t[i]) && me(r) ? t[i] = xe(t[i], r) : me(r) ? t[i] = xe({}, r) : te(r) ? t[i] = r.slice() : t[i] = r
    }
    ;
    for (let r = 0, s = arguments.length; r < s; r++)
        arguments[r] && le(arguments[r], n);
    return t
}
const rr = (e,t,n,{allOwnKeys: r}={})=>(le(t, (s,i)=>{
    n && $(s) ? e[i] = $t(s, n) : e[i] = s
}
, {
    allOwnKeys: r
}),
e)
  , sr = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , or = (e,t,n,r)=>{
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , ir = (e,t,n,r)=>{
    let s, i, o;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (s = Object.getOwnPropertyNames(e),
        i = s.length; i-- > 0; )
            o = s[i],
            (!r || r(o, e, t)) && !a[o] && (t[o] = e[o],
            a[o] = !0);
        e = n !== !1 && Ve(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , lr = (e,t,n)=>{
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , ar = e=>{
    if (!e)
        return null;
    if (te(e))
        return e;
    let t = e.length;
    if (!Zt(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , cr = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && Ve(Uint8Array))
  , ur = (e,t)=>{
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
        const i = s.value;
        t.call(e, i[0], i[1])
    }
}
  , fr = (e,t)=>{
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , dr = J("HTMLFormElement")
  , hr = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
    return r.toUpperCase() + s
})
  , ht = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
  , pr = J("RegExp")
  , tn = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    le(n, (s,i)=>{
        t(s, i, e) !== !1 && (r[i] = s)
    }
    ),
    Object.defineProperties(e, r)
}
  , mr = e=>{
    tn(e, (t,n)=>{
        if ($(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if ($(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , wr = (e,t)=>{
    const n = {}
      , r = s=>{
        s.forEach(i=>{
            n[i] = !0
        }
        )
    }
    ;
    return te(e) ? r(e) : r(String(e).split(t)),
    n
}
  , gr = ()=>{}
  , _r = (e,t)=>(e = +e,
Number.isFinite(e) ? e : t)
  , Ce = "abcdefghijklmnopqrstuvwxyz"
  , pt = "0123456789"
  , nn = {
    DIGIT: pt,
    ALPHA: Ce,
    ALPHA_DIGIT: Ce + Ce.toUpperCase() + pt
}
  , br = (e=16,t=nn.ALPHA_DIGIT)=>{
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function yr(e) {
    return !!(e && $(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Er = e=>{
    const t = new Array(10)
      , n = (r,s)=>{
        if (Ge(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[s] = r;
                const i = te(r) ? [] : {};
                return le(r, (o,a)=>{
                    const u = n(o, s + 1);
                    !oe(u) && (i[a] = u)
                }
                ),
                t[s] = void 0,
                i
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , c = {
    isArray: te,
    isArrayBuffer: Xt,
    isBuffer: Wn,
    isFormData: er,
    isArrayBufferView: Kn,
    isString: Vn,
    isNumber: Zt,
    isBoolean: $n,
    isObject: Ge,
    isPlainObject: me,
    isUndefined: oe,
    isDate: Gn,
    isFile: Xn,
    isBlob: Zn,
    isRegExp: pr,
    isFunction: $,
    isStream: Yn,
    isURLSearchParams: tr,
    isTypedArray: cr,
    isFileList: Qn,
    forEach: le,
    merge: xe,
    extend: rr,
    trim: nr,
    stripBOM: sr,
    inherits: or,
    toFlatObject: ir,
    kindOf: $e,
    kindOfTest: J,
    endsWith: lr,
    toArray: ar,
    forEachEntry: ur,
    matchAll: fr,
    isHTMLForm: dr,
    hasOwnProperty: ht,
    hasOwnProp: ht,
    reduceDescriptors: tn,
    freezeMethods: mr,
    toObjectSet: wr,
    toCamelCase: hr,
    noop: gr,
    toFiniteNumber: _r,
    findKey: Qt,
    global: Yt,
    isContextDefined: en,
    ALPHABET: nn,
    generateString: br,
    isSpecCompliantForm: yr,
    toJSONObject: Er
};
function T(e, t, n, r, s) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s)
}
c.inherits(T, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: c.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const rn = T.prototype
  , sn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    sn[e] = {
        value: e
    }
}
);
Object.defineProperties(T, sn);
Object.defineProperty(rn, "isAxiosError", {
    value: !0
});
T.from = (e,t,n,r,s,i)=>{
    const o = Object.create(rn);
    return c.toFlatObject(e, o, function(u) {
        return u !== Error.prototype
    }, a=>a !== "isAxiosError"),
    T.call(o, e.message, t, n, r, s),
    o.cause = e,
    o.name = e.name,
    i && Object.assign(o, i),
    o
}
;
const Sr = null;
function je(e) {
    return c.isPlainObject(e) || c.isArray(e)
}
function on(e) {
    return c.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function mt(e, t, n) {
    return e ? e.concat(t).map(function(s, i) {
        return s = on(s),
        !n && i ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}
function kr(e) {
    return c.isArray(e) && !e.some(je)
}
const vr = c.toFlatObject(c, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function ke(e, t, n) {
    if (!c.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = c.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(w, _) {
        return !c.isUndefined(_[w])
    });
    const r = n.metaTokens
      , s = n.visitor || f
      , i = n.dots
      , o = n.indexes
      , u = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
    if (!c.isFunction(s))
        throw new TypeError("visitor must be a function");
    function l(d) {
        if (d === null)
            return "";
        if (c.isDate(d))
            return d.toISOString();
        if (!u && c.isBlob(d))
            throw new T("Blob is not supported. Use a Buffer instead.");
        return c.isArrayBuffer(d) || c.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d
    }
    function f(d, w, _) {
        let L = d;
        if (d && !_ && typeof d == "object") {
            if (c.endsWith(w, "{}"))
                w = r ? w : w.slice(0, -2),
                d = JSON.stringify(d);
            else if (c.isArray(d) && kr(d) || (c.isFileList(d) || c.endsWith(w, "[]")) && (L = c.toArray(d)))
                return w = on(w),
                L.forEach(function(O, k) {
                    !(c.isUndefined(O) || O === null) && t.append(o === !0 ? mt([w], k, i) : o === null ? w : w + "[]", l(O))
                }),
                !1
        }
        return je(d) ? !0 : (t.append(mt(_, w, i), l(d)),
        !1)
    }
    const p = []
      , y = Object.assign(vr, {
        defaultVisitor: f,
        convertValue: l,
        isVisitable: je
    });
    function h(d, w) {
        if (!c.isUndefined(d)) {
            if (p.indexOf(d) !== -1)
                throw Error("Circular reference detected in " + w.join("."));
            p.push(d),
            c.forEach(d, function(L, F) {
                (!(c.isUndefined(L) || L === null) && s.call(t, L, c.isString(F) ? F.trim() : F, w, y)) === !0 && h(L, w ? w.concat(F) : [F])
            }),
            p.pop()
        }
    }
    if (!c.isObject(e))
        throw new TypeError("data must be an object");
    return h(e),
    t
}
function wt(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Xe(e, t) {
    this._pairs = [],
    e && ke(e, this, t)
}
const ln = Xe.prototype;
ln.append = function(t, n) {
    this._pairs.push([t, n])
}
;
ln.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, wt)
    }
    : wt;
    return this._pairs.map(function(s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
}
;
function Or(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function an(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Or
      , s = n && n.serialize;
    let i;
    if (s ? i = s(t, n) : i = c.isURLSearchParams(t) ? t.toString() : new Xe(t,n).toString(r),
    i) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class Ar {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        c.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const gt = Ar
  , cn = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Rr = typeof URLSearchParams < "u" ? URLSearchParams : Xe
  , Tr = typeof FormData < "u" ? FormData : null
  , Cr = typeof Blob < "u" ? Blob : null
  , Lr = (()=>{
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
  , Nr = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , H = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Rr,
        FormData: Tr,
        Blob: Cr
    },
    isStandardBrowserEnv: Lr,
    isStandardBrowserWebWorkerEnv: Nr,
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Pr(e, t) {
    return ke(e, new H.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, s, i) {
            return H.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Fr(e) {
    return c.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function Br(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const s = n.length;
    let i;
    for (r = 0; r < s; r++)
        i = n[r],
        t[i] = e[i];
    return t
}
function un(e) {
    function t(n, r, s, i) {
        let o = n[i++];
        const a = Number.isFinite(+o)
          , u = i >= n.length;
        return o = !o && c.isArray(s) ? s.length : o,
        u ? (c.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r,
        !a) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []),
        t(n, r, s[o], i) && c.isArray(s[o]) && (s[o] = Br(s[o])),
        !a)
    }
    if (c.isFormData(e) && c.isFunction(e.entries)) {
        const n = {};
        return c.forEachEntry(e, (r,s)=>{
            t(Fr(r), s, n, 0)
        }
        ),
        n
    }
    return null
}
const zr = {
    "Content-Type": void 0
};
function Dr(e, t, n) {
    if (c.isString(e))
        try {
            return (t || JSON.parse)(e),
            c.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const ve = {
    transitional: cn,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , s = r.indexOf("application/json") > -1
          , i = c.isObject(t);
        if (i && c.isHTMLForm(t) && (t = new FormData(t)),
        c.isFormData(t))
            return s && s ? JSON.stringify(un(t)) : t;
        if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
            return t;
        if (c.isArrayBufferView(t))
            return t.buffer;
        if (c.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Pr(t, this.formSerializer).toString();
            if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return ke(a ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return i || s ? (n.setContentType("application/json", !1),
        Dr(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || ve.transitional
          , r = n && n.forcedJSONParsing
          , s = this.responseType === "json";
        if (t && c.isString(t) && (r && !this.responseType || s)) {
            const o = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (o)
                    throw a.name === "SyntaxError" ? T.from(a, T.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: H.classes.FormData,
        Blob: H.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
c.forEach(["delete", "get", "head"], function(t) {
    ve.headers[t] = {}
});
c.forEach(["post", "put", "patch"], function(t) {
    ve.headers[t] = c.merge(zr)
});
const Ze = ve
  , Ur = c.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , xr = e=>{
    const t = {};
    let n, r, s;
    return e && e.split(`
`).forEach(function(o) {
        s = o.indexOf(":"),
        n = o.substring(0, s).trim().toLowerCase(),
        r = o.substring(s + 1).trim(),
        !(!n || t[n] && Ur[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , _t = Symbol("internals");
function ne(e) {
    return e && String(e).trim().toLowerCase()
}
function we(e) {
    return e === !1 || e == null ? e : c.isArray(e) ? e.map(we) : String(e)
}
function jr(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
function Mr(e) {
    return /^[-_a-zA-Z]+$/.test(e.trim())
}
function Le(e, t, n, r, s) {
    if (c.isFunction(r))
        return r.call(this, t, n);
    if (s && (t = n),
    !!c.isString(t)) {
        if (c.isString(r))
            return t.indexOf(r) !== -1;
        if (c.isRegExp(r))
            return r.test(t)
    }
}
function Hr(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,r)=>n.toUpperCase() + r)
}
function Ir(e, t) {
    const n = c.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r=>{
        Object.defineProperty(e, r + n, {
            value: function(s, i, o) {
                return this[r].call(this, t, s, i, o)
            },
            configurable: !0
        })
    }
    )
}
class Oe {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const s = this;
        function i(a, u, l) {
            const f = ne(u);
            if (!f)
                throw new Error("header name must be a non-empty string");
            const p = c.findKey(s, f);
            (!p || s[p] === void 0 || l === !0 || l === void 0 && s[p] !== !1) && (s[p || u] = we(a))
        }
        const o = (a,u)=>c.forEach(a, (l,f)=>i(l, f, u));
        return c.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : c.isString(t) && (t = t.trim()) && !Mr(t) ? o(xr(t), n) : t != null && i(n, t, r),
        this
    }
    get(t, n) {
        if (t = ne(t),
        t) {
            const r = c.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n)
                    return s;
                if (n === !0)
                    return jr(s);
                if (c.isFunction(n))
                    return n.call(this, s, r);
                if (c.isRegExp(n))
                    return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = ne(t),
        t) {
            const r = c.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Le(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let s = !1;
        function i(o) {
            if (o = ne(o),
            o) {
                const a = c.findKey(r, o);
                a && (!n || Le(r, r[a], a, n)) && (delete r[a],
                s = !0)
            }
        }
        return c.isArray(t) ? t.forEach(i) : i(t),
        s
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , s = !1;
        for (; r--; ) {
            const i = n[r];
            (!t || Le(this, this[i], i, t, !0)) && (delete this[i],
            s = !0)
        }
        return s
    }
    normalize(t) {
        const n = this
          , r = {};
        return c.forEach(this, (s,i)=>{
            const o = c.findKey(r, i);
            if (o) {
                n[o] = we(s),
                delete n[i];
                return
            }
            const a = t ? Hr(i) : String(i).trim();
            a !== i && delete n[i],
            n[a] = we(s),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return c.forEach(this, (r,s)=>{
            r != null && r !== !1 && (n[s] = t && c.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s=>r.set(s)),
        r
    }
    static accessor(t) {
        const r = (this[_t] = this[_t] = {
            accessors: {}
        }).accessors
          , s = this.prototype;
        function i(o) {
            const a = ne(o);
            r[a] || (Ir(s, o),
            r[a] = !0)
        }
        return c.isArray(t) ? t.forEach(i) : i(t),
        this
    }
}
Oe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.freezeMethods(Oe.prototype);
c.freezeMethods(Oe);
const q = Oe;
function Ne(e, t) {
    const n = this || Ze
      , r = t || n
      , s = q.from(r.headers);
    let i = r.data;
    return c.forEach(e, function(a) {
        i = a.call(n, i, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    i
}
function fn(e) {
    return !!(e && e.__CANCEL__)
}
function ae(e, t, n) {
    T.call(this, e ?? "canceled", T.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
c.inherits(ae, T, {
    __CANCEL__: !0
});
function qr(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new T("Request failed with status code " + n.status,[T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const Jr = H.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, s, i, o, a) {
            const u = [];
            u.push(n + "=" + encodeURIComponent(r)),
            c.isNumber(s) && u.push("expires=" + new Date(s).toGMTString()),
            c.isString(i) && u.push("path=" + i),
            c.isString(o) && u.push("domain=" + o),
            a === !0 && u.push("secure"),
            document.cookie = u.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();
function Wr(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Kr(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function dn(e, t) {
    return e && !Wr(t) ? Kr(e, t) : t
}
const Vr = H.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function s(i) {
        let o = i;
        return t && (n.setAttribute("href", o),
        o = n.href),
        n.setAttribute("href", o),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = s(window.location.href),
    function(o) {
        const a = c.isString(o) ? s(o) : o;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function $r(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Gr(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let s = 0, i = 0, o;
    return t = t !== void 0 ? t : 1e3,
    function(u) {
        const l = Date.now()
          , f = r[i];
        o || (o = l),
        n[s] = u,
        r[s] = l;
        let p = i
          , y = 0;
        for (; p !== s; )
            y += n[p++],
            p = p % e;
        if (s = (s + 1) % e,
        s === i && (i = (i + 1) % e),
        l - o < t)
            return;
        const h = f && l - f;
        return h ? Math.round(y * 1e3 / h) : void 0
    }
}
function bt(e, t) {
    let n = 0;
    const r = Gr(50, 250);
    return s=>{
        const i = s.loaded
          , o = s.lengthComputable ? s.total : void 0
          , a = i - n
          , u = r(a)
          , l = i <= o;
        n = i;
        const f = {
            loaded: i,
            total: o,
            progress: o ? i / o : void 0,
            bytes: a,
            rate: u || void 0,
            estimated: u && o && l ? (o - i) / u : void 0,
            event: s
        };
        f[t ? "download" : "upload"] = !0,
        e(f)
    }
}
const Xr = typeof XMLHttpRequest < "u"
  , Zr = Xr && function(e) {
    return new Promise(function(n, r) {
        let s = e.data;
        const i = q.from(e.headers).normalize()
          , o = e.responseType;
        let a;
        function u() {
            e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a)
        }
        c.isFormData(s) && (H.isStandardBrowserEnv || H.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
        let l = new XMLHttpRequest;
        if (e.auth) {
            const h = e.auth.username || ""
              , d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            i.set("Authorization", "Basic " + btoa(h + ":" + d))
        }
        const f = dn(e.baseURL, e.url);
        l.open(e.method.toUpperCase(), an(f, e.params, e.paramsSerializer), !0),
        l.timeout = e.timeout;
        function p() {
            if (!l)
                return;
            const h = q.from("getAllResponseHeaders"in l && l.getAllResponseHeaders())
              , w = {
                data: !o || o === "text" || o === "json" ? l.responseText : l.response,
                status: l.status,
                statusText: l.statusText,
                headers: h,
                config: e,
                request: l
            };
            qr(function(L) {
                n(L),
                u()
            }, function(L) {
                r(L),
                u()
            }, w),
            l = null
        }
        if ("onloadend"in l ? l.onloadend = p : l.onreadystatechange = function() {
            !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(p)
        }
        ,
        l.onabort = function() {
            l && (r(new T("Request aborted",T.ECONNABORTED,e,l)),
            l = null)
        }
        ,
        l.onerror = function() {
            r(new T("Network Error",T.ERR_NETWORK,e,l)),
            l = null
        }
        ,
        l.ontimeout = function() {
            let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const w = e.transitional || cn;
            e.timeoutErrorMessage && (d = e.timeoutErrorMessage),
            r(new T(d,w.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,e,l)),
            l = null
        }
        ,
        H.isStandardBrowserEnv) {
            const h = (e.withCredentials || Vr(f)) && e.xsrfCookieName && Jr.read(e.xsrfCookieName);
            h && i.set(e.xsrfHeaderName, h)
        }
        s === void 0 && i.setContentType(null),
        "setRequestHeader"in l && c.forEach(i.toJSON(), function(d, w) {
            l.setRequestHeader(w, d)
        }),
        c.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials),
        o && o !== "json" && (l.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && l.addEventListener("progress", bt(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", bt(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (a = h=>{
            l && (r(!h || h.type ? new ae(null,e,l) : h),
            l.abort(),
            l = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(a),
        e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const y = $r(f);
        if (y && H.protocols.indexOf(y) === -1) {
            r(new T("Unsupported protocol " + y + ":",T.ERR_BAD_REQUEST,e));
            return
        }
        l.send(s || null)
    }
    )
}
  , ge = {
    http: Sr,
    xhr: Zr
};
c.forEach(ge, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Qr = {
    getAdapter: e=>{
        e = c.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        for (let s = 0; s < t && (n = e[s],
        !(r = c.isString(n) ? ge[n.toLowerCase()] : n)); s++)
            ;
        if (!r)
            throw r === !1 ? new T(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(c.hasOwnProp(ge, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!c.isFunction(r))
            throw new TypeError("adapter is not a function");
        return r
    }
    ,
    adapters: ge
};
function Pe(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new ae(null,e)
}
function yt(e) {
    return Pe(e),
    e.headers = q.from(e.headers),
    e.data = Ne.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Qr.getAdapter(e.adapter || Ze.adapter)(e).then(function(r) {
        return Pe(e),
        r.data = Ne.call(e, e.transformResponse, r),
        r.headers = q.from(r.headers),
        r
    }, function(r) {
        return fn(r) || (Pe(e),
        r && r.response && (r.response.data = Ne.call(e, e.transformResponse, r.response),
        r.response.headers = q.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Et = e=>e instanceof q ? e.toJSON() : e;
function ee(e, t) {
    t = t || {};
    const n = {};
    function r(l, f, p) {
        return c.isPlainObject(l) && c.isPlainObject(f) ? c.merge.call({
            caseless: p
        }, l, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f
    }
    function s(l, f, p) {
        if (c.isUndefined(f)) {
            if (!c.isUndefined(l))
                return r(void 0, l, p)
        } else
            return r(l, f, p)
    }
    function i(l, f) {
        if (!c.isUndefined(f))
            return r(void 0, f)
    }
    function o(l, f) {
        if (c.isUndefined(f)) {
            if (!c.isUndefined(l))
                return r(void 0, l)
        } else
            return r(void 0, f)
    }
    function a(l, f, p) {
        if (p in t)
            return r(l, f);
        if (p in e)
            return r(void 0, l)
    }
    const u = {
        url: i,
        method: i,
        data: i,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (l,f)=>s(Et(l), Et(f), !0)
    };
    return c.forEach(Object.keys(e).concat(Object.keys(t)), function(f) {
        const p = u[f] || s
          , y = p(e[f], t[f], f);
        c.isUndefined(y) && p !== a || (n[f] = y)
    }),
    n
}
const hn = "1.3.4"
  , Qe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    Qe[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const St = {};
Qe.transitional = function(t, n, r) {
    function s(i, o) {
        return "[Axios v" + hn + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "")
    }
    return (i,o,a)=>{
        if (t === !1)
            throw new T(s(o, " has been removed" + (n ? " in " + n : "")),T.ERR_DEPRECATED);
        return n && !St[o] && (St[o] = !0,
        console.warn(s(o, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(i, o, a) : !0
    }
}
;
function Yr(e, t, n) {
    if (typeof e != "object")
        throw new T("options must be an object",T.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
        const i = r[s]
          , o = t[i];
        if (o) {
            const a = e[i]
              , u = a === void 0 || o(a, i, e);
            if (u !== !0)
                throw new T("option " + i + " must be " + u,T.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new T("Unknown option " + i,T.ERR_BAD_OPTION)
    }
}
const Me = {
    assertOptions: Yr,
    validators: Qe
}
  , K = Me.validators;
class be {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new gt,
            response: new gt
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = ee(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: i} = n;
        r !== void 0 && Me.assertOptions(r, {
            silentJSONParsing: K.transitional(K.boolean),
            forcedJSONParsing: K.transitional(K.boolean),
            clarifyTimeoutError: K.transitional(K.boolean)
        }, !1),
        s !== void 0 && Me.assertOptions(s, {
            encode: K.function,
            serialize: K.function
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let o;
        o = i && c.merge(i.common, i[n.method]),
        o && c.forEach(["delete", "get", "head", "post", "put", "patch", "common"], d=>{
            delete i[d]
        }
        ),
        n.headers = q.concat(o, i);
        const a = [];
        let u = !0;
        this.interceptors.request.forEach(function(w) {
            typeof w.runWhen == "function" && w.runWhen(n) === !1 || (u = u && w.synchronous,
            a.unshift(w.fulfilled, w.rejected))
        });
        const l = [];
        this.interceptors.response.forEach(function(w) {
            l.push(w.fulfilled, w.rejected)
        });
        let f, p = 0, y;
        if (!u) {
            const d = [yt.bind(this), void 0];
            for (d.unshift.apply(d, a),
            d.push.apply(d, l),
            y = d.length,
            f = Promise.resolve(n); p < y; )
                f = f.then(d[p++], d[p++]);
            return f
        }
        y = a.length;
        let h = n;
        for (p = 0; p < y; ) {
            const d = a[p++]
              , w = a[p++];
            try {
                h = d(h)
            } catch (_) {
                w.call(this, _);
                break
            }
        }
        try {
            f = yt.call(this, h)
        } catch (d) {
            return Promise.reject(d)
        }
        for (p = 0,
        y = l.length; p < y; )
            f = f.then(l[p++], l[p++]);
        return f
    }
    getUri(t) {
        t = ee(this.defaults, t);
        const n = dn(t.baseURL, t.url);
        return an(n, t.params, t.paramsSerializer)
    }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
    be.prototype[t] = function(n, r) {
        return this.request(ee(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
c.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(i, o, a) {
            return this.request(ee(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: o
            }))
        }
    }
    be.prototype[t] = n(),
    be.prototype[t + "Form"] = n(!0)
});
const _e = be;
class Ye {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        }
        );
        const r = this;
        this.promise.then(s=>{
            if (!r._listeners)
                return;
            let i = r._listeners.length;
            for (; i-- > 0; )
                r._listeners[i](s);
            r._listeners = null
        }
        ),
        this.promise.then = s=>{
            let i;
            const o = new Promise(a=>{
                r.subscribe(a),
                i = a
            }
            ).then(s);
            return o.cancel = function() {
                r.unsubscribe(i)
            }
            ,
            o
        }
        ,
        t(function(i, o, a) {
            r.reason || (r.reason = new ae(i,o,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Ye(function(s) {
                t = s
            }
            ),
            cancel: t
        }
    }
}
const es = Ye;
function ts(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function ns(e) {
    return c.isObject(e) && e.isAxiosError === !0
}
const He = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(He).forEach(([e,t])=>{
    He[t] = e
}
);
const rs = He;
function pn(e) {
    const t = new _e(e)
      , n = $t(_e.prototype.request, t);
    return c.extend(n, _e.prototype, t, {
        allOwnKeys: !0
    }),
    c.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(s) {
        return pn(ee(e, s))
    }
    ,
    n
}
const D = pn(Ze);
D.Axios = _e;
D.CanceledError = ae;
D.CancelToken = es;
D.isCancel = fn;
D.VERSION = hn;
D.toFormData = ke;
D.AxiosError = T;
D.Cancel = D.CanceledError;
D.all = function(t) {
    return Promise.all(t)
}
;
D.spread = ts;
D.isAxiosError = ns;
D.mergeConfig = ee;
D.AxiosHeaders = q;
D.formToJSON = e=>un(c.isHTMLForm(e) ? new FormData(e) : e);
D.HttpStatusCode = rs;
D.default = D;
const ss = D
  , os = "https://hideip-db.hideip.network/"
  , mn = ss.create({
    baseURL: os,
    timeout: 1e4
});
mn.interceptors.request.use(e=>e);
mn.interceptors.response.use(e=>e);
function is(e) {
    let t, n, r, s;
    return {
        c() {
            t = v("div"),
            n = I(e[0]),
            b(t, "class", "title")
        },
        m(i, o) {
            M(i, t, o),
            m(t, n),
            r || (s = z(t, "click", e[1]),
            r = !0)
        },
        p(i, [o]) {
            o & 1 && ie(n, i[0])
        },
        i: Y,
        o: Y,
        d(i) {
            i && j(t),
            r = !1,
            s()
        }
    }
}
function ls(e, t, n) {
    let {title: r} = t;
    const s = ()=>{
        window.open("https://rexlee.click", "_blank")
    }
    ;
    return e.$$set = i=>{
        "title"in i && n(0, r = i.title)
    }
    ,
    [r, s]
}
class as extends Ke {
    constructor(t) {
        super(),
        We(this, t, ls, is, Ie, {
            title: 0
        })
    }
}
const fe = (e,t)=>{
    window.localStorage.setItem(e, JSON.stringify(t))
}
  , Fe = e=>JSON.parse(window.localStorage.getItem(e));
function kt(e, t, n) {
    const r = e.slice();
    return r[57] = t[n],
    r[59] = n,
    r
}
function vt(e, t, n) {
    const r = e.slice();
    return r[60] = t[n],
    r[59] = n,
    r
}
function Ot(e) {
    let t, n = [], r = new Map, s = e[3];
    const i = o=>o[59];
    for (let o = 0; o < s.length; o += 1) {
        let a = vt(e, s, o)
          , u = i(a);
        r.set(u, n[o] = At(u, a))
    }
    return {
        c() {
            t = v("div");
            for (let o = 0; o < n.length; o += 1)
                n[o].c();
            b(t, "class", "word svelte-slrfmz")
        },
        m(o, a) {
            M(o, t, a);
            for (let u = 0; u < n.length; u += 1)
                n[u].m(t, null)
        },
        p(o, a) {
            a[0] & 262168 && (s = o[3],
            n = Kt(n, a, i, 1, o, s, r, t, Wt, At, null, vt))
        },
        d(o) {
            o && j(t);
            for (let a = 0; a < n.length; a += 1)
                n[a].d()
        }
    }
}
function At(e, t) {
    let n, r, s, i, o = t[60].text + "", a, u, l, f;
    function p() {
        return t[28](t[59])
    }
    function y() {
        return t[30](t[60], t[59])
    }
    return {
        key: e,
        first: null,
        c() {
            n = v("div"),
            r = v("div"),
            r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>',
            s = P(),
            i = v("div"),
            a = I(o),
            u = P(),
            b(r, "class", "svelte-slrfmz"),
            ze(i, "font-size", "14px"),
            ze(i, "margin-left", "15px"),
            b(i, "class", "svelte-slrfmz"),
            b(n, "class", "words svelte-slrfmz"),
            V(n, "choose", t[59] === t[4] ? "choose" : ""),
            this.first = n
        },
        m(h, d) {
            M(h, n, d),
            m(n, r),
            m(n, s),
            m(n, i),
            m(i, a),
            m(n, u),
            l || (f = [z(n, "mouseenter", p), z(n, "mouseleave", t[29]), z(n, "click", y)],
            l = !0)
        },
        p(h, d) {
            t = h,
            d[0] & 8 && o !== (o = t[60].text + "") && ie(a, o),
            d[0] & 24 && V(n, "choose", t[59] === t[4] ? "choose" : "")
        },
        d(h) {
            h && j(n),
            l = !1,
            G(f)
        }
    }
}
function Rt(e) {
    let t, n = [], r = new Map, s = e[11];
    const i = o=>o[59];
    for (let o = 0; o < s.length; o += 1) {
        let a = kt(e, s, o)
          , u = i(a);
        r.set(u, n[o] = Ct(u, a))
    }
    return {
        c() {
            t = v("div");
            for (let o = 0; o < n.length; o += 1)
                n[o].c();
            b(t, "class", "bookmark svelte-slrfmz")
        },
        m(o, a) {
            M(o, t, a);
            for (let u = 0; u < n.length; u += 1)
                n[u].m(t, null)
        },
        p(o, a) {
            a[0] & 15210496 && (s = o[11],
            n = Kt(n, a, i, 1, o, s, r, t, Wt, Ct, null, kt))
        },
        d(o) {
            o && j(t);
            for (let a = 0; a < n.length; a += 1)
                n[a].d()
        }
    }
}
function Tt(e) {
    let t, n, r;
    function s() {
        return e[32](e[59])
    }
    return {
        c() {
            t = v("div"),
            t.textContent = "...",
            b(t, "class", "edit svelte-slrfmz")
        },
        m(i, o) {
            M(i, t, o),
            n || (r = z(t, "click", s),
            n = !0)
        },
        p(i, o) {
            e = i
        },
        d(i) {
            i && j(t),
            n = !1,
            r()
        }
    }
}
function Ct(e, t) {
    let n, r, s, i, o, a, u, l, f, p, y, h, d = t[57].name + "", w, _, L, F;
    function O() {
        return t[31](t[59], t[57])
    }
    let k = t[59] !== t[11].length - 1 && Tt(t);
    function N() {
        return t[33](t[57])
    }
    function E() {
        return t[34](t[57], t[59])
    }
    function R() {
        return t[36](t[59], t[57])
    }
    return {
        key: e,
        first: null,
        c() {
            n = v("div"),
            r = v("div"),
            s = v("img"),
            o = P(),
            k && k.c(),
            a = P(),
            u = v("div"),
            l = v("div"),
            l.textContent = "edit",
            f = P(),
            p = v("div"),
            p.textContent = "remove",
            y = P(),
            h = v("div"),
            w = I(d),
            _ = P(),
            ct(s.src, i = t[57].icon) || b(s, "src", i),
            b(s, "alt", ""),
            b(s, "srcset", ""),
            b(s, "class", "svelte-slrfmz"),
            b(l, "class", "svelte-slrfmz"),
            b(p, "class", "svelte-slrfmz"),
            b(u, "class", "dlog svelte-slrfmz"),
            V(u, "dlogShow", t[12] == t[59] ? "dlogShow" : ""),
            V(u, "dlogClose", t[12] !== t[59] ? "dlogClose" : ""),
            b(r, "class", "img svelte-slrfmz"),
            b(h, "class", "text svelte-slrfmz"),
            b(n, "class", "mbox svelte-slrfmz"),
            this.first = n
        },
        m(S, A) {
            M(S, n, A),
            m(n, r),
            m(r, s),
            m(r, o),
            k && k.m(r, null),
            m(r, a),
            m(r, u),
            m(u, l),
            m(u, f),
            m(u, p),
            m(n, y),
            m(n, h),
            m(h, w),
            m(n, _),
            L || (F = [z(s, "click", O), z(l, "click", N), z(p, "click", E), z(u, "mouseleave", t[35]), z(h, "click", R)],
            L = !0)
        },
        p(S, A) {
            t = S,
            A[0] & 2048 && !ct(s.src, i = t[57].icon) && b(s, "src", i),
            t[59] !== t[11].length - 1 ? k ? k.p(t, A) : (k = Tt(t),
            k.c(),
            k.m(r, a)) : k && (k.d(1),
            k = null),
            A[0] & 6144 && V(u, "dlogShow", t[12] == t[59] ? "dlogShow" : ""),
            A[0] & 6144 && V(u, "dlogClose", t[12] !== t[59] ? "dlogClose" : ""),
            A[0] & 2048 && d !== (d = t[57].name + "") && ie(w, d)
        },
        d(S) {
            S && j(n),
            k && k.d(),
            L = !1,
            G(F)
        }
    }
}
function Lt(e) {
    let t, n, r, s, i, o, a, u, l, f, p, y, h, d, w, _, L, F, O, k, N, E, R, S, A = e[7] && Nt(), U = e[8] && Pt();
    return {
        c() {
            t = v("div"),
            n = v("div"),
            r = v("h2"),
            s = I(e[13]),
            i = I(" bookmark"),
            o = P(),
            a = v("div"),
            u = v("p"),
            u.innerHTML = '<span style="color: #b83941;">*</span> Name',
            l = P(),
            f = v("input"),
            p = P(),
            A && A.c(),
            y = P(),
            h = v("div"),
            d = v("p"),
            d.innerHTML = '<span style="color: #b83941;">*</span> Website',
            w = P(),
            _ = v("input"),
            L = P(),
            U && U.c(),
            F = P(),
            O = v("div"),
            k = v("div"),
            k.textContent = "Cancel",
            N = P(),
            E = v("div"),
            E.textContent = "Confirm",
            b(u, "class", "svelte-slrfmz"),
            b(f, "id", "inpt"),
            b(f, "type", "text"),
            b(f, "placeholder", "Please enter a name"),
            b(f, "class", "svelte-slrfmz"),
            b(a, "class", "svelte-slrfmz"),
            b(d, "class", "svelte-slrfmz"),
            b(_, "id", "inpt"),
            b(_, "type", "text"),
            b(_, "placeholder", "https://www.google.com"),
            b(_, "class", "svelte-slrfmz"),
            b(h, "class", "svelte-slrfmz"),
            b(k, "class", "svelte-slrfmz"),
            b(E, "class", "notdone svelte-slrfmz"),
            V(E, "done", e[9] ? "done" : ""),
            b(O, "class", "bc svelte-slrfmz"),
            b(n, "class", "mobox svelte-slrfmz"),
            b(t, "class", "modal svelte-slrfmz")
        },
        m(x, W) {
            M(x, t, W),
            m(t, n),
            m(n, r),
            m(r, s),
            m(r, i),
            m(n, o),
            m(n, a),
            m(a, u),
            m(a, l),
            m(a, f),
            Q(f, e[0].title),
            m(a, p),
            A && A.m(a, null),
            m(n, y),
            m(n, h),
            m(h, d),
            m(h, w),
            m(h, _),
            Q(_, e[0].siteLink),
            m(h, L),
            U && U.m(h, null),
            m(n, F),
            m(n, O),
            m(O, k),
            m(O, N),
            m(O, E),
            R || (S = [z(f, "input", e[37]), z(f, "focus", e[38]), z(_, "input", e[39]), z(_, "focus", e[40]), z(k, "click", e[41]), z(E, "click", e[42])],
            R = !0)
        },
        p(x, W) {
            W[0] & 8192 && ie(s, x[13]),
            W[0] & 1 && f.value !== x[0].title && Q(f, x[0].title),
            x[7] ? A || (A = Nt(),
            A.c(),
            A.m(a, null)) : A && (A.d(1),
            A = null),
            W[0] & 1 && _.value !== x[0].siteLink && Q(_, x[0].siteLink),
            x[8] ? U || (U = Pt(),
            U.c(),
            U.m(h, null)) : U && (U.d(1),
            U = null),
            W[0] & 512 && V(E, "done", x[9] ? "done" : "")
        },
        d(x) {
            x && j(t),
            A && A.d(),
            U && U.d(),
            R = !1,
            G(S)
        }
    }
}
function Nt(e) {
    let t;
    return {
        c() {
            t = v("span"),
            t.textContent = "name erros",
            b(t, "class", "dwar svelte-slrfmz")
        },
        m(n, r) {
            M(n, t, r)
        },
        d(n) {
            n && j(t)
        }
    }
}
function Pt(e) {
    let t;
    return {
        c() {
            t = v("span"),
            t.textContent = "siteurl error",
            b(t, "class", "dwar svelte-slrfmz")
        },
        m(n, r) {
            M(n, t, r)
        },
        d(n) {
            n && j(t)
        }
    }
}
function Ft(e) {
    let t, n, r, s, i, o, a, u, l, f;
    return {
        c() {
            t = v("div"),
            n = v("div"),
            n.textContent = "Access denied",
            r = P(),
            s = v("div"),
            i = I("Sir,"),
            o = v("b"),
            o.textContent = `${fs}`,
            a = I(` has been banned by the\r
                hideip.network`),
            u = P(),
            l = v("div"),
            f = I(e[6]),
            b(n, "class", "ban-title svelte-slrfmz"),
            ze(o, "color", "#b83941"),
            b(s, "class", "ban-text svelte-slrfmz"),
            b(l, "class", "ban-time svelte-slrfmz"),
            b(t, "class", "ban svelte-slrfmz")
        },
        m(p, y) {
            M(p, t, y),
            m(t, n),
            m(t, r),
            m(t, s),
            m(s, i),
            m(s, o),
            m(s, a),
            m(t, u),
            m(t, l),
            m(l, f)
        },
        p(p, y) {
            y[0] & 64 && ie(f, p[6])
        },
        d(p) {
            p && j(t)
        }
    }
}
function Bt(e) {
    let t;
    return {
        c() {
            t = v("div"),
            t.textContent = "Loading...",
            b(t, "class", "loading svelte-slrfmz")
        },
        m(n, r) {
            M(n, t, r)
        },
        d(n) {
            n && j(t)
        }
    }
}
function cs(e) {
    let t, n, r, s, i, o, a, u, l, f, p, y, h, d, w, _, L, F;
    s = new as({
        props: {
            title: "Rex Lee's HNet"
        }
    });
    let O = e[2] !== "" && Ot(e)
      , k = e[14] && Rt(e)
      , N = e[10] && Lt(e)
      , E = e[5] && Ft(e)
      , R = e[15] && Bt();
    return {
        c() {
            t = v("main"),
            n = v("div"),
            r = v("div"),
            Vt(s.$$.fragment),
            i = P(),
            o = v("div"),
            a = v("div"),
            a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>',
            u = P(),
            l = v("input"),
            p = P(),
            O && O.c(),
            y = P(),
            k && k.c(),
            h = P(),
            N && N.c(),
            d = P(),
            E && E.c(),
            w = P(),
            R && R.c(),
            b(r, "class", "title svelte-slrfmz"),
            b(a, "class", "search-svg svelte-slrfmz"),
            b(l, "type", "text"),
            b(l, "name", "q"),
            b(l, "id", "q"),
            b(l, "class", f = ut(e[1] ? "input-none" : "") + " svelte-slrfmz"),
            b(l, "placeholder", us),
            b(o, "class", "search-box svelte-slrfmz"),
            b(n, "class", "box svelte-slrfmz")
        },
        m(S, A) {
            M(S, t, A),
            m(t, n),
            m(n, r),
            qe(s, r, null),
            m(n, i),
            m(n, o),
            m(o, a),
            m(o, u),
            m(o, l),
            Q(l, e[2]),
            m(o, p),
            O && O.m(o, null),
            m(n, y),
            k && k.m(n, null),
            m(t, h),
            N && N.m(t, null),
            m(t, d),
            E && E.m(t, null),
            m(t, w),
            R && R.m(t, null),
            _ = !0,
            L || (F = [z(l, "input", e[24]), z(l, "focus", e[25]), z(l, "blur", e[26]), z(l, "input", e[16]), z(l, "keyup", e[27])],
            L = !0)
        },
        p(S, A) {
            (!_ || A[0] & 2 && f !== (f = ut(S[1] ? "input-none" : "") + " svelte-slrfmz")) && b(l, "class", f),
            A[0] & 4 && l.value !== S[2] && Q(l, S[2]),
            S[2] !== "" ? O ? O.p(S, A) : (O = Ot(S),
            O.c(),
            O.m(o, null)) : O && (O.d(1),
            O = null),
            S[14] ? k ? k.p(S, A) : (k = Rt(S),
            k.c(),
            k.m(n, null)) : k && (k.d(1),
            k = null),
            S[10] ? N ? N.p(S, A) : (N = Lt(S),
            N.c(),
            N.m(t, d)) : N && (N.d(1),
            N = null),
            S[5] ? E ? E.p(S, A) : (E = Ft(S),
            E.c(),
            E.m(t, w)) : E && (E.d(1),
            E = null),
            S[15] ? R || (R = Bt(),
            R.c(),
            R.m(t, null)) : R && (R.d(1),
            R = null)
        },
        i(S) {
            _ || (Ee(s.$$.fragment, S),
            _ = !0)
        },
        o(S) {
            Jt(s.$$.fragment, S),
            _ = !1
        },
        d(S) {
            S && j(t),
            Je(s),
            O && O.d(),
            k && k.d(),
            N && N.d(),
            E && E.d(),
            R && R.d(),
            L = !1,
            G(F)
        }
    }
}
let us = "Search on HNet, or enter a URL"
  , zt = "https://www.google.com/search?safe=on&q="
  , fs = "hideip.network";
function Dt(e) {
    var t = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");
    return !!t.test(e)
}
function ds(e, t, n) {
    let r = !1
      , s = ""
      , i = []
      , o = -1
      , a = null
      , u = !1
      , l = 5
      , f = null
      , p = !1
      , y = !1
      , h = {
        title: "",
        siteLink: ""
    }
      , d = !1
      , w = !1
      , _ = [{
        icon: "https://api.faviconkit.com/www.youtube.com/",
        name: "Youtube",
        link: "https://www.youtube.com"
    }, {
        icon: "https://api.faviconkit.com/www.bilibili.com/",
        name: "BiliBili",
        link: "https://www.bilibili.com/"
    }, {
        icon: "https://api.faviconkit.com/www.netflix.com/",
        name: "Netflix",
        link: "https://www.netflix.com/"
    }, {
        icon: "https://api.faviconkit.com/www.disneyplus.com/",
        name: "Disney+",
        link: "https://www.disneyplus.com/"
    }, {
        icon: "https://api.faviconkit.com/www.hbomax.com/",
        name: "HBO MAX",
        link: "https://www.hbomax.com/"
    }, {
        icon: "https://api.faviconkit.com/www.primevideo.com/",
        name: "Prime Video",
        link: "https://www.primevideo.com/"
    }, {
        icon: "https://api.faviconkit.com/open.spotify.com/",
        name: "Spotify",
        link: "https://open.spotify.com/"
    }, {
        icon: "https://api.faviconkit.com/twitter.com/",
        name: "Twitter",
        link: "https://twitter.com/"
    }, {
        icon: "https://api.faviconkit.com/github.com/",
        name: "GitHub",
        link: "https://github.com/"
    }, {
        icon: "https://api.faviconkit.com/kp.m-team.cc/",
        name: "M-Team",
        link: "https://kp.m-team.cc/"
    }, {
        icon: "https://api.faviconkit.com/shoelac3.carrd.co/",
        name: "Shoe Lace",
        link: "https://shoelac3.carrd.co/"
    }, {
        icon: "https://store.heytapimage.com/cdo-portal/feedback/202210/17/b9eb8499d97c5ad0f064f5059116c129.png",
        name: "Add BM",
        link: "https://hideip.network"
    }]
      , L = -1
      , F = -1
      , O = "Add"
      , k = !0
      , N = !1;
    const E = g=>{
        g.preventDefault(),
        a = new Date().getTime()
    }
      , R = g=>{
        g.preventDefault(),
        new Date().getTime() - a <= 5 && S()
    }
      , S = ()=>{
        window.navigator && navigator.serviceWorker && navigator.serviceWorker.getRegistrations().then(function(g) {
            for (let C of g)
                C.unregister()
        })
    }
      , A = g=>`https://api.faviconkit.com/${g.replace(/^https?\:\/\//i, "")}`
      , U = ()=>window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
    It(()=>{
        window.addEventListener("beforeunload", B=>R(B)),
        window.addEventListener("unload", B=>E(B)),
        window.clearInterval(f),
        Fe("book") ? n(11, _ = Fe("book")) : fe("book", _),
        U() && window.location.replace("https://www.baidu.com");
        let g = window.location.hash.replace("#", "")
          , C = window.location.search;
        g !== "" && C == "?s=" && (n(15, N = !0),
        window.addEventListener("DOMContentLoaded", ()=>{
            window.navigator.serviceWorker.register("./sw.js?cros", {
                scope: __uv$config.prefix
            }).then(()=>{
                let B = g.trim();
                Dt(B) ? B.startsWith("https://") || B.startsWith("http://") || (B = "http://" + B) : B = zt + B,
                window.location.href = __uv$config.prefix + __uv$config.encodeUrl(B)
            }
            )
        }
        ))
    }
    ),
    jn(()=>{
        window.addEventListener("beforeunload", g=>R(g)),
        window.addEventListener("unload", g=>E(g)),
        window.clearInterval(f)
    }
    );
    function x() {
        gn(),
        s == "" ? (n(1, r = !1),
        n(3, i = []),
        n(14, k = !0)) : (n(1, r = !0),
        n(14, k = !1))
    }
    function W(g) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (n(15, N = !0),
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(g)) : window.open(__uv$config.prefix + __uv$config.encodeUrl(g), "_blank")
    }
    function Ae(g) {
        window.navigator.serviceWorker.register("./sw.js?cros", {
            scope: __uv$config.prefix
        }).then(()=>{
            let C = g.trim();
            Dt(C) ? C.startsWith("https://") || C.startsWith("http://") || (C = "http://" + C) : C = zt + C,
            W(C)
        }
        )
    }
    async function et(g) {
        if (g.key === "Enter") {
            let C = s.trim();
            Ae(C)
        }
    }
    function tt(g, C) {
        Ae(g.url)
    }
    const Re = async(g,C)=>{
        const B = _.length - 1;
        if (g == B)
            n(10, w = !0);
        else {
            let ce = C.link.trim();
            Ae(ce)
        }
    }
    ;
    function nt() {
        if (h.title == "" && n(7, p = !0),
        h.siteLink == "") {
            n(8, y = !0);
            return
        }
        if (!/^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(h.siteLink)) {
            n(8, y = !0);
            return
        }
        let g = {
            icon: A(h.siteLink),
            name: h.title,
            link: h.siteLink
        };
        O == "edit" ? (_.forEach((C,B)=>{
            B == F && (n(11, _[B].name = h.title, _),
            n(11, _[B].link = h.siteLink, _))
        }
        ),
        fe("book", _),
        n(13, O = null)) : (n(11, _ = [...[g], ..._]),
        fe("book", [..._])),
        n(10, w = !1),
        n(0, h = {
            title: "",
            siteLink: ""
        })
    }
    function rt(g) {
        F = g,
        n(12, L = g);
        const C = _.length - 1;
        L != C
    }
    function st(g) {
        n(10, w = !0),
        n(13, O = "Edit"),
        n(0, h = {
            title: g.name,
            siteLink: g.link
        })
    }
    function ot(g, C) {
        n(11, _ = Fe("book")),
        _.map((B,ce)=>{
            B.name === g.name && (_.splice(ce, 1),
            fe("book", _))
        }
        )
    }
    function gn() {
        const g = `https://suggestion.baidu.com/su?wd='${s}'&p=3&cb=window.baidu.sug`;
        window.baidu = {
            sug(B) {
                let it = B.s.map(lt=>({
                    text: lt,
                    url: lt
                }));
                if (s == "")
                    return i;
                it.length === 0 || n(3, i = it)
            }
        };
        var C = document.createElement("script");
        C.src = g,
        document.getElementsByTagName("head")[0].appendChild(C)
    }
    function _n() {
        s = this.value,
        n(2, s)
    }
    const bn = g=>{
        n(1, r = !0)
    }
      , yn = g=>{
        s !== "" ? n(1, r = !0) : n(1, r = !1)
    }
      , En = g=>et(g)
      , Sn = g=>{
        n(4, o = g)
    }
      , kn = ()=>{
        n(4, o = -1)
    }
      , vn = (g,C)=>{
        tt(g)
    }
      , On = (g,C)=>{
        Re(g, C)
    }
      , An = g=>{
        rt(g)
    }
      , Rn = g=>{
        st(g)
    }
      , Tn = (g,C)=>{
        ot(g)
    }
      , Cn = ()=>{
        n(12, L = -1)
    }
      , Ln = (g,C)=>{
        Re(g, C)
    }
    ;
    function Nn() {
        h.title = this.value,
        n(0, h)
    }
    const Pn = ()=>{
        n(7, p = !1)
    }
    ;
    function Fn() {
        h.siteLink = this.value,
        n(0, h)
    }
    const Bn = ()=>{
        n(8, y = !1)
    }
      , zn = ()=>{
        n(10, w = !1),
        n(7, p = n(8, y = !1)),
        n(0, h = {
            title: "",
            siteLink: ""
        }),
        n(13, O = "Add")
    }
      , Dn = ()=>{
        nt()
    }
    ;
    return e.$$.update = ()=>{
        e.$$.dirty[0] & 1 && (h.title !== "" && h.siteLink !== "" ? n(9, d = !0) : n(9, d = !1))
    }
    ,
    [h, r, s, i, o, u, l, p, y, d, w, _, L, O, k, N, x, et, tt, Re, nt, rt, st, ot, _n, bn, yn, En, Sn, kn, vn, On, An, Rn, Tn, Cn, Ln, Nn, Pn, Fn, Bn, zn, Dn]
}
class hs extends Ke {
    constructor(t) {
        super(),
        We(this, t, ds, cs, Ie, {}, null, [-1, -1])
    }
}
var ye = function() {
    return ye = Object.assign || function(t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    ye.apply(this, arguments)
}
  , ps = {
    clear: !0,
    debug: !0,
    debugTime: 3e3,
    bfcache: !0
}
  , wn = {
    Chrome: 0,
    Firefox: 1,
    Safari: 2
}
  , ms = function(t) {
    return t ? t[0] !== "/" ? "/".concat(t) : t : "/"
}
  , Ut = function(t) {
    return ~navigator.userAgent.toLowerCase().indexOf(t)
}
  , ws = function(t) {
    return typeof t == "string"
}
  , xt = function(t, n) {
    if (n === wn.Safari) {
        location.replace(t);
        return
    }
    location.href = t
}
  , gs = 0
  , Be = 0
  , de = function(t) {
    var n = 0
      , r = 1 << gs++;
    return function() {
        Be && !(Be & r) || (n++,
        n === 2 && (Be |= r,
        t(),
        n = 1))
    }
}
  , _s = function(t) {
    var n = new Error;
    Object.defineProperty(n, "message", {
        get: function() {
            t()
        }
    }),
    console.log(n)
}
  , bs = function(t) {
    var n = /./;
    n.toString = de(t);
    var r = function() {
        return n
    };
    r.toString = de(t);
    var s = new Date;
    s.toString = de(t),
    console.log("%c", r, r(), s);
    var i = de(t);
    _s(i)
}
  , ys = function(t) {
    var n = /./;
    n.toString = t,
    console.log(n)
}
  , Es = function(t) {
    var n = new Image;
    Object.defineProperty(n, "id", {
        get: function() {
            t(wn.Safari)
        }
    }),
    console.log(n)
}
  , Ss = function() {
    function e(t) {
        var n = ye(ye({}, ps), t)
          , r = n.clear
          , s = n.debug
          , i = n.debugTime
          , o = n.callback
          , a = n.redirect
          , u = n.write
          , l = n.bfcache;
        this._debug = s,
        this._debugTime = i,
        this._clear = r,
        this._bfcache = l,
        this._callback = o,
        this._redirect = a,
        this._write = u
    }
    return e.prototype.clear = function() {
        this._clear && (console.clear = function() {}
        )
    }
    ,
    e.prototype.bfcache = function() {
        this._bfcache && (window.addEventListener("unload", function() {}),
        window.addEventListener("beforeunload", function() {}))
    }
    ,
    e.prototype.debug = function() {
        if (this._debug) {
            var t = new Function("debugger");
            setInterval(t, this._debugTime)
        }
    }
    ,
    e.prototype.redirect = function(t) {
        var n = this._redirect;
        if (n) {
            if (n.indexOf("http") === 0) {
                location.href !== n && xt(n, t);
                return
            }
            var r = location.pathname + location.search;
            ms(n) !== r && xt(n, t)
        }
    }
    ,
    e.prototype.callback = function() {
        if (!(!this._callback && !this._redirect && !this._write) && window) {
            var t = this.fire.bind(this)
              , n = window.chrome || Ut("chrome")
              , r = Ut("firefox");
            if (n) {
                bs(t);
                return
            }
            if (r) {
                ys(t);
                return
            }
            Es(t)
        }
    }
    ,
    e.prototype.write = function() {
        var t = this._write;
        t && (document.body.innerHTML = ws(t) ? t : t.innerHTML)
    }
    ,
    e.prototype.fire = function(t) {
        if (this._callback) {
            this._callback.call(null);
            return
        }
        this.redirect(t),
        !this._redirect && this.write()
    }
    ,
    e.prototype.prepare = function() {
        this.clear(),
        this.bfcache(),
        this.debug()
    }
    ,
    e.prototype.ban = function() {
        this.prepare(),
        this.callback()
    }
    ,
    e
}()
  , ks = function(t) {
    var n = new Ss(t);
    n.ban()
};
document.oncontextmenu = function() {
    return !1
}
;
document.onkeydown = function(e) {
    if (e.shiftKey && e.ctrlKey && e.keyCode === 73)
        return !1;
    if (e.shiftKey && e.ctrlKey && e.keyCode === 74)
        return !1;
    if (e.ctrlKey && e.keyCode === 83 || e.keyCode === 123)
        return !1
}
;
function vs(e) {
    let t, n, r, s;
    return r = new hs({}),
    {
        c() {
            t = v("main"),
            n = v("div"),
            Vt(r.$$.fragment),
            b(n, "class", "container svelte-hm5ey0")
        },
        m(i, o) {
            M(i, t, o),
            m(t, n),
            qe(r, n, null),
            s = !0
        },
        p: Y,
        i(i) {
            s || (Ee(r.$$.fragment, i),
            s = !0)
        },
        o(i) {
            Jt(r.$$.fragment, i),
            s = !1
        },
        d(i) {
            i && j(t),
            Je(r)
        }
    }
}
function Os(e) {
    return It(()=>{
        console.log('Redirect removed.')
    }
    ),
    []
}
class As extends Ke {
    constructor(t) {
        super(),
        We(this, t, Os, vs, Ie, {})
    }
}
new As({
    target: document.getElementById("app")
});
