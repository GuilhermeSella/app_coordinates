function IT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function x0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R0={exports:{}},cc={},A0={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),CT=Symbol.for("react.portal"),xT=Symbol.for("react.fragment"),RT=Symbol.for("react.strict_mode"),AT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),PT=Symbol.for("react.forward_ref"),OT=Symbol.for("react.suspense"),LT=Symbol.for("react.memo"),$T=Symbol.for("react.lazy"),yg=Symbol.iterator;function MT(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D0=Object.assign,P0={};function js(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||N0}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O0(){}O0.prototype=js.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||N0}var ep=Zf.prototype=new O0;ep.constructor=Zf;D0(ep,js.prototype);ep.isPureReactComponent=!0;var vg=Array.isArray,L0=Object.prototype.hasOwnProperty,tp={current:null},$0={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)L0.call(e,r)&&!$0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:La,type:t,key:s,ref:o,props:i,_owner:tp.current}}function bT(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function np(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function FT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wg=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FT(""+t.key):e.toString(36)}function Wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case La:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wh(o,0):r,vg(i)?(n="",t!=null&&(n=t.replace(wg,"$&/")+"/"),Wl(i,e,n,"",function(u){return u})):i!=null&&(np(i)&&(i=bT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wh(s,a);o+=Wl(s,e,n,l,i)}else if(l=MT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wh(s,a++),o+=Wl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],i=0;return Wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},Kl={transition:null},jT={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:tp};fe.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=js;fe.Fragment=xT;fe.Profiler=AT;fe.PureComponent=Zf;fe.StrictMode=RT;fe.Suspense=OT;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jT;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=D0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)L0.call(e,l)&&!$0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:La,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:DT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};fe.createElement=M0;fe.createFactory=function(t){var e=M0.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:PT,render:t}};fe.isValidElement=np;fe.lazy=function(t){return{$$typeof:$T,_payload:{_status:-1,_result:t},_init:UT}};fe.memo=function(t,e){return{$$typeof:LT,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};fe.useCallback=function(t,e){return zt.current.useCallback(t,e)};fe.useContext=function(t){return zt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return zt.current.useEffect(t,e)};fe.useId=function(){return zt.current.useId()};fe.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return zt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};fe.useRef=function(t){return zt.current.useRef(t)};fe.useState=function(t){return zt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return zt.current.useTransition()};fe.version="18.2.0";A0.exports=fe;var x=A0.exports;const zs=x0(x),zT=IT({__proto__:null,default:zs},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=x,BT=Symbol.for("react.element"),HT=Symbol.for("react.fragment"),WT=Object.prototype.hasOwnProperty,KT=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qT={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WT.call(e,r)&&!qT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BT,type:t,key:s,ref:o,props:i,_owner:KT.current}}cc.Fragment=HT;cc.jsx=b0;cc.jsxs=b0;R0.exports=cc;var I=R0.exports,vd={},F0={exports:{}},nn={},U0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,H){var Y=L.length;L.push(H);e:for(;0<Y;){var Se=Y-1>>>1,b=L[Se];if(0<i(b,H))L[Se]=H,L[Y]=b,Y=Se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var H=L[0],Y=L.pop();if(Y!==H){L[0]=Y;e:for(var Se=0,b=L.length,U=b>>>1;Se<U;){var M=2*(Se+1)-1,q=L[M],_=M+1,he=L[_];if(0>i(q,Y))_<b&&0>i(he,q)?(L[Se]=he,L[_]=Y,Se=_):(L[Se]=q,L[M]=Y,Se=M);else if(_<b&&0>i(he,Y))L[Se]=he,L[_]=Y,Se=_;else break e}}return H}function i(L,H){var Y=L.sortIndex-H.sortIndex;return Y!==0?Y:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=L)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function p(L){if(w=!1,y(L),!v)if(n(l)!==null)v=!0,gt(T);else{var H=n(u);H!==null&&He(p,H.startTime-L)}}function T(L,H){v=!1,w&&(w=!1,m(O),O=-1),g=!0;var Y=d;try{for(y(H),h=n(l);h!==null&&(!(h.expirationTime>H)||L&&!Oe());){var Se=h.callback;if(typeof Se=="function"){h.callback=null,d=h.priorityLevel;var b=Se(h.expirationTime<=H);H=t.unstable_now(),typeof b=="function"?h.callback=b:h===n(l)&&r(l),y(H)}else r(l);h=n(l)}if(h!==null)var U=!0;else{var M=n(u);M!==null&&He(p,M.startTime-H),U=!1}return U}finally{h=null,d=Y,g=!1}}var R=!1,A=null,O=-1,K=5,W=-1;function Oe(){return!(t.unstable_now()-W<K)}function ae(){if(A!==null){var L=t.unstable_now();W=L;var H=!0;try{H=A(!0,L)}finally{H?Ye():(R=!1,A=null)}}else R=!1}var Ye;if(typeof f=="function")Ye=function(){f(ae)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Ue=mt.port2;mt.port1.onmessage=ae,Ye=function(){Ue.postMessage(null)}}else Ye=function(){E(ae,0)};function gt(L){A=L,R||(R=!0,Ye())}function He(L,H){O=E(function(){L(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,gt(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var Y=d;d=H;try{return L()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=d;d=L;try{return H()}finally{d=Y}},t.unstable_scheduleCallback=function(L,H,Y){var Se=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Se+Y:Se):Y=Se,L){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=Y+b,L={id:c++,callback:H,priorityLevel:L,startTime:Y,expirationTime:b,sortIndex:-1},Y>Se?(L.sortIndex=Y,e(u,L),n(l)===null&&L===n(u)&&(w?(m(O),O=-1):w=!0,He(p,Y-Se))):(L.sortIndex=b,e(l,L),v||g||(v=!0,gt(T))),L},t.unstable_shouldYield=Oe,t.unstable_wrapCallback=function(L){var H=d;return function(){var Y=d;d=H;try{return L.apply(this,arguments)}finally{d=Y}}}})(j0);U0.exports=j0;var GT=U0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=x,en=GT;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V0=new Set,qo={};function Li(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(qo[t]=e,t=0;t<e.length;t++)V0.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,QT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eg={},_g={};function YT(t){return wd.call(_g,t)?!0:wd.call(Eg,t)?!1:QT.test(t)?_g[t]=!0:(Eg[t]=!0,!1)}function XT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JT(t,e,n,r){if(e===null||typeof e>"u"||XT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rp,ip);Tt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rp,ip);Tt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rp,ip);Tt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sp(t,e,n,r){var i=Tt.hasOwnProperty(e)?Tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JT(e,n,i,r)&&(n=null),r||i===null?YT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),Sg=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=Sg&&t[Sg]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Eh;function Eo(t){if(Eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+t}var _h=!1;function Sh(t,e){if(!t||_h)return"";_h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function ZT(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=Sh(t.type,!1),t;case 11:return t=Sh(t.type.render,!1),t;case 1:return t=Sh(t.type,!0),t;default:return""}}function Td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case Ki:return"Portal";case Ed:return"Profiler";case op:return"StrictMode";case _d:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case B0:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:Td(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return Td(t(e))}catch{}}return null}function ek(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Td(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tk(t){var e=K0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=tk(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=K0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kd(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function G0(t,e){e=e.checked,e!=null&&sp(t,"checked",e,!1)}function Id(t,e){G0(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cd(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cd(t,e,n){(e!=="number"||du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(_o(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function Q0(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,X0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nk=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){nk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function J0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function Z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=J0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rk=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ad(t,e){if(e){if(rk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,cs=null,hs=null;function xg(t){if(t=ba(t)){if(typeof Pd!="function")throw Error(D(280));var e=t.stateNode;e&&(e=mc(e),Pd(t.stateNode,t.type,e))}}function e1(t){cs?hs?hs.push(t):hs=[t]:cs=t}function t1(){if(cs){var t=cs,e=hs;if(hs=cs=null,xg(t),e)for(t=0;t<e.length;t++)xg(e[t])}}function n1(t,e){return t(e)}function r1(){}var Th=!1;function i1(t,e,n){if(Th)return t(e,n);Th=!0;try{return n1(t,e,n)}finally{Th=!1,(cs!==null||hs!==null)&&(r1(),t1())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var r=mc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Od=!1;if(ur)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Od=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Od=!1}function ik(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Do=!1,fu=null,pu=!1,Ld=null,sk={onError:function(t){Do=!0,fu=t}};function ok(t,e,n,r,i,s,o,a,l){Do=!1,fu=null,ik.apply(sk,arguments)}function ak(t,e,n,r,i,s,o,a,l){if(ok.apply(this,arguments),Do){if(Do){var u=fu;Do=!1,fu=null}else throw Error(D(198));pu||(pu=!0,Ld=u)}}function $i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rg(t){if($i(t)!==t)throw Error(D(188))}function lk(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rg(i),t;if(s===r)return Rg(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function o1(t){return t=lk(t),t!==null?a1(t):null}function a1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a1(t);if(e!==null)return e;t=t.sibling}return null}var l1=en.unstable_scheduleCallback,Ag=en.unstable_cancelCallback,uk=en.unstable_shouldYield,ck=en.unstable_requestPaint,Qe=en.unstable_now,hk=en.unstable_getCurrentPriorityLevel,cp=en.unstable_ImmediatePriority,u1=en.unstable_UserBlockingPriority,mu=en.unstable_NormalPriority,dk=en.unstable_LowPriority,c1=en.unstable_IdlePriority,hc=null,Un=null;function fk(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:gk,pk=Math.log,mk=Math.LN2;function gk(t){return t>>>=0,t===0?32:31-(pk(t)/mk|0)|0}var yl=64,vl=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=So(a):(s&=o,s!==0&&(r=So(s)))}else o=n&~i,o!==0?r=So(o):s!==0&&(r=So(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function yk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Cn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=yk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h1(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function wk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function d1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f1,dp,p1,m1,g1,Md=!1,wl=[],br=null,Fr=null,Ur=null,Yo=new Map,Xo=new Map,Rr=[],Ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ng(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function lo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ba(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _k(t,e,n,r,i){switch(e){case"focusin":return br=lo(br,t,e,n,r,i),!0;case"dragenter":return Fr=lo(Fr,t,e,n,r,i),!0;case"mouseover":return Ur=lo(Ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yo.set(s,lo(Yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xo.set(s,lo(Xo.get(s)||null,t,e,n,r,i)),!0}return!1}function y1(t){var e=ci(t.target);if(e!==null){var n=$i(e);if(n!==null){if(e=n.tag,e===13){if(e=s1(n),e!==null){t.blockedOn=e,g1(t.priority,function(){p1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dd=r,n.target.dispatchEvent(r),Dd=null}else return e=ba(n),e!==null&&dp(e),t.blockedOn=n,!1;e.shift()}return!0}function Dg(t,e,n){ql(t)&&n.delete(e)}function Sk(){Md=!1,br!==null&&ql(br)&&(br=null),Fr!==null&&ql(Fr)&&(Fr=null),Ur!==null&&ql(Ur)&&(Ur=null),Yo.forEach(Dg),Xo.forEach(Dg)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Sk)))}function Jo(t){function e(i){return uo(i,t)}if(0<wl.length){uo(wl[0],t);for(var n=1;n<wl.length;n++){var r=wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&uo(br,t),Fr!==null&&uo(Fr,t),Ur!==null&&uo(Ur,t),Yo.forEach(e),Xo.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)y1(n),n.blockedOn===null&&Rr.shift()}var ds=vr.ReactCurrentBatchConfig,yu=!0;function Tk(t,e,n,r){var i=Te,s=ds.transition;ds.transition=null;try{Te=1,fp(t,e,n,r)}finally{Te=i,ds.transition=s}}function kk(t,e,n,r){var i=Te,s=ds.transition;ds.transition=null;try{Te=4,fp(t,e,n,r)}finally{Te=i,ds.transition=s}}function fp(t,e,n,r){if(yu){var i=bd(t,e,n,r);if(i===null)Lh(t,e,r,vu,n),Ng(t,r);else if(_k(i,t,e,n,r))r.stopPropagation();else if(Ng(t,r),e&4&&-1<Ek.indexOf(t)){for(;i!==null;){var s=ba(i);if(s!==null&&f1(s),s=bd(t,e,n,r),s===null&&Lh(t,e,r,vu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lh(t,e,r,null,n)}}var vu=null;function bd(t,e,n,r){if(vu=null,t=up(r),t=ci(t),t!==null)if(e=$i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vu=t,null}function v1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hk()){case cp:return 1;case u1:return 4;case mu:case dk:return 16;case c1:return 536870912;default:return 16}default:return 16}}var Lr=null,pp=null,Gl=null;function w1(){if(Gl)return Gl;var t,e=pp,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Pg(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:Pg,this.isPropagationStopped=Pg,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=rn(Vs),Ma=Ve({},Vs,{view:0,detail:0}),Ik=rn(Ma),Ih,Ch,co,dc=Ve({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Ih=t.screenX-co.screenX,Ch=t.screenY-co.screenY):Ch=Ih=0,co=t),Ih)},movementY:function(t){return"movementY"in t?t.movementY:Ch}}),Og=rn(dc),Ck=Ve({},dc,{dataTransfer:0}),xk=rn(Ck),Rk=Ve({},Ma,{relatedTarget:0}),xh=rn(Rk),Ak=Ve({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Nk=rn(Ak),Dk=Ve({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pk=rn(Dk),Ok=Ve({},Vs,{data:0}),Lg=rn(Ok),Lk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$k={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mk[t])?!!e[t]:!1}function gp(){return bk}var Fk=Ve({},Ma,{key:function(t){if(t.key){var e=Lk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$k[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uk=rn(Fk),jk=Ve({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=rn(jk),zk=Ve({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),Vk=rn(zk),Bk=Ve({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hk=rn(Bk),Wk=Ve({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kk=rn(Wk),qk=[9,13,27,32],yp=ur&&"CompositionEvent"in window,Po=null;ur&&"documentMode"in document&&(Po=document.documentMode);var Gk=ur&&"TextEvent"in window&&!Po,E1=ur&&(!yp||Po&&8<Po&&11>=Po),Mg=String.fromCharCode(32),bg=!1;function _1(t,e){switch(t){case"keyup":return qk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function Qk(t,e){switch(t){case"compositionend":return S1(e);case"keypress":return e.which!==32?null:(bg=!0,Mg);case"textInput":return t=e.data,t===Mg&&bg?null:t;default:return null}}function Yk(t,e){if(Gi)return t==="compositionend"||!yp&&_1(t,e)?(t=w1(),Gl=pp=Lr=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E1&&e.locale!=="ko"?null:e.data;default:return null}}var Xk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xk[t.type]:e==="textarea"}function T1(t,e,n,r){e1(r),e=wu(e,"onChange"),0<e.length&&(n=new mp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oo=null,Zo=null;function Jk(t){L1(t,0)}function fc(t){var e=Xi(t);if(q0(e))return t}function Zk(t,e){if(t==="change")return e}var k1=!1;if(ur){var Rh;if(ur){var Ah="oninput"in document;if(!Ah){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),Ah=typeof Ug.oninput=="function"}Rh=Ah}else Rh=!1;k1=Rh&&(!document.documentMode||9<document.documentMode)}function jg(){Oo&&(Oo.detachEvent("onpropertychange",I1),Zo=Oo=null)}function I1(t){if(t.propertyName==="value"&&fc(Zo)){var e=[];T1(e,Zo,t,up(t)),i1(Jk,e)}}function eI(t,e,n){t==="focusin"?(jg(),Oo=e,Zo=n,Oo.attachEvent("onpropertychange",I1)):t==="focusout"&&jg()}function tI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Zo)}function nI(t,e){if(t==="click")return fc(e)}function rI(t,e){if(t==="input"||t==="change")return fc(e)}function iI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:iI;function ea(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wd.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vg(t,e){var n=zg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zg(n)}}function C1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x1(){for(var t=window,e=du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=du(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sI(t){var e=x1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C1(n.ownerDocument.documentElement,n)){if(r!==null&&vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vg(n,s);var o=Vg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oI=ur&&"documentMode"in document&&11>=document.documentMode,Qi=null,Fd=null,Lo=null,Ud=!1;function Bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||Qi==null||Qi!==du(r)||(r=Qi,"selectionStart"in r&&vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lo&&ea(Lo,r)||(Lo=r,r=wu(Fd,"onSelect"),0<r.length&&(e=new mp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Qi)))}function _l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yi={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Nh={},R1={};ur&&(R1=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function pc(t){if(Nh[t])return Nh[t];if(!Yi[t])return t;var e=Yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R1)return Nh[t]=e[n];return t}var A1=pc("animationend"),N1=pc("animationiteration"),D1=pc("animationstart"),P1=pc("transitionend"),O1=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){O1.set(t,e),Li(e,[t])}for(var Dh=0;Dh<Hg.length;Dh++){var Ph=Hg[Dh],aI=Ph.toLowerCase(),lI=Ph[0].toUpperCase()+Ph.slice(1);ti(aI,"on"+lI)}ti(A1,"onAnimationEnd");ti(N1,"onAnimationIteration");ti(D1,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(P1,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uI=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ak(r,e,void 0,t),t.currentTarget=null}function L1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wg(i,a,u),s=l}}}if(pu)throw t=Ld,pu=!1,Ld=null,t}function Ae(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var r=t+"__bubble";n.has(r)||($1(e,t,2,!1),n.add(r))}function Oh(t,e,n){var r=0;e&&(r|=4),$1(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Sl]){t[Sl]=!0,V0.forEach(function(n){n!=="selectionchange"&&(uI.has(n)||Oh(n,!1,t),Oh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Oh("selectionchange",!1,e))}}function $1(t,e,n,r){switch(v1(e)){case 1:var i=Tk;break;case 4:i=kk;break;default:i=fp}n=i.bind(null,e,n,t),i=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ci(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i1(function(){var u=s,c=up(n),h=[];e:{var d=O1.get(t);if(d!==void 0){var g=mp,v=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":g=Uk;break;case"focusin":v="focus",g=xh;break;case"focusout":v="blur",g=xh;break;case"beforeblur":case"afterblur":g=xh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=xk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vk;break;case A1:case N1:case D1:g=Nk;break;case P1:g=Hk;break;case"scroll":g=Ik;break;case"wheel":g=Kk;break;case"copy":case"cut":case"paste":g=Pk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$g}var w=(e&4)!==0,E=!w&&t==="scroll",m=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,y;f!==null;){y=f;var p=y.stateNode;if(y.tag===5&&p!==null&&(y=p,m!==null&&(p=Qo(f,m),p!=null&&w.push(na(f,p,y)))),E)break;f=f.return}0<w.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Dd&&(v=n.relatedTarget||n.fromElement)&&(ci(v)||v[cr]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?ci(v):null,v!==null&&(E=$i(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Og,p="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=$g,p="onPointerLeave",m="onPointerEnter",f="pointer"),E=g==null?d:Xi(g),y=v==null?d:Xi(v),d=new w(p,f+"leave",g,n,c),d.target=E,d.relatedTarget=y,p=null,ci(c)===u&&(w=new w(m,f+"enter",v,n,c),w.target=y,w.relatedTarget=E,p=w),E=p,g&&v)t:{for(w=g,m=v,f=0,y=w;y;y=Vi(y))f++;for(y=0,p=m;p;p=Vi(p))y++;for(;0<f-y;)w=Vi(w),f--;for(;0<y-f;)m=Vi(m),y--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Vi(w),m=Vi(m)}w=null}else w=null;g!==null&&Kg(h,d,g,w,!1),v!==null&&E!==null&&Kg(h,E,v,w,!0)}}e:{if(d=u?Xi(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=Zk;else if(Fg(d))if(k1)T=rI;else{T=tI;var R=eI}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=nI);if(T&&(T=T(t,u))){T1(h,T,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Cd(d,"number",d.value)}switch(R=u?Xi(u):window,t){case"focusin":(Fg(R)||R.contentEditable==="true")&&(Qi=R,Fd=u,Lo=null);break;case"focusout":Lo=Fd=Qi=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,Bg(h,n,c);break;case"selectionchange":if(oI)break;case"keydown":case"keyup":Bg(h,n,c)}var A;if(yp)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Gi?_1(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(E1&&n.locale!=="ko"&&(Gi||O!=="onCompositionStart"?O==="onCompositionEnd"&&Gi&&(A=w1()):(Lr=c,pp="value"in Lr?Lr.value:Lr.textContent,Gi=!0)),R=wu(u,O),0<R.length&&(O=new Lg(O,t,null,n,c),h.push({event:O,listeners:R}),A?O.data=A:(A=S1(n),A!==null&&(O.data=A)))),(A=Gk?Qk(t,n):Yk(t,n))&&(u=wu(u,"onBeforeInput"),0<u.length&&(c=new Lg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}L1(h,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qo(t,n),s!=null&&r.unshift(na(t,s,i)),s=Qo(t,e),s!=null&&r.push(na(t,s,i))),t=t.return}return r}function Vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qo(n,s),l!=null&&o.unshift(na(n,l,a))):i||(l=Qo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cI=/\r\n?/g,hI=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(cI,`
`).replace(hI,"")}function Tl(t,e,n){if(e=qg(e),qg(t)!==e&&n)throw Error(D(425))}function Eu(){}var jd=null,zd=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bd=typeof setTimeout=="function"?setTimeout:void 0,dI=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,fI=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(pI)}:Bd;function pI(t){setTimeout(function(){throw t})}function $h(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Bs,ra="__reactProps$"+Bs,cr="__reactContainer$"+Bs,Hd="__reactEvents$"+Bs,mI="__reactListeners$"+Bs,gI="__reactHandles$"+Bs;function ci(t){var e=t[Ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[Ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qg(t);t!==null;){if(n=t[Ln])return n;t=Qg(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[Ln]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function mc(t){return t[ra]||null}var Wd=[],Ji=-1;function ni(t){return{current:t}}function De(t){0>Ji||(t.current=Wd[Ji],Wd[Ji]=null,Ji--)}function xe(t,e){Ji++,Wd[Ji]=t.current,t.current=e}var Yr={},$t=ni(Yr),qt=ni(!1),_i=Yr;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Gt(t){return t=t.childContextTypes,t!=null}function _u(){De(qt),De($t)}function Yg(t,e,n){if($t.current!==Yr)throw Error(D(168));xe($t,e),xe(qt,n)}function M1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,ek(t)||"Unknown",i));return Ve({},n,r)}function Su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,_i=$t.current,xe($t,t),xe(qt,qt.current),!0}function Xg(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=M1(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,De(qt),De($t),xe($t,t)):De(qt),xe(qt,n)}var Zn=null,gc=!1,Mh=!1;function b1(t){Zn===null?Zn=[t]:Zn.push(t)}function yI(t){gc=!0,b1(t)}function ri(){if(!Mh&&Zn!==null){Mh=!0;var t=0,e=Te;try{var n=Zn;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,gc=!1}catch(i){throw Zn!==null&&(Zn=Zn.slice(t+1)),l1(cp,ri),i}finally{Te=e,Mh=!1}}return null}var Zi=[],es=0,Tu=null,ku=0,un=[],cn=0,Si=null,er=1,tr="";function ai(t,e){Zi[es++]=ku,Zi[es++]=Tu,Tu=t,ku=e}function F1(t,e,n){un[cn++]=er,un[cn++]=tr,un[cn++]=Si,Si=t;var r=er;t=tr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var s=32-Cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-Cn(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function wp(t){t.return!==null&&(ai(t,1),F1(t,1,0))}function Ep(t){for(;t===Tu;)Tu=Zi[--es],Zi[es]=null,ku=Zi[--es],Zi[es]=null;for(;t===Si;)Si=un[--cn],un[cn]=null,tr=un[--cn],un[cn]=null,er=un[--cn],un[cn]=null}var Zt=null,Jt=null,Fe=!1,Tn=null;function U1(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Jt=null,!0):!1;default:return!1}}function Kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qd(t){if(Fe){var e=Jt;if(e){var n=e;if(!Jg(t,e)){if(Kd(t))throw Error(D(418));e=jr(n.nextSibling);var r=Zt;e&&Jg(t,e)?U1(r,n):(t.flags=t.flags&-4097|2,Fe=!1,Zt=t)}}else{if(Kd(t))throw Error(D(418));t.flags=t.flags&-4097|2,Fe=!1,Zt=t}}}function Zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function kl(t){if(t!==Zt)return!1;if(!Fe)return Zg(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=Jt)){if(Kd(t))throw j1(),Error(D(418));for(;e;)U1(t,e),e=jr(e.nextSibling)}if(Zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=Zt?jr(t.stateNode.nextSibling):null;return!0}function j1(){for(var t=Jt;t;)t=jr(t.nextSibling)}function ks(){Jt=Zt=null,Fe=!1}function _p(t){Tn===null?Tn=[t]:Tn.push(t)}var vI=vr.ReactCurrentBatchConfig;function En(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Iu=ni(null),Cu=null,ts=null,Sp=null;function Tp(){Sp=ts=Cu=null}function kp(t){var e=Iu.current;De(Iu),t._currentValue=e}function Gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){Cu=t,Sp=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(Cu===null)throw Error(D(308));ts=t,Cu.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var hi=null;function Ip(t){hi===null?hi=[t]:hi.push(t)}function z1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function Cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xu(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=Ve({},h,d);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ki|=o,t.lanes=o,t.memoizedState=h}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var B1=new z0.Component().refs;function Qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yc={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Br(t),s=or(r,i);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(xn(e,t,i,r),Yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Br(t),s=or(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(xn(e,t,i,r),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=Br(t),i=or(n,r);i.tag=2,e!=null&&(i.callback=e),e=zr(t,i,r),e!==null&&(xn(e,t,r,n),Yl(e,t,r))}};function ny(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,r)||!ea(i,s):!0}function H1(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(i=Gt(e)?_i:$t.current,r=e.contextTypes,s=(r=r!=null)?Ts(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ry(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=B1,Cp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gn(s):(s=Gt(e)?_i:$t.current,i.context=Ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yc.enqueueReplaceState(i,i.state,null),xu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===B1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iy(t){var e=t._init;return e(t._payload)}function W1(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Hr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,p){return f===null||f.tag!==6?(f=Bh(y,m.mode,p),f.return=m,f):(f=i(f,y),f.return=m,f)}function l(m,f,y,p){var T=y.type;return T===qi?c(m,f,y.props.children,p,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cr&&iy(T)===f.type)?(p=i(f,y.props),p.ref=ho(m,f,y),p.return=m,p):(p=nu(y.type,y.key,y.props,null,m.mode,p),p.ref=ho(m,f,y),p.return=m,p)}function u(m,f,y,p){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Hh(y,m.mode,p),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,p,T){return f===null||f.tag!==7?(f=vi(y,m.mode,p,T),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Bh(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pl:return y=nu(f.type,f.key,f.props,null,m.mode,y),y.ref=ho(m,null,f),y.return=m,y;case Ki:return f=Hh(f,m.mode,y),f.return=m,f;case Cr:var p=f._init;return h(m,p(f._payload),y)}if(_o(f)||oo(f))return f=vi(f,m.mode,y,null),f.return=m,f;Il(m,f)}return null}function d(m,f,y,p){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,f,""+y,p);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return y.key===T?l(m,f,y,p):null;case Ki:return y.key===T?u(m,f,y,p):null;case Cr:return T=y._init,d(m,f,T(y._payload),p)}if(_o(y)||oo(y))return T!==null?null:c(m,f,y,p,null);Il(m,y)}return null}function g(m,f,y,p,T){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(y)||null,a(f,m,""+p,T);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pl:return m=m.get(p.key===null?y:p.key)||null,l(f,m,p,T);case Ki:return m=m.get(p.key===null?y:p.key)||null,u(f,m,p,T);case Cr:var R=p._init;return g(m,f,y,R(p._payload),T)}if(_o(p)||oo(p))return m=m.get(y)||null,c(f,m,p,T,null);Il(f,p)}return null}function v(m,f,y,p){for(var T=null,R=null,A=f,O=f=0,K=null;A!==null&&O<y.length;O++){A.index>O?(K=A,A=null):K=A.sibling;var W=d(m,A,y[O],p);if(W===null){A===null&&(A=K);break}t&&A&&W.alternate===null&&e(m,A),f=s(W,f,O),R===null?T=W:R.sibling=W,R=W,A=K}if(O===y.length)return n(m,A),Fe&&ai(m,O),T;if(A===null){for(;O<y.length;O++)A=h(m,y[O],p),A!==null&&(f=s(A,f,O),R===null?T=A:R.sibling=A,R=A);return Fe&&ai(m,O),T}for(A=r(m,A);O<y.length;O++)K=g(A,m,O,y[O],p),K!==null&&(t&&K.alternate!==null&&A.delete(K.key===null?O:K.key),f=s(K,f,O),R===null?T=K:R.sibling=K,R=K);return t&&A.forEach(function(Oe){return e(m,Oe)}),Fe&&ai(m,O),T}function w(m,f,y,p){var T=oo(y);if(typeof T!="function")throw Error(D(150));if(y=T.call(y),y==null)throw Error(D(151));for(var R=T=null,A=f,O=f=0,K=null,W=y.next();A!==null&&!W.done;O++,W=y.next()){A.index>O?(K=A,A=null):K=A.sibling;var Oe=d(m,A,W.value,p);if(Oe===null){A===null&&(A=K);break}t&&A&&Oe.alternate===null&&e(m,A),f=s(Oe,f,O),R===null?T=Oe:R.sibling=Oe,R=Oe,A=K}if(W.done)return n(m,A),Fe&&ai(m,O),T;if(A===null){for(;!W.done;O++,W=y.next())W=h(m,W.value,p),W!==null&&(f=s(W,f,O),R===null?T=W:R.sibling=W,R=W);return Fe&&ai(m,O),T}for(A=r(m,A);!W.done;O++,W=y.next())W=g(A,m,O,W.value,p),W!==null&&(t&&W.alternate!==null&&A.delete(W.key===null?O:W.key),f=s(W,f,O),R===null?T=W:R.sibling=W,R=W);return t&&A.forEach(function(ae){return e(m,ae)}),Fe&&ai(m,O),T}function E(m,f,y,p){if(typeof y=="object"&&y!==null&&y.type===qi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:e:{for(var T=y.key,R=f;R!==null;){if(R.key===T){if(T=y.type,T===qi){if(R.tag===7){n(m,R.sibling),f=i(R,y.props.children),f.return=m,m=f;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cr&&iy(T)===R.type){n(m,R.sibling),f=i(R,y.props),f.ref=ho(m,R,y),f.return=m,m=f;break e}n(m,R);break}else e(m,R);R=R.sibling}y.type===qi?(f=vi(y.props.children,m.mode,p,y.key),f.return=m,m=f):(p=nu(y.type,y.key,y.props,null,m.mode,p),p.ref=ho(m,f,y),p.return=m,m=p)}return o(m);case Ki:e:{for(R=y.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Hh(y,m.mode,p),f.return=m,m=f}return o(m);case Cr:return R=y._init,E(m,f,R(y._payload),p)}if(_o(y))return v(m,f,y,p);if(oo(y))return w(m,f,y,p);Il(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=Bh(y,m.mode,p),f.return=m,m=f),o(m)):n(m,f)}return E}var Is=W1(!0),K1=W1(!1),Fa={},jn=ni(Fa),ia=ni(Fa),sa=ni(Fa);function di(t){if(t===Fa)throw Error(D(174));return t}function xp(t,e){switch(xe(sa,e),xe(ia,t),xe(jn,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rd(e,t)}De(jn),xe(jn,e)}function Cs(){De(jn),De(ia),De(sa)}function q1(t){di(sa.current);var e=di(jn.current),n=Rd(e,t.type);e!==n&&(xe(ia,t),xe(jn,n))}function Rp(t){ia.current===t&&(De(jn),De(ia))}var je=ni(0);function Ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bh=[];function Ap(){for(var t=0;t<bh.length;t++)bh[t]._workInProgressVersionPrimary=null;bh.length=0}var Xl=vr.ReactCurrentDispatcher,Fh=vr.ReactCurrentBatchConfig,Ti=0,ze=null,it=null,ct=null,Au=!1,$o=!1,oa=0,wI=0;function It(){throw Error(D(321))}function Np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Dp(t,e,n,r,i,s){if(Ti=s,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?TI:kI,t=n(r,i),$o){s=0;do{if($o=!1,oa=0,25<=s)throw Error(D(301));s+=1,ct=it=null,e.updateQueue=null,Xl.current=II,t=n(r,i)}while($o)}if(Xl.current=Nu,e=it!==null&&it.next!==null,Ti=0,ct=it=ze=null,Au=!1,e)throw Error(D(300));return t}function Pp(){var t=oa!==0;return oa=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ze.memoizedState=ct=t:ct=ct.next=t,ct}function yn(){if(it===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ct===null?ze.memoizedState:ct.next;if(e!==null)ct=e,it=t;else{if(t===null)throw Error(D(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ct===null?ze.memoizedState=ct=t:ct=ct.next=t}return ct}function aa(t,e){return typeof e=="function"?e(t):e}function Uh(t){var e=yn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ti&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ze.lanes|=c,ki|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ze.lanes|=s,ki|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jh(t){var e=yn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function G1(){}function Q1(t,e){var n=ze,r=yn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Kt=!0),r=r.queue,Op(J1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,la(9,X1.bind(null,n,r,i,e),void 0,null),ht===null)throw Error(D(349));Ti&30||Y1(n,e,i)}return i}function Y1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X1(t,e,n,r){e.value=n,e.getSnapshot=r,Z1(e)&&ew(t)}function J1(t,e,n){return n(function(){Z1(e)&&ew(t)})}function Z1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function ew(t){var e=hr(t,1);e!==null&&xn(e,t,1,-1)}function sy(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=SI.bind(null,ze,t),[e.memoizedState,t]}function la(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tw(){return yn().memoizedState}function Jl(t,e,n,r){var i=On();ze.flags|=t,i.memoizedState=la(1|e,n,void 0,r===void 0?null:r)}function vc(t,e,n,r){var i=yn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&Np(r,o.deps)){i.memoizedState=la(e,n,s,r);return}}ze.flags|=t,i.memoizedState=la(1|e,n,s,r)}function oy(t,e){return Jl(8390656,8,t,e)}function Op(t,e){return vc(2048,8,t,e)}function nw(t,e){return vc(4,2,t,e)}function rw(t,e){return vc(4,4,t,e)}function iw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sw(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,iw.bind(null,e,t),n)}function Lp(){}function ow(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Np(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aw(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Np(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lw(t,e,n){return Ti&21?(Rn(n,e)||(n=h1(),ze.lanes|=n,ki|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function EI(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=Fh.transition;Fh.transition={};try{t(!1),e()}finally{Te=n,Fh.transition=r}}function uw(){return yn().memoizedState}function _I(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cw(t))hw(e,n);else if(n=z1(t,e,n,r),n!==null){var i=jt();xn(n,t,r,i),dw(n,e,r)}}function SI(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cw(t))hw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ip(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=z1(t,e,i,r),n!==null&&(i=jt(),xn(n,t,r,i),dw(n,e,r))}}function cw(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function hw(t,e){$o=Au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}var Nu={readContext:gn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},TI={readContext:gn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:oy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,iw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_I.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:sy,useDebugValue:Lp,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=sy(!1),e=t[0];return t=EI.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=On();if(Fe){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),ht===null)throw Error(D(349));Ti&30||Y1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,oy(J1.bind(null,r,s,t),[t]),r.flags|=2048,la(9,X1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=On(),e=ht.identifierPrefix;if(Fe){var n=tr,r=er;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kI={readContext:gn,useCallback:ow,useContext:gn,useEffect:Op,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:Uh,useRef:tw,useState:function(){return Uh(aa)},useDebugValue:Lp,useDeferredValue:function(t){var e=yn();return lw(e,it.memoizedState,t)},useTransition:function(){var t=Uh(aa)[0],e=yn().memoizedState;return[t,e]},useMutableSource:G1,useSyncExternalStore:Q1,useId:uw,unstable_isNewReconciler:!1},II={readContext:gn,useCallback:ow,useContext:gn,useEffect:Op,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:jh,useRef:tw,useState:function(){return jh(aa)},useDebugValue:Lp,useDeferredValue:function(t){var e=yn();return it===null?e.memoizedState=t:lw(e,it.memoizedState,t)},useTransition:function(){var t=jh(aa)[0],e=yn().memoizedState;return[t,e]},useMutableSource:G1,useSyncExternalStore:Q1,useId:uw,unstable_isNewReconciler:!1};function xs(t,e){try{var n="",r=e;do n+=ZT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CI=typeof WeakMap=="function"?WeakMap:Map;function fw(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pu||(Pu=!0,lf=r),Xd(t,e)},n}function pw(t,e,n){n=or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ay(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jI.bind(null,t,e,n),e.then(t,t))}function ly(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var xI=vr.ReactCurrentOwner,Kt=!1;function Ft(t,e,n,r){e.child=t===null?K1(e,null,n,r):Is(e,t.child,n,r)}function cy(t,e,n,r,i){n=n.render;var s=e.ref;return fs(e,i),r=Dp(t,e,n,r,s,i),n=Pp(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Fe&&n&&wp(e),e.flags|=1,Ft(t,e,r,i),e.child)}function hy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mw(t,e,s,r,i)):(t=nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ea(s,r)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Jd(t,e,n,r,i)}function gw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(rs,Xt),Xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(rs,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(rs,Xt),Xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,xe(rs,Xt),Xt|=r;return Ft(t,e,i,n),e.child}function yw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,r,i){var s=Gt(n)?_i:$t.current;return s=Ts(e,s),fs(e,i),n=Dp(t,e,n,r,s,i),r=Pp(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Fe&&r&&wp(e),e.flags|=1,Ft(t,e,n,i),e.child)}function dy(t,e,n,r,i){if(Gt(n)){var s=!0;Su(e)}else s=!1;if(fs(e,i),e.stateNode===null)Zl(t,e),H1(e,n,r),Yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Gt(n)?_i:$t.current,u=Ts(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ry(e,o,r,u),xr=!1;var d=e.memoizedState;o.state=d,xu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||qt.current||xr?(typeof c=="function"&&(Qd(e,n,c,r),l=e.memoizedState),(a=xr||ny(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,V1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Gt(n)?_i:$t.current,l=Ts(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&ry(e,o,r,l),xr=!1,d=e.memoizedState,o.state=d,xu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||qt.current||xr?(typeof g=="function"&&(Qd(e,n,g,r),v=e.memoizedState),(u=xr||ny(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Zd(t,e,n,r,s,i)}function Zd(t,e,n,r,i,s){yw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xg(e,n,!1),dr(t,e,s);r=e.stateNode,xI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):Ft(t,e,a,s),e.memoizedState=r.state,i&&Xg(e,n,!0),e.child}function vw(t){var e=t.stateNode;e.pendingContext?Yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yg(t,e.context,!1),xp(t,e.containerInfo)}function fy(t,e,n,r,i){return ks(),_p(i),e.flags|=256,Ft(t,e,n,r),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ww(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),xe(je,i&1),t===null)return qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):$p(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Hr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Hr(a,s):(s=vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,r}return s=t.child,t=s.sibling,r=Hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $p(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&_p(r),Is(e,t.child,null,n),t=$p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zh(Error(D(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_c({mode:"visible",children:r.children},i,0,null),s=vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return Cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=zh(s,r,void 0),Cl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Kt||a){if(r=ht,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),xn(r,t,i,-1))}return zp(),r=zh(Error(D(421))),Cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Jt=jr(i.nextSibling),Zt=e,Fe=!0,Tn=null,t!==null&&(un[cn++]=er,un[cn++]=tr,un[cn++]=Si,er=t.id,tr=t.overflow,Si=e),e=$p(e,r.children),e.flags|=4096,e)}function py(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gd(t.return,e,n)}function Vh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ew(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ft(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,n,e);else if(t.tag===19)py(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(je,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vh(e,!0,n,null,s);break;case"together":Vh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ki|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AI(t,e,n){switch(e.tag){case 3:vw(e),ks();break;case 5:q1(e);break;case 1:Gt(e.type)&&Su(e);break;case 4:xp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;xe(Iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?ww(t,e,n):(xe(je,je.current&1),t=dr(t,e,n),t!==null?t.sibling:null);xe(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ew(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,gw(t,e,n)}return dr(t,e,n)}var _w,nf,Sw,Tw;_w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};Sw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,di(jn.current);var s=null;switch(n){case"input":i=kd(t,i),r=kd(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=xd(t,i),r=xd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eu)}Ad(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Tw=function(t,e,n,r){n!==r&&(e.flags|=4)};function fo(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NI(t,e,n){var r=e.pendingProps;switch(Ep(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Gt(e.type)&&_u(),Ct(e),null;case 3:return r=e.stateNode,Cs(),De(qt),De($t),Ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(hf(Tn),Tn=null))),nf(t,e),Ct(e),null;case 5:Rp(e);var i=di(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Sw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Ct(e),null}if(t=di(jn.current),kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ln]=e,r[ra]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<To.length;i++)Ae(To[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Tg(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":Ig(r,s),Ae("invalid",r)}Ad(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",""+a]):qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":ml(r),kg(r,s,!0);break;case"textarea":ml(r),Cg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ln]=e,t[ra]=r,_w(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nd(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<To.length;i++)Ae(To[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":Tg(t,r),i=kd(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":Ig(t,r),i=xd(t,r),Ae("invalid",t);break;default:i=r}Ad(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Z0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&X0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ae("scroll",t):l!=null&&sp(t,s,l,o))}switch(n){case"input":ml(t),kg(t,r,!1);break;case"textarea":ml(t),Cg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)Tw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=di(sa.current),di(jn.current),kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ln]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:Tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ln]=e,e.stateNode=r}return Ct(e),null;case 13:if(De(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&Jt!==null&&e.mode&1&&!(e.flags&128))j1(),ks(),e.flags|=98560,s=!1;else if(s=kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Ln]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else Tn!==null&&(hf(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?ot===0&&(ot=3):zp())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return Cs(),nf(t,e),t===null&&ta(e.stateNode.containerInfo),Ct(e),null;case 10:return kp(e.type._context),Ct(e),null;case 17:return Gt(e.type)&&_u(),Ct(e),null;case 19:if(De(je),s=e.memoizedState,s===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fo(s,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ru(t),o!==null){for(e.flags|=128,fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>Rs&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Fe)return Ct(e),null}else 2*Qe()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=je.current,xe(je,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return jp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xt&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function DI(t,e){switch(Ep(e),e.tag){case 1:return Gt(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),De(qt),De($t),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(De(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(je),null;case 4:return Cs(),null;case 10:return kp(e.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var xl=!1,At=!1,PI=typeof WeakSet=="function"?WeakSet:Set,j=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function rf(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var my=!1;function OI(t,e){if(jd=yu,t=x1(),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},yu=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:En(e.type,w),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(p){Ke(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return v=my,my=!1,v}function Mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rf(e,n,s)}i=i.next}while(i!==r)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kw(t){var e=t.alternate;e!==null&&(t.alternate=null,kw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ln],delete e[ra],delete e[Hd],delete e[mI],delete e[gI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iw(t){return t.tag===5||t.tag===3||t.tag===4}function gy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eu));else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var vt=null,_n=!1;function kr(t,e,n){for(n=n.child;n!==null;)Cw(t,e,n),n=n.sibling}function Cw(t,e,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:At||ns(n,e);case 6:var r=vt,i=_n;vt=null,kr(t,e,n),vt=r,_n=i,vt!==null&&(_n?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(_n?(t=vt,n=n.stateNode,t.nodeType===8?$h(t.parentNode,n):t.nodeType===1&&$h(t,n),Jo(t)):$h(vt,n.stateNode));break;case 4:r=vt,i=_n,vt=n.stateNode.containerInfo,_n=!0,kr(t,e,n),vt=r,_n=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),i=i.next}while(i!==r)}kr(t,e,n);break;case 1:if(!At&&(ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,kr(t,e,n),At=r):kr(t,e,n);break;default:kr(t,e,n)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PI),e.forEach(function(r){var i=VI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,_n=!1;break e;case 3:vt=a.stateNode.containerInfo,_n=!0;break e;case 4:vt=a.stateNode.containerInfo,_n=!0;break e}a=a.return}if(vt===null)throw Error(D(160));Cw(s,o,i),vt=null,_n=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xw(e,t),e=e.sibling}function xw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Pn(t),r&4){try{Mo(3,t,t.return),wc(3,t)}catch(w){Ke(t,t.return,w)}try{Mo(5,t,t.return)}catch(w){Ke(t,t.return,w)}}break;case 1:wn(e,t),Pn(t),r&512&&n!==null&&ns(n,n.return);break;case 5:if(wn(e,t),Pn(t),r&512&&n!==null&&ns(n,n.return),t.flags&32){var i=t.stateNode;try{Go(i,"")}catch(w){Ke(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&G0(i,s),Nd(a,o);var u=Nd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Z0(i,h):c==="dangerouslySetInnerHTML"?X0(i,h):c==="children"?Go(i,h):sp(i,c,h,u)}switch(a){case"input":Id(i,s);break;case"textarea":Q0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?us(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[ra]=s}catch(w){Ke(t,t.return,w)}}break;case 6:if(wn(e,t),Pn(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ke(t,t.return,w)}}break;case 3:if(wn(e,t),Pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(w){Ke(t,t.return,w)}break;case 4:wn(e,t),Pn(t);break;case 13:wn(e,t),Pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fp=Qe())),r&4&&yy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(At=(u=At)||c,wn(e,t),At=u):wn(e,t),Pn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(h=j=c;j!==null;){switch(d=j,g=d.child,d.tag){case 0:case 11:case 14:case 15:Mo(4,d,d.return);break;case 1:ns(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Ke(r,n,w)}}break;case 5:ns(d,d.return);break;case 22:if(d.memoizedState!==null){wy(h);continue}}g!==null?(g.return=d,j=g):wy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=J0("display",o))}catch(w){Ke(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Ke(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wn(e,t),Pn(t),r&4&&yy(t);break;case 21:break;default:wn(e,t),Pn(t)}}function Pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iw(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Go(i,""),r.flags&=-33);var s=gy(t);af(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gy(t);of(t,a,o);break;default:throw Error(D(161))}}catch(l){Ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LI(t,e,n){j=t,Rw(t)}function Rw(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||At;a=xl;var u=At;if(xl=o,(At=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Ey(i):l!==null?(l.return=o,j=l):Ey(i);for(;s!==null;)j=s,Rw(s),s=s.sibling;j=i,xl=a,At=u}vy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):vy(t)}}function vy(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Jo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}At||e.flags&512&&sf(e)}catch(d){Ke(e,e.return,d)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function wy(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function Ey(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){Ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ke(e,i,l)}}var s=e.return;try{sf(e)}catch(l){Ke(e,s,l)}break;case 5:var o=e.return;try{sf(e)}catch(l){Ke(e,o,l)}}}catch(l){Ke(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var $I=Math.ceil,Du=vr.ReactCurrentDispatcher,Mp=vr.ReactCurrentOwner,pn=vr.ReactCurrentBatchConfig,ge=0,ht=null,et=null,_t=0,Xt=0,rs=ni(0),ot=0,ua=null,ki=0,Ec=0,bp=0,bo=null,Wt=null,Fp=0,Rs=1/0,Jn=null,Pu=!1,lf=null,Vr=null,Rl=!1,$r=null,Ou=0,Fo=0,uf=null,eu=-1,tu=0;function jt(){return ge&6?Qe():eu!==-1?eu:eu=Qe()}function Br(t){return t.mode&1?ge&2&&_t!==0?_t&-_t:vI.transition!==null?(tu===0&&(tu=h1()),tu):(t=Te,t!==0||(t=window.event,t=t===void 0?16:v1(t.type)),t):1}function xn(t,e,n,r){if(50<Fo)throw Fo=0,uf=null,Error(D(185));$a(t,n,r),(!(ge&2)||t!==ht)&&(t===ht&&(!(ge&2)&&(Ec|=n),ot===4&&Ar(t,_t)),Qt(t,r),n===1&&ge===0&&!(e.mode&1)&&(Rs=Qe()+500,gc&&ri()))}function Qt(t,e){var n=t.callbackNode;vk(t,e);var r=gu(t,t===ht?_t:0);if(r===0)n!==null&&Ag(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ag(n),e===1)t.tag===0?yI(_y.bind(null,t)):b1(_y.bind(null,t)),fI(function(){!(ge&6)&&ri()}),n=null;else{switch(d1(r)){case 1:n=cp;break;case 4:n=u1;break;case 16:n=mu;break;case 536870912:n=c1;break;default:n=mu}n=Mw(n,Aw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Aw(t,e){if(eu=-1,tu=0,ge&6)throw Error(D(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=gu(t,t===ht?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lu(t,r);else{e=r;var i=ge;ge|=2;var s=Dw();(ht!==t||_t!==e)&&(Jn=null,Rs=Qe()+500,yi(t,e));do try{FI();break}catch(a){Nw(t,a)}while(1);Tp(),Du.current=s,ge=i,et!==null?e=0:(ht=null,_t=0,e=ot)}if(e!==0){if(e===2&&(i=$d(t),i!==0&&(r=i,e=cf(t,i))),e===1)throw n=ua,yi(t,0),Ar(t,r),Qt(t,Qe()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!MI(i)&&(e=Lu(t,r),e===2&&(s=$d(t),s!==0&&(r=s,e=cf(t,s))),e===1))throw n=ua,yi(t,0),Ar(t,r),Qt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:li(t,Wt,Jn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Fp+500-Qe(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bd(li.bind(null,t,Wt,Jn),e);break}li(t,Wt,Jn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$I(r/1960))-r,10<r){t.timeoutHandle=Bd(li.bind(null,t,Wt,Jn),r);break}li(t,Wt,Jn);break;case 5:li(t,Wt,Jn);break;default:throw Error(D(329))}}}return Qt(t,Qe()),t.callbackNode===n?Aw.bind(null,t):null}function cf(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&hf(e)),t}function hf(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function MI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~bp,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function _y(t){if(ge&6)throw Error(D(327));ps();var e=gu(t,0);if(!(e&1))return Qt(t,Qe()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var r=$d(t);r!==0&&(e=r,n=cf(t,r))}if(n===1)throw n=ua,yi(t,0),Ar(t,e),Qt(t,Qe()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Wt,Jn),Qt(t,Qe()),null}function Up(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Rs=Qe()+500,gc&&ri())}}function Ii(t){$r!==null&&$r.tag===0&&!(ge&6)&&ps();var e=ge;ge|=1;var n=pn.transition,r=Te;try{if(pn.transition=null,Te=1,t)return t()}finally{Te=r,pn.transition=n,ge=e,!(ge&6)&&ri()}}function jp(){Xt=rs.current,De(rs)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dI(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(Ep(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_u();break;case 3:Cs(),De(qt),De($t),Ap();break;case 5:Rp(r);break;case 4:Cs();break;case 13:De(je);break;case 19:De(je);break;case 10:kp(r.type._context);break;case 22:case 23:jp()}n=n.return}if(ht=t,et=t=Hr(t.current,null),_t=Xt=e,ot=0,ua=null,bp=Ec=ki=0,Wt=bo=null,hi!==null){for(e=0;e<hi.length;e++)if(n=hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hi=null}return t}function Nw(t,e){do{var n=et;try{if(Tp(),Xl.current=Nu,Au){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Au=!1}if(Ti=0,ct=it=ze=null,$o=!1,oa=0,Mp.current=null,n===null||n.return===null){ot=1,ua=e,et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ly(o);if(g!==null){g.flags&=-257,uy(g,o,a,s,e),g.mode&1&&ay(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){ay(s,u,e),zp();break e}l=Error(D(426))}}else if(Fe&&a.mode&1){var E=ly(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),uy(E,o,a,s,e),_p(xs(l,a));break e}}s=l=xs(l,a),ot!==4&&(ot=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fw(s,l,e);ey(s,m);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Vr===null||!Vr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=pw(s,a,e);ey(s,p);break e}}s=s.return}while(s!==null)}Ow(n)}catch(T){e=T,et===n&&n!==null&&(et=n=n.return);continue}break}while(1)}function Dw(){var t=Du.current;return Du.current=Nu,t===null?Nu:t}function zp(){(ot===0||ot===3||ot===2)&&(ot=4),ht===null||!(ki&268435455)&&!(Ec&268435455)||Ar(ht,_t)}function Lu(t,e){var n=ge;ge|=2;var r=Dw();(ht!==t||_t!==e)&&(Jn=null,yi(t,e));do try{bI();break}catch(i){Nw(t,i)}while(1);if(Tp(),ge=n,Du.current=r,et!==null)throw Error(D(261));return ht=null,_t=0,ot}function bI(){for(;et!==null;)Pw(et)}function FI(){for(;et!==null&&!uk();)Pw(et)}function Pw(t){var e=$w(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?Ow(t):et=e,Mp.current=null}function Ow(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DI(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,et=null;return}}else if(n=NI(n,e,Xt),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);ot===0&&(ot=5)}function li(t,e,n){var r=Te,i=pn.transition;try{pn.transition=null,Te=1,UI(t,e,n,r)}finally{pn.transition=i,Te=r}return null}function UI(t,e,n,r){do ps();while($r!==null);if(ge&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wk(t,s),t===ht&&(et=ht=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,Mw(mu,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var o=Te;Te=1;var a=ge;ge|=4,Mp.current=null,OI(t,n),xw(n,t),sI(zd),yu=!!jd,zd=jd=null,t.current=n,LI(n),ck(),ge=a,Te=o,pn.transition=s}else t.current=n;if(Rl&&(Rl=!1,$r=t,Ou=i),s=t.pendingLanes,s===0&&(Vr=null),fk(n.stateNode),Qt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pu)throw Pu=!1,t=lf,lf=null,t;return Ou&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===uf?Fo++:(Fo=0,uf=t):Fo=0,ri(),null}function ps(){if($r!==null){var t=d1(Ou),e=pn.transition,n=Te;try{if(pn.transition=null,Te=16>t?16:t,$r===null)var r=!1;else{if(t=$r,$r=null,Ou=0,ge&6)throw Error(D(331));var i=ge;for(ge|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Mo(8,c,s)}var h=c.child;if(h!==null)h.return=c,j=h;else for(;j!==null;){c=j;var d=c.sibling,g=c.return;if(kw(c),c===u){j=null;break}if(d!==null){d.return=g,j=d;break}j=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,j=m;break e}j=s.return}}var f=t.current;for(j=f;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(T){Ke(a,a.return,T)}if(a===o){j=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,j=p;break e}j=a.return}}if(ge=i,ri(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(hc,t)}catch{}r=!0}return r}finally{Te=n,pn.transition=e}}return!1}function Sy(t,e,n){e=xs(n,e),e=fw(t,e,1),t=zr(t,e,1),e=jt(),t!==null&&($a(t,1,e),Qt(t,e))}function Ke(t,e,n){if(t.tag===3)Sy(t,t,n);else for(;e!==null;){if(e.tag===3){Sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))){t=xs(n,t),t=pw(e,t,1),e=zr(e,t,1),t=jt(),e!==null&&($a(e,1,t),Qt(e,t));break}}e=e.return}}function jI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(_t&n)===n&&(ot===4||ot===3&&(_t&130023424)===_t&&500>Qe()-Fp?yi(t,0):bp|=n),Qt(t,e)}function Lw(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=jt();t=hr(t,e),t!==null&&($a(t,e,n),Qt(t,n))}function zI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lw(t,n)}function VI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),Lw(t,n)}var $w;$w=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,AI(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,Fe&&e.flags&1048576&&F1(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zl(t,e),t=e.pendingProps;var i=Ts(e,$t.current);fs(e,n),i=Dp(null,e,r,t,i,n);var s=Pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)?(s=!0,Su(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cp(e),i.updater=yc,e.stateNode=i,i._reactInternals=e,Yd(e,r,t,n),e=Zd(null,e,r,!0,s,n)):(e.tag=0,Fe&&s&&wp(e),Ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HI(r),t=En(r,t),i){case 0:e=Jd(null,e,r,t,n);break e;case 1:e=dy(null,e,r,t,n);break e;case 11:e=cy(null,e,r,t,n);break e;case 14:e=hy(null,e,r,En(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Jd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),dy(t,e,r,i,n);case 3:e:{if(vw(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,V1(t,e),xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xs(Error(D(423)),e),e=fy(t,e,r,n,i);break e}else if(r!==i){i=xs(Error(D(424)),e),e=fy(t,e,r,n,i);break e}else for(Jt=jr(e.stateNode.containerInfo.firstChild),Zt=e,Fe=!0,Tn=null,n=K1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===i){e=dr(t,e,n);break e}Ft(t,e,r,n)}e=e.child}return e;case 5:return q1(e),t===null&&qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vd(r,i)?o=null:s!==null&&Vd(r,s)&&(e.flags|=32),yw(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&qd(e),null;case 13:return ww(t,e,n);case 4:return xp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Is(e,null,r,n):Ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),cy(t,e,r,i,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,xe(Iu,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!qt.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=or(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fs(e,n),i=gn(i),r=r(i),e.flags|=1,Ft(t,e,r,n),e.child;case 14:return r=e.type,i=En(r,e.pendingProps),i=En(r.type,i),hy(t,e,r,i,n);case 15:return mw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Zl(t,e),e.tag=1,Gt(r)?(t=!0,Su(e)):t=!1,fs(e,n),H1(e,r,i),Yd(e,r,i,n),Zd(null,e,r,!0,t,n);case 19:return Ew(t,e,n);case 22:return gw(t,e,n)}throw Error(D(156,e.tag))};function Mw(t,e){return l1(t,e)}function BI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new BI(t,e,n,r)}function Vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HI(t){if(typeof t=="function")return Vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===lp)return 14}return 2}function Hr(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qi:return vi(n.children,i,s,e);case op:o=8,i|=8;break;case Ed:return t=fn(12,n,e,i|2),t.elementType=Ed,t.lanes=s,t;case _d:return t=fn(13,n,e,i),t.elementType=_d,t.lanes=s,t;case Sd:return t=fn(19,n,e,i),t.elementType=Sd,t.lanes=s,t;case W0:return _c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B0:o=10;break e;case H0:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case Cr:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=fn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function _c(t,e,n,r){return t=fn(22,t,r,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function Bh(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function Hh(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kh(0),this.expirationTimes=kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bp(t,e,n,r,i,s,o,a,l){return t=new WI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cp(s),t}function KI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bw(t){if(!t)return Yr;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(Gt(n))return M1(t,n,e)}return e}function Fw(t,e,n,r,i,s,o,a,l){return t=Bp(n,r,!0,t,i,s,o,a,l),t.context=bw(null),n=t.current,r=jt(),i=Br(n),s=or(r,i),s.callback=e??null,zr(n,s,i),t.current.lanes=i,$a(t,i,r),Qt(t,r),t}function Sc(t,e,n,r){var i=e.current,s=jt(),o=Br(i);return n=bw(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(i,e,o),t!==null&&(xn(t,i,o,s),Yl(t,i,o)),o}function $u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hp(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function qI(){return null}var Uw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wp(t){this._internalRoot=t}Tc.prototype.render=Wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));Sc(t,e,null,null)};Tc.prototype.unmount=Wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ii(function(){Sc(null,t,null,null)}),e[cr]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=m1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&y1(t)}};function Kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ky(){}function GI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$u(o);s.call(u)}}var o=Fw(e,r,t,0,null,!1,!1,"",ky);return t._reactRootContainer=o,t[cr]=o.current,ta(t.nodeType===8?t.parentNode:t),Ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$u(l);a.call(u)}}var l=Bp(t,0,!1,null,null,!1,!1,"",ky);return t._reactRootContainer=l,t[cr]=l.current,ta(t.nodeType===8?t.parentNode:t),Ii(function(){Sc(e,l,n,r)}),l}function Ic(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$u(o);a.call(l)}}Sc(e,o,t,i)}else o=GI(n,e,t,i,r);return $u(o)}f1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(hp(e,n|1),Qt(e,Qe()),!(ge&6)&&(Rs=Qe()+500,ri()))}break;case 13:Ii(function(){var r=hr(t,1);if(r!==null){var i=jt();xn(r,t,1,i)}}),Hp(t,1)}};dp=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=jt();xn(e,t,134217728,n)}Hp(t,134217728)}};p1=function(t){if(t.tag===13){var e=Br(t),n=hr(t,e);if(n!==null){var r=jt();xn(n,t,e,r)}Hp(t,e)}};m1=function(){return Te};g1=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};Pd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mc(r);if(!i)throw Error(D(90));q0(r),Id(r,i)}}}break;case"textarea":Q0(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};n1=Up;r1=Ii;var QI={usingClientEntryPoint:!1,Events:[ba,Xi,mc,e1,t1,Up]},po={findFiberByHostInstance:ci,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YI={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o1(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||qI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{hc=Al.inject(YI),Un=Al}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QI;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kp(e))throw Error(D(200));return KI(t,e,null,n)};nn.createRoot=function(t,e){if(!Kp(t))throw Error(D(299));var n=!1,r="",i=Uw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bp(t,1,!1,null,null,n,!1,r,i),t[cr]=e.current,ta(t.nodeType===8?t.parentNode:t),new Wp(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=o1(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return Ii(t)};nn.hydrate=function(t,e,n){if(!kc(e))throw Error(D(200));return Ic(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Kp(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Uw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fw(e,null,t,1,n??null,i,!1,s,o),t[cr]=e.current,ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tc(e)};nn.render=function(t,e,n){if(!kc(e))throw Error(D(200));return Ic(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!kc(t))throw Error(D(40));return t._reactRootContainer?(Ii(function(){Ic(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};nn.unstable_batchedUpdates=Up;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return Ic(t,e,n,!1,r)};nn.version="18.2.0-next-9e3b772b8-20220608";function jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jw)}catch(t){console.error(t)}}jw(),F0.exports=nn;var XI=F0.exports,Iy=XI;vd.createRoot=Iy.createRoot,vd.hydrateRoot=Iy.hydrateRoot;var zw={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=typeof Symbol=="function"&&Symbol.for,qp=ft?Symbol.for("react.element"):60103,Gp=ft?Symbol.for("react.portal"):60106,Cc=ft?Symbol.for("react.fragment"):60107,xc=ft?Symbol.for("react.strict_mode"):60108,Rc=ft?Symbol.for("react.profiler"):60114,Ac=ft?Symbol.for("react.provider"):60109,Nc=ft?Symbol.for("react.context"):60110,Qp=ft?Symbol.for("react.async_mode"):60111,Dc=ft?Symbol.for("react.concurrent_mode"):60111,Pc=ft?Symbol.for("react.forward_ref"):60112,Oc=ft?Symbol.for("react.suspense"):60113,JI=ft?Symbol.for("react.suspense_list"):60120,Lc=ft?Symbol.for("react.memo"):60115,$c=ft?Symbol.for("react.lazy"):60116,ZI=ft?Symbol.for("react.block"):60121,eC=ft?Symbol.for("react.fundamental"):60117,tC=ft?Symbol.for("react.responder"):60118,nC=ft?Symbol.for("react.scope"):60119;function sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qp:switch(t=t.type,t){case Qp:case Dc:case Cc:case Rc:case xc:case Oc:return t;default:switch(t=t&&t.$$typeof,t){case Nc:case Pc:case $c:case Lc:case Ac:return t;default:return e}}case Gp:return e}}}function Vw(t){return sn(t)===Dc}Ie.AsyncMode=Qp;Ie.ConcurrentMode=Dc;Ie.ContextConsumer=Nc;Ie.ContextProvider=Ac;Ie.Element=qp;Ie.ForwardRef=Pc;Ie.Fragment=Cc;Ie.Lazy=$c;Ie.Memo=Lc;Ie.Portal=Gp;Ie.Profiler=Rc;Ie.StrictMode=xc;Ie.Suspense=Oc;Ie.isAsyncMode=function(t){return Vw(t)||sn(t)===Qp};Ie.isConcurrentMode=Vw;Ie.isContextConsumer=function(t){return sn(t)===Nc};Ie.isContextProvider=function(t){return sn(t)===Ac};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qp};Ie.isForwardRef=function(t){return sn(t)===Pc};Ie.isFragment=function(t){return sn(t)===Cc};Ie.isLazy=function(t){return sn(t)===$c};Ie.isMemo=function(t){return sn(t)===Lc};Ie.isPortal=function(t){return sn(t)===Gp};Ie.isProfiler=function(t){return sn(t)===Rc};Ie.isStrictMode=function(t){return sn(t)===xc};Ie.isSuspense=function(t){return sn(t)===Oc};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Cc||t===Dc||t===Rc||t===xc||t===Oc||t===JI||typeof t=="object"&&t!==null&&(t.$$typeof===$c||t.$$typeof===Lc||t.$$typeof===Ac||t.$$typeof===Nc||t.$$typeof===Pc||t.$$typeof===eC||t.$$typeof===tC||t.$$typeof===nC||t.$$typeof===ZI)};Ie.typeOf=sn;zw.exports=Ie;var Yp=zw.exports;function rC(t){function e(b,U,M,q,_){for(var he=0,$=0,Le=0,ye=0,ve,se,tt=0,kt=0,ue,nt=ue=ve=0,pe=0,We=0,Yn=0,Ce=0,oi=M.length,Sr=oi-1,Bt,X="",$e="",Tr="",ji="",on;pe<oi;){if(se=M.charCodeAt(pe),pe===Sr&&$+ye+Le+he!==0&&($!==0&&(se=$===47?10:47),ye=Le=he=0,oi++,Sr++),$+ye+Le+he===0){if(pe===Sr&&(0<We&&(X=X.replace(d,"")),0<X.trim().length)){switch(se){case 32:case 9:case 59:case 13:case 10:break;default:X+=M.charAt(pe)}se=59}switch(se){case 123:for(X=X.trim(),ve=X.charCodeAt(0),ue=1,Ce=++pe;pe<oi;){switch(se=M.charCodeAt(pe)){case 123:ue++;break;case 125:ue--;break;case 47:switch(se=M.charCodeAt(pe+1)){case 42:case 47:e:{for(nt=pe+1;nt<Sr;++nt)switch(M.charCodeAt(nt)){case 47:if(se===42&&M.charCodeAt(nt-1)===42&&pe+2!==nt){pe=nt+1;break e}break;case 10:if(se===47){pe=nt+1;break e}}pe=nt}}break;case 91:se++;case 40:se++;case 34:case 39:for(;pe++<Sr&&M.charCodeAt(pe)!==se;);}if(ue===0)break;pe++}switch(ue=M.substring(Ce,pe),ve===0&&(ve=(X=X.replace(h,"").trim()).charCodeAt(0)),ve){case 64:switch(0<We&&(X=X.replace(d,"")),se=X.charCodeAt(1),se){case 100:case 109:case 115:case 45:We=U;break;default:We=gt}if(ue=e(U,We,ue,se,_+1),Ce=ue.length,0<L&&(We=n(gt,X,Yn),on=a(3,ue,We,U,Ye,ae,Ce,se,_,q),X=We.join(""),on!==void 0&&(Ce=(ue=on.trim()).length)===0&&(se=0,ue="")),0<Ce)switch(se){case 115:X=X.replace(R,o);case 100:case 109:case 45:ue=X+"{"+ue+"}";break;case 107:X=X.replace(f,"$1 $2"),ue=X+"{"+ue+"}",ue=Ue===1||Ue===2&&s("@"+ue,3)?"@-webkit-"+ue+"@"+ue:"@"+ue;break;default:ue=X+ue,q===112&&(ue=($e+=ue,""))}else ue="";break;default:ue=e(U,n(U,X,Yn),ue,q,_+1)}Tr+=ue,ue=Yn=We=nt=ve=0,X="",se=M.charCodeAt(++pe);break;case 125:case 59:if(X=(0<We?X.replace(d,""):X).trim(),1<(Ce=X.length))switch(nt===0&&(ve=X.charCodeAt(0),ve===45||96<ve&&123>ve)&&(Ce=(X=X.replace(" ",":")).length),0<L&&(on=a(1,X,U,b,Ye,ae,$e.length,q,_,q))!==void 0&&(Ce=(X=on.trim()).length)===0&&(X="\0\0"),ve=X.charCodeAt(0),se=X.charCodeAt(1),ve){case 0:break;case 64:if(se===105||se===99){ji+=X+M.charAt(pe);break}default:X.charCodeAt(Ce-1)!==58&&($e+=i(X,ve,se,X.charCodeAt(2)))}Yn=We=nt=ve=0,X="",se=M.charCodeAt(++pe)}}switch(se){case 13:case 10:$===47?$=0:1+ve===0&&q!==107&&0<X.length&&(We=1,X+="\0"),0<L*Y&&a(0,X,U,b,Ye,ae,$e.length,q,_,q),ae=1,Ye++;break;case 59:case 125:if($+ye+Le+he===0){ae++;break}default:switch(ae++,Bt=M.charAt(pe),se){case 9:case 32:if(ye+he+$===0)switch(tt){case 44:case 58:case 9:case 32:Bt="";break;default:se!==32&&(Bt=" ")}break;case 0:Bt="\\0";break;case 12:Bt="\\f";break;case 11:Bt="\\v";break;case 38:ye+$+he===0&&(We=Yn=1,Bt="\f"+Bt);break;case 108:if(ye+$+he+mt===0&&0<nt)switch(pe-nt){case 2:tt===112&&M.charCodeAt(pe-3)===58&&(mt=tt);case 8:kt===111&&(mt=kt)}break;case 58:ye+$+he===0&&(nt=pe);break;case 44:$+Le+ye+he===0&&(We=1,Bt+="\r");break;case 34:case 39:$===0&&(ye=ye===se?0:ye===0?se:ye);break;case 91:ye+$+Le===0&&he++;break;case 93:ye+$+Le===0&&he--;break;case 41:ye+$+he===0&&Le--;break;case 40:if(ye+$+he===0){if(ve===0)switch(2*tt+3*kt){case 533:break;default:ve=1}Le++}break;case 64:$+Le+ye+he+nt+ue===0&&(ue=1);break;case 42:case 47:if(!(0<ye+he+Le))switch($){case 0:switch(2*se+3*M.charCodeAt(pe+1)){case 235:$=47;break;case 220:Ce=pe,$=42}break;case 42:se===47&&tt===42&&Ce+2!==pe&&(M.charCodeAt(Ce+2)===33&&($e+=M.substring(Ce,pe+1)),Bt="",$=0)}}$===0&&(X+=Bt)}kt=tt,tt=se,pe++}if(Ce=$e.length,0<Ce){if(We=U,0<L&&(on=a(2,$e,We,b,Ye,ae,Ce,q,_,q),on!==void 0&&($e=on).length===0))return ji+$e+Tr;if($e=We.join(",")+"{"+$e+"}",Ue*mt!==0){switch(Ue!==2||s($e,2)||(mt=0),mt){case 111:$e=$e.replace(p,":-moz-$1")+$e;break;case 112:$e=$e.replace(y,"::-webkit-input-$1")+$e.replace(y,"::-moz-$1")+$e.replace(y,":-ms-input-$1")+$e}mt=0}}return ji+$e+Tr}function n(b,U,M){var q=U.trim().split(E);U=q;var _=q.length,he=b.length;switch(he){case 0:case 1:var $=0;for(b=he===0?"":b[0]+" ";$<_;++$)U[$]=r(b,U[$],M).trim();break;default:var Le=$=0;for(U=[];$<_;++$)for(var ye=0;ye<he;++ye)U[Le++]=r(b[ye]+" ",q[$],M).trim()}return U}function r(b,U,M){var q=U.charCodeAt(0);switch(33>q&&(q=(U=U.trim()).charCodeAt(0)),q){case 38:return U.replace(m,"$1"+b.trim());case 58:return b.trim()+U.replace(m,"$1"+b.trim());default:if(0<1*M&&0<U.indexOf("\f"))return U.replace(m,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+U}function i(b,U,M,q){var _=b+";",he=2*U+3*M+4*q;if(he===944){b=_.indexOf(":",9)+1;var $=_.substring(b,_.length-1).trim();return $=_.substring(0,b).trim()+$+";",Ue===1||Ue===2&&s($,1)?"-webkit-"+$+$:$}if(Ue===0||Ue===2&&!s(_,1))return _;switch(he){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(Oe,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return $=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+_+"-ms-flex-pack"+$+_;case 1005:return v.test(_)?_.replace(g,":-webkit-")+_.replace(g,":-moz-")+_:_;case 1e3:switch($=_.substring(13).trim(),U=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(U)){case 226:$=_.replace(T,"tb");break;case 232:$=_.replace(T,"tb-rl");break;case 220:$=_.replace(T,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+$+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(U=(_=b).length-10,$=(_.charCodeAt(U)===33?_.substring(0,U):_).substring(b.indexOf(":",7)+1).trim(),he=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:_=_.replace($,"-webkit-"+$)+";"+_;break;case 207:case 102:_=_.replace($,"-webkit-"+(102<he?"inline-":"")+"box")+";"+_.replace($,"-webkit-"+$)+";"+_.replace($,"-ms-"+$+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return $=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+$+"-ms-flex-"+$+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(O,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(O,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(W.test(b)===!0)return($=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?i(b.replace("stretch","fill-available"),U,M,q).replace(":fill-available",":stretch"):_.replace($,"-webkit-"+$)+_.replace($,"-moz-"+$.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,M+q===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+_}return _}function s(b,U){var M=b.indexOf(U===1?":":"{"),q=b.substring(0,U!==3?M:10);return M=b.substring(M+1,b.length-1),H(U!==2?q:q.replace(K,"$1"),M,U)}function o(b,U){var M=i(U,U.charCodeAt(0),U.charCodeAt(1),U.charCodeAt(2));return M!==U+";"?M.replace(A," or ($1)").substring(4):"("+U+")"}function a(b,U,M,q,_,he,$,Le,ye,ve){for(var se=0,tt=U,kt;se<L;++se)switch(kt=He[se].call(c,b,tt,M,q,_,he,$,Le,ye,ve)){case void 0:case!1:case!0:case null:break;default:tt=kt}if(tt!==U)return tt}function l(b){switch(b){case void 0:case null:L=He.length=0;break;default:if(typeof b=="function")He[L++]=b;else if(typeof b=="object")for(var U=0,M=b.length;U<M;++U)l(b[U]);else Y=!!b|0}return l}function u(b){return b=b.prefix,b!==void 0&&(H=null,b?typeof b!="function"?Ue=1:(Ue=2,H=b):Ue=0),u}function c(b,U){var M=b;if(33>M.charCodeAt(0)&&(M=M.trim()),Se=M,M=[Se],0<L){var q=a(-1,U,M,M,Ye,ae,0,0,0,0);q!==void 0&&typeof q=="string"&&(U=q)}var _=e(gt,M,U,0,0);return 0<L&&(q=a(-2,_,M,M,Ye,ae,_.length,0,0,0),q!==void 0&&(_=q)),Se="",mt=0,ae=Ye=1,_}var h=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,E=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,p=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,O=/-self|flex-/g,K=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,Oe=/([^-])(image-set\()/,ae=1,Ye=1,mt=0,Ue=1,gt=[],He=[],L=0,H=null,Y=0,Se="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var iC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function sC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var oC=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cy=sC(function(t){return oC.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Xp=Yp,aC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jp={};Jp[Xp.ForwardRef]=uC;Jp[Xp.Memo]=Bw;function xy(t){return Xp.isMemo(t)?Bw:Jp[t.$$typeof]||aC}var cC=Object.defineProperty,hC=Object.getOwnPropertyNames,Ry=Object.getOwnPropertySymbols,dC=Object.getOwnPropertyDescriptor,fC=Object.getPrototypeOf,Ay=Object.prototype;function Hw(t,e,n){if(typeof e!="string"){if(Ay){var r=fC(e);r&&r!==Ay&&Hw(t,r,n)}var i=hC(e);Ry&&(i=i.concat(Ry(e)));for(var s=xy(t),o=xy(e),a=0;a<i.length;++a){var l=i[a];if(!lC[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=dC(e,l);try{cC(t,l,u)}catch{}}}}return t}var pC=Hw;const mC=x0(pC);function nr(){return(nr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Ny=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},df=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Yp.typeOf(t)},Mu=Object.freeze([]),Wr=Object.freeze({});function ca(t){return typeof t=="function"}function Dy(t){return t.displayName||t.name||"Component"}function Zp(t){return t&&typeof t.styledComponentId=="string"}var As=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",em=typeof window<"u"&&"HTMLElement"in window,gC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ua(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var yC=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ua(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),ru=new Map,bu=new Map,Uo=1,Nl=function(t){if(ru.has(t))return ru.get(t);for(;bu.has(Uo);)Uo++;var e=Uo++;return ru.set(t,e),bu.set(e,t),e},vC=function(t){return bu.get(t)},wC=function(t,e){e>=Uo&&(Uo=e+1),ru.set(t,e),bu.set(e,t)},EC="style["+As+'][data-styled-version="5.3.10"]',_C=new RegExp("^"+As+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),SC=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},TC=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(_C);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(wC(u,l),SC(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},kC=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ww=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(As))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(As,"active"),r.setAttribute("data-styled-version","5.3.10");var o=kC();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},IC=function(){function t(n){var r=this.element=Ww(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Ua(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),CC=function(){function t(n){var r=this.element=Ww(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),xC=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Py=em,RC={isServer:!em,useCSSOMInjection:!gC},Kw=function(){function t(n,r,i){n===void 0&&(n=Wr),r===void 0&&(r={}),this.options=nr({},RC,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&em&&Py&&(Py=!1,function(s){for(var o=document.querySelectorAll(EC),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(As)!=="active"&&(TC(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Nl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(nr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new xC(o):s?new IC(o):new CC(o),new yC(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Nl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Nl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Nl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=vC(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=As+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),AC=/(a)(d)/gi,Oy=function(t){return String.fromCharCode(t+(t>25?39:97))};function ff(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Oy(e%52)+n;return(Oy(e%52)+n).replace(AC,"$1-$2")}var is=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},qw=function(t){return is(5381,t)};function NC(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ca(n)&&!Zp(n))return!1}return!0}var DC=qw("5.3.10"),PC=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&NC(e),this.componentId=n,this.baseHash=is(DC,n),this.baseStyle=r,Kw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ns(this.rules,e,n,r).join(""),a=ff(is(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=is(this.baseHash,r.hash),h="",d=0;d<u;d++){var g=this.rules[d];if(typeof g=="string")h+=g;else if(g){var v=Ns(g,e,n,r),w=Array.isArray(v)?v.join(""):v;c=is(c,w+d),h+=w}}if(h){var E=ff(c>>>0);if(!n.hasNameForId(i,E)){var m=r(h,"."+E,void 0,i);n.insertRules(i,E,m)}s.push(E)}}return s.join(" ")},t}(),OC=/^\s*\/\/.*$/gm,LC=[":","[",".","#"];function $C(t){var e,n,r,i,s=t===void 0?Wr:t,o=s.options,a=o===void 0?Wr:o,l=s.plugins,u=l===void 0?Mu:l,c=new rC(a),h=[],d=function(w){function E(m){if(m)try{w(m+"}")}catch{}}return function(m,f,y,p,T,R,A,O,K,W){switch(m){case 1:if(K===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(O===0)return f+"/*|*/";break;case 3:switch(O){case 102:case 112:return w(y[0]+f),"";default:return f+(W===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(w){h.push(w)}),g=function(w,E,m){return E===0&&LC.indexOf(m[n.length])!==-1||m.match(i)?w:"."+e};function v(w,E,m,f){f===void 0&&(f="&");var y=w.replace(OC,""),p=E&&m?m+" "+E+" { "+y+" }":y;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!E?"":E,p)}return c.use([].concat(u,[function(w,E,m){w===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,g))},d,function(w){if(w===-2){var E=h;return h=[],E}}])),v.hash=u.length?u.reduce(function(w,E){return E.name||Ua(15),is(w,E.name)},5381).toString():"",v}var Gw=zs.createContext();Gw.Consumer;var Qw=zs.createContext(),MC=(Qw.Consumer,new Kw),pf=$C();function bC(){return x.useContext(Gw)||MC}function FC(){return x.useContext(Qw)||pf}var UC=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=pf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ua(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=pf),this.name+e.hash},t}(),jC=/([A-Z])/,zC=/([A-Z])/g,VC=/^ms-/,BC=function(t){return"-"+t.toLowerCase()};function Ly(t){return jC.test(t)?t.replace(zC,BC).replace(VC,"-ms-"):t}var $y=function(t){return t==null||t===!1||t===""};function Ns(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Ns(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if($y(t))return"";if(Zp(t))return"."+t.styledComponentId;if(ca(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Ns(l,e,n,r)}var u;return t instanceof UC?n?(t.inject(n,r),t.getName(r)):t:df(t)?function c(h,d){var g,v,w=[];for(var E in h)h.hasOwnProperty(E)&&!$y(h[E])&&(Array.isArray(h[E])&&h[E].isCss||ca(h[E])?w.push(Ly(E)+":",h[E],";"):df(h[E])?w.push.apply(w,c(h[E],E)):w.push(Ly(E)+": "+(g=E,(v=h[E])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||g in iC||g.startsWith("--")?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(w,["}"]):w}(t):t.toString()}var My=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function HC(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ca(t)||df(t)?My(Ns(Ny(Mu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:My(Ns(Ny(t,n)))}var WC=function(t,e,n){return n===void 0&&(n=Wr),t.theme!==n.theme&&t.theme||e||n.theme},KC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qC=/(^-|-$)/g;function Wh(t){return t.replace(KC,"-").replace(qC,"")}var GC=function(t){return ff(qw(t)>>>0)};function Dl(t){return typeof t=="string"&&!0}var mf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},QC=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function YC(t,e,n){var r=t[n];mf(e)&&mf(r)?Yw(r,e):t[n]=e}function Yw(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(mf(o))for(var a in o)QC(a)&&YC(t,o[a],a)}return t}var Xw=zs.createContext();Xw.Consumer;var Kh={};function Jw(t,e,n){var r=Zp(t),i=!Dl(t),s=e.attrs,o=s===void 0?Mu:s,a=e.componentId,l=a===void 0?function(f,y){var p=typeof f!="string"?"sc":Wh(f);Kh[p]=(Kh[p]||0)+1;var T=p+"-"+GC("5.3.10"+p+Kh[p]);return y?y+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Dl(f)?"styled."+f:"Styled("+Dy(f)+")"}(t):u,h=e.displayName&&e.componentId?Wh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(f,y,p){return t.shouldForwardProp(f,y,p)&&e.shouldForwardProp(f,y,p)}:t.shouldForwardProp);var v,w=new PC(n,h,r?t.componentStyle:void 0),E=w.isStatic&&o.length===0,m=function(f,y){return function(p,T,R,A){var O=p.attrs,K=p.componentStyle,W=p.defaultProps,Oe=p.foldedComponentIds,ae=p.shouldForwardProp,Ye=p.styledComponentId,mt=p.target,Ue=function(q,_,he){q===void 0&&(q=Wr);var $=nr({},_,{theme:q}),Le={};return he.forEach(function(ye){var ve,se,tt,kt=ye;for(ve in ca(kt)&&(kt=kt($)),kt)$[ve]=Le[ve]=ve==="className"?(se=Le[ve],tt=kt[ve],se&&tt?se+" "+tt:se||tt):kt[ve]}),[$,Le]}(WC(T,x.useContext(Xw),W)||Wr,T,O),gt=Ue[0],He=Ue[1],L=function(q,_,he,$){var Le=bC(),ye=FC(),ve=_?q.generateAndInjectStyles(Wr,Le,ye):q.generateAndInjectStyles(he,Le,ye);return ve}(K,A,gt),H=R,Y=He.$as||T.$as||He.as||T.as||mt,Se=Dl(Y),b=He!==T?nr({},T,{},He):T,U={};for(var M in b)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?U.as=b[M]:(ae?ae(M,Cy,Y):!Se||Cy(M))&&(U[M]=b[M]));return T.style&&He.style!==T.style&&(U.style=nr({},T.style,{},He.style)),U.className=Array.prototype.concat(Oe,Ye,L!==Ye?L:null,T.className,He.className).filter(Boolean).join(" "),U.ref=H,x.createElement(Y,U)}(v,f,y,E)};return m.displayName=c,(v=zs.forwardRef(m)).attrs=d,v.componentStyle=w,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Mu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var y=e.componentId,p=function(R,A){if(R==null)return{};var O,K,W={},Oe=Object.keys(R);for(K=0;K<Oe.length;K++)O=Oe[K],A.indexOf(O)>=0||(W[O]=R[O]);return W}(e,["componentId"]),T=y&&y+"-"+(Dl(f)?f:Wh(Dy(f)));return Jw(f,nr({},p,{attrs:d,componentId:T}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?Yw({},t.defaultProps,f):f}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&mC(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var gf=function(t){return function e(n,r,i){if(i===void 0&&(i=Wr),!Yp.isValidElementType(r))return Ua(1,String(r));var s=function(){return n(r,i,HC.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,nr({},i,{},o))},s.attrs=function(o){return e(n,r,nr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Jw,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){gf[t]=gf(t)});const wr=gf,XC=wr.footer`
    background-color: #101010f7;
    width: 100%;
    padding: 12px 0px;
    text-align: center;
    
    color: white;
    p{
        font-weight: bold;
        
    }

    p a{
        color: #9230f4;
        font-size: 16px;
    }
`;function JC(){return I.jsx(XC,{children:I.jsxs("p",{children:["@2023 Coordinates - Made by ",I.jsx("a",{href:"https://github.com/GuilhermeSella",children:"Guilherme Sella"})]})})}/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function be(){return be=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},be.apply(this,arguments)}var Je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Je||(Je={}));const by="popstate";function ZC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ha("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ci(i)}return tx(e,n,null,t)}function ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ds(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ex(){return Math.random().toString(36).substr(2,8)}function Fy(t,e){return{usr:t.state,key:t.key,idx:e}}function ha(t,e,n,r){return n===void 0&&(n=null),be({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Er(e):e,{state:n,key:e&&e.key||r||ex()})}function Ci(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Er(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function tx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Je.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(be({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Je.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:m})}function d(E,m){a=Je.Push;let f=ha(w.location,E,m);n&&n(f,E),u=c()+1;let y=Fy(f,u),p=w.createHref(f);try{o.pushState(y,"",p)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(p)}s&&l&&l({action:a,location:w.location,delta:1})}function g(E,m){a=Je.Replace;let f=ha(w.location,E,m);n&&n(f,E),u=c();let y=Fy(f,u),p=w.createHref(f);o.replaceState(y,"",p),s&&l&&l({action:a,location:w.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Ci(E);return ce(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(by,h),l=E,()=>{i.removeEventListener(by,h),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:g,go(E){return o.go(E)}};return w}var rt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(rt||(rt={}));const nx=new Set(["lazy","caseSensitive","path","id","index","children"]);function rx(t){return t.index===!0}function yf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ce(i.index!==!0||!i.children,"Cannot specify children on an index route"),ce(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),rx(i)){let l=be({},i,e(i),{id:a});return r[a]=l,l}else{let l=be({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=yf(i.children,e,o,r)),l}})}function ss(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Er(e):e,i=Hs(r.pathname||"/",n);if(i==null)return null;let s=Zw(t);ix(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=fx(s[a],gx(i));return o}function Zw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ar([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Zw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:hx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of eE(s.path))i(s,o,l)}),e}function eE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=eE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ix(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sx=/^:\w+$/,ox=3,ax=2,lx=1,ux=10,cx=-2,Uy=t=>t==="*";function hx(t,e){let n=t.split("/"),r=n.length;return n.some(Uy)&&(r+=cx),e&&(r+=ax),n.filter(i=>!Uy(i)).reduce((i,s)=>i+(sx.test(s)?ox:s===""?lx:ux),r)}function dx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function fx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=px({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ar([i,c.pathname]),pathnameBase:Ex(ar([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ar([i,c.pathnameBase]))}return s}function px(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=mx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=yx(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function mx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ds(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function gx(t){try{return decodeURI(t)}catch(e){return Ds(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yx(t,e){try{return decodeURIComponent(t)}catch(n){return Ds(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Hs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Er(t):t;return{pathname:n?n.startsWith("/")?n:wx(n,e):e,search:_x(r),hash:Sx(i)}}function wx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ja(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Er(t):(i=be({},t),ce(!i.pathname||!i.pathname.includes("?"),qh("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),qh("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),qh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=vx(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),Ex=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_x=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class tm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function tE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nE=["post","put","patch","delete"],Tx=new Set(nE),kx=["get",...nE],Ix=new Set(kx),Cx=new Set([301,302,303,307,308]),xx=new Set([307,308]),Gh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Rx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Pl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},rE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ax=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function Nx(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ce(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let S=t.detectErrorBoundary;i=k=>({hasErrorBoundary:S(k)})}else i=Ax;let s={},o=yf(t.routes,i,void 0,s),a,l=t.basename||"/",u=be({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,g=null,v=null,w=t.hydrationData!=null,E=ss(o,t.history.location,l),m=null;if(E==null){let S=ln(404,{pathname:t.history.location.pathname}),{matches:k,route:C}=qy(o);E=k,m={[C.id]:S}}let f=!E.some(S=>S.route.lazy)&&(!E.some(S=>S.route.loader)||t.hydrationData!=null),y,p={historyAction:t.history.action,location:t.history.location,matches:E,initialized:f,navigation:Gh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},T=Je.Pop,R=!1,A,O=!1,K=!1,W=[],Oe=[],ae=new Map,Ye=0,mt=-1,Ue=new Map,gt=new Set,He=new Map,L=new Map,H=new Map,Y=!1;function Se(){return c=t.history.listen(S=>{let{action:k,location:C,delta:z}=S;if(Y){Y=!1;return}Ds(H.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let oe=ji({currentLocation:p.location,nextLocation:C,historyAction:k});if(oe&&z!=null){Y=!0,t.history.go(z*-1),Tr(oe,{state:"blocked",location:C,proceed(){Tr(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:C}),t.history.go(z)},reset(){let Z=new Map(p.blockers);Z.set(oe,Pl),M({blockers:Z})}});return}return $(k,C)}),p.initialized||$(Je.Pop,p.location),y}function b(){c&&c(),h.clear(),A&&A.abort(),p.fetchers.forEach((S,k)=>Yn(k)),p.blockers.forEach((S,k)=>$e(k))}function U(S){return h.add(S),()=>h.delete(S)}function M(S){p=be({},p,S),h.forEach(k=>k(p))}function q(S,k){var C,z;let oe=p.actionData!=null&&p.navigation.formMethod!=null&&Sn(p.navigation.formMethod)&&p.navigation.state==="loading"&&((C=S.state)==null?void 0:C._isRedirect)!==!0,Z;k.actionData?Object.keys(k.actionData).length>0?Z=k.actionData:Z=null:oe?Z=p.actionData:Z=null;let re=k.loaderData?Ky(p.loaderData,k.loaderData,k.matches||[],k.errors):p.loaderData,ee=new Map;H.clear();let B=R===!0||p.navigation.formMethod!=null&&Sn(p.navigation.formMethod)&&((z=S.state)==null?void 0:z._isRedirect)!==!0;a&&(o=a,a=void 0),O||T===Je.Pop||(T===Je.Push?t.history.push(S,S.state):T===Je.Replace&&t.history.replace(S,S.state)),M(be({},k,{actionData:Z,loaderData:re,historyAction:T,location:S,initialized:!0,navigation:Gh,revalidation:"idle",restoreScrollPosition:mg(S,k.matches||p.matches),preventScrollReset:B,blockers:ee})),T=Je.Pop,R=!1,O=!1,K=!1,W=[],Oe=[]}async function _(S,k){if(typeof S=="number"){t.history.go(S);return}let C=vf(p.location,p.matches,l,u.v7_prependBasename,S,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:z,submission:oe,error:Z}=jy(u.v7_normalizeFormMethod,!1,C,k),re=p.location,ee=ha(p.location,z,k&&k.state);ee=be({},ee,t.history.encodeLocation(ee));let B=k&&k.replace!=null?k.replace:void 0,Re=Je.Push;B===!0?Re=Je.Replace:B===!1||oe!=null&&Sn(oe.formMethod)&&oe.formAction===p.location.pathname+p.location.search&&(Re=Je.Replace);let _e=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,Yt=ji({currentLocation:re,nextLocation:ee,historyAction:Re});if(Yt){Tr(Yt,{state:"blocked",location:ee,proceed(){Tr(Yt,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),_(S,k)},reset(){let lt=new Map(p.blockers);lt.set(Yt,Pl),M({blockers:lt})}});return}return await $(Re,ee,{submission:oe,pendingError:Z,preventScrollReset:_e,replace:k&&k.replace})}function he(){if(pe(),M({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){$(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}$(T||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function $(S,k,C){A&&A.abort(),A=null,T=S,O=(C&&C.startUninterruptedRevalidation)===!0,ST(p.location,p.matches),R=(C&&C.preventScrollReset)===!0;let z=a||o,oe=C&&C.overrideNavigation,Z=ss(z,k,l);if(!Z){let lt=ln(404,{pathname:k.pathname}),{matches:Ht,route:Dn}=qy(z);on(),q(k,{matches:Ht,loaderData:{},errors:{[Dn.id]:lt}});return}if(p.initialized&&!K&&$x(p.location,k)&&!(C&&C.submission&&Sn(C.submission.formMethod))){q(k,{matches:Z});return}A=new AbortController;let re=go(t.history,k,A.signal,C&&C.submission),ee,B;if(C&&C.pendingError)B={[os(Z).route.id]:C.pendingError};else if(C&&C.submission&&Sn(C.submission.formMethod)){let lt=await Le(re,k,C.submission,Z,{replace:C.replace});if(lt.shortCircuited)return;ee=lt.pendingActionData,B=lt.pendingActionError,oe=Ol(k,C.submission),re=new Request(re.url,{signal:re.signal})}let{shortCircuited:Re,loaderData:_e,errors:Yt}=await ye(re,k,Z,oe,C&&C.submission,C&&C.fetcherSubmission,C&&C.replace,ee,B);Re||(A=null,q(k,be({matches:Z},ee?{actionData:ee}:{},{loaderData:_e,errors:Yt})))}async function Le(S,k,C,z,oe){oe===void 0&&(oe={}),pe();let Z=jx(k,C);M({navigation:Z});let re,ee=Ef(z,k);if(!ee.route.action&&!ee.route.lazy)re={type:rt.error,error:ln(405,{method:S.method,pathname:k.pathname,routeId:ee.route.id})};else if(re=await mo("action",S,ee,z,s,i,l),S.signal.aborted)return{shortCircuited:!0};if(ms(re)){let B;return oe&&oe.replace!=null?B=oe.replace:B=re.location===p.location.pathname+p.location.search,await ue(p,re,{submission:C,replace:B}),{shortCircuited:!0}}if(jo(re)){let B=os(z,ee.route.id);return(oe&&oe.replace)!==!0&&(T=Je.Push),{pendingActionData:{},pendingActionError:{[B.route.id]:re.error}}}if(fi(re))throw ln(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:re.data}}}async function ye(S,k,C,z,oe,Z,re,ee,B){let Re=z||Ol(k,oe),_e=oe||Z||Yy(Re),Yt=a||o,[lt,Ht]=zy(t.history,p,C,_e,k,K,W,Oe,He,gt,Yt,l,ee,B);if(on(Me=>!(C&&C.some(an=>an.route.id===Me))||lt&&lt.some(an=>an.route.id===Me)),lt.length===0&&Ht.length===0){let Me=Sr();return q(k,be({matches:C,loaderData:{},errors:B||null},ee?{actionData:ee}:{},Me?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!O){Ht.forEach(an=>{let zi=p.fetchers.get(an.key),yt=yo(void 0,zi?zi.data:void 0);p.fetchers.set(an.key,yt)});let Me=ee||p.actionData;M(be({navigation:Re},Me?Object.keys(Me).length===0?{actionData:null}:{actionData:Me}:{},Ht.length>0?{fetchers:new Map(p.fetchers)}:{}))}mt=++Ye,Ht.forEach(Me=>{ae.has(Me.key)&&Ce(Me.key),Me.controller&&ae.set(Me.key,Me.controller)});let Dn=()=>Ht.forEach(Me=>Ce(Me.key));A&&A.signal.addEventListener("abort",Dn);let{results:io,loaderResults:mh,fetcherResults:cl}=await nt(p.matches,C,lt,Ht,S);if(S.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Dn),Ht.forEach(Me=>ae.delete(Me.key));let Xn=Gy(io);if(Xn)return await ue(p,Xn,{replace:re}),{shortCircuited:!0};let{loaderData:hl,errors:gh}=Wy(p,C,lt,mh,B,Ht,cl,L);L.forEach((Me,an)=>{Me.subscribe(zi=>{(zi||Me.done)&&L.delete(an)})});let yh=Sr(),vh=Bt(mt),dl=yh||vh||Ht.length>0;return be({loaderData:hl,errors:gh},dl?{fetchers:new Map(p.fetchers)}:{})}function ve(S){return p.fetchers.get(S)||Rx}function se(S,k,C,z){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(S)&&Ce(S);let oe=a||o,Z=vf(p.location,p.matches,l,u.v7_prependBasename,C,k,z==null?void 0:z.relative),re=ss(oe,Z,l);if(!re){We(S,k,ln(404,{pathname:Z}));return}let{path:ee,submission:B,error:Re}=jy(u.v7_normalizeFormMethod,!0,Z,z);if(Re){We(S,k,Re);return}let _e=Ef(re,ee);if(R=(z&&z.preventScrollReset)===!0,B&&Sn(B.formMethod)){tt(S,k,ee,_e,re,B);return}He.set(S,{routeId:k,path:ee}),kt(S,k,ee,_e,re,B)}async function tt(S,k,C,z,oe,Z){if(pe(),He.delete(S),!z.route.action&&!z.route.lazy){let yt=ln(405,{method:Z.formMethod,pathname:C,routeId:k});We(S,k,yt);return}let re=p.fetchers.get(S),ee=zx(Z,re);p.fetchers.set(S,ee),M({fetchers:new Map(p.fetchers)});let B=new AbortController,Re=go(t.history,C,B.signal,Z);ae.set(S,B);let _e=await mo("action",Re,z,oe,s,i,l);if(Re.signal.aborted){ae.get(S)===B&&ae.delete(S);return}if(ms(_e)){ae.delete(S),gt.add(S);let yt=yo(Z);return p.fetchers.set(S,yt),M({fetchers:new Map(p.fetchers)}),ue(p,_e,{submission:Z,isFetchActionRedirect:!0})}if(jo(_e)){We(S,k,_e.error);return}if(fi(_e))throw ln(400,{type:"defer-action"});let Yt=p.navigation.location||p.location,lt=go(t.history,Yt,B.signal),Ht=a||o,Dn=p.navigation.state!=="idle"?ss(Ht,p.navigation.location,l):p.matches;ce(Dn,"Didn't find any matches after fetcher action");let io=++Ye;Ue.set(S,io);let mh=yo(Z,_e.data);p.fetchers.set(S,mh);let[cl,Xn]=zy(t.history,p,Dn,Z,Yt,K,W,Oe,He,gt,Ht,l,{[z.route.id]:_e.data},void 0);Xn.filter(yt=>yt.key!==S).forEach(yt=>{let so=yt.key,gg=p.fetchers.get(so),kT=yo(void 0,gg?gg.data:void 0);p.fetchers.set(so,kT),ae.has(so)&&Ce(so),yt.controller&&ae.set(so,yt.controller)}),M({fetchers:new Map(p.fetchers)});let hl=()=>Xn.forEach(yt=>Ce(yt.key));B.signal.addEventListener("abort",hl);let{results:gh,loaderResults:yh,fetcherResults:vh}=await nt(p.matches,Dn,cl,Xn,lt);if(B.signal.aborted)return;B.signal.removeEventListener("abort",hl),Ue.delete(S),ae.delete(S),Xn.forEach(yt=>ae.delete(yt.key));let dl=Gy(gh);if(dl)return ue(p,dl);let{loaderData:Me,errors:an}=Wy(p,p.matches,cl,yh,void 0,Xn,vh,L);if(p.fetchers.has(S)){let yt=iu(_e.data);p.fetchers.set(S,yt)}let zi=Bt(io);p.navigation.state==="loading"&&io>mt?(ce(T,"Expected pending action"),A&&A.abort(),q(p.navigation.location,{matches:Dn,loaderData:Me,errors:an,fetchers:new Map(p.fetchers)})):(M(be({errors:an,loaderData:Ky(p.loaderData,Me,Dn,an)},zi||Xn.length>0?{fetchers:new Map(p.fetchers)}:{})),K=!1)}async function kt(S,k,C,z,oe,Z){let re=p.fetchers.get(S),ee=yo(Z,re?re.data:void 0);p.fetchers.set(S,ee),M({fetchers:new Map(p.fetchers)});let B=new AbortController,Re=go(t.history,C,B.signal);ae.set(S,B);let _e=await mo("loader",Re,z,oe,s,i,l);if(fi(_e)&&(_e=await oE(_e,Re.signal,!0)||_e),ae.get(S)===B&&ae.delete(S),Re.signal.aborted)return;if(ms(_e)){gt.add(S),await ue(p,_e);return}if(jo(_e)){let lt=os(p.matches,k);p.fetchers.delete(S),M({fetchers:new Map(p.fetchers),errors:{[lt.route.id]:_e.error}});return}ce(!fi(_e),"Unhandled fetcher deferred data");let Yt=iu(_e.data);p.fetchers.set(S,Yt),M({fetchers:new Map(p.fetchers)})}async function ue(S,k,C){let{submission:z,replace:oe,isFetchActionRedirect:Z}=C===void 0?{}:C;k.revalidate&&(K=!0);let re=ha(S.location,k.location,be({_isRedirect:!0},Z?{_isFetchActionRedirect:!0}:{}));if(ce(re,"Expected a location on the redirect navigation"),rE.test(k.location)&&n){let Re=t.history.createURL(k.location),_e=Hs(Re.pathname,l)==null;if(e.location.origin!==Re.origin||_e){oe?e.location.replace(k.location):e.location.assign(k.location);return}}A=null;let ee=oe===!0?Je.Replace:Je.Push,B=z||Yy(S.navigation);if(xx.has(k.status)&&B&&Sn(B.formMethod))await $(ee,re,{submission:be({},B,{formAction:k.location}),preventScrollReset:R});else if(Z)await $(ee,re,{overrideNavigation:Ol(re),fetcherSubmission:B,preventScrollReset:R});else{let Re=Ol(re,B);await $(ee,re,{overrideNavigation:Re,preventScrollReset:R})}}async function nt(S,k,C,z,oe){let Z=await Promise.all([...C.map(B=>mo("loader",oe,B,k,s,i,l)),...z.map(B=>B.matches&&B.match&&B.controller?mo("loader",go(t.history,B.path,B.controller.signal),B.match,B.matches,s,i,l):{type:rt.error,error:ln(404,{pathname:B.path})})]),re=Z.slice(0,C.length),ee=Z.slice(C.length);return await Promise.all([Qy(S,C,re,re.map(()=>oe.signal),!1,p.loaderData),Qy(S,z.map(B=>B.match),ee,z.map(B=>B.controller?B.controller.signal:null),!0)]),{results:Z,loaderResults:re,fetcherResults:ee}}function pe(){K=!0,W.push(...on()),He.forEach((S,k)=>{ae.has(k)&&(Oe.push(k),Ce(k))})}function We(S,k,C){let z=os(p.matches,k);Yn(S),M({errors:{[z.route.id]:C},fetchers:new Map(p.fetchers)})}function Yn(S){let k=p.fetchers.get(S);ae.has(S)&&!(k&&k.state==="loading"&&Ue.has(S))&&Ce(S),He.delete(S),Ue.delete(S),gt.delete(S),p.fetchers.delete(S)}function Ce(S){let k=ae.get(S);ce(k,"Expected fetch controller: "+S),k.abort(),ae.delete(S)}function oi(S){for(let k of S){let C=ve(k),z=iu(C.data);p.fetchers.set(k,z)}}function Sr(){let S=[],k=!1;for(let C of gt){let z=p.fetchers.get(C);ce(z,"Expected fetcher: "+C),z.state==="loading"&&(gt.delete(C),S.push(C),k=!0)}return oi(S),k}function Bt(S){let k=[];for(let[C,z]of Ue)if(z<S){let oe=p.fetchers.get(C);ce(oe,"Expected fetcher: "+C),oe.state==="loading"&&(Ce(C),Ue.delete(C),k.push(C))}return oi(k),k.length>0}function X(S,k){let C=p.blockers.get(S)||Pl;return H.get(S)!==k&&H.set(S,k),C}function $e(S){p.blockers.delete(S),H.delete(S)}function Tr(S,k){let C=p.blockers.get(S)||Pl;ce(C.state==="unblocked"&&k.state==="blocked"||C.state==="blocked"&&k.state==="blocked"||C.state==="blocked"&&k.state==="proceeding"||C.state==="blocked"&&k.state==="unblocked"||C.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+C.state+" -> "+k.state);let z=new Map(p.blockers);z.set(S,k),M({blockers:z})}function ji(S){let{currentLocation:k,nextLocation:C,historyAction:z}=S;if(H.size===0)return;H.size>1&&Ds(!1,"A router only supports one blocker at a time");let oe=Array.from(H.entries()),[Z,re]=oe[oe.length-1],ee=p.blockers.get(Z);if(!(ee&&ee.state==="proceeding")&&re({currentLocation:k,nextLocation:C,historyAction:z}))return Z}function on(S){let k=[];return L.forEach((C,z)=>{(!S||S(z))&&(C.cancel(),k.push(z),L.delete(z))}),k}function _T(S,k,C){if(d=S,v=k,g=C||null,!w&&p.navigation===Gh){w=!0;let z=mg(p.location,p.matches);z!=null&&M({restoreScrollPosition:z})}return()=>{d=null,v=null,g=null}}function pg(S,k){return g&&g(S,k.map(z=>Ux(z,p.loaderData)))||S.key}function ST(S,k){if(d&&v){let C=pg(S,k);d[C]=v()}}function mg(S,k){if(d){let C=pg(S,k),z=d[C];if(typeof z=="number")return z}return null}function TT(S){s={},a=yf(S,i,void 0,s)}return y={get basename(){return l},get state(){return p},get routes(){return o},initialize:Se,subscribe:U,enableScrollRestoration:_T,navigate:_,fetch:se,revalidate:he,createHref:S=>t.history.createHref(S),encodeLocation:S=>t.history.encodeLocation(S),getFetcher:ve,deleteFetcher:Yn,dispose:b,getBlocker:X,deleteBlocker:$e,_internalFetchControllers:ae,_internalActiveDeferreds:L,_internalSetRoutes:TT},y}function Dx(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function vf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Mc(i||".",ja(a).map(c=>c.pathnameBase),Hs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!nm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:ar([n,u.pathname])),Ci(u)}function jy(t,e,n,r){if(!r||!Dx(r))return{path:n};if(r.formMethod&&!Fx(r.formMethod))return{path:n,error:ln(405,{method:r.formMethod})};let i=()=>({path:n,error:ln(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=sE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Sn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,v)=>{let[w,E]=v;return""+g+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!Sn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}ce(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=wf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=wf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Hy(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Hy(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Sn(c.formMethod))return{path:n,submission:c};let h=Er(n);return e&&h.search&&nm(h.search)&&l.append("index",""),h.search="?"+l,{path:Ci(h),submission:c}}function Px(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function zy(t,e,n,r,i,s,o,a,l,u,c,h,d,g){let v=g?Object.values(g)[0]:d?Object.values(d)[0]:void 0,w=t.createURL(e.location),E=t.createURL(i),m=g?Object.keys(g)[0]:void 0,y=Px(n,m).filter((T,R)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(Ox(e.loaderData,e.matches[R],T)||o.some(K=>K===T.route.id))return!0;let A=e.matches[R],O=T;return Vy(T,be({currentUrl:w,currentParams:A.params,nextUrl:E,nextParams:O.params},r,{actionResult:v,defaultShouldRevalidate:s||w.pathname+w.search===E.pathname+E.search||w.search!==E.search||iE(A,O)}))}),p=[];return l.forEach((T,R)=>{if(!n.some(ae=>ae.route.id===T.routeId))return;let A=ss(c,T.path,h);if(!A){p.push({key:R,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let O=e.fetchers.get(R),K=O&&O.state!=="idle"&&O.data===void 0&&!u.has(R),W=Ef(A,T.path);(a.includes(R)||K||Vy(W,be({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})))&&p.push({key:R,routeId:T.routeId,path:T.path,matches:A,match:W,controller:new AbortController})}),[y,p]}function Ox(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function iE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Vy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function By(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ce(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Ds(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!nx.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,be({},e(i),{lazy:void 0}))}async function mo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let w,E=new Promise((m,f)=>w=f);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),E])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),By(n.route,s,i)]))[0];else if(await By(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let w=new URL(e.url),E=w.pathname+w.search;throw ln(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:rt.data,data:void 0};else if(v)u=await h(v);else{let w=new URL(e.url),E=w.pathname+w.search;throw ln(404,{pathname:E})}ce(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=rt.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(bx(u)){let v=u.status;if(Cx.has(v)){let m=u.headers.get("Location");if(ce(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!rE.test(m))m=vf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let f=new URL(e.url),y=m.startsWith("//")?new URL(f.protocol+m):new URL(m),p=Hs(y.pathname,o)!=null;y.origin===f.origin&&p&&(m=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:rt.redirect,status:v,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||rt.data,response:u};let w,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?w=await u.json():w=await u.text(),l===rt.error?{type:l,error:new tm(v,u.statusText,w),headers:u.headers}:{type:rt.data,data:w,statusCode:u.status,headers:u.headers}}if(l===rt.error)return{type:l,error:u};if(Mx(u)){var d,g;return{type:rt.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((g=u.init)==null?void 0:g.headers)&&new Headers(u.init.headers)}}return{type:rt.data,data:u}}function go(t,e,n,r){let i=t.createURL(sE(e)).toString(),s={signal:n};if(r&&Sn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=wf(r.formData):s.body=r.formData}return new Request(i,s)}function wf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Hy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function Lx(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(ce(!ms(c),"Cannot handle redirect results in processLoaderData"),jo(c)){let g=os(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=v),s[d]=void 0,l||(l=!0,a=tE(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else fi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Wy(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=Lx(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:g}=s[c];ce(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(g&&g.signal.aborted))if(jo(v)){let w=os(t.matches,d==null?void 0:d.route.id);u&&u[w.route.id]||(u=be({},u,{[w.route.id]:v.error})),t.fetchers.delete(h)}else if(ms(v))ce(!1,"Unhandled fetcher revalidation redirect");else if(fi(v))ce(!1,"Unhandled fetcher deferred data");else{let w=iu(v.data);t.fetchers.set(h,w)}}return{loaderData:l,errors:u}}function Ky(t,e,n,r){let i=be({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function os(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function qy(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function ln(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new tm(t||500,o,new Error(a),!0)}function Gy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ms(n))return n}}function sE(t){let e=typeof t=="string"?Er(t):t;return Ci(be({},e,{hash:""}))}function $x(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function fi(t){return t.type===rt.deferred}function jo(t){return t.type===rt.error}function ms(t){return(t&&t.type)===rt.redirect}function Mx(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function bx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Fx(t){return Ix.has(t.toLowerCase())}function Sn(t){return Tx.has(t.toLowerCase())}async function Qy(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!iE(u,l)&&(s&&s[l.route.id])!==void 0;if(fi(a)&&(i||c)){let h=r[o];ce(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await oE(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function oE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:rt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:rt.error,error:i}}return{type:rt.data,data:t.deferredData.data}}}function nm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ux(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Ef(t,e){let n=typeof e=="string"?Er(e).search:e.search;if(t[t.length-1].route.index&&nm(n||""))return t[t.length-1];let r=ja(t);return r[r.length-1]}function Yy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Ol(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function jx(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function yo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function zx(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function iu(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fu.apply(this,arguments)}const bc=x.createContext(null),aE=x.createContext(null),Ws=x.createContext(null),Fc=x.createContext(null),_r=x.createContext({outlet:null,matches:[],isDataRoute:!1}),lE=x.createContext(null);function Vx(t,e){let{relative:n}=e===void 0?{}:e;Ks()||ce(!1);let{basename:r,navigator:i}=x.useContext(Ws),{hash:s,pathname:o,search:a}=cE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ar([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ks(){return x.useContext(Fc)!=null}function za(){return Ks()||ce(!1),x.useContext(Fc).location}function uE(t){x.useContext(Ws).static||x.useLayoutEffect(t)}function Va(){let{isDataRoute:t}=x.useContext(_r);return t?nR():Bx()}function Bx(){Ks()||ce(!1);let t=x.useContext(bc),{basename:e,navigator:n}=x.useContext(Ws),{matches:r}=x.useContext(_r),{pathname:i}=za(),s=JSON.stringify(ja(r).map(l=>l.pathnameBase)),o=x.useRef(!1);return uE(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Mc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ar([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Hx=x.createContext(null);function Wx(t){let e=x.useContext(_r).outlet;return e&&x.createElement(Hx.Provider,{value:t},e)}function cE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(_r),{pathname:i}=za(),s=JSON.stringify(ja(r).map(o=>o.pathnameBase));return x.useMemo(()=>Mc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Kx(t,e,n){Ks()||ce(!1);let{navigator:r}=x.useContext(Ws),{matches:i}=x.useContext(_r),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=za(),u;if(e){var c;let w=typeof e=="string"?Er(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ce(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=ss(t,{pathname:d}),v=Xx(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:ar([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:ar([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?x.createElement(Fc.Provider,{value:{location:Fu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Je.Pop}},v):v}function qx(){let t=tR(),e=tE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,s)}const Gx=x.createElement(qx,null);class Qx extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(_r.Provider,{value:this.props.routeContext},x.createElement(lE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yx(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(bc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(_r.Provider,{value:e},r)}function Xx(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ce(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Gx);let d=e.concat(s.slice(0,u+1)),g=()=>{let v;return c?v=h:l.route.Component?v=x.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,x.createElement(Yx,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(Qx,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var _f;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(_f||(_f={}));var da;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(da||(da={}));function Jx(t){let e=x.useContext(bc);return e||ce(!1),e}function Zx(t){let e=x.useContext(aE);return e||ce(!1),e}function eR(t){let e=x.useContext(_r);return e||ce(!1),e}function hE(t){let e=eR(),n=e.matches[e.matches.length-1];return n.route.id||ce(!1),n.route.id}function tR(){var t;let e=x.useContext(lE),n=Zx(da.UseRouteError),r=hE(da.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function nR(){let{router:t}=Jx(_f.UseNavigateStable),e=hE(da.UseNavigateStable),n=x.useRef(!1);return uE(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fu({fromRouteId:e},s)))},[t,e])}const rR="startTransition",Xy=zT[rR];function iR(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=x.useState(n.state),{v7_startTransition:o}=r||{},a=x.useCallback(h=>{o&&Xy?Xy(()=>s(h)):s(h)},[s,o]);x.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,g)=>n.navigate(h,{state:d,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(h,d,g)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[n]),u=n.basename||"/",c=x.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return x.createElement(x.Fragment,null,x.createElement(bc.Provider,{value:c},x.createElement(aE.Provider,{value:i},x.createElement(lR,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?x.createElement(sR,{routes:n.routes,state:i}):e))),null)}function sR(t){let{routes:e,state:n}=t;return Kx(e,void 0,n)}function oR(t){let{to:e,replace:n,state:r,relative:i}=t;Ks()||ce(!1);let{matches:s}=x.useContext(_r),{pathname:o}=za(),a=Va(),l=Mc(e,ja(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return x.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function aR(t){return Wx(t.context)}function lR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Je.Pop,navigator:s,static:o=!1}=t;Ks()&&ce(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Er(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=x.useMemo(()=>{let w=Hs(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return v==null?null:x.createElement(Ws.Provider,{value:l},x.createElement(Fc.Provider,{children:n,value:v}))}var Jy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Jy||(Jy={}));new Promise(()=>{});function uR(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:x.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:x.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}function cR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dR(t,e){return t.button===0&&(!e||e==="_self")&&!hR(t)}const fR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function pR(t,e){return Nx({basename:e==null?void 0:e.basename,future:fa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:ZC({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||mR(),routes:t,mapRouteProperties:uR}).initialize()}function mR(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=fa({},e,{errors:gR(e.errors)})),e}function gR(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new tm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const yR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$n=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=cR(e,fR),{basename:d}=x.useContext(Ws),g,v=!1;if(typeof u=="string"&&vR.test(u)&&(g=u,yR))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),p=Hs(y.pathname,d);y.origin===f.origin&&p!=null?u=p+y.search+y.hash:v=!0}catch{}let w=Vx(u,{relative:i}),E=wR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||E(f)}return x.createElement("a",fa({},h,{href:g||w,onClick:v||s?r:m,ref:n,target:l}))});var Zy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Zy||(Zy={}));var ev;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ev||(ev={}));function wR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Va(),l=za(),u=cE(t,{relative:o});return x.useCallback(c=>{if(dR(c,n)){c.preventDefault();let h=r!==void 0?r:Ci(l)===Ci(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const qs=x.createContext(),ER=({children:t})=>{const[e,n]=x.useState("light");function r(){n(e==="light"?"dark":"light")}return I.jsx(qs.Provider,{value:{theme:e,toggleTheme:r},children:t})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_R=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_R(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new SR;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TR=function(t){const e=dE(t);return fE.encodeByteArray(e,!0)},Uu=function(t){return TR(t).replace(/\./g,"")},pE=function(t){try{return fE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IR=()=>kR().__FIREBASE_DEFAULTS__,CR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pE(t[1]);return e&&JSON.parse(e)},rm=()=>{try{return IR()||CR()||xR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mE=t=>{var e,n;return(n=(e=rm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gE=t=>{const e=mE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yE=()=>{var t;return(t=rm())===null||t===void 0?void 0:t.config},vE=t=>{var e;return(e=rm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uu(JSON.stringify(n)),Uu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function NR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function DR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PR(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OR(){try{return typeof indexedDB=="object"}catch{return!1}}function LR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$R,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function MR(t,e){return t.replace(bR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bR=/\{\$([^}]+)}/g;function FR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ju(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tv(s)&&tv(o)){if(!ju(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UR(t,e){const n=new jR(t,e);return n.subscribe.bind(n)}class jR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qh),i.error===void 0&&(i.error=Qh),i.complete===void 0&&(i.complete=Qh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qh(){}/**
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
 */function vn(t){return t&&t._delegate?t._delegate:t}class Xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ui="[DEFAULT]";/**
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
 */class VR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HR(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BR(t){return t===ui?void 0:t}function HR(t){return t.instantiationMode==="EAGER"}/**
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
 */class WR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const KR={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},qR=we.INFO,GR={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},QR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class im{constructor(e){this.name=e,this._logLevel=qR,this._logHandler=QR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const YR=(t,e)=>e.some(n=>t instanceof n);let nv,rv;function XR(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JR(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EE=new WeakMap,Sf=new WeakMap,_E=new WeakMap,Yh=new WeakMap,sm=new WeakMap;function ZR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&EE.set(n,t)}).catch(()=>{}),sm.set(e,t),e}function eA(t){if(Sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sf.set(t,e)}let Tf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tA(t){Tf=t(Tf)}function nA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xh(this),e,...n);return _E.set(r,e.sort?e.sort():[e]),Kr(r)}:JR().includes(t)?function(...e){return t.apply(Xh(this),e),Kr(EE.get(this))}:function(...e){return Kr(t.apply(Xh(this),e))}}function rA(t){return typeof t=="function"?nA(t):(t instanceof IDBTransaction&&eA(t),YR(t,XR())?new Proxy(t,Tf):t)}function Kr(t){if(t instanceof IDBRequest)return ZR(t);if(Yh.has(t))return Yh.get(t);const e=rA(t);return e!==t&&(Yh.set(t,e),sm.set(e,t)),e}const Xh=t=>sm.get(t);function iA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kr(o.result),l.oldVersion,l.newVersion,Kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sA=["get","getKey","getAll","getAllKeys","count"],oA=["put","add","delete","clear"],Jh=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jh.get(e))return Jh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Jh.set(e,s),s}tA(t=>({...t,get:(e,n,r)=>iv(e,n)||t.get(e,n,r),has:(e,n)=>!!iv(e,n)||t.has(e,n)}));/**
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
 */class aA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kf="@firebase/app",sv="0.9.13";/**
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
 */const xi=new im("@firebase/app"),uA="@firebase/app-compat",cA="@firebase/analytics-compat",hA="@firebase/analytics",dA="@firebase/app-check-compat",fA="@firebase/app-check",pA="@firebase/auth",mA="@firebase/auth-compat",gA="@firebase/database",yA="@firebase/database-compat",vA="@firebase/functions",wA="@firebase/functions-compat",EA="@firebase/installations",_A="@firebase/installations-compat",SA="@firebase/messaging",TA="@firebase/messaging-compat",kA="@firebase/performance",IA="@firebase/performance-compat",CA="@firebase/remote-config",xA="@firebase/remote-config-compat",RA="@firebase/storage",AA="@firebase/storage-compat",NA="@firebase/firestore",DA="@firebase/firestore-compat",PA="firebase",OA="9.23.0";/**
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
 */const If="[DEFAULT]",LA={[kf]:"fire-core",[uA]:"fire-core-compat",[hA]:"fire-analytics",[cA]:"fire-analytics-compat",[fA]:"fire-app-check",[dA]:"fire-app-check-compat",[pA]:"fire-auth",[mA]:"fire-auth-compat",[gA]:"fire-rtdb",[yA]:"fire-rtdb-compat",[vA]:"fire-fn",[wA]:"fire-fn-compat",[EA]:"fire-iid",[_A]:"fire-iid-compat",[SA]:"fire-fcm",[TA]:"fire-fcm-compat",[kA]:"fire-perf",[IA]:"fire-perf-compat",[CA]:"fire-rc",[xA]:"fire-rc-compat",[RA]:"fire-gcs",[AA]:"fire-gcs-compat",[NA]:"fire-fst",[DA]:"fire-fst-compat","fire-js":"fire-js",[PA]:"fire-js-all"};/**
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
 */const zu=new Map,Cf=new Map;function $A(t,e){try{t.container.addComponent(e)}catch(n){xi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(Cf.has(e))return xi.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,t);for(const n of zu.values())$A(n,t);return!0}function Uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const MA={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qr=new Ba("app","Firebase",MA);/**
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
 */class bA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=OA;function SE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:If,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=yE()),!n)throw qr.create("no-options");const s=zu.get(i);if(s){if(ju(n,s.options)&&ju(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new WR(i);for(const l of Cf.values())o.addComponent(l);const a=new bA(n,r,o);return zu.set(i,a),a}function om(t=If){const e=zu.get(t);if(!e&&t===If&&yE())return SE();if(!e)throw qr.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let i=(r=LA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xi.warn(a.join(" "));return}Ri(new Xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const FA="firebase-heartbeat-database",UA=1,pa="firebase-heartbeat-store";let Zh=null;function TE(){return Zh||(Zh=iA(FA,UA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pa)}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Zh}async function jA(t){try{return await(await TE()).transaction(pa).objectStore(pa).get(kE(t))}catch(e){if(e instanceof Gn)xi.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xi.warn(n.message)}}}async function ov(t,e){try{const r=(await TE()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,kE(t)),await r.done}catch(n){if(n instanceof Gn)xi.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xi.warn(r.message)}}}function kE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zA=1024,VA=30*24*60*60*1e3;class BA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=av();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=VA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=av(),{heartbeatsToSend:n,unsentEntries:r}=HA(this._heartbeatsCache.heartbeats),i=Uu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function av(){return new Date().toISOString().substring(0,10)}function HA(t,e=zA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OR()?LR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lv(t){return Uu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function KA(t){Ri(new Xr("platform-logger",e=>new aA(e),"PRIVATE")),Ri(new Xr("heartbeat",e=>new BA(e),"PRIVATE")),zn(kf,sv,t),zn(kf,sv,"esm2017"),zn("fire-js","")}KA("");function am(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function IE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qA=IE,CE=new Ba("auth","Firebase",IE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new im("@firebase/auth");function GA(t,...e){Vu.logLevel<=we.WARN&&Vu.warn(`Auth (${Mi}): ${t}`,...e)}function su(t,...e){Vu.logLevel<=we.ERROR&&Vu.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw lm(t,...e)}function Vn(t,...e){return lm(t,...e)}function QA(t,e,n){const r=Object.assign(Object.assign({},qA()),{[e]:n});return new Ba("auth","Firebase",r).create(e,{appName:t.name})}function lm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CE.create(t,...e)}function J(t,e,...n){if(!t)throw lm(e,...n)}function rr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw su(e),new Error(e)}function fr(t,e){t||rr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YA(){return uv()==="http:"||uv()==="https:"}function uv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YA()||NR()||"connection"in navigator)?navigator.onLine:!0}function JA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=AR()||DR()}get(){return XA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new Wa(3e4,6e4);function Gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qs(t,e,n,r,i={}){return RE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ha(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xE.fetch()(AE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function RE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZA),e);try{const i=new t2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ll(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ll(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ll(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw QA(t,c,u);An(t,c)}}catch(i){if(i instanceof Gn)throw i;An(t,"network-request-failed",{message:String(i)})}}async function Ka(t,e,n,r,i={}){const s=await Qs(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?um(t.config,i):`${t.config.apiScheme}://${i}`}class t2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),e2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t,e){return Qs(t,"POST","/v1/accounts:delete",e)}async function r2(t,e){return Qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i2(t,e=!1){const n=vn(t),r=await n.getIdToken(e),i=cm(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zo(ed(i.auth_time)),issuedAtTime:zo(ed(i.iat)),expirationTime:zo(ed(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ed(t){return Number(t)*1e3}function cm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return su("JWT malformed, contained fewer than 3 sections"),null;try{const i=pE(n);return i?JSON.parse(i):(su("Failed to decode base64 JWT payload"),null)}catch(i){return su("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function s2(t){const e=cm(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&o2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function o2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zo(this.lastLoginAt),this.creationTime=zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ma(t,r2(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?c2(s.providerUserInfo):[],a=u2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new NE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function l2(t){const e=vn(t);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function c2(t){return t.map(e=>{var{providerId:n}=e,r=am(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(t,e){const n=await RE(t,{},async()=>{const r=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):s2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await h2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ga;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ga,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new NE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i2(this,e)}reload(){return l2(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ma(this,n2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:p,isAnonymous:T,providerData:R,stsTokenManager:A}=n;J(y&&A,e,"internal-error");const O=ga.fromJSON(this.name,A);J(typeof y=="string",e,"internal-error"),Ir(h,e.name),Ir(d,e.name),J(typeof p=="boolean",e,"internal-error"),J(typeof T=="boolean",e,"internal-error"),Ir(g,e.name),Ir(v,e.name),Ir(w,e.name),Ir(E,e.name),Ir(m,e.name),Ir(f,e.name);const K=new wi({uid:y,auth:e,email:d,emailVerified:p,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:O,createdAt:m,lastLoginAt:f});return R&&Array.isArray(R)&&(K.providerData=R.map(W=>Object.assign({},W))),E&&(K._redirectEventId=E),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new ga;i.updateFromServerResponse(n);const s=new wi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;function ir(t){fr(t instanceof Function,"Expected a class definition");let e=cv.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cv.set(t,e),e)}/**
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
 */class DE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}DE.type="NONE";const hv=DE;/**
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
 */function ou(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ou(this.userKey,i.apiKey,s),this.fullPersistenceKey=ou("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(ir(hv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ir(hv);const o=ou(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=wi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new gs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(bE(e))return"Webos";if(hm(e))return"Safari";if((e.includes("chrome/")||OE(e))&&!e.includes("edge/"))return"Chrome";if($E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PE(t=Mt()){return/firefox\//i.test(t)}function hm(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OE(t=Mt()){return/crios\//i.test(t)}function LE(t=Mt()){return/iemobile/i.test(t)}function $E(t=Mt()){return/android/i.test(t)}function ME(t=Mt()){return/blackberry/i.test(t)}function bE(t=Mt()){return/webos/i.test(t)}function jc(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function d2(t=Mt()){var e;return jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function f2(){return PR()&&document.documentMode===10}function FE(t=Mt()){return jc(t)||$E(t)||bE(t)||ME(t)||/windows phone/i.test(t)||LE(t)}function p2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e=[]){let n;switch(t){case"Browser":n=dv(Mt());break;case"Worker":n=`${dv(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}async function jE(t,e){return Qs(t,"GET","/v2/recaptchaConfig",Gs(t,e))}function fv(t){return t!==void 0&&t.enterprise!==void 0}class zE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function VE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",m2().appendChild(r)})}function g2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const y2="https://www.google.com/recaptcha/enterprise.js?render=",v2="recaptcha-enterprise",w2="NO_RECAPTCHA";class BE{constructor(e){this.type=v2,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;fv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(w2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}VE(y2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hu(t,e,n,r=!1){const i=new BE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class E2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pv(this),this.idTokenSubscription=new pv(this),this.beforeStateQueue=new E2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vn(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(e))})}async initializeRecaptchaConfig(){const e=await jE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new zE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new BE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ir(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ys(t){return vn(t)}class pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=UR(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t,e){const n=Uc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ju(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function T2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k2(t,e,n){const r=Ys(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=HE(e),{host:o,port:a}=I2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||C2()}function HE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function I2(t){const e=HE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mv(o)}}}function mv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(e){return rr("not implemented")}_linkToIdToken(e,n){return rr("not implemented")}_getReauthenticationResolver(e){return rr("not implemented")}}async function x2(t,e){return Qs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(t,e){return Ka(t,"POST","/v1/accounts:signInWithPassword",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}async function A2(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends dm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hu(e,r,"signInWithPassword");return td(e,i)}else return td(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hu(e,r,"signInWithPassword");return td(e,s)}else return Promise.reject(i)});case"emailLink":return R2(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return x2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return A2(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e){return Ka(t,"POST","/v1/accounts:signInWithIdp",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2="http://localhost";class Ai extends dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=am(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:N2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ha(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function P2(t){const e=ko(Io(t)).link,n=e?ko(Io(e)).deep_link_id:null,r=ko(Io(t)).deep_link_id;return(r?ko(Io(r)).link:null)||r||n||e||t}class fm{constructor(e){var n,r,i,s,o,a;const l=ko(Io(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=D2((i=l.mode)!==null&&i!==void 0?i:null);J(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=P2(e);try{return new fm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fm.parseLink(n);return J(r,"argument-error"),ya._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qa extends WE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends qa{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.GOOGLE_SIGN_IN_METHOD="google.com";Dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends qa{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends qa{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(t,e){return Ka(t,"POST","/v1/accounts:signUp",Gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wi._fromIdTokenResponse(e,r,i),o=gv(r);return new Ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gv(r);return new Ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends Gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wu(e,n,r,i)}}function KE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(t,s,e,r):s})}async function O2(t,e,n=!1){const r=await ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",r)}/**
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
 */async function L2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ma(t,KE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=cm(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(t,e,n=!1){const r="signIn",i=await KE(t,r,e),s=await Ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $2(t,e){return qE(Ys(t),e)}async function M2(t,e,n){var r;const i=Ys(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Hu(i,s,"signUpPassword");o=nd(i,u)}else o=nd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Hu(i,s,"signUpPassword");return nd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ni._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function b2(t,e,n){return $2(vn(t),Xs.credential(e,n))}function F2(t,e,n,r){return vn(t).onIdTokenChanged(e,n,r)}function U2(t,e,n){return vn(t).beforeAuthStateChanged(e,n)}const Ku="__sak";/**
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
 */class GE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(){const t=Mt();return hm(t)||jc(t)}const z2=1e3,V2=10;class QE extends GE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=j2()&&p2(),this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);f2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,V2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QE.type="LOCAL";const B2=QE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE extends GE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YE.type="SESSION";const XE=YE;/**
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
 */function H2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await H2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class W2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=pm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function K2(t){Bn().location.href=t}/**
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
 */function JE(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function q2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Q2(){return JE()?self:null}/**
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
 */const ZE="firebaseLocalStorageDb",Y2=1,qu="firebaseLocalStorage",e_="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vc(t,e){return t.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function X2(){const t=indexedDB.deleteDatabase(ZE);return new Ga(t).toPromise()}function Rf(){const t=indexedDB.open(ZE,Y2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qu,{keyPath:e_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qu)?e(r):(r.close(),await X2(),e(await Rf()))})})}async function yv(t,e,n){const r=Vc(t,!0).put({[e_]:e,value:n});return new Ga(r).toPromise()}async function J2(t,e){const n=Vc(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function vv(t,e){const n=Vc(t,!0).delete(e);return new Ga(n).toPromise()}const Z2=800,eN=3;class t_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(Q2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await q2(),!this.activeServiceWorker)return;this.sender=new W2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rf();return await yv(e,Ku,"1"),await vv(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>J2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vc(i,!1).getAll();return new Ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t_.type="LOCAL";const tN=t_;new Wa(3e4,6e4);/**
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
 */function nN(t,e){return e?ir(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mm extends dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rN(t){return qE(t.auth,new mm(t),t.bypassAuthState)}function iN(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),L2(n,new mm(t),t.bypassAuthState)}async function sN(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),O2(n,new mm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rN;case"linkViaPopup":case"linkViaRedirect":return sN;case"reauthViaPopup":case"reauthViaRedirect":return iN;default:An(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new Wa(2e3,1e4);class as extends n_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oN.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="pendingRedirect",au=new Map;class lN extends n_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=au.get(this.auth._key());if(!e){try{const r=await uN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}au.set(this.auth._key(),e)}return this.bypassAuthState||au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uN(t,e){const n=dN(e),r=hN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cN(t,e){au.set(t._key(),e)}function hN(t){return ir(t._redirectPersistence)}function dN(t){return ou(aN,t.config.apiKey,t.name)}async function fN(t,e,n=!1){const r=Ys(t),i=nN(r,e),o=await new lN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=10*60*1e3;class mN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!r_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pN&&this.cachedEventUids.clear(),this.cachedEventUids.has(wv(e))}saveEventToCache(e){this.cachedEventUids.add(wv(e)),this.lastProcessedEventTime=Date.now()}}function wv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function r_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return r_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e={}){return Qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wN=/^https?/;async function EN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yN(t);for(const n of e)try{if(_N(n))return}catch{}An(t,"unauthorized-domain")}function _N(t){const e=xf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wN.test(n))return!1;if(vN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SN=new Wa(3e4,6e4);function Ev(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TN(t){return new Promise((e,n)=>{var r,i,s;function o(){Ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ev(),n(Vn(t,"network-request-failed"))},timeout:SN.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=g2("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},VE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lu=null,e})}let lu=null;function kN(t){return lu=lu||TN(t),lu}/**
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
 */const IN=new Wa(5e3,15e3),CN="__/auth/iframe",xN="emulator/auth/iframe",RN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NN(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?um(e,xN):`https://${t.config.authDomain}/${CN}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=AN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ha(r).slice(1)}`}async function DN(t){const e=await kN(t),n=Bn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:NN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},IN.get());function l(){Bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const PN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ON=500,LN=600,$N="_blank",MN="http://localhost";class _v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bN(t,e,n,r=ON,i=LN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},PN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Mt().toLowerCase();n&&(a=OE(u)?$N:n),PE(u)&&(e=e||MN,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(d2(u)&&a!=="_self")return FN(e||"",a),new _v(null);const h=window.open(e||"",a,c);J(h,t,"popup-blocked");try{h.focus()}catch{}return new _v(h)}function FN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const UN="__/auth/handler",jN="emulator/auth/handler",zN=encodeURIComponent("fac");async function Sv(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof WE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof qa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${zN}=${encodeURIComponent(l)}`:"";return`${VN(t)}?${Ha(a).slice(1)}${u}`}function VN({config:t}){return t.emulator?um(t,jN):`https://${t.authDomain}/${UN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="webStorageSupport";class BN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XE,this._completeRedirectFn=fN,this._overrideRedirectResult=cN}async _openPopup(e,n,r,i){var s;fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sv(e,n,r,xf(),i);return bN(e,o,pm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sv(e,n,r,xf(),i);return K2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DN(e),r=new mN(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rd,{type:rd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rd];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FE()||hm()||jc()}}const HN=BN;var Tv="@firebase/auth",kv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qN(t){Ri(new Xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UE(t)},u=new _2(r,i,s,l);return T2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Xr("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new WN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Tv,kv,KN(t)),zn(Tv,kv,"esm2017")}/**
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
 */const GN=5*60,QN=vE("authIdTokenMaxAge")||GN;let Iv=null;const YN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QN)return;const i=n==null?void 0:n.token;Iv!==i&&(Iv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XN(t=om()){const e=Uc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=S2(t,{popupRedirectResolver:HN,persistence:[tN,B2,XE]}),r=vE("authTokenSyncURL");if(r){const s=YN(r);U2(n,s,()=>s(n.currentUser)),F2(n,o=>s(o))}const i=mE("auth");return i&&k2(n,`http://${i}`),n}qN("Browser");var JN="firebase",ZN="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(JN,ZN,"app");var eD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,gm=gm||{},te=eD||self;function Bc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tD(t){return Object.prototype.hasOwnProperty.call(t,id)&&t[id]||(t[id]=++nD)}var id="closure_uid_"+(1e9*Math.random()>>>0),nD=0;function rD(t,e,n){return t.call.apply(t.bind,arguments)}function iD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=rD:Pt=iD,Pt.apply(null,arguments)}function $l(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ii(){this.s=this.s,this.o=this.o}var sD=0;ii.prototype.s=!1;ii.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sD!=0)&&tD(this)};ii.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const i_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ym(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Cv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var oD=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function va(t){return/^[\s\xa0]*$/.test(t)}function Hc(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Mn(t){return Hc().indexOf(t)!=-1}function vm(t){return vm[" "](t),t}vm[" "]=function(){};function aD(t,e){var n=ZD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var lD=Mn("Opera"),Ps=Mn("Trident")||Mn("MSIE"),s_=Mn("Edge"),Af=s_||Ps,o_=Mn("Gecko")&&!(Hc().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),uD=Hc().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge");function a_(){var t=te.document;return t?t.documentMode:void 0}var Nf;e:{var sd="",od=function(){var t=Hc();if(o_)return/rv:([^\);]+)(\)|;)/.exec(t);if(s_)return/Edge\/([\d\.]+)/.exec(t);if(Ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uD)return/WebKit\/(\S+)/.exec(t);if(lD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(od&&(sd=od?od[1]:""),Ps){var ad=a_();if(ad!=null&&ad>parseFloat(sd)){Nf=String(ad);break e}}Nf=sd}var Df;if(te.document&&Ps){var xv=a_();Df=xv||parseInt(Nf,10)||void 0}else Df=void 0;var cD=Df;function wa(t,e){if(Ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(o_){e:{try{vm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wa.$.h.call(this)}}pt(wa,Ot);var hD={2:"touch",3:"pen",4:"mouse"};wa.prototype.h=function(){wa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ya="closure_listenable_"+(1e6*Math.random()|0),dD=0;function fD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++dD,this.fa=this.ia=!1}function Wc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function wm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function l_(t){const e={};for(const n in t)e[n]=t[n];return e}const Rv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function u_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Rv.length;s++)n=Rv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kc(t){this.src=t,this.g={},this.h=0}Kc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Of(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Pf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=i_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Wc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Of(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Em="closure_lm_"+(1e6*Math.random()|0),ld={};function c_(t,e,n,r,i){if(r&&r.once)return d_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)c_(t,e[s],n,r,i);return null}return n=Tm(n),t&&t[Ya]?t.O(e,n,Qa(r)?!!r.capture:!!r,i):h_(t,e,n,!1,r,i)}function h_(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Qa(i)?!!i.capture:!!i,a=Sm(t);if(a||(t[Em]=a=new Kc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=mD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)oD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(p_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mD(){function t(n){return e.call(t.src,t.listener,n)}const e=gD;return t}function d_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)d_(t,e[s],n,r,i);return null}return n=Tm(n),t&&t[Ya]?t.P(e,n,Qa(r)?!!r.capture:!!r,i):h_(t,e,n,!0,r,i)}function f_(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)f_(t,e[s],n,r,i);else r=Qa(r)?!!r.capture:!!r,n=Tm(n),t&&t[Ya]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Of(s,n,r,i),-1<n&&(Wc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Of(e,n,r,i)),(n=-1<t?e[t]:null)&&_m(n))}function _m(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ya])Pf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(p_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sm(e))?(Pf(n,t),n.h==0&&(n.src=null,e[Em]=null)):Wc(t)}}}function p_(t){return t in ld?ld[t]:ld[t]="on"+t}function gD(t,e){if(t.fa)t=!0;else{e=new wa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&_m(t),t=n.call(r,e)}return t}function Sm(t){return t=t[Em],t instanceof Kc?t:null}var ud="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tm(t){return typeof t=="function"?t:(t[ud]||(t[ud]=function(e){return t.handleEvent(e)}),t[ud])}function dt(){ii.call(this),this.i=new Kc(this),this.S=this,this.J=null}pt(dt,ii);dt.prototype[Ya]=!0;dt.prototype.removeEventListener=function(t,e,n,r){f_(this,t,e,n,r)};function St(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ot(e,t);else if(e instanceof Ot)e.target=e.target||t;else{var i=e;e=new Ot(r,t),u_(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ml(o,r,!0,e)&&i}if(o=e.g=t,i=Ml(o,r,!0,e)&&i,i=Ml(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ml(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Wc(n[r]);delete t.g[e],t.h--}}this.J=null};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ml(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Pf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var km=te.JSON.stringify;class yD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function vD(){var t=Im;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wD{constructor(){this.h=this.g=null}add(e,n){const r=m_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var m_=new yD(()=>new ED,t=>t.reset());class ED{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _D(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function SD(t){te.setTimeout(()=>{throw t},0)}let Ea,_a=!1,Im=new wD,g_=()=>{const t=te.Promise.resolve(void 0);Ea=()=>{t.then(TD)}};var TD=()=>{for(var t;t=vD();){try{t.h.call(t.g)}catch(n){SD(n)}var e=m_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_a=!1};function qc(t,e){dt.call(this),this.h=t||1,this.g=e||te,this.j=Pt(this.qb,this),this.l=Date.now()}pt(qc,dt);F=qc.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),St(this,"tick"),this.ga&&(Cm(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){qc.$.N.call(this),Cm(this),delete this.g};function xm(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function y_(t){t.g=xm(()=>{t.g=null,t.i&&(t.i=!1,y_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kD extends ii{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:y_(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(t){ii.call(this),this.h=t,this.g={}}pt(Sa,ii);var Av=[];function v_(t,e,n,r){Array.isArray(n)||(n&&(Av[0]=n.toString()),n=Av);for(var i=0;i<n.length;i++){var s=c_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function w_(t){wm(t.g,function(e,n){this.g.hasOwnProperty(n)&&_m(e)},t),t.g={}}Sa.prototype.N=function(){Sa.$.N.call(this),w_(this)};Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gc(){this.g=!0}Gc.prototype.Ea=function(){this.g=!1};function ID(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function CD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RD(t,n)+(r?" "+r:"")})}function xD(t,e){t.info(function(){return"TIMEOUT: "+e})}Gc.prototype.info=function(){};function RD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return km(n)}catch{return e}}var bi={},Nv=null;function Qc(){return Nv=Nv||new dt}bi.Ta="serverreachability";function E_(t){Ot.call(this,bi.Ta,t)}pt(E_,Ot);function Ta(t){const e=Qc();St(e,new E_(e))}bi.STAT_EVENT="statevent";function __(t,e){Ot.call(this,bi.STAT_EVENT,t),this.stat=e}pt(__,Ot);function Ut(t){const e=Qc();St(e,new __(e,t))}bi.Ua="timingevent";function S_(t,e){Ot.call(this,bi.Ua,t),this.size=e}pt(S_,Ot);function Xa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Yc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},T_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rm(){}Rm.prototype.h=null;function Dv(t){return t.h||(t.h=t.i())}function k_(){}var Ja={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Am(){Ot.call(this,"d")}pt(Am,Ot);function Nm(){Ot.call(this,"c")}pt(Nm,Ot);var Lf;function Xc(){}pt(Xc,Rm);Xc.prototype.g=function(){return new XMLHttpRequest};Xc.prototype.i=function(){return{}};Lf=new Xc;function Za(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Sa(this),this.P=AD,t=Af?125:void 0,this.V=new qc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new I_}function I_(){this.i=null,this.g="",this.h=!1}var AD=45e3,$f={},Gu={};F=Za.prototype;F.setTimeout=function(t){this.P=t};function Mf(t,e,n){t.L=1,t.v=Zc(pr(e)),t.s=n,t.S=!0,C_(t,null)}function C_(t,e){t.G=Date.now(),el(t),t.A=pr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),L_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new I_,t.g=tS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new kD(Pt(t.Pa,t,t.g),t.O)),v_(t.U,t.g,"readystatechange",t.nb),e=t.I?l_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ta(),ID(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&bn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Af||this.g&&(this.h.h||this.g.ja()||$v(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ta(3):Ta(2)),Jc(this);var n=this.g.da();this.ca=n;t:if(x_(this)){var r=$v(this.g);t="";var i=r.length,s=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),Vo(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,CD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!va(a)){var u=a;break t}}u=null}if(n=u)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bf(this,n);else{this.i=!1,this.o=3,Ut(12),pi(this),Vo(this);break e}}this.S?(R_(this,c,o),Af&&this.i&&c==3&&(v_(this.U,this.V,"tick",this.mb),this.V.start())):(ls(this.j,this.m,o,null),bf(this,o)),c==4&&pi(this),this.i&&!this.J&&(c==4?X_(this.l,this):(this.i=!1,el(this)))}else YD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),pi(this),Vo(this)}}}catch{}finally{}};function x_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function R_(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ND(t,n),i==Gu){e==4&&(t.o=4,Ut(14),r=!1),ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==$f){t.o=4,Ut(15),ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ls(t.j,t.m,i,null),bf(t,i);x_(t)&&i!=Gu&&i!=$f&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mm(e),e.M=!0,Ut(11))):(ls(t.j,t.m,n,"[Invalid Chunked Response]"),pi(t),Vo(t))}F.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.C<e.length&&(Jc(this),R_(this,t,e),this.i&&t!=4&&el(this))}};function ND(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gu:(n=Number(e.substring(n,r)),isNaN(n)?$f:(r+=1,r+n>e.length?Gu:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,pi(this)};function el(t){t.Y=Date.now()+t.P,A_(t,t.P)}function A_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xa(Pt(t.lb,t),e)}function Jc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xD(this.j,this.A),this.L!=2&&(Ta(),Ut(17)),pi(this),this.o=2,Vo(this)):A_(this,this.Y-t)};function Vo(t){t.l.H==0||t.J||X_(t.l,t)}function pi(t){Jc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Cm(t.V),w_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function bf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ff(n.i,t))){if(!t.K&&Ff(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xu(n),nh(n);else break e;$m(n),Ut(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xa(Pt(n.ib,n),6e3));if(1>=b_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else mi(n,11)}else if((t.K||n.g==t)&&Xu(n),!va(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Dm(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Ne(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=eS(r,r.J?r.pa:null,r.Y),o.K){F_(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Jc(a),el(a)),r.g=o}else Q_(r);0<n.j.length&&rh(n)}else u[0]!="stop"&&u[0]!="close"||mi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?mi(n,7):Lm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ta(4)}catch{}}function DD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function PD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function N_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PD(t),r=DD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var D_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ei){this.h=t.h,Qu(this,t.j),this.s=t.s,this.g=t.g,Yu(this,t.m),this.l=t.l;var e=t.i,n=new ka;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pv(this,n),this.o=t.o}else t&&(e=String(t).match(D_))?(this.h=!1,Qu(this,e[1]||"",!0),this.s=Co(e[2]||""),this.g=Co(e[3]||"",!0),Yu(this,e[4]),this.l=Co(e[5]||"",!0),Pv(this,e[6]||"",!0),this.o=Co(e[7]||"")):(this.h=!1,this.i=new ka(null,this.h))}Ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xo(e,Ov,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xo(e,Ov,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xo(n,n.charAt(0)=="/"?MD:$D,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xo(n,FD)),t.join("")};function pr(t){return new Ei(t)}function Qu(t,e,n){t.j=n?Co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pv(t,e,n){e instanceof ka?(t.i=e,UD(t.i,t.h)):(n||(e=xo(e,bD)),t.i=new ka(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Zc(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ov=/[#\/\?@]/g,$D=/[#\?:]/g,MD=/[#\?]/g,bD=/[#\?@]/g,FD=/#/g;function ka(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function si(t){t.g||(t.g=new Map,t.h=0,t.i&&OD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=ka.prototype;F.add=function(t,e){si(this),this.i=null,t=Js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function P_(t,e){si(t),e=Js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function O_(t,e){return si(t),e=Js(t,e),t.g.has(e)}F.forEach=function(t,e){si(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){si(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){si(this);let e=[];if(typeof t=="string")O_(this,t)&&(e=e.concat(this.g.get(Js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return si(this),this.i=null,t=Js(this,t),O_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function L_(t,e,n){P_(t,e),0<n.length&&(t.i=null,t.g.set(Js(t,e),ym(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UD(t,e){e&&!t.j&&(si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(P_(this,r),L_(this,i,n))},t)),t.j=e}var jD=class{constructor(t,e){this.g=t,this.map=e}};function $_(t){this.l=t||zD,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zD=10;function M_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function b_(t){return t.h?1:t.g?t.g.size:0}function Ff(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Dm(t,e){t.g?t.g.add(e):t.h=e}function F_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$_.prototype.cancel=function(){if(this.i=U_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function U_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ym(t.i)}var VD=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function BD(){this.g=new VD}function HD(t,e,n){const r=n||"";try{N_(t,function(i,s){let o=i;Qa(i)&&(o=km(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function WD(t,e){const n=new Gc;if(te.Image){const r=new Image;r.onload=$l(bl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$l(bl,n,r,"TestLoadImage: error",!1,e),r.onabort=$l(bl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$l(bl,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function bl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function tl(t){this.l=t.fc||null,this.j=t.ob||!1}pt(tl,Rm);tl.prototype.g=function(){return new eh(this.l,this.j)};tl.prototype.i=function(t){return function(){return t}}({});function eh(t,e){dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Pm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(eh,dt);var Pm=0;F=eh.prototype;F.open=function(t,e){if(this.readyState!=Pm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ia(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nl(this)),this.readyState=Pm};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;j_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function j_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nl(this):Ia(this),this.readyState==3&&j_(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,nl(this))};F.Ya=function(t){this.g&&(this.response=t,nl(this))};F.ka=function(){this.g&&nl(this)};function nl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ia(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ia(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(eh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KD=te.JSON.parse;function Ge(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=z_,this.L=this.M=!1}pt(Ge,dt);var z_="",qD=/^https?$/i,GD=["POST","PUT"];F=Ge.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Lf.g(),this.C=this.u?Dv(this.u):Dv(Lf),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Lv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=i_(GD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{H_(this),0<this.B&&((this.L=QD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=xm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lv(this,s)}};function QD(t){return Ps&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof gm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))};function Lv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,V_(t),th(t)}function V_(t){t.F||(t.F=!0,St(t,"complete"),St(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),th(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),th(this,!0)),Ge.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?B_(this):this.kb())};F.kb=function(){B_(this)};function B_(t){if(t.h&&typeof gm<"u"&&(!t.C[1]||bn(t)!=4||t.da()!=2)){if(t.v&&bn(t)==4)xm(t.La,0,t);else if(St(t,"readystatechange"),bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(D_)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!qD.test(i?i.toLowerCase():"")}n=r}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var s=2<bn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",V_(t)}}finally{th(t)}}}}function th(t,e){if(t.g){H_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||St(t,"ready");try{n.onreadystatechange=r}catch{}}}function H_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function bn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KD(e)}};function $v(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case z_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function YD(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(va(t[r]))continue;var n=_D(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}pD(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function W_(t){let e="";return wm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Om(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=W_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function vo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function K_(t){this.Ga=0,this.j=[],this.l=new Gc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=vo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=vo("baseRetryDelayMs",5e3,t),this.hb=vo("retryDelaySeedMs",1e4,t),this.eb=vo("forwardChannelMaxRetries",2,t),this.xa=vo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $_(t&&t.concurrentRequestLimit),this.Ja=new BD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=K_.prototype;F.ra=8;F.H=1;function Lm(t){if(q_(t),t.H==3){var e=t.W++,n=pr(t.I);if(Ne(n,"SID",t.K),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),rl(t,n),e=new Za(t,t.l,e),e.L=2,e.v=Zc(pr(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=tS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),el(e)}Z_(t)}function nh(t){t.g&&(Mm(t),t.g.cancel(),t.g=null)}function q_(t){nh(t),t.u&&(te.clearTimeout(t.u),t.u=null),Xu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function rh(t){if(!M_(t.i)&&!t.m){t.m=!0;var e=t.Na;Ea||g_(),_a||(Ea(),_a=!0),Im.add(e,t),t.C=0}}function XD(t,e){return b_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xa(Pt(t.Na,t,e),J_(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Za(this,this.l,t);let s=this.s;if(this.U&&(s?(s=l_(s),u_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=G_(this,i,e),n=pr(this.I),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),rl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(W_(s)))+"&"+e:this.o&&Om(n,this.o,s)),Dm(this.i,i),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),i.aa=!0,Mf(i,n,null)):Mf(i,n,e),this.H=2}}else this.H==3&&(t?Mv(this,t):this.j.length==0||M_(this.i)||Mv(this))};function Mv(t,e){var n;e?n=e.m:n=t.W++;const r=pr(t.I);Ne(r,"SID",t.K),Ne(r,"RID",n),Ne(r,"AID",t.V),rl(t,r),t.o&&t.s&&Om(r,t.o,t.s),n=new Za(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=G_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Dm(t.i,n),Mf(n,r,e)}function rl(t,e){t.na&&wm(t.na,function(n,r){Ne(e,r,n)}),t.h&&N_({},function(n,r){Ne(e,r,n)})}function G_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Pt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{HD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Q_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ea||g_(),_a||(Ea(),_a=!0),Im.add(e,t),t.A=0}}function $m(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xa(Pt(t.Ma,t),J_(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,Y_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xa(Pt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),nh(this),Y_(this))};function Mm(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function Y_(t){t.g=new Za(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=pr(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.K),Ne(e,"AID",t.V),Ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ne(e,"TO",t.qa),Ne(e,"TYPE","xmlhttp"),rl(t,e),t.o&&t.s&&Om(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Zc(pr(e)),n.s=null,n.S=!0,C_(n,t)}F.ib=function(){this.v!=null&&(this.v=null,nh(this),$m(this),Ut(19))};function Xu(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function X_(t,e){var n=null;if(t.g==e){Xu(t),Mm(t),t.g=null;var r=2}else if(Ff(t.i,e))n=e.F,F_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Qc(),St(r,new S_(r,n)),rh(t)}else Q_(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&XD(t,e)||r==2&&$m(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}}function J_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function mi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Pt(t.pb,t);n||(n=new Ei("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Qu(n,"https"),Zc(n)),WD(n.toString(),r)}else Ut(2);t.H=0,t.h&&t.h.za(e),Z_(t),q_(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function Z_(t){if(t.H=0,t.ma=[],t.h){const e=U_(t.i);(e.length!=0||t.j.length!=0)&&(Cv(t.ma,e),Cv(t.ma,t.j),t.i.i.length=0,ym(t.j),t.j.length=0),t.h.ya()}}function eS(t,e,n){var r=n instanceof Ei?pr(n):new Ei(n);if(r.g!="")e&&(r.g=e+"."+r.g),Yu(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ei(null);r&&Qu(s,r),e&&(s.g=e),i&&Yu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ne(r,n,e),Ne(r,"VER",t.ra),rl(t,r),r}function tS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ge(new tl({ob:!0})):new Ge(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function nS(){}F=nS.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function Ju(){if(Ps&&!(10<=Number(cD)))throw Error("Environmental error: no available transport.")}Ju.prototype.g=function(t,e){return new tn(t,e)};function tn(t,e){dt.call(this),this.g=new K_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!va(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!va(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zs(this)}pt(tn,dt);tn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=eS(t,null,t.Y),rh(t)};tn.prototype.close=function(){Lm(this.g)};tn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=km(t),t=n);e.j.push(new jD(e.fb++,t)),e.H==3&&rh(e)};tn.prototype.N=function(){this.g.h=null,delete this.j,Lm(this.g),delete this.g,tn.$.N.call(this)};function rS(t){Am.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(rS,Am);function iS(){Nm.call(this),this.status=1}pt(iS,Nm);function Zs(t){this.g=t}pt(Zs,nS);Zs.prototype.Ba=function(){St(this.g,"a")};Zs.prototype.Aa=function(t){St(this.g,new rS(t))};Zs.prototype.za=function(t){St(this.g,new iS)};Zs.prototype.ya=function(){St(this.g,"b")};function JD(){this.blockSize=-1}function Nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pt(Nn,JD);Nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)cd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){cd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){cd(this,r),i=0;break}}this.h=i,this.i+=e};Nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ke(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var ZD={};function bm(t){return-128<=t&&128>t?aD(t,function(e){return new ke([e|0],0>e?-1:0)}):new ke([t|0],0>t?-1:0)}function Fn(t){if(isNaN(t)||!isFinite(t))return vs;if(0>t)return Et(Fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Uf;return new ke(e,0)}function sS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Et(sS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Fn(Math.pow(e,8)),r=vs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Fn(Math.pow(e,s)),r=r.R(s).add(Fn(o))):(r=r.R(n),r=r.add(Fn(o)))}return r}var Uf=4294967296,vs=bm(0),jf=bm(1),bv=bm(16777216);F=ke.prototype;F.ea=function(){if(hn(this))return-Et(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Uf+r)*e,e*=Uf}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sr(this))return"0";if(hn(this))return"-"+Et(this).toString(t);for(var e=Fn(Math.pow(t,6)),n=this,r="";;){var i=ec(n,e).g;n=Zu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,sr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function hn(t){return t.h==-1}F.X=function(t){return t=Zu(this,t),hn(t)?-1:sr(t)?0:1};function Et(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ke(n,~t.h).add(jf)}F.abs=function(){return hn(this)?Et(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ke(n,n[n.length-1]&-2147483648?-1:0)};function Zu(t,e){return t.add(Et(e))}F.R=function(t){if(sr(this)||sr(t))return vs;if(hn(this))return hn(t)?Et(this).R(Et(t)):Et(Et(this).R(t));if(hn(t))return Et(this.R(Et(t)));if(0>this.X(bv)&&0>t.X(bv))return Fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Fl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Fl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ke(n,0)};function Fl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function wo(t,e){this.g=t,this.h=e}function ec(t,e){if(sr(e))throw Error("division by zero");if(sr(t))return new wo(vs,vs);if(hn(t))return e=ec(Et(t),e),new wo(Et(e.g),Et(e.h));if(hn(e))return e=ec(t,Et(e)),new wo(Et(e.g),e.h);if(30<t.g.length){if(hn(t)||hn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jf,r=e;0>=r.X(t);)n=Fv(n),r=Fv(r);var i=Bi(n,1),s=Bi(r,1);for(r=Bi(r,2),n=Bi(n,2);!sr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Bi(r,1),n=Bi(n,1)}return e=Zu(t,i.R(e)),new wo(i,e)}for(i=vs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Fn(n),o=s.R(e);hn(o)||0<o.X(t);)n-=r,s=Fn(n),o=s.R(e);sr(s)&&(s=jf),i=i.add(s),t=Zu(t,o)}return new wo(i,t)}F.gb=function(t){return ec(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ke(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ke(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ke(n,this.h^t.h)};function Fv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ke(n,t.h)}function Bi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ke(i,t.h)}Ju.prototype.createWebChannel=Ju.prototype.g;tn.prototype.send=tn.prototype.u;tn.prototype.open=tn.prototype.m;tn.prototype.close=tn.prototype.close;Yc.NO_ERROR=0;Yc.TIMEOUT=8;Yc.HTTP_ERROR=6;T_.COMPLETE="complete";k_.EventType=Ja;Ja.OPEN="a";Ja.CLOSE="b";Ja.ERROR="c";Ja.MESSAGE="d";dt.prototype.listen=dt.prototype.O;Ge.prototype.listenOnce=Ge.prototype.P;Ge.prototype.getLastError=Ge.prototype.Sa;Ge.prototype.getLastErrorCode=Ge.prototype.Ia;Ge.prototype.getStatus=Ge.prototype.da;Ge.prototype.getResponseJson=Ge.prototype.Wa;Ge.prototype.getResponseText=Ge.prototype.ja;Ge.prototype.send=Ge.prototype.ha;Ge.prototype.setWithCredentials=Ge.prototype.Oa;Nn.prototype.digest=Nn.prototype.l;Nn.prototype.reset=Nn.prototype.reset;Nn.prototype.update=Nn.prototype.j;ke.prototype.add=ke.prototype.add;ke.prototype.multiply=ke.prototype.R;ke.prototype.modulo=ke.prototype.gb;ke.prototype.compare=ke.prototype.X;ke.prototype.toNumber=ke.prototype.ea;ke.prototype.toString=ke.prototype.toString;ke.prototype.getBits=ke.prototype.D;ke.fromNumber=Fn;ke.fromString=sS;var eP=function(){return new Ju},tP=function(){return Qc()},hd=Yc,nP=T_,rP=bi,Uv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},iP=tl,Ul=k_,sP=Ge,oP=Nn,ws=ke;const jv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new im("@firebase/firestore");function zv(){return Di.logLevel}function V(t,...e){if(Di.logLevel<=we.DEBUG){const n=e.map(Fm);Di.debug(`Firestore (${eo}): ${t}`,...n)}}function mr(t,...e){if(Di.logLevel<=we.ERROR){const n=e.map(Fm);Di.error(`Firestore (${eo}): ${t}`,...n)}}function Os(t,...e){if(Di.logLevel<=we.WARN){const n=e.map(Fm);Di.warn(`Firestore (${eo}): ${t}`,...n)}}function Fm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: `+t;throw mr(e),new Error(e)}function Pe(t,e){t||ne()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class lP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uP{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new oS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new Rt(e)}}class cP{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class hP{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new cP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new dP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new at(0,0))}static max(){return new ie(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends Ca{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const mP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Ca{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return mP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(qe.fromString(e))}static fromName(e){return new G(qe.fromString(e).popFirst(5))}static empty(){return new G(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new qe(e.slice()))}}function gP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new Jr(i,G.empty(),e)}function yP(t){return new Jr(t.readTime,t.key,-1)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(ie.min(),G.empty(),-1)}static max(){return new Jr(ie.max(),G.empty(),-1)}}function vP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==wP)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Um{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Um.ct=-1;function ih(t){return t==null}function tc(t){return t===0&&1/t==-1/0}function _P(t){return typeof t=="number"&&Number.isInteger(t)&&!tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function to(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jl(this.root,e,this.comparator,!0)}}class jl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??wt.RED,this.left=i??wt.EMPTY,this.right=s??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new wt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,r,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bv(this.data.getIterator())}getIteratorFrom(e){return new Bv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Lt(this.comparator);return n.data=e,n}}class Bv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new Lt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class uS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uS("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const SP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=SP.exec(t);if(Pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pi(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zm(t){const e=t.mapValue.fields.__previous_value__;return jm(e)?zm(e):e}function xa(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jm(t)?4:kP(t)?9007199254740991:10:ne()}function Wn(t,e){if(t===e)return!0;const n=Oi(t);if(n!==Oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xa(t).isEqual(xa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Zr(r.timestampValue),o=Zr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Pi(r.bytesValue).isEqual(Pi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ze(r.doubleValue),o=Ze(i.doubleValue);return s===o?tc(s)===tc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vv(s)!==Vv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Wn(s[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function Aa(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Oi(t),r=Oi(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ze(i.integerValue||i.doubleValue),a=Ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hv(t.timestampValue,e.timestampValue);case 4:return Hv(xa(t),xa(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Pi(i),a=Pi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ee(o[l],a[l]);if(u!==0)return u}return Ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Ee(Ze(i.latitude),Ze(s.latitude));return o!==0?o:Ee(Ze(i.longitude),Ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=$s(o[l],a[l]);if(u)return u}return Ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===zl.mapValue&&s===zl.mapValue)return 0;if(i===zl.mapValue)return 1;if(s===zl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Ee(a[c],u[c]);if(h!==0)return h;const d=$s(o[a[c]],l[u[c]]);if(d!==0)return d}return Ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Hv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Zr(t),r=Zr(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function Ms(t){return zf(t)}function zf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Zr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=zf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${zf(r.fields[a])}`;return s+"}"}(t.mapValue):ne();var e,n}function Vf(t){return!!t&&"integerValue"in t}function Vm(t){return!!t&&"arrayValue"in t}function Wv(t){return!!t&&"nullValue"in t}function Kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uu(t){return!!t&&"mapValue"in t}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return to(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=Dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){to(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dn(Bo(this.value))}}function cS(t){const e=[];return to(t.fields,(n,r)=>{const i=new Dt([n]);if(uu(r)){const s=cS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,ie.min(),ie.min(),ie.min(),dn.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,ie.min(),ie.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,ie.min(),ie.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nc{constructor(e,n){this.position=e,this.inclusive=n}}function qv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function IP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hS{}class st extends hS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xP(e,n,r):n==="array-contains"?new NP(e,r):n==="in"?new DP(e,r):n==="not-in"?new PP(e,r):n==="array-contains-any"?new OP(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RP(e,r):new AP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&Oi(this.value)===Oi(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Kn extends hS{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Kn(e,n)}matches(e){return dS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dS(t){return t.op==="and"}function fS(t){return CP(t)&&dS(t)}function CP(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function Bf(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(fS(t))return t.filters.map(e=>Bf(e)).join(",");{const e=t.filters.map(n=>Bf(n)).join(",");return`${t.op}(${e})`}}function pS(t,e){return t instanceof st?function(n,r){return r instanceof st&&n.op===r.op&&n.field.isEqual(r.field)&&Wn(n.value,r.value)}(t,e):t instanceof Kn?function(n,r){return r instanceof Kn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&pS(s,r.filters[o]),!0):!1}(t,e):void ne()}function mS(t){return t instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${Ms(e.value)}`}(t):t instanceof Kn?function(e){return e.op.toString()+" {"+e.getFilters().map(mS).join(" ,")+"}"}(t):"Filter"}class xP extends st{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class RP extends st{constructor(e,n){super(e,"in",n),this.keys=gS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AP extends st{constructor(e,n){super(e,"not-in",n),this.keys=gS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class NP extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vm(n)&&Aa(n.arrayValue,this.value)}}class DP extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class PP extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class OP extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
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
 */class LP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Qv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LP(t,e,n,r,i,s,o)}function Bm(t){const e=le(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ih(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.dt=n}return e.dt}function Hm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gv(t.startAt,e.startAt)&&Gv(t.endAt,e.endAt)}function Hf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function $P(t,e,n,r,i,s,o,a){return new sh(t,e,n,r,i,s,o,a)}function Wm(t){return new sh(t)}function Yv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MP(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bP(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function FP(t){return t.collectionGroup!==null}function Es(t){const e=le(t);if(e.wt===null){e.wt=[];const n=bP(e),r=MP(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ho(n)),e.wt.push(new Ho(Dt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ho(Dt.keyField(),s))}}}return e.wt}function gr(t){const e=le(t);if(!e._t)if(e.limitType==="F")e._t=Qv(e.path,e.collectionGroup,Es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Es(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ho(s.field,o))}const r=e.endAt?new nc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new nc(e.startAt.position,e.startAt.inclusive):null;e._t=Qv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Wf(t,e,n){return new sh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oh(t,e){return Hm(gr(t),gr(e))&&t.limitType===e.limitType}function yS(t){return`${Bm(gr(t))}|lt:${t.limitType}`}function Kf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>mS(r)).join(", ")}]`),ih(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),`Target(${n})`}(gr(t))}; limitType=${t.limitType})`}function ah(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):G.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Es(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=qv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Es(n),r)||n.endAt&&!function(i,s,o){const a=qv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Es(n),r))}(t,e)}function UP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vS(t){return(e,n)=>{let r=!1;for(const i of Es(t)){const s=jP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jP(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?$s(a,l):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){to(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new Be(G.comparator);function yr(){return zP}const wS=new Be(G.comparator);function Ro(...t){let e=wS;for(const n of t)e=e.insert(n.key,n);return e}function ES(t){let e=wS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gi(){return Wo()}function _S(){return Wo()}function Wo(){return new no(t=>t.toString(),(t,e)=>t.isEqual(e))}const VP=new Be(G.comparator),BP=new Lt(G.comparator);function de(...t){let e=BP;for(const n of t)e=e.add(n);return e}const HP=new Lt(Ee);function WP(){return HP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(e)?"-0":e}}function TS(t){return{integerValue:""+t}}function KP(t,e){return _P(e)?TS(e):SS(t,e)}/**
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
 */class lh{constructor(){this._=void 0}}function qP(t,e,n){return t instanceof rc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&jm(i)&&(i=zm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Na?IS(t,e):t instanceof Da?CS(t,e):function(r,i){const s=kS(r,i),o=Xv(s)+Xv(r.gt);return Vf(s)&&Vf(r.gt)?TS(o):SS(r.serializer,o)}(t,e)}function GP(t,e,n){return t instanceof Na?IS(t,e):t instanceof Da?CS(t,e):n}function kS(t,e){return t instanceof ic?Vf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class rc extends lh{}class Na extends lh{constructor(e){super(),this.elements=e}}function IS(t,e){const n=xS(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Da extends lh{constructor(e){super(),this.elements=e}}function CS(t,e){let n=xS(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class ic extends lh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Xv(t){return Ze(t.integerValue||t.doubleValue)}function xS(t){return Vm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Na&&r instanceof Na||n instanceof Da&&r instanceof Da?Ls(n.elements,r.elements,Wn):n instanceof ic&&r instanceof ic?Wn(n.gt,r.gt):n instanceof rc&&r instanceof rc}(t.transform,e.transform)}class YP{constructor(e,n){this.version=e,this.transformResults=n}}class lr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uh{}function RS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new NS(t.key,lr.none()):new ol(t.key,t.data,lr.none());{const n=t.data,r=dn.empty();let i=new Lt(Dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fi(t.key,r,new kn(i.toArray()),lr.none())}}function XP(t,e,n){t instanceof ol?function(r,i,s){const o=r.value.clone(),a=Zv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(r,i,s){if(!cu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Zv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(AS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof ol?function(i,s,o,a){if(!cu(i.precondition,s))return o;const l=i.value.clone(),u=e0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(i,s,o,a){if(!cu(i.precondition,s))return o;const l=e0(i.fieldTransforms,a,s),u=s.data;return u.setAll(AS(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return cu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function JP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kS(r.transform,i||null);s!=null&&(n===null&&(n=dn.empty()),n.set(r.field,s))}return n||null}function Jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ls(n,r,(i,s)=>QP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ol extends uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zv(t,e,n){const r=new Map;Pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,GP(o,a,n[i]))}return r}function e0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qP(s,o,e))}return r}class NS extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZP extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_S();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=RS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,r)=>Jv(n,r))&&Ls(this.baseMutations,e.baseMutations,(n,r)=>Jv(n,r))}}class Km{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Pe(e.mutations.length===r.length);let i=VP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Km(e,n,r,i)}}/**
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
 */class tO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,me;function rO(t){switch(t){default:return ne();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function DS(t){if(t===void 0)return mr("GRPC error has no .code"),N.UNKNOWN;switch(t){case Xe.OK:return N.OK;case Xe.CANCELLED:return N.CANCELLED;case Xe.UNKNOWN:return N.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return N.INTERNAL;case Xe.UNAVAILABLE:return N.UNAVAILABLE;case Xe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Xe.NOT_FOUND:return N.NOT_FOUND;case Xe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Xe.ABORTED:return N.ABORTED;case Xe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Xe.DATA_LOSS:return N.DATA_LOSS;default:return ne()}}(me=Xe||(Xe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Vl}static getOrCreateInstance(){return Vl===null&&(Vl=new qm),Vl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Vl=null;/**
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
 */function iO(){return new TextEncoder}/**
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
 */const sO=new ws([4294967295,4294967295],0);function t0(t){const e=iO().encode(t),n=new oP;return n.update(e),new Uint8Array(n.digest())}function n0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ws([n,r],0),new ws([i,s],0)]}class Gm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ao(`Invalid padding: ${n}`);if(r<0)throw new Ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ao(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ws.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(ws.fromNumber(r)));return i.compare(sO)===1&&(i=new ws([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=t0(e),[r,i]=n0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=t0(e),[r,i]=n0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ch(ie.min(),i,new Be(Ee),yr(),de())}}class al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new al(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class PS{constructor(e,n){this.targetId=e,this.Vt=n}}class OS{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class r0{constructor(){this.St=0,this.Dt=s0(),this.Ct=bt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=de(),n=de(),r=de();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new al(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=s0()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class oO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=yr(),this.zt=i0(),this.Wt=new Be(Ee)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Hf(o))if(i===0){const a=new G(o.path);this.Yt(r,a,Nt.newNoDocument(a,ie.min()))}else Pe(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=qm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,g,v,w,E,m;const f={localCacheCount:c,existenceFilterCount:h.count},y=h.unchangedNames;return y&&(f.bloomFilter={applied:u===0,hashCount:(d=y==null?void 0:y.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(w=(v=(g=y==null?void 0:y.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&w!==void 0?w:0,padding:(m=(E=y==null?void 0:y.bits)===null||E===void 0?void 0:E.padding)!==null&&m!==void 0?m:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Pi(s).toUint8Array()}catch(c){if(c instanceof uS)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Gm(l,o,a)}catch(c){return Os(c instanceof Ao?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Hf(a.target)){const l=new G(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Nt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=de();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ch(e,n,this.Wt,this.jt,r);return this.jt=yr(),this.zt=i0(),this.Wt=new Be(Ee),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new r0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Lt(Ee),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new r0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function i0(){return new Be(G.comparator)}function s0(){return new Be(G.comparator)}const aO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uO=(()=>({and:"AND",or:"OR"}))();class cO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qf(t,e){return t.useProto3Json||ih(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hO(t,e){return sc(t,e.toTimestamp())}function Hn(t){return Pe(!!t),ie.fromTimestamp(function(e){const n=Zr(e);return new at(n.seconds,n.nanos)}(t))}function Qm(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function $S(t){const e=qe.fromString(t);return Pe(US(e)),e}function Gf(t,e){return Qm(t.databaseId,e.path)}function dd(t,e){const n=$S(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(MS(n))}function Qf(t,e){return Qm(t.databaseId,e)}function dO(t){const e=$S(t);return e.length===4?qe.emptyPath():MS(e)}function Yf(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MS(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function o0(t,e,n){return{name:Gf(t,e),fields:n.value.mapValue.fields}}function fO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Pe(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?N.UNKNOWN:DS(l.code);return new Q(u,l.message||"")}(o);n=new OS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dd(t,r.document.name),s=Hn(r.document.updateTime),o=r.document.createTime?Hn(r.document.createTime):ie.min(),a=new dn({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new hu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dd(t,r.document),s=r.readTime?Hn(r.readTime):ie.min(),o=Nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dd(t,r.document),s=r.removedTargetIds||[];n=new hu([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nO(i,s),a=r.targetId;n=new PS(a,o)}}return n}function pO(t,e){let n;if(e instanceof ol)n={update:o0(t,e.key,e.value)};else if(e instanceof NS)n={delete:Gf(t,e.key)};else if(e instanceof Fi)n={update:o0(t,e.key,e.data),updateMask:TO(e.fieldMask)};else{if(!(e instanceof ZP))return ne();n={verify:Gf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof rc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Na)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Da)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ic)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:hO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function mO(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Hn(r.updateTime):Hn(i);return s.isEqual(ie.min())&&(s=Hn(i)),new YP(s,r.transformResults||[])}(n,e))):[]}function gO(t,e){return{documents:[Qf(t,e.path)]}}function yO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return FS(Kn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Hi(c.field),direction:EO(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vO(t){let e=dO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Pe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=bS(c);return h instanceof Kn&&fS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ho(Wi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ih(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new nc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new nc(d,h)}(n.endAt)),$P(e,i,o,s,a,"F",l,u)}function wO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Wi(e.unaryFilter.field);return st.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Wi(e.unaryFilter.field);return st.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wi(e.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Wi(e.unaryFilter.field);return st.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(e){return st.create(Wi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Kn.create(e.compositeFilter.filters.map(n=>bS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ne()}}(e.compositeFilter.op))}(t):ne()}function EO(t){return aO[t]}function _O(t){return lO[t]}function SO(t){return uO[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function Wi(t){return Dt.fromServerFormat(t.fieldPath)}function FS(t){return t instanceof st?function(e){if(e.op==="=="){if(Kv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NAN"}};if(Wv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Kv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NOT_NAN"}};if(Wv(e.value))return{unaryFilter:{field:Hi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(e.field),op:_O(e.op),value:e.value}}}(t):t instanceof Kn?function(e){const n=e.getFilters().map(r=>FS(r));return n.length===1?n[0]:{compositeFilter:{op:SO(e.op),filters:n}}}(t):ne()}function TO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function US(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.fe=e}}function IO(t){const e=vO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wf(e,e.limit,"L"):e}/**
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
 */class CO{constructor(){this.rn=new xO}addToCollectionParentIndex(e,n){return this.rn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Jr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class xO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Lt(qe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Lt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new bs(0)}static Mn(){return new bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.changes=new no(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ko(r.mutation,i,kn.empty(),at.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ro();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=yr();const o=Wo(),a=Wo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Fi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ko(c.mutation,u,c.mutation.getFieldMask(),at.now())):o.set(u.key,kn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new AO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Wo();let i=new Be((o,a)=>o-a),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||kn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||de()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=_S();c.forEach(d=>{if(!s.has(d)){const g=RS(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):FP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(gi());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,de())).next(c=>({batchId:a,changes:ES(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ro();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(u,c){return new sh(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Nt.newInvalidDocument(u)))});let o=Ro();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ko(u.mutation,l,kn.empty(),at.now()),ah(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return P.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Hn(r.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:IO(r.bundledQuery),readTime:Hn(r.readTime)}}(n)),P.resolve()}}/**
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
 */class PO{constructor(){this.overlays=new Be(G.comparator),this.ls=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gi();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=gi(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=gi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=gi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tO(n,r));let s=this.ls.get(n);s===void 0&&(s=de(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.fs=new Lt(ut.ds),this.ws=new Lt(ut._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new ut(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new ut(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new G(new qe([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new G(new qe([])),r=new ut(n,e),i=new ut(n,e+1);let s=de();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return G.comparator(e.key,n.key)||Ee(e.As,n.As)}static _s(e,n){return Ee(e.As,n.As)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Lt(ut.ds)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ut(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Lt(Ee);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),P.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new ut(new G(s),0);let a=new Lt(Ee);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),P.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return P.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new ut(n,0),i=this.Rs.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.Ds=e,this.docs=new Be(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=yr();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vP(yP(c),r)<=0||(i.has(c.key)||ah(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Cs(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $O(this)}getSize(e){return P.resolve(this.size)}}class $O extends RO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.persistence=e,this.xs=new no(n=>Bm(n),Hm),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Ym,this.targetCount=0,this.Ms=bs.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),P.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Fn(n),P.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.$s={},this.overlays={},this.Os=new Um(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new MO(this),this.indexManager=new CO,this.remoteDocumentCache=function(r){return new LO(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new kO(n),this.qs=new DO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new OO(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new FO(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return P.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class FO extends EP{constructor(e){super(),this.currentSequenceNumber=e}}class Xm{constructor(e){this.persistence=e,this.Qs=new Ym,this.js=null}static zs(e){return new Xm(e)}get Ws(){if(this.js)return this.js;throw ne()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),P.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Ws,r=>{const i=G.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return P.or([()=>P.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jm(e,n.fromCache,r,i)}}/**
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
 */class UO{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Yv(n))return P.resolve(null);let r=gr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wf(n,null,"F"),r=gr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Wf(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Yv(n)||i.isEqual(ie.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(zv()<=we.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kf(n)),this.Wi(e,o,n,gP(i,-1)))})}ji(e,n){let r=new Lt(vS(e));return n.forEach((i,s)=>{ah(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return zv()<=we.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Kf(n)),this.Ui.getDocumentsMatchingQuery(e,n,Jr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Be(Ee),this.Yi=new no(s=>Bm(s),Hm),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function zO(t,e,n,r){return new jO(t,e,n,r)}async function jS(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=de();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function VO(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=P.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const w=l.docVersions.get(g);Pe(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=de();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zS(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function BO(t,e){const n=le(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(v,w,E){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=yr(),u=de();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(HO(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(ie.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function HO(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=yr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function WO(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KO(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Xf(t,e,n){const r=le(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sl(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function a0(t,e,n){const r=le(t);let i=ie.min(),s=de();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=le(a),h=c.Yi.get(u);return h!==void 0?P.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,gr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:de())).next(a=>(qO(r,UP(e),a),{documents:a,ir:s})))}function qO(t,e,n){let r=t.Xi.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class l0{constructor(){this.activeTargetIds=WP()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GO{constructor(){this.Hr=new l0,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new l0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QO{Yr(e){}shutdown(){}}/**
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
 */class u0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bl=null;function fd(){return Bl===null?Bl=268435456+Math.round(2147483648*Math.random()):Bl++,"0x"+Bl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class JO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=fd(),a=this.To(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(V("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Os("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+eo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=YO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=fd();return new Promise((o,a)=>{const l=new sP;l.setWithCredentials(!0),l.listenOnce(nP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hd.NO_ERROR:const c=l.getResponseJson();V(xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case hd.TIMEOUT:V(xt,`RPC '${e}' ${s} timed out`),a(new Q(N.DEADLINE_EXCEEDED,"Request time out"));break;case hd.HTTP_ERROR:const h=l.getStatus();if(V(xt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(E)>=0?E:N.UNKNOWN}(g.status);a(new Q(v,g.message))}else a(new Q(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Q(N.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{V(xt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);V(xt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=fd(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eP(),a=tP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new iP({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");V(xt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const v=new XO({ro:E=>{g?V(xt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(V(xt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),V(xt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),w=(E,m,f)=>{E.listen(m,y=>{try{f(y)}catch(p){setTimeout(()=>{throw p},0)}})};return w(h,Ul.EventType.OPEN,()=>{g||V(xt,`RPC '${e}' stream ${i} transport opened.`)}),w(h,Ul.EventType.CLOSE,()=>{g||(g=!0,V(xt,`RPC '${e}' stream ${i} transport closed`),v.wo())}),w(h,Ul.EventType.ERROR,E=>{g||(g=!0,Os(xt,`RPC '${e}' stream ${i} transport errored:`,E),v.wo(new Q(N.UNAVAILABLE,"The operation could not be completed")))}),w(h,Ul.EventType.MESSAGE,E=>{var m;if(!g){const f=E.data[0];Pe(!!f);const y=f,p=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(p){V(xt,`RPC '${e}' stream ${i} received error:`,p);const T=p.status;let R=function(O){const K=Xe[O];if(K!==void 0)return DS(K)}(T),A=p.message;R===void 0&&(R=N.INTERNAL,A="Unknown error status: "+T+" with message "+p.message),g=!0,v.wo(new Q(R,A)),h.close()}else V(xt,`RPC '${e}' stream ${i} received:`,f),v._o(f)}}),w(a,rP.STAT_EVENT,E=>{E.stat===Uv.PROXY?V(xt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Uv.NOPROXY&&V(xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function pd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){return new cO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new VS(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new Q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZO extends BS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=fO(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?Hn(s.readTime):ie.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Yf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Hf(a)?{documents:gO(i,a)}:{query:yO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=LS(i,s.resumeToken);const l=qf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(ie.min())>0){o.readTime=sc(i,s.snapshotVersion.toTimestamp());const l=qf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=wO(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Yf(this.serializer),n.removeTarget=e,this.Wo(n)}}class eL extends BS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=mO(e.writeResults,e.commitTime),r=Hn(e.commitTime);return this.listener.cu(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Yf(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pO(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(N.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(N.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class nL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(mr(n),this.mu=!1):V("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ui(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=le(a);l.vu.add(4),await ll(l),l.bu.set("Unknown"),l.vu.delete(4),await dh(l)}(this))})}),this.bu=new nL(r,i)}}async function dh(t){if(Ui(t))for(const e of t.Ru)await e(!0)}async function ll(t){for(const e of t.Ru)await e(!1)}function HS(t,e){const n=le(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),tg(n)?eg(n):ro(n).Ko()&&Zm(n,e))}function WS(t,e){const n=le(t),r=ro(n);n.Au.delete(e),r.Ko()&&KS(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ui(n)&&n.bu.set("Unknown"))}function Zm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ro(t).su(e)}function KS(t,e){t.Vu.qt(e),ro(t).iu(e)}function eg(t){t.Vu=new oO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ro(t).start(),t.bu.gu()}function tg(t){return Ui(t)&&!ro(t).Uo()&&t.Au.size>0}function Ui(t){return le(t).vu.size===0}function qS(t){t.Vu=void 0}async function iL(t){t.Au.forEach((e,n)=>{Zm(t,e)})}async function sL(t,e){qS(t),tg(t)?(t.bu.Iu(e),eg(t)):t.bu.set("Unknown")}async function oL(t,e,n){if(t.bu.set("Online"),e instanceof OS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oc(t,r)}else if(e instanceof hu?t.Vu.Ht(e):e instanceof PS?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ie.min()))try{const r=await zS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),KS(i,a);const c=new Mr(u.target,a,l,u.sequenceNumber);Zm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await oc(t,r)}}async function oc(t,e,n){if(!sl(e))throw e;t.vu.add(1),await ll(t),t.bu.set("Offline"),n||(n=()=>zS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await dh(t)})}function GS(t,e){return e().catch(n=>oc(t,n,e))}async function fh(t){const e=le(t),n=ei(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;aL(e);)try{const i=await WO(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,lL(e,i)}catch(i){await oc(e,i)}QS(e)&&YS(e)}function aL(t){return Ui(t)&&t.Eu.length<10}function lL(t,e){t.Eu.push(e);const n=ei(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function QS(t){return Ui(t)&&!ei(t).Uo()&&t.Eu.length>0}function YS(t){ei(t).start()}async function uL(t){ei(t).hu()}async function cL(t){const e=ei(t);for(const n of t.Eu)e.uu(n.mutations)}async function hL(t,e,n){const r=t.Eu.shift(),i=Km.from(r,e,n);await GS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fh(t)}async function dL(t,e){e&&ei(t).ou&&await async function(n,r){if(i=r.code,rO(i)&&i!==N.ABORTED){const s=n.Eu.shift();ei(n).Qo(),await GS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await fh(n)}var i}(t,e),QS(t)&&YS(t)}async function c0(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Ui(n);n.vu.add(3),await ll(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await dh(n)}async function fL(t,e){const n=le(t);e?(n.vu.delete(2),await dh(n)):e||(n.vu.add(2),await ll(n),n.bu.set("Unknown"))}function ro(t){return t.Su||(t.Su=function(e,n,r){const i=le(e);return i.fu(),new ZO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:iL.bind(null,t),ao:sL.bind(null,t),nu:oL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),tg(t)?eg(t):t.bu.set("Unknown")):(await t.Su.stop(),qS(t))})),t.Su}function ei(t){return t.Du||(t.Du=function(e,n,r){const i=le(e);return i.fu(),new eL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:uL.bind(null,t),ao:dL.bind(null,t),au:cL.bind(null,t),cu:hL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await fh(t)):(await t.Du.stop(),t.Eu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ng(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rg(t,e){if(mr("AsyncQueue",`${e}: ${t}`),sl(t))return new Q(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Ro(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(){this.Cu=new Be(G.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):ne():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fs(e,n,_s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.Nu=void 0,this.listeners=[]}}class mL{constructor(){this.queries=new no(e=>yS(e),oh),this.onlineState="Unknown",this.ku=new Set}}async function gL(t,e){const n=le(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pL),i)try{s.Nu=await n.onListen(r)}catch(o){const a=rg(o,`Initialization of query '${Kf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&ig(n)}async function yL(t,e){const n=le(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vL(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&ig(n)}function wL(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ig(t){t.ku.forEach(e=>{e.next()})}class EL{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.key=e}}class JS{constructor(e){this.key=e}}class _L{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=de(),this.mutatedKeys=de(),this.tc=vS(e),this.ec=new _s(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new h0,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=ah(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?v!==w&&(r.track({type:3,doc:g}),E=!0):this.rc(d,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return g(h)-g(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Fs(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new h0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=de(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new JS(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new XS(r))}),n}hc(e){this.Yu=e.ir,this.Zu=de();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Fs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class SL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TL{constructor(e){this.key=e,this.fc=!1}}class kL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new no(a=>yS(a),oh),this._c=new Map,this.mc=new Set,this.gc=new Be(G.comparator),this.yc=new Map,this.Ic=new Ym,this.Tc={},this.Ec=new Map,this.Ac=bs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function IL(t,e){const n=$L(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await KO(n.localStore,gr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await CL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&HS(n.remoteStore,o)}return i}async function CL(t,e,n,r,i){t.Rc=(h,d,g)=>async function(v,w,E,m){let f=w.view.sc(E);f.zi&&(f=await a0(v.localStore,w.query,!1).then(({documents:T})=>w.view.sc(T,f)));const y=m&&m.targetChanges.get(w.targetId),p=w.view.applyChanges(f,v.isPrimaryClient,y);return f0(v,w.targetId,p.cc),p.snapshot}(t,h,d,g);const s=await a0(t.localStore,e,!0),o=new _L(e,s.ir),a=o.sc(s.documents),l=al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);f0(t,n,u.cc);const c=new SL(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function xL(t,e){const n=le(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!oh(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),WS(n.remoteStore,r.targetId),Jf(n,r.targetId)}).catch(il)):(Jf(n,r.targetId),await Xf(n.localStore,r.targetId,!0))}async function RL(t,e,n){const r=ML(t);try{const i=await function(s,o){const a=le(s),l=at.now(),u=o.reduce((d,g)=>d.add(g.key),de());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=yr(),v=de();return a.Zi.getEntries(d,u).next(w=>{g=w,g.forEach((E,m)=>{m.isValidDocument()||(v=v.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(w=>{c=w;const E=[];for(const m of o){const f=JP(m,c.get(m.key).overlayedDocument);f!=null&&E.push(new Fi(m.key,f,cS(f.value.mapValue),lr.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:ES(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Be(Ee)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await ul(r,i.changes),await fh(r.remoteStore)}catch(i){const s=rg(i,"Failed to persist write");n.reject(s)}}async function ZS(t,e){const n=le(t);try{const r=await BO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Pe(o.fc):i.removedDocuments.size>0&&(Pe(o.fc),o.fc=!1))}),await ul(n,r,e)}catch(r){await il(r)}}function d0(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=le(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&ig(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AL(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Be(G.comparator);o=o.insert(s,Nt.newNoDocument(s,ie.min()));const a=de().add(s),l=new ch(ie.min(),new Map,new Be(Ee),o,a);await ZS(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),sg(r)}else await Xf(r.localStore,e,!1).then(()=>Jf(r,e,n)).catch(il)}async function NL(t,e){const n=le(t),r=e.batch.batchId;try{const i=await VO(n.localStore,e);tT(n,r,null),eT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ul(n,i)}catch(i){await il(i)}}async function DL(t,e,n){const r=le(t);try{const i=await function(s,o){const a=le(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Pe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);tT(r,e,n),eT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ul(r,i)}catch(i){await il(i)}}function eT(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function tT(t,e,n){const r=le(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Jf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||nT(t,r)})}function nT(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(WS(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),sg(t))}function f0(t,e,n){for(const r of n)r instanceof XS?(t.Ic.addReference(r.key,e),PL(t,r)):r instanceof JS?(V("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||nT(t,r.key)):ne()}function PL(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.mc.add(r),sg(t))}function sg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new G(qe.fromString(e)),r=t.Ac.next();t.yc.set(r,new TL(n)),t.gc=t.gc.insert(n,r),HS(t.remoteStore,new Mr(gr(Wm(n.path)),r,"TargetPurposeLimboResolution",Um.ct))}}async function ul(t,e,n){const r=le(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Jm.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=le(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>P.forEach(l,h=>P.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>P.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!sl(c))throw c;V("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,v)}}}(r.localStore,s))}async function OL(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await jS(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new Q(N.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ul(n,r.er)}}function LL(t,e){const n=le(t),r=n.yc.get(e);if(r&&r.fc)return de().add(r.key);{let i=de();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function $L(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AL.bind(null,e),e.dc.nu=vL.bind(null,e.eventManager),e.dc.Pc=wL.bind(null,e.eventManager),e}function ML(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DL.bind(null,e),e}class p0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return zO(this.persistence,new UO,e.initialUser,this.serializer)}createPersistence(e){return new bO(Xm.zs,this.serializer)}createSharedClientState(e){return new GO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OL.bind(null,this.syncEngine),await fL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mL}createDatastore(e){const n=hh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new JO(i));var i;return function(s,o,a,l){return new tL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>d0(this.syncEngine,a,0),o=u0.D()?new u0:new QO,new rL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new kL(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=le(e);V("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ll(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FL{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=aS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function md(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function m0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zL(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>c0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>c0(e.remoteStore,s)),t._onlineComponents=e}function jL(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await md(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jL(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await md(t,new p0)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await md(t,new p0);return t._offlineComponents}async function rT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await m0(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await m0(t,new bL))),t._onlineComponents}function VL(t){return rT(t).then(e=>e.syncEngine)}async function BL(t){const e=await rT(t),n=e.eventManager;return n.onListen=IL.bind(null,e.syncEngine),n.onUnlisten=xL.bind(null,e.syncEngine),n}function HL(t,e,n={}){const r=new Gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new FL({next:h=>{s.enqueueAndForget(()=>yL(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Q(N.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Q(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new EL(Wm(o.path),u,{includeMetadataChanges:!0,Ku:!0});return gL(i,c)}(await BL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t,e,n){if(!n)throw new Q(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KL(t,e,n,r){if(e===!0&&r===!0)throw new Q(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function y0(t){if(!G.isDocumentKey(t))throw new Q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function og(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Pa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=og(t);throw new Q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class ag{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new v0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new v0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new aP;switch(n.type){case"firstParty":return new hP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=g0.get(e);n&&(V("ComponentProvider","Removing Datastore"),g0.delete(e),n.terminate())}(this),Promise.resolve()}}function qL(t,e,n,r={}){var i;const s=(t=Pa(t,ag))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Rt.MOCK_USER;else{a=wE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Rt(u)}t._authCredentials=new lP(new oS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class lg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lg(this.firestore,e,this._query)}}class Oa extends lg{constructor(e,n,r){super(e,n,Wm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new G(e))}withConverter(e){return new Oa(this.firestore,e,this._path)}}function w0(t,e,...n){if(t=vn(t),arguments.length===1&&(e=aS.A()),WL("doc","path",e),t instanceof ag){const r=qe.fromString(e,...n);return y0(r),new mn(t,null,new G(r))}{if(!(t instanceof mn||t instanceof Oa))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return y0(r),new mn(t.firestore,t instanceof Oa?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new VS(this,"async_queue_retry"),this.Xc=()=>{const n=pd();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=pd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=pd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Gr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!sl(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=ng.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&ne()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class ug extends ag{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new GL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oT(this),this._firestoreClient.terminate()}}function QL(t,e){const n=typeof t=="object"?t:om(),r=typeof t=="string"?t:e||"(default)",i=Uc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gE("firestore");s&&qL(i,...s)}return i}function sT(t){return t._firestoreClient||oT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new TP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,iT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new UL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(bt.fromBase64String(e))}catch(n){throw new Q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=/^__.*__$/;class XL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ol(e,this.data,n,this.fieldTransforms)}}function lT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class dg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new dg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ac(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(lT(this.ca)&&YL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class JL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hh(e)}ya(e,n,r,i=!1){return new dg({ca:e,methodName:n,ga:r,path:Dt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZL(t){const e=t._freezeSettings(),n=hh(t._databaseId);return new JL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function e$(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);dT("Data must be an object, but it was:",o,r);const a=cT(r,o);let l,u;if(s.merge)l=new kn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=t$(e,h,n);if(!o.contains(d))throw new Q(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);r$(c,d)||c.push(d)}l=new kn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new XL(new dn(a),l,u)}function uT(t,e){if(hT(t=vn(t)))return dT("Unsupported field value:",e,t),cT(t,e);if(t instanceof aT)return function(n,r){if(!lT(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=uT(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=vn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return KP(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=at.fromDate(n);return{timestampValue:sc(r.serializer,i)}}if(n instanceof at){const i=new at(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sc(r.serializer,i)}}if(n instanceof hg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Us)return{bytesValue:LS(r.serializer,n._byteString)};if(n instanceof mn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${og(n)}`)}(t,e)}function cT(t,e){const n={};return lS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):to(t,(r,i)=>{const s=uT(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof hg||t instanceof Us||t instanceof mn||t instanceof aT)}function dT(t,e,n){if(!hT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=og(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function t$(t,e,n){if((e=vn(e))instanceof cg)return e._internalPath;if(typeof e=="string")return fT(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const n$=new RegExp("[~\\*/\\[\\]]");function fT(t,e,n){if(e.search(n$)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cg(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Q(N.INVALID_ARGUMENT,a+t+l)}function r$(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new i$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class i$ extends pT{data(){return super.data()}}function mT(t,e){return typeof e=="string"?fT(t,e):e instanceof cg?e._internalPath:e._delegate._internalPath}class s${convertValue(e,n="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return to(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new hg(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xa(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Pe(US(r));const i=new Ra(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gT extends pT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new l$(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class l$ extends gT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u$(t){t=Pa(t,mn);const e=Pa(t.firestore,ug);return HL(sT(e),t._key).then(n=>f$(e,t,n))}class c$ extends s${constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function h$(t,e,n){t=Pa(t,mn);const r=Pa(t.firestore,ug),i=o$(t.converter,e,n);return d$(r,[e$(ZL(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,lr.none())])}function d$(t,e){return function(n,r){const i=new Gr;return n.asyncQueue.enqueueAndForget(async()=>RL(await VL(n),r,i)),i.promise}(sT(t),e)}function f$(t,e,n){const r=n.docs.get(e._key),i=new c$(t);return new gT(t,i,e._key,r,new a$(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){eo=n})(Mi),Ri(new Xr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ug(new uP(n.getProvider("auth-internal")),new fP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),zn(jv,"3.13.0",t),zn(jv,"3.13.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="firebasestorage.googleapis.com",p$="storageBucket",m$=2*60*1e3,g$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Gn{constructor(e,n,r=0){super(gd(e),`Firebase Storage: ${n} (${gd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qn||(qn={}));function gd(t){return"storage/"+t}function y$(){const t="An unknown error occurred, please check the error payload for server response.";return new Qn(qn.UNKNOWN,t)}function v$(){return new Qn(qn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w$(){return new Qn(qn.CANCELED,"User canceled the upload/download.")}function E$(t){return new Qn(qn.INVALID_URL,"Invalid URL '"+t+"'.")}function _$(t){return new Qn(qn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function E0(t){return new Qn(qn.INVALID_ARGUMENT,t)}function vT(){return new Qn(qn.APP_DELETED,"The Firebase app was deleted.")}function S$(t){return new Qn(qn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw _$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(p){p.path.charAt(p.path.length-1)==="/"&&(p.path_=p.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(p){p.path_=decodeURIComponent(p.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},w=n===yT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:g,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let p=0;p<y.length;p++){const T=y[p],R=T.regex.exec(e);if(R){const A=R[T.indices.bucket];let O=R[T.indices.path];O||(O=""),r=new In(A,O),T.postModify(r);break}}if(r==null)throw E$(e);return r}}class T${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(g,l())},E)}function d(){s&&clearTimeout(s)}function g(E,...m){if(u){d();return}if(E){d(),c.call(null,E,...m);return}if(l()||o){d(),c.call(null,E,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function w(E){v||(v=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function I$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C$(t){return t!==void 0}function _0(t,e,n,r){if(r<e)throw E0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw E0(`Invalid value for '${t}'. Expected ${n} or less.`)}function x$(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(lc||(lc={}));/**
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
 */function R$(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A${constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Hl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===lc.NO_ERROR,l=s.getStatus();if(!a||R$(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===lc.ABORT;r(!1,new Hl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Hl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());C$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=y$();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?vT():w$();o(l)}else{const l=v$();o(l)}};this.canceled_?n(!1,new Hl(!1,null,!0)):this.backoffId_=k$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&I$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function N$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function D$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function P$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function O$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function L$(t,e,n,r,i,s,o=!0){const a=x$(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return P$(u,e),N$(u,n),D$(u,s),O$(u,r),new A$(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function M$(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class uc{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new uc(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return M$(this._location.path)}get storage(){return this._service}get parent(){const e=$$(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new uc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw S$(e)}}function S0(t,e){const n=e==null?void 0:e[p$];return n==null?null:In.makeFromBucketSpec(n,t)}function b$(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:wE(i,t.app.options.projectId))}class F${constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=m$,this._maxUploadRetryTime=g$,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=S0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=S0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new uc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new T$(vT());{const o=L$(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const T0="@firebase/storage",k0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="storage";function U$(t=om(),e){t=vn(t);const r=Uc(t,wT).getImmediate({identifier:e}),i=gE("storage");return i&&j$(r,...i),r}function j$(t,e,n,r={}){b$(t,e,n,r)}function z$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new F$(n,r,i,e,Mi)}function V$(){Ri(new Xr(wT,z$,"PUBLIC").setMultipleInstances(!0)),zn(T0,k0,""),zn(T0,k0,"esm2017")}V$();const B$={apiKey:"AIzaSyDjp2naVdYBa2RhxnnLuiDBo3Y1kJvg3Ro",authDomain:"coordinates-10459.firebaseapp.com",projectId:"coordinates-10459",storageBucket:"coordinates-10459.appspot.com",messagingSenderId:"17389845792",appId:"1:17389845792:web:324711e8abcbb7c6aeeb45",measurementId:"G-C4T1LXJLHM"},fg=SE(B$),I0=XN(fg),C0=QL(fg);U$(fg);const ph=x.createContext({});function H$({children:t}){const[e,n]=x.useState(null);x.useState(!1);const[r,i]=x.useState(!1);async function s(u,c){i(!0),await b2(I0,u,c).then(async h=>{let d=h.user.uid;const g=w0(C0,"users",d),v=await u$(g);let w={uid:d,nome:v.data().nome,email:h.user.email,imgUrl:v.data().imgUrl,logado:!0};n(w),l(w),i(!1)})}async function o(u,c,h){i(!0),await M2(I0,c,h).then(async d=>{let g=d.user.uid;await h$(w0(C0,"users",g),{nome:u,imgUrl:null}).then(v=>{let w={nome:u,email:d.user.email,imgUrl:null,logado:!0};n(w),l(w),i(!1)}).catch(v=>{console.log(v)})}).catch(d=>{console.log(d)})}function a(){let u={logado:!1};n(u),l(u),alert("saindo")}function l(u){localStorage.setItem("@userStorage",JSON.stringify(u))}return I.jsx(ph.Provider,{value:{signed:!!e,user:e,signIn:s,signUp:o,loadingAuth:r,LogOut:a},children:t})}const W$=wr.header`
    
    width: 100%;
    padding: 15px;
    background-color: ${t=>t.theme==="light"?"white":"#0A0A0A"};
    box-shadow: 1px 2px #0a0a0a39;
   gap: 13%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 80px;
    }

    a{
        font-weight: bold;
        color: ${t=>t.theme==="light"?"#9E30F4":"white"};
        text-decoration: none;
        font-size: 2.5rem;
        transition: .5s;
    }
    a:hover{
        color: #9E30F4;
    }

    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }

    ul li a{
      
        text-decoration: none;
        font-size: 1.3rem;
    }

    .button{
        font-size: 18px;
        border-radius: 10px;
        font-weight: normal;
        background-color: #9E30F4;
        color: white;
        padding: 12px 15px;
    }
    .button:hover{
        color: white;
    }

    

`;function K$(){const{theme:t}=x.useContext(qs),{LogOut:e}=x.useContext(ph),n=Va();return I.jsxs(W$,{theme:t,children:[I.jsxs("div",{children:[I.jsx($n,{to:"/",children:"Coordinates"}),I.jsxs("ul",{children:[I.jsx("li",{children:I.jsx($n,{to:"/home",children:"Home"})}),I.jsx("li",{children:I.jsx($n,{to:"/",children:"Profile"})}),I.jsx("li",{children:I.jsx($n,{to:"/",children:"Salvos"})})]})]}),I.jsx($n,{className:"button",onClick:()=>{n("/"),e()},children:"Log Out"})]})}function q$(){return I.jsxs(I.Fragment,{children:[I.jsx(K$,{}),I.jsx(aR,{}),I.jsx(JC,{})]})}const G$=wr.div`
      background-color: ${t=>t.theme==="light"?"white":"#0A0A0A"};
      color: ${t=>t.theme==="light"?"black":"white"};
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    justify-content: center;

    h1{
        text-align: center;
        font-size: 3.8rem;
        width: 90%;
        max-width: 1000px;
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
`;function Q$(t){const{theme:e}=x.useContext(qs);return I.jsxs(G$,{theme:e,children:[I.jsxs("h1",{children:["Descubra a sua exata ",I.jsx("b",{children:"coordenada"})," e veja quando quiser!"]}),I.jsx($n,{to:"/home/coordinates",className:"button",children:"Try Now"})]})}const Y$="/app_coordinates/assets/armazenamento-09971877.svg",X$="/app_coordinates/assets/googleapi-1c30252a.svg",J$="/app_coordinates/assets/geolocalizacao-08b5f0ef.svg",Z$=wr.section`
    width: 100%;
   
    background-color: #101010ed;
    display: flex;
    justify-content: space-evenly;
    
    gap: 20px;
    align-items: center;
    padding:  250px 10px;
    flex-wrap: wrap;
`,yd=wr.div`
    width:70vw ;
    max-width: 350px;
    height: 48vh;
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    text-align: center;

    img{
        width: 100%;
        height: 65%;
    }

    p{
        padding-top: 10px;
        font-size: 1.2rem;
    }
`;function eM(){return I.jsxs(Z$,{children:[I.jsxs(yd,{children:[I.jsx("img",{src:Y$,alt:""}),I.jsx("h2",{children:"Armazenamento"}),I.jsx("p",{children:"Armazene os seus endereços e suas coordenadas para acessar quando quiser."})]}),I.jsxs(yd,{children:[I.jsx("img",{src:J$,alt:""}),I.jsx("h2",{children:"Geolocalização"}),I.jsx("p",{children:"Tenha em mãos as exatas coordenadas geográficas que você procura"})]}),I.jsxs(yd,{children:[I.jsx("img",{src:X$,alt:""}),I.jsx("h2",{children:"Google API"}),I.jsx("p",{children:"Esse projeto utiliza Google API para fornecer a geolocalização que você deseja."})]})]})}function tM(){return I.jsxs(I.Fragment,{children:[I.jsx(Q$,{}),I.jsx(eM,{})]})}const nM=wr.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 12vh;

    h1{
        padding-bottom: 5vh;
        font-size: 2.3rem;
    }

    .formulario form{
        display: flex;
        flex-direction: column;
        
        gap: 20px;
    }
    .formulario form div{
        display: flex;
        flex-direction: column;
    }

    .formulario form div label{
        font-size: 1.25rem;
        padding-bottom: 20px;
    }

    .formulario form div input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
        font-size: 1.2rem;
    }

    .formulario form .divCoordenada{
        gap: 10px;
        flex-direction: row;
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



    .img{
        width: 90%;
        max-width: 450px;
    }
`,rM="/app_coordinates/assets/googleapi-1c30252a.svg";function iM(t){return I.jsxs(nM,{children:[I.jsxs("div",{className:"formulario",children:[I.jsx("h1",{children:"Preencha o formulário a seguir"}),I.jsxs("form",{action:"",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"",children:"Digite um endereço:"}),I.jsx("input",{type:"text",name:"",id:""})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"",children:"Digite um endereço:"}),I.jsx("input",{type:"text",name:"",id:""})]}),I.jsxs("div",{className:"divCoordenada",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"",children:"Latitude"}),I.jsx("input",{type:"text",name:"",readOnly:!0,id:""})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"",children:"Longitude"}),I.jsx("input",{type:"text",name:"",readOnly:!0,id:""})]})]}),I.jsx("button",{type:"submit",children:"Buscar"})]})]}),I.jsx("div",{children:I.jsx("img",{className:"img",src:rM,alt:""})})]})}const sM="/app_coordinates/assets/inicio-21a63dea.svg",oM=wr.main`
    width: 100vw;
    height: 100vh;
    background-color: ${t=>t.theme==="light"?"white":"#0A0A0A"};
    color: ${t=>t.theme==="light"?"black":"white"};
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;

    div img{
        max-width: 400px;
        transition: .9s;
    }

    .text{
        max-width: 450px;
    }
    .text h1{
        font-size: 2.8rem;
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
`;function aM(t){const{theme:e,toggleTheme:n}=x.useContext(qs);return I.jsxs(oM,{theme:e,children:[I.jsxs("div",{className:"text",children:[I.jsx("h1",{children:"Descubra coordenadas exatas e veja quando quiser"}),I.jsx("p",{children:"Registre-se para continuar..."}),I.jsxs("div",{className:"links",children:[I.jsx($n,{to:"/signin",children:"Sign in"}),I.jsx($n,{to:"/signup",children:"Sign up"})]})]}),I.jsx("div",{children:I.jsx("img",{src:sM,alt:""})})]})}function lM(){return I.jsx(I.Fragment,{children:I.jsx(aM,{})})}const ET=wr.div`
    width: 100vw;
    background-color: ${t=>t.theme==="light"?"white":"#0A0A0A"};
    color: ${t=>t.theme==="light"?"black":"white"};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .Divform{
        width: 30%;
    }

    .Divform form{
        max-width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
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
        font-size: 16px;
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

    

    .img img{
        transition: ease .5s;
        width: 400px;
    }

   
`,uM="/app_coordinates/assets/login-3e19d223.svg";function cM(t){const[e,n]=x.useState(),[r,i]=x.useState(),{signIn:s,loadingAuth:o}=x.useContext(ph),a=Va();async function l(c){c.preventDefault(),e!==""&&r!==""&&await s(e,r).then(h=>{a("/home")})}const{theme:u}=x.useContext(qs);return I.jsxs(ET,{theme:u,children:[I.jsx("div",{className:"Divform",children:I.jsxs("form",{onSubmit:l,children:[I.jsx("h1",{children:"Sign in"}),I.jsxs("div",{children:[I.jsx("label",{children:"Email"}),I.jsx("input",{type:"email",required:"",onChange:c=>n(c.target.value)})]}),I.jsxs("div",{children:[I.jsx("label",{children:"Password"}),I.jsx("input",{type:"password",name:"",id:"",required:"",onChange:c=>i(c.target.value)})]}),I.jsx("button",{type:"submit",children:o===!0?"Loading...":"Sign in"}),I.jsxs("p",{children:["Ou ",I.jsx($n,{to:"/signup",children:"cadastre-se"})]})]})}),I.jsx("div",{className:"img",children:I.jsx("img",{src:uM,alt:""})})]})}const hM="/app_coordinates/assets/signup-89f45dbd.svg";function dM(){const[t,e]=x.useState(""),[n,r]=x.useState(""),[i,s]=x.useState(""),[o,a]=x.useState(""),{signUp:l,loadingAuth:u}=x.useContext(ph),c=Va();async function h(g){g.preventDefault(),t!==""&&n!==""&&i!==""&&o!==""&&i===o&&await l(t,n,i).then(v=>{c("/home")})}const{theme:d}=x.useContext(qs);return I.jsxs(ET,{theme:d,children:[I.jsx("div",{className:"Divform",children:I.jsxs("form",{onSubmit:h,children:[I.jsx("h1",{children:"Sign Up"}),I.jsxs("div",{children:[I.jsx("label",{children:"Nome"}),I.jsx("input",{type:"text",onChange:g=>e(g.target.value)})]}),I.jsxs("div",{children:[I.jsx("label",{children:"Email"}),I.jsx("input",{type:"text",onChange:g=>r(g.target.value)})]}),I.jsxs("div",{children:[I.jsx("label",{children:"Password"}),I.jsx("input",{type:"password",name:"",id:"",onChange:g=>s(g.target.value)})]}),I.jsxs("div",{children:[I.jsx("label",{children:"Confirm password"}),I.jsx("input",{type:"password",name:"",id:"",onChange:g=>a(g.target.value)})]}),I.jsx("button",{type:"submit",children:u===!0?"Loading...":"Sign up"}),I.jsxs("p",{children:["Já possui uma conta? ",I.jsx($n,{to:"/signin",children:"Login"})]})]})}),I.jsx("div",{className:"img",children:I.jsx("img",{src:hM,alt:""})})]})}wr.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;function fM({children:t}){return localStorage.getItem("@userStorage","logado")?t:I.jsx(oR,{to:"/"})}const pM=pR([{path:"/",element:I.jsx(lM,{})},{path:"/signin",element:I.jsx(cM,{})},{path:"/signup",element:I.jsx(dM,{})},{path:"/home",element:I.jsx(fM,{children:I.jsx(q$,{})}),children:[{path:"/home",element:I.jsx(tM,{})},{path:"/home/coordinates",element:I.jsx(iM,{})}]}],{basename:"/app_coordinates"});vd.createRoot(document.getElementById("root")).render(I.jsx(zs.StrictMode,{children:I.jsx(ER,{children:I.jsx(H$,{children:I.jsx(iR,{router:pM})})})}));
