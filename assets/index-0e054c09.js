function AI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Im(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D1={exports:{}},th={},O1={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),RI=Symbol.for("react.portal"),bI=Symbol.for("react.fragment"),PI=Symbol.for("react.strict_mode"),NI=Symbol.for("react.profiler"),DI=Symbol.for("react.provider"),OI=Symbol.for("react.context"),LI=Symbol.for("react.forward_ref"),MI=Symbol.for("react.suspense"),$I=Symbol.for("react.memo"),FI=Symbol.for("react.lazy"),iv=Symbol.iterator;function UI(t){return t===null||typeof t!="object"?null:(t=iv&&t[iv]||t["@@iterator"],typeof t=="function"?t:null)}var L1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M1=Object.assign,$1={};function fo(t,e,n){this.props=t,this.context=e,this.refs=$1,this.updater=n||L1}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function F1(){}F1.prototype=fo.prototype;function xm(t,e,n){this.props=t,this.context=e,this.refs=$1,this.updater=n||L1}var Am=xm.prototype=new F1;Am.constructor=xm;M1(Am,fo.prototype);Am.isPureReactComponent=!0;var sv=Array.isArray,U1=Object.prototype.hasOwnProperty,Rm={current:null},j1={key:!0,ref:!0,__self:!0,__source:!0};function B1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)U1.call(e,r)&&!j1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:hl,type:t,key:s,ref:o,props:i,_owner:Rm.current}}function jI(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bm(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function BI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ov=/\/+/g;function kd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BI(""+t.key):e.toString(36)}function Iu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case RI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+kd(o,0):r,sv(i)?(n="",t!=null&&(n=t.replace(ov,"$&/")+"/"),Iu(i,e,n,"",function(u){return u})):i!=null&&(bm(i)&&(i=jI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ov,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+kd(s,a);o+=Iu(s,e,n,l,i)}else if(l=UI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+kd(s,a++),o+=Iu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Kl(t,e,n){if(t==null)return t;var r=[],i=0;return Iu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},xu={transition:null},VI={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:xu,ReactCurrentOwner:Rm};pe.Children={map:Kl,forEach:function(t,e,n){Kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Kl(t,function(){e++}),e},toArray:function(t){return Kl(t,function(e){return e})||[]},only:function(t){if(!bm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=fo;pe.Fragment=bI;pe.Profiler=NI;pe.PureComponent=xm;pe.StrictMode=PI;pe.Suspense=MI;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VI;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=M1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)U1.call(e,l)&&!j1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:hl,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:OI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DI,_context:t},t.Consumer=t};pe.createElement=B1;pe.createFactory=function(t){var e=B1.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:LI,render:t}};pe.isValidElement=bm;pe.lazy=function(t){return{$$typeof:FI,_payload:{_status:-1,_result:t},_init:zI}};pe.memo=function(t,e){return{$$typeof:$I,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=xu.transition;xu.transition={};try{t()}finally{xu.transition=e}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};pe.useContext=function(t){return Qt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};pe.useId=function(){return Qt.current.useId()};pe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};pe.useRef=function(t){return Qt.current.useRef(t)};pe.useState=function(t){return Qt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Qt.current.useTransition()};pe.version="18.2.0";O1.exports=pe;var I=O1.exports;const Mn=Im(I),HI=AI({__proto__:null,default:Mn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qI=I,WI=Symbol.for("react.element"),KI=Symbol.for("react.fragment"),GI=Object.prototype.hasOwnProperty,QI=qI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YI={key:!0,ref:!0,__self:!0,__source:!0};function z1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GI.call(e,r)&&!YI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WI,type:t,key:s,ref:o,props:i,_owner:QI.current}}th.Fragment=KI;th.jsx=z1;th.jsxs=z1;D1.exports=th;var _=D1.exports,Nf={},V1={exports:{}},yn={},H1={exports:{}},q1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,V){var Q=N.length;N.push(V);e:for(;0<Q;){var ye=Q-1>>>1,F=N[ye];if(0<i(F,V))N[ye]=V,N[Q]=F,Q=ye;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],Q=N.pop();if(Q!==V){N[0]=Q;e:for(var ye=0,F=N.length,j=F>>>1;ye<j;){var $=2*(ye+1)-1,X=N[$],S=$+1,de=N[S];if(0>i(X,Q))S<F&&0>i(de,X)?(N[ye]=de,N[S]=Q,ye=S):(N[ye]=X,N[$]=Q,ye=$);else if(S<F&&0>i(de,Q))N[ye]=de,N[S]=Q,ye=S;else break e}}return V}function i(N,V){var Q=N.sortIndex-V.sortIndex;return Q!==0?Q:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,m=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=N)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function y(N){if(v=!1,w(N),!m)if(n(l)!==null)m=!0,Pe(C);else{var V=n(u);V!==null&&Ne(y,V.startTime-N)}}function C(N,V){m=!1,v&&(v=!1,g(L),L=-1),f=!0;var Q=d;try{for(w(V),h=n(l);h!==null&&(!(h.expirationTime>V)||N&&!De());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var F=ye(h.expirationTime<=V);V=t.unstable_now(),typeof F=="function"?h.callback=F:h===n(l)&&r(l),w(V)}else r(l);h=n(l)}if(h!==null)var j=!0;else{var $=n(u);$!==null&&Ne(y,$.startTime-V),j=!1}return j}finally{h=null,d=Q,f=!1}}var R=!1,b=null,L=-1,G=5,K=-1;function De(){return!(t.unstable_now()-K<G)}function ie(){if(b!==null){var N=t.unstable_now();K=N;var V=!0;try{V=b(!0,N)}finally{V?be():(R=!1,b=null)}}else R=!1}var be;if(typeof p=="function")be=function(){p(ie)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ce=Oe.port2;Oe.port1.onmessage=ie,be=function(){Ce.postMessage(null)}}else be=function(){E(ie,0)};function Pe(N){b=N,R||(R=!0,be())}function Ne(N,V){L=E(function(){N(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,Pe(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var Q=d;d=V;try{return N()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=d;d=N;try{return V()}finally{d=Q}},t.unstable_scheduleCallback=function(N,V,Q){var ye=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ye+Q:ye):Q=ye,N){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Q+F,N={id:c++,callback:V,priorityLevel:N,startTime:Q,expirationTime:F,sortIndex:-1},Q>ye?(N.sortIndex=Q,e(u,N),n(l)===null&&N===n(u)&&(v?(g(L),L=-1):v=!0,Ne(y,Q-ye))):(N.sortIndex=F,e(l,N),m||f||(m=!0,Pe(C))),N},t.unstable_shouldYield=De,t.unstable_wrapCallback=function(N){var V=d;return function(){var Q=d;d=V;try{return N.apply(this,arguments)}finally{d=Q}}}})(q1);H1.exports=q1;var XI=H1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1=I,pn=XI;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K1=new Set,Ca={};function ss(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(Ca[t]=e,t=0;t<e.length;t++)K1.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Df=Object.prototype.hasOwnProperty,JI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,av={},lv={};function ZI(t){return Df.call(lv,t)?!0:Df.call(av,t)?!1:JI.test(t)?lv[t]=!0:(av[t]=!0,!1)}function ex(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tx(t,e,n,r){if(e===null||typeof e>"u"||ex(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pm=/[\-:]([a-z])/g;function Nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pm,Nm);bt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pm,Nm);bt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pm,Nm);bt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dm(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tx(e,n,i,r)&&(n=null),r||i===null?ZI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),ys=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),G1=Symbol.for("react.provider"),Q1=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),Mm=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),Y1=Symbol.for("react.offscreen"),uv=Symbol.iterator;function Oo(t){return t===null||typeof t!="object"?null:(t=uv&&t[uv]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,Id;function Qo(t){if(Id===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Id=e&&e[1]||""}return`
`+Id+t}var xd=!1;function Ad(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function nx(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Ad(t.type,!1),t;case 11:return t=Ad(t.type.render,!1),t;case 1:return t=Ad(t.type,!0),t;default:return""}}function $f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case ys:return"Portal";case Of:return"Profiler";case Om:return"StrictMode";case Lf:return"Suspense";case Mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q1:return(t.displayName||"Context")+".Consumer";case G1:return(t._context.displayName||"Context")+".Provider";case Lm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mm:return e=t.displayName||null,e!==null?e:$f(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return $f(t(e))}catch{}}return null}function rx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $f(e);case 8:return e===Om?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ix(t){var e=X1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ql(t){t._valueTracker||(t._valueTracker=ix(t))}function J1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=X1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ff(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z1(t,e){e=e.checked,e!=null&&Dm(t,"checked",e,!1)}function Uf(t,e){Z1(t,e);var n=mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&jf(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jf(t,e,n){(e!=="number"||ec(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Yo(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mi(n)}}function eE(t,e){var n=mi(e.value),r=mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yl,nE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yl=Yl||document.createElement("div"),Yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sx=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function rE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function iE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ox=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(ox[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function $m(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wf=null,Ls=null,Ms=null;function pv(t){if(t=pl(t)){if(typeof Wf!="function")throw Error(D(280));var e=t.stateNode;e&&(e=oh(e),Wf(t.stateNode,t.type,e))}}function sE(t){Ls?Ms?Ms.push(t):Ms=[t]:Ls=t}function oE(){if(Ls){var t=Ls,e=Ms;if(Ms=Ls=null,pv(t),e)for(t=0;t<e.length;t++)pv(e[t])}}function aE(t,e){return t(e)}function lE(){}var Rd=!1;function uE(t,e,n){if(Rd)return t(e,n);Rd=!0;try{return aE(t,e,n)}finally{Rd=!1,(Ls!==null||Ms!==null)&&(lE(),oE())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var r=oh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Kf=!1;if(kr)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Kf=!1}function ax(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var aa=!1,tc=null,nc=!1,Gf=null,lx={onError:function(t){aa=!0,tc=t}};function ux(t,e,n,r,i,s,o,a,l){aa=!1,tc=null,ax.apply(lx,arguments)}function cx(t,e,n,r,i,s,o,a,l){if(ux.apply(this,arguments),aa){if(aa){var u=tc;aa=!1,tc=null}else throw Error(D(198));nc||(nc=!0,Gf=u)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mv(t){if(os(t)!==t)throw Error(D(188))}function hx(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mv(i),t;if(s===r)return mv(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function hE(t){return t=hx(t),t!==null?dE(t):null}function dE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dE(t);if(e!==null)return e;t=t.sibling}return null}var fE=pn.unstable_scheduleCallback,gv=pn.unstable_cancelCallback,dx=pn.unstable_shouldYield,fx=pn.unstable_requestPaint,nt=pn.unstable_now,px=pn.unstable_getCurrentPriorityLevel,Fm=pn.unstable_ImmediatePriority,pE=pn.unstable_UserBlockingPriority,rc=pn.unstable_NormalPriority,mx=pn.unstable_LowPriority,mE=pn.unstable_IdlePriority,nh=null,nr=null;function gx(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(nh,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:wx,yx=Math.log,vx=Math.LN2;function wx(t){return t>>>=0,t===0?32:31-(yx(t)/vx|0)|0}var Xl=64,Jl=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xo(a):(s&=o,s!==0&&(r=Xo(s)))}else o=n&~i,o!==0?r=Xo(o):s!==0&&(r=Xo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function Ex(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _x(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ex(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gE(){var t=Xl;return Xl<<=1,!(Xl&4194240)&&(Xl=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function yE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vE,jm,wE,EE,_E,Yf=!1,Zl=[],ti=null,ni=null,ri=null,xa=new Map,Aa=new Map,qr=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yv(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pl(e),e!==null&&jm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Cx(t,e,n,r,i){switch(e){case"focusin":return ti=Mo(ti,t,e,n,r,i),!0;case"dragenter":return ni=Mo(ni,t,e,n,r,i),!0;case"mouseover":return ri=Mo(ri,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xa.set(s,Mo(xa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Aa.set(s,Mo(Aa.get(s)||null,t,e,n,r,i)),!0}return!1}function SE(t){var e=Pi(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=cE(n),e!==null){t.blockedOn=e,_E(t.priority,function(){wE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qf=r,n.target.dispatchEvent(r),qf=null}else return e=pl(n),e!==null&&jm(e),t.blockedOn=n,!1;e.shift()}return!0}function vv(t,e,n){Au(t)&&n.delete(e)}function kx(){Yf=!1,ti!==null&&Au(ti)&&(ti=null),ni!==null&&Au(ni)&&(ni=null),ri!==null&&Au(ri)&&(ri=null),xa.forEach(vv),Aa.forEach(vv)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,Yf||(Yf=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,kx)))}function Ra(t){function e(i){return $o(i,t)}if(0<Zl.length){$o(Zl[0],t);for(var n=1;n<Zl.length;n++){var r=Zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ti!==null&&$o(ti,t),ni!==null&&$o(ni,t),ri!==null&&$o(ri,t),xa.forEach(e),Aa.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)SE(n),n.blockedOn===null&&qr.shift()}var $s=Or.ReactCurrentBatchConfig,sc=!0;function Ix(t,e,n,r){var i=xe,s=$s.transition;$s.transition=null;try{xe=1,Bm(t,e,n,r)}finally{xe=i,$s.transition=s}}function xx(t,e,n,r){var i=xe,s=$s.transition;$s.transition=null;try{xe=4,Bm(t,e,n,r)}finally{xe=i,$s.transition=s}}function Bm(t,e,n,r){if(sc){var i=Xf(t,e,n,r);if(i===null)jd(t,e,r,oc,n),yv(t,r);else if(Cx(i,t,e,n,r))r.stopPropagation();else if(yv(t,r),e&4&&-1<Tx.indexOf(t)){for(;i!==null;){var s=pl(i);if(s!==null&&vE(s),s=Xf(t,e,n,r),s===null&&jd(t,e,r,oc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jd(t,e,r,null,n)}}var oc=null;function Xf(t,e,n,r){if(oc=null,t=$m(r),t=Pi(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oc=t,null}function TE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(px()){case Fm:return 1;case pE:return 4;case rc:case mx:return 16;case mE:return 536870912;default:return 16}default:return 16}}var Jr=null,zm=null,Ru=null;function CE(){if(Ru)return Ru;var t,e=zm,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ru=i.slice(t,1<r?1-r:void 0)}function bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eu(){return!0}function wv(){return!1}function vn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eu:wv,this.isPropagationStopped=wv,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vm=vn(po),fl=Ye({},po,{view:0,detail:0}),Ax=vn(fl),Pd,Nd,Fo,rh=Ye({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Pd=t.screenX-Fo.screenX,Nd=t.screenY-Fo.screenY):Nd=Pd=0,Fo=t),Pd)},movementY:function(t){return"movementY"in t?t.movementY:Nd}}),Ev=vn(rh),Rx=Ye({},rh,{dataTransfer:0}),bx=vn(Rx),Px=Ye({},fl,{relatedTarget:0}),Dd=vn(Px),Nx=Ye({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=vn(Nx),Ox=Ye({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lx=vn(Ox),Mx=Ye({},po,{data:0}),_v=vn(Mx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ux[t])?!!e[t]:!1}function Hm(){return jx}var Bx=Ye({},fl,{key:function(t){if(t.key){var e=$x[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hm,charCode:function(t){return t.type==="keypress"?bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zx=vn(Bx),Vx=Ye({},rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=vn(Vx),Hx=Ye({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hm}),qx=vn(Hx),Wx=Ye({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=vn(Wx),Gx=Ye({},rh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=vn(Gx),Yx=[9,13,27,32],qm=kr&&"CompositionEvent"in window,la=null;kr&&"documentMode"in document&&(la=document.documentMode);var Xx=kr&&"TextEvent"in window&&!la,kE=kr&&(!qm||la&&8<la&&11>=la),Tv=String.fromCharCode(32),Cv=!1;function IE(t,e){switch(t){case"keyup":return Yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function Jx(t,e){switch(t){case"compositionend":return xE(e);case"keypress":return e.which!==32?null:(Cv=!0,Tv);case"textInput":return t=e.data,t===Tv&&Cv?null:t;default:return null}}function Zx(t,e){if(ws)return t==="compositionend"||!qm&&IE(t,e)?(t=CE(),Ru=zm=Jr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kE&&e.locale!=="ko"?null:e.data;default:return null}}var eA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eA[t.type]:e==="textarea"}function AE(t,e,n,r){sE(r),e=ac(e,"onChange"),0<e.length&&(n=new Vm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,ba=null;function tA(t){UE(t,0)}function ih(t){var e=Ss(t);if(J1(e))return t}function nA(t,e){if(t==="change")return e}var RE=!1;if(kr){var Od;if(kr){var Ld="oninput"in document;if(!Ld){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),Ld=typeof Iv.oninput=="function"}Od=Ld}else Od=!1;RE=Od&&(!document.documentMode||9<document.documentMode)}function xv(){ua&&(ua.detachEvent("onpropertychange",bE),ba=ua=null)}function bE(t){if(t.propertyName==="value"&&ih(ba)){var e=[];AE(e,ba,t,$m(t)),uE(tA,e)}}function rA(t,e,n){t==="focusin"?(xv(),ua=e,ba=n,ua.attachEvent("onpropertychange",bE)):t==="focusout"&&xv()}function iA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ih(ba)}function sA(t,e){if(t==="click")return ih(e)}function oA(t,e){if(t==="input"||t==="change")return ih(e)}function aA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:aA;function Pa(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Df.call(e,i)||!Bn(t[i],e[i]))return!1}return!0}function Av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rv(t,e){var n=Av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Av(n)}}function PE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?PE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function NE(){for(var t=window,e=ec();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ec(t.document)}return e}function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lA(t){var e=NE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&PE(n.ownerDocument.documentElement,n)){if(r!==null&&Wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rv(n,s);var o=Rv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uA=kr&&"documentMode"in document&&11>=document.documentMode,Es=null,Jf=null,ca=null,Zf=!1;function bv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zf||Es==null||Es!==ec(r)||(r=Es,"selectionStart"in r&&Wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Pa(ca,r)||(ca=r,r=ac(Jf,"onSelect"),0<r.length&&(e=new Vm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Es)))}function tu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},Md={},DE={};kr&&(DE=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function sh(t){if(Md[t])return Md[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in DE)return Md[t]=e[n];return t}var OE=sh("animationend"),LE=sh("animationiteration"),ME=sh("animationstart"),$E=sh("transitionend"),FE=new Map,Pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(t,e){FE.set(t,e),ss(e,[t])}for(var $d=0;$d<Pv.length;$d++){var Fd=Pv[$d],cA=Fd.toLowerCase(),hA=Fd[0].toUpperCase()+Fd.slice(1);_i(cA,"on"+hA)}_i(OE,"onAnimationEnd");_i(LE,"onAnimationIteration");_i(ME,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i($E,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Nv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cx(r,e,void 0,t),t.currentTarget=null}function UE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Nv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Nv(i,a,u),s=l}}}if(nc)throw t=Gf,nc=!1,Gf=null,t}function Fe(t,e){var n=e[ip];n===void 0&&(n=e[ip]=new Set);var r=t+"__bubble";n.has(r)||(jE(e,t,2,!1),n.add(r))}function Ud(t,e,n){var r=0;e&&(r|=4),jE(n,t,r,e)}var nu="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[nu]){t[nu]=!0,K1.forEach(function(n){n!=="selectionchange"&&(dA.has(n)||Ud(n,!1,t),Ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nu]||(e[nu]=!0,Ud("selectionchange",!1,e))}}function jE(t,e,n,r){switch(TE(e)){case 1:var i=Ix;break;case 4:i=xx;break;default:i=Bm}n=i.bind(null,e,n,t),i=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}uE(function(){var u=s,c=$m(n),h=[];e:{var d=FE.get(t);if(d!==void 0){var f=Vm,m=t;switch(t){case"keypress":if(bu(n)===0)break e;case"keydown":case"keyup":f=zx;break;case"focusin":m="focus",f=Dd;break;case"focusout":m="blur",f=Dd;break;case"beforeblur":case"afterblur":f=Dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Ev;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=qx;break;case OE:case LE:case ME:f=Dx;break;case $E:f=Kx;break;case"scroll":f=Ax;break;case"wheel":f=Qx;break;case"copy":case"cut":case"paste":f=Lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Sv}var v=(e&4)!==0,E=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,w;p!==null;){w=p;var y=w.stateNode;if(w.tag===5&&y!==null&&(w=y,g!==null&&(y=Ia(p,g),y!=null&&v.push(Da(p,y,w)))),E)break;p=p.return}0<v.length&&(d=new f(d,m,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==qf&&(m=n.relatedTarget||n.fromElement)&&(Pi(m)||m[Ir]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?Pi(m):null,m!==null&&(E=os(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(v=Ev,y="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Sv,y="onPointerLeave",g="onPointerEnter",p="pointer"),E=f==null?d:Ss(f),w=m==null?d:Ss(m),d=new v(y,p+"leave",f,n,c),d.target=E,d.relatedTarget=w,y=null,Pi(c)===u&&(v=new v(g,p+"enter",m,n,c),v.target=w,v.relatedTarget=E,y=v),E=y,f&&m)t:{for(v=f,g=m,p=0,w=v;w;w=fs(w))p++;for(w=0,y=g;y;y=fs(y))w++;for(;0<p-w;)v=fs(v),p--;for(;0<w-p;)g=fs(g),w--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=fs(v),g=fs(g)}v=null}else v=null;f!==null&&Dv(h,d,f,v,!1),m!==null&&E!==null&&Dv(h,E,m,v,!0)}}e:{if(d=u?Ss(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=nA;else if(kv(d))if(RE)C=oA;else{C=iA;var R=rA}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=sA);if(C&&(C=C(t,u))){AE(h,C,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&jf(d,"number",d.value)}switch(R=u?Ss(u):window,t){case"focusin":(kv(R)||R.contentEditable==="true")&&(Es=R,Jf=u,ca=null);break;case"focusout":ca=Jf=Es=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,bv(h,n,c);break;case"selectionchange":if(uA)break;case"keydown":case"keyup":bv(h,n,c)}var b;if(qm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ws?IE(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(kE&&n.locale!=="ko"&&(ws||L!=="onCompositionStart"?L==="onCompositionEnd"&&ws&&(b=CE()):(Jr=c,zm="value"in Jr?Jr.value:Jr.textContent,ws=!0)),R=ac(u,L),0<R.length&&(L=new _v(L,t,null,n,c),h.push({event:L,listeners:R}),b?L.data=b:(b=xE(n),b!==null&&(L.data=b)))),(b=Xx?Jx(t,n):Zx(t,n))&&(u=ac(u,"onBeforeInput"),0<u.length&&(c=new _v("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}UE(h,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ac(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ia(t,n),s!=null&&r.unshift(Da(t,s,i)),s=Ia(t,e),s!=null&&r.push(Da(t,s,i))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ia(n,s),l!=null&&o.unshift(Da(n,l,a))):i||(l=Ia(n,s),l!=null&&o.push(Da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fA=/\r\n?/g,pA=/\u0000|\uFFFD/g;function Ov(t){return(typeof t=="string"?t:""+t).replace(fA,`
`).replace(pA,"")}function ru(t,e,n){if(e=Ov(e),Ov(t)!==e&&n)throw Error(D(425))}function lc(){}var ep=null,tp=null;function np(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rp=typeof setTimeout=="function"?setTimeout:void 0,mA=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,gA=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(t){return Lv.resolve(null).then(t).catch(yA)}:rp;function yA(t){setTimeout(function(){throw t})}function Bd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ra(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),Qn="__reactFiber$"+mo,Oa="__reactProps$"+mo,Ir="__reactContainer$"+mo,ip="__reactEvents$"+mo,vA="__reactListeners$"+mo,wA="__reactHandles$"+mo;function Pi(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mv(t);t!==null;){if(n=t[Qn])return n;t=Mv(t)}return e}t=n,n=t.parentNode}return null}function pl(t){return t=t[Qn]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function oh(t){return t[Oa]||null}var sp=[],Ts=-1;function Si(t){return{current:t}}function Be(t){0>Ts||(t.current=sp[Ts],sp[Ts]=null,Ts--)}function Me(t,e){Ts++,sp[Ts]=t.current,t.current=e}var gi={},zt=Si(gi),sn=Si(!1),Hi=gi;function Gs(t,e){var n=t.type.contextTypes;if(!n)return gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function on(t){return t=t.childContextTypes,t!=null}function uc(){Be(sn),Be(zt)}function $v(t,e,n){if(zt.current!==gi)throw Error(D(168));Me(zt,e),Me(sn,n)}function BE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,rx(t)||"Unknown",i));return Ye({},n,r)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gi,Hi=zt.current,Me(zt,t),Me(sn,sn.current),!0}function Fv(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=BE(t,e,Hi),r.__reactInternalMemoizedMergedChildContext=t,Be(sn),Be(zt),Me(zt,t)):Be(sn),Me(sn,n)}var mr=null,ah=!1,zd=!1;function zE(t){mr===null?mr=[t]:mr.push(t)}function EA(t){ah=!0,zE(t)}function Ti(){if(!zd&&mr!==null){zd=!0;var t=0,e=xe;try{var n=mr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,ah=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),fE(Fm,Ti),i}finally{xe=e,zd=!1}}return null}var Cs=[],ks=0,hc=null,dc=0,Tn=[],Cn=0,qi=null,gr=1,yr="";function Ai(t,e){Cs[ks++]=dc,Cs[ks++]=hc,hc=t,dc=e}function VE(t,e,n){Tn[Cn++]=gr,Tn[Cn++]=yr,Tn[Cn++]=qi,qi=t;var r=gr;t=yr;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gr=1<<32-$n(e)+i|n<<i|r,yr=s+t}else gr=1<<s|n<<i|r,yr=t}function Km(t){t.return!==null&&(Ai(t,1),VE(t,1,0))}function Gm(t){for(;t===hc;)hc=Cs[--ks],Cs[ks]=null,dc=Cs[--ks],Cs[ks]=null;for(;t===qi;)qi=Tn[--Cn],Tn[Cn]=null,yr=Tn[--Cn],Tn[Cn]=null,gr=Tn[--Cn],Tn[Cn]=null}var dn=null,cn=null,Ke=!1,Ln=null;function HE(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,cn=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qi!==null?{id:gr,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,cn=null,!0):!1;default:return!1}}function op(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ap(t){if(Ke){var e=cn;if(e){var n=e;if(!Uv(t,e)){if(op(t))throw Error(D(418));e=ii(n.nextSibling);var r=dn;e&&Uv(t,e)?HE(r,n):(t.flags=t.flags&-4097|2,Ke=!1,dn=t)}}else{if(op(t))throw Error(D(418));t.flags=t.flags&-4097|2,Ke=!1,dn=t}}}function jv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function iu(t){if(t!==dn)return!1;if(!Ke)return jv(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!np(t.type,t.memoizedProps)),e&&(e=cn)){if(op(t))throw qE(),Error(D(418));for(;e;)HE(t,e),e=ii(e.nextSibling)}if(jv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=dn?ii(t.stateNode.nextSibling):null;return!0}function qE(){for(var t=cn;t;)t=ii(t.nextSibling)}function Qs(){cn=dn=null,Ke=!1}function Qm(t){Ln===null?Ln=[t]:Ln.push(t)}var _A=Or.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fc=Si(null),pc=null,Is=null,Ym=null;function Xm(){Ym=Is=pc=null}function Jm(t){var e=fc.current;Be(fc),t._currentValue=e}function lp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){pc=t,Ym=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Ym!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(pc===null)throw Error(D(308));Is=t,pc.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Ni=null;function Zm(t){Ni===null?Ni=[t]:Ni.push(t)}function WE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zm(e)):(n.next=i.next,i.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function eg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function KE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xr(t,n)}return i=r.interleaved,i===null?(e.next=e,Zm(r)):(e.next=i.next,i.next=e),r.interleaved=e,xr(t,n)}function Pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}function Bv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mc(t,e,n,r){var i=t.updateQueue;Vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,f=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(f,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(f,h,d):m,d==null)break e;h=Ye({},h,d);break e;case 2:Vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ki|=o,t.lanes=o,t.memoizedState=h}}function zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var GE=new W1.Component().refs;function up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lh={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=ai(t),s=Sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(Fn(e,t,i,r),Pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=ai(t),s=Sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(Fn(e,t,i,r),Pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=ai(t),i=Sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=si(t,i,r),e!==null&&(Fn(e,t,r,n),Pu(e,t,r))}};function Vv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,r)||!Pa(i,s):!0}function QE(t,e,n){var r=!1,i=gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=on(e)?Hi:zt.current,r=e.contextTypes,s=(r=r!=null)?Gs(t,i):gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lh.enqueueReplaceState(e,e.state,null)}function cp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=GE,eg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=on(e)?Hi:zt.current,i.context=Gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(up(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lh.enqueueReplaceState(i,i.state,null),mc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===GE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function su(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qv(t){var e=t._init;return e(t._payload)}function YE(t){function e(g,p){if(t){var w=g.deletions;w===null?(g.deletions=[p],g.flags|=16):w.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=li(g,p),g.index=0,g.sibling=null,g}function s(g,p,w){return g.index=w,t?(w=g.alternate,w!==null?(w=w.index,w<p?(g.flags|=2,p):w):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,w,y){return p===null||p.tag!==6?(p=Qd(w,g.mode,y),p.return=g,p):(p=i(p,w),p.return=g,p)}function l(g,p,w,y){var C=w.type;return C===vs?c(g,p,w.props.children,y,w.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&qv(C)===p.type)?(y=i(p,w.props),y.ref=Uo(g,p,w),y.return=g,y):(y=$u(w.type,w.key,w.props,null,g.mode,y),y.ref=Uo(g,p,w),y.return=g,y)}function u(g,p,w,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=Yd(w,g.mode,y),p.return=g,p):(p=i(p,w.children||[]),p.return=g,p)}function c(g,p,w,y,C){return p===null||p.tag!==7?(p=ji(w,g.mode,y,C),p.return=g,p):(p=i(p,w),p.return=g,p)}function h(g,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Qd(""+p,g.mode,w),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gl:return w=$u(p.type,p.key,p.props,null,g.mode,w),w.ref=Uo(g,null,p),w.return=g,w;case ys:return p=Yd(p,g.mode,w),p.return=g,p;case zr:var y=p._init;return h(g,y(p._payload),w)}if(Yo(p)||Oo(p))return p=ji(p,g.mode,w,null),p.return=g,p;su(g,p)}return null}function d(g,p,w,y){var C=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return C!==null?null:a(g,p,""+w,y);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gl:return w.key===C?l(g,p,w,y):null;case ys:return w.key===C?u(g,p,w,y):null;case zr:return C=w._init,d(g,p,C(w._payload),y)}if(Yo(w)||Oo(w))return C!==null?null:c(g,p,w,y,null);su(g,w)}return null}function f(g,p,w,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(w)||null,a(p,g,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gl:return g=g.get(y.key===null?w:y.key)||null,l(p,g,y,C);case ys:return g=g.get(y.key===null?w:y.key)||null,u(p,g,y,C);case zr:var R=y._init;return f(g,p,w,R(y._payload),C)}if(Yo(y)||Oo(y))return g=g.get(w)||null,c(p,g,y,C,null);su(p,y)}return null}function m(g,p,w,y){for(var C=null,R=null,b=p,L=p=0,G=null;b!==null&&L<w.length;L++){b.index>L?(G=b,b=null):G=b.sibling;var K=d(g,b,w[L],y);if(K===null){b===null&&(b=G);break}t&&b&&K.alternate===null&&e(g,b),p=s(K,p,L),R===null?C=K:R.sibling=K,R=K,b=G}if(L===w.length)return n(g,b),Ke&&Ai(g,L),C;if(b===null){for(;L<w.length;L++)b=h(g,w[L],y),b!==null&&(p=s(b,p,L),R===null?C=b:R.sibling=b,R=b);return Ke&&Ai(g,L),C}for(b=r(g,b);L<w.length;L++)G=f(b,g,L,w[L],y),G!==null&&(t&&G.alternate!==null&&b.delete(G.key===null?L:G.key),p=s(G,p,L),R===null?C=G:R.sibling=G,R=G);return t&&b.forEach(function(De){return e(g,De)}),Ke&&Ai(g,L),C}function v(g,p,w,y){var C=Oo(w);if(typeof C!="function")throw Error(D(150));if(w=C.call(w),w==null)throw Error(D(151));for(var R=C=null,b=p,L=p=0,G=null,K=w.next();b!==null&&!K.done;L++,K=w.next()){b.index>L?(G=b,b=null):G=b.sibling;var De=d(g,b,K.value,y);if(De===null){b===null&&(b=G);break}t&&b&&De.alternate===null&&e(g,b),p=s(De,p,L),R===null?C=De:R.sibling=De,R=De,b=G}if(K.done)return n(g,b),Ke&&Ai(g,L),C;if(b===null){for(;!K.done;L++,K=w.next())K=h(g,K.value,y),K!==null&&(p=s(K,p,L),R===null?C=K:R.sibling=K,R=K);return Ke&&Ai(g,L),C}for(b=r(g,b);!K.done;L++,K=w.next())K=f(b,g,L,K.value,y),K!==null&&(t&&K.alternate!==null&&b.delete(K.key===null?L:K.key),p=s(K,p,L),R===null?C=K:R.sibling=K,R=K);return t&&b.forEach(function(ie){return e(g,ie)}),Ke&&Ai(g,L),C}function E(g,p,w,y){if(typeof w=="object"&&w!==null&&w.type===vs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Gl:e:{for(var C=w.key,R=p;R!==null;){if(R.key===C){if(C=w.type,C===vs){if(R.tag===7){n(g,R.sibling),p=i(R,w.props.children),p.return=g,g=p;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&qv(C)===R.type){n(g,R.sibling),p=i(R,w.props),p.ref=Uo(g,R,w),p.return=g,g=p;break e}n(g,R);break}else e(g,R);R=R.sibling}w.type===vs?(p=ji(w.props.children,g.mode,y,w.key),p.return=g,g=p):(y=$u(w.type,w.key,w.props,null,g.mode,y),y.ref=Uo(g,p,w),y.return=g,g=y)}return o(g);case ys:e:{for(R=w.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(g,p.sibling),p=i(p,w.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Yd(w,g.mode,y),p.return=g,g=p}return o(g);case zr:return R=w._init,E(g,p,R(w._payload),y)}if(Yo(w))return m(g,p,w,y);if(Oo(w))return v(g,p,w,y);su(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,w),p.return=g,g=p):(n(g,p),p=Qd(w,g.mode,y),p.return=g,g=p),o(g)):n(g,p)}return E}var Ys=YE(!0),XE=YE(!1),ml={},rr=Si(ml),La=Si(ml),Ma=Si(ml);function Di(t){if(t===ml)throw Error(D(174));return t}function tg(t,e){switch(Me(Ma,e),Me(La,t),Me(rr,ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zf(e,t)}Be(rr),Me(rr,e)}function Xs(){Be(rr),Be(La),Be(Ma)}function JE(t){Di(Ma.current);var e=Di(rr.current),n=zf(e,t.type);e!==n&&(Me(La,t),Me(rr,n))}function ng(t){La.current===t&&(Be(rr),Be(La))}var Ge=Si(0);function gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vd=[];function rg(){for(var t=0;t<Vd.length;t++)Vd[t]._workInProgressVersionPrimary=null;Vd.length=0}var Nu=Or.ReactCurrentDispatcher,Hd=Or.ReactCurrentBatchConfig,Wi=0,Qe=null,ft=null,wt=null,yc=!1,ha=!1,$a=0,SA=0;function Nt(){throw Error(D(321))}function ig(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function sg(t,e,n,r,i,s){if(Wi=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nu.current=t===null||t.memoizedState===null?IA:xA,t=n(r,i),ha){s=0;do{if(ha=!1,$a=0,25<=s)throw Error(D(301));s+=1,wt=ft=null,e.updateQueue=null,Nu.current=AA,t=n(r,i)}while(ha)}if(Nu.current=vc,e=ft!==null&&ft.next!==null,Wi=0,wt=ft=Qe=null,yc=!1,e)throw Error(D(300));return t}function og(){var t=$a!==0;return $a=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Qe.memoizedState=wt=t:wt=wt.next=t,wt}function bn(){if(ft===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=wt===null?Qe.memoizedState:wt.next;if(e!==null)wt=e,ft=t;else{if(t===null)throw Error(D(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?Qe.memoizedState=wt=t:wt=wt.next=t}return wt}function Fa(t,e){return typeof e=="function"?e(t):e}function qd(t){var e=bn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=ft,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Qe.lanes|=c,Ki|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Bn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,Ki|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wd(t){var e=bn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ZE(){}function e_(t,e){var n=Qe,r=bn(),i=e(),s=!Bn(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,ag(r_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,n_.bind(null,n,r,i,e),void 0,null),Et===null)throw Error(D(349));Wi&30||t_(n,e,i)}return i}function t_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n_(t,e,n,r){e.value=n,e.getSnapshot=r,i_(e)&&s_(t)}function r_(t,e,n){return n(function(){i_(e)&&s_(t)})}function i_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function s_(t){var e=xr(t,1);e!==null&&Fn(e,t,1,-1)}function Wv(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=kA.bind(null,Qe,t),[e.memoizedState,t]}function Ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o_(){return bn().memoizedState}function Du(t,e,n,r){var i=Gn();Qe.flags|=t,i.memoizedState=Ua(1|e,n,void 0,r===void 0?null:r)}function uh(t,e,n,r){var i=bn();r=r===void 0?null:r;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,r!==null&&ig(r,o.deps)){i.memoizedState=Ua(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=Ua(1|e,n,s,r)}function Kv(t,e){return Du(8390656,8,t,e)}function ag(t,e){return uh(2048,8,t,e)}function a_(t,e){return uh(4,2,t,e)}function l_(t,e){return uh(4,4,t,e)}function u_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c_(t,e,n){return n=n!=null?n.concat([t]):null,uh(4,4,u_.bind(null,e,t),n)}function lg(){}function h_(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d_(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f_(t,e,n){return Wi&21?(Bn(n,e)||(n=gE(),Qe.lanes|=n,Ki|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function TA(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Hd.transition;Hd.transition={};try{t(!1),e()}finally{xe=n,Hd.transition=r}}function p_(){return bn().memoizedState}function CA(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m_(t))g_(e,n);else if(n=WE(t,e,n,r),n!==null){var i=Gt();Fn(n,t,r,i),y_(n,e,r)}}function kA(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m_(t))g_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(i.next=i,Zm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=WE(t,e,i,r),n!==null&&(i=Gt(),Fn(n,t,r,i),y_(n,e,r))}}function m_(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function g_(t,e){ha=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}var vc={readContext:Rn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},IA={readContext:Rn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Kv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Du(4194308,4,u_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Du(4194308,4,t,e)},useInsertionEffect:function(t,e){return Du(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=CA.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Wv,useDebugValue:lg,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Wv(!1),e=t[0];return t=TA.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=Gn();if(Ke){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),Et===null)throw Error(D(349));Wi&30||t_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kv(r_.bind(null,r,s,t),[t]),r.flags|=2048,Ua(9,n_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Et.identifierPrefix;if(Ke){var n=yr,r=gr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xA={readContext:Rn,useCallback:h_,useContext:Rn,useEffect:ag,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:qd,useRef:o_,useState:function(){return qd(Fa)},useDebugValue:lg,useDeferredValue:function(t){var e=bn();return f_(e,ft.memoizedState,t)},useTransition:function(){var t=qd(Fa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:ZE,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1},AA={readContext:Rn,useCallback:h_,useContext:Rn,useEffect:ag,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:Wd,useRef:o_,useState:function(){return Wd(Fa)},useDebugValue:lg,useDeferredValue:function(t){var e=bn();return ft===null?e.memoizedState=t:f_(e,ft.memoizedState,t)},useTransition:function(){var t=Wd(Fa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:ZE,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1};function Js(t,e){try{var n="",r=e;do n+=nx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RA=typeof WeakMap=="function"?WeakMap:Map;function v_(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ec||(Ec=!0,_p=r),hp(t,e)},n}function w_(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hp(t,e),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new RA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VA.bind(null,t,e,n),e.then(t,t))}function Qv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,si(n,e,1))),n.lanes|=1),t)}var bA=Or.ReactCurrentOwner,nn=!1;function Wt(t,e,n,r){e.child=t===null?XE(e,null,n,r):Ys(e,t.child,n,r)}function Xv(t,e,n,r,i){n=n.render;var s=e.ref;return Fs(e,i),r=sg(t,e,n,r,s,i),n=og(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ar(t,e,i)):(Ke&&n&&Km(e),e.flags|=1,Wt(t,e,r,i),e.child)}function Jv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E_(t,e,s,r,i)):(t=$u(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,r)&&t.ref===e.ref)return Ar(t,e,i)}return e.flags|=1,t=li(s,r),t.ref=e.ref,t.return=e,e.child=t}function E_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pa(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Ar(t,e,i)}return dp(t,e,n,r,i)}function __(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(As,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(As,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(As,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(As,un),un|=r;return Wt(t,e,i,n),e.child}function S_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dp(t,e,n,r,i){var s=on(n)?Hi:zt.current;return s=Gs(e,s),Fs(e,i),n=sg(t,e,n,r,s,i),r=og(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ar(t,e,i)):(Ke&&r&&Km(e),e.flags|=1,Wt(t,e,n,i),e.child)}function Zv(t,e,n,r,i){if(on(n)){var s=!0;cc(e)}else s=!1;if(Fs(e,i),e.stateNode===null)Ou(t,e),QE(e,n,r),cp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=on(n)?Hi:zt.current,u=Gs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hv(e,o,r,u),Vr=!1;var d=e.memoizedState;o.state=d,mc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||sn.current||Vr?(typeof c=="function"&&(up(e,n,c,r),l=e.memoizedState),(a=Vr||Vv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,KE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=on(n)?Hi:zt.current,l=Gs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Hv(e,o,r,l),Vr=!1,d=e.memoizedState,o.state=d,mc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||sn.current||Vr?(typeof f=="function"&&(up(e,n,f,r),m=e.memoizedState),(u=Vr||Vv(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return fp(t,e,n,r,s,i)}function fp(t,e,n,r,i,s){S_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fv(e,n,!1),Ar(t,e,s);r=e.stateNode,bA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=r.state,i&&Fv(e,n,!0),e.child}function T_(t){var e=t.stateNode;e.pendingContext?$v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$v(t,e.context,!1),tg(t,e.containerInfo)}function e0(t,e,n,r,i){return Qs(),Qm(i),e.flags|=256,Wt(t,e,n,r),e.child}var pp={dehydrated:null,treeContext:null,retryLane:0};function mp(t){return{baseLanes:t,cachePool:null,transitions:null}}function C_(t,e,n){var r=e.pendingProps,i=Ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(Ge,i&1),t===null)return ap(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dh(o,r,0,null),t=ji(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mp(n),e.memoizedState=pp,t):ug(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return PA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=li(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=li(a,s):(s=ji(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pp,r}return s=t.child,t=s.sibling,r=li(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ug(t,e){return e=dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ou(t,e,n,r){return r!==null&&Qm(r),Ys(e,t.child,null,n),t=ug(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kd(Error(D(422))),ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dh({mode:"visible",children:r.children},i,0,null),s=ji(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ys(e,t.child,null,o),e.child.memoizedState=mp(o),e.memoizedState=pp,s);if(!(e.mode&1))return ou(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Kd(s,r,void 0),ou(t,e,o,r)}if(a=(o&t.childLanes)!==0,nn||a){if(r=Et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xr(t,i),Fn(r,t,i,-1))}return mg(),r=Kd(Error(D(421))),ou(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=ii(i.nextSibling),dn=e,Ke=!0,Ln=null,t!==null&&(Tn[Cn++]=gr,Tn[Cn++]=yr,Tn[Cn++]=qi,gr=t.id,yr=t.overflow,qi=e),e=ug(e,r.children),e.flags|=4096,e)}function t0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lp(t.return,e,n)}function Gd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function k_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Wt(t,e,r.children,n),r=Ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,n,e);else if(t.tag===19)t0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(Ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&gc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&gc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gd(e,!0,n,null,s);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ou(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ki|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NA(t,e,n){switch(e.tag){case 3:T_(e),Qs();break;case 5:JE(e);break;case 1:on(e.type)&&cc(e);break;case 4:tg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(fc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ge,Ge.current&1),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(Me(Ge,Ge.current&1),t=Ar(t,e,n),t!==null?t.sibling:null);Me(Ge,Ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return k_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ge,Ge.current),r)break;return null;case 22:case 23:return e.lanes=0,__(t,e,n)}return Ar(t,e,n)}var I_,gp,x_,A_;I_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gp=function(){};x_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Di(rr.current);var s=null;switch(n){case"input":i=Ff(t,i),r=Ff(t,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=Bf(t,i),r=Bf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lc)}Vf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};A_=function(t,e,n,r){n!==r&&(e.flags|=4)};function jo(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DA(t,e,n){var r=e.pendingProps;switch(Gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return on(e.type)&&uc(),Dt(e),null;case 3:return r=e.stateNode,Xs(),Be(sn),Be(zt),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Cp(Ln),Ln=null))),gp(t,e),Dt(e),null;case 5:ng(e);var i=Di(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)x_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Dt(e),null}if(t=Di(rr.current),iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qn]=e,r[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<Jo.length;i++)Fe(Jo[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":cv(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":dv(r,s),Fe("invalid",r)}Vf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Ql(r),hv(r,s,!0);break;case"textarea":Ql(r),fv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Oa]=r,I_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hf(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Jo.length;i++)Fe(Jo[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":cv(t,r),i=Ff(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":dv(t,r),i=Bf(t,r),Fe("invalid",t);break;default:i=r}Vf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Fe("scroll",t):l!=null&&Dm(t,s,l,o))}switch(n){case"input":Ql(t),hv(t,r,!1);break;case"textarea":Ql(t),fv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Os(t,!!r.multiple,s,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)A_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=Di(Ma.current),Di(rr.current),iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(s=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ru(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return Dt(e),null;case 13:if(Be(Ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&cn!==null&&e.mode&1&&!(e.flags&128))qE(),Qs(),e.flags|=98560,s=!1;else if(s=iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Qn]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Ln!==null&&(Cp(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ge.current&1?pt===0&&(pt=3):mg())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return Xs(),gp(t,e),t===null&&Na(e.stateNode.containerInfo),Dt(e),null;case 10:return Jm(e.type._context),Dt(e),null;case 17:return on(e.type)&&uc(),Dt(e),null;case 19:if(Be(Ge),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)jo(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gc(t),o!==null){for(e.flags|=128,jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(Ge,Ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>Zs&&(e.flags|=128,r=!0,jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=gc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ke)return Dt(e),null}else 2*nt()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,r=!0,jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=Ge.current,Me(Ge,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return pg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function OA(t,e){switch(Gm(e),e.tag){case 1:return on(e.type)&&uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),Be(sn),Be(zt),rg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ng(e),null;case 13:if(Be(Ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Ge),null;case 4:return Xs(),null;case 10:return Jm(e.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var au=!1,Mt=!1,LA=typeof WeakSet=="function"?WeakSet:Set,B=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(t,e,r)}else n.current=null}function yp(t,e,n){try{n()}catch(r){Je(t,e,r)}}var n0=!1;function MA(t,e){if(ep=sc,t=NE(),Wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tp={focusedElem:t,selectionRange:n},sc=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,E=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Nn(e.type,v),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(y){Je(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return m=n0,n0=!1,m}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yp(e,n,s)}i=i.next}while(i!==r)}}function ch(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R_(t){var e=t.alternate;e!==null&&(t.alternate=null,R_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Oa],delete e[ip],delete e[vA],delete e[wA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b_(t){return t.tag===5||t.tag===3||t.tag===4}function r0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lc));else if(r!==4&&(t=t.child,t!==null))for(wp(t,e,n),t=t.sibling;t!==null;)wp(t,e,n),t=t.sibling}function Ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}var kt=null,Dn=!1;function Ur(t,e,n){for(n=n.child;n!==null;)P_(t,e,n),n=n.sibling}function P_(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(nh,n)}catch{}switch(n.tag){case 5:Mt||xs(n,e);case 6:var r=kt,i=Dn;kt=null,Ur(t,e,n),kt=r,Dn=i,kt!==null&&(Dn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Dn?(t=kt,n=n.stateNode,t.nodeType===8?Bd(t.parentNode,n):t.nodeType===1&&Bd(t,n),Ra(t)):Bd(kt,n.stateNode));break;case 4:r=kt,i=Dn,kt=n.stateNode.containerInfo,Dn=!0,Ur(t,e,n),kt=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,e,o),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!Mt&&(xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Je(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Mt=(r=Mt)||n.memoizedState!==null,Ur(t,e,n),Mt=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function i0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LA),e.forEach(function(r){var i=qA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Dn=!1;break e;case 3:kt=a.stateNode.containerInfo,Dn=!0;break e;case 4:kt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(kt===null)throw Error(D(160));P_(s,o,i),kt=null,Dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N_(e,t),e=e.sibling}function N_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Kn(t),r&4){try{da(3,t,t.return),ch(3,t)}catch(v){Je(t,t.return,v)}try{da(5,t,t.return)}catch(v){Je(t,t.return,v)}}break;case 1:Pn(e,t),Kn(t),r&512&&n!==null&&xs(n,n.return);break;case 5:if(Pn(e,t),Kn(t),r&512&&n!==null&&xs(n,n.return),t.flags&32){var i=t.stateNode;try{ka(i,"")}catch(v){Je(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z1(i,s),Hf(a,o);var u=Hf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?iE(i,h):c==="dangerouslySetInnerHTML"?nE(i,h):c==="children"?ka(i,h):Dm(i,c,h,u)}switch(a){case"input":Uf(i,s);break;case"textarea":eE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Os(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Os(i,!!s.multiple,s.defaultValue,!0):Os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oa]=s}catch(v){Je(t,t.return,v)}}break;case 6:if(Pn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Je(t,t.return,v)}}break;case 3:if(Pn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(v){Je(t,t.return,v)}break;case 4:Pn(e,t),Kn(t);break;case 13:Pn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=nt())),r&4&&i0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Mt=(u=Mt)||c,Pn(e,t),Mt=u):Pn(e,t),Kn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(h=B=c;B!==null;){switch(d=B,f=d.child,d.tag){case 0:case 11:case 14:case 15:da(4,d,d.return);break;case 1:xs(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Je(r,n,v)}}break;case 5:xs(d,d.return);break;case 22:if(d.memoizedState!==null){o0(h);continue}}f!==null?(f.return=d,B=f):o0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rE("display",o))}catch(v){Je(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Je(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,t),Kn(t),r&4&&i0(t);break;case 21:break;default:Pn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b_(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ka(i,""),r.flags&=-33);var s=r0(t);Ep(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=r0(t);wp(t,a,o);break;default:throw Error(D(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $A(t,e,n){B=t,D_(t)}function D_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||au;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Mt;a=au;var u=Mt;if(au=o,(Mt=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?a0(i):l!==null?(l.return=o,B=l):a0(i);for(;s!==null;)B=s,D_(s),s=s.sibling;B=i,au=a,Mt=u}s0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):s0(t)}}function s0(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mt||ch(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ra(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Mt||e.flags&512&&vp(e)}catch(d){Je(e,e.return,d)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function o0(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function a0(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ch(4,e)}catch(l){Je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Je(e,i,l)}}var s=e.return;try{vp(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{vp(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var FA=Math.ceil,wc=Or.ReactCurrentDispatcher,cg=Or.ReactCurrentOwner,xn=Or.ReactCurrentBatchConfig,we=0,Et=null,at=null,At=0,un=0,As=Si(0),pt=0,ja=null,Ki=0,hh=0,hg=0,fa=null,en=null,dg=0,Zs=1/0,pr=null,Ec=!1,_p=null,oi=null,lu=!1,Zr=null,_c=0,pa=0,Sp=null,Lu=-1,Mu=0;function Gt(){return we&6?nt():Lu!==-1?Lu:Lu=nt()}function ai(t){return t.mode&1?we&2&&At!==0?At&-At:_A.transition!==null?(Mu===0&&(Mu=gE()),Mu):(t=xe,t!==0||(t=window.event,t=t===void 0?16:TE(t.type)),t):1}function Fn(t,e,n,r){if(50<pa)throw pa=0,Sp=null,Error(D(185));dl(t,n,r),(!(we&2)||t!==Et)&&(t===Et&&(!(we&2)&&(hh|=n),pt===4&&Wr(t,At)),an(t,r),n===1&&we===0&&!(e.mode&1)&&(Zs=nt()+500,ah&&Ti()))}function an(t,e){var n=t.callbackNode;_x(t,e);var r=ic(t,t===Et?At:0);if(r===0)n!==null&&gv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gv(n),e===1)t.tag===0?EA(l0.bind(null,t)):zE(l0.bind(null,t)),gA(function(){!(we&6)&&Ti()}),n=null;else{switch(yE(r)){case 1:n=Fm;break;case 4:n=pE;break;case 16:n=rc;break;case 536870912:n=mE;break;default:n=rc}n=B_(n,O_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O_(t,e){if(Lu=-1,Mu=0,we&6)throw Error(D(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=ic(t,t===Et?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sc(t,r);else{e=r;var i=we;we|=2;var s=M_();(Et!==t||At!==e)&&(pr=null,Zs=nt()+500,Ui(t,e));do try{BA();break}catch(a){L_(t,a)}while(1);Xm(),wc.current=s,we=i,at!==null?e=0:(Et=null,At=0,e=pt)}if(e!==0){if(e===2&&(i=Qf(t),i!==0&&(r=i,e=Tp(t,i))),e===1)throw n=ja,Ui(t,0),Wr(t,r),an(t,nt()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!UA(i)&&(e=Sc(t,r),e===2&&(s=Qf(t),s!==0&&(r=s,e=Tp(t,s))),e===1))throw n=ja,Ui(t,0),Wr(t,r),an(t,nt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:Ri(t,en,pr);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=dg+500-nt(),10<e)){if(ic(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rp(Ri.bind(null,t,en,pr),e);break}Ri(t,en,pr);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FA(r/1960))-r,10<r){t.timeoutHandle=rp(Ri.bind(null,t,en,pr),r);break}Ri(t,en,pr);break;case 5:Ri(t,en,pr);break;default:throw Error(D(329))}}}return an(t,nt()),t.callbackNode===n?O_.bind(null,t):null}function Tp(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Ui(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=en,en=n,e!==null&&Cp(e)),t}function Cp(t){en===null?en=t:en.push.apply(en,t)}function UA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~hg,e&=~hh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function l0(t){if(we&6)throw Error(D(327));Us();var e=ic(t,0);if(!(e&1))return an(t,nt()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var r=Qf(t);r!==0&&(e=r,n=Tp(t,r))}if(n===1)throw n=ja,Ui(t,0),Wr(t,e),an(t,nt()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ri(t,en,pr),an(t,nt()),null}function fg(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(Zs=nt()+500,ah&&Ti())}}function Gi(t){Zr!==null&&Zr.tag===0&&!(we&6)&&Us();var e=we;we|=1;var n=xn.transition,r=xe;try{if(xn.transition=null,xe=1,t)return t()}finally{xe=r,xn.transition=n,we=e,!(we&6)&&Ti()}}function pg(){un=As.current,Be(As)}function Ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mA(n)),at!==null)for(n=at.return;n!==null;){var r=n;switch(Gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uc();break;case 3:Xs(),Be(sn),Be(zt),rg();break;case 5:ng(r);break;case 4:Xs();break;case 13:Be(Ge);break;case 19:Be(Ge);break;case 10:Jm(r.type._context);break;case 22:case 23:pg()}n=n.return}if(Et=t,at=t=li(t.current,null),At=un=e,pt=0,ja=null,hg=hh=Ki=0,en=fa=null,Ni!==null){for(e=0;e<Ni.length;e++)if(n=Ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ni=null}return t}function L_(t,e){do{var n=at;try{if(Xm(),Nu.current=vc,yc){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yc=!1}if(Wi=0,wt=ft=Qe=null,ha=!1,$a=0,cg.current=null,n===null||n.return===null){pt=1,ja=e,at=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Qv(o);if(f!==null){f.flags&=-257,Yv(f,o,a,s,e),f.mode&1&&Gv(s,u,e),e=f,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){Gv(s,u,e),mg();break e}l=Error(D(426))}}else if(Ke&&a.mode&1){var E=Qv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Yv(E,o,a,s,e),Qm(Js(l,a));break e}}s=l=Js(l,a),pt!==4&&(pt=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=v_(s,l,e);Bv(s,g);break e;case 1:a=l;var p=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(oi===null||!oi.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=w_(s,a,e);Bv(s,y);break e}}s=s.return}while(s!==null)}F_(n)}catch(C){e=C,at===n&&n!==null&&(at=n=n.return);continue}break}while(1)}function M_(){var t=wc.current;return wc.current=vc,t===null?vc:t}function mg(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||!(Ki&268435455)&&!(hh&268435455)||Wr(Et,At)}function Sc(t,e){var n=we;we|=2;var r=M_();(Et!==t||At!==e)&&(pr=null,Ui(t,e));do try{jA();break}catch(i){L_(t,i)}while(1);if(Xm(),we=n,wc.current=r,at!==null)throw Error(D(261));return Et=null,At=0,pt}function jA(){for(;at!==null;)$_(at)}function BA(){for(;at!==null&&!dx();)$_(at)}function $_(t){var e=j_(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?F_(t):at=e,cg.current=null}function F_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OA(n,e),n!==null){n.flags&=32767,at=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,at=null;return}}else if(n=DA(n,e,un),n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);pt===0&&(pt=5)}function Ri(t,e,n){var r=xe,i=xn.transition;try{xn.transition=null,xe=1,zA(t,e,n,r)}finally{xn.transition=i,xe=r}return null}function zA(t,e,n,r){do Us();while(Zr!==null);if(we&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sx(t,s),t===Et&&(at=Et=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lu||(lu=!0,B_(rc,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=xe;xe=1;var a=we;we|=4,cg.current=null,MA(t,n),N_(n,t),lA(tp),sc=!!ep,tp=ep=null,t.current=n,$A(n),fx(),we=a,xe=o,xn.transition=s}else t.current=n;if(lu&&(lu=!1,Zr=t,_c=i),s=t.pendingLanes,s===0&&(oi=null),gx(n.stateNode),an(t,nt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ec)throw Ec=!1,t=_p,_p=null,t;return _c&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Sp?pa++:(pa=0,Sp=t):pa=0,Ti(),null}function Us(){if(Zr!==null){var t=yE(_c),e=xn.transition,n=xe;try{if(xn.transition=null,xe=16>t?16:t,Zr===null)var r=!1;else{if(t=Zr,Zr=null,_c=0,we&6)throw Error(D(331));var i=we;for(we|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:da(8,c,s)}var h=c.child;if(h!==null)h.return=c,B=h;else for(;B!==null;){c=B;var d=c.sibling,f=c.return;if(R_(c),c===u){B=null;break}if(d!==null){d.return=f,B=d;break}B=f}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,B=g;break e}B=s.return}}var p=t.current;for(B=p;B!==null;){o=B;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,B=w;else e:for(o=p;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ch(9,a)}}catch(C){Je(a,a.return,C)}if(a===o){B=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,B=y;break e}B=a.return}}if(we=i,Ti(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(nh,t)}catch{}r=!0}return r}finally{xe=n,xn.transition=e}}return!1}function u0(t,e,n){e=Js(n,e),e=v_(t,e,1),t=si(t,e,1),e=Gt(),t!==null&&(dl(t,1,e),an(t,e))}function Je(t,e,n){if(t.tag===3)u0(t,t,n);else for(;e!==null;){if(e.tag===3){u0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){t=Js(n,t),t=w_(e,t,1),e=si(e,t,1),t=Gt(),e!==null&&(dl(e,1,t),an(e,t));break}}e=e.return}}function VA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(At&n)===n&&(pt===4||pt===3&&(At&130023424)===At&&500>nt()-dg?Ui(t,0):hg|=n),an(t,e)}function U_(t,e){e===0&&(t.mode&1?(e=Jl,Jl<<=1,!(Jl&130023424)&&(Jl=4194304)):e=1);var n=Gt();t=xr(t,e),t!==null&&(dl(t,e,n),an(t,n))}function HA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U_(t,n)}function qA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),U_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,NA(t,e,n);nn=!!(t.flags&131072)}else nn=!1,Ke&&e.flags&1048576&&VE(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ou(t,e),t=e.pendingProps;var i=Gs(e,zt.current);Fs(e,n),i=sg(null,e,r,t,i,n);var s=og();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,cc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(e),i.updater=lh,e.stateNode=i,i._reactInternals=e,cp(e,r,t,n),e=fp(null,e,r,!0,s,n)):(e.tag=0,Ke&&s&&Km(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ou(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KA(r),t=Nn(r,t),i){case 0:e=dp(null,e,r,t,n);break e;case 1:e=Zv(null,e,r,t,n);break e;case 11:e=Xv(null,e,r,t,n);break e;case 14:e=Jv(null,e,r,Nn(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),dp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Zv(t,e,r,i,n);case 3:e:{if(T_(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,KE(t,e),mc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Js(Error(D(423)),e),e=e0(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(D(424)),e),e=e0(t,e,r,n,i);break e}else for(cn=ii(e.stateNode.containerInfo.firstChild),dn=e,Ke=!0,Ln=null,n=XE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=Ar(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return JE(e),t===null&&ap(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,np(r,i)?o=null:s!==null&&np(r,s)&&(e.flags|=32),S_(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&ap(e),null;case 13:return C_(t,e,n);case 4:return tg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ys(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Xv(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(fc,r._currentValue),r._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===i.children&&!sn.current){e=Ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=Rn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),Jv(t,e,r,i,n);case 15:return E_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Ou(t,e),e.tag=1,on(r)?(t=!0,cc(e)):t=!1,Fs(e,n),QE(e,r,i),cp(e,r,i,n),fp(null,e,r,!0,t,n);case 19:return k_(t,e,n);case 22:return __(t,e,n)}throw Error(D(156,e.tag))};function B_(t,e){return fE(t,e)}function WA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new WA(t,e,n,r)}function gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KA(t){if(typeof t=="function")return gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lm)return 11;if(t===Mm)return 14}return 2}function li(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $u(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return ji(n.children,i,s,e);case Om:o=8,i|=8;break;case Of:return t=In(12,n,e,i|2),t.elementType=Of,t.lanes=s,t;case Lf:return t=In(13,n,e,i),t.elementType=Lf,t.lanes=s,t;case Mf:return t=In(19,n,e,i),t.elementType=Mf,t.lanes=s,t;case Y1:return dh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G1:o=10;break e;case Q1:o=9;break e;case Lm:o=11;break e;case Mm:o=14;break e;case zr:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ji(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function dh(t,e,n,r){return t=In(22,t,r,e),t.elementType=Y1,t.lanes=n,t.stateNode={isHidden:!1},t}function Qd(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Yd(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yg(t,e,n,r,i,s,o,a,l){return t=new GA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),t}function QA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function z_(t){if(!t)return gi;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(on(n))return BE(t,n,e)}return e}function V_(t,e,n,r,i,s,o,a,l){return t=yg(n,r,!0,t,i,s,o,a,l),t.context=z_(null),n=t.current,r=Gt(),i=ai(n),s=Sr(r,i),s.callback=e??null,si(n,s,i),t.current.lanes=i,dl(t,i,r),an(t,r),t}function fh(t,e,n,r){var i=e.current,s=Gt(),o=ai(i);return n=z_(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=si(i,e,o),t!==null&&(Fn(t,i,o,s),Pu(t,i,o)),o}function Tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function c0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vg(t,e){c0(t,e),(t=t.alternate)&&c0(t,e)}function YA(){return null}var H_=typeof reportError=="function"?reportError:function(t){console.error(t)};function wg(t){this._internalRoot=t}ph.prototype.render=wg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));fh(t,e,null,null)};ph.prototype.unmount=wg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gi(function(){fh(null,t,null,null)}),e[Ir]=null}};function ph(t){this._internalRoot=t}ph.prototype.unstable_scheduleHydration=function(t){if(t){var e=EE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&SE(t)}};function Eg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function h0(){}function XA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Tc(o);s.call(u)}}var o=V_(e,r,t,0,null,!1,!1,"",h0);return t._reactRootContainer=o,t[Ir]=o.current,Na(t.nodeType===8?t.parentNode:t),Gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Tc(l);a.call(u)}}var l=yg(t,0,!1,null,null,!1,!1,"",h0);return t._reactRootContainer=l,t[Ir]=l.current,Na(t.nodeType===8?t.parentNode:t),Gi(function(){fh(e,l,n,r)}),l}function gh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Tc(o);a.call(l)}}fh(e,o,t,i)}else o=XA(n,e,t,i,r);return Tc(o)}vE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(Um(e,n|1),an(e,nt()),!(we&6)&&(Zs=nt()+500,Ti()))}break;case 13:Gi(function(){var r=xr(t,1);if(r!==null){var i=Gt();Fn(r,t,1,i)}}),vg(t,1)}};jm=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Gt();Fn(e,t,134217728,n)}vg(t,134217728)}};wE=function(t){if(t.tag===13){var e=ai(t),n=xr(t,e);if(n!==null){var r=Gt();Fn(n,t,e,r)}vg(t,e)}};EE=function(){return xe};_E=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};Wf=function(t,e,n){switch(e){case"input":if(Uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oh(r);if(!i)throw Error(D(90));J1(r),Uf(r,i)}}}break;case"textarea":eE(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};aE=fg;lE=Gi;var JA={usingClientEntryPoint:!1,Events:[pl,Ss,oh,sE,oE,fg]},Bo={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZA={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hE(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||YA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{nh=uu.inject(ZA),nr=uu}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JA;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eg(e))throw Error(D(200));return QA(t,e,null,n)};yn.createRoot=function(t,e){if(!Eg(t))throw Error(D(299));var n=!1,r="",i=H_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yg(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,Na(t.nodeType===8?t.parentNode:t),new wg(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=hE(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Gi(t)};yn.hydrate=function(t,e,n){if(!mh(e))throw Error(D(200));return gh(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Eg(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V_(e,null,t,1,n??null,i,!1,s,o),t[Ir]=e.current,Na(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ph(e)};yn.render=function(t,e,n){if(!mh(e))throw Error(D(200));return gh(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!mh(t))throw Error(D(40));return t._reactRootContainer?(Gi(function(){gh(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};yn.unstable_batchedUpdates=fg;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mh(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return gh(t,e,n,!1,r)};yn.version="18.2.0-next-9e3b772b8-20220608";function q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q_)}catch(t){console.error(t)}}q_(),V1.exports=yn;var W_=V1.exports;const eR=Im(W_);var d0=W_;Nf.createRoot=d0.createRoot,Nf.hydrateRoot=d0.hydrateRoot;/**
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
 */const K_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new nR;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rR=function(t){const e=K_(t);return G_.encodeByteArray(e,!0)},Cc=function(t){return rR(t).replace(/\./g,"")},Q_=function(t){try{return G_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sR=()=>iR().__FIREBASE_DEFAULTS__,oR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q_(t[1]);return e&&JSON.parse(e)},yh=()=>{try{return sR()||oR()||aR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y_=t=>{var e,n;return(n=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},X_=t=>{const e=Y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J_=()=>{var t;return(t=yh())===null||t===void 0?void 0:t.config},Z_=t=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cc(JSON.stringify(n)),Cc(JSON.stringify(o)),a].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function cR(){var t;const e=(t=yh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fR(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pR(){try{return typeof indexedDB=="object"}catch{return!1}}function mR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const gR="FirebaseError";class ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gR,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gl.prototype.create)}}class gl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ur(i,a,r)}}function yR(t,e){return t.replace(vR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vR=/\{\$([^}]+)}/g;function wR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(f0(s)&&f0(o)){if(!kc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function f0(t){return t!==null&&typeof t=="object"}/**
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
 */function yl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ER(t,e){const n=new _R(t,e);return n.subscribe.bind(n)}class _R{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xd),i.error===void 0&&(i.error=Xd),i.complete===void 0&&(i.complete=Xd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class yi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bi="[DEFAULT]";/**
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
 */class TR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kR(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CR(t){return t===bi?void 0:t}function kR(t){return t.instantiationMode==="EAGER"}/**
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
 */class IR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const xR={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},AR=Se.INFO,RR={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},bR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _g{constructor(e){this.name=e,this._logLevel=AR,this._logHandler=bR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const PR=(t,e)=>e.some(n=>t instanceof n);let p0,m0;function NR(){return p0||(p0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DR(){return m0||(m0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tS=new WeakMap,kp=new WeakMap,nS=new WeakMap,Jd=new WeakMap,Sg=new WeakMap;function OR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tS.set(n,t)}).catch(()=>{}),Sg.set(e,t),e}function LR(t){if(kp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kp.set(t,e)}let Ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MR(t){Ip=t(Ip)}function $R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zd(this),e,...n);return nS.set(r,e.sort?e.sort():[e]),ui(r)}:DR().includes(t)?function(...e){return t.apply(Zd(this),e),ui(tS.get(this))}:function(...e){return ui(t.apply(Zd(this),e))}}function FR(t){return typeof t=="function"?$R(t):(t instanceof IDBTransaction&&LR(t),PR(t,NR())?new Proxy(t,Ip):t)}function ui(t){if(t instanceof IDBRequest)return OR(t);if(Jd.has(t))return Jd.get(t);const e=FR(t);return e!==t&&(Jd.set(t,e),Sg.set(e,t)),e}const Zd=t=>Sg.get(t);function UR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ui(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ui(o.result),l.oldVersion,l.newVersion,ui(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jR=["get","getKey","getAll","getAllKeys","count"],BR=["put","add","delete","clear"],ef=new Map;function g0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ef.set(e,s),s}MR(t=>({...t,get:(e,n,r)=>g0(e,n)||t.get(e,n,r),has:(e,n)=>!!g0(e,n)||t.has(e,n)}));/**
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
 */class zR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",y0="0.9.13";/**
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
 */const Qi=new _g("@firebase/app"),HR="@firebase/app-compat",qR="@firebase/analytics-compat",WR="@firebase/analytics",KR="@firebase/app-check-compat",GR="@firebase/app-check",QR="@firebase/auth",YR="@firebase/auth-compat",XR="@firebase/database",JR="@firebase/database-compat",ZR="@firebase/functions",eb="@firebase/functions-compat",tb="@firebase/installations",nb="@firebase/installations-compat",rb="@firebase/messaging",ib="@firebase/messaging-compat",sb="@firebase/performance",ob="@firebase/performance-compat",ab="@firebase/remote-config",lb="@firebase/remote-config-compat",ub="@firebase/storage",cb="@firebase/storage-compat",hb="@firebase/firestore",db="@firebase/firestore-compat",fb="firebase",pb="9.23.0";/**
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
 */const Ap="[DEFAULT]",mb={[xp]:"fire-core",[HR]:"fire-core-compat",[WR]:"fire-analytics",[qR]:"fire-analytics-compat",[GR]:"fire-app-check",[KR]:"fire-app-check-compat",[QR]:"fire-auth",[YR]:"fire-auth-compat",[XR]:"fire-rtdb",[JR]:"fire-rtdb-compat",[ZR]:"fire-fn",[eb]:"fire-fn-compat",[tb]:"fire-iid",[nb]:"fire-iid-compat",[rb]:"fire-fcm",[ib]:"fire-fcm-compat",[sb]:"fire-perf",[ob]:"fire-perf-compat",[ab]:"fire-rc",[lb]:"fire-rc-compat",[ub]:"fire-gcs",[cb]:"fire-gcs-compat",[hb]:"fire-fst",[db]:"fire-fst-compat","fire-js":"fire-js",[fb]:"fire-js-all"};/**
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
 */const Ic=new Map,Rp=new Map;function gb(t,e){try{t.container.addComponent(e)}catch(n){Qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yi(t){const e=t.name;if(Rp.has(e))return Qi.debug(`There were multiple attempts to register component ${e}.`),!1;Rp.set(e,t);for(const n of Ic.values())gb(n,t);return!0}function vh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ci=new gl("app","Firebase",yb);/**
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
 */class vb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
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
 */const as=pb;function rS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ap,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ci.create("bad-app-name",{appName:String(i)});if(n||(n=J_()),!n)throw ci.create("no-options");const s=Ic.get(i);if(s){if(kc(n,s.options)&&kc(r,s.config))return s;throw ci.create("duplicate-app",{appName:i})}const o=new IR(i);for(const l of Rp.values())o.addComponent(l);const a=new vb(n,r,o);return Ic.set(i,a),a}function Tg(t=Ap){const e=Ic.get(t);if(!e&&t===Ap&&J_())return rS();if(!e)throw ci.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let i=(r=mb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qi.warn(a.join(" "));return}Yi(new yi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wb="firebase-heartbeat-database",Eb=1,Ba="firebase-heartbeat-store";let tf=null;function iS(){return tf||(tf=UR(wb,Eb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ba)}}}).catch(t=>{throw ci.create("idb-open",{originalErrorMessage:t.message})})),tf}async function _b(t){try{return await(await iS()).transaction(Ba).objectStore(Ba).get(sS(t))}catch(e){if(e instanceof ur)Qi.warn(e.message);else{const n=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qi.warn(n.message)}}}async function v0(t,e){try{const r=(await iS()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(e,sS(t)),await r.done}catch(n){if(n instanceof ur)Qi.warn(n.message);else{const r=ci.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qi.warn(r.message)}}}function sS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sb=1024,Tb=30*24*60*60*1e3;class Cb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ib(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=w0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Tb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=w0(),{heartbeatsToSend:n,unsentEntries:r}=kb(this._heartbeatsCache.heartbeats),i=Cc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function w0(){return new Date().toISOString().substring(0,10)}function kb(t,e=Sb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),E0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),E0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ib{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pR()?mR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _b(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function E0(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xb(t){Yi(new yi("platform-logger",e=>new zR(e),"PRIVATE")),Yi(new yi("heartbeat",e=>new Cb(e),"PRIVATE")),ir(xp,y0,t),ir(xp,y0,"esm2017"),ir("fire-js","")}xb("");var Ab=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Cg=Cg||{},re=Ab||self;function wh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Rb(t){return Object.prototype.hasOwnProperty.call(t,nf)&&t[nf]||(t[nf]=++bb)}var nf="closure_uid_"+(1e9*Math.random()>>>0),bb=0;function Pb(t,e,n){return t.call.apply(t.bind,arguments)}function Nb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=Pb:Ut=Nb,Ut.apply(null,arguments)}function cu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function St(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ci(){this.s=this.s,this.o=this.o}var Db=0;Ci.prototype.s=!1;Ci.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Db!=0)&&Rb(this)};Ci.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function jt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}jt.prototype.h=function(){this.defaultPrevented=!0};var Ob=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",()=>{},e),re.removeEventListener("test",()=>{},e)}catch{}return t}();function za(t){return/^[\s\xa0]*$/.test(t)}function Eh(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function Yn(t){return Eh().indexOf(t)!=-1}function Ig(t){return Ig[" "](t),t}Ig[" "]=function(){};function Lb(t,e){var n=xP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Mb=Yn("Opera"),eo=Yn("Trident")||Yn("MSIE"),aS=Yn("Edge"),bp=aS||eo,lS=Yn("Gecko")&&!(Eh().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge"))&&!(Yn("Trident")||Yn("MSIE"))&&!Yn("Edge"),$b=Eh().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge");function uS(){var t=re.document;return t?t.documentMode:void 0}var Pp;e:{var rf="",sf=function(){var t=Eh();if(lS)return/rv:([^\);]+)(\)|;)/.exec(t);if(aS)return/Edge\/([\d\.]+)/.exec(t);if(eo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($b)return/WebKit\/(\S+)/.exec(t);if(Mb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sf&&(rf=sf?sf[1]:""),eo){var of=uS();if(of!=null&&of>parseFloat(rf)){Pp=String(of);break e}}Pp=rf}var Np;if(re.document&&eo){var S0=uS();Np=S0||parseInt(Pp,10)||void 0}else Np=void 0;var Fb=Np;function Va(t,e){if(jt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lS){e:{try{Ig(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ub[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Va.$.h.call(this)}}St(Va,jt);var Ub={2:"touch",3:"pen",4:"mouse"};Va.prototype.h=function(){Va.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wl="closure_listenable_"+(1e6*Math.random()|0),jb=0;function Bb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++jb,this.fa=this.ia=!1}function _h(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function xg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function zb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function cS(t){const e={};for(const n in t)e[n]=t[n];return e}const T0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<T0.length;s++)n=T0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Sh(t){this.src=t,this.g={},this.h=0}Sh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Op(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Bb(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Dp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=oS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_h(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Op(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ag="closure_lm_"+(1e6*Math.random()|0),af={};function dS(t,e,n,r,i){if(r&&r.once)return pS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dS(t,e[s],n,r,i);return null}return n=Pg(n),t&&t[wl]?t.O(e,n,vl(r)?!!r.capture:!!r,i):fS(t,e,n,!1,r,i)}function fS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=vl(i)?!!i.capture:!!i,a=bg(t);if(a||(t[Ag]=a=new Sh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Vb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ob||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Vb(){function t(n){return e.call(t.src,t.listener,n)}const e=Hb;return t}function pS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pS(t,e[s],n,r,i);return null}return n=Pg(n),t&&t[wl]?t.P(e,n,vl(r)?!!r.capture:!!r,i):fS(t,e,n,!0,r,i)}function mS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mS(t,e[s],n,r,i);else r=vl(r)?!!r.capture:!!r,n=Pg(n),t&&t[wl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Op(s,n,r,i),-1<n&&(_h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Op(e,n,r,i)),(n=-1<t?e[t]:null)&&Rg(n))}function Rg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[wl])Dp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bg(e))?(Dp(n,t),n.h==0&&(n.src=null,e[Ag]=null)):_h(t)}}}function gS(t){return t in af?af[t]:af[t]="on"+t}function Hb(t,e){if(t.fa)t=!0;else{e=new Va(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Rg(t),t=n.call(r,e)}return t}function bg(t){return t=t[Ag],t instanceof Sh?t:null}var lf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pg(t){return typeof t=="function"?t:(t[lf]||(t[lf]=function(e){return t.handleEvent(e)}),t[lf])}function _t(){Ci.call(this),this.i=new Sh(this),this.S=this,this.J=null}St(_t,Ci);_t.prototype[wl]=!0;_t.prototype.removeEventListener=function(t,e,n,r){mS(this,t,e,n,r)};function Rt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new jt(e,t);else if(e instanceof jt)e.target=e.target||t;else{var i=e;e=new jt(r,t),hS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=hu(o,r,!0,e)&&i}if(o=e.g=t,i=hu(o,r,!0,e)&&i,i=hu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=hu(o,r,!1,e)&&i}_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_h(n[r]);delete t.g[e],t.h--}}this.J=null};_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function hu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Dp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ng=re.JSON.stringify;class qb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Wb(){var t=Dg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Kb{constructor(){this.h=this.g=null}add(e,n){const r=yS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yS=new qb(()=>new Gb,t=>t.reset());class Gb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Qb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Yb(t){re.setTimeout(()=>{throw t},0)}let Ha,qa=!1,Dg=new Kb,vS=()=>{const t=re.Promise.resolve(void 0);Ha=()=>{t.then(Xb)}};var Xb=()=>{for(var t;t=Wb();){try{t.h.call(t.g)}catch(n){Yb(n)}var e=yS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qa=!1};function Th(t,e){_t.call(this),this.h=t||1,this.g=e||re,this.j=Ut(this.qb,this),this.l=Date.now()}St(Th,_t);U=Th.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Rt(this,"tick"),this.ga&&(Og(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Og(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Th.$.N.call(this),Og(this),delete this.g};function Lg(t,e,n){if(typeof t=="function")n&&(t=Ut(t,n));else if(t&&typeof t.handleEvent=="function")t=Ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function wS(t){t.g=Lg(()=>{t.g=null,t.i&&(t.i=!1,wS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Jb extends Ci{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wS(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wa(t){Ci.call(this),this.h=t,this.g={}}St(Wa,Ci);var C0=[];function ES(t,e,n,r){Array.isArray(n)||(n&&(C0[0]=n.toString()),n=C0);for(var i=0;i<n.length;i++){var s=dS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function _S(t){xg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rg(e)},t),t.g={}}Wa.prototype.N=function(){Wa.$.N.call(this),_S(this)};Wa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ch(){this.g=!0}Ch.prototype.Ea=function(){this.g=!1};function Zb(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Rs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nP(t,n)+(r?" "+r:"")})}function tP(t,e){t.info(function(){return"TIMEOUT: "+e})}Ch.prototype.info=function(){};function nP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ng(n)}catch{return e}}var ls={},k0=null;function kh(){return k0=k0||new _t}ls.Ta="serverreachability";function SS(t){jt.call(this,ls.Ta,t)}St(SS,jt);function Ka(t){const e=kh();Rt(e,new SS(e))}ls.STAT_EVENT="statevent";function TS(t,e){jt.call(this,ls.STAT_EVENT,t),this.stat=e}St(TS,jt);function Kt(t){const e=kh();Rt(e,new TS(e,t))}ls.Ua="timingevent";function CS(t,e){jt.call(this,ls.Ua,t),this.size=e}St(CS,jt);function El(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Ih={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mg(){}Mg.prototype.h=null;function I0(t){return t.h||(t.h=t.i())}function IS(){}var _l={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $g(){jt.call(this,"d")}St($g,jt);function Fg(){jt.call(this,"c")}St(Fg,jt);var Lp;function xh(){}St(xh,Mg);xh.prototype.g=function(){return new XMLHttpRequest};xh.prototype.i=function(){return{}};Lp=new xh;function Sl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wa(this),this.P=rP,t=bp?125:void 0,this.V=new Th(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xS}function xS(){this.i=null,this.g="",this.h=!1}var rP=45e3,Mp={},xc={};U=Sl.prototype;U.setTimeout=function(t){this.P=t};function $p(t,e,n){t.L=1,t.v=Rh(Rr(e)),t.s=n,t.S=!0,AS(t,null)}function AS(t,e){t.G=Date.now(),Tl(t),t.A=Rr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),MS(n.i,"t",r),t.C=0,n=t.l.J,t.h=new xS,t.g=rT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Jb(Ut(t.Pa,t,t.g),t.O)),ES(t.U,t.g,"readystatechange",t.nb),e=t.I?cS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ka(),Zb(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&Xn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=Xn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||bp||this.g&&(this.h.h||this.g.ja()||b0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ka(3):Ka(2)),Ah(this);var n=this.g.da();this.ca=n;t:if(RS(this)){var r=b0(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Oi(this),ma(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!za(a)){var u=a;break t}}u=null}if(n=u)Rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fp(this,n);else{this.i=!1,this.o=3,Kt(12),Oi(this),ma(this);break e}}this.S?(bS(this,c,o),bp&&this.i&&c==3&&(ES(this.U,this.V,"tick",this.mb),this.V.start())):(Rs(this.j,this.m,o,null),Fp(this,o)),c==4&&Oi(this),this.i&&!this.J&&(c==4?ZS(this.l,this):(this.i=!1,Tl(this)))}else CP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),Oi(this),ma(this)}}}catch{}finally{}};function RS(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function bS(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=iP(t,n),i==xc){e==4&&(t.o=4,Kt(14),r=!1),Rs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Mp){t.o=4,Kt(15),Rs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rs(t.j,t.m,i,null),Fp(t,i);RS(t)&&i!=xc&&i!=Mp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hg(e),e.M=!0,Kt(11))):(Rs(t.j,t.m,n,"[Invalid Chunked Response]"),Oi(t),ma(t))}U.mb=function(){if(this.g){var t=Xn(this.g),e=this.g.ja();this.C<e.length&&(Ah(this),bS(this,t,e),this.i&&t!=4&&Tl(this))}};function iP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xc:(n=Number(e.substring(n,r)),isNaN(n)?Mp:(r+=1,r+n>e.length?xc:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,Oi(this)};function Tl(t){t.Y=Date.now()+t.P,PS(t,t.P)}function PS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=El(Ut(t.lb,t),e)}function Ah(t){t.B&&(re.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(tP(this.j,this.A),this.L!=2&&(Ka(),Kt(17)),Oi(this),this.o=2,ma(this)):PS(this,this.Y-t)};function ma(t){t.l.H==0||t.J||ZS(t.l,t)}function Oi(t){Ah(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Og(t.V),_S(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Up(n.i,t))){if(!t.K&&Up(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bc(n),Nh(n);else break e;Vg(n),Kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=El(Ut(n.ib,n),6e3));if(1>=US(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Li(n,11)}else if((t.K||n.g==t)&&bc(n),!za(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ug(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ue(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=nT(r,r.J?r.pa:null,r.Y),o.K){jS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ah(a),Tl(a)),r.g=o}else XS(r);0<n.j.length&&Dh(n)}else u[0]!="stop"&&u[0]!="close"||Li(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Li(n,7):zg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ka(4)}catch{}}function sP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function oP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function NS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oP(t),r=sP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var DS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bi){this.h=t.h,Ac(this,t.j),this.s=t.s,this.g=t.g,Rc(this,t.m),this.l=t.l;var e=t.i,n=new Ga;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),x0(this,n),this.o=t.o}else t&&(e=String(t).match(DS))?(this.h=!1,Ac(this,e[1]||"",!0),this.s=ta(e[2]||""),this.g=ta(e[3]||"",!0),Rc(this,e[4]),this.l=ta(e[5]||"",!0),x0(this,e[6]||"",!0),this.o=ta(e[7]||"")):(this.h=!1,this.i=new Ga(null,this.h))}Bi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(na(e,A0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(na(e,A0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(na(n,n.charAt(0)=="/"?cP:uP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",na(n,dP)),t.join("")};function Rr(t){return new Bi(t)}function Ac(t,e,n){t.j=n?ta(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function x0(t,e,n){e instanceof Ga?(t.i=e,fP(t.i,t.h)):(n||(e=na(e,hP)),t.i=new Ga(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Rh(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ta(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function na(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var A0=/[#\/\?@]/g,uP=/[#\?:]/g,cP=/[#\?]/g,hP=/[#\?@]/g,dP=/#/g;function Ga(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ki(t){t.g||(t.g=new Map,t.h=0,t.i&&aP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Ga.prototype;U.add=function(t,e){ki(this),this.i=null,t=go(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function OS(t,e){ki(t),e=go(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function LS(t,e){return ki(t),e=go(t,e),t.g.has(e)}U.forEach=function(t,e){ki(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){ki(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){ki(this);let e=[];if(typeof t=="string")LS(this,t)&&(e=e.concat(this.g.get(go(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return ki(this),this.i=null,t=go(this,t),LS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function MS(t,e,n){OS(t,e),0<n.length&&(t.i=null,t.g.set(go(t,e),kg(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function go(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fP(t,e){e&&!t.j&&(ki(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(OS(this,r),MS(this,i,n))},t)),t.j=e}var pP=class{constructor(t,e){this.g=t,this.map=e}};function $S(t){this.l=t||mP,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mP=10;function FS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function US(t){return t.h?1:t.g?t.g.size:0}function Up(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ug(t,e){t.g?t.g.add(e):t.h=e}function jS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$S.prototype.cancel=function(){if(this.i=BS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function BS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kg(t.i)}var gP=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function yP(){this.g=new gP}function vP(t,e,n){const r=n||"";try{NS(t,function(i,s){let o=i;vl(i)&&(o=Ng(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wP(t,e){const n=new Ch;if(re.Image){const r=new Image;r.onload=cu(du,n,r,"TestLoadImage: loaded",!0,e),r.onerror=cu(du,n,r,"TestLoadImage: error",!1,e),r.onabort=cu(du,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=cu(du,n,r,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function du(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Cl(t){this.l=t.fc||null,this.j=t.ob||!1}St(Cl,Mg);Cl.prototype.g=function(){return new bh(this.l,this.j)};Cl.prototype.i=function(t){return function(){return t}}({});function bh(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=jg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}St(bh,_t);var jg=0;U=bh.prototype;U.open=function(t,e){if(this.readyState!=jg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qa(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kl(this)),this.readyState=jg};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function zS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kl(this):Qa(this),this.readyState==3&&zS(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,kl(this))};U.Ya=function(t){this.g&&(this.response=t,kl(this))};U.ka=function(){this.g&&kl(this)};function kl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qa(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var EP=re.JSON.parse;function Ze(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=VS,this.L=this.M=!1}St(Ze,_t);var VS="",_P=/^https?$/i,SP=["POST","PUT"];U=Ze.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Lp.g(),this.C=this.u?I0(this.u):I0(Lp),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){R0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=re.FormData&&t instanceof re.FormData,!(0<=oS(SP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{WS(this),0<this.B&&((this.L=TP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=Lg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){R0(this,s)}};function TP(t){return eo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof Cg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))};function R0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,HS(t),Ph(t)}function HS(t){t.F||(t.F=!0,Rt(t,"complete"),Rt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),Ph(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ph(this,!0)),Ze.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?qS(this):this.kb())};U.kb=function(){qS(this)};function qS(t){if(t.h&&typeof Cg<"u"&&(!t.C[1]||Xn(t)!=4||t.da()!=2)){if(t.v&&Xn(t)==4)Lg(t.La,0,t);else if(Rt(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(DS)[1]||null;!i&&re.self&&re.self.location&&(i=re.self.location.protocol.slice(0,-1)),r=!_P.test(i?i.toLowerCase():"")}n=r}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var s=2<Xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",HS(t)}}finally{Ph(t)}}}}function Ph(t,e){if(t.g){WS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function WS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Xn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),EP(e)}};function b0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case VS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function CP(t){const e={};t=(t.g&&2<=Xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(za(t[r]))continue;var n=Qb(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}zb(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function KS(t){let e="";return xg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=KS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function zo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function GS(t){this.Ga=0,this.j=[],this.l=new Ch,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zo("baseRetryDelayMs",5e3,t),this.hb=zo("retryDelaySeedMs",1e4,t),this.eb=zo("forwardChannelMaxRetries",2,t),this.xa=zo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $S(t&&t.concurrentRequestLimit),this.Ja=new yP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=GS.prototype;U.ra=8;U.H=1;function zg(t){if(QS(t),t.H==3){var e=t.W++,n=Rr(t.I);if(Ue(n,"SID",t.K),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Il(t,n),e=new Sl(t,t.l,e),e.L=2,e.v=Rh(Rr(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=rT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Tl(e)}tT(t)}function Nh(t){t.g&&(Hg(t),t.g.cancel(),t.g=null)}function QS(t){Nh(t),t.u&&(re.clearTimeout(t.u),t.u=null),bc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Dh(t){if(!FS(t.i)&&!t.m){t.m=!0;var e=t.Na;Ha||vS(),qa||(Ha(),qa=!0),Dg.add(e,t),t.C=0}}function kP(t,e){return US(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=El(Ut(t.Na,t,e),eT(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Sl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=cS(s),hS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=YS(this,i,e),n=Rr(this.I),Ue(n,"RID",t),Ue(n,"CVER",22),this.F&&Ue(n,"X-HTTP-Session-Id",this.F),Il(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(KS(s)))+"&"+e:this.o&&Bg(n,this.o,s)),Ug(this.i,i),this.bb&&Ue(n,"TYPE","init"),this.P?(Ue(n,"$req",e),Ue(n,"SID","null"),i.aa=!0,$p(i,n,null)):$p(i,n,e),this.H=2}}else this.H==3&&(t?P0(this,t):this.j.length==0||FS(this.i)||P0(this))};function P0(t,e){var n;e?n=e.m:n=t.W++;const r=Rr(t.I);Ue(r,"SID",t.K),Ue(r,"RID",n),Ue(r,"AID",t.V),Il(t,r),t.o&&t.s&&Bg(r,t.o,t.s),n=new Sl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=YS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ug(t.i,n),$p(n,r,e)}function Il(t,e){t.na&&xg(t.na,function(n,r){Ue(e,r,n)}),t.h&&NS({},function(n,r){Ue(e,r,n)})}function YS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ut(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{vP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function XS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ha||vS(),qa||(Ha(),qa=!0),Dg.add(e,t),t.A=0}}function Vg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=El(Ut(t.Ma,t),eT(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,JS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=El(Ut(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Nh(this),JS(this))};function Hg(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function JS(t){t.g=new Sl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Rr(t.wa);Ue(e,"RID","rpc"),Ue(e,"SID",t.K),Ue(e,"AID",t.V),Ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ue(e,"TO",t.qa),Ue(e,"TYPE","xmlhttp"),Il(t,e),t.o&&t.s&&Bg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Rh(Rr(e)),n.s=null,n.S=!0,AS(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Nh(this),Vg(this),Kt(19))};function bc(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function ZS(t,e){var n=null;if(t.g==e){bc(t),Hg(t),t.g=null;var r=2}else if(Up(t.i,e))n=e.F,jS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=kh(),Rt(r,new CS(r,n)),Dh(t)}else XS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&kP(t,e)||r==2&&Vg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Li(t,5);break;case 4:Li(t,10);break;case 3:Li(t,6);break;default:Li(t,2)}}}function eT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Li(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ut(t.pb,t);n||(n=new Bi("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Ac(n,"https"),Rh(n)),wP(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),tT(t),QS(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function tT(t){if(t.H=0,t.ma=[],t.h){const e=BS(t.i);(e.length!=0||t.j.length!=0)&&(_0(t.ma,e),_0(t.ma,t.j),t.i.i.length=0,kg(t.j),t.j.length=0),t.h.ya()}}function nT(t,e,n){var r=n instanceof Bi?Rr(n):new Bi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Rc(r,r.m);else{var i=re.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Bi(null);r&&Ac(s,r),e&&(s.g=e),i&&Rc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ra),Il(t,r),r}function rT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ze(new Cl({ob:!0})):new Ze(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function iT(){}U=iT.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Pc(){if(eo&&!(10<=Number(Fb)))throw Error("Environmental error: no available transport.")}Pc.prototype.g=function(t,e){return new mn(t,e)};function mn(t,e){_t.call(this),this.g=new GS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!za(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!za(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yo(this)}St(mn,_t);mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=nT(t,null,t.Y),Dh(t)};mn.prototype.close=function(){zg(this.g)};mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ng(t),t=n);e.j.push(new pP(e.fb++,t)),e.H==3&&Dh(e)};mn.prototype.N=function(){this.g.h=null,delete this.j,zg(this.g),delete this.g,mn.$.N.call(this)};function sT(t){$g.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}St(sT,$g);function oT(){Fg.call(this),this.status=1}St(oT,Fg);function yo(t){this.g=t}St(yo,iT);yo.prototype.Ba=function(){Rt(this.g,"a")};yo.prototype.Aa=function(t){Rt(this.g,new sT(t))};yo.prototype.za=function(t){Rt(this.g,new oT)};yo.prototype.ya=function(){Rt(this.g,"b")};function IP(){this.blockSize=-1}function zn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}St(zn,IP);zn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function uf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}zn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)uf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){uf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){uf(this,r),i=0;break}}this.h=i,this.i+=e};zn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ae(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var xP={};function qg(t){return-128<=t&&128>t?Lb(t,function(e){return new Ae([e|0],0>e?-1:0)}):new Ae([t|0],0>t?-1:0)}function Jn(t){if(isNaN(t)||!isFinite(t))return js;if(0>t)return xt(Jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=jp;return new Ae(e,0)}function aT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xt(aT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(e,8)),r=js,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jn(Math.pow(e,s)),r=r.R(s).add(Jn(o))):(r=r.R(n),r=r.add(Jn(o)))}return r}var jp=4294967296,js=qg(0),Bp=qg(1),N0=qg(16777216);U=Ae.prototype;U.ea=function(){if(kn(this))return-xt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:jp+r)*e,e*=jp}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vr(this))return"0";if(kn(this))return"-"+xt(this).toString(t);for(var e=Jn(Math.pow(t,6)),n=this,r="";;){var i=Dc(n,e).g;n=Nc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,vr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kn(t){return t.h==-1}U.X=function(t){return t=Nc(this,t),kn(t)?-1:vr(t)?0:1};function xt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ae(n,~t.h).add(Bp)}U.abs=function(){return kn(this)?xt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ae(n,n[n.length-1]&-2147483648?-1:0)};function Nc(t,e){return t.add(xt(e))}U.R=function(t){if(vr(this)||vr(t))return js;if(kn(this))return kn(t)?xt(this).R(xt(t)):xt(xt(this).R(t));if(kn(t))return xt(this.R(xt(t)));if(0>this.X(N0)&&0>t.X(N0))return Jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,fu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,fu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,fu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,fu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ae(n,0)};function fu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Vo(t,e){this.g=t,this.h=e}function Dc(t,e){if(vr(e))throw Error("division by zero");if(vr(t))return new Vo(js,js);if(kn(t))return e=Dc(xt(t),e),new Vo(xt(e.g),xt(e.h));if(kn(e))return e=Dc(t,xt(e)),new Vo(xt(e.g),e.h);if(30<t.g.length){if(kn(t)||kn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bp,r=e;0>=r.X(t);)n=D0(n),r=D0(r);var i=ps(n,1),s=ps(r,1);for(r=ps(r,2),n=ps(n,2);!vr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ps(r,1),n=ps(n,1)}return e=Nc(t,i.R(e)),new Vo(i,e)}for(i=js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jn(n),o=s.R(e);kn(o)||0<o.X(t);)n-=r,s=Jn(n),o=s.R(e);vr(s)&&(s=Bp),i=i.add(s),t=Nc(t,o)}return new Vo(i,t)}U.gb=function(t){return Dc(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ae(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ae(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ae(n,this.h^t.h)};function D0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ae(n,t.h)}function ps(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ae(i,t.h)}Pc.prototype.createWebChannel=Pc.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Ih.NO_ERROR=0;Ih.TIMEOUT=8;Ih.HTTP_ERROR=6;kS.COMPLETE="complete";IS.EventType=_l;_l.OPEN="a";_l.CLOSE="b";_l.ERROR="c";_l.MESSAGE="d";_t.prototype.listen=_t.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;zn.prototype.digest=zn.prototype.l;zn.prototype.reset=zn.prototype.reset;zn.prototype.update=zn.prototype.j;Ae.prototype.add=Ae.prototype.add;Ae.prototype.multiply=Ae.prototype.R;Ae.prototype.modulo=Ae.prototype.gb;Ae.prototype.compare=Ae.prototype.X;Ae.prototype.toNumber=Ae.prototype.ea;Ae.prototype.toString=Ae.prototype.toString;Ae.prototype.getBits=Ae.prototype.D;Ae.fromNumber=Jn;Ae.fromString=aT;var AP=function(){return new Pc},RP=function(){return kh()},cf=Ih,bP=kS,PP=ls,O0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},NP=Cl,pu=IS,DP=Ze,OP=zn,Bs=Ae;const L0="@firebase/firestore";/**
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
 */let Lt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let vo="9.23.0";/**
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
 */const Xi=new _g("@firebase/firestore");function M0(){return Xi.logLevel}function q(t,...e){if(Xi.logLevel<=Se.DEBUG){const n=e.map(Wg);Xi.debug(`Firestore (${vo}): ${t}`,...n)}}function br(t,...e){if(Xi.logLevel<=Se.ERROR){const n=e.map(Wg);Xi.error(`Firestore (${vo}): ${t}`,...n)}}function to(t,...e){if(Xi.logLevel<=Se.WARN){const n=e.map(Wg);Xi.warn(`Firestore (${vo}): ${t}`,...n)}}function Wg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw br(e),new Error(e)}function ze(t,e){t||ee()}function ue(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let z=class extends ur{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */let hi=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
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
 */let lT=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},LP=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}},MP=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},$P=class{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string"),new lT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new Lt(e)}},FP=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},UP=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new FP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},jP=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},BP=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.T=n.token,new jP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
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
 */function zP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class uT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class mt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new mt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new mt(0,0))}static max(){return new oe(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ya{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ya.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ya?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Ya{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new je(n)}static emptyPath(){return new je([])}}const VP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends Ya{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return VP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(je.fromString(e))}static fromName(e){return new Y(je.fromString(e).popFirst(5))}static empty(){return new Y(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new je(e.slice()))}}function HP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new vi(i,Y.empty(),e)}function qP(t){return new vi(t.readTime,t.key,-1)}class vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vi(oe.min(),Y.empty(),-1)}static max(){return new vi(oe.max(),Y.empty(),-1)}}function WP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const KP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xl(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==KP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Al(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Kg.ct=-1;function Oh(t){return t==null}function Oc(t){return t===0&&1/t==-1/0}function QP(t){return typeof t=="number"&&Number.isInteger(t)&&!Oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function $0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ut=class zp{constructor(e,n){this.comparator=e,this.root=n||di.EMPTY}insert(e,n){return new zp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,di.BLACK,null,null))}remove(e){return new zp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,di.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mu(this.root,e,this.comparator,!0)}};class mu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}let di=class fr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fr.RED,this.left=i??fr.EMPTY,this.right=s??fr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new fr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return fr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}};di.EMPTY=null,di.RED=!0,di.BLACK=!1;di.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,i){return this}insert(t,e,n){return new di(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */let fn=class Vp{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new F0(this.data.getIterator())}getIteratorFrom(e){return new F0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Vp)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Vp(this.comparator);return n.data=e,n}},F0=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
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
 */let Zn=class Hp{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new Hp([])}unionWith(e){let n=new fn(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Hp(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
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
 */class hT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */let gn=class qp{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hT("Invalid base64 string: "+i):i}}(e);return new qp(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new qp(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};gn.EMPTY_BYTE_STRING=new gn("");const YP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(ze(!!t),typeof t=="string"){let e=0;const n=YP.exec(t);if(ze(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ji(t){return typeof t=="string"?gn.fromBase64String(t):gn.fromUint8Array(t)}/**
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
 */function Gg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qg(t){const e=t.mapValue.fields.__previous_value__;return Gg(e)?Qg(e):e}function Xa(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class XP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ja{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gg(t)?4:JP(t)?9007199254740991:10:ee()}function lr(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wi(r.timestampValue),o=wi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ji(r.bytesValue).isEqual(Ji(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ot(r.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(r.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ot(r.integerValue)===ot(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ot(r.doubleValue),o=ot(i.doubleValue);return s===o?Oc(s)===Oc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if($0(s)!==$0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!lr(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function Za(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function ro(t,e){if(t===e)return 0;const n=Zi(t),r=Zi(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ot(i.integerValue||i.doubleValue),a=ot(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return U0(t.timestampValue,e.timestampValue);case 4:return U0(Xa(t),Xa(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ji(i),a=Ji(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Te(o[l],a[l]);if(u!==0)return u}return Te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Te(ot(i.latitude),ot(s.latitude));return o!==0?o:Te(ot(i.longitude),ot(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ro(o[l],a[l]);if(u)return u}return Te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===gu.mapValue&&s===gu.mapValue)return 0;if(i===gu.mapValue)return 1;if(s===gu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Te(a[c],u[c]);if(h!==0)return h;const d=ro(o[a[c]],l[u[c]]);if(d!==0)return d}return Te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function U0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=wi(t),r=wi(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function io(t){return Wp(t)}function Wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ji(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Wp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Wp(r.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,n}function j0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kp(t){return!!t&&"integerValue"in t}function Yg(t){return!!t&&"arrayValue"in t}function B0(t){return!!t&&"nullValue"in t}function z0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fu(t){return!!t&&"mapValue"in t}function ga(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ga(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ga(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(n)}setAll(e){let n=Ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ga(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){us(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tn(ga(this.value))}}function dT(t){const e=[];return us(t.fields,(n,r)=>{const i=new Ft([n]);if(Fu(r)){const s=dT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zn(e)}/**
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
 */class $t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,oe.min(),oe.min(),oe.min(),tn.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,oe.min(),oe.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,oe.min(),oe.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lc{constructor(e,n){this.position=e,this.inclusive=n}}function V0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=ro(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function H0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fT{}class lt extends fT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tN(e,n,r):n==="array-contains"?new iN(e,r):n==="in"?new sN(e,r):n==="not-in"?new oN(e,r):n==="array-contains-any"?new aN(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nN(e,r):new rN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ro(n,this.value)):n!==null&&Zi(this.value)===Zi(n)&&this.matchesComparison(ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vn extends fT{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Vn(e,n)}matches(e){return pT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function pT(t){return t.op==="and"}function mT(t){return eN(t)&&pT(t)}function eN(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Gp(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+io(t.value);if(mT(t))return t.filters.map(e=>Gp(e)).join(",");{const e=t.filters.map(n=>Gp(n)).join(",");return`${t.op}(${e})`}}function gT(t,e){return t instanceof lt?function(n,r){return r instanceof lt&&n.op===r.op&&n.field.isEqual(r.field)&&lr(n.value,r.value)}(t,e):t instanceof Vn?function(n,r){return r instanceof Vn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&gT(s,r.filters[o]),!0):!1}(t,e):void ee()}function yT(t){return t instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${io(e.value)}`}(t):t instanceof Vn?function(e){return e.op.toString()+" {"+e.getFilters().map(yT).join(" ,")+"}"}(t):"Filter"}class tN extends lt{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class nN extends lt{constructor(e,n){super(e,"in",n),this.keys=vT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rN extends lt{constructor(e,n){super(e,"not-in",n),this.keys=vT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class iN extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yg(n)&&Za(n.arrayValue,this.value)}}class sN extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Za(this.value.arrayValue,n)}}class oN extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Za(this.value.arrayValue,n)}}class aN extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Za(this.value.arrayValue,r))}}/**
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
 */class lN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function q0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lN(t,e,n,r,i,s,o)}function Xg(t){const e=ue(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>io(r)).join(",")),e.dt=n}return e.dt}function Jg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!H0(t.startAt,e.startAt)&&H0(t.endAt,e.endAt)}function Qp(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Rl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function uN(t,e,n,r,i,s,o,a){return new Rl(t,e,n,r,i,s,o,a)}function Lh(t){return new Rl(t)}function W0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ET(t){return t.collectionGroup!==null}function zs(t){const e=ue(t);if(e.wt===null){e.wt=[];const n=Zg(e),r=wT(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ya(n)),e.wt.push(new ya(Ft.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ya(Ft.keyField(),s))}}}return e.wt}function Pr(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=q0(e.path,e.collectionGroup,zs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of zs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ya(s.field,o))}const r=e.endAt?new Lc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lc(e.startAt.position,e.startAt.inclusive):null;e._t=q0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Yp(t,e){e.getFirstInequalityField(),Zg(t);const n=t.filters.concat([e]);return new Rl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xp(t,e,n){return new Rl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mh(t,e){return Jg(Pr(t),Pr(e))&&t.limitType===e.limitType}function _T(t){return`${Xg(Pr(t))}|lt:${t.limitType}`}function Jp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>yT(r)).join(", ")}]`),Oh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>io(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>io(r)).join(",")),`Target(${n})`}(Pr(t))}; limitType=${t.limitType})`}function $h(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of zs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=V0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,zs(n),r)||n.endAt&&!function(i,s,o){const a=V0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,zs(n),r))}(t,e)}function cN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ST(t){return(e,n)=>{let r=!1;for(const i of zs(t)){const s=hN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hN(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ro(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return cT(this.inner)}size(){return this.innerSize}}/**
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
 */const dN=new ut(Y.comparator);function Nr(){return dN}const TT=new ut(Y.comparator);function ra(...t){let e=TT;for(const n of t)e=e.insert(n.key,n);return e}function CT(t){let e=TT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mi(){return va()}function kT(){return va()}function va(){return new wo(t=>t.toString(),(t,e)=>t.isEqual(e))}const fN=new ut(Y.comparator),pN=new fn(Y.comparator);function fe(...t){let e=pN;for(const n of t)e=e.add(n);return e}const mN=new fn(Te);function gN(){return mN}/**
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
 */function IT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oc(e)?"-0":e}}function xT(t){return{integerValue:""+t}}function yN(t,e){return QP(e)?xT(e):IT(t,e)}/**
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
 */class Fh{constructor(){this._=void 0}}function vN(t,e,n){return t instanceof Mc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Gg(i)&&(i=Qg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof el?RT(t,e):t instanceof tl?bT(t,e):function(r,i){const s=AT(r,i),o=K0(s)+K0(r.gt);return Kp(s)&&Kp(r.gt)?xT(o):IT(r.serializer,o)}(t,e)}function wN(t,e,n){return t instanceof el?RT(t,e):t instanceof tl?bT(t,e):n}function AT(t,e){return t instanceof $c?Kp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Mc extends Fh{}class el extends Fh{constructor(e){super(),this.elements=e}}function RT(t,e){const n=PT(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class tl extends Fh{constructor(e){super(),this.elements=e}}function bT(t,e){let n=PT(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class $c extends Fh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function K0(t){return ot(t.integerValue||t.doubleValue)}function PT(t){return Yg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof el&&r instanceof el||n instanceof tl&&r instanceof tl?no(n.elements,r.elements,lr):n instanceof $c&&r instanceof $c?lr(n.gt,r.gt):n instanceof Mc&&r instanceof Mc}(t.transform,e.transform)}class _N{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uh{}function NT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new OT(t.key,Un.none()):new bl(t.key,t.data,Un.none());{const n=t.data,r=tn.empty();let i=new fn(Ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ii(t.key,r,new Zn(i.toArray()),Un.none())}}function SN(t,e,n){t instanceof bl?function(r,i,s){const o=r.value.clone(),a=Q0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ii?function(r,i,s){if(!Uu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Q0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(DT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function wa(t,e,n,r){return t instanceof bl?function(i,s,o,a){if(!Uu(i.precondition,s))return o;const l=i.value.clone(),u=Y0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ii?function(i,s,o,a){if(!Uu(i.precondition,s))return o;const l=Y0(i.fieldTransforms,a,s),u=s.data;return u.setAll(DT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Uu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function TN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AT(r.transform,i||null);s!=null&&(n===null&&(n=tn.empty()),n.set(r.field,s))}return n||null}function G0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&no(n,r,(i,s)=>EN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bl extends Uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends Uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function DT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Q0(t,e,n){const r=new Map;ze(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wN(o,a,n[i]))}return r}function Y0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vN(s,o,e))}return r}class OT extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CN extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=NT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>G0(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>G0(n,r))}}class ey{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ze(e.mutations.length===r.length);let i=fN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ey(e,n,r,i)}}/**
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
 */class IN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,ge;function AN(t){switch(t){default:return ee();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function LT(t){if(t===void 0)return br("GRPC error has no .code"),A.UNKNOWN;switch(t){case it.OK:return A.OK;case it.CANCELLED:return A.CANCELLED;case it.UNKNOWN:return A.UNKNOWN;case it.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case it.INTERNAL:return A.INTERNAL;case it.UNAVAILABLE:return A.UNAVAILABLE;case it.UNAUTHENTICATED:return A.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case it.NOT_FOUND:return A.NOT_FOUND;case it.ALREADY_EXISTS:return A.ALREADY_EXISTS;case it.PERMISSION_DENIED:return A.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case it.ABORTED:return A.ABORTED;case it.OUT_OF_RANGE:return A.OUT_OF_RANGE;case it.UNIMPLEMENTED:return A.UNIMPLEMENTED;case it.DATA_LOSS:return A.DATA_LOSS;default:return ee()}}(ge=it||(it={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ty{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return yu}static getOrCreateInstance(){return yu===null&&(yu=new ty),yu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let yu=null;/**
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
 */function RN(){return new TextEncoder}/**
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
 */const bN=new Bs([4294967295,4294967295],0);function X0(t){const e=RN().encode(t),n=new OP;return n.update(e),new Uint8Array(n.digest())}function J0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Bs([n,r],0),new Bs([i,s],0)]}class ny{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ia(`Invalid padding: ${n}`);if(r<0)throw new ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ia(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Bs.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Bs.fromNumber(r)));return i.compare(bN)===1&&(i=new Bs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=X0(e),[r,i]=J0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ny(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=X0(e),[r,i]=J0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jh(oe.min(),i,new ut(Te),Nr(),fe())}}class Pl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pl(r,n,fe(),fe(),fe())}}/**
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
 */class ju{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class MT{constructor(e,n){this.targetId=e,this.Vt=n}}class $T{constructor(e,n,r=gn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Z0{constructor(){this.St=0,this.Dt=tw(),this.Ct=gn.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=fe(),n=fe(),r=fe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Pl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=tw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class PN{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Nr(),this.zt=ew(),this.Wt=new ut(Te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Qp(o))if(i===0){const a=new Y(o.path);this.Yt(r,a,$t.newNoDocument(a,oe.min()))}else ze(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=ty.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,f,m,v,E,g;const p={localCacheCount:c,existenceFilterCount:h.count},w=h.unchangedNames;return w&&(p.bloomFilter={applied:u===0,hashCount:(d=w==null?void 0:w.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(m=(f=w==null?void 0:w.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(g=(E=w==null?void 0:w.bits)===null||E===void 0?void 0:E.padding)!==null&&g!==void 0?g:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Ji(s).toUint8Array()}catch(c){if(c instanceof hT)return to("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new ny(l,o,a)}catch(c){return to(c instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Qp(a.target)){const l=new Y(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,$t.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=fe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new jh(e,n,this.Wt,this.jt,r);return this.jt=Nr(),this.zt=ew(),this.Wt=new ut(Te),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Z0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new fn(Te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Z0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function ew(){return new ut(Y.comparator)}function tw(){return new ut(Y.comparator)}const NN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ON=(()=>({and:"AND",or:"OR"}))();class LN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zp(t,e){return t.useProto3Json||Oh(e)?e:{value:e}}function Fc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MN(t,e){return Fc(t,e.toTimestamp())}function sr(t){return ze(!!t),oe.fromTimestamp(function(e){const n=wi(e);return new mt(n.seconds,n.nanos)}(t))}function ry(t,e){return function(n){return new je(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function UT(t){const e=je.fromString(t);return ze(VT(e)),e}function em(t,e){return ry(t.databaseId,e.path)}function hf(t,e){const n=UT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(jT(n))}function tm(t,e){return ry(t.databaseId,e)}function $N(t){const e=UT(t);return e.length===4?je.emptyPath():jT(e)}function nm(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jT(t){return ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nw(t,e,n){return{name:em(t,e),fields:n.value.mapValue.fields}}function FN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ze(u===void 0||typeof u=="string"),gn.fromBase64String(u||"")):(ze(u===void 0||u instanceof Uint8Array),gn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:LT(l.code);return new z(u,l.message||"")}(o);n=new $T(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hf(t,r.document.name),s=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):oe.min(),a=new tn({mapValue:{fields:r.document.fields}}),l=$t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ju(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hf(t,r.document),s=r.readTime?sr(r.readTime):oe.min(),o=$t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ju([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hf(t,r.document),s=r.removedTargetIds||[];n=new ju([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xN(i,s),a=r.targetId;n=new MT(a,o)}}return n}function UN(t,e){let n;if(e instanceof bl)n={update:nw(t,e.key,e.value)};else if(e instanceof OT)n={delete:em(t,e.key)};else if(e instanceof Ii)n={update:nw(t,e.key,e.data),updateMask:GN(e.fieldMask)};else{if(!(e instanceof CN))return ee();n={verify:em(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Mc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof el)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof tl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $c)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:MN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function jN(t,e){return t&&t.length>0?(ze(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?sr(r.updateTime):sr(i);return s.isEqual(oe.min())&&(s=sr(i)),new _N(s,r.transformResults||[])}(n,e))):[]}function BN(t,e){return{documents:[tm(t,e.path)]}}function zN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=tm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return zT(Vn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ms(c.field),direction:qN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Zp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function VN(t){let e=$N(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ze(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=BT(c);return h instanceof Vn&&mT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ya(gs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Oh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Lc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Lc(d,h)}(n.endAt)),uN(e,i,o,s,a,"F",l,u)}function HN(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gs(e.unaryFilter.field);return lt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=gs(e.unaryFilter.field);return lt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(e.unaryFilter.field);return lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=gs(e.unaryFilter.field);return lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(e){return lt.create(gs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Vn.create(e.compositeFilter.filters.map(n=>BT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ee()}}(e.compositeFilter.op))}(t):ee()}function qN(t){return NN[t]}function WN(t){return DN[t]}function KN(t){return ON[t]}function ms(t){return{fieldPath:t.canonicalString()}}function gs(t){return Ft.fromServerFormat(t.fieldPath)}function zT(t){return t instanceof lt?function(e){if(e.op==="=="){if(z0(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NAN"}};if(B0(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(z0(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NOT_NAN"}};if(B0(e.value))return{unaryFilter:{field:ms(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(e.field),op:WN(e.op),value:e.value}}}(t):t instanceof Vn?function(e){const n=e.getFilters().map(r=>zT(r));return n.length===1?n[0]:{compositeFilter:{op:KN(e.op),filters:n}}}(t):ee()}function GN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ei{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=gn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QN{constructor(e){this.fe=e}}function YN(t){const e=VN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xp(e,e.limit,"L"):e}/**
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
 */class XN{constructor(){this.rn=new JN}addToCollectionParentIndex(e,n){return this.rn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(vi.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class JN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new fn(je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fn(je.comparator)).toArray()}}/**
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
 */class so{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new so(0)}static Mn(){return new so(-1)}}/**
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
 */class ZN{constructor(){this.changes=new wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wa(r.mutation,i,Zn.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ra();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nr();const o=va(),a=va();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ii)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),wa(c.mutation,u,c.mutation.getFieldMask(),mt.now())):o.set(u.key,Zn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new eD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=va();let i=new ut((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Zn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=kT();c.forEach(d=>{if(!s.has(d)){const f=NT(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ET(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Mi());let a=-1,l=s;return o.next(u=>O.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?O.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,fe())).next(c=>({batchId:a,changes:CT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ra();return this.indexManager.getCollectionParents(e,i).next(o=>O.forEach(o,a=>{const l=function(u,c){return new Rl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,$t.newInvalidDocument(u)))});let o=ra();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&wa(u.mutation,l,Zn.empty(),mt.now()),$h(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class nD{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return O.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:sr(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:YN(r.bundledQuery),readTime:sr(r.readTime)}}(n)),O.resolve()}}/**
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
 */class rD{constructor(){this.overlays=new ut(Y.comparator),this.ls=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mi();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Mi(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Mi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Mi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return O.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IN(n,r));let s=this.ls.get(n);s===void 0&&(s=fe(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class iy{constructor(){this.fs=new fn(vt.ds),this.ws=new fn(vt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new vt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new vt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new Y(new je([])),r=new vt(n,e),i=new vt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new Y(new je([])),r=new vt(n,e),i=new vt(n,e+1);let s=fe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new vt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return Y.comparator(e.key,n.key)||Te(e.As,n.As)}static _s(e,n){return Te(e.As,n.As)||Y.comparator(e.key,n.key)}}/**
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
 */class iD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new fn(vt.ds)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fn(Te);return n.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),O.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new vt(new Y(s),0);let a=new fn(Te);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),O.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ze(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return O.forEach(n.mutations,i=>{const s=new vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new vt(n,0),i=this.Rs.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sD{constructor(e){this.Ds=e,this.docs=new ut(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$t.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WP(qP(c),r)<=0||(i.has(c.key)||$h(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Cs(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oD(this)}getSize(e){return O.resolve(this.size)}}class oD extends ZN{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class aD{constructor(e){this.persistence=e,this.xs=new wo(n=>Xg(n),Jg),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Ns=0,this.ks=new iy,this.targetCount=0,this.Ms=so.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),O.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new so(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Fn(n),O.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.ks.containsKey(n))}}/**
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
 */class lD{constructor(e,n){this.$s={},this.overlays={},this.Os=new Kg(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new aD(this),this.indexManager=new XN,this.remoteDocumentCache=function(r){return new sD(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new QN(n),this.qs=new nD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new iD(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new uD(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return O.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class uD extends GP{constructor(e){super(),this.currentSequenceNumber=e}}class sy{constructor(e){this.persistence=e,this.Qs=new iy,this.js=null}static zs(e){return new sy(e)}get Ws(){if(this.js)return this.js;throw ee()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),O.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Ws,r=>{const i=Y.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return O.or([()=>O.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class oy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new oy(e,n.fromCache,r,i)}}/**
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
 */class cD{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(W0(n))return O.resolve(null);let r=Pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xp(n,null,"F"),r=Pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Xp(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return W0(n)||i.isEqual(oe.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(M0()<=Se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jp(n)),this.Wi(e,o,n,HP(i,-1)))})}ji(e,n){let r=new fn(ST(e));return n.forEach((i,s)=>{$h(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return M0()<=Se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Jp(n)),this.Ui.getDocumentsMatchingQuery(e,n,vi.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class hD{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ut(Te),this.Yi=new wo(s=>Xg(s),Jg),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tD(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function dD(t,e,n,r){return new hD(t,e,n,r)}async function HT(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function fD(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=O.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const v=l.docVersions.get(f);ze(v!==null),m.version.compareTo(v)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=fe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qT(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function pD(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(gn.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(m,v,E){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let l=Nr(),u=fe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mD(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(oe.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function mD(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function gD(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yD(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new ei(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function rm(t,e,n){const r=ue(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Al(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function rw(t,e,n){const r=ue(t);let i=oe.min(),s=fe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ue(a),h=c.Yi.get(u);return h!==void 0?O.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:fe())).next(a=>(vD(r,cN(e),a),{documents:a,ir:s})))}function vD(t,e,n){let r=t.Xi.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class iw{constructor(){this.activeTargetIds=gN()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wD{constructor(){this.Hr=new iw,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new iw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ED{Yr(e){}shutdown(){}}/**
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
 */class sw{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vu=null;function df(){return vu===null?vu=268435456+Math.round(2147483648*Math.random()):vu++,"0x"+vu.toString(16)}/**
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
 */const _D={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class SD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ot="WebChannelConnection";class TD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=df(),a=this.To(e,n);q("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(q("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw to("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=_D[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=df();return new Promise((o,a)=>{const l=new DP;l.setWithCredentials(!0),l.listenOnce(bP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cf.NO_ERROR:const c=l.getResponseJson();q(Ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case cf.TIMEOUT:q(Ot,`RPC '${e}' ${s} timed out`),a(new z(A.DEADLINE_EXCEEDED,"Request time out"));break;case cf.HTTP_ERROR:const h=l.getStatus();if(q(Ot,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(E)>=0?E:A.UNKNOWN}(f.status);a(new z(m,f.message))}else a(new z(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(A.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{q(Ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);q(Ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=df(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AP(),a=RP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new NP({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");q(Ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const m=new SD({ro:E=>{f?q(Ot,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(q(Ot,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),q(Ot,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,g,p)=>{E.listen(g,w=>{try{p(w)}catch(y){setTimeout(()=>{throw y},0)}})};return v(h,pu.EventType.OPEN,()=>{f||q(Ot,`RPC '${e}' stream ${i} transport opened.`)}),v(h,pu.EventType.CLOSE,()=>{f||(f=!0,q(Ot,`RPC '${e}' stream ${i} transport closed`),m.wo())}),v(h,pu.EventType.ERROR,E=>{f||(f=!0,to(Ot,`RPC '${e}' stream ${i} transport errored:`,E),m.wo(new z(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,pu.EventType.MESSAGE,E=>{var g;if(!f){const p=E.data[0];ze(!!p);const w=p,y=w.error||((g=w[0])===null||g===void 0?void 0:g.error);if(y){q(Ot,`RPC '${e}' stream ${i} received error:`,y);const C=y.status;let R=function(L){const G=it[L];if(G!==void 0)return LT(G)}(C),b=y.message;R===void 0&&(R=A.INTERNAL,b="Unknown error status: "+C+" with message "+y.message),f=!0,m.wo(new z(R,b)),h.close()}else q(Ot,`RPC '${e}' stream ${i} received:`,p),m._o(p)}}),v(a,PP.STAT_EVENT,E=>{E.stat===O0.PROXY?q(Ot,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===O0.NOPROXY&&q(Ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}function ff(){return typeof document<"u"?document:null}/**
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
 */function Bh(t){return new LN(t,!0)}/**
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
 */class WT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class KT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new WT(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new z(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CD extends KT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=FN(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?oe.min():s.readTime?sr(s.readTime):oe.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=nm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Qp(a)?{documents:BN(i,a)}:{query:zN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=FT(i,s.resumeToken);const l=Zp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(oe.min())>0){o.readTime=Fc(i,s.snapshotVersion.toTimestamp());const l=Zp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=HN(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=nm(this.serializer),n.removeTarget=e,this.Wo(n)}}class kD extends KT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=jN(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.cu(r,n)}return ze(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=nm(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UN(this.serializer,r))};this.Wo(n)}}/**
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
 */class ID extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(A.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(A.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class xD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(br(n),this.mu=!1):q("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class AD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{cs(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.vu.add(4),await Nl(l),l.bu.set("Unknown"),l.vu.delete(4),await zh(l)}(this))})}),this.bu=new xD(r,i)}}async function zh(t){if(cs(t))for(const e of t.Ru)await e(!0)}async function Nl(t){for(const e of t.Ru)await e(!1)}function GT(t,e){const n=ue(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),uy(n)?ly(n):Eo(n).Ko()&&ay(n,e))}function QT(t,e){const n=ue(t),r=Eo(n);n.Au.delete(e),r.Ko()&&YT(n,e),n.Au.size===0&&(r.Ko()?r.jo():cs(n)&&n.bu.set("Unknown"))}function ay(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eo(t).su(e)}function YT(t,e){t.Vu.qt(e),Eo(t).iu(e)}function ly(t){t.Vu=new PN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Eo(t).start(),t.bu.gu()}function uy(t){return cs(t)&&!Eo(t).Uo()&&t.Au.size>0}function cs(t){return ue(t).vu.size===0}function XT(t){t.Vu=void 0}async function RD(t){t.Au.forEach((e,n)=>{ay(t,e)})}async function bD(t,e){XT(t),uy(t)?(t.bu.Iu(e),ly(t)):t.bu.set("Unknown")}async function PD(t,e,n){if(t.bu.set("Online"),e instanceof $T&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uc(t,r)}else if(e instanceof ju?t.Vu.Ht(e):e instanceof MT?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(oe.min()))try{const r=await qT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(gn.EMPTY_BYTE_STRING,u.snapshotVersion)),YT(i,a);const c=new ei(u.target,a,l,u.sequenceNumber);ay(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Uc(t,r)}}async function Uc(t,e,n){if(!Al(e))throw e;t.vu.add(1),await Nl(t),t.bu.set("Offline"),n||(n=()=>qT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await zh(t)})}function JT(t,e){return e().catch(n=>Uc(t,n,e))}async function Vh(t){const e=ue(t),n=Ei(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ND(e);)try{const i=await gD(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,DD(e,i)}catch(i){await Uc(e,i)}ZT(e)&&eC(e)}function ND(t){return cs(t)&&t.Eu.length<10}function DD(t,e){t.Eu.push(e);const n=Ei(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function ZT(t){return cs(t)&&!Ei(t).Uo()&&t.Eu.length>0}function eC(t){Ei(t).start()}async function OD(t){Ei(t).hu()}async function LD(t){const e=Ei(t);for(const n of t.Eu)e.uu(n.mutations)}async function MD(t,e,n){const r=t.Eu.shift(),i=ey.from(r,e,n);await JT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vh(t)}async function $D(t,e){e&&Ei(t).ou&&await async function(n,r){if(i=r.code,AN(i)&&i!==A.ABORTED){const s=n.Eu.shift();Ei(n).Qo(),await JT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Vh(n)}var i}(t,e),ZT(t)&&eC(t)}async function ow(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.vu.add(3),await Nl(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await zh(n)}async function FD(t,e){const n=ue(t);e?(n.vu.delete(2),await zh(n)):e||(n.vu.add(2),await Nl(n),n.bu.set("Unknown"))}function Eo(t){return t.Su||(t.Su=function(e,n,r){const i=ue(e);return i.fu(),new CD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:RD.bind(null,t),ao:bD.bind(null,t),nu:PD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),uy(t)?ly(t):t.bu.set("Unknown")):(await t.Su.stop(),XT(t))})),t.Su}function Ei(t){return t.Du||(t.Du=function(e,n,r){const i=ue(e);return i.fu(),new kD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:OD.bind(null,t),ao:$D.bind(null,t),au:LD.bind(null,t),cu:MD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Vh(t)):(await t.Du.stop(),t.Eu.length>0&&(q("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class cy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new cy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hy(t,e){if(br("AsyncQueue",`${e}: ${t}`),Al(t))return new z(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=ra(),this.sortedSet=new ut(this.comparator)}static emptySet(e){return new Vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class aw{constructor(){this.Cu=new ut(Y.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):ee():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,Vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class UD{constructor(){this.Nu=void 0,this.listeners=[]}}class jD{constructor(){this.queries=new wo(e=>_T(e),Mh),this.onlineState="Unknown",this.ku=new Set}}async function tC(t,e){const n=ue(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new UD),i)try{s.Nu=await n.onListen(r)}catch(o){const a=hy(o,`Initialization of query '${Jp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&dy(n)}async function nC(t,e){const n=ue(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function BD(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&dy(n)}function zD(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dy(t){t.ku.forEach(e=>{e.next()})}class rC{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class iC{constructor(e){this.key=e}}class sC{constructor(e){this.key=e}}class VD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=fe(),this.mutatedKeys=fe(),this.tc=ST(e),this.ec=new Vs(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new aw,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=$h(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?m!==v&&(r.track({type:3,doc:f}),E=!0):this.rc(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return f(h)-f(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new oo(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new aw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=fe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new sC(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new iC(r))}),n}hc(e){this.Yu=e.ir,this.Zu=fe();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return oo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class HD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qD{constructor(e){this.key=e,this.fc=!1}}class WD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new wo(a=>_T(a),Mh),this._c=new Map,this.mc=new Set,this.gc=new ut(Y.comparator),this.yc=new Map,this.Ic=new iy,this.Tc={},this.Ec=new Map,this.Ac=so.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function KD(t,e){const n=rO(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await yD(n.localStore,Pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await GD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&GT(n.remoteStore,o)}return i}async function GD(t,e,n,r,i){t.Rc=(h,d,f)=>async function(m,v,E,g){let p=v.view.sc(E);p.zi&&(p=await rw(m.localStore,v.query,!1).then(({documents:C})=>v.view.sc(C,p)));const w=g&&g.targetChanges.get(v.targetId),y=v.view.applyChanges(p,m.isPrimaryClient,w);return uw(m,v.targetId,y.cc),y.snapshot}(t,h,d,f);const s=await rw(t.localStore,e,!0),o=new VD(e,s.ir),a=o.sc(s.documents),l=Pl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);uw(t,n,u.cc);const c=new HD(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function QD(t,e){const n=ue(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Mh(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await rm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),QT(n.remoteStore,r.targetId),im(n,r.targetId)}).catch(xl)):(im(n,r.targetId),await rm(n.localStore,r.targetId,!0))}async function YD(t,e,n){const r=iO(t);try{const i=await function(s,o){const a=ue(s),l=mt.now(),u=o.reduce((d,f)=>d.add(f.key),fe());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Nr(),m=fe();return a.Zi.getEntries(d,u).next(v=>{f=v,f.forEach((E,g)=>{g.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const E=[];for(const g of o){const p=TN(g,c.get(g.key).overlayedDocument);p!=null&&E.push(new Ii(g.key,p,dT(p.value.mapValue),Un.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:CT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ut(Te)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Dl(r,i.changes),await Vh(r.remoteStore)}catch(i){const s=hy(i,"Failed to persist write");n.reject(s)}}async function oC(t,e){const n=ue(t);try{const r=await pD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ze(o.fc):i.removedDocuments.size>0&&(ze(o.fc),o.fc=!1))}),await Dl(n,r,e)}catch(r){await xl(r)}}function lw(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ue(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&dy(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XD(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ut(Y.comparator);o=o.insert(s,$t.newNoDocument(s,oe.min()));const a=fe().add(s),l=new jh(oe.min(),new Map,new ut(Te),o,a);await oC(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),fy(r)}else await rm(r.localStore,e,!1).then(()=>im(r,e,n)).catch(xl)}async function JD(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await fD(n.localStore,e);lC(n,r,null),aC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dl(n,i)}catch(i){await xl(i)}}async function ZD(t,e,n){const r=ue(t);try{const i=await function(s,o){const a=ue(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ze(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);lC(r,e,n),aC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dl(r,i)}catch(i){await xl(i)}}function aC(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function lC(t,e,n){const r=ue(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function im(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||uC(t,r)})}function uC(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(QT(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),fy(t))}function uw(t,e,n){for(const r of n)r instanceof iC?(t.Ic.addReference(r.key,e),eO(t,r)):r instanceof sC?(q("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||uC(t,r.key)):ee()}function eO(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(q("SyncEngine","New document in limbo: "+n),t.mc.add(r),fy(t))}function fy(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Y(je.fromString(e)),r=t.Ac.next();t.yc.set(r,new qD(n)),t.gc=t.gc.insert(n,r),GT(t.remoteStore,new ei(Pr(Lh(n.path)),r,"TargetPurposeLimboResolution",Kg.ct))}}async function Dl(t,e,n){const r=ue(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=oy.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>O.forEach(l,h=>O.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>O.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Al(c))throw c;q("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,s))}async function tO(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await HT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new z(A.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dl(n,r.er)}}function nO(t,e){const n=ue(t),r=n.yc.get(e);if(r&&r.fc)return fe().add(r.key);{let i=fe();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function rO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XD.bind(null,e),e.dc.nu=BD.bind(null,e.eventManager),e.dc.Pc=zD.bind(null,e.eventManager),e}function iO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZD.bind(null,e),e}class cw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dD(this.persistence,new cD,e.initialUser,this.serializer)}createPersistence(e){return new lD(sy.zs,this.serializer)}createSharedClientState(e){return new wD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tO.bind(null,this.syncEngine),await FD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jD}createDatastore(e){const n=Bh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new TD(i));var i;return function(s,o,a,l){return new ID(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>lw(this.syncEngine,a,0),o=sw.D()?new sw:new ED,new AD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new WD(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);q("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Nl(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class cC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=uT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pf(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await HT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lO(t);q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ow(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ow(e.remoteStore,s)),t._onlineComponents=e}function aO(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function lO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await pf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!aO(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await pf(t,new cw)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await pf(t,new cw);return t._offlineComponents}async function hC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await hw(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await hw(t,new sO))),t._onlineComponents}function uO(t){return hC(t).then(e=>e.syncEngine)}async function sm(t){const e=await hC(t),n=e.eventManager;return n.onListen=KD.bind(null,e.syncEngine),n.onUnlisten=QD.bind(null,e.syncEngine),n}function cO(t,e,n={}){const r=new hi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new cC({next:h=>{s.enqueueAndForget(()=>nC(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(A.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new rC(Lh(o.path),u,{includeMetadataChanges:!0,Ku:!0});return tC(i,c)}(await sm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dw=new Map;/**
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
 */function fC(t,e,n){if(!n)throw new z(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hO(t,e,n,r){if(e===!0&&r===!0)throw new z(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fw(t){if(!Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pw(t){if(Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hh(t);throw new z(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class mw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class qh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new LP;switch(n.type){case"firstParty":return new UP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dw.get(e);n&&(q("ComponentProvider","Removing Datastore"),dw.delete(e),n.terminate())}(this),Promise.resolve()}}function dO(t,e,n,r={}){var i;const s=(t=jn(t,qh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Lt.MOCK_USER;else{a=eS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new z(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Lt(u)}t._authCredentials=new MP(new lT(a,l))}}/**
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
 */class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class _o{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _o(this.firestore,e,this._query)}}class fi extends _o{constructor(e,n,r){super(e,n,Lh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new Y(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function pC(t,e,...n){if(t=rt(t),fC("collection","path",e),t instanceof qh){const r=je.fromString(e,...n);return pw(r),new fi(t,null,r)}{if(!(t instanceof Bt||t instanceof fi))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return pw(r),new fi(t.firestore,null,r)}}function jc(t,e,...n){if(t=rt(t),arguments.length===1&&(e=uT.A()),fC("doc","path",e),t instanceof qh){const r=je.fromString(e,...n);return fw(r),new Bt(t,null,new Y(r))}{if(!(t instanceof Bt||t instanceof fi))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return fw(r),new Bt(t.firestore,t instanceof fi?t.converter:null,new Y(r))}}/**
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
 */class fO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new WT(this,"async_queue_retry"),this.Xc=()=>{const n=ff();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=ff();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=ff();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new hi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Al(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw br("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=cy.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&ee()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function gw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class es extends qh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new fO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mC(this),this._firestoreClient.terminate()}}function pO(t,e){const n=typeof t=="object"?t:Tg(),r=typeof t=="string"?t:e||"(default)",i=vh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=X_("firestore");s&&dO(i,...s)}return i}function py(t){return t._firestoreClient||mC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mC(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new XP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,dC(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new oO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ao(gn.fromBase64String(e))}catch(n){throw new z(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ao(gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class my{constructor(e){this._methodName=e}}/**
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
 */class gy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */const mO=/^__.*__$/;class gO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new bl(e,this.data,n,this.fieldTransforms)}}class gC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class yy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new yy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Bc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(yC(this.ca)&&mO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class yO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bh(e)}ya(e,n,r,i=!1){return new yy({ca:e,methodName:n,ga:r,path:Ft.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kh(t){const e=t._freezeSettings(),n=Bh(t._databaseId);return new yO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vC(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);vy("Data must be an object, but it was:",o,r);const a=wC(r,o);let l,u;if(s.merge)l=new Zn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=om(e,h,n);if(!o.contains(d))throw new z(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_C(c,d)||c.push(d)}l=new Zn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new gO(new tn(a),l,u)}class Gh extends my{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gh}}function vO(t,e,n,r){const i=t.ya(1,e,n);vy("Data must be an object, but it was:",i,r);const s=[],o=tn.empty();us(r,(l,u)=>{const c=wy(e,l,n);u=rt(u);const h=i.da(c);if(u instanceof Gh)s.push(c);else{const d=Ol(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Zn(s);return new gC(o,a,i.fieldTransforms)}function wO(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[om(e,r,n)],l=[i];if(s.length%2!=0)throw new z(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(om(e,s[d])),l.push(s[d+1]);const u=[],c=tn.empty();for(let d=a.length-1;d>=0;--d)if(!_C(u,a[d])){const f=a[d];let m=l[d];m=rt(m);const v=o.da(f);if(m instanceof Gh)u.push(f);else{const E=Ol(m,v);E!=null&&(u.push(f),c.set(f,E))}}const h=new Zn(u);return new gC(c,h,o.fieldTransforms)}function EO(t,e,n,r=!1){return Ol(n,t.ya(r?4:3,e))}function Ol(t,e){if(EC(t=rt(t)))return vy("Unsupported field value:",e,t),wC(t,e);if(t instanceof my)return function(n,r){if(!yC(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ol(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yN(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=mt.fromDate(n);return{timestampValue:Fc(r.serializer,i)}}if(n instanceof mt){const i=new mt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fc(r.serializer,i)}}if(n instanceof gy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ao)return{bytesValue:FT(r.serializer,n._byteString)};if(n instanceof Bt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ry(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Hh(n)}`)}(t,e)}function wC(t,e){const n={};return cT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,i)=>{const s=Ol(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function EC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof gy||t instanceof ao||t instanceof Bt||t instanceof my)}function vy(t,e,n){if(!EC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function om(t,e,n){if((e=rt(e))instanceof Wh)return e._internalPath;if(typeof e=="string")return wy(t,e);throw Bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _O=new RegExp("[~\\*/\\[\\]]");function wy(t,e,n){if(e.search(_O)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wh(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(A.INVALID_ARGUMENT,a+t+l)}function _C(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class SC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ey("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SO extends SC{data(){return super.data()}}function Ey(t,e){return typeof e=="string"?wy(t,e):e instanceof Wh?e._internalPath:e._delegate._internalPath}/**
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
 */function TO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _y{}class CO extends _y{}function kO(t,e,...n){let r=[];e instanceof _y&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Sy).length,o=i.filter(a=>a instanceof Qh).length;if(s>1||s>0&&o>0)throw new z(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Qh extends CO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qh(e,n,r)}_apply(e){const n=this._parse(e);return TC(e._query,n),new _o(e.firestore,e.converter,Yp(e._query,n))}_parse(e){const n=Kh(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){vw(c,u);const d=[];for(const f of c)d.push(yw(a,i,f));h={arrayValue:{values:d}}}else h=yw(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||vw(c,u),h=EO(o,s,c,u==="in"||u==="not-in");return lt.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function IO(t,e,n){const r=e,i=Ey("where",t);return Qh._create(i,r,n)}class Sy extends _y{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)TC(s,a),s=Yp(s,a)}(e._query,n),new _o(e.firestore,e.converter,Yp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yw(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new z(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ET(e)&&n.indexOf("/")!==-1)throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!Y.isDocumentKey(r))throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return j0(t,new Y(r))}if(n instanceof Bt)return j0(t,n._key);throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hh(n)}.`)}function vw(t,e){if(!Array.isArray(t)||t.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TC(t,e){if(e.isInequality()){const r=Zg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new z(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=wT(t);s!==null&&xO(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xO(t,e,n){if(!n.isEqual(e))throw new z(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class AO{convertValue(e,n="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gy(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=wi(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);ze(VT(r));const i=new Ja(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||br(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function CC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kC extends SC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ey("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bu extends kC{data(e={}){return super.data(e)}}class RO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bu(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Bu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:bO(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function PO(t){t=jn(t,Bt);const e=jn(t.firestore,es);return cO(py(e),t._key).then(n=>xC(e,t,n))}class IC extends AO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function NO(t,e,n){t=jn(t,Bt);const r=jn(t.firestore,es),i=CC(t.converter,e,n);return Ty(r,[vC(Kh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Un.none())])}function DO(t,e,n,...r){t=jn(t,Bt);const i=jn(t.firestore,es),s=Kh(i);let o;return o=typeof(e=rt(e))=="string"||e instanceof Wh?wO(s,"updateDoc",t._key,e,n,r):vO(s,"updateDoc",t._key,e),Ty(i,[o.toMutation(t._key,Un.exists(!0))])}function OO(t,e){const n=jn(t.firestore,es),r=jc(t),i=CC(t.converter,e);return Ty(n,[vC(Kh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function LO(t,...e){var n,r,i;t=rt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(gw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Bt)u=jn(t.firestore,es),c=Lh(t._key.path),l={next:h=>{e[o]&&e[o](xC(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jn(t,_o);u=jn(h.firestore,es),c=h._query;const d=new IC(u);l={next:f=>{e[o]&&e[o](new RO(u,d,h,f))},error:e[o+1],complete:e[o+2]},TO(t._query)}return function(h,d,f,m){const v=new cC(m),E=new rC(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>tC(await sm(h),E)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>nC(await sm(h),E))}}(py(u),c,a,l)}function Ty(t,e){return function(n,r){const i=new hi;return n.asyncQueue.enqueueAndForget(async()=>YD(await uO(n),r,i)),i.promise}(py(t),e)}function xC(t,e,n){const r=n.docs.get(e._key),i=new IC(t);return new kC(t,i,e._key,r,new sa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){vo=n})(as),Yi(new yi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new es(new $P(n.getProvider("auth-internal")),new BP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ir(L0,"3.13.0",t),ir(L0,"3.13.0","esm2017")})();var MO="firebase",$O="9.23.0";/**
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
 */ir(MO,$O,"app");function Cy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function AC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FO=AC,RC=new gl("auth","Firebase",AC());/**
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
 */const zc=new _g("@firebase/auth");function UO(t,...e){zc.logLevel<=Se.WARN&&zc.warn(`Auth (${as}): ${t}`,...e)}function zu(t,...e){zc.logLevel<=Se.ERROR&&zc.error(`Auth (${as}): ${t}`,...e)}/**
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
 */function Hn(t,...e){throw ky(t,...e)}function or(t,...e){return ky(t,...e)}function jO(t,e,n){const r=Object.assign(Object.assign({},FO()),{[e]:n});return new gl("auth","Firebase",r).create(e,{appName:t.name})}function ky(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return RC.create(t,...e)}function Z(t,e,...n){if(!t)throw ky(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zu(e),new Error(e)}function Dr(t,e){t||wr(e)}/**
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
 */function am(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function BO(){return ww()==="http:"||ww()==="https:"}function ww(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BO()||hR()||"connection"in navigator)?navigator.onLine:!0}function VO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dr(n>e,"Short delay should be less than long delay!"),this.isMobile=uR()||dR()}get(){return zO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Iy(t,e){Dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qO=new Ll(3e4,6e4);function So(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function To(t,e,n,r,i={}){return PC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bC.fetch()(NC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function PC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HO),e);try{const i=new WO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jO(t,c,u);Hn(t,c)}}catch(i){if(i instanceof ur)throw i;Hn(t,"network-request-failed",{message:String(i)})}}async function Ml(t,e,n,r,i={}){const s=await To(t,e,n,r,i);return"mfaPendingCredential"in s&&Hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function NC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Iy(t.config,i):`${t.config.apiScheme}://${i}`}class WO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(or(this.auth,"network-request-failed")),qO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=or(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function KO(t,e){return To(t,"POST","/v1/accounts:delete",e)}async function GO(t,e){return To(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ea(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QO(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=xy(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ea(mf(i.auth_time)),issuedAtTime:Ea(mf(i.iat)),expirationTime:Ea(mf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mf(t){return Number(t)*1e3}function xy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Q_(n);return i?JSON.parse(i):(zu("Failed to decode base64 JWT payload"),null)}catch(i){return zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YO(t){const e=xy(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ur&&XO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class DC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nl(t,GO(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t2(s.providerUserInfo):[],a=e2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new DC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ZO(t){const e=rt(t);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t2(t){return t.map(e=>{var{providerId:n}=e,r=Cy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function n2(t,e){const n=await PC(t,{},async()=>{const r=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=NC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class rl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new rl;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rl,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function jr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new DC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nl(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QO(this,e)}reload(){return ZO(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nl(this,KO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:y,isAnonymous:C,providerData:R,stsTokenManager:b}=n;Z(w&&b,e,"internal-error");const L=rl.fromJSON(this.name,b);Z(typeof w=="string",e,"internal-error"),jr(h,e.name),jr(d,e.name),Z(typeof y=="boolean",e,"internal-error"),Z(typeof C=="boolean",e,"internal-error"),jr(f,e.name),jr(m,e.name),jr(v,e.name),jr(E,e.name),jr(g,e.name),jr(p,e.name);const G=new zi({uid:w,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:C,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:L,createdAt:g,lastLoginAt:p});return R&&Array.isArray(R)&&(G.providerData=R.map(K=>Object.assign({},K))),E&&(G._redirectEventId=E),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new rl;i.updateFromServerResponse(n);const s=new zi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vc(s),s}}/**
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
 */const Ew=new Map;function Er(t){Dr(t instanceof Function,"Expected a class definition");let e=Ew.get(t);return e?(Dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ew.set(t,e),e)}/**
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
 */class OC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OC.type="NONE";const _w=OC;/**
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
 */function Vu(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(Er(_w),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Er(_w);const o=Vu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=zi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Hs(s,e,r))}}/**
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
 */function Sw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($C(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UC(e))return"Blackberry";if(jC(e))return"Webos";if(Ay(e))return"Safari";if((e.includes("chrome/")||MC(e))&&!e.includes("edge/"))return"Chrome";if(FC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LC(t=Vt()){return/firefox\//i.test(t)}function Ay(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MC(t=Vt()){return/crios\//i.test(t)}function $C(t=Vt()){return/iemobile/i.test(t)}function FC(t=Vt()){return/android/i.test(t)}function UC(t=Vt()){return/blackberry/i.test(t)}function jC(t=Vt()){return/webos/i.test(t)}function Yh(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function r2(t=Vt()){var e;return Yh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i2(){return fR()&&document.documentMode===10}function BC(t=Vt()){return Yh(t)||FC(t)||jC(t)||UC(t)||/windows phone/i.test(t)||$C(t)}function s2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zC(t,e=[]){let n;switch(t){case"Browser":n=Sw(Vt());break;case"Worker":n=`${Sw(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}async function VC(t,e){return To(t,"GET","/v2/recaptchaConfig",So(t,e))}function Tw(t){return t!==void 0&&t.enterprise!==void 0}class HC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function o2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=or("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",o2().appendChild(r)})}function a2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const l2="https://www.google.com/recaptcha/enterprise.js?render=",u2="recaptcha-enterprise",c2="NO_RECAPTCHA";class WC{constructor(e){this.type=u2,this.auth=Co(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{VC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new HC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Tw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(c2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Tw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qC(l2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hc(t,e,n,r=!1){const i=new WC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class h2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class d2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cw(this),this.idTokenSubscription=new Cw(this),this.beforeStateQueue=new h2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}async initializeRecaptchaConfig(){const e=await VC(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new HC(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new WC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Co(t){return rt(t)}class Cw{constructor(e){this.auth=e,this.observer=null,this.addObserver=ER(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function f2(t,e){const n=vh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(kc(s,e??{}))return i;Hn(i,"already-initialized")}return n.initialize({options:e})}function p2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m2(t,e,n){const r=Co(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=KC(e),{host:o,port:a}=g2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||y2()}function KC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function g2(t){const e=KC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kw(o)}}}function kw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function y2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ry{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function v2(t,e){return To(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gf(t,e){return Ml(t,"POST","/v1/accounts:signInWithPassword",So(t,e))}/**
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
 */async function w2(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",So(t,e))}async function E2(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",So(t,e))}/**
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
 */class il extends Ry{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hc(e,r,"signInWithPassword");return gf(e,i)}else return gf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hc(e,r,"signInWithPassword");return gf(e,s)}else return Promise.reject(i)});case"emailLink":return w2(e,{email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return v2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E2(e,{idToken:n,email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qs(t,e){return Ml(t,"POST","/v1/accounts:signInWithIdp",So(t,e))}/**
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
 */const _2="http://localhost";class ts extends Ry{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:_2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yl(n)}return e}}/**
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
 */function S2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T2(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class by{constructor(e){var n,r,i,s,o,a;const l=Zo(ea(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=S2((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=T2(e);try{return new by(n)}catch{return null}}}/**
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
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,n){return il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=by.parseLink(n);return Z(r,"argument-error"),il._fromEmailAndCode(e,r.code,r.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class GC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $l extends GC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends $l{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class Qr extends $l{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends $l{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function yf(t,e){return Ml(t,"POST","/v1/accounts:signUp",So(t,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zi._fromIdTokenResponse(e,r,i),o=Iw(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iw(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qc extends ur{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qc(e,n,r,i)}}function QC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,s,e,r):s})}async function C2(t,e,n=!1){const r=await nl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function k2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await nl(t,QC(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=xy(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Hn(r,"user-mismatch"),s}}/**
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
 */async function YC(t,e,n=!1){const r="signIn",i=await QC(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function I2(t,e){return YC(Co(t),e)}async function x2(t,e,n){var r;const i=Co(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Hc(i,s,"signUpPassword");o=yf(i,u)}else o=yf(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Hc(i,s,"signUpPassword");return yf(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await ns._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function A2(t,e,n){return I2(rt(t),ko.credential(e,n))}function R2(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function b2(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}const Wc="__sak";/**
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
 */class XC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function P2(){const t=Vt();return Ay(t)||Yh(t)}const N2=1e3,D2=10;class JC extends XC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=P2()&&s2(),this.fallbackToPolling=BC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);i2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,D2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},N2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}JC.type="LOCAL";const O2=JC;/**
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
 */class ZC extends XC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ZC.type="SESSION";const ek=ZC;/**
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
 */function L2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await L2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xh.receivers=[];/**
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
 */function Py(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class M2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Py("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ar(){return window}function $2(t){ar().location.href=t}/**
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
 */function tk(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function F2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function j2(){return tk()?self:null}/**
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
 */const nk="firebaseLocalStorageDb",B2=1,Kc="firebaseLocalStorage",rk="fbase_key";class Fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jh(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function z2(){const t=indexedDB.deleteDatabase(nk);return new Fl(t).toPromise()}function lm(){const t=indexedDB.open(nk,B2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kc,{keyPath:rk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await z2(),e(await lm()))})})}async function xw(t,e,n){const r=Jh(t,!0).put({[rk]:e,value:n});return new Fl(r).toPromise()}async function V2(t,e){const n=Jh(t,!1).get(e),r=await new Fl(n).toPromise();return r===void 0?null:r.value}function Aw(t,e){const n=Jh(t,!0).delete(e);return new Fl(n).toPromise()}const H2=800,q2=3;class ik{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>q2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xh._getInstance(j2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await F2(),!this.activeServiceWorker)return;this.sender=new M2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lm();return await xw(e,Wc,"1"),await Aw(e,Wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>V2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Aw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jh(i,!1).getAll();return new Fl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ik.type="LOCAL";const W2=ik;new Ll(3e4,6e4);/**
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
 */function K2(t,e){return e?Er(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ny extends Ry{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function G2(t){return YC(t.auth,new Ny(t),t.bypassAuthState)}function Q2(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),k2(n,new Ny(t),t.bypassAuthState)}async function Y2(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),C2(n,new Ny(t),t.bypassAuthState)}/**
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
 */class sk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G2;case"linkViaPopup":case"linkViaRedirect":return Y2;case"reauthViaPopup":case"reauthViaRedirect":return Q2;default:Hn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const X2=new Ll(2e3,1e4);class bs extends sk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Py();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X2.get())};e()}}bs.currentPopupAction=null;/**
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
 */const J2="pendingRedirect",Hu=new Map;class Z2 extends sk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hu.get(this.auth._key());if(!e){try{const r=await eL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hu.set(this.auth._key(),e)}return this.bypassAuthState||Hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eL(t,e){const n=rL(e),r=nL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tL(t,e){Hu.set(t._key(),e)}function nL(t){return Er(t._redirectPersistence)}function rL(t){return Vu(J2,t.config.apiKey,t.name)}async function iL(t,e,n=!1){const r=Co(t),i=K2(r,e),o=await new Z2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sL=10*60*1e3;class oL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ok(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(or(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rw(e))}saveEventToCache(e){this.cachedEventUids.add(Rw(e)),this.lastProcessedEventTime=Date.now()}}function Rw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ok({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ok(t);default:return!1}}/**
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
 */async function lL(t,e={}){return To(t,"GET","/v1/projects",e)}/**
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
 */const uL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cL=/^https?/;async function hL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lL(t);for(const n of e)try{if(dL(n))return}catch{}Hn(t,"unauthorized-domain")}function dL(t){const e=am(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cL.test(n))return!1;if(uL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const fL=new Ll(3e4,6e4);function bw(){const t=ar().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pL(t){return new Promise((e,n)=>{var r,i,s;function o(){bw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bw(),n(or(t,"network-request-failed"))},timeout:fL.get()})}if(!((i=(r=ar().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ar().gapi)===null||s===void 0)&&s.load)o();else{const a=a2("iframefcb");return ar()[a]=()=>{gapi.load?o():n(or(t,"network-request-failed"))},qC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw qu=null,e})}let qu=null;function mL(t){return qu=qu||pL(t),qu}/**
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
 */const gL=new Ll(5e3,15e3),yL="__/auth/iframe",vL="emulator/auth/iframe",wL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _L(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Iy(e,vL):`https://${t.config.authDomain}/${yL}`,r={apiKey:e.apiKey,appName:t.name,v:as},i=EL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yl(r).slice(1)}`}async function SL(t){const e=await mL(t),n=ar().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:_L(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=or(t,"network-request-failed"),a=ar().setTimeout(()=>{s(o)},gL.get());function l(){ar().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const TL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CL=500,kL=600,IL="_blank",xL="http://localhost";class Pw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AL(t,e,n,r=CL,i=kL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Vt().toLowerCase();n&&(a=MC(u)?IL:n),LC(u)&&(e=e||xL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(r2(u)&&a!=="_self")return RL(e||"",a),new Pw(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Pw(h)}function RL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bL="__/auth/handler",PL="emulator/auth/handler",NL=encodeURIComponent("fac");async function Nw(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:i};if(e instanceof GC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof $l){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${NL}=${encodeURIComponent(l)}`:"";return`${DL(t)}?${yl(a).slice(1)}${u}`}function DL({config:t}){return t.emulator?Iy(t,PL):`https://${t.authDomain}/${bL}`}/**
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
 */const vf="webStorageSupport";class OL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ek,this._completeRedirectFn=iL,this._overrideRedirectResult=tL}async _openPopup(e,n,r,i){var s;Dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nw(e,n,r,am(),i);return AL(e,o,Py())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nw(e,n,r,am(),i);return $2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SL(e),r=new oL(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vf,{type:vf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vf];o!==void 0&&n(!!o),Hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return BC()||Ay()||Yh()}}const LL=OL;var Dw="@firebase/auth",Ow="0.23.2";/**
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
 */class ML{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $L(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FL(t){Yi(new yi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zC(t)},u=new d2(r,i,s,l);return p2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yi(new yi("auth-internal",e=>{const n=Co(e.getProvider("auth").getImmediate());return(r=>new ML(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Dw,Ow,$L(t)),ir(Dw,Ow,"esm2017")}/**
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
 */const UL=5*60,jL=Z_("authIdTokenMaxAge")||UL;let Lw=null;const BL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jL)return;const i=n==null?void 0:n.token;Lw!==i&&(Lw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zL(t=Tg()){const e=vh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=f2(t,{popupRedirectResolver:LL,persistence:[W2,O2,ek]}),r=Z_("authTokenSyncURL");if(r){const s=BL(r);b2(n,s,()=>s(n.currentUser)),R2(n,o=>s(o))}const i=Y_("auth");return i&&m2(n,`http://${i}`),n}FL("Browser");/**
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
 */const ak="firebasestorage.googleapis.com",lk="storageBucket",VL=2*60*1e3,HL=10*60*1e3;/**
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
 */class tt extends ur{constructor(e,n,r=0){super(wf(e),`Firebase Storage: ${n} (${wf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function wf(t){return"storage/"+t}function Dy(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function qL(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function WL(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function GL(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QL(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function YL(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XL(){return new tt(et.CANCELED,"User canceled the upload/download.")}function JL(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function ZL(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function eM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lk+"' property when initializing the app?")}function tM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nM(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function um(t){return new tt(et.INVALID_ARGUMENT,t)}function uk(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function iM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _a(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ho(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw ZL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},v=n===ak?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${E}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:f,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<w.length;y++){const C=w[y],R=C.regex.exec(e);if(R){const b=R[C.indices.bucket];let L=R[C.indices.path];L||(L=""),r=new hn(b,L),C.postModify(r);break}}if(r==null)throw JL(e);return r}}class sM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function d(){s&&clearTimeout(s)}function f(E,...g){if(u){d();return}if(E){d(),c.call(null,E,...g);return}if(l()||o){d(),c.call(null,E,...g);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let m=!1;function v(E){m||(m=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function aM(t){t(!1)}/**
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
 */function lM(t){return t!==void 0}function uM(t){return typeof t=="object"&&!Array.isArray(t)}function Oy(t){return typeof t=="string"||t instanceof String}function Mw(t){return Ly()&&t instanceof Blob}function Ly(){return typeof Blob<"u"&&!cR()}function $w(t,e,n,r){if(r<e)throw um(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw um(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function My(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ck(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Vi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vi||(Vi={}));/**
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
 */function cM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class hM{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Eu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Vi.NO_ERROR,l=s.getStatus();if(!a||cM(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Vi.ABORT;r(!1,new Eu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Eu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Dy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?uk():XL();o(l)}else{const l=YL();o(l)}};this.canceled_?n(!1,new Eu(!1,null,!0)):this.backoffId_=oM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Eu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gM(t,e,n,r,i,s,o=!0){const a=ck(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return pM(u,e),dM(u,n),fM(u,s),mM(u,r),new hM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function yM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vM(...t){const e=yM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ly())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function EM(t){if(typeof atob>"u")throw rM("base-64");return atob(t)}/**
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
 */const er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ef{constructor(e,n){this.data=e,this.contentType=n||null}}function _M(t,e){switch(t){case er.RAW:return new Ef(hk(e));case er.BASE64:case er.BASE64URL:return new Ef(dk(t,e));case er.DATA_URL:return new Ef(TM(e),CM(e))}throw Dy()}function hk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function SM(t){let e;try{e=decodeURIComponent(t)}catch{throw _a(er.DATA_URL,"Malformed data URL.")}return hk(e)}function dk(t,e){switch(t){case er.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case er.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EM(e)}catch(i){throw i.message.includes("polyfill")?i:_a(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class fk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _a(er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function TM(t){const e=new fk(t);return e.base64?dk(er.BASE64,e.rest):SM(e.rest)}function CM(t){return new fk(t).contentType}function kM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Xr{constructor(e,n){let r=0,i="";Mw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mw(this.data_)){const r=this.data_,i=wM(r,e,n);return i===null?null:new Xr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xr(r,!0)}}static getBlob(...e){if(Ly()){const n=e.map(r=>r instanceof Xr?r.data_:r);return new Xr(vM.apply(null,n))}else{const n=e.map(o=>Oy(o)?_M(er.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Xr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function pk(t){let e;try{e=JSON.parse(t)}catch{return null}return uM(e)?e:null}/**
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
 */function IM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function AM(t,e){return e}class Ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||AM}}let _u=null;function RM(t){return!Oy(t)||t.length<2?t:mk(t)}function gk(){if(_u)return _u;const t=[];t.push(new Ht("bucket")),t.push(new Ht("generation")),t.push(new Ht("metageneration")),t.push(new Ht("name","fullPath",!0));function e(s,o){return RM(o)}const n=new Ht("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ht("size");return i.xform=r,t.push(i),t.push(new Ht("timeCreated")),t.push(new Ht("updated")),t.push(new Ht("md5Hash",null,!0)),t.push(new Ht("cacheControl",null,!0)),t.push(new Ht("contentDisposition",null,!0)),t.push(new Ht("contentEncoding",null,!0)),t.push(new Ht("contentLanguage",null,!0)),t.push(new Ht("contentType",null,!0)),t.push(new Ht("metadata","customMetadata",!0)),_u=t,_u}function bM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new hn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function PM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return bM(r,t),r}function yk(t,e,n){const r=pk(e);return r===null?null:PM(t,r,n)}function NM(t,e,n,r){const i=pk(e);if(i===null||!Oy(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=My(d,n,r),m=ck({alt:"media",token:u});return f+m})[0]}function DM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class vk{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wk(t){if(!t)throw Dy()}function OM(t,e){function n(r,i){const s=yk(t,i,e);return wk(s!==null),s}return n}function LM(t,e){function n(r,i){const s=yk(t,i,e);return wk(s!==null),NM(s,i,t.host,t._protocol)}return n}function Ek(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=GL():i=KL():n.getStatus()===402?i=WL(t.bucket):n.getStatus()===403?i=QL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function MM(t){const e=Ek(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=qL(t.path)),s.serverResponse=i.serverResponse,s}return n}function $M(t,e,n){const r=e.fullServerUrl(),i=My(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vk(i,s,LM(t,n),o);return a.errorHandler=MM(e),a}function FM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function UM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=FM(null,e)),r}function jM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let y=0;y<2;y++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=UM(e,r,i),c=DM(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Xr.getBlob(h,r,d);if(f===null)throw tM();const m={name:u.fullPath},v=My(s,t.host,t._protocol),E="POST",g=t.maxUploadRetryTime,p=new vk(v,E,OM(t,n),g);return p.urlParams=m,p.headers=o,p.body=f.uploadData(),p.errorHandler=Ek(e),p}class BM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ho("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ho("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ho("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ho("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ho("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zM extends BM{initXhr(){this.xhr_.responseType="text"}}function _k(){return new zM}/**
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
 */class rs{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mk(this._location.path)}get storage(){return this._service}get parent(){const e=IM(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iM(e)}}function VM(t,e,n){t._throwIfRoot("uploadBytes");const r=jM(t.storage,t._location,gk(),new Xr(e,!0),n);return t.storage.makeRequestWithTokens(r,_k).then(i=>({metadata:i,ref:t}))}function HM(t){t._throwIfRoot("getDownloadURL");const e=$M(t.storage,t._location,gk());return t.storage.makeRequestWithTokens(e,_k).then(n=>{if(n===null)throw nM();return n})}function qM(t,e){const n=xM(t._location.path,e),r=new hn(t._location.bucket,n);return new rs(t.storage,r)}/**
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
 */function WM(t){return/^[A-Za-z]+:\/\//.test(t)}function KM(t,e){return new rs(t,e)}function Sk(t,e){if(t instanceof $y){const n=t;if(n._bucket==null)throw eM();const r=new rs(n,n._bucket);return e!=null?Sk(r,e):r}else return e!==void 0?qM(t,e):t}function GM(t,e){if(e&&WM(e)){if(t instanceof $y)return KM(t,e);throw um("To use ref(service, url), the first argument must be a Storage instance.")}else return Sk(t,e)}function Fw(t,e){const n=e==null?void 0:e[lk];return n==null?null:hn.makeFromBucketSpec(n,t)}function QM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:eS(i,t.app.options.projectId))}class $y{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ak,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VL,this._maxUploadRetryTime=HL,this._requests=new Set,i!=null?this._bucket=hn.makeFromBucketSpec(i,this._host):this._bucket=Fw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=Fw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$w("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$w("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new sM(uk());{const o=gM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Uw="@firebase/storage",jw="0.11.2";/**
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
 */const Tk="storage";function YM(t,e,n){return t=rt(t),VM(t,e,n)}function XM(t){return t=rt(t),HM(t)}function JM(t,e){return t=rt(t),GM(t,e)}function ZM(t=Tg(),e){t=rt(t);const r=vh(t,Tk).getImmediate({identifier:e}),i=X_("storage");return i&&e$(r,...i),r}function e$(t,e,n,r={}){QM(t,e,n,r)}function t$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $y(n,r,i,e,as)}function n$(){Yi(new yi(Tk,t$,"PUBLIC").setMultipleInstances(!0)),ir(Uw,jw,""),ir(Uw,jw,"esm2017")}n$();const r$={apiKey:"AIzaSyDjp2naVdYBa2RhxnnLuiDBo3Y1kJvg3Ro",authDomain:"coordinates-10459.firebaseapp.com",projectId:"coordinates-10459",storageBucket:"coordinates-10459.appspot.com",messagingSenderId:"17389845792",appId:"1:17389845792:web:324711e8abcbb7c6aeeb45",measurementId:"G-C4T1LXJLHM"},Fy=rS(r$),Bw=zL(Fy),sl=pO(Fy),i$=ZM(Fy),qn=I.createContext(),s$=({children:t})=>{const[e,n]=I.useState("light"),[r,i]=I.useState("disable");async function s(){n(e==="light"?"dark":"light")}function o(){i(r==="disable"?"enable":"disable")}return _.jsx(qn.Provider,{value:{theme:e,toggleTheme:s,toggleHamburguer:o,hamburguer:r},children:t})};/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function We(){return We=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},We.apply(this,arguments)}var st;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(st||(st={}));const zw="popstate";function o$(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ol("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return l$(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function a$(){return Math.random().toString(36).substr(2,8)}function Vw(t,e){return{usr:t.state,key:t.key,idx:e}}function ol(t,e,n,r){return n===void 0&&(n=null),We({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lr(e):e,{state:n,key:e&&e.key||r||a$()})}function is(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function l$(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=st.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(We({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=st.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:g})}function d(E,g){a=st.Push;let p=ol(v.location,E,g);n&&n(p,E),u=c()+1;let w=Vw(p,u),y=v.createHref(p);try{o.pushState(w,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(y)}s&&l&&l({action:a,location:v.location,delta:1})}function f(E,g){a=st.Replace;let p=ol(v.location,E,g);n&&n(p,E),u=c();let w=Vw(p,u),y=v.createHref(p);o.replaceState(w,"",y),s&&l&&l({action:a,location:v.location,delta:0})}function m(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:is(E);return he(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zw,h),l=E,()=>{i.removeEventListener(zw,h),l=null}},createHref(E){return e(i,E)},createURL:m,encodeLocation(E){let g=m(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:f,go(E){return o.go(E)}};return v}var dt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dt||(dt={}));const u$=new Set(["lazy","caseSensitive","path","id","index","children"]);function c$(t){return t.index===!0}function cm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),c$(i)){let l=We({},i,e(i),{id:a});return r[a]=l,l}else{let l=We({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=cm(i.children,e,o,r)),l}})}function Ps(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Lr(e):e,i=Io(r.pathname||"/",n);if(i==null)return null;let s=Ck(t);h$(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=E$(s[a],T$(i));return o}function Ck(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Tr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ck(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:v$(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of kk(s.path))i(s,o,l)}),e}function kk(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=kk(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function h$(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:w$(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d$=/^:\w+$/,f$=3,p$=2,m$=1,g$=10,y$=-2,Hw=t=>t==="*";function v$(t,e){let n=t.split("/"),r=n.length;return n.some(Hw)&&(r+=y$),e&&(r+=p$),n.filter(i=>!Hw(i)).reduce((i,s)=>i+(d$.test(s)?f$:s===""?m$:g$),r)}function w$(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function E$(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=_$({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Tr([i,c.pathname]),pathnameBase:x$(Tr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Tr([i,c.pathnameBase]))}return s}function _$(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=S$(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=C$(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function S$(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function T$(t){try{return decodeURI(t)}catch(e){return lo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function C$(t,e){try{return decodeURIComponent(t)}catch(n){return lo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Io(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function k$(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Lr(t):t;return{pathname:n?n.startsWith("/")?n:I$(n,e):e,search:A$(r),hash:R$(i)}}function I$(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _f(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ul(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Lr(t):(i=We({},t),he(!i.pathname||!i.pathname.includes("?"),_f("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),_f("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),_f("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=k$(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),x$=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),A$=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,R$=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Uy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ik(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xk=["post","put","patch","delete"],b$=new Set(xk),P$=["get",...xk],N$=new Set(P$),D$=new Set([301,302,303,307,308]),O$=new Set([307,308]),Sf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},L$={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Su={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ak=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M$=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function $$(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;he(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=k=>({hasErrorBoundary:T(k)})}else i=M$;let s={},o=cm(t.routes,i,void 0,s),a,l=t.basename||"/",u=We({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,f=null,m=null,v=t.hydrationData!=null,E=Ps(o,t.history.location,l),g=null;if(E==null){let T=Sn(404,{pathname:t.history.location.pathname}),{matches:k,route:P}=Jw(o);E=k,g={[P.id]:T}}let p=!E.some(T=>T.route.lazy)&&(!E.some(T=>T.route.loader)||t.hydrationData!=null),w,y={historyAction:t.history.action,location:t.history.location,matches:E,initialized:p,navigation:Sf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},C=st.Pop,R=!1,b,L=!1,G=!1,K=[],De=[],ie=new Map,be=0,Oe=-1,Ce=new Map,Pe=new Set,Ne=new Map,N=new Map,V=new Map,Q=!1;function ye(){return c=t.history.listen(T=>{let{action:k,location:P,delta:H}=T;if(Q){Q=!1;return}lo(V.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let le=hs({currentLocation:y.location,nextLocation:P,historyAction:k});if(le&&H!=null){Q=!0,t.history.go(H*-1),Fr(le,{state:"blocked",location:P,proceed(){Fr(le,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(H)},reset(){let te=new Map(y.blockers);te.set(le,Su),$({blockers:te})}});return}return M(k,P)}),y.initialized||M(st.Pop,y.location),w}function F(){c&&c(),h.clear(),b&&b.abort(),y.fetchers.forEach((T,k)=>hr(k)),y.blockers.forEach((T,k)=>He(k))}function j(T){return h.add(T),()=>h.delete(T)}function $(T){y=We({},y,T),h.forEach(k=>k(y))}function X(T,k){var P,H;let le=y.actionData!=null&&y.navigation.formMethod!=null&&On(y.navigation.formMethod)&&y.navigation.state==="loading"&&((P=T.state)==null?void 0:P._isRedirect)!==!0,te;k.actionData?Object.keys(k.actionData).length>0?te=k.actionData:te=null:le?te=y.actionData:te=null;let se=k.loaderData?Xw(y.loaderData,k.loaderData,k.matches||[],k.errors):y.loaderData,ne=new Map;V.clear();let W=R===!0||y.navigation.formMethod!=null&&On(y.navigation.formMethod)&&((H=T.state)==null?void 0:H._isRedirect)!==!0;a&&(o=a,a=void 0),L||C===st.Pop||(C===st.Push?t.history.push(T,T.state):C===st.Replace&&t.history.replace(T,T.state)),$(We({},k,{actionData:te,loaderData:se,historyAction:C,location:T,initialized:!0,navigation:Sf,revalidation:"idle",restoreScrollPosition:nv(T,k.matches||y.matches),preventScrollReset:W,blockers:ne})),C=st.Pop,R=!1,L=!1,G=!1,K=[],De=[]}async function S(T,k){if(typeof T=="number"){t.history.go(T);return}let P=hm(y.location,y.matches,l,u.v7_prependBasename,T,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:H,submission:le,error:te}=qw(u.v7_normalizeFormMethod,!1,P,k),se=y.location,ne=ol(y.location,H,k&&k.state);ne=We({},ne,t.history.encodeLocation(ne));let W=k&&k.replace!=null?k.replace:void 0,$e=st.Push;W===!0?$e=st.Replace:W===!1||le!=null&&On(le.formMethod)&&le.formAction===y.location.pathname+y.location.search&&($e=st.Replace);let ke=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ln=hs({currentLocation:se,nextLocation:ne,historyAction:$e});if(ln){Fr(ln,{state:"blocked",location:ne,proceed(){Fr(ln,{state:"proceeding",proceed:void 0,reset:void 0,location:ne}),S(T,k)},reset(){let yt=new Map(y.blockers);yt.set(ln,Su),$({blockers:yt})}});return}return await M($e,ne,{submission:le,pendingError:te,preventScrollReset:ke,replace:k&&k.replace})}function de(){if(me(),$({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){M(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}M(C||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function M(T,k,P){b&&b.abort(),b=null,C=T,L=(P&&P.startUninterruptedRevalidation)===!0,kI(y.location,y.matches),R=(P&&P.preventScrollReset)===!0;let H=a||o,le=P&&P.overrideNavigation,te=Ps(H,k,l);if(!te){let yt=Sn(404,{pathname:k.pathname}),{matches:Zt,route:Wn}=Jw(H);En(),X(k,{matches:Zt,loaderData:{},errors:{[Wn.id]:yt}});return}if(y.initialized&&!G&&z$(y.location,k)&&!(P&&P.submission&&On(P.submission.formMethod))){X(k,{matches:te});return}b=new AbortController;let se=Wo(t.history,k,b.signal,P&&P.submission),ne,W;if(P&&P.pendingError)W={[Ns(te).route.id]:P.pendingError};else if(P&&P.submission&&On(P.submission.formMethod)){let yt=await Ve(se,k,P.submission,te,{replace:P.replace});if(yt.shortCircuited)return;ne=yt.pendingActionData,W=yt.pendingActionError,le=Tu(k,P.submission),se=new Request(se.url,{signal:se.signal})}let{shortCircuited:$e,loaderData:ke,errors:ln}=await Ee(se,k,te,le,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,ne,W);$e||(b=null,X(k,We({matches:te},ne?{actionData:ne}:{},{loaderData:ke,errors:ln})))}async function Ve(T,k,P,H,le){le===void 0&&(le={}),me();let te=K$(k,P);$({navigation:te});let se,ne=fm(H,k);if(!ne.route.action&&!ne.route.lazy)se={type:dt.error,error:Sn(405,{method:T.method,pathname:k.pathname,routeId:ne.route.id})};else if(se=await qo("action",T,ne,H,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(Ws(se)){let W;return le&&le.replace!=null?W=le.replace:W=se.location===y.location.pathname+y.location.search,await ce(y,se,{submission:P,replace:W}),{shortCircuited:!0}}if(Sa(se)){let W=Ns(H,ne.route.id);return(le&&le.replace)!==!0&&(C=st.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:se.error}}}if($i(se))throw Sn(400,{type:"defer-action"});return{pendingActionData:{[ne.route.id]:se.data}}}async function Ee(T,k,P,H,le,te,se,ne,W){let $e=H||Tu(k,le),ke=le||te||t1($e),ln=a||o,[yt,Zt]=Ww(t.history,y,P,ke,k,G,K,De,Ne,Pe,ln,l,ne,W);if(En(qe=>!(P&&P.some(_n=>_n.route.id===qe))||yt&&yt.some(_n=>_n.route.id===qe)),yt.length===0&&Zt.length===0){let qe=$r();return X(k,We({matches:P,loaderData:{},errors:W||null},ne?{actionData:ne}:{},qe?{fetchers:new Map(y.fetchers)}:{})),{shortCircuited:!0}}if(!L){Zt.forEach(_n=>{let ds=y.fetchers.get(_n.key),Ct=Ko(void 0,ds?ds.data:void 0);y.fetchers.set(_n.key,Ct)});let qe=ne||y.actionData;$(We({navigation:$e},qe?Object.keys(qe).length===0?{actionData:null}:{actionData:qe}:{},Zt.length>0?{fetchers:new Map(y.fetchers)}:{}))}Oe=++be,Zt.forEach(qe=>{ie.has(qe.key)&&Le(qe.key),qe.controller&&ie.set(qe.key,qe.controller)});let Wn=()=>Zt.forEach(qe=>Le(qe.key));b&&b.signal.addEventListener("abort",Wn);let{results:No,loaderResults:_d,fetcherResults:Hl}=await ht(y.matches,P,yt,Zt,T);if(T.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",Wn),Zt.forEach(qe=>ie.delete(qe.key));let dr=Zw(No);if(dr)return await ce(y,dr,{replace:se}),{shortCircuited:!0};let{loaderData:ql,errors:Sd}=Yw(y,P,yt,_d,W,Zt,Hl,N);N.forEach((qe,_n)=>{qe.subscribe(ds=>{(ds||qe.done)&&N.delete(_n)})});let Td=$r(),Cd=Jt(Oe),Wl=Td||Cd||Zt.length>0;return We({loaderData:ql,errors:Sd},Wl?{fetchers:new Map(y.fetchers)}:{})}function _e(T){return y.fetchers.get(T)||L$}function ae(T,k,P,H){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(T)&&Le(T);let le=a||o,te=hm(y.location,y.matches,l,u.v7_prependBasename,P,k,H==null?void 0:H.relative),se=Ps(le,te,l);if(!se){Xe(T,k,Sn(404,{pathname:te}));return}let{path:ne,submission:W,error:$e}=qw(u.v7_normalizeFormMethod,!0,te,H);if($e){Xe(T,k,$e);return}let ke=fm(se,ne);if(R=(H&&H.preventScrollReset)===!0,W&&On(W.formMethod)){ct(T,k,ne,ke,se,W);return}Ne.set(T,{routeId:k,path:ne}),Pt(T,k,ne,ke,se,W)}async function ct(T,k,P,H,le,te){if(me(),Ne.delete(T),!H.route.action&&!H.route.lazy){let Ct=Sn(405,{method:te.formMethod,pathname:P,routeId:k});Xe(T,k,Ct);return}let se=y.fetchers.get(T),ne=G$(te,se);y.fetchers.set(T,ne),$({fetchers:new Map(y.fetchers)});let W=new AbortController,$e=Wo(t.history,P,W.signal,te);ie.set(T,W);let ke=await qo("action",$e,H,le,s,i,l);if($e.signal.aborted){ie.get(T)===W&&ie.delete(T);return}if(Ws(ke)){ie.delete(T),Pe.add(T);let Ct=Ko(te);return y.fetchers.set(T,Ct),$({fetchers:new Map(y.fetchers)}),ce(y,ke,{submission:te,isFetchActionRedirect:!0})}if(Sa(ke)){Xe(T,k,ke.error);return}if($i(ke))throw Sn(400,{type:"defer-action"});let ln=y.navigation.location||y.location,yt=Wo(t.history,ln,W.signal),Zt=a||o,Wn=y.navigation.state!=="idle"?Ps(Zt,y.navigation.location,l):y.matches;he(Wn,"Didn't find any matches after fetcher action");let No=++be;Ce.set(T,No);let _d=Ko(te,ke.data);y.fetchers.set(T,_d);let[Hl,dr]=Ww(t.history,y,Wn,te,ln,G,K,De,Ne,Pe,Zt,l,{[H.route.id]:ke.data},void 0);dr.filter(Ct=>Ct.key!==T).forEach(Ct=>{let Do=Ct.key,rv=y.fetchers.get(Do),xI=Ko(void 0,rv?rv.data:void 0);y.fetchers.set(Do,xI),ie.has(Do)&&Le(Do),Ct.controller&&ie.set(Do,Ct.controller)}),$({fetchers:new Map(y.fetchers)});let ql=()=>dr.forEach(Ct=>Le(Ct.key));W.signal.addEventListener("abort",ql);let{results:Sd,loaderResults:Td,fetcherResults:Cd}=await ht(y.matches,Wn,Hl,dr,yt);if(W.signal.aborted)return;W.signal.removeEventListener("abort",ql),Ce.delete(T),ie.delete(T),dr.forEach(Ct=>ie.delete(Ct.key));let Wl=Zw(Sd);if(Wl)return ce(y,Wl);let{loaderData:qe,errors:_n}=Yw(y,y.matches,Hl,Td,void 0,dr,Cd,N);if(y.fetchers.has(T)){let Ct=Wu(ke.data);y.fetchers.set(T,Ct)}let ds=Jt(No);y.navigation.state==="loading"&&No>Oe?(he(C,"Expected pending action"),b&&b.abort(),X(y.navigation.location,{matches:Wn,loaderData:qe,errors:_n,fetchers:new Map(y.fetchers)})):($(We({errors:_n,loaderData:Xw(y.loaderData,qe,Wn,_n)},ds||dr.length>0?{fetchers:new Map(y.fetchers)}:{})),G=!1)}async function Pt(T,k,P,H,le,te){let se=y.fetchers.get(T),ne=Ko(te,se?se.data:void 0);y.fetchers.set(T,ne),$({fetchers:new Map(y.fetchers)});let W=new AbortController,$e=Wo(t.history,P,W.signal);ie.set(T,W);let ke=await qo("loader",$e,H,le,s,i,l);if($i(ke)&&(ke=await Pk(ke,$e.signal,!0)||ke),ie.get(T)===W&&ie.delete(T),$e.signal.aborted)return;if(Ws(ke)){Pe.add(T),await ce(y,ke);return}if(Sa(ke)){let yt=Ns(y.matches,k);y.fetchers.delete(T),$({fetchers:new Map(y.fetchers),errors:{[yt.route.id]:ke.error}});return}he(!$i(ke),"Unhandled fetcher deferred data");let ln=Wu(ke.data);y.fetchers.set(T,ln),$({fetchers:new Map(y.fetchers)})}async function ce(T,k,P){let{submission:H,replace:le,isFetchActionRedirect:te}=P===void 0?{}:P;k.revalidate&&(G=!0);let se=ol(T.location,k.location,We({_isRedirect:!0},te?{_isFetchActionRedirect:!0}:{}));if(he(se,"Expected a location on the redirect navigation"),Ak.test(k.location)&&n){let $e=t.history.createURL(k.location),ke=Io($e.pathname,l)==null;if(e.location.origin!==$e.origin||ke){le?e.location.replace(k.location):e.location.assign(k.location);return}}b=null;let ne=le===!0?st.Replace:st.Push,W=H||t1(T.navigation);if(O$.has(k.status)&&W&&On(W.formMethod))await M(ne,se,{submission:We({},W,{formAction:k.location}),preventScrollReset:R});else if(te)await M(ne,se,{overrideNavigation:Tu(se),fetcherSubmission:W,preventScrollReset:R});else{let $e=Tu(se,W);await M(ne,se,{overrideNavigation:$e,preventScrollReset:R})}}async function ht(T,k,P,H,le){let te=await Promise.all([...P.map(W=>qo("loader",le,W,k,s,i,l)),...H.map(W=>W.matches&&W.match&&W.controller?qo("loader",Wo(t.history,W.path,W.controller.signal),W.match,W.matches,s,i,l):{type:dt.error,error:Sn(404,{pathname:W.path})})]),se=te.slice(0,P.length),ne=te.slice(P.length);return await Promise.all([e1(T,P,se,se.map(()=>le.signal),!1,y.loaderData),e1(T,H.map(W=>W.match),ne,H.map(W=>W.controller?W.controller.signal:null),!0)]),{results:te,loaderResults:se,fetcherResults:ne}}function me(){G=!0,K.push(...En()),Ne.forEach((T,k)=>{ie.has(k)&&(De.push(k),Le(k))})}function Xe(T,k,P){let H=Ns(y.matches,k);hr(T),$({errors:{[H.route.id]:P},fetchers:new Map(y.fetchers)})}function hr(T){let k=y.fetchers.get(T);ie.has(T)&&!(k&&k.state==="loading"&&Ce.has(T))&&Le(T),Ne.delete(T),Ce.delete(T),Pe.delete(T),y.fetchers.delete(T)}function Le(T){let k=ie.get(T);he(k,"Expected fetch controller: "+T),k.abort(),ie.delete(T)}function xi(T){for(let k of T){let P=_e(k),H=Wu(P.data);y.fetchers.set(k,H)}}function $r(){let T=[],k=!1;for(let P of Pe){let H=y.fetchers.get(P);he(H,"Expected fetcher: "+P),H.state==="loading"&&(Pe.delete(P),T.push(P),k=!0)}return xi(T),k}function Jt(T){let k=[];for(let[P,H]of Ce)if(H<T){let le=y.fetchers.get(P);he(le,"Expected fetcher: "+P),le.state==="loading"&&(Le(P),Ce.delete(P),k.push(P))}return xi(k),k.length>0}function J(T,k){let P=y.blockers.get(T)||Su;return V.get(T)!==k&&V.set(T,k),P}function He(T){y.blockers.delete(T),V.delete(T)}function Fr(T,k){let P=y.blockers.get(T)||Su;he(P.state==="unblocked"&&k.state==="blocked"||P.state==="blocked"&&k.state==="blocked"||P.state==="blocked"&&k.state==="proceeding"||P.state==="blocked"&&k.state==="unblocked"||P.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+k.state);let H=new Map(y.blockers);H.set(T,k),$({blockers:H})}function hs(T){let{currentLocation:k,nextLocation:P,historyAction:H}=T;if(V.size===0)return;V.size>1&&lo(!1,"A router only supports one blocker at a time");let le=Array.from(V.entries()),[te,se]=le[le.length-1],ne=y.blockers.get(te);if(!(ne&&ne.state==="proceeding")&&se({currentLocation:k,nextLocation:P,historyAction:H}))return te}function En(T){let k=[];return N.forEach((P,H)=>{(!T||T(H))&&(P.cancel(),k.push(H),N.delete(H))}),k}function CI(T,k,P){if(d=T,m=k,f=P||null,!v&&y.navigation===Sf){v=!0;let H=nv(y.location,y.matches);H!=null&&$({restoreScrollPosition:H})}return()=>{d=null,m=null,f=null}}function tv(T,k){return f&&f(T,k.map(H=>W$(H,y.loaderData)))||T.key}function kI(T,k){if(d&&m){let P=tv(T,k);d[P]=m()}}function nv(T,k){if(d){let P=tv(T,k),H=d[P];if(typeof H=="number")return H}return null}function II(T){s={},a=cm(T,i,void 0,s)}return w={get basename(){return l},get state(){return y},get routes(){return o},initialize:ye,subscribe:j,enableScrollRestoration:CI,navigate:S,fetch:ae,revalidate:de,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:_e,deleteFetcher:hr,dispose:F,getBlocker:J,deleteBlocker:He,_internalFetchControllers:ie,_internalActiveDeferreds:N,_internalSetRoutes:II},w}function F$(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function hm(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Zh(i||".",Ul(a).map(c=>c.pathnameBase),Io(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!jy(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Tr([n,u.pathname])),is(u)}function qw(t,e,n,r){if(!r||!F$(r))return{path:n};if(r.formMethod&&!q$(r.formMethod))return{path:n,error:Sn(405,{method:r.formMethod})};let i=()=>({path:n,error:Sn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=bk(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!On(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((f,m)=>{let[v,E]=m;return""+f+v+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!On(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=dm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=dm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Qw(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Qw(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(On(c.formMethod))return{path:n,submission:c};let h=Lr(n);return e&&h.search&&jy(h.search)&&l.append("index",""),h.search="?"+l,{path:is(h),submission:c}}function U$(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Ww(t,e,n,r,i,s,o,a,l,u,c,h,d,f){let m=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,v=t.createURL(e.location),E=t.createURL(i),g=f?Object.keys(f)[0]:void 0,w=U$(n,g).filter((C,R)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(j$(e.loaderData,e.matches[R],C)||o.some(G=>G===C.route.id))return!0;let b=e.matches[R],L=C;return Kw(C,We({currentUrl:v,currentParams:b.params,nextUrl:E,nextParams:L.params},r,{actionResult:m,defaultShouldRevalidate:s||v.pathname+v.search===E.pathname+E.search||v.search!==E.search||Rk(b,L)}))}),y=[];return l.forEach((C,R)=>{if(!n.some(ie=>ie.route.id===C.routeId))return;let b=Ps(c,C.path,h);if(!b){y.push({key:R,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let L=e.fetchers.get(R),G=L&&L.state!=="idle"&&L.data===void 0&&!u.has(R),K=fm(b,C.path);(a.includes(R)||G||Kw(K,We({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:s})))&&y.push({key:R,routeId:C.routeId,path:C.path,matches:b,match:K,controller:new AbortController})}),[w,y]}function j$(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Rk(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Kw(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Gw(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];he(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";lo(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!u$.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,We({},e(i),{lazy:void 0}))}async function qo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=m=>{let v,E=new Promise((g,p)=>v=p);return c=()=>v(),e.signal.addEventListener("abort",c),Promise.race([m({request:e,params:n.params,context:a.requestContext}),E])};try{let m=n.route[t];if(n.route.lazy)if(m)u=(await Promise.all([h(m),Gw(n.route,s,i)]))[0];else if(await Gw(n.route,s,i),m=n.route[t],m)u=await h(m);else if(t==="action"){let v=new URL(e.url),E=v.pathname+v.search;throw Sn(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:dt.data,data:void 0};else if(m)u=await h(m);else{let v=new URL(e.url),E=v.pathname+v.search;throw Sn(404,{pathname:E})}he(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(m){l=dt.error,u=m}finally{c&&e.signal.removeEventListener("abort",c)}if(H$(u)){let m=u.status;if(D$.has(m)){let g=u.headers.get("Location");if(he(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ak.test(g))g=hm(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let p=new URL(e.url),w=g.startsWith("//")?new URL(p.protocol+g):new URL(g),y=Io(w.pathname,o)!=null;w.origin===p.origin&&y&&(g=w.pathname+w.search+w.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:dt.redirect,status:m,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||dt.data,response:u};let v,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?v=await u.json():v=await u.text(),l===dt.error?{type:l,error:new Uy(m,u.statusText,v),headers:u.headers}:{type:dt.data,data:v,statusCode:u.status,headers:u.headers}}if(l===dt.error)return{type:l,error:u};if(V$(u)){var d,f;return{type:dt.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((f=u.init)==null?void 0:f.headers)&&new Headers(u.init.headers)}}return{type:dt.data,data:u}}function Wo(t,e,n,r){let i=t.createURL(bk(e)).toString(),s={signal:n};if(r&&On(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=dm(r.formData):s.body=r.formData}return new Request(i,s)}function dm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Qw(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function B$(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(he(!Ws(c),"Cannot handle redirect results in processLoaderData"),Sa(c)){let f=Ns(t,d),m=c.error;r&&(m=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=m),s[d]=void 0,l||(l=!0,a=Ik(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else $i(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Yw(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=B$(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:f}=s[c];he(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let m=o[c];if(!(f&&f.signal.aborted))if(Sa(m)){let v=Ns(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=We({},u,{[v.route.id]:m.error})),t.fetchers.delete(h)}else if(Ws(m))he(!1,"Unhandled fetcher revalidation redirect");else if($i(m))he(!1,"Unhandled fetcher deferred data");else{let v=Wu(m.data);t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function Xw(t,e,n,r){let i=We({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ns(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Jw(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Sn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Uy(t||500,o,new Error(a),!0)}function Zw(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ws(n))return n}}function bk(t){let e=typeof t=="string"?Lr(t):t;return is(We({},e,{hash:""}))}function z$(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function $i(t){return t.type===dt.deferred}function Sa(t){return t.type===dt.error}function Ws(t){return(t&&t.type)===dt.redirect}function V$(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function H$(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function q$(t){return N$.has(t.toLowerCase())}function On(t){return b$.has(t.toLowerCase())}async function e1(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!Rk(u,l)&&(s&&s[l.route.id])!==void 0;if($i(a)&&(i||c)){let h=r[o];he(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await Pk(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function Pk(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:dt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:dt.error,error:i}}return{type:dt.data,data:t.deferredData.data}}}function jy(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function W$(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function fm(t,e){let n=typeof e=="string"?Lr(e).search:e.search;if(t[t.length-1].route.index&&jy(n||""))return t[t.length-1];let r=Ul(t);return r[r.length-1]}function t1(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Tu(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function K$(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ko(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function G$(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Wu(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gc.apply(this,arguments)}const ed=I.createContext(null),Nk=I.createContext(null),xo=I.createContext(null),td=I.createContext(null),Mr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Dk=I.createContext(null);function Q$(t,e){let{relative:n}=e===void 0?{}:e;Ao()||he(!1);let{basename:r,navigator:i}=I.useContext(xo),{hash:s,pathname:o,search:a}=Lk(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Tr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ao(){return I.useContext(td)!=null}function jl(){return Ao()||he(!1),I.useContext(td).location}function Ok(t){I.useContext(xo).static||I.useLayoutEffect(t)}function Ro(){let{isDataRoute:t}=I.useContext(Mr);return t?uF():Y$()}function Y$(){Ao()||he(!1);let t=I.useContext(ed),{basename:e,navigator:n}=I.useContext(xo),{matches:r}=I.useContext(Mr),{pathname:i}=jl(),s=JSON.stringify(Ul(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return Ok(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Zh(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Tr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const X$=I.createContext(null);function J$(t){let e=I.useContext(Mr).outlet;return e&&I.createElement(X$.Provider,{value:t},e)}function Lk(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(Mr),{pathname:i}=jl(),s=JSON.stringify(Ul(r).map(o=>o.pathnameBase));return I.useMemo(()=>Zh(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Z$(t,e,n){Ao()||he(!1);let{navigator:r}=I.useContext(xo),{matches:i}=I.useContext(Mr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=jl(),u;if(e){var c;let v=typeof e=="string"?Lr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||he(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=Ps(t,{pathname:d}),m=iF(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Tr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Tr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&m?I.createElement(td.Provider,{value:{location:Gc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:st.Pop}},m):m}function eF(){let t=lF(),e=Ik(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const tF=I.createElement(eF,null);class nF extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Mr.Provider,{value:this.props.routeContext},I.createElement(Dk.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rF(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(ed);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Mr.Provider,{value:e},r)}function iF(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||he(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||tF);let d=e.concat(s.slice(0,u+1)),f=()=>{let m;return c?m=h:l.route.Component?m=I.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,I.createElement(rF,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(nF,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var pm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(pm||(pm={}));var al;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(al||(al={}));function sF(t){let e=I.useContext(ed);return e||he(!1),e}function oF(t){let e=I.useContext(Nk);return e||he(!1),e}function aF(t){let e=I.useContext(Mr);return e||he(!1),e}function Mk(t){let e=aF(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function lF(){var t;let e=I.useContext(Dk),n=oF(al.UseRouteError),r=Mk(al.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function uF(){let{router:t}=sF(pm.UseNavigateStable),e=Mk(al.UseNavigateStable),n=I.useRef(!1);return Ok(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Gc({fromRouteId:e},s)))},[t,e])}const cF="startTransition",n1=HI[cF];function hF(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=I.useState(n.state),{v7_startTransition:o}=r||{},a=I.useCallback(h=>{o&&n1?n1(()=>s(h)):s(h)},[s,o]);I.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=I.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,f)=>n.navigate(h,{state:d,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(h,d,f)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[n]),u=n.basename||"/",c=I.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return I.createElement(I.Fragment,null,I.createElement(ed.Provider,{value:c},I.createElement(Nk.Provider,{value:i},I.createElement(pF,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?I.createElement(dF,{routes:n.routes,state:i}):e))),null)}function dF(t){let{routes:e,state:n}=t;return Z$(e,void 0,n)}function $k(t){let{to:e,replace:n,state:r,relative:i}=t;Ao()||he(!1);let{matches:s}=I.useContext(Mr),{pathname:o}=jl(),a=Ro(),l=Zh(e,Ul(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function fF(t){return J$(t.context)}function pF(t){let{basename:e="/",children:n=null,location:r,navigationType:i=st.Pop,navigator:s,static:o=!1}=t;Ao()&&he(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Lr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,m=I.useMemo(()=>{let v=Io(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return m==null?null:I.createElement(xo.Provider,{value:l},I.createElement(td.Provider,{children:n,value:m}))}var r1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(r1||(r1={}));new Promise(()=>{});function mF(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:I.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:I.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ll.apply(this,arguments)}function gF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vF(t,e){return t.button===0&&(!e||e==="_self")&&!yF(t)}const wF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function EF(t,e){return $$({basename:e==null?void 0:e.basename,future:ll({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:o$({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||_F(),routes:t,mapRouteProperties:mF}).initialize()}function _F(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ll({},e,{errors:SF(e.errors)})),e}function SF(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Uy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const TF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rn=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=gF(e,wF),{basename:d}=I.useContext(xo),f,m=!1;if(typeof u=="string"&&CF.test(u)&&(f=u,TF))try{let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),y=Io(w.pathname,d);w.origin===p.origin&&y!=null?u=y+w.search+w.hash:m=!0}catch{}let v=Q$(u,{relative:i}),E=kF(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||E(p)}return I.createElement("a",ll({},h,{href:f||v,onClick:m||s?r:g,ref:n,target:l}))});var i1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(i1||(i1={}));var s1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(s1||(s1={}));function kF(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ro(),l=jl(),u=Lk(t,{relative:o});return I.useCallback(c=>{if(vF(c,n)){c.preventDefault();let h=r!==void 0?r:is(l)===is(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const bo=I.createContext({});function IF({children:t}){const[e,n]=I.useState(null);I.useState(!1);const[r,i]=I.useState(!1);async function s(u,c){i(!0),await A2(Bw,u,c).then(async h=>{let d=h.user.uid;const f=jc(sl,"users",d),m=await PO(f);let v={uid:d,nome:m.data().nome,email:h.user.email,imgUrl:m.data().imgUrl,logado:!0};n(v),l(v),i(!1)})}async function o(u,c,h){i(!0),await x2(Bw,c,h).then(async d=>{let f=d.user.uid;await NO(jc(sl,"users",f),{nome:u,imgUrl:null,theme:"light"}).then(m=>{let v={nome:u,email:d.user.email,imgUrl:null,logado:!0,uid:f};n(v),l(v),i(!1)}).catch(m=>{console.log(m)})}).catch(d=>{console.log(d)})}function a(){n({logado:!1}),localStorage.clear("@userStorage"),alert("saindo")}function l(u){localStorage.setItem("@userStorage",JSON.stringify(u))}return _.jsx(bo.Provider,{value:{signed:!!e,user:e,signIn:s,signUp:o,loadingAuth:r,LogOut:a,UserStorage:l},children:t})}var Fk={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tt=typeof Symbol=="function"&&Symbol.for,By=Tt?Symbol.for("react.element"):60103,zy=Tt?Symbol.for("react.portal"):60106,nd=Tt?Symbol.for("react.fragment"):60107,rd=Tt?Symbol.for("react.strict_mode"):60108,id=Tt?Symbol.for("react.profiler"):60114,sd=Tt?Symbol.for("react.provider"):60109,od=Tt?Symbol.for("react.context"):60110,Vy=Tt?Symbol.for("react.async_mode"):60111,ad=Tt?Symbol.for("react.concurrent_mode"):60111,ld=Tt?Symbol.for("react.forward_ref"):60112,ud=Tt?Symbol.for("react.suspense"):60113,xF=Tt?Symbol.for("react.suspense_list"):60120,cd=Tt?Symbol.for("react.memo"):60115,hd=Tt?Symbol.for("react.lazy"):60116,AF=Tt?Symbol.for("react.block"):60121,RF=Tt?Symbol.for("react.fundamental"):60117,bF=Tt?Symbol.for("react.responder"):60118,PF=Tt?Symbol.for("react.scope"):60119;function wn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case By:switch(t=t.type,t){case Vy:case ad:case nd:case id:case rd:case ud:return t;default:switch(t=t&&t.$$typeof,t){case od:case ld:case hd:case cd:case sd:return t;default:return e}}case zy:return e}}}function Uk(t){return wn(t)===ad}Re.AsyncMode=Vy;Re.ConcurrentMode=ad;Re.ContextConsumer=od;Re.ContextProvider=sd;Re.Element=By;Re.ForwardRef=ld;Re.Fragment=nd;Re.Lazy=hd;Re.Memo=cd;Re.Portal=zy;Re.Profiler=id;Re.StrictMode=rd;Re.Suspense=ud;Re.isAsyncMode=function(t){return Uk(t)||wn(t)===Vy};Re.isConcurrentMode=Uk;Re.isContextConsumer=function(t){return wn(t)===od};Re.isContextProvider=function(t){return wn(t)===sd};Re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===By};Re.isForwardRef=function(t){return wn(t)===ld};Re.isFragment=function(t){return wn(t)===nd};Re.isLazy=function(t){return wn(t)===hd};Re.isMemo=function(t){return wn(t)===cd};Re.isPortal=function(t){return wn(t)===zy};Re.isProfiler=function(t){return wn(t)===id};Re.isStrictMode=function(t){return wn(t)===rd};Re.isSuspense=function(t){return wn(t)===ud};Re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===nd||t===ad||t===id||t===rd||t===ud||t===xF||typeof t=="object"&&t!==null&&(t.$$typeof===hd||t.$$typeof===cd||t.$$typeof===sd||t.$$typeof===od||t.$$typeof===ld||t.$$typeof===RF||t.$$typeof===bF||t.$$typeof===PF||t.$$typeof===AF)};Re.typeOf=wn;Fk.exports=Re;var Hy=Fk.exports;function NF(t){function e(F,j,$,X,S){for(var de=0,M=0,Ve=0,Ee=0,_e,ae,ct=0,Pt=0,ce,ht=ce=_e=0,me=0,Xe=0,hr=0,Le=0,xi=$.length,$r=xi-1,Jt,J="",He="",Fr="",hs="",En;me<xi;){if(ae=$.charCodeAt(me),me===$r&&M+Ee+Ve+de!==0&&(M!==0&&(ae=M===47?10:47),Ee=Ve=de=0,xi++,$r++),M+Ee+Ve+de===0){if(me===$r&&(0<Xe&&(J=J.replace(d,"")),0<J.trim().length)){switch(ae){case 32:case 9:case 59:case 13:case 10:break;default:J+=$.charAt(me)}ae=59}switch(ae){case 123:for(J=J.trim(),_e=J.charCodeAt(0),ce=1,Le=++me;me<xi;){switch(ae=$.charCodeAt(me)){case 123:ce++;break;case 125:ce--;break;case 47:switch(ae=$.charCodeAt(me+1)){case 42:case 47:e:{for(ht=me+1;ht<$r;++ht)switch($.charCodeAt(ht)){case 47:if(ae===42&&$.charCodeAt(ht-1)===42&&me+2!==ht){me=ht+1;break e}break;case 10:if(ae===47){me=ht+1;break e}}me=ht}}break;case 91:ae++;case 40:ae++;case 34:case 39:for(;me++<$r&&$.charCodeAt(me)!==ae;);}if(ce===0)break;me++}switch(ce=$.substring(Le,me),_e===0&&(_e=(J=J.replace(h,"").trim()).charCodeAt(0)),_e){case 64:switch(0<Xe&&(J=J.replace(d,"")),ae=J.charCodeAt(1),ae){case 100:case 109:case 115:case 45:Xe=j;break;default:Xe=Pe}if(ce=e(j,Xe,ce,ae,S+1),Le=ce.length,0<N&&(Xe=n(Pe,J,hr),En=a(3,ce,Xe,j,be,ie,Le,ae,S,X),J=Xe.join(""),En!==void 0&&(Le=(ce=En.trim()).length)===0&&(ae=0,ce="")),0<Le)switch(ae){case 115:J=J.replace(R,o);case 100:case 109:case 45:ce=J+"{"+ce+"}";break;case 107:J=J.replace(p,"$1 $2"),ce=J+"{"+ce+"}",ce=Ce===1||Ce===2&&s("@"+ce,3)?"@-webkit-"+ce+"@"+ce:"@"+ce;break;default:ce=J+ce,X===112&&(ce=(He+=ce,""))}else ce="";break;default:ce=e(j,n(j,J,hr),ce,X,S+1)}Fr+=ce,ce=hr=Xe=ht=_e=0,J="",ae=$.charCodeAt(++me);break;case 125:case 59:if(J=(0<Xe?J.replace(d,""):J).trim(),1<(Le=J.length))switch(ht===0&&(_e=J.charCodeAt(0),_e===45||96<_e&&123>_e)&&(Le=(J=J.replace(" ",":")).length),0<N&&(En=a(1,J,j,F,be,ie,He.length,X,S,X))!==void 0&&(Le=(J=En.trim()).length)===0&&(J="\0\0"),_e=J.charCodeAt(0),ae=J.charCodeAt(1),_e){case 0:break;case 64:if(ae===105||ae===99){hs+=J+$.charAt(me);break}default:J.charCodeAt(Le-1)!==58&&(He+=i(J,_e,ae,J.charCodeAt(2)))}hr=Xe=ht=_e=0,J="",ae=$.charCodeAt(++me)}}switch(ae){case 13:case 10:M===47?M=0:1+_e===0&&X!==107&&0<J.length&&(Xe=1,J+="\0"),0<N*Q&&a(0,J,j,F,be,ie,He.length,X,S,X),ie=1,be++;break;case 59:case 125:if(M+Ee+Ve+de===0){ie++;break}default:switch(ie++,Jt=$.charAt(me),ae){case 9:case 32:if(Ee+de+M===0)switch(ct){case 44:case 58:case 9:case 32:Jt="";break;default:ae!==32&&(Jt=" ")}break;case 0:Jt="\\0";break;case 12:Jt="\\f";break;case 11:Jt="\\v";break;case 38:Ee+M+de===0&&(Xe=hr=1,Jt="\f"+Jt);break;case 108:if(Ee+M+de+Oe===0&&0<ht)switch(me-ht){case 2:ct===112&&$.charCodeAt(me-3)===58&&(Oe=ct);case 8:Pt===111&&(Oe=Pt)}break;case 58:Ee+M+de===0&&(ht=me);break;case 44:M+Ve+Ee+de===0&&(Xe=1,Jt+="\r");break;case 34:case 39:M===0&&(Ee=Ee===ae?0:Ee===0?ae:Ee);break;case 91:Ee+M+Ve===0&&de++;break;case 93:Ee+M+Ve===0&&de--;break;case 41:Ee+M+de===0&&Ve--;break;case 40:if(Ee+M+de===0){if(_e===0)switch(2*ct+3*Pt){case 533:break;default:_e=1}Ve++}break;case 64:M+Ve+Ee+de+ht+ce===0&&(ce=1);break;case 42:case 47:if(!(0<Ee+de+Ve))switch(M){case 0:switch(2*ae+3*$.charCodeAt(me+1)){case 235:M=47;break;case 220:Le=me,M=42}break;case 42:ae===47&&ct===42&&Le+2!==me&&($.charCodeAt(Le+2)===33&&(He+=$.substring(Le,me+1)),Jt="",M=0)}}M===0&&(J+=Jt)}Pt=ct,ct=ae,me++}if(Le=He.length,0<Le){if(Xe=j,0<N&&(En=a(2,He,Xe,F,be,ie,Le,X,S,X),En!==void 0&&(He=En).length===0))return hs+He+Fr;if(He=Xe.join(",")+"{"+He+"}",Ce*Oe!==0){switch(Ce!==2||s(He,2)||(Oe=0),Oe){case 111:He=He.replace(y,":-moz-$1")+He;break;case 112:He=He.replace(w,"::-webkit-input-$1")+He.replace(w,"::-moz-$1")+He.replace(w,":-ms-input-$1")+He}Oe=0}}return hs+He+Fr}function n(F,j,$){var X=j.trim().split(E);j=X;var S=X.length,de=F.length;switch(de){case 0:case 1:var M=0;for(F=de===0?"":F[0]+" ";M<S;++M)j[M]=r(F,j[M],$).trim();break;default:var Ve=M=0;for(j=[];M<S;++M)for(var Ee=0;Ee<de;++Ee)j[Ve++]=r(F[Ee]+" ",X[M],$).trim()}return j}function r(F,j,$){var X=j.charCodeAt(0);switch(33>X&&(X=(j=j.trim()).charCodeAt(0)),X){case 38:return j.replace(g,"$1"+F.trim());case 58:return F.trim()+j.replace(g,"$1"+F.trim());default:if(0<1*$&&0<j.indexOf("\f"))return j.replace(g,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+j}function i(F,j,$,X){var S=F+";",de=2*j+3*$+4*X;if(de===944){F=S.indexOf(":",9)+1;var M=S.substring(F,S.length-1).trim();return M=S.substring(0,F).trim()+M+";",Ce===1||Ce===2&&s(M,1)?"-webkit-"+M+M:M}if(Ce===0||Ce===2&&!s(S,1))return S;switch(de){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(De,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return M=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+S+"-ms-flex-pack"+M+S;case 1005:return m.test(S)?S.replace(f,":-webkit-")+S.replace(f,":-moz-")+S:S;case 1e3:switch(M=S.substring(13).trim(),j=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(j)){case 226:M=S.replace(C,"tb");break;case 232:M=S.replace(C,"tb-rl");break;case 220:M=S.replace(C,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+M+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(j=(S=F).length-10,M=(S.charCodeAt(j)===33?S.substring(0,j):S).substring(F.indexOf(":",7)+1).trim(),de=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:S=S.replace(M,"-webkit-"+M)+";"+S;break;case 207:case 102:S=S.replace(M,"-webkit-"+(102<de?"inline-":"")+"box")+";"+S.replace(M,"-webkit-"+M)+";"+S.replace(M,"-ms-"+M+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return M=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+M+"-ms-flex-"+M+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(L,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(L,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(K.test(F)===!0)return(M=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?i(F.replace("stretch","fill-available"),j,$,X).replace(":fill-available",":stretch"):S.replace(M,"-webkit-"+M)+S.replace(M,"-moz-"+M.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,$+X===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+S}return S}function s(F,j){var $=F.indexOf(j===1?":":"{"),X=F.substring(0,j!==3?$:10);return $=F.substring($+1,F.length-1),V(j!==2?X:X.replace(G,"$1"),$,j)}function o(F,j){var $=i(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return $!==j+";"?$.replace(b," or ($1)").substring(4):"("+j+")"}function a(F,j,$,X,S,de,M,Ve,Ee,_e){for(var ae=0,ct=j,Pt;ae<N;++ae)switch(Pt=Ne[ae].call(c,F,ct,$,X,S,de,M,Ve,Ee,_e)){case void 0:case!1:case!0:case null:break;default:ct=Pt}if(ct!==j)return ct}function l(F){switch(F){case void 0:case null:N=Ne.length=0;break;default:if(typeof F=="function")Ne[N++]=F;else if(typeof F=="object")for(var j=0,$=F.length;j<$;++j)l(F[j]);else Q=!!F|0}return l}function u(F){return F=F.prefix,F!==void 0&&(V=null,F?typeof F!="function"?Ce=1:(Ce=2,V=F):Ce=0),u}function c(F,j){var $=F;if(33>$.charCodeAt(0)&&($=$.trim()),ye=$,$=[ye],0<N){var X=a(-1,j,$,$,be,ie,0,0,0,0);X!==void 0&&typeof X=="string"&&(j=X)}var S=e(Pe,$,j,0,0);return 0<N&&(X=a(-2,S,$,$,be,ie,S.length,0,0,0),X!==void 0&&(S=X)),ye="",Oe=0,ie=be=1,S}var h=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,m=/zoo|gra/,v=/([,: ])(transform)/g,E=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,y=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,L=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,De=/([^-])(image-set\()/,ie=1,be=1,Oe=0,Ce=1,Pe=[],Ne=[],N=0,V=null,Q=0,ye="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var DF={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function OF(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var LF=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o1=OF(function(t){return LF.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),qy=Hy,MF={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$F={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},FF={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wy={};Wy[qy.ForwardRef]=FF;Wy[qy.Memo]=jk;function a1(t){return qy.isMemo(t)?jk:Wy[t.$$typeof]||MF}var UF=Object.defineProperty,jF=Object.getOwnPropertyNames,l1=Object.getOwnPropertySymbols,BF=Object.getOwnPropertyDescriptor,zF=Object.getPrototypeOf,u1=Object.prototype;function Bk(t,e,n){if(typeof e!="string"){if(u1){var r=zF(e);r&&r!==u1&&Bk(t,r,n)}var i=jF(e);l1&&(i=i.concat(l1(e)));for(var s=a1(t),o=a1(e),a=0;a<i.length;++a){var l=i[a];if(!$F[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=BF(e,l);try{UF(t,l,u)}catch{}}}}return t}var VF=Bk;const HF=Im(VF);function _r(){return(_r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var c1=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},mm=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Hy.typeOf(t)},Qc=Object.freeze([]),pi=Object.freeze({});function ul(t){return typeof t=="function"}function h1(t){return t.displayName||t.name||"Component"}function Ky(t){return t&&typeof t.styledComponentId=="string"}var uo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gy=typeof window<"u"&&"HTMLElement"in window,qF=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Bl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var WF=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Bl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Ku=new Map,Yc=new Map,Ta=1,Cu=function(t){if(Ku.has(t))return Ku.get(t);for(;Yc.has(Ta);)Ta++;var e=Ta++;return Ku.set(t,e),Yc.set(e,t),e},KF=function(t){return Yc.get(t)},GF=function(t,e){e>=Ta&&(Ta=e+1),Ku.set(t,e),Yc.set(e,t)},QF="style["+uo+'][data-styled-version="5.3.10"]',YF=new RegExp("^"+uo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),XF=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},JF=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(YF);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(GF(u,l),XF(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},ZF=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},zk=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(uo))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(uo,"active"),r.setAttribute("data-styled-version","5.3.10");var o=ZF();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eU=function(){function t(n){var r=this.element=zk(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Bl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),tU=function(){function t(n){var r=this.element=zk(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),nU=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),d1=Gy,rU={isServer:!Gy,useCSSOMInjection:!qF},Vk=function(){function t(n,r,i){n===void 0&&(n=pi),r===void 0&&(r={}),this.options=_r({},rU,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Gy&&d1&&(d1=!1,function(s){for(var o=document.querySelectorAll(QF),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(uo)!=="active"&&(JF(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Cu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(_r({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new nU(o):s?new eU(o):new tU(o),new WF(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Cu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Cu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Cu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=KF(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=uo+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),iU=/(a)(d)/gi,f1=function(t){return String.fromCharCode(t+(t>25?39:97))};function gm(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=f1(e%52)+n;return(f1(e%52)+n).replace(iU,"$1-$2")}var Ds=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Hk=function(t){return Ds(5381,t)};function sU(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ul(n)&&!Ky(n))return!1}return!0}var oU=Hk("5.3.10"),aU=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sU(e),this.componentId=n,this.baseHash=Ds(oU,n),this.baseStyle=r,Vk.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=co(this.rules,e,n,r).join(""),a=gm(Ds(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ds(this.baseHash,r.hash),h="",d=0;d<u;d++){var f=this.rules[d];if(typeof f=="string")h+=f;else if(f){var m=co(f,e,n,r),v=Array.isArray(m)?m.join(""):m;c=Ds(c,v+d),h+=v}}if(h){var E=gm(c>>>0);if(!n.hasNameForId(i,E)){var g=r(h,"."+E,void 0,i);n.insertRules(i,E,g)}s.push(E)}}return s.join(" ")},t}(),lU=/^\s*\/\/.*$/gm,uU=[":","[",".","#"];function cU(t){var e,n,r,i,s=t===void 0?pi:t,o=s.options,a=o===void 0?pi:o,l=s.plugins,u=l===void 0?Qc:l,c=new NF(a),h=[],d=function(v){function E(g){if(g)try{v(g+"}")}catch{}}return function(g,p,w,y,C,R,b,L,G,K){switch(g){case 1:if(G===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(L===0)return p+"/*|*/";break;case 3:switch(L){case 102:case 112:return v(w[0]+p),"";default:return p+(K===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(E)}}}(function(v){h.push(v)}),f=function(v,E,g){return E===0&&uU.indexOf(g[n.length])!==-1||g.match(i)?v:"."+e};function m(v,E,g,p){p===void 0&&(p="&");var w=v.replace(lU,""),y=E&&g?g+" "+E+" { "+w+" }":w;return e=p,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!E?"":E,y)}return c.use([].concat(u,[function(v,E,g){v===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,f))},d,function(v){if(v===-2){var E=h;return h=[],E}}])),m.hash=u.length?u.reduce(function(v,E){return E.name||Bl(15),Ds(v,E.name)},5381).toString():"",m}var qk=Mn.createContext();qk.Consumer;var Wk=Mn.createContext(),hU=(Wk.Consumer,new Vk),ym=cU();function dU(){return I.useContext(qk)||hU}function fU(){return I.useContext(Wk)||ym}var pU=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ym);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Bl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=ym),this.name+e.hash},t}(),mU=/([A-Z])/,gU=/([A-Z])/g,yU=/^ms-/,vU=function(t){return"-"+t.toLowerCase()};function p1(t){return mU.test(t)?t.replace(gU,vU).replace(yU,"-ms-"):t}var m1=function(t){return t==null||t===!1||t===""};function co(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=co(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(m1(t))return"";if(Ky(t))return"."+t.styledComponentId;if(ul(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return co(l,e,n,r)}var u;return t instanceof pU?n?(t.inject(n,r),t.getName(r)):t:mm(t)?function c(h,d){var f,m,v=[];for(var E in h)h.hasOwnProperty(E)&&!m1(h[E])&&(Array.isArray(h[E])&&h[E].isCss||ul(h[E])?v.push(p1(E)+":",h[E],";"):mm(h[E])?v.push.apply(v,c(h[E],E)):v.push(p1(E)+": "+(f=E,(m=h[E])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||f in DF||f.startsWith("--")?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var g1=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function wU(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ul(t)||mm(t)?g1(co(c1(Qc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:g1(co(c1(t,n)))}var EU=function(t,e,n){return n===void 0&&(n=pi),t.theme!==n.theme&&t.theme||e||n.theme},_U=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SU=/(^-|-$)/g;function Tf(t){return t.replace(_U,"-").replace(SU,"")}var TU=function(t){return gm(Hk(t)>>>0)};function ku(t){return typeof t=="string"&&!0}var vm=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},CU=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function kU(t,e,n){var r=t[n];vm(e)&&vm(r)?Kk(r,e):t[n]=e}function Kk(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(vm(o))for(var a in o)CU(a)&&kU(t,o[a],a)}return t}var Gk=Mn.createContext();Gk.Consumer;var Cf={};function Qk(t,e,n){var r=Ky(t),i=!ku(t),s=e.attrs,o=s===void 0?Qc:s,a=e.componentId,l=a===void 0?function(p,w){var y=typeof p!="string"?"sc":Tf(p);Cf[y]=(Cf[y]||0)+1;var C=y+"-"+TU("5.3.10"+y+Cf[y]);return w?w+"-"+C:C}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return ku(p)?"styled."+p:"Styled("+h1(p)+")"}(t):u,h=e.displayName&&e.componentId?Tf(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,f=e.shouldForwardProp;r&&t.shouldForwardProp&&(f=e.shouldForwardProp?function(p,w,y){return t.shouldForwardProp(p,w,y)&&e.shouldForwardProp(p,w,y)}:t.shouldForwardProp);var m,v=new aU(n,h,r?t.componentStyle:void 0),E=v.isStatic&&o.length===0,g=function(p,w){return function(y,C,R,b){var L=y.attrs,G=y.componentStyle,K=y.defaultProps,De=y.foldedComponentIds,ie=y.shouldForwardProp,be=y.styledComponentId,Oe=y.target,Ce=function(X,S,de){X===void 0&&(X=pi);var M=_r({},S,{theme:X}),Ve={};return de.forEach(function(Ee){var _e,ae,ct,Pt=Ee;for(_e in ul(Pt)&&(Pt=Pt(M)),Pt)M[_e]=Ve[_e]=_e==="className"?(ae=Ve[_e],ct=Pt[_e],ae&&ct?ae+" "+ct:ae||ct):Pt[_e]}),[M,Ve]}(EU(C,I.useContext(Gk),K)||pi,C,L),Pe=Ce[0],Ne=Ce[1],N=function(X,S,de,M){var Ve=dU(),Ee=fU(),_e=S?X.generateAndInjectStyles(pi,Ve,Ee):X.generateAndInjectStyles(de,Ve,Ee);return _e}(G,b,Pe),V=R,Q=Ne.$as||C.$as||Ne.as||C.as||Oe,ye=ku(Q),F=Ne!==C?_r({},C,{},Ne):C,j={};for(var $ in F)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?j.as=F[$]:(ie?ie($,o1,Q):!ye||o1($))&&(j[$]=F[$]));return C.style&&Ne.style!==C.style&&(j.style=_r({},C.style,{},Ne.style)),j.className=Array.prototype.concat(De,be,N!==be?N:null,C.className,Ne.className).filter(Boolean).join(" "),j.ref=V,I.createElement(Q,j)}(m,p,w,E)};return g.displayName=c,(m=Mn.forwardRef(g)).attrs=d,m.componentStyle=v,m.displayName=c,m.shouldForwardProp=f,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Qc,m.styledComponentId=h,m.target=r?t.target:t,m.withComponent=function(p){var w=e.componentId,y=function(R,b){if(R==null)return{};var L,G,K={},De=Object.keys(R);for(G=0;G<De.length;G++)L=De[G],b.indexOf(L)>=0||(K[L]=R[L]);return K}(e,["componentId"]),C=w&&w+"-"+(ku(p)?p:Tf(h1(p)));return Qk(p,_r({},y,{attrs:d,componentId:C}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Kk({},t.defaultProps,p):p}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&HF(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var wm=function(t){return function e(n,r,i){if(i===void 0&&(i=pi),!Hy.isValidElementType(r))return Bl(1,String(r));var s=function(){return n(r,i,wU.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,_r({},i,{},o))},s.attrs=function(o){return e(n,r,_r({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Qk,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){wm[t]=wm(t)});const Xt=wm,IU=Xt.footer`
    
    
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
`;function xU(){return _.jsx(IU,{children:_.jsxs("p",{children:["@2023 Coordinates - Made by ",_.jsx("a",{href:"https://github.com/GuilhermeSella",children:"Guilherme Sella"})]})})}const AU=Xt.div`
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
    




`;function RU(t){const{toggleHamburguer:e,theme:n}=I.useContext(qn);return _.jsxs(AU,{className:"menu-hamburguer",theme:n,children:[_.jsx("input",{onChange:e,type:"checkbox",id:"menu-hamburguer",className:"input-menu-hamburguer"}),_.jsx("label",{htmlFor:"menu-hamburguer",children:_.jsx("div",{className:"menu",children:_.jsx("span",{className:"hamburguer"})})})]})}const bU=Xt.header`
    
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

`;function PU(){const{theme:t}=I.useContext(qn),{LogOut:e}=I.useContext(bo),n=Ro();return _.jsxs(bU,{theme:t,children:[_.jsx("div",{children:_.jsx(rn,{to:"/home",children:"Coordinates"})}),_.jsxs("nav",{className:"navIcons",children:[_.jsx(rn,{className:"button",to:"/home/account",children:_.jsx("span",{className:"material-symbols-outlined",children:"person"})}),_.jsx(rn,{className:"button",to:"/home/saved",children:_.jsx("span",{className:"material-symbols-outlined",children:"bookmark"})}),_.jsx(rn,{className:"button",onClick:()=>{n("/"),e()},children:_.jsx("span",{className:"material-symbols-outlined",children:"logout"})}),_.jsx("div",{className:"menuH",children:_.jsx(RU,{})})]})]})}const NU=Xt.div`
    
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
   
       

`;function DU(){const{theme:t,hamburguer:e,toggleHamburguer:n}=I.useContext(qn),{LogOut:r}=I.useContext(bo),i=Ro();return _.jsx(NU,{hamburguer:e,theme:t,children:_.jsxs("ul",{children:[_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"home"}),_.jsx(rn,{to:"/home",children:"Home"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"person"}),_.jsx(rn,{to:"/home/account",children:"Profile"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"bookmark"}),_.jsx(rn,{to:"/home/saved",children:"Saved"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"logout"}),_.jsx(rn,{onClick:()=>{i("/"),r()},children:"Log Out"})]})]})})}function OU(){const{hamburguer:t,theme:e}=I.useContext(qn);return _.jsxs(_.Fragment,{children:[_.jsx(PU,{}),t==="disable"?_.jsxs(_.Fragment,{children:[_.jsx(fF,{}),_.jsx(xU,{})]}):_.jsx(DU,{})]})}const LU=Xt.div`
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
`;function MU(t){const{theme:e}=I.useContext(qn);return _.jsxs(LU,{theme:e,children:[_.jsxs("h1",{children:["Descubra a sua exata ",_.jsx("b",{children:"coordenada"})," e veja quando quiser!"]}),_.jsx(rn,{to:"/home/coordinates",className:"button",children:"Try Now"})]})}const $U="/app_coordinates/assets/armazenamento-09971877.svg",FU="/app_coordinates/assets/googleapi-1c30252a.svg",UU="/app_coordinates/assets/geolocalizacao-08b5f0ef.svg",jU=Xt.section`
    width: 100%;
   
    background-color: #101010ed;
    display: flex;
    justify-content: space-evenly;
    
    gap: 20px;
    align-items: center;
    padding:  200px 10px;
    flex-wrap: wrap;
`,kf=Xt.div`
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
`;function BU(){return _.jsxs(jU,{children:[_.jsxs(kf,{children:[_.jsx("img",{src:$U,alt:""}),_.jsx("h2",{children:"Armazenamento"}),_.jsx("p",{children:"Armazene os seus endereços e suas coordenadas para acessar quando quiser."})]}),_.jsxs(kf,{children:[_.jsx("img",{src:UU,alt:""}),_.jsx("h2",{children:"Geolocalização"}),_.jsx("p",{children:"Tenha em mãos as exatas coordenadas geográficas que você procura"})]}),_.jsxs(kf,{children:[_.jsx("img",{src:FU,alt:""}),_.jsx("h2",{children:"Google API"}),_.jsx("p",{children:"Esse projeto utiliza Google API para fornecer a geolocalização que você deseja."})]})]})}function zU(){return _.jsxs(_.Fragment,{children:[_.jsx(MU,{}),_.jsx(BU,{})]})}const VU=Xt.div`



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


   
   @media screen and (max-width:380px){
        height: 120vh;
        padding-bottom: 30px;
        
   }
    

    
`;function Em(t,e){return Em=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Em(t,e)}function dd(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Em(t,e)}var fd=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(r){var i=this,s=r||function(){};return this.listeners.push(s),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(o){return o!==s}),i.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}();function Ie(){return Ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ie.apply(this,arguments)}var Yk=typeof window>"u";function qt(){}function HU(t,e){return typeof t=="function"?t(e):t}function qU(t){return typeof t=="number"&&t>=0&&t!==1/0}function Xc(t){return Array.isArray(t)?t:[t]}function WU(t,e){return Math.max(t+(e||0)-Date.now(),0)}function If(t,e,n){return pd(t)?typeof e=="function"?Ie({},n,{queryKey:t,queryFn:e}):Ie({},e,{queryKey:t}):t}function Hr(t,e,n){return pd(t)?[Ie({},e,{queryKey:t}),n]:[t||{},e]}function KU(t,e){if(t===!0&&e===!0||t==null&&e==null)return"all";if(t===!1&&e===!1)return"none";var n=t??!e;return n?"active":"inactive"}function y1(t,e){var n=t.active,r=t.exact,i=t.fetching,s=t.inactive,o=t.predicate,a=t.queryKey,l=t.stale;if(pd(a)){if(r){if(e.queryHash!==Qy(a,e.options))return!1}else if(!Jc(e.queryKey,a))return!1}var u=KU(n,s);if(u==="none")return!1;if(u!=="all"){var c=e.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i=="boolean"&&e.isFetching()!==i||o&&!o(e))}function v1(t,e){var n=t.exact,r=t.fetching,i=t.predicate,s=t.mutationKey;if(pd(s)){if(!e.options.mutationKey)return!1;if(n){if(Fi(e.options.mutationKey)!==Fi(s))return!1}else if(!Jc(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Qy(t,e){var n=(e==null?void 0:e.queryKeyHashFn)||Fi;return n(t)}function Fi(t){var e=Xc(t);return GU(e)}function GU(t){return JSON.stringify(t,function(e,n){return _m(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Jc(t,e){return Xk(Xc(t),Xc(e))}function Xk(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(function(n){return!Xk(t[n],e[n])}):!1}function Jk(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||_m(t)&&_m(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{},a=0,l=0;l<s;l++){var u=n?l:i[l];o[u]=Jk(t[u],e[u]),o[u]===t[u]&&a++}return r===s&&a===r?t:o}return e}function _m(t){if(!w1(t))return!1;var e=t.constructor;if(typeof e>"u")return!0;var n=e.prototype;return!(!w1(n)||!n.hasOwnProperty("isPrototypeOf"))}function w1(t){return Object.prototype.toString.call(t)==="[object Object]"}function pd(t){return typeof t=="string"||Array.isArray(t)}function QU(t){return new Promise(function(e){setTimeout(e,t)})}function E1(t){Promise.resolve().then(t).catch(function(e){return setTimeout(function(){throw e})})}function Zk(){if(typeof AbortController=="function")return new AbortController}var YU=function(t){dd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!Yk&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setFocused(a):o.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},e}(fd),Gu=new YU,XU=function(t){dd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!Yk&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setOnline(a):o.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},e}(fd),Qu=new XU;function JU(t){return Math.min(1e3*Math.pow(2,t),3e4)}function Zc(t){return typeof(t==null?void 0:t.cancel)=="function"}var eI=function(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent};function xf(t){return t instanceof eI}var tI=function(e){var n=this,r=!1,i,s,o,a;this.abort=e.abort,this.cancel=function(d){return i==null?void 0:i(d)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return s==null?void 0:s()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,f){o=d,a=f});var l=function(f){n.isResolved||(n.isResolved=!0,e.onSuccess==null||e.onSuccess(f),s==null||s(),o(f))},u=function(f){n.isResolved||(n.isResolved=!0,e.onError==null||e.onError(f),s==null||s(),a(f))},c=function(){return new Promise(function(f){s=f,n.isPaused=!0,e.onPause==null||e.onPause()}).then(function(){s=void 0,n.isPaused=!1,e.onContinue==null||e.onContinue()})},h=function d(){if(!n.isResolved){var f;try{f=e.fn()}catch(m){f=Promise.reject(m)}i=function(v){if(!n.isResolved&&(u(new eI(v)),n.abort==null||n.abort(),Zc(f)))try{f.cancel()}catch{}},n.isTransportCancelable=Zc(f),Promise.resolve(f).then(l).catch(function(m){var v,E;if(!n.isResolved){var g=(v=e.retry)!=null?v:3,p=(E=e.retryDelay)!=null?E:JU,w=typeof p=="function"?p(n.failureCount,m):p,y=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,m);if(r||!y){u(m);return}n.failureCount++,e.onFail==null||e.onFail(n.failureCount,m),QU(w).then(function(){if(!Gu.isFocused()||!Qu.isOnline())return c()}).then(function(){r?u(m):d()})}})}};h()},ZU=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var e=t.prototype;return e.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},e.schedule=function(r){var i=this;this.transactions?this.queue.push(r):E1(function(){i.notifyFn(r)})},e.batchCalls=function(r){var i=this;return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];i.schedule(function(){r.apply(void 0,o)})}},e.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&E1(function(){r.batchNotifyFn(function(){i.forEach(function(s){r.notifyFn(s)})})})},e.setNotifyFunction=function(r){this.notifyFn=r},e.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},t}(),It=new ZU,nI=console;function rI(){return nI}function e4(t){nI=t}var t4=function(){function t(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var e=t.prototype;return e.setOptions=function(r){var i;this.options=Ie({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},e.setDefaultOptions=function(r){this.defaultOptions=r},e.scheduleGc=function(){var r=this;this.clearGcTimeout(),qU(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},e.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},e.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},e.setData=function(r,i){var s,o,a=this.state.data,l=HU(r,a);return(s=(o=this.options).isDataEqual)!=null&&s.call(o,a,l)?l=a:this.options.structuralSharing!==!1&&(l=Jk(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},e.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},e.cancel=function(r){var i,s=this.promise;return(i=this.retryer)==null||i.cancel(r),s?s.then(qt).catch(qt):Promise.resolve()},e.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},e.reset=function(){this.destroy(),this.setState(this.initialState)},e.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},e.isFetching=function(){return this.state.isFetching},e.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},e.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!WU(this.state.dataUpdatedAt,r)},e.onFocus=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.onOnline=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},e.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},e.getObserversCount=function(){return this.observers.length},e.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},e.fetch=function(r,i){var s=this,o,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(p){return p.options.queryFn});c&&this.setOptions(c.options)}var h=Xc(this.queryKey),d=Zk(),f={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(f,"signal",{enumerable:!0,get:function(){if(d)return s.abortSignalConsumed=!0,d.signal}});var m=function(){return s.options.queryFn?(s.abortSignalConsumed=!1,s.options.queryFn(f)):Promise.reject("Missing queryFn")},v={fetchOptions:i,options:this.options,queryKey:h,state:this.state,fetchFn:m,meta:this.meta};if((o=this.options.behavior)!=null&&o.onFetch){var E;(E=this.options.behavior)==null||E.onFetch(v)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=v.fetchOptions)==null?void 0:a.meta)){var g;this.dispatch({type:"fetch",meta:(g=v.fetchOptions)==null?void 0:g.meta})}return this.retryer=new tI({fn:v.fetchFn,abort:d==null||(l=d.abort)==null?void 0:l.bind(d),onSuccess:function(w){s.setData(w),s.cache.config.onSuccess==null||s.cache.config.onSuccess(w,s),s.cacheTime===0&&s.optionalRemove()},onError:function(w){xf(w)&&w.silent||s.dispatch({type:"error",error:w}),xf(w)||(s.cache.config.onError==null||s.cache.config.onError(w,s),rI().error(w)),s.cacheTime===0&&s.optionalRemove()},onFail:function(){s.dispatch({type:"failed"})},onPause:function(){s.dispatch({type:"pause"})},onContinue:function(){s.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay}),this.promise=this.retryer.promise,this.promise},e.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),It.batch(function(){i.observers.forEach(function(s){s.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},e.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,s=typeof r.initialData<"u",o=s?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},e.reducer=function(r,i){var s,o;switch(i.type){case"failed":return Ie({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ie({},r,{isPaused:!0});case"continue":return Ie({},r,{isPaused:!1});case"fetch":return Ie({},r,{fetchFailureCount:0,fetchMeta:(s=i.meta)!=null?s:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ie({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=i.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return xf(a)&&a.revert&&this.revertState?Ie({},this.revertState):Ie({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ie({},r,{isInvalidated:!0});case"setState":return Ie({},r,i.state);default:return r}},t}(),n4=function(t){dd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=e.prototype;return n.build=function(i,s,o){var a,l=s.queryKey,u=(a=s.queryHash)!=null?a:Qy(l,s),c=this.get(u);return c||(c=new t4({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(s),state:o,defaultOptions:i.getQueryDefaults(l),meta:s.meta}),this.add(c)),c},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var s=this.queriesMap[i.queryHash];s&&(i.destroy(),this.queries=this.queries.filter(function(o){return o!==i}),s===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;It.batch(function(){i.queries.forEach(function(s){i.remove(s)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,s){var o=Hr(i,s),a=o[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return y1(a,l)})},n.findAll=function(i,s){var o=Hr(i,s),a=o[0];return Object.keys(a).length>0?this.queries.filter(function(l){return y1(a,l)}):this.queries},n.notify=function(i){var s=this;It.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){var i=this;It.batch(function(){i.queries.forEach(function(s){s.onFocus()})})},n.onOnline=function(){var i=this;It.batch(function(){i.queries.forEach(function(s){s.onOnline()})})},e}(fd),r4=function(){function t(n){this.options=Ie({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||i4(),this.meta=n.meta}var e=t.prototype;return e.setState=function(r){this.dispatch({type:"setState",state:r})},e.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},e.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(qt).catch(qt)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var r=this,i,s=this.state.status==="loading",o=Promise.resolve();return s||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),o.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),rI().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},e.executeMutation=function(){var r=this,i;return this.retryer=new tI({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(r){var i=this;this.state=s4(this.state,r),It.batch(function(){i.observers.forEach(function(s){s.onMutationUpdate(r)}),i.mutationCache.notify(i)})},t}();function i4(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function s4(t,e){switch(e.type){case"failed":return Ie({},t,{failureCount:t.failureCount+1});case"pause":return Ie({},t,{isPaused:!0});case"continue":return Ie({},t,{isPaused:!1});case"loading":return Ie({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return Ie({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return Ie({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ie({},t,e.state);default:return t}}var o4=function(t){dd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=e.prototype;return n.build=function(i,s,o){var a=new r4({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(s),state:o,defaultOptions:s.mutationKey?i.getMutationDefaults(s.mutationKey):void 0,meta:s.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(s){return s!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;It.batch(function(){i.mutations.forEach(function(s){i.remove(s)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(s){return v1(i,s)})},n.findAll=function(i){return this.mutations.filter(function(s){return v1(i,s)})},n.notify=function(i){var s=this;It.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(s){return s.state.isPaused});return It.batch(function(){return i.reduce(function(s,o){return s.then(function(){return o.continue().catch(qt)})},Promise.resolve())})},e}(fd);function a4(){return{onFetch:function(e){e.fetchFn=function(){var n,r,i,s,o,a,l=(n=e.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=e.fetchOptions)==null||(s=i.meta)==null?void 0:s.fetchMore,c=u==null?void 0:u.pageParam,h=(u==null?void 0:u.direction)==="forward",d=(u==null?void 0:u.direction)==="backward",f=((o=e.state.data)==null?void 0:o.pages)||[],m=((a=e.state.data)==null?void 0:a.pageParams)||[],v=Zk(),E=v==null?void 0:v.signal,g=m,p=!1,w=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},y=function(Oe,Ce,Pe,Ne){return g=Ne?[Ce].concat(g):[].concat(g,[Ce]),Ne?[Pe].concat(Oe):[].concat(Oe,[Pe])},C=function(Oe,Ce,Pe,Ne){if(p)return Promise.reject("Cancelled");if(typeof Pe>"u"&&!Ce&&Oe.length)return Promise.resolve(Oe);var N={queryKey:e.queryKey,signal:E,pageParam:Pe,meta:e.meta},V=w(N),Q=Promise.resolve(V).then(function(F){return y(Oe,Pe,F,Ne)});if(Zc(V)){var ye=Q;ye.cancel=V.cancel}return Q},R;if(!f.length)R=C([]);else if(h){var b=typeof c<"u",L=b?c:_1(e.options,f);R=C(f,b,L)}else if(d){var G=typeof c<"u",K=G?c:l4(e.options,f);R=C(f,G,K,!0)}else(function(){g=[];var be=typeof e.options.getNextPageParam>"u",Oe=l&&f[0]?l(f[0],0,f):!0;R=Oe?C([],be,m[0]):Promise.resolve(y([],m[0],f[0]));for(var Ce=function(N){R=R.then(function(V){var Q=l&&f[N]?l(f[N],N,f):!0;if(Q){var ye=be?m[N]:_1(e.options,V);return C(V,be,ye)}return Promise.resolve(y(V,m[N],f[N]))})},Pe=1;Pe<f.length;Pe++)Ce(Pe)})();var De=R.then(function(be){return{pages:be,pageParams:g}}),ie=De;return ie.cancel=function(){p=!0,v==null||v.abort(),Zc(R)&&R.cancel()},De}}}}function _1(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function l4(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}var u4=function(){function t(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new n4,this.mutationCache=n.mutationCache||new o4,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var e=t.prototype;return e.mount=function(){var r=this;this.unsubscribeFocus=Gu.subscribe(function(){Gu.isFocused()&&Qu.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Qu.subscribe(function(){Gu.isFocused()&&Qu.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},e.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},e.isFetching=function(r,i){var s=Hr(r,i),o=s[0];return o.fetching=!0,this.queryCache.findAll(o).length},e.isMutating=function(r){return this.mutationCache.findAll(Ie({},r,{fetching:!0})).length},e.getQueryData=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state.data},e.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var s=i.queryKey,o=i.state,a=o.data;return[s,a]})},e.setQueryData=function(r,i,s){var o=If(r),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(i,s)},e.setQueriesData=function(r,i,s){var o=this;return It.batch(function(){return o.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,o.setQueryData(l,i,s)]})})},e.getQueryState=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state},e.removeQueries=function(r,i){var s=Hr(r,i),o=s[0],a=this.queryCache;It.batch(function(){a.findAll(o).forEach(function(l){a.remove(l)})})},e.resetQueries=function(r,i,s){var o=this,a=Hr(r,i,s),l=a[0],u=a[1],c=this.queryCache,h=Ie({},l,{active:!0});return It.batch(function(){return c.findAll(l).forEach(function(d){d.reset()}),o.refetchQueries(h,u)})},e.cancelQueries=function(r,i,s){var o=this,a=Hr(r,i,s),l=a[0],u=a[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var h=It.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.cancel(c)})});return Promise.all(h).then(qt).catch(qt)},e.invalidateQueries=function(r,i,s){var o,a,l,u=this,c=Hr(r,i,s),h=c[0],d=c[1],f=Ie({},h,{active:(o=(a=h.refetchActive)!=null?a:h.active)!=null?o:!0,inactive:(l=h.refetchInactive)!=null?l:!1});return It.batch(function(){return u.queryCache.findAll(h).forEach(function(m){m.invalidate()}),u.refetchQueries(f,d)})},e.refetchQueries=function(r,i,s){var o=this,a=Hr(r,i,s),l=a[0],u=a[1],c=It.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.fetch(void 0,Ie({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),h=Promise.all(c).then(qt);return u!=null&&u.throwOnError||(h=h.catch(qt)),h},e.fetchQuery=function(r,i,s){var o=If(r,i,s),a=this.defaultQueryOptions(o);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},e.prefetchQuery=function(r,i,s){return this.fetchQuery(r,i,s).then(qt).catch(qt)},e.fetchInfiniteQuery=function(r,i,s){var o=If(r,i,s);return o.behavior=a4(),this.fetchQuery(o)},e.prefetchInfiniteQuery=function(r,i,s){return this.fetchInfiniteQuery(r,i,s).then(qt).catch(qt)},e.cancelMutations=function(){var r=this,i=It.batch(function(){return r.mutationCache.getAll().map(function(s){return s.cancel()})});return Promise.all(i).then(qt).catch(qt)},e.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},e.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},e.getQueryCache=function(){return this.queryCache},e.getMutationCache=function(){return this.mutationCache},e.getDefaultOptions=function(){return this.defaultOptions},e.setDefaultOptions=function(r){this.defaultOptions=r},e.setQueryDefaults=function(r,i){var s=this.queryDefaults.find(function(o){return Fi(r)===Fi(o.queryKey)});s?s.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},e.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(s){return Jc(r,s.queryKey)}))==null?void 0:i.defaultOptions:void 0},e.setMutationDefaults=function(r,i){var s=this.mutationDefaults.find(function(o){return Fi(r)===Fi(o.mutationKey)});s?s.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},e.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(s){return Jc(r,s.mutationKey)}))==null?void 0:i.defaultOptions:void 0},e.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=Ie({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Qy(i.queryKey,i)),i},e.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},e.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:Ie({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},e.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},t}(),c4=eR.unstable_batchedUpdates;It.setBatchNotifyFunction(c4);var h4=console;e4(h4);var S1=Mn.createContext(void 0),d4=Mn.createContext(!1);function f4(t){return t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=S1),window.ReactQueryClientContext):S1}var p4=function(e){var n=e.client,r=e.contextSharing,i=r===void 0?!1:r,s=e.children;Mn.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var o=f4(i);return Mn.createElement(d4.Provider,{value:i},Mn.createElement(o.Provider,{value:n},s))};const m4="/app_coordinates/assets/Loading-aa4d524e.svg";function iI(t,e){return function(){return t.apply(e,arguments)}}const{toString:g4}=Object.prototype,{getPrototypeOf:Yy}=Object,md=(t=>e=>{const n=g4.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),cr=t=>(t=t.toLowerCase(),e=>md(e)===t),gd=t=>e=>typeof e===t,{isArray:Po}=Array,cl=gd("undefined");function y4(t){return t!==null&&!cl(t)&&t.constructor!==null&&!cl(t.constructor)&&An(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const sI=cr("ArrayBuffer");function v4(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&sI(t.buffer),e}const w4=gd("string"),An=gd("function"),oI=gd("number"),yd=t=>t!==null&&typeof t=="object",E4=t=>t===!0||t===!1,Yu=t=>{if(md(t)!=="object")return!1;const e=Yy(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},_4=cr("Date"),S4=cr("File"),T4=cr("Blob"),C4=cr("FileList"),k4=t=>yd(t)&&An(t.pipe),I4=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||An(t.append)&&((e=md(t))==="formdata"||e==="object"&&An(t.toString)&&t.toString()==="[object FormData]"))},x4=cr("URLSearchParams"),A4=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Po(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function aI(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const lI=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),uI=t=>!cl(t)&&t!==lI;function Sm(){const{caseless:t}=uI(this)&&this||{},e={},n=(r,i)=>{const s=t&&aI(e,i)||i;Yu(e[s])&&Yu(r)?e[s]=Sm(e[s],r):Yu(r)?e[s]=Sm({},r):Po(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&zl(arguments[r],n);return e}const R4=(t,e,n,{allOwnKeys:r}={})=>(zl(e,(i,s)=>{n&&An(i)?t[s]=iI(i,n):t[s]=i},{allOwnKeys:r}),t),b4=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),P4=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},N4=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Yy(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},D4=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},O4=t=>{if(!t)return null;if(Po(t))return t;let e=t.length;if(!oI(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},L4=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Yy(Uint8Array)),M4=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},$4=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},F4=cr("HTMLFormElement"),U4=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),T1=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),j4=cr("RegExp"),cI=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};zl(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},B4=t=>{cI(t,(e,n)=>{if(An(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(An(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},z4=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Po(t)?r(t):r(String(t).split(e)),n},V4=()=>{},H4=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Af="abcdefghijklmnopqrstuvwxyz",C1="0123456789",hI={DIGIT:C1,ALPHA:Af,ALPHA_DIGIT:Af+Af.toUpperCase()+C1},q4=(t=16,e=hI.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function W4(t){return!!(t&&An(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const K4=t=>{const e=new Array(10),n=(r,i)=>{if(yd(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Po(r)?[]:{};return zl(r,(o,a)=>{const l=n(o,i+1);!cl(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},G4=cr("AsyncFunction"),Q4=t=>t&&(yd(t)||An(t))&&An(t.then)&&An(t.catch),x={isArray:Po,isArrayBuffer:sI,isBuffer:y4,isFormData:I4,isArrayBufferView:v4,isString:w4,isNumber:oI,isBoolean:E4,isObject:yd,isPlainObject:Yu,isUndefined:cl,isDate:_4,isFile:S4,isBlob:T4,isRegExp:j4,isFunction:An,isStream:k4,isURLSearchParams:x4,isTypedArray:L4,isFileList:C4,forEach:zl,merge:Sm,extend:R4,trim:A4,stripBOM:b4,inherits:P4,toFlatObject:N4,kindOf:md,kindOfTest:cr,endsWith:D4,toArray:O4,forEachEntry:M4,matchAll:$4,isHTMLForm:F4,hasOwnProperty:T1,hasOwnProp:T1,reduceDescriptors:cI,freezeMethods:B4,toObjectSet:z4,toCamelCase:U4,noop:V4,toFiniteNumber:H4,findKey:aI,global:lI,isContextDefined:uI,ALPHABET:hI,generateString:q4,isSpecCompliantForm:W4,toJSONObject:K4,isAsyncFn:G4,isThenable:Q4};function ve(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}x.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const dI=ve.prototype,fI={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{fI[t]={value:t}});Object.defineProperties(ve,fI);Object.defineProperty(dI,"isAxiosError",{value:!0});ve.from=(t,e,n,r,i,s)=>{const o=Object.create(dI);return x.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ve.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const Y4=null;function Tm(t){return x.isPlainObject(t)||x.isArray(t)}function pI(t){return x.endsWith(t,"[]")?t.slice(0,-2):t}function k1(t,e,n){return t?t.concat(e).map(function(i,s){return i=pI(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function X4(t){return x.isArray(t)&&!t.some(Tm)}const J4=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function vd(t,e,n){if(!x.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,E){return!x.isUndefined(E[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(x.isDate(m))return m.toISOString();if(!l&&x.isBlob(m))throw new ve("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(m)||x.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,v,E){let g=m;if(m&&!E&&typeof m=="object"){if(x.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(x.isArray(m)&&X4(m)||(x.isFileList(m)||x.endsWith(v,"[]"))&&(g=x.toArray(m)))return v=pI(v),g.forEach(function(w,y){!(x.isUndefined(w)||w===null)&&e.append(o===!0?k1([v],y,s):o===null?v:v+"[]",u(w))}),!1}return Tm(m)?!0:(e.append(k1(E,v,s),u(m)),!1)}const h=[],d=Object.assign(J4,{defaultVisitor:c,convertValue:u,isVisitable:Tm});function f(m,v){if(!x.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(m),x.forEach(m,function(g,p){(!(x.isUndefined(g)||g===null)&&i.call(e,g,x.isString(p)?p.trim():p,v,d))===!0&&f(g,v?v.concat(p):[p])}),h.pop()}}if(!x.isObject(t))throw new TypeError("data must be an object");return f(t),e}function I1(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Xy(t,e){this._pairs=[],t&&vd(t,this,e)}const mI=Xy.prototype;mI.append=function(e,n){this._pairs.push([e,n])};mI.toString=function(e){const n=e?function(r){return e.call(this,r,I1)}:I1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Z4(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gI(t,e,n){if(!e)return t;const r=n&&n.encode||Z4,i=n&&n.serialize;let s;if(i?s=i(e,n):s=x.isURLSearchParams(e)?e.toString():new Xy(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class ej{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(r){r!==null&&e(r)})}}const x1=ej,yI={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tj=typeof URLSearchParams<"u"?URLSearchParams:Xy,nj=typeof FormData<"u"?FormData:null,rj=typeof Blob<"u"?Blob:null,ij=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),sj=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),tr={isBrowser:!0,classes:{URLSearchParams:tj,FormData:nj,Blob:rj},isStandardBrowserEnv:ij,isStandardBrowserWebWorkerEnv:sj,protocols:["http","https","file","blob","url","data"]};function oj(t,e){return vd(t,new tr.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return tr.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function aj(t){return x.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lj(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function vI(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&x.isArray(i)?i.length:o,l?(x.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!x.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&x.isArray(i[o])&&(i[o]=lj(i[o])),!a)}if(x.isFormData(t)&&x.isFunction(t.entries)){const n={};return x.forEachEntry(t,(r,i)=>{e(aj(r),i,n,0)}),n}return null}const uj={"Content-Type":void 0};function cj(t,e,n){if(x.isString(t))try{return(e||JSON.parse)(t),x.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const wd={transitional:yI,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=x.isObject(e);if(s&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return i&&i?JSON.stringify(vI(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return oj(e,this.formSerializer).toString();if((a=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return vd(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),cj(e)):e}],transformResponse:[function(e){const n=this.transitional||wd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&x.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ve.from(a,ve.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tr.classes.FormData,Blob:tr.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};x.forEach(["delete","get","head"],function(e){wd.headers[e]={}});x.forEach(["post","put","patch"],function(e){wd.headers[e]=x.merge(uj)});const Jy=wd,hj=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dj=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&hj[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},A1=Symbol("internals");function Go(t){return t&&String(t).trim().toLowerCase()}function Xu(t){return t===!1||t==null?t:x.isArray(t)?t.map(Xu):String(t)}function fj(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const pj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Rf(t,e,n,r,i){if(x.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!x.isString(e)){if(x.isString(r))return e.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(e)}}function mj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function gj(t,e){const n=x.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Ed{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=Go(l);if(!c)throw new Error("header name must be a non-empty string");const h=x.findKey(i,c);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||l]=Xu(a))}const o=(a,l)=>x.forEach(a,(u,c)=>s(u,c,l));return x.isPlainObject(e)||e instanceof this.constructor?o(e,n):x.isString(e)&&(e=e.trim())&&!pj(e)?o(dj(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Go(e),e){const r=x.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return fj(i);if(x.isFunction(n))return n.call(this,i,r);if(x.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Go(e),e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Rf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Go(o),o){const a=x.findKey(r,o);a&&(!n||Rf(r,r[a],a,n))&&(delete r[a],i=!0)}}return x.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Rf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return x.forEach(this,(i,s)=>{const o=x.findKey(r,s);if(o){n[o]=Xu(i),delete n[s];return}const a=e?mj(s):String(s).trim();a!==s&&delete n[s],n[a]=Xu(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return x.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[A1]=this[A1]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Go(o);r[a]||(gj(i,o),r[a]=!0)}return x.isArray(e)?e.forEach(s):s(e),this}}Ed.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.freezeMethods(Ed.prototype);x.freezeMethods(Ed);const Cr=Ed;function bf(t,e){const n=this||Jy,r=e||n,i=Cr.from(r.headers);let s=r.data;return x.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function wI(t){return!!(t&&t.__CANCEL__)}function Vl(t,e,n){ve.call(this,t??"canceled",ve.ERR_CANCELED,e,n),this.name="CanceledError"}x.inherits(Vl,ve,{__CANCEL__:!0});function yj(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ve("Request failed with status code "+n.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const vj=tr.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),x.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),x.isString(s)&&l.push("path="+s),x.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function wj(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ej(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function EI(t,e){return t&&!wj(e)?Ej(t,e):e}const _j=tr.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=x.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Sj(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Tj(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const f=c&&u-c;return f?Math.round(d*1e3/f):void 0}}function R1(t,e){let n=0;const r=Tj(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const Cj=typeof XMLHttpRequest<"u",kj=Cj&&function(t){return new Promise(function(n,r){let i=t.data;const s=Cr.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}x.isFormData(i)&&(tr.isStandardBrowserEnv||tr.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+m))}const c=EI(t.baseURL,t.url);u.open(t.method.toUpperCase(),gI(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const f=Cr.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:f,config:t,request:u};yj(function(g){n(g),l()},function(g){r(g),l()},v),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new ve("Request aborted",ve.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new ve("Network Error",ve.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let m=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||yI;t.timeoutErrorMessage&&(m=t.timeoutErrorMessage),r(new ve(m,v.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,t,u)),u=null},tr.isStandardBrowserEnv){const f=(t.withCredentials||_j(c))&&t.xsrfCookieName&&vj.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&x.forEach(s.toJSON(),function(m,v){u.setRequestHeader(v,m)}),x.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",R1(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",R1(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{u&&(r(!f||f.type?new Vl(null,t,u):f),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=Sj(c);if(d&&tr.protocols.indexOf(d)===-1){r(new ve("Unsupported protocol "+d+":",ve.ERR_BAD_REQUEST,t));return}u.send(i||null)})},Ju={http:Y4,xhr:kj};x.forEach(Ju,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ij={getAdapter:t=>{t=x.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=x.isString(n)?Ju[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ve(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(x.hasOwnProp(Ju,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!x.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ju};function Pf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vl(null,t)}function b1(t){return Pf(t),t.headers=Cr.from(t.headers),t.data=bf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ij.getAdapter(t.adapter||Jy.adapter)(t).then(function(r){return Pf(t),r.data=bf.call(t,t.transformResponse,r),r.headers=Cr.from(r.headers),r},function(r){return wI(r)||(Pf(t),r&&r.response&&(r.response.data=bf.call(t,t.transformResponse,r.response),r.response.headers=Cr.from(r.response.headers))),Promise.reject(r)})}const P1=t=>t instanceof Cr?t.toJSON():t;function ho(t,e){e=e||{};const n={};function r(u,c,h){return x.isPlainObject(u)&&x.isPlainObject(c)?x.merge.call({caseless:h},u,c):x.isPlainObject(c)?x.merge({},c):x.isArray(c)?c.slice():c}function i(u,c,h){if(x.isUndefined(c)){if(!x.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function s(u,c){if(!x.isUndefined(c))return r(void 0,c)}function o(u,c){if(x.isUndefined(c)){if(!x.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,h){if(h in e)return r(u,c);if(h in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(P1(u),P1(c),!0)};return x.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=l[c]||i,d=h(t[c],e[c],c);x.isUndefined(d)&&h!==a||(n[c]=d)}),n}const _I="1.4.0",Zy={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Zy[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const N1={};Zy.transitional=function(e,n,r){function i(s,o){return"[Axios v"+_I+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ve(i(o," has been removed"+(n?" in "+n:"")),ve.ERR_DEPRECATED);return n&&!N1[o]&&(N1[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function xj(t,e,n){if(typeof t!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ve("option "+s+" must be "+l,ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ve("Unknown option "+s,ve.ERR_BAD_OPTION)}}const Cm={assertOptions:xj,validators:Zy},Br=Cm.validators;class eh{constructor(e){this.defaults=e,this.interceptors={request:new x1,response:new x1}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ho(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Cm.assertOptions(r,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1),i!=null&&(x.isFunction(i)?n.paramsSerializer={serialize:i}:Cm.assertOptions(i,{encode:Br.function,serialize:Br.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&x.merge(s.common,s[n.method]),o&&x.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=Cr.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,h=0,d;if(!l){const m=[b1.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),d=m.length,c=Promise.resolve(n);h<d;)c=c.then(m[h++],m[h++]);return c}d=a.length;let f=n;for(h=0;h<d;){const m=a[h++],v=a[h++];try{f=m(f)}catch(E){v.call(this,E);break}}try{c=b1.call(this,f)}catch(m){return Promise.reject(m)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(e){e=ho(this.defaults,e);const n=EI(e.baseURL,e.url);return gI(n,e.params,e.paramsSerializer)}}x.forEach(["delete","get","head","options"],function(e){eh.prototype[e]=function(n,r){return this.request(ho(r||{},{method:e,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(ho(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}eh.prototype[e]=n(),eh.prototype[e+"Form"]=n(!0)});const Zu=eh;class ev{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Vl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new ev(function(i){e=i}),cancel:e}}}const Aj=ev;function Rj(t){return function(n){return t.apply(null,n)}}function bj(t){return x.isObject(t)&&t.isAxiosError===!0}const km={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(km).forEach(([t,e])=>{km[e]=t});const Pj=km;function SI(t){const e=new Zu(t),n=iI(Zu.prototype.request,e);return x.extend(n,Zu.prototype,e,{allOwnKeys:!0}),x.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return SI(ho(t,i))},n}const gt=SI(Jy);gt.Axios=Zu;gt.CanceledError=Vl;gt.CancelToken=Aj;gt.isCancel=wI;gt.VERSION=_I;gt.toFormData=vd;gt.AxiosError=ve;gt.Cancel=gt.CanceledError;gt.all=function(e){return Promise.all(e)};gt.spread=Rj;gt.isAxiosError=bj;gt.mergeConfig=ho;gt.AxiosHeaders=Cr;gt.formToJSON=t=>vI(x.isHTMLForm(t)?new FormData(t):t);gt.HttpStatusCode=Pj;gt.default=gt;const Nj=gt;function Dj(){const{theme:t}=I.useContext(qn),[e,n]=I.useState(""),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(!1);async function h(v){c(!0);let E;Nj.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${v}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8`).then(g=>{console.log(g),E=g.data.results[0].geometry.location,i(E.lat),o(E.lng),d(v)})}const d=async v=>{l(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8&q=${v}`),c(!1)};async function f(v){v.preventDefault(),h(e)}async function m(){const v=JSON.parse(localStorage.getItem("@userStorage"));await OO(pC(sl,"coordinates"),{adress:e,lat:r,lng:s,srcMap:a,userId:v.uid}).then(()=>{n(""),l(""),i(""),o("")})}return _.jsxs(VU,{theme:t,children:[_.jsx("div",{className:"formulario",children:_.jsxs("form",{onSubmit:f,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Digite um endereço:"}),_.jsx("input",{type:"text",name:"",id:"",value:e,onChange:v=>{n(v.target.value),l(""),i(""),o("")}})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Latitude"}),_.jsx("input",{type:"text",name:"",value:r,readOnly:!0,className:"readOnly"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Longitude"}),_.jsx("input",{type:"text",name:"",value:s,readOnly:!0,className:"readOnly"})]}),_.jsx("button",{type:"submit",children:u===!1?"Buscar":"Carregando..."})]})}),_.jsxs("div",{className:"divImg",children:[_.jsx("iframe",{width:a===""?280:320,height:a===""?280:320,src:a===""?m4:a,frameBorder:"0"}),a===""?_.jsx("h2",{children:"Aguardando..."}):_.jsx("button",{onClick:m,children:"Salvar"})]})]})}const Oj="/app_coordinates/assets/inicio-21a63dea.svg",Lj=Xt.main`
    width: 100vw;
    height: 100vh;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
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
`;function Mj(t){const{theme:e,toggleTheme:n}=I.useContext(qn);return localStorage.getItem("@userStorage","logado")?_.jsx($k,{to:"/home"}):_.jsxs(Lj,{theme:e,children:[_.jsxs("div",{className:"text",children:[_.jsx("h1",{children:"Descubra coordenadas exatas e veja quando quiser"}),_.jsx("p",{children:"Registre-se para continuar..."}),_.jsxs("div",{className:"links",children:[_.jsx(rn,{to:"/signin",children:"Sign in"}),_.jsx(rn,{to:"/signup",children:"Sign up"})]})]}),_.jsx("div",{children:_.jsx("img",{src:Oj,alt:""})})]})}function $j(){return _.jsx(_.Fragment,{children:_.jsx(Mj,{})})}const TI=Xt.div`
    width: 100vw;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
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

   
`,Fj="/app_coordinates/assets/login-3e19d223.svg";function Uj(t){const[e,n]=I.useState(),[r,i]=I.useState(),{signIn:s,loadingAuth:o}=I.useContext(bo),a=Ro();async function l(c){c.preventDefault(),e!==""&&r!==""&&await s(e,r).then(h=>{a("/home")})}const{theme:u}=I.useContext(qn);return _.jsxs(TI,{theme:u,children:[_.jsx("div",{className:"Divform",children:_.jsxs("form",{onSubmit:l,children:[_.jsx("h1",{children:"Sign in"}),_.jsxs("div",{children:[_.jsx("label",{children:"Email"}),_.jsx("input",{type:"email",required:"",onChange:c=>n(c.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Password"}),_.jsx("input",{type:"password",name:"",id:"",required:"",onChange:c=>i(c.target.value)})]}),_.jsx("button",{type:"submit",children:o===!0?"Loading...":"Sign in"}),_.jsxs("p",{children:["Ou ",_.jsx(rn,{to:"/signup",children:"cadastre-se"})]})]})}),_.jsx("div",{className:"img",children:_.jsx("img",{src:Fj,alt:""})})]})}const jj="/app_coordinates/assets/signup-89f45dbd.svg";function Bj(){const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),{signUp:l,loadingAuth:u}=I.useContext(bo),c=Ro();async function h(f){f.preventDefault(),t!==""&&n!==""&&i!==""&&o!==""&&i===o&&await l(t,n,i).then(m=>{c("/home")})}const{theme:d}=I.useContext(qn);return _.jsxs(TI,{theme:d,children:[_.jsx("div",{className:"Divform",children:_.jsxs("form",{onSubmit:h,children:[_.jsx("h1",{children:"Sign Up"}),_.jsxs("div",{children:[_.jsx("label",{children:"Nome"}),_.jsx("input",{type:"text",onChange:f=>e(f.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Email"}),_.jsx("input",{type:"text",onChange:f=>r(f.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Password"}),_.jsx("input",{type:"password",name:"",id:"",onChange:f=>s(f.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Confirm password"}),_.jsx("input",{type:"password",name:"",id:"",onChange:f=>a(f.target.value)})]}),_.jsx("button",{type:"submit",children:u===!0?"Loading...":"Sign up"}),_.jsxs("p",{children:["Já possui uma conta? ",_.jsx(rn,{to:"/signin",children:"Login"})]})]})}),_.jsx("div",{className:"img",children:_.jsx("img",{src:jj,alt:""})})]})}const zj=Xt.main`
  background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 0vh 25vh 0vh;
`,Vj=Xt.div`
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
`,Hj=Xt.div`
  
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

    .delete{
        color: red;
    }
`,qj="/app_coordinates/assets/avatar-9bcaa191.png";function Wj(t){const{user:e,UserStorage:n}=I.useContext(bo),{theme:r,toggleTheme:i}=I.useContext(qn),s=JSON.parse(localStorage.getItem("@userStorage")),[o,a]=I.useState(s.nome),[l,u]=I.useState(s.email),[c,h]=I.useState(s.imgUrl),[d,f]=I.useState(),[m,v]=I.useState(null);async function E(){if(d===void 0)g();else{const w=s.uid,y=JM(i$,`images/${w}/${d.name}`);YM(y,d).then(C=>{XM(C.ref).then(async R=>{let b=R;console.log(b),v(b),console.log(c),g()})})}}async function g(){await DO(jc(sl,"users",s.uid),{nome:o,imgUrl:m,theme:r}).then(()=>{let w={nome:o,email:l,imgUrl:m,logado:!0,uid:s.uid};n(w)})}function p(w){if(w.target.files[0]){const y=w.target.files[0];console.log(y),y.type==="image/jpeg"||y.type==="image/png"?(f(y),h(URL.createObjectURL(y))):(h(null),f(null))}}return _.jsxs(zj,{theme:r,children:[_.jsx(Vj,{children:_.jsxs("label",{children:[_.jsx("span",{children:"Alterar avatar"}),_.jsx("input",{type:"file",accept:"image/*",onChange:p}),c===null?_.jsx("img",{src:qj,alt:"Foto de perfil"}):_.jsx("img",{src:c,alt:"Foto de perfil",width:250,height:250})]})}),_.jsxs(Hj,{theme:r,children:[_.jsx("h1",{children:"Informações pessoais"}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Nome:"}),_.jsx("input",{type:"text",defaultValue:o,onChange:w=>a(w.target.value),id:""})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Email:"}),_.jsx("input",{type:"email",defaultValue:l,onChange:w=>u(w.target.value),id:""})]}),_.jsxs("div",{className:"divToggleTheme",children:[_.jsx("h1",{children:"Preferências"}),_.jsx("button",{className:"toggleTheme",onClick:i,children:r==="light"?"Dark":"Light"})]}),_.jsx("button",{className:"saveButton",onClick:E,children:"Salvar"}),_.jsx("a",{href:"",className:"delete",children:"Excluir conta"})]})]})}const Kj="/app_coordinates/assets/404-dfb3de82.png",Gj=Xt.div`
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
`;function Qj(){return _.jsxs(Gj,{children:[_.jsx("img",{src:Kj,alt:""}),_.jsx("h1",{children:"Page not found"}),_.jsxs("p",{children:["Back to ",_.jsx(rn,{to:"/home",children:"Home"})," "]})]})}const Yj=Xt.main`
    height: 90vh;
    width: 100%;
`;function Xj(t){I.useState(5);const[e,n]=I.useState(!0),[r,i]=I.useState([]);return I.useEffect(()=>{async function s(){const o=JSON.parse(localStorage.getItem("@userStorage")),a=pC(sl,"coordinates"),l=kO(a,IO("userId","==",o.uid));LO(l,u=>{let c=[];u.forEach(h=>{c.push({id:h.id,adress:h.data().adress,lat:h.data().lat,lng:h.data().lng,srcMap:h.data().srcMap})}),i(c),n(!1)})}s()},[]),_.jsxs(Yj,{children:[_.jsx("h1",{children:"Página Save"}),e===!0?_.jsx("h2",{children:"Buscando Dados..."}):r.map(s=>_.jsxs("div",{children:[_.jsx("h2",{children:s.adress}),_.jsxs("p",{children:["Latitude: ",s.lat]}),_.jsxs("p",{children:["Longitude: ",s.lng]}),_.jsx("br",{})]},s.id))]})}function Jj({children:t}){return localStorage.getItem("@userStorage","logado")?t:_.jsx($k,{to:"/"})}const Zj=EF([{path:"/",element:_.jsx($j,{}),errorElement:_.jsx(Qj,{})},{path:"/signin",element:_.jsx(Uj,{})},{path:"/signup",element:_.jsx(Bj,{})},{path:"/home",element:_.jsx(Jj,{children:_.jsx(OU,{})}),children:[{path:"/home",element:_.jsx(zU,{})},{path:"/home/coordinates",element:_.jsx(Dj,{})},{path:"/home/account",element:_.jsx(Wj,{})},{path:"/home/saved",element:_.jsx(Xj,{})}]}],{basename:"/app_coordinates"}),e3=new u4;Nf.createRoot(document.getElementById("root")).render(_.jsx(Mn.StrictMode,{children:_.jsx(s$,{children:_.jsx(IF,{children:_.jsx(p4,{client:e3,children:_.jsx(hF,{router:Zj})})})})}));
