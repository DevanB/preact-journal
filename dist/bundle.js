!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,u,a=T;for(u=arguments.length;u-- >2;)R.push(arguments[u]);for(t&&null!=t.children&&(R.length||R.push(t.children),delete t.children);R.length;)if((o=R.pop())&&void 0!==o.pop)for(u=o.length;u--;)R.push(o[u]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?a[a.length-1]+=o:a===T?a=[o]:a.push(o),n=i;var l=new r;return l.nodeName=e,l.children=a,l.attributes=null==t?void 0:t,l.key=null==t?void 0:t.key,void 0!==E.vnode&&E.vnode(l),l}function i(e,t){for(var n in t)e[n]=t[n];return e}function u(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==W.push(e)&&(E.debounceRendering||A)(l)}function l(){var e,t=W;for(W=[];e=t.pop();)e._dirty&&S(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function f(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===L.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,g,u):e.removeEventListener(t,g,u),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)y(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function y(e,t,n){try{e[t]=n}catch(e){}}function g(e){return this._listeners[e.type](E.event&&E.event(e)||e)}function b(){for(var e;e=D.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function v(e,t,n,r,o,i){B++||(H=null!=o&&void 0!==o.ownerSVGElement,F=null!=e&&!("__preactattr_"in e));var u=m(e,t,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--B||(F=!1,i||b()),u}function m(e,t,n,r,o){var i=e,u=H;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return M(e,t,n,r);if(H="svg"===a||"foreignObject"!==a&&H,a=String(a),(!e||!s(e,a))&&(i=p(a,H),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0)}var l=i.firstChild,c=i.__preactattr_,f=t.children;if(null==c){c=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)c[d[h].name]=d[h].value}return!F&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&_(i,f,n,r,F||null!=c.dangerouslySetInnerHTML),j(i,t.attributes,c),H=u,i}function _(e,t,n,r,o){var i,u,a,l,s,f=e.childNodes,p=[],h={},y=0,g=0,b=f.length,v=0,_=t?t.length:0;if(0!==b)for(var w=0;w<b;w++){var j=f[w],P=j.__preactattr_,x=_&&P?j._component?j._component.__key:P.key:null;null!=x?(y++,h[x]=j):(P||(void 0!==j.splitText?!o||j.nodeValue.trim():o))&&(p[v++]=j)}if(0!==_)for(var w=0;w<_;w++){l=t[w],s=null;var x=l.key;if(null!=x)y&&void 0!==h[x]&&(s=h[x],h[x]=void 0,y--);else if(!s&&g<v)for(i=g;i<v;i++)if(void 0!==p[i]&&c(u=p[i],l,o)){s=u,p[i]=void 0,i===v-1&&v--,i===g&&g++;break}s=m(s,l,n,r),a=f[w],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?d(a):e.insertBefore(s,a))}if(y)for(var w in h)void 0!==h[w]&&O(h[w],!1);for(;g<=v;)void 0!==(s=p[v--])&&O(s,!1)}function O(e,t){var n=e._component;n?I(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}function j(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,H);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],H)}function P(e){var t=e.constructor.name;(q[t]||(q[t]=[])).push(e)}function x(e,t,n){var r,o=q[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),U.call(r,t,n)):(r=new U(t,n),r.constructor=e,r.render=C),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function C(e,t,n){return this.constructor(e,n)}function k(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?a(e):S(e,1,o)),e.__ref&&e.__ref(e))}function S(e,t,n,r){if(!e._disable){var o,u,a,l=e.props,c=e.state,s=e.context,p=e.prevProps||l,d=e.prevState||c,h=e.prevContext||s,y=e.base,g=e.nextBase,m=y||g,_=e._component,w=!1;if(y&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,c,s)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(l,c,s),e.props=l,e.state=c,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!w){o=e.render(l,c,s),e.getChildContext&&(s=i(i({},s),e.getChildContext()));var j,P,C=o&&o.nodeName;if("function"==typeof C){var M=f(o);u=_,u&&u.constructor===C&&M.key==u.__key?k(u,M,1,s,!1):(j=u,e._component=u=x(C,M,s),u.nextBase=u.nextBase||g,u._parentComponent=e,k(u,M,0,s,!1),S(u,1,n,!0)),P=u.base}else a=m,j=_,j&&(a=e._component=null),(m||1===t)&&(a&&(a._component=null),P=v(a,o,s,n||!y,m&&m.parentNode,!0));if(m&&P!==m&&u!==_){var U=m.parentNode;U&&P!==U&&(U.replaceChild(P,m),j||(m._component=null,O(m,!1)))}if(j&&I(j),e.base=P,P&&!r){for(var N=e,R=e;R=R._parentComponent;)(N=R).base=P;P._component=N,P._componentConstructor=N.constructor}}if(!y||n?D.unshift(e):w||(e.componentDidUpdate&&e.componentDidUpdate(p,d,h),E.afterUpdate&&E.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);B||r||b()}}function M(e,t,n,r){for(var o=e&&e._component,i=o,u=e,a=o&&e._componentConstructor===t.nodeName,l=a,c=f(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(k(o,c,3,n,r),e=o.base):(i&&!a&&(I(i),e=u=null),o=x(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,u=null),k(o,c,1,n,r),e=o.base,u&&e!==u&&(u._component=null,O(u,!1))),e}function I(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?I(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),P(e),w(t)),e.__ref&&e.__ref(null)}function U(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function N(e,t,n){return v(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return o}),n.d(t,"createElement",function(){return o}),n.d(t,"cloneElement",function(){return u}),n.d(t,"Component",function(){return U}),n.d(t,"render",function(){return N}),n.d(t,"rerender",function(){return l}),n.d(t,"options",function(){return E});var E={},R=[],T=[],A="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,L=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,W=[],D=[],B=0,H=!1,F=!1,q={};i(U.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),S(this,2)},render:function(){}}),t.default={h:o,createElement:o,cloneElement:u,Component:U,render:N,rerender:l,options:E}},function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){void 0===n&&(n=O);var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),a={};if(i&&i[1])for(var l=i[1].split("&"),c=0;c<l.length;c++){var s=l[c].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=u(e.replace(o,"")),t=u(t||"");for(var f=Math.max(e.length,t.length),p=0;p<f;p++)if(t[p]&&":"===t[p].charAt(0)){var d=t[p].replace(/(^\:|[+*?]+$)/g,""),h=(t[p].match(/[+*?]+$/)||O)[0]||"",y=~h.indexOf("+"),g=~h.indexOf("*"),b=e[p]||"";if(!b&&!g&&(h.indexOf("?")<0||y)){r=!1;break}if(a[d]=decodeURIComponent(b),y||g){a[d]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(t[p]!==e[p]){r=!1;break}return(!0===n.default||!1!==r)&&a}function i(e,t){var n=e.attributes||O,r=t.attributes||O;return n.default?1:r.default?-1:a(n.path)-a(r.path)||n.path.length-r.path.length}function u(e){return l(e).split("/")}function a(e){return(l(e).match(/\/+/g)||"").length}function l(e){return e.replace(/(^\/+|\/+$)/g,"")}function c(e){return null!=e.__preactattr_||"undefined"!=typeof Symbol&&null!=e[Symbol.for("preactattr")]}function s(e,t){void 0===t&&(t="push"),w&&w[t]?w[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}function f(){var e;return e=w&&w.location?w.location:w&&w.getCurrentLocation?w.getCurrentLocation():"undefined"!=typeof location?location:x,""+(e.pathname||"")+(e.search||"")}function p(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),d(e)&&s(e,t?"replace":"push"),h(e)}function d(e){for(var t=j.length;t--;)if(j[t].canRoute(e))return!0;return!1}function h(e){for(var t=!1,n=0;n<j.length;n++)!0===j[n].routeTo(e)&&(t=!0);for(var r=P.length;r--;)P[r](e);return t}function y(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return p(t)}}function g(e){if(0==e.button)return y(e.currentTarget||e.target||this),b(e)}function b(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function v(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")&&c(t)){if(t.hasAttribute("native"))return;if(y(t))return b(e)}}while(t=t.parentNode)}}function m(){C||("function"==typeof addEventListener&&(w||addEventListener("popstate",function(){return h(f())}),addEventListener("click",v)),C=!0)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"subscribers",function(){return P}),n.d(t,"getCurrentUrl",function(){return f}),n.d(t,"route",function(){return p}),n.d(t,"Router",function(){return k}),n.d(t,"Route",function(){return M}),n.d(t,"Link",function(){return S});var _=n(0),O={},w=null,j=[],P=[],x={},C=!1,k=function(e){function t(t){e.call(this,t),t.history&&(w=t.history),this.state={url:t.url||f()},m()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){return this.getMatchingChildren(this.props.children,e,!1).length>0},t.prototype.routeTo=function(e){return this._didRoute=!1,this.setState({url:e}),this.updating?this.canRoute(e):(this.forceUpdate(),this._didRoute)},t.prototype.componentWillMount=function(){j.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;w&&(this.unlisten=w.listen(function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))})),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),j.splice(j.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.slice().sort(i).map(function(e){var i=e.attributes||{},u=i.path,a=o(t,u,i);if(a){if(!1!==n){var l={url:t,matches:a};return r(l,a),Object(_.cloneElement)(e,l)}return e}return!1}).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(n,o,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:u})),u},t}(_.Component),S=function(e){return Object(_.h)("a",r({onClick:g},e))},M=function(e){return Object(_.h)(e.component,e)};k.subscribers=P,k.getCurrentUrl=f,k.route=p,k.Router=k,k.Route=M,k.Link=S,t.default=k},function(e,t){"use strict";function n(e,t,n){return function(){if(e){n=n||document,t&&(t={detail:t});var r=new CustomEvent(e,t);n.dispatchEvent(r)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){"use strict";function n(e,t,n,r){for(r=0,t=t.split?t.split("."):t;e&&r<t.length;)e=e[t[r++]];return void 0===e?n:e}function r(e,t,r){var o=t.split("."),i=e.__lsc||(e.__lsc={});return i[t+r]||(i[t+r]=function(t){for(var i=t&&t.target||this,u={},a=u,l="string"==typeof r?n(t,r):i.nodeName?i.type.match(/^che|rad/)?i.checked:i.value:t,c=0;c<o.length-1;c++)a=a[o[c]]||(a[o[c]]=!c&&e.state[o[c]]||{});a[o[c]]=l,e.setState(u)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(){return r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return(0,u.h)("h2",null,"Looks like that doesn't exist!")}}]),t}(u.Component)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){if(!e.url)return n("No URL provided");var o=e.url,i=e.method?e.method.toUpperCase():"GET",u=e.body?JSON.stringify(e.body):"";e.query=e.query||{},o+=(0,r.appendParams)(o,e.query).split(o)[1];var a=new XMLHttpRequest;a.open(i,o,!0),a.onload=function(){if(401===this.status)return window.location.reload();if(this.status>=300)return n(this.response);if(204===this.status)return t();try{return t(JSON.parse(this.response))}catch(e){return t(this.response)}},a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Accept","application/json"),a.send(u)})};var r=n(19)},function(e,t,n){"use strict";var r=n(0),o=n(7);(0,r.render)((0,r.h)(function(e){return e&&e.__esModule?e:{default:e}}(o).default,null),document.body)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=n(1),c=n(8),s=r(c),f=n(9),p=r(f),d=n(11),h=r(d),y=n(12),g=r(y),b=n(4),v=r(b),m=n(13),_=r(m),O=n(14),w=r(O),j=n(16),P=r(j),x=n(2),C=r(x);t.default=function(e){function t(){for(var e,n,r,i,u=arguments.length,a=Array(u),l=0;l<u;l++)a[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state=w.default,i=n,o(r,i)}return i(t,e),u(t,[{key:"componentWillMount",value:function(){if(window.app=this,window.app.route=l.route,(0,_.default)(this,P.default),this.state.loggedIn){var e=localStorage.getItem("timestamp");e?(0,C.default)("syncForUser",{timestamp:e})():(0,C.default)("getAllForUser")()}}},{key:"render",value:function(e,t){var n=t.loggedIn,r=t.loading,o=t.entryIndex,i=t.entry,u=t.entries;return(0,a.h)("div",{id:"main-wrapper"},(0,a.h)("div",{id:"view-wrapper"},(0,a.h)("main",{id:"main"},(0,a.h)(l.Router,null,(0,a.h)(s.default,{path:"/",loggedIn:n,loading:r}),(0,a.h)(p.default,{path:"/entries",loggedIn:n,loading:r,entries:u}),(0,a.h)(g.default,{path:"/entry/new",loggedIn:n,loading:r}),(0,a.h)(h.default,{path:"/entry/:id",loggedIn:n,loading:r,entryIndex:o,entry:i}),(0,a.h)(v.default,{default:!0})))))}}]),t}(a.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=n(1),c=n(3),s=r(c),f=n(2),p=r(f);t.default=function(e){function t(){for(var e,n,r,i,u=arguments.length,a=Array(u),l=0;l<u;l++)a[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={createUser:"",createPass:"",loginUser:"",loginPass:""},r.join=function(){},r.login=function(){(0,p.default)("login",{user:{username:r.state.loginUser,password:r.state.loginPass}})()},i=n,o(r,i)}return i(t,e),u(t,[{key:"componentWillMount",value:function(){if(this.props.loggedIn)return(0,l.route)("/entries")}},{key:"render",value:function(){return(0,a.h)("div",{class:"login-page-wrapper"},(0,a.h)("h1",{class:"center-text"},"Journalize"),(0,a.h)("h4",{class:"center-text"},"Private and public journal entries"),(0,a.h)("form",{action:"javscript:",onSubmit:this.join,class:"pure-form pure-form-stacked full-width"},(0,a.h)("fieldset",null,(0,a.h)("legend",null,"Create an Account"),(0,a.h)("input",{onInput:(0,s.default)(this,"createUser"),placeholder:"username",autocapitalize:"off",class:"needsclick"}),(0,a.h)("input",{onInput:(0,s.default)(this,"createPass"),type:"password",placeholder:"password",class:"needsclick"}),(0,a.h)("input",{type:"submit",class:"pure-button pure-button-primary"}))),(0,a.h)("form",{action:"javascript:",onSubmit:this.login,class:"pure-form pure-form-stacked full-width"},(0,a.h)("fieldset",null,(0,a.h)("legend",null,"or Login"),(0,a.h)("input",{onInput:(0,s.default)(this,"loginUser"),placeholder:"username",autocapitalize:"off",class:"needsclick"}),(0,a.h)("input",{onInput:(0,s.default)(this,"loginPass"),type:"password",placeholder:"password",class:"needsclick"}),(0,a.h)("input",{type:"submit",class:"pure-button pure-button-primary"}))))}}]),t}(a.Component)},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=n(1),l=n(10),c=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e){function t(){for(var e,n,o,i,u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.componentWillMount=function(){if(!o.props.loggedIn)return(0,a.route)("/")},i=n,r(o,i)}return o(t,e),i(t,[{key:"render",value:function(e){return(0,u.h)("entry-list",null,e.entries.map(function(e){return(0,u.h)(c.default,{entry:e})}))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(){return r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(e){var t=e.entry;return(0,u.h)("div",{class:"entry-preview"},(0,u.h)("a",{class:"entry-link",href:"/entry/"+t.id},t.date),(0,u.h)("span",null,t.isPublic?"🔓":"🔐"),"✖",(0,u.h)("p",{class:"entry-text"},t.text.length>140?t.text.substr(0,140)+"...":t.text))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=n(3),c=(r(l),n(2)),s=r(c),f=n(4),p=r(f);t.default=function(e){function t(){for(var e,n,r,i,u=arguments.length,a=Array(u),l=0;l<u;l++)a[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.update=function(e){var t;switch(e.target.nodeName){case"H1":t="date";break;case"PRE":t="text"}var n={entryIndex:r.props.entryIndex,property:t,entry:{id:r.props.entry.id}};n.entry[t]=e.target.innerText,(0,s.default)("update",n)()},i=n,o(r,i)}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.props.id&&(0,s.default)("setEntry",{id:this.props.id})()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.entry,n=e.entry;return n.date!==t.date||n.text!==t.text.trim()||n.isPublic!==t.isPublic}},{key:"getIcons",value:function(e){return e.isPublic?"🔓":"🔐"}},{key:"getEntry",value:function(e){return{id:e.id}}},{key:"render",value:function(e){var t=e.entry;return t?(0,a.h)("entry-view",null,(0,a.h)("h1",{contenteditable:!0,onInput:this.update},t.date),(0,a.h)("span",null,this.getIcons(t)),"✖",(0,a.h)("pre",{contenteditable:!0,onInput:this.update,class:"entry-text"},t.text)):(0,a.h)(p.default,null)}}]),t}(a.Component)},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=n(1),l=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e){function t(){for(var e,n,o,i,u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.componentWillMount=function(){if(!o.props.loggedIn)return(0,a.route)("/")},o.upsert=function(e){e.preventDefault(),(0,c.default)("create",{entry:{date:o.getDate(),text:"programmatically",isPublic:!1}})()},i=n,r(o,i)}return o(t,e),i(t,[{key:"getDate",value:function(){return(new Date).toISOString().slice(0,10)}},{key:"render",value:function(){return(0,u.h)("new-entry",null,(0,u.h)("form",{method:"post",action:"/api/entry",onsubmit:this.upsert,class:"pure-form pure-form-stacked"},(0,u.h)("fieldset",null,(0,u.h)("input",{name:"date",value:this.getDate(),class:"needsclick"}),(0,u.h)("textarea",{name:"text",class:"entry-text needsclick"}),"Is Public: ",(0,u.h)("input",{type:"checkbox",name:"isPublic",checked:"{opts.entry.isPublic}"}),(0,u.h)("div",{class:"entry-actions"},(0,u.h)("a",{href:"/entries",onclick:"{back}",class:"pure-button button-round entry-action--left"},"Cancel"),(0,u.h)("input",{type:"submit",class:"pure-button pure-button-primary button-round entry-action--right"})))))}}]),t}(u.Component)},function(e,t){"use strict";function n(e,t){var n=this;"undefined"!=typeof window&&Object.keys(t).forEach(function(r){var o=t[r].bind(n,e);document.addEventListener(r,o,!1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=!!o.default.get("logged_in");i||localStorage.clear(),t.default={loggedIn:i,loading:0,entryIndex:-1,entry:{},entries:JSON.parse(localStorage.getItem("entries"))||[]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),i=r(o),u=n(20),a=r(u);t.default=Object.assign(i.default,a.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(1);t.default={login:function(e,t){localStorage.clear(),e.setState(Object.assign(e.state,{entries:[],loading:e.state.loading-1})),e.setState({loading:e.state.loading+1}),o.default.login(t.detail.user).then(function(){e.setState(Object.assign(e.state,{loggedIn:!0,loading:e.state.loading-1}),function(){(0,i.route)("/entries")})}).catch(function(e){console.log("error",e)})},logout:function(e){e.setState(Object.assign(e.state,{entries:[],loading:e.state.loading-1}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={create:function(e){return(0,o.default)({url:"/api/user",method:"POST",body:e})},login:function(e){return(0,o.default)({url:"/api/user/authenticate",method:"POST",body:e})},logout:function(){localStorage.clear()}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=[];for(var n in e||{})t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return 0===t.length?"":t.join("&")},r=function(e){var t=document.createElement("a");return t.href=e,t.href.length>0&&"&"===t.href[t.href.length-1]&&(t.href=t.href.slice(0,-1)),t},o=function(e,t){var o=r(e),i=o.search,u=n(t);return 0===u.length?e:(0!==i.length?("&"===o.search[o.search.length-1]&&(o.search=o.search.slice(0,-1)),o.search+="&"+u):o.search=u,o.href)};t.toQueryString=n,t.parseURL=r,t.appendParams=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),i=r(o),u=n(1),a=n(22),l=r(a),c=function(e,t){return t.map(function(e){return e.id}).indexOf(e)},s=function(e,t){return t.splice(e,1)};t.default={create:function(e,t){e.setState({loading:e.state.loading+1});var n=t.detail.entry;i.default.create(n).then(function(t){n.id=t.id,e.setState({loading:e.state.loading-1,entries:[n].concat(e.state.entries)}),(0,u.route)("/entries")}).catch(function(e){console.log("error",e)})},get:function(){},update:(0,l.default)(function(e,t){var n=t.detail;n.entry[n.property]=n.entry[n.property].trim(),e.state.entries[n.entryIndex][n.property]!==n.entry[n.property]&&(e.state.entries[n.entryIndex][n.property]=n.entry[n.property],e.setState({entries:[].concat(e.state.entries)},function(){localStorage.setItem("entries",JSON.stringify(e.state.entries))}),i.default.update(n.entry).then(function(){}).catch(function(){}))},500),del:function(){},getAllForUser:function(e){e.state.entries.length||(e.setState({loading:e.state.loading+1}),i.default.getAllForUser().then(function(t){e.setState(Object.assign(e.state,{entries:t.entries,loading:e.state.loading-1})),localStorage.setItem("entries",JSON.stringify(t.entries)),localStorage.setItem("timestamp",t.timestamp)}).catch(function(e){console.log("error",e)}))},syncForUser:function(e,t){e.setState({loading:e.state.loading+1}),i.default.syncForUser(t.detail.timestamp).then(function(t){if(0===t.entries.length)return e.setState({loading:e.state.loading-1}),void localStorage.setItem("timestamp",t.timestamp);t.entries.forEach(function(t){var n=c(t.id,e.state.entries);n>-1?t.deleted?e.state.entries=s(n,e.state.entries):e.state.entries[n]=t:e.state.entries.unshift(t)}),e.setState({loading:e.state.loading-1,entries:[].concat(e.state.entries)}),localStorage.setItem("entries",JSON.stringify(e.state.entries)),localStorage.setItem("timestamp",t.timestamp)}).catch(function(e){console.log("error",e)})},setEntry:function(e,t){if(t&&t.detail&&t.detail.id){for(var n=e.state.entries,r=0;r<n.length&&n[r].id.toString()!==t.detail.id.toString();)r++;e.setState({entryIndex:r,entry:n[r]})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={create:function(e){return(0,o.default)({url:"/api/entry",method:"POST",body:e})},get:function(){return(0,o.default)({url:"/api/entry/"+entry.id})},update:function(e){return(0,o.default)({url:"/api/entry/"+e.id,method:"PATCH",body:e})},del:function(e){return(0,o.default)({url:"/api/entry/"+e,method:"DELETE"})},getAllForUser:function(){return(0,o.default)({url:"/api/entries"})},syncForUser:function(e){return(0,o.default)({url:"/api/entries/sync",query:{timestamp:e}})}}},function(e,t){"use strict";function n(e,t,n){var r;return function(){var o=this,i=arguments,u=function(){r=null,n||e.apply(o,i)},a=n&&!r;clearTimeout(r),r=setTimeout(u,t),a&&e.apply(o,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}]);