!function(){var t,a,e,n=(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirebca3)("2rDnt"),s={};t=function(t){var a=function(a,e,n){var s={invalid:[],getCaret:function(){try{var t,e=0,n=a.get(0),r=document.selection,o=n.selectionStart;return r&&-1===navigator.appVersion.indexOf("MSIE 10")?((t=r.createRange()).moveStart("character",-s.val().length),e=t.text.length):(o||"0"===o)&&(e=o),e}catch(t){}},setCaret:function(t){try{if(a.is(":focus")){var e,n=a.get(0);n.setSelectionRange?n.setSelectionRange(t,t):((e=n.createTextRange()).collapse(!0),e.moveEnd("character",t),e.moveStart("character",t),e.select())}}catch(t){}},events:function(){a.on("keydown.mask",(function(t){a.data("mask-keycode",t.keyCode||t.which),a.data("mask-previus-value",a.val()),a.data("mask-previus-caret-pos",s.getCaret()),s.maskDigitPosMapOld=s.maskDigitPosMap})).on(t.jMaskGlobals.useInput?"input.mask":"keyup.mask",s.behaviour).on("paste.mask drop.mask",(function(){setTimeout((function(){a.keydown().keyup()}),100)})).on("change.mask",(function(){a.data("changed",!0)})).on("blur.mask",(function(){i===s.val()||a.data("changed")||a.trigger("change"),a.data("changed",!1)})).on("blur.mask",(function(){i=s.val()})).on("focus.mask",(function(a){!0===n.selectOnFocus&&t(a.target).select()})).on("focusout.mask",(function(){n.clearIfNotMatch&&!r.test(s.val())&&s.val("")}))},getRegexMask:function(){for(var t,a,n,s,r,i,l=[],c=0;c<e.length;c++)(t=o.translation[e.charAt(c)])?(a=t.pattern.toString().replace(/.{1}$|^.{1}/g,""),n=t.optional,(s=t.recursive)?(l.push(e.charAt(c)),r={digit:e.charAt(c),pattern:a}):l.push(n||s?a+"?":a)):l.push(e.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return i=l.join(""),r&&(i=i.replace(new RegExp("("+r.digit+"(.*"+r.digit+")?)"),"($1)?").replace(new RegExp(r.digit,"g"),r.pattern)),new RegExp(i)},destroyEvents:function(){a.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(t){var e,n=a.is("input"),s=n?"val":"text";return arguments.length>0?(a[s]()!==t&&a[s](t),e=a):e=a[s](),e},calculateCaretPosition:function(t){var e=s.getMasked(),n=s.getCaret();if(t!==e){var r=a.data("mask-previus-caret-pos")||0,o=e.length,i=t.length,l=0,c=0,u=0,f=0,k=0;for(k=n;k<o&&s.maskDigitPosMap[k];k++)c++;for(k=n-1;k>=0&&s.maskDigitPosMap[k];k--)l++;for(k=n-1;k>=0;k--)s.maskDigitPosMap[k]&&u++;for(k=r-1;k>=0;k--)s.maskDigitPosMapOld[k]&&f++;if(n>i)n=10*o;else if(r>=n&&r!==i){if(!s.maskDigitPosMapOld[n]){var d=n;n-=f-u,n-=l,s.maskDigitPosMap[n]&&(n=d)}}else n>r&&(n+=u-f,n+=c)}return n},behaviour:function(e){e=e||window.event,s.invalid=[];var n=a.data("mask-keycode");if(-1===t.inArray(n,o.byPassKeys)){var r=s.getMasked(),i=s.getCaret(),l=a.data("mask-previus-value")||"";return setTimeout((function(){s.setCaret(s.calculateCaretPosition(l))}),t.jMaskGlobals.keyStrokeCompensation),s.val(r),s.setCaret(i),s.callbacks(e)}},getMasked:function(t,a){var r,i,l,c=[],u=void 0===a?s.val():a+"",f=0,k=e.length,d=0,p=u.length,h=1,v="push",g=-1,m=0,M=[];for(n.reverse?(v="unshift",h=-1,r=0,f=k-1,d=p-1,i=function(){return f>-1&&d>-1}):(r=k-1,i=function(){return f<k&&d<p});i();){var y=e.charAt(f),b=u.charAt(d),w=o.translation[y];w?(b.match(w.pattern)?(c[v](b),w.recursive&&(-1===g?g=f:f===r&&f!==g&&(f=g-h),r===g&&(f-=h)),f+=h):b===l?(m--,l=void 0):w.optional?(f+=h,d-=h):w.fallback?(c[v](w.fallback),f+=h,d-=h):s.invalid.push({p:d,v:b,e:w.pattern}),d+=h):(t||c[v](y),b===y?(M.push(d),d+=h):(l=y,M.push(d+m),m++),f+=h)}var C=e.charAt(r);k!==p+1||o.translation[C]||c.push(C);var j=c.join("");return s.mapMaskdigitPositions(j,M,p),j},mapMaskdigitPositions:function(t,a,e){var r=n.reverse?t.length-e:0;s.maskDigitPosMap={};for(var o=0;o<a.length;o++)s.maskDigitPosMap[a[o]+r]=1},callbacks:function(t){var r=s.val(),o=r!==i,l=[r,t,a,n],c=function(t,a,e){"function"==typeof n[t]&&a&&n[t].apply(this,e)};c("onChange",!0===o,l),c("onKeyPress",!0===o,l),c("onComplete",r.length===e.length,l),c("onInvalid",s.invalid.length>0,[r,t,a,s.invalid,n])}};a=t(a);var r,o=this,i=s.val();e="function"==typeof e?e(s.val(),void 0,a,n):e,o.mask=e,o.options=n,o.remove=function(){var t=s.getCaret();return o.options.placeholder&&a.removeAttr("placeholder"),a.data("mask-maxlength")&&a.removeAttr("maxlength"),s.destroyEvents(),s.val(o.getCleanVal()),s.setCaret(t),a},o.getCleanVal=function(){return s.getMasked(!0)},o.getMaskedVal=function(t){return s.getMasked(!1,t)},o.init=function(i){if(i=i||!1,n=n||{},o.clearIfNotMatch=t.jMaskGlobals.clearIfNotMatch,o.byPassKeys=t.jMaskGlobals.byPassKeys,o.translation=t.extend({},t.jMaskGlobals.translation,n.translation),o=t.extend(!0,{},o,n),r=s.getRegexMask(),i)s.events(),s.val(s.getMasked());else{n.placeholder&&a.attr("placeholder",n.placeholder),a.data("mask")&&a.attr("autocomplete","off");for(var l=0,c=!0;l<e.length;l++){var u=o.translation[e.charAt(l)];if(u&&u.recursive){c=!1;break}}c&&a.attr("maxlength",e.length).data("mask-maxlength",!0),s.destroyEvents(),s.events();var f=s.getCaret();s.val(s.getMasked()),s.setCaret(f)}},o.init(!a.is("input"))};t.maskWatchers={};var e=function(){var e=t(this),s={},r="data-mask-",o=e.attr("data-mask");if(e.attr(r+"reverse")&&(s.reverse=!0),e.attr(r+"clearifnotmatch")&&(s.clearIfNotMatch=!0),"true"===e.attr(r+"selectonfocus")&&(s.selectOnFocus=!0),n(e,o,s))return e.data("mask",new a(this,o,s))},n=function(a,e,n){n=n||{};var s=t(a).data("mask"),r=JSON.stringify,o=t(a).val()||t(a).text();try{return"function"==typeof e&&(e=e(o)),"object"!=typeof s||r(s.options)!==r(n)||s.mask!==e}catch(t){}};t.fn.mask=function(e,s){s=s||{};var r=this.selector,o=t.jMaskGlobals,i=o.watchInterval,l=s.watchInputs||o.watchInputs,c=function(){if(n(this,e,s))return t(this).data("mask",new a(this,e,s))};return t(this).each(c),r&&""!==r&&l&&(clearInterval(t.maskWatchers[r]),t.maskWatchers[r]=setInterval((function(){t(document).find(r).each(c)}),i)),this},t.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},t.fn.unmask=function(){return clearInterval(t.maskWatchers[this.selector]),delete t.maskWatchers[this.selector],this.each((function(){var a=t(this).data("mask");a&&a.remove().removeData("mask")}))},t.fn.cleanVal=function(){return this.data("mask").getCleanVal()},t.applyDataMask=function(a){((a=a||t.jMaskGlobals.maskElements)instanceof t?a:t(a)).filter(t.jMaskGlobals.dataMaskAttr).each(e)};var s,r,o,i={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&(s="input",o=document.createElement("div"),(r=(s="on"+s)in o)||(o.setAttribute(s,"return;"),r="function"==typeof o[s]),o=null,r),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};t.jMaskGlobals=t.jMaskGlobals||{},(i=t.jMaskGlobals=t.extend(!0,{},i,t.jMaskGlobals)).dataMask&&t.applyDataMask(),setInterval((function(){t.jMaskGlobals.watchDataMask&&t.applyDataMask()}),i.watchInterval)},a=window.jQuery,e=window.Zepto,"object"==typeof s&&"undefined"==typeof Meteor?s=t(n()):t(a||e)}();
//# sourceMappingURL=index.38b321cd.js.map
