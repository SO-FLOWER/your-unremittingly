!function(){var e={901:function(e,t,n){"use strict";var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".text {\n  background: rgba(18,52,50,0.13725);\n  font-size: 100px;\n}\n",""]),t.Z=o},744:function(e,t,n){"use strict";var r=n(645),o=n.n(r),i=n(208),s=o()((function(e){return e[1]}));s.i(i.Z),s.push([e.id,".text{\r\n    /* color: red; */\r\n    color: rgba(18,52,87,0.38431);\r\n}",""]),t.Z=s},208:function(e,t,n){"use strict";var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".text{\r\n    transition: all 0.5s;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}",""]),t.Z=o},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],c=0;c<e.length;c++){var u=e[c],a=r.base?u[0]+r.base:u[0],f=i[a]||0,l="".concat(a," ").concat(f);i[a]=f+1;var d=n(l),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==d?(t[d].references++,t[d].updater(p)):t.push({identifier:l,updater:o(p,r),references:1}),s.push(l)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var c=n(i[s]);t[c].references--}for(var u=r(e,o),a=0;a<i.length;a++){var f=n(i[a]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=u}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},50:function(e){e.exports=()=>({name:"csq",age:25})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),c=n(565),u=n.n(c),a=n(216),f=n.n(a),l=n(589),d=n.n(l),p=n(744),v={};v.styleTagTransform=d(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=f(),t()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;var m=n(901),h={};h.styleTagTransform=d(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,document.body.appendChild(function(){const e=document.createElement("h2");return e.innerHTML="fighting chen",e.className="text",e}());const b=n(50);console.log(20,100),console.log(b())}()}();