!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,u,a=T;for(u=arguments.length;u-- >2;)R.push(arguments[u]);for(t&&null!=t.children&&(R.length||R.push(t.children),delete t.children);R.length;)if((o=R.pop())&&void 0!==o.pop)for(u=o.length;u--;)R.push(o[u]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?a[a.length-1]+=o:a===T?a=[o]:a.push(o),n=i;var l=new r;return l.nodeName=e,l.children=a,l.attributes=null==t?void 0:t,l.key=null==t?void 0:t.key,void 0!==N.vnode&&N.vnode(l),l}function i(e,t){for(var n in t)e[n]=t[n];return e}function u(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==B.push(e)&&(N.debounceRendering||L)(l)}function l(){var e,t=B;for(B=[];e=t.pop();)e._dirty&&k(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function f(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===A.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,u):e.removeEventListener(t,b,u),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)y(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function y(e,t,n){try{e[t]=n}catch(e){}}function b(e){return this._listeners[e.type](N.event&&N.event(e)||e)}function v(){for(var e;e=D.pop();)N.afterMount&&N.afterMount(e),e.componentDidMount&&e.componentDidMount()}function m(e,t,n,r,o,i){W++||(q=null!=o&&void 0!==o.ownerSVGElement,H=null!=e&&!("__preactattr_"in e));var u=g(e,t,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--W||(H=!1,i||v()),u}function g(e,t,n,r,o){var i=e,u=q;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return I(e,t,n,r);if(q="svg"===a||"foreignObject"!==a&&q,a=String(a),(!e||!s(e,a))&&(i=p(a,q),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0)}var l=i.firstChild,c=i.__preactattr_,f=t.children;if(null==c){c=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)c[d[h].name]=d[h].value}return!H&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&_(i,f,n,r,H||null!=c.dangerouslySetInnerHTML),x(i,t.attributes,c),q=u,i}function _(e,t,n,r,o){var i,u,a,l,s,f=e.childNodes,p=[],h={},y=0,b=0,v=f.length,m=0,_=t?t.length:0;if(0!==v)for(var w=0;w<v;w++){var x=f[w],j=x.__preactattr_,P=_&&j?x._component?x._component.__key:j.key:null;null!=P?(y++,h[P]=x):(j||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(p[m++]=x)}if(0!==_)for(var w=0;w<_;w++){l=t[w],s=null;var P=l.key;if(null!=P)y&&void 0!==h[P]&&(s=h[P],h[P]=void 0,y--);else if(!s&&b<m)for(i=b;i<m;i++)if(void 0!==p[i]&&c(u=p[i],l,o)){s=u,p[i]=void 0,i===m-1&&m--,i===b&&b++;break}s=g(s,l,n,r),a=f[w],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?d(a):e.insertBefore(s,a))}if(y)for(var w in h)void 0!==h[w]&&O(h[w],!1);for(;b<=m;)void 0!==(s=p[m--])&&O(s,!1)}function O(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}function x(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,q);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],q)}function j(e){var t=e.constructor.name;(J[t]||(J[t]=[])).push(e)}function P(e,t,n){var r,o=J[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),E.call(r,t,n)):(r=new E(t,n),r.constructor=e,r.render=C),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function C(e,t,n){return this.constructor(e,n)}function S(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===N.syncComponentUpdates&&e.base?a(e):k(e,1,o)),e.__ref&&e.__ref(e))}function k(e,t,n,r){if(!e._disable){var o,u,a,l=e.props,c=e.state,s=e.context,p=e.prevProps||l,d=e.prevState||c,h=e.prevContext||s,y=e.base,b=e.nextBase,g=y||b,_=e._component,w=!1;if(y&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,c,s)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(l,c,s),e.props=l,e.state=c,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!w){o=e.render(l,c,s),e.getChildContext&&(s=i(i({},s),e.getChildContext()));var x,j,C=o&&o.nodeName;if("function"==typeof C){var I=f(o);u=_,u&&u.constructor===C&&I.key==u.__key?S(u,I,1,s,!1):(x=u,e._component=u=P(C,I,s),u.nextBase=u.nextBase||b,u._parentComponent=e,S(u,I,0,s,!1),k(u,1,n,!0)),j=u.base}else a=g,x=_,x&&(a=e._component=null),(g||1===t)&&(a&&(a._component=null),j=m(a,o,s,n||!y,g&&g.parentNode,!0));if(g&&j!==g&&u!==_){var E=g.parentNode;E&&j!==E&&(E.replaceChild(j,g),x||(g._component=null,O(g,!1)))}if(x&&M(x),e.base=j,j&&!r){for(var U=e,R=e;R=R._parentComponent;)(U=R).base=j;j._component=U,j._componentConstructor=U.constructor}}if(!y||n?D.unshift(e):w||(e.componentDidUpdate&&e.componentDidUpdate(p,d,h),N.afterUpdate&&N.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);W||r||v()}}function I(e,t,n,r){for(var o=e&&e._component,i=o,u=e,a=o&&e._componentConstructor===t.nodeName,l=a,c=f(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(S(o,c,3,n,r),e=o.base):(i&&!a&&(M(i),e=u=null),o=P(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,u=null),S(o,c,1,n,r),e=o.base,u&&e!==u&&(u._component=null,O(u,!1))),e}function M(e){N.beforeUnmount&&N.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?M(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),j(e),w(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function U(e,t,n){return m(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return o}),n.d(t,"createElement",function(){return o}),n.d(t,"cloneElement",function(){return u}),n.d(t,"Component",function(){return E}),n.d(t,"render",function(){return U}),n.d(t,"rerender",function(){return l}),n.d(t,"options",function(){return N});var N={},R=[],T=[],L="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,A=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,B=[],D=[],W=0,q=!1,H=!1,J={};i(E.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),k(this,2)},render:function(){}}),t.default={h:o,createElement:o,cloneElement:u,Component:E,render:U,rerender:l,options:N}},function(e,t){"use strict";function n(e,t,n){return function(){if(e){n=n||document,t&&(t={detail:t});var r=new CustomEvent(e,t);n.dispatchEvent(r)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){void 0===n&&(n=O);var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),a={};if(i&&i[1])for(var l=i[1].split("&"),c=0;c<l.length;c++){var s=l[c].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=u(e.replace(o,"")),t=u(t||"");for(var f=Math.max(e.length,t.length),p=0;p<f;p++)if(t[p]&&":"===t[p].charAt(0)){var d=t[p].replace(/(^\:|[+*?]+$)/g,""),h=(t[p].match(/[+*?]+$/)||O)[0]||"",y=~h.indexOf("+"),b=~h.indexOf("*"),v=e[p]||"";if(!v&&!b&&(h.indexOf("?")<0||y)){r=!1;break}if(a[d]=decodeURIComponent(v),y||b){a[d]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(t[p]!==e[p]){r=!1;break}return(!0===n.default||!1!==r)&&a}function i(e,t){var n=e.attributes||O,r=t.attributes||O;return n.default?1:r.default?-1:a(n.path)-a(r.path)||n.path.length-r.path.length}function u(e){return l(e).split("/")}function a(e){return(l(e).match(/\/+/g)||"").length}function l(e){return e.replace(/(^\/+|\/+$)/g,"")}function c(e){return null!=e.__preactattr_||"undefined"!=typeof Symbol&&null!=e[Symbol.for("preactattr")]}function s(e,t){void 0===t&&(t="push"),w&&w[t]?w[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}function f(){var e;return e=w&&w.location?w.location:w&&w.getCurrentLocation?w.getCurrentLocation():"undefined"!=typeof location?location:P,""+(e.pathname||"")+(e.search||"")}function p(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),d(e)&&s(e,t?"replace":"push"),h(e)}function d(e){for(var t=x.length;t--;)if(x[t].canRoute(e))return!0;return!1}function h(e){for(var t=!1,n=0;n<x.length;n++)!0===x[n].routeTo(e)&&(t=!0);for(var r=j.length;r--;)j[r](e);return t}function y(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return p(t)}}function b(e){if(0==e.button)return y(e.currentTarget||e.target||this),v(e)}function v(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function m(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")&&c(t)){if(t.hasAttribute("native"))return;if(y(t))return v(e)}}while(t=t.parentNode)}}function g(){C||("function"==typeof addEventListener&&(w||addEventListener("popstate",function(){return h(f())}),addEventListener("click",m)),C=!0)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"subscribers",function(){return j}),n.d(t,"getCurrentUrl",function(){return f}),n.d(t,"route",function(){return p}),n.d(t,"Router",function(){return S}),n.d(t,"Route",function(){return I}),n.d(t,"Link",function(){return k});var _=n(0),O={},w=null,x=[],j=[],P={},C=!1,S=function(e){function t(t){e.call(this,t),t.history&&(w=t.history),this.state={url:t.url||f()},g()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){return this.getMatchingChildren(this.props.children,e,!1).length>0},t.prototype.routeTo=function(e){return this._didRoute=!1,this.setState({url:e}),this.updating?this.canRoute(e):(this.forceUpdate(),this._didRoute)},t.prototype.componentWillMount=function(){x.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;w&&(this.unlisten=w.listen(function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))})),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),x.splice(x.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.slice().sort(i).map(function(e){var i=e.attributes||{},u=i.path,a=o(t,u,i);if(a){if(!1!==n){var l={url:t,matches:a};return r(l,a),Object(_.cloneElement)(e,l)}return e}return!1}).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(n,o,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:u})),u},t}(_.Component),k=function(e){return Object(_.h)("a",r({onClick:b},e))},I=function(e){return Object(_.h)(e.component,e)};S.subscribers=j,S.getCurrentUrl=f,S.route=p,S.Router=S,S.Route=I,S.Link=k,t.default=S},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(){return r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return(0,u.h)("h2",null,"Looks like that doesn't exist!")}}]),t}(u.Component)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){var e=!!o.default.get("logged_in");return e||localStorage.clear(),{entryReady:!1,loggedIn:e,loading:0,entryIndex:-1,entry:void 0,entries:JSON.parse(localStorage.getItem("entries"))||void 0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise(function(t,n){if(!e.url)return n("No URL provided");var o=e.url,i=e.method?e.method.toUpperCase():"GET",u=e.body?JSON.stringify(e.body):"";e.query=e.query||{},o+=(0,r.appendParams)(o,e.query).split(o)[1];var a=new XMLHttpRequest;a.open(i,o,!0),a.onload=function(){if(this.status>=300)return n(this.response);if(204===this.status)return t();try{return t(JSON.parse(this.response))}catch(e){return t(this.response)}},a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Accept","application/json"),a.send(u)})};var r=n(20)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return t.map(function(e){return e.id}).indexOf(e)},r=function(e,t){return t.splice(e,1),t};t.findObjectIndexById=n,t.removeObjectByIndex=r},function(e,t,n){"use strict";var r=n(0),o=n(8);(0,r.render)((0,r.h)(function(e){return e&&e.__esModule?e:{default:e}}(o).default,null),document.body)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=n(2),c=n(9),s=r(c),f=n(11),p=r(f),d=n(12),h=r(d),y=n(14),b=r(y),v=n(3),m=r(v),g=n(15),_=r(g),O=n(4),w=r(O),x=n(17),j=r(x),P=n(1),C=r(P),S=n(24);t.default=function(e){function t(){for(var e,n,r,i,u=arguments.length,a=Array(u),l=0;l<u;l++)a[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state=(0,w.default)(),i=n,o(r,i)}return i(t,e),u(t,[{key:"componentWillMount",value:function(){(0,_.default)(this,j.default),(0,C.default)("fetchData")(),window.app=this,window.route=l.route}},{key:"componentWillUpdate",value:function(){(0,C.default)("fetchData")()}},{key:"render",value:function(e,t){var n=t.loggedIn,r=t.loading,o=t.entryIndex,i=t.entry,u=t.entries,c=t.entryReady;return(0,a.h)("div",{id:"main-wrapper"},(0,a.h)("div",{id:"view-wrapper"},(0,a.h)("main",{id:"main"},(0,a.h)(s.default,null),(0,a.h)(l.Router,{onChange:S.handleRouteChange.bind(this)},(0,a.h)(p.default,{path:"/",loggedIn:n,loading:r}),(0,a.h)(h.default,{path:"/entries",loggedIn:n,loading:r,entries:u}),(0,a.h)(b.default,{path:"/entry/:id",loggedIn:n,loading:r,entryIndex:o,entry:i,entryReady:c}),(0,a.h)(m.default,{default:!0})))))}}]),t}(a.Component)},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=n(10),l=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e){function t(){return r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return(0,u.h)("header",null,(0,u.h)("h1",null,"Journalize"),(0,u.h)("nav",null,(0,u.h)(a.Link,{href:"/entries"},"Entries"),(0,u.h)(a.Link,{href:"/entry/new"},"Create"),(0,u.h)(a.Link,{href:"#",onClick:(0,c.default)("logout")},"Logout")))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),l=n(2),c=t.Match=function(e){function t(){for(var t,n,r,i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return t=n=o(this,e.call.apply(e,[this].concat(u))),n.update=function(e){n.nextUrl=e,n.setState({})},r=t,o(n,r)}return i(t,e),t.prototype.componentDidMount=function(){l.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,l.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children[0]&&e.children[0]({url:t,path:n,matches:n===e.path})},t}(a.Component),s=function(e){var t=e.activeClassName,n=e.path,o=r(e,["activeClassName","path"]);return(0,a.h)(c,{path:n||o.href},function(e){var n=e.matches;return(0,a.h)(l.Link,u({},o,{class:[o.class||o.className,n&&t].filter(Boolean).join(" ")}))})};t.Link=s,t.default=c,c.Link=s},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){function t(){for(var e,n,o,i,u=arguments.length,a=Array(u),c=0;c<u;c++)a[c]=arguments[c];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.join=function(){},o.login=function(e){e.preventDefault(),(0,l.default)("login",{user:{username:o.base.querySelector("#lusername").value,password:o.base.querySelector("#lpassword").value}})()},i=n,r(o,i)}return o(t,e),i(t,[{key:"render",value:function(){return(0,u.h)("div",{class:"login-page-wrapper"},(0,u.h)("h1",{class:"center-text"},"Journalize"),(0,u.h)("h4",{class:"center-text"},"Private and public journal entries"),(0,u.h)("form",{action:"javscript:",onSubmit:this.join,class:"join-form pure-form pure-form-stacked full-width"},(0,u.h)("fieldset",null,(0,u.h)("legend",null,"Create an Account"),(0,u.h)("input",{placeholder:"username",autocapitalize:"off",class:"needsclick"}),(0,u.h)("input",{type:"password",placeholder:"password",class:"needsclick"}),(0,u.h)("input",{type:"submit",class:"pure-button pure-button-primary"}))),(0,u.h)("form",{action:"javascript:",onSubmit:this.login,class:"login-form pure-form pure-form-stacked full-width"},(0,u.h)("fieldset",null,(0,u.h)("legend",null,"or Login"),(0,u.h)("input",{id:"lusername",placeholder:"username",autocapitalize:"off",class:"needsclick"}),(0,u.h)("input",{id:"lpassword",type:"password",placeholder:"password",class:"needsclick"}),(0,u.h)("input",{type:"submit",class:"pure-button pure-button-primary"}))))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=n(13),l=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){function t(){return r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(e){var t=e.entries;return t=t||[],(0,u.h)("entry-list",null,t.map(function(e){return(0,u.h)(l.default,{entry:e})}))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(){return r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(e){var t=e.entry;return(0,u.h)("div",{class:"entry-preview"},(0,u.h)("a",{class:"entry-link",href:"/entry/"+t.id},t.date),(0,u.h)("span",null,t.isPublic?"🔓":"🔐"),"✖",(0,u.h)("p",{class:"entry-text"},t.text.length>140?t.text.substr(0,140)+"...":t.text))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=n(1),c=r(l),s=n(3),f=r(s);t.default=function(e){function t(){for(var e,n,r,i,u=arguments.length,a=Array(u),l=0;l<u;l++)a[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.upsert=function(e){var t=r.props.entry;if(t.newEntry){if(t.postPending)return;t.date=r.base.querySelector("#entryDate").innerText,t.text=r.base.querySelector("#entryText").innerText,t.isPublic=r.base.querySelector("#isPublic").checked,(0,c.default)("create",{entry:t,entryIndex:r.props.entryIndex})()}else r.update(e)},r.update=function(e){var t;switch(e.target.nodeName){case"H1":t="date";break;case"PRE":t="text"}var n={entryIndex:r.props.entryIndex,property:t,entry:{id:r.props.entry.id}};n.entry[t]=e.target.innerText,(0,c.default)("update",n)()},r.togglePublic=function(){var e={entryIndex:r.props.entryIndex,property:"isPublic",entry:{id:r.props.entry.id,isPublic:r.base.querySelector("#isPublic").checked}};(0,c.default)("update",e)()},i=n,o(r,i)}return i(t,e),u(t,[{key:"shouldComponentUpdate",value:function(e){var t=this.props.entry,n=e.entry;return!t||!n||(n.date!==t.date||n.text!==t.text.trim()||n.isPublic!==t.isPublic)}},{key:"render",value:function(e){var t=e.entry;if(e.entryReady)return t?(0,a.h)("entry-view",null,(0,a.h)("h1",{id:"entryDate",contenteditable:!0,onInput:this.upsert},t.date),"Public ",(0,a.h)("input",{id:"isPublic",type:"checkbox",onClick:this.togglePublic,checked:t.isPublic}),(0,a.h)("pre",{id:"entryText",contenteditable:!0,onInput:this.upsert,class:"entry-text"},t.text)):(0,a.h)(f.default,null)}}]),t}(a.Component)},function(e,t){"use strict";function n(e,t){var n=this;Object.keys(t).forEach(function(r){var o=t[r].bind(n,e);document.addEventListener(r,o,!1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),i=r(o),u=n(21),a=r(u);t.default=Object.assign(i.default,a.default)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(19),i=r(o),u=n(2),a=n(4),l=r(a);t.default={login:function(e,t){localStorage.clear(),e.setState({loading:e.state.loading-1}),e.setState({loading:e.state.loading+1}),i.default.login(t.detail.user).then(function(){e.setState(Object.assign(e.state,{loggedIn:!0,loading:e.state.loading-1}),function(){(0,u.route)("/entries")})}).catch(function(e){console.log("error",e)})},logout:function(e){i.default.logout().then(function(){localStorage.clear(),e.setState((0,l.default)()),(0,u.route)("/")}).catch(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={create:function(e){return(0,o.default)({url:"/api/user",method:"POST",body:e})},login:function(e){return(0,o.default)({url:"/api/user/login",method:"POST",body:e})},logout:function(){return(0,o.default)({url:"/api/user/logout",method:"POST"})}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=[];for(var n in e||{})t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return 0===t.length?"":t.join("&")},r=function(e){var t=document.createElement("a");return t.href=e,t.href.length>0&&"&"===t.href[t.href.length-1]&&(t.href=t.href.slice(0,-1)),t},o=function(e,t){var o=r(e),i=o.search,u=n(t);return 0===u.length?e:(0!==i.length?("&"===o.search[o.search.length-1]&&(o.search=o.search.slice(0,-1)),o.search+="&"+u):o.search=u,o.href)};t.toQueryString=n,t.parseURL=r,t.appendParams=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(22),i=r(o),u=(n(2),n(23)),a=r(u),l=n(6),c=!1,s=function(e){if(e.state.loggedIn&&!c){c=!0;var t=localStorage.getItem("timestamp");t?m(e,{detail:{timestamp:t}}):v(e)}},f=function(e,t){var n=t.detail.entry;n.postPending||(e.state.entries[t.detail.entryIndex].postPending=!0,e.setState({loading:e.state.loading+1,entry:n,entries:[].concat(e.state.entries)}),i.default.create(n).then(function(t){e.state.entry.id=t.id,e.state.entries[0].id=t.id,delete e.state.entries[0].postPending,delete e.state.entries[0].newEntry,delete e.state.entries[0].needsSync,e.setState({loading:e.state.loading-1,entry:Object.assign({},e.state.entry),entries:[].concat(e.state.entries)})}).catch(function(e){console.log("error",e)}))},p=(0,a.default)(f,500),d=function(){},h=function(e,t){var n=t.detail,r=n.entry[n.property];if("string"==typeof r&&(r=r.trim()),n.entry[n.property]=n.entry[n.property],e.state.entries[n.entryIndex][n.property]!==n.entry[n.property])if(e.state.entries[n.entryIndex][n.property]=n.entry[n.property],e.setState({entries:[].concat(e.state.entries)},function(){localStorage.setItem("entries",JSON.stringify(e.state.entries))}),e.state.entries[n.entryIndex].needsSync=!0,n.entry.newEntry){if(n.entry.postPending)return;e.state.entries[n.entryIndex].postPending=!0,i.default.create(n.entry).then(function(e){console.log(e)}).catch(function(){})}else i.default.update(n.entry).then(function(){}).catch(function(){})},y=(0,a.default)(h,500),b=function(){},v=function(e){e.state.entries||(e.setState({loading:e.state.loading+1}),i.default.getAllForUser().then(function(t){e.setState({entries:t.entries,loading:e.state.loading-1},function(){g(e,{detail:{id:e.state.entryId,entryReady:!0}}),localStorage.setItem("entries",JSON.stringify(t.entries)),localStorage.setItem("timestamp",t.timestamp)})}).catch(function(e){console.log("error",e)}))},m=function(e,t){e.setState({loading:e.state.loading+1}),i.default.syncForUser(t.detail.timestamp).then(function(t){if(0===t.entries.length)return e.setState({loading:e.state.loading-1}),void localStorage.setItem("timestamp",t.timestamp);t.entries.forEach(function(t){var n=(0,l.findObjectIndexById)(t.id,e.state.entries);n>-1?t.deleted?e.state.entries=(0,l.removeObjectByIndex)(n,e.state.entries):e.state.entries[n]=t:e.state.entries.unshift(t)}),e.setState({loading:e.state.loading-1,entries:[].concat(e.state.entries)},function(){"/entry"===e.view&&e.state.entryId&&g(e,{detail:{id:e.state.entryId,entryReady:!0}}),localStorage.setItem("entries",JSON.stringify(e.state.entries)),localStorage.setItem("timestamp",t.timestamp)})}).catch(function(e){console.log("error",e)})},g=function(e,t){if(e.state.entries&&t&&t.detail&&t.detail.id&&-1!==t.detail.id){var n=(0,l.findObjectIndexById)(parseInt(t.detail.id,10),e.state.entries),r=e.state.entries[n];e.setState({entry:r,entryIndex:n,entryReady:!!r||!!t.detail.entryReady})}};t.default={fetchData:s,create:p,get:d,update:y,del:b,getAllForUser:v,syncForUser:m,setEntry:g,newEntry:function(e){var t={id:Date.now(),date:(new Date).toISOString().slice(0,10),text:"",isPublic:0,needsSync:!0,newEntry:!0};e.setState({entryIndex:0,entries:[t].concat(e.state.entries)},function(){g(e,{detail:{id:t.id,entryReady:!0}})})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={create:function(e){return(0,o.default)({url:"/api/entry",method:"POST",body:e})},get:function(){return(0,o.default)({url:"/api/entry/"+entry.id})},update:function(e){return(0,o.default)({url:"/api/entry/"+e.id,method:"PATCH",body:e})},del:function(e){return(0,o.default)({url:"/api/entry/"+e,method:"DELETE"})},getAllForUser:function(){return(0,o.default)({url:"/api/entries"})},syncForUser:function(e){return(0,o.default)({url:"/api/entries/sync",query:{timestamp:e}})}}},function(e,t){"use strict";function n(e,t,n){var r;return function(){var o=this,i=arguments,u=function(){r=null,n||e.apply(o,i)},a=n&&!r;clearTimeout(r),r=setTimeout(u,t),a&&e.apply(o,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function r(e){var t=e.url.lastIndexOf("/")>0?e.url.substr(0,e.url.lastIndexOf("/")):e.url;if(this.view=t,"/entry"!==t&&"/"!==t&&!this.state.loggedIn)return route("/");a.call(this,t,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.handleRouteChange=r;var o=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n(6),a=function(e,t){switch(e){case"/":l.call(this,t);break;case"/entries":c.call(this,t);break;case"/entry":s.call(this,t)}},l=function(){this.state.loggedIn&&route("/entries")},c=function(){if(Array.isArray(this.state.entries)){var e=this.state.entries[0];e.newEntry&&!e.text&&this.setState({entries:(0,u.removeObjectByIndex)(0,this.state.entries)})}},s=function(e){var t;try{t=e.current.attributes.id}catch(e){}t&&("new"===t?(0,i.default)("newEntry")():(0,i.default)("setEntry",{id:t})())}}]);