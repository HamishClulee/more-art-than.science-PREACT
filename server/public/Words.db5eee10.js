parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),n=require("preact"),t=require("../components/Hamburger"),o=l(t),r=require("preact-router/match");function l(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var c=function(t){function l(){return i(this,l),u(this,(l.__proto__||Object.getPrototypeOf(l)).call(this))}return a(l,n.Component),e(l,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(e,t){return(0,n.h)("div",null,(0,n.h)("div",{className:"blog-container"},(0,n.h)(o.default,null),(0,n.h)("h5",null,(0,n.h)(r.Link,{href:"/tinybanana",className:"blog-post-link"},"HEY CUTE BANANA!")),(0,n.h)("h5",null,(0,n.h)(r.Link,{href:"/stolencars",className:"blog-post-link"},"DRIVING STOLEN CARS")),(0,n.h)("h5",null,(0,n.h)(r.Link,{href:"/interview-a-towel",className:"blog-post-link"},"AN INTERVIEW WITH A BATH TOWEL")),(0,n.h)("h5",null,(0,n.h)(r.Link,{href:"/things",className:"blog-post-link"},"COOL, THING")),(0,n.h)("h5",null,(0,n.h)(r.Link,{href:"/whatsgood",className:"blog-post-link"},"REALLY GOOD?"))))}}]),l}();exports.default=c;
},{"preact":7,"../components/Hamburger":27,"preact-router/match":30}]},{},[11], null)
//# sourceMappingURL=/Words.db5eee10.map