import{r,j as a}from"./jsx-runtime-e9svsKL-.js";import{u as re,r as te}from"./image-CyAsWJ2Q.js";import{W as ne,O as ae,S as oe,C as se,c as ce,a as ie,t as ue,L as le,b as $,d as de,P as me,M as ve}from"./three-DoHZmhMI.js";import{u as pe,c as fe}from"./heading-CC3zBnSN.js";import{a as ge}from"./animate-QxQwXxDt.js";import"./components-DYXJCFuo.js";import"./index-CmfjIxA9.js";const xe="_carousel_7jtir_3",Ie="_content_7jtir_11",he="_imageWrapper_7jtir_23",_e="_canvasWrapper_7jtir_47",we="_canvas_7jtir_47",be="_placeholder_7jtir_73",ye="_button_7jtir_103",Fe="_nav_7jtir_215",Se="_navButton_7jtir_229",d={carousel:xe,content:Ie,imageWrapper:he,canvasWrapper:_e,canvas:we,placeholder:be,button:ye,nav:Fe,navButton:Se},je=`varying vec2 vUv;\r
uniform sampler2D currentImage;\r
uniform sampler2D nextImage;\r
uniform float dispFactor;\r
uniform float direction;\r
uniform bool reduceMotion;\r
\r
void main() {\r
  if (reduceMotion) {\r
    // Simple crossfade\r
    vec4 _currentImage = texture2D(currentImage, vUv);\r
    vec4 _nextImage = texture2D(nextImage, vUv);\r
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\r
    gl_FragColor = finalTexture;\r
  } else {\r
    // Liquid distortion effect\r
    vec2 uv = vUv;\r
    vec4 _currentImage;\r
    vec4 _nextImage;\r
    float intensity = 0.6;\r
\r
    vec4 orig1 = texture2D(currentImage, uv);\r
    vec4 orig2 = texture2D(nextImage, uv);\r
\r
    vec2 distortedPosition = vec2(\r
      uv.x + direction * (dispFactor * (orig2.r * intensity)),\r
      uv.y + direction * (dispFactor * (orig2 * intensity))\r
    );\r
\r
    vec2 distortedPosition2 = vec2(\r
      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\r
      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\r
    );\r
\r
    _currentImage = texture2D(currentImage, distortedPosition);\r
    _nextImage = texture2D(nextImage, distortedPosition2);\r
\r
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\r
    gl_FragColor = finalTexture;\r
  }\r
}\r
`,Ce=`varying vec2 vUv;\r
\r
void main() {\r
  vUv = uv;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`;function X(i,u,m,_){if(u!==null)return u;const w=m.length,b=(i-1+w)%w,j=(i+1)%w;return _>0?j:b}const We=({width:i,height:u,images:m,placeholder:_,...w})=>{const[b,j]=r.useState(!1),[o,G]=r.useState(0),[y,O]=r.useState(!1),[V,K]=r.useState(!0),[c,J]=r.useState(),[C,H]=r.useState(),R=r.useRef(),M=r.useRef(),D=r.useRef(),f=r.useRef(),g=r.useRef(),F=r.useRef(),s=r.useRef(),x=r.useRef(!1),S=r.useRef(),E=r.useRef(),A=r.useRef(),N=pe(),W=re(R,!0),B=r.useRef(),T=r.useRef(),Q=`Slide ${o+1} of ${m.length}. ${m[o].alt}`;r.useEffect(()=>(b&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""}),[b]),r.useEffect(()=>{const e=[i/-2,i/2,u/2,u/-2,1,1e3];return s.current=new ne({canvas:R.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),F.current=new ae(...e),g.current=new oe,s.current.setPixelRatio(2),s.current.setClearColor(1118481,1),s.current.setSize(i,u),s.current.domElement.style.width="100%",s.current.domElement.style.height="auto",g.current.background=new se(1118481),F.current.position.z=1,()=>{x.current=!1,ce(g.current),ie(s.current)}},[u,i]),r.useEffect(()=>{let e=!0;return W&&!y&&(async()=>{const n=s.current.capabilities.getMaxAnisotropy(),v=m.map(async p=>{const k=p.srcSet?await te(p):p.src,h=await ue.loadAsync(k);return await s.current.initTexture(h),h.colorSpace=le,h.minFilter=$,h.magFilter=$,h.anisotropy=n,h.generateMipmaps=!1,h}),I=await Promise.all(v);e&&(f.current=new de({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:I[0]},nextImage:{type:"t",value:I[1]},reduceMotion:{type:"b",value:N}},vertexShader:Ce,fragmentShader:je,transparent:!1,opacity:1}),D.current=new me(i,u,1),M.current=new ve(D.current,f.current),M.current.position.set(0,0,0),g.current.add(M.current),O(!0),J(I),requestAnimationFrame(()=>{s.current.render(g.current,F.current)}))})(),()=>{e=!1}},[u,m,W,y,N,i]);const U=r.useCallback(({index:e,direction:t=1})=>{if(!c)return;G(e);const{uniforms:n}=f.current;n.nextImage.value=c[e],n.direction.value=t;const v=()=>{n.currentImage.value=c[e],n.dispFactor.value=0,x.current=!1};n.dispFactor.value!==1&&(x.current=!0,ge(n.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:I=>{n.dispFactor.value=I},onComplete:v}))},[c]),l=r.useCallback(({direction:e,index:t=null,...n})=>{if(!y)return;if(x.current){cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>l({direction:e,index:t,...n}));return}const v=X(o,t,c,e);U({index:v,direction:e,...n})},[U,o,y,c]),Y=r.useCallback(e=>{if(e===o)return;const t=e>o?1:-1;l({direction:t,index:e})},[o,l]);r.useEffect(()=>{const e=()=>{const t=R.current.getBoundingClientRect();H(t)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),r.useEffect(()=>{let e;const t=()=>{e=requestAnimationFrame(t),x.current&&s.current.render(g.current,F.current)};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e)}},[]),r.useEffect(()=>{if(_){const e=()=>{K(!1)},t=B.current;return t.addEventListener("transitionend",e),()=>{t&&t.removeEventListener("transitionend",e)}}},[_]);const z=r.useCallback(e=>{if(x.current||!f.current||!c)return;E.current=e;const t=Math.abs(e),n=C.width;S.current=e>0?-1:1;const v=1-(t-n)/n*-1,I=X(o,null,m,S.current),p=f.current.uniforms,k=Math.min(Math.max(v,0),1);p.currentImage.value=c[o],p.nextImage.value=c[I],p.direction.value=S.current,p.dispFactor.value=k,requestAnimationFrame(()=>{s.current.render(g.current,F.current)})},[C,o,m,c]),q=r.useCallback(()=>{if(!f.current)return;const e=f.current.uniforms,t=(1-e.dispFactor.value)*1e3,n=Math.abs(E.current),v=C.width*.2;E.current=0,!x.current&&(n===0||!n||(n>v?l({duration:t,direction:S.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,l({direction:S.current*-1,index:o}))))},[C,o,l]),P=r.useCallback(e=>{z(e.clientX-T.current)},[z]),L=r.useCallback(()=>{j(!1),q(),document.removeEventListener("pointerup",L),document.removeEventListener("pointermove",P)},[P,q]),Z=r.useCallback(e=>{T.current=e.clientX,j(!0),document.addEventListener("pointermove",P),document.addEventListener("pointerup",L)},[P,L]),ee=e=>{switch(e.key){case"ArrowRight":l({direction:1});break;case"ArrowLeft":l({direction:-1});break}};return a.jsxs("div",{className:d.carousel,onKeyDown:ee,...w,children:[a.jsxs("div",{className:d.content,children:[a.jsxs("div",{className:d.imageWrapper,"data-dragging":b,onPointerDown:Z,style:fe({aspectRatio:`${i} / ${u}`}),children:[a.jsx("div",{"aria-atomic":!0,className:d.canvasWrapper,"aria-live":"polite","aria-label":Q,role:"img",children:a.jsx("canvas",{"aria-hidden":!0,className:d.canvas,ref:R})}),V&&_&&a.jsx("img",{"aria-hidden":!0,className:d.placeholder,"data-loaded":y&&!!c,src:_,ref:B,alt:"",role:"presentation"})]}),a.jsx("button",{className:d.button,"data-prev":!0,"aria-label":"Previous slide",onClick:()=>l({direction:-1}),children:a.jsx(Re,{})}),a.jsx("button",{className:d.button,"data-next":!0,"aria-label":"Next slide",onClick:()=>l({direction:1}),children:a.jsx(Pe,{})})]}),a.jsx("div",{className:d.nav,children:m.map((e,t)=>a.jsx("button",{className:d.navButton,onClick:()=>Y(t),"aria-label":`Jump to slide ${t+1}`,"aria-pressed":t===o},e.alt))})]})};function Re(){return a.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a.jsx("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})})}function Pe(){return a.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a.jsx("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"})})}export{We as Carousel};
