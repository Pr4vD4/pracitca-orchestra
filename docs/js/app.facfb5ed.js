(function(){"use strict";var t={3435:function(t,n,e){e(4224),e(1121),e(7133),e(560);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],i={CSS:{},springs:{}};function u(t,n,e){return Math.min(Math.max(t,n),e)}function s(t,n){return t.indexOf(n)>-1}function c(t,n){return t.apply(null,n)}var d={arr:function(t){return Array.isArray(t)},obj:function(t){return s(Object.prototype.toString.call(t),"Object")},pth:function(t){return d.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||d.svg(t)},str:function(t){return"string"===typeof t},fnc:function(t){return"function"===typeof t},und:function(t){return"undefined"===typeof t},nil:function(t){return d.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return d.hex(t)||d.rgb(t)||d.hsl(t)},key:function(t){return!r.hasOwnProperty(t)&&!a.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function l(t){var n=/\(([^)]+)\)/.exec(t);return n?n[1].split(",").map((function(t){return parseFloat(t)})):[]}function f(t,n){var e=l(t),r=u(d.und(e[0])?1:e[0],.1,100),a=u(d.und(e[1])?100:e[1],.1,100),o=u(d.und(e[2])?10:e[2],.1,100),s=u(d.und(e[3])?0:e[3],.1,100),c=Math.sqrt(a/r),f=o/(2*Math.sqrt(a*r)),v=f<1?c*Math.sqrt(1-f*f):0,h=1,p=f<1?(f*c-s)/v:-s+c;function m(t){var e=n?n*t/1e3:t;return e=f<1?Math.exp(-e*f*c)*(h*Math.cos(v*e)+p*Math.sin(v*e)):(h+p*e)*Math.exp(-e*c),0===t||1===t?t:1-e}function g(){var n=i.springs[t];if(n)return n;var e=1/6,r=0,a=0;while(1)if(r+=e,1===m(r)){if(a++,a>=16)break}else a=0;var o=r*e*1e3;return i.springs[t]=o,o}return n?m:g}function v(t){return void 0===t&&(t=10),function(n){return Math.ceil(u(n,1e-6,1)*t)*(1/t)}}var h=function(){var t=11,n=1/(t-1);function e(t,n){return 1-3*n+3*t}function r(t,n){return 3*n-6*t}function a(t){return 3*t}function o(t,n,o){return((e(n,o)*t+r(n,o))*t+a(n))*t}function i(t,n,o){return 3*e(n,o)*t*t+2*r(n,o)*t+a(n)}function u(t,n,e,r,a){var i,u,s=0;do{u=n+(e-n)/2,i=o(u,r,a)-t,i>0?e=u:n=u}while(Math.abs(i)>1e-7&&++s<10);return u}function s(t,n,e,r){for(var a=0;a<4;++a){var u=i(n,e,r);if(0===u)return n;var s=o(n,e,r)-t;n-=s/u}return n}function c(e,r,a,c){if(0<=e&&e<=1&&0<=a&&a<=1){var d=new Float32Array(t);if(e!==r||a!==c)for(var l=0;l<t;++l)d[l]=o(l*n,e,a);return function(t){return e===r&&a===c||0===t||1===t?t:o(f(t),r,c)}}function f(r){for(var o=0,c=1,l=t-1;c!==l&&d[c]<=r;++c)o+=n;--c;var f=(r-d[c])/(d[c+1]-d[c]),v=o+f*n,h=i(v,e,a);return h>=.001?s(r,v,e,a):0===h?v:u(r,o,o+n,e,a)}}return c}(),p=function(){var t={linear:function(){return function(t){return t}}},n={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Expo:function(){return function(t){return t?Math.pow(2,10*t-10):0}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){var n,e=4;while(t<((n=Math.pow(2,--e))-1)/11);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*n-2)/22-t,2)}},Elastic:function(t,n){void 0===t&&(t=1),void 0===n&&(n=.5);var e=u(t,1,10),r=u(n,.1,2);return function(t){return 0===t||1===t?t:-e*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/e))*(2*Math.PI)/r)}}},e=["Quad","Cubic","Quart","Quint"];return e.forEach((function(t,e){n[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(n).forEach((function(e){var r=n[e];t["easeIn"+e]=r,t["easeOut"+e]=function(t,n){return function(e){return 1-r(t,n)(1-e)}},t["easeInOut"+e]=function(t,n){return function(e){return e<.5?r(t,n)(2*e)/2:1-r(t,n)(-2*e+2)/2}},t["easeOutIn"+e]=function(t,n){return function(e){return e<.5?(1-r(t,n)(1-2*e))/2:(r(t,n)(2*e-1)+1)/2}}})),t}();function m(t,n){if(d.fnc(t))return t;var e=t.split("(")[0],r=p[e],a=l(t);switch(e){case"spring":return f(t,n);case"cubicBezier":return c(h,a);case"steps":return c(v,a);default:return c(r,a)}}function g(t){try{var n=document.querySelectorAll(t);return n}catch(e){return}}function y(t,n){for(var e=t.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<e;o++)if(o in t){var i=t[o];n.call(r,i,o,t)&&a.push(i)}return a}function w(t){return t.reduce((function(t,n){return t.concat(d.arr(n)?w(n):n)}),[])}function b(t){return d.arr(t)?t:(d.str(t)&&(t=g(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function x(t,n){return t.some((function(t){return t===n}))}function M(t){var n={};for(var e in t)n[e]=t[e];return n}function I(t,n){var e=M(t);for(var r in t)e[r]=n.hasOwnProperty(r)?n[r]:t[r];return e}function k(t,n){var e=M(t);for(var r in n)e[r]=d.und(t[r])?n[r]:t[r];return e}function O(t){var n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return n?"rgba("+n[1]+",1)":t}function S(t){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=t.replace(n,(function(t,n,e,r){return n+n+e+e+r+r})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),a=parseInt(r[1],16),o=parseInt(r[2],16),i=parseInt(r[3],16);return"rgba("+a+","+o+","+i+",1)"}function C(t){var n,e,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}if(0==i)n=e=r=u;else{var d=u<.5?u*(1+i):u+i-u*i,l=2*u-d;n=c(l,d,o+1/3),e=c(l,d,o),r=c(l,d,o-1/3)}return"rgba("+255*n+","+255*e+","+255*r+","+s+")"}function E(t){return d.rgb(t)?O(t):d.hex(t)?S(t):d.hsl(t)?C(t):void 0}function A(t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(n)return n[1]}function B(t){return s(t,"translate")||"perspective"===t?"px":s(t,"rotate")||s(t,"skew")?"deg":void 0}function D(t,n){return d.fnc(t)?t(n.target,n.id,n.total):t}function P(t,n){return t.getAttribute(n)}function L(t,n,e){var r=A(n);if(x([e,"deg","rad","turn"],r))return n;var a=i.CSS[n+e];if(!d.und(a))return a;var o=100,u=document.createElement(t.tagName),s=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+e;var c=o/u.offsetWidth;s.removeChild(u);var l=c*parseFloat(n);return i.CSS[n+e]=l,l}function q(t,n,e){if(n in t.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=t.style[n]||getComputedStyle(t).getPropertyValue(r)||"0";return e?L(t,a,e):a}}function T(t,n){return d.dom(t)&&!d.inp(t)&&(!d.nil(P(t,n))||d.svg(t)&&t[n])?"attribute":d.dom(t)&&x(o,n)?"transform":d.dom(t)&&"transform"!==n&&q(t,n)?"css":null!=t[n]?"object":void 0}function j(t){if(d.dom(t)){var n,e=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;while(n=r.exec(e))a.set(n[1],n[2]);return a}}function _(t,n,e,r){var a=s(n,"scale")?1:0+B(n),o=j(t).get(n)||a;return e&&(e.transforms.list.set(n,o),e.transforms["last"]=n),r?L(t,o,r):o}function N(t,n,e,r){switch(T(t,n)){case"transform":return _(t,n,r,e);case"css":return q(t,n,e);case"attribute":return P(t,n);default:return t[n]||0}}function F(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;var r=A(t)||0,a=parseFloat(n),o=parseFloat(t.replace(e[0],""));switch(e[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function Z(t,n){if(d.col(t))return E(t);if(/\s/g.test(t))return t;var e=A(t),r=e?t.substr(0,t.length-e.length):t;return n?r+n:r}function H(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function $(t){return 2*Math.PI*P(t,"r")}function V(t){return 2*P(t,"width")+2*P(t,"height")}function W(t){return H({x:P(t,"x1"),y:P(t,"y1")},{x:P(t,"x2"),y:P(t,"y2")})}function Y(t){for(var n,e=t.points,r=0,a=0;a<e.numberOfItems;a++){var o=e.getItem(a);a>0&&(r+=H(n,o)),n=o}return r}function z(t){var n=t.points;return Y(t)+H(n.getItem(n.numberOfItems-1),n.getItem(0))}function X(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return $(t);case"rect":return V(t);case"line":return W(t);case"polyline":return Y(t);case"polygon":return z(t)}}function G(t){var n=X(t);return t.setAttribute("stroke-dasharray",n),n}function Q(t){var n=t.parentNode;while(d.svg(n)){if(!d.svg(n.parentNode))break;n=n.parentNode}return n}function R(t,n){var e=n||{},r=e.el||Q(t),a=r.getBoundingClientRect(),o=P(r,"viewBox"),i=a.width,u=a.height,s=e.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function J(t,n){var e=d.str(t)?g(t)[0]:t,r=n||100;return function(t){return{property:t,el:e,svg:R(e),totalLength:X(e)*(r/100)}}}function K(t,n,e){function r(e){void 0===e&&(e=0);var r=n+e>=1?n+e:0;return t.el.getPointAtLength(r)}var a=R(t.el,t.svg),o=r(),i=r(-1),u=r(1),s=e?1:a.w/a.vW,c=e?1:a.h/a.vH;switch(t.property){case"x":return(o.x-a.x)*s;case"y":return(o.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function U(t,n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Z(d.pth(t)?t.totalLength:t,n)+"";return{original:r,numbers:r.match(e)?r.match(e).map(Number):[0],strings:d.str(t)||n?r.split(e):[]}}function tt(t){var n=t?w(d.arr(t)?t.map(b):b(t)):[];return y(n,(function(t,n,e){return e.indexOf(t)===n}))}function nt(t){var n=tt(t);return n.map((function(t,e){return{target:t,id:e,total:n.length,transforms:{list:j(t)}}}))}function et(t,n){var e=M(n);if(/^spring/.test(e.easing)&&(e.duration=f(e.easing)),d.arr(t)){var r=t.length,a=2===r&&!d.obj(t[0]);a?t={value:t}:d.fnc(n.duration)||(e.duration=n.duration/r)}var o=d.arr(t)?t:[t];return o.map((function(t,e){var r=d.obj(t)&&!d.pth(t)?t:{value:t};return d.und(r.delay)&&(r.delay=e?0:n.delay),d.und(r.endDelay)&&(r.endDelay=e===o.length-1?n.endDelay:0),r})).map((function(t){return k(t,e)}))}function rt(t){for(var n=y(w(t.map((function(t){return Object.keys(t)}))),(function(t){return d.key(t)})).reduce((function(t,n){return t.indexOf(n)<0&&t.push(n),t}),[]),e={},r=function(r){var a=n[r];e[a]=t.map((function(t){var n={};for(var e in t)d.key(e)?e==a&&(n.value=t[e]):n[e]=t[e];return n}))},a=0;a<n.length;a++)r(a);return e}function at(t,n){var e=[],r=n.keyframes;for(var a in r&&(n=k(rt(r),n)),n)d.key(a)&&e.push({name:a,tweens:et(n[a],t)});return e}function ot(t,n){var e={};for(var r in t){var a=D(t[r],n);d.arr(a)&&(a=a.map((function(t){return D(t,n)})),1===a.length&&(a=a[0])),e[r]=a}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}function it(t,n){var e;return t.tweens.map((function(r){var a=ot(r,n),o=a.value,i=d.arr(o)?o[1]:o,u=A(i),s=N(n.target,t.name,u,n),c=e?e.to.original:s,l=d.arr(o)?o[0]:c,f=A(l)||A(s),v=u||f;return d.und(i)&&(i=c),a.from=U(l,v),a.to=U(F(i,l),v),a.start=e?e.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=m(a.easing,a.duration),a.isPath=d.pth(o),a.isPathTargetInsideSVG=a.isPath&&d.svg(n.target),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),e=a,a}))}var ut={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,r,a){if(r.list.set(n,e),n===r.last||a){var o="";r.list.forEach((function(t,n){o+=n+"("+t+") "})),t.style.transform=o}}};function st(t,n){var e=nt(t);e.forEach((function(t){for(var e in n){var r=D(n[e],t),a=t.target,o=A(r),i=N(a,e,o,t),u=o||A(i),s=F(Z(r,u),i),c=T(a,e);ut[c](a,e,s,t.transforms,!0)}}))}function ct(t,n){var e=T(t.target,n.name);if(e){var r=it(n,t),a=r[r.length-1];return{type:e,property:n.name,animatable:t,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}function dt(t,n){return y(w(t.map((function(t){return n.map((function(n){return ct(t,n)}))}))),(function(t){return!d.und(t)}))}function lt(t,n){var e=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},a={};return a.duration=e?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):n.duration,a.delay=e?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):n.delay,a.endDelay=e?a.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):n.endDelay,a}var ft=0;function vt(t){var n=I(r,t),e=I(a,t),o=at(e,t),i=nt(t.targets),u=dt(i,o),s=lt(u,e),c=ft;return ft++,k(n,{id:c,children:[],animatables:i,animations:u,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var ht=[],pt=function(){var t;function n(){t||mt()&&gt.suspendWhenDocumentHidden||!(ht.length>0)||(t=requestAnimationFrame(e))}function e(n){var r=ht.length,a=0;while(a<r){var o=ht[a];o.paused?(ht.splice(a,1),r--):(o.tick(n),a++)}t=a>0?requestAnimationFrame(e):void 0}function r(){gt.suspendWhenDocumentHidden&&(mt()?t=cancelAnimationFrame(t):(ht.forEach((function(t){return t._onDocumentVisibility()})),pt()))}return"undefined"!==typeof document&&document.addEventListener("visibilitychange",r),n}();function mt(){return!!document&&document.hidden}function gt(t){void 0===t&&(t={});var n,e=0,r=0,a=0,o=0,i=null;function s(t){var n=window.Promise&&new Promise((function(t){return i=t}));return t.finished=n,n}var c=vt(t);s(c);function d(){var t=c.direction;"alternate"!==t&&(c.direction="normal"!==t?"normal":"reverse"),c.reversed=!c.reversed,n.forEach((function(t){return t.reversed=c.reversed}))}function l(t){return c.reversed?c.duration-t:t}function f(){e=0,r=l(c.currentTime)*(1/gt.speed)}function v(t,n){n&&n.seek(t-n.timelineOffset)}function h(t){if(c.reversePlayback)for(var e=o;e--;)v(t,n[e]);else for(var r=0;r<o;r++)v(t,n[r])}function p(t){var n=0,e=c.animations,r=e.length;while(n<r){var a=e[n],o=a.animatable,i=a.tweens,s=i.length-1,d=i[s];s&&(d=y(i,(function(n){return t<n.end}))[0]||d);for(var l=u(t-d.start-d.delay,0,d.duration)/d.duration,f=isNaN(l)?1:d.easing(l),v=d.to.strings,h=d.round,p=[],m=d.to.numbers.length,g=void 0,w=0;w<m;w++){var b=void 0,x=d.to.numbers[w],M=d.from.numbers[w]||0;b=d.isPath?K(d.value,f*x,d.isPathTargetInsideSVG):M+f*(x-M),h&&(d.isColor&&w>2||(b=Math.round(b*h)/h)),p.push(b)}var I=v.length;if(I){g=v[0];for(var k=0;k<I;k++){v[k];var O=v[k+1],S=p[k];isNaN(S)||(g+=O?S+O:S+" ")}}else g=p[0];ut[a.type](o.target,a.property,g,o.transforms),a.currentValue=g,n++}}function m(t){c[t]&&!c.passThrough&&c[t](c)}function g(){c.remaining&&!0!==c.remaining&&c.remaining--}function w(t){var o=c.duration,f=c.delay,v=o-c.endDelay,y=l(t);c.progress=u(y/o*100,0,100),c.reversePlayback=y<c.currentTime,n&&h(y),!c.began&&c.currentTime>0&&(c.began=!0,m("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,m("loopBegin")),y<=f&&0!==c.currentTime&&p(0),(y>=v&&c.currentTime!==o||!o)&&p(o),y>f&&y<v?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,m("changeBegin")),m("change"),p(y)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,m("changeComplete")),c.currentTime=u(y,0,o),c.began&&m("update"),t>=o&&(r=0,g(),c.remaining?(e=a,m("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&d()):(c.paused=!0,c.completed||(c.completed=!0,m("loopComplete"),m("complete"),!c.passThrough&&"Promise"in window&&(i(),s(c)))))}return c.reset=function(){var t=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===t,c.remaining=c.loop,n=c.children,o=n.length;for(var e=o;e--;)c.children[e].reset();(c.reversed&&!0!==c.loop||"alternate"===t&&1===c.loop)&&c.remaining++,p(c.reversed?c.duration:0)},c._onDocumentVisibility=f,c.set=function(t,n){return st(t,n),c},c.tick=function(t){a=t,e||(e=a),w((a+(r-e))*gt.speed)},c.seek=function(t){w(l(t))},c.pause=function(){c.paused=!0,f()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,ht.push(c),f(),pt())},c.reverse=function(){d(),c.completed=!c.reversed,f()},c.restart=function(){c.reset(),c.play()},c.remove=function(t){var n=tt(t);wt(n,c)},c.reset(),c.autoplay&&c.play(),c}function yt(t,n){for(var e=n.length;e--;)x(t,n[e].animatable.target)&&n.splice(e,1)}function wt(t,n){var e=n.animations,r=n.children;yt(t,e);for(var a=r.length;a--;){var o=r[a],i=o.animations;yt(t,i),i.length||o.children.length||r.splice(a,1)}e.length||r.length||n.pause()}function bt(t){for(var n=tt(t),e=ht.length;e--;){var r=ht[e];wt(n,r)}}function xt(t,n){void 0===n&&(n={});var e=n.direction||"normal",r=n.easing?m(n.easing):null,a=n.grid,o=n.axis,i=n.from||0,u="first"===i,s="center"===i,c="last"===i,l=d.arr(t),f=l?parseFloat(t[0]):parseFloat(t),v=l?parseFloat(t[1]):0,h=A(l?t[1]:t)||0,p=n.start||0+(l?f:0),g=[],y=0;return function(t,n,d){if(u&&(i=0),s&&(i=(d-1)/2),c&&(i=d-1),!g.length){for(var m=0;m<d;m++){if(a){var w=s?(a[0]-1)/2:i%a[0],b=s?(a[1]-1)/2:Math.floor(i/a[0]),x=m%a[0],M=Math.floor(m/a[0]),I=w-x,k=b-M,O=Math.sqrt(I*I+k*k);"x"===o&&(O=-I),"y"===o&&(O=-k),g.push(O)}else g.push(Math.abs(i-m));y=Math.max.apply(Math,g)}r&&(g=g.map((function(t){return r(t/y)*y}))),"reverse"===e&&(g=g.map((function(t){return o?t<0?-1*t:-t:Math.abs(y-t)})))}var S=l?(v-f)/y:f;return p+S*(Math.round(100*g[n])/100)+h}}function Mt(t){void 0===t&&(t={});var n=gt(t);return n.duration=0,n.add=function(e,r){var o=ht.indexOf(n),i=n.children;function u(t){t.passThrough=!0}o>-1&&ht.splice(o,1);for(var s=0;s<i.length;s++)u(i[s]);var c=k(e,I(a,t));c.targets=c.targets||t.targets;var l=n.duration;c.autoplay=!1,c.direction=n.direction,c.timelineOffset=d.und(r)?l:F(r,l),u(n),n.seek(c.timelineOffset);var f=gt(c);u(f),i.push(f);var v=lt(i,t);return n.delay=v.delay,n.endDelay=v.endDelay,n.duration=v.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n}gt.version="3.2.2",gt.speed=1,gt.suspendWhenDocumentHidden=!0,gt.running=ht,gt.remove=bt,gt.get=N,gt.set=st,gt.convertPx=L,gt.path=J,gt.setDashoffset=G,gt.stagger=xt,gt.timeline=Mt,gt.easing=m,gt.penner=p,gt.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},t.exports=gt},7735:function(t,n,e){var r=e(9242),a=e(3396);function o(t,n,e,r,o,i){const u=(0,a.up)("Index");return(0,a.wg)(),(0,a.j4)(u)}const i={class:"wrapper",ref:"game"},u=(0,a.uE)('<div class="task text-center" data-v-dc8f965c> Выбери инструменты для шумового оркестра в детском саду </div><div class="play" data-v-dc8f965c></div><div class="instrument xylophone" data-correct="1" data-v-dc8f965c></div><div class="instrument b" data-correct="1" data-v-dc8f965c></div><div class="instrument maracas" data-correct="1" data-v-dc8f965c></div><div class="instrument spoons" data-correct="1" data-v-dc8f965c></div><div class="instrument triangle" data-correct="1" data-v-dc8f965c></div><div class="instrument synth" data-correct="0" data-v-dc8f965c></div><div class="instrument violin" data-correct="0" data-v-dc8f965c></div><div class="instrument accordionIns" data-correct="0" data-v-dc8f965c></div>',10),s=[u];function c(t,n,e,r,o,u){const c=(0,a.up)("MessageSuccess"),d=(0,a.up)("BackButton");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,s,512),t.game.success?((0,a.wg)(),(0,a.j4)(c,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(d)],64)}var d=e(7327),l=e(3435),f=e.n(l);class v{constructor(t){(0,d.Z)(this,"instrumentsSounds",(()=>{function t(t){let n=t.play();n&&n.catch((t=>{console.log(t),"NotAllowedError"!==t.name&&"NotSupportedError"!==t.name||console.log(t.name)})).then((()=>{console.log("playing sound !!!")}))}document.querySelector(".xylophone").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/xylophone.mp3"),this.audio.volume=.05,t(this.audio)})),document.querySelector(".b").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/b.mp3"),this.audio.volume=.05,t(this.audio)})),document.querySelector(".maracas").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/maracas.mp3"),this.audio.volume=.05,t(this.audio)})),document.querySelector(".spoons").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/spoons.mp3"),this.audio.volume=.05,t(this.audio)})),document.querySelector(".triangle").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/triangle.mp3"),this.audio.volume=.05,t(this.audio)})),document.querySelector(".synth").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/synth.mp3"),this.audio.volume=.05,t(this.audio)})),document.querySelector(".violin").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/violin.mp3"),this.audio.volume=.05,t(this.audio)})),document.querySelector(".accordionIns").addEventListener("touchstart",(function(){this.audio=new Audio("./assets/audio/accordion.mp3"),this.audio.volume=.05,t(this.audio)}))})),this.selectedInstruments=new Set,this.success=!1,this.incorrectInstruments=new Set,this.countInstruments(t),this.audio=new Audio("./assets/audio/orchestra.mp3"),this.instrumentsSounds()}countInstruments(t){this.instruments=t.querySelectorAll('[data-correct="1"]').length}}function h(t){const n=document.querySelectorAll(".instrument");n.forEach((t=>{t.addEventListener("touchstart",r)}));const e=document.querySelector(".play");function r(n){n.target.classList.toggle("selected"),Number(n.target.dataset.correct)?t.selectedInstruments.has(n.target)?t.selectedInstruments.delete(n.target):t.selectedInstruments.add(n.target):t.incorrectInstruments.has(n.target)?t.incorrectInstruments.delete(n.target):t.incorrectInstruments.add(n.target)}function a(n){f()({targets:n.target,keyframes:[{scale:1.2},{scale:1}],easing:"easeInBack",duration:200}),console.log(t),t.selectedInstruments.size===t.instruments&&0===t.incorrectInstruments.size&&(console.log(1),t.success=!0)}e.addEventListener("touchstart",a)}const p=t=>((0,a.dD)("data-v-55d8708a"),t=t(),(0,a.Cn)(),t),m={class:"message"},g=p((()=>(0,a._)("div",{"data-v-5074c3c4":"",class:"message-box d-flex flex-column justify-content-center align-items-center"},[(0,a._)("div",{"data-v-5074c3c4":"",class:"h1"},"Вы успешно справились!"),(0,a._)("button",{"data-v-5074c3c4":"",onclick:"window.location.reload()",class:"toMenu mt-5"},"На главную")],-1))),y=[g];function w(t,n,e,r,o,i){return(0,a.wg)(),(0,a.iD)("div",m,y)}var b=(0,a.aZ)({name:"MessageSuccess"}),x=e(89);const M=(0,x.Z)(b,[["render",w],["__scopeId","data-v-55d8708a"]]);var I=M;const k=t=>((0,a.dD)("data-v-379e453a"),t=t(),(0,a.Cn)(),t),O={class:"back-button"},S=k((()=>(0,a._)("button",{onclick:"window.history.back()"},[(0,a._)("span",null,"Назад"),(0,a._)("svg",{viewBox:"-5 -5 110 110",preserveAspectRatio:"none","aria-hidden":"true"},[(0,a._)("path",{d:"M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"})])],-1))),C=[S];function E(t,n,e,r,o,i){return(0,a.wg)(),(0,a.iD)("div",O,C)}var A=(0,a.aZ)({name:"BackButton"});const B=(0,x.Z)(A,[["render",E],["__scopeId","data-v-379e453a"]]);var D=B,P=(0,a.aZ)({name:"Index",components:{BackButton:D,MessageSuccess:I},data(){return{game:{}}},mounted(){this.game=new v(this.$refs.game),h(this.game)}});const L=(0,x.Z)(P,[["render",c],["__scopeId","data-v-dc8f965c"]]);var q=L,T={name:"App",components:{Index:q}};const j=(0,x.Z)(T,[["render",o]]);var _=j;(0,r.ri)(_).mount("#app")}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,a,o){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],a=t[d][1],o=t[d][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){t.splice(d--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[r,a,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(a in u)e.o(u,a)&&(e.m[a]=u[a]);if(s)var d=s(e)}for(n&&n(r);c<i.length;c++)o=i[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},r=self["webpackChunkorchestra"]=self["webpackChunkorchestra"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7735)}));r=e.O(r)})();
//# sourceMappingURL=app.facfb5ed.js.map