!function(t,n,r){var e,a="1.2.5",i="//auto.alicdn.com/up/kirov/",o=864e5,u=10,c="//pointman.alibaba.com/",f=c+"pointman",v=c+"csp",s=!!t.addEventListener,p=n.head||n.getElementsByTagName("head")[0];!function(t){function r(t){return"string"==typeof t}function e(t){return"function"==typeof t}function a(t,n){for(var r=0,e=t.length;e>r&&n(t[r],r)!==!1;r++);}function i(t,n){for(var r=[],e=0,a=t.length;a>e;e++)r[e]=n(t[e]);return r}function o(t,n){for(var r=0,e=t.length;e>r;r++)if(t[r]===n)return r;return-1}function u(t,n){for(var r in t)k.call(t,r)&&n(t[r],r)}function c(t,n,r){s?t.addEventListener(n,r):t.attachEvent("on"+n,r)}function f(t,n,r){s?t.removeEventListener(n,r):t.detachEvent("on"+n,r)}function v(t,n,r){if(!t)return!1;var e=t[n];if(!e)return!1;var a=r(e);return s||(a._str=e+""),a._raw=e,t[n]=a,!0}function l(t,n){var r=t[n];t[n]=r._raw}function d(t){if(!t||t==n)return"";var e=t.tagName,a=t.id;r(a)&&a&&(e+="#"+a);var i=t.className;"string"==typeof i&&(i=i.split(/\s/)[0],i&&(e+="."+i));var o=d(t.parentNode);return o?o+">"+e:e}function h(t){var n=t.tagName;if("LINK"==n)return t.getAttribute("href");if("OBJECT"!=n)return t.getAttribute("src");var r=t;if(r.data)return t.getAttribute("data");var e,i=r.getElementsByTagName("PARAM");return a(i,function(t){var n=t.getAttribute("name");return n&&/^(src|movie)$/i.test(n)?(e=t.getAttribute("value"),!1):void 0}),e}function m(t,r){if(r)n.write('<script src="'+t+'"></script>');else{var e=n.createElement("script");e.src=t,p.appendChild(e)}}function g(t){var n;try{throw new Error("")}catch(r){n=r.stack}if(!n)return"";var e=n.split("\n");/Error/.test(e[0])&&e.shift(),e=e.slice(t+1);var a=location.href,o=a.split(location.pathname)[0];return e=i(e,function(t){return t.replace(/^@|^\s*at\s*/,"").replace(a,"ME").replace(o,"")}),e.join("\n").trim()}function y(t){if(t){var n=t.match(j);if(n){var r=n[1];return x.test(r)&&(r=r.split("@").pop().split(":")[0]),r}}}function E(t){return/^(\d+\.)+\d+$/.test(t)}function w(t){if(E(t))return t;var n=R.test(t)?-3:-2,r=t.split(".");return r.slice(n).join(".")}function b(t){var n=[];return u(t,function(t,r){n.push(encodeURIComponent(r)+"="+encodeURIComponent(t))}),n.join("&")}function A(t){var n={};return a(t.split("&"),function(t){var r=t.split("="),e=decodeURIComponent(r[0]),a=decodeURIComponent(r[1]);n[e]=a}),n}function _(t,n,r){var e=i(t,function(t){var e=t.replace(/\W/g,"\\$&");return n&&(e="^"+e),r&&(e+="$"),e});return new RegExp(e.join("|"))}function C(t){var n=4294967295*Math.random()>>>0;return t?n%t:n}function N(t){return Math.random()<t}t.a=r,t.b=e,t.c=Array.isArray||function(t){return t instanceof Array},t.d=a,t.e=i,t.f=o;var k=Object.prototype.hasOwnProperty;t.g=u,t.h=c,t.i=f,t.j=v,v(Function.prototype,"toString",function(t){return function(){return s?t.apply(this._raw||this,arguments):this._str||t.apply(this,arguments)}}),t.k=l,t.l=d,t.m=h,t.n=m,t.o=g;var j=/^\s*(?:https?:)?\/{2,}([^\/\?\#\\]+)/i,x=/[@:]/;t.p=y,t.q=E;var R=/\.com\.cn$|\.com\.hk$/;t.r=w,t.s=b,t.t=A,t.u=_,t.v=Date.now||function(){return+new Date},t.w=C,t.x=N}(e||(e={}));var l;!function(n){function r(){var n;try{n=t.localStorage}catch(r){}return n||{}}function a(t){return c[t]}function i(t,n){try{return c[t]=n,!0}catch(r){return!1}}function o(t){try{return delete c[t],!0}catch(n){return!1}}function u(t){e.g(c,t)}var c=r();n.y=a,n.z=i,n.A=o,n.B=u}(l||(l={}));var d;!function(t){function n(t){l.z(p+t,e.v()+"")}function r(t){var n=+l.y(p+t);return n>0}function i(){var t=e.v();l.B(function(n,r){if(d.test(r)){var e=t-+n;(e>o||0>e)&&l.A(r)}})}function c(t){e.n(t)}function v(t){return r(t)?void 0:(n(t),!0)}function s(t){if(u!=h++){t.app=y.D("app"),t.ver=a;var n=y.D("args");n&&(t.ext_arg=n);var r=location.hash;r&&(t.url_hash=r.substr(1)),c(f+"?"+e.s(t))}}var p="__R_",d=/^__R_/,h=0;i(),t.C=v,t.F=s}(d||(d={}));var h;!function(r){function a(){for(var t=a;t.caller;)t=t.caller;return t.arguments[0]}function i(r,i){var o=n.currentScript;if(!o){var u=t.event||a();u&&(o=u.target||u.srcElement)}o&&!o.tagName&&(o=null);var c=2,f=e.o(c),v=e.l(o),s=f||v||i;if(d.C("DLG_"+s)){var p={type:"winfun",keyword:r,code:i.substr(0,200),stack:f.substr(0,1e3),path:v};d.F(p)}}function o(t){var r=n.cookie;return r&&t.indexOf(r)>=0&&(t="cookie"),v.test(t)?t:""}function u(n){function r(t){return function(r,e){var a=o(r+"");return a&&i(n,a),"apply"in t?t.apply(this,arguments):null==e?t(r):t(r,e)}}var a=t.Window;if(a){var u=a.prototype;u&&n in u&&e.j(u,n,r)}Object.prototype.hasOwnProperty.call(t,n)&&e.j(t,n,r)}function c(){u("alert"),u("confirm"),u("prompt"),u("print")}function f(t){v=t.warning,v&&c()}var v;r.G=f}(h||(h={}));var m;!function(t){"use strict";function r(t,n,r){var a=e.l(r);d.C("ON_"+a)&&d.F({type:"onevent",keyword:n,code:t.substr(0,200),path:a})}function a(t,n){for(var r=t.length,a=0;n>a;a++){var i=a+e.w(r-a),o=t[a];t[a]=t[i],t[i]=o}}function i(t){if(!t)return[];var n=t.fix,r=t.opt;if(!e.c(n)||!e.c(r))return[];var i=r.length;return i>0&&(i=e.w(i),a(r,i),n=n.concat(r.slice(0,i))),n}function o(t){}function u(t){if(!t)return o;var n,r=+t.limit||0,a=i(t.key);return a&&a.length>0&&(n=e.u(a)),function(t){return r>0&&t.length>r?!0:n&&n.test(t)?!0:!1}}function c(t,n,e){var a=t._k;a||(a=t._k=++w);var i=a<<8|e;if(!(i in E)&&(E[i]=!0,1==t.nodeType)){if(t[n]){var o=t.getAttribute(n);o&&(g(o)&&r(o,n,t),y(o)&&(t[n]=null))}if("onclick"==n&&"A"==t.tagName){var u=t;if(/script/.test(u.protocol)){var o=u.href.split(":")[1];g(o)&&r(o,"href",t),y(o)&&(u.href="javascript:void(0)")}}var f=t.parentElement;f&&c(f,n,e)}}function f(t,r){n.addEventListener(t.substr(2),function(n){c(n.target,t,r)},!0)}function v(){var t=n.querySelectorAll(m);e.d(t,function(t){var n=t.attributes;e.d(n,function(n){var r=n.name;if(/^on./.test(r)){var e=b[r];e&&c(t,r,e)}})})}function p(){var t=[],r=1;for(var e in n)/^on./.test(e)&&(f(e,r),b[e]=r,r++,t.push("["+e+"]"));r>1&&(m=t.join(","),setInterval(v,2e3))}function l(t){s&&(h=t,p())}var h,m,g=function(t){return(g=u(h.warn))(t)},y=function(t){return(y=u(h.deny))(t)},E={},w=0,b={};t.G=l}(m||(m={}));var g;!function(t){"use strict";function r(t,n){var r=e.l(t),a=r+"_"+n.split("?")[0];d.C("CSP_"+a)&&d.F({type:"pointman",tag:t.tagName,src:n,path:r})}function a(t){return!w||t in w?!0:!1}function i(t){if(a(t.tagName)){var n=e.m(t);if(n&&!/^data:/.test(n)&&!(n in A)){A[n]=!0;var i=e.p(n);i&&(m(i)||e.x(b)&&r(t,n))}}}function o(){setInterval(function(){e.d(_,function(t){var n=t;e.d(n,i)})},2e3)}function u(t){a(t)&&_.push(n.getElementsByTagName(t))}function c(t){n.addEventListener(t,function(t){i(t.target)},!0)}function f(t){e.d(t,h),u("OBJECT"),u("EMBED"),s?(c("load"),c("error")):(u("SCRIPT"),u("IFRAME"),u("FRAME")),o()}function l(t){for(var n=-1,r=0;n=t.indexOf(".",n+1),-1!=n;)r++;return r}function h(t){if(!e.q(t)){var n=l(t);n>N&&(N=n)}C[t]=!0}function m(t){if(e.q(t))return t in C;for(var n=t.length,r=0;N>=r;r++){n=t.lastIndexOf(".",n-1);var a=t.substr(n+1);if(a in C)return!0;if(-1==n)break}return!1}function g(t,r){var a="";e.d(t,function(t){e.q(t)||(t="*."+t),a+=" http://"+t+" https://"+t});var i="default-src 'self' 'unsafe-inline' 'unsafe-eval' "+r+" data: about: "+a+"; frame-src *; connect-src *";if(e.x(b)){var o=y.D("app");i+="; report-uri "+v+"?app="+o}var u=n.createElement("meta");u.httpEquiv="Content-Security-Policy",u.content=i,p.appendChild(u)}function E(t){var n=t.type;n&&(w={},e.d(n.split(","),function(t){w[t]=!0}));var r=t.trust.split(","),a=location.hostname;r.push(a);var i=e.f(r,"root");if(i>=0&&(r[i]=e.r(a)),b=+t.warn,isNaN(b)&&(b=1),f(r),s){if(/AliApp|WindVane/.test(navigator.userAgent))return;var o=+t.deny||0;if(e.x(o)){var u=t.protocol||"";g(r,u)}}}var w,b,A={},_=[],C={},N=0;t.G=E}(g||(g={}));var y;!function(r){function a(){var t=n.currentScript;if(!t){var r=n.scripts;t=r[r.length-1]}var a=t.src,i=a.split("#")[1]||a.split("?")[1];i&&(f=e.t(i));var o=t.attributes;e.d(o,function(t){f[t.name]=t.value})}function o(t){return f[t]}function u(t){v||(v=!0,e.g(t,function(t,n){var r=+t.sample;if(e.x(r)){var a=s[n];if(a)try{a.G(t.param)}catch(i){}}}))}function c(){a();var r=o("app");if(r){t.Pointman={init:u};var c=i+r+".js",f=!0;"complete"==n.readyState&&(f=!1),e.n(c,f)}}r.H=e.v();var f={};r.D=o;var v,s={dialog:h,inline:m,csp:g};c()}(y||(y={}))}(window,document);