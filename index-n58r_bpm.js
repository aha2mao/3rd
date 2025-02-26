(function () {
  const u = document.createElement('link').relList;
  if (u && u.supports && u.supports('modulepreload')) return;
  for (const b of document.querySelectorAll('link[rel="modulepreload"]')) f(b);
  new MutationObserver((b) => {
    for (const d of b)
      if (d.type === 'childList')
        for (const q of d.addedNodes) q.tagName === 'LINK' && q.rel === 'modulepreload' && f(q);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(b) {
    const d = {};
    return (
      b.integrity && (d.integrity = b.integrity),
      b.referrerPolicy && (d.referrerPolicy = b.referrerPolicy),
      b.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : b.crossOrigin === 'anonymous'
          ? (d.credentials = 'omit')
          : (d.credentials = 'same-origin'),
      d
    );
  }
  function f(b) {
    if (b.ep) return;
    b.ep = !0;
    const d = c(b);
    fetch(b.href, d);
  }
})();
const st = '0.2.0';
var yt =
  typeof globalThis != 'undefined'
    ? globalThis
    : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
          ? self
          : {};
function dt(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default') ? a.default : a;
}
function vt(a) {
  if (a.__esModule) return a;
  var u = a.default;
  if (typeof u == 'function') {
    var c = function f() {
      return this instanceof f ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    c.prototype = u.prototype;
  } else c = {};
  return (
    Object.defineProperty(c, '__esModule', { value: !0 }),
    Object.keys(a).forEach(function (f) {
      var b = Object.getOwnPropertyDescriptor(a, f);
      Object.defineProperty(
        c,
        f,
        b.get
          ? b
          : {
            enumerable: !0,
            get: function () {
              return a[f];
            },
          },
      );
    }),
    c
  );
}
var Oe, Ar;
function mt() {
  return Ar || ((Ar = 1), (Oe = Error)), Oe;
}
var Ve, gr;
function At() {
  return gr || ((gr = 1), (Ve = EvalError)), Ve;
}
var Te, Rr;
function gt() {
  return Rr || ((Rr = 1), (Te = RangeError)), Te;
}
var We, hr;
function Rt() {
  return hr || ((hr = 1), (We = ReferenceError)), We;
}
var xe, br;
function Xr() {
  return br || ((br = 1), (xe = SyntaxError)), xe;
}
var Ne, Ir;
function ve() {
  return Ir || ((Ir = 1), (Ne = TypeError)), Ne;
}
var Ue, Sr;
function ht() {
  return Sr || ((Sr = 1), (Ue = URIError)), Ue;
}
var Be, Er;
function bt() {
  return (
    Er ||
    ((Er = 1),
      (Be = function () {
        if (typeof Symbol != 'function' || typeof Object.getOwnPropertySymbols != 'function') return !1;
        if (typeof Symbol.iterator == 'symbol') return !0;
        var u = {},
          c = Symbol('test'),
          f = Object(c);
        if (
          typeof c == 'string' ||
          Object.prototype.toString.call(c) !== '[object Symbol]' ||
          Object.prototype.toString.call(f) !== '[object Symbol]'
        )
          return !1;
        var b = 42;
        u[c] = b;
        for (c in u) return !1;
        if (
          (typeof Object.keys == 'function' && Object.keys(u).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' && Object.getOwnPropertyNames(u).length !== 0)
        )
          return !1;
        var d = Object.getOwnPropertySymbols(u);
        if (d.length !== 1 || d[0] !== c || !Object.prototype.propertyIsEnumerable.call(u, c)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var q = Object.getOwnPropertyDescriptor(u, c);
          if (q.value !== b || q.enumerable !== !0) return !1;
        }
        return !0;
      })),
    Be
  );
}
var De, Pr;
function It() {
  if (Pr) return De;
  Pr = 1;
  var a = typeof Symbol != 'undefined' && Symbol,
    u = bt();
  return (
    (De = function () {
      return typeof a != 'function' ||
        typeof Symbol != 'function' ||
        typeof a('foo') != 'symbol' ||
        typeof Symbol('bar') != 'symbol'
        ? !1
        : u();
    }),
    De
  );
}
var je, wr;
function St() {
  if (wr) return je;
  wr = 1;
  var a = { __proto__: null, foo: {} },
    u = Object;
  return (
    (je = function () {
      return { __proto__: a }.foo === a.foo && !(a instanceof u);
    }),
    je
  );
}
var Fe, Hr;
function Et() {
  if (Hr) return Fe;
  Hr = 1;
  var a = 'Function.prototype.bind called on incompatible ',
    u = Object.prototype.toString,
    c = Math.max,
    f = '[object Function]',
    b = function (w, S) {
      for (var g = [], V = 0; V < w.length; V += 1) g[V] = w[V];
      for (var I = 0; I < S.length; I += 1) g[I + w.length] = S[I];
      return g;
    },
    d = function (w, S) {
      for (var g = [], V = S, I = 0; V < w.length; V += 1, I += 1) g[I] = w[V];
      return g;
    },
    q = function (O, w) {
      for (var S = '', g = 0; g < O.length; g += 1) (S += O[g]), g + 1 < O.length && (S += w);
      return S;
    };
  return (
    (Fe = function (w) {
      var S = this;
      if (typeof S != 'function' || u.apply(S) !== f) throw new TypeError(a + S);
      for (
        var g = d(arguments, 1),
        V,
        I = function () {
          if (this instanceof V) {
            var o = S.apply(this, b(g, arguments));
            return Object(o) === o ? o : this;
          }
          return S.apply(w, b(g, arguments));
        },
        s = c(0, S.length - g.length),
        H = [],
        v = 0;
        v < s;
        v++
      )
        H[v] = '$' + v;
      if (
        ((V = Function('binder', 'return function (' + q(H, ',') + '){ return binder.apply(this,arguments); }')(I)),
          S.prototype)
      ) {
        var r = function () { };
        (r.prototype = S.prototype), (V.prototype = new r()), (r.prototype = null);
      }
      return V;
    }),
    Fe
  );
}
var Le, qr;
function nr() {
  if (qr) return Le;
  qr = 1;
  var a = Et();
  return (Le = Function.prototype.bind || a), Le;
}
var ke, Or;
function Pt() {
  if (Or) return ke;
  Or = 1;
  var a = Function.prototype.call,
    u = Object.prototype.hasOwnProperty,
    c = nr();
  return (ke = c.call(a, u)), ke;
}
var Ke, Vr;
function se() {
  if (Vr) return Ke;
  Vr = 1;
  var a,
    u = mt(),
    c = At(),
    f = gt(),
    b = Rt(),
    d = Xr(),
    q = ve(),
    O = ht(),
    w = Function,
    S = function (F) {
      try {
        return w('"use strict"; return (' + F + ').constructor;')();
      } catch (E) { }
    },
    g = Object.getOwnPropertyDescriptor;
  if (g)
    try {
      g({}, '');
    } catch (F) {
      g = null;
    }
  var V = function () {
    throw new q();
  },
    I = g
      ? (function () {
        try {
          return arguments.callee, V;
        } catch (F) {
          try {
            return g(arguments, 'callee').get;
          } catch (E) {
            return V;
          }
        }
      })()
      : V,
    s = It()(),
    H = St()(),
    v =
      Object.getPrototypeOf ||
      (H
        ? function (F) {
          return F.__proto__;
        }
        : null),
    r = {},
    o = typeof Uint8Array == 'undefined' || !v ? a : v(Uint8Array),
    i = {
      __proto__: null,
      '%AggregateError%': typeof AggregateError == 'undefined' ? a : AggregateError,
      '%Array%': Array,
      '%ArrayBuffer%': typeof ArrayBuffer == 'undefined' ? a : ArrayBuffer,
      '%ArrayIteratorPrototype%': s && v ? v([][Symbol.iterator]()) : a,
      '%AsyncFromSyncIteratorPrototype%': a,
      '%AsyncFunction%': r,
      '%AsyncGenerator%': r,
      '%AsyncGeneratorFunction%': r,
      '%AsyncIteratorPrototype%': r,
      '%Atomics%': typeof Atomics == 'undefined' ? a : Atomics,
      '%BigInt%': typeof BigInt == 'undefined' ? a : BigInt,
      '%BigInt64Array%': typeof BigInt64Array == 'undefined' ? a : BigInt64Array,
      '%BigUint64Array%': typeof BigUint64Array == 'undefined' ? a : BigUint64Array,
      '%Boolean%': Boolean,
      '%DataView%': typeof DataView == 'undefined' ? a : DataView,
      '%Date%': Date,
      '%decodeURI%': decodeURI,
      '%decodeURIComponent%': decodeURIComponent,
      '%encodeURI%': encodeURI,
      '%encodeURIComponent%': encodeURIComponent,
      '%Error%': u,
      '%eval%': eval,
      '%EvalError%': c,
      '%Float32Array%': typeof Float32Array == 'undefined' ? a : Float32Array,
      '%Float64Array%': typeof Float64Array == 'undefined' ? a : Float64Array,
      '%FinalizationRegistry%': typeof FinalizationRegistry == 'undefined' ? a : FinalizationRegistry,
      '%Function%': w,
      '%GeneratorFunction%': r,
      '%Int8Array%': typeof Int8Array == 'undefined' ? a : Int8Array,
      '%Int16Array%': typeof Int16Array == 'undefined' ? a : Int16Array,
      '%Int32Array%': typeof Int32Array == 'undefined' ? a : Int32Array,
      '%isFinite%': isFinite,
      '%isNaN%': isNaN,
      '%IteratorPrototype%': s && v ? v(v([][Symbol.iterator]())) : a,
      '%JSON%': typeof JSON == 'object' ? JSON : a,
      '%Map%': typeof Map == 'undefined' ? a : Map,
      '%MapIteratorPrototype%': typeof Map == 'undefined' || !s || !v ? a : v(new Map()[Symbol.iterator]()),
      '%Math%': Math,
      '%Number%': Number,
      '%Object%': Object,
      '%parseFloat%': parseFloat,
      '%parseInt%': parseInt,
      '%Promise%': typeof Promise == 'undefined' ? a : Promise,
      '%Proxy%': typeof Proxy == 'undefined' ? a : Proxy,
      '%RangeError%': f,
      '%ReferenceError%': b,
      '%Reflect%': typeof Reflect == 'undefined' ? a : Reflect,
      '%RegExp%': RegExp,
      '%Set%': typeof Set == 'undefined' ? a : Set,
      '%SetIteratorPrototype%': typeof Set == 'undefined' || !s || !v ? a : v(new Set()[Symbol.iterator]()),
      '%SharedArrayBuffer%': typeof SharedArrayBuffer == 'undefined' ? a : SharedArrayBuffer,
      '%String%': String,
      '%StringIteratorPrototype%': s && v ? v(''[Symbol.iterator]()) : a,
      '%Symbol%': s ? Symbol : a,
      '%SyntaxError%': d,
      '%ThrowTypeError%': I,
      '%TypedArray%': o,
      '%TypeError%': q,
      '%Uint8Array%': typeof Uint8Array == 'undefined' ? a : Uint8Array,
      '%Uint8ClampedArray%': typeof Uint8ClampedArray == 'undefined' ? a : Uint8ClampedArray,
      '%Uint16Array%': typeof Uint16Array == 'undefined' ? a : Uint16Array,
      '%Uint32Array%': typeof Uint32Array == 'undefined' ? a : Uint32Array,
      '%URIError%': O,
      '%WeakMap%': typeof WeakMap == 'undefined' ? a : WeakMap,
      '%WeakRef%': typeof WeakRef == 'undefined' ? a : WeakRef,
      '%WeakSet%': typeof WeakSet == 'undefined' ? a : WeakSet,
    };
  if (v)
    try {
      null.error;
    } catch (F) {
      var p = v(v(F));
      i['%Error.prototype%'] = p;
    }
  var m = function F(E) {
    var B;
    if (E === '%AsyncFunction%') B = S('async function () {}');
    else if (E === '%GeneratorFunction%') B = S('function* () {}');
    else if (E === '%AsyncGeneratorFunction%') B = S('async function* () {}');
    else if (E === '%AsyncGenerator%') {
      var D = F('%AsyncGeneratorFunction%');
      D && (B = D.prototype);
    } else if (E === '%AsyncIteratorPrototype%') {
      var k = F('%AsyncGenerator%');
      k && v && (B = v(k.prototype));
    }
    return (i[E] = B), B;
  },
    y = {
      __proto__: null,
      '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
      '%ArrayPrototype%': ['Array', 'prototype'],
      '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
      '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
      '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
      '%ArrayProto_values%': ['Array', 'prototype', 'values'],
      '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
      '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
      '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
      '%BooleanPrototype%': ['Boolean', 'prototype'],
      '%DataViewPrototype%': ['DataView', 'prototype'],
      '%DatePrototype%': ['Date', 'prototype'],
      '%ErrorPrototype%': ['Error', 'prototype'],
      '%EvalErrorPrototype%': ['EvalError', 'prototype'],
      '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
      '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
      '%FunctionPrototype%': ['Function', 'prototype'],
      '%Generator%': ['GeneratorFunction', 'prototype'],
      '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
      '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
      '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
      '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
      '%JSONParse%': ['JSON', 'parse'],
      '%JSONStringify%': ['JSON', 'stringify'],
      '%MapPrototype%': ['Map', 'prototype'],
      '%NumberPrototype%': ['Number', 'prototype'],
      '%ObjectPrototype%': ['Object', 'prototype'],
      '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
      '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
      '%PromisePrototype%': ['Promise', 'prototype'],
      '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
      '%Promise_all%': ['Promise', 'all'],
      '%Promise_reject%': ['Promise', 'reject'],
      '%Promise_resolve%': ['Promise', 'resolve'],
      '%RangeErrorPrototype%': ['RangeError', 'prototype'],
      '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
      '%RegExpPrototype%': ['RegExp', 'prototype'],
      '%SetPrototype%': ['Set', 'prototype'],
      '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
      '%StringPrototype%': ['String', 'prototype'],
      '%SymbolPrototype%': ['Symbol', 'prototype'],
      '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
      '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
      '%TypeErrorPrototype%': ['TypeError', 'prototype'],
      '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
      '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
      '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
      '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
      '%URIErrorPrototype%': ['URIError', 'prototype'],
      '%WeakMapPrototype%': ['WeakMap', 'prototype'],
      '%WeakSetPrototype%': ['WeakSet', 'prototype'],
    },
    R = nr(),
    t = Pt(),
    l = R.call(Function.call, Array.prototype.concat),
    h = R.call(Function.apply, Array.prototype.splice),
    A = R.call(Function.call, String.prototype.replace),
    T = R.call(Function.call, String.prototype.slice),
    P = R.call(Function.call, RegExp.prototype.exec),
    x = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    G = /\\(\\)?/g,
    U = function (E) {
      var B = T(E, 0, 1),
        D = T(E, -1);
      if (B === '%' && D !== '%') throw new d('invalid intrinsic syntax, expected closing `%`');
      if (D === '%' && B !== '%') throw new d('invalid intrinsic syntax, expected opening `%`');
      var k = [];
      return (
        A(E, x, function (z, ee, L, Q) {
          k[k.length] = L ? A(Q, G, '$1') : ee || z;
        }),
        k
      );
    },
    M = function (E, B) {
      var D = E,
        k;
      if ((t(y, D) && ((k = y[D]), (D = '%' + k[0] + '%')), t(i, D))) {
        var z = i[D];
        if ((z === r && (z = m(D)), typeof z == 'undefined' && !B))
          throw new q('intrinsic ' + E + ' exists, but is not available. Please file an issue!');
        return { alias: k, name: D, value: z };
      }
      throw new d('intrinsic ' + E + ' does not exist!');
    };
  return (
    (Ke = function (E, B) {
      if (typeof E != 'string' || E.length === 0) throw new q('intrinsic name must be a non-empty string');
      if (arguments.length > 1 && typeof B != 'boolean') throw new q('"allowMissing" argument must be a boolean');
      if (P(/^%?[^%]*%?$/, E) === null)
        throw new d('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
      var D = U(E),
        k = D.length > 0 ? D[0] : '',
        z = M('%' + k + '%', B),
        ee = z.name,
        L = z.value,
        Q = !1,
        ne = z.alias;
      ne && ((k = ne[0]), h(D, l([0, 1], ne)));
      for (var ae = 1, J = !0; ae < D.length; ae += 1) {
        var Z = D[ae],
          C = T(Z, 0, 1),
          re = T(Z, -1);
        if ((C === '"' || C === "'" || C === '`' || re === '"' || re === "'" || re === '`') && C !== re)
          throw new d('property names with quotes must have matching quotes');
        if (((Z === 'constructor' || !J) && (Q = !0), (k += '.' + Z), (ee = '%' + k + '%'), t(i, ee))) L = i[ee];
        else if (L != null) {
          if (!(Z in L)) {
            if (!B) throw new q('base intrinsic for ' + E + ' exists, but the property is not available.');
            return;
          }
          if (g && ae + 1 >= D.length) {
            var te = g(L, Z);
            (J = !!te), J && 'get' in te && !('originalValue' in te.get) ? (L = te.get) : (L = L[Z]);
          } else (J = t(L, Z)), (L = L[Z]);
          J && !Q && (i[ee] = L);
        }
      }
      return L;
    }),
    Ke
  );
}
var Ge = { exports: {} },
  ze,
  Tr;
function ar() {
  if (Tr) return ze;
  Tr = 1;
  var a = se(),
    u = a('%Object.defineProperty%', !0) || !1;
  if (u)
    try {
      u({}, 'a', { value: 1 });
    } catch (c) {
      u = !1;
    }
  return (ze = u), ze;
}
var Ze, Wr;
function Mr() {
  if (Wr) return Ze;
  Wr = 1;
  var a = se(),
    u = a('%Object.getOwnPropertyDescriptor%', !0);
  if (u)
    try {
      u([], 'length');
    } catch (c) {
      u = null;
    }
  return (Ze = u), Ze;
}
var Ce, xr;
function wt() {
  if (xr) return Ce;
  xr = 1;
  var a = ar(),
    u = Xr(),
    c = ve(),
    f = Mr();
  return (
    (Ce = function (d, q, O) {
      if (!d || (typeof d != 'object' && typeof d != 'function')) throw new c('`obj` must be an object or a function`');
      if (typeof q != 'string' && typeof q != 'symbol') throw new c('`property` must be a string or a symbol`');
      if (arguments.length > 3 && typeof arguments[3] != 'boolean' && arguments[3] !== null)
        throw new c('`nonEnumerable`, if provided, must be a boolean or null');
      if (arguments.length > 4 && typeof arguments[4] != 'boolean' && arguments[4] !== null)
        throw new c('`nonWritable`, if provided, must be a boolean or null');
      if (arguments.length > 5 && typeof arguments[5] != 'boolean' && arguments[5] !== null)
        throw new c('`nonConfigurable`, if provided, must be a boolean or null');
      if (arguments.length > 6 && typeof arguments[6] != 'boolean')
        throw new c('`loose`, if provided, must be a boolean');
      var w = arguments.length > 3 ? arguments[3] : null,
        S = arguments.length > 4 ? arguments[4] : null,
        g = arguments.length > 5 ? arguments[5] : null,
        V = arguments.length > 6 ? arguments[6] : !1,
        I = !!f && f(d, q);
      if (a)
        a(d, q, {
          configurable: g === null && I ? I.configurable : !g,
          enumerable: w === null && I ? I.enumerable : !w,
          value: O,
          writable: S === null && I ? I.writable : !S,
        });
      else if (V || (!w && !S && !g)) d[q] = O;
      else
        throw new u(
          'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.',
        );
    }),
    Ce
  );
}
var Xe, Nr;
function Ht() {
  if (Nr) return Xe;
  Nr = 1;
  var a = ar(),
    u = function () {
      return !!a;
    };
  return (
    (u.hasArrayLengthDefineBug = function () {
      if (!a) return null;
      try {
        return a([], 'length', { value: 1 }).length !== 1;
      } catch (f) {
        return !0;
      }
    }),
    (Xe = u),
    Xe
  );
}
var Me, Ur;
function qt() {
  if (Ur) return Me;
  Ur = 1;
  var a = se(),
    u = wt(),
    c = Ht()(),
    f = Mr(),
    b = ve(),
    d = a('%Math.floor%');
  return (
    (Me = function (O, w) {
      if (typeof O != 'function') throw new b('`fn` is not a function');
      if (typeof w != 'number' || w < 0 || w > 4294967295 || d(w) !== w)
        throw new b('`length` must be a positive 32-bit integer');
      var S = arguments.length > 2 && !!arguments[2],
        g = !0,
        V = !0;
      if ('length' in O && f) {
        var I = f(O, 'length');
        I && !I.configurable && (g = !1), I && !I.writable && (V = !1);
      }
      return (g || V || !S) && (c ? u(O, 'length', w, !0, !0) : u(O, 'length', w)), O;
    }),
    Me
  );
}
var Br;
function Ot() {
  return (
    Br ||
    ((Br = 1),
      (function (a) {
        var u = nr(),
          c = se(),
          f = qt(),
          b = ve(),
          d = c('%Function.prototype.apply%'),
          q = c('%Function.prototype.call%'),
          O = c('%Reflect.apply%', !0) || u.call(q, d),
          w = ar(),
          S = c('%Math.max%');
        a.exports = function (I) {
          if (typeof I != 'function') throw new b('a function is required');
          var s = O(u, q, arguments);
          return f(s, 1 + S(0, I.length - (arguments.length - 1)), !0);
        };
        var g = function () {
          return O(u, d, arguments);
        };
        w ? w(a.exports, 'apply', { value: g }) : (a.exports.apply = g);
      })(Ge)),
    Ge.exports
  );
}
var Qe, Dr;
function Vt() {
  if (Dr) return Qe;
  Dr = 1;
  var a = se(),
    u = Ot(),
    c = u(a('String.prototype.indexOf'));
  return (
    (Qe = function (b, d) {
      var q = a(b, !!d);
      return typeof q == 'function' && c(b, '.prototype.') > -1 ? u(q) : q;
    }),
    Qe
  );
}
const Tt = {},
  Wt = Object.freeze(Object.defineProperty({ __proto__: null, default: Tt }, Symbol.toStringTag, { value: 'Module' })),
  xt = vt(Wt);
var Je, jr;
function Nt() {
  if (jr) return Je;
  jr = 1;
  var a = typeof Map == 'function' && Map.prototype,
    u = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null,
    c = a && u && typeof u.get == 'function' ? u.get : null,
    f = a && Map.prototype.forEach,
    b = typeof Set == 'function' && Set.prototype,
    d = Object.getOwnPropertyDescriptor && b ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null,
    q = b && d && typeof d.get == 'function' ? d.get : null,
    O = b && Set.prototype.forEach,
    w = typeof WeakMap == 'function' && WeakMap.prototype,
    S = w ? WeakMap.prototype.has : null,
    g = typeof WeakSet == 'function' && WeakSet.prototype,
    V = g ? WeakSet.prototype.has : null,
    I = typeof WeakRef == 'function' && WeakRef.prototype,
    s = I ? WeakRef.prototype.deref : null,
    H = Boolean.prototype.valueOf,
    v = Object.prototype.toString,
    r = Function.prototype.toString,
    o = String.prototype.match,
    i = String.prototype.slice,
    p = String.prototype.replace,
    m = String.prototype.toUpperCase,
    y = String.prototype.toLowerCase,
    R = RegExp.prototype.test,
    t = Array.prototype.concat,
    l = Array.prototype.join,
    h = Array.prototype.slice,
    A = Math.floor,
    T = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
    P = Object.getOwnPropertySymbols,
    x = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? Symbol.prototype.toString : null,
    G = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
    U =
      typeof Symbol == 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === G || !0)
        ? Symbol.toStringTag
        : null,
    M = Object.prototype.propertyIsEnumerable,
    F =
      (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
      ([].__proto__ === Array.prototype
        ? function (e) {
          return e.__proto__;
        }
        : null);
  function E(e, n) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || (e && e > -1e3 && e < 1e3) || R.call(/e/, n)) return n;
    var N = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == 'number') {
      var j = e < 0 ? -A(-e) : A(e);
      if (j !== e) {
        var K = String(j),
          W = i.call(n, K.length + 1);
        return p.call(K, N, '$&_') + '.' + p.call(p.call(W, /([0-9]{3})/g, '$&_'), /_$/, '');
      }
    }
    return p.call(n, N, '$&_');
  }
  var B = xt,
    D = B.custom,
    k = re(D) ? D : null;
  Je = function e(n, N, j, K) {
    var W = N || {};
    if (_(W, 'quoteStyle') && W.quoteStyle !== 'single' && W.quoteStyle !== 'double')
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      _(W, 'maxStringLength') &&
      (typeof W.maxStringLength == 'number'
        ? W.maxStringLength < 0 && W.maxStringLength !== 1 / 0
        : W.maxStringLength !== null)
    )
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ie = _(W, 'customInspect') ? W.customInspect : !0;
    if (typeof ie != 'boolean' && ie !== 'symbol')
      throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (
      _(W, 'indent') &&
      W.indent !== null &&
      W.indent !== '	' &&
      !(parseInt(W.indent, 10) === W.indent && W.indent > 0)
    )
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (_(W, 'numericSeparator') && typeof W.numericSeparator != 'boolean')
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var ue = W.numericSeparator;
    if (typeof n == 'undefined') return 'undefined';
    if (n === null) return 'null';
    if (typeof n == 'boolean') return n ? 'true' : 'false';
    if (typeof n == 'string') return lr(n, W);
    if (typeof n == 'number') {
      if (n === 0) return 1 / 0 / n > 0 ? '0' : '-0';
      var X = String(n);
      return ue ? E(n, X) : X;
    }
    if (typeof n == 'bigint') {
      var oe = String(n) + 'n';
      return ue ? E(n, oe) : oe;
    }
    var Ie = typeof W.depth == 'undefined' ? 5 : W.depth;
    if ((typeof j == 'undefined' && (j = 0), j >= Ie && Ie > 0 && typeof n == 'object'))
      return L(n) ? '[Array]' : '[Object]';
    var ce = ct(W, j);
    if (typeof K == 'undefined') K = [];
    else if (or(K, n) >= 0) return '[Circular]';
    function $(pe, ge, ft) {
      if ((ge && ((K = h.call(K)), K.push(ge)), ft)) {
        var mr = { depth: W.depth };
        return _(W, 'quoteStyle') && (mr.quoteStyle = W.quoteStyle), e(pe, mr, j + 1, K);
      }
      return e(pe, W, j + 1, K);
    }
    if (typeof n == 'function' && !ne(n)) {
      var cr = et(n),
        pr = me(n, $);
      return (
        '[Function' + (cr ? ': ' + cr : ' (anonymous)') + ']' + (pr.length > 0 ? ' { ' + l.call(pr, ', ') + ' }' : '')
      );
    }
    if (re(n)) {
      var fr = G ? p.call(String(n), /^(Symbol\(.*\))_[^)]*$/, '$1') : x.call(n);
      return typeof n == 'object' && !G ? ye(fr) : fr;
    }
    if (ot(n)) {
      for (var de = '<' + y.call(String(n.nodeName)), Se = n.attributes || [], Ae = 0; Ae < Se.length; Ae++)
        de += ' ' + Se[Ae].name + '=' + z(ee(Se[Ae].value), 'double', W);
      return (
        (de += '>'),
        n.childNodes && n.childNodes.length && (de += '...'),
        (de += '</' + y.call(String(n.nodeName)) + '>'),
        de
      );
    }
    if (L(n)) {
      if (n.length === 0) return '[]';
      var Ee = me(n, $);
      return ce && !ut(Ee) ? '[' + be(Ee, ce) + ']' : '[ ' + l.call(Ee, ', ') + ' ]';
    }
    if (ae(n)) {
      var Pe = me(n, $);
      return !('cause' in Error.prototype) && 'cause' in n && !M.call(n, 'cause')
        ? '{ [' + String(n) + '] ' + l.call(t.call('[cause]: ' + $(n.cause), Pe), ', ') + ' }'
        : Pe.length === 0
          ? '[' + String(n) + ']'
          : '{ [' + String(n) + '] ' + l.call(Pe, ', ') + ' }';
    }
    if (typeof n == 'object' && ie) {
      if (k && typeof n[k] == 'function' && B) return B(n, { depth: Ie - j });
      if (ie !== 'symbol' && typeof n.inspect == 'function') return n.inspect();
    }
    if (rt(n)) {
      var sr = [];
      return (
        f &&
        f.call(n, function (pe, ge) {
          sr.push($(ge, n, !0) + ' => ' + $(pe, n));
        }),
        ur('Map', c.call(n), sr, ce)
      );
    }
    if (at(n)) {
      var yr = [];
      return (
        O &&
        O.call(n, function (pe) {
          yr.push($(pe, n));
        }),
        ur('Set', q.call(n), yr, ce)
      );
    }
    if (tt(n)) return he('WeakMap');
    if (it(n)) return he('WeakSet');
    if (nt(n)) return he('WeakRef');
    if (Z(n)) return ye($(Number(n)));
    if (te(n)) return ye($(T.call(n)));
    if (C(n)) return ye(H.call(n));
    if (J(n)) return ye($(String(n)));
    if (typeof window != 'undefined' && n === window) return '{ [object Window] }';
    if (n === yt) return '{ [object globalThis] }';
    if (!Q(n) && !ne(n)) {
      var we = me(n, $),
        dr = F ? F(n) === Object.prototype : n instanceof Object || n.constructor === Object,
        He = n instanceof Object ? '' : 'null prototype',
        vr = !dr && U && Object(n) === n && U in n ? i.call(Y(n), 8, -1) : He ? 'Object' : '',
        pt = dr || typeof n.constructor != 'function' ? '' : n.constructor.name ? n.constructor.name + ' ' : '',
        qe = pt + (vr || He ? '[' + l.call(t.call([], vr || [], He || []), ': ') + '] ' : '');
      return we.length === 0 ? qe + '{}' : ce ? qe + '{' + be(we, ce) + '}' : qe + '{ ' + l.call(we, ', ') + ' }';
    }
    return String(n);
  };
  function z(e, n, N) {
    var j = (N.quoteStyle || n) === 'double' ? '"' : "'";
    return j + e + j;
  }
  function ee(e) {
    return p.call(String(e), /"/g, '&quot;');
  }
  function L(e) {
    return Y(e) === '[object Array]' && (!U || !(typeof e == 'object' && U in e));
  }
  function Q(e) {
    return Y(e) === '[object Date]' && (!U || !(typeof e == 'object' && U in e));
  }
  function ne(e) {
    return Y(e) === '[object RegExp]' && (!U || !(typeof e == 'object' && U in e));
  }
  function ae(e) {
    return Y(e) === '[object Error]' && (!U || !(typeof e == 'object' && U in e));
  }
  function J(e) {
    return Y(e) === '[object String]' && (!U || !(typeof e == 'object' && U in e));
  }
  function Z(e) {
    return Y(e) === '[object Number]' && (!U || !(typeof e == 'object' && U in e));
  }
  function C(e) {
    return Y(e) === '[object Boolean]' && (!U || !(typeof e == 'object' && U in e));
  }
  function re(e) {
    if (G) return e && typeof e == 'object' && e instanceof Symbol;
    if (typeof e == 'symbol') return !0;
    if (!e || typeof e != 'object' || !x) return !1;
    try {
      return x.call(e), !0;
    } catch (n) { }
    return !1;
  }
  function te(e) {
    if (!e || typeof e != 'object' || !T) return !1;
    try {
      return T.call(e), !0;
    } catch (n) { }
    return !1;
  }
  var Re =
    Object.prototype.hasOwnProperty ||
    function (e) {
      return e in this;
    };
  function _(e, n) {
    return Re.call(e, n);
  }
  function Y(e) {
    return v.call(e);
  }
  function et(e) {
    if (e.name) return e.name;
    var n = o.call(r.call(e), /^function\s*([\w$]+)/);
    return n ? n[1] : null;
  }
  function or(e, n) {
    if (e.indexOf) return e.indexOf(n);
    for (var N = 0, j = e.length; N < j; N++) if (e[N] === n) return N;
    return -1;
  }
  function rt(e) {
    if (!c || !e || typeof e != 'object') return !1;
    try {
      c.call(e);
      try {
        q.call(e);
      } catch (n) {
        return !0;
      }
      return e instanceof Map;
    } catch (n) { }
    return !1;
  }
  function tt(e) {
    if (!S || !e || typeof e != 'object') return !1;
    try {
      S.call(e, S);
      try {
        V.call(e, V);
      } catch (n) {
        return !0;
      }
      return e instanceof WeakMap;
    } catch (n) { }
    return !1;
  }
  function nt(e) {
    if (!s || !e || typeof e != 'object') return !1;
    try {
      return s.call(e), !0;
    } catch (n) { }
    return !1;
  }
  function at(e) {
    if (!q || !e || typeof e != 'object') return !1;
    try {
      q.call(e);
      try {
        c.call(e);
      } catch (n) {
        return !0;
      }
      return e instanceof Set;
    } catch (n) { }
    return !1;
  }
  function it(e) {
    if (!V || !e || typeof e != 'object') return !1;
    try {
      V.call(e, V);
      try {
        S.call(e, S);
      } catch (n) {
        return !0;
      }
      return e instanceof WeakSet;
    } catch (n) { }
    return !1;
  }
  function ot(e) {
    return !e || typeof e != 'object'
      ? !1
      : typeof HTMLElement != 'undefined' && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == 'string' && typeof e.getAttribute == 'function';
  }
  function lr(e, n) {
    if (e.length > n.maxStringLength) {
      var N = e.length - n.maxStringLength,
        j = '... ' + N + ' more character' + (N > 1 ? 's' : '');
      return lr(i.call(e, 0, n.maxStringLength), n) + j;
    }
    var K = p.call(p.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lt);
    return z(K, 'single', n);
  }
  function lt(e) {
    var n = e.charCodeAt(0),
      N = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
    return N ? '\\' + N : '\\x' + (n < 16 ? '0' : '') + m.call(n.toString(16));
  }
  function ye(e) {
    return 'Object(' + e + ')';
  }
  function he(e) {
    return e + ' { ? }';
  }
  function ur(e, n, N, j) {
    var K = j ? be(N, j) : l.call(N, ', ');
    return e + ' (' + n + ') {' + K + '}';
  }
  function ut(e) {
    for (var n = 0; n < e.length; n++)
      if (
        or(
          e[n],
          `
`,
        ) >= 0
      )
        return !1;
    return !0;
  }
  function ct(e, n) {
    var N;
    if (e.indent === '	') N = '	';
    else if (typeof e.indent == 'number' && e.indent > 0) N = l.call(Array(e.indent + 1), ' ');
    else return null;
    return { base: N, prev: l.call(Array(n + 1), N) };
  }
  function be(e, n) {
    if (e.length === 0) return '';
    var N =
      `
` +
      n.prev +
      n.base;
    return (
      N +
      l.call(e, ',' + N) +
      `
` +
      n.prev
    );
  }
  function me(e, n) {
    var N = L(e),
      j = [];
    if (N) {
      j.length = e.length;
      for (var K = 0; K < e.length; K++) j[K] = _(e, K) ? n(e[K], e) : '';
    }
    var W = typeof P == 'function' ? P(e) : [],
      ie;
    if (G) {
      ie = {};
      for (var ue = 0; ue < W.length; ue++) ie['$' + W[ue]] = W[ue];
    }
    for (var X in e)
      _(e, X) &&
        ((N && String(Number(X)) === X && X < e.length) ||
          (G && ie['$' + X] instanceof Symbol) ||
          (R.call(/[^\w$]/, X) ? j.push(n(X, e) + ': ' + n(e[X], e)) : j.push(X + ': ' + n(e[X], e))));
    if (typeof P == 'function')
      for (var oe = 0; oe < W.length; oe++) M.call(e, W[oe]) && j.push('[' + n(W[oe]) + ']: ' + n(e[W[oe]], e));
    return j;
  }
  return Je;
}
var Ye, Fr;
function Ut() {
  if (Fr) return Ye;
  Fr = 1;
  var a = se(),
    u = Vt(),
    c = Nt(),
    f = ve(),
    b = a('%WeakMap%', !0),
    d = a('%Map%', !0),
    q = u('WeakMap.prototype.get', !0),
    O = u('WeakMap.prototype.set', !0),
    w = u('WeakMap.prototype.has', !0),
    S = u('Map.prototype.get', !0),
    g = u('Map.prototype.set', !0),
    V = u('Map.prototype.has', !0),
    I = function (r, o) {
      for (var i = r, p; (p = i.next) !== null; i = p)
        if (p.key === o) return (i.next = p.next), (p.next = r.next), (r.next = p), p;
    },
    s = function (r, o) {
      var i = I(r, o);
      return i && i.value;
    },
    H = function (r, o, i) {
      var p = I(r, o);
      p ? (p.value = i) : (r.next = { key: o, next: r.next, value: i });
    },
    v = function (r, o) {
      return !!I(r, o);
    };
  return (
    (Ye = function () {
      var o,
        i,
        p,
        m = {
          assert: function (y) {
            if (!m.has(y)) throw new f('Side channel does not contain ' + c(y));
          },
          get: function (y) {
            if (b && y && (typeof y == 'object' || typeof y == 'function')) {
              if (o) return q(o, y);
            } else if (d) {
              if (i) return S(i, y);
            } else if (p) return s(p, y);
          },
          has: function (y) {
            if (b && y && (typeof y == 'object' || typeof y == 'function')) {
              if (o) return w(o, y);
            } else if (d) {
              if (i) return V(i, y);
            } else if (p) return v(p, y);
            return !1;
          },
          set: function (y, R) {
            b && y && (typeof y == 'object' || typeof y == 'function')
              ? (o || (o = new b()), O(o, y, R))
              : d
                ? (i || (i = new d()), g(i, y, R))
                : (p || (p = { key: {}, next: null }), H(p, y, R));
          },
        };
      return m;
    }),
    Ye
  );
}
var _e, Lr;
function ir() {
  if (Lr) return _e;
  Lr = 1;
  var a = String.prototype.replace,
    u = /%20/g,
    c = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' };
  return (
    (_e = {
      default: c.RFC3986,
      formatters: {
        RFC1738: function (f) {
          return a.call(f, u, '+');
        },
        RFC3986: function (f) {
          return String(f);
        },
      },
      RFC1738: c.RFC1738,
      RFC3986: c.RFC3986,
    }),
    _e
  );
}
var $e, kr;
function Qr() {
  if (kr) return $e;
  kr = 1;
  var a = ir(),
    u = Object.prototype.hasOwnProperty,
    c = Array.isArray,
    f = (function () {
      for (var r = [], o = 0; o < 256; ++o) r.push('%' + ((o < 16 ? '0' : '') + o.toString(16)).toUpperCase());
      return r;
    })(),
    b = function (o) {
      for (; o.length > 1;) {
        var i = o.pop(),
          p = i.obj[i.prop];
        if (c(p)) {
          for (var m = [], y = 0; y < p.length; ++y) typeof p[y] != 'undefined' && m.push(p[y]);
          i.obj[i.prop] = m;
        }
      }
    },
    d = function (o, i) {
      for (var p = i && i.plainObjects ? { __proto__: null } : {}, m = 0; m < o.length; ++m)
        typeof o[m] != 'undefined' && (p[m] = o[m]);
      return p;
    },
    q = function r(o, i, p) {
      if (!i) return o;
      if (typeof i != 'object' && typeof i != 'function') {
        if (c(o)) o.push(i);
        else if (o && typeof o == 'object')
          ((p && (p.plainObjects || p.allowPrototypes)) || !u.call(Object.prototype, i)) && (o[i] = !0);
        else return [o, i];
        return o;
      }
      if (!o || typeof o != 'object') return [o].concat(i);
      var m = o;
      return (
        c(o) && !c(i) && (m = d(o, p)),
        c(o) && c(i)
          ? (i.forEach(function (y, R) {
            if (u.call(o, R)) {
              var t = o[R];
              t && typeof t == 'object' && y && typeof y == 'object' ? (o[R] = r(t, y, p)) : o.push(y);
            } else o[R] = y;
          }),
            o)
          : Object.keys(i).reduce(function (y, R) {
            var t = i[R];
            return u.call(y, R) ? (y[R] = r(y[R], t, p)) : (y[R] = t), y;
          }, m)
      );
    },
    O = function (o, i) {
      return Object.keys(i).reduce(function (p, m) {
        return (p[m] = i[m]), p;
      }, o);
    },
    w = function (r, o, i) {
      var p = r.replace(/\+/g, ' ');
      if (i === 'iso-8859-1') return p.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(p);
      } catch (m) {
        return p;
      }
    },
    S = 1024,
    g = function (o, i, p, m, y) {
      if (o.length === 0) return o;
      var R = o;
      if (
        (typeof o == 'symbol' ? (R = Symbol.prototype.toString.call(o)) : typeof o != 'string' && (R = String(o)),
          p === 'iso-8859-1')
      )
        return escape(R).replace(/%u[0-9a-f]{4}/gi, function (x) {
          return '%26%23' + parseInt(x.slice(2), 16) + '%3B';
        });
      for (var t = '', l = 0; l < R.length; l += S) {
        for (var h = R.length >= S ? R.slice(l, l + S) : R, A = [], T = 0; T < h.length; ++T) {
          var P = h.charCodeAt(T);
          if (
            P === 45 ||
            P === 46 ||
            P === 95 ||
            P === 126 ||
            (P >= 48 && P <= 57) ||
            (P >= 65 && P <= 90) ||
            (P >= 97 && P <= 122) ||
            (y === a.RFC1738 && (P === 40 || P === 41))
          ) {
            A[A.length] = h.charAt(T);
            continue;
          }
          if (P < 128) {
            A[A.length] = f[P];
            continue;
          }
          if (P < 2048) {
            A[A.length] = f[192 | (P >> 6)] + f[128 | (P & 63)];
            continue;
          }
          if (P < 55296 || P >= 57344) {
            A[A.length] = f[224 | (P >> 12)] + f[128 | ((P >> 6) & 63)] + f[128 | (P & 63)];
            continue;
          }
          (T += 1),
            (P = 65536 + (((P & 1023) << 10) | (h.charCodeAt(T) & 1023))),
            (A[A.length] =
              f[240 | (P >> 18)] + f[128 | ((P >> 12) & 63)] + f[128 | ((P >> 6) & 63)] + f[128 | (P & 63)]);
        }
        t += A.join('');
      }
      return t;
    },
    V = function (o) {
      for (var i = [{ obj: { o }, prop: 'o' }], p = [], m = 0; m < i.length; ++m)
        for (var y = i[m], R = y.obj[y.prop], t = Object.keys(R), l = 0; l < t.length; ++l) {
          var h = t[l],
            A = R[h];
          typeof A == 'object' && A !== null && p.indexOf(A) === -1 && (i.push({ obj: R, prop: h }), p.push(A));
        }
      return b(i), o;
    },
    I = function (o) {
      return Object.prototype.toString.call(o) === '[object RegExp]';
    },
    s = function (o) {
      return !o || typeof o != 'object' ? !1 : !!(o.constructor && o.constructor.isBuffer && o.constructor.isBuffer(o));
    },
    H = function (o, i) {
      return [].concat(o, i);
    },
    v = function (o, i) {
      if (c(o)) {
        for (var p = [], m = 0; m < o.length; m += 1) p.push(i(o[m]));
        return p;
      }
      return i(o);
    };
  return (
    ($e = {
      arrayToObject: d,
      assign: O,
      combine: H,
      compact: V,
      decode: w,
      encode: g,
      isBuffer: s,
      isRegExp: I,
      maybeMap: v,
      merge: q,
    }),
    $e
  );
}
var er, Kr;
function Bt() {
  if (Kr) return er;
  Kr = 1;
  var a = Ut(),
    u = Qr(),
    c = ir(),
    f = Object.prototype.hasOwnProperty,
    b = {
      brackets: function (r) {
        return r + '[]';
      },
      comma: 'comma',
      indices: function (r, o) {
        return r + '[' + o + ']';
      },
      repeat: function (r) {
        return r;
      },
    },
    d = Array.isArray,
    q = Array.prototype.push,
    O = function (v, r) {
      q.apply(v, d(r) ? r : [r]);
    },
    w = Date.prototype.toISOString,
    S = c.default,
    g = {
      addQueryPrefix: !1,
      allowDots: !1,
      allowEmptyArrays: !1,
      arrayFormat: 'indices',
      charset: 'utf-8',
      charsetSentinel: !1,
      commaRoundTrip: !1,
      delimiter: '&',
      encode: !0,
      encodeDotInKeys: !1,
      encoder: u.encode,
      encodeValuesOnly: !1,
      filter: void 0,
      format: S,
      formatter: c.formatters[S],
      indices: !1,
      serializeDate: function (r) {
        return w.call(r);
      },
      skipNulls: !1,
      strictNullHandling: !1,
    },
    V = function (r) {
      return (
        typeof r == 'string' ||
        typeof r == 'number' ||
        typeof r == 'boolean' ||
        typeof r == 'symbol' ||
        typeof r == 'bigint'
      );
    },
    I = {},
    s = function v(r, o, i, p, m, y, R, t, l, h, A, T, P, x, G, U, M, F) {
      for (var E = r, B = F, D = 0, k = !1; (B = B.get(I)) !== void 0 && !k;) {
        var z = B.get(r);
        if (((D += 1), typeof z != 'undefined')) {
          if (z === D) throw new RangeError('Cyclic object value');
          k = !0;
        }
        typeof B.get(I) == 'undefined' && (D = 0);
      }
      if (
        (typeof h == 'function'
          ? (E = h(o, E))
          : E instanceof Date
            ? (E = P(E))
            : i === 'comma' &&
            d(E) &&
            (E = u.maybeMap(E, function (Y) {
              return Y instanceof Date ? P(Y) : Y;
            })),
          E === null)
      ) {
        if (y) return l && !U ? l(o, g.encoder, M, 'key', x) : o;
        E = '';
      }
      if (V(E) || u.isBuffer(E)) {
        if (l) {
          var ee = U ? o : l(o, g.encoder, M, 'key', x);
          return [G(ee) + '=' + G(l(E, g.encoder, M, 'value', x))];
        }
        return [G(o) + '=' + G(String(E))];
      }
      var L = [];
      if (typeof E == 'undefined') return L;
      var Q;
      if (i === 'comma' && d(E))
        U && l && (E = u.maybeMap(E, l)), (Q = [{ value: E.length > 0 ? E.join(',') || null : void 0 }]);
      else if (d(h)) Q = h;
      else {
        var ne = Object.keys(E);
        Q = A ? ne.sort(A) : ne;
      }
      var ae = t ? String(o).replace(/\./g, '%2E') : String(o),
        J = p && d(E) && E.length === 1 ? ae + '[]' : ae;
      if (m && d(E) && E.length === 0) return J + '[]';
      for (var Z = 0; Z < Q.length; ++Z) {
        var C = Q[Z],
          re = typeof C == 'object' && C && typeof C.value != 'undefined' ? C.value : E[C];
        if (!(R && re === null)) {
          var te = T && t ? String(C).replace(/\./g, '%2E') : String(C),
            Re = d(E) ? (typeof i == 'function' ? i(J, te) : J) : J + (T ? '.' + te : '[' + te + ']');
          F.set(r, D);
          var _ = a();
          _.set(I, F),
            O(L, v(re, Re, i, p, m, y, R, t, i === 'comma' && U && d(E) ? null : l, h, A, T, P, x, G, U, M, _));
        }
      }
      return L;
    },
    H = function (r) {
      if (!r) return g;
      if (typeof r.allowEmptyArrays != 'undefined' && typeof r.allowEmptyArrays != 'boolean')
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
      if (typeof r.encodeDotInKeys != 'undefined' && typeof r.encodeDotInKeys != 'boolean')
        throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
      if (r.encoder !== null && typeof r.encoder != 'undefined' && typeof r.encoder != 'function')
        throw new TypeError('Encoder has to be a function.');
      var o = r.charset || g.charset;
      if (typeof r.charset != 'undefined' && r.charset !== 'utf-8' && r.charset !== 'iso-8859-1')
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      var i = c.default;
      if (typeof r.format != 'undefined') {
        if (!f.call(c.formatters, r.format)) throw new TypeError('Unknown format option provided.');
        i = r.format;
      }
      var p = c.formatters[i],
        m = g.filter;
      (typeof r.filter == 'function' || d(r.filter)) && (m = r.filter);
      var y;
      if (
        (r.arrayFormat in b
          ? (y = r.arrayFormat)
          : 'indices' in r
            ? (y = r.indices ? 'indices' : 'repeat')
            : (y = g.arrayFormat),
          'commaRoundTrip' in r && typeof r.commaRoundTrip != 'boolean')
      )
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
      var R = typeof r.allowDots == 'undefined' ? (r.encodeDotInKeys === !0 ? !0 : g.allowDots) : !!r.allowDots;
      return {
        addQueryPrefix: typeof r.addQueryPrefix == 'boolean' ? r.addQueryPrefix : g.addQueryPrefix,
        allowDots: R,
        allowEmptyArrays: typeof r.allowEmptyArrays == 'boolean' ? !!r.allowEmptyArrays : g.allowEmptyArrays,
        arrayFormat: y,
        charset: o,
        charsetSentinel: typeof r.charsetSentinel == 'boolean' ? r.charsetSentinel : g.charsetSentinel,
        commaRoundTrip: !!r.commaRoundTrip,
        delimiter: typeof r.delimiter == 'undefined' ? g.delimiter : r.delimiter,
        encode: typeof r.encode == 'boolean' ? r.encode : g.encode,
        encodeDotInKeys: typeof r.encodeDotInKeys == 'boolean' ? r.encodeDotInKeys : g.encodeDotInKeys,
        encoder: typeof r.encoder == 'function' ? r.encoder : g.encoder,
        encodeValuesOnly: typeof r.encodeValuesOnly == 'boolean' ? r.encodeValuesOnly : g.encodeValuesOnly,
        filter: m,
        format: i,
        formatter: p,
        serializeDate: typeof r.serializeDate == 'function' ? r.serializeDate : g.serializeDate,
        skipNulls: typeof r.skipNulls == 'boolean' ? r.skipNulls : g.skipNulls,
        sort: typeof r.sort == 'function' ? r.sort : null,
        strictNullHandling: typeof r.strictNullHandling == 'boolean' ? r.strictNullHandling : g.strictNullHandling,
      };
    };
  return (
    (er = function (v, r) {
      var o = v,
        i = H(r),
        p,
        m;
      typeof i.filter == 'function' ? ((m = i.filter), (o = m('', o))) : d(i.filter) && ((m = i.filter), (p = m));
      var y = [];
      if (typeof o != 'object' || o === null) return '';
      var R = b[i.arrayFormat],
        t = R === 'comma' && i.commaRoundTrip;
      p || (p = Object.keys(o)), i.sort && p.sort(i.sort);
      for (var l = a(), h = 0; h < p.length; ++h) {
        var A = p[h],
          T = o[A];
        (i.skipNulls && T === null) ||
          O(
            y,
            s(
              T,
              A,
              R,
              t,
              i.allowEmptyArrays,
              i.strictNullHandling,
              i.skipNulls,
              i.encodeDotInKeys,
              i.encode ? i.encoder : null,
              i.filter,
              i.sort,
              i.allowDots,
              i.serializeDate,
              i.format,
              i.formatter,
              i.encodeValuesOnly,
              i.charset,
              l,
            ),
          );
      }
      var P = y.join(i.delimiter),
        x = i.addQueryPrefix === !0 ? '?' : '';
      return (
        i.charsetSentinel && (i.charset === 'iso-8859-1' ? (x += 'utf8=%26%2310003%3B&') : (x += 'utf8=%E2%9C%93&')),
        P.length > 0 ? x + P : ''
      );
    }),
    er
  );
}
var rr, Gr;
function Dt() {
  if (Gr) return rr;
  Gr = 1;
  var a = Qr(),
    u = Object.prototype.hasOwnProperty,
    c = Array.isArray,
    f = {
      allowDots: !1,
      allowEmptyArrays: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: !1,
      comma: !1,
      decodeDotInKeys: !1,
      decoder: a.decode,
      delimiter: '&',
      depth: 5,
      duplicates: 'combine',
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictDepth: !1,
      strictNullHandling: !1,
    },
    b = function (I) {
      return I.replace(/&#(\d+);/g, function (s, H) {
        return String.fromCharCode(parseInt(H, 10));
      });
    },
    d = function (I, s) {
      return I && typeof I == 'string' && s.comma && I.indexOf(',') > -1 ? I.split(',') : I;
    },
    q = 'utf8=%26%2310003%3B',
    O = 'utf8=%E2%9C%93',
    w = function (s, H) {
      var v = { __proto__: null },
        r = H.ignoreQueryPrefix ? s.replace(/^\?/, '') : s;
      r = r.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      var o = H.parameterLimit === 1 / 0 ? void 0 : H.parameterLimit,
        i = r.split(H.delimiter, o),
        p = -1,
        m,
        y = H.charset;
      if (H.charsetSentinel)
        for (m = 0; m < i.length; ++m)
          i[m].indexOf('utf8=') === 0 &&
            (i[m] === O ? (y = 'utf-8') : i[m] === q && (y = 'iso-8859-1'), (p = m), (m = i.length));
      for (m = 0; m < i.length; ++m)
        if (m !== p) {
          var R = i[m],
            t = R.indexOf(']='),
            l = t === -1 ? R.indexOf('=') : t + 1,
            h,
            A;
          l === -1
            ? ((h = H.decoder(R, f.decoder, y, 'key')), (A = H.strictNullHandling ? null : ''))
            : ((h = H.decoder(R.slice(0, l), f.decoder, y, 'key')),
              (A = a.maybeMap(d(R.slice(l + 1), H), function (P) {
                return H.decoder(P, f.decoder, y, 'value');
              }))),
            A && H.interpretNumericEntities && y === 'iso-8859-1' && (A = b(String(A))),
            R.indexOf('[]=') > -1 && (A = c(A) ? [A] : A);
          var T = u.call(v, h);
          T && H.duplicates === 'combine' ? (v[h] = a.combine(v[h], A)) : (!T || H.duplicates === 'last') && (v[h] = A);
        }
      return v;
    },
    S = function (I, s, H, v) {
      for (var r = v ? s : d(s, H), o = I.length - 1; o >= 0; --o) {
        var i,
          p = I[o];
        if (p === '[]' && H.parseArrays)
          i = H.allowEmptyArrays && (r === '' || (H.strictNullHandling && r === null)) ? [] : [].concat(r);
        else {
          i = H.plainObjects ? { __proto__: null } : {};
          var m = p.charAt(0) === '[' && p.charAt(p.length - 1) === ']' ? p.slice(1, -1) : p,
            y = H.decodeDotInKeys ? m.replace(/%2E/g, '.') : m,
            R = parseInt(y, 10);
          !H.parseArrays && y === ''
            ? (i = { 0: r })
            : !isNaN(R) && p !== y && String(R) === y && R >= 0 && H.parseArrays && R <= H.arrayLimit
              ? ((i = []), (i[R] = r))
              : y !== '__proto__' && (i[y] = r);
        }
        r = i;
      }
      return r;
    },
    g = function (s, H, v, r) {
      if (s) {
        var o = v.allowDots ? s.replace(/\.([^.[]+)/g, '[$1]') : s,
          i = /(\[[^[\]]*])/,
          p = /(\[[^[\]]*])/g,
          m = v.depth > 0 && i.exec(o),
          y = m ? o.slice(0, m.index) : o,
          R = [];
        if (y) {
          if (!v.plainObjects && u.call(Object.prototype, y) && !v.allowPrototypes) return;
          R.push(y);
        }
        for (var t = 0; v.depth > 0 && (m = p.exec(o)) !== null && t < v.depth;) {
          if (((t += 1), !v.plainObjects && u.call(Object.prototype, m[1].slice(1, -1)) && !v.allowPrototypes)) return;
          R.push(m[1]);
        }
        if (m) {
          if (v.strictDepth === !0)
            throw new RangeError('Input depth exceeded depth option of ' + v.depth + ' and strictDepth is true');
          R.push('[' + o.slice(m.index) + ']');
        }
        return S(R, H, v, r);
      }
    },
    V = function (s) {
      if (!s) return f;
      if (typeof s.allowEmptyArrays != 'undefined' && typeof s.allowEmptyArrays != 'boolean')
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
      if (typeof s.decodeDotInKeys != 'undefined' && typeof s.decodeDotInKeys != 'boolean')
        throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
      if (s.decoder !== null && typeof s.decoder != 'undefined' && typeof s.decoder != 'function')
        throw new TypeError('Decoder has to be a function.');
      if (typeof s.charset != 'undefined' && s.charset !== 'utf-8' && s.charset !== 'iso-8859-1')
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      var H = typeof s.charset == 'undefined' ? f.charset : s.charset,
        v = typeof s.duplicates == 'undefined' ? f.duplicates : s.duplicates;
      if (v !== 'combine' && v !== 'first' && v !== 'last')
        throw new TypeError('The duplicates option must be either combine, first, or last');
      var r = typeof s.allowDots == 'undefined' ? (s.decodeDotInKeys === !0 ? !0 : f.allowDots) : !!s.allowDots;
      return {
        allowDots: r,
        allowEmptyArrays: typeof s.allowEmptyArrays == 'boolean' ? !!s.allowEmptyArrays : f.allowEmptyArrays,
        allowPrototypes: typeof s.allowPrototypes == 'boolean' ? s.allowPrototypes : f.allowPrototypes,
        allowSparse: typeof s.allowSparse == 'boolean' ? s.allowSparse : f.allowSparse,
        arrayLimit: typeof s.arrayLimit == 'number' ? s.arrayLimit : f.arrayLimit,
        charset: H,
        charsetSentinel: typeof s.charsetSentinel == 'boolean' ? s.charsetSentinel : f.charsetSentinel,
        comma: typeof s.comma == 'boolean' ? s.comma : f.comma,
        decodeDotInKeys: typeof s.decodeDotInKeys == 'boolean' ? s.decodeDotInKeys : f.decodeDotInKeys,
        decoder: typeof s.decoder == 'function' ? s.decoder : f.decoder,
        delimiter: typeof s.delimiter == 'string' || a.isRegExp(s.delimiter) ? s.delimiter : f.delimiter,
        depth: typeof s.depth == 'number' || s.depth === !1 ? +s.depth : f.depth,
        duplicates: v,
        ignoreQueryPrefix: s.ignoreQueryPrefix === !0,
        interpretNumericEntities:
          typeof s.interpretNumericEntities == 'boolean' ? s.interpretNumericEntities : f.interpretNumericEntities,
        parameterLimit: typeof s.parameterLimit == 'number' ? s.parameterLimit : f.parameterLimit,
        parseArrays: s.parseArrays !== !1,
        plainObjects: typeof s.plainObjects == 'boolean' ? s.plainObjects : f.plainObjects,
        strictDepth: typeof s.strictDepth == 'boolean' ? !!s.strictDepth : f.strictDepth,
        strictNullHandling: typeof s.strictNullHandling == 'boolean' ? s.strictNullHandling : f.strictNullHandling,
      };
    };
  return (
    (rr = function (I, s) {
      var H = V(s);
      if (I === '' || I === null || typeof I == 'undefined') return H.plainObjects ? { __proto__: null } : {};
      for (
        var v = typeof I == 'string' ? w(I, H) : I,
        r = H.plainObjects ? { __proto__: null } : {},
        o = Object.keys(v),
        i = 0;
        i < o.length;
        ++i
      ) {
        var p = o[i],
          m = g(p, v[p], H, typeof I == 'string');
        r = a.merge(r, m, H);
      }
      return H.allowSparse === !0 ? r : a.compact(r);
    }),
    rr
  );
}
var tr, zr;
function jt() {
  if (zr) return tr;
  zr = 1;
  var a = Bt(),
    u = Dt(),
    c = ir();
  return (tr = { formats: c, parse: u, stringify: a }), tr;
}
var Ft = jt();
const Zr = dt(Ft),
  le = (function () {
    var R;
    const a = 'gt4/taxapp',
      u = (function () {
        const t = navigator.userAgent;
        return {
          versions: (function () {
            return {
              ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
              android: t.indexOf('Android') > -1,
              harmonyos: t.indexOf('Harmony') > -1 || t.indexOf('harmony') > -1,
            };
          })(),
          language: (navigator.browserLanguage || navigator.language).toLowerCase(),
          isGtApp() {
            const l = t && t.toLowerCase();
            return !!(l && l.indexOf(a) !== -1);
          },
          isMyApp(l) {
            const h = t && t.toLowerCase();
            return (l = l && l.toLowerCase()), !!(l && h && h.indexOf(l) !== -1);
          },
        };
      })();
    function c(t) {
      if (typeof t == 'string')
        try {
          const l = JSON.parse(t);
          return !!(typeof l == 'object' && l);
        } catch (l) {
          return !1;
        }
    }
    function f() {
      return !!(u.versions.ios || u.versions.android || u.versions.harmonyos);
    }
    const b = { version: st };
    let d = {};
    !u.isGtApp() &&
      window.thirdPartyNative &&
      ((window.thirdPartyNative.messageHandlers = {}),
        (d = (R = window.thirdPartyNative) == null ? void 0 : R.messageHandlers));
    let q = 0;
    const O = {},
      w = {
        set(t, l) {
          this[t] = l;
        },
        get(t) {
          return this[t];
        },
        delete(t) {
          delete this[t];
        },
      };
    function S(t, l) {
      (d[t] = l), u.isGtApp();
    }
    function g(t) {
      V('onPageBackHandler'), S('onPageBackHandler', t);
    }
    function V(t, l, h) {
      if (h && !(u.versions.ios || u.versions.android || u.versions.harmonyos)) {
        h(t, '', { msg: 'nativeFunction方法不支持在pc端调用,请在app内调用', code: '1001' });
        return;
      }
      p({ type: t, argument: l }, h);
    }
    function I(t, l, h, A) {
      if (t && t.length > 0) {
        const T = O[t];
        if (T) {
          c(A) && (A = JSON.parse(A)), A && A.msg && A.msg.length > 0 ? T(l, h, A) : T(l, h), delete O[t];
          const P = l + t;
          w.get(P) && w.delete(P);
        }
      }
    }
    function s(t, l, h) {
      const A = t;
      w.get(A) && (w.get(A)(t, l, h), w.delete(A));
    }
    function H(t, l, h) {
      let A;
      t && t.length > 0
        ? (A = function (P) {
          p({ responseId: t, type: l, argument: P });
        })
        : (A = function () { });
      const T = d[l];
      T && T(h, A);
    }
    function v(t = {}) {
      return Object.entries(t)
        .map(([l, h]) => `${encodeURIComponent(l)}=${encodeURIComponent(typeof h == 'object' ? JSON.stringify(h) : h)}`)
        .join('&');
    }
    const r = (function () {
      return {
        nativeRouter(t, l, h = () => { }) {
          var x, G, U, M;
          if ((console.log('isGtApp', le.isGtApp()), !le.isGtApp())) {
            if (t != null && t.startsWith('http')) {
              (G = (x = window.thirdPartyNative) == null ? void 0 : x.handler) == null ||
                G.call(x, 'gt4://taxapp/commonService/openView', { url: t, title: l.title }, h);
              return;
            }
            (M = (U = window.thirdPartyNative) == null ? void 0 : U.handler) == null ||
              M.call(U, `gt4://taxapp${t.replace(/^gt4:\/\/taxapp/, '')}`, l, h);
            return;
          }
          const A = v(l);
          let T = t;
          if (A)
            if (t.indexOf('#') !== -1) {
              const F = t.indexOf('#'),
                E = t.substring(0, F),
                B = t.substring(F);
              T = E.indexOf('?') === -1 ? `${E}?${A}` + B : `${E}&${A}` + B;
            } else T = t.indexOf('?') === -1 ? `${t}?${A}` : `${t}&${A}`;
          V('nativeRouter', { data: T }, h);
        },
        nativeSaveData(t, l) {
          this.nativeRouter('/commonService/nativeSaveData', t, l);
        },
        nativeGetData(t, l) {
          this.nativeRouter('/commonService/nativeGetData', t, l);
        },
        callPhone(t, l) {
          this.nativeRouter('/commonService/callPhone', t, l);
        },
        openView(t, l) {
          const h = {};
          Object.assign(h, t);
          const A = h.url;
          delete h.url, this.nativeRouter(A, h, l);
        },
        closeView(t, l) {
          this.nativeRouter('/commonService/closeView', t, l);
        },
        navBarTitle(t, l) {
          this.nativeRouter('/commonService/navBarTitle', t, l);
        },
        navBarControl(t, l) {
          this.nativeRouter('/commonService/navBarControl', t, l);
        },
        navBarHidden(t, l) {
          this.nativeRouter('/commonService/navBarHidden', t, l);
        },
        navBarVisibility(t, l) {
          this.nativeRouter('/commonService/navBarVisibility', t, l);
        },
        orientationChange(t, l) {
          this.nativeRouter('/commonBiz/orientationChange', t, l);
        },
        getStatusBarHeight(t, l) {
          this.nativeRouter('/commonService/getStatusBarHeight', t, l);
        },
        checkApp(t, l) {
          this.nativeRouter('/commonService/checkApp', t, l);
        },
        openApp(t, l) {
          this.nativeRouter('/commonService/openApp', t, l);
        },
        openURLWithExternalBrowser(t, l) {
          this.nativeRouter('/commonService/openURLWithExternalBrowser', t, l);
        },
        nativeGetAppVersion(t, l) {
          this.nativeRouter('/commonService/nativeGetAppVersion', t, l);
        },
        nativeSaveImageToGallery(t, l) {
          this.nativeRouter('/commonService/nativeSaveImageToGallery', t, l);
        },
      };
    })(),
      o = (function () {
        return {
          previewBack(t) {
            S(_regiseredJSTypes.RegiseredJSTypePreviewBack, t);
          },
        };
      })();
    function i() {
      return b;
    }
    function p(t, l) {
      let { argument: h } = t;
      c(h) && (h = JSON.parse(h)), (t.argument = h || ''), (t.callback = ''), (t.metaInfo = b), m(t, l);
    }
    function m(t, l) {
      const h = `SMGJS_${q++}_${new Date().getTime()}`;
      (t.callBackId = h), l && (w.set(t.type + h, l), (O[h] = l));
      let A = JSON.stringify(t);
      const T = JSON.stringify(t.metaInfo);
      let P = t.argument;
      if ((typeof P != 'string' && typeof P == 'object' && (P = JSON.stringify(P)), u.versions.android))
        try {
          typeof android != 'undefined' && android.exec(t.callBackId, t.type, P, T, t.responseId);
        } catch (x) {
          typeof android != 'undefined' && android.exec(t.type, P);
        }
      else if (u.versions.ios)
        if (((A = encodeURI(A)), window.webkit)) window.webkit.messageHandlers.webkitpostnotification.postMessage(A);
        else {
          let x;
          const G = `webkitpostnotification:${A}`;
          (x = document.createElement('iframe')),
            x.setAttribute('src', G),
            x.setAttribute('style', 'display:none;'),
            x.setAttribute('height', '0px'),
            x.setAttribute('width', '0px'),
            x.setAttribute('frameborder', '0'),
            document.body.appendChild(x),
            x.parentNode.removeChild(x),
            (x = null);
        }
      else u.versions.harmonyos && harmonyJSI.exec(t.type, P, t.callBackId, t.responseId, T);
    }
    const y = () => {
      const { suffix: t = '' } = Zr.parse(location.href.split('?')[1]),
        { gt4env: l = 'prod' } = Zr.parse(decodeURIComponent(t));
      return l;
    };
    return {
      registerHandler: S,
      registerPageBackHandler: g,
      SMGNativeCallback: s,
      nativeCallback: I,
      nativeFunction: V,
      nativeCallRegisteredJs: H,
      commonuseTypes: r,
      commonJSTypes: o,
      getNativeMetaInfo: i,
      isGtApp: u.isGtApp,
      isMyApp: u.isMyApp,
      mobilePlatform: u.versions,
      isMobilePlatform: f,
      getEnvironment: y,
    };
  })();
window.nativeCallback || (window.nativeCallback = le.SMGNativeCallback);
window.SMGNativeJS || (window.SMGNativeJS = le);
const Lt = le.isGtApp();
if (!Lt) {
  const a = document.createElement('script');
  (a.src = '/3rd/appzwpt/appthirdpartynative.js'),
    document.head.appendChild(a),
    (a.onload = () => {
      console.log('appthirdpartynative 加载完成');
    });
}
const kt = {
  versions: (function () {
    const a = navigator.userAgent;
    return { ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), android: a.indexOf('Android') > -1 };
  })(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase(),
},
  Cr = (kt.versions.ios, 'alipays://'),
  Jr = [
    { typeName: '拨打电话', type: 'callPhone', params: { data: '15156024260' }, callResult: '' },
    {
      typeName: '跳转页面',
      type: 'openView',
      params: {
        url: 'https://qr.chinaums.com/netpay-route-server/webpay/pay.do?expireTime=2024-12-17+12:10:44&instMid=QRPAYDEFAULT&merOrderId=49962024121715102064199882215&mid=898130186510146&msgSrc=WWW.HBSWJSB.COM&msgType=trade.h5Pay&notifyUrl=https://etax.hebei.chinatax.gov.cn/sbzx-web/api/hb/cxjmshbxf/h5Notify&requestTimestamp=2024-12-17+10:47:32&sign=ABB15AE9FE58E02A68C41B78FE538FCB&tid=21391989&totalAmount=40000&returnUrl=https://etax.hebei.chinatax.gov.cn/app-web/newappweb/index.html#/cxjmzfddcx/searchOrder',
        title: '跳转百度',
      },
      callResult: '',
    },
    { typeName: '关闭页面', type: 'closeView', params: {}, callResult: '' },
    { typeName: '获取手机手机状态栏高度', type: 'getStatusBarHeight', params: {}, callResult: '' },
    { typeName: '检查App是否存在', type: 'checkApp', params: { PackageScheme: Cr }, callResult: '' },
    { typeName: '打开本地App', type: 'openApp', params: { PackageScheme: Cr }, callResult: '' },
    {
      typeName: 'app使用外部网页打开Url',
      type: 'openURLWithExternalBrowser',
      params: { URL: 'http://www.baidu.com' },
      callResult: '',
    },
    { typeName: 'app获取APP信息', type: 'nativeGetAppVersion', params: {}, callResult: '' },
    {
      typeName: '保存持久化数据至app本地',
      type: 'nativeSaveData',
      params: { username: 'zhangsan', password: '123456' },
      callResult: '',
    },
    { typeName: '读取持久化数据', type: 'nativeGetData', params: { data: 'username' }, callResult: '' },
    {
      typeName: '调用app路由能力',
      type: 'nativeRouter',
      params: {
        routePath: 'gt4://taxapp/commonService/openView',
        json: { url: 'https://www.baidu.com', title: '这是标题' },
      },
      callResult: '',
    },
    {
      typeName: '保存图片到本地相册（图片地址）',
      type: 'nativeSaveImageToGallery',
      params: {
        imageUrl: 'https://imgsa.baidu.com/exp/pic/item/8367d1fc1e178a82baf49f02fa03738da877e80d.jpg',
        base64String: '',
      },
      callResult: '',
    },
    {
      typeName: '保存图片到本地相册（Base64图片）',
      type: 'nativeSaveImageToGallery',
      params: {
        base64String:
          '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',
      },
      callResult: '',
    },
  ],
  Yr = document.createElement('table'),
  _r = document.createElement('tbody');
_r.id = 'nativejs.tbody';
Yr.appendChild(_r);
document.querySelector('#app').appendChild(Yr);
const $r = document.getElementById('nativejs.tbody'),
  fe = (a, u = 1) => {
    const c = document.createElement('td');
    return (c.colspan = u), (c.innerText = a), c;
  },
  Kt = (a, u) => {
    const c = document.createElement('td'),
      f = document.createElement('u');
    return (f.innerText = a), c.appendChild(f), c.setAttribute('tdlocation', u), c;
  },
  Gt = (a) => {
    const u = document.createElement('td'),
      c = document.createElement('p');
    return c.setAttribute('tdplocation', a), u.appendChild(c), u;
  },
  zt = (a, u) => {
    const c = document.createElement('tr'),
      f = Kt(a.typeName, u);
    c.appendChild(f);
    const b = document.createElement('table');
    b.className = 'table2';
    const d = document.createElement('tbody'),
      q = document.createElement('tr');
    q.appendChild(fe('类型值')), q.appendChild(fe(a.type)), d.appendChild(q);
    const O = document.createElement('tr');
    O.appendChild(fe('传递参数')), O.appendChild(fe(JSON.stringify(a.params))), d.appendChild(O);
    const w = document.createElement('tr');
    w.appendChild(fe('回调结果')), w.appendChild(Gt(u)), d.appendChild(w), b.appendChild(d);
    const S = fe('', 2);
    return S.appendChild(b), c.appendChild(S), c;
  },
  Zt = (a) => {
    const u = a.target.closest('td[tdlocation]');
    if (!u) return;
    const c = parseInt(u.getAttribute('tdlocation')),
      f = Jr[c],
      b = document.querySelector(`p[tdplocation="${c}"]`);
    if (f.type === 'webBrowser') {
      le.commonuseTypes.webBrowser(f.params, (O, w, S) => { });
      return;
    }
    const d = f.type === 'nativeRouter' ? f.params.routePath : `/commonService/${f.type}`,
      q = f.type === 'nativeRouter' ? f.params.json : f.params;
    if (f.type === 'openView') {
      le.commonuseTypes.openView(q);
      return;
    }
    le.commonuseTypes.nativeRouter(d, q, (O, w, S) => {
      if (((b.innerHTML = ''), S && S.msg)) {
        b.innerText = S.msg;
        return;
      }
      switch (f.type) {
        case 'photo':
        case 'camera':
        case 'choosephoto':
        case 'choosecamera':
        case 'compressphoto':
          const g = document.createElement('img');
          (g.src = f.type === 'camera' || f.type === 'choosecamera' ? `data:image/jpg;base64,${w}` : w),
            b.appendChild(g);
          break;
        case 'nativeSaveImageToGallery':
          alert(S ? 'isSuccess=false' : 'isSuccess=true');
          break;
        default:
          b.innerText = w;
      }
    });
  };
Jr.forEach((a, u) => {
  const c = zt(a, u);
  $r.appendChild(c);
});
$r.addEventListener('click', Zt);
