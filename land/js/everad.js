function Datee() {
    var s, e = new Date;
    s = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    for (var t = 0; t < 90; t++) {
        var n = "date-" + t,
            i = document.getElementsByClassName(n),
            r = new Date(e.getTime() - 864e5 * t),
            o = 0;
        timeArray = c(i), timeArray = u(timeArray);
        for (var a = 0; a < i.length; a++) {
            (l = i[a].dataset).format ? i[a].innerHTML = p(r, l.format) : i[a].innerHTML = p(r), /\btime\b/.test(i[a].className) && (i[a].innerHTML += " " + timeArray[o], o++)
        }
    }
    for (t = 0; t < 90; t++) {
        n = "date" + t, i = document.getElementsByClassName(n), r = new Date(e.getTime() + 864e5 * t), o = 0;
        timeArray = c(i), timeArray = u(timeArray);
        for (a = 0; a < i.length; a++) {
            var l;
            (l = i[a].dataset).format ? i[a].innerHTML = p(r, l.format) : i[a].innerHTML = p(r)
        }
    }

    function c(e, t) {
        for (var n = [], i = 0; i < e.length; i++) e[i].className.match(/\btime\b/) && n.push(Math.round(0 + 1440 * Math.random()));
        return t ? n.sort(function (e, t) {
            return t - e
        }) : n.sort(function (e, t) {
            return e - t
        }), n
    }

    function u(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var i = Math.floor(e[n] / 60),
                r = e[n] % 60,
                o = i < 10 ? "0" + i : i,
                s = r < 10 ? "0" + r : r;
            t.push(o + ":" + s)
        }
        return t
    }

    function p(e, t) {
        var n = "",
            i = e.getDate(),
            r = e.getFullYear(),
            o = e.getMonth() + 1;
        switch (t || !0) {
            case "mm.dd.yyyy":
                return n += o < 10 ? "0" + o : o, n += ".", n += i < 10 ? "0" + i : i, n += "." + r;
            case "dd month yyyy":
                return n += i < 10 ? "0" + i : i, n += " ", n += s[o - 1], n += " " + r;
            case "dd month":
                return n += i < 10 ? "0" + i : i, n += " ", n += s[o - 1];
            case "day dd, month yyyy":
                return n += ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][new Date(r, o - 1, i).getDay()], n += " ", n += i < 10 ? "0" + i : i, n += " ", n += s[o - 1], n += " " + r;
            case "dd/mm/yyyy":
                return n += i < 10 ? "0" + i : i, n += "/", n += o < 10 ? "0" + o : o, n += "/" + r;
            case "dd-mm-yyyy":
                return n += i < 10 ? "0" + i : i, n += "-", n += o < 10 ? "0" + o : o, n += "-" + r;
            default:
                return n += i < 10 ? "0" + i : i, n += ".", n += o < 10 ? "0" + o : o, n += "." + r
        }
    }
}! function (f, k) {
    var t, n, y = typeof k,
        e = f.location,
        m = f.document,
        i = m.documentElement,
        r = f.jQuery,
        o = f.$,
        s = {},
        p = [],
        a = "1.10.2",
        g = p.concat,
        l = p.push,
        u = p.slice,
        c = p.indexOf,
        d = s.toString,
        v = s.hasOwnProperty,
        h = a.trim,
        we = function (e, t) {
            return new we.fn.init(e, t, n)
        },
        b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        x = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        _ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        N = /^-ms-/,
        D = /-([\da-z])/gi,
        L = function (e, t) {
            return t.toUpperCase()
        },
        j = function (e) {
            (m.addEventListener || "load" === e.type || "complete" === m.readyState) && (M(), we.ready())
        },
        M = function () {
            m.addEventListener ? (m.removeEventListener("DOMContentLoaded", j, !1), f.removeEventListener("load", j, !1)) : (m.detachEvent("onreadystatechange", j), f.detachEvent("onload", j))
        };

    function $(e) {
        var t = e.length,
            n = we.type(e);
        return !we.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && 0 < t && t - 1 in e)))
    }
    we.fn = we.prototype = {
            jquery: a,
            constructor: we,
            init: function (e, t, n) {
                var i, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : x.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof we ? t[0] : t, we.merge(this, we.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), _.test(i[1]) && we.isPlainObject(t))
                            for (i in t) we.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    if ((r = m.getElementById(i[2])) && r.parentNode) {
                        if (r.id !== i[2]) return n.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = m, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : we.isFunction(e) ? n.ready(e) : (e.selector !== k && (this.selector = e.selector, this.context = e.context), we.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function () {
                return u.call(this)
            },
            get: function (e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function (e) {
                var t = we.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e, t) {
                return we.each(this, e, t)
            },
            ready: function (e) {
                return we.ready.promise().done(e), this
            },
            slice: function () {
                return this.pushStack(u.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            map: function (n) {
                return this.pushStack(we.map(this, function (e, t) {
                    return n.call(e, t, e)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: l,
            sort: [].sort,
            splice: [].splice
        }, we.fn.init.prototype = we.fn, we.extend = we.fn.extend = function () {
            var e, t, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, a = 2), "object" == typeof s || we.isFunction(s) || (s = {}), l === a && (s = this, --a); a < l; a++)
                if (null != (r = arguments[a]))
                    for (i in r) e = s[i], s !== (n = r[i]) && (c && n && (we.isPlainObject(n) || (t = we.isArray(n))) ? (t ? (t = !1, o = e && we.isArray(e) ? e : []) : o = e && we.isPlainObject(e) ? e : {}, s[i] = we.extend(c, o, n)) : n !== k && (s[i] = n));
            return s
        }, we.extend({
            expando: "jQuery" + (a + Math.random()).replace(/\D/g, ""),
            noConflict: function (e) {
                return f.$ === we && (f.$ = o), e && f.jQuery === we && (f.jQuery = r), we
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? we.readyWait++ : we.ready(!0)
            },
            ready: function (e) {
                if (!0 === e ? !--we.readyWait : !we.isReady) {
                    if (!m.body) return setTimeout(we.ready);
                    (we.isReady = !0) !== e && 0 < --we.readyWait || (t.resolveWith(m, [we]), we.fn.trigger && we(m).trigger("ready").off("ready"))
                }
            },
            isFunction: function (e) {
                return "function" === we.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === we.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[d.call(e)] || "object" : typeof e
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== we.type(e) || e.nodeType || we.isWindow(e)) return !1;
                try {
                    if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (we.support.ownLast)
                    for (t in e) return v.call(e, t);
                for (t in e);
                return t === k || v.call(e, t)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function (e) {
                throw Error(e)
            },
            parseHTML: function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || m;
                var i = _.exec(e),
                    r = !n && [];
                return i ? [t.createElement(i[1])] : (i = we.buildFragment([e], t, r), r && we(r).remove(), we.merge([], i.childNodes))
            },
            parseJSON: function (e) {
                return f.JSON && f.JSON.parse ? f.JSON.parse(e) : null === e ? e : "string" == typeof e && ((e = we.trim(e)) && C.test(e.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + e)() : (we.error("Invalid JSON: " + e), k)
            },
            parseXML: function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    f.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                } catch (e) {
                    t = k
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + e), t
            },
            noop: function () {},
            globalEval: function (e) {
                e && we.trim(e) && (f.execScript || function (e) {
                    f.eval.call(f, e)
                })(e)
            },
            camelCase: function (e) {
                return e.replace(N, "ms-").replace(D, L)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, n) {
                var i = 0,
                    r = e.length,
                    o = $(e);
                if (n) {
                    if (o)
                        for (; i < r && !1 !== t.apply(e[i], n); i++);
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], n)) break
                } else if (o)
                    for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: h && !h.call("\ufeff ") ? function (e) {
                return null == e ? "" : h.call(e)
            } : function (e) {
                return null == e ? "" : (e + "").replace(w, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && ($(Object(e)) ? we.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (c) return c.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, t) {
                var n = t.length,
                    i = e.length,
                    r = 0;
                if ("number" == typeof n)
                    for (; r < n; r++) e[i++] = t[r];
                else
                    for (; t[r] !== k;) e[i++] = t[r++];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                var i = [],
                    r = 0,
                    o = e.length;
                for (n = !!n; r < o; r++) n !== !!t(e[r], r) && i.push(e[r]);
                return i
            },
            map: function (e, t, n) {
                var i, r = 0,
                    o = e.length,
                    s = [];
                if ($(e))
                    for (; r < o; r++) null != (i = t(e[r], r, n)) && (s[s.length] = i);
                else
                    for (r in e) null != (i = t(e[r], r, n)) && (s[s.length] = i);
                return g.apply([], s)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), we.isFunction(e) ? (n = u.call(arguments, 2), (i = function () {
                    return e.apply(t || this, n.concat(u.call(arguments)))
                }).guid = e.guid = e.guid || we.guid++, i) : k
            },
            access: function (e, t, n, i, r, o, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === we.type(n))
                    for (a in r = !0, n) we.access(e, t, a, n[a], !0, o, s);
                else if (i !== k && (r = !0, we.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(we(e), n)
                    })), t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            now: function () {
                return (new Date).getTime()
            },
            swap: function (e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
                return r
            }
        }), we.ready.promise = function (e) {
            if (!t)
                if (t = we.Deferred(), "complete" === m.readyState) setTimeout(we.ready);
                else if (m.addEventListener) m.addEventListener("DOMContentLoaded", j, !1), f.addEventListener("load", j, !1);
            else {
                m.attachEvent("onreadystatechange", j), f.attachEvent("onload", j);
                var n = !1;
                try {
                    n = null == f.frameElement && m.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!we.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        M(), we.ready()
                    }
                }()
            }
            return t.promise(e)
        }, we.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            s["[object " + t + "]"] = t.toLowerCase()
        }), n = we(m),
        function (n, r) {
            var e, f, x, _, o, i, m, k, c, g, T, s, y, v, a, u, b, C = "sizzle" + -new Date,
                w = n.document,
                E = 0,
                p = 0,
                l = re(),
                d = re(),
                h = re(),
                S = !1,
                A = function (e, t) {
                    return e === t && (S = !0), 0
                },
                N = typeof r,
                D = {}.hasOwnProperty,
                t = [],
                L = t.pop,
                j = t.push,
                M = t.push,
                $ = t.slice,
                H = t.indexOf || function (e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                z = O.replace("w", "w#"),
                q = "\\[" + P + "*(" + O + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + z + ")|)|)" + P + "*\\]",
                B = ":(" + O + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + q.replace(3, 8) + ")*)|.*)\\)|)",
                I = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                R = RegExp("^" + P + "*," + P + "*"),
                W = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                X = RegExp(P + "*[+~]"),
                V = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                Y = RegExp(B),
                U = RegExp("^" + z + "$"),
                Q = {
                    ID: RegExp("^#(" + O + ")"),
                    CLASS: RegExp("^\\.(" + O + ")"),
                    TAG: RegExp("^(" + O.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + q),
                    PSEUDO: RegExp("^" + B),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + F + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                G = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                ee = /'|\\/g,
                te = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                ne = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                M.apply(t = $.call(w.childNodes), w.childNodes), t[w.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: t.length ? function (e, t) {
                        j.apply(e, $.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }

            function ie(e, t, n, i) {
                var r, o, s, a, l, c, u, p, d, h;
                if ((t ? t.ownerDocument || t : w) !== T && g(t), n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = (t = t || T).nodeType) && 9 !== a) return [];
                if (y && !i) {
                    if (r = J.exec(e))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && b(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (r[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = r[3]) && f.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                        } if (f.qsa && (!v || !v.test(e))) {
                        if (p = u = C, d = t, h = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (c = he(e), (u = t.getAttribute("id")) ? p = u.replace(ee, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + fe(c[l]);
                            d = X.test(e) && t.parentNode || t, h = c.join(",")
                        }
                        if (h) try {
                            return M.apply(n, d.querySelectorAll(h)), n
                        } catch (e) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return function (e, t, n, i) {
                    var r, o, s, a, l, c = he(e);
                    if (!i && 1 === c.length) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && f.getById && 9 === t.nodeType && y && _.relative[o[1].type]) {
                            if (!(t = (_.find.ID(s.matches[0].replace(te, ne), t) || [])[0])) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (r = Q.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)
                            if ((l = _.find[a]) && (i = l(s.matches[0].replace(te, ne), X.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(r, 1), !(e = i.length && fe(o))) return M.apply(n, i), n;
                                break
                            }
                    }
                    return m(e, c)(i, t, !y, n, X.test(e)), n
                }(e.replace(I, "$1"), t, n, i)
            }

            function re() {
                var i = [];
                return function e(t, n) {
                    return i.push(t += " ") > _.cacheLength && delete e[i.shift()], e[t] = n
                }
            }

            function oe(e) {
                return e[C] = !0, e
            }

            function se(e) {
                var t = T.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ae(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
            }

            function le(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ce(t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ue(n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function pe(s) {
                return oe(function (o) {
                    return o = +o, oe(function (e, t) {
                        for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }
            for (e in i = ie.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, f = ie.support = {}, g = ie.setDocument = function (e) {
                    var l = e ? e.ownerDocument || e : w,
                        t = l.defaultView;
                    return l !== T && 9 === l.nodeType && l.documentElement ? (s = (T = l).documentElement, y = !i(l), t && t.attachEvent && t !== t.top && t.attachEvent("onbeforeunload", function () {
                        g()
                    }), f.attributes = se(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), f.getElementsByTagName = se(function (e) {
                        return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                    }), f.getElementsByClassName = se(function (e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), f.getById = se(function (e) {
                        return s.appendChild(e).id = C, !l.getElementsByName || !l.getElementsByName(C).length
                    }), f.getById ? (_.find.ID = function (e, t) {
                        if (typeof t.getElementById !== N && y) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, _.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete _.find.ID, _.filter.ID = function (e) {
                        var n = e.replace(te, ne);
                        return function (e) {
                            var t = typeof e.getAttributeNode !== N && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), _.find.TAG = f.getElementsByTagName ? function (e, t) {
                        return typeof t.getElementsByTagName !== N ? t.getElementsByTagName(e) : r
                    } : function (e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, _.find.CLASS = f.getElementsByClassName && function (e, t) {
                        return typeof t.getElementsByClassName !== N && y ? t.getElementsByClassName(e) : r
                    }, a = [], v = [], (f.qsa = G.test(l.querySelectorAll)) && (se(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                    }), se(function (e) {
                        var t = l.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (f.matchesSelector = G.test(u = s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && se(function (e) {
                        f.disconnectedMatch = u.call(e, "div"), u.call(e, "[s!='']:x"), a.push("!=", B)
                    }), v = v.length && RegExp(v.join("|")), a = a.length && RegExp(a.join("|")), b = G.test(s.contains) || s.compareDocumentPosition ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, A = s.compareDocumentPosition ? function (e, t) {
                        if (e === t) return S = !0, 0;
                        var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return n ? 1 & n || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === l || b(w, e) ? -1 : t === l || b(w, t) ? 1 : c ? H.call(c, e) - H.call(c, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function (e, t) {
                        var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                        if (e === t) return S = !0, 0;
                        if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : c ? H.call(c, e) - H.call(c, t) : 0;
                        if (r === o) return le(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (; s[i] === a[i];) i++;
                        return i ? le(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                    }, l) : T
                }, ie.matches = function (e, t) {
                    return ie(e, null, null, t)
                }, ie.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== T && g(e), t = t.replace(V, "='$1']"), !(!f.matchesSelector || !y || a && a.test(t) || v && v.test(t))) try {
                        var n = u.call(e, t);
                        if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return 0 < ie(t, T, null, [e]).length
                }, ie.contains = function (e, t) {
                    return (e.ownerDocument || e) !== T && g(e), b(e, t)
                }, ie.attr = function (e, t) {
                    (e.ownerDocument || e) !== T && g(e);
                    var n = _.attrHandle[t.toLowerCase()],
                        i = n && D.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !y) : r;
                    return i === r ? f.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i
                }, ie.error = function (e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }, ie.uniqueSort = function (e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (S = !f.detectDuplicates, c = !f.sortStable && e.slice(0), e.sort(A), S) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, o = ie.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += o(t);
                    return n
                }, (_ = ie.selectors = {
                    cacheLength: 50,
                    createPseudo: oe,
                    match: Q,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[5] && e[2];
                            return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== r ? e[2] = e[4] : n && Y.test(n) && (t = he(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = l[e + " "];
                            return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && l(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== N && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (n, i, r) {
                            return function (e) {
                                var t = ie.attr(e, n);
                                return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function (h, e, t, f, m) {
                            var g = "nth" !== h.slice(0, 3),
                                y = "last" !== h.slice(-4),
                                v = "of-type" === e;
                            return 1 === f && 0 === m ? function (e) {
                                return !!e.parentNode
                            } : function (e, t, n) {
                                var i, r, o, s, a, l, c = g !== y ? "nextSibling" : "previousSibling",
                                    u = e.parentNode,
                                    p = v && e.nodeName.toLowerCase(),
                                    d = !n && !v;
                                if (u) {
                                    if (g) {
                                        for (; c;) {
                                            for (o = e; o = o[c];)
                                                if (v ? o.nodeName.toLowerCase() === p : 1 === o.nodeType) return !1;
                                            l = c = "only" === h && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? u.firstChild : u.lastChild], y && d) {
                                        for (a = (i = (r = u[C] || (u[C] = {}))[h] || [])[0] === E && i[1], s = i[0] === E && i[2], o = a && u.childNodes[a]; o = ++a && o && o[c] || (s = a = 0) || l.pop();)
                                            if (1 === o.nodeType && ++s && o === e) {
                                                r[h] = [E, a, s];
                                                break
                                            }
                                    } else if (d && (i = (e[C] || (e[C] = {}))[h]) && i[0] === E) s = i[1];
                                    else
                                        for (;
                                            (o = ++a && o && o[c] || (s = a = 0) || l.pop()) && ((v ? o.nodeName.toLowerCase() !== p : 1 !== o.nodeType) || !++s || (d && ((o[C] || (o[C] = {}))[h] = [E, s]), o !== e)););
                                    return (s -= m) === f || 0 == s % f && 0 <= s / f
                                }
                            }
                        },
                        PSEUDO: function (e, o) {
                            var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                            return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                                for (var n, i = s(e, o), r = i.length; r--;) e[n = H.call(e, i[r])] = !(t[n] = i[r])
                            }) : function (e) {
                                return s(e, 0, t)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: oe(function (e) {
                            var i = [],
                                r = [],
                                a = m(e.replace(I, "$1"));
                            return a[C] ? oe(function (e, t, n, i) {
                                for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                            }) : function (e, t, n) {
                                return i[0] = e, a(i, null, n, r), !r.pop()
                            }
                        }),
                        has: oe(function (t) {
                            return function (e) {
                                return 0 < ie(t, e).length
                            }
                        }),
                        contains: oe(function (t) {
                            return function (e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                        }),
                        lang: oe(function (n) {
                            return U.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                                function (e) {
                                    var t;
                                    do {
                                        if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function (e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function (e) {
                            return e === s
                        },
                        focus: function (e) {
                            return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return !1 === e.disabled
                        },
                        disabled: function (e) {
                            return !0 === e.disabled
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !_.pseudos.empty(e)
                        },
                        header: function (e) {
                            return K.test(e.nodeName)
                        },
                        input: function (e) {
                            return Z.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: pe(function () {
                            return [0]
                        }),
                        last: pe(function (e, t) {
                            return [t - 1]
                        }),
                        eq: pe(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: pe(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: pe(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: pe(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                            return e
                        }),
                        gt: pe(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; t > ++i;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = _.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[e] = ce(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[e] = ue(e);

            function de() {}

            function he(e, t) {
                var n, i, r, o, s, a, l, c = d[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, a = [], l = _.preFilter; s;) {
                    for (o in (!n || (i = R.exec(s))) && (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = W.exec(s)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(I, " ")
                        }), s = s.slice(n.length)), _.filter) !(i = Q[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: o,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? ie.error(e) : d(e, a).slice(0)
            }

            function fe(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function me(a, e, t) {
                var l = e.dir,
                    c = t && "parentNode" === l,
                    u = p++;
                return e.first ? function (e, t, n) {
                    for (; e = e[l];)
                        if (1 === e.nodeType || c) return a(e, t, n)
                } : function (e, t, n) {
                    var i, r, o, s = E + " " + u;
                    if (n) {
                        for (; e = e[l];)
                            if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                    } else
                        for (; e = e[l];)
                            if (1 === e.nodeType || c)
                                if ((r = (o = e[C] || (e[C] = {}))[l]) && r[0] === s) {
                                    if (!0 === (i = r[1]) || i === x) return !0 === i
                                } else if ((r = o[l] = [s])[1] = a(e, t, n) || x, !0 === r[1]) return !0
                }
            }

            function ge(r) {
                return 1 < r.length ? function (e, t, n) {
                    for (var i = r.length; i--;)
                        if (!r[i](e, t, n)) return !1;
                    return !0
                } : r[0]
            }

            function ye(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), c && t.push(a));
                return s
            }

            function ve(h, f, m, g, y, e) {
                return g && !g[C] && (g = ve(g)), y && !y[C] && (y = ve(y, e)), oe(function (e, t, n, i) {
                    var r, o, s, a = [],
                        l = [],
                        c = t.length,
                        u = e || function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n);
                            return n
                        }(f || "*", n.nodeType ? [n] : n, []),
                        p = !h || !e && f ? u : ye(u, a, h, n, i),
                        d = m ? y || (e ? h : c || g) ? [] : t : p;
                    if (m && m(p, d, n, i), g)
                        for (r = ye(d, l), g(r, [], n, i), o = r.length; o--;)(s = r[o]) && (d[l[o]] = !(p[l[o]] = s));
                    if (e) {
                        if (y || h) {
                            if (y) {
                                for (r = [], o = d.length; o--;)(s = d[o]) && r.push(p[o] = s);
                                y(null, d = [], r, i)
                            }
                            for (o = d.length; o--;)(s = d[o]) && -1 < (r = y ? H.call(e, s) : a[o]) && (e[r] = !(t[r] = s))
                        }
                    } else d = ye(d === t ? d.splice(c, d.length) : d), y ? y(null, t, d, i) : M.apply(t, d)
                })
            }

            function be(e) {
                for (var i, t, n, r = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = me(function (e) {
                        return e === i
                    }, s, !0), c = me(function (e) {
                        return -1 < H.call(i, e)
                    }, s, !0), u = [function (e, t, n) {
                        return !o && (n || t !== k) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n))
                    }]; a < r; a++)
                    if (t = _.relative[e[a].type]) u = [me(ge(u), t)];
                    else {
                        if ((t = _.filter[e[a].type].apply(null, e[a].matches))[C]) {
                            for (n = ++a; n < r && !_.relative[e[n].type]; n++);
                            return ve(1 < a && ge(u), 1 < a && fe(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(I, "$1"), t, a < n && be(e.slice(a, n)), n < r && be(e = e.slice(n)), n < r && fe(e))
                        }
                        u.push(t)
                    } return ge(u)
            }
            de.prototype = _.filters = _.pseudos, _.setFilters = new de, m = ie.compile = function (e, t) {
                var n, g, y, v, b, w, i, r = [],
                    o = [],
                    s = h[e + " "];
                if (!s) {
                    for (t || (t = he(e)), n = t.length; n--;)(s = be(t[n]))[C] ? r.push(s) : o.push(s);
                    s = h(e, (g = o, b = (v = 0) < (y = r).length, w = 0 < g.length, i = function (e, t, n, i, r) {
                        var o, s, a, l = [],
                            c = 0,
                            u = "0",
                            p = e && [],
                            d = null != r,
                            h = k,
                            f = e || w && _.find.TAG("*", r && t.parentNode || t),
                            m = E += null == h ? 1 : Math.random() || .1;
                        for (d && (k = t !== T && t, x = v); null != (o = f[u]); u++) {
                            if (w && o) {
                                for (s = 0; a = g[s++];)
                                    if (a(o, t, n)) {
                                        i.push(o);
                                        break
                                    } d && (E = m, x = ++v)
                            }
                            b && ((o = !a && o) && c--, e && p.push(o))
                        }
                        if (c += u, b && u !== c) {
                            for (s = 0; a = y[s++];) a(p, l, t, n);
                            if (e) {
                                if (0 < c)
                                    for (; u--;) p[u] || l[u] || (l[u] = L.call(i));
                                l = ye(l)
                            }
                            M.apply(i, l), d && !e && 0 < l.length && 1 < c + y.length && ie.uniqueSort(i)
                        }
                        return d && (E = m, k = h), p
                    }, b ? oe(i) : i))
                }
                return s
            }, f.sortStable = C.split("").sort(A).join("") === C, f.detectDuplicates = S, g(), f.sortDetached = se(function (e) {
                return 1 & e.compareDocumentPosition(T.createElement("div"))
            }), se(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ae("type|href|height|width", function (e, t, n) {
                return n ? r : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), f.attributes && se(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ae("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? r : e.defaultValue
            }), se(function (e) {
                return null == e.getAttribute("disabled")
            }) || ae(F, function (e, t, n) {
                var i;
                return n ? r : (i = e.getAttributeNode(t)) && i.specified ? i.value : !0 === e[t] ? t.toLowerCase() : null
            }), we.find = ie, we.expr = ie.selectors, we.expr[":"] = we.expr.pseudos, we.unique = ie.uniqueSort, we.text = ie.getText, we.isXMLDoc = ie.isXML, we.contains = ie.contains
        }(f);
    var H = {};
    we.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? H[r] || (n = H[e = r] = {}, we.each(e.match(T) || [], function (e, t) {
            n[t] = !0
        }), n) : we.extend({}, r);
        var i, t, o, s, a, l, c = [],
            u = !r.once && [],
            p = function (e) {
                for (t = r.memory && e, o = !0, a = l || 0, l = 0, s = c.length, i = !0; c && a < s; a++)
                    if (!1 === c[a].apply(e[0], e[1]) && r.stopOnFalse) {
                        t = !1;
                        break
                    } i = !1, c && (u ? u.length && p(u.shift()) : t ? c = [] : d.disable())
            },
            d = {
                add: function () {
                    if (c) {
                        var e = c.length;
                        (function i(e) {
                            we.each(e, function (e, t) {
                                var n = we.type(t);
                                "function" === n ? r.unique && d.has(t) || c.push(t) : t && t.length && "string" !== n && i(t)
                            })
                        })(arguments), i ? s = c.length : t && (l = e, p(t))
                    }
                    return this
                },
                remove: function () {
                    return c && we.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = we.inArray(t, c, n));) c.splice(n, 1), i && (n <= s && s--, n <= a && a--)
                    }), this
                },
                has: function (e) {
                    return e ? -1 < we.inArray(e, c) : !(!c || !c.length)
                },
                empty: function () {
                    return c = [], s = 0, this
                },
                disable: function () {
                    return c = u = t = k, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return u = k, t || d.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, t) {
                    return !c || o && !u || (t = [e, (t = t || []).slice ? t.slice() : t], i ? u.push(t) : p(t)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return d
    }, we.extend({
        Deferred: function (e) {
            var s = [
                    ["resolve", "done", we.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", we.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", we.Callbacks("memory")]
                ],
                r = "pending",
                a = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return l.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var o = arguments;
                        return we.Deferred(function (r) {
                            we.each(s, function (e, t) {
                                var n = t[0],
                                    i = we.isFunction(o[e]) && o[e];
                                l[t[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && we.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[n + "With"](this === a ? r.promise() : this, i ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? we.extend(e, a) : a
                    }
                },
                l = {};
            return a.pipe = a.then, we.each(s, function (e, t) {
                var n = t[2],
                    i = t[3];
                a[t[1]] = n.add, i && n.add(function () {
                    r = i
                }, s[1 ^ e][2].disable, s[2][2].lock), l[t[0]] = function () {
                    return l[t[0] + "With"](this === l ? a : this, arguments), this
                }, l[t[0] + "With"] = n.fireWith
            }), a.promise(l), e && e.call(l, l), l
        },
        when: function (e) {
            var r, t, n, i = 0,
                o = u.call(arguments),
                s = o.length,
                a = 1 !== s || e && we.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : we.Deferred(),
                c = function (t, n, i) {
                    return function (e) {
                        n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === r ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (1 < s)
                for (r = Array(s), t = Array(s), n = Array(s); i < s; i++) o[i] && we.isFunction(o[i].promise) ? o[i].promise().done(c(i, n, o)).fail(l.reject).progress(c(i, t, r)) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    }), we.support = function (o) {
        var e, t, n, i, r, s, a, l, c, u = m.createElement("div");
        if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = u.getElementsByTagName("*") || [], !(t = u.getElementsByTagName("a")[0]) || !t.style || !e.length) return o;
        s = (i = m.createElement("select")).appendChild(m.createElement("option")), n = u.getElementsByTagName("input")[0], t.style.cssText = "top:1px;float:left;opacity:.5", o.getSetAttribute = "t" !== u.className, o.leadingWhitespace = 3 === u.firstChild.nodeType, o.tbody = !u.getElementsByTagName("tbody").length, o.htmlSerialize = !!u.getElementsByTagName("link").length, o.style = /top/.test(t.getAttribute("style")), o.hrefNormalized = "/a" === t.getAttribute("href"), o.opacity = /^0.5/.test(t.style.opacity), o.cssFloat = !!t.style.cssFloat, o.checkOn = !!n.value, o.optSelected = s.selected, o.enctype = !!m.createElement("form").enctype, o.html5Clone = "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML, o.inlineBlockNeedsLayout = !1, o.shrinkWrapBlocks = !1, o.pixelPosition = !1, o.deleteExpando = !0, o.noCloneEvent = !0, o.reliableMarginRight = !0, o.boxSizingReliable = !0, n.checked = !0, o.noCloneChecked = n.cloneNode(!0).checked, i.disabled = !0, o.optDisabled = !s.disabled;
        try {
            delete u.test
        } catch (e) {
            o.deleteExpando = !1
        }
        for (c in (n = m.createElement("input")).setAttribute("value", ""), o.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), o.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), (r = m.createDocumentFragment()).appendChild(n), o.appendChecked = n.checked, o.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function () {
                o.noCloneEvent = !1
            }), u.cloneNode(!0).click()), {
                submit: !0,
                change: !0,
                focusin: !0
            }) u.setAttribute(a = "on" + c, "t"), o[c + "Bubbles"] = a in f || !1 === u.attributes[a].expando;
        for (c in u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === u.style.backgroundClip, we(o)) break;
        return o.ownLast = "0" !== c, we(function () {
            var e, t, n, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                r = m.getElementsByTagName("body")[0];
            r && ((e = m.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(e).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = u.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", o.reliableHiddenOffsets = l && 0 === n[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", we.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function () {
                o.boxSizing = 4 === u.offsetWidth
            }), f.getComputedStyle && (o.pixelPosition = "1%" !== (f.getComputedStyle(u, null) || {}).top, o.boxSizingReliable = "4px" === (f.getComputedStyle(u, null) || {
                width: "4px"
            }).width, (t = u.appendChild(m.createElement("div"))).style.cssText = u.style.cssText = i, t.style.marginRight = t.style.width = "0", u.style.width = "1px", o.reliableMarginRight = !parseFloat((f.getComputedStyle(t, null) || {}).marginRight)), typeof u.style.zoom !== y && (u.innerHTML = "", u.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", o.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", o.shrinkWrapBlocks = 3 !== u.offsetWidth, o.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(e), e = u = n = t = null)
        }), e = i = r = s = t = n = null, o
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function O(e, t, n, i) {
        if (we.acceptData(e)) {
            var r, o, s = we.expando,
                a = e.nodeType,
                l = a ? we.cache : e,
                c = a ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || n !== k || "string" != typeof t) return c || (c = a ? e[s] = p.pop() || we.guid++ : s), l[c] || (l[c] = a ? {} : {
                toJSON: we.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = we.extend(l[c], t) : l[c].data = we.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), n !== k && (o[we.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[we.camelCase(t)]) : r = o, r
        }
    }

    function z(e, t, n) {
        if (we.acceptData(e)) {
            var i, r, o = e.nodeType,
                s = o ? we.cache : e,
                a = o ? e[we.expando] : we.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    we.isArray(t) ? t = t.concat(we.map(t, we.camelCase)) : t in i ? t = [t] : t = (t = we.camelCase(t)) in i ? [t] : t.split(" "), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !B(i) : !we.isEmptyObject(i)) return
                }(n || (delete s[a].data, B(s[a]))) && (o ? we.cleanData([e], !0) : we.support.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function q(e, t, n) {
        if (n === k && 1 === e.nodeType) {
            var i = "data-" + t.replace(P, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? we.parseJSON(n) : n)
                } catch (e) {}
                we.data(e, t, n)
            } else n = k
        }
        return n
    }

    function B(e) {
        var t;
        for (t in e)
            if (("data" !== t || !we.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    we.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return !!(e = e.nodeType ? we.cache[e[we.expando]] : e[we.expando]) && !B(e)
        },
        data: function (e, t, n) {
            return O(e, t, n)
        },
        removeData: function (e, t) {
            return z(e, t)
        },
        _data: function (e, t, n) {
            return O(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return z(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && we.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), we.fn.extend({
        data: function (e, t) {
            var n, i, r = null,
                o = 0,
                s = this[0];
            if (e === k) {
                if (this.length && (r = we.data(s), 1 === s.nodeType && !we._data(s, "parsedAttrs"))) {
                    for (n = s.attributes; n.length > o; o++) 0 === (i = n[o].name).indexOf("data-") && q(s, i = we.camelCase(i.slice(5)), r[i]);
                    we._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                we.data(this, e)
            }) : 1 < arguments.length ? this.each(function () {
                we.data(this, e, t)
            }) : s ? q(s, e, we.data(s, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                we.removeData(this, e)
            })
        }
    }), we.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = we._data(e, t), n && (!i || we.isArray(n) ? i = we._data(e, t, we.makeArray(n)) : i.push(n)), i || []) : k
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = we.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = we._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                we.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return we._data(e, n) || we._data(e, n, {
                empty: we.Callbacks("once memory").add(function () {
                    we._removeData(e, t + "queue"), we._removeData(e, n)
                })
            })
        }
    }), we.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), e > arguments.length ? we.queue(this[0], t) : n === k ? this : this.each(function () {
                var e = we.queue(this, t, n);
                we._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && we.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                we.dequeue(this, e)
            })
        },
        delay: function (i, e) {
            return i = we.fx && we.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
                var n = setTimeout(e, i);
                t.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = we.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = k), e = e || "fx"; s--;)(n = we._data(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var I, R, W = /[\t\r\n\f]/g,
        X = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        U = /^(?:checked|selected)$/i,
        Q = we.support.getSetAttribute,
        G = we.support.input;
    we.fn.extend({
        attr: function (e, t) {
            return we.access(this, we.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                we.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return we.access(this, we.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return e = we.propFix[e] || e, this.each(function () {
                try {
                    this[e] = k, delete this[e]
                } catch (e) {}
            })
        },
        addClass: function (t) {
            var e, n, i, r, o, s = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (we.isFunction(t)) return this.each(function (e) {
                we(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(T) || []; s < a; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        n.className = we.trim(i)
                    } return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (we.isFunction(t)) return this.each(function (e) {
                we(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(T) || []; s < a; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        n.className = t ? we.trim(i) : ""
                    } return this
        },
        toggleClass: function (r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : we.isFunction(r) ? this.each(function (e) {
                we(this).toggleClass(r.call(this, e, this.className, t), t)
            }) : this.each(function () {
                if ("string" === o)
                    for (var e, t = 0, n = we(this), i = r.match(T) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else(o === y || "boolean" === o) && (this.className && we._data(this, "__className__", this.className), this.className = this.className || !1 === r ? "" : we._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(W, " ").indexOf(t)) return !0;
            return !1
        },
        val: function (n) {
            var e, i, r, t = this[0];
            return arguments.length ? (r = we.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, we(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : we.isArray(t) && (t = we.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (i = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== k || (this.value = t))
            })) : t ? (i = we.valHooks[t.type] || we.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== k ? e : "string" == typeof (e = t.value) ? e.replace(X, "") : null == e ? "" : e : void 0
        }
    }), we.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = we.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (!(!(n = i[l]).selected && l !== r || (we.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && we.nodeName(n.parentNode, "optgroup"))) {
                            if (t = we(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = we.makeArray(t), s = r.length; s--;)((i = r[s]).selected = 0 <= we.inArray(we(i).val(), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === y ? we.prop(e, t, n) : (1 === o && we.isXMLDoc(e) || (t = t.toLowerCase(), i = we.attrHooks[t] || (we.expr.match.bool.test(t) ? R : I)), n === k ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = we.find.attr(e, t)) ? k : r : null !== n ? i && "set" in i && (r = i.set(e, n, t)) !== k ? r : (e.setAttribute(t, n + ""), n) : (we.removeAttr(e, t), k))
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = we.propFix[n] || n, we.expr.match.bool.test(n) ? G && Q || !U.test(n) ? e[i] = !1 : e[we.camelCase("default-" + n)] = e[i] = !1 : we.attr(e, n, ""), e.removeAttribute(Q ? n : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!we.support.radioValue && "radio" === t && we.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !we.isXMLDoc(e)) && (t = we.propFix[t] || t, r = we.propHooks[t]), n !== k ? r && "set" in r && (i = r.set(e, n, t)) !== k ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = we.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), R = {
        set: function (e, t, n) {
            return !1 === t ? we.removeAttr(e, n) : G && Q || !U.test(n) ? e.setAttribute(!Q && we.propFix[n] || n, n) : e[we.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, we.each(we.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = we.expr.attrHandle[t] || we.find.attr;
        we.expr.attrHandle[t] = G && Q || !U.test(t) ? function (e, t, n) {
            var i = we.expr.attrHandle[t],
                r = n ? k : (we.expr.attrHandle[t] = k) != o(e, t, n) ? t.toLowerCase() : null;
            return we.expr.attrHandle[t] = i, r
        } : function (e, t, n) {
            return n ? k : e[we.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), G && Q || (we.attrHooks.value = {
        set: function (e, t, n) {
            return we.nodeName(e, "input") ? (e.defaultValue = t, k) : I && I.set(e, t, n)
        }
    }), Q || (I = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : k
        }
    }, we.expr.attrHandle.id = we.expr.attrHandle.name = we.expr.attrHandle.coords = function (e, t, n) {
        var i;
        return n ? k : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, we.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : k
        },
        set: I.set
    }, we.attrHooks.contenteditable = {
        set: function (e, t, n) {
            I.set(e, "" !== t && t, n)
        }
    }, we.each(["width", "height"], function (e, n) {
        we.attrHooks[n] = {
            set: function (e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : k
            }
        }
    })), we.support.hrefNormalized || we.each(["href", "src"], function (e, t) {
        we.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), we.support.style || (we.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || k
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), we.support.optSelected || (we.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        we.propFix[this.toLowerCase()] = this
    }), we.support.enctype || (we.propFix.enctype = "encoding"), we.each(["radio", "checkbox"], function () {
        we.valHooks[this] = {
            set: function (e, t) {
                return we.isArray(t) ? e.checked = 0 <= we.inArray(we(e).val(), t) : k
            }
        }, we.support.checkOn || (we.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var J = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        K = /^(?:mouse|contextmenu)|click/,
        ee = /^(?:focusinfocus|focusoutblur)$/,
        te = /^([^.]*)(?:\.(.+)|)$/;

    function ne() {
        return !0
    }

    function ie() {
        return !1
    }

    function re() {
        try {
            return m.activeElement
        } catch (e) {}
    }
    we.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, c, u, p, d, h, f, m, g = we._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = we.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || ((u = g.handle = function (e) {
                        return typeof we === y || e && we.event.triggered === e.type ? k : we.event.dispatch.apply(u.elem, arguments)
                    }).elem = e), a = (t = (t || "").match(T) || [""]).length; a--;) h = m = (o = te.exec(t[a]) || [])[1], f = (o[2] || "").split(".").sort(), h && (c = we.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = we.event.special[h] || {}, p = we.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && we.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (d = s[h]) || ((d = s[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), we.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, l, c, u, p, d, h, f, m, g = we.hasData(e) && we._data(e);
            if (g && (u = g.events)) {
                for (c = (t = (t || "").match(T) || [""]).length; c--;)
                    if (h = m = (a = te.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (p = we.event.special[h] || {}, d = u[h = (i ? p.delegateType : p.bindType) || h] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, p.remove && p.remove.call(e, s));
                        l && !d.length && (p.teardown && !1 !== p.teardown.call(e, f, g.handle) || we.removeEvent(e, h, g.handle), delete u[h])
                    } else
                        for (h in u) we.event.remove(e, h + t[c], n, i, !0);
                we.isEmptyObject(u) && (delete g.handle, we._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, i) {
            var r, o, s, a, l, c, u, p = [n || m],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = n = n || m, 3 !== n.nodeType && 8 !== n.nodeType && !ee.test(d + we.event.triggered) && (0 <= d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), o = d.indexOf(":") < 0 && "on" + d, (e = e[we.expando] ? e : new we.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = k, e.target || (e.target = n), t = null == t ? [e] : we.makeArray(t, [e]), l = we.event.special[d] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !we.isWindow(n)) {
                    for (a = l.delegateType || d, ee.test(a + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (n.ownerDocument || m) && p.push(c.defaultView || c.parentWindow || f)
                }
                for (u = 0;
                    (s = p[u++]) && !e.isPropagationStopped();) e.type = 1 < u ? a : l.bindType || d, (r = (we._data(s, "events") || {})[e.type] && we._data(s, "handle")) && r.apply(s, t), (r = o && s[o]) && we.acceptData(s) && r.apply && !1 === r.apply(s, t) && e.preventDefault();
                if (e.type = d, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), t)) && we.acceptData(n) && o && n[d] && !we.isWindow(n)) {
                    (c = n[o]) && (n[o] = null), we.event.triggered = d;
                    try {
                        n[d]()
                    } catch (e) {}
                    we.event.triggered = k, c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = we.event.fix(e);
            var t, n, i, r, o, s = [],
                a = u.call(arguments),
                l = (we._data(this, "events") || {})[e.type] || [],
                c = we.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = we.event.handlers.call(this, e, l), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, (n = ((we.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) !== k && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], o = 0; o < a; o++) r[n = (i = t[o]).selector + " "] === k && (r[n] = i.needsContext ? 0 <= we(n, this).index(l) : we.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    } return t.length > a && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function (e) {
            if (e[we.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = K.test(r) ? this.mouseHooks : Z.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new we.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || m), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || m).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || o === k || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== re() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === re() && this.blur ? (this.blur(), !1) : k
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return we.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : k
                },
                _default: function (e) {
                    return we.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== k && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = we.extend(new we.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? we.event.trigger(r, null, t) : we.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, we.removeEvent = m.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === y && (e[i] = null), e.detachEvent(i, n))
    }, we.Event = function (e, t) {
        return this instanceof we.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? ne : ie) : this.type = e, t && we.extend(this, t), this.timeStamp = e && e.timeStamp || we.now(), this[we.expando] = !0, k) : new we.Event(e, t)
    }, we.Event.prototype = {
        isDefaultPrevented: ie,
        isPropagationStopped: ie,
        isImmediatePropagationStopped: ie,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ne, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ne, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = ne, this.stopPropagation()
        }
    }, we.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, r) {
        we.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return (!n || n !== this && !we.contains(this, n)) && (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), we.support.submitBubbles || (we.event.special.submit = {
        setup: function () {
            return !we.nodeName(this, "form") && (we.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = we.nodeName(t, "input") || we.nodeName(t, "button") ? t.form : k;
                n && !we._data(n, "submitBubbles") && (we.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), we._data(n, "submitBubbles", !0))
            }), k)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && we.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return !we.nodeName(this, "form") && (we.event.remove(this, "._submit"), k)
        }
    }), we.support.changeBubbles || (we.event.special.change = {
        setup: function () {
            return J.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (we.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), we.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), we.event.simulate("change", this, e, !0)
            })), !1) : (we.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                J.test(t.nodeName) && !we._data(t, "changeBubbles") && (we.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || we.event.simulate("change", this.parentNode, e, !0)
                }), we._data(t, "changeBubbles", !0))
            }), k)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : k
        },
        teardown: function () {
            return we.event.remove(this, "._change"), !J.test(this.nodeName)
        }
    }), we.support.focusinBubbles || we.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            i = function (e) {
                we.event.simulate(t, e.target, we.event.fix(e), !0)
            };
        we.event.special[t] = {
            setup: function () {
                0 == n++ && m.addEventListener(e, i, !0)
            },
            teardown: function () {
                0 == --n && m.removeEventListener(e, i, !0)
            }
        }
    }), we.fn.extend({
        on: function (e, t, n, i, r) {
            var o, s;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = k), e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = k) : null == i && ("string" == typeof t ? (i = n, n = k) : (i = n, n = t, t = k)), !1 === i) i = ie;
            else if (!i) return this;
            return 1 === r && (s = i, (i = function (e) {
                return we().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = we.guid++)), this.each(function () {
                we.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, we(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = k), !1 === n && (n = ie), this.each(function () {
                we.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                we.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? we.event.trigger(e, t, n, !0) : k
        }
    });
    var oe = /^.[^:#\[\.,]*$/,
        se = /^(?:parents|prev(?:Until|All))/,
        ae = we.expr.match.needsContext,
        le = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function ce(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function ue(e, n, i) {
        if (we.isFunction(n)) return we.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return we.grep(e, function (e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (oe.test(n)) return we.filter(n, e, i);
            n = we.filter(n, e)
        }
        return we.grep(e, function (e) {
            return 0 <= we.inArray(e, n) !== i
        })
    }

    function pe(e) {
        var t = de.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    we.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(we(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (we.contains(i[t], this)) return !0
            }));
            for (t = 0; t < r; t++) we.find(e, i[t], n);
            return (n = this.pushStack(1 < r ? we.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = we(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; t < i; t++)
                    if (we.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ue(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(ue(this, e || [], !1))
        },
        is: function (e) {
            return !!ue(this, "string" == typeof e && ae.test(e) ? we(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ae.test(e) || "string" != typeof e ? we(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && we.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? we.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? we.inArray(this[0], we(e)) : we.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? we(e, t) : we.makeArray(e && e.nodeType ? [e] : e),
                i = we.merge(this.get(), n);
            return this.pushStack(we.unique(i))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), we.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return we.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return we.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ce(e, "nextSibling")
        },
        prev: function (e) {
            return ce(e, "previousSibling")
        },
        nextAll: function (e) {
            return we.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return we.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return we.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return we.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return we.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return we.sibling(e.firstChild)
        },
        contents: function (e) {
            return we.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : we.merge([], e.childNodes)
        }
    }, function (i, r) {
        we.fn[i] = function (e, t) {
            var n = we.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = we.filter(t, n)), 1 < this.length && (le[i] || (n = we.unique(n)), se.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    }), we.extend({
        filter: function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? we.find.matchesSelector(i, e) ? [i] : [] : we.find.matches(e, we.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (n === k || 1 !== r.nodeType || !we(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var de = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        he = / jQuery\d+="(?:null|\d+)"/g,
        fe = RegExp("<(?:" + de + ")[\\s/>]", "i"),
        me = /^\s+/,
        ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ye = /<([\w:]+)/,
        ve = /<tbody/i,
        be = /<|&#?\w+;/,
        xe = /<(?:script|style|link)/i,
        _e = /^(?:checkbox|radio)$/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Te = /^$|\/(?:java|ecma)script/i,
        Ce = /^true\/(.*)/,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: we.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ae = pe(m).appendChild(m.createElement("div"));

    function Ne(e, t) {
        return we.nodeName(e, "table") && we.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function De(e) {
        return e.type = (null !== we.find.attr(e, "type")) + "/" + e.type, e
    }

    function Le(e) {
        var t = Ce.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function je(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) we._data(n, "globalEval", !t || we._data(t[i], "globalEval"))
    }

    function Me(e, t) {
        if (1 === t.nodeType && we.hasData(e)) {
            var n, i, r, o = we._data(e),
                s = we._data(t, o),
                a = o.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (i = 0, r = a[n].length; i < r; i++) we.event.add(t, n, a[n][i]);
            s.data && (s.data = we.extend({}, s.data))
        }
    }

    function $e(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !we.support.noCloneEvent && t[we.expando]) {
                for (i in (r = we._data(t)).events) we.removeEvent(t, i, r.handle);
                t.removeAttribute(we.expando)
            }
            "script" === n && t.text !== e.text ? (De(t).text = e.text, Le(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), we.support.html5Clone && e.innerHTML && !we.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && _e.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function He(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== y ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== y ? e.querySelectorAll(t || "*") : k;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || we.nodeName(i, t) ? o.push(i) : we.merge(o, He(i, t));
        return t === k || t && we.nodeName(e, t) ? we.merge([e], o) : o
    }

    function Fe(e) {
        _e.test(e.type) && (e.defaultChecked = e.checked)
    }
    Se.optgroup = Se.option, Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, we.fn.extend({
        text: function (e) {
            return we.access(this, function (e) {
                return e === k ? we.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? we.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || we.cleanData(He(n)), n.parentNode && (t && we.contains(n.ownerDocument, n) && je(He(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && we.cleanData(He(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && we.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return we.clone(this, e, t)
            })
        },
        html: function (e) {
            return we.access(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === k) return 1 === t.nodeType ? t.innerHTML.replace(he, "") : k;
                if (!("string" != typeof e || xe.test(e) || !we.support.htmlSerialize && fe.test(e) || !we.support.leadingWhitespace && me.test(e) || Se[(ye.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ge, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (we.cleanData(He(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var i = we.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                r = 0;
            return this.domManip(arguments, function (e) {
                var t = i[r++],
                    n = i[r++];
                n && (t && t.parentNode !== n && (t = this.nextSibling), we(this).remove(), n.insertBefore(e, t))
            }, !0), r ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (n, i, r) {
            n = g.apply([], n);
            var e, t, o, s, a, l, c = 0,
                u = this.length,
                p = this,
                d = u - 1,
                h = n[0],
                f = we.isFunction(h);
            if (f || !(u <= 1 || "string" != typeof h || we.support.checkClone) && ke.test(h)) return this.each(function (e) {
                var t = p.eq(e);
                f && (n[0] = h.call(this, e, t.html())), t.domManip(n, i, r)
            });
            if (u && (e = (l = we.buildFragment(n, this[0].ownerDocument, !1, !r && this)).firstChild, 1 === l.childNodes.length && (l = e), e)) {
                for (o = (s = we.map(He(l, "script"), De)).length; c < u; c++) t = l, c !== d && (t = we.clone(t, !0, !0), o && we.merge(s, He(t, "script"))), i.call(this[c], t, c);
                if (o)
                    for (a = s[s.length - 1].ownerDocument, we.map(s, Le), c = 0; c < o; c++) t = s[c], Te.test(t.type || "") && !we._data(t, "globalEval") && we.contains(a, t) && (t.src ? we._evalUrl(t.src) : we.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ee, "")));
                l = e = null
            }
            return this
        }
    }), we.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        we.fn[e] = function (e) {
            for (var t, n = 0, i = [], r = we(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), we(r[n])[s](t), l.apply(i, t.get());
            return this.pushStack(i)
        }
    }), we.extend({
        clone: function (e, t, n) {
            var i, r, o, s, a, l = we.contains(e.ownerDocument, e);
            if (we.support.html5Clone || we.isXMLDoc(e) || !fe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ae.innerHTML = e.outerHTML, Ae.removeChild(o = Ae.firstChild)), !(we.support.noCloneEvent && we.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
                for (i = He(o), a = He(e), s = 0; null != (r = a[s]); ++s) i[s] && $e(r, i[s]);
            if (t)
                if (n)
                    for (a = a || He(e), i = i || He(o), s = 0; null != (r = a[s]); s++) Me(r, i[s]);
                else Me(e, o);
            return 0 < (i = He(o, "script")).length && je(i, !l && He(e, "script")), i = a = r = null, o
        },
        buildFragment: function (e, t, n, i) {
            for (var r, o, s, a, l, c, u, p = e.length, d = pe(t), h = [], f = 0; f < p; f++)
                if ((o = e[f]) || 0 === o)
                    if ("object" === we.type(o)) we.merge(h, o.nodeType ? [o] : o);
                    else if (be.test(o)) {
                for (a = a || d.appendChild(t.createElement("div")), l = (ye.exec(o) || ["", ""])[1].toLowerCase(), u = Se[l] || Se._default, a.innerHTML = u[1] + o.replace(ge, "<$1></$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
                if (!we.support.leadingWhitespace && me.test(o) && h.push(t.createTextNode(me.exec(o)[0])), !we.support.tbody)
                    for (r = (o = "table" !== l || ve.test(o) ? "<table>" !== u[1] || ve.test(o) ? 0 : a : a.firstChild) && o.childNodes.length; r--;) we.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (we.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else h.push(t.createTextNode(o));
            for (a && d.removeChild(a), we.support.appendChecked || we.grep(He(h, "input"), Fe), f = 0; o = h[f++];)
                if ((!i || -1 === we.inArray(o, i)) && (s = we.contains(o.ownerDocument, o), a = He(d.appendChild(o), "script"), s && je(a), n))
                    for (r = 0; o = a[r++];) Te.test(o.type || "") && n.push(o);
            return a = null, d
        },
        cleanData: function (e, t) {
            for (var n, i, r, o, s = 0, a = we.expando, l = we.cache, c = we.support.deleteExpando, u = we.event.special; null != (n = e[s]); s++)
                if ((t || we.acceptData(n)) && (o = (r = n[a]) && l[r])) {
                    if (o.events)
                        for (i in o.events) u[i] ? we.event.remove(n, i) : we.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute !== y ? n.removeAttribute(a) : n[a] = null, p.push(r))
                }
        },
        _evalUrl: function (e) {
            return we.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), we.fn.extend({
        wrapAll: function (t) {
            if (we.isFunction(t)) return this.each(function (e) {
                we(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = we(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return we.isFunction(n) ? this.each(function (e) {
                we(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = we(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = we.isFunction(t);
            return this.each(function (e) {
                we(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                we.nodeName(this, "body") || we(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pe, Oe, ze, qe = /alpha\([^)]*\)/i,
        Be = /opacity\s*=\s*([^)]*)/,
        Ie = /^(top|right|bottom|left)$/,
        Re = /^(none|table(?!-c[ea]).+)/,
        We = /^margin/,
        Xe = RegExp("^(" + b + ")(.*)$", "i"),
        Ve = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
        Ye = RegExp("^([+-])=(" + b + ")", "i"),
        Ue = {
            BODY: "block"
        },
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Je = ["Top", "Right", "Bottom", "Left"],
        Ze = ["Webkit", "O", "Moz", "ms"];

    function Ke(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Ze.length; r--;)
            if ((t = Ze[r] + n) in e) return t;
        return i
    }

    function et(e, t) {
        return e = t || e, "none" === we.css(e, "display") || !we.contains(e.ownerDocument, e)
    }

    function tt(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (o[s] = we._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && et(i) && (o[s] = we._data(i, "olddisplay", ot(i.nodeName)))) : o[s] || (r = et(i), (n && "none" !== n || !r) && we._data(i, "olddisplay", r ? n : we.css(i, "display"))));
        for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function nt(e, t, n) {
        var i = Xe.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function it(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += we.css(e, n + Je[o], !0, r)), i ? ("content" === n && (s -= we.css(e, "padding" + Je[o], !0, r)), "margin" !== n && (s -= we.css(e, "border" + Je[o] + "Width", !0, r))) : (s += we.css(e, "padding" + Je[o], !0, r), "padding" !== n && (s += we.css(e, "border" + Je[o] + "Width", !0, r)));
        return s
    }

    function rt(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Oe(e),
            s = we.support.boxSizing && "border-box" === we.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = ze(e, t, o)) < 0 || null == r) && (r = e.style[t]), Ve.test(r)) return r;
            i = s && (we.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + it(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function ot(e) {
        var t = m,
            n = Ue[e];
        return n || ("none" !== (n = st(e, t)) && n || ((t = ((Pe = (Pe || we("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || Pe[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = st(e, t), Pe.detach()), Ue[e] = n), n
    }

    function st(e, t) {
        var n = we(t.createElement(e)).appendTo(t.body),
            i = we.css(n[0], "display");
        return n.remove(), i
    }
    we.fn.extend({
        css: function (e, t) {
            return we.access(this, function (e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (we.isArray(t)) {
                    for (r = Oe(e), i = t.length; s < i; s++) o[t[s]] = we.css(e, t[s], !1, r);
                    return o
                }
                return n !== k ? we.style(e, t, n) : we.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function () {
            return tt(this, !0)
        },
        hide: function () {
            return tt(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                et(this) ? we(this).show() : we(this).hide()
            })
        }
    }), we.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: we.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = we.camelCase(t),
                    l = e.style;
                if (t = we.cssProps[a] || (we.cssProps[a] = Ke(l, a)), s = we.cssHooks[t] || we.cssHooks[a], n === k) return s && "get" in s && (r = s.get(e, !1, i)) !== k ? r : l[t];
                if ("string" === (o = typeof n) && (r = Ye.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(we.css(e, t)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || we.cssNumber[a] || (n += "px"), we.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && (n = s.set(e, n, i)) === k))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = we.camelCase(t);
            return t = we.cssProps[a] || (we.cssProps[a] = Ke(e.style, a)), (s = we.cssHooks[t] || we.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), o === k && (o = ze(e, t, i)), "normal" === o && t in Ge && (o = Ge[t]), "" === n || n ? (r = parseFloat(o), !0 === n || we.isNumeric(r) ? r || 0 : o) : o
        }
    }), f.getComputedStyle ? (Oe = function (e) {
        return f.getComputedStyle(e, null)
    }, ze = function (e, t, n) {
        var i, r, o, s = n || Oe(e),
            a = s ? s.getPropertyValue(t) || s[t] : k,
            l = e.style;
        return s && ("" !== a || we.contains(e.ownerDocument, e) || (a = we.style(e, t)), Ve.test(a) && We.test(t) && (i = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = s.width, l.width = i, l.minWidth = r, l.maxWidth = o)), a
    }) : m.documentElement.currentStyle && (Oe = function (e) {
        return e.currentStyle
    }, ze = function (e, t, n) {
        var i, r, o, s = n || Oe(e),
            a = s ? s[t] : k,
            l = e.style;
        return null == a && l && l[t] && (a = l[t]), Ve.test(a) && !Ie.test(t) && (i = l.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : a, a = l.pixelLeft + "px", l.left = i, o && (r.left = o)), "" === a ? "auto" : a
    }), we.each(["height", "width"], function (e, r) {
        we.cssHooks[r] = {
            get: function (e, t, n) {
                return t ? 0 === e.offsetWidth && Re.test(we.css(e, "display")) ? we.swap(e, Qe, function () {
                    return rt(e, r, n)
                }) : rt(e, r, n) : k
            },
            set: function (e, t, n) {
                var i = n && Oe(e);
                return nt(0, t, n ? it(e, r, n, we.support.boxSizing && "border-box" === we.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), we.support.opacity || (we.cssHooks.opacity = {
        get: function (e, t) {
            return Be.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = we.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === we.trim(o.replace(qe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = qe.test(o) ? o.replace(qe, r) : o + " " + r)
        }
    }), we(function () {
        we.support.reliableMarginRight || (we.cssHooks.marginRight = {
            get: function (e, t) {
                return t ? we.swap(e, {
                    display: "inline-block"
                }, ze, [e, "marginRight"]) : k
            }
        }), !we.support.pixelPosition && we.fn.position && we.each(["top", "left"], function (e, n) {
            we.cssHooks[n] = {
                get: function (e, t) {
                    return t ? (t = ze(e, n), Ve.test(t) ? we(e).position()[n] + "px" : t) : k
                }
            }
        })
    }), we.expr && we.expr.filters && (we.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !we.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || we.css(e, "display"))
    }, we.expr.filters.visible = function (e) {
        return !we.expr.filters.hidden(e)
    }), we.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (r, o) {
        we.cssHooks[r + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Je[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, We.test(r) || (we.cssHooks[r + o].set = nt)
    });
    var at = /%20/g,
        lt = /\[\]$/,
        ct = /\r?\n/g,
        ut = /^(?:submit|button|image|reset|file)$/i,
        pt = /^(?:input|select|textarea|keygen)/i;

    function dt(n, e, i, r) {
        var t;
        if (we.isArray(e)) we.each(e, function (e, t) {
            i || lt.test(n) ? r(n, t) : dt(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== we.type(e)) r(n, e);
        else
            for (t in e) dt(n + "[" + t + "]", e[t], i, r)
    }
    we.fn.extend({
        serialize: function () {
            return we.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = we.prop(this, "elements");
                return e ? we.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !we(this).is(":disabled") && pt.test(this.nodeName) && !ut.test(e) && (this.checked || !_e.test(e))
            }).map(function (e, t) {
                var n = we(this).val();
                return null == n ? null : we.isArray(n) ? we.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ct, "\r\n")
                }
            }).get()
        }
    }), we.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                t = we.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === k && (t = we.ajaxSettings && we.ajaxSettings.traditional), we.isArray(e) || e.jquery && !we.isPlainObject(e)) we.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) dt(n, e[n], t, r);
        return i.join("&").replace(at, "+")
    }, we.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        we.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), we.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ht, ft, mt = we.now(),
        gt = /\?/,
        yt = /#.*$/,
        vt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        wt = /^(?:GET|HEAD)$/,
        xt = /^\/\//,
        _t = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kt = we.fn.load,
        Tt = {},
        Ct = {},
        Et = "*/".concat("*");
    try {
        ft = e.href
    } catch (e) {
        (ft = m.createElement("a")).href = "", ft = ft.href
    }

    function St(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(T) || [];
            if (we.isFunction(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function At(t, r, o, s) {
        var a = {},
            l = t === Ct;

        function c(e) {
            var i;
            return a[e] = !0, we.each(t[e] || [], function (e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : k : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }

    function Nt(e, t) {
        var n, i, r = we.ajaxSettings.flatOptions || {};
        for (i in t) t[i] !== k && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && we.extend(!0, e, n), e
    }
    ht = _t.exec(ft.toLowerCase()) || [], we.fn.load = function (e, t, n) {
        if ("string" != typeof e && kt) return kt.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return 0 <= a && (i = e.slice(a, e.length), e = e.slice(0, a)), we.isFunction(t) ? (n = t, t = k) : t && "object" == typeof t && (o = "POST"), 0 < s.length && we.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? we("<div>").append(we.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            s.each(n, r || [e.responseText, t, e])
        }), this
    }, we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        we.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), we.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ht[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Et,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": we.parseJSON,
                "text xml": we.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Nt(Nt(e, we.ajaxSettings), t) : Nt(we.ajaxSettings, e)
        },
        ajaxPrefilter: St(Tt),
        ajaxTransport: St(Ct),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = k), t = t || {};
            var n, i, u, p, d, h, f, r, m = we.ajaxSetup({}, t),
                g = m.context || m,
                y = m.context && (g.nodeType || g.jquery) ? we(g) : we.event,
                v = we.Deferred(),
                b = we.Callbacks("once memory"),
                w = m.statusCode || {},
                o = {},
                s = {},
                x = 0,
                a = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!r)
                                for (r = {}; t = bt.exec(p);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = s[n] = s[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) w[t] = [w[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || a;
                        return f && f.abort(t), l(0, t), this
                    }
                };
            if (v.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((e || m.url || ft) + "").replace(yt, "").replace(xt, ht[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = we.trim(m.dataType || "*").toLowerCase().match(T) || [""], null == m.crossDomain && (n = _t.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === ht[1] && n[2] === ht[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ht[3] || ("http:" === ht[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = we.param(m.data, m.traditional)), At(Tt, m, t, _), 2 === x) return _;
            for (i in (h = m.global) && 0 == we.active++ && we.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !wt.test(m.type), u = m.url, m.hasContent || (m.data && (u = m.url += (gt.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = vt.test(u) ? u.replace(vt, "$1_=" + mt++) : u + (gt.test(u) ? "&" : "?") + "_=" + mt++)), m.ifModified && (we.lastModified[u] && _.setRequestHeader("If-Modified-Since", we.lastModified[u]), we.etag[u] && _.setRequestHeader("If-None-Match", we.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, _, m) || 2 === x)) return _.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[i](m[i]);
            if (f = At(Ct, m, t, _)) {
                _.readyState = 1, h && y.trigger("ajaxSend", [_, m]), m.async && 0 < m.timeout && (d = setTimeout(function () {
                    _.abort("timeout")
                }, m.timeout));
                try {
                    x = 1, f.send(o, l)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var r, o, s, a, l, c = t;
                2 !== x && (x = 2, d && clearTimeout(d), f = k, p = i || "", _.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
                    var i, r, o, s, a = e.contents,
                        l = e.dataTypes;
                    for (;
                        "*" === l[0];) l.shift(), r === k && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (s in a)
                            if (a[s] && a[s].test(r)) {
                                l.unshift(s);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            i || (i = s)
                        }
                        o = o || i
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : k
                }(m, _, n)), a = function (e, t, n, i) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    o = u.shift();
                    for (; o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, _, r), r ? (m.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (we.lastModified[u] = l), (l = _.getResponseHeader("etag")) && (we.etag[u] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, (e || !c) && (c = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || c) + "", r ? v.resolveWith(g, [o, c, _]) : v.rejectWith(g, [_, c, s]), _.statusCode(w), w = k, h && y.trigger(r ? "ajaxSuccess" : "ajaxError", [_, m, r ? o : s]), b.fireWith(g, [_, c]), h && (y.trigger("ajaxComplete", [_, m]), --we.active || we.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function (e, t, n) {
            return we.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return we.get(e, k, t, "script")
        }
    }), we.each(["get", "post"], function (e, r) {
        we[r] = function (e, t, n, i) {
            return we.isFunction(t) && (i = i || n, n = t, t = k), we.ajax({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), we.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return we.globalEval(e), e
            }
        }
    }), we.ajaxPrefilter("script", function (e) {
        e.cache === k && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), we.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var i, r = m.head || we("head")[0] || m.documentElement;
            return {
                send: function (e, n) {
                    (i = m.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, r.insertBefore(i, r.firstChild)
                },
                abort: function () {
                    i && i.onload(k, !0)
                }
            }
        }
    });
    var Dt = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Dt.pop() || we.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), we.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = we.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Lt, "$1" + i) : !1 !== e.jsonp && (e.url += (gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return o || we.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = f[i], f[i] = function () {
            o = arguments
        }, n.always(function () {
            f[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Dt.push(i)), o && we.isFunction(r) && r(o[0]), o = r = k
        }), "script") : k
    });
    var jt, Mt, $t = 0,
        Ht = f.ActiveXObject && function () {
            var e;
            for (e in jt) jt[e](k, !0)
        };

    function Ft() {
        try {
            return new f.XMLHttpRequest
        } catch (e) {}
    }
    we.ajaxSettings.xhr = f.ActiveXObject ? function () {
        return !this.isLocal && Ft() || function () {
            try {
                return new f.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : Ft, Mt = we.ajaxSettings.xhr(), we.support.cors = !!Mt && "withCredentials" in Mt, (Mt = we.support.ajax = !!Mt) && we.ajaxTransport(function (c) {
        var u;
        if (!c.crossDomain || we.support.cors) return {
            send: function (e, s) {
                var a, t, l = c.xhr();
                if (c.username ? l.open(c.type, c.url, c.async, c.username, c.password) : l.open(c.type, c.url, c.async), c.xhrFields)
                    for (t in c.xhrFields) l[t] = c.xhrFields[t];
                c.mimeType && l.overrideMimeType && l.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (t in e) l.setRequestHeader(t, e[t])
                } catch (e) {}
                l.send(c.hasContent && c.data || null), u = function (e, t) {
                    var n, i, r, o;
                    try {
                        if (u && (t || 4 === l.readyState))
                            if (u = k, a && (l.onreadystatechange = we.noop, Ht && delete jt[a]), t) 4 !== l.readyState && l.abort();
                            else {
                                o = {}, n = l.status, i = l.getAllResponseHeaders(), "string" == typeof l.responseText && (o.text = l.responseText);
                                try {
                                    r = l.statusText
                                } catch (e) {
                                    r = ""
                                }
                                n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                            }
                    } catch (e) {
                        t || s(-1, e)
                    }
                    o && s(n, r, o, i)
                }, c.async ? 4 === l.readyState ? setTimeout(u) : (a = ++$t, Ht && (jt || (jt = {}, we(f).unload(Ht)), jt[a] = u), l.onreadystatechange = u) : u()
            },
            abort: function () {
                u && u(k, !0)
            }
        }
    });
    var Pt, Ot, zt = /^(?:toggle|show|hide)$/,
        qt = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
        Bt = /queueHooks$/,
        It = [function (t, e, n) {
            var i, r, o, s, a, l, c = this,
                u = {},
                p = t.style,
                d = t.nodeType && et(t),
                h = we._data(t, "fxshow");
            for (i in n.queue || (null == (a = we._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, c.always(function () {
                    c.always(function () {
                        a.unqueued--, we.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === we.css(t, "display") && "none" === we.css(t, "float") && (we.support.inlineBlockNeedsLayout && "inline" !== ot(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", we.support.shrinkWrapBlocks || c.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (r = e[i], zt.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) continue;
                    u[i] = h && h[i] || we.style(t, i)
                } if (!we.isEmptyObject(u))
                for (i in h ? "hidden" in h && (d = h.hidden) : h = we._data(t, "fxshow", {}), o && (h.hidden = !d), d ? we(t).show() : c.done(function () {
                        we(t).hide()
                    }), c.done(function () {
                        var e;
                        for (e in we._removeData(t, "fxshow"), u) we.style(t, e, u[e])
                    }), u) s = Xt(d ? h[i] : 0, i, c), i in h || (h[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        Rt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = qt.exec(t),
                    o = r && r[3] || (we.cssNumber[e] ? "" : "px"),
                    s = (we.cssNumber[e] || "px" !== o && +i) && qt.exec(we.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o)
                    for (o = o || s[3], r = r || [], s = +i || 1; s /= a = a || ".5", we.style(n.elem, e, s + o), a !== (a = n.cur() / i) && 1 !== a && --l;);
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };

    function Wt() {
        return setTimeout(function () {
            Pt = k
        }), Pt = we.now()
    }

    function Xt(e, t, n) {
        for (var i, r = (Rt[t] || []).concat(Rt["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function Vt(o, e, t) {
        var n, s, i = 0,
            r = It.length,
            a = we.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var e = Pt || Wt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return a.notifyWith(o, [c, n, t]), n < 1 && r ? t : (a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: we.extend({}, e),
                opts: we.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Pt || Wt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = we.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? a.resolveWith(o, [c, e]) : a.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (i = we.camelCase(n), r = t[i], o = e[n], we.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = we.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); i < r; i++)
            if (n = It[i].call(c, o, u, c.opts)) return n;
        return we.map(u, Xt, c), we.isFunction(c.opts.start) && c.opts.start.call(o, c), we.fx.timer(we.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function Yt(e, t, n, i, r) {
        return new Yt.prototype.init(e, t, n, i, r)
    }

    function Ut(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Je[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Qt(e) {
        return we.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    we.Animation = we.extend(Vt, {
        tweener: function (e, t) {
            we.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Rt[n] = Rt[n] || [], Rt[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? It.unshift(e) : It.push(e)
        }
    }), ((we.Tween = Yt).prototype = {
        constructor: Yt,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (we.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Yt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }).init.prototype = Yt.prototype, (Yt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function (e) {
                we.fx.step[e.prop] ? we.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[we.cssProps[e.prop]] || we.cssHooks[e.prop]) ? we.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = Yt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, we.each(["toggle", "show", "hide"], function (e, i) {
        var r = we.fn[i];
        we.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(Ut(i, !0), e, t, n)
        }
    }), we.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (t, e, n, i) {
            var r = we.isEmptyObject(t),
                o = we.speed(e, n, i),
                s = function () {
                    var e = Vt(this, we.extend({}, t), o);
                    (r || we._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (r, e, o) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = k), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = we.timers,
                    i = we._data(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Bt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                (e || !o) && we.dequeue(this, r)
            })
        },
        finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = we._data(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = we.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, we.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), we.each({
        slideDown: Ut("show"),
        slideUp: Ut("hide"),
        slideToggle: Ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, i) {
        we.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), we.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? we.extend({}, e) : {
            complete: n || !n && t || we.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !we.isFunction(t) && t
        };
        return i.duration = we.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in we.fx.speeds ? we.fx.speeds[i.duration] : we.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            we.isFunction(i.old) && i.old.call(this), i.queue && we.dequeue(this, i.queue)
        }, i
    }, we.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, we.timers = [], we.fx = Yt.prototype.init, we.fx.tick = function () {
        var e, t = we.timers,
            n = 0;
        for (Pt = we.now(); t.length > n; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || we.fx.stop(), Pt = k
    }, we.fx.timer = function (e) {
        e() && we.timers.push(e) && we.fx.start()
    }, we.fx.interval = 13, we.fx.start = function () {
        Ot || (Ot = setInterval(we.fx.tick, we.fx.interval))
    }, we.fx.stop = function () {
        clearInterval(Ot), Ot = null
    }, we.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, we.fx.step = {}, we.expr && we.expr.filters && (we.expr.filters.animated = function (t) {
        return we.grep(we.timers, function (e) {
            return t === e.elem
        }).length
    }), we.fn.offset = function (t) {
        if (arguments.length) return t === k ? this : this.each(function (e) {
            we.offset.setOffset(this, t, e)
        });
        var e, n, i = {
                top: 0,
                left: 0
            },
            r = this[0],
            o = r && r.ownerDocument;
        return o ? (e = o.documentElement, we.contains(e, r) ? (typeof r.getBoundingClientRect !== y && (i = r.getBoundingClientRect()), n = Qt(o), {
            top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : i) : void 0
    }, we.offset = {
        setOffset: function (e, t, n) {
            var i = we.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = we(e),
                a = s.offset(),
                l = we.css(e, "top"),
                c = we.css(e, "left"),
                u = {},
                p = {};
            ("absolute" === i || "fixed" === i) && -1 < we.inArray("auto", [l, c]) ? (r = (p = s.position()).top, o = p.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0), we.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : s.css(u)
        }
    }, we.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === we.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), we.nodeName(e[0], "html") || (n = e.offset()), n.top += we.css(e[0], "borderTopWidth", !0), n.left += we.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - we.css(i, "marginTop", !0),
                    left: t.left - n.left - we.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || i; e && !we.nodeName(e, "html") && "static" === we.css(e, "position");) e = e.offsetParent;
                return e || i
            })
        }
    }), we.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, r) {
        var o = /Y/.test(r);
        we.fn[t] = function (e) {
            return we.access(this, function (e, t, n) {
                var i = Qt(e);
                return n === k ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : (i ? i.scrollTo(o ? we(i).scrollLeft() : n, o ? n : we(i).scrollTop()) : e[t] = n, k)
            }, t, e, arguments.length, null)
        }
    }), we.each({
        Height: "height",
        Width: "width"
    }, function (o, s) {
        we.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function (i, e) {
            we.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return we.access(this, function (e, t, n) {
                    var i;
                    return we.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : n === k ? we.css(e, t, r) : we.style(e, t, n, r)
                }, s, n ? e : k, n, null)
            }
        })
    }), we.fn.size = function () {
        return this.length
    }, we.fn.andSelf = we.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = we : (f.jQuery = f.$ = we, "function" == typeof define && define.amd && define("jquery", [], function () {
        return we
    }))
}(window), document.addEventListener("DOMContentLoaded", Datee), $(document).ready(function () {
    var i, r, e, o;
    $("input[name='country_code']").val();

    function t() {
        var e = new Date,
            t = 2 * (60 * e.getHours() + e.getMinutes()) + 2e3;
        $(".todayBay").html(t)
    }
    1 == checkCode && (i = $(".check_popup_code_input"), r = $(".js-message"), e = $(".button-popup-first"), o = /^\d+$/, e.on("click", function (e) {
        e.preventDefault();
        var t = $(".check_popup_code_input").val().length,
            n = i.val();
        return o.test(n) && 15 == t ? r.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!") : "" !== i.val() && " " !== i.val() && "  " !== i.val() ? r.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.") : r.text("Введите, пожалуйста, код.")
    })), 1 == todayBayVal && (t(), setInterval(t, 1e3))
});
var FlipClock, mouse = !1,
    popUpBy = !1,
    checkCode = !0,
    todayBayVal = !0,
    mBrowser = !1,
    internetEx = !1,
    safariWin = !1,
    fireFox = !1,
    lastPackNum = "three",
    Base = function () {};
Base.extend = function (e, t) {
        "use strict";
        var n = Base.prototype.extend;
        Base._prototyping = !0;
        var i = new this;
        n.call(i, e), i.base = function () {}, delete Base._prototyping;
        var r = i.constructor,
            o = i.constructor = function () {
                if (!Base._prototyping)
                    if (this._constructing || this.constructor == o) this._constructing = !0, r.apply(this, arguments), delete this._constructing;
                    else if (null !== arguments[0]) return (arguments[0].extend || n).call(arguments[0], i)
            };
        return o.ancestor = this, o.extend = this.extend, o.forEach = this.forEach, o.implement = this.implement, o.prototype = i, o.toString = this.toString, o.valueOf = function (e) {
            return "object" == e ? o : r.valueOf()
        }, n.call(o, t), "function" == typeof o.init && o.init(), o
    }, Base.prototype = {
        extend: function (e, t) {
            if (1 < arguments.length) {
                var n = this[e];
                if (n && "function" == typeof t && (!n.valueOf || n.valueOf() != t.valueOf()) && /\bbase\b/.test(t)) {
                    var i = t.valueOf();
                    (t = function () {
                        var e = this.base || Base.prototype.base;
                        this.base = n;
                        var t = i.apply(this, arguments);
                        return this.base = e, t
                    }).valueOf = function (e) {
                        return "object" == e ? t : i
                    }, t.toString = Base.toString
                }
                this[e] = t
            } else if (e) {
                var r = Base.prototype.extend;
                Base._prototyping || "function" == typeof this || (r = this.extend || r);
                for (var o = {
                        toSource: null
                    }, s = ["constructor", "toString", "valueOf"], a = Base._prototyping ? 0 : 1; l = s[a++];) e[l] != o[l] && r.call(this, l, e[l]);
                for (var l in e) o[l] || r.call(this, l, e[l])
            }
            return this
        }
    }, Base = Base.extend({
        constructor: function () {
            this.extend(arguments[0])
        }
    }, {
        ancestor: Object,
        version: "1.1",
        forEach: function (e, t, n) {
            for (var i in e) void 0 === this.prototype[i] && t.call(n, e[i], i, e)
        },
        implement: function () {
            for (var e = 0; e < arguments.length; e++) "function" == typeof arguments[e] ? arguments[e](this.prototype) : this.prototype.extend(arguments[e]);
            return this
        },
        toString: function () {
            return String(this.valueOf())
        }
    }),
    function (e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function () {
            return t(e, document)
        }) : e.plyr = t(e, document)
    }("undefined" != typeof window ? window : this, function (ne, ie) {
        "use strict";

        function re() {
            var e, t, n, i = navigator.userAgent,
                r = navigator.appName,
                o = "" + parseFloat(navigator.appVersion),
                s = parseInt(navigator.appVersion, 10),
                a = !1,
                l = !1,
                c = !1,
                u = !1;
            return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (a = !0, r = "IE", o = "11") : -1 !== (t = i.indexOf("MSIE")) ? (a = !0, r = "IE", o = i.substring(t + 5)) : -1 !== (t = i.indexOf("Chrome")) ? (c = !0, r = "Chrome", o = i.substring(t + 7)) : -1 !== (t = i.indexOf("Safari")) ? (u = !0, r = "Safari", o = i.substring(t + 7), -1 !== (t = i.indexOf("Version")) && (o = i.substring(t + 8))) : -1 !== (t = i.indexOf("Firefox")) ? (l = !0, r = "Firefox", o = i.substring(t + 8)) : (e = i.lastIndexOf(" ") + 1) < (t = i.lastIndexOf("/")) && (r = i.substring(e, t), o = i.substring(t + 1), r.toLowerCase() === r.toUpperCase() && (r = navigator.appName)), -1 !== (n = o.indexOf(";")) && (o = o.substring(0, n)), -1 !== (n = o.indexOf(" ")) && (o = o.substring(0, n)), s = parseInt("" + o, 10), isNaN(s) && (o = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10)), {
                name: r,
                version: s,
                isIE: a,
                isFirefox: l,
                isChrome: c,
                isSafari: u,
                isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
                isTouch: "ontouchstart" in ie.documentElement
            }
        }

        function oe(e) {
            if (!ie.querySelectorAll('script[src="' + e + '"]').length) {
                var t = ie.createElement("script");
                t.src = e;
                var n = ie.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n)
            }
        }

        function se(e, t) {
            return Array.prototype.indexOf && -1 !== e.indexOf(t)
        }

        function ae(e, t, n) {
            return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
        }

        function le(e, t) {
            e.length || (e = [e]);
            for (var n = e.length - 1; 0 <= n; n--) {
                var i = 0 < n ? t.cloneNode(!0) : t,
                    r = e[n],
                    o = r.parentNode,
                    s = r.nextSibling;
                return i.appendChild(r), s ? o.insertBefore(i, s) : o.appendChild(i), i
            }
        }

        function ce(e) {
            e && e.parentNode.removeChild(e)
        }

        function ue(e, t) {
            e.insertBefore(t, e.firstChild)
        }

        function pe(e, t) {
            for (var n in t) e.setAttribute(n, Ae.boolean(t[n]) && t[n] ? "" : t[n])
        }

        function de(e, t, n) {
            var i = ie.createElement(e);
            pe(i, n), ue(t, i)
        }

        function he(e, t, n) {
            if (e)
                if (e.classList) e.classList[n ? "add" : "remove"](t);
                else {
                    var i = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                    e.className = i + (n ? " " + t : "")
                }
        }

        function fe(e, t) {
            return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
        }

        function me(e, t) {
            var n = Element.prototype;
            return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function (e) {
                return -1 !== [].indexOf.call(ie.querySelectorAll(e), this)
            }).call(e, t)
        }

        function ge(t, e, n, i, r) {
            ye(t, e, function (e) {
                n && n.apply(t, [e]), i.apply(t, [e])
            }, r)
        }

        function ye(e, t, n, i) {
            e && function e(t, n, i, r, o) {
                var s = n.split(" ");
                if (Ae.boolean(o) || (o = !1), t instanceof NodeList)
                    for (var a = 0; a < t.length; a++) t[a] instanceof Node && e(t[a], n, i, r);
                else
                    for (var l = 0; l < s.length; l++) t[r ? "addEventListener" : "removeEventListener"](s[l], i, o)
            }(e, t, n, !0, i)
        }

        function ve(e, t, n, i) {
            if (e && t) {
                Ae.boolean(n) || (n = !1);
                var r = new CustomEvent(t, {
                    bubbles: n,
                    detail: i
                });
                e.dispatchEvent(r)
            }
        }

        function be(e, t) {
            return e ? (t = Ae.boolean(t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t) : void 0
        }

        function we(e, t) {
            return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
        }

        function xe() {
            var e = arguments;
            if (e.length) {
                if (1 === e.length) return e[0];
                for (var t = Array.prototype.shift.call(e), n = e.length, i = 0; i < n; i++) {
                    var r = e[i];
                    for (var o in r) r[o] && r[o].constructor && r[o].constructor === Object ? (t[o] = t[o] || {}, xe(t[o], r[o])) : t[o] = r[o]
                }
                return t
            }
        }

        function u(n, c) {
            function l(e, t, n, i) {
                ve(e, t, n, xe({}, i, {
                    plyr: G
                }))
            }

            function e(e, t) {
                c.debug && ne.console && (t = Array.prototype.slice.call(t), Ae.string(c.logPrefix) && c.logPrefix.length && t.unshift(c.logPrefix), console[e].apply(console, t))
            }

            function u() {
                return {
                    url: c.iconUrl,
                    absolute: 0 === c.iconUrl.indexOf("http") || J.browser.isIE
                }
            }

            function t() {
                if (J.supported.full && ("audio" !== J.type || c.fullscreen.allowAudio) && c.fullscreen.enabled) {
                    var e = Ce.supportsFullScreen;
                    e || c.fullscreen.fallback && ! function () {
                        try {
                            return ne.self !== ne.top
                        } catch (e) {
                            return !0
                        }
                    }() ? (ee((e ? "Native" : "Fallback") + " fullscreen enabled"), he(J.container, c.classes.fullscreen.enabled, !0)) : ee("Fullscreen not supported and fallback disabled"), J.buttons && J.buttons.fullscreen && be(J.buttons.fullscreen, !1), o()
                }
            }

            function i() {
                if ("video" === J.type) {
                    h(c.selectors.captions) || J.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + c.selectors.captions.replace(".", "") + '"></div>'), J.usingTextTracks = !1, J.media.textTracks && (J.usingTextTracks = !0);
                    for (var e, t = "", n = J.media.childNodes, i = 0; i < n.length; i++) "track" === n[i].nodeName.toLowerCase() && ("captions" !== (e = n[i].kind) && "subtitles" !== e || (t = n[i].getAttribute("src")));
                    if (J.captionExists = !0, "" === t ? (J.captionExists = !1, ee("No caption track found")) : ee("Caption track found; URI: " + t), J.captionExists) {
                        for (var r = J.media.textTracks, o = 0; o < r.length; o++) r[o].mode = "hidden";
                        if (function () {
                                if (J.buttons.captions) {
                                    he(J.container, c.classes.captions.enabled, !0);
                                    var e = J.storage.captionsEnabled;
                                    Ae.boolean(e) || (e = c.captions.defaultActive), e && (he(J.container, c.classes.captions.active, !0), be(J.buttons.captions, !0))
                                }
                            }(), (J.browser.isIE && 10 <= J.browser.version || J.browser.isFirefox && 31 <= J.browser.version) && (ee("Detected browser with known TextTrack issues - using manual fallback"), J.usingTextTracks = !1), J.usingTextTracks) {
                            ee("TextTracks supported");
                            for (var s = 0; s < r.length; s++) {
                                var a = r[s];
                                "captions" !== a.kind && "subtitles" !== a.kind || ye(a, "cuechange", function () {
                                    this.activeCues[0] && "text" in this.activeCues[0] ? p(this.activeCues[0].getCueAsHTML()) : p()
                                })
                            }
                        } else if (ee("TextTracks not supported so rendering captions manually"), J.currentCaption = "", J.captions = [], "" !== t) {
                            var l = new XMLHttpRequest;
                            l.onreadystatechange = function () {
                                if (4 === l.readyState)
                                    if (200 === l.status) {
                                        var e, t;
                                        t = l.responseText.split("\n\n");
                                        for (var n = 0; n < t.length; n++) {
                                            e = t[n], J.captions[n] = [];
                                            var i = e.split("\n"),
                                                r = 0; - 1 === i[r].indexOf(":") && (r = 1), J.captions[n] = [i[r], i[r + 1]]
                                        }
                                        J.captions.shift(), ee("Successfully loaded the caption file via AJAX")
                                    } else te(c.logPrefix + "There was a problem loading the caption file via AJAX")
                            }, l.open("get", t, !0), l.send()
                        }
                    } else he(J.container, c.classes.captions.enabled)
                }
            }

            function p(e) {
                var t = h(c.selectors.captions),
                    n = ie.createElement("span");
                t.innerHTML = "", Ae.undefined(e) && (e = ""), Ae.string(e) ? n.innerHTML = e.trim() : n.appendChild(e), t.appendChild(n), t.offsetHeight
            }

            function r(e) {
                function t(e, t) {
                    var n = [];
                    n = e.split(" --\x3e ");
                    for (var i = 0; i < n.length; i++) n[i] = n[i].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                    return function (e) {
                        if (null == e) return 0;
                        var t = [],
                            n = [];
                        return t = e.split(","), n = t[0].split(":"), Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
                    }(n[t])
                }

                function n(e) {
                    return t(e, 1)
                }
                if (!J.usingTextTracks && "video" === J.type && J.supported.full && (J.subcount = 0, e = Ae.number(e) ? e : J.media.currentTime, J.captions[J.subcount])) {
                    for (; n(J.captions[J.subcount][0]) < e.toFixed(1);)
                        if (J.subcount++, J.subcount > J.captions.length - 1) {
                            J.subcount = J.captions.length - 1;
                            break
                        } J.media.currentTime.toFixed(1) >= t(J.captions[J.subcount][0], 0) && J.media.currentTime.toFixed(1) <= n(J.captions[J.subcount][0]) ? (J.currentCaption = J.captions[J.subcount][1], p(J.currentCaption)) : p()
                }
            }

            function d(e) {
                return J.container.querySelectorAll(e)
            }

            function h(e) {
                return d(e)[0]
            }

            function o() {
                var e = d("input:not([disabled]), button:not([disabled])"),
                    t = e[0],
                    n = e[e.length - 1];
                ye(J.container, "keydown", function (e) {
                    9 === e.which && J.isFullscreen && (e.target !== n || e.shiftKey ? e.target === t && e.shiftKey && (e.preventDefault(), n.focus()) : (e.preventDefault(), t.focus()))
                })
            }

            function s(e, t) {
                if (Ae.string(t)) de(e, J.media, {
                    src: t
                });
                else if (t.constructor === Array)
                    for (var n = t.length - 1; 0 <= n; n--) de(e, J.media, t[n])
            }

            function a() {
                if (c.loadSprite) {
                    var e = u();
                    e.absolute ? (ee("AJAX loading absolute SVG sprite" + (J.browser.isIE ? " (due to IE)" : "")), _e(e.url, "sprite-plyr")) : ee("Sprite will be used as external resource directly")
                }
                var t, n, i, r, o = c.html;
                if (ee("Injecting custom controls"), o || (t = [], n = u(), i = (n.absolute ? "" : n.url) + "#" + c.iconPrefix, se(c.controls, "play-large") && t.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + c.i18n.play + "</span>", "</button>"), t.push('<div class="plyr__controls">'), se(c.controls, "restart") && t.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + i + '-restart" /></svg>', '<span class="plyr__sr-only">' + c.i18n.restart + "</span>", "</button>"), se(c.controls, "rewind") && t.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + i + '-rewind" /></svg>', '<span class="plyr__sr-only">' + c.i18n.rewind + "</span>", "</button>"), se(c.controls, "play") && t.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + i + '-play" /></svg>', '<span class="plyr__sr-only">' + c.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + i + '-pause" /></svg>', '<span class="plyr__sr-only">' + c.i18n.pause + "</span>", "</button>"), se(c.controls, "fast-forward") && t.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + i + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + c.i18n.forward + "</span>", "</button>"), se(c.controls, "progress") && (t.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + c.i18n.buffered, "</progress>"), c.tooltips.seek && t.push('<span class="plyr__tooltip">00:00</span>'), t.push("</span>")), se(c.controls, "current-time") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + c.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), se(c.controls, "duration") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + c.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), se(c.controls, "mute") && t.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + i + '-muted" /></svg>', '<svg><use xlink:href="' + i + '-volume" /></svg>', '<span class="plyr__sr-only">' + c.i18n.toggleMute + "</span>", "</button>"), se(c.controls, "volume") && t.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + c.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + c.volumeMin + '" max="' + c.volumeMax + '" value="' + c.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + c.volumeMax + '" value="' + c.volumeMin + '" role="presentation"></progress>', "</span>"), se(c.controls, "captions") && t.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + i + '-captions-on" /></svg>', '<svg><use xlink:href="' + i + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + c.i18n.toggleCaptions + "</span>", "</button>"), se(c.controls, "fullscreen") && t.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + i + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + i + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + c.i18n.toggleFullscreen + "</span>", "</button>"), t.push("</div>"), o = t.join("")), o = ae(o = ae(o, "{seektime}", c.seekTime), "{id}", Math.floor(1e4 * Math.random())), Ae.string(c.selectors.controls.container) && (r = ie.querySelector(c.selectors.controls.container)), Ae.htmlElement(r) || (r = J.container), r.insertAdjacentHTML("beforeend", o), c.tooltips.controls)
                    for (var s = d([c.selectors.controls.wrapper, " ", c.selectors.labels, " .", c.classes.hidden].join("")), a = s.length - 1; 0 <= a; a--) {
                        var l = s[a];
                        he(l, c.classes.hidden, !1), he(l, c.classes.tooltip, !0)
                    }
            }

            function f() {
                he(J.container, c.selectors.container.replace(".", ""), J.supported.full)
            }

            function m(e) {
                e && se(c.types.html5, J.type) ? J.media.setAttribute("controls", "") : J.media.removeAttribute("controls")
            }

            function g(e) {
                var t = c.i18n.play;
                if (Ae.string(c.title) && c.title.length && (t += ", " + c.title, J.container.setAttribute("aria-label", c.title)), J.supported.full && J.buttons.play)
                    for (var n = J.buttons.play.length - 1; 0 <= n; n--) J.buttons.play[n].setAttribute("aria-label", t);
                Ae.htmlElement(e) && e.setAttribute("title", c.i18n.frameTitle.replace("{title}", c.title))
            }

            function y(e) {
                Ne.supported && c.storage.enabled && (xe(J.storage, e), ne.localStorage.setItem(c.storage.key, JSON.stringify(J.storage)))
            }

            function v() {
                if (J.media) {
                    if (J.supported.full && (he(J.container, c.classes.type.replace("{0}", J.type), !0), se(c.types.embed, J.type) && he(J.container, c.classes.type.replace("{0}", "video"), !0), he(J.container, c.classes.stopped, c.autoplay), he(J.ontainer, c.classes.isIos, J.browser.isIos), he(J.container, c.classes.isTouch, J.browser.isTouch), "video" === J.type)) {
                        var e = ie.createElement("div");
                        e.setAttribute("class", c.classes.videoWrapper), le(J.media, e), J.videoContainer = e
                    }
                    se(c.types.embed, J.type) && function () {
                        for (var e = ie.createElement("div"), t = J.embedId, n = J.type + "-" + Math.floor(1e4 * Math.random()), i = d('[id^="' + J.type + '-"]'), r = i.length - 1; 0 <= r; r--) ce(i[r]);
                        if (he(J.media, c.classes.videoWrapper, !0), he(J.media, c.classes.embedWrapper, !0), "youtube" === J.type) J.media.appendChild(e), e.setAttribute("id", n), Ae.object(ne.YT) ? w(t, e) : (oe(c.urls.youtube.api), ne.onYouTubeReadyCallbacks = ne.onYouTubeReadyCallbacks || [], ne.onYouTubeReadyCallbacks.push(function () {
                            w(t, e)
                        }), ne.onYouTubeIframeAPIReady = function () {
                            ne.onYouTubeReadyCallbacks.forEach(function (e) {
                                e()
                            })
                        });
                        else if ("vimeo" === J.type)
                            if (J.supported.full ? J.media.appendChild(e) : e = J.media, e.setAttribute("id", n), Ae.object(ne.Vimeo)) x(t, e);
                            else {
                                oe(c.urls.vimeo.api);
                                var o = ne.setInterval(function () {
                                    Ae.object(ne.Vimeo) && (ne.clearInterval(o), x(t, e))
                                }, 50)
                            }
                        else if ("soundcloud" === J.type) {
                            var s = ie.createElement("iframe");
                            s.loaded = !1, ye(s, "load", function () {
                                s.loaded = !0
                            }), pe(s, {
                                src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + t,
                                id: n
                            }), e.appendChild(s), J.media.appendChild(e), ne.SC || oe(c.urls.soundcloud.api);
                            var a = ne.setInterval(function () {
                                ne.SC && s.loaded && (ne.clearInterval(a), function () {
                                    J.embed = ne.SC.Widget(this), J.embed.bind(ne.SC.Widget.Events.READY, function () {
                                        J.media.play = function () {
                                            J.embed.play(), J.media.paused = !1
                                        }, J.media.pause = function () {
                                            J.embed.pause(), J.media.paused = !0
                                        }, J.media.stop = function () {
                                            J.embed.seekTo(0), J.embed.pause(), J.media.paused = !0
                                        }, J.media.paused = !0, J.media.currentTime = 0, J.embed.getDuration(function (e) {
                                            J.media.duration = e / 1e3, b()
                                        }), J.embed.getPosition(function (e) {
                                            J.media.currentTime = e, l(J.media, "timeupdate")
                                        }), J.embed.bind(ne.SC.Widget.Events.PLAY, function () {
                                            J.media.paused = !1, l(J.media, "play"), l(J.media, "playing")
                                        }), J.embed.bind(ne.SC.Widget.Events.PAUSE, function () {
                                            J.media.paused = !0, l(J.media, "pause")
                                        }), J.embed.bind(ne.SC.Widget.Events.PLAY_PROGRESS, function (e) {
                                            J.media.seeking = !1, J.media.currentTime = e.currentPosition / 1e3, l(J.media, "timeupdate")
                                        }), J.embed.bind(ne.SC.Widget.Events.LOAD_PROGRESS, function (e) {
                                            J.media.buffered = e.loadProgress, l(J.media, "progress"), 1 === parseInt(e.loadProgress) && l(J.media, "canplaythrough")
                                        }), J.embed.bind(ne.SC.Widget.Events.FINISH, function () {
                                            J.media.paused = !0, l(J.media, "ended")
                                        })
                                    })
                                }.call(s))
                            }, 50)
                        }
                    }()
                } else te("No media element found!")
            }

            function b() {
                J.supported.full && (U(), Q()), g(h("iframe"))
            }

            function w(e, t) {
                J.embed = new ne.YT.Player(t.id, {
                    videoId: e,
                    playerVars: {
                        autoplay: c.autoplay ? 1 : 0,
                        controls: J.supported.full ? 0 : 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_load_policy: c.captions.defaultActive ? 1 : 0,
                        cc_lang_pref: "en",
                        wmode: "transparent",
                        modestbranding: 1,
                        disablekb: 1,
                        origin: "*"
                    },
                    events: {
                        onError: function (e) {
                            l(J.container, "error", !0, {
                                code: e.data,
                                embed: e.target
                            })
                        },
                        onReady: function (e) {
                            var t = e.target;
                            J.media.play = function () {
                                t.playVideo(), J.media.paused = !1
                            }, J.media.pause = function () {
                                t.pauseVideo(), J.media.paused = !0
                            }, J.media.stop = function () {
                                t.stopVideo(), J.media.paused = !0
                            }, J.media.duration = t.getDuration(), J.media.paused = !0, J.media.currentTime = 0, J.media.muted = t.isMuted(), c.title = t.getVideoData().title, J.supported.full && J.media.querySelector("iframe").setAttribute("tabindex", "-1"), b(), l(J.media, "timeupdate"), l(J.media, "durationchange"), ne.clearInterval(Z.buffering), Z.buffering = ne.setInterval(function () {
                                J.media.buffered = t.getVideoLoadedFraction(), (null === J.media.lastBuffered || J.media.lastBuffered < J.media.buffered) && l(J.media, "progress"), J.media.lastBuffered = J.media.buffered, 1 === J.media.buffered && (ne.clearInterval(Z.buffering), l(J.media, "canplaythrough"))
                            }, 200)
                        },
                        onStateChange: function (e) {
                            var t = e.target;
                            switch (ne.clearInterval(Z.playing), e.data) {
                                case 0:
                                    J.media.paused = !0, l(J.media, "ended");
                                    break;
                                case 1:
                                    J.media.paused = !1, J.media.seeking = !1, l(J.media, "play"), l(J.media, "playing"), Z.playing = ne.setInterval(function () {
                                        J.media.currentTime = t.getCurrentTime(), l(J.media, "timeupdate")
                                    }, 100);
                                    break;
                                case 2:
                                    J.media.paused = !0, l(J.media, "pause")
                            }
                            l(J.container, "statechange", !1, {
                                code: e.data
                            })
                        }
                    }
                })
            }

            function x(e, t) {
                J.embed = new ne.Vimeo.Player(t, {
                    id: parseInt(e),
                    loop: c.loop,
                    autoplay: c.autoplay,
                    byline: !1,
                    portrait: !1,
                    title: !1
                }), J.media.play = function () {
                    J.embed.play(), J.media.paused = !1
                }, J.media.pause = function () {
                    J.embed.pause(), J.media.paused = !0
                }, J.media.stop = function () {
                    J.embed.stop(), J.media.paused = !0
                }, J.media.paused = !0, J.media.currentTime = 0, b(), J.embed.getCurrentTime().then(function (e) {
                    J.media.currentTime = e, l(J.media, "timeupdate")
                }), J.embed.getDuration().then(function (e) {
                    J.media.duration = e, l(J.media, "durationchange")
                }), J.embed.on("loaded", function () {
                    Ae.htmlElement(J.embed.element) && J.supported.full && J.embed.element.setAttribute("tabindex", "-1")
                }), J.embed.on("play", function () {
                    J.media.paused = !1, l(J.media, "play"), l(J.media, "playing")
                }), J.embed.on("pause", function () {
                    J.media.paused = !0, l(J.media, "pause")
                }), J.embed.on("timeupdate", function (e) {
                    J.media.seeking = !1, J.media.currentTime = e.seconds, l(J.media, "timeupdate")
                }), J.embed.on("progress", function (e) {
                    J.media.buffered = e.percent, l(J.media, "progress"), 1 === parseInt(e.percent) && l(J.media, "canplaythrough")
                }), J.embed.on("ended", function () {
                    J.media.paused = !0, l(J.media, "ended")
                })
            }

            function _() {
                "play" in J.media && J.media.play()
            }

            function k() {
                "pause" in J.media && J.media.pause()
            }

            function T(e) {
                return Ae.boolean(e) || (e = J.media.paused), e ? _() : k(), e
            }

            function C(e) {
                Ae.number(e) || (e = c.seekTime), S(J.media.currentTime - e)
            }

            function E(e) {
                Ae.number(e) || (e = c.seekTime), S(J.media.currentTime + e)
            }

            function S(e) {
                var t = 0,
                    n = J.media.paused,
                    i = A();
                Ae.number(e) ? t = e : Ae.object(e) && se(["input", "change"], e.type) && (t = e.target.value / e.target.max * i), t < 0 ? t = 0 : i < t && (t = i), R(t);
                try {
                    J.media.currentTime = t.toFixed(4)
                } catch (e) {}
                if (se(c.types.embed, J.type)) {
                    switch (J.type) {
                        case "youtube":
                            J.embed.seekTo(t);
                            break;
                        case "vimeo":
                            J.embed.setCurrentTime(t.toFixed(0));
                            break;
                        case "soundcloud":
                            J.embed.seekTo(1e3 * t)
                    }
                    n && k(), l(J.media, "timeupdate"), J.media.seeking = !0
                }
                ee("Seeking to " + J.media.currentTime + " seconds"), r(t)
            }

            function A() {
                var e = parseInt(c.duration),
                    t = 0;
                return null === J.media.duration || isNaN(J.media.duration) || (t = J.media.duration), isNaN(e) ? t : e
            }

            function N() {
                he(J.container, c.classes.playing, !J.media.paused), he(J.container, c.classes.stopped, J.media.paused), X(J.media.paused)
            }

            function D(e) {
                var t = Ce.supportsFullScreen;
                if (t) {
                    if (!e || e.type !== Ce.fullScreenEventName) return Ce.isFullScreen(J.container) ? Ce.cancelFullScreen() : (Ee = {
                        x: ne.pageXOffset || 0,
                        y: ne.pageYOffset || 0
                    }, Ce.requestFullScreen(J.container)), void(J.isFullscreen = Ce.isFullScreen(J.container));
                    J.isFullscreen = Ce.isFullScreen(J.container)
                } else J.isFullscreen = !J.isFullscreen, ie.body.style.overflow = J.isFullscreen ? "hidden" : "";
                he(J.container, c.classes.fullscreen.active, J.isFullscreen), o(J.isFullscreen), J.buttons && J.buttons.fullscreen && be(J.buttons.fullscreen, J.isFullscreen), l(J.container, J.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !J.isFullscreen && t && ne.scrollTo(Ee.x, Ee.y)
            }

            function L(e) {
                if (Ae.boolean(e) || (e = !J.media.muted), be(J.buttons.mute, e), J.media.muted = e, 0 === J.media.volume && j(c.volume), se(c.types.embed, J.type)) {
                    switch (J.type) {
                        case "youtube":
                            J.embed[J.media.muted ? "mute" : "unMute"]();
                            break;
                        case "vimeo":
                        case "soundcloud":
                            J.embed.setVolume(J.media.muted ? 0 : parseFloat(c.volume / c.volumeMax))
                    }
                    l(J.media, "volumechange")
                }
            }

            function j(e) {
                var t = c.volumeMax,
                    n = c.volumeMin;
                if (Ae.undefined(e) && (e = J.storage.volume), (null === e || isNaN(e)) && (e = c.volume), t < e && (e = t), e < n && (e = n), J.media.volume = parseFloat(e / t), J.volume.display && (J.volume.display.value = e), se(c.types.embed, J.type)) {
                    switch (J.type) {
                        case "youtube":
                            J.embed.setVolume(100 * J.media.volume);
                            break;
                        case "vimeo":
                        case "soundcloud":
                            J.embed.setVolume(J.media.volume)
                    }
                    l(J.media, "volumechange")
                }
                0 === e ? J.media.muted = !0 : J.media.muted && 0 < e && L()
            }

            function M(e) {
                var t = J.media.muted ? 0 : J.media.volume * c.volumeMax;
                Ae.number(e) || (e = c.volumeStep), j(t + e)
            }

            function $(e) {
                var t = J.media.muted ? 0 : J.media.volume * c.volumeMax;
                Ae.number(e) || (e = c.volumeStep), j(t - e)
            }

            function H() {
                var e = J.media.muted ? 0 : J.media.volume * c.volumeMax;
                J.supported.full && (J.volume.input && (J.volume.input.value = e), J.volume.display && (J.volume.display.value = e)), y({
                    volume: e
                }), he(J.container, c.classes.muted, 0 === e), J.supported.full && J.buttons.mute && be(J.buttons.mute, 0 === e)
            }

            function F(e) {
                J.supported.full && J.buttons.captions && (Ae.boolean(e) || (e = -1 === J.container.className.indexOf(c.classes.captions.active)), J.captionsEnabled = e, be(J.buttons.captions, J.captionsEnabled), he(J.container, c.classes.captions.active, J.captionsEnabled), l(J.container, J.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), y({
                    captionsEnabled: J.captionsEnabled
                }))
            }

            function P(e) {
                var t = "waiting" === e.type;
                clearTimeout(Z.loading), Z.loading = setTimeout(function () {
                    he(J.container, c.classes.loading, t), X(t)
                }, t ? 250 : 0)
            }

            function O(e) {
                if (J.supported.full) {
                    var t = J.progress.played,
                        n = 0,
                        i = A();
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            if (J.controls.pressed) return;
                            n = we(J.media.currentTime, i), "timeupdate" === e.type && J.buttons.seek && (J.buttons.seek.value = n);
                            break;
                        case "playing":
                        case "progress":
                            t = J.progress.buffer, n = (r = J.media.buffered) && r.length ? we(r.end(0), i) : Ae.number(r) ? 100 * r : 0
                    }
                    z(t, n)
                }
                var r
            }

            function z(e, t) {
                if (J.supported.full) {
                    if (Ae.undefined(t) && (t = 0), Ae.undefined(e)) {
                        if (!J.progress || !J.progress.buffer) return;
                        e = J.progress.buffer
                    }
                    Ae.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
                }
            }

            function q(e, t) {
                if (t) {
                    isNaN(e) && (e = 0), J.secs = parseInt(e % 60), J.mins = parseInt(e / 60 % 60), J.hours = parseInt(e / 60 / 60 % 60);
                    var n = 0 < parseInt(A() / 60 / 60 % 60);
                    J.secs = ("0" + J.secs).slice(-2), J.mins = ("0" + J.mins).slice(-2), t.innerHTML = (n ? J.hours + ":" : "") + J.mins + ":" + J.secs
                }
            }

            function B() {
                if (J.supported.full) {
                    var e = A() || 0;
                    !J.duration && c.displayDuration && J.media.paused && q(e, J.currentTime), J.duration && q(e, J.duration), W()
                }
            }

            function I(e) {
                q(J.media.currentTime, J.currentTime), e && "timeupdate" === e.type && J.media.seeking || O(e)
            }

            function R(e) {
                Ae.number(e) || (e = 0);
                var t = we(e, A());
                J.progress && J.progress.played && (J.progress.played.value = t), J.buttons && J.buttons.seek && (J.buttons.seek.value = t)
            }

            function W(e) {
                var t = A();
                if (c.tooltips.seek && J.progress.container && 0 !== t) {
                    var n = J.progress.container.getBoundingClientRect(),
                        i = 0,
                        r = c.classes.tooltip + "--visible";
                    if (e) i = 100 / n.width * (e.pageX - n.left);
                    else {
                        if (!fe(J.progress.tooltip, r)) return;
                        i = J.progress.tooltip.style.left.replace("%", "")
                    }
                    i < 0 ? i = 0 : 100 < i && (i = 100), q(t / 100 * i, J.progress.tooltip), J.progress.tooltip.style.left = i + "%", e && se(["mouseenter", "mouseleave"], e.type) && he(J.progress.tooltip, r, "mouseenter" === e.type)
                }
            }

            function X(e) {
                if (c.hideControls && "audio" !== J.type) {
                    var t = 0,
                        n = !1,
                        i = e,
                        r = fe(J.container, c.classes.loading);
                    if (Ae.boolean(e) || (e && e.type ? (n = "enterfullscreen" === e.type, i = se(["mousemove", "touchstart", "mouseenter", "focus"], e.type), se(["mousemove", "touchmove"], e.type) && (t = 2e3), "focus" === e.type && (t = 3e3)) : i = fe(J.container, c.classes.hideControls)), ne.clearTimeout(Z.hover), i || J.media.paused || r) {
                        if (he(J.container, c.classes.hideControls, !1), J.media.paused || r) return;
                        J.browser.isTouch && (t = 3e3)
                    }
                    i && J.media.paused || (Z.hover = ne.setTimeout(function () {
                        (!J.controls.pressed && !J.controls.hover || n) && he(J.container, c.classes.hideControls, !0)
                    }, t))
                }
            }

            function V() {
                function e() {
                    var e = T(),
                        t = J.buttons[e ? "play" : "pause"],
                        n = J.buttons[e ? "pause" : "play"];
                    if (n = n && 1 < n.length ? n[n.length - 1] : n[0]) {
                        var i = fe(t, c.classes.tabFocus);
                        setTimeout(function () {
                            n.focus(), i && (he(t, c.classes.tabFocus, !1), he(n, c.classes.tabFocus, !0))
                        }, 100)
                    }
                }

                function i() {
                    var e = ie.activeElement;
                    return e && e !== ie.body ? ie.querySelector(":focus") : null
                }

                function o(e) {
                    return e.keyCode ? e.keyCode : e.which
                }

                function r(e) {
                    var t, n = o(e),
                        i = "keydown" === e.type,
                        r = i && n === s;
                    if (Ae.number(n))
                        if (i) {
                            switch (se([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67], n) && (e.preventDefault(), e.stopPropagation()), n) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    r || (t = J.media.duration, Ae.number(t) && S(t / 10 * (n - 48)));
                                    break;
                                case 32:
                                case 75:
                                    r || T();
                                    break;
                                case 38:
                                    M();
                                    break;
                                case 40:
                                    $();
                                    break;
                                case 77:
                                    r || L();
                                    break;
                                case 39:
                                    E();
                                    break;
                                case 37:
                                    C();
                                    break;
                                case 70:
                                    D();
                                    break;
                                case 67:
                                    r || F()
                            }!Ce.supportsFullScreen && J.isFullscreen && 27 === n && D(), s = n
                        } else s = null
                }
                var t = J.browser.isIE ? "change" : "input";
                if (c.keyboardShorcuts.focused) {
                    var s = null;
                    c.keyboardShorcuts.global && ye(ne, "keydown keyup", function (e) {
                        var t = o(e),
                            n = i();
                        1 !== Te().length || !se([48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67], t) || Ae.htmlElement(n) && me(n, c.selectors.editable) || r(e)
                    }), ye(J.container, "keydown keyup", r)
                }
                for (var n in ye(ne, "keyup", function (e) {
                        var t = o(e),
                            n = i();
                        9 === t && function (e) {
                            for (var t in J.buttons) {
                                var n = J.buttons[t];
                                if (Ae.nodeList(n))
                                    for (var i = 0; i < n.length; i++) he(n[i], c.classes.tabFocus, n[i] === e);
                                else he(n, c.classes.tabFocus, n === e)
                            }
                        }(n)
                    }), ye(ie.body, "click", function () {
                        he(h("." + c.classes.tabFocus), c.classes.tabFocus, !1)
                    }), J.buttons) {
                    var a = J.buttons[n];
                    ye(a, "blur", function () {
                        he(a, "tab-focus", !1)
                    })
                }
                ge(J.buttons.play, "click", c.listeners.play, e), ge(J.buttons.pause, "click", c.listeners.pause, e), ge(J.buttons.restart, "click", c.listeners.restart, S), ge(J.buttons.rewind, "click", c.listeners.rewind, C), ge(J.buttons.forward, "click", c.listeners.forward, E), ge(J.buttons.seek, t, c.listeners.seek, S), ge(J.volume.input, t, c.listeners.volume, function () {
                    j(J.volume.input.value)
                }), ge(J.buttons.mute, "click", c.listeners.mute, L), ge(J.buttons.fullscreen, "click", c.listeners.fullscreen, D), Ce.supportsFullScreen && ye(ie, Ce.fullScreenEventName, D), ye(J.buttons.captions, "click", F), ye(J.progress.container, "mouseenter mouseleave mousemove", W), c.hideControls && (ye(J.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", X), ye(J.controls, "mouseenter mouseleave", function (e) {
                    J.controls.hover = "mouseenter" === e.type
                }), ye(J.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
                    J.controls.pressed = se(["mousedown", "touchstart"], e.type)
                }), ye(J.controls, "focus blur", X, !0)), ye(J.volume.input, "wheel", function (e) {
                    e.preventDefault();
                    var t = e.webkitDirectionInvertedFromDevice,
                        n = c.volumeStep / 5;
                    (e.deltaY < 0 || 0 < e.deltaX) && (t ? $(n) : M(n)), (0 < e.deltaY || e.deltaX < 0) && (t ? M(n) : $(n))
                })
            }

            function Y(e, t) {
                function n() {
                    Ae.boolean(t) || (t = !0), Ae.function(e) && e.call(K), t && (J.init = !1, J.container.parentNode.replaceChild(K, J.container), l(K, "destroyed", !0))
                }
                if (!J.init) return null;
                switch (J.type) {
                    case "youtube":
                        ne.clearInterval(Z.buffering), ne.clearInterval(Z.playing), J.embed.destroy(), n();
                        break;
                    case "vimeo":
                        J.embed.unload().then(n), ne.setTimeout(n, 200);
                        break;
                    case "video":
                    case "audio":
                        m(!0), n()
                }
            }

            function U() {
                if (!J.supported.full) return te("Basic support only", J.type), ce(h(c.selectors.controls.wrapper)), ce(h(c.selectors.buttons.play)), void m(!0);
                var e = !d(c.selectors.controls.wrapper).length;
                e && a(),
                    function () {
                        try {
                            return J.controls = h(c.selectors.controls.wrapper), J.buttons = {}, J.buttons.seek = h(c.selectors.buttons.seek), J.buttons.play = d(c.selectors.buttons.play), J.buttons.pause = h(c.selectors.buttons.pause), J.buttons.restart = h(c.selectors.buttons.restart), J.buttons.rewind = h(c.selectors.buttons.rewind), J.buttons.forward = h(c.selectors.buttons.forward), J.buttons.fullscreen = h(c.selectors.buttons.fullscreen), J.buttons.mute = h(c.selectors.buttons.mute), J.buttons.captions = h(c.selectors.buttons.captions), J.progress = {}, J.progress.container = h(c.selectors.progress.container), J.progress.buffer = {}, J.progress.buffer.bar = h(c.selectors.progress.buffer), J.progress.buffer.text = J.progress.buffer.bar && J.progress.buffer.bar.getElementsByTagName("span")[0], J.progress.played = h(c.selectors.progress.played), J.progress.tooltip = J.progress.container && J.progress.container.querySelector("." + c.classes.tooltip), J.volume = {}, J.volume.input = h(c.selectors.volume.input), J.volume.display = h(c.selectors.volume.display), J.duration = h(c.selectors.duration), J.currentTime = h(c.selectors.currentTime), J.seekTime = d(c.selectors.seekTime), !0
                        } catch (e) {
                            return te("It looks like there is a problem with your controls HTML"), m(!0), !1
                        }
                    }() && (e && V(), function () {
                        if (ye(J.media, "timeupdate seeking", I), ye(J.media, "timeupdate", r), ye(J.media, "durationchange loadedmetadata", B), ye(J.media, "ended", function () {
                                "video" === J.type && c.showPosterOnEnd && ("video" === J.type && p(), S(), J.media.load())
                            }), ye(J.media, "progress playing", O), ye(J.media, "volumechange", H), ye(J.media, "play pause ended", N), ye(J.media, "waiting canplay seeked", P), c.clickToPlay && "audio" !== J.type) {
                            var e = h("." + c.classes.videoWrapper);
                            if (!e) return;
                            e.style.cursor = "pointer", ye(e, "click", function () {
                                c.hideControls && J.browser.isTouch && !J.media.paused || (J.media.paused ? _() : J.media.ended ? (S(), _()) : k())
                            })
                        }
                        c.disableContextMenu && ye(J.media, "contextmenu", function (e) {
                            e.preventDefault()
                        }), ye(J.media, c.events.concat(["keyup", "keydown"]).join(" "), function (e) {
                            l(J.container, e.type, !0)
                        })
                    }(), m(), t(), i(), j(), H(), I(), N())
            }

            function Q() {
                ne.setTimeout(function () {
                    l(J.media, "ready")
                }, 0), he(J.media, Se.classes.setup, !0), he(J.container, c.classes.ready, !0), J.media.plyr = G, c.autoplay && _()
            }
            var G, J = this,
                Z = {},
                K = (J.media = n).cloneNode(!0),
                ee = function () {
                    e("log", arguments)
                },
                te = function () {
                    e("warn", arguments)
                };
            return ee("Config", c), G = {
                    getOriginal: function () {
                        return K
                    },
                    getContainer: function () {
                        return J.container
                    },
                    getEmbed: function () {
                        return J.embed
                    },
                    getMedia: function () {
                        return J.media
                    },
                    getType: function () {
                        return J.type
                    },
                    getDuration: A,
                    getCurrentTime: function () {
                        return J.media.currentTime
                    },
                    getVolume: function () {
                        return J.media.volume
                    },
                    isMuted: function () {
                        return J.media.muted
                    },
                    isReady: function () {
                        return fe(J.container, c.classes.ready)
                    },
                    isLoading: function () {
                        return fe(J.container, c.classes.loading)
                    },
                    on: function (e, t) {
                        ye(J.container, e, t)
                    },
                    play: _,
                    pause: k,
                    stop: function () {
                        k(), S()
                    },
                    restart: S,
                    rewind: C,
                    forward: E,
                    seek: S,
                    source: function (e) {
                        if (!Ae.undefined(e)) return t = e, void(Ae.object(t) && "sources" in t && t.sources.length ? (he(J.container, c.classes.ready, !1), k(), R(), z(), function () {
                            if (se(c.types.html5, J.type)) {
                                for (var e = J.media.querySelectorAll("source"), t = 0; t < e.length; t++) ce(e[t]);
                                J.media.setAttribute("src", "https://cdn.selz.com/plyr/blank.mp4"), J.media.load(), ee("Cancelled network requests")
                            }
                        }(), Y(function () {
                            if (J.embed = null, ce(J.media), "video" === J.type && J.videoContainer && ce(J.videoContainer), J.container && J.container.removeAttribute("class"), "type" in t && (J.type = t.type, "video" === J.type)) {
                                var e = t.sources[0];
                                "type" in e && se(c.types.embed, e.type) && (J.type = e.type)
                            }
                            switch (J.supported = ke(J.type), J.type) {
                                case "video":
                                    J.media = ie.createElement("video");
                                    break;
                                case "audio":
                                    J.media = ie.createElement("audio");
                                    break;
                                case "youtube":
                                case "vimeo":
                                case "soundcloud":
                                    J.media = ie.createElement("div"), J.embedId = t.sources[0].src
                            }
                            ue(J.container, J.media), Ae.boolean(t.autoplay) && (c.autoplay = t.autoplay), se(c.types.html5, J.type) && (c.crossorigin && J.media.setAttribute("crossorigin", ""), c.autoplay && J.media.setAttribute("autoplay", ""), "poster" in t && J.media.setAttribute("poster", t.poster), c.loop && J.media.setAttribute("loop", "")), he(J.container, c.classes.fullscreen.active, J.isFullscreen), he(J.container, c.classes.captions.active, J.captionsEnabled), f(), se(c.types.html5, J.type) && s("source", t.sources), v(), se(c.types.html5, J.type) && ("tracks" in t && s("track", t.tracks), J.media.load()), (se(c.types.html5, J.type) || se(c.types.embed, J.type) && !J.supported.full) && (U(), Q()), c.title = t.title, g()
                        }, !1)) : te("Invalid source format"));
                        var t, n;
                        switch (J.type) {
                            case "youtube":
                                n = J.embed.getVideoUrl();
                                break;
                            case "vimeo":
                                J.embed.getVideoUrl.then(function (e) {
                                    n = e
                                });
                                break;
                            case "soundcloud":
                                J.embed.getCurrentSound(function (e) {
                                    n = e.permalink_url
                                });
                                break;
                            default:
                                n = J.media.currentSrc
                        }
                        return n || ""
                    },
                    poster: function (e) {
                        "video" === J.type && J.media.setAttribute("poster", e)
                    },
                    setVolume: j,
                    togglePlay: T,
                    toggleMute: L,
                    toggleCaptions: F,
                    toggleFullscreen: D,
                    toggleControls: X,
                    isFullscreen: function () {
                        return J.isFullscreen || !1
                    },
                    support: function (e) {
                        return function (e, t) {
                            var n = e.media;
                            if ("video" === e.type) switch (t) {
                                case "video/webm":
                                    return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                                case "video/mp4":
                                    return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                                case "video/ogg":
                                    return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
                            } else if ("audio" === e.type) switch (t) {
                                case "audio/mpeg":
                                    return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
                                case "audio/ogg":
                                    return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                                case "audio/wav":
                                    return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
                            }
                            return !1
                        }(J, e)
                    },
                    destroy: Y
                },
                function () {
                    if (J.init) return;
                    if (Ce = function () {
                            var e = {
                                    supportsFullScreen: !1,
                                    isFullScreen: function () {
                                        return !1
                                    },
                                    requestFullScreen: function () {},
                                    cancelFullScreen: function () {},
                                    fullScreenEventName: "",
                                    element: null,
                                    prefix: ""
                                },
                                t = "webkit o moz ms khtml".split(" ");
                            if (Ae.undefined(ie.cancelFullScreen))
                                for (var n = 0, i = t.length; n < i; n++) {
                                    if (e.prefix = t[n], !Ae.undefined(ie[e.prefix + "CancelFullScreen"])) {
                                        e.supportsFullScreen = !0;
                                        break
                                    }
                                    if (!Ae.undefined(ie.msExitFullscreen) && ie.msFullscreenEnabled) {
                                        e.prefix = "ms", e.supportsFullScreen = !0;
                                        break
                                    }
                                } else e.supportsFullScreen = !0;
                            return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function (e) {
                                switch (Ae.undefined(e) && (e = ie.body), this.prefix) {
                                    case "":
                                        return ie.fullscreenElement === e;
                                    case "moz":
                                        return ie.mozFullScreenElement === e;
                                    default:
                                        return ie[this.prefix + "FullscreenElement"] === e
                                }
                            }, e.requestFullScreen = function (e) {
                                return Ae.undefined(e) && (e = ie.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
                            }, e.cancelFullScreen = function () {
                                return "" === this.prefix ? ie.cancelFullScreen() : ie[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
                            }, e.element = function () {
                                return "" === this.prefix ? ie.fullscreenElement : ie[this.prefix + "FullscreenElement"]
                            }), e
                        }(), J.browser = re(), Ae.htmlElement(J.media)) {
                        t = null, J.storage = {}, Ne.supported && c.storage.enabled && (ne.localStorage.removeItem("plyr-volume"), (t = ne.localStorage.getItem(c.storage.key)) && (/^\d+(\.\d+)?$/.test(t) ? y({
                            volume: parseFloat(t)
                        }) : J.storage = JSON.parse(t)));
                        var e = n.tagName.toLowerCase();
                        "div" === e ? (J.type = n.getAttribute("data-type"), J.embedId = n.getAttribute("data-video-id"), n.removeAttribute("data-type"), n.removeAttribute("data-video-id")) : (J.type = e, c.crossorigin = null !== n.getAttribute("crossorigin"), c.autoplay = c.autoplay || null !== n.getAttribute("autoplay"), c.loop = c.loop || null !== n.getAttribute("loop")), J.supported = ke(J.type), J.supported.basic && (J.container = le(n, ie.createElement("div")), J.container.setAttribute("tabindex", 0), f(), ee(J.browser.name + " " + J.browser.version), v(), (se(c.types.html5, J.type) || se(c.types.embed, J.type) && !J.supported.full) && (U(), Q(), g()), J.init = !0)
                    }
                    var t
                }(), J.init ? G : null
        }

        function _e(e, t) {
            var n = new XMLHttpRequest;
            if (!Ae.string(t) || !Ae.htmlElement(ie.querySelector("#" + t))) {
                var i = ie.createElement("div");
                i.setAttribute("hidden", ""), Ae.string(t) && i.setAttribute("id", t), ie.body.insertBefore(i, ie.body.childNodes[0]), "withCredentials" in n && (n.open("GET", e, !0), n.onload = function () {
                    i.innerHTML = n.responseText
                }, n.send())
            }
        }

        function ke(e) {
            var t, n, i = re(),
                r = i.isIE && i.version <= 9,
                o = i.isIos,
                s = /iPhone|iPod/i.test(navigator.userAgent),
                a = !!ie.createElement("audio").canPlayType,
                l = !!ie.createElement("video").canPlayType;
            switch (e) {
                case "video":
                    n = (t = l) && !r && !s;
                    break;
                case "audio":
                    n = (t = a) && !r;
                    break;
                case "vimeo":
                case "youtube":
                case "soundcloud":
                    t = !0, n = !r && !o;
                    break;
                default:
                    n = (t = a && l) && !r
            }
            return {
                basic: t,
                full: n
            }
        }

        function Te(e) {
            if (Ae.string(e) ? e = ie.querySelector(e) : Ae.undefined(e) && (e = ie.body), Ae.htmlElement(e)) {
                var t = e.querySelectorAll("." + Se.classes.setup),
                    n = [];
                return Array.prototype.slice.call(t).forEach(function (e) {
                    Ae.object(e.plyr) && n.push(e.plyr)
                }), n
            }
            return []
        }
        var Ce, Ee = {
                x: 0,
                y: 0
            },
            Se = {
                enabled: !0,
                debug: !1,
                autoplay: !1,
                loop: !1,
                seekTime: 10,
                volume: 10,
                volumeMin: 0,
                volumeMax: 10,
                volumeStep: 1,
                duration: null,
                displayDuration: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/2.0.6/plyr.svg",
                clickToPlay: !0,
                hideControls: !0,
                showPosterOnEnd: !1,
                disableContextMenu: !0,
                keyboardShorcuts: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                selectors: {
                    html5: "video, audio",
                    embed: "[data-type]",
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        seek: '[data-plyr="seek"]',
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        forward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        fullscreen: '[data-plyr="fullscreen"]'
                    },
                    volume: {
                        input: '[data-plyr="volume"]',
                        display: ".plyr__volume--display"
                    },
                    progress: {
                        container: ".plyr__progress",
                        buffer: ".plyr__progress--buffer",
                        played: ".plyr__progress--played"
                    },
                    captions: ".plyr__captions",
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration"
                },
                classes: {
                    setup: "plyr--setup",
                    ready: "plyr--ready",
                    videoWrapper: "plyr__video-wrapper",
                    embedWrapper: "plyr__video-embed",
                    type: "plyr--{0}",
                    stopped: "plyr--stopped",
                    playing: "plyr--playing",
                    muted: "plyr--muted",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        active: "plyr--fullscreen-active"
                    },
                    tabFocus: "tab-focus"
                },
                captions: {
                    defaultActive: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    allowAudio: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime} secs",
                    play: "Play",
                    pause: "Pause",
                    forward: "Forward {seektime} secs",
                    played: "played",
                    buffered: "buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    toggleMute: "Toggle Mute",
                    toggleCaptions: "Toggle Captions",
                    toggleFullscreen: "Toggle Fullscreen",
                    frameTitle: "Player for {title}"
                },
                types: {
                    embed: ["youtube", "vimeo", "soundcloud"],
                    html5: ["video", "audio"]
                },
                urls: {
                    vimeo: {
                        api: "https://player.vimeo.com/api/player.js"
                    },
                    youtube: {
                        api: "https://www.youtube.com/iframe_api"
                    },
                    soundcloud: {
                        api: "https://w.soundcloud.com/player/api.js"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    forward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    fullscreen: null
                },
                events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "emptied"],
                logPrefix: "[Plyr]"
            },
            Ae = {
                object: function (e) {
                    return null !== e && "object" == typeof e
                },
                array: function (e) {
                    return null !== e && "object" == typeof e && e.constructor === Array
                },
                number: function (e) {
                    return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
                },
                string: function (e) {
                    return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
                },
                boolean: function (e) {
                    return null !== e && "boolean" == typeof e
                },
                nodeList: function (e) {
                    return null !== e && e instanceof NodeList
                },
                htmlElement: function (e) {
                    return null !== e && e instanceof HTMLElement
                },
                function: function (e) {
                    return null !== e && "function" == typeof e
                },
                undefined: function (e) {
                    return null !== e && void 0 === e
                }
            },
            Ne = {
                supported: function () {
                    if (!("localStorage" in ne)) return !1;
                    try {
                        ne.localStorage.setItem("___test", "OK");
                        var e = ne.localStorage.getItem("___test");
                        return ne.localStorage.removeItem("___test"), "OK" === e
                    } catch (e) {
                        return !1
                    }
                    return !1
                }()
            };
        return {
            setup: function (e, a) {
                function t(e, t) {
                    fe(t, Se.classes.hook) || n.push({
                        target: e,
                        media: t
                    })
                }
                var n = [],
                    l = [],
                    i = [Se.selectors.html5, Se.selectors.embed].join(",");
                if (Ae.string(e) ? e = ie.querySelectorAll(e) : Ae.htmlElement(e) ? e = [e] : Ae.nodeList(e) || Ae.array(e) || Ae.string(e) || (Ae.undefined(a) && Ae.object(e) && (a = e), e = ie.querySelectorAll(i)), Ae.nodeList(e) && (e = Array.prototype.slice.call(e)), !ke().basic || !e.length) return !1;
                for (var r = 0; r < e.length; r++) {
                    var o = e[r],
                        s = o.querySelectorAll(i);
                    if (s.length)
                        for (var c = 0; c < s.length; c++) t(o, s[c]);
                    else me(o, i) && t(o, o)
                }
                return n.forEach(function (e) {
                    var t = e.target,
                        n = e.media,
                        i = {};
                    try {
                        i = JSON.parse(t.getAttribute("data-plyr"))
                    } catch (e) {}
                    var r = xe({}, Se, a, i);
                    if (!r.enabled) return null;
                    var o = new u(n, r);
                    if (Ae.object(o)) {
                        if (r.debug) {
                            var s = r.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                            ye(o.getContainer(), s.join(" "), function (e) {
                                console.log([r.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                            })
                        }
                        ve(o.getContainer(), "setup", !0, {
                            plyr: o
                        }), l.push(o)
                    }
                }), l
            },
            supported: ke,
            loadSprite: _e,
            get: Te
        }
    }),
    function () {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(),
    function (l, n, r, o) {
        function c(e, t) {
            this.settings = null, this.options = l.extend({}, c.Defaults, t), this.$element = l(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, l.each(["onResize", "onThrottledResize"], l.proxy(function (e, t) {
                this._handlers[t] = l.proxy(this[t], this)
            }, this)), l.each(c.Plugins, l.proxy(function (e, t) {
                this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
            }, this)), l.each(c.Workers, l.proxy(function (e, t) {
                this._pipe.push({
                    filter: t.filter,
                    run: l.proxy(t.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        c.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: n,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, c.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, c.Type = {
            Event: "event",
            State: "state"
        }, c.Plugins = {}, c.Workers = [{
            filter: ["width", "settings"],
            run: function () {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (e) {
                e.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (e) {
                var t = this.settings.margin || "",
                    n = !this.settings.autoWidth,
                    i = this.settings.rtl,
                    r = {
                        width: "auto",
                        "margin-left": i ? t : "",
                        "margin-right": i ? "" : t
                    };
                !n && this.$stage.children().css(r), e.css = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (e) {
                var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    n = null,
                    i = this._items.length,
                    r = !this.settings.autoWidth,
                    o = [];
                for (e.items = {
                        merge: !1,
                        width: t
                    }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = 1 < n || e.items.merge, o[i] = r ? t * n : this._items[i].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function () {
                var e = [],
                    t = this._items,
                    n = this.settings,
                    i = Math.max(2 * n.items, 4),
                    r = 2 * Math.ceil(t.length / 2),
                    o = n.loop && t.length ? n.rewind ? i : Math.max(i, r) : 0,
                    s = "",
                    a = "";
                for (o /= 2; o--;) e.push(this.normalize(e.length / 2, !0)), s += t[e[e.length - 1]][0].outerHTML, e.push(this.normalize(t.length - 1 - (e.length - 1) / 2, !0)), a = t[e[e.length - 1]][0].outerHTML + a;
                this._clones = e, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, r = 0, o = []; ++n < t;) i = o[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, o.push(i + r * e);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function () {
                var e = this.settings.stagePadding,
                    t = this._coordinates,
                    n = {
                        width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                        "padding-left": e || "",
                        "padding-right": e || ""
                    };
                this.$stage.css(n)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (e) {
                var t = this._coordinates.length,
                    n = !this.settings.autoWidth,
                    i = this.$stage.children();
                if (n && e.items.merge)
                    for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
                else n && (e.css.width = e.items.width, i.css(e.css))
            }
        }, {
            filter: ["items"],
            run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function (e) {
                e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
            }
        }, {
            filter: ["position"],
            run: function () {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function () {
                var e, t, n, i, r = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    a = s + this.width() * r,
                    l = [];
                for (n = 0, i = this._coordinates.length; n < i; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + o * r, (this.op(e, "<=", s) && this.op(e, ">", a) || this.op(t, "<", s) && this.op(t, ">", a)) && l.push(n);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], c.prototype.initialize = function () {
            var e, t, n;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, n = this.$element.children(t).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e));
            this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, c.prototype.setup = function () {
            var t = this.viewport(),
                e = this.options.responsive,
                n = -1,
                i = null;
            e ? (l.each(e, function (e) {
                e <= t && n < e && (n = Number(e))
            }), "function" == typeof (i = l.extend({}, this.options, e[n])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: i
                }
            }), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, c.prototype.optionsLogic = function () {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, c.prototype.prepare = function (e) {
            var t = this.trigger("prepare", {
                content: e
            });
            return t.data || (t.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: t.data
            }), t.data
        }, c.prototype.update = function () {
            for (var e = 0, t = this._pipe.length, n = l.proxy(function (e) {
                    return this[e]
                }, this._invalidated), i = {}; e < t;)(this._invalidated.all || 0 < l.grep(this._pipe[e].filter, n).length) && this._pipe[e].run(i), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, c.prototype.width = function (e) {
            switch (e = e || c.Width.Default) {
                case c.Width.Inner:
                case c.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, c.prototype.refresh = function () {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, c.prototype.onThrottledResize = function () {
            n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, c.prototype.onResize = function () {
            return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, c.prototype.registerEventHandlers = function () {
            l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
        }, c.prototype.onDragStart = function (e) {
            var t = null;
            3 !== e.which && (l.support.transform ? t = {
                x: (t = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === t.length ? 12 : 4],
                y: t[16 === t.length ? 13 : 5]
            } : (t = this.$stage.position(), t = {
                x: this.settings.rtl ? t.left + this.$stage.width() - this.width() + this.settings.margin : t.left,
                y: t.top
            }), this.is("animating") && (l.support.transform ? this.animate(t.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(e.target), this._drag.stage.start = t, this._drag.stage.current = t, this._drag.pointer = this.pointer(e), l(r).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(r).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (e) {
                var t = this.difference(this._drag.pointer, this.pointer(e));
                l(r).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(t.x) < Math.abs(t.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, c.prototype.onDragMove = function (e) {
            var t = null,
                n = null,
                i = null,
                r = this.difference(this._drag.pointer, this.pointer(e)),
                o = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, o.x = ((o.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, t + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
        }, c.prototype.onDragEnd = function (e) {
            var t = this.difference(this._drag.pointer, this.pointer(e)),
                n = this._drag.stage.current,
                i = 0 < t.x ^ this.settings.rtl ? "left" : "right";
            l(r).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== t.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== t.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, (3 < Math.abs(t.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, c.prototype.closest = function (n, i) {
            var r = -1,
                o = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || l.each(s, l.proxy(function (e, t) {
                return "left" === i && t - 30 < n && n < t + 30 ? r = e : "right" === i && t - o - 30 < n && n < t - o + 30 ? r = e + 1 : this.op(n, "<", t) && this.op(n, ">", s[e + 1] || t - o) && (r = "left" === i ? e + 1 : e), -1 === r
            }, this)), this.settings.loop || (this.op(n, ">", s[this.minimum()]) ? r = n = this.minimum() : this.op(n, "<", s[this.maximum()]) && (r = n = this.maximum())), r
        }, c.prototype.animate = function (e) {
            var t = 0 < this.speed();
            this.is("animating") && this.onTransitionEnd(), t && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : t ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, c.prototype.is = function (e) {
            return this._states.current[e] && 0 < this._states.current[e]
        }, c.prototype.current = function (e) {
            if (e === o) return this._current;
            if (0 === this._items.length) return o;
            if (e = this.normalize(e), this._current !== e) {
                var t = this.trigger("change", {
                    property: {
                        name: "position",
                        value: e
                    }
                });
                t.data !== o && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, c.prototype.invalidate = function (e) {
            return "string" === l.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function (e, t) {
                return t
            })
        }, c.prototype.reset = function (e) {
            (e = this.normalize(e)) !== o && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
        }, c.prototype.normalize = function (e, t) {
            var n = this._items.length,
                i = t ? 0 : this._clones.length;
            return !this.isNumeric(e) || n < 1 ? e = o : (e < 0 || n + i <= e) && (e = ((e - i / 2) % n + n) % n + i / 2), e
        }, c.prototype.relative = function (e) {
            return e -= this._clones.length / 2, this.normalize(e, !0)
        }, c.prototype.maximum = function (e) {
            var t, n, i, r = this.settings,
                o = this._coordinates.length;
            if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
                for (t = this._items.length, n = this._items[--t].width(), i = this.$element.width(); t-- && !(i < (n += this._items[t].width() + this.settings.margin)););
                o = t + 1
            } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
            return e && (o -= this._clones.length / 2), Math.max(o, 0)
        }, c.prototype.minimum = function (e) {
            return e ? 0 : this._clones.length / 2
        }, c.prototype.items = function (e) {
            return e === o ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
        }, c.prototype.mergers = function (e) {
            return e === o ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
        }, c.prototype.clones = function (n) {
            var t = this._clones.length / 2,
                i = t + this._items.length,
                r = function (e) {
                    return e % 2 == 0 ? i + e / 2 : t - (e + 1) / 2
                };
            return n === o ? l.map(this._clones, function (e, t) {
                return r(t)
            }) : l.map(this._clones, function (e, t) {
                return e === n ? r(t) : null
            })
        }, c.prototype.speed = function (e) {
            return e !== o && (this._speed = e), this._speed
        }, c.prototype.coordinates = function (e) {
            var t, n = 1,
                i = e - 1;
            return e === o ? l.map(this._coordinates, l.proxy(function (e, t) {
                return this.coordinates(t)
            }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, i = e + 1), t = this._coordinates[e], t += (this.width() - t + (this._coordinates[i] || 0)) / 2 * n) : t = this._coordinates[i] || 0, t = Math.ceil(t))
        }, c.prototype.duration = function (e, t, n) {
            return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
        }, c.prototype.to = function (e, t) {
            var n = this.current(),
                i = null,
                r = e - this.relative(n),
                o = (0 < r) - (r < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), (i = (((e = n + r) - a) % s + s) % s + a) !== e && i - r <= l && 0 < i - r && (n = i - r, e = i, this.reset(n))) : this.settings.rewind ? e = (e % (l += 1) + l) % l : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.$element.is(":visible") && this.update()
        }, c.prototype.next = function (e) {
            e = e || !1, this.to(this.relative(this.current()) + 1, e)
        }, c.prototype.prev = function (e) {
            e = e || !1, this.to(this.relative(this.current()) - 1, e)
        }, c.prototype.onTransitionEnd = function (e) {
            return (e === o || (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
        }, c.prototype.viewport = function () {
            var e;
            if (this.options.responsiveBaseElement !== n) e = l(this.options.responsiveBaseElement).width();
            else if (n.innerWidth) e = n.innerWidth;
            else {
                if (!r.documentElement || !r.documentElement.clientWidth) throw "Can not detect viewport width.";
                e = r.documentElement.clientWidth
            }
            return e
        }, c.prototype.replace = function (e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : l(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
                return 1 === this.nodeType
            }).each(l.proxy(function (e, t) {
                t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, c.prototype.add = function (e, t) {
            var n = this.relative(this._current);
            t = t === o ? this._items.length : this.normalize(t, !0), e = e instanceof jQuery ? e : l(e), this.trigger("add", {
                content: e,
                position: t
            }), e = this.prepare(e), 0 === this._items.length || t === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[t - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(e), this._items.splice(t, 0, e), this._mergers.splice(t, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: t
            })
        }, c.prototype.remove = function (e) {
            (e = this.normalize(e, !0)) !== o && (this.trigger("remove", {
                content: this._items[e],
                position: e
            }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: e
            }))
        }, c.prototype.preloadAutoWidthImages = function (e) {
            e.each(l.proxy(function (e, t) {
                this.enter("pre-loading"), t = l(t), l(new Image).one("load", l.proxy(function (e) {
                    t.attr("src", e.target.src), t.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", t.attr("src") || t.attr("data-src") || t.attr("data-src-retina"))
            }, this))
        }, c.prototype.destroy = function () {
            for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(r).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, c.prototype.op = function (e, t, n) {
            var i = this.settings.rtl;
            switch (t) {
                case "<":
                    return i ? n < e : e < n;
                case ">":
                    return i ? e < n : n < e;
                case ">=":
                    return i ? e <= n : n <= e;
                case "<=":
                    return i ? n <= e : e <= n
            }
        }, c.prototype.on = function (e, t, n, i) {
            e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
        }, c.prototype.off = function (e, t, n, i) {
            e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
        }, c.prototype.trigger = function (e, t, n, i, r) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                s = l.camelCase(l.grep(["on", e, n], function (e) {
                    return e
                }).join("-").toLowerCase()),
                a = l.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
                    relatedTarget: this
                }, o, t));
            return this._supress[e] || (l.each(this._plugins, function (e, t) {
                t.onTrigger && t.onTrigger(a)
            }), this.register({
                type: c.Type.Event,
                name: e
            }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)), a
        }, c.prototype.enter = function (e) {
            l.each([e].concat(this._states.tags[e] || []), l.proxy(function (e, t) {
                this._states.current[t] === o && (this._states.current[t] = 0), this._states.current[t]++
            }, this))
        }, c.prototype.leave = function (e) {
            l.each([e].concat(this._states.tags[e] || []), l.proxy(function (e, t) {
                this._states.current[t]--
            }, this))
        }, c.prototype.register = function (n) {
            if (n.type === c.Type.Event) {
                if (l.event.special[n.name] || (l.event.special[n.name] = {}), !l.event.special[n.name].owl) {
                    var t = l.event.special[n.name]._default;
                    l.event.special[n.name]._default = function (e) {
                        return !t || !t.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && -1 < e.namespace.indexOf("owl") : t.apply(this, arguments)
                    }, l.event.special[n.name].owl = !0
                }
            } else n.type === c.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function (e, t) {
                return l.inArray(e, this._states.tags[n.name]) === t
            }, this)))
        }, c.prototype.suppress = function (e) {
            l.each(e, l.proxy(function (e, t) {
                this._supress[t] = !0
            }, this))
        }, c.prototype.release = function (e) {
            l.each(e, l.proxy(function (e, t) {
                delete this._supress[t]
            }, this))
        }, c.prototype.pointer = function (e) {
            var t = {
                x: null,
                y: null
            };
            return (e = (e = e.originalEvent || e || n.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
        }, c.prototype.isNumeric = function (e) {
            return !isNaN(parseFloat(e))
        }, c.prototype.difference = function (e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }, l.fn.owlCarousel = function (t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var e = l(this),
                    n = e.data("owl.carousel");
                n || (n = new c(this, "object" == typeof t && t), e.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, t) {
                    n.register({
                        type: c.Type.Event,
                        name: t
                    }), n.$element.on(t + ".owl.carousel.core", l.proxy(function (e) {
                        e.namespace && e.relatedTarget !== this && (this.suppress([t]), n[t].apply(this, [].slice.call(arguments, 1)), this.release([t]))
                    }, n))
                })), "string" == typeof t && "_" !== t.charAt(0) && n[t].apply(n, i)
            })
        }, l.fn.owlCarousel.Constructor = c
    }(window.Zepto || window.jQuery, window, document),
    function (t, n, e, i) {
        var r = function (e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function (e) {
                    e.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, r.prototype.watch = function () {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = n.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, r.prototype.refresh = function () {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, r.prototype.destroy = function () {
            var e, t;
            for (e in n.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
    }(window.Zepto || window.jQuery, window, document),
    function (a, o, e, t) {
        var n = function (e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var t = this._core.settings, n = t.center && Math.ceil(t.items / 2) || t.items, i = t.center && -1 * n || 0, r = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + i, o = this._core.clones().length, s = a.proxy(function (e, t) {
                                this.load(t)
                            }, this); i++ < n;) this.load(o / 2 + this._core.relative(r)), o && a.each(this._core.clones(this._core.relative(r)), s), r++
                }, this)
            }, this._core.options = a.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        n.Defaults = {
            lazyLoad: !1
        }, n.prototype.load = function (e) {
            var t = this._core.$stage.children().eq(e),
                n = t && t.find(".owl-lazy");
            !n || -1 < a.inArray(t.get(0), this._loaded) || (n.each(a.proxy(function (e, t) {
                var n, i = a(t),
                    r = 1 < o.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src");
                this._core.trigger("load", {
                    element: i,
                    url: r
                }, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function () {
                    i.css("opacity", 1), this._core.trigger("loaded", {
                        element: i,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : ((n = new Image).onload = a.proxy(function () {
                    i.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: i,
                        url: r
                    }, "lazy")
                }, this), n.src = r)
            }, this)), this._loaded.push(t.get(0)))
        }, n.prototype.destroy = function () {
            var e, t;
            for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = n
    }(window.Zepto || window.jQuery, window, document),
    function (o, e, t, n) {
        var i = function (e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (e) {
                    e.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": o.proxy(function (e) {
                    e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
                }, this),
                "loaded.owl.lazy": o.proxy(function (e) {
                    e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = o.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, i.prototype.update = function () {
            var e, t = this._core._current,
                n = t + this._core.settings.items,
                i = this._core.$stage.children().toArray().slice(t, n),
                r = [];
            o.each(i, function (e, t) {
                r.push(o(t).height())
            }), e = Math.max.apply(null, r), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
        }, i.prototype.destroy = function () {
            var e, t;
            for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
    }(window.Zepto || window.jQuery, window, document),
    function (u, e, t, n) {
        var i = function (e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": u.proxy(function (e) {
                    e.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": u.proxy(function (e) {
                    e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
                }, this),
                "refreshed.owl.carousel": u.proxy(function (e) {
                    e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": u.proxy(function (e) {
                    e.namespace && "position" === e.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": u.proxy(function (e) {
                    if (e.namespace) {
                        var t = u(e.content).find(".owl-video");
                        t.length && (t.css("display", "none"), this.fetch(t, u(e.content)))
                    }
                }, this)
            }, this._core.options = u.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", u.proxy(function (e) {
                this.play(e)
            }, this))
        };
        i.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, i.prototype.fetch = function (e, t) {
            var n = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
                i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
                r = e.attr("data-width") || this._core.settings.videoWidth,
                o = e.attr("data-height") || this._core.settings.videoHeight,
                s = e.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if (-1 < (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
            else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
            else {
                if (!(-1 < i[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                n = "vzaar"
            }
            i = i[6], this._videos[s] = {
                type: n,
                id: i,
                width: r,
                height: o
            }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
        }, i.prototype.thumbnail = function (t, e) {
            var n, i, r = e.width && e.height ? 'style="width:' + e.width + "px;height:" + e.height + 'px;"' : "",
                o = t.find("img"),
                s = "src",
                a = "",
                l = this._core.settings,
                c = function (e) {
                    '<div class="owl-video-play-icon"></div>',
                    n = l.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + s + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>',
                    t.after(n),
                    t.after('<div class="owl-video-play-icon"></div>')
                };
            return t.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (s = "data-src", a = "owl-lazy"), o.length ? (c(o.attr(s)), o.remove(), !1) : void("youtube" === e.type ? (i = "//img.youtube.com/vi/" + e.id + "/hqdefault.jpg", c(i)) : "vimeo" === e.type ? u.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + e.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (e) {
                    i = e[0].thumbnail_large, c(i)
                }
            }) : "vzaar" === e.type && u.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + e.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (e) {
                    i = e.framegrab_url, c(i)
                }
            }))
        }, i.prototype.stop = function () {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, i.prototype.play = function (e) {
            var t, n = u(e.target).closest("." + this._core.settings.itemClass),
                i = this._videos[n.attr("data-video")],
                r = i.width || "100%",
                o = i.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === i.type ? t = '<iframe width="' + r + '" height="' + o + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&v=" + i.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === i.type ? t = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + r + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === i.type && (t = '<iframe frameborder="0"height="' + o + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"></iframe>'), u('<div class="owl-video-frame">' + t + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, i.prototype.isInFullScreen = function () {
            var e = t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement;
            return e && u(e).parent().hasClass("owl-video-frame")
        }, i.prototype.destroy = function () {
            var e, t;
            for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, u.fn.owlCarousel.Constructor.Plugins.Video = i
    }(window.Zepto || window.jQuery, window, document),
    function (s, e, t, n) {
        var i = function (e) {
            this.core = e, this.core.options = s.extend({}, i.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": s.proxy(function (e) {
                    e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function (e) {
                    e.namespace && (this.swapping = "translated" == e.type)
                }, this),
                "translate.owl.carousel": s.proxy(function (e) {
                    e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        i.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, i.prototype.swap = function () {
            if (1 === this.core.settings.items && s.support.animation && s.support.transition) {
                this.core.speed(0);
                var e, t = s.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    i = this.core.$stage.children().eq(this.next),
                    r = this.core.settings.animateIn,
                    o = this.core.settings.animateOut;
                this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(s.support.animation.end, t).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(o)), r && i.one(s.support.animation.end, t).addClass("animated owl-animated-in").addClass(r))
            }
        }, i.prototype.clear = function (e) {
            s(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, i.prototype.destroy = function () {
            var e, t;
            for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, s.fn.owlCarousel.Constructor.Plugins.Animate = i
    }(window.Zepto || window.jQuery, window, document),
    function (n, i, r, e) {
        var t = function (e) {
            this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": n.proxy(function (e) {
                    e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": n.proxy(function (e) {
                    e.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": n.proxy(function (e, t, n) {
                    e.namespace && this.play(t, n)
                }, this),
                "stop.owl.autoplay": n.proxy(function (e) {
                    e.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": n.proxy(function () {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, t.Defaults, this._core.options)
        };
        t.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, t.prototype.play = function (e, t) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, t.prototype._getNextTimeout = function (e, t) {
            return this._timeout && i.clearTimeout(this._timeout), i.setTimeout(n.proxy(function () {
                this._paused || this._core.is("busy") || this._core.is("interacting") || r.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
            }, this), e || this._core.settings.autoplayTimeout)
        }, t.prototype._setAutoPlayInterval = function () {
            this._timeout = this._getNextTimeout()
        }, t.prototype.stop = function () {
            this._core.is("rotating") && (i.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, t.prototype.pause = function () {
            this._core.is("rotating") && (this._paused = !0)
        }, t.prototype.destroy = function () {
            var e, t;
            for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, n.fn.owlCarousel.Constructor.Plugins.autoplay = t
    }(window.Zepto || window.jQuery, window, document),
    function (o, e, t, n) {
        "use strict";
        var i = function (e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": o.proxy(function (e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": o.proxy(function (e) {
                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": o.proxy(function (e) {
                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
                }, this),
                "changed.owl.carousel": o.proxy(function (e) {
                    e.namespace && "position" == e.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": o.proxy(function (e) {
                    e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": o.proxy(function (e) {
                    e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = o.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        i.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, i.prototype.initialize = function () {
            var e, n = this._core.settings;
            for (e in this._controls.$relative = (n.navContainer ? o(n.navContainer) : o("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function (e) {
                    this.prev(n.navSpeed)
                }, this)), this._controls.$next = o("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function (e) {
                    this.next(n.navSpeed)
                }, this)), n.dotsData || (this._templates = [o("<div>").addClass(n.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? o(n.dotsContainer) : o("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", o.proxy(function (e) {
                    var t = o(e.target).parent().is(this._controls.$absolute) ? o(e.target).index() : o(e.target).parent().index();
                    e.preventDefault(), this.to(t, n.dotsSpeed)
                }, this)), this._overrides) this._core[e] = o.proxy(this[e], this)
        }, i.prototype.destroy = function () {
            var e, t, n, i;
            for (e in this._handlers) this.$element.off(e, this._handlers[e]);
            for (t in this._controls) this._controls[t].remove();
            for (i in this.overides) this._core[i] = this._overrides[i];
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, i.prototype.update = function () {
            var e, t, n = this._core.clones().length / 2,
                i = n + this._core.items().length,
                r = this._core.maximum(!0),
                o = this._core.settings,
                s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                for (this._pages = [], e = n, t = 0; e < i; e++) {
                    if (s <= t || 0 === t) {
                        if (this._pages.push({
                                start: Math.min(r, e - n),
                                end: e - n + s - 1
                            }), Math.min(r, e - n) === r) break;
                        t = 0, 0
                    }
                    t += this._core.mergers(this._core.relative(e))
                }
        }, i.prototype.draw = function () {
            var e, t = this._core.settings,
                n = this._core.items().length <= t.items,
                i = this._core.relative(this._core.current()),
                r = t.loop || t.rewind;
            this._controls.$relative.toggleClass("disabled", !t.nav || n), t.nav && (this._controls.$previous.toggleClass("disabled", !r && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !t.dots || n), t.dots && (e = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : 0 < e ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
        }, i.prototype.onTrigger = function (e) {
            var t = this._core.settings;
            e.page = {
                index: o.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: t && (t.center || t.autoWidth || t.dotsData ? 1 : t.dotsEach || t.items)
            }
        }, i.prototype.current = function () {
            var n = this._core.relative(this._core.current());
            return o.grep(this._pages, o.proxy(function (e, t) {
                return e.start <= n && e.end >= n
            }, this)).pop()
        }, i.prototype.getPosition = function (e) {
            var t, n, i = this._core.settings;
            return "page" == i.slideBy ? (t = o.inArray(this.current(), this._pages), n = this._pages.length, e ? ++t : --t, t = this._pages[(t % n + n) % n].start) : (t = this._core.relative(this._core.current()), n = this._core.items().length, e ? t += i.slideBy : t -= i.slideBy), t
        }, i.prototype.next = function (e) {
            o.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, i.prototype.prev = function (e) {
            o.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, i.prototype.to = function (e, t, n) {
            var i;
            !n && this._pages.length ? (i = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(e % i + i) % i].start, t)) : o.proxy(this._overrides.to, this._core)(e, t)
        }, o.fn.owlCarousel.Constructor.Plugins.Navigation = i
    }(window.Zepto || window.jQuery, window, document),
    function (i, r, e, t) {
        "use strict";
        var n = function (e) {
            this._core = e, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": i.proxy(function (e) {
                    e.namespace && "URLHash" === this._core.settings.startPosition && i(r).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": i.proxy(function (e) {
                    if (e.namespace) {
                        var t = i(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!t) return;
                        this._hashes[t] = e.content
                    }
                }, this),
                "changed.owl.carousel": i.proxy(function (e) {
                    if (e.namespace && "position" === e.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            t = i.map(this._hashes, function (e, t) {
                                return e === n ? t : null
                            }).join();
                        if (!t || r.location.hash.slice(1) === t) return;
                        r.location.hash = t
                    }
                }, this)
            }, this._core.options = i.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), i(r).on("hashchange.owl.navigation", i.proxy(function (e) {
                var t = r.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    i = this._hashes[t] && n.index(this._hashes[t]);
                void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
            }, this))
        };
        n.Defaults = {
            URLhashListener: !1
        }, n.prototype.destroy = function () {
            var e, t;
            for (e in i(r).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
        }, i.fn.owlCarousel.Constructor.Plugins.Hash = n
    }(window.Zepto || window.jQuery, window, document),
    function (r, e, t, o) {
        function n(e, n) {
            var i = !1,
                t = e.charAt(0).toUpperCase() + e.slice(1);
            return r.each((e + " " + a.join(t + " ") + t).split(" "), function (e, t) {
                if (s[t] !== o) return i = !n || t, !1
            }), i
        }

        function i(e) {
            return n(e, !0)
        }
        var s = r("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = function () {
                return !!n("transform")
            },
            u = function () {
                return !!n("perspective")
            },
            p = function () {
                return !!n("animation")
            };
        (function () {
            return !!n("transition")
        })() && (r.support.transition = new String(i("transition")), r.support.transition.end = l.transition.end[r.support.transition]), p() && (r.support.animation = new String(i("animation")), r.support.animation.end = l.animation.end[r.support.animation]), c() && (r.support.transform = new String(i("transform")), r.support.transform3d = u())
    }(window.Zepto || window.jQuery, window, document), $(document).ready(function () {
        $(".popup-order").click(function (e) {
            e.stopPropagation()
        }), $(document).on("click", 'a[href^="#"]', function (e) {
            e.preventDefault(), $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top
            }, 1e3)
        }), $(".text-reviews__items.owl-carousel").owlCarousel({
            loop: !0,
            margin: 0,
            items: 1,
            nav: !0,
            navText: [, ]
        }), $(".question").click(function () {
            $(".answer").stop().animate({
                paddingBottom: 0,
                height: 0,
                paddingTop: 0
            }, 500);
            var e = $(this).siblings(".answer");
            0 == e.height() ? (h = e.css("height", "auto").height(), e.height(0), e.stop().animate({
                paddingTop: "10px",
                height: h + 37,
                paddingBottom: "27px"
            }, 500)) : e.stop().animate({
                paddingBottom: 0,
                height: 0,
                paddingTop: 0
            }, 500)
        })
    }), $(window).scroll(function () {
        $(".answer").stop().animate({
            paddingBottom: 0,
            height: 0,
            paddingTop: 0
        }, 500)
    });
var popupBuild = !0;
window.cdn_path || function () {
    var d = 999,
        h = document.querySelector("#cloneThis"),
        f = document.querySelector("#cloneMobileThis");
    if (popupBuild) {
        var e = document.createElement("style");
        e.innerHTML = ".ever-popup-build{position: fixed; opacity: 0;z-index: -1; top: 0; left: -9999px;}", document.querySelector("head").appendChild(e)
    }

    function m() {
        var e = document.createElement("div"),
            t = document.createElement("div"),
            n = document.createElement("div");
        e.classList.add("ever-popup"), t.classList.add("ever-popup__inner"), n.classList.add("ever-popup__close"), e.appendChild(t), t.appendChild(n), document.body.appendChild(e)
    }

    function g(e) {
        var t = document.querySelector(".ever-popup  .ever-popup__inner");
        if (t) {
            var n = document.querySelector("#cloneThis"),
                i = document.querySelector("#cloneMobileThis");
            n && (r(n, t, e), window.innerWidth >= d && (t.style.width = n.offsetWidth + "px"), i || (t.style.width = n.offsetWidth + "px")), i && (r(i, t, e), window.innerWidth <= d && (t.style.width = i.offsetWidth + "px"))
        }
    }

    function r(e, t, n) {
        var i = e.offsetHeight;
        if (n < i) t.style.margin = "40px auto";
        else {
            var r = (n - i) / 2;
            t.style.margin = r + "px auto 20px"
        }
    }

    function y() {
        document.querySelector(".ever-popup").classList.add("show")
    }

    function v() {
        document.querySelector(".ever-popup").classList.remove("show")
    }

    function b(e) {
        e.stopPropagation()
    }

    function w(e) {
        e.preventDefault();
        var t = document.querySelector(".check__field").value,
            n = document.querySelector(".check__result");
        15 === t.length ? n.innerHTML = "Данный код верен. Спасибо, что выбрали нашу продукцию!" : 0 === t.length ? n.innerHTML = "Введите, пожалуйста, код." : n.innerHTML = "К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт."
    }
    var i = 0;

    function x() {
        var e = localStorage.getItem("time"),
            t = document.querySelector(".timer-different"),
            n = parseInt(e / 3600, 10),
            i = parseInt((e - 3600 * n) / 60, 10),
            r = parseInt(e % 60, 10);
        i = i < 10 ? "0" + i : "" + i, r = r < 10 ? "0" + r : "" + r, n = n < 10 ? "0" + n : "" + n;
        var o = document.getElementsByClassName("hours"),
            s = document.getElementsByClassName("minutes"),
            a = document.getElementsByClassName("seconds");
        --e < 0 ? localStorage.removeItem("ever-timer") : (t ? (r = r.split(""), i = i.split(""), c(o, n = n.split("")), c(s, i), c(a, r)) : (l(o, n), l(s, i), l(a, r)), localStorage.setItem("time", e), setTimeout(x, 1e3))
    }

    function l(e, t) {
        for (var n = 0; n < e.length; n++) e[n].innerHTML = t
    }

    function c(e, t) {
        for (var n = 0; n < e.length; n++) e[n].innerHTML = t[n % 2]
    }
    document.body.addEventListener("mouseleave", function (e) {
        var t = e || window.event;
        t = t.clientY;
        var n = document.querySelector(".ever-popup");
        n && t < 10 && 0 === i && (n.classList.add("show"), i++)
    }), document.addEventListener("DOMContentLoaded", function () {
        var e, t, n, i, r = document.querySelector("#cloneThis"),
            o = document.querySelector("#cloneMobileThis"),
            s = document.querySelector(".hours"),
            a = document.querySelector(".minutes"),
            l = document.querySelector(".seconds");
        if (s && a && l && function () {
                if (!localStorage.getItem("ever-timer")) {
                    var e = {
                        hours: 0,
                        minutes: 27,
                        seconds: 0
                    };
                    e = 3600 * e.hours + 60 * e.minutes + e.seconds, localStorage.setItem("time", e), localStorage.setItem("ever-timer", !0)
                }
                x()
            }(), r ? (m(), n = document.createElement("style"), i = document.querySelector("head"), n.innerHTML = '.ever-popup__body.ever-mobile{display:none}.ever-popup{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.7);z-index: 111;display: none;overflow: auto;}.ever-popup__body{position: static;float: none;display: block;margin: 0 auto;width:auto}.ever-popup.show{display: block;align-items: center;}.ever-popup__inner{position: relative;margin: 0 auto;padding-top:35px}.ever-popup__close{width: 35px;height: 30px;position: absolute;cursor:pointer;top: 0;right: 0;z-index: 1;-webkit-transition: .3s; -moz-transition: .3s; -ms-transition: .3s; -o-transition: .3s; transition: .3s;}.ever-popup__close:after, .ever-popup__close:before {content: "";position: absolute;right: 0;top: 10px;width: 35px;height: 10px;background: #fff;transition: all 1s;}.ever-popup__close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);}.ever-popup__close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}@media screen and (max-width: ' + d + "px){.ever-popup__body.ever-desktop{display:none}.ever-popup__body.ever-mobile{display:block}}", i.appendChild(n), function (e) {
                var t = document.createElement("div");
                t.classList.add("phoneBtnContainer"), t.innerHTML = '<div class="bluePhone"><div class=" phone-call cbh-phone cbh-green cbh-show ever-popup-btn cbh-static" id="clbh_phone_div"><div class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></div></div></div>', document.body.appendChild(t);
                var n = document.createElement("style");
                n.innerHTML = ".phoneBtnContainer{position:fixed; right: 10px;bottom: 10px; visibility:hidden;background-color:transparent;width:200px;height:200px;cursor:pointer;z-index:99;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);-webkit-transition:visibility .5s;-moz-transition:visibility .5s;-o-transition:visibility .5s;transition:visibility .5s}.cbh-phone.cbh-show{visibility:visible}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none}}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeOutRight{0%{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}100%{opacity:0;-webkit-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}.cbh-phone.cbh-static1{opacity:.6}.cbh-phone.cbh-hover1{opacity:1}.cbh-ph-circle{width:160px;height:160px;top:20px;left:20px;position:absolute;background-color:transparent;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid rgba(30,30,30,.4);opacity:.1;-webkit-animation:cbh-circle-anim 1.2s infinite ease-in-out;-moz-animation:cbh-circle-anim 1.2s infinite ease-in-out;-ms-animation:cbh-circle-anim 1.2s infinite ease-in-out;-o-animation:cbh-circle-anim 1.2s infinite ease-in-out;animation:cbh-circle-anim 1.2s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s}.cbh-phone.cbh-active .cbh-ph-circle1{-webkit-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-moz-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-ms-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;-o-animation:cbh-circle-anim 1.1s infinite ease-in-out!important;animation:cbh-circle-anim 1.1s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-circle{-webkit-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-moz-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-ms-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;-o-animation:cbh-circle-anim 2.2s infinite ease-in-out!important;animation:cbh-circle-anim 2.2s infinite ease-in-out!important}.cbh-phone.cbh-hover .cbh-ph-circle{border-color:rgba(0,175,242,1);opacity:.5}.cbh-phone.cbh-green.cbh-hover .cbh-ph-circle{border-color:rgba(117,235,80,1);opacity:.5}.cbh-phone.cbh-green .cbh-ph-circle{border-color:rgba(0,175,242,1);opacity:.5}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-circle{border-color:rgba(204,204,204,1);opacity:.5}.cbh-phone.cbh-gray .cbh-ph-circle{border-color:rgba(117,235,80,1);opacity:.5}.cbh-ph-circle-fill{width:100px;height:100px;top:50px;left:50px;position:absolute;background-color:#000;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:.1;-webkit-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-moz-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-ms-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-o-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;animation:cbh-circle-fill-anim 2.3s infinite ease-in-out;-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s}.cbh-phone.cbh-active .cbh-ph-circle-fill{-webkit-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-moz-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-ms-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;-o-animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important;animation:cbh-circle-fill-anim 1.7s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-circle-fill{-webkit-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-moz-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-ms-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;-o-animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;animation:cbh-circle-fill-anim 2.3s infinite ease-in-out!important;opacity:0!important} .cbh-phone.cbh-hover .cbh-ph-circle-fill{background-color:rgba(0,175,242,.5);opacity:.75!important}.cbh-phone.cbh-green.cbh-hover .cbh-ph-circle-fill{background-color:rgba(117,235,80,.5);opacity:.75!important}.cbh-phone.cbh-green .cbh-ph-circle-fill{background-color:rgba(0,175,242,.5);opacity:.75!important}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-circle-fill{background-color:rgba(204,204,204,.5);opacity:.75!important}.cbh-phone.cbh-gray .cbh-ph-circle-fill{background-color:rgba(117,235,80,.5);opacity:.75!important}.cbh-ph-img-circle1{width:60px;height:60px;top:70px;left:70px;position:absolute;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAB/ElEQVR42uya7W3CMBCG31QM4A1aNggTlG6QbpBMkHYC1AloJ4BOABuEDcgGtBOETnD9c1ERCH/lwxeaV8oPFGP86Hy+DxMREW5Bd7gRjSDSNGn4/RiAOvm8C0ZCRD5PSkQVXSr1nK/xE3mcWimA1ZV3JYBZCIO4giQANoYxMwYS6+xKY4lT5dJPreWZY+uspqSCKPYN27GJVBDXheVSQe494ksiEWTuMXcu1dld9SARxDX1OAJ4lgjy4zDnFsC076A4adEiRwAZg4hOUSpNoCsBPDGM+HqkNGynYBCuILuWj+dgWysGsNe8nwL4GsrW0m2fxZBq9rW0rNcX5MOQ9eZD8JFahcG5g/iKT671alGAYQggpYWvpEPYWrU/HDTOfeRIX0q2SL3QN4tGhZJukVobQyXYWw7WtLDKDIuM+ZSzscyCE9PCy5IttCvnZNaeiGLNHKuz8ZVh/MXTVu/1xQKmIqLEAuJ0fNo3iG5B51oSkeKnsBi/4bG9gYB/lCytU5G9DryFW+3Gm+JLwU7ehbJrwTjq4DJU8bHcVbEV9dXXqqP6uqO5e2/QZRYJpqu2IUAA4B3tXvx8hgKp05QZW6dJqrLTNkB6vrRURLRwPHqtYgkC3cLWQAcDQGGKH13FER/NATzi786+BPDNjm1dMkfjn2pGkBHkf4D8DgBJDuDHx9BN+gAAAABJRU5ErkJggg==);background-color:rgba(30,30,30,.1);background-position:center center;background-repeat:no-repeat;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;border:2px solid transparent;opacity:.7;-webkit-animation:cbh-circle-img-anim 1s infinite ease-in-out;-moz-animation:cbh-circle-img-anim 1s infinite ease-in-out;-ms-animation:cbh-circle-img-anim 1s infinite ease-in-out;-o-animation:cbh-circle-img-anim 1s infinite ease-in-out;animation:cbh-circle-img-anim 1s infinite ease-in-out}.cbh-phone.cbh-active .cbh-ph-img-circle1{-webkit-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-moz-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-ms-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;-o-animation:cbh-circle-img-anim 1s infinite ease-in-out!important;animation:cbh-circle-img-anim 1s infinite ease-in-out!important}.cbh-phone.cbh-static .cbh-ph-img-circle1{-webkit-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-moz-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-ms-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;-o-animation:cbh-circle-img-anim 0s infinite ease-in-out!important;animation:cbh-circle-img-anim 0s infinite ease-in-out!important}.cbh-phone.cbh-hover .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-green.cbh-hover .cbh-ph-img-circle1:hover{background-color:rgba(117,235,80,1)}.cbh-phone.cbh-green .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-green .cbh-ph-img-circle1{background-color:rgba(0,175,242,1)}.cbh-phone.cbh-gray.cbh-hover .cbh-ph-img-circle1{background-color:rgba(204,204,204,1)}.cbh-phone.cbh-gray .cbh-ph-img-circle1{background-color:rgba(117,235,80,1)}@-moz-keyframes cbh-circle-anim{0%{-moz-transform:rotate(0deg) scale(0.5) skew(1deg);opacity:.1;-moz-opacity:.1;-webkit-opacity:.1;-o-opacity:.1}30%{-moz-transform:rotate(0deg) scale(.7) skew(1deg);opacity:.5;-moz-opacity:.5;-webkit-opacity:.5;-o-opacity:.5}100%{-moz-transform:rotate(0deg) scale(1) skew(1deg);opacity:.6;-moz-opacity:.6;-webkit-opacity:.6;-o-opacity:.1}}@-webkit-keyframes cbh-circle-anim{0%{-webkit-transform:rotate(0deg) scale(0.5) skew(1deg);-webkit-opacity:.1}30%{-webkit-transform:rotate(0deg) scale(.7) skew(1deg);-webkit-opacity:.5}100%{-webkit-transform:rotate(0deg) scale(1) skew(1deg);-webkit-opacity:.1}}@-o-keyframes cbh-circle-anim{0%{-o-transform:rotate(0deg) kscale(0.5) skew(1deg);-o-opacity:.1}30%{-o-transform:rotate(0deg) scale(.7) skew(1deg);-o-opacity:.5}100%{-o-transform:rotate(0deg) scale(1) skew(1deg);-o-opacity:.1}}@keyframes cbh-circle-anim{0%{transform:rotate(0deg) scale(0.5) skew(1deg);opacity:.1}30%{transform:rotate(0deg) scale(.7) skew(1deg);opacity:.5}100%{transform:rotate(0deg) scale(1) skew(1deg);opacity:.1}}@-moz-keyframes cbh-circle-fill-anim{0%{-moz-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-moz-transform:rotate(0deg) -moz-scale(1) skew(1deg);opacity:.2}100%{-moz-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@-webkit-keyframes cbh-circle-fill-anim{0%{-webkit-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-webkit-transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{-webkit-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@-o-keyframes cbh-circle-fill-anim{0%{-o-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{-o-transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{-o-transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@keyframes cbh-circle-fill-anim{0%{transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}50%{transform:rotate(0deg) scale(1) skew(1deg);opacity:.2}100%{transform:rotate(0deg) scale(0.7) skew(1deg);opacity:.2}}@keyframes cbh-circle-img-anim{0%{transform:rotate(0deg) scale(1) skew(1deg)}10%{transform:rotate(-25deg) scale(1) skew(1deg)}20%{transform:rotate(25deg) scale(1) skew(1deg)}30%{transform:rotate(-25deg) scale(1) skew(1deg)}40%{transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{transform:rotate(0deg) scale(1) skew(1deg)}}@-moz-keyframes cbh-circle-img-anim{0%{transform:rotate(0deg) scale(1) skew(1deg)}10%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}30%{-moz-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-moz-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-moz-transform:rotate(0deg) scale(1) skew(1deg)}}@-webkit-keyframes cbh-circle-img-anim{0%{-webkit-transform:rotate(0deg) scale(1) skew(1deg)}10%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}30%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-webkit-transform:rotate(0deg) scale(1) skew(1deg)}}@-o-keyframes cbh-circle-img-anim{0%{-o-transform:rotate(0deg) scale(1) skew(1deg)}10%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-o-transform:rotate(25deg) scale(1) skew(1deg)}30%{-o-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-o-transform:rotate(25deg) scale(1) skew(1deg)}100%,50%{-o-transform:rotate(0deg) scale(1) skew(1deg)}}.cbh-ph-img-circle1 {}.cbh-phone.cbh-green .cbh-ph-circle {border-color: rgba(0, 175, 242, 1)}.cbh-phone.cbh-green .cbh-ph-circle-fill {background-color: rgba(0, 175, 242, 1);}.cbh-phone.cbh-green .cbh-ph-img-circle1 {background-color:rgba(0, 175, 242, 1);}body, div, dl, dt, dd, ul, ol, li, nav, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td, a {-webkit-transform-origin: center center;-ms-transform-origin: center center;-o-transform-origin: center center;transform-origin: center center;}@media screen and (max-width: " + e + "px) {#clbh_phone_div{display: none !important;}}", document.querySelector("head").appendChild(n)
            }(d), document.querySelector(".phoneBtnContainer").addEventListener("click", y)) : (m(), e = document.createElement("style"), t = document.querySelector("head"), e.innerHTML = "@media screen and (max-width: " + d + 'px) {.ever-popup {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, .7);z-index: 111;display: none;overflow: auto;}.ever-popup__body {position: static;float: none;display: block;margin: 0 auto;width: auto}.ever-popup.show {display: block;align-items: center;}.ever-popup__inner {position: relative;margin: 0 auto;padding-top: 35px}.ever-popup__close {width: 35px;height: 30px;position: absolute;cursor: pointer;top: 0;right: 0;z-index: 1;-webkit-transition: .3s;-moz-transition: .3s;-ms-transition: .3s;-o-transition: .3s;transition: .3s;}.ever-popup__close:after, .ever-popup__close:before {content: "";position: absolute;right: 0;top: 10px;width: 35px;height: 10px;background: #fff;transition: all 1s;}.ever-popup__close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);}.ever-popup__close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}}', t.appendChild(e)), r || o) {
            ! function (e) {
                var t = document.querySelector(".ever-popup__inner");
                if (h) {
                    var n = h.cloneNode(!0);
                    n.classList.add("ever-popup__body"), n.removeAttribute("id"), t.appendChild(n), document.querySelector(".ever-popup .ever-popup__inner").style.width = document.querySelector("#cloneThis").offsetWidth + "px"
                }
                if (f) {
                    var i = f.cloneNode(!0);
                    n && n.classList.add("ever-desktop"), i.classList.add("ever-popup__body"), i.classList.add("ever-mobile"), i.removeAttribute("id"), t.appendChild(i);
                    var r = ".ever-desktop{display: block}.ever-mobile{display: none}@media screen and (max-width: " + e + "px){.ever-mobile{display: block}.ever-desktop{display: none;}}",
                        o = document.createElement("style");
                    o.innerHTML = r, document.querySelector("head").appendChild(o), document.querySelector(".ever-popup .ever-popup__inner").style.width = document.querySelector("#cloneMobileThis").offsetWidth + "px", console.log(f.offsetWidth)
                }
            }(d), g(window.innerHeight), document.querySelector(".ever-popup__close").addEventListener("click", v), document.querySelector(".ever-popup__inner").addEventListener("click", b), document.querySelector(".ever-popup").addEventListener("click", v);
            for (var c = document.querySelectorAll(".ever-popup-btn"), u = 0; u < c.length; u++) c && c[u].addEventListener("click", y)
        }
        var p = document.querySelector(".check__btn");
        p && p.addEventListener("click", w)
    }), window.addEventListener("resize", function () {
        g(window.innerHeight)
    })
}();