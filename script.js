WebFont.load({
    google: {
        families: ["Inter Tight:300,regular,500,300italic,italic,500italic"]
    }
});

!function(o, c) {
    var n = c.documentElement
      , t = " w-mod-";
    n.className += t + "js",
    ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);
