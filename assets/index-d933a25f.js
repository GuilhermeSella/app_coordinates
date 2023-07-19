function RI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L1={exports:{}},th={},M1={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),bI=Symbol.for("react.portal"),PI=Symbol.for("react.fragment"),NI=Symbol.for("react.strict_mode"),DI=Symbol.for("react.profiler"),OI=Symbol.for("react.provider"),LI=Symbol.for("react.context"),MI=Symbol.for("react.forward_ref"),$I=Symbol.for("react.suspense"),FI=Symbol.for("react.memo"),UI=Symbol.for("react.lazy"),sv=Symbol.iterator;function jI(t){return t===null||typeof t!="object"?null:(t=sv&&t[sv]||t["@@iterator"],typeof t=="function"?t:null)}var $1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F1=Object.assign,U1={};function mo(t,e,n){this.props=t,this.context=e,this.refs=U1,this.updater=n||$1}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j1(){}j1.prototype=mo.prototype;function Am(t,e,n){this.props=t,this.context=e,this.refs=U1,this.updater=n||$1}var Rm=Am.prototype=new j1;Rm.constructor=Am;F1(Rm,mo.prototype);Rm.isPureReactComponent=!0;var ov=Array.isArray,B1=Object.prototype.hasOwnProperty,bm={current:null},z1={key:!0,ref:!0,__self:!0,__source:!0};function V1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B1.call(e,r)&&!z1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:dl,type:t,key:s,ref:o,props:i,_owner:bm.current}}function BI(t,e){return{$$typeof:dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===dl}function zI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var av=/\/+/g;function Id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zI(""+t.key):e.toString(36)}function xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dl:case bI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Id(o,0):r,ov(i)?(n="",t!=null&&(n=t.replace(av,"$&/")+"/"),xu(i,e,n,"",function(u){return u})):i!=null&&(Pm(i)&&(i=BI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(av,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ov(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Id(s,a);o+=xu(s,e,n,l,i)}else if(l=jI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Id(s,a++),o+=xu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gl(t,e,n){if(t==null)return t;var r=[],i=0;return xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function VI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Au={transition:null},HI={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Au,ReactCurrentOwner:bm};pe.Children={map:Gl,forEach:function(t,e,n){Gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gl(t,function(){e++}),e},toArray:function(t){return Gl(t,function(e){return e})||[]},only:function(t){if(!Pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=mo;pe.Fragment=PI;pe.Profiler=DI;pe.PureComponent=Am;pe.StrictMode=NI;pe.Suspense=$I;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HI;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=F1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)B1.call(e,l)&&!z1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:dl,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:LI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OI,_context:t},t.Consumer=t};pe.createElement=V1;pe.createFactory=function(t){var e=V1.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:MI,render:t}};pe.isValidElement=Pm;pe.lazy=function(t){return{$$typeof:UI,_payload:{_status:-1,_result:t},_init:VI}};pe.memo=function(t,e){return{$$typeof:FI,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Au.transition;Au.transition={};try{t()}finally{Au.transition=e}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(t,e){return Xt.current.useCallback(t,e)};pe.useContext=function(t){return Xt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Xt.current.useEffect(t,e)};pe.useId=function(){return Xt.current.useId()};pe.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Xt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};pe.useRef=function(t){return Xt.current.useRef(t)};pe.useState=function(t){return Xt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Xt.current.useTransition()};pe.version="18.2.0";M1.exports=pe;var I=M1.exports;const Fn=xm(I),qI=RI({__proto__:null,default:Fn},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WI=I,KI=Symbol.for("react.element"),GI=Symbol.for("react.fragment"),QI=Object.prototype.hasOwnProperty,YI=WI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XI={key:!0,ref:!0,__self:!0,__source:!0};function H1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)QI.call(e,r)&&!XI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KI,type:t,key:s,ref:o,props:i,_owner:YI.current}}th.Fragment=GI;th.jsx=H1;th.jsxs=H1;L1.exports=th;var _=L1.exports,Df={},q1={exports:{}},yn={},W1={exports:{}},K1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,V){var Q=N.length;N.push(V);e:for(;0<Q;){var ye=Q-1>>>1,F=N[ye];if(0<i(F,V))N[ye]=V,N[Q]=F,Q=ye;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],Q=N.pop();if(Q!==V){N[0]=Q;e:for(var ye=0,F=N.length,j=F>>>1;ye<j;){var $=2*(ye+1)-1,X=N[$],S=$+1,de=N[S];if(0>i(X,Q))S<F&&0>i(de,X)?(N[ye]=de,N[S]=Q,ye=S):(N[ye]=X,N[$]=Q,ye=$);else if(S<F&&0>i(de,Q))N[ye]=de,N[S]=Q,ye=S;else break e}}return V}function i(N,V){var Q=N.sortIndex-V.sortIndex;return Q!==0?Q:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=N)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function v(N){if(y=!1,w(N),!m)if(n(l)!==null)m=!0,Pe(C);else{var V=n(u);V!==null&&Ne(v,V.startTime-N)}}function C(N,V){m=!1,y&&(y=!1,g(L),L=-1),p=!0;var Q=d;try{for(w(V),h=n(l);h!==null&&(!(h.expirationTime>V)||N&&!De());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var F=ye(h.expirationTime<=V);V=t.unstable_now(),typeof F=="function"?h.callback=F:h===n(l)&&r(l),w(V)}else r(l);h=n(l)}if(h!==null)var j=!0;else{var $=n(u);$!==null&&Ne(v,$.startTime-V),j=!1}return j}finally{h=null,d=Q,p=!1}}var R=!1,b=null,L=-1,G=5,K=-1;function De(){return!(t.unstable_now()-K<G)}function ie(){if(b!==null){var N=t.unstable_now();K=N;var V=!0;try{V=b(!0,N)}finally{V?be():(R=!1,b=null)}}else R=!1}var be;if(typeof f=="function")be=function(){f(ie)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ce=Oe.port2;Oe.port1.onmessage=ie,be=function(){Ce.postMessage(null)}}else be=function(){E(ie,0)};function Pe(N){b=N,R||(R=!0,be())}function Ne(N,V){L=E(function(){N(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Pe(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var Q=d;d=V;try{return N()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=d;d=N;try{return V()}finally{d=Q}},t.unstable_scheduleCallback=function(N,V,Q){var ye=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ye+Q:ye):Q=ye,N){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Q+F,N={id:c++,callback:V,priorityLevel:N,startTime:Q,expirationTime:F,sortIndex:-1},Q>ye?(N.sortIndex=Q,e(u,N),n(l)===null&&N===n(u)&&(y?(g(L),L=-1):y=!0,Ne(v,Q-ye))):(N.sortIndex=F,e(l,N),m||p||(m=!0,Pe(C))),N},t.unstable_shouldYield=De,t.unstable_wrapCallback=function(N){var V=d;return function(){var Q=d;d=V;try{return N.apply(this,arguments)}finally{d=Q}}}})(K1);W1.exports=K1;var JI=W1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=I,pn=JI;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q1=new Set,Ia={};function os(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Ia[t]=e,t=0;t<e.length;t++)Q1.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,ZI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lv={},uv={};function ex(t){return Of.call(uv,t)?!0:Of.call(lv,t)?!1:ZI.test(t)?uv[t]=!0:(lv[t]=!0,!1)}function tx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nx(t,e,n,r){if(e===null||typeof e>"u"||tx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nm=/[\-:]([a-z])/g;function Dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nm,Dm);bt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nm,Dm);bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nm,Dm);bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Om(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nx(e,n,i,r)&&(n=null),r||i===null?ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),vs=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),Y1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),$f=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),J1=Symbol.for("react.offscreen"),cv=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=cv&&t[cv]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,xd;function Xo(t){if(xd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xd=e&&e[1]||""}return`
`+xd+t}var Ad=!1;function Rd(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function rx(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=Rd(t.type,!1),t;case 11:return t=Rd(t.type.render,!1),t;case 1:return t=Rd(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case vs:return"Portal";case Lf:return"Profiler";case Lm:return"StrictMode";case Mf:return"Suspense";case $f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X1:return(t.displayName||"Context")+".Consumer";case Y1:return(t._context.displayName||"Context")+".Provider";case Mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $m:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function ix(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===Lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sx(t){var e=Z1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yl(t){t._valueTracker||(t._valueTracker=sx(t))}function eE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uf(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tE(t,e){e=e.checked,e!=null&&Om(t,"checked",e,!1)}function jf(t,e){tE(t,e);var n=mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bf(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bf(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jo=Array.isArray;function Ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Jo(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mi(n)}}function nE(t,e){var n=mi(e.value),r=mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xl,iE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ox=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function sE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function oE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ax=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hf(t,e){if(e){if(ax[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=null;function Fm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kf=null,Ms=null,$s=null;function mv(t){if(t=ml(t)){if(typeof Kf!="function")throw Error(D(280));var e=t.stateNode;e&&(e=oh(e),Kf(t.stateNode,t.type,e))}}function aE(t){Ms?$s?$s.push(t):$s=[t]:Ms=t}function lE(){if(Ms){var t=Ms,e=$s;if($s=Ms=null,mv(t),e)for(t=0;t<e.length;t++)mv(e[t])}}function uE(t,e){return t(e)}function cE(){}var bd=!1;function hE(t,e,n){if(bd)return t(e,n);bd=!0;try{return uE(t,e,n)}finally{bd=!1,(Ms!==null||$s!==null)&&(cE(),lE())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var r=oh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Gf=!1;if(kr)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Gf=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Gf=!1}function lx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ua=!1,nc=null,rc=!1,Qf=null,ux={onError:function(t){ua=!0,nc=t}};function cx(t,e,n,r,i,s,o,a,l){ua=!1,nc=null,lx.apply(ux,arguments)}function hx(t,e,n,r,i,s,o,a,l){if(cx.apply(this,arguments),ua){if(ua){var u=nc;ua=!1,nc=null}else throw Error(D(198));rc||(rc=!0,Qf=u)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gv(t){if(as(t)!==t)throw Error(D(188))}function dx(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gv(i),t;if(s===r)return gv(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function fE(t){return t=dx(t),t!==null?pE(t):null}function pE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pE(t);if(e!==null)return e;t=t.sibling}return null}var mE=pn.unstable_scheduleCallback,yv=pn.unstable_cancelCallback,fx=pn.unstable_shouldYield,px=pn.unstable_requestPaint,nt=pn.unstable_now,mx=pn.unstable_getCurrentPriorityLevel,Um=pn.unstable_ImmediatePriority,gE=pn.unstable_UserBlockingPriority,ic=pn.unstable_NormalPriority,gx=pn.unstable_LowPriority,yE=pn.unstable_IdlePriority,nh=null,nr=null;function yx(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(nh,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:Ex,vx=Math.log,wx=Math.LN2;function Ex(t){return t>>>=0,t===0?32:31-(vx(t)/wx|0)|0}var Jl=64,Zl=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zo(a):(s&=o,s!==0&&(r=Zo(s)))}else o=n&~i,o!==0?r=Zo(o):s!==0&&(r=Zo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function _x(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=_x(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vE(){var t=Jl;return Jl<<=1,!(Jl&4194240)&&(Jl=64),t}function Pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function Tx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function wE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var EE,Bm,_E,SE,TE,Xf=!1,eu=[],ti=null,ni=null,ri=null,Ra=new Map,ba=new Map,qr=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vv(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Fo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ml(e),e!==null&&Bm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kx(t,e,n,r,i){switch(e){case"focusin":return ti=Fo(ti,t,e,n,r,i),!0;case"dragenter":return ni=Fo(ni,t,e,n,r,i),!0;case"mouseover":return ri=Fo(ri,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ra.set(s,Fo(Ra.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ba.set(s,Fo(ba.get(s)||null,t,e,n,r,i)),!0}return!1}function CE(t){var e=Ni(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=dE(n),e!==null){t.blockedOn=e,TE(t.priority,function(){_E(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ru(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wf=r,n.target.dispatchEvent(r),Wf=null}else return e=ml(n),e!==null&&Bm(e),t.blockedOn=n,!1;e.shift()}return!0}function wv(t,e,n){Ru(t)&&n.delete(e)}function Ix(){Xf=!1,ti!==null&&Ru(ti)&&(ti=null),ni!==null&&Ru(ni)&&(ni=null),ri!==null&&Ru(ri)&&(ri=null),Ra.forEach(wv),ba.forEach(wv)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Xf||(Xf=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Ix)))}function Pa(t){function e(i){return Uo(i,t)}if(0<eu.length){Uo(eu[0],t);for(var n=1;n<eu.length;n++){var r=eu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ti!==null&&Uo(ti,t),ni!==null&&Uo(ni,t),ri!==null&&Uo(ri,t),Ra.forEach(e),ba.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)CE(n),n.blockedOn===null&&qr.shift()}var Fs=Or.ReactCurrentBatchConfig,oc=!0;function xx(t,e,n,r){var i=xe,s=Fs.transition;Fs.transition=null;try{xe=1,zm(t,e,n,r)}finally{xe=i,Fs.transition=s}}function Ax(t,e,n,r){var i=xe,s=Fs.transition;Fs.transition=null;try{xe=4,zm(t,e,n,r)}finally{xe=i,Fs.transition=s}}function zm(t,e,n,r){if(oc){var i=Jf(t,e,n,r);if(i===null)Bd(t,e,r,ac,n),vv(t,r);else if(kx(i,t,e,n,r))r.stopPropagation();else if(vv(t,r),e&4&&-1<Cx.indexOf(t)){for(;i!==null;){var s=ml(i);if(s!==null&&EE(s),s=Jf(t,e,n,r),s===null&&Bd(t,e,r,ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bd(t,e,r,null,n)}}var ac=null;function Jf(t,e,n,r){if(ac=null,t=Fm(r),t=Ni(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function kE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mx()){case Um:return 1;case gE:return 4;case ic:case gx:return 16;case yE:return 536870912;default:return 16}default:return 16}}var Jr=null,Vm=null,bu=null;function IE(){if(bu)return bu;var t,e=Vm,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bu=i.slice(t,1<r?1-r:void 0)}function Pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tu(){return!0}function Ev(){return!1}function vn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tu:Ev,this.isPropagationStopped=Ev,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hm=vn(go),pl=Ye({},go,{view:0,detail:0}),Rx=vn(pl),Nd,Dd,jo,rh=Ye({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(Nd=t.screenX-jo.screenX,Dd=t.screenY-jo.screenY):Dd=Nd=0,jo=t),Nd)},movementY:function(t){return"movementY"in t?t.movementY:Dd}}),_v=vn(rh),bx=Ye({},rh,{dataTransfer:0}),Px=vn(bx),Nx=Ye({},pl,{relatedTarget:0}),Od=vn(Nx),Dx=Ye({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=vn(Dx),Lx=Ye({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mx=vn(Lx),$x=Ye({},go,{data:0}),Sv=vn($x),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jx[t])?!!e[t]:!1}function qm(){return Bx}var zx=Ye({},pl,{key:function(t){if(t.key){var e=Fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(t){return t.type==="keypress"?Pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vx=vn(zx),Hx=Ye({},rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tv=vn(Hx),qx=Ye({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),Wx=vn(qx),Kx=Ye({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=vn(Kx),Qx=Ye({},rh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=vn(Qx),Xx=[9,13,27,32],Wm=kr&&"CompositionEvent"in window,ca=null;kr&&"documentMode"in document&&(ca=document.documentMode);var Jx=kr&&"TextEvent"in window&&!ca,xE=kr&&(!Wm||ca&&8<ca&&11>=ca),Cv=String.fromCharCode(32),kv=!1;function AE(t,e){switch(t){case"keyup":return Xx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function RE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function Zx(t,e){switch(t){case"compositionend":return RE(e);case"keypress":return e.which!==32?null:(kv=!0,Cv);case"textInput":return t=e.data,t===Cv&&kv?null:t;default:return null}}function eA(t,e){if(Es)return t==="compositionend"||!Wm&&AE(t,e)?(t=IE(),bu=Vm=Jr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xE&&e.locale!=="ko"?null:e.data;default:return null}}var tA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tA[t.type]:e==="textarea"}function bE(t,e,n,r){aE(r),e=lc(e,"onChange"),0<e.length&&(n=new Hm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ha=null,Na=null;function nA(t){BE(t,0)}function ih(t){var e=Ts(t);if(eE(e))return t}function rA(t,e){if(t==="change")return e}var PE=!1;if(kr){var Ld;if(kr){var Md="oninput"in document;if(!Md){var xv=document.createElement("div");xv.setAttribute("oninput","return;"),Md=typeof xv.oninput=="function"}Ld=Md}else Ld=!1;PE=Ld&&(!document.documentMode||9<document.documentMode)}function Av(){ha&&(ha.detachEvent("onpropertychange",NE),Na=ha=null)}function NE(t){if(t.propertyName==="value"&&ih(Na)){var e=[];bE(e,Na,t,Fm(t)),hE(nA,e)}}function iA(t,e,n){t==="focusin"?(Av(),ha=e,Na=n,ha.attachEvent("onpropertychange",NE)):t==="focusout"&&Av()}function sA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ih(Na)}function oA(t,e){if(t==="click")return ih(e)}function aA(t,e){if(t==="input"||t==="change")return ih(e)}function lA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:lA;function Da(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Of.call(e,i)||!Bn(t[i],e[i]))return!1}return!0}function Rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bv(t,e){var n=Rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rv(n)}}function DE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?DE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function OE(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uA(t){var e=OE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&DE(n.ownerDocument.documentElement,n)){if(r!==null&&Km(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bv(n,s);var o=bv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cA=kr&&"documentMode"in document&&11>=document.documentMode,_s=null,Zf=null,da=null,ep=!1;function Pv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||_s==null||_s!==tc(r)||(r=_s,"selectionStart"in r&&Km(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),da&&Da(da,r)||(da=r,r=lc(Zf,"onSelect"),0<r.length&&(e=new Hm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function nu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:nu("Animation","AnimationEnd"),animationiteration:nu("Animation","AnimationIteration"),animationstart:nu("Animation","AnimationStart"),transitionend:nu("Transition","TransitionEnd")},$d={},LE={};kr&&(LE=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function sh(t){if($d[t])return $d[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in LE)return $d[t]=e[n];return t}var ME=sh("animationend"),$E=sh("animationiteration"),FE=sh("animationstart"),UE=sh("transitionend"),jE=new Map,Nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){jE.set(t,e),os(e,[t])}for(var Fd=0;Fd<Nv.length;Fd++){var Ud=Nv[Fd],hA=Ud.toLowerCase(),dA=Ud[0].toUpperCase()+Ud.slice(1);Si(hA,"on"+dA)}Si(ME,"onAnimationEnd");Si($E,"onAnimationIteration");Si(FE,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(UE,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Dv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hx(r,e,void 0,t),t.currentTarget=null}function BE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dv(i,a,u),s=l}}}if(rc)throw t=Qf,rc=!1,Qf=null,t}function Fe(t,e){var n=e[sp];n===void 0&&(n=e[sp]=new Set);var r=t+"__bubble";n.has(r)||(zE(e,t,2,!1),n.add(r))}function jd(t,e,n){var r=0;e&&(r|=4),zE(n,t,r,e)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[ru]){t[ru]=!0,Q1.forEach(function(n){n!=="selectionchange"&&(fA.has(n)||jd(n,!1,t),jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ru]||(e[ru]=!0,jd("selectionchange",!1,e))}}function zE(t,e,n,r){switch(kE(e)){case 1:var i=xx;break;case 4:i=Ax;break;default:i=zm}n=i.bind(null,e,n,t),i=void 0,!Gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}hE(function(){var u=s,c=Fm(n),h=[];e:{var d=jE.get(t);if(d!==void 0){var p=Hm,m=t;switch(t){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":p=Vx;break;case"focusin":m="focus",p=Od;break;case"focusout":m="blur",p=Od;break;case"beforeblur":case"afterblur":p=Od;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Wx;break;case ME:case $E:case FE:p=Ox;break;case UE:p=Gx;break;case"scroll":p=Rx;break;case"wheel":p=Yx;break;case"copy":case"cut":case"paste":p=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tv}var y=(e&4)!==0,E=!y&&t==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,w;f!==null;){w=f;var v=w.stateNode;if(w.tag===5&&v!==null&&(w=v,g!==null&&(v=Aa(f,g),v!=null&&y.push(La(f,v,w)))),E)break;f=f.return}0<y.length&&(d=new p(d,m,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Wf&&(m=n.relatedTarget||n.fromElement)&&(Ni(m)||m[Ir]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Ni(m):null,m!==null&&(E=as(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(y=_v,v="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Tv,v="onPointerLeave",g="onPointerEnter",f="pointer"),E=p==null?d:Ts(p),w=m==null?d:Ts(m),d=new y(v,f+"leave",p,n,c),d.target=E,d.relatedTarget=w,v=null,Ni(c)===u&&(y=new y(g,f+"enter",m,n,c),y.target=w,y.relatedTarget=E,v=y),E=v,p&&m)t:{for(y=p,g=m,f=0,w=y;w;w=ps(w))f++;for(w=0,v=g;v;v=ps(v))w++;for(;0<f-w;)y=ps(y),f--;for(;0<w-f;)g=ps(g),w--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=ps(y),g=ps(g)}y=null}else y=null;p!==null&&Ov(h,d,p,y,!1),m!==null&&E!==null&&Ov(h,E,m,y,!0)}}e:{if(d=u?Ts(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=rA;else if(Iv(d))if(PE)C=aA;else{C=sA;var R=iA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=oA);if(C&&(C=C(t,u))){bE(h,C,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Bf(d,"number",d.value)}switch(R=u?Ts(u):window,t){case"focusin":(Iv(R)||R.contentEditable==="true")&&(_s=R,Zf=u,da=null);break;case"focusout":da=Zf=_s=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,Pv(h,n,c);break;case"selectionchange":if(cA)break;case"keydown":case"keyup":Pv(h,n,c)}var b;if(Wm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Es?AE(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(xE&&n.locale!=="ko"&&(Es||L!=="onCompositionStart"?L==="onCompositionEnd"&&Es&&(b=IE()):(Jr=c,Vm="value"in Jr?Jr.value:Jr.textContent,Es=!0)),R=lc(u,L),0<R.length&&(L=new Sv(L,t,null,n,c),h.push({event:L,listeners:R}),b?L.data=b:(b=RE(n),b!==null&&(L.data=b)))),(b=Jx?Zx(t,n):eA(t,n))&&(u=lc(u,"onBeforeInput"),0<u.length&&(c=new Sv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}BE(h,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Aa(t,n),s!=null&&r.unshift(La(t,s,i)),s=Aa(t,e),s!=null&&r.push(La(t,s,i))),t=t.return}return r}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ov(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Aa(n,s),l!=null&&o.unshift(La(n,l,a))):i||(l=Aa(n,s),l!=null&&o.push(La(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pA=/\r\n?/g,mA=/\u0000|\uFFFD/g;function Lv(t){return(typeof t=="string"?t:""+t).replace(pA,`
`).replace(mA,"")}function iu(t,e,n){if(e=Lv(e),Lv(t)!==e&&n)throw Error(D(425))}function uc(){}var tp=null,np=null;function rp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ip=typeof setTimeout=="function"?setTimeout:void 0,gA=typeof clearTimeout=="function"?clearTimeout:void 0,Mv=typeof Promise=="function"?Promise:void 0,yA=typeof queueMicrotask=="function"?queueMicrotask:typeof Mv<"u"?function(t){return Mv.resolve(null).then(t).catch(vA)}:ip;function vA(t){setTimeout(function(){throw t})}function zd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pa(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $v(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),Qn="__reactFiber$"+yo,Ma="__reactProps$"+yo,Ir="__reactContainer$"+yo,sp="__reactEvents$"+yo,wA="__reactListeners$"+yo,EA="__reactHandles$"+yo;function Ni(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$v(t);t!==null;){if(n=t[Qn])return n;t=$v(t)}return e}t=n,n=t.parentNode}return null}function ml(t){return t=t[Qn]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function oh(t){return t[Ma]||null}var op=[],Cs=-1;function Ti(t){return{current:t}}function Be(t){0>Cs||(t.current=op[Cs],op[Cs]=null,Cs--)}function Me(t,e){Cs++,op[Cs]=t.current,t.current=e}var gi={},zt=Ti(gi),sn=Ti(!1),qi=gi;function Qs(t,e){var n=t.type.contextTypes;if(!n)return gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function on(t){return t=t.childContextTypes,t!=null}function cc(){Be(sn),Be(zt)}function Fv(t,e,n){if(zt.current!==gi)throw Error(D(168));Me(zt,e),Me(sn,n)}function VE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,ix(t)||"Unknown",i));return Ye({},n,r)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gi,qi=zt.current,Me(zt,t),Me(sn,sn.current),!0}function Uv(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=VE(t,e,qi),r.__reactInternalMemoizedMergedChildContext=t,Be(sn),Be(zt),Me(zt,t)):Be(sn),Me(sn,n)}var mr=null,ah=!1,Vd=!1;function HE(t){mr===null?mr=[t]:mr.push(t)}function _A(t){ah=!0,HE(t)}function Ci(){if(!Vd&&mr!==null){Vd=!0;var t=0,e=xe;try{var n=mr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,ah=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),mE(Um,Ci),i}finally{xe=e,Vd=!1}}return null}var ks=[],Is=0,dc=null,fc=0,Tn=[],Cn=0,Wi=null,gr=1,yr="";function Ri(t,e){ks[Is++]=fc,ks[Is++]=dc,dc=t,fc=e}function qE(t,e,n){Tn[Cn++]=gr,Tn[Cn++]=yr,Tn[Cn++]=Wi,Wi=t;var r=gr;t=yr;var i=32-Un(r)-1;r&=~(1<<i),n+=1;var s=32-Un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gr=1<<32-Un(e)+i|n<<i|r,yr=s+t}else gr=1<<s|n<<i|r,yr=t}function Gm(t){t.return!==null&&(Ri(t,1),qE(t,1,0))}function Qm(t){for(;t===dc;)dc=ks[--Is],ks[Is]=null,fc=ks[--Is],ks[Is]=null;for(;t===Wi;)Wi=Tn[--Cn],Tn[Cn]=null,yr=Tn[--Cn],Tn[Cn]=null,gr=Tn[--Cn],Tn[Cn]=null}var dn=null,cn=null,Ke=!1,$n=null;function WE(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,cn=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wi!==null?{id:gr,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,cn=null,!0):!1;default:return!1}}function ap(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lp(t){if(Ke){var e=cn;if(e){var n=e;if(!jv(t,e)){if(ap(t))throw Error(D(418));e=ii(n.nextSibling);var r=dn;e&&jv(t,e)?WE(r,n):(t.flags=t.flags&-4097|2,Ke=!1,dn=t)}}else{if(ap(t))throw Error(D(418));t.flags=t.flags&-4097|2,Ke=!1,dn=t}}}function Bv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function su(t){if(t!==dn)return!1;if(!Ke)return Bv(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rp(t.type,t.memoizedProps)),e&&(e=cn)){if(ap(t))throw KE(),Error(D(418));for(;e;)WE(t,e),e=ii(e.nextSibling)}if(Bv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=dn?ii(t.stateNode.nextSibling):null;return!0}function KE(){for(var t=cn;t;)t=ii(t.nextSibling)}function Ys(){cn=dn=null,Ke=!1}function Ym(t){$n===null?$n=[t]:$n.push(t)}var SA=Or.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var pc=Ti(null),mc=null,xs=null,Xm=null;function Jm(){Xm=xs=mc=null}function Zm(t){var e=pc.current;Be(pc),t._currentValue=e}function up(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){mc=t,Xm=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Xm!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(mc===null)throw Error(D(308));xs=t,mc.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Di=null;function eg(t){Di===null?Di=[t]:Di.push(t)}function GE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,eg(e)):(n.next=i.next,i.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function tg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function QE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xr(t,n)}return i=r.interleaved,i===null?(e.next=e,eg(r)):(e.next=i.next,i.next=e),r.interleaved=e,xr(t,n)}function Nu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}function zv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,r){var i=t.updateQueue;Vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(d=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=Ye({},h,d);break e;case 2:Vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gi|=o,t.lanes=o,t.memoizedState=h}}function Vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var YE=new G1.Component().refs;function cp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lh={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=ai(t),s=Sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(jn(e,t,i,r),Nu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=ai(t),s=Sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(jn(e,t,i,r),Nu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=ai(t),i=Sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=si(t,i,r),e!==null&&(jn(e,t,r,n),Nu(e,t,r))}};function Hv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,r)||!Da(i,s):!0}function XE(t,e,n){var r=!1,i=gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=on(e)?qi:zt.current,r=e.contextTypes,s=(r=r!=null)?Qs(t,i):gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lh.enqueueReplaceState(e,e.state,null)}function hp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=YE,tg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=on(e)?qi:zt.current,i.context=Qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lh.enqueueReplaceState(i,i.state,null),gc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===YE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function ou(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wv(t){var e=t._init;return e(t._payload)}function JE(t){function e(g,f){if(t){var w=g.deletions;w===null?(g.deletions=[f],g.flags|=16):w.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=li(g,f),g.index=0,g.sibling=null,g}function s(g,f,w){return g.index=w,t?(w=g.alternate,w!==null?(w=w.index,w<f?(g.flags|=2,f):w):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,w,v){return f===null||f.tag!==6?(f=Yd(w,g.mode,v),f.return=g,f):(f=i(f,w),f.return=g,f)}function l(g,f,w,v){var C=w.type;return C===ws?c(g,f,w.props.children,v,w.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&Wv(C)===f.type)?(v=i(f,w.props),v.ref=Bo(g,f,w),v.return=g,v):(v=Fu(w.type,w.key,w.props,null,g.mode,v),v.ref=Bo(g,f,w),v.return=g,v)}function u(g,f,w,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==w.containerInfo||f.stateNode.implementation!==w.implementation?(f=Xd(w,g.mode,v),f.return=g,f):(f=i(f,w.children||[]),f.return=g,f)}function c(g,f,w,v,C){return f===null||f.tag!==7?(f=Bi(w,g.mode,v,C),f.return=g,f):(f=i(f,w),f.return=g,f)}function h(g,f,w){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Yd(""+f,g.mode,w),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ql:return w=Fu(f.type,f.key,f.props,null,g.mode,w),w.ref=Bo(g,null,f),w.return=g,w;case vs:return f=Xd(f,g.mode,w),f.return=g,f;case zr:var v=f._init;return h(g,v(f._payload),w)}if(Jo(f)||Mo(f))return f=Bi(f,g.mode,w,null),f.return=g,f;ou(g,f)}return null}function d(g,f,w,v){var C=f!==null?f.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return C!==null?null:a(g,f,""+w,v);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:return w.key===C?l(g,f,w,v):null;case vs:return w.key===C?u(g,f,w,v):null;case zr:return C=w._init,d(g,f,C(w._payload),v)}if(Jo(w)||Mo(w))return C!==null?null:c(g,f,w,v,null);ou(g,w)}return null}function p(g,f,w,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(w)||null,a(f,g,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ql:return g=g.get(v.key===null?w:v.key)||null,l(f,g,v,C);case vs:return g=g.get(v.key===null?w:v.key)||null,u(f,g,v,C);case zr:var R=v._init;return p(g,f,w,R(v._payload),C)}if(Jo(v)||Mo(v))return g=g.get(w)||null,c(f,g,v,C,null);ou(f,v)}return null}function m(g,f,w,v){for(var C=null,R=null,b=f,L=f=0,G=null;b!==null&&L<w.length;L++){b.index>L?(G=b,b=null):G=b.sibling;var K=d(g,b,w[L],v);if(K===null){b===null&&(b=G);break}t&&b&&K.alternate===null&&e(g,b),f=s(K,f,L),R===null?C=K:R.sibling=K,R=K,b=G}if(L===w.length)return n(g,b),Ke&&Ri(g,L),C;if(b===null){for(;L<w.length;L++)b=h(g,w[L],v),b!==null&&(f=s(b,f,L),R===null?C=b:R.sibling=b,R=b);return Ke&&Ri(g,L),C}for(b=r(g,b);L<w.length;L++)G=p(b,g,L,w[L],v),G!==null&&(t&&G.alternate!==null&&b.delete(G.key===null?L:G.key),f=s(G,f,L),R===null?C=G:R.sibling=G,R=G);return t&&b.forEach(function(De){return e(g,De)}),Ke&&Ri(g,L),C}function y(g,f,w,v){var C=Mo(w);if(typeof C!="function")throw Error(D(150));if(w=C.call(w),w==null)throw Error(D(151));for(var R=C=null,b=f,L=f=0,G=null,K=w.next();b!==null&&!K.done;L++,K=w.next()){b.index>L?(G=b,b=null):G=b.sibling;var De=d(g,b,K.value,v);if(De===null){b===null&&(b=G);break}t&&b&&De.alternate===null&&e(g,b),f=s(De,f,L),R===null?C=De:R.sibling=De,R=De,b=G}if(K.done)return n(g,b),Ke&&Ri(g,L),C;if(b===null){for(;!K.done;L++,K=w.next())K=h(g,K.value,v),K!==null&&(f=s(K,f,L),R===null?C=K:R.sibling=K,R=K);return Ke&&Ri(g,L),C}for(b=r(g,b);!K.done;L++,K=w.next())K=p(b,g,L,K.value,v),K!==null&&(t&&K.alternate!==null&&b.delete(K.key===null?L:K.key),f=s(K,f,L),R===null?C=K:R.sibling=K,R=K);return t&&b.forEach(function(ie){return e(g,ie)}),Ke&&Ri(g,L),C}function E(g,f,w,v){if(typeof w=="object"&&w!==null&&w.type===ws&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:e:{for(var C=w.key,R=f;R!==null;){if(R.key===C){if(C=w.type,C===ws){if(R.tag===7){n(g,R.sibling),f=i(R,w.props.children),f.return=g,g=f;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zr&&Wv(C)===R.type){n(g,R.sibling),f=i(R,w.props),f.ref=Bo(g,R,w),f.return=g,g=f;break e}n(g,R);break}else e(g,R);R=R.sibling}w.type===ws?(f=Bi(w.props.children,g.mode,v,w.key),f.return=g,g=f):(v=Fu(w.type,w.key,w.props,null,g.mode,v),v.ref=Bo(g,f,w),v.return=g,g=v)}return o(g);case vs:e:{for(R=w.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===w.containerInfo&&f.stateNode.implementation===w.implementation){n(g,f.sibling),f=i(f,w.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Xd(w,g.mode,v),f.return=g,g=f}return o(g);case zr:return R=w._init,E(g,f,R(w._payload),v)}if(Jo(w))return m(g,f,w,v);if(Mo(w))return y(g,f,w,v);ou(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,w),f.return=g,g=f):(n(g,f),f=Yd(w,g.mode,v),f.return=g,g=f),o(g)):n(g,f)}return E}var Xs=JE(!0),ZE=JE(!1),gl={},rr=Ti(gl),$a=Ti(gl),Fa=Ti(gl);function Oi(t){if(t===gl)throw Error(D(174));return t}function ng(t,e){switch(Me(Fa,e),Me($a,t),Me(rr,gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vf(e,t)}Be(rr),Me(rr,e)}function Js(){Be(rr),Be($a),Be(Fa)}function e_(t){Oi(Fa.current);var e=Oi(rr.current),n=Vf(e,t.type);e!==n&&(Me($a,t),Me(rr,n))}function rg(t){$a.current===t&&(Be(rr),Be($a))}var Ge=Ti(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hd=[];function ig(){for(var t=0;t<Hd.length;t++)Hd[t]._workInProgressVersionPrimary=null;Hd.length=0}var Du=Or.ReactCurrentDispatcher,qd=Or.ReactCurrentBatchConfig,Ki=0,Qe=null,ft=null,wt=null,vc=!1,fa=!1,Ua=0,TA=0;function Nt(){throw Error(D(321))}function sg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function og(t,e,n,r,i,s){if(Ki=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Du.current=t===null||t.memoizedState===null?xA:AA,t=n(r,i),fa){s=0;do{if(fa=!1,Ua=0,25<=s)throw Error(D(301));s+=1,wt=ft=null,e.updateQueue=null,Du.current=RA,t=n(r,i)}while(fa)}if(Du.current=wc,e=ft!==null&&ft.next!==null,Ki=0,wt=ft=Qe=null,vc=!1,e)throw Error(D(300));return t}function ag(){var t=Ua!==0;return Ua=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Qe.memoizedState=wt=t:wt=wt.next=t,wt}function Nn(){if(ft===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=wt===null?Qe.memoizedState:wt.next;if(e!==null)wt=e,ft=t;else{if(t===null)throw Error(D(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?Qe.memoizedState=wt=t:wt=wt.next=t}return wt}function ja(t,e){return typeof e=="function"?e(t):e}function Wd(t){var e=Nn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=ft,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ki&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Qe.lanes|=c,Gi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Bn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,Gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kd(t){var e=Nn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t_(){}function n_(t,e){var n=Qe,r=Nn(),i=e(),s=!Bn(r.memoizedState,i);if(s&&(r.memoizedState=i,rn=!0),r=r.queue,lg(s_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,i_.bind(null,n,r,i,e),void 0,null),Et===null)throw Error(D(349));Ki&30||r_(n,e,i)}return i}function r_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i_(t,e,n,r){e.value=n,e.getSnapshot=r,o_(e)&&a_(t)}function s_(t,e,n){return n(function(){o_(e)&&a_(t)})}function o_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function a_(t){var e=xr(t,1);e!==null&&jn(e,t,1,-1)}function Kv(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=IA.bind(null,Qe,t),[e.memoizedState,t]}function Ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l_(){return Nn().memoizedState}function Ou(t,e,n,r){var i=Gn();Qe.flags|=t,i.memoizedState=Ba(1|e,n,void 0,r===void 0?null:r)}function uh(t,e,n,r){var i=Nn();r=r===void 0?null:r;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,r!==null&&sg(r,o.deps)){i.memoizedState=Ba(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=Ba(1|e,n,s,r)}function Gv(t,e){return Ou(8390656,8,t,e)}function lg(t,e){return uh(2048,8,t,e)}function u_(t,e){return uh(4,2,t,e)}function c_(t,e){return uh(4,4,t,e)}function h_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d_(t,e,n){return n=n!=null?n.concat([t]):null,uh(4,4,h_.bind(null,e,t),n)}function ug(){}function f_(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p_(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m_(t,e,n){return Ki&21?(Bn(n,e)||(n=vE(),Qe.lanes|=n,Gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function CA(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=qd.transition;qd.transition={};try{t(!1),e()}finally{xe=n,qd.transition=r}}function g_(){return Nn().memoizedState}function kA(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))v_(e,n);else if(n=GE(t,e,n,r),n!==null){var i=Yt();jn(n,t,r,i),w_(n,e,r)}}function IA(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))v_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(i.next=i,eg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=GE(t,e,i,r),n!==null&&(i=Yt(),jn(n,t,r,i),w_(n,e,r))}}function y_(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function v_(t,e){fa=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}var wc={readContext:Pn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},xA={readContext:Pn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Gv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ou(4194308,4,h_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ou(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ou(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kA.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Kv,useDebugValue:ug,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Kv(!1),e=t[0];return t=CA.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=Gn();if(Ke){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),Et===null)throw Error(D(349));Ki&30||r_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gv(s_.bind(null,r,s,t),[t]),r.flags|=2048,Ba(9,i_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Et.identifierPrefix;if(Ke){var n=yr,r=gr;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AA={readContext:Pn,useCallback:f_,useContext:Pn,useEffect:lg,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:Wd,useRef:l_,useState:function(){return Wd(ja)},useDebugValue:ug,useDeferredValue:function(t){var e=Nn();return m_(e,ft.memoizedState,t)},useTransition:function(){var t=Wd(ja)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1},RA={readContext:Pn,useCallback:f_,useContext:Pn,useEffect:lg,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:Kd,useRef:l_,useState:function(){return Kd(ja)},useDebugValue:ug,useDeferredValue:function(t){var e=Nn();return ft===null?e.memoizedState=t:m_(e,ft.memoizedState,t)},useTransition:function(){var t=Kd(ja)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1};function Zs(t,e){try{var n="",r=e;do n+=rx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bA=typeof WeakMap=="function"?WeakMap:Map;function E_(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_c||(_c=!0,Sp=r),dp(t,e)},n}function __(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dp(t,e),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HA.bind(null,t,e,n),e.then(t,t))}function Yv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,si(n,e,1))),n.lanes|=1),t)}var PA=Or.ReactCurrentOwner,rn=!1;function Kt(t,e,n,r){e.child=t===null?ZE(e,null,n,r):Xs(e,t.child,n,r)}function Jv(t,e,n,r,i){n=n.render;var s=e.ref;return Us(e,i),r=og(t,e,n,r,s,i),n=ag(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ar(t,e,i)):(Ke&&n&&Gm(e),e.flags|=1,Kt(t,e,r,i),e.child)}function Zv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,S_(t,e,s,r,i)):(t=Fu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,r)&&t.ref===e.ref)return Ar(t,e,i)}return e.flags|=1,t=li(s,r),t.ref=e.ref,t.return=e,e.child=t}function S_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Da(s,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ar(t,e,i)}return fp(t,e,n,r,i)}function T_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Rs,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Rs,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Rs,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Rs,un),un|=r;return Kt(t,e,i,n),e.child}function C_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fp(t,e,n,r,i){var s=on(n)?qi:zt.current;return s=Qs(e,s),Us(e,i),n=og(t,e,n,r,s,i),r=ag(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ar(t,e,i)):(Ke&&r&&Gm(e),e.flags|=1,Kt(t,e,n,i),e.child)}function e0(t,e,n,r,i){if(on(n)){var s=!0;hc(e)}else s=!1;if(Us(e,i),e.stateNode===null)Lu(t,e),XE(e,n,r),hp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=on(n)?qi:zt.current,u=Qs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qv(e,o,r,u),Vr=!1;var d=e.memoizedState;o.state=d,gc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||sn.current||Vr?(typeof c=="function"&&(cp(e,n,c,r),l=e.memoizedState),(a=Vr||Hv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,QE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?qi:zt.current,l=Qs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&qv(e,o,r,l),Vr=!1,d=e.memoizedState,o.state=d,gc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||sn.current||Vr?(typeof p=="function"&&(cp(e,n,p,r),m=e.memoizedState),(u=Vr||Hv(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return pp(t,e,n,r,s,i)}function pp(t,e,n,r,i,s){C_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uv(e,n,!1),Ar(t,e,s);r=e.stateNode,PA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=r.state,i&&Uv(e,n,!0),e.child}function k_(t){var e=t.stateNode;e.pendingContext?Fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fv(t,e.context,!1),ng(t,e.containerInfo)}function t0(t,e,n,r,i){return Ys(),Ym(i),e.flags|=256,Kt(t,e,n,r),e.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function I_(t,e,n){var r=e.pendingProps,i=Ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(Ge,i&1),t===null)return lp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dh(o,r,0,null),t=Bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gp(n),e.memoizedState=mp,t):cg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=li(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=li(a,s):(s=Bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mp,r}return s=t.child,t=s.sibling,r=li(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cg(t,e){return e=dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function au(t,e,n,r){return r!==null&&Ym(r),Xs(e,t.child,null,n),t=cg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gd(Error(D(422))),au(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dh({mode:"visible",children:r.children},i,0,null),s=Bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=gp(o),e.memoizedState=mp,s);if(!(e.mode&1))return au(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Gd(s,r,void 0),au(t,e,o,r)}if(a=(o&t.childLanes)!==0,rn||a){if(r=Et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xr(t,i),jn(r,t,i,-1))}return gg(),r=Gd(Error(D(421))),au(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=ii(i.nextSibling),dn=e,Ke=!0,$n=null,t!==null&&(Tn[Cn++]=gr,Tn[Cn++]=yr,Tn[Cn++]=Wi,gr=t.id,yr=t.overflow,Wi=e),e=cg(e,r.children),e.flags|=4096,e)}function n0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),up(t.return,e,n)}function Qd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function x_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Kt(t,e,r.children,n),r=Ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n0(t,n,e);else if(t.tag===19)n0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(Ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qd(e,!0,n,null,s);break;case"together":Qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DA(t,e,n){switch(e.tag){case 3:k_(e),Ys();break;case 5:e_(e);break;case 1:on(e.type)&&hc(e);break;case 4:ng(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(pc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ge,Ge.current&1),e.flags|=128,null):n&e.child.childLanes?I_(t,e,n):(Me(Ge,Ge.current&1),t=Ar(t,e,n),t!==null?t.sibling:null);Me(Ge,Ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return x_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ge,Ge.current),r)break;return null;case 22:case 23:return e.lanes=0,T_(t,e,n)}return Ar(t,e,n)}var A_,yp,R_,b_;A_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yp=function(){};R_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Oi(rr.current);var s=null;switch(n){case"input":i=Uf(t,i),r=Uf(t,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=zf(t,i),r=zf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uc)}Hf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ia.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};b_=function(t,e,n,r){n!==r&&(e.flags|=4)};function zo(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OA(t,e,n){var r=e.pendingProps;switch(Qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return on(e.type)&&cc(),Dt(e),null;case 3:return r=e.stateNode,Js(),Be(sn),Be(zt),ig(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(su(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(kp($n),$n=null))),yp(t,e),Dt(e),null;case 5:rg(e);var i=Oi(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)R_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Dt(e),null}if(t=Oi(rr.current),su(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qn]=e,r[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<ea.length;i++)Fe(ea[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":hv(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":fv(r,s),Fe("invalid",r)}Hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&iu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&iu(r.textContent,a,t),i=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Yl(r),dv(r,s,!0);break;case"textarea":Yl(r),pv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Ma]=r,A_(t,e,!1,!1),e.stateNode=t;e:{switch(o=qf(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ea.length;i++)Fe(ea[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":hv(t,r),i=Uf(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":fv(t,r),i=zf(t,r),Fe("invalid",t);break;default:i=r}Hf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?oE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Fe("scroll",t):l!=null&&Om(t,s,l,o))}switch(n){case"input":Yl(t),dv(t,r,!1);break;case"textarea":Yl(t),pv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)b_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=Oi(Fa.current),Oi(rr.current),su(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(s=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:iu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&iu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return Dt(e),null;case 13:if(Be(Ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&cn!==null&&e.mode&1&&!(e.flags&128))KE(),Ys(),e.flags|=98560,s=!1;else if(s=su(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Qn]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else $n!==null&&(kp($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ge.current&1?pt===0&&(pt=3):gg())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return Js(),yp(t,e),t===null&&Oa(e.stateNode.containerInfo),Dt(e),null;case 10:return Zm(e.type._context),Dt(e),null;case 17:return on(e.type)&&cc(),Dt(e),null;case 19:if(Be(Ge),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zo(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yc(t),o!==null){for(e.flags|=128,zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(Ge,Ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>eo&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=yc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ke)return Dt(e),null}else 2*nt()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=Ge.current,Me(Ge,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return mg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function LA(t,e){switch(Qm(e),e.tag){case 1:return on(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),Be(sn),Be(zt),ig(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rg(e),null;case 13:if(Be(Ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Ge),null;case 4:return Js(),null;case 10:return Zm(e.type._context),null;case 22:case 23:return mg(),null;case 24:return null;default:return null}}var lu=!1,Mt=!1,MA=typeof WeakSet=="function"?WeakSet:Set,B=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(t,e,r)}else n.current=null}function vp(t,e,n){try{n()}catch(r){Je(t,e,r)}}var r0=!1;function $A(t,e){if(tp=oc,t=OE(),Km(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(np={focusedElem:t,selectionRange:n},oc=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),E);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(v){Je(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return m=r0,r0=!1,m}function pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vp(e,n,s)}i=i.next}while(i!==r)}}function ch(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function P_(t){var e=t.alternate;e!==null&&(t.alternate=null,P_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Ma],delete e[sp],delete e[wA],delete e[EA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N_(t){return t.tag===5||t.tag===3||t.tag===4}function i0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(r!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}function _p(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_p(t,e,n),t=t.sibling;t!==null;)_p(t,e,n),t=t.sibling}var kt=null,Ln=!1;function Ur(t,e,n){for(n=n.child;n!==null;)D_(t,e,n),n=n.sibling}function D_(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(nh,n)}catch{}switch(n.tag){case 5:Mt||As(n,e);case 6:var r=kt,i=Ln;kt=null,Ur(t,e,n),kt=r,Ln=i,kt!==null&&(Ln?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Ln?(t=kt,n=n.stateNode,t.nodeType===8?zd(t.parentNode,n):t.nodeType===1&&zd(t,n),Pa(t)):zd(kt,n.stateNode));break;case 4:r=kt,i=Ln,kt=n.stateNode.containerInfo,Ln=!0,Ur(t,e,n),kt=r,Ln=i;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vp(n,e,o),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!Mt&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Je(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Mt=(r=Mt)||n.memoizedState!==null,Ur(t,e,n),Mt=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function s0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MA),e.forEach(function(r){var i=WA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Ln=!1;break e;case 3:kt=a.stateNode.containerInfo,Ln=!0;break e;case 4:kt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(kt===null)throw Error(D(160));D_(s,o,i),kt=null,Ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}function O_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),r&4){try{pa(3,t,t.return),ch(3,t)}catch(y){Je(t,t.return,y)}try{pa(5,t,t.return)}catch(y){Je(t,t.return,y)}}break;case 1:Dn(e,t),Kn(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(Dn(e,t),Kn(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var i=t.stateNode;try{xa(i,"")}catch(y){Je(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tE(i,s),qf(a,o);var u=qf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?oE(i,h):c==="dangerouslySetInnerHTML"?iE(i,h):c==="children"?xa(i,h):Om(i,c,h,u)}switch(a){case"input":jf(i,s);break;case"textarea":nE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ls(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ls(i,!!s.multiple,s.defaultValue,!0):Ls(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ma]=s}catch(y){Je(t,t.return,y)}}break;case 6:if(Dn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Je(t,t.return,y)}}break;case 3:if(Dn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(y){Je(t,t.return,y)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fg=nt())),r&4&&s0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Mt=(u=Mt)||c,Dn(e,t),Mt=u):Dn(e,t),Kn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(h=B=c;B!==null;){switch(d=B,p=d.child,d.tag){case 0:case 11:case 14:case 15:pa(4,d,d.return);break;case 1:As(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){Je(r,n,y)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){a0(h);continue}}p!==null?(p.return=d,B=p):a0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sE("display",o))}catch(y){Je(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Je(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Kn(t),r&4&&s0(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N_(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xa(i,""),r.flags&=-33);var s=i0(t);_p(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=i0(t);Ep(t,a,o);break;default:throw Error(D(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FA(t,e,n){B=t,L_(t)}function L_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Mt;a=lu;var u=Mt;if(lu=o,(Mt=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?l0(i):l!==null?(l.return=o,B=l):l0(i);for(;s!==null;)B=s,L_(s),s=s.sibling;B=i,lu=a,Mt=u}o0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):o0(t)}}function o0(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mt||ch(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Mt||e.flags&512&&wp(e)}catch(d){Je(e,e.return,d)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function a0(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function l0(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ch(4,e)}catch(l){Je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Je(e,i,l)}}var s=e.return;try{wp(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{wp(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var UA=Math.ceil,Ec=Or.ReactCurrentDispatcher,hg=Or.ReactCurrentOwner,xn=Or.ReactCurrentBatchConfig,we=0,Et=null,at=null,At=0,un=0,Rs=Ti(0),pt=0,za=null,Gi=0,hh=0,dg=0,ma=null,tn=null,fg=0,eo=1/0,pr=null,_c=!1,Sp=null,oi=null,uu=!1,Zr=null,Sc=0,ga=0,Tp=null,Mu=-1,$u=0;function Yt(){return we&6?nt():Mu!==-1?Mu:Mu=nt()}function ai(t){return t.mode&1?we&2&&At!==0?At&-At:SA.transition!==null?($u===0&&($u=vE()),$u):(t=xe,t!==0||(t=window.event,t=t===void 0?16:kE(t.type)),t):1}function jn(t,e,n,r){if(50<ga)throw ga=0,Tp=null,Error(D(185));fl(t,n,r),(!(we&2)||t!==Et)&&(t===Et&&(!(we&2)&&(hh|=n),pt===4&&Wr(t,At)),an(t,r),n===1&&we===0&&!(e.mode&1)&&(eo=nt()+500,ah&&Ci()))}function an(t,e){var n=t.callbackNode;Sx(t,e);var r=sc(t,t===Et?At:0);if(r===0)n!==null&&yv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yv(n),e===1)t.tag===0?_A(u0.bind(null,t)):HE(u0.bind(null,t)),yA(function(){!(we&6)&&Ci()}),n=null;else{switch(wE(r)){case 1:n=Um;break;case 4:n=gE;break;case 16:n=ic;break;case 536870912:n=yE;break;default:n=ic}n=V_(n,M_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M_(t,e){if(Mu=-1,$u=0,we&6)throw Error(D(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var r=sc(t,t===Et?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tc(t,r);else{e=r;var i=we;we|=2;var s=F_();(Et!==t||At!==e)&&(pr=null,eo=nt()+500,ji(t,e));do try{zA();break}catch(a){$_(t,a)}while(1);Jm(),Ec.current=s,we=i,at!==null?e=0:(Et=null,At=0,e=pt)}if(e!==0){if(e===2&&(i=Yf(t),i!==0&&(r=i,e=Cp(t,i))),e===1)throw n=za,ji(t,0),Wr(t,r),an(t,nt()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!jA(i)&&(e=Tc(t,r),e===2&&(s=Yf(t),s!==0&&(r=s,e=Cp(t,s))),e===1))throw n=za,ji(t,0),Wr(t,r),an(t,nt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:bi(t,tn,pr);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=fg+500-nt(),10<e)){if(sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ip(bi.bind(null,t,tn,pr),e);break}bi(t,tn,pr);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UA(r/1960))-r,10<r){t.timeoutHandle=ip(bi.bind(null,t,tn,pr),r);break}bi(t,tn,pr);break;case 5:bi(t,tn,pr);break;default:throw Error(D(329))}}}return an(t,nt()),t.callbackNode===n?M_.bind(null,t):null}function Cp(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(ji(t,e).flags|=256),t=Tc(t,e),t!==2&&(e=tn,tn=n,e!==null&&kp(e)),t}function kp(t){tn===null?tn=t:tn.push.apply(tn,t)}function jA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~dg,e&=~hh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function u0(t){if(we&6)throw Error(D(327));js();var e=sc(t,0);if(!(e&1))return an(t,nt()),null;var n=Tc(t,e);if(t.tag!==0&&n===2){var r=Yf(t);r!==0&&(e=r,n=Cp(t,r))}if(n===1)throw n=za,ji(t,0),Wr(t,e),an(t,nt()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bi(t,tn,pr),an(t,nt()),null}function pg(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(eo=nt()+500,ah&&Ci())}}function Qi(t){Zr!==null&&Zr.tag===0&&!(we&6)&&js();var e=we;we|=1;var n=xn.transition,r=xe;try{if(xn.transition=null,xe=1,t)return t()}finally{xe=r,xn.transition=n,we=e,!(we&6)&&Ci()}}function mg(){un=Rs.current,Be(Rs)}function ji(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gA(n)),at!==null)for(n=at.return;n!==null;){var r=n;switch(Qm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cc();break;case 3:Js(),Be(sn),Be(zt),ig();break;case 5:rg(r);break;case 4:Js();break;case 13:Be(Ge);break;case 19:Be(Ge);break;case 10:Zm(r.type._context);break;case 22:case 23:mg()}n=n.return}if(Et=t,at=t=li(t.current,null),At=un=e,pt=0,za=null,dg=hh=Gi=0,tn=ma=null,Di!==null){for(e=0;e<Di.length;e++)if(n=Di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Di=null}return t}function $_(t,e){do{var n=at;try{if(Jm(),Du.current=wc,vc){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}if(Ki=0,wt=ft=Qe=null,fa=!1,Ua=0,hg.current=null,n===null||n.return===null){pt=1,za=e,at=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Yv(o);if(p!==null){p.flags&=-257,Xv(p,o,a,s,e),p.mode&1&&Qv(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Qv(s,u,e),gg();break e}l=Error(D(426))}}else if(Ke&&a.mode&1){var E=Yv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Xv(E,o,a,s,e),Ym(Zs(l,a));break e}}s=l=Zs(l,a),pt!==4&&(pt=2),ma===null?ma=[s]:ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=E_(s,l,e);zv(s,g);break e;case 1:a=l;var f=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(oi===null||!oi.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=__(s,a,e);zv(s,v);break e}}s=s.return}while(s!==null)}j_(n)}catch(C){e=C,at===n&&n!==null&&(at=n=n.return);continue}break}while(1)}function F_(){var t=Ec.current;return Ec.current=wc,t===null?wc:t}function gg(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||!(Gi&268435455)&&!(hh&268435455)||Wr(Et,At)}function Tc(t,e){var n=we;we|=2;var r=F_();(Et!==t||At!==e)&&(pr=null,ji(t,e));do try{BA();break}catch(i){$_(t,i)}while(1);if(Jm(),we=n,Ec.current=r,at!==null)throw Error(D(261));return Et=null,At=0,pt}function BA(){for(;at!==null;)U_(at)}function zA(){for(;at!==null&&!fx();)U_(at)}function U_(t){var e=z_(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?j_(t):at=e,hg.current=null}function j_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LA(n,e),n!==null){n.flags&=32767,at=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,at=null;return}}else if(n=OA(n,e,un),n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);pt===0&&(pt=5)}function bi(t,e,n){var r=xe,i=xn.transition;try{xn.transition=null,xe=1,VA(t,e,n,r)}finally{xn.transition=i,xe=r}return null}function VA(t,e,n,r){do js();while(Zr!==null);if(we&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tx(t,s),t===Et&&(at=Et=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uu||(uu=!0,V_(ic,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=xe;xe=1;var a=we;we|=4,hg.current=null,$A(t,n),O_(n,t),uA(np),oc=!!tp,np=tp=null,t.current=n,FA(n),px(),we=a,xe=o,xn.transition=s}else t.current=n;if(uu&&(uu=!1,Zr=t,Sc=i),s=t.pendingLanes,s===0&&(oi=null),yx(n.stateNode),an(t,nt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_c)throw _c=!1,t=Sp,Sp=null,t;return Sc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===Tp?ga++:(ga=0,Tp=t):ga=0,Ci(),null}function js(){if(Zr!==null){var t=wE(Sc),e=xn.transition,n=xe;try{if(xn.transition=null,xe=16>t?16:t,Zr===null)var r=!1;else{if(t=Zr,Zr=null,Sc=0,we&6)throw Error(D(331));var i=we;for(we|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:pa(8,c,s)}var h=c.child;if(h!==null)h.return=c,B=h;else for(;B!==null;){c=B;var d=c.sibling,p=c.return;if(P_(c),c===u){B=null;break}if(d!==null){d.return=p,B=d;break}B=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,B=g;break e}B=s.return}}var f=t.current;for(B=f;B!==null;){o=B;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,B=w;else e:for(o=f;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ch(9,a)}}catch(C){Je(a,a.return,C)}if(a===o){B=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,B=v;break e}B=a.return}}if(we=i,Ci(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(nh,t)}catch{}r=!0}return r}finally{xe=n,xn.transition=e}}return!1}function c0(t,e,n){e=Zs(n,e),e=E_(t,e,1),t=si(t,e,1),e=Yt(),t!==null&&(fl(t,1,e),an(t,e))}function Je(t,e,n){if(t.tag===3)c0(t,t,n);else for(;e!==null;){if(e.tag===3){c0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){t=Zs(n,t),t=__(e,t,1),e=si(e,t,1),t=Yt(),e!==null&&(fl(e,1,t),an(e,t));break}}e=e.return}}function HA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(At&n)===n&&(pt===4||pt===3&&(At&130023424)===At&&500>nt()-fg?ji(t,0):dg|=n),an(t,e)}function B_(t,e){e===0&&(t.mode&1?(e=Zl,Zl<<=1,!(Zl&130023424)&&(Zl=4194304)):e=1);var n=Yt();t=xr(t,e),t!==null&&(fl(t,e,n),an(t,n))}function qA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B_(t,n)}function WA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),B_(t,n)}var z_;z_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,DA(t,e,n);rn=!!(t.flags&131072)}else rn=!1,Ke&&e.flags&1048576&&qE(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lu(t,e),t=e.pendingProps;var i=Qs(e,zt.current);Us(e,n),i=og(null,e,r,t,i,n);var s=ag();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,hc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tg(e),i.updater=lh,e.stateNode=i,i._reactInternals=e,hp(e,r,t,n),e=pp(null,e,r,!0,s,n)):(e.tag=0,Ke&&s&&Gm(e),Kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GA(r),t=On(r,t),i){case 0:e=fp(null,e,r,t,n);break e;case 1:e=e0(null,e,r,t,n);break e;case 11:e=Jv(null,e,r,t,n);break e;case 14:e=Zv(null,e,r,On(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),fp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),e0(t,e,r,i,n);case 3:e:{if(k_(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,QE(t,e),gc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zs(Error(D(423)),e),e=t0(t,e,r,n,i);break e}else if(r!==i){i=Zs(Error(D(424)),e),e=t0(t,e,r,n,i);break e}else for(cn=ii(e.stateNode.containerInfo.firstChild),dn=e,Ke=!0,$n=null,n=ZE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===i){e=Ar(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return e_(e),t===null&&lp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rp(r,i)?o=null:s!==null&&rp(r,s)&&(e.flags|=32),C_(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&lp(e),null;case 13:return I_(t,e,n);case 4:return ng(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xs(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Jv(t,e,r,i,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(pc,r._currentValue),r._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===i.children&&!sn.current){e=Ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),up(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),up(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Us(e,n),i=Pn(i),r=r(i),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),Zv(t,e,r,i,n);case 15:return S_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Lu(t,e),e.tag=1,on(r)?(t=!0,hc(e)):t=!1,Us(e,n),XE(e,r,i),hp(e,r,i,n),pp(null,e,r,!0,t,n);case 19:return x_(t,e,n);case 22:return T_(t,e,n)}throw Error(D(156,e.tag))};function V_(t,e){return mE(t,e)}function KA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new KA(t,e,n,r)}function yg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GA(t){if(typeof t=="function")return yg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mm)return 11;if(t===$m)return 14}return 2}function li(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Bi(n.children,i,s,e);case Lm:o=8,i|=8;break;case Lf:return t=In(12,n,e,i|2),t.elementType=Lf,t.lanes=s,t;case Mf:return t=In(13,n,e,i),t.elementType=Mf,t.lanes=s,t;case $f:return t=In(19,n,e,i),t.elementType=$f,t.lanes=s,t;case J1:return dh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y1:o=10;break e;case X1:o=9;break e;case Mm:o=11;break e;case $m:o=14;break e;case zr:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Bi(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function dh(t,e,n,r){return t=In(22,t,r,e),t.elementType=J1,t.lanes=n,t.stateNode={isHidden:!1},t}function Yd(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Xd(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pd(0),this.expirationTimes=Pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vg(t,e,n,r,i,s,o,a,l){return t=new QA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tg(s),t}function YA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function H_(t){if(!t)return gi;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(on(n))return VE(t,n,e)}return e}function q_(t,e,n,r,i,s,o,a,l){return t=vg(n,r,!0,t,i,s,o,a,l),t.context=H_(null),n=t.current,r=Yt(),i=ai(n),s=Sr(r,i),s.callback=e??null,si(n,s,i),t.current.lanes=i,fl(t,i,r),an(t,r),t}function fh(t,e,n,r){var i=e.current,s=Yt(),o=ai(i);return n=H_(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=si(i,e,o),t!==null&&(jn(t,i,o,s),Nu(t,i,o)),o}function Cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function h0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wg(t,e){h0(t,e),(t=t.alternate)&&h0(t,e)}function XA(){return null}var W_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eg(t){this._internalRoot=t}ph.prototype.render=Eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));fh(t,e,null,null)};ph.prototype.unmount=Eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qi(function(){fh(null,t,null,null)}),e[Ir]=null}};function ph(t){this._internalRoot=t}ph.prototype.unstable_scheduleHydration=function(t){if(t){var e=SE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&CE(t)}};function _g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d0(){}function JA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Cc(o);s.call(u)}}var o=q_(e,r,t,0,null,!1,!1,"",d0);return t._reactRootContainer=o,t[Ir]=o.current,Oa(t.nodeType===8?t.parentNode:t),Qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Cc(l);a.call(u)}}var l=vg(t,0,!1,null,null,!1,!1,"",d0);return t._reactRootContainer=l,t[Ir]=l.current,Oa(t.nodeType===8?t.parentNode:t),Qi(function(){fh(e,l,n,r)}),l}function gh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Cc(o);a.call(l)}}fh(e,o,t,i)}else o=JA(n,e,t,i,r);return Cc(o)}EE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(jm(e,n|1),an(e,nt()),!(we&6)&&(eo=nt()+500,Ci()))}break;case 13:Qi(function(){var r=xr(t,1);if(r!==null){var i=Yt();jn(r,t,1,i)}}),wg(t,1)}};Bm=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Yt();jn(e,t,134217728,n)}wg(t,134217728)}};_E=function(t){if(t.tag===13){var e=ai(t),n=xr(t,e);if(n!==null){var r=Yt();jn(n,t,e,r)}wg(t,e)}};SE=function(){return xe};TE=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};Kf=function(t,e,n){switch(e){case"input":if(jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oh(r);if(!i)throw Error(D(90));eE(r),jf(r,i)}}}break;case"textarea":nE(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};uE=pg;cE=Qi;var ZA={usingClientEntryPoint:!1,Events:[ml,Ts,oh,aE,lE,pg]},Vo={findFiberByHostInstance:Ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eR={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fE(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||XA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{nh=cu.inject(eR),nr=cu}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZA;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error(D(200));return YA(t,e,null,n)};yn.createRoot=function(t,e){if(!_g(t))throw Error(D(299));var n=!1,r="",i=W_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vg(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,Oa(t.nodeType===8?t.parentNode:t),new Eg(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=fE(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Qi(t)};yn.hydrate=function(t,e,n){if(!mh(e))throw Error(D(200));return gh(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!_g(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=W_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q_(e,null,t,1,n??null,i,!1,s,o),t[Ir]=e.current,Oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ph(e)};yn.render=function(t,e,n){if(!mh(e))throw Error(D(200));return gh(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!mh(t))throw Error(D(40));return t._reactRootContainer?(Qi(function(){gh(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};yn.unstable_batchedUpdates=pg;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mh(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return gh(t,e,n,!1,r)};yn.version="18.2.0-next-9e3b772b8-20220608";function K_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K_)}catch(t){console.error(t)}}K_(),q1.exports=yn;var G_=q1.exports;const tR=xm(G_);var f0=G_;Df.createRoot=f0.createRoot,Df.hydrateRoot=f0.hydrateRoot;/**
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
 */const Q_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new rR;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iR=function(t){const e=Q_(t);return Y_.encodeByteArray(e,!0)},kc=function(t){return iR(t).replace(/\./g,"")},X_=function(t){try{return Y_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oR=()=>sR().__FIREBASE_DEFAULTS__,aR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&X_(t[1]);return e&&JSON.parse(e)},yh=()=>{try{return oR()||aR()||lR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J_=t=>{var e,n;return(n=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Z_=t=>{const e=J_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eS=()=>{var t;return(t=yh())===null||t===void 0?void 0:t.config},tS=t=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class uR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[kc(JSON.stringify(n)),kc(JSON.stringify(o)),a].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function hR(){var t;const e=(t=yh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pR(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mR(){try{return typeof indexedDB=="object"}catch{return!1}}function gR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const yR="FirebaseError";class ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yR,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yl.prototype.create)}}class yl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ur(i,a,r)}}function vR(t,e){return t.replace(wR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ic(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(p0(s)&&p0(o)){if(!Ic(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function p0(t){return t!==null&&typeof t=="object"}/**
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
 */function vl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ta(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function na(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _R(t,e){const n=new SR(t,e);return n.subscribe.bind(n)}class SR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jd),i.error===void 0&&(i.error=Jd),i.complete===void 0&&(i.complete=Jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jd(){}/**
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
 */const Pi="[DEFAULT]";/**
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
 */class CR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IR(e))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pi){return this.instances.has(e)}getOptions(e=Pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pi){return this.component?this.component.multipleInstances?e:Pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===Pi?void 0:t}function IR(t){return t.instantiationMode==="EAGER"}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const AR={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},RR=Se.INFO,bR={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},PR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sg{constructor(e){this.name=e,this._logLevel=RR,this._logHandler=PR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const NR=(t,e)=>e.some(n=>t instanceof n);let m0,g0;function DR(){return m0||(m0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return g0||(g0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rS=new WeakMap,Ip=new WeakMap,iS=new WeakMap,Zd=new WeakMap,Tg=new WeakMap;function LR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rS.set(n,t)}).catch(()=>{}),Tg.set(e,t),e}function MR(t){if(Ip.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ip.set(t,e)}let xp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ip.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $R(t){xp=t(xp)}function FR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ef(this),e,...n);return iS.set(r,e.sort?e.sort():[e]),ui(r)}:OR().includes(t)?function(...e){return t.apply(ef(this),e),ui(rS.get(this))}:function(...e){return ui(t.apply(ef(this),e))}}function UR(t){return typeof t=="function"?FR(t):(t instanceof IDBTransaction&&MR(t),NR(t,DR())?new Proxy(t,xp):t)}function ui(t){if(t instanceof IDBRequest)return LR(t);if(Zd.has(t))return Zd.get(t);const e=UR(t);return e!==t&&(Zd.set(t,e),Tg.set(e,t)),e}const ef=t=>Tg.get(t);function jR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ui(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ui(o.result),l.oldVersion,l.newVersion,ui(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BR=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],tf=new Map;function y0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tf.set(e,s),s}$R(t=>({...t,get:(e,n,r)=>y0(e,n)||t.get(e,n,r),has:(e,n)=>!!y0(e,n)||t.has(e,n)}));/**
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
 */class VR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ap="@firebase/app",v0="0.9.13";/**
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
 */const Yi=new Sg("@firebase/app"),qR="@firebase/app-compat",WR="@firebase/analytics-compat",KR="@firebase/analytics",GR="@firebase/app-check-compat",QR="@firebase/app-check",YR="@firebase/auth",XR="@firebase/auth-compat",JR="@firebase/database",ZR="@firebase/database-compat",eb="@firebase/functions",tb="@firebase/functions-compat",nb="@firebase/installations",rb="@firebase/installations-compat",ib="@firebase/messaging",sb="@firebase/messaging-compat",ob="@firebase/performance",ab="@firebase/performance-compat",lb="@firebase/remote-config",ub="@firebase/remote-config-compat",cb="@firebase/storage",hb="@firebase/storage-compat",db="@firebase/firestore",fb="@firebase/firestore-compat",pb="firebase",mb="9.23.0";/**
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
 */const Rp="[DEFAULT]",gb={[Ap]:"fire-core",[qR]:"fire-core-compat",[KR]:"fire-analytics",[WR]:"fire-analytics-compat",[QR]:"fire-app-check",[GR]:"fire-app-check-compat",[YR]:"fire-auth",[XR]:"fire-auth-compat",[JR]:"fire-rtdb",[ZR]:"fire-rtdb-compat",[eb]:"fire-fn",[tb]:"fire-fn-compat",[nb]:"fire-iid",[rb]:"fire-iid-compat",[ib]:"fire-fcm",[sb]:"fire-fcm-compat",[ob]:"fire-perf",[ab]:"fire-perf-compat",[lb]:"fire-rc",[ub]:"fire-rc-compat",[cb]:"fire-gcs",[hb]:"fire-gcs-compat",[db]:"fire-fst",[fb]:"fire-fst-compat","fire-js":"fire-js",[pb]:"fire-js-all"};/**
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
 */const xc=new Map,bp=new Map;function yb(t,e){try{t.container.addComponent(e)}catch(n){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xi(t){const e=t.name;if(bp.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;bp.set(e,t);for(const n of xc.values())yb(n,t);return!0}function vh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vb={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ci=new yl("app","Firebase",vb);/**
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
 */class wb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=mb;function sS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ci.create("bad-app-name",{appName:String(i)});if(n||(n=eS()),!n)throw ci.create("no-options");const s=xc.get(i);if(s){if(Ic(n,s.options)&&Ic(r,s.config))return s;throw ci.create("duplicate-app",{appName:i})}const o=new xR(i);for(const l of bp.values())o.addComponent(l);const a=new wb(n,r,o);return xc.set(i,a),a}function Cg(t=Rp){const e=xc.get(t);if(!e&&t===Rp&&eS())return sS();if(!e)throw ci.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let i=(r=gb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(a.join(" "));return}Xi(new yi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Eb="firebase-heartbeat-database",_b=1,Va="firebase-heartbeat-store";let nf=null;function oS(){return nf||(nf=jR(Eb,_b,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Va)}}}).catch(t=>{throw ci.create("idb-open",{originalErrorMessage:t.message})})),nf}async function Sb(t){try{return await(await oS()).transaction(Va).objectStore(Va).get(aS(t))}catch(e){if(e instanceof ur)Yi.warn(e.message);else{const n=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(n.message)}}}async function w0(t,e){try{const r=(await oS()).transaction(Va,"readwrite");await r.objectStore(Va).put(e,aS(t)),await r.done}catch(n){if(n instanceof ur)Yi.warn(n.message);else{const r=ci.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yi.warn(r.message)}}}function aS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tb=1024,Cb=30*24*60*60*1e3;class kb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=E0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Cb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=E0(),{heartbeatsToSend:n,unsentEntries:r}=Ib(this._heartbeatsCache.heartbeats),i=kc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function E0(){return new Date().toISOString().substring(0,10)}function Ib(t,e=Tb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mR()?gR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _0(t){return kc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ab(t){Xi(new yi("platform-logger",e=>new VR(e),"PRIVATE")),Xi(new yi("heartbeat",e=>new kb(e),"PRIVATE")),ir(Ap,v0,t),ir(Ap,v0,"esm2017"),ir("fire-js","")}Ab("");var Rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,kg=kg||{},re=Rb||self;function wh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bb(t){return Object.prototype.hasOwnProperty.call(t,rf)&&t[rf]||(t[rf]=++Pb)}var rf="closure_uid_"+(1e9*Math.random()>>>0),Pb=0;function Nb(t,e,n){return t.call.apply(t.bind,arguments)}function Db(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=Nb:Ut=Db,Ut.apply(null,arguments)}function hu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function St(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ki(){this.s=this.s,this.o=this.o}var Ob=0;ki.prototype.s=!1;ki.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ob!=0)&&bb(this)};ki.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ig(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function jt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}jt.prototype.h=function(){this.defaultPrevented=!0};var Lb=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",()=>{},e),re.removeEventListener("test",()=>{},e)}catch{}return t}();function Ha(t){return/^[\s\xa0]*$/.test(t)}function Eh(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function Yn(t){return Eh().indexOf(t)!=-1}function xg(t){return xg[" "](t),t}xg[" "]=function(){};function Mb(t,e){var n=AP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $b=Yn("Opera"),to=Yn("Trident")||Yn("MSIE"),uS=Yn("Edge"),Pp=uS||to,cS=Yn("Gecko")&&!(Eh().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge"))&&!(Yn("Trident")||Yn("MSIE"))&&!Yn("Edge"),Fb=Eh().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge");function hS(){var t=re.document;return t?t.documentMode:void 0}var Np;e:{var sf="",of=function(){var t=Eh();if(cS)return/rv:([^\);]+)(\)|;)/.exec(t);if(uS)return/Edge\/([\d\.]+)/.exec(t);if(to)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Fb)return/WebKit\/(\S+)/.exec(t);if($b)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(of&&(sf=of?of[1]:""),to){var af=hS();if(af!=null&&af>parseFloat(sf)){Np=String(af);break e}}Np=sf}var Dp;if(re.document&&to){var T0=hS();Dp=T0||parseInt(Np,10)||void 0}else Dp=void 0;var Ub=Dp;function qa(t,e){if(jt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cS){e:{try{xg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qa.$.h.call(this)}}St(qa,jt);var jb={2:"touch",3:"pen",4:"mouse"};qa.prototype.h=function(){qa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var El="closure_listenable_"+(1e6*Math.random()|0),Bb=0;function zb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Bb,this.fa=this.ia=!1}function _h(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ag(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Vb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function dS(t){const e={};for(const n in t)e[n]=t[n];return e}const C0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<C0.length;s++)n=C0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Sh(t){this.src=t,this.g={},this.h=0}Sh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Lp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zb(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Op(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=lS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_h(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Rg="closure_lm_"+(1e6*Math.random()|0),lf={};function pS(t,e,n,r,i){if(r&&r.once)return gS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pS(t,e[s],n,r,i);return null}return n=Ng(n),t&&t[El]?t.O(e,n,wl(r)?!!r.capture:!!r,i):mS(t,e,n,!1,r,i)}function mS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=wl(i)?!!i.capture:!!i,a=Pg(t);if(a||(t[Rg]=a=new Sh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Hb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Lb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Hb(){function t(n){return e.call(t.src,t.listener,n)}const e=qb;return t}function gS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gS(t,e[s],n,r,i);return null}return n=Ng(n),t&&t[El]?t.P(e,n,wl(r)?!!r.capture:!!r,i):mS(t,e,n,!0,r,i)}function yS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)yS(t,e[s],n,r,i);else r=wl(r)?!!r.capture:!!r,n=Ng(n),t&&t[El]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Lp(s,n,r,i),-1<n&&(_h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lp(e,n,r,i)),(n=-1<t?e[t]:null)&&bg(n))}function bg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[El])Op(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pg(e))?(Op(n,t),n.h==0&&(n.src=null,e[Rg]=null)):_h(t)}}}function vS(t){return t in lf?lf[t]:lf[t]="on"+t}function qb(t,e){if(t.fa)t=!0;else{e=new qa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bg(t),t=n.call(r,e)}return t}function Pg(t){return t=t[Rg],t instanceof Sh?t:null}var uf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ng(t){return typeof t=="function"?t:(t[uf]||(t[uf]=function(e){return t.handleEvent(e)}),t[uf])}function _t(){ki.call(this),this.i=new Sh(this),this.S=this,this.J=null}St(_t,ki);_t.prototype[El]=!0;_t.prototype.removeEventListener=function(t,e,n,r){yS(this,t,e,n,r)};function Rt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new jt(e,t);else if(e instanceof jt)e.target=e.target||t;else{var i=e;e=new jt(r,t),fS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=du(o,r,!0,e)&&i}if(o=e.g=t,i=du(o,r,!0,e)&&i,i=du(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=du(o,r,!1,e)&&i}_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_h(n[r]);delete t.g[e],t.h--}}this.J=null};_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function du(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Op(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Dg=re.JSON.stringify;class Wb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Kb(){var t=Og;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Gb{constructor(){this.h=this.g=null}add(e,n){const r=wS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wS=new Wb(()=>new Qb,t=>t.reset());class Qb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Yb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Xb(t){re.setTimeout(()=>{throw t},0)}let Wa,Ka=!1,Og=new Gb,ES=()=>{const t=re.Promise.resolve(void 0);Wa=()=>{t.then(Jb)}};var Jb=()=>{for(var t;t=Kb();){try{t.h.call(t.g)}catch(n){Xb(n)}var e=wS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ka=!1};function Th(t,e){_t.call(this),this.h=t||1,this.g=e||re,this.j=Ut(this.qb,this),this.l=Date.now()}St(Th,_t);U=Th.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Rt(this,"tick"),this.ga&&(Lg(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Th.$.N.call(this),Lg(this),delete this.g};function Mg(t,e,n){if(typeof t=="function")n&&(t=Ut(t,n));else if(t&&typeof t.handleEvent=="function")t=Ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function _S(t){t.g=Mg(()=>{t.g=null,t.i&&(t.i=!1,_S(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Zb extends ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_S(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ga(t){ki.call(this),this.h=t,this.g={}}St(Ga,ki);var k0=[];function SS(t,e,n,r){Array.isArray(n)||(n&&(k0[0]=n.toString()),n=k0);for(var i=0;i<n.length;i++){var s=pS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function TS(t){Ag(t.g,function(e,n){this.g.hasOwnProperty(n)&&bg(e)},t),t.g={}}Ga.prototype.N=function(){Ga.$.N.call(this),TS(this)};Ga.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ch(){this.g=!0}Ch.prototype.Ea=function(){this.g=!1};function eP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function tP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function bs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rP(t,n)+(r?" "+r:"")})}function nP(t,e){t.info(function(){return"TIMEOUT: "+e})}Ch.prototype.info=function(){};function rP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Dg(n)}catch{return e}}var us={},I0=null;function kh(){return I0=I0||new _t}us.Ta="serverreachability";function CS(t){jt.call(this,us.Ta,t)}St(CS,jt);function Qa(t){const e=kh();Rt(e,new CS(e))}us.STAT_EVENT="statevent";function kS(t,e){jt.call(this,us.STAT_EVENT,t),this.stat=e}St(kS,jt);function Gt(t){const e=kh();Rt(e,new kS(e,t))}us.Ua="timingevent";function IS(t,e){jt.call(this,us.Ua,t),this.size=e}St(IS,jt);function _l(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Ih={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $g(){}$g.prototype.h=null;function x0(t){return t.h||(t.h=t.i())}function AS(){}var Sl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fg(){jt.call(this,"d")}St(Fg,jt);function Ug(){jt.call(this,"c")}St(Ug,jt);var Mp;function xh(){}St(xh,$g);xh.prototype.g=function(){return new XMLHttpRequest};xh.prototype.i=function(){return{}};Mp=new xh;function Tl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ga(this),this.P=iP,t=Pp?125:void 0,this.V=new Th(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new RS}function RS(){this.i=null,this.g="",this.h=!1}var iP=45e3,$p={},Ac={};U=Tl.prototype;U.setTimeout=function(t){this.P=t};function Fp(t,e,n){t.L=1,t.v=Rh(Rr(e)),t.s=n,t.S=!0,bS(t,null)}function bS(t,e){t.G=Date.now(),Cl(t),t.A=Rr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),FS(n.i,"t",r),t.C=0,n=t.l.J,t.h=new RS,t.g=sT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Zb(Ut(t.Pa,t,t.g),t.O)),SS(t.U,t.g,"readystatechange",t.nb),e=t.I?dS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qa(),eP(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&Xn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=Xn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Pp||this.g&&(this.h.h||this.g.ja()||P0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Qa(3):Qa(2)),Ah(this);var n=this.g.da();this.ca=n;t:if(PS(this)){var r=P0(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),ya(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,tP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var u=a;break t}}u=null}if(n=u)bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Up(this,n);else{this.i=!1,this.o=3,Gt(12),Li(this),ya(this);break e}}this.S?(NS(this,c,o),Pp&&this.i&&c==3&&(SS(this.U,this.V,"tick",this.mb),this.V.start())):(bs(this.j,this.m,o,null),Up(this,o)),c==4&&Li(this),this.i&&!this.J&&(c==4?tT(this.l,this):(this.i=!1,Cl(this)))}else kP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Gt(12)):(this.o=0,Gt(13)),Li(this),ya(this)}}}catch{}finally{}};function PS(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function NS(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=sP(t,n),i==Ac){e==4&&(t.o=4,Gt(14),r=!1),bs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==$p){t.o=4,Gt(15),bs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else bs(t.j,t.m,i,null),Up(t,i);PS(t)&&i!=Ac&&i!=$p&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qg(e),e.M=!0,Gt(11))):(bs(t.j,t.m,n,"[Invalid Chunked Response]"),Li(t),ya(t))}U.mb=function(){if(this.g){var t=Xn(this.g),e=this.g.ja();this.C<e.length&&(Ah(this),NS(this,t,e),this.i&&t!=4&&Cl(this))}};function sP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ac:(n=Number(e.substring(n,r)),isNaN(n)?$p:(r+=1,r+n>e.length?Ac:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,Li(this)};function Cl(t){t.Y=Date.now()+t.P,DS(t,t.P)}function DS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_l(Ut(t.lb,t),e)}function Ah(t){t.B&&(re.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(nP(this.j,this.A),this.L!=2&&(Qa(),Gt(17)),Li(this),this.o=2,ya(this)):DS(this,this.Y-t)};function ya(t){t.l.H==0||t.J||tT(t.l,t)}function Li(t){Ah(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Lg(t.V),TS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Up(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||jp(n.i,t))){if(!t.K&&jp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pc(n),Nh(n);else break e;Hg(n),Gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=_l(Ut(n.ib,n),6e3));if(1>=BS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mi(n,11)}else if((t.K||n.g==t)&&Pc(n),!Ha(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jg(s,s.h),s.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ue(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=iT(r,r.J?r.pa:null,r.Y),o.K){zS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ah(a),Cl(a)),r.g=o}else ZS(r);0<n.j.length&&Dh(n)}else u[0]!="stop"&&u[0]!="close"||Mi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mi(n,7):Vg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Qa(4)}catch{}}function oP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function aP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function OS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=aP(t),r=oP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var LS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zi){this.h=t.h,Rc(this,t.j),this.s=t.s,this.g=t.g,bc(this,t.m),this.l=t.l;var e=t.i,n=new Ya;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),A0(this,n),this.o=t.o}else t&&(e=String(t).match(LS))?(this.h=!1,Rc(this,e[1]||"",!0),this.s=ra(e[2]||""),this.g=ra(e[3]||"",!0),bc(this,e[4]),this.l=ra(e[5]||"",!0),A0(this,e[6]||"",!0),this.o=ra(e[7]||"")):(this.h=!1,this.i=new Ya(null,this.h))}zi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ia(e,R0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ia(e,R0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ia(n,n.charAt(0)=="/"?hP:cP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ia(n,fP)),t.join("")};function Rr(t){return new zi(t)}function Rc(t,e,n){t.j=n?ra(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function A0(t,e,n){e instanceof Ya?(t.i=e,pP(t.i,t.h)):(n||(e=ia(e,dP)),t.i=new Ya(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Rh(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ra(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ia(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var R0=/[#\/\?@]/g,cP=/[#\?:]/g,hP=/[#\?]/g,dP=/[#\?@]/g,fP=/#/g;function Ya(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ii(t){t.g||(t.g=new Map,t.h=0,t.i&&lP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Ya.prototype;U.add=function(t,e){Ii(this),this.i=null,t=vo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function MS(t,e){Ii(t),e=vo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $S(t,e){return Ii(t),e=vo(t,e),t.g.has(e)}U.forEach=function(t,e){Ii(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){Ii(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){Ii(this);let e=[];if(typeof t=="string")$S(this,t)&&(e=e.concat(this.g.get(vo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Ii(this),this.i=null,t=vo(this,t),$S(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function FS(t,e,n){MS(t,e),0<n.length&&(t.i=null,t.g.set(vo(t,e),Ig(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function vo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pP(t,e){e&&!t.j&&(Ii(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(MS(this,r),FS(this,i,n))},t)),t.j=e}var mP=class{constructor(t,e){this.g=t,this.map=e}};function US(t){this.l=t||gP,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gP=10;function jS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function BS(t){return t.h?1:t.g?t.g.size:0}function jp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jg(t,e){t.g?t.g.add(e):t.h=e}function zS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}US.prototype.cancel=function(){if(this.i=VS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function VS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ig(t.i)}var yP=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function vP(){this.g=new yP}function wP(t,e,n){const r=n||"";try{OS(t,function(i,s){let o=i;wl(i)&&(o=Dg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function EP(t,e){const n=new Ch;if(re.Image){const r=new Image;r.onload=hu(fu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=hu(fu,n,r,"TestLoadImage: error",!1,e),r.onabort=hu(fu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=hu(fu,n,r,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function kl(t){this.l=t.fc||null,this.j=t.ob||!1}St(kl,$g);kl.prototype.g=function(){return new bh(this.l,this.j)};kl.prototype.i=function(t){return function(){return t}}({});function bh(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}St(bh,_t);var Bg=0;U=bh.prototype;U.open=function(t,e){if(this.readyState!=Bg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xa(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Il(this)),this.readyState=Bg};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xa(this)),this.g&&(this.readyState=3,Xa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function HS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Il(this):Xa(this),this.readyState==3&&HS(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Il(this))};U.Ya=function(t){this.g&&(this.response=t,Il(this))};U.ka=function(){this.g&&Il(this)};function Il(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xa(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _P=re.JSON.parse;function Ze(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qS,this.L=this.M=!1}St(Ze,_t);var qS="",SP=/^https?$/i,TP=["POST","PUT"];U=Ze.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mp.g(),this.C=this.u?x0(this.u):x0(Mp),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){b0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=re.FormData&&t instanceof re.FormData,!(0<=lS(TP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{GS(this),0<this.B&&((this.L=CP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=Mg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){b0(this,s)}};function CP(t){return to&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof kg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))};function b0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,WS(t),Ph(t)}function WS(t){t.F||(t.F=!0,Rt(t,"complete"),Rt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),Ph(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ph(this,!0)),Ze.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?KS(this):this.kb())};U.kb=function(){KS(this)};function KS(t){if(t.h&&typeof kg<"u"&&(!t.C[1]||Xn(t)!=4||t.da()!=2)){if(t.v&&Xn(t)==4)Mg(t.La,0,t);else if(Rt(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(LS)[1]||null;!i&&re.self&&re.self.location&&(i=re.self.location.protocol.slice(0,-1)),r=!SP.test(i?i.toLowerCase():"")}n=r}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var s=2<Xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",WS(t)}}finally{Ph(t)}}}}function Ph(t,e){if(t.g){GS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function GS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Xn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_P(e)}};function P0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case qS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kP(t){const e={};t=(t.g&&2<=Xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ha(t[r]))continue;var n=Yb(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}Vb(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function QS(t){let e="";return Ag(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=QS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function Ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function YS(t){this.Ga=0,this.j=[],this.l=new Ch,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ho("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ho("baseRetryDelayMs",5e3,t),this.hb=Ho("retryDelaySeedMs",1e4,t),this.eb=Ho("forwardChannelMaxRetries",2,t),this.xa=Ho("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new US(t&&t.concurrentRequestLimit),this.Ja=new vP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=YS.prototype;U.ra=8;U.H=1;function Vg(t){if(XS(t),t.H==3){var e=t.W++,n=Rr(t.I);if(Ue(n,"SID",t.K),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),xl(t,n),e=new Tl(t,t.l,e),e.L=2,e.v=Rh(Rr(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=sT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Cl(e)}rT(t)}function Nh(t){t.g&&(qg(t),t.g.cancel(),t.g=null)}function XS(t){Nh(t),t.u&&(re.clearTimeout(t.u),t.u=null),Pc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Dh(t){if(!jS(t.i)&&!t.m){t.m=!0;var e=t.Na;Wa||ES(),Ka||(Wa(),Ka=!0),Og.add(e,t),t.C=0}}function IP(t,e){return BS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_l(Ut(t.Na,t,e),nT(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Tl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=dS(s),fS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=JS(this,i,e),n=Rr(this.I),Ue(n,"RID",t),Ue(n,"CVER",22),this.F&&Ue(n,"X-HTTP-Session-Id",this.F),xl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(QS(s)))+"&"+e:this.o&&zg(n,this.o,s)),jg(this.i,i),this.bb&&Ue(n,"TYPE","init"),this.P?(Ue(n,"$req",e),Ue(n,"SID","null"),i.aa=!0,Fp(i,n,null)):Fp(i,n,e),this.H=2}}else this.H==3&&(t?N0(this,t):this.j.length==0||jS(this.i)||N0(this))};function N0(t,e){var n;e?n=e.m:n=t.W++;const r=Rr(t.I);Ue(r,"SID",t.K),Ue(r,"RID",n),Ue(r,"AID",t.V),xl(t,r),t.o&&t.s&&zg(r,t.o,t.s),n=new Tl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=JS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jg(t.i,n),Fp(n,r,e)}function xl(t,e){t.na&&Ag(t.na,function(n,r){Ue(e,r,n)}),t.h&&OS({},function(n,r){Ue(e,r,n)})}function JS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ut(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{wP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ZS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Wa||ES(),Ka||(Wa(),Ka=!0),Og.add(e,t),t.A=0}}function Hg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_l(Ut(t.Ma,t),nT(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,eT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_l(Ut(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Gt(10),Nh(this),eT(this))};function qg(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function eT(t){t.g=new Tl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Rr(t.wa);Ue(e,"RID","rpc"),Ue(e,"SID",t.K),Ue(e,"AID",t.V),Ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ue(e,"TO",t.qa),Ue(e,"TYPE","xmlhttp"),xl(t,e),t.o&&t.s&&zg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Rh(Rr(e)),n.s=null,n.S=!0,bS(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Nh(this),Hg(this),Gt(19))};function Pc(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function tT(t,e){var n=null;if(t.g==e){Pc(t),qg(t),t.g=null;var r=2}else if(jp(t.i,e))n=e.F,zS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=kh(),Rt(r,new IS(r,n)),Dh(t)}else ZS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&IP(t,e)||r==2&&Hg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mi(t,5);break;case 4:Mi(t,10);break;case 3:Mi(t,6);break;default:Mi(t,2)}}}function nT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Mi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ut(t.pb,t);n||(n=new zi("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Rc(n,"https"),Rh(n)),EP(n.toString(),r)}else Gt(2);t.H=0,t.h&&t.h.za(e),rT(t),XS(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Gt(2)):(this.l.info("Failed to ping google.com"),Gt(1))};function rT(t){if(t.H=0,t.ma=[],t.h){const e=VS(t.i);(e.length!=0||t.j.length!=0)&&(S0(t.ma,e),S0(t.ma,t.j),t.i.i.length=0,Ig(t.j),t.j.length=0),t.h.ya()}}function iT(t,e,n){var r=n instanceof zi?Rr(n):new zi(n);if(r.g!="")e&&(r.g=e+"."+r.g),bc(r,r.m);else{var i=re.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new zi(null);r&&Rc(s,r),e&&(s.g=e),i&&bc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ra),xl(t,r),r}function sT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ze(new kl({ob:!0})):new Ze(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function oT(){}U=oT.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Nc(){if(to&&!(10<=Number(Ub)))throw Error("Environmental error: no available transport.")}Nc.prototype.g=function(t,e){return new mn(t,e)};function mn(t,e){_t.call(this),this.g=new YS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wo(this)}St(mn,_t);mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=iT(t,null,t.Y),Dh(t)};mn.prototype.close=function(){Vg(this.g)};mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dg(t),t=n);e.j.push(new mP(e.fb++,t)),e.H==3&&Dh(e)};mn.prototype.N=function(){this.g.h=null,delete this.j,Vg(this.g),delete this.g,mn.$.N.call(this)};function aT(t){Fg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}St(aT,Fg);function lT(){Ug.call(this),this.status=1}St(lT,Ug);function wo(t){this.g=t}St(wo,oT);wo.prototype.Ba=function(){Rt(this.g,"a")};wo.prototype.Aa=function(t){Rt(this.g,new aT(t))};wo.prototype.za=function(t){Rt(this.g,new lT)};wo.prototype.ya=function(){Rt(this.g,"b")};function xP(){this.blockSize=-1}function zn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}St(zn,xP);zn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}zn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)cf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){cf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){cf(this,r),i=0;break}}this.h=i,this.i+=e};zn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ae(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var AP={};function Wg(t){return-128<=t&&128>t?Mb(t,function(e){return new Ae([e|0],0>e?-1:0)}):new Ae([t|0],0>t?-1:0)}function Jn(t){if(isNaN(t)||!isFinite(t))return Bs;if(0>t)return xt(Jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bp;return new Ae(e,0)}function uT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xt(uT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(e,8)),r=Bs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jn(Math.pow(e,s)),r=r.R(s).add(Jn(o))):(r=r.R(n),r=r.add(Jn(o)))}return r}var Bp=4294967296,Bs=Wg(0),zp=Wg(1),D0=Wg(16777216);U=Ae.prototype;U.ea=function(){if(kn(this))return-xt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bp+r)*e,e*=Bp}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vr(this))return"0";if(kn(this))return"-"+xt(this).toString(t);for(var e=Jn(Math.pow(t,6)),n=this,r="";;){var i=Oc(n,e).g;n=Dc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,vr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kn(t){return t.h==-1}U.X=function(t){return t=Dc(this,t),kn(t)?-1:vr(t)?0:1};function xt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ae(n,~t.h).add(zp)}U.abs=function(){return kn(this)?xt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ae(n,n[n.length-1]&-2147483648?-1:0)};function Dc(t,e){return t.add(xt(e))}U.R=function(t){if(vr(this)||vr(t))return Bs;if(kn(this))return kn(t)?xt(this).R(xt(t)):xt(xt(this).R(t));if(kn(t))return xt(this.R(xt(t)));if(0>this.X(D0)&&0>t.X(D0))return Jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,pu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,pu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,pu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,pu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ae(n,0)};function pu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qo(t,e){this.g=t,this.h=e}function Oc(t,e){if(vr(e))throw Error("division by zero");if(vr(t))return new qo(Bs,Bs);if(kn(t))return e=Oc(xt(t),e),new qo(xt(e.g),xt(e.h));if(kn(e))return e=Oc(t,xt(e)),new qo(xt(e.g),e.h);if(30<t.g.length){if(kn(t)||kn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zp,r=e;0>=r.X(t);)n=O0(n),r=O0(r);var i=ms(n,1),s=ms(r,1);for(r=ms(r,2),n=ms(n,2);!vr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ms(r,1),n=ms(n,1)}return e=Dc(t,i.R(e)),new qo(i,e)}for(i=Bs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jn(n),o=s.R(e);kn(o)||0<o.X(t);)n-=r,s=Jn(n),o=s.R(e);vr(s)&&(s=zp),i=i.add(s),t=Dc(t,o)}return new qo(i,t)}U.gb=function(t){return Oc(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ae(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ae(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ae(n,this.h^t.h)};function O0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ae(n,t.h)}function ms(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ae(i,t.h)}Nc.prototype.createWebChannel=Nc.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Ih.NO_ERROR=0;Ih.TIMEOUT=8;Ih.HTTP_ERROR=6;xS.COMPLETE="complete";AS.EventType=Sl;Sl.OPEN="a";Sl.CLOSE="b";Sl.ERROR="c";Sl.MESSAGE="d";_t.prototype.listen=_t.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;zn.prototype.digest=zn.prototype.l;zn.prototype.reset=zn.prototype.reset;zn.prototype.update=zn.prototype.j;Ae.prototype.add=Ae.prototype.add;Ae.prototype.multiply=Ae.prototype.R;Ae.prototype.modulo=Ae.prototype.gb;Ae.prototype.compare=Ae.prototype.X;Ae.prototype.toNumber=Ae.prototype.ea;Ae.prototype.toString=Ae.prototype.toString;Ae.prototype.getBits=Ae.prototype.D;Ae.fromNumber=Jn;Ae.fromString=uT;var RP=function(){return new Nc},bP=function(){return kh()},hf=Ih,PP=xS,NP=us,L0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},DP=kl,mu=AS,OP=Ze,LP=zn,zs=Ae;const M0="@firebase/firestore";/**
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
 */let Eo="9.23.0";/**
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
 */const Ji=new Sg("@firebase/firestore");function $0(){return Ji.logLevel}function q(t,...e){if(Ji.logLevel<=Se.DEBUG){const n=e.map(Kg);Ji.debug(`Firestore (${Eo}): ${t}`,...n)}}function br(t,...e){if(Ji.logLevel<=Se.ERROR){const n=e.map(Kg);Ji.error(`Firestore (${Eo}): ${t}`,...n)}}function no(t,...e){if(Ji.logLevel<=Se.WARN){const n=e.map(Kg);Ji.warn(`Firestore (${Eo}): ${t}`,...n)}}function Kg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+t;throw br(e),new Error(e)}function ze(t,e){t||ee()}function ue(t,e){return t}/**
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
 */let cT=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},MP=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}},$P=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},FP=class{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string"),new cT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new Lt(e)}},UP=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},jP=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new UP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},BP=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},zP=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.T=n.token,new BP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
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
 */function VP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=VP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Ja{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new je(n)}static emptyPath(){return new je([])}}const HP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends Ja{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return HP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(je.fromString(e))}static fromName(e){return new Y(je.fromString(e).popFirst(5))}static empty(){return new Y(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new je(e.slice()))}}function qP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new vi(i,Y.empty(),e)}function WP(t){return new vi(t.readTime,t.key,-1)}class vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vi(oe.min(),Y.empty(),-1)}static max(){return new vi(oe.max(),Y.empty(),-1)}}function KP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const GP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Al(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==GP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Rl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Gg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Gg.ct=-1;function Oh(t){return t==null}function Lc(t){return t===0&&1/t==-1/0}function YP(t){return typeof t=="number"&&Number.isInteger(t)&&!Lc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function F0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ut=class Vp{constructor(e,n){this.comparator=e,this.root=n||di.EMPTY}insert(e,n){return new Vp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,di.BLACK,null,null))}remove(e){return new Vp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,di.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}};class gu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}let di=class fr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fr.RED,this.left=i??fr.EMPTY,this.right=s??fr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new fr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return fr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}};di.EMPTY=null,di.RED=!0,di.BLACK=!1;di.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,i){return this}insert(t,e,n){return new di(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */let fn=class Hp{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Hp)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Hp(this.comparator);return n.data=e,n}},U0=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
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
 */let Zn=class qp{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new qp([])}unionWith(e){let n=new fn(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qp(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
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
 */class fT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */let gn=class Wp{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fT("Invalid base64 string: "+i):i}}(e);return new Wp(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Wp(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};gn.EMPTY_BYTE_STRING=new gn("");const XP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(ze(!!t),typeof t=="string"){let e=0;const n=XP.exec(t);if(ze(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zi(t){return typeof t=="string"?gn.fromBase64String(t):gn.fromUint8Array(t)}/**
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
 */function Qg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yg(t){const e=t.mapValue.fields.__previous_value__;return Qg(e)?Yg(e):e}function Za(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class JP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class el{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new el("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof el&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qg(t)?4:ZP(t)?9007199254740991:10:ee()}function lr(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Za(t).isEqual(Za(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wi(r.timestampValue),o=wi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zi(r.bytesValue).isEqual(Zi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ot(r.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(r.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ot(r.integerValue)===ot(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ot(r.doubleValue),o=ot(i.doubleValue);return s===o?Lc(s)===Lc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ro(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(F0(s)!==F0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!lr(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function tl(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ot(i.integerValue||i.doubleValue),a=ot(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(Za(t),Za(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zi(i),a=Zi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Te(o[l],a[l]);if(u!==0)return u}return Te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Te(ot(i.latitude),ot(s.latitude));return o!==0?o:Te(ot(i.longitude),ot(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=io(o[l],a[l]);if(u)return u}return Te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===yu.mapValue&&s===yu.mapValue)return 0;if(i===yu.mapValue)return 1;if(s===yu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Te(a[c],u[c]);if(h!==0)return h;const d=io(o[a[c]],l[u[c]]);if(d!==0)return d}return Te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=wi(t),r=wi(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function so(t){return Kp(t)}function Kp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kp(r.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,n}function B0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gp(t){return!!t&&"integerValue"in t}function Xg(t){return!!t&&"arrayValue"in t}function z0(t){return!!t&&"nullValue"in t}function V0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uu(t){return!!t&&"mapValue"in t}function va(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=va(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=va(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(n)}setAll(e){let n=Ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=va(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nn(va(this.value))}}function pT(t){const e=[];return cs(t.fields,(n,r)=>{const i=new Ft([n]);if(Uu(r)){const s=pT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zn(e)}/**
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
 */class $t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,oe.min(),oe.min(),oe.min(),nn.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,oe.min(),oe.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,oe.min(),oe.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mc{constructor(e,n){this.position=e,this.inclusive=n}}function H0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function q0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function eN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mT{}class lt extends mT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nN(e,n,r):n==="array-contains"?new sN(e,r):n==="in"?new oN(e,r):n==="not-in"?new aN(e,r):n==="array-contains-any"?new lN(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rN(e,r):new iN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(io(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vn extends mT{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Vn(e,n)}matches(e){return gT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function gT(t){return t.op==="and"}function yT(t){return tN(t)&&gT(t)}function tN(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Qp(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+so(t.value);if(yT(t))return t.filters.map(e=>Qp(e)).join(",");{const e=t.filters.map(n=>Qp(n)).join(",");return`${t.op}(${e})`}}function vT(t,e){return t instanceof lt?function(n,r){return r instanceof lt&&n.op===r.op&&n.field.isEqual(r.field)&&lr(n.value,r.value)}(t,e):t instanceof Vn?function(n,r){return r instanceof Vn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&vT(s,r.filters[o]),!0):!1}(t,e):void ee()}function wT(t){return t instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${so(e.value)}`}(t):t instanceof Vn?function(e){return e.op.toString()+" {"+e.getFilters().map(wT).join(" ,")+"}"}(t):"Filter"}class nN extends lt{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class rN extends lt{constructor(e,n){super(e,"in",n),this.keys=ET("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iN extends lt{constructor(e,n){super(e,"not-in",n),this.keys=ET("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ET(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class sN extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xg(n)&&tl(n.arrayValue,this.value)}}class oN extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tl(this.value.arrayValue,n)}}class aN extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tl(this.value.arrayValue,n)}}class lN extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tl(this.value.arrayValue,r))}}/**
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
 */class uN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function W0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uN(t,e,n,r,i,s,o)}function Jg(t){const e=ue(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),e.dt=n}return e.dt}function Zg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!q0(t.startAt,e.startAt)&&q0(t.endAt,e.endAt)}function Yp(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class bl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function cN(t,e,n,r,i,s,o,a){return new bl(t,e,n,r,i,s,o,a)}function Lh(t){return new bl(t)}function K0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _T(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ey(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ST(t){return t.collectionGroup!==null}function Vs(t){const e=ue(t);if(e.wt===null){e.wt=[];const n=ey(e),r=_T(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new wa(n)),e.wt.push(new wa(Ft.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new wa(Ft.keyField(),s))}}}return e.wt}function Pr(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=W0(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Vs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new wa(s.field,o))}const r=e.endAt?new Mc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Mc(e.startAt.position,e.startAt.inclusive):null;e._t=W0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Xp(t,e){e.getFirstInequalityField(),ey(t);const n=t.filters.concat([e]);return new bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jp(t,e,n){return new bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mh(t,e){return Zg(Pr(t),Pr(e))&&t.limitType===e.limitType}function TT(t){return`${Jg(Pr(t))}|lt:${t.limitType}`}function Zp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>wT(r)).join(", ")}]`),Oh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),`Target(${n})`}(Pr(t))}; limitType=${t.limitType})`}function $h(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Vs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=H0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Vs(n),r)||n.endAt&&!function(i,s,o){const a=H0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Vs(n),r))}(t,e)}function hN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CT(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const s=dN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dN(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?io(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class _o{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dT(this.inner)}size(){return this.innerSize}}/**
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
 */const fN=new ut(Y.comparator);function Nr(){return fN}const kT=new ut(Y.comparator);function sa(...t){let e=kT;for(const n of t)e=e.insert(n.key,n);return e}function IT(t){let e=kT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $i(){return Ea()}function xT(){return Ea()}function Ea(){return new _o(t=>t.toString(),(t,e)=>t.isEqual(e))}const pN=new ut(Y.comparator),mN=new fn(Y.comparator);function fe(...t){let e=mN;for(const n of t)e=e.add(n);return e}const gN=new fn(Te);function yN(){return gN}/**
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
 */function AT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(e)?"-0":e}}function RT(t){return{integerValue:""+t}}function vN(t,e){return YP(e)?RT(e):AT(t,e)}/**
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
 */class Fh{constructor(){this._=void 0}}function wN(t,e,n){return t instanceof $c?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Qg(i)&&(i=Yg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof nl?PT(t,e):t instanceof rl?NT(t,e):function(r,i){const s=bT(r,i),o=G0(s)+G0(r.gt);return Gp(s)&&Gp(r.gt)?RT(o):AT(r.serializer,o)}(t,e)}function EN(t,e,n){return t instanceof nl?PT(t,e):t instanceof rl?NT(t,e):n}function bT(t,e){return t instanceof Fc?Gp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class $c extends Fh{}class nl extends Fh{constructor(e){super(),this.elements=e}}function PT(t,e){const n=DT(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class rl extends Fh{constructor(e){super(),this.elements=e}}function NT(t,e){let n=DT(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class Fc extends Fh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function G0(t){return ot(t.integerValue||t.doubleValue)}function DT(t){return Xg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _N(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof nl&&r instanceof nl||n instanceof rl&&r instanceof rl?ro(n.elements,r.elements,lr):n instanceof Fc&&r instanceof Fc?lr(n.gt,r.gt):n instanceof $c&&r instanceof $c}(t.transform,e.transform)}class SN{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uh{}function OT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ty(t.key,An.none()):new Pl(t.key,t.data,An.none());{const n=t.data,r=nn.empty();let i=new fn(Ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new Zn(i.toArray()),An.none())}}function TN(t,e,n){t instanceof Pl?function(r,i,s){const o=r.value.clone(),a=Y0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(r,i,s){if(!ju(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Y0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(LT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n,r){return t instanceof Pl?function(i,s,o,a){if(!ju(i.precondition,s))return o;const l=i.value.clone(),u=X0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(i,s,o,a){if(!ju(i.precondition,s))return o;const l=X0(i.fieldTransforms,a,s),u=s.data;return u.setAll(LT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ju(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function CN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bT(r.transform,i||null);s!=null&&(n===null&&(n=nn.empty()),n.set(r.field,s))}return n||null}function Q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ro(n,r,(i,s)=>_N(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pl extends Uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends Uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Y0(t,e,n){const r=new Map;ze(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EN(o,a,n[i]))}return r}function X0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wN(s,o,e))}return r}class ty extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kN extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=OT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,r)=>Q0(n,r))&&ro(this.baseMutations,e.baseMutations,(n,r)=>Q0(n,r))}}class ny{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ze(e.mutations.length===r.length);let i=pN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ny(e,n,r,i)}}/**
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
 */class xN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,ge;function RN(t){switch(t){default:return ee();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function MT(t){if(t===void 0)return br("GRPC error has no .code"),A.UNKNOWN;switch(t){case it.OK:return A.OK;case it.CANCELLED:return A.CANCELLED;case it.UNKNOWN:return A.UNKNOWN;case it.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case it.INTERNAL:return A.INTERNAL;case it.UNAVAILABLE:return A.UNAVAILABLE;case it.UNAUTHENTICATED:return A.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case it.NOT_FOUND:return A.NOT_FOUND;case it.ALREADY_EXISTS:return A.ALREADY_EXISTS;case it.PERMISSION_DENIED:return A.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case it.ABORTED:return A.ABORTED;case it.OUT_OF_RANGE:return A.OUT_OF_RANGE;case it.UNIMPLEMENTED:return A.UNIMPLEMENTED;case it.DATA_LOSS:return A.DATA_LOSS;default:return ee()}}(ge=it||(it={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ry{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vu}static getOrCreateInstance(){return vu===null&&(vu=new ry),vu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let vu=null;/**
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
 */function bN(){return new TextEncoder}/**
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
 */const PN=new zs([4294967295,4294967295],0);function J0(t){const e=bN().encode(t),n=new LP;return n.update(e),new Uint8Array(n.digest())}function Z0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zs([n,r],0),new zs([i,s],0)]}class iy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oa(`Invalid padding: ${n}`);if(r<0)throw new oa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=zs.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(zs.fromNumber(r)));return i.compare(PN)===1&&(i=new zs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=J0(e),[r,i]=Z0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new iy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=J0(e),[r,i]=Z0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jh(oe.min(),i,new ut(Te),Nr(),fe())}}class Nl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nl(r,n,fe(),fe(),fe())}}/**
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
 */class Bu{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class $T{constructor(e,n){this.targetId=e,this.Vt=n}}class FT{constructor(e,n,r=gn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ew{constructor(){this.St=0,this.Dt=nw(),this.Ct=gn.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=fe(),n=fe(),r=fe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Nl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=nw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class NN{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Nr(),this.zt=tw(),this.Wt=new ut(Te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Yp(o))if(i===0){const a=new Y(o.path);this.Yt(r,a,$t.newNoDocument(a,oe.min()))}else ze(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=ry.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,m,y,E,g;const f={localCacheCount:c,existenceFilterCount:h.count},w=h.unchangedNames;return w&&(f.bloomFilter={applied:u===0,hashCount:(d=w==null?void 0:w.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(m=(p=w==null?void 0:w.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&y!==void 0?y:0,padding:(g=(E=w==null?void 0:w.bits)===null||E===void 0?void 0:E.padding)!==null&&g!==void 0?g:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Zi(s).toUint8Array()}catch(c){if(c instanceof fT)return no("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new iy(l,o,a)}catch(c){return no(c instanceof oa?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Yp(a.target)){const l=new Y(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,$t.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=fe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new jh(e,n,this.Wt,this.jt,r);return this.jt=Nr(),this.zt=tw(),this.Wt=new ut(Te),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ew,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new fn(Te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ew),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function tw(){return new ut(Y.comparator)}function nw(){return new ut(Y.comparator)}const DN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ON=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LN=(()=>({and:"AND",or:"OR"}))();class MN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function em(t,e){return t.useProto3Json||Oh(e)?e:{value:e}}function Uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $N(t,e){return Uc(t,e.toTimestamp())}function sr(t){return ze(!!t),oe.fromTimestamp(function(e){const n=wi(e);return new mt(n.seconds,n.nanos)}(t))}function sy(t,e){return function(n){return new je(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jT(t){const e=je.fromString(t);return ze(HT(e)),e}function tm(t,e){return sy(t.databaseId,e.path)}function df(t,e){const n=jT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(BT(n))}function nm(t,e){return sy(t.databaseId,e)}function FN(t){const e=jT(t);return e.length===4?je.emptyPath():BT(e)}function rm(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BT(t){return ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rw(t,e,n){return{name:tm(t,e),fields:n.value.mapValue.fields}}function UN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ze(u===void 0||typeof u=="string"),gn.fromBase64String(u||"")):(ze(u===void 0||u instanceof Uint8Array),gn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:MT(l.code);return new z(u,l.message||"")}(o);n=new FT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=df(t,r.document.name),s=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):oe.min(),a=new nn({mapValue:{fields:r.document.fields}}),l=$t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Bu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=df(t,r.document),s=r.readTime?sr(r.readTime):oe.min(),o=$t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Bu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=df(t,r.document),s=r.removedTargetIds||[];n=new Bu([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new AN(i,s),a=r.targetId;n=new $T(a,o)}}return n}function jN(t,e){let n;if(e instanceof Pl)n={update:rw(t,e.key,e.value)};else if(e instanceof ty)n={delete:tm(t,e.key)};else if(e instanceof xi)n={update:rw(t,e.key,e.data),updateMask:QN(e.fieldMask)};else{if(!(e instanceof kN))return ee();n={verify:tm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof $c)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof nl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fc)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:$N(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function BN(t,e){return t&&t.length>0?(ze(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?sr(r.updateTime):sr(i);return s.isEqual(oe.min())&&(s=sr(i)),new SN(s,r.transformResults||[])}(n,e))):[]}function zN(t,e){return{documents:[nm(t,e.path)]}}function VN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=nm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return VT(Vn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:gs(c.field),direction:WN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=em(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function HN(t){let e=FN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ze(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=zT(c);return h instanceof Vn&&yT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new wa(ys(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Oh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Mc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Mc(d,h)}(n.endAt)),cN(e,i,o,s,a,"F",l,u)}function qN(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ys(e.unaryFilter.field);return lt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ys(e.unaryFilter.field);return lt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ys(e.unaryFilter.field);return lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ys(e.unaryFilter.field);return lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(e){return lt.create(ys(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Vn.create(e.compositeFilter.filters.map(n=>zT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ee()}}(e.compositeFilter.op))}(t):ee()}function WN(t){return DN[t]}function KN(t){return ON[t]}function GN(t){return LN[t]}function gs(t){return{fieldPath:t.canonicalString()}}function ys(t){return Ft.fromServerFormat(t.fieldPath)}function VT(t){return t instanceof lt?function(e){if(e.op==="=="){if(V0(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NAN"}};if(z0(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(V0(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NOT_NAN"}};if(z0(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(e.field),op:KN(e.op),value:e.value}}}(t):t instanceof Vn?function(e){const n=e.getFilters().map(r=>VT(r));return n.length===1?n[0]:{compositeFilter:{op:GN(e.op),filters:n}}}(t):ee()}function QN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class YN{constructor(e){this.fe=e}}function XN(t){const e=HN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jp(e,e.limit,"L"):e}/**
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
 */class JN{constructor(){this.rn=new ZN}addToCollectionParentIndex(e,n){return this.rn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(vi.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class ZN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new fn(je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fn(je.comparator)).toArray()}}/**
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
 */class oo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new oo(0)}static Mn(){return new oo(-1)}}/**
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
 */class eD{constructor(){this.changes=new _o(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class nD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_a(r.mutation,i,Zn.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=$i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=sa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nr();const o=Ea(),a=Ea();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof xi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),_a(c.mutation,u,c.mutation.getFieldMask(),mt.now())):o.set(u.key,Zn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new tD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ea();let i=new ut((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Zn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=xT();c.forEach(d=>{if(!s.has(d)){const p=OT(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ST(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve($i());let a=-1,l=s;return o.next(u=>O.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?O.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,fe())).next(c=>({batchId:a,changes:IT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=sa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=sa();return this.indexManager.getCollectionParents(e,i).next(o=>O.forEach(o,a=>{const l=function(u,c){return new bl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,$t.newInvalidDocument(u)))});let o=sa();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&_a(u.mutation,l,Zn.empty(),mt.now()),$h(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class rD{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return O.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:sr(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:XN(r.bundledQuery),readTime:sr(r.readTime)}}(n)),O.resolve()}}/**
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
 */class iD{constructor(){this.overlays=new ut(Y.comparator),this.ls=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$i();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=$i(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$i(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=$i(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return O.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xN(n,r));let s=this.ls.get(n);s===void 0&&(s=fe(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class oy{constructor(){this.fs=new fn(vt.ds),this.ws=new fn(vt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new vt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new vt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new Y(new je([])),r=new vt(n,e),i=new vt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new Y(new je([])),r=new vt(n,e),i=new vt(n,e+1);let s=fe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new vt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return Y.comparator(e.key,n.key)||Te(e.As,n.As)}static _s(e,n){return Te(e.As,n.As)||Y.comparator(e.key,n.key)}}/**
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
 */class sD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new fn(vt.ds)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fn(Te);return n.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),O.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new vt(new Y(s),0);let a=new fn(Te);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),O.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ze(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return O.forEach(n.mutations,i=>{const s=new vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new vt(n,0),i=this.Rs.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oD{constructor(e){this.Ds=e,this.docs=new ut(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$t.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||KP(WP(c),r)<=0||(i.has(c.key)||$h(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Cs(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aD(this)}getSize(e){return O.resolve(this.size)}}class aD extends eD{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class lD{constructor(e){this.persistence=e,this.xs=new _o(n=>Jg(n),Zg),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Ns=0,this.ks=new oy,this.targetCount=0,this.Ms=oo.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),O.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new oo(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Fn(n),O.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.ks.containsKey(n))}}/**
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
 */class uD{constructor(e,n){this.$s={},this.overlays={},this.Os=new Gg(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new lD(this),this.indexManager=new JN,this.remoteDocumentCache=function(r){return new oD(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new YN(n),this.qs=new rD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new sD(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new cD(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return O.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class cD extends QP{constructor(e){super(),this.currentSequenceNumber=e}}class ay{constructor(e){this.persistence=e,this.Qs=new oy,this.js=null}static zs(e){return new ay(e)}get Ws(){if(this.js)return this.js;throw ee()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),O.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Ws,r=>{const i=Y.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return O.or([()=>O.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class ly{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ly(e,n.fromCache,r,i)}}/**
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
 */class hD{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(K0(n))return O.resolve(null);let r=Pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jp(n,null,"F"),r=Pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Jp(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return K0(n)||i.isEqual(oe.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):($0()<=Se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zp(n)),this.Wi(e,o,n,qP(i,-1)))})}ji(e,n){let r=new fn(CT(e));return n.forEach((i,s)=>{$h(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return $0()<=Se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Zp(n)),this.Ui.getDocumentsMatchingQuery(e,n,vi.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class dD{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ut(Te),this.Yi=new _o(s=>Jg(s),Zg),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nD(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function fD(t,e,n,r){return new dD(t,e,n,r)}async function qT(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function pD(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=O.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const y=l.docVersions.get(p);ze(y!==null),m.version.compareTo(y)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=fe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function WT(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function mD(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(gn.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(m,y,E){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,c)&&a.push(n.Bs.updateTargetData(s,p))});let l=Nr(),u=fe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(gD(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(oe.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function gD(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function yD(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vD(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new ei(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function im(t,e,n){const r=ue(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rl(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function iw(t,e,n){const r=ue(t);let i=oe.min(),s=fe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ue(a),h=c.Yi.get(u);return h!==void 0?O.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:fe())).next(a=>(wD(r,hN(e),a),{documents:a,ir:s})))}function wD(t,e,n){let r=t.Xi.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class sw{constructor(){this.activeTargetIds=yN()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ED{constructor(){this.Hr=new sw,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new sw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _D{Yr(e){}shutdown(){}}/**
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
 */class ow{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wu=null;function ff(){return wu===null?wu=268435456+Math.round(2147483648*Math.random()):wu++,"0x"+wu.toString(16)}/**
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
 */const SD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class TD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ot="WebChannelConnection";class CD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=ff(),a=this.To(e,n);q("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(q("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw no("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Eo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=SD[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=ff();return new Promise((o,a)=>{const l=new OP;l.setWithCredentials(!0),l.listenOnce(PP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hf.NO_ERROR:const c=l.getResponseJson();q(Ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case hf.TIMEOUT:q(Ot,`RPC '${e}' ${s} timed out`),a(new z(A.DEADLINE_EXCEEDED,"Request time out"));break;case hf.HTTP_ERROR:const h=l.getStatus();if(q(Ot,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(E)>=0?E:A.UNKNOWN}(p.status);a(new z(m,p.message))}else a(new z(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(A.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{q(Ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);q(Ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=ff(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RP(),a=bP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new DP({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");q(Ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const m=new TD({ro:E=>{p?q(Ot,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(q(Ot,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),q(Ot,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),y=(E,g,f)=>{E.listen(g,w=>{try{f(w)}catch(v){setTimeout(()=>{throw v},0)}})};return y(h,mu.EventType.OPEN,()=>{p||q(Ot,`RPC '${e}' stream ${i} transport opened.`)}),y(h,mu.EventType.CLOSE,()=>{p||(p=!0,q(Ot,`RPC '${e}' stream ${i} transport closed`),m.wo())}),y(h,mu.EventType.ERROR,E=>{p||(p=!0,no(Ot,`RPC '${e}' stream ${i} transport errored:`,E),m.wo(new z(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,mu.EventType.MESSAGE,E=>{var g;if(!p){const f=E.data[0];ze(!!f);const w=f,v=w.error||((g=w[0])===null||g===void 0?void 0:g.error);if(v){q(Ot,`RPC '${e}' stream ${i} received error:`,v);const C=v.status;let R=function(L){const G=it[L];if(G!==void 0)return MT(G)}(C),b=v.message;R===void 0&&(R=A.INTERNAL,b="Unknown error status: "+C+" with message "+v.message),p=!0,m.wo(new z(R,b)),h.close()}else q(Ot,`RPC '${e}' stream ${i} received:`,f),m._o(f)}}),y(a,NP.STAT_EVENT,E=>{E.stat===L0.PROXY?q(Ot,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===L0.NOPROXY&&q(Ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}function pf(){return typeof document<"u"?document:null}/**
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
 */function Bh(t){return new MN(t,!0)}/**
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
 */class KT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class GT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new KT(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new z(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kD extends GT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=UN(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?oe.min():s.readTime?sr(s.readTime):oe.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=rm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Yp(a)?{documents:zN(i,a)}:{query:VN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=UT(i,s.resumeToken);const l=em(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(oe.min())>0){o.readTime=Uc(i,s.snapshotVersion.toTimestamp());const l=em(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=qN(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=rm(this.serializer),n.removeTarget=e,this.Wo(n)}}class ID extends GT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=BN(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.cu(r,n)}return ze(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=rm(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jN(this.serializer,r))};this.Wo(n)}}/**
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
 */class xD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(A.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(A.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class AD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class RD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{hs(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.vu.add(4),await Dl(l),l.bu.set("Unknown"),l.vu.delete(4),await zh(l)}(this))})}),this.bu=new AD(r,i)}}async function zh(t){if(hs(t))for(const e of t.Ru)await e(!0)}async function Dl(t){for(const e of t.Ru)await e(!1)}function QT(t,e){const n=ue(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),hy(n)?cy(n):So(n).Ko()&&uy(n,e))}function YT(t,e){const n=ue(t),r=So(n);n.Au.delete(e),r.Ko()&&XT(n,e),n.Au.size===0&&(r.Ko()?r.jo():hs(n)&&n.bu.set("Unknown"))}function uy(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(t).su(e)}function XT(t,e){t.Vu.qt(e),So(t).iu(e)}function cy(t){t.Vu=new NN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),So(t).start(),t.bu.gu()}function hy(t){return hs(t)&&!So(t).Uo()&&t.Au.size>0}function hs(t){return ue(t).vu.size===0}function JT(t){t.Vu=void 0}async function bD(t){t.Au.forEach((e,n)=>{uy(t,e)})}async function PD(t,e){JT(t),hy(t)?(t.bu.Iu(e),cy(t)):t.bu.set("Unknown")}async function ND(t,e,n){if(t.bu.set("Online"),e instanceof FT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jc(t,r)}else if(e instanceof Bu?t.Vu.Ht(e):e instanceof $T?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(oe.min()))try{const r=await WT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(gn.EMPTY_BYTE_STRING,u.snapshotVersion)),XT(i,a);const c=new ei(u.target,a,l,u.sequenceNumber);uy(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await jc(t,r)}}async function jc(t,e,n){if(!Rl(e))throw e;t.vu.add(1),await Dl(t),t.bu.set("Offline"),n||(n=()=>WT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await zh(t)})}function ZT(t,e){return e().catch(n=>jc(t,n,e))}async function Vh(t){const e=ue(t),n=Ei(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;DD(e);)try{const i=await yD(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,OD(e,i)}catch(i){await jc(e,i)}eC(e)&&tC(e)}function DD(t){return hs(t)&&t.Eu.length<10}function OD(t,e){t.Eu.push(e);const n=Ei(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function eC(t){return hs(t)&&!Ei(t).Uo()&&t.Eu.length>0}function tC(t){Ei(t).start()}async function LD(t){Ei(t).hu()}async function MD(t){const e=Ei(t);for(const n of t.Eu)e.uu(n.mutations)}async function $D(t,e,n){const r=t.Eu.shift(),i=ny.from(r,e,n);await ZT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vh(t)}async function FD(t,e){e&&Ei(t).ou&&await async function(n,r){if(i=r.code,RN(i)&&i!==A.ABORTED){const s=n.Eu.shift();Ei(n).Qo(),await ZT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Vh(n)}var i}(t,e),eC(t)&&tC(t)}async function aw(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=hs(n);n.vu.add(3),await Dl(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await zh(n)}async function UD(t,e){const n=ue(t);e?(n.vu.delete(2),await zh(n)):e||(n.vu.add(2),await Dl(n),n.bu.set("Unknown"))}function So(t){return t.Su||(t.Su=function(e,n,r){const i=ue(e);return i.fu(),new kD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:bD.bind(null,t),ao:PD.bind(null,t),nu:ND.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),hy(t)?cy(t):t.bu.set("Unknown")):(await t.Su.stop(),JT(t))})),t.Su}function Ei(t){return t.Du||(t.Du=function(e,n,r){const i=ue(e);return i.fu(),new ID(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:LD.bind(null,t),ao:FD.bind(null,t),au:MD.bind(null,t),cu:$D.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Vh(t)):(await t.Du.stop(),t.Eu.length>0&&(q("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class dy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new dy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fy(t,e){if(br("AsyncQueue",`${e}: ${t}`),Rl(t))return new z(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=sa(),this.sortedSet=new ut(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class lw{constructor(){this.Cu=new ut(Y.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):ee():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ao{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ao(e,n,Hs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jD{constructor(){this.Nu=void 0,this.listeners=[]}}class BD{constructor(){this.queries=new _o(e=>TT(e),Mh),this.onlineState="Unknown",this.ku=new Set}}async function nC(t,e){const n=ue(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jD),i)try{s.Nu=await n.onListen(r)}catch(o){const a=fy(o,`Initialization of query '${Zp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&py(n)}async function rC(t,e){const n=ue(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zD(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&py(n)}function VD(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function py(t){t.ku.forEach(e=>{e.next()})}class iC{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class sC{constructor(e){this.key=e}}class oC{constructor(e){this.key=e}}class HD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=fe(),this.mutatedKeys=fe(),this.tc=CT(e),this.ec=new Hs(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new lw,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=$h(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?m!==y&&(r.track({type:3,doc:p}),E=!0):this.rc(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.tc(p,l)>0||u&&this.tc(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return p(h)-p(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new ao(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new lw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=fe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new oC(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new sC(r))}),n}hc(e){this.Yu=e.ir,this.Zu=fe();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ao.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class qD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WD{constructor(e){this.key=e,this.fc=!1}}class KD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new _o(a=>TT(a),Mh),this._c=new Map,this.mc=new Set,this.gc=new ut(Y.comparator),this.yc=new Map,this.Ic=new oy,this.Tc={},this.Ec=new Map,this.Ac=oo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function GD(t,e){const n=iO(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await vD(n.localStore,Pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await QD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&QT(n.remoteStore,o)}return i}async function QD(t,e,n,r,i){t.Rc=(h,d,p)=>async function(m,y,E,g){let f=y.view.sc(E);f.zi&&(f=await iw(m.localStore,y.query,!1).then(({documents:C})=>y.view.sc(C,f)));const w=g&&g.targetChanges.get(y.targetId),v=y.view.applyChanges(f,m.isPrimaryClient,w);return cw(m,y.targetId,v.cc),v.snapshot}(t,h,d,p);const s=await iw(t.localStore,e,!0),o=new HD(e,s.ir),a=o.sc(s.documents),l=Nl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);cw(t,n,u.cc);const c=new qD(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function YD(t,e){const n=ue(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Mh(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await im(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),YT(n.remoteStore,r.targetId),sm(n,r.targetId)}).catch(Al)):(sm(n,r.targetId),await im(n.localStore,r.targetId,!0))}async function XD(t,e,n){const r=sO(t);try{const i=await function(s,o){const a=ue(s),l=mt.now(),u=o.reduce((d,p)=>d.add(p.key),fe());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Nr(),m=fe();return a.Zi.getEntries(d,u).next(y=>{p=y,p.forEach((E,g)=>{g.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{c=y;const E=[];for(const g of o){const f=CN(g,c.get(g.key).overlayedDocument);f!=null&&E.push(new xi(g.key,f,pT(f.value.mapValue),An.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(y=>{h=y;const E=y.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,E)})}).then(()=>({batchId:h.batchId,changes:IT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ut(Te)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ol(r,i.changes),await Vh(r.remoteStore)}catch(i){const s=fy(i,"Failed to persist write");n.reject(s)}}async function aC(t,e){const n=ue(t);try{const r=await mD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ze(o.fc):i.removedDocuments.size>0&&(ze(o.fc),o.fc=!1))}),await Ol(n,r,e)}catch(r){await Al(r)}}function uw(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ue(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&py(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JD(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ut(Y.comparator);o=o.insert(s,$t.newNoDocument(s,oe.min()));const a=fe().add(s),l=new jh(oe.min(),new Map,new ut(Te),o,a);await aC(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),my(r)}else await im(r.localStore,e,!1).then(()=>sm(r,e,n)).catch(Al)}async function ZD(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await pD(n.localStore,e);uC(n,r,null),lC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ol(n,i)}catch(i){await Al(i)}}async function eO(t,e,n){const r=ue(t);try{const i=await function(s,o){const a=ue(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ze(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);uC(r,e,n),lC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ol(r,i)}catch(i){await Al(i)}}function lC(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function uC(t,e,n){const r=ue(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function sm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||cC(t,r)})}function cC(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(YT(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),my(t))}function cw(t,e,n){for(const r of n)r instanceof sC?(t.Ic.addReference(r.key,e),tO(t,r)):r instanceof oC?(q("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||cC(t,r.key)):ee()}function tO(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(q("SyncEngine","New document in limbo: "+n),t.mc.add(r),my(t))}function my(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Y(je.fromString(e)),r=t.Ac.next();t.yc.set(r,new WD(n)),t.gc=t.gc.insert(n,r),QT(t.remoteStore,new ei(Pr(Lh(n.path)),r,"TargetPurposeLimboResolution",Gg.ct))}}async function Ol(t,e,n){const r=ue(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ly.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>O.forEach(l,h=>O.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>O.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Rl(c))throw c;q("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,s))}async function nO(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await qT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new z(A.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ol(n,r.er)}}function rO(t,e){const n=ue(t),r=n.yc.get(e);if(r&&r.fc)return fe().add(r.key);{let i=fe();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function iO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JD.bind(null,e),e.dc.nu=zD.bind(null,e.eventManager),e.dc.Pc=VD.bind(null,e.eventManager),e}function sO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eO.bind(null,e),e}class hw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fD(this.persistence,new hD,e.initialUser,this.serializer)}createPersistence(e){return new uD(ay.zs,this.serializer)}createSharedClientState(e){return new ED}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nO.bind(null,this.syncEngine),await UD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BD}createDatastore(e){const n=Bh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new CD(i));var i;return function(s,o,a,l){return new xD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>uw(this.syncEngine,a,0),o=ow.D()?new ow:new _D,new RD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new KD(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);q("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Dl(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class hC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class aO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=hT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mf(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uO(t);q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>aw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>aw(e.remoteStore,s)),t._onlineComponents=e}function lO(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function uO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await mf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lO(n))throw n;no("Error using user provided cache. Falling back to memory cache: "+n),await mf(t,new hw)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await mf(t,new hw);return t._offlineComponents}async function dC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await dw(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await dw(t,new oO))),t._onlineComponents}function cO(t){return dC(t).then(e=>e.syncEngine)}async function om(t){const e=await dC(t),n=e.eventManager;return n.onListen=GD.bind(null,e.syncEngine),n.onUnlisten=YD.bind(null,e.syncEngine),n}function hO(t,e,n={}){const r=new hi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new hC({next:h=>{s.enqueueAndForget(()=>rC(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(A.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new iC(Lh(o.path),u,{includeMetadataChanges:!0,Ku:!0});return nC(i,c)}(await om(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function fC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fw=new Map;/**
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
 */function pC(t,e,n){if(!n)throw new z(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dO(t,e,n,r){if(e===!0&&r===!0)throw new z(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pw(t){if(!Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mw(t){if(Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hh(t);throw new z(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class gw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class qh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new MP;switch(n.type){case"firstParty":return new jP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fw.get(e);n&&(q("ComponentProvider","Removing Datastore"),fw.delete(e),n.terminate())}(this),Promise.resolve()}}function fO(t,e,n,r={}){var i;const s=(t=Rn(t,qh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&no("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Lt.MOCK_USER;else{a=nS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new z(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Lt(u)}t._authCredentials=new $P(new cT(a,l))}}/**
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
 */class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class To{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new To(this.firestore,e,this._query)}}class fi extends To{constructor(e,n,r){super(e,n,Lh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new Y(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function mC(t,e,...n){if(t=rt(t),pC("collection","path",e),t instanceof qh){const r=je.fromString(e,...n);return mw(r),new fi(t,null,r)}{if(!(t instanceof Bt||t instanceof fi))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return mw(r),new fi(t.firestore,null,r)}}function lo(t,e,...n){if(t=rt(t),arguments.length===1&&(e=hT.A()),pC("doc","path",e),t instanceof qh){const r=je.fromString(e,...n);return pw(r),new Bt(t,null,new Y(r))}{if(!(t instanceof Bt||t instanceof fi))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return pw(r),new Bt(t.firestore,t instanceof fi?t.converter:null,new Y(r))}}/**
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
 */class pO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new KT(this,"async_queue_retry"),this.Xc=()=>{const n=pf();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=pf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=pf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new hi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Rl(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw br("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=dy.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&ee()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function yw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class _i extends qh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new pO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gC(this),this._firestoreClient.terminate()}}function mO(t,e){const n=typeof t=="object"?t:Cg(),r=typeof t=="string"?t:e||"(default)",i=vh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Z_("firestore");s&&fO(i,...s)}return i}function gy(t){return t._firestoreClient||gC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gC(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new JP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,fC(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new aO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(gn.fromBase64String(e))}catch(n){throw new z(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new uo(gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yy{constructor(e){this._methodName=e}}/**
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
 */class vy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */const gO=/^__.*__$/;class yO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class yC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class wy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new wy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Bc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(vC(this.ca)&&gO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class vO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bh(e)}ya(e,n,r,i=!1){return new wy({ca:e,methodName:n,ga:r,path:Ft.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kh(t){const e=t._freezeSettings(),n=Bh(t._databaseId);return new vO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wC(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Ey("Data must be an object, but it was:",o,r);const a=EC(r,o);let l,u;if(s.merge)l=new Zn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=am(e,h,n);if(!o.contains(d))throw new z(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SC(c,d)||c.push(d)}l=new Zn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new yO(new nn(a),l,u)}class Gh extends yy{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gh}}function wO(t,e,n,r){const i=t.ya(1,e,n);Ey("Data must be an object, but it was:",i,r);const s=[],o=nn.empty();cs(r,(l,u)=>{const c=_y(e,l,n);u=rt(u);const h=i.da(c);if(u instanceof Gh)s.push(c);else{const d=Ll(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Zn(s);return new yC(o,a,i.fieldTransforms)}function EO(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[am(e,r,n)],l=[i];if(s.length%2!=0)throw new z(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(am(e,s[d])),l.push(s[d+1]);const u=[],c=nn.empty();for(let d=a.length-1;d>=0;--d)if(!SC(u,a[d])){const p=a[d];let m=l[d];m=rt(m);const y=o.da(p);if(m instanceof Gh)u.push(p);else{const E=Ll(m,y);E!=null&&(u.push(p),c.set(p,E))}}const h=new Zn(u);return new yC(c,h,o.fieldTransforms)}function _O(t,e,n,r=!1){return Ll(n,t.ya(r?4:3,e))}function Ll(t,e){if(_C(t=rt(t)))return Ey("Unsupported field value:",e,t),EC(t,e);if(t instanceof yy)return function(n,r){if(!vC(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ll(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vN(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=mt.fromDate(n);return{timestampValue:Uc(r.serializer,i)}}if(n instanceof mt){const i=new mt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uc(r.serializer,i)}}if(n instanceof vy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof uo)return{bytesValue:UT(r.serializer,n._byteString)};if(n instanceof Bt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Hh(n)}`)}(t,e)}function EC(t,e){const n={};return dT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,i)=>{const s=Ll(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _C(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof vy||t instanceof uo||t instanceof Bt||t instanceof yy)}function Ey(t,e,n){if(!_C(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function am(t,e,n){if((e=rt(e))instanceof Wh)return e._internalPath;if(typeof e=="string")return _y(t,e);throw Bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const SO=new RegExp("[~\\*/\\[\\]]");function _y(t,e,n){if(e.search(SO)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wh(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(A.INVALID_ARGUMENT,a+t+l)}function SC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class TC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TO extends TC{data(){return super.data()}}function Sy(t,e){return typeof e=="string"?_y(t,e):e instanceof Wh?e._internalPath:e._delegate._internalPath}/**
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
 */function CO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ty{}class kO extends Ty{}function IO(t,e,...n){let r=[];e instanceof Ty&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Cy).length,o=i.filter(a=>a instanceof Qh).length;if(s>1||s>0&&o>0)throw new z(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Qh extends kO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qh(e,n,r)}_apply(e){const n=this._parse(e);return CC(e._query,n),new To(e.firestore,e.converter,Xp(e._query,n))}_parse(e){const n=Kh(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ww(c,u);const d=[];for(const p of c)d.push(vw(a,i,p));h={arrayValue:{values:d}}}else h=vw(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ww(c,u),h=_O(o,s,c,u==="in"||u==="not-in");return lt.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xO(t,e,n){const r=e,i=Sy("where",t);return Qh._create(i,r,n)}class Cy extends Ty{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)CC(s,a),s=Xp(s,a)}(e._query,n),new To(e.firestore,e.converter,Xp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vw(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new z(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ST(e)&&n.indexOf("/")!==-1)throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!Y.isDocumentKey(r))throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return B0(t,new Y(r))}if(n instanceof Bt)return B0(t,n._key);throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hh(n)}.`)}function ww(t,e){if(!Array.isArray(t)||t.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CC(t,e){if(e.isInequality()){const r=ey(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new z(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=_T(t);s!==null&&AO(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function AO(t,e,n){if(!n.isEqual(e))throw new z(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class RO{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new vy(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const n=wi(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);ze(HT(r));const i=new el(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||br(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function kC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IC extends TC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zu extends IC{data(e={}){return super.data(e)}}class bO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new aa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zu(this._firestore,this._userDataWriter,r.key,r,new aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new zu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new aa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new zu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new aa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:PO(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function NO(t){t=Rn(t,Bt);const e=Rn(t.firestore,_i);return hO(gy(e),t._key).then(n=>AC(e,t,n))}class xC extends RO{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function DO(t,e,n){t=Rn(t,Bt);const r=Rn(t.firestore,_i),i=kC(t.converter,e,n);return Yh(r,[wC(Kh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,An.none())])}function Ew(t,e,n,...r){t=Rn(t,Bt);const i=Rn(t.firestore,_i),s=Kh(i);let o;return o=typeof(e=rt(e))=="string"||e instanceof Wh?EO(s,"updateDoc",t._key,e,n,r):wO(s,"updateDoc",t._key,e),Yh(i,[o.toMutation(t._key,An.exists(!0))])}function OO(t){return Yh(Rn(t.firestore,_i),[new ty(t._key,An.none())])}function LO(t,e){const n=Rn(t.firestore,_i),r=lo(t),i=kC(t.converter,e);return Yh(n,[wC(Kh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,An.exists(!1))]).then(()=>r)}function MO(t,...e){var n,r,i;t=rt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||yw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(yw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Bt)u=Rn(t.firestore,_i),c=Lh(t._key.path),l={next:h=>{e[o]&&e[o](AC(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Rn(t,To);u=Rn(h.firestore,_i),c=h._query;const d=new xC(u);l={next:p=>{e[o]&&e[o](new bO(u,d,h,p))},error:e[o+1],complete:e[o+2]},CO(t._query)}return function(h,d,p,m){const y=new hC(m),E=new iC(d,y,p);return h.asyncQueue.enqueueAndForget(async()=>nC(await om(h),E)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>rC(await om(h),E))}}(gy(u),c,a,l)}function Yh(t,e){return function(n,r){const i=new hi;return n.asyncQueue.enqueueAndForget(async()=>XD(await cO(n),r,i)),i.promise}(gy(t),e)}function AC(t,e,n){const r=n.docs.get(e._key),i=new xC(t);return new IC(t,i,e._key,r,new aa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Eo=n})(ls),Xi(new yi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new _i(new FP(n.getProvider("auth-internal")),new zP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new el(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ir(M0,"3.13.0",t),ir(M0,"3.13.0","esm2017")})();var $O="firebase",FO="9.23.0";/**
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
 */ir($O,FO,"app");function ky(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function RC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UO=RC,bC=new yl("auth","Firebase",RC());/**
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
 */const zc=new Sg("@firebase/auth");function jO(t,...e){zc.logLevel<=Se.WARN&&zc.warn(`Auth (${ls}): ${t}`,...e)}function Vu(t,...e){zc.logLevel<=Se.ERROR&&zc.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function Hn(t,...e){throw Iy(t,...e)}function or(t,...e){return Iy(t,...e)}function BO(t,e,n){const r=Object.assign(Object.assign({},UO()),{[e]:n});return new yl("auth","Firebase",r).create(e,{appName:t.name})}function Iy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bC.create(t,...e)}function Z(t,e,...n){if(!t)throw Iy(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vu(e),new Error(e)}function Dr(t,e){t||wr(e)}/**
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
 */function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zO(){return _w()==="http:"||_w()==="https:"}function _w(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zO()||dR()||"connection"in navigator)?navigator.onLine:!0}function HO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ml{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dr(n>e,"Short delay should be less than long delay!"),this.isMobile=cR()||fR()}get(){return VO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xy(t,e){Dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class PC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const WO=new Ml(3e4,6e4);function Co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ko(t,e,n,r,i={}){return NC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=vl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),PC.fetch()(DC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function NC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qO),e);try{const i=new KO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw BO(t,c,u);Hn(t,c)}}catch(i){if(i instanceof ur)throw i;Hn(t,"network-request-failed",{message:String(i)})}}async function $l(t,e,n,r,i={}){const s=await ko(t,e,n,r,i);return"mfaPendingCredential"in s&&Hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function DC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xy(t.config,i):`${t.config.apiScheme}://${i}`}class KO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(or(this.auth,"network-request-failed")),WO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=or(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function GO(t,e){return ko(t,"POST","/v1/accounts:delete",e)}async function QO(t,e){return ko(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YO(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Ay(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Sa(gf(i.auth_time)),issuedAtTime:Sa(gf(i.iat)),expirationTime:Sa(gf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gf(t){return Number(t)*1e3}function Ay(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=X_(n);return i?JSON.parse(i):(Vu("Failed to decode base64 JWT payload"),null)}catch(i){return Vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XO(t){const e=Ay(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function il(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ur&&JO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class OC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sa(this.lastLoginAt),this.creationTime=Sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await il(t,QO(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?n2(s.providerUserInfo):[],a=t2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new OC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function e2(t){const e=rt(t);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function n2(t){return t.map(e=>{var{providerId:n}=e,r=ky(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function r2(t,e){const n=await NC(t,{},async()=>{const r=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=DC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class sl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await r2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new sl;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sl,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function jr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ky(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new OC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await il(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YO(this,e)}reload(){return e2(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await il(this,GO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:v,isAnonymous:C,providerData:R,stsTokenManager:b}=n;Z(w&&b,e,"internal-error");const L=sl.fromJSON(this.name,b);Z(typeof w=="string",e,"internal-error"),jr(h,e.name),jr(d,e.name),Z(typeof v=="boolean",e,"internal-error"),Z(typeof C=="boolean",e,"internal-error"),jr(p,e.name),jr(m,e.name),jr(y,e.name),jr(E,e.name),jr(g,e.name),jr(f,e.name);const G=new Vi({uid:w,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:C,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:L,createdAt:g,lastLoginAt:f});return R&&Array.isArray(R)&&(G.providerData=R.map(K=>Object.assign({},K))),E&&(G._redirectEventId=E),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new sl;i.updateFromServerResponse(n);const s=new Vi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vc(s),s}}/**
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
 */const Sw=new Map;function Er(t){Dr(t instanceof Function,"Expected a class definition");let e=Sw.get(t);return e?(Dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sw.set(t,e),e)}/**
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
 */class LC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LC.type="NONE";const Tw=LC;/**
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
 */function Hu(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(Er(Tw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Er(Tw);const o=Hu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Vi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new qs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new qs(s,e,r))}}/**
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
 */function Cw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jC(e))return"Blackberry";if(BC(e))return"Webos";if(Ry(e))return"Safari";if((e.includes("chrome/")||$C(e))&&!e.includes("edge/"))return"Chrome";if(UC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function MC(t=Vt()){return/firefox\//i.test(t)}function Ry(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $C(t=Vt()){return/crios\//i.test(t)}function FC(t=Vt()){return/iemobile/i.test(t)}function UC(t=Vt()){return/android/i.test(t)}function jC(t=Vt()){return/blackberry/i.test(t)}function BC(t=Vt()){return/webos/i.test(t)}function Xh(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function i2(t=Vt()){var e;return Xh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s2(){return pR()&&document.documentMode===10}function zC(t=Vt()){return Xh(t)||UC(t)||BC(t)||jC(t)||/windows phone/i.test(t)||FC(t)}function o2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function VC(t,e=[]){let n;switch(t){case"Browser":n=Cw(Vt());break;case"Worker":n=`${Cw(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}async function HC(t,e){return ko(t,"GET","/v2/recaptchaConfig",Co(t,e))}function kw(t){return t!==void 0&&t.enterprise!==void 0}class qC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function a2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=or("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",a2().appendChild(r)})}function l2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const u2="https://www.google.com/recaptcha/enterprise.js?render=",c2="recaptcha-enterprise",h2="NO_RECAPTCHA";class KC{constructor(e){this.type=c2,this.auth=Io(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{HC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;kw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(h2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&kw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}WC(u2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hc(t,e,n,r=!1){const i=new KC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class d2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class f2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iw(this),this.idTokenSubscription=new Iw(this),this.beforeStateQueue=new d2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}async initializeRecaptchaConfig(){const e=await HC(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new qC(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new KC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Io(t){return rt(t)}class Iw{constructor(e){this.auth=e,this.observer=null,this.addObserver=_R(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function p2(t,e){const n=vh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ic(s,e??{}))return i;Hn(i,"already-initialized")}return n.initialize({options:e})}function m2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g2(t,e,n){const r=Io(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=GC(e),{host:o,port:a}=y2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||v2()}function GC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function y2(t){const e=GC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xw(o)}}}function xw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function v2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class by{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function w2(t,e){return ko(t,"POST","/v1/accounts:update",e)}/**
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
 */async function yf(t,e){return $l(t,"POST","/v1/accounts:signInWithPassword",Co(t,e))}/**
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
 */async function E2(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}async function _2(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}/**
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
 */class ol extends by{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ol(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ol(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hc(e,r,"signInWithPassword");return yf(e,i)}else return yf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hc(e,r,"signInWithPassword");return yf(e,s)}else return Promise.reject(i)});case"emailLink":return E2(e,{email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return w2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _2(e,{idToken:n,email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ws(t,e){return $l(t,"POST","/v1/accounts:signInWithIdp",Co(t,e))}/**
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
 */const S2="http://localhost";class ts extends by{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ky(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:S2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vl(n)}return e}}/**
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
 */function T2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function C2(t){const e=ta(na(t)).link,n=e?ta(na(e)).deep_link_id:null,r=ta(na(t)).deep_link_id;return(r?ta(na(r)).link:null)||r||n||e||t}class Py{constructor(e){var n,r,i,s,o,a;const l=ta(na(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=T2((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=C2(e);try{return new Py(n)}catch{return null}}}/**
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
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,n){return ol._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Py.parseLink(n);return Z(r,"argument-error"),ol._fromEmailAndCode(e,r.code,r.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class QC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fl extends QC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends Fl{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends Fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class Qr extends Fl{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends Fl{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function vf(t,e){return $l(t,"POST","/v1/accounts:signUp",Co(t,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vi._fromIdTokenResponse(e,r,i),o=Aw(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Aw(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Aw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qc extends ur{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qc(e,n,r,i)}}function YC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,s,e,r):s})}async function k2(t,e,n=!1){const r=await il(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function I2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await il(t,YC(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Ay(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Hn(r,"user-mismatch"),s}}/**
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
 */async function XC(t,e,n=!1){const r="signIn",i=await YC(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function x2(t,e){return XC(Io(t),e)}async function A2(t,e,n){var r;const i=Io(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Hc(i,s,"signUpPassword");o=vf(i,u)}else o=vf(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Hc(i,s,"signUpPassword");return vf(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await ns._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function R2(t,e,n){return x2(rt(t),xo.credential(e,n))}function b2(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function P2(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}const Wc="__sak";/**
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
 */class JC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function N2(){const t=Vt();return Ry(t)||Xh(t)}const D2=1e3,O2=10;class ZC extends JC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=N2()&&o2(),this.fallbackToPolling=zC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,O2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZC.type="LOCAL";const L2=ZC;/**
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
 */class ek extends JC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ek.type="SESSION";const tk=ek;/**
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
 */function M2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await M2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jh.receivers=[];/**
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
 */function Ny(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ny("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ar(){return window}function F2(t){ar().location.href=t}/**
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
 */function nk(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function U2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function B2(){return nk()?self:null}/**
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
 */const rk="firebaseLocalStorageDb",z2=1,Kc="firebaseLocalStorage",ik="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zh(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function V2(){const t=indexedDB.deleteDatabase(rk);return new Ul(t).toPromise()}function um(){const t=indexedDB.open(rk,z2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kc,{keyPath:ik})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await V2(),e(await um()))})})}async function Rw(t,e,n){const r=Zh(t,!0).put({[ik]:e,value:n});return new Ul(r).toPromise()}async function H2(t,e){const n=Zh(t,!1).get(e),r=await new Ul(n).toPromise();return r===void 0?null:r.value}function bw(t,e){const n=Zh(t,!0).delete(e);return new Ul(n).toPromise()}const q2=800,W2=3;class sk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await um(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>W2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jh._getInstance(B2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U2(),!this.activeServiceWorker)return;this.sender=new $2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await um();return await Rw(e,Wc,"1"),await bw(e,Wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>H2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zh(i,!1).getAll();return new Ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sk.type="LOCAL";const K2=sk;new Ml(3e4,6e4);/**
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
 */function G2(t,e){return e?Er(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dy extends by{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q2(t){return XC(t.auth,new Dy(t),t.bypassAuthState)}function Y2(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),I2(n,new Dy(t),t.bypassAuthState)}async function X2(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),k2(n,new Dy(t),t.bypassAuthState)}/**
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
 */class ok{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q2;case"linkViaPopup":case"linkViaRedirect":return X2;case"reauthViaPopup":case"reauthViaRedirect":return Y2;default:Hn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const J2=new Ml(2e3,1e4);class Ps extends ok{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Ny();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J2.get())};e()}}Ps.currentPopupAction=null;/**
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
 */const Z2="pendingRedirect",qu=new Map;class eL extends ok{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const r=await tL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tL(t,e){const n=iL(e),r=rL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nL(t,e){qu.set(t._key(),e)}function rL(t){return Er(t._redirectPersistence)}function iL(t){return Hu(Z2,t.config.apiKey,t.name)}async function sL(t,e,n=!1){const r=Io(t),i=G2(r,e),o=await new eL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const oL=10*60*1e3;class aL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ak(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(or(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pw(e))}saveEventToCache(e){this.cachedEventUids.add(Pw(e)),this.lastProcessedEventTime=Date.now()}}function Pw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ak({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ak(t);default:return!1}}/**
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
 */async function uL(t,e={}){return ko(t,"GET","/v1/projects",e)}/**
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
 */const cL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hL=/^https?/;async function dL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uL(t);for(const n of e)try{if(fL(n))return}catch{}Hn(t,"unauthorized-domain")}function fL(t){const e=lm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hL.test(n))return!1;if(cL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pL=new Ml(3e4,6e4);function Nw(){const t=ar().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mL(t){return new Promise((e,n)=>{var r,i,s;function o(){Nw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nw(),n(or(t,"network-request-failed"))},timeout:pL.get()})}if(!((i=(r=ar().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ar().gapi)===null||s===void 0)&&s.load)o();else{const a=l2("iframefcb");return ar()[a]=()=>{gapi.load?o():n(or(t,"network-request-failed"))},WC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function gL(t){return Wu=Wu||mL(t),Wu}/**
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
 */const yL=new Ml(5e3,15e3),vL="__/auth/iframe",wL="emulator/auth/iframe",EL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_L=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SL(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xy(e,wL):`https://${t.config.authDomain}/${vL}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=_L.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vl(r).slice(1)}`}async function TL(t){const e=await gL(t),n=ar().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:SL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=or(t,"network-request-failed"),a=ar().setTimeout(()=>{s(o)},yL.get());function l(){ar().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const CL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kL=500,IL=600,xL="_blank",AL="http://localhost";class Dw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RL(t,e,n,r=kL,i=IL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},CL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Vt().toLowerCase();n&&(a=$C(u)?xL:n),MC(u)&&(e=e||AL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(i2(u)&&a!=="_self")return bL(e||"",a),new Dw(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Dw(h)}function bL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const PL="__/auth/handler",NL="emulator/auth/handler",DL=encodeURIComponent("fac");async function Ow(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof QC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ER(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Fl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${DL}=${encodeURIComponent(l)}`:"";return`${OL(t)}?${vl(a).slice(1)}${u}`}function OL({config:t}){return t.emulator?xy(t,NL):`https://${t.authDomain}/${PL}`}/**
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
 */const wf="webStorageSupport";class LL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tk,this._completeRedirectFn=sL,this._overrideRedirectResult=nL}async _openPopup(e,n,r,i){var s;Dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ow(e,n,r,lm(),i);return RL(e,o,Ny())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ow(e,n,r,lm(),i);return F2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TL(e),r=new aL(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wf,{type:wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wf];o!==void 0&&n(!!o),Hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zC()||Ry()||Xh()}}const ML=LL;var Lw="@firebase/auth",Mw="0.23.2";/**
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
 */class $L{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UL(t){Xi(new yi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VC(t)},u=new f2(r,i,s,l);return m2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xi(new yi("auth-internal",e=>{const n=Io(e.getProvider("auth").getImmediate());return(r=>new $L(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Lw,Mw,FL(t)),ir(Lw,Mw,"esm2017")}/**
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
 */const jL=5*60,BL=tS("authIdTokenMaxAge")||jL;let $w=null;const zL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BL)return;const i=n==null?void 0:n.token;$w!==i&&($w=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VL(t=Cg()){const e=vh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p2(t,{popupRedirectResolver:ML,persistence:[K2,L2,tk]}),r=tS("authTokenSyncURL");if(r){const s=zL(r);P2(n,s,()=>s(n.currentUser)),b2(n,o=>s(o))}const i=J_("auth");return i&&g2(n,`http://${i}`),n}UL("Browser");/**
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
 */const lk="firebasestorage.googleapis.com",uk="storageBucket",HL=2*60*1e3,qL=10*60*1e3;/**
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
 */class tt extends ur{constructor(e,n,r=0){super(Ef(e),`Firebase Storage: ${n} (${Ef(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ef(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function Ef(t){return"storage/"+t}function Oy(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function WL(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function KL(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function QL(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YL(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function XL(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JL(){return new tt(et.CANCELED,"User canceled the upload/download.")}function ZL(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function eM(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uk+"' property when initializing the app?")}function nM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rM(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cm(t){return new tt(et.INVALID_ARGUMENT,t)}function ck(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function sM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ta(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Wo(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw eM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===lk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${E}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<w.length;v++){const C=w[v],R=C.regex.exec(e);if(R){const b=R[C.indices.bucket];let L=R[C.indices.path];L||(L=""),r=new hn(b,L),C.postModify(r);break}}if(r==null)throw ZL(e);return r}}class oM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function d(){s&&clearTimeout(s)}function p(E,...g){if(u){d();return}if(E){d(),c.call(null,E,...g);return}if(l()||o){d(),c.call(null,E,...g);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let m=!1;function y(E){m||(m=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function lM(t){t(!1)}/**
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
 */function uM(t){return t!==void 0}function cM(t){return typeof t=="object"&&!Array.isArray(t)}function Ly(t){return typeof t=="string"||t instanceof String}function Fw(t){return My()&&t instanceof Blob}function My(){return typeof Blob<"u"&&!hR()}function Uw(t,e,n,r){if(r<e)throw cm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function $y(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function hk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Hi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hi||(Hi={}));/**
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
 */function hM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class dM{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _u(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Hi.NO_ERROR,l=s.getStatus();if(!a||hM(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Hi.ABORT;r(!1,new _u(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new _u(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Oy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ck():JL();o(l)}else{const l=XL();o(l)}};this.canceled_?n(!1,new _u(!1,null,!0)):this.backoffId_=aM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _u{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yM(t,e,n,r,i,s,o=!0){const a=hk(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return mM(u,e),fM(u,n),pM(u,s),gM(u,r),new dM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function vM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wM(...t){const e=vM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(My())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function EM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _M(t){if(typeof atob>"u")throw iM("base-64");return atob(t)}/**
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
 */const er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _f{constructor(e,n){this.data=e,this.contentType=n||null}}function SM(t,e){switch(t){case er.RAW:return new _f(dk(e));case er.BASE64:case er.BASE64URL:return new _f(fk(t,e));case er.DATA_URL:return new _f(CM(e),kM(e))}throw Oy()}function dk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TM(t){let e;try{e=decodeURIComponent(t)}catch{throw Ta(er.DATA_URL,"Malformed data URL.")}return dk(e)}function fk(t,e){switch(t){case er.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ta(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case er.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ta(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_M(e)}catch(i){throw i.message.includes("polyfill")?i:Ta(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class pk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ta(er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=IM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function CM(t){const e=new pk(t);return e.base64?fk(er.BASE64,e.rest):TM(e.rest)}function kM(t){return new pk(t).contentType}function IM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Xr{constructor(e,n){let r=0,i="";Fw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Fw(this.data_)){const r=this.data_,i=EM(r,e,n);return i===null?null:new Xr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xr(r,!0)}}static getBlob(...e){if(My()){const n=e.map(r=>r instanceof Xr?r.data_:r);return new Xr(wM.apply(null,n))}else{const n=e.map(o=>Ly(o)?SM(er.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Xr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function mk(t){let e;try{e=JSON.parse(t)}catch{return null}return cM(e)?e:null}/**
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
 */function xM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function gk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function RM(t,e){return e}class qt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||RM}}let Su=null;function bM(t){return!Ly(t)||t.length<2?t:gk(t)}function yk(){if(Su)return Su;const t=[];t.push(new qt("bucket")),t.push(new qt("generation")),t.push(new qt("metageneration")),t.push(new qt("name","fullPath",!0));function e(s,o){return bM(o)}const n=new qt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new qt("size");return i.xform=r,t.push(i),t.push(new qt("timeCreated")),t.push(new qt("updated")),t.push(new qt("md5Hash",null,!0)),t.push(new qt("cacheControl",null,!0)),t.push(new qt("contentDisposition",null,!0)),t.push(new qt("contentEncoding",null,!0)),t.push(new qt("contentLanguage",null,!0)),t.push(new qt("contentType",null,!0)),t.push(new qt("metadata","customMetadata",!0)),Su=t,Su}function PM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new hn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function NM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return PM(r,t),r}function vk(t,e,n){const r=mk(e);return r===null?null:NM(t,r,n)}function DM(t,e,n,r){const i=mk(e);if(i===null||!Ly(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=$y(d,n,r),m=hk({alt:"media",token:u});return p+m})[0]}function OM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class wk{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ek(t){if(!t)throw Oy()}function LM(t,e){function n(r,i){const s=vk(t,i,e);return Ek(s!==null),s}return n}function MM(t,e){function n(r,i){const s=vk(t,i,e);return Ek(s!==null),DM(s,i,t.host,t._protocol)}return n}function _k(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=QL():i=GL():n.getStatus()===402?i=KL(t.bucket):n.getStatus()===403?i=YL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $M(t){const e=_k(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=WL(t.path)),s.serverResponse=i.serverResponse,s}return n}function FM(t,e,n){const r=e.fullServerUrl(),i=$y(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new wk(i,s,MM(t,n),o);return a.errorHandler=$M(e),a}function UM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UM(null,e)),r}function BM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let v=0;v<2;v++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=jM(e,r,i),c=OM(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Xr.getBlob(h,r,d);if(p===null)throw nM();const m={name:u.fullPath},y=$y(s,t.host,t._protocol),E="POST",g=t.maxUploadRetryTime,f=new wk(y,E,LM(t,n),g);return f.urlParams=m,f.headers=o,f.body=p.uploadData(),f.errorHandler=_k(e),f}class zM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Wo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VM extends zM{initXhr(){this.xhr_.responseType="text"}}function Sk(){return new VM}/**
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
 */class rs{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gk(this._location.path)}get storage(){return this._service}get parent(){const e=xM(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sM(e)}}function HM(t,e,n){t._throwIfRoot("uploadBytes");const r=BM(t.storage,t._location,yk(),new Xr(e,!0),n);return t.storage.makeRequestWithTokens(r,Sk).then(i=>({metadata:i,ref:t}))}function qM(t){t._throwIfRoot("getDownloadURL");const e=FM(t.storage,t._location,yk());return t.storage.makeRequestWithTokens(e,Sk).then(n=>{if(n===null)throw rM();return n})}function WM(t,e){const n=AM(t._location.path,e),r=new hn(t._location.bucket,n);return new rs(t.storage,r)}/**
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
 */function KM(t){return/^[A-Za-z]+:\/\//.test(t)}function GM(t,e){return new rs(t,e)}function Tk(t,e){if(t instanceof Fy){const n=t;if(n._bucket==null)throw tM();const r=new rs(n,n._bucket);return e!=null?Tk(r,e):r}else return e!==void 0?WM(t,e):t}function QM(t,e){if(e&&KM(e)){if(t instanceof Fy)return GM(t,e);throw cm("To use ref(service, url), the first argument must be a Storage instance.")}else return Tk(t,e)}function jw(t,e){const n=e==null?void 0:e[uk];return n==null?null:hn.makeFromBucketSpec(n,t)}function YM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nS(i,t.app.options.projectId))}class Fy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=lk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HL,this._maxUploadRetryTime=qL,this._requests=new Set,i!=null?this._bucket=hn.makeFromBucketSpec(i,this._host):this._bucket=jw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=jw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new oM(ck());{const o=yM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Bw="@firebase/storage",zw="0.11.2";/**
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
 */const Ck="storage";function XM(t,e,n){return t=rt(t),HM(t,e,n)}function JM(t){return t=rt(t),qM(t)}function ZM(t,e){return t=rt(t),QM(t,e)}function e$(t=Cg(),e){t=rt(t);const r=vh(t,Ck).getImmediate({identifier:e}),i=Z_("storage");return i&&t$(r,...i),r}function t$(t,e,n,r={}){YM(t,e,n,r)}function n$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fy(n,r,i,e,ls)}function r$(){Xi(new yi(Ck,n$,"PUBLIC").setMultipleInstances(!0)),ir(Bw,zw,""),ir(Bw,zw,"esm2017")}r$();const i$={apiKey:"AIzaSyDjp2naVdYBa2RhxnnLuiDBo3Y1kJvg3Ro",authDomain:"coordinates-10459.firebaseapp.com",projectId:"coordinates-10459",storageBucket:"coordinates-10459.appspot.com",messagingSenderId:"17389845792",appId:"1:17389845792:web:324711e8abcbb7c6aeeb45",measurementId:"G-C4T1LXJLHM"},Uy=sS(i$),Vw=VL(Uy),is=mO(Uy),s$=e$(Uy),qn=I.createContext(),o$=({children:t})=>{const[e,n]=I.useState("disable");JSON.parse(localStorage.getItem("@userStorage"));const[r,i]=I.useState("");async function s(){i(r==="light"?"dark":"light")}function o(){n(e==="disable"?"enable":"disable")}return _.jsx(qn.Provider,{value:{theme:r,setTheme:i,toggleTheme:s,toggleHamburguer:o,hamburguer:e},children:t})};/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function We(){return We=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},We.apply(this,arguments)}var st;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(st||(st={}));const Hw="popstate";function a$(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return al("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ss(i)}return u$(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function co(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function l$(){return Math.random().toString(36).substr(2,8)}function qw(t,e){return{usr:t.state,key:t.key,idx:e}}function al(t,e,n,r){return n===void 0&&(n=null),We({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lr(e):e,{state:n,key:e&&e.key||r||l$()})}function ss(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function u$(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=st.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(We({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=st.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:g})}function d(E,g){a=st.Push;let f=al(y.location,E,g);n&&n(f,E),u=c()+1;let w=qw(f,u),v=y.createHref(f);try{o.pushState(w,"",v)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(v)}s&&l&&l({action:a,location:y.location,delta:1})}function p(E,g){a=st.Replace;let f=al(y.location,E,g);n&&n(f,E),u=c();let w=qw(f,u),v=y.createHref(f);o.replaceState(w,"",v),s&&l&&l({action:a,location:y.location,delta:0})}function m(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:ss(E);return he(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hw,h),l=E,()=>{i.removeEventListener(Hw,h),l=null}},createHref(E){return e(i,E)},createURL:m,encodeLocation(E){let g=m(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(E){return o.go(E)}};return y}var dt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dt||(dt={}));const c$=new Set(["lazy","caseSensitive","path","id","index","children"]);function h$(t){return t.index===!0}function hm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),h$(i)){let l=We({},i,e(i),{id:a});return r[a]=l,l}else{let l=We({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=hm(i.children,e,o,r)),l}})}function Ns(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Lr(e):e,i=Ao(r.pathname||"/",n);if(i==null)return null;let s=kk(t);d$(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_$(s[a],C$(i));return o}function kk(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Tr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kk(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:w$(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Ik(s.path))i(s,o,l)}),e}function Ik(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ik(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function d$(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:E$(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f$=/^:\w+$/,p$=3,m$=2,g$=1,y$=10,v$=-2,Ww=t=>t==="*";function w$(t,e){let n=t.split("/"),r=n.length;return n.some(Ww)&&(r+=v$),e&&(r+=m$),n.filter(i=>!Ww(i)).reduce((i,s)=>i+(f$.test(s)?p$:s===""?g$:y$),r)}function E$(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _$(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=S$({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Tr([i,c.pathname]),pathnameBase:A$(Tr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Tr([i,c.pathnameBase]))}return s}function S$(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=T$(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=k$(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function T$(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),co(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function C$(t){try{return decodeURI(t)}catch(e){return co(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function k$(t,e){try{return decodeURIComponent(t)}catch(n){return co(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ao(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function I$(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Lr(t):t;return{pathname:n?n.startsWith("/")?n:x$(n,e):e,search:R$(r),hash:b$(i)}}function x$(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ed(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Lr(t):(i=We({},t),he(!i.pathname||!i.pathname.includes("?"),Sf("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Sf("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Sf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=I$(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),A$=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),R$=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,b$=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class jy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function xk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ak=["post","put","patch","delete"],P$=new Set(Ak),N$=["get",...Ak],D$=new Set(N$),O$=new Set([301,302,303,307,308]),L$=new Set([307,308]),Tf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},M$={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Tu={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$$=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function F$(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;he(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=k=>({hasErrorBoundary:T(k)})}else i=$$;let s={},o=hm(t.routes,i,void 0,s),a,l=t.basename||"/",u=We({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,p=null,m=null,y=t.hydrationData!=null,E=Ns(o,t.history.location,l),g=null;if(E==null){let T=Sn(404,{pathname:t.history.location.pathname}),{matches:k,route:P}=e1(o);E=k,g={[P.id]:T}}let f=!E.some(T=>T.route.lazy)&&(!E.some(T=>T.route.loader)||t.hydrationData!=null),w,v={historyAction:t.history.action,location:t.history.location,matches:E,initialized:f,navigation:Tf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},C=st.Pop,R=!1,b,L=!1,G=!1,K=[],De=[],ie=new Map,be=0,Oe=-1,Ce=new Map,Pe=new Set,Ne=new Map,N=new Map,V=new Map,Q=!1;function ye(){return c=t.history.listen(T=>{let{action:k,location:P,delta:H}=T;if(Q){Q=!1;return}co(V.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let le=ds({currentLocation:v.location,nextLocation:P,historyAction:k});if(le&&H!=null){Q=!0,t.history.go(H*-1),Fr(le,{state:"blocked",location:P,proceed(){Fr(le,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(H)},reset(){let te=new Map(v.blockers);te.set(le,Tu),$({blockers:te})}});return}return M(k,P)}),v.initialized||M(st.Pop,v.location),w}function F(){c&&c(),h.clear(),b&&b.abort(),v.fetchers.forEach((T,k)=>hr(k)),v.blockers.forEach((T,k)=>He(k))}function j(T){return h.add(T),()=>h.delete(T)}function $(T){v=We({},v,T),h.forEach(k=>k(v))}function X(T,k){var P,H;let le=v.actionData!=null&&v.navigation.formMethod!=null&&Mn(v.navigation.formMethod)&&v.navigation.state==="loading"&&((P=T.state)==null?void 0:P._isRedirect)!==!0,te;k.actionData?Object.keys(k.actionData).length>0?te=k.actionData:te=null:le?te=v.actionData:te=null;let se=k.loaderData?Zw(v.loaderData,k.loaderData,k.matches||[],k.errors):v.loaderData,ne=new Map;V.clear();let W=R===!0||v.navigation.formMethod!=null&&Mn(v.navigation.formMethod)&&((H=T.state)==null?void 0:H._isRedirect)!==!0;a&&(o=a,a=void 0),L||C===st.Pop||(C===st.Push?t.history.push(T,T.state):C===st.Replace&&t.history.replace(T,T.state)),$(We({},k,{actionData:te,loaderData:se,historyAction:C,location:T,initialized:!0,navigation:Tf,revalidation:"idle",restoreScrollPosition:rv(T,k.matches||v.matches),preventScrollReset:W,blockers:ne})),C=st.Pop,R=!1,L=!1,G=!1,K=[],De=[]}async function S(T,k){if(typeof T=="number"){t.history.go(T);return}let P=dm(v.location,v.matches,l,u.v7_prependBasename,T,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:H,submission:le,error:te}=Kw(u.v7_normalizeFormMethod,!1,P,k),se=v.location,ne=al(v.location,H,k&&k.state);ne=We({},ne,t.history.encodeLocation(ne));let W=k&&k.replace!=null?k.replace:void 0,$e=st.Push;W===!0?$e=st.Replace:W===!1||le!=null&&Mn(le.formMethod)&&le.formAction===v.location.pathname+v.location.search&&($e=st.Replace);let ke=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ln=ds({currentLocation:se,nextLocation:ne,historyAction:$e});if(ln){Fr(ln,{state:"blocked",location:ne,proceed(){Fr(ln,{state:"proceeding",proceed:void 0,reset:void 0,location:ne}),S(T,k)},reset(){let yt=new Map(v.blockers);yt.set(ln,Tu),$({blockers:yt})}});return}return await M($e,ne,{submission:le,pendingError:te,preventScrollReset:ke,replace:k&&k.replace})}function de(){if(me(),$({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){M(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}M(C||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function M(T,k,P){b&&b.abort(),b=null,C=T,L=(P&&P.startUninterruptedRevalidation)===!0,II(v.location,v.matches),R=(P&&P.preventScrollReset)===!0;let H=a||o,le=P&&P.overrideNavigation,te=Ns(H,k,l);if(!te){let yt=Sn(404,{pathname:k.pathname}),{matches:en,route:Wn}=e1(H);En(),X(k,{matches:en,loaderData:{},errors:{[Wn.id]:yt}});return}if(v.initialized&&!G&&V$(v.location,k)&&!(P&&P.submission&&Mn(P.submission.formMethod))){X(k,{matches:te});return}b=new AbortController;let se=Go(t.history,k,b.signal,P&&P.submission),ne,W;if(P&&P.pendingError)W={[Ds(te).route.id]:P.pendingError};else if(P&&P.submission&&Mn(P.submission.formMethod)){let yt=await Ve(se,k,P.submission,te,{replace:P.replace});if(yt.shortCircuited)return;ne=yt.pendingActionData,W=yt.pendingActionError,le=Cu(k,P.submission),se=new Request(se.url,{signal:se.signal})}let{shortCircuited:$e,loaderData:ke,errors:ln}=await Ee(se,k,te,le,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,ne,W);$e||(b=null,X(k,We({matches:te},ne?{actionData:ne}:{},{loaderData:ke,errors:ln})))}async function Ve(T,k,P,H,le){le===void 0&&(le={}),me();let te=G$(k,P);$({navigation:te});let se,ne=pm(H,k);if(!ne.route.action&&!ne.route.lazy)se={type:dt.error,error:Sn(405,{method:T.method,pathname:k.pathname,routeId:ne.route.id})};else if(se=await Ko("action",T,ne,H,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(Ks(se)){let W;return le&&le.replace!=null?W=le.replace:W=se.location===v.location.pathname+v.location.search,await ce(v,se,{submission:P,replace:W}),{shortCircuited:!0}}if(Ca(se)){let W=Ds(H,ne.route.id);return(le&&le.replace)!==!0&&(C=st.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:se.error}}}if(Fi(se))throw Sn(400,{type:"defer-action"});return{pendingActionData:{[ne.route.id]:se.data}}}async function Ee(T,k,P,H,le,te,se,ne,W){let $e=H||Cu(k,le),ke=le||te||r1($e),ln=a||o,[yt,en]=Gw(t.history,v,P,ke,k,G,K,De,Ne,Pe,ln,l,ne,W);if(En(qe=>!(P&&P.some(_n=>_n.route.id===qe))||yt&&yt.some(_n=>_n.route.id===qe)),yt.length===0&&en.length===0){let qe=$r();return X(k,We({matches:P,loaderData:{},errors:W||null},ne?{actionData:ne}:{},qe?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!L){en.forEach(_n=>{let fs=v.fetchers.get(_n.key),Ct=Qo(void 0,fs?fs.data:void 0);v.fetchers.set(_n.key,Ct)});let qe=ne||v.actionData;$(We({navigation:$e},qe?Object.keys(qe).length===0?{actionData:null}:{actionData:qe}:{},en.length>0?{fetchers:new Map(v.fetchers)}:{}))}Oe=++be,en.forEach(qe=>{ie.has(qe.key)&&Le(qe.key),qe.controller&&ie.set(qe.key,qe.controller)});let Wn=()=>en.forEach(qe=>Le(qe.key));b&&b.signal.addEventListener("abort",Wn);let{results:Oo,loaderResults:Sd,fetcherResults:ql}=await ht(v.matches,P,yt,en,T);if(T.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",Wn),en.forEach(qe=>ie.delete(qe.key));let dr=t1(Oo);if(dr)return await ce(v,dr,{replace:se}),{shortCircuited:!0};let{loaderData:Wl,errors:Td}=Jw(v,P,yt,Sd,W,en,ql,N);N.forEach((qe,_n)=>{qe.subscribe(fs=>{(fs||qe.done)&&N.delete(_n)})});let Cd=$r(),kd=Zt(Oe),Kl=Cd||kd||en.length>0;return We({loaderData:Wl,errors:Td},Kl?{fetchers:new Map(v.fetchers)}:{})}function _e(T){return v.fetchers.get(T)||M$}function ae(T,k,P,H){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(T)&&Le(T);let le=a||o,te=dm(v.location,v.matches,l,u.v7_prependBasename,P,k,H==null?void 0:H.relative),se=Ns(le,te,l);if(!se){Xe(T,k,Sn(404,{pathname:te}));return}let{path:ne,submission:W,error:$e}=Kw(u.v7_normalizeFormMethod,!0,te,H);if($e){Xe(T,k,$e);return}let ke=pm(se,ne);if(R=(H&&H.preventScrollReset)===!0,W&&Mn(W.formMethod)){ct(T,k,ne,ke,se,W);return}Ne.set(T,{routeId:k,path:ne}),Pt(T,k,ne,ke,se,W)}async function ct(T,k,P,H,le,te){if(me(),Ne.delete(T),!H.route.action&&!H.route.lazy){let Ct=Sn(405,{method:te.formMethod,pathname:P,routeId:k});Xe(T,k,Ct);return}let se=v.fetchers.get(T),ne=Q$(te,se);v.fetchers.set(T,ne),$({fetchers:new Map(v.fetchers)});let W=new AbortController,$e=Go(t.history,P,W.signal,te);ie.set(T,W);let ke=await Ko("action",$e,H,le,s,i,l);if($e.signal.aborted){ie.get(T)===W&&ie.delete(T);return}if(Ks(ke)){ie.delete(T),Pe.add(T);let Ct=Qo(te);return v.fetchers.set(T,Ct),$({fetchers:new Map(v.fetchers)}),ce(v,ke,{submission:te,isFetchActionRedirect:!0})}if(Ca(ke)){Xe(T,k,ke.error);return}if(Fi(ke))throw Sn(400,{type:"defer-action"});let ln=v.navigation.location||v.location,yt=Go(t.history,ln,W.signal),en=a||o,Wn=v.navigation.state!=="idle"?Ns(en,v.navigation.location,l):v.matches;he(Wn,"Didn't find any matches after fetcher action");let Oo=++be;Ce.set(T,Oo);let Sd=Qo(te,ke.data);v.fetchers.set(T,Sd);let[ql,dr]=Gw(t.history,v,Wn,te,ln,G,K,De,Ne,Pe,en,l,{[H.route.id]:ke.data},void 0);dr.filter(Ct=>Ct.key!==T).forEach(Ct=>{let Lo=Ct.key,iv=v.fetchers.get(Lo),AI=Qo(void 0,iv?iv.data:void 0);v.fetchers.set(Lo,AI),ie.has(Lo)&&Le(Lo),Ct.controller&&ie.set(Lo,Ct.controller)}),$({fetchers:new Map(v.fetchers)});let Wl=()=>dr.forEach(Ct=>Le(Ct.key));W.signal.addEventListener("abort",Wl);let{results:Td,loaderResults:Cd,fetcherResults:kd}=await ht(v.matches,Wn,ql,dr,yt);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Wl),Ce.delete(T),ie.delete(T),dr.forEach(Ct=>ie.delete(Ct.key));let Kl=t1(Td);if(Kl)return ce(v,Kl);let{loaderData:qe,errors:_n}=Jw(v,v.matches,ql,Cd,void 0,dr,kd,N);if(v.fetchers.has(T)){let Ct=Ku(ke.data);v.fetchers.set(T,Ct)}let fs=Zt(Oo);v.navigation.state==="loading"&&Oo>Oe?(he(C,"Expected pending action"),b&&b.abort(),X(v.navigation.location,{matches:Wn,loaderData:qe,errors:_n,fetchers:new Map(v.fetchers)})):($(We({errors:_n,loaderData:Zw(v.loaderData,qe,Wn,_n)},fs||dr.length>0?{fetchers:new Map(v.fetchers)}:{})),G=!1)}async function Pt(T,k,P,H,le,te){let se=v.fetchers.get(T),ne=Qo(te,se?se.data:void 0);v.fetchers.set(T,ne),$({fetchers:new Map(v.fetchers)});let W=new AbortController,$e=Go(t.history,P,W.signal);ie.set(T,W);let ke=await Ko("loader",$e,H,le,s,i,l);if(Fi(ke)&&(ke=await Nk(ke,$e.signal,!0)||ke),ie.get(T)===W&&ie.delete(T),$e.signal.aborted)return;if(Ks(ke)){Pe.add(T),await ce(v,ke);return}if(Ca(ke)){let yt=Ds(v.matches,k);v.fetchers.delete(T),$({fetchers:new Map(v.fetchers),errors:{[yt.route.id]:ke.error}});return}he(!Fi(ke),"Unhandled fetcher deferred data");let ln=Ku(ke.data);v.fetchers.set(T,ln),$({fetchers:new Map(v.fetchers)})}async function ce(T,k,P){let{submission:H,replace:le,isFetchActionRedirect:te}=P===void 0?{}:P;k.revalidate&&(G=!0);let se=al(T.location,k.location,We({_isRedirect:!0},te?{_isFetchActionRedirect:!0}:{}));if(he(se,"Expected a location on the redirect navigation"),Rk.test(k.location)&&n){let $e=t.history.createURL(k.location),ke=Ao($e.pathname,l)==null;if(e.location.origin!==$e.origin||ke){le?e.location.replace(k.location):e.location.assign(k.location);return}}b=null;let ne=le===!0?st.Replace:st.Push,W=H||r1(T.navigation);if(L$.has(k.status)&&W&&Mn(W.formMethod))await M(ne,se,{submission:We({},W,{formAction:k.location}),preventScrollReset:R});else if(te)await M(ne,se,{overrideNavigation:Cu(se),fetcherSubmission:W,preventScrollReset:R});else{let $e=Cu(se,W);await M(ne,se,{overrideNavigation:$e,preventScrollReset:R})}}async function ht(T,k,P,H,le){let te=await Promise.all([...P.map(W=>Ko("loader",le,W,k,s,i,l)),...H.map(W=>W.matches&&W.match&&W.controller?Ko("loader",Go(t.history,W.path,W.controller.signal),W.match,W.matches,s,i,l):{type:dt.error,error:Sn(404,{pathname:W.path})})]),se=te.slice(0,P.length),ne=te.slice(P.length);return await Promise.all([n1(T,P,se,se.map(()=>le.signal),!1,v.loaderData),n1(T,H.map(W=>W.match),ne,H.map(W=>W.controller?W.controller.signal:null),!0)]),{results:te,loaderResults:se,fetcherResults:ne}}function me(){G=!0,K.push(...En()),Ne.forEach((T,k)=>{ie.has(k)&&(De.push(k),Le(k))})}function Xe(T,k,P){let H=Ds(v.matches,k);hr(T),$({errors:{[H.route.id]:P},fetchers:new Map(v.fetchers)})}function hr(T){let k=v.fetchers.get(T);ie.has(T)&&!(k&&k.state==="loading"&&Ce.has(T))&&Le(T),Ne.delete(T),Ce.delete(T),Pe.delete(T),v.fetchers.delete(T)}function Le(T){let k=ie.get(T);he(k,"Expected fetch controller: "+T),k.abort(),ie.delete(T)}function Ai(T){for(let k of T){let P=_e(k),H=Ku(P.data);v.fetchers.set(k,H)}}function $r(){let T=[],k=!1;for(let P of Pe){let H=v.fetchers.get(P);he(H,"Expected fetcher: "+P),H.state==="loading"&&(Pe.delete(P),T.push(P),k=!0)}return Ai(T),k}function Zt(T){let k=[];for(let[P,H]of Ce)if(H<T){let le=v.fetchers.get(P);he(le,"Expected fetcher: "+P),le.state==="loading"&&(Le(P),Ce.delete(P),k.push(P))}return Ai(k),k.length>0}function J(T,k){let P=v.blockers.get(T)||Tu;return V.get(T)!==k&&V.set(T,k),P}function He(T){v.blockers.delete(T),V.delete(T)}function Fr(T,k){let P=v.blockers.get(T)||Tu;he(P.state==="unblocked"&&k.state==="blocked"||P.state==="blocked"&&k.state==="blocked"||P.state==="blocked"&&k.state==="proceeding"||P.state==="blocked"&&k.state==="unblocked"||P.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+k.state);let H=new Map(v.blockers);H.set(T,k),$({blockers:H})}function ds(T){let{currentLocation:k,nextLocation:P,historyAction:H}=T;if(V.size===0)return;V.size>1&&co(!1,"A router only supports one blocker at a time");let le=Array.from(V.entries()),[te,se]=le[le.length-1],ne=v.blockers.get(te);if(!(ne&&ne.state==="proceeding")&&se({currentLocation:k,nextLocation:P,historyAction:H}))return te}function En(T){let k=[];return N.forEach((P,H)=>{(!T||T(H))&&(P.cancel(),k.push(H),N.delete(H))}),k}function kI(T,k,P){if(d=T,m=k,p=P||null,!y&&v.navigation===Tf){y=!0;let H=rv(v.location,v.matches);H!=null&&$({restoreScrollPosition:H})}return()=>{d=null,m=null,p=null}}function nv(T,k){return p&&p(T,k.map(H=>K$(H,v.loaderData)))||T.key}function II(T,k){if(d&&m){let P=nv(T,k);d[P]=m()}}function rv(T,k){if(d){let P=nv(T,k),H=d[P];if(typeof H=="number")return H}return null}function xI(T){s={},a=hm(T,i,void 0,s)}return w={get basename(){return l},get state(){return v},get routes(){return o},initialize:ye,subscribe:j,enableScrollRestoration:kI,navigate:S,fetch:ae,revalidate:de,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:_e,deleteFetcher:hr,dispose:F,getBlocker:J,deleteBlocker:He,_internalFetchControllers:ie,_internalActiveDeferreds:N,_internalSetRoutes:xI},w}function U$(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function dm(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=ed(i||".",jl(a).map(c=>c.pathnameBase),Ao(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!By(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Tr([n,u.pathname])),ss(u)}function Kw(t,e,n,r){if(!r||!U$(r))return{path:n};if(r.formMethod&&!W$(r.formMethod))return{path:n,error:Sn(405,{method:r.formMethod})};let i=()=>({path:n,error:Sn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=Pk(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Mn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,m)=>{let[y,E]=m;return""+p+y+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!Mn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=fm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=fm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Xw(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Xw(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Mn(c.formMethod))return{path:n,submission:c};let h=Lr(n);return e&&h.search&&By(h.search)&&l.append("index",""),h.search="?"+l,{path:ss(h),submission:c}}function j$(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Gw(t,e,n,r,i,s,o,a,l,u,c,h,d,p){let m=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,y=t.createURL(e.location),E=t.createURL(i),g=p?Object.keys(p)[0]:void 0,w=j$(n,g).filter((C,R)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(B$(e.loaderData,e.matches[R],C)||o.some(G=>G===C.route.id))return!0;let b=e.matches[R],L=C;return Qw(C,We({currentUrl:y,currentParams:b.params,nextUrl:E,nextParams:L.params},r,{actionResult:m,defaultShouldRevalidate:s||y.pathname+y.search===E.pathname+E.search||y.search!==E.search||bk(b,L)}))}),v=[];return l.forEach((C,R)=>{if(!n.some(ie=>ie.route.id===C.routeId))return;let b=Ns(c,C.path,h);if(!b){v.push({key:R,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let L=e.fetchers.get(R),G=L&&L.state!=="idle"&&L.data===void 0&&!u.has(R),K=pm(b,C.path);(a.includes(R)||G||Qw(K,We({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:s})))&&v.push({key:R,routeId:C.routeId,path:C.path,matches:b,match:K,controller:new AbortController})}),[w,v]}function B$(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function bk(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Qw(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Yw(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];he(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";co(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!c$.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,We({},e(i),{lazy:void 0}))}async function Ko(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=m=>{let y,E=new Promise((g,f)=>y=f);return c=()=>y(),e.signal.addEventListener("abort",c),Promise.race([m({request:e,params:n.params,context:a.requestContext}),E])};try{let m=n.route[t];if(n.route.lazy)if(m)u=(await Promise.all([h(m),Yw(n.route,s,i)]))[0];else if(await Yw(n.route,s,i),m=n.route[t],m)u=await h(m);else if(t==="action"){let y=new URL(e.url),E=y.pathname+y.search;throw Sn(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:dt.data,data:void 0};else if(m)u=await h(m);else{let y=new URL(e.url),E=y.pathname+y.search;throw Sn(404,{pathname:E})}he(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(m){l=dt.error,u=m}finally{c&&e.signal.removeEventListener("abort",c)}if(q$(u)){let m=u.status;if(O$.has(m)){let g=u.headers.get("Location");if(he(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!Rk.test(g))g=dm(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let f=new URL(e.url),w=g.startsWith("//")?new URL(f.protocol+g):new URL(g),v=Ao(w.pathname,o)!=null;w.origin===f.origin&&v&&(g=w.pathname+w.search+w.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:dt.redirect,status:m,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||dt.data,response:u};let y,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?y=await u.json():y=await u.text(),l===dt.error?{type:l,error:new jy(m,u.statusText,y),headers:u.headers}:{type:dt.data,data:y,statusCode:u.status,headers:u.headers}}if(l===dt.error)return{type:l,error:u};if(H$(u)){var d,p;return{type:dt.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((p=u.init)==null?void 0:p.headers)&&new Headers(u.init.headers)}}return{type:dt.data,data:u}}function Go(t,e,n,r){let i=t.createURL(Pk(e)).toString(),s={signal:n};if(r&&Mn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=fm(r.formData):s.body=r.formData}return new Request(i,s)}function fm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Xw(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function z$(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(he(!Ks(c),"Cannot handle redirect results in processLoaderData"),Ca(c)){let p=Ds(t,d),m=c.error;r&&(m=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=m),s[d]=void 0,l||(l=!0,a=xk(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else Fi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Jw(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=z$(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:p}=s[c];he(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let m=o[c];if(!(p&&p.signal.aborted))if(Ca(m)){let y=Ds(t.matches,d==null?void 0:d.route.id);u&&u[y.route.id]||(u=We({},u,{[y.route.id]:m.error})),t.fetchers.delete(h)}else if(Ks(m))he(!1,"Unhandled fetcher revalidation redirect");else if(Fi(m))he(!1,"Unhandled fetcher deferred data");else{let y=Ku(m.data);t.fetchers.set(h,y)}}return{loaderData:l,errors:u}}function Zw(t,e,n,r){let i=We({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ds(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function e1(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Sn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new jy(t||500,o,new Error(a),!0)}function t1(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ks(n))return n}}function Pk(t){let e=typeof t=="string"?Lr(t):t;return ss(We({},e,{hash:""}))}function V$(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Fi(t){return t.type===dt.deferred}function Ca(t){return t.type===dt.error}function Ks(t){return(t&&t.type)===dt.redirect}function H$(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function q$(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function W$(t){return D$.has(t.toLowerCase())}function Mn(t){return P$.has(t.toLowerCase())}async function n1(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!bk(u,l)&&(s&&s[l.route.id])!==void 0;if(Fi(a)&&(i||c)){let h=r[o];he(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await Nk(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function Nk(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:dt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:dt.error,error:i}}return{type:dt.data,data:t.deferredData.data}}}function By(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function K$(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function pm(t,e){let n=typeof e=="string"?Lr(e).search:e.search;if(t[t.length-1].route.index&&By(n||""))return t[t.length-1];let r=jl(t);return r[r.length-1]}function r1(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Cu(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function G$(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Qo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function Q$(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Ku(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gc.apply(this,arguments)}const td=I.createContext(null),Dk=I.createContext(null),Ro=I.createContext(null),nd=I.createContext(null),Mr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Ok=I.createContext(null);function Y$(t,e){let{relative:n}=e===void 0?{}:e;bo()||he(!1);let{basename:r,navigator:i}=I.useContext(Ro),{hash:s,pathname:o,search:a}=Mk(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Tr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function bo(){return I.useContext(nd)!=null}function Bl(){return bo()||he(!1),I.useContext(nd).location}function Lk(t){I.useContext(Ro).static||I.useLayoutEffect(t)}function Po(){let{isDataRoute:t}=I.useContext(Mr);return t?cF():X$()}function X$(){bo()||he(!1);let t=I.useContext(td),{basename:e,navigator:n}=I.useContext(Ro),{matches:r}=I.useContext(Mr),{pathname:i}=Bl(),s=JSON.stringify(jl(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return Lk(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=ed(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Tr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const J$=I.createContext(null);function Z$(t){let e=I.useContext(Mr).outlet;return e&&I.createElement(J$.Provider,{value:t},e)}function Mk(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(Mr),{pathname:i}=Bl(),s=JSON.stringify(jl(r).map(o=>o.pathnameBase));return I.useMemo(()=>ed(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function eF(t,e,n){bo()||he(!1);let{navigator:r}=I.useContext(Ro),{matches:i}=I.useContext(Mr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Bl(),u;if(e){var c;let y=typeof e=="string"?Lr(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||he(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=Ns(t,{pathname:d}),m=sF(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Tr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Tr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&m?I.createElement(nd.Provider,{value:{location:Gc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:st.Pop}},m):m}function tF(){let t=uF(),e=xk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const nF=I.createElement(tF,null);class rF extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Mr.Provider,{value:this.props.routeContext},I.createElement(Ok.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iF(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(td);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Mr.Provider,{value:e},r)}function sF(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||he(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||nF);let d=e.concat(s.slice(0,u+1)),p=()=>{let m;return c?m=h:l.route.Component?m=I.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,I.createElement(iF,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(rF,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var mm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(mm||(mm={}));var ll;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ll||(ll={}));function oF(t){let e=I.useContext(td);return e||he(!1),e}function aF(t){let e=I.useContext(Dk);return e||he(!1),e}function lF(t){let e=I.useContext(Mr);return e||he(!1),e}function $k(t){let e=lF(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function uF(){var t;let e=I.useContext(Ok),n=aF(ll.UseRouteError),r=$k(ll.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function cF(){let{router:t}=oF(mm.UseNavigateStable),e=$k(ll.UseNavigateStable),n=I.useRef(!1);return Lk(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Gc({fromRouteId:e},s)))},[t,e])}const hF="startTransition",i1=qI[hF];function dF(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=I.useState(n.state),{v7_startTransition:o}=r||{},a=I.useCallback(h=>{o&&i1?i1(()=>s(h)):s(h)},[s,o]);I.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=I.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,p)=>n.navigate(h,{state:d,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(h,d,p)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),u=n.basename||"/",c=I.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return I.createElement(I.Fragment,null,I.createElement(td.Provider,{value:c},I.createElement(Dk.Provider,{value:i},I.createElement(mF,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?I.createElement(fF,{routes:n.routes,state:i}):e))),null)}function fF(t){let{routes:e,state:n}=t;return eF(e,void 0,n)}function Fk(t){let{to:e,replace:n,state:r,relative:i}=t;bo()||he(!1);let{matches:s}=I.useContext(Mr),{pathname:o}=Bl(),a=Po(),l=ed(e,jl(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function pF(t){return Z$(t.context)}function mF(t){let{basename:e="/",children:n=null,location:r,navigationType:i=st.Pop,navigator:s,static:o=!1}=t;bo()&&he(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Lr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,m=I.useMemo(()=>{let y=Ao(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return m==null?null:I.createElement(Ro.Provider,{value:l},I.createElement(nd.Provider,{children:n,value:m}))}var s1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(s1||(s1={}));new Promise(()=>{});function gF(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:I.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:I.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ul.apply(this,arguments)}function yF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wF(t,e){return t.button===0&&(!e||e==="_self")&&!vF(t)}const EF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function _F(t,e){return F$({basename:e==null?void 0:e.basename,future:ul({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:a$({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||SF(),routes:t,mapRouteProperties:gF}).initialize()}function SF(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ul({},e,{errors:TF(e.errors)})),e}function TF(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new jy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const CF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qt=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=yF(e,EF),{basename:d}=I.useContext(Ro),p,m=!1;if(typeof u=="string"&&kF.test(u)&&(p=u,CF))try{let f=new URL(window.location.href),w=u.startsWith("//")?new URL(f.protocol+u):new URL(u),v=Ao(w.pathname,d);w.origin===f.origin&&v!=null?u=v+w.search+w.hash:m=!0}catch{}let y=Y$(u,{relative:i}),E=IF(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||E(f)}return I.createElement("a",ul({},h,{href:p||y,onClick:m||s?r:g,ref:n,target:l}))});var o1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(o1||(o1={}));var a1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(a1||(a1={}));function IF(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Po(),l=Bl(),u=Mk(t,{relative:o});return I.useCallback(c=>{if(wF(c,n)){c.preventDefault();let h=r!==void 0?r:ss(l)===ss(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const No=I.createContext({});function xF({children:t}){const{theme:e}=I.useContext(qn),[n,r]=I.useState(null);I.useState(!1);const[i,s]=I.useState(!1);async function o(c,h){s(!0),await R2(Vw,c,h).then(async d=>{let p=d.user.uid;const m=lo(is,"users",p),y=await NO(m);let E={uid:p,nome:y.data().nome,email:d.user.email,imgUrl:y.data().imgUrl,theme:e,logado:!0};r(E),u(E),s(!1)})}async function a(c,h,d){s(!0),await A2(Vw,h,d).then(async p=>{let m=p.user.uid;await DO(lo(is,"users",m),{nome:c,imgUrl:null}).then(y=>{let E={nome:c,email:p.user.email,imgUrl:null,logado:!0,uid:m,theme:"light"};r(E),u(E),s(!1)}).catch(y=>{console.log(y)})}).catch(p=>{console.log(p)})}function l(){r({logado:!1}),localStorage.clear("@userStorage"),alert("saindo")}function u(c){localStorage.setItem("@userStorage",JSON.stringify(c))}return _.jsx(No.Provider,{value:{signed:!!n,user:n,signIn:o,signUp:a,loadingAuth:i,LogOut:l,UserStorage:u},children:t})}var Uk={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tt=typeof Symbol=="function"&&Symbol.for,zy=Tt?Symbol.for("react.element"):60103,Vy=Tt?Symbol.for("react.portal"):60106,rd=Tt?Symbol.for("react.fragment"):60107,id=Tt?Symbol.for("react.strict_mode"):60108,sd=Tt?Symbol.for("react.profiler"):60114,od=Tt?Symbol.for("react.provider"):60109,ad=Tt?Symbol.for("react.context"):60110,Hy=Tt?Symbol.for("react.async_mode"):60111,ld=Tt?Symbol.for("react.concurrent_mode"):60111,ud=Tt?Symbol.for("react.forward_ref"):60112,cd=Tt?Symbol.for("react.suspense"):60113,AF=Tt?Symbol.for("react.suspense_list"):60120,hd=Tt?Symbol.for("react.memo"):60115,dd=Tt?Symbol.for("react.lazy"):60116,RF=Tt?Symbol.for("react.block"):60121,bF=Tt?Symbol.for("react.fundamental"):60117,PF=Tt?Symbol.for("react.responder"):60118,NF=Tt?Symbol.for("react.scope"):60119;function wn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case zy:switch(t=t.type,t){case Hy:case ld:case rd:case sd:case id:case cd:return t;default:switch(t=t&&t.$$typeof,t){case ad:case ud:case dd:case hd:case od:return t;default:return e}}case Vy:return e}}}function jk(t){return wn(t)===ld}Re.AsyncMode=Hy;Re.ConcurrentMode=ld;Re.ContextConsumer=ad;Re.ContextProvider=od;Re.Element=zy;Re.ForwardRef=ud;Re.Fragment=rd;Re.Lazy=dd;Re.Memo=hd;Re.Portal=Vy;Re.Profiler=sd;Re.StrictMode=id;Re.Suspense=cd;Re.isAsyncMode=function(t){return jk(t)||wn(t)===Hy};Re.isConcurrentMode=jk;Re.isContextConsumer=function(t){return wn(t)===ad};Re.isContextProvider=function(t){return wn(t)===od};Re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===zy};Re.isForwardRef=function(t){return wn(t)===ud};Re.isFragment=function(t){return wn(t)===rd};Re.isLazy=function(t){return wn(t)===dd};Re.isMemo=function(t){return wn(t)===hd};Re.isPortal=function(t){return wn(t)===Vy};Re.isProfiler=function(t){return wn(t)===sd};Re.isStrictMode=function(t){return wn(t)===id};Re.isSuspense=function(t){return wn(t)===cd};Re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rd||t===ld||t===sd||t===id||t===cd||t===AF||typeof t=="object"&&t!==null&&(t.$$typeof===dd||t.$$typeof===hd||t.$$typeof===od||t.$$typeof===ad||t.$$typeof===ud||t.$$typeof===bF||t.$$typeof===PF||t.$$typeof===NF||t.$$typeof===RF)};Re.typeOf=wn;Uk.exports=Re;var qy=Uk.exports;function DF(t){function e(F,j,$,X,S){for(var de=0,M=0,Ve=0,Ee=0,_e,ae,ct=0,Pt=0,ce,ht=ce=_e=0,me=0,Xe=0,hr=0,Le=0,Ai=$.length,$r=Ai-1,Zt,J="",He="",Fr="",ds="",En;me<Ai;){if(ae=$.charCodeAt(me),me===$r&&M+Ee+Ve+de!==0&&(M!==0&&(ae=M===47?10:47),Ee=Ve=de=0,Ai++,$r++),M+Ee+Ve+de===0){if(me===$r&&(0<Xe&&(J=J.replace(d,"")),0<J.trim().length)){switch(ae){case 32:case 9:case 59:case 13:case 10:break;default:J+=$.charAt(me)}ae=59}switch(ae){case 123:for(J=J.trim(),_e=J.charCodeAt(0),ce=1,Le=++me;me<Ai;){switch(ae=$.charCodeAt(me)){case 123:ce++;break;case 125:ce--;break;case 47:switch(ae=$.charCodeAt(me+1)){case 42:case 47:e:{for(ht=me+1;ht<$r;++ht)switch($.charCodeAt(ht)){case 47:if(ae===42&&$.charCodeAt(ht-1)===42&&me+2!==ht){me=ht+1;break e}break;case 10:if(ae===47){me=ht+1;break e}}me=ht}}break;case 91:ae++;case 40:ae++;case 34:case 39:for(;me++<$r&&$.charCodeAt(me)!==ae;);}if(ce===0)break;me++}switch(ce=$.substring(Le,me),_e===0&&(_e=(J=J.replace(h,"").trim()).charCodeAt(0)),_e){case 64:switch(0<Xe&&(J=J.replace(d,"")),ae=J.charCodeAt(1),ae){case 100:case 109:case 115:case 45:Xe=j;break;default:Xe=Pe}if(ce=e(j,Xe,ce,ae,S+1),Le=ce.length,0<N&&(Xe=n(Pe,J,hr),En=a(3,ce,Xe,j,be,ie,Le,ae,S,X),J=Xe.join(""),En!==void 0&&(Le=(ce=En.trim()).length)===0&&(ae=0,ce="")),0<Le)switch(ae){case 115:J=J.replace(R,o);case 100:case 109:case 45:ce=J+"{"+ce+"}";break;case 107:J=J.replace(f,"$1 $2"),ce=J+"{"+ce+"}",ce=Ce===1||Ce===2&&s("@"+ce,3)?"@-webkit-"+ce+"@"+ce:"@"+ce;break;default:ce=J+ce,X===112&&(ce=(He+=ce,""))}else ce="";break;default:ce=e(j,n(j,J,hr),ce,X,S+1)}Fr+=ce,ce=hr=Xe=ht=_e=0,J="",ae=$.charCodeAt(++me);break;case 125:case 59:if(J=(0<Xe?J.replace(d,""):J).trim(),1<(Le=J.length))switch(ht===0&&(_e=J.charCodeAt(0),_e===45||96<_e&&123>_e)&&(Le=(J=J.replace(" ",":")).length),0<N&&(En=a(1,J,j,F,be,ie,He.length,X,S,X))!==void 0&&(Le=(J=En.trim()).length)===0&&(J="\0\0"),_e=J.charCodeAt(0),ae=J.charCodeAt(1),_e){case 0:break;case 64:if(ae===105||ae===99){ds+=J+$.charAt(me);break}default:J.charCodeAt(Le-1)!==58&&(He+=i(J,_e,ae,J.charCodeAt(2)))}hr=Xe=ht=_e=0,J="",ae=$.charCodeAt(++me)}}switch(ae){case 13:case 10:M===47?M=0:1+_e===0&&X!==107&&0<J.length&&(Xe=1,J+="\0"),0<N*Q&&a(0,J,j,F,be,ie,He.length,X,S,X),ie=1,be++;break;case 59:case 125:if(M+Ee+Ve+de===0){ie++;break}default:switch(ie++,Zt=$.charAt(me),ae){case 9:case 32:if(Ee+de+M===0)switch(ct){case 44:case 58:case 9:case 32:Zt="";break;default:ae!==32&&(Zt=" ")}break;case 0:Zt="\\0";break;case 12:Zt="\\f";break;case 11:Zt="\\v";break;case 38:Ee+M+de===0&&(Xe=hr=1,Zt="\f"+Zt);break;case 108:if(Ee+M+de+Oe===0&&0<ht)switch(me-ht){case 2:ct===112&&$.charCodeAt(me-3)===58&&(Oe=ct);case 8:Pt===111&&(Oe=Pt)}break;case 58:Ee+M+de===0&&(ht=me);break;case 44:M+Ve+Ee+de===0&&(Xe=1,Zt+="\r");break;case 34:case 39:M===0&&(Ee=Ee===ae?0:Ee===0?ae:Ee);break;case 91:Ee+M+Ve===0&&de++;break;case 93:Ee+M+Ve===0&&de--;break;case 41:Ee+M+de===0&&Ve--;break;case 40:if(Ee+M+de===0){if(_e===0)switch(2*ct+3*Pt){case 533:break;default:_e=1}Ve++}break;case 64:M+Ve+Ee+de+ht+ce===0&&(ce=1);break;case 42:case 47:if(!(0<Ee+de+Ve))switch(M){case 0:switch(2*ae+3*$.charCodeAt(me+1)){case 235:M=47;break;case 220:Le=me,M=42}break;case 42:ae===47&&ct===42&&Le+2!==me&&($.charCodeAt(Le+2)===33&&(He+=$.substring(Le,me+1)),Zt="",M=0)}}M===0&&(J+=Zt)}Pt=ct,ct=ae,me++}if(Le=He.length,0<Le){if(Xe=j,0<N&&(En=a(2,He,Xe,F,be,ie,Le,X,S,X),En!==void 0&&(He=En).length===0))return ds+He+Fr;if(He=Xe.join(",")+"{"+He+"}",Ce*Oe!==0){switch(Ce!==2||s(He,2)||(Oe=0),Oe){case 111:He=He.replace(v,":-moz-$1")+He;break;case 112:He=He.replace(w,"::-webkit-input-$1")+He.replace(w,"::-moz-$1")+He.replace(w,":-ms-input-$1")+He}Oe=0}}return ds+He+Fr}function n(F,j,$){var X=j.trim().split(E);j=X;var S=X.length,de=F.length;switch(de){case 0:case 1:var M=0;for(F=de===0?"":F[0]+" ";M<S;++M)j[M]=r(F,j[M],$).trim();break;default:var Ve=M=0;for(j=[];M<S;++M)for(var Ee=0;Ee<de;++Ee)j[Ve++]=r(F[Ee]+" ",X[M],$).trim()}return j}function r(F,j,$){var X=j.charCodeAt(0);switch(33>X&&(X=(j=j.trim()).charCodeAt(0)),X){case 38:return j.replace(g,"$1"+F.trim());case 58:return F.trim()+j.replace(g,"$1"+F.trim());default:if(0<1*$&&0<j.indexOf("\f"))return j.replace(g,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+j}function i(F,j,$,X){var S=F+";",de=2*j+3*$+4*X;if(de===944){F=S.indexOf(":",9)+1;var M=S.substring(F,S.length-1).trim();return M=S.substring(0,F).trim()+M+";",Ce===1||Ce===2&&s(M,1)?"-webkit-"+M+M:M}if(Ce===0||Ce===2&&!s(S,1))return S;switch(de){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(De,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return M=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+S+"-ms-flex-pack"+M+S;case 1005:return m.test(S)?S.replace(p,":-webkit-")+S.replace(p,":-moz-")+S:S;case 1e3:switch(M=S.substring(13).trim(),j=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(j)){case 226:M=S.replace(C,"tb");break;case 232:M=S.replace(C,"tb-rl");break;case 220:M=S.replace(C,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+M+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(j=(S=F).length-10,M=(S.charCodeAt(j)===33?S.substring(0,j):S).substring(F.indexOf(":",7)+1).trim(),de=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:S=S.replace(M,"-webkit-"+M)+";"+S;break;case 207:case 102:S=S.replace(M,"-webkit-"+(102<de?"inline-":"")+"box")+";"+S.replace(M,"-webkit-"+M)+";"+S.replace(M,"-ms-"+M+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return M=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+M+"-ms-flex-"+M+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(L,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(L,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(K.test(F)===!0)return(M=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?i(F.replace("stretch","fill-available"),j,$,X).replace(":fill-available",":stretch"):S.replace(M,"-webkit-"+M)+S.replace(M,"-moz-"+M.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,$+X===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+S}return S}function s(F,j){var $=F.indexOf(j===1?":":"{"),X=F.substring(0,j!==3?$:10);return $=F.substring($+1,F.length-1),V(j!==2?X:X.replace(G,"$1"),$,j)}function o(F,j){var $=i(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return $!==j+";"?$.replace(b," or ($1)").substring(4):"("+j+")"}function a(F,j,$,X,S,de,M,Ve,Ee,_e){for(var ae=0,ct=j,Pt;ae<N;++ae)switch(Pt=Ne[ae].call(c,F,ct,$,X,S,de,M,Ve,Ee,_e)){case void 0:case!1:case!0:case null:break;default:ct=Pt}if(ct!==j)return ct}function l(F){switch(F){case void 0:case null:N=Ne.length=0;break;default:if(typeof F=="function")Ne[N++]=F;else if(typeof F=="object")for(var j=0,$=F.length;j<$;++j)l(F[j]);else Q=!!F|0}return l}function u(F){return F=F.prefix,F!==void 0&&(V=null,F?typeof F!="function"?Ce=1:(Ce=2,V=F):Ce=0),u}function c(F,j){var $=F;if(33>$.charCodeAt(0)&&($=$.trim()),ye=$,$=[ye],0<N){var X=a(-1,j,$,$,be,ie,0,0,0,0);X!==void 0&&typeof X=="string"&&(j=X)}var S=e(Pe,$,j,0,0);return 0<N&&(X=a(-2,S,$,$,be,ie,S.length,0,0,0),X!==void 0&&(S=X)),ye="",Oe=0,ie=be=1,S}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,E=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,v=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,L=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,De=/([^-])(image-set\()/,ie=1,be=1,Oe=0,Ce=1,Pe=[],Ne=[],N=0,V=null,Q=0,ye="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var OF={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function LF(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var MF=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l1=LF(function(t){return MF.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Wy=qy,$F={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FF={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UF={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ky={};Ky[Wy.ForwardRef]=UF;Ky[Wy.Memo]=Bk;function u1(t){return Wy.isMemo(t)?Bk:Ky[t.$$typeof]||$F}var jF=Object.defineProperty,BF=Object.getOwnPropertyNames,c1=Object.getOwnPropertySymbols,zF=Object.getOwnPropertyDescriptor,VF=Object.getPrototypeOf,h1=Object.prototype;function zk(t,e,n){if(typeof e!="string"){if(h1){var r=VF(e);r&&r!==h1&&zk(t,r,n)}var i=BF(e);c1&&(i=i.concat(c1(e)));for(var s=u1(t),o=u1(e),a=0;a<i.length;++a){var l=i[a];if(!FF[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=zF(e,l);try{jF(t,l,u)}catch{}}}}return t}var HF=zk;const qF=xm(HF);function _r(){return(_r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var d1=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},gm=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!qy.typeOf(t)},Qc=Object.freeze([]),pi=Object.freeze({});function cl(t){return typeof t=="function"}function f1(t){return t.displayName||t.name||"Component"}function Gy(t){return t&&typeof t.styledComponentId=="string"}var ho=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qy=typeof window<"u"&&"HTMLElement"in window,WF=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function zl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var KF=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&zl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Gu=new Map,Yc=new Map,ka=1,ku=function(t){if(Gu.has(t))return Gu.get(t);for(;Yc.has(ka);)ka++;var e=ka++;return Gu.set(t,e),Yc.set(e,t),e},GF=function(t){return Yc.get(t)},QF=function(t,e){e>=ka&&(ka=e+1),Gu.set(t,e),Yc.set(e,t)},YF="style["+ho+'][data-styled-version="5.3.10"]',XF=new RegExp("^"+ho+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),JF=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},ZF=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(XF);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(QF(u,l),JF(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},eU=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Vk=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(ho))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ho,"active"),r.setAttribute("data-styled-version","5.3.10");var o=eU();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},tU=function(){function t(n){var r=this.element=Vk(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}zl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),nU=function(){function t(n){var r=this.element=Vk(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),rU=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),p1=Qy,iU={isServer:!Qy,useCSSOMInjection:!WF},Hk=function(){function t(n,r,i){n===void 0&&(n=pi),r===void 0&&(r={}),this.options=_r({},iU,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Qy&&p1&&(p1=!1,function(s){for(var o=document.querySelectorAll(YF),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ho)!=="active"&&(ZF(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return ku(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(_r({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new rU(o):s?new tU(o):new nU(o),new KF(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(ku(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ku(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(ku(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=GF(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=ho+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),sU=/(a)(d)/gi,m1=function(t){return String.fromCharCode(t+(t>25?39:97))};function ym(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=m1(e%52)+n;return(m1(e%52)+n).replace(sU,"$1-$2")}var Os=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},qk=function(t){return Os(5381,t)};function oU(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(cl(n)&&!Gy(n))return!1}return!0}var aU=qk("5.3.10"),lU=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oU(e),this.componentId=n,this.baseHash=Os(aU,n),this.baseStyle=r,Hk.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=fo(this.rules,e,n,r).join(""),a=ym(Os(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Os(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var m=fo(p,e,n,r),y=Array.isArray(m)?m.join(""):m;c=Os(c,y+d),h+=y}}if(h){var E=ym(c>>>0);if(!n.hasNameForId(i,E)){var g=r(h,"."+E,void 0,i);n.insertRules(i,E,g)}s.push(E)}}return s.join(" ")},t}(),uU=/^\s*\/\/.*$/gm,cU=[":","[",".","#"];function hU(t){var e,n,r,i,s=t===void 0?pi:t,o=s.options,a=o===void 0?pi:o,l=s.plugins,u=l===void 0?Qc:l,c=new DF(a),h=[],d=function(y){function E(g){if(g)try{y(g+"}")}catch{}}return function(g,f,w,v,C,R,b,L,G,K){switch(g){case 1:if(G===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(L===0)return f+"/*|*/";break;case 3:switch(L){case 102:case 112:return y(w[0]+f),"";default:return f+(K===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(y){h.push(y)}),p=function(y,E,g){return E===0&&cU.indexOf(g[n.length])!==-1||g.match(i)?y:"."+e};function m(y,E,g,f){f===void 0&&(f="&");var w=y.replace(uU,""),v=E&&g?g+" "+E+" { "+w+" }":w;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!E?"":E,v)}return c.use([].concat(u,[function(y,E,g){y===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,p))},d,function(y){if(y===-2){var E=h;return h=[],E}}])),m.hash=u.length?u.reduce(function(y,E){return E.name||zl(15),Os(y,E.name)},5381).toString():"",m}var Wk=Fn.createContext();Wk.Consumer;var Kk=Fn.createContext(),dU=(Kk.Consumer,new Hk),vm=hU();function fU(){return I.useContext(Wk)||dU}function pU(){return I.useContext(Kk)||vm}var mU=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=vm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return zl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=vm),this.name+e.hash},t}(),gU=/([A-Z])/,yU=/([A-Z])/g,vU=/^ms-/,wU=function(t){return"-"+t.toLowerCase()};function g1(t){return gU.test(t)?t.replace(yU,wU).replace(vU,"-ms-"):t}var y1=function(t){return t==null||t===!1||t===""};function fo(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=fo(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(y1(t))return"";if(Gy(t))return"."+t.styledComponentId;if(cl(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return fo(l,e,n,r)}var u;return t instanceof mU?n?(t.inject(n,r),t.getName(r)):t:gm(t)?function c(h,d){var p,m,y=[];for(var E in h)h.hasOwnProperty(E)&&!y1(h[E])&&(Array.isArray(h[E])&&h[E].isCss||cl(h[E])?y.push(g1(E)+":",h[E],";"):gm(h[E])?y.push.apply(y,c(h[E],E)):y.push(g1(E)+": "+(p=E,(m=h[E])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||p in OF||p.startsWith("--")?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(t):t.toString()}var v1=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function EU(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return cl(t)||gm(t)?v1(fo(d1(Qc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:v1(fo(d1(t,n)))}var _U=function(t,e,n){return n===void 0&&(n=pi),t.theme!==n.theme&&t.theme||e||n.theme},SU=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TU=/(^-|-$)/g;function Cf(t){return t.replace(SU,"-").replace(TU,"")}var CU=function(t){return ym(qk(t)>>>0)};function Iu(t){return typeof t=="string"&&!0}var wm=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},kU=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function IU(t,e,n){var r=t[n];wm(e)&&wm(r)?Gk(r,e):t[n]=e}function Gk(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(wm(o))for(var a in o)kU(a)&&IU(t,o[a],a)}return t}var Qk=Fn.createContext();Qk.Consumer;var kf={};function Yk(t,e,n){var r=Gy(t),i=!Iu(t),s=e.attrs,o=s===void 0?Qc:s,a=e.componentId,l=a===void 0?function(f,w){var v=typeof f!="string"?"sc":Cf(f);kf[v]=(kf[v]||0)+1;var C=v+"-"+CU("5.3.10"+v+kf[v]);return w?w+"-"+C:C}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Iu(f)?"styled."+f:"Styled("+f1(f)+")"}(t):u,h=e.displayName&&e.componentId?Cf(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,w,v){return t.shouldForwardProp(f,w,v)&&e.shouldForwardProp(f,w,v)}:t.shouldForwardProp);var m,y=new lU(n,h,r?t.componentStyle:void 0),E=y.isStatic&&o.length===0,g=function(f,w){return function(v,C,R,b){var L=v.attrs,G=v.componentStyle,K=v.defaultProps,De=v.foldedComponentIds,ie=v.shouldForwardProp,be=v.styledComponentId,Oe=v.target,Ce=function(X,S,de){X===void 0&&(X=pi);var M=_r({},S,{theme:X}),Ve={};return de.forEach(function(Ee){var _e,ae,ct,Pt=Ee;for(_e in cl(Pt)&&(Pt=Pt(M)),Pt)M[_e]=Ve[_e]=_e==="className"?(ae=Ve[_e],ct=Pt[_e],ae&&ct?ae+" "+ct:ae||ct):Pt[_e]}),[M,Ve]}(_U(C,I.useContext(Qk),K)||pi,C,L),Pe=Ce[0],Ne=Ce[1],N=function(X,S,de,M){var Ve=fU(),Ee=pU(),_e=S?X.generateAndInjectStyles(pi,Ve,Ee):X.generateAndInjectStyles(de,Ve,Ee);return _e}(G,b,Pe),V=R,Q=Ne.$as||C.$as||Ne.as||C.as||Oe,ye=Iu(Q),F=Ne!==C?_r({},C,{},Ne):C,j={};for(var $ in F)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?j.as=F[$]:(ie?ie($,l1,Q):!ye||l1($))&&(j[$]=F[$]));return C.style&&Ne.style!==C.style&&(j.style=_r({},C.style,{},Ne.style)),j.className=Array.prototype.concat(De,be,N!==be?N:null,C.className,Ne.className).filter(Boolean).join(" "),j.ref=V,I.createElement(Q,j)}(m,f,w,E)};return g.displayName=c,(m=Fn.forwardRef(g)).attrs=d,m.componentStyle=y,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Qc,m.styledComponentId=h,m.target=r?t.target:t,m.withComponent=function(f){var w=e.componentId,v=function(R,b){if(R==null)return{};var L,G,K={},De=Object.keys(R);for(G=0;G<De.length;G++)L=De[G],b.indexOf(L)>=0||(K[L]=R[L]);return K}(e,["componentId"]),C=w&&w+"-"+(Iu(f)?f:Cf(f1(f)));return Yk(f,_r({},v,{attrs:d,componentId:C}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?Gk({},t.defaultProps,f):f}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&qF(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Em=function(t){return function e(n,r,i){if(i===void 0&&(i=pi),!qy.isValidElementType(r))return zl(1,String(r));var s=function(){return n(r,i,EU.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,_r({},i,{},o))},s.attrs=function(o){return e(n,r,_r({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Yk,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Em[t]=Em(t)});const Ht=Em,xU=Ht.footer`
    
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
`;function AU(){return _.jsx(xU,{children:_.jsxs("p",{children:["@2023 Coordinates - Made by ",_.jsx("a",{href:"https://github.com/GuilhermeSella",children:"Guilherme Sella"})]})})}const RU=Ht.div`
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
    




`;function bU(t){const{toggleHamburguer:e,theme:n}=I.useContext(qn);return _.jsxs(RU,{className:"menu-hamburguer",theme:n,children:[_.jsx("input",{onChange:e,type:"checkbox",id:"menu-hamburguer",className:"input-menu-hamburguer"}),_.jsx("label",{htmlFor:"menu-hamburguer",children:_.jsx("div",{className:"menu",children:_.jsx("span",{className:"hamburguer"})})})]})}const PU=Ht.header`
    
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

`;function NU(){const{theme:t}=I.useContext(qn),{LogOut:e}=I.useContext(No),n=Po();return _.jsxs(PU,{theme:t,children:[_.jsx("div",{children:_.jsx(Qt,{to:"/home",children:"Coordinates"})}),_.jsxs("nav",{className:"navIcons",children:[_.jsx(Qt,{className:"button",to:"/home/account",children:_.jsx("span",{className:"material-symbols-outlined",children:"person"})}),_.jsx(Qt,{className:"button",to:"/home/saved",children:_.jsx("span",{className:"material-symbols-outlined",children:"bookmark"})}),_.jsx(Qt,{className:"button",onClick:()=>{n("/"),e()},children:_.jsx("span",{className:"material-symbols-outlined",children:"logout"})}),_.jsx("div",{className:"menuH",children:_.jsx(bU,{})})]})]})}const DU=Ht.div`
    
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
   
       

`;function OU(){const{theme:t,hamburguer:e,toggleHamburguer:n}=I.useContext(qn),{LogOut:r}=I.useContext(No),i=Po();return _.jsx(DU,{hamburguer:e,theme:t,children:_.jsxs("ul",{children:[_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"home"}),_.jsx(Qt,{to:"/home",children:"Home"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"person"}),_.jsx(Qt,{to:"/home/account",children:"Profile"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"bookmark"}),_.jsx(Qt,{to:"/home/saved",children:"Saved"})]}),_.jsxs("li",{onClick:n,children:[_.jsx("span",{className:"material-symbols-outlined",children:"logout"}),_.jsx(Qt,{onClick:()=>{i("/"),r()},children:"Log Out"})]})]})})}function LU(){const{hamburguer:t,setTheme:e}=I.useContext(qn);function n(){const r=JSON.parse(localStorage.getItem("@userStorage"));r&&e(r.theme)}return I.useEffect(()=>{n()},[]),_.jsxs(_.Fragment,{children:[_.jsx(NU,{}),t==="disable"?_.jsxs(_.Fragment,{children:[_.jsx(pF,{}),_.jsx(AU,{})]}):_.jsx(OU,{})]})}const MU=Ht.div`
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
`;function $U(t){const{theme:e}=I.useContext(qn);return _.jsxs(MU,{theme:e,children:[_.jsxs("h1",{children:["Descubra a sua exata ",_.jsx("b",{children:"coordenada"})," e veja quando quiser!"]}),_.jsx(Qt,{to:"/home/coordinates",className:"button",children:"Try Now"})]})}const FU="/app_coordinates/assets/armazenamento-09971877.svg",UU="/app_coordinates/assets/googleapi-1c30252a.svg",jU="/app_coordinates/assets/geolocalizacao-08b5f0ef.svg",BU=Ht.section`
    width: 100%;
   
    background-color: #101010ed;
    display: flex;
    justify-content: space-evenly;
    
    gap: 20px;
    align-items: center;
    padding:  200px 10px;
    flex-wrap: wrap;
`,If=Ht.div`
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
`;function zU(){return _.jsxs(BU,{children:[_.jsxs(If,{children:[_.jsx("img",{src:FU,alt:""}),_.jsx("h2",{children:"Armazenamento"}),_.jsx("p",{children:"Armazene os seus endereços e suas coordenadas para acessar quando quiser."})]}),_.jsxs(If,{children:[_.jsx("img",{src:jU,alt:""}),_.jsx("h2",{children:"Geolocalização"}),_.jsx("p",{children:"Tenha em mãos as exatas coordenadas geográficas que você procura"})]}),_.jsxs(If,{children:[_.jsx("img",{src:UU,alt:""}),_.jsx("h2",{children:"Google API"}),_.jsx("p",{children:"Esse projeto utiliza Google API para fornecer a geolocalização que você deseja."})]})]})}function VU(){return _.jsxs(_.Fragment,{children:[_.jsx($U,{}),_.jsx(zU,{})]})}const HU=Ht.div`



    background-color:${t=>t.theme==="light"?"white":"#0a0a0aea"} ;
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
    

    
`;function _m(t,e){return _m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_m(t,e)}function fd(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_m(t,e)}var pd=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(r){var i=this,s=r||function(){};return this.listeners.push(s),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(o){return o!==s}),i.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}();function Ie(){return Ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ie.apply(this,arguments)}var Xk=typeof window>"u";function Wt(){}function qU(t,e){return typeof t=="function"?t(e):t}function WU(t){return typeof t=="number"&&t>=0&&t!==1/0}function Xc(t){return Array.isArray(t)?t:[t]}function KU(t,e){return Math.max(t+(e||0)-Date.now(),0)}function xf(t,e,n){return md(t)?typeof e=="function"?Ie({},n,{queryKey:t,queryFn:e}):Ie({},e,{queryKey:t}):t}function Hr(t,e,n){return md(t)?[Ie({},e,{queryKey:t}),n]:[t||{},e]}function GU(t,e){if(t===!0&&e===!0||t==null&&e==null)return"all";if(t===!1&&e===!1)return"none";var n=t??!e;return n?"active":"inactive"}function w1(t,e){var n=t.active,r=t.exact,i=t.fetching,s=t.inactive,o=t.predicate,a=t.queryKey,l=t.stale;if(md(a)){if(r){if(e.queryHash!==Yy(a,e.options))return!1}else if(!Jc(e.queryKey,a))return!1}var u=GU(n,s);if(u==="none")return!1;if(u!=="all"){var c=e.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i=="boolean"&&e.isFetching()!==i||o&&!o(e))}function E1(t,e){var n=t.exact,r=t.fetching,i=t.predicate,s=t.mutationKey;if(md(s)){if(!e.options.mutationKey)return!1;if(n){if(Ui(e.options.mutationKey)!==Ui(s))return!1}else if(!Jc(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Yy(t,e){var n=(e==null?void 0:e.queryKeyHashFn)||Ui;return n(t)}function Ui(t){var e=Xc(t);return QU(e)}function QU(t){return JSON.stringify(t,function(e,n){return Sm(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Jc(t,e){return Jk(Xc(t),Xc(e))}function Jk(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(function(n){return!Jk(t[n],e[n])}):!1}function Zk(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||Sm(t)&&Sm(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{},a=0,l=0;l<s;l++){var u=n?l:i[l];o[u]=Zk(t[u],e[u]),o[u]===t[u]&&a++}return r===s&&a===r?t:o}return e}function Sm(t){if(!_1(t))return!1;var e=t.constructor;if(typeof e>"u")return!0;var n=e.prototype;return!(!_1(n)||!n.hasOwnProperty("isPrototypeOf"))}function _1(t){return Object.prototype.toString.call(t)==="[object Object]"}function md(t){return typeof t=="string"||Array.isArray(t)}function YU(t){return new Promise(function(e){setTimeout(e,t)})}function S1(t){Promise.resolve().then(t).catch(function(e){return setTimeout(function(){throw e})})}function eI(){if(typeof AbortController=="function")return new AbortController}var XU=function(t){fd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!Xk&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setFocused(a):o.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},e}(pd),Qu=new XU,JU=function(t){fd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!Xk&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setOnline(a):o.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},e}(pd),Yu=new JU;function ZU(t){return Math.min(1e3*Math.pow(2,t),3e4)}function Zc(t){return typeof(t==null?void 0:t.cancel)=="function"}var tI=function(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent};function Af(t){return t instanceof tI}var nI=function(e){var n=this,r=!1,i,s,o,a;this.abort=e.abort,this.cancel=function(d){return i==null?void 0:i(d)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return s==null?void 0:s()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,p){o=d,a=p});var l=function(p){n.isResolved||(n.isResolved=!0,e.onSuccess==null||e.onSuccess(p),s==null||s(),o(p))},u=function(p){n.isResolved||(n.isResolved=!0,e.onError==null||e.onError(p),s==null||s(),a(p))},c=function(){return new Promise(function(p){s=p,n.isPaused=!0,e.onPause==null||e.onPause()}).then(function(){s=void 0,n.isPaused=!1,e.onContinue==null||e.onContinue()})},h=function d(){if(!n.isResolved){var p;try{p=e.fn()}catch(m){p=Promise.reject(m)}i=function(y){if(!n.isResolved&&(u(new tI(y)),n.abort==null||n.abort(),Zc(p)))try{p.cancel()}catch{}},n.isTransportCancelable=Zc(p),Promise.resolve(p).then(l).catch(function(m){var y,E;if(!n.isResolved){var g=(y=e.retry)!=null?y:3,f=(E=e.retryDelay)!=null?E:ZU,w=typeof f=="function"?f(n.failureCount,m):f,v=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,m);if(r||!v){u(m);return}n.failureCount++,e.onFail==null||e.onFail(n.failureCount,m),YU(w).then(function(){if(!Qu.isFocused()||!Yu.isOnline())return c()}).then(function(){r?u(m):d()})}})}};h()},e4=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var e=t.prototype;return e.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},e.schedule=function(r){var i=this;this.transactions?this.queue.push(r):S1(function(){i.notifyFn(r)})},e.batchCalls=function(r){var i=this;return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];i.schedule(function(){r.apply(void 0,o)})}},e.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&S1(function(){r.batchNotifyFn(function(){i.forEach(function(s){r.notifyFn(s)})})})},e.setNotifyFunction=function(r){this.notifyFn=r},e.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},t}(),It=new e4,rI=console;function iI(){return rI}function t4(t){rI=t}var n4=function(){function t(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var e=t.prototype;return e.setOptions=function(r){var i;this.options=Ie({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},e.setDefaultOptions=function(r){this.defaultOptions=r},e.scheduleGc=function(){var r=this;this.clearGcTimeout(),WU(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},e.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},e.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},e.setData=function(r,i){var s,o,a=this.state.data,l=qU(r,a);return(s=(o=this.options).isDataEqual)!=null&&s.call(o,a,l)?l=a:this.options.structuralSharing!==!1&&(l=Zk(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},e.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},e.cancel=function(r){var i,s=this.promise;return(i=this.retryer)==null||i.cancel(r),s?s.then(Wt).catch(Wt):Promise.resolve()},e.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},e.reset=function(){this.destroy(),this.setState(this.initialState)},e.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},e.isFetching=function(){return this.state.isFetching},e.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},e.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!KU(this.state.dataUpdatedAt,r)},e.onFocus=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.onOnline=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},e.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},e.getObserversCount=function(){return this.observers.length},e.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},e.fetch=function(r,i){var s=this,o,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(f){return f.options.queryFn});c&&this.setOptions(c.options)}var h=Xc(this.queryKey),d=eI(),p={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(p,"signal",{enumerable:!0,get:function(){if(d)return s.abortSignalConsumed=!0,d.signal}});var m=function(){return s.options.queryFn?(s.abortSignalConsumed=!1,s.options.queryFn(p)):Promise.reject("Missing queryFn")},y={fetchOptions:i,options:this.options,queryKey:h,state:this.state,fetchFn:m,meta:this.meta};if((o=this.options.behavior)!=null&&o.onFetch){var E;(E=this.options.behavior)==null||E.onFetch(y)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=y.fetchOptions)==null?void 0:a.meta)){var g;this.dispatch({type:"fetch",meta:(g=y.fetchOptions)==null?void 0:g.meta})}return this.retryer=new nI({fn:y.fetchFn,abort:d==null||(l=d.abort)==null?void 0:l.bind(d),onSuccess:function(w){s.setData(w),s.cache.config.onSuccess==null||s.cache.config.onSuccess(w,s),s.cacheTime===0&&s.optionalRemove()},onError:function(w){Af(w)&&w.silent||s.dispatch({type:"error",error:w}),Af(w)||(s.cache.config.onError==null||s.cache.config.onError(w,s),iI().error(w)),s.cacheTime===0&&s.optionalRemove()},onFail:function(){s.dispatch({type:"failed"})},onPause:function(){s.dispatch({type:"pause"})},onContinue:function(){s.dispatch({type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay}),this.promise=this.retryer.promise,this.promise},e.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),It.batch(function(){i.observers.forEach(function(s){s.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},e.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,s=typeof r.initialData<"u",o=s?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},e.reducer=function(r,i){var s,o;switch(i.type){case"failed":return Ie({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ie({},r,{isPaused:!0});case"continue":return Ie({},r,{isPaused:!1});case"fetch":return Ie({},r,{fetchFailureCount:0,fetchMeta:(s=i.meta)!=null?s:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ie({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=i.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return Af(a)&&a.revert&&this.revertState?Ie({},this.revertState):Ie({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ie({},r,{isInvalidated:!0});case"setState":return Ie({},r,i.state);default:return r}},t}(),r4=function(t){fd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=e.prototype;return n.build=function(i,s,o){var a,l=s.queryKey,u=(a=s.queryHash)!=null?a:Yy(l,s),c=this.get(u);return c||(c=new n4({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(s),state:o,defaultOptions:i.getQueryDefaults(l),meta:s.meta}),this.add(c)),c},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var s=this.queriesMap[i.queryHash];s&&(i.destroy(),this.queries=this.queries.filter(function(o){return o!==i}),s===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;It.batch(function(){i.queries.forEach(function(s){i.remove(s)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,s){var o=Hr(i,s),a=o[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return w1(a,l)})},n.findAll=function(i,s){var o=Hr(i,s),a=o[0];return Object.keys(a).length>0?this.queries.filter(function(l){return w1(a,l)}):this.queries},n.notify=function(i){var s=this;It.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){var i=this;It.batch(function(){i.queries.forEach(function(s){s.onFocus()})})},n.onOnline=function(){var i=this;It.batch(function(){i.queries.forEach(function(s){s.onOnline()})})},e}(pd),i4=function(){function t(n){this.options=Ie({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||s4(),this.meta=n.meta}var e=t.prototype;return e.setState=function(r){this.dispatch({type:"setState",state:r})},e.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},e.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Wt).catch(Wt)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var r=this,i,s=this.state.status==="loading",o=Promise.resolve();return s||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),o.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),iI().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},e.executeMutation=function(){var r=this,i;return this.retryer=new nI({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(r){var i=this;this.state=o4(this.state,r),It.batch(function(){i.observers.forEach(function(s){s.onMutationUpdate(r)}),i.mutationCache.notify(i)})},t}();function s4(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function o4(t,e){switch(e.type){case"failed":return Ie({},t,{failureCount:t.failureCount+1});case"pause":return Ie({},t,{isPaused:!0});case"continue":return Ie({},t,{isPaused:!1});case"loading":return Ie({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return Ie({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return Ie({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ie({},t,e.state);default:return t}}var a4=function(t){fd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=e.prototype;return n.build=function(i,s,o){var a=new i4({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(s),state:o,defaultOptions:s.mutationKey?i.getMutationDefaults(s.mutationKey):void 0,meta:s.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(s){return s!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;It.batch(function(){i.mutations.forEach(function(s){i.remove(s)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(s){return E1(i,s)})},n.findAll=function(i){return this.mutations.filter(function(s){return E1(i,s)})},n.notify=function(i){var s=this;It.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(s){return s.state.isPaused});return It.batch(function(){return i.reduce(function(s,o){return s.then(function(){return o.continue().catch(Wt)})},Promise.resolve())})},e}(pd);function l4(){return{onFetch:function(e){e.fetchFn=function(){var n,r,i,s,o,a,l=(n=e.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=e.fetchOptions)==null||(s=i.meta)==null?void 0:s.fetchMore,c=u==null?void 0:u.pageParam,h=(u==null?void 0:u.direction)==="forward",d=(u==null?void 0:u.direction)==="backward",p=((o=e.state.data)==null?void 0:o.pages)||[],m=((a=e.state.data)==null?void 0:a.pageParams)||[],y=eI(),E=y==null?void 0:y.signal,g=m,f=!1,w=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},v=function(Oe,Ce,Pe,Ne){return g=Ne?[Ce].concat(g):[].concat(g,[Ce]),Ne?[Pe].concat(Oe):[].concat(Oe,[Pe])},C=function(Oe,Ce,Pe,Ne){if(f)return Promise.reject("Cancelled");if(typeof Pe>"u"&&!Ce&&Oe.length)return Promise.resolve(Oe);var N={queryKey:e.queryKey,signal:E,pageParam:Pe,meta:e.meta},V=w(N),Q=Promise.resolve(V).then(function(F){return v(Oe,Pe,F,Ne)});if(Zc(V)){var ye=Q;ye.cancel=V.cancel}return Q},R;if(!p.length)R=C([]);else if(h){var b=typeof c<"u",L=b?c:T1(e.options,p);R=C(p,b,L)}else if(d){var G=typeof c<"u",K=G?c:u4(e.options,p);R=C(p,G,K,!0)}else(function(){g=[];var be=typeof e.options.getNextPageParam>"u",Oe=l&&p[0]?l(p[0],0,p):!0;R=Oe?C([],be,m[0]):Promise.resolve(v([],m[0],p[0]));for(var Ce=function(N){R=R.then(function(V){var Q=l&&p[N]?l(p[N],N,p):!0;if(Q){var ye=be?m[N]:T1(e.options,V);return C(V,be,ye)}return Promise.resolve(v(V,m[N],p[N]))})},Pe=1;Pe<p.length;Pe++)Ce(Pe)})();var De=R.then(function(be){return{pages:be,pageParams:g}}),ie=De;return ie.cancel=function(){f=!0,y==null||y.abort(),Zc(R)&&R.cancel()},De}}}}function T1(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function u4(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}var c4=function(){function t(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new r4,this.mutationCache=n.mutationCache||new a4,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var e=t.prototype;return e.mount=function(){var r=this;this.unsubscribeFocus=Qu.subscribe(function(){Qu.isFocused()&&Yu.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Yu.subscribe(function(){Qu.isFocused()&&Yu.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},e.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},e.isFetching=function(r,i){var s=Hr(r,i),o=s[0];return o.fetching=!0,this.queryCache.findAll(o).length},e.isMutating=function(r){return this.mutationCache.findAll(Ie({},r,{fetching:!0})).length},e.getQueryData=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state.data},e.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var s=i.queryKey,o=i.state,a=o.data;return[s,a]})},e.setQueryData=function(r,i,s){var o=xf(r),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(i,s)},e.setQueriesData=function(r,i,s){var o=this;return It.batch(function(){return o.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,o.setQueryData(l,i,s)]})})},e.getQueryState=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state},e.removeQueries=function(r,i){var s=Hr(r,i),o=s[0],a=this.queryCache;It.batch(function(){a.findAll(o).forEach(function(l){a.remove(l)})})},e.resetQueries=function(r,i,s){var o=this,a=Hr(r,i,s),l=a[0],u=a[1],c=this.queryCache,h=Ie({},l,{active:!0});return It.batch(function(){return c.findAll(l).forEach(function(d){d.reset()}),o.refetchQueries(h,u)})},e.cancelQueries=function(r,i,s){var o=this,a=Hr(r,i,s),l=a[0],u=a[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var h=It.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.cancel(c)})});return Promise.all(h).then(Wt).catch(Wt)},e.invalidateQueries=function(r,i,s){var o,a,l,u=this,c=Hr(r,i,s),h=c[0],d=c[1],p=Ie({},h,{active:(o=(a=h.refetchActive)!=null?a:h.active)!=null?o:!0,inactive:(l=h.refetchInactive)!=null?l:!1});return It.batch(function(){return u.queryCache.findAll(h).forEach(function(m){m.invalidate()}),u.refetchQueries(p,d)})},e.refetchQueries=function(r,i,s){var o=this,a=Hr(r,i,s),l=a[0],u=a[1],c=It.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.fetch(void 0,Ie({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),h=Promise.all(c).then(Wt);return u!=null&&u.throwOnError||(h=h.catch(Wt)),h},e.fetchQuery=function(r,i,s){var o=xf(r,i,s),a=this.defaultQueryOptions(o);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},e.prefetchQuery=function(r,i,s){return this.fetchQuery(r,i,s).then(Wt).catch(Wt)},e.fetchInfiniteQuery=function(r,i,s){var o=xf(r,i,s);return o.behavior=l4(),this.fetchQuery(o)},e.prefetchInfiniteQuery=function(r,i,s){return this.fetchInfiniteQuery(r,i,s).then(Wt).catch(Wt)},e.cancelMutations=function(){var r=this,i=It.batch(function(){return r.mutationCache.getAll().map(function(s){return s.cancel()})});return Promise.all(i).then(Wt).catch(Wt)},e.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},e.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},e.getQueryCache=function(){return this.queryCache},e.getMutationCache=function(){return this.mutationCache},e.getDefaultOptions=function(){return this.defaultOptions},e.setDefaultOptions=function(r){this.defaultOptions=r},e.setQueryDefaults=function(r,i){var s=this.queryDefaults.find(function(o){return Ui(r)===Ui(o.queryKey)});s?s.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},e.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(s){return Jc(r,s.queryKey)}))==null?void 0:i.defaultOptions:void 0},e.setMutationDefaults=function(r,i){var s=this.mutationDefaults.find(function(o){return Ui(r)===Ui(o.mutationKey)});s?s.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},e.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(s){return Jc(r,s.mutationKey)}))==null?void 0:i.defaultOptions:void 0},e.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=Ie({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Yy(i.queryKey,i)),i},e.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},e.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:Ie({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},e.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},t}(),h4=tR.unstable_batchedUpdates;It.setBatchNotifyFunction(h4);var d4=console;t4(d4);var C1=Fn.createContext(void 0),f4=Fn.createContext(!1);function p4(t){return t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=C1),window.ReactQueryClientContext):C1}var m4=function(e){var n=e.client,r=e.contextSharing,i=r===void 0?!1:r,s=e.children;Fn.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var o=p4(i);return Fn.createElement(f4.Provider,{value:i},Fn.createElement(o.Provider,{value:n},s))};const g4="/app_coordinates/assets/Loading-aa4d524e.svg";function sI(t,e){return function(){return t.apply(e,arguments)}}const{toString:y4}=Object.prototype,{getPrototypeOf:Xy}=Object,gd=(t=>e=>{const n=y4.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),cr=t=>(t=t.toLowerCase(),e=>gd(e)===t),yd=t=>e=>typeof e===t,{isArray:Do}=Array,hl=yd("undefined");function v4(t){return t!==null&&!hl(t)&&t.constructor!==null&&!hl(t.constructor)&&bn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const oI=cr("ArrayBuffer");function w4(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&oI(t.buffer),e}const E4=yd("string"),bn=yd("function"),aI=yd("number"),vd=t=>t!==null&&typeof t=="object",_4=t=>t===!0||t===!1,Xu=t=>{if(gd(t)!=="object")return!1;const e=Xy(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},S4=cr("Date"),T4=cr("File"),C4=cr("Blob"),k4=cr("FileList"),I4=t=>vd(t)&&bn(t.pipe),x4=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bn(t.append)&&((e=gd(t))==="formdata"||e==="object"&&bn(t.toString)&&t.toString()==="[object FormData]"))},A4=cr("URLSearchParams"),R4=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Do(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function lI(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const uI=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),cI=t=>!hl(t)&&t!==uI;function Tm(){const{caseless:t}=cI(this)&&this||{},e={},n=(r,i)=>{const s=t&&lI(e,i)||i;Xu(e[s])&&Xu(r)?e[s]=Tm(e[s],r):Xu(r)?e[s]=Tm({},r):Do(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Vl(arguments[r],n);return e}const b4=(t,e,n,{allOwnKeys:r}={})=>(Vl(e,(i,s)=>{n&&bn(i)?t[s]=sI(i,n):t[s]=i},{allOwnKeys:r}),t),P4=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),N4=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},D4=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Xy(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},O4=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},L4=t=>{if(!t)return null;if(Do(t))return t;let e=t.length;if(!aI(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},M4=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Xy(Uint8Array)),$4=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},F4=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},U4=cr("HTMLFormElement"),j4=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),k1=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),B4=cr("RegExp"),hI=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Vl(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},z4=t=>{hI(t,(e,n)=>{if(bn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(bn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},V4=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Do(t)?r(t):r(String(t).split(e)),n},H4=()=>{},q4=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Rf="abcdefghijklmnopqrstuvwxyz",I1="0123456789",dI={DIGIT:I1,ALPHA:Rf,ALPHA_DIGIT:Rf+Rf.toUpperCase()+I1},W4=(t=16,e=dI.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function K4(t){return!!(t&&bn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const G4=t=>{const e=new Array(10),n=(r,i)=>{if(vd(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Do(r)?[]:{};return Vl(r,(o,a)=>{const l=n(o,i+1);!hl(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},Q4=cr("AsyncFunction"),Y4=t=>t&&(vd(t)||bn(t))&&bn(t.then)&&bn(t.catch),x={isArray:Do,isArrayBuffer:oI,isBuffer:v4,isFormData:x4,isArrayBufferView:w4,isString:E4,isNumber:aI,isBoolean:_4,isObject:vd,isPlainObject:Xu,isUndefined:hl,isDate:S4,isFile:T4,isBlob:C4,isRegExp:B4,isFunction:bn,isStream:I4,isURLSearchParams:A4,isTypedArray:M4,isFileList:k4,forEach:Vl,merge:Tm,extend:b4,trim:R4,stripBOM:P4,inherits:N4,toFlatObject:D4,kindOf:gd,kindOfTest:cr,endsWith:O4,toArray:L4,forEachEntry:$4,matchAll:F4,isHTMLForm:U4,hasOwnProperty:k1,hasOwnProp:k1,reduceDescriptors:hI,freezeMethods:z4,toObjectSet:V4,toCamelCase:j4,noop:H4,toFiniteNumber:q4,findKey:lI,global:uI,isContextDefined:cI,ALPHABET:dI,generateString:W4,isSpecCompliantForm:K4,toJSONObject:G4,isAsyncFn:Q4,isThenable:Y4};function ve(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}x.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fI=ve.prototype,pI={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{pI[t]={value:t}});Object.defineProperties(ve,pI);Object.defineProperty(fI,"isAxiosError",{value:!0});ve.from=(t,e,n,r,i,s)=>{const o=Object.create(fI);return x.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ve.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const X4=null;function Cm(t){return x.isPlainObject(t)||x.isArray(t)}function mI(t){return x.endsWith(t,"[]")?t.slice(0,-2):t}function x1(t,e,n){return t?t.concat(e).map(function(i,s){return i=mI(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function J4(t){return x.isArray(t)&&!t.some(Cm)}const Z4=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function wd(t,e,n){if(!x.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!x.isUndefined(E[y])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(x.isDate(m))return m.toISOString();if(!l&&x.isBlob(m))throw new ve("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(m)||x.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,y,E){let g=m;if(m&&!E&&typeof m=="object"){if(x.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(x.isArray(m)&&J4(m)||(x.isFileList(m)||x.endsWith(y,"[]"))&&(g=x.toArray(m)))return y=mI(y),g.forEach(function(w,v){!(x.isUndefined(w)||w===null)&&e.append(o===!0?x1([y],v,s):o===null?y:y+"[]",u(w))}),!1}return Cm(m)?!0:(e.append(x1(E,y,s),u(m)),!1)}const h=[],d=Object.assign(Z4,{defaultVisitor:c,convertValue:u,isVisitable:Cm});function p(m,y){if(!x.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(m),x.forEach(m,function(g,f){(!(x.isUndefined(g)||g===null)&&i.call(e,g,x.isString(f)?f.trim():f,y,d))===!0&&p(g,y?y.concat(f):[f])}),h.pop()}}if(!x.isObject(t))throw new TypeError("data must be an object");return p(t),e}function A1(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Jy(t,e){this._pairs=[],t&&wd(t,this,e)}const gI=Jy.prototype;gI.append=function(e,n){this._pairs.push([e,n])};gI.toString=function(e){const n=e?function(r){return e.call(this,r,A1)}:A1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ej(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yI(t,e,n){if(!e)return t;const r=n&&n.encode||ej,i=n&&n.serialize;let s;if(i?s=i(e,n):s=x.isURLSearchParams(e)?e.toString():new Jy(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class tj{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(r){r!==null&&e(r)})}}const R1=tj,vI={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nj=typeof URLSearchParams<"u"?URLSearchParams:Jy,rj=typeof FormData<"u"?FormData:null,ij=typeof Blob<"u"?Blob:null,sj=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),oj=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),tr={isBrowser:!0,classes:{URLSearchParams:nj,FormData:rj,Blob:ij},isStandardBrowserEnv:sj,isStandardBrowserWebWorkerEnv:oj,protocols:["http","https","file","blob","url","data"]};function aj(t,e){return wd(t,new tr.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return tr.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function lj(t){return x.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function uj(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function wI(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&x.isArray(i)?i.length:o,l?(x.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!x.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&x.isArray(i[o])&&(i[o]=uj(i[o])),!a)}if(x.isFormData(t)&&x.isFunction(t.entries)){const n={};return x.forEachEntry(t,(r,i)=>{e(lj(r),i,n,0)}),n}return null}const cj={"Content-Type":void 0};function hj(t,e,n){if(x.isString(t))try{return(e||JSON.parse)(t),x.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ed={transitional:vI,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=x.isObject(e);if(s&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return i&&i?JSON.stringify(wI(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return aj(e,this.formSerializer).toString();if((a=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return wd(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),hj(e)):e}],transformResponse:[function(e){const n=this.transitional||Ed.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&x.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ve.from(a,ve.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tr.classes.FormData,Blob:tr.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};x.forEach(["delete","get","head"],function(e){Ed.headers[e]={}});x.forEach(["post","put","patch"],function(e){Ed.headers[e]=x.merge(cj)});const Zy=Ed,dj=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fj=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&dj[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},b1=Symbol("internals");function Yo(t){return t&&String(t).trim().toLowerCase()}function Ju(t){return t===!1||t==null?t:x.isArray(t)?t.map(Ju):String(t)}function pj(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const mj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function bf(t,e,n,r,i){if(x.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!x.isString(e)){if(x.isString(r))return e.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(e)}}function gj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function yj(t,e){const n=x.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class _d{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=Yo(l);if(!c)throw new Error("header name must be a non-empty string");const h=x.findKey(i,c);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||l]=Ju(a))}const o=(a,l)=>x.forEach(a,(u,c)=>s(u,c,l));return x.isPlainObject(e)||e instanceof this.constructor?o(e,n):x.isString(e)&&(e=e.trim())&&!mj(e)?o(fj(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Yo(e),e){const r=x.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return pj(i);if(x.isFunction(n))return n.call(this,i,r);if(x.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Yo(e),e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||bf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Yo(o),o){const a=x.findKey(r,o);a&&(!n||bf(r,r[a],a,n))&&(delete r[a],i=!0)}}return x.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||bf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return x.forEach(this,(i,s)=>{const o=x.findKey(r,s);if(o){n[o]=Ju(i),delete n[s];return}const a=e?gj(s):String(s).trim();a!==s&&delete n[s],n[a]=Ju(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return x.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[b1]=this[b1]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Yo(o);r[a]||(yj(i,o),r[a]=!0)}return x.isArray(e)?e.forEach(s):s(e),this}}_d.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.freezeMethods(_d.prototype);x.freezeMethods(_d);const Cr=_d;function Pf(t,e){const n=this||Zy,r=e||n,i=Cr.from(r.headers);let s=r.data;return x.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function EI(t){return!!(t&&t.__CANCEL__)}function Hl(t,e,n){ve.call(this,t??"canceled",ve.ERR_CANCELED,e,n),this.name="CanceledError"}x.inherits(Hl,ve,{__CANCEL__:!0});function vj(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ve("Request failed with status code "+n.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const wj=tr.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),x.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),x.isString(s)&&l.push("path="+s),x.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ej(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function _j(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function _I(t,e){return t&&!Ej(e)?_j(t,e):e}const Sj=tr.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=x.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Tj(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Cj(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const p=c&&u-c;return p?Math.round(d*1e3/p):void 0}}function P1(t,e){let n=0;const r=Cj(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const kj=typeof XMLHttpRequest<"u",Ij=kj&&function(t){return new Promise(function(n,r){let i=t.data;const s=Cr.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}x.isFormData(i)&&(tr.isStandardBrowserEnv||tr.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+m))}const c=_I(t.baseURL,t.url);u.open(t.method.toUpperCase(),yI(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const p=Cr.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:p,config:t,request:u};vj(function(g){n(g),l()},function(g){r(g),l()},y),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new ve("Request aborted",ve.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new ve("Network Error",ve.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let m=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const y=t.transitional||vI;t.timeoutErrorMessage&&(m=t.timeoutErrorMessage),r(new ve(m,y.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,t,u)),u=null},tr.isStandardBrowserEnv){const p=(t.withCredentials||Sj(c))&&t.xsrfCookieName&&wj.read(t.xsrfCookieName);p&&s.set(t.xsrfHeaderName,p)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&x.forEach(s.toJSON(),function(m,y){u.setRequestHeader(y,m)}),x.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",P1(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",P1(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=p=>{u&&(r(!p||p.type?new Hl(null,t,u):p),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=Tj(c);if(d&&tr.protocols.indexOf(d)===-1){r(new ve("Unsupported protocol "+d+":",ve.ERR_BAD_REQUEST,t));return}u.send(i||null)})},Zu={http:X4,xhr:Ij};x.forEach(Zu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const xj={getAdapter:t=>{t=x.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=x.isString(n)?Zu[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ve(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(x.hasOwnProp(Zu,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!x.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Zu};function Nf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Hl(null,t)}function N1(t){return Nf(t),t.headers=Cr.from(t.headers),t.data=Pf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),xj.getAdapter(t.adapter||Zy.adapter)(t).then(function(r){return Nf(t),r.data=Pf.call(t,t.transformResponse,r),r.headers=Cr.from(r.headers),r},function(r){return EI(r)||(Nf(t),r&&r.response&&(r.response.data=Pf.call(t,t.transformResponse,r.response),r.response.headers=Cr.from(r.response.headers))),Promise.reject(r)})}const D1=t=>t instanceof Cr?t.toJSON():t;function po(t,e){e=e||{};const n={};function r(u,c,h){return x.isPlainObject(u)&&x.isPlainObject(c)?x.merge.call({caseless:h},u,c):x.isPlainObject(c)?x.merge({},c):x.isArray(c)?c.slice():c}function i(u,c,h){if(x.isUndefined(c)){if(!x.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function s(u,c){if(!x.isUndefined(c))return r(void 0,c)}function o(u,c){if(x.isUndefined(c)){if(!x.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,h){if(h in e)return r(u,c);if(h in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(D1(u),D1(c),!0)};return x.forEach(Object.keys(Object.assign({},t,e)),function(c){const h=l[c]||i,d=h(t[c],e[c],c);x.isUndefined(d)&&h!==a||(n[c]=d)}),n}const SI="1.4.0",ev={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ev[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const O1={};ev.transitional=function(e,n,r){function i(s,o){return"[Axios v"+SI+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ve(i(o," has been removed"+(n?" in "+n:"")),ve.ERR_DEPRECATED);return n&&!O1[o]&&(O1[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Aj(t,e,n){if(typeof t!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ve("option "+s+" must be "+l,ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ve("Unknown option "+s,ve.ERR_BAD_OPTION)}}const km={assertOptions:Aj,validators:ev},Br=km.validators;class eh{constructor(e){this.defaults=e,this.interceptors={request:new R1,response:new R1}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=po(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&km.assertOptions(r,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1),i!=null&&(x.isFunction(i)?n.paramsSerializer={serialize:i}:km.assertOptions(i,{encode:Br.function,serialize:Br.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&x.merge(s.common,s[n.method]),o&&x.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=Cr.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,h=0,d;if(!l){const m=[N1.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),d=m.length,c=Promise.resolve(n);h<d;)c=c.then(m[h++],m[h++]);return c}d=a.length;let p=n;for(h=0;h<d;){const m=a[h++],y=a[h++];try{p=m(p)}catch(E){y.call(this,E);break}}try{c=N1.call(this,p)}catch(m){return Promise.reject(m)}for(h=0,d=u.length;h<d;)c=c.then(u[h++],u[h++]);return c}getUri(e){e=po(this.defaults,e);const n=_I(e.baseURL,e.url);return yI(n,e.params,e.paramsSerializer)}}x.forEach(["delete","get","head","options"],function(e){eh.prototype[e]=function(n,r){return this.request(po(r||{},{method:e,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(po(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}eh.prototype[e]=n(),eh.prototype[e+"Form"]=n(!0)});const ec=eh;class tv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Hl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new tv(function(i){e=i}),cancel:e}}}const Rj=tv;function bj(t){return function(n){return t.apply(null,n)}}function Pj(t){return x.isObject(t)&&t.isAxiosError===!0}const Im={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Im).forEach(([t,e])=>{Im[e]=t});const Nj=Im;function TI(t){const e=new ec(t),n=sI(ec.prototype.request,e);return x.extend(n,ec.prototype,e,{allOwnKeys:!0}),x.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return TI(po(t,i))},n}const gt=TI(Zy);gt.Axios=ec;gt.CanceledError=Hl;gt.CancelToken=Rj;gt.isCancel=EI;gt.VERSION=SI;gt.toFormData=wd;gt.AxiosError=ve;gt.Cancel=gt.CanceledError;gt.all=function(e){return Promise.all(e)};gt.spread=bj;gt.isAxiosError=Pj;gt.mergeConfig=po;gt.AxiosHeaders=Cr;gt.formToJSON=t=>wI(x.isHTMLForm(t)?new FormData(t):t);gt.HttpStatusCode=Nj;gt.default=gt;const Dj=gt;function Oj(){const{theme:t}=I.useContext(qn),[e,n]=I.useState(""),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(!1);async function h(y){c(!0);let E;Dj.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${y}&key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8`).then(g=>{console.log(g),E=g.data.results[0].geometry.location,i(E.lat),o(E.lng),d(y)})}const d=async y=>{l(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVP34rrUDy5SUbq9P0n75CWNDcO92Dt8&q=${y}`),c(!1)};async function p(y){y.preventDefault(),h(e)}async function m(){const y=JSON.parse(localStorage.getItem("@userStorage"));await LO(mC(is,"coordinates"),{adress:e,lat:r,lng:s,srcMap:a,userId:y.uid}).then(()=>{n(""),l(""),i(""),o("")})}return _.jsxs(HU,{theme:t,children:[_.jsx("div",{className:"formulario",children:_.jsxs("form",{onSubmit:p,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Digite um endereço:"}),_.jsx("input",{type:"text",name:"",id:"",value:e,onChange:y=>{n(y.target.value),l(""),i(""),o("")}})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Latitude"}),_.jsx("input",{type:"text",name:"",value:r,readOnly:!0,className:"readOnly"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Longitude"}),_.jsx("input",{type:"text",name:"",value:s,readOnly:!0,className:"readOnly"})]}),_.jsx("button",{type:"submit",children:u===!1?"Buscar":"Carregando..."})]})}),_.jsxs("div",{className:"divImg",children:[_.jsx("iframe",{width:a===""?280:320,height:a===""?280:320,src:a===""?g4:a,frameBorder:"0"}),a===""?_.jsx("h2",{children:"Aguardando..."}):_.jsx("button",{onClick:m,children:"Salvar"})]})]})}const Lj="/app_coordinates/assets/inicio-21a63dea.svg",Mj=Ht.main`
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
`;function $j(t){return I.useContext(qn),localStorage.getItem("@userStorage","logado")?_.jsx(Fk,{to:"/home"}):_.jsxs(Mj,{children:[_.jsxs("div",{className:"text",children:[_.jsx("h1",{children:"Descubra coordenadas exatas e veja quando quiser"}),_.jsx("p",{children:"Registre-se para continuar..."}),_.jsxs("div",{className:"links",children:[_.jsx(Qt,{to:"/signin",children:"Sign in"}),_.jsx(Qt,{to:"/signup",children:"Sign up"})]})]}),_.jsx("div",{children:_.jsx("img",{src:Lj,alt:""})})]})}function Fj(){return _.jsx(_.Fragment,{children:_.jsx($j,{})})}const CI=Ht.div`
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

   
`,Uj="/app_coordinates/assets/login-3e19d223.svg";function jj(t){const[e,n]=I.useState(),[r,i]=I.useState(),{signIn:s,loadingAuth:o}=I.useContext(No),a=Po();async function l(u){u.preventDefault(),e!==""&&r!==""&&await s(e,r).then(c=>{a("/home")})}return _.jsxs(CI,{children:[_.jsx("div",{className:"Divform",children:_.jsxs("form",{onSubmit:l,children:[_.jsx("h1",{children:"Sign in"}),_.jsxs("div",{children:[_.jsx("label",{children:"Email"}),_.jsx("input",{type:"email",required:"",onChange:u=>n(u.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Password"}),_.jsx("input",{type:"password",name:"",id:"",required:"",onChange:u=>i(u.target.value)})]}),_.jsx("button",{type:"submit",children:o===!0?"Loading...":"Sign in"}),_.jsxs("p",{children:["Ou ",_.jsx(Qt,{to:"/signup",children:"cadastre-se"})]})]})}),_.jsx("div",{className:"img",children:_.jsx("img",{src:Uj,alt:""})})]})}const Bj="/app_coordinates/assets/signup-89f45dbd.svg";function zj(){const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),{signUp:l,loadingAuth:u}=I.useContext(No),c=Po();async function h(d){d.preventDefault(),t!==""&&n!==""&&i!==""&&o!==""&&i===o&&await l(t,n,i).then(p=>{c("/home")})}return _.jsxs(CI,{children:[_.jsx("div",{className:"Divform",children:_.jsxs("form",{onSubmit:h,children:[_.jsx("h1",{children:"Sign Up"}),_.jsxs("div",{children:[_.jsx("label",{children:"Nome"}),_.jsx("input",{type:"text",onChange:d=>e(d.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Email"}),_.jsx("input",{type:"text",onChange:d=>r(d.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Password"}),_.jsx("input",{type:"password",name:"",id:"",onChange:d=>s(d.target.value)})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Confirm password"}),_.jsx("input",{type:"password",name:"",id:"",onChange:d=>a(d.target.value)})]}),_.jsx("button",{type:"submit",children:u===!0?"Loading...":"Sign up"}),_.jsxs("p",{children:["Já possui uma conta? ",_.jsx(Qt,{to:"/signin",children:"Login"})]})]})}),_.jsx("div",{className:"img",children:_.jsx("img",{src:Bj,alt:""})})]})}const Vj=Ht.main`
  background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vh 0vh 25vh 0vh;
`,Hj=Ht.div`
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
`,qj=Ht.div`
  
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
`,Wj="/app_coordinates/assets/avatar-9bcaa191.png";function Kj(t){const{user:e,UserStorage:n}=I.useContext(No),{theme:r,toggleTheme:i}=I.useContext(qn),s=JSON.parse(localStorage.getItem("@userStorage")),[o,a]=I.useState(s.nome),[l,u]=I.useState(s.email),[c,h]=I.useState(s.imgUrl),[d,p]=I.useState(null);async function m(){const g=s.uid,f=ZM(s$,`images/${g}/${d}`);XM(f,d).then(w=>{JM(w.ref).then(async v=>{let C=v;const R=lo(is,"users",g);await Ew(R,{imgUrl:C,nome:o}).then(()=>{let b={nome:o,email:l,imgUrl:c,logado:!0,uid:s.uid,theme:r};n(b)})})})}async function y(){d===null&&o!==""?await Ew(lo(is,"users",s.uid),{nome:o,theme:r}).then(()=>{let g={nome:o,email:l,imgUrl:c,logado:!0,uid:s.uid,theme:r};n(g)}):o!==""&&d!==null&&m()}function E(g){if(g.target.files[0]){const f=g.target.files[0];console.log(f),f.type==="image/jpeg"||f.type==="image/png"?(p(f),h(URL.createObjectURL(f))):(h(null),p(null))}}return _.jsxs(Vj,{theme:r,children:[_.jsx(Hj,{children:_.jsxs("label",{children:[_.jsx("span",{children:"Alterar avatar"}),_.jsx("input",{type:"file",accept:"image/*",onChange:E}),c===null?_.jsx("img",{src:Wj,alt:"Foto de perfil"}):_.jsx("img",{src:c,alt:"Foto de perfil",width:250,height:250})]})}),_.jsxs(qj,{theme:r,children:[_.jsx("h1",{children:"Informações pessoais"}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Nome:"}),_.jsx("input",{type:"text",defaultValue:o,onChange:g=>a(g.target.value),id:""})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"",children:"Email:"}),_.jsx("input",{type:"email",defaultValue:l,onChange:g=>u(g.target.value),id:""})]}),_.jsxs("div",{className:"divToggleTheme",children:[_.jsx("h1",{children:"Preferências"}),_.jsx("button",{className:"toggleTheme",onClick:i,children:r==="light"?"Dark":"Light"})]}),_.jsx("button",{className:"saveButton",onClick:y,children:"Salvar"}),_.jsx("a",{href:"",className:"delete",children:"Excluir conta"})]})]})}const Gj="/app_coordinates/assets/404-dfb3de82.png",Qj=Ht.div`
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
`;function Yj(){return _.jsxs(Qj,{children:[_.jsx("img",{src:Gj,alt:""}),_.jsx("h1",{children:"Page not found"}),_.jsxs("p",{children:["Back to ",_.jsx(Qt,{to:"/home",children:"Home"})," "]})]})}const Xj=Ht.main`
    height: ${t=>t.loading===!0?"100vh":"none"};
    width: 100%;
    background-color: ${t=>t.theme==="light"?"white":"#0a0a0aea"};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 40vh;
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
`,Jj=Ht.div`
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
`;function Zj(t){const{theme:e}=I.useContext(qn);I.useState(5);const[n,r]=I.useState(!1),[i,s]=I.useState(!0),[o,a]=I.useState([]);async function l(u){const c=lo(is,"coordinates",u);await OO(c).then(()=>{alert("oK")})}return I.useEffect(()=>{async function u(){const c=JSON.parse(localStorage.getItem("@userStorage")),h=mC(is,"coordinates"),d=IO(h,xO("userId","==",c.uid));MO(d,p=>{let m=[];p.forEach(y=>{m.push({id:y.id,adress:y.data().adress,lat:y.data().lat,lng:y.data().lng,srcMap:y.data().srcMap})}),a(m),m.length==0?r(!0):r(!1),s(!1)})}u()},[]),_.jsx(_.Fragment,{children:_.jsxs(Xj,{loading:i,theme:e,children:[_.jsxs("h1",{children:["Página ",_.jsx("b",{children:"Salvos"})]}),i===!0?_.jsx("h2",{children:"Buscando Dados..."}):n===!0?_.jsxs(Jj,{children:[_.jsx("h1",{children:"Você não possui nenhum registro!"}),_.jsx(Qt,{to:"/home/coordinates",children:"Começar"})]}):o.map(u=>_.jsxs("div",{className:"container",children:[_.jsxs("h2",{children:["Adress: ",_.jsx("b",{children:u.adress})]}),_.jsxs("p",{children:["Latitude: ",_.jsx("b",{children:u.lat})]}),_.jsxs("p",{children:["Longitude: ",_.jsx("b",{children:u.lng})]}),_.jsxs("div",{className:"options",children:[_.jsx("button",{onClick:()=>l(u.id),children:"Excluir"}),_.jsx("a",{target:"_blank",href:`https://www.google.com/maps/search/?api=1&query=${u.lat}%2C${u.lng}`,children:"Maps"})]})]},u.id))]})})}function e3({children:t}){return localStorage.getItem("@userStorage","logado")?t:_.jsx(Fk,{to:"/"})}const t3=_F([{path:"/",element:_.jsx(Fj,{}),errorElement:_.jsx(Yj,{})},{path:"/signin",element:_.jsx(jj,{})},{path:"/signup",element:_.jsx(zj,{})},{path:"/home",element:_.jsx(e3,{children:_.jsx(LU,{})}),children:[{path:"/home",element:_.jsx(VU,{})},{path:"/home/coordinates",element:_.jsx(Oj,{})},{path:"/home/account",element:_.jsx(Kj,{})},{path:"/home/saved",element:_.jsx(Zj,{})}]}],{basename:"/app_coordinates"}),n3=new c4;Df.createRoot(document.getElementById("root")).render(_.jsx(Fn.StrictMode,{children:_.jsx(o$,{children:_.jsx(xF,{children:_.jsx(m4,{client:n3,children:_.jsx(dF,{router:t3})})})})}));
