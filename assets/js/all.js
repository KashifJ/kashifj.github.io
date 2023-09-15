var _gsScope;
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var i = [],
        n = e.document,
        r = Object.getPrototypeOf,
        s = i.slice,
        o = i.concat,
        a = i.push,
        l = i.indexOf,
        u = {},
        c = u.toString,
        h = u.hasOwnProperty,
        f = h.toString,
        p = f.call(Object),
        d = {};

    function m(e, t) {
        var i = (t = t || n).createElement("script");
        i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
    }
    var g = "3.2.1",
        _ = function(e, t) {
            return new _.fn.init(e, t)
        },
        v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        y = /^-ms-/,
        w = /-([a-z])/g,
        x = function(e, t) {
            return t.toUpperCase()
        };

    function b(e) {
        var t = !!e && "length" in e && e.length,
            i = _.type(e);
        return "function" !== i && !_.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: g,
        constructor: _,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: i.sort,
        splice: i.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || _.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = o[t], o !== (n = e[t]) && (u && n && (_.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && _.isPlainObject(i) ? i : {}, o[t] = _.extend(u, s, n)) : void 0 !== n && (o[t] = n));
        return o
    }, _.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === _.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = _.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== c.call(e) || (t = r(e)) && (i = h.call(t, "constructor") && t.constructor, "function" != typeof i || f.call(i) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            m(e)
        },
        camelCase: function(e) {
            return e.replace(y, "ms-").replace(w, x)
        },
        each: function(e, t) {
            var i, n = 0;
            if (b(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(v, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (b(Object(e)) ? _.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : l.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function(e, t, i) {
            for (var n = [], r = 0, s = e.length, o = !i; r < s; r++) !t(e[r], r) !== o && n.push(e[r]);
            return n
        },
        map: function(e, t, i) {
            var n, r, s = 0,
                a = [];
            if (b(e))
                for (n = e.length; s < n; s++) null != (r = t(e[s], s, i)) && a.push(r);
            else
                for (s in e) null != (r = t(e[s], s, i)) && a.push(r);
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, r;
            if ("string" == typeof t && (i = e[t], t = e, e = i), _.isFunction(e)) return n = s.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || _.guid++, r
        },
        now: Date.now,
        support: d
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = i[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, i, n, r, s, o, a, l, u, c, h, f, p, d, m, g, _, v, y, w = "sizzle" + 1 * new Date,
            x = e.document,
            b = 0,
            T = 0,
            P = oe(),
            C = oe(),
            k = oe(),
            O = function(e, t) {
                return e === t && (h = !0), 0
            },
            S = {}.hasOwnProperty,
            $ = [],
            A = $.pop,
            D = $.push,
            R = $.push,
            E = $.slice,
            M = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            j = "\\[" + N + "*(" + L + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + N + "*\\]",
            F = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
            q = new RegExp(N + "+", "g"),
            z = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            H = new RegExp("^" + N + "*," + N + "*"),
            B = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            X = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
            W = new RegExp(F),
            V = new RegExp("^" + L + "$"),
            Y = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            },
            U = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            K = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            ee = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function() {
                f()
            },
            re = ve(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            R.apply($ = E.call(x.childNodes), x.childNodes), $[x.childNodes.length].nodeType
        } catch (e) {
            R = {
                apply: $.length ? function(e, t) {
                    D.apply(e, E.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function se(e, t, n, r) {
            var s, a, u, c, h, d, _, v = t && t.ownerDocument,
                b = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== b && 9 !== b && 11 !== b) return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== p && f(t), t = t || p, m)) {
                if (11 !== b && (h = Z.exec(e)))
                    if (s = h[1]) {
                        if (9 === b) {
                            if (!(u = t.getElementById(s))) return n;
                            if (u.id === s) return n.push(u), n
                        } else if (v && (u = v.getElementById(s)) && y(t, u) && u.id === s) return n.push(u), n
                    } else {
                        if (h[2]) return R.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = h[3]) && i.getElementsByClassName && t.getElementsByClassName) return R.apply(n, t.getElementsByClassName(s)), n
                    } if (i.qsa && !k[e + " "] && (!g || !g.test(e))) {
                    if (1 !== b) v = t, _ = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ie) : t.setAttribute("id", c = w), a = (d = o(e)).length; a--;) d[a] = "#" + c + " " + _e(d[a]);
                        _ = d.join(","), v = J.test(e) && me(t.parentNode) || t
                    }
                    if (_) try {
                        return R.apply(n, v.querySelectorAll(_)), n
                    } catch (e) {} finally {
                        c === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(z, "$1"), t, n, r)
        }

        function oe() {
            var e = [];
            return function t(i, r) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r
            }
        }

        function ae(e) {
            return e[w] = !0, e
        }

        function le(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var i = e.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = t
        }

        function ce(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function de(e) {
            return ae(function(t) {
                return t = +t, ae(function(i, n) {
                    for (var r, s = e([], i.length, t), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = se.support = {}, s = se.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, f = se.setDocument = function(e) {
                var t, r, o = e ? e.ownerDocument || e : x;
                return o !== p && 9 === o.nodeType && o.documentElement ? (d = (p = o).documentElement, m = !s(p), x !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)), i.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), i.getElementsByTagName = le(function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = le(function(e) {
                    return d.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                }), i.getById ? (n.filter.ID = function(e) {
                    var t = e.replace(K, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function(e) {
                    var t = e.replace(K, ee);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i, n, r, s = t.getElementById(e);
                        if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                            for (r = t.getElementsByName(e), n = 0; s = r[n++];)
                                if ((i = s.getAttributeNode("id")) && i.value === e) return [s]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, _ = [], g = [], (i.qsa = Q.test(p.querySelectorAll)) && (le(function(e) {
                    d.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), d.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (i.matchesSelector = Q.test(v = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && le(function(e) {
                    i.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), _.push("!=", F)
                }), g = g.length && new RegExp(g.join("|")), _ = _.length && new RegExp(_.join("|")), t = Q.test(d.compareDocumentPosition), y = t || Q.test(d.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, O = t ? function(e, t) {
                    if (e === t) return h = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === x && y(x, e) ? -1 : t === p || t.ownerDocument === x && y(x, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return h = !0, 0;
                    var i, n = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        o = [e],
                        a = [t];
                    if (!r || !s) return e === p ? -1 : t === p ? 1 : r ? -1 : s ? 1 : c ? M(c, e) - M(c, t) : 0;
                    if (r === s) return ce(e, t);
                    for (i = e; i = i.parentNode;) o.unshift(i);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (; o[n] === a[n];) n++;
                    return n ? ce(o[n], a[n]) : o[n] === x ? -1 : a[n] === x ? 1 : 0
                }, p) : p
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && f(e), t = t.replace(X, "='$1']"), i.matchesSelector && m && !k[t + " "] && (!_ || !_.test(t)) && (!g || !g.test(t))) try {
                    var n = v.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return se(t, p, null, [e]).length > 0
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && f(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== p && f(e);
                var r = n.attrHandle[t.toLowerCase()],
                    s = r && S.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                return void 0 !== s ? s : i.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, se.escape = function(e) {
                return (e + "").replace(te, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    s = 0;
                if (h = !i.detectDuplicates, c = !i.sortStable && e.slice(0), e.sort(O), h) {
                    for (; t = e[s++];) t === e[s] && (r = n.push(s));
                    for (; r--;) e.splice(n[r], 1)
                }
                return c = null, e
            }, r = se.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n++];) i += r(t);
                return i
            }, (n = se.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: Y,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(K, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && W.test(i) && (t = o(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(K, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = P[e + " "];
                        return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && P(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var r = se.attr(n, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, r) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var u, c, h, f, p, d, m = s !== o ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                _ = a && t.nodeName.toLowerCase(),
                                v = !l && !a,
                                y = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (a ? f.nodeName.toLowerCase() === _ : 1 === f.nodeType) return !1;
                                        d = m = "only" === e && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? g.firstChild : g.lastChild], o && v) {
                                    for (y = (p = (u = (c = (h = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[e] || [])[0] === b && u[1]) && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || d.pop();)
                                        if (1 === f.nodeType && ++y && f === t) {
                                            c[e] = [b, p, y];
                                            break
                                        }
                                } else if (v && (y = p = (u = (c = (h = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[e] || [])[0] === b && u[1]), !1 === y)
                                    for (;
                                        (f = ++p && f && f[m] || (y = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== _ : 1 !== f.nodeType) || !++y || (v && ((c = (h = f[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[e] = [b, y]), f !== t)););
                                return (y -= r) === n || y % n == 0 && y / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, i) {
                            for (var n, s = r(e, t), o = s.length; o--;) e[n = M(e, s[o])] = !(i[n] = s[o])
                        }) : function(e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var t = [],
                            i = [],
                            n = a(e.replace(z, "$1"));
                        return n[w] ? ae(function(e, t, i, r) {
                            for (var s, o = n(e, null, r, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
                        }) : function(e, r, s) {
                            return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop()
                        }
                    }),
                    has: ae(function(e) {
                        return function(t) {
                            return se(e, t).length > 0
                        }
                    }),
                    contains: ae(function(e) {
                        return e = e.replace(K, ee),
                            function(t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                            }
                    }),
                    lang: ae(function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(K, ee).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return U.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: de(function() {
                        return [0]
                    }),
                    last: de(function(e, t) {
                        return [t - 1]
                    }),
                    eq: de(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: de(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: de(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: de(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: de(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = fe(t);

        function ge() {}

        function _e(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ve(e, t, i) {
            var n = t.dir,
                r = t.next,
                s = r || n,
                o = i && "parentNode" === s,
                a = T++;
            return t.first ? function(t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || o) return e(t, i, r);
                return !1
            } : function(t, i, l) {
                var u, c, h, f = [b, a];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || o) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || o)
                            if (c = (h = t[w] || (t[w] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((u = c[s]) && u[0] === b && u[1] === a) return f[2] = u[2];
                                if (c[s] = f, f[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function ye(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, i, n, r) {
            for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, r) || (o.push(s), u && t.push(a)));
            return o
        }

        function xe(e, t, i, n, r, s) {
            return n && !n[w] && (n = xe(n)), r && !r[w] && (r = xe(r, s)), ae(function(s, o, a, l) {
                var u, c, h, f = [],
                    p = [],
                    d = o.length,
                    m = s || function(e, t, i) {
                        for (var n = 0, r = t.length; n < r; n++) se(e, t[n], i);
                        return i
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !s && t ? m : we(m, f, e, a, l),
                    _ = i ? r || (s ? e : d || n) ? [] : o : g;
                if (i && i(g, _, a, l), n)
                    for (u = we(_, p), n(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[p[c]] = !(g[p[c]] = h));
                if (s) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = _.length; c--;)(h = _[c]) && u.push(g[c] = h);
                            r(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;)(h = _[c]) && (u = r ? M(s, h) : f[c]) > -1 && (s[u] = !(o[u] = h))
                    }
                } else _ = we(_ === o ? _.splice(d, _.length) : _), r ? r(null, o, _, l) : R.apply(o, _)
            })
        }

        function be(e) {
            for (var t, i, r, s = e.length, o = n.relative[e[0].type], a = o || n.relative[" "], l = o ? 1 : 0, c = ve(function(e) {
                    return e === t
                }, a, !0), h = ve(function(e) {
                    return M(t, e) > -1
                }, a, !0), f = [function(e, i, n) {
                    var r = !o && (n || i !== u) || ((t = i).nodeType ? c(e, i, n) : h(e, i, n));
                    return t = null, r
                }]; l < s; l++)
                if (i = n.relative[e[l].type]) f = [ve(ye(f), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < s && !n.relative[e[r].type]; r++);
                        return xe(l > 1 && ye(f), l > 1 && _e(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), i, l < r && be(e.slice(l, r)), r < s && be(e = e.slice(r)), r < s && _e(e))
                    }
                    f.push(i)
                } return ye(f)
        }
        return ge.prototype = n.filters = n.pseudos, n.setFilters = new ge, o = se.tokenize = function(e, t) {
            var i, r, s, o, a, l, u, c = C[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = n.preFilter; a;) {
                for (o in i && !(r = H.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = B.exec(a)) && (i = r.shift(), s.push({
                        value: i,
                        type: r[0].replace(z, " ")
                    }), a = a.slice(i.length)), n.filter) !(r = Y[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length : a ? se.error(e) : C(e, l).slice(0)
        }, a = se.compile = function(e, t) {
            var i, r, s, a, l, c, h = [],
                d = [],
                g = k[e + " "];
            if (!g) {
                for (t || (t = o(e)), i = t.length; i--;)(g = be(t[i]))[w] ? h.push(g) : d.push(g);
                (g = k(e, (r = d, a = (s = h).length > 0, l = r.length > 0, c = function(e, t, i, o, c) {
                    var h, d, g, _ = 0,
                        v = "0",
                        y = e && [],
                        w = [],
                        x = u,
                        T = e || l && n.find.TAG("*", c),
                        P = b += null == x ? 1 : Math.random() || .1,
                        C = T.length;
                    for (c && (u = t === p || t || c); v !== C && null != (h = T[v]); v++) {
                        if (l && h) {
                            for (d = 0, t || h.ownerDocument === p || (f(h), i = !m); g = r[d++];)
                                if (g(h, t || p, i)) {
                                    o.push(h);
                                    break
                                } c && (b = P)
                        }
                        a && ((h = !g && h) && _--, e && y.push(h))
                    }
                    if (_ += v, a && v !== _) {
                        for (d = 0; g = s[d++];) g(y, w, t, i);
                        if (e) {
                            if (_ > 0)
                                for (; v--;) y[v] || w[v] || (w[v] = A.call(o));
                            w = we(w)
                        }
                        R.apply(o, w), c && !e && w.length > 0 && _ + s.length > 1 && se.uniqueSort(o)
                    }
                    return c && (b = P, u = x), y
                }, a ? ae(c) : c))).selector = e
            }
            return g
        }, l = se.select = function(e, t, i, r) {
            var s, l, u, c, h, f = "function" == typeof e && e,
                p = !r && o(e = f.selector || e);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(u.matches[0].replace(K, ee), t) || [])[0])) return i;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (s = Y.needsContext.test(e) ? 0 : l.length; s-- && (u = l[s], !n.relative[c = u.type]);)
                    if ((h = n.find[c]) && (r = h(u.matches[0].replace(K, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
                        if (l.splice(s, 1), !(e = r.length && _e(l))) return R.apply(i, r), i;
                        break
                    }
            }
            return (f || a(e, p))(r, t, !m, i, !t || J.test(e) && me(t.parentNode) || t), i
        }, i.sortStable = w.split("").sort(O).join("") === w, i.detectDuplicates = !!h, f(), i.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), i.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(I, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), se
    }(e);
    _.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;
    var P = function(e, t, i) {
            for (var n = [], r = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && _(e).is(i)) break;
                    n.push(e)
                } return n
        },
        C = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        k = _.expr.match.needsContext;

    function O(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        $ = /^.[^:#\[\.,]*$/;

    function A(e, t, i) {
        return _.isFunction(t) ? _.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== i
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return l.call(t, e) > -1 !== i
        }) : $.test(t) ? _.filter(t, e, i) : (t = _.filter(t, e), _.grep(e, function(e) {
            return l.call(t, e) > -1 !== i && 1 === e.nodeType
        }))
    }
    _.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? _.find.matchesSelector(n, e) ? [n] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (_.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) _.find(e, r[t], i);
            return n > 1 ? _.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && k.test(e) ? _(e) : e || [], !1).length
        }
    });
    var D, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, i) {
        var r, s;
        if (!e) return this;
        if (i = i || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : R.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), S.test(r[1]) && _.isPlainObject(t))
                    for (r in t) _.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (s = n.getElementById(r[2])) && (this[0] = s, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : _.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, D = _(n);
    var E = /^(?:parents|prev(?:Until|All))/,
        M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                r = this.length,
                s = [],
                o = "string" != typeof e && _(e);
            if (!k.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && _.find.matchesSelector(i, e))) {
                            s.push(i);
                            break
                        } return this.pushStack(s.length > 1 ? _.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return P(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return P(e, "parentNode", i)
        },
        next: function(e) {
            return I(e, "nextSibling")
        },
        prev: function(e) {
            return I(e, "previousSibling")
        },
        nextAll: function(e) {
            return P(e, "nextSibling")
        },
        prevAll: function(e) {
            return P(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return P(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return P(e, "previousSibling", i)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return O(e, "iframe") ? e.contentDocument : (O(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(i, n) {
            var r = _.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = _.filter(n, r)), this.length > 1 && (M[e] || _.uniqueSort(r), E.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function L(e) {
        return e
    }

    function j(e) {
        throw e
    }

    function F(e, t, i, n) {
        var r;
        try {
            e && _.isFunction(r = e.promise) ? r.call(e).done(t).fail(i) : e && _.isFunction(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    _.Callbacks = function(e) {
        var t, i;
        e = "string" == typeof e ? (t = e, i = {}, _.each(t.match(N) || [], function(e, t) {
            i[t] = !0
        }), i) : _.extend({}, e);
        var n, r, s, o, a = [],
            l = [],
            u = -1,
            c = function() {
                for (o = o || e.once, s = n = !0; l.length; u = -1)
                    for (r = l.shift(); ++u < a.length;) !1 === a[u].apply(r[0], r[1]) && e.stopOnFalse && (u = a.length, r = !1);
                e.memory || (r = !1), n = !1, o && (a = r ? [] : "")
            },
            h = {
                add: function() {
                    return a && (r && !n && (u = a.length - 1, l.push(r)), function t(i) {
                        _.each(i, function(i, n) {
                            _.isFunction(n) ? e.unique && h.has(n) || a.push(n) : n && n.length && "string" !== _.type(n) && t(n)
                        })
                    }(arguments), r && !n && c()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var i;
                            (i = _.inArray(t, a, i)) > -1;) a.splice(i, 1), i <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? _.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = l = [], a = r = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = l = [], r || n || (a = r = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), n || c()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return h
    }, _.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _.Deferred(function(t) {
                            _.each(i, function(i, n) {
                                var r = _.isFunction(e[n[4]]) && e[n[4]];
                                s[n[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && _.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var s = 0;

                        function o(t, i, n, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < s)) {
                                            if ((e = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, _.isFunction(u) ? r ? u.call(e, o(s, i, L, r), o(s, i, j, r)) : (s++, u.call(e, o(s, i, L, r), o(s, i, j, r), o(s, i, L, i.notifyWith))) : (n !== L && (a = void 0, l = [e]), (r || i.resolveWith)(a, l))
                                        }
                                    },
                                    c = r ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= s && (n !== j && (a = void 0, l = [e]), i.rejectWith(a, l))
                                        }
                                    };
                                t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return _.Deferred(function(e) {
                            i[0][3].add(o(0, e, _.isFunction(r) ? r : L, e.notifyWith)), i[1][3].add(o(0, e, _.isFunction(t) ? t : L)), i[2][3].add(o(0, e, _.isFunction(n) ? n : j))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, r) : r
                    }
                },
                s = {};
            return _.each(i, function(e, t) {
                var o = t[2],
                    a = t[5];
                r[t[1]] = o.add, a && o.add(function() {
                    n = a
                }, i[3 - e][2].disable, i[0][2].lock), o.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = o.fireWith
            }), r.promise(s), t && t.call(s, s), s
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                r = s.call(arguments),
                o = _.Deferred(),
                a = function(e) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? s.call(arguments) : i, --t || o.resolveWith(n, r)
                    }
                };
            if (t <= 1 && (F(e, o.done(a(i)).resolve, o.reject, !t), "pending" === o.state() || _.isFunction(r[i] && r[i].then))) return o.then();
            for (; i--;) F(r[i], a(i), o.reject);
            return o.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var z = _.Deferred();

    function H() {
        n.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), _.ready()
    }
    _.fn.ready = function(e) {
        return z.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || z.resolveWith(n, [_]))
        }
    }), _.ready.then = z.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(_.ready) : (n.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
    var B = function(e, t, i, n, r, s, o) {
            var a = 0,
                l = e.length,
                u = null == i;
            if ("object" === _.type(i))
                for (a in r = !0, i) B(e, t, a, i[a], !0, s, o);
            else if (void 0 !== n && (r = !0, _.isFunction(n) || (o = !0), u && (o ? (t.call(e, n), t = null) : (u = t, t = function(e, t, i) {
                    return u.call(_(e), i)
                })), t))
                for (; a < l; a++) t(e[a], i, o ? n : n.call(e[a], a, t(e[a], i)));
            return r ? e : u ? t.call(e) : l ? t(e[0], i) : s
        },
        X = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function W() {
        this.expando = _.expando + W.uid++
    }
    W.uid = 1, W.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[_.camelCase(t)] = i;
            else
                for (n in t) r[_.camelCase(n)] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][_.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(_.camelCase) : t = (t = _.camelCase(t)) in n ? [t] : t.match(N) || [], i = t.length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || _.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var V = new W,
        Y = new W,
        U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Q(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : U.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Y.set(e, t, i)
            } else i = void 0;
        return i
    }
    _.extend({
        hasData: function(e) {
            return Y.hasData(e) || V.hasData(e)
        },
        data: function(e, t, i) {
            return Y.access(e, t, i)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, i) {
            return V.access(e, t, i)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var i, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (r = Y.get(s), 1 === s.nodeType && !V.get(s, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && (0 === (n = o[i].name).indexOf("data-") && (n = _.camelCase(n.slice(5)), Q(s, n, r[n])));
                    V.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Y.set(this, e)
            }) : B(this, function(t) {
                var i;
                if (s && void 0 === t) {
                    if (void 0 !== (i = Y.get(s, e))) return i;
                    if (void 0 !== (i = Q(s, e))) return i
                } else this.each(function() {
                    Y.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = V.get(e, t), i && (!n || Array.isArray(i) ? n = V.access(e, t, _.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = _.queue(e, t),
                n = i.length,
                r = i.shift(),
                s = _._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, function() {
                _.dequeue(e, t)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return V.get(e, i) || V.access(e, i, {
                empty: _.Callbacks("once memory").add(function() {
                    V.remove(e, [t + "queue", i])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                r = _.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(i = V.get(s[o], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        J = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        K = ["Top", "Right", "Bottom", "Left"],
        ee = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
        },
        te = function(e, t, i, n) {
            var r, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            for (s in r = i.apply(e, n || []), t) e.style[s] = o[s];
            return r
        };

    function ie(e, t, i, n) {
        var r, s = 1,
            o = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = a(),
            u = i && i[3] || (_.cssNumber[t] ? "" : "px"),
            c = (_.cssNumber[t] || "px" !== u && +l) && J.exec(_.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], i = i || [], c = +l || 1;
            do {
                c /= s = s || ".5", _.style(e, t, c + u)
            } while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = r)), r
    }
    var ne = {};

    function re(e, t) {
        for (var i, n, r = [], s = 0, o = e.length; s < o; s++)(n = e[s]).style && (i = n.style.display, t ? ("none" === i && (r[s] = V.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && ee(n) && (r[s] = (l = void 0, u = void 0, void 0, h = void 0, u = (a = n).ownerDocument, c = a.nodeName, (h = ne[c]) || (l = u.body.appendChild(u.createElement(c)), h = _.css(l, "display"), l.parentNode.removeChild(l), "none" === h && (h = "block"), ne[c] = h, h)))) : "none" !== i && (r[s] = "none", V.set(n, "display", i)));
        var a, l, u, c, h;
        for (s = 0; s < o; s++) null != r[s] && (e[s].style.display = r[s]);
        return e
    }
    _.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var se = /^(?:checkbox|radio)$/i,
        oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ue(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? _.merge([e], i) : i
    }

    function ce(e, t) {
        for (var i = 0, n = e.length; i < n; i++) V.set(e[i], "globalEval", !t || V.get(t[i], "globalEval"))
    }
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
    var he, fe, pe = /<|&#?\w+;/;

    function de(e, t, i, n, r) {
        for (var s, o, a, l, u, c, h = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === _.type(s)) _.merge(f, s.nodeType ? [s] : s);
                else if (pe.test(s)) {
            for (o = o || h.appendChild(t.createElement("div")), a = (oe.exec(s) || ["", ""])[1].toLowerCase(), l = le[a] || le._default, o.innerHTML = l[1] + _.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            _.merge(f, o.childNodes), (o = h.firstChild).textContent = ""
        } else f.push(t.createTextNode(s));
        for (h.textContent = "", p = 0; s = f[p++];)
            if (n && _.inArray(s, n) > -1) r && r.push(s);
            else if (u = _.contains(s.ownerDocument, s), o = ue(h.appendChild(s), "script"), u && ce(o), i)
            for (c = 0; s = o[c++];) ae.test(s.type || "") && i.push(s);
        return h
    }
    he = n.createDocumentFragment().appendChild(n.createElement("div")), (fe = n.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), he.appendChild(fe), d.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var me = n.documentElement,
        ge = /^key/,
        _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ve = /^([^.]*)(?:\.(.+)|)/;

    function ye() {
        return !0
    }

    function we() {
        return !1
    }

    function xe() {
        try {
            return n.activeElement
        } catch (e) {}
    }

    function be(e, t, i, n, r, s) {
        var o, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) be(e, a, i, n, t[a], s);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = we;
        else if (!r) return e;
        return 1 === s && (o = r, (r = function(e) {
            return _().off(e), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, r, n, i)
        })
    }
    _.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var s, o, a, l, u, c, h, f, p, d, m, g = V.get(e);
            if (g)
                for (i.handler && (i = (s = i).handler, r = s.selector), r && _.find.matchesSelector(me, r), i.guid || (i.guid = _.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
                        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(N) || [""]).length; u--;) p = m = (a = ve.exec(t[u]) || [])[1], d = (a[2] || "").split(".").sort(), p && (h = _.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = _.event.special[p] || {}, c = _.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && _.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, s), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, n, d, o) || e.addEventListener && e.addEventListener(p, o)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), _.event.global[p] = !0)
        },
        remove: function(e, t, i, n, r) {
            var s, o, a, l, u, c, h, f, p, d, m, g = V.hasData(e) && V.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(N) || [""]).length; u--;)
                    if (p = m = (a = ve.exec(t[u]) || [])[1], d = (a[2] || "").split(".").sort(), p) {
                        for (h = _.event.special[p] || {}, f = l[p = (n ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) c = f[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (f.splice(s, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(e, c));
                        o && !f.length && (h.teardown && !1 !== h.teardown.call(e, d, g.handle) || _.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) _.event.remove(e, p + t[u], i, n, !0);
                _.isEmptyObject(l) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, r, s, o, a = _.event.fix(e),
                l = new Array(arguments.length),
                u = (V.get(this, "events") || {})[a.type] || [],
                c = _.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (o = _.event.handlers.call(this, a, u), t = 0;
                    (r = o[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((_.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, s, o, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = t[i]).selector + " "] && (o[r] = n.needsContext ? _(r, this).index(u) > -1 : _.find(r, this, null, [u]).length), o[r] && s.push(n);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: _.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xe() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xe() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && O(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return O(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, _.Event = function(e, t) {
        return this instanceof _.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(e, t)
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || _.contains(this, n)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), _.fn.extend({
        on: function(e, t, i, n) {
            return be(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return be(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, _(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = we), this.each(function() {
                _.event.remove(this, e, i, t)
            })
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /^true\/(.*)/,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Se(e, t) {
        return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && _(">tbody", e)[0] || e
    }

    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ae(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var i, n, r, s, o, a, l, u;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (s = V.access(e), o = V.set(t, s), u = s.events))
                for (r in delete o.handle, o.events = {}, u)
                    for (i = 0, n = u[r].length; i < n; i++) _.event.add(t, r, u[r][i]);
            Y.hasData(e) && (a = Y.access(e), l = _.extend({}, a), Y.set(t, l))
        }
    }

    function Re(e, t, i, n) {
        t = o.apply([], t);
        var r, s, a, l, u, c, h = 0,
            f = e.length,
            p = f - 1,
            g = t[0],
            v = _.isFunction(g);
        if (v || f > 1 && "string" == typeof g && !d.checkClone && Ce.test(g)) return e.each(function(r) {
            var s = e.eq(r);
            v && (t[0] = g.call(this, r, s.html())), Re(s, t, i, n)
        });
        if (f && (s = (r = de(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
            for (l = (a = _.map(ue(r, "script"), $e)).length; h < f; h++) u = r, h !== p && (u = _.clone(u, !0, !0), l && _.merge(a, ue(u, "script"))), i.call(e[h], u, h);
            if (l)
                for (c = a[a.length - 1].ownerDocument, _.map(a, Ae), h = 0; h < l; h++) u = a[h], ae.test(u.type || "") && !V.access(u, "globalEval") && _.contains(c, u) && (u.src ? _._evalUrl && _._evalUrl(u.src) : m(u.textContent.replace(Oe, ""), c))
        }
        return e
    }

    function Ee(e, t, i) {
        for (var n, r = t ? _.filter(t, e) : e, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || _.cleanData(ue(n)), n.parentNode && (i && _.contains(n.ownerDocument, n) && ce(ue(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e.replace(Te, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, s, o, a, l, u, c = e.cloneNode(!0),
                h = _.contains(e.ownerDocument, e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (o = ue(c), n = 0, r = (s = ue(e)).length; n < r; n++) a = s[n], l = o[n], void 0, "input" === (u = l.nodeName.toLowerCase()) && se.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (s = s || ue(e), o = o || ue(c), n = 0, r = s.length; n < r; n++) De(s[n], o[n]);
                else De(e, c);
            return (o = ue(c, "script")).length > 0 && ce(o, !h && ue(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, i, n, r = _.event.special, s = 0; void 0 !== (i = e[s]); s++)
                if (X(i)) {
                    if (t = i[V.expando]) {
                        if (t.events)
                            for (n in t.events) r[n] ? _.event.remove(i, n) : _.removeEvent(i, n, t.handle);
                        i[V.expando] = void 0
                    }
                    i[Y.expando] && (i[Y.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return Ee(this, e, !0)
        },
        remove: function(e) {
            return Ee(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Se(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Se(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(ue(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !le[(oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (_.cleanData(ue(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var i = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(ue(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var i, n = [], r = _(e), s = r.length - 1, o = 0; o <= s; o++) i = o === s ? this : this.clone(!0), _(r[o])[t](i), a.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Me = /^margin/,
        Ie = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        Ne = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(document.getElementById(t))
        };

    function Le(e, t, i) {
        var n, r, s, o, a = e.style;
        return (i = i || Ne(e)) && ("" !== (o = i.getPropertyValue(t) || i[t]) || _.contains(e.ownerDocument, e) || (o = _.style(e, t)), !d.pixelMarginRight() && Ie.test(o) && Me.test(t) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function je(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", me.appendChild(a);
                var t = e.getComputedStyle(document.getElementById(l));
                i = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, l.style.marginRight = "50%", s = "4px" === t.marginRight, me.removeChild(a), l = null
            }
        }
        var i, r, s, o, a = n.createElement("div"),
            l = n.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), _.extend(d, {
            pixelPosition: function() {
                return t(), i
            },
            boxSizingReliable: function() {
                return t(), r
            },
            pixelMarginRight: function() {
                return t(), s
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var Fe = /^(none|table(?!-c[ea]).+)/,
        qe = /^--/,
        ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        He = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Be = ["Webkit", "Moz", "ms"],
        Xe = n.createElement("div").style;

    function We(e) {
        var t = _.cssProps[e];
        return t || (t = _.cssProps[e] = function(e) {
            if (e in Xe) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = Be.length; i--;)
                if ((e = Be[i] + t) in Xe) return e
        }(e) || e), t
    }

    function Ve(e, t, i) {
        var n = J.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ye(e, t, i, n, r) {
        var s, o = 0;
        for (s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2) "margin" === i && (o += _.css(e, i + K[s], !0, r)), n ? ("content" === i && (o -= _.css(e, "padding" + K[s], !0, r)), "margin" !== i && (o -= _.css(e, "border" + K[s] + "Width", !0, r))) : (o += _.css(e, "padding" + K[s], !0, r), "padding" !== i && (o += _.css(e, "border" + K[s] + "Width", !0, r)));
        return o
    }

    function Ue(e, t, i) {
        var n, r = Ne(e),
            s = Le(e, t, r),
            o = "border-box" === _.css(e, "boxSizing", !1, r);
        return Ie.test(s) ? s : (n = o && (d.boxSizingReliable() || s === e.style[t]), "auto" === s && (s = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = parseFloat(s) || 0) + Ye(e, t, i || (o ? "border" : "content"), n, r) + "px")
    }

    function Ge(e, t, i, n, r) {
        return new Ge.prototype.init(e, t, i, n, r)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Le(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, a = _.camelCase(t),
                    l = qe.test(t),
                    u = e.style;
                return l || (t = We(a)), o = _.cssHooks[t] || _.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(e, !1, n)) ? r : u[t] : ("string" === (s = typeof i) && (r = J.exec(i)) && r[1] && (i = ie(e, t, r), s = "number"), void(null != i && i == i && ("number" === s && (i += r && r[3] || (_.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (i = o.set(e, i, n)) || (l ? u.setProperty(t, i) : u[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var r, s, o, a = _.camelCase(t);
            return qe.test(t) || (t = We(a)), (o = _.cssHooks[t] || _.cssHooks[a]) && "get" in o && (r = o.get(e, !0, i)), void 0 === r && (r = Le(e, t, n)), "normal" === r && t in He && (r = He[t]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) return !Fe.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ue(e, t, n) : te(e, ze, function() {
                    return Ue(e, t, n)
                })
            },
            set: function(e, i, n) {
                var r, s = n && Ne(e),
                    o = n && Ye(e, t, n, "border-box" === _.css(e, "boxSizing", !1, s), s);
                return o && (r = J.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = _.css(e, t)), Ve(0, i, o)
            }
        }
    }), _.cssHooks.marginLeft = je(d.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Le(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + K[n] + t] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, Me.test(e) || (_.cssHooks[e + t].set = Ve)
    }), _.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, i) {
                var n, r, s = {},
                    o = 0;
                if (Array.isArray(t)) {
                    for (n = Ne(e), r = t.length; o < r; o++) s[t[o]] = _.css(e, t[o], !1, n);
                    return s
                }
                return void 0 !== i ? _.style(e, t, i) : _.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), _.Tween = Ge, Ge.prototype = {
        constructor: Ge,
        init: function(e, t, i, n, r, s) {
            this.elem = e, this.prop = i, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (_.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ge.propHooks._default.set(this), this
        }
    }, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = Ge.prototype.init, _.fx.step = {};
    var Qe, Ze, Je, Ke, et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;

    function it() {
        Ze && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, _.fx.interval), _.fx.tick())
    }

    function nt() {
        return e.setTimeout(function() {
            Qe = void 0
        }), Qe = _.now()
    }

    function rt(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = K[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function st(e, t, i) {
        for (var n, r = (ot.tweeners[t] || []).concat(ot.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, t, e)) return n
    }

    function ot(e, t, i) {
        var n, r, s = 0,
            o = ot.prefilters.length,
            a = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Qe || nt(), i = Math.max(0, u.startTime + u.duration - t), n = 1 - (i / u.duration || 0), s = 0, o = u.tweens.length; s < o; s++) u.tweens[s].run(n);
                return a.notifyWith(e, [u, n, i]), n < 1 && o ? i : (o || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Qe || nt(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = _.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) u.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var i, n, r, s, o;
                for (i in e)
                    if (r = t[n = _.camelCase(i)], s = e[i], Array.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (o = _.cssHooks[n]) && "expand" in o)
                        for (i in s = o.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = r);
                    else t[n] = r
            }(c, u.opts.specialEasing); s < o; s++)
            if (n = ot.prefilters[s].call(u, e, c, u.opts)) return _.isFunction(n.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = _.proxy(n.stop, n)), n;
        return _.map(c, st, u), _.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    _.Animation = _.extend(ot, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return ie(i.elem, e, J.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            _.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(N);
            for (var i, n = 0, r = e.length; n < r; n++) i = e[n], ot.tweeners[i] = ot.tweeners[i] || [], ot.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, r, s, o, a, l, u, c, h = "width" in t || "height" in t,
                f = this,
                p = {},
                d = e.style,
                m = e.nodeType && ee(e),
                g = V.get(e, "fxshow");
            for (n in i.queue || (null == (o = _._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || a()
                }), o.unqueued++, f.always(function() {
                    f.always(function() {
                        o.unqueued--, _.queue(e, "fx").length || o.empty.fire()
                    })
                })), t)
                if (r = t[n], et.test(r)) {
                    if (delete t[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    p[n] = g && g[n] || _.style(e, n)
                } if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(p))
                for (n in h && 1 === e.nodeType && (i.overflow = [d.overflow, d.overflowX, d.overflowY], null == (u = g && g.display) && (u = V.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (re([e], !0), u = e.style.display || u, c = _.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (f.done(function() {
                        d.display = u
                    }), null == u && (c = d.display, u = "none" === c ? "" : c)), d.display = "inline-block")), i.overflow && (d.overflow = "hidden", f.always(function() {
                        d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = V.access(e, "fxshow", {
                    display: u
                }), s && (g.hidden = !m), m && re([e], !0), f.done(function() {
                    for (n in m || re([e]), V.remove(e, "fxshow"), p) _.style(e, n, p[n])
                })), l = st(m ? g[n] : 0, n, f), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ot.prefilters.unshift(e) : ot.prefilters.push(e)
        }
    }), _.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? _.extend({}, e) : {
            complete: i || !i && t || _.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !_.isFunction(t) && t
        };
        return _.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in _.fx.speeds ? n.duration = _.fx.speeds[n.duration] : n.duration = _.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            _.isFunction(n.old) && n.old.call(this), n.queue && _.dequeue(this, n.queue)
        }, n
    }, _.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var r = _.isEmptyObject(e),
                s = _.speed(t, i, n),
                o = function() {
                    var t = ot(this, _.extend({}, e), s);
                    (r || V.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    s = _.timers,
                    o = V.get(this);
                if (r) o[r] && o[r].stop && n(o[r]);
                else
                    for (r in o) o[r] && o[r].stop && tt.test(r) && n(o[r]);
                for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(i), t = !1, s.splice(r, 1));
                !t && i || _.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, i = V.get(this),
                    n = i[e + "queue"],
                    r = i[e + "queueHooks"],
                    s = _.timers,
                    o = n ? n.length : 0;
                for (i.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(e, t) {
        var i = _.fn[t];
        _.fn[t] = function(e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(rt(t, !0), e, n, r)
        }
    }), _.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        _.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), _.timers = [], _.fx.tick = function() {
        var e, t = 0,
            i = _.timers;
        for (Qe = _.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || _.fx.stop(), Qe = void 0
    }, _.fx.timer = function(e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        Ze || (Ze = !0, it())
    }, _.fx.stop = function() {
        Ze = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(t, i) {
        return t = _.fx && _.fx.speeds[t] || t, i = i || "fx", this.queue(i, function(i, n) {
            var r = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(r)
            }
        })
    }, Je = n.createElement("input"), Ke = n.createElement("select").appendChild(n.createElement("option")), Je.type = "checkbox", d.checkOn = "" !== Je.value, d.optSelected = Ke.selected, (Je = n.createElement("input")).value = "t", Je.type = "radio", d.radioValue = "t" === Je.value;
    var at, lt = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return B(this, _.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, i) {
            var n, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? _.prop(e, t, i) : (1 === s && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? at : void 0)), void 0 !== i ? null === i ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = _.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && O(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                r = t && t.match(N);
            if (r && 1 === e.nodeType)
                for (; i = r[n++];) e.removeAttribute(i)
        }
    }), at = {
        set: function(e, t, i) {
            return !1 === t ? _.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = lt[t] || _.find.attr;
        lt[t] = function(e, t, n) {
            var r, s, o = t.toLowerCase();
            return n || (s = lt[o], lt[o] = r, r = null != i(e, t, n) ? o : null, lt[o] = s), r
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(N) || []).join(" ")
    }

    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    _.fn.extend({
        prop: function(e, t) {
            return B(this, _.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, i) {
            var n, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), d.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(e) {
            var t, i, n, r, s, o, a, l = 0;
            if (_.isFunction(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, ft(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(N) || []; i = this[l++];)
                    if (r = ft(i), n = 1 === i.nodeType && " " + ht(r) + " ") {
                        for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (a = ht(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, i, n, r, s, o, a, l = 0;
            if (_.isFunction(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, ft(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(N) || []; i = this[l++];)
                    if (r = ft(i), n = 1 === i.nodeType && " " + ht(r) + " ") {
                        for (o = 0; s = t[o++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        r !== (a = ht(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : _.isFunction(e) ? this.each(function(i) {
                _(this).toggleClass(e.call(this, i, ft(this), t), t)
            }) : this.each(function() {
                var t, n, r, s;
                if ("string" === i)
                    for (n = 0, r = _(this), s = e.match(N) || []; t = s[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = ft(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + ht(ft(i)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = _.isFunction(e), this.each(function(i) {
                var r;
                1 === this.nodeType && (null == (r = n ? e.call(this, i, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(pt, "") : null == i ? "" : i : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : ht(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, r = e.options,
                        s = e.selectedIndex,
                        o = "select-one" === e.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (n = s < 0 ? l : o ? s : 0; n < l; n++)
                        if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !O(i.parentNode, "optgroup"))) {
                            if (t = _(i).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, s = _.makeArray(t), o = r.length; o--;)((n = r[o]).selected = _.inArray(_.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
            }
        }, d.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dt = /^(?:focusinfocus|focusoutblur)$/;
    _.extend(_.event, {
        trigger: function(t, i, r, s) {
            var o, a, l, u, c, f, p, d = [r || n],
                m = h.call(t, "type") ? t.type : t,
                g = h.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !dt.test(m + _.event.triggered) && (m.indexOf(".") > -1 && (m = (g = m.split(".")).shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[_.expando] ? t : new _.Event(m, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), i = null == i ? [t] : _.makeArray(i, [t]), p = _.event.special[m] || {}, s || !p.trigger || !1 !== p.trigger.apply(r, i))) {
                if (!s && !p.noBubble && !_.isWindow(r)) {
                    for (u = p.delegateType || m, dt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) d.push(a), l = a;
                    l === (r.ownerDocument || n) && d.push(l.defaultView || l.parentWindow || e)
                }
                for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : p.bindType || m, (f = (V.get(a, "events") || {})[t.type] && V.get(a, "handle")) && f.apply(a, i), (f = c && a[c]) && f.apply && X(a) && (t.result = f.apply(a, i), !1 === t.result && t.preventDefault());
                return t.type = m, s || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), i) || !X(r) || c && _.isFunction(r[m]) && !_.isWindow(r) && ((l = r[c]) && (r[c] = null), _.event.triggered = m, r[m](), _.event.triggered = void 0, l && (r[c] = l)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = _.extend(new _.Event, i, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(n, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return _.event.trigger(e, t, i, !0)
        }
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), d.focusin = "onfocusin" in e, d.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = V.access(n, t);
                r || n.addEventListener(e, i, !0), V.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = V.access(n, t) - 1;
                r ? V.access(n, t, r) : (n.removeEventListener(e, i, !0), V.remove(n, t))
            }
        }
    });
    var mt = e.location,
        gt = _.now(),
        _t = /\?/;
    _.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), i
    };
    var vt = /\[\]$/,
        yt = /\r?\n/g,
        wt = /^(?:submit|button|image|reset|file)$/i,
        xt = /^(?:input|select|textarea|keygen)/i;

    function bt(e, t, i, n) {
        var r;
        if (Array.isArray(t)) _.each(t, function(t, r) {
            i || vt.test(e) ? n(e, r) : bt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== _.type(t)) n(e, t);
        else
            for (r in t) bt(e + "[" + r + "]", t[r], i, n)
    }
    _.param = function(e, t) {
        var i, n = [],
            r = function(e, t) {
                var i = _.isFunction(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) bt(i, e[i], t, r);
        return n.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && xt.test(this.nodeName) && !wt.test(e) && (this.checked || !se.test(e))
            }).map(function(e, t) {
                var i = _(this).val();
                return null == i ? null : Array.isArray(i) ? _.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(yt, "\r\n")
                }
            }).get()
        }
    });
    var Tt = /%20/g,
        Pt = /#.*$/,
        Ct = /([?&])_=[^&]*/,
        kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        $t = {},
        At = {},
        Dt = "*/".concat("*"),
        Rt = n.createElement("a");

    function Et(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                s = t.toLowerCase().match(N) || [];
            if (_.isFunction(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function Mt(e, t, i, n) {
        var r = {},
            s = e === At;

        function o(a) {
            var l;
            return r[a] = !0, _.each(e[a] || [], function(e, a) {
                var u = a(t, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function It(e, t) {
        var i, n, r = _.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && _.extend(!0, e, n), e
    }
    Rt.href = mt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? It(It(e, _.ajaxSettings), t) : It(_.ajaxSettings, e)
        },
        ajaxPrefilter: Et($t),
        ajaxTransport: Et(At),
        ajax: function(t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var r, s, o, a, l, u, c, h, f, p, d = _.ajaxSetup({}, i),
                m = d.context || d,
                g = d.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                w = d.statusCode || {},
                x = {},
                b = {},
                T = "canceled",
                P = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = kt.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) P.always(e[P.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(P), d.url = ((t || d.url || mt.href) + "").replace(St, mt.protocol + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(N) || [""], null == d.crossDomain) {
                u = n.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = _.param(d.data, d.traditional)), Mt($t, d, i, P), c) return P;
            for (f in (h = _.event && d.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ot.test(d.type), s = d.url.replace(Pt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Tt, "+")) : (p = d.url.slice(s.length), d.data && (s += (_t.test(s) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (s = s.replace(Ct, "$1"), p = (_t.test(s) ? "&" : "?") + "_=" + gt++ + p), d.url = s + p), d.ifModified && (_.lastModified[s] && P.setRequestHeader("If-Modified-Since", _.lastModified[s]), _.etag[s] && P.setRequestHeader("If-None-Match", _.etag[s])), (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && P.setRequestHeader("Content-Type", d.contentType), P.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : d.accepts["*"]), d.headers) P.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(m, P, d) || c)) return P.abort();
            if (T = "abort", y.add(d.complete), P.done(d.success), P.fail(d.error), r = Mt(At, d, i, P)) {
                if (P.readyState = 1, h && g.trigger("ajaxSend", [P, d]), c) return P;
                d.async && d.timeout > 0 && (l = e.setTimeout(function() {
                    P.abort("timeout")
                }, d.timeout));
                try {
                    c = !1, r.send(x, C)
                } catch (e) {
                    if (c) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, i, n, a) {
                var u, f, p, x, b, T = i;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, o = a || "", P.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, n && (x = function(e, t, i) {
                    for (var n, r, s, o, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            } if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(d, P, n)), x = function(e, t, i, n) {
                    var r, s, o, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                    for (s = c.shift(); s;)
                        if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== o)
                            if (o && e.throws) t = o(t);
                            else try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, x, P, u), u ? (d.ifModified && ((b = P.getResponseHeader("Last-Modified")) && (_.lastModified[s] = b), (b = P.getResponseHeader("etag")) && (_.etag[s] = b)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, f = x.data, u = !(p = x.error))) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), P.status = t, P.statusText = (i || T) + "", u ? v.resolveWith(m, [f, T, P]) : v.rejectWith(m, [P, T, p]), P.statusCode(w), w = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [P, d, u ? f : p]), y.fireWith(m, [P, T]), h && (g.trigger("ajaxComplete", [P, d]), --_.active || _.event.trigger("ajaxStop")))
            }
            return P
        },
        getJSON: function(e, t, i) {
            return _.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, i, n, r) {
            return _.isFunction(i) && (r = r || n, n = i, i = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function(e) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (_.isFunction(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return _.isFunction(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = _.isFunction(e);
            return this.each(function(i) {
                _(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Nt = {
            0: 200,
            1223: 204
        },
        Lt = _.ajaxSettings.xhr();
    d.cors = !!Lt && "withCredentials" in Lt, d.ajax = Lt = !!Lt, _.ajaxTransport(function(t) {
        var i, n;
        if (d.cors || Lt && !t.crossDomain) return {
            send: function(r, s) {
                var o, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) a[o] = t.xhrFields[o];
                for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(o, r[o]);
                i = function(e) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Nt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        var t, i;
        if (e.crossDomain) return {
            send: function(r, s) {
                t = _("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function(e) {
                    t.remove(), i = null, e && s("error" === e.type ? 404 : 200, e.type)
                }), n.head.appendChild(t[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var jt, Ft = [],
        qt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || _.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, s, o, a = !1 !== t.jsonp && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = _.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(qt, "$1" + r) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return o || _.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[r], e[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === s ? _(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = i.jsonpCallback, Ft.push(r)), o && _.isFunction(s) && s(o[0]), o = s = void 0
        }), "script"
    }), d.createHTMLDocument = ((jt = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === jt.childNodes.length), _.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (d.createHTMLDocument ? ((r = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(r)) : t = n), o = !i && [], (s = S.exec(e)) ? [t.createElement(s[1])] : (s = de([e], t, o), o && o.length && _(o).remove(), _.merge([], s.childNodes)));
        var r, s, o
    }, _.fn.load = function(e, t, i) {
        var n, r, s, o = this,
            a = e.indexOf(" ");
        return a > -1 && (n = ht(e.slice(a)), e = e.slice(0, a)), _.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, o.html(n ? _("<div>").append(_.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            o.each(function() {
                i.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, i) {
            var n, r, s, o, a, l, u = _.css(e, "position"),
                c = _(e),
                h = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), s = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (o = (n = c.position()).top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), _.isFunction(t) && (t = t.call(e, i, _.extend({}, a))), null != t.top && (h.top = t.top - a.top + o), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, i, n, r, s = this[0];
            return s ? s.getClientRects().length ? (n = s.getBoundingClientRect(), i = (t = s.ownerDocument).documentElement, r = t.defaultView, {
                top: n.top + r.pageYOffset - i.clientTop,
                left: n.left + r.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), O(e[0], "html") || (n = e.offset()), n = {
                    top: n.top + _.css(e[0], "borderTopWidth", !0),
                    left: n.left + _.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - n.top - _.css(i, "marginTop", !0),
                    left: t.left - n.left - _.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || me
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        _.fn[e] = function(n) {
            return B(this, function(e, n, r) {
                var s;
                return _.isWindow(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r ? s ? s[t] : e[n] : void(s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : e[n] = r)
            }, e, n, arguments.length)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = je(d.pixelPosition, function(e, i) {
            if (i) return i = Le(e, t), Ie.test(i) ? _(e).position()[t] + "px" : i
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            _.fn[n] = function(r, s) {
                var o = arguments.length && (i || "boolean" != typeof r),
                    a = i || (!0 === r || !0 === s ? "margin" : "border");
                return B(this, function(t, i, r) {
                    var s;
                    return _.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? _.css(t, i, a) : _.style(t, i, r, a)
                }, t, o ? r : void 0, o)
            }
        })
    }), _.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = O, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var zt = e.jQuery,
        Ht = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = Ht), t && e.jQuery === _ && (e.jQuery = zt), _
    }, t || (e.jQuery = e.$ = _), _
}), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e, t, i, n, r, s, o, a, l, u, c, h, f, p, d, m, g;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
            var n = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                r = function(e, t, n) {
                    i.call(this, e, t, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                },
                s = 1e-10,
                o = i._internals,
                a = o.isSelector,
                l = o.isArray,
                u = r.prototype = i.to({}, .1, {}),
                c = [];
            r.version = "1.17.0", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
            }, u.updateTo = function(e, t) {
                var n, r = this.ratio,
                    s = this.vars.immediateRender || e.immediateRender;
                for (n in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[n] = e[n];
                if (this._initted || s)
                    if (t) this._initted = !1, s && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var o = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._time > 0 || s) {
                    this._initted = !1, this._init();
                    for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
                }
                return this
            }, u.render = function(e, t, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, r, a, l, u, c, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._time,
                    m = this._totalTime,
                    g = this._cycle,
                    _ = this._duration,
                    v = this._rawPrevTime;
                if (e >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > v || v === s) && v !== e && (i = !0, v > s && (r = "onReverseComplete")), this._rawPrevTime = f = !t || e || v === e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === _ && v > 0) && (r = "onReverseComplete", n = this._reversed), 0 > e && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !t || e || v === e ? e : s)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : 0 > this._time && (this._time = 0)), this._easeType ? (u = this._time / _, (1 === (c = this._easeType) || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === (h = this._easePower) ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > this._time / _ ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / _)), d !== this._time || i || g !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, o.lazyTweens.push(this), void(this._lazy = [e, t]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && e >= 0 && (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (t || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== g && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === _ && this._rawPrevTime === s && f !== s && (this._rawPrevTime = 0))
                } else m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, r.to = function(e, t, i) {
                return new r(e, t, i)
            }, r.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(e, t, i)
            }, r.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(e, t, n)
            }, r.staggerTo = r.allTo = function(e, t, s, o, u, h, f) {
                o = o || 0;
                var p, d, m, g, _ = s.delay || 0,
                    v = [],
                    y = function() {
                        s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(f || s.callbackScope || this, h || c)
                    };
                for (l(e) || ("string" == typeof e && (e = i.selector(e) || e), a(e) && (e = n(e))), e = e || [], 0 > o && ((e = n(e)).reverse(), o *= -1), p = e.length - 1, m = 0; p >= m; m++) {
                    for (g in d = {}, s) d[g] = s[g];
                    d.delay = _, m === p && u && (d.onComplete = y), v[m] = new r(e[m], t, d), _ += o
                }
                return v
            }, r.staggerFrom = r.allFrom = function(e, t, i, n, s, o, a) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(e, t, i, n, s, o, a)
            }, r.staggerFromTo = r.allFromTo = function(e, t, i, n, s, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(e, t, n, s, o, a, l)
            }, r.delayedCall = function(e, t, i, n, s) {
                return new r(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, r.set = function(e, t) {
                return new r(e, 0, t)
            }, r.isTweening = function(e) {
                return i.getTweensOf(e, !0).length > 0
            };
            var h = function(e, t) {
                    for (var n = [], r = 0, s = e._first; s;) s instanceof i ? n[r++] = s : (t && (n[r++] = s), r = (n = n.concat(h(s, t))).length), s = s._next;
                    return n
                },
                f = r.getAllTweens = function(t) {
                    return h(e._rootTimeline, t).concat(h(e._rootFramesTimeline, t))
                };
            r.killAll = function(e, i, n, r) {
                null == i && (i = !0), null == n && (n = !0);
                var s, o, a, l = f(0 != r),
                    u = l.length,
                    c = i && n && r;
                for (a = 0; u > a; a++) o = l[a], (c || o instanceof t || (s = o.target === o.vars.onComplete) && n || i && !s) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, r.killChildTweensOf = function(e, t) {
                if (null != e) {
                    var s, u, c, h, f, p = o.tweenLookup;
                    if ("string" == typeof e && (e = i.selector(e) || e), a(e) && (e = n(e)), l(e))
                        for (h = e.length; --h > -1;) r.killChildTweensOf(e[h], t);
                    else {
                        for (c in s = [], p)
                            for (u = p[c].target.parentNode; u;) u === e && (s = s.concat(p[c].tweens)), u = u.parentNode;
                        for (f = s.length, h = 0; f > h; h++) t && s[h].totalTime(s[h].totalDuration()), s[h]._enabled(!1, !1)
                    }
                }
            };
            var p = function(e, i, n, r) {
                i = !1 !== i, n = !1 !== n;
                for (var s, o, a = f(r = !1 !== r), l = i && n && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof t || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(e)
            };
            return r.pauseAll = function(e, t, i) {
                p(!0, e, t, i)
            }, r.resumeAll = function(e, t, i) {
                p(!1, e, t, i)
            }, r.globalTimeScale = function(t) {
                var n = e._rootTimeline,
                    r = i.ticker.time;
                return arguments.length ? (t = t || s, n._startTime = r - (r - n._startTime) * n._timeScale / t, n = e._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / t, n._timeScale = e._rootTimeline._timeScale = t, t) : n._timeScale
            }, u.progress = function(e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
            }, u.totalProgress = function(e) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
            }, u.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, u.duration = function(t) {
                return arguments.length ? e.prototype.duration.call(this, t) : this._duration
            }, u.totalDuration = function(e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, u.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, u.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, u.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, r
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
            var n = function(e) {
                    t.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, n, r = this.vars;
                    for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                    l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                },
                r = 1e-10,
                s = i._internals,
                o = n._internals = {},
                a = s.isSelector,
                l = s.isArray,
                u = s.lazyTweens,
                c = s.lazyRender,
                h = [],
                f = _gsScope._gsDefine.globals,
                p = function(e) {
                    var t, i = {};
                    for (t in e) i[t] = e[t];
                    return i
                },
                d = o.pauseCallback = function(e, t, i, n) {
                    var s, o = e._timeline,
                        a = o._totalTime,
                        l = e._startTime,
                        u = 0 > e._rawPrevTime || 0 === e._rawPrevTime && o._reversed,
                        c = u ? 0 : r,
                        f = u ? r : 0;
                    if (t || !this._forcingPlayhead) {
                        for (o.pause(l), s = e._prev; s && s._startTime === l;) s._rawPrevTime = f, s = s._prev;
                        for (s = e._next; s && s._startTime === l;) s._rawPrevTime = c, s = s._next;
                        t && t.apply(n || o.vars.callbackScope || o, i || h), (this._forcingPlayhead || !o._paused) && o.seek(a)
                    }
                },
                m = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                g = n.prototype = new t;
            return n.version = "1.17.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(e, t, n, r) {
                var s = n.repeat && f.TweenMax || i;
                return t ? this.add(new s(e, t, n), r) : this.set(e, n, r)
            }, g.from = function(e, t, n, r) {
                return this.add((n.repeat && f.TweenMax || i).from(e, t, n), r)
            }, g.fromTo = function(e, t, n, r, s) {
                var o = r.repeat && f.TweenMax || i;
                return t ? this.add(o.fromTo(e, t, n, r), s) : this.set(e, r, s)
            }, g.staggerTo = function(e, t, r, s, o, l, u, c) {
                var h, f = new n({
                    onComplete: l,
                    onCompleteParams: u,
                    callbackScope: c,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof e && (e = i.selector(e) || e), a(e = e || []) && (e = m(e)), 0 > (s = s || 0) && ((e = m(e)).reverse(), s *= -1), h = 0; e.length > h; h++) r.startAt && (r.startAt = p(r.startAt)), f.to(e[h], t, p(r), h * s);
                return this.add(f, o)
            }, g.staggerFrom = function(e, t, i, n, r, s, o, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, r, s, o, a)
            }, g.staggerFromTo = function(e, t, i, n, r, s, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, r, s, o, a, l)
            }, g.call = function(e, t, n, r) {
                return this.add(i.delayedCall(0, e, t, n), r)
            }, g.set = function(e, t, n) {
                return n = this._parseTimeOrLabel(n, 0, !0), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n)
            }, n.exportRoot = function(e, t) {
                null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                var r, s, o = new n(e),
                    a = o._timeline;
                for (null == t && (t = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, t && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                return a.add(o, 0), o
            }, g.add = function(r, s, o, a) {
                var u, c, h, f, p, d;
                if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof e)) {
                    if (r instanceof Array || r && r.push && l(r)) {
                        for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++) l(f = r[h]) && (f = new n({
                            tweens: f
                        })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += a;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, s);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (t.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (d = (p = this).rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, g.remove = function(t) {
                if (t instanceof e) return this._remove(t, !1);
                if (t instanceof Array || t && t.push && l(t)) {
                    for (var i = t.length; --i > -1;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, g._remove = function(e, i) {
                t.prototype._remove.call(this, e, i);
                var n = this._last;
                return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, g.append = function(e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, g.insert = g.insertMultiple = function(e, t, i, n) {
                return this.add(e, t || 0, i, n)
            }, g.appendMultiple = function(e, t, i, n) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
            }, g.addLabel = function(e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, g.addPause = function(e, t, n, r) {
                var s = i.delayedCall(0, d, ["{self}", t, n, r], this);
                return s.data = "isPause", this.add(s, e)
            }, g.removeLabel = function(e) {
                return delete this._labels[e], this
            }, g.getLabelTime = function(e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, g._parseTimeOrLabel = function(t, i, n, r) {
                var s;
                if (r instanceof e && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && l(r)))
                    for (s = r.length; --s > -1;) r[s] instanceof e && r[s].timeline === this && this.remove(r[s]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, n);
                if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                else {
                    if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? n ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                    i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, n) : this.duration()
                }
                return Number(t) + i
            }, g.seek = function(e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
            }, g.stop = function() {
                return this.paused(!0)
            }, g.gotoAndPlay = function(e, t) {
                return this.play(e, t)
            }, g.gotoAndStop = function(e, t) {
                return this.pause(e, t)
            }, g.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, o, a, l, h = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    p = this._startTime,
                    d = this._timeScale,
                    m = this._paused;
                if (e >= h) this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, e = h + 1e-4;
                else if (1e-7 > e)
                    if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, 0 === e && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        e = 0, this._initted || (l = !0)
                    }
                else this._totalTime = this._time = this._rawPrevTime = e;
                if (this._time !== f && this._first || i || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && e > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (t || this._callback("onStart")), this._time >= f)
                        for (n = this._first; n && (o = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, !this._paused || m);)(n._active || f >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = o;
                    this._onUpdate && (t || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (p === this._startTime || d !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a)))
                }
            }, g._hasPausedChild = function() {
                for (var e = this._first; e;) {
                    if (e._paused || e instanceof n && e._hasPausedChild()) return !0;
                    e = e._next
                }
                return !1
            }, g.getChildren = function(e, t, n, r) {
                r = r || -9999999999;
                for (var s = [], o = this._first, a = 0; o;) r > o._startTime || (o instanceof i ? !1 !== t && (s[a++] = o) : (!1 !== n && (s[a++] = o), !1 !== e && (a = (s = s.concat(o.getChildren(!0, t, n))).length))), o = o._next;
                return s
            }, g.getTweensOf = function(e, t) {
                var n, r, s = this._gc,
                    o = [],
                    a = 0;
                for (s && this._enabled(!0, !0), r = (n = i.getTweensOf(e)).length; --r > -1;)(n[r].timeline === this || t && this._contains(n[r])) && (o[a++] = n[r]);
                return s && this._enabled(!1, !0), o
            }, g.recent = function() {
                return this._recent
            }, g._contains = function(e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, g.shiftChildren = function(e, t, i) {
                i = i || 0;
                for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += e), r = r._next;
                if (t)
                    for (n in s) s[n] >= i && (s[n] += e);
                return this._uncache(!0)
            }, g._kill = function(e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(e, t) && (r = !0);
                return r
            }, g.clear = function(e) {
                var t = this.getChildren(!1, !0, !0),
                    i = t.length;
                for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                return !1 !== e && (this._labels = {}), this._uncache(!0)
            }, g.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return e.prototype.invalidate.call(this)
            }, g._enabled = function(e, i) {
                if (e === this._gc)
                    for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
                return t.prototype._enabled.call(this, e, i)
            }, g.totalTime = function() {
                this._forcingPlayhead = !0;
                var t = e.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, t
            }, g.duration = function(e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, g.totalDuration = function(e) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var t, i, n = 0, r = this._last, s = 999999999999; r;) t = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = t;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
            }, g.paused = function(t) {
                if (!t)
                    for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return e.prototype.paused.apply(this, arguments)
            }, g.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === e._rootFramesTimeline
            }, g.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, n
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
            var n = function(t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                r = 1e-10,
                s = t._internals,
                o = s.lazyTweens,
                a = s.lazyRender,
                l = new i(null, null, 1, 0),
                u = n.prototype = new e;
            return u.constructor = n, u.kill()._gc = !1, n.version = "1.17.0", u.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, u.addCallback = function(e, i, n, r) {
                return this.add(t.delayedCall(0, e, n, r), i)
            }, u.removeCallback = function(e, t) {
                if (e)
                    if (null == t) this._kill(null, e);
                    else
                        for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                return this
            }, u.removePause = function(t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, u.tweenTo = function(e, i) {
                i = i || {};
                var n, r, s, o = {
                    ease: l,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
                for (r in i) o[r] = i[r];
                return o.time = this._parseTimeOrLabel(e), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new t(this, n, o), o.onStart = function() {
                    s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                }, s
            }, u.tweenFromTo = function(e, t, i) {
                i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [e],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var n = this.tweenTo(t, i);
                return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
            }, u.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, l, u, c, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._duration,
                    d = this._time,
                    m = this._totalTime,
                    g = this._startTime,
                    _ = this._timeScale,
                    v = this._rawPrevTime,
                    y = this._paused,
                    w = this._cycle;
                if (e >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === e || 0 > v || v === r) && v !== e && this._first && (c = !0, v > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : (this._time = p, e = p + 1e-4);
                else if (1e-7 > e)
                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === p && v !== r && (v > 0 || 0 > e && v >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : v >= 0 && this._first && (c = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = p || !t || e || this._rawPrevTime === e ? e : r, 0 === e && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        e = 0, this._initted || (c = !0)
                    }
                else 0 === p && 0 > v && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (h = p + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, e = p + 1e-4) : 0 > this._time ? this._time = e = 0 : e = this._time));
                if (this._cycle !== w && !this._locked) {
                    var x = this._yoyo && 0 != (1 & w),
                        b = x === (this._yoyo && 0 != (1 & this._cycle)),
                        T = this._totalTime,
                        P = this._cycle,
                        C = this._rawPrevTime,
                        k = this._time;
                    if (this._totalTime = w * p, w > this._cycle ? x = !x : this._totalTime += p, this._time = d, this._rawPrevTime = 0 === p ? v - 1e-4 : v, this._cycle = w, this._locked = !0, d = x ? 0 : p, this.render(d, t, 0 === p), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), b && (d = x ? p + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = k, this._totalTime = T, this._cycle = P, this._rawPrevTime = C
                }
                if (this._time !== d && this._first || i || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && e > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (t || this._callback("onStart")), this._time >= d)
                        for (n = this._first; n && (l = n._next, !this._paused || y);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, !this._paused || y);)(n._active || d >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = l;
                    this._onUpdate && (t || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (g === this._startTime || _ !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this._callback(u)))
                } else m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, u.getActive = function(e, t, i) {
                null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                var n, r, s = [],
                    o = this.getChildren(e, t, i),
                    a = 0,
                    l = o.length;
                for (n = 0; l > n; n++)(r = o[n]).isActive() && (s[a++] = r);
                return s
            }, u.getLabelAfter = function(e) {
                e || 0 !== e && (e = this._time);
                var t, i = this.getLabelsArray(),
                    n = i.length;
                for (t = 0; n > t; t++)
                    if (i[t].time > e) return i[t].name;
                return null
            }, u.getLabelBefore = function(e) {
                null == e && (e = this._time);
                for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                    if (e > t[i].time) return t[i].name;
                return null
            }, u.getLabelsArray = function() {
                var e, t = [],
                    i = 0;
                for (e in this._labels) t[i++] = {
                    time: this._labels[e],
                    name: e
                };
                return t.sort(function(e, t) {
                    return e.time - t.time
                }), t
            }, u.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, u.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, u.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, u.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, u.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, u.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, u.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, u.currentLabel = function(e) {
                return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
            }, n
        }, !0), n = 180 / Math.PI, r = [], s = [], o = [], a = {}, l = _gsScope._gsDefine.globals, u = function(e, t, i, n) {
            this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
        }, c = function(e, t, i, n) {
            var r = {
                    a: e
                },
                s = {},
                o = {},
                a = {
                    c: n
                },
                l = (e + t) / 2,
                u = (t + i) / 2,
                c = (i + n) / 2,
                h = (l + u) / 2,
                f = (u + c) / 2,
                p = (f - h) / 8;
            return r.b = l + (e - l) / 4, s.b = h + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + f) / 2, o.b = f - p, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
        }, h = function(e, t, i, n, a) {
            var l, u, h, f, p, d, m, g, _, v, y, w, x, b = e.length - 1,
                T = 0,
                P = e[0].a;
            for (l = 0; b > l; l++) u = (p = e[T]).a, h = p.d, f = e[T + 1].d, a ? (y = r[l], x = .25 * ((w = s[l]) + y) * t / (n ? .5 : o[l] || .5), g = h - ((d = h - (h - u) * (n ? .5 * t : 0 !== y ? x / y : 0)) + (((m = h + (f - h) * (n ? .5 * t : 0 !== w ? x / w : 0)) - d) * (3 * y / (y + w) + .5) / 4 || 0))) : g = h - ((d = h - .5 * (h - u) * t) + (m = h + .5 * (f - h) * t)) / 2, d += g, m += g, p.c = _ = d, p.b = 0 !== l ? P : P = p.a + .6 * (p.c - p.a), p.da = h - u, p.ca = _ - u, p.ba = P - u, i ? (v = c(u, P, _, h), e.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, P = m;
            (p = e[T]).b = P, p.c = P + .4 * (p.d - P), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = P - p.a, i && (v = c(p.a, P, p.c, p.d), e.splice(T, 1, v[0], v[1], v[2], v[3]))
        }, f = function(e, t, i, n) {
            var o, a, l, c, h, f, p = [];
            if (n)
                for (a = (e = [n].concat(e)).length; --a > -1;) "string" == typeof(f = e[a][t]) && "=" === f.charAt(1) && (e[a][t] = n[t] + Number(f.charAt(0) + f.substr(2)));
            if (0 > (o = e.length - 2)) return p[0] = new u(e[0][t], 0, 0, e[-1 > o ? 0 : 1][t]), p;
            for (a = 0; o > a; a++) l = e[a][t], c = e[a + 1][t], p[a] = new u(l, 0, 0, c), i && (h = e[a + 2][t], r[a] = (r[a] || 0) + (c - l) * (c - l), s[a] = (s[a] || 0) + (h - c) * (h - c));
            return p[a] = new u(e[a][t], 0, 0, e[a + 1][t]), p
        }, p = function(e, t, i, n, l, u) {
            var c, p, d, m, g, _, v, y, w = {},
                x = [],
                b = u || e[0];
            for (p in l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) x.push(p);
            if (e.length > 1) {
                for (y = e[e.length - 1], v = !0, c = x.length; --c > -1;)
                    if (p = x[c], Math.abs(b[p] - y[p]) > .05) {
                        v = !1;
                        break
                    } v && (e = e.concat(), u && e.unshift(u), e.push(e[1]), u = e[e.length - 3])
            }
            for (r.length = s.length = o.length = 0, c = x.length; --c > -1;) p = x[c], a[p] = -1 !== l.indexOf("," + p + ","), w[p] = f(e, p, a[p], u);
            for (c = r.length; --c > -1;) r[c] = Math.sqrt(r[c]), s[c] = Math.sqrt(s[c]);
            if (!n) {
                for (c = x.length; --c > -1;)
                    if (a[p])
                        for (_ = (d = w[x[c]]).length - 1, m = 0; _ > m; m++) g = d[m + 1].da / s[m] + d[m].da / r[m], o[m] = (o[m] || 0) + g * g;
                for (c = o.length; --c > -1;) o[c] = Math.sqrt(o[c])
            }
            for (c = x.length, m = i ? 4 : 1; --c > -1;) d = w[p = x[c]], h(d, t, i, n, a[p]), v && (d.splice(0, m), d.splice(d.length - m, m));
            return w
        }, d = function(e, t, i) {
            for (var n, r, s, o, a, l, u, c, h, f, p, d = 1 / i, m = e.length; --m > -1;)
                for (s = (f = e[m]).a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, c = 1; i >= c; c++) n = r - (r = ((u = d * c) * u * o + 3 * (h = 1 - u) * (u * a + h * l)) * u), t[p = m * i + c - 1] = (t[p] || 0) + n * n
        }, m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(e, t, i) {
                this._target = e, t instanceof Array && (t = {
                    values: t
                }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var n, r, s, o, a, l = t.values || [],
                    c = {},
                    h = l[0],
                    f = t.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = f ? f instanceof Array ? f : [
                        ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                    ] : null, h) this._props.push(n);
                for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof e[n], c[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), a || c[n] !== l[0][n] && (a = c);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? p(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : function(e, t, i) {
                        var n, r, s, o, a, l, c, h, f, p, d, m = {},
                            g = "cubic" === (t = t || "soft") ? 3 : 2,
                            _ = "soft" === t,
                            v = [];
                        if (_ && i && (e = [i].concat(e)), null == e || g + 1 > e.length) throw "invalid Bezier data";
                        for (f in e[0]) v.push(f);
                        for (l = v.length; --l > -1;) {
                            for (m[f = v[l]] = a = [], p = 0, h = e.length, c = 0; h > c; c++) n = null == i ? e[c][f] : "string" == typeof(d = e[c][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), _ && c > 1 && h - 1 > c && (a[p++] = (n + a[p - 2]) / 2), a[p++] = n;
                            for (h = p - g + 1, p = 0, c = 0; h > c; c += g) n = a[c], r = a[c + 1], s = a[c + 2], o = 2 === g ? 0 : a[c + 3], a[p++] = d = 3 === g ? new u(n, r, s, o) : new u(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            a.length = p
                        }
                        return m
                    }(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                    var m = function(e, t) {
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = (t = t >> 0 || 6) - 1,
                            h = [],
                            f = [];
                        for (i in e) d(e[i], o, t);
                        for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), f[s = n % t] = l, s === c && (u += l, h[s = n / t >> 0] = f, a[s] = u, l = 0, f = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    }(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
                        for (o = 0; 3 > o; o++) n = f[s][o], this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = f[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(e) {
                var t, i, r, s, o, a, l, u, c, h, f = this._segCount,
                    p = this._func,
                    d = this._target,
                    m = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                        for (u = f - 1; u > r && e >= (this._l2 = c[++r]););
                        this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = c[--r]) >= e;);
                        0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                    }
                    if (t = r, e -= this._l1, r = this._si, e > this._s2 && h.length - 1 > r) {
                        for (u = h.length - 1; u > r && e >= (this._s2 = h[++r]););
                        this._s1 = h[r - 1], this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = h[--r]) >= e;);
                        0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                    }
                    a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else a = (e - (t = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
                for (i = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], l = (a * a * (o = this._beziers[s][t]).da + 3 * i * (a * o.ca + i * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), p[s] ? d[s](l) : d[s] = l;
                if (this._autoRotate) {
                    var g, _, v, y, w, x, b, T = this._autoRotate;
                    for (r = T.length; --r > -1;) s = T[r][2], x = T[r][3] || 0, b = !0 === T[r][4] ? 1 : n, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[t], g = g[t], _ = o.a + (o.b - o.a) * a, _ += ((y = o.b + (o.c - o.b) * a) - _) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = g.a + (g.b - g.a) * a, v += ((w = g.b + (g.c - g.b) * a) - v) * a, w += (g.c + (g.d - g.c) * a - w) * a, l = m ? Math.atan2(w - v, y - _) * b + x : this._initialRotations[r], p[s] ? d[s](l) : d[s] = l)
                }
            }
        }), g = m.prototype, m.bezierThrough = p, m.cubicToQuadratic = c, m._autoCSS = !0, m.quadraticToCubic = function(e, t, i) {
            return new u(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
        }, m._cssRegister = function() {
            var e = l.CSSPlugin;
            if (e) {
                var t = e._internals,
                    i = t._parseToProxy,
                    n = t._setPluginRatio,
                    r = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function(e, t, s, o, a, l) {
                        t instanceof Array && (t = {
                            values: t
                        }), l = new m;
                        var u, c, h, f = t.values,
                            p = f.length - 1,
                            d = [],
                            g = {};
                        if (0 > p) return a;
                        for (u = 0; p >= u; u++) h = i(e, f[u], o, a, l, p !== u), d[u] = h.end;
                        for (c in t) g[c] = t[c];
                        return g.values = d, (a = new r(e, "bezier", 0, 0, h.pt, 2)).data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                            ["left", "top", "rotation", u, !1]
                        ] : null != h.end.x && [
                            ["x", "y", "rotation", u, !1]
                        ]), g.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform), l._onInitTween(h.proxy, g, o._tween), a
                    }
                })
            }
        }, g._roundProps = function(e, t) {
            for (var i = this._overwriteProps, n = i.length; --n > -1;)(e[i[n]] || e.bezier || e.bezierThrough) && (this._round[i[n]] = t)
        }, g._kill = function(e) {
            var t, i, n = this._props;
            for (t in this._beziers)
                if (t in e)
                    for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1;) n[i] === t && n.splice(i, 1);
            return this._super._kill.call(this, e)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
            var i, n, r, s, o = function() {
                    e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                },
                a = _gsScope._gsDefine.globals,
                l = {},
                u = o.prototype = new e("css");
            u.constructor = o, o.version = "1.17.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
                top: u,
                right: u,
                bottom: u,
                left: u,
                width: u,
                height: u,
                fontSize: u,
                padding: u,
                margin: u,
                perspective: u,
                lineHeight: ""
            };
            var c, h, f, p, d, m, g, _, v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                P = /opacity:([^;]*)/i,
                C = /alpha\(opacity *=.+?\)/i,
                k = /^(rgb|hsl)/,
                O = /([A-Z])/g,
                S = /-([a-z])/gi,
                $ = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                A = function(e, t) {
                    return t.toUpperCase()
                },
                D = /(?:Left|Right|Width)/i,
                R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                M = /,(?=[^\)]*(?:\(|$))/gi,
                I = Math.PI / 180,
                N = 180 / Math.PI,
                L = {},
                j = document,
                F = function(e) {
                    return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", e) : j.createElement(e)
                },
                q = F("div"),
                z = F("img"),
                H = o._internals = {
                    _specialProps: l
                },
                B = navigator.userAgent,
                X = (g = B.indexOf("Android"), _ = F("a"), f = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === g || Number(B.substr(g + 8, 1)) > 3), d = f && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), p = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (m = parseFloat(RegExp.$1)), !!_ && (_.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(_.style.opacity))),
                W = function(e) {
                    return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                V = function(e) {
                    window.console && console.log(e)
                },
                Y = "",
                U = "",
                G = function(e, t) {
                    var i, n, r = (t = t || q).style;
                    if (void 0 !== r[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + e];);
                    return n >= 0 ? (Y = "-" + (U = 3 === n ? "ms" : i[n]).toLowerCase() + "-", U + e) : null
                },
                Q = j.defaultView ? j.defaultView.getComputedStyle : function() {},
                Z = o.getStyle = function(e, t, i, n, r) {
                    var s;
                    return X || "opacity" !== t ? (!n && e.style[t] ? s = e.style[t] : (i = i || Q(e)) ? s = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(O, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : W(e)
                },
                J = H.convertToPixels = function(e, i, n, r, s) {
                    if ("px" === r || !r) return n;
                    if ("auto" === r || !n) return 0;
                    var a, l, u, c = D.test(i),
                        h = e,
                        f = q.style,
                        p = 0 > n;
                    if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? e.clientWidth : e.clientHeight);
                    else {
                        if (f.cssText = "border:0 solid red;position:" + Z(e, "position") + ";line-height:0;", "%" !== r && h.appendChild) f[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                        else {
                            if (l = (h = e.parentNode || j.body)._gsCache, u = t.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                            f[c ? "width" : "height"] = n + r
                        }
                        h.appendChild(q), a = parseFloat(q[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(q), c && "%" === r && !1 !== o.cacheWidths && ((l = h._gsCache = h._gsCache || {}).time = u, l.width = a / n * 100), 0 !== a || s || (a = J(e, i, n, r, !0))
                    }
                    return p ? -a : a
                },
                K = H.calculateOffset = function(e, t, i) {
                    if ("absolute" !== Z(e, "position", i)) return 0;
                    var n = "left" === t ? "Left" : "Top",
                        r = Z(e, "margin" + n, i);
                    return e["offset" + n] - (J(e, t, parseFloat(r), r.replace(b, "")) || 0)
                },
                ee = function(e, t) {
                    var i, n, r, s = {};
                    if (t = t || Q(e, null))
                        if (i = t.length)
                            for (; --i > -1;)(-1 === (r = t[i]).indexOf("-transform") || Ae === r) && (s[r.replace(S, A)] = t.getPropertyValue(r));
                        else
                            for (i in t)(-1 === i.indexOf("Transform") || $e === i) && (s[i] = t[i]);
                    else if (t = e.currentStyle || e.style)
                        for (i in t) "string" == typeof i && void 0 === s[i] && (s[i.replace(S, A)] = t[i]);
                    return X || (s.opacity = W(e)), n = He(e, t, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Re && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                },
                te = function(e, t, i, n, r) {
                    var s, o, a, l = {},
                        u = e.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[o] || "" === t[o].replace(x, "") ? s : 0 : K(e, o), void 0 !== u[o] && (a = new me(u, o, u[o], a)));
                    if (n)
                        for (o in n) "className" !== o && (l[o] = n[o]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                ie = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ne = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                re = function(e, t, i) {
                    var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        r = ie[t],
                        s = r.length;
                    for (i = i || Q(e, null); --s > -1;) n -= parseFloat(Z(e, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Z(e, "border" + r[s] + "Width", i, !0)) || 0;
                    return n
                },
                se = function(e, t) {
                    (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                    var i = e.split(" "),
                        n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                        r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                    return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e = n + " " + r + (i.length > 2 ? " " + i[2] : ""), t && (t.oxp = -1 !== n.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === n.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(n.replace(x, "")), t.oy = parseFloat(r.replace(x, "")), t.v = e), t || e
                },
                oe = function(e, t) {
                    return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                },
                ae = function(e, t) {
                    return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
                },
                le = function(e, t, i, n) {
                    var r, s, o, a, l;
                    return null == e ? a = t : "number" == typeof e ? a = e : (r = 360, s = e.split("_"), o = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : N) - (l ? 0 : t), s.length && (n && (n[i] = t + o), -1 !== e.indexOf("short") && ((o %= r) !== o % 180 && (o = 0 > o ? o + r : o - r)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 3599999999640) % r - (0 | o / r) * r : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 3599999999640) % r - (0 | o / r) * r)), a = t + o), 1e-6 > a && a > -1e-6 && (a = 0), a
                },
                ue = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                ce = function(e, t, i) {
                    return 0 | 255 * (1 > 6 * (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e) ? t + 6 * (i - t) * e : .5 > e ? i : 2 > 3 * e ? t + 6 * (i - t) * (2 / 3 - e) : t) + .5
                },
                he = o.parseColor = function(e) {
                    var t, i, n, r, s, o;
                    return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ue[e] ? ue[e] : "#" === e.charAt(0) ? (4 === e.length && (e = "#" + (t = e.charAt(1)) + t + (i = e.charAt(2)) + i + (n = e.charAt(3)) + n), [(e = parseInt(e.substr(1), 16)) >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(v), r = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, t = 2 * (o = Number(e[2]) / 100) - (i = .5 >= o ? o * (s + 1) : o + s - o * s), e.length > 3 && (e[3] = Number(e[3])), e[0] = ce(r + 1 / 3, t, i), e[1] = ce(r, t, i), e[2] = ce(r - 1 / 3, t, i), e) : ((e = e.match(v) || ue.transparent)[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : ue.black
                },
                fe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (u in ue) fe += "|" + u + "\\b";
            fe = RegExp(fe + ")", "gi");
            var pe = function(e, t, i, n) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var r, s = t ? (e.match(fe) || [""])[0] : "",
                        o = e.split(s).join("").match(w) || [],
                        a = e.substr(0, e.indexOf(o[0])),
                        l = ")" === e.charAt(e.length - 1) ? ")" : "",
                        u = -1 !== e.indexOf(" ") ? " " : ",",
                        c = o.length,
                        h = c > 0 ? o[0].replace(v, "") : "";
                    return c ? r = t ? function(e) {
                        var t, f, p, d;
                        if ("number" == typeof e) e += h;
                        else if (n && M.test(e)) {
                            for (d = e.replace(M, "|").split("|"), p = 0; d.length > p; p++) d[p] = r(d[p]);
                            return d.join(",")
                        }
                        if (t = (e.match(fe) || [s])[0], p = (f = e.split(t).join("").match(w) || []).length, c > p--)
                            for (; c > ++p;) f[p] = i ? f[0 | (p - 1) / 2] : o[p];
                        return a + f.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, s, f;
                        if ("number" == typeof e) e += h;
                        else if (n && M.test(e)) {
                            for (s = e.replace(M, "|").split("|"), f = 0; s.length > f; f++) s[f] = r(s[f]);
                            return s.join(",")
                        }
                        if (f = (t = e.match(w) || []).length, c > f--)
                            for (; c > ++f;) t[f] = i ? t[0 | (f - 1) / 2] : o[f];
                        return a + t.join(u) + l
                    } : function(e) {
                        return e
                    }
                },
                de = function(e) {
                    return e = e.split(","),
                        function(t, i, n, r, s, o, a) {
                            var l, u = (i + "").split(" ");
                            for (a = {}, l = 0; 4 > l; l++) a[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return r.parse(t, a, s, o)
                        }
                },
                me = (H._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT; a;) t = o[a.v], a.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), a.t[a.p] = t, a = a._next;
                    if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === e)
                        for (a = s.firstMPT; a;) {
                            if ((i = a.t).type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i.e = r
                                }
                            } else i.e = i.s + i.xs0;
                            a = a._next
                        }
                }, function(e, t, i, n, r) {
                    this.t = e, this.p = t, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                }),
                ge = (H._parseToProxy = function(e, t, i, n, r, s) {
                    var o, a, l, u, c, h = n,
                        f = {},
                        p = {},
                        d = i._transform,
                        m = L;
                    for (i._transform = null, L = t, n = c = i.parse(e, t, n, r), L = m, s && (i._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                        if (1 >= n.type && (p[a = n.p] = n.s + n.c, f[a] = n.s, s || (u = new me(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                            for (o = n.l; --o > 0;) l = "xn" + o, p[a = n.p + "_" + l] = n.data[l], f[a] = n[l], s || (u = new me(n, l, a, u, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: f,
                        end: p,
                        firstMPT: u,
                        pt: c
                    }
                }, H.CSSPropTween = function(e, t, n, r, o, a, l, u, c, h, f) {
                    this.t = e, this.p = t, this.s = n, this.c = r, this.n = l || t, e instanceof ge || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
                }),
                _e = function(e, t, i, n, r, s) {
                    var o = new ge(e, t, i, n - i, r, -1, s);
                    return o.b = i, o.e = o.xs0 = n, o
                },
                ve = o.parseComplex = function(e, t, i, n, r, s, o, a, l, u) {
                    o = new ge(e, t, 0, 0, o, u ? 2 : 1, null, !1, a, i = i || s || "", n), n += "";
                    var h, f, p, d, m, g, _, w, x, b, T, P, C = i.split(", ").join(",").split(" "),
                        O = n.split(", ").join(",").split(" "),
                        S = C.length,
                        $ = !1 !== c;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(M, ", ").split(" "), O = O.join(" ").replace(M, ", ").split(" "), S = C.length), S !== O.length && (S = (C = (s || "").split(" ")).length), o.plugin = l, o.setRatio = u, h = 0; S > h; h++)
                        if (d = C[h], m = O[h], (w = parseFloat(d)) || 0 === w) o.appendXtra("", w, oe(m, w), m.replace(y, ""), $ && -1 !== m.indexOf("px"), !0);
                        else if (r && ("#" === d.charAt(0) || ue[d] || k.test(d))) P = "," === m.charAt(m.length - 1) ? ")," : ")", d = he(d), m = he(m), (x = d.length + m.length > 6) && !X && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(O[h]).join("transparent")) : (X || (x = !1), o.appendXtra(x ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], x ? "," : P, !0), x && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, P, !1)));
                    else if (g = d.match(v)) {
                        if (!(_ = m.match(y)) || _.length !== g.length) return o;
                        for (p = 0, f = 0; g.length > f; f++) T = g[f], b = d.indexOf(T, p), o.appendXtra(d.substr(p, b - p), Number(T), oe(_[f], T), "", $ && "px" === d.substr(b + T.length, 2), 0 === f), p = b + T.length;
                        o["xs" + o.l] += d.substr(p)
                    } else o["xs" + o.l] += o.l ? " " + d : d;
                    if (-1 !== n.indexOf("=") && o.data) {
                        for (P = o.xs0 + o.data.s, h = 1; o.l > h; h++) P += o["xs" + h] + o.data["xn" + h];
                        o.e = P + o["xs" + h]
                    }
                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                },
                ye = 9;
            for ((u = ge.prototype).l = u.pr = 0; --ye > 0;) u["xn" + ye] = 0, u["xs" + ye] = "";
            u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(e, t, i, n, r, s) {
                var o = this,
                    a = o.l;
                return o["xs" + a] += s && a ? " " + e : e || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = t + i, o.rxp["xn" + a] = r, o["xn" + a] = t, o.plugin || (o.xfirst = new ge(o, "xn" + a, t, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                    s: t + i
                }, o.rxp = {}, o.s = t, o.c = i, o.r = r, o)) : (o["xs" + a] += t + (n || ""), o)
            };
            var we = function(e, t) {
                    t = t || {}, this.p = t.prefix && G(e) || e, l[e] = l[this.p] = this, this.format = t.formatter || pe(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                xe = H._registerComplexSpecialProp = function(e, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var n, r = e.split(","),
                        s = t.defaultValue;
                    for (i = i || [s], n = 0; r.length > n; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || s, new we(r[n], t)
                },
                be = function(e) {
                    if (!l[e]) {
                        var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        xe(e, {
                            parser: function(e, i, n, r, s, o, u) {
                                var c = a.com.greensock.plugins[t];
                                return c ? (c._cssRegister(), l[n].parse(e, i, n, r, s, o, u)) : (V("Error: " + t + " js file not loaded."), s)
                            }
                        })
                    }
                };
            (u = we.prototype).parseComplex = function(e, t, i, n, r, s) {
                var o, a, l, u, c, h, f = this.keyword;
                if (this.multi && (M.test(i) || M.test(t) ? (a = t.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : f && (a = [t], l = [i])), l) {
                    for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) t = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && ((c = t.indexOf(f)) !== (h = i.indexOf(f)) && (-1 === h ? a[o] = a[o].split(f).join("") : -1 === c && (a[o] += " " + f)));
                    t = a.join(", "), i = l.join(", ")
                }
                return ve(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, s)
            }, u.parse = function(e, t, i, n, s, o) {
                return this.parseComplex(e.style, this.format(Z(e, this.p, r, !1, this.dflt)), this.format(t), s, o)
            }, o.registerSpecialProp = function(e, t, i) {
                xe(e, {
                    parser: function(e, n, r, s, o, a) {
                        var l = new ge(e, r, 0, 0, o, 2, r, !1, i);
                        return l.plugin = a, l.setRatio = t(e, n, s._tween, r), l
                    },
                    priority: i
                })
            }, o.useSVGTransformAttr = f || p;
            var Te, Pe, Ce, ke, Oe, Se = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                $e = G("transform"),
                Ae = Y + "transform",
                De = G("transformOrigin"),
                Re = null !== G("perspective"),
                Ee = H.Transform = function() {
                    this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Re) && (o.defaultForce3D || "auto")
                },
                Me = window.SVGElement,
                Ie = function(e, t, i) {
                    var n, r = j.createElementNS("http://www.w3.org/2000/svg", e),
                        s = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                    return t.appendChild(r), r
                },
                Ne = j.documentElement,
                Le = (Oe = m || /Android/i.test(B) && !window.chrome, j.createElementNS && !Oe && (Pe = Ie("svg", Ne), ke = (Ce = Ie("rect", Pe, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ce.style[De] = "50% 50%", Ce.style[$e] = "scaleX(0.5)", Oe = ke === Ce.getBoundingClientRect().width && !(p && Re), Ne.removeChild(Pe)), Oe),
                je = function(e, t, i, n, r) {
                    var s, a, l, u, c, h, f, p, d, m, g, _, v, y, w = e._gsTransform,
                        x = ze(e, !0);
                    w && (v = w.xOrigin, y = w.yOrigin), (!n || 2 > (s = n.split(" ")).length) && (f = e.getBBox(), s = [(-1 !== (t = se(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * f.width : parseFloat(t[0])) + f.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * f.height : parseFloat(t[1])) + f.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), n && x !== qe && (h = x[0], f = x[1], p = x[2], d = x[3], m = x[4], a = u * (d / (_ = h * d - f * p)) + c * (-p / _) + (p * (g = x[5]) - d * m) / _, l = u * (-f / _) + c * (h / _) - (h * g - f * m) / _, u = i.xOrigin = s[0] = a, c = i.yOrigin = s[1] = l), w && (r || !1 !== r && !1 !== o.defaultSmoothOrigin ? (a = u - v, l = c - y, w.xOffset += a * x[0] + l * x[2] - a, w.yOffset += a * x[1] + l * x[3] - l) : w.xOffset = w.yOffset = 0), e.setAttribute("data-svg-origin", s.join(" "))
                },
                Fe = function(e) {
                    return !!(Me && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                qe = [1, 0, 0, 1, 0, 0],
                ze = function(e, t) {
                    var i, n, r, s, o, a = e._gsTransform || new Ee;
                    if ($e ? n = Z(e, Ae, null, !0) : e.currentStyle && (n = (n = e.currentStyle.filter.match(R)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || e.getBBox && Fe(e)) && (i && -1 !== (e.style[$e] + "").indexOf("matrix") && (n = e.style[$e], i = 0), r = e.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return qe;
                    for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ye = r.length; --ye > -1;) s = Number(r[ye]), r[ye] = (o = s - (s |= 0)) ? (0 | 1e5 * o + (0 > o ? -.5 : .5)) / 1e5 + s : s;
                    return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                He = H.getTransform = function(e, i, n, s) {
                    if (e._gsTransform && n && !s) return e._gsTransform;
                    var a, l, u, c, h, f, p = n && e._gsTransform || new Ee,
                        d = 0 > p.scaleX,
                        m = Re && (parseFloat(Z(e, De, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin) || 0,
                        g = parseFloat(o.defaultTransformPerspective) || 0;
                    if (p.svg = !(!e.getBBox || !Fe(e)), p.svg && (je(e, Z(e, De, r, !1, "50% 50%") + "", p, e.getAttribute("data-svg-origin")), Te = o.useSVGTransformAttr || Le), (a = ze(e)) !== qe) {
                        if (16 === a.length) {
                            var _, v, y, w, x, b = a[0],
                                T = a[1],
                                P = a[2],
                                C = a[3],
                                k = a[4],
                                O = a[5],
                                S = a[6],
                                $ = a[7],
                                A = a[8],
                                D = a[9],
                                R = a[10],
                                E = a[12],
                                M = a[13],
                                I = a[14],
                                L = a[11],
                                j = Math.atan2(S, R);
                            p.zOrigin && (E = A * (I = -p.zOrigin) - a[12], M = D * I - a[13], I = R * I + p.zOrigin - a[14]), p.rotationX = j * N, j && (_ = k * (w = Math.cos(-j)) + A * (x = Math.sin(-j)), v = O * w + D * x, y = S * w + R * x, A = k * -x + A * w, D = O * -x + D * w, R = S * -x + R * w, L = $ * -x + L * w, k = _, O = v, S = y), j = Math.atan2(A, R), p.rotationY = j * N, j && (v = T * (w = Math.cos(-j)) - D * (x = Math.sin(-j)), y = P * w - R * x, D = T * x + D * w, R = P * x + R * w, L = C * x + L * w, b = _ = b * w - A * x, T = v, P = y), j = Math.atan2(T, b), p.rotation = j * N, j && (b = b * (w = Math.cos(-j)) + k * (x = Math.sin(-j)), v = T * w + O * x, O = T * -x + O * w, S = P * -x + S * w, T = v), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | 1e5 * Math.sqrt(b * b + T * T) + .5) / 1e5, p.scaleY = (0 | 1e5 * Math.sqrt(O * O + D * D) + .5) / 1e5, p.scaleZ = (0 | 1e5 * Math.sqrt(S * S + R * R) + .5) / 1e5, p.skewX = 0, p.perspective = L ? 1 / (0 > L ? -L : L) : 0, p.x = E, p.y = M, p.z = I, p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * k), p.y -= p.yOrigin - (p.yOrigin * T - p.xOrigin * O))
                        } else if (!(Re && !s && a.length && p.x === a[4] && p.y === a[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Z(e, "display", i))) {
                            var F = a.length >= 6,
                                q = F ? a[0] : 1,
                                z = a[1] || 0,
                                H = a[2] || 0,
                                B = F ? a[3] : 1;
                            p.x = a[4] || 0, p.y = a[5] || 0, u = Math.sqrt(q * q + z * z), c = Math.sqrt(B * B + H * H), h = q || z ? Math.atan2(z, q) * N : p.rotation || 0, f = H || B ? Math.atan2(H, B) * N + h : p.skewX || 0, Math.abs(f) > 90 && 270 > Math.abs(f) && (d ? (u *= -1, f += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, f += 0 >= f ? 180 : -180)), p.scaleX = u, p.scaleY = c, p.rotation = h, p.skewX = f, Re && (p.rotationX = p.rotationY = p.z = 0, p.perspective = g, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * q + p.yOrigin * H), p.y -= p.yOrigin - (p.xOrigin * z + p.yOrigin * B))
                        }
                        for (l in p.zOrigin = m, p) 2e-5 > p[l] && p[l] > -2e-5 && (p[l] = 0)
                    }
                    return n && (e._gsTransform = p, p.svg && (Te && e.style[$e] ? t.delayedCall(.001, function() {
                        Ve(e.style, $e)
                    }) : !Te && e.getAttribute("transform") && t.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), p
                },
                Be = function(e) {
                    var t, i, n = this.data,
                        r = -n.rotation * I,
                        s = r + n.skewX * I,
                        o = 1e5,
                        a = (0 | Math.cos(r) * n.scaleX * o) / o,
                        l = (0 | Math.sin(r) * n.scaleX * o) / o,
                        u = (0 | Math.sin(s) * -n.scaleY * o) / o,
                        c = (0 | Math.cos(s) * n.scaleY * o) / o,
                        h = this.t.style,
                        f = this.t.currentStyle;
                    if (f) {
                        i = l, l = -u, u = -i, t = f.filter, h.filter = "";
                        var p, d, g = this.t.offsetWidth,
                            _ = this.t.offsetHeight,
                            v = "absolute" !== f.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                            w = n.x + g * n.xPercent / 100,
                            x = n.y + _ * n.yPercent / 100;
                        if (null != n.ox && (w += (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2) - (p * a + (d = (n.oyp ? .01 * _ * n.oy : n.oy) - _ / 2) * l), x += d - (p * u + d * c)), v ? y += ", Dx=" + ((p = g / 2) - (p * a + (d = _ / 2) * l) + w) + ", Dy=" + (d - (p * u + d * c) + x) + ")" : y += ", sizingMethod='auto expand')", h.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(E, y) : y + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === u && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                            var P, C, k, O = 8 > m ? 1 : -1;
                            for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 + w), n.ieOffsetY = Math.round((_ - ((0 > c ? -c : c) * _ + (0 > u ? -u : u) * g)) / 2 + x), ye = 0; 4 > ye; ye++) k = (i = -1 !== (P = f[C = ne[ye]]).indexOf("px") ? parseFloat(P) : J(this.t, C, parseFloat(P), P.replace(b, "")) || 0) !== n[C] ? 2 > ye ? -n.ieOffsetX : -n.ieOffsetY : 2 > ye ? p - n.ieOffsetX : d - n.ieOffsetY, h[C] = (n[C] = Math.round(i - k * (0 === ye || 2 === ye ? 1 : O))) + "px"
                        }
                    }
                },
                Xe = H.set3DTransformRatio = H.setTransformRatio = function(e) {
                    var t, i, n, r, s, o, a, l, u, c, h, f, d, m, g, _, v, y, w, x, b, T, P, C = this.data,
                        k = this.t.style,
                        O = C.rotation,
                        S = C.rotationX,
                        $ = C.rotationY,
                        A = C.scaleX,
                        D = C.scaleY,
                        R = C.scaleZ,
                        E = C.x,
                        M = C.y,
                        N = C.z,
                        L = C.svg,
                        j = C.perspective,
                        F = C.force3D;
                    if (!((1 !== e && 0 !== e || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || N || j || $ || S) || Te && L || !Re) O || C.skewX || L ? (O *= I, T = C.skewX * I, P = 1e5, t = Math.cos(O) * A, r = Math.sin(O) * A, i = Math.sin(O - T) * -D, s = Math.cos(O - T) * D, T && "simple" === C.skewType && (v = Math.tan(T), i *= v = Math.sqrt(1 + v * v), s *= v, C.skewY && (t *= v, r *= v)), L && (E += C.xOrigin - (C.xOrigin * t + C.yOrigin * i) + C.xOffset, M += C.yOrigin - (C.xOrigin * r + C.yOrigin * s) + C.yOffset, Te && (C.xPercent || C.yPercent) && (m = this.t.getBBox(), E += .01 * C.xPercent * m.width, M += .01 * C.yPercent * m.height), (m = 1e-6) > E && E > -m && (E = 0), m > M && M > -m && (M = 0)), w = (0 | t * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | s * P) / P + "," + E + "," + M + ")", L && Te ? this.t.setAttribute("transform", "matrix(" + w) : k[$e] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + w) : k[$e] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + D + "," + E + "," + M + ")";
                    else {
                        if (p && ((m = 1e-4) > A && A > -m && (A = R = 2e-5), m > D && D > -m && (D = R = 2e-5), !j || C.z || C.rotationX || C.rotationY || (j = 0)), O || C.skewX) O *= I, g = t = Math.cos(O), _ = r = Math.sin(O), C.skewX && (O -= C.skewX * I, g = Math.cos(O), _ = Math.sin(O), "simple" === C.skewType && (v = Math.tan(C.skewX * I), g *= v = Math.sqrt(1 + v * v), _ *= v, C.skewY && (t *= v, r *= v))), i = -_, s = g;
                        else {
                            if (!($ || S || 1 !== R || j || L)) return void(k[$e] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + M + "px," + N + "px)" + (1 !== A || 1 !== D ? " scale(" + A + "," + D + ")" : ""));
                            t = s = 1, i = r = 0
                        }
                        u = 1, n = o = a = l = c = h = 0, f = j ? -1 / j : 0, d = C.zOrigin, m = 1e-6, x = ",", b = "0", (O = $ * I) && (g = Math.cos(O), a = -(_ = Math.sin(O)), c = f * -_, n = t * _, o = r * _, u = g, f *= g, t *= g, r *= g), (O = S * I) && (v = i * (g = Math.cos(O)) + n * (_ = Math.sin(O)), y = s * g + o * _, l = u * _, h = f * _, n = i * -_ + n * g, o = s * -_ + o * g, u *= g, f *= g, i = v, s = y), 1 !== R && (n *= R, o *= R, u *= R, f *= R), 1 !== D && (i *= D, s *= D, l *= D, h *= D), 1 !== A && (t *= A, r *= A, a *= A, c *= A), (d || L) && (d && (E += n * -d, M += o * -d, N += u * -d + d), L && (E += C.xOrigin - (C.xOrigin * t + C.yOrigin * i) + C.xOffset, M += C.yOrigin - (C.xOrigin * r + C.yOrigin * s) + C.yOffset), m > E && E > -m && (E = b), m > M && M > -m && (M = b), m > N && N > -m && (N = 0)), w = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", w += (m > t && t > -m ? b : t) + x + (m > r && r > -m ? b : r) + x + (m > a && a > -m ? b : a), w += x + (m > c && c > -m ? b : c) + x + (m > i && i > -m ? b : i) + x + (m > s && s > -m ? b : s), S || $ ? (w += x + (m > l && l > -m ? b : l) + x + (m > h && h > -m ? b : h) + x + (m > n && n > -m ? b : n), w += x + (m > o && o > -m ? b : o) + x + (m > u && u > -m ? b : u) + x + (m > f && f > -m ? b : f) + x) : w += ",0,0,0,0,1,0,", w += E + x + M + x + N + x + (j ? 1 + -N / j : 1) + ")", k[$e] = w
                    }
                };
            (u = Ee.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, xe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, i, n, s, a, l) {
                    if (n._lastParsedTransform === l) return s;
                    n._lastParsedTransform = l;
                    var u, c, h, f, p, d, m, g, _, v = e._gsTransform,
                        y = n._transform = He(e, r, !0, l.parseTransform),
                        w = e.style,
                        x = Se.length,
                        b = l,
                        T = {},
                        P = "transformOrigin";
                    if ("string" == typeof b.transform && $e)(h = q.style)[$e] = b.transform, h.display = "block", h.position = "absolute", j.body.appendChild(q), u = He(q, null, !1), j.body.removeChild(q), null != b.xPercent && (u.xPercent = ae(b.xPercent, y.xPercent)), null != b.yPercent && (u.yPercent = ae(b.yPercent, y.yPercent));
                    else if ("object" == typeof b) {
                        if (u = {
                                scaleX: ae(null != b.scaleX ? b.scaleX : b.scale, y.scaleX),
                                scaleY: ae(null != b.scaleY ? b.scaleY : b.scale, y.scaleY),
                                scaleZ: ae(b.scaleZ, y.scaleZ),
                                x: ae(b.x, y.x),
                                y: ae(b.y, y.y),
                                z: ae(b.z, y.z),
                                xPercent: ae(b.xPercent, y.xPercent),
                                yPercent: ae(b.yPercent, y.yPercent),
                                perspective: ae(b.transformPerspective, y.perspective)
                            }, null != (m = b.directionalRotation))
                            if ("object" == typeof m)
                                for (h in m) b[h] = m[h];
                            else b.rotation = m;
                        "string" == typeof b.x && -1 !== b.x.indexOf("%") && (u.x = 0, u.xPercent = ae(b.x, y.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (u.y = 0, u.yPercent = ae(b.y, y.yPercent)), u.rotation = le("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : y.rotation, y.rotation, "rotation", T), Re && (u.rotationX = le("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", T), u.rotationY = le("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", T)), u.skewX = null == b.skewX ? y.skewX : le(b.skewX, y.skewX), u.skewY = null == b.skewY ? y.skewY : le(b.skewY, y.skewY), (c = u.skewY - y.skewY) && (u.skewX += c, u.rotation += c)
                    }
                    for (Re && null != b.force3D && (y.force3D = b.force3D, d = !0), y.skewType = b.skewType || y.skewType || o.defaultSkewType, (p = y.force3D || y.z || y.rotationX || y.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == b.scale || (u.scaleZ = 1); --x > -1;)((f = u[i = Se[x]] - y[i]) > 1e-6 || -1e-6 > f || null != b[i] || null != L[i]) && (d = !0, s = new ge(y, i, y[i], f, s), i in T && (s.e = T[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                    return f = b.transformOrigin, y.svg && (f || b.svgOrigin) && (g = y.xOffset, _ = y.yOffset, je(e, se(f), u, b.svgOrigin, b.smoothOrigin), s = _e(y, "xOrigin", (v ? y : u).xOrigin, u.xOrigin, s, P), s = _e(y, "yOrigin", (v ? y : u).yOrigin, u.yOrigin, s, P), (g !== y.xOffset || _ !== y.yOffset) && (s = _e(y, "xOffset", v ? g : y.xOffset, y.xOffset, s, P), s = _e(y, "yOffset", v ? _ : y.yOffset, y.yOffset, s, P)), f = Te ? null : "0px 0px"), (f || Re && p && y.zOrigin) && ($e ? (d = !0, i = De, f = (f || Z(e, i, r, !1, "50% 50%")) + "", (s = new ge(w, i, 0, 0, s, -1, P)).b = w[i], s.plugin = a, Re ? (h = y.zOrigin, f = f.split(" "), y.zOrigin = (f.length > 2 && (0 === h || "0px" !== f[2]) ? parseFloat(f[2]) : h) || 0, s.xs0 = s.e = f[0] + " " + (f[1] || "50%") + " 0px", (s = new ge(y, "zOrigin", 0, 0, s, -1, s.n)).b = h, s.xs0 = s.e = y.zOrigin) : s.xs0 = s.e = f) : se(f + "", y)), d && (n._transformType = y.svg && Te || !p && 3 !== this._transformType ? 2 : 3), s
                },
                prefix: !0
            }), xe("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), xe("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, s, o) {
                    t = this.format(t);
                    var a, l, u, c, h, f, p, d, m, g, _, v, y, w, x, b, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        P = e.style;
                    for (m = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), a = t.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = G(T[l])), -1 !== (h = c = Z(e, T[l], r, !1, "0px")).indexOf(" ") && (h = (c = h.split(" "))[0], c = c[1]), f = u = a[l], p = parseFloat(h), v = h.substr((p + "").length), (y = "=" === f.charAt(1)) ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), _ = f.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(f), _ = f.substr((d + "").length)), "" === _ && (_ = n[i] || v), _ !== v && (w = J(e, "borderLeft", p, v), x = J(e, "borderTop", p, v), "%" === _ ? (h = w / m * 100 + "%", c = x / g * 100 + "%") : "em" === _ ? (h = w / (b = J(e, "borderLeft", 1, "em")) + "em", c = x / b + "em") : (h = w + "px", c = x + "px"), y && (f = parseFloat(h) + d + _, u = parseFloat(c) + d + _)), o = ve(P, T[l], h + " " + c, f + " " + u, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: pe("0px 0px 0px 0px", !1, !0)
            }), xe("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, i, n, s, o) {
                    var a, l, u, c, h, f, p = "background-position",
                        d = r || Q(e, null),
                        g = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        _ = this.format(t);
                    if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && ((f = Z(e, "backgroundImage").replace($, "")) && "none" !== f)) {
                        for (a = g.split(" "), l = _.split(" "), z.setAttribute("src", f), u = 2; --u > -1;)(c = -1 !== (g = a[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? e.offsetWidth - z.width : e.offsetHeight - z.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                        g = a.join(" ")
                    }
                    return this.parseComplex(e.style, g, _, s, o)
                },
                formatter: se
            }), xe("backgroundSize", {
                defaultValue: "0 0",
                formatter: se
            }), xe("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), xe("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), xe("transformStyle", {
                prefix: !0
            }), xe("backfaceVisibility", {
                prefix: !0
            }), xe("userSelect", {
                prefix: !0
            }), xe("margin", {
                parser: de("marginTop,marginRight,marginBottom,marginLeft")
            }), xe("padding", {
                parser: de("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), xe("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, i, n, s, o) {
                    var a, l, u;
                    return 9 > m ? (l = e.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", t = this.format(t).split(",").join(u)) : (a = this.format(Z(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, s, o)
                }
            }), xe("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), xe("autoRound,strictUnits", {
                parser: function(e, t, i, n, r) {
                    return r
                }
            }), xe("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, i, n, s, o) {
                    return this.parseComplex(e.style, this.format(Z(e, "borderTopWidth", r, !1, "0px") + " " + Z(e, "borderTopStyle", r, !1, "solid") + " " + Z(e, "borderTopColor", r, !1, "#000")), this.format(t), s, o)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(fe) || ["#000"])[0]
                }
            }), xe("borderWidth", {
                parser: de("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), xe("float,cssFloat,styleFloat", {
                parser: function(e, t, i, n, r) {
                    var s = e.style,
                        o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new ge(s, o, 0, 0, r, -1, i, !1, 0, s[o], t)
                }
            });
            var We = function(e) {
                var t, i = this.t,
                    n = i.filter || Z(this.data, "filter") || "",
                    r = 0 | this.s + this.c * e;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !Z(this.data, "filter")) : (i.filter = n.replace(C, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
            };
            xe("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, i, n, s, o) {
                    var a = parseFloat(Z(e, "opacity", r, !1, "1")),
                        l = e.style,
                        u = "autoAlpha" === i;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), u && 1 === a && "hidden" === Z(e, "visibility", r) && 0 !== t && (a = 0), X ? s = new ge(l, "opacity", a, t - a, s) : ((s = new ge(l, "opacity", 100 * a, 100 * (t - a), s)).xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = o, s.setRatio = We), u && ((s = new ge(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                }
            });
            var Ve = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(O, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Ye = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ve(i, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            xe("className", {
                parser: function(e, t, n, s, o, a, l) {
                    var u, c, h, f, p, d = e.getAttribute("class") || "",
                        m = e.style.cssText;
                    if ((o = s._classNamePT = new ge(e, n, 0, 0, o, 2)).setRatio = Ye, o.pr = -11, i = !0, o.b = d, c = ee(e, r), h = e._gsClassPT) {
                        for (f = {}, p = h.data; p;) f[p.p] = 1, p = p._next;
                        h.setRatio(1)
                    }
                    return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : d.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", o.e), u = te(e, c, ee(e), l, f), e.setAttribute("class", d), o.data = u.firstMPT, e.style.cssText = m, o.xfirst = s.parse(e, u.difs, o, a)
                }
            });
            var Ue = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, i, n, r, s, o = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) o.cssText = "", r = !0;
                    else
                        for (n = (t = this.e.split(" ").join("").split(",")).length; --n > -1;) i = t[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? De : l[i].p), Ve(o, i);
                    r && (Ve(o, $e), (s = this.t._gsTransform) && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (xe("clearProps", {
                    parser: function(e, t, n, r, s) {
                        return (s = new ge(e, n, 0, 0, s, 2)).setRatio = Ue, s.e = t, s.pr = -10, s.data = r._tween, i = !0, s
                    }
                }), u = "bezier,throwProps,physicsProps,physics2D".split(","), ye = u.length; ye--;) be(u[ye]);
            (u = o.prototype)._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(e, t, a) {
                if (!e.nodeType) return !1;
                this._target = e, this._tween = a, this._vars = t, c = t.autoRound, i = !1, n = t.suffixMap || o.suffixMap, r = Q(e, ""), s = this._overwriteProps;
                var u, p, m, g, _, v, y, w, x, b = e.style;
                if (h && "" === b.zIndex && (("auto" === (u = Z(e, "zIndex", r)) || "" === u) && this._addLazySet(b, "zIndex", 0)), "string" == typeof t && (g = b.cssText, u = ee(e, r), b.cssText = g + ";" + t, u = te(e, u, ee(e)).difs, !X && P.test(t) && (u.opacity = parseFloat(RegExp.$1)), t = u, b.cssText = g), this._firstPT = p = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null), this._transformType) {
                    for (x = 3 === this._transformType, $e ? f && (h = !0, "" === b.zIndex && (("auto" === (y = Z(e, "zIndex", r)) || "" === y) && this._addLazySet(b, "zIndex", 0)), d && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = p; m && m._next;) m = m._next;
                    w = new ge(e, "transform", 0, 0, null, 2), this._linkCSSP(w, null, m), w.setRatio = $e ? Xe : Be, w.data = this._transform || He(e, r, !0), w.tween = a, w.pr = -1, s.pop()
                }
                if (i) {
                    for (; p;) {
                        for (v = p._next, m = g; m && m.pr > p.pr;) m = m._next;
                        (p._prev = m ? m._prev : _) ? p._prev._next = p: g = p, (p._next = m) ? m._prev = p : _ = p, p = v
                    }
                    this._firstPT = g
                }
                return !0
            }, u.parse = function(e, t, i, s) {
                var o, a, u, h, f, p, d, m, g, _, v = e.style;
                for (o in t) p = t[o], (a = l[o]) ? i = a.parse(e, p, o, this, i, s, t) : (f = Z(e, o, r) + "", g = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && k.test(p) ? (g || (p = ((p = he(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = ve(v, o, f, p, !0, "transparent", i, 0, s)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (d = (u = parseFloat(f)) || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === o || "height" === o ? (u = re(e, o, r), d = "px") : "left" === o || "top" === o ? (u = K(e, o, r), d = "px") : (u = "opacity" !== o ? 0 : 1, d = "")), (_ = g && "=" === p.charAt(1)) ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(b, "")) : (h = parseFloat(p), m = g ? p.replace(b, "") : ""), "" === m && (m = o in n ? n[o] : d), p = h || 0 === h ? (_ ? h + u : h) + m : t[o], d !== m && "" !== m && (h || 0 === h) && u && (u = J(e, o, u, d), "%" === m ? (u /= J(e, o, 100, "%") / 100, !0 !== t.strictUnits && (f = u + "%")) : "em" === m ? u /= J(e, o, 1, "em") : "px" !== m && (h = J(e, o, h, m), m = "px"), _ && (h || 0 === h) && (p = h + u + m)), _ && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== v[o] && (p || "NaN" != p + "" && null != p) ? (i = new ge(v, o, h || u || 0, 0, i, -1, o, !1, 0, f, p)).xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f : V("invalid " + o + " tween value: " + t[o]) : (i = new ge(v, o, u, h - u, i, 0, o, !1 !== c && ("px" === m || "zIndex" === o), 0, f, p)).xs0 = m) : i = ve(v, o, f, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                return i
            }, u.setRatio = function(e) {
                var t, i, n, r = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (t = r.c * e + r.s, r.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (n = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + t + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                            else r.t[r.p] = t + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (t = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + t + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = t + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(e);
                            r = r._next
                        }
            }, u._enableTransforms = function(e) {
                this._transform = this._transform || He(this._target, r, !0), this._transformType = this._transform.svg && Te || !e && 3 !== this._transformType ? 2 : 3
            };
            var Ge = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            u._addLazySet = function(e, t, i) {
                var n = this._firstPT = new ge(e, t, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Ge, n.data = this
            }, u._linkCSSP = function(e, t, i, n) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
            }, u._kill = function(t) {
                var i, n, r, s = t;
                if (t.autoAlpha || t.alpha) {
                    for (n in s = {}, t) s[n] = t[n];
                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                }
                return t.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
            };
            var Qe = function(e, t, i) {
                var n, r, s, o;
                if (e.slice)
                    for (r = e.length; --r > -1;) Qe(e[r], t, i);
                else
                    for (r = (n = e.childNodes).length; --r > -1;) o = (s = n[r]).type, s.style && (t.push(ee(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Qe(s, t, i)
            };
            return o.cascadeTo = function(e, i, n) {
                var r, s, o, a, l = t.to(e, i, n),
                    u = [l],
                    c = [],
                    h = [],
                    f = [],
                    p = t._internals.reservedProps;
                for (e = l._targets || l.target, Qe(e, c, f), l.render(i, !0, !0), Qe(e, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                    if ((s = te(f[r], c[r], h[r])).firstMPT) {
                        for (o in s = s.difs, n) p[o] && (s[o] = n[o]);
                        for (o in a = {}, s) a[o] = c[r][o];
                        u.push(t.fromTo(f[r], i, a, s))
                    } return u
            }, e.activate([o]), o
        }, !0), (i = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(e, t, i) {
                return this._tween = i, !0
            }
        }).prototype)._onInitAllProps = function() {
            for (var e, t, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;) o[r[s]] = 1;
            for (s = r.length; --s > -1;)
                for (e = r[s], t = n._firstPT; t;) i = t._next, t.pg ? t.t._roundProps(o, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i : n._firstPT === t && (n._firstPT = i), t._next = t._prev = null, n._propLookup[e] = a), t = i;
            return !1
        }, i._add = function(e, t, i, n) {
            this._addTween(e, t, i, i + n, t, !0), this._overwriteProps.push(t)
        }, e = /(?:\d|\-|\+|=|#|\.)*/g, t = /[A-Za-z%]/g, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.4.0",
            init: function(i, n) {
                var r, s, o, a, l;
                if ("function" != typeof i.setAttribute) return !1;
                for (r in this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {}, n) this._start[r] = this._proxy[r] = s = i.getAttribute(r) + "", this._end[r] = o = n[r] + "", this._suffix[r] = a = t.test(o) ? o.replace(e, "") : t.test(s) ? s.replace(e, "") : "", a && -1 !== (l = o.indexOf(a)) && (o = o.substr(0, l)), this._addTween(this._proxy, r, parseFloat(s), o, r) || (this._suffix[r] = ""), "=" === o.charAt(1) && (this._end[r] = this._firstPT.s + this._firstPT.c + a), this._overwriteProps.push(r);
                return !0
            },
            set: function(e) {
                this._super.setRatio.call(this, e);
                for (var t, i = this._overwriteProps, n = i.length, r = 1 === e ? this._end : e ? this._proxy : this._start, s = r === this._proxy; --n > -1;) t = i[n], this._target.setAttribute(t, r[t] + (s ? this._suffix[t] : ""))
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.2.1",
            API: 2,
            init: function(e, t) {
                "object" != typeof t && (t = {
                    rotation: t
                }), this.finals = {};
                var i, n, r, s, o, a = !0 === t.useRadians ? 2 * Math.PI : 360;
                for (i in t) "useRadians" !== i && (n = (o = (t[i] + "").split("_"))[0], r = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = (this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - r, o.length && (-1 !== (n = o.join("_")).indexOf("short") && ((s %= a) !== s % (a / 2) && (s = 0 > s ? s + a : s - a)), -1 !== n.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * a) % a - (0 | s / a) * a : -1 !== n.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * a) % a - (0 | s / a) * a)), (s > 1e-6 || -1e-6 > s) && (this._addTween(e, i, r, r + s, i), this._overwriteProps.push(i)));
                return !0
            },
            set: function(e) {
                var t;
                if (1 !== e) this._super.setRatio.call(this, e);
                else
                    for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
            var t, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                s = r.com.greensock,
                o = 2 * Math.PI,
                a = Math.PI / 2,
                l = s._class,
                u = function(t, i) {
                    var n = l("easing." + t, function() {}, !0),
                        r = n.prototype = new e;
                    return r.constructor = n, r.getRatio = i, n
                },
                c = e.register || function() {},
                h = function(e, t, i, n) {
                    var r = l("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return c(r, e), r
                },
                f = function(e, t, i) {
                    this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                },
                p = function(t, i) {
                    var n = l("easing." + t, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        r = n.prototype = new e;
                    return r.constructor = n, r.getRatio = i, r.config = function(e) {
                        return new n(e)
                    }, n
                },
                d = h("Back", p("BackOut", function(e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), p("BackIn", function(e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), p("BackInOut", function(e) {
                    return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                m = l("easing.SlowMo", function(e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                g = m.prototype = new e;
            return g.constructor = m, g.getRatio = function(e) {
                var t = e + (.5 - e) * this._p;
                return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, m.ease = new m(.7, .7), g.config = m.config = function(e, t, i) {
                return new m(e, t, i)
            }, (g = (t = l("easing.SteppedEase", function(e) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
            }, !0)).prototype = new e).constructor = t, g.getRatio = function(e) {
                return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
            }, g.config = t.config = function(e) {
                return new t(e)
            }, (g = (i = l("easing.RoughEase", function(t) {
                for (var i, n, r, s, o, a, l = (t = t || {}).taper || "none", u = [], c = 0, h = 0 | (t.points || 20), p = h, d = !1 !== t.randomize, m = !0 === t.clamp, g = t.template instanceof e ? t.template : null, _ = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) i = d ? Math.random() : 1 / h * p, n = g ? g.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? r = (s = 1 - i) * s * _ : "in" === l ? r = i * i * _ : .5 > i ? r = .5 * (s = 2 * i) * s * _ : r = .5 * (s = 2 * (1 - i)) * s * _, d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                    x: i,
                    y: n
                };
                for (u.sort(function(e, t) {
                        return e.x - t.x
                    }), a = new f(1, 1, null), p = h; --p > -1;) o = u[p], a = new f(o.x, o.y, a);
                this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new e).constructor = i, g.getRatio = function(e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && t.t >= e;) t = t.prev;
                return this._prev = t, t.v + (e - t.t) / t.gap * t.c
            }, g.config = function(e) {
                return new i(e)
            }, i.ease = new i, h("Bounce", u("BounceOut", function(e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), u("BounceIn", function(e) {
                return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), u("BounceInOut", function(e) {
                var t = .5 > e;
                return e = 1 / 2.75 > (e = t ? 1 - 2 * e : 2 * e - 1) ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), h("Circ", u("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), u("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), u("CircInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), h("Elastic", (n = function(t, i, n) {
                var r = l("easing." + t, function(e, t) {
                        this._p1 = e >= 1 ? e : 1, this._p2 = (t || n) / (1 > e ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                    }, !0),
                    s = r.prototype = new e;
                return s.constructor = r, s.getRatio = i, s.config = function(e, t) {
                    return new r(e, t)
                }, r
            })("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function(e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
            }, .3), n("ElasticInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) + 1
            }, .45)), h("Expo", u("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }), u("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), u("ExpoInOut", function(e) {
                return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), h("Sine", u("SineOut", function(e) {
                return Math.sin(e * a)
            }), u("SineIn", function(e) {
                return 1 - Math.cos(e * a)
            }), u("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), l("easing.EaseLookup", {
                find: function(t) {
                    return e.map[t]
                }
            }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), d
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "use strict";
        var i, n, r = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!r.TweenLite) {
            var s, o, a, l, u, c = function(e) {
                    var t, i = e.split("."),
                        n = r;
                    for (t = 0; i.length > t; t++) n[i[t]] = n = n[i[t]] || {};
                    return n
                },
                h = c("com.greensock"),
                f = 1e-10,
                p = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                d = function() {},
                m = (i = Object.prototype.toString, n = i.call([]), function(e) {
                    return null != e && (e instanceof Array || "object" == typeof e && !!e.push && i.call(e) === n)
                }),
                g = {},
                _ = function(t, i, n, s) {
                    this.sc = g[t] ? g[t].sc : [], g[t] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(a) {
                        for (var l, u, h, f, p = i.length, d = p; --p > -1;)(l = g[i[p]] || new _(i[p], [])).gsClass ? (o[p] = l.gsClass, d--) : a && l.sc.push(this);
                        if (0 === d && n)
                            for (h = (u = ("com.greensock." + t).split(".")).pop(), f = c(u.join("."))[h] = this.gsClass = n.apply(n, o), s && (r[h] = f, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + t.split(".").pop(), [], function() {
                                    return f
                                }) : "TweenMax" === t && "undefined" != typeof module && module.exports && (module.exports = f)), p = 0; this.sc.length > p; p++) this.sc[p].check()
                    }, this.check(!0)
                },
                v = e._gsDefine = function(e, t, i, n) {
                    return new _(e, t, i, n)
                },
                y = h._class = function(e, t, i) {
                    return t = t || function() {}, v(e, [], function() {
                        return t
                    }, i), t
                };
            v.globals = r;
            var w = [0, 0, 1, 1],
                x = [],
                b = y("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? w.concat(t) : w
                }, !0),
                T = b.map = {},
                P = b.register = function(e, t, i, n) {
                    for (var r, s, o, a, l = t.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (s = l[u], r = n ? y("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; --o > -1;) a = c[o], T[s + "." + a] = T[a + s] = r[a] = e.getRatio ? e : e[a] || new e
                };
            for ((a = b.prototype)._calcEnd = !1, a.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
                }, o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) a = s[o] + ",Power" + o, P(new b(null, null, 1, o), a, "easeOut", !0), P(new b(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), P(new b(null, null, 3, o), a, "easeInOut");
            T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut;
            var C = y("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            (a = C.prototype).addEventListener = function(e, t, i, n, r) {
                r = r || 0;
                var s, o, a = this._listeners[e],
                    c = 0;
                for (null == a && (this._listeners[e] = a = []), o = a.length; --o > -1;)(s = a[o]).c === t && s.s === i ? a.splice(o, 1) : 0 === c && r > s.pr && (c = o + 1);
                a.splice(c, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: r
                }), this !== l || u || l.wake()
            }, a.removeEventListener = function(e, t) {
                var i, n = this._listeners[e];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === t) return void n.splice(i, 1)
            }, a.dispatchEvent = function(e) {
                var t, i, n, r = this._listeners[e];
                if (r)
                    for (t = r.length, i = this._eventTarget; --t > -1;)(n = r[t]) && (n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = e.requestAnimationFrame,
                O = e.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                $ = S();
            for (o = (s = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !k;) k = e[s[o] + "RequestAnimationFrame"], O = e[s[o] + "CancelAnimationFrame"] || e[s[o] + "CancelRequestAnimationFrame"];
            y("Ticker", function(e, t) {
                var i, n, r, s, o, a = this,
                    c = S(),
                    h = !1 !== t && k,
                    f = 500,
                    p = 33,
                    m = function(e) {
                        var t, l, u = S() - $;
                        u > f && (c += u - p), $ += u, a.time = ($ - c) / 1e3, t = a.time - o, (!i || t > 0 || !0 === e) && (a.frame++, o += t + (t >= s ? .004 : s - t), l = !0), !0 !== e && (r = n(m)), l && a.dispatchEvent("tick")
                    };
                C.call(a), a.time = a.frame = 0, a.tick = function() {
                    m(!0)
                }, a.lagSmoothing = function(e, t) {
                    f = e || 1e10, p = Math.min(t, f, 0)
                }, a.sleep = function() {
                    null != r && (h && O ? O(r) : clearTimeout(r), n = d, r = null, a === l && (u = !1))
                }, a.wake = function() {
                    null !== r ? a.sleep() : a.frame > 10 && ($ = S() - f + 5), n = 0 === i ? d : h && k ? k : function(e) {
                        return setTimeout(e, 0 | 1e3 * (o - a.time) + 1)
                    }, a === l && (u = !0), m(2)
                }, a.fps = function(e) {
                    return arguments.length ? (s = 1 / ((i = e) || 60), o = this.time + s, void a.wake()) : i
                }, a.useRAF = function(e) {
                    return arguments.length ? (a.sleep(), h = e, void a.fps(i)) : h
                }, a.fps(e), setTimeout(function() {
                    h && 5 > a.frame && a.useRAF(!1)
                }, 1500)
            }), (a = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
            var A = y("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, X) {
                    u || l.wake();
                    var i = this.vars.useFrames ? B : X;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = A.ticker = new h.Ticker, (a = A.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var D = function() {
                u && S() - $ > 2e3 && l.wake(), setTimeout(D, 2e3)
            };
            D(), a.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, a.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, a.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, a.seek = function(e, t) {
                return this.totalTime(Number(e), !1 !== t)
            }, a.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
            }, a.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, a.render = function() {}, a.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, a.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && i + this.totalDuration() / this._timeScale > e
            }, a._enabled = function(e, t) {
                return u || l.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function() {
                return this._enabled(!1, !1)
            }, a.kill = function(e, t) {
                return this._kill(e, t), this
            }, a._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, a._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, a._callback = function(e) {
                var t = this.vars;
                t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || x)
            }, a.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, a.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, a.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, a.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, a.totalTime = function(e, t, i) {
                if (u || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), I.length && V())
                }
                return this
            }, a.progress = a.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, a.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, a.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, a.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || f, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, a.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, a.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, i, n = this._timeline;
                return e != this._paused && n && (u || e || l.wake(), i = (t = n.rawTime()) - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, !0, !0)), this._gc && !e && this._enabled(!0, !1), this
            };
            var R = y("core.SimpleTimeline", function(e) {
                A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (a = R.prototype = new A).constructor = R, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(e, t) {
                var i, n;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = e._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
            }, a._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, a.render = function(e, t, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; r;) n = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = n
            }, a.rawTime = function() {
                return u || l.wake(), this._totalTime
            };
            var E = y("TweenLite", function(t, i, n) {
                    if (A.call(this, i, n), this.render = E.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : E.selector(t) || t;
                    var r, s, o, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? H[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l], (a || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                        for (this._targets = o = p(t), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++)(s = o[r]) ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[r] = Y(s, this, !1), 1 === l && this._siblings[r].length > 1 && G(s, this, null, 1, this._siblings[r])) : "string" == typeof(s = o[r--] = E.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Y(t, this, !1), 1 === l && this._siblings.length > 1 && G(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -f, this.render(-this._delay))
                }, !0),
                M = function(t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                };
            (a = E.prototype = new A).constructor = E, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, E.version = "1.17.0", E.defaultEase = a._ease = new b(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = l, E.autoSleep = 120, E.lagSmoothing = function(e, t) {
                l.lagSmoothing(e, t)
            }, E.selector = e.$ || e.jQuery || function(t) {
                var i = e.$ || e.jQuery;
                return i ? (E.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var I = [],
                N = {},
                L = E._internals = {
                    isArray: m,
                    isSelector: M,
                    lazyTweens: I
                },
                j = E._plugins = {},
                F = L.tweenLookup = {},
                q = 0,
                z = L.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                H = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                B = A._rootFramesTimeline = new R,
                X = A._rootTimeline = new R,
                W = 30,
                V = L.lazyRender = function() {
                    var e, t = I.length;
                    for (N = {}; --t > -1;)(e = I[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    I.length = 0
                };
            X._startTime = l.time, B._startTime = l.frame, X._active = B._active = !0, setTimeout(V, 1), A._updateRoot = E.render = function() {
                var e, t, i;
                if (I.length && V(), X.render((l.time - X._startTime) * X._timeScale, !1, !1), B.render((l.frame - B._startTime) * B._timeScale, !1, !1), I.length && V(), l.frame >= W) {
                    for (i in W = l.frame + (parseInt(E.autoSleep, 10) || 120), F) {
                        for (e = (t = F[i].tweens).length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete F[i]
                    }
                    if ((!(i = X._first) || i._paused) && E.autoSleep && !B._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", A._updateRoot);
            var Y = function(e, t, i) {
                    var n, r, s = e._gsTweenID;
                    if (F[s || (e._gsTweenID = s = "t" + q++)] || (F[s] = {
                            target: e,
                            tweens: []
                        }), t && ((n = F[s].tweens)[r = n.length] = t, i))
                        for (; --r > -1;) n[r] === t && n.splice(r, 1);
                    return F[s].tweens
                },
                U = function(e, t, i, n) {
                    var r, s, o = e.vars.onOverwrite;
                    return o && (r = o(e, t, i, n)), (o = E.onOverwrite) && (s = o(e, t, i, n)), !1 !== r && !1 !== s
                },
                G = function(e, t, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== t) a._gc || a._kill(null, e, t) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var u, c = t._startTime + f,
                        h = [],
                        p = 0,
                        d = 0 === t._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (u = u || Q(t, 0, d), 0 === Q(a, u, d) && (h[p++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && 2e-10 >= c - a._startTime || (h[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = h[s], 2 === n && a._kill(i, e, t) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !U(a, t)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        } return o
                },
                Q = function(e, t, i) {
                    for (var n = e._timeline, r = n._timeScale, s = e._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return (s /= r) > t ? s - t : i && s === t || !e._initted && 2 * f > s - t ? f : (s += e.totalDuration() / e._timeScale / r) > t + f ? 0 : s - t - f
                };
            a._init = function() {
                var e, t, i, n, r, s = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    u = s.ease;
                if (s.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== s.lazy, r.startAt = r.delay = null, this._startAt = E.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (l = !1), i = {}, s) z[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== s.lazy, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : T[u] || E.defaultEase : E.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (t && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, a._initProps = function(t, i, n, r) {
                var s, o, a, l, u, c;
                if (null == t) return !1;
                for (s in N[t._gsTweenID] && V(), this.vars.css || t.style && t !== e && t.nodeType && j.css && !1 !== this.vars.autoCSS && function(e, t) {
                        var i, n = {};
                        for (i in e) z[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                        e.css = n
                    }(this.vars, t), this.vars) {
                    if (c = this.vars[s], z[s]) c && (c instanceof Array || c.push && m(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (j[s] && (l = new j[s])._onInitTween(t, this.vars[s], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[s] = u = {
                        _next: this._firstPT,
                        t: t,
                        p: s,
                        f: "function" == typeof t[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return r && this._kill(r, t) ? this._initProps(t, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && G(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[t._gsTweenID] = !0), a)
            }, a.render = function(e, t, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > u || u === f && "isPause" !== this.data) && u !== e && (i = !0, u > f && (r = "onReverseComplete")), this._rawPrevTime = o = !t || e || u === e ? e : f);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== f || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !t || e || u === e ? e : f)), this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var c = e / l,
                        h = this._easeType,
                        p = this._easePower;
                    (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > e / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, I.push(this), void(this._lazy = [e, t]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > e && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0))
                }
            }, a._kill = function(e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : E.selector(t) || t;
                var n, r, s, o, a, l, u, c, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((m(t) || M(t)) && "number" != typeof t[0])
                    for (n = t.length; --n > -1;) this._kill(e, t[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (t === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = e || a, c = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (h || (h = []), h.push(s));
                            if ((h || !e) && !U(this, i, t, h)) return !1
                        }
                        for (s in u)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, a.invalidate = function() {
                return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -f, this.render(-this._delay)), this
            }, a._enabled = function(e, t) {
                if (u || l.wake(), e && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Y(n[i], this, !0);
                    else this._siblings = Y(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }, E.to = function(e, t, i) {
                return new E(e, t, i)
            }, E.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(e, t, i)
            }, E.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(e, t, n)
            }, E.delayedCall = function(e, t, i, n, r) {
                return new E(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, E.set = function(e, t) {
                return new E(e, 0, t)
            }, E.getTweensOf = function(e, t) {
                if (null == e) return [];
                var i, n, r, s;
                if (e = "string" != typeof e ? e : E.selector(e) || e, (m(e) || M(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; --i > -1;) n = n.concat(E.getTweensOf(e[i], t));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (i = (n = Y(e).concat()).length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, E.killTweensOf = E.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = E.getTweensOf(e, t), r = n.length; --r > -1;) n[r]._kill(i, e)
            };
            var Z = y("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = Z.prototype
            }, !0);
            if (a = Z.prototype, Z.version = "1.10.1", Z.API = 2, a._firstPT = null, a._addTween = function(e, t, i, n, r, s) {
                    var o, a;
                    return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: i,
                        c: o,
                        f: "function" == typeof e[t],
                        n: r || t,
                        r: s
                    }, a._next && (a._next._prev = a), a) : void 0
                }, a.setRatio = function(e) {
                    for (var t, i = this._firstPT; i;) t = i.c * e + i.s, i.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), i.f ? i.t[i.p](t) : i.t[i.p] = t, i = i._next
                }, a._kill = function(e) {
                    var t, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, a._roundProps = function(e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, E._onPluginEvent = function(e, t) {
                    var i, n, r, s, o, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = t._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
                    return i
                }, Z.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === Z.API && (j[(new e[t])._propName] = e[t]);
                    return !0
                }, v.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        n = e.priority || 0,
                        r = e.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Z.call(this, i, n), this._overwriteProps = r || []
                        }, !0 === e.global),
                        a = o.prototype = new Z(i);
                    for (t in a.constructor = o, o.API = e.API, s) "function" == typeof e[t] && (a[s[t]] = e[t]);
                    return o.version = e.version, Z.activate([o]), o
                }, s = e._gsQueue) {
                for (o = 0; s.length > o; o++) s[o]();
                for (a in g) g[a].func || e.console.log("GSAP encountered missing dependency: com.greensock." + a)
            }
            u = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
    function(e) {
        "use strict";
        var t = e.GreenSockGlobals || e,
            i = function(e) {
                var i, n = e.split("."),
                    r = t;
                for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
                return r
            }("com.greensock.utils"),
            n = function(e) {
                var t = e.nodeType,
                    i = "";
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += n(e)
                } else if (3 === t || 4 === t) return e.nodeValue;
                return i
            },
            r = document,
            s = r.defaultView ? r.defaultView.getComputedStyle : function() {},
            o = /([A-Z])/g,
            a = function(e, t, i, n) {
                var r;
                return (i = i || s(e, null)) ? r = (e = i.getPropertyValue(t.replace(o, "-$1").toLowerCase())) || i.length ? e : i[t] : e.currentStyle && (r = (i = e.currentStyle)[t]), n ? r : parseInt(r, 10) || 0
            },
            l = function(e) {
                return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
            },
            u = ")eefec303079ad17405c",
            c = /(?:<br>|<br\/>|<br \/>)/gi,
            h = "<div style='position:relative;display:inline-block;" + (r.all && !r.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
            f = function(e) {
                var t = -1 !== (e = e || "").indexOf("++"),
                    i = 1;
                return t && (e = e.split("++").join("")),
                    function() {
                        return h + (e ? " class='" + e + (t ? i++ : "") + "'>" : ">")
                    }
            },
            p = i.SplitText = t.SplitText = function(e, t) {
                if ("string" == typeof e && (e = p.selector(e)), !e) throw "cannot split a null element.";
                this.elements = l(e) ? function(e) {
                    var t, i, n, r = [],
                        s = e.length;
                    for (t = 0; s > t; t++)
                        if (i = e[t], l(i))
                            for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                        else r.push(i);
                    return r
                }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
            },
            d = function(e, t, i) {
                var n = e.nodeType;
                if (1 === n || 9 === n || 11 === n)
                    for (e = e.firstChild; e; e = e.nextSibling) d(e, t, i);
                else(3 === n || 4 === n) && (e.nodeValue = e.nodeValue.split(t).join(i))
            },
            m = function(e, t) {
                for (var i = t.length; --i > -1;) e.push(t[i])
            },
            g = function(e, t, i, o, l) {
                c.test(e.innerHTML) && (e.innerHTML = e.innerHTML.replace(c, u));
                var h, p, g, _, v, y, w, x, b, T, P, C, k, O, S = n(e),
                    $ = t.type || t.split || "chars,words,lines",
                    A = -1 !== $.indexOf("lines") ? [] : null,
                    D = -1 !== $.indexOf("words"),
                    R = -1 !== $.indexOf("chars"),
                    E = "absolute" === t.position || !0 === t.absolute,
                    M = E ? "&#173; " : " ",
                    I = -999,
                    N = s(e),
                    L = a(e, "paddingLeft", N),
                    j = a(e, "borderBottomWidth", N) + a(e, "borderTopWidth", N),
                    F = a(e, "borderLeftWidth", N) + a(e, "borderRightWidth", N),
                    q = a(e, "paddingTop", N) + a(e, "paddingBottom", N),
                    z = a(e, "paddingLeft", N) + a(e, "paddingRight", N),
                    H = a(e, "textAlign", N, !0),
                    B = e.clientHeight,
                    X = e.clientWidth,
                    W = "</div>",
                    V = f(t.wordsClass),
                    Y = f(t.charsClass),
                    U = -1 !== (t.linesClass || "").indexOf("++"),
                    G = t.linesClass,
                    Q = -1 !== S.indexOf("<"),
                    Z = !0,
                    J = [],
                    K = [],
                    ee = [];
                for (U && (G = G.split("++").join("")), Q && (S = S.split("<").join("{{LT}}")), h = S.length, _ = V(), v = 0; h > v; v++)
                    if (")" === (w = S.charAt(v)) && S.substr(v, 20) === u) _ += (Z ? W : "") + "<BR/>", Z = !1, v !== h - 20 && S.substr(v + 20, 20) !== u && (_ += " " + V(), Z = !0), v += 19;
                    else if (" " === w && " " !== S.charAt(v - 1) && v !== h - 1 && S.substr(v - 20, 20) !== u) {
                    for (_ += Z ? W : "", Z = !1;
                        " " === S.charAt(v + 1);) _ += M, v++;
                    (")" !== S.charAt(v + 1) || S.substr(v + 1, 20) !== u) && (_ += M + V(), Z = !0)
                } else "{" === w && "{{LT}}" === S.substr(v, 6) ? (_ += R ? Y() + "{{LT}}</div>" : "{{LT}}", v += 5) : _ += R && " " !== w ? Y() + w + "</div>" : w;
                for (e.innerHTML = _ + (Z ? W : ""), Q && d(e, "{{LT}}", "<"), h = (y = e.getElementsByTagName("*")).length, x = [], v = 0; h > v; v++) x[v] = y[v];
                if (A || E)
                    for (v = 0; h > v; v++)((g = (b = x[v]).parentNode === e) || E || R && !D) && (T = b.offsetTop, A && g && T !== I && "BR" !== b.nodeName && (p = [], A.push(p), I = T), E && (b._x = b.offsetLeft, b._y = T, b._w = b.offsetWidth, b._h = b.offsetHeight), A && (D !== g && R || (p.push(b), b._x -= L), g && v && (x[v - 1]._wordEnd = !0), "BR" === b.nodeName && b.nextSibling && "BR" === b.nextSibling.nodeName && A.push([])));
                for (v = 0; h > v; v++) g = (b = x[v]).parentNode === e, "BR" !== b.nodeName ? (E && (C = b.style, D || g || (b._x += b.parentNode._x, b._y += b.parentNode._y), C.left = b._x + "px", C.top = b._y + "px", C.position = "absolute", C.display = "block", C.width = b._w + 1 + "px", C.height = b._h + "px"), D ? g && "" !== b.innerHTML ? K.push(b) : R && J.push(b) : g ? (e.removeChild(b), x.splice(v--, 1), h--) : !g && R && (T = !A && !E && b.nextSibling, e.appendChild(b), T || e.appendChild(r.createTextNode(" ")), J.push(b))) : A || E ? (e.removeChild(b), x.splice(v--, 1), h--) : D || e.appendChild(b);
                if (A) {
                    for (E && (P = r.createElement("div"), e.appendChild(P), k = P.offsetWidth + "px", T = P.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(P)), C = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                    for (O = !E || !D && !R, v = 0; v < A.length; v++) {
                        for (p = A[v], (P = r.createElement("div")).style.cssText = "display:block;text-align:" + H + ";position:" + (E ? "absolute;" : "relative;"), G && (P.className = G + (U ? v + 1 : "")), ee.push(P), h = p.length, y = 0; h > y; y++) "BR" !== p[y].nodeName && (b = p[y], P.appendChild(b), O && (b._wordEnd || D) && P.appendChild(r.createTextNode(" ")), E && (0 === y && (P.style.top = b._y + "px", P.style.left = L + T + "px"), b.style.top = "0px", T && (b.style.left = b._x - T + "px")));
                        0 === h && (P.innerHTML = "&nbsp;"), D || R || (P.innerHTML = n(P).split(String.fromCharCode(160)).join(" ")), E && (P.style.width = k, P.style.height = b._h + "px"), e.appendChild(P)
                    }
                    e.style.cssText = C
                }
                E && (B > e.clientHeight && (e.style.height = B - q + "px", e.clientHeight < B && (e.style.height = B + j + "px")), X > e.clientWidth && (e.style.width = X - z + "px", e.clientWidth < X && (e.style.width = X + F + "px"))), m(i, J), m(o, K), m(l, ee)
            },
            _ = p.prototype;
        _.split = function(e) {
            this.isSplit && this.revert(), this.vars = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var t = this.elements.length; --t > -1;) this._originals[t] = this.elements[t].innerHTML, g(this.elements[t], this.vars, this.chars, this.words, this.lines);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, _.revert = function() {
            if (!this._originals) throw "revert() call wasn't scoped properly.";
            for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, p.selector = e.$ || e.jQuery || function(t) {
            var i = e.$ || e.jQuery;
            return i ? (p.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        }, p.version = "0.3.4"
    }(_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).SplitText
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (module.exports = t())
    }();



    
var onLoadImg = function(e, t) {
    var i = !1;

    function n() {
        i || (i = !i, t())
    }
    e.on("load", function() {
        n()
    }).each(function() {
        (this.complete || void 0 === this.complete) && n()
    })
};
jQuery.extend(jQuery.easing, {
    easeInOutCubic: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    }
});
var _throttle = function(e, t) {
        var i, n;
        return function() {
            var r = this,
                s = +new Date,
                o = arguments;
            i && s < i + t ? (clearTimeout(n), n = setTimeout(function() {
                i = s, e.apply(r, o)
            }, t)) : (i = s, e.apply(r, o))
        }
    },
    _debounce = function(e, t, i) {
        var n;
        return function() {
            var r = this,
                s = arguments,
                o = i && !n;
            clearTimeout(n), n = setTimeout(function() {
                n = null, i || e.apply(r, s)
            }, t), o && e.apply(r, s)
        }
    };
$.expr[":"].nocontent = function(e, t, i, n) {
    return !$.trim($(e).text()).length && !$(e).children().length
};
var path = function(e) {
    var t = e;
    this.init = function() {
        t.each(function() {
            var e = this.getTotalLength();
            $(this).css({
                "stroke-dashoffset": e,
                "stroke-dasharray": e + " " + e
            })
        })
    }, this.draw = function(e) {
        e = e || 2;
        t.each(function() {
            TweenMax.to($(this), e, {
                strokeDashoffset: 0,
                ease: Power3.easeOut
            })
        })
    }
};

function shuffle(e) {
    var t, i, n;
    for (n = e.length; n; n--) t = Math.floor(Math.random() * n), i = e[n - 1], e[n - 1] = e[t], e[t] = i
}

function getTranslateY(e) {
    var t = window.getComputedStyle(e.get(0)),
        i = t.getPropertyValue("-webkit-transform") || t.getPropertyValue("-moz-transform") || t.getPropertyValue("-ms-transform") || t.getPropertyValue("-o-transform") || t.getPropertyValue("transform");
    "none" === i && (i = "matrix(0,0,0,0,0)");
    var n = i.match(/([-+]?[\d\.]+)/g);
    return n[14] || n[5] || 0
}
jQuery.fn.reverse = [].reverse, String.prototype.toCamel = function() {
    var e = this.replace(/(\-[a-z])/g, function(e) {
        return e.toUpperCase().replace("-", "")
    });
    return e = (e = e.replace(/(\/.*)/g, "")).replace(/(^.){1}/g, function(e) {
        return e.toUpperCase()
    })
}, String.prototype.getHash = function() {
    var e = this.replace(AWBP.host, "").replace(/^\//g, "").replace(/\/$/g, "");
    return "" == e && (e = "home"), e
}, String.prototype.trimSlash = function() {
    return this.replace(/^\/+|\/+$/gm, "")
}, String.prototype.trimHttp = function() {
    return this.replace("http://", "")
}, String.prototype.addEndSlash = function() {
    return -1 != this.indexOf("?s=") ? this : (this + "/").replace(/\/\/+$/gm, "/")
};
var tools = function() {
        var e = IEVersion = !1,
            t = function() {
                $("body").on("mousedown", "img", function() {
                    return !1
                })
            },
            i = function() {
                return $(window).width() >= 992
            },
            n = function() {
                return $(window).width() < 992 && $(window).width() >= 768
            },
            r = function() {
                return $(window).width() < 768
            },
            s = function() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
            },
            o = function() {
                return navigator.userAgent.toLowerCase().indexOf("android") > -1
            },
            a = function() {
                var e = !1;
                return (navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/iemobile/i) || navigator.userAgent.match(/WPDesktop/i)) && (e = !0), e
            },
            l = function() {
                var e = !1;
                return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|android|silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent.toLowerCase()) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0), e
            };
        return {
            init: function() {
                t()
            },
            isEdge: function() {
                var e = window.navigator.userAgent,
                    t = e.indexOf("MSIE ");
                if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
                if (e.indexOf("Trident/") > 0) {
                    var i = e.indexOf("rv:");
                    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10)
                }
                var n = e.indexOf("Edge/");
                return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
            },
            isDesktop: i,
            isTablet: n,
            isSmartphone: r,
            isIOS: s,
            isAndroid: o,
            isWindowsPhone: a,
            isSomeRandomMobile: l,
            isSomeRandomMobile: l,
            simplifiedVersion: function() {
                return IEVersion = function() {
                    var t = -1;
                    if ("Microsoft Internet Explorer" == navigator.appName) {
                        var i = navigator.userAgent;
                        null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(i) && (t = parseFloat(RegExp.$1))
                    } else "Netscape" == navigator.appName && (i = navigator.userAgent, null != new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(i) && (t = parseFloat(RegExp.$1)));
                    return -1 != t && (e = !0), t
                }(), !!(!i() || e && IEVersion < 10 || (t = !1, (s() || o() || a() || l()) && (t = !0), t) || l());
                var t
            },
            clipPathPolygonSupport: function() {
                for (var e = "clipPath", t = ["webkit", "moz", "ms", "o"], i = [e], n = document.createElement("testelement"), r = 0, s = t.length; r < s; r++) {
                    var o = t[r] + e.charAt(0).toUpperCase() + e.slice(1);
                    i.push(o)
                }
                for (r = 0, s = i.length; r < s; r++) {
                    var a = i[r];
                    if ("" === n.style[a] && (n.style[a] = "polygon(50% 0%, 0% 100%, 100% 100%)", "" !== n.style[a])) return !0
                }
                return !1
            },
            clipPathInsetSupport: function() {
                for (var e = "clipPath", t = ["webkit", "moz", "ms", "o"], i = [e], n = document.createElement("testelement"), r = 0, s = t.length; r < s; r++) {
                    var o = t[r] + e.charAt(0).toUpperCase() + e.slice(1);
                    i.push(o)
                }
                for (r = 0, s = i.length; r < s; r++) {
                    var a = i[r];
                    if ("" === n.style[a] && (n.style[a] = "inset(0 0 100% 0)", "" !== n.style[a])) return !0
                }
                return !1
            }
        }
    }(),
    site = function() {
        var e = [],
            t = null,
            i = [],
            n = !1,
            r = 0,
            s = !1,
            o = 0,
            a = !1,
            l = !1,
            u = !0,
            c = !0,
            h = !0,
            f = null,
            p = !1;
        tools.simplifiedVersion() && (p = !0);
        var d = !0;
        tools.isTablet(), tools.isSmartphone();
        var m = function() {
                t = $(".page-container").attr("data-slug").toCamel(), $.inArray(t, e) < 0 && e.push(t);
                for (var i = e.length - 1; i >= 0; i--) $("html").removeClass("slug--" + e[i]);
                $("html").addClass("slug--" + t)
            },
            g = function() {
                $(".scroll-parallax").each(function() {
                    var e = $(this),
                        t = e.css("transform");
                    e.css({
                        transform: ""
                    });
                    var i = e.offset().top;
                    e.css({
                        transform: t
                    }), e.attr("data-top", i), e.attr("data-bottom", i + e.outerHeight()), e.attr("data-start", i - $(window).height()), e.attr("data-stop", i + e.outerHeight())
                })
            },
            _ = function() {
                var e = $(window).scrollTop(),                
                    t = function() {                        
                        if (a) {
                            var t = $(".navp--item"),
                                i = $(".navp--item-number"),
                                n = $(window).scrollTop();
                            n < e && (t.reverse(), i.reverse()), e = n, t.each(function(e) {
                                $(this);
                                var i = (e + 1) * (1.35 - .5) / t.length + .5;
                                TweenMax.to($(this), i, {
                                    y: -n,
                                    ease: Power3.easeOut
                                })
                            }), i.each(function(e) {
                                $(this);
                                var t = (e + 1) * (1.35 - .5) / i.length + .5 + .15;
                                TweenMax.to($(this), t, {
                                    y: -n,
                                    ease: Power3.easeOut
                                })
                            })
                        }
                    };
                $(window).on("scroll", function() {
                    requestAnimationFrame(t)
                }), $(window).on("mousemove", function(e) {
                    var t = event.clientY,
                        i = $(window).outerHeight(),
                        n = 100 * t / i,
                        r = $(".menu--list"),
                        s = n / 100 * (r.outerHeight() - i);
                    TweenMax.to(r, 1, {
                        y: -s,
                        ease: Power3.easeOut
                    })
                })
            },
            v = function() {
                var e = $(".scroll-container"),
                    t = function() {
                        if (!a && !l) {
                            scrollTop = $(window).scrollTop();
                            var t = $(window).height();
                            TweenLite.to(e, .75, {
                                y: -scrollTop,
                                ease: Power3.easeOut,
                                force3D: !0
                            }), TweenLite.to($(".marbre"), .75, {
                                y: scrollTop / 4,
                                ease: Power3.easeOut,
                                force3D: !0
                            }), TweenLite.to($(".phead--imgc"), .75, {
                                y: scrollTop / 4,
                                ease: Power3.easeOut,
                                force3D: !0
                            }), TweenLite.to($(".abhead--photo"), .75, {
                                y: scrollTop / 16,
                                ease: Power3.easeOut,
                                force3D: !0
                            }), TweenLite.to($(".abhead--photo-para"), .75, {
                                y: scrollTop / 20,
                                ease: Power3.easeOut,
                                force3D: !0
                            }), $("html").toggleClass("scroll-begin", scrollTop < t - 50);
                            var i = $(".scroll-parallax");
                            null != i && i.each(function() {
                                var e = $(this),
                                    i = e.attr("data-top"),
                                    n = e.attr("data-bottom"),
                                    r = Number(e.attr("para-strength") / 2.5),
                                    s = -t / (5 / r);
                                if (i > scrollTop + 1.3 * t) e.css({
                                    transform: "translate3d(0, " + .5 * -s + "px, 0)"
                                });
                                else if (n < .7 * scrollTop) e.css({
                                    transform: "translate3d(0, " + .5 * s + "px, 0)"
                                });
                                else if (i < scrollTop + 1.3 * t && n > .7 * scrollTop) {
                                    var o = e.attr("data-start"),
                                        a = e.attr("data-stop"),
                                        l = (scrollTop - o) / (a - o),
                                        u = s * (l -= .5);
                                    TweenLite.to(e, .75, {
                                        y: u,
                                        ease: Power3.easeOut,
                                        force3D: !0
                                    })
                                }
                            })
                        }
                    };
                $(window).on("scroll", function() {
                    requestAnimationFrame(t)
                })
            },
            y = function() {
                $(".scroll-container").addClass("is-active")
            },
            w = function() {
                var e = window.location.href;
                P(e, !1)
            },
            x = function(e) {
                p ? $("html, body").stop().animate({
                    scrollTop: e
                }, 600, "easeInOutCubic") : $("html, body").scrollTop(e)
            },
            b = function(e) {
                var t = $(this);
                if (!t.hasClass("js-link")) {
                    var i = t.attr("href"),
                        r = "";
                    if (void 0 !== i && (r = i.trimSlash().trimHttp()), "mailto:" !== i.substring(0, 7) && !t.hasClass("no-link") && void 0 !== i)
                        if ("#" !== r.charAt(0))
                            if (0 === r.indexOf(thishost)) {
                                if (e.preventDefault(), window.location.href.trimSlash().trimHttp() === r) return a ? void $(".burger").trigger("click") : void x(0);
                                var s = t.data("transition");
                                n = null != s && s, t.addClass("js-link"), P(r, !0)
                            } else {
                                // e.preventDefault(), window.open(i, "_blank").focus()
                            }
                    else {
                        if (e.preventDefault(), 1 == r.length) return void x(0);
                        var o = $(r);
                        if (!o.length) return;
                        $("body, html").scrollTop(o.offset().top)
                    }
                }
            },
            T = function(e, t) {
                e = e.replace(/\/$/, "").trimHttp(), i[e] = t
            },
            P = function(e, t) {
                "home-into-single" === n ? E() : "nav-into-single" === n ? I() : "project-into-next" === n ? F() : "project-next" === n || "project-prev" === n ? L() : D();
                var r, s = (r = (r = e).replace(/\/$/, "").trimHttp(), i[r]);
                null == s ? $.get(prodVarUrl + e, function(t) {
                    T(prodVarUrl + e, t), C(t)
                }).fail(function() {
                    console.log("redirect to : " + prodVarUrl + e), window.location = prodVarUrl + e
                }) : C(s), t && history.pushState(null, null, prodVarUrl + e.addEndSlash())
            },
            C = function(e) {
                if (h) {
                    var t = $("<div/>").html(e),
                        i = t.find(".page-container");
                    i.css({
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: "-999em",
                        width: "100%"
                    }), i.insertBefore(".page-container:first"), $("head meta").filter('[name="description"], [name="keywords"], [property="og:image"]').remove(), t.find("meta").filter('[name="description"], [name="keywords"], [property="og:image"]').insertAfter('head meta[name="viewport"]'), $("head title").html(t.find("title").html()), "undefined" != typeof ga && (ga("set", {
                        page: window.location.pathname,
                        title: t.find("title").html()
                    }), ga("send", "pageview")), "home-into-single" === n ? M() : "nav-into-single" === n ? N() : "project-into-next" === n ? q() : "project-prev" === n || "project-next" === n ? j() : (m(), A(), R(), O())
                } else setTimeout(function() {
                    C(e)
                }, 50)
            },
            k = function() {
                if (a) var e = $(".navp");
                else e = $(".scroll-container");
                r = e.outerHeight(), $("body").css({
                    height: r
                })
            },
            O = function() {
                if ($(".page-container").length > 1) {
                    var e = $(".page-container").first(),
                        t = $(".page-container").not(e);
                    e.css({
                        opacity: "",
                        position: "",
                        top: "",
                        left: "",
                        width: ""
                    }), t.css({
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: "-999em",
                        width: "100%"
                    }), $(window).trigger("resize"), S()
                } else $(".page-container").css({
                    opacity: "",
                    position: "",
                    top: "",
                    left: "",
                    width: ""
                })
            },
            S = function() {
                var e = $(".page-container").first();
                $(".page-container").not(e).remove()
            },
            A = function() {
                n = !1, "undefined" != typeof preprod && "undefined" != typeof hostVhostLocal && "undefined" != typeof hostVhost && location.hostname === hostVhostLocal && $('body a[href*="' + hostVhost + '"]').each(function() {
                    var e = $(this),
                        t = e.attr("href").replace(hostVhost, "localhost:3000");
                    e.attr("href", t)
                }), $(".js-link").removeClass("js-link"), $(window).trigger("resize"), s = !1, setTimeout(function() {
                    null == f && (l = !1, $(".preventer").remove()), s = !0, B(), $(window).trigger("scroll"), p || ($(".scroll-parallax").each(function() {
                        var e = $(this).attr("para-strength") || 1;
                        $(this).attr("para-strength", e)
                    }), g())
                }, 50)
            },
            D = function() {
                h = !1, l = !0;
                var e = $("<div/>");
                e.addClass("preventer"), e.appendTo($("body"));
                var i = new TimelineLite;
                if (a) $(".imgpro1").removeClass("active"), c = !0, TweenMax.set($(".page-container"), {
                    alpha: 0
                }), $(".burger").trigger("click"), TweenMax.set($(".scroll-container"), {
                    y: 0
                }), $(window).scrollTop(0), setTimeout(function() {
                    h = !0
                }, 750);
                else {
                    var n = 0;
                    $(window).scrollTop() > 0 && (n = .75, x(0), i.to($(".scroll-container"), .75, {
                        y: 0,
                        ease: Power3.easeInOut
                    }, 0), i.to($(".marbre"), .75, {
                        y: 0,
                        ease: Power3.easeInOut
                    }, 0), i.to($(".phead--imgc"), .75, {
                        y: 0,
                        ease: Power3.easeInOut
                    }, 0), i.to($(".abhead--photo"), .75, {
                        y: 0,
                        ease: Power3.easeInOut
                    }, 0), i.to($(".abhead--photo-para"), .75, {
                        y: 0,
                        ease: Power3.easeInOut
                    }, 0)), "Home" === t ? ($(".imgpro1").removeClass("active"), i.to($(".homehead--bg"), .8, {
                        scaleY: 0,
                        ease: Power3.easeInOut
                    }, n), i.to($(".homehead--marble-in"), .8, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".homehead--marble-in div"), .8, {
                        x: "-80%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".homehead--marble-overlay"), 1, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".homehead .linerev--text"), .8, {
                        y: "101%",
                        alpha: 0,
                        ease: Power4.easeOut
                    }, n), i.to($(".homehead .homehead--scrollto-stroke"), .8, {
                        y: "101%",
                        alpha: 0,
                        ease: Power4.easeOut
                    }, n)) : "About" === t ? (i.to($(".abhead--bg-black"), .8, {
                        y: "-101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".abhead--bg-white"), .8, {
                        y: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".abhead--bigtitle"), .8, {
                        y: "101%",
                        ease: Power2.easeInOut
                    }, n), i.staggerTo($(".abhead--bigtitle-in .split-char"), .8, {
                        y: "180%",
                        x: "50%",
                        rotation: 20,
                        ease: Power3.easeOut
                    }, -.1, n), i.to($(".abhead--marble"), .8, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".abhead--marble > div"), .8, {
                        x: "-80%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".abhead--photo-in"), .8, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".abhead--photo-in > div"), .8, {
                        x: "-90%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".abhead--photo-overlay"), 1, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".abhead .linerev--text"), .8, {
                        y: "101%",
                        alpha: 0,
                        ease: Power4.easeOut
                    }, n), p && i.to($(".abhead + .txtbloc "), .8, {
                        alpha: 0,
                        ease: Power3.easeInOut
                    }, 0)) : "Single" === t && (i.to($(".phead--title .split-char-overflow div"), .75, {
                        y: "120%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".phead--subtitle .split-char-overflow div"), .75, {
                        y: "120%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".phead--shadow"), .75, {
                        alpha: 0,
                        ease: Power1.easeOut
                    }, n), i.to($(".phead--scrollto"), .75, {
                        y: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".phead--bar"), .75, {
                        y: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".phead--imgc"), 1, {
                        y: "101%",
                        ease: Power3.easeInOut
                    }, n), i.to($(".phead--imgc > div"), 1, {
                        y: "-90%",
                        ease: Power3.easeInOut
                    }, n)), i.call(function() {
                        h = !0
                    })
                }
            },
            R = function() {
                var e = new TimelineLite;
                e.fromTo($(".phead--imgc"), .75, {
                    alpha: 0
                }, {
                    alpha: 1,
                    ease: Power3.easeInOut
                }, 0), p && e.fromTo($(".abhead + .txtbloc "), .75, {
                    alpha: 0
                }, {
                    alpha: 1,
                    ease: Power3.easeInOut
                }, 0)
            },
            E = function() {
                s = !1, d = !1, l = !0;
                var e = new TimelineLite,
                    t = $("<div/>");
                t.addClass("preventer"), t.appendTo($("body"));
                var i = $(".js-link"),
                    n = i.parent();
                n.addClass("card__clicked");
                var r = n.position().top;
                if (window.matchMedia("(max-width: 660px)").matches) {
                    var o = ($(window).height() - n.outerHeight()) / 2;
                    r = n.position().top - o
                }
                p ? e.to($(".scroll-container"), 1, {
                    y: -r + $(window).scrollTop(),
                    ease: Power3.easeInOut
                }, 0) : (e.to($(".scroll-container"), 1, {
                    y: -r,
                    ease: Power3.easeInOut
                }, 0), e.to(i.find(".scroll-parallax"), 1, {
                    y: "0",
                    ease: Power3.easeInOut
                }, 0));
                new SplitText(i.find(".card--title, .card--subtitle, .card--number"), {
                    type: "words,chars",
                    linesClass: "split-line",
                    wordsClass: "split-word",
                    charsClass: "split-char-overflow"
                });
                i.find(".split-char-overflow").wrapInner("<div/>"), e.staggerTo(i.find(".card--title .split-char-overflow div"), .75, {
                    y: "120%",
                    ease: Power4.easeInOut
                }, .025, 1), e.staggerTo(i.find(".card--subtitle .split-char-overflow div"), .75, {
                    y: "120%",
                    ease: Power4.easeInOut
                }, .025, 1), e.staggerTo(i.find(".card--number .split-char-overflow div"), .75, {
                    y: "120%",
                    ease: Power4.easeInOut
                }, .1, 1.1), e.to(i.find(".card--stroke"), .75, {
                    scaleX: 0,
                    ease: Power4.easeInOut
                }, 1), e.to(i.find(".card--img"), .75, {
                    width: "100%",
                    ease: Power3.easeInOut
                }, 1), e.call(function() {
                    d = !0
                })
            },
            M = function() {
                if (d) {
                    p || x(0);
                    var e = $(".js-link"),
                        t = e.parent(),
                        i = (t.position().top, !!(t.index() % 2)),
                        n = e.find(".card--img"),
                        r = Math.round(n.offset().top - $(window).scrollTop()),
                        s = Math.round(n.offset().left),
                        o = Math.round(n.width()),
                        a = Math.round($(window).width() - s - o),
                        u = new TimelineLite;
                    e.addClass("card--link__loaded");
                    o = $(window).width();
                    var c = $(window).height(),
                        h = -s,
                        f = "auto",
                        g = "auto",
                        _ = a;
                    i ? f = -s : (h = a, g = -a, _ = -a), u.to(e.find(".card--img"), 1.125, {
                        width: o,
                        height: c,
                        x: h,
                        y: -r,
                        ease: Power3.easeInOut
                    }, 0), u.to(e.find(".card--img-in"), 1.125, {
                        top: -r,
                        left: f,
                        right: g,
                        width: o,
                        height: c,
                        x: _,
                        y: r,
                        ease: Power3.easeInOut
                    }, 0), u.to(e.find(".card--img-trans"), .75, {
                        scale: 1,
                        ease: Power2.easeOut
                    }, 0), u.call(function() {
                        p && $(window).scrollTop(0), m(), A(), $(".preventer").remove(), l = !1, TweenMax.set($(".scroll-container"), {
                            y: 0
                        }), O()
                    })
                } else requestAnimationFrame(M)
            },
            I = function() {
                u = !1, s = !1, d = !1, l = !0;
                var e = new TimelineLite,
                    t = $("<div/>");
                t.addClass("preventer"), t.appendTo($("body"));
                var i = $(".js-link"),
                    n = i.parent().index(),
                    r = i.find(".navp--item-title"),
                    o = $(".navp--number").eq(n).find(".navp--item-number-in-in"),
                    a = i.offset().top - $(window).outerHeight() / 2 + i.outerHeight() / 2;
                x(a), $("html").addClass("page-transi");
                var c = $("<div/>").addClass("img-nav-into-single");
                $(".imgpro2--item__active").clone().removeClass("imgpro2--item__active").appendTo(c), c.appendTo($("body")), e.to($(".navp--item-number-in-in").not(o), .75, {
                    y: "200%",
                    ease: Power3.easeInOut
                }, 0), $(".navp--item-title").not(r).each(function(e) {
                    (new TimelineLite).staggerTo($(this).find(".split-char"), .75, {
                        y: "-100%",
                        ease: Power3.easeInOut
                    }, .025, 0)
                }), e.call(function() {
                    d = !0
                })
            },
            N = function() {
                if (d) {
                    var e = $(".js-link"),
                        t = e.parent().index(),
                        i = e.find(".navp--item-title"),
                        n = $(".navp--number").eq(t).find(".navp--item-number-in-in"),
                        r = new TimelineLite,
                        s = $(".img-nav-into-single");
                    s.addClass("img-nav-into-single__colored"), r.to(s.find(".imgpro2--item"), 1.125, {
                        alpha: 1,
                        ease: Power3.easeInOut
                    }, 0), r.to(s.find(".imgpro2--item"), 1.125, {
                        scale: 1,
                        ease: Power3.easeInOut
                    }, 0), r.to(s.find(".imgpro2--item-in"), 1.125, {
                        scale: 1,
                        ease: Power3.easeInOut
                    }, 0), r.staggerTo($(".navp--mailto .split-char"), .75, {
                        y: "-100%",
                        ease: Power3.easeInOut
                    }, .01, 0), r.to(e.find(".navp--item-stroke"), .75, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, 0), r.to(n, .75, {
                        y: "200%",
                        ease: Power3.easeInOut
                    }, 0), r.staggerTo(i.find(".split-char"), .75, {
                        y: "-100%",
                        ease: Power3.easeInOut
                    }, .025, 0), r.call(function() {
                        p && ($("html").removeClass("menu-active-mobile"), TweenMax.set($(".global-wrapper"), {
                            clearProps: "y"
                        })), m(), A(), $(".preventer").remove(), l = !1, TweenMax.set($(".scroll-container"), {
                            y: 0
                        }), $(window).scrollTop(0), O(), s.remove(), $("html").removeClass("page-transi"), u = !0, $(".imgpro2--item__active").removeClass("imgpro2--item__active"), a = !1, $("html").removeClass("menu-active"), r.set($(".navp--bg-item div"), {
                            x: "101%"
                        })
                    })
                } else requestAnimationFrame(N)
            },
            L = function() {
                s = !1, d = !1, l = !0;
                var e = new TimelineLite,
                    t = $("<div/>");
                t.addClass("preventer"), t.appendTo($("body"));
                var i = 0;
                $(window).scrollTop() > 0 && (i = .45), a && (c = !0, $(".burger").trigger("click")), x(0), e.to($(".scroll-container"), .75, {
                    y: 0,
                    ease: Power3.easeInOut
                }, 0), e.to($(".phead--imgc"), .75, {
                    y: 0,
                    ease: Power3.easeInOut
                }, 0), e.to($(".phead--title .split-char-overflow div"), .75, {
                    y: "120%",
                    ease: Power3.easeInOut
                }, i), e.to($(".phead--subtitle .split-char-overflow div"), .75, {
                    y: "120%",
                    ease: Power3.easeInOut
                }, i), e.to($(".phead--shadow"), .75, {
                    alpha: 0,
                    ease: Power1.easeOut
                }, i), e.to($(".phead--scrollto"), .75, {
                    y: "101%",
                    ease: Power3.easeInOut
                }, i), e.to($(".phead--bar"), .75, {
                    y: "101%",
                    ease: Power3.easeInOut
                }, i), e.call(function() {
                    $(".phead--imgc").clone().addClass("img-pagetransi").appendTo($("body")), d = !0
                })
            },
            j = function() {
                d ? (f = "project-prev" === n ? "prev" : "next", m(), A(), O()) : requestAnimationFrame(j)
            },
            F = function() {
                s = !1, d = !1, l = !0;
                var e = new TimelineLite,
                    t = $("<div/>");
                t.addClass("preventer"), t.appendTo($("body"));
                var i = $(".js-link"),
                    n = i.offset().top + i.outerHeight() - $(window).height();
                p ? x(n) : e.to($(".scroll-container"), 1, {
                    y: -n,
                    ease: Power3.easeInOut
                }, 0);
                new SplitText(i.find(".pnext--title, .pnext--subtitle"), {
                    type: "words,chars",
                    linesClass: "split-line",
                    wordsClass: "split-word",
                    charsClass: "split-char-overflow"
                });
                i.find(".split-char-overflow").wrapInner("<div/>"), e.staggerTo(i.find(".pnext--title .split-char-overflow div"), .75, {
                    y: "120%",
                    ease: Power4.easeInOut
                }, .025, 0), e.staggerTo(i.find(".pnext--subtitle .split-char-overflow div"), .75, {
                    y: "120%",
                    ease: Power4.easeInOut
                }, .025, 0), e.to(i.find(".pnext--scrollto"), .75, {
                    scaleY: 0,
                    ease: Power4.easeInOut
                }, 0), e.to(i.find(".pnext--bar"), .75, {
                    y: "101%",
                    ease: Power4.easeInOut
                }, 0), e.to(i.find(".card--img"), .75, {
                    width: "100%",
                    ease: Power3.easeInOut
                }, 0), i.addClass("pnext--link__loaded_scale_active"), setTimeout(function() {
                    i.addClass("pnext--link__loaded_opacity")
                }, 0), e.call(function() {
                    d = !0
                })
            },
            q = function() {
                if (d) {
                    var e = $(".js-link");
                    e.addClass("pnext--link__loaded_grayscale"), e.removeClass("pnext--link__loaded_scale_active"), e.addClass("pnext--link__loaded_scale_reg");
                    var t = e.height(),
                        i = ($(window).width(), $(window).height()),
                        n = new TimelineLite;
                    n.to(e.find(".pnext--imgc"), 1, {
                        y: t - i,
                        height: i,
                        ease: Power3.easeInOut
                    }), n.call(function() {
                        $(window).scrollTop(0), m(), A(), $(".preventer").remove(), l = !1, TweenMax.set($(".scroll-container"), {
                            y: 0
                        }), O()
                    })
                } else requestAnimationFrame(q)
            },
            z = function() {
                $("body").on("click", "a", b);
                $(window).on("resize orientationchange", function() {
                    ae(), re(), $(window).trigger("scroll"), p || (k(), setTimeout(function() {
                        k()
                    }, 1e3), setTimeout(function() {
                        g()
                    }, 750))
                }), $("body").on("reveal", ".scroll-reveal", le), $("body").on("click", ".scrollto, .phead--scrollzone", function() {
                    x($(window).outerHeight())
                }), $("body").on("mousewheel DOMMouseScroll", ".preventer", function(e) {
                    return e.preventDefault(), !1
                })
            },
            H = function() {
                ue(), ee(), te(), ne(), p || ie()
            },
            B = function() {
                se(), re(), Q(), J(), Z(), Y(), G(), X(), K(), tools.isEdge() && $(".card--link").attr("data-transition", "")
            },
            X = function() {
                $(".abhead").each(function() {
                    var e = $(this);
                    e.addClass("active");
                    var t = new TimelineLite;
                    t.from(e.find(".abhead--bg-black"), .8, {
                        y: "-101%",
                        ease: Power2.easeInOut
                    }, 0), t.from(e.find(".abhead--bigtitle"), .8, {
                        y: "101%",
                        ease: Power2.easeInOut
                    }, 0), t.from(e.find(".abhead--bg-white"), .8, {
                        y: "101%",
                        ease: Power2.easeInOut
                    }, 0);
                    var i = new V(e.find(".abhead--quote-quote div, .abhead--quote-who"));
                    i.init(), i.reveal(), t.to(e.find(".abhead--marble"), .8, {
                        x: "0%",
                        ease: Power3.easeInOut
                    }, 1.2), t.from(e.find(".abhead--marble > div"), .8, {
                        x: "-80%",
                        ease: Power3.easeInOut
                    }, 1.2), t.to(e.find(".abhead--photo-overlay"), 1, {
                        x: "0%",
                        ease: Power3.easeInOut
                    }, 0), t.to(e.find(".abhead--photo-in"), .8, {
                        x: "0%",
                        ease: Power3.easeInOut
                    }, 1.2), t.from(e.find(".abhead--photo-in > div"), .8, {
                        x: "90%",
                        ease: Power3.easeInOut
                    }, 1.2);
                    new SplitText(e.find(".abhead--bigtitle-in"), {
                        type: "words,chars",
                        linesClass: "split-line",
                        wordsClass: "split-word",
                        charsClass: "split-char"
                    });
                    t.staggerFrom(e.find(".abhead--bigtitle-in .split-char"), .8, {
                        y: "180%",
                        x: "50%",
                        rotation: 20,
                        ease: Power3.easeOut
                    }, .1, 1.1), p && t.fromTo($(".abhead + .txtbloc "), .75, {
                        alpha: 0
                    }, {
                        alpha: 1,
                        ease: Power3.easeInOut
                    }, 0), U()
                })
            },
            W = _debounce(function() {
                $(window).trigger("resize")
            }, 250),
            V = function(e) {
                this.init = function() {
                    e.each(function() {
                        var e = $(this),
                            t = e.html();
                        e.html("");
                        var i = $("<div/>").addClass("linerev").appendTo(e);
                        $("<div/>").addClass("linerev--text").html(t).appendTo(i), $("<div/>").addClass("linerev--overlay").appendTo(i)
                    })
                }, this.reveal = function(t, i) {
                    var n = i || 100;
                    setTimeout(function() {
                        e.find(".linerev").each(function(e) {
                            var t = $(this);
                            setTimeout(function() {
                                var e = t.find(".linerev--overlay"),
                                    i = new TimelineLite;
                                i.fromTo(e, .8, {
                                    x: "-101%",
                                    alpha: 1
                                }, {
                                    x: "0%",
                                    ease: Power3.easeInOut
                                }), i.fromTo(t.find(".linerev--text"), 1, {
                                    y: "101%",
                                    alpha: 0
                                }, {
                                    y: "0%",
                                    alpha: 1,
                                    ease: Power4.easeOut
                                }, 1.3), i.to(e, .8, {
                                    x: "101%",
                                    ease: Power3.easeInOut
                                }, 1), i.call(function() {
                                    e.remove(), W()
                                })
                            }, e * n)
                        })
                    }, 1e3 * t)
                }
            },
            Y = function() {
                $(".imgpro1").addClass("active"), $(".homehead").each(function() {
                    var e = $(this);
                    e.addClass("active");
                    var t = new TimelineLite;
                    t.fromTo(e.find(".homehead--bg"), .8, {
                        scaleX: 0
                    }, {
                        scaleX: 1,
                        ease: Power3.easeInOut
                    }, 0);
                    var i = new V(e.find(".homehead--title, .homehead--subtitle-line"));
                    i.init(), i.reveal(), t.to(e.find(".homehead--marble-overlay"), .8, {
                        x: "0%",
                        ease: Power3.easeInOut
                    }, .3), t.to(e.find(".homehead--marble-in"), .8, {
                        x: "0%",
                        ease: Power3.easeInOut
                    }, 1.3), t.from(e.find(".homehead--marble-in div"), .8, {
                        x: "-80%",
                        ease: Power3.easeInOut
                    }, 1.3);
                    var n = new V(e.find(".homehead--scrollto-title"));
                    n.init(), n.reveal(.4), t.from(e.find(".scrollto"), 1, {
                        y: "101%",
                        alpha: 0,
                        ease: Power4.easeOut
                    }, 1.5), U()
                })
            },
            U = function(e, t) {
                var i = ["#e8501b", "#1c1c1"],
                    n = [],
                    r = [],
                    s = e || 2,
                    o = function() {
                        var e = $("<div/>");
                        e.addClass("bobby--ministroke"), e.appendTo(".bobby");
                        var o = n[Math.floor(Math.random() * n.length)],
                            a = n.indexOf(o);
                        n.splice(a, 1), e.addClass("bobby--ministroke__pos" + o);
                        var l = r[Math.floor(Math.random() * r.length)];
                        a = r.indexOf(l);
                        r.splice(a, 1), e.css("top", l + "%");
                        var u = $("<div/>");
                        u.addClass("bobby--ministroke-in"), u.css("background", i[Math.floor(Math.random() * i.length)]), u.appendTo(e);
                        var c = new TimelineLite;
                        c.defaultEase = Power4.easeInOut, "easeOut" === t && (c.defaultEase = Power3.easeOut), c.fromTo(u, s, {
                            y: "0%"
                        }, {
                            y: "200%",
                            ease: Power4.easeInOut
                        }), c.call(function() {
                            e.remove()
                        })
                    };
                ! function() {
                    n = [1, 2, 3, 4, 5], r = [10, 25, 40, 55, 70];
                    for (var e = 5; e > 0; e--) setTimeout(function() {
                        o()
                    }, 75 * e)
                }()
            },
            G = function() {
                $(".phead").each(function() {
                    var e = $(this);
                    e.addClass("active");
                    
                    // Next / Prev Links
                    $(".med-next").attr("href", $(".next-proj-link").text());
                    $(".med-prev").attr("href", $(".prev-proj-link").text());
                    
                    new SplitText(e.find(".phead--title, .phead--subtitle"), {
                        type: "words,chars",
                        linesClass: "split-line",
                        wordsClass: "split-word",
                        charsClass: "split-char-overflow"
                    });
                    e.find(".split-char-overflow").wrapInner("<div/>");
                    var t = new TimelineLite,
                        i = 1;
                    "prev" === f ? (t.to($(".img-pagetransi"), 1, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, .1), t.to($(".img-pagetransi > div"), 1, {
                        x: "-90%",
                        ease: Power3.easeInOut
                    }, .1), t.from($(".page-container:first .phead--imgc"), 1.1, {
                        x: "-101%",
                        ease: Power3.easeInOut
                    }, 0), t.from($(".page-container:first .phead--imgc > div"), 1.1, {
                        x: "90%",
                        ease: Power3.easeInOut
                    }, 0)) : "next" === f ? (t.to($(".img-pagetransi"), 1, {
                        x: "-101%",
                        ease: Power3.easeInOut
                    }, .1), t.to($(".img-pagetransi > div"), 1, {
                        x: "90%",
                        ease: Power3.easeInOut
                    }, .1), t.from($(".page-container:first .phead--imgc"), 1.1, {
                        x: "101%",
                        ease: Power3.easeInOut
                    }, 0), t.from($(".page-container:first .phead--imgc > div"), 1.1, {
                        x: "-90%",
                        ease: Power3.easeInOut
                    }, 0)) : i = 0, f = null, t.call(function() {
                        $(".preventer").remove(), l = !1, $(".img-pagetransi").remove()
                    }), t.staggerFrom(e.find(".phead--title .split-char-overflow div"), .75, {
                        y: "120%",
                        ease: Power4.easeOut
                    }, .025, i + .25), t.staggerFrom(e.find(".phead--subtitle .split-char-overflow div"), .75, {
                        y: "120%",
                        ease: Power4.easeOut
                    }, .025, i + .5), t.to(e.find(".phead--shadow"), 1.5, {
                        alpha: 1,
                        ease: Power1.easeOut
                    }, i + 0), t.from(e.find(".phead--scrollto"), .75, {
                        y: "101%",
                        clearProps: "all",
                        ease: Power4.easeOut
                    }, i + .25), t.from(e.find(".phead--bar"), .75, {
                        y: "101%",
                        ease: Power4.easeOut
                    }, i + .25)
                })
            },
            Q = function() {
                var e = $(".med--prev"),
                    t = $(".med--prev").attr("href") || null;
                e.attr("href", t);
                var i = $(".med--next"),
                    n = $(".pnav--next").attr("href") || null;
                i.attr("href", n)
            },
            Z = function() {
                $(".pvideo--imgc").each(function() {
                    var e = $(this);
                    if (e.find("img").on("load", function() {
                            $(window).trigger("resize")
                        }), e.find("video").on("loadstart", function() {
                            $(window).trigger("resize")
                        }), window.matchMedia("(min-width: 990px)").matches) e.addClass("pvideo__video");
                    else {
                        e.addClass("pvideo__image");
                        var t = e.find("img"),
                            i = t.attr("data-src"),
                            n = t.attr("data-srcset");
                        t.attr("src", i), t.attr("srcset", n)
                    }
                })
            },
            J = function() {
                $(".load_img_project").each(function() {
                    var e = $(this);
                    e.on("load", function() {
                        $(window).trigger("resize")
                    });
                    var t = e.attr("data-src"),
                        i = e.attr("data-srcset");
                    e.attr("src", t), e.attr("srcset", i)
                })
            },
            K = function() {
                $(".txtbloc--contact--mail a, .infotxt--markup a, .txtbloc--contact--markup a, .navp--mailto a").on("mouseenter mouseleave", function(e) {
                    var t = $(this),
                        i = t.find("span");
                    if (0 == i.length && (t.wrapInner("<span/>"), i = t.find("span")), i.addClass("link-stroke--hider"), "mouseenter" === e.type) {
                        (n = $("<div/>")).addClass("link-stroke").appendTo(i), TweenMax.fromTo(n, .5, {
                            x: "-101%"
                        }, {
                            x: "0%",
                            ease: Power3.easeOut
                        }, 0)
                    } else {
                        var n = t.find(".link-stroke");
                        TweenMax.to(n, .5, {
                            x: "101%",
                            ease: Power3.easeOut,
                            onComplete: function() {
                                n.remove()
                            }
                        }, 0)
                    }
                })
            },
            ee = function() {
                $(".menu-item a").on("mouseenter mouseleave", function(e) {
                    var t = $(this),
                        i = t.find("span");
                    if ("mouseenter" === e.type) {
                        (n = $("<div/>")).addClass("menu-item--stroke").appendTo(i), TweenMax.fromTo(n, .5, {
                            x: "-101%"
                        }, {
                            x: "0%",
                            ease: Power3.easeOut
                        }, 0)
                    } else {
                        var n = t.find(".menu-item--stroke");
                        TweenMax.to(n, .5, {
                            x: "101%",
                            ease: Power3.easeOut,
                            onComplete: function() {
                                n.remove()
                            }
                        }, 0)
                    }
                })
            },
            te = function() {
                new SplitText($(".navp--item-title, .navp--mailto a span"), {
                    type: "lines,chars",
                    linesClass: "split-line",
                    wordsClass: "split-word",
                    charsClass: "split-char"
                });
                $(".navp--mailto").addClass("active")
            },
            ie = function() {
                var e = $(".imgpro1"),
                    t = function() {
                        var t = $(window).scrollTop(),
                            i = $(window).height(),
                            n = $(".card"),
                            r = -1;
                        null != n && n.each(function() {
                            var e = $(this),
                                n = e.offset().top;
                            t > n - i / 2 && t < n + i / 2 && (r = e.index())
                        }), n.eq(r).addClass("card__visible"), e.find(".imgpro1--item").eq(r).addClass("imgpro1--item__active"), r < 0 ? (n.removeClass("card__visible"), e.find(".imgpro1--item").removeClass("imgpro1--item__active")) : (n.not(n.eq(r)).removeClass("card__visible"), e.find(".imgpro1--item").not(e.find(".imgpro1--item").eq(r)).removeClass("imgpro1--item__active"))
                    };
                $(window).on("scroll", _throttle(t, 50)), $(window).on("scroll", _debounce(t, 250))
            },
            ne = function() {
                var e = $(".imgpro2"),
                    t = function(t) {
                        e.find(".imgpro2--item").removeClass("imgpro2--item__active"), t >= 0 && e.find(".imgpro2--item").eq(t).addClass("imgpro2--item__active")
                    };
                $(".navp--item-link").on("mouseenter mouseleave", function(e) {
                    if (u) {
                        var i = new TimelineLite;
                        "mouseleave" === e.type ? (t(-1), i.to($(this).find(".navp--item-stroke"), .5, {
                            x: "101%",
                            ease: Power3.easeOut
                        }, 0)) : (t($(this).parent().index()), i.fromTo($(this).find(".navp--item-stroke"), .5, {
                            x: "-101%"
                        }, {
                            x: "0%",
                            ease: Power3.easeOut
                        }, 0))
                    }
                })
            },
            re = function() {
                $(".card").each(function() {
                    var e = $(this),
                        t = e.find(".card--link"),
                        i = e.find(".card--img-in"),
                        n = $("body").outerWidth(),
                        r = {
                            top: e.offset().top
                        },
                        s = {
                            top: t.offset().top,
                            left: t.offset().left,
                            right: n - t.offset().left - t.outerWidth()
                        };
                    window.matchMedia("(max-width: 660px)").matches && (r.top = 0, s.top = 0), TweenMax.set(i, {
                        width: n
                    }), window.matchMedia("(max-width: 660px)").matches || (TweenMax.set(i, {
                        height: "100vh"
                    }), TweenMax.set(i, {
                        top: r.top - s.top
                    })), e.index() % 2 ? TweenMax.set(i, {
                        left: -1 * s.left
                    }) : (TweenMax.set(i, {
                        left: "auto"
                    }), TweenMax.set(i, {
                        right: -1 * s.right
                    }))
                })
            },
            se = function() {
                $(".imgcrop").each(function() {
                    var e = $(this).find("img");
                    if (e.on("load", function() {
                            oe(e)
                        }), !e.attr("src")) {
                        var t = e.attr("data-src");
                        e.attr("src", t)
                    }
                    if (!e.attr("srcset")) {
                        var i = e.attr("data-srcset");
                        e.attr("srcset", i)
                    }
                })
            },
            oe = function(e) {
                var t = e,
                    i = t.find("img");
                i.removeClass("imgcrop__max"), i.outerHeight() <= t.outerHeight() && i.outerWidth() >= t.outerWidth() && i.addClass("imgcrop__max")
            },
            ae = function() {
                $(".imgcrop").each(function() {
                    var e = $(this),
                        t = e.find("img");
                    t.attr("src") && (t.removeClass("imgcrop__max"), t.outerHeight() <= e.outerHeight() && t.outerWidth() >= e.outerWidth() && t.addClass("imgcrop__max"))
                })
            },
            le = function() {
                if (s) {
                    var e = $(this);
                    if (!e.hasClass("is-revealed"))
                        if (e.addClass("is-revealed"), e.is(".pvideo--imgc")) {
                            if (e.hasClass("pvideo__video")) {
                                var t = e.find("video");
                                t[0].onplay = function() {
                                    t.addClass("video__played")
                                }, t[0].play(), $(window).trigger("resize")
                            }
                        } else if (e.is(".pprez")) {
                        var i = new TimelineLite;
                        new SplitText(e.find(".pprez--bigtitle"), {
                            type: "words,chars",
                            linesClass: "split-line",
                            wordsClass: "split-word",
                            charsClass: "split-char"
                        });
                        i.staggerFrom(e.find(".pprez--bigtitle .split-char"), 1.5, {
                            y: "120%",
                            x: "80%",
                            rotation: 20,
                            ease: Power4.easeOut
                        }, .05, .25), i.from(e.find(".pprez--scrollto"), 1.5, {
                            scaleY: 0,
                            ease: Power3.easeInOut
                        }, .5), i.staggerFrom(e.find(".pprez--markup > *"), 1.5, {
                            y: 40,
                            alpha: 0,
                            ease: Power3.easeOut
                        }, .1, 0), i.staggerFrom(e.find(".infotxt--title, .infotxt--markup > *, .pprez--btnc"), 1.5, {
                            y: 40,
                            alpha: 0,
                            ease: Power3.easeOut
                        }, .05, 0)
                    } else if (e.is(".txtbloc-item")) {
                        var n;
                        (i = new TimelineLite).staggerFrom(e.find(".markup > *"), 1.5, {
                            y: 40,
                            alpha: 0,
                            ease: Power3.easeOut
                        }, .1, 1.5), i.staggerFrom(e.find(".infotxt--title, .infotxt--markup > *"), 1.5, {
                            y: 40,
                            alpha: 0,
                            ease: Power3.easeOut
                        }, .025, 1.5), i.staggerFrom(e.find(".txtbloc--contact--markup > *"), 1.5, {
                            y: 40,
                            alpha: 0,
                            ease: Power3.easeOut
                        }, .05, 1.5), (n = new V(e.find(".txtbloc--title, .txtbloc--contact--mail > a"))).init(), n.reveal(), (n = new V(e.find(".reward--link, .reward--cattitle, .reward--markup > *"))).init(), n.reveal(0, 50)
                    }
                }
            },
            ue = function() {
                var e = function() {
                    var e = $(window).scrollTop(),
                        t = $(window).height(),
                        i = $(".scroll-reveal");
                    null != i && i.each(function() {
                        var i = $(this);
                        if (!i.hasClass("is-revealed")) {
                            var n = i.offset().top;
                            e + t - 110 >= n && i.trigger("reveal")
                        }
                    })
                };
                $(window).on("scroll", _throttle(e, 50)), $(window).on("scroll", _debounce(e, 250))
            };
        return {
            showPreloader: function() {
                se(), ae();
                var e = new TimelineLite,
                    t = {
                        value: 0
                    };
                e.to(t, 2, {
                    value: 99,
                    onUpdate: function() {
                        var e = Math.round(t.value);
                        e < 10 ? ($(".preloader--percent-1").html("0"), $(".preloader--percent-2").html(e.toString().charAt(0))) : ($(".preloader--percent-1").html(e.toString().charAt(0)), $(".preloader--percent-2").html(e.toString().charAt(1)))
                    },
                    ease: Power3.easeOut
                }, 0), e.call(function() {
                    $(window).scrollTop(0)
                }), e.to($(".preloader--percent-in"), 2, {
                    alpha: 1,
                    ease: Power3.easeOut
                }, 0), e.from($(".preloader--percent-in"), 2, {
                    y: 50,
                    ease: Power3.easeOut
                }, 0), e.to($(".preloader"), 1, {
                    alpha: 0,
                    ease: Power2.easeOut
                }, 2), e.from($(".strokes"), 1, {
                    scaleY: 0,
                    ease: Power3.easeInOut
                }, 2), e.call(function() {
                    $(".preloader").remove()
                }), setTimeout(function() {
                    tools.init(), z(), m(), T(window.location.href, document.documentElement.outerHTML), $(window).bind("popstate", w), O(), p ? ($("html").addClass("simplifiedVersion"), $(window).on("scroll", _throttle(function() {
                        var e = $(window).scrollTop(),
                            t = $(window).height();
                        $("html").toggleClass("scroll-begin", e < t - 50)
                    }, 200))) : (y(), v(), _()), H(), A()
                }, 2500), e.staggerFrom($(".menu"), 1, {
                    alpha: 0,
                    ease: Power3.easeOut
                }, .1, 3)
            }
        }
    }(),
    prodVarUrl = "http://";
"https:" == location.protocol && (prodVarUrl = "https://");
var thishost = "kashifj.github.io";
site.showPreloader();
