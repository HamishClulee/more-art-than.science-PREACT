parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({24:[function(require,module,exports) {
"use strict";var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t=require("preact"),r=require("preact-router/match");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}module.exports=function(a){function u(){return n(this,u),o(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return i(u,t.Component),e(u,[{key:"buildConditional",value:function(){return(0,t.h)("span",null,"THINGO")}},{key:"render",value:function(e,n){return(0,t.h)("div",{className:"footer-container"},(0,t.h)("div",{className:"row-2"},(0,t.h)(r.Match,{path:"/all-projects"},function(e){return e.matches&&(0,t.h)("div",{className:"row i2-4"},(0,t.h)(r.Link,{href:"/"},(0,t.h)("h5",null,"HOME")))}),(0,t.h)("div",{className:"row i2-1"},(0,t.h)(r.Link,{href:"/work"},(0,t.h)("h5",null,"WORK"))),(0,t.h)("div",{className:"row i2-2"},(0,t.h)(r.Link,{href:"/blog"},(0,t.h)("h5",null,"BLOG"))),(0,t.h)("div",{className:"row i2-3"},(0,t.h)(r.Link,{href:"/ipseity"},(0,t.h)("h5",null,"IPSEITY")))))}}]),u}();
},{"preact":7,"preact-router/match":25}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t=require("preact"),n=require("../components/Footer"),r=o(n);function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(n){function o(){return u(this,o),a(this,(o.__proto__||Object.getPrototypeOf(o)).call(this))}return c(o,t.Component),e(o,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(e,n){return(0,t.h)("div",null,(0,t.h)("div",{className:"page-container"},(0,t.h)("h1",{className:"ml15"},(0,t.h)("span",{className:"word"},"Currently"),(0,t.h)("span",{className:"word"},"Under"),(0,t.h)("span",{className:"word"},"Construction"))),(0,t.h)(r.default,null))}}]),o}();exports.default=i;
},{"preact":7,"../components/Footer":24}]},{},[13], null)
//# sourceMappingURL=/AllProjects.b5529252.map