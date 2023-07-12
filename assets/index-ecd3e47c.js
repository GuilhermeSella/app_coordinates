function Ak(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function am(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r1={exports:{}},zc={},i1={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),Pk=Symbol.for("react.portal"),Dk=Symbol.for("react.fragment"),Nk=Symbol.for("react.strict_mode"),Ok=Symbol.for("react.profiler"),bk=Symbol.for("react.provider"),Lk=Symbol.for("react.context"),Mk=Symbol.for("react.forward_ref"),$k=Symbol.for("react.suspense"),Fk=Symbol.for("react.memo"),Uk=Symbol.for("react.lazy"),Oy=Symbol.iterator;function jk(t){return t===null||typeof t!="object"?null:(t=Oy&&t[Oy]||t["@@iterator"],typeof t=="function"?t:null)}var s1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o1=Object.assign,a1={};function so(t,e,n){this.props=t,this.context=e,this.refs=a1,this.updater=n||s1}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l1(){}l1.prototype=so.prototype;function lm(t,e,n){this.props=t,this.context=e,this.refs=a1,this.updater=n||s1}var um=lm.prototype=new l1;um.constructor=lm;o1(um,so.prototype);um.isPureReactComponent=!0;var by=Array.isArray,u1=Object.prototype.hasOwnProperty,cm={current:null},c1={key:!0,ref:!0,__self:!0,__source:!0};function h1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u1.call(e,r)&&!c1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xa,type:t,key:s,ref:o,props:i,_owner:cm.current}}function zk(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function Bk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ly=/\/+/g;function ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bk(""+t.key):e.toString(36)}function du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case Pk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ld(o,0):r,by(i)?(n="",t!=null&&(n=t.replace(Ly,"$&/")+"/"),du(i,e,n,"",function(u){return u})):i!=null&&(hm(i)&&(i=zk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ly,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",by(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ld(s,a);o+=du(s,e,n,l,i)}else if(l=jk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ld(s,a++),o+=du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bl(t,e,n){if(t==null)return t;var r=[],i=0;return du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Vk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},fu={transition:null},Hk={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:fu,ReactCurrentOwner:cm};pe.Children={map:bl,forEach:function(t,e,n){bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bl(t,function(){e++}),e},toArray:function(t){return bl(t,function(e){return e})||[]},only:function(t){if(!hm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=so;pe.Fragment=Dk;pe.Profiler=Ok;pe.PureComponent=lm;pe.StrictMode=Nk;pe.Suspense=$k;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=o1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)u1.call(e,l)&&!c1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xa,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:Lk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bk,_context:t},t.Consumer=t};pe.createElement=h1;pe.createFactory=function(t){var e=h1.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:Mk,render:t}};pe.isValidElement=hm;pe.lazy=function(t){return{$$typeof:Uk,_payload:{_status:-1,_result:t},_init:Vk}};pe.memo=function(t,e){return{$$typeof:Fk,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(t,e){return qt.current.useCallback(t,e)};pe.useContext=function(t){return qt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return qt.current.useEffect(t,e)};pe.useId=function(){return qt.current.useId()};pe.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return qt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};pe.useRef=function(t){return qt.current.useRef(t)};pe.useState=function(t){return qt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return qt.current.useTransition()};pe.version="18.2.0";i1.exports=pe;var x=i1.exports;const Nn=am(x),qk=Ak({__proto__:null,default:Nn},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kk=x,Wk=Symbol.for("react.element"),Gk=Symbol.for("react.fragment"),Qk=Object.prototype.hasOwnProperty,Yk=Kk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jk={key:!0,ref:!0,__self:!0,__source:!0};function d1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qk.call(e,r)&&!Jk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Wk,type:t,key:s,ref:o,props:i,_owner:Yk.current}}zc.Fragment=Gk;zc.jsx=d1;zc.jsxs=d1;r1.exports=zc;var S=r1.exports,pf={},f1={exports:{}},dn={},p1={exports:{}},m1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var G=D.length;D.push(B);e:for(;0<G;){var ye=G-1>>>1,F=D[ye];if(0<i(F,B))D[ye]=B,D[G]=F,G=ye;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],G=D.pop();if(G!==B){D[0]=G;e:for(var ye=0,F=D.length,j=F>>>1;ye<j;){var $=2*(ye+1)-1,Q=D[$],_=$+1,de=D[_];if(0>i(Q,G))_<F&&0>i(de,Q)?(D[ye]=de,D[_]=G,ye=_):(D[ye]=Q,D[$]=G,ye=$);else if(_<F&&0>i(de,G))D[ye]=de,D[_]=G,ye=_;else break e}}return B}function i(D,B){var G=D.sortIndex-B.sortIndex;return G!==0?G:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(D){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function y(D){if(v=!1,w(D),!p)if(n(l)!==null)p=!0,De(C);else{var B=n(u);B!==null&&Ne(y,B.startTime-D)}}function C(D,B){p=!1,v&&(v=!1,g(L),L=-1),f=!0;var G=d;try{for(w(B),h=n(l);h!==null&&(!(h.expirationTime>B)||D&&!Oe());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var F=ye(h.expirationTime<=B);B=t.unstable_now(),typeof F=="function"?h.callback=F:h===n(l)&&r(l),w(B)}else r(l);h=n(l)}if(h!==null)var j=!0;else{var $=n(u);$!==null&&Ne(y,$.startTime-B),j=!1}return j}finally{h=null,d=G,f=!1}}var R=!1,A=null,L=-1,W=5,K=-1;function Oe(){return!(t.unstable_now()-K<W)}function ie(){if(A!==null){var D=t.unstable_now();K=D;var B=!0;try{B=A(!0,D)}finally{B?Pe():(R=!1,A=null)}}else R=!1}var Pe;if(typeof m=="function")Pe=function(){m(ie)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Ce=be.port2;be.port1.onmessage=ie,Pe=function(){Ce.postMessage(null)}}else Pe=function(){E(ie,0)};function De(D){A=D,R||(R=!0,Pe())}function Ne(D,B){L=E(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,De(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var G=d;d=B;try{return D()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=d;d=D;try{return B()}finally{d=G}},t.unstable_scheduleCallback=function(D,B,G){var ye=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ye+G:ye):G=ye,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=G+F,D={id:c++,callback:B,priorityLevel:D,startTime:G,expirationTime:F,sortIndex:-1},G>ye?(D.sortIndex=G,e(u,D),n(l)===null&&D===n(u)&&(v?(g(L),L=-1):v=!0,Ne(y,G-ye))):(D.sortIndex=F,e(l,D),p||f||(p=!0,De(C))),D},t.unstable_shouldYield=Oe,t.unstable_wrapCallback=function(D){var B=d;return function(){var G=d;d=B;try{return D.apply(this,arguments)}finally{d=G}}}})(m1);p1.exports=m1;var Xk=p1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=x,un=Xk;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y1=new Set,ha={};function Xi(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(ha[t]=e,t=0;t<e.length;t++)y1.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=Object.prototype.hasOwnProperty,Zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,My={},$y={};function eI(t){return mf.call($y,t)?!0:mf.call(My,t)?!1:Zk.test(t)?$y[t]=!0:(My[t]=!0,!1)}function tI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nI(t,e,n,r){if(e===null||typeof e>"u"||tI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var dm=/[\-:]([a-z])/g;function fm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dm,fm);xt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dm,fm);xt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dm,fm);xt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pm(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nI(e,n,i,r)&&(n=null),r||i===null?eI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),cs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),mm=Symbol.for("react.strict_mode"),gf=Symbol.for("react.profiler"),v1=Symbol.for("react.provider"),w1=Symbol.for("react.context"),gm=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),vf=Symbol.for("react.suspense_list"),ym=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),E1=Symbol.for("react.offscreen"),Fy=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var Qe=Object.assign,ud;function Fo(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var cd=!1;function hd(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function rI(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case cs:return"Portal";case gf:return"Profiler";case mm:return"StrictMode";case yf:return"Suspense";case vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w1:return(t.displayName||"Context")+".Consumer";case v1:return(t._context.displayName||"Context")+".Provider";case gm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ym:return e=t.displayName||null,e!==null?e:wf(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return wf(t(e))}catch{}}return null}function iI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wf(e);case 8:return e===mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sI(t){var e=S1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ml(t){t._valueTracker||(t._valueTracker=sI(t))}function _1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=S1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ef(t,e){var n=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T1(t,e){e=e.checked,e!=null&&pm(t,"checked",e,!1)}function Sf(t,e){T1(t,e);var n=ui(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||Uu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ui(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Uo(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ui(n)}}function C1(t,e){var n=ui(e.value),r=ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function By(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $l,I1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oI=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){oI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function x1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function R1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=x1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aI=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kf(t,e){if(e){if(aI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function If(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function vm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,Rs=null,As=null;function Vy(t){if(t=tl(t)){if(typeof Rf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Kc(e),Rf(t.stateNode,t.type,e))}}function A1(t){Rs?As?As.push(t):As=[t]:Rs=t}function P1(){if(Rs){var t=Rs,e=As;if(As=Rs=null,Vy(t),e)for(t=0;t<e.length;t++)Vy(e[t])}}function D1(t,e){return t(e)}function N1(){}var dd=!1;function O1(t,e,n){if(dd)return t(e,n);dd=!0;try{return D1(t,e,n)}finally{dd=!1,(Rs!==null||As!==null)&&(N1(),P1())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var r=Kc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var Af=!1;if(Sr)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Af=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Af=!1}function lI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qo=!1,ju=null,zu=!1,Pf=null,uI={onError:function(t){Qo=!0,ju=t}};function cI(t,e,n,r,i,s,o,a,l){Qo=!1,ju=null,lI.apply(uI,arguments)}function hI(t,e,n,r,i,s,o,a,l){if(cI.apply(this,arguments),Qo){if(Qo){var u=ju;Qo=!1,ju=null}else throw Error(O(198));zu||(zu=!0,Pf=u)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hy(t){if(Zi(t)!==t)throw Error(O(188))}function dI(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hy(i),t;if(s===r)return Hy(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function L1(t){return t=dI(t),t!==null?M1(t):null}function M1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=M1(t);if(e!==null)return e;t=t.sibling}return null}var $1=un.unstable_scheduleCallback,qy=un.unstable_cancelCallback,fI=un.unstable_shouldYield,pI=un.unstable_requestPaint,et=un.unstable_now,mI=un.unstable_getCurrentPriorityLevel,wm=un.unstable_ImmediatePriority,F1=un.unstable_UserBlockingPriority,Bu=un.unstable_NormalPriority,gI=un.unstable_LowPriority,U1=un.unstable_IdlePriority,Bc=null,Gn=null;function yI(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:EI,vI=Math.log,wI=Math.LN2;function EI(t){return t>>>=0,t===0?32:31-(vI(t)/wI|0)|0}var Fl=64,Ul=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jo(a):(s&=o,s!==0&&(r=jo(s)))}else o=n&~i,o!==0?r=jo(o):s!==0&&(r=jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function SI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _I(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j1(){var t=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function TI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Em(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function z1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B1,Sm,V1,H1,q1,Nf=!1,jl=[],Yr=null,Jr=null,Xr=null,pa=new Map,ma=new Map,zr=[],CI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ky(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=tl(e),e!==null&&Sm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kI(t,e,n,r,i){switch(e){case"focusin":return Yr=Io(Yr,t,e,n,r,i),!0;case"dragenter":return Jr=Io(Jr,t,e,n,r,i),!0;case"mouseover":return Xr=Io(Xr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return pa.set(s,Io(pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ma.set(s,Io(ma.get(s)||null,t,e,n,r,i)),!0}return!1}function K1(t){var e=Ii(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=b1(n),e!==null){t.blockedOn=e,q1(t.priority,function(){V1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xf=r,n.target.dispatchEvent(r),xf=null}else return e=tl(n),e!==null&&Sm(e),t.blockedOn=n,!1;e.shift()}return!0}function Wy(t,e,n){pu(t)&&n.delete(e)}function II(){Nf=!1,Yr!==null&&pu(Yr)&&(Yr=null),Jr!==null&&pu(Jr)&&(Jr=null),Xr!==null&&pu(Xr)&&(Xr=null),pa.forEach(Wy),ma.forEach(Wy)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,II)))}function ga(t){function e(i){return xo(i,t)}if(0<jl.length){xo(jl[0],t);for(var n=1;n<jl.length;n++){var r=jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yr!==null&&xo(Yr,t),Jr!==null&&xo(Jr,t),Xr!==null&&xo(Xr,t),pa.forEach(e),ma.forEach(e),n=0;n<zr.length;n++)r=zr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zr.length&&(n=zr[0],n.blockedOn===null);)K1(n),n.blockedOn===null&&zr.shift()}var Ps=Pr.ReactCurrentBatchConfig,Hu=!0;function xI(t,e,n,r){var i=xe,s=Ps.transition;Ps.transition=null;try{xe=1,_m(t,e,n,r)}finally{xe=i,Ps.transition=s}}function RI(t,e,n,r){var i=xe,s=Ps.transition;Ps.transition=null;try{xe=4,_m(t,e,n,r)}finally{xe=i,Ps.transition=s}}function _m(t,e,n,r){if(Hu){var i=Of(t,e,n,r);if(i===null)Td(t,e,r,qu,n),Ky(t,r);else if(kI(i,t,e,n,r))r.stopPropagation();else if(Ky(t,r),e&4&&-1<CI.indexOf(t)){for(;i!==null;){var s=tl(i);if(s!==null&&B1(s),s=Of(t,e,n,r),s===null&&Td(t,e,r,qu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Td(t,e,r,null,n)}}var qu=null;function Of(t,e,n,r){if(qu=null,t=vm(r),t=Ii(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=b1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qu=t,null}function W1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mI()){case wm:return 1;case F1:return 4;case Bu:case gI:return 16;case U1:return 536870912;default:return 16}default:return 16}}var Wr=null,Tm=null,mu=null;function G1(){if(mu)return mu;var t,e=Tm,n=e.length,r,i="value"in Wr?Wr.value:Wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return mu=i.slice(t,1<r?1-r:void 0)}function gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function Gy(){return!1}function fn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:Gy,this.isPropagationStopped=Gy,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cm=fn(oo),el=Qe({},oo,{view:0,detail:0}),AI=fn(el),pd,md,Ro,Vc=Qe({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:km,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(pd=t.screenX-Ro.screenX,md=t.screenY-Ro.screenY):md=pd=0,Ro=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),Qy=fn(Vc),PI=Qe({},Vc,{dataTransfer:0}),DI=fn(PI),NI=Qe({},el,{relatedTarget:0}),gd=fn(NI),OI=Qe({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),bI=fn(OI),LI=Qe({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MI=fn(LI),$I=Qe({},oo,{data:0}),Yy=fn($I),FI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jI[t])?!!e[t]:!1}function km(){return zI}var BI=Qe({},el,{key:function(t){if(t.key){var e=FI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:km,charCode:function(t){return t.type==="keypress"?gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VI=fn(BI),HI=Qe({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jy=fn(HI),qI=Qe({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:km}),KI=fn(qI),WI=Qe({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=fn(WI),QI=Qe({},Vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YI=fn(QI),JI=[9,13,27,32],Im=Sr&&"CompositionEvent"in window,Yo=null;Sr&&"documentMode"in document&&(Yo=document.documentMode);var XI=Sr&&"TextEvent"in window&&!Yo,Q1=Sr&&(!Im||Yo&&8<Yo&&11>=Yo),Xy=String.fromCharCode(32),Zy=!1;function Y1(t,e){switch(t){case"keyup":return JI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function ZI(t,e){switch(t){case"compositionend":return J1(e);case"keypress":return e.which!==32?null:(Zy=!0,Xy);case"textInput":return t=e.data,t===Xy&&Zy?null:t;default:return null}}function ex(t,e){if(ds)return t==="compositionend"||!Im&&Y1(t,e)?(t=G1(),mu=Tm=Wr=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q1&&e.locale!=="ko"?null:e.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tx[t.type]:e==="textarea"}function X1(t,e,n,r){A1(r),e=Ku(e,"onChange"),0<e.length&&(n=new Cm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Jo=null,ya=null;function nx(t){uE(t,0)}function Hc(t){var e=ms(t);if(_1(e))return t}function rx(t,e){if(t==="change")return e}var Z1=!1;if(Sr){var yd;if(Sr){var vd="oninput"in document;if(!vd){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),vd=typeof tv.oninput=="function"}yd=vd}else yd=!1;Z1=yd&&(!document.documentMode||9<document.documentMode)}function nv(){Jo&&(Jo.detachEvent("onpropertychange",eE),ya=Jo=null)}function eE(t){if(t.propertyName==="value"&&Hc(ya)){var e=[];X1(e,ya,t,vm(t)),O1(nx,e)}}function ix(t,e,n){t==="focusin"?(nv(),Jo=e,ya=n,Jo.attachEvent("onpropertychange",eE)):t==="focusout"&&nv()}function sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hc(ya)}function ox(t,e){if(t==="click")return Hc(e)}function ax(t,e){if(t==="input"||t==="change")return Hc(e)}function lx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:lx;function va(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mf.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iv(t,e){var n=rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rv(n)}}function tE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nE(){for(var t=window,e=Uu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uu(t.document)}return e}function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ux(t){var e=nE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tE(n.ownerDocument.documentElement,n)){if(r!==null&&xm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=iv(n,s);var o=iv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cx=Sr&&"documentMode"in document&&11>=document.documentMode,fs=null,bf=null,Xo=null,Lf=!1;function sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||fs==null||fs!==Uu(r)||(r=fs,"selectionStart"in r&&xm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xo&&va(Xo,r)||(Xo=r,r=Ku(bf,"onSelect"),0<r.length&&(e=new Cm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fs)))}function Bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},wd={},rE={};Sr&&(rE=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function qc(t){if(wd[t])return wd[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rE)return wd[t]=e[n];return t}var iE=qc("animationend"),sE=qc("animationiteration"),oE=qc("animationstart"),aE=qc("transitionend"),lE=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(t,e){lE.set(t,e),Xi(e,[t])}for(var Ed=0;Ed<ov.length;Ed++){var Sd=ov[Ed],hx=Sd.toLowerCase(),dx=Sd[0].toUpperCase()+Sd.slice(1);mi(hx,"on"+dx)}mi(iE,"onAnimationEnd");mi(sE,"onAnimationIteration");mi(oE,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(aE,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function av(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hI(r,e,void 0,t),t.currentTarget=null}function uE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;av(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;av(i,a,u),s=l}}}if(zu)throw t=Pf,zu=!1,Pf=null,t}function Fe(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||(cE(e,t,2,!1),n.add(r))}function _d(t,e,n){var r=0;e&&(r|=4),cE(n,t,r,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[Vl]){t[Vl]=!0,y1.forEach(function(n){n!=="selectionchange"&&(fx.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,_d("selectionchange",!1,e))}}function cE(t,e,n,r){switch(W1(e)){case 1:var i=xI;break;case 4:i=RI;break;default:i=_m}n=i.bind(null,e,n,t),i=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Td(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ii(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}O1(function(){var u=s,c=vm(n),h=[];e:{var d=lE.get(t);if(d!==void 0){var f=Cm,p=t;switch(t){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":f=VI;break;case"focusin":p="focus",f=gd;break;case"focusout":p="blur",f=gd;break;case"beforeblur":case"afterblur":f=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Qy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=DI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=KI;break;case iE:case sE:case oE:f=bI;break;case aE:f=GI;break;case"scroll":f=AI;break;case"wheel":f=YI;break;case"copy":case"cut":case"paste":f=MI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Jy}var v=(e&4)!==0,E=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,w;m!==null;){w=m;var y=w.stateNode;if(w.tag===5&&y!==null&&(w=y,g!==null&&(y=fa(m,g),y!=null&&v.push(Ea(m,y,w)))),E)break;m=m.return}0<v.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==xf&&(p=n.relatedTarget||n.fromElement)&&(Ii(p)||p[_r]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?Ii(p):null,p!==null&&(E=Zi(p),p!==E||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(v=Qy,y="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=Jy,y="onPointerLeave",g="onPointerEnter",m="pointer"),E=f==null?d:ms(f),w=p==null?d:ms(p),d=new v(y,m+"leave",f,n,c),d.target=E,d.relatedTarget=w,y=null,Ii(c)===u&&(v=new v(g,m+"enter",p,n,c),v.target=w,v.relatedTarget=E,y=v),E=y,f&&p)t:{for(v=f,g=p,m=0,w=v;w;w=os(w))m++;for(w=0,y=g;y;y=os(y))w++;for(;0<m-w;)v=os(v),m--;for(;0<w-m;)g=os(g),w--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=os(v),g=os(g)}v=null}else v=null;f!==null&&lv(h,d,f,v,!1),p!==null&&E!==null&&lv(h,E,p,v,!0)}}e:{if(d=u?ms(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=rx;else if(ev(d))if(Z1)C=ax;else{C=sx;var R=ix}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=ox);if(C&&(C=C(t,u))){X1(h,C,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&_f(d,"number",d.value)}switch(R=u?ms(u):window,t){case"focusin":(ev(R)||R.contentEditable==="true")&&(fs=R,bf=u,Xo=null);break;case"focusout":Xo=bf=fs=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,sv(h,n,c);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":sv(h,n,c)}var A;if(Im)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ds?Y1(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Q1&&n.locale!=="ko"&&(ds||L!=="onCompositionStart"?L==="onCompositionEnd"&&ds&&(A=G1()):(Wr=c,Tm="value"in Wr?Wr.value:Wr.textContent,ds=!0)),R=Ku(u,L),0<R.length&&(L=new Yy(L,t,null,n,c),h.push({event:L,listeners:R}),A?L.data=A:(A=J1(n),A!==null&&(L.data=A)))),(A=XI?ZI(t,n):ex(t,n))&&(u=Ku(u,"onBeforeInput"),0<u.length&&(c=new Yy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}uE(h,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ku(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fa(t,n),s!=null&&r.unshift(Ea(t,s,i)),s=fa(t,e),s!=null&&r.push(Ea(t,s,i))),t=t.return}return r}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fa(n,s),l!=null&&o.unshift(Ea(n,l,a))):i||(l=fa(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var px=/\r\n?/g,mx=/\u0000|\uFFFD/g;function uv(t){return(typeof t=="string"?t:""+t).replace(px,`
`).replace(mx,"")}function Hl(t,e,n){if(e=uv(e),uv(t)!==e&&n)throw Error(O(425))}function Wu(){}var Mf=null,$f=null;function Ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,gx=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(t){return cv.resolve(null).then(t).catch(vx)}:Uf;function vx(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ga(e)}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),zn="__reactFiber$"+ao,Sa="__reactProps$"+ao,_r="__reactContainer$"+ao,jf="__reactEvents$"+ao,wx="__reactListeners$"+ao,Ex="__reactHandles$"+ao;function Ii(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hv(t);t!==null;){if(n=t[zn])return n;t=hv(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[zn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Kc(t){return t[Sa]||null}var zf=[],gs=-1;function gi(t){return{current:t}}function je(t){0>gs||(t.current=zf[gs],zf[gs]=null,gs--)}function Me(t,e){gs++,zf[gs]=t.current,t.current=e}var ci={},Ft=gi(ci),Xt=gi(!1),Fi=ci;function zs(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function Gu(){je(Xt),je(Ft)}function dv(t,e,n){if(Ft.current!==ci)throw Error(O(168));Me(Ft,e),Me(Xt,n)}function hE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,iI(t)||"Unknown",i));return Qe({},n,r)}function Qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,Fi=Ft.current,Me(Ft,t),Me(Xt,Xt.current),!0}function fv(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=hE(t,e,Fi),r.__reactInternalMemoizedMergedChildContext=t,je(Xt),je(Ft),Me(Ft,t)):je(Xt),Me(Xt,n)}var hr=null,Wc=!1,kd=!1;function dE(t){hr===null?hr=[t]:hr.push(t)}function Sx(t){Wc=!0,dE(t)}function yi(){if(!kd&&hr!==null){kd=!0;var t=0,e=xe;try{var n=hr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hr=null,Wc=!1}catch(i){throw hr!==null&&(hr=hr.slice(t+1)),$1(wm,yi),i}finally{xe=e,kd=!1}}return null}var ys=[],vs=0,Yu=null,Ju=0,vn=[],wn=0,Ui=null,dr=1,fr="";function Ti(t,e){ys[vs++]=Ju,ys[vs++]=Yu,Yu=t,Ju=e}function fE(t,e,n){vn[wn++]=dr,vn[wn++]=fr,vn[wn++]=Ui,Ui=t;var r=dr;t=fr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dr=1<<32-On(e)+i|n<<i|r,fr=s+t}else dr=1<<s|n<<i|r,fr=t}function Rm(t){t.return!==null&&(Ti(t,1),fE(t,1,0))}function Am(t){for(;t===Yu;)Yu=ys[--vs],ys[vs]=null,Ju=ys[--vs],ys[vs]=null;for(;t===Ui;)Ui=vn[--wn],vn[wn]=null,fr=vn[--wn],vn[wn]=null,dr=vn[--wn],vn[wn]=null}var on=null,sn=null,Ke=!1,Pn=null;function pE(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,sn=Zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ui!==null?{id:dr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,sn=null,!0):!1;default:return!1}}function Bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vf(t){if(Ke){var e=sn;if(e){var n=e;if(!pv(t,e)){if(Bf(t))throw Error(O(418));e=Zr(n.nextSibling);var r=on;e&&pv(t,e)?pE(r,n):(t.flags=t.flags&-4097|2,Ke=!1,on=t)}}else{if(Bf(t))throw Error(O(418));t.flags=t.flags&-4097|2,Ke=!1,on=t}}}function mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function ql(t){if(t!==on)return!1;if(!Ke)return mv(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ff(t.type,t.memoizedProps)),e&&(e=sn)){if(Bf(t))throw mE(),Error(O(418));for(;e;)pE(t,e),e=Zr(e.nextSibling)}if(mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=on?Zr(t.stateNode.nextSibling):null;return!0}function mE(){for(var t=sn;t;)t=Zr(t.nextSibling)}function Bs(){sn=on=null,Ke=!1}function Pm(t){Pn===null?Pn=[t]:Pn.push(t)}var _x=Pr.ReactCurrentBatchConfig;function xn(t,e){if(t&&t.defaultProps){e=Qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Xu=gi(null),Zu=null,ws=null,Dm=null;function Nm(){Dm=ws=Zu=null}function Om(t){var e=Xu.current;je(Xu),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Zu=t,Dm=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Dm!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Zu===null)throw Error(O(308));ws=t,Zu.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var xi=null;function bm(t){xi===null?xi=[t]:xi.push(t)}function gE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tr(t,r)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Lm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tr(t,n)}return i=r.interleaved,i===null?(e.next=e,bm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tr(t,n)}function yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Em(t,n)}}function gv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,v=a;switch(d=e,f=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=Qe({},h,d);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zi|=o,t.lanes=o,t.memoizedState=h}}function yv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var vE=new g1.Component().refs;function qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gc={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ni(t),s=vr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(bn(e,t,i,r),yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ni(t),s=vr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(bn(e,t,i,r),yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=ni(t),i=vr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ei(t,i,r),e!==null&&(bn(e,t,r,n),yu(e,t,r))}};function vv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,r)||!va(i,s):!0}function wE(t,e,n){var r=!1,i=ci,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=Zt(e)?Fi:Ft.current,r=e.contextTypes,s=(r=r!=null)?zs(t,i):ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gc.enqueueReplaceState(e,e.state,null)}function Kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=vE,Lm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=Zt(e)?Fi:Ft.current,i.context=zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gc.enqueueReplaceState(i,i.state,null),ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===vE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Kl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ev(t){var e=t._init;return e(t._payload)}function EE(t){function e(g,m){if(t){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=ri(g,m),g.index=0,g.sibling=null,g}function s(g,m,w){return g.index=w,t?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,w,y){return m===null||m.tag!==6?(m=Nd(w,g.mode,y),m.return=g,m):(m=i(m,w),m.return=g,m)}function l(g,m,w,y){var C=w.type;return C===hs?c(g,m,w.props.children,y,w.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fr&&Ev(C)===m.type)?(y=i(m,w.props),y.ref=Ao(g,m,w),y.return=g,y):(y=Tu(w.type,w.key,w.props,null,g.mode,y),y.ref=Ao(g,m,w),y.return=g,y)}function u(g,m,w,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=Od(w,g.mode,y),m.return=g,m):(m=i(m,w.children||[]),m.return=g,m)}function c(g,m,w,y,C){return m===null||m.tag!==7?(m=Li(w,g.mode,y,C),m.return=g,m):(m=i(m,w),m.return=g,m)}function h(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Nd(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ll:return w=Tu(m.type,m.key,m.props,null,g.mode,w),w.ref=Ao(g,null,m),w.return=g,w;case cs:return m=Od(m,g.mode,w),m.return=g,m;case Fr:var y=m._init;return h(g,y(m._payload),w)}if(Uo(m)||Co(m))return m=Li(m,g.mode,w,null),m.return=g,m;Kl(g,m)}return null}function d(g,m,w,y){var C=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return C!==null?null:a(g,m,""+w,y);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ll:return w.key===C?l(g,m,w,y):null;case cs:return w.key===C?u(g,m,w,y):null;case Fr:return C=w._init,d(g,m,C(w._payload),y)}if(Uo(w)||Co(w))return C!==null?null:c(g,m,w,y,null);Kl(g,w)}return null}function f(g,m,w,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(w)||null,a(m,g,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ll:return g=g.get(y.key===null?w:y.key)||null,l(m,g,y,C);case cs:return g=g.get(y.key===null?w:y.key)||null,u(m,g,y,C);case Fr:var R=y._init;return f(g,m,w,R(y._payload),C)}if(Uo(y)||Co(y))return g=g.get(w)||null,c(m,g,y,C,null);Kl(m,y)}return null}function p(g,m,w,y){for(var C=null,R=null,A=m,L=m=0,W=null;A!==null&&L<w.length;L++){A.index>L?(W=A,A=null):W=A.sibling;var K=d(g,A,w[L],y);if(K===null){A===null&&(A=W);break}t&&A&&K.alternate===null&&e(g,A),m=s(K,m,L),R===null?C=K:R.sibling=K,R=K,A=W}if(L===w.length)return n(g,A),Ke&&Ti(g,L),C;if(A===null){for(;L<w.length;L++)A=h(g,w[L],y),A!==null&&(m=s(A,m,L),R===null?C=A:R.sibling=A,R=A);return Ke&&Ti(g,L),C}for(A=r(g,A);L<w.length;L++)W=f(A,g,L,w[L],y),W!==null&&(t&&W.alternate!==null&&A.delete(W.key===null?L:W.key),m=s(W,m,L),R===null?C=W:R.sibling=W,R=W);return t&&A.forEach(function(Oe){return e(g,Oe)}),Ke&&Ti(g,L),C}function v(g,m,w,y){var C=Co(w);if(typeof C!="function")throw Error(O(150));if(w=C.call(w),w==null)throw Error(O(151));for(var R=C=null,A=m,L=m=0,W=null,K=w.next();A!==null&&!K.done;L++,K=w.next()){A.index>L?(W=A,A=null):W=A.sibling;var Oe=d(g,A,K.value,y);if(Oe===null){A===null&&(A=W);break}t&&A&&Oe.alternate===null&&e(g,A),m=s(Oe,m,L),R===null?C=Oe:R.sibling=Oe,R=Oe,A=W}if(K.done)return n(g,A),Ke&&Ti(g,L),C;if(A===null){for(;!K.done;L++,K=w.next())K=h(g,K.value,y),K!==null&&(m=s(K,m,L),R===null?C=K:R.sibling=K,R=K);return Ke&&Ti(g,L),C}for(A=r(g,A);!K.done;L++,K=w.next())K=f(A,g,L,K.value,y),K!==null&&(t&&K.alternate!==null&&A.delete(K.key===null?L:K.key),m=s(K,m,L),R===null?C=K:R.sibling=K,R=K);return t&&A.forEach(function(ie){return e(g,ie)}),Ke&&Ti(g,L),C}function E(g,m,w,y){if(typeof w=="object"&&w!==null&&w.type===hs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ll:e:{for(var C=w.key,R=m;R!==null;){if(R.key===C){if(C=w.type,C===hs){if(R.tag===7){n(g,R.sibling),m=i(R,w.props.children),m.return=g,g=m;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fr&&Ev(C)===R.type){n(g,R.sibling),m=i(R,w.props),m.ref=Ao(g,R,w),m.return=g,g=m;break e}n(g,R);break}else e(g,R);R=R.sibling}w.type===hs?(m=Li(w.props.children,g.mode,y,w.key),m.return=g,g=m):(y=Tu(w.type,w.key,w.props,null,g.mode,y),y.ref=Ao(g,m,w),y.return=g,g=y)}return o(g);case cs:e:{for(R=w.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(g,m.sibling),m=i(m,w.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Od(w,g.mode,y),m.return=g,g=m}return o(g);case Fr:return R=w._init,E(g,m,R(w._payload),y)}if(Uo(w))return p(g,m,w,y);if(Co(w))return v(g,m,w,y);Kl(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,w),m.return=g,g=m):(n(g,m),m=Nd(w,g.mode,y),m.return=g,g=m),o(g)):n(g,m)}return E}var Vs=EE(!0),SE=EE(!1),nl={},Qn=gi(nl),_a=gi(nl),Ta=gi(nl);function Ri(t){if(t===nl)throw Error(O(174));return t}function Mm(t,e){switch(Me(Ta,e),Me(_a,t),Me(Qn,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cf(e,t)}je(Qn),Me(Qn,e)}function Hs(){je(Qn),je(_a),je(Ta)}function _E(t){Ri(Ta.current);var e=Ri(Qn.current),n=Cf(e,t.type);e!==n&&(Me(_a,t),Me(Qn,n))}function $m(t){_a.current===t&&(je(Qn),je(_a))}var We=gi(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function Fm(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var vu=Pr.ReactCurrentDispatcher,xd=Pr.ReactCurrentBatchConfig,ji=0,Ge=null,ut=null,gt=null,nc=!1,Zo=!1,Ca=0,Tx=0;function At(){throw Error(O(321))}function Um(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function jm(t,e,n,r,i,s){if(ji=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?xx:Rx,t=n(r,i),Zo){s=0;do{if(Zo=!1,Ca=0,25<=s)throw Error(O(301));s+=1,gt=ut=null,e.updateQueue=null,vu.current=Ax,t=n(r,i)}while(Zo)}if(vu.current=rc,e=ut!==null&&ut.next!==null,ji=0,gt=ut=Ge=null,nc=!1,e)throw Error(O(300));return t}function zm(){var t=Ca!==0;return Ca=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ge.memoizedState=gt=t:gt=gt.next=t,gt}function kn(){if(ut===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=gt===null?Ge.memoizedState:gt.next;if(e!==null)gt=e,ut=t;else{if(t===null)throw Error(O(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},gt===null?Ge.memoizedState=gt=t:gt=gt.next=t}return gt}function ka(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=kn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ji&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ge.lanes|=c,zi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ln(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ge.lanes|=s,zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=kn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ln(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function TE(){}function CE(t,e){var n=Ge,r=kn(),i=e(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,Bm(xE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,IE.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(O(349));ji&30||kE(n,e,i)}return i}function kE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function IE(t,e,n,r){e.value=n,e.getSnapshot=r,RE(e)&&AE(t)}function xE(t,e,n){return n(function(){RE(e)&&AE(t)})}function RE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function AE(t){var e=Tr(t,1);e!==null&&bn(e,t,1,-1)}function Sv(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=Ix.bind(null,Ge,t),[e.memoizedState,t]}function Ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function PE(){return kn().memoizedState}function wu(t,e,n,r){var i=jn();Ge.flags|=t,i.memoizedState=Ia(1|e,n,void 0,r===void 0?null:r)}function Qc(t,e,n,r){var i=kn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&Um(r,o.deps)){i.memoizedState=Ia(e,n,s,r);return}}Ge.flags|=t,i.memoizedState=Ia(1|e,n,s,r)}function _v(t,e){return wu(8390656,8,t,e)}function Bm(t,e){return Qc(2048,8,t,e)}function DE(t,e){return Qc(4,2,t,e)}function NE(t,e){return Qc(4,4,t,e)}function OE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bE(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,OE.bind(null,e,t),n)}function Vm(){}function LE(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Um(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ME(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Um(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $E(t,e,n){return ji&21?(Ln(n,e)||(n=j1(),Ge.lanes|=n,zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Cx(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=xd.transition;xd.transition={};try{t(!1),e()}finally{xe=n,xd.transition=r}}function FE(){return kn().memoizedState}function kx(t,e,n){var r=ni(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},UE(t))jE(e,n);else if(n=gE(t,e,n,r),n!==null){var i=Vt();bn(n,t,r,i),zE(n,e,r)}}function Ix(t,e,n){var r=ni(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(UE(t))jE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,o)){var l=e.interleaved;l===null?(i.next=i,bm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=gE(t,e,i,r),n!==null&&(i=Vt(),bn(n,t,r,i),zE(n,e,r))}}function UE(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function jE(t,e){Zo=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Em(t,n)}}var rc={readContext:Cn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},xx={readContext:Cn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:_v,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wu(4194308,4,OE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return wu(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kx.bind(null,Ge,t),[r.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Sv,useDebugValue:Vm,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Sv(!1),e=t[0];return t=Cx.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ge,i=jn();if(Ke){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),yt===null)throw Error(O(349));ji&30||kE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_v(xE.bind(null,r,s,t),[t]),r.flags|=2048,Ia(9,IE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=yt.identifierPrefix;if(Ke){var n=fr,r=dr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rx={readContext:Cn,useCallback:LE,useContext:Cn,useEffect:Bm,useImperativeHandle:bE,useInsertionEffect:DE,useLayoutEffect:NE,useMemo:ME,useReducer:Rd,useRef:PE,useState:function(){return Rd(ka)},useDebugValue:Vm,useDeferredValue:function(t){var e=kn();return $E(e,ut.memoizedState,t)},useTransition:function(){var t=Rd(ka)[0],e=kn().memoizedState;return[t,e]},useMutableSource:TE,useSyncExternalStore:CE,useId:FE,unstable_isNewReconciler:!1},Ax={readContext:Cn,useCallback:LE,useContext:Cn,useEffect:Bm,useImperativeHandle:bE,useInsertionEffect:DE,useLayoutEffect:NE,useMemo:ME,useReducer:Ad,useRef:PE,useState:function(){return Ad(ka)},useDebugValue:Vm,useDeferredValue:function(t){var e=kn();return ut===null?e.memoizedState=t:$E(e,ut.memoizedState,t)},useTransition:function(){var t=Ad(ka)[0],e=kn().memoizedState;return[t,e]},useMutableSource:TE,useSyncExternalStore:CE,useId:FE,unstable_isNewReconciler:!1};function qs(t,e){try{var n="",r=e;do n+=rI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function BE(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sc||(sc=!0,rp=r),Wf(t,e)},n}function VE(t,e,n){n=vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wf(t,e),typeof r!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Px;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hx.bind(null,t,e,n),e.then(t,t))}function Cv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t)}var Dx=Pr.ReactCurrentOwner,Jt=!1;function zt(t,e,n,r){e.child=t===null?SE(e,null,n,r):Vs(e,t.child,n,r)}function Iv(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=jm(t,e,n,r,s,i),n=zm(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Ke&&n&&Rm(e),e.flags|=1,zt(t,e,r,i),e.child)}function xv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,HE(t,e,s,r,i)):(t=Tu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,r)&&t.ref===e.ref)return Cr(t,e,i)}return e.flags|=1,t=ri(s,r),t.ref=e.ref,t.return=e,e.child=t}function HE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(va(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Cr(t,e,i)}return Gf(t,e,n,r,i)}function qE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Ss,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Ss,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Ss,rn),rn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Ss,rn),rn|=r;return zt(t,e,i,n),e.child}function KE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=Zt(n)?Fi:Ft.current;return s=zs(e,s),Ds(e,i),n=jm(t,e,n,r,s,i),r=zm(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Ke&&r&&Rm(e),e.flags|=1,zt(t,e,n,i),e.child)}function Rv(t,e,n,r,i){if(Zt(n)){var s=!0;Qu(e)}else s=!1;if(Ds(e,i),e.stateNode===null)Eu(t,e),wE(e,n,r),Kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=Zt(n)?Fi:Ft.current,u=zs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wv(e,o,r,u),Ur=!1;var d=e.memoizedState;o.state=d,ec(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Xt.current||Ur?(typeof c=="function"&&(qf(e,n,c,r),l=e.memoizedState),(a=Ur||vv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:xn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=Zt(n)?Fi:Ft.current,l=zs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&wv(e,o,r,l),Ur=!1,d=e.memoizedState,o.state=d,ec(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||Xt.current||Ur?(typeof f=="function"&&(qf(e,n,f,r),p=e.memoizedState),(u=Ur||vv(e,n,u,r,d,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Qf(t,e,n,r,s,i)}function Qf(t,e,n,r,i,s){KE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fv(e,n,!1),Cr(t,e,s);r=e.stateNode,Dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&fv(e,n,!0),e.child}function WE(t){var e=t.stateNode;e.pendingContext?dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(t,e.context,!1),Mm(t,e.containerInfo)}function Av(t,e,n,r,i){return Bs(),Pm(i),e.flags|=256,zt(t,e,n,r),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function GE(t,e,n){var r=e.pendingProps,i=We.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(We,i&1),t===null)return Vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,r,0,null),t=Li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Yf,t):Hm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Nx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ri(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ri(a,s):(s=Li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,r}return s=t.child,t=s.sibling,r=ri(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hm(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,n,r){return r!==null&&Pm(r),Vs(e,t.child,null,n),t=Hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(O(422))),Wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xc({mode:"visible",children:r.children},i,0,null),s=Li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return Wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Pd(s,r,void 0),Wl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tr(t,i),bn(r,t,i,-1))}return Ym(),r=Pd(Error(O(421))),Wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,sn=Zr(i.nextSibling),on=e,Ke=!0,Pn=null,t!==null&&(vn[wn++]=dr,vn[wn++]=fr,vn[wn++]=Ui,dr=t.id,fr=t.overflow,Ui=e),e=Hm(e,r.children),e.flags|=4096,e)}function Pv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hf(t.return,e,n)}function Dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function QE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=We.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pv(t,n,e);else if(t.tag===19)Pv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(We,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dd(e,!0,n,null,s);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ox(t,e,n){switch(e.tag){case 3:WE(e),Bs();break;case 5:_E(e);break;case 1:Zt(e.type)&&Qu(e);break;case 4:Mm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(We,We.current&1),e.flags|=128,null):n&e.child.childLanes?GE(t,e,n):(Me(We,We.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Me(We,We.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return QE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(We,We.current),r)break;return null;case 22:case 23:return e.lanes=0,qE(t,e,n)}return Cr(t,e,n)}var YE,Xf,JE,XE;YE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};JE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ri(Qn.current);var s=null;switch(n){case"input":i=Ef(t,i),r=Ef(t,r),s=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),s=[];break;case"textarea":i=Tf(t,i),r=Tf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wu)}kf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ha.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ha.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};XE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Po(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bx(t,e,n){var r=e.pendingProps;switch(Am(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return Zt(e.type)&&Gu(),Pt(e),null;case 3:return r=e.stateNode,Hs(),je(Xt),je(Ft),Fm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(op(Pn),Pn=null))),Xf(t,e),Pt(e),null;case 5:$m(e);var i=Ri(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)JE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return Pt(e),null}if(t=Ri(Qn.current),ql(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zn]=e,r[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<zo.length;i++)Fe(zo[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Uy(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":zy(r,s),Fe("invalid",r)}kf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,a,t),i=["children",""+a]):ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Ml(r),jy(r,s,!0);break;case"textarea":Ml(r),By(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zn]=e,t[Sa]=r,YE(t,e,!1,!1),e.stateNode=t;e:{switch(o=If(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<zo.length;i++)Fe(zo[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":Uy(t,r),i=Ef(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":zy(t,r),i=Tf(t,r),Fe("invalid",t);break;default:i=r}kf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?R1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&I1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Fe("scroll",t):l!=null&&pm(t,s,l,o))}switch(n){case"input":Ml(t),jy(t,r,!1);break;case"textarea":Ml(t),By(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ui(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)XE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=Ri(Ta.current),Ri(Qn.current),ql(e)){if(r=e.stateNode,n=e.memoizedProps,r[zn]=e,(s=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:Hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=e,e.stateNode=r}return Pt(e),null;case 13:if(je(We),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&sn!==null&&e.mode&1&&!(e.flags&128))mE(),Bs(),e.flags|=98560,s=!1;else if(s=ql(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[zn]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),s=!1}else Pn!==null&&(op(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||We.current&1?ht===0&&(ht=3):Ym())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return Hs(),Xf(t,e),t===null&&wa(e.stateNode.containerInfo),Pt(e),null;case 10:return Om(e.type._context),Pt(e),null;case 17:return Zt(e.type)&&Gu(),Pt(e),null;case 19:if(je(We),s=e.memoizedState,s===null)return Pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Po(s,!1);else{if(ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,Po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(We,We.current&1|2),e.child}t=t.sibling}s.tail!==null&&et()>Ks&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304)}else{if(!r)if(t=tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ke)return Pt(e),null}else 2*et()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=et(),e.sibling=null,n=We.current,Me(We,r?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return Qm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function Lx(t,e){switch(Am(e),e.tag){case 1:return Zt(e.type)&&Gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),je(Xt),je(Ft),Fm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $m(e),null;case 13:if(je(We),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(We),null;case 4:return Hs(),null;case 10:return Om(e.type._context),null;case 22:case 23:return Qm(),null;case 24:return null;default:return null}}var Gl=!1,Ot=!1,Mx=typeof WeakSet=="function"?WeakSet:Set,z=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(t,e,r)}else n.current=null}function Zf(t,e,n){try{n()}catch(r){Je(t,e,r)}}var Dv=!1;function $x(t,e){if(Mf=Hu,t=nE(),xm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:t,selectionRange:n},Hu=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,E=p.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:xn(e.type,v),E);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(y){Je(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return p=Dv,Dv=!1,p}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zf(e,n,s)}i=i.next}while(i!==r)}}function Yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ZE(t){var e=t.alternate;e!==null&&(t.alternate=null,ZE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[Sa],delete e[jf],delete e[wx],delete e[Ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eS(t){return t.tag===5||t.tag===3||t.tag===4}function Nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wu));else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}function np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}var _t=null,Rn=!1;function Lr(t,e,n){for(n=n.child;n!==null;)tS(t,e,n),n=n.sibling}function tS(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:Ot||Es(n,e);case 6:var r=_t,i=Rn;_t=null,Lr(t,e,n),_t=r,Rn=i,_t!==null&&(Rn?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Rn?(t=_t,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),ga(t)):Cd(_t,n.stateNode));break;case 4:r=_t,i=Rn,_t=n.stateNode.containerInfo,Rn=!0,Lr(t,e,n),_t=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zf(n,e,o),i=i.next}while(i!==r)}Lr(t,e,n);break;case 1:if(!Ot&&(Es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Je(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,Lr(t,e,n),Ot=r):Lr(t,e,n);break;default:Lr(t,e,n)}}function Ov(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mx),e.forEach(function(r){var i=Kx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,Rn=!1;break e;case 3:_t=a.stateNode.containerInfo,Rn=!0;break e;case 4:_t=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(_t===null)throw Error(O(160));tS(s,o,i),_t=null,Rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nS(e,t),e=e.sibling}function nS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Un(t),r&4){try{ea(3,t,t.return),Yc(3,t)}catch(v){Je(t,t.return,v)}try{ea(5,t,t.return)}catch(v){Je(t,t.return,v)}}break;case 1:In(e,t),Un(t),r&512&&n!==null&&Es(n,n.return);break;case 5:if(In(e,t),Un(t),r&512&&n!==null&&Es(n,n.return),t.flags&32){var i=t.stateNode;try{da(i,"")}catch(v){Je(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&T1(i,s),If(a,o);var u=If(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?R1(i,h):c==="dangerouslySetInnerHTML"?I1(i,h):c==="children"?da(i,h):pm(i,c,h,u)}switch(a){case"input":Sf(i,s);break;case"textarea":C1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?xs(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?xs(i,!!s.multiple,s.defaultValue,!0):xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Sa]=s}catch(v){Je(t,t.return,v)}}break;case 6:if(In(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Je(t,t.return,v)}}break;case 3:if(In(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(v){Je(t,t.return,v)}break;case 4:In(e,t),Un(t);break;case 13:In(e,t),Un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wm=et())),r&4&&Ov(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||c,In(e,t),Ot=u):In(e,t),Un(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(z=t,c=t.child;c!==null;){for(h=z=c;z!==null;){switch(d=z,f=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:Es(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(v){Je(r,n,v)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){Lv(h);continue}}f!==null?(f.return=d,z=f):Lv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x1("display",o))}catch(v){Je(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Je(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:In(e,t),Un(t),r&4&&Ov(t);break;case 21:break;default:In(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eS(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(da(i,""),r.flags&=-33);var s=Nv(t);np(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nv(t);tp(t,a,o);break;default:throw Error(O(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fx(t,e,n){z=t,rS(t)}function rS(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=Gl;var u=Ot;if(Gl=o,(Ot=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?Mv(i):l!==null?(l.return=o,z=l):Mv(i);for(;s!==null;)z=s,rS(s),s=s.sibling;z=i,Gl=a,Ot=u}bv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):bv(t)}}function bv(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Yc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ot||e.flags&512&&ep(e)}catch(d){Je(e,e.return,d)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Lv(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Mv(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yc(4,e)}catch(l){Je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Je(e,i,l)}}var s=e.return;try{ep(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{ep(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var Ux=Math.ceil,ic=Pr.ReactCurrentDispatcher,qm=Pr.ReactCurrentOwner,_n=Pr.ReactCurrentBatchConfig,we=0,yt=null,it=null,kt=0,rn=0,Ss=gi(0),ht=0,xa=null,zi=0,Jc=0,Km=0,ta=null,Qt=null,Wm=0,Ks=1/0,cr=null,sc=!1,rp=null,ti=null,Ql=!1,Gr=null,oc=0,na=0,ip=null,Su=-1,_u=0;function Vt(){return we&6?et():Su!==-1?Su:Su=et()}function ni(t){return t.mode&1?we&2&&kt!==0?kt&-kt:_x.transition!==null?(_u===0&&(_u=j1()),_u):(t=xe,t!==0||(t=window.event,t=t===void 0?16:W1(t.type)),t):1}function bn(t,e,n,r){if(50<na)throw na=0,ip=null,Error(O(185));Za(t,n,r),(!(we&2)||t!==yt)&&(t===yt&&(!(we&2)&&(Jc|=n),ht===4&&Br(t,kt)),en(t,r),n===1&&we===0&&!(e.mode&1)&&(Ks=et()+500,Wc&&yi()))}function en(t,e){var n=t.callbackNode;_I(t,e);var r=Vu(t,t===yt?kt:0);if(r===0)n!==null&&qy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qy(n),e===1)t.tag===0?Sx($v.bind(null,t)):dE($v.bind(null,t)),yx(function(){!(we&6)&&yi()}),n=null;else{switch(z1(r)){case 1:n=wm;break;case 4:n=F1;break;case 16:n=Bu;break;case 536870912:n=U1;break;default:n=Bu}n=hS(n,iS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iS(t,e){if(Su=-1,_u=0,we&6)throw Error(O(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var r=Vu(t,t===yt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ac(t,r);else{e=r;var i=we;we|=2;var s=oS();(yt!==t||kt!==e)&&(cr=null,Ks=et()+500,bi(t,e));do try{Bx();break}catch(a){sS(t,a)}while(1);Nm(),ic.current=s,we=i,it!==null?e=0:(yt=null,kt=0,e=ht)}if(e!==0){if(e===2&&(i=Df(t),i!==0&&(r=i,e=sp(t,i))),e===1)throw n=xa,bi(t,0),Br(t,r),en(t,et()),n;if(e===6)Br(t,r);else{if(i=t.current.alternate,!(r&30)&&!jx(i)&&(e=ac(t,r),e===2&&(s=Df(t),s!==0&&(r=s,e=sp(t,s))),e===1))throw n=xa,bi(t,0),Br(t,r),en(t,et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:Ci(t,Qt,cr);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=Wm+500-et(),10<e)){if(Vu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(Ci.bind(null,t,Qt,cr),e);break}Ci(t,Qt,cr);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ux(r/1960))-r,10<r){t.timeoutHandle=Uf(Ci.bind(null,t,Qt,cr),r);break}Ci(t,Qt,cr);break;case 5:Ci(t,Qt,cr);break;default:throw Error(O(329))}}}return en(t,et()),t.callbackNode===n?iS.bind(null,t):null}function sp(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(bi(t,e).flags|=256),t=ac(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&op(e)),t}function op(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~Km,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function $v(t){if(we&6)throw Error(O(327));Ns();var e=Vu(t,0);if(!(e&1))return en(t,et()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var r=Df(t);r!==0&&(e=r,n=sp(t,r))}if(n===1)throw n=xa,bi(t,0),Br(t,e),en(t,et()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ci(t,Qt,cr),en(t,et()),null}function Gm(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(Ks=et()+500,Wc&&yi())}}function Bi(t){Gr!==null&&Gr.tag===0&&!(we&6)&&Ns();var e=we;we|=1;var n=_n.transition,r=xe;try{if(_n.transition=null,xe=1,t)return t()}finally{xe=r,_n.transition=n,we=e,!(we&6)&&yi()}}function Qm(){rn=Ss.current,je(Ss)}function bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gx(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(Am(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gu();break;case 3:Hs(),je(Xt),je(Ft),Fm();break;case 5:$m(r);break;case 4:Hs();break;case 13:je(We);break;case 19:je(We);break;case 10:Om(r.type._context);break;case 22:case 23:Qm()}n=n.return}if(yt=t,it=t=ri(t.current,null),kt=rn=e,ht=0,xa=null,Km=Jc=zi=0,Qt=ta=null,xi!==null){for(e=0;e<xi.length;e++)if(n=xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xi=null}return t}function sS(t,e){do{var n=it;try{if(Nm(),vu.current=rc,nc){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nc=!1}if(ji=0,gt=ut=Ge=null,Zo=!1,Ca=0,qm.current=null,n===null||n.return===null){ht=1,xa=e,it=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Cv(o);if(f!==null){f.flags&=-257,kv(f,o,a,s,e),f.mode&1&&Tv(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var v=new Set;v.add(l),e.updateQueue=v}else p.add(l);break e}else{if(!(e&1)){Tv(s,u,e),Ym();break e}l=Error(O(426))}}else if(Ke&&a.mode&1){var E=Cv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),kv(E,o,a,s,e),Pm(qs(l,a));break e}}s=l=qs(l,a),ht!==4&&(ht=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=BE(s,l,e);gv(s,g);break e;case 1:a=l;var m=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ti===null||!ti.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=VE(s,a,e);gv(s,y);break e}}s=s.return}while(s!==null)}lS(n)}catch(C){e=C,it===n&&n!==null&&(it=n=n.return);continue}break}while(1)}function oS(){var t=ic.current;return ic.current=rc,t===null?rc:t}function Ym(){(ht===0||ht===3||ht===2)&&(ht=4),yt===null||!(zi&268435455)&&!(Jc&268435455)||Br(yt,kt)}function ac(t,e){var n=we;we|=2;var r=oS();(yt!==t||kt!==e)&&(cr=null,bi(t,e));do try{zx();break}catch(i){sS(t,i)}while(1);if(Nm(),we=n,ic.current=r,it!==null)throw Error(O(261));return yt=null,kt=0,ht}function zx(){for(;it!==null;)aS(it)}function Bx(){for(;it!==null&&!fI();)aS(it)}function aS(t){var e=cS(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?lS(t):it=e,qm.current=null}function lS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lx(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ht=6,it=null;return}}else if(n=bx(n,e,rn),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);ht===0&&(ht=5)}function Ci(t,e,n){var r=xe,i=_n.transition;try{_n.transition=null,xe=1,Vx(t,e,n,r)}finally{_n.transition=i,xe=r}return null}function Vx(t,e,n,r){do Ns();while(Gr!==null);if(we&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TI(t,s),t===yt&&(it=yt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,hS(Bu,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=xe;xe=1;var a=we;we|=4,qm.current=null,$x(t,n),nS(n,t),ux($f),Hu=!!Mf,$f=Mf=null,t.current=n,Fx(n),pI(),we=a,xe=o,_n.transition=s}else t.current=n;if(Ql&&(Ql=!1,Gr=t,oc=i),s=t.pendingLanes,s===0&&(ti=null),yI(n.stateNode),en(t,et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sc)throw sc=!1,t=rp,rp=null,t;return oc&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===ip?na++:(na=0,ip=t):na=0,yi(),null}function Ns(){if(Gr!==null){var t=z1(oc),e=_n.transition,n=xe;try{if(_n.transition=null,xe=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,oc=0,we&6)throw Error(O(331));var i=we;for(we|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,z=h;else for(;z!==null;){c=z;var d=c.sibling,f=c.return;if(ZE(c),c===u){z=null;break}if(d!==null){d.return=f,z=d;break}z=f}}}var p=s.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,z=g;break e}z=s.return}}var m=t.current;for(z=m;z!==null;){o=z;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,z=w;else e:for(o=m;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yc(9,a)}}catch(C){Je(a,a.return,C)}if(a===o){z=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,z=y;break e}z=a.return}}if(we=i,yi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Bc,t)}catch{}r=!0}return r}finally{xe=n,_n.transition=e}}return!1}function Fv(t,e,n){e=qs(n,e),e=BE(t,e,1),t=ei(t,e,1),e=Vt(),t!==null&&(Za(t,1,e),en(t,e))}function Je(t,e,n){if(t.tag===3)Fv(t,t,n);else for(;e!==null;){if(e.tag===3){Fv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ti===null||!ti.has(r))){t=qs(n,t),t=VE(e,t,1),e=ei(e,t,1),t=Vt(),e!==null&&(Za(e,1,t),en(e,t));break}}e=e.return}}function Hx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(kt&n)===n&&(ht===4||ht===3&&(kt&130023424)===kt&&500>et()-Wm?bi(t,0):Km|=n),en(t,e)}function uS(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=Vt();t=Tr(t,e),t!==null&&(Za(t,e,n),en(t,n))}function qx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uS(t,n)}function Kx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),uS(t,n)}var cS;cS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Ox(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,Ke&&e.flags&1048576&&fE(e,Ju,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Eu(t,e),t=e.pendingProps;var i=zs(e,Ft.current);Ds(e,n),i=jm(null,e,r,t,i,n);var s=zm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)?(s=!0,Qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lm(e),i.updater=Gc,e.stateNode=i,i._reactInternals=e,Kf(e,r,t,n),e=Qf(null,e,r,!0,s,n)):(e.tag=0,Ke&&s&&Rm(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Eu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Gx(r),t=xn(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=Rv(null,e,r,t,n);break e;case 11:e=Iv(null,e,r,t,n);break e;case 14:e=xv(null,e,r,xn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Rv(t,e,r,i,n);case 3:e:{if(WE(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yE(t,e),ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qs(Error(O(423)),e),e=Av(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(O(424)),e),e=Av(t,e,r,n,i);break e}else for(sn=Zr(e.stateNode.containerInfo.firstChild),on=e,Ke=!0,Pn=null,n=SE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),r===i){e=Cr(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return _E(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ff(r,i)?o=null:s!==null&&Ff(r,s)&&(e.flags|=32),KE(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return GE(t,e,n);case 4:return Mm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vs(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Iv(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(Xu,r._currentValue),r._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===i.children&&!Xt.current){e=Cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=vr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=Cn(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=xn(r,e.pendingProps),i=xn(r.type,i),xv(t,e,r,i,n);case 15:return HE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Eu(t,e),e.tag=1,Zt(r)?(t=!0,Qu(e)):t=!1,Ds(e,n),wE(e,r,i),Kf(e,r,i,n),Qf(null,e,r,!0,t,n);case 19:return QE(t,e,n);case 22:return qE(t,e,n)}throw Error(O(156,e.tag))};function hS(t,e){return $1(t,e)}function Wx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new Wx(t,e,n,r)}function Jm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gx(t){if(typeof t=="function")return Jm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gm)return 11;if(t===ym)return 14}return 2}function ri(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Li(n.children,i,s,e);case mm:o=8,i|=8;break;case gf:return t=Sn(12,n,e,i|2),t.elementType=gf,t.lanes=s,t;case yf:return t=Sn(13,n,e,i),t.elementType=yf,t.lanes=s,t;case vf:return t=Sn(19,n,e,i),t.elementType=vf,t.lanes=s,t;case E1:return Xc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v1:o=10;break e;case w1:o=9;break e;case gm:o=11;break e;case ym:o=14;break e;case Fr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Li(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function Xc(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=E1,t.lanes=n,t.stateNode={isHidden:!1},t}function Nd(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xm(t,e,n,r,i,s,o,a,l){return t=new Qx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lm(s),t}function Yx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dS(t){if(!t)return ci;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(Zt(n))return hE(t,n,e)}return e}function fS(t,e,n,r,i,s,o,a,l){return t=Xm(n,r,!0,t,i,s,o,a,l),t.context=dS(null),n=t.current,r=Vt(),i=ni(n),s=vr(r,i),s.callback=e??null,ei(n,s,i),t.current.lanes=i,Za(t,i,r),en(t,r),t}function Zc(t,e,n,r){var i=e.current,s=Vt(),o=ni(i);return n=dS(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ei(i,e,o),t!==null&&(bn(t,i,o,s),yu(t,i,o)),o}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zm(t,e){Uv(t,e),(t=t.alternate)&&Uv(t,e)}function Jx(){return null}var pS=typeof reportError=="function"?reportError:function(t){console.error(t)};function eg(t){this._internalRoot=t}eh.prototype.render=eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Zc(t,e,null,null)};eh.prototype.unmount=eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bi(function(){Zc(null,t,null,null)}),e[_r]=null}};function eh(t){this._internalRoot=t}eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=H1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zr.length&&e!==0&&e<zr[n].priority;n++);zr.splice(n,0,t),n===0&&K1(t)}};function tg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jv(){}function Xx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=lc(o);s.call(u)}}var o=fS(e,r,t,0,null,!1,!1,"",jv);return t._reactRootContainer=o,t[_r]=o.current,wa(t.nodeType===8?t.parentNode:t),Bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lc(l);a.call(u)}}var l=Xm(t,0,!1,null,null,!1,!1,"",jv);return t._reactRootContainer=l,t[_r]=l.current,wa(t.nodeType===8?t.parentNode:t),Bi(function(){Zc(e,l,n,r)}),l}function nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=lc(o);a.call(l)}}Zc(e,o,t,i)}else o=Xx(n,e,t,i,r);return lc(o)}B1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(Em(e,n|1),en(e,et()),!(we&6)&&(Ks=et()+500,yi()))}break;case 13:Bi(function(){var r=Tr(t,1);if(r!==null){var i=Vt();bn(r,t,1,i)}}),Zm(t,1)}};Sm=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=Vt();bn(e,t,134217728,n)}Zm(t,134217728)}};V1=function(t){if(t.tag===13){var e=ni(t),n=Tr(t,e);if(n!==null){var r=Vt();bn(n,t,e,r)}Zm(t,e)}};H1=function(){return xe};q1=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};Rf=function(t,e,n){switch(e){case"input":if(Sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kc(r);if(!i)throw Error(O(90));_1(r),Sf(r,i)}}}break;case"textarea":C1(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};D1=Gm;N1=Bi;var Zx={usingClientEntryPoint:!1,Events:[tl,ms,Kc,A1,P1,Gm]},Do={findFiberByHostInstance:Ii,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eR={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L1(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Bc=Yl.inject(eR),Gn=Yl}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tg(e))throw Error(O(200));return Yx(t,e,null,n)};dn.createRoot=function(t,e){if(!tg(t))throw Error(O(299));var n=!1,r="",i=pS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xm(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,wa(t.nodeType===8?t.parentNode:t),new eg(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=L1(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return Bi(t)};dn.hydrate=function(t,e,n){if(!th(e))throw Error(O(200));return nh(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!tg(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=pS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fS(e,null,t,1,n??null,i,!1,s,o),t[_r]=e.current,wa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eh(e)};dn.render=function(t,e,n){if(!th(e))throw Error(O(200));return nh(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!th(t))throw Error(O(40));return t._reactRootContainer?(Bi(function(){nh(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};dn.unstable_batchedUpdates=Gm;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!th(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return nh(t,e,n,!1,r)};dn.version="18.2.0-next-9e3b772b8-20220608";function mS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mS)}catch(t){console.error(t)}}mS(),f1.exports=dn;var gS=f1.exports;const tR=am(gS);var zv=gS;pf.createRoot=zv.createRoot,pf.hydrateRoot=zv.hydrateRoot;const vi=x.createContext(),nR=({children:t})=>{const[e,n]=x.useState("light");function r(){n(e==="light"?"dark":"light")}return S.jsx(vi.Provider,{value:{theme:e,toggleTheme:r},children:t})};/**
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
 */const yS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new iR;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sR=function(t){const e=yS(t);return vS.encodeByteArray(e,!0)},uc=function(t){return sR(t).replace(/\./g,"")},wS=function(t){try{return vS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aR=()=>oR().__FIREBASE_DEFAULTS__,lR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wS(t[1]);return e&&JSON.parse(e)},ng=()=>{try{return aR()||lR()||uR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ES=t=>{var e,n;return(n=(e=ng())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SS=t=>{const e=ES(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_S=()=>{var t;return(t=ng())===null||t===void 0?void 0:t.config},TS=t=>{var e;return(e=ng())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function CS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),a].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function dR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pR(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mR(){try{return typeof indexedDB=="object"}catch{return!1}}function gR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const yR="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yR,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ir(i,a,r)}}function vR(t,e){return t.replace(wR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bv(s)&&Bv(o)){if(!cc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bv(t){return t!==null&&typeof t=="object"}/**
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
 */function il(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SR(t,e){const n=new _R(t,e);return n.subscribe.bind(n)}class _R{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bd),i.error===void 0&&(i.error=bd),i.complete===void 0&&(i.complete=bd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bd(){}/**
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
 */function Ht(t){return t&&t._delegate?t._delegate:t}class hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ki="[DEFAULT]";/**
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
 */class CR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IR(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===ki?void 0:t}function IR(t){return t.instantiationMode==="EAGER"}/**
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
 */class xR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const RR={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},AR=_e.INFO,PR={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},DR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rg{constructor(e){this.name=e,this._logLevel=AR,this._logHandler=DR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const NR=(t,e)=>e.some(n=>t instanceof n);let Vv,Hv;function OR(){return Vv||(Vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bR(){return Hv||(Hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kS=new WeakMap,ap=new WeakMap,IS=new WeakMap,Ld=new WeakMap,ig=new WeakMap;function LR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kS.set(n,t)}).catch(()=>{}),ig.set(e,t),e}function MR(t){if(ap.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ap.set(t,e)}let lp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ap.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $R(t){lp=t(lp)}function FR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Md(this),e,...n);return IS.set(r,e.sort?e.sort():[e]),ii(r)}:bR().includes(t)?function(...e){return t.apply(Md(this),e),ii(kS.get(this))}:function(...e){return ii(t.apply(Md(this),e))}}function UR(t){return typeof t=="function"?FR(t):(t instanceof IDBTransaction&&MR(t),NR(t,OR())?new Proxy(t,lp):t)}function ii(t){if(t instanceof IDBRequest)return LR(t);if(Ld.has(t))return Ld.get(t);const e=UR(t);return e!==t&&(Ld.set(t,e),ig.set(e,t)),e}const Md=t=>ig.get(t);function jR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ii(o.result),l.oldVersion,l.newVersion,ii(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zR=["get","getKey","getAll","getAllKeys","count"],BR=["put","add","delete","clear"],$d=new Map;function qv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($d.get(e))return $d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $d.set(e,s),s}$R(t=>({...t,get:(e,n,r)=>qv(e,n)||t.get(e,n,r),has:(e,n)=>!!qv(e,n)||t.has(e,n)}));/**
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
 */class VR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const up="@firebase/app",Kv="0.9.13";/**
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
 */const Vi=new rg("@firebase/app"),qR="@firebase/app-compat",KR="@firebase/analytics-compat",WR="@firebase/analytics",GR="@firebase/app-check-compat",QR="@firebase/app-check",YR="@firebase/auth",JR="@firebase/auth-compat",XR="@firebase/database",ZR="@firebase/database-compat",eA="@firebase/functions",tA="@firebase/functions-compat",nA="@firebase/installations",rA="@firebase/installations-compat",iA="@firebase/messaging",sA="@firebase/messaging-compat",oA="@firebase/performance",aA="@firebase/performance-compat",lA="@firebase/remote-config",uA="@firebase/remote-config-compat",cA="@firebase/storage",hA="@firebase/storage-compat",dA="@firebase/firestore",fA="@firebase/firestore-compat",pA="firebase",mA="9.23.0";/**
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
 */const cp="[DEFAULT]",gA={[up]:"fire-core",[qR]:"fire-core-compat",[WR]:"fire-analytics",[KR]:"fire-analytics-compat",[QR]:"fire-app-check",[GR]:"fire-app-check-compat",[YR]:"fire-auth",[JR]:"fire-auth-compat",[XR]:"fire-rtdb",[ZR]:"fire-rtdb-compat",[eA]:"fire-fn",[tA]:"fire-fn-compat",[nA]:"fire-iid",[rA]:"fire-iid-compat",[iA]:"fire-fcm",[sA]:"fire-fcm-compat",[oA]:"fire-perf",[aA]:"fire-perf-compat",[lA]:"fire-rc",[uA]:"fire-rc-compat",[cA]:"fire-gcs",[hA]:"fire-gcs-compat",[dA]:"fire-fst",[fA]:"fire-fst-compat","fire-js":"fire-js",[pA]:"fire-js-all"};/**
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
 */const hc=new Map,hp=new Map;function yA(t,e){try{t.container.addComponent(e)}catch(n){Vi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hi(t){const e=t.name;if(hp.has(e))return Vi.debug(`There were multiple attempts to register component ${e}.`),!1;hp.set(e,t);for(const n of hc.values())yA(n,t);return!0}function rh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vA={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},si=new rl("app","Firebase",vA);/**
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
 */class wA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const es=mA;function xS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw si.create("bad-app-name",{appName:String(i)});if(n||(n=_S()),!n)throw si.create("no-options");const s=hc.get(i);if(s){if(cc(n,s.options)&&cc(r,s.config))return s;throw si.create("duplicate-app",{appName:i})}const o=new xR(i);for(const l of hp.values())o.addComponent(l);const a=new wA(n,r,o);return hc.set(i,a),a}function sg(t=cp){const e=hc.get(t);if(!e&&t===cp&&_S())return xS();if(!e)throw si.create("no-app",{appName:t});return e}function Yn(t,e,n){var r;let i=(r=gA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vi.warn(a.join(" "));return}Hi(new hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const EA="firebase-heartbeat-database",SA=1,Ra="firebase-heartbeat-store";let Fd=null;function RS(){return Fd||(Fd=jR(EA,SA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ra)}}}).catch(t=>{throw si.create("idb-open",{originalErrorMessage:t.message})})),Fd}async function _A(t){try{return await(await RS()).transaction(Ra).objectStore(Ra).get(AS(t))}catch(e){if(e instanceof ir)Vi.warn(e.message);else{const n=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vi.warn(n.message)}}}async function Wv(t,e){try{const r=(await RS()).transaction(Ra,"readwrite");await r.objectStore(Ra).put(e,AS(t)),await r.done}catch(n){if(n instanceof ir)Vi.warn(n.message);else{const r=si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vi.warn(r.message)}}}function AS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TA=1024,CA=30*24*60*60*1e3;class kA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=CA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gv(),{heartbeatsToSend:n,unsentEntries:r}=IA(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gv(){return new Date().toISOString().substring(0,10)}function IA(t,e=TA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mR()?gR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _A(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qv(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RA(t){Hi(new hi("platform-logger",e=>new VR(e),"PRIVATE")),Hi(new hi("heartbeat",e=>new kA(e),"PRIVATE")),Yn(up,Kv,t),Yn(up,Kv,"esm2017"),Yn("fire-js","")}RA("");function og(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function PS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AA=PS,DS=new rl("auth","Firebase",PS());/**
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
 */const dc=new rg("@firebase/auth");function PA(t,...e){dc.logLevel<=_e.WARN&&dc.warn(`Auth (${es}): ${t}`,...e)}function Cu(t,...e){dc.logLevel<=_e.ERROR&&dc.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function Mn(t,...e){throw ag(t,...e)}function Jn(t,...e){return ag(t,...e)}function DA(t,e,n){const r=Object.assign(Object.assign({},AA()),{[e]:n});return new rl("auth","Firebase",r).create(e,{appName:t.name})}function ag(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DS.create(t,...e)}function Z(t,e,...n){if(!t)throw ag(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function kr(t,e){t||pr(e)}/**
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
 */function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NA(){return Yv()==="http:"||Yv()==="https:"}function Yv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function OA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NA()||dR()||"connection"in navigator)?navigator.onLine:!0}function bA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,kr(n>e,"Short delay should be less than long delay!"),this.isMobile=hR()||fR()}get(){return OA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lg(t,e){kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class NS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MA=new sl(3e4,6e4);function lo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function uo(t,e,n,r,i={}){return OS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=il(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),NS.fetch()(bS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function OS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LA),e);try{const i=new $A(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw DA(t,c,u);Mn(t,c)}}catch(i){if(i instanceof ir)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function ol(t,e,n,r,i={}){const s=await uo(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?lg(t.config,i):`${t.config.apiScheme}://${i}`}class $A{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),MA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function FA(t,e){return uo(t,"POST","/v1/accounts:delete",e)}async function UA(t,e){return uo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jA(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=ug(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ra(Ud(i.auth_time)),issuedAtTime:ra(Ud(i.iat)),expirationTime:ra(Ud(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ud(t){return Number(t)*1e3}function ug(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=wS(n);return i?JSON.parse(i):(Cu("Failed to decode base64 JWT payload"),null)}catch(i){return Cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zA(t){const e=ug(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&BA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class LS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Aa(t,UA(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KA(s.providerUserInfo):[],a=qA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new LS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function HA(t){const e=Ht(t);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KA(t){return t.map(e=>{var{providerId:n}=e,r=og(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WA(t,e){const n=await OS(t,{},async()=>{const r=il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",NS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pa;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function Mr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=og(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new LS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jA(this,e)}reload(){return HA(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Aa(this,FA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:y,isAnonymous:C,providerData:R,stsTokenManager:A}=n;Z(w&&A,e,"internal-error");const L=Pa.fromJSON(this.name,A);Z(typeof w=="string",e,"internal-error"),Mr(h,e.name),Mr(d,e.name),Z(typeof y=="boolean",e,"internal-error"),Z(typeof C=="boolean",e,"internal-error"),Mr(f,e.name),Mr(p,e.name),Mr(v,e.name),Mr(E,e.name),Mr(g,e.name),Mr(m,e.name);const W=new Mi({uid:w,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:C,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:L,createdAt:g,lastLoginAt:m});return R&&Array.isArray(R)&&(W.providerData=R.map(K=>Object.assign({},K))),E&&(W._redirectEventId=E),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pa;i.updateFromServerResponse(n);const s=new Mi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fc(s),s}}/**
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
 */const Jv=new Map;function mr(t){kr(t instanceof Function,"Expected a class definition");let e=Jv.get(t);return e?(kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jv.set(t,e),e)}/**
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
 */class MS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}MS.type="NONE";const Xv=MS;/**
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
 */function ku(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ku(this.userKey,i.apiKey,s),this.fullPersistenceKey=ku("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(mr(Xv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||mr(Xv);const o=ku(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Mi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Os(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Os(s,e,r))}}/**
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
 */function Zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(US(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zS(e))return"Blackberry";if(BS(e))return"Webos";if(cg(e))return"Safari";if((e.includes("chrome/")||FS(e))&&!e.includes("edge/"))return"Chrome";if(jS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $S(t=Ut()){return/firefox\//i.test(t)}function cg(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FS(t=Ut()){return/crios\//i.test(t)}function US(t=Ut()){return/iemobile/i.test(t)}function jS(t=Ut()){return/android/i.test(t)}function zS(t=Ut()){return/blackberry/i.test(t)}function BS(t=Ut()){return/webos/i.test(t)}function ih(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GA(t=Ut()){var e;return ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QA(){return pR()&&document.documentMode===10}function VS(t=Ut()){return ih(t)||jS(t)||BS(t)||zS(t)||/windows phone/i.test(t)||US(t)}function YA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function HS(t,e=[]){let n;switch(t){case"Browser":n=Zv(Ut());break;case"Worker":n=`${Zv(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}async function qS(t,e){return uo(t,"GET","/v2/recaptchaConfig",lo(t,e))}function e0(t){return t!==void 0&&t.enterprise!==void 0}class KS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function JA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JA().appendChild(r)})}function XA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZA="https://www.google.com/recaptcha/enterprise.js?render=",eP="recaptcha-enterprise",tP="NO_RECAPTCHA";class GS{constructor(e){this.type=eP,this.auth=co(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new KS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;e0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(tP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&e0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}WS(ZA+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function pc(t,e,n,r=!1){const i=new GS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class nP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class rP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t0(this),this.idTokenSubscription=new t0(this),this.beforeStateQueue=new nP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}async initializeRecaptchaConfig(){const e=await qS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new KS(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new GS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function co(t){return Ht(t)}class t0{constructor(e){this.auth=e,this.observer=null,this.addObserver=SR(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function iP(t,e){const n=rh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cc(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function sP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oP(t,e,n){const r=co(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=QS(e),{host:o,port:a}=aP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lP()}function QS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aP(t){const e=QS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:n0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:n0(o)}}}function n0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function uP(t,e){return uo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function jd(t,e){return ol(t,"POST","/v1/accounts:signInWithPassword",lo(t,e))}/**
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
 */async function cP(t,e){return ol(t,"POST","/v1/accounts:signInWithEmailLink",lo(t,e))}async function hP(t,e){return ol(t,"POST","/v1/accounts:signInWithEmailLink",lo(t,e))}/**
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
 */class Da extends hg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Da(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Da(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await pc(e,r,"signInWithPassword");return jd(e,i)}else return jd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await pc(e,r,"signInWithPassword");return jd(e,s)}else return Promise.reject(i)});case"emailLink":return cP(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hP(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bs(t,e){return ol(t,"POST","/v1/accounts:signInWithIdp",lo(t,e))}/**
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
 */const dP="http://localhost";class qi extends hg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=og(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:dP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=il(n)}return e}}/**
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
 */function fP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pP(t){const e=Bo(Vo(t)).link,n=e?Bo(Vo(e)).deep_link_id:null,r=Bo(Vo(t)).deep_link_id;return(r?Bo(Vo(r)).link:null)||r||n||e||t}class dg{constructor(e){var n,r,i,s,o,a;const l=Bo(Vo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=fP((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pP(e);try{return new dg(n)}catch{return null}}}/**
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
 */class ho{constructor(){this.providerId=ho.PROVIDER_ID}static credential(e,n){return Da._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dg.parseLink(n);return Z(r,"argument-error"),Da._fromEmailAndCode(e,r.code,r.tenantId)}}ho.PROVIDER_ID="password";ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class YS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class al extends YS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vr extends al{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
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
 */class Hr extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.GOOGLE_SIGN_IN_METHOD="google.com";Hr.PROVIDER_ID="google.com";/**
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
 */class qr extends al{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
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
 */class Kr extends al{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */async function zd(t,e){return ol(t,"POST","/v1/accounts:signUp",lo(t,e))}/**
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
 */class Ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mi._fromIdTokenResponse(e,r,i),o=r0(r);return new Ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=r0(r);return new Ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function r0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mc extends ir{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mc(e,n,r,i)}}function JS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(t,s,e,r):s})}async function mP(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ki._forOperation(t,"link",r)}/**
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
 */async function gP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Aa(t,JS(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=ug(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Ki._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
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
 */async function XS(t,e,n=!1){const r="signIn",i=await JS(t,r,e),s=await Ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yP(t,e){return XS(co(t),e)}async function vP(t,e,n){var r;const i=co(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await pc(i,s,"signUpPassword");o=zd(i,u)}else o=zd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await pc(i,s,"signUpPassword");return zd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ki._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function wP(t,e,n){return yP(Ht(t),ho.credential(e,n))}function EP(t,e,n,r){return Ht(t).onIdTokenChanged(e,n,r)}function SP(t,e,n){return Ht(t).beforeAuthStateChanged(e,n)}const gc="__sak";/**
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
 */class ZS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _P(){const t=Ut();return cg(t)||ih(t)}const TP=1e3,CP=10;class e_ extends ZS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_P()&&YA(),this.fallbackToPolling=VS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const kP=e_;/**
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
 */class t_ extends ZS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
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
 */function IP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await IP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sh.receivers=[];/**
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
 */function fg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xn(){return window}function RP(t){Xn().location.href=t}/**
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
 */function r_(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function AP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DP(){return r_()?self:null}/**
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
 */const i_="firebaseLocalStorageDb",NP=1,yc="firebaseLocalStorage",s_="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oh(t,e){return t.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function OP(){const t=indexedDB.deleteDatabase(i_);return new ll(t).toPromise()}function fp(){const t=indexedDB.open(i_,NP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yc,{keyPath:s_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yc)?e(r):(r.close(),await OP(),e(await fp()))})})}async function i0(t,e,n){const r=oh(t,!0).put({[s_]:e,value:n});return new ll(r).toPromise()}async function bP(t,e){const n=oh(t,!1).get(e),r=await new ll(n).toPromise();return r===void 0?null:r.value}function s0(t,e){const n=oh(t,!0).delete(e);return new ll(n).toPromise()}const LP=800,MP=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sh._getInstance(DP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AP(),!this.activeServiceWorker)return;this.sender=new xP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fp();return await i0(e,gc,"1"),await s0(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>i0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>s0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oh(i,!1).getAll();return new ll(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const $P=o_;new sl(3e4,6e4);/**
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
 */function FP(t,e){return e?mr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pg extends hg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UP(t){return XS(t.auth,new pg(t),t.bypassAuthState)}function jP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),gP(n,new pg(t),t.bypassAuthState)}async function zP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),mP(n,new pg(t),t.bypassAuthState)}/**
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
 */class a_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UP;case"linkViaPopup":case"linkViaRedirect":return zP;case"reauthViaPopup":case"reauthViaRedirect":return jP;default:Mn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BP=new sl(2e3,1e4);class _s extends a_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BP.get())};e()}}_s.currentPopupAction=null;/**
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
 */const VP="pendingRedirect",Iu=new Map;class HP extends a_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Iu.get(this.auth._key());if(!e){try{const r=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Iu.set(this.auth._key(),e)}return this.bypassAuthState||Iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(t,e){const n=GP(e),r=WP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KP(t,e){Iu.set(t._key(),e)}function WP(t){return mr(t._redirectPersistence)}function GP(t){return ku(VP,t.config.apiKey,t.name)}async function QP(t,e,n=!1){const r=co(t),i=FP(r,e),o=await new HP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YP=10*60*1e3;class JP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!l_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YP&&this.cachedEventUids.clear(),this.cachedEventUids.has(o0(e))}saveEventToCache(e){this.cachedEventUids.add(o0(e)),this.lastProcessedEventTime=Date.now()}}function o0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(t);default:return!1}}/**
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
 */async function ZP(t,e={}){return uo(t,"GET","/v1/projects",e)}/**
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
 */const eD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tD=/^https?/;async function nD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZP(t);for(const n of e)try{if(rD(n))return}catch{}Mn(t,"unauthorized-domain")}function rD(t){const e=dp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tD.test(n))return!1;if(eD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iD=new sl(3e4,6e4);function a0(){const t=Xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sD(t){return new Promise((e,n)=>{var r,i,s;function o(){a0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{a0(),n(Jn(t,"network-request-failed"))},timeout:iD.get()})}if(!((i=(r=Xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xn().gapi)===null||s===void 0)&&s.load)o();else{const a=XA("iframefcb");return Xn()[a]=()=>{gapi.load?o():n(Jn(t,"network-request-failed"))},WS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xu=null,e})}let xu=null;function oD(t){return xu=xu||sD(t),xu}/**
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
 */const aD=new sl(5e3,15e3),lD="__/auth/iframe",uD="emulator/auth/iframe",cD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dD(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lg(e,uD):`https://${t.config.authDomain}/${lD}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=hD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${il(r).slice(1)}`}async function fD(t){const e=await oD(t),n=Xn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:dD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jn(t,"network-request-failed"),a=Xn().setTimeout(()=>{s(o)},aD.get());function l(){Xn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const pD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mD=500,gD=600,yD="_blank",vD="http://localhost";class l0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wD(t,e,n,r=mD,i=gD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ut().toLowerCase();n&&(a=FS(u)?yD:n),$S(u)&&(e=e||vD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(GA(u)&&a!=="_self")return ED(e||"",a),new l0(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new l0(h)}function ED(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SD="__/auth/handler",_D="emulator/auth/handler",TD=encodeURIComponent("fac");async function u0(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof YS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ER(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof al){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${TD}=${encodeURIComponent(l)}`:"";return`${CD(t)}?${il(a).slice(1)}${u}`}function CD({config:t}){return t.emulator?lg(t,_D):`https://${t.authDomain}/${SD}`}/**
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
 */const Bd="webStorageSupport";class kD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=QP,this._overrideRedirectResult=KP}async _openPopup(e,n,r,i){var s;kr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await u0(e,n,r,dp(),i);return wD(e,o,fg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await u0(e,n,r,dp(),i);return RP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fD(e),r=new JP(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bd,{type:Bd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bd];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VS()||cg()||ih()}}const ID=kD;var c0="@firebase/auth",h0="0.23.2";/**
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
 */class xD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AD(t){Hi(new hi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HS(t)},u=new rP(r,i,s,l);return sP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hi(new hi("auth-internal",e=>{const n=co(e.getProvider("auth").getImmediate());return(r=>new xD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(c0,h0,RD(t)),Yn(c0,h0,"esm2017")}/**
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
 */const PD=5*60,DD=TS("authIdTokenMaxAge")||PD;let d0=null;const ND=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DD)return;const i=n==null?void 0:n.token;d0!==i&&(d0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OD(t=sg()){const e=rh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iP(t,{popupRedirectResolver:ID,persistence:[$P,kP,n_]}),r=TS("authTokenSyncURL");if(r){const s=ND(r);SP(n,s,()=>s(n.currentUser)),EP(n,o=>s(o))}const i=ES("auth");return i&&oP(n,`http://${i}`),n}AD("Browser");var bD="firebase",LD="9.23.0";/**
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
 */Yn(bD,LD,"app");var MD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,mg=mg||{},ne=MD||self;function ah(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ul(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $D(t){return Object.prototype.hasOwnProperty.call(t,Vd)&&t[Vd]||(t[Vd]=++FD)}var Vd="closure_uid_"+(1e9*Math.random()>>>0),FD=0;function UD(t,e,n){return t.call.apply(t.bind,arguments)}function jD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Mt=UD:Mt=jD,Mt.apply(null,arguments)}function Xl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function wt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function wi(){this.s=this.s,this.o=this.o}var zD=0;wi.prototype.s=!1;wi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zD!=0)&&$D(this)};wi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const u_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ah(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function $t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$t.prototype.h=function(){this.defaultPrevented=!0};var BD=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",()=>{},e),ne.removeEventListener("test",()=>{},e)}catch{}return t}();function Na(t){return/^[\s\xa0]*$/.test(t)}function lh(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Bn(t){return lh().indexOf(t)!=-1}function yg(t){return yg[" "](t),t}yg[" "]=function(){};function VD(t,e){var n=LN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var HD=Bn("Opera"),Ws=Bn("Trident")||Bn("MSIE"),c_=Bn("Edge"),pp=c_||Ws,h_=Bn("Gecko")&&!(lh().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge"))&&!(Bn("Trident")||Bn("MSIE"))&&!Bn("Edge"),qD=lh().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge");function d_(){var t=ne.document;return t?t.documentMode:void 0}var mp;e:{var Hd="",qd=function(){var t=lh();if(h_)return/rv:([^\);]+)(\)|;)/.exec(t);if(c_)return/Edge\/([\d\.]+)/.exec(t);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qD)return/WebKit\/(\S+)/.exec(t);if(HD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qd&&(Hd=qd?qd[1]:""),Ws){var Kd=d_();if(Kd!=null&&Kd>parseFloat(Hd)){mp=String(Kd);break e}}mp=Hd}var gp;if(ne.document&&Ws){var p0=d_();gp=p0||parseInt(mp,10)||void 0}else gp=void 0;var KD=gp;function Oa(t,e){if($t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(h_){e:{try{yg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Oa.$.h.call(this)}}wt(Oa,$t);var WD={2:"touch",3:"pen",4:"mouse"};Oa.prototype.h=function(){Oa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var cl="closure_listenable_"+(1e6*Math.random()|0),GD=0;function QD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++GD,this.fa=this.ia=!1}function uh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function vg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function YD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function f_(t){const e={};for(const n in t)e[n]=t[n];return e}const m0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<m0.length;s++)n=m0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ch(t){this.src=t,this.g={},this.h=0}ch.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=vp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new QD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function yp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=u_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(uh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var wg="closure_lm_"+(1e6*Math.random()|0),Wd={};function m_(t,e,n,r,i){if(r&&r.once)return y_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)m_(t,e[s],n,r,i);return null}return n=_g(n),t&&t[cl]?t.O(e,n,ul(r)?!!r.capture:!!r,i):g_(t,e,n,!1,r,i)}function g_(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ul(i)?!!i.capture:!!i,a=Sg(t);if(a||(t[wg]=a=new ch(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=JD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(w_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JD(){function t(n){return e.call(t.src,t.listener,n)}const e=XD;return t}function y_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)y_(t,e[s],n,r,i);return null}return n=_g(n),t&&t[cl]?t.P(e,n,ul(r)?!!r.capture:!!r,i):g_(t,e,n,!0,r,i)}function v_(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)v_(t,e[s],n,r,i);else r=ul(r)?!!r.capture:!!r,n=_g(n),t&&t[cl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=vp(s,n,r,i),-1<n&&(uh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vp(e,n,r,i)),(n=-1<t?e[t]:null)&&Eg(n))}function Eg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[cl])yp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(w_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sg(e))?(yp(n,t),n.h==0&&(n.src=null,e[wg]=null)):uh(t)}}}function w_(t){return t in Wd?Wd[t]:Wd[t]="on"+t}function XD(t,e){if(t.fa)t=!0;else{e=new Oa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Eg(t),t=n.call(r,e)}return t}function Sg(t){return t=t[wg],t instanceof ch?t:null}var Gd="__closure_events_fn_"+(1e9*Math.random()>>>0);function _g(t){return typeof t=="function"?t:(t[Gd]||(t[Gd]=function(e){return t.handleEvent(e)}),t[Gd])}function vt(){wi.call(this),this.i=new ch(this),this.S=this,this.J=null}wt(vt,wi);vt.prototype[cl]=!0;vt.prototype.removeEventListener=function(t,e,n,r){v_(this,t,e,n,r)};function It(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new $t(e,t);else if(e instanceof $t)e.target=e.target||t;else{var i=e;e=new $t(r,t),p_(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Zl(o,r,!0,e)&&i}if(o=e.g=t,i=Zl(o,r,!0,e)&&i,i=Zl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Zl(o,r,!1,e)&&i}vt.prototype.N=function(){if(vt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)uh(n[r]);delete t.g[e],t.h--}}this.J=null};vt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};vt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&yp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Tg=ne.JSON.stringify;class ZD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function eN(){var t=Cg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tN{constructor(){this.h=this.g=null}add(e,n){const r=E_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var E_=new ZD(()=>new nN,t=>t.reset());class nN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function iN(t){ne.setTimeout(()=>{throw t},0)}let ba,La=!1,Cg=new tN,S_=()=>{const t=ne.Promise.resolve(void 0);ba=()=>{t.then(sN)}};var sN=()=>{for(var t;t=eN();){try{t.h.call(t.g)}catch(n){iN(n)}var e=E_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}La=!1};function hh(t,e){vt.call(this),this.h=t||1,this.g=e||ne,this.j=Mt(this.qb,this),this.l=Date.now()}wt(hh,vt);U=hh.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(kg(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){hh.$.N.call(this),kg(this),delete this.g};function Ig(t,e,n){if(typeof t=="function")n&&(t=Mt(t,n));else if(t&&typeof t.handleEvent=="function")t=Mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function __(t){t.g=Ig(()=>{t.g=null,t.i&&(t.i=!1,__(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oN extends wi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:__(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ma(t){wi.call(this),this.h=t,this.g={}}wt(Ma,wi);var g0=[];function T_(t,e,n,r){Array.isArray(n)||(n&&(g0[0]=n.toString()),n=g0);for(var i=0;i<n.length;i++){var s=m_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function C_(t){vg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Eg(e)},t),t.g={}}Ma.prototype.N=function(){Ma.$.N.call(this),C_(this)};Ma.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dh(){this.g=!0}dh.prototype.Ea=function(){this.g=!1};function aN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function lN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ts(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cN(t,n)+(r?" "+r:"")})}function uN(t,e){t.info(function(){return"TIMEOUT: "+e})}dh.prototype.info=function(){};function cN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Tg(n)}catch{return e}}var ts={},y0=null;function fh(){return y0=y0||new vt}ts.Ta="serverreachability";function k_(t){$t.call(this,ts.Ta,t)}wt(k_,$t);function $a(t){const e=fh();It(e,new k_(e))}ts.STAT_EVENT="statevent";function I_(t,e){$t.call(this,ts.STAT_EVENT,t),this.stat=e}wt(I_,$t);function Bt(t){const e=fh();It(e,new I_(e,t))}ts.Ua="timingevent";function x_(t,e){$t.call(this,ts.Ua,t),this.size=e}wt(x_,$t);function hl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var ph={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},R_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xg(){}xg.prototype.h=null;function v0(t){return t.h||(t.h=t.i())}function A_(){}var dl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rg(){$t.call(this,"d")}wt(Rg,$t);function Ag(){$t.call(this,"c")}wt(Ag,$t);var wp;function mh(){}wt(mh,xg);mh.prototype.g=function(){return new XMLHttpRequest};mh.prototype.i=function(){return{}};wp=new mh;function fl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ma(this),this.P=hN,t=pp?125:void 0,this.V=new hh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new P_}function P_(){this.i=null,this.g="",this.h=!1}var hN=45e3,Ep={},vc={};U=fl.prototype;U.setTimeout=function(t){this.P=t};function Sp(t,e,n){t.L=1,t.v=yh(Ir(e)),t.s=n,t.S=!0,D_(t,null)}function D_(t,e){t.G=Date.now(),pl(t),t.A=Ir(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),U_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new P_,t.g=oT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new oN(Mt(t.Pa,t,t.g),t.O)),T_(t.U,t.g,"readystatechange",t.nb),e=t.I?f_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$a(),aN(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&Vn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=Vn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||pp||this.g&&(this.h.h||this.g.ja()||_0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?$a(3):$a(2)),gh(this);var n=this.g.da();this.ca=n;t:if(N_(this)){var r=_0(this.g);t="";var i=r.length,s=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),ia(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,lN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Na(a)){var u=a;break t}}u=null}if(n=u)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_p(this,n);else{this.i=!1,this.o=3,Bt(12),Ai(this),ia(this);break e}}this.S?(O_(this,c,o),pp&&this.i&&c==3&&(T_(this.U,this.V,"tick",this.mb),this.V.start())):(Ts(this.j,this.m,o,null),_p(this,o)),c==4&&Ai(this),this.i&&!this.J&&(c==4?nT(this.l,this):(this.i=!1,pl(this)))}else NN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Bt(12)):(this.o=0,Bt(13)),Ai(this),ia(this)}}}catch{}finally{}};function N_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function O_(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=dN(t,n),i==vc){e==4&&(t.o=4,Bt(14),r=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ep){t.o=4,Bt(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ts(t.j,t.m,i,null),_p(t,i);N_(t)&&i!=vc&&i!=Ep&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lg(e),e.M=!0,Bt(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Ai(t),ia(t))}U.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(gh(this),O_(this,t,e),this.i&&t!=4&&pl(this))}};function dN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?vc:(n=Number(e.substring(n,r)),isNaN(n)?Ep:(r+=1,r+n>e.length?vc:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,Ai(this)};function pl(t){t.Y=Date.now()+t.P,b_(t,t.P)}function b_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hl(Mt(t.lb,t),e)}function gh(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(uN(this.j,this.A),this.L!=2&&($a(),Bt(17)),Ai(this),this.o=2,ia(this)):b_(this,this.Y-t)};function ia(t){t.l.H==0||t.J||nT(t.l,t)}function Ai(t){gh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,kg(t.V),C_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function _p(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Tp(n.i,t))){if(!t.K&&Tp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sc(n),Eh(n);else break e;bg(n),Bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=hl(Mt(n.ib,n),6e3));if(1>=B_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Pi(n,11)}else if((t.K||n.g==t)&&Sc(n),!Na(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Pg(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ue(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=sT(r,r.J?r.pa:null,r.Y),o.K){V_(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(gh(a),pl(a)),r.g=o}else eT(r);0<n.j.length&&Sh(n)}else u[0]!="stop"&&u[0]!="close"||Pi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pi(n,7):Og(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}$a(4)}catch{}}function fN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ah(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function pN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ah(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function L_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ah(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pN(t),r=fN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var M_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $i(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $i){this.h=t.h,wc(this,t.j),this.s=t.s,this.g=t.g,Ec(this,t.m),this.l=t.l;var e=t.i,n=new Fa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),w0(this,n),this.o=t.o}else t&&(e=String(t).match(M_))?(this.h=!1,wc(this,e[1]||"",!0),this.s=Ho(e[2]||""),this.g=Ho(e[3]||"",!0),Ec(this,e[4]),this.l=Ho(e[5]||"",!0),w0(this,e[6]||"",!0),this.o=Ho(e[7]||"")):(this.h=!1,this.i=new Fa(null,this.h))}$i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qo(e,E0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qo(e,E0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qo(n,n.charAt(0)=="/"?vN:yN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qo(n,EN)),t.join("")};function Ir(t){return new $i(t)}function wc(t,e,n){t.j=n?Ho(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ec(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function w0(t,e,n){e instanceof Fa?(t.i=e,SN(t.i,t.h)):(n||(e=qo(e,wN)),t.i=new Fa(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function yh(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ho(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var E0=/[#\/\?@]/g,yN=/[#\?:]/g,vN=/[#\?]/g,wN=/[#\?@]/g,EN=/#/g;function Fa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ei(t){t.g||(t.g=new Map,t.h=0,t.i&&mN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Fa.prototype;U.add=function(t,e){Ei(this),this.i=null,t=fo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $_(t,e){Ei(t),e=fo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function F_(t,e){return Ei(t),e=fo(t,e),t.g.has(e)}U.forEach=function(t,e){Ei(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){Ei(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){Ei(this);let e=[];if(typeof t=="string")F_(this,t)&&(e=e.concat(this.g.get(fo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Ei(this),this.i=null,t=fo(this,t),F_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function U_(t,e,n){$_(t,e),0<n.length&&(t.i=null,t.g.set(fo(t,e),gg(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function fo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function SN(t,e){e&&!t.j&&(Ei(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($_(this,r),U_(this,i,n))},t)),t.j=e}var _N=class{constructor(t,e){this.g=t,this.map=e}};function j_(t){this.l=t||TN,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TN=10;function z_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function B_(t){return t.h?1:t.g?t.g.size:0}function Tp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pg(t,e){t.g?t.g.add(e):t.h=e}function V_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}j_.prototype.cancel=function(){if(this.i=H_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function H_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return gg(t.i)}var CN=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function kN(){this.g=new CN}function IN(t,e,n){const r=n||"";try{L_(t,function(i,s){let o=i;ul(i)&&(o=Tg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xN(t,e){const n=new dh;if(ne.Image){const r=new Image;r.onload=Xl(eu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xl(eu,n,r,"TestLoadImage: error",!1,e),r.onabort=Xl(eu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xl(eu,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function eu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ml(t){this.l=t.fc||null,this.j=t.ob||!1}wt(ml,xg);ml.prototype.g=function(){return new vh(this.l,this.j)};ml.prototype.i=function(t){return function(){return t}}({});function vh(t,e){vt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Dg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wt(vh,vt);var Dg=0;U=vh.prototype;U.open=function(t,e){if(this.readyState!=Dg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ua(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gl(this)),this.readyState=Dg};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ua(this)),this.g&&(this.readyState=3,Ua(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;q_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function q_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gl(this):Ua(this),this.readyState==3&&q_(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,gl(this))};U.Ya=function(t){this.g&&(this.response=t,gl(this))};U.ka=function(){this.g&&gl(this)};function gl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ua(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RN=ne.JSON.parse;function Ze(t){vt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=K_,this.L=this.M=!1}wt(Ze,vt);var K_="",AN=/^https?$/i,PN=["POST","PUT"];U=Ze.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wp.g(),this.C=this.u?v0(this.u):v0(wp),this.g.onreadystatechange=Mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){S0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ne.FormData&&t instanceof ne.FormData,!(0<=u_(PN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Q_(this),0<this.B&&((this.L=DN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mt(this.ua,this)):this.A=Ig(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){S0(this,s)}};function DN(t){return Ws&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof mg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function S0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,W_(t),wh(t)}function W_(t){t.F||(t.F=!0,It(t,"complete"),It(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),wh(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wh(this,!0)),Ze.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?G_(this):this.kb())};U.kb=function(){G_(this)};function G_(t){if(t.h&&typeof mg<"u"&&(!t.C[1]||Vn(t)!=4||t.da()!=2)){if(t.v&&Vn(t)==4)Ig(t.La,0,t);else if(It(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(M_)[1]||null;!i&&ne.self&&ne.self.location&&(i=ne.self.location.protocol.slice(0,-1)),r=!AN.test(i?i.toLowerCase():"")}n=r}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",W_(t)}}finally{wh(t)}}}}function wh(t,e){if(t.g){Q_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=r}catch{}}}function Q_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Vn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RN(e)}};function _0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case K_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function NN(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Na(t[r]))continue;var n=rN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}YD(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Y_(t){let e="";return vg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ng(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Y_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function No(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function J_(t){this.Ga=0,this.j=[],this.l=new dh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=No("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=No("baseRetryDelayMs",5e3,t),this.hb=No("retryDelaySeedMs",1e4,t),this.eb=No("forwardChannelMaxRetries",2,t),this.xa=No("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new j_(t&&t.concurrentRequestLimit),this.Ja=new kN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=J_.prototype;U.ra=8;U.H=1;function Og(t){if(X_(t),t.H==3){var e=t.W++,n=Ir(t.I);if(Ue(n,"SID",t.K),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),yl(t,n),e=new fl(t,t.l,e),e.L=2,e.v=yh(Ir(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=oT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),pl(e)}iT(t)}function Eh(t){t.g&&(Lg(t),t.g.cancel(),t.g=null)}function X_(t){Eh(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Sc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Sh(t){if(!z_(t.i)&&!t.m){t.m=!0;var e=t.Na;ba||S_(),La||(ba(),La=!0),Cg.add(e,t),t.C=0}}function ON(t,e){return B_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=hl(Mt(t.Na,t,e),rT(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new fl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=f_(s),p_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Z_(this,i,e),n=Ir(this.I),Ue(n,"RID",t),Ue(n,"CVER",22),this.F&&Ue(n,"X-HTTP-Session-Id",this.F),yl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Y_(s)))+"&"+e:this.o&&Ng(n,this.o,s)),Pg(this.i,i),this.bb&&Ue(n,"TYPE","init"),this.P?(Ue(n,"$req",e),Ue(n,"SID","null"),i.aa=!0,Sp(i,n,null)):Sp(i,n,e),this.H=2}}else this.H==3&&(t?T0(this,t):this.j.length==0||z_(this.i)||T0(this))};function T0(t,e){var n;e?n=e.m:n=t.W++;const r=Ir(t.I);Ue(r,"SID",t.K),Ue(r,"RID",n),Ue(r,"AID",t.V),yl(t,r),t.o&&t.s&&Ng(r,t.o,t.s),n=new fl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Z_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Pg(t.i,n),Sp(n,r,e)}function yl(t,e){t.na&&vg(t.na,function(n,r){Ue(e,r,n)}),t.h&&L_({},function(n,r){Ue(e,r,n)})}function Z_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Mt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{IN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function eT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ba||S_(),La||(ba(),La=!0),Cg.add(e,t),t.A=0}}function bg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=hl(Mt(t.Ma,t),rT(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,tT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=hl(Mt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),Eh(this),tT(this))};function Lg(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function tT(t){t.g=new fl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ir(t.wa);Ue(e,"RID","rpc"),Ue(e,"SID",t.K),Ue(e,"AID",t.V),Ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ue(e,"TO",t.qa),Ue(e,"TYPE","xmlhttp"),yl(t,e),t.o&&t.s&&Ng(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=yh(Ir(e)),n.s=null,n.S=!0,D_(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Eh(this),bg(this),Bt(19))};function Sc(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function nT(t,e){var n=null;if(t.g==e){Sc(t),Lg(t),t.g=null;var r=2}else if(Tp(t.i,e))n=e.F,V_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=fh(),It(r,new x_(r,n)),Sh(t)}else eT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&ON(t,e)||r==2&&bg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Pi(t,5);break;case 4:Pi(t,10);break;case 3:Pi(t,6);break;default:Pi(t,2)}}}function rT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Pi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Mt(t.pb,t);n||(n=new $i("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||wc(n,"https"),yh(n)),xN(n.toString(),r)}else Bt(2);t.H=0,t.h&&t.h.za(e),iT(t),X_(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function iT(t){if(t.H=0,t.ma=[],t.h){const e=H_(t.i);(e.length!=0||t.j.length!=0)&&(f0(t.ma,e),f0(t.ma,t.j),t.i.i.length=0,gg(t.j),t.j.length=0),t.h.ya()}}function sT(t,e,n){var r=n instanceof $i?Ir(n):new $i(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ec(r,r.m);else{var i=ne.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new $i(null);r&&wc(s,r),e&&(s.g=e),i&&Ec(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ra),yl(t,r),r}function oT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ze(new ml({ob:!0})):new Ze(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function aT(){}U=aT.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function _c(){if(Ws&&!(10<=Number(KD)))throw Error("Environmental error: no available transport.")}_c.prototype.g=function(t,e){return new cn(t,e)};function cn(t,e){vt.call(this),this.g=new J_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Na(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Na(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new po(this)}wt(cn,vt);cn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sT(t,null,t.Y),Sh(t)};cn.prototype.close=function(){Og(this.g)};cn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tg(t),t=n);e.j.push(new _N(e.fb++,t)),e.H==3&&Sh(e)};cn.prototype.N=function(){this.g.h=null,delete this.j,Og(this.g),delete this.g,cn.$.N.call(this)};function lT(t){Rg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}wt(lT,Rg);function uT(){Ag.call(this),this.status=1}wt(uT,Ag);function po(t){this.g=t}wt(po,aT);po.prototype.Ba=function(){It(this.g,"a")};po.prototype.Aa=function(t){It(this.g,new lT(t))};po.prototype.za=function(t){It(this.g,new uT)};po.prototype.ya=function(){It(this.g,"b")};function bN(){this.blockSize=-1}function $n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}wt($n,bN);$n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}$n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Qd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Qd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Qd(this,r),i=0;break}}this.h=i,this.i+=e};$n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var LN={};function Mg(t){return-128<=t&&128>t?VD(t,function(e){return new Re([e|0],0>e?-1:0)}):new Re([t|0],0>t?-1:0)}function Hn(t){if(isNaN(t)||!isFinite(t))return Ls;if(0>t)return Ct(Hn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cp;return new Re(e,0)}function cT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ct(cT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Hn(Math.pow(e,8)),r=Ls,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Hn(Math.pow(e,s)),r=r.R(s).add(Hn(o))):(r=r.R(n),r=r.add(Hn(o)))}return r}var Cp=4294967296,Ls=Mg(0),kp=Mg(1),C0=Mg(16777216);U=Re.prototype;U.ea=function(){if(En(this))return-Ct(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cp+r)*e,e*=Cp}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gr(this))return"0";if(En(this))return"-"+Ct(this).toString(t);for(var e=Hn(Math.pow(t,6)),n=this,r="";;){var i=Cc(n,e).g;n=Tc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,gr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function En(t){return t.h==-1}U.X=function(t){return t=Tc(this,t),En(t)?-1:gr(t)?0:1};function Ct(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Re(n,~t.h).add(kp)}U.abs=function(){return En(this)?Ct(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Re(n,n[n.length-1]&-2147483648?-1:0)};function Tc(t,e){return t.add(Ct(e))}U.R=function(t){if(gr(this)||gr(t))return Ls;if(En(this))return En(t)?Ct(this).R(Ct(t)):Ct(Ct(this).R(t));if(En(t))return Ct(this.R(Ct(t)));if(0>this.X(C0)&&0>t.X(C0))return Hn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,tu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,tu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,tu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,tu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Re(n,0)};function tu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Oo(t,e){this.g=t,this.h=e}function Cc(t,e){if(gr(e))throw Error("division by zero");if(gr(t))return new Oo(Ls,Ls);if(En(t))return e=Cc(Ct(t),e),new Oo(Ct(e.g),Ct(e.h));if(En(e))return e=Cc(t,Ct(e)),new Oo(Ct(e.g),e.h);if(30<t.g.length){if(En(t)||En(e))throw Error("slowDivide_ only works with positive integers.");for(var n=kp,r=e;0>=r.X(t);)n=k0(n),r=k0(r);var i=as(n,1),s=as(r,1);for(r=as(r,2),n=as(n,2);!gr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=as(r,1),n=as(n,1)}return e=Tc(t,i.R(e)),new Oo(i,e)}for(i=Ls;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Hn(n),o=s.R(e);En(o)||0<o.X(t);)n-=r,s=Hn(n),o=s.R(e);gr(s)&&(s=kp),i=i.add(s),t=Tc(t,o)}return new Oo(i,t)}U.gb=function(t){return Cc(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Re(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Re(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Re(n,this.h^t.h)};function k0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Re(n,t.h)}function as(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Re(i,t.h)}_c.prototype.createWebChannel=_c.prototype.g;cn.prototype.send=cn.prototype.u;cn.prototype.open=cn.prototype.m;cn.prototype.close=cn.prototype.close;ph.NO_ERROR=0;ph.TIMEOUT=8;ph.HTTP_ERROR=6;R_.COMPLETE="complete";A_.EventType=dl;dl.OPEN="a";dl.CLOSE="b";dl.ERROR="c";dl.MESSAGE="d";vt.prototype.listen=vt.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;$n.prototype.digest=$n.prototype.l;$n.prototype.reset=$n.prototype.reset;$n.prototype.update=$n.prototype.j;Re.prototype.add=Re.prototype.add;Re.prototype.multiply=Re.prototype.R;Re.prototype.modulo=Re.prototype.gb;Re.prototype.compare=Re.prototype.X;Re.prototype.toNumber=Re.prototype.ea;Re.prototype.toString=Re.prototype.toString;Re.prototype.getBits=Re.prototype.D;Re.fromNumber=Hn;Re.fromString=cT;var MN=function(){return new _c},$N=function(){return fh()},Yd=ph,FN=R_,UN=ts,I0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jN=ml,nu=A_,zN=Ze,BN=$n,Ms=Re;const x0="@firebase/firestore";/**
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
 */let Nt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
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
 */let mo="9.23.0";/**
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
 */const Wi=new rg("@firebase/firestore");function R0(){return Wi.logLevel}function H(t,...e){if(Wi.logLevel<=_e.DEBUG){const n=e.map($g);Wi.debug(`Firestore (${mo}): ${t}`,...n)}}function xr(t,...e){if(Wi.logLevel<=_e.ERROR){const n=e.map($g);Wi.error(`Firestore (${mo}): ${t}`,...n)}}function Gs(t,...e){if(Wi.logLevel<=_e.WARN){const n=e.map($g);Wi.warn(`Firestore (${mo}): ${t}`,...n)}}function $g(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function ze(t,e){t||re()}function ue(t,e){return t}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let Y=class extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */let oi=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
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
 */let hT=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},VN=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}},HN=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},qN=class{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new oi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new oi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string"),new hT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new Nt(e)}},KN=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},WN=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new KN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},GN=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},QN=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.T=n.token,new GN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
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
 */function YN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new dt(0,0))}static max(){return new oe(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Xe extends ja{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const JN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends ja{construct(e,n,r){return new Lt(e,n,r)}static isValidIdentifier(e){return JN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(n)}static emptyPath(){return new Lt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Xe.fromString(e))}static fromName(e){return new J(Xe.fromString(e).popFirst(5))}static empty(){return new J(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Xe(e.slice()))}}function XN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new di(i,J.empty(),e)}function ZN(t){return new di(t.readTime,t.key,-1)}class di{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new di(oe.min(),J.empty(),-1)}static max(){return new di(oe.max(),J.empty(),-1)}}function eO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const tO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vl(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==tO)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Fg.ct=-1;function _h(t){return t==null}function kc(t){return t===0&&1/t==-1/0}function rO(t){return typeof t=="number"&&Number.isInteger(t)&&!kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function A0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let st=class Ip{constructor(e,n){this.comparator=e,this.root=n||ai.EMPTY}insert(e,n){return new Ip(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ai.BLACK,null,null))}remove(e){return new Ip(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ai.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ru(this.root,e,this.comparator,!0)}};class ru{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}let ai=class ur{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ur.RED,this.left=i??ur.EMPTY,this.right=s??ur.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ur(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ur.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ur.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ur.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ur.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}};ai.EMPTY=null,ai.RED=!0,ai.BLACK=!1;ai.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ai(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */let an=class xp{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new P0(this.data.getIterator())}getIteratorFrom(e){return new P0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xp)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xp(this.comparator);return n.data=e,n}},P0=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
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
 */let qn=class Rp{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new Rp([])}unionWith(e){let n=new an(Lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rp(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
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
 */class pT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */let hn=class Ap{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pT("Invalid base64 string: "+i):i}}(e);return new Ap(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ap(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};hn.EMPTY_BYTE_STRING=new hn("");const iO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(t){if(ze(!!t),typeof t=="string"){let e=0;const n=iO.exec(t);if(ze(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gi(t){return typeof t=="string"?hn.fromBase64String(t):hn.fromUint8Array(t)}/**
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
 */function Ug(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jg(t){const e=t.mapValue.fields.__previous_value__;return Ug(e)?jg(e):e}function za(t){const e=fi(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class sO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ba{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const iu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ug(t)?4:oO(t)?9007199254740991:10:re()}function tr(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return za(t).isEqual(za(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=fi(r.timestampValue),o=fi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Gi(r.bytesValue).isEqual(Gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return rt(r.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(r.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return rt(r.integerValue)===rt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=rt(r.doubleValue),o=rt(i.doubleValue);return s===o?kc(s)===kc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(A0(s)!==A0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!tr(s[a],o[a])))return!1;return!0}(t,e);default:return re()}}function Va(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=Qi(t),r=Qi(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=rt(i.integerValue||i.doubleValue),a=rt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return D0(t.timestampValue,e.timestampValue);case 4:return D0(za(t),za(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Gi(i),a=Gi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Te(o[l],a[l]);if(u!==0)return u}return Te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Te(rt(i.latitude),rt(s.latitude));return o!==0?o:Te(rt(i.longitude),rt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ys(o[l],a[l]);if(u)return u}return Te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===iu.mapValue&&s===iu.mapValue)return 0;if(i===iu.mapValue)return 1;if(s===iu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Te(a[c],u[c]);if(h!==0)return h;const d=Ys(o[a[c]],l[u[c]]);if(d!==0)return d}return Te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function D0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=fi(t),r=fi(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function Js(t){return Pp(t)}function Pp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=fi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Pp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Pp(r.fields[a])}`;return s+"}"}(t.mapValue):re();var e,n}function Dp(t){return!!t&&"integerValue"in t}function zg(t){return!!t&&"arrayValue"in t}function N0(t){return!!t&&"nullValue"in t}function O0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ru(t){return!!t&&"mapValue"in t}function sa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ru(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sa(n)}setAll(e){let n=Lt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=sa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ru(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ns(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Yt(sa(this.value))}}function mT(t){const e=[];return ns(t.fields,(n,r)=>{const i=new Lt([n]);if(Ru(r)){const s=mT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qn(e)}/**
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
 */class bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,oe.min(),oe.min(),oe.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,i){return new bt(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new bt(e,2,n,oe.min(),oe.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,oe.min(),oe.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function b0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function L0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function aO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gT{}class ct extends gT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uO(e,n,r):n==="array-contains"?new dO(e,r):n==="in"?new fO(e,r):n==="not-in"?new pO(e,r):n==="array-contains-any"?new mO(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cO(e,r):new hO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nr extends gT{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new nr(e,n)}matches(e){return yT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function yT(t){return t.op==="and"}function vT(t){return lO(t)&&yT(t)}function lO(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function Np(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(vT(t))return t.filters.map(e=>Np(e)).join(",");{const e=t.filters.map(n=>Np(n)).join(",");return`${t.op}(${e})`}}function wT(t,e){return t instanceof ct?function(n,r){return r instanceof ct&&n.op===r.op&&n.field.isEqual(r.field)&&tr(n.value,r.value)}(t,e):t instanceof nr?function(n,r){return r instanceof nr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&wT(s,r.filters[o]),!0):!1}(t,e):void re()}function ET(t){return t instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${Js(e.value)}`}(t):t instanceof nr?function(e){return e.op.toString()+" {"+e.getFilters().map(ET).join(" ,")+"}"}(t):"Filter"}class uO extends ct{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class cO extends ct{constructor(e,n){super(e,"in",n),this.keys=ST("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hO extends ct{constructor(e,n){super(e,"not-in",n),this.keys=ST("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ST(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class dO extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zg(n)&&Va(n.arrayValue,this.value)}}class fO extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Va(this.value.arrayValue,n)}}class pO extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Va(this.value.arrayValue,n)}}class mO extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Va(this.value.arrayValue,r))}}/**
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
 */class gO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function M0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gO(t,e,n,r,i,s,o)}function Bg(t){const e=ue(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Np(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.dt=n}return e.dt}function Vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!L0(t.startAt,e.startAt)&&L0(t.endAt,e.endAt)}function Op(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Th{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function yO(t,e,n,r,i,s,o,a){return new Th(t,e,n,r,i,s,o,a)}function Hg(t){return new Th(t)}function $0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wO(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function EO(t){return t.collectionGroup!==null}function $s(t){const e=ue(t);if(e.wt===null){e.wt=[];const n=wO(e),r=vO(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new oa(n)),e.wt.push(new oa(Lt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new oa(Lt.keyField(),s))}}}return e.wt}function Rr(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=M0(e.path,e.collectionGroup,$s(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of $s(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new oa(s.field,o))}const r=e.endAt?new Ic(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ic(e.startAt.position,e.startAt.inclusive):null;e._t=M0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function bp(t,e,n){return new Th(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ch(t,e){return Vg(Rr(t),Rr(e))&&t.limitType===e.limitType}function _T(t){return`${Bg(Rr(t))}|lt:${t.limitType}`}function Lp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>ET(r)).join(", ")}]`),_h(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),`Target(${n})`}(Rr(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):J.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of $s(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=b0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,$s(n),r)||n.endAt&&!function(i,s,o){const a=b0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,$s(n),r))}(t,e)}function SO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TT(t){return(e,n)=>{let r=!1;for(const i of $s(t)){const s=_O(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _O(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ys(a,l):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fT(this.inner)}size(){return this.innerSize}}/**
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
 */const TO=new st(J.comparator);function Ar(){return TO}const CT=new st(J.comparator);function Ko(...t){let e=CT;for(const n of t)e=e.insert(n.key,n);return e}function kT(t){let e=CT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Di(){return aa()}function IT(){return aa()}function aa(){return new go(t=>t.toString(),(t,e)=>t.isEqual(e))}const CO=new st(J.comparator),kO=new an(J.comparator);function fe(...t){let e=kO;for(const n of t)e=e.add(n);return e}const IO=new an(Te);function xO(){return IO}/**
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
 */function xT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function RT(t){return{integerValue:""+t}}function RO(t,e){return rO(e)?RT(e):xT(t,e)}/**
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
 */class Ih{constructor(){this._=void 0}}function AO(t,e,n){return t instanceof xc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ug(i)&&(i=jg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ha?PT(t,e):t instanceof qa?DT(t,e):function(r,i){const s=AT(r,i),o=F0(s)+F0(r.gt);return Dp(s)&&Dp(r.gt)?RT(o):xT(r.serializer,o)}(t,e)}function PO(t,e,n){return t instanceof Ha?PT(t,e):t instanceof qa?DT(t,e):n}function AT(t,e){return t instanceof Rc?Dp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class xc extends Ih{}class Ha extends Ih{constructor(e){super(),this.elements=e}}function PT(t,e){const n=NT(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class qa extends Ih{constructor(e){super(),this.elements=e}}function DT(t,e){let n=NT(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class Rc extends Ih{constructor(e,n){super(),this.serializer=e,this.gt=n}}function F0(t){return rt(t.integerValue||t.doubleValue)}function NT(t){return zg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DO(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ha&&r instanceof Ha||n instanceof qa&&r instanceof qa?Qs(n.elements,r.elements,tr):n instanceof Rc&&r instanceof Rc?tr(n.gt,r.gt):n instanceof xc&&r instanceof xc}(t.transform,e.transform)}class NO{constructor(e,n){this.version=e,this.transformResults=n}}class Zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xh{}function OT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LT(t.key,Zn.none()):new El(t.key,t.data,Zn.none());{const n=t.data,r=Yt.empty();let i=new an(Lt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Si(t.key,r,new qn(i.toArray()),Zn.none())}}function OO(t,e,n){t instanceof El?function(r,i,s){const o=r.value.clone(),a=j0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Si?function(r,i,s){if(!Au(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=j0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(bT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function la(t,e,n,r){return t instanceof El?function(i,s,o,a){if(!Au(i.precondition,s))return o;const l=i.value.clone(),u=z0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Si?function(i,s,o,a){if(!Au(i.precondition,s))return o;const l=z0(i.fieldTransforms,a,s),u=s.data;return u.setAll(bT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Au(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function bO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AT(r.transform,i||null);s!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,s))}return n||null}function U0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qs(n,r,(i,s)=>DO(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class El extends xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Si extends xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function j0(t,e,n){const r=new Map;ze(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,PO(o,a,n[i]))}return r}function z0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AO(s,o,e))}return r}class LT extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LO extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&OO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=OT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>U0(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>U0(n,r))}}class qg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ze(e.mutations.length===r.length);let i=CO;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qg(e,n,r,i)}}/**
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
 */class $O{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,ge;function UO(t){switch(t){default:return re();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function MT(t){if(t===void 0)return xr("GRPC error has no .code"),N.UNKNOWN;switch(t){case tt.OK:return N.OK;case tt.CANCELLED:return N.CANCELLED;case tt.UNKNOWN:return N.UNKNOWN;case tt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case tt.INTERNAL:return N.INTERNAL;case tt.UNAVAILABLE:return N.UNAVAILABLE;case tt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case tt.NOT_FOUND:return N.NOT_FOUND;case tt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case tt.ABORTED:return N.ABORTED;case tt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case tt.DATA_LOSS:return N.DATA_LOSS;default:return re()}}(ge=tt||(tt={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Kg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return su}static getOrCreateInstance(){return su===null&&(su=new Kg),su}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let su=null;/**
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
 */function jO(){return new TextEncoder}/**
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
 */const zO=new Ms([4294967295,4294967295],0);function B0(t){const e=jO().encode(t),n=new BN;return n.update(e),new Uint8Array(n.digest())}function V0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ms([n,r],0),new Ms([i,s],0)]}class Wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wo(`Invalid padding: ${n}`);if(r<0)throw new Wo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wo(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ms.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ms.fromNumber(r)));return i.compare(zO)===1&&(i=new Ms([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=B0(e),[r,i]=V0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=B0(e),[r,i]=V0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rh(oe.min(),i,new st(Te),Ar(),fe())}}class Sl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sl(r,n,fe(),fe(),fe())}}/**
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
 */class Pu{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class $T{constructor(e,n){this.targetId=e,this.Vt=n}}class FT{constructor(e,n,r=hn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class H0{constructor(){this.St=0,this.Dt=K0(),this.Ct=hn.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=fe(),n=fe(),r=fe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Sl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=K0()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class BO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ar(),this.zt=q0(),this.Wt=new st(Te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Op(o))if(i===0){const a=new J(o.path);this.Yt(r,a,bt.newNoDocument(a,oe.min()))}else ze(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Kg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,f,p,v,E,g;const m={localCacheCount:c,existenceFilterCount:h.count},w=h.unchangedNames;return w&&(m.bloomFilter={applied:u===0,hashCount:(d=w==null?void 0:w.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(p=(f=w==null?void 0:w.bits)===null||f===void 0?void 0:f.bitmap)===null||p===void 0?void 0:p.length)!==null&&v!==void 0?v:0,padding:(g=(E=w==null?void 0:w.bits)===null||E===void 0?void 0:E.padding)!==null&&g!==void 0?g:0}),m}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Gi(s).toUint8Array()}catch(c){if(c instanceof pT)return Gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Wg(l,o,a)}catch(c){return Gs(c instanceof Wo?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Op(a.target)){const l=new J(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,bt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=fe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Rh(e,n,this.Wt,this.jt,r);return this.jt=Ar(),this.zt=q0(),this.Wt=new st(Te),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new H0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new an(Te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new H0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function q0(){return new st(J.comparator)}function K0(){return new st(J.comparator)}const VO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qO=(()=>({and:"AND",or:"OR"}))();class KO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mp(t,e){return t.useProto3Json||_h(e)?e:{value:e}}function Ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WO(t,e){return Ac(t,e.toTimestamp())}function er(t){return ze(!!t),oe.fromTimestamp(function(e){const n=fi(e);return new dt(n.seconds,n.nanos)}(t))}function Gg(t,e){return function(n){return new Xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jT(t){const e=Xe.fromString(t);return ze(HT(e)),e}function $p(t,e){return Gg(t.databaseId,e.path)}function Jd(t,e){const n=jT(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(zT(n))}function Fp(t,e){return Gg(t.databaseId,e)}function GO(t){const e=jT(t);return e.length===4?Xe.emptyPath():zT(e)}function Up(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zT(t){return ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function W0(t,e,n){return{name:$p(t,e),fields:n.value.mapValue.fields}}function QO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ze(u===void 0||typeof u=="string"),hn.fromBase64String(u||"")):(ze(u===void 0||u instanceof Uint8Array),hn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?N.UNKNOWN:MT(l.code);return new Y(u,l.message||"")}(o);n=new FT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jd(t,r.document.name),s=er(r.document.updateTime),o=r.document.createTime?er(r.document.createTime):oe.min(),a=new Yt({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Pu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jd(t,r.document),s=r.readTime?er(r.readTime):oe.min(),o=bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jd(t,r.document),s=r.removedTargetIds||[];n=new Pu([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FO(i,s),a=r.targetId;n=new $T(a,o)}}return n}function YO(t,e){let n;if(e instanceof El)n={update:W0(t,e.key,e.value)};else if(e instanceof LT)n={delete:$p(t,e.key)};else if(e instanceof Si)n={update:W0(t,e.key,e.data),updateMask:s2(e.fieldMask)};else{if(!(e instanceof LO))return re();n={verify:$p(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof xc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ha)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rc)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:WO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function JO(t,e){return t&&t.length>0?(ze(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?er(r.updateTime):er(i);return s.isEqual(oe.min())&&(s=er(i)),new NO(s,r.transformResults||[])}(n,e))):[]}function XO(t,e){return{documents:[Fp(t,e.path)]}}function ZO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return VT(nr.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ls(c.field),direction:n2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Mp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function e2(t){let e=GO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ze(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=BT(c);return h instanceof nr&&vT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new oa(us(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,_h(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ic(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ic(d,h)}(n.endAt)),yO(e,i,o,s,a,"F",l,u)}function t2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=us(e.unaryFilter.field);return ct.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=us(e.unaryFilter.field);return ct.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(e.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=us(e.unaryFilter.field);return ct.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(e){return ct.create(us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return nr.create(e.compositeFilter.filters.map(n=>BT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(e.compositeFilter.op))}(t):re()}function n2(t){return VO[t]}function r2(t){return HO[t]}function i2(t){return qO[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return Lt.fromServerFormat(t.fieldPath)}function VT(t){return t instanceof ct?function(e){if(e.op==="=="){if(O0(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NAN"}};if(N0(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(O0(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NOT_NAN"}};if(N0(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(e.field),op:r2(e.op),value:e.value}}}(t):t instanceof nr?function(e){const n=e.getFilters().map(r=>VT(r));return n.length===1?n[0]:{compositeFilter:{op:i2(e.op),filters:n}}}(t):re()}function s2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Qr{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=hn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class o2{constructor(e){this.fe=e}}function a2(t){const e=e2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bp(e,e.limit,"L"):e}/**
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
 */class l2{constructor(){this.rn=new u2}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(di.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(di.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class u2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new an(Xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new an(Xe.comparator)).toArray()}}/**
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
 */class Xs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Xs(0)}static Mn(){return new Xs(-1)}}/**
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
 */class c2{constructor(){this.changes=new go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class h2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class d2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&la(r.mutation,i,qn.empty(),dt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ko();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ar();const o=aa(),a=aa();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Si)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),la(c.mutation,u,c.mutation.getFieldMask(),dt.now())):o.set(u.key,qn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new h2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=aa();let i=new st((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||qn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=IT();c.forEach(d=>{if(!s.has(d)){const f=OT(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return J.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Di());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,fe())).next(c=>({batchId:a,changes:kT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Ko();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ko();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(u,c){return new Th(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,bt.newInvalidDocument(u)))});let o=Ko();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&la(u.mutation,l,qn.empty(),dt.now()),kh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class f2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:er(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:a2(r.bundledQuery),readTime:er(r.readTime)}}(n)),b.resolve()}}/**
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
 */class p2{constructor(){this.overlays=new st(J.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Di();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Di(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new st((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Di(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Di(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $O(n,r));let s=this.ls.get(n);s===void 0&&(s=fe(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class Qg{constructor(){this.fs=new an(mt.ds),this.ws=new an(mt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new mt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new mt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new J(new Xe([])),r=new mt(n,e),i=new mt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new J(new Xe([])),r=new mt(n,e),i=new mt(n,e+1);let s=fe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new mt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return J.comparator(e.key,n.key)||Te(e.As,n.As)}static _s(e,n){return Te(e.As,n.As)||J.comparator(e.key,n.key)}}/**
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
 */class m2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new an(mt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new mt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new an(Te);return n.forEach(i=>{const s=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new mt(new J(s),0);let a=new an(Te);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ze(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(n.mutations,i=>{const s=new mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new mt(n,0),i=this.Rs.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class g2{constructor(e){this.Ds=e,this.docs=new st(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():bt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ar();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||eO(ZN(c),r)<=0||(i.has(c.key)||kh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Cs(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new y2(this)}getSize(e){return b.resolve(this.size)}}class y2 extends c2{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class v2{constructor(e){this.persistence=e,this.xs=new go(n=>Bg(n),Vg),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Qg,this.targetCount=0,this.Ms=Xs.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Xs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
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
 */class w2{constructor(e,n){this.$s={},this.overlays={},this.Os=new Fg(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new v2(this),this.indexManager=new l2,this.remoteDocumentCache=function(r){return new g2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new o2(n),this.qs=new f2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new p2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new m2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new E2(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class E2 extends nO{constructor(e){super(),this.currentSequenceNumber=e}}class Yg{constructor(e){this.persistence=e,this.Qs=new Qg,this.js=null}static zs(e){return new Yg(e)}get Ws(){if(this.js)return this.js;throw re()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const i=J.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Jg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jg(e,n.fromCache,r,i)}}/**
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
 */class S2{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if($0(n))return b.resolve(null);let r=Rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bp(n,null,"F"),r=Rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,bp(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return $0(n)||i.isEqual(oe.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(R0()<=_e.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lp(n)),this.Wi(e,o,n,XN(i,-1)))})}ji(e,n){let r=new an(TT(e));return n.forEach((i,s)=>{kh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return R0()<=_e.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Lp(n)),this.Ui.getDocumentsMatchingQuery(e,n,di.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class _2{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new st(Te),this.Yi=new go(s=>Bg(s),Vg),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new d2(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function T2(t,e,n,r){return new _2(t,e,n,r)}async function qT(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function C2(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const v=l.docVersions.get(f);ze(v!==null),p.version.compareTo(v)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=fe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function KT(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function k2(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(hn.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,v,E){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let l=Ar(),u=fe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(I2(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(oe.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function I2(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ar();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function x2(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function R2(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function jp(t,e,n){const r=ue(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function G0(t,e,n){const r=ue(t);let i=oe.min(),s=fe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ue(a),h=c.Yi.get(u);return h!==void 0?b.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:fe())).next(a=>(A2(r,SO(e),a),{documents:a,ir:s})))}function A2(t,e,n){let r=t.Xi.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Q0{constructor(){this.activeTargetIds=xO()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P2{constructor(){this.Hr=new Q0,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Q0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class D2{Yr(e){}shutdown(){}}/**
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
 */class Y0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ou=null;function Xd(){return ou===null?ou=268435456+Math.round(2147483648*Math.random()):ou++,"0x"+ou.toString(16)}/**
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
 */const N2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class O2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Dt="WebChannelConnection";class b2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Xd(),a=this.To(e,n);H("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(H("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Gs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+mo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=N2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Xd();return new Promise((o,a)=>{const l=new zN;l.setWithCredentials(!0),l.listenOnce(FN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yd.NO_ERROR:const c=l.getResponseJson();H(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Yd.TIMEOUT:H(Dt,`RPC '${e}' ${s} timed out`),a(new Y(N.DEADLINE_EXCEEDED,"Request time out"));break;case Yd.HTTP_ERROR:const h=l.getStatus();if(H(Dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(E)>=0?E:N.UNKNOWN}(f.status);a(new Y(p,f.message))}else a(new Y(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Y(N.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{H(Dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);H(Dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Xd(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MN(),a=$N(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new jN({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");H(Dt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const p=new O2({ro:E=>{f?H(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(H(Dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),H(Dt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,g,m)=>{E.listen(g,w=>{try{m(w)}catch(y){setTimeout(()=>{throw y},0)}})};return v(h,nu.EventType.OPEN,()=>{f||H(Dt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,nu.EventType.CLOSE,()=>{f||(f=!0,H(Dt,`RPC '${e}' stream ${i} transport closed`),p.wo())}),v(h,nu.EventType.ERROR,E=>{f||(f=!0,Gs(Dt,`RPC '${e}' stream ${i} transport errored:`,E),p.wo(new Y(N.UNAVAILABLE,"The operation could not be completed")))}),v(h,nu.EventType.MESSAGE,E=>{var g;if(!f){const m=E.data[0];ze(!!m);const w=m,y=w.error||((g=w[0])===null||g===void 0?void 0:g.error);if(y){H(Dt,`RPC '${e}' stream ${i} received error:`,y);const C=y.status;let R=function(L){const W=tt[L];if(W!==void 0)return MT(W)}(C),A=y.message;R===void 0&&(R=N.INTERNAL,A="Unknown error status: "+C+" with message "+y.message),f=!0,p.wo(new Y(R,A)),h.close()}else H(Dt,`RPC '${e}' stream ${i} received:`,m),p._o(m)}}),v(a,UN.STAT_EVENT,E=>{E.stat===I0.PROXY?H(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===I0.NOPROXY&&H(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function Zd(){return typeof document<"u"?document:null}/**
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
 */function Ah(t){return new KO(t,!0)}/**
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
 */class WT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class GT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new WT(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new Y(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class L2 extends GT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=QO(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?oe.min():s.readTime?er(s.readTime):oe.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Up(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Op(a)?{documents:XO(i,a)}:{query:ZO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=UT(i,s.resumeToken);const l=Mp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(oe.min())>0){o.readTime=Ac(i,s.snapshotVersion.toTimestamp());const l=Mp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=t2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Up(this.serializer),n.removeTarget=e,this.Wo(n)}}class M2 extends GT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=JO(e.writeResults,e.commitTime),r=er(e.commitTime);return this.listener.cu(r,n)}return ze(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Up(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YO(this.serializer,r))};this.Wo(n)}}/**
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
 */class $2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(N.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(N.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class F2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(xr(n),this.mu=!1):H("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class U2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{rs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.vu.add(4),await _l(l),l.bu.set("Unknown"),l.vu.delete(4),await Ph(l)}(this))})}),this.bu=new F2(r,i)}}async function Ph(t){if(rs(t))for(const e of t.Ru)await e(!0)}async function _l(t){for(const e of t.Ru)await e(!1)}function QT(t,e){const n=ue(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),ey(n)?Zg(n):yo(n).Ko()&&Xg(n,e))}function YT(t,e){const n=ue(t),r=yo(n);n.Au.delete(e),r.Ko()&&JT(n,e),n.Au.size===0&&(r.Ko()?r.jo():rs(n)&&n.bu.set("Unknown"))}function Xg(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yo(t).su(e)}function JT(t,e){t.Vu.qt(e),yo(t).iu(e)}function Zg(t){t.Vu=new BO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),yo(t).start(),t.bu.gu()}function ey(t){return rs(t)&&!yo(t).Uo()&&t.Au.size>0}function rs(t){return ue(t).vu.size===0}function XT(t){t.Vu=void 0}async function j2(t){t.Au.forEach((e,n)=>{Xg(t,e)})}async function z2(t,e){XT(t),ey(t)?(t.bu.Iu(e),Zg(t)):t.bu.set("Unknown")}async function B2(t,e,n){if(t.bu.set("Online"),e instanceof FT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pc(t,r)}else if(e instanceof Pu?t.Vu.Ht(e):e instanceof $T?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(oe.min()))try{const r=await KT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(hn.EMPTY_BYTE_STRING,u.snapshotVersion)),JT(i,a);const c=new Qr(u.target,a,l,u.sequenceNumber);Xg(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Pc(t,r)}}async function Pc(t,e,n){if(!wl(e))throw e;t.vu.add(1),await _l(t),t.bu.set("Offline"),n||(n=()=>KT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Ph(t)})}function ZT(t,e){return e().catch(n=>Pc(t,n,e))}async function Dh(t){const e=ue(t),n=pi(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;V2(e);)try{const i=await x2(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,H2(e,i)}catch(i){await Pc(e,i)}eC(e)&&tC(e)}function V2(t){return rs(t)&&t.Eu.length<10}function H2(t,e){t.Eu.push(e);const n=pi(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function eC(t){return rs(t)&&!pi(t).Uo()&&t.Eu.length>0}function tC(t){pi(t).start()}async function q2(t){pi(t).hu()}async function K2(t){const e=pi(t);for(const n of t.Eu)e.uu(n.mutations)}async function W2(t,e,n){const r=t.Eu.shift(),i=qg.from(r,e,n);await ZT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dh(t)}async function G2(t,e){e&&pi(t).ou&&await async function(n,r){if(i=r.code,UO(i)&&i!==N.ABORTED){const s=n.Eu.shift();pi(n).Qo(),await ZT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Dh(n)}var i}(t,e),eC(t)&&tC(t)}async function J0(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=rs(n);n.vu.add(3),await _l(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Ph(n)}async function Q2(t,e){const n=ue(t);e?(n.vu.delete(2),await Ph(n)):e||(n.vu.add(2),await _l(n),n.bu.set("Unknown"))}function yo(t){return t.Su||(t.Su=function(e,n,r){const i=ue(e);return i.fu(),new L2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:j2.bind(null,t),ao:z2.bind(null,t),nu:B2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),ey(t)?Zg(t):t.bu.set("Unknown")):(await t.Su.stop(),XT(t))})),t.Su}function pi(t){return t.Du||(t.Du=function(e,n,r){const i=ue(e);return i.fu(),new M2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:q2.bind(null,t),ao:G2.bind(null,t),au:K2.bind(null,t),cu:W2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Dh(t)):(await t.Du.stop(),t.Eu.length>0&&(H("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class ty{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ty(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ny(t,e){if(xr("AsyncQueue",`${e}: ${t}`),wl(t))return new Y(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ko(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class X0{constructor(){this.Cu=new st(J.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):re():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,Fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Y2{constructor(){this.Nu=void 0,this.listeners=[]}}class J2{constructor(){this.queries=new go(e=>_T(e),Ch),this.onlineState="Unknown",this.ku=new Set}}async function X2(t,e){const n=ue(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Y2),i)try{s.Nu=await n.onListen(r)}catch(o){const a=ny(o,`Initialization of query '${Lp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&ry(n)}async function Z2(t,e){const n=ue(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function eb(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&ry(n)}function tb(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ry(t){t.ku.forEach(e=>{e.next()})}class nb{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class nC{constructor(e){this.key=e}}class rC{constructor(e){this.key=e}}class rb{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=fe(),this.mutatedKeys=fe(),this.tc=TT(e),this.ec=new Fs(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new X0,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=kh(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(r.track({type:3,doc:f}),E=!0):this.rc(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return f(h)-f(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Zs(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new X0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=fe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new rC(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new nC(r))}),n}hc(e){this.Yu=e.ir,this.Zu=fe();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Zs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ib{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sb{constructor(e){this.key=e,this.fc=!1}}class ob{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new go(a=>_T(a),Ch),this._c=new Map,this.mc=new Set,this.gc=new st(J.comparator),this.yc=new Map,this.Ic=new Qg,this.Tc={},this.Ec=new Map,this.Ac=Xs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function ab(t,e){const n=yb(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await R2(n.localStore,Rr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await lb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&QT(n.remoteStore,o)}return i}async function lb(t,e,n,r,i){t.Rc=(h,d,f)=>async function(p,v,E,g){let m=v.view.sc(E);m.zi&&(m=await G0(p.localStore,v.query,!1).then(({documents:C})=>v.view.sc(C,m)));const w=g&&g.targetChanges.get(v.targetId),y=v.view.applyChanges(m,p.isPrimaryClient,w);return ew(p,v.targetId,y.cc),y.snapshot}(t,h,d,f);const s=await G0(t.localStore,e,!0),o=new rb(e,s.ir),a=o.sc(s.documents),l=Sl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ew(t,n,u.cc);const c=new ib(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function ub(t,e){const n=ue(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Ch(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await jp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),YT(n.remoteStore,r.targetId),zp(n,r.targetId)}).catch(vl)):(zp(n,r.targetId),await jp(n.localStore,r.targetId,!0))}async function cb(t,e,n){const r=vb(t);try{const i=await function(s,o){const a=ue(s),l=dt.now(),u=o.reduce((d,f)=>d.add(f.key),fe());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ar(),p=fe();return a.Zi.getEntries(d,u).next(v=>{f=v,f.forEach((E,g)=>{g.isValidDocument()||(p=p.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const E=[];for(const g of o){const m=bO(g,c.get(g.key).overlayedDocument);m!=null&&E.push(new Si(g.key,m,mT(m.value.mapValue),Zn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:kT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new st(Te)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Tl(r,i.changes),await Dh(r.remoteStore)}catch(i){const s=ny(i,"Failed to persist write");n.reject(s)}}async function iC(t,e){const n=ue(t);try{const r=await k2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ze(o.fc):i.removedDocuments.size>0&&(ze(o.fc),o.fc=!1))}),await Tl(n,r,e)}catch(r){await vl(r)}}function Z0(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ue(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&ry(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hb(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new st(J.comparator);o=o.insert(s,bt.newNoDocument(s,oe.min()));const a=fe().add(s),l=new Rh(oe.min(),new Map,new st(Te),o,a);await iC(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),iy(r)}else await jp(r.localStore,e,!1).then(()=>zp(r,e,n)).catch(vl)}async function db(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await C2(n.localStore,e);oC(n,r,null),sC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,i)}catch(i){await vl(i)}}async function fb(t,e,n){const r=ue(t);try{const i=await function(s,o){const a=ue(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ze(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);oC(r,e,n),sC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,i)}catch(i){await vl(i)}}function sC(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function oC(t,e,n){const r=ue(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function zp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||aC(t,r)})}function aC(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(YT(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),iy(t))}function ew(t,e,n){for(const r of n)r instanceof nC?(t.Ic.addReference(r.key,e),pb(t,r)):r instanceof rC?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||aC(t,r.key)):re()}function pb(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(H("SyncEngine","New document in limbo: "+n),t.mc.add(r),iy(t))}function iy(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new J(Xe.fromString(e)),r=t.Ac.next();t.yc.set(r,new sb(n)),t.gc=t.gc.insert(n,r),QT(t.remoteStore,new Qr(Rr(Hg(n.path)),r,"TargetPurposeLimboResolution",Fg.ct))}}async function Tl(t,e,n){const r=ue(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Jg.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(l,h=>b.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!wl(c))throw c;H("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,p)}}}(r.localStore,s))}async function mb(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await qT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new Y(N.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.er)}}function gb(t,e){const n=ue(t),r=n.yc.get(e);if(r&&r.fc)return fe().add(r.key);{let i=fe();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function yb(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hb.bind(null,e),e.dc.nu=eb.bind(null,e.eventManager),e.dc.Pc=tb.bind(null,e.eventManager),e}function vb(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fb.bind(null,e),e}class tw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return T2(this.persistence,new S2,e.initialUser,this.serializer)}createPersistence(e){return new w2(Yg.zs,this.serializer)}createSharedClientState(e){return new P2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Z0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mb.bind(null,this.syncEngine),await Q2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new J2}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new b2(i));var i;return function(s,o,a,l){return new $2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Z0(this.syncEngine,a,0),o=Y0.D()?new Y0:new D2,new U2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new ob(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);H("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await _l(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Eb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Sb{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Nt.UNAUTHENTICATED,this.clientId=dT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ny(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ef(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Tb(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>J0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>J0(e.remoteStore,s)),t._onlineComponents=e}function _b(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Tb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!_b(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await ef(t,new tw)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ef(t,new tw);return t._offlineComponents}async function lC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await nw(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await nw(t,new wb))),t._onlineComponents}function Cb(t){return lC(t).then(e=>e.syncEngine)}async function kb(t){const e=await lC(t),n=e.eventManager;return n.onListen=ab.bind(null,e.syncEngine),n.onUnlisten=ub.bind(null,e.syncEngine),n}function Ib(t,e,n={}){const r=new oi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Eb({next:h=>{s.enqueueAndForget(()=>Z2(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Y(N.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Y(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new nb(Hg(o.path),u,{includeMetadataChanges:!0,Ku:!0});return X2(i,c)}(await kb(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function uC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rw=new Map;/**
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
 */function xb(t,e,n){if(!n)throw new Y(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rb(t,e,n,r){if(e===!0&&r===!0)throw new Y(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function iw(t){if(!J.isDocumentKey(t))throw new Y(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Yi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sy(t);throw new Y(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class sw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class oy{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new VN;switch(n.type){case"firstParty":return new WN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rw.get(e);n&&(H("ComponentProvider","Removing Datastore"),rw.delete(e),n.terminate())}(this),Promise.resolve()}}function Ab(t,e,n,r={}){var i;const s=(t=Yi(t,oy))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Nt.MOCK_USER;else{a=CS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Y(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Nt(u)}t._authCredentials=new HN(new hT(a,l))}}/**
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
 */class ln{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ka(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class ay{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ay(this.firestore,e,this._query)}}class Ka extends ay{constructor(e,n,r){super(e,n,Hg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new J(e))}withConverter(e){return new Ka(this.firestore,e,this._path)}}function Bp(t,e,...n){if(t=Ht(t),arguments.length===1&&(e=dT.A()),xb("doc","path",e),t instanceof oy){const r=Xe.fromString(e,...n);return iw(r),new ln(t,null,new J(r))}{if(!(t instanceof ln||t instanceof Ka))throw new Y(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return iw(r),new ln(t.firestore,t instanceof Ka?t.converter:null,new J(r))}}/**
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
 */class Pb{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new WT(this,"async_queue_retry"),this.Xc=()=>{const n=Zd();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Zd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new oi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!wl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=ty.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&re()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Nh extends oy{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Pb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hC(this),this._firestoreClient.terminate()}}function Db(t,e){const n=typeof t=="object"?t:sg(),r=typeof t=="string"?t:e||"(default)",i=rh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=SS("firestore");s&&Ab(i,...s)}return i}function cC(t){return t._firestoreClient||hC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hC(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new sO(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,uC(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Sb(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class eo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new eo(hn.fromBase64String(e))}catch(n){throw new Y(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new eo(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Oh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ly{constructor(e){this._methodName=e}}/**
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
 */class uy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */const Nb=/^__.*__$/;class Ob{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,n,this.fieldTransforms):new El(e,this.data,n,this.fieldTransforms)}}class dC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class cy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new cy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Dc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(fC(this.ca)&&Nb.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class bb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ah(e)}ya(e,n,r,i=!1){return new cy({ca:e,methodName:n,ga:r,path:Lt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pC(t){const e=t._freezeSettings(),n=Ah(t._databaseId);return new bb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lb(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);hy("Data must be an object, but it was:",o,r);const a=mC(r,o);let l,u;if(s.merge)l=new qn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Vp(e,h,n);if(!o.contains(d))throw new Y(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);yC(c,d)||c.push(d)}l=new qn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Ob(new Yt(a),l,u)}class bh extends ly{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bh}}function Mb(t,e,n,r){const i=t.ya(1,e,n);hy("Data must be an object, but it was:",i,r);const s=[],o=Yt.empty();ns(r,(l,u)=>{const c=dy(e,l,n);u=Ht(u);const h=i.da(c);if(u instanceof bh)s.push(c);else{const d=Lh(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new qn(s);return new dC(o,a,i.fieldTransforms)}function $b(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Vp(e,r,n)],l=[i];if(s.length%2!=0)throw new Y(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Vp(e,s[d])),l.push(s[d+1]);const u=[],c=Yt.empty();for(let d=a.length-1;d>=0;--d)if(!yC(u,a[d])){const f=a[d];let p=l[d];p=Ht(p);const v=o.da(f);if(p instanceof bh)u.push(f);else{const E=Lh(p,v);E!=null&&(u.push(f),c.set(f,E))}}const h=new qn(u);return new dC(c,h,o.fieldTransforms)}function Lh(t,e){if(gC(t=Ht(t)))return hy("Unsupported field value:",e,t),mC(t,e);if(t instanceof ly)return function(n,r){if(!fC(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Lh(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RO(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=dt.fromDate(n);return{timestampValue:Ac(r.serializer,i)}}if(n instanceof dt){const i=new dt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ac(r.serializer,i)}}if(n instanceof uy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof eo)return{bytesValue:UT(r.serializer,n._byteString)};if(n instanceof ln){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${sy(n)}`)}(t,e)}function mC(t,e){const n={};return fT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,(r,i)=>{const s=Lh(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function gC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof uy||t instanceof eo||t instanceof ln||t instanceof ly)}function hy(t,e,n){if(!gC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=sy(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Vp(t,e,n){if((e=Ht(e))instanceof Oh)return e._internalPath;if(typeof e=="string")return dy(t,e);throw Dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Fb=new RegExp("[~\\*/\\[\\]]");function dy(t,e,n){if(e.search(Fb)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oh(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Y(N.INVALID_ARGUMENT,a+t+l)}function yC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ub(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ub extends vC{data(){return super.data()}}function wC(t,e){return typeof e=="string"?dy(t,e):e instanceof Oh?e._internalPath:e._delegate._internalPath}class jb{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ns(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new uy(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const n=fi(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);ze(HT(r));const i=new Ba(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function zb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Bb{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EC extends vC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vb(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vb extends EC{data(e={}){return super.data(e)}}/**
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
 */function Hb(t){t=Yi(t,ln);const e=Yi(t.firestore,Nh);return Ib(cC(e),t._key).then(n=>Gb(e,t,n))}class qb extends jb{constructor(e){super(),this.firestore=e}convertBytes(e){return new eo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,n)}}function Kb(t,e,n){t=Yi(t,ln);const r=Yi(t.firestore,Nh),i=zb(t.converter,e,n);return SC(r,[Lb(pC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zn.none())])}function Wb(t,e,n,...r){t=Yi(t,ln);const i=Yi(t.firestore,Nh),s=pC(i);let o;return o=typeof(e=Ht(e))=="string"||e instanceof Oh?$b(s,"updateDoc",t._key,e,n,r):Mb(s,"updateDoc",t._key,e),SC(i,[o.toMutation(t._key,Zn.exists(!0))])}function SC(t,e){return function(n,r){const i=new oi;return n.asyncQueue.enqueueAndForget(async()=>cb(await Cb(n),r,i)),i.promise}(cC(t),e)}function Gb(t,e,n){const r=n.docs.get(e._key),i=new qb(t);return new EC(t,i,e._key,r,new Bb(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){mo=n})(es),Hi(new hi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Nh(new qN(n.getProvider("auth-internal")),new QN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Y(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Yn(x0,"3.13.0",t),Yn(x0,"3.13.0","esm2017")})();/**
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
 */const _C="firebasestorage.googleapis.com",Qb="storageBucket",Yb=2*60*1e3,Jb=10*60*1e3;/**
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
 */class sr extends ir{constructor(e,n,r=0){super(tf(e),`Firebase Storage: ${n} (${tf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rr||(rr={}));function tf(t){return"storage/"+t}function Xb(){const t="An unknown error occurred, please check the error payload for server response.";return new sr(rr.UNKNOWN,t)}function Zb(){return new sr(rr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eL(){return new sr(rr.CANCELED,"User canceled the upload/download.")}function tL(t){return new sr(rr.INVALID_URL,"Invalid URL '"+t+"'.")}function nL(t){return new sr(rr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ow(t){return new sr(rr.INVALID_ARGUMENT,t)}function TC(){return new sr(rr.APP_DELETED,"The Firebase app was deleted.")}function rL(t){return new sr(rr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Dn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dn.makeFromUrl(e,n)}catch{return new Dn(e,"")}if(r.path==="")return r;throw nL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===_C?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${E}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<w.length;y++){const C=w[y],R=C.regex.exec(e);if(R){const A=R[C.indices.bucket];let L=R[C.indices.path];L||(L=""),r=new Dn(A,L),C.postModify(r);break}}if(r==null)throw tL(e);return r}}class iL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function sL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function d(){s&&clearTimeout(s)}function f(E,...g){if(u){d();return}if(E){d(),c.call(null,E,...g);return}if(l()||o){d(),c.call(null,E,...g);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let p=!1;function v(E){p||(p=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function oL(t){t(!1)}/**
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
 */function aL(t){return t!==void 0}function aw(t,e,n,r){if(r<e)throw ow(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ow(`Invalid value for '${t}'. Expected ${n} or less.`)}function lL(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Nc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nc||(Nc={}));/**
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
 */function uL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class cL{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new au(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nc.NO_ERROR,l=s.getStatus();if(!a||uL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Nc.ABORT;r(!1,new au(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new au(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());aL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Xb();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?TC():eL();o(l)}else{const l=Zb();o(l)}};this.canceled_?n(!1,new au(!1,null,!0)):this.backoffId_=sL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class au{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mL(t,e,n,r,i,s,o=!0){const a=lL(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return fL(u,e),hL(u,n),dL(u,s),pL(u,r),new cL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function gL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Oc{constructor(e,n){this._service=e,n instanceof Dn?this._location=n:this._location=Dn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oc(e,n)}get root(){const e=new Dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yL(this._location.path)}get storage(){return this._service}get parent(){const e=gL(this._location.path);if(e===null)return null;const n=new Dn(this._location.bucket,e);return new Oc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rL(e)}}function lw(t,e){const n=e==null?void 0:e[Qb];return n==null?null:Dn.makeFromBucketSpec(n,t)}function vL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:CS(i,t.app.options.projectId))}class wL{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=_C,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yb,this._maxUploadRetryTime=Jb,this._requests=new Set,i!=null?this._bucket=Dn.makeFromBucketSpec(i,this._host):this._bucket=lw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dn.makeFromBucketSpec(this._url,e):this._bucket=lw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){aw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){aw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new iL(TC());{const o=mL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const uw="@firebase/storage",cw="0.11.2";/**
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
 */const CC="storage";function EL(t=sg(),e){t=Ht(t);const r=rh(t,CC).getImmediate({identifier:e}),i=SS("storage");return i&&SL(r,...i),r}function SL(t,e,n,r={}){vL(t,e,n,r)}function _L(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wL(n,r,i,e,es)}function TL(){Hi(new hi(CC,_L,"PUBLIC").setMultipleInstances(!0)),Yn(uw,cw,""),Yn(uw,cw,"esm2017")}TL();const CL={apiKey:"AIzaSyDjp2naVdYBa2RhxnnLuiDBo3Y1kJvg3Ro",authDomain:"coordinates-10459.firebaseapp.com",projectId:"coordinates-10459",storageBucket:"coordinates-10459.appspot.com",messagingSenderId:"17389845792",appId:"1:17389845792:web:324711e8abcbb7c6aeeb45",measurementId:"G-C4T1LXJLHM"},fy=xS(CL),hw=OD(fy),Hp=Db(fy);EL(fy);/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qe.apply(this,arguments)}var nt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nt||(nt={}));const dw="popstate";function kL(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Wa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ji(i)}return xL(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function to(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IL(){return Math.random().toString(36).substr(2,8)}function fw(t,e){return{usr:t.state,key:t.key,idx:e}}function Wa(t,e,n,r){return n===void 0&&(n=null),qe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Dr(e):e,{state:n,key:e&&e.key||r||IL()})}function Ji(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Dr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xL(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(qe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=nt.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:g})}function d(E,g){a=nt.Push;let m=Wa(v.location,E,g);n&&n(m,E),u=c()+1;let w=fw(m,u),y=v.createHref(m);try{o.pushState(w,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(y)}s&&l&&l({action:a,location:v.location,delta:1})}function f(E,g){a=nt.Replace;let m=Wa(v.location,E,g);n&&n(m,E),u=c();let w=fw(m,u),y=v.createHref(m);o.replaceState(w,"",y),s&&l&&l({action:a,location:v.location,delta:0})}function p(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof E=="string"?E:Ji(E);return he(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dw,h),l=E,()=>{i.removeEventListener(dw,h),l=null}},createHref(E){return e(i,E)},createURL:p,encodeLocation(E){let g=p(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:f,go(E){return o.go(E)}};return v}var lt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lt||(lt={}));const RL=new Set(["lazy","caseSensitive","path","id","index","children"]);function AL(t){return t.index===!0}function qp(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),AL(i)){let l=qe({},i,e(i),{id:a});return r[a]=l,l}else{let l=qe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=qp(i.children,e,o,r)),l}})}function Cs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Dr(e):e,i=vo(r.pathname||"/",n);if(i==null)return null;let s=kC(t);PL(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UL(s[a],BL(i));return o}function kC(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kC(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:$L(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of IC(s.path))i(s,o,l)}),e}function IC(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=IC(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FL(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DL=/^:\w+$/,NL=3,OL=2,bL=1,LL=10,ML=-2,pw=t=>t==="*";function $L(t,e){let n=t.split("/"),r=n.length;return n.some(pw)&&(r+=ML),e&&(r+=OL),n.filter(i=>!pw(i)).reduce((i,s)=>i+(DL.test(s)?NL:s===""?bL:LL),r)}function FL(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UL(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=jL({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:wr([i,c.pathname]),pathnameBase:KL(wr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=wr([i,c.pathnameBase]))}return s}function jL(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zL(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=VL(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zL(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),to(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BL(t){try{return decodeURI(t)}catch(e){return to(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function VL(t,e){try{return decodeURIComponent(t)}catch(n){return to(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function vo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HL(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Dr(t):t;return{pathname:n?n.startsWith("/")?n:qL(n,e):e,search:WL(r),hash:GL(i)}}function qL(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Dr(t):(i=qe({},t),he(!i.pathname||!i.pathname.includes("?"),nf("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),nf("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),nf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=HL(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wr=t=>t.join("/").replace(/\/\/+/g,"/"),KL=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WL=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class py{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function xC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RC=["post","put","patch","delete"],QL=new Set(RC),YL=["get",...RC],JL=new Set(YL),XL=new Set([301,302,303,307,308]),ZL=new Set([307,308]),rf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},eM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},lu={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},AC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tM=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function nM(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;he(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=k=>({hasErrorBoundary:T(k)})}else i=tM;let s={},o=qp(t.routes,i,void 0,s),a,l=t.basename||"/",u=qe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,f=null,p=null,v=t.hydrationData!=null,E=Cs(o,t.history.location,l),g=null;if(E==null){let T=yn(404,{pathname:t.history.location.pathname}),{matches:k,route:P}=_w(o);E=k,g={[P.id]:T}}let m=!E.some(T=>T.route.lazy)&&(!E.some(T=>T.route.loader)||t.hydrationData!=null),w,y={historyAction:t.history.action,location:t.history.location,matches:E,initialized:m,navigation:rf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},C=nt.Pop,R=!1,A,L=!1,W=!1,K=[],Oe=[],ie=new Map,Pe=0,be=-1,Ce=new Map,De=new Set,Ne=new Map,D=new Map,B=new Map,G=!1;function ye(){return c=t.history.listen(T=>{let{action:k,location:P,delta:V}=T;if(G){G=!1;return}to(B.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let le=is({currentLocation:y.location,nextLocation:P,historyAction:k});if(le&&V!=null){G=!0,t.history.go(V*-1),br(le,{state:"blocked",location:P,proceed(){br(le,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(V)},reset(){let ee=new Map(y.blockers);ee.set(le,lu),$({blockers:ee})}});return}return M(k,P)}),y.initialized||M(nt.Pop,y.location),w}function F(){c&&c(),h.clear(),A&&A.abort(),y.fetchers.forEach((T,k)=>ar(k)),y.blockers.forEach((T,k)=>Ve(k))}function j(T){return h.add(T),()=>h.delete(T)}function $(T){y=qe({},y,T),h.forEach(k=>k(y))}function Q(T,k){var P,V;let le=y.actionData!=null&&y.navigation.formMethod!=null&&An(y.navigation.formMethod)&&y.navigation.state==="loading"&&((P=T.state)==null?void 0:P._isRedirect)!==!0,ee;k.actionData?Object.keys(k.actionData).length>0?ee=k.actionData:ee=null:le?ee=y.actionData:ee=null;let se=k.loaderData?Sw(y.loaderData,k.loaderData,k.matches||[],k.errors):y.loaderData,te=new Map;B.clear();let q=R===!0||y.navigation.formMethod!=null&&An(y.navigation.formMethod)&&((V=T.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),L||C===nt.Pop||(C===nt.Push?t.history.push(T,T.state):C===nt.Replace&&t.history.replace(T,T.state)),$(qe({},k,{actionData:ee,loaderData:se,historyAction:C,location:T,initialized:!0,navigation:rf,revalidation:"idle",restoreScrollPosition:Dy(T,k.matches||y.matches),preventScrollReset:q,blockers:te})),C=nt.Pop,R=!1,L=!1,W=!1,K=[],Oe=[]}async function _(T,k){if(typeof T=="number"){t.history.go(T);return}let P=Kp(y.location,y.matches,l,u.v7_prependBasename,T,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:V,submission:le,error:ee}=mw(u.v7_normalizeFormMethod,!1,P,k),se=y.location,te=Wa(y.location,V,k&&k.state);te=qe({},te,t.history.encodeLocation(te));let q=k&&k.replace!=null?k.replace:void 0,$e=nt.Push;q===!0?$e=nt.Replace:q===!1||le!=null&&An(le.formMethod)&&le.formAction===y.location.pathname+y.location.search&&($e=nt.Replace);let ke=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,nn=is({currentLocation:se,nextLocation:te,historyAction:$e});if(nn){br(nn,{state:"blocked",location:te,proceed(){br(nn,{state:"proceeding",proceed:void 0,reset:void 0,location:te}),_(T,k)},reset(){let pt=new Map(y.blockers);pt.set(nn,lu),$({blockers:pt})}});return}return await M($e,te,{submission:le,pendingError:ee,preventScrollReset:ke,replace:k&&k.replace})}function de(){if(me(),$({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){M(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}M(C||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function M(T,k,P){A&&A.abort(),A=null,C=T,L=(P&&P.startUninterruptedRevalidation)===!0,Ik(y.location,y.matches),R=(P&&P.preventScrollReset)===!0;let V=a||o,le=P&&P.overrideNavigation,ee=Cs(V,k,l);if(!ee){let pt=yn(404,{pathname:k.pathname}),{matches:Gt,route:Fn}=_w(V);mn(),Q(k,{matches:Gt,loaderData:{},errors:{[Fn.id]:pt}});return}if(y.initialized&&!W&&aM(y.location,k)&&!(P&&P.submission&&An(P.submission.formMethod))){Q(k,{matches:ee});return}A=new AbortController;let se=Lo(t.history,k,A.signal,P&&P.submission),te,q;if(P&&P.pendingError)q={[ks(ee).route.id]:P.pendingError};else if(P&&P.submission&&An(P.submission.formMethod)){let pt=await Be(se,k,P.submission,ee,{replace:P.replace});if(pt.shortCircuited)return;te=pt.pendingActionData,q=pt.pendingActionError,le=uu(k,P.submission),se=new Request(se.url,{signal:se.signal})}let{shortCircuited:$e,loaderData:ke,errors:nn}=await Ee(se,k,ee,le,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,te,q);$e||(A=null,Q(k,qe({matches:ee},te?{actionData:te}:{},{loaderData:ke,errors:nn})))}async function Be(T,k,P,V,le){le===void 0&&(le={}),me();let ee=dM(k,P);$({navigation:ee});let se,te=Gp(V,k);if(!te.route.action&&!te.route.lazy)se={type:lt.error,error:yn(405,{method:T.method,pathname:k.pathname,routeId:te.route.id})};else if(se=await bo("action",T,te,V,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(Us(se)){let q;return le&&le.replace!=null?q=le.replace:q=se.location===y.location.pathname+y.location.search,await ce(y,se,{submission:P,replace:q}),{shortCircuited:!0}}if(ua(se)){let q=ks(V,te.route.id);return(le&&le.replace)!==!0&&(C=nt.Push),{pendingActionData:{},pendingActionError:{[q.route.id]:se.error}}}if(Ni(se))throw yn(400,{type:"defer-action"});return{pendingActionData:{[te.route.id]:se.data}}}async function Ee(T,k,P,V,le,ee,se,te,q){let $e=V||uu(k,le),ke=le||ee||kw($e),nn=a||o,[pt,Gt]=gw(t.history,y,P,ke,k,W,K,Oe,Ne,De,nn,l,te,q);if(mn(He=>!(P&&P.some(gn=>gn.route.id===He))||pt&&pt.some(gn=>gn.route.id===He)),pt.length===0&&Gt.length===0){let He=Or();return Q(k,qe({matches:P,loaderData:{},errors:q||null},te?{actionData:te}:{},He?{fetchers:new Map(y.fetchers)}:{})),{shortCircuited:!0}}if(!L){Gt.forEach(gn=>{let ss=y.fetchers.get(gn.key),St=Mo(void 0,ss?ss.data:void 0);y.fetchers.set(gn.key,St)});let He=te||y.actionData;$(qe({navigation:$e},He?Object.keys(He).length===0?{actionData:null}:{actionData:He}:{},Gt.length>0?{fetchers:new Map(y.fetchers)}:{}))}be=++Pe,Gt.forEach(He=>{ie.has(He.key)&&Le(He.key),He.controller&&ie.set(He.key,He.controller)});let Fn=()=>Gt.forEach(He=>Le(He.key));A&&A.signal.addEventListener("abort",Fn);let{results:_o,loaderResults:id,fetcherResults:Dl}=await at(y.matches,P,pt,Gt,T);if(T.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Fn),Gt.forEach(He=>ie.delete(He.key));let lr=Tw(_o);if(lr)return await ce(y,lr,{replace:se}),{shortCircuited:!0};let{loaderData:Nl,errors:sd}=Ew(y,P,pt,id,q,Gt,Dl,D);D.forEach((He,gn)=>{He.subscribe(ss=>{(ss||He.done)&&D.delete(gn)})});let od=Or(),ad=Wt(be),Ol=od||ad||Gt.length>0;return qe({loaderData:Nl,errors:sd},Ol?{fetchers:new Map(y.fetchers)}:{})}function Se(T){return y.fetchers.get(T)||eM}function ae(T,k,P,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(T)&&Le(T);let le=a||o,ee=Kp(y.location,y.matches,l,u.v7_prependBasename,P,k,V==null?void 0:V.relative),se=Cs(le,ee,l);if(!se){Ye(T,k,yn(404,{pathname:ee}));return}let{path:te,submission:q,error:$e}=mw(u.v7_normalizeFormMethod,!0,ee,V);if($e){Ye(T,k,$e);return}let ke=Gp(se,te);if(R=(V&&V.preventScrollReset)===!0,q&&An(q.formMethod)){ot(T,k,te,ke,se,q);return}Ne.set(T,{routeId:k,path:te}),Rt(T,k,te,ke,se,q)}async function ot(T,k,P,V,le,ee){if(me(),Ne.delete(T),!V.route.action&&!V.route.lazy){let St=yn(405,{method:ee.formMethod,pathname:P,routeId:k});Ye(T,k,St);return}let se=y.fetchers.get(T),te=fM(ee,se);y.fetchers.set(T,te),$({fetchers:new Map(y.fetchers)});let q=new AbortController,$e=Lo(t.history,P,q.signal,ee);ie.set(T,q);let ke=await bo("action",$e,V,le,s,i,l);if($e.signal.aborted){ie.get(T)===q&&ie.delete(T);return}if(Us(ke)){ie.delete(T),De.add(T);let St=Mo(ee);return y.fetchers.set(T,St),$({fetchers:new Map(y.fetchers)}),ce(y,ke,{submission:ee,isFetchActionRedirect:!0})}if(ua(ke)){Ye(T,k,ke.error);return}if(Ni(ke))throw yn(400,{type:"defer-action"});let nn=y.navigation.location||y.location,pt=Lo(t.history,nn,q.signal),Gt=a||o,Fn=y.navigation.state!=="idle"?Cs(Gt,y.navigation.location,l):y.matches;he(Fn,"Didn't find any matches after fetcher action");let _o=++Pe;Ce.set(T,_o);let id=Mo(ee,ke.data);y.fetchers.set(T,id);let[Dl,lr]=gw(t.history,y,Fn,ee,nn,W,K,Oe,Ne,De,Gt,l,{[V.route.id]:ke.data},void 0);lr.filter(St=>St.key!==T).forEach(St=>{let To=St.key,Ny=y.fetchers.get(To),Rk=Mo(void 0,Ny?Ny.data:void 0);y.fetchers.set(To,Rk),ie.has(To)&&Le(To),St.controller&&ie.set(To,St.controller)}),$({fetchers:new Map(y.fetchers)});let Nl=()=>lr.forEach(St=>Le(St.key));q.signal.addEventListener("abort",Nl);let{results:sd,loaderResults:od,fetcherResults:ad}=await at(y.matches,Fn,Dl,lr,pt);if(q.signal.aborted)return;q.signal.removeEventListener("abort",Nl),Ce.delete(T),ie.delete(T),lr.forEach(St=>ie.delete(St.key));let Ol=Tw(sd);if(Ol)return ce(y,Ol);let{loaderData:He,errors:gn}=Ew(y,y.matches,Dl,od,void 0,lr,ad,D);if(y.fetchers.has(T)){let St=Du(ke.data);y.fetchers.set(T,St)}let ss=Wt(_o);y.navigation.state==="loading"&&_o>be?(he(C,"Expected pending action"),A&&A.abort(),Q(y.navigation.location,{matches:Fn,loaderData:He,errors:gn,fetchers:new Map(y.fetchers)})):($(qe({errors:gn,loaderData:Sw(y.loaderData,He,Fn,gn)},ss||lr.length>0?{fetchers:new Map(y.fetchers)}:{})),W=!1)}async function Rt(T,k,P,V,le,ee){let se=y.fetchers.get(T),te=Mo(ee,se?se.data:void 0);y.fetchers.set(T,te),$({fetchers:new Map(y.fetchers)});let q=new AbortController,$e=Lo(t.history,P,q.signal);ie.set(T,q);let ke=await bo("loader",$e,V,le,s,i,l);if(Ni(ke)&&(ke=await NC(ke,$e.signal,!0)||ke),ie.get(T)===q&&ie.delete(T),$e.signal.aborted)return;if(Us(ke)){De.add(T),await ce(y,ke);return}if(ua(ke)){let pt=ks(y.matches,k);y.fetchers.delete(T),$({fetchers:new Map(y.fetchers),errors:{[pt.route.id]:ke.error}});return}he(!Ni(ke),"Unhandled fetcher deferred data");let nn=Du(ke.data);y.fetchers.set(T,nn),$({fetchers:new Map(y.fetchers)})}async function ce(T,k,P){let{submission:V,replace:le,isFetchActionRedirect:ee}=P===void 0?{}:P;k.revalidate&&(W=!0);let se=Wa(T.location,k.location,qe({_isRedirect:!0},ee?{_isFetchActionRedirect:!0}:{}));if(he(se,"Expected a location on the redirect navigation"),AC.test(k.location)&&n){let $e=t.history.createURL(k.location),ke=vo($e.pathname,l)==null;if(e.location.origin!==$e.origin||ke){le?e.location.replace(k.location):e.location.assign(k.location);return}}A=null;let te=le===!0?nt.Replace:nt.Push,q=V||kw(T.navigation);if(ZL.has(k.status)&&q&&An(q.formMethod))await M(te,se,{submission:qe({},q,{formAction:k.location}),preventScrollReset:R});else if(ee)await M(te,se,{overrideNavigation:uu(se),fetcherSubmission:q,preventScrollReset:R});else{let $e=uu(se,q);await M(te,se,{overrideNavigation:$e,preventScrollReset:R})}}async function at(T,k,P,V,le){let ee=await Promise.all([...P.map(q=>bo("loader",le,q,k,s,i,l)),...V.map(q=>q.matches&&q.match&&q.controller?bo("loader",Lo(t.history,q.path,q.controller.signal),q.match,q.matches,s,i,l):{type:lt.error,error:yn(404,{pathname:q.path})})]),se=ee.slice(0,P.length),te=ee.slice(P.length);return await Promise.all([Cw(T,P,se,se.map(()=>le.signal),!1,y.loaderData),Cw(T,V.map(q=>q.match),te,V.map(q=>q.controller?q.controller.signal:null),!0)]),{results:ee,loaderResults:se,fetcherResults:te}}function me(){W=!0,K.push(...mn()),Ne.forEach((T,k)=>{ie.has(k)&&(Oe.push(k),Le(k))})}function Ye(T,k,P){let V=ks(y.matches,k);ar(T),$({errors:{[V.route.id]:P},fetchers:new Map(y.fetchers)})}function ar(T){let k=y.fetchers.get(T);ie.has(T)&&!(k&&k.state==="loading"&&Ce.has(T))&&Le(T),Ne.delete(T),Ce.delete(T),De.delete(T),y.fetchers.delete(T)}function Le(T){let k=ie.get(T);he(k,"Expected fetch controller: "+T),k.abort(),ie.delete(T)}function _i(T){for(let k of T){let P=Se(k),V=Du(P.data);y.fetchers.set(k,V)}}function Or(){let T=[],k=!1;for(let P of De){let V=y.fetchers.get(P);he(V,"Expected fetcher: "+P),V.state==="loading"&&(De.delete(P),T.push(P),k=!0)}return _i(T),k}function Wt(T){let k=[];for(let[P,V]of Ce)if(V<T){let le=y.fetchers.get(P);he(le,"Expected fetcher: "+P),le.state==="loading"&&(Le(P),Ce.delete(P),k.push(P))}return _i(k),k.length>0}function X(T,k){let P=y.blockers.get(T)||lu;return B.get(T)!==k&&B.set(T,k),P}function Ve(T){y.blockers.delete(T),B.delete(T)}function br(T,k){let P=y.blockers.get(T)||lu;he(P.state==="unblocked"&&k.state==="blocked"||P.state==="blocked"&&k.state==="blocked"||P.state==="blocked"&&k.state==="proceeding"||P.state==="blocked"&&k.state==="unblocked"||P.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+k.state);let V=new Map(y.blockers);V.set(T,k),$({blockers:V})}function is(T){let{currentLocation:k,nextLocation:P,historyAction:V}=T;if(B.size===0)return;B.size>1&&to(!1,"A router only supports one blocker at a time");let le=Array.from(B.entries()),[ee,se]=le[le.length-1],te=y.blockers.get(ee);if(!(te&&te.state==="proceeding")&&se({currentLocation:k,nextLocation:P,historyAction:V}))return ee}function mn(T){let k=[];return D.forEach((P,V)=>{(!T||T(V))&&(P.cancel(),k.push(V),D.delete(V))}),k}function kk(T,k,P){if(d=T,p=k,f=P||null,!v&&y.navigation===rf){v=!0;let V=Dy(y.location,y.matches);V!=null&&$({restoreScrollPosition:V})}return()=>{d=null,p=null,f=null}}function Py(T,k){return f&&f(T,k.map(V=>hM(V,y.loaderData)))||T.key}function Ik(T,k){if(d&&p){let P=Py(T,k);d[P]=p()}}function Dy(T,k){if(d){let P=Py(T,k),V=d[P];if(typeof V=="number")return V}return null}function xk(T){s={},a=qp(T,i,void 0,s)}return w={get basename(){return l},get state(){return y},get routes(){return o},initialize:ye,subscribe:j,enableScrollRestoration:kk,navigate:_,fetch:ae,revalidate:de,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:Se,deleteFetcher:ar,dispose:F,getBlocker:X,deleteBlocker:Ve,_internalFetchControllers:ie,_internalActiveDeferreds:D,_internalSetRoutes:xk},w}function rM(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Kp(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Mh(i||".",Cl(a).map(c=>c.pathnameBase),vo(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!my(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:wr([n,u.pathname])),Ji(u)}function mw(t,e,n,r){if(!r||!rM(r))return{path:n};if(r.formMethod&&!cM(r.formMethod))return{path:n,error:yn(405,{method:r.formMethod})};let i=()=>({path:n,error:yn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=DC(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!An(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((f,p)=>{let[v,E]=p;return""+f+v+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!An(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Wp(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Wp(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=ww(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=ww(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(An(c.formMethod))return{path:n,submission:c};let h=Dr(n);return e&&h.search&&my(h.search)&&l.append("index",""),h.search="?"+l,{path:Ji(h),submission:c}}function iM(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function gw(t,e,n,r,i,s,o,a,l,u,c,h,d,f){let p=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,v=t.createURL(e.location),E=t.createURL(i),g=f?Object.keys(f)[0]:void 0,w=iM(n,g).filter((C,R)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(sM(e.loaderData,e.matches[R],C)||o.some(W=>W===C.route.id))return!0;let A=e.matches[R],L=C;return yw(C,qe({currentUrl:v,currentParams:A.params,nextUrl:E,nextParams:L.params},r,{actionResult:p,defaultShouldRevalidate:s||v.pathname+v.search===E.pathname+E.search||v.search!==E.search||PC(A,L)}))}),y=[];return l.forEach((C,R)=>{if(!n.some(ie=>ie.route.id===C.routeId))return;let A=Cs(c,C.path,h);if(!A){y.push({key:R,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let L=e.fetchers.get(R),W=L&&L.state!=="idle"&&L.data===void 0&&!u.has(R),K=Gp(A,C.path);(a.includes(R)||W||yw(K,qe({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:p,defaultShouldRevalidate:s})))&&y.push({key:R,routeId:C.routeId,path:C.path,matches:A,match:K,controller:new AbortController})}),[w,y]}function sM(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function PC(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function yw(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function vw(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];he(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";to(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!RL.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,qe({},e(i),{lazy:void 0}))}async function bo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=p=>{let v,E=new Promise((g,m)=>v=m);return c=()=>v(),e.signal.addEventListener("abort",c),Promise.race([p({request:e,params:n.params,context:a.requestContext}),E])};try{let p=n.route[t];if(n.route.lazy)if(p)u=(await Promise.all([h(p),vw(n.route,s,i)]))[0];else if(await vw(n.route,s,i),p=n.route[t],p)u=await h(p);else if(t==="action"){let v=new URL(e.url),E=v.pathname+v.search;throw yn(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:lt.data,data:void 0};else if(p)u=await h(p);else{let v=new URL(e.url),E=v.pathname+v.search;throw yn(404,{pathname:E})}he(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(p){l=lt.error,u=p}finally{c&&e.signal.removeEventListener("abort",c)}if(uM(u)){let p=u.status;if(XL.has(p)){let g=u.headers.get("Location");if(he(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!AC.test(g))g=Kp(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let m=new URL(e.url),w=g.startsWith("//")?new URL(m.protocol+g):new URL(g),y=vo(w.pathname,o)!=null;w.origin===m.origin&&y&&(g=w.pathname+w.search+w.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:lt.redirect,status:p,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||lt.data,response:u};let v,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?v=await u.json():v=await u.text(),l===lt.error?{type:l,error:new py(p,u.statusText,v),headers:u.headers}:{type:lt.data,data:v,statusCode:u.status,headers:u.headers}}if(l===lt.error)return{type:l,error:u};if(lM(u)){var d,f;return{type:lt.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((f=u.init)==null?void 0:f.headers)&&new Headers(u.init.headers)}}return{type:lt.data,data:u}}function Lo(t,e,n,r){let i=t.createURL(DC(e)).toString(),s={signal:n};if(r&&An(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Wp(r.formData):s.body=r.formData}return new Request(i,s)}function Wp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function ww(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function oM(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(he(!Us(c),"Cannot handle redirect results in processLoaderData"),ua(c)){let f=ks(t,d),p=c.error;r&&(p=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=p),s[d]=void 0,l||(l=!0,a=xC(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else Ni(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Ew(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=oM(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:f}=s[c];he(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let p=o[c];if(!(f&&f.signal.aborted))if(ua(p)){let v=ks(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=qe({},u,{[v.route.id]:p.error})),t.fetchers.delete(h)}else if(Us(p))he(!1,"Unhandled fetcher revalidation redirect");else if(Ni(p))he(!1,"Unhandled fetcher deferred data");else{let v=Du(p.data);t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function Sw(t,e,n,r){let i=qe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ks(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function _w(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function yn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new py(t||500,o,new Error(a),!0)}function Tw(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Us(n))return n}}function DC(t){let e=typeof t=="string"?Dr(t):t;return Ji(qe({},e,{hash:""}))}function aM(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Ni(t){return t.type===lt.deferred}function ua(t){return t.type===lt.error}function Us(t){return(t&&t.type)===lt.redirect}function lM(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function uM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function cM(t){return JL.has(t.toLowerCase())}function An(t){return QL.has(t.toLowerCase())}async function Cw(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!PC(u,l)&&(s&&s[l.route.id])!==void 0;if(Ni(a)&&(i||c)){let h=r[o];he(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await NC(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function NC(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:lt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:lt.error,error:i}}return{type:lt.data,data:t.deferredData.data}}}function my(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function hM(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Gp(t,e){let n=typeof e=="string"?Dr(e).search:e.search;if(t[t.length-1].route.index&&my(n||""))return t[t.length-1];let r=Cl(t);return r[r.length-1]}function kw(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function uu(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function dM(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Mo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function fM(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Du(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bc.apply(this,arguments)}const $h=x.createContext(null),OC=x.createContext(null),wo=x.createContext(null),Fh=x.createContext(null),Nr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),bC=x.createContext(null);function pM(t,e){let{relative:n}=e===void 0?{}:e;Eo()||he(!1);let{basename:r,navigator:i}=x.useContext(wo),{hash:s,pathname:o,search:a}=MC(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:wr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Eo(){return x.useContext(Fh)!=null}function kl(){return Eo()||he(!1),x.useContext(Fh).location}function LC(t){x.useContext(wo).static||x.useLayoutEffect(t)}function Il(){let{isDataRoute:t}=x.useContext(Nr);return t?RM():mM()}function mM(){Eo()||he(!1);let t=x.useContext($h),{basename:e,navigator:n}=x.useContext(wo),{matches:r}=x.useContext(Nr),{pathname:i}=kl(),s=JSON.stringify(Cl(r).map(l=>l.pathnameBase)),o=x.useRef(!1);return LC(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Mh(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:wr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const gM=x.createContext(null);function yM(t){let e=x.useContext(Nr).outlet;return e&&x.createElement(gM.Provider,{value:t},e)}function MC(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(Nr),{pathname:i}=kl(),s=JSON.stringify(Cl(r).map(o=>o.pathnameBase));return x.useMemo(()=>Mh(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function vM(t,e,n){Eo()||he(!1);let{navigator:r}=x.useContext(wo),{matches:i}=x.useContext(Nr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=kl(),u;if(e){var c;let v=typeof e=="string"?Dr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||he(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=Cs(t,{pathname:d}),p=TM(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:wr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:wr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&p?x.createElement(Fh.Provider,{value:{location:bc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nt.Pop}},p):p}function wM(){let t=xM(),e=xC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,s)}const EM=x.createElement(wM,null);class SM extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(Nr.Provider,{value:this.props.routeContext},x.createElement(bC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _M(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext($h);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Nr.Provider,{value:e},r)}function TM(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||he(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||EM);let d=e.concat(s.slice(0,u+1)),f=()=>{let p;return c?p=h:l.route.Component?p=x.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=a,x.createElement(_M,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(SM,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Qp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Qp||(Qp={}));var Ga;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ga||(Ga={}));function CM(t){let e=x.useContext($h);return e||he(!1),e}function kM(t){let e=x.useContext(OC);return e||he(!1),e}function IM(t){let e=x.useContext(Nr);return e||he(!1),e}function $C(t){let e=IM(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function xM(){var t;let e=x.useContext(bC),n=kM(Ga.UseRouteError),r=$C(Ga.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function RM(){let{router:t}=CM(Qp.UseNavigateStable),e=$C(Ga.UseNavigateStable),n=x.useRef(!1);return LC(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,bc({fromRouteId:e},s)))},[t,e])}const AM="startTransition",Iw=qk[AM];function PM(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=x.useState(n.state),{v7_startTransition:o}=r||{},a=x.useCallback(h=>{o&&Iw?Iw(()=>s(h)):s(h)},[s,o]);x.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,f)=>n.navigate(h,{state:d,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(h,d,f)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[n]),u=n.basename||"/",c=x.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return x.createElement(x.Fragment,null,x.createElement($h.Provider,{value:c},x.createElement(OC.Provider,{value:i},x.createElement(OM,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?x.createElement(DM,{routes:n.routes,state:i}):e))),null)}function DM(t){let{routes:e,state:n}=t;return vM(e,void 0,n)}function FC(t){let{to:e,replace:n,state:r,relative:i}=t;Eo()||he(!1);let{matches:s}=x.useContext(Nr),{pathname:o}=kl(),a=Il(),l=Mh(e,Cl(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return x.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function NM(t){return yM(t.context)}function OM(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nt.Pop,navigator:s,static:o=!1}=t;Eo()&&he(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Dr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,p=x.useMemo(()=>{let v=vo(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return p==null?null:x.createElement(wo.Provider,{value:l},x.createElement(Fh.Provider,{children:n,value:p}))}var xw;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(xw||(xw={}));new Promise(()=>{});function bM(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:x.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:x.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qa.apply(this,arguments)}function LM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $M(t,e){return t.button===0&&(!e||e==="_self")&&!MM(t)}const FM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function UM(t,e){return nM({basename:e==null?void 0:e.basename,future:Qa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:kL({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||jM(),routes:t,mapRouteProperties:bM}).initialize()}function jM(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Qa({},e,{errors:zM(e.errors)})),e}function zM(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new py(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const BM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kn=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=LM(e,FM),{basename:d}=x.useContext(wo),f,p=!1;if(typeof u=="string"&&VM.test(u)&&(f=u,BM))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),y=vo(w.pathname,d);w.origin===m.origin&&y!=null?u=y+w.search+w.hash:p=!0}catch{}let v=pM(u,{relative:i}),E=HM(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(m){r&&r(m),m.defaultPrevented||E(m)}return x.createElement("a",Qa({},h,{href:f||v,onClick:p||s?r:g,ref:n,target:l}))});var Rw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Rw||(Rw={}));var Aw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Aw||(Aw={}));function HM(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Il(),l=kl(),u=MC(t,{relative:o});return x.useCallback(c=>{if($M(c,n)){c.preventDefault();let h=r!==void 0?r:Ji(l)===Ji(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const xl=x.createContext({});function qM({children:t}){const[e,n]=x.useState(null);x.useState(!1);const[r,i]=x.useState(!1);async function s(u,c){i(!0),await wP(hw,u,c).then(async h=>{let d=h.user.uid;const f=Bp(Hp,"users",d),p=await Hb(f);let v={uid:d,nome:p.data().nome,email:h.user.email,imgUrl:p.data().imgUrl,logado:!0};n(v),l(v),i(!1)})}async function o(u,c,h){i(!0),await vP(hw,c,h).then(async d=>{let f=d.user.uid;await Kb(Bp(Hp,"users",f),{nome:u,imgUrl:null}).then(p=>{let v={nome:u,email:d.user.email,imgUrl:null,logado:!0};n(v),l(v),i(!1)}).catch(p=>{console.log(p)})}).catch(d=>{console.log(d)})}function a(){n({logado:!1}),localStorage.clear("@userStorage"),alert("saindo")}function l(u){localStorage.setItem("@userStorage",JSON.stringify(u))}return S.jsx(xl.Provider,{value:{signed:!!e,user:e,signIn:s,signUp:o,loadingAuth:r,LogOut:a,UserStorage:l},children:t})}var UC={exports:{}},Ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=typeof Symbol=="function"&&Symbol.for,gy=Et?Symbol.for("react.element"):60103,yy=Et?Symbol.for("react.portal"):60106,Uh=Et?Symbol.for("react.fragment"):60107,jh=Et?Symbol.for("react.strict_mode"):60108,zh=Et?Symbol.for("react.profiler"):60114,Bh=Et?Symbol.for("react.provider"):60109,Vh=Et?Symbol.for("react.context"):60110,vy=Et?Symbol.for("react.async_mode"):60111,Hh=Et?Symbol.for("react.concurrent_mode"):60111,qh=Et?Symbol.for("react.forward_ref"):60112,Kh=Et?Symbol.for("react.suspense"):60113,KM=Et?Symbol.for("react.suspense_list"):60120,Wh=Et?Symbol.for("react.memo"):60115,Gh=Et?Symbol.for("react.lazy"):60116,WM=Et?Symbol.for("react.block"):60121,GM=Et?Symbol.for("react.fundamental"):60117,QM=Et?Symbol.for("react.responder"):60118,YM=Et?Symbol.for("react.scope"):60119;function pn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case gy:switch(t=t.type,t){case vy:case Hh:case Uh:case zh:case jh:case Kh:return t;default:switch(t=t&&t.$$typeof,t){case Vh:case qh:case Gh:case Wh:case Bh:return t;default:return e}}case yy:return e}}}function jC(t){return pn(t)===Hh}Ae.AsyncMode=vy;Ae.ConcurrentMode=Hh;Ae.ContextConsumer=Vh;Ae.ContextProvider=Bh;Ae.Element=gy;Ae.ForwardRef=qh;Ae.Fragment=Uh;Ae.Lazy=Gh;Ae.Memo=Wh;Ae.Portal=yy;Ae.Profiler=zh;Ae.StrictMode=jh;Ae.Suspense=Kh;Ae.isAsyncMode=function(t){return jC(t)||pn(t)===vy};Ae.isConcurrentMode=jC;Ae.isContextConsumer=function(t){return pn(t)===Vh};Ae.isContextProvider=function(t){return pn(t)===Bh};Ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===gy};Ae.isForwardRef=function(t){return pn(t)===qh};Ae.isFragment=function(t){return pn(t)===Uh};Ae.isLazy=function(t){return pn(t)===Gh};Ae.isMemo=function(t){return pn(t)===Wh};Ae.isPortal=function(t){return pn(t)===yy};Ae.isProfiler=function(t){return pn(t)===zh};Ae.isStrictMode=function(t){return pn(t)===jh};Ae.isSuspense=function(t){return pn(t)===Kh};Ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Uh||t===Hh||t===zh||t===jh||t===Kh||t===KM||typeof t=="object"&&t!==null&&(t.$$typeof===Gh||t.$$typeof===Wh||t.$$typeof===Bh||t.$$typeof===Vh||t.$$typeof===qh||t.$$typeof===GM||t.$$typeof===QM||t.$$typeof===YM||t.$$typeof===WM)};Ae.typeOf=pn;UC.exports=Ae;var wy=UC.exports;function JM(t){function e(F,j,$,Q,_){for(var de=0,M=0,Be=0,Ee=0,Se,ae,ot=0,Rt=0,ce,at=ce=Se=0,me=0,Ye=0,ar=0,Le=0,_i=$.length,Or=_i-1,Wt,X="",Ve="",br="",is="",mn;me<_i;){if(ae=$.charCodeAt(me),me===Or&&M+Ee+Be+de!==0&&(M!==0&&(ae=M===47?10:47),Ee=Be=de=0,_i++,Or++),M+Ee+Be+de===0){if(me===Or&&(0<Ye&&(X=X.replace(d,"")),0<X.trim().length)){switch(ae){case 32:case 9:case 59:case 13:case 10:break;default:X+=$.charAt(me)}ae=59}switch(ae){case 123:for(X=X.trim(),Se=X.charCodeAt(0),ce=1,Le=++me;me<_i;){switch(ae=$.charCodeAt(me)){case 123:ce++;break;case 125:ce--;break;case 47:switch(ae=$.charCodeAt(me+1)){case 42:case 47:e:{for(at=me+1;at<Or;++at)switch($.charCodeAt(at)){case 47:if(ae===42&&$.charCodeAt(at-1)===42&&me+2!==at){me=at+1;break e}break;case 10:if(ae===47){me=at+1;break e}}me=at}}break;case 91:ae++;case 40:ae++;case 34:case 39:for(;me++<Or&&$.charCodeAt(me)!==ae;);}if(ce===0)break;me++}switch(ce=$.substring(Le,me),Se===0&&(Se=(X=X.replace(h,"").trim()).charCodeAt(0)),Se){case 64:switch(0<Ye&&(X=X.replace(d,"")),ae=X.charCodeAt(1),ae){case 100:case 109:case 115:case 45:Ye=j;break;default:Ye=De}if(ce=e(j,Ye,ce,ae,_+1),Le=ce.length,0<D&&(Ye=n(De,X,ar),mn=a(3,ce,Ye,j,Pe,ie,Le,ae,_,Q),X=Ye.join(""),mn!==void 0&&(Le=(ce=mn.trim()).length)===0&&(ae=0,ce="")),0<Le)switch(ae){case 115:X=X.replace(R,o);case 100:case 109:case 45:ce=X+"{"+ce+"}";break;case 107:X=X.replace(m,"$1 $2"),ce=X+"{"+ce+"}",ce=Ce===1||Ce===2&&s("@"+ce,3)?"@-webkit-"+ce+"@"+ce:"@"+ce;break;default:ce=X+ce,Q===112&&(ce=(Ve+=ce,""))}else ce="";break;default:ce=e(j,n(j,X,ar),ce,Q,_+1)}br+=ce,ce=ar=Ye=at=Se=0,X="",ae=$.charCodeAt(++me);break;case 125:case 59:if(X=(0<Ye?X.replace(d,""):X).trim(),1<(Le=X.length))switch(at===0&&(Se=X.charCodeAt(0),Se===45||96<Se&&123>Se)&&(Le=(X=X.replace(" ",":")).length),0<D&&(mn=a(1,X,j,F,Pe,ie,Ve.length,Q,_,Q))!==void 0&&(Le=(X=mn.trim()).length)===0&&(X="\0\0"),Se=X.charCodeAt(0),ae=X.charCodeAt(1),Se){case 0:break;case 64:if(ae===105||ae===99){is+=X+$.charAt(me);break}default:X.charCodeAt(Le-1)!==58&&(Ve+=i(X,Se,ae,X.charCodeAt(2)))}ar=Ye=at=Se=0,X="",ae=$.charCodeAt(++me)}}switch(ae){case 13:case 10:M===47?M=0:1+Se===0&&Q!==107&&0<X.length&&(Ye=1,X+="\0"),0<D*G&&a(0,X,j,F,Pe,ie,Ve.length,Q,_,Q),ie=1,Pe++;break;case 59:case 125:if(M+Ee+Be+de===0){ie++;break}default:switch(ie++,Wt=$.charAt(me),ae){case 9:case 32:if(Ee+de+M===0)switch(ot){case 44:case 58:case 9:case 32:Wt="";break;default:ae!==32&&(Wt=" ")}break;case 0:Wt="\\0";break;case 12:Wt="\\f";break;case 11:Wt="\\v";break;case 38:Ee+M+de===0&&(Ye=ar=1,Wt="\f"+Wt);break;case 108:if(Ee+M+de+be===0&&0<at)switch(me-at){case 2:ot===112&&$.charCodeAt(me-3)===58&&(be=ot);case 8:Rt===111&&(be=Rt)}break;case 58:Ee+M+de===0&&(at=me);break;case 44:M+Be+Ee+de===0&&(Ye=1,Wt+="\r");break;case 34:case 39:M===0&&(Ee=Ee===ae?0:Ee===0?ae:Ee);break;case 91:Ee+M+Be===0&&de++;break;case 93:Ee+M+Be===0&&de--;break;case 41:Ee+M+de===0&&Be--;break;case 40:if(Ee+M+de===0){if(Se===0)switch(2*ot+3*Rt){case 533:break;default:Se=1}Be++}break;case 64:M+Be+Ee+de+at+ce===0&&(ce=1);break;case 42:case 47:if(!(0<Ee+de+Be))switch(M){case 0:switch(2*ae+3*$.charCodeAt(me+1)){case 235:M=47;break;case 220:Le=me,M=42}break;case 42:ae===47&&ot===42&&Le+2!==me&&($.charCodeAt(Le+2)===33&&(Ve+=$.substring(Le,me+1)),Wt="",M=0)}}M===0&&(X+=Wt)}Rt=ot,ot=ae,me++}if(Le=Ve.length,0<Le){if(Ye=j,0<D&&(mn=a(2,Ve,Ye,F,Pe,ie,Le,Q,_,Q),mn!==void 0&&(Ve=mn).length===0))return is+Ve+br;if(Ve=Ye.join(",")+"{"+Ve+"}",Ce*be!==0){switch(Ce!==2||s(Ve,2)||(be=0),be){case 111:Ve=Ve.replace(y,":-moz-$1")+Ve;break;case 112:Ve=Ve.replace(w,"::-webkit-input-$1")+Ve.replace(w,"::-moz-$1")+Ve.replace(w,":-ms-input-$1")+Ve}be=0}}return is+Ve+br}function n(F,j,$){var Q=j.trim().split(E);j=Q;var _=Q.length,de=F.length;switch(de){case 0:case 1:var M=0;for(F=de===0?"":F[0]+" ";M<_;++M)j[M]=r(F,j[M],$).trim();break;default:var Be=M=0;for(j=[];M<_;++M)for(var Ee=0;Ee<de;++Ee)j[Be++]=r(F[Ee]+" ",Q[M],$).trim()}return j}function r(F,j,$){var Q=j.charCodeAt(0);switch(33>Q&&(Q=(j=j.trim()).charCodeAt(0)),Q){case 38:return j.replace(g,"$1"+F.trim());case 58:return F.trim()+j.replace(g,"$1"+F.trim());default:if(0<1*$&&0<j.indexOf("\f"))return j.replace(g,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+j}function i(F,j,$,Q){var _=F+";",de=2*j+3*$+4*Q;if(de===944){F=_.indexOf(":",9)+1;var M=_.substring(F,_.length-1).trim();return M=_.substring(0,F).trim()+M+";",Ce===1||Ce===2&&s(M,1)?"-webkit-"+M+M:M}if(Ce===0||Ce===2&&!s(_,1))return _;switch(de){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(Oe,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return M=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+_+"-ms-flex-pack"+M+_;case 1005:return p.test(_)?_.replace(f,":-webkit-")+_.replace(f,":-moz-")+_:_;case 1e3:switch(M=_.substring(13).trim(),j=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(j)){case 226:M=_.replace(C,"tb");break;case 232:M=_.replace(C,"tb-rl");break;case 220:M=_.replace(C,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+M+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(j=(_=F).length-10,M=(_.charCodeAt(j)===33?_.substring(0,j):_).substring(F.indexOf(":",7)+1).trim(),de=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:_=_.replace(M,"-webkit-"+M)+";"+_;break;case 207:case 102:_=_.replace(M,"-webkit-"+(102<de?"inline-":"")+"box")+";"+_.replace(M,"-webkit-"+M)+";"+_.replace(M,"-ms-"+M+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return M=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+M+"-ms-flex-"+M+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(L,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(L,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(K.test(F)===!0)return(M=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?i(F.replace("stretch","fill-available"),j,$,Q).replace(":fill-available",":stretch"):_.replace(M,"-webkit-"+M)+_.replace(M,"-moz-"+M.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,$+Q===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+_}return _}function s(F,j){var $=F.indexOf(j===1?":":"{"),Q=F.substring(0,j!==3?$:10);return $=F.substring($+1,F.length-1),B(j!==2?Q:Q.replace(W,"$1"),$,j)}function o(F,j){var $=i(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return $!==j+";"?$.replace(A," or ($1)").substring(4):"("+j+")"}function a(F,j,$,Q,_,de,M,Be,Ee,Se){for(var ae=0,ot=j,Rt;ae<D;++ae)switch(Rt=Ne[ae].call(c,F,ot,$,Q,_,de,M,Be,Ee,Se)){case void 0:case!1:case!0:case null:break;default:ot=Rt}if(ot!==j)return ot}function l(F){switch(F){case void 0:case null:D=Ne.length=0;break;default:if(typeof F=="function")Ne[D++]=F;else if(typeof F=="object")for(var j=0,$=F.length;j<$;++j)l(F[j]);else G=!!F|0}return l}function u(F){return F=F.prefix,F!==void 0&&(B=null,F?typeof F!="function"?Ce=1:(Ce=2,B=F):Ce=0),u}function c(F,j){var $=F;if(33>$.charCodeAt(0)&&($=$.trim()),ye=$,$=[ye],0<D){var Q=a(-1,j,$,$,Pe,ie,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(j=Q)}var _=e(De,$,j,0,0);return 0<D&&(Q=a(-2,_,$,$,Pe,ie,_.length,0,0,0),Q!==void 0&&(_=Q)),ye="",be=0,ie=Pe=1,_}var h=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,v=/([,: ])(transform)/g,E=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,y=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,L=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,Oe=/([^-])(image-set\()/,ie=1,Pe=1,be=0,Ce=1,De=[],Ne=[],D=0,B=null,G=0,ye="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var XM={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ZM(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var e$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Pw=ZM(function(t){return e$.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Ey=wy,t$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sy={};Sy[Ey.ForwardRef]=r$;Sy[Ey.Memo]=zC;function Dw(t){return Ey.isMemo(t)?zC:Sy[t.$$typeof]||t$}var i$=Object.defineProperty,s$=Object.getOwnPropertyNames,Nw=Object.getOwnPropertySymbols,o$=Object.getOwnPropertyDescriptor,a$=Object.getPrototypeOf,Ow=Object.prototype;function BC(t,e,n){if(typeof e!="string"){if(Ow){var r=a$(e);r&&r!==Ow&&BC(t,r,n)}var i=s$(e);Nw&&(i=i.concat(Nw(e)));for(var s=Dw(t),o=Dw(e),a=0;a<i.length;++a){var l=i[a];if(!n$[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=o$(e,l);try{i$(t,l,u)}catch{}}}}return t}var l$=BC;const u$=am(l$);function yr(){return(yr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var bw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Yp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!wy.typeOf(t)},Lc=Object.freeze([]),li=Object.freeze({});function Ya(t){return typeof t=="function"}function Lw(t){return t.displayName||t.name||"Component"}function _y(t){return t&&typeof t.styledComponentId=="string"}var no=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ty=typeof window<"u"&&"HTMLElement"in window,c$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Rl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var h$=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Rl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Nu=new Map,Mc=new Map,ca=1,cu=function(t){if(Nu.has(t))return Nu.get(t);for(;Mc.has(ca);)ca++;var e=ca++;return Nu.set(t,e),Mc.set(e,t),e},d$=function(t){return Mc.get(t)},f$=function(t,e){e>=ca&&(ca=e+1),Nu.set(t,e),Mc.set(e,t)},p$="style["+no+'][data-styled-version="5.3.10"]',m$=new RegExp("^"+no+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),g$=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},y$=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(m$);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(f$(u,l),g$(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},v$=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},VC=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(no))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(no,"active"),r.setAttribute("data-styled-version","5.3.10");var o=v$();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},w$=function(){function t(n){var r=this.element=VC(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Rl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),E$=function(){function t(n){var r=this.element=VC(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),S$=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Mw=Ty,_$={isServer:!Ty,useCSSOMInjection:!c$},HC=function(){function t(n,r,i){n===void 0&&(n=li),r===void 0&&(r={}),this.options=yr({},_$,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ty&&Mw&&(Mw=!1,function(s){for(var o=document.querySelectorAll(p$),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(no)!=="active"&&(y$(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return cu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(yr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new S$(o):s?new w$(o):new E$(o),new h$(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(cu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(cu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(cu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=d$(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=no+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),T$=/(a)(d)/gi,$w=function(t){return String.fromCharCode(t+(t>25?39:97))};function Jp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=$w(e%52)+n;return($w(e%52)+n).replace(T$,"$1-$2")}var Is=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},qC=function(t){return Is(5381,t)};function C$(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ya(n)&&!_y(n))return!1}return!0}var k$=qC("5.3.10"),I$=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&C$(e),this.componentId=n,this.baseHash=Is(k$,n),this.baseStyle=r,HC.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ro(this.rules,e,n,r).join(""),a=Jp(Is(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Is(this.baseHash,r.hash),h="",d=0;d<u;d++){var f=this.rules[d];if(typeof f=="string")h+=f;else if(f){var p=ro(f,e,n,r),v=Array.isArray(p)?p.join(""):p;c=Is(c,v+d),h+=v}}if(h){var E=Jp(c>>>0);if(!n.hasNameForId(i,E)){var g=r(h,"."+E,void 0,i);n.insertRules(i,E,g)}s.push(E)}}return s.join(" ")},t}(),x$=/^\s*\/\/.*$/gm,R$=[":","[",".","#"];function A$(t){var e,n,r,i,s=t===void 0?li:t,o=s.options,a=o===void 0?li:o,l=s.plugins,u=l===void 0?Lc:l,c=new JM(a),h=[],d=function(v){function E(g){if(g)try{v(g+"}")}catch{}}return function(g,m,w,y,C,R,A,L,W,K){switch(g){case 1:if(W===0&&m.charCodeAt(0)===64)return v(m+";"),"";break;case 2:if(L===0)return m+"/*|*/";break;case 3:switch(L){case 102:case 112:return v(w[0]+m),"";default:return m+(K===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(E)}}}(function(v){h.push(v)}),f=function(v,E,g){return E===0&&R$.indexOf(g[n.length])!==-1||g.match(i)?v:"."+e};function p(v,E,g,m){m===void 0&&(m="&");var w=v.replace(x$,""),y=E&&g?g+" "+E+" { "+w+" }":w;return e=m,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!E?"":E,y)}return c.use([].concat(u,[function(v,E,g){v===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,f))},d,function(v){if(v===-2){var E=h;return h=[],E}}])),p.hash=u.length?u.reduce(function(v,E){return E.name||Rl(15),Is(v,E.name)},5381).toString():"",p}var KC=Nn.createContext();KC.Consumer;var WC=Nn.createContext(),P$=(WC.Consumer,new HC),Xp=A$();function D$(){return x.useContext(KC)||P$}function N$(){return x.useContext(WC)||Xp}var O$=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Xp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Rl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Xp),this.name+e.hash},t}(),b$=/([A-Z])/,L$=/([A-Z])/g,M$=/^ms-/,$$=function(t){return"-"+t.toLowerCase()};function Fw(t){return b$.test(t)?t.replace(L$,$$).replace(M$,"-ms-"):t}var Uw=function(t){return t==null||t===!1||t===""};function ro(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ro(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Uw(t))return"";if(_y(t))return"."+t.styledComponentId;if(Ya(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ro(l,e,n,r)}var u;return t instanceof O$?n?(t.inject(n,r),t.getName(r)):t:Yp(t)?function c(h,d){var f,p,v=[];for(var E in h)h.hasOwnProperty(E)&&!Uw(h[E])&&(Array.isArray(h[E])&&h[E].isCss||Ya(h[E])?v.push(Fw(E)+":",h[E],";"):Yp(h[E])?v.push.apply(v,c(h[E],E)):v.push(Fw(E)+": "+(f=E,(p=h[E])==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||f in XM||f.startsWith("--")?String(p).trim():p+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var jw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function F$(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Ya(t)||Yp(t)?jw(ro(bw(Lc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:jw(ro(bw(t,n)))}var U$=function(t,e,n){return n===void 0&&(n=li),t.theme!==n.theme&&t.theme||e||n.theme},j$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,z$=/(^-|-$)/g;function sf(t){return t.replace(j$,"-").replace(z$,"")}var B$=function(t){return Jp(qC(t)>>>0)};function hu(t){return typeof t=="string"&&!0}var Zp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},V$=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function H$(t,e,n){var r=t[n];Zp(e)&&Zp(r)?GC(r,e):t[n]=e}function GC(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Zp(o))for(var a in o)V$(a)&&H$(t,o[a],a)}return t}var QC=Nn.createContext();QC.Consumer;var of={};function YC(t,e,n){var r=_y(t),i=!hu(t),s=e.attrs,o=s===void 0?Lc:s,a=e.componentId,l=a===void 0?function(m,w){var y=typeof m!="string"?"sc":sf(m);of[y]=(of[y]||0)+1;var C=y+"-"+B$("5.3.10"+y+of[y]);return w?w+"-"+C:C}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(m){return hu(m)?"styled."+m:"Styled("+Lw(m)+")"}(t):u,h=e.displayName&&e.componentId?sf(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,f=e.shouldForwardProp;r&&t.shouldForwardProp&&(f=e.shouldForwardProp?function(m,w,y){return t.shouldForwardProp(m,w,y)&&e.shouldForwardProp(m,w,y)}:t.shouldForwardProp);var p,v=new I$(n,h,r?t.componentStyle:void 0),E=v.isStatic&&o.length===0,g=function(m,w){return function(y,C,R,A){var L=y.attrs,W=y.componentStyle,K=y.defaultProps,Oe=y.foldedComponentIds,ie=y.shouldForwardProp,Pe=y.styledComponentId,be=y.target,Ce=function(Q,_,de){Q===void 0&&(Q=li);var M=yr({},_,{theme:Q}),Be={};return de.forEach(function(Ee){var Se,ae,ot,Rt=Ee;for(Se in Ya(Rt)&&(Rt=Rt(M)),Rt)M[Se]=Be[Se]=Se==="className"?(ae=Be[Se],ot=Rt[Se],ae&&ot?ae+" "+ot:ae||ot):Rt[Se]}),[M,Be]}(U$(C,x.useContext(QC),K)||li,C,L),De=Ce[0],Ne=Ce[1],D=function(Q,_,de,M){var Be=D$(),Ee=N$(),Se=_?Q.generateAndInjectStyles(li,Be,Ee):Q.generateAndInjectStyles(de,Be,Ee);return Se}(W,A,De),B=R,G=Ne.$as||C.$as||Ne.as||C.as||be,ye=hu(G),F=Ne!==C?yr({},C,{},Ne):C,j={};for(var $ in F)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?j.as=F[$]:(ie?ie($,Pw,G):!ye||Pw($))&&(j[$]=F[$]));return C.style&&Ne.style!==C.style&&(j.style=yr({},C.style,{},Ne.style)),j.className=Array.prototype.concat(Oe,Pe,D!==Pe?D:null,C.className,Ne.className).filter(Boolean).join(" "),j.ref=B,x.createElement(G,j)}(p,m,w,E)};return g.displayName=c,(p=Nn.forwardRef(g)).attrs=d,p.componentStyle=v,p.displayName=c,p.shouldForwardProp=f,p.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Lc,p.styledComponentId=h,p.target=r?t.target:t,p.withComponent=function(m){var w=e.componentId,y=function(R,A){if(R==null)return{};var L,W,K={},Oe=Object.keys(R);for(W=0;W<Oe.length;W++)L=Oe[W],A.indexOf(L)>=0||(K[L]=R[L]);return K}(e,["componentId"]),C=w&&w+"-"+(hu(m)?m:sf(Lw(m)));return YC(m,yr({},y,{attrs:d,componentId:C}),n)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?GC({},t.defaultProps,m):m}}),Object.defineProperty(p,"toString",{value:function(){return"."+p.styledComponentId}}),i&&u$(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var em=function(t){return function e(n,r,i){if(i===void 0&&(i=li),!wy.isValidElementType(r))return Rl(1,String(r));var s=function(){return n(r,i,F$.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,yr({},i,{},o))},s.attrs=function(o){return e(n,r,yr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(YC,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){em[t]=em(t)});const tn=em,q$=tn.footer`
  
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
`;function K$(){return S.jsx(q$,{children:S.jsxs("p",{children:["@2023 Coordinates - Made by ",S.jsx("a",{href:"https://github.com/GuilhermeSella",children:"Guilherme Sella"})]})})}const W$=tn.div`
    padding-bottom: 10px;
    
    .hamburguer{
    position: relative;
    top: 6px;
    display: block;
    background-color: black;
    width: 40px;
    height: 3.2px;
    transition: .5s ease-in-out;
    }
    .hamburguer:before,
    .hamburguer:after{
        background-color: black;
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
    .input-menu-hamburguer:checked ~ label .hamburguer{
        transform: rotate(45deg);
    }

    .input-menu-hamburguer:checked ~ label .hamburguer:before{
        transform: rotate(90deg);
        top: 0;
    }

    .input-menu-hamburguer:checked ~ label .hamburguer:after{
        transform: rotate(90deg);
        bottom: 0;
    }
    




`;function G$(t){return S.jsxs(W$,{class:"menu-hamburguer",children:[S.jsx("input",{type:"checkbox",id:"menu-hamburguer",class:"input-menu-hamburguer"}),S.jsx("label",{htmlFor:"menu-hamburguer",children:S.jsx("div",{class:"menu",children:S.jsx("span",{class:"hamburguer"})})})]})}const Q$=tn.header`
    
    width: 100%;
    padding: 15px;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0af7"};
   
    gap: 13%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 80px;
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

`;function Y$(){const{theme:t}=x.useContext(vi),{LogOut:e}=x.useContext(xl),n=Il();return S.jsxs(Q$,{theme:t,children:[S.jsx("div",{children:S.jsx(Kn,{to:"/home",children:"Coordinates"})}),S.jsxs("nav",{className:"navIcons",children:[S.jsx(Kn,{className:"button",to:"/home/account",children:S.jsx("span",{class:"material-symbols-outlined",children:"person"})}),S.jsx(Kn,{className:"button",to:"/home/saved",children:S.jsx("span",{class:"material-symbols-outlined",children:"bookmark"})}),S.jsx(Kn,{className:"button",onClick:()=>{n("/"),e()},children:S.jsx("span",{class:"material-symbols-outlined",children:"logout"})}),S.jsx("div",{className:"menuH",children:S.jsx(G$,{})})]})]})}function J$(){return S.jsxs(S.Fragment,{children:[S.jsx(Y$,{}),S.jsx(NM,{}),S.jsx(K$,{})]})}const X$=tn.div`
      background-color: ${t=>t.theme==="light"?"white":"#0a0a0af7"};
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
`;function Z$(t){const{theme:e}=x.useContext(vi);return S.jsxs(X$,{theme:e,children:[S.jsxs("h1",{children:["Descubra a sua exata ",S.jsx("b",{children:"coordenada"})," e veja quando quiser!"]}),S.jsx(Kn,{to:"/home/coordinates",className:"button",children:"Try Now"})]})}const eF="/app_coordinates/assets/armazenamento-09971877.svg",tF="/app_coordinates/assets/googleapi-1c30252a.svg",nF="/app_coordinates/assets/geolocalizacao-08b5f0ef.svg",rF=tn.section`
    width: 100%;
   
    background-color: #101010ed;
    display: flex;
    justify-content: space-evenly;
    
    gap: 20px;
    align-items: center;
    padding:  200px 10px;
    flex-wrap: wrap;
`,af=tn.div`
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
`;function iF(){return S.jsxs(rF,{children:[S.jsxs(af,{children:[S.jsx("img",{src:eF,alt:""}),S.jsx("h2",{children:"Armazenamento"}),S.jsx("p",{children:"Armazene os seus endereços e suas coordenadas para acessar quando quiser."})]}),S.jsxs(af,{children:[S.jsx("img",{src:nF,alt:""}),S.jsx("h2",{children:"Geolocalização"}),S.jsx("p",{children:"Tenha em mãos as exatas coordenadas geográficas que você procura"})]}),S.jsxs(af,{children:[S.jsx("img",{src:tF,alt:""}),S.jsx("h2",{children:"Google API"}),S.jsx("p",{children:"Esse projeto utiliza Google API para fornecer a geolocalização que você deseja."})]})]})}function sF(){return S.jsxs(S.Fragment,{children:[S.jsx(Z$,{}),S.jsx(iF,{})]})}const oF=tn.div`
    background-color:${t=>t.theme==="light"?"white":"#0a0a0af7"} ;
    color: ${t=>t.theme==="light"?"black":"white"};
    width: 100%;
   height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  

    flex-wrap: wrap-reverse;
    gap: 30px;
   
 
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
     
     
       
    }
    .divImg iframe{
       position: relative;
       
    }


    
   
   @media screen and (max-width:380px){
        height: 120vh;
        padding-bottom: 30px;
   }
    

    
`;function tm(t,e){return tm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},tm(t,e)}function Qh(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,tm(t,e)}var Yh=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(r){var i=this,s=r||function(){};return this.listeners.push(s),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(o){return o!==s}),i.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}();function Ie(){return Ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ie.apply(this,arguments)}var JC=typeof window>"u";function jt(){}function aF(t,e){return typeof t=="function"?t(e):t}function lF(t){return typeof t=="number"&&t>=0&&t!==1/0}function $c(t){return Array.isArray(t)?t:[t]}function uF(t,e){return Math.max(t+(e||0)-Date.now(),0)}function lf(t,e,n){return Jh(t)?typeof e=="function"?Ie({},n,{queryKey:t,queryFn:e}):Ie({},e,{queryKey:t}):t}function jr(t,e,n){return Jh(t)?[Ie({},e,{queryKey:t}),n]:[t||{},e]}function cF(t,e){if(t===!0&&e===!0||t==null&&e==null)return"all";if(t===!1&&e===!1)return"none";var n=t??!e;return n?"active":"inactive"}function zw(t,e){var n=t.active,r=t.exact,i=t.fetching,s=t.inactive,o=t.predicate,a=t.queryKey,l=t.stale;if(Jh(a)){if(r){if(e.queryHash!==Cy(a,e.options))return!1}else if(!Fc(e.queryKey,a))return!1}var u=cF(n,s);if(u==="none")return!1;if(u!=="all"){var c=e.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i=="boolean"&&e.isFetching()!==i||o&&!o(e))}function Bw(t,e){var n=t.exact,r=t.fetching,i=t.predicate,s=t.mutationKey;if(Jh(s)){if(!e.options.mutationKey)return!1;if(n){if(Oi(e.options.mutationKey)!==Oi(s))return!1}else if(!Fc(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Cy(t,e){var n=(e==null?void 0:e.queryKeyHashFn)||Oi;return n(t)}function Oi(t){var e=$c(t);return hF(e)}function hF(t){return JSON.stringify(t,function(e,n){return nm(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Fc(t,e){return XC($c(t),$c(e))}function XC(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(function(n){return!XC(t[n],e[n])}):!1}function ZC(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||nm(t)&&nm(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{},a=0,l=0;l<s;l++){var u=n?l:i[l];o[u]=ZC(t[u],e[u]),o[u]===t[u]&&a++}return r===s&&a===r?t:o}return e}function nm(t){if(!Vw(t))return!1;var e=t.constructor;if(typeof e>"u")return!0;var n=e.prototype;return!(!Vw(n)||!n.hasOwnProperty("isPrototypeOf"))}function Vw(t){return Object.prototype.toString.call(t)==="[object Object]"}function Jh(t){return typeof t=="string"||Array.isArray(t)}function dF(t){return new Promise(function(e){setTimeout(e,t)})}function Hw(t){Promise.resolve().then(t).catch(function(e){return setTimeout(function(){throw e})})}function ek(){if(typeof AbortController=="function")return new AbortController}var fF=function(t){Qh(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!JC&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setFocused(a):o.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},e}(Yh),Ou=new fF,pF=function(t){Qh(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!JC&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setOnline(a):o.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},e}(Yh),bu=new pF;function mF(t){return Math.min(1e3*Math.pow(2,t),3e4)}function Uc(t){return typeof(t==null?void 0:t.cancel)=="function"}var tk=function(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent};function uf(t){return t instanceof tk}var nk=function(e){var n=this,r=!1,i,s,o,a;this.abort=e.abort,this.cancel=function(d){return i==null?void 0:i(d)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return s==null?void 0:s()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,f){o=d,a=f});var l=function(f){n.isResolved||(n.isResolved=!0,e.onSuccess==null||e.onSuccess(f),s==null||s(),o(f))},u=function(f){n.isResolved||(n.isResolved=!0,e.onError==null||e.onError(f),s==null||s(),a(f))},c=function(){return new Promise(function(f){s=f,n.isPaused=!0,e.onPause==null||e.onPause()}).then(function(){s=void 0,n.isPaused=!1,e.onContinue==null||e.onContinue()})},h=function d(){if(!n.isResolved){var f;try{f=e.fn()}catch(p){f=Promise.reject(p)}i=function(v){if(!n.isResolved&&(u(new tk(v)),n.abort==null||n.abort(),Uc(f)))try{f.cancel()}catch{}},n.isTransportCancelable=Uc(f),Promise.resolve(f).then(l).catch(function(p){var v,E;if(!n.isResolved){var g=(v=e.retry)!=null?v:3,m=(E=e.retryDelay)!=null?E:mF,w=typeof m=="function"?m(n.failureCount,p):m,y=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,p);if(r||!y){u(p);return}n.failureCount++,e.onFail==null||e.onFail(n.failureCount,p),dF(w).then(function(){if(!Ou.isFocused()||!bu.isOnline())return c()}).then(function(){r?u(p):d()})}})}};h()},gF=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var e=t.prototype;return e.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},e.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Hw(function(){i.notifyFn(r)})},e.batchCalls=function(r){var i=this;return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];i.schedule(function(){r.apply(void 0,o)})}},e.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Hw(function(){r.batchNotifyFn(function(){i.forEach(function(s){r.notifyFn(s)})})})},e.setNotifyFunction=function(r){this.notifyFn=r},e.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},t}(),Tt=new gF,rk=console;function ik(){return rk}function yF(t){rk=t}var vF=function(){function t(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var e=t.prototype;return e.setOptions=function(r){var i;this.options=Ie({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},e.setDefaultOptions=function(r){this.defaultOptions=r},e.scheduleGc=function(){var r=this;this.clearGcTimeout(),lF(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},e.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},e.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},e.setData=function(r,i){var s,o,a=this.state.data,l=aF(r,a);return(s=(o=this.options).isDataEqual)!=null&&s.call(o,a,l)?l=a:this.options.structuralSharing!==!1&&(l=ZC(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},e.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},e.cancel=function(r){var i,s=this.promise;return(i=this.retryer)==null||i.cancel(r),s?s.then(jt).catch(jt):Promise.resolve()},e.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},e.reset=function(){this.destroy(),this.setState(this.initialState)},e.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},e.isFetching=function(){return this.state.isFetching},e.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},e.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!uF(this.state.dataUpdatedAt,r)},e.onFocus=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.onOnline=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},e.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},e.getObserversCount=function(){return this.observers.length},e.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},e.fetch=function(r,i){var s=this,o,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(m){return m.options.queryFn});c&&this.setOptions(c.options)}var h=$c(this.queryKey),d=ek(),f={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(f,"signal",{enumerable:!0,get:function(){if(d)return s.abortSignalConsumed=!0,d.signal}});var p=function(){return s.options.queryFn?(s.abortSignalConsumed=!1,s.options.queryFn(f)):Promise.reject("Missing queryFn")},v={fetchOptions:i,options:this.options,queryKey:h,state:this.state,fetchFn:p,meta:this.meta};if((o=this.options.behavior)!=null&&o.onFetch){var E;(E=this.options.behavior)==null||E.onFetch(v)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=v.fetchOptions)==null?void 0:a.meta)){var g;this.dispatch({type:"fetch",meta:(g=v.fetchOptions)==null?void 0:g.meta})}return this.retryer=new nk({fn:v.fetchFn,abort:d==null||(l=d.abort)==null?void 0:l.bind(d),onSuccess:function(w){s.setData(w),s.cache.config.onSuccess==null||s.cache.config.onSuccess(w,s),s.cacheTime===0&&s.optionalRemove()},onError:function(w){uf(w)&&w.silent||s.dispatch({type:"error",error:w}),uf(w)||(s.cache.config.onError==null||s.cache.config.onError(w,s),ik().error(w)),s.cacheTime===0&&s.optionalRemove()},onFail:function(){s.dispatch({type:"failed"})},onPause:function(){s.dispatch({type:"pause"})},onContinue:function(){s.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay}),this.promise=this.retryer.promise,this.promise},e.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Tt.batch(function(){i.observers.forEach(function(s){s.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},e.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,s=typeof r.initialData<"u",o=s?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},e.reducer=function(r,i){var s,o;switch(i.type){case"failed":return Ie({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ie({},r,{isPaused:!0});case"continue":return Ie({},r,{isPaused:!1});case"fetch":return Ie({},r,{fetchFailureCount:0,fetchMeta:(s=i.meta)!=null?s:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ie({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=i.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return uf(a)&&a.revert&&this.revertState?Ie({},this.revertState):Ie({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ie({},r,{isInvalidated:!0});case"setState":return Ie({},r,i.state);default:return r}},t}(),wF=function(t){Qh(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=e.prototype;return n.build=function(i,s,o){var a,l=s.queryKey,u=(a=s.queryHash)!=null?a:Cy(l,s),c=this.get(u);return c||(c=new vF({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(s),state:o,defaultOptions:i.getQueryDefaults(l),meta:s.meta}),this.add(c)),c},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var s=this.queriesMap[i.queryHash];s&&(i.destroy(),this.queries=this.queries.filter(function(o){return o!==i}),s===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Tt.batch(function(){i.queries.forEach(function(s){i.remove(s)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,s){var o=jr(i,s),a=o[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return zw(a,l)})},n.findAll=function(i,s){var o=jr(i,s),a=o[0];return Object.keys(a).length>0?this.queries.filter(function(l){return zw(a,l)}):this.queries},n.notify=function(i){var s=this;Tt.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){var i=this;Tt.batch(function(){i.queries.forEach(function(s){s.onFocus()})})},n.onOnline=function(){var i=this;Tt.batch(function(){i.queries.forEach(function(s){s.onOnline()})})},e}(Yh),EF=function(){function t(n){this.options=Ie({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||SF(),this.meta=n.meta}var e=t.prototype;return e.setState=function(r){this.dispatch({type:"setState",state:r})},e.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},e.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(jt).catch(jt)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var r=this,i,s=this.state.status==="loading",o=Promise.resolve();return s||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),o.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),ik().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},e.executeMutation=function(){var r=this,i;return this.retryer=new nk({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(r){var i=this;this.state=_F(this.state,r),Tt.batch(function(){i.observers.forEach(function(s){s.onMutationUpdate(r)}),i.mutationCache.notify(i)})},t}();function SF(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function _F(t,e){switch(e.type){case"failed":return Ie({},t,{failureCount:t.failureCount+1});case"pause":return Ie({},t,{isPaused:!0});case"continue":return Ie({},t,{isPaused:!1});case"loading":return Ie({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return Ie({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return Ie({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ie({},t,e.state);default:return t}}var TF=function(t){Qh(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=e.prototype;return n.build=function(i,s,o){var a=new EF({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(s),state:o,defaultOptions:s.mutationKey?i.getMutationDefaults(s.mutationKey):void 0,meta:s.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(s){return s!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Tt.batch(function(){i.mutations.forEach(function(s){i.remove(s)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(s){return Bw(i,s)})},n.findAll=function(i){return this.mutations.filter(function(s){return Bw(i,s)})},n.notify=function(i){var s=this;Tt.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(s){return s.state.isPaused});return Tt.batch(function(){return i.reduce(function(s,o){return s.then(function(){return o.continue().catch(jt)})},Promise.resolve())})},e}(Yh);function CF(){return{onFetch:function(e){e.fetchFn=function(){var n,r,i,s,o,a,l=(n=e.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=e.fetchOptions)==null||(s=i.meta)==null?void 0:s.fetchMore,c=u==null?void 0:u.pageParam,h=(u==null?void 0:u.direction)==="forward",d=(u==null?void 0:u.direction)==="backward",f=((o=e.state.data)==null?void 0:o.pages)||[],p=((a=e.state.data)==null?void 0:a.pageParams)||[],v=ek(),E=v==null?void 0:v.signal,g=p,m=!1,w=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},y=function(be,Ce,De,Ne){return g=Ne?[Ce].concat(g):[].concat(g,[Ce]),Ne?[De].concat(be):[].concat(be,[De])},C=function(be,Ce,De,Ne){if(m)return Promise.reject("Cancelled");if(typeof De>"u"&&!Ce&&be.length)return Promise.resolve(be);var D={queryKey:e.queryKey,signal:E,pageParam:De,meta:e.meta},B=w(D),G=Promise.resolve(B).then(function(F){return y(be,De,F,Ne)});if(Uc(B)){var ye=G;ye.cancel=B.cancel}return G},R;if(!f.length)R=C([]);else if(h){var A=typeof c<"u",L=A?c:qw(e.options,f);R=C(f,A,L)}else if(d){var W=typeof c<"u",K=W?c:kF(e.options,f);R=C(f,W,K,!0)}else(function(){g=[];var Pe=typeof e.options.getNextPageParam>"u",be=l&&f[0]?l(f[0],0,f):!0;R=be?C([],Pe,p[0]):Promise.resolve(y([],p[0],f[0]));for(var Ce=function(D){R=R.then(function(B){var G=l&&f[D]?l(f[D],D,f):!0;if(G){var ye=Pe?p[D]:qw(e.options,B);return C(B,Pe,ye)}return Promise.resolve(y(B,p[D],f[D]))})},De=1;De<f.length;De++)Ce(De)})();var Oe=R.then(function(Pe){return{pages:Pe,pageParams:g}}),ie=Oe;return ie.cancel=function(){m=!0,v==null||v.abort(),Uc(R)&&R.cancel()},Oe}}}}function qw(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function kF(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}var IF=function(){function t(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new wF,this.mutationCache=n.mutationCache||new TF,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var e=t.prototype;return e.mount=function(){var r=this;this.unsubscribeFocus=Ou.subscribe(function(){Ou.isFocused()&&bu.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=bu.subscribe(function(){Ou.isFocused()&&bu.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},e.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},e.isFetching=function(r,i){var s=jr(r,i),o=s[0];return o.fetching=!0,this.queryCache.findAll(o).length},e.isMutating=function(r){return this.mutationCache.findAll(Ie({},r,{fetching:!0})).length},e.getQueryData=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state.data},e.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var s=i.queryKey,o=i.state,a=o.data;return[s,a]})},e.setQueryData=function(r,i,s){var o=lf(r),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(i,s)},e.setQueriesData=function(r,i,s){var o=this;return Tt.batch(function(){return o.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,o.setQueryData(l,i,s)]})})},e.getQueryState=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state},e.removeQueries=function(r,i){var s=jr(r,i),o=s[0],a=this.queryCache;Tt.batch(function(){a.findAll(o).forEach(function(l){a.remove(l)})})},e.resetQueries=function(r,i,s){var o=this,a=jr(r,i,s),l=a[0],u=a[1],c=this.queryCache,h=Ie({},l,{active:!0});return Tt.batch(function(){return c.findAll(l).forEach(function(d){d.reset()}),o.refetchQueries(h,u)})},e.cancelQueries=function(r,i,s){var o=this,a=jr(r,i,s),l=a[0],u=a[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var h=Tt.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.cancel(c)})});return Promise.all(h).then(jt).catch(jt)},e.invalidateQueries=function(r,i,s){var o,a,l,u=this,c=jr(r,i,s),h=c[0],d=c[1],f=Ie({},h,{active:(o=(a=h.refetchActive)!=null?a:h.active)!=null?o:!0,inactive:(l=h.refetchInactive)!=null?l:!1});return Tt.batch(function(){return u.queryCache.findAll(h).forEach(function(p){p.invalidate()}),u.refetchQueries(f,d)})},e.refetchQueries=function(r,i,s){var o=this,a=jr(r,i,s),l=a[0],u=a[1],c=Tt.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.fetch(void 0,Ie({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),h=Promise.all(c).then(jt);return u!=null&&u.throwOnError||(h=h.catch(jt)),h},e.fetchQuery=function(r,i,s){var o=lf(r,i,s),a=this.defaultQueryOptions(o);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},e.prefetchQuery=function(r,i,s){return this.fetchQuery(r,i,s).then(jt).catch(jt)},e.fetchInfiniteQuery=function(r,i,s){var o=lf(r,i,s);return o.behavior=CF(),this.fetchQuery(o)},e.prefetchInfiniteQuery=function(r,i,s){return this.fetchInfiniteQuery(r,i,s).then(jt).catch(jt)},e.cancelMutations=function(){var r=this,i=Tt.batch(function(){return r.mutationCache.getAll().map(function(s){return s.cancel()})});return Promise.all(i).then(jt).catch(jt)},e.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},e.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},e.getQueryCache=function(){return this.queryCache},e.getMutationCache=function(){return this.mutationCache},e.getDefaultOptions=function(){return this.defaultOptions},e.setDefaultOptions=function(r){this.defaultOptions=r},e.setQueryDefaults=function(r,i){var s=this.queryDefaults.find(function(o){return Oi(r)===Oi(o.queryKey)});s?s.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},e.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(s){return Fc(r,s.queryKey)}))==null?void 0:i.defaultOptions:void 0},e.setMutationDefaults=function(r,i){var s=this.mutationDefaults.find(function(o){return Oi(r)===Oi(o.mutationKey)});s?s.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},e.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(s){return Fc(r,s.mutationKey)}))==null?void 0:i.defaultOptions:void 0},e.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=Ie({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Cy(i.queryKey,i)),i},e.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},e.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:Ie({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},e.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},t}(),xF=tR.unstable_batchedUpdates;Tt.setBatchNotifyFunction(xF);var RF=console;yF(RF);var Kw=Nn.createContext(void 0),AF=Nn.createContext(!1);function PF(t){return t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Kw),window.ReactQueryClientContext):Kw}var DF=function(e){var n=e.client,r=e.contextSharing,i=r===void 0?!1:r,s=e.children;Nn.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var o=PF(i);return Nn.createElement(AF.Provider,{value:i},Nn.createElement(o.Provider,{value:n},s))};const NF="/app_coordinates/assets/Loading-aa4d524e.svg";function sk(t,e){return function(){return t.apply(e,arguments)}}const{toString:OF}=Object.prototype,{getPrototypeOf:ky}=Object,Xh=(t=>e=>{const n=OF.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),or=t=>(t=t.toLowerCase(),e=>Xh(e)===t),Zh=t=>e=>typeof e===t,{isArray:So}=Array,Ja=Zh("undefined");function bF(t){return t!==null&&!Ja(t)&&t.constructor!==null&&!Ja(t.constructor)&&Tn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ok=or("ArrayBuffer");function LF(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ok(t.buffer),e}const MF=Zh("string"),Tn=Zh("function"),ak=Zh("number"),ed=t=>t!==null&&typeof t=="object",$F=t=>t===!0||t===!1,Lu=t=>{if(Xh(t)!=="object")return!1;const e=ky(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},FF=or("Date"),UF=or("File"),jF=or("Blob"),zF=or("FileList"),BF=t=>ed(t)&&Tn(t.pipe),VF=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Tn(t.append)&&((e=Xh(t))==="formdata"||e==="object"&&Tn(t.toString)&&t.toString()==="[object FormData]"))},HF=or("URLSearchParams"),qF=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Al(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),So(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function lk(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const uk=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ck=t=>!Ja(t)&&t!==uk;function rm(){const{caseless:t}=ck(this)&&this||{},e={},n=(r,i)=>{const s=t&&lk(e,i)||i;Lu(e[s])&&Lu(r)?e[s]=rm(e[s],r):Lu(r)?e[s]=rm({},r):So(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Al(arguments[r],n);return e}const KF=(t,e,n,{allOwnKeys:r}={})=>(Al(e,(i,s)=>{n&&Tn(i)?t[s]=sk(i,n):t[s]=i},{allOwnKeys:r}),t),WF=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),GF=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},QF=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ky(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},YF=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},JF=t=>{if(!t)return null;if(So(t))return t;let e=t.length;if(!ak(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},XF=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ky(Uint8Array)),ZF=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},e4=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},t4=or("HTMLFormElement"),n4=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ww=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),r4=or("RegExp"),hk=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Al(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},i4=t=>{hk(t,(e,n)=>{if(Tn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Tn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},s4=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return So(t)?r(t):r(String(t).split(e)),n},o4=()=>{},a4=(t,e)=>(t=+t,Number.isFinite(t)?t:e),cf="abcdefghijklmnopqrstuvwxyz",Gw="0123456789",dk={DIGIT:Gw,ALPHA:cf,ALPHA_DIGIT:cf+cf.toUpperCase()+Gw},l4=(t=16,e=dk.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function u4(t){return!!(t&&Tn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const c4=t=>{const e=new Array(10),n=(r,i)=>{if(ed(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=So(r)?[]:{};return Al(r,(o,a)=>{const l=n(o,i+1);!Ja(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},h4=or("AsyncFunction"),d4=t=>t&&(ed(t)||Tn(t))&&Tn(t.then)&&Tn(t.catch),I={isArray:So,isArrayBuffer:ok,isBuffer:bF,isFormData:VF,isArrayBufferView:LF,isString:MF,isNumber:ak,isBoolean:$F,isObject:ed,isPlainObject:Lu,isUndefined:Ja,isDate:FF,isFile:UF,isBlob:jF,isRegExp:r4,isFunction:Tn,isStream:BF,isURLSearchParams:HF,isTypedArray:XF,isFileList:zF,forEach:Al,merge:rm,extend:KF,trim:qF,stripBOM:WF,inherits:GF,toFlatObject:QF,kindOf:Xh,kindOfTest:or,endsWith:YF,toArray:JF,forEachEntry:ZF,matchAll:e4,isHTMLForm:t4,hasOwnProperty:Ww,hasOwnProp:Ww,reduceDescriptors:hk,freezeMethods:i4,toObjectSet:s4,toCamelCase:n4,noop:o4,toFiniteNumber:a4,findKey:lk,global:uk,isContextDefined:ck,ALPHABET:dk,generateString:l4,isSpecCompliantForm:u4,toJSONObject:c4,isAsyncFn:h4,isThenable:d4};function ve(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}I.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fk=ve.prototype,pk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{pk[t]={value:t}});Object.defineProperties(ve,pk);Object.defineProperty(fk,"isAxiosError",{value:!0});ve.from=(t,e,n,r,i,s)=>{const o=Object.create(fk);return I.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ve.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const f4=null;function im(t){return I.isPlainObject(t)||I.isArray(t)}function mk(t){return I.endsWith(t,"[]")?t.slice(0,-2):t}function Qw(t,e,n){return t?t.concat(e).map(function(i,s){return i=mk(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function p4(t){return I.isArray(t)&&!t.some(im)}const m4=I.toFlatObject(I,{},null,function(e){return/^is[A-Z]/.test(e)});function td(t,e,n){if(!I.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,E){return!I.isUndefined(E[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&I.isSpecCompliantForm(e);if(!I.isFunction(i))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(I.isDate(p))return p.toISOString();if(!l&&I.isBlob(p))throw new ve("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(p)||I.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,v,E){let g=p;if(p&&!E&&typeof p=="object"){if(I.endsWith(v,"{}"))v=r?v:v.slice(0,-2),p=JSON.stringify(p);else if(I.isArray(p)&&p4(p)||(I.isFileList(p)||I.endsWith(v,"[]"))&&(g=I.toArray(p)))return v=mk(v),g.forEach(function(w,y){!(I.isUndefined(w)||w===null)&&e.append(o===!0?Qw([v],y,s):o===null?v:v+"[]",u(w))}),!1}return im(p)?!0:(e.append(Qw(E,v,s),u(p)),!1)}const h=[],d=Object.assign(m4,{defaultVisitor:c,convertValue:u,isVisitable:im});function f(p,v){if(!I.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(p),I.forEach(p,function(g,m){(!(I.isUndefined(g)||g===null)&&i.call(e,g,I.isString(m)?m.trim():m,v,d))===!0&&f(g,v?v.concat(m):[m])}),h.pop()}}if(!I.isObject(t))throw new TypeError("data must be an object");return f(t),e}function Yw(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Iy(t,e){this._pairs=[],t&&td(t,this,e)}const gk=Iy.prototype;gk.append=function(e,n){this._pairs.push([e,n])};gk.toString=function(e){const n=e?function(r){return e.call(this,r,Yw)}:Yw;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function g4(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yk(t,e,n){if(!e)return t;const r=n&&n.encode||g4,i=n&&n.serialize;let s;if(i?s=i(e,n):s=I.isURLSearchParams(e)?e.toString():new Iy(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class y4{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){I.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Jw=y4,vk={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},v4=typeof URLSearchParams<"u"?URLSearchParams:Iy,w4=typeof FormData<"u"?FormData:null,E4=typeof Blob<"u"?Blob:null,S4=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_4=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Wn={isBrowser:!0,classes:{URLSearchParams:v4,FormData:w4,Blob:E4},isStandardBrowserEnv:S4,isStandardBrowserWebWorkerEnv:_4,protocols:["http","https","file","blob","url","data"]};function T4(t,e){return td(t,new Wn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Wn.isNode&&I.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function C4(t){return I.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function k4(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function wk(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&I.isArray(i)?i.length:o,l?(I.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!I.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&I.isArray(i[o])&&(i[o]=k4(i[o])),!a)}if(I.isFormData(t)&&I.isFunction(t.entries)){const n={};return I.forEachEntry(t,(r,i)=>{e(C4(r),i,n,0)}),n}return null}const I4={"Content-Type":void 0};function x4(t,e,n){if(I.isString(t))try{return(e||JSON.parse)(t),I.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const nd={transitional:vk,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=I.isObject(e);if(s&&I.isHTMLForm(e)&&(e=new FormData(e)),I.isFormData(e))return i&&i?JSON.stringify(wk(e)):e;if(I.isArrayBuffer(e)||I.isBuffer(e)||I.isStream(e)||I.isFile(e)||I.isBlob(e))return e;if(I.isArrayBufferView(e))return e.buffer;if(I.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return T4(e,this.formSerializer).toString();if((a=I.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return td(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),x4(e)):e}],transformResponse:[function(e){const n=this.transitional||nd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&I.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ve.from(a,ve.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wn.classes.FormData,Blob:Wn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};I.forEach(["delete","get","head"],function(e){nd.headers[e]={}});I.forEach(["post","put","patch"],function(e){nd.headers[e]=I.merge(I4)});const xy=nd,R4=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A4=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&R4[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Xw=Symbol("internals");function $o(t){return t&&String(t).trim().toLowerCase()}function Mu(t){return t===!1||t==null?t:I.isArray(t)?t.map(Mu):String(t)}function P4(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const D4=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function hf(t,e,n,r,i){if(I.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!I.isString(e)){if(I.isString(r))return e.indexOf(r)!==-1;if(I.isRegExp(r))return r.test(e)}}function N4(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function O4(t,e){const n=I.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class rd{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=$o(l);if(!c)throw new Error("header name must be a non-empty string");const h=I.findKey(i,c);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||l]=Mu(a))}const o=(a,l)=>I.forEach(a,(u,c)=>s(u,c,l));return I.isPlainObject(e)||e instanceof this.constructor?o(e,n):I.isString(e)&&(e=e.trim())&&!D4(e)?o(A4(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=$o(e),e){const r=I.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return P4(i);if(I.isFunction(n))return n.call(this,i,r);if(I.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=$o(e),e){const r=I.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||hf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=$o(o),o){const a=I.findKey(r,o);a&&(!n||hf(r,r[a],a,n))&&(delete r[a],i=!0)}}return I.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||hf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return I.forEach(this,(i,s)=>{const o=I.findKey(r,s);if(o){n[o]=Mu(i),delete n[s];return}const a=e?N4(s):String(s).trim();a!==s&&delete n[s],n[a]=Mu(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return I.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&I.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Xw]=this[Xw]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=$o(o);r[a]||(O4(i,o),r[a]=!0)}return I.isArray(e)?e.forEach(s):s(e),this}}rd.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);I.freezeMethods(rd.prototype);I.freezeMethods(rd);const Er=rd;function df(t,e){const n=this||xy,r=e||n,i=Er.from(r.headers);let s=r.data;return I.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Ek(t){return!!(t&&t.__CANCEL__)}function Pl(t,e,n){ve.call(this,t??"canceled",ve.ERR_CANCELED,e,n),this.name="CanceledError"}I.inherits(Pl,ve,{__CANCEL__:!0});function b4(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ve("Request failed with status code "+n.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const L4=Wn.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),I.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),I.isString(s)&&l.push("path="+s),I.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function M4(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function $4(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Sk(t,e){return t&&!M4(e)?$4(t,e):e}const F4=Wn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=I.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function U4(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function j4(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const f=c&&u-c;return f?Math.round(d*1e3/f):void 0}}function Zw(t,e){let n=0;const r=j4(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const z4=typeof XMLHttpRequest<"u",B4=z4&&function(t){return new Promise(function(n,r){let i=t.data;const s=Er.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}I.isFormData(i)&&(Wn.isStandardBrowserEnv||Wn.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+p))}const c=Sk(t.baseURL,t.url);u.open(t.method.toUpperCase(),yk(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const f=Er.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:f,config:t,request:u};b4(function(g){n(g),l()},function(g){r(g),l()},v),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new ve("Request aborted",ve.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new ve("Network Error",ve.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||vk;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),r(new ve(p,v.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,t,u)),u=null},Wn.isStandardBrowserEnv){const f=(t.withCredentials||F4(c))&&t.xsrfCookieName&&L4.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&I.forEach(s.toJSON(),function(p,v){u.setRequestHeader(v,p)}),I.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Zw(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Zw(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{u&&(r(!f||f.type?new Pl(null,t,u):f),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=U4(c);if(d&&Wn.protocols.indexOf(d)===-1){r(new ve("Unsupported protocol "+d+":",ve.ERR_BAD_REQUEST,t));return}u.send(i||null)})},$u={http:f4,xhr:B4};I.forEach($u,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const V4={getAdapter:t=>{t=I.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=I.isString(n)?$u[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ve(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(I.hasOwnProp($u,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!I.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:$u};function ff(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pl(null,t)}function e1(t){return ff(t),t.headers=Er.from(t.headers),t.data=df.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),V4.getAdapter(t.adapter||xy.adapter)(t).then(function(r){return ff(t),r.data=df.call(t,t.transformResponse,r),r.headers=Er.from(r.headers),r},function(r){return Ek(r)||(ff(t),r&&r.response&&(r.response.data=df.call(t,t.transformResponse,r.response),r.response.headers=Er.from(r.response.headers))),Promise.reject(r)})}const t1=t=>t instanceof Er?t.toJSON():t;function io(t,e){e=e||{};const n={};function r(u,c,h){return I.isPlainObject(u)&&I.isPlainObject(c)?I.merge.call({caseless:h},u,c):I.isPlainObject(c)?I.merge({},c):I.isArray(c)?c.slice():c}function i(u,c,h){if(I.isUndefined(c)){if(!I.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function s(u,c){if(!I.isUndefined(c))return r(void 0,c)}function o(u,c){if(I.isUndefined(c)){if(!I.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,h){if(h in e)return r(u,c);if(h in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(t1(u),t1(c),!0)};return I.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=l[c]||i,d=h(t[c],e[c],c);I.isUndefined(d)&&h!==a||(n[c]=d)}),n}const _k="1.4.0",Ry={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ry[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const n1={};Ry.transitional=function(e,n,r){function i(s,o){return"[Axios v"+_k+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ve(i(o," has been removed"+(n?" in "+n:"")),ve.ERR_DEPRECATED);return n&&!n1[o]&&(n1[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function H4(t,e,n){if(typeof t!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ve("option "+s+" must be "+l,ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ve("Unknown option "+s,ve.ERR_BAD_OPTION)}}const sm={assertOptions:H4,validators:Ry},$r=sm.validators;class jc{constructor(e){this.defaults=e,this.interceptors={request:new Jw,response:new Jw}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=io(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&sm.assertOptions(r,{silentJSONParsing:$r.transitional($r.boolean),forcedJSONParsing:$r.transitional($r.boolean),clarifyTimeoutError:$r.transitional($r.boolean)},!1),i!=null&&(I.isFunction(i)?n.paramsSerializer={serialize:i}:sm.assertOptions(i,{encode:$r.function,serialize:$r.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&I.merge(s.common,s[n.method]),o&&I.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=Er.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,h=0,d;if(!l){const p=[e1.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,u),d=p.length,c=Promise.resolve(n);h<d;)c=c.then(p[h++],p[h++]);return c}d=a.length;let f=n;for(h=0;h<d;){const p=a[h++],v=a[h++];try{f=p(f)}catch(E){v.call(this,E);break}}try{c=e1.call(this,f)}catch(p){return Promise.reject(p)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(e){e=io(this.defaults,e);const n=Sk(e.baseURL,e.url);return yk(n,e.params,e.paramsSerializer)}}I.forEach(["delete","get","head","options"],function(e){jc.prototype[e]=function(n,r){return this.request(io(r||{},{method:e,url:n,data:(r||{}).data}))}});I.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(io(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}jc.prototype[e]=n(),jc.prototype[e+"Form"]=n(!0)});const Fu=jc;class Ay{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Pl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Ay(function(i){e=i}),cancel:e}}}const q4=Ay;function K4(t){return function(n){return t.apply(null,n)}}function W4(t){return I.isObject(t)&&t.isAxiosError===!0}const om={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(om).forEach(([t,e])=>{om[e]=t});const G4=om;function Tk(t){const e=new Fu(t),n=sk(Fu.prototype.request,e);return I.extend(n,Fu.prototype,e,{allOwnKeys:!0}),I.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Tk(io(t,i))},n}const ft=Tk(xy);ft.Axios=Fu;ft.CanceledError=Pl;ft.CancelToken=q4;ft.isCancel=Ek;ft.VERSION=_k;ft.toFormData=td;ft.AxiosError=ve;ft.Cancel=ft.CanceledError;ft.all=function(e){return Promise.all(e)};ft.spread=K4;ft.isAxiosError=W4;ft.mergeConfig=io;ft.AxiosHeaders=Er;ft.formToJSON=t=>wk(I.isHTMLForm(t)?new FormData(t):t);ft.HttpStatusCode=G4;ft.default=ft;const Q4=ft;function Y4(){const{theme:t}=x.useContext(vi),[e,n]=x.useState(""),[r,i]=x.useState(""),[s,o]=x.useState(""),[a,l]=x.useState(""),[u,c]=x.useState(!1);async function h(p){c(!0);let v;Q4.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${p}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8`).then(E=>{console.log(E),v=E.data.results[0].geometry.location,i(v.lat),o(v.lng),d(p)})}const d=async p=>{l(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8&q=${p}`),c(!1)};async function f(p){p.preventDefault(),h(e)}return S.jsxs(oF,{theme:t,children:[S.jsx("div",{className:"formulario",children:S.jsxs("form",{onSubmit:f,children:[S.jsxs("div",{children:[S.jsx("label",{htmlFor:"",children:"Digite um endereço:"}),S.jsx("input",{type:"text",name:"",id:"",onChange:p=>n(p.target.value)})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"",children:"Latitude"}),S.jsx("input",{type:"text",name:"",value:r,readOnly:!0,className:"readOnly"})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"",children:"Longitude"}),S.jsx("input",{type:"text",name:"",value:s,readOnly:!0,className:"readOnly"})]}),S.jsx("button",{type:"submit",children:u===!1?"Buscar":"Carregando..."})]})}),S.jsx("div",{className:"divImg",children:S.jsx("iframe",{width:a===""?280:320,height:a===""?280:320,src:a===""?NF:a,frameBorder:"0"})})]})}const J4="/app_coordinates/assets/inicio-21a63dea.svg",X4=tn.main`
    width: 100vw;
    height: 100vh;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0af7"};
    color: ${t=>t.theme==="light"?"black":"white"};
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
`;function Z4(t){const{theme:e,toggleTheme:n}=x.useContext(vi);return localStorage.getItem("@userStorage","logado")?S.jsx(FC,{to:"/home"}):S.jsxs(X4,{theme:e,children:[S.jsxs("div",{className:"text",children:[S.jsx("h1",{children:"Descubra coordenadas exatas e veja quando quiser"}),S.jsx("p",{children:"Registre-se para continuar..."}),S.jsxs("div",{className:"links",children:[S.jsx(Kn,{to:"/signin",children:"Sign in"}),S.jsx(Kn,{to:"/signup",children:"Sign up"})]})]}),S.jsx("div",{children:S.jsx("img",{src:J4,alt:""})})]})}function eU(){return S.jsx(S.Fragment,{children:S.jsx(Z4,{})})}const Ck=tn.div`
    width: 100vw;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0af7"};
    color: ${t=>t.theme==="light"?"black":"white"};
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

   
`,tU="/app_coordinates/assets/login-3e19d223.svg";function nU(t){const[e,n]=x.useState(),[r,i]=x.useState(),{signIn:s,loadingAuth:o}=x.useContext(xl),a=Il();async function l(c){c.preventDefault(),e!==""&&r!==""&&await s(e,r).then(h=>{a("/home")})}const{theme:u}=x.useContext(vi);return S.jsxs(Ck,{theme:u,children:[S.jsx("div",{className:"Divform",children:S.jsxs("form",{onSubmit:l,children:[S.jsx("h1",{children:"Sign in"}),S.jsxs("div",{children:[S.jsx("label",{children:"Email"}),S.jsx("input",{type:"email",required:"",onChange:c=>n(c.target.value)})]}),S.jsxs("div",{children:[S.jsx("label",{children:"Password"}),S.jsx("input",{type:"password",name:"",id:"",required:"",onChange:c=>i(c.target.value)})]}),S.jsx("button",{type:"submit",children:o===!0?"Loading...":"Sign in"}),S.jsxs("p",{children:["Ou ",S.jsx(Kn,{to:"/signup",children:"cadastre-se"})]})]})}),S.jsx("div",{className:"img",children:S.jsx("img",{src:tU,alt:""})})]})}const rU="/app_coordinates/assets/signup-89f45dbd.svg";function iU(){const[t,e]=x.useState(""),[n,r]=x.useState(""),[i,s]=x.useState(""),[o,a]=x.useState(""),{signUp:l,loadingAuth:u}=x.useContext(xl),c=Il();async function h(f){f.preventDefault(),t!==""&&n!==""&&i!==""&&o!==""&&i===o&&await l(t,n,i).then(p=>{c("/home")})}const{theme:d}=x.useContext(vi);return S.jsxs(Ck,{theme:d,children:[S.jsx("div",{className:"Divform",children:S.jsxs("form",{onSubmit:h,children:[S.jsx("h1",{children:"Sign Up"}),S.jsxs("div",{children:[S.jsx("label",{children:"Nome"}),S.jsx("input",{type:"text",onChange:f=>e(f.target.value)})]}),S.jsxs("div",{children:[S.jsx("label",{children:"Email"}),S.jsx("input",{type:"text",onChange:f=>r(f.target.value)})]}),S.jsxs("div",{children:[S.jsx("label",{children:"Password"}),S.jsx("input",{type:"password",name:"",id:"",onChange:f=>s(f.target.value)})]}),S.jsxs("div",{children:[S.jsx("label",{children:"Confirm password"}),S.jsx("input",{type:"password",name:"",id:"",onChange:f=>a(f.target.value)})]}),S.jsx("button",{type:"submit",children:u===!0?"Loading...":"Sign up"}),S.jsxs("p",{children:["Já possui uma conta? ",S.jsx(Kn,{to:"/signin",children:"Login"})]})]})}),S.jsx("div",{className:"img",children:S.jsx("img",{src:rU,alt:""})})]})}const sU=tn.main`
  background-color: ${t=>t.theme==="light"?"white":"#0a0a0af7"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 0vh 25vh 0vh;
`,oU=tn.div`
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
        flex-direction: column;
        justify-content: center;
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
        position: absolute;
        transition: 0.9s;
     }
     label:hover span{
        transform: scale(1.6);
     }
`,aU=tn.div`
  
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
        gap: 10px;
    }
    div label{
        color: #9E30F4;
        font-weight: bold;
        font-size: 18px;
    }
    div input{
        padding: 10px;
        background-color: white;
        font-size: 1.1rem;
        outline: none;
        border: 3px solid #9E30F4;
        border-radius: 7px;
    }

    .divToggleTheme{
        padding: 20px 0 ;
        display: flex;
        flex-direction: row;
        align-items: center;
       justify-content: space-evenly;
       
    }
    .toggleTheme{
        
    }

    button{
        cursor: pointer;
        padding: 15px 50px;
        border-radius: 10px;
        font-weight: bold;
        background-color: #9E30F4;
        color: white;
        border: none;
        font-size: 1.2rem;
    }

    .delete{
        color: red;
    }
`,lU="/app_coordinates/assets/avatar-9bcaa191.png";function uU(t){const{UserStorage:e}=x.useContext(xl),{theme:n,toggleTheme:r}=x.useContext(vi),i=JSON.parse(localStorage.getItem("@userStorage")),[s,o]=x.useState(i.nome),[a,l]=x.useState(i.email),[u,c]=x.useState(i.imgUrl);async function h(){await Wb(Bp(Hp,"users",i.uid),{nome:s,imgUrl:u}).then(()=>{let f={nome:s,email:a,imgUrl:u,logado:!0,uid:i.uid};e(f)})}function d(f){if(f.target.files[0]){const p=f.target.files[0];console.log(p),p.type==="image/jpeg"||p.type==="image/png"?c(URL.createObjectURL(p)):c(null)}}return S.jsxs(sU,{theme:n,children:[S.jsx(oU,{children:S.jsxs("label",{children:[S.jsx("span",{class:"material-symbols-outlined",children:"upload"}),S.jsx("input",{type:"file",accept:"image/*",onChange:d}),u===null?S.jsx("img",{src:lU,alt:"Foto de perfil"}):S.jsx("img",{src:u,alt:"Foto de perfil",width:250,height:250})]})}),S.jsxs(aU,{children:[S.jsx("h1",{children:"Informações pessoais"}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"",children:"Nome:"}),S.jsx("input",{type:"text",defaultValue:s,onChange:f=>o(f.target.value),id:""})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"",children:"Email:"}),S.jsx("input",{type:"email",defaultValue:a,onChange:f=>l(f.target.value),id:""})]}),S.jsx("h1",{children:"Preferências"}),S.jsxs("div",{className:"divToggleTheme",children:[S.jsx("label",{htmlFor:"",children:"Tema:"}),S.jsx("button",{className:"toggleTheme",onClick:r,children:n==="light"?"dark":"light"})]}),S.jsx("button",{onClick:h,children:"Salvar"}),S.jsx("a",{href:"",className:"delete",children:"Excluir conta"})]})]})}const cU="/app_coordinates/assets/404-dfb3de82.png",hU=tn.div`
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
`;function dU(){return S.jsxs(hU,{children:[S.jsx("img",{src:cU,alt:""}),S.jsx("h1",{children:"Page not found"}),S.jsxs("p",{children:["Back to ",S.jsx(Kn,{to:"/home",children:"Home"})," "]})]})}const fU=tn.main`
    height: 90vh;
    width: 100%;
`;function pU(t){return S.jsx(fU,{children:S.jsx("h1",{children:"Página Saved"})})}function mU({children:t}){return localStorage.getItem("@userStorage","logado")?t:S.jsx(FC,{to:"/"})}const gU=UM([{path:"/",element:S.jsx(eU,{}),errorElement:S.jsx(dU,{})},{path:"/signin",element:S.jsx(nU,{})},{path:"/signup",element:S.jsx(iU,{})},{path:"/home",element:S.jsx(mU,{children:S.jsx(J$,{})}),children:[{path:"/home",element:S.jsx(sF,{})},{path:"/home/coordinates",element:S.jsx(Y4,{})},{path:"/home/account",element:S.jsx(uU,{})},{path:"/home/saved",element:S.jsx(pU,{})}]}],{basename:"/app_coordinates"}),yU=new IF;pf.createRoot(document.getElementById("root")).render(S.jsx(Nn.StrictMode,{children:S.jsx(nR,{children:S.jsx(qM,{children:S.jsx(DF,{client:yU,children:S.jsx(PM,{router:gU})})})})}));
