var Slider = function() {
    var e = document.getElementById("ps-container")
      , t = e.children("div.ps-contentwrapper")
      , n = t.children("div.ps-content")
      , r = n.length
      , i = e.children("div.ps-slidewrapper")
      , s = i.find("div.ps-slides")
      , o = s.children("div")
      , u = i.find("nav > a.ps-prev")
      , a = i.find("nav > a.ps-next")
      , f = 0
      , l = false
      , c = Modernizr.csstransitions
      , h = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd",
        transition: "transitionend"
    }
      , p = h[Modernizr.prefixed("transition")]
      , d = function() {
        var e = n.eq(f)
          , t = o.eq(f)
          , r = {
            top: 0,
            zIndex: 999
        };
        e.css(r);
        t.css(r);
        v();
        m()
    }
      , v = function() {
        var e = f > 0 ? o.eq(f - 1).css("background-image") : o.eq(r - 1).css("background-image")
          , t = f < r - 1 ? o.eq(f + 1).css("background-image") : o.eq(0).css("background-image");
        u.css("background-image", e);
        a.css("background-image", t)
    }
      , m = function() {
        u.on("click", function(e) {
            if (!l) {
                y("prev")
            }
            return false
        });
        a.on("click", function(e) {
            if (!l) {
                y("next")
            }
            return false
        });
        n.on(p, g);
        o.on(p, g)
    }
      , g = function() {
        l = false;
        debugger;
        $(this).removeClass("ps-move")
    }
      , y = function(e) {
        l = true;
        var t = n.eq(f)
          , i = o.eq(f);
        if (e === "next") {
            f < r - 1 ? ++f : f = 0
        } else if (e === "prev") {
            f > 0 ? --f : f = r - 1
        }
        var s = n.eq(f)
          , u = o.eq(f);
        s.css({
            top: e === "next" ? "-100%" : "100%",
            zIndex: 999
        });
        u.css({
            top: e === "next" ? "100%" : "-100%",
            zIndex: 999
        });
        setTimeout(function() {
            t.addClass("ps-move").css({
                top: e === "next" ? "100%" : "-100%",
                zIndex: 1
            });
            i.addClass("ps-move").css({
                top: e === "next" ? "-100%" : "100%",
                zIndex: 1
            });
            s.addClass("ps-move").css("top", 0);
            u.addClass("ps-move").css("top", 0);
            if (!c) {
                l = false
            }
        }, 0);
        v()
    };
    return {
        init: d
    }
}();