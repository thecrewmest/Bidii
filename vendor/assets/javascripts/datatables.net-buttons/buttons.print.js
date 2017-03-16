(function(d) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function(e) {
            return d(e, window, document)
        }) : "object" === typeof exports ? module.exports = function(e, a) {
                e || (e = window);
                if (!a || !a.fn.dataTable) a = require("datatables.net")(e, a).$;
                a.fn.dataTable.Buttons || require("datatables.net-buttons")(e, a);
                return d(a, e, e.document)
            } : d(jQuery, window, document)
})(function(d, e, a) {
    var i = d.fn.dataTable,
        g = a.createElement("a");
    i.ext.buttons.print = {
        className: "buttons-print",
        text: function(c) {
            return c.i18n("buttons.print", "Print")
        },
        action: function(c, b, a, f) {
            c = b.buttons.exportData(f.exportOptions);
            a = function(c, a) {
                for (var b = "<tr>", d = 0, e = c.length; d < e; d++) b += "<" + a + ">" + c[d] + "</" + a + ">";
                return b + "</tr>"
            };
            b = '<table class="' + b.table().node().className + '">';
            f.header && (b += "<thead>" + a(c.header, "th") + "</thead>");
            for (var b = b + "<tbody>", j = 0, i = c.body.length; j < i; j++) b += a(c.body[j], "td");
            b += "</tbody>";
            f.footer && (b += "<tfoot>" + a(c.footer, "th") + "</tfoot>");
            var h = e.open("", ""),
                c = f.title;
            "function" ===
            typeof c && (c = c()); - 1 !== c.indexOf("*") && (c = c.replace("*", d("title").text()));
            h.document.close();
            var k = "<title>" + c + "</title>";
            d("style, link").each(function() {
                var c = k,
                    b = d(this).clone()[0],
                    a;
                "link" === b.nodeName.toLowerCase() && (g.href = b.href, a = g.host, -1 === a.indexOf("/") && 0 !== g.pathname.indexOf("/") && (a += "/"), b.href = g.protocol + "//" + a + g.pathname + g.search);
                k = c + b.outerHTML
            });
            d(h.document.head).html(k);
            d(h.document.body).html("<h1>" + c + "</h1><div>" + f.message + "</div>" + b);
            f.customize && f.customize(h);
            setTimeout(function() {
                f.autoPrint &&
                (h.print(), h.close())
            }, 250)
        },
        title: "*",
        message: "",
        exportOptions: {},
        header: !0,
        footer: !1,
        autoPrint: !0,
        customize: null
    };
    return i.Buttons
});