(function (a) {
    a.fn.boutique = function (b) {
        var c = a.extend({
            container_width: "auto",
            front_img_width: 280,
            front_img_height: "auto",
            variable_container_height: false,
            frames: 5,
            starter: 1,
            speed: 600,
            front_topmargin: 40,
            behind_topmargin: 20,
            back_topmargin: 0,
            behind_opacity: 0.4,
            back_opacity: 0.15,
            behind_size: 0.7,
            back_size: 0.4,
            behind_distance: "auto",
            autoplay: false,
            autoplay_interval: 3000,
            stop_autoplay_on_click: false,
            freescroll: true,
            hovergrowth: 0,
            easing: "easeIOBoutique",
            move_more_easein: "easeInBoutique",
            move_more_easebetween: "linear",
            move_more_easeout: "easeOutBoutique",
            move_more_directly: false,
            never_move_twice: false,
            text_front_only: false,
            text_opacity: 0,
            keyboard: false,
            move_on_hover: false,
            right_to_left: true,
            lightbox_support: false
        }, b);
        a.each(this, function () {
            var O = a(window), am = a(this).addClass("boutique").show(), m = am.parent(), aO = am.children("li");
            var aK, aH, aG, aE, aC, az, ay, ax, aw, av, v, aU, H, A, ad, D = am.attr("id"), ab = false, N = false, P = c.starter, aA = aO.length, L = false, g = false, af = false, G = false, aX = (c.speed / 4), n = false, T = "boutique-frame", ac = "boutique-frame-text", ap = "boutique-frame-title", z = "boutique-frame-image", B = "boutique-frame-link";
            if (typeof a.browser === "object" && a.browser.msie) {
                L = true;
                if (a.browser.version < 9) {
                    af = true;
                    if (a.browser.version < 7) {
                        g = true
                    }
                }
            }
            if (c.starter > aA) {
                c.starter = aA
            }
            if (c.right_to_left) {
                am.addClass("rtl")
            }
            if (!D) {
                D = "no_id"
            }
            if ("behind_opac" in c) {
                c.behind_opacity = c.behind_opac
            }
            if ("back_opac" in c) {
                c.back_opacity = c.back_opac
            }
            if ("autointerval" in c) {
                c.autoplay_interval = c.autointerval
            }
            if ("hoverspeed" in c) {
                aX = c.hoverspeed
            }
            if (c.frames === 3 || c.frames === "3") {
                if (c.behind_distance === "auto") {
                    c.behind_distance = 0
                }
                c.back_opacity = 0
            }
            var aB = [], o = [];
            a.each(aO, function (a2) {
                a2 += 1;
                var a6 = a(this).addClass(T + " li" + a2), a1 = a6.children("a").addClass(B), a0 = a6.find("img").addClass(z), a4 = 0, a8 = 0, a7 = 0, a9 = 0, aZ, a3, a5;
                if (c.front_img_height === "auto") {
                    a8 = a0.attr("width");
                    a7 = parseInt(a0.attr("height"), 10);
                    if (!a8) {
                        a8 = a0.width()
                    }
                    if (!a7) {
                        a7 = a0.height()
                    }
                    o.push(a7);
                    if (a8 && (c.front_img_width !== a8)) {
                        a4 = c.front_img_width / a8;
                        a9 = Math.floor(a4 * a7)
                    }
                    a6.data("displayheight", a9)
                } else {
                    a6.data("displayheight", c.front_img_height)
                }
                aZ = a6.find("." + ap);
                if (aZ.length) {
                    a3 = aZ.text()
                } else {
                    a3 = a0.attr("alt")
                }
                a5 = a6.find("." + ac);
                if (!a5.length) {
                    a5 = a6.find("span").addClass(ac)
                }
                if (!a5.length) {
                    if (!a3) {
                        a5 = a('<span class="' + ac + ' dummy" />')
                    } else {
                        a5 = a('<span class="' + ac + '" />')
                    }
                    if (a1.length) {
                        a5.appendTo(a1)
                    } else {
                        a5.appendTo(a6)
                    }
                }
                if (!a3) {
                    aZ = a('<h6 class="' + ap + ' dummy" />')
                } else {
                    if (!aZ.length) {
                        aZ = a('<h6 class="' + ap + '">' + a3 + "</h6>")
                    }
                }
                aZ.prependTo(a5);
                aB[a2] = a6
            });
            if (c.front_img_height === "auto") {
                n = true;
                A = 0
            } else {
                A = c.front_img_height
            }
            if (aA === 1) {
                az = aB[1].clone().addClass("frame1").prependTo(am).data("framesource", 1);
                ay = aB[1].clone().addClass("frame2").prependTo(am).data("framesource", 1)
            } else {
                if (c.starter === 2) {
                    ay = aB[1].clone().addClass("frame2").prependTo(am).data("framesource", 1);
                    az = aB[aA].clone().addClass("frame1").prependTo(am).data("framesource", aA)
                } else {
                    if (c.starter === 1) {
                        az = aB[aA - 1].clone().addClass("frame1").prependTo(am).data("framesource", aA - 1);
                        ay = aB[aA].clone().addClass("frame2").prependTo(am).data("framesource", aA)
                    } else {
                        ay = aB[c.starter - 1].clone().addClass("frame2").prependTo(am).data("framesource", c.starter - 1);
                        az = aB[c.starter - 2].clone().addClass("frame1").prependTo(am).data("framesource", c.starter - 2)
                    }
                }
            }
            ax = aB[c.starter].clone().addClass("frame3").prependTo(am).data("framesource", c.starter);
            if (aA === 1) {
                aw = aB[1].clone().addClass("frame4").prependTo(am).data("framesource", 1);
                av = aB[1].clone().addClass("frame5").prependTo(am).data("framesource", 1)
            } else {
                if (c.starter === (aA - 1)) {
                    aw = aB[aA].clone().addClass("frame4").prependTo(am).data("framesource", aA);
                    av = aB[1].clone().addClass("frame5").prependTo(am).data("framesource", 1)
                } else {
                    if (c.starter === aA) {
                        aw = aB[1].clone().addClass("frame4").prependTo(am).data("framesource", 1);
                        av = aB[2].clone().addClass("frame5").prependTo(am).data("framesource", 2)
                    } else {
                        aw = aB[c.starter + 1].clone().addClass("frame4").prependTo(am).data("framesource", c.starter + 1);
                        av = aB[c.starter + 2].clone().addClass("frame5").prependTo(am).data("framesource", c.starter + 2)
                    }
                }
            }
            az.add(ay).add(ax).add(aw).add(av).children("a").removeAttr("rel");
            var l = az.add(av).show().css({opacity: 0}).addClass("back"), aI = ay.add(aw).show().css({opacity: 0}).addClass("behind"), Q = ax.show().css({opacity: 0}).addClass("front");
            if (c.container_width === "auto" || c.container_width === "100%") {
                G = true;
                aU = parseInt(m.width(), 10)
            } else {
                aU = c.container_width
            }
            var ai = parseInt(Q.css("marginTop"), 10), S = parseInt(aI.css("marginTop"), 10), d = parseInt(l.css("marginTop"), 10);
            if (!ai) {
                ai = parseInt(c.front_topmargin, 10)
            }
            if (!S) {
                S = parseInt(c.behind_topmargin, 10)
            }
            if (!d) {
                d = parseInt(c.back_topmargin, 10)
            }
            var aT = parseInt(aO.css("borderLeftWidth"), 10), aM = parseInt(aO.css("paddingLeft"), 10), R = Q.find("." + ap).css("fontSize"), aV = Q.find("." + ac).css("fontSize"), V = Q.find("." + z), aq = {
                top: parseInt(V.css("marginTop"), 10),
                right: parseInt(V.css("marginRight"), 10),
                bottom: parseInt(V.css("marginBottom"), 10),
                left: parseInt(V.css("marginLeft"), 10)
            }, aD = Math.round(c.front_img_width + aq.left + aq.right + (aM * 2) + (aT * 2)), j = Math.round(A + aq.top + aq.bottom + (aM * 2) + (aT * 2)), al = Math.round(c.front_img_width * c.behind_size), C = Math.round(A * c.behind_size), r = aI.find("." + ap).css("fontSize"), h = aI.find("." + ac).css("fontSize"), K = aI.find("." + z), I = {
                top: parseInt(K.css("marginTop"), 10),
                right: parseInt(K.css("marginRight"), 10),
                bottom: parseInt(K.css("marginBottom"), 10),
                left: parseInt(K.css("marginLeft"), 10)
            }, ae = Math.round(al + I.left + I.right + (aM * 2) + (aT * 2)), at = Math.round(C + I.top + I.bottom + (aM * 2) + (aT * 2)), y = Math.round(c.front_img_width * c.back_size), aJ = Math.round(A * c.back_size), aW = l.find("." + ap).css("fontSize"), U = l.find("." + ac).css("fontSize"), W = l.find("." + z), x = {
                top: parseInt(W.css("marginTop"), 10),
                right: parseInt(W.css("marginRight"), 10),
                bottom: parseInt(W.css("marginBottom"), 10),
                left: parseInt(W.css("marginLeft"), 10)
            }, e = Math.round(y + x.left + x.right + (aM * 2) + (aT * 2)), Y = Math.round(aJ + x.top + x.bottom + (aM * 2) + (aT * 2)), q = Math.round((aU / 2) - (aD / 2)), ar = (aU - e), F;
            if (n) {
                A = "auto";
                C = "auto";
                aJ = "auto"
            }
            if (c.behind_distance !== "auto") {
                F = parseInt(c.behind_distance, 10)
            } else {
                F = Math.round((aU / 4) - (ae / 2))
            }
            var aS = (aU - F - ae);
            l.removeClass("back");
            aI.removeClass("behind");
            Q.removeClass("front");
            var aa = a("span", aO).css("padding-top"), i = a("span", aO).css("padding-right"), au = a("span", aO).css("padding-bottom"), aP = a("span", aO).css("padding-left"), ah = {
                opacity: c.text_opacity,
                fontSize: aV,
                paddingTop: aa,
                paddingRight: i,
                paddingBottom: au,
                paddingLeft: aP
            }, X = {
                opacity: c.text_opacity,
                fontSize: h,
                paddingTop: Math.round(parseInt(aa, 10) * 0.8),
                paddingRight: Math.round(parseInt(i, 10) * 0.8),
                paddingBottom: Math.round(parseInt(au, 10) * 0.8),
                paddingLeft: Math.round(parseInt(aP, 10) * 0.8)
            }, aL = {
                opacity: c.text_opacity,
                fontSize: U,
                paddingTop: Math.round(parseInt(aa, 10) * 0.6),
                paddingRight: Math.round(parseInt(i, 10) * 0.6),
                paddingBottom: Math.round(parseInt(au, 10) * 0.6),
                paddingLeft: Math.round(parseInt(aP, 10) * 0.6)
            };
            if (c.text_front_only) {
                X.opacity = 0;
                aL = a.extend(aL, X)
            }
            if (g) {
                var J = (parseInt(Q.find("." + ac).css("margin-left"), 10) + parseInt(Q.find("." + ac).css("margin-right"), 10)), M = (parseInt(aI.find("." + ac).css("margin-left"), 10) + parseInt(aI.find("." + ac).css("margin-right"), 10)), f = (parseInt(l.find("." + ac).css("margin-left"), 10) + parseInt(l.find("." + ac).css("margin-right"), 10));
                ah.width = aD - parseInt(i, 10) - parseInt(aP, 10) - J - (aT * 2);
                X.width = ae - X.paddingRight - X.paddingLeft - M - (aT * 2);
                aL.width = e - aL.paddingRight - aL.paddingLeft - f - (aT * 2)
            }
            am.find(".dummy").remove();
            var p = [], Z = function (aZ) {
                p = [];
                p.push(Math.floor(parseInt(aB[az.data("framesource")].data("displayheight"), 10) * c.back_size) + Y + parseInt(d, 10));
                p.push(Math.floor(parseInt(aB[ay.data("framesource")].data("displayheight"), 10) * c.behind_size) + at + parseInt(S, 10));
                p.push(parseInt(aB[P].data("displayheight"), 10) + j + parseInt(ai, 10));
                p.push(Math.floor(parseInt(aB[aw.data("framesource")].data("displayheight"), 10) * c.behind_size) + at + parseInt(S, 10));
                p.push(Math.floor(parseInt(aB[av.data("framesource")].data("displayheight"), 10) * c.back_size) + Y + parseInt(d, 10));
                if (aZ) {
                    p.sort(function (a1, a0) {
                        return a0 - a1
                    });
                    if (H !== p[0]) {
                        H = p[0];
                        am.stop().animate({height: H}, c.speed, c.easing).css({overflow: "visible"})
                    }
                }
            };
            if (c.variable_container_height && n) {
                Z(false)
            } else {
                if (n) {
                    o.sort(function (a0, aZ) {
                        return aZ - a0
                    });
                    var w = parseInt(o[0], 10);
                    if (!w) {
                        w = 300
                    }
                    p.push(w + j + parseInt(ai, 10));
                    p.push(w + at + parseInt(S, 10));
                    p.push(w + Y + parseInt(d, 10))
                } else {
                    p.push(j + parseInt(ai, 10));
                    p.push(at + parseInt(S, 10));
                    p.push(Y + parseInt(d, 10))
                }
            }
            p.sort(function (a0, aZ) {
                return aZ - a0
            });
            H = p[0];
            am.height(H).width(aU);
            az.css({left: 0, top: d, opacity: c.back_opacity}).find("." + z).css({
                width: y,
                height: aJ,
                marginTop: x.top,
                marginRight: x.right,
                marginBottom: x.bottom,
                marginLeft: x.left,
                opacity: 1
            }).siblings("." + ac).css(aL).children("." + ap).css({fontSize: aW});
            ay.css({left: F, top: S, zIndex: 2, opacity: c.behind_opacity}).find("." + z).css({
                width: al,
                height: C,
                marginTop: I.top,
                marginRight: I.right,
                marginBottom: I.bottom,
                marginLeft: I.left,
                opacity: 1
            }).siblings("." + ac).css(X).children("." + ap).css({fontSize: r});
            ax.css({
                left: q,
                top: ai,
                zIndex: 3,
                opacity: 1
            }).children("a").find("*").css({cursor: "pointer"}).end().find("." + z).css({
                width: c.front_img_width,
                height: A,
                marginTop: aq.top,
                marginRight: aq.right,
                marginBottom: aq.bottom,
                marginLeft: aq.left,
                opacity: 1
            }).siblings("." + ac).css(ah).children("." + ap).css({fontSize: R});
            aw.css({left: aS, top: S, zIndex: 2, opacity: c.behind_opacity}).find("." + z).css({
                width: al,
                height: C,
                marginTop: I.top,
                marginRight: I.right,
                marginBottom: I.bottom,
                marginLeft: I.left,
                opacity: 1
            }).siblings("." + ac).css(X).children("." + ap).css({fontSize: r});
            av.css({left: ar, top: d, opacity: c.back_opacity}).find("." + z).css({
                width: y,
                height: aJ,
                marginTop: x.top,
                marginRight: x.right,
                marginBottom: x.bottom,
                marginLeft: x.left,
                opacity: 1
            }).siblings("." + ac).css(aL).children("." + ap).css({fontSize: aW});
            if (c.text_front_only) {
                az.add(ay).add(aw).add(av).find("." + ac).hide()
            }
            if (g && n) {
                az.find("." + z).css({height: Math.floor((aB[az.data("framesource")].data("displayheight")) * c.back_size)});
                ay.find("." + z).css({height: Math.floor((aB[ay.data("framesource")].data("displayheight")) * c.behind_size)});
                ax.find("." + z).css({height: Math.floor(aB[ax.data("framesource")].data("displayheight"))});
                aw.find("." + z).css({height: Math.floor((aB[aw.data("framesource")].data("displayheight")) * c.behind_size)});
                av.find("." + z).css({height: Math.floor((aB[av.data("framesource")].data("displayheight")) * c.back_size)})
            }
            var aR = {
                width: y,
                marginTop: x.top,
                marginRight: x.right,
                marginBottom: x.bottom,
                marginLeft: x.left,
                opacity: 1
            };
            if (!n) {
                aR.height = aJ
            }
            var aj = a.extend({}, aR);
            if (n) {
                aj.height = "auto"
            }
            var E = {
                width: al,
                marginTop: I.top,
                marginRight: I.right,
                marginBottom: I.bottom,
                marginLeft: I.left,
                opacity: 1
            };
            if (!n) {
                E.height = C
            }
            var u = {
                width: c.front_img_width,
                marginTop: aq.top,
                marginRight: aq.right,
                marginBottom: aq.bottom,
                marginLeft: aq.left,
                opacity: 1
            };
            if (!n) {
                u.height = A
            }
            if (typeof a.easing.easeIOBoutique === "undefined" || !a.easing.easeIOBoutique) {
                a.extend(a.easing, {
                    easeInBoutique: function (a2, a0, a1, aZ, a4) {
                        var a3 = a0 / a4;
                        return a3 * a3
                    }, easeOutBoutique: function (a2, a0, a1, aZ, a4) {
                        var a3 = a0 / a4;
                        return -1 * a3 * (a3 - 2)
                    }, easeIOBoutique: function (a2, a0, a1, aZ, a4) {
                        var a3 = (a0 / (a4 / 2));
                        if (a2 <= 0.5) {
                            return ((a3 / 2) * a3)
                        } else {
                            return -0.5 * ((--a3) * (a3 - 2) - 1)
                        }
                    }
                })
            }
            function k() {
                var aZ = parseInt(m.width(), 10);
                am.width(aZ);
                if (c.behind_distance === "auto") {
                    F = Math.round((aZ / 4) - (ae / 2));
                    ay.css({left: F})
                }
                q = Math.round((aZ / 2) - (aD / 2));
                aS = (aZ - F - ae);
                ar = (aZ - e);
                ax.css({left: q});
                aw.css({left: aS});
                av.css({left: ar})
            }

            if (G) {
                k()
            }
            function aY() {
                if (v) {
                    clearInterval(v);
                    v = false
                }
            }

            function ak() {
                if (v) {
                    aY()
                }
                v = setInterval(function () {
                    if (c.right_to_left) {
                        ay.trigger("click")
                    } else {
                        aw.trigger("click")
                    }
                }, c.autoplay_interval)
            }

            function t(a4, a3) {
                var a0, aZ, a2 = c.speed;
                ab = true;
                a3 = a3 || false;
                if (!a3) {
                    if (a4 > 1) {
                        a3 = "first"
                    } else {
                        a3 = "normal"
                    }
                }
                if (a4 > 1 && a3 === "first") {
                    aZ = c.move_more_easein;
                    a2 = Math.round(c.speed * 0.7)
                } else {
                    if (a4 > 1) {
                        aZ = c.move_more_easebetween;
                        a2 = Math.round(c.speed * 0.4)
                    } else {
                        if (a3 === "last") {
                            aZ = c.move_more_easeout
                        } else {
                            aZ = c.easing
                        }
                    }
                }
                if (c.autoplay) {
                    aY()
                }
                if (P === (aA - 2)) {
                    ad = 1
                } else {
                    if (P === (aA - 1)) {
                        ad = 2;
                        if (ad > aA) {
                            ad = 1
                        }
                    } else {
                        if (P === aA) {
                            ad = 3;
                            if (ad > aA) {
                                ad = 1
                            }
                        } else {
                            ad = (P + 3)
                        }
                    }
                }
                if (typeof pre_move_callback === "function") {
                    var a1 = aw.children("a").attr("href");
                    if (!a1) {
                        a1 = "no_anchor"
                    }
                    pre_move_callback(a1, D, aw.data("framesource"))
                }
                if (af) {
                    am.stop();
                    if (c.text_front_only) {
                        ax.find("." + ac).hide()
                    }
                }
                az.removeClass("frame1").addClass("remove").css("zIndex", -1);
                aK = ay.removeClass("frame2").addClass("frame1").stop().animate({
                    opacity: c.back_opacity,
                    left: 0,
                    top: d
                }, a2, aZ);
                a0 = aK.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(aR, a2, aZ);
                if (!c.text_front_only) {
                    aK.find("." + ap).stop().animate({fontSize: aW}, a2, aZ).end().find("." + ac).stop().animate(aL, a2, aZ)
                }
                setTimeout(function () {
                    aK.css("zIndex", 1)
                }, (a2 / 4));
                aH = ax.removeClass("frame3").addClass("frame2").stop().animate({
                    opacity: c.behind_opacity,
                    left: F,
                    top: S
                }, a2, aZ);
                aH.find("." + ap).stop().animate({fontSize: r}, a2, aZ).end().find("." + ac).stop().animate(X, a2, aZ);
                a0 = aH.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(E, a2, aZ);
                setTimeout(function () {
                    aH.css("zIndex", 2)
                }, (a2 / 4));
                aG = aw.removeClass("frame4").addClass("frame3").stop().animate({
                    opacity: 1,
                    left: q,
                    top: ai
                }, a2, aZ, function () {
                    if (af && c.text_front_only) {
                        a(this).find("." + ap).stop().css({fontSize: R}).end().find("." + ac).stop().css(ah).fadeIn(200)
                    }
                    if (af && n && c.variable_container_height) {
                        Z(true)
                    }
                });
                a0 = aG.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(u, a2, aZ);
                if (!af || !c.text_front_only) {
                    aG.find("." + ap).stop().animate({fontSize: R}, a2, aZ).end().find("." + ac).stop().show().animate(ah, a2, aZ)
                }
                setTimeout(function () {
                    aG.css("zIndex", 3)
                }, (a2 / 4));
                aE = av.removeClass("frame5").addClass("frame4").stop().animate({
                    opacity: c.behind_opacity,
                    left: aS,
                    top: S
                }, a2, aZ);
                a0 = aE.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(E, a2, aZ);
                if (!c.text_front_only) {
                    aE.find("." + ap).stop().animate({fontSize: r}, a2, aZ).end().find("." + ac).stop().animate(X, a2, aZ)
                }
                setTimeout(function () {
                    aE.css("zIndex", 2)
                }, (a2 / 4));
                av = aB[ad].clone();
                av.addClass("frame5").prependTo(am).data("framesource", ad).show().css({
                    opacity: 0,
                    left: ar,
                    top: d
                }).animate({opacity: c.back_opacity}, a2, function () {
                    aH.children("a").find("*").css({cursor: "default"});
                    if (c.autoplay) {
                        ak()
                    }
                    if (a4 === 2) {
                        t(1, "last")
                    } else {
                        if (a4 > 1) {
                            t(a4 - 1, "normal")
                        } else {
                            aG.children("a").find("*").css({cursor: "pointer"})
                        }
                    }
                    if (!aG.is(":animated")) {
                        ab = false;
                        am.children(".remove").stop().fadeOut(a2, function () {
                            a(this).remove()
                        });
                        if (typeof move_callback === "function") {
                            var a5 = aG.children("a").attr("href");
                            if (!a5) {
                                a5 = "no_anchor"
                            }
                            move_callback(a5, D, ax.data("framesource"))
                        }
                    }
                }).find("." + z).css(aj).end().children("a").removeAttr("rel");
                if (c.text_front_only) {
                    av.find("." + ap).css({fontSize: r}).end().find("." + ac).css(X).hide()
                } else {
                    av.find("." + ap).css({fontSize: aW}).end().find("." + ac).css(aL)
                }
                az = aK;
                ay = aH;
                ax = aG;
                aw = aE;
                am.children(".remove").fadeOut(a2, function () {
                    a(this).remove()
                });
                if (P === aA) {
                    P = 1
                } else {
                    P = (P + 1)
                }
                if (!af && n && c.variable_container_height) {
                    Z(true)
                }
            }

            function s(a4, a3) {
                var a0, aZ, a2 = c.speed;
                ab = true;
                a3 = a3 || false;
                if (!a3) {
                    if (a4 > 1) {
                        a3 = "first"
                    } else {
                        a3 = "normal"
                    }
                }
                if (a4 > 1 && a3 === "first") {
                    aZ = c.move_more_easein;
                    a2 = Math.round(c.speed * 0.7)
                } else {
                    if (a4 > 1) {
                        aZ = c.move_more_easebetween;
                        a2 = Math.round(c.speed * 0.4)
                    } else {
                        if (a3 === "last") {
                            aZ = c.move_more_easeout
                        } else {
                            aZ = c.easing
                        }
                    }
                }
                if (c.autoplay) {
                    aY()
                }
                if (P === 3) {
                    ad = aA
                } else {
                    if (P === 2) {
                        ad = (aA - 1);
                        if (ad < 1) {
                            ad = aA
                        }
                    } else {
                        if (P === 1) {
                            ad = (aA - 2);
                            if (ad < 1) {
                                ad = aA
                            }
                        } else {
                            ad = (P - 3)
                        }
                    }
                }
                if (typeof pre_move_callback === "function") {
                    var a1 = ay.children("a").attr("href");
                    if (!a1) {
                        a1 = "no_anchor"
                    }
                    pre_move_callback(a1, D, ay.data("framesource"))
                }
                if (af) {
                    am.stop();
                    if (c.text_front_only) {
                        ax.find("." + ac).hide()
                    }
                }
                av.removeClass("frame5").addClass("remove").css("zIndex", -1);
                aC = aw.removeClass("frame4").addClass("frame5").stop().animate({
                    opacity: c.back_opacity,
                    left: ar,
                    top: d
                }, a2, aZ);
                a0 = aC.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(aR, a2, aZ);
                if (!c.text_front_only) {
                    aC.find("." + ap).stop().animate({fontSize: aW}, a2, aZ).end().find("." + ac).stop().animate(aL, a2, aZ)
                }
                setTimeout(function () {
                    aC.css("zIndex", 1)
                }, (a2 / 4));
                aE = ax.removeClass("frame3").addClass("frame4").stop().animate({
                    opacity: c.behind_opacity,
                    left: aS,
                    top: S
                }, a2, aZ);
                aE.find("." + ap).stop().animate({fontSize: r}, a2, aZ).end().find("." + ac).stop().animate(X, a2, aZ);
                a0 = aE.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(E, a2, aZ);
                setTimeout(function () {
                    aE.css("zIndex", 2)
                }, (a2 / 4));
                aG = ay.removeClass("frame2").addClass("frame3").stop().animate({
                    opacity: 1,
                    left: q,
                    top: ai
                }, a2, aZ, function () {
                    if (af && c.text_front_only) {
                        a(this).find("." + ap).stop().css({fontSize: R}).end().find("." + ac).stop().css(ah).fadeIn(200)
                    }
                    if (af && n && c.variable_container_height) {
                        Z(true)
                    }
                });
                a0 = aG.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(u, a2, aZ);
                if (!af || !c.text_front_only) {
                    aG.find("." + ap).stop().animate({fontSize: R}, a2, aZ).end().find("." + ac).stop().show().animate(ah, a2, aZ)
                }
                setTimeout(function () {
                    aG.css("zIndex", 3)
                }, (a2 / 4));
                aH = az.removeClass("frame1").addClass("frame2").stop().animate({
                    opacity: c.behind_opacity,
                    left: F,
                    top: S
                }, a2, aZ);
                a0 = aH.find("." + z).stop();
                if (g && n) {
                    a0.css({height: "auto"})
                }
                a0.animate(E, a2, aZ);
                if (!c.text_front_only) {
                    aH.find("." + ap).stop().animate({fontSize: r}, a2, aZ).end().find("." + ac).stop().animate(X, a2, aZ)
                }
                setTimeout(function () {
                    aH.css("zIndex", 2)
                }, (a2 / 4));
                az = aB[ad].clone();
                az.addClass("frame1").prependTo(am).data("framesource", ad).show().css({
                    opacity: 0,
                    left: 0,
                    top: d
                }).animate({opacity: c.back_opacity}, a2, function () {
                    aE.children("a").find("*").css({cursor: "default"});
                    if (c.autoplay) {
                        ak()
                    }
                    if (a4 === 2) {
                        s(1, "last")
                    } else {
                        if (a4 > 1) {
                            s(a4 - 1, "normal")
                        } else {
                            aG.children("a").find("*").css({cursor: "pointer"})
                        }
                    }
                    if (!aG.is(":animated")) {
                        ab = false;
                        am.children(".remove").stop().fadeOut(a2, function () {
                            a(this).remove()
                        });
                        if (typeof move_callback === "function") {
                            var a5 = aG.children("a").attr("href");
                            if (!a5) {
                                a5 = "no_anchor"
                            }
                            move_callback(a5, D, ax.data("framesource"))
                        }
                    }
                }).find("." + z).css(aj).end().children("a").removeAttr("rel");
                if (c.text_front_only) {
                    az.find("." + ap).css({fontSize: r}).end().find("." + ac).css(X).hide()
                } else {
                    az.find("." + ap).css({fontSize: aW}).end().find("." + ac).css(aL)
                }
                ay = aH;
                ax = aG;
                aw = aE;
                av = aC;
                am.children(".remove").fadeOut(a2, function () {
                    a(this).remove()
                });
                if (P === 1) {
                    P = aA
                } else {
                    P = (P - 1)
                }
                if (!af && n && c.variable_container_height) {
                    Z(true)
                }
            }

            window[D + "_ext_prev"] = window[D + "_prev"] = window[D + "_previous"] = function (aZ) {
                aZ = aZ || 1;
                if (c.right_to_left) {
                    t(aZ)
                } else {
                    s(aZ)
                }
            };
            window[D + "_ext_next"] = window[D + "_next"] = function (aZ) {
                aZ = aZ || 1;
                if (c.right_to_left) {
                    s(aZ)
                } else {
                    t(aZ)
                }
            };
            window[D + "_stopautoplay"] = function () {
                if (c.autoplay) {
                    aY()
                }
                c.autoplay = false
            };
            window[D + "_startautoplay"] = function () {
                if (!c.autoplay) {
                    ak()
                }
                c.autoplay = true
            };
            window[D + "_goto"] = function (a1) {
                a1 = a1 || false;
                if (a1) {
                    a1 = parseInt(a1, 10);
                    if (parseFloat(a1) === a1 && P !== a1 && aA >= a1) {
                        var aZ = 0, a0;
                        if (P < a1) {
                            if (a1 - P <= (P + (aA - a1))) {
                                a0 = "right";
                                aZ = a1 - P
                            } else {
                                a0 = "left";
                                aZ = P + (aA - a1)
                            }
                        } else {
                            if (((aA - P) + a1) <= P - a1) {
                                a0 = "right";
                                aZ = (aA - P) + a1
                            } else {
                                a0 = "left";
                                aZ = P - a1
                            }
                        }
                        if (a0 === "right") {
                            t(aZ)
                        } else {
                            s(aZ)
                        }
                    }
                }
            };
            am.delegate(".frame1", "click", function (aZ) {
                if (c.freescroll || !ab) {
                    if (c.never_move_twice) {
                        s(1)
                    } else {
                        if (c.move_more_directly) {
                            s(1);
                            s(1)
                        } else {
                            s(2)
                        }
                    }
                    aZ.preventDefault()
                }
            });
            am.delegate(".frame2", "click", function (aZ) {
                if (c.freescroll || !ab) {
                    s(1);
                    aZ.preventDefault()
                }
            });
            am.delegate(".frame4", "click", function (aZ) {
                if (c.freescroll || !ab) {
                    t(1);
                    aZ.preventDefault()
                }
            });
            am.delegate(".frame5", "click", function (aZ) {
                if (c.freescroll || !ab) {
                    if (c.never_move_twice) {
                        t(1)
                    } else {
                        if (c.move_more_directly) {
                            t(1);
                            t(1)
                        } else {
                            t(2)
                        }
                    }
                    aZ.preventDefault()
                }
            });
            if (c.move_on_hover) {
                am.delegate(".frame1", "mousemove", function () {
                    az.trigger("click")
                });
                am.delegate(".frame2", "mousemove", function () {
                    ay.trigger("click")
                });
                am.delegate(".frame4", "mousemove", function () {
                    aw.trigger("click")
                });
                am.delegate(".frame5", "mousemove", function () {
                    av.trigger("click")
                })
            }
            var ag = {
                left: "-=" + Math.floor(c.front_img_width * (c.hovergrowth / 2)),
                top: "-=" + Math.floor((c.front_img_width * (c.hovergrowth)) / 2)
            };
            if (!n) {
                ag.top = "-=" + Math.floor(A * c.hovergrowth)
            }
            var aF = {left: "-=" + Math.floor(al * c.hovergrowth)};
            var an = {left: "+=" + Math.floor(al * c.hovergrowth)};
            var aQ = {width: Math.floor(c.front_img_width * (1 + c.hovergrowth))};
            var ao = {width: "+=" + Math.floor(c.hovergrowth * c.front_img_width)};
            if (!n) {
                aQ.height = Math.floor(A * (1 + c.hovergrowth))
            }
            var aN = {width: c.front_img_width};
            if (!n) {
                aN.height = A
            }
            am.delegate(".frame3", "mouseenter mouseleave", function (aZ) {
                if (aZ.type === "mouseenter" && !ab && !N) {
                    N = true;
                    if (c.autoplay) {
                        aY()
                    }
                    if (n && g) {
                        aQ.height = Math.floor(aB[ax.data("framesource")].data("displayheight") * (1 + c.hovergrowth))
                    }
                    ax.addClass("zoomed").stop(true, true).animate(ag, aX).find("." + z).stop().animate(aQ, aX);
                    ay.stop(true, true).animate(aF, aX);
                    aw.stop(true, true).animate(an, aX);
                    if (g) {
                        ax.find("." + ac).stop().animate(ao, aX)
                    }
                } else {
                    if (!ab) {
                        N = false;
                        if (c.autoplay) {
                            ak()
                        }
                        if (n && g) {
                            aN.height = aB[ax.data("framesource")].data("displayheight")
                        }
                        ax.stop().animate({left: q, top: ai}, aX).find("." + z).stop().animate(aN, aX, function () {
                            ax.removeClass("zoomed")
                        });
                        ay.stop().animate({left: F}, aX);
                        aw.stop().animate({left: aS}, aX);
                        if (g) {
                            am.find(".zoomed ." + ac).stop().animate(ah, aX)
                        }
                    }
                }
            });
            if (!L) {
                am.delegate(".frame3:not(.zoomed)", "mousemove", function () {
                    if (!N) {
                        ax.trigger("mouseenter")
                    }
                })
            }
            am.delegate(".frame3 a", "click", function (aZ) {
                if (typeof link_callback === "function") {
                    if (!link_callback(a(this).attr("href"), D)) {
                        aZ.preventDefault()
                    }
                }
                if (c.autoplay && c.stop_autoplay_on_click) {
                    aY();
                    c.autoplay = false
                }
                if (c.lightbox_support) {
                    aO.eq(P - 1).children("a").trigger("click");
                    aZ.preventDefault()
                }
            });
            if (c.keyboard) {
                a(document).keydown(function (aZ) {
                    if (aZ.keyCode === 39 || (!c.right_to_left && (aZ.keyCode === 13 || aZ.keyCode === 32))) {
                        t(1)
                    }
                    if (aZ.keyCode === 37 || (c.right_to_left && (aZ.keyCode === 13 || aZ.keyCode === 32))) {
                        s(1)
                    }
                })
            }
            if (c.autoplay) {
                ak()
            }
            if (G) {
                O.resize(function () {
                    k()
                })
            }
        });
        return this
    }
})(jQuery);
