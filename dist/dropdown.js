!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dropdown=t():e.dropdown=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t,n){"use strict";e.exports=n(20)},function(e,t,n){var r,o,i;o=[e],void 0===(i="function"==typeof(r=function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n={glue:"__"},r=function(e,t){if(!e)return"";var n=Object.keys(t).map(function(e){return"\\$"+e});return n=new RegExp(n.join("|"),"g"),e.replace(n,function(e){return t[e.replace("$","")]})},o=function(e,t){return r(t,e)};e.exports=function(e,i){return function(a,u){var s=function(e,t,o){var i=Object.assign({},n,o,{rawBlock:e,rawElement:t});return i.block=r(e,i),i.element=r(t,i),i}(e,a,i),l=[];if(a){var c=function(e){return r("$block"+e.glue+e.element,e)}(s);l.push(c)}else u||l.push(s.block);return u&&(l=l.concat(function(e,n){var r=void 0===e?"undefined":t(e),i=[];return"string"===r||"number"===r?i.push(o(n,e)):"object"===r&&(Array.isArray(e)?i=e.map(o.bind(void 0,n)):Object.keys(e).forEach(function(t){e[t]&&i.push(o(n,t))})),i}(u,s))),l.join(" ")}}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){e.exports=n(16)()},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,i,a,u,s){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,i,a,u,s],f=0;(l=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,l=0,c=[],f=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],t))}else{var u=[];for(a=0;a<r.parts.length;a++)u.push(v(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:u}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function h(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=s||(s=m(t)),r=_.bind(null,n,a,!1),o=_.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(u=i[a.id]).refs--,r.push(u)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".dropdown {\n  width: 100%;\n  background-color: #fff;\n  font-size: 16px;\n  color: #010101;\n  font-family: 'Open Sans', sans-serif;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n.dropdown__select-wrapper {\n  position: relative;\n  height: 50px;\n}\n.dropdown__fallback-select {\n  width: 100%;\n  height: 100%;\n  outline: none;\n  opacity: 0;\n}\n.dropdown__select {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  border: 1px solid #a3a6af;\n  border-radius: 3px;\n}\n.dropdown__input {\n  padding: 0 40px 0 15px;\n  border: none;\n  outline: none;\n  height: 100%;\n  flex-grow: 1;\n  font-size: inherit;\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.dropdown__placeholder {\n  transition: all 0.3s;\n  padding: 0 10px;\n  height: 100%;\n  left: 5px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  pointer-events: none;\n}\n.dropdown__placeholder.\\--forceOpen {\n  top: -9px;\n  font-size: 13px;\n  height: 15px;\n  background-color: #fff;\n}\n.dropdown__placeholder.\\--hidden {\n  opacity: 0;\n}\n.dropdown__expander {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n}\n.dropdown__trangle {\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 7px solid #a3a6af;\n  transition: transform 0.3s;\n}\n.dropdown__trangle.\\--isOpen {\n  transform: rotate(180deg);\n}\n.dropdown__list {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  display: flex;\n  border: 1px solid #a3a6af;\n  border-top: 0;\n  border-radius: 0 0 3px 3px;\n  margin-bottom: -2px;\n  flex-direction: column;\n  background-color: #fff;\n  z-index: 1;\n}\n.dropdown__list.\\--openToTop {\n  top: auto;\n  bottom: 52px;\n  border: 1px solid #a3a6af;\n  border-bottom: 0;\n  border-radius: 3px 3px 0 0;\n}\n.dropdown__item {\n  padding: 15px;\n  cursor: pointer;\n}\n.dropdown__item span {\n  text-transform: capitalize;\n  color: #f49b46;\n  text-decoration: underline;\n}\n.dropdown__item:hover {\n  background-color: #d2d2d2;\n}\n",""])},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.filterItems=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e&&e.toLowerCase(),o=[],i=0;i<t.length;i++){var a=t[i]&&t[i].toLowerCase();if((!r||r&&a&&0===a.indexOf(r))&&o.push(t[i]),o.length>=n&&0!==n)break}return o.sort(function(e,t){var n=e.toLowerCase(),r=t.toLowerCase();return n<r?-1:n>r?1:0}),o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var u=(0,a(n(1)).default)("dropdown"),s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClickHandler=function(e){e.target.className===u("item")&&n.props.onChange(e.target.innerText)},n.getListOffsetHeight=function(){return n.listRef.current.offsetHeight},n.listRef=o.default.createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this;return o.default.createElement("div",{ref:this.listRef,className:u("list",{"--openToTop":this.props.openToTop}),onClick:this.onClickHandler,role:"presentation"},this.props.items.map(function(t){var n=t,r=e.props.searchValue;return(r=r.toLowerCase())&&(n=t.toLowerCase().replace(r,"")),o.default.createElement("div",{key:t,className:u("item")},r?o.default.createElement("span",null,r):null,n)}))}}]),t}();s.propTypes={searchValue:i.default.string.isRequired,onChange:i.default.func.isRequired,items:i.default.arrayOf(i.default.string).isRequired,openToTop:i.default.bool.isRequired},s.displayName="items_list",t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,i(n(1)).default)("dropdown"),u=function(e){var t=e.onChange,n=e.items,o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n));return o.unshift(""),r.default.createElement("select",{className:a("fallback-select"),onChange:function(e){return t(e.target.value)}},o.map(function(e){return r.default.createElement("option",{key:e},e)}))};u.propTypes={onChange:o.default.func.isRequired,items:o.default.arrayOf(o.default.string)},u.defaultProps={items:[]},u.displayName="fallback_select",t.default=u},function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i=Object.keys(Object(o)),a=0,u=i.length;a<u;a++){var s=i[a],l=Object.getOwnPropertyDescriptor(o,s);void 0!==l&&l.enumerable&&(n[s]=o[s])}}return n}e.exports={assign:r,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}}},function(e,t,n){"use strict";n(13).polyfill()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(3),o=n(4),i=n(15);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(0)),i=c(n(2)),a=c(n(1));n(14);var u=c(n(12)),s=c(n(11)),l=n(10);function c(e){return e&&e.__esModule?e:{default:e}}n(9);var f=(0,a.default)("dropdown"),p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){document.addEventListener("click",n.closeDropdown)},n.componentWillUnmount=function(){document.removeEventListener("click",n.closeDropdown)},n.onChangeInputHandler=function(e){var t=e.target.value,r=(0,l.filterItems)(t,n.props.items,n.props.maxItemsAmount);n.setState({searchValue:t,items:r,isOpen:!0})},n.onClickInputHandler=function(){if(n.state.isOpen)n.setState({isOpen:!1});else{var e=n.props.maxItemsAmount,t=(0,l.filterItems)(n.state.searchValue,n.props.items,e);n.setState({isOpen:!0,items:t})}},n.onChangeItem=function(e){n.setState({searchValue:e,selectedItem:e,isOpen:!1})},n.getSelectedItem=function(){return n.state.selectedItem},n.closeDropdown=function(e){if(!n.dropdownRef.current.contains(e.target)){var t={isOpen:!1};""===n.state.searchValue?t.selectedItem="":t.searchValue=n.state.selectedItem,n.setState(t)}},n.wrapperTouchHandler=function(){n.selectRef.current.style["pointer-events"]="none"},n.state={isOpen:!1,openToTop:!1,searchValue:"",items:[],selectedItem:""},n.dropdownRef=o.default.createRef(),n.selectRef=o.default.createRef(),n.itemsListRef=o.default.createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidUpdate",value:function(e,t){if(!t.isOpen&&this.state.isOpen||this.state.isOpen&&this.state.items.length!==t.items.length){if(!this.itemsListRef.current)return;var n=this.dropdownRef.current.getBoundingClientRect(),r=this.itemsListRef.current.getListOffsetHeight();n.top+n.height+r+20>window.innerHeight?this.setState({openToTop:!0}):this.setState({openToTop:!1})}this.state.selectedItem!==t.selectedItem&&this.props.onChange(this.state.selectedItem)}},{key:"render",value:function(){var e=this.state.searchValue,t=null;return this.state.isOpen&&this.state.items.length&&(t=o.default.createElement(s.default,{ref:this.itemsListRef,searchValue:e,onChange:this.onChangeItem,items:this.state.items,openToTop:this.state.openToTop})),o.default.createElement("div",{className:f(),ref:this.dropdownRef},o.default.createElement("div",{className:f("select-wrapper"),onTouchStart:this.wrapperTouchHandler},o.default.createElement(u.default,{onChange:this.onChangeItem,items:this.props.items}),o.default.createElement("div",{className:f("select"),ref:this.selectRef},o.default.createElement("input",{onClick:this.onClickInputHandler,className:f("input"),onChange:this.onChangeInputHandler,type:"text",value:e}),o.default.createElement("div",{className:f("placeholder",{"--forceOpen":e||this.state.isOpen,"--hidden":this.state.openToTop&&this.state.isOpen&&this.state.items.length})},"Выберете страну"),o.default.createElement("div",{className:f("expander")},o.default.createElement("div",{className:f("trangle",{"--isOpen":this.state.isOpen})})))),t)}}]),t}();p.propTypes={onChange:i.default.func,maxItemsAmount:i.default.number,items:i.default.arrayOf(i.default.string)},p.defaultProps={onChange:function(){},maxItemsAmount:10,items:[]},p.displayName="dropdown",t.default=p},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(u[l]=n[l]);if(r){a=r(n);for(var c=0;c<a.length;c++)i.call(n,a[c])&&(u[a[c]]=n[a[c]])}}return u}},function(e,t,n){"use strict";
/** @license React v16.4.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(19),o=n(4),i=n(18),a=n(3),u="function"==typeof Symbol&&Symbol.for,s=u?Symbol.for("react.element"):60103,l=u?Symbol.for("react.portal"):60106,c=u?Symbol.for("react.fragment"):60107,f=u?Symbol.for("react.strict_mode"):60108,p=u?Symbol.for("react.profiler"):60114,d=u?Symbol.for("react.provider"):60109,h=u?Symbol.for("react.context"):60110,y=u?Symbol.for("react.async_mode"):60111,m=u?Symbol.for("react.forward_ref"):60112;u&&Symbol.for("react.timeout");var b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function w(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||g}function _(){}function O(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=w.prototype;var x=O.prototype=new _;x.constructor=O,r(x,w.prototype),x.isPureReactComponent=!0;var j={current:null},R=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r=void 0,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:s,type:e,key:i,ref:a,props:o,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var T=/\/+/g,E=[];function P(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function A(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case s:case l:i=!0}}if(i)return n(r,e,""===t?"."+L(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var u=t+L(o=e[a],a);i+=A(o,u,n,r)}else if(null==e?u=null:u="function"==typeof(u=b&&e[b]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),a=0;!(o=e.next()).done;)i+=A(o=o.value,u=t+L(o,a++),n,r);else"object"===o&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,a.thatReturnsArgument):null!=e&&(C(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n,e={$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function M(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(T,"$&/")+"/"),t=P(t,i,r,o),null==e||A(e,"",N,t),I(t)}var $={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=P(null,null,t,n),null==e||A(e,"",U,t),I(t)},count:function(e){return null==e?0:A(e,"",a.thatReturnsNull,null)},toArray:function(e){var t=[];return M(e,t,null,a.thatReturnsArgument),t},only:function(e){return C(e)||v("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:m,render:e}},Fragment:c,StrictMode:f,unstable_AsyncMode:y,unstable_Profiler:p,createElement:k,cloneElement:function(e,t,n){null==e&&v("267",e);var o=void 0,i=r({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=j.current),void 0!==t.key&&(a=""+t.key);var c=void 0;for(o in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)R.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==c?c[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){c=Array(o);for(var f=0;f<o;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:s,type:e.type,key:a,ref:u,props:i,_owner:l}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.4.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:j,assign:r}},B={default:$},q=B&&$||B;e.exports=q.default?q.default:q},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={error:""},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?o.default.createElement("div",null,"Component with error"):o.default.createElement(i.default,this.props)}}]),t}();t.default=u}])});