var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire8cd6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire8cd6=o);var a=o("bV6rM");window.onload=function(){"true"===localStorage.getItem(a.LOGGED_IN_KEY)&&($("#painel-login").hide(),$("#painel-servicos").fadeIn()),function(){if(null!=localStorage.getItem(a.USERNAME_KEY))return!1;var e={username:a.USERNAME_KEY,password:"qwerty",balance:0,transactions:[]};localStorage.setItem(a.USERNAME_KEY,JSON.stringify(e)),localStorage.setItem(a.TOTAL_COSTS_KEY,0),localStorage.setItem(a.LOGGED_IN_KEY,!1)}();document.getElementById("tax-span").innerText=parseInt(1e4*Math.random()),window.setInterval((function(){let e=document.getElementById("tax-span").innerText;document.getElementById("tax-span").textContent=(parseInt(e)+100*Math.random()).toFixed(2)}),3e3)};
//# sourceMappingURL=index.38ea99a1.js.map