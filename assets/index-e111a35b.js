function ux(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ym(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lE={exports:{}},gh={},uE={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),cx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),fx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),yx=Symbol.for("react.suspense"),vx=Symbol.for("react.memo"),wx=Symbol.for("react.lazy"),Av=Symbol.iterator;function Ex(t){return t===null||typeof t!="object"?null:(t=Av&&t[Av]||t["@@iterator"],typeof t=="function"?t:null)}var cE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hE=Object.assign,dE={};function Co(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}Co.prototype.isReactComponent={};Co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fE(){}fE.prototype=Co.prototype;function Xm(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}var Jm=Xm.prototype=new fE;Jm.constructor=Xm;hE(Jm,Co.prototype);Jm.isPureReactComponent=!0;var bv=Array.isArray,pE=Object.prototype.hasOwnProperty,Zm={current:null},mE={key:!0,ref:!0,__self:!0,__source:!0};function gE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pE.call(e,r)&&!mE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cl,type:t,key:s,ref:o,props:i,_owner:Zm.current}}function _x(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function Sx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nv=/\/+/g;function Hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sx(""+t.key):e.toString(36)}function Bu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cl:case cx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hd(o,0):r,bv(i)?(n="",t!=null&&(n=t.replace(Nv,"$&/")+"/"),Bu(i,e,n,"",function(u){return u})):i!=null&&(eg(i)&&(i=_x(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hd(s,a);o+=Bu(s,e,n,l,i)}else if(l=Ex(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hd(s,a++),o+=Bu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lu(t,e,n){if(t==null)return t;var r=[],i=0;return Bu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Tx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},zu={transition:null},Cx={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:zu,ReactCurrentOwner:Zm};Ee.Children={map:lu,forEach:function(t,e,n){lu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lu(t,function(){e++}),e},toArray:function(t){return lu(t,function(e){return e})||[]},only:function(t){if(!eg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=Co;Ee.Fragment=hx;Ee.Profiler=fx;Ee.PureComponent=Xm;Ee.StrictMode=dx;Ee.Suspense=yx;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pE.call(e,l)&&!mE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Cl,type:t.type,key:i,ref:s,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:mx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:px,_context:t},t.Consumer=t};Ee.createElement=gE;Ee.createFactory=function(t){var e=gE.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:gx,render:t}};Ee.isValidElement=eg;Ee.lazy=function(t){return{$$typeof:wx,_payload:{_status:-1,_result:t},_init:Tx}};Ee.memo=function(t,e){return{$$typeof:vx,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=zu.transition;zu.transition={};try{t()}finally{zu.transition=e}};Ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ee.useCallback=function(t,e){return en.current.useCallback(t,e)};Ee.useContext=function(t){return en.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return en.current.useEffect(t,e)};Ee.useId=function(){return en.current.useId()};Ee.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return en.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Ee.useRef=function(t){return en.current.useRef(t)};Ee.useState=function(t){return en.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return en.current.useTransition()};Ee.version="18.2.0";uE.exports=Ee;var T=uE.exports;const Ye=Ym(T),Ix=ux({__proto__:null,default:Ye},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=T,xx=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),Ax=Object.prototype.hasOwnProperty,bx=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nx={key:!0,ref:!0,__self:!0,__source:!0};function yE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ax.call(e,r)&&!Nx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xx,type:t,key:s,ref:o,props:i,_owner:bx.current}}gh.Fragment=Rx;gh.jsx=yE;gh.jsxs=yE;lE.exports=gh;var _=lE.exports,Jf={},vE={exports:{}},En={},wE={exports:{}},EE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,H){var Q=P.length;P.push(H);e:for(;0<Q;){var ve=Q-1>>>1,U=P[ve];if(0<i(U,H))P[ve]=H,P[Q]=U,Q=ve;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var H=P[0],Q=P.pop();if(Q!==H){P[0]=Q;e:for(var ve=0,U=P.length,B=U>>>1;ve<B;){var $=2*(ve+1)-1,Y=P[$],I=$+1,ge=P[I];if(0>i(Y,Q))I<U&&0>i(ge,Y)?(P[ve]=ge,P[I]=Q,ve=I):(P[ve]=Y,P[$]=Q,ve=$);else if(I<U&&0>i(ge,Q))P[ve]=ge,P[I]=Q,ve=I;else break e}}return H}function i(P,H){var Q=P.sortIndex-H.sortIndex;return Q!==0?Q:P.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,m=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(P){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=P)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function g(P){if(v=!1,w(P),!m)if(n(l)!==null)m=!0,de(S);else{var H=n(u);H!==null&&fe(g,H.startTime-P)}}function S(P,H){m=!1,v&&(v=!1,y(C),C=-1),f=!0;var Q=d;try{for(w(H),h=n(l);h!==null&&(!(h.expirationTime>H)||P&&!oe());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,d=h.priorityLevel;var U=ve(h.expirationTime<=H);H=t.unstable_now(),typeof U=="function"?h.callback=U:h===n(l)&&r(l),w(H)}else r(l);h=n(l)}if(h!==null)var B=!0;else{var $=n(u);$!==null&&fe(g,$.startTime-H),B=!1}return B}finally{h=null,d=Q,f=!1}}var x=!1,A=null,C=-1,j=5,M=-1;function oe(){return!(t.unstable_now()-M<j)}function z(){if(A!==null){var P=t.unstable_now();M=P;var H=!0;try{H=A(!0,P)}finally{H?ye():(x=!1,A=null)}}else x=!1}var ye;if(typeof p=="function")ye=function(){p(z)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ne=_e.port2;_e.port1.onmessage=z,ye=function(){ne.postMessage(null)}}else ye=function(){E(z,0)};function de(P){A=P,x||(x=!0,ye())}function fe(P,H){C=E(function(){P(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,de(S))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var Q=d;d=H;try{return P()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=d;d=P;try{return H()}finally{d=Q}},t.unstable_scheduleCallback=function(P,H,Q){var ve=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ve+Q:ve):Q=ve,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Q+U,P={id:c++,callback:H,priorityLevel:P,startTime:Q,expirationTime:U,sortIndex:-1},Q>ve?(P.sortIndex=Q,e(u,P),n(l)===null&&P===n(u)&&(v?(y(C),C=-1):v=!0,fe(g,Q-ve))):(P.sortIndex=U,e(l,P),m||f||(m=!0,de(S))),P},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(P){var H=d;return function(){var Q=d;d=H;try{return P.apply(this,arguments)}finally{d=Q}}}})(EE);wE.exports=EE;var Px=wE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _E=T,yn=Px;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var SE=new Set,$a={};function fs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for($a[t]=e,t=0;t<e.length;t++)SE.add(e[t])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zf=Object.prototype.hasOwnProperty,Ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pv={},Ov={};function Dx(t){return Zf.call(Ov,t)?!0:Zf.call(Pv,t)?!1:Ox.test(t)?Ov[t]=!0:(Pv[t]=!0,!1)}function Lx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mx(t,e,n,r){if(e===null||typeof e>"u"||Lx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tg=/[\-:]([a-z])/g;function ng(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tg,ng);Pt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tg,ng);Pt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tg,ng);Pt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rg(t,e,n,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mx(e,n,i,r)&&(n=null),r||i===null?Dx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fr=_E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uu=Symbol.for("react.element"),Is=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),ig=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),tp=Symbol.for("react.suspense"),np=Symbol.for("react.suspense_list"),og=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),IE=Symbol.for("react.offscreen"),Dv=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=Dv&&t[Dv]||t["@@iterator"],typeof t=="function"?t:null)}var Je=Object.assign,qd;function aa(t){if(qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qd=e&&e[1]||""}return`
`+qd+t}var Wd=!1;function Kd(t,e){if(!t||Wd)return"";Wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function $x(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=Kd(t.type,!1),t;case 11:return t=Kd(t.type.render,!1),t;case 1:return t=Kd(t.type,!0),t;default:return""}}function rp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Is:return"Portal";case ep:return"Profiler";case ig:return"StrictMode";case tp:return"Suspense";case np:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case CE:return(t.displayName||"Context")+".Consumer";case TE:return(t._context.displayName||"Context")+".Provider";case sg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case og:return e=t.displayName||null,e!==null?e:rp(t.type)||"Memo";case Kr:e=t._payload,t=t._init;try{return rp(t(e))}catch{}}return null}function Fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rp(e);case 8:return e===ig?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ux(t){var e=kE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cu(t){t._valueTracker||(t._valueTracker=Ux(t))}function xE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ip(t,e){var n=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function RE(t,e){e=e.checked,e!=null&&rg(t,"checked",e,!1)}function sp(t,e){RE(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?op(t,e.type,n):e.hasOwnProperty("defaultValue")&&op(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function op(t,e,n){(e!=="number"||gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ap(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $v(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(la(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function AE(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hu,NE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hu=hu||document.createElement("div"),hu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jx=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function PE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function OE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=PE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Bx=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function up(t,e){if(e){if(Bx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function cp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=null;function ag(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dp=null,Hs=null,qs=null;function Uv(t){if(t=xl(t)){if(typeof dp!="function")throw Error(D(280));var e=t.stateNode;e&&(e=_h(e),dp(t.stateNode,t.type,e))}}function DE(t){Hs?qs?qs.push(t):qs=[t]:Hs=t}function LE(){if(Hs){var t=Hs,e=qs;if(qs=Hs=null,Uv(t),e)for(t=0;t<e.length;t++)Uv(e[t])}}function ME(t,e){return t(e)}function $E(){}var Gd=!1;function FE(t,e,n){if(Gd)return t(e,n);Gd=!0;try{return ME(t,e,n)}finally{Gd=!1,(Hs!==null||qs!==null)&&($E(),LE())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var r=_h(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var fp=!1;if(Ar)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){fp=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{fp=!1}function zx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var wa=!1,yc=null,vc=!1,pp=null,Vx={onError:function(t){wa=!0,yc=t}};function Hx(t,e,n,r,i,s,o,a,l){wa=!1,yc=null,zx.apply(Vx,arguments)}function qx(t,e,n,r,i,s,o,a,l){if(Hx.apply(this,arguments),wa){if(wa){var u=yc;wa=!1,yc=null}else throw Error(D(198));vc||(vc=!0,pp=u)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function UE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jv(t){if(ps(t)!==t)throw Error(D(188))}function Wx(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jv(i),t;if(s===r)return jv(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function jE(t){return t=Wx(t),t!==null?BE(t):null}function BE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=BE(t);if(e!==null)return e;t=t.sibling}return null}var zE=yn.unstable_scheduleCallback,Bv=yn.unstable_cancelCallback,Kx=yn.unstable_shouldYield,Gx=yn.unstable_requestPaint,it=yn.unstable_now,Qx=yn.unstable_getCurrentPriorityLevel,lg=yn.unstable_ImmediatePriority,VE=yn.unstable_UserBlockingPriority,wc=yn.unstable_NormalPriority,Yx=yn.unstable_LowPriority,HE=yn.unstable_IdlePriority,yh=null,or=null;function Xx(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(yh,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:eR,Jx=Math.log,Zx=Math.LN2;function eR(t){return t>>>=0,t===0?32:31-(Jx(t)/Zx|0)|0}var du=64,fu=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ua(a):(s&=o,s!==0&&(r=ua(s)))}else o=n&~i,o!==0?r=ua(o):s!==0&&(r=ua(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bn(e),i=1<<n,r|=t[n],e&=~i;return r}function tR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=tR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qE(){var t=du;return du<<=1,!(du&4194240)&&(du=64),t}function Qd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function rR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ug(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Oe=0;function WE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var KE,cg,GE,QE,YE,gp=!1,pu=[],ai=null,li=null,ui=null,ja=new Map,Ba=new Map,Yr=[],iR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zv(t,e){switch(t){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":ui=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function Ko(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xl(e),e!==null&&cg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sR(t,e,n,r,i){switch(e){case"focusin":return ai=Ko(ai,t,e,n,r,i),!0;case"dragenter":return li=Ko(li,t,e,n,r,i),!0;case"mouseover":return ui=Ko(ui,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ja.set(s,Ko(ja.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ba.set(s,Ko(Ba.get(s)||null,t,e,n,r,i)),!0}return!1}function XE(t){var e=Ui(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=UE(n),e!==null){t.blockedOn=e,YE(t.priority,function(){GE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hp=r,n.target.dispatchEvent(r),hp=null}else return e=xl(n),e!==null&&cg(e),t.blockedOn=n,!1;e.shift()}return!0}function Vv(t,e,n){Vu(t)&&n.delete(e)}function oR(){gp=!1,ai!==null&&Vu(ai)&&(ai=null),li!==null&&Vu(li)&&(li=null),ui!==null&&Vu(ui)&&(ui=null),ja.forEach(Vv),Ba.forEach(Vv)}function Go(t,e){t.blockedOn===e&&(t.blockedOn=null,gp||(gp=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,oR)))}function za(t){function e(i){return Go(i,t)}if(0<pu.length){Go(pu[0],t);for(var n=1;n<pu.length;n++){var r=pu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ai!==null&&Go(ai,t),li!==null&&Go(li,t),ui!==null&&Go(ui,t),ja.forEach(e),Ba.forEach(e),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)XE(n),n.blockedOn===null&&Yr.shift()}var Ws=Fr.ReactCurrentBatchConfig,_c=!0;function aR(t,e,n,r){var i=Oe,s=Ws.transition;Ws.transition=null;try{Oe=1,hg(t,e,n,r)}finally{Oe=i,Ws.transition=s}}function lR(t,e,n,r){var i=Oe,s=Ws.transition;Ws.transition=null;try{Oe=4,hg(t,e,n,r)}finally{Oe=i,Ws.transition=s}}function hg(t,e,n,r){if(_c){var i=yp(t,e,n,r);if(i===null)of(t,e,r,Sc,n),zv(t,r);else if(sR(i,t,e,n,r))r.stopPropagation();else if(zv(t,r),e&4&&-1<iR.indexOf(t)){for(;i!==null;){var s=xl(i);if(s!==null&&KE(s),s=yp(t,e,n,r),s===null&&of(t,e,r,Sc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else of(t,e,r,null,n)}}var Sc=null;function yp(t,e,n,r){if(Sc=null,t=ag(r),t=Ui(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=UE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sc=t,null}function JE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qx()){case lg:return 1;case VE:return 4;case wc:case Yx:return 16;case HE:return 536870912;default:return 16}default:return 16}}var ri=null,dg=null,Hu=null;function ZE(){if(Hu)return Hu;var t,e=dg,n=e.length,r,i="value"in ri?ri.value:ri.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Hu=i.slice(t,1<r?1-r:void 0)}function qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mu(){return!0}function Hv(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mu:Hv,this.isPropagationStopped=Hv,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fg=_n(Io),kl=Je({},Io,{view:0,detail:0}),uR=_n(kl),Yd,Xd,Qo,vh=Je({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(Yd=t.screenX-Qo.screenX,Xd=t.screenY-Qo.screenY):Xd=Yd=0,Qo=t),Yd)},movementY:function(t){return"movementY"in t?t.movementY:Xd}}),qv=_n(vh),cR=Je({},vh,{dataTransfer:0}),hR=_n(cR),dR=Je({},kl,{relatedTarget:0}),Jd=_n(dR),fR=Je({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),pR=_n(fR),mR=Je({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gR=_n(mR),yR=Je({},Io,{data:0}),Wv=_n(yR),vR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ER={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _R(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ER[t])?!!e[t]:!1}function pg(){return _R}var SR=Je({},kl,{key:function(t){if(t.key){var e=vR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pg,charCode:function(t){return t.type==="keypress"?qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TR=_n(SR),CR=Je({},vh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kv=_n(CR),IR=Je({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pg}),kR=_n(IR),xR=Je({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),RR=_n(xR),AR=Je({},vh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bR=_n(AR),NR=[9,13,27,32],mg=Ar&&"CompositionEvent"in window,Ea=null;Ar&&"documentMode"in document&&(Ea=document.documentMode);var PR=Ar&&"TextEvent"in window&&!Ea,e_=Ar&&(!mg||Ea&&8<Ea&&11>=Ea),Gv=String.fromCharCode(32),Qv=!1;function t_(t,e){switch(t){case"keyup":return NR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function OR(t,e){switch(t){case"compositionend":return n_(e);case"keypress":return e.which!==32?null:(Qv=!0,Gv);case"textInput":return t=e.data,t===Gv&&Qv?null:t;default:return null}}function DR(t,e){if(xs)return t==="compositionend"||!mg&&t_(t,e)?(t=ZE(),Hu=dg=ri=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e_&&e.locale!=="ko"?null:e.data;default:return null}}var LR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LR[t.type]:e==="textarea"}function r_(t,e,n,r){DE(r),e=Tc(e,"onChange"),0<e.length&&(n=new fg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _a=null,Va=null;function MR(t){p_(t,0)}function wh(t){var e=bs(t);if(xE(e))return t}function $R(t,e){if(t==="change")return e}var i_=!1;if(Ar){var Zd;if(Ar){var ef="oninput"in document;if(!ef){var Xv=document.createElement("div");Xv.setAttribute("oninput","return;"),ef=typeof Xv.oninput=="function"}Zd=ef}else Zd=!1;i_=Zd&&(!document.documentMode||9<document.documentMode)}function Jv(){_a&&(_a.detachEvent("onpropertychange",s_),Va=_a=null)}function s_(t){if(t.propertyName==="value"&&wh(Va)){var e=[];r_(e,Va,t,ag(t)),FE(MR,e)}}function FR(t,e,n){t==="focusin"?(Jv(),_a=e,Va=n,_a.attachEvent("onpropertychange",s_)):t==="focusout"&&Jv()}function UR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wh(Va)}function jR(t,e){if(t==="click")return wh(e)}function BR(t,e){if(t==="input"||t==="change")return wh(e)}function zR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:zR;function Ha(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zf.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function Zv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function e0(t,e){var n=Zv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zv(n)}}function o_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a_(){for(var t=window,e=gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gc(t.document)}return e}function gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VR(t){var e=a_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o_(n.ownerDocument.documentElement,n)){if(r!==null&&gg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=e0(n,s);var o=e0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HR=Ar&&"documentMode"in document&&11>=document.documentMode,Rs=null,vp=null,Sa=null,wp=!1;function t0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wp||Rs==null||Rs!==gc(r)||(r=Rs,"selectionStart"in r&&gg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sa&&Ha(Sa,r)||(Sa=r,r=Tc(vp,"onSelect"),0<r.length&&(e=new fg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rs)))}function gu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},tf={},l_={};Ar&&(l_=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Eh(t){if(tf[t])return tf[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l_)return tf[t]=e[n];return t}var u_=Eh("animationend"),c_=Eh("animationiteration"),h_=Eh("animationstart"),d_=Eh("transitionend"),f_=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(t,e){f_.set(t,e),fs(e,[t])}for(var nf=0;nf<n0.length;nf++){var rf=n0[nf],qR=rf.toLowerCase(),WR=rf[0].toUpperCase()+rf.slice(1);Ai(qR,"on"+WR)}Ai(u_,"onAnimationEnd");Ai(c_,"onAnimationIteration");Ai(h_,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(d_,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KR=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function r0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qx(r,e,void 0,t),t.currentTarget=null}function p_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;r0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;r0(i,a,u),s=l}}}if(vc)throw t=pp,vc=!1,pp=null,t}function Ue(t,e){var n=e[Cp];n===void 0&&(n=e[Cp]=new Set);var r=t+"__bubble";n.has(r)||(m_(e,t,2,!1),n.add(r))}function sf(t,e,n){var r=0;e&&(r|=4),m_(n,t,r,e)}var yu="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[yu]){t[yu]=!0,SE.forEach(function(n){n!=="selectionchange"&&(KR.has(n)||sf(n,!1,t),sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yu]||(e[yu]=!0,sf("selectionchange",!1,e))}}function m_(t,e,n,r){switch(JE(e)){case 1:var i=aR;break;case 4:i=lR;break;default:i=hg}n=i.bind(null,e,n,t),i=void 0,!fp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function of(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ui(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}FE(function(){var u=s,c=ag(n),h=[];e:{var d=f_.get(t);if(d!==void 0){var f=fg,m=t;switch(t){case"keypress":if(qu(n)===0)break e;case"keydown":case"keyup":f=TR;break;case"focusin":m="focus",f=Jd;break;case"focusout":m="blur",f=Jd;break;case"beforeblur":case"afterblur":f=Jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=qv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=hR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=kR;break;case u_:case c_:case h_:f=pR;break;case d_:f=RR;break;case"scroll":f=uR;break;case"wheel":f=bR;break;case"copy":case"cut":case"paste":f=gR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Kv}var v=(e&4)!==0,E=!v&&t==="scroll",y=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,w;p!==null;){w=p;var g=w.stateNode;if(w.tag===5&&g!==null&&(w=g,y!==null&&(g=Ua(p,y),g!=null&&v.push(Wa(p,g,w)))),E)break;p=p.return}0<v.length&&(d=new f(d,m,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==hp&&(m=n.relatedTarget||n.fromElement)&&(Ui(m)||m[br]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?Ui(m):null,m!==null&&(E=ps(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(v=qv,g="onMouseLeave",y="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Kv,g="onPointerLeave",y="onPointerEnter",p="pointer"),E=f==null?d:bs(f),w=m==null?d:bs(m),d=new v(g,p+"leave",f,n,c),d.target=E,d.relatedTarget=w,g=null,Ui(c)===u&&(v=new v(y,p+"enter",m,n,c),v.target=w,v.relatedTarget=E,g=v),E=g,f&&m)t:{for(v=f,y=m,p=0,w=v;w;w=_s(w))p++;for(w=0,g=y;g;g=_s(g))w++;for(;0<p-w;)v=_s(v),p--;for(;0<w-p;)y=_s(y),w--;for(;p--;){if(v===y||y!==null&&v===y.alternate)break t;v=_s(v),y=_s(y)}v=null}else v=null;f!==null&&i0(h,d,f,v,!1),m!==null&&E!==null&&i0(h,E,m,v,!0)}}e:{if(d=u?bs(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var S=$R;else if(Yv(d))if(i_)S=BR;else{S=UR;var x=FR}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=jR);if(S&&(S=S(t,u))){r_(h,S,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&op(d,"number",d.value)}switch(x=u?bs(u):window,t){case"focusin":(Yv(x)||x.contentEditable==="true")&&(Rs=x,vp=u,Sa=null);break;case"focusout":Sa=vp=Rs=null;break;case"mousedown":wp=!0;break;case"contextmenu":case"mouseup":case"dragend":wp=!1,t0(h,n,c);break;case"selectionchange":if(HR)break;case"keydown":case"keyup":t0(h,n,c)}var A;if(mg)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else xs?t_(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(e_&&n.locale!=="ko"&&(xs||C!=="onCompositionStart"?C==="onCompositionEnd"&&xs&&(A=ZE()):(ri=c,dg="value"in ri?ri.value:ri.textContent,xs=!0)),x=Tc(u,C),0<x.length&&(C=new Wv(C,t,null,n,c),h.push({event:C,listeners:x}),A?C.data=A:(A=n_(n),A!==null&&(C.data=A)))),(A=PR?OR(t,n):DR(t,n))&&(u=Tc(u,"onBeforeInput"),0<u.length&&(c=new Wv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}p_(h,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ua(t,n),s!=null&&r.unshift(Wa(t,s,i)),s=Ua(t,e),s!=null&&r.push(Wa(t,s,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function i0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ua(n,s),l!=null&&o.unshift(Wa(n,l,a))):i||(l=Ua(n,s),l!=null&&o.push(Wa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GR=/\r\n?/g,QR=/\u0000|\uFFFD/g;function s0(t){return(typeof t=="string"?t:""+t).replace(GR,`
`).replace(QR,"")}function vu(t,e,n){if(e=s0(e),s0(t)!==e&&n)throw Error(D(425))}function Cc(){}var Ep=null,_p=null;function Sp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tp=typeof setTimeout=="function"?setTimeout:void 0,YR=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,XR=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(t){return o0.resolve(null).then(t).catch(JR)}:Tp;function JR(t){setTimeout(function(){throw t})}function af(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),za(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);za(e)}function ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function a0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),Zn="__reactFiber$"+ko,Ka="__reactProps$"+ko,br="__reactContainer$"+ko,Cp="__reactEvents$"+ko,ZR="__reactListeners$"+ko,eA="__reactHandles$"+ko;function Ui(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=a0(t);t!==null;){if(n=t[Zn])return n;t=a0(t)}return e}t=n,n=t.parentNode}return null}function xl(t){return t=t[Zn]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function _h(t){return t[Ka]||null}var Ip=[],Ns=-1;function bi(t){return{current:t}}function ze(t){0>Ns||(t.current=Ip[Ns],Ip[Ns]=null,Ns--)}function $e(t,e){Ns++,Ip[Ns]=t.current,t.current=e}var Si={},qt=bi(Si),ln=bi(!1),Ji=Si;function io(t,e){var n=t.type.contextTypes;if(!n)return Si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function un(t){return t=t.childContextTypes,t!=null}function Ic(){ze(ln),ze(qt)}function l0(t,e,n){if(qt.current!==Si)throw Error(D(168));$e(qt,e),$e(ln,n)}function g_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,Fx(t)||"Unknown",i));return Je({},n,r)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,Ji=qt.current,$e(qt,t),$e(ln,ln.current),!0}function u0(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=g_(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,ze(ln),ze(qt),$e(qt,t)):ze(ln),$e(ln,n)}var wr=null,Sh=!1,lf=!1;function y_(t){wr===null?wr=[t]:wr.push(t)}function tA(t){Sh=!0,y_(t)}function Ni(){if(!lf&&wr!==null){lf=!0;var t=0,e=Oe;try{var n=wr;for(Oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Sh=!1}catch(i){throw wr!==null&&(wr=wr.slice(t+1)),zE(lg,Ni),i}finally{Oe=e,lf=!1}}return null}var Ps=[],Os=0,xc=null,Rc=0,kn=[],xn=0,Zi=null,Er=1,_r="";function Mi(t,e){Ps[Os++]=Rc,Ps[Os++]=xc,xc=t,Rc=e}function v_(t,e,n){kn[xn++]=Er,kn[xn++]=_r,kn[xn++]=Zi,Zi=t;var r=Er;t=_r;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var s=32-Bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-Bn(e)+i|n<<i|r,_r=s+t}else Er=1<<s|n<<i|r,_r=t}function yg(t){t.return!==null&&(Mi(t,1),v_(t,1,0))}function vg(t){for(;t===xc;)xc=Ps[--Os],Ps[Os]=null,Rc=Ps[--Os],Ps[Os]=null;for(;t===Zi;)Zi=kn[--xn],kn[xn]=null,_r=kn[--xn],kn[xn]=null,Er=kn[--xn],kn[xn]=null}var mn=null,fn=null,Ge=!1,jn=null;function w_(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function c0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,fn=ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:Er,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,fn=null,!0):!1;default:return!1}}function kp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xp(t){if(Ge){var e=fn;if(e){var n=e;if(!c0(t,e)){if(kp(t))throw Error(D(418));e=ci(n.nextSibling);var r=mn;e&&c0(t,e)?w_(r,n):(t.flags=t.flags&-4097|2,Ge=!1,mn=t)}}else{if(kp(t))throw Error(D(418));t.flags=t.flags&-4097|2,Ge=!1,mn=t}}}function h0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function wu(t){if(t!==mn)return!1;if(!Ge)return h0(t),Ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sp(t.type,t.memoizedProps)),e&&(e=fn)){if(kp(t))throw E_(),Error(D(418));for(;e;)w_(t,e),e=ci(e.nextSibling)}if(h0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=mn?ci(t.stateNode.nextSibling):null;return!0}function E_(){for(var t=fn;t;)t=ci(t.nextSibling)}function so(){fn=mn=null,Ge=!1}function wg(t){jn===null?jn=[t]:jn.push(t)}var nA=Fr.ReactCurrentBatchConfig;function $n(t,e){if(t&&t.defaultProps){e=Je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ac=bi(null),bc=null,Ds=null,Eg=null;function _g(){Eg=Ds=bc=null}function Sg(t){var e=Ac.current;ze(Ac),t._currentValue=e}function Rp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){bc=t,Eg=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Eg!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(bc===null)throw Error(D(308));Ds=t,bc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var ji=null;function Tg(t){ji===null?ji=[t]:ji.push(t)}function __(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nr(t,r)}function Nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Cg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nr(t,n)}return i=r.interleaved,i===null?(e.next=e,Tg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nr(t,n)}function Wu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ug(t,n)}}function d0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,r){var i=t.updateQueue;Gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,f=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(f,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(f,h,d):m,d==null)break e;h=Je({},h,d);break e;case 2:Gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=h}}function f0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var T_=new _E.Component().refs;function Ap(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Th={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=fi(t),s=kr(r,i);s.payload=e,n!=null&&(s.callback=n),e=hi(t,s,i),e!==null&&(zn(e,t,i,r),Wu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=fi(t),s=kr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hi(t,s,i),e!==null&&(zn(e,t,i,r),Wu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),r=fi(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=hi(t,i,r),e!==null&&(zn(e,t,r,n),Wu(e,t,r))}};function p0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,r)||!Ha(i,s):!0}function C_(t,e,n){var r=!1,i=Si,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(i=un(e)?Ji:qt.current,r=e.contextTypes,s=(r=r!=null)?io(t,i):Si),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Th,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function m0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Th.enqueueReplaceState(e,e.state,null)}function bp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=T_,Cg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dn(s):(s=un(e)?Ji:qt.current,i.context=io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ap(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Th.enqueueReplaceState(i,i.state,null),Nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===T_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Eu(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function g0(t){var e=t._init;return e(t._payload)}function I_(t){function e(y,p){if(t){var w=y.deletions;w===null?(y.deletions=[p],y.flags|=16):w.push(p)}}function n(y,p){if(!t)return null;for(;p!==null;)e(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(y,p){return y=pi(y,p),y.index=0,y.sibling=null,y}function s(y,p,w){return y.index=w,t?(w=y.alternate,w!==null?(w=w.index,w<p?(y.flags|=2,p):w):(y.flags|=2,p)):(y.flags|=1048576,p)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,p,w,g){return p===null||p.tag!==6?(p=mf(w,y.mode,g),p.return=y,p):(p=i(p,w),p.return=y,p)}function l(y,p,w,g){var S=w.type;return S===ks?c(y,p,w.props.children,g,w.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kr&&g0(S)===p.type)?(g=i(p,w.props),g.ref=Yo(y,p,w),g.return=y,g):(g=Ju(w.type,w.key,w.props,null,y.mode,g),g.ref=Yo(y,p,w),g.return=y,g)}function u(y,p,w,g){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=gf(w,y.mode,g),p.return=y,p):(p=i(p,w.children||[]),p.return=y,p)}function c(y,p,w,g,S){return p===null||p.tag!==7?(p=Gi(w,y.mode,g,S),p.return=y,p):(p=i(p,w),p.return=y,p)}function h(y,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=mf(""+p,y.mode,w),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case uu:return w=Ju(p.type,p.key,p.props,null,y.mode,w),w.ref=Yo(y,null,p),w.return=y,w;case Is:return p=gf(p,y.mode,w),p.return=y,p;case Kr:var g=p._init;return h(y,g(p._payload),w)}if(la(p)||qo(p))return p=Gi(p,y.mode,w,null),p.return=y,p;Eu(y,p)}return null}function d(y,p,w,g){var S=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:a(y,p,""+w,g);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case uu:return w.key===S?l(y,p,w,g):null;case Is:return w.key===S?u(y,p,w,g):null;case Kr:return S=w._init,d(y,p,S(w._payload),g)}if(la(w)||qo(w))return S!==null?null:c(y,p,w,g,null);Eu(y,w)}return null}function f(y,p,w,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return y=y.get(w)||null,a(p,y,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uu:return y=y.get(g.key===null?w:g.key)||null,l(p,y,g,S);case Is:return y=y.get(g.key===null?w:g.key)||null,u(p,y,g,S);case Kr:var x=g._init;return f(y,p,w,x(g._payload),S)}if(la(g)||qo(g))return y=y.get(w)||null,c(p,y,g,S,null);Eu(p,g)}return null}function m(y,p,w,g){for(var S=null,x=null,A=p,C=p=0,j=null;A!==null&&C<w.length;C++){A.index>C?(j=A,A=null):j=A.sibling;var M=d(y,A,w[C],g);if(M===null){A===null&&(A=j);break}t&&A&&M.alternate===null&&e(y,A),p=s(M,p,C),x===null?S=M:x.sibling=M,x=M,A=j}if(C===w.length)return n(y,A),Ge&&Mi(y,C),S;if(A===null){for(;C<w.length;C++)A=h(y,w[C],g),A!==null&&(p=s(A,p,C),x===null?S=A:x.sibling=A,x=A);return Ge&&Mi(y,C),S}for(A=r(y,A);C<w.length;C++)j=f(A,y,C,w[C],g),j!==null&&(t&&j.alternate!==null&&A.delete(j.key===null?C:j.key),p=s(j,p,C),x===null?S=j:x.sibling=j,x=j);return t&&A.forEach(function(oe){return e(y,oe)}),Ge&&Mi(y,C),S}function v(y,p,w,g){var S=qo(w);if(typeof S!="function")throw Error(D(150));if(w=S.call(w),w==null)throw Error(D(151));for(var x=S=null,A=p,C=p=0,j=null,M=w.next();A!==null&&!M.done;C++,M=w.next()){A.index>C?(j=A,A=null):j=A.sibling;var oe=d(y,A,M.value,g);if(oe===null){A===null&&(A=j);break}t&&A&&oe.alternate===null&&e(y,A),p=s(oe,p,C),x===null?S=oe:x.sibling=oe,x=oe,A=j}if(M.done)return n(y,A),Ge&&Mi(y,C),S;if(A===null){for(;!M.done;C++,M=w.next())M=h(y,M.value,g),M!==null&&(p=s(M,p,C),x===null?S=M:x.sibling=M,x=M);return Ge&&Mi(y,C),S}for(A=r(y,A);!M.done;C++,M=w.next())M=f(A,y,C,M.value,g),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?C:M.key),p=s(M,p,C),x===null?S=M:x.sibling=M,x=M);return t&&A.forEach(function(z){return e(y,z)}),Ge&&Mi(y,C),S}function E(y,p,w,g){if(typeof w=="object"&&w!==null&&w.type===ks&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case uu:e:{for(var S=w.key,x=p;x!==null;){if(x.key===S){if(S=w.type,S===ks){if(x.tag===7){n(y,x.sibling),p=i(x,w.props.children),p.return=y,y=p;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kr&&g0(S)===x.type){n(y,x.sibling),p=i(x,w.props),p.ref=Yo(y,x,w),p.return=y,y=p;break e}n(y,x);break}else e(y,x);x=x.sibling}w.type===ks?(p=Gi(w.props.children,y.mode,g,w.key),p.return=y,y=p):(g=Ju(w.type,w.key,w.props,null,y.mode,g),g.ref=Yo(y,p,w),g.return=y,y=g)}return o(y);case Is:e:{for(x=w.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(y,p.sibling),p=i(p,w.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else e(y,p);p=p.sibling}p=gf(w,y.mode,g),p.return=y,y=p}return o(y);case Kr:return x=w._init,E(y,p,x(w._payload),g)}if(la(w))return m(y,p,w,g);if(qo(w))return v(y,p,w,g);Eu(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(y,p.sibling),p=i(p,w),p.return=y,y=p):(n(y,p),p=mf(w,y.mode,g),p.return=y,y=p),o(y)):n(y,p)}return E}var oo=I_(!0),k_=I_(!1),Rl={},ar=bi(Rl),Ga=bi(Rl),Qa=bi(Rl);function Bi(t){if(t===Rl)throw Error(D(174));return t}function Ig(t,e){switch($e(Qa,e),$e(Ga,t),$e(ar,Rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lp(e,t)}ze(ar),$e(ar,e)}function ao(){ze(ar),ze(Ga),ze(Qa)}function x_(t){Bi(Qa.current);var e=Bi(ar.current),n=lp(e,t.type);e!==n&&($e(Ga,t),$e(ar,n))}function kg(t){Ga.current===t&&(ze(ar),ze(Ga))}var Qe=bi(0);function Pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uf=[];function xg(){for(var t=0;t<uf.length;t++)uf[t]._workInProgressVersionPrimary=null;uf.length=0}var Ku=Fr.ReactCurrentDispatcher,cf=Fr.ReactCurrentBatchConfig,es=0,Xe=null,mt=null,_t=null,Oc=!1,Ta=!1,Ya=0,rA=0;function Dt(){throw Error(D(321))}function Rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Ag(t,e,n,r,i,s){if(es=s,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ku.current=t===null||t.memoizedState===null?aA:lA,t=n(r,i),Ta){s=0;do{if(Ta=!1,Ya=0,25<=s)throw Error(D(301));s+=1,_t=mt=null,e.updateQueue=null,Ku.current=uA,t=n(r,i)}while(Ta)}if(Ku.current=Dc,e=mt!==null&&mt.next!==null,es=0,_t=mt=Xe=null,Oc=!1,e)throw Error(D(300));return t}function bg(){var t=Ya!==0;return Ya=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Xe.memoizedState=_t=t:_t=_t.next=t,_t}function Ln(){if(mt===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=_t===null?Xe.memoizedState:_t.next;if(e!==null)_t=e,mt=t;else{if(t===null)throw Error(D(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},_t===null?Xe.memoizedState=_t=t:_t=_t.next=t}return _t}function Xa(t,e){return typeof e=="function"?e(t):e}function hf(t){var e=Ln(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=mt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Xe.lanes|=c,ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Hn(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Xe.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function df(t){var e=Ln(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function R_(){}function A_(t,e){var n=Xe,r=Ln(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,an=!0),r=r.queue,Ng(P_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_t!==null&&_t.memoizedState.tag&1){if(n.flags|=2048,Ja(9,N_.bind(null,n,r,i,e),void 0,null),St===null)throw Error(D(349));es&30||b_(n,e,i)}return i}function b_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function N_(t,e,n,r){e.value=n,e.getSnapshot=r,O_(e)&&D_(t)}function P_(t,e,n){return n(function(){O_(e)&&D_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function D_(t){var e=Nr(t,1);e!==null&&zn(e,t,1,-1)}function y0(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=oA.bind(null,Xe,t),[e.memoizedState,t]}function Ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function L_(){return Ln().memoizedState}function Gu(t,e,n,r){var i=Jn();Xe.flags|=t,i.memoizedState=Ja(1|e,n,void 0,r===void 0?null:r)}function Ch(t,e,n,r){var i=Ln();r=r===void 0?null:r;var s=void 0;if(mt!==null){var o=mt.memoizedState;if(s=o.destroy,r!==null&&Rg(r,o.deps)){i.memoizedState=Ja(e,n,s,r);return}}Xe.flags|=t,i.memoizedState=Ja(1|e,n,s,r)}function v0(t,e){return Gu(8390656,8,t,e)}function Ng(t,e){return Ch(2048,8,t,e)}function M_(t,e){return Ch(4,2,t,e)}function $_(t,e){return Ch(4,4,t,e)}function F_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,Ch(4,4,F_.bind(null,e,t),n)}function Pg(){}function j_(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function B_(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function z_(t,e,n){return es&21?(Hn(n,e)||(n=qE(),Xe.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function iA(t,e){var n=Oe;Oe=n!==0&&4>n?n:4,t(!0);var r=cf.transition;cf.transition={};try{t(!1),e()}finally{Oe=n,cf.transition=r}}function V_(){return Ln().memoizedState}function sA(t,e,n){var r=fi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H_(t))q_(e,n);else if(n=__(t,e,n,r),n!==null){var i=Zt();zn(n,t,r,i),W_(n,e,r)}}function oA(t,e,n){var r=fi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H_(t))q_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(i.next=i,Tg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=__(t,e,i,r),n!==null&&(i=Zt(),zn(n,t,r,i),W_(n,e,r))}}function H_(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function q_(t,e){Ta=Oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function W_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ug(t,n)}}var Dc={readContext:Dn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},aA={readContext:Dn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:v0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4194308,4,F_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gu(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sA.bind(null,Xe,t),[r.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:y0,useDebugValue:Pg,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=y0(!1),e=t[0];return t=iA.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Xe,i=Jn();if(Ge){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),St===null)throw Error(D(349));es&30||b_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,v0(P_.bind(null,r,s,t),[t]),r.flags|=2048,Ja(9,N_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=St.identifierPrefix;if(Ge){var n=_r,r=Er;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lA={readContext:Dn,useCallback:j_,useContext:Dn,useEffect:Ng,useImperativeHandle:U_,useInsertionEffect:M_,useLayoutEffect:$_,useMemo:B_,useReducer:hf,useRef:L_,useState:function(){return hf(Xa)},useDebugValue:Pg,useDeferredValue:function(t){var e=Ln();return z_(e,mt.memoizedState,t)},useTransition:function(){var t=hf(Xa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:R_,useSyncExternalStore:A_,useId:V_,unstable_isNewReconciler:!1},uA={readContext:Dn,useCallback:j_,useContext:Dn,useEffect:Ng,useImperativeHandle:U_,useInsertionEffect:M_,useLayoutEffect:$_,useMemo:B_,useReducer:df,useRef:L_,useState:function(){return df(Xa)},useDebugValue:Pg,useDeferredValue:function(t){var e=Ln();return mt===null?e.memoizedState=t:z_(e,mt.memoizedState,t)},useTransition:function(){var t=df(Xa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:R_,useSyncExternalStore:A_,useId:V_,unstable_isNewReconciler:!1};function lo(t,e){try{var n="",r=e;do n+=$x(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ff(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Np(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cA=typeof WeakMap=="function"?WeakMap:Map;function K_(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mc||(Mc=!0,Bp=r),Np(t,e)},n}function G_(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Np(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Np(t,e),typeof r!="function"&&(di===null?di=new Set([this]):di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function w0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CA.bind(null,t,e,n),e.then(t,t))}function E0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,hi(n,e,1))),n.lanes|=1),t)}var hA=Fr.ReactCurrentOwner,an=!1;function Yt(t,e,n,r){e.child=t===null?k_(e,null,n,r):oo(e,t.child,n,r)}function S0(t,e,n,r,i){n=n.render;var s=e.ref;return Ks(e,i),r=Ag(t,e,n,r,s,i),n=bg(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(Ge&&n&&yg(e),e.flags|=1,Yt(t,e,r,i),e.child)}function T0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Q_(t,e,s,r,i)):(t=Ju(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(o,r)&&t.ref===e.ref)return Pr(t,e,i)}return e.flags|=1,t=pi(s,r),t.ref=e.ref,t.return=e,e.child=t}function Q_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ha(s,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Pr(t,e,i)}return Pp(t,e,n,r,i)}function Y_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Ms,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$e(Ms,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$e(Ms,dn),dn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$e(Ms,dn),dn|=r;return Yt(t,e,i,n),e.child}function X_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pp(t,e,n,r,i){var s=un(n)?Ji:qt.current;return s=io(e,s),Ks(e,i),n=Ag(t,e,n,r,s,i),r=bg(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(Ge&&r&&yg(e),e.flags|=1,Yt(t,e,n,i),e.child)}function C0(t,e,n,r,i){if(un(n)){var s=!0;kc(e)}else s=!1;if(Ks(e,i),e.stateNode===null)Qu(t,e),C_(e,n,r),bp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=un(n)?Ji:qt.current,u=io(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&m0(e,o,r,u),Gr=!1;var d=e.memoizedState;o.state=d,Nc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ln.current||Gr?(typeof c=="function"&&(Ap(e,n,c,r),l=e.memoizedState),(a=Gr||p0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,S_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=un(n)?Ji:qt.current,l=io(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&m0(e,o,r,l),Gr=!1,d=e.memoizedState,o.state=d,Nc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||ln.current||Gr?(typeof f=="function"&&(Ap(e,n,f,r),m=e.memoizedState),(u=Gr||p0(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Op(t,e,n,r,s,i)}function Op(t,e,n,r,i,s){X_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&u0(e,n,!1),Pr(t,e,s);r=e.stateNode,hA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=r.state,i&&u0(e,n,!0),e.child}function J_(t){var e=t.stateNode;e.pendingContext?l0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&l0(t,e.context,!1),Ig(t,e.containerInfo)}function I0(t,e,n,r,i){return so(),wg(i),e.flags|=256,Yt(t,e,n,r),e.child}var Dp={dehydrated:null,treeContext:null,retryLane:0};function Lp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z_(t,e,n){var r=e.pendingProps,i=Qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$e(Qe,i&1),t===null)return xp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xh(o,r,0,null),t=Gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lp(n),e.memoizedState=Dp,t):Og(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=pi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pi(a,s):(s=Gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dp,r}return s=t.child,t=s.sibling,r=pi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Og(t,e){return e=xh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _u(t,e,n,r){return r!==null&&wg(r),oo(e,t.child,null,n),t=Og(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ff(Error(D(422))),_u(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xh({mode:"visible",children:r.children},i,0,null),s=Gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Lp(o),e.memoizedState=Dp,s);if(!(e.mode&1))return _u(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=ff(s,r,void 0),_u(t,e,o,r)}if(a=(o&t.childLanes)!==0,an||a){if(r=St,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nr(t,i),zn(r,t,i,-1))}return Ug(),r=ff(Error(D(421))),_u(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=IA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=ci(i.nextSibling),mn=e,Ge=!0,jn=null,t!==null&&(kn[xn++]=Er,kn[xn++]=_r,kn[xn++]=Zi,Er=t.id,_r=t.overflow,Zi=e),e=Og(e,r.children),e.flags|=4096,e)}function k0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rp(t.return,e,n)}function pf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Yt(t,e,r.children,n),r=Qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&k0(t,n,e);else if(t.tag===19)k0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($e(Qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pf(e,!0,n,null,s);break;case"together":pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fA(t,e,n){switch(e.tag){case 3:J_(e),so();break;case 5:x_(e);break;case 1:un(e.type)&&kc(e);break;case 4:Ig(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$e(Ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($e(Qe,Qe.current&1),e.flags|=128,null):n&e.child.childLanes?Z_(t,e,n):($e(Qe,Qe.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);$e(Qe,Qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return eS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(Qe,Qe.current),r)break;return null;case 22:case 23:return e.lanes=0,Y_(t,e,n)}return Pr(t,e,n)}var tS,Mp,nS,rS;tS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mp=function(){};nS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bi(ar.current);var s=null;switch(n){case"input":i=ip(t,i),r=ip(t,r),s=[];break;case"select":i=Je({},i,{value:void 0}),r=Je({},r,{value:void 0}),s=[];break;case"textarea":i=ap(t,i),r=ap(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cc)}up(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($a.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xo(t,e){if(!Ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pA(t,e,n){var r=e.pendingProps;switch(vg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return un(e.type)&&Ic(),Lt(e),null;case 3:return r=e.stateNode,ao(),ze(ln),ze(qt),xg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Hp(jn),jn=null))),Mp(t,e),Lt(e),null;case 5:kg(e);var i=Bi(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)nS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Lt(e),null}if(t=Bi(ar.current),wu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zn]=e,r[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<ca.length;i++)Ue(ca[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":Lv(r,s),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ue("invalid",r);break;case"textarea":$v(r,s),Ue("invalid",r)}up(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vu(r.textContent,a,t),i=["children",""+a]):$a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ue("scroll",r)}switch(n){case"input":cu(r),Mv(r,s,!0);break;case"textarea":cu(r),Fv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Ka]=r,tS(t,e,!1,!1),e.stateNode=t;e:{switch(o=cp(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ca.length;i++)Ue(ca[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":Lv(t,r),i=ip(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Je({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":$v(t,r),i=ap(t,r),Ue("invalid",t);break;default:i=r}up(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?OE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&NE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fa(t,l):typeof l=="number"&&Fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ue("scroll",t):l!=null&&rg(t,s,l,o))}switch(n){case"input":cu(t),Mv(t,r,!1);break;case"textarea":cu(t),Fv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)rS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=Bi(Qa.current),Bi(ar.current),wu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:vu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return Lt(e),null;case 13:if(ze(Qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ge&&fn!==null&&e.mode&1&&!(e.flags&128))E_(),so(),e.flags|=98560,s=!1;else if(s=wu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Zn]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else jn!==null&&(Hp(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qe.current&1?gt===0&&(gt=3):Ug())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return ao(),Mp(t,e),t===null&&qa(e.stateNode.containerInfo),Lt(e),null;case 10:return Sg(e.type._context),Lt(e),null;case 17:return un(e.type)&&Ic(),Lt(e),null;case 19:if(ze(Qe),s=e.memoizedState,s===null)return Lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xo(s,!1);else{if(gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pc(t),o!==null){for(e.flags|=128,Xo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $e(Qe,Qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>uo&&(e.flags|=128,r=!0,Xo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ge)return Lt(e),null}else 2*it()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,r=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=Qe.current,$e(Qe,r?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return Fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dn&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function mA(t,e){switch(vg(e),e.tag){case 1:return un(e.type)&&Ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),ze(ln),ze(qt),xg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kg(e),null;case 13:if(ze(Qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ze(Qe),null;case 4:return ao(),null;case 10:return Sg(e.type._context),null;case 22:case 23:return Fg(),null;case 24:return null;default:return null}}var Su=!1,Ft=!1,gA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(t,e,r)}else n.current=null}function $p(t,e,n){try{n()}catch(r){et(t,e,r)}}var x0=!1;function yA(t,e){if(Ep=_c,t=a_(),gg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_p={focusedElem:t,selectionRange:n},_c=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,E=m.memoizedState,y=e.stateNode,p=y.getSnapshotBeforeUpdate(e.elementType===e.type?v:$n(e.type,v),E);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(g){et(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return m=x0,x0=!1,m}function Ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$p(e,n,s)}i=i.next}while(i!==r)}}function Ih(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iS(t){var e=t.alternate;e!==null&&(t.alternate=null,iS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Ka],delete e[Cp],delete e[ZR],delete e[eA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sS(t){return t.tag===5||t.tag===3||t.tag===4}function R0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Up(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(r!==4&&(t=t.child,t!==null))for(Up(t,e,n),t=t.sibling;t!==null;)Up(t,e,n),t=t.sibling}function jp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jp(t,e,n),t=t.sibling;t!==null;)jp(t,e,n),t=t.sibling}var xt=null,Fn=!1;function Hr(t,e,n){for(n=n.child;n!==null;)oS(t,e,n),n=n.sibling}function oS(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(yh,n)}catch{}switch(n.tag){case 5:Ft||Ls(n,e);case 6:var r=xt,i=Fn;xt=null,Hr(t,e,n),xt=r,Fn=i,xt!==null&&(Fn?(t=xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Fn?(t=xt,n=n.stateNode,t.nodeType===8?af(t.parentNode,n):t.nodeType===1&&af(t,n),za(t)):af(xt,n.stateNode));break;case 4:r=xt,i=Fn,xt=n.stateNode.containerInfo,Fn=!0,Hr(t,e,n),xt=r,Fn=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$p(n,e,o),i=i.next}while(i!==r)}Hr(t,e,n);break;case 1:if(!Ft&&(Ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){et(n,e,a)}Hr(t,e,n);break;case 21:Hr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Hr(t,e,n),Ft=r):Hr(t,e,n);break;default:Hr(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gA),e.forEach(function(r){var i=kA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Fn=!1;break e;case 3:xt=a.stateNode.containerInfo,Fn=!0;break e;case 4:xt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(xt===null)throw Error(D(160));oS(s,o,i),xt=null,Fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){et(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aS(e,t),e=e.sibling}function aS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),Xn(t),r&4){try{Ca(3,t,t.return),Ih(3,t)}catch(v){et(t,t.return,v)}try{Ca(5,t,t.return)}catch(v){et(t,t.return,v)}}break;case 1:Mn(e,t),Xn(t),r&512&&n!==null&&Ls(n,n.return);break;case 5:if(Mn(e,t),Xn(t),r&512&&n!==null&&Ls(n,n.return),t.flags&32){var i=t.stateNode;try{Fa(i,"")}catch(v){et(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&RE(i,s),cp(a,o);var u=cp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?OE(i,h):c==="dangerouslySetInnerHTML"?NE(i,h):c==="children"?Fa(i,h):rg(i,c,h,u)}switch(a){case"input":sp(i,s);break;case"textarea":AE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Vs(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vs(i,!!s.multiple,s.defaultValue,!0):Vs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ka]=s}catch(v){et(t,t.return,v)}}break;case 6:if(Mn(e,t),Xn(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){et(t,t.return,v)}}break;case 3:if(Mn(e,t),Xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(v){et(t,t.return,v)}break;case 4:Mn(e,t),Xn(t);break;case 13:Mn(e,t),Xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mg=it())),r&4&&A0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(u=Ft)||c,Mn(e,t),Ft=u):Mn(e,t),Xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(q=t,c=t.child;c!==null;){for(h=q=c;q!==null;){switch(d=q,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ca(4,d,d.return);break;case 1:Ls(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){et(r,n,v)}}break;case 5:Ls(d,d.return);break;case 22:if(d.memoizedState!==null){N0(h);continue}}f!==null?(f.return=d,q=f):N0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=PE("display",o))}catch(v){et(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){et(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mn(e,t),Xn(t),r&4&&A0(t);break;case 21:break;default:Mn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sS(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fa(i,""),r.flags&=-33);var s=R0(t);jp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=R0(t);Up(t,a,o);break;default:throw Error(D(161))}}catch(l){et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vA(t,e,n){q=t,lS(t)}function lS(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Su;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Su;var u=Ft;if(Su=o,(Ft=l)&&!u)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?P0(i):l!==null?(l.return=o,q=l):P0(i);for(;s!==null;)q=s,lS(s),s=s.sibling;q=i,Su=a,Ft=u}b0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):b0(t)}}function b0(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||Ih(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&f0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&za(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ft||e.flags&512&&Fp(e)}catch(d){et(e,e.return,d)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function N0(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function P0(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ih(4,e)}catch(l){et(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){et(e,i,l)}}var s=e.return;try{Fp(e)}catch(l){et(e,s,l)}break;case 5:var o=e.return;try{Fp(e)}catch(l){et(e,o,l)}}}catch(l){et(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var wA=Math.ceil,Lc=Fr.ReactCurrentDispatcher,Dg=Fr.ReactCurrentOwner,bn=Fr.ReactCurrentBatchConfig,ke=0,St=null,ut=null,bt=0,dn=0,Ms=bi(0),gt=0,Za=null,ts=0,kh=0,Lg=0,Ia=null,sn=null,Mg=0,uo=1/0,vr=null,Mc=!1,Bp=null,di=null,Tu=!1,ii=null,$c=0,ka=0,zp=null,Yu=-1,Xu=0;function Zt(){return ke&6?it():Yu!==-1?Yu:Yu=it()}function fi(t){return t.mode&1?ke&2&&bt!==0?bt&-bt:nA.transition!==null?(Xu===0&&(Xu=qE()),Xu):(t=Oe,t!==0||(t=window.event,t=t===void 0?16:JE(t.type)),t):1}function zn(t,e,n,r){if(50<ka)throw ka=0,zp=null,Error(D(185));Il(t,n,r),(!(ke&2)||t!==St)&&(t===St&&(!(ke&2)&&(kh|=n),gt===4&&Xr(t,bt)),cn(t,r),n===1&&ke===0&&!(e.mode&1)&&(uo=it()+500,Sh&&Ni()))}function cn(t,e){var n=t.callbackNode;nR(t,e);var r=Ec(t,t===St?bt:0);if(r===0)n!==null&&Bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bv(n),e===1)t.tag===0?tA(O0.bind(null,t)):y_(O0.bind(null,t)),XR(function(){!(ke&6)&&Ni()}),n=null;else{switch(WE(r)){case 1:n=lg;break;case 4:n=VE;break;case 16:n=wc;break;case 536870912:n=HE;break;default:n=wc}n=gS(n,uS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uS(t,e){if(Yu=-1,Xu=0,ke&6)throw Error(D(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var r=Ec(t,t===St?bt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fc(t,r);else{e=r;var i=ke;ke|=2;var s=hS();(St!==t||bt!==e)&&(vr=null,uo=it()+500,Ki(t,e));do try{SA();break}catch(a){cS(t,a)}while(1);_g(),Lc.current=s,ke=i,ut!==null?e=0:(St=null,bt=0,e=gt)}if(e!==0){if(e===2&&(i=mp(t),i!==0&&(r=i,e=Vp(t,i))),e===1)throw n=Za,Ki(t,0),Xr(t,r),cn(t,it()),n;if(e===6)Xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!EA(i)&&(e=Fc(t,r),e===2&&(s=mp(t),s!==0&&(r=s,e=Vp(t,s))),e===1))throw n=Za,Ki(t,0),Xr(t,r),cn(t,it()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:$i(t,sn,vr);break;case 3:if(Xr(t,r),(r&130023424)===r&&(e=Mg+500-it(),10<e)){if(Ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tp($i.bind(null,t,sn,vr),e);break}$i(t,sn,vr);break;case 4:if(Xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wA(r/1960))-r,10<r){t.timeoutHandle=Tp($i.bind(null,t,sn,vr),r);break}$i(t,sn,vr);break;case 5:$i(t,sn,vr);break;default:throw Error(D(329))}}}return cn(t,it()),t.callbackNode===n?uS.bind(null,t):null}function Vp(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=sn,sn=n,e!==null&&Hp(e)),t}function Hp(t){sn===null?sn=t:sn.push.apply(sn,t)}function EA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(t,e){for(e&=~Lg,e&=~kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),r=1<<n;t[n]=-1,e&=~r}}function O0(t){if(ke&6)throw Error(D(327));Gs();var e=Ec(t,0);if(!(e&1))return cn(t,it()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var r=mp(t);r!==0&&(e=r,n=Vp(t,r))}if(n===1)throw n=Za,Ki(t,0),Xr(t,e),cn(t,it()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$i(t,sn,vr),cn(t,it()),null}function $g(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(uo=it()+500,Sh&&Ni())}}function ns(t){ii!==null&&ii.tag===0&&!(ke&6)&&Gs();var e=ke;ke|=1;var n=bn.transition,r=Oe;try{if(bn.transition=null,Oe=1,t)return t()}finally{Oe=r,bn.transition=n,ke=e,!(ke&6)&&Ni()}}function Fg(){dn=Ms.current,ze(Ms)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YR(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(vg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ic();break;case 3:ao(),ze(ln),ze(qt),xg();break;case 5:kg(r);break;case 4:ao();break;case 13:ze(Qe);break;case 19:ze(Qe);break;case 10:Sg(r.type._context);break;case 22:case 23:Fg()}n=n.return}if(St=t,ut=t=pi(t.current,null),bt=dn=e,gt=0,Za=null,Lg=kh=ts=0,sn=Ia=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function cS(t,e){do{var n=ut;try{if(_g(),Ku.current=Dc,Oc){for(var r=Xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oc=!1}if(es=0,_t=mt=Xe=null,Ta=!1,Ya=0,Dg.current=null,n===null||n.return===null){gt=1,Za=e,ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=E0(o);if(f!==null){f.flags&=-257,_0(f,o,a,s,e),f.mode&1&&w0(s,u,e),e=f,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){w0(s,u,e),Ug();break e}l=Error(D(426))}}else if(Ge&&a.mode&1){var E=E0(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),_0(E,o,a,s,e),wg(lo(l,a));break e}}s=l=lo(l,a),gt!==4&&(gt=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=K_(s,l,e);d0(s,y);break e;case 1:a=l;var p=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(di===null||!di.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=G_(s,a,e);d0(s,g);break e}}s=s.return}while(s!==null)}fS(n)}catch(S){e=S,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function hS(){var t=Lc.current;return Lc.current=Dc,t===null?Dc:t}function Ug(){(gt===0||gt===3||gt===2)&&(gt=4),St===null||!(ts&268435455)&&!(kh&268435455)||Xr(St,bt)}function Fc(t,e){var n=ke;ke|=2;var r=hS();(St!==t||bt!==e)&&(vr=null,Ki(t,e));do try{_A();break}catch(i){cS(t,i)}while(1);if(_g(),ke=n,Lc.current=r,ut!==null)throw Error(D(261));return St=null,bt=0,gt}function _A(){for(;ut!==null;)dS(ut)}function SA(){for(;ut!==null&&!Kx();)dS(ut)}function dS(t){var e=mS(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?fS(t):ut=e,Dg.current=null}function fS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mA(n,e),n!==null){n.flags&=32767,ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gt=6,ut=null;return}}else if(n=pA(n,e,dn),n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);gt===0&&(gt=5)}function $i(t,e,n){var r=Oe,i=bn.transition;try{bn.transition=null,Oe=1,TA(t,e,n,r)}finally{bn.transition=i,Oe=r}return null}function TA(t,e,n,r){do Gs();while(ii!==null);if(ke&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rR(t,s),t===St&&(ut=St=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tu||(Tu=!0,gS(wc,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=Oe;Oe=1;var a=ke;ke|=4,Dg.current=null,yA(t,n),aS(n,t),VR(_p),_c=!!Ep,_p=Ep=null,t.current=n,vA(n),Gx(),ke=a,Oe=o,bn.transition=s}else t.current=n;if(Tu&&(Tu=!1,ii=t,$c=i),s=t.pendingLanes,s===0&&(di=null),Xx(n.stateNode),cn(t,it()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mc)throw Mc=!1,t=Bp,Bp=null,t;return $c&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===zp?ka++:(ka=0,zp=t):ka=0,Ni(),null}function Gs(){if(ii!==null){var t=WE($c),e=bn.transition,n=Oe;try{if(bn.transition=null,Oe=16>t?16:t,ii===null)var r=!1;else{if(t=ii,ii=null,$c=0,ke&6)throw Error(D(331));var i=ke;for(ke|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:Ca(8,c,s)}var h=c.child;if(h!==null)h.return=c,q=h;else for(;q!==null;){c=q;var d=c.sibling,f=c.return;if(iS(c),c===u){q=null;break}if(d!==null){d.return=f,q=d;break}q=f}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,q=y;break e}q=s.return}}var p=t.current;for(q=p;q!==null;){o=q;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,q=w;else e:for(o=p;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ih(9,a)}}catch(S){et(a,a.return,S)}if(a===o){q=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,q=g;break e}q=a.return}}if(ke=i,Ni(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(yh,t)}catch{}r=!0}return r}finally{Oe=n,bn.transition=e}}return!1}function D0(t,e,n){e=lo(n,e),e=K_(t,e,1),t=hi(t,e,1),e=Zt(),t!==null&&(Il(t,1,e),cn(t,e))}function et(t,e,n){if(t.tag===3)D0(t,t,n);else for(;e!==null;){if(e.tag===3){D0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(di===null||!di.has(r))){t=lo(n,t),t=G_(e,t,1),e=hi(e,t,1),t=Zt(),e!==null&&(Il(e,1,t),cn(e,t));break}}e=e.return}}function CA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(bt&n)===n&&(gt===4||gt===3&&(bt&130023424)===bt&&500>it()-Mg?Ki(t,0):Lg|=n),cn(t,e)}function pS(t,e){e===0&&(t.mode&1?(e=fu,fu<<=1,!(fu&130023424)&&(fu=4194304)):e=1);var n=Zt();t=Nr(t,e),t!==null&&(Il(t,e,n),cn(t,n))}function IA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pS(t,n)}function kA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),pS(t,n)}var mS;mS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,fA(t,e,n);an=!!(t.flags&131072)}else an=!1,Ge&&e.flags&1048576&&v_(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qu(t,e),t=e.pendingProps;var i=io(e,qt.current);Ks(e,n),i=Ag(null,e,r,t,i,n);var s=bg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(r)?(s=!0,kc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cg(e),i.updater=Th,e.stateNode=i,i._reactInternals=e,bp(e,r,t,n),e=Op(null,e,r,!0,s,n)):(e.tag=0,Ge&&s&&yg(e),Yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RA(r),t=$n(r,t),i){case 0:e=Pp(null,e,r,t,n);break e;case 1:e=C0(null,e,r,t,n);break e;case 11:e=S0(null,e,r,t,n);break e;case 14:e=T0(null,e,r,$n(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),Pp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),C0(t,e,r,i,n);case 3:e:{if(J_(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,S_(t,e),Nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=lo(Error(D(423)),e),e=I0(t,e,r,n,i);break e}else if(r!==i){i=lo(Error(D(424)),e),e=I0(t,e,r,n,i);break e}else for(fn=ci(e.stateNode.containerInfo.firstChild),mn=e,Ge=!0,jn=null,n=k_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){e=Pr(t,e,n);break e}Yt(t,e,r,n)}e=e.child}return e;case 5:return x_(e),t===null&&xp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sp(r,i)?o=null:s!==null&&Sp(r,s)&&(e.flags|=32),X_(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&xp(e),null;case 13:return Z_(t,e,n);case 4:return Ig(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oo(e,null,r,n):Yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),S0(t,e,r,i,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$e(Ac,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!ln.current){e=Pr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ks(e,n),i=Dn(i),r=r(i),e.flags|=1,Yt(t,e,r,n),e.child;case 14:return r=e.type,i=$n(r,e.pendingProps),i=$n(r.type,i),T0(t,e,r,i,n);case 15:return Q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$n(r,i),Qu(t,e),e.tag=1,un(r)?(t=!0,kc(e)):t=!1,Ks(e,n),C_(e,r,i),bp(e,r,i,n),Op(null,e,r,!0,t,n);case 19:return eS(t,e,n);case 22:return Y_(t,e,n)}throw Error(D(156,e.tag))};function gS(t,e){return zE(t,e)}function xA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,r){return new xA(t,e,n,r)}function jg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RA(t){if(typeof t=="function")return jg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sg)return 11;if(t===og)return 14}return 2}function pi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ju(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return Gi(n.children,i,s,e);case ig:o=8,i|=8;break;case ep:return t=An(12,n,e,i|2),t.elementType=ep,t.lanes=s,t;case tp:return t=An(13,n,e,i),t.elementType=tp,t.lanes=s,t;case np:return t=An(19,n,e,i),t.elementType=np,t.lanes=s,t;case IE:return xh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case TE:o=10;break e;case CE:o=9;break e;case sg:o=11;break e;case og:o=14;break e;case Kr:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=An(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gi(t,e,n,r){return t=An(7,t,r,e),t.lanes=n,t}function xh(t,e,n,r){return t=An(22,t,r,e),t.elementType=IE,t.lanes=n,t.stateNode={isHidden:!1},t}function mf(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function gf(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qd(0),this.expirationTimes=Qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bg(t,e,n,r,i,s,o,a,l){return t=new AA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cg(s),t}function bA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yS(t){if(!t)return Si;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(un(n))return g_(t,n,e)}return e}function vS(t,e,n,r,i,s,o,a,l){return t=Bg(n,r,!0,t,i,s,o,a,l),t.context=yS(null),n=t.current,r=Zt(),i=fi(n),s=kr(r,i),s.callback=e??null,hi(n,s,i),t.current.lanes=i,Il(t,i,r),cn(t,r),t}function Rh(t,e,n,r){var i=e.current,s=Zt(),o=fi(i);return n=yS(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hi(i,e,o),t!==null&&(zn(t,i,o,s),Wu(t,i,o)),o}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function L0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zg(t,e){L0(t,e),(t=t.alternate)&&L0(t,e)}function NA(){return null}var wS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vg(t){this._internalRoot=t}Ah.prototype.render=Vg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));Rh(t,e,null,null)};Ah.prototype.unmount=Vg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Rh(null,t,null,null)}),e[br]=null}};function Ah(t){this._internalRoot=t}Ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=QE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yr.length&&e!==0&&e<Yr[n].priority;n++);Yr.splice(n,0,t),n===0&&XE(t)}};function Hg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function M0(){}function PA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Uc(o);s.call(u)}}var o=vS(e,r,t,0,null,!1,!1,"",M0);return t._reactRootContainer=o,t[br]=o.current,qa(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Uc(l);a.call(u)}}var l=Bg(t,0,!1,null,null,!1,!1,"",M0);return t._reactRootContainer=l,t[br]=l.current,qa(t.nodeType===8?t.parentNode:t),ns(function(){Rh(e,l,n,r)}),l}function Nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Uc(o);a.call(l)}}Rh(e,o,t,i)}else o=PA(n,e,t,i,r);return Uc(o)}KE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(ug(e,n|1),cn(e,it()),!(ke&6)&&(uo=it()+500,Ni()))}break;case 13:ns(function(){var r=Nr(t,1);if(r!==null){var i=Zt();zn(r,t,1,i)}}),zg(t,1)}};cg=function(t){if(t.tag===13){var e=Nr(t,134217728);if(e!==null){var n=Zt();zn(e,t,134217728,n)}zg(t,134217728)}};GE=function(t){if(t.tag===13){var e=fi(t),n=Nr(t,e);if(n!==null){var r=Zt();zn(n,t,e,r)}zg(t,e)}};QE=function(){return Oe};YE=function(t,e){var n=Oe;try{return Oe=t,e()}finally{Oe=n}};dp=function(t,e,n){switch(e){case"input":if(sp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_h(r);if(!i)throw Error(D(90));xE(r),sp(r,i)}}}break;case"textarea":AE(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};ME=$g;$E=ns;var OA={usingClientEntryPoint:!1,Events:[xl,bs,_h,DE,LE,$g]},Jo={findFiberByHostInstance:Ui,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DA={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jE(t),t===null?null:t.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||NA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{yh=Cu.inject(DA),or=Cu}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OA;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hg(e))throw Error(D(200));return bA(t,e,null,n)};En.createRoot=function(t,e){if(!Hg(t))throw Error(D(299));var n=!1,r="",i=wS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bg(t,1,!1,null,null,n,!1,r,i),t[br]=e.current,qa(t.nodeType===8?t.parentNode:t),new Vg(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=jE(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return ns(t)};En.hydrate=function(t,e,n){if(!bh(e))throw Error(D(200));return Nh(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Hg(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vS(e,null,t,1,n??null,i,!1,s,o),t[br]=e.current,qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ah(e)};En.render=function(t,e,n){if(!bh(e))throw Error(D(200));return Nh(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!bh(t))throw Error(D(40));return t._reactRootContainer?(ns(function(){Nh(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};En.unstable_batchedUpdates=$g;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bh(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return Nh(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";function ES(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ES)}catch(t){console.error(t)}}ES(),vE.exports=En;var qg=vE.exports;const LA=Ym(qg);var $0=qg;Jf.createRoot=$0.createRoot,Jf.hydrateRoot=$0.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},SS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_S(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new $A;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $A extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FA=function(t){const e=_S(t);return SS.encodeByteArray(e,!0)},jc=function(t){return FA(t).replace(/\./g,"")},TS=function(t){try{return SS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=()=>UA().__FIREBASE_DEFAULTS__,BA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&TS(t[1]);return e&&JSON.parse(e)},Ph=()=>{try{return jA()||BA()||zA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CS=t=>{var e,n;return(n=(e=Ph())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},IS=t=>{const e=CS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kS=()=>{var t;return(t=Ph())===null||t===void 0?void 0:t.config},xS=t=>{var e;return(e=Ph())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jc(JSON.stringify(n)),jc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function qA(){var t;const e=(t=Ph())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GA(){const t=Wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QA(){try{return typeof indexedDB=="object"}catch{return!1}}function YA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XA,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Al.prototype.create)}}class Al{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fr(i,a,r)}}function JA(t,e){return t.replace(ZA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZA=/\{\$([^}]+)}/g;function eb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(F0(s)&&F0(o)){if(!Bc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function da(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tb(t,e){const n=new nb(t,e);return n.subscribe.bind(n)}class nb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yf),i.error===void 0&&(i.error=yf),i.complete===void 0&&(i.complete=yf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class Ti{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ob(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sb(t){return t===Fi?void 0:t}function ob(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ib(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const lb={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},ub=Ae.INFO,cb={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},hb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wg{constructor(e){this.name=e,this._logLevel=ub,this._logHandler=hb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const db=(t,e)=>e.some(n=>t instanceof n);let U0,j0;function fb(){return U0||(U0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pb(){return j0||(j0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AS=new WeakMap,qp=new WeakMap,bS=new WeakMap,vf=new WeakMap,Kg=new WeakMap;function mb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&AS.set(n,t)}).catch(()=>{}),Kg.set(e,t),e}function gb(t){if(qp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qp.set(t,e)}let Wp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yb(t){Wp=t(Wp)}function vb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wf(this),e,...n);return bS.set(r,e.sort?e.sort():[e]),mi(r)}:pb().includes(t)?function(...e){return t.apply(wf(this),e),mi(AS.get(this))}:function(...e){return mi(t.apply(wf(this),e))}}function wb(t){return typeof t=="function"?vb(t):(t instanceof IDBTransaction&&gb(t),db(t,fb())?new Proxy(t,Wp):t)}function mi(t){if(t instanceof IDBRequest)return mb(t);if(vf.has(t))return vf.get(t);const e=wb(t);return e!==t&&(vf.set(t,e),Kg.set(e,t)),e}const wf=t=>Kg.get(t);function Eb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=mi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mi(o.result),l.oldVersion,l.newVersion,mi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _b=["get","getKey","getAll","getAllKeys","count"],Sb=["put","add","delete","clear"],Ef=new Map;function B0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ef.get(e))return Ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Sb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_b.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ef.set(e,s),s}yb(t=>({...t,get:(e,n,r)=>B0(e,n)||t.get(e,n,r),has:(e,n)=>!!B0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kp="@firebase/app",z0="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Wg("@firebase/app"),Ib="@firebase/app-compat",kb="@firebase/analytics-compat",xb="@firebase/analytics",Rb="@firebase/app-check-compat",Ab="@firebase/app-check",bb="@firebase/auth",Nb="@firebase/auth-compat",Pb="@firebase/database",Ob="@firebase/database-compat",Db="@firebase/functions",Lb="@firebase/functions-compat",Mb="@firebase/installations",$b="@firebase/installations-compat",Fb="@firebase/messaging",Ub="@firebase/messaging-compat",jb="@firebase/performance",Bb="@firebase/performance-compat",zb="@firebase/remote-config",Vb="@firebase/remote-config-compat",Hb="@firebase/storage",qb="@firebase/storage-compat",Wb="@firebase/firestore",Kb="@firebase/firestore-compat",Gb="firebase",Qb="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="[DEFAULT]",Yb={[Kp]:"fire-core",[Ib]:"fire-core-compat",[xb]:"fire-analytics",[kb]:"fire-analytics-compat",[Ab]:"fire-app-check",[Rb]:"fire-app-check-compat",[bb]:"fire-auth",[Nb]:"fire-auth-compat",[Pb]:"fire-rtdb",[Ob]:"fire-rtdb-compat",[Db]:"fire-fn",[Lb]:"fire-fn-compat",[Mb]:"fire-iid",[$b]:"fire-iid-compat",[Fb]:"fire-fcm",[Ub]:"fire-fcm-compat",[jb]:"fire-perf",[Bb]:"fire-perf-compat",[zb]:"fire-rc",[Vb]:"fire-rc-compat",[Hb]:"fire-gcs",[qb]:"fire-gcs-compat",[Wb]:"fire-fst",[Kb]:"fire-fst-compat","fire-js":"fire-js",[Gb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map,Qp=new Map;function Xb(t,e){try{t.container.addComponent(e)}catch(n){rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Qp.has(e))return rs.debug(`There were multiple attempts to register component ${e}.`),!1;Qp.set(e,t);for(const n of zc.values())Xb(n,t);return!0}function Oh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gi=new Al("app","Firebase",Jb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=Qb;function NS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gi.create("bad-app-name",{appName:String(i)});if(n||(n=kS()),!n)throw gi.create("no-options");const s=zc.get(i);if(s){if(Bc(n,s.options)&&Bc(r,s.config))return s;throw gi.create("duplicate-app",{appName:i})}const o=new ab(i);for(const l of Qp.values())o.addComponent(l);const a=new Zb(n,r,o);return zc.set(i,a),a}function Gg(t=Gp){const e=zc.get(t);if(!e&&t===Gp&&kS())return NS();if(!e)throw gi.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let i=(r=Yb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rs.warn(a.join(" "));return}is(new Ti(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN="firebase-heartbeat-database",tN=1,el="firebase-heartbeat-store";let _f=null;function PS(){return _f||(_f=Eb(eN,tN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(el)}}}).catch(t=>{throw gi.create("idb-open",{originalErrorMessage:t.message})})),_f}async function nN(t){try{return await(await PS()).transaction(el).objectStore(el).get(OS(t))}catch(e){if(e instanceof fr)rs.warn(e.message);else{const n=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rs.warn(n.message)}}}async function V0(t,e){try{const r=(await PS()).transaction(el,"readwrite");await r.objectStore(el).put(e,OS(t)),await r.done}catch(n){if(n instanceof fr)rs.warn(n.message);else{const r=gi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rs.warn(r.message)}}}function OS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=1024,iN=30*24*60*60*1e3;class sN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=H0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=iN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=H0(),{heartbeatsToSend:n,unsentEntries:r}=oN(this._heartbeatsCache.heartbeats),i=jc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function H0(){return new Date().toISOString().substring(0,10)}function oN(t,e=rN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),q0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),q0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QA()?YA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return V0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return V0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function q0(t){return jc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){is(new Ti("platform-logger",e=>new Tb(e),"PRIVATE")),is(new Ti("heartbeat",e=>new sN(e),"PRIVATE")),lr(Kp,z0,t),lr(Kp,z0,"esm2017"),lr("fire-js","")}lN("");var uN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Qg=Qg||{},se=uN||self;function Dh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Nl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cN(t){return Object.prototype.hasOwnProperty.call(t,Sf)&&t[Sf]||(t[Sf]=++hN)}var Sf="closure_uid_"+(1e9*Math.random()>>>0),hN=0;function dN(t,e,n){return t.call.apply(t.bind,arguments)}function fN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function zt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?zt=dN:zt=fN,zt.apply(null,arguments)}function Iu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Pi(){this.s=this.s,this.o=this.o}var pN=0;Pi.prototype.s=!1;Pi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),pN!=0)&&cN(this)};Pi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function W0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Dh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var mN=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",()=>{},e),se.removeEventListener("test",()=>{},e)}catch{}return t}();function tl(t){return/^[\s\xa0]*$/.test(t)}function Lh(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function er(t){return Lh().indexOf(t)!=-1}function Xg(t){return Xg[" "](t),t}Xg[" "]=function(){};function gN(t,e){var n=lP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var yN=er("Opera"),co=er("Trident")||er("MSIE"),LS=er("Edge"),Yp=LS||co,MS=er("Gecko")&&!(Lh().toLowerCase().indexOf("webkit")!=-1&&!er("Edge"))&&!(er("Trident")||er("MSIE"))&&!er("Edge"),vN=Lh().toLowerCase().indexOf("webkit")!=-1&&!er("Edge");function $S(){var t=se.document;return t?t.documentMode:void 0}var Xp;e:{var Tf="",Cf=function(){var t=Lh();if(MS)return/rv:([^\);]+)(\)|;)/.exec(t);if(LS)return/Edge\/([\d\.]+)/.exec(t);if(co)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vN)return/WebKit\/(\S+)/.exec(t);if(yN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cf&&(Tf=Cf?Cf[1]:""),co){var If=$S();if(If!=null&&If>parseFloat(Tf)){Xp=String(If);break e}}Xp=Tf}var Jp;if(se.document&&co){var K0=$S();Jp=K0||parseInt(Xp,10)||void 0}else Jp=void 0;var wN=Jp;function nl(t,e){if(Vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(MS){e:{try{Xg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:EN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nl.$.h.call(this)}}Ct(nl,Vt);var EN={2:"touch",3:"pen",4:"mouse"};nl.prototype.h=function(){nl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pl="closure_listenable_"+(1e6*Math.random()|0),_N=0;function SN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++_N,this.fa=this.ia=!1}function Mh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Jg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function TN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function FS(t){const e={};for(const n in t)e[n]=t[n];return e}const G0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function US(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<G0.length;s++)n=G0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $h(t){this.src=t,this.g={},this.h=0}$h.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=em(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Zp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=DS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Mh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function em(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Zg="closure_lm_"+(1e6*Math.random()|0),kf={};function jS(t,e,n,r,i){if(r&&r.once)return zS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)jS(t,e[s],n,r,i);return null}return n=ny(n),t&&t[Pl]?t.O(e,n,Nl(r)?!!r.capture:!!r,i):BS(t,e,n,!1,r,i)}function BS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Nl(i)?!!i.capture:!!i,a=ty(t);if(a||(t[Zg]=a=new $h(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=CN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)mN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(HS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CN(){function t(n){return e.call(t.src,t.listener,n)}const e=IN;return t}function zS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zS(t,e[s],n,r,i);return null}return n=ny(n),t&&t[Pl]?t.P(e,n,Nl(r)?!!r.capture:!!r,i):BS(t,e,n,!0,r,i)}function VS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)VS(t,e[s],n,r,i);else r=Nl(r)?!!r.capture:!!r,n=ny(n),t&&t[Pl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=em(s,n,r,i),-1<n&&(Mh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ty(t))&&(e=t.g[e.toString()],t=-1,e&&(t=em(e,n,r,i)),(n=-1<t?e[t]:null)&&ey(n))}function ey(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pl])Zp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(HS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ty(e))?(Zp(n,t),n.h==0&&(n.src=null,e[Zg]=null)):Mh(t)}}}function HS(t){return t in kf?kf[t]:kf[t]="on"+t}function IN(t,e){if(t.fa)t=!0;else{e=new nl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ey(t),t=n.call(r,e)}return t}function ty(t){return t=t[Zg],t instanceof $h?t:null}var xf="__closure_events_fn_"+(1e9*Math.random()>>>0);function ny(t){return typeof t=="function"?t:(t[xf]||(t[xf]=function(e){return t.handleEvent(e)}),t[xf])}function Tt(){Pi.call(this),this.i=new $h(this),this.S=this,this.J=null}Ct(Tt,Pi);Tt.prototype[Pl]=!0;Tt.prototype.removeEventListener=function(t,e,n,r){VS(this,t,e,n,r)};function Nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Vt(e,t);else if(e instanceof Vt)e.target=e.target||t;else{var i=e;e=new Vt(r,t),US(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ku(o,r,!0,e)&&i}if(o=e.g=t,i=ku(o,r,!0,e)&&i,i=ku(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ku(o,r,!1,e)&&i}Tt.prototype.N=function(){if(Tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Mh(n[r]);delete t.g[e],t.h--}}this.J=null};Tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ku(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Zp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ry=se.JSON.stringify;class kN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xN(){var t=iy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class RN{constructor(){this.h=this.g=null}add(e,n){const r=qS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qS=new kN(()=>new AN,t=>t.reset());class AN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function NN(t){se.setTimeout(()=>{throw t},0)}let rl,il=!1,iy=new RN,WS=()=>{const t=se.Promise.resolve(void 0);rl=()=>{t.then(PN)}};var PN=()=>{for(var t;t=xN();){try{t.h.call(t.g)}catch(n){NN(n)}var e=qS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}il=!1};function Fh(t,e){Tt.call(this),this.h=t||1,this.g=e||se,this.j=zt(this.qb,this),this.l=Date.now()}Ct(Fh,Tt);V=Fh.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Nt(this,"tick"),this.ga&&(sy(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sy(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Fh.$.N.call(this),sy(this),delete this.g};function oy(t,e,n){if(typeof t=="function")n&&(t=zt(t,n));else if(t&&typeof t.handleEvent=="function")t=zt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function KS(t){t.g=oy(()=>{t.g=null,t.i&&(t.i=!1,KS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ON extends Pi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:KS(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sl(t){Pi.call(this),this.h=t,this.g={}}Ct(sl,Pi);var Q0=[];function GS(t,e,n,r){Array.isArray(n)||(n&&(Q0[0]=n.toString()),n=Q0);for(var i=0;i<n.length;i++){var s=jS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function QS(t){Jg(t.g,function(e,n){this.g.hasOwnProperty(n)&&ey(e)},t),t.g={}}sl.prototype.N=function(){sl.$.N.call(this),QS(this)};sl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uh(){this.g=!0}Uh.prototype.Ea=function(){this.g=!1};function DN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function LN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function $s(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$N(t,n)+(r?" "+r:"")})}function MN(t,e){t.info(function(){return"TIMEOUT: "+e})}Uh.prototype.info=function(){};function $N(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ry(n)}catch{return e}}var gs={},Y0=null;function jh(){return Y0=Y0||new Tt}gs.Ta="serverreachability";function YS(t){Vt.call(this,gs.Ta,t)}Ct(YS,Vt);function ol(t){const e=jh();Nt(e,new YS(e))}gs.STAT_EVENT="statevent";function XS(t,e){Vt.call(this,gs.STAT_EVENT,t),this.stat=e}Ct(XS,Vt);function Xt(t){const e=jh();Nt(e,new XS(e,t))}gs.Ua="timingevent";function JS(t,e){Vt.call(this,gs.Ua,t),this.size=e}Ct(JS,Vt);function Ol(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Bh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ZS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ay(){}ay.prototype.h=null;function X0(t){return t.h||(t.h=t.i())}function eT(){}var Dl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ly(){Vt.call(this,"d")}Ct(ly,Vt);function uy(){Vt.call(this,"c")}Ct(uy,Vt);var tm;function zh(){}Ct(zh,ay);zh.prototype.g=function(){return new XMLHttpRequest};zh.prototype.i=function(){return{}};tm=new zh;function Ll(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sl(this),this.P=FN,t=Yp?125:void 0,this.V=new Fh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tT}function tT(){this.i=null,this.g="",this.h=!1}var FN=45e3,nm={},Vc={};V=Ll.prototype;V.setTimeout=function(t){this.P=t};function rm(t,e,n){t.L=1,t.v=Hh(Or(e)),t.s=n,t.S=!0,nT(t,null)}function nT(t,e){t.G=Date.now(),Ml(t),t.A=Or(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),cT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new tT,t.g=NT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ON(zt(t.Pa,t,t.g),t.O)),GS(t.U,t.g,"readystatechange",t.nb),e=t.I?FS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ol(),DN(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&tr(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=tr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Yp||this.g&&(this.h.h||this.g.ja()||tw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ol(3):ol(2)),Vh(this);var n=this.g.da();this.ca=n;t:if(rT(this)){var r=tw(this.g);t="";var i=r.length,s=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zi(this),xa(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tl(a)){var u=a;break t}}u=null}if(n=u)$s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,im(this,n);else{this.i=!1,this.o=3,Xt(12),zi(this),xa(this);break e}}this.S?(iT(this,c,o),Yp&&this.i&&c==3&&(GS(this.U,this.V,"tick",this.mb),this.V.start())):($s(this.j,this.m,o,null),im(this,o)),c==4&&zi(this),this.i&&!this.J&&(c==4?xT(this.l,this):(this.i=!1,Ml(this)))}else sP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xt(12)):(this.o=0,Xt(13)),zi(this),xa(this)}}}catch{}finally{}};function rT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function iT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=UN(t,n),i==Vc){e==4&&(t.o=4,Xt(14),r=!1),$s(t.j,t.m,null,"[Incomplete Response]");break}else if(i==nm){t.o=4,Xt(15),$s(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $s(t.j,t.m,i,null),im(t,i);rT(t)&&i!=Vc&&i!=nm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),my(e),e.M=!0,Xt(11))):($s(t.j,t.m,n,"[Invalid Chunked Response]"),zi(t),xa(t))}V.mb=function(){if(this.g){var t=tr(this.g),e=this.g.ja();this.C<e.length&&(Vh(this),iT(this,t,e),this.i&&t!=4&&Ml(this))}};function UN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Vc:(n=Number(e.substring(n,r)),isNaN(n)?nm:(r+=1,r+n>e.length?Vc:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,zi(this)};function Ml(t){t.Y=Date.now()+t.P,sT(t,t.P)}function sT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ol(zt(t.lb,t),e)}function Vh(t){t.B&&(se.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(MN(this.j,this.A),this.L!=2&&(ol(),Xt(17)),zi(this),this.o=2,xa(this)):sT(this,this.Y-t)};function xa(t){t.l.H==0||t.J||xT(t.l,t)}function zi(t){Vh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,sy(t.V),QS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function im(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||sm(n.i,t))){if(!t.K&&sm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wc(n),Kh(n);else break e;py(n),Xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ol(zt(n.ib,n),6e3));if(1>=fT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vi(n,11)}else if((t.K||n.g==t)&&Wc(n),!tl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cy(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,je(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=bT(r,r.J?r.pa:null,r.Y),o.K){pT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Vh(a),Ml(a)),r.g=o}else IT(r);0<n.j.length&&Gh(n)}else u[0]!="stop"&&u[0]!="close"||Vi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vi(n,7):fy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ol(4)}catch{}}function jN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Dh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function BN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Dh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function oT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Dh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BN(t),r=jN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var aT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qi){this.h=t.h,Hc(this,t.j),this.s=t.s,this.g=t.g,qc(this,t.m),this.l=t.l;var e=t.i,n=new al;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),J0(this,n),this.o=t.o}else t&&(e=String(t).match(aT))?(this.h=!1,Hc(this,e[1]||"",!0),this.s=fa(e[2]||""),this.g=fa(e[3]||"",!0),qc(this,e[4]),this.l=fa(e[5]||"",!0),J0(this,e[6]||"",!0),this.o=fa(e[7]||"")):(this.h=!1,this.i=new al(null,this.h))}Qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(pa(e,Z0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(pa(e,Z0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(pa(n,n.charAt(0)=="/"?qN:HN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",pa(n,KN)),t.join("")};function Or(t){return new Qi(t)}function Hc(t,e,n){t.j=n?fa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function J0(t,e,n){e instanceof al?(t.i=e,GN(t.i,t.h)):(n||(e=pa(e,WN)),t.i=new al(e,t.h))}function je(t,e,n){t.i.set(e,n)}function Hh(t){return je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Z0=/[#\/\?@]/g,HN=/[#\?:]/g,qN=/[#\?]/g,WN=/[#\?@]/g,KN=/#/g;function al(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Oi(t){t.g||(t.g=new Map,t.h=0,t.i&&zN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=al.prototype;V.add=function(t,e){Oi(this),this.i=null,t=xo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lT(t,e){Oi(t),e=xo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uT(t,e){return Oi(t),e=xo(t,e),t.g.has(e)}V.forEach=function(t,e){Oi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){Oi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){Oi(this);let e=[];if(typeof t=="string")uT(this,t)&&(e=e.concat(this.g.get(xo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Oi(this),this.i=null,t=xo(this,t),uT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cT(t,e,n){lT(t,e),0<n.length&&(t.i=null,t.g.set(xo(t,e),Yg(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function xo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GN(t,e){e&&!t.j&&(Oi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(lT(this,r),cT(this,i,n))},t)),t.j=e}var QN=class{constructor(t,e){this.g=t,this.map=e}};function hT(t){this.l=t||YN,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YN=10;function dT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fT(t){return t.h?1:t.g?t.g.size:0}function sm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cy(t,e){t.g?t.g.add(e):t.h=e}function pT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hT.prototype.cancel=function(){if(this.i=mT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yg(t.i)}var XN=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function JN(){this.g=new XN}function ZN(t,e,n){const r=n||"";try{oT(t,function(i,s){let o=i;Nl(i)&&(o=ry(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function eP(t,e){const n=new Uh;if(se.Image){const r=new Image;r.onload=Iu(xu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Iu(xu,n,r,"TestLoadImage: error",!1,e),r.onabort=Iu(xu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Iu(xu,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function $l(t){this.l=t.fc||null,this.j=t.ob||!1}Ct($l,ay);$l.prototype.g=function(){return new qh(this.l,this.j)};$l.prototype.i=function(t){return function(){return t}}({});function qh(t,e){Tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ct(qh,Tt);var hy=0;V=qh.prototype;V.open=function(t,e){if(this.readyState!=hy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ll(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fl(this)),this.readyState=hy};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ll(this)),this.g&&(this.readyState=3,ll(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function gT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fl(this):ll(this),this.readyState==3&&gT(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Fl(this))};V.Ya=function(t){this.g&&(this.response=t,Fl(this))};V.ka=function(){this.g&&Fl(this)};function Fl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ll(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ll(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var tP=se.JSON.parse;function tt(t){Tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yT,this.L=this.M=!1}Ct(tt,Tt);var yT="",nP=/^https?$/i,rP=["POST","PUT"];V=tt.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tm.g(),this.C=this.u?X0(this.u):X0(tm),this.g.onreadystatechange=zt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ew(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=se.FormData&&t instanceof se.FormData,!(0<=DS(rP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ET(this),0<this.B&&((this.L=iP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zt(this.ua,this)):this.A=oy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ew(this,s)}};function iP(t){return co&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Qg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))};function ew(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vT(t),Wh(t)}function vT(t){t.F||(t.F=!0,Nt(t,"complete"),Nt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),Wh(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wh(this,!0)),tt.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?wT(this):this.kb())};V.kb=function(){wT(this)};function wT(t){if(t.h&&typeof Qg<"u"&&(!t.C[1]||tr(t)!=4||t.da()!=2)){if(t.v&&tr(t)==4)oy(t.La,0,t);else if(Nt(t,"readystatechange"),tr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(aT)[1]||null;!i&&se.self&&se.self.location&&(i=se.self.location.protocol.slice(0,-1)),r=!nP.test(i?i.toLowerCase():"")}n=r}if(n)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var s=2<tr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",vT(t)}}finally{Wh(t)}}}}function Wh(t,e){if(t.g){ET(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function ET(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function tr(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),tP(e)}};function tw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case yT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function sP(t){const e={};t=(t.g&&2<=tr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(tl(t[r]))continue;var n=bN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}TN(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _T(t){let e="";return Jg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function dy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_T(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):je(t,e,n))}function Zo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ST(t){this.Ga=0,this.j=[],this.l=new Uh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Zo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Zo("baseRetryDelayMs",5e3,t),this.hb=Zo("retryDelaySeedMs",1e4,t),this.eb=Zo("forwardChannelMaxRetries",2,t),this.xa=Zo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new hT(t&&t.concurrentRequestLimit),this.Ja=new JN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=ST.prototype;V.ra=8;V.H=1;function fy(t){if(TT(t),t.H==3){var e=t.W++,n=Or(t.I);if(je(n,"SID",t.K),je(n,"RID",e),je(n,"TYPE","terminate"),Ul(t,n),e=new Ll(t,t.l,e),e.L=2,e.v=Hh(Or(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=NT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ml(e)}AT(t)}function Kh(t){t.g&&(my(t),t.g.cancel(),t.g=null)}function TT(t){Kh(t),t.u&&(se.clearTimeout(t.u),t.u=null),Wc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Gh(t){if(!dT(t.i)&&!t.m){t.m=!0;var e=t.Na;rl||WS(),il||(rl(),il=!0),iy.add(e,t),t.C=0}}function oP(t,e){return fT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ol(zt(t.Na,t,e),RT(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ll(this,this.l,t);let s=this.s;if(this.U&&(s?(s=FS(s),US(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=CT(this,i,e),n=Or(this.I),je(n,"RID",t),je(n,"CVER",22),this.F&&je(n,"X-HTTP-Session-Id",this.F),Ul(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(_T(s)))+"&"+e:this.o&&dy(n,this.o,s)),cy(this.i,i),this.bb&&je(n,"TYPE","init"),this.P?(je(n,"$req",e),je(n,"SID","null"),i.aa=!0,rm(i,n,null)):rm(i,n,e),this.H=2}}else this.H==3&&(t?nw(this,t):this.j.length==0||dT(this.i)||nw(this))};function nw(t,e){var n;e?n=e.m:n=t.W++;const r=Or(t.I);je(r,"SID",t.K),je(r,"RID",n),je(r,"AID",t.V),Ul(t,r),t.o&&t.s&&dy(r,t.o,t.s),n=new Ll(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=CT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),cy(t.i,n),rm(n,r,e)}function Ul(t,e){t.na&&Jg(t.na,function(n,r){je(e,r,n)}),t.h&&oT({},function(n,r){je(e,r,n)})}function CT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?zt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{ZN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function IT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;rl||WS(),il||(rl(),il=!0),iy.add(e,t),t.A=0}}function py(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ol(zt(t.Ma,t),RT(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,kT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ol(zt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Xt(10),Kh(this),kT(this))};function my(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function kT(t){t.g=new Ll(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Or(t.wa);je(e,"RID","rpc"),je(e,"SID",t.K),je(e,"AID",t.V),je(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&je(e,"TO",t.qa),je(e,"TYPE","xmlhttp"),Ul(t,e),t.o&&t.s&&dy(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Hh(Or(e)),n.s=null,n.S=!0,nT(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Kh(this),py(this),Xt(19))};function Wc(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function xT(t,e){var n=null;if(t.g==e){Wc(t),my(t),t.g=null;var r=2}else if(sm(t.i,e))n=e.F,pT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=jh(),Nt(r,new JS(r,n)),Gh(t)}else IT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&oP(t,e)||r==2&&py(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Vi(t,5);break;case 4:Vi(t,10);break;case 3:Vi(t,6);break;default:Vi(t,2)}}}function RT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=zt(t.pb,t);n||(n=new Qi("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Hc(n,"https"),Hh(n)),eP(n.toString(),r)}else Xt(2);t.H=0,t.h&&t.h.za(e),AT(t),TT(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Xt(2)):(this.l.info("Failed to ping google.com"),Xt(1))};function AT(t){if(t.H=0,t.ma=[],t.h){const e=mT(t.i);(e.length!=0||t.j.length!=0)&&(W0(t.ma,e),W0(t.ma,t.j),t.i.i.length=0,Yg(t.j),t.j.length=0),t.h.ya()}}function bT(t,e,n){var r=n instanceof Qi?Or(n):new Qi(n);if(r.g!="")e&&(r.g=e+"."+r.g),qc(r,r.m);else{var i=se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qi(null);r&&Hc(s,r),e&&(s.g=e),i&&qc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&je(r,n,e),je(r,"VER",t.ra),Ul(t,r),r}function NT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new tt(new $l({ob:!0})):new tt(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function PT(){}V=PT.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Kc(){if(co&&!(10<=Number(wN)))throw Error("Environmental error: no available transport.")}Kc.prototype.g=function(t,e){return new vn(t,e)};function vn(t,e){Tt.call(this),this.g=new ST(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!tl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!tl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ro(this)}Ct(vn,Tt);vn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=bT(t,null,t.Y),Gh(t)};vn.prototype.close=function(){fy(this.g)};vn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ry(t),t=n);e.j.push(new QN(e.fb++,t)),e.H==3&&Gh(e)};vn.prototype.N=function(){this.g.h=null,delete this.j,fy(this.g),delete this.g,vn.$.N.call(this)};function OT(t){ly.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ct(OT,ly);function DT(){uy.call(this),this.status=1}Ct(DT,uy);function Ro(t){this.g=t}Ct(Ro,PT);Ro.prototype.Ba=function(){Nt(this.g,"a")};Ro.prototype.Aa=function(t){Nt(this.g,new OT(t))};Ro.prototype.za=function(t){Nt(this.g,new DT)};Ro.prototype.ya=function(){Nt(this.g,"b")};function aP(){this.blockSize=-1}function qn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ct(qn,aP);qn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Rf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Rf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Rf(this,r),i=0;break}}this.h=i,this.i+=e};qn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function De(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var lP={};function gy(t){return-128<=t&&128>t?gN(t,function(e){return new De([e|0],0>e?-1:0)}):new De([t|0],0>t?-1:0)}function nr(t){if(isNaN(t)||!isFinite(t))return Qs;if(0>t)return At(nr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=om;return new De(e,0)}function LT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return At(LT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nr(Math.pow(e,8)),r=Qs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=nr(Math.pow(e,s)),r=r.R(s).add(nr(o))):(r=r.R(n),r=r.add(nr(o)))}return r}var om=4294967296,Qs=gy(0),am=gy(1),rw=gy(16777216);V=De.prototype;V.ea=function(){if(Rn(this))return-At(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:om+r)*e,e*=om}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sr(this))return"0";if(Rn(this))return"-"+At(this).toString(t);for(var e=nr(Math.pow(t,6)),n=this,r="";;){var i=Qc(n,e).g;n=Gc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Sr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Rn(t){return t.h==-1}V.X=function(t){return t=Gc(this,t),Rn(t)?-1:Sr(t)?0:1};function At(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new De(n,~t.h).add(am)}V.abs=function(){return Rn(this)?At(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new De(n,n[n.length-1]&-2147483648?-1:0)};function Gc(t,e){return t.add(At(e))}V.R=function(t){if(Sr(this)||Sr(t))return Qs;if(Rn(this))return Rn(t)?At(this).R(At(t)):At(At(this).R(t));if(Rn(t))return At(this.R(At(t)));if(0>this.X(rw)&&0>t.X(rw))return nr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ru(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ru(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ru(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ru(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new De(n,0)};function Ru(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ea(t,e){this.g=t,this.h=e}function Qc(t,e){if(Sr(e))throw Error("division by zero");if(Sr(t))return new ea(Qs,Qs);if(Rn(t))return e=Qc(At(t),e),new ea(At(e.g),At(e.h));if(Rn(e))return e=Qc(t,At(e)),new ea(At(e.g),e.h);if(30<t.g.length){if(Rn(t)||Rn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=am,r=e;0>=r.X(t);)n=iw(n),r=iw(r);var i=Ss(n,1),s=Ss(r,1);for(r=Ss(r,2),n=Ss(n,2);!Sr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ss(r,1),n=Ss(n,1)}return e=Gc(t,i.R(e)),new ea(i,e)}for(i=Qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=nr(n),o=s.R(e);Rn(o)||0<o.X(t);)n-=r,s=nr(n),o=s.R(e);Sr(s)&&(s=am),i=i.add(s),t=Gc(t,o)}return new ea(i,t)}V.gb=function(t){return Qc(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new De(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new De(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new De(n,this.h^t.h)};function iw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new De(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new De(i,t.h)}Kc.prototype.createWebChannel=Kc.prototype.g;vn.prototype.send=vn.prototype.u;vn.prototype.open=vn.prototype.m;vn.prototype.close=vn.prototype.close;Bh.NO_ERROR=0;Bh.TIMEOUT=8;Bh.HTTP_ERROR=6;ZS.COMPLETE="complete";eT.EventType=Dl;Dl.OPEN="a";Dl.CLOSE="b";Dl.ERROR="c";Dl.MESSAGE="d";Tt.prototype.listen=Tt.prototype.O;tt.prototype.listenOnce=tt.prototype.P;tt.prototype.getLastError=tt.prototype.Sa;tt.prototype.getLastErrorCode=tt.prototype.Ia;tt.prototype.getStatus=tt.prototype.da;tt.prototype.getResponseJson=tt.prototype.Wa;tt.prototype.getResponseText=tt.prototype.ja;tt.prototype.send=tt.prototype.ha;tt.prototype.setWithCredentials=tt.prototype.Oa;qn.prototype.digest=qn.prototype.l;qn.prototype.reset=qn.prototype.reset;qn.prototype.update=qn.prototype.j;De.prototype.add=De.prototype.add;De.prototype.multiply=De.prototype.R;De.prototype.modulo=De.prototype.gb;De.prototype.compare=De.prototype.X;De.prototype.toNumber=De.prototype.ea;De.prototype.toString=De.prototype.toString;De.prototype.getBits=De.prototype.D;De.fromNumber=nr;De.fromString=LT;var uP=function(){return new Kc},cP=function(){return jh()},Af=Bh,hP=ZS,dP=gs,sw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fP=$l,Au=eT,pP=tt,mP=qn,Ys=De;const ow="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Wg("@firebase/firestore");function aw(){return ss.logLevel}function G(t,...e){if(ss.logLevel<=Ae.DEBUG){const n=e.map(yy);ss.debug(`Firestore (${Ao}): ${t}`,...n)}}function Dr(t,...e){if(ss.logLevel<=Ae.ERROR){const n=e.map(yy);ss.error(`Firestore (${Ao}): ${t}`,...n)}}function ho(t,...e){if(ss.logLevel<=Ae.WARN){const n=e.map(yy);ss.warn(`Firestore (${Ao}): ${t}`,...n)}}function yy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+t;throw Dr(e),new Error(e)}function Ve(t,e){t||te()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let W=class extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MT=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},gP=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}},yP=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},vP=class{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new yi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new MT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new $t(e)}},wP=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},EP=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new wP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}},_P=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},SP=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.T=n.token,new _P(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new yt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new yt(0,0))}static max(){return new le(new yt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends ul{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const CP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends ul{construct(e,n,r){return new jt(e,n,r)}static isValidIdentifier(e){return CP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Be.fromString(e))}static fromName(e){return new J(Be.fromString(e).popFirst(5))}static empty(){return new J(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Be(e.slice()))}}function IP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new yt(n+1,0):new yt(n,r));return new Ci(i,J.empty(),e)}function kP(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ci(le.min(),J.empty(),-1)}static max(){return new Ci(le.max(),J.empty(),-1)}}function xP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==RP)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Bl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}vy.ct=-1;function Qh(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function bP(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class lm{constructor(e,n){this.comparator=e,this.root=n||vi.EMPTY}insert(e,n){return new lm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vi.BLACK,null,null))}remove(e){return new lm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}};class bu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}let vi=class yr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yr.RED,this.left=i??yr.EMPTY,this.right=s??yr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new yr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}};vi.EMPTY=null,vi.RED=!0,vi.BLACK=!1;vi.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn=class um{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uw(this.data.getIterator())}getIteratorFrom(e){return new uw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof um)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new um(this.comparator);return n.data=e,n}},uw=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr=class cm{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new cm([])}unionWith(e){let n=new gn(jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new cm(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn=class hm{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new UT("Invalid base64 string: "+i):i}}(e);return new hm(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new hm(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};wn.EMPTY_BYTE_STRING=new wn("");const NP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=NP.exec(t);if(Ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?wn.fromBase64String(t):wn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ey(t){const e=t.mapValue.fields.__previous_value__;return wy(e)?Ey(e):e}function cl(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class hl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wy(t)?4:OP(t)?9007199254740991:10:te()}function dr(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cl(t).isEqual(cl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ii(r.timestampValue),o=Ii(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return os(r.bytesValue).isEqual(os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return lt(r.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(r.geoPointValue.longitude)===lt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return lt(r.integerValue)===lt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=lt(r.doubleValue),o=lt(i.doubleValue);return s===o?Yc(s)===Yc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return fo(t.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(lw(s)!==lw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!dr(s[a],o[a])))return!1;return!0}(t,e);default:return te()}}function dl(t,e){return(t.values||[]).find(n=>dr(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=lt(i.integerValue||i.doubleValue),a=lt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return cw(t.timestampValue,e.timestampValue);case 4:return cw(cl(t),cl(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,s){const o=os(i),a=os(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=be(o[l],a[l]);if(u!==0)return u}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=be(lt(i.latitude),lt(s.latitude));return o!==0?o:be(lt(i.longitude),lt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=po(o[l],a[l]);if(u)return u}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Nu.mapValue&&s===Nu.mapValue)return 0;if(i===Nu.mapValue)return 1;if(s===Nu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=be(a[c],u[c]);if(h!==0)return h;const d=po(o[a[c]],l[u[c]]);if(d!==0)return d}return be(a.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function cw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ii(t),r=Ii(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function mo(t){return dm(t)}function dm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ii(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=dm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${dm(r.fields[a])}`;return s+"}"}(t.mapValue):te();var e,n}function hw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fm(t){return!!t&&"integerValue"in t}function _y(t){return!!t&&"arrayValue"in t}function dw(t){return!!t&&"nullValue"in t}function fw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zu(t){return!!t&&"mapValue"in t}function Ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(n)}setAll(e){let n=jt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ra(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new on(Ra(this.value))}}function jT(t){const e=[];return ys(t.fields,(n,r)=>{const i=new jt([n]);if(Zu(r)){const s=jT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new rr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ut(e,0,le.min(),le.min(),le.min(),on.empty(),0)}static newFoundDocument(e,n,r,i){return new Ut(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Ut(e,2,n,le.min(),le.min(),on.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,le.min(),le.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function pw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function DP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{}class ct extends BT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MP(e,n,r):n==="array-contains"?new UP(e,r):n==="in"?new jP(e,r):n==="not-in"?new BP(e,r):n==="array-contains-any"?new zP(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $P(e,r):new FP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(po(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wn extends BT{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Wn(e,n)}matches(e){return zT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zT(t){return t.op==="and"}function VT(t){return LP(t)&&zT(t)}function LP(t){for(const e of t.filters)if(e instanceof Wn)return!1;return!0}function pm(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+mo(t.value);if(VT(t))return t.filters.map(e=>pm(e)).join(",");{const e=t.filters.map(n=>pm(n)).join(",");return`${t.op}(${e})`}}function HT(t,e){return t instanceof ct?function(n,r){return r instanceof ct&&n.op===r.op&&n.field.isEqual(r.field)&&dr(n.value,r.value)}(t,e):t instanceof Wn?function(n,r){return r instanceof Wn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&HT(s,r.filters[o]),!0):!1}(t,e):void te()}function qT(t){return t instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${mo(e.value)}`}(t):t instanceof Wn?function(e){return e.op.toString()+" {"+e.getFilters().map(qT).join(" ,")+"}"}(t):"Filter"}class MP extends ct{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class $P extends ct{constructor(e,n){super(e,"in",n),this.keys=WT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FP extends ct{constructor(e,n){super(e,"not-in",n),this.keys=WT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class UP extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _y(n)&&dl(n.arrayValue,this.value)}}class jP extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&dl(this.value.arrayValue,n)}}class BP extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!dl(this.value.arrayValue,n)}}class zP extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_y(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>dl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function gw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VP(t,e,n,r,i,s,o)}function Sy(t){const e=he(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),e.dt=n}return e.dt}function Ty(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mw(t.startAt,e.startAt)&&mw(t.endAt,e.endAt)}function mm(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function HP(t,e,n,r,i,s,o,a){return new zl(t,e,n,r,i,s,o,a)}function Yh(t){return new zl(t)}function yw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cy(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function GT(t){return t.collectionGroup!==null}function Xs(t){const e=he(t);if(e.wt===null){e.wt=[];const n=Cy(e),r=KT(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Aa(n)),e.wt.push(new Aa(jt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Aa(jt.keyField(),s))}}}return e.wt}function Lr(t){const e=he(t);if(!e._t)if(e.limitType==="F")e._t=gw(e.path,e.collectionGroup,Xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Xs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Aa(s.field,o))}const r=e.endAt?new Xc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xc(e.startAt.position,e.startAt.inclusive):null;e._t=gw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function gm(t,e){e.getFirstInequalityField(),Cy(t);const n=t.filters.concat([e]);return new zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ym(t,e,n){return new zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xh(t,e){return Ty(Lr(t),Lr(e))&&t.limitType===e.limitType}function QT(t){return`${Sy(Lr(t))}|lt:${t.limitType}`}function vm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>qT(r)).join(", ")}]`),Qh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),`Target(${n})`}(Lr(t))}; limitType=${t.limitType})`}function Jh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):J.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Xs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=pw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Xs(n),r)||n.endAt&&!function(i,s,o){const a=pw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Xs(n),r))}(t,e)}function qP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YT(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=WP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WP(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?po(a,l):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=new ht(J.comparator);function Mr(){return KP}const XT=new ht(J.comparator);function ma(...t){let e=XT;for(const n of t)e=e.insert(n.key,n);return e}function JT(t){let e=XT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hi(){return ba()}function ZT(){return ba()}function ba(){return new bo(t=>t.toString(),(t,e)=>t.isEqual(e))}const GP=new ht(J.comparator),QP=new gn(J.comparator);function we(...t){let e=QP;for(const n of t)e=e.add(n);return e}const YP=new gn(be);function XP(){return YP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function tC(t){return{integerValue:""+t}}function JP(t,e){return bP(e)?tC(e):eC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this._=void 0}}function ZP(t,e,n){return t instanceof Jc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&wy(i)&&(i=Ey(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof fl?rC(t,e):t instanceof pl?iC(t,e):function(r,i){const s=nC(r,i),o=vw(s)+vw(r.gt);return fm(s)&&fm(r.gt)?tC(o):eC(r.serializer,o)}(t,e)}function e2(t,e,n){return t instanceof fl?rC(t,e):t instanceof pl?iC(t,e):n}function nC(t,e){return t instanceof Zc?fm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Jc extends Zh{}class fl extends Zh{constructor(e){super(),this.elements=e}}function rC(t,e){const n=sC(e);for(const r of t.elements)n.some(i=>dr(i,r))||n.push(r);return{arrayValue:{values:n}}}class pl extends Zh{constructor(e){super(),this.elements=e}}function iC(t,e){let n=sC(e);for(const r of t.elements)n=n.filter(i=>!dr(i,r));return{arrayValue:{values:n}}}class Zc extends Zh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function vw(t){return lt(t.integerValue||t.doubleValue)}function sC(t){return _y(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function t2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof fl&&r instanceof fl||n instanceof pl&&r instanceof pl?fo(n.elements,r.elements,dr):n instanceof Zc&&r instanceof Zc?dr(n.gt,r.gt):n instanceof Jc&&r instanceof Jc}(t.transform,e.transform)}class n2{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ed{}function oC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iy(t.key,Nn.none()):new Vl(t.key,t.data,Nn.none());{const n=t.data,r=on.empty();let i=new gn(jt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Di(t.key,r,new rr(i.toArray()),Nn.none())}}function r2(t,e,n){t instanceof Vl?function(r,i,s){const o=r.value.clone(),a=Ew(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(r,i,s){if(!ec(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ew(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(aC(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Na(t,e,n,r){return t instanceof Vl?function(i,s,o,a){if(!ec(i.precondition,s))return o;const l=i.value.clone(),u=_w(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Di?function(i,s,o,a){if(!ec(i.precondition,s))return o;const l=_w(i.fieldTransforms,a,s),u=s.data;return u.setAll(aC(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ec(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function i2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nC(r.transform,i||null);s!=null&&(n===null&&(n=on.empty()),n.set(r.field,s))}return n||null}function ww(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&fo(n,r,(i,s)=>t2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends ed{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Di extends ed{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ew(t,e,n){const r=new Map;Ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,e2(o,a,n[i]))}return r}function _w(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZP(s,o,e))}return r}class Iy extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s2 extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&r2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=oC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,r)=>ww(n,r))&&fo(this.baseMutations,e.baseMutations,(n,r)=>ww(n,r))}}class ky{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ve(e.mutations.length===r.length);let i=GP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ky(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Te;function u2(t){switch(t){default:return te();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function lC(t){if(t===void 0)return Dr("GRPC error has no .code"),N.UNKNOWN;switch(t){case ot.OK:return N.OK;case ot.CANCELLED:return N.CANCELLED;case ot.UNKNOWN:return N.UNKNOWN;case ot.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ot.INTERNAL:return N.INTERNAL;case ot.UNAVAILABLE:return N.UNAVAILABLE;case ot.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ot.NOT_FOUND:return N.NOT_FOUND;case ot.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ot.ABORTED:return N.ABORTED;case ot.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ot.DATA_LOSS:return N.DATA_LOSS;default:return te()}}(Te=ot||(ot={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Pu}static getOrCreateInstance(){return Pu===null&&(Pu=new xy),Pu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Pu=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=new Ys([4294967295,4294967295],0);function Sw(t){const e=c2().encode(t),n=new mP;return n.update(e),new Uint8Array(n.digest())}function Tw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ys([n,r],0),new Ys([i,s],0)]}class Ry{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ga(`Invalid padding: ${n}`);if(r<0)throw new ga(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ga(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ga(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ys.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ys.fromNumber(r)));return i.compare(h2)===1&&(i=new Ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Sw(e),[r,i]=Tw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ry(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Sw(e),[r,i]=Tw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Hl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new td(le.min(),i,new ht(be),Mr(),we())}}class Hl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hl(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class uC{constructor(e,n){this.targetId=e,this.Vt=n}}class cC{constructor(e,n,r=wn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cw{constructor(){this.St=0,this.Dt=kw(),this.Ct=wn.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=we(),n=we(),r=we();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new Hl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=kw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class d2{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Mr(),this.zt=Iw(),this.Wt=new ht(be)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(mm(o))if(i===0){const a=new J(o.path);this.Yt(r,a,Ut.newNoDocument(a,le.min()))}else Ve(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=xy.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,f,m,v,E,y;const p={localCacheCount:c,existenceFilterCount:h.count},w=h.unchangedNames;return w&&(p.bloomFilter={applied:u===0,hashCount:(d=w==null?void 0:w.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(m=(f=w==null?void 0:w.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(y=(E=w==null?void 0:w.bits)===null||E===void 0?void 0:E.padding)!==null&&y!==void 0?y:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=os(s).toUint8Array()}catch(c){if(c instanceof UT)return ho("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Ry(l,o,a)}catch(c){return ho(c instanceof ga?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&mm(a.target)){const l=new J(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ut.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=we();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new td(e,n,this.Wt,this.jt,r);return this.jt=Mr(),this.zt=Iw(),this.Wt=new ht(be),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Cw,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new gn(be),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Cw),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Iw(){return new ht(J.comparator)}function kw(){return new ht(J.comparator)}const f2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),p2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),m2=(()=>({and:"AND",or:"OR"}))();class g2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wm(t,e){return t.useProto3Json||Qh(e)?e:{value:e}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function y2(t,e){return eh(t,e.toTimestamp())}function ur(t){return Ve(!!t),le.fromTimestamp(function(e){const n=Ii(e);return new yt(n.seconds,n.nanos)}(t))}function Ay(t,e){return function(n){return new Be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dC(t){const e=Be.fromString(t);return Ve(gC(e)),e}function Em(t,e){return Ay(t.databaseId,e.path)}function bf(t,e){const n=dC(e);if(n.get(1)!==t.databaseId.projectId)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(fC(n))}function _m(t,e){return Ay(t.databaseId,e)}function v2(t){const e=dC(t);return e.length===4?Be.emptyPath():fC(e)}function Sm(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fC(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xw(t,e,n){return{name:Em(t,e),fields:n.value.mapValue.fields}}function w2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Ve(u===void 0||typeof u=="string"),wn.fromBase64String(u||"")):(Ve(u===void 0||u instanceof Uint8Array),wn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?N.UNKNOWN:lC(l.code);return new W(u,l.message||"")}(o);n=new cC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bf(t,r.document.name),s=ur(r.document.updateTime),o=r.document.createTime?ur(r.document.createTime):le.min(),a=new on({mapValue:{fields:r.document.fields}}),l=Ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new tc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bf(t,r.document),s=r.readTime?ur(r.readTime):le.min(),o=Ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bf(t,r.document),s=r.removedTargetIds||[];n=new tc([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new l2(i,s),a=r.targetId;n=new uC(a,o)}}return n}function E2(t,e){let n;if(e instanceof Vl)n={update:xw(t,e.key,e.value)};else if(e instanceof Iy)n={delete:Em(t,e.key)};else if(e instanceof Di)n={update:xw(t,e.key,e.data),updateMask:A2(e.fieldMask)};else{if(!(e instanceof s2))return te();n={verify:Em(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Jc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zc)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:y2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function _2(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?ur(r.updateTime):ur(i);return s.isEqual(le.min())&&(s=ur(i)),new n2(s,r.transformResults||[])}(n,e))):[]}function S2(t,e){return{documents:[_m(t,e.path)]}}function T2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_m(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_m(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return mC(Wn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ts(c.field),direction:k2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=wm(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function C2(t){let e=v2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=pC(c);return h instanceof Wn&&VT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Aa(Cs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Qh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Xc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Xc(d,h)}(n.endAt)),HP(e,i,o,s,a,"F",l,u)}function I2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cs(e.unaryFilter.field);return ct.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Cs(e.unaryFilter.field);return ct.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(e.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Cs(e.unaryFilter.field);return ct.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(e){return ct.create(Cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Wn.create(e.compositeFilter.filters.map(n=>pC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te()}}(e.compositeFilter.op))}(t):te()}function k2(t){return f2[t]}function x2(t){return p2[t]}function R2(t){return m2[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Cs(t){return jt.fromServerFormat(t.fieldPath)}function mC(t){return t instanceof ct?function(e){if(e.op==="=="){if(fw(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NAN"}};if(dw(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fw(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NAN"}};if(dw(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(e.field),op:x2(e.op),value:e.value}}}(t):t instanceof Wn?function(e){const n=e.getFilters().map(r=>mC(r));return n.length===1?n[0]:{compositeFilter:{op:R2(e.op),filters:n}}}(t):te()}function A2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r,i,s=le.min(),o=le.min(),a=wn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.fe=e}}function N2(t){const e=C2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ym(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.rn=new O2}addToCollectionParentIndex(e,n){return this.rn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Ci.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class O2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gn(Be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gn(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new go(0)}static Mn(){return new go(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.changes=new bo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Na(r.mutation,i,rr.empty(),yt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const i=Hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ma();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mr();const o=ba(),a=ba();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Di)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Na(c.mutation,u,c.mutation.getFieldMask(),yt.now())):o.set(u.key,rr.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new L2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ba();let i=new ht((o,a)=>o-a),s=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||rr.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||we()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=ZT();c.forEach(d=>{if(!s.has(d)){const f=oC(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return J.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Hi());let a=-1,l=s;return o.next(u=>L.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?L.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,we())).next(c=>({batchId:a,changes:JT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ma();return this.indexManager.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const l=function(u,c){return new zl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ut.newInvalidDocument(u)))});let o=ma();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Na(u.mutation,l,rr.empty(),yt.now()),Jh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return L.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:ur(r.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:N2(r.bundledQuery),readTime:ur(r.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this.overlays=new ht(J.comparator),this.ls=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hi();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Hi(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ht((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Hi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Hi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return L.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a2(n,r));let s=this.ls.get(n);s===void 0&&(s=we(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.fs=new gn(Et.ds),this.ws=new gn(Et._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Et(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Et(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new J(new Be([])),r=new Et(n,e),i=new Et(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new J(new Be([])),r=new Et(n,e),i=new Et(n,e+1);let s=we();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Et(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Et{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return J.comparator(e.key,n.key)||be(e.As,n.As)}static _s(e,n){return be(e.As,n.As)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new gn(Et.ds)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Et(n,0),i=new Et(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gn(be);return n.forEach(i=>{const s=new Et(i,0),o=new Et(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),L.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new Et(new J(s),0);let a=new gn(be);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),L.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ve(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return L.forEach(n.mutations,i=>{const s=new Et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Et(n,0),i=this.Rs.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.Ds=e,this.docs=new ht(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=Mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ut.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mr();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xP(kP(c),r)<=0||(i.has(c.key)||Jh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Cs(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new B2(this)}getSize(e){return L.resolve(this.size)}}class B2 extends D2{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.persistence=e,this.xs=new bo(n=>Sy(n),Ty),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Ns=0,this.ks=new by,this.targetCount=0,this.Ms=go.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),L.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new go(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Fn(n),L.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n){this.$s={},this.overlays={},this.Os=new vy(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new z2(this),this.indexManager=new P2,this.remoteDocumentCache=function(r){return new j2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new b2(n),this.qs=new $2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new U2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new H2(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return L.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class H2 extends AP{constructor(e){super(),this.currentSequenceNumber=e}}class Ny{constructor(e){this.persistence=e,this.Qs=new by,this.js=null}static zs(e){return new Ny(e)}get Ws(){if(this.js)return this.js;throw te()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),L.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Ws,r=>{const i=J.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return L.or([()=>L.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=we(),i=we();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Py(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(yw(n))return L.resolve(null);let r=Lr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ym(n,null,"F"),r=Lr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=we(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,ym(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return yw(n)||i.isEqual(le.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(aw()<=Ae.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vm(n)),this.Wi(e,o,n,IP(i,-1)))})}ji(e,n){let r=new gn(YT(e));return n.forEach((i,s)=>{Jh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return aw()<=Ae.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",vm(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ci.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ht(be),this.Yi=new bo(s=>Sy(s),Ty),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M2(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function K2(t,e,n,r){return new W2(t,e,n,r)}async function yC(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=we();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function G2(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=L.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const v=l.docVersions.get(f);Ve(v!==null),m.version.compareTo(v)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=we();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vC(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Q2(t,e){const n=he(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(wn.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(m,v,E){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let l=Mr(),u=we();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Y2(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(le.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function Y2(t,e,n){let r=we(),i=we();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function X2(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function J2(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new si(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Tm(t,e,n){const r=he(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Rw(t,e,n){const r=he(t);let i=le.min(),s=we();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=he(a),h=c.Yi.get(u);return h!==void 0?L.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Lr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:we())).next(a=>(Z2(r,qP(e),a),{documents:a,ir:s})))}function Z2(t,e,n){let r=t.Xi.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Aw{constructor(){this.activeTargetIds=XP()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eO{constructor(){this.Hr=new Aw,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Aw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou=null;function Nf(){return Ou===null?Ou=268435456+Math.round(2147483648*Math.random()):Ou++,"0x"+Ou.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class iO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Nf(),a=this.To(e,n);G("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(G("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ho("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ao,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=nO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Nf();return new Promise((o,a)=>{const l=new pP;l.setWithCredentials(!0),l.listenOnce(hP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Af.NO_ERROR:const c=l.getResponseJson();G(Mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Af.TIMEOUT:G(Mt,`RPC '${e}' ${s} timed out`),a(new W(N.DEADLINE_EXCEEDED,"Request time out"));break;case Af.HTTP_ERROR:const h=l.getStatus();if(G(Mt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(E)>=0?E:N.UNKNOWN}(f.status);a(new W(m,f.message))}else a(new W(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(N.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{G(Mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);G(Mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Nf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uP(),a=cP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new fP({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");G(Mt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const m=new rO({ro:E=>{f?G(Mt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(G(Mt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),G(Mt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,y,p)=>{E.listen(y,w=>{try{p(w)}catch(g){setTimeout(()=>{throw g},0)}})};return v(h,Au.EventType.OPEN,()=>{f||G(Mt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Au.EventType.CLOSE,()=>{f||(f=!0,G(Mt,`RPC '${e}' stream ${i} transport closed`),m.wo())}),v(h,Au.EventType.ERROR,E=>{f||(f=!0,ho(Mt,`RPC '${e}' stream ${i} transport errored:`,E),m.wo(new W(N.UNAVAILABLE,"The operation could not be completed")))}),v(h,Au.EventType.MESSAGE,E=>{var y;if(!f){const p=E.data[0];Ve(!!p);const w=p,g=w.error||((y=w[0])===null||y===void 0?void 0:y.error);if(g){G(Mt,`RPC '${e}' stream ${i} received error:`,g);const S=g.status;let x=function(C){const j=ot[C];if(j!==void 0)return lC(j)}(S),A=g.message;x===void 0&&(x=N.INTERNAL,A="Unknown error status: "+S+" with message "+g.message),f=!0,m.wo(new W(x,A)),h.close()}else G(Mt,`RPC '${e}' stream ${i} received:`,p),m._o(p)}}),v(a,dP.STAT_EVENT,E=>{E.stat===sw.PROXY?G(Mt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===sw.NOPROXY&&G(Mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}function Pf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){return new g2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new wC(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Dr(n.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new W(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sO extends EC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=w2(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?le.min():s.readTime?ur(s.readTime):le.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Sm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=mm(a)?{documents:S2(i,a)}:{query:T2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=hC(i,s.resumeToken);const l=wm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(le.min())>0){o.readTime=eh(i,s.snapshotVersion.toTimestamp());const l=wm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=I2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Sm(this.serializer),n.removeTarget=e,this.Wo(n)}}class oO extends EC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=_2(e.writeResults,e.commitTime),r=ur(e.commitTime);return this.listener.cu(r,n)}return Ve(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Sm(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>E2(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(N.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(N.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class lO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Dr(n),this.mu=!1):G("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{vs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=he(a);l.vu.add(4),await ql(l),l.bu.set("Unknown"),l.vu.delete(4),await rd(l)}(this))})}),this.bu=new lO(r,i)}}async function rd(t){if(vs(t))for(const e of t.Ru)await e(!0)}async function ql(t){for(const e of t.Ru)await e(!1)}function _C(t,e){const n=he(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Ly(n)?Dy(n):No(n).Ko()&&Oy(n,e))}function SC(t,e){const n=he(t),r=No(n);n.Au.delete(e),r.Ko()&&TC(n,e),n.Au.size===0&&(r.Ko()?r.jo():vs(n)&&n.bu.set("Unknown"))}function Oy(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}No(t).su(e)}function TC(t,e){t.Vu.qt(e),No(t).iu(e)}function Dy(t){t.Vu=new d2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),No(t).start(),t.bu.gu()}function Ly(t){return vs(t)&&!No(t).Uo()&&t.Au.size>0}function vs(t){return he(t).vu.size===0}function CC(t){t.Vu=void 0}async function cO(t){t.Au.forEach((e,n)=>{Oy(t,e)})}async function hO(t,e){CC(t),Ly(t)?(t.bu.Iu(e),Dy(t)):t.bu.set("Unknown")}async function dO(t,e,n){if(t.bu.set("Online"),e instanceof cC&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof tc?t.Vu.Ht(e):e instanceof uC?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(le.min()))try{const r=await vC(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(wn.EMPTY_BYTE_STRING,u.snapshotVersion)),TC(i,a);const c=new si(u.target,a,l,u.sequenceNumber);Oy(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!Bl(e))throw e;t.vu.add(1),await ql(t),t.bu.set("Offline"),n||(n=()=>vC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await rd(t)})}function IC(t,e){return e().catch(n=>th(t,n,e))}async function id(t){const e=he(t),n=ki(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;fO(e);)try{const i=await X2(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,pO(e,i)}catch(i){await th(e,i)}kC(e)&&xC(e)}function fO(t){return vs(t)&&t.Eu.length<10}function pO(t,e){t.Eu.push(e);const n=ki(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function kC(t){return vs(t)&&!ki(t).Uo()&&t.Eu.length>0}function xC(t){ki(t).start()}async function mO(t){ki(t).hu()}async function gO(t){const e=ki(t);for(const n of t.Eu)e.uu(n.mutations)}async function yO(t,e,n){const r=t.Eu.shift(),i=ky.from(r,e,n);await IC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await id(t)}async function vO(t,e){e&&ki(t).ou&&await async function(n,r){if(i=r.code,u2(i)&&i!==N.ABORTED){const s=n.Eu.shift();ki(n).Qo(),await IC(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await id(n)}var i}(t,e),kC(t)&&xC(t)}async function Nw(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=vs(n);n.vu.add(3),await ql(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await rd(n)}async function wO(t,e){const n=he(t);e?(n.vu.delete(2),await rd(n)):e||(n.vu.add(2),await ql(n),n.bu.set("Unknown"))}function No(t){return t.Su||(t.Su=function(e,n,r){const i=he(e);return i.fu(),new sO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:cO.bind(null,t),ao:hO.bind(null,t),nu:dO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Ly(t)?Dy(t):t.bu.set("Unknown")):(await t.Su.stop(),CC(t))})),t.Su}function ki(t){return t.Du||(t.Du=function(e,n,r){const i=he(e);return i.fu(),new oO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:mO.bind(null,t),ao:vO.bind(null,t),au:gO.bind(null,t),cu:yO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await id(t)):(await t.Du.stop(),t.Eu.length>0&&(G("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new My(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $y(t,e){if(Dr("AsyncQueue",`${e}: ${t}`),Bl(t))return new W(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ma(),this.sortedSet=new ht(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.Cu=new ht(J.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):te():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yo(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this.Nu=void 0,this.listeners=[]}}class _O{constructor(){this.queries=new bo(e=>QT(e),Xh),this.onlineState="Unknown",this.ku=new Set}}async function RC(t,e){const n=he(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new EO),i)try{s.Nu=await n.onListen(r)}catch(o){const a=$y(o,`Initialization of query '${vm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Fy(n)}async function AC(t,e){const n=he(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function SO(t,e){const n=he(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Fy(n)}function TO(t,e,n){const r=he(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Fy(t){t.ku.forEach(e=>{e.next()})}class bC{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.key=e}}class PC{constructor(e){this.key=e}}class CO{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=we(),this.mutatedKeys=we(),this.tc=YT(e),this.ec=new Js(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Pw,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Jh(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?m!==v&&(r.track({type:3,doc:f}),E=!0):this.rc(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return f(h)-f(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new yo(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Pw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=we(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new PC(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new NC(r))}),n}hc(e){this.Yu=e.ir,this.Zu=we();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return yo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class IO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kO{constructor(e){this.key=e,this.fc=!1}}class xO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new bo(a=>QT(a),Xh),this._c=new Map,this.mc=new Set,this.gc=new ht(J.comparator),this.yc=new Map,this.Ic=new by,this.Tc={},this.Ec=new Map,this.Ac=go.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function RO(t,e){const n=FO(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await J2(n.localStore,Lr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&_C(n.remoteStore,o)}return i}async function AO(t,e,n,r,i){t.Rc=(h,d,f)=>async function(m,v,E,y){let p=v.view.sc(E);p.zi&&(p=await Rw(m.localStore,v.query,!1).then(({documents:S})=>v.view.sc(S,p)));const w=y&&y.targetChanges.get(v.targetId),g=v.view.applyChanges(p,m.isPrimaryClient,w);return Dw(m,v.targetId,g.cc),g.snapshot}(t,h,d,f);const s=await Rw(t.localStore,e,!0),o=new CO(e,s.ir),a=o.sc(s.documents),l=Hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Dw(t,n,u.cc);const c=new IO(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function bO(t,e){const n=he(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Xh(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Tm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),SC(n.remoteStore,r.targetId),Cm(n,r.targetId)}).catch(jl)):(Cm(n,r.targetId),await Tm(n.localStore,r.targetId,!0))}async function NO(t,e,n){const r=UO(t);try{const i=await function(s,o){const a=he(s),l=yt.now(),u=o.reduce((d,f)=>d.add(f.key),we());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Mr(),m=we();return a.Zi.getEntries(d,u).next(v=>{f=v,f.forEach((E,y)=>{y.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const E=[];for(const y of o){const p=i2(y,c.get(y.key).overlayedDocument);p!=null&&E.push(new Di(y.key,p,jT(p.value.mapValue),Nn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:JT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ht(be)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Wl(r,i.changes),await id(r.remoteStore)}catch(i){const s=$y(i,"Failed to persist write");n.reject(s)}}async function OC(t,e){const n=he(t);try{const r=await Q2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(Ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Ve(o.fc):i.removedDocuments.size>0&&(Ve(o.fc),o.fc=!1))}),await Wl(n,r,e)}catch(r){await jl(r)}}function Ow(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=he(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Fy(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PO(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ht(J.comparator);o=o.insert(s,Ut.newNoDocument(s,le.min()));const a=we().add(s),l=new td(le.min(),new Map,new ht(be),o,a);await OC(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Uy(r)}else await Tm(r.localStore,e,!1).then(()=>Cm(r,e,n)).catch(jl)}async function OO(t,e){const n=he(t),r=e.batch.batchId;try{const i=await G2(n.localStore,e);LC(n,r,null),DC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wl(n,i)}catch(i){await jl(i)}}async function DO(t,e,n){const r=he(t);try{const i=await function(s,o){const a=he(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ve(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);LC(r,e,n),DC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wl(r,i)}catch(i){await jl(i)}}function DC(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function LC(t,e,n){const r=he(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Cm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||MC(t,r)})}function MC(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(SC(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Uy(t))}function Dw(t,e,n){for(const r of n)r instanceof NC?(t.Ic.addReference(r.key,e),LO(t,r)):r instanceof PC?(G("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||MC(t,r.key)):te()}function LO(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(G("SyncEngine","New document in limbo: "+n),t.mc.add(r),Uy(t))}function Uy(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new J(Be.fromString(e)),r=t.Ac.next();t.yc.set(r,new kO(n)),t.gc=t.gc.insert(n,r),_C(t.remoteStore,new si(Lr(Yh(n.path)),r,"TargetPurposeLimboResolution",vy.ct))}}async function Wl(t,e,n){const r=he(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Py.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=he(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>L.forEach(l,h=>L.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>L.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Bl(c))throw c;G("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,s))}async function MO(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await yC(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new W(N.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wl(n,r.er)}}function $O(t,e){const n=he(t),r=n.yc.get(e);if(r&&r.fc)return we().add(r.key);{let i=we();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function FO(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$O.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PO.bind(null,e),e.dc.nu=SO.bind(null,e.eventManager),e.dc.Pc=TO.bind(null,e.eventManager),e}function UO(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DO.bind(null,e),e}class Lw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return K2(this.persistence,new q2,e.initialUser,this.serializer)}createPersistence(e){return new V2(Ny.zs,this.serializer)}createSharedClientState(e){return new eO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ow(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MO.bind(null,this.syncEngine),await wO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _O}createDatastore(e){const n=nd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new iO(i));var i;return function(s,o,a,l){return new aO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ow(this.syncEngine,a,0),o=bw.D()?new bw:new tO,new uO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new xO(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=he(e);G("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ql(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=$T.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$y(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Of(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VO(t);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Nw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Nw(e.remoteStore,s)),t._onlineComponents=e}function zO(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function VO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Of(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!zO(n))throw n;ho("Error using user provided cache. Falling back to memory cache: "+n),await Of(t,new Lw)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Of(t,new Lw);return t._offlineComponents}async function FC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Mw(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Mw(t,new jO))),t._onlineComponents}function HO(t){return FC(t).then(e=>e.syncEngine)}async function Im(t){const e=await FC(t),n=e.eventManager;return n.onListen=RO.bind(null,e.syncEngine),n.onUnlisten=bO.bind(null,e.syncEngine),n}function qO(t,e,n={}){const r=new yi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new $C({next:h=>{s.enqueueAndForget(()=>AC(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new W(N.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new W(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new bC(Yh(o.path),u,{includeMetadataChanges:!0,Ku:!0});return RC(i,c)}(await Im(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e,n){if(!n)throw new W(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WO(t,e,n,r){if(e===!0&&r===!0)throw new W(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fw(t){if(!J.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uw(t){if(J.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sd(t);throw new W(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class od{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gP;switch(n.type){case"firstParty":return new EP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$w.get(e);n&&(G("ComponentProvider","Removing Datastore"),$w.delete(e),n.terminate())}(this),Promise.resolve()}}function KO(t,e,n,r={}){var i;const s=(t=Pn(t,od))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$t.MOCK_USER;else{a=RS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new W(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $t(u)}t._authCredentials=new yP(new MT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class Po{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Po(this.firestore,e,this._query)}}class wi extends Po{constructor(e,n,r){super(e,n,Yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new J(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function BC(t,e,...n){if(t=st(t),jC("collection","path",e),t instanceof od){const r=Be.fromString(e,...n);return Uw(r),new wi(t,null,r)}{if(!(t instanceof Ht||t instanceof wi))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Uw(r),new wi(t.firestore,null,r)}}function vo(t,e,...n){if(t=st(t),arguments.length===1&&(e=$T.A()),jC("doc","path",e),t instanceof od){const r=Be.fromString(e,...n);return Fw(r),new Ht(t,null,new J(r))}{if(!(t instanceof Ht||t instanceof wi))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Fw(r),new Ht(t.firestore,t instanceof wi?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new wC(this,"async_queue_retry"),this.Xc=()=>{const n=Pf();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Pf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Pf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new yi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Bl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=My.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&te()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Bw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xi extends od{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new GO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zC(this),this._firestoreClient.terminate()}}function QO(t,e){const n=typeof t=="object"?t:Gg(),r=typeof t=="string"?t:e||"(default)",i=Oh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=IS("firestore");s&&KO(i,...s)}return i}function jy(t){return t._firestoreClient||zC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zC(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new PP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,UC(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new BO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wo(wn.fromBase64String(e))}catch(n){throw new W(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wo(wn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=/^__.*__$/;class XO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}class VC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Vy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Vy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return nh(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(HC(this.ca)&&YO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class JO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nd(e)}ya(e,n,r,i=!1){return new Vy({ca:e,methodName:n,ga:r,path:jt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ld(t){const e=t._freezeSettings(),n=nd(t._databaseId);return new JO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qC(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Hy("Data must be an object, but it was:",o,r);const a=WC(r,o);let l,u;if(s.merge)l=new rr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=km(e,h,n);if(!o.contains(d))throw new W(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);GC(c,d)||c.push(d)}l=new rr(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new XO(new on(a),l,u)}class ud extends By{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ud}}function ZO(t,e,n,r){const i=t.ya(1,e,n);Hy("Data must be an object, but it was:",i,r);const s=[],o=on.empty();ys(r,(l,u)=>{const c=qy(e,l,n);u=st(u);const h=i.da(c);if(u instanceof ud)s.push(c);else{const d=Kl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new rr(s);return new VC(o,a,i.fieldTransforms)}function eD(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[km(e,r,n)],l=[i];if(s.length%2!=0)throw new W(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(km(e,s[d])),l.push(s[d+1]);const u=[],c=on.empty();for(let d=a.length-1;d>=0;--d)if(!GC(u,a[d])){const f=a[d];let m=l[d];m=st(m);const v=o.da(f);if(m instanceof ud)u.push(f);else{const E=Kl(m,v);E!=null&&(u.push(f),c.set(f,E))}}const h=new rr(u);return new VC(c,h,o.fieldTransforms)}function tD(t,e,n,r=!1){return Kl(n,t.ya(r?4:3,e))}function Kl(t,e){if(KC(t=st(t)))return Hy("Unsupported field value:",e,t),WC(t,e);if(t instanceof By)return function(n,r){if(!HC(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Kl(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=st(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return JP(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=yt.fromDate(n);return{timestampValue:eh(r.serializer,i)}}if(n instanceof yt){const i=new yt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eh(r.serializer,i)}}if(n instanceof zy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wo)return{bytesValue:hC(r.serializer,n._byteString)};if(n instanceof Ht){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ay(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${sd(n)}`)}(t,e)}function WC(t,e){const n={};return FT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,i)=>{const s=Kl(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function KC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof yt||t instanceof zy||t instanceof wo||t instanceof Ht||t instanceof By)}function Hy(t,e,n){if(!KC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=sd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function km(t,e,n){if((e=st(e))instanceof ad)return e._internalPath;if(typeof e=="string")return qy(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const nD=new RegExp("[~\\*/\\[\\]]");function qy(t,e,n){if(e.search(nD)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ad(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(N.INVALID_ARGUMENT,a+t+l)}function GC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rD extends QC{data(){return super.data()}}function Wy(t,e){return typeof e=="string"?qy(t,e):e instanceof ad?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ky{}class sD extends Ky{}function oD(t,e,...n){let r=[];e instanceof Ky&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Gy).length,o=i.filter(a=>a instanceof cd).length;if(s>1||s>0&&o>0)throw new W(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cd extends sD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=this._parse(e);return YC(e._query,n),new Po(e.firestore,e.converter,gm(e._query,n))}_parse(e){const n=ld(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new W(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Vw(c,u);const d=[];for(const f of c)d.push(zw(a,i,f));h={arrayValue:{values:d}}}else h=zw(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Vw(c,u),h=tD(o,s,c,u==="in"||u==="not-in");return ct.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function aD(t,e,n){const r=e,i=Wy("where",t);return cd._create(i,r,n)}class Gy extends Ky{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)YC(s,a),s=gm(s,a)}(e._query,n),new Po(e.firestore,e.converter,gm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zw(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new W(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GT(e)&&n.indexOf("/")!==-1)throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!J.isDocumentKey(r))throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hw(t,new J(r))}if(n instanceof Ht)return hw(t,n._key);throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sd(n)}.`)}function Vw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function YC(t,e){if(e.isInequality()){const r=Cy(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new W(N.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=KT(t);s!==null&&lD(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lD(t,e,n){if(!n.isEqual(e))throw new W(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class uD{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new zy(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ey(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new yt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ve(gC(r));const i=new hl(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||Dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JC extends QC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nc extends JC{data(e={}){return super.data(e)}}class cD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nc(this._firestore,this._userDataWriter,r.key,r,new ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new nc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ya(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new nc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ya(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:hD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){t=Pn(t,Ht);const e=Pn(t.firestore,xi);return qO(jy(e),t._key).then(n=>eI(e,t,n))}class ZC extends uD{constructor(e){super(),this.firestore=e}convertBytes(e){return new wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function fD(t,e,n){t=Pn(t,Ht);const r=Pn(t.firestore,xi),i=XC(t.converter,e,n);return hd(r,[qC(ld(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nn.none())])}function Hw(t,e,n,...r){t=Pn(t,Ht);const i=Pn(t.firestore,xi),s=ld(i);let o;return o=typeof(e=st(e))=="string"||e instanceof ad?eD(s,"updateDoc",t._key,e,n,r):ZO(s,"updateDoc",t._key,e),hd(i,[o.toMutation(t._key,Nn.exists(!0))])}function pD(t){return hd(Pn(t.firestore,xi),[new Iy(t._key,Nn.none())])}function mD(t,e){const n=Pn(t.firestore,xi),r=vo(t),i=XC(t.converter,e);return hd(n,[qC(ld(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nn.exists(!1))]).then(()=>r)}function gD(t,...e){var n,r,i;t=st(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Bw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ht)u=Pn(t.firestore,xi),c=Yh(t._key.path),l={next:h=>{e[o]&&e[o](eI(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Pn(t,Po);u=Pn(h.firestore,xi),c=h._query;const d=new ZC(u);l={next:f=>{e[o]&&e[o](new cD(u,d,h,f))},error:e[o+1],complete:e[o+2]},iD(t._query)}return function(h,d,f,m){const v=new $C(m),E=new bC(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>RC(await Im(h),E)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>AC(await Im(h),E))}}(jy(u),c,a,l)}function hd(t,e){return function(n,r){const i=new yi;return n.asyncQueue.enqueueAndForget(async()=>NO(await HO(n),r,i)),i.promise}(jy(t),e)}function eI(t,e,n){const r=n.docs.get(e._key),i=new ZC(t);return new JC(t,i,e._key,r,new ya(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ao=n})(ms),is(new Ti("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new xi(new vP(n.getProvider("auth-internal")),new SP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),lr(ow,"3.13.0",t),lr(ow,"3.13.0","esm2017")})();var yD="firebase",vD="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(yD,vD,"app");function Qy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wD=tI,nI=new Al("auth","Firebase",tI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Wg("@firebase/auth");function ED(t,...e){rh.logLevel<=Ae.WARN&&rh.warn(`Auth (${ms}): ${t}`,...e)}function rc(t,...e){rh.logLevel<=Ae.ERROR&&rh.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,...e){throw Yy(t,...e)}function cr(t,...e){return Yy(t,...e)}function _D(t,e,n){const r=Object.assign(Object.assign({},wD()),{[e]:n});return new Al("auth","Firebase",r).create(e,{appName:t.name})}function Yy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nI.create(t,...e)}function ee(t,e,...n){if(!t)throw Yy(e,...n)}function Tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rc(e),new Error(e)}function $r(t,e){t||Tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SD(){return qw()==="http:"||qw()==="https:"}function qw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SD()||WA()||"connection"in navigator)?navigator.onLine:!0}function CD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,$r(n>e,"Short delay should be less than long delay!"),this.isMobile=HA()||KA()}get(){return TD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e){$r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new Gl(3e4,6e4);function Oo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Do(t,e,n,r,i={}){return iI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=bl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rI.fetch()(sI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function iI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ID),e);try{const i=new xD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Du(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Du(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Du(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _D(t,c,u);Kn(t,c)}}catch(i){if(i instanceof fr)throw i;Kn(t,"network-request-failed",{message:String(i)})}}async function Ql(t,e,n,r,i={}){const s=await Do(t,e,n,r,i);return"mfaPendingCredential"in s&&Kn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xy(t.config,i):`${t.config.apiScheme}://${i}`}class xD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cr(this.auth,"network-request-failed")),kD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Du(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cr(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){return Do(t,"POST","/v1/accounts:delete",e)}async function AD(t,e){return Do(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bD(t,e=!1){const n=st(t),r=await n.getIdToken(e),i=Jy(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pa(Df(i.auth_time)),issuedAtTime:Pa(Df(i.iat)),expirationTime:Pa(Df(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Df(t){return Number(t)*1e3}function Jy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const i=TS(n);return i?JSON.parse(i):(rc("Failed to decode base64 JWT payload"),null)}catch(i){return rc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ND(t){const e=Jy(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&PD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ml(t,AD(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MD(s.providerUserInfo):[],a=LD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function DD(t){const e=st(t);await ih(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MD(t){return t.map(e=>{var{providerId:n}=e,r=Qy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(t,e){const n=await iI(t,{},async()=>{const r=bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ND(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $D(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gl;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gl,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ml(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bD(this,e)}reload(){return DD(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ih(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ml(this,RD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:g,isAnonymous:S,providerData:x,stsTokenManager:A}=n;ee(w&&A,e,"internal-error");const C=gl.fromJSON(this.name,A);ee(typeof w=="string",e,"internal-error"),qr(h,e.name),qr(d,e.name),ee(typeof g=="boolean",e,"internal-error"),ee(typeof S=="boolean",e,"internal-error"),qr(f,e.name),qr(m,e.name),qr(v,e.name),qr(E,e.name),qr(y,e.name),qr(p,e.name);const j=new Yi({uid:w,auth:e,email:d,emailVerified:g,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:C,createdAt:y,lastLoginAt:p});return x&&Array.isArray(x)&&(j.providerData=x.map(M=>Object.assign({},M))),E&&(j._redirectEventId=E),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new gl;i.updateFromServerResponse(n);const s=new Yi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ih(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new Map;function Cr(t){$r(t instanceof Function,"Expected a class definition");let e=Ww.get(t);return e?($r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ww.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aI.type="NONE";const Kw=aI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ic(this.userKey,i.apiKey,s),this.fullPersistenceKey=ic("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs(Cr(Kw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Cr(Kw);const o=ic(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Yi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dI(e))return"Blackberry";if(fI(e))return"Webos";if(Zy(e))return"Safari";if((e.includes("chrome/")||uI(e))&&!e.includes("edge/"))return"Chrome";if(hI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lI(t=Wt()){return/firefox\//i.test(t)}function Zy(t=Wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uI(t=Wt()){return/crios\//i.test(t)}function cI(t=Wt()){return/iemobile/i.test(t)}function hI(t=Wt()){return/android/i.test(t)}function dI(t=Wt()){return/blackberry/i.test(t)}function fI(t=Wt()){return/webos/i.test(t)}function dd(t=Wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FD(t=Wt()){var e;return dd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UD(){return GA()&&document.documentMode===10}function pI(t=Wt()){return dd(t)||hI(t)||fI(t)||dI(t)||/windows phone/i.test(t)||cI(t)}function jD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e=[]){let n;switch(t){case"Browser":n=Gw(Wt());break;case"Worker":n=`${Gw(Wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}async function gI(t,e){return Do(t,"GET","/v2/recaptchaConfig",Oo(t,e))}function Qw(t){return t!==void 0&&t.enterprise!==void 0}class yI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BD().appendChild(r)})}function zD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VD="https://www.google.com/recaptcha/enterprise.js?render=",HD="recaptcha-enterprise",qD="NO_RECAPTCHA";class wI{constructor(e){this.type=HD,this.auth=Lo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Qw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(qD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Qw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vI(VD+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function sh(t,e,n,r=!1){const i=new wI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yw(this),this.idTokenSubscription=new Yw(this),this.beforeStateQueue=new WD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ih(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}async initializeRecaptchaConfig(){const e=await gI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new yI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new wI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Al("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ED(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lo(t){return st(t)}class Yw{constructor(e){this.auth=e,this.observer=null,this.addObserver=tb(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){const n=Oh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bc(s,e??{}))return i;Kn(i,"already-initialized")}return n.initialize({options:e})}function QD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YD(t,e,n){const r=Lo(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=EI(e),{host:o,port:a}=XD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||JD()}function EI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XD(t){const e=EI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xw(o)}}}function Xw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,n){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}async function ZD(t,e){return Do(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(t,e){return Ql(t,"POST","/v1/accounts:signInWithPassword",Oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",Oo(t,e))}async function tL(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",Oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends ev{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await sh(e,r,"signInWithPassword");return Lf(e,i)}else return Lf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await sh(e,r,"signInWithPassword");return Lf(e,s)}else return Promise.reject(i)});case"emailLink":return eL(e,{email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ZD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tL(e,{idToken:n,email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e){return Ql(t,"POST","/v1/accounts:signInWithIdp",Oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL="http://localhost";class ls extends ev{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ls(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return eo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,eo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,eo(e,n)}buildRequest(){const e={requestUri:nL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iL(t){const e=ha(da(t)).link,n=e?ha(da(e)).deep_link_id:null,r=ha(da(t)).deep_link_id;return(r?ha(da(r)).link:null)||r||n||e||t}class tv{constructor(e){var n,r,i,s,o,a;const l=ha(da(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=rL((i=l.mode)!==null&&i!==void 0?i:null);ee(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iL(e);try{return new tv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,n){return yl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tv.parseLink(n);return ee(r,"argument-error"),yl._fromEmailAndCode(e,r.code,r.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends _I{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Yl{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.GOOGLE_SIGN_IN_METHOD="google.com";Zr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Yl{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Yl{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ti.credential(n,r)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(t,e){return Ql(t,"POST","/v1/accounts:signUp",Oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yi._fromIdTokenResponse(e,r,i),o=Jw(r);return new us({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jw(r);return new us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends fr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oh(e,n,r,i)}}function SI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oh._fromErrorAndOperation(t,s,e,r):s})}async function sL(t,e,n=!1){const r=await ml(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oL(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ml(t,SI(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=Jy(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e,n=!1){const r="signIn",i=await SI(t,r,e),s=await us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aL(t,e){return TI(Lo(t),e)}async function lL(t,e,n){var r;const i=Lo(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await sh(i,s,"signUpPassword");o=Mf(i,u)}else o=Mf(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await sh(i,s,"signUpPassword");return Mf(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await us._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function uL(t,e,n){return aL(st(t),Mo.credential(e,n))}function cL(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function hL(t,e,n){return st(t).beforeAuthStateChanged(e,n)}const ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ah,"1"),this.storage.removeItem(ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(){const t=Wt();return Zy(t)||dd(t)}const fL=1e3,pL=10;class II extends CI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dL()&&jD(),this.fallbackToPolling=pI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}II.type="LOCAL";const mL=II;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI extends CI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kI.type="SESSION";const xI=kI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await gL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=nv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function vL(t){hr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function wL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _L(){return RI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="firebaseLocalStorageDb",SL=1,lh="firebaseLocalStorage",bI="fbase_key";class Xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pd(t,e){return t.transaction([lh],e?"readwrite":"readonly").objectStore(lh)}function TL(){const t=indexedDB.deleteDatabase(AI);return new Xl(t).toPromise()}function Rm(){const t=indexedDB.open(AI,SL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lh,{keyPath:bI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lh)?e(r):(r.close(),await TL(),e(await Rm()))})})}async function Zw(t,e,n){const r=pd(t,!0).put({[bI]:e,value:n});return new Xl(r).toPromise()}async function CL(t,e){const n=pd(t,!1).get(e),r=await new Xl(n).toPromise();return r===void 0?null:r.value}function e1(t,e){const n=pd(t,!0).delete(e);return new Xl(n).toPromise()}const IL=800,kL=3;class NI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fd._getInstance(_L()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wL(),!this.activeServiceWorker)return;this.sender=new yL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await Zw(e,ah,"1"),await e1(e,ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pd(i,!1).getAll();return new Xl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NI.type="LOCAL";const xL=NI;new Gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t,e){return e?Cr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv extends ev{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AL(t){return TI(t.auth,new rv(t),t.bypassAuthState)}function bL(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),oL(n,new rv(t),t.bypassAuthState)}async function NL(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),sL(n,new rv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AL;case"linkViaPopup":case"linkViaRedirect":return NL;case"reauthViaPopup":case"reauthViaRedirect":return bL;default:Kn(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=new Gl(2e3,1e4);class Fs extends PI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=nv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PL.get())};e()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL="pendingRedirect",sc=new Map;class DL extends PI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const r=await LL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LL(t,e){const n=FL(e),r=$L(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ML(t,e){sc.set(t._key(),e)}function $L(t){return Cr(t._redirectPersistence)}function FL(t){return ic(OL,t.config.apiKey,t.name)}async function UL(t,e,n=!1){const r=Lo(t),i=RL(r,e),o=await new DL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=10*60*1e3;class BL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!OI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jL&&this.cachedEventUids.clear(),this.cachedEventUids.has(t1(e))}saveEventToCache(e){this.cachedEventUids.add(t1(e)),this.lastProcessedEventTime=Date.now()}}function t1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VL(t,e={}){return Do(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qL=/^https?/;async function WL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VL(t);for(const n of e)try{if(KL(n))return}catch{}Kn(t,"unauthorized-domain")}function KL(t){const e=xm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qL.test(n))return!1;if(HL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=new Gl(3e4,6e4);function n1(){const t=hr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QL(t){return new Promise((e,n)=>{var r,i,s;function o(){n1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n1(),n(cr(t,"network-request-failed"))},timeout:GL.get()})}if(!((i=(r=hr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hr().gapi)===null||s===void 0)&&s.load)o();else{const a=zD("iframefcb");return hr()[a]=()=>{gapi.load?o():n(cr(t,"network-request-failed"))},vI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oc=null,e})}let oc=null;function YL(t){return oc=oc||QL(t),oc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=new Gl(5e3,15e3),JL="__/auth/iframe",ZL="emulator/auth/iframe",eM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nM(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xy(e,ZL):`https://${t.config.authDomain}/${JL}`,r={apiKey:e.apiKey,appName:t.name,v:ms},i=tM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bl(r).slice(1)}`}async function rM(t){const e=await YL(t),n=hr().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:nM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cr(t,"network-request-failed"),a=hr().setTimeout(()=>{s(o)},XL.get());function l(){hr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sM=500,oM=600,aM="_blank",lM="http://localhost";class r1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uM(t,e,n,r=sM,i=oM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},iM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Wt().toLowerCase();n&&(a=uI(u)?aM:n),lI(u)&&(e=e||lM,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(FD(u)&&a!=="_self")return cM(e||"",a),new r1(null);const h=window.open(e||"",a,c);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new r1(h)}function cM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM="__/auth/handler",dM="emulator/auth/handler",fM=encodeURIComponent("fac");async function i1(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:i};if(e instanceof _I){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Yl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${fM}=${encodeURIComponent(l)}`:"";return`${pM(t)}?${bl(a).slice(1)}${u}`}function pM({config:t}){return t.emulator?Xy(t,dM):`https://${t.authDomain}/${hM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="webStorageSupport";class mM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xI,this._completeRedirectFn=UL,this._overrideRedirectResult=ML}async _openPopup(e,n,r,i){var s;$r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await i1(e,n,r,xm(),i);return uM(e,o,nv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await i1(e,n,r,xm(),i);return vL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rM(e),r=new BL(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($f,{type:$f},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$f];o!==void 0&&n(!!o),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pI()||Zy()||dd()}}const gM=mM;var s1="@firebase/auth",o1="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wM(t){is(new Ti("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mI(t)},u=new KD(r,i,s,l);return QD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),is(new Ti("auth-internal",e=>{const n=Lo(e.getProvider("auth").getImmediate());return(r=>new yM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(s1,o1,vM(t)),lr(s1,o1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=5*60,_M=xS("authIdTokenMaxAge")||EM;let a1=null;const SM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_M)return;const i=n==null?void 0:n.token;a1!==i&&(a1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TM(t=Gg()){const e=Oh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GD(t,{popupRedirectResolver:gM,persistence:[xL,mL,xI]}),r=xS("authTokenSyncURL");if(r){const s=SM(r);hL(n,s,()=>s(n.currentUser)),cL(n,o=>s(o))}const i=CS("auth");return i&&YD(n,`http://${i}`),n}wM("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="firebasestorage.googleapis.com",LI="storageBucket",CM=2*60*1e3,IM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends fr{constructor(e,n,r=0){super(Ff(e),`Firebase Storage: ${n} (${Ff(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ff(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Ff(t){return"storage/"+t}function iv(){const t="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,t)}function kM(t){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xM(t){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,t)}function AM(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bM(t){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NM(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PM(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function OM(t){return new rt(nt.INVALID_URL,"Invalid URL '"+t+"'.")}function DM(t){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LM(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+LI+"' property when initializing the app?")}function MM(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $M(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FM(t){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Am(t){return new rt(nt.INVALID_ARGUMENT,t)}function MI(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function UM(t){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oa(t,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ta(t){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw DM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},v=n===DI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",y=new RegExp(`^https?://${v}/${i}/${E}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:f,indices:m,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<w.length;g++){const S=w[g],x=S.regex.exec(e);if(x){const A=x[S.indices.bucket];let C=x[S.indices.path];C||(C=""),r=new pn(A,C),S.postModify(r);break}}if(r==null)throw OM(e);return r}}class jM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function d(){s&&clearTimeout(s)}function f(E,...y){if(u){d();return}if(E){d(),c.call(null,E,...y);return}if(l()||o){d(),c.call(null,E,...y);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let m=!1;function v(E){m||(m=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function zM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(t){return t!==void 0}function HM(t){return typeof t=="object"&&!Array.isArray(t)}function sv(t){return typeof t=="string"||t instanceof String}function l1(t){return ov()&&t instanceof Blob}function ov(){return typeof Blob<"u"&&!qA()}function u1(t,e,n,r){if(r<e)throw Am(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Am(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $I(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xi||(Xi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Xi.NO_ERROR,l=s.getStatus();if(!a||qM(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Xi.ABORT;r(!1,new Lu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Lu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());VM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=iv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?MI():PM();o(l)}else{const l=NM();o(l)}};this.canceled_?n(!1,new Lu(!1,null,!0)):this.backoffId_=BM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function KM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XM(t,e,n,r,i,s,o=!0){const a=$I(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return QM(u,e),KM(u,n),GM(u,s),YM(u,r),new WM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZM(...t){const e=JM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ov())return new Blob(t);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function e$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t$(t){if(typeof atob>"u")throw FM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uf{constructor(e,n){this.data=e,this.contentType=n||null}}function n$(t,e){switch(t){case ir.RAW:return new Uf(FI(e));case ir.BASE64:case ir.BASE64URL:return new Uf(UI(t,e));case ir.DATA_URL:return new Uf(i$(e),s$(e))}throw iv()}function FI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function r$(t){let e;try{e=decodeURIComponent(t)}catch{throw Oa(ir.DATA_URL,"Malformed data URL.")}return FI(e)}function UI(t,e){switch(t){case ir.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Oa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ir.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Oa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=t$(e)}catch(i){throw i.message.includes("polyfill")?i:Oa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class jI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oa(ir.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=o$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function i$(t){const e=new jI(t);return e.base64?UI(ir.BASE64,e.rest):r$(e.rest)}function s$(t){return new jI(t).contentType}function o$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){let r=0,i="";l1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(l1(this.data_)){const r=this.data_,i=e$(r,e,n);return i===null?null:new ni(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ni(r,!0)}}static getBlob(...e){if(ov()){const n=e.map(r=>r instanceof ni?r.data_:r);return new ni(ZM.apply(null,n))}else{const n=e.map(o=>sv(o)?n$(ir.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ni(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){let e;try{e=JSON.parse(t)}catch{return null}return HM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function l$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u$(t,e){return e}class Gt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||u$}}let Mu=null;function c$(t){return!sv(t)||t.length<2?t:zI(t)}function VI(){if(Mu)return Mu;const t=[];t.push(new Gt("bucket")),t.push(new Gt("generation")),t.push(new Gt("metageneration")),t.push(new Gt("name","fullPath",!0));function e(s,o){return c$(o)}const n=new Gt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Gt("size");return i.xform=r,t.push(i),t.push(new Gt("timeCreated")),t.push(new Gt("updated")),t.push(new Gt("md5Hash",null,!0)),t.push(new Gt("cacheControl",null,!0)),t.push(new Gt("contentDisposition",null,!0)),t.push(new Gt("contentEncoding",null,!0)),t.push(new Gt("contentLanguage",null,!0)),t.push(new Gt("contentType",null,!0)),t.push(new Gt("metadata","customMetadata",!0)),Mu=t,Mu}function h$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function d$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return h$(r,t),r}function HI(t,e,n){const r=BI(e);return r===null?null:d$(t,r,n)}function f$(t,e,n,r){const i=BI(e);if(i===null||!sv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=av(d,n,r),m=$I({alt:"media",token:u});return f+m})[0]}function p$(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class qI{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){if(!t)throw iv()}function m$(t,e){function n(r,i){const s=HI(t,i,e);return WI(s!==null),s}return n}function g$(t,e){function n(r,i){const s=HI(t,i,e);return WI(s!==null),f$(s,i,t.host,t._protocol)}return n}function KI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=AM():i=RM():n.getStatus()===402?i=xM(t.bucket):n.getStatus()===403?i=bM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function y$(t){const e=KI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kM(t.path)),s.serverResponse=i.serverResponse,s}return n}function v$(t,e,n){const r=e.fullServerUrl(),i=av(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new qI(i,s,g$(t,n),o);return a.errorHandler=y$(e),a}function w$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function E$(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=w$(null,e)),r}function _$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let g=0;g<2;g++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=E$(e,r,i),c=p$(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=ni.getBlob(h,r,d);if(f===null)throw MM();const m={name:u.fullPath},v=av(s,t.host,t._protocol),E="POST",y=t.maxUploadRetryTime,p=new qI(v,E,m$(t,n),y);return p.urlParams=m,p.headers=o,p.body=f.uploadData(),p.errorHandler=KI(e),p}class S${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ta("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ta("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ta("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ta("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ta("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class T$ extends S${initXhr(){this.xhr_.responseType="text"}}function GI(){return new T$}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new cs(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zI(this._location.path)}get storage(){return this._service}get parent(){const e=a$(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new cs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UM(e)}}function C$(t,e,n){t._throwIfRoot("uploadBytes");const r=_$(t.storage,t._location,VI(),new ni(e,!0),n);return t.storage.makeRequestWithTokens(r,GI).then(i=>({metadata:i,ref:t}))}function I$(t){t._throwIfRoot("getDownloadURL");const e=v$(t.storage,t._location,VI());return t.storage.makeRequestWithTokens(e,GI).then(n=>{if(n===null)throw $M();return n})}function k$(t,e){const n=l$(t._location.path,e),r=new pn(t._location.bucket,n);return new cs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x$(t){return/^[A-Za-z]+:\/\//.test(t)}function R$(t,e){return new cs(t,e)}function QI(t,e){if(t instanceof lv){const n=t;if(n._bucket==null)throw LM();const r=new cs(n,n._bucket);return e!=null?QI(r,e):r}else return e!==void 0?k$(t,e):t}function A$(t,e){if(e&&x$(e)){if(t instanceof lv)return R$(t,e);throw Am("To use ref(service, url), the first argument must be a Storage instance.")}else return QI(t,e)}function c1(t,e){const n=e==null?void 0:e[LI];return n==null?null:pn.makeFromBucketSpec(n,t)}function b$(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:RS(i,t.app.options.projectId))}class lv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=DI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CM,this._maxUploadRetryTime=IM,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=c1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=c1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){u1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){u1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jM(MI());{const o=XM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const h1="@firebase/storage",d1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="storage";function N$(t,e,n){return t=st(t),C$(t,e,n)}function P$(t){return t=st(t),I$(t)}function O$(t,e){return t=st(t),A$(t,e)}function D$(t=Gg(),e){t=st(t);const r=Oh(t,YI).getImmediate({identifier:e}),i=IS("storage");return i&&L$(r,...i),r}function L$(t,e,n,r={}){b$(t,e,n,r)}function M$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new lv(n,r,i,e,ms)}function $$(){is(new Ti(YI,M$,"PUBLIC").setMultipleInstances(!0)),lr(h1,d1,""),lr(h1,d1,"esm2017")}$$();const F$={apiKey:"AIzaSyDjp2naVdYBa2RhxnnLuiDBo3Y1kJvg3Ro",authDomain:"coordinates-10459.firebaseapp.com",projectId:"coordinates-10459",storageBucket:"coordinates-10459.appspot.com",messagingSenderId:"17389845792",appId:"1:17389845792:web:324711e8abcbb7c6aeeb45",measurementId:"G-C4T1LXJLHM"},uv=NS(F$),f1=TM(uv),hs=QO(uv),U$=D$(uv),Qn=T.createContext(),j$=({children:t})=>{const[e,n]=T.useState("disable");JSON.parse(localStorage.getItem("@userStorage"));const[r,i]=T.useState("");async function s(){i(r==="light"?"dark":"light")}function o(){n(e==="disable"?"enable":"disable")}return _.jsx(Qn.Provider,{value:{theme:r,setTheme:i,toggleTheme:s,toggleHamburguer:o,hamburguer:e},children:t})};/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ke(){return Ke=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ke.apply(this,arguments)}var at;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(at||(at={}));const p1="popstate";function B$(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return vl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ds(i)}return V$(e,n,null,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Eo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z$(){return Math.random().toString(36).substr(2,8)}function m1(t,e){return{usr:t.state,key:t.key,idx:e}}function vl(t,e,n,r){return n===void 0&&(n=null),Ke({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ur(e):e,{state:n,key:e&&e.key||r||z$()})}function ds(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ur(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function V$(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=at.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ke({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=at.Pop;let E=c(),y=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:y})}function d(E,y){a=at.Push;let p=vl(v.location,E,y);n&&n(p,E),u=c()+1;let w=m1(p,u),g=v.createHref(p);try{o.pushState(w,"",g)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(g)}s&&l&&l({action:a,location:v.location,delta:1})}function f(E,y){a=at.Replace;let p=vl(v.location,E,y);n&&n(p,E),u=c();let w=m1(p,u),g=v.createHref(p);o.replaceState(w,"",g),s&&l&&l({action:a,location:v.location,delta:0})}function m(E){let y=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:ds(E);return me(y,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,y)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(p1,h),l=E,()=>{i.removeEventListener(p1,h),l=null}},createHref(E){return e(i,E)},createURL:m,encodeLocation(E){let y=m(E);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:f,go(E){return o.go(E)}};return v}var pt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pt||(pt={}));const H$=new Set(["lazy","caseSensitive","path","id","index","children"]);function q$(t){return t.index===!0}function bm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(me(i.index!==!0||!i.children,"Cannot specify children on an index route"),me(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),q$(i)){let l=Ke({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ke({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=bm(i.children,e,o,r)),l}})}function Us(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ur(e):e,i=$o(r.pathname||"/",n);if(i==null)return null;let s=XI(t);W$(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tF(s[a],iF(i));return o}function XI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=xr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),XI(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Z$(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of JI(s.path))i(s,o,l)}),e}function JI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=JI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function W$(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eF(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K$=/^:\w+$/,G$=3,Q$=2,Y$=1,X$=10,J$=-2,g1=t=>t==="*";function Z$(t,e){let n=t.split("/"),r=n.length;return n.some(g1)&&(r+=J$),e&&(r+=Q$),n.filter(i=>!g1(i)).reduce((i,s)=>i+(K$.test(s)?G$:s===""?Y$:X$),r)}function eF(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tF(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nF({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:xr([i,c.pathname]),pathnameBase:lF(xr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=xr([i,c.pathnameBase]))}return s}function nF(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rF(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=sF(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rF(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Eo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iF(t){try{return decodeURI(t)}catch(e){return Eo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sF(t,e){try{return decodeURIComponent(t)}catch(n){return Eo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function $o(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oF(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ur(t):t;return{pathname:n?n.startsWith("/")?n:aF(n,e):e,search:uF(r),hash:cF(i)}}function aF(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function md(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ur(t):(i=Ke({},t),me(!i.pathname||!i.pathname.includes("?"),jf("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),jf("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),jf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=oF(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),lF=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uF=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cF=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class cv{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ZI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ek=["post","put","patch","delete"],hF=new Set(ek),dF=["get",...ek],fF=new Set(dF),pF=new Set([301,302,303,307,308]),mF=new Set([307,308]),Bf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gF={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},$u={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},tk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yF=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function vF(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;me(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let k=t.detectErrorBoundary;i=R=>({hasErrorBoundary:k(R)})}else i=yF;let s={},o=bm(t.routes,i,void 0,s),a,l=t.basename||"/",u=Ke({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,f=null,m=null,v=t.hydrationData!=null,E=Us(o,t.history.location,l),y=null;if(E==null){let k=In(404,{pathname:t.history.location.pathname}),{matches:R,route:O}=C1(o);E=R,y={[O.id]:k}}let p=!E.some(k=>k.route.lazy)&&(!E.some(k=>k.route.loader)||t.hydrationData!=null),w,g={historyAction:t.history.action,location:t.history.location,matches:E,initialized:p,navigation:Bf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},S=at.Pop,x=!1,A,C=!1,j=!1,M=[],oe=[],z=new Map,ye=0,_e=-1,ne=new Map,de=new Set,fe=new Map,P=new Map,H=new Map,Q=!1;function ve(){return c=t.history.listen(k=>{let{action:R,location:O,delta:K}=k;if(Q){Q=!1;return}Eo(H.size===0||K!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=ws({currentLocation:g.location,nextLocation:O,historyAction:R});if(ce&&K!=null){Q=!0,t.history.go(K*-1),Vr(ce,{state:"blocked",location:O,proceed(){Vr(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),t.history.go(K)},reset(){let re=new Map(g.blockers);re.set(ce,$u),$({blockers:re})}});return}return F(R,O)}),g.initialized||F(at.Pop,g.location),w}function U(){c&&c(),h.clear(),A&&A.abort(),g.fetchers.forEach((k,R)=>mr(R)),g.blockers.forEach((k,R)=>qe(R))}function B(k){return h.add(k),()=>h.delete(k)}function $(k){g=Ke({},g,k),h.forEach(R=>R(g))}function Y(k,R){var O,K;let ce=g.actionData!=null&&g.navigation.formMethod!=null&&Un(g.navigation.formMethod)&&g.navigation.state==="loading"&&((O=k.state)==null?void 0:O._isRedirect)!==!0,re;R.actionData?Object.keys(R.actionData).length>0?re=R.actionData:re=null:ce?re=g.actionData:re=null;let ae=R.loaderData?T1(g.loaderData,R.loaderData,R.matches||[],R.errors):g.loaderData,ie=new Map;H.clear();let X=x===!0||g.navigation.formMethod!=null&&Un(g.navigation.formMethod)&&((K=k.state)==null?void 0:K._isRedirect)!==!0;a&&(o=a,a=void 0),C||S===at.Pop||(S===at.Push?t.history.push(k,k.state):S===at.Replace&&t.history.replace(k,k.state)),$(Ke({},R,{actionData:re,loaderData:ae,historyAction:S,location:k,initialized:!0,navigation:Bf,revalidation:"idle",restoreScrollPosition:xv(k,R.matches||g.matches),preventScrollReset:X,blockers:ie})),S=at.Pop,x=!1,C=!1,j=!1,M=[],oe=[]}async function I(k,R){if(typeof k=="number"){t.history.go(k);return}let O=Nm(g.location,g.matches,l,u.v7_prependBasename,k,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:K,submission:ce,error:re}=y1(u.v7_normalizeFormMethod,!1,O,R),ae=g.location,ie=vl(g.location,K,R&&R.state);ie=Ke({},ie,t.history.encodeLocation(ie));let X=R&&R.replace!=null?R.replace:void 0,Fe=at.Push;X===!0?Fe=at.Replace:X===!1||ce!=null&&Un(ce.formMethod)&&ce.formAction===g.location.pathname+g.location.search&&(Fe=at.Replace);let Ne=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,hn=ws({currentLocation:ae,nextLocation:ie,historyAction:Fe});if(hn){Vr(hn,{state:"blocked",location:ie,proceed(){Vr(hn,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),I(k,R)},reset(){let wt=new Map(g.blockers);wt.set(hn,$u),$({blockers:wt})}});return}return await F(Fe,ie,{submission:ce,pendingError:re,preventScrollReset:Ne,replace:R&&R.replace})}function ge(){if(Se(),$({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){F(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}F(S||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function F(k,R,O){A&&A.abort(),A=null,S=k,C=(O&&O.startUninterruptedRevalidation)===!0,ox(g.location,g.matches),x=(O&&O.preventScrollReset)===!0;let K=a||o,ce=O&&O.overrideNavigation,re=Us(K,R,l);if(!re){let wt=In(404,{pathname:R.pathname}),{matches:rn,route:Yn}=C1(K);Tn(),Y(R,{matches:rn,loaderData:{},errors:{[Yn.id]:wt}});return}if(g.initialized&&!j&&TF(g.location,R)&&!(O&&O.submission&&Un(O.submission.formMethod))){Y(R,{matches:re});return}A=new AbortController;let ae=ra(t.history,R,A.signal,O&&O.submission),ie,X;if(O&&O.pendingError)X={[js(re).route.id]:O.pendingError};else if(O&&O.submission&&Un(O.submission.formMethod)){let wt=await He(ae,R,O.submission,re,{replace:O.replace});if(wt.shortCircuited)return;ie=wt.pendingActionData,X=wt.pendingActionError,ce=Fu(R,O.submission),ae=new Request(ae.url,{signal:ae.signal})}let{shortCircuited:Fe,loaderData:Ne,errors:hn}=await xe(ae,R,re,ce,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,ie,X);Fe||(A=null,Y(R,Ke({matches:re},ie?{actionData:ie}:{},{loaderData:Ne,errors:hn})))}async function He(k,R,O,K,ce){ce===void 0&&(ce={}),Se();let re=RF(R,O);$({navigation:re});let ae,ie=Om(K,R);if(!ie.route.action&&!ie.route.lazy)ae={type:pt.error,error:In(405,{method:k.method,pathname:R.pathname,routeId:ie.route.id})};else if(ae=await na("action",k,ie,K,s,i,l),k.signal.aborted)return{shortCircuited:!0};if(to(ae)){let X;return ce&&ce.replace!=null?X=ce.replace:X=ae.location===g.location.pathname+g.location.search,await pe(g,ae,{submission:O,replace:X}),{shortCircuited:!0}}if(Da(ae)){let X=js(K,ie.route.id);return(ce&&ce.replace)!==!0&&(S=at.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:ae.error}}}if(qi(ae))throw In(400,{type:"defer-action"});return{pendingActionData:{[ie.route.id]:ae.data}}}async function xe(k,R,O,K,ce,re,ae,ie,X){let Fe=K||Fu(R,ce),Ne=ce||re||x1(Fe),hn=a||o,[wt,rn]=v1(t.history,g,O,Ne,R,j,M,oe,fe,de,hn,l,ie,X);if(Tn(We=>!(O&&O.some(Cn=>Cn.route.id===We))||wt&&wt.some(Cn=>Cn.route.id===We)),wt.length===0&&rn.length===0){let We=zr();return Y(R,Ke({matches:O,loaderData:{},errors:X||null},ie?{actionData:ie}:{},We?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!C){rn.forEach(Cn=>{let Es=g.fetchers.get(Cn.key),kt=ia(void 0,Es?Es.data:void 0);g.fetchers.set(Cn.key,kt)});let We=ie||g.actionData;$(Ke({navigation:Fe},We?Object.keys(We).length===0?{actionData:null}:{actionData:We}:{},rn.length>0?{fetchers:new Map(g.fetchers)}:{}))}_e=++ye,rn.forEach(We=>{z.has(We.key)&&Me(We.key),We.controller&&z.set(We.key,We.controller)});let Yn=()=>rn.forEach(We=>Me(We.key));A&&A.signal.addEventListener("abort",Yn);let{results:Vo,loaderResults:jd,fetcherResults:su}=await ft(g.matches,O,wt,rn,k);if(k.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Yn),rn.forEach(We=>z.delete(We.key));let gr=I1(Vo);if(gr)return await pe(g,gr,{replace:ae}),{shortCircuited:!0};let{loaderData:ou,errors:Bd}=S1(g,O,wt,jd,X,rn,su,P);P.forEach((We,Cn)=>{We.subscribe(Es=>{(Es||We.done)&&P.delete(Cn)})});let zd=zr(),Vd=nn(_e),au=zd||Vd||rn.length>0;return Ke({loaderData:ou,errors:Bd},au?{fetchers:new Map(g.fetchers)}:{})}function Re(k){return g.fetchers.get(k)||gF}function ue(k,R,O,K){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");z.has(k)&&Me(k);let ce=a||o,re=Nm(g.location,g.matches,l,u.v7_prependBasename,O,R,K==null?void 0:K.relative),ae=Us(ce,re,l);if(!ae){Ze(k,R,In(404,{pathname:re}));return}let{path:ie,submission:X,error:Fe}=y1(u.v7_normalizeFormMethod,!0,re,K);if(Fe){Ze(k,R,Fe);return}let Ne=Om(ae,ie);if(x=(K&&K.preventScrollReset)===!0,X&&Un(X.formMethod)){dt(k,R,ie,Ne,ae,X);return}fe.set(k,{routeId:R,path:ie}),Ot(k,R,ie,Ne,ae,X)}async function dt(k,R,O,K,ce,re){if(Se(),fe.delete(k),!K.route.action&&!K.route.lazy){let kt=In(405,{method:re.formMethod,pathname:O,routeId:R});Ze(k,R,kt);return}let ae=g.fetchers.get(k),ie=AF(re,ae);g.fetchers.set(k,ie),$({fetchers:new Map(g.fetchers)});let X=new AbortController,Fe=ra(t.history,O,X.signal,re);z.set(k,X);let Ne=await na("action",Fe,K,ce,s,i,l);if(Fe.signal.aborted){z.get(k)===X&&z.delete(k);return}if(to(Ne)){z.delete(k),de.add(k);let kt=ia(re);return g.fetchers.set(k,kt),$({fetchers:new Map(g.fetchers)}),pe(g,Ne,{submission:re,isFetchActionRedirect:!0})}if(Da(Ne)){Ze(k,R,Ne.error);return}if(qi(Ne))throw In(400,{type:"defer-action"});let hn=g.navigation.location||g.location,wt=ra(t.history,hn,X.signal),rn=a||o,Yn=g.navigation.state!=="idle"?Us(rn,g.navigation.location,l):g.matches;me(Yn,"Didn't find any matches after fetcher action");let Vo=++ye;ne.set(k,Vo);let jd=ia(re,Ne.data);g.fetchers.set(k,jd);let[su,gr]=v1(t.history,g,Yn,re,hn,j,M,oe,fe,de,rn,l,{[K.route.id]:Ne.data},void 0);gr.filter(kt=>kt.key!==k).forEach(kt=>{let Ho=kt.key,Rv=g.fetchers.get(Ho),lx=ia(void 0,Rv?Rv.data:void 0);g.fetchers.set(Ho,lx),z.has(Ho)&&Me(Ho),kt.controller&&z.set(Ho,kt.controller)}),$({fetchers:new Map(g.fetchers)});let ou=()=>gr.forEach(kt=>Me(kt.key));X.signal.addEventListener("abort",ou);let{results:Bd,loaderResults:zd,fetcherResults:Vd}=await ft(g.matches,Yn,su,gr,wt);if(X.signal.aborted)return;X.signal.removeEventListener("abort",ou),ne.delete(k),z.delete(k),gr.forEach(kt=>z.delete(kt.key));let au=I1(Bd);if(au)return pe(g,au);let{loaderData:We,errors:Cn}=S1(g,g.matches,su,zd,void 0,gr,Vd,P);if(g.fetchers.has(k)){let kt=ac(Ne.data);g.fetchers.set(k,kt)}let Es=nn(Vo);g.navigation.state==="loading"&&Vo>_e?(me(S,"Expected pending action"),A&&A.abort(),Y(g.navigation.location,{matches:Yn,loaderData:We,errors:Cn,fetchers:new Map(g.fetchers)})):($(Ke({errors:Cn,loaderData:T1(g.loaderData,We,Yn,Cn)},Es||gr.length>0?{fetchers:new Map(g.fetchers)}:{})),j=!1)}async function Ot(k,R,O,K,ce,re){let ae=g.fetchers.get(k),ie=ia(re,ae?ae.data:void 0);g.fetchers.set(k,ie),$({fetchers:new Map(g.fetchers)});let X=new AbortController,Fe=ra(t.history,O,X.signal);z.set(k,X);let Ne=await na("loader",Fe,K,ce,s,i,l);if(qi(Ne)&&(Ne=await ik(Ne,Fe.signal,!0)||Ne),z.get(k)===X&&z.delete(k),Fe.signal.aborted)return;if(to(Ne)){de.add(k),await pe(g,Ne);return}if(Da(Ne)){let wt=js(g.matches,R);g.fetchers.delete(k),$({fetchers:new Map(g.fetchers),errors:{[wt.route.id]:Ne.error}});return}me(!qi(Ne),"Unhandled fetcher deferred data");let hn=ac(Ne.data);g.fetchers.set(k,hn),$({fetchers:new Map(g.fetchers)})}async function pe(k,R,O){let{submission:K,replace:ce,isFetchActionRedirect:re}=O===void 0?{}:O;R.revalidate&&(j=!0);let ae=vl(k.location,R.location,Ke({_isRedirect:!0},re?{_isFetchActionRedirect:!0}:{}));if(me(ae,"Expected a location on the redirect navigation"),tk.test(R.location)&&n){let Fe=t.history.createURL(R.location),Ne=$o(Fe.pathname,l)==null;if(e.location.origin!==Fe.origin||Ne){ce?e.location.replace(R.location):e.location.assign(R.location);return}}A=null;let ie=ce===!0?at.Replace:at.Push,X=K||x1(k.navigation);if(mF.has(R.status)&&X&&Un(X.formMethod))await F(ie,ae,{submission:Ke({},X,{formAction:R.location}),preventScrollReset:x});else if(re)await F(ie,ae,{overrideNavigation:Fu(ae),fetcherSubmission:X,preventScrollReset:x});else{let Fe=Fu(ae,X);await F(ie,ae,{overrideNavigation:Fe,preventScrollReset:x})}}async function ft(k,R,O,K,ce){let re=await Promise.all([...O.map(X=>na("loader",ce,X,R,s,i,l)),...K.map(X=>X.matches&&X.match&&X.controller?na("loader",ra(t.history,X.path,X.controller.signal),X.match,X.matches,s,i,l):{type:pt.error,error:In(404,{pathname:X.path})})]),ae=re.slice(0,O.length),ie=re.slice(O.length);return await Promise.all([k1(k,O,ae,ae.map(()=>ce.signal),!1,g.loaderData),k1(k,K.map(X=>X.match),ie,K.map(X=>X.controller?X.controller.signal:null),!0)]),{results:re,loaderResults:ae,fetcherResults:ie}}function Se(){j=!0,M.push(...Tn()),fe.forEach((k,R)=>{z.has(R)&&(oe.push(R),Me(R))})}function Ze(k,R,O){let K=js(g.matches,R);mr(k),$({errors:{[K.route.id]:O},fetchers:new Map(g.fetchers)})}function mr(k){let R=g.fetchers.get(k);z.has(k)&&!(R&&R.state==="loading"&&ne.has(k))&&Me(k),fe.delete(k),ne.delete(k),de.delete(k),g.fetchers.delete(k)}function Me(k){let R=z.get(k);me(R,"Expected fetch controller: "+k),R.abort(),z.delete(k)}function Li(k){for(let R of k){let O=Re(R),K=ac(O.data);g.fetchers.set(R,K)}}function zr(){let k=[],R=!1;for(let O of de){let K=g.fetchers.get(O);me(K,"Expected fetcher: "+O),K.state==="loading"&&(de.delete(O),k.push(O),R=!0)}return Li(k),R}function nn(k){let R=[];for(let[O,K]of ne)if(K<k){let ce=g.fetchers.get(O);me(ce,"Expected fetcher: "+O),ce.state==="loading"&&(Me(O),ne.delete(O),R.push(O))}return Li(R),R.length>0}function Z(k,R){let O=g.blockers.get(k)||$u;return H.get(k)!==R&&H.set(k,R),O}function qe(k){g.blockers.delete(k),H.delete(k)}function Vr(k,R){let O=g.blockers.get(k)||$u;me(O.state==="unblocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="proceeding"||O.state==="blocked"&&R.state==="unblocked"||O.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+R.state);let K=new Map(g.blockers);K.set(k,R),$({blockers:K})}function ws(k){let{currentLocation:R,nextLocation:O,historyAction:K}=k;if(H.size===0)return;H.size>1&&Eo(!1,"A router only supports one blocker at a time");let ce=Array.from(H.entries()),[re,ae]=ce[ce.length-1],ie=g.blockers.get(re);if(!(ie&&ie.state==="proceeding")&&ae({currentLocation:R,nextLocation:O,historyAction:K}))return re}function Tn(k){let R=[];return P.forEach((O,K)=>{(!k||k(K))&&(O.cancel(),R.push(K),P.delete(K))}),R}function sx(k,R,O){if(d=k,m=R,f=O||null,!v&&g.navigation===Bf){v=!0;let K=xv(g.location,g.matches);K!=null&&$({restoreScrollPosition:K})}return()=>{d=null,m=null,f=null}}function kv(k,R){return f&&f(k,R.map(K=>xF(K,g.loaderData)))||k.key}function ox(k,R){if(d&&m){let O=kv(k,R);d[O]=m()}}function xv(k,R){if(d){let O=kv(k,R),K=d[O];if(typeof K=="number")return K}return null}function ax(k){s={},a=bm(k,i,void 0,s)}return w={get basename(){return l},get state(){return g},get routes(){return o},initialize:ve,subscribe:B,enableScrollRestoration:sx,navigate:I,fetch:ue,revalidate:ge,createHref:k=>t.history.createHref(k),encodeLocation:k=>t.history.encodeLocation(k),getFetcher:Re,deleteFetcher:mr,dispose:U,getBlocker:Z,deleteBlocker:qe,_internalFetchControllers:z,_internalActiveDeferreds:P,_internalSetRoutes:ax},w}function wF(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Nm(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=md(i||".",Jl(a).map(c=>c.pathnameBase),$o(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!hv(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:xr([n,u.pathname])),ds(u)}function y1(t,e,n,r){if(!r||!wF(r))return{path:n};if(r.formMethod&&!kF(r.formMethod))return{path:n,error:In(405,{method:r.formMethod})};let i=()=>({path:n,error:In(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=rk(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Un(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((f,m)=>{let[v,E]=m;return""+f+v+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!Un(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}me(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Pm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Pm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=_1(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=_1(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Un(c.formMethod))return{path:n,submission:c};let h=Ur(n);return e&&h.search&&hv(h.search)&&l.append("index",""),h.search="?"+l,{path:ds(h),submission:c}}function EF(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function v1(t,e,n,r,i,s,o,a,l,u,c,h,d,f){let m=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,v=t.createURL(e.location),E=t.createURL(i),y=f?Object.keys(f)[0]:void 0,w=EF(n,y).filter((S,x)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(_F(e.loaderData,e.matches[x],S)||o.some(j=>j===S.route.id))return!0;let A=e.matches[x],C=S;return w1(S,Ke({currentUrl:v,currentParams:A.params,nextUrl:E,nextParams:C.params},r,{actionResult:m,defaultShouldRevalidate:s||v.pathname+v.search===E.pathname+E.search||v.search!==E.search||nk(A,C)}))}),g=[];return l.forEach((S,x)=>{if(!n.some(z=>z.route.id===S.routeId))return;let A=Us(c,S.path,h);if(!A){g.push({key:x,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let C=e.fetchers.get(x),j=C&&C.state!=="idle"&&C.data===void 0&&!u.has(x),M=Om(A,S.path);(a.includes(x)||j||w1(M,Ke({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:s})))&&g.push({key:x,routeId:S.routeId,path:S.path,matches:A,match:M,controller:new AbortController})}),[w,g]}function _F(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function nk(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function w1(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function E1(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];me(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Eo(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!H$.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ke({},e(i),{lazy:void 0}))}async function na(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=m=>{let v,E=new Promise((y,p)=>v=p);return c=()=>v(),e.signal.addEventListener("abort",c),Promise.race([m({request:e,params:n.params,context:a.requestContext}),E])};try{let m=n.route[t];if(n.route.lazy)if(m)u=(await Promise.all([h(m),E1(n.route,s,i)]))[0];else if(await E1(n.route,s,i),m=n.route[t],m)u=await h(m);else if(t==="action"){let v=new URL(e.url),E=v.pathname+v.search;throw In(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:pt.data,data:void 0};else if(m)u=await h(m);else{let v=new URL(e.url),E=v.pathname+v.search;throw In(404,{pathname:E})}me(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(m){l=pt.error,u=m}finally{c&&e.signal.removeEventListener("abort",c)}if(IF(u)){let m=u.status;if(pF.has(m)){let y=u.headers.get("Location");if(me(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!tk.test(y))y=Nm(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,y);else if(!a.isStaticRequest){let p=new URL(e.url),w=y.startsWith("//")?new URL(p.protocol+y):new URL(y),g=$o(w.pathname,o)!=null;w.origin===p.origin&&g&&(y=w.pathname+w.search+w.hash)}if(a.isStaticRequest)throw u.headers.set("Location",y),u;return{type:pt.redirect,status:m,location:y,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||pt.data,response:u};let v,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?v=await u.json():v=await u.text(),l===pt.error?{type:l,error:new cv(m,u.statusText,v),headers:u.headers}:{type:pt.data,data:v,statusCode:u.status,headers:u.headers}}if(l===pt.error)return{type:l,error:u};if(CF(u)){var d,f;return{type:pt.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((f=u.init)==null?void 0:f.headers)&&new Headers(u.init.headers)}}return{type:pt.data,data:u}}function ra(t,e,n,r){let i=t.createURL(rk(e)).toString(),s={signal:n};if(r&&Un(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Pm(r.formData):s.body=r.formData}return new Request(i,s)}function Pm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function _1(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function SF(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(me(!to(c),"Cannot handle redirect results in processLoaderData"),Da(c)){let f=js(t,d),m=c.error;r&&(m=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=m),s[d]=void 0,l||(l=!0,a=ZI(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else qi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function S1(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=SF(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:f}=s[c];me(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let m=o[c];if(!(f&&f.signal.aborted))if(Da(m)){let v=js(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=Ke({},u,{[v.route.id]:m.error})),t.fetchers.delete(h)}else if(to(m))me(!1,"Unhandled fetcher revalidation redirect");else if(qi(m))me(!1,"Unhandled fetcher deferred data");else{let v=ac(m.data);t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function T1(t,e,n,r){let i=Ke({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function js(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function C1(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function In(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new cv(t||500,o,new Error(a),!0)}function I1(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(to(n))return n}}function rk(t){let e=typeof t=="string"?Ur(t):t;return ds(Ke({},e,{hash:""}))}function TF(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function qi(t){return t.type===pt.deferred}function Da(t){return t.type===pt.error}function to(t){return(t&&t.type)===pt.redirect}function CF(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function IF(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function kF(t){return fF.has(t.toLowerCase())}function Un(t){return hF.has(t.toLowerCase())}async function k1(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!nk(u,l)&&(s&&s[l.route.id])!==void 0;if(qi(a)&&(i||c)){let h=r[o];me(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await ik(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function ik(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:pt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:pt.error,error:i}}return{type:pt.data,data:t.deferredData.data}}}function hv(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function xF(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Om(t,e){let n=typeof e=="string"?Ur(e).search:e.search;if(t[t.length-1].route.index&&hv(n||""))return t[t.length-1];let r=Jl(t);return r[r.length-1]}function x1(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Fu(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function RF(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ia(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function AF(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function ac(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uh(){return uh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uh.apply(this,arguments)}const gd=T.createContext(null),sk=T.createContext(null),Fo=T.createContext(null),yd=T.createContext(null),jr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),ok=T.createContext(null);function bF(t,e){let{relative:n}=e===void 0?{}:e;Uo()||me(!1);let{basename:r,navigator:i}=T.useContext(Fo),{hash:s,pathname:o,search:a}=lk(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:xr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Uo(){return T.useContext(yd)!=null}function Zl(){return Uo()||me(!1),T.useContext(yd).location}function ak(t){T.useContext(Fo).static||T.useLayoutEffect(t)}function jo(){let{isDataRoute:t}=T.useContext(jr);return t?HF():NF()}function NF(){Uo()||me(!1);let t=T.useContext(gd),{basename:e,navigator:n}=T.useContext(Fo),{matches:r}=T.useContext(jr),{pathname:i}=Zl(),s=JSON.stringify(Jl(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return ak(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=md(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:xr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const PF=T.createContext(null);function OF(t){let e=T.useContext(jr).outlet;return e&&T.createElement(PF.Provider,{value:t},e)}function lk(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(jr),{pathname:i}=Zl(),s=JSON.stringify(Jl(r).map(o=>o.pathnameBase));return T.useMemo(()=>md(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function DF(t,e,n){Uo()||me(!1);let{navigator:r}=T.useContext(Fo),{matches:i}=T.useContext(jr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Zl(),u;if(e){var c;let v=typeof e=="string"?Ur(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||me(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=Us(t,{pathname:d}),m=UF(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:xr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:xr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&m?T.createElement(yd.Provider,{value:{location:uh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:at.Pop}},m):m}function LF(){let t=VF(),e=ZI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const MF=T.createElement(LF,null);class $F extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(jr.Provider,{value:this.props.routeContext},T.createElement(ok.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FF(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(gd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(jr.Provider,{value:e},r)}function UF(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||me(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||MF);let d=e.concat(s.slice(0,u+1)),f=()=>{let m;return c?m=h:l.route.Component?m=T.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,T.createElement(FF,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement($F,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Dm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Dm||(Dm={}));var wl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(wl||(wl={}));function jF(t){let e=T.useContext(gd);return e||me(!1),e}function BF(t){let e=T.useContext(sk);return e||me(!1),e}function zF(t){let e=T.useContext(jr);return e||me(!1),e}function uk(t){let e=zF(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function VF(){var t;let e=T.useContext(ok),n=BF(wl.UseRouteError),r=uk(wl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function HF(){let{router:t}=jF(Dm.UseNavigateStable),e=uk(wl.UseNavigateStable),n=T.useRef(!1);return ak(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,uh({fromRouteId:e},s)))},[t,e])}const qF="startTransition",R1=Ix[qF];function WF(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=T.useState(n.state),{v7_startTransition:o}=r||{},a=T.useCallback(h=>{o&&R1?R1(()=>s(h)):s(h)},[s,o]);T.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,f)=>n.navigate(h,{state:d,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(h,d,f)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[n]),u=n.basename||"/",c=T.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return T.createElement(T.Fragment,null,T.createElement(gd.Provider,{value:c},T.createElement(sk.Provider,{value:i},T.createElement(QF,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?T.createElement(KF,{routes:n.routes,state:i}):e))),null)}function KF(t){let{routes:e,state:n}=t;return DF(e,void 0,n)}function ck(t){let{to:e,replace:n,state:r,relative:i}=t;Uo()||me(!1);let{matches:s}=T.useContext(jr),{pathname:o}=Zl(),a=jo(),l=md(e,Jl(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function GF(t){return OF(t.context)}function QF(t){let{basename:e="/",children:n=null,location:r,navigationType:i=at.Pop,navigator:s,static:o=!1}=t;Uo()&&me(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ur(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,m=T.useMemo(()=>{let v=$o(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return m==null?null:T.createElement(Fo.Provider,{value:l},T.createElement(yd.Provider,{children:n,value:m}))}var A1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(A1||(A1={}));new Promise(()=>{});function YF(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:T.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:T.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},El.apply(this,arguments)}function XF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZF(t,e){return t.button===0&&(!e||e==="_self")&&!JF(t)}const e4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function t4(t,e){return vF({basename:e==null?void 0:e.basename,future:El({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:B$({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||n4(),routes:t,mapRouteProperties:YF}).initialize()}function n4(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=El({},e,{errors:r4(e.errors)})),e}function r4(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new cv(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const i4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bt=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=XF(e,e4),{basename:d}=T.useContext(Fo),f,m=!1;if(typeof u=="string"&&s4.test(u)&&(f=u,i4))try{let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),g=$o(w.pathname,d);w.origin===p.origin&&g!=null?u=g+w.search+w.hash:m=!0}catch{}let v=bF(u,{relative:i}),E=o4(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(p){r&&r(p),p.defaultPrevented||E(p)}return T.createElement("a",El({},h,{href:f||v,onClick:m||s?r:y,ref:n,target:l}))});var b1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(b1||(b1={}));var N1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(N1||(N1={}));function o4(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=jo(),l=Zl(),u=lk(t,{relative:o});return T.useCallback(c=>{if(ZF(c,n)){c.preventDefault();let h=r!==void 0?r:ds(l)===ds(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function hk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=hk(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function oi(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=hk(t))&&(r&&(r+=" "),r+=e);return r}function Gn(){return Gn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gn.apply(this,arguments)}function dk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _l(t){return typeof t=="number"&&!isNaN(t)}function sa(t){return typeof t=="boolean"}function Ri(t){return typeof t=="string"}function Jt(t){return typeof t=="function"}function lc(t){return Ri(t)||Jt(t)?t:null}function Lm(t){return t===0||t}function a4(t,e){return t===!1||_l(t)&&t>0?t:e}var fk=!!(typeof window<"u"&&window.document&&window.document.createElement);function zf(t){return T.isValidElement(t)||Ri(t)||Jt(t)||_l(t)}var pk={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Br={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function l4(t,e,n){n===void 0&&(n=300);var r=t.scrollHeight,i=t.style;requestAnimationFrame(function(){i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(function(){i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function u4(t){var e=t.enter,n=t.exit,r=t.appendPosition,i=r===void 0?!1:r,s=t.collapse,o=s===void 0?!0:s,a=t.collapseDuration,l=a===void 0?300:a;return function(c){var h=c.children,d=c.position,f=c.preventExitTransition,m=c.done,v=c.nodeRef,E=c.isIn,y=i?e+"--"+d:e,p=i?n+"--"+d:n,w=T.useRef(),g=T.useRef(0);T.useLayoutEffect(function(){S()},[]),T.useEffect(function(){E||(f?C():A())},[E]);function S(){var j=v.current;w.current=j.className,j.className+=" "+y,j.addEventListener("animationend",x)}function x(j){if(j.target===v.current){var M=v.current;M.removeEventListener("animationend",x),g.current===0&&(M.className=w.current)}}function A(){g.current=1;var j=v.current;j.className+=" "+p,j.addEventListener("animationend",C)}function C(){var j=v.current;j.removeEventListener("animationend",C),o?l4(j,m,l):m()}return Ye.createElement(Ye.Fragment,null,h)}}var Vn={list:new Map,emitQueue:new Map,on:function(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off:function(e,n){if(n){var r=this.list.get(e).filter(function(i){return i!==n});return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit:function(e){var n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var n=this,r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];this.list.has(e)&&this.list.get(e).forEach(function(o){var a=setTimeout(function(){o.apply(void 0,i)},0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)})}};function Bs(t,e){e===void 0&&(e=!1);var n=T.useRef(t);return T.useEffect(function(){e&&(n.current=t)}),n.current}function c4(t,e){switch(e.type){case 0:return[].concat(t,[e.toastId]).filter(function(n){return n!==e.staleId});case 1:return Lm(e.toastId)?t.filter(function(n){return n!==e.toastId}):[]}}var h4=["delay","staleId"];function d4(t){var e=T.useReducer(function(g){return g+1},0),n=e[1],r=T.useReducer(c4,[]),i=r[0],s=r[1],o=T.useRef(null),a=Bs(0),l=Bs([]),u=Bs({}),c=Bs({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:h,getToast:function(S){return u[S]||null}});T.useEffect(function(){return c.containerId=t.containerId,Vn.cancelEmit(3).on(0,E).on(1,function(g){return o.current&&f(g)}).on(5,d).emit(2,c),function(){return Vn.emit(3,c)}},[]),T.useEffect(function(){c.isToastActive=h,c.displayedToast=i.length,Vn.emit(4,i.length,t.containerId)},[i]),T.useEffect(function(){c.props=t});function h(g){return i.indexOf(g)!==-1}function d(g){var S=g.containerId,x=c.props.limit;x&&(!S||c.containerId===S)&&(a-=l.length,l=[])}function f(g){s({type:1,toastId:g})}function m(){var g=l.shift(),S=g.toastContent,x=g.toastProps,A=g.staleId;y(S,x,A)}function v(g){var S=g.containerId,x=g.toastId,A=g.updateId;return!!(!o.current||c.props.enableMultiContainer&&S!==c.props.containerId||u[x]&&A==null)}function E(g,S){var x=S.delay,A=S.staleId,C=dk(S,h4);if(!(!zf(g)||v(C))){var j=C.toastId,M=C.updateId,oe=C.data,z=c.props,ye=function(){return f(j)},_e=C.updateId==null;_e&&a++;var ne={toastId:j,updateId:M,isLoading:C.isLoading,theme:C.theme||z.theme,icon:C.icon||z.icon,isIn:!1,key:C.key||c.toastKey++,type:C.type,closeToast:ye,closeButton:C.closeButton,rtl:z.rtl,position:C.position||z.position,transition:C.transition||z.transition,className:lc(C.className||z.toastClassName),bodyClassName:lc(C.bodyClassName||z.bodyClassName),style:C.style||z.toastStyle,bodyStyle:C.bodyStyle||z.bodyStyle,onClick:C.onClick||z.onClick,pauseOnHover:sa(C.pauseOnHover)?C.pauseOnHover:z.pauseOnHover,pauseOnFocusLoss:sa(C.pauseOnFocusLoss)?C.pauseOnFocusLoss:z.pauseOnFocusLoss,draggable:sa(C.draggable)?C.draggable:z.draggable,draggablePercent:_l(C.draggablePercent)?C.draggablePercent:z.draggablePercent,draggableDirection:C.draggableDirection||z.draggableDirection,closeOnClick:sa(C.closeOnClick)?C.closeOnClick:z.closeOnClick,progressClassName:lc(C.progressClassName||z.progressClassName),progressStyle:C.progressStyle||z.progressStyle,autoClose:C.isLoading?!1:a4(C.autoClose,z.autoClose),hideProgressBar:sa(C.hideProgressBar)?C.hideProgressBar:z.hideProgressBar,progress:C.progress,role:Ri(C.role)?C.role:z.role,deleteToast:function(){p(j)}};Jt(C.onOpen)&&(ne.onOpen=C.onOpen),Jt(C.onClose)&&(ne.onClose=C.onClose),ne.draggableDirection==="y"&&ne.draggablePercent===80&&(ne.draggablePercent*=1.5);var de=z.closeButton;C.closeButton===!1||zf(C.closeButton)?de=C.closeButton:C.closeButton===!0&&(de=zf(z.closeButton)?z.closeButton:!0),ne.closeButton=de;var fe=g;T.isValidElement(g)&&!Ri(g.type)?fe=T.cloneElement(g,{closeToast:ye,toastProps:ne,data:oe}):Jt(g)&&(fe=g({closeToast:ye,toastProps:ne,data:oe})),z.limit&&z.limit>0&&a>z.limit&&_e?l.push({toastContent:fe,toastProps:ne,staleId:A}):_l(x)&&x>0?setTimeout(function(){y(fe,ne,A)},x):y(fe,ne,A)}}function y(g,S,x){var A=S.toastId;x&&delete u[x],u[A]={content:g,props:S},s({type:0,toastId:A,staleId:x})}function p(g){delete u[g];var S=l.length;if(a=Lm(g)?a-1:a-c.displayedToast,a<0&&(a=0),S>0){var x=Lm(g)?1:c.props.limit;if(S===1||x===1)c.displayedToast++,m();else{var A=x>S?S:x;c.displayedToast=A;for(var C=0;C<A;C++)m()}}else n()}function w(g){for(var S={},x=t.newestOnTop?Object.keys(u).reverse():Object.keys(u),A=0;A<x.length;A++){var C=u[x[A]],j=C.props.position;S[j]||(S[j]=[]),S[j].push(C)}return Object.keys(S).map(function(M){return g(M,S[M])})}return{getToastToRender:w,collection:u,containerRef:o,isToastActive:h}}function P1(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function O1(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function f4(t){var e=T.useState(!0),n=e[0],r=e[1],i=T.useState(!1),s=i[0],o=i[1],a=T.useRef(null),l=Bs({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),u=Bs(t,!0),c=t.autoClose,h=t.pauseOnHover,d=t.closeToast,f=t.onClick,m=t.closeOnClick;T.useEffect(function(){return Jt(t.onOpen)&&t.onOpen(T.isValidElement(t.children)&&t.children.props),function(){Jt(u.onClose)&&u.onClose(T.isValidElement(u.children)&&u.children.props)}},[]),T.useEffect(function(){return t.draggable&&S(),function(){t.draggable&&x()}},[t.draggable]),T.useEffect(function(){return t.pauseOnFocusLoss&&w(),function(){t.pauseOnFocusLoss&&g()}},[t.pauseOnFocusLoss]);function v(M){if(t.draggable){var oe=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=oe.getBoundingClientRect(),oe.style.transition="",l.x=P1(M.nativeEvent),l.y=O1(M.nativeEvent),t.draggableDirection==="x"?(l.start=l.x,l.removalDistance=oe.offsetWidth*(t.draggablePercent/100)):(l.start=l.y,l.removalDistance=oe.offsetHeight*(t.draggablePercent/100))}}function E(){if(l.boundingRect){var M=l.boundingRect,oe=M.top,z=M.bottom,ye=M.left,_e=M.right;t.pauseOnHover&&l.x>=ye&&l.x<=_e&&l.y>=oe&&l.y<=z?p():y()}}function y(){r(!0)}function p(){r(!1)}function w(){document.hasFocus()||p(),window.addEventListener("focus",y),window.addEventListener("blur",p)}function g(){window.removeEventListener("focus",y),window.removeEventListener("blur",p)}function S(){document.addEventListener("mousemove",A),document.addEventListener("mouseup",C),document.addEventListener("touchmove",A),document.addEventListener("touchend",C)}function x(){document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",C)}function A(M){if(l.canDrag){M.preventDefault();var oe=a.current;n&&p(),l.x=P1(M),l.y=O1(M),t.draggableDirection==="x"?l.delta=l.x-l.start:l.delta=l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),oe.style.transform="translate"+t.draggableDirection+"("+l.delta+"px)",oe.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance))}}function C(){var M=a.current;if(l.canDrag){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance){o(!0),t.closeToast();return}M.style.transition="transform 0.2s, opacity 0.2s",M.style.transform="translate"+t.draggableDirection+"(0)",M.style.opacity="1"}}var j={onMouseDown:v,onTouchStart:v,onMouseUp:E,onTouchEnd:E};return c&&h&&(j.onMouseEnter=p,j.onMouseLeave=y),m&&(j.onClick=function(M){f&&f(M),l.canCloseOnClick&&d()}),{playToast:y,pauseToast:p,isRunning:n,preventExitTransition:s,toastRef:a,eventHandlers:j}}function mk(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,i=r===void 0?"close":r;return T.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(o){o.stopPropagation(),e(o)},"aria-label":i},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function gk(t){var e,n,r=t.delay,i=t.isRunning,s=t.closeToast,o=t.type,a=t.hide,l=t.className,u=t.style,c=t.controlledProgress,h=t.progress,d=t.rtl,f=t.isIn,m=t.theme,v=Gn({},u,{animationDuration:r+"ms",animationPlayState:i?"running":"paused",opacity:a?0:1});c&&(v.transform="scaleX("+h+")");var E=oi("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+m,"Toastify__progress-bar--"+o,(e={},e["Toastify__progress-bar--rtl"]=d,e)),y=Jt(l)?l({rtl:d,type:o,defaultClassName:E}):oi(E,l),p=(n={},n[c&&h>=1?"onTransitionEnd":"onAnimationEnd"]=c&&h<1?null:function(){f&&s()},n);return T.createElement("div",Object.assign({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:y,style:v},p))}gk.defaultProps={type:Br.DEFAULT,hide:!1};var p4=["theme","type"],vd=function(e){var n=e.theme,r=e.type,i=dk(e,p4);return Ye.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:n==="colored"?"currentColor":"var(--toastify-icon-color-"+r+")"},i))};function m4(t){return Ye.createElement(vd,Object.assign({},t),Ye.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function g4(t){return Ye.createElement(vd,Object.assign({},t),Ye.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function y4(t){return Ye.createElement(vd,Object.assign({},t),Ye.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function v4(t){return Ye.createElement(vd,Object.assign({},t),Ye.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function w4(){return Ye.createElement("div",{className:"Toastify__spinner"})}var D1={info:g4,warning:m4,success:y4,error:v4,spinner:w4},E4=function(e){var n,r,i=f4(e),s=i.isRunning,o=i.preventExitTransition,a=i.toastRef,l=i.eventHandlers,u=e.closeButton,c=e.children,h=e.autoClose,d=e.onClick,f=e.type,m=e.hideProgressBar,v=e.closeToast,E=e.transition,y=e.position,p=e.className,w=e.style,g=e.bodyClassName,S=e.bodyStyle,x=e.progressClassName,A=e.progressStyle,C=e.updateId,j=e.role,M=e.progress,oe=e.rtl,z=e.toastId,ye=e.deleteToast,_e=e.isIn,ne=e.isLoading,de=e.icon,fe=e.theme,P=oi("Toastify__toast","Toastify__toast-theme--"+fe,"Toastify__toast--"+f,(n={},n["Toastify__toast--rtl"]=oe,n)),H=Jt(p)?p({rtl:oe,position:y,type:f,defaultClassName:P}):oi(P,p),Q=!!M,ve=D1[f],U={theme:fe,type:f},B=ve&&ve(U);de===!1?B=void 0:Jt(de)?B=de(U):T.isValidElement(de)?B=T.cloneElement(de,U):Ri(de)?B=de:ne&&(B=D1.spinner());function $(Y){if(Y){var I={closeToast:v,type:f,theme:fe};if(Jt(Y))return Y(I);if(T.isValidElement(Y))return T.cloneElement(Y,I)}}return T.createElement(E,{isIn:_e,done:ye,position:y,preventExitTransition:o,nodeRef:a},T.createElement("div",Object.assign({id:z,onClick:d,className:H},l,{style:w,ref:a}),T.createElement("div",Object.assign({},_e&&{role:j},{className:Jt(g)?g({type:f}):oi("Toastify__toast-body",g),style:S}),B&&T.createElement("div",{className:oi("Toastify__toast-icon",(r={},r["Toastify--animate-icon Toastify__zoom-enter"]=!ne,r))},B),T.createElement("div",null,c)),$(u),(h||Q)&&T.createElement(gk,Object.assign({},C&&!Q?{key:"pb-"+C}:{},{rtl:oe,theme:fe,delay:h,isRunning:s,isIn:_e,closeToast:v,hide:m,type:f,style:A,className:x,controlledProgress:Q,progress:M}))))},_4=u4({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),eu=function(e){var n=d4(e),r=n.getToastToRender,i=n.containerRef,s=n.isToastActive,o=e.className,a=e.style,l=e.rtl,u=e.containerId;function c(h){var d,f=oi("Toastify__toast-container","Toastify__toast-container--"+h,(d={},d["Toastify__toast-container--rtl"]=l,d));return Jt(o)?o({position:h,rtl:l,defaultClassName:f}):oi(f,lc(o))}return T.createElement("div",{ref:i,className:"Toastify",id:u},r(function(h,d){var f=d.length===0?Gn({},a,{pointerEvents:"none"}):Gn({},a);return T.createElement("div",{className:c(h),style:f,key:"container-"+h},d.map(function(m){var v=m.content,E=m.props;return T.createElement(E4,Object.assign({},E,{isIn:s(E.toastId),key:"toast-"+E.key,closeButton:E.closeButton===!0?mk:E.closeButton}),v)}))}))};eu.defaultProps={position:pk.TOP_RIGHT,transition:_4,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:mk,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var no=new Map,Mm,La,yk,$m=[],Fm=!1;function S4(){return no.size>0}function T4(t,e){var n=e.containerId,r=no.get(n||Mm);return r?r.getToast(t):null}function vk(){return Math.random().toString(36).substr(2,9)}function C4(t){return t&&(Ri(t.toastId)||_l(t.toastId))?t.toastId:vk()}function tu(t,e){return S4()?Vn.emit(0,t,e):($m.push({content:t,options:e}),Fm&&fk&&(Fm=!1,La=document.createElement("div"),document.body.appendChild(La),qg.render(T.createElement(eu,Object.assign({},yk)),La))),e.toastId}function wd(t,e){return Gn({},e,{type:e&&e.type||t,toastId:C4(e)})}var Ed=function(e){return function(n,r){return tu(n,wd(e,r))}},Ce=function(e,n){return tu(e,wd(Br.DEFAULT,n))};Ce.loading=function(t,e){return tu(t,wd(Br.DEFAULT,Gn({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))};function I4(t,e,n){var r=e.pending,i=e.error,s=e.success,o=Ri(r)?Ce.loading(r,n):Ce.loading(r.render,Gn({},n,r)),a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=function(c,h,d){var f=Ri(h)?{render:h}:h;return Ce.update(o,Gn({type:c},a,n,f,{data:d})),d};return t.then(function(u){return l("success",s,u)}).catch(function(u){return l("error",i,u)}),t}Ce.promise=I4;Ce.success=Ed(Br.SUCCESS);Ce.info=Ed(Br.INFO);Ce.error=Ed(Br.ERROR);Ce.warning=Ed(Br.WARNING);Ce.warn=Ce.warning;Ce.dark=function(t,e){return tu(t,wd(Br.DEFAULT,Gn({theme:"dark"},e)))};Ce.dismiss=function(t){return Vn.emit(1,t)};Ce.clearWaitingQueue=function(t){return t===void 0&&(t={}),Vn.emit(5,t)};Ce.isActive=function(t){var e=!1;return no.forEach(function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e};Ce.update=function(t,e){e===void 0&&(e={}),setTimeout(function(){var n=T4(t,e);if(n){var r=n.props,i=n.content,s=Gn({},r,e,{toastId:e.toastId||t,updateId:vk()});s.toastId!==t&&(s.staleId=t);var o=s.render||i;delete s.render,tu(o,s)}},0)};Ce.done=function(t){Ce.update(t,{progress:1})};Ce.onChange=function(t){return Jt(t)&&Vn.on(4,t),function(){Jt(t)&&Vn.off(4,t)}};Ce.configure=function(t){t===void 0&&(t={}),Fm=!0,yk=t};Ce.POSITION=pk;Ce.TYPE=Br;Vn.on(2,function(t){Mm=t.containerId||t,no.set(Mm,t),$m.forEach(function(e){Vn.emit(0,e.content,e.options)}),$m=[]}).on(3,function(t){no.delete(t.containerId||t),no.size===0&&Vn.off(0).off(1).off(5),fk&&La&&document.body.removeChild(La)});const Bo=T.createContext({});function k4({children:t}){const{theme:e}=T.useContext(Qn),[n,r]=T.useState(null);T.useState(!1);const[i,s]=T.useState(!1);async function o(c,h){s(!0),await uL(f1,c,h).then(async d=>{let f=d.user.uid;const m=vo(hs,"users",f),v=await dD(m);let E={uid:f,nome:v.data().nome,email:d.user.email,imgUrl:v.data().imgUrl,theme:e,logado:!0};r(E),u(E),s(!1)})}async function a(c,h,d){s(!0),await lL(f1,h,d).then(async f=>{let m=f.user.uid;await fD(vo(hs,"users",m),{nome:c,imgUrl:null}).then(v=>{let E={nome:c,email:f.user.email,imgUrl:null,logado:!0,uid:m,theme:"light"};r(E),u(E),s(!1)}).catch(v=>{console.log(v)})})}function l(){Ce.error("Saiu!"),r({logado:!1}),localStorage.clear("@userStorage")}function u(c){localStorage.setItem("@userStorage",JSON.stringify(c))}return _.jsxs(Bo.Provider,{value:{signed:!!n,user:n,signIn:o,signUp:a,loadingAuth:i,setLoadingAuth:s,LogOut:l,UserStorage:u},children:[_.jsx(eu,{}),t]})}var wk={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It=typeof Symbol=="function"&&Symbol.for,dv=It?Symbol.for("react.element"):60103,fv=It?Symbol.for("react.portal"):60106,_d=It?Symbol.for("react.fragment"):60107,Sd=It?Symbol.for("react.strict_mode"):60108,Td=It?Symbol.for("react.profiler"):60114,Cd=It?Symbol.for("react.provider"):60109,Id=It?Symbol.for("react.context"):60110,pv=It?Symbol.for("react.async_mode"):60111,kd=It?Symbol.for("react.concurrent_mode"):60111,xd=It?Symbol.for("react.forward_ref"):60112,Rd=It?Symbol.for("react.suspense"):60113,x4=It?Symbol.for("react.suspense_list"):60120,Ad=It?Symbol.for("react.memo"):60115,bd=It?Symbol.for("react.lazy"):60116,R4=It?Symbol.for("react.block"):60121,A4=It?Symbol.for("react.fundamental"):60117,b4=It?Symbol.for("react.responder"):60118,N4=It?Symbol.for("react.scope"):60119;function Sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case dv:switch(t=t.type,t){case pv:case kd:case _d:case Td:case Sd:case Rd:return t;default:switch(t=t&&t.$$typeof,t){case Id:case xd:case bd:case Ad:case Cd:return t;default:return e}}case fv:return e}}}function Ek(t){return Sn(t)===kd}Le.AsyncMode=pv;Le.ConcurrentMode=kd;Le.ContextConsumer=Id;Le.ContextProvider=Cd;Le.Element=dv;Le.ForwardRef=xd;Le.Fragment=_d;Le.Lazy=bd;Le.Memo=Ad;Le.Portal=fv;Le.Profiler=Td;Le.StrictMode=Sd;Le.Suspense=Rd;Le.isAsyncMode=function(t){return Ek(t)||Sn(t)===pv};Le.isConcurrentMode=Ek;Le.isContextConsumer=function(t){return Sn(t)===Id};Le.isContextProvider=function(t){return Sn(t)===Cd};Le.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===dv};Le.isForwardRef=function(t){return Sn(t)===xd};Le.isFragment=function(t){return Sn(t)===_d};Le.isLazy=function(t){return Sn(t)===bd};Le.isMemo=function(t){return Sn(t)===Ad};Le.isPortal=function(t){return Sn(t)===fv};Le.isProfiler=function(t){return Sn(t)===Td};Le.isStrictMode=function(t){return Sn(t)===Sd};Le.isSuspense=function(t){return Sn(t)===Rd};Le.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===_d||t===kd||t===Td||t===Sd||t===Rd||t===x4||typeof t=="object"&&t!==null&&(t.$$typeof===bd||t.$$typeof===Ad||t.$$typeof===Cd||t.$$typeof===Id||t.$$typeof===xd||t.$$typeof===A4||t.$$typeof===b4||t.$$typeof===N4||t.$$typeof===R4)};Le.typeOf=Sn;wk.exports=Le;var mv=wk.exports;function P4(t){function e(U,B,$,Y,I){for(var ge=0,F=0,He=0,xe=0,Re,ue,dt=0,Ot=0,pe,ft=pe=Re=0,Se=0,Ze=0,mr=0,Me=0,Li=$.length,zr=Li-1,nn,Z="",qe="",Vr="",ws="",Tn;Se<Li;){if(ue=$.charCodeAt(Se),Se===zr&&F+xe+He+ge!==0&&(F!==0&&(ue=F===47?10:47),xe=He=ge=0,Li++,zr++),F+xe+He+ge===0){if(Se===zr&&(0<Ze&&(Z=Z.replace(d,"")),0<Z.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:Z+=$.charAt(Se)}ue=59}switch(ue){case 123:for(Z=Z.trim(),Re=Z.charCodeAt(0),pe=1,Me=++Se;Se<Li;){switch(ue=$.charCodeAt(Se)){case 123:pe++;break;case 125:pe--;break;case 47:switch(ue=$.charCodeAt(Se+1)){case 42:case 47:e:{for(ft=Se+1;ft<zr;++ft)switch($.charCodeAt(ft)){case 47:if(ue===42&&$.charCodeAt(ft-1)===42&&Se+2!==ft){Se=ft+1;break e}break;case 10:if(ue===47){Se=ft+1;break e}}Se=ft}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;Se++<zr&&$.charCodeAt(Se)!==ue;);}if(pe===0)break;Se++}switch(pe=$.substring(Me,Se),Re===0&&(Re=(Z=Z.replace(h,"").trim()).charCodeAt(0)),Re){case 64:switch(0<Ze&&(Z=Z.replace(d,"")),ue=Z.charCodeAt(1),ue){case 100:case 109:case 115:case 45:Ze=B;break;default:Ze=de}if(pe=e(B,Ze,pe,ue,I+1),Me=pe.length,0<P&&(Ze=n(de,Z,mr),Tn=a(3,pe,Ze,B,ye,z,Me,ue,I,Y),Z=Ze.join(""),Tn!==void 0&&(Me=(pe=Tn.trim()).length)===0&&(ue=0,pe="")),0<Me)switch(ue){case 115:Z=Z.replace(x,o);case 100:case 109:case 45:pe=Z+"{"+pe+"}";break;case 107:Z=Z.replace(p,"$1 $2"),pe=Z+"{"+pe+"}",pe=ne===1||ne===2&&s("@"+pe,3)?"@-webkit-"+pe+"@"+pe:"@"+pe;break;default:pe=Z+pe,Y===112&&(pe=(qe+=pe,""))}else pe="";break;default:pe=e(B,n(B,Z,mr),pe,Y,I+1)}Vr+=pe,pe=mr=Ze=ft=Re=0,Z="",ue=$.charCodeAt(++Se);break;case 125:case 59:if(Z=(0<Ze?Z.replace(d,""):Z).trim(),1<(Me=Z.length))switch(ft===0&&(Re=Z.charCodeAt(0),Re===45||96<Re&&123>Re)&&(Me=(Z=Z.replace(" ",":")).length),0<P&&(Tn=a(1,Z,B,U,ye,z,qe.length,Y,I,Y))!==void 0&&(Me=(Z=Tn.trim()).length)===0&&(Z="\0\0"),Re=Z.charCodeAt(0),ue=Z.charCodeAt(1),Re){case 0:break;case 64:if(ue===105||ue===99){ws+=Z+$.charAt(Se);break}default:Z.charCodeAt(Me-1)!==58&&(qe+=i(Z,Re,ue,Z.charCodeAt(2)))}mr=Ze=ft=Re=0,Z="",ue=$.charCodeAt(++Se)}}switch(ue){case 13:case 10:F===47?F=0:1+Re===0&&Y!==107&&0<Z.length&&(Ze=1,Z+="\0"),0<P*Q&&a(0,Z,B,U,ye,z,qe.length,Y,I,Y),z=1,ye++;break;case 59:case 125:if(F+xe+He+ge===0){z++;break}default:switch(z++,nn=$.charAt(Se),ue){case 9:case 32:if(xe+ge+F===0)switch(dt){case 44:case 58:case 9:case 32:nn="";break;default:ue!==32&&(nn=" ")}break;case 0:nn="\\0";break;case 12:nn="\\f";break;case 11:nn="\\v";break;case 38:xe+F+ge===0&&(Ze=mr=1,nn="\f"+nn);break;case 108:if(xe+F+ge+_e===0&&0<ft)switch(Se-ft){case 2:dt===112&&$.charCodeAt(Se-3)===58&&(_e=dt);case 8:Ot===111&&(_e=Ot)}break;case 58:xe+F+ge===0&&(ft=Se);break;case 44:F+He+xe+ge===0&&(Ze=1,nn+="\r");break;case 34:case 39:F===0&&(xe=xe===ue?0:xe===0?ue:xe);break;case 91:xe+F+He===0&&ge++;break;case 93:xe+F+He===0&&ge--;break;case 41:xe+F+ge===0&&He--;break;case 40:if(xe+F+ge===0){if(Re===0)switch(2*dt+3*Ot){case 533:break;default:Re=1}He++}break;case 64:F+He+xe+ge+ft+pe===0&&(pe=1);break;case 42:case 47:if(!(0<xe+ge+He))switch(F){case 0:switch(2*ue+3*$.charCodeAt(Se+1)){case 235:F=47;break;case 220:Me=Se,F=42}break;case 42:ue===47&&dt===42&&Me+2!==Se&&($.charCodeAt(Me+2)===33&&(qe+=$.substring(Me,Se+1)),nn="",F=0)}}F===0&&(Z+=nn)}Ot=dt,dt=ue,Se++}if(Me=qe.length,0<Me){if(Ze=B,0<P&&(Tn=a(2,qe,Ze,U,ye,z,Me,Y,I,Y),Tn!==void 0&&(qe=Tn).length===0))return ws+qe+Vr;if(qe=Ze.join(",")+"{"+qe+"}",ne*_e!==0){switch(ne!==2||s(qe,2)||(_e=0),_e){case 111:qe=qe.replace(g,":-moz-$1")+qe;break;case 112:qe=qe.replace(w,"::-webkit-input-$1")+qe.replace(w,"::-moz-$1")+qe.replace(w,":-ms-input-$1")+qe}_e=0}}return ws+qe+Vr}function n(U,B,$){var Y=B.trim().split(E);B=Y;var I=Y.length,ge=U.length;switch(ge){case 0:case 1:var F=0;for(U=ge===0?"":U[0]+" ";F<I;++F)B[F]=r(U,B[F],$).trim();break;default:var He=F=0;for(B=[];F<I;++F)for(var xe=0;xe<ge;++xe)B[He++]=r(U[xe]+" ",Y[F],$).trim()}return B}function r(U,B,$){var Y=B.charCodeAt(0);switch(33>Y&&(Y=(B=B.trim()).charCodeAt(0)),Y){case 38:return B.replace(y,"$1"+U.trim());case 58:return U.trim()+B.replace(y,"$1"+U.trim());default:if(0<1*$&&0<B.indexOf("\f"))return B.replace(y,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+B}function i(U,B,$,Y){var I=U+";",ge=2*B+3*$+4*Y;if(ge===944){U=I.indexOf(":",9)+1;var F=I.substring(U,I.length-1).trim();return F=I.substring(0,U).trim()+F+";",ne===1||ne===2&&s(F,1)?"-webkit-"+F+F:F}if(ne===0||ne===2&&!s(I,1))return I;switch(ge){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(oe,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return F=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+I+"-ms-flex-pack"+F+I;case 1005:return m.test(I)?I.replace(f,":-webkit-")+I.replace(f,":-moz-")+I:I;case 1e3:switch(F=I.substring(13).trim(),B=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(B)){case 226:F=I.replace(S,"tb");break;case 232:F=I.replace(S,"tb-rl");break;case 220:F=I.replace(S,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+F+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(B=(I=U).length-10,F=(I.charCodeAt(B)===33?I.substring(0,B):I).substring(U.indexOf(":",7)+1).trim(),ge=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:I=I.replace(F,"-webkit-"+F)+";"+I;break;case 207:case 102:I=I.replace(F,"-webkit-"+(102<ge?"inline-":"")+"box")+";"+I.replace(F,"-webkit-"+F)+";"+I.replace(F,"-ms-"+F+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return F=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+F+"-ms-flex-"+F+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(C,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(C,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(M.test(U)===!0)return(F=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),B,$,Y).replace(":fill-available",":stretch"):I.replace(F,"-webkit-"+F)+I.replace(F,"-moz-"+F.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,$+Y===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+I}return I}function s(U,B){var $=U.indexOf(B===1?":":"{"),Y=U.substring(0,B!==3?$:10);return $=U.substring($+1,U.length-1),H(B!==2?Y:Y.replace(j,"$1"),$,B)}function o(U,B){var $=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return $!==B+";"?$.replace(A," or ($1)").substring(4):"("+B+")"}function a(U,B,$,Y,I,ge,F,He,xe,Re){for(var ue=0,dt=B,Ot;ue<P;++ue)switch(Ot=fe[ue].call(c,U,dt,$,Y,I,ge,F,He,xe,Re)){case void 0:case!1:case!0:case null:break;default:dt=Ot}if(dt!==B)return dt}function l(U){switch(U){case void 0:case null:P=fe.length=0;break;default:if(typeof U=="function")fe[P++]=U;else if(typeof U=="object")for(var B=0,$=U.length;B<$;++B)l(U[B]);else Q=!!U|0}return l}function u(U){return U=U.prefix,U!==void 0&&(H=null,U?typeof U!="function"?ne=1:(ne=2,H=U):ne=0),u}function c(U,B){var $=U;if(33>$.charCodeAt(0)&&($=$.trim()),ve=$,$=[ve],0<P){var Y=a(-1,B,$,$,ye,z,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(B=Y)}var I=e(de,$,B,0,0);return 0<P&&(Y=a(-2,I,$,$,ye,z,I.length,0,0,0),Y!==void 0&&(I=Y)),ve="",_e=0,z=ye=1,I}var h=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,m=/zoo|gra/,v=/([,: ])(transform)/g,E=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,g=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,C=/-self|flex-/g,j=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,z=1,ye=1,_e=0,ne=1,de=[],fe=[],P=0,H=null,Q=0,ve="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var O4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function D4(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var L4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,L1=D4(function(t){return L4.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),gv=mv,M4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_k={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yv={};yv[gv.ForwardRef]=F4;yv[gv.Memo]=_k;function M1(t){return gv.isMemo(t)?_k:yv[t.$$typeof]||M4}var U4=Object.defineProperty,j4=Object.getOwnPropertyNames,$1=Object.getOwnPropertySymbols,B4=Object.getOwnPropertyDescriptor,z4=Object.getPrototypeOf,F1=Object.prototype;function Sk(t,e,n){if(typeof e!="string"){if(F1){var r=z4(e);r&&r!==F1&&Sk(t,r,n)}var i=j4(e);$1&&(i=i.concat($1(e)));for(var s=M1(t),o=M1(e),a=0;a<i.length;++a){var l=i[a];if(!$4[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=B4(e,l);try{U4(t,l,u)}catch{}}}}return t}var V4=Sk;const H4=Ym(V4);function Ir(){return(Ir=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var U1=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Um=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!mv.typeOf(t)},ch=Object.freeze([]),Ei=Object.freeze({});function Sl(t){return typeof t=="function"}function j1(t){return t.displayName||t.name||"Component"}function vv(t){return t&&typeof t.styledComponentId=="string"}var _o=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",wv=typeof window<"u"&&"HTMLElement"in window,q4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function nu(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var W4=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&nu(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),uc=new Map,hh=new Map,Ma=1,Uu=function(t){if(uc.has(t))return uc.get(t);for(;hh.has(Ma);)Ma++;var e=Ma++;return uc.set(t,e),hh.set(e,t),e},K4=function(t){return hh.get(t)},G4=function(t,e){e>=Ma&&(Ma=e+1),uc.set(t,e),hh.set(e,t)},Q4="style["+_o+'][data-styled-version="5.3.10"]',Y4=new RegExp("^"+_o+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),X4=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},J4=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Y4);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(G4(u,l),X4(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},Z4=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Tk=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(_o))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(_o,"active"),r.setAttribute("data-styled-version","5.3.10");var o=Z4();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eU=function(){function t(n){var r=this.element=Tk(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}nu(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),tU=function(){function t(n){var r=this.element=Tk(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),nU=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),B1=wv,rU={isServer:!wv,useCSSOMInjection:!q4},Ck=function(){function t(n,r,i){n===void 0&&(n=Ei),r===void 0&&(r={}),this.options=Ir({},rU,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&wv&&B1&&(B1=!1,function(s){for(var o=document.querySelectorAll(Q4),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(_o)!=="active"&&(J4(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Uu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Ir({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new nU(o):s?new eU(o):new tU(o),new W4(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Uu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Uu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Uu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=K4(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=_o+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),iU=/(a)(d)/gi,z1=function(t){return String.fromCharCode(t+(t>25?39:97))};function jm(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=z1(e%52)+n;return(z1(e%52)+n).replace(iU,"$1-$2")}var zs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Ik=function(t){return zs(5381,t)};function sU(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Sl(n)&&!vv(n))return!1}return!0}var oU=Ik("5.3.10"),aU=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sU(e),this.componentId=n,this.baseHash=zs(oU,n),this.baseStyle=r,Ck.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=So(this.rules,e,n,r).join(""),a=jm(zs(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=zs(this.baseHash,r.hash),h="",d=0;d<u;d++){var f=this.rules[d];if(typeof f=="string")h+=f;else if(f){var m=So(f,e,n,r),v=Array.isArray(m)?m.join(""):m;c=zs(c,v+d),h+=v}}if(h){var E=jm(c>>>0);if(!n.hasNameForId(i,E)){var y=r(h,"."+E,void 0,i);n.insertRules(i,E,y)}s.push(E)}}return s.join(" ")},t}(),lU=/^\s*\/\/.*$/gm,uU=[":","[",".","#"];function cU(t){var e,n,r,i,s=t===void 0?Ei:t,o=s.options,a=o===void 0?Ei:o,l=s.plugins,u=l===void 0?ch:l,c=new P4(a),h=[],d=function(v){function E(y){if(y)try{v(y+"}")}catch{}}return function(y,p,w,g,S,x,A,C,j,M){switch(y){case 1:if(j===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(C===0)return p+"/*|*/";break;case 3:switch(C){case 102:case 112:return v(w[0]+p),"";default:return p+(M===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(E)}}}(function(v){h.push(v)}),f=function(v,E,y){return E===0&&uU.indexOf(y[n.length])!==-1||y.match(i)?v:"."+e};function m(v,E,y,p){p===void 0&&(p="&");var w=v.replace(lU,""),g=E&&y?y+" "+E+" { "+w+" }":w;return e=p,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(y||!E?"":E,g)}return c.use([].concat(u,[function(v,E,y){v===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,f))},d,function(v){if(v===-2){var E=h;return h=[],E}}])),m.hash=u.length?u.reduce(function(v,E){return E.name||nu(15),zs(v,E.name)},5381).toString():"",m}var kk=Ye.createContext();kk.Consumer;var xk=Ye.createContext(),hU=(xk.Consumer,new Ck),Bm=cU();function dU(){return T.useContext(kk)||hU}function fU(){return T.useContext(xk)||Bm}var pU=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Bm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return nu(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Bm),this.name+e.hash},t}(),mU=/([A-Z])/,gU=/([A-Z])/g,yU=/^ms-/,vU=function(t){return"-"+t.toLowerCase()};function V1(t){return mU.test(t)?t.replace(gU,vU).replace(yU,"-ms-"):t}var H1=function(t){return t==null||t===!1||t===""};function So(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=So(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(H1(t))return"";if(vv(t))return"."+t.styledComponentId;if(Sl(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return So(l,e,n,r)}var u;return t instanceof pU?n?(t.inject(n,r),t.getName(r)):t:Um(t)?function c(h,d){var f,m,v=[];for(var E in h)h.hasOwnProperty(E)&&!H1(h[E])&&(Array.isArray(h[E])&&h[E].isCss||Sl(h[E])?v.push(V1(E)+":",h[E],";"):Um(h[E])?v.push.apply(v,c(h[E],E)):v.push(V1(E)+": "+(f=E,(m=h[E])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||f in O4||f.startsWith("--")?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var q1=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function wU(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Sl(t)||Um(t)?q1(So(U1(ch,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:q1(So(U1(t,n)))}var EU=function(t,e,n){return n===void 0&&(n=Ei),t.theme!==n.theme&&t.theme||e||n.theme},_U=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SU=/(^-|-$)/g;function Vf(t){return t.replace(_U,"-").replace(SU,"")}var TU=function(t){return jm(Ik(t)>>>0)};function ju(t){return typeof t=="string"&&!0}var zm=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},CU=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function IU(t,e,n){var r=t[n];zm(e)&&zm(r)?Rk(r,e):t[n]=e}function Rk(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(zm(o))for(var a in o)CU(a)&&IU(t,o[a],a)}return t}var Ak=Ye.createContext();Ak.Consumer;var Hf={};function bk(t,e,n){var r=vv(t),i=!ju(t),s=e.attrs,o=s===void 0?ch:s,a=e.componentId,l=a===void 0?function(p,w){var g=typeof p!="string"?"sc":Vf(p);Hf[g]=(Hf[g]||0)+1;var S=g+"-"+TU("5.3.10"+g+Hf[g]);return w?w+"-"+S:S}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return ju(p)?"styled."+p:"Styled("+j1(p)+")"}(t):u,h=e.displayName&&e.componentId?Vf(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,f=e.shouldForwardProp;r&&t.shouldForwardProp&&(f=e.shouldForwardProp?function(p,w,g){return t.shouldForwardProp(p,w,g)&&e.shouldForwardProp(p,w,g)}:t.shouldForwardProp);var m,v=new aU(n,h,r?t.componentStyle:void 0),E=v.isStatic&&o.length===0,y=function(p,w){return function(g,S,x,A){var C=g.attrs,j=g.componentStyle,M=g.defaultProps,oe=g.foldedComponentIds,z=g.shouldForwardProp,ye=g.styledComponentId,_e=g.target,ne=function(Y,I,ge){Y===void 0&&(Y=Ei);var F=Ir({},I,{theme:Y}),He={};return ge.forEach(function(xe){var Re,ue,dt,Ot=xe;for(Re in Sl(Ot)&&(Ot=Ot(F)),Ot)F[Re]=He[Re]=Re==="className"?(ue=He[Re],dt=Ot[Re],ue&&dt?ue+" "+dt:ue||dt):Ot[Re]}),[F,He]}(EU(S,T.useContext(Ak),M)||Ei,S,C),de=ne[0],fe=ne[1],P=function(Y,I,ge,F){var He=dU(),xe=fU(),Re=I?Y.generateAndInjectStyles(Ei,He,xe):Y.generateAndInjectStyles(ge,He,xe);return Re}(j,A,de),H=x,Q=fe.$as||S.$as||fe.as||S.as||_e,ve=ju(Q),U=fe!==S?Ir({},S,{},fe):S,B={};for(var $ in U)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?B.as=U[$]:(z?z($,L1,Q):!ve||L1($))&&(B[$]=U[$]));return S.style&&fe.style!==S.style&&(B.style=Ir({},S.style,{},fe.style)),B.className=Array.prototype.concat(oe,ye,P!==ye?P:null,S.className,fe.className).filter(Boolean).join(" "),B.ref=H,T.createElement(Q,B)}(m,p,w,E)};return y.displayName=c,(m=Ye.forwardRef(y)).attrs=d,m.componentStyle=v,m.displayName=c,m.shouldForwardProp=f,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):ch,m.styledComponentId=h,m.target=r?t.target:t,m.withComponent=function(p){var w=e.componentId,g=function(x,A){if(x==null)return{};var C,j,M={},oe=Object.keys(x);for(j=0;j<oe.length;j++)C=oe[j],A.indexOf(C)>=0||(M[C]=x[C]);return M}(e,["componentId"]),S=w&&w+"-"+(ju(p)?p:Vf(j1(p)));return bk(p,Ir({},g,{attrs:d,componentId:S}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Rk({},t.defaultProps,p):p}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&H4(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Vm=function(t){return function e(n,r,i){if(i===void 0&&(i=Ei),!mv.isValidElementType(r))return nu(1,String(r));var s=function(){return n(r,i,wU.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Ir({},i,{},o))},s.attrs=function(o){return e(n,r,Ir({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(bk,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Vm[t]=Vm(t)});const Kt=Vm,kU=Kt.footer`
    
    position: relative;
    background-color: #101010f7;
    width: 100%;
    padding: 12px 0px;
    text-align: center;
    
    color: white;
    p{
        font-weight: bold;
        font-size: 13px;
        
    }

    p a{
        color: #9230f4;
        font-size: 16px;
    }
`;function xU(){return _.jsx(kU,{children:_.jsxs("p",{children:["@2023 Coordinates - Made by ",_.jsx("a",{href:"https://github.com/GuilhermeSella",children:"Guilherme Sella"})]})})}const RU=Kt.div`
    padding-bottom: 10px;

    .hamburguer{
    position: relative;
    top: 6px;
    display: block;
    background-color: ${t=>t.theme==="light"?"black":"white"};
    width: 40px;
    height: 3.2px;
    transition: .5s ease-in-out;
    }
    .hamburguer:before,
    .hamburguer:after{
        background-color: ${t=>t.theme==="light"?"black":"white"};
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: .5s ease-in-out;
    }
    .hamburguer:after{
        bottom: -10px;
    }
    .hamburguer:before{
        top: -10px;
        
    }

    .input-menu-hamburguer{
        display: none;
    }
    /* .input-menu-hamburguer:checked ~ label .hamburguer{
        transform: rotate(45deg);
    }

    .input-menu-hamburguer:checked ~ label .hamburguer:before{
        transform: rotate(90deg);
        top: 0;
    }

    .input-menu-hamburguer:checked ~ label .hamburguer:after{
        transform: rotate(90deg);
        bottom: 0;
    } */
    




`;function AU(t){const{toggleHamburguer:e,theme:n}=T.useContext(Qn);return _.jsxs(RU,{className:"menu-hamburguer",theme:n,children:[_.jsx("input",{onChange:e,type:"checkbox",id:"menu-hamburguer",className:"input-menu-hamburguer"}),_.jsx("label",{htmlFor:"menu-hamburguer",children:_.jsx("div",{className:"menu",children:_.jsx("span",{className:"hamburguer"})})})]})}const bU=Kt.header`
    
    width: 100%;
    padding: 20px;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
   
    gap: 13%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 80px;
    }

    div a{
        font-size: 1.9rem;
    }

 

    a{
        font-weight: bold;
        color: #9E30F4;
        text-decoration: none;
        font-size: 2.5rem;
        transition: .5s;
    }
    

    .navIcons{
        display: flex;
        align-items: center;
        gap: 35px;
    }

    .button{
        font-size: 18px;
        border-radius: 10px;
        font-weight: normal;
       transition: .5s;
        color: white;
        
    }
    .button:hover{
        transform: translateY(-2px);
    }
    .button span{
        color: #9E30F4;
        font-size: 2rem;
    }
    .menuH{
        display: none;
    }

    @media screen and (max-width:860px) {
        .button, .list{
            display: none;
        }
        .menuH{
        display: block;
    }
    }

`;function NU(){const{theme:t}=T.useContext(Qn),{LogOut:e}=T.useContext(Bo),n=jo();return _.jsxs(bU,{theme:t,children:[_.jsx("div",{children:_.jsx(Bt,{to:"/home",children:"Coordinates"})}),_.jsxs("nav",{className:"navIcons",children:[_.jsx(Bt,{className:"button",to:"/home/account",children:_.jsx("span",{className:"material-symbols-outlined",children:"person"})}),_.jsx(Bt,{className:"button",to:"/home/saved",children:_.jsx("span",{className:"material-symbols-outlined",children:"bookmark"})}),_.jsx(Bt,{className:"button",onClick:()=>{n("/"),e()},children:_.jsx("span",{className:"material-symbols-outlined",children:"logout"})}),_.jsx("div",{className:"menuH",children:_.jsx(AU,{})})]})]})}const PU=Kt.div`
    
    position: absolute;
    display: ${t=>t.hamburguer==="enable"?"block":"none"};
    z-index: 1000;
    height: 100%;
    width: 100vw;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
   
    ul{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px  8%;
        gap: 60px;
    }
    ul li {
        color:#9E30F4 ;
        list-style: none;
        font-size: 1.15rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;
        border-bottom: 0.5px solid white;
        padding-bottom: 10px;
    }

    ul li a{
        text-decoration: none;
        color:#9E30F4 ;
    }
   
       

`;function OU(){const{theme:t,hamburguer:e,toggleHamburguer:n}=T.useContext(Qn),{LogOut:r}=T.useContext(Bo),i=jo();return _.jsx(PU,{hamburguer:e,theme:t,children:_.jsxs("ul",{children:[_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"home"}),_.jsx(Bt,{to:"/home",children:"Home"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"person"}),_.jsx(Bt,{to:"/home/account",children:"Profile"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"bookmark"}),_.jsx(Bt,{to:"/home/saved",children:"Saved"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"logout"}),_.jsx(Bt,{onClick:()=>{i("/"),r()},children:"Log Out"})]})]})})}function DU(){const{hamburguer:t,setTheme:e}=T.useContext(Qn);function n(){const r=JSON.parse(localStorage.getItem("@userStorage"));r&&e(r.theme)}return T.useEffect(()=>{n()},[]),_.jsxs(_.Fragment,{children:[_.jsx(NU,{}),t==="disable"?_.jsxs(_.Fragment,{children:[_.jsx(GF,{}),_.jsx(xU,{})]}):_.jsx(OU,{})]})}const LU=Kt.div`
      background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
      color: ${t=>t.theme==="light"?"black":"white"};
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 10px;
    justify-content: center;

    h1{
        text-align: center;
        font-size: 2.9rem;
        width: 90%;
        min-width: 300px;
        max-width: 550px;
    }
     h1 b{
        color: '#9E30F4';
        
     }

     .button{
        text-decoration: none;
        font-size: 18px;
        border-radius: 10px;
        font-weight: normal;
        background-color: #9E30F4;
        color: white;
        padding: 15px 20px;
    }
`;function MU(t){const{theme:e}=T.useContext(Qn);return _.jsxs(LU,{theme:e,children:[_.jsxs("h1",{children:["Descubra a sua exata ",_.jsx("b",{children:"coordenada"})," e veja quando quiser!"]}),_.jsx(Bt,{to:"/home/coordinates",className:"button",children:"Começar"})]})}const $U="https://guilhermesella.github.io/app_coordinates/assets/armazenamento-09971877.svg",FU="https://guilhermesella.github.io/app_coordinates/assets/googleapi-1c30252a.svg",UU="https://guilhermesella.github.io/app_coordinates/assets/geolocalizacao-08b5f0ef.svg",jU=Kt.section`
    width: 100%;
   
    background-color: #101010ed;
    display: flex;
    justify-content: space-evenly;
    
    gap: 20px;
    align-items: center;
    padding:  200px 10px;
    flex-wrap: wrap;
`,qf=Kt.div`
    width:80vw ;
    max-width: 350px;
    height: 50vh;
    background-color: white;
    border-radius: 15px;
    padding: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        height: 70%;
    }

    p{
       
        font-size: 1.2rem;
        
    }
`;function BU(){return _.jsxs(jU,{children:[_.jsxs(qf,{children:[_.jsx("img",{src:$U,alt:""}),_.jsx("h2",{children:"Armazenamento"}),_.jsx("p",{children:"Armazene os seus endereços e suas coordenadas para acessar quando quiser."})]}),_.jsxs(qf,{children:[_.jsx("img",{src:UU,alt:""}),_.jsx("h2",{children:"Geolocalização"}),_.jsx("p",{children:"Tenha em mãos as exatas coordenadas geográficas que você procura"})]}),_.jsxs(qf,{children:[_.jsx("img",{src:FU,alt:""}),_.jsx("h2",{children:"Google API"}),_.jsx("p",{children:"Esse projeto utiliza Google API para fornecer a geolocalização que você deseja."})]})]})}function zU(){return _.jsxs(_.Fragment,{children:[_.jsx(MU,{}),_.jsx(BU,{})]})}const VU=Kt.div`



    background-color:${t=>t.theme==="light"?"white":"#0a0a0aea"} ;
    color: ${t=>t.theme==="light"?"black":"white"};
    width: 100%;
   height: 120vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  

    flex-wrap: wrap-reverse;
    gap: 20px;
   
 
    h1{
        padding-bottom: 5vh;
        font-size: 2.3rem;
    }

    .formulario{
        width: 90%;
        max-width: 540px;
    }
    .formulario form{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }
    .formulario form div{
        display: flex;
        flex-direction: column;
    }

    .formulario form div label{
        font-size: 1.25rem;
        padding-bottom: 20px;
        font-weight: bold;
    }

    .formulario form div input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
        font-size: 1.2rem;
    }

   
    .formulario form button{
        cursor: pointer;
        background-color: #9230f4;
        color: white;
        font-size: 1.2rem;
        border: none;
        border-radius: 10px;
        padding: 15px ;
        width: 150px;
        margin: auto;
    }

    .readOnly{
        background-color: #d1cfcfee;
        
    }

    .divImg{
       max-width: 90vw;
        display: flex;
        flex-direction: column;
        gap: 30px;
     
       
    }
    .divImg button{
        cursor: pointer;
        background-color: #9230f4;
        color: white;
        font-size: 1.2rem;
        border: none;
        border-radius: 10px;
        padding: 10px 0  ;
        width: 150px;
        margin: auto;
    }
    .divImg iframe{
       position: relative;
       
    }

    @media screen and (max-width:420px){
       gap: 0;
        
   }
   
   @media screen and (max-width:380px){
        height: 137vh;
        padding-bottom: 30px;
        
   }
    

    
`;function Hm(t,e){return Hm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Hm(t,e)}function Nd(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Hm(t,e)}var Pd=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(r){var i=this,s=r||function(){};return this.listeners.push(s),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(o){return o!==s}),i.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}();function Pe(){return Pe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pe.apply(this,arguments)}var Nk=typeof window>"u";function Qt(){}function HU(t,e){return typeof t=="function"?t(e):t}function qU(t){return typeof t=="number"&&t>=0&&t!==1/0}function dh(t){return Array.isArray(t)?t:[t]}function WU(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Wf(t,e,n){return Od(t)?typeof e=="function"?Pe({},n,{queryKey:t,queryFn:e}):Pe({},e,{queryKey:t}):t}function Qr(t,e,n){return Od(t)?[Pe({},e,{queryKey:t}),n]:[t||{},e]}function KU(t,e){if(t===!0&&e===!0||t==null&&e==null)return"all";if(t===!1&&e===!1)return"none";var n=t??!e;return n?"active":"inactive"}function W1(t,e){var n=t.active,r=t.exact,i=t.fetching,s=t.inactive,o=t.predicate,a=t.queryKey,l=t.stale;if(Od(a)){if(r){if(e.queryHash!==Ev(a,e.options))return!1}else if(!fh(e.queryKey,a))return!1}var u=KU(n,s);if(u==="none")return!1;if(u!=="all"){var c=e.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i=="boolean"&&e.isFetching()!==i||o&&!o(e))}function K1(t,e){var n=t.exact,r=t.fetching,i=t.predicate,s=t.mutationKey;if(Od(s)){if(!e.options.mutationKey)return!1;if(n){if(Wi(e.options.mutationKey)!==Wi(s))return!1}else if(!fh(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Ev(t,e){var n=(e==null?void 0:e.queryKeyHashFn)||Wi;return n(t)}function Wi(t){var e=dh(t);return GU(e)}function GU(t){return JSON.stringify(t,function(e,n){return qm(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function fh(t,e){return Pk(dh(t),dh(e))}function Pk(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(function(n){return!Pk(t[n],e[n])}):!1}function Ok(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||qm(t)&&qm(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{},a=0,l=0;l<s;l++){var u=n?l:i[l];o[u]=Ok(t[u],e[u]),o[u]===t[u]&&a++}return r===s&&a===r?t:o}return e}function qm(t){if(!G1(t))return!1;var e=t.constructor;if(typeof e>"u")return!0;var n=e.prototype;return!(!G1(n)||!n.hasOwnProperty("isPrototypeOf"))}function G1(t){return Object.prototype.toString.call(t)==="[object Object]"}function Od(t){return typeof t=="string"||Array.isArray(t)}function QU(t){return new Promise(function(e){setTimeout(e,t)})}function Q1(t){Promise.resolve().then(t).catch(function(e){return setTimeout(function(){throw e})})}function Dk(){if(typeof AbortController=="function")return new AbortController}var YU=function(t){Nd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!Nk&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setFocused(a):o.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},e}(Pd),cc=new YU,XU=function(t){Nd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!Nk&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setOnline(a):o.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},e}(Pd),hc=new XU;function JU(t){return Math.min(1e3*Math.pow(2,t),3e4)}function ph(t){return typeof(t==null?void 0:t.cancel)=="function"}var Lk=function(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent};function Kf(t){return t instanceof Lk}var Mk=function(e){var n=this,r=!1,i,s,o,a;this.abort=e.abort,this.cancel=function(d){return i==null?void 0:i(d)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return s==null?void 0:s()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,f){o=d,a=f});var l=function(f){n.isResolved||(n.isResolved=!0,e.onSuccess==null||e.onSuccess(f),s==null||s(),o(f))},u=function(f){n.isResolved||(n.isResolved=!0,e.onError==null||e.onError(f),s==null||s(),a(f))},c=function(){return new Promise(function(f){s=f,n.isPaused=!0,e.onPause==null||e.onPause()}).then(function(){s=void 0,n.isPaused=!1,e.onContinue==null||e.onContinue()})},h=function d(){if(!n.isResolved){var f;try{f=e.fn()}catch(m){f=Promise.reject(m)}i=function(v){if(!n.isResolved&&(u(new Lk(v)),n.abort==null||n.abort(),ph(f)))try{f.cancel()}catch{}},n.isTransportCancelable=ph(f),Promise.resolve(f).then(l).catch(function(m){var v,E;if(!n.isResolved){var y=(v=e.retry)!=null?v:3,p=(E=e.retryDelay)!=null?E:JU,w=typeof p=="function"?p(n.failureCount,m):p,g=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,m);if(r||!g){u(m);return}n.failureCount++,e.onFail==null||e.onFail(n.failureCount,m),QU(w).then(function(){if(!cc.isFocused()||!hc.isOnline())return c()}).then(function(){r?u(m):d()})}})}};h()},ZU=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var e=t.prototype;return e.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},e.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Q1(function(){i.notifyFn(r)})},e.batchCalls=function(r){var i=this;return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];i.schedule(function(){r.apply(void 0,o)})}},e.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Q1(function(){r.batchNotifyFn(function(){i.forEach(function(s){r.notifyFn(s)})})})},e.setNotifyFunction=function(r){this.notifyFn=r},e.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},t}(),Rt=new ZU,$k=console;function Fk(){return $k}function ej(t){$k=t}var tj=function(){function t(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var e=t.prototype;return e.setOptions=function(r){var i;this.options=Pe({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},e.setDefaultOptions=function(r){this.defaultOptions=r},e.scheduleGc=function(){var r=this;this.clearGcTimeout(),qU(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},e.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},e.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},e.setData=function(r,i){var s,o,a=this.state.data,l=HU(r,a);return(s=(o=this.options).isDataEqual)!=null&&s.call(o,a,l)?l=a:this.options.structuralSharing!==!1&&(l=Ok(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},e.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},e.cancel=function(r){var i,s=this.promise;return(i=this.retryer)==null||i.cancel(r),s?s.then(Qt).catch(Qt):Promise.resolve()},e.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},e.reset=function(){this.destroy(),this.setState(this.initialState)},e.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},e.isFetching=function(){return this.state.isFetching},e.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},e.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!WU(this.state.dataUpdatedAt,r)},e.onFocus=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.onOnline=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},e.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},e.getObserversCount=function(){return this.observers.length},e.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},e.fetch=function(r,i){var s=this,o,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(p){return p.options.queryFn});c&&this.setOptions(c.options)}var h=dh(this.queryKey),d=Dk(),f={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(f,"signal",{enumerable:!0,get:function(){if(d)return s.abortSignalConsumed=!0,d.signal}});var m=function(){return s.options.queryFn?(s.abortSignalConsumed=!1,s.options.queryFn(f)):Promise.reject("Missing queryFn")},v={fetchOptions:i,options:this.options,queryKey:h,state:this.state,fetchFn:m,meta:this.meta};if((o=this.options.behavior)!=null&&o.onFetch){var E;(E=this.options.behavior)==null||E.onFetch(v)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=v.fetchOptions)==null?void 0:a.meta)){var y;this.dispatch({type:"fetch",meta:(y=v.fetchOptions)==null?void 0:y.meta})}return this.retryer=new Mk({fn:v.fetchFn,abort:d==null||(l=d.abort)==null?void 0:l.bind(d),onSuccess:function(w){s.setData(w),s.cache.config.onSuccess==null||s.cache.config.onSuccess(w,s),s.cacheTime===0&&s.optionalRemove()},onError:function(w){Kf(w)&&w.silent||s.dispatch({type:"error",error:w}),Kf(w)||(s.cache.config.onError==null||s.cache.config.onError(w,s),Fk().error(w)),s.cacheTime===0&&s.optionalRemove()},onFail:function(){s.dispatch({type:"failed"})},onPause:function(){s.dispatch({type:"pause"})},onContinue:function(){s.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay}),this.promise=this.retryer.promise,this.promise},e.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Rt.batch(function(){i.observers.forEach(function(s){s.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},e.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,s=typeof r.initialData<"u",o=s?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},e.reducer=function(r,i){var s,o;switch(i.type){case"failed":return Pe({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Pe({},r,{isPaused:!0});case"continue":return Pe({},r,{isPaused:!1});case"fetch":return Pe({},r,{fetchFailureCount:0,fetchMeta:(s=i.meta)!=null?s:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Pe({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=i.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return Kf(a)&&a.revert&&this.revertState?Pe({},this.revertState):Pe({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Pe({},r,{isInvalidated:!0});case"setState":return Pe({},r,i.state);default:return r}},t}(),nj=function(t){Nd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=e.prototype;return n.build=function(i,s,o){var a,l=s.queryKey,u=(a=s.queryHash)!=null?a:Ev(l,s),c=this.get(u);return c||(c=new tj({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(s),state:o,defaultOptions:i.getQueryDefaults(l),meta:s.meta}),this.add(c)),c},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var s=this.queriesMap[i.queryHash];s&&(i.destroy(),this.queries=this.queries.filter(function(o){return o!==i}),s===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Rt.batch(function(){i.queries.forEach(function(s){i.remove(s)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,s){var o=Qr(i,s),a=o[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return W1(a,l)})},n.findAll=function(i,s){var o=Qr(i,s),a=o[0];return Object.keys(a).length>0?this.queries.filter(function(l){return W1(a,l)}):this.queries},n.notify=function(i){var s=this;Rt.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){var i=this;Rt.batch(function(){i.queries.forEach(function(s){s.onFocus()})})},n.onOnline=function(){var i=this;Rt.batch(function(){i.queries.forEach(function(s){s.onOnline()})})},e}(Pd),rj=function(){function t(n){this.options=Pe({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||ij(),this.meta=n.meta}var e=t.prototype;return e.setState=function(r){this.dispatch({type:"setState",state:r})},e.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},e.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Qt).catch(Qt)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var r=this,i,s=this.state.status==="loading",o=Promise.resolve();return s||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),o.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),Fk().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},e.executeMutation=function(){var r=this,i;return this.retryer=new Mk({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(r){var i=this;this.state=sj(this.state,r),Rt.batch(function(){i.observers.forEach(function(s){s.onMutationUpdate(r)}),i.mutationCache.notify(i)})},t}();function ij(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function sj(t,e){switch(e.type){case"failed":return Pe({},t,{failureCount:t.failureCount+1});case"pause":return Pe({},t,{isPaused:!0});case"continue":return Pe({},t,{isPaused:!1});case"loading":return Pe({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return Pe({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return Pe({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return Pe({},t,e.state);default:return t}}var oj=function(t){Nd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=e.prototype;return n.build=function(i,s,o){var a=new rj({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(s),state:o,defaultOptions:s.mutationKey?i.getMutationDefaults(s.mutationKey):void 0,meta:s.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(s){return s!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Rt.batch(function(){i.mutations.forEach(function(s){i.remove(s)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(s){return K1(i,s)})},n.findAll=function(i){return this.mutations.filter(function(s){return K1(i,s)})},n.notify=function(i){var s=this;Rt.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(s){return s.state.isPaused});return Rt.batch(function(){return i.reduce(function(s,o){return s.then(function(){return o.continue().catch(Qt)})},Promise.resolve())})},e}(Pd);function aj(){return{onFetch:function(e){e.fetchFn=function(){var n,r,i,s,o,a,l=(n=e.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=e.fetchOptions)==null||(s=i.meta)==null?void 0:s.fetchMore,c=u==null?void 0:u.pageParam,h=(u==null?void 0:u.direction)==="forward",d=(u==null?void 0:u.direction)==="backward",f=((o=e.state.data)==null?void 0:o.pages)||[],m=((a=e.state.data)==null?void 0:a.pageParams)||[],v=Dk(),E=v==null?void 0:v.signal,y=m,p=!1,w=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},g=function(_e,ne,de,fe){return y=fe?[ne].concat(y):[].concat(y,[ne]),fe?[de].concat(_e):[].concat(_e,[de])},S=function(_e,ne,de,fe){if(p)return Promise.reject("Cancelled");if(typeof de>"u"&&!ne&&_e.length)return Promise.resolve(_e);var P={queryKey:e.queryKey,signal:E,pageParam:de,meta:e.meta},H=w(P),Q=Promise.resolve(H).then(function(U){return g(_e,de,U,fe)});if(ph(H)){var ve=Q;ve.cancel=H.cancel}return Q},x;if(!f.length)x=S([]);else if(h){var A=typeof c<"u",C=A?c:Y1(e.options,f);x=S(f,A,C)}else if(d){var j=typeof c<"u",M=j?c:lj(e.options,f);x=S(f,j,M,!0)}else(function(){y=[];var ye=typeof e.options.getNextPageParam>"u",_e=l&&f[0]?l(f[0],0,f):!0;x=_e?S([],ye,m[0]):Promise.resolve(g([],m[0],f[0]));for(var ne=function(P){x=x.then(function(H){var Q=l&&f[P]?l(f[P],P,f):!0;if(Q){var ve=ye?m[P]:Y1(e.options,H);return S(H,ye,ve)}return Promise.resolve(g(H,m[P],f[P]))})},de=1;de<f.length;de++)ne(de)})();var oe=x.then(function(ye){return{pages:ye,pageParams:y}}),z=oe;return z.cancel=function(){p=!0,v==null||v.abort(),ph(x)&&x.cancel()},oe}}}}function Y1(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function lj(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}var uj=function(){function t(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new nj,this.mutationCache=n.mutationCache||new oj,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var e=t.prototype;return e.mount=function(){var r=this;this.unsubscribeFocus=cc.subscribe(function(){cc.isFocused()&&hc.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=hc.subscribe(function(){cc.isFocused()&&hc.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},e.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},e.isFetching=function(r,i){var s=Qr(r,i),o=s[0];return o.fetching=!0,this.queryCache.findAll(o).length},e.isMutating=function(r){return this.mutationCache.findAll(Pe({},r,{fetching:!0})).length},e.getQueryData=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state.data},e.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var s=i.queryKey,o=i.state,a=o.data;return[s,a]})},e.setQueryData=function(r,i,s){var o=Wf(r),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(i,s)},e.setQueriesData=function(r,i,s){var o=this;return Rt.batch(function(){return o.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,o.setQueryData(l,i,s)]})})},e.getQueryState=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state},e.removeQueries=function(r,i){var s=Qr(r,i),o=s[0],a=this.queryCache;Rt.batch(function(){a.findAll(o).forEach(function(l){a.remove(l)})})},e.resetQueries=function(r,i,s){var o=this,a=Qr(r,i,s),l=a[0],u=a[1],c=this.queryCache,h=Pe({},l,{active:!0});return Rt.batch(function(){return c.findAll(l).forEach(function(d){d.reset()}),o.refetchQueries(h,u)})},e.cancelQueries=function(r,i,s){var o=this,a=Qr(r,i,s),l=a[0],u=a[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var h=Rt.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.cancel(c)})});return Promise.all(h).then(Qt).catch(Qt)},e.invalidateQueries=function(r,i,s){var o,a,l,u=this,c=Qr(r,i,s),h=c[0],d=c[1],f=Pe({},h,{active:(o=(a=h.refetchActive)!=null?a:h.active)!=null?o:!0,inactive:(l=h.refetchInactive)!=null?l:!1});return Rt.batch(function(){return u.queryCache.findAll(h).forEach(function(m){m.invalidate()}),u.refetchQueries(f,d)})},e.refetchQueries=function(r,i,s){var o=this,a=Qr(r,i,s),l=a[0],u=a[1],c=Rt.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.fetch(void 0,Pe({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),h=Promise.all(c).then(Qt);return u!=null&&u.throwOnError||(h=h.catch(Qt)),h},e.fetchQuery=function(r,i,s){var o=Wf(r,i,s),a=this.defaultQueryOptions(o);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},e.prefetchQuery=function(r,i,s){return this.fetchQuery(r,i,s).then(Qt).catch(Qt)},e.fetchInfiniteQuery=function(r,i,s){var o=Wf(r,i,s);return o.behavior=aj(),this.fetchQuery(o)},e.prefetchInfiniteQuery=function(r,i,s){return this.fetchInfiniteQuery(r,i,s).then(Qt).catch(Qt)},e.cancelMutations=function(){var r=this,i=Rt.batch(function(){return r.mutationCache.getAll().map(function(s){return s.cancel()})});return Promise.all(i).then(Qt).catch(Qt)},e.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},e.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},e.getQueryCache=function(){return this.queryCache},e.getMutationCache=function(){return this.mutationCache},e.getDefaultOptions=function(){return this.defaultOptions},e.setDefaultOptions=function(r){this.defaultOptions=r},e.setQueryDefaults=function(r,i){var s=this.queryDefaults.find(function(o){return Wi(r)===Wi(o.queryKey)});s?s.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},e.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(s){return fh(r,s.queryKey)}))==null?void 0:i.defaultOptions:void 0},e.setMutationDefaults=function(r,i){var s=this.mutationDefaults.find(function(o){return Wi(r)===Wi(o.mutationKey)});s?s.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},e.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(s){return fh(r,s.mutationKey)}))==null?void 0:i.defaultOptions:void 0},e.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=Pe({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Ev(i.queryKey,i)),i},e.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},e.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:Pe({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},e.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},t}(),cj=LA.unstable_batchedUpdates;Rt.setBatchNotifyFunction(cj);var hj=console;ej(hj);var X1=Ye.createContext(void 0),dj=Ye.createContext(!1);function fj(t){return t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=X1),window.ReactQueryClientContext):X1}var pj=function(e){var n=e.client,r=e.contextSharing,i=r===void 0?!1:r,s=e.children;Ye.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var o=fj(i);return Ye.createElement(dj.Provider,{value:i},Ye.createElement(o.Provider,{value:n},s))};const mj="https://guilhermesella.github.io/app_coordinates/assets/Loading-aa4d524e.svg";function Uk(t,e){return function(){return t.apply(e,arguments)}}const{toString:gj}=Object.prototype,{getPrototypeOf:_v}=Object,Dd=(t=>e=>{const n=gj.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pr=t=>(t=t.toLowerCase(),e=>Dd(e)===t),Ld=t=>e=>typeof e===t,{isArray:zo}=Array,Tl=Ld("undefined");function yj(t){return t!==null&&!Tl(t)&&t.constructor!==null&&!Tl(t.constructor)&&On(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const jk=pr("ArrayBuffer");function vj(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&jk(t.buffer),e}const wj=Ld("string"),On=Ld("function"),Bk=Ld("number"),Md=t=>t!==null&&typeof t=="object",Ej=t=>t===!0||t===!1,dc=t=>{if(Dd(t)!=="object")return!1;const e=_v(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},_j=pr("Date"),Sj=pr("File"),Tj=pr("Blob"),Cj=pr("FileList"),Ij=t=>Md(t)&&On(t.pipe),kj=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||On(t.append)&&((e=Dd(t))==="formdata"||e==="object"&&On(t.toString)&&t.toString()==="[object FormData]"))},xj=pr("URLSearchParams"),Rj=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ru(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),zo(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function zk(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Vk=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Hk=t=>!Tl(t)&&t!==Vk;function Wm(){const{caseless:t}=Hk(this)&&this||{},e={},n=(r,i)=>{const s=t&&zk(e,i)||i;dc(e[s])&&dc(r)?e[s]=Wm(e[s],r):dc(r)?e[s]=Wm({},r):zo(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ru(arguments[r],n);return e}const Aj=(t,e,n,{allOwnKeys:r}={})=>(ru(e,(i,s)=>{n&&On(i)?t[s]=Uk(i,n):t[s]=i},{allOwnKeys:r}),t),bj=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Nj=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Pj=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&_v(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Oj=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Dj=t=>{if(!t)return null;if(zo(t))return t;let e=t.length;if(!Bk(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Lj=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_v(Uint8Array)),Mj=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},$j=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Fj=pr("HTMLFormElement"),Uj=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),J1=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),jj=pr("RegExp"),qk=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ru(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},Bj=t=>{qk(t,(e,n)=>{if(On(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(On(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zj=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return zo(t)?r(t):r(String(t).split(e)),n},Vj=()=>{},Hj=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Gf="abcdefghijklmnopqrstuvwxyz",Z1="0123456789",Wk={DIGIT:Z1,ALPHA:Gf,ALPHA_DIGIT:Gf+Gf.toUpperCase()+Z1},qj=(t=16,e=Wk.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Wj(t){return!!(t&&On(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Kj=t=>{const e=new Array(10),n=(r,i)=>{if(Md(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=zo(r)?[]:{};return ru(r,(o,a)=>{const l=n(o,i+1);!Tl(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},Gj=pr("AsyncFunction"),Qj=t=>t&&(Md(t)||On(t))&&On(t.then)&&On(t.catch),b={isArray:zo,isArrayBuffer:jk,isBuffer:yj,isFormData:kj,isArrayBufferView:vj,isString:wj,isNumber:Bk,isBoolean:Ej,isObject:Md,isPlainObject:dc,isUndefined:Tl,isDate:_j,isFile:Sj,isBlob:Tj,isRegExp:jj,isFunction:On,isStream:Ij,isURLSearchParams:xj,isTypedArray:Lj,isFileList:Cj,forEach:ru,merge:Wm,extend:Aj,trim:Rj,stripBOM:bj,inherits:Nj,toFlatObject:Pj,kindOf:Dd,kindOfTest:pr,endsWith:Oj,toArray:Dj,forEachEntry:Mj,matchAll:$j,isHTMLForm:Fj,hasOwnProperty:J1,hasOwnProp:J1,reduceDescriptors:qk,freezeMethods:Bj,toObjectSet:zj,toCamelCase:Uj,noop:Vj,toFiniteNumber:Hj,findKey:zk,global:Vk,isContextDefined:Hk,ALPHABET:Wk,generateString:qj,isSpecCompliantForm:Wj,toJSONObject:Kj,isAsyncFn:Gj,isThenable:Qj};function Ie(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}b.inherits(Ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Kk=Ie.prototype,Gk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Gk[t]={value:t}});Object.defineProperties(Ie,Gk);Object.defineProperty(Kk,"isAxiosError",{value:!0});Ie.from=(t,e,n,r,i,s)=>{const o=Object.create(Kk);return b.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ie.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const Yj=null;function Km(t){return b.isPlainObject(t)||b.isArray(t)}function Qk(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function eE(t,e,n){return t?t.concat(e).map(function(i,s){return i=Qk(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Xj(t){return b.isArray(t)&&!t.some(Km)}const Jj=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function $d(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,E){return!b.isUndefined(E[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(b.isDate(m))return m.toISOString();if(!l&&b.isBlob(m))throw new Ie("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(m)||b.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,v,E){let y=m;if(m&&!E&&typeof m=="object"){if(b.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(b.isArray(m)&&Xj(m)||(b.isFileList(m)||b.endsWith(v,"[]"))&&(y=b.toArray(m)))return v=Qk(v),y.forEach(function(w,g){!(b.isUndefined(w)||w===null)&&e.append(o===!0?eE([v],g,s):o===null?v:v+"[]",u(w))}),!1}return Km(m)?!0:(e.append(eE(E,v,s),u(m)),!1)}const h=[],d=Object.assign(Jj,{defaultVisitor:c,convertValue:u,isVisitable:Km});function f(m,v){if(!b.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(m),b.forEach(m,function(y,p){(!(b.isUndefined(y)||y===null)&&i.call(e,y,b.isString(p)?p.trim():p,v,d))===!0&&f(y,v?v.concat(p):[p])}),h.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return f(t),e}function tE(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Sv(t,e){this._pairs=[],t&&$d(t,this,e)}const Yk=Sv.prototype;Yk.append=function(e,n){this._pairs.push([e,n])};Yk.toString=function(e){const n=e?function(r){return e.call(this,r,tE)}:tE;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Zj(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xk(t,e,n){if(!e)return t;const r=n&&n.encode||Zj,i=n&&n.serialize;let s;if(i?s=i(e,n):s=b.isURLSearchParams(e)?e.toString():new Sv(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class e3{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const nE=e3,Jk={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t3=typeof URLSearchParams<"u"?URLSearchParams:Sv,n3=typeof FormData<"u"?FormData:null,r3=typeof Blob<"u"?Blob:null,i3=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),s3=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),sr={isBrowser:!0,classes:{URLSearchParams:t3,FormData:n3,Blob:r3},isStandardBrowserEnv:i3,isStandardBrowserWebWorkerEnv:s3,protocols:["http","https","file","blob","url","data"]};function o3(t,e){return $d(t,new sr.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return sr.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function a3(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function l3(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Zk(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&b.isArray(i)?i.length:o,l?(b.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!b.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&b.isArray(i[o])&&(i[o]=l3(i[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,i)=>{e(a3(r),i,n,0)}),n}return null}const u3={"Content-Type":void 0};function c3(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Fd={transitional:Jk,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=b.isObject(e);if(s&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return i&&i?JSON.stringify(Zk(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return o3(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return $d(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),c3(e)):e}],transformResponse:[function(e){const n=this.transitional||Fd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ie.from(a,Ie.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:sr.classes.FormData,Blob:sr.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};b.forEach(["delete","get","head"],function(e){Fd.headers[e]={}});b.forEach(["post","put","patch"],function(e){Fd.headers[e]=b.merge(u3)});const Tv=Fd,h3=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),d3=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&h3[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},rE=Symbol("internals");function oa(t){return t&&String(t).trim().toLowerCase()}function fc(t){return t===!1||t==null?t:b.isArray(t)?t.map(fc):String(t)}function f3(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const p3=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Qf(t,e,n,r,i){if(b.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function m3(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function g3(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Ud{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=oa(l);if(!c)throw new Error("header name must be a non-empty string");const h=b.findKey(i,c);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||l]=fc(a))}const o=(a,l)=>b.forEach(a,(u,c)=>s(u,c,l));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!p3(e)?o(d3(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=oa(e),e){const r=b.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return f3(i);if(b.isFunction(n))return n.call(this,i,r);if(b.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=oa(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Qf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=oa(o),o){const a=b.findKey(r,o);a&&(!n||Qf(r,r[a],a,n))&&(delete r[a],i=!0)}}return b.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Qf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return b.forEach(this,(i,s)=>{const o=b.findKey(r,s);if(o){n[o]=fc(i),delete n[s];return}const a=e?m3(s):String(s).trim();a!==s&&delete n[s],n[a]=fc(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[rE]=this[rE]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=oa(o);r[a]||(g3(i,o),r[a]=!0)}return b.isArray(e)?e.forEach(s):s(e),this}}Ud.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.freezeMethods(Ud.prototype);b.freezeMethods(Ud);const Rr=Ud;function Yf(t,e){const n=this||Tv,r=e||n,i=Rr.from(r.headers);let s=r.data;return b.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function ex(t){return!!(t&&t.__CANCEL__)}function iu(t,e,n){Ie.call(this,t??"canceled",Ie.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(iu,Ie,{__CANCEL__:!0});function y3(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Ie("Request failed with status code "+n.status,[Ie.ERR_BAD_REQUEST,Ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const v3=sr.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),b.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),b.isString(s)&&l.push("path="+s),b.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function w3(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function E3(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function tx(t,e){return t&&!w3(e)?E3(t,e):e}const _3=sr.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=b.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function S3(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function T3(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const f=c&&u-c;return f?Math.round(d*1e3/f):void 0}}function iE(t,e){let n=0;const r=T3(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const C3=typeof XMLHttpRequest<"u",I3=C3&&function(t){return new Promise(function(n,r){let i=t.data;const s=Rr.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}b.isFormData(i)&&(sr.isStandardBrowserEnv||sr.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+m))}const c=tx(t.baseURL,t.url);u.open(t.method.toUpperCase(),Xk(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const f=Rr.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:f,config:t,request:u};y3(function(y){n(y),l()},function(y){r(y),l()},v),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new Ie("Request aborted",Ie.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new Ie("Network Error",Ie.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let m=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||Jk;t.timeoutErrorMessage&&(m=t.timeoutErrorMessage),r(new Ie(m,v.clarifyTimeoutError?Ie.ETIMEDOUT:Ie.ECONNABORTED,t,u)),u=null},sr.isStandardBrowserEnv){const f=(t.withCredentials||_3(c))&&t.xsrfCookieName&&v3.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&b.forEach(s.toJSON(),function(m,v){u.setRequestHeader(v,m)}),b.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",iE(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",iE(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{u&&(r(!f||f.type?new iu(null,t,u):f),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=S3(c);if(d&&sr.protocols.indexOf(d)===-1){r(new Ie("Unsupported protocol "+d+":",Ie.ERR_BAD_REQUEST,t));return}u.send(i||null)})},pc={http:Yj,xhr:I3};b.forEach(pc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const k3={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=b.isString(n)?pc[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Ie(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(b.hasOwnProp(pc,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!b.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:pc};function Xf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new iu(null,t)}function sE(t){return Xf(t),t.headers=Rr.from(t.headers),t.data=Yf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),k3.getAdapter(t.adapter||Tv.adapter)(t).then(function(r){return Xf(t),r.data=Yf.call(t,t.transformResponse,r),r.headers=Rr.from(r.headers),r},function(r){return ex(r)||(Xf(t),r&&r.response&&(r.response.data=Yf.call(t,t.transformResponse,r.response),r.response.headers=Rr.from(r.response.headers))),Promise.reject(r)})}const oE=t=>t instanceof Rr?t.toJSON():t;function To(t,e){e=e||{};const n={};function r(u,c,h){return b.isPlainObject(u)&&b.isPlainObject(c)?b.merge.call({caseless:h},u,c):b.isPlainObject(c)?b.merge({},c):b.isArray(c)?c.slice():c}function i(u,c,h){if(b.isUndefined(c)){if(!b.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function s(u,c){if(!b.isUndefined(c))return r(void 0,c)}function o(u,c){if(b.isUndefined(c)){if(!b.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,h){if(h in e)return r(u,c);if(h in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(oE(u),oE(c),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=l[c]||i,d=h(t[c],e[c],c);b.isUndefined(d)&&h!==a||(n[c]=d)}),n}const nx="1.4.0",Cv={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Cv[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const aE={};Cv.transitional=function(e,n,r){function i(s,o){return"[Axios v"+nx+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new Ie(i(o," has been removed"+(n?" in "+n:"")),Ie.ERR_DEPRECATED);return n&&!aE[o]&&(aE[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function x3(t,e,n){if(typeof t!="object")throw new Ie("options must be an object",Ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Ie("option "+s+" must be "+l,Ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ie("Unknown option "+s,Ie.ERR_BAD_OPTION)}}const Gm={assertOptions:x3,validators:Cv},Wr=Gm.validators;class mh{constructor(e){this.defaults=e,this.interceptors={request:new nE,response:new nE}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=To(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Gm.assertOptions(r,{silentJSONParsing:Wr.transitional(Wr.boolean),forcedJSONParsing:Wr.transitional(Wr.boolean),clarifyTimeoutError:Wr.transitional(Wr.boolean)},!1),i!=null&&(b.isFunction(i)?n.paramsSerializer={serialize:i}:Gm.assertOptions(i,{encode:Wr.function,serialize:Wr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&b.merge(s.common,s[n.method]),o&&b.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=Rr.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,h=0,d;if(!l){const m=[sE.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),d=m.length,c=Promise.resolve(n);h<d;)c=c.then(m[h++],m[h++]);return c}d=a.length;let f=n;for(h=0;h<d;){const m=a[h++],v=a[h++];try{f=m(f)}catch(E){v.call(this,E);break}}try{c=sE.call(this,f)}catch(m){return Promise.reject(m)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(e){e=To(this.defaults,e);const n=tx(e.baseURL,e.url);return Xk(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){mh.prototype[e]=function(n,r){return this.request(To(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(To(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}mh.prototype[e]=n(),mh.prototype[e+"Form"]=n(!0)});const mc=mh;class Iv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new iu(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Iv(function(i){e=i}),cancel:e}}}const R3=Iv;function A3(t){return function(n){return t.apply(null,n)}}function b3(t){return b.isObject(t)&&t.isAxiosError===!0}const Qm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qm).forEach(([t,e])=>{Qm[e]=t});const N3=Qm;function rx(t){const e=new mc(t),n=Uk(mc.prototype.request,e);return b.extend(n,mc.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return rx(To(t,i))},n}const vt=rx(Tv);vt.Axios=mc;vt.CanceledError=iu;vt.CancelToken=R3;vt.isCancel=ex;vt.VERSION=nx;vt.toFormData=$d;vt.AxiosError=Ie;vt.Cancel=vt.CanceledError;vt.all=function(e){return Promise.all(e)};vt.spread=A3;vt.isAxiosError=b3;vt.mergeConfig=To;vt.AxiosHeaders=Rr;vt.formToJSON=t=>Zk(b.isHTMLForm(t)?new FormData(t):t);vt.HttpStatusCode=N3;vt.default=vt;const P3=vt;function O3(){const{theme:t}=T.useContext(Qn),[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),[u,c]=T.useState(!1);async function h(v){c(!0);let E;P3.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${v}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8`).then(y=>{console.log(y),E=y.data.results[0].geometry.location,i(E.lat),o(E.lng),d(v)})}const d=async v=>{l(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8&q=${v}`),c(!1)};async function f(v){v.preventDefault(),h(e)}async function m(){const v=JSON.parse(localStorage.getItem("@userStorage"));await mD(BC(hs,"coordinates"),{adress:e,lat:r,lng:s,srcMap:a,userId:v.uid}).then(()=>{Ce.success("Salvo com sucesso!"),n(""),l(""),i(""),o("")}).catch(()=>{Ce.error("Ops, algo deu errado!")})}return _.jsxs(VU,{theme:t,children:[_.jsx("div",{className:"formulario",children:_.jsxs("form",{onSubmit:f,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Digite um endereço:"}),_.jsx("input",{type:"text",name:"",id:"",value:e,onChange:v=>{n(v.target.value),l(""),i(""),o("")}})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Latitude"}),_.jsx("input",{type:"text",name:"",value:r,readOnly:!0,className:"readOnly"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Longitude"}),_.jsx("input",{type:"text",name:"",value:s,readOnly:!0,className:"readOnly"})]}),_.jsx("button",{type:"submit",children:u===!1?"Buscar":"Carregando..."})]})}),_.jsxs("div",{className:"divImg",children:[_.jsx("iframe",{width:a===""?280:320,height:a===""?280:320,src:a===""?mj:a,frameBorder:"0"}),a===""?_.jsx("h2",{children:"Aguardando..."}):_.jsx("button",{onClick:m,children:"Salvar"})]})]})}const D3="https://guilhermesella.github.io/app_coordinates/assets/inicio-21a63dea.svg",L3=Kt.main`
    width: 100vw;
    height: 100vh;
    background-color: white;
    color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    padding: 0 30px 7vh 30px;
    
    
   

    div img{
        
        width: 80vw;
        max-width: 400px;
        transition: .9s;
    }

    .text{
       max-width: 450px;
       
    }
    .text h1{
        font-size: 2.4rem;
    }
    .text p{
        padding: 20px 0px;
        font-size: 1.2rem;
        
    }

    .links{
        display: flex;
        gap: 25px;
    }

    .links a{
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        padding: 16px 20px;
        background-color: #9E30F4;
        border-radius: 10px;
        transition: .9s;
        font-weight: bold;
    }
    .links a:hover,
    img:hover
    {
        transform: translateY(-4px);
    }


    .btnTheme{
        cursor: pointer;
        font-size: 18px;
        padding: 10px 5px;
        background-color: #9E30F4;
        color: white;
        border: none;
        border-radius: 10px;
        transition: .9s;
    }
    .btnTheme:hover{
        transform: translateY(-4px);
    }

    @media screen and (max-width:500px){

        div img{
            padding-top: 60px;
        }
        

    }
`;function M3(t){return T.useContext(Qn),localStorage.getItem("@userStorage","logado")?_.jsx(ck,{to:"/home"}):_.jsxs(L3,{children:[_.jsxs("div",{className:"text",children:[_.jsx("h1",{children:"Descubra coordenadas exatas e veja quando quiser"}),_.jsx("p",{children:"Registre-se para continuar..."}),_.jsxs("div",{className:"links",children:[_.jsx(Bt,{to:"/signin",children:"Sign in"}),_.jsx(Bt,{to:"/signup",children:"Sign up"})]})]}),_.jsx("div",{children:_.jsx("img",{src:D3,alt:""})})]})}function $3(){return _.jsx(_.Fragment,{children:_.jsx(M3,{})})}const ix=Kt.div`
    width: 100vw;
  
    height: 100vh;
    display: flex;
    flex-wrap: wrap-reverse;
    
    justify-content: center;
    align-items: center;
    padding: 5vh 0;

    .Divform{
        width: 90%;
        max-width: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Divform form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    .Divform form h1{
        font-size: 2.6rem;
    }
    .Divform form div{
        display: flex;
        align-items: left;
        flex-direction: column;
        width: 100%;
    }

    .Divform form div input{
        padding: 0.75rem 1rem;
        margin-top: 10px;
        font-size: 22px;
        border-radius: 0.375rem;
        border: 1px solid #9E30F4;
        outline: 0;
        
        
        
    }
    .Divform form div label{
        font-size: 1.2rem;
    }

   .Divform form  button{
        cursor: pointer;
        border: none;
        width: 100%;
        padding: 15px 10px;
        font-size: 1.2rem;
        color: white;
        background-color:#9E30F4;
        border-radius: 0.375rem;
   }

   .Divform form p{
        font-size: 1rem;
        font-weight: bold;
   }

   .Divform form p a{
        color: #9E30F4;
   }
   

    
   .img{
    display: flex;
    flex-direction: column;
    align-items: center;
   }

    .img img{
        transition: ease .5s;
        width: 70%;
        max-width: 550px;
    }

    @media screen and (max-width: 1100px) {
        .img{
            display: none;
        }
    }

   
`,F3="https://guilhermesella.github.io/app_coordinates/assets/login-3e19d223.svg";function U3(t){const[e,n]=T.useState(),[r,i]=T.useState(),{signIn:s,loadingAuth:o,setLoadingAuth:a}=T.useContext(Bo),l=jo();async function u(c){c.preventDefault(),e!==""&&r!==""&&await s(e,r).then(h=>{l("/home"),Ce.success("Bem vindo de volta!")}).catch(h=>{Ce.error("Email ou senha inválidos!"),a(!1)})}return _.jsxs(ix,{children:[_.jsx(eu,{}),_.jsx("div",{className:"Divform",children:_.jsxs("form",{onSubmit:u,children:[_.jsx("h1",{children:"Login"}),_.jsxs("div",{children:[_.jsx("label",{children:"Email"}),_.jsx("input",{type:"email",required:"",onChange:c=>n(c.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Senha"}),_.jsx("input",{type:"password",name:"",id:"",required:"",onChange:c=>i(c.target.value)})]}),_.jsx("button",{type:"submit",children:o===!0?"Carregando...":"Entrar"}),_.jsxs("p",{children:["Ou ",_.jsx(Bt,{to:"/signup",children:"cadastre-se"})]})]})}),_.jsx("div",{className:"img",children:_.jsx("img",{src:F3,alt:""})})]})}const j3="https://guilhermesella.github.io/app_coordinates/assets/signup-89f45dbd.svg";function B3(){const[t,e]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState(""),{signUp:l,loadingAuth:u,setLoadingAuth:c}=T.useContext(Bo),h=jo();async function d(f){f.preventDefault(),t!==""&&n!==""&&i!==""&&o!==""&&i===o?await l(t,n,i).then(()=>{h("/home"),Ce.success("Bem vindo!")}).catch(m=>{console.log(m.code),m.code==="auth/weak-password"?(Ce.error("Senha muito fraca! "),c(!1)):m.code==="auth/email-already-in-use"&&(Ce.error("Email já cadastrado!"),c(!1))}):i!==o?Ce.error("As senhas não coincidem!"):Ce.error("Preencha todos os campos!")}return _.jsxs(ix,{children:[_.jsx(eu,{}),_.jsx("div",{className:"Divform",children:_.jsxs("form",{onSubmit:d,children:[_.jsx("h1",{children:"Cadastre-se"}),_.jsxs("div",{children:[_.jsx("label",{children:"Nome"}),_.jsx("input",{type:"text",id:"txtnome",onChange:f=>e(f.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Email"}),_.jsx("input",{type:"text",id:"txtemail",onChange:f=>r(f.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Senha"}),_.jsx("input",{type:"password",name:"",id:"txtpass",onChange:f=>s(f.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Confirmar senha"}),_.jsx("input",{type:"password",name:"",id:"",onChange:f=>a(f.target.value)})]}),_.jsx("button",{type:"submit",children:u===!0?"Carregando...":"Criar"}),_.jsxs("p",{children:["Já possui uma conta? ",_.jsx(Bt,{to:"/signin",children:"Login"})]})]})}),_.jsx("div",{className:"img",children:_.jsx("img",{src:j3,alt:""})})]})}const z3=Kt.main`
  background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 0vh 25vh 0vh;
`,V3=Kt.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    overflow: hidden;

    label{
        width: 250px;
        height: 230px;
        display: flex;
        flex-direction: column-reverse;
        
        justify-content: space-between;
        cursor: pointer;
        align-items: center;
    }

     img{
        width:250px;
        border-radius: 50%;
        height:230px;
       
     }
     label input{
      display: none;
       
     }
     span{
        color: #9E30F4;
        font-weight: bold;
        text-decoration: underline;
        top: 20px;
        position: relative;
        transition: 0.9s;
     }
     label:hover span{
        transform: scale(1.1);
     }
`,H3=Kt.div`
  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;

    h1{
        text-align: center;
        font-size: 1.7rem;
        color: #9E30F4;
    }

    div{
        width: 90%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    div label{
        color: #9E30F4;
        font-weight: bold;
        font-size: 18px;
        pointer-events: none;
    }


    div input{
        padding: 10px;
        background-color: transparent;
        color:  ${t=>t.theme==="dark"?"white":"black"} ;
        font-size: 1.1rem;
        outline: none;
        border: none;
        border-bottom: 1px solid #9E30F4;
      
    }

   

    .divToggleTheme{
        padding: 20px 0 70px 0  ;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
       
    }
    .toggleTheme{
        cursor: pointer;
        padding: 15px 30px;
        font-size: 1.1rem;
        border-radius: 12px;
        border: none;
        background-color: ${t=>t.theme==="light"?"#0a0a0aea":"rgba(195, 171, 255, 0.919)"};
        color:  white ;
    }

    .saveButton{
        cursor: pointer;
        padding: 15px 50px;
        border-radius: 10px;
        font-weight: bold;
        background-color: #9E30F4;
        color: white;
        border: none;
        font-size: 1.2rem;
    }

   
`,q3="https://guilhermesella.github.io/app_coordinates/assets/avatar-9bcaa191.png";function W3(t){const{user:e,UserStorage:n}=T.useContext(Bo),{theme:r,toggleTheme:i}=T.useContext(Qn),s=JSON.parse(localStorage.getItem("@userStorage")),[o,a]=T.useState(s.nome),[l,u]=T.useState(s.email),[c,h]=T.useState(s.imgUrl),[d,f]=T.useState(null);async function m(){const y=s.uid,p=O$(U$,`images/${y}/${d}`);N$(p,d).then(w=>{P$(w.ref).then(async g=>{let S=g;const x=vo(hs,"users",y);await Hw(x,{imgUrl:S,nome:o}).then(()=>{let A={nome:o,email:l,imgUrl:c,logado:!0,uid:s.uid,theme:r};n(A)})})})}async function v(){d===null&&o!==""?await Hw(vo(hs,"users",s.uid),{nome:o,theme:r}).then(()=>{let y={nome:o,email:l,imgUrl:c,logado:!0,uid:s.uid,theme:r};n(y),Ce.success("Perfil atualizado!")}):o!==""&&d!==null&&m()}function E(y){if(y.target.files[0]){const p=y.target.files[0];console.log(p),p.type==="image/jpeg"||p.type==="image/png"?(f(p),h(URL.createObjectURL(p))):(h(null),f(null))}}return _.jsxs(z3,{theme:r,children:[_.jsx(V3,{children:_.jsxs("label",{children:[_.jsx("span",{children:"Alterar avatar"}),_.jsx("input",{type:"file",accept:"image/*",onChange:E}),c===null?_.jsx("img",{src:q3,alt:"Foto de perfil"}):_.jsx("img",{src:c,alt:"Foto de perfil",width:250,height:250})]})}),_.jsxs(H3,{theme:r,children:[_.jsx("h1",{children:"Informações pessoais"}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Nome:"}),_.jsx("input",{type:"text",defaultValue:o,onChange:y=>a(y.target.value),id:""})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Email:"}),_.jsx("input",{type:"email",defaultValue:l,onChange:y=>u(y.target.value),id:""})]}),_.jsxs("div",{className:"divToggleTheme",children:[_.jsx("h1",{children:"Preferências"}),_.jsx("button",{className:"toggleTheme",onClick:i,children:r==="light"?"Dark":"Light"})]}),_.jsx("button",{className:"saveButton",onClick:v,children:"Salvar"})]})]})}const K3="https://guilhermesella.github.io/app_coordinates/assets/404-dfb3de82.png",G3=Kt.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    img{
        width: 90%;
        max-width: 500px;
    }
`;function Q3(){return _.jsxs(G3,{children:[_.jsx("img",{src:K3,alt:""}),_.jsx("h1",{children:"Page not found"}),_.jsxs("p",{children:["Back to ",_.jsx(Bt,{to:"/home",children:"Home"})," "]})]})}const Y3=Kt.main`
    height: ${t=>t.load===!0?"100vh":"none"};
    width: 100%;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 45vh;
    padding-top: 5vh;
    color: ${t=>t.theme==="light"?"black":"white"};

    h1{
        padding-bottom: 4vh;
       
    }
    h1 b{
        color: #9E30F4;
    }

    .container{
        border-radius: 5px;
        width: 90vw;
        max-width: 550px;
        padding: 20px ;
        display: flex;
        gap: 10px;
        flex-direction: column;
        border: 2px solid  ${t=>t.theme==="light"?"black":"white"};;
       
    }

    .container h2, p{
        color: #9E30F4;
    }
    .container h2 b{
        color: ${t=>t.theme==="light"?"black":"white"};
    }
    .container p b{
        color: ${t=>t.theme==="light"?"black":"white"};
    }

    .container .options{
        display: flex;
        align-items: center;
        padding: 10px 0px;
        gap: 30px;
    }
    .container .options button{
       color: #9E30F4;
        cursor: pointer;
        background: transparent;
        font-weight: bold;
        border: none;
        border-radius: 7px;
        font-size: 1rem;
        text-decoration: underline;
    }
    .container .options a{
        color: #9E30F4;
        font-weight: bold;
    }
`,X3=Kt.div`
    position: relative;
    top: 12vh;
    display:flex ;
    flex-direction: column;
    align-items: center;
    padding: 7vh 0;
    text-align: center;
    img{
        width: 90vw;
        
        max-width: 400px;
    }

    h1{

    }
    a{
        color: #9E30F4;
        font-weight: bold;
    }
`;function J3(t){const{theme:e}=T.useContext(Qn);T.useState(5);const[n,r]=T.useState(!1),[i,s]=T.useState(!0),[o,a]=T.useState([]);async function l(u){const c=vo(hs,"coordinates",u);await pD(c).then(()=>{Ce.success("Registro deletado!")})}return T.useEffect(()=>{async function u(){const c=JSON.parse(localStorage.getItem("@userStorage")),h=BC(hs,"coordinates"),d=oD(h,aD("userId","==",c.uid));gD(d,f=>{let m=[];f.forEach(v=>{m.push({id:v.id,adress:v.data().adress,lat:v.data().lat,lng:v.data().lng,srcMap:v.data().srcMap})}),a(m),m.length==0?r(!0):r(!1),s(!1)})}u()},[]),_.jsx(_.Fragment,{children:_.jsxs(Y3,{load:i,theme:e,children:[_.jsxs("h1",{children:["Página ",_.jsx("b",{children:"Salvos"})]}),n===!0?_.jsx(_.Fragment,{}):i===!0?_.jsx(_.Fragment,{}):_.jsx(Bt,{to:"/home/coordinates",children:"Adicionar"}),i===!0?_.jsx("h2",{children:"Buscando Dados..."}):n===!0?_.jsxs(X3,{children:[_.jsx("h1",{children:"Você não possui nenhum registro!"}),_.jsx(Bt,{to:"/home/coordinates",children:"Começar"})]}):o.map(u=>_.jsx("div",{children:_.jsxs("div",{className:"container",children:[_.jsxs("h2",{children:["Endereço: ",_.jsx("b",{children:u.adress})]}),_.jsxs("p",{children:["Latitude: ",_.jsx("b",{children:u.lat})]}),_.jsxs("p",{children:["Longitude: ",_.jsx("b",{children:u.lng})]}),_.jsxs("div",{className:"options",children:[_.jsx("button",{onClick:()=>l(u.id),children:"Excluir"}),_.jsx("a",{target:"_blank",href:`https://www.google.com/maps/search/?api=1&query=${u.lat}%2C${u.lng}`,children:"Maps"})]})]},u.id)}))]})})}function Z3({children:t}){return localStorage.getItem("@userStorage","logado")?t:_.jsx(ck,{to:"/"})}const e9=t4([{path:"/",element:_.jsx($3,{}),errorElement:_.jsx(Q3,{})},{path:"/signin",element:_.jsx(U3,{})},{path:"/signup",element:_.jsx(B3,{})},{path:"/home",element:_.jsx(Z3,{children:_.jsx(DU,{})}),children:[{path:"/home",element:_.jsx(zU,{})},{path:"/home/coordinates",element:_.jsx(O3,{})},{path:"/home/account",element:_.jsx(W3,{})},{path:"/home/saved",element:_.jsx(J3,{})}]}],{basename:"/app_coordinates/"}),t9=new uj;Jf.createRoot(document.getElementById("root")).render(_.jsx(Ye.StrictMode,{children:_.jsx(j$,{children:_.jsx(k4,{children:_.jsx(pj,{client:t9,children:_.jsx(WF,{router:e9})})})})}));
