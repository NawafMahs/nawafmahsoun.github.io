import{r as E,j as w,b as yt}from"./jsx-runtime-e9svsKL-.js";import{c as W,a as Ve,T as z,m as J,I as Be,t as R,H as ve,n as Ee,B as xe,b as wt}from"./heading-CC3zBnSN.js";import{D as bt}from"./decoder-text-BtVp3XXn.js";import{D as _t}from"./divider-CvNaYF5j.js";import{S as St,F as vt,b as Et}from"./meta-1DdlTqBX.js";import{z as $,A as xt,B as he,C as Rt,D as Ct,F as jt,G as kt,H as Je,E as Xe,m as Tt,I as Ot,U as oe,J as At,K as $t,w as Dt,N as Pt}from"./components-DYXJCFuo.js";import"./visually-hidden-DWETt_x6.js";import"./use-spring-C3qV9qVq.js";import"./index-CmfjIxA9.js";import"./config-B1ThRYLq.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Nt=Vt,It=Bt,Mt=Object.prototype.toString,Ft=Object.prototype.hasOwnProperty,Ht=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,Ut=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,Lt=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,zt=/^[\u0020-\u003A\u003D-\u007E]*$/;function Vt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");var r={},n=e.length;if(n<2)return r;var a=t&&t.decode||Jt,s=0,o=0,i=0;do{if(o=e.indexOf("=",s),o===-1)break;if(i=e.indexOf(";",s),i===-1)i=n;else if(o>i){s=e.lastIndexOf(";",o-1)+1;continue}var l=Re(e,s,o),u=Ce(e,o,l),c=e.slice(l,u);if(!Ft.call(r,c)){var d=Re(e,o+1,i),f=Ce(e,i,d);e.charCodeAt(d)===34&&e.charCodeAt(f-1)===34&&(d++,f--);var p=e.slice(d,f);r[c]=Yt(p,a)}s=i+1}while(s<n);return r}function Re(e,t,r){do{var n=e.charCodeAt(t);if(n!==32&&n!==9)return t}while(++t<r);return r}function Ce(e,t,r){for(;t>r;){var n=e.charCodeAt(--t);if(n!==32&&n!==9)return t+1}return r}function Bt(e,t,r){var n=r&&r.encode||encodeURIComponent;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!Ht.test(e))throw new TypeError("argument name is invalid");var a=n(t);if(!Ut.test(a))throw new TypeError("argument val is invalid");var s=e+"="+a;if(!r)return s;if(r.maxAge!=null){var o=Math.floor(r.maxAge);if(!isFinite(o))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+o}if(r.domain){if(!Lt.test(r.domain))throw new TypeError("option domain is invalid");s+="; Domain="+r.domain}if(r.path){if(!zt.test(r.path))throw new TypeError("option path is invalid");s+="; Path="+r.path}if(r.expires){var i=r.expires;if(!Xt(i)||isNaN(i.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+i.toUTCString()}if(r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.partitioned&&(s+="; Partitioned"),r.priority){var l=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(l){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var u=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(u){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function Jt(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Xt(e){return Mt.call(e)==="[object Date]"}function Yt(e,t){try{return t(e)}catch{return e}}function K(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(r,n)=>t.charCodeAt(n))}function qt(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function X(...e){const t=new Uint8Array(e.reduce((n,a)=>n+a.length,0));let r=0;for(const n of e)t.set(n,r),r+=n.length;return t}function Gt(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function je(e){return e instanceof Uint8Array?t=>e[t]:e}function ae(e,t,r,n,a){const s=je(e),o=je(r);for(let i=0;i<a;++i)if(s(t+i)!==o(n+i))return!1;return!0}function Wt(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let r=0;r<e.length-1;r++)t[e[r]]=e.length-1-r;return t}const k=Symbol("Match");class me{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=K(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=Wt(t)}feed(t){let r=0,n;const a=[];for(;r!==t.length;)[r,...n]=this._feed(t,r),a.push(...n);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,r){const n=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const s=this._charAt(t,a+this._needle.length-1);if(s===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&n.push(this._lookbehind.slice(0,this._lookbehind.length+a)),n.push(k),this._lookbehind=new Uint8Array,[a+this._needle.length,...n];a+=this._occ[s]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)n.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const s=this._lookbehind.length+a;return s>0&&(n.push(this._lookbehind.slice(0,s)),this._lookbehind=this._lookbehind.slice(s)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(o,i)=>this._charAt(t,i-this._lookbehind.length)),[t.length,...n]}}for(a+=r;a<=t.length-this._needle.length;){const s=t[a+this._needle.length-1];if(s===this._lastChar&&t[a]===this._needle[0]&&ae(this._needle,0,t,a,this._needle.length-1))return a>r&&n.push(t.slice(r,a)),n.push(k),[a+this._needle.length,...n];a+=this._occ[s]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!ae(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&n.push(t.slice(r,a<t.length?a:t.length)),[t.length,...n]}_charAt(t,r){return r<0?this._lookbehind[this._lookbehind.length+r]:t[r]}_memcmp(t,r,n){return ae(this._charAt.bind(this,t),r,this._needle,0,n)}}class Kt{constructor(t,r){this._readableStream=r,this._search=new me(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const n=await t.read();if(n.done)break;yield*this._search.feed(n.value)}const r=this._search.end();r.length&&(yield r)}finally{t.releaseLock()}}}const Zt=Function.prototype.apply.bind(X,void 0),Ye=K("--"),M=K(`\r
`);function Qt(e){const t=e.split(";").map(n=>n.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const r={};for(const n of t){const a=n.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+n+" in `"+e+"`");const[s,o]=a;if(o[0]==='"'&&o[o.length-1]==='"')r[s]=o.slice(1,-1).replace(/\\"/g,'"');else if(o[0]!=='"'&&o[o.length-1]!=='"')r[s]=o;else if(o[0]==='"'&&o[o.length-1]!=='"'||o[0]!=='"'&&o[o.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!r.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return r}function er(e){const t=[];let r=!1,n;for(;typeof(n=e.shift())<"u";){const a=n.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const s=n.slice(0,a).trim().toLowerCase(),o=n.slice(a+1).trim();switch(s){case"content-disposition":r=!0,t.push(...Object.entries(Qt(o)));break;case"content-type":t.push(["contentType",o])}}if(!r)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function tr(e,t){let r=!0,n=!1;const a=[[]],s=new me(M);for(;;){const o=await e.next();if(o.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(r&&o.value!==k&&Gt(o.value.slice(0,2),Ye))return[void 0,new Uint8Array];let i;if(o.value!==k)i=o.value;else if(!n)i=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!i.length)continue;r&&(r=!1);const l=s.feed(i);for(const[u,c]of l.entries()){const d=c===k;if(!(!d&&!c.length)){if(n&&d)return l.push(s.end()),[a.filter(f=>f.length).map(Zt).map(qt),X(...l.slice(u+1).map(f=>f===k?M:f))];(n=d)?a.push([]):a[a.length-1].push(c)}}}}async function*rr(e,t){const r=X(Ye,K(t)),n=new Kt(r,e)[Symbol.asyncIterator]();for(;;){const s=await n.next();if(s.done)return;if(s.value===k)break}const a=new me(M);for(;;){let u=function(p){const m=[];for(const h of a.feed(p))l&&m.push(M),(l=h===k)||m.push(h);return X(...m)};const[s,o]=await tr(n,r);if(!s)return;async function i(){const p=await n.next();if(p.done)throw new Error("malformed multipart-form data: unexpected end of stream");return p}let l=!1,c=!1;async function d(){const p=await i();let m;if(p.value!==k)m=p.value;else if(!l)m=M;else return c=!0,{value:a.end()};return{value:u(m)}}const f=[{value:u(o)}];for(yield{...er(s),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const p=f.shift();if(!p)break;if(p.value.length>0)return p}for(;;){if(c)return{done:c,value:void 0};const p=await d();if(p.value.length>0)return p}}}};!c;)f.push(await d())}}var Z={exports:{}},P={decodeValues:!0,map:!1,silent:!1};function le(e){return typeof e=="string"&&!!e.trim()}function ue(e,t){var r=e.split(";").filter(le),n=r.shift(),a=nr(n),s=a.name,o=a.value;t=t?Object.assign({},P,t):P;try{o=t.decodeValues?decodeURIComponent(o):o}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+o+"'. Set options.decodeValues to false to disable this feature.",l)}var i={name:s,value:o};return r.forEach(function(l){var u=l.split("="),c=u.shift().trimLeft().toLowerCase(),d=u.join("=");c==="expires"?i.expires=new Date(d):c==="max-age"?i.maxAge=parseInt(d,10):c==="secure"?i.secure=!0:c==="httponly"?i.httpOnly=!0:c==="samesite"?i.sameSite=d:i[c]=d}),i}function nr(e){var t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}function qe(e,t){if(t=t?Object.assign({},P,t):P,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(a){return a.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},P,t):P,t.map){var n={};return e.filter(le).reduce(function(a,s){var o=ue(s,t);return a[o.name]=o,a},n)}else return e.filter(le).map(function(a){return ue(a,t)})}function ar(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,n,a,s,o,i;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function u(){return a=e.charAt(r),a!=="="&&a!==";"&&a!==","}for(;r<e.length;){for(n=r,i=!1;l();)if(a=e.charAt(r),a===","){for(s=r,r+=1,l(),o=r;r<e.length&&u();)r+=1;r<e.length&&e.charAt(r)==="="?(i=!0,r=o,t.push(e.substring(n,s)),n=r):r=s+1}else r+=1;(!i||r>=e.length)&&t.push(e.substring(n,e.length))}return t}Z.exports=qe;Z.exports.parse=qe;Z.exports.parseString=ue;var sr=Z.exports.splitCookiesString=ar;function ke(e=""){const[t,r]=E.useState(e),[n,a]=E.useState(),[s,o]=E.useState(!1);return{value:t,error:n,onChange:c=>{r(c.target.value),o(!0),n&&c.target.checkValidity()&&a(null)},onBlur:c=>{s&&c.target.checkValidity()},onInvalid:c=>{c.preventDefault(),a(c.target.validationMessage)}}}const ir="_textarea_13d9g_3",or={textarea:ir},lr=({className:e,resize:t="none",value:r,onChange:n,minRows:a=1,maxRows:s,...o})=>{const[i,l]=E.useState(a),[u,c]=E.useState(),d=E.useRef();E.useEffect(()=>{const p=getComputedStyle(d.current),m=parseInt(p.lineHeight,10),h=parseInt(p.paddingTop,10)+parseInt(p.paddingBottom,10);c({lineHeight:m,paddingHeight:h})},[]);const f=p=>{n(p);const{lineHeight:m,paddingHeight:h}=u,y=p.target.rows;p.target.rows=a;const b=~~((p.target.scrollHeight-h)/m);b===y&&(p.target.rows=b),s&&b>=s&&(p.target.rows=s,p.target.scrollTop=p.target.scrollHeight),l(s&&b>s?s:b)};return w.jsx("textarea",{className:Ve(or.textarea,e),ref:d,onChange:f,style:W({resize:t}),rows:i,value:r,...o})},ur="_container_17spy_3",cr="_content_17spy_31",dr="_input_17spy_41",fr="_underline_17spy_109",hr="_label_17spy_145",mr="_error_17spy_189",pr="_errorMessage_17spy_221",T={container:ur,content:cr,input:dr,underline:fr,label:hr,error:mr,errorMessage:pr},se=({id:e,label:t,value:r,multiline:n,className:a,style:s,error:o,onBlur:i,autoComplete:l,required:u,maxLength:c,type:d,onChange:f,name:p,...m})=>{const[h,y]=E.useState(!1),b=E.useId(),g=E.useRef(),S=e||`${b}input`,x=`${S}-label`,I=`${S}-error`,mt=n?lr:"input",pt=L=>{y(!1),i&&i(L)};return w.jsxs("div",{className:Ve(T.container,a),"data-error":!!o,style:s,...m,children:[w.jsxs("div",{className:T.content,children:[w.jsx("label",{className:T.label,"data-focused":h,"data-filled":!!r,id:x,htmlFor:S,children:t}),w.jsx(mt,{className:T.input,id:S,"aria-labelledby":x,"aria-describedby":o?I:void 0,onFocus:()=>y(!0),onBlur:pt,value:r,onChange:f,autoComplete:l,required:u,maxLength:c,type:d,name:p}),w.jsx("div",{className:T.underline,"data-focused":h})]}),w.jsx(z,{unmount:!0,in:o,timeout:J(R.base.durationM),children:({visible:L,nodeRef:gt})=>{var Se;return w.jsx("div",{ref:gt,className:T.error,"data-visible":L,id:I,role:"alert",style:W({height:L?(Se=g.current)==null?void 0:Se.getBoundingClientRect().height:0}),children:w.jsxs("div",{className:T.errorMessage,ref:g,children:[w.jsx(Be,{icon:"error"}),o]})})}})]})};var gr={},pe={},D={};/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Te={};function Ge(e,t){!e&&!Te[t]&&(Te[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yr=({sign:e,unsign:t})=>(r,n={})=>{let{secrets:a=[],...s}={path:"/",sameSite:"lax",...n};return Er(r,s.expires),{get name(){return r},get isSigned(){return a.length>0},get expires(){return typeof s.maxAge<"u"?new Date(Date.now()+s.maxAge*1e3):s.expires},async parse(o,i){if(!o)return null;let l=Nt(o,{...s,...i});return r in l?l[r]===""?"":await br(t,l[r],a):null},async serialize(o,i){return It(r,o===""?"":await wr(e,o,a),{...s,...i})}}},ge=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function wr(e,t,r){let n=_r(t);return r.length>0&&(n=await e(n,r[0])),n}async function br(e,t,r){if(r.length>0){for(let n of r){let a=await e(t,n);if(a!==!1)return Oe(a)}return null}return Oe(t)}function _r(e){return btoa(vr(encodeURIComponent(JSON.stringify(e))))}function Oe(e){try{return JSON.parse(decodeURIComponent(Sr(atob(e))))}catch{return{}}}function Sr(e){let t=e.toString(),r="",n=0,a,s;for(;n<t.length;)a=t.charAt(n++),/[\w*+\-./@]/.exec(a)?r+=a:(s=a.charCodeAt(0),s<256?r+="%"+Ae(s,2):r+="%u"+Ae(s,4).toUpperCase());return r}function Ae(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function vr(e){let t=e.toString(),r="",n=0,a,s;for(;n<t.length;){if(a=t.charAt(n++),a==="%"){if(t.charAt(n)==="u"){if(s=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(s)){r+=String.fromCharCode(parseInt(s,16)),n+=5;continue}}else if(s=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(s)){r+=String.fromCharCode(parseInt(s,16)),n+=2;continue}}r+=a}return r}function Er(e,t){Ge(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xr(...e){return async t=>{for(let r of e){let n=await r(t);if(typeof n<"u"&&n!==null)return n}}}async function Rr(e,t){let r=e.headers.get("Content-Type")||"",[n,a]=r.split(/\s*;\s*boundary=/);if(!e.body||!a||n!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let s=new FormData,o=rr(e.body,a);for await(let i of o){if(i.done)break;typeof i.filename=="string"&&(i.filename=i.filename.split(/[/\\]/).pop());let l=await t(i);typeof l<"u"&&l!==null&&s.append(i.name,l)}return s}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let C=function(e){return e.Development="development",e.Production="production",e.Test="test",e}({});function Cr(e){return e===C.Development||e===C.Production||e===C.Test}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Q(e,t){if(e instanceof Error&&t!==C.Development){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function Y(e,t){return Object.entries(e).reduce((r,[n,a])=>Object.assign(r,{[n]:Q(a,t)}),{})}function ee(e,t){let r=Q(e,t);return{message:r.message,stack:r.stack}}function $e(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[a,s]of r)if($(s))n[a]={...s,__type:"RouteErrorResponse"};else if(s instanceof Error){let o=Q(s,t);n[a]={message:o.message,stack:o.stack,__type:"Error",...o.name!=="Error"?{__subType:o.name}:{}}}else n[a]=s;return n}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U=(e,t={})=>he(e,t),jr=(e,t={})=>xt(e,t),We=(e,t=302)=>Rt(e,t),kr=(e,t=302)=>jt(e,t),Tr=(e,t=302)=>Ct(e,t);function Or(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function j(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}const Ar=new Set([301,302,303,307,308]);function te(e){return Ar.has(e)}function ce(e){return te(e.status)}function $r(e){return e!=null&&typeof e.then=="function"&&e._tracked===!0}const Dr="__deferred_promise:";function Pr(e,t,r){let n=new TextEncoder;return new ReadableStream({async start(s){let o={},i=[];for(let[u,c]of Object.entries(e.data))$r(c)?(o[u]=`${Dr}${u}`,(typeof c._data<"u"||typeof c._error<"u")&&i.push(u)):o[u]=c;s.enqueue(n.encode(JSON.stringify(o)+`

`));for(let u of i)De(s,n,u,e.data[u],r);let l=e.subscribe((u,c)=>{c&&De(s,n,c,e.data[c],r)});await e.resolveData(t),l(),s.close()}})}function De(e,t,r,n,a){"_error"in n?e.enqueue(t.encode("error:"+JSON.stringify({[r]:n._error instanceof Error?ee(n._error,a):n._error})+`

`)):e.enqueue(t.encode("data:"+JSON.stringify({[r]:n._data??null})+`

`))}var Nr=-1,Ir=-2,Mr=-3,Fr=-4,Ke=-5,Hr=-6,Ur=-7,Lr="B",zr="D",V="E",Pe="M",Vr="N",B="P",Br="R",Ne="S",Jr="Y",Xr="U",Ie="Z";function v(e){const{indices:t}=this,r=t.get(e);if(r)return[r];if(e===void 0)return Ur;if(e===null)return Ke;if(Number.isNaN(e))return Ir;if(e===Number.POSITIVE_INFINITY)return Hr;if(e===Number.NEGATIVE_INFINITY)return Mr;if(e===0&&1/e<0)return Fr;const n=this.index++;return t.set(e,n),Yr.call(this,e,n),n}function Yr(e,t){const{deferred:r,plugins:n,postPlugins:a}=this,s=this.stringified,o=[[e,t]];for(;o.length>0;){const[i,l]=o.pop(),u=d=>Object.keys(d).map(f=>`"_${v.call(this,f)}":${v.call(this,d[f])}`).join(",");let c=null;switch(typeof i){case"boolean":case"number":case"string":s[l]=JSON.stringify(i);break;case"bigint":s[l]=`["${Lr}","${i}"]`;break;case"symbol":{const d=Symbol.keyFor(i);d?s[l]=`["${Jr}",${JSON.stringify(d)}]`:c=new Error("Cannot encode symbol unless created with Symbol.for()");break}case"object":{if(!i){s[l]=`${Ke}`;break}const d=Array.isArray(i);let f=!1;if(!d&&n)for(const p of n){const m=p(i);if(Array.isArray(m)){f=!0;const[h,...y]=m;s[l]=`[${JSON.stringify(h)}`,y.length>0&&(s[l]+=`,${y.map(b=>v.call(this,b)).join(",")}`),s[l]+="]";break}}if(!f){let p=d?"[":"{";if(d){for(let m=0;m<i.length;m++)p+=(m?",":"")+(m in i?v.call(this,i[m]):Nr);s[l]=`${p}]`}else i instanceof Date?s[l]=`["${zr}",${i.getTime()}]`:i instanceof URL?s[l]=`["${Xr}",${JSON.stringify(i.href)}]`:i instanceof RegExp?s[l]=`["${Br}",${JSON.stringify(i.source)},${JSON.stringify(i.flags)}]`:i instanceof Set?i.size>0?s[l]=`["${Ne}",${[...i].map(m=>v.call(this,m)).join(",")}]`:s[l]=`["${Ne}"]`:i instanceof Map?i.size>0?s[l]=`["${Pe}",${[...i].flatMap(([m,h])=>[v.call(this,m),v.call(this,h)]).join(",")}]`:s[l]=`["${Pe}"]`:i instanceof Promise?(s[l]=`["${B}",${l}]`,r[l]=i):i instanceof Error?(s[l]=`["${V}",${JSON.stringify(i.message)}`,i.name!=="Error"&&(s[l]+=`,${JSON.stringify(i.name)}`),s[l]+="]"):Object.getPrototypeOf(i)===null?s[l]=`["${Vr}",{${u(i)}}]`:Gr(i)?s[l]=`{${u(i)}}`:c=new Error("Cannot encode object with prototype")}break}default:{const d=Array.isArray(i);let f=!1;if(!d&&n)for(const p of n){const m=p(i);if(Array.isArray(m)){f=!0;const[h,...y]=m;s[l]=`[${JSON.stringify(h)}`,y.length>0&&(s[l]+=`,${y.map(b=>v.call(this,b)).join(",")}`),s[l]+="]";break}}f||(c=new Error("Cannot encode function or unexpected type"))}}if(c){let d=!1;if(a)for(const f of a){const p=f(i);if(Array.isArray(p)){d=!0;const[m,...h]=p;s[l]=`[${JSON.stringify(m)}`,h.length>0&&(s[l]+=`,${h.map(y=>v.call(this,y)).join(",")}`),s[l]+="]";break}}if(!d)throw c}}}var qr=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gr(e){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===qr}function Wr(e,t){const{plugins:r,postPlugins:n,signal:a}=t??{},s={deferred:{},index:0,indices:new Map,stringified:[],plugins:r,postPlugins:n,signal:a},o=new TextEncoder;let i=0;return new ReadableStream({async start(u){const c=v.call(s,e);if(Array.isArray(c))throw new Error("This should never happen");c<0?u.enqueue(o.encode(`${c}
`)):(u.enqueue(o.encode(`[${s.stringified.join(",")}]
`)),i=s.stringified.length-1);const d=new WeakSet;if(Object.keys(s.deferred).length){let f;const p=new Promise((m,h)=>{if(f=m,a){const y=()=>h(a.reason||new Error("Signal was aborted."));a.aborted?y():a.addEventListener("abort",b=>{y()})}});for(;Object.keys(s.deferred).length>0;){for(const[m,h]of Object.entries(s.deferred))d.has(h)||d.add(s.deferred[Number(m)]=Promise.race([p,h]).then(y=>{const b=v.call(s,y);if(Array.isArray(b))u.enqueue(o.encode(`${B}${m}:[["${Ie}",${b[0]}]]
`)),s.index++,i++;else if(b<0)u.enqueue(o.encode(`${B}${m}:${b}
`));else{const g=s.stringified.slice(i+1).join(",");u.enqueue(o.encode(`${B}${m}:[${g}]
`)),i=s.stringified.length-1}},y=>{(!y||typeof y!="object"||!(y instanceof Error))&&(y=new Error("An unknown error occurred"));const b=v.call(s,y);if(Array.isArray(b))u.enqueue(o.encode(`${V}${m}:[["${Ie}",${b[0]}]]
`)),s.index++,i++;else if(b<0)u.enqueue(o.encode(`${V}${m}:${b}
`));else{const g=s.stringified.slice(i+1).join(",");u.enqueue(o.encode(`${V}${m}:[${g}]
`)),i=s.stringified.length-1}}).finally(()=>{delete s.deferred[Number(m)]}));await Promise.race(Object.values(s.deferred))}f()}await Promise.all(Object.values(s.deferred)),u.close()}})}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ye(e,t){let r=t.errors?t.matches.findIndex(s=>t.errors[s.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,a;if(r>=0){let{actionHeaders:s,actionData:o,loaderHeaders:i,loaderData:l}=t;t.matches.slice(r).some(u=>{let c=u.route.id;return s[c]&&(!o||o[c]===void 0)?a=s[c]:i[c]&&l[c]===void 0&&(a=i[c]),a!=null})}return n.reduce((s,o,i)=>{let{id:l}=o.route,u=e.routes[l].module,c=t.loaderHeaders[l]||new Headers,d=t.actionHeaders[l]||new Headers,f=a!=null&&i===n.length-1,p=f&&a!==c&&a!==d;if(u.headers==null){let h=new Headers(s);return p&&O(a,h),O(d,h),O(c,h),h}let m=new Headers(u.headers?typeof u.headers=="function"?u.headers({loaderHeaders:c,parentHeaders:s,actionHeaders:d,errorHeaders:f?a:void 0}):u.headers:void 0);return p&&O(a,m),O(d,m),O(c,m),O(s,m),m},new Headers)}function O(e,t){let r=e.get("Set-Cookie");if(r){var n;let a=sr(r),s=new Set((n=t.getSetCookie)===null||n===void 0?void 0:n.call(t));a.forEach(o=>{s.has(o)||t.append("Set-Cookie",o)})}}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const N=Symbol("SingleFetchRedirect"),F=202;function Ze({isActionDataRequest:e,loadRouteIds:t}={}){return async({request:r,matches:n})=>{if(e&&r.method==="GET")return{};let a=t?n.filter(o=>t.includes(o.route.id)):n;return(await Promise.all(a.map(o=>o.resolve()))).reduce((o,i,l)=>Object.assign(o,{[a[l].route.id]:i}),{})}}async function Kr(e,t,r,n,a,s,o){try{let i=new Request(a,{method:n.method,body:n.body,headers:n.headers,signal:n.signal,...n.body?{duplex:"half"}:void 0}),l=await r.query(i,{requestContext:s,skipLoaderErrorBubbling:!0,dataStrategy:Ze({isActionDataRequest:!0})});if(j(l))return{result:H(l.status,l.headers,e.basename),headers:l.headers,status:F};let u=l,c=ye(e,u);if(te(u.statusCode)&&c.has("Location"))return{result:H(u.statusCode,c,e.basename),headers:c,status:F};u.errors&&(Object.values(u.errors).forEach(f=>{(!$(f)||f.error)&&o(f)}),u.errors=Y(u.errors,t));let d;return u.errors?d={error:Object.values(u.errors)[0]}:d={data:Object.values(u.actionData||{})[0]},{result:d,headers:c,status:u.statusCode}}catch(i){return o(i),{result:{error:i},headers:new Headers,status:500}}}async function Zr(e,t,r,n,a,s,o){try{var i;let l=new Request(a,{headers:n.headers,signal:n.signal}),u=((i=new URL(n.url).searchParams.get("_routes"))===null||i===void 0?void 0:i.split(","))||void 0,c=await r.query(l,{requestContext:s,skipLoaderErrorBubbling:!0,dataStrategy:Ze({loadRouteIds:u})});if(j(c))return{result:{[N]:H(c.status,c.headers,e.basename)},headers:c.headers,status:F};let d=c,f=ye(e,d);if(te(d.statusCode)&&f.has("Location"))return{result:{[N]:H(d.statusCode,f,e.basename)},headers:f,status:F};d.errors&&(Object.values(d.errors).forEach(h=>{(!$(h)||h.error)&&o(h)}),d.errors=Y(d.errors,t));let p={};return(u?d.matches.filter(h=>h.route.loader&&u.includes(h.route.id)):d.matches).forEach(h=>{var y,b;let g=(y=d.loaderData)===null||y===void 0?void 0:y[h.route.id],S=(b=d.errors)===null||b===void 0?void 0:b[h.route.id];S!==void 0?p[h.route.id]={error:S}:g!==void 0&&(p[h.route.id]={data:g})}),{result:p,headers:f,status:d.statusCode}}catch(l){return o(l),{result:{root:{error:l}},headers:new Headers,status:500}}}function H(e,t,r){let n=t.get("Location");return r&&(n=Je(n,r)||n),{redirect:n,status:e,revalidate:t.has("X-Remix-Revalidate")||t.has("Set-Cookie"),reload:t.has("X-Remix-Reload-Document"),replace:t.has("X-Remix-Replace")}}function q(e,t,r,n){let a=new AbortController,s=setTimeout(()=>a.abort(new Error("Server Timeout")),typeof r=="number"?r:4950);return t.addEventListener("abort",()=>clearTimeout(s)),Wr(e,{signal:a.signal,plugins:[o=>{if(o instanceof Error){let{name:i,message:l,stack:u}=n===C.Production?Q(o,n):o;return["SanitizedError",i,l,u]}if(o instanceof Xe){let{data:i,status:l,statusText:u}=o;return["ErrorResponse",i,l,u]}if(o&&typeof o=="object"&&N in o)return["SingleFetchRedirect",o[N]]}],postPlugins:[o=>{if(o&&typeof o=="object")return["SingleFetchClassInstance",Object.fromEntries(Object.entries(o))]},()=>["SingleFetchFallback"]]})}function Qr(e,t){return kt(e,t)}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function en(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Me(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(e,t,r){let n=Tt(e,t,r);return n?n.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function tn({loadContext:e,action:t,params:r,request:n,routeId:a,singleFetch:s}){let o=await t({request:s?et(G(n)):Qe(G(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return s||j(o)?o:U(o)}async function rn({loadContext:e,loader:t,params:r,request:n,routeId:a,singleFetch:s}){let o=await t({request:s?et(G(n)):Qe(G(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return Or(o)?o.init&&te(o.init.status||200)?We(new Headers(o.init.headers).get("Location"),o.init):o:s||j(o)?o:U(o)}function G(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let s of r)s&&n.push(s);for(let s of n)t.searchParams.append("index",s);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function Qe(e){let t=new URL(e.url);t.searchParams.delete("_data");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}function et(e){let t=new URL(e.url);t.searchParams.delete("_routes");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tt(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function rt(e,t="",r=tt(e)){return(r[t]||[]).map(n=>({...n,children:rt(e,n.id,r)}))}function nt(e,t,r="",n=tt(e)){return(n[r]||[]).map(a=>{let s={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?(o,i)=>rn({request:o.request,params:o.params,loadContext:o.context,loader:a.module.loader,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,action:a.module.action?(o,i)=>tn({request:o.request,params:o.params,loadContext:o.context,action:a.module.action,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,handle:a.module.handle};return a.index?{index:!0,...s}:{caseSensitive:a.caseSensitive,children:nt(e,t,a.id,n),...s}})}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const nn={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},an=/[&><\u2028\u2029]/g;function sn(e){return e.replace(an,t=>nn[t])}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(e){return sn(JSON.stringify(e))}var on={};/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function ln(e,t){if(t??(t=on.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let r=new URL(t);r.pathname="ping";let n=await fetch(r.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${r}`),a});if(!n.ok)throw console.error(`Could not reach Remix dev server at ${r} (${n.status})`),Error(await n.text())}function un(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const at="__remix_devServerHooks";function cn(e){globalThis[at]=e}function He(){return globalThis[at]}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dn(e,t){return`⚠️ REMIX FUTURE CHANGE: Externally-accessed resource routes will no longer be able to return raw JavaScript objects or \`null\` in React Router v7 when Single Fetch becomes the default. You can prepare for this change at your convenience by wrapping the data returned from your \`${e}\` function in the \`${t}\` route with \`json()\`.  For instructions on making this change, see https://remix.run/docs/en/v2.13.1/guides/single-fetch#resource-routes`}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const st=new Set([100,101,204,205,304]);function Ue(e,t){var r,n;let a=rt(e.routes),s=nt(e.routes,e.future),o=Cr(t)?t:C.Production,i=Ot(s,{basename:e.basename,future:{v7_relativeSplatPath:((r=e.future)===null||r===void 0?void 0:r.v3_relativeSplatPath)===!0,v7_throwAbortReason:((n=e.future)===null||n===void 0?void 0:n.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((u,{request:c})=>{o!==C.Test&&!c.signal.aborted&&console.error($(u)&&u.error?u.error:u)});return{routes:a,dataRoutes:s,serverMode:o,staticHandler:i,errorHandler:l}}const fn=(e,t)=>{let r,n,a,s,o;return async function(l,u={}){if(r=typeof e=="function"?await e():e,t??(t=r.mode),typeof e=="function"){let g=Ue(r,t);n=g.routes,a=g.serverMode,s=g.staticHandler,o=g.errorHandler}else if(!n||!a||!s||!o){let g=Ue(r,t);n=g.routes,a=g.serverMode,s=g.staticHandler,o=g.errorHandler}let c=new URL(l.url),d={},f=g=>{if(t===C.Development){var S,x;(S=He())===null||S===void 0||(x=S.processRequestError)===null||x===void 0||x.call(S,g)}o(g,{context:u,params:d,request:l})},p=`${r.basename??"/"}/__manifest`.replace(/\/+/g,"/");if(c.pathname===p)try{return await hn(r,n,c)}catch(g){return f(g),new Response("Unknown Server Error",{status:500})}let m=de(n,c.pathname,r.basename);m&&m.length>0&&Object.assign(d,m[0].params);let h;if(c.searchParams.has("_data")){r.future.v3_singleFetch&&f(new Error("Warning: Single fetch-enabled apps should not be making ?_data requests, this is likely to break in the future"));let g=c.searchParams.get("_data");h=await mn(a,r,s,g,l,u,f),r.entry.module.handleDataRequest&&(h=await r.entry.module.handleDataRequest(h,{context:u,params:d,request:l}),ce(h)&&(h=lt(h,r.basename)))}else if(r.future.v3_singleFetch&&c.pathname.endsWith(".data")){let g=new URL(l.url);g.pathname=g.pathname.replace(/\.data$/,"").replace(/^\/_root$/,"/");let S=de(n,g.pathname,r.basename);if(h=await pn(a,r,s,l,g,u,f),r.entry.module.handleDataRequest&&(h=await r.entry.module.handleDataRequest(h,{context:u,params:S?S[0].params:{},request:l}),ce(h))){let x=H(h.status,h.headers,r.basename);l.method==="GET"&&(x={[N]:x});let I=new Headers(h.headers);return I.set("Content-Type","text/x-script"),new Response(q(x,l.signal,r.entry.module.streamTimeout,a),{status:F,headers:I})}}else if(m&&m[m.length-1].route.module.default==null&&m[m.length-1].route.module.ErrorBoundary==null)h=await yn(a,r,s,m.slice(-1)[0].route.id,l,u,f);else{var y,b;let g=t===C.Development?await((y=He())===null||y===void 0||(b=y.getCriticalCss)===null||b===void 0?void 0:b.call(y,r,c.pathname)):void 0;h=await gn(a,r,s,l,u,f,g)}return l.method==="HEAD"?new Response(null,{headers:h.headers,status:h.status,statusText:h.statusText}):h}};async function hn(e,t,r){if(e.assets.version!==r.searchParams.get("version"))return new Response(null,{status:204,headers:{"X-Remix-Reload-Document":"true"}});let n={};if(r.searchParams.has("p")){let a=new Set;r.searchParams.getAll("p").forEach(s=>{s.startsWith("/")||(s=`/${s}`);let o=s.split("/").slice(1);o.forEach((i,l)=>{let u=o.slice(0,l+1).join("/");a.add(`/${u}`)})});for(let s of a){let o=de(t,s,e.basename);if(o)for(let i of o){let l=i.route.id;n[l]=e.assets.routes[l]}}return U(n,{headers:{"Cache-Control":"public, max-age=31536000, immutable"}})}return new Response("Invalid Request",{status:400})}async function mn(e,t,r,n,a,s,o){try{let i=await r.queryRoute(a,{routeId:n,requestContext:s});if(ce(i))return lt(i,t.basename);if(oe in i){let l=i[oe],u=Pr(l,a.signal,e),c=l.init||{},d=new Headers(c.headers);return d.set("Content-Type","text/remix-deferred"),d.set("X-Remix-Response","yes"),c.headers=d,new Response(u,c)}return i=fe(i,"X-Remix-Response","yes"),i}catch(i){if(j(i))return fe(i,"X-Remix-Catch","yes");if($(i))return o(i),it(i,e);let l=i instanceof Error||i instanceof DOMException?i:new Error("Unexpected Server Error");return o(l),he(ee(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function pn(e,t,r,n,a,s,o){let{result:i,headers:l,status:u}=n.method!=="GET"?await Kr(t,e,r,n,a,s,o):await Zr(t,e,r,n,a,s,o),c=new Headers(l);return c.set("X-Remix-Response","yes"),st.has(u)?new Response(null,{status:u,headers:c}):(c.set("Content-Type","text/x-script"),new Response(q(i,n.signal,t.entry.module.streamTimeout,e),{status:u||200,headers:c}))}async function gn(e,t,r,n,a,s,o){let i;try{i=await r.query(n,{requestContext:a})}catch(f){return s(f),new Response(null,{status:500})}if(j(i))return i;let l=ye(t,i);if(st.has(i.statusCode))return new Response(null,{status:i.statusCode,headers:l});i.errors&&(Object.values(i.errors).forEach(f=>{(!$(f)||f.error)&&s(f)}),i.errors=Y(i.errors,e));let u={loaderData:i.loaderData,actionData:i.actionData,errors:$e(i.errors,e)},c={manifest:t.assets,routeModules:en(t.routes),staticHandlerContext:i,criticalCss:o,serverHandoffString:Fe({basename:t.basename,criticalCss:o,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:u}}),...t.future.v3_singleFetch?{serverHandoffStream:q(u,n.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null,future:t.future,isSpaMode:t.isSpaMode,serializeError:f=>ee(f,e)},d=t.entry.module.default;try{return await d(n,i.statusCode,l,c,a)}catch(f){s(f);let p=f;if(j(f))try{let h=await wn(f);p=new Xe(f.status,f.statusText,h)}catch{}i=At(r.dataRoutes,i,p),i.errors&&(i.errors=Y(i.errors,e));let m={loaderData:i.loaderData,actionData:i.actionData,errors:$e(i.errors,e)};c={...c,staticHandlerContext:i,serverHandoffString:Fe({basename:t.basename,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:m}}),...t.future.v3_singleFetch?{serverHandoffStream:q(m,n.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null};try{return await d(n,i.statusCode,l,c,a)}catch(h){return s(h),ot(h,e)}}}async function yn(e,t,r,n,a,s,o){try{let i=await r.queryRoute(a,{routeId:n,requestContext:s});return typeof i=="object"&&i!==null&&Me(!(oe in i),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${n}" route?`),t.future.v3_singleFetch&&!j(i)&&(console.warn(dn(a.method==="GET"?"loader":"action",n)),i=U(i)),Me(j(i),"Expected a Response to be returned from queryRoute"),i}catch(i){return j(i)?fe(i,"X-Remix-Catch","yes"):$(i)?(i&&o(i),it(i,e)):(o(i),ot(i,e))}}function it(e,t){return he(ee(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function ot(e,t){let r="Unexpected Server Error";return t!==C.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}function wn(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}function lt(e,t){let r=new Headers(e.headers),n=r.get("Location");return r.set("X-Remix-Redirect",t&&Je(n,t)||n),r.set("X-Remix-Status",String(e.status)),r.delete("Location"),e.headers.get("Set-Cookie")!==null&&r.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:r})}function fe(e,t,r){let n=new Headers(e.headers);return n.set(t,r),new Response(e.body,{status:e.status,statusText:e.statusText,headers:n,duplex:e.body?"half":void 0})}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ie(e){return`__flash_${e}__`}const we=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(ie(n))},get(n){if(r.has(n))return r.get(n);let a=ie(n);if(r.has(a)){let s=r.get(a);return r.delete(a),s}},set(n,a){r.set(n,a)},flash(n,a){r.set(ie(n),a)},unset(n){r.delete(n)}}},bn=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",_n=e=>({cookie:t,createData:r,readData:n,updateData:a,deleteData:s})=>{let o=ge(t)?t:e((t==null?void 0:t.name)||"__session",t);return ut(o),{async getSession(i,l){let u=i&&await o.parse(i,l),c=u&&await n(u);return we(c||{},u||"")},async commitSession(i,l){let{id:u,data:c}=i,d=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:o.expires;return u?await a(u,c,d):u=await r(c,d),o.serialize(u,l)},async destroySession(i,l){return await s(i.id),o.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function ut(e){Ge(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Sn=e=>({cookie:t}={})=>{let r=ge(t)?t:e((t==null?void 0:t.name)||"__session",t);return ut(r),{async getSession(n,a){return we(n&&await r.parse(n,a)||{})},async commitSession(n,a){let s=await r.serialize(n.data,a);if(s.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+s.length);return s},async destroySession(n,a){return r.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vn=e=>({cookie:t}={})=>{let r=new Map;return e({cookie:t,async createData(n,a){let s=Math.random().toString(36).substring(2,10);return r.set(s,{data:n,expires:a}),s},async readData(n){if(r.has(n)){let{data:a,expires:s}=r.get(n);if(!s||s>new Date)return a;s&&r.delete(n)}return null},async updateData(n,a,s){r.set(n,{data:a,expires:s})},async deleteData(n){r.delete(n)}})};/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class ct extends Error{constructor(t,r){super(`Field "${t}" exceeded upload size of ${r} bytes.`),this.field=t,this.maxBytes=r}}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function En({filter:e,maxPartSize:t=3e6}={}){return async({filename:r,contentType:n,name:a,data:s})=>{if(e&&!await e({filename:r,contentType:n,name:a}))return;let o=0,i=[];for await(let l of s){if(o+=l.byteLength,o>t)throw new ct(a,t);i.push(l)}return typeof r=="string"?new File(i,r,{type:n}):await new Blob(i,{type:n}).text()}}/**
 * @remix-run/server-runtime v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xn=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:ct,UNSAFE_SingleFetchRedirectSymbol:N,broadcastDevReady:ln,createCookieFactory:yr,createCookieSessionStorageFactory:Sn,createMemorySessionStorageFactory:vn,createRequestHandler:fn,createSession:we,createSessionStorageFactory:_n,data:Qr,defer:jr,isCookie:ge,isSession:bn,json:U,logDevReady:un,redirect:We,redirectDocument:Tr,replace:kr,unstable_composeUploadHandlers:xr,unstable_createMemoryUploadHandler:En,unstable_parseMultipartFormData:Rr,unstable_setDevServerHooks:cn},Symbol.toStringTag,{value:"Module"})),dt=yt(xn);var re={};/**
 * @remix-run/cloudflare v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(re,"__esModule",{value:!0});const be=new TextEncoder,Rn=async(e,t)=>{let r=await ft(t,["sign"]),n=be.encode(e),a=await crypto.subtle.sign("HMAC",r,n),s=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+s},Cn=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),a=e.slice(r+1),s=await ft(t,["verify"]),o=be.encode(n),i=jn(atob(a));return await crypto.subtle.verify("HMAC",s,i,o)?n:!1};async function ft(e,t){return await crypto.subtle.importKey("raw",be.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function jn(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}re.sign=Rn;re.unsign=Cn;/**
 * @remix-run/cloudflare v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(D,"__esModule",{value:!0});var ne=dt,Le=re;const _e=ne.createCookieFactory({sign:Le.sign,unsign:Le.unsign}),kn=ne.createCookieSessionStorageFactory(_e),ht=ne.createSessionStorageFactory(_e),Tn=ne.createMemorySessionStorageFactory(ht);D.createCookie=_e;D.createCookieSessionStorage=kn;D.createMemorySessionStorage=Tn;D.createSessionStorage=ht;/**
 * @remix-run/cloudflare v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(pe,"__esModule",{value:!0});var On=D;function An({cookie:e,kv:t}){return On.createSessionStorage({cookie:e,async createData(r,n){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let s=[...a].map(o=>o.toString(16).padStart(2,"0")).join("");if(!await t.get(s,"json"))return await t.put(s,JSON.stringify(r),{expiration:n?Math.round(n.getTime()/1e3):void 0}),s}},async readData(r){let n=await t.get(r);return n?JSON.parse(n):null},async updateData(r,n,a){await t.put(r,JSON.stringify(n),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(r){await t.delete(r)}})}pe.createWorkersKVSessionStorage=An;/**
 * @remix-run/cloudflare v2.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=pe,r=D,n=dt;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=r.createCookie,e.createCookieSessionStorage=r.createCookieSessionStorage,e.createMemorySessionStorage=r.createMemorySessionStorage,e.createSessionStorage=r.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return n.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return n.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return n.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return n.createSession}}),Object.defineProperty(e,"data",{enumerable:!0,get:function(){return n.data}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return n.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return n.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return n.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return n.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return n.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return n.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return n.redirectDocument}}),Object.defineProperty(e,"replace",{enumerable:!0,get:function(){return n.replace}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return n.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return n.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return n.unstable_parseMultipartFormData}})})(gr);const $n="_contact_1p6je_1",Dn="_form_1p6je_35",Pn="_title_1p6je_59",Nn="_divider_1p6je_119",In="_input_1p6je_195",Mn="_botkiller_1p6je_279",Fn="_button_1p6je_287",Hn="_complete_1p6je_407",Un="_completeTitle_1p6je_429",Ln="_completeText_1p6je_467",zn="_completeButton_1p6je_505",Vn="_formError_1p6je_557",Bn="_formErrorContent_1p6je_581",Jn="_formErrorMessage_1p6je_589",Xn="_formErrorIcon_1p6je_605",Yn="_footer_1p6je_615",_={contact:$n,form:Dn,title:Pn,divider:Nn,input:In,botkiller:Mn,button:Fn,complete:Hn,completeTitle:Un,completeText:Ln,completeButton:zn,formError:Vn,formErrorContent:Bn,formErrorMessage:Jn,formErrorIcon:Xn,footer:Yn},sa=()=>Et({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),ze=512,qn=4096,ia=()=>{const e=E.useRef(),t=ke(""),r=ke(""),n=R.base.durationS,a=$t(),{state:s}=Dt(),o=s==="submitting";return w.jsxs(St,{className:_.contact,children:[w.jsx(z,{unmount:!0,in:!(a!=null&&a.success),timeout:1600,children:({status:i,nodeRef:l})=>w.jsxs(Pt,{unstable_viewTransition:!0,className:_.form,method:"post",ref:l,children:[w.jsx(ve,{className:_.title,"data-status":i,level:3,as:"h1",style:A(R.base.durationXS,n,.3),children:w.jsx(bt,{text:"Say hello",start:i!=="exited",delay:300})}),w.jsx(_t,{className:_.divider,"data-status":i,style:A(R.base.durationXS,n,.4)}),w.jsx(se,{className:_.botkiller,label:"Name",name:"name",maxLength:ze}),w.jsx(se,{required:!0,className:_.input,"data-status":i,style:A(R.base.durationXS,n),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:ze,...t}),w.jsx(se,{required:!0,multiline:!0,className:_.input,"data-status":i,style:A(R.base.durationS,n),autoComplete:"off",label:"Message",name:"message",maxLength:qn,...r}),w.jsx(z,{unmount:!0,in:!o&&(a==null?void 0:a.errors),timeout:J(R.base.durationM),children:({status:u,nodeRef:c})=>{var d,f,p;return w.jsx("div",{className:_.formError,ref:c,"data-status":u,style:W({height:u?(d=e.current)==null?void 0:d.offsetHeight:0}),children:w.jsx("div",{className:_.formErrorContent,ref:e,children:w.jsxs("div",{className:_.formErrorMessage,children:[w.jsx(Be,{className:_.formErrorIcon,icon:"error"}),(f=a==null?void 0:a.errors)==null?void 0:f.email,(p=a==null?void 0:a.errors)==null?void 0:p.message]})})})}}),w.jsx(xe,{className:_.button,"data-status":i,"data-sending":o,style:A(R.base.durationM,n),disabled:o,loading:o,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),w.jsx(z,{unmount:!0,in:a==null?void 0:a.success,children:({status:i,nodeRef:l})=>w.jsxs("div",{className:_.complete,"aria-live":"polite",ref:l,children:[w.jsx(ve,{level:3,as:"h3",className:_.completeTitle,"data-status":i,children:"Message Sent"}),w.jsx(wt,{size:"l",as:"p",className:_.completeText,"data-status":i,style:A(R.base.durationXS),children:"I’ll get back to you within a couple days, sit tight"}),w.jsx(xe,{secondary:!0,iconHoverShift:!0,className:_.completeButton,"data-status":i,style:A(R.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})}),w.jsx(vt,{className:_.footer})]})};function A(e,t=Ee(0),r=1){const n=J(e)*r;return W({delay:Ee((J(t)+n).toFixed(0))})}export{ia as default,sa as meta};
