__b64 = {};
(function (b, c) {
  var a = (function () {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function d(r) {
      if (/([^\u0000-\u00ff])/.test(r)) {
        throw new Error("INVALID_CHARACTER_ERR");
      }
      var q = 0,
        t,
        o,
        p,
        l = [];
      while (q < r.length) {
        o = r.charCodeAt(q);
        p = q % 3;
        switch (p) {
          case 0:
            l.push(g.charAt(o >> 2));
            break;
          case 1:
            l.push(g.charAt(((t & 3) << 4) | (o >> 4)));
            break;
          case 2:
            l.push(g.charAt(((t & 15) << 2) | (o >> 6)));
            l.push(g.charAt(o & 63));
            break;
        }
        t = o;
        q++;
      }
      if (p == 0) {
        l.push(g.charAt((t & 3) << 4));
        l.push("==");
      } else {
        if (p == 1) {
          l.push(g.charAt((t & 15) << 2));
          l.push("=");
        }
      }
      return l.join("");
    }
    function f(q) {
      q = q.replace(/\s|=/g, "");
      var t,
        r,
        p,
        o = 0,
        l = [];
      while (o < q.length) {
        t = g.indexOf(q.charAt(o));
        p = o % 4;
        switch (p) {
          case 0:
            break;
          case 1:
            l.push(String.fromCharCode((r << 2) | (t >> 4)));
            break;
          case 2:
            l.push(String.fromCharCode(((r & 15) << 4) | (t >> 2)));
            break;
          case 3:
            l.push(String.fromCharCode(((r & 3) << 6) | t));
            break;
        }
        r = t;
        o++;
      }
      return l.join("");
    }
    var e = {
      btoa: d,
      atob: f,
      encode: d,
      decode: f,
    };
    return e;
  })();
  if (!b.Base64_3) {
    b.Base64_3 = a;
  }
  if (!b.btoa) {
    b.btoa = a.btoa;
  }
  if (!b.atob) {
    b.atob = a.atob;
  }
})(__b64);
function base64encode(a) {
  return __b64.btoa(a);
}
function base64decode(a) {
  return __b64.atob(a);
}
