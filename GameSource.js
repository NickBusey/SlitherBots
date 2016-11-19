var testing = !1;
0 <= window.location.href.indexOf("/testing") && (testing = !0);
var forcing = !1,
    ua = navigator.userAgent.toLowerCase(),
    is_android = 0 <= ua.indexOf("android"),
    is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/"),
    uua = navigator.userAgent,
    is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod"),
    is_mobile = 0 <= ua.indexOf("mobile"),
    is_firefox = -1 < ua.indexOf("firefox"),
    is_ie8oo = window.attachEvent && !window.addEventListener,
    is_safari = is_firefox = !1;
0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome") && (is_safari = !0);
var no_raf = !1,
    raf = function(b) {};
window.requestAnimationFrame ? raf = window.requestAnimationFrame : window.mozRequestAnimationFrame ? raf = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? raf = window.webkitRequestAnimationFrame : no_raf = !0;
is_mobile || (no_raf = !0);
var no_raf = !0,
    a, i, j, k, l, m, n, o, r, fj, d, d2, qq, sc, agpu = "translateZ(0)",
    ang, sang, vang;

function trf(b, f) {
    b.style.webkitTransform = b.style.OTransform = b.style.msTransform = b.style.MozTransform = b.style.transform = f
}

function trfo(b, f) {
    b.style.webkitTransformOrigin = b.style.OTransformOrigin = b.style.msTransformOrigin = b.style.MozTransformOrigin = b.style.transformOrigin = f
}
var pi2 = 2 * Math.PI,
    animating = !1,
    startAnimation = function() {
        animating = !0;
        no_raf ? is_mobile ? setInterval(oef, 33) : is_safari ? setInterval(oef, 33) : setInterval(oef, 20) : raf(oef)
    },
    ois = [],
    wic = 0,
    ldi = function(b) {
        wic++;
        var f = {},
            c = document.createElement("img");
        f.ii = c;
        f.sc = 1;
        c.onload = function() {
            for (var b = ois.length - 1; 0 <= b; b--)
                if (ois[b].ii == this) {
                    b = ois[b];
                    b.ww = this.width;
                    b.hh = this.height;
                    b.loaded = !0;
                    if (b.onload) b.onload();
                    break
                }
            wic--;
            0 == wic && startAnimation()
        };
        f.src = b;
        ois.push(f);
        return f
    };

function addCss(b) {
    var f = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(f);
    f.type = "text/css";
    f.styleSheet ? f.styleSheet.cssText = b : f.appendChild(document.createTextNode(b))
}
var nbg = document.getElementById("nbg"),
    nzbg, sadg, sadu, sadd, p, xx, yy, grw, grh, elem, map, imgd, ctx;
elem = document.createElement("canvas");
var rw = 64,
    rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4).5 > Math.random() ? imgd[p] = imgd[p + 1] = imgd[p + 2] = 0 : (imgd[p] = 44, imgd[p + 1] = 56, imgd[p + 2] = 68), imgd[p + 3] = Math.floor(32 * Math.random());
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
32 < nzbg.length && (nbg.style.backgroundImage = "url(" + nzbg + ")");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j)), imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j)), imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(7 + 52.5 * j), imgd[p + 2] = Math.floor(6.4 + 48 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j)), imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(5.4 + 40.5 * j), imgd[p + 2] = Math.floor(7 + 52.5 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
var mos = [],
    m_iv = -1,
    swmup = !1;

function mkBtn(b, f, c, h) {
    var u = document.createElement("div");
    b.tagName || (b = document.getElementById(b), b.style.width = c + "px", b.style.height = h + "px", u.style.width = c + "px", u.style.height = h + "px");
    var q = {
        lic: 0
    };
    q.elem = b;
    q.md = !1;
    q.mo = !1;
    q.mdf = 0;
    q.mof = 0;
    var e = !0;
    b.style && b.style.position && ("absolute" == (b.style.position + "").toLowerCase() && (e = !1), "fixed" == (b.style.position + "").toLowerCase() && (e = !1));
    e && (b.style.position = "relative");
    u.style.position = "absolute";
    u.style.opacity = 0;
    u.style.left = "0px";
    u.style.top = "0px";
    b.appendChild(u);
    q.ho = u;
    q.alic = function() {
        this.lic++;
        if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) this.onload()
    };
    mos.push(q);
    q.setEnabled = function(b) {
        b ? (this.disabled = !1, this.upi.style.opacity = this.mof, this.downi.style.opacity = this.mdf, this.elem.style.opacity = 1, this.elem.style.cursor = "pointer") : (this.disabled = !0, this.upi.style.opacity = 0, this.downi.style.opacity = 0, this.elem.style.opacity = .38, this.elem.style.cursor = "default")
    };
    if (f)
        for (e = 1; 3 >= e; e++) {
            var w = document.createElement("img");
            w.draggable = !1;
            w.style.position = "absolute";
            w.style.left = "0px";
            w.style.top = "0px";
            w.border = 0;
            w.width = c;
            w.height = h;
            w.className = "nsi";
            u.appendChild(w);
            1 == e ? (q.normi = w, w.onload = function() {
                for (var b = mos.length - 1; 0 <= b; b--) {
                    var c = mos[b];
                    if (c.normi == this) {
                        c.alic();
                        break
                    }
                }
            }, w.src = f + ".png") : 2 == e ? (q.upi = w, w.style.opacity = 0, w.onload = function() {
                for (var b = mos.length - 1; 0 <= b; b--) {
                    var c = mos[b];
                    if (c.upi == this) {
                        c.alic();
                        break
                    }
                }
            }, w.src = f + "up.png") : 3 == e && (q.downi = w, w.style.opacity = 0, w.onload = function() {
                for (var b = mos.length - 1; 0 <= b; b--) {
                    var c =
                        mos[b];
                    if (c.downi == this) {
                        c.alic();
                        break
                    }
                }
            }, w.src = f + "down.png")
        } else u.style.opacity = 1;
    b.onmouseenter = function() {
        for (var b = mos.length - 1; 0 <= b; b--) {
            var c = mos[b];
            if (c.elem == this) {
                if (!c.disabled && !c.mo) {
                    c.mo = !0;
                    if (c.onmouseenter) c.onmouseenter(); - 1 == m_iv && (m_iv = setInterval(hmos, 25))
                }
                break
            }
        }
    };
    b.onmouseleave = function() {
        for (var b = mos.length - 1; 0 <= b; b--) {
            var c = mos[b];
            if (c.elem == this) {
                if (c.mo) {
                    c.mo = !1;
                    if (c.onmouseleave) c.onmouseleave(); - 1 == m_iv && (m_iv = setInterval(hmos, 25))
                }
                break
            }
        }
    };
    b.onmousedown = function(b) {
        for (var c =
                mos.length - 1; 0 <= c; c--) {
            var e = mos[c];
            if (e.elem == this) {
                if (!e.disabled && !e.md) {
                    e.md = !0;
                    if (e.onmousedown) e.onmousedown(b, e); - 1 == m_iv && (m_iv = setInterval(hmos, 25));
                    return !1
                }
                break
            }
        }
    };
    b.onmouseup = b.ondragend = function(b) {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var e = mos[c];
            if (e.elem == this) {
                if (e.md) {
                    e.mdf = 1;
                    e.md = !1;
                    if (e.onmouseup && (e.onmouseup(b, e), is_mobile)) e.elem.onmouseleave(); - 1 == m_iv && (m_iv = setInterval(hmos, 25))
                }
                break
            }
        }
    };
    swmup || (swmup = !0, window.onmouseup = window.ondragover = window.ondragend = function() {
        for (var b =
                mos.length - 1; 0 <= b; b--) {
            var c = mos[b];
            c.md && (c.md = !1, -1 == m_iv && (m_iv = setInterval(hmos, 25)))
        }
    });
    return q
}

function hmos() {
    for (var b, f = !1, c = mos.length - 1; 0 <= c; c--) {
        var h = mos[c];
        b = !1;
        h.mo ? 1 != h.mof && (f = !0, h.mof += .33, 1 <= h.mof && (h.mof = 1), b = !0) : 0 != h.mof && (f = !0, h.mof -= .2, 0 >= h.mof && (h.mof = 0), b = !0);
        b && (h.upi.style.opacity = h.disabled ? 0 : h.mof);
        b = !1;
        h.md ? 1 != h.mdf && (f = !0, h.mdf += .33, 1 <= h.mdf && (h.mdf = 1), b = !0) : 0 != h.mdf && (f = !0, h.mdf -= .2, 0 >= h.mdf && (h.mdf = 0), b = !0);
        b && (h.downi.style.opacity = h.disabled ? 0 : h.mdf)
    }
    f || (clearInterval(m_iv), m_iv = -1)
}

function makeTextBtn(b, f, c, h, u) {
    f || (f = 56);
    56 < f && (f = 56);
    c || (c = 15);
    h || (h = 14);
    var q = document.createElement("div");
    q.className = "btnt nsi sadg" + u;
    var e = q.style;
    e.position = "absolute";
    e.width = "auto";
    e.color = "#ffffff";
    e.fontWeight = "bold";
    e.textAlign = "center";
    e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    e.fontSize = c + "px";
    q.textContent = b;
    e.cursor = "pointer";
    document.body.appendChild(q);
    var w = Math.ceil(35 + q.offsetWidth);
    document.body.removeChild(q);
    q.textContent = "";
    e.width = w + "px";
    e.height = f +
        "px";
    e.lineHeight = f + "px";
    is_mobile || (e.boxShadow = "0px 3px 20px rgba(0,0,0, .75)");
    e.borderRadius = h + "px";
    var E = document.createElement("div"),
        e = E.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = w + "px";
    e.height = f + "px";
    e.borderRadius = h + 1 + "px";
    e.opacity = 0;
    E.className = "sadu" + u;
    var y = document.createElement("div"),
        e = y.style;
    e.position = "absolute";
    e.left = e.top = "-1px";
    e.width = w + 2 + "px";
    e.height = f + 2 + "px";
    e.borderRadius = h + "px";
    e.opacity = 0;
    y.className = "sadd" + u;
    var B = mkBtn(q);
    B.a = 1;
    B.ho.appendChild(E);
    B.upi =
        E;
    B.ho.appendChild(y);
    B.downi = y;
    B.ts = c;
    B.ww = w;
    B.bgm = u;
    B.setText = function(b) {
        var c = document.createElement("div");
        c.className = "nsi sadg" + this.bgm;
        var e = c.style;
        e.position = "absolute";
        e.width = "auto";
        e.color = "#ffffff";
        e.fontWeight = "bold";
        e.textAlign = "center";
        e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        e.fontSize = this.ts + "px";
        c.textContent = b;
        document.body.appendChild(c);
        e = Math.ceil(35 + c.offsetWidth);
        document.body.removeChild(c);
        this.btnf.textContent = b;
        this.ww = e;
        this.elem.style.width = e +
            "px";
        this.upi.style.width = e + "px";
        this.downi.style.width = e + 2 + "px";
        this.btnf.style.width = e + "px"
    };
    c = document.createElement("div");
    q.appendChild(c);
    B.btnf = c;
    e = c.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = w + "px";
    e.height = f + "px";
    e.borderRadius = h + "px";
    c.textContent = b;
    c.className = "nsi";
    e.color = "#ffffff";
    e.opacity = .9;
    B.ho.appendChild(c);
    return B
}

function heystup() {
    for (var b = document.getElementsByTagName("script"), f = b.length - 1; 0 <= f; f--) {
        var c = b[f];
        try {
            if (c.src && 0 <= (c.src + "").indexOf("mindscape.xyz")) {
                var h = document.createElement("div");
                h.style.width = "100%";
                h.style.height = "100%";
                h.style.position = "fixed";
                h.style.left = h.style.top = "0px";
                h.style.zIndex = 2147483647;
                h.style.fontSize = "87px";
                h.style.color = "#FF3030";
                h.style.background = "#FFFFFF";
                0 <= (c.src + "").indexOf("android") ? h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://play.google.com/store/apps/details?id=air.com.hypah.io.slither">Tap here to download the real game!</a>' :
                    h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>';
                document.body.appendChild(h)
            }
        } catch (u) {}
    }
    is_ios && mba && !mba.parentNode && (h = document.createElement("div"), h.style.width = "100%", h.style.height = "100%", h.style.position = "fixed", h.style.left = h.style.top = "0px", h.style.zIndex = 2147483647, h.style.fontSize = "87px", h.style.color = "#FF3030", h.style.background =
        "#FFFFFF", h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>', document.body.appendChild(h))
}
setInterval(heystup, 8E3);
var sos = [],
    clus = [],
    bso, u_m = [64, 32, 16, 8, 4, 2, 1],
    lgbsc = 1,
    lgcsc = 1,
    lb_fr = 0,
    login_fr = 0,
    llgmtm = Date.now(),
    login_iv = -1;

function loginFade() {
    var b = Date.now(),
        f = (b - llgmtm) / 25;
    llgmtm = b;
    login_fr += .05 * f;
    choosing_skin && (login_fr += .06 * f);
    1 <= login_fr ? (login_fr = 1, login.style.display = "none", cstx.style.display = "none", fbh.style.display = "none", twth.style.display = "none", cskh.style.display = "none", grqh.style.display = "none", plq.style.display = "none", clq.style.display = "none", social.style.display = "none", login.style.opacity = 1, cstx.style.opacity = 1, fbh.style.opacity = 1, twth.style.opacity = 1, cskh.style.opacity = 1, grqh.style.opacity = 1, plq.style.opacity =
        1, clq.style.opacity = 1, social.style.opacity = 1, pskh.style.opacity = 1, nskh.style.opacity = 1, skodiv.style.opacity = 1, tip_fr = -1, tips.style.display = "none", mc.style.opacity = 1, loch.style.opacity = 1, clearInterval(login_iv), login_iv = -1, -1 != showlogo_iv && (ncka = lgss = lga = 1, showLogo(!0), -1 != showlogo_iv && (clearInterval(showlogo_iv), showlogo_iv = -1))) : (lgcsc = 1 + .1 * Math.pow(login_fr, 2), b = Math.round(lgbsc * lgcsc * 1E5) / 1E5, trf(login, "scale(" + b + "," + b + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity =
        1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, grqh.style.opacity = 1 - login_fr, plq.style.opacity = 1 - login_fr, clq.style.opacity = 1 - login_fr, social.style.opacity = 1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity = login_fr, loch.style.opacity = login_fr)
}
var play_count = 0,
    want_play = !1,
    shoa = !1,
    ocho = document.getElementById("ocho");

function oalo() {
    ocho.style.display = "inline";
    adsController.showAd()
}

function oadu() {
    ocho.style.display = "none";
    shoa = !1
}
var ss_a = 0,
    ss_sh = 0,
    spinner_shown = !1,
    ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0,
    lcldtm = Date.now(),
    sstr = "Save";
"FR" == country ? sstr = "Bien" : "BR" == country && (sstr = "OK");
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1),
    skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
    if (playing) {
        try {
            localStorage.snakercv = snake.rcv
        } catch (b) {}
        playing = connected = !1;
        dead_mtm = Date.now() - 5E3
    }
};
var nick = document.getElementById("nick"),
    victory = document.getElementById("victory"),
    victory_bg = document.getElementById("victory_bg"),
    logo = document.getElementById("logo"),
    login = document.getElementById("login"),
    lastscore = document.getElementById("lastscore"),
    nick_holder = document.getElementById("nick_holder"),
    victory_holder = document.getElementById("victory_holder"),
    pstr = "Play";
"DE" == country ? pstr = "Spielen" : "FR" == country ? (pstr = "Jouer", nick.placeholder = "Surnom") : "BR" == country && (pstr = "Joga", nick.placeholder = "Apelido");
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1),
    pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips"),
    tipss = ["Eat to grow longer!", "Don't run into other players!", "When longer, hold the mouse for a speed boost!"];
"DE" == country ? tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"] : "FR" == country ? tipss = ["Mangez de cro\u00eetre!", "Cliquez et vous courrez!", "Ne laissez pas votre t\u00eate toucher d'autres serpents!"] : "BR" == country && (tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"]);
var tip_pos = -1,
    tip_fr = 1.9;
o.elem.onclick = function() {
    want_play || play_btn.disabled || (want_play = !0, play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), spinner_shown = nick.disabled = !0, ldmc.style.display = "inline", play_count++, 3 <= play_count && !is_mobile && adsController && (shoa = !0, adsController.initialize(), adsController.requestAds("https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/136317422/slither-io-game-over&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=http%3A%2F%2Fslither.io&correlator=[timestamp]")))
};
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2),
    sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
    if (!save_btn.disabled) {
        var b = asciize(victory.value);
        140 < b.length && (b = b.substr(0, 140));
        if (5 <= protocol_version) {
            var f = new Uint8Array(2 + b.length);
            f[0] = 255;
            f[1] = 118;
            for (var c = 0; c < b.length; c++) f[c + 2] = b.charCodeAt(c)
        } else
            for (f = new Uint8Array(1 + b.length), f[0] = 118, c = 0; c < b.length; c++) f[c + 1] = b.charCodeAt(c);
        ws.send(f);
        save_btn.setEnabled(!1);
        victory.disabled = !0
    }
};
var wide = !1,
    mww = 850,
    mhh = 700,
    mwwp50 = mww + 50,
    mhhp50 = mhh + 50,
    mwwp150 = mww + 150,
    mhhp150 = mhh + 150,
    mww2 = mww / 2,
    mhh2 = mhh / 2,
    mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
"DE" == country ? lstr = "Bestenliste" : "FR" == country ? lstr = "Gagnants" : "BR" == country && (lstr = "L\u00edderes");
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img"),
    lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = .45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = .25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas"),
    bgp2 = null,
    bgw2 = 599,
    bgh2 = 519,
    ii = document.createElement("img");
ii.onload = function() {
    bgi2.width = bgw2;
    bgi2.height = bgh2;
    var b = bgi2.getContext("2d");
    try {
        b.drawImage(this, 0, 0), bgp2 = b.createPattern(bgi2, "repeat")
    } catch (f) {}
};
ii.src = "/s/bg45.jpg";

function rdgbg() {
    if (ggbg) {
        gbgmc || (gbgmc = document.createElement("canvas"));
        gbgmc.width = mww;
        gbgmc.height = mhh;
        var b = gbgmc.getContext("2d");
        try {
            b.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh)
        } catch (f) {}
    }
}
var ggbg = !1,
    gbgmc = null,
    gbgi = document.createElement("img");
gbgi.onload = function() {
    ggbg = !0;
    rdgbg()
};
gbgi.src = "/s/gbg.jpg";

function newDeadpool() {
    return {
        os: [],
        end_pos: 0,
        add: function(b) {
            this.end_pos == this.os.length ? this.os.push(b) : this.os[this.end_pos] = b;
            this.end_pos++
        },
        get: function() {
            if (1 <= this.end_pos) {
                this.end_pos--;
                var b = this.os[this.end_pos];
                this.os[this.end_pos] = null;
                return b
            }
            return null
        }
    }
}
var flt_a = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;eat as;lick as;suck as;suck my;fuk;dong;cunn;penil;suck a;foresk;puto;puta;suck;mierd;bit.ly;ween;wein;wien;peen;turd;wank;crap;ur mom;tu madre;chinga;pu$$;phalus;phallus;verga;culo;kurwa;erect;schlong;ureth;taint;pene".split(";"),
    flt_g = "buttlov buttf smegm therplu eatmy suckm sucka chither chlther ch1ther erioorg eri0org erio0rg eri00rg erloorg erl0org erlo0rg erl00rg erioco ragapw mydik urdik heriobo mistik ki11all agarbots rcomwith brazz iomods cunt suckdik slibot siibot garb0t herioha itherhac sucksdik sukdik deltaloves suksdik hitler assmunch lickmy fuqall fukall tobils yourmom yourmother muslimsare allmuslims jewsare alljews".split(" "),
    flt_w = ["ass", "kkk"];

function gdnm(b) {
    var f = "",
        c = "",
        h = "",
        u = 0,
        q, e = !1,
        w, E;
    for (w = 0; w < b.length; w++) E = b.charCodeAt(w), 32 == E ? e || (e = !0, f += " ") : (e = !1, f += String.fromCharCode(E));
    e = !1;
    for (w = 0; w < b.length; w++)
        if (E = b.charCodeAt(w), (q = 48 <= E && 57 >= E) || 65 <= E && 90 >= E || 97 <= E && 122 >= E)
            if (c += String.fromCharCode(E), h += String.fromCharCode(E), e = !1, q) {
                if (u++, 7 <= u) return !1
            } else u = 0;
    else e || (e = !0, h += " ");
    b = f.toLowerCase();
    for (w = flt_a.length - 1; 0 <= w; w--)
        if (0 <= b.indexOf(flt_a[w])) return !1;
    c = c.toLowerCase();
    for (w = flt_g.length - 1; 0 <= w; w--)
        if (0 <= c.indexOf(flt_g[w])) return !1;
    h = h.toLowerCase().split(" ");
    for (w = h.length - 1; 0 <= w; w--)
        for (c = flt_w.length - 1; 0 <= c; c--)
            if (h[w] == flt_w[c]) return !1;
    return !0
}
var bpx1, bpy1, bpx2, bpy2, fpx1, fpy1, fpx2, fpy2, apx1, apy1, apx2, apy2, sgsc = .9,
    gsc = sgsc,
    nsep = 4.5,
    tasty = 0,
    shifty = !1,
    rr, gg, bb, render_mode = 2;
is_mobile && (render_mode = 1);
var wumsts = !1,
    rank = 0,
    best_rank = 999999999,
    snake_count = 0,
    biggest_snake_count = 0,
    cm1, snakes = [],
    foods = [],
    foods_c = 0,
    preys = [],
    points_dp = newDeadpool(),
    os = {},
    lsang = 0,
    want_e = !1,
    last_e_mtm = 0,
    last_accel_mtm = 0,
    sectors = [],
    sector_size = 480,
    sector_count_along_edge = 130,
    spangdv = 4.8,
    nsp1 = 4.25,
    nsp2 = .5,
    nsp3 = 12,
    mamu = .033,
    mamu2 = .028,
    cst = .43,
    lfas = [],
    lfc = 128;
for (i = 0; i < lfc; i++) j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1))), lfas.push(j);
var rfas = [],
    rfc = 43;
for (i = 0; i < rfc; i++) j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1))), rfas.push(j);
for (var fao = {}, fc = 3; 100 >= fc; fc++) {
    var fas = [];
    for (i = 0; i < fc; i++) j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1))), fas.push(j);
    fao["a" + fc] = fas
}
var hfc = 92,
    hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++) j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1))), hfas[i] = j;
var afas = [],
    afc = 26;
for (i = 0; i < afc; i++) j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1))), afas.push(j);
var nlc = 48,
    vfas = [],
    vfc = 62,
    fvpos = 0,
    fvtg = 0,
    ovxx, ovyy, fvxs = [],
    fvys = [];
for (i = 0; i < vfc; i++) j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1))), j += .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j), vfas.push(j), fvxs.push(0), fvys.push(0);

function pwr(b) {
    for (var f = new Float32Array(125), c = 0; 125 > c; c++) f[c] = Math.pow(b, c);
    return f
}

function pca(b) {
    for (var f = new Float32Array(125), c = 0; 125 > c; c++) f[c] = 1 - Math.pow(1 - b, c);
    return f
}
var p1a = pca(.1),
    p35a = pca(.35),
    pwr4 = pwr(.4),
    pwr35 = pwr(.35),
    pwr93 = pwr(.93);

function setMscps(b) {
    if (b != mscps) {
        mscps = b;
        fmlts = [];
        fpsls = [];
        for (b = 0; b <= mscps; b++) b >= mscps ? fmlts.push(fmlts[b - 1]) : fmlts.push(Math.pow(1 - b / mscps, 2.25)), 0 == b ? fpsls.push(0) : fpsls.push(fpsls[b - 1] + 1 / fmlts[b - 1]);
        var f = fmlts[fmlts.length - 1],
            c = fpsls[fpsls.length - 1];
        for (b = 0; 2048 > b; b++) fmlts.push(f), fpsls.push(c)
    }
}

function startShowGame() {
    llgmtm = Date.now();
    login_iv = setInterval(loginFade, 25);
    mc.style.opacity = 0;
    mc.style.display = "inline";
    lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
    loch.style.opacity = 0;
    lb_fr = -1
}

function setSkin(b, f) {
    b.rcv = f;
    b.er = 6;
    b.pr = 3.5;
    b.pma = 2.3;
    b.ec = "#ffffff";
    b.eca = .75;
    b.ppa = 1;
    b.ppc = "#000000";
    b.antenna = !1;
    b.one_eye = !1;
    b.swell = 0;
    if (24 == f) {
        b.antenna = !0;
        b.atba = 0;
        b.atc1 = "#00688c";
        b.atc2 = "#64c8e7";
        b.atwg = !0;
        b.atia = .35;
        b.abrot = !1;
        var c = 8;
        b.atx = new Float32Array(c);
        b.aty = new Float32Array(c);
        b.atvx = new Float32Array(c);
        b.atvy = new Float32Array(c);
        b.atax = new Float32Array(c);
        b.atay = new Float32Array(c);
        for (--c; 0 <= c; c--) b.atx[c] = b.xx, b.aty[c] = b.yy;
        b.bulb = acbulb;
        b.blbx = -10;
        b.blby = -10;
        b.blbw = 20;
        b.blbh =
            20;
        b.bsc = 1;
        b.blba = .75
    } else if (25 == f) {
        b.ec = "#ff5609";
        b.eca = 1;
        b.antenna = !0;
        b.atba = 0;
        b.atc1 = "#000000";
        b.atc2 = "#5630d7";
        b.atia = 1;
        b.abrot = !0;
        c = 9;
        b.atx = new Float32Array(c);
        b.aty = new Float32Array(c);
        b.atvx = new Float32Array(c);
        b.atvy = new Float32Array(c);
        b.atax = new Float32Array(c);
        b.atay = new Float32Array(c);
        for (--c; 0 <= c; c--) b.atx[c] = b.xx, b.aty[c] = b.yy;
        b.bulb = cdbulb;
        b.blbx = -5;
        b.blby = -10;
        b.blbw = 20;
        b.blbh = 20;
        b.bsc = 1.6;
        b.blba = 1
    } else if (27 == f) b.one_eye = !0, b.ebi = jsebi, b.ebiw = 64, b.ebih = 64, b.ebisz = 29, b.epi = jsepi,
        b.epiw = 48, b.epih = 48, b.episz = 14, b.pma = 4, b.swell = .06;
    else if (37 == f) {
        b.eca = 1;
        b.antenna = !0;
        b.atba = 0;
        b.atc1 = "#301400";
        b.atc2 = "#ff6813";
        b.atwg = !0;
        b.atia = .5;
        b.abrot = !0;
        c = 9;
        b.atx = new Float32Array(c);
        b.aty = new Float32Array(c);
        b.atvx = new Float32Array(c);
        b.atvy = new Float32Array(c);
        b.atax = new Float32Array(c);
        b.atay = new Float32Array(c);
        for (--c; 0 <= c; c--) b.atx[c] = b.xx, b.aty[c] = b.yy;
        b.bulb = kwkbulb;
        b.blbx = -39;
        b.blby = -63;
        b.blbw = 172;
        b.blbh = 113;
        b.bsc = .42;
        b.blba = 1
    }
    c = null;
    9 == f ? c = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10,
        10, 10, 10
    ] : 10 == f ? c = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == f ? c = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12] : 12 == f ? c = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == f ? c = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == f ? c = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == f ? c = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == f ? c = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == f ? c = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == f ? c = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == f ? c = [9] : 20 == f ? c = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == f ? c = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18,
        18
    ] : 22 == f ? c = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13] : 23 == f ? c = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7] : 24 == f ? c = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18] : 25 == f ? c = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22] : 26 == f ? c = [24] : 27 == f ? c = [25] : 28 == f ? c = [18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7] : 29 == f ? c = [11, 11, 4, 11, 11, 11, 11, 4, 11, 11] : 30 == f ? c = [10, 10, 19, 20, 10, 10, 20, 19] : 31 == f ? c = [10, 10] : 32 == f ? c = [20, 20] : 33 == f ? c = [12, 11, 11] : 34 == f ? c = [7, 7, 9, 13, 13,
        9, 16, 16, 9, 12, 12, 9, 7, 7, 9, 16, 16, 9
    ] : 35 == f ? c = [7, 7, 9, 9, 6, 6, 9, 9] : 36 == f ? c = [16, 16, 9, 9, 15, 15, 9, 9] : 37 == f ? c = [22] : 38 == f ? c = [18] : 39 == f ? c = [26] : f %= 9;
    c && (f = c[0]);
    b.rbcs = c;
    b.cv = f
}

function newSnake(b, f, c, h, u, q) {
    var e = {};
    e.id = b;
    e.xx = f;
    e.yy = c;
    setSkin(e, h);
    h = e.cv;
    e.fnfr = 0;
    e.na = 1;
    e.chl = 0;
    e.tsp = 0;
    e.sfr = 0;
    e.rr = Math.min(255, rrs[h] + Math.floor(20 * Math.random()));
    e.gg = Math.min(255, ggs[h] + Math.floor(20 * Math.random()));
    e.bb = Math.min(255, bbs[h] + Math.floor(20 * Math.random()));
    b = "00" + Math.min(255, Math.max(0, Math.round(e.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(e.gg))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(e.bb))).toString(16);
    b = b.substr(b.length - 2);
    f = f.substr(f.length -
        2);
    c = c.substr(c.length - 2);
    e.cs = "#" + b + f + c;
    b = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.gg))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.bb))).toString(16);
    b = b.substr(b.length - 2);
    f = f.substr(f.length - 2);
    c = c.substr(c.length - 2);
    e.cs04 = "#" + b + f + c;
    b = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.rr)))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.gg)))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(.5 *
        (255 + e.bb)))).toString(16);
    b = b.substr(b.length - 2);
    f = f.substr(f.length - 2);
    c = c.substr(c.length - 2);
    e.csw = "#" + b + f + c;
    e.sc = 1;
    e.ssp = nsp1 + nsp2 * e.sc;
    e.fsp = e.ssp + .1;
    e.msp = nsp3;
    e.fxs = new Float32Array(rfc);
    e.fys = new Float32Array(rfc);
    e.fchls = new Float32Array(rfc);
    e.fpos = 0;
    e.ftg = 0;
    e.fx = 0;
    e.fy = 0;
    e.fchl = 0;
    e.fas = new Float32Array(afc);
    e.fapos = 0;
    e.fatg = 0;
    e.fa = 0;
    e.ehang = u;
    e.wehang = u;
    e.ehl = 1;
    e.msl = 42;
    e.fam = 0;
    e.ang = u;
    e.eang = u;
    e.wang = u;
    e.rex = 0;
    e.rey = 0;
    e.sp = 2;
    q ? (e.lnp = q[q.length - 1], e.pts = q, e.sct = q.length, q[0].dying && e.sct--) :
        (e.pts = [], e.sct = 0);
    e.flpos = 0;
    e.fls = new Float32Array(lfc);
    e.fl = 0;
    e.fltg = 0;
    e.tl = e.sct + e.fam;
    e.cfl = e.tl;
    e.scang = 1;
    e.dead_amt = 0;
    e.alive_amt = 0;
    snakes.splice(0, 0, e);
    return os["s" + e.id] = e
}

function snl(b) {
    var f = b.tl;
    b.tl = b.sct + b.fam;
    for (var f = b.tl - f, c = b.flpos, h = 0; h < lfc; h++) b.fls[c] -= f * lfas[h], c++, c >= lfc && (c = 0);
    b.fl = b.fls[b.flpos];
    b.fltg = lfc;
    b == snake && (wumsts = !0)
}

function newFood(b, f, c, h, u, q) {
    var e = {};
    e.id = b;
    e.xx = f;
    e.yy = c;
    e.rx = f;
    e.ry = c;
    e.rsp = u ? 2 : 1;
    e.cv = q;
    e.rad = 1E-5;
    e.sz = h;
    e.lrrad = e.rad;
    b = per_color_imgs[e.cv];
    e.cv2 = Math.floor(b.ic * gsc * e.sz / 16.5);
    0 > e.cv2 && (e.cv2 = 0);
    e.cv2 >= b.ic && (e.cv2 = b.ic - 1);
    testing && (window.biggestcv2 || (window.biggestcv2 = e.cv2), e.cv2 > window.biggestcv2 && (window.biggestcv2 = e.cv2, console.log("biggest cv2 seen: " + e.cv2 + " out of " + (b.ic - 1) + " (fo.sz = " + e.sz + " which means its server-side rad is " + 5 * e.sz + ")")));
    e.fi = b.imgs[e.cv2];
    e.fw = b.fws[e.cv2];
    e.fh = b.fhs[e.cv2];
    e.fw2 = b.fw2s[e.cv2];
    e.fh2 = b.fh2s[e.cv2];
    e.ofi = b.oimgs[e.cv2];
    e.ofw = b.ofws[e.cv2];
    e.ofh = b.ofhs[e.cv2];
    e.ofw2 = b.ofw2s[e.cv2];
    e.ofh2 = b.ofh2s[e.cv2];
    e.gcv = Math.floor(b.ic * gsc * (.25 + .75 * e.sz / 16.5));
    0 > e.gcv && (e.gcv = 0);
    e.gcv >= b.ic && (e.gcv = b.ic - 1);
    e.gfi = b.gimgs[e.gcv];
    e.gfw = b.gfws[e.gcv];
    e.gfh = b.gfhs[e.gcv];
    e.gfw2 = b.gfw2s[e.gcv];
    e.gfh2 = b.gfh2s[e.gcv];
    e.g2cv = Math.floor(b.ic * gsc * 2 * (.25 + .75 * e.sz / 16.5));
    0 > e.g2cv && (e.g2cv = 0);
    e.g2cv >= b.ic && (e.g2cv = b.ic - 1);
    e.g2fi = b.gimgs[e.g2cv];
    e.g2fw = b.gfws[e.g2cv];
    e.g2fh = b.gfhs[e.g2cv];
    e.g2fw2 = b.gfw2s[e.g2cv];
    e.g2fh2 = b.gfh2s[e.g2cv];
    e.fr = 0;
    e.gfr = 64 * Math.random();
    e.gr = .65 + .1 * e.sz;
    e.wsp = .0225 * (2 * Math.random() - 1);
    e.eaten_fr = 0;
    return foods[foods_c++] = e
}

function newPrey(b, f, c, h, u, q, e, w, E) {
    var y = {};
    y.id = b;
    y.xx = f;
    y.yy = c;
    y.rad = 1E-5;
    y.sz = h;
    y.cv = u;
    y.dir = q;
    y.wang = e;
    y.ang = w;
    y.sp = E;
    y.fr = 0;
    y.gfr = 64 * Math.random();
    y.gr = .5 + .15 * Math.random() + .1 * y.sz;
    y.rr = Math.min(255, rrs[u]);
    y.gg = Math.min(255, ggs[u]);
    y.bb = Math.min(255, bbs[u]);
    b = "00" + Math.min(255, Math.max(0, Math.round(y.rr))).toString(16);
    f = "00" + Math.min(255, Math.max(0, Math.round(y.gg))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(y.bb))).toString(16);
    b = b.substr(b.length - 2);
    f = f.substr(f.length - 2);
    c =
        c.substr(c.length - 2);
    y.cs = "#" + b + f + c;
    y.cv2 = Math.floor(per_color_imgs[y.cv].pr_imgs.length * gsc * y.sz / 9);
    0 > y.cv2 && (y.cv2 = 0);
    y.cv2 >= per_color_imgs[y.cv].pr_imgs.length && (y.cv2 = per_color_imgs[y.cv].pr_imgs.length - 1);
    y.fi = per_color_imgs[y.cv].pr_imgs[y.cv2];
    y.fw = per_color_imgs[y.cv].pr_fws[y.cv2];
    y.fh = per_color_imgs[y.cv].pr_fhs[y.cv2];
    y.fw2 = per_color_imgs[y.cv].pr_fw2s[y.cv2];
    y.fh2 = per_color_imgs[y.cv].pr_fh2s[y.cv2];
    y.gcv = per_color_imgs[y.cv].gimgs.length - 1;
    y.gfi = per_color_imgs[y.cv].gimgs[y.gcv];
    y.gfw =
        per_color_imgs[y.cv].gfws[y.gcv];
    y.gfh = per_color_imgs[y.cv].gfhs[y.gcv];
    y.gfw2 = per_color_imgs[y.cv].gfw2s[y.gcv];
    y.gfh2 = per_color_imgs[y.cv].gfh2s[y.gcv];
    y.fxs = new Float32Array(rfc);
    y.fys = new Float32Array(rfc);
    y.fpos = 0;
    y.ftg = 0;
    y.fx = 0;
    y.fy = 0;
    y.eaten = !1;
    y.eaten_fr = 0;
    preys.push(y);
    return y
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52,
    komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) {
    var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
        v = 4 >= v ? 1 - v / 4 : 0,
        v = .8 * v;
    imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
    imgd[p + 3] = Math.floor(255 * v);
    xx++;
    xx >= sz && (xx = 0, yy++)
}
ctx.putImageData(map, 0, 0);
var sz = 62,
    ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15, v *= .1, 0 > v && (v = -v), 1 < v && (v = 1), v = 1 - v, v *= .25, imgd[p] = imgd[p + 1] = imgd[p + 2] = 0, imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
ctx.putImageData(map, 0, 0);
var sz = 64,
    jsebi = document.createElement("canvas");
jsebi.width = jsebi.height = sz;
ctx = jsebi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2), v = 1.06 * v - .06, 0 > v ? v = 0 : (v = Math.pow(v, .35), v *= 1.35), v += .25 * (1 - v), imgd[p] = Math.max(0, Math.min(255, Math.round(72 * v))), imgd[p + 1] = Math.max(0, Math.min(255, Math.round(255 * v))), imgd[p + 2] = Math.max(0, Math.min(255, Math.round(116 * v))), xx++, xx >= sz && (xx = 0, yy++), v = sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)), imgd[p + 3] = 3 >= v ? Math.max(0, Math.min(255, Math.round(v / 3 * 255))) : 255;
ctx.putImageData(map, 0, 0);
var sz = 48,
    jsepi = document.createElement("canvas");
jsepi.width = jsepi.height = sz;
ctx = jsepi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2), v = .5 < v ? 0 : 1 - Math.pow(v / .5, 1), v *= .8, 0 == v ? (imgd[p] = 0, imgd[p + 1] = 0, imgd[p + 2] = 0) : (imgd[p] = Math.max(0, Math.min(255, Math.round(28 + 59 * v))), imgd[p + 1] = Math.max(0, Math.min(255, Math.round(83 + 85 * v))), imgd[p + 2] = Math.max(0, Math.min(255, Math.round(128 + 110 * v)))), xx++, xx >= sz && (xx = 0, yy++);
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var kwkbulb = document.createElement("canvas");
kwkbulb.width = 172;
kwkbulb.height = 113;
var kwki = document.createElement("img");
kwki.onload = function() {
    var b = document.createElement("canvas");
    b.width = 172;
    b.height = 113;
    var f = b.getContext("2d");
    f.drawImage(kwki, 21, 21);
    f = kwkbulb.getContext("2d");
    f.shadowColor = "#000000";
    f.shadowBlur = 20;
    f.drawImage(b, 0, 0)
};
kwki.src = "/s/kwk6.png";
var colc;
testing && (colc = document.createElement("canvas"), colc.width = 256, colc.height = 66, colc.style.position = "fixed", colc.style.left = "0px", colc.style.top = "200px", colc.style.zIndex = 2147483647, document.body.appendChild(colc));
var pbx = new Float32Array(32767),
    pby = new Float32Array(32767),
    pba = new Float32Array(32767),
    pbu = new Uint8Array(32767),
    per_color_imgs = [],
    rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 78, 255, 101, 128, 60, 96],
    ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 35, 86, 200, 132, 192, 255],
    bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 192, 9, 232, 144, 72, 64],
    max_skin_cv = 38;
for (i = 0; i < rrs.length; i++) {
    o = {
        imgs: [],
        fws: [],
        fhs: [],
        fw2s: [],
        fh2s: [],
        gimgs: [],
        gfws: [],
        gfhs: [],
        gfw2s: [],
        gfh2s: [],
        oimgs: [],
        ofws: [],
        ofhs: [],
        ofw2s: [],
        ofh2s: []
    };
    var rs = "00" + rrs[i].toString(16),
        gs = "00" + ggs[i].toString(16),
        bs = "00" + bbs[i].toString(16),
        rs = rs.substr(rs.length - 2),
        gs = gs.substr(gs.length - 2),
        bs = bs.substr(bs.length - 2);
    o.cs = "#" + rs + gs + bs;
    var sz = 62,
        kfmc = document.createElement("canvas");
    kfmc.width = kfmc.height = sz;
    ctx = kfmc.getContext("2d");
    map = ctx.getImageData(0, 0, sz, sz);
    imgd = map.data;
    l = imgd.length;
    for (p =
        yy = xx = 0; p < l; p += 4) v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16), v = 15 >= v ? 1 - v / 15 : 0, imgd[p] = rrs[i], imgd[p + 1] = ggs[i], imgd[p + 2] = bbs[i], imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
    ctx.putImageData(map, 0, 0);
    o.kfmc = kfmc;
    var ksz = 48,
        ksz2 = ksz / 2,
        kmc = document.createElement("canvas");
    kmc.width = kmc.height = ksz;
    ctx = kmc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
    ctx.fill();
    map = ctx.getImageData(0, 0, ksz, ksz);
    imgd = map.data;
    l = imgd.length;
    yy = xx = 0;
    var kmcs = [];
    for (j =
        0; 7 > j; j++) {
        for (p = xx = yy = 0; p < l; p += 4) {
            var v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
                v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34)),
                v = v + .375 * (v2 - v);
            rr = rrs[i];
            gg = ggs[i];
            bb = bbs[i];
            24 == i ? (v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(1 * (yy - ksz2), 2)) / ksz2, v2 = Math.pow(1.05 * v2, 4), 1 < v2 && (v2 = 1), rr += (306 - rr) * v2, gg += (192 * 1.2 - gg) * v2, bb += (76.8 - bb) * v2, v *= 1.22 - .44 * j / 6) : 26 == i ? (v2 = Math.abs(Math.sin(5 * Math.PI * Math.max(0, Math.min(1, yy / ksz)))), v2 = Math.pow(v2, .85),
                v2 = 1 - v2, rr += (82 - rr) * v2, gg += (202 - gg) * v2, bb += (96 - bb) * v2) : v *= 1.22 - .44 * j / 6;
            imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
            imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
            imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
            xx++;
            xx >= ksz && (xx = 0, yy++)
        }
        ctx.putImageData(map, 0, 0);
        var kmc2 = document.createElement("canvas");
        kmc2.width = kmc2.height = ksz;
        var ctx2 = kmc2.getContext("2d");
        ctx2.drawImage(kmc, 0, 0);
        if (10 == i)
            for (k = -1; 1 >= k; k++) {
                var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13,
                    ty = ksz2 + ksz2 / 16 * Math.sin(2 *
                        Math.PI * k / 8) * 13;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 24, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1, ctx2.lineTo(xx, yy);
                ctx2.fill()
            } else if (19 == i)
                for (k = -2; 2 >= k; k++) {
                    tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                    ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                    ctx2.save();
                    ctx2.globalAlpha = .7;
                    ctx2.fillStyle = "#FFFFFF";
                    ctx2.beginPath();
                    for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55, ctx2.lineTo(xx, yy);
                    ctx2.fill();
                    ctx2.restore()
                } else if (20 == i)
                    for (k = -1.5; 1.5 >= k; k++) {
                        tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                        ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                        ctx2.save();
                        ctx2.globalAlpha = .7;
                        ctx2.fillStyle = "#FFFFFF";
                        ctx2.beginPath();
                        for (m = 0; 5 >= m; m++) xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8, ctx2.lineTo(xx, yy);
                        ctx2.fill();
                        ctx2.restore()
                    }
                kmcs.push(kmc2)
    }
    o.kmcs = kmcs;
    per_color_imgs.push(o);
    for (j = 2.8; 18.8 >= j; j += 1) {
        var cc = document.createElement("canvas"),
            sz = Math.ceil(2.5 * j + 28);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        ctx.fillStyle = o.cs;
        ctx.arc(sz /
            2, sz / 2, .65 * j, 0, pi2);
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = "#" + rs + gs + bs;
        ctx.globalAlpha = .8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fill();
        o.imgs.push(cc);
        o.fws.push(sz);
        o.fhs.push(sz);
        o.fw2s.push(sz / 2);
        o.fh2s.push(sz / 2);
        sz = Math.ceil(8 * j + 6);
        cc = document.createElement("canvas");
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] +
            ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        o.gimgs.push(cc);
        o.gfws.push(sz);
        o.gfhs.push(sz);
        o.gfw2s.push(sz / 2);
        o.gfh2s.push(sz / 2);
        cc = document.createElement("canvas");
        sz = Math.ceil(1.3 * j + 6);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        var eam = .2,
            g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
        g.addColorStop(1, "rgba(" +
            Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.globalAlpha = 1;
        ctx.stroke();
        o.oimgs.push(cc);
        o.ofws.push(sz);
        o.ofhs.push(sz);
        o.ofw2s.push(sz / 2);
        o.ofh2s.push(sz / 2)
    }
    o.ic = o.imgs.length;
    o.pr_imgs = [];
    o.pr_fws = [];
    o.pr_fhs = [];
    o.pr_fw2s = [];
    o.pr_fh2s = [];
    for (j = 3; 24 >= j; j += 1) cc = document.createElement("canvas"), sz = Math.ceil(2 * j + 38), cc.width = cc.height = sz, ctx =
        cc.getContext("2d"), ctx.fillStyle = o.cs, ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2), ctx.shadowBlur = 22, ctx.shadowOffsetY = 0, ctx.shadowColor = "#" + rs + gs + bs, ctx.fill(), ctx.fill(), o.pr_imgs.push(cc), o.pr_fws.push(sz), o.pr_fhs.push(sz), o.pr_fw2s.push(sz / 2), o.pr_fh2s.push(sz / 2)
}
if (testing)
    for (ctx = colc.getContext("2d"), ctx.fillStyle = "#000000", ctx.fillRect(0, 0, colc.width, colc.height), ctx.fillStyle = "#FFFFFF", ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif", ctx.textBaseline = "top", ctx.textAlign = "center", i = yy = xx = 0; i < rrs.length; i++) {
        var pci = per_color_imgs[i],
            kmc = pci.kmcs[0];
        ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
        ntx = o.xx + o.fx;
        nty = o.yy + o.fy;
        ntx = mww2 + (ntx - view_xx) * gsc;
        nty = mhh2 + (nty - view_yy) * gsc;
        ctx.fillText("" + i, xx + 8, yy + 16);
        xx += 16;
        xx > colc.width - 16 && (xx =
            0, yy += 28)
    }
var view_xx = 0,
    view_yy = 0,
    view_ang = 0,
    view_dist = 0,
    fvx = 0,
    fvy = 0,
    xm = 0,
    ym = 0,
    lsxm = 0,
    lsym = 0,
    snake = null,
    my_nick = "",
    dhx, dhy, hsz, fr = 0,
    lfr = 0,
    ltm = Date.now(),
    vfr = 0,
    vfrb = 0,
    avfr = 0,
    fr2 = 0,
    lfr2 = 0,
    vfrb2 = 0,
    cptm = 0,
    lptm = 0,
    lpstm = 0,
    last_ping_mtm = 0,
    lagging = !1,
    lag_mult = 1,
    wfpr = !1,
    high_quality = !0,
    gla = 1,
    wdfg = 0,
    qsm = 1,
    mqsm = 1.7,
    playing = !1,
    connected = !1,
    want_close_socket = !1,
    want_victory_message = !1,
    want_victory_focus = !1,
    want_hide_victory = 0,
    hvfr = 0,
    dead_mtm = -1,
    at2lt = new Float32Array(65536);
for (yy = 0; 256 > yy; yy++)
    for (xx = 0; 256 > xx; xx++) at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0,
    kd_r_frb = 0,
    kd_l = !1,
    kd_r = !1,
    kd_u = !1,
    lkstm = 0,
    social = document.createElement("iframe");
try {
    social.frameBorder = 0
} catch (b) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.style.overflow = "hidden";
social.width = 251;
social.height = 150;
social.src = "/social-box/";
document.body.appendChild(social);
var oef = function() {
        var b = Date.now();
        vfr = (b - ltm) / 8;
        5 < vfr && (vfr = 5);
        1.56 > vfr && (vfr = 1.56);
        avfr = vfr;
        ltm = b;
        choosing_skin || (lagging || wfpr && 420 < b - last_ping_mtm && (want_play || (lagging = !0)), lagging ? (lag_mult *= .85, .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05, 1 <= lag_mult && (lag_mult = 1)));
        120 < vfr && (vfr = 120);
        vfr *= lag_mult;
        etm *= lag_mult;
        lfr = fr;
        fr += vfr;
        vfrb = Math.floor(fr) - Math.floor(lfr);
        lfr2 = fr2;
        fr2 += 2 * vfr;
        vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
        kd_l && (kd_l_frb += vfrb);
        kd_r && (kd_r_frb += vfrb);
        want_play &&
            !shoa && -1 == dead_mtm && (want_play = !1, connect());
        if (spinner_shown) {
            lsfr += avfr;
            var f = ldmc.getContext("2d");
            f.clearRect(0, 0, 512, 128);
            for (var c, h, u = 1; 2 >= u; u++) {
                f.beginPath();
                1 == u ? (f.fillStyle = "#60FF70", h = 0) : (f.fillStyle = "#9850FF", h = Math.PI);
                for (var q = 0; 256 >= q; q++) c = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * q / 256) + 8 * q / 256, 256 == q && (c += 10), xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * q / 256) * c * 1.25, yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * q / 256) * c, 0 == q ? f.moveTo(xx, yy) : f.lineTo(xx, yy);
                c = 32;
                xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (q + 47) / 256) *
                    c * 1.25;
                yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (q + 47) / 256) * c;
                f.lineTo(xx, yy);
                for (q = 256; 0 <= q; q--) c = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * q / 256) - 8 * q / 256, 256 == q && (c -= 10), xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * q / 256) * c * 1.25, yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * q / 256) * c, f.lineTo(xx, yy);
                f.fill()
            }
            connecting || want_play ? (ss_a += avfr / 86, 1 <= ss_a && (ss_a = 1), ss_sh += avfr / 93, 1 <= ss_sh && (ss_sh = 1)) : (ss_a -= avfr / 86, 0 >= ss_a && (ss_sh = ss_a = 0, ldmc.style.display = "none", trf(ldmc, "")));
            ldmc.style.opacity = ss_a;
            q = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 -
                ss_a, 2)) * 1E5) / 1E5;
            trf(ldmc, "scale(" + q + "," + q + ")")
        }
        if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
            q = document.createElement("img");
            h = [];
            h.push("bso=" + encodeURIComponent(bso));
            if (bso)
                for (var e in bso) h.push(e + "=" + encodeURIComponent(bso[e]));
            h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
            h.push("soslen=" + sos.length);
            q.src = "http://slither.io/cnc.jpg?" + h.join("&");
            play_btn_click_mtm = -1
        }
        waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
        connecting && 3E3 < b - start_connect_mtm &&
            (bso && (bso.tainted = !0), connect());
        if (choosing_skin) {
            for (q = snakes.length - 1; 0 <= q; q--)
                for (e = snakes[q], u = e.pts.length - 1; 0 <= u; u--) e.pts[u].yy = grd / 2 + 15 * Math.cos(u / 4 + fr / 19) * (1 - u / e.pts.length);
            view_xx -= vfr
        }
        playing && (high_quality ? (1 > gla && (gla += .0075 * vfr, 1 < gla && (gla = 1)), 1 < qsm && (qsm -= 4E-5 * vfr, 1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr, 0 > gla && (gla = 0)), qsm < mqsm && (qsm += 4E-5 * vfr, qsm > mqsm && (qsm = mqsm))));
        0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr, 1 <= hvfr ? (hvfr = 0, want_hide_victory = 2, victory_holder.style.opacity =
            1, saveh.style.opacity = 1, victory_holder.style.display = "none", saveh.style.display = "none", nick_holder.style.opacity = 0, playh.style.opacity = 0, smh.style.opacity = 0, nick_holder.style.display = "inline-block", playh.style.display = "block", smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr, saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr, 1 <= hvfr && (hvfr = 1, want_hide_victory = 0), nick_holder.style.opacity = hvfr, playh.style.opacity = hvfr, smh.style.opacity = hvfr));
        1 != login_fr && -1 != tip_fr && (tip_fr +=
            .017 * vfr, tip_fr >= pi2 && (tip_fr -= pi2, tip_pos++, tip_pos >= tipss.length && (tip_pos = 0), tips.textContent = tipss[tip_pos]), u = .5 - .5 * Math.cos(tip_fr), tips.style.opacity = Math.round(1E5 * Math.pow(u, .5)) / 1E5);
        if (-1 == dead_mtm) - 1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr, 1 <= lb_fr && (lb_fr = 1), lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
        else if (1600 < b - dead_mtm) {
            if (-1 == login_iv) {
                login_iv = -2;
                login.style.display = "inline";
                try {
                    "1" != localStorage.edttsg ?
                        cstx.style.display = "inline" : cskh.style.display = "inline"
                } catch (w) {}
                fbh.style.display = "inline";
                twth.style.display = "inline";
                plq.style.display = "inline";
                clq.style.display = "inline";
                grqh.style.display = "inline";
                social.style.display = "inline";
                want_victory_focus && (want_victory_focus = !1, victory.focus())
            } - 2 == login_iv && (login_fr -= .004 * vfr, choosing_skin && (login_fr -= .007 * vfr), lb_fr = login_fr, 0 >= login_fr && (login_fr = 0, dead_mtm = -1, nick.disabled = !1, nick.focus(), lb_fr = -1, playing = !1, choosing_skin && (choosing_skin = !1, resetGame(),
                    pskh.style.display = "none", nskh.style.display = "none", skodiv.style.display = "none")), pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 * login_fr)), lgcsc = 1 + .1 * Math.pow(login_fr, 2), q = Math.round(lgbsc * lgcsc * 1E5) / 1E5, 1 == q ? trf(login, "") : trf(login, "scale(" + q + "," + q + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity = 1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, grqh.style.opacity = 1 - login_fr, plq.style.opacity = 1 - login_fr, clq.style.opacity = 1 - login_fr, social.style.opacity =
                1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity = login_fr, loch.style.opacity = login_fr, lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
        }
        want_close_socket && -1 == dead_mtm && (want_close_socket = !1, ws && (ws.close(), ws = null, playing = connected = !1), resetGame());
        want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
        connected && ((0 < kd_l_frb || 0 < kd_r_frb) &&
            150 < b - lkstm && (lkstm = b, 0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb, kd_r_frb = 0), 0 < kd_l_frb && kd_r_frb > kd_l_frb && (kd_r_frb -= kd_l_frb, kd_l_frb = 0), 0 < kd_l_frb ? (v = kd_l_frb, 127 < v && (v = 127), kd_l_frb -= v, 5 <= protocol_version ? (q = new Uint8Array(2), q[0] = 252) : (q = new Uint8Array(2), q[0] = 108), q[1] = v, ws.send(q), snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb, 127 < v && (v = 127), kd_r_frb -= v, 5 <= protocol_version ? (v += 128, q = new Uint8Array(2), q[0] = 252) : (q = new Uint8Array(2), q[0] = 114), q[1] = v, snake.eang +=
                mamu * v * snake.scang * snake.spang, ws.send(q))), !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = b, wfpr = !0, q = new Uint8Array(1), q[0] = 5 <= protocol_version ? 251 : 112, ws.send(q), lpstm = b));
        null != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(), myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px", myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
        if (1E3 < b - lrd_mtm) {
            if (testing && console && console.log) {
                console.log("FPS: " + fps);
                h = [];
                trdps += rdps;
                playing && tcsecs++;
                h.push("FPS: " + fps);
                h.push("sectors: " +
                    sectors.length);
                h.push("foods: " + foods_c);
                h.push("bytes/sec: " + rdps);
                h.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
                h.push("");
                for (q = e = 0; q < rdpspc.length; q++) 0 <= rdpspc[q] && (e += rdpspc[q]);
                for (q = 0; q < rdpspc.length; q++) 0 <= rdpspc[q] && h.push(String.fromCharCode(q) + ": " + rdpspc[q] + " (" + Math.round(rdpspc[q] / e * 1E3) / 10 + "%)");
                h.push("total: " + e);
                maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
                h.push("");
                for (q = 1; q < pfs.length; q++) 0 != pfs[q] && (h.push(q + ": " + Math.round(1E3 * pfs[q]) / 1E3), pfs[q] = 0);
                pft = 0;
                pfd.innerHTML =
                    h.join("<br>")
            }
            if (!dfx) window[dfe](dfs);
            if (0 < dfa.length) {
                for (q = dfa.length - 1; 0 <= q; q--) try {
                    dfa[q]["ono" + dfq]()
                } catch (w) {}
                dfa = []
            }
            playing && 1 == want_quality && (32 >= fps ? high_quality && (wdfg++, 1 <= wdfg && (high_quality = !1)) : (high_quality || 48 <= fps) && 0 < wdfg && (wdfg--, 0 >= wdfg && (high_quality = !0)));
            wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
            lrd_mtm = Date.now()
        }
        etm *= Math.pow(.993, vfrb);
        if (null != snake) {
            snake.md != snake.wmd && 150 < b - last_accel_mtm && (snake.md = snake.wmd, last_accel_mtm = b, 5 <= protocol_version ? (q = new Uint8Array(1),
                q[0] = snake.md ? 253 : 254) : (q = new Uint8Array(2), q[0] = 109, q[1] = snake.md ? 1 : 0), ws.send(q));
            if (xm != lsxm || ym != lsym) want_e = !0;
            want_e && 100 < b - last_e_mtm && (want_e = !1, last_e_mtm = b, lsxm = xm, lsym = ym, d2 = xm * xm + ym * ym, 256 < d2 ? (ang = Math.atan2(ym, xm), snake.eang = ang) : ang = snake.wang, ang %= pi2, 0 > ang && (ang += pi2), 5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2), sang != lsang && (lsang = sang, q = new Uint8Array(1), q[0] = sang & 255, lpstm = b, ws.send(q.buffer))) : (sang = Math.floor(16777215 * ang / pi2), sang != lsang && (lsang = sang, q = new Uint8Array(4),
                q[0] = 101, q[1] = sang >> 16 & 255, q[2] = sang >> 8 & 255, q[3] = sang & 255, lpstm = b, ws.send(q.buffer))))
        }
        if (!choosing_skin)
            for (q = snakes.length - 1; 0 <= q; q--) {
                e = snakes[q];
                f = mamu * vfr * e.scang * e.spang;
                b = e.sp * vfr / 4;
                b > e.msl && (b = e.msl);
                if (!e.dead) {
                    e.tsp != e.sp && (e.tsp < e.sp ? (e.tsp += .3 * vfr, e.tsp > e.sp && (e.tsp = e.sp)) : (e.tsp -= .3 * vfr, e.tsp < e.sp && (e.tsp = e.sp)));
                    e.tsp > e.fsp && (e.sfr += (e.tsp - e.fsp) * vfr * .021);
                    if (0 < e.fltg)
                        for (h = vfrb, h > e.fltg && (h = e.fltg), e.fltg -= h, qq = 0; qq < h; qq++) e.fl = e.fls[e.flpos], e.fls[e.flpos] = 0, e.flpos++, e.flpos >= lfc &&
                            (e.flpos = 0);
                    else 0 == e.fltg && (e.fltg = -1, e.fl = 0);
                    e.cfl = e.tl + e.fl
                }
                if (1 == e.dir) {
                    e.ang -= f;
                    if (0 > e.ang || e.ang >= pi2) e.ang %= pi2;
                    0 > e.ang && (e.ang += pi2);
                    h = (e.wang - e.ang) % pi2;
                    0 > h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 < h && (e.ang = e.wang, e.dir = 0)
                } else if (2 == e.dir) {
                    e.ang += f;
                    if (0 > e.ang || e.ang >= pi2) e.ang %= pi2;
                    0 > e.ang && (e.ang += pi2);
                    h = (e.wang - e.ang) % pi2;
                    0 > h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 > h && (e.ang = e.wang, e.dir = 0)
                } else e.ang = e.wang;
                1 != e.ehl && (e.ehl += .03 * vfr, 1 <= e.ehl && (e.ehl = 1));
                f = e.pts[e.pts.length - 1];
                e.wehang = Math.atan2(e.yy +
                    e.fy - f.yy - f.fy + f.eby * (1 - e.ehl), e.xx + e.fx - f.xx - f.fx + f.ebx * (1 - e.ehl));
                e.dead || e.ehang == e.wehang || (h = (e.wehang - e.ehang) % pi2, 0 > h && (h += pi2), h > Math.PI && (h -= pi2), 0 > h ? e.edir = 1 : 0 < h && (e.edir = 2));
                if (1 == e.edir) {
                    e.ehang -= .1 * vfr;
                    if (0 > e.ehang || e.ehang >= pi2) e.ehang %= pi2;
                    0 > e.ehang && (e.ehang += pi2);
                    h = (e.wehang - e.ehang) % pi2;
                    0 > h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 < h && (e.ehang = e.wehang, e.edir = 0)
                } else if (2 == e.edir) {
                    e.ehang += .1 * vfr;
                    if (0 > e.ehang || e.ehang >= pi2) e.ehang %= pi2;
                    0 > e.ehang && (e.ehang += pi2);
                    h = (e.wehang - e.ehang) % pi2;
                    0 >
                        h && (h += pi2);
                    h > Math.PI && (h -= pi2);
                    0 > h && (e.ehang = e.wehang, e.edir = 0)
                }
                e.dead || (e.xx += Math.cos(e.ang) * b, e.yy += Math.sin(e.ang) * b, e.chl += b / e.msl);
                if (0 < vfrb) {
                    for (u = e.pts.length - 1; 0 <= u; u--) f = e.pts[u], f.dying && (f.da += .0015 * vfrb, 1 < f.da && (e.pts.splice(u, 1), f.dying = !1, points_dp.add(f)));
                    for (u = e.pts.length - 1; 0 <= u; u--)
                        if (f = e.pts[u], 0 < f.eiu) {
                            fy = fx = 0;
                            for (qq = cm1 = f.eiu - 1; 0 <= qq; qq--) f.efs[qq] = 2 == f.ems[qq] ? f.efs[qq] + vfrb2 : f.efs[qq] + vfrb, h = f.efs[qq], h >= hfc ? (qq != cm1 && (f.exs[qq] = f.exs[cm1], f.eys[qq] = f.eys[cm1], f.efs[qq] =
                                f.efs[cm1], f.ems[qq] = f.ems[cm1]), f.eiu--, cm1--) : (fx += f.exs[qq] * hfas[h], fy += f.eys[qq] * hfas[h]);
                            f.fx = fx;
                            f.fy = fy
                        }
                }
                b = Math.cos(e.eang) * e.pma;
                h = Math.sin(e.eang) * e.pma;
                e.rex < b && (e.rex += vfr / 6, e.rex >= b && (e.rex = b));
                e.rey < h && (e.rey += vfr / 6, e.rey >= h && (e.rey = h));
                e.rex > b && (e.rex -= vfr / 6, e.rex <= b && (e.rex = b));
                e.rey > h && (e.rey -= vfr / 6, e.rey <= h && (e.rey = h));
                if (0 < vfrb) {
                    if (0 < e.ftg)
                        for (h = vfrb, h > e.ftg && (h = e.ftg), e.ftg -= h, qq = 0; qq < h; qq++) e.fx = e.fxs[e.fpos], e.fy = e.fys[e.fpos], e.fchl = e.fchls[e.fpos], e.fxs[e.fpos] = 0, e.fys[e.fpos] =
                            0, e.fchls[e.fpos] = 0, e.fpos++, e.fpos >= rfc && (e.fpos = 0);
                    else 0 == e.ftg && (e.ftg = -1, e.fx = 0, e.fy = 0, e.fchl = 0);
                    if (0 < e.fatg)
                        for (h = vfrb, h > e.fatg && (h = e.fatg), e.fatg -= h, qq = 0; qq < h; qq++) e.fa = e.fas[e.fapos], e.fas[e.fapos] = 0, e.fapos++, e.fapos >= afc && (e.fapos = 0);
                    else 0 == e.fatg && (e.fatg = -1, e.fa = 0)
                }
                e.dead ? (e.dead_amt += .02 * vfr, 1 <= e.dead_amt && snakes.splice(q, 1)) : 1 != e.alive_amt && (e.alive_amt += .015 * vfr, 1 <= e.alive_amt && (e.alive_amt = 1))
            }
        for (q = preys.length - 1; 0 <= q; q--) {
            u = preys[q];
            f = mamu2 * vfr;
            b = u.sp * vfr / 4;
            if (0 < vfrb)
                if (0 < u.ftg)
                    for (h =
                        vfrb, h > u.ftg && (h = u.ftg), u.ftg -= h, qq = 1; qq <= h; qq++) qq == h && (u.fx = u.fxs[u.fpos], u.fy = u.fys[u.fpos]), u.fxs[u.fpos] = 0, u.fys[u.fpos] = 0, u.fpos++, u.fpos >= rfc && (u.fpos = 0);
                else 0 == u.ftg && (u.fx = 0, u.fy = 0, u.ftg = -1);
            if (1 == u.dir) {
                u.ang -= f;
                if (0 > u.ang || u.ang >= pi2) u.ang %= pi2;
                0 > u.ang && (u.ang += pi2);
                h = (u.wang - u.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (u.ang = u.wang, u.dir = 0)
            } else if (2 == u.dir) {
                u.ang += f;
                if (0 > u.ang || u.ang >= pi2) u.ang %= pi2;
                0 > u.ang && (u.ang += pi2);
                h = (u.wang - u.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 >
                    h && (u.ang = u.wang, u.dir = 0)
            } else u.ang = u.wang;
            u.xx += Math.cos(u.ang) * b;
            u.yy += Math.sin(u.ang) * b;
            u.gfr += vfr * u.gr;
            u.eaten ? (1.5 != u.fr && (u.fr += vfr / 150, 1.5 <= u.fr && (u.fr = 1.5)), u.eaten_fr += vfr / 47, u.gfr += vfr, e = u.eaten_by, 1 <= u.eaten_fr || !e ? preys.splice(q, 1) : u.rad = 1 - Math.pow(u.eaten_fr, 3)) : 1 != u.fr && (u.fr += vfr / 150, 1 <= u.fr ? (u.fr = 1, u.rad = 1) : (u.rad = .5 * (1 - Math.cos(Math.PI * u.fr)), u.rad += .66 * (.5 * (1 - Math.cos(Math.PI * u.rad)) - u.rad)))
        }
        for (q = cm1 = foods_c - 1; 0 <= q; q--) b = foods[q], b.gfr += vfr * b.gr, b.eaten ? (b.eaten_fr += vfr / 41, e =
            b.eaten_by, 1 <= b.eaten_fr || !e ? (q == cm1 ? foods[q] = null : (foods[q] = foods[cm1], foods[cm1] = null), foods_c--, cm1--) : (e = b.eaten_by, h = b.eaten_fr * b.eaten_fr, b.rad = b.lrrad * (1 - b.eaten_fr * h), b.rx = b.xx + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - b.xx) * h, b.ry = b.yy + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - b.yy) * h, b.rx += 6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr), b.ry += 6 * Math.sin(b.wsp * b.gfr) * (1 - b.eaten_fr))) : (1 != b.fr && (b.fr += b.rsp * vfr / 150, 1 <= b.fr ? (b.fr = 1, b.rad = 1) : (b.rad = .5 * (1 - Math.cos(Math.PI * b.fr)), b.rad += .66 *
            (.5 * (1 - Math.cos(Math.PI * b.rad)) - b.rad)), b.lrrad = b.rad), b.rx = b.xx, b.ry = b.yy, b.rx = b.xx + 6 * Math.cos(b.wsp * b.gfr), b.ry = b.yy + 6 * Math.sin(b.wsp * b.gfr));
        vfrb = vfr = 0;
        redraw();
        no_raf || raf(oef)
    },
    bgx = 0,
    bgy = 0,
    bgx2 = 0,
    bgy2 = 0,
    fgfr = 0,
    px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, dfa = [],
    dfq = "pen",
    dfx = !1,
    dfe = "va",
    dfs = [41, 109, 124, 117, 106, 123, 112, 118, 117, 41, 68, 68, 123, 128, 119, 108, 118, 109, 39, 127, 127, 127, 127, 127, 45, 45, 47, 126, 112, 117, 107, 118, 126, 53, 94, 108, 105, 90, 106, 118, 114, 108, 123, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 105,
        48, 130, 123, 111, 112, 122, 53, 118, 117, 118, 119, 108, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 123, 111, 112, 122, 53, 122, 108, 117, 107, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 107, 109, 104, 53, 119, 124, 122, 111, 47, 123, 111, 112, 122, 48, 132, 51, 108, 125, 104, 115, 47, 127, 127, 127, 127, 127, 53, 123, 118, 90, 123, 121, 112, 117, 110, 47, 48, 53, 122, 119, 115, 112, 123, 47, 41, 94, 108, 105, 90, 118, 106, 114, 108, 123, 41, 48, 53, 113, 118, 112, 117, 47, 41, 94, 108, 105, 90, 106, 118, 114, 108, 123, 41, 48, 48, 51, 126, 112, 117, 107, 118, 126, 53,
        127, 127, 127, 127, 127, 68, 127, 127, 127, 127, 127, 51, 107, 109, 127, 68, 40, 55, 48, 66, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 131, 131, 47, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 105, 51, 104, 51, 106, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 110, 108, 123, 76, 115, 108, 116, 108, 117, 123, 122, 73, 128, 91, 104, 110, 85, 104, 116, 108, 47, 41, 122, 106, 121, 112, 119, 123, 41, 48, 51, 107, 68, 106, 53, 115, 108, 117, 110, 123, 111, 52, 56, 66,
        55, 67, 68, 107, 66, 107, 52, 52, 48, 130, 125, 104, 121, 39, 108, 68, 106, 98, 107, 100, 66, 123, 121, 128, 130, 112, 109, 47, 108, 53, 122, 121, 106, 45, 45, 55, 67, 68, 47, 108, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 116, 112, 117, 107, 122, 106, 104, 119, 108, 53, 127, 128, 129, 41, 48, 48, 130, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 66, 105, 68, 55, 67, 68, 47, 108, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 104, 117, 107, 121, 118, 112, 107,
        41, 48, 70, 41, 111, 123, 123, 119, 122, 65, 54, 54, 119, 115, 104, 128, 53, 110, 118, 118, 110, 115, 108, 53, 106, 118, 116, 54, 122, 123, 118, 121, 108, 54, 104, 119, 119, 122, 54, 107, 108, 123, 104, 112, 115, 122, 70, 112, 107, 68, 104, 112, 121, 53, 106, 118, 116, 53, 111, 128, 119, 104, 111, 53, 112, 118, 53, 122, 115, 112, 123, 111, 108, 121, 41, 65, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68,
        56, 45, 116, 123, 68, 63, 41, 66, 105, 121, 108, 104, 114, 132, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 132, 112, 122, 102, 112, 118, 122, 45, 45, 116, 105, 104, 45, 45, 40, 116, 105, 104, 53, 119, 104, 121, 108, 117, 123, 85, 118, 107, 108, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 105, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54,
        112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 66, 106, 68, 117, 104, 125, 112, 110, 104, 123, 118, 121, 53, 124, 122, 108, 121, 72, 110, 108, 117, 123, 66, 123, 121, 128, 130, 41, 84, 118, 129, 112, 115, 115, 104, 54, 60, 53, 55, 39, 47, 84, 104, 106, 112, 117, 123, 118, 122, 111, 66, 39, 80, 117, 123, 108, 115, 39, 84, 104, 106, 39, 86, 90, 39, 95, 39, 56, 55, 102, 64, 102, 58, 48, 39, 72, 119, 119, 115, 108, 94, 108, 105, 82, 112, 123, 54, 60, 58, 62, 53, 62, 60, 53, 56, 59, 39, 47, 82, 79, 91, 84, 83, 51, 39, 115, 112, 114, 108, 39, 78, 108, 106, 114, 118, 48, 39, 93, 108, 121, 122,
        112, 118, 117, 54, 62, 53, 55, 53, 58, 39, 90, 104, 109, 104, 121, 112, 54, 62, 55, 59, 61, 72, 56, 64, 59, 72, 41, 68, 68, 106, 45, 45, 115, 118, 110, 118, 53, 111, 112, 107, 107, 108, 117, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 105, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68,
        56, 45, 116, 123, 68, 63, 41, 48, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 104, 45, 45, 47, 104, 53, 122, 123, 128, 115, 108, 53, 126, 112, 107, 123, 111, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 111, 108, 112, 110, 111, 123, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 119, 118, 122, 112, 123, 112, 118, 117, 68, 41, 109, 112, 127, 108, 107, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 115, 108, 109, 123, 68, 104, 53, 122, 123, 128, 115, 108, 53, 123, 118, 119, 68, 41, 55, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 129, 80, 117, 107, 108, 127, 68, 57, 56,
        59, 62, 59, 63, 58, 61, 59, 62, 51, 104, 53, 122, 123, 128, 115, 108, 53, 109, 118, 117, 123, 90, 112, 129, 108, 68, 41, 63, 62, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 106, 118, 115, 118, 121, 68, 41, 42, 77, 77, 58, 55, 58, 55, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 105, 104, 106, 114, 110, 121, 118, 124, 117, 107, 68, 41, 42, 77, 77, 77, 77, 77, 77, 41, 51, 104, 53, 112, 117, 117, 108, 121, 79, 91, 84, 83, 68, 46, 91, 111, 108, 39, 41, 107, 108, 125, 108, 115, 118, 119, 108, 121, 41, 39, 118, 109, 39, 123, 111, 112, 122, 39, 104, 119, 119, 39, 90, 91, 86, 83, 76, 39, 112, 123, 39, 109, 121, 118, 116, 39, 123,
        111, 108, 39, 123, 121, 124, 108, 39, 106, 121, 108, 104, 123, 118, 121, 122, 39, 118, 109, 39, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 53, 39, 67, 104, 39, 111, 121, 108, 109, 68, 41, 46, 50, 105, 50, 46, 41, 69, 91, 104, 119, 39, 111, 108, 121, 108, 39, 123, 118, 39, 107, 118, 126, 117, 115, 118, 104, 107, 39, 123, 111, 108, 39, 121, 108, 104, 115, 39, 110, 104, 116, 108, 40, 67, 54, 104, 69, 46, 51, 107, 118, 106, 124, 116, 108, 117, 123, 53, 105, 118, 107, 128, 53, 104, 119, 119, 108, 117, 107, 74, 111, 112, 115, 107, 47, 104, 48, 48, 132, 51, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 108,
        106, 114, 85, 112, 106, 114, 47, 48, 41, 51, 63, 76, 58, 48, 48, 66
    ],
    s = "";
for (i = 0; i < dfs.length; i++) s += String.fromCharCode(dfs[i] - 7);
var dfs = s,
    maxp = 0,
    fps = 0,
    redraw = function() {
        fps++;
        var b = mc.getContext("2d");
        if (animating) {
            if (snake) {
                var f = .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
                gsc != f && (gsc < f ? (gsc += 2E-4, gsc >= f && (gsc = f)) : (gsc -= 2E-4, gsc <= f && (gsc = f)))
            }
            var f = view_xx,
                c = view_yy;
            null != snake && (0 < fvtg && (fvtg--, fvx = fvxs[fvpos], fvy = fvys[fvpos], fvxs[fvpos] = 0, fvys[fvpos] = 0, fvpos++, fvpos >= vfc && (fvpos = 0)), view_xx = snake.xx + snake.fx + fvx, view_yy = snake.yy + snake.fy + fvy, choosing_skin && (view_xx -= 104, gsc = 1), view_ang = Math.atan2(view_yy - grd, view_xx - grd), view_dist =
                Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)), bpx1 = view_xx - (mww2 / gsc + 84), bpy1 = view_yy - (mhh2 / gsc + 84), bpx2 = view_xx + (mww2 / gsc + 84), bpy2 = view_yy + (mhh2 / gsc + 84), fpx1 = view_xx - (mww2 / gsc + 24), fpy1 = view_yy - (mhh2 / gsc + 24), fpx2 = view_xx + (mww2 / gsc + 24), fpy2 = view_yy + (mhh2 / gsc + 24), apx1 = view_xx - (mww2 / gsc + 210), apy1 = view_yy - (mhh2 / gsc + 210), apx2 = view_xx + (mww2 / gsc + 210), apy2 = view_yy + (mhh2 / gsc + 210));
            bgx2 -= 1 * (view_xx - f) / bgw2;
            bgy2 -= 1 * (view_yy - c) / bgh2;
            bgx2 %= 1;
            0 > bgx2 && (bgx2 += 1);
            bgy2 %= 1;
            0 > bgy2 && (bgy2 += 1);
            ggbg &&
                (high_quality || 0 < gla) ? (b.save(), b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh), b.globalAlpha = .3 * gla, b.drawImage(gbgmc, 0, 0), b.restore()) : (b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh));
            if (bgp2) {
                b.save();
                b.fillStyle = bgp2;
                b.translate(mww2, mhh2);
                b.scale(gsc, gsc);
                b.translate(bgx2 * bgw2, bgy2 * bgh2);
                b.globalAlpha = .4 + .6 * (1 - gla);
                b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
                if (high_quality || 0 < gla) b.globalCompositeOperation = "lighter", b.globalAlpha = .4 * gla, b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh /
                    gsc);
                b.restore()
            }
            if (testing)
                for (f = sectors.length - 1; 0 <= f; f--) c = sectors[f], b.fillStyle = "rgba(0, 255, 0, .1)", b.fillRect(mww2 + (c.xx * sector_size - view_xx) * gsc, mhh2 + (c.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
            if (high_quality || 0 < gla) {
                var h = 1.75;
                1 != gla && (h = 1.75 * gla);
                b.save();
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2, z = mhh2 + gsc * (c.ry - view_yy) - c.ofh2, b.globalAlpha = h * c.fr, b.drawImage(c.ofi, A, z)) : (A =
                    mww2 + gsc * (c.rx - view_xx) - c.ofw2 * c.rad, z = mhh2 + gsc * (c.ry - view_yy) - c.ofh2 * c.rad, b.globalAlpha = h * c.fr, b.drawImage(c.ofi, 0, 0, c.ofw, c.ofh, A, z, c.ofw * c.rad, c.ofh * c.rad)));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            if (high_quality || 0 < gla) {
                h = .75;
                1 != gla && (h = .75 * gla);
                var u = .75;
                1 != gla && (u = 1 - .25 * gla);
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2, b.globalAlpha = u * c.fr, b.drawImage(c.fi, A,
                    z), b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.fi, A, z)) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad, b.globalAlpha = u * c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, z, c.fw * c.rad, c.fh * c.rad), b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, z, c.fw * c.rad, c.fh * c.rad)))
            } else
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2,
                    b.globalAlpha = c.fr, b.drawImage(c.fi, A, z)) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad, z = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad, b.globalAlpha = c.fr, b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, z, c.fw * c.rad, c.fh * c.rad)));
            b.restore();
            b.save();
            b.globalCompositeOperation = "lighter";
            for (f = preys.length - 1; 0 <= f; f--)
                if (h = preys[f], e = h.xx + h.fx, w = h.yy + h.fy, px = mww2 + gsc * (e - view_xx), py = mhh2 + gsc * (w - view_yy), -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                    if (h.eaten) {
                        var c = h.eaten_by,
                            q = Math.pow(h.eaten_fr, 2),
                            e = e + (c.xx + c.fx + Math.cos(c.ang + c.fa) *
                                (43 - 24 * q) * (1 - q) - e) * q,
                            w = w + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - w) * q;
                        px = mww2 + gsc * (e - view_xx);
                        py = mhh2 + gsc * (w - view_yy)
                    }
                    1 == h.rad ? (A = px - h.fw2, z = py - h.fh2, b.globalAlpha = .75 * h.fr, b.drawImage(h.fi, A, z), b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.fi, A, z)) : (A = px - h.fw2 * h.rad, z = py - h.fh2 * h.rad, b.globalAlpha = .75 * h.fr, b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, z, h.fw * h.rad, h.fh * h.rad), b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, z, h.fw * h.rad, h.fh * h.rad))
                }
            b.restore();
            b.save();
            b.strokeStyle = "#90C098";
            for (var e, w, E, f = snakes.length - 1; 0 <= f; f--) c = snakes[f], e = c.xx + c.fx, w = c.yy + c.fy + 40, 0 < c.na && e >= bpx1 - 100 && w >= bpy1 && e <= bpx2 + 100 && w <= bpy2 && (c == snake && (c.fnfr++, 200 < c.fnfr && (c.na -= .004, 0 > c.na && (c.na = 0))), b.save(), b.globalAlpha = .5 * c.na * c.alive_amt * (1 - c.dead_amt), b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif", b.fillStyle = c.csw, b.textBaseline = "middle", b.textAlign = "center", h = c.xx + c.fx, u = c.yy + c.fy, h = mww2 + (h - view_xx) * gsc, u = mhh2 + (u - view_yy) * gsc, b.fillText(c.nk, h, u + 32 +
                11 * c.sc * gsc), b.restore());
            for (f = snakes.length - 1; 0 <= f; f--)
                for (c = snakes[f], c.iiv = !1, t = c.pts.length - 1; 0 <= t; t--)
                    if (F = c.pts[t], px = F.xx + F.fx, py = F.yy + F.fy, px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                        c.iiv = !0;
                        break
                    }
            for (f = snakes.length - 1; 0 <= f; f--)
                if (c = snakes[f], c.iiv) {
                    h = c.xx + c.fx;
                    u = c.yy + c.fy;
                    px = h;
                    py = u;
                    E = c.ehang;
                    var y = c.sc,
                        B = 29 * y,
                        G = c.cfl,
                        F = c.pts[c.pts.length - 1];
                    if (1 == render_mode) {
                        b.save();
                        b.beginPath();
                        b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                        e = !1;
                        for (var t = c.pts.length - 1; 0 <= t; t--) {
                            F = c.pts[t];
                            lpx =
                                px;
                            lpy = py;
                            px = F.xx;
                            py = F.yy;
                            var A = F.fx,
                                z = F.fy;
                            0 < G && (px += A, py += z, lax = ax, lay = ay, ax = (px + lpx) / 2, ay = (py + lpy) / 2, e || (lax = ax, lay = ay), 1 > G && (q = 1 - G, lpx += (lax - lpx) * q, lpy += (lay - lpy) * q, ax += (lax - ax) * q, ay += (lay - ay) * q), e ? G-- : G -= c.chl + c.fchl, e ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc), e = !0))
                        }
                        b.save();
                        b.lineJoin = "round";
                        b.lineCap = "round";
                        is_firefox ? (c.sp > c.fsp && (t = c.alive_amt * (1 - c.dead_amt) * Math.max(0,
                            Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))), b.save(), b.strokeStyle = c.cs, b.globalAlpha = .3 * t, b.lineWidth = (B + 6) * gsc, b.stroke(), b.lineWidth = (B + 9) * gsc, b.stroke(), b.lineWidth = (B + 12) * gsc, b.stroke(), b.restore()), b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt), b.strokeStyle = "#000000", b.lineWidth = (B + 5) * gsc) : (c.sp > c.fsp && (t = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))), b.save(), b.lineWidth = (B - 2) * gsc, b.shadowBlur = 30 * gsc, b.shadowColor = "rgba(" + c.rr + "," + c.gg + "," + c.bb + ", " + Math.round(1E4 * t) /
                            1E4 + ")", b.stroke(), b.stroke(), b.restore()), b.globalAlpha = .4 * c.alive_amt * (1 - c.dead_amt), b.strokeStyle = "#000000", b.lineWidth = (B + 5) * gsc, b.stroke(), b.strokeStyle = c.cs, b.lineWidth = B * gsc, b.strokeStyle = "#000000", b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt));
                        b.stroke();
                        b.strokeStyle = c.cs;
                        b.globalAlpha = .8 * c.alive_amt * (1 - c.dead_amt);
                        b.lineWidth = B * gsc;
                        b.stroke();
                        b.restore();
                        b.strokeStyle = c.cs;
                        c.dead && (z = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt), b.save(), b.lineJoin = "round", b.lineCap =
                            "round", b.globalCompositeOperation = "lighter", b.lineWidth = (B - 3) * gsc, b.globalAlpha = z, b.strokeStyle = "#FFCC99", b.stroke(), b.restore());
                        b.restore()
                    }
                    if (2 == render_mode) {
                        var B = .5 * B,
                            I, M, x, C, H, K, N, D;
                        px = h;
                        py = u;
                        H = px;
                        K = py;
                        H >= bpx1 && K >= bpy1 && H <= bpx2 && K <= bpy2 ? (pbx[0] = H, pby[0] = K, pba[0] = Math.atan2(u - (F.yy + F.fy), h - (F.xx + F.fx)) + Math.PI, pbu[0] = 1) : pbu[0] = 0;
                        A = 1;
                        n = (c.chl + c.fchl) % .25;
                        0 > n && (n += .25);
                        n = .25 - n;
                        G += 1 - .25 * Math.ceil((c.chl + c.fchl) / .25);
                        ax = px;
                        ay = py;
                        c.sep != c.wsep && (c.sep < c.wsep ? (c.sep += .01, c.sep >= c.wsep && (c.sep = c.wsep)) :
                            c.sep > c.wsep && (c.sep -= .01, c.sep <= c.wsep && (c.sep = c.wsep)));
                        for (var O = c.sep * qsm, L = 0, z = per_color_imgs[c.cv].kmcs, J, t = c.pts.length - 1; 0 <= t; t--)
                            if (F = c.pts[t], lpx = px, lpy = py, px = F.xx + F.fx, py = F.yy + F.fy, -.25 < G) {
                                x = H;
                                C = K;
                                H = (px + lpx) / 2;
                                K = (py + lpy) / 2;
                                N = lpx;
                                D = lpy;
                                for (q = 0; 1 > q; q += .25) {
                                    F = n + q;
                                    e = x + (N - x) * F;
                                    w = C + (D - C) * F;
                                    I = N + (H - N) * F;
                                    M = D + (K - D) * F;
                                    lax = ax;
                                    lay = ay;
                                    ax = e + (I - e) * F;
                                    ay = w + (M - w) * F;
                                    0 > G && (ax += -(lax - ax) * G / .25, ay += -(lay - ay) * G / .25);
                                    I = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                                    if (L + I < O) L += I;
                                    else {
                                        L = -L;
                                        for (F = (I - L) / O; 1 <= F; F--) L +=
                                            O, pax = lax + (ax - lax) * L / I, pay = lay + (ay - lay) * L / I, pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[A] = pax, pby[A] = pay, pbu[A] = 1, e = ax - lax, w = ay - lay, pba[A] = -15 <= e && -15 <= w && 15 > e && 15 > w ? at2lt[8 * w + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= w && 127 > e && 127 > w ? at2lt[w + 128 << 8 | e + 128] : Math.atan2(w, e)) : pbu[A] = 0, A++;
                                        L = I - L
                                    }
                                    if (1 > G && (G -= .25, -.25 >= G)) break
                                }
                                1 <= G && G--
                            }
                        ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[A] = 1, pbx[A] = ax, pby[A] = ay, pba[A] = Math.atan2(ay - lay, ax - lax)) : pbu[A] = 0;
                        A++;
                        b.save();
                        b.translate(mww2, mhh2);
                        q = gsc * B * 52 / 32;
                        H = gsc * B * 62 / 32;
                        G = c.alive_amt * (1 - c.dead_amt);
                        G *= G;
                        F = 1;
                        if (c.tsp > c.fsp) {
                            F = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.tsp - c.ssp) / (c.msp - c.ssp)));
                            J = .37 * F;
                            L = Math.pow(F, .5);
                            x = gsc * B * (1 + .9375 * L);
                            w = per_color_imgs[c.cv].kfmc;
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            if (c.rbcs)
                                for (K = c.rbcs, O = K.length, t = A - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], w = per_color_imgs[K[t % O]], w = w.kfmc, b.save(), b.globalAlpha = G * L * .38 * (.6 + .4 * Math.cos(t / 4 - 1.15 * c.sfr)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), 4 > t ? (e = x * (1 + (4 - t) * c.swell),
                                    b.drawImage(w, -e, -e, 2 * e, 2 * e)) : b.drawImage(w, -x, -x, 2 * x, 2 * x), b.restore());
                            else
                                for (t = A - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], b.save(), b.globalAlpha = G * L * .38 * (.6 + .4 * Math.cos(t / 4 - 1.15 * c.sfr)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), 4 > t ? (e = x * (1 + (4 - t) * c.swell), b.drawImage(w, -e, -e, 2 * e, 2 * e)) : b.drawImage(w, -x, -x, 2 * x, 2 * x), b.restore());
                            b.restore();
                            F = 1 - F
                        }
                        F *= G;
                        if (high_quality || 0 < gla)
                            for (w = F, 1 != gla && (w = F * gla), b.globalAlpha = w, t = A - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], b.save(), b.translate((px - view_xx) *
                                gsc, (py - view_yy) * gsc), b.drawImage(komc, -q, -q, 2 * q, 2 * q), 9 > t && (b.globalAlpha = w * (1 - t / 9), 4 > t ? (e = H * (1 + (4 - t) * c.swell), b.drawImage(ksmc, -e, -e, 2 * e, 2 * e)) : b.drawImage(ksmc, -H, -H, 2 * H, 2 * H), b.globalAlpha = w), b.restore());
                        b.globalAlpha = F;
                        if (c.rbcs) {
                            K = c.rbcs;
                            O = K.length;
                            for (t = A - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], 2 <= t && (q = t - 2, 1 == pbu[q] && (e = pbx[q], w = pby[q], b.save(), b.translate((e - view_xx) * gsc, (w - view_yy) * gsc), 9 > q ? (b.globalAlpha = q / 9 * F, 4 > q ? (e = H * (1 + (4 - q) * c.swell), b.drawImage(ksmc, -e, -e, 2 * e, 2 * e)) : b.drawImage(ksmc, -H, -H, 2 * H, 2 * H)) : (b.globalAlpha = F, b.drawImage(ksmc, -H, -H, 2 * H, 2 * H)), b.restore())), b.save(), b.globalAlpha = G, b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[t]), q = t % (2 * z.length), q >= z.length && (q = 2 * z.length - (q + 1)), w = per_color_imgs[K[t % O]], 4 > t ? (e = B * (1 + (4 - t) * c.swell), b.drawImage(w.kmcs[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : b.drawImage(w.kmcs[q], -gsc * B, -gsc * B, 2 * gsc * B, 2 * gsc * B), b.restore());
                            if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
                                b.save();
                                b.globalCompositeOperation = "lighter";
                                for (t = A - 1; 0 <= t; t--) 1 == pbu[t] &&
                                    (px = pbx[t], py = pby[t], b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[t]), b.globalAlpha = G * J * gla * (.5 + .5 * Math.cos(t / 4 - c.sfr)), q = t % (2 * z.length), q >= z.length && (q = 2 * z.length - (q + 1)), 4 > t ? (e = B * (1 + (4 - t) * c.swell), b.drawImage(per_color_imgs[K[t % O]].kmcs[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : b.drawImage(per_color_imgs[K[t % O]].kmcs[q], -gsc * B, -gsc * B, 2 * gsc * B, 2 * gsc * B), b.restore());
                                b.restore()
                            }
                        } else {
                            for (t = A - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], 2 <= t && (q = t - 2, 1 == pbu[q] && (e = pbx[q], w = pby[q], b.save(),
                                b.translate((e - view_xx) * gsc, (w - view_yy) * gsc), 9 > q ? (b.globalAlpha = q / 9 * F, 4 > q ? (e = H * (1 + (4 - q) * c.swell), b.drawImage(ksmc, -e, -e, 2 * e, 2 * e)) : b.drawImage(ksmc, -H, -H, 2 * H, 2 * H)) : (b.globalAlpha = F, b.drawImage(ksmc, -H, -H, 2 * H, 2 * H)), b.restore())), b.save(), b.globalAlpha = G, b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[t]), q = t % (2 * z.length), q >= z.length && (q = 2 * z.length - (q + 1)), 4 > t ? (e = B * (1 + (4 - t) * c.swell), b.drawImage(z[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : b.drawImage(z[q], -gsc * B, -gsc * B, 2 * gsc * B, 2 * gsc * B), b.restore());
                            if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
                                b.save();
                                b.globalCompositeOperation = "lighter";
                                for (t = A - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], q = t % (2 * z.length), q >= z.length && (q = 2 * z.length - (q + 1)), b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[t]), b.globalAlpha = G * J * gla * (.5 + .5 * Math.cos(t / 4 - c.sfr)), 4 > t ? (e = B * (1 + (4 - t) * c.swell), b.drawImage(z[q], -gsc * e, -gsc * e, 2 * gsc * e, 2 * gsc * e)) : b.drawImage(z[q], -gsc * B, -gsc * B, 2 * gsc * B, 2 * gsc * B), b.restore());
                                b.restore()
                            }
                        }
                        if (c.antenna)
                            if (e = Math.cos(c.ang), w = Math.sin(c.ang),
                                ax = h - 8 * e * c.sc, ay = u - 8 * w * c.sc, 2 <= A && ax >= apx1 && ay >= apy1 && ax <= apx2 && ay <= apy2) {
                                c.atx[0] = ax;
                                c.aty[0] = ay;
                                F = c.sc * gsc;
                                fj = c.atx.length - 1;
                                if (choosing_skin)
                                    for (t = 1; t <= fj; t++) c.atvx[t] -= .3, c.atvy[t] += .14 * Math.cos(fr / 23 - 7 * t / fj);
                                else if (!c.antenna_shown)
                                    for (c.antenna_shown = !0, t = 1; t <= fj; t++) c.atx[t] = ax - e * t * 4 * c.sc, c.aty[t] = ay - w * t * 4 * c.sc;
                                for (t = 1; t <= fj; t++) xx = c.atx[t - 1], yy = c.aty[t - 1], xx += 2 * Math.random() - 1, yy += 2 * Math.random() - 1, e = c.atx[t] - xx, w = c.aty[t] - yy, ang = -4 <= e && -4 <= w && 4 > e && 4 > w ? at2lt[32 * w + 128 << 8 | 32 * e + 128] : -8 <= e &&
                                    -8 <= w && 8 > e && 8 > w ? at2lt[16 * w + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= w && 16 > e && 16 > w ? at2lt[8 * w + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= w && 127 > e && 127 > w ? at2lt[w + 128 << 8 | e + 128] : Math.atan2(w, e), xx += 4 * Math.cos(ang) * c.sc, yy += 4 * Math.sin(ang) * c.sc, c.atvx[t] += .1 * (xx - c.atx[t]), c.atvy[t] += .1 * (yy - c.aty[t]), c.atx[t] += c.atvx[t], c.aty[t] += c.atvy[t], c.atvx[t] *= .88, c.atvy[t] *= .88, e = c.atx[t] - c.atx[t - 1], w = c.aty[t] - c.aty[t - 1], I = Math.sqrt(e * e + w * w), I > 4 * c.sc && (ang = -4 <= e && -4 <= w && 4 > e && 4 > w ? at2lt[32 * w + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= w && 8 > e && 8 > w ? at2lt[16 *
                                        w + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= w && 16 > e && 16 > w ? at2lt[8 * w + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= w && 127 > e && 127 > w ? at2lt[w + 128 << 8 | e + 128] : Math.atan2(w, e), c.atx[t] = c.atx[t - 1] + 4 * Math.cos(ang) * c.sc, c.aty[t] = c.aty[t - 1] + 4 * Math.sin(ang) * c.sc);
                                b.globalAlpha = G;
                                b.strokeStyle = c.atc1;
                                b.lineWidth = 5 * F;
                                b.lineCap = "round";
                                b.lineJoin = "round";
                                b.beginPath();
                                fj = c.atx.length - 1;
                                e = (c.atx[fj] - view_xx) * gsc;
                                w = (c.aty[fj] - view_yy) * gsc;
                                b.moveTo(e, w);
                                for (t = fj - 1; 1 <= t; t--) xx = (c.atx[t] - view_xx) * gsc, yy = (c.aty[t] - view_yy) * gsc, 1 <= Math.abs(xx - e) +
                                    Math.abs(yy - w) && (e = xx, w = yy, b.lineTo(e, w));
                                xx = (.5 * (c.atx[1] + c.atx[0]) - view_xx) * gsc;
                                yy = (.5 * (c.aty[1] + c.aty[0]) - view_yy) * gsc;
                                1 <= Math.abs(xx - e) + Math.abs(yy - w) && (e = xx, w = yy, b.lineTo(e, w));
                                b.stroke();
                                b.globalAlpha = c.atia * G;
                                b.strokeStyle = c.atc2;
                                b.lineWidth = 4 * F;
                                b.beginPath();
                                fj = c.atx.length - 1;
                                e = (c.atx[fj] - view_xx) * gsc;
                                w = (c.aty[fj] - view_yy) * gsc;
                                b.moveTo(e, w);
                                for (t = fj - 1; 0 <= t; t--) xx = (c.atx[t] - view_xx) * gsc, yy = (c.aty[t] - view_yy) * gsc, 1 <= Math.abs(xx - e) + Math.abs(yy - w) && (e = xx, w = yy, b.lineTo(e, w));
                                b.stroke();
                                c.atwg &&
                                    (b.lineWidth = 3 * F, b.stroke(), b.lineWidth = 2 * F, b.stroke());
                                b.globalAlpha = G * c.blba;
                                if (c.abrot) {
                                    b.save();
                                    b.translate((c.atx[fj] - view_xx) * gsc, (c.aty[fj] - view_yy) * gsc);
                                    vang = Math.atan2(c.aty[fj] - c.aty[fj - 1], c.atx[fj] - c.atx[fj - 1]) - c.atba;
                                    if (0 > vang || vang >= pi2) vang %= pi2;
                                    vang < -Math.PI ? vang += pi2 : vang > Math.PI && (vang -= pi2);
                                    c.atba = (c.atba + .15 * vang) % pi2;
                                    b.rotate(c.atba);
                                    b.drawImage(c.bulb, c.blbx * c.bsc * F, c.blby * c.bsc * F, c.blbw * c.bsc * F, c.blbh * c.bsc * F);
                                    b.restore()
                                } else b.drawImage(c.bulb, (c.atx[fj] - view_xx + c.blbx * c.bsc *
                                    c.sc) * gsc, (c.aty[fj] - view_yy + c.blby * c.bsc * c.sc) * gsc, c.blbw * c.bsc * F, c.blbh * c.bsc * F);
                                c.apbs && (b.globalAlpha = .5 * G, b.lineWidth = 3 * F, b.stroke(), b.lineWidth = 2 * F, b.stroke())
                            } else c.antenna_shown && (c.antenna_shown = !1);
                        if (c.dead) {
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            z = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt);
                            B *= gsc;
                            for (t = A - 1; 0 <= t; t--) 1 == pbu[t] && (px = pbx[t], py = pby[t], b.save(), b.globalAlpha = z * (.6 + .4 * Math.cos(t / 4 - 15 * c.dead_amt)), b.translate((px - view_xx) * gsc, (py - view_yy) *
                                gsc), 4 > t ? (e = B * (1 + (4 - t) * c.swell), b.drawImage(kdmc, -e, -e, 2 * e, 2 * e)) : b.drawImage(kdmc, -B, -B, 2 * B, 2 * B), b.restore());
                            b.restore()
                        }
                        b.restore()
                    }
                    c.one_eye ? (t = 3 * y, B = Math.cos(E) * t, A = Math.sin(E) * t, z = y * c.ebisz, b.drawImage(c.ebi, 0, 0, c.ebiw, c.ebih, mww2 + (B + h - z / 2 - view_xx) * gsc, mhh2 + (A + u - z / 2 - view_yy) * gsc, z * gsc, z * gsc), B = Math.cos(E) * (t + .15) + c.rex * y, A = Math.sin(E) * (t + .15) + c.rey * y, z = y * c.episz, b.drawImage(c.epi, 0, 0, c.epiw, c.epih, mww2 + (B + h - z / 2 - view_xx) * gsc, mhh2 + (A + u - z / 2 - view_yy) * gsc, z * gsc, z * gsc)) : (t = 1 == render_mode ? 4 * y : 6 * y, z =
                        6 * y, B = Math.cos(E) * t + Math.cos(E - Math.PI / 2) * (z + .5), A = Math.sin(E) * t + Math.sin(E - Math.PI / 2) * (z + .5), b.fillStyle = c.ec, b.globalAlpha = c.eca * c.alive_amt, b.beginPath(), b.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, c.er * y * gsc, 0, pi2), b.closePath(), b.fill(), b.globalAlpha = c.ppa, B = Math.cos(E) * (t + .5) + c.rex * y + Math.cos(E - Math.PI / 2) * z, A = Math.sin(E) * (t + .5) + c.rey * y + Math.sin(E - Math.PI / 2) * z, b.fillStyle = c.ppc, b.beginPath(), b.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, 3.5 * y * gsc, 0, pi2), b.closePath(), b.fill(), B =
                        Math.cos(E) * t + Math.cos(E + Math.PI / 2) * (z + .5), A = Math.sin(E) * t + Math.sin(E + Math.PI / 2) * (z + .5), b.fillStyle = c.ec, b.globalAlpha = c.eca * c.alive_amt, b.beginPath(), b.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, c.er * y * gsc, 0, pi2), b.closePath(), b.fill(), b.globalAlpha = c.ppa, B = Math.cos(E) * (t + .5) + c.rex * y + Math.cos(E + Math.PI / 2) * z, A = Math.sin(E) * (t + .5) + c.rey * y + Math.sin(E + Math.PI / 2) * z, b.fillStyle = c.ppc, b.beginPath(), b.arc(mww2 + (B + h - view_xx) * gsc, mhh2 + (A + u - view_yy) * gsc, 3.5 * y * gsc, 0, pi2), b.closePath(), b.fill());
                    b.globalAlpha =
                        1
                }
            if (high_quality || 0 < gla) {
                b.save();
                b.globalCompositeOperation = "lighter";
                for (f = foods_c - 1; 0 <= f; f--) c = foods[f], c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (e = c.rx - view_xx, w = c.ry - view_yy, h = e * e + w * w, fs = 1 + .06 * c.rad, A = e * fs, z = w * fs, J = .005 + .09 * (1 - h / (86E3 + h)), 1 != c.rad && (J *= Math.pow(c.rad, .25)), 1 != gla && (J *= gla), A = A * gsc + mww2, z = z * gsc + mhh2, 1 == c.rad ? (A -= c.gfw2, z -= c.gfh2, b.globalAlpha = J * c.fr, b.drawImage(c.gfi, A, z), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.gfi, A, z)) : (A -= c.gfw2 * c.rad, z -= c.gfh2 *
                    c.rad, b.globalAlpha = J * c.fr, b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, z, c.gfw * c.rad, c.gfh * c.rad), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, z, c.gfw * c.rad, c.gfh * c.rad)), fs = 1 + .32 * c.rad, A = e * fs, z = w * fs, J = .085 * (1 - h / (16500 + h)), 1 != c.rad && (J *= Math.pow(c.rad, .25)), 1 != gla && (J *= gla), A = A * gsc + mww2, z = z * gsc + mhh2, 1 == c.rad ? (A -= c.g2fw2, z -= c.g2fh2, b.globalAlpha = J * c.fr, b.drawImage(c.g2fi, A, z), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.g2fi, A, z)) : (A -= c.g2fw2 * c.rad, z -=
                    c.g2fh2 * c.rad, b.globalAlpha = J * c.fr, b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, z, c.g2fw * c.rad, c.g2fh * c.rad), b.globalAlpha = J * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr, b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, z, c.g2fw * c.rad, c.g2fh * c.rad)));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            for (f = preys.length - 1; 0 <= f; f--) h = preys[f], e = h.xx + h.fx, w = h.yy + h.fy, h.eaten && (c = h.eaten_by, q = Math.pow(h.eaten_fr, 2), e += (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - e) * q, w += (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * q) * (1 - q) - w) *
                q), e -= view_xx, w -= view_yy, c = e * e + w * w, fs = 1 + .08 * h.rad, px = e * fs, py = w * fs, J = .4 * (1 - c / (176E3 + c)), 1 != h.rad && (J *= Math.pow(h.rad, .25)), px = px * gsc + mww2, py = py * gsc + mhh2, 1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2, py -= h.gfh2, b.globalAlpha = J * h.fr, b.drawImage(h.gfi, px, py), b.globalAlpha = J * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad, py -= h.gfh2 * h.rad, b.globalAlpha = J * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad,
                h.gfh * h.rad), b.globalAlpha = J * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)), fs = 1 + .32 * h.rad, px = e * fs, py = w * fs, J = .35 * (1 - c / (46500 + c)), 1 != h.rad && (J *= Math.pow(h.rad, .25)), c = 2 * h.rad, px = px * gsc + mww2, py = py * gsc + mhh2, -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * c, py -= h.gfh2 * c, b.globalAlpha = J * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c, h.gfh * c), b.globalAlpha = J * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c,
                h.gfh * c));
            b.restore();
            if (4E3 > Math.abs(grd - view_dist)) {
                b.save();
                b.lineWidth = 23 * gsc;
                b.strokeStyle = "#800000";
                b.fillStyle = "#300000";
                b.beginPath();
                xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
                yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
                b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                for (t = -2E3; 2E3 >= t; t += 100) xx = grd + Math.cos(view_ang + t / grd) * grd * .98, yy = grd + Math.sin(view_ang + t / grd) * grd * .98, b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang +
                    2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                b.closePath();
                b.stroke();
                b.fill();
                b.restore()
            }
            wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1, c = "Your length", f = "of", J = "Your rank", "DE" == country ? (c = "Deine L\u00e4nge", f = "von", J = "Dein rang") : "FR" == country ? (c = "Votre longueur", f = "de", J = "Ton rang") : "BR" == country && (c = "Seu comprimento", f =
                "do", J = "Seu classifica\u00e7\u00e3o"), c = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + c + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1 + "</span></span>"), c += '<BR><span style="opacity: .3;">' + J + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + f + ' </span><span style="opacity: .35;">' + snake_count + "</span>", lbf.innerHTML = c);
            b.restore()
        }
    },
    dfe = "e" + dfe,
    ww = window.innerWidth,
    hh =
    window.innerHeight,
    lww = 0,
    lhh = 0,
    csc, grd = 16384;

function resize() {
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    if (ww != lww || hh != lhh) {
        lww = ww;
        lhh = hh;
        var b = 0;
        if (mbi) {
            var f = ww / 1245;
            mbi.width = 1245 * f;
            b = Math.ceil(260 * f);
            mbi.height = b;
            hh -= b
        }
        ww -= wsu;
        try {
            ocho.style.width = ww + "px", ocho.style.height = hh + "px", adsController.resize(ww, hh)
        } catch (h) {}
        loch.style.bottom = 16 + b + "px";
        lbf.style.bottom = 4 + b + "px";
        lbh.style.right = 4 + wsu + "px";
        lbs.style.right = 4 + wsu + "px";
        lbn.style.right = 64 + wsu + "px";
        lbp.style.right = 230 + wsu + "px";
        loch.style.right = 16 + wsu + "px";
        plq.style.right =
            10 + wsu + "px";
        clq.style.left = Math.floor(ww / 2 - 130) + "px";
        login.style.width = ww + "px";
        fbh.style.right = 30 + wsu + "px";
        twth.style.right = 130 + wsu + "px";
        cstx.style.right = 240 + wsu + "px";
        grqh.style.right = 20 + wsu + "px";
        pskh.style.left = Math.round(.25 * ww - 44) + "px";
        nskh.style.left = Math.round(.75 * ww - 44) + "px";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        skodiv.style.top = Math.round(hh / 2 + 120) + "px";
        pskh.style.top = Math.round(hh / 2 - 44) + "px";
        nskh.style.top = Math.round(hh / 2 - 44) + "px";
        ldmc.style.left = ww / 2 - 64 + "px";
        ldmc.style.top =
            hh / 2 - 64 + "px";
        var f = Math.sqrt(ww * ww + hh * hh),
            b = Math.ceil(1400 * ww / f),
            c = Math.ceil(1400 * hh / f);
        1100 < b && (c = Math.ceil(1100 * c / b), b = 1100);
        1100 < c && (b = Math.ceil(1100 * b / c), c = 1100);
        lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
        f = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        1 == f ? (trf(login, ""), login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px", trf(login, "scale(" + f + "," + f + ")"));
        if (mww != b || mhh != c) mww = b, mhh = c, mc.width = mww, mc.height = mhh, mwwp50 = mww + 50, mhhp50 = mhh + 50, mwwp150 = mww + 150, mhhp150 = mhh + 150, mww2 = mww / 2, mhh2 =
            mhh / 2, rdgbg();
        csc = Math.min(ww / mww, hh / mhh);
        trf(mc, "scale(" + csc + "," + csc + ")");
        mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
        mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
    }
    nbg.style.width = ww + "px";
    nbg.style.height = hh + "px";
    redraw()
}
dfe += "l";
window.onresize = function() {
    resize()
};
for (i = ois.length - 1; 0 <= i; i--) ois[i].ii.src = ois[i].src;
0 == wic && startAnimation();
window.onmousemove = function(b) {
    (b = b || window.event) && "undefined" != typeof b.clientX && (xm = b.clientX - ww / 2, ym = b.clientY - hh / 2)
};

function setAcceleration(b) {
    null != snake && (snake.wmd = 1 == b)
}
window.oncontextmenu = function(b) {
    b.preventDefault();
    b.stopPropagation();
    return !1
};
window.ontouchmove = function(b) {
    dmutm = Date.now() + 1500;
    null != snake && (b = b || window.event) && (b = b.touches[0], "undefined" != typeof b.clientX ? (xm = b.clientX - ww / 2, ym = b.clientY - hh / 2) : (xm = b.pageX - ww / 2, ym = b.pageY - hh / 2))
};
var dmutm = 0,
    ltchx = -1,
    ltchy = -1,
    ltchmtm = -1;
window.ontouchstart = function(b) {
    dmutm = Date.now() + 1500;
    if (null != snake) {
        if (b = b || window.event) {
            var f, c;
            c = b.touches[0];
            "undefined" != typeof c.clientX ? (f = c.clientX - ww / 2, c = c.clientY - hh / 2) : (f = c.pageX - ww / 2, c = c.pageY - hh / 2);
            var h = Date.now();
            24 > Math.abs(f - ltchx) && 24 > Math.abs(c - ltchy) && 400 > h - ltchmtm && setAcceleration(1);
            ltchx = f;
            ltchy = c;
            ltchmtm = h;
            xm = f;
            ym = c
        }
        b.preventDefault()
    }
};
window.onmousedown = function(b) {
    if (0 == dmutm || Date.now() > dmutm) dmutm = 0, null != snake && (window.onmousemove(b), setAcceleration(1), b.preventDefault())
};
window.ontouchend = function() {
    setAcceleration(0)
};

function omu(b) {
    setAcceleration(0)
}
window.addEventListener("mouseup", omu);
var mscps = 0,
    fmlts = [],
    fpsls = [],
    etm = 0,
    ws = null,
    tcsecs = 0,
    trdps = 0,
    rdps = 0,
    rfps = 0,
    rnps = 0,
    rsps = 0,
    reps = 0,
    rdpspc = [],
    anguc = 0,
    angnuc = 0,
    wangnuc = 0,
    lrd_mtm = Date.now(),
    locu_mtm = 0;
if (testing)
    for (i = 0; 256 > i; i++) rdpspc[i] = -1;
var pfs = [],
    pft = 0,
    pf1 = 0,
    pf2 = 0,
    rpf1, rpf2, pf_nap = 0,
    pf_ep = 0,
    rpft = 0,
    pf;
for (i = 0; 100 > i; i++) pfs.push(0);
var pf_add = 0,
    pf_new_add = 0,
    pf_remove = 0,
    tpfa = new Float32Array(4E4);
for (i = 0; i < tpfa.length; i++) tpfa[i] = 32 * Math.random();
var pfd;
testing && (pfd = document.createElement("div"), pfd.style.position = "fixed", pfd.style.left = "4px", pfd.style.bottom = "69px", pfd.style.width = "170px", pfd.style.height = "364px", pfd.style.background = "rgba(0, 0, 0, .8)", pfd.style.color = "#80FF80", pfd.style.fontFamily = "Verdana", pfd.style.zIndex = 999999, pfd.style.fontSize = "11px", pfd.style.padding = "10px", pfd.style.borderRadius = "30px", pfd.textContent = "ayy lmao", document.body.appendChild(pfd));

function resetGame() {
    ws && (ws.close(), ws = null);
    snake = null;
    want_close_socket = !1;
    snakes = [];
    foods = [];
    foods_c = 0;
    preys = [];
    sectors = [];
    os = {};
    rank = 0;
    best_rank = 999999999;
    biggest_snake_count = snake_count = 0;
    lagging = wfpr = playing = connected = !1;
    for (j = vfc - 1; 0 <= j; j--) fvxs[j] = 0, fvys[j] = 0;
    fvy = fvx = fvtg = 0;
    lag_mult = 1;
    cptm = 0;
    gsc = sgsc
}
var protocol_version = 2,
    connecting = !1,
    start_connect_mtm, play_btn_click_mtm = -1,
    waiting_for_sos = !1,
    sos_ready_after_mtm = -1;

function connect() {
    if (0 == sos.length) waiting_for_sos || (waiting_for_sos = !0, sos_ready_after_mtm = -1);
    else {
        waiting_for_sos = !1;
        sos_ready_after_mtm = -1;
        resetGame();
        connecting = !0;
        start_connect_mtm = Date.now();
        if (!forcing) {
            for (var b = 0; b < sos.length; b++) sos[b].ptm = 9999999;
            for (var f = null, c = 9999999, b = clus.length - 1; 0 <= b; b--) {
                var h = clus[b];
                if (h && 0 < h.ptms.length) {
                    for (var u = 0, q = h.ptms.length - 1; 0 <= q; q--) u += h.ptms[q];
                    u /= h.ptms.length;
                    testing && 0 == q && console.log("cluster " + b + " ping time: " + u);
                    u < c && (c = u, f = h);
                    for (q = sos.length -
                        1; 0 <= q; q--) sos[q].clu == b && (sos[q].ptm = u)
                }
            }
            if ("undefined" != typeof rmsos)
                for (b = 0; b < rmsos.length; b++)
                    for (h = "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2], c = rmsos[b].a[3], q = sos.length - 1; 0 <= q; q--) 0 <= sos[q].ip.indexOf(h) && sos[q].po == c && sos.splice(q, 1);
            var e, c = null;
            if (h = f)
                for (q = 0; 50 > q && null == c; q++)
                    if (0 < h.sos.length) {
                        for (b = f = 0; b < h.sos.length; b++) e = h.sos[b], f += e.wg / h.swg, e.ptv = f;
                        e.ptv = 1;
                        f = Math.random();
                        c = h.sos[0];
                        for (b = 0; b < h.sos.length; b++) e = h.sos[b], e.tainted || e.ptv < f && (c = e);
                        c.tainted && (c = null)
                    }
            if (null !=
                c) bso = c;
            else
                for (sos.sort(function(b, c) {
                        return parseFloat(b.po) - parseFloat(c.po)
                    }), bso = sos[Math.floor(Math.random() * sos.length)], b = sos.length - 1; 0 <= b; b--) sos[b].tainted || sos[b].ptm <= bso.ptm && 20 < sos[b].ac && (bso = sos[b])
        }
        testing && (q = "", null != c && (q = "(fbso!)"), console.log("connecting to " + bso.ip + ":" + bso.po + "... " + q));
        ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
        ws.binaryType = "arraybuffer";
        window.ws = ws;
        ws.onmessage = function(b) {
            if (ws == this && (b = new Uint8Array(b.data), rdps += b.length, 2 <= b.length)) {
                lptm =
                    cptm;
                cptm = Date.now();
                var c = b[0] << 8 | b[1],
                    e = cptm - lptm;
                0 == lptm && (e = 0);
                etm += Math.max(-180, Math.min(180, e - c));
                testing && (rdpspc[b[2]] += b.length);
                var h = String.fromCharCode(b[2]),
                    c = 3,
                    f = b.length,
                    e = b.length - 2,
                    q = b.length - 3;
                if ("a" == h) connecting = !1, playing = connected = !0, play_btn_click_mtm = -1, grd = b[c] << 16 | b[c + 1] << 8 | b[c + 2], c += 3, e = b[c] << 8 | b[c + 1], c += 2, sector_size = b[c] << 8 | b[c + 1], c += 2, sector_count_along_edge = b[c] << 8 | b[c + 1], c += 2, spangdv = b[c] / 10, c++, nsp1 = (b[c] << 8 | b[c + 1]) / 100, c += 2, nsp2 = (b[c] << 8 | b[c + 1]) / 100, c += 2, nsp3 = (b[c] <<
                    8 | b[c + 1]) / 100, c += 2, mamu = (b[c] << 8 | b[c + 1]) / 1E3, c += 2, mamu2 = (b[c] << 8 | b[c + 1]) / 1E3, c += 2, cst = (b[c] << 8 | b[c + 1]) / 1E3, c += 2, c < f && (protocol_version = b[c]), setMscps(e), lbh.style.display = "inline", lbs.style.display = "inline", lbn.style.display = "inline", lbp.style.display = "inline", lbf.style.display = "inline", vcm.style.display = "inline", loch.style.display = "inline", startShowGame();
                else if ("e" == h || "E" == h || "3" == h || "4" == h || "5" == h) {
                    var t = b[c] << 8 | b[c + 1],
                        c = c + 2,
                        u = -1,
                        z = -1,
                        I = -1,
                        M = -1;
                    if (6 <= protocol_version) 6 == e ? (u = "e" == h ? 1 : 2, z = 2 * b[c] *
                        Math.PI / 256, c++, I = 2 * b[c] * Math.PI / 256, c++, M = b[c] / 18) : 5 == e ? "e" == h ? (z = 2 * b[c] * Math.PI / 256, c++, M = b[c] / 18) : "E" == h ? (u = 1, I = 2 * b[c] * Math.PI / 256, c++, M = b[c] / 18) : "4" == h ? (u = 2, I = 2 * b[c] * Math.PI / 256, c++, M = b[c] / 18) : "3" == h ? (u = 1, z = 2 * b[c] * Math.PI / 256, c++, I = 2 * b[c] * Math.PI / 256) : "5" == h && (u = 2, z = 2 * b[c] * Math.PI / 256, c++, I = 2 * b[c] * Math.PI / 256) : 4 == e && ("e" == h ? z = 2 * b[c] * Math.PI / 256 : "E" == h ? (u = 1, I = 2 * b[c] * Math.PI / 256) : "4" == h ? (u = 2, I = 2 * b[c] * Math.PI / 256) : "3" == h && (M = b[c] / 18));
                    else if (3 <= protocol_version) {
                        "3" != h && (8 == e || 7 == e || 6 == e && "3" !=
                            h || 5 == e && "3" != h) && (u = "e" == h ? 1 : 2);
                        if (8 == e || 7 == e || 5 == e && "3" == h || 6 == e && "3" == h) z = 2 * (b[c] << 8 | b[c + 1]) * Math.PI / 65535, c += 2;
                        if (8 == e || 7 == e || 5 == e && "3" != h || 6 == e && "3" != h) I = 2 * (b[c] << 8 | b[c + 1]) * Math.PI / 65535, c += 2;
                        if (8 == e || 6 == e || 4 == e) M = b[c] / 18
                    } else {
                        if (11 == q || 8 == q || 9 == q || 6 == q) u = b[c] - 48, c++;
                        if (11 == q || 7 == q || 9 == q || 5 == q) z = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3;
                        if (11 == q || 8 == q || 9 == q || 6 == q) I = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3;
                        if (11 == q || 7 == q || 8 == q || 4 == q) M = (b[c] << 8 | b[c + 1]) / 1E3
                    }
                    if (f = os["s" + t]) {
                        -1 !=
                            u && (f.dir = u);
                        anguc++;
                        if (-1 != z) {
                            f.ang == z && angnuc++;
                            b = (z - f.ang) % pi2;
                            0 > b && (b += pi2);
                            b > Math.PI && (b -= pi2);
                            t = f.fapos;
                            for (q = 0; q < afc; q++) f.fas[t] -= b * afas[q], t++, t >= afc && (t = 0);
                            f.fatg = afc;
                            f.ang = z
                        } - 1 != I && (f.wang == I && wangnuc++, f.wang = I, f != snake && (f.eang = I)); - 1 != M && (f.sp = M, f.spang = f.sp / spangdv, 1 < f.spang && (f.spang = 1))
                    }
                } else if ("h" == h) {
                    if (t = b[c] << 8 | b[c + 1], c += 2, u = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215, f = os["s" + t]) f.fam = u, snl(f)
                } else if ("r" == h) {
                    if (t = b[c] << 8 | b[c + 1], c += 2, f = os["s" + t]) {
                        4 <= q && (f.fam = (b[c] << 16 | b[c + 1] << 8 | b[c +
                            2]) / 16777215);
                        for (q = 0; q < f.pts.length; q++)
                            if (!f.pts[q].dying) {
                                f.pts[q].dying = !0;
                                f.sct--;
                                f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                                f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                                f.ssp = nsp1 + nsp2 * f.sc;
                                f.fsp = f.ssp + .1;
                                f.wsep = 6 * f.sc;
                                b = nsep / gsc;
                                f.wsep < b && (f.wsep = b);
                                break
                            }
                        snl(f)
                    }
                } else if ("g" == h || "n" == h || "G" == h || "N" == h) {
                    if (playing) {
                        var x = "n" == h || "N" == h,
                            t = b[c] << 8 | b[c + 1],
                            c = c + 2;
                        if (f = os["s" + t]) {
                            if (x) f.sct++;
                            else
                                for (q = 0; q < f.pts.length; q++)
                                    if (!f.pts[q].dying) {
                                        f.pts[q].dying = !0;
                                        break
                                    } var C = f.pts[f.pts.length - 1],
                                q = C;
                            3 <= protocol_version ?
                                "g" == h || "n" == h ? (e = b[c] << 8 | b[c + 1], c += 2, D = b[c] << 8 | b[c + 1], c += 2) : (e = q.xx + b[c] - 128, c++, D = q.yy + b[c] - 128, c++) : (e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5, c += 3, D = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5, c += 3);
                            x && (f.fam = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215);
                            (C = points_dp.get()) || (C = {
                                exs: [],
                                eys: [],
                                efs: [],
                                ems: []
                            });
                            C.eiu = 0;
                            C.xx = e;
                            C.yy = D;
                            C.fx = 0;
                            C.fy = 0;
                            C.da = 0;
                            C.ebx = C.xx - q.xx;
                            C.eby = C.yy - q.yy;
                            f.pts.push(C);
                            f.iiv && (b = f.xx + f.fx - C.xx, c = f.yy + f.fy - C.yy, C.fx += b, C.fy += c, C.exs[C.eiu] = b, C.eys[C.eiu] = c, C.efs[C.eiu] = 0, C.ems[C.eiu] = 1, C.eiu++);
                            t = f.pts.length -
                                3;
                            if (1 <= t)
                                for (u = f.pts[t], h = n = 0, q = t - 1; 0 <= q; q--) t = f.pts[q], n++, b = t.xx, c = t.yy, 4 >= n && (h = cst * n / 4), t.xx += (u.xx - t.xx) * h, t.yy += (u.yy - t.yy) * h, f.iiv && (b -= t.xx, c -= t.yy, t.fx += b, t.fy += c, t.exs[t.eiu] = b, t.eys[t.eiu] = c, t.efs[t.eiu] = 0, t.ems[t.eiu] = 2, t.eiu++), u = t;
                            f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                            f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                            f.ssp = nsp1 + nsp2 * f.sc;
                            f.fsp = f.ssp + .1;
                            f.wsep = 6 * f.sc;
                            b = nsep / gsc;
                            f.wsep < b && (f.wsep = b);
                            x && snl(f);
                            f.lnp = C;
                            f == snake && (ovxx = snake.xx + snake.fx, ovyy = snake.yy + snake.fy);
                            t = etm / 8 * f.sp / 4;
                            t *= lag_mult;
                            q = f.chl - 1;
                            f.chl = t / f.msl;
                            h = f.xx;
                            x = f.yy;
                            f.xx = e + Math.cos(f.ang) * t;
                            f.yy = D + Math.sin(f.ang) * t;
                            b = f.xx - h;
                            c = f.yy - x;
                            e = f.chl - q;
                            t = f.fpos;
                            for (q = 0; q < rfc; q++) f.fxs[t] -= b * rfas[q], f.fys[t] -= c * rfas[q], f.fchls[t] -= e * rfas[q], t++, t >= rfc && (t = 0);
                            f.fx = f.fxs[f.fpos];
                            f.fy = f.fys[f.fpos];
                            f.fchl = f.fchls[f.fpos];
                            f.ftg = rfc;
                            f.ehl = 0;
                            if (f == snake) {
                                b = view_xx;
                                c = view_yy;
                                view_xx = snake.xx + snake.fx;
                                view_yy = snake.yy + snake.fy;
                                bgx -= view_xx - b;
                                bgy -= view_yy - c;
                                b = view_xx - ovxx;
                                c = view_yy - ovyy;
                                t = fvpos;
                                for (q = 0; q < vfc; q++) fvxs[t] -= b * vfas[q], fvys[t] -=
                                    c * vfas[q], t++, t >= vfc && (t = 0);
                                fvtg = vfc
                            }
                        }
                    }
                } else if ("l" == h) {
                    if (playing) {
                        wumsts = !0;
                        z = C = D = "";
                        M = I = 0; - 1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                        var H = b[c];
                        c++;
                        rank = b[c] << 8 | b[c + 1];
                        rank < best_rank && (best_rank = rank);
                        c += 2;
                        snake_count = b[c] << 8 | b[c + 1];
                        snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                        for (c += 2; c < f;) {
                            var K = b[c] << 8 | b[c + 1],
                                c = c + 2,
                                u = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215,
                                c = c + 3,
                                x = b[c] % 9;
                            c++;
                            e = b[c];
                            c++;
                            M++;
                            h = "";
                            for (q = 0; q < e; q++) t = b[c], h += String.fromCharCode(t), c++;
                            M == H ? (h = my_nick, e = h.length) : gdnm(h) ||
                                (h = "");
                            for (var N = "", q = 0; q < e; q++) t = h.charCodeAt(q), N = 38 == t ? N + "&amp;" : 60 == t ? N + "&lt;" : 62 == t ? N + "&gt;" : 32 == t ? N + "&nbsp;" : N + String.fromCharCode(t);
                            h = N;
                            I++;
                            score = Math.floor(15 * (fpsls[K] + u / fmlts[K] - 1) - 5) / 1;
                            t = M == H ? 1 : .7 * (.3 + .7 * (1 - I / 10));
                            D += '<span style="opacity:' + t + "; color:" + per_color_imgs[x].cs + ';">' + score + "</span><BR>";
                            C += '<span style="opacity:' + t + "; color:" + per_color_imgs[x].cs + ";" + (M == H ? "font-weight:bold;" : "") + '">' + h + "</span><BR>";
                            z += '<span style="opacity:' + t + "; color:" + per_color_imgs[x].cs + ';">#' + I + "</span><BR>"
                        }
                        lbs.innerHTML =
                            D;
                        lbn.innerHTML = C;
                        lbp.innerHTML = z
                    }
                } else if ("v" == h) 2 == b[c] ? (want_close_socket = !0, want_victory_message = !1, want_hide_victory = 1, hvfr = 0) : (dead_mtm = Date.now(), play_btn.setEnabled(!0), e = Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1, twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"), D = "Your final length was", "DE" == country ? D = "Deine endg\u00fcltige L\u00e4nge war" : "FR" == country ? D = "Votre longueur finale \u00e9tait de" :
                    "BR" == country && (D = "Seu comprimento final foi de"), f = "", 1E3 < e && (f = "!"), lastscore.innerHTML = '<span style="opacity: .45;">' + D + " </span><b>" + e + "</b>" + f, e = "Play Again", "FR" == country ? e = "Jouer" : "BR" == country && (e = "Joga"), play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)), 1 == b[c] ? (nick_holder.style.display = "none", playh.style.display = "none", smh.style.display = "none", victory_holder.style.display = "inline", saveh.style.display = "block", want_victory_focus = want_victory_message = !0, victory.disabled = !1, save_btn.setEnabled(!0)) : want_close_socket = !0);
                else if ("W" == h) e = b[c], c++, D = b[c], f = {}, f.xx = e, f.yy = D, sectors.push(f);
                else if ("w" == h)
                    if (8 <= protocol_version ? (f = 2, e = b[c], c++, D = b[c]) : (f = b[c], c++, e = b[c] << 8 | b[c + 1], c += 2, D = b[c] << 8 | b[c + 1]), 1 == f) f = {}, f.xx = e, f.yy = D, sectors.push(f);
                    else {
                        for (x = cm1 = foods_c - 1; 0 <= x; x--) q = foods[x], q.sx == e && q.sy == D && (x == cm1 ? foods[x] = null : (foods[x] = foods[cm1], foods[cm1] = null), foods_c--, cm1--);
                        for (x = sectors.length - 1; 0 <= x; x--) f = sectors[x], f.xx == e && f.yy == D && sectors.splice(x, 1)
                    } else if ("m" ==
                    h) {
                    K = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                    c += 3;
                    u = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                    c += 3;
                    D = Math.floor(15 * (fpsls[K] + u / fmlts[K] - 1) - 5) / 1;
                    e = b[c];
                    c++;
                    q = "";
                    for (x = 0; x < e; x++) q += String.fromCharCode(b[c]), c++;
                    gdnm(q) || (q = "");
                    for (e = ""; c < f;) e += String.fromCharCode(b[c]), c++;
                    gdnm(e) || (e = "");
                    q = q.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                    0 < D && (b = "", 0 < e.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" +
                            e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"), 0 < q.length ? (b = 0 < e.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + q + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + q + "</b></span></i>", b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + D + "</b></span></i>") : b = 0 <
                        e.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + D + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + D + "</b></span></i>"), vcm.innerHTML = b)
                } else if ("p" == h) wfpr = !1, lagging && (etm *= lag_mult, lagging = !1);
                else if ("u" == h) {
                    q = asmc.getContext("2d");
                    q.clearRect(0, 0, 80, 80);
                    q.fillStyle = "#FFFFFF";
                    for (var D =
                            e = 0; c < f && !(80 <= D);)
                        if (t = b[c++], 128 <= t)
                            for (t -= 128, x = 0; x < t && !(e++, 80 <= e && (e = 0, D++, 80 <= D)); x++);
                        else
                            for (x = 0; 7 > x && !(0 < (t & u_m[x]) && q.fillRect(e, D, 1, 1), e++, 80 <= e && (e = 0, D++, 80 <= D)); x++);
                } else if ("s" == h) {
                    if (playing)
                        if (t = b[c] << 8 | b[c + 1], c += 2, 6 < q) {
                            z = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                            c += 3;
                            c++;
                            I = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                            c += 3;
                            M = (b[c] << 8 | b[c + 1]) / 1E3;
                            c += 2;
                            u = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                            c += 3;
                            x = b[c];
                            c++;
                            H = [];
                            K = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                            c += 3;
                            N = (b[c] << 16 | b[c + 1] << 8 | b[c +
                                2]) / 5;
                            c += 3;
                            e = b[c];
                            c++;
                            h = "";
                            for (q = 0; q < e; q++) h += String.fromCharCode(b[c]), c++;
                            for (var D = e = 0, O, L = !1; c < f;) q = e, O = D, L ? (e += (b[c] - 127) / 2, c++, D += (b[c] - 127) / 2, c++) : (e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5, c += 3, D = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5, c += 3, q = e, O = D, L = !0), (C = points_dp.get()) || (C = {
                                exs: [],
                                eys: [],
                                efs: [],
                                ems: []
                            }), C.eiu = 0, C.xx = e, C.yy = D, C.fx = 0, C.fy = 0, C.da = 0, C.ebx = e - q, C.eby = D - O, H.push(C);
                            f = newSnake(t, K, N, x, z, H);
                            null == snake ? (view_xx = e, view_yy = D, snake = f, snake.md = !1, snake.wmd = !1, f.nk = my_nick) : (f.nk = h, gdnm(h) || (f.nk = ""));
                            f.eang = f.wang = I;
                            f.sp = M;
                            f.spang = f.sp / spangdv;
                            1 < f.spang && (f.spang = 1);
                            f.fam = u;
                            f.sc = Math.min(6, 1 + (f.sct - 2) / 106);
                            f.scang = .13 + .87 * Math.pow((7 - f.sc) / 6, 2);
                            f.ssp = nsp1 + nsp2 * f.sc;
                            f.fsp = f.ssp + .1;
                            f.wsep = 6 * f.sc;
                            b = nsep / gsc;
                            f.wsep < b && (f.wsep = b);
                            f.sep = f.wsep;
                            snl(f)
                        } else
                            for (b = 1 == b[c], x = snakes.length - 1; 0 <= x; x--)
                                if (snakes[x].id == t) {
                                    snakes[x].id = -1234;
                                    b ? (snakes[x].dead = !0, snakes[x].dead_amt = 0, snakes[x].edir = 0) : snakes.splice(x, 1);
                                    delete os["s" + t];
                                    break
                                }
                } else if ("F" == h)
                    if (4 <= protocol_version)
                        for (h = !1; c < f;) x = b[c], c++, e =
                            b[c] << 8 | b[c + 1], c += 2, D = b[c] << 8 | b[c + 1], c += 2, q = b[c] / 5, c++, t = D * grd * 3 + e, q = newFood(t, e, D, q, !0, x), h || (h = !0, u = Math.floor(e / sector_size), C = Math.floor(D / sector_size)), q.sx = u, q.sy = C;
                    else
                        for (u = b[c] << 8 | b[c + 1], c += 2, C = b[c] << 8 | b[c + 1], c += 2; c < f;) t = b[c] << 16 | b[c + 1] << 8 | b[c + 2], c += 3, x = b[c], c++, e = sector_size * (u + b[c] / 255), c++, D = sector_size * (C + b[c] / 255), c++, q = b[c] / 5, c++, q = newFood(t, e, D, q, !0, x), q.sx = u, q.sy = C;
                else if ("b" == h || "f" == h) 4 <= protocol_version ? (x = b[c], c++, 4 < q && (e = b[c] << 8 | b[c + 1], c += 2, D = b[c] << 8 | b[c + 1], t = D * grd * 3 + e, q = b[c +
                    2] / 5, q = newFood(t, e, D, q, "b" == h, x), q.sx = Math.floor(e / sector_size), q.sy = Math.floor(D / sector_size))) : (t = b[c] << 16 | b[c + 1] << 8 | b[c + 2], c += 3, 4 < q && (x = b[c], c++, u = b[c] << 8 | b[c + 1], c += 2, C = b[c] << 8 | b[c + 1], c += 2, e = sector_size * (u + b[c] / 255), c++, D = sector_size * (C + b[c] / 255), c++, q = b[c] / 5, q = newFood(t, e, D, q, "b" == h, x), q.sx = u, q.sy = C));
                else if ("c" == h) {
                    4 <= protocol_version ? (e = b[c] << 8 | b[c + 1], c += 2, D = b[c] << 8 | b[c + 1], c += 2, t = D * grd * 3 + e) : (t = b[c] << 16 | b[c + 1] << 8 | b[c + 2], c += 3);
                    for (x = cm1 = foods_c - 1; 0 <= x; x--)
                        if (q = foods[x], q.id == t) {
                            q.eaten = !0;
                            c +
                                2 <= f ? (b = b[c] << 8 | b[c + 1], q.eaten_by = os["s" + b], q.eaten_fr = 0) : (x == cm1 ? foods[x] = null : (foods[x] = foods[cm1], foods[cm1] = null), foods_c--, cm1--);
                            t = -1;
                            break
                        }
                    testing && -1 != t && console.log("wtf")
                } else if ("j" == h) {
                    t = b[c] << 8 | b[c + 1];
                    c += 2;
                    e = 1 + 3 * (b[c] << 8 | b[c + 1]);
                    c += 2;
                    D = 1 + 3 * (b[c] << 8 | b[c + 1]);
                    c += 2;
                    f = null;
                    for (x = preys.length - 1; 0 <= x; x--)
                        if (preys[x].id == t) {
                            f = preys[x];
                            break
                        }
                    if (f) {
                        t = etm / 8 * f.sp / 4;
                        t *= lag_mult;
                        h = f.xx;
                        x = f.yy;
                        15 == q ? (f.dir = b[c] - 48, c++, f.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3, f.wang = 2 * (b[c] << 16 | b[c +
                            1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3, f.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 11 == q ? (f.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3, f.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 12 == q ? (f.dir = b[c] - 48, c++, f.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3, f.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 13 == q ? (f.dir = b[c] - 48, c++, f.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3, f.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 9 == q ? f.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215 : 10 == q ? (f.dir = b[c] - 48, c++, f.wang = 2 * (b[c] <<
                            16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 8 == q && (f.sp = (b[c] << 8 | b[c + 1]) / 1E3);
                        f.xx = e + Math.cos(f.ang) * t;
                        f.yy = D + Math.sin(f.ang) * t;
                        b = f.xx - h;
                        c = f.yy - x;
                        t = f.fpos;
                        for (q = 0; q < rfc; q++) f.fxs[t] -= b * rfas[q], f.fys[t] -= c * rfas[q], t++, t >= rfc && (t = 0);
                        f.fx = f.fxs[f.fpos];
                        f.fy = f.fys[f.fpos];
                        f.ftg = rfc
                    }
                } else if ("y" == h)
                    if (t = b[c] << 8 | b[c + 1], c += 2, 2 == q)
                        for (x = preys.length - 1; 0 <= x; x--) {
                            if (f = preys[x], f.id == t) {
                                preys.splice(x, 1);
                                break
                            }
                        } else if (4 == q)
                            for (b = b[c] << 8 | b[c + 1], x = preys.length - 1; 0 <= x; x--) {
                                if (f = preys[x], f.id == t) {
                                    f.eaten = !0;
                                    f.eaten_by =
                                        os["s" + b];
                                    f.eaten_by ? f.eaten_fr = 0 : preys.splice(x, 1);
                                    break
                                }
                            } else x = b[c], c++, e = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5, c += 3, D = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5, c += 3, q = b[c] / 5, c++, u = b[c] - 48, c++, I = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3, z = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215, c += 3, M = (b[c] << 8 | b[c + 1]) / 1E3, newPrey(t, e, D, q, x, u, I, z, M)
            }
        };
        ws.onerror = function(b) {};
        ws.onclose = function(b) {
            ws == this && (playing = connected = !1)
        };
        ws.onopen = function(b) {
            if (ws == this) {
                b = asciize(nick.value);
                24 < b.length && (b = b.substr(0,
                    24));
                my_nick = b;
                gdnm(b) || (b = "");
                var c = Math.floor(9 * Math.random());
                try {
                    var e = localStorage.snakercv;
                    e == "" + Number(e) && (c = Number(e))
                } catch (f) {}
                e = new Uint8Array(3 + b.length);
                e[0] = 115;
                e[1] = 7;
                e[2] = c;
                for (c = 0; c < b.length; c++) e[c + 3] = b.charCodeAt(c);
                ws.send(e);
                high_quality = !0;
                gla = 1;
                wdfg = 0;
                qsm = 1;
                0 == want_quality && (high_quality = !1, gla = 0, qsm = 1.7);
                1 == render_mode && (high_quality = !1, gla = 0);
                lpstm = Date.now()
            }
        }
    }
}

function asciize(b) {
    var f, c, h;
    c = b.length;
    var u = !1;
    for (f = 0; f < c; f++)
        if (h = b.charCodeAt(f), 32 > h || 127 < h) {
            u = !0;
            break
        }
    if (u) {
        u = "";
        for (f = 0; f < c; f++) h = b.charCodeAt(f), u = 32 > h || 127 < h ? u + " " : u + String.fromCharCode(h);
        return u
    }
    return b
}
var smh = document.getElementById("smh"),
    cstx = document.getElementById("cstx");
cstx.src = "FR" == country ? "/s/customskins-fr.png" : "BR" == country ? "/s/customskins-br.png" : "/s/customskins2.png";
try {
    "1" != localStorage.edttsg && (cstx.style.display = "inline")
} catch (b) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() {
    localStorage.edttsg = "1"
};
var fbh = document.getElementById("fbh"),
    twt = document.getElementById("twt");
twt.onclick = function() {
    localStorage.edttsg = "1"
};
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth"),
    csk = document.getElementById("csk"),
    cskh = document.getElementById("cskh"),
    want_quality = 1,
    grq = document.getElementById("grq"),
    grqh = document.getElementById("grqh"),
    phqi = document.createElement("img"),
    grqi = document.getElementById("grqi");
try {
    "0" == localStorage.qual ? (grqi.src = "/s/lowquality.png", want_quality = 0) : (phqi.src = "/s/lowquality.png", want_quality = 1)
} catch (b) {}
grq.onclick = function() {
    try {
        "0" == localStorage.qual ? (localStorage.qual = "1", grqi.src = "/s/highquality.png", want_quality = 1) : (localStorage.qual = "0", grqi.src = "/s/lowquality.png", want_quality = 0)
    } catch (b) {}
    return !1
};
var plq = document.getElementById("plq"),
    clq = document.getElementById("clq");
try {
    "1" == localStorage.edttsg && (cskh.style.display = "inline")
} catch (b) {}
var psk = document.getElementById("psk"),
    pskh = document.getElementById("pskh"),
    nsk = document.getElementById("nsk"),
    nskh = document.getElementById("nskh"),
    choosing_skin = !1;
psk.onclick = function() {
    if (playing && null != snake) {
        var b = snake.rcv;
        b--;
        0 > b && (b = max_skin_cv);
        setSkin(snake, b)
    }
    return !1
};
nsk.onclick = function() {
    if (playing && null != snake) {
        var b = snake.rcv;
        b++;
        b > max_skin_cv && (b = 0);
        setSkin(snake, b)
    }
    return !1
};
csk.onclick = function() {
    if (!playing && -1 == dead_mtm) {
        resetGame();
        choosing_skin = !0;
        pskh.style.opacity = 0;
        nskh.style.opacity = 0;
        skodiv.style.opacity = 0;
        pskh.style.display = "inline";
        nskh.style.display = "inline";
        skodiv.style.display = "inline";
        skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
        nick.disabled = !0;
        0 == mscps && setMscps(300);
        for (var b = [], f = 22; 1 <= f; f--) b.push({
            xx: grd / 2 - 10 * f,
            yy: grd / 2,
            fx: 0,
            fy: 0,
            exs: [],
            eys: [],
            efs: [],
            ems: [],
            eiu: 0,
            da: 0,
            ebx: 10,
            eby: 0
        });
        f = 0;
        try {
            var c = localStorage.snakercv;
            c == "" + Number(c) &&
                (f = Number(c))
        } catch (h) {}
        b = newSnake(1, grd / 2, grd / 2, f, 0, b);
        view_xx = grd / 2 - 105;
        view_yy = grd / 2;
        snake = b;
        b.nk = "";
        b.eang = b.wang = b.ang;
        b.sp = 4.8;
        b.spang = b.sp / spangdv;
        1 < b.spang && (b.spang = 1);
        b.sc = 1;
        b.scang = 1;
        b.ssp = nsp1 + nsp2 * b.sc;
        b.fsp = b.ssp + .1;
        b.wsep = 6 * b.sc;
        c = nsep / gsc;
        b.wsep < c && (b.wsep = c);
        b.sep = b.wsep;
        snl(b);
        b.alive_amt = 1;
        b.rex = 1.66;
        ws = {
            send: function(b) {},
            close: function() {}
        };
        high_quality = playing = connected = !0;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        startShowGame();
        lbh.style.display = "none";
        lbs.style.display = "none";
        lbn.style.display =
            "none";
        lbp.style.display = "none";
        lbf.style.display = "none";
        vcm.style.display = "none";
        loch.style.display = "none"
    }
    return !1
};
nick.oninput = function() {
    var b = this.value,
        f = asciize(b);
    24 < f.length && (f = f.substr(0, 24));
    b != f && (this.value = f)
};
victory.oninput = function() {
    var b = this.value,
        f = asciize(b);
    140 < f.length && (f = f.substr(0, 140));
    b != f && (this.value = f)
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas"),
    lmc = document.createElement("canvas"),
    lgsc = 1,
    lw = 900,
    lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d"),
    lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
    pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
    kc: 22,
    ws: 4,
    wr: .025,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [150, 30, 150, 107, 150, 184],
    kc: 66,
    ws: 4,
    wr: .05,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [207, 96, 207, 140, 207, 184],
    kc: 46,
    ws: 4,
    wr: .03,
    qm: .035,
    sp: .06,
    sz: 11
}, {
    pts: [207, 47, 207, 48.5, 207, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15,
    r: .5
}, {
    pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
    kc: 66,
    ws: 6,
    wr: -.025,
    qm: -.0125,
    sp: .06,
    sz: 11,
    r: 1.5
}, {
    pts: [243, 94, 268, 94, 293, 94],
    kc: 66,
    ws: 4,
    wr: .015,
    qm: .025,
    sp: .06,
    sz: 9,
    r: 1.2
}, {
    pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
    kc: 46,
    ws: 4,
    wr: .005,
    qm: .02,
    sp: .06,
    sz: 11,
    r: 2.1
}, {
    pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
    kc: 35,
    ws: 6,
    wr: -.013,
    qm: -.025,
    sp: .06,
    sz: 11,
    r: 1.3
}, {
    pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
    kc: 38,
    ws: 4,
    wr: .01,
    qm: -.035,
    sp: .06,
    sz: 11
}, {
    pts: [663, 177, 663, 178.5, 663, 180],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [717,
        96, 717, 140, 717, 184
    ],
    kc: 33,
    ws: 4,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 11
}, {
    pts: [717, 47, 717, 48.5, 717, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
    kc: 43,
    ws: 4,
    wr: 0,
    qm: .0274,
    sp: .073,
    sz: 11,
    r: 1.5
});
for (i = 0; i < lts.length; i++) lts[i].mwig = 5;
var lga = 0,
    lgss = 0,
    ncka = 0,
    mwig = 4,
    lgfr = 0,
    lgtm = Date.now();

function showLogo(b) {
    var f = Date.now(),
        c = (f - lgtm) / 25;
    lgtm = f;
    var h, u, q, e, w, E, y, B, G, F, t, A, z, I, M;
    lgfr += c;
    if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka) clearInterval(showlogo_iv), showlogo_iv = -1;
    else {
        if (b || 1 != lga) lga += .05 * c, 1 <= lga && (lga = 1), lmc2.style.opacity = lga;
        1 != lgss && (lgss += .00375 * c, 1 <= lgss && (lgss = 1));
        if (b || 1 != ncka) ncka += .006 * c, 1 <= ncka && (ncka = 1), nick_holder.style.opacity = Math.min(1, 6 * ncka), is_mobile || (smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)))), .01 <= ncka && (playh.style.opacity = Math.min(1,
            5 * (ncka - .01)));
        lctx.clearRect(0, 0, lw, lh);
        for (f = 0; f < lts.length; f++) {
            var x = lts[f],
                C = x.pts,
                H = x.kc,
                K = x.ws,
                N = x.wr,
                D = x.qm;
            h = x.sp;
            var O = x.sz;
            M = x.r;
            var L = x.mwig;
            b && (x.wch = !0, L = 1E-7);
            x.wch && 0 != L && (L *= .982, L -= .001 * c, 1 == render_mode && (L -= .005 * c), 0 >= L && (L = 0), x.mwig = L);
            M || (M = 1);
            lctx.beginPath();
            9 > f ? (q = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc), q.addColorStop(0, "#80FFA0"), q.addColorStop(1, "#008040")) : (q = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc), q.addColorStop(0, "#9850FF"), q.addColorStop(1, "#281060"));
            lctx.fillStyle =
                q;
            z = !1;
            I = 0;
            q = C[0];
            e = C[1];
            G = q;
            F = e;
            var J = lgfr * h;
            for (t = 2; t < C.length; t += 4) {
                h = q;
                u = e;
                cx2 = C[t];
                cy2 = C[t + 1];
                q = C[t + 2];
                e = C[t + 3];
                for (var Q = 1; Q <= H; Q++) {
                    I++;
                    var P = Q / H;
                    w = h + (cx2 - h) * P;
                    E = u + (cy2 - u) * P;
                    y = cx2 + (q - cx2) * P;
                    B = cy2 + (e - cy2) * P;
                    w += (y - w) * P;
                    E += (B - E) * P;
                    G = Math.atan2(E - F, w - G);
                    z ? (G - A > Math.PI ? G -= 2 * Math.PI : G - A < -Math.PI && (G += 2 * Math.PI), A += .05 * (G - A), A %= 2 * Math.PI) : (z = !0, A = G);
                    G = w;
                    F = E;
                    w += Math.cos(Math.PI / 2 + A) * Math.sin(J) * K * L;
                    E += Math.sin(Math.PI / 2 + A) * Math.sin(J) * K * L;
                    J -= .76 * D * K;
                    K += N;
                    lctx.beginPath();
                    B = 1.15 * O * Math.min(1, lgsc * (.2 +
                        .8 * lga) * (30 * lgss * M - I / 20 - f / 2));.5 < B && (lctx.arc(w * lgsc, E * lgsc, B, 0, pi2), x.wch = !0);
                    lctx.fill()
                }
            }
        }
        lctx2.clearRect(0, 0, lw, lh);
        lctx2.shadowColor = "#000000";
        lctx2.shadowBlur = 16;
        lctx2.shadowOffsetY = 7;
        lctx2.drawImage(lmc, 0, 0)
    }
}
var showlogo_iv = -1;
is_safari || is_mobile ? (ncka = lgss = lga = 1, showLogo(!0)) : showlogo_iv = setInterval(function() {
    showLogo(!1)
}, 25);
document.onkeydown = function(b) {
    b = b || window.event;
    var f = b.keyCode;
    if (37 == f) kd_l = !0;
    else if (39 == f) kd_r = !0;
    else if (38 == f || 32 == f) kd_u = !0, setAcceleration(1);
    else if (13 == f || 10 == f)
        if (want_victory_message) {
            if (0 < victory.value.length) save_btn.elem.onclick()
        } else {
            if (!connecting && !connected) play_btn.elem.onclick()
        } else 16 == f && testing && (shifty = !0);
    testing && console.log("keydown: " + b.keyCode)
};
document.onkeyup = function(b) {
    b = b || window.event;
    b = b.keyCode;
    37 == b ? kd_l = !1 : 39 == b ? kd_r = !1 : 38 == b || 32 == b ? (kd_u = !1, setAcceleration(0)) : 16 == b && testing && (shifty = !1)
};

function loadSos(b) {
    if (!forcing && 0 < b.length) {
        sos = [];
        clus = [];
        b.charAt(0);
        for (var f = 1, c = {}, h = 0, c = h = 0, u, q = 0, e = 0, w = [], E = [], y = [], B = []; f < b.length;)
            if (u = (b.charCodeAt(f++) - 97 - e) % 26, 0 > u && (u += 26), q *= 16, q += u, e += 7, 1 == c) {
                if (0 == h) w.push(q), 4 == w.length && h++;
                else if (1 == h) E.push(q), 3 == E.length && h++;
                else if (2 == h) y.push(q), 3 == y.length && h++;
                else if (3 == h && (B.push(q), 1 == B.length)) {
                    c = {};
                    for (h = u = 0; h < E.length; h++) u *= 256, u += E[h];
                    for (h = E = 0; h < y.length; h++) E *= 256, E += y[h];
                    c.ip = w.join(".");
                    c.po = u;
                    c.ac = E;
                    c.wg = E + 5;
                    c.clu = B[0];
                    clus[c.clu] ?
                        w = clus[c.clu] : (w = {}, clus[c.clu] = w, w.sis = [], w.ptms = [], w.swg = 0, w.tac = 0, w.sos = []);
                    c.cluo = w;
                    w.swg += c.wg;
                    w.sos.push(c);
                    w.tac += E;
                    sos.push(c);
                    w = [];
                    E = [];
                    y = [];
                    B = [];
                    h = 0
                }
                c = q = 0
            } else c++;
        for (f = sos.length - 1; 0 <= f; f--)
            if (c = 1, w = sos[f].cluo) {
                for (h = w.sis.length - 1; 0 <= h; h--)
                    if (w.sis[h].ip == sos[f].ip) {
                        c = 0;
                        break
                    }
                1 == c && w.sis.push({
                    ip: sos[f].ip
                })
            }
        for (f = clus.length - 1; 0 <= f; f--)
            if ((w = clus[f]) && 0 < w.sis.length) {
                h = Math.floor(Math.random() * w.sis.length);
                b = w.sis[h].ip;
                e = null;
                try {
                    e = new WebSocket("ws://" + b + ":80/ptc")
                } catch (G) {
                    e = null
                }
                e &&
                    (e.binaryType = "arraybuffer", e.onerror = function(b) {}, e.onmessage = function(b) {
                        b = new Uint8Array(b.data);
                        if (1 == b.length && 112 == b[0])
                            for (b = clus.length - 1; 0 <= b; b--) {
                                var c = clus[b];
                                if (c && c.ps == this) {
                                    var e = Date.now() - c.stm;
                                    testing && console.log(" ping time for cluster " + b + ": " + e);
                                    c.ptms.push(e);
                                    4 > c.ptms.length ? (c.stm = Date.now(), b = new Uint8Array(1), b[0] = 112, this.send(b)) : (waiting_for_sos && -1 == sos_ready_after_mtm && (sos_ready_after_mtm = Date.now() + 2E3), this.close(), c.ps = null);
                                    break
                                }
                            }
                    }, e.onopen = function(b) {
                        b = !1;
                        for (var c =
                                clus.length - 1; 0 <= c; c--) {
                            var e = clus[c];
                            if (e && e.ps == this) {
                                e.stm = Date.now();
                                b = new Uint8Array(1);
                                b[0] = 112;
                                this.send(b);
                                b = !0;
                                break
                            }
                        }
                        b || this.close()
                    }, w.ps = e)
            }
    }
}
var mba = null,
    mbi = null;
if (is_ios || is_android) mba = document.createElement("a"), mbi = document.createElement("img"), mbi.border = 0, mbi.draggable = "false", mbi.className = "nsi", mbi.width = 1245, mbi.height = 260, mbi.style.position = "fixed", mbi.style.left = "0px", mbi.style.bottom = "0px", mbi.style.zIndex = 70, mbi.src = "/s/n2.jpg", mba.appendChild(mbi), document.body.appendChild(mba), is_ios ? mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : is_android && (mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" :
    "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither");
resize();
o = {
    f: function(b, f, c) {
        "success" == f && loadSos(b)
    }
};
getData("/i33628.txt", o);