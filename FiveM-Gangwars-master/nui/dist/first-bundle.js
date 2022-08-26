var zones = [];
var lenght = 0;
var tuvs;
var rect1 = [];
var rect2 = [];

var colors = [
	"#ffffff",
	"#14ff1b",
	"#ac14ff",
	"#141bff",
	"#ff9d14",
	"#fbff14"
];

    window.onload = (e) => {
		
        /* 'links' the js with the Nui message from main.lua */
        window.addEventListener('message', (event) => {
            //document.querySelector("#logo").innerHTML = " "
            var item = event.data;

            if (item !== undefined && item.type === "gangzone" && lenght < item.zone.id) {
                var map = window.Map;

				var x1 = Number(item.zone.ginfo1) + 0;
				var x2 = Number(item.zone.ginfo3) + 0;
				
				var bounds1 = convertToMap(x1, item.zone.ginfo2-0);
				var bounds2 = convertToMap(x2, item.zone.ginfo4-0);
				var bounds = [[bounds1], [bounds2]];
				
				zones[item.zone.id] = item.zone;
				lenght++;

				rect1[item.zone.id] = L.rectangle(bounds, {color: colors[item.zone.fraction], weight: 1}).addTo(map);
				rect2[item.zone.id] = L.rectangle(bounds, {color: colors[item.zone.fraction], weight: 1}).addTo(window.Mape);
            }
			else if(item !== undefined && item.type === "updatePlayer") {
				doPlayerUpdate(item.player);
			}
			else if(item !== undefined && item.type === "showMap") {
				if(item.toggle){
					$("#maps-container").show();
					Mape.invalidateSize();

					Mape.panTo(convertToMap(item.posx, item.posy));
				}
				else {
					$("#maps-container").hide();
				}
			}
			else if(item !== undefined && item.type === "flash") {
				rect1[item.zone].setStyle({color: colors[item.frac]});
				rect2[item.zone].setStyle({color: colors[item.frac]});
			}
        });
		
    };
	
function onResize() {
	Map.invalidateSize();
	Mape.invalidateSize();
}

function createAlert(e, t) {
    /*if (null != e && null != e) {
        if ("string" == typeof e) e = {
            message: e
        };
        return void 0 === e.icon && (e.icon = "fas fa-exclamation-triangle"), void 0 === e.title && (e.title = "<strong>Warning!</strong>"), t = Object.assign({
            newsest_on_top: !0,
            placement: {
                from: "bottom",
                align: "left"
            },
            delay: 1e4,
            type: "warning"
        }, t), $.notify(e, t)
    }
    console.error("Data needs to be set")*/
}
var _invervalId;
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        u = {},
        c = u.toString,
        d = u.hasOwnProperty,
        h = d.toString,
        f = h.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        _ = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function v(e, t, n) {
        var r, o = (t = t || i).createElement("script");
        if (o.text = e, n)
            for (r in _) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function y(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
            return new b.fn.init(e, t)
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = y(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.3.1",
        constructor: b,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (u && i && (b.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && b.isPlainObject(n) ? n : {}, s[t] = b.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, b.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = r(e)) || "function" == typeof(n = d.call(t, "constructor") && t.constructor) && h.call(n) === f)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            v(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (w(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                a = [];
            if (w(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function(e) {
        var t, n, i, r, o, s, a, l, u, c, d, h, f, p, g, m, _, v, y, b = "sizzle" + 1 * new Date,
            C = e.document,
            w = 0,
            x = 0,
            T = se(),
            S = se(),
            L = se(),
            E = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            k = [],
            I = k.pop,
            D = k.push,
            M = k.push,
            N = k.slice,
            O = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H = "\\[" + j + "*(" + B + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + j + "*\\]",
            R = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            F = new RegExp(j + "+", "g"),
            q = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            $ = new RegExp("^" + j + "*," + j + "*"),
            U = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            z = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
            W = new RegExp(R),
            G = new RegExp("^" + B + "$"),
            V = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            X = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function() {
                h()
            },
            re = ve(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            M.apply(k = N.call(C.childNodes), C.childNodes), k[C.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: k.length ? function(e, t) {
                    D.apply(e, N.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, i, r) {
            var o, a, u, c, d, p, _, v = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
            if (!r && ((t ? t.ownerDocument || t : C) !== f && h(t), t = t || f, g)) {
                if (11 !== w && (d = Y.exec(e)))
                    if (o = d[1]) {
                        if (9 === w) {
                            if (!(u = t.getElementById(o))) return i;
                            if (u.id === o) return i.push(u), i
                        } else if (v && (u = v.getElementById(o)) && y(t, u) && u.id === o) return i.push(u), i
                    } else {
                        if (d[2]) return M.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return M.apply(i, t.getElementsByClassName(o)), i
                    }
                if (n.qsa && !L[e + " "] && (!m || !m.test(e))) {
                    if (1 !== w) v = t, _ = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), a = (p = s(e)).length; a--;) p[a] = "#" + c + " " + _e(p[a]);
                        _ = p.join(","), v = X.test(e) && ge(t.parentNode) || t
                    }
                    if (_) try {
                        return M.apply(i, v.querySelectorAll(_)), i
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(q, "$1"), t, i, r)
        }

        function se() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ae(e) {
            return e[b] = !0, e
        }

        function le(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return ae(function(t) {
                return t = +t, ae(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, h = oe.setDocument = function(e) {
                var t, r, s = e ? e.ownerDocument || e : C;
                return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !o(f), C !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = le(function(e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = le(function(e) {
                    return p.appendChild(e).id = b, !f.getElementsByName || !f.getElementsByName(b).length
                }), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(J, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(J, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, _ = [], m = [], (n.qsa = Q.test(f.querySelectorAll)) && (le(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Q.test(v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
                    n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), _.push("!=", R)
                }), m = m.length && new RegExp(m.join("|")), _ = _.length && new RegExp(_.join("|")), t = Q.test(p.compareDocumentPosition), y = t || Q.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, E = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === C && y(C, e) ? -1 : t === f || t.ownerDocument === C && y(C, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                    if (r === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ce(s[i], a[i]) : s[i] === C ? -1 : a[i] === C ? 1 : 0
                }, f) : f
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && h(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !L[t + " "] && (!_ || !_.test(t)) && (!m || !m.test(t))) try {
                    var i = v.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return oe(t, f, null, [e]).length > 0
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && h(e), y(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== f && h(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(E), d) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return c = null, e
            }, r = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = oe.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: V,
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
                        return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(J, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var r = oe.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, h, f, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                _ = a && t.nodeName.toLowerCase(),
                                v = !l && !a,
                                y = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (y = (f = (u = (c = (d = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (y = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++y && h === t) {
                                            c[e] = [w, f, y];
                                            break
                                        }
                                } else if (v && (y = f = (u = (c = (d = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && u[1]), !1 === y)
                                    for (;
                                        (h = ++f && h && h[g] || (y = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++y || (v && ((c = (d = h[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [w, y]), h !== t)););
                                return (y -= r) === i || y % i == 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                            for (var i, o = r(e, t), s = o.length; s--;) e[i = O(e, o[s])] = !(n[i] = o[s])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(q, "$1"));
                        return i[b] ? ae(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ae(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: ae(function(e) {
                        return e = e.replace(J, ee),
                            function(t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                            }
                    }),
                    lang: ae(function(e) {
                        return G.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: fe(!1),
                    disabled: fe(!0),
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
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = he(t);

        function me() {}

        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ve(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = x++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var u, c, d, h = [w, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (c = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === w && u[1] === a) return h[2] = u[2];
                                if (c[o] = h, h[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function ye(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function Ce(e, t, n, i, r, o) {
            return i && !i[b] && (i = Ce(i)), r && !r[b] && (r = Ce(r, o)), ae(function(o, s, a, l) {
                var u, c, d, h = [],
                    f = [],
                    p = s.length,
                    g = o || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : be(g, h, e, a, l),
                    _ = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, _, a, l), i)
                    for (u = be(_, f), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (_[f[c]] = !(m[f[c]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = _.length; c--;)(d = _[c]) && u.push(m[c] = d);
                            r(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;)(d = _[c]) && (u = r ? O(o, d) : h[c]) > -1 && (o[u] = !(s[u] = d))
                    }
                } else _ = be(_ === s ? _.splice(p, _.length) : _), r ? r(null, s, _, l) : M.apply(s, _)
            })
        }

        function we(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = ve(function(e) {
                    return e === t
                }, a, !0), d = ve(function(e) {
                    return O(t, e) > -1
                }, a, !0), h = [function(e, n, i) {
                    var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) h = [ve(ye(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return Ce(l > 1 && ye(h), l > 1 && _e(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, l < r && we(e.slice(l, r)), r < o && we(e = e.slice(r)), r < o && _e(e))
                    }
                    h.push(n)
                }
            return ye(h)
        }
        return me.prototype = i.filters = i.pseudos, i.setFilters = new me, s = oe.tokenize = function(e, t) {
            var n, r, o, s, a, l, u, c = S[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = i.preFilter; a;) {
                for (s in n && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = U.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(q, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = V[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : S(e, l).slice(0)
        }, a = oe.compile = function(e, t) {
            var n, r = [],
                o = [],
                a = L[e + " "];
            if (!a) {
                for (t || (t = s(e)), n = t.length; n--;)(a = we(t[n]))[b] ? r.push(a) : o.push(a);
                (a = L(e, function(e, t) {
                    var n = t.length > 0,
                        r = e.length > 0,
                        o = function(o, s, a, l, c) {
                            var d, p, m, _ = 0,
                                v = "0",
                                y = o && [],
                                b = [],
                                C = u,
                                x = o || r && i.find.TAG("*", c),
                                T = w += null == C ? 1 : Math.random() || .1,
                                S = x.length;
                            for (c && (u = s === f || s || c); v !== S && null != (d = x[v]); v++) {
                                if (r && d) {
                                    for (p = 0, s || d.ownerDocument === f || (h(d), a = !g); m = e[p++];)
                                        if (m(d, s || f, a)) {
                                            l.push(d);
                                            break
                                        }
                                    c && (w = T)
                                }
                                n && ((d = !m && d) && _--, o && y.push(d))
                            }
                            if (_ += v, n && v !== _) {
                                for (p = 0; m = t[p++];) m(y, b, s, a);
                                if (o) {
                                    if (_ > 0)
                                        for (; v--;) y[v] || b[v] || (b[v] = I.call(l));
                                    b = be(b)
                                }
                                M.apply(l, b), c && !o && b.length > 0 && _ + t.length > 1 && oe.uniqueSort(l)
                            }
                            return c && (w = T, u = C), y
                        };
                    return n ? ae(o) : o
                }(o, r))).selector = e
            }
            return a
        }, l = oe.select = function(e, t, n, r) {
            var o, l, u, c, d, h = "function" == typeof e && e,
                f = !r && s(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(J, ee), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                    if ((d = i.find[c]) && (r = d(u.matches[0].replace(J, ee), X.test(l[0].type) && ge(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && _e(l))) return M.apply(n, r), n;
                        break
                    }
            }
            return (h || a(e, f))(r, t, !g, n, !t || X.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(E).join("") === b, n.detectDuplicates = !!d, h(), n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(P, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(e);
    b.find = x, b.expr = x.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = x.uniqueSort, b.text = x.getText, b.isXMLDoc = x.isXML, b.contains = x.contains, b.escapeSelector = x.escape;
    var T = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && b(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        L = b.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return g(t) ? b.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? b.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? b.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? b.find.matchesSelector(i, e) ? [i] : [] : b.find.matches(e, b.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, b.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(b(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) b.find(e, r[t], n);
            return i > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && L.test(e) ? b(e) : e || [], !1).length
        }
    });
    var I, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || I, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(r[1]) && b.isPlainObject(t))
                    for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }).prototype = b.fn, I = b(i);
    var M = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && b(e);
            if (!L.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(b(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
        }
    }, function(e, t) {
        b.fn[e] = function(n, i) {
            var r = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = b.filter(i, r)), this.length > 1 && (N[e] || b.uniqueSort(r), M.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function j(e) {
        return e
    }

    function B(e) {
        throw e
    }

    function H(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(P) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : b.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            a = -1,
            l = function() {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function() {
                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                        b.each(n, function(n, i) {
                            g(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== y(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return b.each(arguments, function(e, t) {
                        for (var n;
                            (n = b.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                    }), this
                },
                has: function(e) {
                    return e ? b.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, b.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return b.Deferred(function(t) {
                            b.each(n, function(n, i) {
                                var r = g(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, g(u) ? r ? u.call(e, s(o, n, j, r), s(o, n, B, r)) : (o++, u.call(e, s(o, n, j, r), s(o, n, B, r), s(o, n, j, n.notifyWith))) : (i !== j && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    c = r ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== B && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return b.Deferred(function(e) {
                            n[0][3].add(s(0, e, g(r) ? r : j, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : j)), n[2][3].add(s(0, e, g(i) ? i : B))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? b.extend(e, r) : r
                    }
                },
                o = {};
            return b.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                s = b.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (H(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();
            for (; n--;) H(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, b.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var F = b.Deferred();

    function q() {
        i.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), b.ready()
    }
    b.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            b.readyException(e)
        }), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || F.resolveWith(i, [b]))
        }
    }), b.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(b.ready) : (i.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
    var $ = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === y(n))
                for (a in r = !0, n) $(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, g(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(b(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^-ms-/,
        z = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(U, "ms-").replace(z, W)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Z() {
        this.expando = b.expando + Z.uid++
    }
    Z.uid = 1, Z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[G(t)] = n;
            else
                for (i in t) r[G(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(P) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || b.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var K = new Z,
        Q = new Z,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        X = /[A-Z]/g;

    function J(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(X, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Y.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return Q.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), b.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Q.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = G(i.slice(5)), J(o, i, r[i]));
                    K.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Q.set(this, e)
            }) : $(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) ? n : void 0 !== (n = J(o, e)) ? n : void 0;
                this.each(function() {
                    Q.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), b.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, b.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = b._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                b.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }), b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = b.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display")
        },
        re = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function oe(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return b.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (b.cssNumber[t] ? "" : "px"),
            c = (b.cssNumber[t] || "px" !== u && +l) && te.exec(b.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) b.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, b.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var se = {};

    function ae(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = se[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = b.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), se[i] = r, r)
    }

    function le(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    b.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? b.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var ge, me, _e = /<|&#?\w+;/;

    function ve(e, t, n, i, r) {
        for (var o, s, a, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === y(o)) b.merge(h, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + b.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            b.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; o = h[f++];)
            if (i && b.inArray(o, i) > -1) r && r.push(o);
            else if (u = b.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), u && pe(s), n)
            for (c = 0; o = s[c++];) de.test(o.type || "") && n.push(o);
        return d
    }
    ge = i.createDocumentFragment().appendChild(i.createElement("div")), (me = i.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), p.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;
    var ye = i.documentElement,
        be = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function Te() {
        return !1
    }

    function Se() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function Le(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Le(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Te;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return b().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = b.guid++)), e.each(function() {
            b.event.add(this, t, r, i, n)
        })
    }
    b.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, h, f, p, g, m = K.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && b.find.matchesSelector(ye, r), n.guid || (n.guid = b.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(P) || [""]).length; u--;) f = g = (a = we.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = b.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = b.event.special[f] || {}, c = b.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && b.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), b.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, h, f, p, g, m = K.hasData(e) && K.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--;)
                    if (f = g = (a = we.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = b.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || b.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) b.event.remove(e, f + t[u], n, i, !0);
                b.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = b.event.fix(e),
                l = new Array(arguments.length),
                u = (K.get(this, "events") || {})[a.type] || [],
                c = b.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = b.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((b.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? b(r, this).index(u) > -1 : b.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
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
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return E(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, b.Event = function(e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
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
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, b.event.addProp), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || b.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.fn.extend({
        on: function(e, t, n, i) {
            return Le(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Le(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                b.event.remove(this, e, n, t)
            })
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function De(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }

    function Me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (o = K.access(e), s = K.set(t, o), u = o.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) b.event.add(t, r, u[r][n]);
            Q.hasData(e) && (a = Q.access(e), l = b.extend({}, a), Q.set(t, l))
        }
    }

    function Pe(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, u, c, d = 0,
            h = e.length,
            f = h - 1,
            m = t[0],
            _ = g(m);
        if (_ || h > 1 && "string" == typeof m && !p.checkClone && ke.test(m)) return e.each(function(r) {
            var o = e.eq(r);
            _ && (t[0] = m.call(this, r, o.html())), Pe(o, t, n, i)
        });
        if (h && (o = (r = ve(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = b.map(fe(r, "script"), Me)).length; d < h; d++) u = r, d !== f && (u = b.clone(u, !0, !0), l && b.merge(a, fe(u, "script"))), n.call(e[d], u, d);
            if (l)
                for (c = a[a.length - 1].ownerDocument, b.map(a, Ne), d = 0; d < l; d++) u = a[d], de.test(u.type || "") && !K.access(u, "globalEval") && b.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(u.src) : v(u.textContent.replace(Ie, ""), c, u))
        }
        return e
    }

    function je(e, t, n) {
        for (var i, r = t ? b.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || b.cleanData(fe(i)), i.parentNode && (n && b.contains(i.ownerDocument, i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ee, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, u, c = e.cloneNode(!0),
                d = b.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (s = fe(c), i = 0, r = (o = fe(e)).length; i < r; i++) a = o[i], l = s[i], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || fe(e), s = s || fe(c), i = 0, r = o.length; i < r; i++) Oe(o[i], s[i]);
                else Oe(e, c);
            return (s = fe(c, "script")).length > 0 && pe(s, !d && fe(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, r = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function(e) {
            return je(this, e, !0)
        },
        remove: function(e) {
            return je(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? b.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(fe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Pe(this, arguments, function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(fe(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            for (var n, i = [], r = b(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), b(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Be = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Re = new RegExp(ne.join("|"), "i");

    function Fe(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || b.contains(e.ownerDocument, e) || (s = b.style(e, t)), !p.pixelBoxStyles() && Be.test(s) && Re.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", s = 36 === c.offsetWidth || "absolute", ye.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, s, a, l, u = i.createElement("div"),
            c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(p, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();
    var $e = /^(none|table(?!-c[ea]).+)/,
        Ue = /^--/,
        ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        We = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ve = i.createElement("div").style;

    function Ze(e) {
        var t = b.cssProps[e];
        return t || (t = b.cssProps[e] = function(e) {
            if (e in Ve) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
                if ((e = Ge[n] + t) in Ve) return e
        }(e) || e), t
    }

    function Ke(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Qe(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += b.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= b.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= b.css(e, "border" + ne[s] + "Width", !0, r))) : (l += b.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += b.css(e, "border" + ne[s] + "Width", !0, r) : a += b.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function Ye(e, t, n) {
        var i = He(e),
            r = Fe(e, t, i),
            o = "border-box" === b.css(e, "boxSizing", !1, i),
            s = o;
        if (Be.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (p.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === b.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Qe(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function Xe(e, t, n, i, r) {
        return new Xe.prototype.init(e, t, n, i, r)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
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
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = G(t),
                    l = Ue.test(t),
                    u = e.style;
                if (l || (t = Ze(a)), s = b.cssHooks[t] || b.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" === (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (b.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = G(t);
            return Ue.test(t) || (t = Ze(a)), (s = b.cssHooks[t] || b.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Fe(e, t, i)), "normal" === r && t in We && (r = We[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), b.each(["height", "width"], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !$e.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ye(e, t, i) : re(e, ze, function() {
                    return Ye(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = He(e),
                    s = "border-box" === b.css(e, "boxSizing", !1, o),
                    a = i && Qe(e, t, i, s, o);
                return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)), a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ke(0, n, a)
            }
        }
    }), b.cssHooks.marginLeft = qe(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (b.cssHooks[e + t].set = Ke)
    }), b.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = He(e), r = t.length; s < r; s++) o[t[s]] = b.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), b.Tween = Xe, Xe.prototype = {
        constructor: Xe,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Xe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Xe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xe.propHooks._default.set(this), this
        }
    }, Xe.prototype.init.prototype = Xe.prototype, Xe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Xe.propHooks.scrollTop = Xe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = Xe.prototype.init, b.fx.step = {};
    var Je, et, tt = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function it() {
        et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, b.fx.interval), b.fx.tick())
    }

    function rt() {
        return e.setTimeout(function() {
            Je = void 0
        }), Je = Date.now()
    }

    function ot(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function st(e, t, n) {
        for (var i, r = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function at(e, t, n) {
        var i, r, o = 0,
            s = at.prefilters.length,
            a = b.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Je || rt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Je || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = b.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (! function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = G(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = b.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(c, u.opts.specialEasing); o < s; o++)
            if (i = at.prefilters[o].call(u, e, c, u.opts)) return g(i.stop) && (b._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return b.map(c, st, u), g(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), b.fx.timer(b.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    b.Animation = b.extend(at, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(P);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, o, s, a, l, u, c, d = "width" in t || "height" in t,
                    h = this,
                    f = {},
                    p = e.style,
                    g = e.nodeType && ie(e),
                    m = K.get(e, "fxshow");
                for (i in n.queue || (null == (s = b._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, h.always(function() {
                        h.always(function() {
                            s.unqueued--, b.queue(e, "fx").length || s.empty.fire()
                        })
                    })), t)
                    if (r = t[i], tt.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        f[i] = m && m[i] || b.style(e, i)
                    }
                if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(f))
                    for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = K.get(e, "display")), "none" === (c = b.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = b.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === b.css(e, "float") && (l || (h.done(function() {
                            p.display = u
                        }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                        display: u
                    }), o && (m.hidden = !g), g && le([e], !0), h.done(function() {
                        for (i in g || le([e]), K.remove(e, "fxshow"), f) b.style(e, i, f[i])
                    })), l = st(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? at.prefilters.unshift(e) : at.prefilters.push(e)
            }
        }), b.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? b.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in b.fx.speeds ? i.duration = b.fx.speeds[i.duration] : i.duration = b.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                g(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue)
            }, i
        }, b.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ie).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = b.isEmptyObject(e),
                    o = b.speed(t, n, i),
                    s = function() {
                        var t = at(this, b.extend({}, e), o);
                        (r || K.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = b.timers,
                        s = K.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && nt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || b.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = K.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = b.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, b.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), b.each(["toggle", "show", "hide"], function(e, t) {
            var n = b.fn[t];
            b.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, r)
            }
        }), b.each({
            slideDown: ot("show"),
            slideUp: ot("hide"),
            slideToggle: ot("toggle"),
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
            b.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), b.timers = [], b.fx.tick = function() {
            var e, t = 0,
                n = b.timers;
            for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || b.fx.stop(), Je = void 0
        }, b.fx.timer = function(e) {
            b.timers.push(e), b.fx.start()
        }, b.fx.interval = 13, b.fx.start = function() {
            et || (et = !0, it())
        }, b.fx.stop = function() {
            et = null
        }, b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, b.fn.delay = function(t, n) {
            return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var lt, ut = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return $(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        }
    }), b.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (r = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = b.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(P);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), lt = {
        set: function(e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ut[t] || b.find.attr;
        ut[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = ut[s], ut[s] = r, r = null != n(e, t, i) ? s : null, ut[s] = o), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function pt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return $(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[b.propFix[e] || e]
            })
        }
    }), b.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t, r = b.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, ft(this)))
            });
            if ((t = pt(e)).length)
                for (; n = this[l++];)
                    if (r = ft(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, ft(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = pt(e)).length)
                for (; n = this[l++];)
                    if (r = ft(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, ft(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = b(this), s = pt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = ft(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + ht(ft(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var gt = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, b(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = b.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : ht(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = b.makeArray(t), s = r.length; s--;)((i = r[s]).selected = b.inArray(b.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
            }
        }, p.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        _t = function(e) {
            e.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, u, c, h, f, p, _ = [r || i],
                v = d.call(t, "type") ? t.type : t,
                y = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(v + b.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."), v = y.shift(), y.sort()), c = v.indexOf(":") < 0 && "on" + v, (t = t[b.expando] ? t : new b.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : b.makeArray(n, [t]), f = b.event.special[v] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!o && !f.noBubble && !m(r)) {
                    for (u = f.delegateType || v, mt.test(u + v) || (a = a.parentNode); a; a = a.parentNode) _.push(a), l = a;
                    l === (r.ownerDocument || i) && _.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = _[s++]) && !t.isPropagationStopped();) p = a, t.type = s > 1 ? u : f.bindType || v, (h = (K.get(a, "events") || {})[t.type] && K.get(a, "handle")) && h.apply(a, n), (h = c && a[c]) && h.apply && V(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = v, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(_.pop(), n) || !V(r) || c && g(r[v]) && !m(r) && ((l = r[c]) && (r[c] = null), b.event.triggered = v, t.isPropagationStopped() && p.addEventListener(v, _t), r[v](), t.isPropagationStopped() && p.removeEventListener(v, _t), b.event.triggered = void 0, l && (r[c] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(i, null, t)
        }
    }), b.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0)
        }
    }), p.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = K.access(i, t);
                r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = K.access(i, t) - 1;
                r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
            }
        }
    });
    var vt = e.location,
        yt = Date.now(),
        bt = /\?/;
    b.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t), n
    };
    var Ct = /\[\]$/,
        wt = /\r?\n/g,
        xt = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;

    function St(e, t, n, i) {
        var r;
        if (Array.isArray(t)) b.each(t, function(t, r) {
            n || Ct.test(e) ? i(e, r) : St(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== y(t)) i(e, t);
        else
            for (r in t) St(e + "[" + r + "]", t[r], n, i)
    }
    b.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) St(n, e[n], t, r);
        return i.join("&")
    }, b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && Tt.test(this.nodeName) && !xt.test(e) && (this.checked || !ue.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(wt, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Et = /#.*$/,
        At = /([?&])_=[^&]*/,
        kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        Mt = {},
        Nt = {},
        Ot = "*/".concat("*"),
        Pt = i.createElement("a");

    function jt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(P) || [];
            if (g(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Bt(e, t, n, i) {
        var r = {},
            o = e === Nt;

        function s(a) {
            var l;
            return r[a] = !0, b.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Ht(e, t) {
        var n, i, r = b.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && b.extend(!0, e, i), e
    }
    Pt.href = vt.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
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
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ht(Ht(e, b.ajaxSettings), t) : Ht(b.ajaxSettings, e)
        },
        ajaxPrefilter: jt(Mt),
        ajaxTransport: jt(Nt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, d, h, f, p = b.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? b(g) : b.event,
                _ = b.Deferred(),
                v = b.Callbacks("once memory"),
                y = p.statusCode || {},
                C = {},
                w = {},
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = kt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, C[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) T.always(e[T.status]);
                            else
                                for (t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), S(0, t), this
                    }
                };
            if (_.promise(T), p.url = ((t || p.url || vt.href) + "").replace(Dt, vt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
                u = i.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Pt.protocol + "//" + Pt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), Bt(Mt, p, n, T), c) return T;
            for (h in (d = b.event && p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), o = p.url.replace(Et, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (bt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(At, "$1"), f = (bt.test(o) ? "&" : "?") + "_=" + yt++ + f), p.url = o + f), p.ifModified && (b.lastModified[o] && T.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && T.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || c)) return T.abort();
            if (x = "abort", v.add(p.complete), T.done(p.success), T.fail(p.error), r = Bt(Nt, p, n, T)) {
                if (T.readyState = 1, d && m.trigger("ajaxSend", [T, p]), c) return T;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, r.send(C, S)
                } catch (e) {
                    if (c) throw e;
                    S(-1, e)
                }
            } else S(-1, "No Transport");

            function S(t, n, i, a) {
                var u, h, f, C, w, x = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (C = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, T, i)), C = function(e, t, n, i) {
                    var r, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
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
                }(p, C, T, u), u ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (b.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (b.etag[o] = w)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = C.state, h = C.data, u = !(f = C.error))) : (f = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + "", u ? _.resolveWith(g, [h, x, T]) : _.rejectWith(g, [T, x, f]), T.statusCode(y), y = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, p, u ? h : f]), v.fireWith(g, [T, x]), d && (m.trigger("ajaxComplete", [T, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }), b.each(["get", "post"], function(e, t) {
        b[t] = function(e, n, i, r) {
            return g(n) && (r = r || i, i = n, n = void 0), b.ajax(b.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, b.isPlainObject(e) && e))
        }
    }), b._evalUrl = function(e) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                b(this).replaceWith(this.childNodes)
            }), this
        }
    }), b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }, b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Rt = {
            0: 200,
            1223: 204
        },
        Ft = b.ajaxSettings.xhr();
    p.cors = !!Ft && "withCredentials" in Ft, p.ajax = Ft = !!Ft, b.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || Ft && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), b.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), b.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(r, o) {
                t = b("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var qt, $t = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || b.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || b.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? b(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, $t.push(r)), s && g(o) && o(s[0]), s = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((qt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), s = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, s), s && s.length && b(s).remove(), b.merge([], o.childNodes)));
        var r, o, s
    }, b.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = ht(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }, b.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = b.css(e, "position"),
                c = b(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = b.css(e, "top"), l = b.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, b.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, b.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                b.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = b(e).offset()).top += b.css(e, "borderTopWidth", !0), r.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - b.css(i, "marginTop", !0),
                    left: t.left - r.left - b.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(i) {
            return $(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), b.each(["top", "left"], function(e, t) {
        b.cssHooks[t] = qe(p.pixelPosition, function(e, n) {
            if (n) return n = Fe(e, t), Be.test(n) ? b(e).position()[t] + "px" : n
        })
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            b.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return $(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? b.css(t, n, a) : b.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), b.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || b.guid++, r
    }, b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = E, b.isFunction = g, b.isWindow = m, b.camelCase = G, b.type = y, b.now = Date.now, b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return b
    });
    var zt = e.jQuery,
        Wt = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = Wt), t && e.jQuery === b && (e.jQuery = zt), b
    }, t || (e.jQuery = e.$ = b), b
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = function(e) {
            var t = "transitionend";

            function n(t) {
                var n = this,
                    r = !1;
                return e(this).one(i.TRANSITION_END, function() {
                    r = !0
                }), setTimeout(function() {
                    r || i.triggerTransitionEnd(n)
                }, t), this
            }
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function(e) {
                    var t = e.getAttribute("data-target");
                    t && "#" !== t || (t = e.getAttribute("href") || "");
                    try {
                        return document.querySelector(t) ? t : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration");
                    return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(n) {
                    e(n).trigger(t)
                },
                supportsTransitionEnd: function() {
                    return Boolean(t)
                },
                isElement: function(e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function(e, t, n) {
                    for (var r in n)
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            var o = n[r],
                                s = t[r],
                                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                        }
                    var l
                }
            };
            return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, i
        }(t),
        l = function(e) {
            var t = e.fn.alert,
                n = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                i = "alert",
                o = "fade",
                s = "show",
                l = function() {
                    function t(e) {
                        this._element = e
                    }
                    var l = t.prototype;
                    return l.close = function(e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                    }, l.dispose = function() {
                        e.removeData(this._element, "bs.alert"), this._element = null
                    }, l._getRootElement = function(t) {
                        var n = a.getSelectorFromElement(t),
                            r = !1;
                        return n && (r = document.querySelector(n)), r || (r = e(t).closest("." + i)[0]), r
                    }, l._triggerCloseEvent = function(t) {
                        var i = e.Event(n.CLOSE);
                        return e(t).trigger(i), i
                    }, l._removeElement = function(t) {
                        var n = this;
                        if (e(t).removeClass(s), e(t).hasClass(o)) {
                            var i = a.getTransitionDurationFromElement(t);
                            e(t).one(a.TRANSITION_END, function(e) {
                                return n._destroyElement(t, e)
                            }).emulateTransitionEnd(i)
                        } else this._destroyElement(t)
                    }, l._destroyElement = function(t) {
                        e(t).detach().trigger(n.CLOSED).remove()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                r = i.data("bs.alert");
                            r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                        })
                    }, t._handleDismiss = function(e) {
                        return function(t) {
                            t && t.preventDefault(), e.close(this)
                        }
                    }, r(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }]), t
                }();
            return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function() {
                return e.fn.alert = t, l._jQueryInterface
            }, l
        }(t),
        u = function(e) {
            var t = "button",
                n = e.fn[t],
                i = "active",
                o = "btn",
                s = "focus",
                a = '[data-toggle^="button"]',
                l = '[data-toggle="buttons"]',
                u = "input",
                c = ".active",
                d = ".btn",
                h = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                },
                f = function() {
                    function t(e) {
                        this._element = e
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        var t = !0,
                            n = !0,
                            r = e(this._element).closest(l)[0];
                        if (r) {
                            var o = this._element.querySelector(u);
                            if (o) {
                                if ("radio" === o.type)
                                    if (o.checked && this._element.classList.contains(i)) t = !1;
                                    else {
                                        var s = r.querySelector(c);
                                        s && e(s).removeClass(i)
                                    }
                                if (t) {
                                    if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;
                                    o.checked = !this._element.classList.contains(i), e(o).trigger("change")
                                }
                                o.focus(), n = !1
                            }
                        }
                        n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(i)), t && e(this._element).toggleClass(i)
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.button"), this._element = null
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this).data("bs.button");
                            i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                        })
                    }, r(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }]), t
                }();
            return e(document).on(h.CLICK_DATA_API, a, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(o) || (n = e(n).closest(d)), f._jQueryInterface.call(e(n), "toggle")
            }).on(h.FOCUS_BLUR_DATA_API, a, function(t) {
                var n = e(t.target).closest(d)[0];
                e(n).toggleClass(s, /^focus(in)?$/.test(t.type))
            }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
                return e.fn[t] = n, f._jQueryInterface
            }, f
        }(t),
        c = function(e) {
            var t = "carousel",
                n = "bs.carousel",
                i = "." + n,
                o = e.fn[t],
                l = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                u = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                c = "next",
                d = "prev",
                h = "left",
                f = "right",
                p = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                },
                g = "carousel",
                m = "active",
                _ = "slide",
                v = "carousel-item-right",
                y = "carousel-item-left",
                b = "carousel-item-next",
                C = "carousel-item-prev",
                w = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                x = function() {
                    function o(t, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = this._element.querySelector(w.INDICATORS), this._addEventListeners()
                    }
                    var x = o.prototype;
                    return x.next = function() {
                        this._isSliding || this._slide(c)
                    }, x.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, x.prev = function() {
                        this._isSliding || this._slide(d)
                    }, x.pause = function(e) {
                        e || (this._isPaused = !0), this._element.querySelector(w.NEXT_PREV) && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, x.cycle = function(e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, x.to = function(t) {
                        var n = this;
                        this._activeElement = this._element.querySelector(w.ACTIVE_ITEM);
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(p.SLID, function() {
                                return n.to(t)
                            });
                            else {
                                if (i === t) return this.pause(), void this.cycle();
                                var r = t > i ? c : d;
                                this._slide(r, this._items[t])
                            }
                    }, x.dispose = function() {
                        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, x._getConfig = function(e) {
                        return e = s({}, l, e), a.typeCheckConfig(t, e, u), e
                    }, x._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(p.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (e(this._element).on(p.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(p.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        }), "ontouchstart" in document.documentElement && e(this._element).on(p.TOUCHEND, function() {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }, x._keydown = function(e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next()
                        }
                    }, x._getItemIndex = function(e) {
                        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(w.ITEM)) : [], this._items.indexOf(e)
                    }, x._getItemByDirection = function(e, t) {
                        var n = e === c,
                            i = e === d,
                            r = this._getItemIndex(t),
                            o = this._items.length - 1;
                        if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                        var s = (r + (e === d ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, x._triggerSlideEvent = function(t, n) {
                        var i = this._getItemIndex(t),
                            r = this._getItemIndex(this._element.querySelector(w.ACTIVE_ITEM)),
                            o = e.Event(p.SLIDE, {
                                relatedTarget: t,
                                direction: n,
                                from: r,
                                to: i
                            });
                        return e(this._element).trigger(o), o
                    }, x._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(this._indicatorsElement.querySelectorAll(w.ACTIVE));
                            e(n).removeClass(m);
                            var i = this._indicatorsElement.children[this._getItemIndex(t)];
                            i && e(i).addClass(m)
                        }
                    }, x._slide = function(t, n) {
                        var i, r, o, s = this,
                            l = this._element.querySelector(w.ACTIVE_ITEM),
                            u = this._getItemIndex(l),
                            d = n || l && this._getItemByDirection(t, l),
                            g = this._getItemIndex(d),
                            x = Boolean(this._interval);
                        if (t === c ? (i = y, r = b, o = h) : (i = v, r = C, o = f), d && e(d).hasClass(m)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && l && d) {
                            this._isSliding = !0, x && this.pause(), this._setActiveIndicatorElement(d);
                            var T = e.Event(p.SLID, {
                                relatedTarget: d,
                                direction: o,
                                from: u,
                                to: g
                            });
                            if (e(this._element).hasClass(_)) {
                                e(d).addClass(r), a.reflow(d), e(l).addClass(i), e(d).addClass(i);
                                var S = a.getTransitionDurationFromElement(l);
                                e(l).one(a.TRANSITION_END, function() {
                                    e(d).removeClass(i + " " + r).addClass(m), e(l).removeClass(m + " " + r + " " + i), s._isSliding = !1, setTimeout(function() {
                                        return e(s._element).trigger(T)
                                    }, 0)
                                }).emulateTransitionEnd(S)
                            } else e(l).removeClass(m), e(d).addClass(m), this._isSliding = !1, e(this._element).trigger(T);
                            x && this.cycle()
                        }
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                r = s({}, l, e(this).data());
                            "object" == typeof t && (r = s({}, r, t));
                            var a = "string" == typeof t ? t : r.slide;
                            if (i || (i = new o(this, r), e(this).data(n, i)), "number" == typeof t) i.to(t);
                            else if ("string" == typeof a) {
                                if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');
                                i[a]()
                            } else r.interval && (i.pause(), i.cycle())
                        })
                    }, o._dataApiClickHandler = function(t) {
                        var i = a.getSelectorFromElement(this);
                        if (i) {
                            var r = e(i)[0];
                            if (r && e(r).hasClass(g)) {
                                var l = s({}, e(r).data(), e(this).data()),
                                    u = this.getAttribute("data-slide-to");
                                u && (l.interval = !1), o._jQueryInterface.call(e(r), l), u && e(r).data(n).to(u), t.preventDefault()
                            }
                        }
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }]), o
                }();
            return e(document).on(p.CLICK_DATA_API, w.DATA_SLIDE, x._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(w.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
                    var r = e(t[n]);
                    x._jQueryInterface.call(r, r.data())
                }
            }), e.fn[t] = x._jQueryInterface, e.fn[t].Constructor = x, e.fn[t].noConflict = function() {
                return e.fn[t] = o, x._jQueryInterface
            }, x
        }(t),
        d = function(e) {
            var t = "collapse",
                n = "bs.collapse",
                i = e.fn[t],
                o = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                u = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                },
                c = "show",
                d = "collapse",
                h = "collapsing",
                f = "collapsed",
                p = "width",
                g = "height",
                m = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                _ = function() {
                    function i(t, n) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var i = [].slice.call(document.querySelectorAll(m.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                            var s = i[r],
                                l = a.getSelectorFromElement(s),
                                u = [].slice.call(document.querySelectorAll(l)).filter(function(e) {
                                    return e === t
                                });
                            null !== l && u.length > 0 && (this._selector = l, this._triggerArray.push(s))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var _ = i.prototype;
                    return _.toggle = function() {
                        e(this._element).hasClass(c) ? this.hide() : this.show()
                    }, _.show = function() {
                        var t, r, o = this;
                        if (!this._isTransitioning && !e(this._element).hasClass(c) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(m.ACTIVES)).filter(function(e) {
                                return e.getAttribute("data-parent") === o._config.parent
                            })).length && (t = null), !(t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
                            var s = e.Event(u.SHOW);
                            if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null));
                                var l = this._getDimension();
                                e(this._element).removeClass(d).addClass(h), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                    g = a.getTransitionDurationFromElement(this._element);
                                e(this._element).one(a.TRANSITION_END, function() {
                                    e(o._element).removeClass(h).addClass(d).addClass(c), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(u.SHOWN)
                                }).emulateTransitionEnd(g), this._element.style[l] = this._element[p] + "px"
                            }
                        }
                    }, _.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(c)) {
                            var n = e.Event(u.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass(h).removeClass(d).removeClass(c);
                                var r = this._triggerArray.length;
                                if (r > 0)
                                    for (var o = 0; o < r; o++) {
                                        var s = this._triggerArray[o],
                                            l = a.getSelectorFromElement(s);
                                        if (null !== l) e([].slice.call(document.querySelectorAll(l))).hasClass(c) || e(s).addClass(f).attr("aria-expanded", !1)
                                    }
                                this.setTransitioning(!0);
                                this._element.style[i] = "";
                                var p = a.getTransitionDurationFromElement(this._element);
                                e(this._element).one(a.TRANSITION_END, function() {
                                    t.setTransitioning(!1), e(t._element).removeClass(h).addClass(d).trigger(u.HIDDEN)
                                }).emulateTransitionEnd(p)
                            }
                        }
                    }, _.setTransitioning = function(e) {
                        this._isTransitioning = e
                    }, _.dispose = function() {
                        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, _._getConfig = function(e) {
                        return (e = s({}, o, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, l), e
                    }, _._getDimension = function() {
                        return e(this._element).hasClass(p) ? p : g
                    }, _._getParent = function() {
                        var t = this,
                            n = null;
                        a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            o = [].slice.call(n.querySelectorAll(r));
                        return e(o).each(function(e, n) {
                            t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, _._addAriaAndCollapsedClass = function(t, n) {
                        if (t) {
                            var i = e(t).hasClass(c);
                            n.length && e(n).toggleClass(f, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function(e) {
                        var t = a.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null
                    }, i._jQueryInterface = function(t) {
                        return this.each(function() {
                            var r = e(this),
                                a = r.data(n),
                                l = s({}, o, r.data(), "object" == typeof t && t ? t : {});
                            if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1), a || (a = new i(this, l), r.data(n, a)), "string" == typeof t) {
                                if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');
                                a[t]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), i
                }();
            return e(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = e(this),
                    r = a.getSelectorFromElement(this),
                    o = [].slice.call(document.querySelectorAll(r));
                e(o).each(function() {
                    var t = e(this),
                        r = t.data(n) ? "toggle" : i.data();
                    _._jQueryInterface.call(t, r)
                })
            }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function() {
                return e.fn[t] = i, _._jQueryInterface
            }, _
        }(t),
        h = function(e) {
            var t = "dropdown",
                i = "bs.dropdown",
                o = "." + i,
                l = e.fn[t],
                u = new RegExp("38|40|27"),
                c = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    CLICK: "click" + o,
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                },
                d = "disabled",
                h = "show",
                f = "dropup",
                p = "dropright",
                g = "dropleft",
                m = "dropdown-menu-right",
                _ = "position-static",
                v = '[data-toggle="dropdown"]',
                y = ".dropdown form",
                b = ".dropdown-menu",
                C = ".navbar-nav",
                w = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                x = "top-start",
                T = "top-end",
                S = "bottom-start",
                L = "bottom-end",
                E = "right-start",
                A = "left-start",
                k = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic"
                },
                I = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string"
                },
                D = function() {
                    function l(e, t) {
                        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var y = l.prototype;
                    return y.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(d)) {
                            var t = l._getParentFromElement(this._element),
                                i = e(this._menu).hasClass(h);
                            if (l._clearMenus(), !i) {
                                var r = {
                                        relatedTarget: this._element
                                    },
                                    o = e.Event(c.SHOW, r);
                                if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var s = this._element;
                                        "parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(_), this._popper = new n(s, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(t).closest(C).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(c.SHOWN, r))
                                }
                            }
                        }
                    }, y.dispose = function() {
                        e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, y.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, y._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(c.CLICK, function(e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                    }, y._getConfig = function(n) {
                        return n = s({}, this.constructor.Default, e(this._element).data(), n), a.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, y._getMenuElement = function() {
                        if (!this._menu) {
                            var e = l._getParentFromElement(this._element);
                            e && (this._menu = e.querySelector(b))
                        }
                        return this._menu
                    }, y._getPlacement = function() {
                        var t = e(this._element.parentNode),
                            n = S;
                        return t.hasClass(f) ? (n = x, e(this._menu).hasClass(m) && (n = T)) : t.hasClass(p) ? n = E : t.hasClass(g) ? n = A : e(this._menu).hasClass(m) && (n = L), n
                    }, y._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0
                    }, y._getPopperConfig = function() {
                        var e = this,
                            t = {};
                        "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t
                        } : t.offset = this._config.offset;
                        var n = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        return "static" === this._config.display && (n.modifiers.applyStyle = {
                            enabled: !1
                        }), n
                    }, l._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(i);
                            if (n || (n = new l(this, "object" == typeof t ? t : null), e(this).data(i, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, l._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var n = [].slice.call(document.querySelectorAll(v)), r = 0, o = n.length; r < o; r++) {
                                var s = l._getParentFromElement(n[r]),
                                    a = e(n[r]).data(i),
                                    u = {
                                        relatedTarget: n[r]
                                    };
                                if (t && "click" === t.type && (u.clickEvent = t), a) {
                                    var d = a._menu;
                                    if (e(s).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                                        var f = e.Event(c.HIDE, u);
                                        e(s).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(d).removeClass(h), e(s).removeClass(h).trigger(e.Event(c.HIDDEN, u)))
                                    }
                                }
                            }
                    }, l._getParentFromElement = function(e) {
                        var t, n = a.getSelectorFromElement(e);
                        return n && (t = document.querySelector(n)), t || e.parentNode
                    }, l._dataApiKeydownHandler = function(t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(b).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
                            var n = l._getParentFromElement(this),
                                i = e(n).hasClass(h);
                            if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                var r = [].slice.call(n.querySelectorAll(w));
                                if (0 !== r.length) {
                                    var o = r.indexOf(t.target);
                                    38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var s = n.querySelector(v);
                                    e(s).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, r(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return k
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return I
                        }
                    }]), l
                }();
            return e(document).on(c.KEYDOWN_DATA_API, v, D._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, b, D._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, D._clearMenus).on(c.CLICK_DATA_API, v, function(t) {
                t.preventDefault(), t.stopPropagation(), D._jQueryInterface.call(e(this), "toggle")
            }).on(c.CLICK_DATA_API, y, function(e) {
                e.stopPropagation()
            }), e.fn[t] = D._jQueryInterface, e.fn[t].Constructor = D, e.fn[t].noConflict = function() {
                return e.fn[t] = l, D._jQueryInterface
            }, D
        }(t),
        f = function(e) {
            var t = "modal",
                n = ".bs.modal",
                i = e.fn.modal,
                o = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                l = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                u = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                c = "modal-scrollbar-measure",
                d = "modal-backdrop",
                h = "modal-open",
                f = "fade",
                p = "show",
                g = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top"
                },
                m = function() {
                    function i(e, t) {
                        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(g.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                    }
                    var m = i.prototype;
                    return m.toggle = function(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, m.show = function(t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            e(this._element).hasClass(f) && (this._isTransitioning = !0);
                            var i = e.Event(u.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(u.CLICK_DISMISS, g.DATA_DISMISS, function(e) {
                                return n.hide(e)
                            }), e(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(u.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(t)
                            }))
                        }
                    }, m.hide = function(t) {
                        var n = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = e.Event(u.HIDE);
                            if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = e(this._element).hasClass(f);
                                if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(u.FOCUSIN), e(this._element).removeClass(p), e(this._element).off(u.CLICK_DISMISS), e(this._dialog).off(u.MOUSEDOWN_DISMISS), r) {
                                    var o = a.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(a.TRANSITION_END, function(e) {
                                        return n._hideModal(e)
                                    }).emulateTransitionEnd(o)
                                } else this._hideModal()
                            }
                        }
                    }, m.dispose = function() {
                        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, m.handleUpdate = function() {
                        this._adjustDialog()
                    }, m._getConfig = function(e) {
                        return e = s({}, o, e), a.typeCheckConfig(t, e, l), e
                    }, m._showElement = function(t) {
                        var n = this,
                            i = e(this._element).hasClass(f);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass(p), this._config.focus && this._enforceFocus();
                        var r = e.Event(u.SHOWN, {
                                relatedTarget: t
                            }),
                            o = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                            };
                        if (i) {
                            var s = a.getTransitionDurationFromElement(this._element);
                            e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o()
                    }, m._enforceFocus = function() {
                        var t = this;
                        e(document).off(u.FOCUSIN).on(u.FOCUSIN, function(n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                        })
                    }, m._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(u.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS)
                    }, m._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(u.RESIZE, function(e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(u.RESIZE)
                    }, m._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            e(document.body).removeClass(h), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(u.HIDDEN)
                        })
                    }, m._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, m._showBackdrop = function(t) {
                        var n = this,
                            i = e(this._element).hasClass(f) ? f : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = d, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(u.CLICK_DISMISS, function(e) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(p), !t) return;
                            if (!i) return void t();
                            var r = a.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(r)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(p);
                            var o = function() {
                                n._removeBackdrop(), t && t()
                            };
                            if (e(this._element).hasClass(f)) {
                                var s = a.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else o()
                        } else t && t()
                    }, m._adjustDialog = function() {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, m._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, m._checkScrollbar = function() {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, m._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            var n = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT)),
                                i = [].slice.call(document.querySelectorAll(g.STICKY_CONTENT));
                            e(n).each(function(n, i) {
                                var r = i.style.paddingRight,
                                    o = e(i).css("padding-right");
                                e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                            }), e(i).each(function(n, i) {
                                var r = i.style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                            });
                            var r = document.body.style.paddingRight,
                                o = e(document.body).css("padding-right");
                            e(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                        }
                    }, m._resetScrollbar = function() {
                        var t = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT));
                        e(t).each(function(t, n) {
                            var i = e(n).data("padding-right");
                            e(n).removeData("padding-right"), n.style.paddingRight = i || ""
                        });
                        var n = [].slice.call(document.querySelectorAll("" + g.STICKY_CONTENT));
                        e(n).each(function(t, n) {
                            var i = e(n).data("margin-right");
                            void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var i = e(document.body).data("padding-right");
                        e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                    }, m._getScrollbarWidth = function() {
                        var e = document.createElement("div");
                        e.className = c, document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, i._jQueryInterface = function(t, n) {
                        return this.each(function() {
                            var r = e(this).data("bs.modal"),
                                a = s({}, o, e(this).data(), "object" == typeof t && t ? t : {});
                            if (r || (r = new i(this, a), e(this).data("bs.modal", r)), "string" == typeof t) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t](n)
                            } else a.show && r.show(n)
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), i
                }();
            return e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
                var n, i = this,
                    r = a.getSelectorFromElement(this);
                r && (n = document.querySelector(r));
                var o = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var l = e(n).one(u.SHOW, function(t) {
                    t.isDefaultPrevented() || l.one(u.HIDDEN, function() {
                        e(i).is(":visible") && i.focus()
                    })
                });
                m._jQueryInterface.call(e(n), o, this)
            }), e.fn.modal = m._jQueryInterface, e.fn.modal.Constructor = m, e.fn.modal.noConflict = function() {
                return e.fn.modal = i, m._jQueryInterface
            }, m
        }(t),
        p = function(e) {
            var t = "tooltip",
                i = ".bs.tooltip",
                o = e.fn[t],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                u = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                d = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                h = "show",
                f = "out",
                p = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                g = "fade",
                m = "show",
                _ = ".tooltip-inner",
                v = ".arrow",
                y = "hover",
                b = "focus",
                C = "click",
                w = "manual",
                x = function() {
                    function o(e, t) {
                        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    var x = o.prototype;
                    return x.enable = function() {
                        this._isEnabled = !0
                    }, x.disable = function() {
                        this._isEnabled = !1
                    }, x.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, x.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, x.dispose = function() {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, x.show = function() {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(i);
                            var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                s = a.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(g);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                u = this._getAttachment(l);
                            this.addAttachmentClass(u);
                            var c = !1 === this.config.container ? document.body : e(document).find(this.config.container);
                            e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                placement: u,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: v
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function(e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(o).addClass(m), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                            var d = function() {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === f && t._leave(null, t)
                            };
                            if (e(this.tip).hasClass(g)) {
                                var h = a.getTransitionDurationFromElement(this.tip);
                                e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h)
                            } else d()
                        }
                    }, x.hide = function(t) {
                        var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            o = function() {
                                n._hoverState !== h && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                            };
                        if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
                            if (e(i).removeClass(m), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[C] = !1, this._activeTrigger[b] = !1, this._activeTrigger[y] = !1, e(this.tip).hasClass(g)) {
                                var s = a.getTransitionDurationFromElement(i);
                                e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else o();
                            this._hoverState = ""
                        }
                    }, x.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, x.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, x.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, x.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, x.setContent = function() {
                        var t = this.getTipElement();
                        this.setElementContent(e(t.querySelectorAll(_)), this.getTitle()), e(t).removeClass(g + " " + m)
                    }, x.setElementContent = function(t, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                    }, x.getTitle = function() {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, x._getAttachment = function(e) {
                        return c[e.toUpperCase()]
                    }, x._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                return t.toggle(e)
                            });
                            else if (n !== w) {
                                var i = n === y ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    r = n === y ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(r, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function() {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = s({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, x._fixTitle = function() {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, x._enter = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? b : y] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                            n._hoverState === h && n.show()
                        }, n.config.delay.show) : n.show())
                    }, x._leave = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? b : y] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === f && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, x._isWithActiveTrigger = function() {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }, x._getConfig = function(n) {
                        return "number" == typeof(n = s({}, this.constructor.Default, e(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), a.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, x._getDelegateConfig = function() {
                        var e = {};
                        if (this.config)
                            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, x._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(l);
                        null !== n && n.length && t.removeClass(n.join(""))
                    }, x._handlePopperPlacementChange = function(e) {
                        var t = e.instance;
                        this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, x._fixTransition = function() {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.tooltip"),
                                i = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return u
                        }
                    }]), o
                }();
            return e.fn[t] = x._jQueryInterface, e.fn[t].Constructor = x, e.fn[t].noConflict = function() {
                return e.fn[t] = o, x._jQueryInterface
            }, x
        }(t),
        g = function(e) {
            var t = "popover",
                n = ".bs.popover",
                i = e.fn[t],
                o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                a = s({}, p.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                l = s({}, p.DefaultType, {
                    content: "(string|element|function)"
                }),
                u = "fade",
                c = "show",
                d = ".popover-header",
                h = ".popover-body",
                f = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                g = function(i) {
                    var s, p;

                    function g() {
                        return i.apply(this, arguments) || this
                    }
                    p = i, (s = g).prototype = Object.create(p.prototype), s.prototype.constructor = s, s.__proto__ = p;
                    var m = g.prototype;
                    return m.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, m.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, m.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, m.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(d), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(h), n), t.removeClass(u + " " + c)
                    }, m._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, m._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(o);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, g._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.popover"),
                                i = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new g(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(g, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return l
                        }
                    }]), g
                }(p);
            return e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function() {
                return e.fn[t] = i, g._jQueryInterface
            }, g
        }(t),
        m = function(e) {
            var t = "scrollspy",
                n = e.fn[t],
                i = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                o = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                l = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                },
                u = "dropdown-item",
                c = "active",
                d = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                h = "offset",
                f = "position",
                p = function() {
                    function n(t, n) {
                        var i = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function(e) {
                            return i._process(e)
                        }), this.refresh(), this._process()
                    }
                    var p = n.prototype;
                    return p.refresh = function() {
                        var t = this,
                            n = this._scrollElement === this._scrollElement.window ? h : f,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === f ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                            var n, o = a.getSelectorFromElement(t);
                            if (o && (n = document.querySelector(o)), n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height) return [e(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function(e) {
                            return e
                        }).sort(function(e, t) {
                            return e[0] - t[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, p.dispose = function() {
                        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, p._getConfig = function(n) {
                        if ("string" != typeof(n = s({}, i, "object" == typeof n && n ? n : {})).target) {
                            var r = e(n.target).attr("id");
                            r || (r = a.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r
                        }
                        return a.typeCheckConfig(t, n, o), n
                    }, p._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, p._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, p._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, p._process = function() {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) {
                                this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                            }
                        }
                    }, p._activate = function(t) {
                        this._activeTarget = t, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = e([].slice.call(document.querySelectorAll(n.join(","))));
                        i.hasClass(u) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(c), i.addClass(c)) : (i.addClass(c), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(c), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(c)), e(this._scrollElement).trigger(l.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, p._clear = function() {
                        var t = [].slice.call(document.querySelectorAll(this._selector));
                        e(t).filter(d.ACTIVE).removeClass(c)
                    }, n._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data("bs.scrollspy");
                            if (i || (i = new n(this, "object" == typeof t && t), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return i
                        }
                    }]), n
                }();
            return e(window).on(l.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(d.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    p._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
                return e.fn[t] = n, p._jQueryInterface
            }, p
        }(t),
        _ = function(e) {
            var t = e.fn.tab,
                n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                i = "dropdown-menu",
                o = "active",
                s = "disabled",
                l = "fade",
                u = "show",
                c = ".dropdown",
                d = ".nav, .list-group",
                h = ".active",
                f = "> li > .active",
                p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                g = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                _ = function() {
                    function t(e) {
                        this._element = e
                    }
                    var p = t.prototype;
                    return p.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o) || e(this._element).hasClass(s))) {
                            var i, r, l = e(this._element).closest(d)[0],
                                u = a.getSelectorFromElement(this._element);
                            if (l) {
                                var c = "UL" === l.nodeName ? f : h;
                                r = (r = e.makeArray(e(l).find(c)))[r.length - 1]
                            }
                            var p = e.Event(n.HIDE, {
                                    relatedTarget: this._element
                                }),
                                g = e.Event(n.SHOW, {
                                    relatedTarget: r
                                });
                            if (r && e(r).trigger(p), e(this._element).trigger(g), !g.isDefaultPrevented() && !p.isDefaultPrevented()) {
                                u && (i = document.querySelector(u)), this._activate(this._element, l);
                                var m = function() {
                                    var i = e.Event(n.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        o = e.Event(n.SHOWN, {
                                            relatedTarget: r
                                        });
                                    e(r).trigger(i), e(t._element).trigger(o)
                                };
                                i ? this._activate(i, i.parentNode, m) : m()
                            }
                        }
                    }, p.dispose = function() {
                        e.removeData(this._element, "bs.tab"), this._element = null
                    }, p._activate = function(t, n, i) {
                        var r = this,
                            o = ("UL" === n.nodeName ? e(n).find(f) : e(n).children(h))[0],
                            s = i && o && e(o).hasClass(l),
                            u = function() {
                                return r._transitionComplete(t, o, i)
                            };
                        if (o && s) {
                            var c = a.getTransitionDurationFromElement(o);
                            e(o).one(a.TRANSITION_END, u).emulateTransitionEnd(c)
                        } else u()
                    }, p._transitionComplete = function(t, n, r) {
                        if (n) {
                            e(n).removeClass(u + " " + o);
                            var s = e(n.parentNode).find(m)[0];
                            s && e(s).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(o), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(u), t.parentNode && e(t.parentNode).hasClass(i)) {
                            var l = e(t).closest(c)[0];
                            if (l) {
                                var d = [].slice.call(l.querySelectorAll(g));
                                e(d).addClass(o)
                            }
                            t.setAttribute("aria-expanded", !0)
                        }
                        r && r()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                r = i.data("bs.tab");
                            if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, r(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3"
                        }
                    }]), t
                }();
            return e(document).on(n.CLICK_DATA_API, p, function(t) {
                t.preventDefault(), _._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = _._jQueryInterface, e.fn.tab.Constructor = _, e.fn.tab.noConflict = function() {
                return e.fn.tab = t, _._jQueryInterface
            }, _
        }(t);
    ! function(e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = a, e.Alert = l, e.Button = u, e.Carousel = c, e.Collapse = d, e.Dropdown = h, e.Modal = f, e.Popover = g, e.Scrollspy = m, e.Tab = _, e.Tooltip = p, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(e) {
    var t = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        allow_duplicates: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        onClick: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };

    function n(n, i, r) {
        var o, s, a = {
            content: {
                message: "object" == typeof i ? i.message : i,
                title: i.title ? i.title : "",
                icon: i.icon ? i.icon : "",
                url: i.url ? i.url : "#",
                target: i.target ? i.target : "-"
            }
        };
        r = e.extend(!0, {}, a, r), this.settings = e.extend(!0, {}, t, r), this._defaults = t, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && (o = this, s = !1, e('[data-notify="container"]').each(function(t, n) {
            var i = e(n),
                r = i.find('[data-notify="title"]').html().trim(),
                a = i.find('[data-notify="message"]').html().trim(),
                l = r === e("<div>" + o.settings.content.title + "</div>").html().trim(),
                u = a === e("<div>" + o.settings.content.message + "</div>").html().trim(),
                c = i.hasClass("alert-" + o.settings.type);
            return l && u && c && (s = !0), !s
        }), !s)) && this.init()
    }
    String.format = function() {
        var e = arguments;
        return arguments[0].replace(/(\{\{\d\}\}|\{\d\})/g, function(t) {
            if ("{{" === t.substring(0, 2)) return t;
            var n = parseInt(t.match(/\d/)[0]);
            return e[n + 1]
        })
    }, e.extend(n.prototype, {
        init: function() {
            var e = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function(t, n) {
                    var i = {};
                    for (var r in "string" == typeof t ? i[t] = n : i = t, i) switch (r) {
                        case "type":
                            this.$ele.removeClass("alert-" + e.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + e.settings.type), e.settings.type = i[r], this.$ele.addClass("alert-" + i[r]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[r]);
                            break;
                        case "icon":
                            var o = this.$ele.find('[data-notify="icon"]');
                            "class" === e.settings.icon_type.toLowerCase() ? o.removeClass(e.settings.content.icon).addClass(i[r]) : (o.is("img") || o.find("img"), o.attr("src", i[r])), e.settings.content.icon = i[t];
                            break;
                        case "progress":
                            var s = e.settings.delay - e.settings.delay * (i[r] / 100);
                            this.$ele.data("notify-delay", s), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[r]).css("width", i[r] + "%");
                            break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", i[r]);
                            break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", i[r]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + r + '"]').html(i[r])
                    }
                    var a = this.$ele.outerHeight() + parseInt(e.settings.spacing) + parseInt(e.settings.offset.y);
                    e.reposition(a)
                },
                close: function() {
                    e.close()
                }
            }
        },
        buildNotify: function() {
            var t = this.settings.content;
            this.$ele = e(String.format(this.settings.template, this.settings.type, t.title, t.message, t.url, t.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        },
        setIcon: function() {
            "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        },
        styleDismiss: function() {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        },
        styleURL: function() {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: this.settings.z_index + 1
            })
        },
        placement: function() {
            var t = this,
                n = this.settings.offset.y,
                i = {
                    display: "inline-block",
                    margin: "0px auto",
                    position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                    transition: "all .5s ease-in-out",
                    zIndex: this.settings.z_index
                },
                r = !1,
                o = this.settings;
            switch (e('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
                n = Math.max(n, parseInt(e(this).css(o.placement.from)) + parseInt(e(this).outerHeight()) + parseInt(o.spacing))
            }), !0 === this.settings.newest_on_top && (n = this.settings.offset.y), i[this.settings.placement.from] = n + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    i[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case "center":
                    i.left = 0, i.right = 0
            }
            this.$ele.css(i).addClass(this.settings.animate.enter), e.each(Array("webkit-", "moz-", "o-", "ms-", ""), function(e, n) {
                t.$ele[0].style[n + "AnimationIterationCount"] = 1
            }), e(this.settings.element).append(this.$ele), !0 === this.settings.newest_on_top && (n = parseInt(n) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(n)), e.isFunction(t.settings.onShow) && t.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function() {
                r = !0
            }).one(this.animations.end, function() {
                t.$ele.removeClass(t.settings.animate.enter), e.isFunction(t.settings.onShown) && t.settings.onShown.call(this)
            }), setTimeout(function() {
                r || e.isFunction(t.settings.onShown) && t.settings.onShown.call(this)
            }, 600)
        },
        bind: function() {
            var t = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function() {
                    t.close()
                }), e.isFunction(t.settings.onClick) && this.$ele.on("click", function(e) {
                    e.target != t.$ele.find('[data-notify="dismiss"]')[0] && t.settings.onClick.call(this, e)
                }), this.$ele.mouseover(function() {
                    e(this).data("data-hover", "true")
                }).mouseout(function() {
                    e(this).data("data-hover", "false")
                }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                t.$ele.data("notify-delay", t.settings.delay);
                var n = setInterval(function() {
                    var e = parseInt(t.$ele.data("notify-delay")) - t.settings.timer;
                    if ("false" === t.$ele.data("data-hover") && "pause" === t.settings.mouse_over || "pause" != t.settings.mouse_over) {
                        var i = (t.settings.delay - e) / t.settings.delay * 100;
                        t.$ele.data("notify-delay", e), t.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%")
                    }
                    e <= -t.settings.timer && (clearInterval(n), t.close())
                }, t.settings.timer)
            }
        },
        close: function() {
            var t = this,
                n = parseInt(this.$ele.css(this.settings.placement.from)),
                i = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), t.reposition(n), e.isFunction(t.settings.onClose) && t.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function() {
                i = !0
            }).one(this.animations.end, function() {
                e(this).remove(), e.isFunction(t.settings.onClosed) && t.settings.onClosed.call(this)
            }), setTimeout(function() {
                i || (t.$ele.remove(), e.isFunction(t.settings.onClosed) && t.settings.onClosed.call(this))
            }, 600)
        },
        reposition: function(t) {
            var n = this,
                i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                r = this.$ele.nextAll(i);
            !0 === this.settings.newest_on_top && (r = this.$ele.prevAll(i)), r.each(function() {
                e(this).css(n.settings.placement.from, t), t = parseInt(t) + parseInt(n.settings.spacing) + e(this).outerHeight()
            })
        }
    }), e.notify = function(e, t) {
        return new n(this, e, t).notify
    }, e.notifyDefaults = function(n) {
        return t = e.extend(!0, {}, t, n)
    }, e.notifyClose = function(t) {
        void 0 === t || "all" === t ? e("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === t || "info" === t || "warning" === t || "danger" === t ? e(".alert-" + t + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t ? e(t + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : e('[data-notify-position="' + t + '"]').find('[data-notify="dismiss"]').trigger("click")
    }, e.notifyCloseExcept = function(t) {
        "success" === t || "info" === t || "warning" === t || "danger" === t ? e("[data-notify]").not(".alert-" + t).find('[data-notify="dismiss"]').trigger("click") : e("[data-notify]").not(t).find('[data-notify="dismiss"]').trigger("click")
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.compareVersions = t()
}(this, function() {
    var e = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

    function t(e) {
        var t, n, i = e.replace(/^v/, "").replace(/\+.*$/, ""),
            r = (n = "-", -1 === (t = i).indexOf(n) ? t.length : t.indexOf(n)),
            o = i.substring(0, r).split(".");
        return o.push(i.substring(r + 1)), o
    }

    function n(e) {
        return isNaN(Number(e)) ? e : Number(e)
    }

    function i(t) {
        if ("string" != typeof t) throw new TypeError("Invalid argument expected string");
        if (!e.test(t)) throw new Error("Invalid argument not valid semver ('" + t + "' received)")
    }
    return function(e, r) {
        [e, r].forEach(i);
        for (var o = t(e), s = t(r), a = 0; a < Math.max(o.length - 1, s.length - 1); a++) {
            var l = parseInt(o[a] || 0, 10),
                u = parseInt(s[a] || 0, 10);
            if (l > u) return 1;
            if (u > l) return -1
        }
        var c = o[o.length - 1],
            d = s[s.length - 1];
        if (c && d) {
            var h = c.split(".").map(n),
                f = d.split(".").map(n);
            for (a = 0; a < Math.max(h.length, f.length); a++) {
                if (void 0 === h[a] || "string" == typeof f[a] && "number" == typeof h[a]) return -1;
                if (void 0 === f[a] || "string" == typeof h[a] && "number" == typeof f[a]) return 1;
                if (h[a] > f[a]) return 1;
                if (f[a] > h[a]) return -1
            }
        } else if (c || d) return c ? -1 : 1;
        return 0
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e.Leaflet = e.Leaflet || {}, e.Leaflet.markercluster = e.Leaflet.markercluster || {}))
}(this, function(e) {
    "use strict";
    var t = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
            maxClusterRadius: 80,
            iconCreateFunction: null,
            clusterPane: L.Marker.prototype.options.pane,
            spiderfyOnMaxZoom: !0,
            showCoverageOnHover: !0,
            zoomToBoundsOnClick: !0,
            singleMarkerMode: !1,
            disableClusteringAtZoom: null,
            removeOutsideVisibleBounds: !0,
            animate: !0,
            animateAddingMarkers: !1,
            spiderfyDistanceMultiplier: 1,
            spiderLegPolylineOptions: {
                weight: 1.5,
                color: "#222",
                opacity: .5
            },
            chunkedLoading: !1,
            chunkInterval: 200,
            chunkDelay: 50,
            chunkProgress: null,
            polygonOptions: {}
        },
        initialize: function(e) {
            L.Util.setOptions(this, e), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
                dragstart: this._childMarkerDragStart,
                move: this._childMarkerMoved,
                dragend: this._childMarkerDragEnd
            };
            var t = L.DomUtil.TRANSITION && this.options.animate;
            L.extend(this, t ? this._withAnimation : this._noAnimation), this._markerCluster = t ? L.MarkerCluster : L.MarkerClusterNonAnimated
        },
        addLayer: function(e) {
            if (e instanceof L.LayerGroup) return this.addLayers([e]);
            if (!e.getLatLng) return this._nonPointGroup.addLayer(e), this.fire("layeradd", {
                layer: e
            }), this;
            if (!this._map) return this._needsClustering.push(e), this.fire("layeradd", {
                layer: e
            }), this;
            if (this.hasLayer(e)) return this;
            this._unspiderfy && this._unspiderfy(), this._addLayer(e, this._maxZoom), this.fire("layeradd", {
                layer: e
            }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
            var t = e,
                n = this._zoom;
            if (e.__parent)
                for (; t.__parent._zoom >= n;) t = t.__parent;
            return this._currentShownBounds.contains(t.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(e, t) : this._animationAddLayerNonAnimated(e, t)), this
        },
        removeLayer: function(e) {
            return e instanceof L.LayerGroup ? this.removeLayers([e]) : e.getLatLng ? this._map ? e.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(e)), this._removeLayer(e, !0), this.fire("layerremove", {
                layer: e
            }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), e.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(e) && (this._featureGroup.removeLayer(e), e.clusterShow && e.clusterShow()), this) : this : (!this._arraySplice(this._needsClustering, e) && this.hasLayer(e) && this._needsRemoving.push({
                layer: e,
                latlng: e._latlng
            }), this.fire("layerremove", {
                layer: e
            }), this) : (this._nonPointGroup.removeLayer(e), this.fire("layerremove", {
                layer: e
            }), this)
        },
        addLayers: function(e, t) {
            if (!L.Util.isArray(e)) return this.addLayer(e);
            var n, i = this._featureGroup,
                r = this._nonPointGroup,
                o = this.options.chunkedLoading,
                s = this.options.chunkInterval,
                a = this.options.chunkProgress,
                l = e.length,
                u = 0,
                c = !0;
            if (this._map) {
                var d = (new Date).getTime(),
                    h = L.bind(function() {
                        for (var f = (new Date).getTime(); u < l; u++) {
                            if (o && u % 200 == 0)
                                if ((new Date).getTime() - f > s) break;
                            if ((n = e[u]) instanceof L.LayerGroup) c && (e = e.slice(), c = !1), this._extractNonGroupLayers(n, e), l = e.length;
                            else if (n.getLatLng) {
                                if (!this.hasLayer(n) && (this._addLayer(n, this._maxZoom), t || this.fire("layeradd", {
                                        layer: n
                                    }), n.__parent && 2 === n.__parent.getChildCount())) {
                                    var p = n.__parent.getAllChildMarkers(),
                                        g = p[0] === n ? p[1] : p[0];
                                    i.removeLayer(g)
                                }
                            } else r.addLayer(n), t || this.fire("layeradd", {
                                layer: n
                            })
                        }
                        a && a(u, l, (new Date).getTime() - d), u === l ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(h, this.options.chunkDelay)
                    }, this);
                h()
            } else
                for (var f = this._needsClustering; u < l; u++)(n = e[u]) instanceof L.LayerGroup ? (c && (e = e.slice(), c = !1), this._extractNonGroupLayers(n, e), l = e.length) : n.getLatLng ? this.hasLayer(n) || f.push(n) : r.addLayer(n);
            return this
        },
        removeLayers: function(e) {
            var t, n, i = e.length,
                r = this._featureGroup,
                o = this._nonPointGroup,
                s = !0;
            if (!this._map) {
                for (t = 0; t < i; t++)(n = e[t]) instanceof L.LayerGroup ? (s && (e = e.slice(), s = !1), this._extractNonGroupLayers(n, e), i = e.length) : (this._arraySplice(this._needsClustering, n), o.removeLayer(n), this.hasLayer(n) && this._needsRemoving.push({
                    layer: n,
                    latlng: n._latlng
                }), this.fire("layerremove", {
                    layer: n
                }));
                return this
            }
            if (this._unspiderfy) {
                this._unspiderfy();
                var a = e.slice(),
                    l = i;
                for (t = 0; t < l; t++)(n = a[t]) instanceof L.LayerGroup ? (this._extractNonGroupLayers(n, a), l = a.length) : this._unspiderfyLayer(n)
            }
            for (t = 0; t < i; t++)(n = e[t]) instanceof L.LayerGroup ? (s && (e = e.slice(), s = !1), this._extractNonGroupLayers(n, e), i = e.length) : n.__parent ? (this._removeLayer(n, !0, !0), this.fire("layerremove", {
                layer: n
            }), r.hasLayer(n) && (r.removeLayer(n), n.clusterShow && n.clusterShow())) : (o.removeLayer(n), this.fire("layerremove", {
                layer: n
            }));
            return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this
        },
        clearLayers: function() {
            return this._map || (this._needsClustering = [], this._needsRemoving = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(e) {
                e.off(this._childMarkerEventHandlers, this), delete e.__parent
            }, this), this._map && this._generateInitialClusters(), this
        },
        getBounds: function() {
            var e = new L.LatLngBounds;
            this._topClusterLevel && e.extend(this._topClusterLevel._bounds);
            for (var t = this._needsClustering.length - 1; t >= 0; t--) e.extend(this._needsClustering[t].getLatLng());
            return e.extend(this._nonPointGroup.getBounds()), e
        },
        eachLayer: function(e, t) {
            var n, i, r, o = this._needsClustering.slice(),
                s = this._needsRemoving;
            for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(o), i = o.length - 1; i >= 0; i--) {
                for (n = !0, r = s.length - 1; r >= 0; r--)
                    if (s[r].layer === o[i]) {
                        n = !1;
                        break
                    }
                n && e.call(t, o[i])
            }
            this._nonPointGroup.eachLayer(e, t)
        },
        getLayers: function() {
            var e = [];
            return this.eachLayer(function(t) {
                e.push(t)
            }), e
        },
        getLayer: function(e) {
            var t = null;
            return e = parseInt(e, 10), this.eachLayer(function(n) {
                L.stamp(n) === e && (t = n)
            }), t
        },
        hasLayer: function(e) {
            if (!e) return !1;
            var t, n = this._needsClustering;
            for (t = n.length - 1; t >= 0; t--)
                if (n[t] === e) return !0;
            for (t = (n = this._needsRemoving).length - 1; t >= 0; t--)
                if (n[t].layer === e) return !1;
            return !(!e.__parent || e.__parent._group !== this) || this._nonPointGroup.hasLayer(e)
        },
        zoomToShowLayer: function(e, t) {
            "function" != typeof t && (t = function() {});
            var n = function() {
                !e._icon && !e.__parent._icon || this._inZoomAnimation || (this._map.off("moveend", n, this), this.off("animationend", n, this), e._icon ? t() : e.__parent._icon && (this.once("spiderfied", t, this), e.__parent.spiderfy()))
            };
            e._icon && this._map.getBounds().contains(e.getLatLng()) ? t() : e.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", n, this), this._map.panTo(e.getLatLng())) : (this._map.on("moveend", n, this), this.on("animationend", n, this), e.__parent.zoomToBounds())
        },
        onAdd: function(e) {
            var t, n, i;
            if (this._map = e, !isFinite(this._map.getMaxZoom())) throw "Map has no maxZoom specified";
            for (this._featureGroup.addTo(e), this._nonPointGroup.addTo(e), this._gridClusters || this._generateInitialClusters(), this._maxLat = e.options.crs.projection.MAX_LATITUDE, t = 0, n = this._needsRemoving.length; t < n; t++)(i = this._needsRemoving[t]).newlatlng = i.layer._latlng, i.layer._latlng = i.latlng;
            for (t = 0, n = this._needsRemoving.length; t < n; t++) i = this._needsRemoving[t], this._removeLayer(i.layer, !0), i.layer._latlng = i.newlatlng;
            this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), n = this._needsClustering, this._needsClustering = [], this.addLayers(n, !0)
        },
        onRemove: function(e) {
            e.off("zoomend", this._zoomEnd, this), e.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null
        },
        getVisibleParent: function(e) {
            for (var t = e; t && !t._icon;) t = t.__parent;
            return t || null
        },
        _arraySplice: function(e, t) {
            for (var n = e.length - 1; n >= 0; n--)
                if (e[n] === t) return e.splice(n, 1), !0
        },
        _removeFromGridUnclustered: function(e, t) {
            for (var n = this._map, i = this._gridUnclustered, r = Math.floor(this._map.getMinZoom()); t >= r && i[t].removeObject(e, n.project(e.getLatLng(), t)); t--);
        },
        _childMarkerDragStart: function(e) {
            e.target.__dragStart = e.target._latlng
        },
        _childMarkerMoved: function(e) {
            if (!this._ignoreMove && !e.target.__dragStart) {
                var t = e.target._popup && e.target._popup.isOpen();
                this._moveChild(e.target, e.oldLatLng, e.latlng), t && e.target.openPopup()
            }
        },
        _moveChild: function(e, t, n) {
            e._latlng = t, this.removeLayer(e), e._latlng = n, this.addLayer(e)
        },
        _childMarkerDragEnd: function(e) {
            var t = e.target.__dragStart;
            delete e.target.__dragStart, t && this._moveChild(e.target, t, e.target._latlng)
        },
        _removeLayer: function(e, t, n) {
            var i = this._gridClusters,
                r = this._gridUnclustered,
                o = this._featureGroup,
                s = this._map,
                a = Math.floor(this._map.getMinZoom());
            t && this._removeFromGridUnclustered(e, this._maxZoom);
            var l, u = e.__parent,
                c = u._markers;
            for (this._arraySplice(c, e); u && (u._childCount--, u._boundsNeedUpdate = !0, !(u._zoom < a));) t && u._childCount <= 1 ? (l = u._markers[0] === e ? u._markers[1] : u._markers[0], i[u._zoom].removeObject(u, s.project(u._cLatLng, u._zoom)), r[u._zoom].addObject(l, s.project(l.getLatLng(), u._zoom)), this._arraySplice(u.__parent._childClusters, u), u.__parent._markers.push(l), l.__parent = u.__parent, u._icon && (o.removeLayer(u), n || o.addLayer(l))) : u._iconNeedsUpdate = !0, u = u.__parent;
            delete e.__parent
        },
        _isOrIsParent: function(e, t) {
            for (; t;) {
                if (e === t) return !0;
                t = t.parentNode
            }
            return !1
        },
        fire: function(e, t, n) {
            if (t && t.layer instanceof L.MarkerCluster) {
                if (t.originalEvent && this._isOrIsParent(t.layer._icon, t.originalEvent.relatedTarget)) return;
                e = "cluster" + e
            }
            L.FeatureGroup.prototype.fire.call(this, e, t, n)
        },
        listens: function(e, t) {
            return L.FeatureGroup.prototype.listens.call(this, e, t) || L.FeatureGroup.prototype.listens.call(this, "cluster" + e, t)
        },
        _defaultIconCreateFunction: function(e) {
            var t = e.getChildCount(),
                n = " marker-cluster-";
            return n += t < 10 ? "small" : t < 100 ? "medium" : "large", new L.DivIcon({
                html: "<div><span>" + t + "</span></div>",
                className: "marker-cluster" + n,
                iconSize: new L.Point(40, 40)
            })
        },
        _bindEvents: function() {
            var e = this._map,
                t = this.options.spiderfyOnMaxZoom,
                n = this.options.showCoverageOnHover,
                i = this.options.zoomToBoundsOnClick;
            (t || i) && this.on("clusterclick", this._zoomOrSpiderfy, this), n && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), e.on("zoomend", this._hideCoverage, this))
        },
        _zoomOrSpiderfy: function(e) {
            for (var t = e.layer, n = t; 1 === n._childClusters.length;) n = n._childClusters[0];
            n._zoom === this._maxZoom && n._childCount === t._childCount && this.options.spiderfyOnMaxZoom ? t.spiderfy() : this.options.zoomToBoundsOnClick && t.zoomToBounds(), e.originalEvent && 13 === e.originalEvent.keyCode && this._map._container.focus()
        },
        _showCoverage: function(e) {
            var t = this._map;
            this._inZoomAnimation || (this._shownPolygon && t.removeLayer(this._shownPolygon), e.layer.getChildCount() > 2 && e.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(e.layer.getConvexHull(), this.options.polygonOptions), t.addLayer(this._shownPolygon)))
        },
        _hideCoverage: function() {
            this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null)
        },
        _unbindEvents: function() {
            var e = this.options.spiderfyOnMaxZoom,
                t = this.options.showCoverageOnHover,
                n = this.options.zoomToBoundsOnClick,
                i = this._map;
            (e || n) && this.off("clusterclick", this._zoomOrSpiderfy, this), t && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), i.off("zoomend", this._hideCoverage, this))
        },
        _zoomEnd: function() {
            this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds())
        },
        _moveEnd: function() {
            if (!this._inZoomAnimation) {
                var e = this._getExpandedVisibleBounds();
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), e), this._currentShownBounds = e
            }
        },
        _generateInitialClusters: function() {
            var e = Math.ceil(this._map.getMaxZoom()),
                t = Math.floor(this._map.getMinZoom()),
                n = this.options.maxClusterRadius,
                i = n;
            "function" != typeof n && (i = function() {
                return n
            }), null !== this.options.disableClusteringAtZoom && (e = this.options.disableClusteringAtZoom - 1), this._maxZoom = e, this._gridClusters = {}, this._gridUnclustered = {};
            for (var r = e; r >= t; r--) this._gridClusters[r] = new L.DistanceGrid(i(r)), this._gridUnclustered[r] = new L.DistanceGrid(i(r));
            this._topClusterLevel = new this._markerCluster(this, t - 1)
        },
        _addLayer: function(e, t) {
            var n, i, r = this._gridClusters,
                o = this._gridUnclustered,
                s = Math.floor(this._map.getMinZoom());
            for (this.options.singleMarkerMode && this._overrideMarkerIcon(e), e.on(this._childMarkerEventHandlers, this); t >= s; t--) {
                n = this._map.project(e.getLatLng(), t);
                var a = r[t].getNearObject(n);
                if (a) return a._addChild(e), void(e.__parent = a);
                if (a = o[t].getNearObject(n)) {
                    var l = a.__parent;
                    l && this._removeLayer(a, !1);
                    var u = new this._markerCluster(this, t, a, e);
                    r[t].addObject(u, this._map.project(u._cLatLng, t)), a.__parent = u, e.__parent = u;
                    var c = u;
                    for (i = t - 1; i > l._zoom; i--) c = new this._markerCluster(this, i, c), r[i].addObject(c, this._map.project(a.getLatLng(), i));
                    return l._addChild(c), void this._removeFromGridUnclustered(a, t)
                }
                o[t].addObject(e, n)
            }
            this._topClusterLevel._addChild(e), e.__parent = this._topClusterLevel
        },
        _refreshClustersIcons: function() {
            this._featureGroup.eachLayer(function(e) {
                e instanceof L.MarkerCluster && e._iconNeedsUpdate && e._updateIcon()
            })
        },
        _enqueue: function(e) {
            this._queue.push(e), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
        },
        _processQueue: function() {
            for (var e = 0; e < this._queue.length; e++) this._queue[e].call(this);
            this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null
        },
        _mergeSplitClusters: function() {
            var e = Math.round(this._map._zoom);
            this._processQueue(), this._zoom < e && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, e)) : this._zoom > e ? (this._animationStart(), this._animationZoomOut(this._zoom, e)) : this._moveEnd()
        },
        _getExpandedVisibleBounds: function() {
            return this.options.removeOutsideVisibleBounds ? L.Browser.mobile ? this._checkBoundsMaxLat(this._map.getBounds()) : this._checkBoundsMaxLat(this._map.getBounds().pad(1)) : this._mapBoundsInfinite
        },
        _checkBoundsMaxLat: function(e) {
            var t = this._maxLat;
            return void 0 !== t && (e.getNorth() >= t && (e._northEast.lat = 1 / 0), e.getSouth() <= -t && (e._southWest.lat = -1 / 0)), e
        },
        _animationAddLayerNonAnimated: function(e, t) {
            if (t === e) this._featureGroup.addLayer(e);
            else if (2 === t._childCount) {
                t._addToMap();
                var n = t.getAllChildMarkers();
                this._featureGroup.removeLayer(n[0]), this._featureGroup.removeLayer(n[1])
            } else t._updateIcon()
        },
        _extractNonGroupLayers: function(e, t) {
            var n, i = e.getLayers(),
                r = 0;
            for (t = t || []; r < i.length; r++)(n = i[r]) instanceof L.LayerGroup ? this._extractNonGroupLayers(n, t) : t.push(n);
            return t
        },
        _overrideMarkerIcon: function(e) {
            return e.options.icon = this.options.iconCreateFunction({
                getChildCount: function() {
                    return 1
                },
                getAllChildMarkers: function() {
                    return [e]
                }
            })
        }
    });
    L.MarkerClusterGroup.include({
        _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
    }), L.MarkerClusterGroup.include({
        _noAnimation: {
            _animationStart: function() {},
            _animationZoomIn: function(e, t) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e), this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds()), this.fire("animationend")
            },
            _animationZoomOut: function(e, t) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e), this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds()), this.fire("animationend")
            },
            _animationAddLayer: function(e, t) {
                this._animationAddLayerNonAnimated(e, t)
            }
        },
        _withAnimation: {
            _animationStart: function() {
                this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++
            },
            _animationZoomIn: function(e, t) {
                var n, i = this._getExpandedVisibleBounds(),
                    r = this._featureGroup,
                    o = Math.floor(this._map.getMinZoom());
                this._ignoreMove = !0, this._topClusterLevel._recursively(i, e, o, function(o) {
                    var s, a = o._latlng,
                        l = o._markers;
                    for (i.contains(a) || (a = null), o._isSingleParent() && e + 1 === t ? (r.removeLayer(o), o._recursivelyAddChildrenToMap(null, t, i)) : (o.clusterHide(), o._recursivelyAddChildrenToMap(a, t, i)), n = l.length - 1; n >= 0; n--) s = l[n], i.contains(s._latlng) || r.removeLayer(s)
                }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(i, t), r.eachLayer(function(e) {
                    e instanceof L.MarkerCluster || !e._icon || e.clusterShow()
                }), this._topClusterLevel._recursively(i, e, t, function(e) {
                    e._recursivelyRestoreChildPositions(t)
                }), this._ignoreMove = !1, this._enqueue(function() {
                    this._topClusterLevel._recursively(i, e, o, function(e) {
                        r.removeLayer(e), e.clusterShow()
                    }), this._animationEnd()
                })
            },
            _animationZoomOut: function(e, t) {
                this._animationZoomOutSingle(this._topClusterLevel, e - 1, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e, this._getExpandedVisibleBounds())
            },
            _animationAddLayer: function(e, t) {
                var n = this,
                    i = this._featureGroup;
                i.addLayer(e), t !== e && (t._childCount > 2 ? (t._updateIcon(), this._forceLayout(), this._animationStart(), e._setPos(this._map.latLngToLayerPoint(t.getLatLng())), e.clusterHide(), this._enqueue(function() {
                    i.removeLayer(e), e.clusterShow(), n._animationEnd()
                })) : (this._forceLayout(), n._animationStart(), n._animationZoomOutSingle(t, this._map.getMaxZoom(), this._zoom)))
            }
        },
        _animationZoomOutSingle: function(e, t, n) {
            var i = this._getExpandedVisibleBounds(),
                r = Math.floor(this._map.getMinZoom());
            e._recursivelyAnimateChildrenInAndAddSelfToMap(i, r, t + 1, n);
            var o = this;
            this._forceLayout(), e._recursivelyBecomeVisible(i, n), this._enqueue(function() {
                if (1 === e._childCount) {
                    var s = e._markers[0];
                    this._ignoreMove = !0, s.setLatLng(s.getLatLng()), this._ignoreMove = !1, s.clusterShow && s.clusterShow()
                } else e._recursively(i, n, r, function(e) {
                    e._recursivelyRemoveChildrenFromMap(i, r, t + 1)
                });
                o._animationEnd()
            })
        },
        _animationEnd: function() {
            this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend")
        },
        _forceLayout: function() {
            L.Util.falseFn(document.body.offsetWidth)
        }
    }), L.markerClusterGroup = function(e) {
        return new L.MarkerClusterGroup(e)
    };
    var n = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function(e, t, n, i) {
            L.Marker.prototype.initialize.call(this, n ? n._cLatLng || n.getLatLng() : new L.LatLng(0, 0), {
                icon: this,
                pane: e.options.clusterPane
            }), this._group = e, this._zoom = t, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds, n && this._addChild(n), i && this._addChild(i)
        },
        getAllChildMarkers: function(e, t) {
            e = e || [];
            for (var n = this._childClusters.length - 1; n >= 0; n--) this._childClusters[n].getAllChildMarkers(e);
            for (var i = this._markers.length - 1; i >= 0; i--) t && this._markers[i].__dragStart || e.push(this._markers[i]);
            return e
        },
        getChildCount: function() {
            return this._childCount
        },
        zoomToBounds: function(e) {
            for (var t, n = this._childClusters.slice(), i = this._group._map, r = i.getBoundsZoom(this._bounds), o = this._zoom + 1, s = i.getZoom(); n.length > 0 && r > o;) {
                o++;
                var a = [];
                for (t = 0; t < n.length; t++) a = a.concat(n[t]._childClusters);
                n = a
            }
            r > o ? this._group._map.setView(this._latlng, o) : r <= s ? this._group._map.setView(this._latlng, s + 1) : this._group._map.fitBounds(this._bounds, e)
        },
        getBounds: function() {
            var e = new L.LatLngBounds;
            return e.extend(this._bounds), e
        },
        _updateIcon: function() {
            this._iconNeedsUpdate = !0, this._icon && this.setIcon(this)
        },
        createIcon: function() {
            return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon()
        },
        createShadow: function() {
            return this._iconObj.createShadow()
        },
        _addChild: function(e, t) {
            this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._setClusterCenter(e), e instanceof L.MarkerCluster ? (t || (this._childClusters.push(e), e.__parent = this), this._childCount += e._childCount) : (t || this._markers.push(e), this._childCount++), this.__parent && this.__parent._addChild(e, !0)
        },
        _setClusterCenter: function(e) {
            this._cLatLng || (this._cLatLng = e._cLatLng || e._latlng)
        },
        _resetBounds: function() {
            var e = this._bounds;
            e._southWest && (e._southWest.lat = 1 / 0, e._southWest.lng = 1 / 0), e._northEast && (e._northEast.lat = -1 / 0, e._northEast.lng = -1 / 0)
        },
        _recalculateBounds: function() {
            var e, t, n, i, r = this._markers,
                o = this._childClusters,
                s = 0,
                a = 0,
                l = this._childCount;
            if (0 !== l) {
                for (this._resetBounds(), e = 0; e < r.length; e++) n = r[e]._latlng, this._bounds.extend(n), s += n.lat, a += n.lng;
                for (e = 0; e < o.length; e++)(t = o[e])._boundsNeedUpdate && t._recalculateBounds(), this._bounds.extend(t._bounds), n = t._wLatLng, i = t._childCount, s += n.lat * i, a += n.lng * i;
                this._latlng = this._wLatLng = new L.LatLng(s / l, a / l), this._boundsNeedUpdate = !1
            }
        },
        _addToMap: function(e) {
            e && (this._backupLatlng = this._latlng, this.setLatLng(e)), this._group._featureGroup.addLayer(this)
        },
        _recursivelyAnimateChildrenIn: function(e, t, n) {
            this._recursively(e, this._group._map.getMinZoom(), n - 1, function(e) {
                var n, i, r = e._markers;
                for (n = r.length - 1; n >= 0; n--)(i = r[n])._icon && (i._setPos(t), i.clusterHide())
            }, function(e) {
                var n, i, r = e._childClusters;
                for (n = r.length - 1; n >= 0; n--)(i = r[n])._icon && (i._setPos(t), i.clusterHide())
            })
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function(e, t, n, i) {
            this._recursively(e, i, t, function(r) {
                r._recursivelyAnimateChildrenIn(e, r._group._map.latLngToLayerPoint(r.getLatLng()).round(), n), r._isSingleParent() && n - 1 === i ? (r.clusterShow(), r._recursivelyRemoveChildrenFromMap(e, t, n)) : r.clusterHide(), r._addToMap()
            })
        },
        _recursivelyBecomeVisible: function(e, t) {
            this._recursively(e, this._group._map.getMinZoom(), t, null, function(e) {
                e.clusterShow()
            })
        },
        _recursivelyAddChildrenToMap: function(e, t, n) {
            this._recursively(n, this._group._map.getMinZoom() - 1, t, function(i) {
                if (t !== i._zoom)
                    for (var r = i._markers.length - 1; r >= 0; r--) {
                        var o = i._markers[r];
                        n.contains(o._latlng) && (e && (o._backupLatlng = o.getLatLng(), o.setLatLng(e), o.clusterHide && o.clusterHide()), i._group._featureGroup.addLayer(o))
                    }
            }, function(t) {
                t._addToMap(e)
            })
        },
        _recursivelyRestoreChildPositions: function(e) {
            for (var t = this._markers.length - 1; t >= 0; t--) {
                var n = this._markers[t];
                n._backupLatlng && (n.setLatLng(n._backupLatlng), delete n._backupLatlng)
            }
            if (e - 1 === this._zoom)
                for (var i = this._childClusters.length - 1; i >= 0; i--) this._childClusters[i]._restorePosition();
            else
                for (var r = this._childClusters.length - 1; r >= 0; r--) this._childClusters[r]._recursivelyRestoreChildPositions(e)
        },
        _restorePosition: function() {
            this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng)
        },
        _recursivelyRemoveChildrenFromMap: function(e, t, n, i) {
            var r, o;
            this._recursively(e, t - 1, n - 1, function(e) {
                for (o = e._markers.length - 1; o >= 0; o--) r = e._markers[o], i && i.contains(r._latlng) || (e._group._featureGroup.removeLayer(r), r.clusterShow && r.clusterShow())
            }, function(e) {
                for (o = e._childClusters.length - 1; o >= 0; o--) r = e._childClusters[o], i && i.contains(r._latlng) || (e._group._featureGroup.removeLayer(r), r.clusterShow && r.clusterShow())
            })
        },
        _recursively: function(e, t, n, i, r) {
            var o, s, a = this._childClusters,
                l = this._zoom;
            if (t <= l && (i && i(this), r && l === n && r(this)), l < t || l < n)
                for (o = a.length - 1; o >= 0; o--)(s = a[o])._boundsNeedUpdate && s._recalculateBounds(), e.intersects(s._bounds) && s._recursively(e, t, n, i, r)
        },
        _isSingleParent: function() {
            return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount
        }
    });
    L.Marker.include({
        clusterHide: function() {
            var e = this.options.opacity;
            return this.setOpacity(0), this.options.opacity = e, this
        },
        clusterShow: function() {
            return this.setOpacity(this.options.opacity)
        }
    }), L.DistanceGrid = function(e) {
        this._cellSize = e, this._sqCellSize = e * e, this._grid = {}, this._objectPoint = {}
    }, L.DistanceGrid.prototype = {
        addObject: function(e, t) {
            var n = this._getCoord(t.x),
                i = this._getCoord(t.y),
                r = this._grid,
                o = r[i] = r[i] || {},
                s = o[n] = o[n] || [],
                a = L.Util.stamp(e);
            this._objectPoint[a] = t, s.push(e)
        },
        updateObject: function(e, t) {
            this.removeObject(e), this.addObject(e, t)
        },
        removeObject: function(e, t) {
            var n, i, r = this._getCoord(t.x),
                o = this._getCoord(t.y),
                s = this._grid,
                a = s[o] = s[o] || {},
                l = a[r] = a[r] || [];
            for (delete this._objectPoint[L.Util.stamp(e)], n = 0, i = l.length; n < i; n++)
                if (l[n] === e) return l.splice(n, 1), 1 === i && delete a[r], !0
        },
        eachObject: function(e, t) {
            var n, i, r, o, s, a, l = this._grid;
            for (n in l)
                for (i in s = l[n])
                    for (r = 0, o = (a = s[i]).length; r < o; r++) e.call(t, a[r]) && (r--, o--)
        },
        getNearObject: function(e) {
            var t, n, i, r, o, s, a, l, u = this._getCoord(e.x),
                c = this._getCoord(e.y),
                d = this._objectPoint,
                h = this._sqCellSize,
                f = null;
            for (t = c - 1; t <= c + 1; t++)
                if (r = this._grid[t])
                    for (n = u - 1; n <= u + 1; n++)
                        if (o = r[n])
                            for (i = 0, s = o.length; i < s; i++) a = o[i], ((l = this._sqDist(d[L.Util.stamp(a)], e)) < h || l <= h && null === f) && (h = l, f = a);
            return f
        },
        _getCoord: function(e) {
            var t = Math.floor(e / this._cellSize);
            return isFinite(t) ? t : e
        },
        _sqDist: function(e, t) {
            var n = t.x - e.x,
                i = t.y - e.y;
            return n * n + i * i
        }
    }, L.QuickHull = {
        getDistant: function(e, t) {
            var n = t[1].lat - t[0].lat;
            return (t[0].lng - t[1].lng) * (e.lat - t[0].lat) + n * (e.lng - t[0].lng)
        },
        findMostDistantPointFromBaseLine: function(e, t) {
            var n, i, r, o = 0,
                s = null,
                a = [];
            for (n = t.length - 1; n >= 0; n--) i = t[n], (r = this.getDistant(i, e)) > 0 && (a.push(i), r > o && (o = r, s = i));
            return {
                maxPoint: s,
                newPoints: a
            }
        },
        buildConvexHull: function(e, t) {
            var n = [],
                i = this.findMostDistantPointFromBaseLine(e, t);
            return i.maxPoint ? n = (n = n.concat(this.buildConvexHull([e[0], i.maxPoint], i.newPoints))).concat(this.buildConvexHull([i.maxPoint, e[1]], i.newPoints)) : [e[0]]
        },
        getConvexHull: function(e) {
            var t, n = !1,
                i = !1,
                r = !1,
                o = !1,
                s = null,
                a = null,
                l = null,
                u = null,
                c = null,
                d = null;
            for (t = e.length - 1; t >= 0; t--) {
                var h = e[t];
                (!1 === n || h.lat > n) && (s = h, n = h.lat), (!1 === i || h.lat < i) && (a = h, i = h.lat), (!1 === r || h.lng > r) && (l = h, r = h.lng), (!1 === o || h.lng < o) && (u = h, o = h.lng)
            }
            return i !== n ? (d = a, c = s) : (d = u, c = l), [].concat(this.buildConvexHull([d, c], e), this.buildConvexHull([c, d], e))
        }
    }, L.MarkerCluster.include({
        getConvexHull: function() {
            var e, t, n = this.getAllChildMarkers(),
                i = [];
            for (t = n.length - 1; t >= 0; t--) e = n[t].getLatLng(), i.push(e);
            return L.QuickHull.getConvexHull(i)
        }
    }), L.MarkerCluster.include({
        _2PI: 2 * Math.PI,
        _circleFootSeparation: 25,
        _circleStartAngle: 0,
        _spiralFootSeparation: 28,
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        spiderfy: function() {
            if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                var e, t = this.getAllChildMarkers(null, !0),
                    n = this._group._map.latLngToLayerPoint(this._latlng);
                this._group._unspiderfy(), this._group._spiderfied = this, t.length >= this._circleSpiralSwitchover ? e = this._generatePointsSpiral(t.length, n) : (n.y += 10, e = this._generatePointsCircle(t.length, n)), this._animationSpiderfy(t, e)
            }
        },
        unspiderfy: function(e) {
            this._group._inZoomAnimation || (this._animationUnspiderfy(e), this._group._spiderfied = null)
        },
        _generatePointsCircle: function(e, t) {
            var n, i, r = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + e) / this._2PI,
                o = this._2PI / e,
                s = [];
            for (r = Math.max(r, 35), s.length = e, n = 0; n < e; n++) i = this._circleStartAngle + n * o, s[n] = new L.Point(t.x + r * Math.cos(i), t.y + r * Math.sin(i))._round();
            return s
        },
        _generatePointsSpiral: function(e, t) {
            var n, i = this._group.options.spiderfyDistanceMultiplier,
                r = i * this._spiralLengthStart,
                o = i * this._spiralFootSeparation,
                s = i * this._spiralLengthFactor * this._2PI,
                a = 0,
                l = [];
            for (l.length = e, n = e; n >= 0; n--) n < e && (l[n] = new L.Point(t.x + r * Math.cos(a), t.y + r * Math.sin(a))._round()), r += s / (a += o / r + 5e-4 * n);
            return l
        },
        _noanimationUnspiderfy: function() {
            var e, t, n = this._group,
                i = n._map,
                r = n._featureGroup,
                o = this.getAllChildMarkers(null, !0);
            for (n._ignoreMove = !0, this.setOpacity(1), t = o.length - 1; t >= 0; t--) e = o[t], r.removeLayer(e), e._preSpiderfyLatlng && (e.setLatLng(e._preSpiderfyLatlng), delete e._preSpiderfyLatlng), e.setZIndexOffset && e.setZIndexOffset(0), e._spiderLeg && (i.removeLayer(e._spiderLeg), delete e._spiderLeg);
            n.fire("unspiderfied", {
                cluster: this,
                markers: o
            }), n._ignoreMove = !1, n._spiderfied = null
        }
    }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function(e, t) {
            var n, i, r, o, s = this._group,
                a = s._map,
                l = s._featureGroup,
                u = this._group.options.spiderLegPolylineOptions;
            for (s._ignoreMove = !0, n = 0; n < e.length; n++) o = a.layerPointToLatLng(t[n]), i = e[n], r = new L.Polyline([this._latlng, o], u), a.addLayer(r), i._spiderLeg = r, i._preSpiderfyLatlng = i._latlng, i.setLatLng(o), i.setZIndexOffset && i.setZIndexOffset(1e6), l.addLayer(i);
            this.setOpacity(.3), s._ignoreMove = !1, s.fire("spiderfied", {
                cluster: this,
                markers: e
            })
        },
        _animationUnspiderfy: function() {
            this._noanimationUnspiderfy()
        }
    }), L.MarkerCluster.include({
        _animationSpiderfy: function(e, t) {
            var n, i, r, o, s, a, l = this,
                u = this._group,
                c = u._map,
                d = u._featureGroup,
                h = this._latlng,
                f = c.latLngToLayerPoint(h),
                p = L.Path.SVG,
                g = L.extend({}, this._group.options.spiderLegPolylineOptions),
                m = g.opacity;
            for (void 0 === m && (m = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), p ? (g.opacity = 0, g.className = (g.className || "") + " leaflet-cluster-spider-leg") : g.opacity = m, u._ignoreMove = !0, n = 0; n < e.length; n++) i = e[n], a = c.layerPointToLatLng(t[n]), r = new L.Polyline([h, a], g), c.addLayer(r), i._spiderLeg = r, p && (s = (o = r._path).getTotalLength() + .1, o.style.strokeDasharray = s, o.style.strokeDashoffset = s), i.setZIndexOffset && i.setZIndexOffset(1e6), i.clusterHide && i.clusterHide(), d.addLayer(i), i._setPos && i._setPos(f);
            for (u._forceLayout(), u._animationStart(), n = e.length - 1; n >= 0; n--) a = c.layerPointToLatLng(t[n]), (i = e[n])._preSpiderfyLatlng = i._latlng, i.setLatLng(a), i.clusterShow && i.clusterShow(), p && ((o = (r = i._spiderLeg)._path).style.strokeDashoffset = 0, r.setStyle({
                opacity: m
            }));
            this.setOpacity(.3), u._ignoreMove = !1, setTimeout(function() {
                u._animationEnd(), u.fire("spiderfied", {
                    cluster: l,
                    markers: e
                })
            }, 200)
        },
        _animationUnspiderfy: function(e) {
            var t, n, i, r, o, s, a = this,
                l = this._group,
                u = l._map,
                c = l._featureGroup,
                d = e ? u._latLngToNewLayerPoint(this._latlng, e.zoom, e.center) : u.latLngToLayerPoint(this._latlng),
                h = this.getAllChildMarkers(null, !0),
                f = L.Path.SVG;
            for (l._ignoreMove = !0, l._animationStart(), this.setOpacity(1), n = h.length - 1; n >= 0; n--)(t = h[n])._preSpiderfyLatlng && (t.closePopup(), t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng, s = !0, t._setPos && (t._setPos(d), s = !1), t.clusterHide && (t.clusterHide(), s = !1), s && c.removeLayer(t), f && (o = (r = (i = t._spiderLeg)._path).getTotalLength() + .1, r.style.strokeDashoffset = o, i.setStyle({
                opacity: 0
            })));
            l._ignoreMove = !1, setTimeout(function() {
                var e = 0;
                for (n = h.length - 1; n >= 0; n--)(t = h[n])._spiderLeg && e++;
                for (n = h.length - 1; n >= 0; n--)(t = h[n])._spiderLeg && (t.clusterShow && t.clusterShow(), t.setZIndexOffset && t.setZIndexOffset(0), e > 1 && c.removeLayer(t), u.removeLayer(t._spiderLeg), delete t._spiderLeg);
                l._animationEnd(), l.fire("unspiderfied", {
                    cluster: a,
                    markers: h
                })
            }, 200)
        }
    }), L.MarkerClusterGroup.include({
        _spiderfied: null,
        unspiderfy: function() {
            this._unspiderfy.apply(this, arguments)
        },
        _spiderfierOnAdd: function() {
            this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this)
        },
        _spiderfierOnRemove: function() {
            this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy()
        },
        _unspiderfyZoomStart: function() {
            this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
        },
        _unspiderfyZoomAnim: function(e) {
            L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(e))
        },
        _unspiderfyWrapper: function() {
            this._unspiderfy()
        },
        _unspiderfy: function(e) {
            this._spiderfied && this._spiderfied.unspiderfy(e)
        },
        _noanimationUnspiderfy: function() {
            this._spiderfied && this._spiderfied._noanimationUnspiderfy()
        },
        _unspiderfyLayer: function(e) {
            e._spiderLeg && (this._featureGroup.removeLayer(e), e.clusterShow && e.clusterShow(), e.setZIndexOffset && e.setZIndexOffset(0), this._map.removeLayer(e._spiderLeg), delete e._spiderLeg)
        }
    }), L.MarkerClusterGroup.include({
        refreshClusters: function(e) {
            return e ? e instanceof L.MarkerClusterGroup ? e = e._topClusterLevel.getAllChildMarkers() : e instanceof L.LayerGroup ? e = e._layers : e instanceof L.MarkerCluster ? e = e.getAllChildMarkers() : e instanceof L.Marker && (e = [e]) : e = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(e), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(e), this
        },
        _flagParentsIconsNeedUpdate: function(e) {
            var t, n;
            for (t in e)
                for (n = e[t].__parent; n;) n._iconNeedsUpdate = !0, n = n.__parent
        },
        _refreshSingleMarkerModeMarkers: function(e) {
            var t, n;
            for (t in e) n = e[t], this.hasLayer(n) && n.setIcon(this._overrideMarkerIcon(n))
        }
    }), L.Marker.include({
        refreshIconOptions: function(e, t) {
            var n = this.options.icon;
            return L.setOptions(n, e), this.setIcon(n), t && this.__parent && this.__parent._group.refreshClusters(this), this
        }
    }), e.MarkerClusterGroup = t, e.MarkerCluster = n
}), L.AnimatedMarker = L.Marker.extend({
    options: {
        distance: 200,
        interval: 1e3,
        autoStart: !0,
        onEnd: function() {},
        clickable: !1
    },
    initialize: function(e, t) {
        this.setLine(e), L.Marker.prototype.initialize.call(this, e[0], t)
    },
    _chunk: function(e) {
        var t, n = e.length,
            i = [];
        for (t = 1; t < n; t++) {
            var r = e[t - 1],
                o = e[t],
                s = r.distanceTo(o),
                a = this.options.distance / s,
                l = a * (o.lat - r.lat),
                u = a * (o.lng - r.lng);
            if (s > this.options.distance)
                for (; s > this.options.distance;) s = (r = new L.LatLng(r.lat + l, r.lng + u)).distanceTo(o), i.push(r);
            else i.push(r)
        }
        return i.push(e[n - 1]), i
    },
    onAdd: function(e) {
        L.Marker.prototype.onAdd.call(this, e), this.options.autoStart && this.start()
    },
    animate: function() {
        var e = this,
            t = this._latlngs.length,
            n = this.options.interval;
        this._i < t && this.i > 0 && (n = this._latlngs[this._i - 1].distanceTo(this._latlngs[this._i]) / this.options.distance * this.options.interval), L.DomUtil.TRANSITION && (this._icon && (this._icon.style[L.DomUtil.TRANSITION] = "all " + n + "ms linear"), this._shadow && (this._shadow.style[L.DomUtil.TRANSITION] = "all " + n + "ms linear")), this.setLatLng(this._latlngs[this._i]), this._i++, this._tid = setTimeout(function() {
            e._i === t ? e.options.onEnd.apply(e, Array.prototype.slice.call(arguments)) : e.animate()
        }, n)
    },
    start: function() {
        this.animate()
    },
    stop: function() {
        this._tid && clearTimeout(this._tid)
    },
    setLine: function(e) {
        L.DomUtil.TRANSITION ? this._latlngs = e : (this._latlngs = this._chunk(e), this.options.distance = 10, this.options.interval = 30), this._i = 0
    }
}), L.animatedMarker = function(e, t) {
    return new L.AnimatedMarker(e, t)
}, _log = console._log = function(e, ...t) {
    window.config.debug && (t.unshift(e), console.log.apply(this, t))
};


function globalInit() {
    $.ajax("config.json", {
        error: function(e, t) {
            createAlert({
                title: "<strong>Error getting config, cannot load map!</strong>",
                message: e.statusText
            })
        },
        dataType: "text",
        success: function(e, t) {
            var n = stripJsonOfComments(e),
                i = JSON.parse(n);
            window.config = Object.assign({
                debug: !1,
                tileDirectory: "images/tiles",
                iconDirectory: "images/icons",
                showIdentifiers: !1,
                groupPlayers: !0
            }, i);
            for (const e in config.servers) {
                var r = Object.assign({}, config.defaults, config.servers[e]);
                console._log(r), config.servers[e] = r
            }
            mapInit("map-canvas", 1, 0), mapInit("gzmape", 0, 1), initMarkers(), initPage()
        }
    })
}

function initPage() {
	$("#tab-container").hide();
	$("#maps-container").hide();
	$.post("http://tab/tablet-bus", JSON.stringify({
		load: true
	}))
}

function mapInit(e, zoom, mapka) {
    var t = {};
    i = window.config.maps[0];
        i.tileSize && (i.tileSize = 1024), 
		t[i.name] = L.tileLayer(i.url, Object.assign({
            minZoom: -2,
            maxZoom: 2,
            tileSize: 1024,
            maxNativeZoom: 0,
            minNativeZoom: 0,
            tileDirectory: config.tileDirectory,
			
        }, i))
		
	if(mapka == 0) {
		CurrentLayer = t[Object.keys(t)[0]], window.Map = L.map(e, {
			attributionControl: false,
			zoomControl:false,
			crs: L.CRS.Simple,
			layers: [CurrentLayer]
		}).setView([0, 0], 0);
		var n = getMapBounds(CurrentLayer);
		Map.fitBounds(n);
		Map.setZoom(zoom);
		Map.addLayer(PlayerMarkers);
	}
	else {
		CurrentLayer = t[Object.keys(t)[0]], window.Mape = L.map(e, {
			attributionControl: false,
			crs: L.CRS.Simple,
			layers: [CurrentLayer]
		}).setView([0, 0], 0);
		var n = getMapBounds(CurrentLayer);
		Mape.fitBounds(n);
		Mape.setMaxBounds(n);
		Mape.setZoom(zoom);
		Mape.addLayer(PlayerMarkers2);
		initMapControl(Mape), initPlayerMarkerControls(Mape, PlayerMarkers2)
	}
}

function createMarker(e, t, n, i) {
    var r = n.reference;
    "@DEBUG@@Locator" == r && (r = "@Locator"), n.position = stringCoordToFloat(n.position);
    var o = convertToMapLeaflet(n.position.x, n.position.y),
        s = n.type;

    var u = L.icon(s),
        c = window.Map;
    n.data && n.data.isPlayer && window.config.groupPlayers && (c = window.PlayerMarkers), null == c && (console.warn("For some reason window.Map or window.PlayerMarkers is undefined"), console.warn("Cannot add the blip: " + n), c = createClusterLayer());
    localCache[1] = L.marker(o, {
        title: i,
        id: 1,
        icon: u,
        object: n
    }).addTo(c);
	c = window.PlayerMarkers2;
	localCache[2] = L.marker(o, {
        title: i,
        id: 1,
        icon: u,
        object: n
    }).addTo(c);
}

window.MarkerStore = [], window.PopupStore = {}, window.CurrentLayer = void 0, window.PlayerMarkers = L.markerClusterGroup({
    maxClusterRadius: 20,
    spiderfyOnMaxZoom: !1,
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !1
}), L.Control.CustomLayer = L.Control.Layers.extend({
    _checkDisabledLayers: function() {}
});
window.PlayerMarkers2 = L.markerClusterGroup({
    maxClusterRadius: 20,
    spiderfyOnMaxZoom: !1,
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !1
})
var customImageWidth = 32,
    customImageHeight = 32;
window.MarkerTypes = {};
var blipCss = "";

function initMarkers() {
    console._log("initialising markers"), window.MarkerTypes = {
        0: {
            iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAFElEQVR4XgXAAQ0AAABAMP1L30IDCPwC/o5WcS4AAAAASUVORK5CYII=",
            iconSize: [0, 0],
            popupAnchor: [0, 0],
            iconAnchor: [0, 0]
        },
        999: {
            iconUrl: config.iconDirectory + "/debug.png",
            iconSize: [23, 32],
            popupAnchor: [0, 0],
            iconAnchor: [11.5, 0]
        },
        6: {
            iconUrl: config.iconDirectory + "/normal.png",
            iconSize: [22, 32],
            popupAnchor: [0, 0],
            iconAnchor: [12, 30]
        }
    }, blipCss = `.blip {\n    background: url("${config.iconDirectory}/blips_texturesheet.png");\n    background-size: 512px 512px;\n    display: inline-block;\n    width: ${customImageWidth}px;\n    height: ${customImageHeight}px;\n}`;
}
var types = {
        Standard: {
            id: 1,
            x: 0,
            y: 0
        },
        Jet: {
            id: 16
        },
        Lift: {
            id: 36
        },
        RaceFinish: {
            id: 38
        },
        Safehouse: {
            id: 40
        },
        PoliceHelicopter: {
            id: 43
        },
        ChatBubble: {
            id: 47
        },
        Garage2: {
            id: 50
        },
        Drugs: {},
        Store: {},
        PoliceCar: {
            id: 56
        },
        PoliceStation: {
            id: 60,
            x: 12,
            y: 0
        },
        Hospital: {},
        Helicopter: {
            id: 64
        },
        StrangersAndFreaks: {},
        ArmoredTruck: {
            x: 0,
            y: 1
        },
        TowTruck: {
            id: 68
        },
        Barber: {
            id: 71
        },
        LosSantosCustoms: {},
        Clothes: {},
        TattooParlor: {
            id: 75
        },
        Simeon: {},
        Lester: {},
        Michael: {},
        Trevor: {},
        Rampage: {
            id: 84,
            x: 11
        },
        VinewoodTours: {},
        Lamar: {},
        Franklin: {
            id: 88
        },
        Chinese: {},
        Airport: {
            x: 0,
            y: 2
        },
        Bar: {
            id: 93
        },
        BaseJump: {},
        CarWash: {
            id: 100,
            x: 4
        },
        ComedyClub: {
            id: 102
        },
        Dart: {},
        Fib: {
            id: 106,
            x: 9
        },
        Bank: {
            id: 108,
            x: 11
        },
        Golf: {},
        AmmuNation: {},
        Exile: {
            id: 112
        },
        ShootingRange: {
            id: 119,
            x: 1,
            y: 3
        },
        Solomon: {},
        StripClub: {},
        Tennis: {},
        Triathlon: {
            id: 126,
            x: 7
        },
        OffRoadRaceFinish: {},
        Key: {
            id: 134,
            x: 10
        },
        MovieTheater: {},
        Music: {},
        Marijuana: {
            id: 140,
            x: 14
        },
        Hunting: {},
        ArmsTraffickingGround: {
            id: 147,
            y: 4,
            x: 0
        },
        Nigel: {
            id: 149
        },
        AssaultRifle: {},
        Bat: {},
        Grenade: {},
        Health: {},
        Knife: {},
        Molotov: {},
        Pistol: {},
        Rpg: {},
        Shotgun: {},
        Smg: {},
        Sniper: {},
        PointOfInterest: {
            id: 162
        },
        GtaOPassive: {},
        GtaOUsingMenu: {},
        Minigun: {
            id: 173,
            x: 0,
            y: 5
        },
        GrenadeLauncher: {},
        Armor: {},
        Castle: {},
        Camera: {
            id: 184,
            x: 7
        },
        Handcuffs: {
            id: 188,
            x: 11
        },
        Yoga: {
            id: 197
        },
        Cab: {},
        Shrink: {
            id: 205
        },
        Epsilon: {},
        PersonalVehicleCar: {
            id: 225,
            x: 5,
            y: 6
        },
        PersonalVehicleBike: {},
        Custody: {
            id: 237,
            x: 10
        },
        ArmsTraffickingAir: {
            id: 251
        },
        Fairground: {
            id: 266,
            x: 15
        },
        PropertyManagement: {
            x: 0,
            y: 7
        },
        Altruist: {
            id: 269
        },
        Chop: {
            id: 273,
            x: 3
        },
        Hooker: {
            id: 279,
            x: 7
        },
        Friend: {},
        GtaOMission: {
            id: 304,
            x: 14
        },
        GtaOSurvival: {},
        CrateDrop: {
            x: 0,
            y: 8
        },
        PlaneDrop: {},
        Sub: {},
        Race: {},
        Deathmatch: {},
        ArmWrestling: {},
        AmmuNationShootingRange: {
            id: 313
        },
        RaceAir: {},
        RaceCar: {},
        RaceSea: {},
        GarbageTruck: {
            id: 318,
            x: 11
        },
        SafehouseForSale: {
            id: 350,
            x: 14
        },
        Package: {},
        MartinMadrazo: {
            x: 0,
            y: 9
        },
        Boost: {
            id: 354
        },
        Devin: {},
        Marina: {},
        Garage: {},
        GolfFlag: {},
        Hangar: {},
        Helipad: {},
        JerryCan: {},
        Masks: {},
        HeistSetup: {},
        PickupSpawn: {
            id: 365
        },
        BoilerSuit: {},
        Completed: {},
        Rockets: {},
        GarageForSale: {},
        HelipadForSale: {
            x: 0,
            y: 10
        },
        MarinaForSale: {},
        HangarForSale: {},
        Business: {
            id: 374
        },
        BusinessForSale: {},
        RaceBike: {},
        Parachute: {},
        TeamDeathmatch: {},
        RaceFoot: {},
        VehicleDeathmatch: {},
        Barry: {},
        Dom: {},
        MaryAnn: {},
        Cletus: {},
        Josh: {},
        Minute: {},
        Omega: {
            x: 0,
            y: 11
        },
        Tonya: {},
        Paparazzo: {},
        Abigail: {
            id: 400
        },
        Blimp: {},
        Repair: {},
        Testosterone: {},
        Dinghy: {},
        Fanatic: {},
        CaptureBriefcase: {
            id: 408
        },
        LastTeamStanding: {},
        Boat: {},
        CaptureHouse: {},
        JerryCan2: {
            id: 415,
            x: 14
        },
        CaptureAmericanFlag: {
            id: 419
        },
        CaptureFlag: {
            x: 0,
            y: 12
        },
        Tank: {},
        GunCar: {
            id: 426,
            x: 3
        },
        Speedboat: {},
        Heist: {},
        Stopwatch: {
            id: 430
        },
        DollarSignCircled: {},
        Crosshair2: {},
        DollarSignSquared: {
            id: 434
        }
    },
    nameToId = {};

function Coordinates(e, t, n) {
    this.x = e, this.y = t, this.z = n
}

function MarkerObject(e, t, n, i, r) {
    this.reference = e, this.position = t, this.type = n, this.description = i, this.data = r
}

var localCache = {};

function doPlayerUpdate(e) {
	if(localCache[1] == null) {
		var u = new MarkerObject("player", new Coordinates(e.pos.x, e.pos.y, e.pos.z), MarkerTypes[e.icon], "", {
			isPlayer: !0,
			player: e
		});
		createMarker(!1, !1, u, "player") - 1;
		Map.panTo(convertToMap(e.pos.x, e.pos.y));
	}
	else {
		localCache[1].setLatLng(convertToMapLeaflet(e.pos.x, e.pos.y));
		localCache[2].setLatLng(convertToMapLeaflet(e.pos.x, e.pos.y));
		Map.panTo(convertToMap(e.pos.x, e.pos.y));
	}
}

function normalize(e, t, n) {
    return Math.abs((e - t) / (n - t))
}
setInterval(() => {
    window.CanFilterOn = [], $("#filterOn").innerHtml = "<option></option>"
}, 6e4);

var game_1_x = -4000 - 270 + 160,
    game_1_y = 8000 + 420,
    game_2_x = 360,
    game_2_y = -600;

function convertToMap(e, t) {
    var n = 3 * CurrentLayer.options.tileSize,
        i = 2 * CurrentLayer.options.tileSize,
        r = Map.unproject([0, 0], 0),
        o = Map.unproject([i / 2, n - CurrentLayer.options.tileSize], 0),
        s = r.lng + (e - game_1_x) * (r.lng - o.lng) / (game_1_x - game_2_x),
        a = r.lat + (t - game_1_y) * (r.lat - o.lat) / (game_1_y - game_2_y);
    return result = {
        lat: a,
        lng: s
    }
}

function getMapBounds(e) {
    var t = 3 * e.options.tileSize,
        n = 2 * e.options.tileSize,
        i = Map.unproject([0, t], 0),
        r = Map.unproject([n, 0], 0);
    return new L.LatLngBounds(i, r)
}
const singleComment = 1,
    multiComment = 2,
    stripWithoutWhitespace = () => "",
    stripWithWhitespace = (e, t, n) => e.slice(t, n).replace(/\S/g, " ");

function stripJsonOfComments(e, t) {
    const n = !1 === (t = t || {}).whitespace ? stripWithoutWhitespace : stripWithWhitespace;
    let i = !1,
        r = !1,
        o = 0,
        s = "";
    for (let t = 0; t < e.length; t++) {
        const a = e[t],
            l = e[t + 1];
        if (!r && '"' === a) {
            "\\" === e[t - 1] && "\\" !== e[t - 2] || (i = !i)
        }
        if (!i)
            if (r || a + l !== "//") {
                if (r === singleComment && a + l === "\r\n") {
                    r = !1, s += n(e, o, ++t), o = t;
                    continue
                }
                if (r === singleComment && "\n" === a) r = !1, s += n(e, o, t), o = t;
                else {
                    if (!r && a + l === "/*") {
                        s += e.slice(o, t), o = t, r = multiComment, t++;
                        continue
                    }
                    if (r === multiComment && a + l === "*/") {
                        r = !1, s += n(e, o, ++t + 1), o = t + 1;
                        continue
                    }
                }
            } else s += e.slice(o, t), o = t, r = singleComment, t++
    }
    return s + (r ? n(e.substr(o)) : e.substr(o))
}

function convertToMapLeaflet(e, t) {
    return convertToMap(e, t)
}

function stringCoordToFloat(e) {
    return result = {
        x: parseFloat(e.x),
        y: parseFloat(e.y),
        z: parseFloat(e.z)
    }
}