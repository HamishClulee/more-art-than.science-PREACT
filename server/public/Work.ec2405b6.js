parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t=require("preact"),r=require("preact-router/match"),n=require("../components/Hamburger"),o=a(n);function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(n){function a(){return u(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return i(a,t.Component),e(a,[{key:"render",value:function(e,n){return(0,t.h)("div",{className:"page-container"},(0,t.h)(o.default,null),(0,t.h)("h4",null,"Most Recent Freelance Project"),(0,t.h)("h5",null,(0,t.h)("a",{href:"https://babyaid.co.nz"},"Baby Aid Nz")),(0,t.h)("div",{className:"project-image-container"}),(0,t.h)("div",{className:"project-text-container"},(0,t.h)("p",null,"Brochureware and a Booking App, using Stripe for payments.")),(0,t.h)("h4",null,(0,t.h)(r.Link,{href:"/all-projects"},"Show All Projects")),(0,t.h)("div",{className:"footer-spacer"}))}}]),a}();exports.default=l;
},{"preact":7,"preact-router/match":28,"../components/Hamburger":25}]},{},[11], null)
//# sourceMappingURL=/Work.ec2405b6.map